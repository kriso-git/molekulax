// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.075Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "selank",
  "name": "Selank",
  "image": "/peptides/selank.png",
  "accentColor": "#67e8f9",
  "tagColor": "rgba(103,232,249,0.16)",
  "tagText": "#67e8f9",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 750,
  "shortDesc": "Tuftsin analog, anxiolytic nootropic",
  "description": "Selank is a C-terminally extended analog of tuftsin (Thr-Lys-Pro-Arg), registered as an anxiolytic in Russia. Available in two forms: subcutaneous injection (research protocol) and intranasal spray (Russian clinical practice primary route).",
  "keyInfo": [
    {
      "label": "Type",
      "value": "Tuftsin analog"
    },
    {
      "label": "Structure",
      "value": "Thr-Lys-Pro-Arg-Pro-Gly-Pro"
    },
    {
      "label": "Status",
      "value": "Registered RU"
    },
    {
      "label": "Route",
      "value": "Intranasal"
    },
    {
      "label": "Storage",
      "value": "2–8°C"
    },
    {
      "label": "Source",
      "value": "Placeholder, image later"
    }
  ],
  "dosageInfo": "Research: 250–750 µg intranasal 2–3× daily, in 7–14 day courses.",
  "studies": [
    {
      "tag": "Research",
      "tagColor": "rgba(103,232,249,0.16)",
      "tagText": "#67e8f9",
      "title": "Peptide-based Anxiolytics: The Molecular Aspects of Heptapeptide Selank Biological Activity",
      "authors": "Vyunova TV, Andreeva LA, Shevchenko KV, et al.",
      "journal": "Protein Pept Lett",
      "year": "2018",
      "pmid": "30255741",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30255741/",
      "finding": "Molecular review of Selank: anxiolytic + immunomodulatory effects via GABAergic system modulation."
    }
  ],
  "anecdote": "Anecdotal accounts on Selank mirror those of Semax: some users notice clear effects, others do not. One common report describes 500 mcg intra-nasally easing anxiety on dosing days compared to non-dosing days. It is not heavy or sedating like conventional anxiolytics but is reliably effective for many. Selank is commonly paired with Semax for a calm, nootropic-like profile, with effects often noticeable shortly after dosing.\n\nSelank is most often administered intra-nasally, though subcutaneous injection works as well. It is typically administered daily or situationally \"on-demand,\" depending on the user's protocol. It is generally well-tolerated and has anti-inflammatory and modulatory effects in addition to its anxiolytic profile.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/water-vial.png",
      "dosing": "150–450 μg SC/day (research protocol, Kost tradition)",
      "halfLife": "~5–7 min plasma",
      "halfLifeActive": "~24 h (CNS, downstream GABA/serotonergic effects)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research protocol route: anxiolytic mechanism studies. Less common in the West; clinical practice is IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 150, "medium": 300, "high": 450 },
        "unit": "μg SC/day",
        "note": "Research-protocol SC dose. 5 mg vial + 2 ml BAC water = 2500 μg/ml, 60–180 μl per dose."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 2 ml bacteriostatic water",
          "Inject water slowly onto vial wall, NOT directly onto powder",
          "Wait 30 seconds, swirl gently (DO NOT shake)",
          "Storage: refrigerated (2–8°C), max 28 days"
        ]
      }
    },
    {
      "id": "in",
      "routeId": "in",
      "routeLabel": "Intranasal spray",
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "75–300 μg/day intranasal (75 μg/drop, 1–4 drops/day)",
      "halfLife": "~5 min plasma",
      "halfLifeActive": "~24 h (CNS)",
      "bioavailability": "~30–40% (IN, BBB-direct delivery)",
      "onsetTime": "5–15 min",
      "routeNote": "Russian clinical practice primary route: anxiolytic mechanism, GABA/serotonergic modulation. Registered RU pharmaceutical (Selanco 0.15% nasal drops).",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 75, "medium": 150, "high": 300 },
        "unit": "μg IN/day",
        "note": "Pre-mixed RU pharma (Selanco 0.15% nasal drops, 75 μg/drop). 1–4 drops/day, in 7–14 day courses."
      }
    }
  ],
  "defaultVariant": "sc"
}
