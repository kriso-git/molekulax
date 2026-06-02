// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.085Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "melanotan-2",
  "name": "Melanotan-2",
  "image": "/peptides/melanotan-2.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.16)",
  "tagText": "#fbbf24",
  "defaultVialMg": 10,
  "defaultBacMl": 2,
  "defaultDoseMcg": 500,
  "shortDesc": "Syntetyczny analog α-MSH: modulacja pigmentacji i libido",
  "description": "Melanotan-2 (MT-II) to syntetyczny cykliczny heptapeptydowy analog hormonu stymulującego melanocyty α (α-MSH), pierwotnie opracowany na University of Arizona dla badań nad profilaktyką raka skóry. Jest niewybiórczym agonistą receptorów melanokortynowych MC1R, MC3R, MC4R i MC5R.\n\nGłówne działanie przez aktywację MC1R wzmaga syntezę melaniny (melanogeneza), dając ciemniejszą, \"wewnętrzną\" opaleniznę przy minimalnej ekspozycji na UV. Aktywacja MC4R wywołuje działania na libido, co doprowadziło do opracowania PT-141 (bremelanotydu). Udokumentowano też tłumienie apetytu.\n\nDostępny w dwóch formach: iniekcja podskórna (community-standard) i spray donosowy (eksperymentalny, niższa biodostępność).",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Cykliczny heptapeptyd (agonista MC1-5R)"
    },
    {
      "label": "Struktura",
      "value": "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂"
    },
    {
      "label": "Masa cząsteczkowa",
      "value": "~1024 Da"
    },
    {
      "label": "Obszar docelowy",
      "value": "Pigmentacja skóry, libido"
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
  "dosageInfo": "Typowy protokół badawczy, faza ładowania: 250–500 mcg/dobę podskórnie przez ~10–20 dni (zależnie od typu skóry). Podtrzymanie: 500–1000 mcg, 1–2× w tygodniu. Dawkowanie przed snem zmniejsza nudności. Fiolka 10 mg rozcieńczona 2 ml wody BAC daje 5000 mcg/ml. Ekspozycja na UV nadal potrzebna do uruchomienia opalenizny.",
  "studies": [
    {
      "tag": "Badanie przedkliniczne",
      "tagColor": "rgba(245,158,11,0.16)",
      "tagText": "#fbbf24",
      "title": "Melanotan-II: Investigation of the inducer and facilitator effects on penile erection in anaesthetized rat",
      "authors": "Giuliano F, Bernabé J, Alexandre L, et al.",
      "journal": "Neuroscience",
      "year": "2006",
      "pmid": "16360286",
      "url": "https://pubmed.ncbi.nlm.nih.gov/16360286/",
      "finding": "MT-II wywołuje zależny od dawki efekt pro-erekcyjny poprzez centralną aktywację receptorów melanokortyny."
    }
  ],
  "anecdote": "Użytkownicy zwykle zauważają efekty Melanotan-2 w ciągu pierwszych kilku dawek, zwłaszcza zmiany opalenizny i libido. Nudności i zaczerwienienie są częstymi skutkami ubocznymi, ale rozwój opalenizny jest znacznie szybszy niż w przypadku Melanotan-1. Związek jest ogólnie bardziej agresywny, ale znacznie silniejszy w zakresie pigmentacji i jest zwykle stosowany w krótkich cyklach.\n\nMelanotan-2 podaje się donosowo lub poprzez iniekcję podskórną, z dawkowaniem podobnym do Melanotan-1. Wymagana jest ekspozycja na promieniowanie UV, więc najlepiej podawać go przed opalaniem.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/Melanotan-2.png",
      "dosing": "0,5–1 mg SC co 1–3 dni (community-standard loading + maintenance)",
      "halfLife": "~33 h w osoczu (dłuższy niż MT-1)",
      "halfLifeActive": "~dni (MC1R/MC4R downstream melanogeneza + libido)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "30–60 min",
      "routeNote": "Trasa community-standard (off-label opalanie + libido). Rozpoczyna się dawką ładującą, potem faza podtrzymująca.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.25, "medium": 0.5, "high": 1.0 },
        "unit": "mg SC/dawkę",
        "note": "Loading: 0,25 mg/dzień przez 7-10 dni, stopniowe zwiększanie do 0,5-1 mg. Maintenance: 0,5-1 mg co 1-3 dni."
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
      "dosing": "0,5–1 mg/dzień donosowo (mniej skuteczny niż SC, wymagane wyższe dawki)",
      "halfLife": "~5–10 min w osoczu",
      "halfLifeActive": "~dni (MC1R/MC4R downstream)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "15–30 min",
      "routeNote": "Trasa eksperymentalna, niższa biodostępność. Protokół ładowania nie zalecany w IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg IN/dzień",
        "note": "Research-chemical recon: fiolka 10 mg + 5 ml sterylnej wody + przeniesienie do butelki sprayu donosowego. 0,5-2 mg/dzień (community off-label dosing)."
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
