// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.605Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "tamoxifen",
  "name": "Tamoxifen",
  "image": null,
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Selective estrogen receptor modulator (SERM). Adjuvant and metastatic treatment of hormone receptor-positive breast cancer (Nolvadex).",
  "description": "Tamoxifen is the first clinically major SERM, developed by AstraZeneca (Nolvadex, FDA 1977). In ER+ breast cancer adjuvant treatment with 5-10 year protocol, reduces relapse risk by 50% (EBCTCG 2011 Lancet PMID 21684593). In premenopausal women, aromatase inhibitors (anastrozole, letrozole) ineffective, so tamoxifen is first-line SERM. Side effect profile: thromboembolism (DVT, PE 2-3x rise), endometrial cancer risk (~2x), menopausal-like symptoms (hot flashes). ER+ DCIS prevention and high-risk primary prevention FDA-approved (NSABP-P1 trial).",
  "mechanism": "Tissue-specific estrogen receptor modulation: ANTAGONIST in breast tissue, PARTIAL AGONIST in bone + endometrium + liver. Active metabolites (4-hydroxytamoxifen, endoxifen) CYP2D6-dependent — poor metabolizers have reduced efficacy.",
  "legalStatus": "EU/HU: prescription only (Nolvadex, Tamoxen, generics). USA: FDA Rx.",
  "onsetTime": "Klinikai válasz hónapok-évek (adjuváns)",
  "halfLife": "~7 days (parent); 14 days (4-hydroxytamoxifen)",
  "atcCode": "L02BA01",
  "prescriptionStatus": "Prescription only (Rx), oncologist-supervised",
  "indications": [
    "ER+ breast cancer adjuvant treatment (premenopausal: 5-10 years)",
    "Metastatic ER+ breast cancer",
    "DCIS post-surgical prevention",
    "High-risk women primary prevention (NSABP-P1)"
  ],
  "contraindications": [
    "Pregnancy (category D, fetal damage)",
    "Active thromboembolism (DVT, PE) or within-1-year history",
    "Untreated endometrial hyperplasia"
  ],
  "commonSideEffects": [
    "Hot flashes, sweating, mood lability (menopausal-like symptoms 40-60%)",
    "Vaginal discharge, irritation",
    "GI: nausea, abdominal discomfort",
    "Severe: VENOUS THROMBOEMBOLISM (DVT/PE 2-3x), ENDOMETRIAL CANCER (~2x), cataract, hepatic steatosis, stroke"
  ],
  "cyp450": [
    "CYP2D6 substrate (CRITICAL for endoxifen formation)",
    "CYP3A4 substrate",
    "Poor CYP2D6 metabolizers have reduced efficacy"
  ],
  "crossMolInteractions": [
    "STRONG CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion): reduced endoxifen formation, Tamoxifen efficacy WORSENS — avoid, alternative AD (venlafaxine, citalopram)",
    "Warfarin: INR rise (interaction), monitor",
    "Hormone replacement (HRT) estrogen: avoid (mechanistic conflict)"
  ],
  "benefits": [
    "ER+ breast cancer relapse reduction 50%",
    "Bone-protective (in premenopausal women)",
    "Primary prevention in high-risk women (NSABP-P1)"
  ],
  "studies": [
    {
      "title": "Relevance of breast cancer hormone receptors and outcomes of 5 years of tamoxifen (EBCTCG)",
      "authors": "Early Breast Cancer Trialists' Collaborative Group.",
      "journal": "Lancet. 2011;378(9793):771-84.",
      "pmid": "21802721"
    },
    {
      "title": "Tamoxifen for prevention of breast cancer (NSABP-P1)",
      "authors": "Fisher B, Costantino JP, Wickerham DL et al.",
      "journal": "J Natl Cancer Inst. 1998;90(18):1371-88.",
      "pmid": "9747868"
    },
    {
      "title": "CYP2D6 genotype and tamoxifen efficacy",
      "authors": "Goetz MP, Sangkuhl K, Guchelaar HJ et al.",
      "journal": "Clin Pharmacol Ther. 2018;103(5):770-777.",
      "pmid": "29385237"
    }
  ],
  "related": [
    "methotrexate"
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "Tamoxifen is the pillar of HORMONAL ONCO-THERAPY in ER+ breast cancer. SPECIALIST (ONCOLOGIST) SUPERVISION MANDATORY. NO STANDALONE DOSE CALCULATOR on this page because: (1) dose (20 mg/day) and duration (5-10 years) are oncology protocol decisions, patient-specific; (2) VTE (DVT/PE) and ENDOMETRIAL CANCER risk requires real monitoring; (3) CYP2D6 genetic status significantly affects efficacy — in some patients genotype testing indicated; (4) STRONG CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion) CONTRAINDICATED — compromises tamoxifen efficacy. Talk to your oncologist. Emergency symptoms (unilateral leg swelling, dyspnea-chest pain, vaginal bleeding): IMMEDIATE care."
  }
}
