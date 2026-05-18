// Phase 8 perf-pass — bulk PNG → WebP + AVIF converter with optional 768 resize.
// Phase 11: added AVIF emission alongside WebP for 3-source <picture> chain.
// Run once: `npm run convert-images`. Idempotent — skips re-processing if
// the .webp / .avif file already exists and is newer than the source .png.

import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = 'public/peptides'
const RESIZE_THRESHOLD = 768
const WEBP_QUALITY = 80
const WEBP_EFFORT = 6
// Phase 11: AVIF quality ~60 ≈ WebP quality ~80 perceptually; effort 4 balances
// encode speed and file size. Higher effort (6-9) saves ~5-10% more but doubles
// the build time on a 19-image library.
const AVIF_QUALITY = 60
const AVIF_EFFORT = 4

const files = await readdir(ROOT)
const pngs = files.filter((f) => f.toLowerCase().endsWith('.png'))

let totalInBytes = 0
let totalOutBytes = 0
let processed = 0
let skipped = 0

for (const file of pngs) {
  const inPath = join(ROOT, file)
  const outPath = inPath.replace(/\.png$/i, '.webp')

  const inStat = await stat(inPath)
  let outStat = null
  try {
    outStat = await stat(outPath)
  } catch {
    // .webp doesn't exist yet
  }

  const meta = await sharp(inPath).metadata()
  const needsResize =
    (meta.width || 0) > RESIZE_THRESHOLD || (meta.height || 0) > RESIZE_THRESHOLD

  // ── WebP emit (skip if up-to-date) ───────────────────────────────
  const webpUpToDate = outStat && outStat.mtimeMs >= inStat.mtimeMs
  if (!webpUpToDate) {
    let pipeline = sharp(inPath)
    if (needsResize) {
      pipeline = pipeline.resize({
        width: RESIZE_THRESHOLD,
        height: RESIZE_THRESHOLD,
        fit: 'inside',
        withoutEnlargement: true,
      })
    }
    await pipeline.webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT }).toFile(outPath)
    const newOutStat = await stat(outPath)
    const pct = ((1 - newOutStat.size / inStat.size) * 100).toFixed(1)
    const tag = needsResize ? 'resized+webp' : 'webp'
    console.log(
      `  ${file}: ${(inStat.size / 1024).toFixed(0)}kB → ${(newOutStat.size / 1024).toFixed(0)}kB (-${pct}%, ${tag})`
    )
    processed++
    totalInBytes += inStat.size
    totalOutBytes += newOutStat.size
  } else {
    skipped++
    totalInBytes += inStat.size
    totalOutBytes += outStat.size
  }

  // ── AVIF emit (skip if up-to-date) ───────────────────────────────
  const avifPath = inPath.replace(/\.png$/i, '.avif')
  let avifStat = null
  try {
    avifStat = await stat(avifPath)
  } catch {
    // .avif doesn't exist yet
  }
  const avifUpToDate = avifStat && avifStat.mtimeMs >= inStat.mtimeMs
  if (!avifUpToDate) {
    let avifPipeline = sharp(inPath)
    if (needsResize) {
      avifPipeline = avifPipeline.resize({
        width: RESIZE_THRESHOLD,
        height: RESIZE_THRESHOLD,
        fit: 'inside',
        withoutEnlargement: true,
      })
    }
    await avifPipeline.avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT }).toFile(avifPath)
    const newAvifStat = await stat(avifPath)
    const avifPct = ((1 - newAvifStat.size / inStat.size) * 100).toFixed(1)
    console.log(
      `  ${file}: ${(newAvifStat.size / 1024).toFixed(0)}kB AVIF (-${avifPct}% vs PNG)`
    )
  }
}

console.log()
console.log(`Processed: ${processed} | Skipped: ${skipped} (already up-to-date)`)
console.log(
  `Total: ${(totalInBytes / 1024 / 1024).toFixed(2)}MB PNG → ${(totalOutBytes / 1024 / 1024).toFixed(2)}MB WebP (-${((1 - totalOutBytes / totalInBytes) * 100).toFixed(1)}%)`
)
