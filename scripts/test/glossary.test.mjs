import { test } from 'node:test'
import assert from 'node:assert/strict'
import { glossaryFor, GLOSSARY } from '../../src/data/glossary.js'
import { COMPARISONS } from '../../src/seo/urls.js'

test('glossaryFor matches technical dimension labels per language', () => {
  assert.equal(glossaryFor('Hatásmechanizmus', 'hu')?.key, 'mechanism')
  assert.equal(glossaryFor('Mechanism of action', 'en')?.key, 'mechanism')
  assert.equal(glossaryFor('Felezési idő', 'hu')?.key, 'half-life')
  assert.equal(glossaryFor('ATC kód', 'hu')?.key, 'atc')
})

test('glossaryFor matches a class term embedded in a topic string', () => {
  assert.equal(glossaryFor('Aromatázgátlók (AI)', 'hu')?.key, 'aromatase-inhibitor')
  assert.equal(glossaryFor('Non-szteroidal SARM-ok', 'hu')?.key, 'sarm')
  assert.equal(glossaryFor('SERM-ek (PCT)', 'hu')?.key, 'serm')
  assert.equal(glossaryFor('Afinil-család (eugeroikumok)', 'hu')?.key, 'eugeroic')
  assert.equal(glossaryFor('5α-reduktáz gátlók', 'hu')?.key, '5ar')
})

test('glossaryFor returns null for non-glossary / empty text', () => {
  assert.equal(glossaryFor('Mi ez', 'hu'), null)
  assert.equal(glossaryFor('', 'hu'), null)
  assert.equal(glossaryFor(null, 'hu'), null)
})

test('every glossary entry has term + def in all 3 languages', () => {
  for (const e of GLOSSARY) {
    for (const lang of ['hu', 'en', 'pl']) {
      assert.ok(e.term[lang] && e.term[lang].length, `${e.key} term.${lang}`)
      assert.ok(e.def[lang] && e.def[lang].length > 10, `${e.key} def.${lang}`)
      assert.ok(Array.isArray(e.match[lang]) && e.match[lang].length, `${e.key} match.${lang}`)
    }
  }
})

test('most comparison topics resolve to a glossary class term (coverage check)', () => {
  const withTopic = COMPARISONS.filter((c) => c.topic)
  const hit = withTopic.filter((c) => glossaryFor(c.topic.hu, 'hu'))
  // Framing topics (e.g. "HMG: tengely-restart…", "Finasteride: …keret") intentionally have no
  // single class term; assert the class-named ones resolve (>=70% of topics).
  assert.ok(hit.length / withTopic.length >= 0.7, `only ${hit.length}/${withTopic.length} topics matched`)
})
