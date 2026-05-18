#!/usr/bin/env node
// Decomposes a library's monolithic data file into:
//   - src/data/libraries/<lib>/entries/<id>.js  (one per entry, default-export)
//   - src/data/libraries/<lib>/index.js         (rewritten: meta + lib-level fields)
//
// Usage: node scripts/decompose-library.mjs <libraryId>
//   <libraryId> = peptides | nootropics | performance | pharmaceutical

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

// Recursively walks an entry value tree, replacing any triplet-shaped
// {hu, en, pl} leaf with value[lang]. Phase 12 per-lang split.
// - Primitives (string/number/boolean/null/undefined) → pass through.
// - Arrays → map recursively.
// - Plain objects with EXACTLY keys {hu, en, pl} → return value[lang] ?? ''.
// - Other plain objects → walk keys, recurse on each value.
export function localize(value, lang) {
  if (value === null || value === undefined) return value
  if (typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map(v => localize(v, lang))
  const keys = Object.keys(value).sort().join(',')
  if (keys === 'en,hu,pl') return value[lang] ?? ''
  const out = {}
  for (const k of Object.keys(value)) {
    out[k] = localize(value[k], lang)
  }
  return out
}

const META_FIELDS = ['id', 'name', 'image', 'accentColor', 'tagColor', 'shortDesc', 'tier', 'wadaStatus', 'prescriptionStatus', 'atcCode']

async function main() {
  const args = process.argv.slice(2)
  const libId = args.find(a => !a.startsWith('-'))
  const perLang = args.includes('--per-lang')
  const noBackup = args.includes('--no-backup')
  if (!libId) {
    console.error('Usage: node scripts/decompose-library.mjs <libraryId> [--per-lang] [--no-backup]')
    process.exit(1)
  }

  // Dynamic-import the library — picks up the current pre-decomposition shape.
  const libDir = resolve(repoRoot, 'src/data/libraries', libId)
  const libModulePath = resolve(libDir, 'index.js')
  const libModule = await import(`file://${libModulePath.replace(/\\/g, '/')}`)
  const libKey = `${libId}Library`
  const lib = libModule[libKey]
  if (!lib) {
    console.error(`Module at ${libModulePath} does not export ${libKey}`)
    process.exit(1)
  }

  // Resolve entries — two shapes supported:
  //   1. Pre-Phase 9: lib.entries is a populated array (monolithic data.js).
  //   2. Phase 9+: lib.meta + per-entry files in entries/<id>.js. We load each
  //      file via dynamic import and reconstruct the array.
  let entries = lib.entries
  if (!Array.isArray(entries) || entries.length === 0) {
    if (Array.isArray(lib.meta) && lib.meta.length > 0) {
      console.log(`ℹ️  Library ${libId} is Phase 9-decomposed (${lib.meta.length} entries). Loading from entries/<id>.js…`)
      entries = []
      for (const m of lib.meta) {
        // Look in flat entries/<id>.js (Phase 9) first; fall back to
        // entries/.bak/<id>.js so this script is idempotent when re-run on a
        // library that was already migrated to per-lang.
        let entryPath = resolve(libDir, 'entries', `${m.id}.js`)
        if (!existsSync(entryPath)) {
          const bakPath = resolve(libDir, 'entries', '.bak', `${m.id}.js`)
          if (existsSync(bakPath)) {
            entryPath = bakPath
          } else {
            console.error(`❌ Meta references ${m.id} but neither entries/${m.id}.js nor entries/.bak/${m.id}.js exists`)
            process.exit(1)
          }
        }
        const mod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
        const entry = mod.default
        if (!entry || entry.id !== m.id) {
          console.error(`❌ ${entryPath} default export does not match meta id`)
          process.exit(1)
        }
        entries.push(entry)
      }
      console.log(`✅ Loaded ${entries.length} entries from disk`)
    } else {
      console.error(`No entries found on ${libKey} (no lib.entries and no lib.meta)`)
      process.exit(1)
    }
  }

  if (perLang) {
    // Phase 12 per-lang emit. For each lang, write entries/<lang>/<id>.js.
    const entriesDir = resolve(libDir, 'entries')
    if (!existsSync(entriesDir)) mkdirSync(entriesDir, { recursive: true })
    for (const lang of ['hu', 'en', 'pl']) {
      const langDir = resolve(libDir, 'entries', lang)
      if (!existsSync(langDir)) mkdirSync(langDir, { recursive: true })
      for (const entry of entries) {
        const localized = localize(entry, lang)
        const filePath = resolve(langDir, `${entry.id}.js`)
        const body = `// Auto-decomposed by scripts/decompose-library.mjs --per-lang at ${new Date().toISOString()}\n// Edit this file directly to update the ${lang.toUpperCase()} body; do not re-run the script.\n\nexport default ${JSON.stringify(localized, null, 2)}\n`
        writeFileSync(filePath, body, 'utf8')
      }
      console.log(`✅ Emitted ${entries.length} ${lang.toUpperCase()} entry files to ${langDir}`)
    }

    // Backup old triplet entries to .bak/ (unless --no-backup)
    const bakDir = resolve(entriesDir, '.bak')
    if (!noBackup && !existsSync(bakDir)) mkdirSync(bakDir, { recursive: true })
    const { renameSync, unlinkSync } = await import('node:fs')
    for (const entry of entries) {
      const oldPath = resolve(entriesDir, `${entry.id}.js`)
      if (existsSync(oldPath)) {
        if (noBackup) unlinkSync(oldPath)
        else renameSync(oldPath, resolve(bakDir, `${entry.id}.js`))
      }
    }
    console.log(`✅ ${noBackup ? 'Deleted' : 'Backed up'} legacy triplet entry files`)

    // Build meta for the per-lang index too — same shape as legacy path.
    const meta = []
    for (const entry of entries) {
      const tier = typeof lib.getResearchLevel === 'function' ? lib.getResearchLevel(entry) : null
      const metaRec = { id: entry.id, name: entry.name, image: entry.image ?? null, accentColor: entry.accentColor, tagColor: entry.tagColor, shortDesc: entry.shortDesc, tier }
      if (entry.wadaStatus !== undefined) metaRec.wadaStatus = entry.wadaStatus
      if (entry.prescriptionStatus !== undefined) metaRec.prescriptionStatus = entry.prescriptionStatus
      if (entry.atcCode !== undefined) metaRec.atcCode = entry.atcCode
      meta.push(metaRec)
    }

    // Rewrite <lib>/index.js loadEntry to per-lang signature.
    const newIndex = renderLibraryIndexPerLang(libId, lib, meta)
    writeFileSync(libModulePath, newIndex, 'utf8')
    console.log(`✅ Rewrote ${libModulePath} with loadEntry(id, lang)`)
    return
  }

  // Ensure entries/ subdir exists
  const entriesDir = resolve(libDir, 'entries')
  if (!existsSync(entriesDir)) mkdirSync(entriesDir, { recursive: true })

  // Write each entry to its own file
  const meta = []
  for (const entry of entries) {
    const filePath = resolve(entriesDir, `${entry.id}.js`)
    const body = `// Auto-decomposed by scripts/decompose-library.mjs at ${new Date().toISOString()}\n// Edit this file directly to update the entry; do not re-run the script.\n\nexport default ${stringifyEntry(entry)}\n`
    writeFileSync(filePath, body, 'utf8')

    // Build meta record
    const tier = typeof lib.getResearchLevel === 'function' ? lib.getResearchLevel(entry) : null
    const metaRec = { id: entry.id, name: entry.name, image: entry.image ?? null, accentColor: entry.accentColor, tagColor: entry.tagColor, shortDesc: entry.shortDesc, tier }
    if (entry.wadaStatus !== undefined) metaRec.wadaStatus = entry.wadaStatus
    if (entry.prescriptionStatus !== undefined) metaRec.prescriptionStatus = entry.prescriptionStatus
    if (entry.atcCode !== undefined) metaRec.atcCode = entry.atcCode
    meta.push(metaRec)
  }

  // Rewrite <lib>/index.js: keep library-level fields, drop entries import, add LIBRARY_ENTRY_META
  const newIndex = renderLibraryIndex(libId, lib, meta)
  writeFileSync(libModulePath, newIndex, 'utf8')

  console.log(`✅ Decomposed ${entries.length} entries into ${entriesDir}`)
  console.log(`✅ Rewrote ${libModulePath}`)
  console.log(`⚠️  Now delete the old src/data/libraries/${libId}/data.js manually after verifying the build works.`)
}

function stringifyEntry(entry) {
  // Serialize with stable indentation, preserving functions as null (entries shouldn't contain functions).
  return JSON.stringify(entry, (k, v) => (typeof v === 'function' ? undefined : v), 2)
}

// Maps library id → singular form used inside categories.js exports
// (e.g. "peptides" → "PEPTIDE" because the file exports PEPTIDE_CATEGORIES,
// getPeptideCategories — not PEPTIDES_CATEGORIES).
const SINGULAR = {
  peptides: 'PEPTIDE',
  nootropics: 'NOOTROPIC',
  performance: 'PERFORMANCE',
  pharmaceutical: 'PHARMACEUTICAL',
}
const SINGULAR_CAMEL = {
  peptides: 'Peptide',
  nootropics: 'Nootropic',
  performance: 'Performance',
  pharmaceutical: 'Pharmaceutical',
}

function renderLibraryIndex(libId, lib, meta) {
  // Determine which non-entries imports the library still needs. We preserve
  // the original import lines verbatim from a hand-maintained whitelist:
  // categories, researchLevel, effects, shared/researchLevel.
  //
  // The new index.js NEVER imports data.js. It exports:
  //  - LIBRARY_ENTRY_META (array of meta records)
  //  - <libId>Library object — same shape as before, but entries is REPLACED by a placeholder that just returns meta
  //  - loadEntry(id) async — dynamic-imports entries/<id>.js
  const SING = SINGULAR[libId]
  const SingCamel = SINGULAR_CAMEL[libId]
  const libKey = `${libId}Library`
  return `// Auto-decomposed by scripts/decompose-library.mjs at ${new Date().toISOString()}
// LIBRARY_ENTRY_META[] is the synchronous metadata array used by tiles + switcher.
// Full Entry objects live in entries/<id>.js and are loaded via loadEntry(id).
// All non-entries library-level fields (categories, effects, etc.) are imported as before.

import { CATEGORIES, ${SING}_CATEGORIES, get${SingCamel}Categories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = ${JSON.stringify(meta, null, 2)}

export const TOP_ENTRY_IDS = ${JSON.stringify(lib.topEntries || [], null, 2)}

export const ${libKey} = {
  id: ${JSON.stringify(lib.id)},
  name: ${JSON.stringify(lib.name, null, 2)},
  description: ${JSON.stringify(lib.description, null, 2)},
  accent: ${JSON.stringify(lib.accent)},
  meta: LIBRARY_ENTRY_META,           // Phase 9: meta-only entries-replacement
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  entryCategoryMap: ${SING}_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: ${JSON.stringify(lib.effectsTitle, null, 2)},
  effectsSubtitle: ${JSON.stringify(lib.effectsSubtitle, null, 2)},
  labels: ${JSON.stringify(lib.labels, null, 2)},
}

// Vite/Rollup template-literal dynamic-import code-splitting: when the
// path has a static prefix + an interpolated leaf, Vite emits one chunk
// per file matching the pattern at build time.
export async function loadEntry(id) {
  const mod = await import(\`./entries/\${id}.js\`)
  return mod.default
}

// Convenience re-exports preserved for legacy consumers.
export { CATEGORIES, ${SING}_CATEGORIES, get${SingCamel}Categories, getResearchLevel, EFFECT_CATEGORIES }
`
}

function renderLibraryIndexPerLang(libId, lib, meta) {
  const SING = SINGULAR[libId]
  const SingCamel = SINGULAR_CAMEL[libId]
  const libKey = `${libId}Library`
  return `// Auto-decomposed by scripts/decompose-library.mjs --per-lang at ${new Date().toISOString()}
// Phase 12: per-lang entry chunks. loadEntry(id, lang) dynamic-imports
// entries/<lang>/<id>.js. Library-level fields (categories, effects, faq,
// labels) still triplet — only entry bodies are lang-split.

import { CATEGORIES, ${SING}_CATEGORIES, get${SingCamel}Categories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = ${JSON.stringify(meta, null, 2)}

export const TOP_ENTRY_IDS = ${JSON.stringify(lib.topEntries || [], null, 2)}

export const ${libKey} = {
  id: ${JSON.stringify(lib.id)},
  name: ${JSON.stringify(lib.name, null, 2)},
  description: ${JSON.stringify(lib.description, null, 2)},
  accent: ${JSON.stringify(lib.accent)},
  meta: LIBRARY_ENTRY_META,
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  entryCategoryMap: ${SING}_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: ${JSON.stringify(lib.effectsTitle, null, 2)},
  effectsSubtitle: ${JSON.stringify(lib.effectsSubtitle, null, 2)},
  labels: ${JSON.stringify(lib.labels, null, 2)},
  features: ${JSON.stringify(lib.features, null, 2)},
}

// Phase 12 per-lang: Vite template-literal-import emits one chunk per
// (lang, id) combo because the static prefix ./entries/ lets Vite glob
// every matching file at build time.
export async function loadEntry(id, lang) {
  const mod = await import(\`./entries/\${lang}/\${id}.js\`)
  return mod.default
}

export { CATEGORIES, ${SING}_CATEGORIES, get${SingCamel}Categories, getResearchLevel, EFFECT_CATEGORIES }
`
}

// Only run main() when invoked directly via `node scripts/decompose-library.mjs`;
// skip when imported (e.g. by test-localize.mjs) so the helper exports stay usable.
const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (invokedDirectly) {
  main().catch(err => { console.error(err); process.exit(1) })
}
