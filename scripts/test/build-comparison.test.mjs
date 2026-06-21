import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildComparison } from '../../src/components/comparison/buildComparison.js'

const A = { id: 'a', name: 'A', shortDesc: 'first', keyInfo: [{ label: 'Típus', value: 'X' }, { label: 'Felezési idő', value: '1h' }] }
const B = { id: 'b', name: 'B', shortDesc: 'second', keyInfo: [{ label: 'Típus', value: 'Y' }, { label: 'Tárolás', value: 'fridge' }] }

test('buildComparison: members carry id + name + shortDesc + href', () => {
  const r = buildComparison([A, B], 'hu', 'peptides')
  assert.deepEqual(r.members.map((m) => m.name), ['A', 'B'])
  assert.equal(r.members[0].shortDesc, 'first')
  assert.equal(r.members[0].href, '/peptidek/a')
})

test('buildComparison: keyInfo union, first-seen order, null for gaps', () => {
  const r = buildComparison([A, B], 'hu', 'peptides')
  assert.deepEqual(r.rows.map((row) => row.label), ['Típus', 'Felezési idő', 'Tárolás'])
  assert.deepEqual(r.rows.find((row) => row.label === 'Típus').values, ['X', 'Y'])
  assert.deepEqual(r.rows.find((row) => row.label === 'Tárolás').values, [null, 'fridge'])
  assert.deepEqual(r.rows.find((row) => row.label === 'Felezési idő').values, ['1h', null])
})

test('buildComparison: handles a null member (failed import) gracefully', () => {
  const r = buildComparison([A, null], 'hu', 'peptides')
  assert.equal(r.members[1], null)
  assert.equal(r.rows.find((row) => row.label === 'Típus').values[1], null)
  // labels still come only from the surviving member
  assert.deepEqual(r.rows.map((row) => row.label), ['Típus', 'Felezési idő'])
})

test('buildComparison: tolerates triplet {hu,en,pl} shortDesc + value via lang', () => {
  const T = { id: 't', name: 'T', shortDesc: { hu: 'magyar', en: 'eng' }, keyInfo: [{ label: 'Típus', value: { hu: 'm', en: 'e' } }] }
  const r = buildComparison([T], 'en', 'peptides')
  assert.equal(r.members[0].shortDesc, 'eng')
  assert.equal(r.rows[0].values[0], 'e')
})

test('buildComparison: no lib -> href null, entries with no keyInfo -> no rows', () => {
  const r = buildComparison([{ id: 'x', name: 'X', shortDesc: 'd' }], 'hu', null)
  assert.equal(r.members[0].href, null)
  assert.deepEqual(r.rows, [])
})
