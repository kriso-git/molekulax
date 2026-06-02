// Integrate Gemini-generated peptide vial PNGs into the data layer.
//
// Drop generated images as `tmp/gemini-vials/<entryId>.png`, then:
//   npm run vials:integrate            (rembg + transparency-verify + bind 4 sites)
//   npm run vials:integrate -- --dry-run   (report only; no writes, no rembg)
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

// pngIds: basenames (no .png). nullIds: Set of entry ids currently image:null.
// Process only ids that are real null-image peptides; skip everything else.
export function classifyVials(pngIds, nullIds) {
  const process = []
  const skip = []
  for (const id of pngIds) (nullIds.has(id) ? process : skip).push(id)
  return { process, skip }
}

async function run() {
  const { readFileSync, writeFileSync, existsSync, readdirSync } = await import('node:fs')
  const { spawnSync } = await import('node:child_process')
  const sharp = (await import('sharp')).default
  const { LIBRARY_ENTRY_META } = await import('../src/data/libraries/peptides/index.js')

  const SRC_DIR = 'tmp/gemini-vials'
  const PUB_DIR = 'public/peptides'
  const DRY = process.argv.includes('--dry-run')

  // Replace `"image": null` with the path. For the meta file, scope to the block of
  // "id": "<id>"; for a per-lang body, the single top-level image. fs read/write (NOT the
  // Edit tool — avoids curly-quote corruption on data files).
  function bindImageInFile(file, id, imagePath, isMeta) {
    if (!existsSync(file)) return false
    const src = readFileSync(file, 'utf8')
    let out
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
      bound++
      continue
    }
    const rb = spawnSync('rembg', ['i', src, dst], { stdio: 'inherit', shell: true })
    if (rb.status !== 0) {
      console.error(`  rembg FAILED for ${id} (status ${rb.status}) — skipping bind`)
      continue
    }
    const stats = await sharp(dst).stats()
    console.log(`  transparency: ${stats.isOpaque ? 'OPAQUE ⚠ (rembg may not have cut the background)' : 'OK (has alpha)'}`)
    const targets = bindTargets(id)
    let okCount = bindImageInFile(targets[0], id, imagePath, true) ? 1 : 0
    for (const t of targets.slice(1)) if (bindImageInFile(t, id, imagePath, false)) okCount++
    console.log(`  bound ${okCount}/4 data sites -> ${imagePath}`)
    bound++
  }

  console.log(`\n[vials] ${DRY ? 'would process' : 'processed'} ${bound} entr${bound === 1 ? 'y' : 'ies'}.`)
  if (!DRY && bound > 0) console.log('[vials] next: npm run convert-images && npm run build && npm run smoke')
}

// ESM main-guard: run() only when invoked directly, not when the test imports the pure fns.
const invokedDirectly =
  process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('integrate-peptide-vials.mjs')
if (invokedDirectly) run()
