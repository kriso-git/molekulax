// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.585Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "glimepirid",
  "name": "Glimepirid",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "2. generációs sulfonylurea, Sanofi Amaryl. Klasszikus T2DM-szer, de a ADA/EASD 2022 alapján modern alternatívák (GLP-1 RA, SGLT2i) priorizálandók.",
  "description": "A Glimepirid egy 2. generációs sulfonylurea, amelyet a Sanofi-Aventis fejlesztett ki (Amaryl, FDA 1995). A β-sejtek ATP-érzékeny K-csatorna-zárásával insulin-szekréciót stimulál, NEM glükóz-függő módon — ezért hipoglikémia-rizikója szignifikáns. A klasszikus T2DM-portfólióban \"olcsó és hatékony\" elem, de a kardiovaszkuláris végpont-evidencia hiánya és a hipoglikémia-rizikó miatt az ADA/EASD 2022 konszenzus a GLP-1 RA, SGLT2i és DPP-4i mögé pozícionálja. Még mindig használt költségérzékeny vagy compliance-szempontból egyszerűbb regimre szoruló betegeknél.",
  "mechanism": "Az ATP-érzékeny K-csatornák (KATP, SUR1/Kir6.2) zárása a pankreász β-sejtekben → depolarizáció → Ca²⁺-beáramlás → inzulin-szekréció. NEM glükóz-függő, ezért hipoglikémiát okozhat alacsony vércukor mellett is.",
  "legalStatus": "EU/HU: vényköteles (Amaryl, generikus). USA: FDA Rx.",
  "onsetTime": "1-3 h (acute), 1-2 weeks (steady-state HbA1c)",
  "halfLife": "~5-8 h (once-daily morning dosing)",
  "atcCode": "A10BB12",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "2-es típusú cukorbetegség, Metformin-kiegészítés vagy alternatíva"
  ],
  "contraindications": [
    "1-es típusú cukorbetegség, diabéteszes ketoacidózis",
    "Súlyos máj- vagy vesefunkció-zavar",
    "Szulfonamid-allergia"
  ],
  "commonSideEffects": [
    "Hipoglikémia (szignifikáns, főleg idős, étkezést kihagyó, vesefunkció-zavarú betegeknél)",
    "Súlygyarapodás (átlag 2-3 kg)",
    "GI: hányinger, hasmenés (5%), allergiás bőrkiütés"
  ],
  "cyp450": [
    "CYP2C9 substrate (primary)",
    "CYP2C9 polymorphism affects dose response"
  ],
  "crossMolInteractions": [
    "CYP2C9-inhibitor (Fluconazole, Amiodarone): plazma-Glimepirid emelkedhet, hipoglikémia-rizikó",
    "Béta-blokkoló (Metoprolol, Bisoprolol): hipoglikémia-tüneteket maszkolja",
    "Alkohol: disulfiram-szerű reakció + hipoglikémia-fokozás"
  ],
  "benefits": [
    "HbA1c-csökkenés 1,0-1,5%, gyors hatáskezdet",
    "Olcsó, generikus, hosszú-távú elérhetőség",
    "Napi egyszeri adagolás (jó compliance)"
  ],
  "studies": [
    {
      "title": "Pharmacokinetics and pharmacodynamics of glimepiride",
      "authors": "Massi-Benedetti M.",
      "journal": "Clin Ther. 2003;25(3):799-816.",
      "pmid": "12852704"
    },
    {
      "title": "Effect of intensive blood-glucose control with sulphonylureas or insulin (UKPDS 33)",
      "authors": "UK Prospective Diabetes Study (UKPDS) Group.",
      "journal": "Lancet. 1998;352(9131):837-53.",
      "pmid": "9742976"
    },
    {
      "title": "Cardiovascular outcomes with glimepiride vs linagliptin in T2DM (CAROLINA)",
      "authors": "Rosenstock J, Kahn SE, Johansen OE et al.",
      "journal": "JAMA. 2019;322(12):1155-1166.",
      "pmid": "31536101"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-2 (start)",
        "dose": "1"
      },
      {
        "phase": "Hét 3+",
        "dose": "2"
      },
      {
        "phase": "Cél",
        "dose": "4"
      },
      {
        "phase": "Max-dózis",
        "dose": "8"
      }
    ],
    "unit": "mg/nap (reggel)",
    "note": "Reggeli ELŐTT vagy KÖZBEN bevenni. Hipoglikémia-rizikó miatt étkezést NE HAGYJON KI. Idős vagy vesefunkció-zavar esetén alacsonyabb induló dózis (0,5-1 mg/nap). Alkohol kerülendő."
  }
}
