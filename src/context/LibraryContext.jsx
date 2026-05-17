// LibraryContext — Phase 3 abstraction that exposes the active library to
// gallery + detail components. Phase 7 added sessionStorage persistence
// (F5 keeps you on the same library) and hash-deep-link priority. The
// LibraryContext itself is also exported so CubeFace can render per-face
// nested providers.

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getLibrary, listLibraries, DEFAULT_LIBRARY_ID } from '../data/libraries'

const STORAGE_KEY = 'molekulax:libraryId'

export const LibraryContext = createContext({
  library: null,
  libraryId: DEFAULT_LIBRARY_ID,
  setLibraryId: () => {},
  availableLibraries: [],
})

// Priority on mount: hash deep-link > sessionStorage > defaultId.
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, libraryId)
    }
  }, [libraryId])

  const value = useMemo(() => ({
    library: getLibrary(libraryId),
    libraryId,
    setLibraryId,
    availableLibraries: listLibraries(),
  }), [libraryId])

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  )
}

export function useLibrary() {
  return useContext(LibraryContext)
}
