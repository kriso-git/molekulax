#!/usr/bin/env node
// One-shot: move 6 SARM entries' LIBRARY_ENTRY_META subCategory/subSection from
// 19nor/sarms to sarm/{non-steroid,steroidal}. v0.27.4.

import { readFileSync, writeFileSync } from 'node:fs'

const f = 'src/data/libraries/performance/index.js'
let src = readFileSync(f, 'utf8')

const MOVES = [
  { id: 'yk-11',    sub: 'steroidal'   },
  { id: 'rad-140',  sub: 'non-steroid' },
  { id: 'lgd-4033', sub: 'non-steroid' },
  { id: 'ostarine', sub: 'non-steroid' },
  { id: 's4',       sub: 'non-steroid' },
  { id: 's23',      sub: 'non-steroid' },
]

let touched = 0
for (const { id, sub } of MOVES) {
  // Match a meta object: from "id": "<id>" through the FIRST "subSection": "sarms"
  // immediately following it. Non-greedy across newlines.
  const re = new RegExp(
    '("id":\\s*"' + id + '"[\\s\\S]*?)"subCategory":\\s*"19nor",(\\s*)"subSection":\\s*"sarms"'
  )
  if (!re.test(src)) {
    console.log('MISS:', id)
    continue
  }
  src = src.replace(re, (_, prefix, gap) =>
    prefix + '"subCategory": "sarm",' + gap + '"subSection": "' + sub + '"'
  )
  touched++
  console.log('moved:', id, '->', sub)
}

writeFileSync(f, src, 'utf8')
console.log(`\n${touched}/${MOVES.length} entries moved.`)
