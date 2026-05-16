// One-shot cleanup: remove pep-pedia.org refs from peptide library studies[].
// Brace-counting parser (safer than regex on nested object literals).
//
// Removes each block matching:
//   { ... tag: { hu: 'Pep-Pedia', ... } ... url: '...pep-pedia.org...' ... },
//
// Including the trailing comma + newline.

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FILE = join(__dirname, '..', 'src/data/libraries/peptides/data.js')

let text = await readFile(FILE, 'utf8')

const ANCHOR = "tag: { hu: 'Pep-Pedia'"
let removed = 0

while (true) {
  const idx = text.indexOf(ANCHOR)
  if (idx === -1) break

  // Walk backward from idx to find the opening `{` of the containing object.
  // The opening `{` is on its own line just before this anchor.
  let openIdx = idx
  while (openIdx > 0 && text[openIdx] !== '{') openIdx--
  // Move back past whitespace + newline to consume the leading whitespace too.
  let blockStart = openIdx
  while (blockStart > 0 && text[blockStart - 1] !== '\n') blockStart--

  // Walk forward from openIdx to find the matching closing `}`.
  // Skip content inside strings (single, double, backtick).
  let depth = 0
  let i = openIdx
  let closeIdx = -1
  let inString = null
  let escape = false
  while (i < text.length) {
    const c = text[i]
    if (escape) { escape = false; i++; continue }
    if (c === '\\') { escape = true; i++; continue }
    if (inString) {
      if (c === inString) inString = null
      i++; continue
    }
    if (c === '"' || c === "'" || c === '`') { inString = c; i++; continue }
    if (c === '{') { depth++; i++; continue }
    if (c === '}') {
      depth--
      if (depth === 0) { closeIdx = i; break }
      i++; continue
    }
    i++
  }
  if (closeIdx === -1) throw new Error('Unmatched brace at idx ' + openIdx)

  // Consume trailing `,` and newline after the matching `}`.
  let blockEnd = closeIdx + 1
  if (text[blockEnd] === ',') blockEnd++
  if (text[blockEnd] === '\n') blockEnd++

  // Remove the block.
  text = text.slice(0, blockStart) + text.slice(blockEnd)
  removed++
}

if (!removed) {
  console.log('No Pep-Pedia blocks found.')
  process.exit(0)
}

await writeFile(FILE, text, 'utf8')
console.log(`Stripped ${removed} Pep-Pedia ref blocks from peptide data.js`)
