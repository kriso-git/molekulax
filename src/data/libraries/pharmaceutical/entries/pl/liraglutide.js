// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.614Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "liraglutide",
  "name": "Liraglutide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Codzienny agonista receptora GLP-1, Novo Nordisk Victoza (T2DM) i Saxenda (otyłość). Poprzednik semaglutydu, ~13 h okres półtrwania.",
  "description": "Liraglutyd to pierwszy długodziałający GLP-1 RA Novo Nordisk (Victoza T2DM FDA 2010, Saxenda otyłość FDA 2014). Dawkowanie raz dziennie SC (~13 h okres półtrwania vs semaglutyd ~7 dni). Badanie LEADER (Marso 2016 NEJM PMID 27295427) potwierdziło redukcję MACE w T2DM. Badanie SCALE (Pi-Sunyer 2015 NEJM PMID 26132939) wykazało 8% utratę masy w 56 tygodni w otyłości bez cukrzycy. Nowoczesny semaglutyd/tirzepatyd w dużej mierze zastąpiły liraglutyd w praktyce klinicznej (cotygodniowe vs codzienne, lepsza utrata masy), ale wskazanie pediatryczne (Saxenda 12+ lat FDA 2020) i specyficzne przypadki wymagające dawkowania dziennego zachowują znaczenie.",
  "mechanism": "Agonista receptora GLP-1 (jak semaglutyd), 97% homologia sekwencji z natywnym GLP-1. Sprzężenie kwasu tłuszczowego zapewnia wiązanie z albuminami i powolną eliminację (~13 h vs natywne 1-2 min).",
  "legalStatus": "UE/PL: na receptę (Victoza T2DM, Saxenda otyłość). USA: FDA Rx.",
  "bioavailability": "~55% (wstrzyknięcie podskórne — etykieta FDA Victoza/Saxenda, sekcja 12.3)",
  "onsetTime": "1-2 weeks (appetite), 8-12 weeks (HbA1c steady-state)",
  "halfLife": "~13 h (once-daily SC dosing)",
  "atcCode": "A10BJ02",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Cukrzyca typu 2 (Victoza 0,6-1,8 mg dziennie)",
    "Przewlekłe leczenie masy w otyłości (Saxenda 0,6-3,0 mg dziennie)",
    "Otyłość pediatryczna 12-17 lat (Saxenda, FDA 2020)"
  ],
  "contraindications": [
    "Wywiad MTC/MEN-2 (ostrzeżenie FDA boxed)",
    "Aktywne zapalenie trzustki",
    "Ciąża, karmienie piersią"
  ],
  "commonSideEffects": [
    "GI: nudności, wymioty, biegunka (20-30% podczas titracji)",
    "Ciężkie, rzadkie: zapalenie trzustki, kamica żółciowa, progresja retinopatii"
  ],
  "cyp450": [
    "Not CYP-metabolized",
    "No major drug interactions"
  ],
  "crossMolInteractions": [
    "Insulina, sulfonylomoczniki: ryzyko hipoglikemii, redukcja dawki"
  ],
  "benefits": [
    "Redukcja HbA1c 1,0-1,5%, utrata masy średnio 8% (SCALE)",
    "Redukcja MACE w T2DM (LEADER, HR 0,87)",
    "Otyłość pediatryczna zatwierdzona FDA (12+ lat)"
  ],
  "studies": [
    {
      "title": "Liraglutide and cardiovascular outcomes in T2DM (LEADER)",
      "authors": "Marso SP, Daniels GH, Brown-Frandsen K et al.",
      "journal": "N Engl J Med. 2016;375(4):311-22.",
      "pmid": "27295427"
    },
    {
      "title": "A randomized, controlled trial of 3.0 mg of liraglutide in weight management (SCALE)",
      "authors": "Pi-Sunyer X, Astrup A, Fujioka K et al.",
      "journal": "N Engl J Med. 2015;373(1):11-22.",
      "pmid": "26132939"
    },
    {
      "title": "Liraglutide for children 12 to less than 18 years of age with obesity (FDA approval, Kelly 2020)",
      "authors": "Kelly AS, Auerbach P, Barrientos-Perez M et al.",
      "journal": "N Engl J Med. 2020;382(22):2117-2128.",
      "pmid": "32233338"
    }
  ],
  "related": [
    "semaglutide",
    "tirzepatide",
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start)",
        "dose": "0.6"
      },
      {
        "phase": "Tydzień 2 (T2DM)",
        "dose": "1.2"
      },
      {
        "phase": "Tydzień 3+ (T2DM)",
        "dose": "1.8"
      },
      {
        "phase": "Cel otyłość (Saxenda)",
        "dose": "3"
      }
    ],
    "unit": "mg/nap SC",
    "note": "Codzienna iniekcja SC. Powolna titracja 1 tydzień/poziom dla tolerancji GI. Cel T2DM 1,2-1,8 mg/dzień, cel otyłość 3,0 mg/dzień."
  }
}
