// Library registry – Phase 8 perf-pass: lazy-load library data so each
// library's ~500-900kB raw entry array is fetched only when the user
// navigates to that face of the 3D cube. The synchronous LIBRARY_META
// constant carries the minimal info needed for cube navigation (name,
// accent, description) PLUS a `load` thunk (literal-path dynamic import,
// kept Vite-chunk-friendly) so the full Library module is fetched on demand.
//
// Single source of truth: both loadLibrary() and loadEntry() are registry-
// driven (look up the meta, call meta.load()) instead of duplicating a
// per-library switch. Adding a 5th library = ONE entry below; the cube nav
// (which reads listLibraries()) and the library-switcher UX are untouched.

import { DEPRECATED_PEPTIDE_IDS } from './peptides/deprecated.js'

const LIBRARY_META = [
  {
    id: 'peptides',
    name: { hu: 'Peptid Könyvtár', en: 'Peptide Library', pl: 'Biblioteka Peptydów' },
    accent: '#00ff99',
    description: {
      hu: '50+ tudományosan dokumentált peptid · keresés, kategória, kutatási szint szerint',
      en: '50+ scientifically documented peptides · search by category and research tier',
      pl: '50+ peptydów udokumentowanych naukowo · wyszukiwanie wg kategorii i poziomu badań',
    },
    deprecatedIds: DEPRECATED_PEPTIDE_IDS,
    load: () => import('./peptides/index.js'),
  },
  {
    id: 'nootropics',
    name: { hu: 'Nootropikum Könyvtár', en: 'Nootropic Library', pl: 'Biblioteka Nootropików' },
    accent: '#00ff99',
    description: {
      hu: 'Kognitív teljesítményt és mentális egészséget támogató vegyületek · kutatási szint, kategória, hatásmechanizmus szerint',
      en: 'Compounds supporting cognitive performance and mental health · search by research tier, category, mechanism',
      pl: 'Związki wspierające wydajność poznawczą i zdrowie psychiczne · wyszukiwanie wg poziomu badań, kategorii, mechanizmu',
    },
    load: () => import('./nootropics/index.js'),
  },
  {
    id: 'performance',
    name: { hu: 'Teljesítményfokozók Könyvtár', en: 'Performance Compounds Library', pl: 'Biblioteka środków wydajnościowych' },
    accent: '#00ff99',
    description: {
      hu: 'Sport- és testépítési teljesítményfokozók edukatív áttekintése · harm-reduction megközelítés, peer-reviewed forrásokkal',
      en: 'Educational overview of sport and bodybuilding performance compounds · harm-reduction framing, peer-reviewed sources',
      pl: 'Edukacyjny przegląd środków wydajnościowych dla sportu i kulturystyki · podejście redukcji szkód, źródła recenzowane',
    },
    load: () => import('./performance/index.js'),
  },
  {
    id: 'pharmaceutical',
    name: { hu: 'Gyógyszerek Könyvtár', en: 'Pharmaceuticals Library', pl: 'Biblioteka środków farmaceutycznych' },
    accent: '#00ff99',
    description: {
      hu: 'Hatóanyag-szintű gyógyszer-edukáció hivatalos forrásokból · PubMed, FDA, EMA, SmPC · NEM helyettesíti az orvosi konzultációt',
      en: 'Active-ingredient-level drug education from official sources · PubMed, FDA, EMA, SmPC · NOT a substitute for medical consultation',
      pl: 'Edukacja farmaceutyczna na poziomie substancji czynnej z oficjalnych źródeł · PubMed, FDA, EMA, ChPL · NIE zastępuje konsultacji lekarskiej',
    },
    load: () => import('./pharmaceutical/index.js'),
  },
]

// Cache of fully-loaded library objects, populated by loadLibrary()
const fullLibraryCache = {}

export function listLibraries() {
  return LIBRARY_META
}

// Returns the meta (or full if loaded). Synchronous. Returns null if id unknown.
export function getLibrary(id) {
  return fullLibraryCache[id] || LIBRARY_META.find(l => l.id === id) || null
}

// Async load the full library data. Caches the result. Registry-driven:
// each module default-names its export `<id>Library` (peptidesLibrary, …).
export async function loadLibrary(id) {
  if (fullLibraryCache[id]) return fullLibraryCache[id]
  const meta = LIBRARY_META.find(l => l.id === id)
  if (!meta) return null
  const mod = await meta.load()
  const lib = mod[`${id}Library`]
  fullLibraryCache[id] = lib
  return lib
}

export const DEFAULT_LIBRARY_ID = 'peptides'

// Phase 9 – Entry-level cache and loader. Keyed by `<libraryId>:<entryId>:<lang>`.
// The entry-file lives in libraries/<lib>/entries/<id>.js and default-exports
// the full Entry object. Each library's index.js exposes its own loadEntry(id, lang)
// helper; this top-level loadEntry routes to the right module via the registry
// without forcing the consumer to know about the per-library helpers.
const entryCache = new Map()

export async function loadEntry(libraryId, entryId, lang) {
  const key = `${libraryId}:${entryId}:${lang || 'default'}`
  if (entryCache.has(key)) return entryCache.get(key)
  const meta = LIBRARY_META.find(l => l.id === libraryId)
  if (!meta) throw new Error(`Unknown library: ${libraryId}`)
  const mod = await meta.load()
  if (typeof mod.loadEntry !== 'function') {
    throw new Error(`Library ${libraryId} does not expose loadEntry`)
  }
  // Pass lang to the per-library loader. Pre-Phase 12 libraries ignore it
  // (1-arg signature); post-Phase 12 libraries use it for the dynamic-import path.
  const entry = await mod.loadEntry(entryId, lang)
  if (!entry) {
    const err = new Error(`Entry not found: ${libraryId}/${entryId}`)
    err.code = 'ENTRY_NOT_FOUND'
    throw err
  }
  entryCache.set(key, entry)
  return entry
}

export function getCachedEntry(libraryId, entryId, lang) {
  return entryCache.get(`${libraryId}:${entryId}:${lang || 'default'}`) || null
}
