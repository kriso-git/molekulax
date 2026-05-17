// Phase 8 perf-pass — bulk PNG → WebP converter with optional 1024 resize.
// Run once: `npm run convert-images`. Idempotent — skips re-processing if
// the .webp file already exists and is newer than the source .png.

import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = 'public/peptides'
const RESIZE_THRESHOLD = 1024
const WEBP_QUALITY = 80
const WEBP_EFFORT = 6

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

  if (outStat && outStat.mtimeMs >= inStat.mtimeMs) {
    skipped++
    totalInBytes += inStat.size
    totalOutBytes += outStat.size
    continue
  }

  const meta = await sharp(inPath).metadata()
  const needsResize =
    (meta.width || 0) > RESIZE_THRESHOLD || (meta.height || 0) > RESIZE_THRESHOLD

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
  totalInBytes += inStat.size
  totalOutBytes += newOutStat.size
  processed++

  const pct = ((1 - newOutStat.size / inStat.size) * 100).toFixed(1)
  const tag = needsResize ? 'resized+webp' : 'webp'
  console.log(
    `  ${file}: ${(inStat.size / 1024).toFixed(0)}kB → ${(newOutStat.size / 1024).toFixed(0)}kB (-${pct}%, ${tag})`
  )
}

console.log()
console.log(`Processed: ${processed} | Skipped: ${skipped} (already up-to-date)`)
console.log(
  `Total: ${(totalInBytes / 1024 / 1024).toFixed(2)}MB PNG → ${(totalOutBytes / 1024 / 1024).toFixed(2)}MB WebP (-${((1 - totalOutBytes / totalInBytes) * 100).toFixed(1)}%)`
)
