// Adapts a live peptide (src/data/peptides.js shape) to the rich
// MockupDetail-expected shape. Missing fields fall back to null/empty so
// MockupDetail can skip those sections gracefully.

import { CATEGORIES, getPeptideCategories } from '../data/peptideCategories'
import { getResearchLevel, getLevelMeta } from '../data/researchLevel'

// Match keyInfo entries by translated label fragment (HU/EN/PL).
function findFactByLabel(keyInfo, fragments) {
  if (!keyInfo) return null
  return keyInfo.find(info => {
    const label = info.label
    const text = typeof label === 'string'
      ? label
      : `${label?.hu || ''} ${label?.en || ''} ${label?.pl || ''}`
    const lower = text.toLowerCase()
    return fragments.some(f => lower.includes(f))
  })
}

function trAny(value) {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value.hu || value.en || value.pl || ''
}

// Strip a short, plain one-liner from peptide.shortDesc / description.
function extractOneLiner(peptide) {
  // shortDesc is already the canonical short blurb
  return peptide.shortDesc || { hu: '', en: '', pl: '' }
}

// Try to surface a 3–6 step pathway summary from existing description text.
// We don't have structured pathway data; return null and let MockupDetail
// skip that block.
function deriveMechanism(peptide) {
  if (!peptide.description) return null
  return {
    summary: peptide.description,
    pathway: [],   // empty -> MockupDetail will hide the flow widget
  }
}

// Build a category chip list from the peptide's mapped categories.
function deriveResearchUses(peptide) {
  const ids = getPeptideCategories(peptide.id)
  return ids
    .map(id => CATEGORIES.find(c => c.id === id))
    .filter(Boolean)
    .map(cat => ({ id: cat.id, label: cat.label }))
}

// Build a dosing block from dosageInfo + sensible defaults.
function deriveDosing(peptide) {
  if (!peptide.dosageInfo) return null
  return {
    typical: '',                       // not structured in live data
    range: '',
    frequency: null,
    cycle: null,
    notes: peptide.dosageInfo,
    timeline: [],                      // hidden when empty
  }
}

// Reuse studies as-is — same shape in MockupDetail.
function deriveStudies(peptide) {
  return Array.isArray(peptide.studies) ? peptide.studies : []
}

// Read a legal-status hint from keyInfo (Legal status / Status / Klinikai
// adat / Jogi státusz / etc.).
function deriveLegalStatus(peptide, tier) {
  const fact = findFactByLabel(peptide.keyInfo, [
    'jogi', 'státusz', 'status', 'legal', 'engedély', 'klinikai',
  ])
  const fda = tier >= 5
  return {
    fda,
    tag: fda
      ? { hu: 'FDA engedélyezett', en: 'FDA approved', pl: 'Zatwierdzony FDA' }
      : { hu: 'Kutatási vegyület', en: 'Research compound', pl: 'Związek badawczy' },
    detail: fact ? fact.value : (
      fda
        ? { hu: 'Engedélyezett gyógyszer (USA/EU).', en: 'Approved drug (US/EU).', pl: 'Zatwierdzony lek.' }
        : { hu: 'Nem jóváhagyott gyógyszer — kutatási célra.', en: 'Not an approved drug — research use.', pl: 'Niezatwierdzony — badania.' }
    ),
  }
}

export function adaptLivePeptide(peptide) {
  if (!peptide) return null
  const tier = getResearchLevel(peptide)
  const meta = getLevelMeta(tier)
  const categoryIds = getPeptideCategories(peptide.id)
  const primary = categoryIds[0]
  const primaryCat = primary ? CATEGORIES.find(c => c.id === primary) : null

  return {
    id: peptide.id,
    name: peptide.name,
    fullName: peptide.fullName || peptide.name,
    synonyms: peptide.synonyms || [],
    image: peptide.image,
    accentColor: peptide.accentColor,
    tier,
    tierLabel: meta.label,
    category: primaryCat ? primaryCat.label : { hu: '—', en: '—', pl: '—' },
    oneLiner: extractOneLiner(peptide),
    keyFacts: peptide.keyInfo || [],
    mechanism: deriveMechanism(peptide),
    researchUses: deriveResearchUses(peptide),
    dosing: deriveDosing(peptide),
    stacks: [],                // not in live data; MockupDetail skips
    sideEffects: [],
    contraindications: [],
    studies: deriveStudies(peptide),
    faqs: [],
    relatedIds: [],
    legalStatus: deriveLegalStatus(peptide, tier),
  }
}
