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
}

/**
 * @param {{ id: string }} entry
 * @returns {number}
 */
export function getResearchLevel(entry) {
  return EXPLICIT_LEVEL[entry.id] ?? 3
}
