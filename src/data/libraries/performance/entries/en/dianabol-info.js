// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.957Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "dianabol-info",
  "name": "Dianabol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methandrostenolone, 17α-alkylated oral AAS. Classic \"kickstart\" bulking steroid with high hepatotoxicity.",
  "description": "Dianabol (Methandrostenolone) was the first mass-marketed oral AAS, synthesized by John Bosley Ziegler in 1955 for the US weightlifting team. A 17α-alkylated oral compound, it produces rapid water-retentive muscle gain. **\"Wet gain\" myth revision**: most of the weight gained on Dianabol is not subcutaneous extracellular edema but INTRAMUSCULAR glycogen storage plus cell volumization (intracellular hydration). Cell swelling itself is an anabolic signal (Häussinger hypothesis: cell-volume rise activates mTOR signaling and stimulates protein synthesis), so behind the \"wet\" appearance lies a real productive anabolic process. \"Kickstart\" use is 4-6 weeks alongside longer-acting injectable AAS. It aromatizes, causing E2 rise + gyno + water retention risk — BUT Dianabol also forms an unusually potent **anastrozole-resistant 17α-methylestradiol metabolite** via aromatase catalysis, so gyno risk remains high even on AI, and classical AI titration (anastrozole 0.5 mg EOD) is less effective than on Testosterone. Hepatotoxicity is high (ALT/AST rises significantly) due to 17α-alkylated first-pass metabolism.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist, 17α-alkylated, aromatizes"
    },
    {
      "label": "Half-life",
      "value": "3-6 hours (oral) / 1-2 days (oil)"
    },
    {
      "label": "Anabolic:Androgenic ratio",
      "value": "40-60:90-210 (testosterone=100:100)"
    },
    {
      "label": "Legal status",
      "value": "USA: Schedule III. EU: restricted Rx. WADA: banned."
    }
  ],
  "mechanism": "17α-alkylated AR agonist. Aromatase converts to E2 AND to 17α-methylestradiol (the latter an unusually potent, anastrozole-resistant metabolite → high gyno risk even on AI). 5α-reductase minimally activates to a DHT-like metabolite. Intracellular glycogen synthesis plus cell volumization act as indirect anabolic signals (mTOR activation).",
  "legalStatus": "USA: Schedule III. HU/EU: illegal without prescription, no pharmacy distribution. WADA: banned.",
  "onsetTime": "3-7 days",
  "halfLife": "3-6 h (oral)",
  "androgenicRatio": "40-60:90-210",
  "interactionsWith": [
    "aromatase inhibitors",
    "alcohol",
    "NSAIDs"
  ],
  "aromatization": "high",
  "hepatotoxicity": "high",
  "wadaStatus": "banned",
  "benefits": [
    "Rapid mass + water retention (3-5 kg / 4 weeks)",
    "Strength gain in \"kickstart\" cycle",
    "Mood elevation (dopaminergic + estrogen-mediated): common user feedback in \"kickstart\" phase, euphoric drive plus training motivation rise"
  ],
  "studies": [
    {
      "title": "Effects of methandienone on the performance and body composition of men undergoing athletic training",
      "authors": "Hervey GR, Knibbs AV, Burkinshaw L et al.",
      "journal": "Clin Sci (Lond). 1981;60(4):457-461.",
      "pmid": "7018798"
    },
    {
      "title": "Distinct phenotype of hepatotoxicity associated with illicit use of anabolic androgenic steroids",
      "authors": "Robles-Diaz M, Gonzalez-Jimenez A, Medina-Caliz I et al.",
      "journal": "Aliment Pharmacol Ther. 2015;41(1):116-125.",
      "pmid": "25394890"
    },
    {
      "title": "Anabolic steroid cardiovascular toxicity",
      "authors": "Baggish AL, Weiner RB, Kanayama G et al.",
      "journal": "Circulation. 2017;135(21):1991-2002.",
      "pmid": "28533317"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-554.",
      "pmid": "15248788"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 20,
      "medium": 30,
      "high": 50
    },
    "unit": "mg/day",
    "note": "\"Kickstart\" 4-6 weeks alongside longer-acting injectable AAS. 2-3 daily doses given the 3-6 h half-life. Aromatase inhibitor (anastrozole 0.5 mg EOD) often needed for E2 rise. TUDCA 500-750 mg/day liver support."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2 weeks before",
      "markers": "Hepatic priority: ALT, AST, GGT, bilirubin, INR. Plus lipid, hormone, E2, renal.",
      "purpose": "Liver baseline. Contraindicated if ALT/AST elevated."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 2-3",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel (drastic HDL drop), E2, BP.",
      "purpose": "ALT/AST >3x = stop. E2 rise = AI (anastrozole 0.5 mg EOD)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT week 4 + 8-12",
      "markers": "Total T, Free T, LH, FSH, E2, hepatic + lipid recovery.",
      "purpose": "Verify HPTA + hepatic recovery."
    },
    "cruise": null
  },
  "defaultVariant": "oral",
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": "Methandrostenolone oral (tablet)",
      "routeNote": "Classic format: 17α-methyl tablet with ~3-6 h half-life, fast plasma peak within 1-2 hours. Split dosing 2-3x daily recommended to maintain stable levels. High hepatic first-pass stress — TUDCA + NAC mandatory. Most studied and widely used Dianabol form.",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: FDA Rx (Ciba 1958, discontinued 1983); Schedule III. EU: UGL market dominant, illegal without prescription. WADA-banned.",
      "bioavailability": "~80% (oral, 17α-methyl first-pass-resistant)",
      "onsetTime": "1-2 h (oral, fast absorption)",
      "halfLife": "3-6 h (oral, parent compound)",
      "halfLifeActive": "5 h",
      "detectionWindow": "3-6 weeks urinary (parent + 6β-OH-methandienone long-term metabolites).",
      "aromatization": "high",
      "hepatotoxicity": "high",
      "dosing": "Typical dose 20-50 mg/day, split 2-3x daily (morning, midday, optionally pre-workout). Beginners: 20-25 mg/day. Intermediate: 30-40 mg/day. Maximum 50 mg/day; cycles beyond 6 weeks not recommended.",
      "quality": {
        "pure": [
          "Clear white scored tablet (5 mg or 10 mg classic UGL dosing)",
          "Original Ciba Dianabol tablet (1958-1983, today collectible)"
        ],
        "caution": [
          "Hepatotoxicity (ALT/AST 3-5x rise)",
          "Water retention + gynecomastia risk (strong aromatization)",
          "Blood pressure elevation (water retention + renal AKI)",
          "Lipid disturbance dramatic: HDL up to 50% drop"
        ],
        "avoid": [
          "Any existing liver disorder absolute contraindication",
          "Concurrent alcohol, NSAID, paracetamol strictly prohibited",
          "More than 6 weeks continuous cycle",
          "Female use (virilization)"
        ]
      },
      "interactions": [
        "Anastrozole 0.5 mg EOD or E3D: E2 control mandatory",
        "Nolvadex (SERM) 20 mg/day on standby for gyno prevention",
        "TUDCA 1000 mg/day + NAC 1800 mg/day mandatory",
        "PCT (Clomid + Nolvadex 4 weeks) last tablet +1-2 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 20,
          "medium": 30,
          "high": 50
        },
        "unit": "mg/day (oral, split 2-3x)",
        "note": "Max 6 weeks cycle. 20-50 mg/day, split 2-3x (3-6h half-life). TUDCA + NAC mandatory. PCT 4 weeks."
      }
    },
    {
      "id": "oil",
      "routeId": "oil",
      "routeLabel": "Methandrostenolone in-oil (IM, UGL)",
      "routeNote": "Rare alternative format (\"Reforvit-B\" type suspension). Bypasses hepatic first-pass metabolism → somewhat lower but NOT zero hepatotoxicity (17α-methyl group causes intrinsic hepatotoxicity even without first-pass). More stable plasma levels with EOD injection schedule. Notoriously painful injection; exclusively UGL source.",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Not a licensed format — exclusively UGL underground market. Illegal everywhere. WADA-banned.",
      "bioavailability": "~95-100% (IM bypasses first-pass; methandrostenolone suspended in oil with slow depot absorption)",
      "onsetTime": "12-24 h (IM, depot kinetics)",
      "halfLife": "1-2 days (in-oil suspension; non-esterified methandrostenolone)",
      "halfLifeActive": "1-2 days",
      "detectionWindow": "4-6 weeks urinary (longer than oral due to depot absorption).",
      "aromatization": "high",
      "hepatotoxicity": "moderate-high",
      "dosing": "Typical dose 50 mg EOD (every other day) from a 10 ml 50 mg/ml vial. Some users use 75-100 mg EOD. Maximum 8-week cycle. Strict aseptic injection technique required.",
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "quality": {
        "pure": [
          "Clear yellowish oil, 10 ml vial, sterile filtered, 50 mg/ml UGL concentration",
          "UGL HPLC-tested source MANDATORY"
        ],
        "caution": [
          "PIP (injection site pain) common, methandrostenolone-in-oil notoriously painful",
          "Lipid disturbance dramatic: HDL drop same as oral",
          "Water retention + gynecomastia risk (aromatization unchanged)",
          "Hepatotoxicity reduced BUT not zero — TUDCA mandatory"
        ],
        "avoid": [
          "Strong injection-site sensitivity",
          "Any liver disorder (moderate-high hepatotoxicity)",
          "Aseptic injection technique lacking (abscess risk)",
          "More than 8 weeks cycle"
        ]
      },
      "interactions": [
        "Anastrozole 0.5 mg E3D: E2 control",
        "TUDCA 500-750 mg/day mandatory (moderate-high hepatotoxicity)",
        "PCT starts last injection +5-7 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/inj (EOD, IM)",
        "note": "Max 8 weeks cycle. 50-100 mg/inj EOD. TUDCA 500-750 mg/day mandatory. PCT 4 weeks, last injection +5-7 days."
      }
    }
  ],
  "anecdote": "Dianabol holds an almost legendary status in AAS lore. Users often report a very fast shift in fullness, leverage, recovery, and gym performance within surprisingly short timeframes. A hallmark feature is how 'anabolic' it feels — fairly obvious rather than subtle. Strength typically climbs rapidly alongside dramatic pump and volumization effects. Much of what is colloquially called 'water weight' is actually intramuscular glycogen and cell hydration, which is not equivalent to meaningless bloat and may itself contribute to anabolic signaling. Community accounts note Dianabol's disproportionate effect on training momentum — more productive sessions, faster recovery, and compounding growth from that alone. Appetite often increases too. Tradeoffs are significant: notable estrogen-related effects (gyno, water retention), blood pressure elevation, lipid disruption, and 17α-alkylated hepatic strain. Some accounts and emerging evidence suggest Dianabol metabolizes into an unusually potent estrogenic metabolite, which is worth keeping in mind when planning AI/SERM support."
}
