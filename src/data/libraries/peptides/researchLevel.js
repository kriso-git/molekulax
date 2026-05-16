// Peptide-specific research-level inferrer.
//
// Inputs we read:
//   - entry.keyInfo[*].value  (status / legal-status / clinical-phase strings)
//   - entry.studies[]          (number of distinct peer-reviewed entries)
//
// Tier semantics (shared with all libraries — visual scale lives in
// libraries/shared/researchLevel.js, only the *inference* differs per library):
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

function collectStatusText(entry) {
  const parts = []
  for (const info of entry.keyInfo || []) {
    const v = info.value
    if (!v) continue
    if (typeof v === 'string') parts.push(v)
    else if (v.hu) parts.push(v.hu, v.en || '', v.pl || '')
  }
  return parts.join(' · ')
}

export function getResearchLevel(entry) {
  if (!entry) return 1
  if (EXPLICIT_LEVEL[entry.id]) return EXPLICIT_LEVEL[entry.id]

  const text = collectStatusText(entry)
  if (RX.approved.test(text))       return 5
  if (RX.phase3.test(text))         return 4
  if (RX.phase2.test(text))         return 3
  if (RX.phase1.test(text))         return 3
  if (RX.preclin.test(text))        return 2

  // Fall back to study count.
  const n = (entry.studies || []).filter(s => s.pmid).length
  if (n >= 4) return 3
  if (n >= 2) return 2
  return 1
}
