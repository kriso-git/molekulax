// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.603Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "doxycycline",
  "name": "Doxycycline",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Tetracycline antibiotic (Vibramycin). Lyme, malaria prevention, acne, chlamydia, atypical pneumonia. 100 mg standard.",
  "description": "Doxycycline is a long-acting tetracycline (Pfizer Vibramycin, FDA 1967). Inhibits bacterial 30S ribosomal subunit (aminoacyl-tRNA binding block). Spectrum: atypicals (Mycoplasma, Chlamydia, Rickettsia, Borrelia, Treponema), some Gram-positive (susceptible Staphylococcus), H. pylori (second-line). Key indications: early-stage Lyme disease, atypical pneumonia, chlamydia STD, malaria prevention (travel), severe acne (low-dose chronic). Side effect profile generally well-tolerated, photosensitivity and GI most common.",
  "mechanism": "30S ribosomal subunit block → aminoacyl-tRNA cannot bind → protein synthesis block. Bacteriostatic.",
  "legalStatus": "EU/HU: prescription only (Vibramycin, Doxakne, generics). USA: FDA Rx.",
  "bioavailability": "~95-100% (oral, \"virtually completely absorbed\" — FDA Vibramycin label)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "18-22 h (once or twice daily)",
  "atcCode": "J01AA02",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Early-stage Lyme disease (21-day protocol)",
    "Atypical pneumonia (Mycoplasma, Chlamydia)",
    "Chlamydia STD, gonorrhea (combination)",
    "Malaria prevention (travel to endemic area)",
    "Acne vulgaris (chronic low-dose)",
    "Rosacea, perianal dermatitis"
  ],
  "contraindications": [
    "Tetracycline hypersensitivity",
    "Pregnancy (tooth and bone development damage), child < 8 yr"
  ],
  "commonSideEffects": [
    "Photosensitivity (common, sunscreen MANDATORY)",
    "GI: nausea, vomiting, esophageal irritation (take standing with full water)",
    "Oversimplified candidiasis (vaginal, oral)",
    "Severe, rare: pseudotumor cerebri (intracranial hypertension), C. diff colitis, hepatotoxicity"
  ],
  "cyp450": [
    "No significant CYP metabolism",
    "Minimal drug interactions"
  ],
  "crossMolInteractions": [
    "Antacid (Al, Mg, Ca), iron, multivitamin: 2-3 hour spacing (chelate formation)",
    "Warfarin: INR rise",
    "Oral contraceptive: no clinically significant interaction (CDC)"
  ],
  "benefits": [
    "Early Lyme disease gold standard",
    "Malaria prevention for travelers",
    "Cheap, generic, long-term availability",
    "Acne chronic low-dose therapy"
  ],
  "studies": [
    {
      "title": "Treatment of Lyme disease: 2020 IDSA guideline",
      "authors": "Lantos PM, Rumbaugh J, Bockenstedt LK et al.",
      "journal": "Clin Infect Dis. 2021;72(1):e1-e48.",
      "pmid": "33417672"
    },
    {
      "title": "Doxycycline for malaria prophylaxis",
      "authors": "Tan KR, Magill AJ, Parise ME et al.",
      "journal": "Am J Trop Med Hyg. 2011;84(4):517-31.",
      "pmid": "21460003"
    },
    {
      "title": "Doxycycline in atypical community-acquired pneumonia",
      "authors": "Bartlett JG, Mundy LM.",
      "journal": "N Engl J Med. 1995;333(24):1618-24.",
      "pmid": "7477199"
    }
  ],
  "related": [
    "amoxicillin",
    "ciprofloxacin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 50,
      "medium": 100,
      "high": 200
    },
    "unit": "mg/nap",
    "note": "Low (50 mg/day): chronic acne. Standard (100 mg 1-2x/day): most acute infections. High (200 mg/day): severe infection or early Lyme. Take STANDING with full water (esophageal irritation). Sunscreen MANDATORY. Antacid/iron 2-3 hours apart."
  }
}
