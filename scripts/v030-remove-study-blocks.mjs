// v0.30 Phase C — remove unsalvageable study-blocks from studies[] array
// For each (lib, slug, oldPmid): finds the study-block containing that PMID and
// removes it cleanly, preserving JSON-shape integrity of remaining studies[].

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const REMOVALS = {
  peptides: {
    adipotide: ['22075637'],
    dsip: ['7791904'],
    epo: ['16769597'],
    'ghrp-2': ['11331743'],
    hexarelin: ['10516862'],
    'igf-1-lr3': ['1747094'],
    'lipo-c': ['33093270'],
    'll-37': ['12592095'],
    'matrixyl-3000': ['18492210'],
    oxytocin: ['28925369'],
    pinealon: ['25023411'],
    'snap-8': ['23981350'],
    'epithalon': ['12937682'],
  },
  nootropics: {
    '9-me-bc': ['16111712', '23842892'],
    'adrafinil': ['11079215'],
    'bromantane': ['17539276', '11548438', '19374118'],
    'nsi-189': ['24059323', '26821984', '28006971'],
    'selank': ['18454141'],
  },
}

// Remove one study-block containing the given PMID from a JS source-string.
// Strategy: find the index of "pmid": "<pmid>", then find the enclosing { ... }
// block boundaries, then remove the block + trailing comma (or leading comma if
// it's the last item).
function removeStudyBlock(content, pmid) {
  const pmidMarker = `"pmid": "${pmid}"`
  const pmidIdx = content.indexOf(pmidMarker)
  if (pmidIdx === -1) return { content, removed: false, reason: 'pmid not found' }

  // Find opening { of the study-block (walk backward from pmidIdx, counting braces)
  let depth = 0
  let blockStart = -1
  for (let i = pmidIdx; i >= 0; i--) {
    const ch = content[i]
    if (ch === '}') depth++
    else if (ch === '{') {
      if (depth === 0) { blockStart = i; break }
      depth--
    }
  }
  if (blockStart === -1) return { content, removed: false, reason: 'block start not found' }

  // Find closing } of the same block
  depth = 0
  let blockEnd = -1
  for (let i = blockStart; i < content.length; i++) {
    const ch = content[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) { blockEnd = i; break }
    }
  }
  if (blockEnd === -1) return { content, removed: false, reason: 'block end not found' }

  // Determine what whitespace/comma to remove around the block.
  // Three cases:
  //   1. Block is followed by `,` (more items after) → remove block + trailing `,\n<indent>`
  //   2. Block is the last item, preceded by `,` (more items before) → remove leading `,\n<indent>` + block
  //   3. Block is the only item → remove just the block (leave empty `[]`)
  //
  // We always preserve the array's outer formatting.

  // Look forward past blockEnd for `,` or `]`
  let i = blockEnd + 1
  while (i < content.length && /\s/.test(content[i])) i++
  const nextNonWs = content[i]

  let removeStart, removeEnd
  if (nextNonWs === ',') {
    // Case 1: trailing comma → remove block + everything up to (and including) the comma + following whitespace before next item
    removeStart = blockStart
    removeEnd = i + 1
    // Also eat the following whitespace+newline+indent up to the next `{`
    while (removeEnd < content.length && /\s/.test(content[removeEnd])) {
      if (content[removeEnd] === '\n') { removeEnd++; break }
      removeEnd++
    }
    // Eat indent of next item
    while (removeEnd < content.length && content[removeEnd] === ' ') removeEnd++
  } else {
    // Case 2 or 3: no trailing comma → walk backward from blockStart to find preceding `,` or `[`
    let j = blockStart - 1
    while (j >= 0 && /\s/.test(content[j])) j--
    if (content[j] === ',') {
      // Case 2: leading comma → remove from comma to block end
      removeStart = j
      removeEnd = blockEnd + 1
    } else {
      // Case 3: only item → just remove the block (leave [ ... \n ] empty)
      removeStart = blockStart
      removeEnd = blockEnd + 1
    }
  }

  const newContent = content.slice(0, removeStart) + content.slice(removeEnd)
  return { content: newContent, removed: true }
}

let totalRemovals = 0
let anyFail = false

for (const [lib, entries] of Object.entries(REMOVALS)) {
  for (const [slug, pmids] of Object.entries(entries)) {
    for (const lang of ['hu', 'en', 'pl']) {
      const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries', lang, slug + '.js')
      if (!existsSync(path)) { console.log(`  ${lib}/${slug}/${lang}: file missing, skip`); continue }
      let content = readFileSync(path, 'utf-8')
      const original = content
      for (const pmid of pmids) {
        const result = removeStudyBlock(content, pmid)
        if (!result.removed) {
          console.log(`  ${lib}/${slug}/${lang}: ⚠ PMID ${pmid} block NOT REMOVED (${result.reason})`)
          anyFail = true
        } else {
          content = result.content
          totalRemovals++
        }
      }
      if (content !== original) {
        writeFileSync(path, content, 'utf-8')
        console.log(`  ${lib}/${slug}/${lang}: ✅ ${original.length} → ${content.length} bytes`)
      }
    }
  }
}

console.log(`\nTotal block-removals across all files: ${totalRemovals}`)
console.log(anyFail ? '❌ Some removals failed — inspect manually' : '✅ All study-blocks removed cleanly')
