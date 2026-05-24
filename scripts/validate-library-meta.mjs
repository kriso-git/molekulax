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
// Post-roadmap 2026-05-20 — accumulate per-lib meta to enable cross-lib
// related[] dangling-id warnings + composition[] same-lib id checks
// after the main per-lib loop completes.
const allLibraryMeta = {}
const allLibraryExport = {}

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
        // Phase C: multi-variant entries declare lab fields inside each variant.
        // Validate variant-by-variant; top-level lookup is the fallback for
        // single-variant entries.
        const isMulti = Array.isArray(entry?.variants) && entry.variants.length > 0
        for (const field of labFields) {
          if (isMulti) {
            for (let i = 0; i < entry.variants.length; i++) {
              const variant = entry.variants[i]
              const v = variant?.[field]
              const present = typeof v === 'string' ? v.trim().length > 0 : !!v
              if (!present) {
                const msg = `[${libId}/${lang}] ${id} variants[${i}] (${variant.routeId}) missing ${field}`
                if (LAB_FIELD_SOFT_FAIL) { console.warn(`⚠️  WARN: ${msg}`); softMissing++ }
                else { console.error(`❌ ERR: ${msg}`); errors++ }
              }
            }
          } else {
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
    }
    if (LAB_FIELD_SOFT_FAIL && softMissing > 0) {
      console.log(`  ↳ ${libId}: ${softMissing} lab-field warning(s) (soft-fail; A.2/A.3 in progress)`)
    }
  }

  // Phase C — variant shape validation (multi-route entries).
  // Rules:
  //   1. If meta has variantCount >= 2, the entry-file's `variants` array length must match.
  //   2. Variants parity across HU/EN/PL: same routeId set, same order.
  //   3. Each variant needs: routeId, routeLabel, image, bioavailability, halfLife, dosing.
  //   4. Performance library variants also need: aromatization, hepatotoxicity.
  //   5. defaultVariant must match one of the variants[*].routeId.
  if (perLang) {
    for (const metaRec of meta) {
      const variantCount = metaRec.variantCount
      if (!variantCount || variantCount < 2) continue
      const id = metaRec.id
      const variantsByLang = {}
      let allLoadable = true
      for (const lang of ['hu', 'en', 'pl']) {
        const entryPath = resolve(entriesDir, lang, `${id}.js`)
        if (!existsSync(entryPath)) { allLoadable = false; continue }
        const entryMod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
        const entry = entryMod.default
        if (!Array.isArray(entry?.variants) || entry.variants.length !== variantCount) {
          console.error(`❌ ${libId}/${lang}/${id}: meta.variantCount=${variantCount} but entry.variants.length=${entry?.variants?.length ?? 'absent'}`)
          errors++
          allLoadable = false
          continue
        }
        if (!entry.defaultVariant || !entry.variants.some(v => v.routeId === entry.defaultVariant)) {
          console.error(`❌ ${libId}/${lang}/${id}: defaultVariant "${entry.defaultVariant}" not in variants[*].routeId`)
          errors++
        }
        for (let i = 0; i < entry.variants.length; i++) {
          const v = entry.variants[i]
          const REQ = ['routeId', 'routeLabel', 'image', 'bioavailability', 'halfLife', 'doseCalc']
          for (const f of REQ) {
            if (v[f] === undefined || v[f] === null || (typeof v[f] === 'string' && v[f].trim() === '')) {
              console.error(`❌ ${libId}/${lang}/${id}: variants[${i}] missing required field "${f}"`)
              errors++
            }
          }
          if (libId === 'performance') {
            for (const f of ['aromatization', 'hepatotoxicity']) {
              if (v[f] === undefined || v[f] === null || (typeof v[f] === 'string' && v[f].trim() === '')) {
                console.error(`❌ ${libId}/${lang}/${id}: variants[${i}] performance-required "${f}" missing`)
                errors++
              }
            }
          }
        }
        variantsByLang[lang] = entry.variants.map(v => v.routeId)
      }
      if (allLoadable) {
        const huIds = variantsByLang.hu || []
        for (const lang of ['en', 'pl']) {
          const otherIds = variantsByLang[lang] || []
          if (huIds.length !== otherIds.length || huIds.some((id, i) => id !== otherIds[i])) {
            console.error(`❌ ${libId}/${id}: variants routeId parity mismatch HU=[${huIds.join(',')}] vs ${lang.toUpperCase()}=[${otherIds.join(',')}]`)
            errors++
          }
        }
      }
    }
  }

  // Sub-Task 1 (2026-05-19 perf-restructure) — performance library only:
  // subCategory required + valid (must match one of library.subCategories[].id),
  // subSection optional + valid (must match library.subSections[subCategory][].id),
  // formFactors required (array of valid IDs, min 1, no duplicates), and
  // FORM_FACTORS allow-list comes from the library's own formFactors export.
  if (libId === 'performance') {
    const libCats = (libExport?.subCategories || []).map(c => c.id)
    const subSectionMap = libExport?.subSections || {}
    const allowedFormFactors = new Set((libExport?.formFactors || []).map(f => f.id))

    // v0.27.4: 6 subCategories (added 'sarm' top-level — previously SARMs were a 19nor sub-section).
    const expected = ['dht', 'test', '19nor', 'sarm', 'pct', 'fat']
    if (libCats.length !== expected.length) {
      console.error(`❌ ${libId}: expected ${expected.length} subCategories, got ${libCats.length}`)
      errors++
    } else {
      for (const exp of expected) {
        if (!libCats.includes(exp)) {
          console.error(`❌ ${libId}: missing required subCategory "${exp}"`)
          errors++
        }
      }
    }

    if (allowedFormFactors.size === 0) {
      console.error(`❌ ${libId}: library.formFactors export is empty or missing`)
      errors++
    }

    for (const m of meta) {
      // subCategory required
      if (!m.subCategory) {
        console.error(`❌ ${libId}/${m.id}: missing required field "subCategory"`)
        errors++
      } else if (!libCats.includes(m.subCategory)) {
        console.error(`❌ ${libId}/${m.id}: subCategory "${m.subCategory}" not in library.subCategories`)
        errors++
      }

      // subSection optional but must be valid if present
      if (m.subSection !== undefined) {
        const validSections = (subSectionMap[m.subCategory] || []).map(s => s.id)
        if (!validSections.includes(m.subSection)) {
          console.error(`❌ ${libId}/${m.id}: subSection "${m.subSection}" not valid for subCategory "${m.subCategory}" (allowed: ${validSections.join(',')})`)
          errors++
        }
      }

      // formFactors required, array of valid IDs, min 1, no duplicates
      if (!Array.isArray(m.formFactors)) {
        console.error(`❌ ${libId}/${m.id}: missing required field "formFactors" (must be array)`)
        errors++
      } else if (m.formFactors.length === 0) {
        console.error(`❌ ${libId}/${m.id}: formFactors array is empty (need ≥1)`)
        errors++
      } else {
        const seen = new Set()
        for (const ff of m.formFactors) {
          if (!allowedFormFactors.has(ff)) {
            console.error(`❌ ${libId}/${m.id}: formFactor "${ff}" not in library.formFactors`)
            errors++
          }
          if (seen.has(ff)) {
            console.error(`❌ ${libId}/${m.id}: duplicate formFactor "${ff}"`)
            errors++
          }
          seen.add(ff)
        }
      }
    }
  }

  allLibraryMeta[libId] = meta
  allLibraryExport[libId] = libExport

  console.log(`✅ ${libId}: ${meta.length} entries validated`)
}

// Post-roadmap 2026-05-20 — Cross-library related[] dangling warning +
// composition[] same-library id existence check (hard-fail).
let warnings = 0
const allKnownIds = new Set()
for (const [libId, meta] of Object.entries(allLibraryMeta)) {
  for (const m of meta) allKnownIds.add(`${libId}:${m.id}`)
}
// Build cross-lib lookup: any-lib id → true
const anyLibIds = new Set()
for (const [libId, meta] of Object.entries(allLibraryMeta)) {
  for (const m of meta) anyLibIds.add(m.id)
}

for (const libId of LIBRARIES) {
  const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries')
  const perLang = existsSync(resolve(entriesDir, 'hu'))
  if (!perLang) continue
  const sameLibIds = new Set(allLibraryMeta[libId].map(m => m.id))

  for (const m of allLibraryMeta[libId]) {
    // Load HU body (representative — related[] + composition[] are entry-level fields)
    const entryPath = resolve(entriesDir, 'hu', `${m.id}.js`)
    if (!existsSync(entryPath)) continue
    const entryMod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
    const entry = entryMod.default

    // Rule 1: dangling related-id warning (cross-library lookups allowed)
    if (Array.isArray(entry?.related)) {
      for (const refId of entry.related) {
        if (!anyLibIds.has(refId)) {
          console.warn(`⚠️  ${libId}/${m.id} related[] references missing ID: ${refId}`)
          warnings++
        }
      }
    }

    // Rule 2: composition[] same-library existence check (hard-fail)
    if (Array.isArray(entry?.composition)) {
      for (const item of entry.composition) {
        if (!item?.id) {
          console.error(`❌ ${libId}/${m.id} composition[] item missing 'id' field`)
          errors++
          continue
        }
        if (!sameLibIds.has(item.id)) {
          console.error(`❌ ${libId}/${m.id} composition[] references missing same-library ID: ${item.id}`)
          errors++
        }
      }
    }
  }
}
if (warnings > 0) {
  console.log(`\n⚠️  ${warnings} cross-library related[] warning(s) (non-fatal).`)
}

if (errors > 0) {
  console.error(`\n❌ Validation failed with ${errors} error(s).`)
  process.exit(1)
}
console.log('\n✅ All libraries validated.')
