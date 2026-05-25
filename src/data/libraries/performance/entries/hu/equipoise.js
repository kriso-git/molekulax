// Veterinary-only Rx (Fort Dodge Animal Health Equipoise 1972-2008).
// Sources: FDA-CVM Boldenone Undecylenate veterinary label, Pope-Kanayama
// 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599, Schänzer 1996
// PMID 8616181, Llewellyn 2017 "Anabolics" UGL reference.

export default {
  "id": "equipoise",
  "name": "Equipoise (Boldenone Undecylenate)",
  "image": "/performance/oil-vial-orange.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Boldenone Undecylenate (Δ1-testosterone Undecylenate), veterinary-only injektábilis AAS. Eredetileg Squibb 1949 humán Rx, ma kizárólag állatorvosi (lovak) — Fort Dodge Equipoise 1972-2008. Lassú, stabil lean gains; AROMATIZÁL ~fele olyan erősen mint a testosterone. \"Étvágy-stimuláns\" reputation.",
  "description": "Az Equipoise (Boldenone Undecylenate) egy Δ1-testosterone Undecylenate-észteresített injektábilis AAS. Eredetileg Squibb (USA) 1949-ben szintetizálta Parenabol (humán Rx) néven idős férfi osteoporosis + cachexia kezelésére, DE az 1970-es években a Test-észterek preferenciája miatt discontinued. 1972-ben Fort Dodge Animal Health megvásárolta a licencet és Equipoise néven veterinary-only (lovak ízületi recovery + étvágy-stimuláns) Rx-szerként forgalmazta — 2008-ban szintén discontinued. Ma kizárólag UGL piacon. Anabolikus:androgén arány 100:50 (közepes anabolikus, közepes androgén). NEM 17α-alkilált → ALACSONY hepatotoxicitás. AROMATIZÁL (kb. fél olyan erősen mint a testosterone, CYP19 substrate). Undecylenate-észter (10-carbon undecénsav) → hosszú felezés ~14 nap, monthly injection-kompatibilis depot. Klasszikus \"slow lean gainer\" — 8-12 hét alatt 3-5 kg száraz izom + dokumentált étvágy-stimuláns hatás (boldenone-driven). WADA tiltott egész évben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista, Δ1-testosterone, AROMATIZÁL fél-Test arányban"
    },
    {
      "label": "Anabolikus:Androgén",
      "value": "100:50"
    },
    {
      "label": "Felezési idő",
      "value": "14 nap (Undecylenate ester)"
    },
    {
      "label": "Hatáskezdet",
      "value": "48-72 óra (IM)"
    },
    {
      "label": "Jogi státusz",
      "value": "Veterinary-only Rx (discontinued 2008), ma UGL; Schedule III"
    }
  ],
  "mechanism": "AR-agonista Δ1-testosterone-undecylenate. A Δ1-double-bond (azonos a Dianabolban) ad enyhe metabolikus stabilitást + alacsonyabb 5α-reduktáz substrate-affinitást (NEM erősen DHT-konvertáló mint a sima Test). Aromatizáció CYP19 enzimen át kb. 50%-ra a Test-szinttől — klinikailag E2-emelkedés mérsékelt, gynecomastia-rizikó alacsonyabb mint Test-en. Undecylenate-észter slow-release IM depot ~14 napos felezéssel. Bodybuilding-tapasztalat szerint markáns étvágy-stimuláns hatás (mechanizmus nem teljesen tisztázott — hipotézis: ghrelin-pálya közvetett modulálás).",
  "legalStatus": "Veterinary-only Rx (Fort Dodge Equipoise 1972-2008, ma discontinued). USA: Schedule III kontrollált szer (DEA, humán off-label illegális). EU/HU/PL: kontrollált AAS, vény nélkül illegális. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "48-72 h (IM, steady-state 4-5 hét)",
  "halfLife": "14 d (Undecylenate ester)",
  "halfLifeActive": "~24 h szabad boldenone (hidrolízis után)",
  "interactionsWith": [
    "anastrozole",
    "testosterone",
    "warfarin",
    "finasteride"
  ],
  "aromatization": "Igen — Δ1-testosterone CYP19 szubsztrát, kb. 50%-ra a Test-szinttől; klinikailag E2-emelkedés mérsékelt (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; IM bypass-olja a first-pass-t. ALT/AST <2x normál Equipoise-only ciklusnál (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "AR-affinitás közepes (~50-60% testosterone-hoz képest in vitro).",
  "detectionWindow": "Boldenone-metabolitok (1-androstén-3,17-dion + Δ1-androstén metabolitcsalád) vizeletből 5-6 hónap (Undecylenate slow clearance miatt; WADA-akkreditált GC-MS/LC-MS/MS, Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Lassú, stabil lean mass-gyarapodás (3-5 kg 8-12 hét alatt, MINIMÁLIS víz-retencióval)",
    "Étvágy-stimuláns hatás (klasszikus \"bulk-eating helper\" bodybuilding-tapasztalat)",
    "Alacsony hepatotoxicitás (NEM 17α-alkilált)",
    "Aromatizáció mérsékelt (gynecomastia-rizikó alacsonyabb mint Test-en)",
    "Vörösvérsejt-szám és aerob kapacitás emelés (erythropoietikus hatás)"
  ],
  "quickStart": [
    "MINIMUM 10-12 hét ciklus a hosszú Undecylenate-ester miatt (steady-state 4-5 hét)",
    "Tipikus dózis 400-600 mg/hét, heti 1-2x injekció",
    "Anastrozole készenlétben E2-monitor alapján",
    "PCT (Clomid + Nolvadex 4-6 hét) utolsó injekció +21-28 nap után indul",
    "WADA-tesztelt sportoló: minimum 6 hónap off-season fade-out"
  ],
  "expectations": [
    {
      "label": "Első 2 hét",
      "body": "Akut hatás minimális, étvágy-stimuláns effekt 5-7 nap után érzékelhető. Lean mass-gyarapodás még nem."
    },
    {
      "label": "5-8. hét",
      "body": "Steady-state, lean mass-gyarapodás 2-3 kg, erő-növekedés 8-12% 1RM. Hemoglobin emelkedés ~10-15%."
    },
    {
      "label": "12. hét vége",
      "body": "Maximum effekt, 3-5 kg száraz lean mass. Lipid panel HDL csökkenés mérsékelt. Detection-window 5-6 hónap kezdődik."
    }
  ],
  "quality": {
    "pure": [
      "Fort Dodge Equipoise original veterinary fiola (50 mg/ml, ma collectible 2008 utáni discontinued)",
      "UGL ekvivalens: tiszta arany-amber olaj, 10ml fiola, sterilen szűrt (200-300 mg/ml gyakori UGL koncentráció)"
    ],
    "caution": [
      "Aromatizáció: gynecomastia-rizikó (alacsonyabb mint Test-en, de NEM nulla)",
      "Lipid-zavar: HDL csökkenés mérsékelt",
      "Étvágy-stimuláns hatás → kalória-deficit cutting-cycle alatt nehezebb fenntartani",
      "Vörösvérsejt-szám emelkedés (>54% hematokrit thrombosis-rizikó)",
      "Hosszú detection-window"
    ],
    "avoid": [
      "WADA-tesztelt sportoló a következő 6 hónapban",
      "Polycythaemia (hematokrit >54% baseline) abszolút kontraindikáció",
      "Cutting-cycle (étvágy-stimulácis hatás ellentétes a kalória-deficit célkitűzéssel)",
      "Női felhasználás (virilizációs kockázat mérsékelt-magas)",
      "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL)"
    ]
  },
  "interactions": [
    "Testosterone-base stack: szinergikus lean mass-gyarapodás, klasszikus EQ+Test ciklus",
    "Anastrozole 0,25-0,5 mg E3D: E2-kontroll Equipoise + Test stack mellett",
    "Finasteride: NEM gátolja az Equipoise-hatást (NEM erősen DHT-konvertáló)",
    "Warfarin: antikoaguláns hatás fokozódhat, INR monitor"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-554.",
      "pmid": "15248788"
    },
    {
      "title": "Metabolism of anabolic androgenic steroids",
      "authors": "Schänzer W.",
      "journal": "Clin Chem. 1996;42(7):1001-20.",
      "pmid": "8674183"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "FDA-CVM Boldenone Undecylenate veterinary label (Equipoise)",
      "authors": "FDA Center for Veterinary Medicine",
      "journal": "Veterinary Pharmacology Database",
      "pmid": null
    }
  ],
  "faq": [
    {
      "q": "Miért nevezik \"étvágy-stimuláns\" szteroidnak?",
      "a": "Klasszikus bodybuilding-tapasztalat: Equipoise-on a felhasználók markáns étvágy-növekedést jeleznek (anekdotikusan \"unstoppable hunger\"). A mechanizmus NEM teljesen tisztázott — hipotézis: a boldenone indirekt módon modulálja a ghrelin-receptorokat vagy a központi idegrendszeri appetite-pathway-eket. Klinikailag a hatás bulking-cycle-hez ideális (több kalória könnyebben elfogyasztva), DE cutting-cycle-en ellenálló — Equipoise-on \"deficit-diéta\" nehezebb."
    },
    {
      "q": "Equipoise vs Dianabol (mindkettő Δ1-T)?",
      "a": "Strukturálisan rokon (Equipoise = Δ1-Test-undecylenate, Dianabol = Δ1-17α-metil-T), de eltérő farmakológia: Equipoise INJEKTÁBILIS slow-release (Undecylenate ester, 14 napos felezés, NEM 17α-alkilált, alacsony hepatotoxicitás), Dianabol ORÁLIS rapid (17α-metil tabletta, 5 órás felezés, MAGAS hepatotoxicitás). Aromatizációban Equipoise enyhébb (~50% Test-nél), Dianabol erősebb (~80% Test-nél)."
    },
    {
      "q": "Miért kerítették ki a humán piacról?",
      "a": "Squibb 1949-ben Parenabol néven Rx-szerként humán használatra hozta forgalomba, DE az 1970-es években a hosszabb-hatású Test-észterek (Cypionate, Enanthate) megjelenése + a Boldenone hosszú detection-window miatt a humán Rx visszaszorult. Fort Dodge Animal Health 1972-ben átvette és veterinary-only Equipoise néven forgalmazta (lovak étvágy-stimuláns + ízületi recovery indikációkra), 2008-ban szintén discontinued. Ma kizárólag UGL."
    },
    {
      "q": "Hosszú detection-window mit jelent?",
      "a": "Equipoise-undecylenate 5-6 hónapos vizelet detection a WADA-laborokban (Undecylenate hosszú ester + Δ1-androstén metabolit-család miatt). WADA-tesztelt sportoló szempontjából off-season alatt is kerülendő — minimum 6 hónap fade-out a tervezett verseny előtt. A Boldenone metabolit-mintázat ENDOGÉN-konfound rizikójú is: néhány ritka esetben a 1-androstén-3,17-dion endogén biológiai variancia miatt jelentkezik atléta-mintában, ami legal vita kockázat (de WADA-laborok izotóp-arány-tesztekkel kiszűrik)."
    },
    {
      "q": "Hosszú ciklus kell?",
      "a": "Igen — minimum 10-12 hét, de gyakran 14-16 hét. A Undecylenate-ester slow-release miatt steady-state csak 4-5 hét után érzékelhető, ezért rövid (6-8 hét) ciklus elpazaroltság. Tipikus protokoll: 400-600 mg/hét, 12-16 hét, monthly Test-base stack (Test-Enan vagy Cyp), PCT utolsó EQ-injekció +21-28 nap után."
    }
  ],
  "related": [
    "testosterone-info",
    "dianabol-info",
    "trenbolone-info",
    "nandrolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 300,
      "medium": 500,
      "high": 700
    },
    "unit": "mg/hét (IM, 1-2x osztva)",
    "note": "Minimum 10-12 hét ciklus (steady-state 4-5 hét). 300-700 mg/hét, heti 1-2x injekció. TUDCA NEM kötelező. Anastrozole 0,25-0,5 mg E3D Test-stack mellett. PCT utolsó injekció +21-28 nap után."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG. Lipid panel (LDL/HDL/TG). Hepatikus: ALT/AST/GGT (Equipoise-only ritkán mozdul). CBC + hematokrit (Equipoise erythropoietikus). PSA (30 év felett).",
      "purpose": "Hematokrit baseline kritikus (Equipoise erős erythropoietin-szerű hatás). Lipid baseline trend-detektálás."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "5-6. hetén (steady-state után)",
      "markers": "CBC + hematokrit (>54% riasztó), lipid panel (HDL), E2, vérnyomás napló.",
      "purpose": "Hematokrit-rizikó az Equipoise specifikus problémája — phlebotomy >54% esetén. HDL csökkenés mérsékelt."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó Equipoise-injekció +21-28 nap PCT-indítás (Undecylenate slow clearance). PCT 4. hetén + 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), CBC + hematokrit.",
      "purpose": "HPTA-helyreállítás verifikálása. Hematokrit-csökkenés természetes 4-8 hét alatt."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "TRT-Test cruise mellett Equipoise-adjunkt 200-300 mg/hét — 6-8 hetente monitoring",
      "markers": "CBC + hematokrit (kritikus!), lipid panel, E2, PSA.",
      "purpose": "Hosszú-távú Equipoise + hematokrit-emelkedés kumulatív, polycythaemia-rizikó. Phlebotomy 8-12 hetente standard ha hematokrit >54%."
    }
  },
  "anecdote": "Az anekdotikus beszámolók szerint az Equipoise (Boldenone Undecylenate) lassú, de 'megtartható' gyarapodást eredményez. Az ezt futtató felhasználók jellemzően erősebb étvágyról és fokozott vaszkularitásról számolnak be az első néhány héten belül. Az Equipoise jól ismert arról, hogy agresszívan emeli a hematokritot, ezért a vérsűrűséget rendszeresen kell monitorozni — szükségessé válhat a phlebotomia. A rendkívül hosszú észtere azt is jelenti, hogy hosszú időbe telik, mire felépül és kiürül, így rosszul illeszkedik rövid távú módosításokhoz vagy gyors korrekciókhoz. Közösségi beszámolók szerint az Equipoise új lendületet kapott másodlagos anabolikumként, részben mert a Primobolan és Masteron nehezebben beszerezhető és drágább lett. Összességében szilárd választásnak tartják azon felhasználók számára, akik lassú, sovány, fenntartható gyarapodást keresnek hosszabb ciklusstruktúrában."
}
