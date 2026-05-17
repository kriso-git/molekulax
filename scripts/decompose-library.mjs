#!/usr/bin/env node
// Decomposes a library's monolithic data file into:
//   - src/data/libraries/<lib>/entries/<id>.js  (one per entry, default-export)
//   - src/data/libraries/<lib>/index.js         (rewritten: meta + lib-level fields)
//
// Usage: node scripts/decompose-library.mjs <libraryId>
//   <libraryId> = peptides | nootropics | performance | pharmaceutical

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const META_FIELDS = ['id', 'name', 'image', 'accentColor', 'tagColor', 'shortDesc', 'tier', 'wadaStatus', 'prescriptionStatus', 'atcCode']

async function main() {
  const [, , libId] = process.argv
  if (!libId) {
    console.error('Usage: node scripts/decompose-library.mjs <libraryId>')
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

  const entries = lib.entries
  if (!Array.isArray(entries) || entries.length === 0) {
    console.error(`No entries found on ${libKey}`)
    process.exit(1)
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

main().catch(err => { console.error(err); process.exit(1) })
