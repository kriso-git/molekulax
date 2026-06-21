import { test } from 'node:test'
import assert from 'node:assert/strict'
import { entryJsonLd } from '../seo-jsonld.mjs'

test('entryJsonLd builds a valid MedicalWebPage about a Drug', () => {
  const ld = entryJsonLd({ name: 'BPC-157', desc: 'Gyomor-pentadekapeptid: szöveti regeneráció', url: 'https://molekulax.hu/peptidek/bpc-157', libraryName: 'Peptid Könyvtár' })
  assert.equal(ld['@context'], 'https://schema.org')
  assert.equal(ld['@type'], 'MedicalWebPage')
  assert.equal(ld.inLanguage, 'hu')
  assert.equal(ld.url, 'https://molekulax.hu/peptidek/bpc-157')
  assert.equal(ld.name, 'BPC-157')
  assert.equal(ld.about['@type'], 'Drug')
  assert.equal(ld.about.name, 'BPC-157')
  assert.ok(ld.about.description.includes('regeneráció'))
  assert.equal(ld.isPartOf.name, 'Peptid Könyvtár')
  assert.doesNotThrow(() => JSON.stringify(ld))
})

test('entryJsonLd tolerates missing desc', () => {
  const ld = entryJsonLd({ name: 'X', desc: '', url: 'https://molekulax.hu/peptidek/x', libraryName: 'Peptid Könyvtár' })
  assert.equal(ld.about.description, '')
})

test('entryJsonLd: inLanguage follows the lang argument (defaults to hu)', () => {
  const en = entryJsonLd({ name: 'BPC-157', desc: 'x', url: 'https://molekulax.hu/en/peptides/bpc-157', libraryName: 'Peptides', lang: 'en' })
  assert.equal(en.inLanguage, 'en')
  assert.equal(en.about['@type'], 'Drug')
  const pl = entryJsonLd({ name: 'BPC-157', desc: 'x', url: 'https://molekulax.hu/pl/peptydy/bpc-157', libraryName: 'Peptydy', lang: 'pl' })
  assert.equal(pl.inLanguage, 'pl')
  const hu = entryJsonLd({ name: 'BPC-157', desc: 'x', url: 'https://molekulax.hu/peptidek/bpc-157', libraryName: 'Peptidek' })
  assert.equal(hu.inLanguage, 'hu')
})
