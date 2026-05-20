import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = 'e:/Website Biz/molekulax/src/data/libraries'
const TEMP = 'C:/Users/trolo/AppData/Local/Temp'
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

function loadEntryFile(filePath) {
 const src = readFileSync(filePath, 'utf8')
 const objStart = src.indexOf('export default')
 if (objStart === -1) throw new Error(`No "export default" in ${filePath}`)
 const header = src.slice(0, objStart)
 const objSrc = src.slice(objStart).replace(/^export default\s*/, '').trim().replace(/[;\s]*$/, '')
 // Evaluate object literal safely — no imports, no side effects in body files
 const obj = new Function(`"use strict"; return (${objSrc});`)()
 return { src, obj, header, objSrc }
}

function saveEntryFile(filePath, header, obj) {
 // Serialize object as pretty JSON (2-space indent) so diffs stay readable
 const body = JSON.stringify(obj, null, 2)
 const newSrc = header + 'export default ' + body + '\n'
 writeFileSync(filePath, newSrc, 'utf8')
}

const summary = { libs: {}, total: 0, errors: [] }

for (const lib of LIBS) {
 const outPath = join(TEMP, `anecdote-out-${lib}.json`)
 if (!existsSync(outPath)) {
 console.error(`SKIP ${lib} — output JSON missing: ${outPath}`)
 summary.errors.push(`${lib}: missing output`)
 continue
 }
 const entries = JSON.parse(readFileSync(outPath, 'utf8'))
 summary.libs[lib] = { count: entries.length, written: 0, skipped: 0 }

 for (const e of entries) {
 const { entryId, en, hu, pl } = e
 if (!entryId || !en || !hu || !pl) {
 summary.errors.push(`${lib}/${entryId}: missing lang value`)
 summary.libs[lib].skipped++
 continue
 }
 const langs = { en, hu, pl }
 for (const lang of Object.keys(langs)) {
 const filePath = join(ROOT, lib, 'entries', lang, `${entryId}.js`)
 if (!existsSync(filePath)) {
 summary.errors.push(`${lib}/${lang}/${entryId}: file not found`)
 continue
 }
 try {
 const { obj, header } = loadEntryFile(filePath)
 obj.anecdote = langs[lang]
 saveEntryFile(filePath, header, obj)
 summary.total++
 } catch (err) {
 summary.errors.push(`${lib}/${lang}/${entryId}: ${err.message}`)
 }
 }
 summary.libs[lib].written++
 }
}

console.log('=== POPULATE SUMMARY ===')
console.log(`Total files written: ${summary.total}`)
for (const [lib, s] of Object.entries(summary.libs)) {
 console.log(` ${lib}: ${s.written}/${s.count} entries (${s.written * 3} files), ${s.skipped} skipped`)
}
if (summary.errors.length) {
 console.log(`\nErrors (${summary.errors.length}):`)
 summary.errors.slice(0, 20).forEach(e => console.log(` - ${e}`))
 if (summary.errors.length > 20) console.log(` ... ${summary.errors.length - 20} more`)
}
