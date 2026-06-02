import { test } from 'node:test'
import assert from 'node:assert/strict'
import { classifySmokeResult, isBenignError } from '../smoke-classify.mjs'

const good = { rootChildCount: 3, rootHtmlLength: 130000, errors: [], fallbackPresent: false }

test('all-good route passes with no reasons', () => {
  const r = classifySmokeResult(good)
  assert.equal(r.ok, true)
  assert.deepEqual(r.reasons, [])
})

test('empty #root fails', () => {
  const r = classifySmokeResult({ ...good, rootChildCount: 0, rootHtmlLength: 0 })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /empty #root/.test(x)))
})

test('tiny #root html fails', () => {
  const r = classifySmokeResult({ ...good, rootHtmlLength: 200 })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /too small/.test(x)))
})

test('fallback present fails (caught crash)', () => {
  const r = classifySmokeResult({ ...good, fallbackPresent: true })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /fallback/.test(x)))
})

test('one real console error fails', () => {
  const r = classifySmokeResult({ ...good, errors: ['console.error: ReferenceError: arrowBase is not defined'] })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /console\/page errors/.test(x)))
})

test('benign-only errors still pass', () => {
  const r = classifySmokeResult({ ...good, errors: ['GET /favicon.ico 404 (Not Found)', 'workbox precaching responses'] })
  assert.equal(r.ok, true)
})

test('multiple failures aggregate all reasons', () => {
  const r = classifySmokeResult({ rootChildCount: 0, rootHtmlLength: 0, errors: ['console.error: TypeError: x'], fallbackPresent: true })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.length >= 3)
})

test('threshold boundary: exactly the minimum is a failure (strict <=)', () => {
  const r = classifySmokeResult({ ...good, rootHtmlLength: 1000 })
  assert.equal(r.ok, false)
})

test('isBenignError matches allowlist and rejects real errors', () => {
  assert.equal(isBenignError('GET /favicon.ico 404'), true)
  assert.equal(isBenignError('manifest.webmanifest failed'), true)
  assert.equal(isBenignError('Uncaught ReferenceError: arrowBase is not defined'), false)
})

test('empty input object fails safe', () => {
  const r = classifySmokeResult({})
  assert.equal(r.ok, false)
})
