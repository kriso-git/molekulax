// FDA-approved (Anadrol-50, DailyMed/Alaven-Meda Pharmaceuticals). Sources:
// FDA Anadrol-50 prescribing information, Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221 (clinical
// review of oxymetholone in anemia), Schänzer 1996 PMID 8616181.

export default {
  "id": "anadrol",
  "sideEffects": [
    { "hu": "Súlyos hepatotoxicitás: 17α-alkilált orális szerként ALT/AST 5-10x emelkedés, cholesztatikus icterus, ritkán peliosis hepatis és májtumor (adenoma, hepatocelluláris carcinoma) tartós használatnál", "en": "Severe hepatotoxicity: as a 17α-alkylated oral, 5-10x ALT/AST elevation, cholestatic jaundice, rarely peliosis hepatis and liver tumors (adenoma, hepatocellular carcinoma) with prolonged use", "pl": "Ciężka hepatotoksyczność: jako 17α-alkilowany doustny, wzrost ALT/AST 5-10x, żółtaczka cholestatyczna, rzadko peliosis hepatis i guzy wątroby (gruczolak, rak wątrobowokomórkowy) przy długim stosowaniu" },
    { "hu": "Paradox estrogén-szerű hatások aromatizáció nélkül: a direkt ER-agonista aktivitás vízretenciót, ödémát, puffadt \"holdképű\" arcot és gynecomastiát okoz; aromatázgátló (AI) itt hatástalan, csak SERM véd", "en": "Paradoxical estrogen-like effects without aromatization: direct ER-agonist activity causes water retention, edema, bloated face and gynecomastia; aromatase inhibitors are useless here, only a SERM protects", "pl": "Paradoksalne efekty estrogenopodobne bez aromatyzacji: bezpośrednia aktywność ER-agonisty powoduje zatrzymanie wody, obrzęki, opuchniętą twarz i ginekomastię; inhibitory aromatazy są tu nieskuteczne, chroni tylko SERM" },
    { "hu": "Drasztikus lipidromlás és vérnyomás-emelkedés: HDL akár 60%-os csökkenése, LDL emelkedés, vízretenció miatti hypertonia (gyakran 140/90 felett) – fokozott kardiovaszkuláris kockázat", "en": "Drastic lipid worsening and raised blood pressure: HDL drop up to 60%, rising LDL, water-retention hypertension (often above 140/90), increasing cardiovascular risk", "pl": "Drastyczne pogorszenie lipidów i wzrost ciśnienia: spadek HDL nawet o 60%, wzrost LDL, nadciśnienie z zatrzymania wody (często powyżej 140/90), zwiększone ryzyko sercowo-naczyniowe" },
    { "hu": "HPTA-szuppresszió: a saját tesztoszteron-termelés leáll, here-atrófia, csökkent libidó és spermiumszám; a helyreállás hónapokat vehet igénybe, PCT nélkül elhúzódó hypogonadizmus", "en": "HPTA suppression: endogenous testosterone production shuts down, testicular atrophy, reduced libido and sperm count; recovery can take months, with prolonged hypogonadism without PCT", "pl": "Supresja HPTA: zatrzymanie własnej produkcji testosteronu, atrofia jąder, obniżone libido i liczba plemników; powrót może trwać miesiące, przedłużony hipogonadyzm bez PCT" },
    { "hu": "Polycythaemia (eritrocitózis): a kifejezett eritropoetin-szerű hatás miatt megemelkedett hematokrit és vörösvérsejt-szám, ami fokozza a thrombosis, stroke és szívinfarktus kockázatát", "en": "Polycythemia (erythrocytosis): the pronounced erythropoietic effect raises hematocrit and red cell count, increasing the risk of thrombosis, stroke and heart attack", "pl": "Czerwienica (erytrocytoza): wyraźny efekt erytropoetyczny podnosi hematokryt i liczbę erytrocytów, zwiększając ryzyko zakrzepicy, udaru i zawału serca" },
    { "hu": "Androgén mellékhatások: akne, faggyútermelés, androgén típusú hajritkulás (predisponáltaknál), prosztata-megnagyobbodás idősebbeknél", "en": "Androgenic side effects: acne, increased sebum, androgenic hair thinning (in predisposed individuals), prostate enlargement in older men", "pl": "Działania androgenne: trądzik, zwiększone wydzielanie łoju, androgenowe przerzedzenie włosów (u predysponowanych), powiększenie prostaty u starszych mężczyzn" },
    { "hu": "Pszichiátriai hatások: kifejezett agresszió (\"Anadrol rage\"), irritabilitás, hangulatingadozás és depresszió; az AAS-ek között az egyik legintenzívebb hangulatzavar-profil", "en": "Psychiatric effects: marked aggression (\"Anadrol rage\"), irritability, mood swings and depression; one of the most intense mood-disturbance profiles among AAS", "pl": "Efekty psychiatryczne: wyraźna agresja (\"Anadrol rage\"), drażliwość, wahania nastroju i depresja; jeden z najintensywniejszych profili zaburzeń nastroju wśród AAS" },
    { "hu": "Virilizáció nőknél: mély hang, arc- és testszőrösödés, klitorisz-megnagyobbodás, menstruációs zavar – a magas androgén-aktivitás miatt gyorsan és gyakran visszafordíthatatlanul alakul ki", "en": "Virilization in women: deepened voice, facial and body hair, clitoral enlargement, menstrual disruption – develops fast and often irreversibly due to high androgenic activity", "pl": "Wirylizacja u kobiet: obniżenie głosu, owłosienie twarzy i ciała, przerost łechtaczki, zaburzenia miesiączkowania – rozwija się szybko i często nieodwracalnie ze względu na wysoką aktywność androgenną" }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy emelkedett baseline ALT/AST (zsírmáj, hepatitis, cholestasis) – abszolút kontraindikáció a 17α-alkilált szerkezet extrém máj-stressze miatt", "en": "Any pre-existing liver disease or elevated baseline ALT/AST (fatty liver, hepatitis, cholestasis) – absolute contraindication due to the extreme hepatic stress of the 17α-alkylated structure", "pl": "Jakakolwiek istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST (stłuszczenie, zapalenie wątroby, cholestaza) – bezwzględne przeciwwskazanie z powodu ekstremalnego obciążenia wątroby przez strukturę 17α-alkilowaną" },
    { "hu": "Terhesség és szoptatás: teratogén, a magzat virilizációját okozza – abszolút kontraindikáció", "en": "Pregnancy and breastfeeding: teratogenic, causes fetal virilization – absolute contraindication", "pl": "Ciąża i karmienie piersią: teratogenny, powoduje wirylizację płodu – bezwzględne przeciwwskazanie" },
    { "hu": "Meglévő vagy gyanított prosztata- vagy emlőkarcinóma, illetve férfi emlőkarcinóma – androgén-függő tumorok progresszióját okozhatja", "en": "Existing or suspected prostate or breast carcinoma, or male breast carcinoma – may drive progression of androgen-dependent tumors", "pl": "Istniejący lub podejrzewany rak prostaty lub piersi, lub rak piersi u mężczyzn – może napędzać progresję guzów androgenozależnych" },
    { "hu": "Kardiovaszkuláris kockázat: meglévő hypertonia, ischaemiás szívbetegség, dyslipidaemia vagy pozitív családi anamnézis – a HDL-zuhanás, vérnyomás-emelkedés és polycythaemia miatt", "en": "Cardiovascular risk: existing hypertension, ischemic heart disease, dyslipidemia or positive family history – due to HDL crash, raised blood pressure and polycythemia", "pl": "Ryzyko sercowo-naczyniowe: istniejące nadciśnienie, choroba niedokrwienna serca, dyslipidemia lub dodatni wywiad rodzinny – z powodu spadku HDL, wzrostu ciśnienia i czerwienicy" },
    { "hu": "Polycythaemia vagy emelkedett baseline hematokrit, illetve thrombosis/stroke a kórtörténetben – az eritropoetin-szerű hatás tovább növeli a hematokritot", "en": "Polycythemia or elevated baseline hematocrit, or a history of thrombosis/stroke – the erythropoietic effect raises hematocrit further", "pl": "Czerwienica lub podwyższony wyjściowy hematokryt, lub przebyta zakrzepica/udar – efekt erytropoetyczny dodatkowo podnosi hematokryt" },
    { "hu": "Tervezett apaság / fennálló fertilitási igény: a HPTA-szuppresszió a spermiumtermelést hónapokra-évekre lenyomhatja", "en": "Planned fatherhood / active fertility goals: HPTA suppression can depress sperm production for months to years", "pl": "Planowane ojcostwo / aktualne plany prokreacyjne: supresja HPTA może obniżać produkcję plemników na miesiące do lat" },
    { "hu": "Egyidejű hepatotoxikus terhelés: alkohol, paracetamol, NSAID-ok, más 17α-alkilált orális AAS (Dianabol, Superdrol, Winstrol) vagy meglévő pszichiátriai zavar (depresszió, bipoláris, szorongás)", "en": "Concurrent hepatotoxic load: alcohol, paracetamol, NSAIDs, other 17α-alkylated oral AAS (Dianabol, Superdrol, Winstrol), or pre-existing psychiatric disorder (depression, bipolar, anxiety)", "pl": "Jednoczesne obciążenie hepatotoksyczne: alkohol, paracetamol, NLPZ, inne 17α-alkilowane doustne AAS (Dianabol, Superdrol, Winstrol) lub istniejące zaburzenia psychiatryczne (depresja, choroba afektywna dwubiegunowa, lęk)" }
  ],
  "name": "Anadrol (Oxymetholone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oxymetholone, 2-hydroxymethylene-17α-methyl-DHT derivative oral AAS. FDA-approved (Anadrol-50) for aplastic and hypoplastic anemia. Classic \"wet\" bulking steroid; high hepatotoxicity and paradoxical estrogen-like side effects.",
  "description": "Anadrol (Oxymetholone) is a 2-hydroxymethylene-17α-methyl-DHT derivative oral AAS originally synthesized by Syntex in 1960. FDA-approved clinical indications: aplastic anemia, congenital and acquired red cell deficiency anemias (Anadrol-50, now Alaven/Meda Pharmaceuticals). Anabolic:androgenic ratio 320:45 (high anabolic, moderate androgenic). High hepatotoxicity due to 17α-methyl group (one of the highest among AAS). The 2-hydroxymethylene group is NOT a CYP19 substrate (does not aromatize), BUT shows direct ER agonist activity — paradoxical \"estrogen-like\" side effects (water retention, gynecomastia risk) appear even without aromatization. In bodybuilding context, a \"wet\" bulking steroid: 10-15 kg weight gain in 4-6 weeks (substantially water + glycogen) documented. WADA-banned year-round.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist + direct ER agonist (paradoxical)"
    },
    {
      "label": "Anabolic:Androgenic",
      "value": "320:45"
    },
    {
      "label": "Half-life",
      "value": "8-9 hours (oral)"
    },
    {
      "label": "Onset",
      "value": "1-2 h (oral)"
    },
    {
      "label": "Legal status",
      "value": "FDA Rx (Anadrol-50), Schedule III, WADA-banned"
    }
  ],
  "mechanism": "AR agonist 2-hydroxymethylene-17α-methyl-DHT derivative. The 17α-methyl group provides oral bioavailability (hepatic first-pass resistant, ~80% bioavailability). The 2-hydroxymethylene group provides SEVERAL unusual effects: (1) NOT a CYP19 substrate → does NOT aromatize; (2) BUT direct ER agonist activity → paradoxical estrogen-like side effects (water retention, gyno risk) appear despite anti-aromatase treatment; (3) high erythropoietin-like effect (hence the anemia indication) — red blood cell count and hemoglobin rise rapidly. Due to ER activity, SERM (Nolvadex/Raloxifene) is effective for gyno prevention, AI (Anastrozole) is NOT effective.",
  "legalStatus": "USA: FDA-approved Rx Anadrol-50 (Alaven/Meda), Schedule III controlled substance (DEA). EU: prescription rare import, not registered in HU/PL markets. HU/PL: illegal without prescription. WADA-banned year-round (S1.1.a).",
  "onsetTime": "1-2 h (oral)",
  "halfLife": "8-9 h (oral, parent compound)",
  "halfLifeActive": "~16 h (with active metabolites)",
  "interactionsWith": [
    "tamoxifen",
    "raloxifene",
    "tudca",
    "warfarin"
  ],
  "aromatization": "Not a CYP19 substrate — BUT due to direct ER agonist activity, estrogen-like side effects (water retention, gynecomastia) appear despite anti-aromatase treatment. Only protection: SERM (Nolvadex 20 mg/day or Raloxifene 60 mg/day) (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Very high — 17α-methyl group extreme hepatic first-pass stress, ALT/AST 5-10x rise common, cholestatic jaundice case-reported. Among the highest hepatotoxicity AAS together with Dianabol and Superdrol (Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:45",
  "bindingAffinity": "High AR affinity + atypical ER activity (Pope-Kanayama 2014 designer AAS review).",
  "detectionWindow": "Oxymetholone metabolites urinary 6-8 weeks (WADA-accredited GC-MS and LC-MS/MS; Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Rapid bulking: 10-15 kg weight gain in 4-6 weeks (substantially water + glycogen)",
    "Drastic strength gain: bench press and deadlift 1RM 15-25% increase (Bhasin extrapolation)",
    "Red blood cell count and hemoglobin rapid rise (FDA indication: anemia)",
    "Joint comfort: water retention provides mechanical shock-absorber effect, less training pain"
  ],
  "quickStart": [
    "EXTREME HEPATOTOXICITY — maximum 4 weeks continuous cycle, NEVER longer",
    "TUDCA 1000-1500 mg/day + NAC 1800 mg/day MANDATORY throughout the cycle",
    "SERM (Nolvadex 20 mg/day) for gyno prevention — AI is NOT effective due to atypical ER activity",
    "ALT/AST labs every 2-3 weeks, >3x upper normal = IMMEDIATE discontinuation",
    "PCT (Clomid + Nolvadex 4-6 weeks) mandatory for HPTA recovery"
  ],
  "expectations": [
    {
      "label": "First week",
      "body": "Acute weight gain 2-4 kg (water + glycogen). Strength gain marked, training pump dramatic."
    },
    {
      "label": "Week 3-4",
      "body": "Maximum bulking effect. 8-12 kg total weight gain. ALT/AST 3-5x upper normal often manifests here — MANDATORY cycle discontinuation at end of week 4."
    },
    {
      "label": "Post-cycle",
      "body": "Weight loss 30-50% (water loss within 2-3 weeks after stopping). Pure lean mass preservation ~4-6 kg documented. Hepatic recovery 4-8 weeks."
    }
  ],
  "quality": {
    "pure": [
      "Anadrol-50 (Alaven/Meda Pharmaceuticals) original Rx tablet, 50 mg",
      "UGL tablet: HPLC-tested source mandatory — Anadrol often counterfeited (Dianabol or Methylstenbolone substitution)"
    ],
    "caution": [
      "Hepatotoxicity (ALT/AST 5-10x rise the most common acute effect)",
      "Water retention (\"moon face\", muscle definition lost)",
      "Blood pressure elevation (often >140/90, due to water retention + renal-AKI)",
      "Mood disturbance: aggression (\"Anadrol rage\"), irritation, depressive crashes",
      "Lipid disturbance dramatic: HDL up to 60% drop, LDL rise"
    ],
    "avoid": [
      "Any existing hepatic disorder (fatty liver, hepatitis, baseline elevated ALT/AST) ABSOLUTE contraindication",
      "Concurrent alcohol, NSAID, paracetamol strictly prohibited",
      "Cardiovascular risk (family history, high LDL, hypertension) absolute contraindication",
      "Female use (extremely rapid virilization due to high androgenic activity)",
      "Planned fatherhood (HPTA suppression takes months-years to recover)",
      "Polycythemia (paradox — its own ER activity can cause polycythemia)"
    ]
  },
  "interactions": [
    "Nolvadex (Tamoxifen) 20 mg/day: gyno prevention (SERM effective, AI is NOT)",
    "TUDCA 1000-1500 mg/day + NAC 1800 mg/day: liver support mandatory",
    "Testosterone-base stack: synergistic bulking, BUT combined hepatic stress drastic",
    "Warfarin: anticoagulant effect may be potentiated, INR strict monitor",
    "Other 17α-alkylated AAS (Dianabol, Superdrol, Winstrol) concurrent use is a deadly combination"
  ],
  "studies": [
    {
      "title": "FDA Anadrol-50 prescribing information",
      "authors": "FDA / Alaven-Meda Pharmaceuticals",
      "journal": "DailyMed NDA 12-535 (oxymetholone label)",
      "pmid": null
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes.",
      "authors": "Hartgens F, Kuipers H",
      "journal": "Sports Med",
      "pmid": "15248788"
    },
    {
      "title": "Development of Liver Cancers as an Unexpected Consequence of Anabolic Androgenic Steroid Use.",
      "authors": "Khalid S, Laput G, Khorfan K, Khan A, Goyal A",
      "journal": "Cureus",
      "pmid": "36874750"
    },
    {
      "title": "Anabolic-Androgenic Steroids Revisited: Structural Biology, Receptor Signaling, and Mechanisms of Anabolic-Androgenic Dissociation.",
      "authors": "Wiacek M, Zubrzycki IZ",
      "journal": "Int J Mol Sci",
      "pmid": "41898445"
    },
    {
      "title": "Double-blind, randomized, placebo-controlled phase III trial of oxymetholone for the treatment of HIV wasting.",
      "authors": "Hengge UR, Stocks K, Wiehler H, Faulkner S, Esser S, Lorenz R, Brockmeyer NH",
      "journal": "AIDS",
      "pmid": "12646793"
    }
  ],
  "faq": [
    {
      "q": "Why does it cause water retention if it doesn't aromatize?",
      "a": "Oxymetholone's 2-hydroxymethylene group provides direct ER agonist activity — it completely bypasses the CYP19 enzymes and activates estrogen receptors directly. So anti-aromatase (Anastrozole, Letrozole) is USELESS here; only SERM (Nolvadex, Raloxifene) blocks the ER receptors directly. This is the Anadrol-specific paradoxical effect."
    },
    {
      "q": "Can you really gain 10-15 kg in 4 weeks?",
      "a": "Yes, BUT the vast majority (60-70%) is water and glycogen, NOT pure muscle. After cycle end, expect 30-50% weight loss within 2-3 weeks (water shedding). Pure lean mass preservation 4-6 kg documented with proper training and PCT. The \"10-15 kg\" number is realistic, but the final result is NOT that much."
    },
    {
      "q": "Why FDA-approved if so toxic?",
      "a": "FDA-approved indication (aplastic anemia) is life-saving — risk-benefit ratio is favorable in those patients. Bodybuilding off-label use is NOT part of FDA approval; in healthy young people, 50-100 mg/day for 4 weeks can cause life-threatening hepatotoxicity (Pavlatos 2001 PMID 11329221 DILI case reports)."
    },
    {
      "q": "Anadrol vs Dianabol — which is worse?",
      "a": "Hepatotoxicity roughly equal (both top-2 among 17α-alkylated AAS). Aromatization profile: Dianabol classical CYP19-aromatizing (AI effective), Anadrol direct ER agonist (only SERM works). In bulking effect Anadrol is faster and more dramatic, but Dianabol preserves more muscle after the cycle ends. Neither is recommended."
    },
    {
      "q": "Should I avoid Anadrol due to the \"rage\"?",
      "a": "Yes, the psychological side effects (aggression, irritation, fits of rage) are the most intense with Anadrol among AAS. Kanayama 2009 PMID 19922565 cohort: 70% of Anadrol users report marked mood disturbance. If psychiatric predisposition (depression, bipolar, anxiety disorder) is present, absolutely contraindicated."
    }
  ],
  "related": [
    "dianabol-info",
    "superdrol",
    "testosterone-info",
    "trenbolone-info",
    "nandrolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 75,
      "high": 100
    },
    "unit": "mg/day (oral, 1-2x split)",
    "note": "Maximum 4 weeks cycle, NEVER longer. 50-100 mg/day, 1-2x split (short half-life). TUDCA 1000-1500 mg/day + NAC 1800 mg/day throughout the cycle. ALT/AST every 2-3 weeks. SERM (Nolvadex 20 mg/day) for gyno prevention. PCT 4-6 weeks (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hepatic priority: ALT, AST, GGT, ALP, bilirubin (direct + total), albumin, INR. Plus: lipid panel (LDL/HDL/TG), hormone panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, kidney function, CBC + hematocrit, blood pressure log.",
      "purpose": "Hepatic baseline ABSOLUTELY critical due to 17α-methyl extreme first-pass stress. Any ALT/AST elevation or fatty liver sign is absolute contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "End of week 2 and end of week 3 (double-check due to short cycle)",
      "markers": "Hepatic priority: ALT, AST, GGT, bilirubin. Plus: lipid panel (HDL can drop drastically), blood pressure (home, daily), hematocrit (polycythemia risk), gyno monitor (breast tenderness + visual exam).",
      "purpose": "Emergency detection CRITICAL. ALT/AST >3x upper normal or bilirubin elevation = IMMEDIATE discontinuation. BP >150/95 dose reduction or stop. Gyno symptom → SERM dose increase."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "From last tablet +1-2 days PCT start. PCT week 4 and 8-12 hepatic + HPTA recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.",
      "purpose": "Verify HEPATIC recovery absolutely critical. If ALT/AST does not normalize by 12 weeks, hepatologist consultation MANDATORY. HPTA recovery typically 8-16 weeks."
    },
    "cruise": {
      "label": "On cruise (Anadrol cruise DOES NOT EXIST — strictly cyclical)",
      "timing": "Anadrol on cruise FORBIDDEN — mandatory discontinuation after 4 weeks. If anyone tries to cruise, hepatic failure within short time.",
      "markers": "N/A — Anadrol cruise is not standard, not recommended in any protocol.",
      "purpose": "Anadrol is used exclusively in short (max 4 weeks) bulking cycle. Continuous use causes fatal hepatic consequences."
    }
  },
  "anecdote": "Anadrol has a reputation for being 'wet,' but anecdotal reports describe more than just water gain — users often note a distinctly dense, hyper-full muscular look, almost as if muscles are overfilled. Strength increases tend to be abrupt and disproportionate, often arriving faster than expected, with extreme pumps. Some users also experience appetite increases that amplify growth phases. Tradeoffs are serious: Anadrol is notorious for blood pressure elevation, hematocrit thickening, edema, and lipid disruption. Fluid shifts can produce back pumps, headaches, and pressure-type sensations. Some of the rapid weight gain is transient water, but a portion represents genuine anabolic acceleration. As a 17α-alkylated oral, hepatic stress is non-trivial and should not be dismissed. Despite its old-school reputation, Anadrol is mechanistically complex due to its unusual estrogen-like behavior and atypical signaling profile."
}
