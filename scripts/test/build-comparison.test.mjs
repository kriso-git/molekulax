import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildComparison } from '../../src/components/comparison/buildComparison.js'

const e = (id, keyInfo, extra = {}) => ({ id, name: id.toUpperCase(), shortDesc: `${id} desc`, keyInfo, ...extra })

test('same-lib: union of keyInfo labels, per-member href uses member lib', () => {
  const cmp = { members: [{ id: 'a', lib: 'performance' }, { id: 'b', lib: 'performance' }] }
  const entries = [
    e('a', [{ label: 'Mech', value: 'x' }, { label: 'Half', value: '1h' }]),
    e('b', [{ label: 'Mech', value: 'y' }, { label: 'Legal', value: 'Rx' }]),
  ]
  const { members, rows } = buildComparison(entries, cmp, 'hu')
  assert.equal(members[0].href, '/teljesitmenyfokozok/a')
  assert.deepEqual(rows.map((r) => r.label), ['Mech', 'Half', 'Legal']) // first-seen union
  assert.deepEqual(rows[2].values, [null, 'Rx']) // gap for member a
})

test('curated dimensions: match synonyms per lang, display label used', () => {
  const cmp = {
    members: [{ id: 'a', lib: 'performance' }, { id: 'b', lib: 'pharmaceutical' }],
    dimensions: [
      { display: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek działania' }, match: { hu: ['Hatáskezdet'], en: ['Onset'], pl: ['Początek działania', 'Początek'] } },
    ],
  }
  const entriesPl = [e('a', [{ label: 'Początek działania', value: 'szybko' }]), e('b', [{ label: 'Początek', value: 'wolno' }])]
  const { rows } = buildComparison(entriesPl, cmp, 'pl')
  assert.equal(rows[0].label, 'Początek działania')
  assert.deepEqual(rows[0].values, ['szybko', 'wolno']) // synonym list matched both members
})

test('same-id cross-lib: column name disambiguated by library', () => {
  const cmp = { sameId: true, members: [{ id: 'finasteride', lib: 'performance' }, { id: 'finasteride', lib: 'pharmaceutical' }] }
  const entries = [e('finasteride', []), e('finasteride', [])]
  const { members } = buildComparison(entries, cmp, 'hu')
  assert.equal(members[0].name, 'FINASTERIDE · teljesítmény')
  assert.equal(members[1].name, 'FINASTERIDE · gyógyszer')
})

test('null member entry yields null slot (failed import)', () => {
  const cmp = { members: [{ id: 'a', lib: 'peptides' }, { id: 'b', lib: 'peptides' }] }
  const { members } = buildComparison([e('a', []), null], cmp, 'hu')
  assert.equal(members[1], null)
})
