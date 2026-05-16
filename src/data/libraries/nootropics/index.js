// Nootropic Library — the second concrete Library plugged into the Phase 3
// abstraction. Shape matches the Library typedef in ../shape.js.

import { NOOTROPICS, TOP10_ORDER } from './data'
import { CATEGORIES, NOOTROPIC_CATEGORIES, getNootropicCategories } from './categories'
import { getResearchLevel } from './researchLevel'
import { EFFECT_CATEGORIES } from './effects'
import { RESEARCH_LEVELS } from '../shared/researchLevel'

export const nootropicsLibrary = {
  id: 'nootropics',
  name: {
    hu: 'Nootropikum Könyvtár',
    en: 'Nootropic Library',
    pl: 'Biblioteka Nootropików',
  },
  description: {
    hu: 'Kognitív teljesítményt és mentális egészséget támogató vegyületek · kutatási szint, kategória, hatásmechanizmus szerint',
    en: 'Compounds supporting cognitive performance and mental health · search by research tier, category, mechanism',
    pl: 'Związki wspierające wydajność poznawczą i zdrowie psychiczne · wyszukiwanie wg poziomu badań, kategorii, mechanizmu',
  },
  accent: '#00ff99',
  entries: NOOTROPICS,
  topEntries: TOP10_ORDER,
  categories: CATEGORIES,
  entryCategoryMap: NOOTROPIC_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
    hu: 'Kognitív Hatásterületek',
    en: 'Cognitive Domains',
    pl: 'Domeny Poznawcze',
  },
  effectsSubtitle: {
    hu: 'Nootropikum hatásprofilok és tudományos háttér',
    en: 'Nootropic effect profiles and scientific background',
    pl: 'Profile efektów nootropików i podstawy naukowe',
  },
}

// Convenience re-exports — direct consumers can still pull these.
export { NOOTROPICS, TOP10_ORDER, CATEGORIES, NOOTROPIC_CATEGORIES, getNootropicCategories, getResearchLevel, EFFECT_CATEGORIES }
