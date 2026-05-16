// LibraryContext — Phase 3 abstraction that exposes the active library to
// gallery + detail components.
//
// Phase 3 only ships with the peptide library (default), so the Provider is a
// thin wrapper around state. Phase 7 (3D Cube/Slide nav) will use setLibraryId
// to switch between Phase 4-6 libraries.

import { createContext, useContext, useMemo, useState } from 'react'
import { getLibrary, listLibraries, DEFAULT_LIBRARY_ID } from '../data/libraries'

const LibraryContext = createContext({
  library: null,
  libraryId: DEFAULT_LIBRARY_ID,
  setLibraryId: () => {},
  availableLibraries: [],
})

export function LibraryProvider({ children, defaultId = DEFAULT_LIBRARY_ID }) {
  const [libraryId, setLibraryId] = useState(defaultId)
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
