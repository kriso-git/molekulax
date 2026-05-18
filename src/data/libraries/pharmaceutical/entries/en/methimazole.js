// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.600Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "methimazole",
  "name": "Methimazole",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Antithyroid drug (thiamazole, Merck), first-line for Graves disease and hyperthyroidism. Inhibits thyroid peroxidase enzyme.",
  "description": "Methimazole (Tapazole USA, thiamazole EU) is first-line for hyperthyroidism. Selectively inhibits thyroid peroxidase (TPO) reducing T3/T4 synthesis. Cooper 2005 (NEJM review PMID 15703424) showed 18-24 month treatment in Graves disease produces ~50% remission rate. Side effect profile: mild common (rash, nausea), severe rare (agranulocytosis 0.2-0.5%, hepatotoxicity). Propylthiouracil (PTU) is older alternative but due to hepatotoxicity only first-line in 1st trimester pregnancy (methimazole aplasia small but exists).",
  "mechanism": "Selective thyroid peroxidase (TPO) inhibition → tyrosine iodination block → T3/T4 synthesis reduction. Does NOT inhibit preformed hormone release (delayed effect 2-4 weeks).",
  "legalStatus": "EU/HU: prescription only (Thyrozol, Metizol). USA: FDA Rx (Tapazole).",
  "bioavailability": "~93% (oral, \"readily absorbed\" — FDA Tapazole label)",
  "onsetTime": "2-4 weeks (T3/T4 reduction, since preformed stores deplete)",
  "halfLife": "4-6 h (but pharmacodynamic effect longer due to thyroid concentration)",
  "atcCode": "H03BB02",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Graves disease (autoimmune hyperthyroidism) first-line",
    "Toxic multinodular goiter, toxic adenoma",
    "Pre-thyroidectomy or pre-radioiodine preparation (rendering euthyroid)"
  ],
  "contraindications": [
    "Prior severe hematologic or hepatic adverse event",
    "First trimester pregnancy (PTU preferred, methimazole aplasia risk)"
  ],
  "commonSideEffects": [
    "Skin rash (3-5%, dose-dependent)",
    "GI: nausea, vomiting, taste alteration",
    "Severe, rare: agranulocytosis (0.2-0.5%, on fever/sore throat IMMEDIATE CBC), hepatotoxicity (rarer than PTU), vasculitis (ANCA+)"
  ],
  "cyp450": [
    "Hepatic metabolism (multiple pathways)",
    "CYP-dependence minor"
  ],
  "crossMolInteractions": [
    "Warfarin: effect reduction (loss of hyperthyroid-driven accelerated metabolism)",
    "Beta-blocker (propranolol, bisoprolol): symptomatic control of hyperthyroidism until methimazole takes effect"
  ],
  "benefits": [
    "~50% remission in Graves after 18-24 months",
    "Lower hepatotoxicity than PTU",
    "Once or twice daily dosing"
  ],
  "studies": [
    {
      "title": "Hyperthyroidism: a review (Cooper 2005)",
      "authors": "Cooper DS.",
      "journal": "N Engl J Med. 2005;352(9):905-17.",
      "pmid": "15745981"
    },
    {
      "title": "Methimazole vs propylthiouracil pregnancy outcomes",
      "authors": "Andersen SL, Olsen J, Wu CS et al.",
      "journal": "J Clin Endocrinol Metab. 2013;98(11):4373-81.",
      "pmid": "24151287"
    }
  ],
  "related": [
    "levothyroxin",
    "liothyronine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Mild hyperthyroidism (start)",
        "dose": "5"
      },
      {
        "phase": "Moderate case",
        "dose": "15"
      },
      {
        "phase": "Severe case (max)",
        "dose": "30"
      }
    ],
    "unit": "mg/nap",
    "note": "Start 10-30 mg/day by severity, 1-2x/day. After 4-6 weeks check TSH + free T4, then maintenance 5-10 mg/day. On fever or sore throat IMMEDIATE CBC + stop (agranulocytosis)."
  }
}
