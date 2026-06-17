// Which effect-category cards have a pre-rendered 3D motif video loop.
// Asset path convention: /card-viz/<libraryId>/<categoryId>.webm (+ .jpg poster)
// Keep in sync with scripts/render-card-motifs.mjs (the render JOBS are DERIVED
// from this map) and the `id:` fields in each library's effects.js.
//
// The motif value is which scene was rendered (scenes live in card-recorder.html);
// presence in this map is what makes CategoryVisual show the video instead of the
// image/SVG. Motif → meaning, picked per category for relevance:
//   neural  synaptic network   · plasma  energy field    · molecule rotating compound
//   dna     double helix        · atom    orbital core    · fiber    muscle fibre bundle
//   shield  protective dome     · vessel  vascular flow
export const CARD_MOTIFS = {
  // nootropics — cognition
  'nootropics:racetams': 'neural',
  'nootropics:modafinil-types': 'plasma',
  'nootropics:dopamine-motivation': 'molecule',
  'nootropics:bdnf-neuroplasticity': 'dna',
  'nootropics:cholinergic-boosters': 'atom',

  // peptides intentionally OMITTED — its "Élettani Hatások" cards already ship
  // real product photos (effects.js `image:`), which we keep instead of a motif.

  // performance — chemistry classes (these are the cards the perf face actually
  // renders, via PerformanceCategoryCards; the effect-grid is disabled here)
  'performance:dht': 'molecule',
  'performance:test': 'fiber',
  'performance:19nor': 'atom',
  'performance:pct': 'neural',
  'performance:fat': 'plasma',

  // pharmaceutical — therapeutic areas
  'pharmaceutical:diabetes': 'molecule',
  'pharmaceutical:cholesterol-heart': 'vessel',
  'pharmaceutical:mood': 'neural',
  'pharmaceutical:wakefulness': 'plasma',
  'pharmaceutical:thyroid': 'atom',
  'pharmaceutical:bacterial': 'shield',
  'pharmaceutical:hormonal-sexual': 'molecule',
  'pharmaceutical:skin-hair': 'dna',
}

export function hasCardMotif(libraryId, categoryId) {
  return !!CARD_MOTIFS[`${libraryId}:${categoryId}`]
}
