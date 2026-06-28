// Hair & Skin library (5th library) – registry target.
// Mirrors the pharmaceutical library shape: per-lang entry files under entries/{hu,en,pl}/,
// a sync LIBRARY_ENTRY_META array for cold deep-link logic, and a loadEntry(id, lang) thunk.
import { CATEGORIES, SUBCATEGORIES, HAIRSKIN_CATEGORIES, getHairskinCategories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'

// Sync per-entry meta (Phase 12). shortDesc/prescriptionStatus are the gallery-card
// localized labels; the full prose lives in entries/<lang>/<id>.js.
export const LIBRARY_ENTRY_META = [
  {
    "id": "minoxidil",
    "name": "Minoxidil",
    "subCategory": "hair",
    "image": "/pharmaceutical/blister-white-round.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "K-csatorna-aktivátor topikális vagy orális szer (Rogaine, Loniten + LDOM). Két adagolási mód, eltérő szisztémás expozícióval.",
      "en": "K-channel activator, topical or oral (Rogaine, Loniten + LDOM). Two administration routes with very different systemic exposure profiles.",
      "pl": "Aktywator kanałów K, miejscowy lub doustny (Rogaine, Loniten + LDOM). Dwie drogi podania z różną ekspozycją systemową."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "OTC topikális, vényköteles orális (Loniten + LDOM)",
      "en": "OTC topical, prescription oral (Loniten + LDOM)",
      "pl": "OTC miejscowy, na receptę doustny (Loniten + LDOM)"
    },
    "atcCode": "D11AX01 (topical) / C02DC01 (oral)",
    "variantCount": 2
  },
  {
    "id": "finasteride",
    "name": "Finasteride",
    "subCategory": "hair",
    "image": "/pharmaceutical/blister-blue-small.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "5α-reduktáz II-es típusú szelektív gátló. FDA-jóváhagyott androgenetikus alopeciára (Propecia 1 mg) és BPH-ra (Proscar 5 mg). A DHT képződést ~70%-kal csökkenti.",
      "en": "5α-reductase type II selective inhibitor. FDA-approved for androgenetic alopecia (Propecia 1 mg) and BPH (Proscar 5 mg). Reduces DHT formation by ~70%.",
      "pl": "Selektywny inhibitor 5α-reduktazy typu II. Zatwierdzony przez FDA dla łysienia androgenowego (Propecia 1 mg) i BPH (Proscar 5 mg). Redukuje tworzenie DHT o ~70%."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), bőrgyógyász vagy urológus",
      "en": "Prescription (Rx), dermatologist or urologist",
      "pl": "Na receptę (Rx), dermatolog lub urolog"
    },
    "atcCode": "D11AX10 (1 mg) / G04CB01 (5 mg)",
    "variantCount": 2
  },
  {
    "id": "dutasteride",
    "subCategory": "hair",
    "name": "Dutasteride",
    "image": "/pharmaceutical/softgel-orange.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Duális 5α-reduktáz-gátló (típus I + II). BPH-ra FDA-jóváhagyott (Avodart 0,5 mg), androgenetikus alopeciára off-label (Dél-Koreában/Japánban engedélyezett). A DHT-t ~90-95%-kal csökkenti.",
      "en": "Dual 5α-reductase inhibitor (type I + II). FDA-approved for BPH (Avodart 0.5 mg), off-label for androgenetic alopecia (approved in South Korea/Japan). Reduces DHT by ~90-95%.",
      "pl": "Podwójny inhibitor 5α-reduktazy (typ I + II). Zatwierdzony przez FDA dla BPH (Avodart 0,5 mg), off-label dla łysienia androgenowego (zatwierdzony w Korei Płd./Japonii). Redukuje DHT o ~90-95%."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx); AGA-ra off-label",
      "en": "Prescription (Rx); off-label for AGA",
      "pl": "Na receptę (Rx); off-label dla AGA"
    },
    "atcCode": "G04CB02",
    "variantCount": 2
  },
  {
    "id": "tretinoin",
    "name": "Tretinoin",
    "subCategory": "skin",
    "image": "/pharmaceutical/cream-tube-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Topikális retinoid all-transz-retinoinsav. Acne, fotoöregedés, hiperpigmentáció kezelés. Bőrgyógyászati gold-standard.",
      "en": "Topical retinoid all-trans-retinoic acid. Acne, photoaging, hyperpigmentation treatment. Dermatological gold standard.",
      "pl": "Miejscowy retinoid kwas all-trans-retinowy. Trądzik, fotostarzenie, leczenie hiperpigmentacji. Dermatologiczny złoty standard."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), bőrgyógyász felügyelet",
      "en": "Prescription (Rx), dermatologist-supervised",
      "pl": "Na receptę (Rx), nadzór dermatologa"
    },
    "atcCode": "D10AD01",
    "variantCount": 3
  },
  {
    "id": "tazarotene",
    "subCategory": "skin",
    "name": "Tazarotene",
    "image": "/pharmaceutical/cream-tube-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Acetilénes (3. generációs) topikális retinoid prodrug. FDA-jóváhagyott aknéra, plakkos pszoriázisra és fotoöregedésre. A tretinoinnál erősebb és irritálóbb; terhességben tilos.",
      "en": "Acetylenic (3rd-gen) topical retinoid prodrug. FDA-approved for acne, plaque psoriasis and photoaging. More potent and more irritating than tretinoin; contraindicated in pregnancy.",
      "pl": "Acetylenowy (3. generacji) miejscowy retinoid prolek. Zatwierdzony przez FDA na trądzik, łuszczycę plackowatą i fotostarzenie. Silniejszy i bardziej drażniący niż tretynoina; przeciwwskazany w ciąży."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), bőrgyógyász",
      "en": "Prescription (Rx), dermatologist",
      "pl": "Na receptę (Rx), dermatolog"
    },
    "atcCode": "D05AX05",
    "variantCount": 2
  },
  {
    "id": "azelaic-acid",
    "subCategory": "skin",
    "name": "Azelaic acid",
    "image": "/pharmaceutical/cream-tube-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Természetes C9 dikarbonsav, négyes hatással (antibakteriális + komedolitikus + gyulladáscsökkentő + tirozináz-gátló). FDA-jóváhagyott aknéra (20%) és rozáceára (15%). Terhességben is biztonságos.",
      "en": "Natural C9 dicarboxylic acid with four actions (antibacterial + comedolytic + anti-inflammatory + tyrosinase inhibitor). FDA-approved for acne (20%) and rosacea (15%). Safe in pregnancy.",
      "pl": "Naturalny kwas dikarboksylowy C9 o poczwórnym działaniu (antybakteryjne + komedolityczne + przeciwzapalne + inhibitor tyrozynazy). Zatwierdzony przez FDA na trądzik (20%) i trądzik różowaty (15%). Bezpieczny w ciąży."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx); kozmetikai % OTC",
      "en": "Prescription (Rx); cosmetic % OTC",
      "pl": "Na receptę (Rx); kosmetyczny % OTC"
    },
    "atcCode": "D10AX03",
    "variantCount": 2
  },
  {
    "id": "estriol-cream",
    "subCategory": "skin",
    "name": "Estriol cream",
    "image": "/pharmaceutical/cream-tube-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Ösztriol (E3) topikális krém az ösztrogén-hiányos (menopauzális) bőr kollagén-/elaszticitás-vesztésére. A bőr-öregedésre off-label/magisztrális, szerény evidenciával. Hormon, valódi kontraindikációkkal.",
      "en": "Estriol (E3) topical cream for collagen/elasticity loss in estrogen-deficient (menopausal) skin. Off-label/compounded for skin aging, with modest evidence. A hormone with real contraindications.",
      "pl": "Estriol (E3) krem miejscowy na utratę kolagenu/elastyczności w skórze z niedoborem estrogenu (menopauzalnej). Off-label/recepturowy na starzenie skóry, z umiarkowanymi dowodami. Hormon z realnymi przeciwwskazaniami."
    },
    "tier": 3,
    "prescriptionStatus": {
      "hu": "Vényköteles / magisztrális hormon; off-label",
      "en": "Prescription / compounded hormone; off-label",
      "pl": "Hormon na receptę / recepturowy; off-label"
    },
    "atcCode": "G03CA04"
  },
  {
    "id": "clascoterone",
    "subCategory": "hair",
    "name": "Clascoterone",
    "image": "/pharmaceutical/cream-tube-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Kortexolon-17α-propionát (CB-03-01): az első FDA-jóváhagyott topikális androgén-receptor antagonista. Aknéra engedélyezett (Winlevi 1% krém); androgenetikus alopeciára vizsgálati (Breezula oldat, fázis-3).",
      "en": "Cortexolone 17α-propionate (CB-03-01): the first FDA-approved topical androgen-receptor antagonist. Approved for acne (Winlevi 1% cream); investigational for androgenetic alopecia (Breezula solution, phase 3).",
      "pl": "Korteksolon-17α-propionian (CB-03-01): pierwszy zatwierdzony przez FDA miejscowy antagonista receptora androgenowego. Zatwierdzony na trądzik (Winlevi 1% krem); badawczy na łysienie androgenowe (roztwór Breezula, faza 3)."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx); akne engedélyezett, AGA vizsgálati",
      "en": "Prescription (Rx); acne approved, AGA investigational",
      "pl": "Na receptę (Rx); trądzik zatwierdzony, AGA badawczy"
    },
    "atcCode": "D10AX"
  },
  {
    "id": "pyrilutamide",
    "subCategory": "hair",
    "name": "Pyrilutamide",
    "image": "/performance/topical-solution-clear.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Topikális androgén-receptor antagonista (KX-826, Kintor) androgenetikus alopeciára. VIZSGÁLATI: fázis-2/3, sehol nem engedélyezett, publikált efficacy egyelőre hiányos.",
      "en": "Topical androgen-receptor antagonist (KX-826, Kintor) for androgenetic alopecia. INVESTIGATIONAL: phase 2/3, not approved anywhere, published efficacy still sparse.",
      "pl": "Miejscowy antagonista receptora androgenowego (KX-826, Kintor) na łysienie androgenowe. BADAWCZY: faza 2/3, nigdzie niezatwierdzony, opublikowana skuteczność wciąż skąpa."
    },
    "tier": 2,
    "prescriptionStatus": {
      "hu": "Nem engedélyezett (vizsgálati)",
      "en": "Not approved (investigational)",
      "pl": "Niezatwierdzony (badawczy)"
    }
  },
  {
    "id": "ru58841",
    "subCategory": "hair",
    "name": "RU58841",
    "image": "/performance/topical-solution-clear.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Nem-szteroid topikális androgén-receptor antagonista (PSK-3841, Roussel-Uclaf). KÍSÉRLETI: sosem törzskönyvezték, csak állatkísérletes adat + anekdota, befejezett emberi vizsgálat nincs.",
      "en": "Nonsteroidal topical androgen-receptor antagonist (PSK-3841, Roussel-Uclaf). EXPERIMENTAL: never approved, only animal data + anecdote, no completed human trial.",
      "pl": "Niesteroidowy miejscowy antagonista receptora androgenowego (PSK-3841, Roussel-Uclaf). EKSPERYMENTALNY: nigdy niezatwierdzony, tylko dane zwierzęce + anegdota, brak ukończonego badania u ludzi."
    },
    "tier": 1,
    "prescriptionStatus": {
      "hu": "Nem gyógyszer (kísérleti)",
      "en": "Not a drug (experimental)",
      "pl": "Nie jest lekiem (eksperymentalny)"
    }
  },
  {
    "id": "topilutamide",
    "subCategory": "hair",
    "name": "Topilutamide",
    "image": "/performance/topical-solution-clear.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Topilutamide (fluridil): topikális androgén-receptor antagonista, Eucapil néven forgalmazott (EU/cseh) OTC/kozmetikum AGA-ra. Lokálisan hat; a klinikai bizonyíték korlátozott (egy kis vizsgálat).",
      "en": "Topilutamide (fluridil): topical androgen-receptor antagonist, marketed as Eucapil (EU/Czech) OTC/cosmetic for AGA. Locally acting; clinical evidence is limited (one small study).",
      "pl": "Topilutamid (fluridyl): miejscowy antagonista receptora androgenowego, sprzedawany jako Eucapil (EU/Czechy) OTC/kosmetyk na AGA. Działa miejscowo; dowody kliniczne ograniczone (jedno małe badanie)."
    },
    "tier": 2,
    "prescriptionStatus": {
      "hu": "OTC/kozmetikum (EU, Eucapil); nem FDA-gyógyszer",
      "en": "OTC/cosmetic (EU, Eucapil); not an FDA drug",
      "pl": "OTC/kosmetyk (EU, Eucapil); nie lek FDA"
    }
  },
  {
    "id": "pp-405",
    "subCategory": "hair",
    "name": "PP-405",
    "image": "/performance/topical-solution-clear.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Topikális MPC (mitokondriális piruvát-carrier) gátló (Pelage). Teljesen új, metabolikus mechanizmus: a hajhagyma-őssejtek aktiválása. VIZSGÁLATI: fázis-1/2a, nem engedélyezett, nem antiandrogén.",
      "en": "Topical MPC (mitochondrial pyruvate carrier) inhibitor (Pelage). Entirely new metabolic mechanism: activates hair-follicle stem cells. INVESTIGATIONAL: phase 1/2a, not approved.",
      "pl": "Miejscowy inhibitor MPC (mitochondrialnego transportera pirogronianu) (Pelage). Całkowicie nowy mechanizm metaboliczny: aktywuje komórki macierzyste mieszka. BADAWCZY: faza 1/2a, niezatwierdzony."
    },
    "tier": 1,
    "prescriptionStatus": {
      "hu": "Nem engedélyezett (vizsgálati)",
      "en": "Not approved (investigational)",
      "pl": "Niezatwierdzony (badawczy)"
    }
  },
  {
    "id": "sm-04554",
    "subCategory": "hair",
    "name": "SM-04554",
    "image": "/performance/topical-solution-clear.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Topikális Wnt/β-katenin jelút-aktivátor (Samumed/Biosplice) androgenetikus alopeciára. Regeneratív mechanizmus. VIZSGÁLATI: fázis-2 szerény/vegyes eredménnyel, nem engedélyezett.",
      "en": "Topical Wnt/β-catenin pathway activator (Samumed/Biosplice) for androgenetic alopecia. Regenerative mechanism. INVESTIGATIONAL: phase 2 with modest/mixed results, not approved.",
      "pl": "Miejscowy aktywator szlaku Wnt/β-katenina (Samumed/Biosplice) na łysienie androgenowe. Mechanizm regeneracyjny. BADAWCZY: faza 2 z umiarkowanymi/mieszanymi wynikami, niezatwierdzony."
    },
    "tier": 1,
    "prescriptionStatus": {
      "hu": "Nem engedélyezett (vizsgálati)",
      "en": "Not approved (investigational)",
      "pl": "Niezatwierdzony (badawczy)"
    }
  }
]

export const TOP_ENTRY_IDS = ["minoxidil", "finasteride", "dutasteride", "tretinoin"]

export const hairskinLibrary = {
  id: "hairskin",
  name: { hu: "Haj és Bőr Könyvtár", en: "Hair & Skin Library", pl: "Biblioteka Włosów i Skóry" },
  description: {
    hu: "Tudományosan dokumentált haj- és bőrápolási hatóanyagok · hajhullás, akne, bőrmegújítás · forrás-igazolt edukáció",
    en: "Scientifically documented hair and skin care compounds · hair loss, acne, skin renewal · source-verified education",
    pl: "Udokumentowane naukowo substancje do pielęgnacji włosów i skóry · wypadanie włosów, trądzik, odnowa skóry · edukacja oparta na źródłach"
  },
  accent: "#00ff99",
  meta: LIBRARY_ENTRY_META,
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  subCategories: SUBCATEGORIES,
  entryCategoryMap: HAIRSKIN_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: { hu: "Haj- és bőrterületek", en: "Hair & Skin Areas", pl: "Obszary włosów i skóry" },
  effectsSubtitle: {
    hu: "Hol és hogyan hatnak ezek a vegyületek · mechanizmus + indikáció + evidencia",
    en: "Where and how these compounds act · mechanism + indication + evidence",
    pl: "Gdzie i jak działają te związki · mechanizm + wskazanie + dowody"
  },
  labels: {
    topTitle: { hu: "Legfontosabb haj- és bőrvegyületek", en: "Top Hair & Skin Compounds", pl: "Najważniejsze związki na włosy i skórę" },
    allTitle: { hu: "Összes haj- és bőrvegyület", en: "All Hair & Skin Compounds", pl: "Wszystkie związki na włosy i skórę" },
    allCount: { hu: "vegyület", en: "compounds", pl: "związków" },
    helpBody: {
      hu: "Edukatív haj- és bőr-info hivatalos forrásokból (PubMed, FDA, EMA). NEM helyettesíti az orvosi konzultációt. Beszélj bőrgyógyásszal!",
      en: "Educational hair and skin info from official sources (PubMed, FDA, EMA). Does NOT replace medical consultation. Talk to a dermatologist!",
      pl: "Edukacyjne informacje o włosach i skórze z oficjalnych źródeł (PubMed, FDA, EMA). NIE zastępuje konsultacji lekarskiej. Porozmawiaj z dermatologiem!"
    },
    relatedLabel: { hu: "Kapcsolódó vegyületek", en: "Related compounds", pl: "Powiązane substancje" },
    contactTitle: { hu: "Van kérdésed egy haj- vagy bőrvegyülettel kapcsolatban?", en: "Have a question about a hair or skin compound?", pl: "Masz pytanie o substancję na włosy lub skórę?" }
  },
  features: {
    faq: false,
    doseRecommendations: false,
    calculator: true,
    qualityGrid: false,
    interactions: false,
    quickStart: false,
    labTerminal: true,
    chemicalFormulaPlaceholder: false
  },
}

// Phase 12 per-lang: Vite template-literal-import emits one chunk per (lang, id).
export async function loadEntry(id, lang) {
  const mod = await import(`./entries/${lang}/${id}.js`)
  return mod.default
}

export { CATEGORIES, HAIRSKIN_CATEGORIES, getHairskinCategories, getResearchLevel, EFFECT_CATEGORIES }
