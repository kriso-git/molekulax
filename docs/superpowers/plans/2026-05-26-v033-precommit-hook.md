# v0.33 Pre-commit Hook Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a husky-based local pre-commit hook that runs `verify-pmids` on staged entry-data files, blocking commits that introduce fabricated PMIDs.

**Architecture:** One new orchestrator script (`scripts/verify-staged-entries.mjs`) that parses staged file paths, dedupes by `(libId, entryId)`, and spawns `verify-pmids --lib <id> --entry <slug>` per pair. Hook stub (`.husky/pre-commit`, 3 lines) invokes the orchestrator. Failure surfaces as exit 1 → commit aborted; standard `git commit --no-verify` escape hatch retained. Husky's `prepare` npm-script auto-installs the hook on `npm install`.

**Tech Stack:** Node.js ESM, husky@^9, POSIX sh (hook), `git diff --cached` plumbing, existing `verify-pmids.mjs` (v0.32 `--lib --entry` CLI).

**Spec:** [`docs/superpowers/specs/2026-05-26-v033-precommit-hook-design.md`](../specs/2026-05-26-v033-precommit-hook-design.md)

---

## File Structure

| Path | Action | Responsibility |
|---|---|---|
| `package.json` | Modify | Add `husky@^9.1.0` devDep + `prepare` + `verify:staged` scripts |
| `package-lock.json` | Auto-modify | npm install resolution |
| `scripts/verify-staged-entries.mjs` | Create (~60 lines) | Parse staged paths, dedupe pairs, spawn verify-pmids per pair |
| `scripts/test/verify-staged-entries.test.mjs` | Create (~50 lines) | Offline TDD: 4 cases for `parseStagedFiles` pure-fn |
| `.husky/pre-commit` | Create (3 lines, LF) | POSIX-sh shim invoking the orchestrator |
| `.husky/_/` | Auto-created by husky | Internal husky scaffolding (auto-gitignored via `_/_.gitignore`) |

**Boundaries:** `parseStagedFiles` is a pure-fn (testable offline). `main()` is the orchestrator (git-call + spawn). Hook file is a 3-line invoker only — all logic lives in the `.mjs`.

---

## Task 1: Install husky + add npm scripts

**Files:**
- Modify: `package.json`
- Auto-modify: `package-lock.json`
- Create (auto): `.husky/_/` directory + `.husky/_/.gitignore` (husky scaffolding, auto-gitignored)

- [ ] **Step 1: Install husky as devDep**

Run: `npm install --save-dev husky@^9.1.0`
Expected: `+ husky@9.1.x added 1 package`. No vulnerabilities should be introduced specifically by husky.

- [ ] **Step 2: Add `prepare` and `verify:staged` to package.json scripts**

Edit `package.json` `scripts` block (insert AFTER `convert-images`, BEFORE the closing `}`):

```json
  "scripts": {
    "dev": "vite",
    "build": "node scripts/validate-library-meta.mjs && vite build",
    "preview": "vite preview",
    "validate:meta": "node scripts/validate-library-meta.mjs",
    "normalize-vials": "node scripts/normalize-vials.mjs",
    "pipeline:extract": "node scripts/data-pipeline/extract-sean-notes.mjs",
    "pipeline:scrape": "node scripts/data-pipeline/scrape-dopamine-club.mjs",
    "pipeline:normalize": "node scripts/data-pipeline/normalize.mjs",
    "pipeline:diff": "node scripts/data-pipeline/merge-and-diff.mjs",
    "pipeline:apply": "node scripts/data-pipeline/apply-patches.mjs",
    "convert-images": "node scripts/convert-images.mjs",
    "prepare": "husky",
    "verify:staged": "node scripts/verify-staged-entries.mjs"
  },
```

- [ ] **Step 3: Initialize husky scaffolding**

Run: `npm run prepare`
Expected: silent success. Creates `.husky/_/` directory with `husky.sh` + auto-gitignore.

- [ ] **Step 4: Verify husky scaffolding present**

Run: `ls .husky/_/`
Expected output (Bash):
```
.gitignore
applypatch-msg
commit-msg
h
husky.sh
post-applypatch
... (etc.)
pre-commit
... (etc.)
```

If `.husky/_/husky.sh` is missing, husky init failed. Re-run `npm run prepare` or `npx husky` to fix.

- [ ] **Step 5: Stage + commit**

Run:
```bash
git add package.json package-lock.json
git status -sb
```

Expected: only `package.json` and `package-lock.json` modified. `.husky/_/` is auto-gitignored by husky (via `.husky/_/.gitignore` with `*`).

Run:
```bash
git commit -m "chore(deps): add husky@^9 + prepare script for pre-commit hook"
```

---

## Task 2: parseStagedFiles pure-fn + 4-case TDD

**Files:**
- Create: `scripts/test/verify-staged-entries.test.mjs`
- Create: `scripts/verify-staged-entries.mjs` (parseStagedFiles only; main() in Task 3)

- [ ] **Step 1: Write failing test with 4 cases**

Create `scripts/test/verify-staged-entries.test.mjs`:

```javascript
// Offline unit test for parseStagedFiles. No git-shell, no network.
// Tests the pure-fn that filters staged file paths and dedupes (libId, entryId) pairs.

import assert from 'node:assert/strict'
import { parseStagedFiles } from '../verify-staged-entries.mjs'

const cases = [
  {
    name: 'single entry, HU only',
    input: ['src/data/libraries/peptides/entries/hu/retatrutide.js'],
    expected: [{ libId: 'peptides', entryId: 'retatrutide' }],
  },
  {
    name: '3-lang of same entry de-dupes to 1 pair',
    input: [
      'src/data/libraries/peptides/entries/hu/retatrutide.js',
      'src/data/libraries/peptides/entries/en/retatrutide.js',
      'src/data/libraries/peptides/entries/pl/retatrutide.js',
    ],
    expected: [{ libId: 'peptides', entryId: 'retatrutide' }],
  },
  {
    name: 'cross-library returns 2 pairs, sorted by libId then entryId',
    input: [
      'src/data/libraries/peptides/entries/hu/retatrutide.js',
      'src/data/libraries/nootropics/entries/hu/piracetam.js',
    ],
    expected: [
      { libId: 'nootropics', entryId: 'piracetam' },
      { libId: 'peptides', entryId: 'retatrutide' },
    ],
  },
  {
    name: 'non-entry files return empty array (no false trigger)',
    input: [
      'README.md',
      'src/App.jsx',
      'scripts/verify-pmids.mjs',
      'docs/superpowers/specs/foo.md',
      'src/data/libraries/peptides/index.js',
    ],
    expected: [],
  },
]

let passed = 0
let failed = 0
for (const c of cases) {
  try {
    const actual = parseStagedFiles(c.input)
    assert.deepEqual(actual, c.expected)
    console.log(`✓ ${c.name}`)
    passed++
  } catch (err) {
    console.error(`✗ ${c.name}`)
    console.error(`  expected: ${JSON.stringify(c.expected)}`)
    console.error(`  actual:   ${JSON.stringify(err.actual)}`)
    failed++
  }
}

console.log(`\n${passed}/${cases.length} PASS${failed > 0 ? `, ${failed} FAIL` : ''}`)
if (failed > 0) process.exit(1)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test/verify-staged-entries.test.mjs`

Expected: `Error [ERR_MODULE_NOT_FOUND]: Cannot find module '...verify-staged-entries.mjs'` — the orchestrator file doesn't exist yet.

- [ ] **Step 3: Create verify-staged-entries.mjs with parseStagedFiles only**

Create `scripts/verify-staged-entries.mjs`:

```javascript
// Pre-commit gate: runs verify-pmids on staged entry-data files.
// Triggered by .husky/pre-commit. Exits 1 on any PMID failure → commit aborted.
// Bypass via `git commit --no-verify`.

import { execSync, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ENTRY_FILE_RE = /^src\/data\/libraries\/(peptides|nootropics|performance|pharmaceutical)\/entries\/(hu|en|pl)\/([\w-]+)\.js$/

export function parseStagedFiles(stagedList) {
  const seen = new Map()
  for (const file of stagedList) {
    const m = ENTRY_FILE_RE.exec(file)
    if (!m) continue
    const libId = m[1]
    const entryId = m[3]
    const key = `${libId}/${entryId}`
    if (!seen.has(key)) seen.set(key, { libId, entryId })
  }
  return [...seen.values()].sort((a, b) => {
    if (a.libId !== b.libId) return a.libId < b.libId ? -1 : 1
    return a.entryId < b.entryId ? -1 : 1
  })
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test/verify-staged-entries.test.mjs`

Expected output:
```
✓ single entry, HU only
✓ 3-lang of same entry de-dupes to 1 pair
✓ cross-library returns 2 pairs, sorted by libId then entryId
✓ non-entry files return empty array (no false trigger)

4/4 PASS
```

Exit code: 0.

- [ ] **Step 5: Stage + commit**

```bash
git add scripts/verify-staged-entries.mjs scripts/test/verify-staged-entries.test.mjs
git commit -m "feat(scripts): parseStagedFiles pure-fn + 4-case offline unit test"
```

---

## Task 3: main() orchestrator + ESM main-guard

**Files:**
- Modify: `scripts/verify-staged-entries.mjs` (append main() + main-guard)

- [ ] **Step 1: Append main() async fn + ESM main-guard**

Append to `scripts/verify-staged-entries.mjs` (after the existing `parseStagedFiles` export):

```javascript

async function main() {
  let stdout
  try {
    stdout = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' })
  } catch (err) {
    console.error('[verify-staged-entries] git diff failed:', err.message)
    process.exit(1)
  }

  const stagedList = stdout.split('\n').filter(Boolean)
  const pairs = parseStagedFiles(stagedList)

  if (pairs.length === 0) {
    process.exit(0)
  }

  console.log(`[verify-staged-entries] Checking ${pairs.length} entry pair(s)…`)
  for (const { libId, entryId } of pairs) {
    const result = spawnSync(
      'node',
      ['scripts/verify-pmids.mjs', '--lib', libId, '--entry', entryId],
      { stdio: 'inherit' }
    )
    if (result.status !== 0) {
      console.error(`[verify-staged-entries] FAIL on ${libId}/${entryId} — commit aborted.`)
      console.error('[verify-staged-entries] Bypass (not recommended): git commit --no-verify')
      process.exit(1)
    }
  }
  process.exit(0)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(err => {
    console.error('verify-staged-entries failed:', err)
    process.exit(1)
  })
}
```

- [ ] **Step 2: Smoke test offline path (no entries staged)**

With no entry-data files staged (e.g., right after the previous commit), run:

```bash
node scripts/verify-staged-entries.mjs
echo "exit: $?"
```

Expected: no output (silent no-op), exit 0.

- [ ] **Step 3: Re-run unit test to confirm parseStagedFiles intact**

Run: `node scripts/test/verify-staged-entries.test.mjs`

Expected: `4/4 PASS` (the main() append must not break the import or sort logic).

- [ ] **Step 4: Stage + commit**

```bash
git add scripts/verify-staged-entries.mjs
git commit -m "feat(scripts): verify-staged-entries main() orchestrator + ESM main-guard"
```

---

## Task 4: Create .husky/pre-commit hook

**Files:**
- Create: `.husky/pre-commit` (3 lines, LF line-endings)

- [ ] **Step 1: Write the hook file**

Create `.husky/pre-commit` (POSIX sh, MUST use LF line-endings):

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
node scripts/verify-staged-entries.mjs
```

If your editor saves CRLF by default, after writing run:
```bash
dos2unix .husky/pre-commit 2>/dev/null || sed -i 's/\r$//' .husky/pre-commit
```

- [ ] **Step 2: Verify LF line-endings**

Run (Bash):
```bash
file .husky/pre-commit
```

Expected: `POSIX shell script, ASCII text executable` — NOT `with CRLF line terminators`.

If CRLF appears, re-run the dos2unix/sed command from Step 1.

- [ ] **Step 3: Mark executable in git index**

Run:
```bash
git update-index --chmod=+x .husky/pre-commit
git ls-files --stage .husky/pre-commit
```

Expected: mode bits `100755` (NOT `100644`):
```
100755 <sha> 0	.husky/pre-commit
```

- [ ] **Step 4: Stage + commit**

```bash
git add .husky/pre-commit
git commit -m "feat(ci): .husky/pre-commit hook for entry-data verify-pmids gate"
```

---

## Task 5: Manual smoke test + acceptance verification

No new commits in this task — verification only. Any tampering is reverted at the end of its scenario.

**Smoke 1: clean entry edit passes the hook**

- [ ] **Step 1: Touch a clean entry, commit, expect PASS**

```bash
# Choose a known-clean entry (retatrutide is PMID-clean post v0.30)
ENTRY_FILE="src/data/libraries/peptides/entries/hu/retatrutide.js"

# Make a no-op change (append + remove a newline to trigger staging diff)
node -e "const fs=require('fs');const f='$ENTRY_FILE';const c=fs.readFileSync(f,'utf8');fs.writeFileSync(f,c.trimEnd()+'\n');"

git add "$ENTRY_FILE"
git commit -m "test: smoke 1 — clean entry passes hook (will revert)"
```

Expected console output (during commit):
```
[verify-staged-entries] Checking 1 entry pair(s)…
🔍 Verifying peptides/retatrutide … (verify-pmids output)
✅ All PMIDs verified.
```

Commit succeeds. Then revert the test commit (do NOT push):
```bash
git reset --hard HEAD~1
```

**Smoke 2: tampered PMID blocks the hook**

- [ ] **Step 2: Inject a fabricated PMID and confirm the hook blocks the commit**

```bash
ENTRY_FILE="src/data/libraries/peptides/entries/hu/retatrutide.js"

# Replace one real PMID with a fabricated one (e.g., 99999999 — non-existent in PubMed)
# Pick a real PMID currently in the file; safest is the first one.
REAL_PMID=$(grep -oE 'pmid: '"'"'[0-9]+' "$ENTRY_FILE" | head -1 | grep -oE '[0-9]+')
sed -i "s/pmid: '${REAL_PMID}'/pmid: '99999999'/" "$ENTRY_FILE"

git add "$ENTRY_FILE"
git commit -m "test: smoke 2 — tampered PMID (should be blocked)"
```

Expected: commit ABORTED. Output contains:
```
[verify-staged-entries] Checking 1 entry pair(s)…
🔍 Verifying peptides/retatrutide …
  NOT_FOUND: PMID 99999999
[verify-staged-entries] FAIL on peptides/retatrutide — commit aborted.
```

Exit code non-zero. Now revert the tampering:
```bash
git restore --staged "$ENTRY_FILE"
git checkout -- "$ENTRY_FILE"
git status -sb  # expect: clean
```

**Smoke 3: non-entry change is silent-skip**

- [ ] **Step 3: Commit a non-entry file change**

```bash
echo "" >> docs/superpowers/specs/2026-05-26-v033-precommit-hook-design.md
git add docs/superpowers/specs/2026-05-26-v033-precommit-hook-design.md
git commit -m "test: smoke 3 — non-entry file silent skip (will revert)"
```

Expected: hook produces NO output (no `[verify-staged-entries]` line). Commit succeeds.

Then revert:
```bash
git reset --hard HEAD~1
```

**Smoke 4: --no-verify bypass works**

- [ ] **Step 4: Tamper again, bypass with --no-verify**

```bash
ENTRY_FILE="src/data/libraries/peptides/entries/hu/retatrutide.js"
REAL_PMID=$(grep -oE 'pmid: '"'"'[0-9]+' "$ENTRY_FILE" | head -1 | grep -oE '[0-9]+')
sed -i "s/pmid: '${REAL_PMID}'/pmid: '99999999'/" "$ENTRY_FILE"

git add "$ENTRY_FILE"
git commit --no-verify -m "test: smoke 4 — --no-verify bypass (will revert)"
```

Expected: commit succeeds despite fabricated PMID. NO hook output. Confirms the standard git escape hatch works.

Then revert:
```bash
git reset --hard HEAD~1
git status -sb  # expect: clean
```

**Final verification**

- [ ] **Step 5: Re-run all 3 unit tests**

```bash
node scripts/test/verify-pmids-detection.test.mjs   # v0.31, 12/12
node scripts/test/verify-pmids-classify.test.mjs    # v0.32, 8/8
node scripts/test/verify-staged-entries.test.mjs    # v0.33, 4/4
```

Expected: total `24/24 PASS` across the 3 test files.

- [ ] **Step 6: Build smoke**

Run: `npm run build`

Expected: PASS, build time ~10-12s, vendor 165.76 KiB unchanged (bundle byte-identical to b9c68c8 — scripts-only change).

- [ ] **Step 7: Lib-wide regression sweep**

Run:
```bash
node scripts/verify-pmids.mjs --lib peptides --batch
node scripts/verify-pmids.mjs --lib nootropics --batch
node scripts/verify-pmids.mjs --lib performance --batch
node scripts/verify-pmids.mjs --lib pharmaceutical --batch
```

Expected: all 4 → `✅ All PMIDs verified.` exit 0. Total ~11s for 407 PMIDs.

- [ ] **Step 8: Confirm acceptance bullets**

Cross-check against spec §10. All 13 bullets should now be checkable. If any fails, return to the relevant task.

---

## Self-Review (writing-plans skill)

**Spec coverage check** (cross-referenced against spec §1-10):
- §1 What ships → Tasks 1-4 (husky install + scripts + hook + tests) ✓
- §2 Why now → no implementation needed (motivation context) ✓
- §3.1 New files (verify-staged-entries.mjs, .husky/pre-commit, test) → Tasks 2-4 ✓
- §3.2 Modified package.json → Task 1 Step 2 ✓
- §3.3 Data flow → Task 3 main() impl ✓
- §4 Failure modes → Task 5 smoke tests 1-4 cover all modes ✓
- §5 Known limitation → noted in spec, not impl-actionable ✓
- §6 Files changed → Tasks 1-4 cover all rows ✓
- §7 Ship cadence → 4 commits + final verify (Task 5 = no-commit), matches §7 sequence ✓
- §8 Risks → CRLF risk addressed in Task 4 Step 1-2; husky 9 path addressed by `npm run prepare`; spawnSync perf budget noted ✓
- §9 Out of scope → no tasks needed ✓
- §10 Acceptance bullets → Task 5 Step 8 confirms all ✓

**Placeholder scan:** No TBD/TODO/fill-in. All steps have concrete code or exact commands.

**Type consistency:** `parseStagedFiles` signature (`Array<string>` → `Array<{libId, entryId}>`) consistent between test (Task 2 Step 1) and impl (Task 2 Step 3) and main() consumer (Task 3 Step 1). `verify-pmids.mjs` CLI (`--lib <id> --entry <slug>`) matches spec §3.1, Task 3 Step 1 spawnSync args, and the live `scripts/verify-pmids.mjs:30-31` arg parser.

No issues found.
