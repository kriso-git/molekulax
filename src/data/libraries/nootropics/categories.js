// Nootropic library — 7 categories grouping the entries by mechanism / role.
// Each category exposes a stable id, accent color, and HU/EN/PL label.

export const CATEGORIES = [
  { id: 'racetams',         accent: '#a78bfa', label: { hu: 'Racetamok',                                en: 'Racetams',                              pl: 'Racetamy' } },
  { id: 'eugeroics',        accent: '#fbbf24', label: { hu: 'Eugeroikumok',                            en: 'Eugeroics',                             pl: 'Eugeroiki' } },
  { id: 'cholinergics',     accent: '#06b6d4', label: { hu: 'Cholinergikus',                           en: 'Cholinergics',                          pl: 'Cholinergiczne' } },
  { id: 'dopaminergic',     accent: '#f43f5e', label: { hu: 'Dopamin + Motiváció',                     en: 'Dopamine + Motivation',                 pl: 'Dopamina + Motywacja' } },
  { id: 'anxiolytics',      accent: '#10b981', label: { hu: 'Anxiolítikumok + Stim-Recovery',          en: 'Anxiolytics + Stim-Recovery',           pl: 'Anksjolityki + Regeneracja' } },
  { id: 'adaptogens',       accent: '#84cc16', label: { hu: 'Adaptogének + Természetes',               en: 'Adaptogens + Natural',                  pl: 'Adaptogeny + Naturalne' } },
  { id: 'neuroprotective',  accent: '#00ff99', label: { hu: 'Peptid-Nootropikumok + Neuroprotektívek', en: 'Peptide-Nootropics + Neuroprotective',  pl: 'Peptydy-Nootropowe + Neuroprotekcja' } },
]

// Map: entry-id → array of category-ids it belongs to.
// Task 6 added the 10 CORE entries; Task 7 will extend this map for ~35 EXTRA.
export const NOOTROPIC_CATEGORIES = {
  // CORE (Task 6)
  'piracetam':       ['racetams'],
  'modafinil':       ['eugeroics'],
  'noopept':         ['racetams'],
  'phenylpiracetam': ['racetams', 'dopaminergic'],
  'adrafinil':       ['eugeroics'],
  'bromantane':      ['dopaminergic', 'adaptogens'],
  'nsi-189':         ['neuroprotective'],
  'semax':           ['neuroprotective'],
  'selank':          ['anxiolytics', 'neuroprotective'],
  '9-me-bc':         ['dopaminergic'],
}

export function getNootropicCategories(entryId) {
  return NOOTROPIC_CATEGORIES[entryId] || []
}
