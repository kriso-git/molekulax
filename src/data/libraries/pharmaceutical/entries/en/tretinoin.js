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
      "title": "An Updated Review of Topical Tretinoin in Dermatology: From Acne and Photoaging to Skin Cancer.",
      "authors": "Balado-Simó P, Morgado-Carrasco D, Gómez-Armayones S",
      "journal": "J Clin Med",
      "pmid": "41302994"
    },
    {
      "title": "Management of Acne Vulgaris: A Review.",
      "authors": "Eichenfield DZ, Sprague J, Eichenfield LF",
      "journal": "JAMA",
      "pmid": "34812859"
    },
    {
      "title": "Efficacy and Safety of Generic Fluocinolone Acetonide, Hydroquinone, and Tretinoin Cream Compared With TRI-LUMA for the Treatment of Melasma.",
      "authors": "Hu H, Zhou P, Yao H",
      "journal": "J Cosmet Dermatol",
      "pmid": "40296512"
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
  },
  "anecdote": "Anecdotal reports describe Tretinoin as one of the most potent topical treatments for facial acne and overall skin quality. Initial irritation — redness, breakouts, peeling — typically occurs in the first month and resolves with continued use. Best effects are delayed: collagen-related improvements and texture changes appear after several months of consistent application. Community accounts note that Tretinoin may enhance penetration of adjunct skincare topicals, though this is largely anecdotal. It has a narrower therapeutic window than cosmetic retinoids — most users find a stable concentration without needing escalation. Caution: photosensitivity is significant; daily SPF is mandatory. Pregnancy contraindication applies."
}
