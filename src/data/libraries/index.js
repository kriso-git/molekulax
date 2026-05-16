// Library registry — Phase 3 entry point for the multi-library system.
//
// Each library is a self-contained module under libraries/<id>/ that
// exports a Library object matching the typedef in ./shape.js. New
// libraries (Nootropics in Phase 4, Performance in Phase 5, Pharmaceuticals
// in Phase 6) register themselves here.

import { peptidesLibrary } from './peptides'

export const LIBRARIES = [peptidesLibrary]

export function getLibrary(id) {
  return LIBRARIES.find(lib => lib.id === id) || null
}

export function listLibraries() {
  return LIBRARIES
}

export const DEFAULT_LIBRARY_ID = 'peptides'
