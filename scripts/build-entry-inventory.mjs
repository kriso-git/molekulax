import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const root = process.argv[2] || 'e:/Website Biz/molekulax/src/data/libraries'
const dst = process.argv[3] || 'C:/Users/trolo/AppData/Local/Temp/molekulax-entry-inventory.json'

const libraries = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

function extractMetaFromIndex(libDir) {
  const indexPath = join(libDir, 'index.js')
  const content = readFileSync(indexPath, 'utf8')
  // Find LIBRARY_ENTRY_META = [...]
  const metaMatch = content.match(/export\s+const\s+LIBRARY_ENTRY_META\s*=\s*(\[[\s\S]*?\n\])/)
  if (!metaMatch) {
    console.warn(`No LIBRARY_ENTRY_META found in ${indexPath}`)
    return []
  }
  // Quick-and-dirty: extract id, name, shortDesc.en per entry
  const arrText = metaMatch[1]
  const entries = []
  // Match each entry object — keyed by id + name pattern
  const entryRegex = /\{\s*"?id"?:\s*"([^"]+)"[\s\S]*?"?name"?:\s*"([^"]+)"[\s\S]*?"?shortDesc"?:\s*\{[\s\S]*?"?en"?:\s*"([^"]+)"/g
  let m
  while ((m = entryRegex.exec(arrText)) !== null) {
    entries.push({ id: m[1], name: m[2], shortDescEn: m[3] })
  }
  return entries
}

const inventory = {}
for (const lib of libraries) {
  const libDir = join(root, lib)
  const entries = extractMetaFromIndex(libDir)
  inventory[lib] = entries
  console.log(`${lib}: ${entries.length} entries`)
}

writeFileSync(dst, JSON.stringify(inventory, null, 2))
const total = Object.values(inventory).reduce((sum, list) => sum + list.length, 0)
console.log(`Total: ${total} entries -> ${dst}`)
