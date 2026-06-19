// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.081Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "adalank",
  "name": "Adalank (NA Selank Amidate)",
  "image": "/peptides/adalank.png",
  "accentColor": "#67e8f9",
  "tagColor": "rgba(103,232,249,0.16)",
  "tagText": "#67e8f9",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 500,
  "shortDesc": "Stabilised Selank, anxiolytic + nootropic",
  "description": "Adalank (N-Acetyl Selank Amidate) is a stabilised Selank derivative with N-acetylation and C-amidation, offering improved stability and blood-brain barrier penetration. Available in two forms: subcutaneous injection and intranasal spray. Research-chemical Selank-analog, limited human data, no peer-reviewed clinical trials.",
  "keyInfo": [
    {
      "label": "Type",
      "value": "Stabilised Selank"
    },
    {
      "label": "Structure",
      "value": "Ac-Thr-Lys-Pro-Arg-Pro-Gly-Pro-NH₂"
    },
    {
      "label": "Status",
      "value": "Research"
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
  "dosageInfo": "Anecdotal research protocol: 100–300 µg/day (SC or IN). Limited human data, no peer-reviewed clinical trials.",
  "studies": [],
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/adalank.png",
      "dosing": "100–300 μg SC/day (anecdotal research protocol, limited human data)",
      "halfLife": "~10–20 min plasma (modified Selank-analog, hypothesized longer than Selank)",
      "halfLifeActive": "~24 h (CNS, anxiolytic downstream)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research-chemical Selank-analog. Hypothesized anxiolytic effect. Limited human data, anecdotal use.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg SC/day",
        "note": "Research-chemical anecdotal dose range. NOT supported by peer-reviewed RCTs. 5 mg vial + 2 ml BAC water = 2500 μg/ml."
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
      "image": "/peptides/adalank.png",
      "dosing": "100–300 μg/day intranasal (community route)",
      "halfLife": "~5–10 min plasma",
      "halfLifeActive": "~24 h (CNS)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 min",
      "routeNote": "Research-chemical IN route. No peer-reviewed clinical data, community-sourced protocols.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg IN/day",
        "note": "Research-chemical recon: 5 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. Anecdotal dosing."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 5 ml sterile bacteriostatic water",
          "Inject water slowly onto vial wall, swirl gently (DO NOT shake)",
          "Transfer to a sterile nasal spray bottle (50 μl/puff pump = ~50 μg/puff)",
          "Concentration: 1000 μg/ml — 1 puff = ~50 μg, 2–6 puffs/day depending on dose",
          "Storage: refrigerated (2–8°C), max 28 days; prime 2–3 empty puffs before use"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
