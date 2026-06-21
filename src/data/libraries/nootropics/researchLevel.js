// Nootropic library research-level inferrer.
// Tier scale (1..5) matches the shared researchLevel.js LEVEL_META.
//   L5: FDA-approved human use
//   L4: Rx in major region (Russia / EU)
//   L3: Many peer-reviewed human studies / clinical use abroad
//   L2: Early human + strong animal evidence
//   L1: Preclinical / sparse human data
//
// Per-entry explicit overrides keep the tier deterministic, independent of
// any field text. Entries not listed default to L1.

const EXPLICIT_LEVEL = {
  // L5 – FDA-approved
  'modafinil': 5,
  'armodafinil': 5,
  'selegiline': 5,
  'methylene-blue': 5,
  // L4 – Rx in Russia / EU regions
  'phenibut': 4,
  'tianeptine': 4,
  'cerebrolysin': 4,
  'cortexin': 4,
  // L3 – extensive peer-reviewed human studies / clinical use
  'piracetam': 3,
  'aniracetam': 3,
  'oxiracetam': 3,
  'adrafinil': 3,
  'bacopa': 3,
  'rhodiola': 3,
  'ashwagandha': 3,
  'l-theanine': 3,
  'lions-mane': 3,
  'alpha-gpc': 3,
  'cdp-choline': 3,
  'citicoline': 3,
  'huperzine-a': 3,
  'magnesium-l-threonate': 3,
  // L2 – early human + strong animal evidence
  'noopept': 2,
  'semax': 2,
  'selank': 2,
  'phenylpiracetam': 2,
  'nsi-189': 2,
  'bromantane': 2,
  'coluracetam': 2,
  'fasoracetam': 2,
  'pramiracetam': 2,
  'nefiracetam': 2,
  'centrophenoxine': 2,
  'picamilon': 2,
  'tongkat-ali': 2,
  // L1 default
}

/**
 * @param {{ id: string }} entry
 * @returns {number}
 */
export function getResearchLevel(entry) {
  return EXPLICIT_LEVEL[entry.id] ?? 1
}
