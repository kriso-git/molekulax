// v0.30 Phase D — remove study-blocks by title-prefix match
// Used for duplicate-PMID blocks where the same PMID appears in multiple
// study-entries (only the fabricated ones with mismatched titles need removal).

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const REMOVALS_BY_TITLE = {
  nootropics: {
    selank: [
      'Anxiolytic efficacy of Selank in patients with generalized anxiety disorder',
      'Selank quality-of-life improvement in GAD vs Phenazepam',
    ],
  },
}

function removeStudyBlockByTitle(content, titlePrefix) {
  const titleMarker = `"title": "${titlePrefix}`
  const titleIdx = content.indexOf(titleMarker)
  if (titleIdx === -1) return { content, removed: false, reason: 'title not found' }

  // Walk backward to find opening { of the study-block
  let depth = 0
  let blockStart = -1
  for (let i = titleIdx; i >= 0; i--) {
    const ch = content[i]
    if (ch === '}') depth++
    else if (ch === '{') {
      if (depth === 0) { blockStart = i; break }
      depth--
    }
  }
  if (blockStart === -1) return { content, removed: false, reason: 'block start not found' }

  // Walk forward to find closing }
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

  // Determine trailing or leading comma
  let i = blockEnd + 1
  while (i < content.length && /\s/.test(content[i])) i++
  const nextNonWs = content[i]

  let removeStart, removeEnd
  if (nextNonWs === ',') {
    removeStart = blockStart
    removeEnd = i + 1
    while (removeEnd < content.length && /\s/.test(content[removeEnd])) {
      if (content[removeEnd] === '\n') { removeEnd++; break }
      removeEnd++
    }
    while (removeEnd < content.length && content[removeEnd] === ' ') removeEnd++
  } else {
    let j = blockStart - 1
    while (j >= 0 && /\s/.test(content[j])) j--
    if (content[j] === ',') {
      removeStart = j
      removeEnd = blockEnd + 1
    } else {
      removeStart = blockStart
      removeEnd = blockEnd + 1
    }
  }

  return { content: content.slice(0, removeStart) + content.slice(removeEnd), removed: true }
}

let total = 0
for (const [lib, entries] of Object.entries(REMOVALS_BY_TITLE)) {
  for (const [slug, titles] of Object.entries(entries)) {
    for (const lang of ['hu', 'en', 'pl']) {
      const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries', lang, slug + '.js')
      if (!existsSync(path)) { console.log(`  ${lib}/${slug}/${lang}: missing`); continue }
      let content = readFileSync(path, 'utf-8')
      const original = content
      for (const title of titles) {
        const r = removeStudyBlockByTitle(content, title)
        if (!r.removed) {
          console.log(`  ${lib}/${slug}/${lang}: ⚠ title-prefix not found: "${title.slice(0, 40)}"`)
        } else {
          content = r.content
          total++
        }
      }
      if (content !== original) {
        writeFileSync(path, content, 'utf-8')
        console.log(`  ${lib}/${slug}/${lang}: ✅ ${original.length} → ${content.length} bytes`)
      }
    }
  }
}
console.log(`\nTotal title-based removals: ${total}`)
