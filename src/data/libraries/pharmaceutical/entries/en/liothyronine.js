// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.601Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "liothyronine",
  "name": "Liothyronine (T3)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Synthetic T3 triiodothyronine (Cytomel). Specific indications (myxedema coma, T4-conversion impairment, MDD augmentation). NOT routine choice.",
  "description": "Liothyronine is the synthetic form of active T3 hormone (Cytomel, FDA 1956). NOT routine in hypothyroidism — levothyroxine (T4) provides physiologic T3 via endogenous deiodinase conversion. Specific indications: (1) MYXEDEMA COMA emergency treatment (fast-onset T3 IV), (2) subjective symptomatic hypothyroidism on levothyroxine with normal TSH (suspected T4-T3 conversion impairment, ETA 2012 PMID 24782999 debate), (3) MDD augmentation (Cooper-Kazaz 2007 PMID 17888912 treatment-resistant MDD), (4) DTC suppression post-thyroidectomy with fast onset. Short half-life (1 day vs T4 7 days), so 2-3x/day dosing required, harder to achieve stable levels.",
  "mechanism": "Direct T3 replacement, NOT requiring T4 → T3 peripheral deiodinase conversion. Immediately activates thyroid receptor.",
  "legalStatus": "EU/HU: prescription only (Cytomel, Thybon). USA: FDA Rx (Cytomel).",
  "bioavailability": "95% (oral, within 4 hours — FDA Cytomel label)",
  "onsetTime": "2-4 h (oral), minutes (IV)",
  "halfLife": "~1 day (much shorter than T4)",
  "atcCode": "H03AA02",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Myxedema coma (emergency)",
    "Hypothyroidism specific cases (T4 + T3 combined, off-label)",
    "MDD augmentation (off-label, treatment-resistant)",
    "DTC TSH suppression bridge (fast onset)"
  ],
  "contraindications": [
    "Acute MI, untreated adrenal insufficiency, thyrotoxicosis"
  ],
  "commonSideEffects": [
    "Over-replacement symptoms: tachycardia, tremor, sweating, anxiety, heat intolerance, weight loss",
    "Atrial fibrillation risk (elderly, chronic over-replacement)"
  ],
  "cyp450": [
    "Not CYP-metabolized (deiodination + conjugation)"
  ],
  "crossMolInteractions": [
    "Warfarin: effect may potentiate, INR monitor",
    "Cholestyramine, iron, calcium: 4-hour spacing required"
  ],
  "benefits": [
    "Fast onset (emergency in myxedema coma)",
    "MDD augmentation evidence (off-label)"
  ],
  "studies": [
    {
      "title": "2014 ETA Guidelines on the use of L-T4 + L-T3",
      "authors": "Wiersinga WM, Duntas L, Fadeyev V et al.",
      "journal": "Eur Thyroid J. 2012;1(2):55-71.",
      "pmid": "24782999"
    },
    {
      "title": "Liothyronine in major depressive disorder augmentation",
      "authors": "Cooper-Kazaz R, Apter JT, Cohen R et al.",
      "journal": "Arch Gen Psychiatry. 2007;64(6):679-88.",
      "pmid": "17548750"
    }
  ],
  "related": [
    "levothyroxin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 25,
      "high": 75
    },
    "unit": "µg/nap",
    "note": "Low (5 µg/day split): MDD augmentation start, elderly or CV-risk. Moderate (25-50 µg/day): T4+T3 combination hypothyroidism. High (75 µg/day): short-term DTC TSH suppression. NEVER replace T4 routinely."
  }
}
