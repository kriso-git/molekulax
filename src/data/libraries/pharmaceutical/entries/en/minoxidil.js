// Phase C — multi-variant entry (oral + topical). See
// docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources: FDA Loniten + Rogaine Drug Labels, Sinclair 2017/2018 (LDOM PMID
// 28349541), Pirmez 2020 (PMID 32684687), Olsen 2002 (PMID 12196747),
// Suchonwanit 2019 (PMID 31496654), Goren 2014 SULT1A1 enzyme assay.

export default {
  "id": "minoxidil",
  "name": "Minoxidil",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "K-channel activator, topical or oral (Rogaine, Loniten + LDOM). Androgenetic alopecia treatment since 1988 — two administration routes with very different systemic exposure profiles.",
  "description": "Minoxidil was originally developed as an oral antihypertensive (Loniten, 1979). Hypertrichosis observed as a 'side effect' led to topical formulations for alopecia (Upjohn Rogaine 2% 1988, 5% 1996). The two routes have fundamentally different pharmacokinetic profiles: topical systemic absorption is <2%, so blood-pressure impact is minimal; oral LDOM (0.25–5 mg/day) provides systemic exposure, more effective than topical (Sinclair 2017 PMID 28349541), but requires cardiovascular monitoring.",
  "mechanism": "ATP-sensitive K-channel opening → vasodilation + hair-follicle perfusion. Secondary: sulfotransferase (SULT1A1)-activated metabolite (minoxidil sulfate), prostaglandin-E2 elevation. SULT1A1 enzyme-activity variance produces ~40–50% non-responder rate at population level (Goren 2014).",
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteride: COMPLEMENTARY mechanism, gold-standard combination (Big-3 protocol)",
    "Antihypertensive agents: additive hypotension with oral route"
  ],
  "benefits": [
    "OTC topical form — low barrier to entry",
    "Oral LDOM more effective than topical (Sinclair 2017)",
    "Complementary to Finasteride (Big-3 protocol: Minoxidil + Finasteride + Ketoconazole)"
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
    },
    {
      "title": "Low-dose oral minoxidil for androgenetic alopecia: systematic review",
      "authors": "Pirmez R, Salas-Callo CI.",
      "journal": "Int J Trichology. 2020;12(4):189-191.",
      "pmid": "32684687"
    },
    {
      "title": "A double-blind, randomized clinical trial of 5% minoxidil vs 2% in men",
      "authors": "Olsen EA, Dunlap FE, Funicella T, et al.",
      "journal": "J Am Acad Dermatol. 2002;47(3):377-385.",
      "pmid": "12196747"
    }
  ],
  "related": [
    "finasteride"
  ],
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Oral",
      "image": "/pharmaceutical/blister-white-round.png",
      "legalStatus": "Prescription only (Loniten antihypertensive + off-label LDOM for alopecia).",
      "bioavailability": "~95% (rapid GI absorption; Cmax 1 hour). Pharmacokinetics well-documented in the Loniten SmPC.",
      "onsetTime": "3–6 months (visible hair regrowth on LDOM)",
      "halfLife": "~4.2 hours (plasma)",
      "atcCode": "C02DC01",
      "prescriptionStatus": "Prescription only (Rx), dermatologist or GP can prescribe off-label for alopecia",
      "indications": [
        "Off-label androgenetic alopecia (LDOM 0.25–5 mg/day)",
        "Resistant hypertension (Loniten oral, rare indication)"
      ],
      "contraindications": [
        "Acute myocardial infarction or active ischemia",
        "Pheochromocytoma",
        "Active pericardial effusion"
      ],
      "commonSideEffects": [
        "Edema (ankle, localized; more common above 2.5 mg)",
        "Reflex tachycardia",
        "Hypertrichosis (face, shoulders, generalized — due to systemic exposure)",
        "Postural hypotension",
        "Initial shedding (telogen effluvium) around 1–2 months"
      ],
      "doseCalc": {
        "type": "fixedDose",
        "fixedDose": {
          "low": 0.625,
          "medium": 1.25,
          "high": 5
        },
        "unit": "mg/day (LDOM, single dose)",
        "note": "Off-label LDOM: start at 0.625–1.25 mg/day, titrate gradually to 2.5–5 mg. Single daily dose in the morning. Effect 3–6 months. Monitor blood pressure + heart rate during the first 4 weeks. For hypertension indication 5–40 mg/day under strict medical supervision."
      }
    },
    {
      "routeId": "topical",
      "routeLabel": "Topical",
      "image": "/pharmaceutical/minoxidil-topical.png",
      "legalStatus": "OTC EU/USA/HU (2% and 5% solution + 5% foam available without prescription).",
      "bioavailability": "<2% (systemic absorption from the scalp; Goren et al. 2014 SULT1A1 enzyme-activity non-responder ~40–50% of the population).",
      "onsetTime": "12–16 weeks (early effect), 24+ weeks (measurable density growth)",
      "halfLife": "~22 hours (scalp retention; systemic minimal)",
      "atcCode": "D11AX01",
      "prescriptionStatus": "OTC (available without prescription)",
      "indications": [
        "Androgenetic alopecia (male pattern, primary indication — Rogaine 5%)",
        "Female androgenetic alopecia (2% Rogaine or 5% foam — less irritating)"
      ],
      "contraindications": [
        "Active scalp dermatitis or infection",
        "Contact allergy to propylene glycol (formulation-dependent — the foam is PG-free)"
      ],
      "commonSideEffects": [
        "Scalp irritation, itching, flaking",
        "Contact dermatitis (common, propylene glycol-driven)",
        "Local hypertrichosis in the contact zone (forehead, face)",
        "Paradoxical shed (telogen effluvium at 2–4 weeks, more common than with oral)"
      ],
      "doseCalc": {
        "type": "fixedDose",
        "fixedDose": {
          "low": 2,
          "medium": 5,
          "high": 5
        },
        "unit": "% solution 2× daily 1 ml",
        "note": "Standard: 5% solution or foam, 1 ml applied 2× daily (morning + evening) to dry scalp. For women, the 2% is less irritating, or 5% foam without propylene glycol. Effect 3–6 months. After discontinuation, regrowth recedes over 3–4 months."
      }
    }
  ],
  "defaultVariant": "oral"
}
