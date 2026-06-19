// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.081Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "adamax",
  "name": "Adamax",
  "image": "/peptides/adamax.png",
  "accentColor": "#a5b4fc",
  "tagColor": "rgba(165,180,252,0.16)",
  "tagText": "#a5b4fc",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 300,
  "shortDesc": "Adamantane-conjugated Semax, enhanced BBB penetration",
  "description": "Adamax is an enhanced Semax derivative: N-terminal acetylation + C-terminal adamantane conjugation. The adamantane group markedly improves BBB penetration and lipophilicity. Available in two forms: subcutaneous injection (research protocol) and intranasal spray (community route). Grey-zone research chemical, no peer-reviewed clinical trials.",
  "keyInfo": [
    {
      "label": "Type",
      "value": "Adamantane-conjugated peptide"
    },
    {
      "label": "Structure",
      "value": "Ac-Semax + adamantane conjugate"
    },
    {
      "label": "Status",
      "value": "Research (preclinical)"
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
  "dosageInfo": "Anecdotal research protocol: 100–300 µg/day (SC or IN). No long-term human safety data, no peer-reviewed clinical trials.",
  "studies": [],
  "anecdote": "Adamax is positioned as a theoretical upgrade to Semax, with improved BBB penetration, longer duration, and more potent neurotrophic effects on paper. While more definitive data is still needed, anecdotal accounts describe clearer thinking, better train of thought, and smoother cognition. Numerous community discussions document user experiences with Adamax, though all reports remain anecdotal — no peer-reviewed clinical trial exists.\n\nAdamax aims for similar neurotrophic and nootropic benefits to Semax, but with greater emphasis on sustained activity due to improved BBB permeability and a longer duration. As a grey-zone research chemical, all use is at your own risk, based on community-sourced protocols.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/adamax.png",
      "dosing": "100–300 μg SC/day (anecdotal research protocol, limited human data)",
      "halfLife": "~30 min plasma (adamantyl modification adds enzymatic stability)",
      "halfLifeActive": "~24+ h (CNS, hypothesized BBB penetration)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research-chemical Semax-analog (adamantyl modification). Limited human data, anecdotal use.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg SC/day",
        "note": "Research-chemical anecdotal dose range. NOT supported by peer-reviewed RCTs. 5 mg vial + 2 ml BAC water = 2500 μg/ml, 80 μl per 200 μg dose."
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
      "image": "/peptides/adamax.png",
      "dosing": "100–300 μg/day intranasal (community route, limited human data)",
      "halfLife": "~5–10 min plasma",
      "halfLifeActive": "~24+ h (CNS)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 min",
      "routeNote": "Research-chemical IN route, anecdotal use. No peer-reviewed clinical trials.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg IN/day",
        "note": "Research-chemical recon: 5 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. Anecdotal dose range, NOT a clinical protocol."
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
