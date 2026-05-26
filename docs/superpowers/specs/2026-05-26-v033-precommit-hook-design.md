# v0.33 — Pre-commit hook for verify-pmids entry-gate

**Date:** 2026-05-26
**Status:** Design — pending approval
**Predecessor:** v0.32 verify-pmids enhance (`b9c68c8`, tag `v0.32-verify-tooling`)
**Scope tag:** Single deferred enhance from v0.32 §8 — item **(c) Build-gate / pre-commit hook integration**

## 1. What ships

A husky-based **local pre-commit hook** that gates `git commit` on staged entry-data files (`src/data/libraries/*/entries/<lang>/<id>.js`). When such files are staged, the hook extracts the unique `(libraryId, entryId)` pairs and runs `node scripts/verify-pmids.mjs --lib <libId> --entry <entryId>` per pair, blocking the commit on any verify failure. Bypass via standard `git commit --no-verify`.

This is the v0.28-v0.30 PMID-mega-fix marathon's **preventive counterpart** — instead of post-hoc cleanup, fabricated PMIDs are caught **before** they reach the working tree's commit history.

## 2. Why now

The v0.28-v0.30 mega-fix sessions cleaned **207 PMIDs across 67 entries** lib-wide (status @ `b9c68c8`: 0 issues / 4 lib / 189 entries / 100% PASS). That state is fragile: any future content-task subagent (per `[[feedback_subagent_hallucinated_pmids]]`) can re-inject fabricated PMIDs into a single staging operation. The cost of detecting them post-commit:

- v0.28: ~3h marathon (cross-cutting amplification 6-7×)
- v0.29: ~3h marathon (transient throttle false-NOT_FOUND triage)
- v0.30: ~2h45m marathon (study-block removal + HU-cited sync)

The cost of detecting them **pre-commit**:

- 1-3 entries per typical commit × ~5s/entry = **~5-15s blocking gate**

Value/effort ratio is high enough that v0.32 §8 listed this as the top deferred item.

## 3. Architecture

### 3.1 New files (2)

**`scripts/verify-staged-entries.mjs`** (~60 lines, ESM, no new deps):

```
+ Import: { execSync, spawnSync } from 'node:child_process'
+ Import: { fileURLToPath } from 'node:url'

+ Constants:
    ENTRY_FILE_RE = /^src\/data\/libraries\/(peptides|nootropics|performance|pharmaceutical)\/entries\/(hu|en|pl)\/([\w-]+)\.js$/

+ export function parseStagedFiles(stagedList: string[]): Array<{ libId, entryId }>
    - Filters list against ENTRY_FILE_RE
    - De-dups (libId, entryId) pairs across the 3 lang variants
    - Returns unique pairs (sorted lexicographically for determinism)

+ async function main()
    - stagedList = execSync('git diff --cached --name-only --diff-filter=ACM').split('\n').filter(Boolean)
    - pairs = parseStagedFiles(stagedList)
    - if (pairs.length === 0) → exit 0 silent (no-op for non-data commits)
    - for each pair:
        result = spawnSync('node', ['scripts/verify-pmids.mjs', '--lib', libId, '--entry', entryId], { stdio: 'inherit' })
        if (result.status !== 0) → exit 1 (verify-pmids already prints diagnostic)
    - exit 0

+ ESM main-guard (Windows-portable, same pattern as v0.31 verify-pmids.mjs):
    if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
      main().catch(err => { console.error('verify-staged-entries failed:', err); process.exit(1) })
    }
```

**`.husky/pre-commit`** (3 lines, POSIX sh):

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
node scripts/verify-staged-entries.mjs
```

LF line-endings (no CRLF on Windows checkout — husky requires LF).

**`scripts/test/verify-staged-entries.test.mjs`** (~40 lines, offline TDD, 4 cases):

| # | Input (staged file list) | Expected output |
|---|---|---|
| 1 | `['src/data/libraries/peptides/entries/hu/retatrutide.js']` | `[{libId:'peptides', entryId:'retatrutide'}]` |
| 2 | 3-lang of same entry (HU+EN+PL retatrutide) | 1 unique pair `(peptides, retatrutide)` |
| 3 | Cross-library (peptides X + nootropics Y) | 2 pairs, sorted: `[(nootropics, Y), (peptides, X)]` |
| 4 | Non-entry files only (`README.md`, `src/App.jsx`, `scripts/verify-pmids.mjs`) | `[]` (0 pairs, early-return) |

Test imports `parseStagedFiles` directly (offline pure-fn extract). No git-shell call, no `verify-pmids.mjs` spawn — those are integration concerns, smoke-tested manually post-merge.

### 3.2 Modified file (1)

**`package.json`:**

- `devDependencies`: `+ "husky": "^9.1.0"` (~40 KB)
- `scripts`:
  - `+ "prepare": "husky"` (npm-install-time auto-init, creates `.husky/_/husky.sh`)
  - `+ "verify:staged": "node scripts/verify-staged-entries.mjs"` (manual hook-replication for testing)

### 3.3 Data flow

```
git commit -m "..."
  ↓
.husky/pre-commit
  ↓
node scripts/verify-staged-entries.mjs
  ↓
execSync('git diff --cached --name-only --diff-filter=ACM')
  ↓ stdout
parseStagedFiles(stagedList) → [{libId, entryId}, ...]
  ↓ for each pair (sequential)
spawnSync('node', ['scripts/verify-pmids.mjs', '--lib', libId, '--entry', entryId], { stdio: 'inherit' })
  ↓ exit code
  ├── 0 (PASS or NETWORK_ERR warn) → continue
  └── 1 (MISMATCH / NOT_FOUND) → exit 1 → commit aborted
  ↓
exit 0 → commit proceeds
```

## 4. Failure modes

| State | verify-pmids exit | Hook outcome |
|---|---|---|
| 0 entry files staged | (not invoked) | exit 0 silent, commit OK |
| 1+ entries, all PMIDs OK | 0 | exit 0, commit OK |
| 1+ entries, MISMATCH found | 1 | exit 1, commit aborted, MISMATCH report printed |
| 1+ entries, NOT_FOUND | 1 | exit 1, commit aborted (NOT_FOUND already indicates fabrication or removed PMID) |
| NCBI network down / unreachable | 0 (NETWORK_ERR warn) | exit 0, commit OK with warning visible — v0.31 `STATUS.NETWORK_ERR` semantics retained |
| MAYBE_FP_HU / MAYBE_FP_RU only | 0 (without `--strict`) | exit 0, commit OK — v0.31 false-positive escape |
| User invokes `git commit --no-verify` | (hook bypassed) | commit OK regardless |

NETWORK_ERR soft-pass is **intentional**: a developer working offline (train, plane, NCBI partial outage) should not be blocked from committing non-PMID work. The HU/RU-MAYBE_FP soft-pass mirrors v0.31's `--strict` opt-in default.

## 5. Known limitation

`verify-pmids.mjs` currently reads **only HU body files** (v0.32 §8 (b), deferred). The hook **does trigger** on any-lang staged file change (regex matches `(hu|en|pl)`), but the underlying verify call inspects the HU file's `studies[]` array. Implication:

- ✅ HU-side PMID change → caught (HU body re-read, verify runs)
- ⚠️ EN-only or PL-only PMID change without matching HU change → **passes** (HU body unchanged, study-set identical to last commit, verify returns OK)

This is mitigated in practice by the **3-lang atomic-write convention**: `apply-pmid-fix.mjs` and all v0.28-v0.30 mega-fix scripts write all 3 langs in one go, so any PMID change touches HU in lockstep. A hand-edit that violates this convention slips through silently.

**Documented as known limitation in spec; deferred fix to v0.34** (`(b) per-lang body reading` from v0.32 §8). Not blocking v0.33 ship.

## 6. Files changed

| File | Change | Net diff |
|---|---|---|
| `package.json` | +husky devDep + 2 scripts | +3 / -0 |
| `package-lock.json` | husky resolution | ~+50 |
| `scripts/verify-staged-entries.mjs` | NEW | +60 |
| `scripts/test/verify-staged-entries.test.mjs` | NEW: 4-case unit test | +40 |
| `.husky/pre-commit` | NEW: 3-line hook stub | +3 |
| `.husky/_/.gitignore` | NEW: husky auto-init artifact | +2 |
| `docs/superpowers/specs/2026-05-26-v033-precommit-hook-design.md` | NEW: this spec | (this file) |
| `docs/superpowers/plans/2026-05-26-v033-precommit-hook.md` | NEW: implementation plan | next step |

**No `src/` changes. No data file changes. No Vercel deploy. Bundle byte-identical.**

## 7. Ship cadence

**Subagent-driven (v0.31/v0.32 pattern):**

```
Worktree:    .worktrees/feat-v033-precommit-hook/
Branch:      feat/v033-precommit-hook (from master b9c68c8)
```

**Commit sequence (TDD-séma, 4 task + 1 docs + 1 merge):**

1. `chore(deps): add husky@^9 + prepare script` (Task 1, haiku — mechanical)
2. `feat(scripts): verify-staged-entries.mjs + 4-case unit test` (Task 2, sonnet — parser + orchestrator with TDD)
3. `feat(ci): .husky/pre-commit hook for entry-data verify-pmids gate` (Task 3, haiku — 3-line POSIX sh)
4. `chore(superpowers): v0.33 spec + implementation plan` (docs commit, separately)
5. Merge `feat/v033-precommit-hook` → master with `--no-ff`
6. Tag `v0.33-precommit-hook` on merge commit
7. Push `origin master --tags`

**Subagent allocation:**

- Task 1 (husky install): **haiku** implementer + **sonnet** code-reviewer
- Task 2 (parser + orchestrator): **sonnet** implementer + **sonnet** spec-reviewer + **sonnet** code-reviewer (TDD with 4 offline cases — thinking-task)
- Task 3 (hook file): **haiku** implementer + **sonnet** code-reviewer (LF line-ending + permissions)
- Final branch review: **sonnet** code-reviewer

## 8. Risks

- **Husky 9 path-resolution on Windows:** husky 9's `_/husky.sh` shim is POSIX-sh compatible and runs under Git Bash / WSL / native Windows git-for-windows shell. Smoke-test on Windows pre-merge required.
- **CRLF line-ending corruption:** `.gitattributes` already enforces `* text=auto eol=lf` — verify `.husky/pre-commit` checks in as LF (binary diff check `file .husky/pre-commit`).
- **husky `prepare` script in `npm install`:** if a downstream user runs `npm install --ignore-scripts`, husky won't auto-init and the hook won't be active. Documented in spec §5 as "self-install requires standard `npm install` flow."
- **`spawnSync` performance:** 1 verify-pmids spawn per entry-pair. 1-3 entries/commit = 1-3 spawn cycles × ~5s NCBI call = ~5-15s. For larger commits (10+ entries — rare, only during mega-fix sessions), consider `--batch` opt-in later. Out of v0.33 scope.
- **False-block on HU-cited paper that real EN-PubMed matches at <0.10 ratio:** mitigated by v0.31 `MAYBE_FP_HU` soft-pass (no exit 1). Not a regression.
- **Test fixture parity:** new `verify-staged-entries.test.mjs` is independent of v0.31 `verify-pmids-detection.test.mjs` and v0.32 `verify-pmids-classify.test.mjs`. All 3 run in parallel without coupling.

## 9. Out of scope (deferred to v0.34+)

- **Per-lang body file reading** (v0.32 §8 (b)) — would let the hook catch EN/PL-only PMID changes. Documented as known limitation in §5.
- **LLM-based HU→EN title translation** (v0.32 §8 (a)) — marginal value post v0.31/v0.32 (0 false-MISMATCH).
- **Entry-data RU-strip write-back** (v0.32 §8 (d)) — body cosmetic cleanup, no functional gain.
- **STATUS TS migration** (v0.32 §8 (e)) — `.ts` toolchain conversion, large effort for a 324-line script.
- **GitHub Action CI-side mirror** — could later add `.github/workflows/verify-pmids.yml` for lib-wide post-merge sanity. Belt+suspenders not required for single-developer setup.
- **Validate-library-meta in hook** — already runs at `npm run build` (build script prefix). Re-running pre-commit is duplicative.
- **`--batch` mode in hook** — only beneficial for 10+ entries staged (mega-fix sessions). Normal commits = 1-3 entries, per-PMID mode is acceptable.

## 10. Acceptance bullets

After all tasks pass:

- [ ] `husky@^9` installed in `devDependencies`, `prepare` script runs on `npm install`
- [ ] `.husky/pre-commit` file present, LF line-endings, executable bit set
- [ ] `scripts/verify-staged-entries.mjs` exports `parseStagedFiles`
- [ ] 4/4 unit-test PASS (`scripts/test/verify-staged-entries.test.mjs`)
- [ ] Manual smoke scenario 1 (clean PMID entry): hook runs, commit OK
- [ ] Manual smoke scenario 2 (tampered PMID): hook fails, commit aborted, MISMATCH visible
- [ ] Manual smoke scenario 3 (non-entry README change): hook silent skip, commit OK
- [ ] Manual smoke scenario 4 (`--no-verify` bypass): commit OK regardless of PMID state
- [ ] Lib-wide regression sweep: `verify-pmids --lib <id> --batch` PASS on all 4 libs, exit 0
- [ ] v0.31 12-case `isHuRuTitle` test still 12/12 PASS
- [ ] v0.32 8-case `classifyOverlap` test still 8/8 PASS
- [ ] `npm run build` PASS, bundle byte-identical (scripts-only)
- [ ] `v0.33-precommit-hook` tag pushed to origin
- [ ] No Vercel deploy required (scripts-only, src bundle unchanged)
