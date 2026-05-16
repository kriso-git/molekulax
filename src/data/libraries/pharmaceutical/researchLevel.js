// Pharmaceutical library research-level inferrer.
// Tier scale (1..5) matches the shared researchLevel.js LEVEL_META.
//   L5: FDA + EMA approved, decades of clinical use (Metformin, Levothyroxin, Atorvastatin, Amoxicillin)
//   L4: FDA + EMA approved, established indication (Semaglutide, Tadalafil, Sertralin, Finasteride, Modafinil)
//   L3: Approved but narrower indication / shorter track record (Bupropion smoking, Empagliflozin, Aripiprazole)
//   L2: Approved but with significant warnings / restricted use (Isotretinoin, Methylphenidate, Methimazole)
//   L1: Newer agent / specialty-only / boxed warning dominant
//
// Per-entry explicit overrides keep the tier deterministic.
// Populated in Task 16-23 (Session 5-6) as entries land.

export const EXPLICIT_LEVEL = {
  metformin:     5,
  semaglutide:   4,
  atorvastatin:  5,
  tadalafil:     4,
  sertralin:     5,
  bupropion:     4,
  modafinil:     4,
  levothyroxin:  5,
  finasteride:   5,
  amoxicillin:   5,
  // EXTRA Anyagcsere
  tirzepatide:     4,
  empagliflozin:   4,
  liraglutide:     5,
  berberin:        2,
  acarbose:        5,
  glimepirid:      5,
  // EXTRA Pszichiátria
  escitalopram:    5,
  fluoxetine:      5,
  venlafaxine:     5,
  mirtazapine:     5,
  aripiprazole:    3,
  lamotrigine:     3,
  methylphenidate: 4,
  // EXTRA Kardio
  rosuvastatin:    4,
  ramipril:        5,
  bisoprolol:      5,
  amlodipine:      5,
  apixaban:        4,
  // EXTRA Endokrin
  methimazole:     5,
  hydrocortisone:  5,
  liothyronine:    5,
  // EXTRA Antiinfekt
  azithromycin:    5,
  ciprofloxacin:   5,
  doxycycline:     5,
  metronidazole:   5,
  // EXTRA Onko
  methotrexate:    3,
  tamoxifen:       3,
  // EXTRA Bőr
  minoxidil:       5,
  isotretinoin:    3,
  tretinoin:       4,
}

/**
 * @param {{ id: string }} entry
 * @returns {number}
 */
export function getResearchLevel(entry) {
  return EXPLICIT_LEVEL[entry.id] ?? 3
}
