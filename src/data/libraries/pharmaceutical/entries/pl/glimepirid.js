// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.626Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "glimepirid",
  "name": "Glimepirid",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Sulfonylomocznik 2. generacji, Sanofi Amaryl. Klasyczny lek T2DM, ale ADA/EASD 2022 priorytetyzuje nowoczesne alternatywy (GLP-1 RA, SGLT2i).",
  "description": "Glimepiryd to sulfonylomocznik 2. generacji opracowany przez Sanofi-Aventis (Amaryl, FDA 1995). Stymuluje wydzielanie insuliny komórek β przez zamykanie kanałów K zależnych od ATP, NIE w sposób zależny od glukozy — więc ryzyko hipoglikemii jest znaczące. W klasycznym portfolio T2DM jest elementem \"tanim i skutecznym\", ale z braku dowodów CV i z ryzykiem hipoglikemii, konsensus ADA/EASD 2022 umieszcza go za GLP-1 RA, SGLT2i i DPP-4i. Wciąż stosowany u pacjentów wrażliwych kosztowo lub wymagających prostego compliance.",
  "mechanism": "Zamyka kanały K zależne od ATP (KATP, SUR1/Kir6.2) w komórkach β trzustki → depolaryzacja → napływ Ca²⁺ → wydzielanie insuliny. NIE zależne od glukozy, więc hipoglikemia możliwa nawet przy niskiej glukozie.",
  "legalStatus": "UE/PL: na receptę (Amaryl, generyki). USA: FDA Rx.",
  "bioavailability": "~100% (doustnie, całkowite wchłanianie — etykieta FDA Amaryl)",
  "onsetTime": "1-3 h (acute), 1-2 weeks (steady-state HbA1c)",
  "halfLife": "~5-8 h (once-daily morning dosing)",
  "atcCode": "A10BB12",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Cukrzyca typu 2, uzupełnienie lub alternatywa metforminy"
  ],
  "contraindications": [
    "Cukrzyca typu 1, kwasica ketonowa cukrzycowa",
    "Ciężka niewydolność wątroby lub nerek",
    "Alergia na sulfonamidy"
  ],
  "commonSideEffects": [
    "Hipoglikemia (znacząca, zwłaszcza u starszych, pomijających posiłki, z niewydolnością nerek)",
    "Przyrost masy (średnio 2-3 kg)",
    "GI: nudności, biegunka (5%), alergiczna wysypka"
  ],
  "cyp450": [
    "CYP2C9 substrate (primary)",
    "CYP2C9 polymorphism affects dose response"
  ],
  "crossMolInteractions": [
    "Inhibitory CYP2C9 (flukonazol, amiodaron): poziom glimepirydu może wzrosnąć, ryzyko hipoglikemii",
    "Beta-bloker (metoprolol, bisoprolol): maskuje objawy hipoglikemii",
    "Alkohol: reakcja podobna do disulfiramu + nasilenie hipoglikemii"
  ],
  "benefits": [
    "Redukcja HbA1c 1,0-1,5%, szybki początek",
    "Tani, generyczny, długoterminowa dostępność",
    "Dawkowanie raz dziennie (dobry compliance)"
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
        "phase": "Tygodnie 1-2 (start)",
        "dose": "1"
      },
      {
        "phase": "Tydzień 3+",
        "dose": "2"
      },
      {
        "phase": "Cel",
        "dose": "4"
      },
      {
        "phase": "Maks. dawka",
        "dose": "8"
      }
    ],
    "unit": "mg/nap (reggel)",
    "note": "Przyjmuj PRZED lub Z śniadaniem. Z powodu ryzyka hipoglikemii NIE POMIJAJ POSIŁKÓW. Niższa dawka początkowa u starszych lub niewydolnych nerek (0,5-1 mg/dzień). Unikaj alkoholu."
  }
}
