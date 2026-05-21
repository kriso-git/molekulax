// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.093Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "melanotan-1",
  "name": "Melanotan-1 (Afamelanotide)",
  "image": null,
  "accentColor": "#fdba74",
  "tagColor": "rgba(253,186,116,0.16)",
  "tagText": "#fdba74",
  "defaultVialMg": 16,
  "defaultBacMl": 0,
  "defaultDoseMcg": 16000,
  "shortDesc": "Analog α-MSH, zatwierdzony w protoporfirii erytropoetycznej",
  "description": "Afamelanotyd (Scenesse) to analog α-MSH działający przez MC1R. Zatwierdzony FDA w 2019 r. w EPP do redukcji reakcji fototoksycznych. Dostępny w dwóch formach: iniekcja podskórna (zatwierdzony FDA implant Scenesse + protokół badawczy) i spray donosowy (research route w stylu Hadleya, niższa skuteczność).",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Analog α-MSH"
    },
    {
      "label": "Struktura",
      "value": "[Nle4, D-Phe7]-α-MSH"
    },
    {
      "label": "Status",
      "value": "Zatwierdzony FDA (EPP)"
    },
    {
      "label": "Podanie",
      "value": "Implant SC"
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
  "dosageInfo": "Klinicznie: implant 16 mg co 2 miesiące. Badania SC: 0,5–1 mg/dobę na początku.",
  "studies": [
    {
      "tag": "Badania",
      "tagColor": "rgba(253,186,116,0.16)",
      "tagText": "#fdba74",
      "title": "Afamelanotide for erythropoietic protoporphyria",
      "authors": "Langendonk JG, Balwani M, Anderson KE, et al.",
      "journal": "NEJM",
      "year": "2015",
      "pmid": "26132941",
      "url": "https://pubmed.ncbi.nlm.nih.gov/26132941/",
      "finding": "Afamelanotyd istotnie wydłuża bezbólową ekspozycję na słońce u pacjentów z EPP."
    }
  ],
  "anecdote": "Raporty anegdotyczne opisują Melanotan-1 wytwarzający równomierną, stopniową opaleniznę w połączeniu z 30 minutami dziennej ekspozycji na słońce przy dawce 500 mcg dziennie, z zauważalnym pomarańczowym odcieniem pojawiającym się w ciągu około tygodnia. Skutki uboczne w tym przypadku były minimalne, choć użytkownicy, którzy porównywali oba związki, często preferują Melanotan-2 ze względu na szybszą pigmentację.\n\nMelanotan-1 jest zwykle podawany w postaci sprayu do nosa lub iniekcji podskórnej ze względu na słabą biodostępność doustną. Najlepiej podawać 30-60 minut przed sesją opalania.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/water-vial.png",
      "dosing": "0,16 mg/kg SC protokół badawczy (lub implant Scenesse 16 mg co 2 miesiące, zatwierdzony FDA dla EPP)",
      "halfLife": "~1 h w osoczu",
      "halfLifeActive": "~dni-tygodnie (receptor α-MSH downstream melanogeneza)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "30–60 min",
      "routeNote": "Zatwierdzona FDA trasa Rx (implant Scenesse 16 mg, wskazanie EPP). W protokole badawczym SC iniekcja 0,16 mg/kg.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg SC/dawkę",
        "note": "Loading w protokole badawczym: 0,5–1 mg SC codziennie przez 7 dni; maintenance 1–2 mg dwa razy w tygodniu."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 10 mg + 5 ml wody bakteriostatycznej",
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
      "dosing": "1 mg/dzień donosowo (research route, wczesne badania Hadleya)",
      "halfLife": "~5–10 min w osoczu",
      "halfLifeActive": "~dni (α-MSH downstream)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "15–30 min",
      "routeNote": "Trasa badawcza (eksperymenty Hadleya/Dorra). Znacznie mniej skuteczna niż SC, dlatego wymagane są wyższe dawki.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg IN/dzień",
        "note": "Research-chemical recon: fiolka 10 mg + 5 ml sterylnej wody BAC + przeniesienie do butelki sprayu donosowego. 0,5–2 mg/dzień (dawkowanie badawcze, off-label)."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 10 mg + 5 ml sterylnej wody bakteriostatycznej",
          "Przeniesienie do sterylnej butelki sprayu donosowego",
          "Priming: 2–3 spraye do powietrza przed użyciem"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
