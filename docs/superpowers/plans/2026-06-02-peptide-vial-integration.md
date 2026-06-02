# Peptide Vial Integration Script — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (inline). Steps use checkbox syntax.

**Goal:** Build `scripts/integrate-peptide-vials.mjs` (+ offline test) so delivered Gemini PNGs in `tmp/gemini-vials/<id>.png` get rembg'd, converted, and bound into the 4 data sites per entry — ready before any image exists (dry-run-verifiable).

**Architecture:** Pure functions (`bindTargets`, `classifyVials`) decide *what* to touch — offline-unit-tested. A side-effectful `main()` does rembg + sharp transparency-verify + regex fs-bind, gated behind `--dry-run`.

**Tech:** Node 20 ESM, sharp (devDep), rembg 2.0.69 (external CLI), `node --test`. Spec: `docs/superpowers/specs/2026-06-02-peptide-vial-prompt-kit-design.md`.

Worktree `.worktrees/feat-peptide-vial-prompt-kit`. Needs `npm install` (sharp) before running.

---

### Task 1: Pure functions + TDD test

**Files:** Create `scripts/integrate-peptide-vials.mjs` (pure exports first), Test `scripts/test/integrate-peptide-vials.test.mjs`

- [ ] **Step 1: Write failing test**

`scripts/test/integrate-peptide-vials.test.mjs`:
```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bindTargets, classifyVials } from '../integrate-peptide-vials.mjs'

test('bindTargets returns meta + 3 lang body paths', () => {
  const t = bindTargets('tirzepatide')
  assert.equal(t.length, 4)
  assert.ok(t[0].endsWith('peptides/index.js'))
  assert.ok(t.some((p) => p.endsWith('entries/hu/tirzepatide.js')))
  assert.ok(t.some((p) => p.endsWith('entries/en/tirzepatide.js')))
  assert.ok(t.some((p) => p.endsWith('entries/pl/tirzepatide.js')))
})

test('classifyVials processes only valid null-image ids', () => {
  const nullIds = new Set(['tirzepatide', 'semax'])
  const r = classifyVials(['tirzepatide', 'foo', 'bpc-157'], nullIds)
  assert.deepEqual(r.process, ['tirzepatide'])
  assert.deepEqual(r.skip.sort(), ['bpc-157', 'foo'])
})

test('classifyVials empty input', () => {
  const r = classifyVials([], new Set(['x']))
  assert.deepEqual(r.process, [])
  assert.deepEqual(r.skip, [])
})
```

- [ ] **Step 2: Run → fails** (`node --test scripts/test/integrate-peptide-vials.test.mjs` → module/exports missing).

- [ ] **Step 3: Implement the pure parts** (top of `scripts/integrate-peptide-vials.mjs`):
```js
import { join } from 'node:path'

const LIB_DIR = 'src/data/libraries/peptides'

// The 4 data sites that hold an entry's image: meta index + 3 per-lang bodies.
export function bindTargets(id, libDir = LIB_DIR) {
  return [
    join(libDir, 'index.js'),
    join(libDir, 'entries', 'hu', `${id}.js`),
    join(libDir, 'entries', 'en', `${id}.js`),
    join(libDir, 'entries', 'pl', `${id}.js`),
  ]
}

// pngIds: basenames (no .png). nullIds: Set of entry ids currently image:null.
// Process only ids that are real null-image peptides; skip everything else.
export function classifyVials(pngIds, nullIds) {
  const process = []
  const skip = []
  for (const id of pngIds) (nullIds.has(id) ? process : skip).push(id)
  return { process, skip }
}
```

- [ ] **Step 4: Run → pass** (`npm test` → all suites green, 7 test files now).

- [ ] **Step 5: Commit**
```bash
git add scripts/integrate-peptide-vials.mjs scripts/test/integrate-peptide-vials.test.mjs
git commit -m "test: peptide-vial integration pure fns (bindTargets, classifyVials)"
```

---

### Task 2: Side-effectful runner (rembg + bind + dry-run)

**Files:** Modify `scripts/integrate-peptide-vials.mjs` (append the runner)

- [ ] **Step 1: Append the runner** below the pure exports:
```js
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import sharp from 'sharp'
import { LIBRARY_ENTRY_META } from '../src/data/libraries/peptides/index.js'

const SRC_DIR = 'tmp/gemini-vials'
const PUB_DIR = 'public/peptides'
const DRY = process.argv.includes('--dry-run')

// Replace `"image": null` with the path, scoped to the block of "id": "<id>" (meta), or the
// single top-level image (per-lang body). fs read/write (NOT Edit tool — quote-corruption).
function bindImageInFile(file, id, imagePath, isMeta) {
  if (!existsSync(file)) return false
  const src = readFileSync(file, 'utf8')
  let out = src
  if (isMeta) {
    const safe = id.replace(/[-/.]/g, '\\$&')
    const re = new RegExp(`("id":\\s*"${safe}"[\\s\\S]*?)"image":\\s*null`)
    out = src.replace(re, `$1"image": "${imagePath}"`)
  } else {
    out = src.replace(/"image":\s*null/, `"image": "${imagePath}"`)
  }
  if (out === src) return false
  if (!DRY) writeFileSync(file, out, 'utf8')
  return true
}

function run() {
  const nullIds = new Set(LIBRARY_ENTRY_META.filter((e) => !e.image).map((e) => e.id))
  const pngIds = existsSync(SRC_DIR)
    ? readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith('.png')).map((f) => f.replace(/\.png$/i, ''))
    : []
  const { process: todo, skip } = classifyVials(pngIds, nullIds)

  console.log(`[vials] src=${SRC_DIR} found=${pngIds.length} process=${todo.length} skip=${skip.length}${DRY ? '  (DRY RUN)' : ''}`)
  if (skip.length) console.log(`[vials] skipped (not a null-image peptide): ${skip.join(', ')}`)

  let bound = 0
  for (const id of todo) {
    const src = join(SRC_DIR, `${id}.png`)
    const dst = join(PUB_DIR, `${id}.png`)
    const imagePath = `/peptides/${id}.png`
    console.log(`\n[vials] ${id}`)
    if (DRY) {
      console.log(`  rembg: ${src} -> ${dst}`)
      for (const t of bindTargets(id)) console.log(`  bind:  ${t}`)
      continue
    }
    // 1. background removal
    const rb = spawnSync('rembg', ['i', src, dst], { stdio: 'inherit' })
    if (rb.status !== 0) { console.error(`  rembg FAILED for ${id} (status ${rb.status})`); continue }
    // 2. transparency verify (sharp, not visual — feedback_read_tool_alpha_misleading)
    const opaque = sharp(dst).stats().then((s) => s.isOpaque)
    // (await below)
    // 3. bind 4 sites
    const targets = bindTargets(id)
    bindImageInFile(targets[0], id, imagePath, true)
    let okCount = 1
    for (const t of targets.slice(1)) if (bindImageInFile(t, id, imagePath, false)) okCount++
    opaque.then((isOpaque) => console.log(`  transparency: ${isOpaque ? 'OPAQUE ⚠ (rembg may have failed)' : 'OK (has alpha)'}`))
    console.log(`  bound ${okCount}/4 data sites -> ${imagePath}`)
    bound++
  }

  console.log(`\n[vials] ${DRY ? 'would bind' : 'bound'} ${bound} entr${bound === 1 ? 'y' : 'ies'}.`)
  if (!DRY && bound > 0) {
    console.log('[vials] next: npm run convert-images && npm run build && npm run smoke')
  }
}

// ESM main-guard so the pure exports stay importable by the test without running main().
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('integrate-peptide-vials.mjs')) {
  run()
}
```

- [ ] **Step 2: Add `vials:integrate` npm script** in `package.json` scripts:
```json
    "vials:integrate": "node scripts/integrate-peptide-vials.mjs"
```

- [ ] **Step 3: Dry-run verify with a fake PNG**
```bash
mkdir -p tmp/gemini-vials && node -e "require('fs').writeFileSync('tmp/gemini-vials/tirzepatide.png','x')"
npm run vials:integrate -- --dry-run
```
Expected: reports `process=1 skip=0`, lists `rembg` + the 4 bind targets for `tirzepatide`, "would bind 1 entry", NO files modified.
Then add a non-null + a bogus id to confirm skip:
```bash
node -e "require('fs').writeFileSync('tmp/gemini-vials/bpc-157.png','x');require('fs').writeFileSync('tmp/gemini-vials/zzz.png','x')"
npm run vials:integrate -- --dry-run
```
Expected: `process=1 skip=2`, skipped lists `bpc-157, zzz`. Clean up: `rm -rf tmp/gemini-vials`.

- [ ] **Step 4: Confirm `npm test` still green + `git status` clean** (no data files changed by dry-run).

- [ ] **Step 5: Commit**
```bash
git add scripts/integrate-peptide-vials.mjs package.json
git commit -m "feat: peptide-vial integration runner (rembg + 4-site bind, --dry-run)"
```

---

### Task 3: Optional copy-paste prompt note + finish

- [ ] **Step 1:** Create `docs/reference/peptide-vial-prompt-kit.md` — a trimmed copy-paste of the EDIT-PROMPT + the 40-row name/amount/appearance table from the spec (so the Gemini session doesn't need the full design doc open). Commit.
- [ ] **Step 2:** finishing-a-development-branch → merge `feat/peptide-vial-prompt-kit` (spec + plan + script + test + reference). No tag (no app change; the integration runs later when PNGs arrive).

## Done criteria
- `npm test` green incl. 3 new integration cases; dry-run lists correct bind targets + skips; `git status` clean after dry-run; branch merged. The script binds 4 sites/entry when real PNGs arrive (verified later).
