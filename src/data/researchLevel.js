// Research Level — derives a 1-to-5 maturity tier for each peptide.
// Inspired by pep-pedia.org/browse's regulatory-status indicator.
//
// Inputs we read:
//   - peptide.keyInfo[*].value  (status / legal-status / clinical-phase strings)
//   - peptide.studies[]          (number of distinct peer-reviewed entries)
//
// Tier semantics:
//   5  approved        FDA / EMA / major-regulator approved for any indication
//   4  late-stage      Phase 3 ongoing or regulator approval in a non-US market
//   3  clinical        Phase 1/2 RCT data in humans
//   2  preclinical     Animal / in-vitro evidence dominant, no human RCT yet
//   1  emerging        Limited data, single source or pep-pedia summary only

// Explicit overrides — peptides where the regulatory status is unambiguous
// and the heuristic alone might miss it.
const EXPLICIT_LEVEL = {
  // L5 — FDA / major-regulator approved
  'semaglutide':      5,
  'tirzepatide':      5,
  'liraglutide':      5,
  'tesamorelin':      5,
  'sermorelin':       5,
  'hgh':              5,
  'oxytocin':         5,
  'gonadorelin':      5,
  'ss-31':            5,  // FORZINITY (elamipretide) FDA-approved 2025 for Barth syndrome
  'matrixyl-3000':    5,  // cosmetic — broadly approved ingredient

  // L4 — late-stage clinical / phase 3 / approved abroad only
  'retatrutide':      4,
  'cagrilintide':     4,
  'mazdutide':        4,
  'survodutide':      4,
  'pemvidutide':      4,
  'orforglipron':     4,
  'thymosin-alpha-1': 4,  // approved in China/Italy, orphan-drug FDA
  'ghk-cu':           4,  // FDA-cosmetic approved; medical use still clinical
  'cerebrolysin':     4,  // approved in multiple countries (not US)

  // L3 — clinical Phase 1/2 / strong human data
  'bpc-157':          3,  // human pilots + extensive preclinical
  'tb-500':           3,
  'cjc-1295':         3,
  'ipamorelin':       3,
  'melanotan-2':      3,
  'pt-141':           5,  // bremelanotide IS FDA-approved (Vyleesi) — bump to 5
  'epithalon':        3,
  'mk-677':           3,
  'aod-9604':         3,
  'larazotide':       3,
  'cjc-1295-ipamorelin': 3,
  'dihexa':           3,

  // L2 — preclinical / animal-model dominant
  'igf-1-lr3':        2,
  'mgf':              2,
  'humanin':          2,
  'mots-c':           2,
  'kpv':              2,
  'll-37':            2,
  '5-amino-1mq':      2,
  'nad-plus':         2,
  'adipotide':        2,
  'snap-8':           2,
  'pentadeca-arginate': 2,
  'klow-protocol':    2,
  'lipo-c':           2,
  'kisspeptin':       2,
  'ghrp-2':           2,
  'ghrp-6':           2,
  'hexarelin':        2,
  'mod-grf-1-29':     2,
  'semax':            2,
  'selank':           2,
  'p21':              2,
  'fgl':              2,
  'melanotan-1':      2,
  'dsip':             2,
  'pinealon':         2,
  'thymulin':         2,
  'na-semax-amidate': 2,
  'adalank':          2,
  'adamax':           2,
}

// Translatable phrases that signal regulatory status across HU/EN/PL.
const RX = {
  approved: /\b(fda approved|fda-approved|approved|engedélyezett|engedélyezve|jóváhagyott|zatwierdzony|aprobowany)\b/i,
  phase3:   /\b(phase 3|phase iii|fázis 3|f[áa]zis iii|faza 3|faza iii)\b/i,
  phase2:   /\b(phase 2|phase ii|fázis 2|f[áa]zis ii|faza 2|faza ii)\b/i,
  phase1:   /\b(phase 1|phase i|fázis 1|f[áa]zis i|faza 1|faza i)\b/i,
  preclin:  /\b(preclinical|preklinikai|przedkliniczne|animal|állatkísérlet|zwierz[ęe])\b/i,
  emerging: /\b(research compound|kutatási vegyület|związek badawczy|emerging|early)\b/i,
}

function collectStatusText(peptide) {
  const parts = []
  for (const info of peptide.keyInfo || []) {
    const v = info.value
    if (!v) continue
    if (typeof v === 'string') parts.push(v)
    else if (v.hu) parts.push(v.hu, v.en || '', v.pl || '')
  }
  return parts.join(' · ')
}

export function getResearchLevel(peptide) {
  if (!peptide) return 1
  if (EXPLICIT_LEVEL[peptide.id]) return EXPLICIT_LEVEL[peptide.id]

  const text = collectStatusText(peptide)
  if (RX.approved.test(text))       return 5
  if (RX.phase3.test(text))         return 4
  if (RX.phase2.test(text))         return 3
  if (RX.phase1.test(text))         return 3
  if (RX.preclin.test(text))        return 2

  // Fall back to study count.
  const n = (peptide.studies || []).filter(s => s.pmid).length
  if (n >= 4) return 3
  if (n >= 2) return 2
  return 1
}

// Color + i18n label per level. The dot uses `color`; the soft chip bg
// uses `bg`. Both work on dark and light theme without modification.
export const LEVEL_META = {
  5: { color: '#10b981', bg: 'rgba(16,185,129,0.16)',  border: 'rgba(16,185,129,0.45)',
       label: { hu: 'Engedélyezett',       en: 'Approved',          pl: 'Zatwierdzony' } },
  4: { color: '#84cc16', bg: 'rgba(132,204,22,0.16)',  border: 'rgba(132,204,22,0.45)',
       label: { hu: 'Késői fázisú',        en: 'Late-Stage',        pl: 'Faza późna' } },
  3: { color: '#eab308', bg: 'rgba(234,179,8,0.16)',   border: 'rgba(234,179,8,0.45)',
       label: { hu: 'Klinikai kutatás',    en: 'Clinical Research', pl: 'Badania kliniczne' } },
  2: { color: '#f97316', bg: 'rgba(249,115,22,0.16)',  border: 'rgba(249,115,22,0.45)',
       label: { hu: 'Preklinikai',         en: 'Preclinical',       pl: 'Przedkliniczne' } },
  1: { color: '#94a3b8', bg: 'rgba(148,163,184,0.16)', border: 'rgba(148,163,184,0.45)',
       label: { hu: 'Korai kutatás',       en: 'Emerging',          pl: 'Wczesna faza' } },
}

export function getLevelMeta(level) {
  return LEVEL_META[level] || LEVEL_META[1]
}

// Sort comparator factory — pluggable into Array.prototype.sort.
export function makeSortComparator(mode) {
  switch (mode) {
    case 'za':
      return (a, b) => b.name.localeCompare(a.name, undefined, { sensitivity: 'base' })
    case 'level':
      return (a, b) => {
        const la = getResearchLevel(a)
        const lb = getResearchLevel(b)
        if (lb !== la) return lb - la
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      }
    case 'az':
    default:
      return (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  }
}
