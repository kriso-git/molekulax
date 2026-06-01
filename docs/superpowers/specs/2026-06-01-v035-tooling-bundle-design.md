# v0.35 tooling-bundle — `test` npm-script + cross-lang drift guard

> **Status:** DESIGN APPROVED (2026-06-01) · **Branch:** `feat/v035-tooling-bundle`
> **Type:** verify-tooling, scripts/CI only — no `src/` change, bundle byte-identical expected
> **Closes:** v0.34 deferred items "(b) per-lang body reading" + "`test` npm-script"
> **Approach:** 1 (Lean) — separate offline drift module + smart hook/CI integration

---

## 1. Background & motivation

The v0.31→v0.34 arc hardened PMID integrity (verify-pmids 100% PASS, `--batch` ~170× faster,
husky pre-commit gate, server-side CI gate). Two loose ends remained on the v0.34 deferred list:

1. **`test` npm-script** — CI and local dev each spell out the test command separately
   (`node --test scripts/test/*.test.mjs`). A single `npm test` should serve both
   (final-review Minor).
2. **"verify-pmids reads HU only"** — `scripts/verify-pmids.mjs:212` hardcodes `const lang = 'hu'`,
   so only the HU entry bodies' `studies[]` are read.

### Key finding that reframes item 2

Exploration showed the study fields **`pmid`, `title`, `authors`, `journal`, `year`, `url` are
language-invariant** across `hu/en/pl` — only `tag`/`tagText`/`finding` are translated. Verified on
multiple entries (retatrutide, bpc-157, semax, tb-500): identical `pmid`+`title` in all three langs.

Consequences:
- Simply reading all three langs lib-wide adds **~zero** new PMID coverage (the `pmid::title` dedup
  collapses them) for **3× the network calls** — not worth it.
- The real blind spots are:
  - **Pre-commit hook gap:** staging only `en/X.js` (e.g. a corrupted PMID there) currently triggers
    a HU-file verification (line 212), which is unchanged and green → the EN corruption slips through.
  - **Cross-lang drift:** if a `studies[]` array diverges between langs (a PMID/title edited in one
    lang but not the others), nothing detects it. The system silently assumes they are identical.

### Protection analysis (why a drift check is the right tool)

| Failure mode | Drift check (offline) | HU network-verify | Staged-lang network-verify |
|---|---|---|---|
| PMID corrupted in EN only | ✅ catches (en≠hu) | ❌ misses (hu valid) | ✅ (if staged=en) |
| Same fake PMID in all 3 langs | consistent → passes | ✅ catches (NOT_FOUND) | ✅ |
| Real-but-wrong PMID in all 3 | passes | ✅ catches (title mismatch) | ✅ |
| Title edited in EN only | ✅ catches | ❌ misses | ✅ (if staged=en) |

**`drift check + existing HU network-verify` covers every row.** A per-staged-lang network verify
would only re-catch what the drift check already catches, at 3× the NCBI calls — so it is excluded
(Approach 1, Lean).

---

## 2. Goals / non-goals

**Goals**
- G1. A single `npm test` command, cross-platform safe (Node 20 local Windows + Node 24 CI).
- G2. An offline cross-lang drift guard that fails on any `{pmid, title}` divergence between
  `hu`/`en`/`pl` for the same entry.
- G3. Wire the drift guard into the pre-commit hook (per staged entry) and CI (lib-wide, offline).
- G4. Remove the `const lang = 'hu'` hardcode via a `--lang` flag (default `hu`, backward-compatible).

**Non-goals (YAGNI)**
- No per-staged-lang network verification (provably redundant — see §1 table).
- No `authors`/`journal`/`year`/`url` in the drift comparison (Q2: `pmid`+`title` only).
- No `--json` / machine-readable output for the drift tool.
- No `src/` changes; bundle stays byte-identical.

---

## 3. Architecture & component inventory

| # | File | Action |
|---|---|---|
| A | `package.json` | +2 scripts: `test`, `verify:consistency` |
| B | `scripts/verify-lang-consistency.mjs` | **NEW** — offline drift guard (pure fn + walker) |
| C | `scripts/test/verify-lang-consistency.test.mjs` | **NEW** — offline TDD (plain-script convention) |
| D | `scripts/verify-pmids.mjs` | `--lang <hu\|en\|pl>` flag (default `hu`); replaces line-212 hardcode + docstring |
| E | `scripts/verify-staged-entries.mjs` | per-entry drift-check step before the network verify |
| F | `.github/workflows/ci.yml` | `npm test`; add `npm run verify:consistency` to the offline job |

Data source layout (unchanged):
`src/data/libraries/<lib>/entries/<lang>/<slug>.js`, default-export with `studies: [{ pmid, title, ... }]`.
Libraries: `peptides`, `nootropics`, `performance`, `pharmaceutical`. Langs: `hu`, `en`, `pl`.

---

## 4. Detailed design

### 4.1 `test` npm-script (A, F)

`package.json`:
```jsonc
"test": "node --test scripts/test/"
```
- **Directory argument**, not a glob. Empirically verified on Node v20.18.0: `node --test scripts/test/`
  discovers and runs all four test files identically to the bash-expanded glob (`# tests 4 # pass 4`).
  The literal-glob form (`scripts/test/*.test.mjs`, what `cmd.exe`/npm passes unexpanded on Windows,
  and which Node < 21 does not glob) **fails** with `Could not find …*.test.mjs` — so the glob form is
  rejected.

`ci.yml`:
- `build-and-test` job step "Unit tests": `node --test scripts/test/*.test.mjs` → `npm test`.

### 4.2 Drift guard — `scripts/verify-lang-consistency.mjs` (B)

**Pure, exported function** (offline, the unit-test surface):
```js
export function compareEntryStudies({ hu, en, pl }) {
  // hu/en/pl: arrays of study objects (or undefined/non-array → treated as [])
  // Returns: { ok: boolean, diffs: Diff[] }
  // Diff: { lang: 'en'|'pl', index: number, field: 'count'|'pmid'|'title', hu: string|number, other: string|number }
  // For a 'count' diff: index = -1 (not index-specific); hu/other = the studies-array lengths.
}
```
Contract:
- Reference lang = `hu`. Compare `en` vs `hu` and `pl` vs `hu`.
- Build a `{ pmid, title }` sequence from each studies array, in array order, for **all** studies
  (pmid-bearing or not). Normalize: `pmid → String(pmid ?? '').trim()`, `title → String(title ?? '').trim()`.
- Drift conditions, per compared lang:
  - **count**: `other.length !== hu.length` → one `count` diff (`hu`=hu length, `other`=other length).
  - **pmid**: per shared index, `other.pmid !== hu.pmid` → a `pmid` diff.
  - **title**: per shared index, `other.title !== hu.title` → a `title` diff.
  - (When counts differ, still compare the overlapping indices so the report is actionable.)
- `ok = diffs.length === 0`.

**`main()` walker:**
- `const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']` (mirrors verify-pmids).
- Flags: `--lib <id>`, `--entry <slug>` (same semantics as verify-pmids).
- For each lib (respecting `--lib`): `entriesDir = src/data/libraries/<lib>/entries`; skip if no `entries/hu`.
  - Entry-slug set = **union** of `.js` basenames across `entries/{hu,en,pl}` (so a file present in one
    lang but absent in another is detected as a missing-lang drift).
  - For each slug (respecting `--entry`): for each lang, if the file exists, dynamic-import it
    (`file://` URL, Windows backslash → forward-slash, as verify-pmids does) and read `.default.studies`;
    if the file is absent, treat that lang's studies as `undefined` → surfaces as a `count` diff vs hu.
  - Run `compareEntryStudies`, print a per-entry line: `✅ <lib>/<slug>` or
    `❌ <lib>/<slug>` followed by each diff (`[en] #<index> <field>: hu="…" en="…"`).
- Exit **1** if any entry has drift, else **0**. No network. Expected lib-wide runtime < 2s.
- ESM main-guard (Windows-portable, per verify-pmids:319 pattern):
  `if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()`.

### 4.3 `verify-pmids.mjs` `--lang` flag (D)

- Parse: `const langArg = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : 'hu'`.
- Validate: if `!['hu','en','pl'].includes(langArg)` → `console.error` + `process.exit(1)` (before Pass 1).
- Line 212 `const lang = 'hu'` → `const lang = langArg`. (Note: a different `lang` binding exists inside
  `classifyOverlap` at line ~98 — separate scope, untouched.)
- Usage docstring (line 6) gains `[--lang <hu|en|pl>]`.
- **Backward compatibility:** with no `--lang`, the value is `'hu'` → Pass 1 reads the HU dir exactly as
  before → hook/CI/lib-wide behavior byte-identical. The flag only enables ad-hoc per-lang runs and
  removes the hardcode smell; it is **not** load-bearing for protection (the drift guard is).

### 4.4 Pre-commit hook — `verify-staged-entries.mjs` (E)

- `parseStagedFiles` stays **unchanged** (dedup to `(libId, entryId)`). The hook does not need the staged
  lang, because the drift check reads all three langs of the affected entry anyway.
- In the per-pair loop, **before** the existing `verify-pmids --lib --entry` spawn, add a drift-check spawn:
  ```js
  const drift = spawnSync('node',
    ['scripts/verify-lang-consistency.mjs', '--lib', libId, '--entry', entryId],
    { stdio: 'inherit' })
  if (drift.error) { /* surface + exit 1 */ }
  if (drift.status !== 0) { /* "FAIL (cross-lang drift) on <lib>/<entry>" + exit 1 */ }
  ```
  Then the existing HU network verify runs. Either non-zero → commit aborted (current semantics, incl.
  the `result.error` guard added in v0.33).
- Ordering rationale: drift is offline and fast → fail-fast on inconsistency before any network call.
- The `[verify-staged-entries] Bypass … --no-verify` messaging stays; the server-side CI gate still
  re-checks (the drift step is added to CI too — §4.5).

### 4.5 CI — `ci.yml` (F)

- `build-and-test` (offline) job:
  - "Unit tests": `npm test`.
  - **New** step "Cross-lang consistency": `npm run verify:consistency` (offline, lib-wide).
  - "Build": unchanged (`npm run build`).
- `pmid-gate` (network) job: **unchanged** (HU `verify-pmids --batch --ci` with the 1-retry-on-transient
  logic). The drift guard deliberately lives in the offline job — no NCBI dependency.

### 4.6 `package.json` scripts (A)

```jsonc
"test": "node --test scripts/test/",
"verify:consistency": "node scripts/verify-lang-consistency.mjs"
```

---

## 5. Testing strategy

### 5.1 Unit — `scripts/test/verify-lang-consistency.test.mjs` (offline, plain-script convention)

Cases for `compareEntryStudies` (custom case-loop + `process.exit(1)` on fail, matching the existing
test files):
1. identical 3 langs → `ok: true`, 0 diffs
2. pmid drift (en differs at index 1) → `ok:false`, one `{lang:'en', index:1, field:'pmid'}`
3. title drift (pl differs at index 0) → `ok:false`, one `{lang:'pl', index:0, field:'title'}`
4. count mismatch (en shorter) → `ok:false`, a `count` diff (+ any overlapping-index diffs)
5. missing lang (en `undefined`/non-array, hu has studies) → `ok:false`, `count` diff
6. all empty studies (`[]` in all langs) → `ok: true`
7. trailing-whitespace-only title difference → `ok: true` (trim lenience)

### 5.2 Integration / verification (in the plan, not new artifacts)

- **Baseline drift sweep:** `npm run verify:consistency` over the current 165 entries must be clean
  (exploration indicates it is). Any pre-existing drift surfaced here is a real data bug → fix in this PR.
- **Hook smoke:** stage an entry with a deliberately drifted EN PMID → commit blocked by the drift step;
  revert → commit passes. Confirm a clean-entry commit still passes both steps.
- **Regression:** full test suite (now via `npm test`) green; `npm run build` byte-identical; HU
  `verify-pmids --batch` still 407 PMIDs OK.

---

## 6. Backward compatibility & risk

- `verify-pmids` default behavior unchanged (flag defaults to `hu`).
- New CI step and hook step are **additive**; they can only *block* on real drift, never relax existing gates.
- No `src/` change → no bundle/Lighthouse/Vercel impact. No new runtime dependency.
- 2 pre-existing Dependabot moderate vulns (esbuild/vite dev-only) remain out of scope.

---

## 7. Acceptance criteria

- AC1. `npm test` runs all `scripts/test/*.test.mjs` on Node 20 (local Windows) and Node 24 (CI); all green.
- AC2. `verify-lang-consistency.mjs` exits 0 on the current library (no drift) and exits 1 with an
  actionable diff report when any `{pmid,title}` diverges across langs.
- AC3. `compareEntryStudies` unit tests (§5.1) all pass.
- AC4. `verify-pmids --lang en --entry <x>` reads the EN body; with no `--lang`, behavior is byte-identical
  to current.
- AC5. Pre-commit hook blocks a commit that introduces cross-lang drift, and a clean commit still passes.
- AC6. CI `build-and-test` job runs `npm test` + `npm run verify:consistency` + build, all green; `pmid-gate`
  unchanged and green.
- AC7. `npm run build` output byte-identical to v0.34 (scripts/CI-only change).

---

## 8. Out of scope (future)

- LLM HU→EN title translation before `classifyOverlap` (v0.34 deferred (a)).
- Entry-data body RU-strip write-back (deferred (d)).
- STATUS TypeScript migration (large, low value).
- Anecdote coverage re-check; peptide vial image-gen; transparent-PNG re-renders.
