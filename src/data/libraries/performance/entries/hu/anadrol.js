// FDA-approved (Anadrol-50, DailyMed/Alaven-Meda Pharmaceuticals). Sources:
// FDA Anadrol-50 prescribing information, Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221 (clinical
// review of oxymetholone in anemia), Schänzer 1996 PMID 8616181.

export default {
  "id": "anadrol",
  "name": "Anadrol (Oxymetholone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oxymetholone, 2-hidroxi-metilén-17α-metil-DHT-származék orális AAS. FDA-jóváhagyott (Anadrol-50) aplastiás és hipoplastiás anémiára. Klasszikus \"wet\" bulking szteroid; magas hepatotoxicitás és paradox estrogén-szerű mellékhatások.",
  "description": "Az Anadrol (Oxymetholone) eredetileg 1960-ban Syntex által szintetizált 2-hidroxi-metilén-17α-metil-DHT-származék orális AAS. FDA-jóváhagyott klinikai indikációk: aplasztikus anémia, congenitalis és szerzett vörösvérsejt-hiányos anémiák kezelése (Anadrol-50, ma Alaven/Meda Pharmaceuticals). Anabolikus:androgén arány 320:45 (magas anabolikus, mérsékelt androgén). A 17α-metil-csoport miatt magas hepatotoxicitás (egyik legmagasabb az AAS-ek között). A 2-hidroxi-metilén-csoport NEM CYP19 szubsztrát (nem aromatizál), DE direkt ER-agonista aktivitást is mutat — paradox \"estrogén-szerű\" mellékhatások (vízretenció, gynecomastia-rizikó) megjelennek aromatizáció nélkül is. Bodybuilding kontextusban \"wet\" bulking szteroid: 4-6 hét alatt 10-15 kg súlygyarapodás (jelentős részben víz + glikogén) dokumentált. WADA tiltott egész évben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista + direkt ER-agonista (paradox)"
    },
    {
      "label": "Anabolikus:Androgén",
      "value": "320:45"
    },
    {
      "label": "Felezési idő",
      "value": "8-9 óra (orális)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 óra (orális)"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA Rx (Anadrol-50), Schedule III, WADA tiltott"
    }
  ],
  "mechanism": "AR-agonista 2-hidroxi-metilén-17α-metil-DHT-származék. A 17α-metil-csoport orális biodostupnošć-ot ad (hepatikus first-pass-rezisztens, ~80% biológiai hozzáférhetőség). A 2-hidroxi-metilén-csoport TÖBB szokatlan effektet ad: (1) NEM CYP19 szubsztrát → NEM aromatizál; (2) DE direkt ER-agonista aktivitás → paradox estrogén-szerű mellékhatások (vízretenció, gyno-rizikó) megjelennek anti-aromatáz-kezelés ellenére is; (3) magas eritropoetin-szerű hatás (innen az anaemia-indikáció) — vörösvérsejt-szám és hemoglobin gyors emelkedése. Az ER-aktivitás miatt SERM (Nolvadex/Raloxifene) gyno-megelőzésre hatékony, AI (Anastrozol) NEM hatékony.",
  "legalStatus": "USA: FDA-jóváhagyott Rx Anadrol-50 (Alaven/Meda), Schedule III kontrollált szer (DEA). EU: vényköteles ritka import, nem törzskönyvezett magyar/lengyel piacon. HU/PL: vény nélkül illegális. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "1-2 h (orális)",
  "halfLife": "8-9 h (orális, parent compound)",
  "halfLifeActive": "~16 h (aktív metabolitokkal együtt)",
  "interactionsWith": [
    "tamoxifen",
    "raloxifene",
    "tudca",
    "warfarin"
  ],
  "aromatization": "Nem CYP19 szubsztrát — DE direkt ER-agonista aktivitás miatt estrogén-szerű mellékhatások (vízretenció, gynecomastia) megjelennek anti-aromatáz-kezelés ellenére is. Egyetlen védelem: SERM (Nolvadex 20 mg/nap vagy Raloxifene 60 mg/nap) (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Nagyon magas — 17α-metil-csoport extrém hepatikus first-pass-stressz, ALT/AST 5-10x emelkedés gyakori, cholesztatikus jaundice case-reportált. A legmagasabb hepatotoxicitású AAS-ek közé tartozik a Dianabollal és Superdrollal együtt (Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:45",
  "bindingAffinity": "Magas AR-affinitás + atipikus ER-aktivitás (Pope-Kanayama 2014 designer-AAS review).",
  "detectionWindow": "Oxymetholone-metabolitok vizeletből 6-8 hét (WADA-akkreditált GC-MS és LC-MS/MS; Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Gyors bulking: 10-15 kg súlygyarapodás 4-6 hét alatt (jelentős részben víz + glikogén)",
    "Drasztikus erő-növekedés: bench press és deadlift 1RM 15-25% emelkedés (Bhasin-extrapoláció)",
    "Vörösvérsejt-szám és hemoglobin gyors emelkedés (FDA-indikáció: anaemia)",
    "Ízületi kontroll: a vízretenció miatt mechanikus shock-absorber effekt, kevesebb edzésfájdalom"
  ],
  "quickStart": [
    "EXTRÉM HEPATOTOXICITÁS — max 4 hét folyamatos ciklus, NIKADA hosszabb",
    "TUDCA 1000-1500 mg/nap + NAC 1800 mg/nap KÖTELEZŐ a teljes ciklus alatt",
    "SERM (Nolvadex 20 mg/nap) gyno-megelőzésre — AI NEM hatékony az atipikus ER-aktivitás miatt",
    "ALT/AST 2-3 hetente labor, >3x felső normál esetén AZONNAL leállítás",
    "PCT (Clomid + Nolvadex 4-6 hét) kötelező a HPTA-helyreállításhoz"
  ],
  "expectations": [
    {
      "label": "Első hét",
      "body": "Akut súlygyarapodás 2-4 kg (víz + glikogén). Erő-növekedés markáns, edzés-pumpa drasztikus."
    },
    {
      "label": "3-4. hét",
      "body": "Maximum bulking effekt. 8-12 kg össz-súlygyarapodás. ALT/AST 3-5x felső normál gyakran ekkor manifesztálódik — KÖTELEZŐ ciklus-megszakítás 4. hét végén."
    },
    {
      "label": "Post-ciklus",
      "body": "Súly-vesztés 30-50% (víz-elvesztés a leállás után 2-3 héten belül). Pure lean mass-megőrzés ~4-6 kg dokumentált. Hepatikus recovery 4-8 hét."
    }
  ],
  "quality": {
    "pure": [
      "Anadrol-50 (Alaven/Meda Pharmaceuticals) original Rx tabletta, 50 mg",
      "UGL tabletta: HPLC-tesztelt forrás kötelező — Anadrol gyakran hamisított (Dianabol vagy Methylstenbolone helyettesítés)"
    ],
    "caution": [
      "Hepatotoxicitás (ALT/AST 5-10x emelkedés a leggyakoribb akut effekt)",
      "Vízretenció (\"holdképű\" arc, izom-kontúr elveszik)",
      "Vérnyomás-emelkedés (gyakran 140/90 felett, vízretenció + ren-AKI miatt)",
      "Hangulatzavar: agresszió (\"Anadrol rage\"), irritáció, depresszió kínzó",
      "Lipid-zavar drasztikus: HDL akár 60% csökkenés, LDL emelkedés"
    ],
    "avoid": [
      "Bármilyen meglévő máj-zavar (zsírmáj, hepatitis, ALT/AST baseline emelt) ABSZOLÚT kontraindikáció",
      "Alkohol, NSAID, paracetamol egyidejű használata szigorúan tilos",
      "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL, hypertonia) abszolút kontraindikáció",
      "Női felhasználás (virilizáció ekstrémen gyors a magas androgén-aktivitás miatt)",
      "Tervezett apaság (HPTA-szuppresszió hónapok-évek alatt áll csak helyre)",
      "Anaemia (paradox — a saját ER-aktivitás polycythaemiát okozhat)"
    ]
  },
  "interactions": [
    "Nolvadex (Tamoxifen) 20 mg/nap: gyno-megelőzés (SERM hatékony, AI NEM)",
    "TUDCA 1000-1500 mg/nap + NAC 1800 mg/nap: máj-támogatás kötelező",
    "Testosterone-base stack: szinergikus bulking, DE összesített hepatikus stressz drasztikus",
    "Warfarin: antikoaguláns hatás fokozódhat, INR szigorú monitor",
    "Más 17α-alkilált AAS (Dianabol, Superdrol, Winstrol) együttes használat halálos kombináció"
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
      "q": "Miért okoz vízretenciót, ha nem aromatizál?",
      "a": "Az Oxymetholone 2-hidroxi-metilén-csoportja közvetlen ER-agonista aktivitást ad — a CYP19 enzymeket teljesen megkerülve aktiválja az estrogén-receptorokat. Ezért az anti-aromatáz (Anastrozol, Letrozol) HASZNTALAN itt; csak SERM (Nolvadex, Raloxifene) blokkolja az ER-receptorokat közvetlenül. Ez az Anadrol-specifikus paradox effekt."
    },
    {
      "q": "Tényleg 10-15 kg-ot lehet hízni 4 hét alatt?",
      "a": "Igen, DE a túlnyomó rész (60-70%) víz és glikogén, NEM tiszta izom. A ciklus-vég után 2-3 héten belül 30-50% súly-vesztés várható (víz-leadás). Tiszta lean mass-megőrzés 4-6 kg dokumentált megfelelő edzéssel és PCT-vel. A \"10-15 kg\" szám realisztikus, de a végső eredmény NEM ennyi."
    },
    {
      "q": "Miért FDA-jóváhagyott, ha ennyire toxikus?",
      "a": "Az FDA-jóváhagyott indikáció (aplasztikus anémia) életmentő — a kockázat-haszon arány ezeknél a betegeknél kedvező. A bodybuilding off-label felhasználás NEM része az FDA-jóváhagyásnak; egészséges fiataloknál a 4 hetes 50-100 mg/nap dózis életveszélyes hepatotoxicitást okozhat (Pavlatos 2001 PMID 11329221 DILI case-reportok)."
    },
    {
      "q": "Anadrol vs Dianabol — melyik a roszabb?",
      "a": "Hepatotoxicitásban közel azonos (mindkettő top-2 a 17α-alkilált AAS-ek között). Aromatizációs profilban Dianabol klasszikus CYP19-aromatizáló (AI hatékony), Anadrol direkt ER-agonista (csak SERM hat). Bulking hatásban az Anadrol gyorsabb és drasztikusabb, de a Dianabol több izom-megőrzéssel csökken a ciklus után. Egyik sem ajánlott."
    },
    {
      "q": "Az Anadrol \"rage\" miatt érdemes elkerülni?",
      "a": "Igen, a pszichológiai mellékhatások (agresszió, irritáció, dührohamok) az Anadrolnál a legintenzívebbek az AAS-ek között. Kanayama 2009 PMID 19922565 cohort: az Anadrol-felhasználók 70%-a jelez markáns hangulatzavart. Ha pszichiátriai diszpozíció (depresszió, bipolar, anxiety disorder) van, abszolút kontraindikált."
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
    "unit": "mg/nap (orális, 1-2x osztva)",
    "note": "Maximum 4 hét ciklus, NIKADA tovább. 50-100 mg/nap, 1-2x osztva (rövid felezés). TUDCA 1000-1500 mg/nap + NAC 1800 mg/nap a teljes ciklus alatt. ALT/AST 2-3 hetente. SERM (Nolvadex 20 mg/nap) gyno-megelőzésre. PCT 4-6 hét (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt + total), albumin, INR. Mellé: lipid panel (LDL/HDL/TG), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolaktin), HbA1c, vesefunkció, CBC + hematokrit, vérnyomás napló.",
      "purpose": "Hepatikus baseline ABSZOLÚT kritikus a 17α-metil-csoport extrém first-pass-stressze miatt. Bármilyen ALT/AST emelkedés vagy zsírmáj-jel abszolút kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2. hét végén és 3. hét végén (kétszeres check rövid ciklus miatt)",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin. Mellé: lipid panel (HDL drasztikusan csökkenhet), vérnyomás (otthon, naponta), hematokrit (polycythaemia-rizikó), gynecomastia-monitor (mell-érzékenység + szem-vizsgálat).",
      "purpose": "Vész-detektálás KRITIKUS. ALT/AST >3x felső normál vagy bilirubin emelkedés AZONNALI ciklus-megszakítás. Vérnyomás >150/95 dose-csökkentés vagy leállítás. Gyno-tünet → SERM-dózisemelés."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó tabletta +1-2 nap PCT-indítás. PCT 4. hetén és 8-12. hetén hepatikus + HPTA recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.",
      "purpose": "HEPATIKUS recovery verifikálása abszolút kritikus. Ha ALT/AST nem normalizálódik 12 hét után, hepatológus konzultáció KÖTELEZŐ. HPTA-recovery típusosan 8-16 hét."
    },
    "cruise": {
      "label": "Cruise alatt (Anadrol-cruise NEM létezik — szigorúan ciklikus)",
      "timing": "Anadrol cruise-on TILOS — 4 hét után kötelező leállás. Ha bárki próbál cruise-olni, hepatikus failure rövid időn belül.",
      "markers": "N/A — Anadrol-cruise nem standard, nem javasolt egyetlen protokollban sem.",
      "purpose": "Az Anadrol kizárólag rövid (max 4 hét) bulking ciklusban használatos. Folyamatos használat fatális hepatikus következményeket okoz."
    }
  },
  "anecdote": "Az Anadrol 'vizesnek' tartott reputációval bír, de az anekdotikus beszámolók szerint nem csak vízgyarapodásról van szó — a felhasználók gyakran jellegzetesen sűrű, hiper-telt izomszerű megjelenésről számolnak be, mintha az izmok túltöltöttek lennének. Az erőnövekedések jellemzően hirtelenek és aránytalanok, gyakran a vártnál gyorsabban érkeznek, extrém pumpákkal. Néhány felhasználó étvágynövekedést is tapasztal, ami felerősíti a növekedési fázisokat. A kompromisszumok komolyak: az Anadrol hírhedt a vérnyomás-emelkedésről, a hematokrit-sűrűsödésről, az ödémáról és a lipid-zavarokról. A folyadékeltolódások hátizmi pumpákat, fejfájást és nyomásszerű érzeteket okozhatnak. A gyors testsúly-növekedés egy része átmeneti víz, de egy része valódi anabolikus gyorsulást képvisel. 17α-alkilált orálisként a máj-stressz nem elhanyagolható és nem szabad figyelmen kívül hagyni. A régimódi reputáció ellenére az Anadrol mechanisztikusan összetett a szokatlan ösztrogénszerű viselkedése és atipikus jelzési profilja miatt."
}
