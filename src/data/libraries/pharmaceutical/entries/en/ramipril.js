// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.598Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "ramipril",
  "name": "Ramipril",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "ACE inhibitor (Sanofi Tritace/Altace). Hypertension + HFrEF + secondary MI prevention. HOPE trial evidence since 1999.",
  "description": "Ramipril is a prodrug ACE inhibitor (active metabolite ramiprilat) developed by Sanofi-Aventis (Tritace EU, Altace USA, FDA 1991). Selective inhibition of angiotensin-converting enzyme reduces angiotensin II formation, causing vasodilation and aldosterone suppression. HOPE trial (Yusuf 2000 NEJM PMID 10639539) showed ramipril significantly reduces MACE in high-CV-risk patients independent of BP lowering (pleiotropic endothelial function improvement).",
  "mechanism": "Selective ACE enzyme inhibition → angiotensin II reduction → vasodilation + aldosterone suppression + bradykinin accumulation (cough mechanism).",
  "legalStatus": "EU/HU: prescription only (Tritace, Amprilan, Piramil, generics). USA: FDA Rx (Altace).",
  "onsetTime": "1-2 h (acute BP), 3-4 weeks (steady-state)",
  "halfLife": "13-17 h (active ramiprilat, once-daily)",
  "atcCode": "C09AA05",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Hypertension, HFrEF",
    "Secondary MI and stroke prevention (HOPE evidence)",
    "Diabetic nephropathy"
  ],
  "contraindications": [
    "Pregnancy (FDA category D-X, fetal renal damage)",
    "Bilateral renal artery stenosis",
    "Angioedema history (especially hereditary)"
  ],
  "commonSideEffects": [
    "Dry, irritating cough (5-20%, bradykinin mechanism — switchable to ARB)",
    "Hyperkalemia (especially in renal impairment or with K-sparing diuretics)",
    "Orthostatic hypotension (first dose), dizziness",
    "Severe, rare: angioedema (~0.1-0.7%, emergency), acute kidney injury in bilateral renal stenosis"
  ],
  "cyp450": [
    "Hydrolyzed by hepatic carboxylesterase (not CYP-dependent)",
    "Active ramiprilat eliminated renally"
  ],
  "crossMolInteractions": [
    "K-sparing diuretic (spironolactone): increased hyperkalemia risk",
    "NSAID: renal function decline, reduced BP-lowering effect",
    "ARB (losartan), DRI (aliskiren): dual RAS blockade — avoid",
    "Lithium: lithium levels may rise, monitor"
  ],
  "benefits": [
    "MACE reduction in high-CV-risk patients (HOPE, 22%)",
    "HFrEF mortality reduction",
    "Diabetic nephropathy progression reduction"
  ],
  "studies": [
    {
      "title": "Effects of ramipril on cardiovascular and microvascular outcomes (HOPE)",
      "authors": "Yusuf S, Sleight P, Pogue J et al.",
      "journal": "N Engl J Med. 2000;342(3):145-53.",
      "pmid": "10639539"
    },
    {
      "title": "Ramipril versus placebo in patients with left ventricular dysfunction post-MI (AIRE)",
      "authors": "AIRE Study Investigators.",
      "journal": "Lancet. 1993;342(8875):821-8.",
      "pmid": "8104270"
    }
  ],
  "related": [
    "bisoprolol",
    "amlodipine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-2 (start)",
        "dose": "2.5"
      },
      {
        "phase": "Week 3+ (target)",
        "dose": "5"
      },
      {
        "phase": "Max dose",
        "dose": "10"
      }
    ],
    "unit": "mg/nap",
    "note": "Take in morning. First-dose orthostasis warning. Creatinine and K+ check at 2-4 weeks. On cough, switch to ARB (losartan, telmisartan)."
  }
}
