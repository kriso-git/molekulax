import { entryPath } from '../../seo/urls.js'

// Localize a value that may be a plain string OR a {hu,en,pl} triplet.
const loc = (v, lang) => (v == null ? null : typeof v === 'string' ? v : (v[lang] ?? v.hu ?? null))

// Short library label per language, used ONLY to disambiguate same-id cross-lib columns
// (e.g. two "Finasteride" columns -> "Finasteride · teljesítmény" / "· gyógyszer").
const LIB_SHORT = {
  peptides:       { hu: 'peptid',        en: 'peptide',     pl: 'peptyd' },
  nootropics:     { hu: 'nootropikum',   en: 'nootropic',   pl: 'nootropik' },
  performance:    { hu: 'teljesítmény',  en: 'performance', pl: 'wydajność' },
  pharmaceutical: { hu: 'gyógyszer',     en: 'pharma',      pl: 'lek' },
}

/**
 * Derive a render-ready comparison from already-loaded localized entries.
 * Pure + sync-testable: the caller loads each member with its own library.
 *
 * @param {Array<object|null>} memberEntries  loaded localized entries, aligned with comparison.members
 * @param {{members:Array<{id,lib}>, dimensions?:Array, sameId?:boolean}} comparison  registry entry
 * @param {string} lang
 * @returns {{ members: Array<{id,lib,name,shortDesc,href}|null>, rows: Array<{label, values:Array<string|null>}> }}
 */
export function buildComparison(memberEntries, comparison, lang = 'hu') {
  const meta = comparison.members || []
  const members = memberEntries.map((e, i) => {
    if (!e) return null
    const lib = meta[i]?.lib
    const baseName = loc(e.name, lang) ?? e.name
    const name = comparison.sameId ? `${baseName} · ${LIB_SHORT[lib]?.[lang] ?? lib}` : baseName
    return { id: e.id, lib, name, shortDesc: loc(e.shortDesc, lang), href: lib ? entryPath(lib, e.id, null, lang) : null }
  })

  let rows
  if (comparison.dimensions && comparison.dimensions.length) {
    // Curated rows (cross-lib): each dimension has a per-lang display label + a per-lang
    // synonym list of accepted keyInfo labels (handles cross-entry label drift).
    rows = comparison.dimensions.map((dim) => {
      const accepted = dim.match?.[lang] ?? dim.match?.hu ?? []
      return {
        label: dim.display?.[lang] ?? dim.display?.hu ?? '',
        values: memberEntries.map((e) => {
          const ki = (e?.keyInfo || []).find((k) => k && accepted.includes(k.label))
          return ki ? loc(ki.value, lang) : null
        }),
      }
    })
  } else {
    // Union of keyInfo labels, first-seen order (same-lib default, = v1 behavior).
    const order = []
    const seen = new Set()
    for (const e of memberEntries) {
      for (const ki of (e?.keyInfo || [])) {
        if (ki && ki.label && !seen.has(ki.label)) { seen.add(ki.label); order.push(ki.label) }
      }
    }
    rows = order.map((label) => ({
      label,
      values: memberEntries.map((e) => {
        const ki = (e?.keyInfo || []).find((k) => k && k.label === label)
        return ki ? loc(ki.value, lang) : null
      }),
    }))
  }
  return { members, rows }
}
