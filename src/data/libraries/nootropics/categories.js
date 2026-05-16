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
// Task 6 added the 10 CORE entries; Task 7 extended this map with 34 EXTRA entries.
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

  // EXTRA — Racetams (Task 7)
  'aniracetam':      ['racetams', 'anxiolytics'],
  'oxiracetam':      ['racetams'],
  'pramiracetam':    ['racetams', 'cholinergics'],
  'coluracetam':     ['racetams', 'cholinergics'],
  'fasoracetam':     ['racetams'],
  'nefiracetam':     ['racetams'],
  'sunifiram':       ['racetams'],
  'unifiram':        ['racetams'],
  'nooglutyl':       ['racetams'],

  // EXTRA — Eugeroics (Task 7)
  'armodafinil':     ['eugeroics'],
  'fladrafinil':     ['eugeroics'],
  'flmodafinil':     ['eugeroics'],

  // EXTRA — Cholinergics (Task 7)
  'alpha-gpc':       ['cholinergics'],
  'cdp-choline':     ['cholinergics'],
  'centrophenoxine': ['cholinergics'],
  'huperzine-a':     ['cholinergics'],

  // EXTRA — Dopaminergic (Task 7)
  'selegiline':      ['dopaminergic'],
  'bpap':            ['dopaminergic'],
  'prl-8-53':        ['dopaminergic', 'racetams'],

  // EXTRA — Anxiolytics (Task 7)
  'phenibut':        ['anxiolytics'],
  'tianeptine':      ['anxiolytics'],
  'f-phenibut':      ['anxiolytics'],
  'picamilon':       ['anxiolytics'],

  // EXTRA — Adaptogens (Task 7)
  'bacopa':              ['adaptogens'],
  'ashwagandha':         ['adaptogens'],
  'rhodiola':            ['adaptogens'],
  'lions-mane':          ['adaptogens', 'neuroprotective'],
  'l-theanine':          ['adaptogens', 'anxiolytics'],
  'tongkat-ali':         ['adaptogens'],

  // EXTRA — Neuroprotective (Task 7)
  'cerebrolysin':            ['neuroprotective'],
  'cortexin':                ['neuroprotective'],
  'dihexa':                  ['neuroprotective'],
  'methylene-blue':          ['neuroprotective'],
  'magnesium-l-threonate':   ['neuroprotective'],
}

export function getNootropicCategories(entryId) {
  return NOOTROPIC_CATEGORIES[entryId] || []
}
