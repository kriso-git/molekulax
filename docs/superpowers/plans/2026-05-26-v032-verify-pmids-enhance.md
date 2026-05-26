# v0.32 verify-pmids enhance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor `scripts/verify-pmids.mjs` with 4 enhancements (classifyOverlap pure-fn extract, STATUS constants, `--batch` mode for NCBI esummary, RU-bracket strip in normalize) — cohesive tooling-polish that improves future PMID-mega-fix workflow performance ~25-30× lib-wide.

**Architecture:** Single-file refactor (~80-100 LOC net change) plus one new test file. Four task slices: (S2) extract `classifyOverlap()` to enable offline unit testing, (S1) replace 6 status string-literals with `STATUS` frozen-object, (S3) add `--batch` CLI flag with 2-pass walk + 50-PMID chunked esummary, (S4) extend `normalize()` to strip RU-brackets from cited titles before tokenization. No data files, no `src/`, no Vercel.

**Tech Stack:** Node.js ESM modules, NCBI eutils REST API (esearch + esummary), zero new dependencies. Test pattern matches v0.31 `verify-pmids-detection.test.mjs` (offline assertions, simple pass/fail counter).

---

## File Structure

**Files modified:**
- `scripts/verify-pmids.mjs` — single-file enhance for all 4 tasks (~80-100 LOC net diff)

**Files created:**
- `scripts/test/verify-pmids-classify.test.mjs` — 8-case offline unit test for `classifyOverlap()`

**Files unchanged:**
- `scripts/test/verify-pmids-detection.test.mjs` — v0.31 12-case `isHuRuTitle()` test continues unchanged
- All entry data files (`src/data/libraries/*/entries/{hu,en,pl}/*.js`)
- All `src/` source code, build config, Vercel deploy pipeline

**Branch context:**
- Worktree: `.worktrees/feat-v032-verify-pmids-enhance/` (created from master `b87d918`)
- Branch: `feat/v032-verify-pmids-enhance`
- Spec already committed: `a78dfc4` (`chore(superpowers): v0.32 verify-pmids enhance design spec`)
- Plan commit (this file) will follow as separate commit

---

## Task 1: Extract `classifyOverlap()` pure-fn with offline TDD (S2)

**Files:**
- Modify: `scripts/verify-pmids.mjs` (add STATUS placeholder + classifyOverlap export, refactor main-loop classify section)
- Create: `scripts/test/verify-pmids-classify.test.mjs`

### Why this task first

`classifyOverlap()` is the core pure-fn that other tasks consume. Extracting it FIRST gives us an offline-testable foundation. Subsequent tasks (S1 constants, S3 batch mode, S4 RU-normalize) all touch code that flows through this function — having it isolated and unit-tested reduces refactor risk.

### Steps

- [ ] **Step 1: Add `STATUS` frozen-object near top of script (line ~31, before `LIBRARIES` constant)**

Why we add `STATUS` here even though it's officially Task 2: `classifyOverlap()` must return `STATUS.OK` / `STATUS.MAYBE_FP_HU` etc. — we need the constant defined for the test to import. Task 2 will then complete the migration in `main()`.

```js
export const STATUS = Object.freeze({
  OK: 'OK',
  MISMATCH: 'MISMATCH',
  NOT_FOUND: 'NOT_FOUND',
  MAYBE_FP_HU: 'MAYBE_FP_HU',
  MAYBE_FP_RU: 'MAYBE_FP_RU',
  NETWORK_ERR: 'NETWORK_ERR',
})
```

Insert after line `const langs = ['hu', 'en', 'pl']` (existing constants block) and before `function normalize(s) {`.

- [ ] **Step 2: Add `classifyOverlap()` export after `overlapRatio()` (line ~49)**

```js
export function classifyOverlap(citedTitle, realTitle) {
  const lang = isHuRuTitle(citedTitle)
  const threshold = lang ? 0.10 : 0.25
  const ratio = overlapRatio(citedTitle, realTitle)
  if (ratio >= threshold) {
    return { status: STATUS.OK, ratio, langTag: lang || null }
  }
  if (lang === 'hu') return { status: STATUS.MAYBE_FP_HU, ratio, langTag: 'hu' }
  if (lang === 'ru') return { status: STATUS.MAYBE_FP_RU, ratio, langTag: 'ru' }
  return { status: STATUS.MISMATCH, ratio, langTag: null }
}
```

Insert immediately after the existing `overlapRatio(a, b)` function (around line 49 in current file), before `export function isHuRuTitle(s)`.

- [ ] **Step 3: Write the failing test `scripts/test/verify-pmids-classify.test.mjs`**

```js
// Pure-function offline test for classifyOverlap()
// Run: node scripts/test/verify-pmids-classify.test.mjs
import { classifyOverlap, STATUS } from '../verify-pmids.mjs'

const cases = [
  // OK: EN-default, high overlap
  {
    cited: 'Effects of BPC-157 on tissue healing review',
    real: 'Effects of BPC-157 on tissue healing systematic review',
    expect: STATUS.OK,
    langTag: null,
  },
  // MISMATCH: EN-default, low overlap
  {
    cited: 'Effects of GHK-Cu on collagen synthesis',
    real: 'Rosuvastatin pharmacokinetics in elderly patients',
    expect: STATUS.MISMATCH,
    langTag: null,
  },
  // MAYBE_FP_HU: HU diacritics + low overlap
  {
    cited: 'Háromszoros inkretinreceptor-agonista hatása',
    real: 'Triple incretin receptor agonist effect on obesity',
    expect: STATUS.MAYBE_FP_HU,
    langTag: 'hu',
  },
  // OK [hu-loose]: HU + overlap >= 0.10
  {
    cited: 'Hatékony BPC-157 sports medicine tissue healing review',
    real: 'BPC-157 sports medicine tissue healing review evidence',
    expect: STATUS.OK,
    langTag: 'hu',
  },
  // MAYBE_FP_RU: bracketed + low overlap (no S4 strip yet)
  {
    cited: '[Trojnoi inkretinagonist deistvie pri obezitete]',
    real: 'Triple incretin agonist effect on obesity',
    expect: STATUS.MAYBE_FP_RU,
    langTag: 'ru',
  },
  // OK [ru-loose]: bracketed + overlap >= 0.10 (without S4, brackets keep tokens whole-enough)
  // NOTE: pre-S4 token-overlap of '[BPC-157 sports medicine review systematic clinical]' vs
  // 'BPC-157 sports medicine systematic review clinical' — the tokens() helper filters
  // length>=4 after the normalize() punct-strip, which already converts '[' to space.
  // So 'sports', 'medicine', 'review', 'systematic', 'clinical' tokens all overlap.
  {
    cited: '[BPC-157 sports medicine review systematic clinical evidence]',
    real: 'BPC-157 sports medicine systematic review clinical evidence',
    expect: STATUS.OK,
    langTag: 'ru',
  },
  // MISMATCH: empty cited (overlap 0, no lang detect)
  {
    cited: '',
    real: 'Real PubMed paper title here',
    expect: STATUS.MISMATCH,
    langTag: null,
  },
  // MISMATCH: EN unrelated short tokens
  {
    cited: 'Completely random unrelated text fluff here today now',
    real: 'Different paper subject matter entirely now today fresh',
    expect: STATUS.MISMATCH,
    langTag: null,
  },
]

let pass = 0,
  fail = 0
for (const c of cases) {
  const got = classifyOverlap(c.cited, c.real)
  const statusOk = got.status === c.expect
  const langOk = got.langTag === c.langTag
  if (statusOk && langOk) {
    console.log(
      `  ✅ "${c.cited.slice(0, 50)}" → ${got.status} ${got.langTag || ''} (ratio ${(got.ratio * 100).toFixed(0)}%)`,
    )
    pass++
  } else {
    console.log(
      `  ❌ "${c.cited.slice(0, 50)}" → expected ${c.expect}/${c.langTag}, got ${got.status}/${got.langTag} (ratio ${(got.ratio * 100).toFixed(0)}%)`,
    )
    fail++
  }
}
console.log(`\n${pass}/${pass + fail} passed`)
if (fail > 0) process.exit(1)
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
node scripts/test/verify-pmids-classify.test.mjs
```

Expected output:
```
  ✅ "Effects of BPC-157 on tissue healing review" → OK  (ratio XX%)
  ✅ "Effects of GHK-Cu on collagen synthesis" → MISMATCH  (ratio XX%)
  ... (all 8 cases) ...

8/8 passed
```

Exit code 0.

**If any test fails:** debug by adding `console.log({cited: c.cited, got})` inside the loop to see actual ratios. Common cause: ratio threshold edge — adjust the test fixture's `cited`/`real` strings to land cleanly above or below 0.10/0.25.

- [ ] **Step 5: Refactor `main()` classify block to use `classifyOverlap()`**

Locate the existing block (current lines 162-193 in verify-pmids.mjs):

```js
        const detectedLang = isHuRuTitle(study.title)
        const threshold = detectedLang ? 0.10 : 0.25
        const ratio = overlapRatio(study.title, result.title)

        if (ratio >= threshold) {
          const langTag = detectedLang ? ` [${detectedLang.toUpperCase()}-loose]` : ''
          console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)${langTag}`)
        } else if (detectedLang) {
          const statusTag = detectedLang === 'hu' ? 'MAYBE_FP_HU' : 'MAYBE_FP_RU'
          console.log(`  ⚠️  ${libId}/${slug}: PMID ${pmid} ${statusTag} (manual review)`)
          console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
          console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: statusTag, ratio })
          // Skip suggest mode on MAYBE_FP — these are not fabrications
        } else {
          console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} MISMATCH`)
          console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
          console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: 'MISMATCH' })
          if (suggestMode) {
            const cands = await suggestCandidates(study.title || '', [pmid])
            if (cands.length === 0) {
              console.log(`     candidates: (none)`)
            } else {
              console.log(`     candidates:`)
              for (const c of cands.slice(0, 5)) {
                console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
              }
            }
            await new Promise(r => setTimeout(r, 300))
          }
        }
```

Replace with:

```js
        const { status, ratio, langTag } = classifyOverlap(study.title, result.title)

        if (status === STATUS.OK) {
          const tag = langTag ? ` [${langTag.toUpperCase()}-loose]` : ''
          console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)${tag}`)
        } else if (status === STATUS.MAYBE_FP_HU || status === STATUS.MAYBE_FP_RU) {
          console.log(`  ⚠️  ${libId}/${slug}: PMID ${pmid} ${status} (manual review)`)
          console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
          console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status, ratio })
          // Skip suggest mode on MAYBE_FP — these are not fabrications
        } else {
          console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} MISMATCH`)
          console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
          console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: STATUS.MISMATCH })
          if (suggestMode) {
            const cands = await suggestCandidates(study.title || '', [pmid])
            if (cands.length === 0) {
              console.log(`     candidates: (none)`)
            } else {
              console.log(`     candidates:`)
              for (const c of cands.slice(0, 5)) {
                console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
              }
            }
            await new Promise(r => setTimeout(r, 300))
          }
        }
```

Net change: 15-line block → ~25-line block (slightly longer due to STATUS.X references and split conditionals, but cleaner).

- [ ] **Step 6: Sanity-check by running per-entry verify (network call required)**

```bash
node scripts/verify-pmids.mjs --entry retatrutide
```

Expected: 3 PMIDs all OK, exit 0. Output format unchanged from v0.31 baseline.

- [ ] **Step 7: Verify v0.31 isHuRuTitle test still passes**

```bash
node scripts/test/verify-pmids-detection.test.mjs
```

Expected: `12/12 passed`, exit 0.

- [ ] **Step 8: Commit Task 1**

```bash
git add scripts/verify-pmids.mjs scripts/test/verify-pmids-classify.test.mjs
git commit -m "$(cat <<'EOF'
feat(scripts): extract classifyOverlap pure-fn + 8-case offline unit test

Lifts inline token-overlap + threshold + lang-detect logic from main()
into an offline-testable pure function classifyOverlap(cited, real)
returning {status, ratio, langTag}.

Also introduces STATUS frozen-object early (full migration in next commit).

Test: 8 cases covering OK/MISMATCH/MAYBE_FP_HU/MAYBE_FP_RU + edge cases
(empty cited, HU+loose-overlap-OK, RU+loose-overlap-OK).

Acceptance: 8/8 unit-test PASS, v0.31 isHuRuTitle test still 12/12 PASS,
per-entry verify (retatrutide) unchanged output.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Migrate remaining status strings to `STATUS` constants (S1)

**Files:**
- Modify: `scripts/verify-pmids.mjs` (5-6 remaining status string-literals)

### Why this task second

Task 1 already added the `STATUS` frozen-object declaration and used it in the classify-block refactor. This task completes the migration: NOT_FOUND issue-push, summary-grouping iter arrays, status-tag printf strings.

### Steps

- [ ] **Step 1: Replace `'NOT_FOUND'` literal in NOT_FOUND issue-push**

In current `main()`, find the line (around line 147):

```js
          issues.push({ libId, slug, pmid, citedTitle: study.title, status: 'NOT_FOUND' })
```

Replace with:

```js
          issues.push({ libId, slug, pmid, citedTitle: study.title, status: STATUS.NOT_FOUND })
```

- [ ] **Step 2: Replace summary iteration arrays**

Find (around lines 213, 228):

```js
      for (const status of ['MISMATCH', 'NOT_FOUND']) {
```

```js
      for (const status of ['MAYBE_FP_HU', 'MAYBE_FP_RU']) {
```

Replace with:

```js
      for (const status of [STATUS.MISMATCH, STATUS.NOT_FOUND]) {
```

```js
      for (const status of [STATUS.MAYBE_FP_HU, STATUS.MAYBE_FP_RU]) {
```

- [ ] **Step 3: Replace `blocking` and `maybeFp` filter literals**

Find (around line 200):

```js
  const blocking = issues.filter(i => i.status === 'MISMATCH' || i.status === 'NOT_FOUND')
  const maybeFp = issues.filter(i => i.status === 'MAYBE_FP_HU' || i.status === 'MAYBE_FP_RU')
```

Replace with:

```js
  const blocking = issues.filter(i => i.status === STATUS.MISMATCH || i.status === STATUS.NOT_FOUND)
  const maybeFp = issues.filter(i => i.status === STATUS.MAYBE_FP_HU || i.status === STATUS.MAYBE_FP_RU)
```

- [ ] **Step 4: Replace `NETWORK_ERR` console.log literal**

Find (around line 142):

```js
          console.log(`  NETWORK_ERR ${libId}/${slug}: PMID ${pmid} (${result.error})`)
```

This one keeps the literal in the log message (user-facing label), but if there's a programmatic reference elsewhere, ensure it uses `STATUS.NETWORK_ERR`. The current code doesn't push to issues[] for NETWORK_ERR, so no replacement needed in the issue object — only the console label, which stays as string literal for readability.

**Verification:** grep should now show no remaining bare status-string literals in main():

```bash
grep -n "'OK'\|'MISMATCH'\|'NOT_FOUND'\|'MAYBE_FP_HU'\|'MAYBE_FP_RU'" scripts/verify-pmids.mjs
```

Expected: zero matches in `main()` body (matches only inside STATUS object declaration are OK).

- [ ] **Step 5: Run both unit tests**

```bash
node scripts/test/verify-pmids-classify.test.mjs
node scripts/test/verify-pmids-detection.test.mjs
```

Expected: 8/8 + 12/12 = all PASS.

- [ ] **Step 6: Sanity-check per-entry verify**

```bash
node scripts/verify-pmids.mjs --entry retatrutide
```

Expected: 3 PMIDs all OK, output identical to Task 1 sanity-check.

- [ ] **Step 7: Commit Task 2**

```bash
git add scripts/verify-pmids.mjs
git commit -m "$(cat <<'EOF'
chore(scripts): STATUS constants for verify-pmids status strings

Migrates remaining 5-6 bare status string-literals ('NOT_FOUND',
'MISMATCH', 'MAYBE_FP_HU', 'MAYBE_FP_RU') to STATUS.X references for
typo-safety and clarity post-classifyOverlap refactor. STATUS frozen-object
was introduced in previous commit alongside classifyOverlap.

NETWORK_ERR console-label kept as string-literal (user-facing message).

Acceptance: both unit tests still pass, per-entry verify unchanged.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Add `--batch` CLI flag with NCBI batch-esummary mode (S3)

**Files:**
- Modify: `scripts/verify-pmids.mjs` (add `lookupBatched()` fn, `--batch` flag parse, 2-pass walk path in `main()`)

### Why this task third

This is the largest behavioral addition. Done after refactor + constants so the 2-pass walk uses the new `classifyOverlap()` pure-fn and `STATUS.X` constants — cleaner and easier to verify.

### Steps

- [ ] **Step 1: Add `--batch` CLI flag parse near other CLI flags**

Find (around line 29):

```js
const strictMode = args.includes('--strict')
```

Add immediately below:

```js
const batchMode = args.includes('--batch')
```

- [ ] **Step 2: Add `lookupBatched()` function after `lookupPmid()` (around line 103)**

```js
async function lookupBatched(pmids) {
  const result = new Map()
  for (let i = 0; i < pmids.length; i += 50) {
    const chunk = pmids.slice(i, i + 50)
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${chunk.join(',')}&retmode=json`
    try {
      const res = await fetch(url)
      if (!res.ok) {
        for (const pmid of chunk) result.set(pmid, { exists: false, error: `HTTP ${res.status}` })
        continue
      }
      const json = await res.json()
      for (const pmid of chunk) {
        const rec = json.result?.[pmid]
        if (!rec || rec.error) {
          result.set(pmid, { exists: false, error: rec?.error || 'no record' })
        } else {
          result.set(pmid, {
            exists: true,
            title: rec.title,
            authors: (rec.authors || []).map(a => a.name).join(', '),
          })
        }
      }
    } catch (err) {
      for (const pmid of chunk) result.set(pmid, { networkError: true, error: err.message })
    }
    if (i + 50 < pmids.length) await new Promise(r => setTimeout(r, 700))
  }
  return result
}
```

Insert immediately after the existing `async function lookupPmid(pmid)` block.

- [ ] **Step 3: Refactor `main()` to support 2-pass walk in batch mode**

The current `main()` is a single-pass loop that processes each entry's studies inline. In batch mode we need 2 passes:
- **Pass 1:** collect all `{libId, slug, pmid, study}` tuples into an array, deduped.
- **Pass 2:** call `lookupBatched(allPmids)` once, then iterate tuples and classify each using the batch-result Map.

Restructure `main()` as follows. **The full new main() body is shown below — replace the entire `async function main()` block.**

```js
async function main() {
  const issues = []
  const seen = new Set()

  // Pass 1: gather all study tuples across libs/entries (always, regardless of mode)
  const allStudies = []
  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries')
    if (!existsSync(entriesDir)) continue
    const perLang = existsSync(resolve(entriesDir, 'hu'))
    if (!perLang) continue

    const lang = 'hu'
    const langDir = resolve(entriesDir, lang)
    const files = readdirSync(langDir).filter(f => f.endsWith('.js'))

    for (const file of files) {
      const slug = file.replace(/\.js$/, '')
      if (entryFilter && slug !== entryFilter) continue
      const entryPath = resolve(langDir, file)
      const mod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
      const entry = mod.default

      const studies = Array.isArray(entry?.studies) ? entry.studies : []
      for (const study of studies) {
        if (!study?.pmid) continue
        const pmid = String(study.pmid).trim()
        if (!/^\d+$/.test(pmid)) {
          console.log(`  ⚠ ${libId}/${slug} non-numeric PMID: "${pmid}"`)
          continue
        }
        const dedupeKey = `${pmid}::${study.title}`
        if (seen.has(dedupeKey)) continue
        seen.add(dedupeKey)
        allStudies.push({ libId, slug, pmid, study })
      }
    }
  }

  // Pass 2: lookup + classify
  let batchMap = null
  if (batchMode) {
    const uniquePmids = [...new Set(allStudies.map(s => s.pmid))]
    console.log(`Batch mode: looking up ${uniquePmids.length} unique PMIDs in ${Math.ceil(uniquePmids.length / 50)} chunk(s)...`)
    batchMap = await lookupBatched(uniquePmids)
  }

  for (const { libId, slug, pmid, study } of allStudies) {
    const result = batchMode ? batchMap.get(pmid) : await lookupPmid(pmid)

    if (result.networkError) {
      console.log(`  NETWORK_ERR ${libId}/${slug}: PMID ${pmid} (${result.error})`)
      continue
    }
    if (!result.exists) {
      console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} NOT_FOUND (cited as "${study.title?.slice(0, 60)}")`)
      issues.push({ libId, slug, pmid, citedTitle: study.title, status: STATUS.NOT_FOUND })
      if (suggestMode) {
        const cands = await suggestCandidates(study.title || '', [pmid])
        if (cands.length === 0) {
          console.log(`     candidates: (none)`)
        } else {
          console.log(`     candidates:`)
          for (const c of cands.slice(0, 5)) {
            console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
          }
        }
        await new Promise(r => setTimeout(r, 300))
      }
      continue
    }

    const { status, ratio, langTag } = classifyOverlap(study.title, result.title)

    if (status === STATUS.OK) {
      const tag = langTag ? ` [${langTag.toUpperCase()}-loose]` : ''
      console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)${tag}`)
    } else if (status === STATUS.MAYBE_FP_HU || status === STATUS.MAYBE_FP_RU) {
      console.log(`  ⚠️  ${libId}/${slug}: PMID ${pmid} ${status} (manual review)`)
      console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
      console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
      issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status, ratio })
    } else {
      console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} MISMATCH`)
      console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
      console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
      issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: STATUS.MISMATCH })
      if (suggestMode) {
        const cands = await suggestCandidates(study.title || '', [pmid])
        if (cands.length === 0) {
          console.log(`     candidates: (none)`)
        } else {
          console.log(`     candidates:`)
          for (const c of cands.slice(0, 5)) {
            console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
          }
        }
        await new Promise(r => setTimeout(r, 300))
      }
    }
    // Rate limit only in per-PMID mode (batch mode already paused between chunks)
    if (!batchMode) await new Promise(r => setTimeout(r, 400))
  }

  const blocking = issues.filter(i => i.status === STATUS.MISMATCH || i.status === STATUS.NOT_FOUND)
  const maybeFp = issues.filter(i => i.status === STATUS.MAYBE_FP_HU || i.status === STATUS.MAYBE_FP_RU)

  if (issues.length === 0) {
    console.log('\n✅ All PMIDs verified.')
  } else {
    if (blocking.length > 0) {
      console.log(`\n❌ ${blocking.length} issue(s) found:`)
      const byStatus = {}
      for (const i of blocking) {
        if (!byStatus[i.status]) byStatus[i.status] = []
        byStatus[i.status].push(i)
      }
      for (const status of [STATUS.MISMATCH, STATUS.NOT_FOUND]) {
        if (!byStatus[status]) continue
        console.log(`  ${status} (${byStatus[status].length}):`)
        for (const i of byStatus[status]) {
          console.log(`    ${i.libId}/${i.slug} PMID ${i.pmid}`)
        }
      }
    }
    if (maybeFp.length > 0) {
      console.log(`\n⚠️  ${maybeFp.length} MAYBE_FP item(s) — manual review:`)
      const byStatus = {}
      for (const i of maybeFp) {
        if (!byStatus[i.status]) byStatus[i.status] = []
        byStatus[i.status].push(i)
      }
      for (const status of [STATUS.MAYBE_FP_HU, STATUS.MAYBE_FP_RU]) {
        if (!byStatus[status]) continue
        console.log(`  ${status} (${byStatus[status].length}):`)
        for (const i of byStatus[status]) {
          const ratioStr = i.ratio != null ? ` (ratio ${(i.ratio * 100).toFixed(0)}%)` : ''
          console.log(`    ${i.libId}/${i.slug} PMID ${i.pmid}${ratioStr}`)
        }
      }
    }
  }

  const shouldExit1 = blocking.length > 0 || (strictMode && maybeFp.length > 0)
  if (shouldExit1) process.exit(1)
}
```

**Key changes vs. previous `main()`:**
1. Pass 1 now ALWAYS gathers tuples into `allStudies[]` (not just batch mode — simplifies code path).
2. Pass 2 chooses lookup mode based on `batchMode` flag.
3. Rate-limit `setTimeout(400)` skipped in batch mode (already paused between chunks).
4. Echo line `Batch mode: looking up N unique PMIDs in M chunk(s)...` for user feedback.

- [ ] **Step 4: Update header docstring to document `--batch` flag**

Find the existing docstring at top of file (lines 1-16). Update to mention `--batch`:

```js
// Verify every `pmid` in every entry's `studies[]` array via the NCBI eutils
// esummary API. Cross-checks the cited title against the actual PubMed title
// (token-overlap heuristic). Flags PMIDs that don't exist, return wrong-paper,
// or match a paper whose title bears no resemblance to the cited one.
//
// Run: node scripts/verify-pmids.mjs [--lib <id>] [--entry <slug>] [--suggest] [--strict] [--batch]
//
// Output: per-PMID line with status — OK / MISMATCH / NOT_FOUND / MAYBE_FP_HU /
// MAYBE_FP_RU / NETWORK_ERR. MAYBE_FP_HU and MAYBE_FP_RU are flagged when the
// cited title contains Hungarian diacritics ([áéíóöőúüű]) or is fully wrapped
// in brackets ([Russian-translated]), respectively, and the token-overlap with
// the real PubMed title falls below the loose threshold (0.10) — these need
// manual review, not automatic fabrication-rejection.
//
// --batch: opt-in mode for lib-wide runs. Fetches up to 50 PMIDs per esummary
// URL with 700ms pause between chunks, ~25-30x faster than per-PMID mode.
// Default (no flag) keeps per-PMID lookup with 400ms rate-limit (backward-compat).
//
// Exits 1 if any MISMATCH or NOT_FOUND found. With --strict, MAYBE_FP_HU/RU
// also exit 1.
```

- [ ] **Step 5: Sanity-check per-entry verify in default mode**

```bash
node scripts/verify-pmids.mjs --entry retatrutide
```

Expected: 3 PMIDs all OK, no "Batch mode:" echo, exit 0.

- [ ] **Step 6: Sanity-check per-entry verify in --batch mode**

```bash
node scripts/verify-pmids.mjs --entry retatrutide --batch
```

Expected:
```
Batch mode: looking up 3 unique PMIDs in 1 chunk(s)...
  ✅ peptides/retatrutide: PMID 41090431 OK (overlap XX%)
  ✅ peptides/retatrutide: PMID 40353578 OK (overlap XX%)
  ✅ peptides/retatrutide: PMID 39616281 OK (overlap XX%)

✅ All PMIDs verified.
```

Exit 0. Note: actual PMID list for retatrutide may differ from the example above — just verify all PMIDs come back OK with `--batch` echo present.

- [ ] **Step 7: Lib-wide pharmaceutical smoke in batch mode**

```bash
time node scripts/verify-pmids.mjs --lib pharmaceutical --batch
```

Expected:
- Echo: `Batch mode: looking up ~100 unique PMIDs in 2-3 chunk(s)...`
- Completion in <60 seconds (vs ~7 min per-PMID baseline)
- Result: all OK, exit 0
- All ~98-100 PMIDs across 22 entries reported OK

If completion takes longer than 60s, investigate: NCBI eutils latency varies — anything under 2 minutes is still acceptable.

- [ ] **Step 8: Both unit tests still pass**

```bash
node scripts/test/verify-pmids-classify.test.mjs
node scripts/test/verify-pmids-detection.test.mjs
```

Expected: 8/8 + 12/12 PASS.

- [ ] **Step 9: Commit Task 3**

```bash
git add scripts/verify-pmids.mjs
git commit -m "$(cat <<'EOF'
feat(scripts): add --batch CLI flag for lib-wide esummary lookup

Opt-in mode that fetches up to 50 PMIDs per NCBI esummary URL with 700ms
pause between chunks (~25-30x faster than per-PMID mode for lib-wide
runs). Refactors main() as 2-pass walk: Pass 1 gathers all study tuples
into allStudies[] (deduped by pmid+citedTitle), Pass 2 either bulk-loads
via lookupBatched() or falls back to per-PMID lookupPmid().

Default (no flag) keeps per-PMID lookup with 400ms rate-limit unchanged
(backward-compat).

Acceptance: lib-wide pharmaceutical --batch completes in <60s (vs ~7 min
baseline), all 100 PMIDs reported OK, both unit tests still pass.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: RU-bracket strip in `normalize()` (S4)

**Files:**
- Modify: `scripts/verify-pmids.mjs` (3-line extension to `normalize()`)

### Why this task last

Smallest behavioral change. After refactor + new feature, this finishing-touch raises token-overlap ratios for legitimate RU-cited matches, reducing manual-review load on MAYBE_FP_RU items.

### Steps

- [ ] **Step 1: Extend `normalize()` to strip RU-brackets when detected**

Find the current `normalize()` function (around line 34):

```js
function normalize(s) {
  return (s || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}
```

Replace with:

```js
function normalize(s) {
  let str = (s || '')
  // S4: strip RU-bracket wrapper before tokenization, so '[Russian title]'
  // tokens aren't prefixed/suffixed with brackets that survive punct-strip
  // until after the inner content is already counted as malformed.
  if (isHuRuTitle(str) === 'ru') {
    str = str.trim().slice(1, -1)
  }
  return str.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}
```

**Critical:** `isHuRuTitle()` must be called BEFORE the slice. The function `isHuRuTitle()` is defined later in the file (around line 51), but JavaScript hoists function declarations — `function isHuRuTitle(s)` is hoisted to module-top so this forward-reference is safe. Verify by reading current `verify-pmids.mjs` lines 34 and 51-56.

- [ ] **Step 2: End-to-end smoke with classifyOverlap RU-test fixture**

Run the existing unit test to verify the RU-bracketed case `'[BPC-157 sports medicine review systematic clinical evidence]'` still classifies as OK (post-S4, the strip should make the overlap even HIGHER than before, so the OK threshold is comfortably exceeded):

```bash
node scripts/test/verify-pmids-classify.test.mjs
```

Expected: 8/8 PASS. If any RU-case fails (e.g., the MAYBE_FP_RU case now produces OK due to higher post-strip ratio), update the fixture to use a more genuinely-low-overlap RU-translated title.

**If MAYBE_FP_RU case now classifies as OK after S4:**

The case is:
```js
{ cited: '[Trojnoi inkretinagonist deistvie pri obezitete]', real: 'Triple incretin agonist effect on obesity', expect: STATUS.MAYBE_FP_RU, langTag: 'ru' }
```

Post-S4, the strip removes `[` and `]` from `cited`. After lowercase + punct-strip:
- Pre-S4 tokens: `trojnoi`, `inkretinagonist`, `deistvie`, `obezitete` (all >=4 chars, but transliterated Russian, none of which overlap with English)
- Post-S4 tokens: same (the strip doesn't translate Russian — token-overlap with EN is still 0)

So this case should STILL be MAYBE_FP_RU after S4. Good.

The other RU case (`'[BPC-157 sports medicine review systematic clinical evidence]'`):
- Pre-S4 tokens: `bpc-157` (filtered by length>=4), `sports`, `medicine`, `review`, `systematic`, `clinical`, `evidence` (brackets stripped by punct-strip anyway)
- Post-S4 tokens: identical (brackets stripped earlier, but final result is the same)

So both RU cases should preserve their pre-S4 classifications. The benefit of S4 manifests when the RU-cited title has subtle interaction with the tokenizer that the bracket-removal-before-normalize fixes — most commonly when `[` or `]` adjacency to other characters creates "wrong" tokens.

If any test fails, debug by logging `tokens(normalize(c.cited))` and `tokens(normalize(c.real))` to see actual token sets.

- [ ] **Step 3: Per-entry verify network smoke**

```bash
node scripts/verify-pmids.mjs --entry retatrutide
node scripts/verify-pmids.mjs --entry retatrutide --batch
```

Both: 3 PMIDs OK, exit 0.

- [ ] **Step 4: Lib-wide regression sweep (no flags)**

```bash
node scripts/verify-pmids.mjs --lib pharmaceutical
```

Expected: 100 PMIDs all OK, exit 0. (Slow — ~7 min — but this confirms no regression in per-PMID mode.)

- [ ] **Step 5: Lib-wide regression sweep (--batch)**

```bash
time node scripts/verify-pmids.mjs --batch
```

Expected: all 4 libs / 407 PMIDs all OK, exit 0, completion in <2 minutes.

- [ ] **Step 6: Both unit tests still pass**

```bash
node scripts/test/verify-pmids-classify.test.mjs
node scripts/test/verify-pmids-detection.test.mjs
```

Expected: 8/8 + 12/12 PASS.

- [ ] **Step 7: Commit Task 4**

```bash
git add scripts/verify-pmids.mjs
git commit -m "$(cat <<'EOF'
feat(scripts): normalize() strips RU brackets before tokenization

Extends normalize() with a 3-line addition: when isHuRuTitle(s) detects an
RU-bracketed title ([Russian title]), strips the wrapping '[' and ']' before
applying the lowercase + punct-strip + whitespace-collapse pipeline.

Effect: genuine RU-cited title-real-title pairs that share English tokens
(e.g., transliterated drug names, scientific terms) achieve higher
token-overlap ratios post-S4, classifying more cleanly as OK[ru-loose]
instead of MAYBE_FP_RU.

Strip applies ONLY to titles where isHuRuTitle(s) === 'ru' (full-string
'^\[.+\]$' regex). Real PubMed titles are never bracketed in eutils
responses, so the strip never affects realTitle.

Acceptance: 8/8 classifyOverlap unit tests pass, 12/12 isHuRuTitle tests
pass, lib-wide regression (--batch and per-PMID) both verify clean across
4 lib × 189 entries / 407 PMIDs.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Plan doc commit + final verification

**Files:**
- Add: `docs/superpowers/plans/2026-05-26-v032-verify-pmids-enhance.md` (this file)

### Steps

- [ ] **Step 1: Stage plan doc**

```bash
git add docs/superpowers/plans/2026-05-26-v032-verify-pmids-enhance.md
```

- [ ] **Step 2: Commit plan doc**

```bash
git commit -m "$(cat <<'EOF'
chore(superpowers): v0.32 verify-pmids enhance implementation plan

5-task TDD plan covering 4 enhancements:
- Task 1 (S2): classifyOverlap pure-fn extract + 8-case unit test
- Task 2 (S1): STATUS frozen-object constants migration
- Task 3 (S3): --batch CLI flag + lookupBatched + 2-pass walk
- Task 4 (S4): normalize() RU-bracket strip
- Task 5: this plan doc commit

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Verify full branch state**

```bash
git log --oneline master..HEAD
```

Expected output:
```
<hash5> chore(superpowers): v0.32 verify-pmids enhance implementation plan
<hash4> feat(scripts): normalize() strips RU brackets before tokenization
<hash3> feat(scripts): add --batch CLI flag for lib-wide esummary lookup
<hash2> chore(scripts): STATUS constants for verify-pmids status strings
<hash1> feat(scripts): extract classifyOverlap pure-fn + 8-case offline unit test
a78dfc4 chore(superpowers): v0.32 verify-pmids enhance design spec
```

6 commits ahead of master.

- [ ] **Step 4: Final regression sweep — all unit tests + lib-wide batch**

```bash
node scripts/test/verify-pmids-classify.test.mjs && \
node scripts/test/verify-pmids-detection.test.mjs && \
node scripts/verify-pmids.mjs --batch
```

Expected: 8/8 + 12/12 + 407/407 OK + exit 0.

- [ ] **Step 5: Verify `npm run build` still passes (no Vercel changes, but build-validator runs)**

```bash
npm run build
```

Expected: validator PASS 4 lib × 189 entries, Vite build PASS ~5-8 seconds, bundle unchanged.

---

## Task 6: Merge to master + tag + push

**Files:** No file changes — git workflow only.

### Steps

- [ ] **Step 1: Verify clean working tree in worktree**

```bash
git status
```

Expected: `working tree clean`, branch `feat/v032-verify-pmids-enhance`, 6 commits ahead.

- [ ] **Step 2: Switch to master in main repo (NOT worktree)**

```bash
cd /e/Website\ Biz/molekulax
git status
git log --oneline -1
```

Expected: branch `master`, HEAD `b87d918`.

- [ ] **Step 3: Verify master has no untracked spec/plan files (v0.31 lesson)**

```bash
ls docs/superpowers/specs/ | grep v032
ls docs/superpowers/plans/ | grep v032
```

Expected: zero matches in both (spec + plan are only in worktree).

If any match found: this is the v0.31 spec-plan-drift lesson — delete the master-untracked v032 spec/plan files before merge:

```bash
rm docs/superpowers/specs/2026-05-26-v032-verify-pmids-enhance.md  # if exists
rm docs/superpowers/plans/2026-05-26-v032-verify-pmids-enhance.md  # if exists
```

- [ ] **Step 4: Merge feat-branch with --no-ff**

```bash
git merge --no-ff feat/v032-verify-pmids-enhance -m "merge: v0.32 verify-pmids enhance (classifyOverlap + STATUS + --batch + RU-normalize)"
```

Expected: clean merge, no conflicts.

- [ ] **Step 5: Tag merge commit**

```bash
git tag v0.32-verify-tooling
git log --oneline -1
```

Expected: HEAD shows merge-commit hash.

- [ ] **Step 6: Push master + tags**

```bash
git push origin master --tags
```

Expected: push succeeds, new tag `v0.32-verify-tooling` pushed to origin.

- [ ] **Step 7: Verify tag is on remote**

```bash
git ls-remote --tags origin v0.32-verify-tooling
```

Expected: one ref printed with the merge-commit SHA.

- [ ] **Step 8: Worktree cleanup (after merge confirmed)**

```bash
git worktree remove .worktrees/feat-v032-verify-pmids-enhance
git branch -d feat/v032-verify-pmids-enhance
```

Expected: worktree removed, local branch deleted (since merged).

---

## Acceptance Summary

After all tasks pass:

- ✅ `classifyOverlap()` exported pure-fn, 8/8 unit-test PASS
- ✅ `STATUS` frozen-object exported, 5-6 references migrated in `main()`
- ✅ `--batch` CLI flag parses, opt-in (default = per-PMID unchanged, backward-compat preserved)
- ✅ Lib-wide pharmaceutical `--batch` smoke: 22 entry / ~100 PMID complete in <60s
- ✅ Lib-wide all-4 libs `--batch` smoke: 189 entry / 407 PMID complete in <2 min, all OK
- ✅ `normalize()` extends with RU-bracket strip — RU-cited titles with shared EN tokens classify more cleanly post-S4
- ✅ v0.31 12-case `isHuRuTitle` test still 12/12 PASS (regression-free)
- ✅ `npm run build` PASS, bundle unchanged (scripts-only change)
- ✅ `v0.32-verify-tooling` tag pushed to origin
- ✅ No Vercel deploy triggered (scripts-only, src/ untouched)

No Vercel deploy (scripts-only change, bundle unchanged).
