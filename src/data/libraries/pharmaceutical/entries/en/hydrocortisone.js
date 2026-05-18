// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.601Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "hydrocortisone",
  "name": "Hydrocortisone",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Natural glucocorticoid (Cortef), lifelong hormone replacement for Addison disease and adrenal insufficiency. Standard 15-25 mg/day.",
  "description": "Hydrocortisone is the synthetic equivalent of endogenous cortisol, developed by Pfizer (Cortef, FDA 1955). In Addison disease and secondary adrenal insufficiency it is lifelong hormone replacement. Mimic physiological circadian pattern (morning peak, evening low) via split-dosing (10 mg morning + 5 mg afternoon). STRESS DOSE: illness, surgery, physical trauma require 2-3x increase MANDATORY because Addison patients lack endogenous cortisol surge (acute adrenal crisis can be fatal). ATA 2016 (Bornstein 2016 JCEM PMID 26760044) guideline gives standardized stress-dose recommendations.",
  "mechanism": "Glucocorticoid receptor (GR) agonist. Anti-inflammation, immunomodulation, gluconeogenesis stimulation, protein catabolism, osmotic balance (mild mineralocorticoid too).",
  "legalStatus": "EU/HU: prescription only (hydrocortisone, Cortef, Plenadren — modified-release brand). USA: FDA Rx.",
  "onsetTime": "30-60 min (oral), seconds-minutes (IV in adrenal crisis)",
  "halfLife": "~1.5 h (plasma), biological 8-12 h",
  "atcCode": "H02AB09",
  "prescriptionStatus": "Prescription only (Rx), endocrinologist-supervised",
  "indications": [
    "Primary adrenal insufficiency (Addison disease, lifelong)",
    "Secondary adrenal insufficiency (pituitary failure)",
    "Congenital adrenal hyperplasia (CAH)",
    "Acute adrenal crisis (emergency, IV)"
  ],
  "contraindications": [
    "Active systemic fungal infection (relative)",
    "Hypersensitivity"
  ],
  "commonSideEffects": [
    "On chronic supra-physiological doses: Cushing features (central obesity, hypertension, hyperglycemia, osteoporosis, muscle atrophy)",
    "Increased infection susceptibility (immune suppression)",
    "Psychiatric: anxiety, insomnia, mania at high dose"
  ],
  "cyp450": [
    "CYP3A4 substrate",
    "Sensitive to CYP3A4 inducers/inhibitors"
  ],
  "crossMolInteractions": [
    "CYP3A4 inducer (phenytoin, rifampin, carbamazepine): dose escalation needed",
    "Strong CYP3A4 inhibitor: dose reduction",
    "Insulin/oral antidiabetic: hyperglycemia enhancement, monitor"
  ],
  "benefits": [
    "Lifelong hormone replacement in Addison — saves life",
    "Modified-release brand (Plenadren) approximates circadian pattern",
    "Stress dose prevents acute crisis"
  ],
  "studies": [
    {
      "title": "Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society Clinical Practice Guideline",
      "authors": "Bornstein SR, Allolio B, Arlt W et al.",
      "journal": "J Clin Endocrinol Metab. 2016;101(2):364-89.",
      "pmid": "26760044"
    },
    {
      "title": "Modified-release hydrocortisone (Plenadren) in adrenal insufficiency",
      "authors": "Johannsson G, Nilsson AG, Bergthorsdottir R et al.",
      "journal": "J Clin Endocrinol Metab. 2012;97(2):473-81.",
      "pmid": "22112814"
    }
  ],
  "related": [
    "levothyroxin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 15,
      "medium": 20,
      "high": 25
    },
    "unit": "mg/nap (split: 2/3 reggel + 1/3 délután)",
    "note": "STANDARD replacement: 15-25 mg/day split. STRESS DOSE: mild illness 2x, severe 3x. SURGERY: 50-100 mg IV intra-op + continue. ACUTE CRISIS: 100 mg IV bolus + 200 mg/24 h infusion. Never stop abruptly — slow taper over 6-12 months after chronic suppression."
  }
}
