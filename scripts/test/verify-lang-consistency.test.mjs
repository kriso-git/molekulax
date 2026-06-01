// Offline unit test for compareEntryStudies. No filesystem, no network.
// Verifies cross-lang drift detection on {pmid, title} sequences.

import assert from 'node:assert/strict'
import { compareEntryStudies } from '../verify-lang-consistency.mjs'

const study = (pmid, title, extra = {}) => ({ pmid, title, ...extra })

const cases = [
  {
    name: 'identical pmid+title across langs (translated finding ignored) → ok',
    input: {
      hu: [study('111', 'Alpha trial', { finding: 'magyar' })],
      en: [study('111', 'Alpha trial', { finding: 'english' })],
      pl: [study('111', 'Alpha trial', { finding: 'polski' })],
    },
    expected: { ok: true, diffs: [] },
  },
  {
    name: 'pmid drift in en at index 1 → fail',
    input: {
      hu: [study('111', 'A'), study('222', 'B')],
      en: [study('111', 'A'), study('999', 'B')],
      pl: [study('111', 'A'), study('222', 'B')],
    },
    expected: { ok: false, diffs: [{ lang: 'en', index: 1, field: 'pmid', hu: '222', other: '999' }] },
  },
  {
    name: 'title drift in pl at index 0 → fail',
    input: {
      hu: [study('111', 'Real title')],
      en: [study('111', 'Real title')],
      pl: [study('111', 'Wrong title')],
    },
    expected: { ok: false, diffs: [{ lang: 'pl', index: 0, field: 'title', hu: 'Real title', other: 'Wrong title' }] },
  },
  {
    name: 'count mismatch (en shorter, overlap matches) → single count diff',
    input: {
      hu: [study('111', 'A'), study('222', 'B')],
      en: [study('111', 'A')],
      pl: [study('111', 'A'), study('222', 'B')],
    },
    expected: { ok: false, diffs: [{ lang: 'en', index: -1, field: 'count', hu: 2, other: 1 }] },
  },
  {
    name: 'missing lang (en undefined) → count diff hu=1 en=0',
    input: {
      hu: [study('111', 'A')],
      en: undefined,
      pl: [study('111', 'A')],
    },
    expected: { ok: false, diffs: [{ lang: 'en', index: -1, field: 'count', hu: 1, other: 0 }] },
  },
  {
    name: 'all empty studies → ok',
    input: { hu: [], en: [], pl: [] },
    expected: { ok: true, diffs: [] },
  },
  {
    name: 'trailing-whitespace-only title diff → ok (trim lenience)',
    input: {
      hu: [study('111', 'Trimmed')],
      en: [study('111', '  Trimmed  ')],
      pl: [study('111', 'Trimmed')],
    },
    expected: { ok: true, diffs: [] },
  },
]

let passed = 0
let failed = 0
for (const c of cases) {
  try {
    assert.deepEqual(compareEntryStudies(c.input), c.expected)
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
