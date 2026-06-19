// Performance library — 6 chemistry-based sub-categories. v0.27.3 + v0.27.4:
// PERFORMANCE_SUB_CATEGORIES now covers all 64 entries (was 14), so every tile
// renders its "research uses" tag instead of falling back to "-" dash. SARMs
// promoted from 19nor/sarms sub-section to a top-level 'sarm' subCategory
// since they are non-steroidal AR modulators, not 19-nor derivatives.

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
    id: 'sarm',
    accent: '#9333ea',
    label: { hu: 'SARM-ok',                   en: 'SARMs',                    pl: 'SARM-y' },
    sub:   { hu: 'Szelektív AR modulátorok',  en: 'Selective AR modulators',  pl: 'Selektywne modulatory AR' },
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
  },
]

// Sub-sections within each subCategory.
export const SUB_SECTIONS = {
  dht: [
    { id: 'klasszikus', label: { hu: 'Klasszikus DHT',                en: 'Classic DHT',                  pl: 'Klasyczne DHT' } },
  ],
  test: [
    { id: '17a-alkyl',  label: { hu: 'C17α-alkylált (orális)',        en: 'C17α-alkylated (oral)',        pl: 'C17α-alkilowane (doustne)' } },
    { id: 'inj',        label: { hu: 'Injectables',                    en: 'Injectables',                  pl: 'Iniekcyjne' } },
    { id: 'synth',      label: { hu: 'Szintetikus androgének',         en: 'Synthetic androgens',          pl: 'Syntetyczne androgeny' } },
  ],
  '19nor': [
    { id: 'nandro',     label: { hu: 'Nandrolon észterei',             en: 'Nandrolone esters',            pl: 'Estry nandrolonu' } },
    { id: 'tren',       label: { hu: 'Trenbolon',                      en: 'Trenbolone',                   pl: 'Trenbolon' } },
    { id: 'progestin',  label: { hu: 'Progestinek / egyéb 19-nor',     en: 'Progestins / other 19-nor',    pl: 'Progestyny / inne 19-nor' } },
  ],
  sarm: [
    { id: 'non-steroid', label: { hu: 'Non-szteroidal SARM',           en: 'Non-steroidal SARMs',          pl: 'SARM-y niesteroidowe' } },
    { id: 'steroidal',   label: { hu: 'Szteroid-szerű SARM',           en: 'Steroid-like SARMs',           pl: 'SARM-y sterydopodobne' } },
  ],
  pct: [
    { id: 'serm',       label: { hu: 'SERMek',                         en: 'SERMs',                        pl: 'SERM-y' } },
    { id: 'gonad',      label: { hu: 'Gonadotropinok',                 en: 'Gonadotropins',                pl: 'Gonadotropiny' } },
    { id: 'ai',         label: { hu: 'Aromatáz-gátlók (AI)',           en: 'Aromatase inhibitors (AI)',    pl: 'Inhibitory aromatazy (AI)' } },
    { id: 'prolactin',  label: { hu: 'Prolaktin / dopamin',            en: 'Prolactin / dopamine',         pl: 'Prolaktyna / dopamina' } },
    { id: 'axis',       label: { hu: 'Hormonhelyre / tengelymodulálás',en: 'Hormone / axis modulation',    pl: 'Hormony / modulacja osi' } },
    { id: '5ar',        label: { hu: '5α-reduktáz gátlók',             en: '5α-reductase inhibitors',      pl: 'Inhibitory 5α-reduktazy' } },
  ],
  fat: [
    { id: 'beta',       label: { hu: 'Beta-agonisták',                 en: 'Beta-agonists',                pl: 'Beta-agoniści' } },
    { id: 'thyroid',    label: { hu: 'Tireoid hormonok',               en: 'Thyroid hormones',             pl: 'Hormony tarczycy' } },
    { id: 'stim',       label: { hu: 'Stimuláns stack-ek',             en: 'Stimulant stacks',             pl: 'Stosy stymulujące' } },
    { id: 'metabolic',  label: { hu: 'Metabolikus modulátorok',        en: 'Metabolic modulators',         pl: 'Modulatory metaboliczne' } },
    { id: 'mito',       label: { hu: 'Mitokondriális / peptid',        en: 'Mitochondrial / peptide',      pl: 'Mitochondrialne / peptydy' } },
    { id: 'gh-axis',    label: { hu: 'Inzulin / GH-tengely',           en: 'Insulin / GH axis',            pl: 'Oś insuliny / GH' } },
  ],
}

// Map: entry-id → { subCategory, subSection } — covers all 64 perf entries.
// SARMs (yk-11, s4, s23, ostarine, lgd-4033, rad-140) moved from 19nor/sarms
// to the new top-level 'sarm' subCategory; yk-11 is steroidal, rest non-steroidal.
export const PERFORMANCE_SUB_CATEGORIES = {
  // DHT derivatives
  'anavar-info':       { subCategory: 'dht',   subSection: 'klasszikus' },
  'superdrol':         { subCategory: 'dht',   subSection: 'klasszikus' },
  'winstrol-info':     { subCategory: 'dht',   subSection: 'klasszikus' },
  'methylstenbolone':  { subCategory: 'dht',   subSection: 'klasszikus' },
  'masteron':          { subCategory: 'dht',   subSection: 'klasszikus' },
  'primobolan':        { subCategory: 'dht',   subSection: 'klasszikus' },
  'anadrol':           { subCategory: 'dht',   subSection: 'klasszikus' },
  'proviron':          { subCategory: 'dht',   subSection: 'klasszikus' },
  'dhb':               { subCategory: 'dht',   subSection: 'klasszikus' },

  // Testosterone derivatives
  'testosterone-info': { subCategory: 'test',  subSection: 'inj'        },
  'dianabol-info':     { subCategory: 'test',  subSection: '17a-alkyl'  },
  'halotestin':        { subCategory: 'test',  subSection: '17a-alkyl'  },
  'turinabol':         { subCategory: 'test',  subSection: '17a-alkyl'  },
  'methyltestosterone':{ subCategory: 'test',  subSection: '17a-alkyl'  },
  'equipoise':         { subCategory: 'test',  subSection: 'inj'        },
  'thg':               { subCategory: 'test',  subSection: 'inj'        },
  'ment-test':         { subCategory: 'test',  subSection: 'synth'      },

  // 19-Nor (Nandrolone + Trenbolone + progestins)
  'trenbolone-info':   { subCategory: '19nor', subSection: 'tren'       },
  'nandrolone-info':   { subCategory: '19nor', subSection: 'nandro'     },
  'ment-19nor':        { subCategory: '19nor', subSection: 'progestin'  },
  'gestrinone':        { subCategory: '19nor', subSection: 'progestin'  },

  // SARMs — new top-level subCategory (was 19nor/sarms)
  'rad-140':           { subCategory: 'sarm',  subSection: 'non-steroid' },
  'lgd-4033':          { subCategory: 'sarm',  subSection: 'non-steroid' },
  'ostarine':          { subCategory: 'sarm',  subSection: 'non-steroid' },
  's4':                { subCategory: 'sarm',  subSection: 'non-steroid' },
  's23':               { subCategory: 'sarm',  subSection: 'non-steroid' },
  'yk-11':             { subCategory: 'sarm',  subSection: 'steroidal'   },

  // PCT & Fertility
  'nolvadex':          { subCategory: 'pct',   subSection: 'serm'       },
  'clomid':            { subCategory: 'pct',   subSection: 'serm'       },
  'enclomiphene':      { subCategory: 'pct',   subSection: 'serm'       },
  'raloxifene':        { subCategory: 'pct',   subSection: 'serm'       },
  'hcg-perf':          { subCategory: 'pct',   subSection: 'gonad'      },
  'hmg-perf':          { subCategory: 'pct',   subSection: 'gonad'      },
  'fsh-rec-perf':      { subCategory: 'pct',   subSection: 'gonad'      },
  'anastrozol':        { subCategory: 'pct',   subSection: 'ai'         },
  'letrozol':          { subCategory: 'pct',   subSection: 'ai'         },
  'exemestane':        { subCategory: 'pct',   subSection: 'ai'         },
  'cabergoline':       { subCategory: 'pct',   subSection: 'prolactin'  },
  'bromocriptine':     { subCategory: 'pct',   subSection: 'prolactin'  },
  'pramipexole':       { subCategory: 'pct',   subSection: 'prolactin'  },
  'finasteride':       { subCategory: 'pct',   subSection: '5ar'        },
  'dutasteride':       { subCategory: 'pct',   subSection: '5ar'        },
  'ru58841':           { subCategory: 'pct',   subSection: '5ar'        },
  'kisspeptin-10':     { subCategory: 'pct',   subSection: 'axis'       },
  'gonadorelin':       { subCategory: 'pct',   subSection: 'axis'       },
  'pregnenolone':      { subCategory: 'pct',   subSection: 'axis'       },
  'dhea':              { subCategory: 'pct',   subSection: 'axis'       },

  // Fat loss & Stimulants
  'atx-304':           { subCategory: 'fat',   subSection: 'metabolic'  },
  'sobetirome':        { subCategory: 'fat',   subSection: 'thyroid'    },
  'sana-mvd1':         { subCategory: 'fat',   subSection: 'mito'       },
  'slu-pp-915':        { subCategory: 'fat',   subSection: 'mito'       },
  'yohimbine':         { subCategory: 'fat',   subSection: 'stim'       },
  'eca-stack':         { subCategory: 'fat',   subSection: 'stim'       },
  'super-shred':       { subCategory: 'fat',   subSection: 'metabolic'       },
  'clenbuterol':       { subCategory: 'fat',   subSection: 'beta'       },
  'albuterol':         { subCategory: 'fat',   subSection: 'beta'       },
  'mirabegron':        { subCategory: 'fat',   subSection: 'beta'       },
  'liothyronine':      { subCategory: 'fat',   subSection: 'thyroid'    },
  'levothyroxine':     { subCategory: 'fat',   subSection: 'thyroid'    },
  'l-carnitine':       { subCategory: 'fat',   subSection: 'metabolic'  },
  'gw-501516':         { subCategory: 'fat',   subSection: 'metabolic'  },
  '5-amino-1mq':       { subCategory: 'fat',   subSection: 'metabolic'  },
  'mots-c':            { subCategory: 'fat',   subSection: 'mito'       },
  'slu-pp-332':        { subCategory: 'fat',   subSection: 'mito'       },
  'bam15':             { subCategory: 'fat',   subSection: 'mito'       },
  'dnp-info':          { subCategory: 'fat',   subSection: 'mito'       },
  'hgh-info':          { subCategory: 'fat',   subSection: 'gh-axis'    },
  'epo-info':          { subCategory: 'fat',   subSection: 'gh-axis'    },
}

export function getPerformanceSubCategory(entryId) {
  return PERFORMANCE_SUB_CATEGORIES[entryId] || null
}

// Back-compat shim — LibraryGallery's tile-render + filter loop calls
// library.entryCategoryMap[id] expecting an array of category-ids. Now covers
// all 64 entries so every tile renders its "research uses" tag (was dash-fallback).
export const PERFORMANCE_CATEGORIES = Object.fromEntries(
  Object.entries(PERFORMANCE_SUB_CATEGORIES).map(([id, { subCategory }]) => [id, [subCategory]])
)

export function getPerformanceCategories(entryId) {
  return PERFORMANCE_CATEGORIES[entryId] || []
}
