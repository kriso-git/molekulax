import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildSitemapUrls, buildSitemapGroups } from '../gen-sitemap.mjs'

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

test('sitemap: trilingual groups, 3 langs per page + hreflang alternates incl x-default', async () => {
  const groups = await buildSitemapGroups()
  const flat = groups.flatMap((g) => g.urls.map((u) => u.loc))
  // 196 logical pages × 3 languages, no duplicate locs
  assert.equal(flat.length, groups.length * 3)
  assert.equal(flat.length, new Set(flat).size)
  // every group has exactly the 3 languages + an x-default alternate
  for (const g of groups) {
    assert.deepEqual(g.urls.map((u) => u.lang), ['hu', 'en', 'pl'])
    assert.ok(g.alternates['x-default'] === g.alternates.hu)
    for (const l of ['hu', 'en', 'pl']) assert.ok(g.alternates[l])
  }
  const home = groups.find((g) => g.type === 'home')
  assert.equal(home.alternates.hu, 'https://molekulax.hu/')
  assert.equal(home.alternates.en, 'https://molekulax.hu/en')
  assert.equal(home.alternates.pl, 'https://molekulax.hu/pl')
  // localized slugs are used (performance -> wspomaganie in PL)
  assert.ok(flat.includes('https://molekulax.hu/pl/wspomaganie/testosterone-info'))
  assert.ok(flat.includes('https://molekulax.hu/en/peptides/bpc-157'))
})
