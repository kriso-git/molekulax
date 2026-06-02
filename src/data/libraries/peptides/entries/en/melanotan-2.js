// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.070Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "melanotan-2",
  "name": "Melanotan-2",
  "image": "/peptides/melanotan-2.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.16)",
  "tagText": "#fbbf24",
  "defaultVialMg": 10,
  "defaultBacMl": 2,
  "defaultDoseMcg": 500,
  "shortDesc": "Synthetic α-MSH analog: pigmentation and libido modulation",
  "description": "Melanotan-2 (MT-II) is a synthetic cyclic heptapeptide α-melanocyte-stimulating hormone (α-MSH) analog, originally developed at the University of Arizona for skin cancer prevention research. It is a non-selective agonist of MC1R, MC3R, MC4R and MC5R melanocortin receptors.\n\nIts main action via MC1R activation enhances melanin synthesis (melanogenesis), producing a darker \"from within\" tan with minimal UV exposure. MC4R activation also drives libido side-effects, which led to the development of PT-141 (bremelanotide). Appetite suppression is also documented.\n\nAvailable in two forms: subcutaneous injection (community standard) and intranasal spray (experimental, lower bioavailability).",
  "keyInfo": [
    {
      "label": "Type",
      "value": "Cyclic heptapeptide (MC1-5R agonist)"
    },
    {
      "label": "Structure",
      "value": "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂"
    },
    {
      "label": "Molecular weight",
      "value": "~1024 Da"
    },
    {
      "label": "Target area",
      "value": "Skin pigmentation, libido"
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
  "dosageInfo": "Typical research protocol, loading phase: 250–500 mcg/day subcutaneous for ~10–20 days (depending on target skin type). Maintenance: 500–1000 mcg, 1–2× weekly. Bedtime dosing reduces nausea. The 10 mg vial diluted with 2 ml BAC water gives 5000 mcg/ml. UV exposure is still required to trigger tanning.",
  "studies": [
    {
      "tag": "Preclinical study",
      "tagColor": "rgba(245,158,11,0.16)",
      "tagText": "#fbbf24",
      "title": "Melanotan-II: Investigation of the inducer and facilitator effects on penile erection in anaesthetized rat",
      "authors": "Giuliano F, Bernabé J, Alexandre L, et al.",
      "journal": "Neuroscience",
      "year": "2006",
      "pmid": "16360286",
      "url": "https://pubmed.ncbi.nlm.nih.gov/16360286/",
      "finding": "MT-II produces dose-dependent pro-erectile effects via central melanocortin receptor activation."
    }
  ],
  "anecdote": "Users commonly notice effects from Melanotan-2 within the first few doses, especially tanning and libido changes. Nausea and flushing are frequent side effects but tan development is markedly faster than with Melanotan-1. The compound is more aggressive overall but considerably more potent for pigmentation, and is typically used in short cycles.\n\nMelanotan-2 is administered either intra-nasally or via subcutaneous injection, with dosing similar to Melanotan-1. UV exposure is required for it to work, so it is best administered pre-tan. Protocols sometimes use loading phases followed by 1-2x weekly maintenance dosing.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Subcutaneous injection",
      "image": "/peptides/Melanotan-2.png",
      "dosing": "0.5–1 mg SC every 1–3 days (community-standard loading + maintenance)",
      "halfLife": "~33 h plasma (longer than MT-1)",
      "halfLifeActive": "~days (MC1R/MC4R downstream melanogenesis + libido)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "30–60 min",
      "routeNote": "Community-standard route (off-label tanning + libido). Starts with loading dose, then maintenance phase.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.25, "medium": 0.5, "high": 1.0 },
        "unit": "mg SC/dose",
        "note": "Loading: 0.25 mg/day for 7-10 days, gradual ramp to 0.5-1 mg. Maintenance: 0.5-1 mg every 1-3 days."
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
      "dosing": "0.5–1 mg/day intranasal (less efficient than SC, requires higher doses)",
      "halfLife": "~5–10 min plasma",
      "halfLifeActive": "~days (MC1R/MC4R downstream)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "15–30 min",
      "routeNote": "Experimental route, lower bioavailability. Loading protocol not recommended via IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg IN/day",
        "note": "Research-chemical recon: 10 mg vial + 5 ml sterile water + transfer to nasal spray bottle. 0.5-2 mg/day (community off-label dosing)."
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
