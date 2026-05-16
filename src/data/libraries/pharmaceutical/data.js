// Pharmaceutical Library entries. Populated in Task 16-23 (Session 5-6).
// Schema matches the Entry typedef in ../shape.js with Phase 6 optional fields
// (atcCode, prescriptionStatus, indications, contraindications, commonSideEffects,
//  cyp450, crossMolInteractions).
//
// Cross-library duplikáció: Semaglutide appears in both peptid + pharma with
// different framing (peptid-fókusz vs Rx-fókusz). Modafinil appears in both
// nootropic + pharma with different framing (cognitive enhancement vs narcolepsy Rx).

export const CORE_PHARMACEUTICAL = []

export const EXTRA_PHARMACEUTICAL = []

export const PHARMACEUTICAL = [...CORE_PHARMACEUTICAL, ...EXTRA_PHARMACEUTICAL]

// Ordered entry IDs for the Top 10 grid. Will grow to 10 by Task 19.
export const TOP10_ORDER = []
