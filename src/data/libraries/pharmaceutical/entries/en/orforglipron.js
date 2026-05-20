// Orforglipron (LY3502970) — Eli Lilly oral small-molecule GLP-1 receptor
// agonist. NOT a peptide — small molecule, hence belongs in the pharmaceutical
// library (NOT peptides). Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) trials
// ongoing in 2026, FDA approval expected 2026-2027.
// Sources: Wharton 2023 NEJM Phase 2 obesity PMID 37356087, Frías 2023 NEJM
// Phase 2 T2DM PMID 37356866.

export default {
  "id": "orforglipron",
  "name": "Orforglipron (LY3502970)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Eli Lilly once-daily, SMALL-MOLECULE ORAL GLP-1 receptor agonist (LY3502970). Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) ongoing. FDA approval expected 2026-2027. NOT a peptide — oral alternative to the classic injectable GLP-1 RAs (Semaglutide, Liraglutide).",
  "description": "Orforglipron (LY3502970) is Eli Lilly's once-daily, small-molecule oral GLP-1 receptor agonist. Structurally it is NOT a peptide — a small organic molecule that activates the GLP-1 receptor in a biased-agonist fashion, exclusively along the Gs pathway, bypassing β-arrestin. This explains the clinical profile: efficacy on body weight + HbA1c, smaller GI side-effect incidence than injectable peptide GLP-1 RAs (Semaglutide, Liraglutide). The Phase 2 ATTAIN-1 trial (Wharton 2023 NEJM PMID 37356087) showed ~14.7% body-weight reduction in the high-dose arm over 36 weeks in obesity patients — comparable to injectable Semaglutide 2.4 mg/week STEP-1 (~14.9% over 68 weeks). Phase 2 T2DM (Frías 2023 NEJM PMID 37356866) HbA1c reduction ~2.0% over 26 weeks. In 2026 the Phase 3 ATTAIN-1 (obesity) + ATTAIN-2 (obesity + T2DM) + ACHIEVE-1 (T2DM) trials are ongoing; NDA filing expected mid-2026. Competitors: Pfizer Danuglipron (Phase 2-3, hepatic stress concern), Roche CT-388 and Structure Therapeutics GSBR-1290 (oral peptide-mimetics).",
  "mechanism": "Small-molecule GLP-1 receptor biased agonist — selectively activates the Gs pathway (cAMP elevation → insulin secretion + slowed gastric emptying + satiety), minimally the β-arrestin pathway (explains smaller GI side-effect incidence). Oral bioavailability low (~6-9%), but the long half-life (~29-49 h) supports once-daily dosing. NOT a peptide — not susceptible to gastric proteolysis, food interaction minimal.",
  "legalStatus": "Clinical-trial phase (Phase 3, 2026). NDA filing expected mid-2026. FDA approval expected 2026-2027. EU/HU/PL: NOT registered.",
  "bioavailability": "~6-9% (oral, low — but sufficient for once-daily dosing given the long t1/2; Frías 2023 PMID 37356866 PK appendix)",
  "onsetTime": "Tmax 3-5 h (peak plasma), clinical effect within 2-4 weeks at steady-state",
  "halfLife": "~29-49 hours (once-daily dosing reaches steady-state in 7-10 days)",
  "atcCode": "Not yet assigned (Phase 3)",
  "prescriptionStatus": "Clinical-trial phase (not yet Rx)",
  "indications": [
    "Obesity (Phase 3 ATTAIN-1/2 — expected indication 2026-2027)",
    "Type-2 diabetes (Phase 3 ACHIEVE — expected indication)",
    "MASH (off-label research direction)"
  ],
  "contraindications": [
    "History of medullary thyroid carcinoma (MEN-2 syndrome) — class effect for all GLP-1 RAs",
    "History of pancreatitis (relative)",
    "Severe gastroparesis"
  ],
  "commonSideEffects": [
    "Gastrointestinal: nausea (~30-40% during titration, lower incidence than injectable GLP-1 RAs)",
    "Diarrhea, vomiting (~15-20%)",
    "Headache",
    "Decreased appetite (mechanism-related, not a side effect per se)",
    "Rare: pancreatitis, cholecystitis"
  ],
  "cyp450": [
    "CYP3A4 primary metabolism — strong CYP3A4 inhibitors (ketoconazole, ritonavir) may increase exposure",
    "P-gp substrate — minimal clinical relevance"
  ],
  "crossMolInteractions": [
    "Strong CYP3A4 inhibitors (ketoconazole, ritonavir, clarithromycin): exposure rise, consider dose reduction",
    "Insulin, sulfonylureas: hypoglycemia risk (additive effect), dose reduction required",
    "Other antidiabetics (Metformin, SGLT2-i): synergistic, combinable",
    "Oral contraceptives: no significant interaction (low CYP3A4 affinity)"
  ],
  "benefits": [
    "ORAL — not a subcutaneous injection, better compliance",
    "Phase 2 ATTAIN-1: ~14.7% body-weight reduction over 36 weeks (~ on par with Semaglutide 2.4 mg/week)",
    "Phase 2 T2DM: ~2.0% HbA1c reduction over 26 weeks",
    "Smaller GI side-effect incidence than injectable peptide GLP-1 RAs (biased agonist)",
    "Once-daily dosing (long t1/2)",
    "Expected cheaper manufacturing than peptides (small-molecule synthesis)"
  ],
  "studies": [
    {"title": "Oral orforglipron for obesity: phase 2 RCT", "authors": "Wharton S, Blevins T, Connery L, et al.", "journal": "N Engl J Med. 2023;389(10):877-888.", "pmid": "37356087"},
    {"title": "Efficacy and safety of orforglipron, an oral small-molecule GLP-1 receptor agonist, in adults with type 2 diabetes: a phase 2, dose-finding, randomised, controlled trial", "authors": "Frías JP, Hsia S, Eyde S, et al.", "journal": "Lancet. 2023;402(10400):472-483.", "pmid": "37356866"},
    {"title": "GLP-1 receptor agonists: a review of head-to-head clinical studies", "authors": "Trujillo JM, Nuffer W, Smith BA.", "journal": "Ther Adv Endocrinol Metab. 2021;12:2042018821997320.", "pmid": "33854744"}
  ],
  "related": [
    "metformin",
    "empagliflozin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {"low": 3, "medium": 12, "high": 36},
    "unit": "mg/day (oral, once daily)",
    "note": "Clinical protocol: start 3 mg, 4-week titration. Steps: 3 → 6 → 12 → 24 → 36 mg/day. Max ~36 mg/day. NEVER skip titration due to GI side effects. Independent of meals, once daily at any time."
  }
}
