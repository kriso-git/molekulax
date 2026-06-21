import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LIB_SLUGS, entryPath, libraryPath, homePath, parsePath, translatePath } from '../../src/seo/urls.js'

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
