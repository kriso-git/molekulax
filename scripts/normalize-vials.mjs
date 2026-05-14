// scripts/normalize-vials.mjs
//
// Normalize peptide vial PNGs in public/peptides/ so every vial occupies the
// same fraction of its canvas. Without this step, vials photographed with
// different framing render at noticeably different sizes inside the gallery
// tiles (we render with object-contain).
//
// What the script does, per source PNG:
//   1. Find the tight non-transparent bounding box.
//   2. Bilinear-resample the cropped content so its longest dimension hits
//      TARGET * (1 − 2·PAD_PCT/100).
//   3. Center it on a transparent TARGET × TARGET canvas.
//   4. Overwrite the file in place.
//
// Effect-tile photos (gyogyulastsegitopeptidek.png etc.) are NOT vials and
// are skipped — they are referenced from PeptideEffects, not PeptideGallery.
//
// Usage:
//   npm run normalize-vials                 (all PNGs in public/peptides/)
//   node scripts/normalize-vials.mjs a.png  (specific files)

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PNG } from 'pngjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PEPTIDES_DIR = path.resolve(__dirname, '..', 'public', 'peptides')

const TARGET     = 900   // output canvas size (px, square)
const PAD_PCT    = 4     // transparent margin around the vial
const ALPHA_MIN  = 8     // alpha threshold for "this pixel counts as content"
const EFFECT_TILE_NAMES = new Set([
  'anyagcserepeptidek.png',
  'gyogyulastsegitopeptidek.png',
  'idegrendszerttamogatopeptidek.png',
  'immunrendszerterositopeptidek.png',
  'izomepitopeptidek.png',
  'kozmetikaipeptidek.png',
  'longevitypeptidek.png',
  'novekedesihormonserkentopeptidek.png',
  // legacy accented name
  'Gyógyulástsegítőpeptidek.png',
])

function findBoundingBox(png) {
  const { width, height, data } = png
  let minX = width, minY = height, maxX = -1, maxY = -1
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * 4 + 3]
      if (a > ALPHA_MIN) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }
  if (maxX < 0) return null
  return { minX, minY, maxX, maxY, w: maxX - minX + 1, h: maxY - minY + 1 }
}

// Bilinear sample of the source PNG at fractional coords (sx, sy).
function sampleBilinear(png, sx, sy) {
  const { width, height, data } = png
  const x0 = Math.max(0, Math.min(width - 1, Math.floor(sx)))
  const y0 = Math.max(0, Math.min(height - 1, Math.floor(sy)))
  const x1 = Math.min(width - 1, x0 + 1)
  const y1 = Math.min(height - 1, y0 + 1)
  const fx = sx - x0
  const fy = sy - y0

  const idx = (x, y) => (y * width + x) * 4
  const out = [0, 0, 0, 0]
  for (let c = 0; c < 4; c++) {
    const a = data[idx(x0, y0) + c]
    const b = data[idx(x1, y0) + c]
    const cc = data[idx(x0, y1) + c]
    const d = data[idx(x1, y1) + c]
    out[c] = Math.round(
      a * (1 - fx) * (1 - fy) +
      b * fx * (1 - fy) +
      cc * (1 - fx) * fy +
      d * fx * fy
    )
  }
  return out
}

function normalize(file) {
  const src = PNG.sync.read(fs.readFileSync(file))
  const bbox = findBoundingBox(src)
  if (!bbox) {
    console.warn(`  ⚠  ${path.basename(file)}: fully transparent — skipped`)
    return false
  }

  const usable = TARGET * (1 - (2 * PAD_PCT) / 100)
  const scale  = usable / Math.max(bbox.w, bbox.h)
  const newW   = Math.round(bbox.w * scale)
  const newH   = Math.round(bbox.h * scale)
  const offX   = Math.round((TARGET - newW) / 2)
  const offY   = Math.round((TARGET - newH) / 2)

  const out = new PNG({ width: TARGET, height: TARGET })
  out.data.fill(0)   // start fully transparent

  // For each output pixel inside the placed bbox region, sample bilinearly
  // from the source bbox.
  for (let y = 0; y < newH; y++) {
    const sy = bbox.minY + (y + 0.5) / scale - 0.5
    for (let x = 0; x < newW; x++) {
      const sx = bbox.minX + (x + 0.5) / scale - 0.5
      const [r, g, b, a] = sampleBilinear(src, sx, sy)
      const dstIdx = ((offY + y) * TARGET + (offX + x)) * 4
      out.data[dstIdx    ] = r
      out.data[dstIdx + 1] = g
      out.data[dstIdx + 2] = b
      out.data[dstIdx + 3] = a
    }
  }

  fs.writeFileSync(file, PNG.sync.write(out))
  const fillPct = ((Math.max(newW, newH) / TARGET) * 100).toFixed(1)
  console.log(
    `  ✓  ${path.basename(file).padEnd(28)}  bbox ${bbox.w}×${bbox.h} → ` +
    `${newW}×${newH}  (fills ${fillPct}% of ${TARGET}px)`
  )
  return true
}

function main() {
  const args = process.argv.slice(2)
  let files
  if (args.length > 0) {
    files = args.map(a => path.resolve(a))
  } else {
    files = fs.readdirSync(PEPTIDES_DIR)
      .filter(n => n.toLowerCase().endsWith('.png'))
      .filter(n => !EFFECT_TILE_NAMES.has(n))
      .map(n => path.join(PEPTIDES_DIR, n))
  }
  console.log(`Normalizing ${files.length} vial photo(s) → ${TARGET}px square, ${PAD_PCT}% pad`)
  let ok = 0
  for (const f of files) {
    try { if (normalize(f)) ok++ }
    catch (e) { console.error(`  ✗  ${path.basename(f)}: ${e.message}`) }
  }
  console.log(`Done — ${ok}/${files.length} normalized.`)
}

main()
