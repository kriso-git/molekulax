// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.597Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "lamotrigine",
  "name": "Lamotrigine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Anticonvulsant + bipolar maintenance (GSK Lamictal). Voltage-gated Na channel blocker. MANDATORY slow titration due to SJS/TEN risk.",
  "description": "Lamotrigine is a voltage-gated Na channel blocker antiepileptic (GSK Lamictal, FDA 1994 epilepsy, FDA 2003 bipolar maintenance). Main strength in bipolar disorder is depressive-phase prevention (less effective in acute mania). SEVERE skin reaction risk (Stevens-Johnson syndrome, toxic epidermal necrolysis) is 0.3% in pediatrics and 0.1% adult — but significantly rises with rapid escalation or valproate combination. The 5-week slow titration (25 → 50 → 100 → 200 mg) is MANDATORY, and ANY rash = IMMEDIATE STOP.",
  "mechanism": "Use-dependent voltage-gated Na channel block (membrane stabilization), glutamate release reduction. Secondary: selective presynaptic serotonin release elevation (mood-stabilizing rationale).",
  "legalStatus": "EU/HU: prescription only (Lamictal, Lamitrin, Epitrigine, generics). USA: FDA Rx.",
  "onsetTime": "5+ weeks (slow titration required)",
  "halfLife": "25-33 h (alone), 70 h (with valproate), 13 h (with enzyme inducers)",
  "atcCode": "N03AX09",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Epilepsy (focal and generalized, monotherapy or adjunctive)",
    "Bipolar I disorder, mood-episode PREVENTION (FDA 2003)"
  ],
  "contraindications": [
    "Prior SJS/TEN/DRESS skin reaction history",
    "Severe hepatic impairment"
  ],
  "commonSideEffects": [
    "Skin rash (10% benign rash, 0.1-0.3% SJS/TEN, mainly during titration)",
    "Headache, dizziness, ataxia, diplopia",
    "Severe, rare: SJS/TEN (EMERGENCY), DRESS, aseptic meningitis, hemophagocytic lymphohistiocytosis"
  ],
  "cyp450": [
    "Glucuronidation primary (UGT1A4)",
    "Strongly affected by inducers (carbamazepine, phenytoin) and inhibitors (valproate)"
  ],
  "crossMolInteractions": [
    "Valproate: INHIBITS glucuronidation, lamotrigine half-life DOUBLES, SJS/TEN risk rises — MANDATORY 50% dose reduction of lamotrigine with valproate",
    "Carbamazepine, phenytoin, phenobarbital: induction, lamotrigine plasma may drop, dose escalation needed",
    "Oral contraceptive: lamotrigine plasma may decrease, variation within contraceptive cycle"
  ],
  "benefits": [
    "Most effective mood stabilizer for bipolar DEPRESSION-PHASE PREVENTION",
    "No weight gain or sedation (vs olanzapine, quetiapine)",
    "Not significantly teratogenic (vs valproate strong teratogenicity)",
    "Long half-life → once or twice daily (good compliance)"
  ],
  "studies": [
    {
      "title": "Lamotrigine for prevention of new manic and depressive episodes in BD (Calabrese 2003)",
      "authors": "Calabrese JR, Bowden CL, Sachs G et al.",
      "journal": "J Clin Psychiatry. 2003;64(9):1013-24.",
      "pmid": "14628976"
    },
    {
      "title": "Lamotrigine in the treatment of bipolar depression",
      "authors": "Geddes JR, Calabrese JR, Goodwin GM.",
      "journal": "Br J Psychiatry. 2009;194(1):4-9.",
      "pmid": "19118318"
    },
    {
      "title": "Stevens-Johnson syndrome and toxic epidermal necrolysis with lamotrigine",
      "authors": "Mockenhaupt M, Messenheimer J, Tennis P, Schlingmann J.",
      "journal": "Neurology. 2005;64(7):1134-8.",
      "pmid": "15824334"
    }
  ],
  "related": [
    "aripiprazole",
    "sertralin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-2 (start)",
        "dose": "25"
      },
      {
        "phase": "Weeks 3-4",
        "dose": "50"
      },
      {
        "phase": "Week 5",
        "dose": "100"
      },
      {
        "phase": "Week 6+ (target)",
        "dose": "200"
      }
    ],
    "unit": "mg/nap",
    "note": "MANDATORY slow titration to mitigate SJS/TEN risk. With valproate, halve the above doses. ANY rash = IMMEDIATE STOP and dermatologist/emergency consultation. DO NOT resume at previous dose if > 5 days off — restart from 25 mg."
  }
}
