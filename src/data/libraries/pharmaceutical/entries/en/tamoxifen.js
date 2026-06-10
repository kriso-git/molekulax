// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.605Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "tamoxifen",
  "name": "Tamoxifen",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Selective estrogen receptor modulator (SERM). Adjuvant and metastatic treatment of hormone receptor-positive breast cancer (Nolvadex).",
  "description": "Tamoxifen is the first clinically major SERM, developed by AstraZeneca (Nolvadex, FDA 1977). In ER+ breast cancer adjuvant treatment with 5-10 year protocol, reduces relapse risk by 50% (EBCTCG 2011 Lancet PMID 21684593). In premenopausal women, aromatase inhibitors (anastrozole, letrozole) ineffective, so tamoxifen is first-line SERM. Side effect profile: thromboembolism (DVT, PE 2-3x rise), endometrial cancer risk (~2x), menopausal-like symptoms (hot flashes). ER+ DCIS prevention and high-risk primary prevention FDA-approved (NSABP-P1 trial).",
  "mechanism": "Tissue-specific estrogen receptor modulation: ANTAGONIST in breast tissue, PARTIAL AGONIST in bone + endometrium + liver. Active metabolites (4-hydroxytamoxifen, endoxifen) CYP2D6-dependent — poor metabolizers have reduced efficacy.",
  "legalStatus": "EU/HU: prescription only (Nolvadex, Tamoxen, generics). USA: FDA Rx.",
  "bioavailability": "~100% (oral, \"well-absorbed\", Tmax ~5 h — FDA Soltamox/Nolvadex label)",
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
  "related": [],
  "doseCalc": {
    "type": "warning",
    "warning": "Tamoxifen is the pillar of HORMONAL ONCO-THERAPY in ER+ breast cancer. SPECIALIST (ONCOLOGIST) SUPERVISION MANDATORY. NO STANDALONE DOSE CALCULATOR on this page because: (1) dose (20 mg/day) and duration (5-10 years) are oncology protocol decisions, patient-specific; (2) VTE (DVT/PE) and ENDOMETRIAL CANCER risk requires real monitoring; (3) CYP2D6 genetic status significantly affects efficacy — in some patients genotype testing indicated; (4) STRONG CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion) CONTRAINDICATED — compromises tamoxifen efficacy. Talk to your oncologist. Emergency symptoms (unilateral leg swelling, dyspnea-chest pain, vaginal bleeding): IMMEDIATE care."
  },
  "anecdote": "Nolvadex (Tamoxifen) and Raloxifene are anecdotally the two most reliable compounds for gyno prevention, because tamoxifen directly blocks estrogen at the receptor level selectively in breast tissue — a highly targeted mechanism. Unlike Arimidex, it is not an aromatase inhibitor, so the benefits are receptor-targeted rather than system-wide. It is commonly used in PCT protocols because it stimulates LH/FSH more directly, which can be useful for HPTA recovery. Reported side effects include mild mood swings, rare vision disturbances, and long-term blood-clot risk — though most clotting case reports come from postmenopausal women using it for breast cancer prevention, so applicability to AAS users is less clear. Overall, community accounts regard Nolvadex as a solid tool for blocking estrogen in breast tissue and a strong gyno-prevention option. Administered orally, with dosing typically structured in multi-week cycles, especially during PCT."
}
