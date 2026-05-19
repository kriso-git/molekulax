// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.606Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "tretinoin",
  "name": "Tretinoin",
  "image": "/pharmaceutical/cream-tube-white.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Topical retinoid all-trans-retinoic acid. Acne, photoaging, hyperpigmentation treatment. Dermatological gold standard.",
  "description": "Tretinoin (all-trans-retinoic acid) is the first topical retinoid (Ortho Retin-A, FDA 1971), dermatological standard in acneology + anti-aging. Retinoid receptor (RAR) activation normalizes follicular keratinization (acne mechanism), accelerates collagen synthesis (anti-aging), and reduces melanin pigmentation (hyperpigmentation). Common strengths: 0.025%, 0.05%, 0.1% cream or gel. Vs Isotretinoin it is topical — non-systemic, pregnancy risk SIGNIFICANTLY LOWER but avoid in childbearing-age women. Long-term anti-aging evidence: Kligman 1986 PMID 3548421 the best-documented topical treatment for photoaging.",
  "mechanism": "RAR-α/β/γ receptor activation → gene transcription modulation → follicular keratinization normalization + collagen synthesis enhancement + melanin reduction.",
  "legalStatus": "EU/HU: prescription only (Atrederm, Locacid, Retin-A). USA: FDA Rx (Retin-A, Renova, Tretin-X).",
  "bioavailability": "~20% (oral capsule, variable — FDA Vesanoid label; for APL treatment, NOT topical form)",
  "onsetTime": "8-12 weeks (acne improvement), 4-6 months (anti-aging visible)",
  "halfLife": "Topical, minimal systemic absorption",
  "atcCode": "D10AD01",
  "prescriptionStatus": "Prescription only (Rx), dermatologist-supervised",
  "indications": [
    "Acne vulgaris (mild-moderate)",
    "Photoaging (fine wrinkles, skin texture, pigmentation)",
    "Hyperpigmentation (melasma, post-inflammatory)",
    "Off-label: keratosis pilaris, stretch marks"
  ],
  "contraindications": [
    "Pregnancy (relative, low systemic absorption but avoid — vitamin A-like embryopathy risk)",
    "Active eczema, severe psoriasis on application area"
  ],
  "commonSideEffects": [
    "Skin dryness, peeling, irritation (common initially — \"retinization\")",
    "Photosensitivity (SUNSCREEN MANDATORY SPF 30+)",
    "Initial acne flare (purging, 2-4 weeks)",
    "Severe, rare: severe irritation (contact dermatitis), retinoid photodermatitis"
  ],
  "cyp450": [
    "Minimal systemic absorption (topical)",
    "No major systemic interactions"
  ],
  "crossMolInteractions": [
    "Benzoyl peroxide: apply at separate times (BPO oxidizes tretinoin)",
    "AHA/BHA acids (glycolic, salicylic): irritation additivity, combine cautiously",
    "Other retinoids (adapalene): avoid concurrent"
  ],
  "benefits": [
    "Proven acne and anti-aging effect (Kligman 1986)",
    "Hyperpigmentation (melasma, PIH) reduction",
    "Dermatological gold standard for 50+ years"
  ],
  "studies": [
    {
      "title": "Topical tretinoin improves photodamaged facial skin",
      "authors": "Kligman AM, Grove GL, Hirose R et al.",
      "journal": "J Am Acad Dermatol. 1986;15(4 Pt 2):836-59.",
      "pmid": "3548421"
    },
    {
      "title": "Topical retinoid for acne: meta-analysis",
      "authors": "Yentzer BA, Hick J, Reese EL et al.",
      "journal": "Cutis. 2010;86(2):94-9.",
      "pmid": "20919605"
    },
    {
      "title": "Tretinoin for hyperpigmentation (melasma): randomized trial",
      "authors": "Griffiths CE, Goldfarb MT, Finkel LJ et al.",
      "journal": "Br J Dermatol. 1994;131(1):106-13.",
      "pmid": "8043420"
    }
  ],
  "related": [
    "isotretinoin",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 0.025,
      "medium": 0.05,
      "high": 0.1
    },
    "unit": "% topikális",
    "note": "Low (0.025%): sensitive skin, anti-aging start, dryness-prone. Moderate (0.05%): standard acne and anti-aging. High (0.1%): resistant acne, thicker skin. Apply at EVENING in pea-sized amount on clean, dry skin. SUNSCREEN SPF 30+ MANDATORY. Slow introduction (2x/wk → 4x/wk → daily) to mitigate irritation. Effect 8-12 weeks."
  }
}
