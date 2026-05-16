// Performance library — 6 categories grouping the entries by role / mechanism.
// Each category exposes a stable id, accent color, and HU/EN/PL label.
// SARMs are intentionally excluded from this library (user decision, Phase 5 Spec §0).

export const CATEGORIES = [
  { id: 'prohormones',     accent: '#a78bfa', label: { hu: 'Prohormonok',                en: 'Prohormones',              pl: 'Prohormony' } },
  { id: 'aas-info',        accent: '#dc2626', label: { hu: 'Anabolikus szteroidok info', en: 'Anabolic steroids (info)', pl: 'Sterydy anaboliczne (info)' } },
  { id: 'stimulants',      accent: '#fbbf24', label: { hu: 'Stimulánsok',                en: 'Stimulants',               pl: 'Stymulanty' } },
  { id: 'growth-recovery', accent: '#10b981', label: { hu: 'Növekedés és Helyreállítás', en: 'Growth & Recovery',        pl: 'Wzrost i Regeneracja' } },
  { id: 'bronchodilators', accent: '#06b6d4', label: { hu: 'Bronchodilatátorok',         en: 'Bronchodilators',          pl: 'Bronchodilatatory' } },
  { id: 'doping',          accent: '#ef4444', label: { hu: 'Doppingok',                  en: 'Doping agents',            pl: 'Środki dopingujące' } },
]

// Map: entry-id → array of category-ids it belongs to.
// Populated incrementally in Task 6-9 as entries land.
export const PERFORMANCE_CATEGORIES = {
  // Task 6 (AAS-info CORE)
  'testosterone-info': ['aas-info'],
  'trenbolone-info':   ['aas-info'],
  'anavar-info':       ['aas-info'],
  // Task 7 (Prohormon CORE)
  'superdrol':         ['prohormones'],
  '1-andro':           ['prohormones'],
  // Task 8 (Stim + Bronch CORE)
  // Task 9 (Növekedés CORE + EXTRA)
}

export function getPerformanceCategories(entryId) {
  return PERFORMANCE_CATEGORIES[entryId] || []
}
