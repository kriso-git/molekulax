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
  "shortDesc": "Methenolone, 1-methyl-DHT-derivative \"mild\" AAS in two ester formats: oral acetate (short, low bioavailability) and injectable enanthate (Bayer Primobolan Depot, prescription in Germany + Spain). Classic cutting steroid.",
  "description": "Primobolan (Methenolone) is a 1-methyl-dihydrotestosterone derivative synthesized by Schering AG in 1962. Two marketed forms: the acetate ester (Primobolan, oral tablet, originally 5 mg) and the enanthate ester (Primobolan Depot, IM oil 100 mg/ml). Original FDA approval (1962) was for anemia, osteoporosis and severe debilitating illness recovery; withdrawn from the US market by 1965, but Bayer still manufactures Primobolan Depot as a prescription in Germany and Spain (anemia, premature infant catabolic states). Anabolic:androgenic ratio 88:44, indicating moderate anabolic and low androgenic profile. NOT 17α-alkylated, so hepatotoxicity is minimal. Does NOT aromatize. AR affinity is low (~28% vs testosterone in vitro), BUT in muscle tissue indirectly raises free-T levels via SHBG suppression. Oral acetate bioavailability is only ~6% (rapid hepatic metabolism of the 17β-OH-acetate ester), so extremely high doses (50-100 mg/day) are needed to match injectable 100 mg/week enanthate effect. WADA-banned year-round.",
  "keyInfo": [
    {"label": "Mechanism", "value": "AR agonist, 1-methyl-DHT, NOT aromatized"},
    {"label": "Anabolic:Androgenic", "value": "88:44"},
    {"label": "Half-life", "value": "4-6 h (Ac oral), 5-7 d (Enan IM)"},
    {"label": "Onset", "value": "1-2 h (Ac oral), 48-72 h (Enan IM)"},
    {"label": "Legal status", "value": "Bayer Primobolan Depot DE/ES Rx, USA: discontinued"}
  ],
  "mechanism": "1-methyl-dihydrotestosterone AR agonist. The 1-methyl group — specifically at Δ1 position — blocks 17β-HSD oxidative breakdown and is notably resistant to hepatic metabolism. The 17β-OH-acetate ester (oral form) rapidly hydrolyzes in the portal vein to free methenolone, which is then rapidly metabolized by the liver (low ~6% bioavailability). The enanthate ester (Depot form) is depot-stored via IM injection, slow hydrolysis gives stable plasma levels. NOT 17α-alkylated → minimal hepatic stress. NOT a CYP19 substrate → does NOT aromatize to estrogen.",
  "legalStatus": "USA: discontinued after 1965 (FDA), Schedule III controlled. DE/ES: Bayer Primobolan Depot Rx (anemia, premature infant catabolic states). HU/PL: illegal without prescription, controlled AAS. WADA-banned year-round (S1.1.a).",
  "onsetTime": "1-2 h (Ac oral), 48-72 h (Enan IM)",
  "halfLife": "4-6 h (Ac oral), 5-7 d (Enan IM)",
  "halfLifeActive": "~4-6 h free methenolone (after Ac), depot-driven ~24 h (after Enan)",
  "interactionsWith": ["testosterone", "anastrozole", "finasteride", "warfarin"],
  "aromatization": "No — 1-methyl-DHT structure, NOT a CYP19 substrate for either ester; clinically no E2 rise expected (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; injected enanthate form has minimal hepatic stress. Oral acetate also only mild because the 1-methyl group is NOT 17α (only the 1-methyl provides oral stability), BUT high dose (50-100 mg/day) still requires monitoring (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "88:44",
  "bindingAffinity": "Moderate AR affinity (~28% vs testosterone in vitro). High SHBG affinity (DHT structural analog) → indirect free-T elevation.",
  "detectionWindow": "Methenolone metabolites (1-methyl-5α-androstan-3-one metabolite family) urinary: oral acetate 4-5 weeks, injectable enanthate 4-6 months (Schänzer 1996 PMID 8616181). WADA-accredited GC-MS and LC-MS/MS.",
  "benefits": [
    "Vascular, hard esthetic look (low water retention)",
    "Does NOT aromatize → no E2 side effects",
    "Low hepatotoxicity (especially enanthate form)",
    "Indirect free-T elevation via SHBG occupation",
    "Original medical indication: anemia, premature infant catabolic states (Bayer)"
  ],
  "quickStart": [
    "Realistic expectations: Primobolan is a MILD AAS, don't expect Dianabol-like 10 kg/4-week results",
    "Oral Ac dose is HIGH (50-100 mg/day) due to low bioavailability — quality source critical",
    "DHT structural analog → STRICT hair-loss risk in genetic predisposition",
    "Baseline + 4-week + post-cycle lipid panel (HDL/LDL) MANDATORY",
    "PCT (Clomid + Nolvadex 4 weeks) needed in men due to HPTA suppression"
  ],
  "expectations": [
    {"label": "First week", "body": "Oral Ac onset 1-2 h, injectable Enan 48-72 h. Acute esthetic change not expected, plasma steady-state Ac 2-3 days, Enan 3-4 weeks."},
    {"label": "Week 4-6", "body": "Subjectively \"harder\" muscle tone, vascular venosity. SHBG drops, lean mass gain 1-2 kg (NOT extreme — Primobolan is a mild AAS)."},
    {"label": "End of week 10-12", "body": "Maximum esthetic \"hardening\" effect. HDL ~15-25% drop expected. Lean mass preservation during cutting (minimal muscle loss despite caloric deficit)."}
  ],
  "quality": {
    "pure": [
      "Bayer Primobolan Depot original Rx (DE/ES, 100 mg/ml, 1ml ampule) — authentic enanthate source",
      "UGL acetate tablet: HPLC-tested source mandatory, often counterfeited (Anavar or Winstrol substitution)"
    ],
    "caution": [
      "Oral Ac high dose (50-100 mg/day) — expensive and quality-critical",
      "Hair-loss acceleration in androgenic alopecia (DHT structural analog)",
      "Lipid disturbance: HDL drop (moderate)",
      "Voice deepening and hirsutism in women (virilization risk persists even at lower doses)"
    ],
    "avoid": [
      "Family history of androgenic alopecia",
      "Prostate hypertrophy, prostate cancer (DHT analog)",
      "Female use at higher doses (>10 mg/day oral Ac, >50 mg/week Enan)",
      "Cardiovascular risk (family history, high LDL)",
      "Bulking/mass-gain goal — Primobolan is a cutting and conditioning steroid, NOT a mass-builder"
    ]
  },
  "interactions": [
    "Testosterone-base stack: standard, potentiates muscle protein synthesis; ester half-life matching recommended (Test-Prop+Primo-Ac or Test-Enan+Primo-Enan)",
    "Anastrozole (AI): NOT needed for Primo-only cycle (no aromatization); during Test-stack only if lab-confirmed high E2",
    "Finasteride: does NOT inhibit Primobolan effect (already 5α-reduced), does NOT protect against scalp-DHT — useless",
    "Warfarin: anticoagulant effect may be potentiated, INR monitor"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8616181"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"},
    {"title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline", "authors": "Bhasin S, Brito JP, Cunningham GR et al.", "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.", "pmid": "29562364"}
  ],
  "faq": [
    {"q": "Why is Primobolan so expensive?", "a": "Two reasons: (1) the raw material (methenolone) is expensive to synthesize, few UGL labs can produce it cleanly; (2) counterfeiting is extremely common — many UGL Primos are actually Anavar or Winstrol. Bayer Primobolan Depot original DE/ES Rx black-market price ~€150-250/ml. Oral Ac is even pricier because daily cost is high due to the 50-100 mg/day requirement."},
    {"q": "Is it really a \"mild\" AAS as they say?", "a": "Yes, among classical AAS one of the gentlest in terms of hepatotoxicity and cardiovascular profile. BUT due to its mildness do NOT expect spectacular muscle mass gains — Primobolan is a cutting and conditioning agent, NOT a bulker. Pope-Kanayama 2014 highlights: the user expectation-reality gap is a major frustration source."},
    {"q": "Why is oral acetate bioavailability so low?", "a": "The acetate ester (17β-OH-acetate) RAPIDLY hydrolyzes in the portal vein to free methenolone, which is then rapidly metabolized by the liver (NOT 17α-alkylated, so no first-pass protection). Hence oral Primobolan bioavailability is only ~6% — compared to e.g. Anavar's 30-40% due to 17α-alkylated first-pass protection."},
    {"q": "Why do women also use Primobolan?", "a": "Low androgenic potential (44% vs testosterone) means virilization risk is among the lowest of AAS (Anavar and Primobolan are the classical \"female-friendly\" AAS pair). BUT virilization is NOT zero — at higher doses (>10 mg/day oral or >50 mg/week Enan) voice deepening and hirsutism are documented. Any virilization symptom = immediate cycle discontinuation."},
    {"q": "Is it true Arnold Schwarzenegger used it?", "a": "Yes, Arnold Schwarzenegger admitted in several interviews that during 1970-80s bodybuilding competitions (Mr. Olympia) he used Primobolan and Dianabol, then still legally available as prescription drugs. This tradition made Primobolan a \"classic pro-bodybuilder steroid\" in the culture."}
  ],
  "related": ["masteron", "anavar-info", "testosterone-info", "winstrol-info", "trenbolone-info"],
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hormone panel: Total T, Free T, E2, LH, FSH, SHBG, Prolactin. Lipid panel (LDL/HDL/TG). Hepatic: ALT/AST/GGT/ALP. CBC + hematocrit. Kidney function. PSA (over 30).",
      "purpose": "Lipid and SHBG baseline critical. Primobolan does NOT aromatize, so monitor E2 baseline due to stack-partner Test."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 4-6, mid-cycle",
      "markers": "Lipid panel (moderate HDL drop), E2 (if Test-stacked), SHBG, hepatic panel (especially with oral Ac), blood pressure log.",
      "purpose": "HDL <35 mg/dL is a cardiovascular alarm. ALT/AST <2x upper normal expected for Primo-only cycle (sometimes higher with oral). E2 based on Test stack partner."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "From last dose: oral Ac +1-2 days, IM Enan +14-21 days PCT start. PCT week 4 and 8-12 recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), hepatic panel.",
      "purpose": "Verify HPTA recovery. SHBG recovery typically within 4-6 weeks. PCT for Primo-only cycle is milder than for Test-containing (less HPTA suppression)."
    },
    "cruise": {
      "label": "On cruise (Primobolan-containing cruise NOT standard)",
      "timing": "Primo cruise atypical; if cruising, monitor every 6-8 weeks",
      "markers": "Lipid panel, SHBG, Total T, E2, blood pressure log, PSA.",
      "purpose": "Prolonged Primobolan exposure accumulates lipid disturbance, builds up prostate AR activation. On TRT-Test cruise Primobolan is typically omitted (esthetic effect only valuable during contest prep)."
    }
  },
  "variants": [
    {
      "routeId": "ac-oral",
      "routeLabel": "Methenolone Acetate (oral tablet)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "Discontinued Rx everywhere; available only on UGL market. EU/HU/PL/USA: illegal without prescription, WADA-banned.",
      "bioavailability": "~6% (low — acetate ester rapidly portal-hydrolyzed then parent methenolone hepatic metabolism; hence high dose requirement)",
      "onsetTime": "1-2 h (oral, fast absorption)",
      "halfLife": "4-6 h (parent methenolone, no active metabolite)",
      "halfLifeActive": "4-6 h",
      "detectionWindow": "4-5 weeks urinary (shorter than enanthate, rapid clearance). WADA-accredited GC-MS and LC-MS/MS.",
      "aromatization": "No — 1-methyl-DHT structure, NOT a CYP19 substrate; clinically no E2 rise expected.",
      "hepatotoxicity": "Low-moderate — NOT 17α-alkylated, but high dose requirement (50-100 mg/day) causes mild ALT/AST rise; clinically much milder than Anavar or Dianabol.",
      "quality": {
        "pure": [
          "Clear white, scored tablet (25 mg or 50 mg common UGL dosing)",
          "HPLC testing ABSOLUTELY MANDATORY — Primobolan-Ac is the most commonly counterfeited AAS tablet (Anavar/Winstrol substitution)"
        ],
        "caution": [
          "High daily dose requirement (50-100 mg/day) — often 5-10 tablets spread across the day",
          "Hair-loss acceleration in androgenic alopecia",
          "Lipid disturbance: HDL drop (moderate)",
          "Cost: oral Ac daily cost €5-15 depending on UGL quality"
        ],
        "avoid": [
          "Any existing ALT/AST elevation (oral form due to high dose requirement)",
          "Concurrent alcohol or paracetamol use",
          "Counterfeit risk high — if no HPLC-tested source, do NOT use",
          "Female use >10 mg/day (virilization risk)"
        ]
      },
      "interactions": [
        "Test-Prop stack: ester half-life matching, EOD injection Test + daily Primo-Ac",
        "Anavar stack: combined 17α-alkylated + 1-methyl oral combination, hepatic stress increases",
        "PCT (Clomid + Nolvadex 4 weeks) starts last tablet +1-2 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 50, "medium": 75, "high": 100},
        "unit": "mg/day (oral, 2-3x split)",
        "note": "Maximum 8 weeks cycle. 50-100 mg/day, 2-3x split dosing (short half-life). TUDCA 500 mg/day optional (low hepatotoxicity, but safe due to high dose). Female dose max 5-10 mg/day. PCT 4 weeks last tablet +1-2 days."
      }
    },
    {
      "routeId": "enan-oil",
      "routeLabel": "Methenolone Enanthate (IM Depot)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Bayer Primobolan Depot DE/ES Rx (anemia, premature infant catabolic states). EU/HU/PL: rarely import-Rx, mostly UGL. WADA-banned.",
      "bioavailability": "~95-100% (IM injection bypasses first-pass; enanthate ester slow hydrolysis ~5-7 days)",
      "onsetTime": "48-72 h (IM, enanthate slow-acting; steady-state 3-4 weeks)",
      "halfLife": "5-7 d (Enanthate ester; free methenolone t½ ~24 h after hydrolysis)",
      "halfLifeActive": "~24 h (depot-driven)",
      "detectionWindow": "4-6 months urinary (extra long, enanthate ester + 1-methyl metabolite family). WADA-accredited GC-MS and LC-MS/MS.",
      "aromatization": "No — 1-methyl-DHT structure, NOT a CYP19 substrate.",
      "hepatotoxicity": "Very low — parent steroid, NOT 17α-alkylated, IM form bypasses first-pass. Among the safest AAS hepatic profiles.",
      "quality": {
        "pure": [
          "Bayer Primobolan Depot 100 mg/ml, 1ml ampule — authentic source with holographic marking",
          "UGL alternative: clear yellowish-gold oil, 10ml vial, HPLC-tested"
        ],
        "caution": [
          "Bayer Depot price: ~€150-250/ml black market (extremely expensive)",
          "UGL counterfeit: often Test-Enan or Nandrolone-Decanoate substitution",
          "Lipid disturbance: HDL drop (moderate, more cumulative than oral Ac due to longer exposure)",
          "Extra long detection window: WADA-tested competition <6 months after planned end prohibited"
        ],
        "avoid": [
          "Short (4-6 week) cycle NOT effective — Enan steady-state only after 3-4 weeks",
          "More than 12-14 weeks continuous cycle (severe HPTA suppression)",
          "WADA-tested athlete throughout the entire off-season (detection window 6 months)",
          "Cardiovascular risk, female use (>50 mg/week virilization)"
        ]
      },
      "interactions": [
        "Test-Enan stack: ester half-life matching, weekly 1-2x injection",
        "Tren-Enan stack: \"long-ester cutting\" 10-12 weeks",
        "PCT (Clomid + Nolvadex 4-6 weeks) starts last Enan injection +14-21 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 300, "medium": 500, "high": 700},
        "unit": "mg/week (IM, split 1-2x)",
        "note": "Minimum 10 weeks cycle due to steady-state. 300-700 mg/week, weekly 1-2x injection. TUDCA / NAC NOT needed (lowest hepatotoxicity AAS). Female dose max 50-100 mg/week. PCT 4-6 weeks from last injection +14-21 days."
      }
    }
  ],
  "defaultVariant": "enan-oil"
}
