// Which effect-category cards have a pre-rendered 3D motif video loop.
// Asset path convention: /card-viz/<libraryId>/<categoryId>.webm
// Keep in sync with scripts/render-card-motifs.mjs (the render JOBS).
//
// The motif value is informational (which scene was rendered); presence in this
// map is what makes CategoryVisual show the video instead of the image/SVG.
export const CARD_MOTIFS = {
  'nootropics:racetams': 'neural',
  'nootropics:modafinil-types': 'plasma',
  'nootropics:dopamine-motivation': 'molecule',
  'nootropics:bdnf-neuroplasticity': 'dna',
  'nootropics:cholinergic-boosters': 'atom',
}

export function hasCardMotif(libraryId, categoryId) {
  return !!CARD_MOTIFS[`${libraryId}:${categoryId}`]
}
