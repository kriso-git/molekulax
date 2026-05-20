// Phase C multi-variant entry (oral Acetate + injectable Enanthate). Sources:
// Bayer Primobolan Depot SmPC (DE/ES), Schering AG historical literature
// (Methenolone acetate 1962, Methenolone enanthate Primobolan Depot 1962),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Schänzer 1996 PMID 8616181 (detection).

export default {
  "id": "primobolan",
  "name": "Primobolan (Methenolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methenolone, 1-metil-DHT-származék \"enyhe\" AAS, két ester-formátumban: orális acetate (rövid, alacsony biodostupnošć) és injektábilis enanthate (Bayer Primobolan Depot, Németországban + Spanyolországban Rx). Klasszikus cutting-szteroid.",
  "description": "A Primobolan (Methenolone) Schering AG által 1962-ben szintetizált 1-metil-dihidrotesztoszteron-származék. Két forgalmazott forma: az acetát-észter (Primobolan, orális tabletta, eredetileg 5 mg) és az enantát-észter (Primobolan Depot, IM olajos injekció, 100 mg/ml). Az eredeti FDA-jóváhagyás (1962) anaemia, osteoporosis és súlyos debilitáló betegség recovery indikációkra szólt; az USA-piacról 1965-re kivonva, viszont Bayer ma is gyártja Primobolan Depot néven Németországban és Spanyolországban Rx-szer formájában (anémia, premature infant catabolic states). Anabolikus:androgén arány 88:44, ami közepes anabolikus és alacsony androgén profilt jelent. NEM 17α-alkilált, így a hepatotoxicitás minimális. NEM aromatizál. AR-affinitása alacsony (~28% testosterone-hoz képest in vitro), DE az izom-szövetben az SHBG-szuppresszió révén indirekt módon növeli a szabad-T-szintet. Az orális acetát formátum biodostupnošć alig 6% (a 17β-OH-acetát-észter gyors hepatic metabolism), így extrém magas dózis szükséges (50-100 mg/nap) ahhoz hogy az injektábilis 100 mg/hét enantáttal egyenértékű hatás legyen. WADA tiltott egész évben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista, 1-metil-DHT, NEM aromatizál"
    },
    {
      "label": "Anabolikus:Androgén",
      "value": "88:44"
    },
    {
      "label": "Felezési idő",
      "value": "4-6 h (Ac orális), 5-7 nap (Enan IM)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 h (Ac orális), 48-72 h (Enan IM)"
    },
    {
      "label": "Jogi státusz",
      "value": "Bayer Primobolan Depot DE/ES Rx, USA: discontinued"
    }
  ],
  "mechanism": "1-metil-dihidrotesztoszteron AR-agonista. Az 1-metil-csoport — kifejezetten Δ1-pozícióban — gátolja a 17β-HSD-oxidatív lebontást és kifejezetten ellenálló a hepatikus metabolizmusnak. A 17β-OH-acetát észter (orális forma) gyorsan hidrolizál a portális vénában szabad methenolonra, amelyet aztán a máj gyorsan metabolizál (alacsony 6% biodostupnošć). Az enantát észter (Depot forma) IM-injekcióval depot-tárolt, lassú hidrolízis ad stabil plazma-szintet. NEM 17α-alkilált → minimális hepatikus stressz. NEM CYP19 szubsztrát → NEM aromatizál ösztrogénné.",
  "legalStatus": "USA: 1965 után discontinued (FDA), Schedule III kontrollált. DE/ES: Bayer Primobolan Depot Rx-szer (anémia, premature infant catabolic states). HU/PL: vény nélkül illegális, kontrollált AAS. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "1-2 h (Ac oral), 48-72 h (Enan IM)",
  "halfLife": "4-6 h (Ac oral), 5-7 d (Enan IM)",
  "halfLifeActive": "~4-6 h szabad methenolone (Ac után), depot-driven ~24 h (Enan után)",
  "interactionsWith": [
    "testosterone",
    "anastrozole",
    "finasteride",
    "warfarin"
  ],
  "aromatization": "Nem — 1-metil-DHT struktúra, NEM CYP19 szubsztrát egyik észternél sem; klinikailag E2-emelkedés nem várható (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált enantát formánál minimális hepatic stressz. Az orális acetát formánál is csak enyhe, mert az 1-metil-csoport NEM 17α (csak az 1-metil ad orális stabilitást), DE a magas dózis (50-100 mg/nap) miatt mégis monitor szükséges (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "88:44",
  "bindingAffinity": "Közepes AR-affinitás (~28% testosterone-hoz képest in vitro). Magas SHBG-affinitás (DHT-strukturális analóg) → indirekt szabad-T-emelkedés.",
  "detectionWindow": "Methenolone-metabolitok (1-metil-5α-androsztán-3-on metabolitcsalád) vizeletből: orális acetát 4-5 hét, injektábilis enantát 4-6 hónap (Schänzer 1996 PMID 8616181). WADA-akkreditált GC-MS és LC-MS/MS.",
  "benefits": [
    "Vaszkuláris, kemény esztétikai megjelenés (alacsony víz-retenció)",
    "NEM aromatizál → nincs E2-mellékhatás",
    "Alacsony hepatotoxicitás (különösen az enantát formánál)",
    "Indirekt szabad-T-emelkedés SHBG-elfoglalás révén",
    "Eredeti orvosi indikáció: anémia, premature infant catabolic states (Bayer)"
  ],
  "quickStart": [
    "Realisztikus elvárások: a Primobolan ENYHE AAS, ne várj Dianabol-szerű 10 kg/4 hét eredményt",
    "Orális Ac dózis MAGAS (50-100 mg/nap) az alacsony biodostupnošć miatt — minőségi forrás kritikus",
    "DHT-strukturális analóg → SZIGORÚ hajhullás-kockázat genetikai prediszpozíció esetén",
    "Lipid panel (HDL/LDL) baseline + 4-hét + post-cycle kötelező",
    "PCT (Clomid + Nolvadex 4 hét) szükséges férfiaknál a HPTA-szuppresszió miatt"
  ],
  "expectations": [
    {
      "label": "Első hét",
      "body": "Orális Ac onset 1-2 h, injektábilis Enan 48-72 h. Akut esztétikai változás nem várható, plasma steady-state Ac 2-3 nap, Enan 3-4 hét."
    },
    {
      "label": "4-6. hét",
      "body": "Szubjektíven \"keményebb\" izom-tónus, vaszkuláris venosity. SHBG csökken, lean mass gyarapodás 1-2 kg (NEM extrém — a Primobolan enyhe AAS)."
    },
    {
      "label": "10-12. hét vége",
      "body": "Maximum esztétikai \"hardening\" effekt. HDL ~15-25% csökkenés várható. Lean mass-megőrzés cutting alatt (kalória-deficit ellenére minimal izom-vesztés)."
    }
  ],
  "quality": {
    "pure": [
      "Bayer Primobolan Depot original Rx (DE/ES, 100 mg/ml, 1ml ampulla) — autentikus enantát forrás",
      "UGL acetát-tabletta: HPLC-tesztelt forrás kötelező, gyakran hamisított (Anavar vagy Winstrol helyettesítés)"
    ],
    "caution": [
      "Orális Ac magas dózis (50-100 mg/nap) — költséges és minőség-kritikus",
      "Hajhullás-acceleráció androgenetikus alopecia esetén (DHT-strukturális analóg)",
      "Lipid-zavar: HDL csökkenés (mérsékelt)",
      "Hangmélyülés és hirsutizmus nőknél (alacsonyabb dózisnál is virilizációs kockázat marad)"
    ],
    "avoid": [
      "Androgenetikus alopecia családi anamnézis",
      "Prosztata-hipertrófia, prosztatakarcinóma (DHT-analóg)",
      "Női felhasználás magasabb dózisnál (>10 mg/nap orális Ac, >50 mg/hét Enan)",
      "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL)",
      "Bulking/tömegnövelő cél — a Primobolan cutting és kondicionáló szteroid, NEM tömeg-építő"
    ]
  },
  "interactions": [
    "Testosterone-base stack: standard, fokozza az izom-protein-szintézist; ester-half-life matching ajánlott (Test-Prop+Primo-Ac vagy Test-Enan+Primo-Enan)",
    "Anastrozole (AI): NEM szükséges Primo-only ciklusnál (nem aromatizál); Test-stack mellett csak labor-igazolt magas E2 esetén",
    "Finasteride: NEM gátolja a Primobolan-hatást (Primobolan már 5α-redukált), NEM véd a scalp-DHT ellen — értelmetlen",
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
      "pmid": "15233599"
    },
    {
      "title": "Metabolism of anabolic androgenic steroids",
      "authors": "Schänzer W.",
      "journal": "Clin Chem. 1996;42(7):1001-20.",
      "pmid": "8616181"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    }
  ],
  "faq": [
    {
      "q": "Miért olyan drága a Primobolan?",
      "a": "Két ok: (1) az alapanyag (methenolone) szintézise drága, kevés UGL labor tudja tisztán előállítani; (2) hamisítás extrém gyakori — sok UGL Primo valójában Anavar vagy Winstrol. Bayer Primobolan Depot eredeti DE/ES Rx ár ~150-250 EUR/ml feketepiacon. Az orális Ac még drágább, mert a magas dózisigény (50-100 mg/nap) miatt napi költség jelentős."
    },
    {
      "q": "Tényleg \"enyhe\" AAS, mint mondják?",
      "a": "Igen, a klasszikus AAS-ek között az egyik legszelídebb hepatotoxicitási és kardiovaszkuláris profilját tekintve. DE az enyheség miatt NEM várhatsz spektakuláris izomtömeg-növekedést — a Primobolan cutting és kondicionáló szer, NEM bulking. Pope-Kanayama 2014 kiemeli: a felhasználói várakozás-realitás közötti gap az egyik fő frusztráció-forrás."
    },
    {
      "q": "Miért alacsony az orális acetát biodostupnošć?",
      "a": "Az acetát-észter (17β-OH-acetát) GYORSAN hidrolizál a portális vénában szabad methenolonra, amelyet aztán a máj gyorsan metabolizál (NEM 17α-alkilált, így nincs first-pass-védettség). Ezért az orális Primobolan biodostupnošć alig 6% — összehasonlítva pl. az Anavar 30-40%-os biodostupnošć-ével a 17α-alkilált védettség miatt."
    },
    {
      "q": "Miért használnak Primobolant nők is?",
      "a": "Alacsony androgén potenciál (44% testosterone-hoz képest) miatt a virilizáció kockázata az AAS-ek közül az alacsonyabbak közé tartozik (Anavar és Primobolan a klasszikus \"női-barát\" AAS-páros). DE a virilizáció NEM nulla — magasabb dózisnál (>10 mg/nap orális vagy >50 mg/hét Enan) hangmélyülés és hirsutizmus dokumentált. Bármilyen virilizáció-tünet azonnali ciklus-megszakítás."
    },
    {
      "q": "Igaz, hogy Arnold Schwarzenegger használta?",
      "a": "Igen, Arnold Schwarzenegger több interjúban beismerte hogy az 1970-80-as évek bodybuilding versenyei (Mr. Olympia) alatt Primobolant és Dianabolt használt, akkor még legálisan elérhető Rx-szerekként. Ez a hagyomány tette a Primobolant \"klasszikus pro-bodybuilder szteroiddá\" a kultúrában."
    }
  ],
  "related": [
    "masteron",
    "anavar-info",
    "testosterone-info",
    "winstrol-info",
    "trenbolone-info"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG, Prolaktin. Lipid panel (LDL/HDL/TG). Hepatikus: ALT/AST/GGT/ALP. CBC + hematokrit. Vesefunkció. PSA (30 év felett).",
      "purpose": "Lipid baseline és SHBG-baseline kritikus. A Primobolan NEM aromatizál, így E2-baseline-ra a stack-társ Test miatt figyelni."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4-6. hetén, ciklus felénél",
      "markers": "Lipid panel (HDL csökkenés mérsékelt), E2 (ha Test-stack), SHBG, hepatikus panel (orális Ac-nál különösen), vérnyomás napló.",
      "purpose": "HDL <35 mg/dL kardiovaszkuláris riasztó. ALT/AST <2x felső normál Primo-only ciklusnál várható (orálisnál esetenként magasabb). E2 a stack-társ Test alapján."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó dózis: orális Ac +1-2 nap, IM Enan +14-21 nap PCT-indítás. PCT 4. hetén és 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), hepatikus panel.",
      "purpose": "HPTA-helyreállítás verifikálása. SHBG-recovery típusosan 4-6 héten belül. Primobolan-only ciklusnál PCT enyhébb mint Test-tartalmúnál (kevesebb HPTA-szuppresszió)."
    },
    "cruise": {
      "label": "Cruise alatt (Primobolan-tartalmú cruise NEM standard)",
      "timing": "Primo-cruise atipikus; ha cruise-on tartja, 6-8 hetente monitoring",
      "markers": "Lipid panel, SHBG, Total T, E2, vérnyomás napló, PSA.",
      "purpose": "Tartós Primobolan-expozíció a lipid-zavart kumulálja, prosztata-AR-aktivációt halmoz. TRT-Test cruise mellett a Primobolan tipikusan kihagyott (esztétikai effekt csak contest-prep alatt)."
    }
  },
  "variants": [
    {
      "routeId": "ac-oral",
      "routeLabel": "Methenolone Acetát (orális tabletta)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "Discontinued Rx mindenhol; csak UGL piacon elérhető. EU/HU/PL/USA: vény nélkül illegális, WADA tiltott.",
      "bioavailability": "~6% (alacsony — az acetát-észter gyors portális hidrolízis után parent methenolone hepatic metabolism; ezért magas dózisigény)",
      "onsetTime": "1-2 h (orális, fast-absorption)",
      "halfLife": "4-6 h (parent methenolone, no active metabolite)",
      "halfLifeActive": "4-6 h",
      "detectionWindow": "4-5 hét vizelet (rövidebb mint az enantátnál, gyors clearance). WADA-akkreditált GC-MS és LC-MS/MS.",
      "aromatization": "Nem — 1-metil-DHT struktúra, NEM CYP19 szubsztrát; klinikailag E2-emelkedés nem várható.",
      "hepatotoxicity": "Alacsony-mérsékelt — NEM 17α-alkilált, de a magas dózisigény (50-100 mg/nap) miatt ALT/AST enyhe emelkedés várható; klinikailag jóval enyhébb mint az Anavar vagy Dianabol.",
      "quality": {
        "pure": [
          "Tiszta fehér, jelölt tabletta (25 mg vagy 50 mg gyakori UGL dosing)",
          "HPLC-tesztelés ABSZOLÚT KÖTELEZŐ — a Primobolan-Ac a leggyakrabban hamisított AAS-tabletta (Anavar/Winstrol helyettesítés)"
        ],
        "caution": [
          "Magas napi dózisigény (50-100 mg/nap) — gyakran 5-10 tabletta szétosztva napközben",
          "Hajhullás-acceleráció androgenetikus alopecia esetén",
          "Lipid-zavar: HDL csökkenés (mérsékelt)",
          "Költség: orális Ac napi költség 5-15 EUR UGL minőségtől függően"
        ],
        "avoid": [
          "Bármilyen meglévő ALT/AST emelkedés (orális forma magas dózisigény miatt)",
          "Alkohol, paracetamol egyidejű használata",
          "Hamisítás-kockázat magas — ha nincs HPLC-tesztelt forrás, NE használd",
          "Női felhasználás >10 mg/nap (virilizációs kockázat)"
        ]
      },
      "interactions": [
        "Test-Prop stack: ester-half-life matching, EOD injekciós Test + napi Primo-Ac",
        "Anavar stack: együttes 17α-alkilált+1-metil orális kombináció, hepatikus stressz fokozódik",
        "PCT (Clomid + Nolvadex 4 hét) utolsó tabletta +1-2 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/nap (orális, 2-3x osztott)",
        "note": "Maximum 8 hét ciklus. 50-100 mg/nap, 2-3x osztott dózisban (rövid felezés). TUDCA 500 mg/nap opcionális (alacsony hepatotoxicitás, de a magas dózis miatt biztonságos). Női dózis 5-10 mg/nap maximum. PCT 4 hét utolsó tabletta +1-2 nap után."
      }
    },
    {
      "routeId": "enan-oil",
      "routeLabel": "Methenolone Enantát (IM Depot)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Bayer Primobolan Depot DE/ES Rx-szer (anémia, premature infant catabolic states). EU/HU/PL: import-Rx ritkán, többnyire UGL. WADA tiltott.",
      "bioavailability": "~95-100% (IM injekció bypass-olja a first-pass-t; enantát észter slow hidrolízis ~5-7 nap)",
      "onsetTime": "48-72 h (IM, enantát slow-acting; steady-state 3-4 hét)",
      "halfLife": "5-7 nap (Enantát észter; szabad methenolone t½ ~24 h hidrolízis után)",
      "halfLifeActive": "~24 h (depot-driven)",
      "detectionWindow": "4-6 hónap vizelet (extra hosszú, enantát ester + 1-metil metabolitcsalád). WADA-akkreditált GC-MS és LC-MS/MS.",
      "aromatization": "Nem — 1-metil-DHT struktúra, NEM CYP19 szubsztrát.",
      "hepatotoxicity": "Nagyon alacsony — parent szteroid, NEM 17α-alkilált, IM forma bypass-olja a first-pass-t. A legbiztonságosabb hepatikus profilú AAS-ek közé tartozik.",
      "quality": {
        "pure": [
          "Bayer Primobolan Depot 100 mg/ml, 1ml ampulla — autentikus forrás holografikus jelöléssel",
          "UGL alternatíva: tiszta sárgás-arany olaj, 10ml fiola, HPLC-tesztelt"
        ],
        "caution": [
          "Bayer Depot ár: ~150-250 EUR/ml feketepiacon (extrém drága)",
          "UGL hamisítás: gyakran Test-Enan vagy Nandrolone-Decanoate helyettesítés",
          "Lipid-zavar: HDL csökkenés (mérsékelt, hosszabb expozíció miatt kumulatívabb mint orális Ac-nál)",
          "Extra hosszú detection window: WADA-tesztelt verseny <6 hónappal a tervezett vég után tilos"
        ],
        "avoid": [
          "Rövid (4-6 hét) ciklus NEM hatékony — Enan steady-state 3-4 hét után",
          "Több mint 12-14 hét folyamatos ciklus (HPTA-szuppresszió súlyos)",
          "WADA-tesztelt versenyező a teljes off-season alatt (detection window 6 hónap)",
          "Kardiovaszkuláris kockázat, női felhasználás (>50 mg/hét virilizáció)"
        ]
      },
      "interactions": [
        "Test-Enan stack: ester-half-life matching, heti 1-2x injekció",
        "Tren-Enan stack: \"long-ester cutting\" 10-12 hét",
        "PCT (Clomid + Nolvadex 4-6 hét) utolsó Enan-injekció +14-21 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/hét (IM, 1-2x osztva)",
        "note": "Minimum 10 hét ciklus a steady-state miatt. 300-700 mg/hét, heti 1-2x injekcióban. TUDCA / NAC NEM szükséges (legalacsonyabb hepatotoxicitású AAS). Női dózis 50-100 mg/hét maximum. PCT 4-6 hét utolsó injekció +14-21 nap után."
      }
    }
  ],
  "defaultVariant": "enan-oil",
  "anecdote": "A Primobolan-t az anekdotikus leírások szerint kiváló másodlagos anabolikumnak tartják a legtöbb ciklushoz, gyakran magas dózisú tesztoszteronnal párosítva a szinergia érdekében, mivel maga a Primobolan érdemben nem aromatizálódik és segíthet mérsékelni az ösztrogén-terhelést. Inkább 'kozmetikai' szteroidként ismert, a felhasználók száraz, kemény, esztétikus megjelenésről számolnak be, nem pedig drámai tömegnövekedésről. Közösségi beszámolók szerint nagyon jól tolerálható, viszonylag enyhe mellékhatás-profillal rendelkezik, és mind tömegnövelő, mind szárító fázisokban működik. A fő hátrányai a magas ára és a lassú felfutás, jellemzően Enanthate észter formájában jelenik meg. Összességében a Primobolan-t megalapozottnak tartják egy jól megtervezett ciklus részeként, de általában nem önálló tömegnövelőként választják."
}
