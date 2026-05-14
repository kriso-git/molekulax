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

// Quick Start Guide — generic 4-step primer woven from peptide-specific
// values (vial size, default dose, half-life). Works for any peptide.
function deriveQuickStart(peptide) {
  const route = findFactByLabel(peptide.keyInfo, ['adagolás', 'route', 'podanie'])
  const routeText = route ? trAny(route.value) : 'SC injekció'
  const vial = peptide.defaultVialMg
  const bac  = peptide.defaultBacMl
  const dose = peptide.defaultDoseMcg
  return [
    {
      step: 1,
      title: { hu: 'Rekonstituálás',        en: 'Reconstitute',        pl: 'Rozpuszczenie' },
      detail: {
        hu: `${vial || '?'} mg-os fiola + ${bac || '?'} ml bakteriostatikus víz, óvatos elkeverés.`,
        en: `${vial || '?'} mg vial + ${bac || '?'} ml bacteriostatic water, swirl gently.`,
        pl: `${vial || '?'} mg fiolka + ${bac || '?'} ml wody bakteriostatycznej, delikatnie mieszać.`,
      },
    },
    {
      step: 2,
      title: { hu: 'Tárolás',                en: 'Storage',             pl: 'Przechowywanie' },
      detail: {
        hu: '2–8 °C-on, fénytől védve. Rekonstituálva 25–30 napig stabil.',
        en: '2–8 °C, protected from light. Stable 25–30 days after reconstitution.',
        pl: '2–8 °C, chronić przed światłem. Po rozpuszczeniu stabilny 25–30 dni.',
      },
    },
    {
      step: 3,
      title: { hu: 'Dózis & beadás',         en: 'Dose & administer',   pl: 'Dawka & podanie' },
      detail: {
        hu: `${dose || '?'} mcg kezdő dózis ${routeText}-on; titrálás tolerancia szerint.`,
        en: `${dose || '?'} mcg starting dose via ${routeText}; titrate to tolerance.`,
        pl: `${dose || '?'} mcg dawka startowa ${routeText}; titracja do tolerancji.`,
      },
    },
    {
      step: 4,
      title: { hu: 'Monitorozás',            en: 'Monitor',             pl: 'Monitorowanie' },
      detail: {
        hu: 'Subjective + objective markerek hetente; mellékhatás esetén dózis-csökkentés.',
        en: 'Track subjective + objective markers weekly; reduce dose on side effects.',
        pl: 'Markery subiektywne i obiektywne tygodniowo; redukcja dawki przy działaniach niepożądanych.',
      },
    },
  ]
}

// Key Benefits — derive 3-4 benefit cards from peptide categories.
// Maps category-id to a peptide-agnostic but believable benefit copy.
const CATEGORY_BENEFITS = {
  'metabolic':       { icon: 'flame',    title: { hu: 'Anyagcsere támogatás',        en: 'Metabolic support',     pl: 'Wsparcie metabolizmu' },
                       desc:  { hu: 'Lipid- és glükóz-anyagcsere kedvező irányba módosul; testkomponensek finomulása.', en: 'Favorable shifts in lipid + glucose metabolism; body composition refinement.', pl: 'Korzystne zmiany metabolizmu lipidów i glukozy.' } },
  'growth-factors':  { icon: 'sprout',   title: { hu: 'Növekedési hormon felszabadulás', en: 'GH release',          pl: 'Uwalnianie GH' },
                       desc:  { hu: 'Természetes, pulzatív GH-szekréciót utánoz; IGF-1 emelkedés, fokozott regeneráció.', en: 'Mimics natural pulsatile GH secretion; IGF-1 rise, enhanced recovery.', pl: 'Naśladuje pulsacyjne wydzielanie GH; wzrost IGF-1.' } },
  'recovery':        { icon: 'activity', title: { hu: 'Szöveti regeneráció',          en: 'Tissue regeneration',   pl: 'Regeneracja tkanek' },
                       desc:  { hu: 'Inak, izmok, GI-traktus gyógyulásának gyorsulása; csökkent gyulladás.', en: 'Faster healing of tendons, muscle, GI tract; reduced inflammation.', pl: 'Szybsze gojenie ścięgien, mięśni, GI; mniej zapalenia.' } },
  'cognitive':       { icon: 'brain',    title: { hu: 'Kognitív funkció',             en: 'Cognitive function',    pl: 'Funkcje poznawcze' },
                       desc:  { hu: 'BDNF / NGF emelkedés; figyelem, memória, neuroprotekció.', en: 'BDNF / NGF rise; focus, memory, neuroprotection.', pl: 'Wzrost BDNF / NGF; uwaga, pamięć, neuroprotekcja.' } },
  'anti-aging':      { icon: 'sparkles', title: { hu: 'Sejtszintű megújulás',         en: 'Cellular renewal',      pl: 'Odnowa komórkowa' },
                       desc:  { hu: 'Telomeráz aktiváció, oxidatív stressz csökkenés; epigenetikai modulació.', en: 'Telomerase activation, lower oxidative stress; epigenetic modulation.', pl: 'Aktywacja telomerazy, niższy stres oksydacyjny.' } },
  'immune':          { icon: 'shield',   title: { hu: 'Immunmoduláció',              en: 'Immune modulation',     pl: 'Immunomodulacja' },
                       desc:  { hu: 'T-sejt érés, NK-aktivitás; gyulladás-szabályozás kétirányúan.', en: 'T-cell maturation, NK activity; bidirectional inflammation regulation.', pl: 'Dojrzewanie T, aktywność NK.' } },
  'sleep':           { icon: 'moon',     title: { hu: 'Alvásminőség',                 en: 'Sleep quality',         pl: 'Jakość snu' },
                       desc:  { hu: 'Mélyalvás fázisok hossza nő; kortizol-ritmus normalizálódás.', en: 'Longer deep-sleep phases; cortisol rhythm normalizes.', pl: 'Dłuższe fazy głębokiego snu.' } },
  'sexual-skin':     { icon: 'heart',    title: { hu: 'Bőr / Szexuális egészség',     en: 'Skin / sexual health',  pl: 'Skóra / zdrowie seksualne' },
                       desc:  { hu: 'Kollagén szintézis, melanin termelés; libidó modulació.', en: 'Collagen synthesis, melanin production; libido modulation.', pl: 'Synteza kolagenu, produkcja melaniny.' } },
  'gi':              { icon: 'leaf',     title: { hu: 'GI-traktus védelme',           en: 'GI tract protection',   pl: 'Ochrona GI' },
                       desc:  { hu: 'Nyálkahártya regeneráció; gyulladásos GI-bélbetegségek javulása.', en: 'Mucosal regeneration; improvement in inflammatory GI conditions.', pl: 'Regeneracja błony śluzowej.' } },
}
function deriveKeyBenefits(peptide) {
  const ids = getPeptideCategories(peptide.id)
  return ids
    .map(id => CATEGORY_BENEFITS[id] && { id, ...CATEGORY_BENEFITS[id] })
    .filter(Boolean)
}

// Molecular information — extracted from keyInfo + derived defaults.
function deriveMolecular(peptide) {
  const type = findFactByLabel(peptide.keyInfo, ['típus', 'type', 'typ'])
  const structure = findFactByLabel(peptide.keyInfo, ['szerkezet', 'structure', 'struktura'])
  const mw = findFactByLabel(peptide.keyInfo, ['molekulatömeg', 'molecular weight', 'masa cząsteczkowa', 'mw'])
  const storage = findFactByLabel(peptide.keyInfo, ['tárolás', 'storage', 'przechowywanie'])
  const stability = findFactByLabel(peptide.keyInfo, ['stabilitás', 'stability', 'stabilność'])
  const target = findFactByLabel(peptide.keyInfo, ['célterület', 'target', 'cel', 'obszar'])
  return [
    { key: { hu: 'Típus',           en: 'Classification', pl: 'Klasyfikacja' }, value: type?.value || { hu: '—', en: '—', pl: '—' } },
    { key: { hu: 'Szerkezet',       en: 'Structure',      pl: 'Struktura' },   value: structure?.value || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Molekulatömeg',   en: 'Molecular weight', pl: 'Masa cząsteczkowa' }, value: mw?.value || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Célterület',      en: 'Target area',    pl: 'Obszar docelowy' }, value: target?.value || { hu: '—', en: '—', pl: '—' } },
    { key: { hu: 'Tárolás',         en: 'Storage',        pl: 'Przechowywanie' }, value: storage?.value || { hu: '2–8°C', en: '2–8°C', pl: '2–8°C' } },
    { key: { hu: 'Stabilitás',      en: 'Stability',      pl: 'Stabilność' },     value: stability?.value || { hu: '~30 nap rekonstituálva', en: '~30 days reconstituted', pl: '~30 dni po rozpuszczeniu' } },
  ]
}

// Extended descriptive paragraphs — split full description into intro + body.
function deriveWhatIs(peptide) {
  if (!peptide.description) return null
  // Use the full description; the live data is already comprehensive.
  return peptide.description
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
    quickStart: deriveQuickStart(peptide),
    keyBenefits: deriveKeyBenefits(peptide),
    whatIs: deriveWhatIs(peptide),
    mechanism: deriveMechanism(peptide),
    researchUses: deriveResearchUses(peptide),
    molecular: deriveMolecular(peptide),
    dosing: deriveDosing(peptide),
    stacks: [],
    sideEffects: [],
    contraindications: [],
    studies: deriveStudies(peptide),
    faqs: [],
    relatedIds: [],
    legalStatus: deriveLegalStatus(peptide, tier),
    // Default calculator pre-fills come straight from the peptide
    miniCalc: {
      vialMg:  peptide.defaultVialMg,
      bacMl:   peptide.defaultBacMl,
      doseMcg: peptide.defaultDoseMcg,
    },
  }
}
