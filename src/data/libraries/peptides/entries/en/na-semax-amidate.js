// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.081Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "na-semax-amidate",
  "name": "NA Semax Amidate",
  "image": null,
  "accentColor": "#22d3ee",
  "tagColor": "rgba(34,211,238,0.16)",
  "tagText": "#22d3ee",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 400,
  "shortDesc": "N-acetylated, amidated Semax, longer half-life, stronger nootropic",
  "description": "NA Semax Amidate (N-Acetyl Semax Amidate) is a stabilised Semax with N-terminal acetylation + C-terminal amidation, yielding a longer half-life and stronger, more durable nootropic effect. Available in two forms: subcutaneous injection and intranasal spray. Research chemical, limited human data, no peer-reviewed clinical trials.",
  "keyInfo": [
    {
      "label": "Type",
      "value": "Stabilised Semax"
    },
    {
      "label": "Structure",
      "value": "Ac-Met-Glu-His-Phe-Pro-Gly-Pro-NH₂"
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
  "dosageInfo": "Anecdotal research protocol: 200–600 µg/day (SC or IN). Limited human data, no peer-reviewed clinical trials.",
  "studies": [],
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/water-vial.png",
      "dosing": "200–600 μg SC/day (anecdotal research protocol, limited human data)",
      "halfLife": "~30–60 min plasma (N-acetyl + amidation = higher enzymatic stability than Semax)",
      "halfLifeActive": "~24+ h (CNS)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research-chemical Semax-analog (N-acetyl + C-amide modification). Hypothesized longer half-life vs Semax. Limited human data.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/day",
        "note": "Research-chemical anecdotal dose range, NOT a peer-reviewed RCT. 5 mg vial + 2 ml BAC water = 2500 μg/ml."
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
      "dosing": "200–600 μg/day intranasal (community route)",
      "halfLife": "~10–15 min plasma",
      "halfLifeActive": "~24+ h (CNS)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 min",
      "routeNote": "Research-chemical IN route, community-sourced protocols. No peer-reviewed data.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg IN/day",
        "note": "Research-chemical recon: 5 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. Anecdotal dosing."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 5 ml sterile bacteriostatic water",
          "Inject water slowly onto vial wall, swirl gently (DO NOT shake)",
          "Transfer to a sterile nasal spray bottle (50 μl/puff pump = ~50 μg/puff)",
          "Concentration: 1000 μg/ml — 1 puff = ~50 μg, 4–12 puffs/day depending on dose",
          "Storage: refrigerated (2–8°C), max 28 days; prime 2–3 empty puffs before use"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
