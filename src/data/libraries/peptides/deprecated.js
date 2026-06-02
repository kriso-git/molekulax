// Post-roadmap 2026-05-20 — Hard-removed peptide entry IDs.
// Deep-links to these slugs render RedirectFlash + redirect to library top
// after 1.8s. EntryDetailRoute checks `library.deprecatedIds.includes(parsed.id)`
// BEFORE attempting loadEntry().
//
// These entries were removed in tag `v0.23-peptide-curation` as a product
// curation decision (slim/low-evidence + not core to library purpose).

export const DEPRECATED_PEPTIDE_IDS = [
  'fgl',
  'larazotide',
  'mgf',
  'mod-grf-1-29',
  'p21',
  'pemvidutide',
  'pentadeca-arginate',
  'thymulin',
  'fsh-rec-peptid',
  'mk-677',
]
