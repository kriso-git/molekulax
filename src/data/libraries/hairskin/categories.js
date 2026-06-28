// Hair & Skin library – 2 categories grouping entries by domain.
// Each category exposes a stable id, accent color, and HU/EN/PL label.
// Grown incrementally as entries land (Haj first, Bőr second per the source brief).

export const CATEGORIES = [
  { id: 'hair', accent: '#22d3ee', label: { hu: 'Haj',  en: 'Hair', pl: 'Włosy' } },
  { id: 'skin', accent: '#f472b6', label: { hu: 'Bőr',  en: 'Skin', pl: 'Skóra' } },
]

// subCategories drive the performance-style category CARDS under the gallery title
// (click → filter the list + scroll to it). label + sub (subtitle) are i18n strings.
export const SUBCATEGORIES = [
  {
    id: 'hair', accent: '#22d3ee',
    label: { hu: 'Haj', en: 'Hair', pl: 'Włosy' },
    sub: {
      hu: 'Hajhullás, androgenetikus alopecia · DHT-gátlás + follikulus-stimuláció',
      en: 'Hair loss, androgenetic alopecia · DHT inhibition + follicle stimulation',
      pl: 'Wypadanie włosów, łysienie androgenowe · hamowanie DHT + stymulacja mieszków',
    },
  },
  {
    id: 'skin', accent: '#f472b6',
    label: { hu: 'Bőr', en: 'Skin', pl: 'Skóra' },
    sub: {
      hu: 'Akne, fotoöregedés, hiperpigmentáció · retinoidok + bőrmegújítás',
      en: 'Acne, photoaging, hyperpigmentation · retinoids + skin renewal',
      pl: 'Trądzik, fotostarzenie, hiperpigmentacja · retinoidy + odnowa skóry',
    },
  },
]

// Map: entry-id → array of category-ids it belongs to.
// Clascoterone (CB-03-01) legitimately spans both (Winlevi acne + AGA hair).
export const HAIRSKIN_CATEGORIES = {
  minoxidil:   ['hair'],
  finasteride: ['hair'],
  dutasteride: ['hair'],
  tretinoin:   ['skin'],
  tazarotene:  ['skin'],
  'azelaic-acid': ['skin'],
  'estriol-cream': ['skin'],
  clascoterone: ['hair', 'skin'],
  pyrilutamide: ['hair'],
  ru58841: ['hair'],
  topilutamide: ['hair'],
  'pp-405': ['hair'],
  'sm-04554': ['hair'],
}

export function getHairskinCategories(entryId) {
  return HAIRSKIN_CATEGORIES[entryId] || []
}
