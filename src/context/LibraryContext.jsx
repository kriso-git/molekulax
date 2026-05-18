// LibraryContext — Phase 3 abstraction that exposes the active library to
// gallery + detail components. Phase 7 added sessionStorage persistence
// (F5 keeps you on the same library) and hash-deep-link priority. Phase 8
// makes library data lazy. Phase 9 adds per-entry caching and a loadEntry
// helper so EntryDetail deep-links can fetch one entry without pulling the
// entire library bundle.

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  getLibrary,
  listLibraries,
  loadLibrary,
  loadEntry as loadEntryFromRegistry,
  getCachedEntry,
  DEFAULT_LIBRARY_ID,
} from '../data/libraries'

const STORAGE_KEY = 'molekulax:libraryId'

export const LibraryContext = createContext({
  library: null,
  libraryId: DEFAULT_LIBRARY_ID,
  setLibraryId: () => {},
  availableLibraries: [],
  isLoading: false,
  loadEntry: async () => null,
  getCachedEntry: () => null,
})

function readInitialLibraryId(defaultId) {
  if (typeof window === 'undefined') return defaultId
  const hash = window.location.hash.replace(/^#/, '')
  const m = hash.match(/^entry\/([a-z-]+)\//)
  if (m && getLibrary(m[1])) return m[1]
  const stored = sessionStorage.getItem(STORAGE_KEY)
  if (stored && getLibrary(stored)) return stored
  return defaultId
}

export function LibraryProvider({ children, defaultId = DEFAULT_LIBRARY_ID }) {
  const [libraryId, setLibraryId] = useState(() => readInitialLibraryId(defaultId))
  const [library, setLibrary] = useState(() => getLibrary(libraryId))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, libraryId)
    }
  }, [libraryId])

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)
    loadLibrary(libraryId).then((lib) => {
      if (!cancelled) {
        setLibrary(lib)
        setIsLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [libraryId])

  const loadEntry = useCallback(async (lib, id, lang) => {
    return loadEntryFromRegistry(lib, id, lang)
  }, [])

  const value = useMemo(() => ({
    library,
    libraryId,
    setLibraryId,
    availableLibraries: listLibraries(),
    isLoading,
    loadEntry,
    getCachedEntry: (lib, id, lang) => getCachedEntry(lib, id, lang),
  }), [library, libraryId, isLoading, loadEntry])

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  )
}

export function useLibrary() {
  return useContext(LibraryContext)
}
