// Pure URL <-> {library,id,variant} translation for SEO path routing.
// Phase 1 = HU only (no language prefix; HU lives at the site root). The
// hu/en/pl slug words are all defined here so Phase 3 can add /en + /pl
// prefixes without touching callers – but parsePath() below only recognises
// HU paths in Phase 1; /en and /pl resolve to { kind: 'unknown' } until Phase 3.

export const LIB_SLUGS = {
  peptides:       { hu: 'peptidek',            en: 'peptides',        pl: 'peptydy' },
  nootropics:     { hu: 'nootropikumok',       en: 'nootropics',      pl: 'nootropiki' },
  performance:    { hu: 'teljesitmenyfokozok', en: 'performance',     pl: 'wspomaganie' },
  pharmaceutical: { hu: 'gyogyszerek',         en: 'pharmaceuticals', pl: 'leki' },
  hairskin:       { hu: 'haj-es-bor',          en: 'hair-skin',       pl: 'wlosy-skora' },
}

// HU at root; EN/PL prefixed (Phase 3 wires these into parsePath).
const LANG_PREFIX = { hu: '', en: '/en', pl: '/pl' }

// Reverse map per language: localized slug word -> library id.
const SLUG_TO_LIB = {}
for (const [libId, words] of Object.entries(LIB_SLUGS)) {
  for (const [lang, word] of Object.entries(words)) {
    SLUG_TO_LIB[lang] = SLUG_TO_LIB[lang] || {}
    SLUG_TO_LIB[lang][word] = libId
  }
}

// Static content pages (methodology, later privacy/compare): a page key -> localized slug
// per language. Add a page here + a component branch in App + a buildRoutes entry to ship a
// new prerendered static route.
export const STATIC_PAGES = {
  methodology: { hu: 'modszertan', en: 'methodology', pl: 'metodologia' },
  privacy:     { hu: 'adatvedelem', en: 'privacy', pl: 'prywatnosc' },
}
const SLUG_TO_PAGE = {}
for (const [key, words] of Object.entries(STATIC_PAGES)) {
  for (const [lang, word] of Object.entries(words)) {
    SLUG_TO_PAGE[lang] = SLUG_TO_PAGE[lang] || {}
    SLUG_TO_PAGE[lang][word] = key
  }
}

// Comparison section: a reserved base word per language + a curated list of compound
// comparisons. The detail slug is the member ids joined by '-vs-' (language-invariant, like
// entry ids). All members of a comparison share one library (data shapes align). Add a
// comparison here + it is auto-enumerated by parsePath, prerender, and the sitemap.
export const COMPARISON_BASE = { hu: 'osszehasonlitas', en: 'compare', pl: 'porownanie' }
// `title` is the human-readable display name (compound names are language-invariant), used by
// the index cards + detail H1 without loading entry data.
export const COMPARISONS = [
  { slug: 'ostarine-vs-rad-140', members: [{ id: 'ostarine', lib: 'performance' }, { id: 'rad-140', lib: 'performance' }], title: 'Ostarine vs RAD-140' },
  { slug: 'semaglutide-vs-tirzepatide-vs-retatrutide', members: [{ id: 'semaglutide', lib: 'peptides' }, { id: 'tirzepatide', lib: 'peptides' }, { id: 'retatrutide', lib: 'peptides' }], title: 'Semaglutide vs Tirzepatide vs Retatrutide' },
  { slug: 'bpc-157-vs-tb-500', members: [{ id: 'bpc-157', lib: 'peptides' }, { id: 'tb-500', lib: 'peptides' }], title: 'BPC-157 vs TB-500' },
  // --- Comparison v2: performance (within-lib) ---
  { slug: 'anastrozol-vs-letrozol-vs-exemestane', members: [{ id: 'anastrozol', lib: 'performance' }, { id: 'letrozol', lib: 'performance' }, { id: 'exemestane', lib: 'performance' }], title: 'Anastrozol vs Letrozol vs Exemestane', topic: { hu: 'Aromatázgátlók (AI)', en: 'Aromatase inhibitors (AI)', pl: 'Inhibitory aromatazy (AI)' } },
  { slug: 'nolvadex-vs-clomid-vs-enclomiphene', members: [{ id: 'nolvadex', lib: 'performance' }, { id: 'clomid', lib: 'performance' }, { id: 'enclomiphene', lib: 'performance' }], title: 'Nolvadex vs Clomid vs Enclomiphene', topic: { hu: 'SERM-ek (PCT)', en: 'SERMs (PCT)', pl: 'SERM-y (PCT)' } },
  { slug: 'finasteride-vs-dutasteride', members: [{ id: 'finasteride', lib: 'performance' }, { id: 'dutasteride', lib: 'performance' }], title: 'Finasteride vs Dutasteride', topic: { hu: '5α-reduktáz gátlók', en: '5α-reductase inhibitors', pl: 'Inhibitory 5α-reduktazy' } },
  { slug: 'liothyronine-vs-levothyroxine', members: [{ id: 'liothyronine', lib: 'performance' }, { id: 'levothyroxine', lib: 'performance' }], title: 'Liothyronine vs Levothyroxine', topic: { hu: 'Pajzsmirigyhormonok (T3/T4)', en: 'Thyroid hormones (T3/T4)', pl: 'Hormony tarczycy (T3/T4)' } },
  { slug: 'clenbuterol-vs-albuterol', members: [{ id: 'clenbuterol', lib: 'performance' }, { id: 'albuterol', lib: 'performance' }], title: 'Clenbuterol vs Albuterol', topic: { hu: 'β2-agonisták', en: 'β2-agonists', pl: 'β2-agoniści' } },
  { slug: 'cabergoline-vs-bromocriptine-vs-pramipexole', members: [{ id: 'cabergoline', lib: 'performance' }, { id: 'bromocriptine', lib: 'performance' }, { id: 'pramipexole', lib: 'performance' }], title: 'Cabergoline vs Bromocriptine vs Pramipexole', topic: { hu: 'Dopamin-agonisták (prolaktin-kontroll)', en: 'Dopamine agonists (prolactin control)', pl: 'Agoniści dopaminy (kontrola prolaktyny)' } },
  { slug: 'lgd-4033-vs-s23-vs-s4', members: [{ id: 'lgd-4033', lib: 'performance' }, { id: 's23', lib: 'performance' }, { id: 's4', lib: 'performance' }], title: 'LGD-4033 vs S23 vs S4', topic: { hu: 'Non-szteroidal SARM-ok', en: 'Non-steroidal SARMs', pl: 'Niesteroidowe SARM-y' } },
  { slug: 'hcg-perf-vs-hmg-perf-vs-fsh-rec-perf', members: [{ id: 'hcg-perf', lib: 'performance' }, { id: 'hmg-perf', lib: 'performance' }, { id: 'fsh-rec-perf', lib: 'performance' }], title: 'HCG vs HMG vs FSH-rec', topic: { hu: 'Gonadotropinok (tengely-újraindítás)', en: 'Gonadotropins (axis restart)', pl: 'Gonadotropiny (restart osi)' } },
  { slug: 'slu-pp-332-vs-slu-pp-915', members: [{ id: 'slu-pp-332', lib: 'performance' }, { id: 'slu-pp-915', lib: 'performance' }], title: 'SLU-PP-332 vs SLU-PP-915', topic: { hu: 'ERR-agonista exercise-mimetikumok', en: 'ERR-agonist exercise mimetics', pl: 'Mimetyki wysiłku (agoniści ERR)' } },
  { slug: 'pregnenolone-vs-dhea', members: [{ id: 'pregnenolone', lib: 'performance' }, { id: 'dhea', lib: 'performance' }], title: 'Pregnenolone vs DHEA', topic: { hu: 'Endogén szteroid-prekurzorok', en: 'Endogenous steroid precursors', pl: 'Endogenne prekursory steroidowe' } },
  // --- peptides (within-lib) ---
  { slug: 'sermorelin-vs-cjc-1295-vs-tesamorelin', members: [{ id: 'sermorelin', lib: 'peptides' }, { id: 'cjc-1295', lib: 'peptides' }, { id: 'tesamorelin', lib: 'peptides' }], title: 'Sermorelin vs CJC-1295 vs Tesamorelin', topic: { hu: 'GHRH-analógok', en: 'GHRH analogues', pl: 'Analogi GHRH' } },
  { slug: 'ghrp-2-vs-ghrp-6-vs-hexarelin', members: [{ id: 'ghrp-2', lib: 'peptides' }, { id: 'ghrp-6', lib: 'peptides' }, { id: 'hexarelin', lib: 'peptides' }], title: 'GHRP-2 vs GHRP-6 vs Hexarelin', topic: { hu: 'GHRP szekretagógok', en: 'GHRP secretagogues', pl: 'Sekretagogi GHRP' } },
  { slug: 'mazdutide-vs-survodutide', members: [{ id: 'mazdutide', lib: 'peptides' }, { id: 'survodutide', lib: 'peptides' }], title: 'Mazdutide vs Survodutide', topic: { hu: 'GLP-1/glukagon kettős agonisták', en: 'GLP-1/glucagon dual agonists', pl: 'Podwójni agoniści GLP-1/glukagon' } },
  { slug: 'melanotan-1-vs-melanotan-2', members: [{ id: 'melanotan-1', lib: 'peptides' }, { id: 'melanotan-2', lib: 'peptides' }], title: 'Melanotan-1 vs Melanotan-2', topic: { hu: 'α-MSH analógok', en: 'α-MSH analogues', pl: 'Analogi α-MSH' } },
  { slug: 'selank-vs-adalank', members: [{ id: 'selank', lib: 'peptides' }, { id: 'adalank', lib: 'peptides' }], title: 'Selank vs Adalank', topic: { hu: 'Tuftsin-analóg nootropok', en: 'Tuftsin-analogue nootropics', pl: 'Nootropiki analogi tuftsyny' } },
  { slug: 'semax-vs-na-semax-amidate-vs-adamax', members: [{ id: 'semax', lib: 'peptides' }, { id: 'na-semax-amidate', lib: 'peptides' }, { id: 'adamax', lib: 'peptides' }], title: 'Semax vs NA-Semax-Amidate vs Adamax', topic: { hu: 'Semax (ACTH 4-10) származékok', en: 'Semax (ACTH 4-10) derivatives', pl: 'Pochodne Semaxu (ACTH 4-10)' } },
  { slug: 'gonadorelin-vs-kisspeptin', members: [{ id: 'gonadorelin', lib: 'peptides' }, { id: 'kisspeptin', lib: 'peptides' }], title: 'Gonadorelin vs Kisspeptin', topic: { hu: 'GnRH-tengely aktivátorok', en: 'GnRH-axis activators', pl: 'Aktywatory osi GnRH' } },
  { slug: 'melanotan-2-vs-pt-141', members: [{ id: 'melanotan-2', lib: 'peptides' }, { id: 'pt-141', lib: 'peptides' }], title: 'Melanotan-2 vs PT-141', topic: { hu: 'Melanokortinreceptor-agonisták', en: 'Melanocortin receptor agonists', pl: 'Agoniści receptora melanokortyny' } },
  // --- nootropics (within-lib) ---
  { slug: 'modafinil-vs-armodafinil-vs-flmodafinil', members: [{ id: 'modafinil', lib: 'nootropics' }, { id: 'armodafinil', lib: 'nootropics' }, { id: 'flmodafinil', lib: 'nootropics' }], title: 'Modafinil vs Armodafinil vs Flmodafinil', topic: { hu: 'Afinil-család (eugeroikumok)', en: 'Afinil family (eugeroics)', pl: 'Rodzina afinili (eugeroiki)' } },
  { slug: 'sunifiram-vs-unifiram', members: [{ id: 'sunifiram', lib: 'nootropics' }, { id: 'unifiram', lib: 'nootropics' }], title: 'Sunifiram vs Unifiram', topic: { hu: 'Ampakinok (AMPA-PAM)', en: 'Ampakines (AMPA-PAM)', pl: 'Ampakiny (AMPA-PAM)' } },
  { slug: 'alpha-gpc-vs-cdp-choline', members: [{ id: 'alpha-gpc', lib: 'nootropics' }, { id: 'cdp-choline', lib: 'nootropics' }], title: 'Alpha-GPC vs CDP-Choline', topic: { hu: 'Kolin-prekurzorok', en: 'Choline precursors', pl: 'Prekursory choliny' } },
  { slug: 'phenibut-vs-f-phenibut', members: [{ id: 'phenibut', lib: 'nootropics' }, { id: 'f-phenibut', lib: 'nootropics' }], title: 'Phenibut vs F-Phenibut', topic: { hu: 'GABA-B agonisták (Phenibut-család)', en: 'GABA-B agonists (Phenibut family)', pl: 'Agoniści GABA-B (rodzina fenibutu)' } },
  { slug: 'adrafinil-vs-fladrafinil', members: [{ id: 'adrafinil', lib: 'nootropics' }, { id: 'fladrafinil', lib: 'nootropics' }], title: 'Adrafinil vs Fladrafinil', topic: { hu: 'Modafinil-prodrug eugeroikumok', en: 'Modafinil-prodrug eugeroics', pl: 'Eugeroiki proleki modafinilu' } },
  { slug: 'semax-vs-selank', members: [{ id: 'semax', lib: 'nootropics' }, { id: 'selank', lib: 'nootropics' }], title: 'Semax vs Selank', topic: { hu: 'Orosz intranazális neuropeptidek', en: 'Russian intranasal neuropeptides', pl: 'Rosyjskie neuropeptydy donosowe' } },
  { slug: 'pramiracetam-vs-coluracetam', members: [{ id: 'pramiracetam', lib: 'nootropics' }, { id: 'coluracetam', lib: 'nootropics' }], title: 'Pramiracetam vs Coluracetam', topic: { hu: 'HACU-fokozó racetamok', en: 'HACU-enhancing racetams', pl: 'Racetamy nasilające HACU' } },
  { slug: 'cerebrolysin-vs-cortexin', members: [{ id: 'cerebrolysin', lib: 'nootropics' }, { id: 'cortexin', lib: 'nootropics' }], title: 'Cerebrolysin vs Cortexin', topic: { hu: 'Injektálható agyi peptid-hidrolizátumok', en: 'Injectable brain peptide hydrolysates', pl: 'Iniekcyjne hydrolizaty peptydów mózgowych' } },
  { slug: 'ashwagandha-vs-rhodiola-vs-bacopa', members: [{ id: 'ashwagandha', lib: 'nootropics' }, { id: 'rhodiola', lib: 'nootropics' }, { id: 'bacopa', lib: 'nootropics' }], title: 'Ashwagandha vs Rhodiola vs Bacopa', topic: { hu: 'Adaptogének (stressz/kogníció)', en: 'Adaptogens (stress/cognition)', pl: 'Adaptogeny (stres/funkcje poznawcze)' } },
  // --- cross-library (curated dimensions) ---
  { slug: 'hmg-perf-vs-hmg-peptid', crossLib: true, members: [{ id: 'hmg-perf', lib: 'performance' }, { id: 'hmg-peptid', lib: 'peptides' }], title: 'HMG (performance) vs HMG (peptides)', topic: { hu: 'HMG: tengely-restart és fertilitás-keret', en: 'HMG: axis restart vs fertility framing', pl: 'HMG: restart osi vs kontekst płodności' }, dimensions: [
    { display: { hu: 'Hatásmechanizmus', en: 'Mechanism of action', pl: 'Mechanizm działania' }, match: { hu: ['Hatásmechanizmus'], en: ['Mechanism'], pl: ['Mechanizm'] } },
    { display: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, match: { hu: ['Felezési idő'], en: ['Half-life'], pl: ['Okres półtrwania'] } },
    { display: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, match: { hu: ['Jogi státusz'], en: ['Legal status'], pl: ['Status prawny'] } },
  ] },
  { slug: 'finasteride-performance-vs-pharmaceutical', crossLib: true, sameId: true, members: [{ id: 'finasteride', lib: 'performance' }, { id: 'finasteride', lib: 'pharmaceutical' }], title: 'Finasteride (performance) vs Finasteride (pharma)', topic: { hu: 'Finasteride: teljesítmény-keret és gyógyszer-keret', en: 'Finasteride: performance vs medical framing', pl: 'Finasteryd: kontekst wydajnościowy vs leczniczy' }, dimensions: [
    { display: { hu: 'Hatásmechanizmus', en: 'Mechanism of action', pl: 'Mechanizm działania' }, match: { hu: ['Hatásmechanizmus'], en: ['Mechanism'], pl: ['Mechanizm'] } },
    { display: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, match: { hu: ['Felezési idő'], en: ['Half-life'], pl: ['Okres półtrwania'] } },
    { display: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek działania' }, match: { hu: ['Hatáskezdet'], en: ['Onset'], pl: ['Początek działania', 'Początek'] } },
  ] },
  // --- pharmaceutical same-library (Comparison v2 keyInfo backfill) ---
  { slug: 'atorvastatin-vs-rosuvastatin', members: [{ id: 'atorvastatin', lib: 'pharmaceutical' }, { id: 'rosuvastatin', lib: 'pharmaceutical' }], title: 'Atorvastatin vs Rosuvastatin', topic: { hu: 'Statinok', en: 'Statins', pl: 'Statyny' } },
  { slug: 'escitalopram-vs-fluoxetine', members: [{ id: 'escitalopram', lib: 'pharmaceutical' }, { id: 'fluoxetine', lib: 'pharmaceutical' }], title: 'Escitalopram vs Fluoxetine', topic: { hu: 'SSRI antidepresszánsok', en: 'SSRI antidepressants', pl: 'Antydepresanty SSRI' } },
  { slug: 'isotretinoin-vs-tretinoin', members: [{ id: 'isotretinoin', lib: 'pharmaceutical' }, { id: 'tretinoin', lib: 'pharmaceutical' }], title: 'Isotretinoin vs Tretinoin', topic: { hu: 'Retinoidok', en: 'Retinoids', pl: 'Retinoidy' } },
  { slug: 'amoxicillin-vs-ciprofloxacin-vs-doxycycline', members: [{ id: 'amoxicillin', lib: 'pharmaceutical' }, { id: 'ciprofloxacin', lib: 'pharmaceutical' }, { id: 'doxycycline', lib: 'pharmaceutical' }], title: 'Amoxicillin vs Ciprofloxacin vs Doxycycline', topic: { hu: 'Antibiotikumok', en: 'Antibiotics', pl: 'Antybiotyki' } },
  { slug: 'metformin-vs-empagliflozin', members: [{ id: 'metformin', lib: 'pharmaceutical' }, { id: 'empagliflozin', lib: 'pharmaceutical' }], title: 'Metformin vs Empagliflozin', topic: { hu: 'Antidiabetikumok', en: 'Antidiabetics', pl: 'Leki przeciwcukrzycowe' } },
  { slug: 'modafinil-vs-methylphenidate', members: [{ id: 'modafinil', lib: 'pharmaceutical' }, { id: 'methylphenidate', lib: 'pharmaceutical' }], title: 'Modafinil vs Methylphenidate', topic: { hu: 'Éberség-fokozók', en: 'Wakefulness agents', pl: 'Środki na czujność' } },
  { slug: 'finasteride-vs-minoxidil', members: [{ id: 'finasteride', lib: 'pharmaceutical' }, { id: 'minoxidil', lib: 'pharmaceutical' }], title: 'Finasteride vs Minoxidil', topic: { hu: 'Hajhullás-kezelés', en: 'Hair-loss treatment', pl: 'Leczenie wypadania włosów' } },
  // --- hairskin (Haj és Bőr) same-library ---
  { slug: 'finasteride-vs-dutasteride-haj', members: [{ id: 'finasteride', lib: 'hairskin' }, { id: 'dutasteride', lib: 'hairskin' }], title: 'Finasteride vs Dutasteride', topic: { hu: '5α-reduktáz gátlók (hajhullás)', en: '5α-reductase inhibitors (hair loss)', pl: 'Inhibitory 5α-reduktazy (wypadanie włosów)' } },
  { slug: 'tretinoin-vs-tazarotene-vs-azelaic-acid', members: [{ id: 'tretinoin', lib: 'hairskin' }, { id: 'tazarotene', lib: 'hairskin' }, { id: 'azelaic-acid', lib: 'hairskin' }], title: 'Tretinoin vs Tazarotene vs Azelaic acid', topic: { hu: 'Akne és bőr-megújító hatóanyagok', en: 'Acne & skin-renewal actives', pl: 'Składniki na trądzik i odnowę skóry' } },
  { slug: 'clascoterone-vs-pyrilutamide-vs-ru58841', members: [{ id: 'clascoterone', lib: 'hairskin' }, { id: 'pyrilutamide', lib: 'hairskin' }, { id: 'ru58841', lib: 'hairskin' }], title: 'Clascoterone vs Pyrilutamide vs RU58841', topic: { hu: 'Topikális antiandrogének (haj)', en: 'Topical antiandrogens (hair)', pl: 'Miejscowe antyandrogeny (włosy)' } },
]
const SLUG_TO_COMPARISON = Object.fromEntries(COMPARISONS.map((c) => [c.slug, c]))

// Reverse index: every comparison whose members include this {lib,id}. Pure, used by the
// tile badge + the entry-page "related comparisons" block (Phase D).
export function comparisonsForEntry(lib, id) {
  return COMPARISONS.filter((c) => c.members.some((m) => m.lib === lib && m.id === id))
}

export function homePath(lang = 'hu') {
  return LANG_PREFIX[lang] || '/'
}

export function comparisonBasePath(lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${COMPARISON_BASE[lang]}`
}

export function comparisonPath(slug, lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${COMPARISON_BASE[lang]}/${slug}`
}

export function pagePath(pageKey, lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${STATIC_PAGES[pageKey][lang]}`
}

export function libraryPath(libId, lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${LIB_SLUGS[libId][lang]}`
}

export function entryPath(libId, id, variantId = null, lang = 'hu') {
  const base = `${LANG_PREFIX[lang]}/${LIB_SLUGS[libId][lang]}/${id}`
  return variantId ? `${base}/${variantId}` : base
}

// Parse HU (no prefix), /en, and /pl paths. Returns one of:
//   { kind:'home', lang } | { kind:'library', lang, library }
//   { kind:'entry', lang, library, id, variantId } | { kind:'unknown' }
// The slug word must match the language (e.g. /en/peptides, not /en/peptidek).
export function parsePath(pathname) {
  let clean = (pathname || '/').replace(/\/+$/, '') || '/'
  // Detect a language prefix; HU has none (it lives at the root).
  let lang = 'hu'
  const m = clean.match(/^\/(en|pl)(\/|$)/)
  if (m) { lang = m[1]; clean = clean.slice(m[1].length + 1) || '/' }
  if (clean === '/') return { kind: 'home', lang }
  const parts = clean.replace(/^\//, '').split('/')
  const pageKey = SLUG_TO_PAGE[lang] && SLUG_TO_PAGE[lang][parts[0]]
  if (pageKey && parts.length === 1) return { kind: 'page', lang, page: pageKey }
  // Comparison section: /<base> (index) or /<base>/<a-vs-b[-vs-c]> (detail).
  if (parts[0] === COMPARISON_BASE[lang]) {
    if (parts.length === 1) return { kind: 'comparison-index', lang }
    if (parts.length === 2 && SLUG_TO_COMPARISON[parts[1]]) return { kind: 'comparison', lang, slug: parts[1] }
    return { kind: 'unknown' }
  }
  const library = SLUG_TO_LIB[lang][parts[0]]
  if (!library) return { kind: 'unknown' }
  if (parts.length === 1) return { kind: 'library', lang, library }
  if (parts.length === 2) return { kind: 'entry', lang, library, id: parts[1], variantId: null }
  if (parts.length === 3) return { kind: 'entry', lang, library, id: parts[1], variantId: parts[2] }
  return { kind: 'unknown' }
}

// Map a parsed route to the SAME logical page in another language (for the language
// switcher: navigating to the translated URL is what changes the rendered language).
export function translatePath(route, lang) {
  if (!route || route.kind === 'unknown' || route.kind === 'home') return homePath(lang)
  if (route.kind === 'page') return pagePath(route.page, lang)
  if (route.kind === 'comparison-index') return comparisonBasePath(lang)
  if (route.kind === 'comparison') return comparisonPath(route.slug, lang)
  if (route.kind === 'library') return libraryPath(route.library, lang)
  return entryPath(route.library, route.id, route.variantId, lang)
}
