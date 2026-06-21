import { test } from 'node:test'
import assert from 'node:assert/strict'
import { entryJsonLd, faqJsonLd, breadcrumbJsonLd } from '../seo-jsonld.mjs'

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

test('faqJsonLd: builds a FAQPage with Question/Answer pairs, strips HTML, skips empties', () => {
  const ld = faqJsonLd([
    { q: 'Mi a MolekulaX?', a: 'Edukatív <strong>platform</strong>.\n  Tudományos.' },
    { q: '', a: 'no question -> dropped' },
    { q: 'only q' },
  ], 'hu')
  assert.equal(ld['@type'], 'FAQPage')
  assert.equal(ld.inLanguage, 'hu')
  assert.equal(ld.mainEntity.length, 1)
  assert.equal(ld.mainEntity[0]['@type'], 'Question')
  assert.equal(ld.mainEntity[0].name, 'Mi a MolekulaX?')
  assert.equal(ld.mainEntity[0].acceptedAnswer['@type'], 'Answer')
  assert.equal(ld.mainEntity[0].acceptedAnswer.text, 'Edukatív platform. Tudományos.') // HTML stripped, whitespace collapsed
  assert.doesNotThrow(() => JSON.stringify(ld))
})

test('faqJsonLd: returns null for empty / all-invalid input', () => {
  assert.equal(faqJsonLd([], 'en'), null)
  assert.equal(faqJsonLd(null), null)
  assert.equal(faqJsonLd([{ q: 'x' }, { a: 'y' }]), null)
})

test('breadcrumbJsonLd: ordered ListItems with positions', () => {
  const bc = breadcrumbJsonLd([
    { name: 'Home', url: 'https://molekulax.hu/en' },
    { name: 'Peptides', url: 'https://molekulax.hu/en/peptides' },
    { name: 'BPC-157', url: 'https://molekulax.hu/en/peptides/bpc-157' },
  ])
  assert.equal(bc['@type'], 'BreadcrumbList')
  assert.equal(bc.itemListElement.length, 3)
  assert.equal(bc.itemListElement[0].position, 1)
  assert.equal(bc.itemListElement[2].position, 3)
  assert.equal(bc.itemListElement[2].name, 'BPC-157')
  assert.equal(bc.itemListElement[1].item, 'https://molekulax.hu/en/peptides')
})

test('entryJsonLd: dateModified included only when provided', () => {
  const withDate = entryJsonLd({ name: 'X', desc: 'd', url: 'https://molekulax.hu/peptidek/x', libraryName: 'L', dateModified: '2026-06-19' })
  assert.equal(withDate.dateModified, '2026-06-19')
  const without = entryJsonLd({ name: 'X', desc: 'd', url: 'https://molekulax.hu/peptidek/x', libraryName: 'L' })
  assert.equal('dateModified' in without, false)
})

test('breadcrumbJsonLd: null for <2 crumbs', () => {
  assert.equal(breadcrumbJsonLd([{ name: 'Home', url: 'https://molekulax.hu/' }]), null)
  assert.equal(breadcrumbJsonLd([]), null)
})
