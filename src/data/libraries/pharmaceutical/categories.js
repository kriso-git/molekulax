// Pharmaceutical library – 7 categories grouping entries by therapeutic area.
// Each category exposes a stable id, accent color, and HU/EN/PL label.
// Populated in Task 16-23 as entries land (Session 5-6).

export const CATEGORIES = [
  { id: 'metabolic',     accent: '#10b981', label: { hu: 'Anyagcsere',          en: 'Metabolic',           pl: 'Metaboliczne' } },
  { id: 'cardio',        accent: '#dc2626', label: { hu: 'Kardiovaszkuláris',   en: 'Cardiovascular',      pl: 'Sercowo-naczyniowe' } },
  { id: 'psychiatry',    accent: '#a78bfa', label: { hu: 'Pszichiátria',        en: 'Psychiatry',          pl: 'Psychiatria' } },
  { id: 'endocrine',     accent: '#f59e0b', label: { hu: 'Endokrinológia',      en: 'Endocrinology',       pl: 'Endokrynologia' } },
  { id: 'antiinfective', accent: '#06b6d4', label: { hu: 'Fertőzésellenes szerek', en: 'Anti-infectives',  pl: 'Środki przeciwzakaźne' } },
  { id: 'oncology',      accent: '#ec4899', label: { hu: 'Onkológia',           en: 'Oncology',            pl: 'Onkologia' } },
  { id: 'dermatology',   accent: '#fbbf24', label: { hu: 'Bőr és szépség',      en: 'Dermatology',         pl: 'Dermatologia' } },
]

// Map: entry-id → array of category-ids it belongs to.
// Populated incrementally in Task 16-23 (Session 5-6) as entries land.
export const PHARMACEUTICAL_CATEGORIES = {
  metformin:     ['metabolic'],
  atorvastatin:  ['cardio'],
  tadalafil:     ['cardio'],
  bupropion:     ['psychiatry'],
  modafinil:     ['psychiatry'],
  levothyroxin:  ['endocrine'],
  finasteride:   ['dermatology'],
  amoxicillin:   ['antiinfective'],
  // EXTRA Anyagcsere
  empagliflozin:   ['metabolic'],
  // EXTRA Pszichiátria
  escitalopram:    ['psychiatry'],
  fluoxetine:      ['psychiatry'],
  methylphenidate: ['psychiatry'],
  // EXTRA Kardio
  rosuvastatin:    ['cardio'],
  // EXTRA Endokrin
  hydrocortisone:  ['endocrine'],
  liothyronine:    ['endocrine'],
  // EXTRA Antiinfekt
  ciprofloxacin:   ['antiinfective'],
  doxycycline:     ['antiinfective'],
  // EXTRA Onko
  tamoxifen:       ['oncology'],
  // EXTRA Bőr
  minoxidil:       ['dermatology'],
  isotretinoin:    ['dermatology'],
  tretinoin:       ['dermatology'],
}

export function getPharmaceuticalCategories(entryId) {
  return PHARMACEUTICAL_CATEGORIES[entryId] || []
}
