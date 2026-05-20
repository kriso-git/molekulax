// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.087Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "cjc-1295-ipamorelin",
  "name": "CJC-1295 / Ipamorelin",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.16)",
  "tagText": "#a78bfa",
  "defaultVialMg": 5,
  "defaultBacMl": 2,
  "defaultDoseMcg": 200,
  "shortDesc": "Kombinacja analogu GHRH + selektywnego mimetyku greliny dla synergicznego pulsu GH",
  "description": "Połączenie CJC-1295 (modyfikowanego GHRH 1-29) z Ipamoreliną (selektywnym agonistą receptora greliny / GHRP) zwiększa pulsacyjne uwalnianie hormonu wzrostu (GH) przez dwa różne receptory, klasyczna kombinacja „GHRH + GHRP”.\n\nCJC-1295 działa na receptory GHRH przysadki, ipamorelina na receptor greliny. Sygnały synergizują, a selektywność ipamoreliny minimalizuje wzrost kortyzolu i prolaktyny.",
  "composition": [
    {
      "id": "cjc-1295",
      "role": "Analog GHRH — podstawa przedłużonego pulsu GH",
      "typicalDose": "100-200 µg subQ codziennie"
    },
    {
      "id": "ipamorelin",
      "role": "Selektywny sekretagog GH — wzmacniacz pulsu",
      "typicalDose": "100-200 µg subQ codziennie"
    }
  ],
  "keyInfo": [
    {
      "label": "Typ",
      "value": "GHRH + GHRP kombinacja"
    },
    {
      "label": "Struktura",
      "value": "CJC-1295 (30 aa) + Ipamorelin (5 aa)"
    },
    {
      "label": "Masa cząsteczkowa",
      "value": "~3367 + ~712 Da"
    },
    {
      "label": "Obszar docelowy",
      "value": "Pulsacyjny wzrost GH (IGF-1)"
    },
    {
      "label": "Przechowywanie",
      "value": "2–8°C (po rozpuszczeniu)"
    },
    {
      "label": "Stabilność",
      "value": "25–30 dni (po rozpuszczeniu)"
    }
  ],
  "dosageInfo": "Typowy protokół badawczy: 100–300 µg CJC-1295 (no-DAC) + 100–300 µg ipamoreliny razem, podskórnie, 1–3× dziennie (zwykle przed snem i/lub po treningu). Cykl: 8–12 tygodni, potem przerwa. Skuteczniejsze na czczo.",
  "studies": [
    {
      "tag": "Farmakologia",
      "tagColor": "rgba(167,139,250,0.16)",
      "tagText": "#a78bfa",
      "title": "Sustained GH and IGF-I responses after CJC-1295 administration",
      "authors": "Teichman SL, Neale A, Lawrence B, et al.",
      "journal": "JCEM",
      "year": "2006",
      "pmid": "16352683",
      "url": "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      "finding": "CJC-1295 wywołuje zależne od dawki, trwałe wzrosty GH i IGF-1 u zdrowych dorosłych."
    },
    {
      "tag": "Selektywność GHRP",
      "tagColor": "rgba(99,102,241,0.18)",
      "tagText": "#818cf8",
      "title": "Ipamorelin, the first selective growth hormone secretagogue",
      "authors": "Raun K, Hansen BS, Johansen NL, et al.",
      "journal": "European Journal of Endocrinology",
      "year": "1998",
      "pmid": "9849822",
      "url": "https://pubmed.ncbi.nlm.nih.gov/9849822/",
      "finding": "Ipamorelin selektywnie stymuluje wydzielanie GH bez istotnego wzrostu ACTH/kortyzolu."
    }
  ]
}
