import { entryPath } from '../../seo/urls.js'

// Localize a value that may be a plain string OR a {hu,en,pl} triplet (entry data still ships
// some triplets). Returns null for missing values so the table can render an em-dash gap.
const loc = (v, lang) => (v == null ? null : typeof v === 'string' ? v : (v[lang] ?? v.hu ?? null))

/**
 * Derive a render-ready comparison from already-loaded localized entry objects (kept pure +
 * sync-testable: the caller does the import). The table is the UNION of each member's keyInfo
 * labels in first-seen order, with each member's value or null for a gap (gaps are themselves
 * informative — e.g. one compound having an FDA "Státusz" row the others lack).
 *
 * @param {Array<object|null>} memberEntries  loaded localized entries (null if an import failed)
 * @param {string} lang
 * @param {string|null} lib  shared library id, used to build the full-entry link
 * @returns {{ members: Array<{id,name,shortDesc,href}|null>, rows: Array<{label, values: Array<string|null>}> }}
 */
export function buildComparison(memberEntries, lang = 'hu', lib = null) {
  const members = memberEntries.map((e) =>
    e
      ? { id: e.id, name: e.name, shortDesc: loc(e.shortDesc, lang), href: lib ? entryPath(lib, e.id, null, lang) : null }
      : null)

  // union of keyInfo labels, first-seen order across members
  const order = []
  const seen = new Set()
  for (const e of memberEntries) {
    for (const ki of (e?.keyInfo || [])) {
      if (ki && ki.label && !seen.has(ki.label)) { seen.add(ki.label); order.push(ki.label) }
    }
  }
  const rows = order.map((label) => ({
    label,
    values: memberEntries.map((e) => {
      const ki = (e?.keyInfo || []).find((k) => k && k.label === label)
      return ki ? loc(ki.value, lang) : null
    }),
  }))
  return { members, rows }
}
