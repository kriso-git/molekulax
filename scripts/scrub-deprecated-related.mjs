// One-shot cleanup: remove deprecated peptide IDs from any entry's `related[]`.
// Used post-curation to eliminate dangling references after Task 13 deletes
// the 8 entry body files.
//
// Run: node scripts/scrub-deprecated-related.mjs

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', 'src', 'data', 'libraries', 'peptides', 'entries')

const DEPRECATED = [
  'fgl', 'larazotide', 'mgf', 'mod-grf-1-29',
  'p21', 'pemvidutide', 'pentadeca-arginate', 'thymulin',
]

const langs = ['hu', 'en', 'pl']
let totalModified = 0
let totalIdsRemoved = 0

for (const lang of langs) {
  const dir = join(ROOT, lang)
  const files = readdirSync(dir).filter(f => f.endsWith('.js'))

  for (const file of files) {
    const path = join(dir, file)
    const src = readFileSync(path, 'utf8')

    // Function-constructor object-eval (Phase 11 populate-anecdotes pattern).
    // Body files are `export default { ... }` so we strip the export prefix.
    const objSrc = src.replace(/^[\s\S]*?export\s+default\s+/, '').trim()
    let obj
    try {
      obj = new Function('return ' + objSrc.replace(/;?\s*$/, ''))()
    } catch (err) {
      console.error(`Parse fail: ${lang}/${file}`, err.message)
      continue
    }

    if (!obj.related || !Array.isArray(obj.related)) continue

    const before = obj.related.length
    obj.related = obj.related.filter(id => !DEPRECATED.includes(id))
    const removed = before - obj.related.length
    if (removed === 0) continue

    totalIdsRemoved += removed
    totalModified += 1

    // Rebuild file with header preserved
    const headerMatch = src.match(/^([\s\S]*?)export\s+default\s+/)
    const header = headerMatch ? headerMatch[1] : ''
    const rebuilt = header + 'export default ' + JSON.stringify(obj, null, 2) + '\n'
    writeFileSync(path, rebuilt, 'utf8')
    console.log(`Scrubbed ${lang}/${file}: removed ${removed} dangling IDs`)
  }
}

console.log(`\nDone. Modified ${totalModified} files; removed ${totalIdsRemoved} dangling related IDs.`)
