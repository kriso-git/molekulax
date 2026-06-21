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

export function homePath(lang = 'hu') {
  return LANG_PREFIX[lang] || '/'
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
  if (route.kind === 'library') return libraryPath(route.library, lang)
  return entryPath(route.library, route.id, route.variantId, lang)
}
