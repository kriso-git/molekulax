// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.603Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "metronidazole",
  "name": "Metronidazole",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Nitroimidazole antibiotic (Flagyl). Anaerobic + protozoa infections (C. difficile, Trichomonas, Giardia, bacterial vaginitis).",
  "description": "Metronidazole is a nitroimidazole antibiotic (Sanofi Flagyl, FDA 1963). Selectively active against anaerobic bacteria and protozoa: bacterial/protozoan reducing enzymes (pyruvate-ferredoxin oxidoreductase) convert it to reactive nitro radicals damaging DNA. Inactive against aerobics. Standard indications: C. difficile colitis (vancomycin alternative for mild-moderate), bacterial vaginitis, trichomoniasis, giardiasis, amoebiasis, H. pylori eradication triple therapy. Generally well tolerated, but DISULFIRAM-like reaction with alcohol — absolute alcohol prohibition during treatment and 48 h after.",
  "mechanism": "Anaerobic bacterial/protozoan uptake + reduction to reactive nitro radicals → DNA damage → cell death. Inactive vs aerobics (no reducing enzyme).",
  "legalStatus": "EU/HU: prescription only (Klion, Flagyl, generics). USA: FDA Rx.",
  "bioavailability": "~100% (oral, \"well absorbed\", disposition equivalent to IV — FDA Flagyl label)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~8 h (twice or thrice daily)",
  "atcCode": "J01XD01",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "C. difficile colitis (mild-moderate, vancomycin alternative)",
    "Bacterial vaginitis (Gardnerella)",
    "Trichomoniasis (STD, partner treatment also)",
    "Giardiasis, amoebiasis (traveler's diarrhea)",
    "H. pylori eradication (PPI + amoxicillin + clarithromycin/metronidazole)"
  ],
  "contraindications": [
    "First trimester pregnancy (relative, risk-benefit)",
    "Active alcohol consumption (disulfiram reaction)"
  ],
  "commonSideEffects": [
    "GI: metallic taste, nausea, abdominal discomfort",
    "Dark-red urine (benign)",
    "Severe, rare: peripheral neuropathy (chronic high-dose), aseptic meningitis, leukopenia, encephalopathy"
  ],
  "cyp450": [
    "CYP2C9 INHIBITOR",
    "CYP3A4 substrate (minor)"
  ],
  "crossMolInteractions": [
    "ALCOHOL: ABSOLUTE prohibition during treatment + 48 h after (disulfiram-like reaction, vomiting, flushing, palpitations)",
    "Warfarin: significant INR rise (CYP2C9 block), monitor",
    "Lithium: levels may rise"
  ],
  "benefits": [
    "Anaerobic and protozoa selectivity (unique)",
    "C. diff mild-moderate vancomycin alternative",
    "H. pylori triple therapy component"
  ],
  "studies": [
    {
      "title": "Vancomycin versus metronidazole for Clostridium difficile colitis",
      "authors": "Johnson S, Louie TJ, Gerding DN et al.",
      "journal": "Clin Infect Dis. 2014;59(3):345-54.",
      "pmid": "24799326"
    },
    {
      "title": "Metronidazole for bacterial vaginosis: meta-analysis",
      "authors": "Sherrard J, Donders G, White D et al.",
      "journal": "Int J STD AIDS. 2011;22(8):421-9.",
      "pmid": "21795415"
    }
  ],
  "related": [
    "amoxicillin",
    "doxycycline",
    "azithromycin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 250,
      "medium": 500,
      "high": 750
    },
    "unit": "mg 3x/nap",
    "note": "C. diff: 500 mg TID 10-14 days. BV: 500 mg BID 7 days. Trichomonas: 2 g single OR 500 mg BID 7 days (partner too). H. pylori: 500 mg BID 14 days (triple). ALCOHOL FORBIDDEN during + 48 h. Metallic taste benign."
  }
}
