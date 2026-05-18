// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.599Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "apixaban",
  "name": "Apixaban",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Direct oral anticoagulant (DOAC, BMS/Pfizer Eliquis). Factor Xa inhibitor. ARISTOTLE trial showed superiority over warfarin in atrial fibrillation.",
  "description": "Apixaban is a selective, reversible Factor Xa inhibitor (BMS/Pfizer Eliquis, FDA 2012). Intervenes at coagulation cascade prothrombin activation level, reducing thrombin generation. ARISTOTLE trial (Granger 2011 NEJM PMID 21870978) showed apixaban superior to warfarin in AF: 21% stroke + systemic embolism, 31% major bleeding, and 11% all-cause mortality reduction. Among DOACs (rivaroxaban, dabigatran, edoxaban), apixaban has lowest GI bleeding risk.",
  "mechanism": "Reversible competitive Factor Xa inhibitor. Does not require antithrombin III as cofactor (vs LMWH).",
  "legalStatus": "EU/HU: prescription only (Eliquis). USA: FDA Rx.",
  "onsetTime": "3-4 h (peak), 2-4 days (steady-state)",
  "halfLife": "~12 h (twice-daily dosing)",
  "atcCode": "B01AF02",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Atrial fibrillation (AF) stroke + systemic embolism prevention",
    "Deep vein thrombosis (DVT) + pulmonary embolism (PE) treatment + prevention",
    "Hip/knee replacement post-op VTE prevention"
  ],
  "contraindications": [
    "Active clinically significant bleeding",
    "Mechanical heart valve (only warfarin approved)",
    "Severe liver disease (Child-Pugh C)"
  ],
  "commonSideEffects": [
    "Bleeding (most significant side effect, 2-4%/yr major)",
    "Nausea, headache",
    "Severe, rare: intracerebral hemorrhage (emergency, andexanet alfa reversal)"
  ],
  "cyp450": [
    "CYP3A4 substrate",
    "P-gp substrate"
  ],
  "crossMolInteractions": [
    "Strong dual CYP3A4 + P-gp inhibitor (ketoconazole, ritonavir): dose reduction or avoid",
    "Strong CYP3A4 inducer (rifampin, phenytoin): efficacy drops, avoid",
    "NSAID, aspirin, antithrombotic: additive bleeding risk"
  ],
  "benefits": [
    "Warfarin-superior in AF (ARISTOTLE)",
    "Lower GI bleeding than other DOACs",
    "No INR monitoring needed",
    "Andexanet alfa reversal agent available for bleeding"
  ],
  "studies": [
    {
      "title": "Apixaban versus warfarin in patients with atrial fibrillation (ARISTOTLE)",
      "authors": "Granger CB, Alexander JH, McMurray JJ et al.",
      "journal": "N Engl J Med. 2011;365(11):981-92.",
      "pmid": "21870978"
    },
    {
      "title": "Apixaban for treatment of acute venous thromboembolism (AMPLIFY)",
      "authors": "Agnelli G, Buller HR, Cohen A et al.",
      "journal": "N Engl J Med. 2013;369(9):799-808.",
      "pmid": "23808982"
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
    "unit": "mg 2x/nap",
    "note": "AF standard: 5 mg BID. Reduce to 2.5 mg BID if 2 of 3: age ≥ 80, weight ≤ 60 kg, creatinine ≥ 1.5 mg/dl. Acute DVT/PE: 10 mg BID for 7 days, then 5 mg BID. Food-independent. NOT one-to-one substitutable with other DOACs."
  }
}
