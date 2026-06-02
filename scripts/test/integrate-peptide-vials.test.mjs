import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bindTargets, classifyVials } from '../integrate-peptide-vials.mjs'

test('bindTargets returns meta + 3 lang body paths', () => {
  const t = bindTargets('tirzepatide')
  assert.equal(t.length, 4)
  assert.ok(t[0].endsWith('index.js'))
  assert.ok(t.some((p) => p.replace(/\\/g, '/').endsWith('entries/hu/tirzepatide.js')))
  assert.ok(t.some((p) => p.replace(/\\/g, '/').endsWith('entries/en/tirzepatide.js')))
  assert.ok(t.some((p) => p.replace(/\\/g, '/').endsWith('entries/pl/tirzepatide.js')))
})

test('classifyVials processes only valid null-image ids', () => {
  const nullIds = new Set(['tirzepatide', 'semax'])
  const r = classifyVials(['tirzepatide', 'foo', 'bpc-157'], nullIds)
  assert.deepEqual(r.process, ['tirzepatide'])
  assert.deepEqual(r.skip.sort(), ['bpc-157', 'foo'])
})

test('classifyVials empty input', () => {
  const r = classifyVials([], new Set(['x']))
  assert.deepEqual(r.process, [])
  assert.deepEqual(r.skip, [])
})
