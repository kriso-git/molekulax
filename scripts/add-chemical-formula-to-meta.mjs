#!/usr/bin/env node
// One-shot Phase 10 Task 6 helper:
// Reads each nootropic entry file's chemicalFormula and propagates it
// into the corresponding LIBRARY_ENTRY_META record in nootropics/index.js.
// Uses pure string-replace to avoid Edit-tool Unicode-quote corruption.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const entriesDir = resolve(repoRoot, 'src/data/libraries/nootropics/entries')
const indexPath = resolve(repoRoot, 'src/data/libraries/nootropics/index.js')

// Build id → formula map from per-entry files.
const formulaMap = new Map()
const files = readdirSync(entriesDir).filter(f => f.endsWith('.js'))
for (const f of files) {
  const id = f.replace(/\.js$/, '')
  const content = readFileSync(resolve(entriesDir, f), 'utf-8')
  // Match: "chemicalFormula": "C15H15NO2S" OR chemicalFormula: 'C15H15NO2S'
  const m = content.match(/["']?chemicalFormula["']?\s*:\s*["']([^"']+)["']/)
  if (m) {
    formulaMap.set(id, m[1])
  } else {
    console.warn(`⚠️  ${id}: no chemicalFormula field found`)
  }
}
console.log(`Found chemicalFormula in ${formulaMap.size} / ${files.length} entry files.`)

// Load + patch index.js. Add a "chemicalFormula" field to each meta record.
// Strategy: insert immediately after the "tier" line of each record.
let indexContent = readFileSync(indexPath, 'utf-8')
let added = 0
let skipped = 0

for (const [id, formula] of formulaMap.entries()) {
  // Locate the meta block for this id. Records look like:
  //   {
  //     "id": "piracetam",
  //     ...
  //     "tier": 3,
  //     "wadaStatus": null      ← optional, sometimes present
  //   },
  // We insert `"chemicalFormula": "..."` right after the "tier" line within
  // the record. Use a regex anchored to the specific id to avoid mismatch.

  const recordRe = new RegExp(
    '("id":\\s*"' + id.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&') + '"[\\s\\S]*?)(\\n    "tier":\\s*\\d+,?)',
    'm'
  )

  if (!recordRe.test(indexContent)) {
    console.warn(`⚠️  ${id}: meta record not found OR pattern mismatch — skipping`)
    skipped++
    continue
  }

  // Check if already has chemicalFormula in this record (idempotent).
  const recordSliceRe = new RegExp(
    '"id":\\s*"' + id.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&') + '"[\\s\\S]*?\\n  \\},',
    'm'
  )
  const slice = indexContent.match(recordSliceRe)
  if (slice && slice[0].includes('"chemicalFormula"')) {
    skipped++
    continue
  }

  indexContent = indexContent.replace(
    recordRe,
    `$1$2\n    "chemicalFormula": "${formula}",`
  )
  added++
}

writeFileSync(indexPath, indexContent, 'utf-8')
console.log(`\n✅ Added chemicalFormula to ${added} meta records.`)
if (skipped > 0) console.log(`(${skipped} skipped — already present or pattern mismatch)`)
