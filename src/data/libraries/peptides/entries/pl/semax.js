// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.091Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "semax",
  "name": "Semax",
  "image": null,
  "accentColor": "#22d3ee",
  "tagColor": "rgba(34,211,238,0.16)",
  "tagText": "#22d3ee",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 600,
  "shortDesc": "Analog ACTH(4-10), nootropowy spray do nosa",
  "description": "Semax (Met-Glu-His-Phe-Pro-Gly-Pro) to analog ACTH(4-10), w Rosji zarejestrowany lek na udar niedokrwienny i wspomaganie funkcji poznawczych. Dostępny w dwóch formach: iniekcja podskórna (protokół badawczy) i spray donosowy (rosyjska praktyka kliniczna – primary route).",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Analog ACTH(4-10)"
    },
    {
      "label": "Struktura",
      "value": "Met-Glu-His-Phe-Pro-Gly-Pro"
    },
    {
      "label": "Status",
      "value": "Zarejestrowany RU"
    },
    {
      "label": "Podanie",
      "value": "Donosowo"
    },
    {
      "label": "Przechowywanie",
      "value": "2–8°C"
    },
    {
      "label": "Źródło",
      "value": "Placeholder, obraz później"
    }
  ],
  "dosageInfo": "Badania / klinicznie: 150–600 µg donosowo 1–2× dziennie, 5–14 dni.",
  "studies": [
    {
      "tag": "Badania",
      "tagColor": "rgba(34,211,238,0.16)",
      "tagText": "#22d3ee",
      "title": "Neuroprotective and antiamnesic effects of Semax during experimental ischemic infarction of the cerebral cortex",
      "authors": "Romanova GA, Barskov IV, Ostrovskaya RU, et al.",
      "journal": "Bull Exp Biol Med",
      "year": "2006",
      "pmid": "17603664",
      "url": "https://pubmed.ncbi.nlm.nih.gov/17603664/",
      "finding": "Semax wykazuje efekt neuroprotekcyjny i antyamnestyczny w eksperymentalnym ostrym zawale korowym poprzez podanie donosowe."
    }
  ],
  "anecdote": "Doniesienia społeczności na temat Semaxu są mieszane: niektórzy użytkownicy uważają go za skuteczny, podczas gdy inni zgłaszają niewielki subiektywny efekt, nawet przy podawaniu podskórnym. Ci, którzy reagują, często opisują uczucie \"czystego skupienia\" — subtelne, ale zauważalne. Uważa się, że efekty na neuroplastyczność narastają stopniowo. Semax jest stosowany klinicznie w niektórych krajach (zwłaszcza w Rosji), ale pozostaje mniej powszechny na Zachodzie.\n\nSemax jest najczęściej podawany donosowo i zazwyczaj cyklowany w badaniach (kilka tygodni stosowania, potem przerwa). Dostępne dane sugerują, że Semax może zwiększać dopaminę i serotoninę, podnosić BDNF i wspomagać tolerancję hipoksji.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/water-vial.png",
      "dosing": "200–600 μg SC/dzień (protokół badawczy, cykle 5–14 dni)",
      "halfLife": "~20 min w osoczu",
      "halfLifeActive": "~24 h (OUN, downstream BDNF)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Trasa protokołu badawczego: przenikanie BBB, modulacja BDNF, badania nad wydajnością poznawczą. Mniej powszechna na Zachodzie; praktyka kliniczna to IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/dzień",
        "note": "Dawka badawcza SC. Standardowa fiolka 5 mg liofilizowana + 2 ml wody bakteriostatycznej = 2500 μg/ml = 80 μl na dawkę 200 μg."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 5 mg + 2 ml wody bakteriostatycznej",
          "Powoli wstrzyknąć wodę na ściankę fiolki, NIE bezpośrednio na proszek",
          "Odczekać 30 sekund, delikatnie zakręcić (NIE potrząsać)",
          "Przechowywanie: w lodówce (2–8°C), maks. 28 dni"
        ]
      }
    },
    {
      "id": "in",
      "routeId": "in",
      "routeLabel": "Spray donosowy",
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "150–600 μg/dzień donosowo (50 μg/kropla, 2–12 kropli/dzień)",
      "halfLife": "~5–10 min w osoczu",
      "halfLifeActive": "~24 h (OUN)",
      "bioavailability": "~30–40% (IN, BBB-direct delivery)",
      "onsetTime": "5–15 min",
      "routeNote": "Rosyjska praktyka kliniczna – primary route: ostry udar BBB-direct delivery, wzmocnienie poznawcze, modulacja osi ACTH. Zarejestrowany rosyjski preparat (Semax 0.1% krople donosowe).",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 150, "medium": 300, "high": 600 },
        "unit": "μg IN/dzień",
        "note": "Pre-mieszany RU pharma (Semax 0.1% krople donosowe, 50 μg/kropla). 3–12 kropli/dzień, podzielone na 1–2 dawki. Cykle 5–14 dni."
      }
    }
  ],
  "defaultVariant": "sc"
}
