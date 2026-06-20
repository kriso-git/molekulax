import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildSitemapUrls } from '../gen-sitemap.mjs'

test('buildSitemapUrls includes home, 4 library landings, and every entry (HU paths)', async () => {
  const urls = await buildSitemapUrls()
  assert.ok(urls.includes('https://molekulax.hu/'))
  assert.ok(urls.includes('https://molekulax.hu/peptidek'))
  assert.ok(urls.includes('https://molekulax.hu/nootropikumok'))
  assert.ok(urls.includes('https://molekulax.hu/teljesitmenyfokozok'))
  assert.ok(urls.includes('https://molekulax.hu/gyogyszerek'))
  assert.ok(urls.includes('https://molekulax.hu/peptidek/bpc-157'))
  // ~191 entries + 4 landings + home, no duplicates
  assert.equal(urls.length, new Set(urls).size)
  assert.ok(urls.length > 180, `expected >180 urls, got ${urls.length}`)
})
