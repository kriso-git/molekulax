#!/usr/bin/env node
// Validates that every LIBRARY_ENTRY_META record has a matching
// entries/<id>.js file, and that each entry-file's default export's
// `id` matches its meta-record. Fails build if drift detected.

import { existsSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

let errors = 0

for (const libId of LIBRARIES) {
  const libDir = resolve(repoRoot, 'src/data/libraries', libId)
  const entriesDir = resolve(libDir, 'entries')

  if (!existsSync(entriesDir)) {
    console.error(`❌ ${libId}: entries/ directory missing`)
    errors++
    continue
  }

  const mod = await import(`file://${resolve(libDir, 'index.js').replace(/\\/g, '/')}`)
  const meta = mod.LIBRARY_ENTRY_META
  if (!Array.isArray(meta)) {
    console.error(`❌ ${libId}: LIBRARY_ENTRY_META is not an array`)
    errors++
    continue
  }

  const fileIds = new Set(readdirSync(entriesDir).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, '')))
  const metaIds = new Set(meta.map(m => m.id))

  for (const id of metaIds) {
    if (!fileIds.has(id)) {
      console.error(`❌ ${libId}: meta references id "${id}" but entries/${id}.js does not exist`)
      errors++
    }
  }
  for (const id of fileIds) {
    if (!metaIds.has(id)) {
      console.error(`❌ ${libId}: entries/${id}.js exists but no LIBRARY_ENTRY_META record`)
      errors++
    }
  }

  for (const id of metaIds) {
    if (!fileIds.has(id)) continue
    const entryPath = resolve(entriesDir, `${id}.js`)
    const entryMod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
    const entry = entryMod.default
    if (!entry || entry.id !== id) {
      console.error(`❌ ${libId}/entries/${id}.js: default export id "${entry?.id}" does not match filename`)
      errors++
    }
  }

  // Phase 10 — validate features flag object
  const exportName = `${libId}Library`
  const libExport = mod[exportName]
  const features = libExport?.features
  const REQUIRED_FLAGS = ['faq', 'doseRecommendations', 'calculator', 'qualityGrid', 'interactions', 'quickStart', 'labTerminal', 'chemicalFormulaPlaceholder']
  if (!features) {
    console.error(`❌ ${libId}: library export "${exportName}" is missing 'features' object`)
    errors++
  } else {
    for (const flag of REQUIRED_FLAGS) {
      if (typeof features[flag] !== 'boolean') {
        console.error(`❌ ${libId}: features.${flag} must be boolean (got ${typeof features[flag]})`)
        errors++
      }
    }
  }

  console.log(`✅ ${libId}: ${meta.length} entries validated`)
}

if (errors > 0) {
  console.error(`\n❌ Validation failed with ${errors} error(s).`)
  process.exit(1)
}
console.log('\n✅ All libraries validated.')
