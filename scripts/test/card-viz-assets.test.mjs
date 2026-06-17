// Integrity gate: every card-motif map entry must have its rendered webm + poster
// assets on disk (and the reverse is implied — orphan files just sit unused).
// Catches the "added a CARD_MOTIFS entry but forgot to render" drift.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, statSync } from 'node:fs'
import { CARD_MOTIFS } from '../../src/components/library/cardMotifMap.js'

test('every CARD_MOTIFS entry has a non-empty webm + poster asset', () => {
  const keys = Object.keys(CARD_MOTIFS)
  assert.ok(keys.length > 0, 'CARD_MOTIFS is empty')
  for (const key of keys) {
    const [lib, id] = key.split(':')
    assert.match(key, /^[a-z-]+:[a-z0-9-]+$/, `malformed map key "${key}"`)
    const webm = `public/card-viz/${lib}/${id}.webm`
    const poster = `public/card-viz/${lib}/${id}.jpg`
    assert.ok(existsSync(webm), `missing webm for ${key} (run: node scripts/render-card-motifs.mjs)`)
    assert.ok(statSync(webm).size > 1000, `webm for ${key} looks empty`)
    assert.ok(existsSync(poster), `missing poster for ${key} (run: node scripts/render-card-motifs.mjs)`)
  }
})
