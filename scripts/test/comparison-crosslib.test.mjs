import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COMPARISONS } from '../../src/seo/urls.js'
import { loadEntry } from '../../src/data/libraries/index.js'
import { buildComparison } from '../../src/components/comparison/buildComparison.js'

// Every cross-lib (curated-dimension) comparison must render >=3 non-empty rows in HU/EN/PL.
// This fails if a member id is wrong OR a dimension's per-lang match synonym list misses a
// member's localized keyInfo label (the finasteride PL onset drift was the canary).
const crossLibs = COMPARISONS.filter((c) => c.dimensions && c.dimensions.length)

for (const c of crossLibs) {
  for (const lang of ['hu', 'en', 'pl']) {
    test(`${c.slug} renders all curated rows for both members in ${lang}`, async () => {
      const entries = await Promise.all(c.members.map((m) => loadEntry(m.lib, m.id, lang).catch(() => null)))
      assert.ok(entries.every(Boolean), `a member failed to load: ${c.slug}`)
      const { rows } = buildComparison(entries, c, lang)
      assert.equal(rows.length, c.dimensions.length)
      for (const row of rows) {
        assert.ok(row.values.every((v) => v != null && v !== ''), `gap in row "${row.label}" (${c.slug}/${lang})`)
      }
    })
  }
}
