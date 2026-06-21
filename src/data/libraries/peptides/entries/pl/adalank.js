// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.102Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "adalank",
  "name": "Adalank (NA Selank Amidate)",
  "image": "/peptides/adalank.png",
  "accentColor": "#67e8f9",
  "tagColor": "rgba(103,232,249,0.16)",
  "tagText": "#67e8f9",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 500,
  "shortDesc": "Stabilizowany Selank, anksjolityczny + nootropowy",
  "description": "Adalank (N-Acetyl Selank Amidate) to stabilizowana pochodna Selanka z N-acetylacją i C-amidacją, lepsza stabilność i przenikalność BBB. Dostępny w dwóch formach: iniekcja podskórna i spray donosowy. Research-chemical analog Selanka, ograniczone dane humanitarne, brak peer-reviewed badań klinicznych.",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Stabilizowany Selank"
    },
    {
      "label": "Struktura",
      "value": "Ac-Thr-Lys-Pro-Arg-Pro-Gly-Pro-NH₂"
    },
    {
      "label": "Status",
      "value": "Badawczy"
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
  "dosageInfo": "Anegdotyczny protokół badawczy: 100–300 µg/dzień (SC lub IN). Ograniczone dane humanitarne, brak peer-reviewed badań klinicznych.",
  "studies": [],
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/adalank.png",
      "dosing": "100–300 μg SC/dzień (anegdotyczny protokół badawczy, ograniczone dane humanitarne)",
      "halfLife": "~10–20 min w osoczu (zmodyfikowany analog Selanka, hipotetycznie dłuższy niż Selank)",
      "halfLifeActive": "~24 h (OUN, anksjolityczny downstream)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research-chemical analog Selanka. Hipotetyczny efekt anksjolityczny. Ograniczone dane humanitarne, anegdotyczne użycie.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg SC/dzień",
        "note": "Anegdotyczny zakres dawkowania research chemical. NIE poparty peer-reviewed RCT. Fiolka 5 mg + 2 ml wody BAC = 2500 μg/ml."
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
      "image": "/peptides/adalank.png",
      "dosing": "100–300 μg/dzień donosowo (community route)",
      "halfLife": "~5–10 min w osoczu",
      "halfLifeActive": "~24 h (OUN)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 min",
      "routeNote": "Research-chemical trasa IN. Brak peer-reviewed danych klinicznych, protokoły społecznościowe.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg IN/dzień",
        "note": "Research-chemical recon: fiolka 5 mg + 5 ml sterylnej wody BAC + przeniesienie do butelki sprayu donosowego. Anegdotyczne dawkowanie."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 5 mg + 5 ml sterylnej wody bakteriostatycznej",
          "Powoli wstrzyknąć wodę na ściankę fiolki, delikatnie zakręcić (NIE potrząsać)",
          "Przenieść do sterylnej butelki sprayu donosowego (pompka 50 μl/puff = ~50 μg/puff)",
          "Stężenie: 1000 μg/ml – 1 puff = ~50 μg, 2–6 puffów/dzień w zależności od dawki",
          "Przechowywanie: w lodówce (2–8°C), maks. 28 dni; przed użyciem priming 2–3 pustych puffów"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
