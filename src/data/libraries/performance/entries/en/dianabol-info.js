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
      "value": "3-6 hours"
    },
    {
      "label": "Anabolic ratio",
      "value": "210:60"
    },
    {
      "label": "Legal status",
      "value": "USA: Schedule III. EU: restricted Rx."
    }
  ],
  "mechanism": "17α-alkylated AR agonist. Aromatase converts to E2 AND to 17α-methylestradiol (the latter an unusually potent, anastrozole-resistant metabolite → high gyno risk even on AI). 5α-reductase minimally activates to a DHT-like metabolite. Intracellular glycogen synthesis plus cell volumization act as indirect anabolic signals (mTOR activation).",
  "legalStatus": "USA: Schedule III. HU/EU: illegal without prescription, no pharmacy distribution. WADA: banned.",
  "onsetTime": "3-7 days",
  "halfLife": "3-6 h",
  "interactionsWith": [
    "aromatase inhibitors",
    "alcohol",
    "NSAIDs"
  ],
  "aromatization": "Yes — moderate-high CYP19 affinity; \"wet gains\" (water retention, gynecomastia) common, anti-aromatase mandatory in long cycles (Schänzer 1996)",
  "hepatotoxicity": "High — 17α-alkylated, dose-dependent ALT/AST elevation; cholestatic hepatitis and peliosis hepatis rare severe cases (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "210:60",
  "benefits": [
    "Rapid mass + water retention (3-5 kg / 4 weeks)",
    "Strength gain in \"kickstart\" cycle",
    "Mood elevation (dopaminergic + estrogen-mediated): common user feedback in \"kickstart\" phase, euphoric drive plus training motivation rise"
  ],
  "studies": [
    {
      "title": "Methandrostenolone effects on body composition and strength",
      "authors": "Hervey GR, Knibbs AV, Burkinshaw L et al.",
      "journal": "Clin Sci. 1981;60(4):457-461.",
      "pmid": "6263593"
    },
    {
      "title": "Cholestatic hepatitis associated with methandrostenolone",
      "authors": "Søe KL, Søe M, Gluud C.",
      "journal": "Pharmacol Toxicol. 1992;70(4):293-294.",
      "pmid": "1502619"
    },
    {
      "title": "Anabolic steroid cardiovascular toxicity",
      "authors": "Baggish AL, Weiner RB, Kanayama G et al.",
      "journal": "Circulation. 2017;135(21):1991-2002.",
      "pmid": "28533317"
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
    "unit": "mg/nap",
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
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Methandrostenolone oral (tablet)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: FDA Rx (Ciba 1958, discontinued 1983); Schedule III. EU: UGL market dominant, illegal without prescription. WADA-banned.",
      "bioavailability": "~80% (oral, 17α-methyl first-pass-resistant)",
      "onsetTime": "1-2 h (oral, fast absorption)",
      "halfLife": "5 hours (oral, parent compound)",
      "halfLifeActive": "5 h",
      "detectionWindow": "3-6 weeks urinary (parent + Schänzer 2006 6β-OH-methandienone long-term metabolites).",
      "aromatization": "Yes — CYP19 substrate, clinically strong E2 conversion (Pope-Kanayama 2014).",
      "hepatotoxicity": "High — 17α-methyl hepatic first-pass stress, ALT/AST 3-5x rise common at 4+ week cycle.",
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
        "unit": "mg/day (oral, 2-3x split)",
        "note": "Max 6 weeks cycle. 20-50 mg/day, 2-3x split (5h half-life). TUDCA + NAC mandatory. PCT 4 weeks."
      }
    },
    {
      "routeId": "oil",
      "routeLabel": "Methandrostenolone in-oil (IM, UGL)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Not a licensed format — exclusively UGL underground market. Illegal everywhere. WADA-banned.",
      "bioavailability": "~95-100% (IM bypasses first-pass; methandrostenolone suspended in oil with slow depot absorption)",
      "onsetTime": "12-24 h (IM, depot kinetics)",
      "halfLife": "1-2 days (in-oil suspension; non-esterified methandrostenolone)",
      "halfLifeActive": "1-2 days",
      "detectionWindow": "4-6 weeks urinary (longer than oral due to depot absorption).",
      "aromatization": "Yes — structurally same as oral; aromatization level identical.",
      "hepatotoxicity": "Moderate — not zero due to 17α-methyl group, but avoiding first-pass reduces peak hepatic concentration. Profile similar to Superdrol injectable (Pope-Kanayama 2014 c17-AA injectable class extrapolated data).",
      "quality": {
        "pure": [
          "Clear yellowish oil, 10ml vial, sterile filtered, 50-75 mg/ml UGL concentration",
          "UGL HPLC-tested source MANDATORY"
        ],
        "caution": [
          "PIP (injection site pain) common, methandrostenolone-in-oil notoriously painful",
          "Lipid disturbance dramatic: HDL drop same as oral",
          "Water retention + gynecomastia risk (aromatization unchanged)",
          "Hepatotoxicity reduced BUT not zero"
        ],
        "avoid": [
          "Strong injection-site sensitivity",
          "Any liver disorder (moderate hepatotoxicity)",
          "Aseptic injection technique lacking (abscess risk)",
          "More than 8 weeks cycle"
        ]
      },
      "interactions": [
        "Anastrozole 0.5 mg E3D: E2 control",
        "TUDCA 500 mg/day recommended (due to moderate hepatotoxicity)",
        "PCT starts last injection +5-7 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 100,
          "high": 150
        },
        "unit": "mg/week (IM, split 2-3x)",
        "note": "Max 8 weeks cycle. 50-150 mg/week, 2-3x split (short half-life despite depot). TUDCA recommended. PCT 4 weeks last injection +5-7 days."
      }
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Dianabol holds an almost legendary status in AAS lore. Users often report a very fast shift in fullness, leverage, recovery, and gym performance within surprisingly short timeframes. A hallmark feature is how 'anabolic' it feels — fairly obvious rather than subtle. Strength typically climbs rapidly alongside dramatic pump and volumization effects. Much of what is colloquially called 'water weight' is actually intramuscular glycogen and cell hydration, which is not equivalent to meaningless bloat and may itself contribute to anabolic signaling. Community accounts note Dianabol's disproportionate effect on training momentum — more productive sessions, faster recovery, and compounding growth from that alone. Appetite often increases too. Tradeoffs are significant: notable estrogen-related effects (gyno, water retention), blood pressure elevation, lipid disruption, and 17α-alkylated hepatic strain. Some accounts and emerging evidence suggest Dianabol metabolizes into an unusually potent estrogenic metabolite, which is worth keeping in mind when planning AI/SERM support."
}
