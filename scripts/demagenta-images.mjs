// One-off polish (2026-06-10): neutralise the residual magenta/pink cast on the
// two Gemini-generated route images (`oral-syringe.png` liquid + the
// `topical-solution-clear.png` neck ring/reflections). Selective hue-band
// desaturation: pixels whose hue falls in the magenta band (270-350deg) are
// pulled toward their own luma, with a smooth ramp at the band edges so glass
// gradients don't band. Alpha is preserved untouched. Regenerates the 768px
// webp/avif derivatives with the same params as convert-images.mjs.
//
// Usage: node scripts/demagenta-images.mjs
import sharp from 'sharp'

const TARGETS = [
  'public/performance/oral-syringe.png',
  'public/performance/topical-solution-clear.png',
]

const RESIZE = 768
const WEBP_QUALITY = 80
const WEBP_EFFORT = 6
const AVIF_QUALITY = 60
const AVIF_EFFORT = 4

// Full-strength band; weight ramps from 0 at OUTER edges to 1 at INNER edges.
const HUE_OUTER_LO = 265
const HUE_INNER_LO = 280
const HUE_INNER_HI = 340
const HUE_OUTER_HI = 352

function hueWeight(h) {
  if (h <= HUE_OUTER_LO || h >= HUE_OUTER_HI) return 0
  if (h >= HUE_INNER_LO && h <= HUE_INNER_HI) return 1
  if (h < HUE_INNER_LO) return (h - HUE_OUTER_LO) / (HUE_INNER_LO - HUE_OUTER_LO)
  return (HUE_OUTER_HI - h) / (HUE_OUTER_HI - HUE_INNER_HI)
}

function rgbToHue(r, g, b) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min
  if (d === 0) return { hue: 0, sat: 0 }
  let h
  if (max === r) h = ((g - b) / d) % 6
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  h *= 60
  if (h < 0) h += 360
  const sat = max === 0 ? 0 : d / max
  return { hue: h, sat }
}

async function processOne(pngPath) {
  const { data, info } = await sharp(pngPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  let touched = 0
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const { hue, sat } = rgbToHue(r, g, b)
    if (sat === 0) continue
    const w = hueWeight(hue)
    if (w === 0) continue
    const luma = 0.299 * r + 0.587 * g + 0.114 * b
    const keep = 1 - w
    data[i] = Math.round(luma + (r - luma) * keep)
    data[i + 1] = Math.round(luma + (g - luma) * keep)
    data[i + 2] = Math.round(luma + (b - luma) * keep)
    touched++
  }

  const png = sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
  await png.clone().png().toFile(pngPath + '.tmp')
  const { renameSync } = await import('node:fs')
  renameSync(pngPath + '.tmp', pngPath)

  const base = pngPath.replace(/\.png$/, '')
  const resized = sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).resize({ width: RESIZE, height: RESIZE, fit: 'inside', withoutEnlargement: true })
  await resized.clone().webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT }).toFile(base + '.webp')
  await resized.clone().avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT }).toFile(base + '.avif')

  console.log(`${pngPath}: ${touched} px neutralised; png+webp+avif rewritten`)
}

for (const t of TARGETS) {
  await processOne(t)
}
console.log('Done.')
