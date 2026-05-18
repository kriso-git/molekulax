// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.596Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "aripiprazole",
  "name": "Aripiprazole",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Atypical antipsychotic, D2/5-HT1A partial agonist (Otsuka/BMS Abilify). For schizophrenia + bipolar + MDD augmentation + Tourette + autism irritability.",
  "description": "Aripiprazole is a \"third-generation\" atypical antipsychotic (Otsuka/Bristol-Myers Squibb Abilify, FDA 2002). Mechanism: D2-DOPAMINE partial agonist (~30% intrinsic activity) + 5-HT1A partial agonist + 5-HT2A antagonist. Unique pharmacology: in dopamine-overactive areas (mesolimbic, positive symptoms) it inhibits, in dopamine-underactive areas (mesocortical, negative symptoms, anhedonia) it partially stimulates. Clinical result: lower metabolic side effects (vs olanzapine), less sedating, less prolactin elevation. FDA warning for impulse-control disorders (compulsive gambling, hypersexuality) — rare but notable due to partial D2 agonism.",
  "mechanism": "D2-DA partial agonist (~30% intrinsic) + 5-HT1A partial agonist + 5-HT2A antagonist. Functional dopamine stabilizer: inhibits hyperactive areas, stimulates hypoactive ones.",
  "legalStatus": "EU/HU: prescription only (Abilify, generics). USA: FDA Rx.",
  "bioavailability": "87% (oral tablet — FDA Abilify label, Section 12.3)",
  "onsetTime": "1-2 weeks (acute), 4-6 weeks (full response)",
  "halfLife": "~75 h (active metabolite dehydroaripiprazole 94 h)",
  "atcCode": "N05AX12",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Schizophrenia (adult + 13+ yr adolescent)",
    "Bipolar I disorder, acute mania + maintenance (adult + 10+ yr)",
    "MDD augmentation (common off-label, FDA-approved as Abilify)",
    "Tourette syndrome, autism-associated irritability (6+ yr)"
  ],
  "contraindications": [
    "Known aripiprazole hypersensitivity, severe CV disease",
    "In elderly with dementia psychosis (mortality elevation, FDA boxed warning)"
  ],
  "commonSideEffects": [
    "Akathisia (motor restlessness, 25%, often dose-effect)",
    "Nausea, headache, insomnia or sedation",
    "Severe, rare: impulse-control disorder (gambling, hypersexuality — FDA warning 2016), neuroleptic malignant syndrome, tardive dyskinesia (chronic)",
    "Metabolic profile BETTER than olanzapine/quetiapine but NOT entirely neutral (modest weight gain, glucose tolerance)"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP2D6 substrate (significant in poor metabolizers)",
    "Mild CYP inhibitor"
  ],
  "crossMolInteractions": [
    "Strong CYP3A4 inhibitors (ketoconazole, clarithromycin): dose reduction by 50%",
    "CYP3A4 inducer (carbamazepine, rifampin): dose escalation needed",
    "Strong CYP2D6 inhibitors (fluoxetine, paroxetine): dose reduction"
  ],
  "benefits": [
    "Lower metabolic side effects (vs olanzapine, quetiapine)",
    "Less sedation (allows daytime activity)",
    "Little prolactin elevation (vs risperidone)",
    "FDA-approved for MDD augmentation (treatment-resistant MDD)"
  ],
  "studies": [
    {
      "title": "Aripiprazole in patients with schizophrenia: a multicenter, randomized trial",
      "authors": "Kane JM, Carson WH, Saha AR et al.",
      "journal": "J Clin Psychiatry. 2002;63(9):763-71.",
      "pmid": "12363115"
    },
    {
      "title": "Aripiprazole augmentation for treatment-resistant depression",
      "authors": "Berman RM, Marcus RN, Swanink R et al.",
      "journal": "J Clin Psychiatry. 2007;68(6):843-53.",
      "pmid": "17592907"
    },
    {
      "title": "Impulse-control disorders associated with dopamine partial agonists",
      "authors": "Moore TJ, Glenmullen J, Mattison DR.",
      "journal": "JAMA Intern Med. 2014;174(12):1930-3.",
      "pmid": "25347404"
    }
  ],
  "related": [
    "lamotrigine",
    "sertralin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 15,
      "high": 30
    },
    "unit": "mg/nap",
    "note": "Low (5 mg): MDD augmentation start, elderly or sensitive patient. Moderate (10-15 mg): schizophrenia/bipolar mania standard. High (20-30 mg): resistant acute mania, max 30 mg/day. Food-independent."
  }
}
