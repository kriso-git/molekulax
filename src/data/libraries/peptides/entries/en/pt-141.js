// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.070Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "pt-141",
  "name": "PT-141",
  "image": "/peptides/pt-141.png",
  "accentColor": "#fda4af",
  "tagColor": "rgba(244,63,94,0.14)",
  "tagText": "#fda4af",
  "defaultVialMg": 10,
  "defaultBacMl": 2,
  "defaultDoseMcg": 1750,
  "shortDesc": "Melanocortin receptor agonist: FDA approved (bremelanotide)",
  "description": "PT-141 (bremelanotide) is a synthetic melanocortin receptor agonist acting on MC3R and MC4R. The FDA approved it in 2019 for premenopausal women with hypoactive sexual desire disorder (HSDD) under the brand Vyleesi.\n\nUnlike PDE5 inhibitors (Viagra, Cialis), it acts via the central nervous system rather than the vasculature, so it is investigated in vascular contraindications too.\n\nAvailable in two forms: subcutaneous injection (FDA-approved Vyleesi auto-injector for HSDD) and intranasal spray (Palatin's original research route).",
  "keyInfo": [
    {
      "label": "Type",
      "value": "Melanocortin receptor agonist (MC3R/MC4R)"
    },
    {
      "label": "Structure",
      "value": "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH"
    },
    {
      "label": "Molecular weight",
      "value": "~1025 Da"
    },
    {
      "label": "Target area",
      "value": "Sexual desire (HSDD)"
    },
    {
      "label": "Storage",
      "value": "2–8°C (reconstituted)"
    },
    {
      "label": "Stability",
      "value": "25–30 days (reconstituted)"
    }
  ],
  "dosageInfo": "FDA-approved dose (HSDD): 1.75 mg subcutaneous, 45 minutes before sexual activity. Max 1× / 24 h, max 1× / 8 days. Anti-emetic pretreatment recommended to prevent nausea.",
  "studies": [
    {
      "tag": "Phase III RCT",
      "tagColor": "rgba(217,119,6,0.15)",
      "tagText": "#fcd34d",
      "title": "Bremelanotide for Hypoactive Sexual Desire Disorder",
      "authors": "Kingsberg SA, Clayton AH, Portman D, et al.",
      "journal": "Obstetrics & Gynecology",
      "year": "2019",
      "pmid": "31599840",
      "url": "https://pubmed.ncbi.nlm.nih.gov/31599840/",
      "finding": "Significant improvement in HSDD symptoms in two Phase 3 RCTs with a favorable safety profile."
    }
  ],
  "anecdote": "PT-141 is a widely used and notably perceptible libido compound. Users frequently report a strong, somewhat spontaneous increase in desire — not just a mild improvement — without dependence on other factors, since it acts directly via melanocortin receptors. Nausea is a very common side effect, particularly at higher doses or early in use, and flushing or transient blood-pressure increases are also reported. Combined with a PDE5 inhibitor such as Tadalafil or Sildenafil, users describe enhanced desire and performance, with potential synergy from the blood-pressure interaction. Effects can be unpredictable and are heavily context-, mood-, and timing-dependent.\n\nPT-141 is typically administered subcutaneously, like most peptides. Dosing varies and is highly individual, so starting low and titrating based on response is recommended.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/pt-141.png",
      "dosing": "1.75 mg SC PRN (Vyleesi auto-injector, max 8x/month FDA protocol HSDD)",
      "halfLife": "~2.7 h plasma",
      "halfLifeActive": "~16 h (MC3R/MC4R downstream sexual arousal pathway)",
      "bioavailability": "~100% (SC)",
      "onsetTime": "30–60 min",
      "routeNote": "FDA-approved Rx route (Vyleesi auto-injector). HSDD indication for premenopausal women, max 8x/month.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 1.75, "medium": 1.75, "high": 1.75 },
        "unit": "mg SC/dose PRN",
        "note": "Vyleesi auto-injector standard dose: 1.75 mg SC 45 min before desired sexual activity. Max 8x/month FDA protocol."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 2 ml bacteriostatic water (research-chemical recon)",
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
      "image": "/peptides/pt-141.png",
      "dosing": "10–20 mg/day intranasal (Palatin original research route, often requires higher doses)",
      "halfLife": "~5–10 min plasma",
      "halfLifeActive": "~16 h (MC3R/MC4R)",
      "bioavailability": "~20–30% (IN)",
      "onsetTime": "15–30 min",
      "routeNote": "Palatin's original research route (pre-FDA-Vyleesi development). 4–20 mg/day research doses, currently not an official form.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 4, "medium": 10, "high": 20 },
        "unit": "mg IN/day",
        "note": "Research-chemical recon: 10 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. 4–20 mg/day (off-label research dosing)."
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
