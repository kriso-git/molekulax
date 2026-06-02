// Integrate Gemini-generated peptide vial PNGs into the data layer.
//
// Drop generated images as `tmp/gemini-vials/<entryId>.png`, then:
//   npm run vials:integrate                 (null-image entries only)
//   npm run vials:integrate -- --regenerate (ALSO rebind already-imaged entries)
//   npm run vials:integrate -- --dry-run    (report only; no writes, no rembg)
//
// rembg runs in batch mode (one model load for the whole folder). Each processed image is
// background-removed, copied to public/peptides/<id>.png, transparency-verified (sharp), and
// its `image` field is bound in all 4 data sites (meta + 3 per-lang bodies).
//
// Pure helpers (bindTargets, classifyVials) are exported + offline-unit-tested; the
// side-effectful run() is guarded so importing this module does not execute it.
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

// pngIds: basenames (no .png). targetSet: Set of entry ids eligible for processing
// (null-image ids by default, or ALL peptide ids in --regenerate). Process matches; skip rest.
export function classifyVials(pngIds, targetSet) {
  const process = []
  const skip = []
  for (const id of pngIds) (targetSet.has(id) ? process : skip).push(id)
  return { process, skip }
}

async function run() {
  const { readFileSync, writeFileSync, existsSync, readdirSync, copyFileSync, mkdirSync } = await import('node:fs')
  const { spawnSync } = await import('node:child_process')
  const sharp = (await import('sharp')).default
  const { LIBRARY_ENTRY_META } = await import('../src/data/libraries/peptides/index.js')

  const SRC_DIR = 'tmp/gemini-vials'
  const NOBG_DIR = 'tmp/_vials_nobg'
  const PUB_DIR = 'public/peptides'
  const DRY = process.argv.includes('--dry-run')
  const REGEN = process.argv.includes('--regenerate')

  // Replace `"image": null` OR `"image": "<existing>"` with the new path. For the meta file,
  // scope to the block of "id": "<id>"; for a per-lang body, the single top-level image.
  // fs read/write (NOT the Edit tool — avoids curly-quote corruption on data files).
  function bindImageInFile(file, id, imagePath, isMeta) {
    if (!existsSync(file)) return false
    const src = readFileSync(file, 'utf8')
    const VAL = '"image":\\s*(?:null|"[^"]*")'
    let out
    if (isMeta) {
      const safe = id.replace(/[-/.]/g, '\\$&')
      out = src.replace(new RegExp(`("id":\\s*"${safe}"[\\s\\S]*?)${VAL}`), `$1"image": "${imagePath}"`)
    } else {
      out = src.replace(new RegExp(VAL), `"image": "${imagePath}"`)
    }
    if (out === src) return false
    if (!DRY) writeFileSync(file, out, 'utf8')
    return true
  }

  const validIds = new Set(LIBRARY_ENTRY_META.map((e) => e.id))
  const nullIds = new Set(LIBRARY_ENTRY_META.filter((e) => !e.image).map((e) => e.id))
  const targetSet = REGEN ? validIds : nullIds
  const pngIds = existsSync(SRC_DIR)
    ? readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith('.png')).map((f) => f.replace(/\.png$/i, ''))
    : []
  const { process: todo, skip } = classifyVials(pngIds, targetSet)

  console.log(`[vials] src=${SRC_DIR} found=${pngIds.length} process=${todo.length} skip=${skip.length}${REGEN ? '  (REGENERATE)' : ''}${DRY ? '  (DRY RUN)' : ''}`)
  if (skip.length) console.log(`[vials] skipped (not a${REGEN ? '' : ' null-image'} peptide id): ${skip.join(', ')}`)
  if (!todo.length) { console.log('[vials] nothing to do.'); return }

  if (DRY) {
    for (const id of todo) {
      console.log(`\n[vials] ${id}`)
      console.log(`  rembg: ${join(SRC_DIR, id + '.png')} -> ${join(PUB_DIR, id + '.png')}`)
      for (const t of bindTargets(id)) console.log(`  bind:  ${t}`)
    }
    console.log(`\n[vials] would process ${todo.length} entries (DRY RUN).`)
    return
  }

  // Batch background removal — one model load for the whole folder (fast).
  mkdirSync(NOBG_DIR, { recursive: true })
  console.log(`[vials] running rembg batch (${SRC_DIR} -> ${NOBG_DIR}) ...`)
  const rb = spawnSync('rembg', ['p', SRC_DIR, NOBG_DIR], { stdio: 'inherit', shell: true })
  if (rb.status !== 0) { console.error(`[vials] rembg batch FAILED (status ${rb.status})`); process.exit(1) }

  let bound = 0
  const opaqueWarn = []
  for (const id of todo) {
    const nobg = join(NOBG_DIR, `${id}.png`)
    const dst = join(PUB_DIR, `${id}.png`)
    if (!existsSync(nobg)) { console.error(`[vials] ${id}: rembg output missing — skipping`); continue }
    copyFileSync(nobg, dst)
    const stats = await sharp(dst).stats()
    if (stats.isOpaque) opaqueWarn.push(id)
    const targets = bindTargets(id)
    let okCount = bindImageInFile(targets[0], id, `/peptides/${id}.png`, true) ? 1 : 0
    for (const t of targets.slice(1)) if (bindImageInFile(t, id, `/peptides/${id}.png`, false)) okCount++
    console.log(`[${stats.isOpaque ? 'OPAQUE⚠' : 'alpha✓'}] ${id} → bound ${okCount}/4`)
    bound++
  }

  console.log(`\n[vials] processed ${bound} entries.`)
  if (opaqueWarn.length) console.error(`[vials] ⚠ STILL OPAQUE (rembg did not cut bg): ${opaqueWarn.join(', ')}`)
  console.log('[vials] next: npm run convert-images && npm run build && npm run smoke')
}

// ESM main-guard: run() only when invoked directly, not when the test imports the pure fns.
const invokedDirectly =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('integrate-peptide-vials.mjs')
if (invokedDirectly) run()
