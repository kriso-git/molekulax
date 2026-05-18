// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.605Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "minoxidil",
  "name": "Minoxidil",
  "image": null,
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "K-channel activator topical/oral drug (Rogaine, Loniten). Androgenetic alopecia treatment since 1988. 2-5% topical standard.",
  "description": "Minoxidil was originally developed as oral antihypertensive (Loniten 1979), but the hypertrichosis \"side effect\" led to topical formulation for alopecia (Upjohn Rogaine 2% 1988, 5% 1996). Exact mechanism not fully clarified — ATP-sensitive K channel opening produces vasodilation and presumably hair follicle perfusion enhancement, but the molecular hair-growth-stimulation pathway is debated. \"Oral low-dose minoxidil\" (LDOM, 0.25-5 mg/day) became popular over the past 5 years for off-label alopecia, more effective than topical (Sinclair 2017 PMID 28349541). Big-3 alopecia protocol (minoxidil + finasteride + ketoconazole) is gold standard.",
  "mechanism": "ATP-sensitive K channel opening → vasodilation + hair follicle perfusion. Secondary: sulfotransferase-activated active metabolite (minoxidil sulfate), prostaglandin E2 elevation.",
  "legalStatus": "Topical (2-5%): OTC EU/USA/HU. Oral (Loniten): prescription. Off-label LDOM: prescription (low oral dose, alopecia target).",
  "bioavailability": "≥90% (oral, \"at least 90% absorbed\" from GI tract — FDA Loniten label; antihypertensive oral form)",
  "onsetTime": "3-6 months (visible hair regrowth)",
  "halfLife": "~4 h (oral), topical absorption minimal",
  "atcCode": "D11AX01 (topical) / C02DC01 (oral)",
  "prescriptionStatus": "OTC topical, prescription oral (Loniten + LDOM)",
  "indications": [
    "Androgenetic alopecia (male + female pattern, topical)",
    "Off-label LDOM: severe alopecia (Sinclair 2017 evidence)",
    "Resistant hypertension (Loniten oral, rare)"
  ],
  "contraindications": [
    "Acute MI or active ischemia (oral)",
    "Pheochromocytoma"
  ],
  "commonSideEffects": [
    "Topical: scalp irritation, itching, hypertrichosis (face, shoulder, contam-zone)",
    "Oral: edema (ankle, local), reflex tachycardia, pericardial effusion (rare)",
    "Initial shedding (telogen effluvium) around 1-2 months, like on finasteride"
  ],
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteride: COMPLEMENTARY mechanism, gold-standard combination",
    "Antihypertensives: oral additive hypotension"
  ],
  "benefits": [
    "OTC topical form — low entry barrier",
    "LDOM more effective than topical (Sinclair 2017)",
    "Complementary to finasteride (Big-3 protocol)"
  ],
  "studies": [
    {
      "title": "Low-dose oral minoxidil for hair loss",
      "authors": "Sinclair R.",
      "journal": "J Am Acad Dermatol. 2018;79(1):104-105.",
      "pmid": "28349541"
    },
    {
      "title": "Topical minoxidil for androgenetic alopecia: meta-analysis",
      "authors": "Suchonwanit P, Thammarucha S, Leerunyakul K.",
      "journal": "Drug Des Devel Ther. 2019;13:2777-2786.",
      "pmid": "31496654"
    }
  ],
  "related": [
    "finasteride"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2,
      "medium": 5,
      "high": 5
    },
    "unit": "% topikális 2x/nap",
    "note": "Standard: 5% topical solution or foam 1 ml BID (morning + evening) on dry scalp. In women, 2% is less irritating alternative. Off-label oral LDOM: 0.25-5 mg/day single dose. Effect 3-6 months. On discontinuation, growth recedes over 6-12 months."
  }
}
