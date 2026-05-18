// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.599Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "amlodipine",
  "name": "Amlodipine",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Dihydropyridine calcium channel blocker (Pfizer Norvasc). Hypertension + stable angina. ASCOT-BPLA: superior outcome with ACEi combination.",
  "description": "Amlodipine is a long-acting dihydropyridine CCB (Pfizer Norvasc, FDA 1987). Selectively inhibits vascular smooth muscle L-type Ca channels, producing arterial vasodilation (minimal myocardial effect vs verapamil). ASCOT-BPLA trial (Dahlöf 2005 Lancet PMID 16154016) showed amlodipine + perindopril combination superior to atenolol + bendroflumethiazide for MACE reduction.",
  "mechanism": "Selective L-type Ca channel inhibition in vascular smooth muscle → vasodilation. Minimal myocardial effect.",
  "legalStatus": "EU/HU: prescription only (Norvasc, Amlodipine, generics). USA: FDA Rx.",
  "bioavailability": "64-90% (oral, therapeutic dose — FDA Norvasc label)",
  "onsetTime": "1-2 weeks (steady BP)",
  "halfLife": "30-50 h (once-daily, very long)",
  "atcCode": "C08CA01",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Hypertension, stable angina",
    "Vasospastic angina (Prinzmetal)"
  ],
  "contraindications": [
    "Severe hypotension, cardiogenic shock, aortic stenosis (relative)"
  ],
  "commonSideEffects": [
    "Peripheral edema (ankle, common, dose-dependent — 10-30%)",
    "Headache, facial flushing, palpitations",
    "Gingival hyperplasia (chronic, rare)"
  ],
  "cyp450": [
    "CYP3A4 substrate (extensive)",
    "Long half-life buffers minor interactions"
  ],
  "crossMolInteractions": [
    "Simvastatin: 20 mg/day simvastatin limit when combined",
    "Strong CYP3A4 inhibitor (clarithromycin, itraconazole): plasma amlodipine may rise",
    "Grapefruit juice: mild AUC rise"
  ],
  "benefits": [
    "Long half-life → forgiving missed dose",
    "ASCOT-BPLA: superior MACE reduction with ACEi combination",
    "Combinable with ACEi, ARB, statin (Caduet = amlodipine + atorvastatin)"
  ],
  "studies": [
    {
      "title": "Prevention of cardiovascular events with amlodipine + perindopril vs atenolol + bendroflumethiazide (ASCOT-BPLA)",
      "authors": "Dahlöf B, Sever PS, Poulter NR et al.",
      "journal": "Lancet. 2005;366(9489):895-906.",
      "pmid": "16154016"
    },
    {
      "title": "Amlodipine in coronary artery disease (CAMELOT)",
      "authors": "Nissen SE, Tuzcu EM, Libby P et al.",
      "journal": "JAMA. 2004;292(18):2217-25.",
      "pmid": "15536108"
    }
  ],
  "related": [
    "ramipril",
    "bisoprolol"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2.5,
      "medium": 5,
      "high": 10
    },
    "unit": "mg/nap",
    "note": "Low (2.5 mg): elderly or low body weight. Moderate (5 mg): standard. High (10 mg): resistant hypertension. Morning, food-independent. On peripheral edema reduce dose or add ACEi (mitigates)."
  }
}
