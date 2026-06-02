// Hash-parsing helpers extracted from EntryDetailRoute for Fast Refresh (HMR)
// compatibility. A module that mixes non-component exports with a default
// component export breaks Vite's HMR fast-path; keeping pure helpers here
// allows EntryDetailRoute.jsx to be a single-export component module.

import { getLibrary } from '../../data/libraries'

// Phase C: 3-segment hash `#entry/<library>/<id>/<variantId?>` for multi-variant
// entries. `variantId` is optional in the parser — the EntryDetailRoute applies
// auto-redirect rules below (single-variant → ignore segment; multi-variant
// missing/bad segment → replaceState to defaultVariant).
export function parseEntryHash(hash) {
  if (!hash) return null
  const clean = hash.replace(/^#/, '')
  const parts = clean.split('/')
  if (parts[0] !== 'entry' || !parts[1] || !parts[2]) return null
  if (!getLibrary(parts[1])) return null
  return { library: parts[1], id: parts[2], variantId: parts[3] || null }
}

export function isEntryDetailHash(hash) {
  return parseEntryHash(hash) !== null
}
