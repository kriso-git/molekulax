// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.604Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "methotrexate",
  "name": "Methotrexate",
  "image": null,
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Dihydrofolate reductase (DHFR) inhibitor antimetabolite. Low-dose weekly: rheumatoid arthritis, psoriasis. High-dose: onco-chemotherapy.",
  "description": "Methotrexate (MTX) is an antifolate antimetabolite (FDA 1953). Inhibits dihydrofolate reductase (DHFR), blocking tetrahydrofolate formation and thus DNA synthesis and cell proliferation. Two very different indication realms: (1) LOW-DOSE weekly oral/SC 7.5-25 mg — rheumatoid arthritis (gold-standard DMARD), psoriasis, IBD, ANCA vasculitis; (2) HIGH-DOSE IV/intrathecal — leukemia, lymphoma, osteosarcoma, choriocarcinoma. The two contexts are pharmacologically very different: low-dose weekly MTX with folate supplementation (1-5 mg/day) is well tolerated, while high-dose onco-MTX requires MANDATORY Leucovorin rescue, level monitoring, and emergency standby. WHO Essential Medicines covers both.",
  "mechanism": "DHFR inhibition → tetrahydrofolate deficit → thymidylate synthesis block → DNA synthesis inhibition. Secondary: AICAR synthesis inhibition (adenosine accumulation, anti-inflammatory at low-dose MTX).",
  "legalStatus": "EU/HU: prescription only (Trexan, Metoject SC, Methotrexate Lederle, generics). USA: FDA Rx. Oncology high-dose hospital-administered.",
  "onsetTime": "6-12 weeks (RA clinical response)",
  "halfLife": "~3-10 h (highly variable)",
  "atcCode": "L01BA01 / L04AX03",
  "prescriptionStatus": "Prescription only (Rx), specialist-supervised (rheumatologist / oncologist)",
  "indications": [
    "Rheumatoid arthritis (RA, gold-standard DMARD)",
    "Psoriasis, psoriatic arthritis",
    "IBD (Crohn), ANCA vasculitis (low-dose)",
    "Acute lymphoblastic leukemia (ALL), lymphoma, osteosarcoma, choriocarcinoma (high-dose chemo)",
    "Ectopic pregnancy conservative treatment"
  ],
  "contraindications": [
    "Pregnancy and lactation (FDA category X, ABORTIFACIENT)",
    "Severe hepatic or renal impairment",
    "Active hematologic disorder (leukopenia, anemia, thrombocytopenia)",
    "Active systemic infection",
    "Alcohol abuse (additive hepatotoxicity)"
  ],
  "commonSideEffects": [
    "GI: nausea, stomatitis, diarrhea (common; folate supplementation mitigates)",
    "Hepatotoxicity (chronic, alcohol-additive)",
    "Myelosuppression (bone marrow: leukopenia, thrombocytopenia, anemia)",
    "Severe: pulmonary toxicity (pneumonitis), infection susceptibility, chronic hepatic fibrosis, acute kidney injury at high dose"
  ],
  "cyp450": [
    "Not CYP-metabolized (folate pathway antagonism)",
    "Renal excretion (90% unchanged)"
  ],
  "crossMolInteractions": [
    "NSAID (aspirin, ibuprofen): reduced renal clearance, MTX toxicity rises",
    "Trimethoprim/sulfamethoxazole (Bactrim): pancytopenia risk (folate-block additivity)",
    "Proton-pump inhibitor (PPI): reduced MTX renal clearance, FORBIDDEN with high-dose MTX",
    "Live virus vaccine: contraindicated during immunosuppression",
    "FOLATE (folic acid 5-10 mg/wk or folinic acid): MANDATORY for low-dose MTX toxicity mitigation"
  ],
  "benefits": [
    "RA gold-standard DMARD, effective and cheap",
    "Life-saving in oncology indications (childhood ALL, choriocarcinoma)",
    "Long-term data (70+ years)"
  ],
  "studies": [
    {
      "title": "EULAR recommendations for the management of rheumatoid arthritis",
      "authors": "Smolen JS, Landewé RBM, Bergstra SA et al.",
      "journal": "Ann Rheum Dis. 2023;82(1):3-18.",
      "pmid": "36357155"
    },
    {
      "title": "Methotrexate in cancer chemotherapy: clinical use and mechanism",
      "authors": "Tian H, Cronstein BN.",
      "journal": "Bull NYU Hosp Jt Dis. 2007;65(3):168-73.",
      "pmid": "17922666"
    },
    {
      "title": "Folate supplementation reduces methotrexate adverse effects",
      "authors": "Shea B, Swinden MV, Tanjong Ghogomu E et al.",
      "journal": "Cochrane Database Syst Rev. 2013;(5):CD000951.",
      "pmid": "23728635"
    }
  ],
  "related": [
    "tamoxifen",
    "hydrocortisone"
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "Methotrexate is an ONCO- AND AUTOIMMUNE-GRADE drug that CANNOT BE USED without SPECIALIST (rheumatologist or oncologist) SUPERVISION. NO STANDALONE DOSE CALCULATOR on this page because: (1) low-dose (weekly 7.5-25 mg) and high-dose (onco 100-12000 mg/m²) ranges differ 100-1000x — mixing them can be FATAL; (2) FOLIC ACID (5-10 mg/week) SUPPLEMENTATION MANDATORY on weekly MTX; (3) FDA category X (abortifacient) — ABSOLUTELY forbidden in pregnancy; (4) NSAID, Bactrim, PPI interactions significant. Talk to your rheumatologist or oncologist. Emergency symptoms (fever, stomatitis, dyspnea, hematuria, melena): IMMEDIATE care."
  }
}
