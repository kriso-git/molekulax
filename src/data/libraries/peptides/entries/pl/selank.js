// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.091Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "selank",
  "name": "Selank",
  "image": "/peptides/selank.png",
  "accentColor": "#67e8f9",
  "tagColor": "rgba(103,232,249,0.16)",
  "tagText": "#67e8f9",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 750,
  "shortDesc": "Analog tuftsyny, anksjolityk nootropowy",
  "description": "Selank to przedłużony C-końcowo analog tuftsyny (Thr-Lys-Pro-Arg), w Rosji zarejestrowany jako anksjolityk. Dostępny w dwóch formach: iniekcja podskórna (protokół badawczy) i spray donosowy (rosyjska praktyka kliniczna – primary route).",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Analog tuftsyny"
    },
    {
      "label": "Struktura",
      "value": "Thr-Lys-Pro-Arg-Pro-Gly-Pro"
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
  "dosageInfo": "Badania: 250–750 µg donosowo 2–3× dziennie, 7–14 dni.",
  "studies": [
    {
      "tag": "Badania",
      "tagColor": "rgba(103,232,249,0.16)",
      "tagText": "#67e8f9",
      "title": "Peptide-based Anxiolytics: The Molecular Aspects of Heptapeptide Selank Biological Activity",
      "authors": "Vyunova TV, Andreeva LA, Shevchenko KV, et al.",
      "journal": "Protein Pept Lett",
      "year": "2018",
      "pmid": "30255741",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30255741/",
      "finding": "Molekularny przegląd Selanka: efekt anksjolityczny + immunomodulacyjny przez modulację układu GABA."
    }
  ],
  "anecdote": "Doniesienia anegdotyczne na temat Selanku odzwierciedlają te o Semaxie: niektórzy użytkownicy zauważają wyraźne efekty, inni nie. Jedna powszechna relacja opisuje 500 mcg donosowo łagodzące lęk w dni dawkowania w porównaniu do dni bez dawki. Nie jest ciężki ani sedatywny jak konwencjonalne anksjolityki, ale jest niezawodnie skuteczny dla wielu osób. Selank jest powszechnie łączony z Semaxem dla spokojnego, nootropowego profilu.\n\nSelank jest najczęściej podawany donosowo, choć iniekcja podskórna również działa. Zazwyczaj podawany codziennie lub sytuacyjnie \"na żądanie\".",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/water-vial.png",
      "dosing": "150–450 μg SC/dzień (protokół badawczy, tradycja Kosta)",
      "halfLife": "~5–7 min w osoczu",
      "halfLifeActive": "~24 h (OUN, downstream GABA/serotonergiczne)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Trasa protokołu badawczego: badania nad mechanizmem anksjolitycznym. Mniej powszechna na Zachodzie; praktyka kliniczna to IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 150, "medium": 300, "high": 450 },
        "unit": "μg SC/dzień",
        "note": "Dawka badawcza SC. Fiolka 5 mg + 2 ml wody BAC = 2500 μg/ml, 60–180 μl na dawkę."
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
      "dosing": "75–300 μg/dzień donosowo (75 μg/kropla, 1–4 kropli/dzień)",
      "halfLife": "~5 min w osoczu",
      "halfLifeActive": "~24 h (OUN)",
      "bioavailability": "~30–40% (IN, BBB-direct delivery)",
      "onsetTime": "5–15 min",
      "routeNote": "Rosyjska praktyka kliniczna – primary route: mechanizm anksjolityczny, modulacja GABA/serotoninergiczna. Zarejestrowany RU pharmaceutical (Selanco 0,15% krople donosowe).",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 75, "medium": 150, "high": 300 },
        "unit": "μg IN/dzień",
        "note": "Pre-mieszany RU pharma (Selanco 0,15% krople donosowe, 75 μg/kropla). 1–4 kropli/dzień, cykle 7–14 dni."
      }
    }
  ],
  "defaultVariant": "sc"
}
