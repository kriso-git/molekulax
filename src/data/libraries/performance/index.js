// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.980Z
// Phase 12: per-lang entry chunks. loadEntry(id, lang) dynamic-imports
// entries/<lang>/<id>.js. Library-level fields (categories, effects, faq,
// labels) still triplet — only entry bodies are lang-split.

import { CATEGORIES, PERFORMANCE_CATEGORIES, PERFORMANCE_SUB_CATEGORIES, SUB_SECTIONS, getPerformanceCategories, getPerformanceSubCategory } from './categories.js'
import { FORM_FACTORS } from './formFactors.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = [
  {
    "id": "testosterone-info",
    "name": "Testosterone",
    "image": "/performance/oil-vial-yellow.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Az endogén férfi nemi hormon és az összes AAS referencia-molekulája. FDA-jóváhagyott TRT (testosterone replacement therapy) hipogonadizmusra.",
      "en": "The endogenous male sex hormone and reference molecule of all AAS. FDA-approved TRT (testosterone replacement therapy) for hypogonadism.",
      "pl": "Endogenny męski hormon płciowy i molekuła referencyjna wszystkich AAS. Zatwierdzony przez FDA TRT (terapia zastępcza testosteronem) dla hipogonadyzmu."
    },
    "tier": 5,
    "wadaStatus": "banned",
    "variantCount": 5,
    "subCategory": "dht",
    "subSection": "alap-test",
    "formFactors": ["oil", "aq"]
  },
  {
    "id": "trenbolone-info",
    "name": "Trenbolone",
    "image": "/performance/oil-vial-orange.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Erős 19-nortestosterone-származék, 5x androgén aktivitás vs. testosterone. Vesére, vérnyomásra és prolaktinra agresszív, soha nem volt FDA-jóváhagyott emberi gyógyszer.",
      "en": "Potent 19-nortestosterone derivative, 5x androgenic activity vs. testosterone. Aggressive on kidneys, blood pressure and prolactin; never FDA-approved for human use.",
      "pl": "Silny derywat 19-nortestosteronu, 5x aktywność androgenna vs. testosteron. Agresywny dla nerek, ciśnienia i prolaktyny; nigdy nie zatwierdzony przez FDA do użytku ludzkiego."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "19nor",
    "subSection": "tren",
    "formFactors": ["oil"]
  },
  {
    "id": "anavar-info",
    "name": "Anavar (Oxandrolone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Oxandrolone, FDA-jóváhagyott orális AAS égési sérülésekre és HIV-cachexia kezelésére. Enyhén hepatotoxikus 17α-alkilált, gyakran \"női-barát\" szteroidnak nevezik.",
      "en": "Oxandrolone, FDA-approved oral AAS for burn injury and HIV cachexia. Mildly hepatotoxic 17α-alkylated, often called a female-friendly steroid.",
      "pl": "Oksandrolon, zatwierdzony przez FDA doustny AAS dla ofiar oparzeń i kacheksji HIV. Lekko hepatotoksyczny 17α-alkilowany, często nazywany sterydem przyjaznym kobietom."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral"]
  },
  {
    "id": "superdrol",
    "name": "Superdrol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Methasterone (2α,17α-dimetil-DHT-származék). Két adagolási mód: orális tabletta vs. underground injektábilis olaj — eltérő hepatikus profillal.",
      "en": "Methasterone (2α,17α-dimethyl DHT derivative). Two administration routes: oral tablet vs. underground injectable oil — different hepatic profiles.",
      "pl": "Methasterone (pochodna 2α,17α-dimetylo-DHT). Dwie drogi podania: doustna tabletka vs. iniekcyjny olej UGL — różne profile hepatyczne."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "variantCount": 2,
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral", "oil"]
  },
  {
    "id": "ephedrine",
    "name": "Ephedrine",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Sympathomimetic alkaloid (Ephedra sinica), klasszikus thermogenic és bronchodilator. WADA-tiltott versenysportban.",
      "en": "Sympathomimetic alkaloid (Ephedra sinica), the classic thermogenic and bronchodilator. WADA-banned in competitive sport.",
      "pl": "Sympatomimetyczny alkaloid (Ephedra sinica), klasyczny termogenik i bronchodilator. Zakazany przez WADA w sporcie wyczynowym."
    },
    "tier": 5,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "stim",
    "formFactors": ["oral"]
  },
  {
    "id": "yohimbine",
    "name": "Yohimbine",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "α2-adrenoceptor antagonist (Pausinystalia yohimbe), \"stubborn fat\" zsírdepók mobilizálására használt sport-supplement.",
      "en": "α2-adrenoceptor antagonist (Pausinystalia yohimbe), used as a supplement to mobilize \"stubborn fat\" depots.",
      "pl": "Antagonista receptora α2-adrenergicznego (Pausinystalia yohimbe), używany jako suplement do mobilizacji \"stubborn fat\"."
    },
    "tier": 3,
    "wadaStatus": null,
    "subCategory": "fat",
    "subSection": "stim",
    "formFactors": ["oral"]
  },
  {
    "id": "clenbuterol",
    "name": "Clenbuterol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Szelektív β2-adrenoceptor agonista, EU veterinär-Rx asztmás lovaknak. Bodybuilding off-label fat-loss + izom-megtartás.",
      "en": "Selective β2-adrenoceptor agonist, EU veterinary Rx for equine asthma. Off-label bodybuilding use for fat loss + muscle sparing.",
      "pl": "Selektywny agonista β2, weterynaryjny w UE dla astmy końskiej. Off-label kulturystyka dla redukcji + ochrony mięśni."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "beta",
    "formFactors": ["oral"]
  },
  {
    "id": "albuterol",
    "name": "Albuterol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "FDA-approved szelektív β2-agonist asztma-Rx (Ventolin). Rövidebb felezésű, biztonságosabb Clenbuterol-alternatíva.",
      "en": "FDA-approved selective β2-agonist asthma Rx (Ventolin). Shorter half-life, safer Clenbuterol alternative.",
      "pl": "Selektywny agonista β2 dla astmy zatwierdzony przez FDA (Ventolin). Krótszy okres półtrwania, bezpieczniejsza alternatywa."
    },
    "tier": 5,
    "wadaStatus": "monitored",
    "subCategory": "fat",
    "subSection": "beta",
    "formFactors": ["oral", "aq"]
  },
  {
    "id": "winstrol-info",
    "name": "Winstrol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Stanozolol, 17α-alkilált DHT-származék. Klasszikus \"cutting\" AAS, SHBG-szuppresszor.",
      "en": "Stanozolol, 17α-alkylated DHT derivative. Classic \"cutting\" AAS, SHBG suppressor.",
      "pl": "Stanozolol, 17α-alkilowana pochodna DHT. Klasyczny \"cutting\" AAS, supresor SHBG."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "variantCount": 2,
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral", "aq"]
  },
  {
    "id": "nandrolone-info",
    "name": "Nandrolone",
    "image": "/performance/oil-vial-yellow.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Nandrolone Decanoate (Deca-Durabolin), 19-nor-AAS. Klasszikus \"bulking\" AAS, ízületi recovery hatással.",
      "en": "Nandrolone Decanoate (Deca-Durabolin), 19-nor AAS. Classic \"bulking\" AAS with joint recovery effect.",
      "pl": "Nandrolone Decanoate (Deca-Durabolin), 19-nor AAS. Klasyczny \"bulking\" AAS z efektem regeneracji stawów."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "19nor",
    "subSection": "nandro",
    "formFactors": ["oil"]
  },
  {
    "id": "dianabol-info",
    "name": "Dianabol",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Methandrostenolone, 17α-alkilált orális AAS. Klasszikus \"kickstart\" bulking szteroid, magas hepatotoxicitással.",
      "en": "Methandrostenolone, 17α-alkylated oral AAS. Classic \"kickstart\" bulking steroid with high hepatotoxicity.",
      "pl": "Methandrostenolone, 17α-alkilowany doustny AAS. Klasyczny \"kickstart\" bulking z wysoką hepatotoksycznością."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "test",
    "subSection": "17a-alkyl",
    "formFactors": ["oral", "oil"]
  },
  {
    "id": "methylstenbolone",
    "name": "Methylstenbolone",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Designer prohormon (2,3α-epitio-17α-methylstenbolone). Erős AR-agonista, magas hepatotoxicitással.",
      "en": "Designer prohormone (2,3α-epithio-17α-methylstenbolone). Strong AR agonist with high hepatotoxicity.",
      "pl": "Designer prohormon. Silny agonista AR z wysoką hepatotoksycznością."
    },
    "tier": 2,
    "wadaStatus": "banned",
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral"]
  },
  {
    "id": "masteron",
    "name": "Masteron (Drostanolone)",
    "image": "/performance/oil-vial-yellow.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Drostanolone, 2α-metil-DHT injektábilis AAS. Eredetileg FDA-jóváhagyott (Drolban) inoperábilis emlőkarcinómára; ma kizárólag UGL. Klasszikus \"hardening\" cutting-szteroid.",
      "en": "Drostanolone, 2α-methyl-DHT injectable AAS. Originally FDA-approved (Drolban) for inoperable breast cancer; today UGL only. Classic \"hardening\" cutting steroid.",
      "pl": "Drostanolon, iniekcyjny AAS 2α-metylo-DHT. Pierwotnie zatwierdzony przez FDA (Drolban) na nieoperacyjnego raka piersi; dziś tylko UGL. Klasyczny \"hardening\" steryd na cięcie."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "variantCount": 2,
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oil"]
  },
  {
    "id": "primobolan",
    "name": "Primobolan (Methenolone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Methenolone, 1-metil-DHT \"enyhe\" AAS két ester-formátumban: orális acetate (alacsony bio) és Bayer Primobolan Depot enantate (DE/ES Rx). Klasszikus cutting-szteroid.",
      "en": "Methenolone, 1-methyl-DHT \"mild\" AAS in two ester formats: oral acetate (low bio) and Bayer Primobolan Depot enanthate (DE/ES Rx). Classic cutting steroid.",
      "pl": "Methenolone, \"łagodny\" AAS 1-metylo-DHT w dwóch formach: doustny octan (niska bio) i Bayer Primobolan Depot enantat (DE/ES Rx). Klasyczny steryd na cięcie."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "variantCount": 2,
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral", "oil"]
  },
  {
    "id": "anadrol",
    "name": "Anadrol (Oxymetholone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Oxymetholone, 17α-metil-DHT orális AAS. FDA-jóváhagyott (Anadrol-50) aplasztikus anémiára. Klasszikus \"wet\" bulking-szteroid, magas hepatotoxicitás + paradox estrogén-szerű mellékhatások.",
      "en": "Oxymetholone, 17α-methyl-DHT oral AAS. FDA-approved (Anadrol-50) for aplastic anemia. Classic \"wet\" bulking steroid with high hepatotoxicity + paradoxical estrogen-like side effects.",
      "pl": "Oksymetholon, doustny AAS 17α-metylo-DHT. Zatwierdzony przez FDA (Anadrol-50) na niedokrwistość aplastyczną. Klasyczny \"mokry\" steryd bulkingowy z wysoką hepatotoksycznością + paradoksalne estrogenopodobne efekty uboczne."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral"]
  },
  {
    "id": "proviron",
    "name": "Proviron (Mesterolone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Mesterolone, 1α-metil-DHT orális androgén Bayer Rx (Proviron-25, DE/AT/PL). Adjunkt-szerep AAS-ciklus alatt — SHBG-szuppresszor + enyhe AI, NEM standalone bulker.",
      "en": "Mesterolone, 1α-methyl-DHT oral androgen Bayer Rx (Proviron-25, DE/AT/PL). Adjunct role during AAS cycle — SHBG suppressor + mild AI, NOT a standalone bulker.",
      "pl": "Mesterolon, doustny androgen 1α-metylo-DHT Bayer Rx (Proviron-25, DE/AT/PL). Rola adiunkt podczas cyklu AAS — supresor SHBG + łagodny AI, NIE samodzielny bulker."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oral"]
  },
  {
    "id": "dhb",
    "name": "DHB (Dihydroboldenone)",
    "image": "/performance/oil-vial-orange.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "1-Testosterone Cypionát, designer-AAS injektábilis. Boldenone 5α-redukált analógja. Csak UGL, NEM aromatizál, alacsony hepatotoxicitás — DE notórius PIP miatt.",
      "en": "1-Testosterone Cypionate, injectable designer AAS. 5α-reduced analog of Boldenone. UGL only, does NOT aromatize, low hepatotoxicity — but notorious for severe PIP.",
      "pl": "1-Testosteron Cypionat, iniekcyjny designer AAS. Analog Boldenonu 5α-zredukowany. Tylko UGL, NIE aromatyzuje, niska hepatotoksyczność — ALE notoryczny ze względu na silny PIP."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "dht",
    "subSection": "klasszikus",
    "formFactors": ["oil"]
  },
  {
    "id": "hgh-info",
    "name": "HGH",
    "image": "/performance/water-vial.png",
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Rekombináns humán növekedési hormon (rhGH, Somatropin). Exogén GH-pótlás, sport-doppingként WADA-tiltott.",
      "en": "Recombinant human growth hormone (rhGH, Somatropin). Exogenous GH replacement, banned by WADA as doping.",
      "pl": "Rekombinowany ludzki hormon wzrostu (rhGH, Somatropin). Egzogenne wsparcie GH, zakazany przez WADA."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "gh-axis",
    "formFactors": ["aq"]
  },
  {
    "id": "epo-info",
    "name": "EPO",
    "image": "/performance/water-vial.png",
    "accentColor": "#ef4444",
    "tagColor": "rgba(239,68,68,0.18)",
    "shortDesc": {
      "hu": "Rekombináns humán eritropoetin (rhEPO). Vörösvértest-termelés stimuláló, endurance-sportokban WADA-tiltott.",
      "en": "Recombinant human erythropoietin (rhEPO). Stimulates red blood cell production, WADA-banned in endurance sports.",
      "pl": "Rekombinowana ludzka erytropoetyna (rhEPO). Stymuluje produkcję erytrocytów, zakazana przez WADA."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "gh-axis",
    "formFactors": ["aq"]
  },
  {
    "id": "dnp-info",
    "name": "DNP",
    "image": "/performance/tablet-pile-yellow.png",
    "accentColor": "#ef4444",
    "tagColor": "rgba(239,68,68,0.18)",
    "shortDesc": {
      "hu": "NE HASZNÁLD. 2,4-dinitrofenol, halálos kimenetelű hipertermia kockázattal. Edukatív kontextus a veszélyek megismertetésére.",
      "en": "DO NOT USE. 2,4-dinitrophenol, with risk of fatal hyperthermia. Educational context to make the dangers known.",
      "pl": "NIE STOSUJ. 2,4-dinitrofenol, ryzyko śmiertelnej hipertermii. Kontekst edukacyjny."
    },
    "tier": 1,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "mito",
    "formFactors": ["oral"]
  }
]

export const performanceLibrary = {
  id: "performance",
  name: {
  "hu": "Teljesítményfokozók Könyvtár",
  "en": "Performance Compounds Library",
  "pl": "Biblioteka środków wydajnościowych"
},
  description: {
  "hu": "Sport- és testépítési teljesítményfokozók edukatív áttekintése · harm-reduction megközelítés, peer-reviewed forrásokkal",
  "en": "Educational overview of sport and bodybuilding performance compounds · harm-reduction framing, peer-reviewed sources",
  "pl": "Edukacyjny przegląd środków wydajnościowych dla sportu i kulturystyki · podejście redukcji szkód, źródła recenzowane"
},
  accent: "#00ff99",
  meta: LIBRARY_ENTRY_META,
  categories: CATEGORIES,
  subCategories: CATEGORIES,
  subSections: SUB_SECTIONS,
  formFactors: FORM_FACTORS,
  entryCategoryMap: PERFORMANCE_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
  "hu": "Teljesítményterületek",
  "en": "Performance Domains",
  "pl": "Domeny wydajnościowe"
},
  effectsSubtitle: {
  "hu": "Anabolikus, sympathomimetic és metabolikus hatásprofilok tudományos háttérrel",
  "en": "Anabolic, sympathomimetic and metabolic effect profiles with scientific background",
  "pl": "Profile anaboliczne, sympatomimetyczne i metaboliczne z podstawami naukowymi"
},
  labels: {
  "topTitle": {
    "hu": "10 Legnépszerűbb Teljesítményfokozó",
    "en": "Top 10 Most Discussed Performance Compounds",
    "pl": "10 najpopularniejszych środków wydajnościowych"
  },
  "allTitle": {
    "hu": "Összes Teljesítményfokozó",
    "en": "All Performance Compounds",
    "pl": "Wszystkie środki wydajnościowe"
  },
  "allCount": {
    "hu": "teljesítményfokozó",
    "en": "performance compounds",
    "pl": "środków wydajnościowych"
  },
  "helpBody": {
    "hu": "Lépj kapcsolatba egy tanácsadóval Telegramon. A teljesítményfokozó szerek harm-reduction megközelítéssel kerültek bemutatásra, peer-reviewed alapon.",
    "en": "Reach out to an advisor on Telegram. Performance compounds are presented with a harm-reduction approach, based on peer-reviewed evidence.",
    "pl": "Skontaktuj się z doradcą na Telegramie. Środki wydajnościowe są przedstawione z podejściem redukcji szkód, w oparciu o dowody recenzowane."
  },
  "relatedLabel": {
    "hu": "Kapcsolódó hatóanyagok",
    "en": "Related compounds",
    "pl": "Powiązane substancje"
  },
  "contactTitle": {
    "hu": "Van kérdésed a teljesítményfokozókkal kapcsolatban?",
    "en": "Have a question about performance compounds?",
    "pl": "Masz pytanie o środki wydajnościowe?"
  }
},
  features: {
  "faq": false,
  "doseRecommendations": false,
  "calculator": false,
  "qualityGrid": false,
  "interactions": false,
  "quickStart": false,
  "labTerminal": true,
  "chemicalFormulaPlaceholder": false
},
}

// Phase 12 per-lang: Vite template-literal-import emits one chunk per
// (lang, id) combo because the static prefix ./entries/ lets Vite glob
// every matching file at build time.
export async function loadEntry(id, lang) {
  const mod = await import(`./entries/${lang}/${id}.js`)
  return mod.default
}

export { CATEGORIES, PERFORMANCE_CATEGORIES, PERFORMANCE_SUB_CATEGORIES, SUB_SECTIONS, getPerformanceCategories, getPerformanceSubCategory, getResearchLevel, EFFECT_CATEGORIES, FORM_FACTORS }
