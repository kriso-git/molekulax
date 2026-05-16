// Pharmaceutical library — 7 categories grouping entries by therapeutic area.
// Each category exposes a stable id, accent color, and HU/EN/PL label.
// Populated in Task 16-23 as entries land (Session 5-6).

export const CATEGORIES = [
  { id: 'metabolic',     accent: '#10b981', label: { hu: 'Anyagcsere',          en: 'Metabolic',           pl: 'Metaboliczne' } },
  { id: 'cardio',        accent: '#dc2626', label: { hu: 'Kardiovaszkuláris',   en: 'Cardiovascular',      pl: 'Sercowo-naczyniowe' } },
  { id: 'psychiatry',    accent: '#a78bfa', label: { hu: 'Pszichiátria',        en: 'Psychiatry',          pl: 'Psychiatria' } },
  { id: 'endocrine',     accent: '#f59e0b', label: { hu: 'Endokrinológia',      en: 'Endocrinology',       pl: 'Endokrynologia' } },
  { id: 'antiinfective', accent: '#06b6d4', label: { hu: 'Antiinfektívumok',    en: 'Anti-infectives',     pl: 'Przeciwinfekcyjne' } },
  { id: 'oncology',      accent: '#ec4899', label: { hu: 'Onkológia',           en: 'Oncology',            pl: 'Onkologia' } },
  { id: 'dermatology',   accent: '#fbbf24', label: { hu: 'Bőr és szépség',      en: 'Dermatology',         pl: 'Dermatologia' } },
]

// Map: entry-id → array of category-ids it belongs to.
// Populated incrementally in Task 16-23 (Session 5-6) as entries land.
export const PHARMACEUTICAL_CATEGORIES = {
  metformin:     ['metabolic'],
  semaglutide:   ['metabolic'],
  atorvastatin:  ['cardio'],
  tadalafil:     ['cardio'],
  sertralin:     ['psychiatry'],
  bupropion:     ['psychiatry'],
  modafinil:     ['psychiatry'],
  levothyroxin:  ['endocrine'],
  finasteride:   ['dermatology'],
  amoxicillin:   ['antiinfective'],
  // EXTRA Anyagcsere
  tirzepatide:     ['metabolic'],
  empagliflozin:   ['metabolic'],
  liraglutide:     ['metabolic'],
  berberin:        ['metabolic'],
  acarbose:        ['metabolic'],
  glimepirid:      ['metabolic'],
  // EXTRA Pszichiátria
  escitalopram:    ['psychiatry'],
  fluoxetine:      ['psychiatry'],
  venlafaxine:     ['psychiatry'],
  mirtazapine:     ['psychiatry'],
  aripiprazole:    ['psychiatry'],
  lamotrigine:     ['psychiatry'],
  methylphenidate: ['psychiatry'],
}

export function getPharmaceuticalCategories(entryId) {
  return PHARMACEUTICAL_CATEGORIES[entryId] || []
}
