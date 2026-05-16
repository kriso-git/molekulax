// Performance Library, the third concrete Library plugged into the Phase 3
// abstraction. Shape matches the Library typedef in ../shape.js.
// User-decision: SARMs are excluded from this library entirely.

import { PERFORMANCE, TOP10_ORDER } from './data'
import { CATEGORIES, PERFORMANCE_CATEGORIES, getPerformanceCategories } from './categories'
import { getResearchLevel } from './researchLevel'
import { EFFECT_CATEGORIES } from './effects'
import { RESEARCH_LEVELS } from '../shared/researchLevel'

export const performanceLibrary = {
  id: 'performance',
  name: {
    hu: 'Teljesítményfokozók Könyvtár',
    en: 'Performance Compounds Library',
    pl: 'Biblioteka środków wydajnościowych',
  },
  description: {
    hu: 'Sport- és testépítési teljesítményfokozók edukatív áttekintése · harm-reduction megközelítés, peer-reviewed forrásokkal',
    en: 'Educational overview of sport and bodybuilding performance compounds · harm-reduction framing, peer-reviewed sources',
    pl: 'Edukacyjny przegląd środków wydajnościowych dla sportu i kulturystyki · podejście redukcji szkód, źródła recenzowane',
  },
  accent: '#00ff99',
  entries: PERFORMANCE,
  topEntries: TOP10_ORDER,
  categories: CATEGORIES,
  entryCategoryMap: PERFORMANCE_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
    hu: 'Teljesítményterületek',
    en: 'Performance Domains',
    pl: 'Domeny wydajnościowe',
  },
  effectsSubtitle: {
    hu: 'Anabolikus, sympathomimetic és metabolikus hatásprofilok tudományos háttérrel',
    en: 'Anabolic, sympathomimetic and metabolic effect profiles with scientific background',
    pl: 'Profile anaboliczne, sympatomimetyczne i metaboliczne z podstawami naukowymi',
  },
  labels: {
    topTitle: { hu: '10 Legnépszerűbb Teljesítményfokozó', en: 'Top 10 Most Discussed Performance Compounds', pl: '10 najpopularniejszych środków wydajnościowych' },
    allTitle: { hu: 'Összes Teljesítményfokozó', en: 'All Performance Compounds', pl: 'Wszystkie środki wydajnościowe' },
    allCount: { hu: 'teljesítményfokozó', en: 'performance compounds', pl: 'środków wydajnościowych' },
    helpBody: {
      hu: 'Lépj kapcsolatba egy tanácsadóval Telegramon. A teljesítményfokozó szerek harm-reduction megközelítéssel kerültek bemutatásra, peer-reviewed alapon.',
      en: 'Reach out to an advisor on Telegram. Performance compounds are presented with a harm-reduction approach, based on peer-reviewed evidence.',
      pl: 'Skontaktuj się z doradcą na Telegramie. Środki wydajnościowe są przedstawione z podejściem redukcji szkód, w oparciu o dowody recenzowane.',
    },
    relatedLabel: { hu: 'Kapcsolódó hatóanyagok', en: 'Related compounds', pl: 'Powiązane substancje' },
    contactTitle: {
      hu: 'Van kérdésed a teljesítményfokozókkal kapcsolatban?',
      en: 'Have a question about performance compounds?',
      pl: 'Masz pytanie o środki wydajnościowe?',
    },
  },
}

// Convenience re-exports for direct consumers.
export { PERFORMANCE, TOP10_ORDER, CATEGORIES, PERFORMANCE_CATEGORIES, getPerformanceCategories, getResearchLevel, EFFECT_CATEGORIES }
