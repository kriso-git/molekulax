// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.599Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "bisoprolol",
  "name": "Bisoprolol",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Cardio-selective β1 blocker (Merck Concor). Standard for hypertension + HFrEF + post-MI. CIBIS-II mortality reduction.",
  "description": "Bisoprolol is a highly selective β1-adrenergic receptor antagonist (Merck Concor, FDA 1992). β1/β2 selectivity ~75:1 significantly reduces airway and peripheral β2-mediated side effects (bronchospasm, vasoconstriction) vs non-selective β-blockers (propranolol). CIBIS-II trial (CIBIS-II 1999 Lancet PMID 9988345) showed 34% relative mortality reduction in HFrEF. Standard in hypertension, HFrEF, and post-MI portfolio.",
  "mechanism": "β1-selective competitive antagonist. Negative chronotropic (HR drop), negative inotropic, negative dromotropic (AV conduction slowing). Renin reduction (juxtaglomerular β1 block).",
  "legalStatus": "EU/HU: prescription only (Concor, Bisocard, generics). USA: FDA Rx (Zebeta).",
  "bioavailability": "~80% (oral, 10 mg dose — FDA Zebeta label)",
  "onsetTime": "1-2 h (acute HR), 1-2 weeks (steady BP)",
  "halfLife": "10-12 h (once-daily)",
  "atcCode": "C07AB07",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Hypertension, stable angina",
    "HFrEF (CIBIS-II evidence)",
    "Post-MI secondary prevention"
  ],
  "contraindications": [
    "Severe bradycardia (HR < 50), 2nd-3rd degree AV block, sinus bradycardia",
    "Severe hypotension, cardiogenic shock",
    "Severe asthma, COPD (β2-bronchospasm relative risk)",
    "Acute decompensated HFrEF (only initiate when stable)"
  ],
  "commonSideEffects": [
    "Bradycardia, orthostatic hypotension, fatigue",
    "Cold extremities, Raynaud-like symptoms",
    "Vivid dreams, depression risk (moderate)",
    "Severe, rare: bronchospasm at higher dose with selectivity loss, hypoglycemia symptom masking in diabetics"
  ],
  "cyp450": [
    "CYP3A4, CYP2D6 substrate (mixed)",
    "No significant CYP inhibition"
  ],
  "crossMolInteractions": [
    "Non-DHP CCB (verapamil, diltiazem): bradycardia + AV block additivity",
    "Classic β-blocker-symptomatic drugs (digoxin, amiodarone): additive effect",
    "Insulin/oral antidiabetic: hypoglycemia symptom masking"
  ],
  "benefits": [
    "HFrEF mortality 34% relative reduction (CIBIS-II)",
    "High β1 selectivity → few lung/peripheral side effects",
    "Once-daily (good compliance)"
  ],
  "studies": [
    {
      "title": "The Cardiac Insufficiency Bisoprolol Study II (CIBIS-II)",
      "authors": "CIBIS-II Investigators.",
      "journal": "Lancet. 1999;353(9146):9-13.",
      "pmid": "9988345"
    },
    {
      "title": "Effect of carvedilol versus bisoprolol on heart failure outcomes",
      "authors": "Frommeyer G, Eckardt L.",
      "journal": "Eur Heart J. 2017;38(33):2624-2627.",
      "pmid": "28645164"
    }
  ],
  "related": [
    "ramipril",
    "amlodipine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-2 (HFrEF start)",
        "dose": "1.25"
      },
      {
        "phase": "Hypertension standard",
        "dose": "5"
      },
      {
        "phase": "Max dose",
        "dose": "10"
      }
    ],
    "unit": "mg/nap",
    "note": "Morning. HFrEF titrate 2 wks per dose for hemodynamic tolerance. Home HR + BP monitor. DO NOT stop abruptly (rebound tachycardia, ischemia)."
  }
}
