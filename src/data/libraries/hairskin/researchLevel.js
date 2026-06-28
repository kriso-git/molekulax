// Hair & Skin library research-level inferrer.
// Tier scale (1..5) matches the shared researchLevel.js LEVEL_META.
//   L5: FDA + EMA approved, decades of clinical use (Minoxidil, Finasteride)
//   L4: FDA + EMA approved, established indication (Tretinoin, Dutasteride off-label)
//   L3: Approved but narrower / shorter track record
//   L2: Early human trials, not yet approved for this indication (RU58841, Pyrilutamide, Clascoterone AGA)
//   L1: Experimental / Phase 1-2 research compound (PP-405, SM-04554)
//
// Per-entry explicit overrides keep the tier deterministic; default is conservative.

export const EXPLICIT_LEVEL = {
  minoxidil:   5,
  finasteride: 5,
  dutasteride: 4,
  tretinoin:   4,
  tazarotene:  4,
  'azelaic-acid': 4,
  'estriol-cream': 3,
  clascoterone: 4,
  pyrilutamide: 2,
  ru58841: 1,
  topilutamide: 2,
  'pp-405': 1,
  'sm-04554': 1,
}

/**
 * @param {{ id: string }} entry
 * @returns {number}
 */
export function getResearchLevel(entry) {
  return EXPLICIT_LEVEL[entry.id] ?? 2
}
