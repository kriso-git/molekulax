// Performance library research-level inferrer.
// Tier scale (1..5) matches the shared researchLevel.js LEVEL_META.
//   L5: FDA-approved human use (Testosterone Rx TRT, Albuterol asthma Rx, Ephedrine bronchodilator-Rx US)
//   L4: EU / region Rx + research-context documented (Clenbuterol EU vet-Rx, Anavar Rx hormone replacement)
//   L3: Clinical trials in progress / off-label documented (MK-677, Methylstenbolone)
//   L2: Early human + strong animal evidence (Superdrol hepatotoxicity documented, 1-Andro pilot)
//   L1: Preclinical / dangerous / "do not use" framing (DNP)
//
// Per-entry explicit overrides keep the tier deterministic. Entries not listed default to L1.

const EXPLICIT_LEVEL = {
  // L5 – FDA-approved human use
  'testosterone-info': 5,
  'albuterol': 5,
  // L4 – EU / region Rx + research-context documented
  'trenbolone-info': 4,
  'anavar-info': 4,
  'clenbuterol': 4,
  'winstrol-info': 4,
  'nandrolone-info': 4,
  'dianabol-info': 4,
  'hgh-info': 4,
  'epo-info': 4,
  // L3 – clinical trials / off-label documented
  'yohimbine': 3,
  'superdrol': 3,
  // L2 – early human + strong animal
  'methylstenbolone': 2,
  // L1 – preclinical / dangerous (default for unlisted entries)
  'dnp-info': 1,
}

/**
 * @param {{ id: string }} entry
 * @returns {number}
 */
export function getResearchLevel(entry) {
  return EXPLICIT_LEVEL[entry.id] ?? 1
}

export { EXPLICIT_LEVEL }
