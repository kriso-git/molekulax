// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.564Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "semaglutide",
  "name": "Semaglutide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "GLP-1 receptor agonista, T2DM és obesity FDA-jóváhagyott Rx (Ozempic, Wegovy, Rybelsus). Az elmúlt évtized blockbuster anyagcsere-szere.",
  "description": "A Semaglutide egy hosszú felezési idejű (~7 nap) human GLP-1 analóg, amelyet a Novo Nordisk fejlesztett ki. A T2DM kezelésére 2017-ben (Ozempic, FDA), obesitás-kezelésre 2021-ben (Wegovy, FDA 2,4 mg heti) kapott engedélyt; oralis változata Rybelsus néven 2019 óta elérhető. A glükózfüggő inzulin-szekréciót stimulálja, a glükagon-szekréciót gátolja, lassítja a gyomorürülést, és centrális hatással csökkenti az étvágyat (POMC/CART aktiváció). A STEP-1 trial (Wilding 2021 NEJM) 68 hetes Wegovy-vizsgálatban átlag 14,9% testsúlyvesztést mutatott non-diabetic obesitásban, ami a bariátriai sebészet utáni eredményeket közelíti. A SUSTAIN-6 (Marso 2016 NEJM) és SELECT (Lincoff 2023 NEJM) trial-ek kardiovaszkuláris végpont-előnyt is igazoltak.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "A10BJ06"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "GLP-1 receptor-agonista"
    },
    {
      "label": "Felezési idő",
      "value": "~7 nap (heti adagolás)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 hét (étvágy), 12-16 hét (HbA1c steady-state)"
    }
  ],
  "mechanism": "GLP-1 receptor agonista, amely glükózfüggő módon (csak hyperglykaemia-nál) stimulálja a β-sejtek inzulin-szekrécióját, gátolja az α-sejtek glükagon-szekrécióját, lassítja a gyomorürülést, és a hipotalamuszban (POMC/CART neuronok) csökkenti az étvágyat és növeli a teltségérzetet. A C18 zsírsav-konjugáció albumin-kötést és lassú elimináció eredményez, ami a heti adagolást lehetővé teszi.",
  "legalStatus": "EU/HU: vényköteles (Ozempic T2DM-re, Wegovy obesitásra, Rybelsus orális T2DM). USA: FDA Rx Schedule None (nem ütemezett). 2022-2024 globális ellátási hiány, fekete piacon orvosi felügyelet nélküli használat dokumentálva (FDA warning compounded versions).",
  "onsetTime": "1-2 weeks (appetite suppression), 12-16 weeks (HbA1c steady-state)",
  "halfLife": "~7 days (enables once-weekly subcutaneous dosing)",
  "atcCode": "A10BJ06",
  "prescriptionStatus": "Vényköteles (Rx), egyes EU-országokban GLP-1 RA-szakorvosi szűkítés",
  "indications": [
    "2-es típusú cukorbetegség (Ozempic 0,25-2,0 mg heti)",
    "Krónikus súlykezelés obesitásban (Wegovy 2,4 mg heti, BMI ≥ 30 vagy BMI ≥ 27 + komorbiditás)",
    "2-es típusú cukorbetegség orális forma (Rybelsus 3-14 mg naponta)",
    "MACE-redukció T2DM-ben (Ozempic FDA cardiovascular indication, SUSTAIN-6 alapján)",
    "MACE-redukció overweight/obese non-diabetikus felnőtteknél ASCVD-vel (Wegovy 2024 FDA, SELECT alapján)"
  ],
  "contraindications": [
    "Személyes vagy családi medulláris pajzsmirigy-karcinóma (MTC) anamnézis",
    "Multiplex endokrin neoplázia 2 szindróma (MEN-2)",
    "Aktív pankreatitis vagy ismétlődő pankreatitisz története",
    "Terhesség és szoptatás (állatkísérletekben teratogén)",
    "Súlyos gasztroparezis vagy más jelentős GI-motilitási zavar"
  ],
  "commonSideEffects": [
    "GI-mellékhatások (>20%): hányinger, hányás, hasmenés, székrekedés, eructatio",
    "Dóziseszkalációs fázisban legkifejezettebb, általában 4-8 hét alatt enyhül",
    "Injekcióhely-reakció (Ozempic/Wegovy SC)",
    "Súlyos, ritka: akut pankreatitisz (FDA boxed warning), epekő (gyors súlyvesztés), diabéteszes retinopátia-progresszió (gyors glikémia-csökkenés)",
    "Súlyveszteség gyorsulása (-5 kg/3 hó) izomtömeg-csökkenéshez vezethet ellensúlyozó fehérje + ellenállás-edzés nélkül"
  ],
  "cyp450": [
    "Not metabolized by CYP450 (proteolytic degradation, similar to native peptides)",
    "No major CYP-mediated drug interactions"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureák: hipoglikémia-kockázat fokozása, dóziscsökkentés szükséges",
    "Orális gyógyszerek (Levothyroxin, warfarin, orális fogamzásgátló): a lassított gyomorürülés miatt felszívódás módosulhat, klinikailag általában nem szignifikáns",
    "Egyéb GLP-1 RA, DPP-4 inhibitor: redundáns mechanizmus, nem kombinálandó",
    "Metformin, SGLT2-i: szinergisztikus, racionális kombináció (ADA/EASD 2022)",
    "Alkohol: pankreatitisz-kockázat fokozhatja, mértékletesség"
  ],
  "benefits": [
    "HbA1c csökkenés átlag 1,5-1,8% (SUSTAIN trial-ek)",
    "Testsúlycsökkenés átlag 14,9% 68 hét alatt Wegovy 2,4 mg-mal (STEP-1)",
    "MACE-redukció T2DM-ben (SUSTAIN-6, HR 0,74)",
    "MACE-redukció overweight/ASCVD non-diabétikuson (SELECT 2023, HR 0,80)",
    "Heti egyszeri SC adagolás (vs napi inzulin), kényelmes compliance"
  ],
  "quickStart": [
    "Heti egyszeri SC injekció (has, comb, felkar), forgó adásterv",
    "Lassú titráció kötelező a GI-mellékhatások mitigálására (4 hét/dózisszint)",
    "Étkezések: kisebb adagok, lassabb evés, magas-fehérje előny (izomtömeg-védelem)",
    "Ellenállás-edzés heti 2-3x az izomtömeg-veszteség minimalizálására",
    "Hidratáció szigorúan (1,5-2 L/nap), GI-vesztések kompenzációja"
  ],
  "expectations": [
    {
      "label": "1-4. hét (0,25 mg)",
      "body": "Indító dózis, sub-terápiás. Cél a GI-tolerancia kialakítása. Étvágycsökkenés már észlelhető. Hányinger 20%-ban, általában enyhe."
    },
    {
      "label": "5-12. hét (0,5-1,0 mg)",
      "body": "Terápiás T2DM-dózis-tartomány. HbA1c-csökkenés és súlyvesztés (-3 ... -5 kg) megjelenik. GI-mellékhatások mérséklődnek."
    },
    {
      "label": "13-68. hét (1,7-2,4 mg, Wegovy)",
      "body": "Obesity-dózis-tartomány. STEP-1 trial: átlag 14,9% testsúlyvesztés. Cél a plateau elérése 60-68. hét körül. Bloodwork: lipid, HbA1c, máj-, vesefunkció, B12."
    }
  ],
  "quality": {
    "pure": [
      "Novo Nordisk Ozempic (T2DM), Wegovy (obesity), Rybelsus (orális T2DM): originator",
      "FlexTouch pen-injektor (Ozempic/Wegovy), egyszer-használatos tűkkel"
    ],
    "caution": [
      "FDA boxed warning: medulláris pajzsmirigy-karcinóma (MTC) rágcsálókban, klinikailag bizonytalan",
      "Akut pankreatitisz-eset jelentés, hasi fájdalomnál azonnali ellátás",
      "Diabéteszes retinopátia-progresszió gyors HbA1c-csökkenésnél (szemészeti monitor)",
      "Izomtömeg-veszteség gyors fogyásnál (DEXA-monitor ajánlott), fehérje + edzés ellensúlyoz",
      "Epekő (chol-lithiasis) kockázata megemelkedik 3-5%-kal a gyors fogyás miatt"
    ],
    "avoid": [
      "MTC vagy MEN-2 családi anamnézis (FDA boxed warning)",
      "Aktív pankreatitis vagy ismétlődő pankreatitisz történet",
      "Terhesség, szoptatás (animal teratogenicity, no human safety data)",
      "Súlyos gasztroparezis (a hatás kontraproduktív lehet)",
      "Korábbi súlyos hipersenzitivitás (anafilaxia, angioödéma) semaglutidra vagy bármely segédanyagra",
      "Egyidejű másik GLP-1 receptor agonista (Liraglutide, Dulaglutide, Tirzepatide) — redundáns kockázat",
      "Diabéteszes retinopátia gyors HbA1c-javulás mellett (progresszió-kockázat, oftalmológiai monitoring)"
    ]
  },
  "interactions": [
    "Metformin: szinergisztikus, ADA/EASD 2022 alapján standard kombináció",
    "SGLT2 inhibitor: háromféle szinergisztikus mechanizmus T2DM-ben",
    "Insulin: kombinálható, de dóziscsökkentés (~20%) szükséges hipoglikémia-kockázat miatt",
    "Sulfonylureák: hipoglikémia-kockázat, dóziscsökkentés vagy elhagyás javasolt",
    "Orális gyógyszerek (Levothyroxin, warfarin): gyomorürülés-lassítás miatt felszívódás módosulhat"
  ],
  "studies": [
    {
      "title": "Once-weekly semaglutide in adults with overweight or obesity (STEP-1)",
      "authors": "Wilding JPH, Batterham RL, Calanna S et al.",
      "journal": "N Engl J Med. 2021;384(11):989-1002.",
      "pmid": "33567185"
    },
    {
      "title": "Semaglutide and cardiovascular outcomes in patients with type 2 diabetes (SUSTAIN-6)",
      "authors": "Marso SP, Bain SC, Consoli A et al.",
      "journal": "N Engl J Med. 2016;375(19):1834-1844.",
      "pmid": "27633186"
    },
    {
      "title": "Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT)",
      "authors": "Lincoff AM, Brown-Frandsen K, Colhoun HM et al.",
      "journal": "N Engl J Med. 2023;389(24):2221-2232.",
      "pmid": "37952131"
    },
    {
      "title": "Oral semaglutide and cardiovascular outcomes in patients with type 2 diabetes (PIONEER 6)",
      "authors": "Husain M, Birkenfeld AL, Donsmark M et al.",
      "journal": "N Engl J Med. 2019;381(9):841-851.",
      "pmid": "31185157"
    },
    {
      "title": "Tirzepatide versus semaglutide once weekly in patients with type 2 diabetes (SURPASS-2)",
      "authors": "Frías JP, Davies MJ, Rosenstock J et al.",
      "journal": "N Engl J Med. 2021;385(6):503-515.",
      "pmid": "34170647"
    },
    {
      "title": "Tirzepatide once weekly for the treatment of obesity (SURMOUNT-5 head-to-head)",
      "authors": "Aronne LJ, Horn DB, le Roux CW et al.",
      "journal": "N Engl J Med. 2025.",
      "pmid": "40353578"
    },
    {
      "title": "Semaglutide 2.4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2)",
      "authors": "Davies M, Færch L, Jeppesen OK et al.",
      "journal": "Lancet. 2021;397(10278):971-984.",
      "pmid": "33667417"
    }
  ],
  "faq": [
    {
      "q": "Mi a különbség az Ozempic és a Wegovy között?",
      "a": "Mindkettő Semaglutide hatóanyag SC injekcióban, de eltérő dózisokkal és indikációkkal: Ozempic 0,25-2,0 mg/hét T2DM-re, Wegovy 0,25-2,4 mg/hét obesitásra (BMI ≥ 30, vagy BMI ≥ 27 + komorbiditás). A Rybelsus az orális forma T2DM-re (3-14 mg napi). A Semaglutide molekula azonos, csak a dózis-szint és a klinikai indikáció eltérő."
    },
    {
      "q": "Visszahízok-e a Semaglutide elhagyása után?",
      "a": "A STEP-4 trial (Rubino 2021 JAMA, PMID 33755728) szerint a Semaglutide elhagyása után 1 év alatt a visszahízás ~2/3-os (a kezdeti súlyveszteség kétharmada visszatér). Az obesity-szakorvosok jelenleg krónikus, élethosszig tartó terápiaként kezelik a hatóanyagot. A nem-farmakológiai életmódváltás (intenzív táplálkozás-coaching + ellenállás-edzés) a fenntartást támogatja, de teljesen nem helyettesíti."
    },
    {
      "q": "Mi a \"Ozempic-arc\" vagy \"GLP-1 muscle loss\" jelenség?",
      "a": "A gyors fogyás (>1% testsúly/hét) az arc subcutan zsírjának is elveszítésével jár, ami öregebb megjelenést okoz. A SURMOUNT-1 és STEP-trial-ek DEXA-adatai szerint a tömegcsökkenés ~25-40%-a izom (lean mass). Ennek mitigálására: napi 1,4-1,6 g/kg fehérje, heti 2-3 ellenállás-edzés, kreatin-monohidrát, lassú titráció. Sebészi súlyvesztés-trial-ekben hasonló arány jelentkezik."
    },
    {
      "q": "Mit mond a SELECT trial nem-diabéteszes obesitásban?",
      "a": "A Lincoff 2023 NEJM SELECT randomizált, placebo-kontrollált trial 17 604 overweight/obese, ASCVD-vel élő, NON-diabetic felnőttet követett (átlag 3,3 év). Semaglutide 2,4 mg hetente csökkentette a major adverse cardiovascular event (MACE) kockázatot 20%-kal (HR 0,80, p<0,001). Ez vezetett a 2024-es FDA-indikáció kibővítéséhez non-diabetic ASCVD-re."
    },
    {
      "q": "Mi a teendő, ha a hányinger nem múlik el?",
      "a": "Az esetek 80%-ában a hányinger a dóziseszkaláció fázisában legkifejezettebb, és 4-8 hét alatt jelentősen mérséklődik. Mitigációs lépések: kisebb és lassabb étkezés, kerülendő zsíros/édes ételek, hidratáció, üres gyomorral injektálni, dózisszinten maradni 4-8 hétig dóziseszkaláció helyett. Ha tartós, dóziscsökkentés vagy gyógyszer-csere (Tirzepatide hasonló hatékonyság, jobb GI-profil)."
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-4 (start)",
        "dose": "0.25"
      },
      {
        "phase": "Hét 5-8",
        "dose": "0.5"
      },
      {
        "phase": "Hét 9-12",
        "dose": "1.0"
      },
      {
        "phase": "Hét 13-16",
        "dose": "1.7"
      },
      {
        "phase": "Wegovy cél (obesity)",
        "dose": "2.4"
      }
    ],
    "unit": "mg/hét SC",
    "note": "Heti egyszeri SC injekció. Lassú titráció KÖTELEZŐ a GI-tolerancia kialakítására (4 hét/dózisszint). T2DM cél-dózis Ozempic 0,5-2,0 mg/hét, obesity cél-dózis Wegovy 2,4 mg/hét. GI-tüneteknél marad a dózisszinten 4-8 hétig dóziseszkaláció helyett."
  }
}
