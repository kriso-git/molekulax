// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.569Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "tirzepatide",
  "name": "Tirzepatide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Dual GIP + GLP-1 receptor agonista, Eli Lilly Mounjaro (T2DM) és Zepbound (obesity). SURMOUNT-5 trial szerint head-to-head felülmúlja a Semaglutide-ot.",
  "description": "A Tirzepatide az első kettős inkretin-agonista, ami egyidejűleg aktiválja a GIP (glükóz-függő insulinotropikus polypeptid) és a GLP-1 receptort. A Eli Lilly fejlesztette ki (Mounjaro T2DM FDA 2022, Zepbound obesity FDA 2023, ~7 napos felezési idő, heti SC injekció). A SURPASS-2 (Frías 2021 NEJM PMID 34170647) szerint a Tirzepatide a Semaglutide-ot szignifikánsan felülmúlja HbA1c-csökkentésben. A SURMOUNT-5 (Aronne 2025 NEJM PMID 40353578) head-to-head obesity-trial szerint 72 hét alatt 20,2% testsúlyvesztés (vs Semaglutide 13,7%, p<0,001). Mellékhatás-profil hasonló, talán mérsékelten kedvezőbb GI-toleranciával.",
  "mechanism": "Dual GIP + GLP-1 receptor agonista. A GIP-aktiváció glükóz-függő inzulin-szekréciót, glükagon-szuppressziót, és valószínűleg adipocyta-lipid-redisztribúciót okoz. A GLP-1-aktiváció (mint Semaglutide-nál) lassítja a gyomorürülést és centrálisan csökkenti az étvágyat.",
  "legalStatus": "EU/HU: vényköteles (Mounjaro T2DM, Zepbound obesity). USA: FDA Rx. Globális ellátási hiány 2023-2024.",
  "onsetTime": "1-2 weeks (appetite), 12-16 weeks (HbA1c steady-state)",
  "halfLife": "~5 days (weekly SC dosing)",
  "atcCode": "A10BX16",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "2-es típusú cukorbetegség (Mounjaro 2,5-15 mg heti)",
    "Krónikus súlykezelés obesitásban (Zepbound 2,5-15 mg heti, BMI ≥ 30 vagy BMI ≥ 27 + komorbiditás)",
    "OSA + obesity (Zepbound 2024 FDA-kibővítés, SURMOUNT-OSA)"
  ],
  "contraindications": [
    "MTC vagy MEN-2 anamnézis (mint Semaglutide-nál, FDA boxed warning)",
    "Aktív pankreatitis vagy ismétlődő pankreatitisz",
    "Terhesség, szoptatás"
  ],
  "commonSideEffects": [
    "GI: hányinger, hányás, hasmenés (>20% dóziseszkaláció alatt)",
    "Étvágycsökkenés, dyspepsia, eructatio",
    "Súlyos, ritka: akut pankreatitisz, epekő, hipoglikémia (insulinnal/SU-val)"
  ],
  "cyp450": [
    "Not CYP-metabolized (proteolytic degradation)",
    "No major drug interactions"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureák: hipoglikémia-kockázat, dóziscsökkentés",
    "Orális gyógyszerek (Levothyroxin, warfarin): gyomorürülés-lassítás abszorpció-eltolódás"
  ],
  "benefits": [
    "HbA1c csökkenés akár 2,0-2,5% (SURPASS-2 vs Semaglutide szuperior)",
    "Testsúlyvesztés átlag 20,2% 72 hét alatt (SURMOUNT-5)",
    "Heti egyszeri SC adagolás, kényelmes compliance"
  ],
  "studies": [
    {
      "title": "Tirzepatide vs semaglutide once weekly in type 2 diabetes (SURPASS-2)",
      "authors": "Frías JP, Davies MJ, Rosenstock J et al.",
      "journal": "N Engl J Med. 2021;385(6):503-515.",
      "pmid": "34170647"
    },
    {
      "title": "Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1)",
      "authors": "Jastreboff AM, Aronne LJ, Ahmad NN et al.",
      "journal": "N Engl J Med. 2022;387(3):205-216.",
      "pmid": "35658024"
    },
    {
      "title": "Tirzepatide once weekly for the treatment of obesity (SURMOUNT-5 head-to-head vs semaglutide)",
      "authors": "Aronne LJ, Horn DB, le Roux CW et al.",
      "journal": "N Engl J Med. 2025.",
      "pmid": "40353578"
    },
    {
      "title": "Tirzepatide for obstructive sleep apnea and obesity (SURMOUNT-OSA)",
      "authors": "Malhotra A, Grunstein RR, Fietze I et al.",
      "journal": "N Engl J Med. 2024;391(13):1193-1205.",
      "pmid": "38912654"
    }
  ],
  "related": [
    "semaglutide",
    "liraglutide",
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-4 (start)",
        "dose": "2.5"
      },
      {
        "phase": "Hét 5-8",
        "dose": "5"
      },
      {
        "phase": "Hét 9-12",
        "dose": "7.5"
      },
      {
        "phase": "Hét 13+",
        "dose": "10"
      },
      {
        "phase": "Max-dózis",
        "dose": "15"
      }
    ],
    "unit": "mg/hét SC",
    "note": "Heti SC injekció. Lassú titráció 4 hét/dózisszint a GI-tolerancia érdekében. T2DM cél-dózis 5-15 mg/hét, obesity cél-dózis 5-15 mg/hét. GI-tüneteknél maradni a dózison."
  }
}
