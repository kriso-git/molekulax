// Created 2026-05-20 for Phase-12 GLOW multi-peptide stack (Tier 3 community-protocol)
// Edit this file directly – no decompose script regeneration.

export default {
  "id": "glow",
  "name": "GLOW",
  "image": "/peptides/glow.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "tagText": "#a78bfa",
  "shortDesc": "Multi-peptide stack – GHK-Cu + BPC-157 + TB-500. Synergistic skin + tissue regeneration protocol (T3 community-tier).",
  "description": "GLOW is a community-protocol-level multi-peptide stack built from three components: **GHK-Cu** (copper tripeptide, cosmetic + epigenetic activation), **BPC-157** (gastric pentadecapeptide, systemic tissue healing) and **TB-500** (thymosin β4 fragment, cell migration + actin binding). Together the three peptides address two distinct regeneration axes: the **surface / cosmetic** axis (GHK-Cu collagen synthesis, melanin modulation, wound healing) and the **systemic / deep-tissue** axis (BPC-157 + TB-500 angiogenesis, myoblast migration, tendon + muscle repair).\n\n**Evidence tier**: stack-specific RCT evidence is essentially **non-existent** – the tier-3 cap reflects the absence of clinical stack-level trials. Individual components carry stronger T4-tier evidence in isolation (GHK-Cu via Pickart 2018, BPC-157 via Sikiric review series, TB-500 via Goldstein cardiac literature), but the GLOW combination itself is community-tier – a protocol organised around Sean-curated notes and dopamine.club user feedback rather than randomised trials.\n\n**WADA warning**: BPC-157 (since 2022) and TB-500 (earlier) are both on the WADA prohibited list (Class S0 – Non-approved substances). Competing athletes MUST NOT use the GLOW stack.",
  "composition": [
    {
      "id": "ghk-cu",
      "role": "Copper tripeptide – cosmetic skin axis (collagen III, melanin, wound healing)",
      "typicalDose": "1-3 mg subQ daily"
    },
    {
      "id": "bpc-157",
      "role": "Gastric pentadecapeptide – systemic tissue healing (angiogenesis, GI, tendon)",
      "typicalDose": "250-500 µg subQ daily"
    },
    {
      "id": "tb-500",
      "role": "Thymosin β4 fragment – actin binding + cell migration (whole-body regeneration)",
      "typicalDose": "2-2.5 mg subQ 2× weekly"
    }
  ],
  "keyInfo": [
    {
      "label": "Type",
      "value": "Multi-peptide stack (3 components)"
    },
    {
      "label": "Components",
      "value": "GHK-Cu + BPC-157 + TB-500"
    },
    {
      "label": "Target axis",
      "value": "Skin (cosmetic) + systemic tissue regeneration"
    },
    {
      "label": "Evidence tier",
      "value": "T3 (community protocol; no stack-specific RCT)"
    },
    {
      "label": "Cycle",
      "value": "4-6 weeks on / 2-4 weeks off"
    },
    {
      "label": "Administration",
      "value": "Subcutaneous (SC), rotated injection sites"
    }
  ],
  "mechanism": "GLOW's stack synergy is built on three different molecular mechanisms that converge on two regeneration axes.\n\n**1) GHK-Cu (surface / cosmetic axis)**: the Gly-His-Lys tripeptide with copper ion epigenetically modulates ~4,000+ gene expressions (Pickart 2018, PMID 29986520), activates fibroblast collagen III synthesis, modulates melanin distribution and upregulates antioxidant SOD / catalase enzymes. Acts both locally and systemically on skin, hair and connective tissue.\n\n**2) BPC-157 (systemic healing)**: the 15-amino-acid pentadecapeptide is a pleiotropic angiogenesis inducer through the VEGF-VEGFR2 + Akt-eNOS axis (Sikiric review series), as well as an NO-signalling modulator. Its GI, tendon, muscle and neural regeneration effects are well documented in animal models.\n\n**3) TB-500 (systemic actin mobilisation)**: the N-terminal fragment of thymosin β4 sequesters the globular G-actin pool, facilitates cell migration (myoblasts, endothelial cells) and supports tissue repair through actin-cytoskeleton remodelling. Functional t½ ~2-3 days (actual receptor binding is much shorter).\n\n**Synergy logic**: GHK-Cu delivers fast, visible (2-4 weeks) improvement on the skin / collagen axis; the BPC-157 + TB-500 pair targets deep-tissue / systemic regeneration (4-6 weeks). Together: two axes = a more complete regenerative profile than any single component alone.",
  "dosingInfo": "**Standard GLOW protocol** (community-tier, NOT clinical Rx):\n\n- **GHK-Cu**: 1-3 mg SC daily, same time-of-day window (e.g. morning)\n- **BPC-157**: 250-500 µg SC daily, ideally at a different injection site from the other components\n- **TB-500**: 2-2.5 mg SC 2× weekly (e.g. Monday + Thursday)\n\n**Cycle**: 4-6 weeks continuous on, then 2-4 weeks off before restart. Components are reconstituted (bacteriostatic water) in **separate vials** – NOT mixed in a single syringe (different stability, pH sensitivity). Rotate injection sites (abdomen, thigh, upper arm) to minimise SC tissue irritation.",
  "studies": [
    {
      "tag": "GHK-Cu epigenetics",
      "tagColor": "rgba(167,139,250,0.16)",
      "tagText": "#a78bfa",
      "title": "Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data",
      "authors": "Pickart L, Margolina A.",
      "journal": "Int J Mol Sci",
      "year": "2018",
      "pmid": "29986520",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      "finding": "GHK-Cu modulates ~4,000+ gene expressions, with collagen synthesis + antioxidant enzyme activation. Single-component study, NOT stack-level."
    },
    {
      "tag": "BPC-157 review",
      "tagColor": "rgba(14,165,233,0.16)",
      "tagText": "#7dd3fc",
      "title": "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
      "authors": "Vasireddi N, Hahamyan H, Salata MJ, et al.",
      "journal": "HSS Journal",
      "year": "2025",
      "pmid": "40756949",
      "url": "https://pubmed.ncbi.nlm.nih.gov/40756949/",
      "finding": "36 animal studies: VEGF↑, IL-6↓, accelerated tendon and muscle healing. NO stack-level human trial exists."
    },
    {
      "tag": "TB-500 angiogenesis",
      "tagColor": "rgba(99,102,241,0.18)",
      "tagText": "#818cf8",
      "title": "Thymosin-β 4 induces angiogenesis in critical limb ischemia mice via regulating Notch/NF-κB pathway.",
      "authors": "Lv S, Cai H, Xu Y, Dai J, Rong X",
      "journal": "Int J Mol Med. 2020;46(4):1347-1358.",
      "year": "2020",
      "pmid": "32945357",
      "url": "https://pubmed.ncbi.nlm.nih.gov/32945357/",
      "finding": "Thymosin β4 (the source molecule for TB-500) induces vessel formation via Notch signalling in endothelial cells. Stack-level GLOW evidence is absent."
    }
  ],
  "legalStatus": "**Sourcing context**: none of the three components are HU or EU GMP-Rx registered for human indications (with the exception of thymosin α1 in some countries – which is NOT the β4 fragment). Users typically source the peptides via RUO (Research Use Only) vendor channels, which is a **grey legal zone** that varies by country (HU/EU: small personal-import quantities typically tolerated; vendor side is stricter).\n\n**WADA status (mandatory warning)**:\n- **BPC-157**: on the WADA prohibited list since 2022 in class S0 (Non-approved substances) – banned year-round (in + out-of-competition)\n- **TB-500 / Thymosin β4**: previously banned (class S2)\n- **GHK-Cu**: NOT separately listed on the WADA prohibited list\n\nConclusion: **competing athletes MUST NOT use the GLOW stack** – the presence of BPC-157 + TB-500 makes the stack as a whole competition-prohibited. Doping-control immunoassay or LC-MS/MS will detect peptide presence.",
  "onsetTime": "Skin / visible benefits (GHK-Cu axis): 2-4 weeks. Systemic regenerative effects (BPC-157 + TB-500 axis): 4-6 weeks.",
  "halfLife": "Heterogeneous – BPC-157 ~30-min plasma t½ (acute effect); TB-500 functional t½ ~2-3 days; GHK-Cu systemically minutes, but local / topical effects persist for days on the collagen axis.",
  "interactionsWith": [
    "ghk-cu",
    "bpc-157",
    "tb-500",
    "cjc-1295-ipamorelin"
  ],
  "wadaStatus": null,
  "related": [
    "ghk-cu",
    "bpc-157",
    "tb-500",
    "cjc-1295-ipamorelin"
  ],
  "faq": [
    {
      "q": "Why is GLOW a stack and not a single peptide?",
      "a": "GLOW's logic is that skin and connective-tissue regeneration happens on **multiple molecular axes**, and no single peptide covers all of them. **GHK-Cu** is optimised for the cosmetic / surface skin axis (collagen III, melanin, antioxidant enzymes), while **BPC-157 + TB-500** target systemic / deep-tissue regeneration (angiogenesis, cell migration, tendon + muscle healing). The stack rationale is that two axes together give a more complete regenerative profile. Important: this is community-protocol rationale (Sean-curated notes + dopamine.club user feedback), NOT RCT-proven synergy."
    },
    {
      "q": "Can I run the components separately?",
      "a": "Yes – each component works on its own in its native regeneration niche (see the GHK-Cu, BPC-157 and TB-500 entries). Solo use makes sense when (1) cost is a constraint, (2) the indication is narrow (e.g. tendon injury only → BPC-157 alone; cosmetic skin goal only → GHK-Cu alone), or (3) you want to isolate which component is actually delivering the result for you. The GLOW stack rationale is most useful when you want both axes (surface + systemic) at once."
    },
    {
      "q": "What WADA risk does GLOW carry?",
      "a": "**High.** Two of the three components (BPC-157 + TB-500) are on the WADA prohibited list (Class S0, year-round). GHK-Cu is not separately listed, but the prohibited components make the stack as a whole competition-banned. **Competing athletes (NCAA, IOC, UCI, WADA-signatory federations) should NOT use the GLOW stack** – doping-control immunoassay or LC-MS/MS will detect peptide presence."
    },
    {
      "q": "What bloodwork is needed?",
      "a": "At T3 community-tier there is **no mandatory bloodwork protocol** – stack-specific clinical trial evidence is absent, so no targeted biomarker exists. **Optional baseline** (general health check before long-term use): CBC, CMP (liver + kidney), CRP, lipid panel. For continuous use longer than a 4-6 week cycle, a CRP + liver enzyme (ALT/AST) check every 8-12 weeks is reasonable for general safety monitoring."
    }
  ],
  "anecdote": null
}
