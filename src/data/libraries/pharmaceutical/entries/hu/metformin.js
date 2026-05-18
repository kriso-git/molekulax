// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.563Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "metformin",
  "name": "Metformin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "A 2-es típusú cukorbetegség első-vonal orális kezelése világszerte. WHO Essential Medicines, ADA és EASD guideline-anchor 1957 óta.",
  "description": "A Metformin egy biguanid-osztálybeli orális antidiabetikum, amelynek elsődleges hatása a máj glükoneogenezisének gátlása az AMP-aktivált protein-kináz (AMPK) aktivációján keresztül. A jelenleg engedélyezett legbiztonságosabb és legolcsóbb T2DM-szer, amely a UKPDS-34 (1998, Lancet) óta a kardiovaszkuláris végpontokban is bizonyított előnnyel rendelkezik túlsúlyos cukorbetegeknél. Az ADA/EASD 2022 konszenzus szerint a Metformin a kezdő gyógyszer minden olyan T2DM-betegnél, akinél nincs ASCVD, szívelégtelenség vagy CKD-prioritás (ott SGLT2-i vagy GLP-1 RA előtérben). Off-label indikációk: prediabétesz (DPP 2002 NEJM), PCOS-anovuláció, gesztációs diabétesz, antipszichotikum-indukált súlygyarapodás mitigálása.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "A10BA02"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "AMPK-aktivátor, hepatikus glukoneogenezis-gátló"
    },
    {
      "label": "Felezési idő",
      "value": "4-9 óra (plazma), 17 óra (vörösvértest)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-3 óra (egyszeri dózis), 4-7 nap (steady-state HbA1c)"
    }
  ],
  "mechanism": "Az AMPK aktivációján keresztül gátolja a hepatikus glükoneogenezist (PEPCK és G6Pase represszió), csökkenti a mitokondriális komplex I aktivitását (Owen 2000 Biochem J), növeli a perifériás inzulin-érzékenységet és a glükóz-felvételt a vázizomban. Nem stimulálja az inzulin-szekréciót, ezért hipoglikémia-kockázata monoterápiában minimális.",
  "legalStatus": "EU/HU: vényköteles (Glucophage, Siofor, Metfogamma, Adimet). USA: FDA Rx (Glucophage, Fortamet, Glumetza). Nincs visszaélési potenciálja, nem ütemezett szer. PCOS és prediabétesz indikációkban off-label, de széles körű klinikai gyakorlatban.",
  "onsetTime": "1-3 h (single dose), 4-7 days (steady-state HbA1c lowering)",
  "halfLife": "4-9 h (plasma), ~17 h (erythrocyte compartment)",
  "atcCode": "A10BA02",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "2-es típusú cukorbetegség (T2DM) első-vonal kezelése",
    "Prediabétesz progresszió-megelőzés (off-label, DPP 2002 evidencia)",
    "Policisztás ovárium szindróma (PCOS), anovuláció és inzulinrezisztencia",
    "Gesztációs diabétesz (második vonal, insulin után)",
    "Antipszichotikum-indukált súlygyarapodás mitigálása"
  ],
  "contraindications": [
    "Súlyos vesefunkció-zavar (eGFR < 30 ml/min/1.73 m²)",
    "Akut metabolikus acidózis (diabéteszes ketoacidózis, laktát-acidózis történet)",
    "Akut súlyos szívelégtelenség, hipoxiás állapot, sokk",
    "Súlyos májfunkció-zavar",
    "Iodine-tartalmú kontraszt-anyaggal való vizsgálat előtt 48 óráig szünet"
  ],
  "commonSideEffects": [
    "Gasztrointesztinális: hányinger, hasmenés, hasi diszkomfort (20-30%, étkezéssel csökkenthető)",
    "Fémes íz a szájban (átmeneti)",
    "B12-vitamin felszívódás csökkenése hosszú távú használat mellett (évente kontroll)",
    "Súlyos, de ritka: laktát-acidózis (< 0.03 eset / 1000 betegév, főleg veseelégtelenségnél)"
  ],
  "cyp450": [
    "No significant CYP450 metabolism",
    "OCT1/OCT2 transporter substrate",
    "MATE1/MATE2-K renal excretion"
  ],
  "crossMolInteractions": [
    "Iodine-kontraszt: 48 órás szünet a vizsgálat előtt és után, vesefunkció ellenőrzés",
    "Alkohol: laktát-acidózis kockázat fokozása, mértékletesség kötelező",
    "Cimetidin, Dolutegravir: OCT2-blokk, plasma Metformin-szint emelkedhet",
    "Furoszemid, Hidroklorotiazid: hiperglikémiás tendencia (gyógyszer-hatás csökkenhet)",
    "GLP-1 RA, SGLT2-i: szinergisztikus, racionális kombinálás (ADA/EASD 2022)"
  ],
  "benefits": [
    "HbA1c csökkenés tipikusan 1,0-1,5% (monoterápiában)",
    "Súlyneutrális vagy enyhén súlycsökkentő (átlag -2 kg)",
    "Kardiovaszkuláris végpont-előny túlsúlyos T2DM-en (UKPDS-34)",
    "Monoterápiában hipoglikémia-kockázata minimális",
    "Olcsó, generikus, évtizedes biztonsági adat (1957 óta)"
  ],
  "quickStart": [
    "Vesefunkció ellenőrzése (eGFR) a kezdés előtt, majd 6-12 havonta",
    "Mindig étkezéssel vegye be a GI-mellékhatások csökkentésére",
    "Lassú titráció: 500 mg/nap, hetente emelve a tolerancia szerint",
    "XR (extended release) formula jobban tolerált, mint az IR",
    "B12-szint mérése évente hosszú távú használat mellett"
  ],
  "expectations": [
    {
      "label": "Első hét",
      "body": "500 mg/nap, étkezéssel. GI-mellékhatások (hányinger, lágy szék) gyakori 30%-ban, általában 1-2 hét alatt enyhülnek."
    },
    {
      "label": "2-4. hét",
      "body": "Lassú dóziseszkaláció 1000-1500 mg/napra. GI-tünetek mérséklődnek. Vércukor-monitor (otthon mért FPG és/vagy CGM)."
    },
    {
      "label": "3-4. hónap",
      "body": "HbA1c-mérés. Tipikus csökkenés 1,0-1,5% monoterápiában. Ha cél (általában < 7%) nem érhető el, ADA/EASD 2022 alapján második szer hozzáadása (GLP-1 RA, SGLT2i)."
    }
  ],
  "quality": {
    "pure": [
      "Bayer Glucophage, Merck Siofor, Adimet (HU), Metformax (PL): referencia gyógyszerek",
      "Generikus formák szintén bioekvivalensek (FDA Orange Book AB-rating)"
    ],
    "caution": [
      "Akut betegség (láz, dehidráció): átmenetileg szüneteltetni a laktát-acidózis-kockázat miatt",
      "eGFR 30-45 ml/min: dóziscsökkentés szükséges, eGFR < 30: kontraindikált",
      "B12-hiány hosszú távú használat mellett, évente kontroll"
    ],
    "avoid": [
      "Súlyos vesefunkció-zavar (eGFR < 30)",
      "Diabéteszes ketoacidózis vagy egyéb metabolikus acidózis",
      "Súlyos szívelégtelenség (NYHA III-IV), hipoxia, sokk",
      "Jód-kontrasztos képalkotás napján és 48 órán át utána (laktoacidózis-kockázat, vesefunkció ellenőrzéséig)",
      "Akut súlyos infekció, szepszis, dehidráció (átmeneti felfüggesztés a laktoacidózis-kockázat miatt)",
      "Súlyos májkárosodás (csökkent laktát-clearance, kontraindikált az FDA-címke szerint)"
    ]
  },
  "interactions": [
    "GLP-1 RA (Semaglutide, Liraglutide): szinergisztikus, racionális kombináció (ADA/EASD 2022)",
    "SGLT2-inhibitor (Empagliflozin, Dapagliflozin): kardio-reno-protektív kombináció",
    "Inzulin: kombinálható, de inzulin-dóziscsökkentés szükséges lehet",
    "Iodine-kontraszt: 48 órás szünet a vizsgálat előtt, vesefunkció ellenőrzés",
    "Alkohol: laktát-acidózis kockázat, mértékletesség"
  ],
  "studies": [
    {
      "title": "Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34)",
      "authors": "UK Prospective Diabetes Study (UKPDS) Group.",
      "journal": "Lancet. 1998;352(9131):854-65.",
      "pmid": "9742977"
    },
    {
      "title": "Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin (DPP)",
      "authors": "Diabetes Prevention Program Research Group.",
      "journal": "N Engl J Med. 2002;346(6):393-403.",
      "pmid": "11832527"
    },
    {
      "title": "Evidence that metformin exerts its anti-diabetic effects through inhibition of complex 1 of the mitochondrial respiratory chain",
      "authors": "Owen MR, Doran E, Halestrap AP.",
      "journal": "Biochem J. 2000;348(Pt 3):607-14.",
      "pmid": "10839993"
    },
    {
      "title": "Role of AMP-activated protein kinase in mechanism of metformin action",
      "authors": "Zhou G, Myers R, Li Y et al.",
      "journal": "J Clin Invest. 2001;108(8):1167-74.",
      "pmid": "11602624"
    },
    {
      "title": "Management of hyperglycaemia in type 2 diabetes, 2022. A consensus report by ADA and EASD",
      "authors": "Davies MJ, Aroda VR, Collins BS et al.",
      "journal": "Diabetologia. 2022;65(12):1925-1966.",
      "pmid": "36151309"
    },
    {
      "title": "Metformin use in pregnancy: promises and concerns",
      "authors": "Lindsay RS, Loeken MR.",
      "journal": "Diabetologia. 2017;60(9):1612-1619.",
      "pmid": "28770325"
    },
    {
      "title": "Long-term metformin use and vitamin B12 deficiency in the Diabetes Prevention Program Outcomes Study",
      "authors": "Aroda VR, Edelstein SL, Goldberg RB et al.",
      "journal": "J Clin Endocrinol Metab. 2016;101(4):1754-61.",
      "pmid": "26900641"
    }
  ],
  "faq": [
    {
      "q": "Mikor érdemes Metformint Semaglutide-ra vagy SGLT2-i-re cserélni?",
      "a": "Az ADA/EASD 2022 alapján nem feltétlenül kell cserélni, hanem általában hozzá kell adni. ASCVD vagy szívelégtelenség jelenléténél GLP-1 RA vagy SGLT2-i priorizálandó már első-vonalban is, akár Metformin nélkül. CKD-prioritásnál (albuminuria) SGLT2-i."
    },
    {
      "q": "Mit jelent a laktát-acidózis kockázata?",
      "a": "A modern adatok szerint a Metformin-asszociált laktát-acidózis incidenciája < 0,03 eset / 1000 betegév normál vesefunkció mellett, ami a régi Phenformin-éval (kivont 1977) nem hasonlítható össze. Súlyos akut betegség, dehidráció, vesekárosodás, alkohol-abúzus, kontraszt-MR/CT mind külön kockázatfaktor."
    },
    {
      "q": "Mi a teendő, ha GI-mellékhatások nem múlnak?",
      "a": "Először lassítsa a titrációt (500 mg/2 hét), válassza az XR (extended release) készítményt, mindig étkezéssel vegye be. Ha 4 hét után sem javul, fontolóra veendő dóziscsökkentés vagy alternatív szer (SGLT2-i, GLP-1 RA). DPP-iratok szerint ~5% véglegesen nem tolerálja."
    },
    {
      "q": "Használható-e a Metformin terhességben?",
      "a": "Az ACOG és NICE iránymutatások szerint a gesztációs diabétesz második vonalbeli kezelése Metforminnal megengedhető, ha inzulin nem opció vagy beteg preferenciája. Az MiG-trial (Rowan 2008 NEJM PMID 18463376) safety-igazolta. Hosszú távú gyermek-followup adatok kedvezőek, de inzulin marad a gold standard."
    },
    {
      "q": "Életmód-változás helyettesítheti a Metformint?",
      "a": "A DPP (2002 NEJM) trial szerint az intenzív életmód-intervenció (7%-os testsúlycsökkenés, heti 150+ perc fizikai aktivitás) 58%-kal csökkentette a T2DM kialakulását prediabéteszesnél, szemben a Metformin 31%-ával. Tehát az életmód superior, de a Metformin compliance-szempontból tartós (DPPOS 10-éves követés). T2DM-ben már nem helyettesíti, csak kiegészíti."
    }
  ],
  "related": [
    "semaglutide"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-2",
        "dose": "500"
      },
      {
        "phase": "Hét 3-4",
        "dose": "1000"
      },
      {
        "phase": "Hét 5-8",
        "dose": "1500"
      },
      {
        "phase": "Cél-dózis",
        "dose": "2000"
      }
    ],
    "unit": "mg/nap",
    "note": "Lassú titráció a GI-tolerancia érdekében. Mindig étkezéssel, lehetőleg az XR (extended release) készítményt válassza. Max 2000-2550 mg/nap, vesefunkció (eGFR) függvényében dóziscsökkentés."
  }
}
