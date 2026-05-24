// Performance library — 5 chemistry-based sub-categories per Sub-Task 1 of the
// 2026-05-19 perf-restructure mega-phase. Replaces the previous 6 use-category
// taxonomy (Prohormonok, AAS-info, Stimulánsok, Növekedés és Helyreállítás,
// Bronchodilatátorok, Doppingok). The new taxonomy maps directly to the HTML
// reference at tmp/Szteroid & PED táblázat.html.

// Each subCategory exposes a stable id, accent color (HTML reference), and HU/EN/PL labels.
export const CATEGORIES = [
  {
    id: 'dht',
    accent: '#7F77DD',
    label: { hu: 'DHT-derivátumok',          en: 'DHT derivatives',          pl: 'Pochodne DHT' },
    sub:   { hu: 'Dihydrotestosteron alap',   en: 'Dihydrotestosterone base', pl: 'Baza dihydrotestosteronu' },
  },
  {
    id: 'test',
    accent: '#1D9E75',
    label: { hu: 'Testosteron-derivátumok',   en: 'Testosterone derivatives', pl: 'Pochodne testosteronu' },
    sub:   { hu: '19-carbon androgén alap',   en: '19-carbon androgen base',  pl: 'Baza 19-węglowych androgenów' },
  },
  {
    id: '19nor',
    accent: '#D85A30',
    label: { hu: '19-Nortestosteron',         en: '19-Nortestosterone',       pl: '19-Nortestosteron' },
    sub:   { hu: 'Nandrolon alap',            en: 'Nandrolone base',          pl: 'Baza nandrolonu' },
  },
  {
    id: 'pct',
    accent: '#D4537E',
    label: { hu: 'PCT & Fertilitás',          en: 'PCT & Fertility',          pl: 'PCT i płodność' },
    sub:   { hu: 'Tengelyhelyreállítás',      en: 'Axis recovery',            pl: 'Przywracanie osi' },
  },
  {
    id: 'fat',
    accent: '#BA7517',
    label: { hu: 'Zsírégetés & Stimulánsok',  en: 'Fat loss & Stimulants',    pl: 'Spalanie i stymulanty' },
    sub:   { hu: 'Metabolikus accelerátorok', en: 'Metabolic accelerators',   pl: 'Akceleratory metaboliczne' },
  }
]

// Sub-sections within each subCategory. Used by entry-meta `subSection` field
// to group entries within a category (e.g., DHT/Klasszikus vs DHT/Alap-Test).
// Sub-Task 1 ships these labels but only a subset of entries reference them;
// future sub-tasks (2-6) fill in the gaps as new entries land.
export const SUB_SECTIONS = {
  dht: [
    { id: 'klasszikus', label: { hu: 'Klasszikus DHT',                en: 'Classic DHT',                  pl: 'Klasyczne DHT' } },
    { id: 'alap-test',  label: { hu: 'Alap: Testosteron → DHT',       en: 'Base: Testosterone → DHT',     pl: 'Baza: Testosteron → DHT' } }
  ],
  test: [
    { id: '17a-alkyl',  label: { hu: 'C17α-alkylált (orális)',        en: 'C17α-alkylated (oral)',        pl: 'C17α-alkilowane (doustne)' } },
    { id: 'inj',        label: { hu: 'Injectables',                    en: 'Injectables',                  pl: 'Iniekcyjne' } },
    { id: 'synth',      label: { hu: 'Szintetikus androgének',         en: 'Synthetic androgens',          pl: 'Syntetyczne androgeny' } }
  ],
  '19nor': [
    { id: 'nandro',     label: { hu: 'Nandrolon észterei',             en: 'Nandrolone esters',            pl: 'Estry nandrolonu' } },
    { id: 'tren',       label: { hu: 'Trenbolon',                      en: 'Trenbolone',                   pl: 'Trenbolon' } },
    { id: 'progestin',  label: { hu: 'Progestinek / egyéb 19-nor',     en: 'Progestins / other 19-nor',    pl: 'Progestyny / inne 19-nor' } },
    { id: 'sarms',      label: { hu: 'SARMs',                          en: 'SARMs',                        pl: 'SARM-y' } }
  ],
  pct: [
    { id: 'serm',       label: { hu: 'SERMek',                         en: 'SERMs',                        pl: 'SERM-y' } },
    { id: 'gonad',      label: { hu: 'Gonadotropinok',                 en: 'Gonadotropins',                pl: 'Gonadotropiny' } },
    { id: 'ai',         label: { hu: 'Aromatáz-gátlók (AI)',           en: 'Aromatase inhibitors (AI)',    pl: 'Inhibitory aromatazy (AI)' } },
    { id: 'prolactin',  label: { hu: 'Prolaktin / dopamin',            en: 'Prolactin / dopamine',         pl: 'Prolaktyna / dopamina' } },
    { id: 'axis',       label: { hu: 'Hormonhelyre / tengelymodulálás',en: 'Hormone / axis modulation',    pl: 'Hormony / modulacja osi' } },
    { id: '5ar',        label: { hu: '5α-reduktáz gátlók',             en: '5α-reductase inhibitors',      pl: 'Inhibitory 5α-reduktazy' } }
  ],
  fat: [
    { id: 'beta',       label: { hu: 'Beta-agonisták',                 en: 'Beta-agonists',                pl: 'Beta-agoniści' } },
    { id: 'thyroid',    label: { hu: 'Tireoid hormonok',               en: 'Thyroid hormones',             pl: 'Hormony tarczycy' } },
    { id: 'stim',       label: { hu: 'Stimuláns stack-ek',             en: 'Stimulant stacks',             pl: 'Stosy stymulujące' } },
    { id: 'metabolic',  label: { hu: 'Metabolikus modulátorok',        en: 'Metabolic modulators',         pl: 'Modulatory metaboliczne' } },
    { id: 'mito',       label: { hu: 'Mitokondriális / peptid',        en: 'Mitochondrial / peptide',      pl: 'Mitochondrialne / peptydy' } },
    { id: 'gh-axis',    label: { hu: 'Inzulin / GH-tengely',           en: 'Insulin / GH axis',            pl: 'Oś insuliny / GH' } }
  ],
}

// Map: entry-id → { subCategory, subSection } per Sub-Task 1 rebucket of the 15
// existing entries. Sub-tasks 2-6 will populate this map for the 53 new entries.
// PERFORMANCE_CATEGORIES (use-array map) from the old taxonomy is removed.
export const PERFORMANCE_SUB_CATEGORIES = {
  'testosterone-info': { subCategory: 'dht',   subSection: 'alap-test'  },
  'trenbolone-info':   { subCategory: '19nor', subSection: 'tren'       },
  'anavar-info':       { subCategory: 'dht',   subSection: 'klasszikus' },
  'superdrol':         { subCategory: 'dht',   subSection: 'klasszikus' },
  'yohimbine':         { subCategory: 'fat',   subSection: 'stim'       },
  'clenbuterol':       { subCategory: 'fat',   subSection: 'beta'       },
  'albuterol':         { subCategory: 'fat',   subSection: 'beta'       },
  'winstrol-info':     { subCategory: 'dht',   subSection: 'klasszikus' },
  'nandrolone-info':   { subCategory: '19nor', subSection: 'nandro'     },
  'dianabol-info':     { subCategory: 'test',  subSection: '17a-alkyl'  },
  'methylstenbolone':  { subCategory: 'dht',   subSection: 'klasszikus' },
  'hgh-info':          { subCategory: 'fat',   subSection: 'gh-axis'    },
  'epo-info':          { subCategory: 'fat',   subSection: 'gh-axis'    },
  'dnp-info':          { subCategory: 'fat',   subSection: 'mito'       },
}

export function getPerformanceSubCategory(entryId) {
  return PERFORMANCE_SUB_CATEGORIES[entryId] || null
}

// Back-compat shim — LibraryGallery's filter loop still calls
// library.entryCategoryMap[id] expecting an array of category-ids. Return a
// single-element array containing the subCategory id so the existing AND-logic
// (cats.includes(f)) keeps working without a parallel code path. The legacy
// multi-category mapping is gone; perf-entries belong to exactly one
// subCategory under the new taxonomy.
export const PERFORMANCE_CATEGORIES = Object.fromEntries(
  Object.entries(PERFORMANCE_SUB_CATEGORIES).map(([id, { subCategory }]) => [id, [subCategory]])
)

export function getPerformanceCategories(entryId) {
  return PERFORMANCE_CATEGORIES[entryId] || []
}
