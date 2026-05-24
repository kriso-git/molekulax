#!/usr/bin/env node
// One-shot cleanup for v0.27.6: strip all references to the four deleted
// entries (retatrutide-perf, semaglutide-perf, tesamorelin-perf, ephedrine)
// from sibling performance entries' related[]/interactionsWith[]/effects.js
// entryIds[]/etc. Uses fs.readFileSync/writeFileSync (NOT Edit tool) to avoid
// the ASCII-curly-quote conversion bug on bulk-edits of JSON-style data files
// (see memory: feedback_edit_tool_quote_corruption).

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const DEAD_IDS = ['retatrutide-perf', 'semaglutide-perf', 'tesamorelin-perf', 'ephedrine']

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) walk(p, out)
    else if (p.endsWith('.js')) out.push(p)
  }
  return out
}

// Remove every line in a JS string-array that is a quoted dead-id, regardless
// of trailing comma. Pattern: indent + "id"<optional ,> + EOL
function stripDeadIdLines(src) {
  const deadPat = DEAD_IDS.map(id => id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  // Match a line containing only quoted dead id, optional trailing comma, and EOL
  const reLine = new RegExp(`^\\s*"(?:${deadPat})"\\s*,?\\s*\\r?\\n`, 'gm')
  let out = src.replace(reLine, '')
  // Fix dangling trailing comma before closing bracket: ",\n    ]" -> "\n    ]"
  out = out.replace(/,(\s*\])/g, '$1')
  return out
}

const ROOT = 'src/data/libraries/performance'
const files = walk(ROOT).concat([
  'src/data/libraries/peptides/entries/hu/retatrutide.js',
  'src/data/libraries/peptides/entries/en/retatrutide.js',
  'src/data/libraries/peptides/entries/pl/retatrutide.js',
  'src/data/libraries/peptides/entries/hu/semaglutide.js',
  'src/data/libraries/peptides/entries/en/semaglutide.js',
  'src/data/libraries/peptides/entries/pl/semaglutide.js',
  'src/data/libraries/peptides/entries/hu/tesamorelin.js',
  'src/data/libraries/peptides/entries/en/tesamorelin.js',
  'src/data/libraries/peptides/entries/pl/tesamorelin.js',
])

let touched = 0
for (const f of files) {
  const orig = readFileSync(f, 'utf8')
  const next = stripDeadIdLines(orig)
  if (next !== orig) {
    writeFileSync(f, next, 'utf8')
    touched++
    console.log(`  fixed: ${f}`)
  }
}
console.log(`\n${touched} files updated. Dead IDs stripped: ${DEAD_IDS.join(', ')}`)
