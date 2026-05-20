// Performance library — 4 form-factor (route-of-administration) tags per
// Sub-Task 1 of the 2026-05-19 perf-restructure mega-phase. Kept in a separate
// module from categories.js so the taxonomy file stays focused.
//
// Each form-factor exposes a stable id, accent color (HTML reference), and
// HU/EN/PL label. Used by FormFactorChipRow as the multi-select chip list AND
// by entry-meta `formFactors: ['oral']` array field (validator-enforced).

export const FORM_FACTORS = [
  { id: 'oil',     color: '#BA7517', label: { hu: 'olajos',    en: 'oil-based', pl: 'olejowy'   } },
  { id: 'aq',      color: '#0F6E56', label: { hu: 'vizes',     en: 'aqueous',   pl: 'wodny'     } },
  { id: 'oral',    color: '#534889', label: { hu: 'orális',    en: 'oral',      pl: 'doustny'   } },
  { id: 'topical', color: '#72243E', label: { hu: 'topikális', en: 'topical',   pl: 'miejscowy' } },
  { id: 'inhaled', color: '#0E7490', label: { hu: 'inhalált',  en: 'inhaled',   pl: 'inhalator' } },
]

export const FORM_FACTOR_IDS = new Set(FORM_FACTORS.map(f => f.id))

export function isFormFactorId(id) {
  return FORM_FACTOR_IDS.has(id)
}
