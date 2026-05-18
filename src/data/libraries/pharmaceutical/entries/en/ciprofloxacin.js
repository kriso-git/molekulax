// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.602Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "ciprofloxacin",
  "name": "Ciprofloxacin",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Fluoroquinolone antibiotic (Bayer Cipro). UTI, GI + complex Gram-negative infections. FDA boxed warning: tendon rupture + peripheral neuropathy.",
  "description": "Ciprofloxacin is the fluoroquinolone class prototype (Bayer Cipro, FDA 1987). Bactericidal via DNA gyrase and topoisomerase IV inhibition. Strong Gram-negative (E. coli, Pseudomonas, Klebsiella), moderate Gram-positive activity. FDA 2016/2018 BOXED WARNING is significant: tendon rupture, peripheral neuropathy, mental side effects (confusion, delirium), aortic aneurysm. Due to antibiotic stewardship, NOT first-line for mild UTI — typical indications: complicated UTI, prostatitis, non-severe acute sinusitis, GI infections (Salmonella, Shigella). FDA + EMA 2019 reassessment strictly limits fluoroquinolone use.",
  "mechanism": "Selective DNA gyrase (topoisomerase II) and topoisomerase IV inhibition → DNA replication and transcription block → bactericidal.",
  "legalStatus": "EU/HU: prescription only (Ciprobay, Ciprinol, generics). USA: FDA Rx (Cipro).",
  "bioavailability": "~70% (oral tablet, food-independent — FDA Cipro label)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~4 h (twice-daily dosing)",
  "atcCode": "J01MA02",
  "prescriptionStatus": "Prescription only (Rx), stewardship protocol",
  "indications": [
    "Complicated UTI, pyelonephritis, prostatitis",
    "GI infections (Salmonella, Shigella, traveler's diarrhea)",
    "Bone and soft-tissue infections (Pseudomonas)",
    "Anthrax post-exposure (CDC protocol)"
  ],
  "contraindications": [
    "Fluoroquinolone hypersensitivity",
    "Children/adolescent (bone growth risk, except specific indications)",
    "Myasthenia gravis (relative contraindication)"
  ],
  "commonSideEffects": [
    "GI: nausea, diarrhea, abdominal discomfort",
    "Headache, dizziness, insomnia",
    "Severe: TENDON RUPTURE (Achilles, FDA boxed, especially 60+ + steroid), PERIPHERAL NEUROPATHY (irreversible), MENTAL EFFECTS (confusion, psychosis), AORTIC ANEURYSM, C. diff colitis, photosensitivity"
  ],
  "cyp450": [
    "CYP1A2 INHIBITOR (significant)",
    "Caffeine, theophylline, tizanidine interactions"
  ],
  "crossMolInteractions": [
    "Tizanidine: ABSOLUTE contraindication (CYP1A2 block extreme hypotension + sedation)",
    "Theophylline, caffeine: plasma may rise, toxicity",
    "Warfarin: INR rise",
    "Antacid (Al, Mg, Ca), iron: 2-hour spacing required (chelate formation)"
  ],
  "benefits": [
    "Strong Pseudomonas activity (complex UTI, bone infection)",
    "Oral bioavailability ~70% (IV-equivalent)",
    "Anthrax post-exposure CDC standard"
  ],
  "studies": [
    {
      "title": "Fluoroquinolones and the risk of aortic aneurysm or aortic dissection",
      "authors": "Pasternak B, Inghammar M, Svanström H.",
      "journal": "BMJ. 2018;360:k678.",
      "pmid": "29519881"
    },
    {
      "title": "FDA boxed warnings for fluoroquinolones: safety review",
      "authors": "Tanne JH.",
      "journal": "BMJ. 2018;363:k4934.",
      "pmid": "30459112"
    },
    {
      "title": "Ciprofloxacin in complicated urinary tract infections",
      "authors": "Wagenlehner FM, Naber KG.",
      "journal": "Int J Antimicrob Agents. 2004;24 Suppl 1:S1-3.",
      "pmid": "15364298"
    }
  ],
  "related": [
    "amoxicillin",
    "azithromycin",
    "doxycycline"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 250,
      "medium": 500,
      "high": 750
    },
    "unit": "mg 2x/nap",
    "note": "Mild UTI: 250 mg BID 3 days. Complex UTI/pyelonephritis: 500 mg BID 7-14 days. Bone infection/severe: 750 mg BID 4-6 weeks. Hydration (crystalluria), avoid tanning beds (photosensitivity). Tendon warning signs (ankle/Achilles pain) IMMEDIATE STOP."
  }
}
