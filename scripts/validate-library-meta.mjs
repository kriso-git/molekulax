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

  // Phase 12: per-lang layout — entries/{hu,en,pl}/<id>.js. We detect this
  // by the presence of an entries/hu/ subdirectory. Older Phase 9 libraries
  // keep the flat entries/<id>.js shape.
  const perLang = existsSync(resolve(entriesDir, 'hu'))
  const metaIds = new Set(meta.map(m => m.id))

  if (perLang) {
    const langs = ['hu', 'en', 'pl']
    for (const lang of langs) {
      const langDir = resolve(entriesDir, lang)
      if (!existsSync(langDir)) {
        console.error(`❌ ${libId}: per-lang layout but ${lang}/ directory missing`)
        errors++
        continue
      }
      const fileIds = new Set(readdirSync(langDir).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, '')))
      for (const id of metaIds) {
        if (!fileIds.has(id)) {
          console.error(`❌ ${libId}: meta references "${id}" but entries/${lang}/${id}.js missing`)
          errors++
        }
      }
      for (const id of fileIds) {
        if (!metaIds.has(id)) {
          console.error(`❌ ${libId}: entries/${lang}/${id}.js orphan (no meta record)`)
          errors++
        }
      }
    }
    // Spot-check: load one entry per lang to ensure default exports work.
    for (const lang of langs) {
      const sampleId = meta[0]?.id
      if (!sampleId) continue
      const entryPath = resolve(entriesDir, lang, `${sampleId}.js`)
      if (!existsSync(entryPath)) continue
      const entryMod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
      const entry = entryMod.default
      if (!entry || entry.id !== sampleId) {
        console.error(`❌ ${libId}/entries/${lang}/${sampleId}.js: default export id "${entry?.id}" mismatch`)
        errors++
      }
    }
  } else {
    const fileIds = new Set(readdirSync(entriesDir).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, '')))
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

  // Task A (post-roadmap 2026-05-18) — Lab Terminal data field presence check.
  // Pharma needs bioavailability; perf needs aromatization + hepatotoxicity.
  // SOFT_FAIL flipped to false 2026-05-18 (A.3 batched complete; 40 pharma ×
  // bioavailability + 17 perf × {aromatization, hepatotoxicity} all filled).
  // Any future missing lab-field hard-fails the build.
  const LAB_FIELD_SOFT_FAIL = false
  const LAB_FIELD_CHECKS = {
    pharmaceutical: ['bioavailability'],
    performance: ['aromatization', 'hepatotoxicity'],
  }
  const labFields = LAB_FIELD_CHECKS[libId]
  if (labFields && perLang) {
    let softMissing = 0
    for (const lang of ['hu', 'en', 'pl']) {
      for (const id of metaIds) {
        const entryPath = resolve(entriesDir, lang, `${id}.js`)
        if (!existsSync(entryPath)) continue
        const entryMod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
        const entry = entryMod.default
        for (const field of labFields) {
          const v = entry?.[field]
          const present = typeof v === 'string' ? v.trim().length > 0 : !!v
          if (!present) {
            const msg = `[${libId}/${lang}] ${id} missing ${field}`
            if (LAB_FIELD_SOFT_FAIL) { console.warn(`⚠️  WARN: ${msg}`); softMissing++ }
            else { console.error(`❌ ERR: ${msg}`); errors++ }
          }
        }
      }
    }
    if (LAB_FIELD_SOFT_FAIL && softMissing > 0) {
      console.log(`  ↳ ${libId}: ${softMissing} lab-field warning(s) (soft-fail; A.2/A.3 in progress)`)
    }
  }

  console.log(`✅ ${libId}: ${meta.length} entries validated`)
}

if (errors > 0) {
  console.error(`\n❌ Validation failed with ${errors} error(s).`)
  process.exit(1)
}
console.log('\n✅ All libraries validated.')
