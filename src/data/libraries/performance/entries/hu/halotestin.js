// FDA-approved Rx (Halotestin, Upjohn 1957; Pfizer generic ma egyes EU
// piacokon). Sources: FDA Halotestin SmPC (discontinued USA 1992),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Schänzer 1996 PMID 8616181, Yesalis 2002 PMID 12047737.

export default {
  "id": "halotestin",
  "name": "Halotestin (Fluoxymesterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Fluoxymesterone, 9α-fluoro-11β-hidroxi-17α-metil-testosterone-származék orális AAS. Eredetileg FDA-jóváhagyott (Halotestin, Upjohn 1957). Az AAS-ek közül a legmagasabb androgén-aktivitású — boksz/powerlifting pre-competition \"strength-amplifier\" használat, MINIMÁLIS izomtömeg-építéssel.",
  "description": "A Halotestin (Fluoxymesterone) egy 9α-fluoro-11β-hidroxi-17α-metil-testosterone-származék orális AAS, amelyet 1956-ban Upjohn szintetizált, FDA-jóváhagyást 1957-ben kapott késleltetett pubertás, férfi hipogonadizmus és (régebben) emlőkarcinóma kezelésére. USA-piacról 1992-ben kivonva, Pfizer generic egyes EU-piacokon még elérhető. Anabolikus:androgén arány ~1900:850 (extrém — az AAS-ek közül a legmagasabb androgén-aktivitás). A 9α-fluoro + 11β-OH sztérikus blokkolás miatt NEM aromatizál + glükokortikoid receptor (GR) agonista aktivitás (ezért \"szárít\" és tüskés agressziót okoz). 17α-metil-csoport → MAGAS hepatotoxicitás. Bodybuilding NEM standard használat (NEM bulker, NEM jó cutting); kifejezetten boksz, powerlifting, strongman pre-competition \"strength + aggression amplifier\" 1-3 hét alatt 5-10% 1RM emelkedéssel és minimális tényleges izomtömeg-növekedéssel. Roy Jones Jr. (2003 Boxing News dopping-szkandallum) és sok más bokszoló pozitív tesztet adott Halotestinre. WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR + GR-agonista, 9α-fluoro, NEM aromatizál"},
    {"label": "Anabolikus:Androgén", "value": "1900:850"},
    {"label": "Felezési idő", "value": "9 óra (orális)"},
    {"label": "Hatáskezdet", "value": "1-2 óra (orális)"},
    {"label": "Jogi státusz", "value": "USA discontinued 1992, Pfizer generic EU, Schedule III"}
  ],
  "mechanism": "9α-fluoro-11β-hidroxi-17α-metil-testosterone AR-agonista, plusz glükokortikoid receptor (GR) gyenge agonista aktivitás. A 9α-fluoro a CYP19 (aromatáz) substrate-binding gátlása + szteroid metabolikus stabilitás-növelése; a 11β-OH további sztérikus blokkolás aromatáz-vé alakulás ellen. 17α-metil-csoport orális biodostupnošć (~80% hepatic first-pass-rezisztencia). A GR-aktivitás magyarázza a Halotestin egyedi tulajdonságait: (1) drasztikus cortisol-szerű \"szárító\" effekt (vízelvonás); (2) pszichológiai tüskés agresszió (\"Halo-rage\"); (3) erő-amplifikáció anélkül, hogy izomtömeg gyarapodna (cortisol-szerű proteindegradáció + központi idegrendszeri stimuláció kombinációja).",
  "legalStatus": "USA: discontinued (Upjohn 1992); Schedule III kontrollált szer (DEA). EU: Pfizer generic Fluoxymesterone egyes piacokon (DE/IT) Rx-szer. HU/PL: nem törzskönyvezett. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "1-2 h (orális)",
  "halfLife": "9 h (orális, parent compound)",
  "halfLifeActive": "9 h",
  "interactionsWith": ["tudca", "warfarin", "tamoxifen", "alcohol"],
  "aromatization": "Nem — 9α-fluoro-11β-OH sztérikus blokkolás CYP19 ellen; klinikailag E2-emelkedés gyakorlatilag nulla (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Nagyon magas — 17α-metil-csoport + a 9α-fluoro tovább fokozza a hepatikus stresszt; ALT/AST 3-7x emelkedés gyakori 4+ hetes ciklusban, cholesztatikus jaundice case-reportált (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "1900:850",
  "bindingAffinity": "Extrém magas AR-affinitás (~330% testosterone-hoz képest in vitro) plusz GR-affinitás (~10-15% cortisol-hoz képest).",
  "detectionWindow": "Halotestin-metabolitok (9α-fluoro-11β-hidroxi metabolitcsalád) vizeletből 2 hónap (WADA-akkreditált GC-MS/LC-MS/MS, Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Drasztikus erő-növekedés 1-3 hét alatt (5-10% 1RM, sub-elite/elite powerlifter szinten)",
    "Tüskés agresszió + központi idegrendszeri stimuláció (boksz, strongman, contact sport pre-competition)",
    "\"Szárító\" cortisol-szerű effekt (víz alóli definíció maximalizálás)",
    "NEM aromatizál → nincs E2-mellékhatás",
    "Minimális izomtömeg-növekedés → testtömeg-kategóriás versenyek (boksz, powerlifting súlykategória) nem érintettek"
  ],
  "quickStart": [
    "NEM standalone bulker, NEM cutting — Halotestin kifejezetten pre-competition strength-amplifier 1-3 hét alatt",
    "EXTRÉM HEPATOTOXICITÁS — max 4 hét folyamatos ciklus, NIKADA tovább",
    "TUDCA 1000 mg/nap + NAC 1800 mg/nap KÖTELEZŐ a teljes ciklus alatt",
    "Pszichológiai mellékhatás: \"Halo-rage\" — pszichiátriai prediszpozíció esetén abszolút kontraindikált",
    "Bloodwork ciklus előtt + 2 hét + post — ALT/AST priorítás"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Akut hatás: 3-5 nap után tüskés agresszió, edzés-fókusz drasztikus növekedés, 1RM emelkedés 2-5%."},
    {"label": "2-3. hét", "body": "Maximum erő-növekedés (5-10% 1RM), \"szárító\" effekt érzékelhető (víz alóli izomzat-kontúr maximalizálva). ALT/AST 3-7x felső normál — KÖTELEZŐ ciklus-megszakítás 3-4. hét végén."},
    {"label": "Post-ciklus", "body": "Erő-csökkenés gyors (1-2 hét alatt visszatérés baseline-re), izomtömeg-megőrzés minimális (nem volt mit megőrizni). Hepatikus recovery 4-8 hét."}
  ],
  "quality": {
    "pure": [
      "Pfizer Fluoxymesterone generic 5 mg vagy 10 mg tabletta (EU-Rx, ritkán beszerezhető)",
      "UGL tabletta: HPLC-tesztelt forrás kötelező — Halotestin gyakran hamisított (Anavar/Methyltestosterone helyettesítés)"
    ],
    "caution": [
      "Hepatotoxicitás extrém (ALT/AST 3-7x emelkedés a leggyakoribb akut effekt)",
      "Pszichológiai: \"Halo-rage\", agresszió, irritáció — családi/munkahelyi konfliktus-rizikó",
      "Lipid-zavar drasztikus: HDL akár 50% csökkenés 4 hét alatt",
      "Vérnyomás emelkedés (140/90 felett gyakran)"
    ],
    "avoid": [
      "Bármilyen meglévő máj-zavar ABSZOLÚT kontraindikáció",
      "Alkohol, NSAID, paracetamol szigorúan tilos",
      "Pszichiátriai prediszpozíció (depresszió, bipolar, anxiety, agressziós zavarok) abszolút kontraindikáció",
      "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL, hypertonia)",
      "Női felhasználás (extrém androgén-aktivitás → gyors irreverzibilis virilizáció)",
      "Bulking/bodybuilding cél — Halotestin NEM erre való",
      "Több mint 4 hét folyamatos ciklus (kumulatív hepatotoxicitás)"
    ]
  },
  "interactions": [
    "TUDCA + NAC kötelező máj-támogatás",
    "Testosterone-base stack: szinergikus erő-növekedés, DE hepatikus stressz drasztikus",
    "Warfarin: antikoaguláns hatás fokozódhat, INR szigorú monitor",
    "Más 17α-alkilált AAS-szal (Anadrol, Dianabol) együtt halálos kombináció",
    "Pszichoaktív szerek (SSRI, MAOI) NEM kombinálható (\"Halo-rage\" + szerotonin-zavar)"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8674183"},
    {"title": "Anabolic-androgenic steroid abuse and performance-enhancing drugs among adolescents", "authors": "Bahrke MS, Yesalis CE, Brower KJ.", "journal": "Child Adolesc Psychiatr Clin N Am. 1998;7(4):821-38.", "pmid": "9894044"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"}
  ],
  "faq": [
    {"q": "Miért nem épít izmot, ha annyira erős androgén?", "a": "A Halotestin egyedi GR (glükokortikoid receptor) agonista aktivitása paradox: a magas androgén-aktivitás (AR) elméletileg anabolikus, DE a GR-aktivitás cortisol-szerű proteindegradációt indukál egyidejűleg. A nettó hatás: drasztikus erő-növekedés (központi idegrendszeri stimuláció + neuromuszkuláris hatékonyság) MINIMÁLIS tényleges izomtömeg-gyarapodás mellett. Pre-competition strength-amplifier, NEM bulker."},
    {"q": "Mennyire valós a \"Halo-rage\"?", "a": "Klinikailag dokumentált. Kanayama 2009 PMID 19922565 cohort + boxing/UFC-irodalom esetjelentések szerint a Halotestin a leg-pszichotrop AAS — agresszió, irritáció, hangulatingadozás extrémebb mint az Anadrol vagy Trenbolone esetén. Több bokszoló (Roy Jones Jr. 2003, James Toney 2005) pozitív teszt + dokumentált viselkedés-változás. Pszichiátriai prediszpozíció esetén ABSZOLÚT kontraindikált."},
    {"q": "Boksz/MMA-ban miért használnak Halotestint?", "a": "Három ok: (1) extrém erő-növekedés 1-3 hét alatt testtömeg-növekedés NÉLKÜL (boksz súlykategória nem változik); (2) tüskés agresszió mérkőzés-pszichológiához; (3) \"szárító\" effekt mérlegelés előtti vízelvonáshoz. WADA tiltott, USADA-tesztek detektálják 2 hónapig. Erős mellékhatás-profil miatt általában csak 1-2 héttel mérkőzés előtt használt (\"peak week\"), max 10-30 mg/nap."},
    {"q": "Hepatotoxicitás vs Anadrol?", "a": "Halotestin valamivel hepatotoxikusabb az Anadrolnál — a 9α-fluoro + 17α-metil kombináció extrémebb hepatic stresszt okoz mint a 2-hidroxi-metilén + 17α-metil az Anadrolnál. Mindkettő top-3 a 17α-alkilált AAS hepatotoxicitási rangsorban (Superdrol-Halotestin-Anadrol). Egyik sem ajánlott."},
    {"q": "Roy Jones Jr. 2003 esete?", "a": "Roy Jones Jr. 2003-ban Antonio Tarver elleni címmeccs után pozitív tesztet adott a Halotestin metabolitokra. Az IBF és WBA cím elveszítését okozó pozitív teszt; Jones tagadta, ügyvédi vita maradt. Az eset hozzájárult a Halotestin \"boxer steroid\" hírnévhez."}
  ],
  "related": ["dianabol-info", "anadrol", "superdrol", "anavar-info", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 10, "medium": 20, "high": 40},
    "unit": "mg/nap (orális, 1-2x osztva)",
    "note": "Maximum 4 hét ciklus, NIKADA tovább. 10-40 mg/nap, 1-2x osztva (rövid felezés). TUDCA 1000 mg/nap + NAC 1800 mg/nap a teljes ciklus alatt. ALT/AST 2 hetente. Pre-competition használat tipikusan 1-3 hét, max 30 mg/nap (\"peak week\")."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt + total), albumin, INR. Mellé: lipid panel (LDL/HDL/TG), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Cortisol), HbA1c, vesefunkció, CBC, vérnyomás napló.",
      "purpose": "Hepatikus baseline ABSZOLÚT kritikus. Cortisol-baseline a Halotestin GR-aktivitása miatt érdekes (cortisol-emelkedés post-ciklus várható)."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2. hét végén",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin. Mellé: lipid panel (HDL drasztikus csökkenés), vérnyomás (otthon, naponta), hangulat-napló.",
      "purpose": "Vész-detektálás. ALT/AST >3x felső normál vagy bilirubin emelkedés AZONNALI ciklus-megszakítás. Pszichológiai mellékhatás-monitor a partnerrel kommunikálva."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó tabletta +1-2 nap PCT-indítás. PCT 4. hetén és 8-12. hetén hepatikus + HPTA recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus panel (recovery), lipid panel (HDL recovery), Cortisol (post-GR-aktivitás).",
      "purpose": "HEPATIKUS recovery verifikálása abszolút kritikus. Ha ALT/AST nem normalizálódik 12 hét után, hepatológus konzultáció KÖTELEZŐ."
    },
    "cruise": {
      "label": "Cruise alatt (Halotestin-cruise NEM létezik — szigorúan ciklikus)",
      "timing": "Halotestin cruise-on TILOS — 4 hét után kötelező leállás. Folyamatos használat hepatikus failure.",
      "markers": "N/A — Halotestin-cruise nem standard.",
      "purpose": "Halotestin kizárólag rövid (max 4 hét, tipikusan 1-3 hét) pre-competition ciklusban használt."
    }
  }
}
