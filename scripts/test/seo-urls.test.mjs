import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LIB_SLUGS, entryPath, libraryPath, homePath, parsePath, translatePath, COMPARISONS, COMPARISON_BASE, comparisonBasePath, comparisonPath } from '../../src/seo/urls.js'
import { comparisonsForEntry } from '../../src/seo/urls.js'

test('LIB_SLUGS has all 4 libraries with hu/en/pl words', () => {
  for (const id of ['peptides', 'nootropics', 'performance', 'pharmaceutical']) {
    assert.ok(LIB_SLUGS[id], `missing ${id}`)
    for (const l of ['hu', 'en', 'pl']) assert.equal(typeof LIB_SLUGS[id][l], 'string')
  }
})

test('entryPath builds HU path with no lang prefix', () => {
  assert.equal(entryPath('peptides', 'bpc-157'), '/peptidek/bpc-157')
  assert.equal(entryPath('performance', 'testosterone-info'), '/teljesitmenyfokozok/testosterone-info')
})

test('entryPath appends a variant segment when given', () => {
  assert.equal(entryPath('performance', 'testosterone-info', 'enan'), '/teljesitmenyfokozok/testosterone-info/enan')
})

test('libraryPath + homePath', () => {
  assert.equal(libraryPath('nootropics'), '/nootropikumok')
  assert.equal(homePath(), '/')
})

test('parsePath classifies home / library / entry', () => {
  assert.deepEqual(parsePath('/'), { kind: 'home', lang: 'hu' })
  assert.deepEqual(parsePath('/peptidek'), { kind: 'library', lang: 'hu', library: 'peptides' })
  assert.deepEqual(parsePath('/peptidek/bpc-157'), { kind: 'entry', lang: 'hu', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/teljesitmenyfokozok/testosterone-info/enan'), { kind: 'entry', lang: 'hu', library: 'performance', id: 'testosterone-info', variantId: 'enan' })
})

test('parsePath returns unknown for unrecognised first segment', () => {
  assert.equal(parsePath('/nonsense').kind, 'unknown')
  assert.equal(parsePath('/peptidek/bpc-157/enan/extra').kind, 'unknown')
  // a HU slug under an /en prefix is NOT valid (slug must match the lang)
  assert.equal(parsePath('/en/peptidek/bpc-157').kind, 'unknown')
})

test('parsePath: EN/PL prefixes resolve lang + library + id', () => {
  assert.deepEqual(parsePath('/en/peptides/bpc-157'),
    { kind: 'entry', lang: 'en', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/pl/peptydy/bpc-157'),
    { kind: 'entry', lang: 'pl', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/en/performance'),
    { kind: 'library', lang: 'en', library: 'performance' })
  assert.deepEqual(parsePath('/pl/wspomaganie'),
    { kind: 'library', lang: 'pl', library: 'performance' })
  assert.deepEqual(parsePath('/en'), { kind: 'home', lang: 'en' })
  assert.deepEqual(parsePath('/pl/'), { kind: 'home', lang: 'pl' })
  assert.deepEqual(parsePath('/en/peptides/cjc-1295/blend'),
    { kind: 'entry', lang: 'en', library: 'peptides', id: 'cjc-1295', variantId: 'blend' })
})

test('translatePath: same logical page in another language', () => {
  assert.equal(translatePath({ kind: 'entry', lang: 'hu', library: 'peptides', id: 'bpc-157', variantId: null }, 'en'),
    '/en/peptides/bpc-157')
  assert.equal(translatePath({ kind: 'library', lang: 'en', library: 'performance' }, 'pl'),
    '/pl/wspomaganie')
  assert.equal(translatePath({ kind: 'home', lang: 'en' }, 'hu'), '/')
  assert.equal(translatePath({ kind: 'entry', lang: 'hu', library: 'peptides', id: 'cjc-1295', variantId: 'blend' }, 'pl'),
    '/pl/peptydy/cjc-1295/blend')
  assert.equal(translatePath({ kind: 'unknown' }, 'en'), '/en')
})

test('parsePath ignores a trailing slash', () => {
  assert.deepEqual(parsePath('/peptidek/'), { kind: 'library', lang: 'hu', library: 'peptides' })
})

test('roundtrip: parsePath(entryPath(x)) recovers x', () => {
  const p = entryPath('pharmaceutical', 'tadalafil')
  assert.deepEqual(parsePath(p), { kind: 'entry', lang: 'hu', library: 'pharmaceutical', id: 'tadalafil', variantId: null })
})

test('COMPARISONS registry: 32 curated comparisons with per-member lib, slug string, valid title', () => {
  assert.equal(COMPARISONS.length, 32)
  assert.deepEqual(Object.keys(COMPARISON_BASE), ['hu', 'en', 'pl'])
  for (const c of COMPARISONS) {
    assert.ok(c.slug && Array.isArray(c.members) && c.members.length >= 2, `bad shape: ${c.slug}`)
    for (const m of c.members) {
      assert.ok(m.id && m.lib, `member missing id or lib in ${c.slug}`)
    }
    assert.equal(typeof c.title, 'string')
  }
})

test('comparisonBasePath + comparisonPath per language', () => {
  assert.equal(comparisonBasePath('hu'), '/osszehasonlitas')
  assert.equal(comparisonBasePath('en'), '/en/compare')
  assert.equal(comparisonBasePath('pl'), '/pl/porownanie')
  assert.equal(comparisonPath('bpc-157-vs-tb-500', 'hu'), '/osszehasonlitas/bpc-157-vs-tb-500')
  assert.equal(comparisonPath('bpc-157-vs-tb-500', 'en'), '/en/compare/bpc-157-vs-tb-500')
  assert.equal(comparisonPath('ostarine-vs-rad-140', 'pl'), '/pl/porownanie/ostarine-vs-rad-140')
})

test('parsePath classifies comparison-index + comparison', () => {
  assert.deepEqual(parsePath('/osszehasonlitas'), { kind: 'comparison-index', lang: 'hu' })
  assert.deepEqual(parsePath('/en/compare'), { kind: 'comparison-index', lang: 'en' })
  assert.deepEqual(parsePath('/pl/porownanie/'), { kind: 'comparison-index', lang: 'pl' })
  assert.deepEqual(parsePath('/osszehasonlitas/bpc-157-vs-tb-500'),
    { kind: 'comparison', lang: 'hu', slug: 'bpc-157-vs-tb-500' })
  assert.deepEqual(parsePath('/pl/porownanie/ostarine-vs-rad-140'),
    { kind: 'comparison', lang: 'pl', slug: 'ostarine-vs-rad-140' })
  // unknown slug under the comparison base -> unknown (soft-404)
  assert.equal(parsePath('/osszehasonlitas/not-a-real-pair').kind, 'unknown')
  // a HU base under /en is not the EN base -> unknown
  assert.equal(parsePath('/en/osszehasonlitas').kind, 'unknown')
})

test('translatePath: comparison + comparison-index keep slug, swap prefix', () => {
  assert.equal(translatePath({ kind: 'comparison', lang: 'hu', slug: 'bpc-157-vs-tb-500' }, 'en'),
    '/en/compare/bpc-157-vs-tb-500')
  assert.equal(translatePath({ kind: 'comparison', lang: 'en', slug: 'ostarine-vs-rad-140' }, 'pl'),
    '/pl/porownanie/ostarine-vs-rad-140')
  assert.equal(translatePath({ kind: 'comparison-index', lang: 'en' }, 'pl'), '/pl/porownanie')
  assert.equal(translatePath({ kind: 'comparison-index', lang: 'hu' }, 'hu'), '/osszehasonlitas')
})

test('comparisonsForEntry returns comparisons containing the entry (by lib+id)', () => {
  const r = comparisonsForEntry('performance', 'finasteride')
  const slugs = r.map((c) => c.slug)
  assert.ok(slugs.includes('finasteride-vs-dutasteride'))
  assert.ok(slugs.includes('finasteride-performance-vs-pharmaceutical'))
})

test('comparisonsForEntry is lib-specific (pharma finasteride only matches the cross-lib one)', () => {
  const slugs = comparisonsForEntry('pharmaceutical', 'finasteride').map((c) => c.slug)
  assert.deepEqual(slugs, ['finasteride-performance-vs-pharmaceutical'])
})

test('comparisonsForEntry returns [] for an entry in no comparison', () => {
  assert.deepEqual(comparisonsForEntry('peptides', 'glow'), [])
})
