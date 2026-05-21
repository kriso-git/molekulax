// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.075Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "melanotan-1",
  "name": "Melanotan-1 (Afamelanotide)",
  "image": null,
  "accentColor": "#fdba74",
  "tagColor": "rgba(253,186,116,0.16)",
  "tagText": "#fdba74",
  "defaultVialMg": 16,
  "defaultBacMl": 0,
  "defaultDoseMcg": 16000,
  "shortDesc": "α-MSH analog, approved for erythropoietic protoporphyria",
  "description": "Afamelanotide (Scenesse) is an α-MSH analog that drives melanogenesis via MC1R. FDA-approved in 2019 for EPP to reduce phototoxic reactions. Available in two forms: subcutaneous injection (FDA-approved Scenesse implant + research protocol) and intranasal spray (Hadley-style research route, lower efficacy).",
  "keyInfo": [
    {
      "label": "Type",
      "value": "α-MSH analog"
    },
    {
      "label": "Structure",
      "value": "[Nle4, D-Phe7]-α-MSH"
    },
    {
      "label": "Status",
      "value": "FDA approved (EPP)"
    },
    {
      "label": "Route",
      "value": "SC implant"
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
  "dosageInfo": "Clinical: 16 mg implant every 2 months. Research SC: 0.5–1 mg/day initially.",
  "studies": [
    {
      "tag": "Research",
      "tagColor": "rgba(253,186,116,0.16)",
      "tagText": "#fdba74",
      "title": "Afamelanotide for erythropoietic protoporphyria",
      "authors": "Langendonk JG, Balwani M, Anderson KE, et al.",
      "journal": "NEJM",
      "year": "2015",
      "pmid": "26132941",
      "url": "https://pubmed.ncbi.nlm.nih.gov/26132941/",
      "finding": "Afamelanotide significantly extends pain-free sun exposure in EPP patients."
    }
  ],
  "anecdote": "Anecdotal reports describe Melanotan-1 producing an even, gradual tan when paired with 30 minutes of daily sun exposure at 500 mcg per day, with a noticeable orange glow appearing within roughly one week. Side effects in this account were minimal, though users who have compared both compounds often prefer Melanotan-2 for more rapid pigmentation.\n\nMelanotan-1 is typically administered via nasal spray or subcutaneous injection due to poor oral bioavailability. Users typically titrate up gradually, as nausea is a common symptom when the initial dose is too high. Some users tolerate up to 1 mg per dose. Administration is best timed 30-60 minutes before a tanning session.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/water-vial.png",
      "dosing": "0.16 mg/kg SC research protocol (or 16 mg Scenesse implant bi-monthly, FDA-approved EPP)",
      "halfLife": "~1 h plasma",
      "halfLifeActive": "~days-weeks (α-MSH receptor downstream melanogenesis)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "30–60 min",
      "routeNote": "FDA-approved Rx route (Scenesse 16 mg implant, EPP indication). Research-protocol SC injection 0.16 mg/kg.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg SC/dose",
        "note": "Research-protocol loading: 0.5–1 mg SC daily for 7 days; maintenance 1–2 mg twice weekly."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 5 ml bacteriostatic water",
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
      "dosing": "1 mg/day intranasal (research route, Hadley early studies)",
      "halfLife": "~5–10 min plasma",
      "halfLifeActive": "~days (α-MSH downstream)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "15–30 min",
      "routeNote": "Research route (Hadley/Dorr early experimental). Much less efficient than SC, so higher doses are required.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg IN/day",
        "note": "Research-chemical recon: 10 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. 0.5–2 mg/day (research dosing, off-label)."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 5 ml sterile bacteriostatic water",
          "Transfer to a sterile nasal spray bottle",
          "Priming: 2–3 puffs into the air before use"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
