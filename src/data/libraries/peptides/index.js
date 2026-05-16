// Peptide Library — the first concrete Library plugged into the Phase 3
// abstraction. Shape matches the Library typedef in ../shape.js.

import { PEPTIDES, TOP10_ORDER } from './data'
import { CATEGORIES, PEPTIDE_CATEGORIES, getPeptideCategories } from './categories'
import { getResearchLevel } from './researchLevel'
import { RESEARCH_LEVELS } from '../shared/researchLevel'

export const peptidesLibrary = {
  id: 'peptides',
  name: {
    hu: 'Peptid Könyvtár',
    en: 'Peptide Library',
    pl: 'Biblioteka Peptydów',
  },
  accent: '#00ff99',
  entries: PEPTIDES,
  topEntries: TOP10_ORDER,
  categories: CATEGORIES,
  entryCategoryMap: PEPTIDE_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
}

// Convenience re-exports — peptide-specific consumers (Calculator, etc.) that
// don't go through the Library abstraction can still import these directly.
export { PEPTIDES, TOP10_ORDER, CATEGORIES, PEPTIDE_CATEGORIES, getPeptideCategories, getResearchLevel }
