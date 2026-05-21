// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.074Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "semax",
  "name": "Semax",
  "image": null,
  "accentColor": "#22d3ee",
  "tagColor": "rgba(34,211,238,0.16)",
  "tagText": "#22d3ee",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 600,
  "shortDesc": "ACTH(4-10) analog, nootropic nasal spray",
  "description": "Semax (Met-Glu-His-Phe-Pro-Gly-Pro) is an ACTH(4-10) analog registered in Russia for ischaemic stroke and cognitive enhancement. Available in two forms: subcutaneous injection (research protocol) and intranasal spray (Russian clinical practice primary route).",
  "keyInfo": [
    {
      "label": "Type",
      "value": "ACTH(4-10) analog"
    },
    {
      "label": "Structure",
      "value": "Met-Glu-His-Phe-Pro-Gly-Pro"
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
  "dosageInfo": "Research / clinical: 150–600 µg intranasal 1–2× daily, in 5–14 day courses.",
  "studies": [
    {
      "tag": "Research",
      "tagColor": "rgba(34,211,238,0.16)",
      "tagText": "#22d3ee",
      "title": "Neuroprotective and antiamnesic effects of Semax during experimental ischemic infarction of the cerebral cortex",
      "authors": "Romanova GA, Barskov IV, Ostrovskaya RU, et al.",
      "journal": "Bull Exp Biol Med",
      "year": "2006",
      "pmid": "17603664",
      "url": "https://pubmed.ncbi.nlm.nih.gov/17603664/",
      "finding": "Semax exerts neuroprotective and antiamnesic effects in experimental ischemic cortical infarction via intranasal administration."
    }
  ],
  "anecdote": "Community reports on Semax are mixed: some users find it effective, while others report little subjective effect, including when administered subcutaneously. Those who do respond often describe a \"clean focus\" sensation — subtle but noticeable. Effects on neuroplasticity are thought to build gradually, as brain-chemistry changes are not instantaneous. Semax is used clinically in some countries (notably Russia) but remains less common in the West.\n\nSemax is most often administered intra-nasally and is typically cycled in research settings (a few weeks on, then off) rather than used continuously. Available data suggests Semax can increase dopamine and serotonin tone, raise BDNF, and aid in hypoxia tolerance, making it a meaningfully studied neurotrophic peptide.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/water-vial.png",
      "dosing": "200–600 μg SC/day (research protocol, cycled 5–14 days)",
      "halfLife": "~20 min plasma",
      "halfLifeActive": "~24 h (CNS downstream BDNF effects)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research protocol route: BBB penetration, BDNF modulation, cognitive performance studies. Less common in the West; clinical practice is IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/day",
        "note": "SC research dose. Standard 5 mg lyophilized vial + 2 ml bacteriostatic water = 2500 μg/ml = 80 μl per 200 μg dose."
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
      "dosing": "150–600 μg/day intranasal (50 μg/drop, 2–12 drops/day)",
      "halfLife": "~5–10 min plasma",
      "halfLifeActive": "~24 h (CNS)",
      "bioavailability": "~30–40% (IN, BBB-direct delivery)",
      "onsetTime": "5–15 min",
      "routeNote": "Russian clinical practice primary route: acute stroke BBB-direct delivery, cognitive enhancement, ACTH-axis modulation. Registered RU pharmaceutical (Semax 0.1% nasal drops).",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 150, "medium": 300, "high": 600 },
        "unit": "μg IN/day",
        "note": "Pre-mixed RU pharma (Semax 0.1% nasal drops, 50 μg/drop). 3–12 drops/day, split into 1–2 doses. Cycled 5–14 days."
      }
    }
  ],
  "defaultVariant": "sc"
}
