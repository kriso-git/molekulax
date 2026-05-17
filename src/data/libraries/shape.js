// Library domain model, JSDoc contracts for the MolekulaX library system.
//
// Phase 3 introduced a generic Library abstraction so new libraries plug
// into the same gallery + EntryDetail components. Phase 4 extends the shape
// with library-coupled effects (Hatásterületek) and nootropic-specific
// entry fields (mechanism, legalStatus, onsetTime, halfLife, interactionsWith,
// wadaStatus).

/**
 * @typedef {Object} I18nString
 * @property {string} hu
 * @property {string} en
 * @property {string} pl
 */

/**
 * @typedef {Object} Category
 * @property {string} id Unique slug within the library.
 * @property {string} accent Hex color for the category chip.
 * @property {I18nString} label
 */

/**
 * @typedef {Object} StudyRef
 * @property {string} title
 * @property {string} authors
 * @property {string} journal
 * @property {string} pmid
 */

/**
 * @typedef {Object} EffectCategory
 * @property {string} color
 * @property {string} glow
 * @property {I18nString} title
 * @property {I18nString} subtitle
 * @property {I18nString} description
 * @property {I18nString} detail
 * @property {StudyRef[]} studies
 * @property {string[]} entryNames Display names.
 * @property {(string|null)[]} entryIds Linked Library Entry IDs (null = unlinked).
 * @property {string|null} image PNG/SVG path (null = component-rendered fallback).
 */

/**
 * @typedef {Object} BloodworkPhase
 * @property {I18nString} label   Phase label (e.g. "Ciklus előtt").
 * @property {I18nString} timing  When to draw labs (e.g. "2-4 héttel ciklus indítás előtt").
 * @property {I18nString} markers Comma-separated bloodwork markers.
 * @property {I18nString} purpose Why this phase matters.
 */

/**
 * @typedef {Object} BloodworkProtocol
 * @property {BloodworkPhase} preCycle
 * @property {BloodworkPhase} midCycle
 * @property {BloodworkPhase} postCycle
 * @property {BloodworkPhase|null} [cruise] Optional, set null for prohormones / growth-only entries.
 */

/**
 * @typedef {Object} Entry
 * @property {string} id Unique slug within the library.
 * @property {string} name Display name (not localized).
 * @property {string|null} image Optional image path; null → fallback art.
 * @property {string} accentColor Hex color used for tile accents.
 * @property {string} tagColor rgba string for chip backgrounds.
 * @property {I18nString} shortDesc
 * @property {I18nString} description
 * @property {Array<{label: I18nString, value: I18nString}>} keyInfo
 * @property {StudyRef[]} [studies]
 * @property {I18nString[]} [benefits]
 * @property {I18nString[]} [quickStart]
 * @property {Array<{label: I18nString, body: I18nString}>} [expectations]
 * @property {Object} [quality]
 * @property {I18nString[]} [interactions]
 * @property {Array<{q: I18nString, a: I18nString}>} [faq]
 * @property {string[]} [related]
 * @property {I18nString} [dosageInfo]
 * @property {number} [defaultVialMg] Peptide-specific reconstitution defaults.
 * @property {number} [defaultBacMl]
 * @property {number} [defaultDoseMcg]
 *
 * Phase 4 nootropic fields (all optional):
 * @property {I18nString} [mechanism] Rövid hatásmechanizmus / mechanism of action.
 * @property {I18nString} [legalStatus] HU/EN/PL string-trió (EU + HU + USA összefoglalva).
 * @property {string} [onsetTime] Render-only string, e.g. "30-60 min".
 * @property {string} [halfLife] Render-only string, e.g. "12-15 h".
 * @property {string[]} [interactionsWith] Chip-list (e.g. ['caffeine','alcohol','SSRI']).
 * @property {'banned'|'monitored'|null} [wadaStatus]
 *
 * Phase 5 performance fields (all optional):
 * @property {string}             [androgenicRatio]  AAS anabolic:androgenic ratio, e.g. "100:100", "320:24".
 * @property {I18nString}         [bindingAffinity]  Receptor affinity short description (mainly AAS context).
 * @property {I18nString}         [detectionWindow]  Sport-doping detection window (urine/blood).
 * @property {string}             [halfLifeActive]   Active metabolite half-life when parent vs metabolite differ.
 * @property {BloodworkProtocol}  [bloodwork]        Structured bloodwork protocol; renders BloodworkProtocol component.
 * @property {DoseCalc}           [doseCalc]         Per-entry dose helper; renders PerformanceCalculator / PharmaceuticalCalculator component.
 *
 * Phase 6 pharmaceutical fields (all optional):
 * @property {string}        [atcCode]              WHO ATC code, e.g. "A10BA02" (Metformin).
 * @property {I18nString}    [prescriptionStatus]   "Vényköteles" / "OTC" / "Pp+" / "kontrollált".
 * @property {I18nString[]}  [indications]          Főbb indikációk listája.
 * @property {I18nString[]}  [contraindications]    Kontraindikációk listája.
 * @property {I18nString[]}  [commonSideEffects]    Gyakori mellékhatások listája.
 * @property {string[]}      [cyp450]               ['CYP3A4 substrate', 'CYP2D6 inhibitor'].
 * @property {I18nString[]}  [crossMolInteractions] Gyógyszer-interakciók i18n szövegei.
 */

/**
 * @typedef {Object} DoseCalc
 * @property {'bodyweight'|'fixed'|'titration'|'warning'|'tshWeight'} type
 * @property {{low: number, medium: number, high: number}} [perKg]   Bodyweight type, per-kg dose values.
 * @property {{low: number, medium: number, high: number}} [fixed]   Fixed type, absolute dose values.
 * @property {Array<{phase: I18nString, dose: number}>} [titration]  Titration type, phase-based ramp table.
 * @property {{kgFactor: number, unitsPerKg: string, defaultWeight?: number, adjustForAgeOver65?: number}} [tshWeight]
 *   Weight-based starting dose (Levothyroxin-style): dose = weight × kgFactor in unitsPerKg.
 * @property {string} [unit]                                          Dose unit, e.g. "mg/hét", "mcg/nap", "IU/hét".
 * @property {I18nString} [warning]                                   Warning type, no-dose message.
 * @property {I18nString} [note]                                      Optional per-entry context note shown below the result.
 */

/**
 * @typedef {(entry: Entry) => number} ResearchLevelInferrer
 */

/**
 * @typedef {Object} ResearchLevelDescriptor
 * @property {number} id Tier number (1..5).
 * @property {I18nString} label
 */

/**
 * @typedef {Object} Library
 * @property {string} id 'peptides' | 'nootropics' | …
 * @property {I18nString} name Display name of the library.
 * @property {I18nString} description NEW Phase 4, gallery subtitle.
 * @property {string} accent Library-level accent color.
 * @property {Entry[]} entries All entries in the library.
 * @property {string[]} topEntries Ordered entry IDs for the Top 10 grid.
 * @property {Category[]} categories Library-specific categories.
 * @property {Object.<string, string[]>} entryCategoryMap Entry id → category id[].
 * @property {ResearchLevelInferrer} getResearchLevel
 * @property {ResearchLevelDescriptor[]} researchLevels
 * @property {EffectCategory[]} effects NEW Phase 4, Hatásterületek tiles.
 * @property {I18nString} effectsTitle NEW Phase 4, section header.
 * @property {I18nString} effectsSubtitle NEW Phase 4, section subtitle.
 * @property {LibraryLabels} [labels] NEW Phase 4, per-library UI string overrides; falls back to i18n.
 */

/**
 * @typedef {Object} LibraryLabels
 * @property {I18nString} topTitle "10 Legnépszerűbb {noun}"
 * @property {I18nString} allTitle "Összes {noun}"
 * @property {I18nString} allCount Singular noun for entry counter ("peptid" / "nootropikum").
 * @property {I18nString} helpBody Library-specific help-callout body inside accordion.
 * @property {I18nString} relatedLabel EntryDetail "Related" section label.
 * @property {I18nString} contactTitle Homepage Telegram CTA section title.
 */

/**
 * Phase 9 — meta-only shape returned by LIBRARY_ENTRY_META. Carries
 * exactly the fields needed to render the gallery tile, the LibraryCube
 * face, the LibrarySwitcher, and category-grouping. Full entry detail
 * (description, keyInfo, dosing, studies, faq, bloodwork, indications,
 * etc.) is loaded on-demand via loadEntry().
 *
 * @typedef {Object} LibraryEntryMeta
 * @property {string} id Unique slug within the library.
 * @property {string} name Display name (not localized).
 * @property {string|null} image Tile image path; null → fallback art.
 * @property {string} accentColor Hex color for tile accent.
 * @property {string} tagColor rgba string for chip background.
 * @property {I18nString} shortDesc Tile body text.
 * @property {number} tier Precomputed research level (1..5).
 * @property {'banned'|'monitored'|null} [wadaStatus] Performance library.
 * @property {I18nString} [prescriptionStatus] Pharmaceutical library.
 * @property {string} [atcCode] Pharmaceutical library.
 */

// This module exports nothing at runtime, types only.
export {}
