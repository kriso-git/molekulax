// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.958Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "epo-info",
  "name": "EPO",
  "image": "/performance/water-vial.png",
  "accentColor": "#ef4444",
  "tagColor": "rgba(239,68,68,0.18)",
  "shortDesc": "Recombinant human erythropoietin (rhEPO). Stimulates red blood cell production, WADA-banned in endurance sports.",
  "description": "Recombinant human erythropoietin (rhEPO, Epoetin alfa/beta, Procrit, Eprex, Aranesp) is the biologically identical form of natural kidney-produced EPO. FDA-approved for chronic kidney disease, chemo-induced anemia, and prematurity anemia. In endurance sports (cycling, distance athletics) off-label use raises hematocrit, with anecdotal +8-10% VO2max (Lundby 2011) but blinded placebo-controlled RCTs showing a realistic +1-3% performance gain (Heuberger 2013). WADA-banned; erythropoietic stimulation carries serious thrombotic + cardiovascular risk (blood viscosity rise). **HIF-α stabilization analogy**: endogenous renal EPO is activated by hypoxia-induced HIF-α (Semenza Nobel 2019); rhEPO mimics this signal as an exogenous receptor agonist. **Historical context**: the Tour de France 1990-2000 \"EPO era\" (Festina scandal 1998), Lance Armstrong USPS protocol documented (USADA 2012). **Detection breakthrough**: Lasne & de Ceaurriz 2000 Nature (PMID 10864312) IEF testing. **Hematocrit ramp dynamics**: 7-10 days post-SC reticulocyte peak, 21-28 day hematocrit peak — hence the spread of micro-dose protocols (20-30 IU/kg every other day) for sub-detection-window boosting.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "EPO receptor agonist, erythropoiesis-stimulating"
    },
    {
      "label": "Half-life",
      "value": "5-13 h (subcutaneous)"
    },
    {
      "label": "Onset",
      "value": "7-14 days (reticulocyte rise)"
    },
    {
      "label": "Legal status",
      "value": "USA: FDA Rx (Procrit). EU: Rx. WADA: banned."
    }
  ],
  "mechanism": "EPO receptor agonist (type-1 cytokine receptor, like GH receptor) on red blood cell precursors (BFU-E erythroid burst-forming unit, CFU-E colony-forming unit) in bone marrow. Receptor dimerization → **JAK2 transphosphorylation → STAT5 nuclear translocation → activation of anti-apoptotic and proliferation genes** in erythroid cells. Hypoxia-like signal: differentiation and proliferation in erythroid cells, reticulocyte release in 7-10 days.",
  "legalStatus": "USA: FDA Rx (Procrit, Aranesp). HU/PL/EU: Rx for renal anemia. WADA: banned (S2 hormone and metabolic modulator).",
  "onsetTime": "7-14 days",
  "halfLife": "5-13 h (subcutaneous)",
  "interactionsWith": [
    "iron supplements",
    "ACE inhibitors"
  ],
  "aromatization": "Not applicable — 165-amino-acid glycoprotein (erythropoietin), NOT a steroid; no aromatase substrate",
  "hepatotoxicity": "Low — no direct hepatotoxicity; hematocrit elevation with thrombosis risk (CV events, stroke) dominates (FDA Epogen black-box warning)",
  "wadaStatus": "banned",
  "detectionWindow": "Direct rhEPO test: 3-4 days (IEF testing in WADA-accredited labs). Biomarker (ABP, Athlete Biological Passport) sensitive over 4-6 week window.",
  "benefits": [
    "VO2max gain: anecdotal 8-10% (Lundby 2011), but blinded placebo-controlled RCTs show only 1-3% realistic performance gain (Heuberger 2013) — athlete subjective perception substantially overestimates the measurable effect",
    "Hematocrit rise (45 → 50+%)",
    "Hemoglobin rise and O2 carrying capacity"
  ],
  "studies": [
    {
      "title": "Erythropoietin treatment elevates haemoglobin concentration",
      "authors": "Lundby C, Olsen NV.",
      "journal": "J Physiol. 2011;589(Pt 6):1265-1271.",
      "pmid": "21224229"
    },
    {
      "title": "Erythropoietin doping in cycling: history and detection",
      "authors": "Lasne F, de Ceaurriz J.",
      "journal": "Nature. 2000;405(6787):635.",
      "pmid": "10864312"
    },
    {
      "title": "Blood doping at the Olympics",
      "authors": "Eichner ER.",
      "journal": "Curr Sports Med Rep. 2007;6(4):237-238.",
      "pmid": "17617999"
    },
    {
      "title": "Effects of erythropoietin on cycling performance of well-trained cyclists: a double-blind, randomised, placebo-controlled trial",
      "authors": "Heuberger JAAC, Rotmans JI, Gal P et al.",
      "journal": "Lancet Haematol. 2017;4(8):e374-e386.",
      "pmid": "23252630"
    }
  ],
  "related": [
    "epo",
    "hgh-info",
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 20,
      "medium": 50,
      "high": 100
    },
    "unit": "IU/hét",
    "note": "Clinical renal disease dose: 50-100 IU/kg/week, 2-3 split SC injections. Sport doping micro-dose 20-30 IU/kg also used to evade detection. Hematocrit >55% = thrombotic crisis risk, STOP immediately. Iron supplementation mandatory."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "1 week before",
      "markers": "CBC (hematocrit, hemoglobin, RBC), reticulocyte count, iron (ferritin, transferrin saturation, TIBC), B12 + folate, endogenous EPO.",
      "purpose": "Baseline. Iron deficiency must be corrected before cycle start."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 2-3",
      "markers": "Hematocrit (target <55%), hemoglobin, BP (home), iron level, blood viscosity.",
      "purpose": "Hematocrit >55% = thrombotic crisis risk, STOP immediately. BP >160/100 = stop."
    },
    "postCycle": null,
    "cruise": null
  }
}
