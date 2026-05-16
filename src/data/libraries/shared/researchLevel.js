// Library-agnostic research-level metadata.
//
// Every library shares the same 5-tier visual scale (Approved → Emerging).
// The *inferrer* that decides which tier an entry sits on is library-specific
// and lives under each library's folder (e.g. libraries/peptides/researchLevel.js).
//
// This module exports the visual descriptors + a sort-comparator factory
// that any library can reuse by passing its own getResearchLevel function.

// Color + i18n label per level. The dot uses `color`; the soft chip bg
// uses `bg`. Both work on dark and light theme without modification.
export const LEVEL_META = {
  5: { color: '#10b981', bg: 'rgba(16,185,129,0.16)',  border: 'rgba(16,185,129,0.45)',
       label: { hu: 'Engedélyezett',       en: 'Approved',          pl: 'Zatwierdzony' } },
  4: { color: '#84cc16', bg: 'rgba(132,204,22,0.16)',  border: 'rgba(132,204,22,0.45)',
       label: { hu: 'Késői fázisú',        en: 'Late-Stage',        pl: 'Faza późna' } },
  3: { color: '#eab308', bg: 'rgba(234,179,8,0.16)',   border: 'rgba(234,179,8,0.45)',
       label: { hu: 'Klinikai kutatás',    en: 'Clinical Research', pl: 'Badania kliniczne' } },
  2: { color: '#f97316', bg: 'rgba(249,115,22,0.16)',  border: 'rgba(249,115,22,0.45)',
       label: { hu: 'Preklinikai',         en: 'Preclinical',       pl: 'Przedkliniczne' } },
  1: { color: '#94a3b8', bg: 'rgba(148,163,184,0.16)', border: 'rgba(148,163,184,0.45)',
       label: { hu: 'Korai kutatás',       en: 'Emerging',          pl: 'Wczesna faza' } },
}

export function getLevelMeta(level) {
  return LEVEL_META[level] || LEVEL_META[1]
}

// Build the 5-tier descriptor list for a library. Each library declares the
// same five tiers; only the inferrer differs.
export const RESEARCH_LEVELS = [5, 4, 3, 2, 1].map(id => ({ id, label: LEVEL_META[id].label }))

// Sort comparator factory. The level-getter is injected so any library can
// reuse the comparator with its own level-inference function.
export function makeSortComparator(getLevel, mode) {
  switch (mode) {
    case 'za':
      return (a, b) => b.name.localeCompare(a.name, undefined, { sensitivity: 'base' })
    case 'level':
      return (a, b) => {
        const la = getLevel(a)
        const lb = getLevel(b)
        if (lb !== la) return lb - la
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      }
    case 'az':
    default:
      return (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  }
}
