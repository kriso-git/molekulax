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

test('members carry image + accent for the visual headers (with defaults)', () => {
  const cmp = { members: [{ id: 'a', lib: 'peptides' }, { id: 'b', lib: 'peptides' }] }
  const entries = [
    e('a', [], { image: '/peptides/a.png', accentColor: '#00ff99' }),
    e('b', []), // no image/accent -> null image + default accent
  ]
  const { members } = buildComparison(entries, cmp, 'hu')
  assert.equal(members[0].image, '/peptides/a.png')
  assert.equal(members[0].accent, '#00ff99')
  assert.equal(members[1].image, null)
  assert.equal(members[1].accent, '#818cf8')
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

test('null member entry yields null slot AND does not pollute the union', () => {
  const cmp = { members: [{ id: 'a', lib: 'peptides' }, { id: 'b', lib: 'peptides' }] }
  const { members, rows } = buildComparison([e('a', [{ label: 'Mech', value: 'x' }]), null], cmp, 'hu')
  assert.equal(members[1], null)
  assert.deepEqual(rows.map((r) => r.label), ['Mech']) // null member contributes no labels
  assert.deepEqual(rows[0].values, ['x', null]) // surviving value present, null slot for missing member
})

test('triplet {hu,en,pl} values are localized per lang (name, shortDesc, keyInfo value)', () => {
  const cmp = { members: [{ id: 'a', lib: 'peptides' }] }
  const tripletEntry = {
    id: 'a',
    name: { hu: 'Anév', en: 'Aname', pl: 'Anazwa' },
    shortDesc: { hu: 'leiras', en: 'desc', pl: 'opis' },
    keyInfo: [{ label: 'Mech', value: { hu: 'huval', en: 'enval', pl: 'plval' } }],
  }
  const en = buildComparison([tripletEntry], cmp, 'en')
  assert.equal(en.members[0].name, 'Aname')
  assert.equal(en.members[0].shortDesc, 'desc')
  assert.equal(en.rows[0].values[0], 'enval')
  // missing lang falls back to hu
  const de = buildComparison([tripletEntry], cmp, 'de')
  assert.equal(de.members[0].name, 'Anév')
  assert.equal(de.rows[0].values[0], 'huval')
})
