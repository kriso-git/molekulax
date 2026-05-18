// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.957Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "dianabol-info",
  "name": "Dianabol",
  "image": null,
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
  }
}
