import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hashToPath } from '../../src/router/hashRedirect.js'

test('entry hash -> HU entry path', () => {
  assert.equal(hashToPath('#entry/peptides/bpc-157'), '/peptidek/bpc-157')
})

test('entry hash with variant -> path with variant', () => {
  assert.equal(hashToPath('#entry/performance/testosterone-info/enan'), '/teljesitmenyfokozok/testosterone-info/enan')
})

test('#library and empty -> home', () => {
  assert.equal(hashToPath('#library'), '/')
  assert.equal(hashToPath('library'), '/')
})

test('unknown library -> null (no redirect)', () => {
  assert.equal(hashToPath('#entry/nope/x'), null)
})

test('non-entry / unrelated hash -> null', () => {
  assert.equal(hashToPath('#foo'), null)
  assert.equal(hashToPath(''), null)
})
