# v0.32 verify-pmids enhance — Design Spec

**Date:** 2026-05-26
**Target:** `scripts/verify-pmids.mjs` (and new `scripts/test/verify-pmids-classify.test.mjs`)
**Branch:** `feat/v032-verify-pmids-enhance`
**Tag:** `v0.32-verify-tooling`
**Predecessor:** `v0.31-verify-tooling` (HU/RU-aware false-positive detection, 2026-05-26 15:33 CEST)
**Ship type:** Scripts-only, no Vercel deploy

---

## 1. Goal

Cohesive tooling-polish + workflow-performance enhancement on `verify-pmids.mjs`. **NOT a bugfix** — v0.30 already established `verify-pmids 0 issues across 4 lib × 189 entries`. This spec eliminates future-workflow friction in PMID-mega-fix sessions and reduces refactor-cost for further enhancements.

Four independent enhancements, ordered safest-first (refactor → polish → feature → normalize):

1. **S2 — `classifyOverlap()` pure-fn extract.** Lift token-overlap + threshold + lang-detect inline logic (currently lines ~162-180 inside `main()`) into an offline-testable pure function.
2. **S1 — `STATUS` constants.** Replace 6 status string-literals with a frozen object for typo-safety and clarity post-refactor.
3. **S3 — NCBI batch-esummary opt-in mode.** New `--batch` CLI flag: 50-PMID chunks per esummary URL, 700ms inter-chunk pause. ~25-30× speedup on lib-wide runs.
4. **S4 — Russian-bracketed normalize.** Extend `normalize()` to strip `[...]` wrapping from RU-detected cited titles before tokenization, raising token-overlap ratios for genuinely-matched RU papers.

## 2. Architecture

```
verify-pmids.mjs (post-v0.32)
├── isHuRuTitle(s)                        [existing v0.31, unchanged]
├── normalize(s)                          [S4: extended with RU-bracket strip]
├── tokens(s)                             [unchanged]
├── overlapRatio(a, b)                    [unchanged]
├── STATUS = Object.freeze({...})         [S1: NEW exported constant]
├── classifyOverlap(cited, real)          [S2: NEW exported pure-fn]
│     → {status, ratio, langTag}
├── lookupPmid(pmid)                      [existing, used in per-PMID mode]
├── lookupBatched(pmids[])                [S3: NEW, used in --batch mode]
│     → Map<pmid, {exists, title, authors}|{exists:false, error}>
├── suggestCandidates(...)                [unchanged]
└── main()                                [refactored: STATUS constants,
                                            classifyOverlap call, opt batch path]
```

## 3. Detailed design

### 3.1 S2 — `classifyOverlap()` pure-fn extract

```js
export function classifyOverlap(citedTitle, realTitle) {
  const lang = isHuRuTitle(citedTitle)  // 'hu' | 'ru' | null
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

**Return shape:** `{status: string, ratio: number, langTag: 'hu'|'ru'|null}`.

**Main-loop change:** the existing 15-line block (current lines 162-180) collapses to ~5 lines:

```js
const { status, ratio, langTag } = classifyOverlap(study.title, result.title)
if (status === STATUS.OK) {
  const tag = langTag ? ` [${langTag.toUpperCase()}-loose]` : ''
  console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)${tag}`)
} else if (status === STATUS.MAYBE_FP_HU || status === STATUS.MAYBE_FP_RU) {
  // ... existing MAYBE_FP rendering ...
} else {
  // ... existing MISMATCH rendering + suggest mode ...
}
```

### 3.2 S1 — `STATUS` constants

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

All 6 string-literal occurrences in `main()` replaced with `STATUS.X`. Net diff ~6 lines edited.

### 3.3 S3 — `lookupBatched()` + `--batch` mode

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

**Main-loop change in `--batch` mode:** restructured as 2-pass walk.

- **Pass 1 (gather):** iterate all libs × all entries × all studies, collect `{libId, slug, pmid, citedTitle}` records into an array, dedupe by `pmid::citedTitle`.
- **Pass 2 (lookup + classify):** extract `allPmids = unique(...records.map(r => r.pmid))`, call `await lookupBatched(allPmids)` ONCE, then iterate records, look up result from Map, and apply `classifyOverlap()` for the OK/MAYBE_FP/MISMATCH branch. Suggest-mode candidate-lookups still per-PMID (uses esearch, not esummary).

**Result-shape consistency:** `lookupBatched()` returns Map entries matching the existing per-PMID `lookupPmid()` shape — `{exists: true, title, authors}` or `{exists: false, error}` or `{networkError: true, error}`. Downstream main-loop branches (NETWORK_ERR log, NOT_FOUND issue-push, classify+render) remain unchanged in semantics, only the lookup-call site differs (`result = batchMap.get(pmid)` vs `await lookupPmid(pmid)`).

**Non-batch mode (default):** unchanged from v0.31 — interleaved per-PMID `lookupPmid()` calls with `await sleep(400)`.

**CLI flag parsing:** `const batchMode = args.includes('--batch')`. Documented in header docstring.

### 3.4 S4 — `normalize()` RU-bracket strip

```js
function normalize(s) {
  let str = (s || '')
  // S4: strip RU-bracket wrapper before tokenization, so [Russian title] tokens like
  // 'effects' and 'selank' are countable instead of '[effects' and 'selank]'.
  if (isHuRuTitle(str) === 'ru') {
    str = str.trim().slice(1, -1)
  }
  return str.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}
```

**Effect on classifyOverlap:** ratio for RU-cited paper "[Effects of Selank on anxiety]" vs real "Effects of Selank on anxiety disorders" improves from ~0% (bracket-prefixed tokens fail token-overlap) to ~40-60% (clean tokens overlap). Threshold for RU stays at 0.10 — so genuine matches now classify as `OK` `[ru-loose]` instead of `MAYBE_FP_RU`.

**Critical:** strip applies ONLY to cited titles where `isHuRuTitle(s) === 'ru'`. Real PubMed titles are never bracketed in eutils responses.

## 4. Testing

### 4.1 S2 — `verify-pmids-classify.test.mjs` (NEW, 8 cases)

```js
import { classifyOverlap, STATUS } from '../verify-pmids.mjs'

const cases = [
  // OK: EN-default, high overlap
  { cited: 'Effects of BPC-157 on tissue healing', real: 'Effects of BPC-157 on tissue healing review', expect: STATUS.OK, langTag: null },
  // MISMATCH: EN-default, low overlap
  { cited: 'Effects of GHK-Cu on collagen', real: 'Rosuvastatin pharmacokinetics in elderly', expect: STATUS.MISMATCH, langTag: null },
  // MAYBE_FP_HU: HU diacritics + low overlap
  { cited: 'Háromszoros inkretinreceptor-agonista hatása', real: 'Triple incretin receptor agonist effect on obesity', expect: STATUS.MAYBE_FP_HU, langTag: 'hu' },
  // OK [hu-loose]: HU + overlap ≥ 0.10
  { cited: 'Hatékony BPC-157 sportmedicine tissue healing review', real: 'BPC-157 sports medicine tissue healing review', expect: STATUS.OK, langTag: 'hu' },
  // MAYBE_FP_RU: bracketed + low overlap (post-strip still low)
  { cited: '[Trojnoi inkretinagonist deistvie pri obezitete]', real: 'Triple incretin agonist effect on obesity', expect: STATUS.MAYBE_FP_RU, langTag: 'ru' },
  // OK [ru-loose]: bracketed + overlap ≥ 0.10 (post-S4 strip raises ratio)
  { cited: '[BPC-157 in sports medicine review systematic]', real: 'BPC-157 effective sports medicine review systematic', expect: STATUS.OK, langTag: 'ru' },
  // MISMATCH: empty cited
  { cited: '', real: 'Real PubMed paper title', expect: STATUS.MISMATCH, langTag: null },
  // MISMATCH: EN unrelated
  { cited: 'Completely random unrelated text here today', real: 'Different paper subject matter entirely now', expect: STATUS.MISMATCH, langTag: null },
]
```

**Run:** `node scripts/test/verify-pmids-classify.test.mjs`. Exit 0 on all-pass, exit 1 on any-fail. Acceptance: 8/8 pass.

### 4.2 S3 — batch-mode end-to-end smoke

- **Per-entry:** `node scripts/verify-pmids.mjs --entry retatrutide --batch` → 3 PMIDs (all OK), exit 0. Compare to `--entry retatrutide` per-PMID baseline: identical output minus latency.
- **Lib-wide:** `node scripts/verify-pmids.mjs --lib pharmaceutical --batch` → 22 entry / ~100 PMID complete in <60s (vs ~7 min per-PMID). All OK, exit 0.

### 4.3 S4 — RU-normalize smoke

Inject test fixture (do NOT commit to entry data) — temporarily modify one entry's `studies[0].title` to `'[Effects of Selank on anxiety in GAD patients clinical trial]'` and run `node scripts/verify-pmids.mjs --entry selank`. Pre-S4 status: `MAYBE_FP_RU` (ratio 0%). Post-S4 status: `OK [ru-loose]` (ratio ~50%, since stripped tokens overlap with real PubMed title). Revert fixture immediately after smoke.

### 4.4 Regression sweep

After Task 4, run `node scripts/verify-pmids.mjs` (no flags, all 4 libs) AND `node scripts/verify-pmids.mjs --batch` separately. Both must produce identical output (all OK, exit 0) — only latency differs.

## 5. File changes

| File | Change | Net diff |
|---|---|---|
| `scripts/verify-pmids.mjs` | S1+S2+S3+S4 refactor + new fns + opt batch path | +80-100 / -25-35 |
| `scripts/test/verify-pmids-classify.test.mjs` | NEW: 8-case unit test for classifyOverlap | +50 |
| `scripts/test/verify-pmids-detection.test.mjs` | UNCHANGED (v0.31 12-case isHuRuTitle) | 0 |
| `docs/superpowers/specs/2026-05-26-v032-verify-pmids-enhance.md` | NEW spec doc | this file |
| `docs/superpowers/plans/2026-05-26-v032-verify-pmids-enhance.md` | NEW plan doc | next step |

**No data file changes. No `src/` changes. No Vercel deploy.**

## 6. Ship cadence

**Subagent-driven (v0.31 mintára):**

```
Worktree:    .worktrees/feat-v032-verify-pmids-enhance/
Branch:      feat/v032-verify-pmids-enhance (from master b87d918)
```

**Commit sequence (TDD-séma):**

1. `feat(scripts): extract classifyOverlap pure-fn + 8-case offline unit test` (S2, sonnet)
2. `chore(scripts): STATUS constants for verify-pmids status strings` (S1, haiku)
3. `feat(scripts): add --batch CLI flag for lib-wide esummary lookup (50-PMID chunks)` (S3, sonnet)
4. `feat(scripts): normalize() strips RU brackets before tokenization` (S4, haiku)
5. `chore(superpowers): v0.32 spec + implementation plan` (docs commit, separately)
6. Merge `feat/v032-verify-pmids-enhance` → master with `--no-ff`
7. Tag `v0.32-verify-tooling` on merge commit
8. Push `origin master --tags`

**Subagent allocation:**
- S2: sonnet implementer + sonnet code-reviewer (pure-fn extract = thinking-task)
- S1: haiku implementer + sonnet code-reviewer (mechanical replace)
- S3: sonnet implementer + sonnet code-reviewer (NCBI batch API + 2-pass walk)
- S4: haiku implementer + sonnet code-reviewer (3-line change + smoke)
- Final branch review: sonnet code-reviewer

## 7. Risks

- **NCBI batch URL length limit:** 50 PMIDs × ~9 chars = ~450 chars + base URL = ~480 chars total, well under the 2000-char practical URL limit. Safe.
- **Batch chunk fails mid-walk:** if chunk N/9 fails (HTTP error or network), the Map records `{exists: false, error: ...}` for that chunk's PMIDs and the walk continues. Failed PMIDs surface as `NOT_FOUND` in summary. Non-blocking — same exit-code semantics as per-PMID mode.
- **RU-bracket false-strip:** real PubMed titles are never wrapped in `[...]` in eutils responses (confirmed via 2026 spot checks). No risk of stripping a real title. Strip applies ONLY when `isHuRuTitle(s) === 'ru'`, which requires the full-string `^\[.+\]$` regex to match — partial brackets like `Effects of [collagen] in skin` do NOT trigger.
- **Backward-compatibility:** `verify-pmids` without `--batch` flag UNCHANGED. CI-scripts, muscle-memory invocations, and the existing v0.31 12-case `isHuRuTitle` test all continue to work identically.
- **Test fixture overlap:** v0.31 `verify-pmids-detection.test.mjs` (12 cases on `isHuRuTitle`) is independent of v0.32 `verify-pmids-classify.test.mjs` (8 cases on `classifyOverlap`). Both run in parallel without cross-coupling.
- **Status-constant typo risk:** `Object.freeze()` provides runtime immutability but not type-safety. Mitigation: 8 unit-test cases assert exact status string values, catching any future typo'd `STATUS.X` references.

## 8. Out of scope (deferred to v0.33+)

- **LLM-based HU→EN title translation** before classifyOverlap — new dependency (OpenAI/Anthropic API key, cost-per-call), post-MVP. Token-overlap heuristic with HU/RU detect is sufficient for current scope.
- **Per-lang body file reading** (script reads `lang='hu'` only; could check `lang='en'` PubMed-tracked titles in EN bodies) — orthogonal, separate ship.
- **Build-gate / pre-commit hook integration** (`.husky/`, `lefthook`) — CI-config task, not script-level.
- **Entry-data write-back russian-strip** — would `[Russian title]` → `Russian title` across all 4 lib body files. Pure cosmetic, not error-source. Separate cosmetic-cleanup task.
- **Status-constant TypeScript migration** — would require `.ts` toolchain in scripts/, larger conversion. Not in scope.

## 9. Acceptance bullets

After all tasks pass:

- [ ] `classifyOverlap()` exported, 8/8 unit-test PASS
- [ ] `STATUS` frozen-object exported, 6 references in main-loop use `STATUS.X`
- [ ] `--batch` CLI flag parses, opt-in (default = per-PMID unchanged)
- [ ] Lib-wide pharmaceutical `--batch` smoke: 22 entry / ~100 PMID complete in <60s (vs ~7 min per-PMID baseline)
- [ ] `normalize()` extends with RU-bracket strip, smoke confirms ratio elevation on `[bracketed]` fixture
- [ ] Lib-wide regression sweep: all 4 lib × 189 entries verify clean both `--batch` and per-PMID modes; identical output minus latency
- [ ] v0.31 12-case `isHuRuTitle` test still 12/12 PASS
- [ ] `v0.32-verify-tooling` tag pushed to origin
- [ ] No Vercel deploy required (scripts-only, src bundle unchanged)
