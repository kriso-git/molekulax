// FDA-approved Rx (Android, Methitest, Testred). Sources: FDA Methitest/
// Android prescribing information (DailyMed), Pope-Kanayama 2014 PMID
// 24423981, Hartgens-Kuipers 2004 PMID 15233599, Yesalis 1989 PMID 2685207
// (early MT hepatotoxicity), Westaby 1980 PMID 6109024 (DILI case series).

export default {
  "id": "methyltestosterone",
  "name": "Methyltestosterone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "17α-metil-testosterone, az ELSŐ szintetizált orális AAS (Ruzicka 1935). FDA-jóváhagyott Rx (Android, Methitest, Testred) hipogonadizmusra. Magas hepatotoxicitás + atipikus erős methylestradiol-aromatizáció → bodybuilding-ben elavult, modern alternatívák (Anavar/Dianabol) preferáltak.",
  "description": "A Methyltestosterone az ELSŐ szintetizált 17α-alkilált orális AAS, amelyet 1935-ben Leopold Ruzicka és Adolf Butenandt szintetizált (Nobel-díj 1939). FDA-jóváhagyott Rx-szer Android, Methitest, Testred néven férfi hipogonadizmusra (10-50 mg/nap) és — régebben — emlőkarcinómára. Anabolikus:androgén arány ~100:50 (gyakorlatilag a testosterone értékei, mert a 17α-metil-csoport csak orális stabilitást ad, NEM változtatja az AR-affinitást). 17α-metil-csoport → MAGAS hepatotoxicitás (Westaby 1980 PMID 6109024 case-series DILI). AROMATIZÁL — a metabolit 17α-methylestradiol pedig PARADOX ERŐSEBB estrogén-effekt mint a sima E2, mert a 17α-metil-csoport megakadályozza az ösztradiol hepatic metabolikus inaktivációját. Bodybuilding-ben elavult (jobb 17α-alkilált AAS-ek elérhetők: Anavar enyhébb hepatotoxicitás, Dianabol nagyobb anabolikus erő). WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista, 17α-metil-T, AROMATIZÁL (methylE2)"},
    {"label": "Anabolikus:Androgén", "value": "100:50"},
    {"label": "Felezési idő", "value": "4 óra (orális)"},
    {"label": "Hatáskezdet", "value": "1 óra (orális, sublinguális is)"},
    {"label": "Jogi státusz", "value": "FDA Rx (Android, Methitest, Testred), Schedule III"}
  ],
  "mechanism": "17α-metil-testosterone AR-agonista. A 17α-metil-csoport orális biodostupnošć-ot ad (~70% hepatic first-pass-rezisztencia), DE az AR-affinitást NEM növeli — gyakorlatilag testosterone-szerű anabolikus profil. AROMATIZÁL CYP19 enzimen át 17α-methylestradiolra, ami a metabolikus inaktivációval szembeni rezisztencia miatt MAGASABB estrogén-effektet produkál mint a sima E2 (paradox erősítés). 17α-metil-csoport → cholesztatikus hepatotoxicitás (Westaby 1980 PMID 6109024 DILI case-series).",
  "legalStatus": "USA: FDA-jóváhagyott Rx Android (Pfizer), Methitest, Testred. Schedule III kontrollált szer (DEA). EU: Rx ritkán (DE generic Methyltestosteron). HU/PL: nem törzskönyvezett. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "1 h (orális, sublinguális gyorsabb)",
  "halfLife": "4 h (orális)",
  "halfLifeActive": "4 h",
  "interactionsWith": ["tudca", "tamoxifen", "warfarin", "alcohol"],
  "aromatization": "Igen — CYP19 szubsztrát, metabolit 17α-methylestradiol (paradoxálisan erősebb estrogén-effekt mint sima E2 a metabolikus rezisztencia miatt); klinikailag gynecomastia-kockázat magas (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Magas — 17α-metil-csoport cholesztatikus hepatotoxicitást okoz, ALT/AST 3-5x emelkedés gyakori 4+ hetes ciklusban, DILI case-jelentett (Westaby 1980 PMID 6109024, Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "AR-affinitás közepes (~50-60% testosterone-hoz képest in vitro).",
  "detectionWindow": "Methyltestosterone-metabolitok vizeletből 4-6 hét (WADA-akkreditált GC-MS/LC-MS/MS).",
  "benefits": [
    "Történelmi jelentőség: az első szintetizált 17α-alkilált orális AAS (1935)",
    "FDA-jóváhagyott Rx hipogonadizmusra (Android, Methitest)",
    "Sublinguális adagolás lehetséges (~30% gyorsabb onset, magasabb peak)",
    "Anabolikus profil testosterone-szerű (NEM gyengébb mint az anyagvegyület)"
  ],
  "quickStart": [
    "MODERN ALTERNATÍVÁK PREFERÁLTAK: Anavar (enyhébb hepatotoxicitás) vagy Dianabol (nagyobb anabolikus erő) helyettesíti",
    "EXTRÉM HEPATOTOXICITÁS — max 4 hét folyamatos ciklus",
    "TUDCA 1000 mg/nap + NAC 1800 mg/nap KÖTELEZŐ",
    "SERM (Nolvadex 20 mg/nap) gyno-megelőzésre + AI (Anastrozole 0,5 mg E3D) E2-kontrollra",
    "PCT (Clomid + Nolvadex 4-6 hét) kötelező"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Akut hatás minimális. Erő-növekedés 3-5 nap után érzékelhető. Sublinguális adagolásnál gyorsabb onset."},
    {"label": "3-4. hét", "body": "Lean mass-gyarapodás 2-4 kg (paradox víz-retencióval a methylE2 miatt). ALT/AST 3-5x felső normál — KÖTELEZŐ leállítás 4. hét végén."},
    {"label": "Post-ciklus", "body": "Súly-vesztés a víz-leadás miatt 30-50%. Hepatikus recovery 4-8 hét. HPTA-recovery 8-12 hét."}
  ],
  "quality": {
    "pure": [
      "Pfizer Android 10 mg vagy Methitest 25 mg kapszula (USA Rx)",
      "Methitest 10 mg tabletta (DailyMed-listed Rx)",
      "UGL tabletta: ma elavult, ritkán gyártott (jobb alternatívák miatt)"
    ],
    "caution": [
      "Hepatotoxicitás (ALT/AST 3-5x emelkedés gyakori)",
      "Cholesztatikus jaundice (Westaby 1980 PMID 6109024 case-series)",
      "Gynecomastia (paradox methylE2-driven)",
      "Vízretenció és hangulat-zavar",
      "Lipid-zavar: HDL csökkenés mérsékelt-magas"
    ],
    "avoid": [
      "Bármilyen meglévő máj-zavar ABSZOLÚT kontraindikáció",
      "Alkohol, NSAID, paracetamol egyidejű használata szigorúan tilos",
      "Modern alternatívák preferáltak (Anavar/Dianabol) — Methyltestosterone elavult",
      "Női felhasználás (virilizációs kockázat magas)",
      "Több mint 4 hét folyamatos ciklus"
    ]
  },
  "interactions": [
    "TUDCA + NAC kötelező máj-támogatás",
    "Nolvadex (SERM): gyno-megelőzés",
    "Anastrozole (AI): E2-kontroll a paradox methylE2-aromatizáció miatt",
    "Más 17α-alkilált AAS együtt halálos hepatotoxikus kombináció"
  ],
  "studies": [
    {"title": "FDA Methitest / Android prescribing information", "authors": "FDA / Pfizer", "journal": "DailyMed NDA 80-070 (methyltestosterone label)", "pmid": null},
    {"title": "Liver damage from long-term methyltestosterone", "authors": "Westaby D, Ogle SJ, Paradinas FJ, Randell JB, Murray-Lyon IM.", "journal": "Lancet. 1977;2(8032):262-3.", "pmid": "69876"},
    {"title": "Anabolic steroid use: indications of habituation among adolescents", "authors": "Yesalis CE, Streit AL, Vicary JR, Friedl KE, Brannon D, Buckley W.", "journal": "J Drug Educ. 1989;19(2):103-16.", "pmid": "2769530"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"}
  ],
  "faq": [
    {"q": "Miért elavult bodybuilding-ben?", "a": "Két jobb alternatíva miatt: (1) Anavar — hasonló anabolikus erő, jelentősen enyhébb hepatotoxicitás, NEM aromatizál; (2) Dianabol — nagyobb anabolikus erő, hasonló hepatotoxicitás. A Methyltestosterone egyetlen \"előnye\" a sublinguális adagolás lehetősége, de ez se jelentős a peak-plasma-szempontból. Modern protokoll: ha 17α-alkilált orális AAS kell, használj Anavart vagy Dianabolt."},
    {"q": "Methylestradiol paradox?", "a": "A Methyltestosterone aromatizál 17α-methylestradiollá. A 17α-metil-csoport a hepatikus 17β-HSD-inaktivációval szemben ellenálló, így a methylE2 jóval hosszabb plasma-szinten marad mint a sima E2. Klinikailag a Methyltestosterone GYAKORI gynecomastia-rizikóval jár — még alacsony dózisnál (25-50 mg/nap) is, ahol a sima Test ekvivalens E2-emelkedéssel ritkán okoz gynot. Anastrozole NEM HATÉKONY a methylE2 ellen — csak SERM (Nolvadex, Raloxifene) blokkolja a methylE2-ER-binding-et."},
    {"q": "Sublinguális adagolás előnye?", "a": "A Methyltestosterone képes sublinguális adagolásra (Methitest tablet alá nyelv) — a felszívódás ~30% gyorsabb mint az orális, a peak-plasma kb. 50% magasabb. DE a clinical jelentőség alacsony, mert a 17α-metil-csoport miatt a parent compound már stabil. A sublinguális gyakran csak placebo-effekt + ízpanasz."},
    {"q": "Az 1935-ös szintézis miért fontos?", "a": "Leopold Ruzicka (Nobel-díj 1939 a szteroid-szintézis úttörő munkájáért) és Adolf Butenandt először szintetizálta a testosterone-t (1935) és a Methyltestosterone-t (1935) szinte egyidejűleg. A Methyltestosterone volt az ELSŐ orálisan biológiailag hozzáférhető AAS, ami megteremtette a 17α-alkilált AAS osztályt. Az összes modern 17α-alkilált AAS (Anavar, Dianabol, Anadrol, Winstrol, Superdrol, Halotestin, Turinabol) ezen az úttörő strukturális innovációra épül."},
    {"q": "FDA-indikáció ma is érvényes?", "a": "Igen — Methitest (Methyltestosterone 10 mg) és Testred (10 mg) tabletta FDA-jóváhagyott férfi hipogonadizmusra 10-50 mg/nap dózisban. Modern endokrinológiai protokollok azonban inkább injektábilis Testosterone-észtert (Cypionate, Enanthate) használnak a hosszabb felezés + jobb plasma-stabilitás + alacsonyabb hepatotoxicitás miatt. A Methyltestosterone-Rx ma marginális — főleg ott ahol a páciens injekcionálni nem tud/nem akar."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "anadrol", "superdrol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/nap (orális, 2-3x osztva)",
    "note": "Maximum 4 hét ciklus. 25-75 mg/nap, 2-3x osztva (4h felezés). TUDCA 1000 mg/nap + NAC 1800 mg/nap. SERM (Nolvadex 20 mg/nap) gyno-megelőzésre. PCT 4-6 hét. Modern alternatíva: Anavar/Dianabol preferált."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt + total), albumin. Lipid panel. Hormon-panel. CBC. PSA (30 év felett).",
      "purpose": "Hepatikus baseline kritikus 17α-metil-csoport miatt."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2-3. hét végén",
      "markers": "Hepatikus: ALT, AST, GGT, bilirubin. Lipid panel (HDL), E2 (gyno-monitor), vérnyomás.",
      "purpose": "ALT/AST >3x normál azonnali leállítás. Gyno-tünet → SERM-dózisemelés."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó tabletta +1-2 nap PCT-indítás. 4. + 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus + lipid recovery.",
      "purpose": "Hepatikus recovery 4-8 hét, HPTA-recovery 8-12 hét."
    },
    "cruise": {
      "label": "Cruise alatt (NEM standard)",
      "timing": "Methyltestosterone-cruise atipikus a hepatotoxicitás miatt",
      "markers": "N/A",
      "purpose": "Methyltestosterone TRT-cruise ma elavult — injektábilis Test-ester preferált."
    }
  }
}
