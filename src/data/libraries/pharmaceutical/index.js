// Pharmaceutical Library, the fourth concrete Library plugged into the Phase 3
// abstraction. Shape matches the Library typedef in ../shape.js with Phase 6
// optional Entry fields (atcCode, prescriptionStatus, indications, contraindications,
// commonSideEffects, cyp450, crossMolInteractions).
//
// Phase 6 / Session 4 MVP release-point: skeleton with 7 categories + 8 effect tiles,
// empty entries array (entries land in Session 5-6, Task 16-23).

import { PHARMACEUTICAL, TOP10_ORDER } from './data.js'
import { CATEGORIES, PHARMACEUTICAL_CATEGORIES, getPharmaceuticalCategories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'

export const pharmaceuticalLibrary = {
  id: 'pharmaceutical',
  name: {
    hu: 'Gyógyszerek Könyvtár',
    en: 'Pharmaceuticals Library',
    pl: 'Biblioteka środków farmaceutycznych',
  },
  description: {
    hu: 'Hatóanyag-szintű gyógyszer-edukáció hivatalos forrásokból · PubMed, FDA, EMA, SmPC · NEM helyettesíti az orvosi konzultációt',
    en: 'Active-ingredient-level drug education from official sources · PubMed, FDA, EMA, SmPC · NOT a substitute for medical consultation',
    pl: 'Edukacja farmaceutyczna na poziomie substancji czynnej z oficjalnych źródeł · PubMed, FDA, EMA, ChPL · NIE zastępuje konsultacji lekarskiej',
  },
  accent: '#00ff99',
  entries: PHARMACEUTICAL,
  topEntries: TOP10_ORDER,
  categories: CATEGORIES,
  entryCategoryMap: PHARMACEUTICAL_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
    hu: 'Terápiás területek',
    en: 'Therapeutic Areas',
    pl: 'Obszary Terapeutyczne',
  },
  effectsSubtitle: {
    hu: 'Hol és mire hatnak ezek a gyógyszerek · indikáció + mechanizmus + evidencia',
    en: 'Where and how these medications act · indication + mechanism + evidence',
    pl: 'Gdzie i jak działają te leki · wskazanie + mechanizm + dowody',
  },
  labels: {
    topTitle: {
      hu: '10 Legfontosabb Gyógyszer-hatóanyag',
      en: 'Top 10 Most Discussed Pharmaceuticals',
      pl: '10 najważniejszych substancji farmaceutycznych',
    },
    allTitle: {
      hu: 'Összes Gyógyszer',
      en: 'All Pharmaceuticals',
      pl: 'Wszystkie środki farmaceutyczne',
    },
    allCount: {
      hu: 'gyógyszer-hatóanyag',
      en: 'pharmaceutical compounds',
      pl: 'substancji farmaceutycznych',
    },
    helpBody: {
      hu: 'Edukatív gyógyszer-info hivatalos forrásokból (PubMed, FDA, EMA). NEM helyettesíti az orvosi konzultációt vagy az SmPC-t. Beszélj az orvosoddal!',
      en: 'Educational drug info from official sources (PubMed, FDA, EMA). Does NOT replace medical consultation or the SmPC. Talk to your doctor!',
      pl: 'Edukacyjne informacje o lekach z oficjalnych źródeł (PubMed, FDA, EMA). NIE zastępuje konsultacji lekarskiej ani ChPL. Porozmawiaj z lekarzem!',
    },
    relatedLabel: {
      hu: 'Kapcsolódó hatóanyagok',
      en: 'Related compounds',
      pl: 'Powiązane substancje',
    },
    contactTitle: {
      hu: 'Van kérdésed egy gyógyszerrel kapcsolatban?',
      en: 'Have a question about a medication?',
      pl: 'Masz pytanie o lek?',
    },
  },
}

// Convenience re-exports for direct consumers.
export { PHARMACEUTICAL, TOP10_ORDER, CATEGORIES, PHARMACEUTICAL_CATEGORIES, getPharmaceuticalCategories, getResearchLevel, EFFECT_CATEGORIES }
