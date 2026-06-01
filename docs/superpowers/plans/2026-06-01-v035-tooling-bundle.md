# v0.35 tooling-bundle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a cross-platform `npm test`, an offline cross-lang `{pmid,title}` drift guard wired into the pre-commit hook + CI, and a `--lang` flag on verify-pmids (removing the `lang='hu'` hardcode).

**Architecture:** A new self-contained offline script `scripts/verify-lang-consistency.mjs` (pure `compareEntryStudies` + filesystem walker) is the core. verify-pmids gains a backward-compatible `--lang` flag. The hook runs the drift check (offline) before its existing HU network verify; CI runs the drift check in its offline job. No `src/` change — bundle byte-identical.

**Tech Stack:** Node 20 (local) / Node 24 (CI), `node:test` runner, ESM `.mjs` scripts, husky pre-commit, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-06-01-v035-tooling-bundle-design.md`

**Conventions to follow:**
- Test files use the **plain-script convention** (custom `cases` loop + `assert` from `node:assert/strict` + `process.exit(1)` on failure), NOT the `node:test` `test()` API. See `scripts/test/verify-staged-entries.test.mjs`.
- Imports match `verify-pmids.mjs` style: `from 'fs'`, `from 'path'`, `from 'url'`.
- ESM main-guard: `if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()`.
- All `node` / `npm` commands run from the worktree root: `e:/Website Biz/molekulax/.worktrees/feat-v035-tooling-bundle`.

---

## Task 1: `test` npm-script

**Files:**
- Modify: `package.json` (scripts block)

- [ ] **Step 1: Add the `test` script**

In `package.json`, inside `"scripts"`, add a `"test"` entry. Change:
```json
    "prepare": "husky",
    "verify:staged": "node scripts/verify-staged-entries.mjs"
```
to:
```json
    "prepare": "husky",
    "verify:staged": "node scripts/verify-staged-entries.mjs",
    "test": "node --test scripts/test/"
```
(Directory argument — NOT a glob. The glob form `scripts/test/*.test.mjs` fails when npm runs it on Windows/Node 20, because neither cmd.exe nor Node < 21 expands it.)

- [ ] **Step 2: Run it and verify it passes**

Run: `npm test`
Expected: the 4 existing test files run; summary `# tests 4` / `# pass 4` / `# fail 0`; exit 0.

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "chore(scripts): add cross-platform test npm-script (node --test directory arg)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 2: Drift guard pure function `compareEntryStudies`

**Files:**
- Create: `scripts/verify-lang-consistency.mjs` (pure-fn portion only this task)
- Create: `scripts/test/verify-lang-consistency.test.mjs`

- [ ] **Step 1: Write the failing test**

Create `scripts/test/verify-lang-consistency.test.mjs`:
```js
// Offline unit test for compareEntryStudies. No filesystem, no network.
// Verifies cross-lang drift detection on {pmid, title} sequences.

import assert from 'node:assert/strict'
import { compareEntryStudies } from '../verify-lang-consistency.mjs'

const study = (pmid, title, extra = {}) => ({ pmid, title, ...extra })

const cases = [
  {
    name: 'identical pmid+title across langs (translated finding ignored) → ok',
    input: {
      hu: [study('111', 'Alpha trial', { finding: 'magyar' })],
      en: [study('111', 'Alpha trial', { finding: 'english' })],
      pl: [study('111', 'Alpha trial', { finding: 'polski' })],
    },
    expected: { ok: true, diffs: [] },
  },
  {
    name: 'pmid drift in en at index 1 → fail',
    input: {
      hu: [study('111', 'A'), study('222', 'B')],
      en: [study('111', 'A'), study('999', 'B')],
      pl: [study('111', 'A'), study('222', 'B')],
    },
    expected: { ok: false, diffs: [{ lang: 'en', index: 1, field: 'pmid', hu: '222', other: '999' }] },
  },
  {
    name: 'title drift in pl at index 0 → fail',
    input: {
      hu: [study('111', 'Real title')],
      en: [study('111', 'Real title')],
      pl: [study('111', 'Wrong title')],
    },
    expected: { ok: false, diffs: [{ lang: 'pl', index: 0, field: 'title', hu: 'Real title', other: 'Wrong title' }] },
  },
  {
    name: 'count mismatch (en shorter, overlap matches) → single count diff',
    input: {
      hu: [study('111', 'A'), study('222', 'B')],
      en: [study('111', 'A')],
      pl: [study('111', 'A'), study('222', 'B')],
    },
    expected: { ok: false, diffs: [{ lang: 'en', index: -1, field: 'count', hu: 2, other: 1 }] },
  },
  {
    name: 'missing lang (en undefined) → count diff hu=1 en=0',
    input: {
      hu: [study('111', 'A')],
      en: undefined,
      pl: [study('111', 'A')],
    },
    expected: { ok: false, diffs: [{ lang: 'en', index: -1, field: 'count', hu: 1, other: 0 }] },
  },
  {
    name: 'all empty studies → ok',
    input: { hu: [], en: [], pl: [] },
    expected: { ok: true, diffs: [] },
  },
  {
    name: 'trailing-whitespace-only title diff → ok (trim lenience)',
    input: {
      hu: [study('111', 'Trimmed')],
      en: [study('111', '  Trimmed  ')],
      pl: [study('111', 'Trimmed')],
    },
    expected: { ok: true, diffs: [] },
  },
]

let passed = 0
let failed = 0
for (const c of cases) {
  try {
    assert.deepEqual(compareEntryStudies(c.input), c.expected)
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

Run: `node --test scripts/test/verify-lang-consistency.test.mjs`
Expected: FAIL — cannot resolve/import `compareEntryStudies` from `../verify-lang-consistency.mjs` (file does not exist yet).

- [ ] **Step 3: Write the minimal implementation**

Create `scripts/verify-lang-consistency.mjs`:
```js
// Cross-lang consistency guard. Offline (no network). For each entry, the
// `studies[]` {pmid, title} sequence must be identical across hu/en/pl —
// only tag/tagText/finding are translated. Exits 1 on any drift.
//
// Run: node scripts/verify-lang-consistency.mjs [--lib <id>] [--entry <slug>]

function toSeq(studies) {
  const arr = Array.isArray(studies) ? studies : []
  return arr.map(s => ({
    pmid: String(s?.pmid ?? '').trim(),
    title: String(s?.title ?? '').trim(),
  }))
}

// Compare en and pl against hu (reference). Returns { ok, diffs }.
// Diff: { lang, index, field: 'count'|'pmid'|'title', hu, other }.
// For 'count', index = -1 and hu/other are the array lengths.
export function compareEntryStudies({ hu, en, pl }) {
  const ref = toSeq(hu)
  const diffs = []
  for (const lang of ['en', 'pl']) {
    const other = toSeq(lang === 'en' ? en : pl)
    if (other.length !== ref.length) {
      diffs.push({ lang, index: -1, field: 'count', hu: ref.length, other: other.length })
    }
    const n = Math.min(ref.length, other.length)
    for (let i = 0; i < n; i++) {
      if (other[i].pmid !== ref[i].pmid) {
        diffs.push({ lang, index: i, field: 'pmid', hu: ref[i].pmid, other: other[i].pmid })
      }
      if (other[i].title !== ref[i].title) {
        diffs.push({ lang, index: i, field: 'title', hu: ref[i].title, other: other[i].title })
      }
    }
  }
  return { ok: diffs.length === 0, diffs }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test scripts/test/verify-lang-consistency.test.mjs`
Expected: PASS — `# pass 1` (file-level), and the file prints `7/7 PASS`.

- [ ] **Step 5: Commit**

```bash
git add scripts/verify-lang-consistency.mjs scripts/test/verify-lang-consistency.test.mjs
git commit -m "feat(scripts): compareEntryStudies cross-lang drift pure-fn + 7-case offline test

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 3: Drift guard walker (`main()`) + `verify:consistency` script

**Files:**
- Modify: `scripts/verify-lang-consistency.mjs` (append imports + walker + main-guard)
- Modify: `package.json` (add `verify:consistency` script)

- [ ] **Step 1: Add imports at the top of `scripts/verify-lang-consistency.mjs`**

Insert these lines at the very top of the file, ABOVE the existing leading comment block is not required — place the imports directly after the comment block (before `function toSeq`):
```js
import { readdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const LANGS = ['hu', 'en', 'pl']

const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null
```

- [ ] **Step 2: Append the walker + main-guard at the BOTTOM of the file (after `compareEntryStudies`)**

```js
async function loadStudies(entriesDir, lang, slug) {
  const p = resolve(entriesDir, lang, `${slug}.js`)
  if (!existsSync(p)) return undefined
  const mod = await import(`file://${p.replace(/\\/g, '/')}`)
  return mod.default?.studies
}

async function main() {
  let driftCount = 0
  let checked = 0
  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries')
    if (!existsSync(resolve(entriesDir, 'hu'))) continue

    const slugSet = new Set()
    for (const lang of LANGS) {
      const dir = resolve(entriesDir, lang)
      if (!existsSync(dir)) continue
      for (const f of readdirSync(dir)) {
        if (f.endsWith('.js')) slugSet.add(f.replace(/\.js$/, ''))
      }
    }

    for (const slug of [...slugSet].sort()) {
      if (entryFilter && slug !== entryFilter) continue
      const [hu, en, pl] = await Promise.all(LANGS.map(l => loadStudies(entriesDir, l, slug)))
      const { ok, diffs } = compareEntryStudies({ hu, en, pl })
      checked++
      if (ok) {
        console.log(`  ✅ ${libId}/${slug}`)
      } else {
        driftCount++
        console.log(`  ❌ ${libId}/${slug}`)
        for (const d of diffs) {
          if (d.field === 'count') {
            console.log(`     [${d.lang}] study count: hu=${d.hu} ${d.lang}=${d.other}`)
          } else {
            console.log(`     [${d.lang}] #${d.index} ${d.field}: hu="${d.hu}" ${d.lang}="${d.other}"`)
          }
        }
      }
    }
  }
  console.log(`\nChecked ${checked} entr${checked === 1 ? 'y' : 'ies'}, ${driftCount} with drift.`)
  process.exit(driftCount > 0 ? 1 : 0)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(err => {
    console.error('verify-lang-consistency failed:', err)
    process.exit(1)
  })
}
```

- [ ] **Step 3: Verify the unit test still passes (import has no side effects)**

Run: `node --test scripts/test/verify-lang-consistency.test.mjs`
Expected: PASS (`7/7 PASS`). The main-guard prevents `main()` from running on import.

- [ ] **Step 4: Verify lib-wide run is clean (exit 0)**

Run: `node scripts/verify-lang-consistency.mjs; echo "exit=$?"`
Expected: a `✅ <lib>/<slug>` line per entry, a final `Checked NNN entries, 0 with drift.`, and `exit=0`.

- [ ] **Step 5: Verify a forced drift is caught (exit 1), then revert**

Use the **Edit tool** to change the first study's PMID in `src/data/libraries/peptides/entries/en/retatrutide.js` from `"41090431"` to `"99999999"` (a deliberate cross-lang divergence, since hu/pl keep `"41090431"`).

```bash
node scripts/verify-lang-consistency.mjs --lib peptides --entry retatrutide; echo "exit=$?"
# Expected: ❌ peptides/retatrutide with a [en] #0 pmid diff, "1 with drift.", exit=1
git checkout -- src/data/libraries/peptides/entries/en/retatrutide.js
node scripts/verify-lang-consistency.mjs --lib peptides --entry retatrutide; echo "exit=$?"
# Expected: ✅ peptides/retatrutide, "0 with drift.", exit=0
```

- [ ] **Step 6: Add `verify:consistency` script to `package.json`**

Change:
```json
    "verify:staged": "node scripts/verify-staged-entries.mjs",
    "test": "node --test scripts/test/"
```
to:
```json
    "verify:staged": "node scripts/verify-staged-entries.mjs",
    "verify:consistency": "node scripts/verify-lang-consistency.mjs",
    "test": "node --test scripts/test/"
```

- [ ] **Step 7: Commit**

```bash
git add scripts/verify-lang-consistency.mjs package.json
git commit -m "feat(scripts): verify-lang-consistency walker + verify:consistency script

Walks all libs/entries, reads hu/en/pl studies, reports cross-lang drift,
exits 1 on any divergence. Offline (no network).

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 4: `verify-pmids --lang` flag (remove `lang='hu'` hardcode)

**Files:**
- Modify: `scripts/verify-pmids.mjs:6` (docstring), `:37-40` (arg parse + validation), `:212` (use flag)

- [ ] **Step 1: Add `--lang` to the usage docstring**

Change line 6:
```js
// Run: node scripts/verify-pmids.mjs [--lib <id>] [--entry <slug>] [--suggest] [--strict] [--batch] [--ci]
```
to:
```js
// Run: node scripts/verify-pmids.mjs [--lib <id>] [--entry <slug>] [--lang <hu|en|pl>] [--suggest] [--strict] [--batch] [--ci]
```

- [ ] **Step 2: Parse `--lang` and validate it (reusing the now-repurposed `langs` allowlist)**

After the `const ciMode = args.includes('--ci')` line (line 37), add:
```js
const langArg = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : 'hu'
```
Then change the dead-code line 40 from:
```js
const langs = ['hu', 'en', 'pl']
```
to (keep the const, add validation immediately after it):
```js
const langs = ['hu', 'en', 'pl']
if (!langs.includes(langArg)) {
  console.error(`Invalid --lang "${langArg}". Expected one of: ${langs.join(', ')}`)
  process.exit(1)
}
```

- [ ] **Step 3: Use the flag at the Pass-1 read site**

Change line 212:
```js
    const lang = 'hu'
```
to:
```js
    const lang = langArg
```

- [ ] **Step 4: Verify invalid `--lang` exits 1 (offline, no network)**

Run: `node scripts/verify-pmids.mjs --lang xx --entry foo; echo "exit=$?"`
Expected: `Invalid --lang "xx". Expected one of: hu, en, pl` and `exit=1` (exits before any network call).

- [ ] **Step 5: Verify backward-compat + EN read (single-entry network smoke)**

```bash
node scripts/verify-pmids.mjs --entry retatrutide --lib peptides; echo "exit=$?"
# Expected: reads HU (default), per-PMID OK lines, exit=0 — byte-identical to current behavior
node scripts/verify-pmids.mjs --lang en --entry retatrutide --lib peptides; echo "exit=$?"
# Expected: reads EN body, same PMIDs verified OK (titles are lang-invariant), exit=0
```

- [ ] **Step 6: Commit**

```bash
git add scripts/verify-pmids.mjs
git commit -m "feat(scripts): verify-pmids --lang flag (default hu), remove lang hardcode

Repurposes the previously-dead 'langs' const as the --lang allowlist.
Default 'hu' keeps hook/CI/lib-wide behavior byte-identical.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 5: Pre-commit hook — drift-check step

**Files:**
- Modify: `scripts/verify-staged-entries.mjs` (per-pair loop in `main()`)

- [ ] **Step 1: Add the drift-check spawn before the network verify**

In `scripts/verify-staged-entries.mjs`, inside the `for (const { libId, entryId } of pairs)` loop, BEFORE the existing `const result = spawnSync('node', ['scripts/verify-pmids.mjs', ...])` block, insert:
```js
    const drift = spawnSync(
      'node',
      ['scripts/verify-lang-consistency.mjs', '--lib', libId, '--entry', entryId],
      { stdio: 'inherit' }
    )
    if (drift.error) {
      console.error(`[verify-staged-entries] drift-check spawn failed: ${drift.error.message}`)
      process.exit(1)
    }
    if (drift.status !== 0) {
      console.error(`[verify-staged-entries] FAIL (cross-lang drift) on ${libId}/${entryId} — commit aborted.`)
      console.error('[verify-staged-entries] Bypass (not recommended): git commit --no-verify')
      process.exit(1)
    }
```
(The existing HU network verify block stays unchanged immediately after this.)

- [ ] **Step 2: Verify the parseStagedFiles unit test is unaffected**

Run: `node --test scripts/test/verify-staged-entries.test.mjs`
Expected: PASS (`4/4 PASS`). `parseStagedFiles` is unchanged.

- [ ] **Step 3: Hook smoke — drift blocks a commit**

Use the **Edit tool** to change the first study's PMID in `src/data/libraries/peptides/entries/en/retatrutide.js` from `"41090431"` to `"99999999"` (cross-lang drift vs hu/pl).

```bash
git add src/data/libraries/peptides/entries/en/retatrutide.js
git commit -m "TEST: should be blocked by drift check" 2>&1 | tail -5
# Expected: ❌ peptides/retatrutide drift output + "FAIL (cross-lang drift)" + commit aborted (no new commit)
git restore --staged src/data/libraries/peptides/entries/en/retatrutide.js
git checkout -- src/data/libraries/peptides/entries/en/retatrutide.js
```

- [ ] **Step 4: Hook smoke — clean entry still commits (drift + network both pass)**

Use the **Edit tool** to make a genuine but non-drifting change: append ` ` (or a word) to the `finding` string of the first study in `src/data/libraries/peptides/entries/hu/retatrutide.js`. `finding` is a translated field, NOT part of the drift comparison, so this is a real diff that must pass both gates.

```bash
git add src/data/libraries/peptides/entries/hu/retatrutide.js
git commit -m "TEST: benign finding edit, should pass" 2>&1 | tail -5
# Expected: drift ✅ (finding ignored) + HU verify ✅ (pmids unchanged), commit SUCCEEDS.
# Undo the test commit and restore the file:
git reset --soft HEAD~1
git restore --staged src/data/libraries/peptides/entries/hu/retatrutide.js
git checkout -- src/data/libraries/peptides/entries/hu/retatrutide.js
```

- [ ] **Step 5: Commit**

```bash
git add scripts/verify-staged-entries.mjs
git commit -m "feat(scripts): pre-commit hook runs cross-lang drift check per staged entry

Closes the EN/PL-edit gap: staging only a non-HU file now verifies all
three langs of that entry (offline) before the HU network verify.

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 6: CI integration

**Files:**
- Modify: `.github/workflows/ci.yml` (build-and-test job)

- [ ] **Step 1: Switch the unit-test step to `npm test` and add the consistency step**

In `.github/workflows/ci.yml`, in the `build-and-test` job, change:
```yaml
      - name: Unit tests
        run: node --test scripts/test/*.test.mjs
      - name: Build
        run: npm run build
```
to:
```yaml
      - name: Unit tests
        run: npm test
      - name: Cross-lang consistency (offline)
        run: npm run verify:consistency
      - name: Build
        run: npm run build
```
(The `pmid-gate` job is left unchanged.)

- [ ] **Step 2: Verify the two commands locally (the CI smoke confirms the rest)**

```bash
npm test; echo "test-exit=$?"
npm run verify:consistency; echo "consistency-exit=$?"
```
Expected: `test-exit=0` (now 5 test files: `# tests 5 # pass 5`) and `consistency-exit=0` (0 drift).

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: run npm test + offline cross-lang consistency in build-and-test job

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 7: Final verification matrix (no new artifacts)

**Files:** none (verification only; fix-forward into the relevant task's file if anything fails)

- [ ] **Step 1: Full unit suite via `npm test`**

Run: `npm test`
Expected: `# tests 5 # pass 5 # fail 0` (classify, detection, network, staged, lang-consistency).

- [ ] **Step 2: Baseline drift sweep clean**

Run: `npm run verify:consistency; echo "exit=$?"`
Expected: every entry `✅`, `0 with drift`, `exit=0`. (If any pre-existing drift surfaces, it is a real data bug — fix the divergent entry file and re-run.)

- [ ] **Step 3: HU lib-wide PMID gate still green**

Run: `node scripts/verify-pmids.mjs --batch --ci; echo "exit=$?"`
Expected: `407 PMID OK` (or current count), `exit=0`. (Requires network; transient errors → exit 2, retry once.)

- [ ] **Step 4: Build byte-identical**

Run: `npm run build`
Expected: green; `precache 105 entries (3315.58 KiB)` (matches v0.34 baseline — scripts/CI-only change, no `src/` diff).

- [ ] **Step 5: Confirm no `src/` changes in the branch**

Run: `git diff --stat master -- src/`
Expected: empty output (no `src/` files changed across the whole branch).

---

## Acceptance criteria mapping (from spec §7)

- **AC1** (npm test cross-platform) → Task 1, Task 7 Step 1
- **AC2** (drift tool exit 0 clean / exit 1 + report on drift) → Task 3 Steps 4-5, Task 7 Step 2
- **AC3** (compareEntryStudies unit tests) → Task 2
- **AC4** (`--lang en` reads EN; no-flag byte-identical) → Task 4 Steps 4-5
- **AC5** (hook blocks drift, clean passes) → Task 5 Steps 3-4
- **AC6** (CI offline job runs npm test + consistency + build) → Task 6
- **AC7** (build byte-identical) → Task 7 Step 4

---

## After all tasks

- Use **superpowers:requesting-code-review** for a final branch review (per the v0.32-v0.34 pattern: spec-compliance + code-quality + final-branch-review).
- Then **superpowers:finishing-a-development-branch** → PR (server-side CI now active; both jobs must be green on the PR before merge).
- Tag `v0.35-tooling-bundle` after merge.
- Memory: capture any new lesson; update `project_molekulax.md` + `MEMORY.md` (per the v0.34 lesson: run memory-update as the FIRST step of the NEXT session, do not skip).
