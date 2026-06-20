// Pure URL <-> {library,id,variant} translation for SEO path routing.
// Phase 1 = HU only (no language prefix; HU lives at the site root). The
// hu/en/pl slug words are all defined here so Phase 3 can add /en + /pl
// prefixes without touching callers — but parsePath() below only recognises
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

export function homePath(lang = 'hu') {
  return LANG_PREFIX[lang] || '/'
}

export function libraryPath(libId, lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${LIB_SLUGS[libId][lang]}`
}

export function entryPath(libId, id, variantId = null, lang = 'hu') {
  const base = `${LANG_PREFIX[lang]}/${LIB_SLUGS[libId][lang]}/${id}`
  return variantId ? `${base}/${variantId}` : base
}

// Phase 1: parse HU paths only (no prefix). Returns one of:
//   { kind:'home', lang } | { kind:'library', lang, library }
//   { kind:'entry', lang, library, id, variantId } | { kind:'unknown' }
export function parsePath(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/'
  if (clean === '/') return { kind: 'home', lang: 'hu' }
  const parts = clean.replace(/^\//, '').split('/')
  const library = SLUG_TO_LIB.hu[parts[0]]
  if (!library) return { kind: 'unknown' }
  if (parts.length === 1) return { kind: 'library', lang: 'hu', library }
  if (parts.length === 2) return { kind: 'entry', lang: 'hu', library, id: parts[1], variantId: null }
  if (parts.length === 3) return { kind: 'entry', lang: 'hu', library, id: parts[1], variantId: parts[2] }
  return { kind: 'unknown' }
}
