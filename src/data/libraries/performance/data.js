// Performance Library data — 10 CORE rich + 7 EXTRA slim = 17 entries total.
//
// Sources strictly peer-reviewed (PubMed, FDA prescribing info, EMA SmPC,
// NIH PubChem, Wikipedia pharmacology with public references).
// Forbidden sources: Scientific Sean, dopamine.club, RUO-aggregators
// (see feedback_forbidden_sources memory).
//
// Em-dash forbidden in user-facing strings (use comma+space or middle dot).
//
// Entries are added incrementally:
//   Task 6 — AAS-info CORE: testosterone-info, trenbolone-info, anavar-info
//   Task 7 — Prohormon CORE: superdrol, 1-andro
//   Task 8 — Stim + Bronch CORE: ephedrine, yohimbine, clenbuterol, albuterol
//   Task 9 — Növekedés CORE + EXTRA: mk-677 + winstrol-info, nandrolone-info,
//            dianabol-info, methylstenbolone, hgh-info, epo-info, dnp-info

export const CORE_PERFORMANCE = [
  // Populated in Task 6-9.
]

export const EXTRA_PERFORMANCE = [
  // Populated in Task 9.
]

export const PERFORMANCE = [...CORE_PERFORMANCE, ...EXTRA_PERFORMANCE]

// Fixed Top 10 order, drives the starred grid in LibraryGallery.
export const TOP10_ORDER = [
  'testosterone-info',
  'trenbolone-info',
  'anavar-info',
  'superdrol',
  '1-andro',
  'ephedrine',
  'yohimbine',
  'clenbuterol',
  'albuterol',
  'mk-677',
]
