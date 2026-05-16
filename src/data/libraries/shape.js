// Library domain model — JSDoc contracts for the MolekulaX library system.
//
// Phase 3 introduces a generic Library abstraction so Phase 4-6 can plug
// new libraries (Nootropics, Performance, Pharmaceuticals) into the same
// gallery + EntryDetail components. The peptide library is the first
// concrete Library; new libraries follow the same shape.

/**
 * @typedef {Object} I18nString
 * @property {string} hu
 * @property {string} en
 * @property {string} pl
 */

/**
 * @typedef {Object} Category
 * @property {string} id              Unique slug within the library.
 * @property {string} accent          Hex color for the category chip.
 * @property {I18nString} label
 */

/**
 * @typedef {Object} Entry
 * @property {string} id              Unique slug within the library.
 * @property {string} name            Display name (not localized).
 * @property {string|null} image      Optional image path; null → fallback art.
 * @property {string} accentColor     Hex color used for tile accents.
 * @property {string} tagColor        rgba string for chip backgrounds.
 * @property {I18nString} shortDesc
 * @property {I18nString} description
 * @property {Array<{label: I18nString, value: I18nString}>} keyInfo
 * @property {Array} [studies]
 * @property {I18nString} [dosageInfo]
 * @property {number} [defaultVialMg]  Peptide-specific reconstitution defaults.
 * @property {number} [defaultBacMl]
 * @property {number} [defaultDoseMcg]
 */

/**
 * @typedef {(entry: Entry) => number} ResearchLevelInferrer
 */

/**
 * @typedef {Object} ResearchLevelDescriptor
 * @property {number} id              Tier number (1..5).
 * @property {I18nString} label
 */

/**
 * @typedef {Object} Library
 * @property {string} id                            'peptides' | 'nootropics' | …
 * @property {I18nString} name                      Display name of the library.
 * @property {string} accent                        Library-level accent color.
 * @property {Entry[]} entries                      All entries in the library.
 * @property {string[]} topEntries                  Ordered entry IDs for the Top 10 grid.
 * @property {Category[]} categories                Library-specific categories.
 * @property {Object.<string, string[]>} entryCategoryMap  Entry id → category id[].
 * @property {ResearchLevelInferrer} getResearchLevel
 * @property {ResearchLevelDescriptor[]} researchLevels
 */

// This module exports nothing at runtime — types only.
export {}
