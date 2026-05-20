// One-shot Phase B image-path update for performance + pharmaceutical libraries.
// Uses fs.readFile/writeFile (NOT the Edit tool) to dodge curly-quote corruption
// on bulk-edits of JSON-style data files. See feedback_edit_tool_quote_corruption.
//
// Sub-Task 7 (v0.25): added RU58841 → topical-solution-clear mapping +
// new VARIANT_IMAGE_OVERRIDES mechanism for per-entry per-variantId regex-anchored
// rebinds (used for Albuterol inhaled + L-Carnitine aq variants which share
// templates with their oral siblings and cannot use the naive VARIANT_REPLACEMENTS).

import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const PERFORMANCE_IMAGES = {
  'testosterone-info': '/performance/oil-vial-yellow.png',
  'nandrolone-info': '/performance/oil-vial-yellow.png',
  'trenbolone-info': '/performance/oil-vial-orange.png',
  'superdrol': '/performance/tablet-pile-white.png', // defaultVariant=oral
  'hgh-info': '/performance/water-vial.png',
  'epo-info': '/performance/water-vial.png',
  'anavar-info': '/performance/tablet-pile-white.png',
  'dianabol-info': '/performance/tablet-pile-white.png',
  'methylstenbolone': '/performance/tablet-pile-white.png',
  'winstrol-info': '/performance/tablet-pile-white.png',
  'ephedrine': '/performance/tablet-pile-white.png',
  'yohimbine': '/performance/tablet-pile-white.png',
  'clenbuterol': '/performance/tablet-pile-white.png',
  'albuterol': '/performance/tablet-pile-white.png',
  'dnp-info': '/performance/tablet-pile-yellow.png',
  'ru58841': '/performance/topical-solution-clear.png',
}

const PHARMACEUTICAL_IMAGES = {
  'metformin': '/pharmaceutical/blister-white-oval.png',
  'atorvastatin': '/pharmaceutical/blister-white-oval.png',
  'escitalopram': '/pharmaceutical/blister-white-oval.png',
  'modafinil': '/pharmaceutical/blister-white-oval.png',
  'amoxicillin': '/pharmaceutical/blister-white-oval.png',
  'doxycycline': '/pharmaceutical/blister-white-oval.png',
  'ciprofloxacin': '/pharmaceutical/blister-white-oval.png',
  'fluoxetine': '/pharmaceutical/blister-white-round.png',
  'bupropion': '/pharmaceutical/blister-white-round.png',
  'methylphenidate': '/pharmaceutical/blister-white-round.png',
  'tamoxifen': '/pharmaceutical/blister-white-round.png',
  'levothyroxin': '/pharmaceutical/blister-white-round.png',
  'liothyronine': '/pharmaceutical/blister-white-round.png',
  'minoxidil': '/pharmaceutical/blister-white-round.png', // defaultVariant=oral
  'empagliflozin': '/pharmaceutical/blister-yellow-round.png',
  'rosuvastatin': '/pharmaceutical/blister-pink-small.png',
  'tadalafil': '/pharmaceutical/blister-yellow-almond.png',
  'finasteride': '/pharmaceutical/blister-blue-small.png',
  'isotretinoin': '/pharmaceutical/softgel-orange.png',
  'tretinoin': '/pharmaceutical/cream-tube-white.png',
  'hydrocortisone': '/pharmaceutical/cream-tube-white.png',
}

const VARIANT_REPLACEMENTS = [
  { from: '"image": "/performance/superdrol-oral.png"', to: '"image": "/performance/tablet-pile-white.png"' },
  { from: '"image": "/performance/superdrol-injectable.png"', to: '"image": "/performance/oil-vial-yellow.png"' },
  { from: '"image": "/pharmaceutical/minoxidil-oral.png"', to: '"image": "/pharmaceutical/blister-white-round.png"' },
  // minoxidil-topical already maps to the final template path — no change needed
]

// Sub-Task 7: regex-anchored per-entry per-variantId overrides.
// Use when a variant shares its placeholder image with a sibling variant of the
// same entry (e.g. Albuterol oral+inhaled both currently on tablet-pile-white).
// A naive global replace would clobber both — this map locates the variant block
// by its "id" field and replaces ONLY the "image" within that block.
const VARIANT_IMAGE_OVERRIDES = {
  'albuterol': {
    'inhaled': '/performance/inhaler-asthma.png',
  },
  'l-carnitine': {
    // Actual variant id is 'inj' (routeId='aq'); spec misnamed it as 'aq'.
    'inj': '/performance/ampoule-glass.png',
  },
}

let totalEdits = 0
let totalFiles = 0

async function updateMeta(path, imageMap) {
  const src = await readFile(path, 'utf8')
  let out = src
  for (const [id, imagePath] of Object.entries(imageMap)) {
    // Match the meta entry block by id and replace its "image": null with the template path.
    // Block boundary heuristic: from `"id": "<id>"` until the next entry's `"id"` or array close.
    const blockRegex = new RegExp(
      `("id":\\s*"${id.replace(/[-/.]/g, '\\$&')}"[\\s\\S]*?)"image":\\s*null`,
      'g'
    )
    const next = out.replace(blockRegex, `$1"image": "${imagePath}"`)
    if (next !== out) {
      out = next
      totalEdits++
    }
  }
  if (out !== src) {
    await writeFile(path, out, 'utf8')
    totalFiles++
    console.log(`  meta updated: ${path}`)
  }
}

async function updateEntryBody(path, imagePath) {
  const src = await readFile(path, 'utf8')
  // Replace the top-level "image": null OR "image": "<old>" with the target path.
  // Per-lang entry-body has only ONE top-level image field.
  let out = src
  // Simple top-level image null:
  out = out.replace(/"image":\s*null/, `"image": "${imagePath}"`)
  if (out !== src) {
    await writeFile(path, out, 'utf8')
    totalFiles++
    totalEdits++
    return true
  }
  return false
}

async function applyVariantReplacements(path) {
  const src = await readFile(path, 'utf8')
  let out = src
  for (const { from, to } of VARIANT_REPLACEMENTS) {
    if (out.includes(from)) {
      out = out.split(from).join(to)
      totalEdits++
    }
  }
  if (out !== src) {
    await writeFile(path, out, 'utf8')
    totalFiles++
    console.log(`  variant updated: ${path}`)
  }
}

// Sub-Task 7: regex-anchored variant-image override for entries where two variants
// share a placeholder. Scopes the "image" replacement to the block bounded by
// "id": "<variantId>" → next variants[] array element separator (}, ).
async function applyVariantImageOverrides(path, entryId, overrides) {
  const src = await readFile(path, 'utf8')
  let out = src
  for (const [variantId, newImagePath] of Object.entries(overrides)) {
    const safeId = variantId.replace(/[-/.]/g, '\\$&')
    // Match: "id": "<variantId>"  ... (non-greedy, no closing brace+comma between)
    //        ... "image": "<oldPath>"  → replace just that "image" field
    const blockRegex = new RegExp(
      `("id":\\s*"${safeId}"[\\s\\S]*?)"image":\\s*"[^"]+"`,
      'g'
    )
    const next = out.replace(blockRegex, `$1"image": "${newImagePath}"`)
    if (next !== out) {
      out = next
      totalEdits++
      console.log(`  variant-override [${entryId}/${variantId}] → ${newImagePath}: ${path}`)
    }
  }
  if (out !== src) {
    await writeFile(path, out, 'utf8')
    totalFiles++
  }
}

async function processLibrary(libDir, imageMap) {
  // 1. Meta file
  await updateMeta(join(libDir, 'index.js'), imageMap)
  // 2. Per-lang entry bodies
  for (const lang of ['hu', 'en', 'pl']) {
    const dir = join(libDir, 'entries', lang)
    const files = await readdir(dir)
    for (const file of files) {
      if (!file.endsWith('.js')) continue
      const id = file.replace(/\.js$/, '')
      const fullPath = join(dir, file)
      // Top-level entry.image rebind (only if mapped)
      const imagePath = imageMap[id]
      if (imagePath) {
        await updateEntryBody(fullPath, imagePath)
      }
      // ALWAYS process variant replacements (idempotent on already-shipped entries)
      await applyVariantReplacements(fullPath)
      // Sub-Task 7: per-entry variant-image overrides (Albuterol inhaled, L-Carnitine aq)
      const overrides = VARIANT_IMAGE_OVERRIDES[id]
      if (overrides) {
        await applyVariantImageOverrides(fullPath, id, overrides)
      }
    }
  }
}

console.log('Phase B — Library image-path update\n')
console.log('→ Performance library')
await processLibrary('src/data/libraries/performance', PERFORMANCE_IMAGES)
console.log('\n→ Pharmaceutical library')
await processLibrary('src/data/libraries/pharmaceutical', PHARMACEUTICAL_IMAGES)
console.log(`\nDone. ${totalEdits} edits across ${totalFiles} files.`)
