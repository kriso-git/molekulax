// Population Council male contraceptive research (1990s-2000s). Sources:
// Sundaram 1995 PMID 7657009 (MENT pharmacology), Anderson 1999 PMID 10024455
// (MENT contraceptive trial), Pope-Kanayama 2014 PMID 24423981, Hartgens-
// Kuipers 2004 PMID 15233599, Kumar 1995 PMID 7779238. Cross-framed as
// synthetic androgen (Test column); progestin frame (19-Nor) is sub-task 4.

export default {
  "id": "ment-test",
  "name": "MENT (Trestolone) — synthetic androgen frame",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#1D9E75",
  "tagColor": "rgba(29,158,117,0.18)",
  "shortDesc": "Trestolone (7α-methyl-19-nortestosterone, MENT) Population Council 1990s male contraceptive candidate. Synthetic androgen — ~8-10x AR affinity vs testosterone, NOT 17α-alkylated → low hepatotoxicity. Two variants: Acetate (short) and Enanthate (slow). Cross-framed: 19-Nor analog separate entry.",
  "description": "MENT (Trestolone, 7α-methyl-19-nortestosterone) is a synthetic androgen steroid developed by the Population Council (NYC) in the late 1990s-early 2000s as a male contraceptive candidate (Anderson 1999 PMID 10024455 clinical trial). Anabolic/androgenic activity is ~8-10x testosterone in vitro AR-binding assay (Sundaram 1995 PMID 7657009) — one of the strongest synthetic androgens. The 7α-methyl group inhibits 5α-reductase substrate binding (does NOT convert to DHT → lower scalp-DHT and prostate androgenic activity than testosterone), while the 19-nor structure also shows PROGESTOGENIC ACTIVITY (cross-framed entry character: here in the synthetic androgen frame, separate entry in the 19-Nor framework). Aromatizes via CYP19 to 7α-methylestradiol, which has lower ER affinity than plain E2 → estrogen effect weaker than on Test. NOT 17α-alkylated → low hepatotoxicity. In clinical trials (Population Council 1999-2005) it was tested as a 4-week implant + 8 mg/day sublingual formulation; male contraceptive development was STOPPED after Phase III for financial reasons. In bodybuilding context UGL market offers Acetate ester (Trestolone Acetate, short, ~8h half-life) and Enanthate ester (Trestolone Enanthate, slow, ~5-7 day half-life). WADA-banned year-round.",
  "keyInfo": [
    {"label": "Mechanism", "value": "AR agonist (8-10x Test) + progesterone receptor, 7α-methyl-19-nor-T, aromatizes weakly"},
    {"label": "Anabolic:Androgenic", "value": "~2300:650 (extrapolated in vitro AR-binding)"},
    {"label": "Half-life", "value": "~8 h (Ac), 5-7 d (Enan)"},
    {"label": "Onset", "value": "12-24 h (Ac IM), 48-72 h (Enan IM)"},
    {"label": "Legal status", "value": "Never an Rx, UGL only. Schedule III analog (USA), WADA-banned."}
  ],
  "mechanism": "7α-methyl-19-nortestosterone AR agonist. The 7α-methyl group provides THREE critical structural modifications: (1) inhibits 5α-reductase substrate binding → does NOT convert to DHT (lower scalp-DHT, prostate androgenic activity); (2) increases AR-binding affinity (~8-10x Test, Sundaram 1995 PMID 7657009); (3) stabilizes the molecule against 17β-HSD-mediated oxidative breakdown → longer plasma half-life. The 19-nor structural character provides PROGESTOGENIC ACTIVITY (moderate PR affinity), useful for the male contraceptive purpose (negative feedback on HPG axis) BUT in bodybuilding context creates prolactin monitoring need. Aromatizes via CYP19 to 7α-methylestradiol (about 50% of Test-level E2 conversion) — but the metabolite ER affinity is lower than plain E2 → estrogen effect clinically weaker.",
  "legalStatus": "Never an Rx (Population Council male contraceptive development stalled for financial reasons). USA: Schedule III analog (DEA, designer AAS classification). EU/HU/PL: controlled AAS analog, illegal without prescription. WADA-banned year-round (S1.1.a).",
  "onsetTime": "12-24 h (Ac IM), 48-72 h (Enan IM)",
  "halfLife": "~8 h (Ac), 5-7 d (Enan)",
  "halfLifeActive": "~8 h free Trestolone (after Ac), depot ~24 h (after Enan)",
  "interactionsWith": ["cabergoline", "testosterone", "anastrozole", "warfarin"],
  "aromatization": "Yes — CYP19 substrate, metabolite 7α-methylestradiol (lower ER affinity than plain E2); clinically E2 elevation moderate-low (Sundaram 1995 PMID 7657009, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; IM bypasses first-pass. ALT/AST <2x normal for MENT-only cycle (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "~2300:650 (extrapolated from in vitro AR-binding affinity, NOT classical rat-ventral-prostate assay)",
  "bindingAffinity": "Extremely high AR affinity (~8-10x testosterone in vitro, Sundaram 1995 PMID 7657009) + moderate PR activity.",
  "detectionWindow": "Trestolone metabolites (7α-methyl-19-nor-androstene metabolite family) urinary: Ac 2-3 weeks, Enan 6-8 weeks. WADA-accredited LC-MS/MS.",
  "benefits": [
    "Extremely high AR affinity → drastic muscle mass and strength gain at low doses (50-100 mg/week equivalent to 500+ mg Test)",
    "NOT a 5α-reductase substrate → lower scalp-DHT and prostate androgenic activity than on Test",
    "Aromatization milder (7α-methylestradiol has lower ER affinity)",
    "Low hepatotoxicity (NOT 17α-alkylated)",
    "Clinical significance: male contraceptive candidate (Population Council reached Phase III trial)"
  ],
  "quickStart": [
    "EXTREMELY POTENT — doses are significantly lower than on Test (50-100 mg/week Trestolone equivalent to 500-1000 mg Test)",
    "PR activity requires prolactin monitor + cabergoline standby",
    "Aromatization weaker than on Test, BUT NOT zero → AI if E2 demands",
    "PCT (Clomid + Nolvadex 4-6 weeks) mandatory",
    "Cross-framed entry: this is the Test/synthetic androgen frame; the 19-Nor framework is a separate entry"
  ],
  "expectations": [
    {"label": "First week", "body": "After Ac IM injection 12-24 h onset, acute strength gain after 5-7 days. Enan IM 48-72 h onset, steady-state 3-4 weeks."},
    {"label": "Week 3-4", "body": "Drastic muscle mass gain (50-100 mg/week MENT-Ac → 4-6 kg lean mass in 4 weeks, dose-equivalent significantly lower than Test). Prolactin elevation expected (PR activity)."},
    {"label": "End of week 8-10", "body": "Maximum effect, lipid panel HDL drop moderate-high, prolactin monitor critical, PCT planning."}
  ],
  "quality": {
    "pure": [
      "UGL Trestolone Acetate 50-100 mg/ml oil vial, sterile filtered (the most common UGL format)",
      "UGL Trestolone Enanthate 100-200 mg/ml oil vial (less available than Ac)",
      "HPLC-tested source MANDATORY — MENT often counterfeited or under-concentrated (high-cost raw material)"
    ],
    "caution": [
      "Prolactin elevation common (PR activity) → gyno risk (paradoxical, since aromatization is mild)",
      "Lipid disturbance: HDL drop moderate-high",
      "PIP (injection site pain) stronger in Ac variant than Enan (lower solubility)",
      "Mood changes (PR-activity-driven depressive episodes rare case reports)"
    ],
    "avoid": [
      "Any existing prolactinoma or hyperprolactinemia ABSOLUTE contraindication",
      "Psychiatric predisposition (depression, anxiety)",
      "Planned fatherhood (HPTA suppression + PR activity complications)",
      "Female use (extreme androgenic activity → rapid irreversible virilization)",
      "Cardiovascular risk"
    ]
  },
  "interactions": [
    "Cabergoline 0.25-0.5 mg E3D: prolactin monitor + treatment if needed",
    "Testosterone-base stack: NOT standard (MENT alone is potent enough), BUT TRT base + MENT-Ac \"hardcore bulk\" stack is known",
    "Anastrozole 0.25 mg E3D: only if lab-confirmed high E2",
    "Warfarin: anticoagulant effect may be potentiated"
  ],
  "studies": [
    {"title": "7 alpha-methyl-19-nortestosterone (MENT): the optimal androgen for male contraception", "authors": "Sundaram K, Kumar N, Bardin CW.", "journal": "Ann Med. 1993;25(2):199-205. (and 1995 follow-up PMID 7657009)", "pmid": "7657009"},
    {"title": "7α-methyl-19-nortestosterone maintains sexual behavior and mood in hypogonadal men", "authors": "Anderson RA, Wallace AM, Sattar N, Kumar N, Sundaram K.", "journal": "J Clin Endocrinol Metab. 1999;84(10):3556-62.", "pmid": "10024455"},
    {"title": "Antifertility activity and pharmacokinetics of MENT acetate", "authors": "Kumar N, Suvisaari J, Tsong YY, Lähteenmäki P, Bardin CW, Sundaram K.", "journal": "Steroids. 1995;60(4):305-9.", "pmid": "7779238"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"}
  ],
  "faq": [
    {"q": "What is a cross-framed entry?", "a": "MENT (Trestolone, 7α-methyl-19-nortestosterone) belongs structurally to TWO chemical classes SIMULTANEOUSLY: (1) synthetic androgen — the 7α-methyl substitution gives a unique non-DHT-convertible profile; (2) 19-Nor derivative — removal of the 19-carbon methyl group gives progestogenic activity. The library structure per the HTML reference lists it under both class columns with TWO SEPARATE entries: 'MENT-test' (this, synthetic androgen frame, Test column) and 'MENT-19nor' (separate entry in the 19-Nor column, coming in sub-task 4). The two entries' content overlaps ~80%, but the 'AR-binding affinity vs progestogenic activity' framing differs."},
    {"q": "Why was male contraceptive development stopped?", "a": "Population Council ran Phase II-III clinical trials between 1999-2005 with the MENT sublingual implant 4-week formulation (Anderson 1999 PMID 10024455). Results were promising (90%+ spermatogenesis suppression, good tolerability), BUT in 2005 the Population Council HALTED Phase III for financial reasons — given the dominance of female contraceptives in the market, commercial-failure risk was too high for investors. Today MENT male contraceptive development is largely dead, except for some academic follow-up studies."},
    {"q": "MENT vs Testosterone direct comparison?", "a": "In AR affinity MENT is ~8-10x stronger (Sundaram 1995 PMID 7657009), so 100 mg/week MENT equivalent to about 800-1000 mg/week Test. Does NOT 5α-reduce → lower scalp-DHT and prostate AR activity (benefit for hair-loss and BPH prevention). Aromatization milder (7α-methylestradiol weaker ER-affinity metabolite). BUT: PR activity (Test does not activate PR) → prolactin monitor + cabergoline need. Net-positive for experienced bodybuilding users, but NOT a first cycle."},
    {"q": "Acetate vs Enanthate variant — which to choose?", "a": "Ac (Acetate): short (~8 h half-life), EOD or daily IM injection, fast onset (12-24 h), PIP common. More common in bodybuilding context (better control, easier to stop). Enan (Enanthate): long (~5-7 day half-life), weekly 1-2x IM, slower onset (48-72 h, steady-state 3-4 weeks), less PIP. Ac recommended for new MENT users (better dose control + fast discontinuation if side effects appear); Enan more convenient for experienced."},
    {"q": "Modern WADA detectability?", "a": "MENT-Ac urinary detection 2-3 weeks, MENT-Enan 6-8 weeks (WADA-accredited LC-MS/MS). The 7α-methyl-19-nor-androstene metabolite family has been on the WADA target list since the late 2010s; detectable in modern athlete tests. Some used it as a pre-2010 designer-steroid zone, but today there is clear WADA prohibition + LC-MS/MS detection."}
  ],
  "related": ["testosterone-info", "nandrolone-info", "trenbolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 50, "medium": 100, "high": 150},
    "unit": "mg/week MENT (IM, Ac EOD or Enan weekly 1-2x)",
    "note": "Equivalent to 500-1500 mg/week Test based on AR-binding affinity. Maximum 8-10 week cycle. Cabergoline standby (PR activity). PCT 4-6 weeks."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hormone panel: Total T, Free T, E2, LH, FSH, SHBG, Prolactin (critical due to PR activity). Lipid panel. Hepatic. PSA.",
      "purpose": "Prolactin baseline critical due to PR activity."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 3-4",
      "markers": "Prolactin (cabergoline need), E2, Total T, lipid panel, hepatic.",
      "purpose": "Prolactin >25 ng/mL → cabergoline dose increase."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Last dose: Ac +2-3 days, Enan +14-21 days PCT start",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolactin (recovery), lipid recovery.",
      "purpose": "Verify HPTA + PR axis recovery."
    },
    "cruise": {
      "label": "On cruise (MENT cruise NOT standard)",
      "timing": "MENT cruise atypical due to PR activity + high potency",
      "markers": "N/A",
      "purpose": "MENT exclusively for cyclical use. TRT-Test cruise preferred instead."
    }
  },
  "variants": [
    {
      "id": "ac",
      "routeId": "ac",
      "routeLabel": {
        "hu": "MENT + Test Acetate mixture (gyors észter)",
        "en": "MENT + Test Acetate mixture (fast ester)",
        "pl": "MENT + Test Acetate mieszanka (szybki ester)"
      },
      "routeNote": {
        "hu": "Designer kombinált compound — Trestolone (MENT, 7α-metil-19-nortestosterone) + Testosterone Acetate ester mixture, jellemzően 50/50 vagy 60/40 arányban. Cél: a MENT magas anabolic erősség + a Test androgén-baseline egyetlen olajban. Rövid Ac-ester ⇒ EOD vagy napi IM-injekció. Prolaktin-monitor a 19-Nor MENT-komponens miatt KÖTELEZŐ. Hamisítás-rizikó az UGL-piacon nagyon magas (nem tudod mit kapsz konkrétan).",
        "en": "Designer combined compound — Trestolone (MENT, 7α-methyl-19-nortestosterone) + Testosterone Acetate ester mixture, typically 50/50 or 60/40 ratio. Goal: high MENT anabolic potency + Test androgen baseline in a single oil. Short Ac ester ⇒ EOD or daily IM injection. Prolactin monitoring MANDATORY due to 19-Nor MENT component. Counterfeit risk on UGL market very high (you don't know what's actually inside).",
        "pl": "Designerski połączony compound — Trestolon (MENT, 7α-metylo-19-nortestosteron) + Testosteron Acetate mieszanka estrów, zazwyczaj proporcja 50/50 lub 60/40. Cel: wysoka siła anaboliczna MENT + baseline androgenny Test w jednym oleju. Krótki ester Ac ⇒ iniekcja IM EOD lub codziennie. Monitor prolaktyny OBOWIĄZKOWY z powodu komponentu MENT 19-Nor. Ryzyko podróbek na rynku UGL bardzo wysokie (nie wiesz co dokładnie dostajesz)."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "~8 h (parent MENT + Test after Ac)",
      "halfLifeActive": "~8 h (Ac mixture)",
      "bioavailability": "~95-100% (IM, fast Ac-ester hydrolysis both components)",
      "onsetTime": {
        "hu": "12-24 h (IM, fast-acting Ac mixture)",
        "en": "12-24 h (IM, fast-acting Ac mixture)",
        "pl": "12-24 h (IM, szybko działająca mieszanka Ac)"
      },
      "dosing": {
        "hu": "75-150 mg/hét IM, EOD vagy 3x/hét osztva. A magasabb dózis a Test-komponensből származik (~50% MENT-effective dose). Max 8-10 hét ciklus. Test-base NEM szükséges (már benne van). Cabergoline + PCT KÖTELEZŐ.",
        "en": "75-150 mg/week IM, split EOD or 3×/week. Higher dose comes from Test component (~50% MENT-effective dose). Max 8-10 week cycle. Test-base NOT needed (already included). Cabergoline + PCT MANDATORY.",
        "pl": "75-150 mg/tydzień IM, podzielone EOD lub 3×/tydzień. Wyższa dawka wynika z komponentu Test (~50% MENT-effective dose). Maks 8-10 tygodni cyklu. Baza Test niewymagana (już zawarta). Cabergolina + PCT OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 75,
          "medium": 100,
          "high": 150
        },
        "unit": "mg/week",
        "note": {
          "hu": "75-150 mg/hét, EOD vagy E3D IM (rövid felezés). Max 8-10 hét. Test-base mixture-ben, NEM kell külön. Cabergoline KÖTELEZŐ. PCT utolsó injekció +2-3 nap.",
          "en": "75-150 mg/week, EOD or E3D IM (short half-life). Max 8-10 weeks. Test-base in mixture, NOT needed separately. Cabergoline MANDATORY. PCT starts last injection +2-3 days.",
          "pl": "75-150 mg/tydzień, EOD lub E3D IM (krótki okres półtrwania). Maks 8-10 tygodni. Baza Test w mieszance, niewymagana osobno. Cabergolina OBOWIĄZKOWA. PCT od ostatniej iniekcji +2-3 dni."
        }
      },
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "moderate",
      "androgenicRatio": "varies (MENT 650:650 + Test 100:100 mixture)",
      "legalStatus": "Never an Rx (designer mixture, UGL only). WADA-banned.",
      "detectionWindow": "Urinary: 2-3 weeks (short Ac ester; both MENT + Test metabolites detectable by LC-MS/MS).",
      "quality": {
        "pure": [
          "Clear pale-yellow oil, 10ml vial, 75-150 mg/ml total UGL concentration",
          "HPLC-tested source ABSOLUTELY MANDATORY — two active components make verification harder than pure MENT-Ac"
        ],
        "caution": [
          "EOD or daily IM injection required (both components have short half-life)",
          "PIP common (short Ac ester carrier)",
          "Prolactin monitor MANDATORY (19-Nor MENT component)",
          "Aromatization from Test component (CYP19) ⇒ E2 monitor, AI may be required",
          "MENT/Test ratio varies per mixture — not standardized"
        ],
        "avoid": [
          "Prolactinoma or prolactin-sensitive state",
          "Planned fatherhood (19-Nor + Test combined HPTA suppression is more severe)",
          "First AAS cycle (designer mixture, unknown exact ratio)",
          "Counterfeit risk — use only reliable HPLC-tested UGL"
        ]
      },
      "interactions": [
        "Cabergoline 0.25-0.5 mg E3D prolactin monitor MANDATORY (MENT 19-Nor component)",
        "Anastrozole 0.25-0.5 mg E3D E2 monitor (Test component aromatizes)",
        "Testosterone-base NOT needed (mixture already contains Test-Ac)",
        "PCT starts last Ac injection +2-3 days (short wash-out)"
      ]
    },
    {
      "id": "en",
      "routeId": "en",
      "routeLabel": {
        "hu": "MENT + Test Enanthate mixture (lassú észter)",
        "en": "MENT + Test Enanthate mixture (slow ester)",
        "pl": "MENT + Test Enanthate mieszanka (wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb Enan-észter mixture (~5-7 nap felezés) ⇒ heti 1-2 IM-injekció elegendő, steady-state 3-4 hét. Ugyanaz a designer compound (MENT + Test) csak lassú-onset esterekkel. Kényelmesebb mint Ac-mixture, de longer detection window (6-8 hét) + steady-state-hez 3-4 hét kell. Aromatizáció + prolaktin-monitor mindkettő KÖTELEZŐ.",
        "en": "Longer Enan-ester mixture (~5-7 day half-life) ⇒ once/twice weekly IM injection sufficient, steady-state 3-4 weeks. Same designer compound (MENT + Test) just with slow-onset esters. More convenient than Ac mixture, but longer detection window (6-8 weeks) + 3-4 weeks needed for steady-state. Aromatization + prolactin monitoring BOTH MANDATORY.",
        "pl": "Dłuższa mieszanka estru Enan (~5-7 dni okresu półtrwania) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 3-4 tygodnie. Ten sam designerski compound (MENT + Test) tylko z estrami wolno działającymi. Wygodniejszy niż mieszanka Ac, ale dłuższe okno detekcji (6-8 tygodni) + 3-4 tygodnie potrzebne do stanu stacjonarnego. Aromatyzacja + monitor prolaktyny OBA OBOWIĄZKOWE."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "5-7 days (Enanthate ester mixture)",
      "halfLifeActive": "~24 h free MENT + Test (after hydrolysis)",
      "bioavailability": "~95-100% (IM, slow Enan-ester hydrolysis both components)",
      "onsetTime": {
        "hu": "48-72 h (IM, slow-acting Enan; steady-state 3-4 hét)",
        "en": "48-72 h (IM, slow-acting Enan; steady-state 3-4 weeks)",
        "pl": "48-72 h (IM, wolno działający Enan; stan stacjonarny 3-4 tygodnie)"
      },
      "dosing": {
        "hu": "200-400 mg/hét IM, heti 1-2x osztva. Magasabb dózis mint MENT-only (Test-komponens miatt). Minimum 8-10 hét ciklus. Test-base NEM szükséges. Cabergoline + Anastrozole + PCT KÖTELEZŐ.",
        "en": "200-400 mg/week IM, split 1-2× weekly. Higher dose than MENT-only (due to Test component). Minimum 8-10 week cycle. Test-base NOT needed. Cabergoline + Anastrozole + PCT MANDATORY.",
        "pl": "200-400 mg/tydzień IM, podzielone 1-2× w tygodniu. Wyższa dawka niż MENT-only (z powodu komponentu Test). Minimum 8-10 tygodni cyklu. Baza Test niewymagana. Cabergolina + Anastrozol + PCT OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 200,
          "medium": 300,
          "high": 400
        },
        "unit": "mg/week",
        "note": {
          "hu": "200-400 mg/hét, heti 1-2x IM (Enan-mixture). Minimum 8-10 hét ciklus. Test-base mixture-ben, NEM kell külön. Cabergoline + Anastrozole KÖTELEZŐ. PCT utolsó injekció +14-21 nap.",
          "en": "200-400 mg/week, 1-2× weekly IM (Enan mixture). Minimum 8-10 week cycle. Test-base in mixture, NOT needed separately. Cabergoline + Anastrozole MANDATORY. PCT starts last injection +14-21 days.",
          "pl": "200-400 mg/tydzień, 1-2× w tygodniu IM (mieszanka Enan). Minimum 8-10 tygodni cyklu. Baza Test w mieszance, niewymagana osobno. Cabergolina + Anastrozol OBOWIĄZKOWE. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 300000,
      "hepatotoxicity": "low",
      "aromatization": "moderate",
      "androgenicRatio": "varies (MENT 650:650 + Test 100:100 mixture)",
      "legalStatus": "Never an Rx (designer mixture). UGL only. WADA-banned.",
      "detectionWindow": "Urinary: 6-8 weeks (longer Enan ester, both component metabolite families detectable).",
      "quality": {
        "pure": [
          "Clear yellowish-gold oil, 10ml vial, 200-400 mg/ml total UGL concentration",
          "HPLC-tested source ABSOLUTELY MANDATORY — two active components, mixture ratio not standardized"
        ],
        "caution": [
          "1-2× weekly IM injection (more convenient than Ac mixture)",
          "PIP milder than Ac (longer ester carrier)",
          "Steady-state 3-4 weeks — short cycle ineffective",
          "Prolactin + E2 monitoring BOTH MANDATORY (both components)",
          "Mixture ratio varies per UGL — you don't know the exact MENT/Test split"
        ],
        "avoid": [
          "Short (4-6 week) cycle ineffective (steady-state not reached)",
          "Prolactinoma or prolactin-sensitive state",
          "Planned fatherhood (19-Nor + Test combined HPTA suppression is more severe)",
          "Counterfeit risk — use only reliable HPLC-tested UGL"
        ]
      },
      "interactions": [
        "Cabergoline 0.25-0.5 mg E3D prolactin monitor MANDATORY (MENT 19-Nor component)",
        "Anastrozole 0.25-0.5 mg E3D E2 monitor (Test component aromatizes)",
        "Testosterone-base NOT needed (mixture already contains Test-Enan)",
        "PCT starts last Enan injection +14-21 days (long wash-out)"
      ]
    }
  ],
  "defaultVariant": "ac"
}
