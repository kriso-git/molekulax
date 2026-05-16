// Peptide Library — the first concrete Library plugged into the Phase 3
// abstraction. Shape matches the Library typedef in ../shape.js.
// Phase 4: effects, effectsTitle, effectsSubtitle, description added.

import { PEPTIDES, TOP10_ORDER } from './data'
import { CATEGORIES, PEPTIDE_CATEGORIES, getPeptideCategories } from './categories'
import { getResearchLevel } from './researchLevel'
import { RESEARCH_LEVELS } from '../shared/researchLevel'
import { EFFECT_CATEGORIES } from './effects'

export const peptidesLibrary = {
  id: 'peptides',
  name: {
    hu: 'Peptid Könyvtár',
    en: 'Peptide Library',
    pl: 'Biblioteka Peptydów',
  },
  description: {
    hu: '50+ tudományosan dokumentált peptid · keresés, kategória, kutatási szint szerint',
    en: '50+ scientifically documented peptides · search by category and research tier',
    pl: '50+ peptydów udokumentowanych naukowo · wyszukiwanie wg kategorii i poziomu badań',
  },
  accent: '#00ff99',
  entries: PEPTIDES,
  topEntries: TOP10_ORDER,
  categories: CATEGORIES,
  entryCategoryMap: PEPTIDE_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
    hu: 'Élettani Hatások',
    en: 'Physiological Effects',
    pl: 'Efekty fizjologiczne',
  },
  effectsSubtitle: {
    hu: 'Peptid hatáscsoportok és tudományos háttér',
    en: 'Peptide effect groups and scientific background',
    pl: 'Grupy efektów peptydów i podstawy naukowe',
  },
}

// Convenience re-exports — peptide-specific consumers (Calculator, etc.) that
// don't go through the Library abstraction can still import these directly.
export { PEPTIDES, TOP10_ORDER, CATEGORIES, PEPTIDE_CATEGORIES, getPeptideCategories, getResearchLevel, EFFECT_CATEGORIES }
