// Offline unit test for parseStagedFiles. No git-shell, no network.
// Tests the pure-fn that filters staged file paths and dedupes (libId, entryId) pairs.

import assert from 'node:assert/strict'
import { parseStagedFiles } from '../verify-staged-entries.mjs'

const cases = [
  {
    name: 'single entry, HU only',
    input: ['src/data/libraries/peptides/entries/hu/retatrutide.js'],
    expected: [{ libId: 'peptides', entryId: 'retatrutide' }],
  },
  {
    name: '3-lang of same entry de-dupes to 1 pair',
    input: [
      'src/data/libraries/peptides/entries/hu/retatrutide.js',
      'src/data/libraries/peptides/entries/en/retatrutide.js',
      'src/data/libraries/peptides/entries/pl/retatrutide.js',
    ],
    expected: [{ libId: 'peptides', entryId: 'retatrutide' }],
  },
  {
    name: 'cross-library returns 2 pairs, sorted by libId then entryId',
    input: [
      'src/data/libraries/peptides/entries/hu/retatrutide.js',
      'src/data/libraries/nootropics/entries/hu/piracetam.js',
    ],
    expected: [
      { libId: 'nootropics', entryId: 'piracetam' },
      { libId: 'peptides', entryId: 'retatrutide' },
    ],
  },
  {
    name: 'non-entry files return empty array (no false trigger)',
    input: [
      'README.md',
      'src/App.jsx',
      'scripts/verify-pmids.mjs',
      'docs/superpowers/specs/foo.md',
      'src/data/libraries/peptides/index.js',
    ],
    expected: [],
  },
]

let passed = 0
let failed = 0
for (const c of cases) {
  try {
    const actual = parseStagedFiles(c.input)
    assert.deepEqual(actual, c.expected)
    console.log(`✓ ${c.name}`)
    passed++
  } catch (err) {
    console.error(`✗ ${c.name}`)
    console.error(`  expected: ${JSON.stringify(c.expected)}`)
    console.error(`  actual:   ${JSON.stringify(err.actual)}`)
    failed++
  }
}

console.log(`\n${passed}/${cases.length} PASS${failed > 0 ? `, ${failed} FAIL` : ''}`)
if (failed > 0) process.exit(1)
