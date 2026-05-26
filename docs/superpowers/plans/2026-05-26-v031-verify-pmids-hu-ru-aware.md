# v0.31 verify-pmids HU/RU-aware Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add HU/RU cited-title detection to `scripts/verify-pmids.mjs` so false-MISMATCH flags on Hungarian-diacritic and Russian-bracketed cited titles become `MAYBE_FP_HU` / `MAYBE_FP_RU` (manual-review state), with opt-in `--strict` flag making them block exit-code.

**Architecture:** Single-script enhancement. New 5-line `isHuRuTitle()` helper + 3-state branch in main verify loop (OK / MAYBE_FP_HU|RU / MISMATCH). New `--strict` CLI flag toggles whether MAYBE_FP-state contributes to exit-1. Backward-compatible: EN-cited titles behave exactly as before.

**Tech Stack:** Node.js (ES modules), no new dependencies. Existing NCBI eutils API integration unchanged.

---

## File Structure

**Modify:**
- `scripts/verify-pmids.mjs` — ~30 sor net diff (5 sor új helper, CLI flag parse, 3-state branch, status-summary refactor)

**Create:**
- `scripts/test/verify-pmids-detection.test.mjs` — pure-function unit test az `isHuRuTitle()` helper-re (~40 sor, no NCBI fetch — offline test)

No new dependencies, no `package.json` change.

---

## Task 1: HU/RU detection helper + unit test (TDD)

**Files:**
- Test: `scripts/test/verify-pmids-detection.test.mjs` (create)
- Modify: `scripts/verify-pmids.mjs` — add `isHuRuTitle()` helper after `overlapRatio()` (around line 41)

- [ ] **Step 1: Write the failing test**

Create `scripts/test/verify-pmids-detection.test.mjs`:

```js
// Pure-function offline test for isHuRuTitle()
// Run: node scripts/test/verify-pmids-detection.test.mjs
import { isHuRuTitle } from '../verify-pmids.mjs'

const cases = [
  // HU-cited (diacritics)
  { input: 'BPC-157 az ortopédiai sportmedicinában', expected: 'hu' },
  { input: 'Hatékonyság vizsgálata depresszióban', expected: 'hu' },
  { input: 'Egy ékezetes szó: jó', expected: 'hu' },
  // RU-bracketed
  { input: '[Effects of Selank on anxiety in GAD patients]', expected: 'ru' },
  { input: '[Bromantane mechanism of action]', expected: 'ru' },
  // EN-default (no detect)
  { input: 'Emerging Use of BPC-157 in Orthopaedic Sports Medicine', expected: null },
  { input: 'Effects of GHK-Cu on collagen synthesis', expected: null },
  // Edge cases
  { input: '', expected: null },
  { input: null, expected: null },
  { input: undefined, expected: null },
  // Partial bracket (NOT trigger — by design)
  { input: 'Effects of [collagen] in skin', expected: null },
  // Single HU char — should still detect
  { input: 'Effect of Co-Q10 in fókusz study', expected: 'hu' },
]

let pass = 0, fail = 0
for (const c of cases) {
  const got = isHuRuTitle(c.input)
  if (got === c.expected) {
    console.log(`  ✅ "${String(c.input).slice(0, 50)}" → ${got}`)
    pass++
  } else {
    console.log(`  ❌ "${String(c.input).slice(0, 50)}" → expected ${c.expected}, got ${got}`)
    fail++
  }
}
console.log(`\n${pass}/${pass + fail} passed`)
if (fail > 0) process.exit(1)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test/verify-pmids-detection.test.mjs`

Expected: `SyntaxError` or `ImportError` — `isHuRuTitle` is not exported from `verify-pmids.mjs` yet.

- [ ] **Step 3: Add `isHuRuTitle()` helper to `verify-pmids.mjs`**

In `scripts/verify-pmids.mjs`, after the `overlapRatio()` function (line 41), add:

```js
export function isHuRuTitle(s) {
  if (!s || typeof s !== 'string') return null
  if (/[áéíóöőúüű]/i.test(s)) return 'hu'
  if (/^\[.+\]$/.test(s.trim())) return 'ru'
  return null
}
```

Note: `export` keyword added so the test file can import it. The rest of the script keeps working — `main()` is invoked at the end via top-level `main().catch(...)`, ESM exports don't break that.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test/verify-pmids-detection.test.mjs`

Expected: `12/12 passed`, exit code 0.

- [ ] **Step 5: Commit**

```bash
git add scripts/verify-pmids.mjs scripts/test/verify-pmids-detection.test.mjs
git commit -m "feat(scripts): add isHuRuTitle helper + unit test for verify-pmids HU/RU detection"
```

---

## Task 2: Wire `--strict` CLI flag

**Files:**
- Modify: `scripts/verify-pmids.mjs:18-22` (CLI flag parsing)

- [ ] **Step 1: Add `--strict` flag parse**

In `scripts/verify-pmids.mjs`, replace the existing CLI parsing block (lines 18-22):

```js
const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null
const suggestMode = args.includes('--suggest')
```

With:

```js
const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null
const suggestMode = args.includes('--suggest')
const strictMode = args.includes('--strict')
```

- [ ] **Step 2: Verify script still runs (no behavior change yet)**

Run: `node scripts/verify-pmids.mjs --entry retatrutide --lib peptides`

Expected: Existing OK/MISMATCH output for retatrutide PMIDs, exit 0 (no MISMATCH, lib is clean post-v0.30). The `--strict` flag is parsed but not used yet.

- [ ] **Step 3: Commit**

```bash
git add scripts/verify-pmids.mjs
git commit -m "feat(scripts): add --strict CLI flag parsing to verify-pmids"
```

---

## Task 3: 3-state branch in main verify loop

**Files:**
- Modify: `scripts/verify-pmids.mjs:147-167` (overlap check + status branching)

- [ ] **Step 1: Read current state of the branch logic**

In `scripts/verify-pmids.mjs`, the current overlap check (around line 147) looks like:

```js
const ratio = overlapRatio(study.title, result.title)
if (ratio < 0.25) {
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
} else {
  console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)`)
}
```

- [ ] **Step 2: Replace with 3-state branch**

Replace the block from `const ratio = overlapRatio(...)` to the closing `}` of the `else` branch (lines 147-167) with:

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

- [ ] **Step 3: Run lib-wide verify on clean v0.30 state to confirm no regression**

Run: `node scripts/verify-pmids.mjs --lib pharmaceutical`

Expected: All 22 entries OK (clean post-v0.30), exit 0. No MAYBE_FP, no MISMATCH.

(Pharmaceutical is the smallest lib — runs in ~2-3 min vs. 5+ min for peptides.)

- [ ] **Step 4: Commit**

```bash
git add scripts/verify-pmids.mjs
git commit -m "feat(scripts): verify-pmids 3-state branch (OK / MAYBE_FP_HU|RU / MISMATCH)"
```

---

## Task 4: Issues-summary refactor (per-status grouping)

**Files:**
- Modify: `scripts/verify-pmids.mjs:174-181` (final summary block)

- [ ] **Step 1: Read current summary code**

Current end of `main()` (lines 174-181):

```js
console.log(`\n${issues.length === 0 ? '✅ All PMIDs verified.' : `❌ ${issues.length} issue(s) found.`}`)
if (issues.length > 0) {
  console.log('\nIssues summary:')
  for (const i of issues) {
    console.log(`  ${i.libId}/${i.slug} PMID ${i.pmid} [${i.status}]`)
  }
  process.exit(1)
}
```

- [ ] **Step 2: Replace with grouped output + strict-aware exit**

Replace lines 174-181 with:

```js
const blocking = issues.filter(i => i.status === 'MISMATCH' || i.status === 'NOT_FOUND')
const maybeFp = issues.filter(i => i.status === 'MAYBE_FP_HU' || i.status === 'MAYBE_FP_RU')

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
    for (const status of Object.keys(byStatus)) {
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
    for (const status of Object.keys(byStatus)) {
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
```

- [ ] **Step 3: Smoke test on clean lib (expect exit 0)**

Run: `node scripts/verify-pmids.mjs --lib pharmaceutical && echo "EXIT_OK"`

Expected: All OK + `EXIT_OK` printed. Confirms exit code 0 when no issues.

- [ ] **Step 4: Commit**

```bash
git add scripts/verify-pmids.mjs
git commit -m "feat(scripts): verify-pmids per-status summary grouping + --strict exit logic"
```

---

## Task 5: End-to-end manual smoke on a deliberately HU-cited title

**Files:**
- Test fixture (no file): temporarily inject HU-cited title via a backup-restore round-trip

- [ ] **Step 1: Pick a real entry with EN PMID title, back it up, inject HU cited title**

We'll use `peptides/retatrutide` (we know its PMIDs and can restore from git after the test).

Pick PMID `37902090` (Jastreboff retatrutide phase 2 trial). Its real title contains "Retatrutide ... in Obesity".

Edit `src/data/libraries/peptides/entries/hu/retatrutide.js` and locate the studies[] entry with PMID `37902090`. Change its `title` field to a HU-translated cited title.

**IMPORTANT:** Choose a title that does NOT share the drug name with the real PubMed title — otherwise token-overlap rises above the 10% loose-threshold (`retatrutide` alone gives ~33% overlap) and the title passes as `[HU-loose]` OK instead of triggering `MAYBE_FP_HU`. Use a drug-name-free paraphrase:

```js
title: "Háromszoros inkretinreceptor-agonista elhízás kezelésére: metabolikus hatások összefoglalása",
```

- [ ] **Step 2: Run verify in non-strict mode — expect MAYBE_FP_HU, exit 0**

Run: `node scripts/verify-pmids.mjs --lib peptides --entry retatrutide && echo "EXIT_OK"`

Expected output contains:
```
⚠️  peptides/retatrutide: PMID 37902090 MAYBE_FP_HU (manual review)
...
⚠️  1 MAYBE_FP item(s) — manual review:
  MAYBE_FP_HU (1):
    peptides/retatrutide PMID 37902090 (ratio X%)
EXIT_OK
```

The `EXIT_OK` confirms exit code 0 in default (non-strict) mode.

- [ ] **Step 3: Run verify in strict mode — expect MAYBE_FP_HU, exit 1**

Run: `node scripts/verify-pmids.mjs --lib peptides --entry retatrutide --strict; echo "EXIT_CODE=$?"`

Expected output ends with `EXIT_CODE=1`. The MAYBE_FP_HU now blocks because of `--strict`.

- [ ] **Step 4: Run on Russian-bracketed fixture**

Edit the same entry — change PMID `37902090` title to a drug-name-free transliteration so token-overlap stays below the 10% loose-threshold:

```js
title: "[Trojnoi inkretinagonist dlya lecheniya ozhireniya: metabolicheskie effekty i klinicheskie rezultaty]",
```

Run: `node scripts/verify-pmids.mjs --lib peptides --entry retatrutide && echo "EXIT_OK"`

Expected: `MAYBE_FP_RU` status appears, exit 0 (default mode), `EXIT_OK` printed.

- [ ] **Step 5: Restore the entry file from git**

```bash
git checkout -- src/data/libraries/peptides/entries/hu/retatrutide.js
```

Verify the file is restored:

```bash
git status src/data/libraries/peptides/entries/hu/retatrutide.js
```

Expected: `working tree clean` (or no mention of the file).

- [ ] **Step 6: Re-run verify on clean state — expect all OK, exit 0**

Run: `node scripts/verify-pmids.mjs --lib peptides --entry retatrutide && echo "EXIT_OK"`

Expected: all 3 PMIDs OK (cagrilintide-class trial paper, Jastreboff retatrutide, semaglutide-comparator), `EXIT_OK`.

- [ ] **Step 7: Commit nothing (the test reverted everything)**

No git commit needed — smoke test was non-destructive.

---

## Task 6: Lib-wide regression run (final acceptance)

**Files:** No file changes — verification only.

- [ ] **Step 1: Run verify-pmids on all 4 libraries, capture exit code**

Run each lib sequentially (lib-wide single run is ~10-15 min total but we just need exit-code, not full output):

```bash
node scripts/verify-pmids.mjs --lib peptides 2>&1 | tail -20
echo "PEPTIDES_EXIT=$?"
node scripts/verify-pmids.mjs --lib nootropics 2>&1 | tail -20
echo "NOOTROPICS_EXIT=$?"
node scripts/verify-pmids.mjs --lib performance 2>&1 | tail -20
echo "PERFORMANCE_EXIT=$?"
node scripts/verify-pmids.mjs --lib pharmaceutical 2>&1 | tail -20
echo "PHARMACEUTICAL_EXIT=$?"
```

Expected:
- All 4 libs end with `✅ All PMIDs verified.` (v0.30 cleaned them lib-wide to 0 issues)
- All 4 EXIT codes = 0
- Some NCBI-throttle false-NOT_FOUND may appear if rate-limited (per `[[feedback_ncbi_esummary_transient_rate_limit]]`) — if so, re-run only the affected lib once.

- [ ] **Step 2: If lib-wide run reveals new MAYBE_FP items**

These would be entries with HU-cited or RU-bracketed `studies[].title` that v0.30 didn't HU-EN-sync. List them — they are NOT bugs, they are the intended new state of the tool. Document in commit message.

- [ ] **Step 3: Run the unit test one more time**

Run: `node scripts/test/verify-pmids-detection.test.mjs`

Expected: `12/12 passed`, exit 0.

- [ ] **Step 4: npm run build PASS (sanity)**

Run: `npm run build`

Expected: PASS in ~5-10 sec, vendor bundle unchanged. Scripts/test/ is outside `src/` so it shouldn't enter the bundle.

- [ ] **Step 5: Commit nothing if no new MAYBE_FP discoveries (acceptance only)**

If new MAYBE_FP items found and they're truly false-positives (HU/RU title for a verified-good PMID), this is NOT a code bug — it's the new tooling working as designed. The MAYBE_FP items are now visible for future manual title-sync work.

---

## Task 7: Final merge + tag + push

**Files:** No file changes — git workflow only.

- [ ] **Step 1: Verify clean working tree**

```bash
git status
```

Expected: `working tree clean`.

- [ ] **Step 2: Verify all commits on the branch**

```bash
git log --oneline master..HEAD
```

Expected: 4 commits from Tasks 1-4 (Task 5 was a non-destructive smoke test, Task 6 was acceptance-only).

- [ ] **Step 3: Merge to master with --no-ff**

```bash
git checkout master
git merge --no-ff feat/v031-verify-tooling -m "merge: v0.31 verify-pmids HU/RU-aware false-positive detection"
```

- [ ] **Step 4: Tag the merge commit**

```bash
git tag v0.31-verify-tooling
```

- [ ] **Step 5: Push master + tags**

```bash
git push origin master --tags
```

Expected: Push succeeds, GitHub Actions (if any) green, no Vercel deploy needed (scripts-only change, no `src/` modifications).

- [ ] **Step 6: Verify tag is on remote**

```bash
git ls-remote --tags origin v0.31-verify-tooling
```

Expected: One ref printed with the merge-commit SHA.

---

## Acceptance Summary

After all tasks pass:

- ✅ `isHuRuTitle()` helper exported, 12/12 unit tests pass
- ✅ `--strict` CLI flag parses, exit-code behavior toggle works
- ✅ 3-state branch (OK / MAYBE_FP_HU|RU / MISMATCH) renders correct status
- ✅ Per-status grouped summary shows blocking issues separate from MAYBE_FP review items
- ✅ Smoke test confirmed: HU-injected title → MAYBE_FP_HU + exit 0 default, exit 1 with --strict
- ✅ Smoke test confirmed: RU-bracketed-injected → MAYBE_FP_RU + exit 0 default
- ✅ Lib-wide regression: 4 lib × 189 entries still verify clean (no false EN-MISMATCH on EN-cited titles)
- ✅ `v0.31-verify-tooling` tag pushed to origin

No Vercel deploy (scripts-only change, bundle unchanged).
