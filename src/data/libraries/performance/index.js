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
    "subCategory": "test",
    "subSection": "inj",
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
    "variantCount": 3,
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
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "FDA-approved szelektív β2-agonist asztma-Rx (Ventolin). Rövidebb felezésű, biztonságosabb Clenbuterol-alternatíva. Multi-variant: oral tabletta + MDI inhaláló (Sub-Task 6 retrofit).",
      "en": "FDA-approved selective β2-agonist asthma Rx (Ventolin). Shorter half-life, safer Clenbuterol alternative. Multi-variant: oral tablet + MDI inhaler (Sub-Task 6 retrofit).",
      "pl": "Selektywny agonista β2 dla astmy zatwierdzony przez FDA (Ventolin). Krótszy okres półtrwania, bezpieczniejsza alternatywa. Multi-variant: tabletka doustna + inhalator MDI (Sub-Task 6 retrofit)."
    },
    "tier": 5,
    "wadaStatus": "monitored",
    "variantCount": 2,
    "subCategory": "fat",
    "subSection": "beta",
    "formFactors": ["oral", "inhaled"]
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
    "variantCount": 2,
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
    "variantCount": 2,
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
    "image": "/performance/oil-vial-yellow.png",
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
    "id": "halotestin",
    "name": "Halotestin (Fluoxymesterone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Fluoxymesterone, 9α-fluoro-17α-metil-T orális AAS. AAS-ek közül a legmagasabb androgén-aktivitás. Boksz/powerlifting pre-competition strength-amplifier MINIMÁLIS izomtömeg-építéssel.",
      "en": "Fluoxymesterone, 9α-fluoro-17α-methyl-T oral AAS. Highest androgenic activity among AAS. Boxing/powerlifting pre-competition strength-amplifier with MINIMAL muscle building.",
      "pl": "Fluoxymesterone, doustny AAS 9α-fluoro-17α-metylo-T. Najwyższa aktywność androgenna wśród AAS. Boks/powerlifting pre-competition strength-amplifier z MINIMALNYM budowaniem masy."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "test",
    "subSection": "17a-alkyl",
    "formFactors": ["oral"]
  },
  {
    "id": "turinabol",
    "name": "Turinabol (4-Chlorodehydromethyltestosterone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Oral-Turinabol (CDMT), Jenapharm 1962. Hírhedten az NDK állami dopping-program (\"Komplex 08\", 1968-1989) fő szere. Hosszú-távú detection-metabolitok 12-18 hónap.",
      "en": "Oral-Turinabol (CDMT), Jenapharm 1962. Infamous main agent of the GDR state doping program (\"Komplex 08\", 1968-1989). Long-term detection metabolites 12-18 months.",
      "pl": "Oral-Turinabol (CDMT), Jenapharm 1962. Niesławny główny środek programu dopingowego NRD (\"Komplex 08\", 1968-1989). Długoterminowe metabolity detekcyjne 12-18 miesięcy."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "test",
    "subSection": "17a-alkyl",
    "formFactors": ["oral"]
  },
  {
    "id": "methyltestosterone",
    "name": "Methyltestosterone",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "17α-metil-testosterone, az ELSŐ szintetizált orális AAS (Ruzicka 1935). FDA Rx (Android, Methitest). Bodybuilding-ben elavult, modern alternatívák (Anavar/Dianabol) preferáltak.",
      "en": "17α-methyl-testosterone, the FIRST synthesized oral AAS (Ruzicka 1935). FDA Rx (Android, Methitest). Obsolete in bodybuilding, modern alternatives (Anavar/Dianabol) preferred.",
      "pl": "17α-metylo-testosteron, PIERWSZY zsyntetyzowany doustny AAS (Ruzicka 1935). FDA Rx (Android, Methitest). Przestarzały w kulturystyce, nowoczesne alternatywy (Anavar/Dianabol) preferowane."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "test",
    "subSection": "17a-alkyl",
    "formFactors": ["oral"]
  },
  {
    "id": "equipoise",
    "name": "Equipoise (Boldenone Undecylenate)",
    "image": "/performance/oil-vial-orange.png",
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Boldenone Undecylenate, veterinary-only injektábilis AAS (Fort Dodge 1972-2008). Lassú, stabil lean gains; aromatizál fél-Test arányban. \"Étvágy-stimuláns\" reputation.",
      "en": "Boldenone Undecylenate, veterinary-only injectable AAS (Fort Dodge 1972-2008). Slow, stable lean gains; aromatizes at half-Test rate. \"Appetite-stimulant\" reputation.",
      "pl": "Boldenone Undecylenat, iniekcyjny AAS tylko-weterynaryjny (Fort Dodge 1972-2008). Wolne, stabilne lean gains; aromatyzuje we wskaźniku połowy Test. Reputacja \"stymulanta apetytu\"."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "test",
    "subSection": "inj",
    "formFactors": ["oil"]
  },
  {
    "id": "thg",
    "name": "THG (Tetrahydrogestrinone)",
    "image": "/performance/oil-vial-orange.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "BALCO designer-AAS (\"The Clear\"), 2003-ban Catlin felfedezte. Marion Jones, Tim Montgomery, Barry Bonds szkandallum. Ma USA Schedule III, sosem volt Rx.",
      "en": "BALCO designer AAS (\"The Clear\"), discovered by Catlin in 2003. Marion Jones, Tim Montgomery, Barry Bonds scandal. Today USA Schedule III, never an Rx.",
      "pl": "BALCO designer AAS (\"The Clear\"), odkryty przez Catlina w 2003. Skandal Marion Jones, Tim Montgomery, Barry Bonds. Dziś USA Schedule III, nigdy nie był Rx."
    },
    "tier": 2,
    "wadaStatus": "banned",
    "subCategory": "test",
    "subSection": "inj",
    "formFactors": ["oil"]
  },
  {
    "id": "ment-test",
    "name": "MENT (Trestolone) — szintetikus androgén frame",
    "image": "/performance/oil-vial-yellow.png",
    "accentColor": "#1D9E75",
    "tagColor": "rgba(29,158,117,0.18)",
    "shortDesc": {
      "hu": "Trestolone (7α-metil-19-nortestosterone), Population Council férfi-fogamzásgátló-jelölt. ~8-10x AR-affinitás vs T. Cross-framed: szintetikus androgén frame (Test-oszlop).",
      "en": "Trestolone (7α-methyl-19-nortestosterone), Population Council male contraceptive candidate. ~8-10x AR affinity vs T. Cross-framed: synthetic androgen frame (Test column).",
      "pl": "Trestolon (7α-metylo-19-nortestosteron), kandydat antykoncepcji męskiej Population Council. ~8-10x powinowactwo AR vs T. Cross-framed: frame syntetycznego androgenu (kolumna Test)."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "variantCount": 2,
    "subCategory": "test",
    "subSection": "synth",
    "formFactors": ["oil"]
  },
  {
    "id": "ment-19nor",
    "name": "MENT (Trestolone) — 19-Nor progestin frame",
    "image": "/performance/oil-vial-yellow.png",
    "accentColor": "#D85A30",
    "tagColor": "rgba(216,90,48,0.18)",
    "shortDesc": {
      "hu": "Trestolone 19-Nor framework progesztogén-emphasis: közepes PR-affinitás → spermatogenezis-szuppresszió + bodybuilding prolaktin-monitor. Cross-framed: ment-test szintetikus androgén külön entry.",
      "en": "Trestolone 19-Nor framework progestogen emphasis: moderate PR affinity → spermatogenesis suppression + bodybuilding prolactin monitoring. Cross-framed: ment-test synthetic androgen separate entry.",
      "pl": "Trestolon w ramie 19-Nor progestagen: umiarkowane powinowactwo PR → supresja spermatogenezy + monitor prolaktyny w kulturystyce. Cross-framed: ment-test syntetyczny androgen osobny wpis."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "variantCount": 2,
    "subCategory": "19nor",
    "subSection": "progestin",
    "formFactors": ["oil"]
  },
  {
    "id": "gestrinone",
    "name": "Gestrinone (Dimetrose, Nemestran)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D85A30",
    "tagColor": "rgba(216,90,48,0.18)",
    "shortDesc": {
      "hu": "13β-etil-17α-etinil-19-nor-trien származék. Roussel-Uclaf 1986 endometriózis-Rx (Dimetrose/Nemestran). Anti-progesztin/progesztin mixed + gyenge androgén. Bodybuilding-kontextusban ritka, UGL néha SARM-szerűként marketingelt.",
      "en": "13β-ethyl-17α-ethynyl-19-nor-triene derivative. Roussel-Uclaf 1986 endometriosis Rx (Dimetrose/Nemestran). Anti-progestin/progestin mixed + weak androgen. Rare in bodybuilding context, UGL sometimes markets as SARM-like.",
      "pl": "Pochodna 13β-etylo-17α-etynylo-19-nor-trienu. Roussel-Uclaf 1986 Rx endometriozy (Dimetrose/Nemestran). Anti-progestin/progestin mixed + słaby androgen. Rzadki w kulturystyce, UGL czasem marketinguje jako SARM-podobny."
    },
    "tier": 2,
    "wadaStatus": "banned",
    "subCategory": "19nor",
    "subSection": "progestin",
    "formFactors": ["oral"]
  },
  {
    "id": "rad-140",
    "name": "RAD-140 (Testolone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#9333ea",
    "tagColor": "rgba(147,51,234,0.18)",
    "shortDesc": {
      "hu": "Non-szteroidal SARM, Radius Health 2010. Phase II breast cancer + cachexia trial. Erős izomtömeg-építő AR-szelektivitással, DE 2017-2020 6+ hepatotoxicitás-esetjelentés (Hilal 2020). WADA tiltott.",
      "en": "Non-steroidal SARM, Radius Health 2010. Phase II breast cancer + cachexia trial. Strong muscle-builder with AR selectivity, BUT 2017-2020 6+ hepatotoxicity case reports (Hilal 2020). WADA-banned.",
      "pl": "Niesterydowy SARM, Radius Health 2010. Faza II badanie raka piersi + kacheksji. Silny budowniczy mięśni z selektywnością AR, ALE 2017-2020 6+ raportów hepatotoksyczności (Hilal 2020). Zakazany WADA."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "sarm",
    "subSection": "non-steroid",
    "formFactors": ["oral"]
  },
  {
    "id": "lgd-4033",
    "name": "LGD-4033 (Ligandrol)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#9333ea",
    "tagColor": "rgba(147,51,234,0.18)",
    "shortDesc": {
      "hu": "Non-szteroidal SARM, Ligand Pharma 2007. Phase I egészséges férfi-alanyokban (Basaria 2013) — 1,21 kg lean mass @ 1 mg/nap. Második leghíresebb SARM. 12+ DILI esetjelentés (Vilaca 2018). WADA tiltott.",
      "en": "Non-steroidal SARM, Ligand Pharma 2007. Phase I in healthy male subjects (Basaria 2013) — 1.21 kg lean mass @ 1 mg/day. Second most famous SARM. 12+ DILI case reports (Vilaca 2018). WADA-banned.",
      "pl": "Niesterydowy SARM, Ligand Pharma 2007. Faza I u zdrowych męskich badanych (Basaria 2013) — 1,21 kg lean mass @ 1 mg/dzień. Drugi najsłynniejszy SARM. 12+ raportów DILI (Vilaca 2018). Zakazany WADA."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "sarm",
    "subSection": "non-steroid",
    "formFactors": ["oral"]
  },
  {
    "id": "ostarine",
    "name": "MK-2866 (Ostarine, Enobosarm)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#9333ea",
    "tagColor": "rgba(147,51,234,0.18)",
    "shortDesc": {
      "hu": "Non-szteroidal SARM (Enobosarm), GTx 2007. Legtöbb klinikai trial-adatú SARM: Phase II cachexia (Dalton 2011, 159 páciens) + Phase III POWER. Legnépszerűbb SARM, 'lágy első-SARM' UGL-marketing. WADA tiltott.",
      "en": "Non-steroidal SARM (Enobosarm), GTx 2007. Most clinical trial data SARM: Phase II cachexia (Dalton 2011, 159 patients) + Phase III POWER. Most popular SARM, 'soft first-SARM' UGL marketing. WADA-banned.",
      "pl": "Niesterydowy SARM (Enobosarm), GTx 2007. SARM z największą ilością danych klinicznych: Faza II cachexia (Dalton 2011, 159 pacjentów) + Faza III POWER. Najpopularniejszy SARM, 'łagodny pierwszy SARM' marketing UGL. Zakazany WADA."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "sarm",
    "subSection": "non-steroid",
    "formFactors": ["oral"]
  },
  {
    "id": "yk-11",
    "name": "YK-11 (Myostatin Inhibitor SARM)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#9333ea",
    "tagColor": "rgba(147,51,234,0.18)",
    "shortDesc": {
      "hu": "Szteroid-szerű SARM EGYEDÜLI dual-mechanizmussal: AR-agonista + myostatin-pathway inhibitor (follistatin-felregulálás, Kanno 2013). 17α-szteroid-szerű hepatotoxicitás-profil. Klinikai precedens NINCS emberben. WADA tiltott.",
      "en": "Steroid-like SARM with UNIQUE dual mechanism: AR agonist + myostatin pathway inhibitor (follistatin upregulation, Kanno 2013). 17α-steroid-like hepatotoxicity profile. No clinical precedent in humans. WADA-banned.",
      "pl": "Sterydopodobny SARM z UNIKALNYM podwójnym mechanizmem: agonista AR + inhibitor szlaku miostatyny (upregulation follistatyny, Kanno 2013). Profil hepatotoksyczności 17α-sterydopodobny. Brak precedensu klinicznego u ludzi. Zakazany WADA."
    },
    "tier": 2,
    "wadaStatus": "banned",
    "subCategory": "sarm",
    "subSection": "steroidal",
    "formFactors": ["oral"]
  },
  {
    "id": "s4",
    "name": "S4 (Andarine, GTx-007)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#9333ea",
    "tagColor": "rgba(147,51,234,0.18)",
    "shortDesc": {
      "hu": "Non-szteroidal SARM, GTx Inc 2005. EGYEDI mellékhatás: dose-dependent sárga látás + éjszakai vakság (Marhefka 2004 — retinal opszin-binding). 'Cutting SARM' hírnévvel. WADA tiltott.",
      "en": "Non-steroidal SARM, GTx Inc 2005. UNIQUE side effect: dose-dependent yellow vision + night blindness (Marhefka 2004 — retinal opsin binding). 'Cutting SARM' reputation. WADA-banned.",
      "pl": "Niesterydowy SARM, GTx Inc 2005. UNIKALNY skutek uboczny: zależne od dawki żółte widzenie + nocna ślepota (Marhefka 2004 — wiązanie opsynu siatkówki). Reputacja 'cutting SARM'. Zakazany WADA."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "sarm",
    "subSection": "non-steroid",
    "formFactors": ["oral"]
  },
  {
    "id": "s23",
    "name": "S23 (Most Potent SARM)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#9333ea",
    "tagColor": "rgba(147,51,234,0.18)",
    "shortDesc": {
      "hu": "Non-szteroidal SARM, az SARM-osztály legpotensebb compoundja (~95% Test AR-binding, Jones 2009). Férfi-fogamzásgátló-jelölt (Jones 2010 rat-trial). Teljes HPTA-szuppresszió + intenzív mellékhatás. WADA tiltott.",
      "en": "Non-steroidal SARM, most potent compound of the SARM class (~95% Test AR-binding, Jones 2009). Male contraceptive candidate (Jones 2010 rat trial). Full HPTA suppression + intense side effects. WADA-banned.",
      "pl": "Niesterydowy SARM, najbardziej silny compound klasy SARM (~95% Test AR-binding, Jones 2009). Kandydat antykoncepcji męskiej (Jones 2010 rat trial). Pełna supresja HPTA + intensywne skutki uboczne. Zakazany WADA."
    },
    "tier": 2,
    "wadaStatus": "banned",
    "subCategory": "sarm",
    "subSection": "non-steroid",
    "formFactors": ["oral"]
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
  },
  {
    "id": "nolvadex",
    "name": "Nolvadex (Tamoxifen)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Tamoxifen-citrát, 1962 ICI szintézis, FDA-jóváhagyott (1977) ER+ emlőkarcinómára. Az AAS-PCT golden-standard SERM — pituiter ER-blokád → LH/FSH-disinhibíció → endogén testosterone-recovery.",
      "en": "Tamoxifen citrate, ICI 1962 synthesis, FDA-approved (1977) for ER+ breast cancer. The AAS-PCT golden-standard SERM — pituitary ER blockade → LH/FSH disinhibition → endogenous testosterone recovery.",
      "pl": "Cytrynian tamoksyfenu, synteza ICI 1962, zatwierdzony przez FDA (1977) dla ER+ raka piersi. Złoty standard PCT po AAS — blokada ER w przysadce → disinhibicja LH/FSH → odbudowa endogennego testosteronu."
    },
    "tier": 5,
    "wadaStatus": "restricted",
    "subCategory": "pct",
    "subSection": "serm",
    "formFactors": ["oral"]
  },
  {
    "id": "clomid",
    "name": "Clomid (Clomiphene Citrate)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Clomiphene-citrát, Merrell 1956 szintézis, FDA-jóváhagyott (1967) női infertilitásra (ovulációs disfunkció). Racém keverék (zuclo + enclomiphene) — utóbbi a PCT-aktív fél.",
      "en": "Clomiphene citrate, Merrell 1956 synthesis, FDA-approved (1967) for female infertility (ovulatory dysfunction). Racemic mixture (zuclo + enclomiphene) — the latter is the PCT-active half.",
      "pl": "Cytrynian klomifenu, synteza Merrell 1956, zatwierdzony przez FDA (1967) dla niepłodności kobiet (dysfunkcja owulacji). Mieszanina racemiczna (zuklo + enklomifen) — ten ostatni jest aktywną częścią PCT."
    },
    "tier": 5,
    "wadaStatus": "restricted",
    "subCategory": "pct",
    "subSection": "serm",
    "formFactors": ["oral"]
  },
  {
    "id": "enclomiphene",
    "name": "Enclomiphene (Androxal)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "A clomiphene tiszta trans-izomerje — Repros Therapeutics 2014-2016 Phase III hypogonadism trial-jelölt. Tisztább SERM-profil mint a Clomid (zuclomiphene-mentes), DE FDA-CRL 2016 → nem törzskönyvezett.",
      "en": "Pure trans-isomer of clomiphene — Repros Therapeutics 2014-2016 Phase III hypogonadism candidate. Cleaner SERM profile than Clomid (zuclomiphene-free), BUT FDA CRL 2016 → not approved.",
      "pl": "Czysty trans-izomer klomifenu — kandydat Repros Therapeutics z badania Phase III hipogonadyzmu 2014-2016. Czystszy profil SERM niż Clomid (bez zuklomifenu), ALE FDA CRL 2016 → nie zatwierdzony."
    },
    "tier": 3,
    "wadaStatus": "restricted",
    "subCategory": "pct",
    "subSection": "serm",
    "formFactors": ["oral"]
  },
  {
    "id": "raloxifene",
    "name": "Raloxifene (Evista)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Benzothiophene-SERM, FDA-jóváhagyott (1997 Lilly) postmenopauzális osteoporózisra + ER+ emlőkarcinóma chemoprevencióra. AAS-kontextusban niche használat: létező gynecomastia reverzálása erősebb mell-szelektivitással mint a Nolvadex.",
      "en": "Benzothiophene SERM, FDA-approved (1997 Lilly) for postmenopausal osteoporosis + ER+ breast cancer chemoprevention. AAS-context niche use: existing gynecomastia reversal with stronger breast-selectivity vs Nolvadex.",
      "pl": "SERM benzotiofenowy, zatwierdzony przez FDA (1997 Lilly) dla osteoporozy pomenopauzalnej + chemoprewencji ER+ raka piersi. Niszowe użycie w kontekście AAS: cofanie istniejącej ginekomastii z silniejszą selektywnością piersi vs Nolvadex."
    },
    "tier": 3,
    "wadaStatus": "restricted",
    "subCategory": "pct",
    "subSection": "serm",
    "formFactors": ["oral"]
  },
  {
    "id": "hcg-perf",
    "name": "HCG (Pregnyl / Novarel / Choragon)",
    "image": "/performance/water-vial.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Humán Chorionic Gonadotropin — LH-strukturális analóg, Leydig-sejt LHCGR-receptor stimulus. AAS-PCT bridge a testikulár-atrófia ellen és HPTA-restart-hoz. (Cross-frame: a future peptid-libben `hcg-peptid` fertility-clinic-framing-gel jön.)",
      "en": "Human Chorionic Gonadotropin — LH structural analog, Leydig-cell LHCGR receptor stimulus. AAS-PCT bridge against testicular atrophy and for HPTA restart. (Cross-frame: future peptid library will add `hcg-peptid` with fertility-clinic framing.)",
      "pl": "Ludzka Gonadotropina Kosmówkowa — analog strukturalny LH, stymulator receptora LHCGR komórek Leydiga. Pomost PCT po AAS przeciwko atrofii jąder i restartowi HPTA. (Cross-frame: w przyszłej bibliotece peptydów dojdzie `hcg-peptid` z framingiem fertility-clinic.)"
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "gonad",
    "formFactors": ["aq"]
  },
  {
    "id": "hmg-perf",
    "name": "HMG (Menopur / Pergonal)",
    "image": "/performance/water-vial.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Humán Menopauzális Gonadotropin — vizeletből kinyert FSH + LH 75/75 IU keverék. AAS-PCT-ben: teljes HPG-tengely restart (Sertoli-FSH-támogatás is, NEM csak Leydig-LH mint a HCG). Pergonal kivonva 2005-ben, Menopur modern alternatíva.",
      "en": "Human Menopausal Gonadotropin — urinary-extracted FSH + LH 75/75 IU mixture. In AAS-PCT: full HPG axis restart (Sertoli FSH support too, not just Leydig LH like HCG). Pergonal withdrawn 2005, Menopur modern alternative.",
      "pl": "Ludzka Gonadotropina Menopauzalna — mieszanina FSH + LH 75/75 IU ekstrahowana z moczu. W PCT po AAS: pełny restart osi HPG (wsparcie FSH dla Sertoli, nie tylko LH dla Leydiga jak w HCG). Pergonal wycofany 2005, Menopur nowoczesna alternatywa."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "gonad",
    "formFactors": ["aq"]
  },
  {
    "id": "fsh-rec-perf",
    "name": "FSH-rec (Gonal-F / Puregon)",
    "image": "/performance/water-vial.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Rekombináns FSH (CHO-expresszált) — szelektív Sertoli-FSHR stimulus, NINCS LH-aktivitás. AAS-PCT niche: azoospermia-recovery + Sertoli-támogatás HCG-LH mellett. Drága (€300+/75 IU vial EU).",
      "en": "Recombinant FSH (CHO-expressed) — selective Sertoli FSHR stimulus, NO LH activity. AAS-PCT niche: azoospermia recovery + Sertoli support alongside HCG LH. Expensive (€300+/75 IU vial EU).",
      "pl": "Rekombinowany FSH (ekspresja CHO) — selektywna stymulacja Sertoli-FSHR, BRAK aktywności LH. Niszowe użycie w PCT po AAS: cofanie azoospermii + wsparcie Sertoli obok HCG-LH. Drogie (€300+/fiolka 75 IU UE)."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "gonad",
    "formFactors": ["aq"]
  },
  {
    "id": "anastrozol",
    "name": "Anastrozol (Arimidex)",
    "image": "/pharmaceutical/blister-white-oval.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Triazole-class non-steroidal aromatáz-gátló (AI). FDA-jóváhagyott (1995 AstraZeneca) postmenopauzális ER+ emlőkarcinómára. AAS-ciklus E2-control golden-standard, 0.25-1 mg EOD-2x/hét bloodwork-titrálva.",
      "en": "Triazole-class non-steroidal aromatase inhibitor (AI). FDA-approved (1995 AstraZeneca) for postmenopausal ER+ breast cancer. AAS-cycle E2-control golden-standard, 0.25-1 mg EOD-2x/week titrated by bloodwork.",
      "pl": "Triazolowy niesteroidowy inhibitor aromatazy (AI). Zatwierdzony przez FDA (1995 AstraZeneca) dla pomenopauzalnego ER+ raka piersi. Złoty standard kontroli E2 podczas cykli AAS, 0,25-1 mg EOD-2x/tydzień miareczkowany na podstawie badań."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "ai",
    "formFactors": ["oral"]
  },
  {
    "id": "letrozol",
    "name": "Letrozol (Femara)",
    "image": "/pharmaceutical/blister-white-oval.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Triazole-class non-steroidal AI, az Anastrozolnál erősebb (~99% E2-szuppresszió 2.5 mg/nap). FDA-jóváhagyott (1997 Novartis). AAS-niche: hard-suppression Tren+Mast E2-control + gynecomastia-reverzálás (2.5 mg/nap 2-3 hét).",
      "en": "Triazole-class non-steroidal AI, stronger than anastrozole (~99% E2 suppression at 2.5 mg/day). FDA-approved (1997 Novartis). AAS-niche: hard-suppression Tren+Mast E2-control + gynecomastia reversal (2.5 mg/day × 2-3 weeks).",
      "pl": "Triazolowy niesteroidowy AI, silniejszy od Anastrozolu (~99% supresji E2 przy 2,5 mg/dzień). Zatwierdzony przez FDA (1997 Novartis). Nisza AAS: kontrola E2 przy ciężkiej supresji Tren+Mast + cofanie ginekomastii (2,5 mg/dzień × 2-3 tygodnie)."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "ai",
    "formFactors": ["oral"]
  },
  {
    "id": "exemestane",
    "name": "Exemestane (Aromasin)",
    "image": "/pharmaceutical/blister-white-oval.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Steroidal \"suicide\" (irreverzibilis) aromatáz-gátló. FDA-jóváhagyott (1999 Pfizer). Egyedi: 17-hydro-exemestane metabolit mild androgén — SHBG drop + free-Test rise visible. AAS-ban E2-stability vagy SHBG-emphasis-emphasizált választás.",
      "en": "Steroidal \"suicide\" (irreversible) aromatase inhibitor. FDA-approved (1999 Pfizer). Unique: 17-hydro-exemestane metabolite is mildly androgenic — SHBG drop + visible free-Test rise. In AAS used when E2-stability or SHBG-emphasis matters.",
      "pl": "Steroidowy \"samobójczy\" (nieodwracalny) inhibitor aromatazy. Zatwierdzony przez FDA (1999 Pfizer). Unikalne: metabolit 17-hydro-eksemestan jest słabo androgenny — spadek SHBG + widoczny wzrost wolnego testosteronu. W AAS gdy ważna stabilność E2 lub akcent SHBG."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "ai",
    "formFactors": ["oral"]
  },
  {
    "id": "cabergoline",
    "name": "Cabergoline (Dostinex)",
    "image": "/pharmaceutical/blister-white-oval.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Long-acting ergot-D2-dopamin agonista. EMA-jóváhagyott (1992 Pharmacia, ma Pfizer) hyperprolaktinémiára. AAS-ban: 19-Nor/Tren prolactin-control golden-standard, 0.25-0.5 mg 2x/hét bloodwork-titrálva. Long t1/2 ~63 h.",
      "en": "Long-acting ergot D2 dopamine agonist. EMA-approved (1992 Pharmacia, now Pfizer) for hyperprolactinemia. In AAS: 19-Nor/Tren prolactin-control golden-standard, 0.25-0.5 mg 2x/week titrated by bloodwork. Long t1/2 ~63 h.",
      "pl": "Długo działający ergotaminowy agonista D2 dopaminy. Zatwierdzony przez EMA (1992 Pharmacia, obecnie Pfizer) na hiperprolaktynemię. W AAS: złoty standard kontroli prolaktyny przy 19-Nor/Tren, 0,25-0,5 mg 2x/tydzień miareczkowany badaniami. Długi t1/2 ~63 h."
    },
    "tier": 4,
    "wadaStatus": "allowed",
    "subCategory": "pct",
    "subSection": "prolactin",
    "formFactors": ["oral"]
  },
  {
    "id": "bromocriptine",
    "name": "Bromocriptine (Parlodel)",
    "image": "/pharmaceutical/blister-white-oval.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Első generációs ergot-D2-DA-agonista, Sandoz 1972 (Parlodel). Cabergoline elődje; rövidebb felezés (~3-12 h), több vegetatív mellékhatás (nausea, hypotensio). Cycloset (2009 FDA) T2DM-indikációval is.",
      "en": "First-generation ergot D2 dopamine agonist, Sandoz 1972 (Parlodel). Cabergoline's predecessor; shorter half-life (~3-12 h), more vegetative side effects (nausea, hypotension). Also marketed as Cycloset (2009 FDA) for T2DM.",
      "pl": "Pierwszej generacji ergotaminowy agonista D2 dopaminy, Sandoz 1972 (Parlodel). Poprzednik Kabergoliny; krótszy okres półtrwania (~3-12 h), więcej wegetatywnych skutków ubocznych (nudności, hipotensja). Sprzedawany też jako Cycloset (2009 FDA) na T2DM."
    },
    "tier": 4,
    "wadaStatus": "allowed",
    "subCategory": "pct",
    "subSection": "prolactin",
    "formFactors": ["oral"]
  },
  {
    "id": "pramipexole",
    "name": "Pramipexole (Mirapex)",
    "image": "/pharmaceutical/blister-white-oval.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Non-ergot D3-D2 szelektív DA-agonista. FDA-jóváhagyott (1997 Boehringer) Parkinsonra + restless leg-re. AAS-PCT niche: prolactin-control + szexuális stimulácó (D3-szelektivitás). FDA black-box ICD-rizikó (impulzus-kontroll zavar).",
      "en": "Non-ergot D3-D2 selective DA agonist. FDA-approved (1997 Boehringer) for Parkinson's + restless legs. AAS-PCT niche: prolactin-control + sexual stimulation (D3 selectivity). FDA black-box ICD risk (impulse-control disorder).",
      "pl": "Nieergotaminowy selektywny agonista D3-D2 dopaminy. Zatwierdzony przez FDA (1997 Boehringer) na Parkinsona + RLS. Nisza PCT po AAS: kontrola prolaktyny + stymulacja seksualna (selektywność D3). Czarna ramka FDA dla ICD (zaburzenia kontroli impulsów)."
    },
    "tier": 3,
    "wadaStatus": "allowed",
    "subCategory": "pct",
    "subSection": "prolactin",
    "formFactors": ["oral"]
  },
  {
    "id": "finasteride",
    "name": "Finasteride (Propecia / Proscar)",
    "image": "/pharmaceutical/blister-white-round.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Szelektív type-II 5α-reduktáz gátló. FDA-jóváhagyott (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). AAS-ban: scalp DHT-szuppresszió genetikailag prediszponált felhasználóknál a hajhullás lassítására. Type-I 5AR nem gátolt.",
      "en": "Selective type-II 5α-reductase inhibitor. FDA-approved (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). In AAS: scalp DHT-suppression to slow hair loss in genetically-predisposed users. Type-I 5AR not inhibited.",
      "pl": "Selektywny inhibitor 5α-reduktazy typu II. Zatwierdzony przez FDA (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). W AAS: supresja DHT na skórze głowy w celu spowolnienia wypadania włosów u genetycznie predysponowanych użytkowników. 5AR typu I nie zahamowany."
    },
    "tier": 4,
    "wadaStatus": "allowed",
    "subCategory": "pct",
    "subSection": "5ar",
    "formFactors": ["oral"]
  },
  {
    "id": "dutasteride",
    "name": "Dutasteride (Avodart)",
    "image": "/pharmaceutical/blister-white-round.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Dual 5α-reduktáz gátló (type-I + type-II). FDA-jóváhagyott (2001 GSK) BPH-ra. AAS-ban: ~90% scalp DHT + acne-csökkentés. Long t1/2 ~5 hét — washout ~6 hónap. PFS-rizikó magasabb mint Finasteride-on.",
      "en": "Dual 5α-reductase inhibitor (type-I + type-II). FDA-approved (2001 GSK) for BPH. In AAS: ~90% scalp DHT + acne reduction. Long t1/2 ~5 weeks — washout ~6 months. Higher PFS risk vs Finasteride.",
      "pl": "Podwójny inhibitor 5α-reduktazy (typ I + typ II). Zatwierdzony przez FDA (2001 GSK) na BPH. W AAS: ~90% supresji DHT skóry głowy + redukcja trądziku. Długi t1/2 ~5 tygodni — washout ~6 miesięcy. Wyższe ryzyko PFS vs Finasteryd."
    },
    "tier": 4,
    "wadaStatus": "allowed",
    "subCategory": "pct",
    "subSection": "5ar",
    "formFactors": ["oral"]
  },
  {
    "id": "ru58841",
    "name": "RU58841 (PSK-3841 / HMR-3841)",
    "image": "/performance/topical-solution-clear.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Periférás non-steroidal AR-antagonista (NEM 5α-reduktáz gátló) — Roussel-Uclaf 1992 designer. Topikális AGA-research-chemical. Phase II 1996 terminálva systemikus feminizáció miatt. Modern UGL-formulák lokal-only claim-jét sparse data támasztja alá.",
      "en": "Peripheral non-steroidal AR antagonist (NOT a 5α-reductase inhibitor) — Roussel-Uclaf 1992 designer. Topical AGA research chemical. Phase II terminated 1996 due to systemic feminization. Modern UGL formulations' local-only claim has sparse supporting data.",
      "pl": "Peryferyjny niesteroidowy antagonista AR (NIE inhibitor 5α-reduktazy) — projektant Roussel-Uclaf 1992. Topikalna chemia badawcza AGA. Faza II zakończona 1996 z powodu feminizacji systemowej. Twierdzenie nowoczesnych formuł UGL o działaniu tylko lokalnym ma skąpe dane wspierające."
    },
    "tier": 2,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "5ar",
    "formFactors": ["topical"]
  },
  {
    "id": "kisspeptin-10",
    "name": "Kisspeptin-10",
    "image": "/performance/water-vial.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "10 aminosav C-terminál kisspeptin-fragmens — hypothalamic GPR54 → GnRH-pulse → LH/FSH. Legfelsőbb axis-restart pont a HPG-tengelyben. Imperial College London Phase I-II 2020-as években; research-emerging.",
      "en": "10-amino-acid C-terminal kisspeptin fragment — hypothalamic GPR54 → GnRH pulse → LH/FSH. Highest-upstream HPG axis restart agent. Imperial College London Phase I-II ongoing in 2020s; research-emerging.",
      "pl": "10-aminokwasowy fragment C-końcowy kisspeptyny — podwzgórzowe GPR54 → impuls GnRH → LH/FSH. Najwyższy punkt restartu osi HPG. Imperial College London Phase I-II trwa w 2020s; emerging-research."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "axis",
    "formFactors": ["aq"]
  },
  {
    "id": "gonadorelin",
    "name": "Gonadorelin (Factrel / Lutrelef)",
    "image": "/performance/water-vial.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Szintetikus 10 aminosav GnRH — direkt pituiter GnRH-R stimulus, LH/FSH-release. FDA Factrel 1982 (kivonva US 2008); EMA Lutrelef pulsatile-pump hypothalamic-hipogonadism Rx. Continuous dose paradox-downregulation prostate-cancer kezelésben.",
      "en": "Synthetic 10-aa GnRH — direct pituitary GnRH-R stimulus, LH/FSH release. FDA Factrel 1982 (US-discontinued 2008); EMA Lutrelef pulsatile-pump Rx for hypothalamic hypogonadism. Continuous dose paradox-downregulation in prostate cancer therapy.",
      "pl": "Syntetyczna 10-aa GnRH — bezpośrednia stymulacja przysadkowych receptorów GnRH-R, uwolnienie LH/FSH. FDA Factrel 1982 (wycofany USA 2008); EMA Lutrelef pulsatile-pompa Rx dla podwzgórzowej hipogonadyzmu. Dawka ciągła paradoks-downregulacja w terapii raka prostaty."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "axis",
    "formFactors": ["aq"]
  },
  {
    "id": "pregnenolone",
    "name": "Pregnenolone",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "\"Master steroid\" — endogén szteroid-precursor (cholesterol → pregnenolone → összes szteroid-hormon). OTC supplement. Evidence quality LOW: orális biodostupnošć gyenge (~5-10%), neurosztiered NMDA/GABA hatás kis kognitív-előny. AAS-PCT niche.",
      "en": "\"Master steroid\" — endogenous steroid precursor (cholesterol → pregnenolone → all steroid hormones). OTC supplement. Evidence quality LOW: oral bioavailability poor (~5-10%), neurosteroid NMDA/GABA action drives small cognitive benefit. AAS-PCT niche use.",
      "pl": "\"Steroid macierzysty\" — endogenny prekursor steroidowy (cholesterol → pregnenolon → wszystkie hormony steroidowe). Suplement OTC. Jakość dowodów NISKA: biodostępność doustna słaba (~5-10%), działanie neurosterodowe NMDA/GABA daje małą korzyść poznawczą. Nisza w PCT po AAS."
    },
    "tier": 3,
    "wadaStatus": "allowed",
    "subCategory": "pct",
    "subSection": "axis",
    "formFactors": ["oral"]
  },
  {
    "id": "dhea",
    "name": "DHEA (Dehydroepiandrosterone)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#D4537E",
    "tagColor": "rgba(212,83,126,0.18)",
    "shortDesc": {
      "hu": "Endogén adrenális androgén-precursor (cholesterol → DHEA → androstenedione → Test). US-OTC, EU-Rx. Jobb evidence mint a Pregnenolone, de a fiatal egészséges férfin minimális Test-emelkedés + ~15-20% E2-rise. WADA S1.1.b listára vett (banned).",
      "en": "Endogenous adrenal androgen precursor (cholesterol → DHEA → androstenedione → Test). US-OTC, EU-Rx. Better evidence than Pregnenolone, but in young healthy men minimal Test elevation + ~15-20% E2 rise. WADA S1.1.b listed (banned).",
      "pl": "Endogenny prekursor androgenu nadnerczowego (cholesterol → DHEA → androstendion → testosteron). USA-OTC, UE-Rx. Lepsze dowody niż Pregnenolon, ale u młodych zdrowych mężczyzn minimalny wzrost Test + ~15-20% wzrost E2. WADA S1.1.b wymieniony (zakazany)."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "pct",
    "subSection": "axis",
    "formFactors": ["oral"]
  },
  {
    "id": "mirabegron",
    "name": "Mirabegron (Myrbetriq)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Mirabegron-citrát, Astellas 2012 FDA-jóváhagyott szelektív β3-agonist OAB-Rx. BAT-szövet aktivációval thermogenic off-label fat-loss use (Cypess 2015 PMID 25437872).",
      "en": "Mirabegron citrate, Astellas 2012 FDA-approved selective β3-agonist for OAB. BAT-tissue activation enables thermogenic off-label fat-loss use (Cypess 2015 PMID 25437872).",
      "pl": "Cytrynian mirabegronu, zatwierdzony przez FDA 2012 selektywny agonista β3 firmy Astellas dla OAB. Aktywacja BAT umożliwia termogeniczne off-label użycie do utraty tłuszczu (Cypess 2015 PMID 25437872)."
    },
    "tier": 4,
    "wadaStatus": "restricted",
    "subCategory": "fat",
    "subSection": "beta",
    "formFactors": ["oral"]
  },
  {
    "id": "liothyronine",
    "name": "Liothyronine (T3, Cytomel)",
    "image": "/pharmaceutical/blister-white-round.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Szintetikus T3 (3,5,3'-triiodothyronine), Pfizer 1956 FDA-jóváhagyott hypothyroidism Rx (Cytomel). Cutting-cycle off-label thermogenic +10-30% REE; WADA in-competition banned non-Rx athletán.",
      "en": "Synthetic T3 (3,5,3'-triiodothyronine), Pfizer 1956 FDA-approved hypothyroidism Rx (Cytomel). Cutting-cycle off-label thermogenic +10-30% REE; WADA in-competition banned for non-Rx athletes.",
      "pl": "Syntetyczny T3 (3,5,3'-trijodotyronina), Pfizer 1956 zatwierdzony przez FDA Rx hipotyreozy (Cytomel). Off-label użycie cutting-cycle termogeniczne +10-30% REE; zakaz WADA w trakcie zawodów dla sportowców bez Rx."
    },
    "tier": 4,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "thyroid",
    "formFactors": ["oral"]
  },
  {
    "id": "levothyroxine",
    "name": "Levothyroxine (T4, Synthroid)",
    "image": "/pharmaceutical/blister-white-round.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Szintetikus T4 (3,5,3',5'-tetraiodothyronine), Knoll/AbbVie 1955 FDA-jóváhagyott hypothyroidism Rx gold-standard (Synthroid). Prohormon — hepatikus + renalis 5'-deiodinase (D1/D2) konvertálja aktív T3-má. Cutting-cycle off-label use kevésbé jellemző mint T3.",
      "en": "Synthetic T4 (3,5,3',5'-tetraiodothyronine), Knoll/AbbVie 1955 FDA-approved hypothyroidism Rx gold standard (Synthroid). A prohormone — hepatic and renal 5'-deiodinase (D1/D2) convert it to active T3. Off-label cutting-cycle use is less common than T3.",
      "pl": "Syntetyczna T4 (3,5,3',5'-tetrajodotyronina), Knoll/AbbVie 1955, zatwierdzona przez FDA gold-standard Rx na niedoczynność tarczycy (Synthroid). Prohormon — wątrobowa i nerkowa 5'-dejodynaza (D1/D2) konwertuje ją do aktywnej T3. Off-label w cyklach cutting używana rzadziej niż T3."
    },
    "tier": 4,
    "wadaStatus": "allowed",
    "subCategory": "fat",
    "subSection": "thyroid",
    "formFactors": ["oral"]
  },
  {
    "id": "eca-stack",
    "name": "ECA-stack (Ephedrine + Caffeine + Aspirin)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Ephedrine 25 mg + Caffeine 200 mg + Aspirin 81 mg klasszikus 1990-es évek thermogenic-stack. Astrup 1992 Lancet (PMID 1346830) ~3x potensebb mint ephedrine önállóan; FDA 2004 ephedra-ban óta EU Rx-only.",
      "en": "Ephedrine 25 mg + Caffeine 200 mg + Aspirin 81 mg classic 1990s thermogenic-stack. Astrup 1992 Lancet (PMID 1346830) reports ~3x more potent than ephedrine alone; since the FDA 2004 ephedra ban, ephedrine is Rx-only in the EU.",
      "pl": "Ephedryna 25 mg + Kofeina 200 mg + Aspiryna 81 mg — klasyczny stack termogeniczny lat 90. Według Astrup 1992 Lancet (PMID 1346830) ~3x bardziej potencjalny niż sama ephedryna; od bana FDA 2004 ephedrine jest w UE na Rx."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "stim",
    "formFactors": ["oral"]
  },
  {
    "id": "super-shred",
    "name": "Super-Shred (multi-stim blend)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Generic proprietary multi-stim blend archetípus: ECA-rokon + yohimbine HCl + synephrine + 1,3-DMAA-tipikus. Cohen 2014 JAMA (PMID 25406303) label-claim discrepancy warning; FDA 2013 1,3-DMAA ban; Karnatovskaia 2015 (PMID 25525083) DMAA-acute-hepatitis case-cluster.",
      "en": "Generic proprietary multi-stim blend archetype: ECA-related + yohimbine HCl + synephrine + 1,3-DMAA-typical. Cohen 2014 JAMA (PMID 25406303) label-claim vs. actual-content discrepancy warning; FDA 2013 1,3-DMAA ban; Karnatovskaia 2015 (PMID 25525083) documented DMAA acute-hepatitis case cluster.",
      "pl": "Generyczny archetyp multi-stim blend: ECA-pokrewny + yohimbina HCl + synephryna + 1,3-DMAA-typowa. Cohen 2014 JAMA (PMID 25406303) ostrzeżenie o label-claim discrepancy; FDA 2013 1,3-DMAA ban; Karnatovskaia 2015 (PMID 25525083) udokumentowany klaster acute hepatitis DMAA."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "stim",
    "formFactors": ["oral"]
  },
  {
    "id": "l-carnitine",
    "name": "L-Carnitine",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Kvaterner ammónium-vegyület, endogén lizin+metionin-precursorból szintetizálódó mitokondriális long-chain fatty acid shuttle (carnitine palmitoyltransferase I/II). Sigma-Tau 1985 FDA primary carnitine deficiency Rx; bodybuilding off-label 1990s. WADA: allowed, NADA Germany 2018 monitored >50 mg/kg IV.",
      "en": "Quaternary ammonium compound, endogenously synthesized from lysine + methionine precursors, mitochondrial long-chain fatty acid shuttle (carnitine palmitoyltransferase I/II). Sigma-Tau 1985 FDA primary carnitine deficiency Rx; bodybuilding off-label since 1990s. WADA: allowed, NADA Germany 2018 monitored above 50 mg/kg IV.",
      "pl": "Czwartorzędowy związek amoniowy, syntetyzowany endogennie z lizyny + metioniny, mitochondrialny shuttle dla długołańcuchowych kwasów tłuszczowych (carnitine palmitoyltransferase I/II). Sigma-Tau 1985 FDA Rx pierwotnego niedoboru karnityny; bodybuilding off-label od lat 90. WADA: dozwolona, NADA Niemcy 2018 monitored powyżej 50 mg/kg IV."
    },
    "tier": 4,
    "wadaStatus": "allowed",
    "variantCount": 2,
    "subCategory": "fat",
    "subSection": "metabolic",
    "formFactors": ["oral", "aq"]
  },
  {
    "id": "gw-501516",
    "name": "GW-501516 (Cardarine)",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "PPARδ-agonista GlaxoSmithKline-fejlesztés (NEM AR-binding). GSK 2007 belső Sprague-Dawley rat 2-éves karcinogenicitás (intestinal + hepatocellular tumors) → Phase II terminated (Sprenger 2010 PMID 20189836). RESEARCH-ONLY chemical, ne használd; WADA S4.5 banned 2009 óta.",
      "en": "PPARδ-agonist GlaxoSmithKline candidate (NOT AR-binding). GSK 2007 internal Sprague-Dawley rat 2-year carcinogenicity (intestinal + hepatocellular tumors) → Phase II terminated (Sprenger 2010 PMID 20189836). RESEARCH-ONLY chemical, do not use; WADA S4.5 banned since 2009.",
      "pl": "Agonista PPARδ kandydat GlaxoSmithKline (NIE wiązanie AR). GSK 2007 2-letnie badanie kancerogenności Sprague-Dawley rat (tumory jelit + hepatocelularne) → Faza II zakończona (Sprenger 2010 PMID 20189836). RESEARCH-ONLY chemical, nie używaj; WADA S4.5 zakazany od 2009."
    },
    "tier": 3,
    "wadaStatus": "banned",
    "subCategory": "fat",
    "subSection": "metabolic",
    "formFactors": ["oral"]
  },
  {
    "id": "5-amino-1mq",
    "name": "5-Amino-1MQ",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Designer methylquinoline NNMT-inhibitor (nicotinamide N-methyltransferase). PRECLINICAL-ONLY — Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese-mouse-evidence; Neelakantan 2018 (PMID 28425865) 5-amino-1MQ molecule-design. Humán-trial NEM létezik.",
      "en": "Designer methylquinoline NNMT-inhibitor (nicotinamide N-methyltransferase). PRECLINICAL-ONLY — Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse-model evidence; Neelakantan 2018 (PMID 28425865) first 5-amino-1MQ molecule-design publication. Human trials do NOT exist.",
      "pl": "Designer methylquinoline inhibitor NNMT (nicotinamide N-methyltransferase). PRECLINICAL-ONLY — Kraus 2014 Nature (PMID 24622204) evidence z myszy NNMT-knockdown w otyłości; Neelakantan 2018 (PMID 28425865) pierwsza publikacja design molekuły 5-amino-1MQ. Human trials NIE istnieją."
    },
    "tier": 2,
    "wadaStatus": "allowed",
    "subCategory": "fat",
    "subSection": "metabolic",
    "formFactors": ["oral"]
  },
  {
    "id": "mots-c",
    "name": "MOTS-c",
    "image": "/performance/water-vial.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Mitochondrial-derived peptide (16 aminosav, 12S rRNA mtDNA-encoded), Lee 2015 Cell Metab PMID 25738457 felfedezés. AMPK-aktivátor, glükóz-homeostázis + insulin-sensitization preclinical-evidence; humán Phase 1/2 trial preliminary, fat-loss-effect szubtilis.",
      "en": "Mitochondrial-derived peptide (16 amino acids, 12S rRNA mtDNA-encoded), discovered by Lee 2015 Cell Metab PMID 25738457. AMPK activator with preclinical evidence for glucose homeostasis + insulin sensitization; human Phase 1/2 trials preliminary, fat-loss effect subtle.",
      "pl": "Peptyd pochodzenia mitochondrialnego (16 aminokwasów, kodowany w 12S rRNA mtDNA), odkryty przez Lee 2015 Cell Metab PMID 25738457. Aktywator AMPK z preklinicznymi dowodami na homeostazę glukozy + uwrażliwianie na insulinę; ludzkie badania fazy 1/2 wstępne, efekt utraty tłuszczu subtelny."
    },
    "tier": 3,
    "wadaStatus": "allowed",
    "subCategory": "fat",
    "subSection": "mito",
    "formFactors": ["aq"]
  },
  {
    "id": "slu-pp-332",
    "name": "SLU-PP-332",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "ERRα (Estrogen-related receptor alpha) synthetic-agonist, Salk 2024 preprint (Billon et al. bioRxiv) — preclinical-only, egér-trial exercise-mimetic evidence. NINCS humán PK / safety data; \"exercise-mimetic\" myth-marketing 2024 óta.",
      "en": "ERRα (Estrogen-related receptor alpha) synthetic agonist, Salk 2024 preprint (Billon et al. bioRxiv) — preclinical-only, mouse-trial exercise-mimetic evidence. NO human PK / safety data; \"exercise-mimetic\" myth-marketing since 2024.",
      "pl": "Syntetyczny agonista ERRα (Estrogen-related receptor alpha), preprint Salk 2024 (Billon et al. bioRxiv) — tylko preklinicznie, dowody exercise-mimetic z badań na myszach. BRAK danych PK / bezpieczeństwa u ludzi; marketing-myth \"exercise-mimetic\" od 2024 r."
    },
    "tier": 2,
    "wadaStatus": "allowed",
    "subCategory": "fat",
    "subSection": "mito",
    "formFactors": ["oral"]
  },
  {
    "id": "bam15",
    "name": "BAM15",
    "image": "/performance/tablet-pile-white.png",
    "accentColor": "#f97316",
    "tagColor": "rgba(249,115,22,0.18)",
    "shortDesc": {
      "hu": "Mitokondriális protonophore uncoupler, DNP-rokon mechanism (Alexopoulos 2020 Nat Comms PMID 32848134), DE safer therapeutic window preclinical-evidence. BAT-thermogenic-aktivátor + insulin-sensitization obese-mice; humán-trial NEM aktív 2026 januárig.",
      "en": "Mitochondrial protonophore uncoupler, DNP-adjacent mechanism (Alexopoulos 2020 Nat Comms PMID 32848134) BUT preclinical evidence for a safer therapeutic window. BAT-thermogenic activator + insulin sensitization in obese mice; no active human trial as of January 2026.",
      "pl": "Mitochondrialny rozprzęgacz protonofor, mechanizm spokrewniony z DNP (Alexopoulos 2020 Nat Comms PMID 32848134), ALE prekliniczne dowody na bezpieczniejsze okno terapeutyczne. Aktywator termogenezy BAT + uwrażliwianie na insulinę u otyłych myszy; brak aktywnego badania u ludzi na styczeń 2026 r."
    },
    "tier": 3,
    "wadaStatus": "allowed",
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
  "calculator": true,
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
