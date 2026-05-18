// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.613Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "tirzepatide",
  "name": "Tirzepatide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Podwójny agonista receptora GIP + GLP-1, Eli Lilly Mounjaro (T2DM) i Zepbound (otyłość). SURMOUNT-5 wykazało wyższość head-to-head nad semaglutydem.",
  "description": "Tirzepatyd to pierwszy podwójny agonista inkretynowy, jednocześnie aktywujący receptory GIP (glukozozależny polipeptyd insulinotropowy) i GLP-1. Opracowany przez Eli Lilly (Mounjaro T2DM FDA 2022, Zepbound otyłość FDA 2023, ~7-dniowy okres półtrwania, cotygodniowa iniekcja SC). SURPASS-2 (Frías 2021 NEJM PMID 34170647) wykazało, że tirzepatyd znacznie przewyższa semaglutyd w redukcji HbA1c. SURMOUNT-5 (Aronne 2025 NEJM PMID 40353578) head-to-head w otyłości wykazało 20,2% utratę masy w 72 tygodnie (vs semaglutyd 13,7%, p<0,001). Profil działań niepożądanych podobny, możliwie z umiarkowanie lepszą tolerancją GI.",
  "mechanism": "Podwójny agonista GIP + GLP-1. Aktywacja GIP powoduje wydzielanie insuliny zależne od glukozy, supresję glukagonu i prawdopodobnie redystrybucję lipidów w adipocytach. Aktywacja GLP-1 (jak w semaglutydzie) spowalnia opróżnianie żołądka i centralnie zmniejsza apetyt.",
  "legalStatus": "UE/PL: na receptę (Mounjaro T2DM, Zepbound otyłość). USA: FDA Rx. Globalny niedobór 2023-2024.",
  "bioavailability": "~80% (wstrzyknięcie podskórne — etykieta FDA Mounjaro, sekcja 12.3)",
  "onsetTime": "1-2 weeks (appetite), 12-16 weeks (HbA1c steady-state)",
  "halfLife": "~5 days (weekly SC dosing)",
  "atcCode": "A10BX16",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Cukrzyca typu 2 (Mounjaro 2,5-15 mg tygodniowo)",
    "Przewlekłe leczenie masy w otyłości (Zepbound 2,5-15 mg tygodniowo)",
    "OSA + otyłość (rozszerzenie FDA 2024 Zepbound, SURMOUNT-OSA)"
  ],
  "contraindications": [
    "Wywiad MTC lub MEN-2 (jak przy semaglutydzie, FDA boxed)",
    "Aktywne lub nawracające zapalenie trzustki",
    "Ciąża, karmienie piersią"
  ],
  "commonSideEffects": [
    "GI: nudności, wymioty, biegunka (>20% podczas titracji)",
    "Zmniejszony apetyt, dyspepsja, eruktacja",
    "Ciężkie, rzadkie: ostre zapalenie trzustki, kamica żółciowa, hipoglikemia (z insuliną/SU)"
  ],
  "cyp450": [
    "Not CYP-metabolized (proteolytic degradation)",
    "No major drug interactions"
  ],
  "crossMolInteractions": [
    "Insulina, sulfonylomoczniki: ryzyko hipoglikemii, redukcja dawki",
    "Leki doustne (lewotyroksyna, warfaryna): spowolnione opróżnianie żołądka"
  ],
  "benefits": [
    "Redukcja HbA1c do 2,0-2,5% (SURPASS-2 lepiej niż semaglutyd)",
    "Utrata masy średnio 20,2% w 72 tygodnie (SURMOUNT-5)",
    "Cotygodniowe dawkowanie SC, wygodny compliance"
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
        "phase": "Tygodnie 1-4 (start)",
        "dose": "2.5"
      },
      {
        "phase": "Tygodnie 5-8",
        "dose": "5"
      },
      {
        "phase": "Tygodnie 9-12",
        "dose": "7.5"
      },
      {
        "phase": "Tygodnie 13+",
        "dose": "10"
      },
      {
        "phase": "Maks. dawka",
        "dose": "15"
      }
    ],
    "unit": "mg/hét SC",
    "note": "Cotygodniowa iniekcja SC. Powolna titracja 4 tyg./poziom dawki. Cel T2DM 5-15 mg/tyg., cel otyłość 5-15 mg/tyg. Przy objawach GI pozostań na dawce."
  }
}
