// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.102Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "adamax",
  "name": "Adamax",
  "image": "/peptides/adamax.png",
  "accentColor": "#a5b4fc",
  "tagColor": "rgba(165,180,252,0.16)",
  "tagText": "#a5b4fc",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 300,
  "shortDesc": "Semax z adamantanem, wzmocniona przenikalność BBB",
  "description": "Adamax to wzmocniona pochodna Semaxu: N-acetylacja + C-koniugacja z adamantanem. Grupa adamantanowa znacznie poprawia przenikanie BBB i lipofilność. Dostępny w dwóch formach: iniekcja podskórna (protokół badawczy) i spray donosowy (community route). Research chemical w szarej strefie, brak peer-reviewed badań klinicznych.",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Peptyd sprzężony z adamantanem"
    },
    {
      "label": "Struktura",
      "value": "Ac-Semax + koniugat adamantanu"
    },
    {
      "label": "Status",
      "value": "Badawczy (przedkliniczny)"
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
  "dosageInfo": "Anegdotyczny protokół badawczy: 100–300 µg/dzień (SC lub IN). Brak długoterminowych danych bezpieczeństwa, brak peer-reviewed badań klinicznych.",
  "studies": [],
  "anecdote": "Adamax jest pozycjonowany jako teoretyczne ulepszenie Semaxu, z poprawioną penetracją BBB, dłuższym czasem działania i silniejszymi efektami neurotroficznymi na papierze. Choć wciąż potrzebne są bardziej definitywne dane, raporty anegdotyczne opisują jaśniejsze myślenie, lepszy tok myślenia i płynniejszą kognicję. Liczne dyskusje społecznościowe dokumentują doświadczenia użytkowników z Adamaxem, choć wszystkie raporty pozostają anegdotyczne – nie istnieje żadne peer-reviewed badanie kliniczne.\n\nAdamax dąży do podobnych korzyści neurotroficznych i nootropowych jak Semax, ale z większym naciskiem na utrzymaną aktywność dzięki poprawionej przepuszczalności BBB i dłuższemu czasowi działania. Jako research chemical w szarej strefie, wszelkie użycie na własne ryzyko, w oparciu o protokoły społecznościowe.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/adamax.png",
      "dosing": "100–300 μg SC/dzień (anegdotyczny protokół badawczy, ograniczone dane humanitarne)",
      "halfLife": "~30 min w osoczu (modyfikacja adamantylowa zwiększa stabilność enzymatyczną)",
      "halfLifeActive": "~24+ h (OUN, hipotetyczna penetracja BBB)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 min",
      "routeNote": "Research chemical analog Semaxu (modyfikacja adamantylowa). Ograniczone dane humanitarne, anegdotyczne użycie.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg SC/dzień",
        "note": "Anegdotyczny zakres dawkowania research chemical. NIE poparty peer-reviewed RCT. Fiolka 5 mg + 2 ml wody BAC = 2500 μg/ml, 80 μl na dawkę 200 μg."
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
      "image": "/peptides/adamax.png",
      "dosing": "100–300 μg/dzień donosowo (community route, ograniczone dane humanitarne)",
      "halfLife": "~5–10 min w osoczu",
      "halfLifeActive": "~24+ h (OUN)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 min",
      "routeNote": "Research chemical IN route, anegdotyczne użycie. Brak peer-reviewed badań klinicznych.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg IN/dzień",
        "note": "Research-chemical recon: fiolka 5 mg + 5 ml sterylnej wody BAC + przeniesienie do butelki sprayu donosowego. Anegdotyczny zakres dawkowania, NIE protokół kliniczny."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 5 mg + 5 ml sterylnej wody bakteriostatycznej",
          "Powoli wstrzyknąć wodę na ściankę fiolki, delikatnie zakręcić (NIE potrząsać)",
          "Przenieść do sterylnej butelki sprayu donosowego (pompka 50 μl/puff = ~50 μg/puff)",
          "Stężenie: 1000 μg/ml – 1 puff = ~50 μg, 2–6 puffów/dzień w zależności od dawki",
          "Przechowywanie: w lodówce (2–8°C), maks. 28 dni; przed użyciem przeprowadzić priming 2–3 pustych puffów"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
