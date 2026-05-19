// Phase C multi-variant entry (Propionate + Enanthate). Lab Terminal hard-fail
// sources: Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Schänzer 1996 PMID 8616181 (detection), Mottram 2008 doping handbook,
// Eli Lilly Drolban DESI review (FDA 1979, discontinued early 1990s).

export default {
  "id": "masteron",
  "name": "Masteron (Drostanolone)",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Drostanolone, 2α-methyl-DHT derivative injectable AAS. Originally FDA-approved (Drolban, Lilly 1959) for inoperable breast cancer in postmenopausal women; today underground market only. Classic \"hardening\" cutting steroid.",
  "description": "Masteron (Drostanolone) is a 2α-methyl-dihydrotestosterone derivative, jointly synthesized by Syntex and Eli Lilly in 1959 and FDA-approved in 1961 under the brand Drolban for palliative treatment of inoperable, postmenopausal breast cancer. Displaced by modern tamoxifen-based therapy; Lilly discontinued in 1993. Anabolic:androgenic ratio ~62:25 (low anabolic, moderate androgenic). The 2α-methyl group blocks both 5α-reductase and aromatase activity — does NOT convert to estrogen and exhibits unique mild aromatase-inhibitor effect (Bhasin 2018 reference AAS classification). NOT 17α-alkylated, so hepatotoxicity is minimal. In the bodybuilding context, the classic cutting steroid used to achieve \"hardness\" and vascular esthetics, often in the last 6-8 weeks of contest prep. WADA-banned year-round.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist, 2α-methyl-DHT, NOT aromatized"
    },
    {
      "label": "Anabolic:Androgenic",
      "value": "62:25"
    },
    {
      "label": "Half-life",
      "value": "2-3 d (Prop), 7-10 d (Enan)"
    },
    {
      "label": "Onset",
      "value": "24-72 h (IM ester)"
    },
    {
      "label": "Legal status",
      "value": "Discontinued Rx, UGL only. WADA-banned."
    }
  ],
  "mechanism": "2α-methyl-dihydrotestosterone (5α-reduced) AR agonist. The 2α-methylation provides three metabolic blocks: (1) inhibits aromatase (CYP19), so the molecule does NOT convert to estradiol and clinically shows mild aromatase-inhibitor effect; (2) resists 17β-HSD oxidative breakdown (longer plasma half-life); (3) does not undergo direct 5α-reduction (already reduced). The 17β-OH-esterified form (Propionate or Enanthate) after IM injection slowly hydrolyzes in depot fat to free drostanolone, which has high SHBG affinity and reduces the SHBG-bound testosterone fraction → indirect free-T elevation.",
  "legalStatus": "USA: Schedule III controlled substance (DEA, discontinued Rx — Drolban not manufactured after 1993). EU: controlled anabolic steroid, illegal without prescription. HU/PL: possession and sale a criminal offense. WADA-banned year-round in competitive sport (S1.1.a anabolic androgenic steroids).",
  "onsetTime": "24-72 h (IM, ester-hydrolysis-dependent)",
  "halfLife": "2-3 d (Propionate), 7-10 d (Enanthate)",
  "halfLifeActive": "~1-2 d free drostanolone after ester hydrolysis",
  "interactionsWith": [
    "anastrozole",
    "finasteride",
    "testosterone",
    "warfarin"
  ],
  "aromatization": "No — 2α-methyl steric hindrance means NOT a CYP19 substrate; clinically exhibits mild aromatase-inhibitor effect (Pope-Kanayama 2014 PMID 24423981 designer AAS review)",
  "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; injectable ester form bypasses hepatic first-pass. Moderate lipid disturbance (HDL drop, LDL rise) remains the main cardiovascular risk (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "62:25",
  "bindingAffinity": "Moderate AR affinity; high SHBG affinity (DHT structural analog) → outcompetes SHBG-bound testosterone, indirectly inducing free-T elevation.",
  "detectionWindow": "Drostanolone metabolites (2α-methyl-5α-androstan-3-one metabolite family) urinary 3 weeks (Prop) – 3 months (Enan). Schänzer 1996 (PMID 8616181) WADA-accredited GC-MS and LC-MS/MS.",
  "benefits": [
    "Vascular, hard \"esthetic\" look during contest prep (subjective bodybuilding experience)",
    "Indirect free-testosterone elevation via SHBG occupation (potentiates other AAS effects)",
    "Does NOT aromatize → no E2 side effects (gynecomastia, minimal water retention)",
    "Mild anti-aromatase effect → reduces adjunct-AI need during testosterone stacks",
    "Low hepatotoxicity (DHT structural analog, NOT 17α-alkylated)"
  ],
  "quickStart": [
    "Only for users with existing bodybuilding experience, NOT a first cycle",
    "Typically stacked with testosterone base (Test-Prop + Mast-Prop, Test-Enan + Mast-Enan for ester half-life matching)",
    "DHT structural analog → STRICT hair-loss risk: scalp-DHT conversion accelerates androgenic alopecia in genetic predisposition",
    "Baseline + 4-week + post-cycle lipid panel (HDL/LDL) MANDATORY",
    "PCT (Clomid + Nolvadex 4 weeks) timing depends on stack-partner AAS half-life"
  ],
  "expectations": [
    {
      "label": "First week",
      "body": "Acute effect minimal. Esthetic change not yet perceptible; ester hydrolysis takes 24-72 hours, plasma steady-state Prop 1 week, Enan 4-5 weeks."
    },
    {
      "label": "3-4 weeks",
      "body": "Steady-state Prop. Subjectively \"harder\" muscle tone, increased vascular venosity. SHBG drops (~30-50%), free-T rises alongside stack-partner AAS."
    },
    {
      "label": "6-8 weeks",
      "body": "Contest-prep \"peak\" — sub-cutaneous muscle contour maximally accentuated. Lipid panel HDL ~20-30% drop expected. Hair-loss-prone users may see accelerated miniaturization."
    }
  ],
  "quality": {
    "pure": [
      "Clear yellowish or pale-yellow oil (~#fef08a tone), sediment-free, 10ml vial",
      "UGL HPLC-tested source mandatory — Drostanolone Propionate and Enanthate have different PIP pain profile, counterfeiting (Test-Prop substitution) is common"
    ],
    "caution": [
      "Hair-loss acceleration in users with androgenic alopecia genetics (DHT structural analog)",
      "Lipid disturbance: HDL drop, LDL rise (moderate, NOT extreme)",
      "Injection site pain (Propionate especially, due to alcohol vehicle)",
      "Voice deepening and hirsutism in women (after 1 cycle may be IRREVERSIBLE — strictly contraindicated)"
    ],
    "avoid": [
      "Family history of androgenic alopecia (DHT-sensitive scalp)",
      "Prostate hypertrophy, prostate cancer (DHT analog → prostate AR activation)",
      "Female use (virilization risk extreme, esthetic benefit small due to low anabolic ratio)",
      "Cardiovascular risk (family history, high LDL, atherosclerosis) absolute contraindication",
      "Any \"first cycle\" — Masteron is always a stack-partner, never a standalone first AAS"
    ]
  },
  "interactions": [
    "Testosterone base (Prop+Prop or Enan+Enan match): standard stack, potentiates muscle protein synthesis",
    "Anastrozole (AI): NOT needed for Masteron-only cycle (mild self-AI); during Test-stack only if lab-confirmed high E2",
    "Finasteride: does NOT inhibit Masteron effect (already 5α-reduced), and does NOT protect against scalp-DHT — useless for hair-loss prevention",
    "Warfarin: anticoagulant effect may be potentiated, INR monitoring",
    "Combination with other AAS potentiates HPTA suppression, PCT becomes necessary"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
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
      "title": "Drostanolone propionate in advanced breast cancer",
      "authors": "Gordan GS, Halden A, Horn Y, Fuery JJ, Parsons RJ, Walter RM.",
      "journal": "Cancer. 1964;17:1056-62.",
      "pmid": "14201858"
    }
  ],
  "faq": [
    {
      "q": "Why is it called a \"hardening\" steroid?",
      "a": "Masteron does NOT aromatize and reduces water retention via high SHBG affinity, so at low body fat percentage (<10-12%) the subcutaneous water layer shrinks to a minimum, producing a vascularly accentuated, \"hard\" appearance. At higher body fat (>15%) the esthetic effect is invisible — hence contest-prep specific."
    },
    {
      "q": "Is it true that it's also an aromatase inhibitor?",
      "a": "Partially. The 2α-methyl steric hindrance gives Masteron clinically mild aromatase-inhibitor effect — it can reduce adjunct Anastrozole need during Test stacks. BUT the effect is NOT strong (Letrozole/Anastrozole-grade complete block NOT expected), and at high Test doses (>500 mg/week) it alone is NOT enough for E2 control."
    },
    {
      "q": "Is hair-loss risk really this high?",
      "a": "Yes, if there is genetic predisposition for androgenic alopecia. Masteron is structurally a 2α-methyl-DHT, which bypasses scalp 5α-reductase and directly activates the hair follicle AR. Finasteride does NOT protect (Masteron is already reduced). The only protection: if you are genetically sensitive, DO NOT use DHT-derivative AAS."
    },
    {
      "q": "Why use it as an ester instead of free drostanolone?",
      "a": "Parent drostanolone is water-insoluble and clears rapidly (insoluble free steroid). The ester (Prop-propionate or Enan-enanthate) esterifies the 17β-OH group, making the molecule oil-soluble, depot-storable via IM injection, and endogenous esterases continuously hydrolyze free drostanolone, giving stable plasma levels."
    },
    {
      "q": "Long-term use dangers?",
      "a": "Chronic AAS use causes HPTA suppression (possibly prolonged secondary hypogonadism per Rasmussen-Christofferides 2016 PMID 27568523 cohort), cardiovascular risk (LDL rise, left-ventricular hypertrophy), psychological effects (Kanayama 2009 PMID 19922565 — AAS dependence). Masteron itself is not extremely hepatotoxic, BUT cumulative AAS exposure (Test+Mast+other stack) is significant."
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "winstrol-info",
    "trenbolone-info",
    "superdrol"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hormone panel: Total T, Free T, E2 (ultrasensitive), LH, FSH, SHBG, Prolactin. Lipid panel (LDL/HDL/TG). Hepatic: ALT/AST/GGT/ALP. CBC + hematocrit. Kidney function (creatinine, eGFR). PSA (over 30).",
      "purpose": "Lipid baseline and SHBG baseline critical for Masteron's unique indirect mechanism (SHBG suppression). Any LDL >130 mg/dL or HDL <40 mg/dL is a relative contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 4-6, mid-cycle",
      "markers": "Lipid panel (HDL can drop drastically), E2 (if Test-stacked), SHBG (Masteron-driven drop expected), blood pressure log, hepatic panel (ALT/AST), hematocrit.",
      "purpose": "HDL <30 mg/dL is a cardiovascular alarm. SHBG drop (>50%) confirms Masteron activity. E2 (during Test-stack) if rising determines AI need — Masteron's mild self-AI is NOT enough at high Test doses."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "From last injection: Prop +3-5 days, Enan +14-21 days PCT start. PCT week 4 and 8-12 recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel (HDL recovery), hepatic panel.",
      "purpose": "Verify HPTA recovery and SHBG recovery. If T does not return to baseline by 12 weeks, endocrinologist consultation. SHBG recovery typically within 4-6 weeks."
    },
    "cruise": {
      "label": "On cruise (Masteron-containing cruise NOT standard)",
      "timing": "Masteron-cruise atypical; if cruising, monitor every 6-8 weeks",
      "markers": "Lipid panel (HDL), SHBG, Total T, E2, blood pressure log, PSA (over 30).",
      "purpose": "Prolonged Masteron exposure accumulates lipid disturbance and prostate AR activation. On TRT-Test cruise Masteron is typically omitted — esthetic effect is only valuable during contest prep."
    }
  },
  "variants": [
    {
      "routeId": "prop",
      "routeLabel": "Drostanolone Propionate (IM, fast)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Discontinued Rx (Drolban not manufactured after 1993), available only on UGL market. EU/HU/PL: illegal without prescription, WADA-banned.",
      "bioavailability": "~95-100% (IM injection bypasses first-pass; propionate ester fast hydrolysis ~2-3 days)",
      "onsetTime": "24-48 h (IM, propionate fast-acting ester)",
      "halfLife": "2-3 d (Propionate ester; free drostanolone t½ ~1-2 d after hydrolysis)",
      "halfLifeActive": "1-2 d",
      "detectionWindow": "3 weeks urinary (shorter than Enanthate due to short propionate ester). WADA-accredited GC-MS and LC-MS/MS.",
      "aromatization": "No — 2α-methyl-DHT structure NOT a CYP19 substrate; mild AI effect (Pope-Kanayama 2014).",
      "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; injectable ester form bypasses first-pass (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Clear pale-yellow or water-clear oil, 10ml vial, sterile filtered",
          "UGL HPLC-tested source mandatory — propionate ester characteristically painful PIP, distinguishably different from enanthate"
        ],
        "caution": [
          "Injection site pain (PIP): propionate in alcohol vehicle often painful, 24-48 h swelling",
          "Requires 3x EOD weekly injection due to short half-life (Mon/Wed/Fri or E2D)",
          "HDL drop, LDL rise (moderate)",
          "Hair-loss acceleration in androgenic alopecia"
        ],
        "avoid": [
          "Strong injection-site sensitivity (prefer Enanthate variant if every IM is severely painful)",
          "More than 8 weeks continuous cycle (HPTA suppression cumulative)",
          "Cardiovascular risk (family history, high LDL)",
          "Female use (extreme virilization risk)"
        ]
      },
      "interactions": [
        "Test-Propionate stack: ester half-life matching, EOD injection schedule",
        "Tren-Acetate stack: classic \"cutting stack\", all three short esters",
        "PCT (Clomid 50mg/day + Nolvadex 20mg/day, 4 weeks) starts last Prop injection +3-5 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/week (IM, split 3x EOD)",
        "note": "Maximum 8 weeks cycle. 300-600 mg/week, 3x EOD split injections (short half-life). TUDCA / NAC NOT mandatory (low hepatotoxicity), BUT lipid monitoring and blood pressure log essential. PCT 4 weeks (Clomid + Nolvadex) from last injection +3-5 days."
      }
    },
    {
      "routeId": "enan",
      "routeLabel": "Drostanolone Enanthate (IM, slow)",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Never licensed as human Rx — UGL market only. Illegal everywhere, WADA-banned.",
      "bioavailability": "~95-100% (IM injection bypasses first-pass; enanthate ester slow hydrolysis ~7-10 days)",
      "onsetTime": "48-72 h (IM, enanthate slow-acting ester; steady-state 4-5 weeks)",
      "halfLife": "7-10 d (Enanthate ester; free drostanolone t½ ~1-2 d after hydrolysis)",
      "halfLifeActive": "1-2 d (depot absorption slow, plasma stabilizes after 1-2 weeks)",
      "detectionWindow": "2-3 months urinary (much longer than propionate due to long enanthate ester). WADA-accredited GC-MS and LC-MS/MS.",
      "aromatization": "No — 2α-methyl-DHT structure NOT a CYP19 substrate for either ester; mild AI effect (Pope-Kanayama 2014).",
      "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; injectable ester form bypasses first-pass (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Clear yellowish-brown oil (~#f59e0b tone), 10ml vial, sterile filtered",
          "UGL HPLC-tested source mandatory — enanthate ester much less painful than propionate"
        ],
        "caution": [
          "Slow onset: esthetic change perceptible only after 4-5 weeks (steady-state)",
          "Weekly 1-2x injection sufficient (Mon or Mon+Thu)",
          "HDL drop, LDL rise (moderate, more cumulative than Prop due to longer exposure)",
          "Long detection window: prefer Prop during contest period"
        ],
        "avoid": [
          "Short (4-6 week) cycle NOT effective — Enan steady-state only after 4-5 weeks",
          "More than 12 weeks continuous cycle (severe HPTA suppression)",
          "WADA-tested competition <3 months after planned end (detection window)",
          "Cardiovascular risk, female use (see Propionate)"
        ]
      },
      "interactions": [
        "Test-Enanthate stack: ester half-life matching, weekly 1-2x injection schedule",
        "Tren-Enanthate stack: \"long-ester cutting\" 10-12 weeks",
        "PCT (Clomid + Nolvadex 4-6 weeks) starts last Enan injection +14-21 days (steady-state clearance)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/week (IM, split 1-2x)",
        "note": "Minimum 8-10 weeks cycle due to steady-state. 300-700 mg/week, weekly 1-2x injection. TUDCA / NAC NOT mandatory, BUT lipid monitoring and blood pressure log essential. PCT 4-6 weeks (Clomid + Nolvadex) from last injection +14-21 days."
      }
    }
  ],
  "defaultVariant": "prop"
}
