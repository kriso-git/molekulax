// Peptide categories — therapeutic groupings.
// Each peptide can belong to multiple categories. The filter UI lets users
// narrow the "Összes Peptid" list by any combination of these tags.

export const CATEGORIES = [
  {
    id: 'metabolic',
    accent: '#fb923c',
    label: { hu: 'Anyagcsere / Súlykontroll', en: 'Metabolic / Weight', pl: 'Metabolizm / Masa ciała' },
  },
  {
    id: 'growth-factors',
    accent: '#a78bfa',
    label: { hu: 'Növekedési hormon faktorok', en: 'Growth Factors', pl: 'Czynniki wzrostu' },
  },
  {
    id: 'recovery',
    accent: '#34d399',
    label: { hu: 'Regeneráció / Gyógyulás', en: 'Recovery & Repair', pl: 'Regeneracja' },
  },
  {
    id: 'cognitive',
    accent: '#22d3ee',
    label: { hu: 'Kognitív', en: 'Cognitive', pl: 'Kognitywne' },
  },
  {
    id: 'anti-aging',
    accent: '#fde047',
    label: { hu: 'Anti-aging', en: 'Anti-aging', pl: 'Anti-aging' },
  },
  {
    id: 'immune',
    accent: '#5eead4',
    label: { hu: 'Immunrendszer', en: 'Immune Support', pl: 'Wsparcie odporności' },
  },
  {
    id: 'sleep',
    accent: '#93c5fd',
    label: { hu: 'Alvás / Stressz', en: 'Sleep & Relaxation', pl: 'Sen i relaks' },
  },
  {
    id: 'sexual-skin',
    accent: '#f472b6',
    label: { hu: 'Bőr / Szexuális egészség', en: 'Skin / Sexual Health', pl: 'Skóra / Zdrowie seksualne' },
  },
  {
    id: 'gi',
    accent: '#fdba74',
    label: { hu: 'Emésztés / GI', en: 'Gut / GI', pl: 'Trawienie / GI' },
  },
]

// Map peptide ID → list of category IDs (multi-tag).
export const PEPTIDE_CATEGORIES = {
  // ── Core (15) ──────────────────────────────────────────────────────────
  'ghk-cu':              ['anti-aging', 'recovery', 'sexual-skin'],
  'retatrutide':         ['metabolic'],
  'bpc-157':             ['recovery', 'gi'],
  'tb-500':              ['recovery'],
  'cjc-1295':            ['growth-factors'],
  'ipamorelin':          ['growth-factors'],
  'melanotan-2':         ['sexual-skin'],
  'pt-141':              ['sexual-skin'],
  'sermorelin':          ['growth-factors'],
  'epithalon':           ['anti-aging'],
  'tirzepatide':         ['metabolic'],
  'hgh':                 ['growth-factors', 'anti-aging'],
  'cjc-1295-ipamorelin': ['growth-factors'],
  'tesamorelin':         ['growth-factors', 'metabolic'],
  'dihexa':              ['cognitive'],

  // ── Extra (placeholder entries) ───────────────────────────────────────
  'semaglutide':         ['metabolic'],
  'liraglutide':         ['metabolic'],
  'orforglipron':        ['metabolic'],
  'ghrp-2':              ['growth-factors'],
  'ghrp-6':              ['growth-factors'],
  'hexarelin':           ['growth-factors'],
  'mk-677':              ['growth-factors'],
  'mod-grf-1-29':        ['growth-factors'],
  'igf-1-lr3':           ['growth-factors', 'recovery'],
  'mgf':                 ['growth-factors', 'recovery'],
  'semax':               ['cognitive'],
  'selank':              ['cognitive', 'sleep'],
  'cerebrolysin':        ['cognitive'],
  'p21':                 ['cognitive'],
  'fgl':                 ['cognitive'],
  'melanotan-1':         ['sexual-skin'],
  'kpv':                 ['gi', 'immune'],
  'thymosin-alpha-1':    ['immune'],
  'll-37':               ['immune', 'recovery'],
  'larazotide':          ['gi'],
  'pentadeca-arginate':  ['recovery', 'gi'],
  'humanin':             ['anti-aging', 'metabolic'],
  'mots-c':              ['metabolic', 'anti-aging'],
  'pinealon':            ['anti-aging', 'cognitive'],
  'gonadorelin':         ['sexual-skin'],
  'kisspeptin':          ['sexual-skin'],
  'oxytocin':            ['sexual-skin', 'cognitive'],
  'aod-9604':            ['metabolic'],
  '5-amino-1mq':         ['metabolic', 'anti-aging'],
  'nad-plus':            ['anti-aging', 'metabolic'],
  'dsip':                ['sleep'],
  'adipotide':           ['metabolic'],
  'snap-8':              ['sexual-skin'],
  'matrixyl-3000':       ['sexual-skin', 'anti-aging'],
  'ss-31':               ['anti-aging', 'recovery'],
  'cagrilintide':        ['metabolic'],
  'mazdutide':           ['metabolic'],
  'survodutide':         ['metabolic'],
  'pemvidutide':         ['metabolic'],
  'thymulin':            ['immune'],
  'na-semax-amidate':    ['cognitive'],
  'adalank':             ['cognitive', 'sleep'],
  'adamax':              ['cognitive'],
  'klow-protocol':       ['recovery', 'gi'],
  'lipo-c':              ['metabolic'],
}

// Lookup helper — returns array of category IDs for a peptide.
export function getPeptideCategories(id) {
  return PEPTIDE_CATEGORIES[id] || []
}
