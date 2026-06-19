// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.102Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "na-semax-amidate",
  "name": "NA Semax Amidate",
  "image": "/peptides/na-semax-amidate.png",
  "accentColor": "#22d3ee",
  "tagColor": "rgba(34,211,238,0.16)",
  "tagText": "#22d3ee",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 400,
  "shortDesc": "N-acetylowany, amidowany Semax, dłuższy t½, silniejszy nootropowy",
  "description": "NA Semax Amidate (N-Acetyl Semax Amidate) to stabilizowany Semax z N-acetylacją + C-amidacją: dłuższy t½ i silniejszy, trwalszy efekt nootropowy. Dostępny w dwóch formach: iniekcja podskórna i spray donosowy. Research chemical, ograniczone dane humanitarne, brak peer-reviewed badań klinicznych.",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Stabilizowany Semax"
    },
    {
      "label": "Struktura",
      "value": "Ac-Met-Glu-His-Phe-Pro-Gly-Pro-NH₂"
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
  "dosageInfo": "Anegdotyczny protokół badawczy: 200–600 µg/dzień (SC lub IN). Ograniczone dane humanitarne, brak peer-reviewed badań klinicznych.",
  "studies": [],
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/na-semax-amidate.png",
      "dosing": "200–600 μg SC/dzień (anegdotyczny protokół badawczy, ograniczone dane humanitarne)",
      "halfLife": "~30–60 min w osoczu (N-acetyl + amidacja = wyższa stabilność enzymatyczna niż Semax)",
      "halfLifeActive": "~24+ h (OUN)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research-chemical analog Semaxu (modyfikacja N-acetyl + C-amid). Hipotetyczny dłuższy t½ vs Semax. Ograniczone dane humanitarne.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/dzień",
        "note": "Anegdotyczny zakres dawkowania research chemical, NIE peer-reviewed RCT. Fiolka 5 mg + 2 ml wody BAC = 2500 μg/ml."
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
      "image": "/peptides/na-semax-amidate.png",
      "dosing": "200–600 μg/dzień donosowo (community route)",
      "halfLife": "~10–15 min w osoczu",
      "halfLifeActive": "~24+ h (OUN)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 min",
      "routeNote": "Research-chemical trasa IN, protokoły społecznościowe. Brak peer-reviewed danych.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg IN/dzień",
        "note": "Research-chemical recon: fiolka 5 mg + 5 ml sterylnej wody BAC + przeniesienie do butelki sprayu donosowego. Anegdotyczne dawkowanie."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 5 mg + 5 ml sterylnej wody bakteriostatycznej",
          "Powoli wstrzyknąć wodę na ściankę fiolki, delikatnie zakręcić (NIE potrząsać)",
          "Przenieść do sterylnej butelki sprayu donosowego (pompka 50 μl/puff = ~50 μg/puff)",
          "Stężenie: 1000 μg/ml — 1 puff = ~50 μg, 4–12 puffów/dzień w zależności od dawki",
          "Przechowywanie: w lodówce (2–8°C), maks. 28 dni; przed użyciem priming 2–3 pustych puffów"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
