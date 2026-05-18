// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.958Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "hgh-info",
  "name": "HGH",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Recombinant human growth hormone (rhGH, Somatropin). Exogenous GH replacement, banned by WADA as doping.",
  "description": "Recombinant human growth hormone (rhGH, Somatropin) is the biologically identical form of natural pituitary GH. FDA-approved for GH deficiency, Turner syndrome, idiopathic short stature, and AIDS cachexia (Genotropin, Humatrope, Norditropin, Saizen). In sport, off-label use for muscle mass + recovery + fat loss. WADA-banned (S2 category); short detection window (~24 h) makes biomarker testing essential. Long-term use leads to acromegaly, cardiac hypertrophy, and insulin resistance. **Key nuances**: (a) **IGF-1 is the primary effector** — GH alone is less anabolic; the hepatic IGF-1 paracrine/endocrine signal is the main mediator (70-80% of sport anabolism is IGF-1-routed); (b) **T4→reverse T3 conversion shift**: on HGH rT3 rises while active T3 drops → subclinical hypothyroidism risk; T4/T3 co-administration plus mid-cycle TSH/fT3/fT4/rT3 panel is MANDATORY; (c) **Carpal tunnel and peripheral edema**: extracellular fluid plus Na+ retention → nerve compression, mostly above 4-6 IU/day; (d) **Fasted-state SC administration**: before bed or at least 2-4 h after last meal, because insulin directly antagonizes GH — fasted state gives max GH pulse.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "GH receptor agonist, IGF-1 elevator"
    },
    {
      "label": "Half-life",
      "value": "~3 hours (subcutaneous)"
    },
    {
      "label": "Onset",
      "value": "4-8 weeks (IGF-1 peak)"
    },
    {
      "label": "Legal status",
      "value": "USA: FDA Rx. HU/EU: Rx. WADA: banned."
    }
  ],
  "mechanism": "GH receptor agonist (type-1 cytokine receptor): receptor dimerization → **JAK2 transphosphorylation → STAT5 nuclear translocation → hepatic IGF-1 gene expression**. Secondary direct effects: adipose lipolysis via HSL activation plus skeletal muscle anabolism (mTOR + IGF-1 paracrine). **Insulin-antagonistic glucose effect**: hepatic gluconeogenesis plus glycogenolysis rise → fasted glucose rise, chronic insulin resistance. Therefore HbA1c monitoring is mandatory.",
  "legalStatus": "USA: FDA Rx (GH deficiency, Turner, cachexia). HU/PL/EU: Rx for pituitary disease. WADA: banned (S2).",
  "onsetTime": "4-8 weeks (IGF-1 peak)",
  "halfLife": "~3 h (subcutaneous)",
  "interactionsWith": [
    "insulin",
    "thyroid hormones",
    "glucocorticoids"
  ],
  "wadaStatus": "banned",
  "detectionWindow": "~24 h direct rhGH test; biomarker test (IGF-1 + P-III-NP) more sensitive with 7-14 day window.",
  "benefits": [
    "Lean mass gain (anti-catabolic + IGF-1 mediated)",
    "Fat loss (HSL activation in adipose)",
    "Recovery + tissue regeneration",
    "Skin, hair, nail quality improvement",
    "Connective tissue and type-1 collagen density improvement (skin, fascia, tendon, joint cartilage) — in the anti-aging context the principal documented HGH effect at low 1-2 IU/day protocols"
  ],
  "studies": [
    {
      "title": "Growth hormone in sport: doping and health implications",
      "authors": "Sigalos JT, Pastuszak AW.",
      "journal": "World J Mens Health. 2017;35(2):109-115.",
      "pmid": "28868816"
    },
    {
      "title": "Effects of growth hormone on muscle and physical function",
      "authors": "Liu H, Bravata DM, Olkin I et al.",
      "journal": "Ann Intern Med. 2008;148(10):747-758.",
      "pmid": "18347257"
    },
    {
      "title": "Acromegaly: clinical features and management",
      "authors": "Melmed S.",
      "journal": "N Engl J Med. 2006;355(24):2558-2573.",
      "pmid": "17167139"
    },
    {
      "title": "Growth hormone, IGF-I and insulin and their abuse in sport",
      "authors": "Holt RIG, Sönksen PH.",
      "journal": "Br J Pharmacol. 2008;154(3):542-556.",
      "pmid": "18450787"
    }
  ],
  "related": [
    "mk-677",
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.025,
      "medium": 0.05,
      "high": 0.075
    },
    "unit": "IU/nap",
    "note": "Anti-aging 2 IU/day (around Low), sport 4-6 IU/day (Medium). Long-term use leads to acromegaly + cardiac hypertrophy. SC injection in the morning or 30 min pre-workout. IGF-1 target <800 ng/mL. HbA1c monitoring mandatory."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2 weeks before",
      "markers": "IGF-1 baseline, HbA1c, fasting glucose, insulin (HOMA-IR), TSH/fT4, lipid panel.",
      "purpose": "Baseline. Prediabetes or insulin resistance is contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 6-8",
      "markers": "IGF-1 (target <800 ng/mL), HbA1c, fasting glucose, TSH/fT4 (HGH lowers fT4).",
      "purpose": "IGF-1 >1000 ng/mL = acromegaly risk, dose reduction. HbA1c >6% = stop cycle."
    },
    "postCycle": null,
    "cruise": null
  }
}
