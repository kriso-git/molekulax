// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.085Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "pt-141",
  "name": "PT-141",
  "image": "/peptides/pt-141.png",
  "accentColor": "#fda4af",
  "tagColor": "rgba(244,63,94,0.14)",
  "tagText": "#fda4af",
  "defaultVialMg": 10,
  "defaultBacMl": 2,
  "defaultDoseMcg": 1750,
  "shortDesc": "Agonista receptora melanokortyny: zatwierdzony przez FDA (bremelanotyd)",
  "description": "PT-141 (bremelanotyd) to syntetyczny agonista receptorów melanokortyny działający na MC3R i MC4R. FDA zatwierdziła go w 2019 r. do leczenia zaburzenia hipoaktywnego pożądania seksualnego (HSDD) u kobiet przed menopauzą jako Vyleesi.\n\nW odróżnieniu od inhibitorów PDE5 (Viagra, Cialis) działa przez OUN, nie naczyniowo, badany również przy przeciwwskazaniach naczyniowych.\n\nDostępny w dwóch formach: iniekcja podskórna (zatwierdzony FDA auto-injector Vyleesi dla HSDD) i spray donosowy (pierwotna trasa badawcza Palatin).",
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Agonista receptora melanokortyny (MC3R/MC4R)"
    },
    {
      "label": "Struktura",
      "value": "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH"
    },
    {
      "label": "Masa cząsteczkowa",
      "value": "~1025 Da"
    },
    {
      "label": "Obszar docelowy",
      "value": "Popęd seksualny (HSDD)"
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
  "dosageInfo": "Dawka zatwierdzona przez FDA (HSDD): 1,75 mg podskórnie, 45 min przed aktywnością seksualną. Maks. 1× / 24 h, maks. 1× / 8 dni. Zalecane wstępne podanie leku przeciwwymiotnego.",
  "studies": [
    {
      "tag": "RCT fazy III",
      "tagColor": "rgba(217,119,6,0.15)",
      "tagText": "#fcd34d",
      "title": "Bremelanotide for Hypoactive Sexual Desire Disorder",
      "authors": "Kingsberg SA, Clayton AH, Portman D, et al.",
      "journal": "Obstetrics & Gynecology",
      "year": "2019",
      "pmid": "31599840",
      "url": "https://pubmed.ncbi.nlm.nih.gov/31599840/",
      "finding": "Znacząca poprawa objawów HSDD w dwóch RCT fazy 3 z korzystnym profilem bezpieczeństwa."
    }
  ],
  "anecdote": "PT-141 jest szeroko stosowanym i wyraźnie odczuwalnym związkiem libido. Użytkownicy często zgłaszają silny, nieco spontaniczny wzrost pożądania – nie tylko łagodną poprawę – bez zależności od innych czynników, ponieważ działa bezpośrednio poprzez receptory melanokortyny. Nudności są bardzo częstym skutkiem ubocznym, szczególnie przy wyższych dawkach lub na początku stosowania. Zaczerwienienie lub przejściowy wzrost ciśnienia krwi są również zgłaszane. W połączeniu z inhibitorem PDE5, takim jak Tadalafil lub Sildenafil, użytkownicy opisują wzmożone pożądanie i wydajność.\n\nPT-141 jest zwykle podawany podskórnie, jak większość peptydów. Dawkowanie jest wysoce indywidualne.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Iniekcja podskórna",
      "image": "/peptides/pt-141.png",
      "dosing": "1,75 mg SC PRN (auto-injector Vyleesi, maks. 8x/miesiąc protokół FDA HSDD)",
      "halfLife": "~2,7 h w osoczu",
      "halfLifeActive": "~16 h (MC3R/MC4R downstream sexual arousal pathway)",
      "bioavailability": "~100% (SC)",
      "onsetTime": "30–60 min",
      "routeNote": "Zatwierdzona FDA trasa Rx (auto-injector Vyleesi). Wskazanie HSDD dla kobiet przed menopauzą, maks. 8x/miesiąc.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 1.75, "medium": 1.75, "high": 1.75 },
        "unit": "mg SC/dawkę PRN",
        "note": "Standardowa dawka auto-injectora Vyleesi: 1,75 mg SC 45 min przed pożądaną aktywnością seksualną. Maks. 8x/miesiąc protokół FDA."
      },
      "reconstitute": {
        "steps": [
          "Liofilizowana fiolka 10 mg + 2 ml wody bakteriostatycznej (research-chemical recon)",
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
      "image": "/peptides/pt-141.png",
      "dosing": "10–20 mg/dzień donosowo (pierwotna trasa badawcza Palatin, często wymaga wyższych dawek)",
      "halfLife": "~5–10 min w osoczu",
      "halfLifeActive": "~16 h (MC3R/MC4R)",
      "bioavailability": "~20–30% (IN)",
      "onsetTime": "15–30 min",
      "routeNote": "Pierwotna trasa badawcza Palatin (rozwój pre-FDA-Vyleesi). 4–20 mg/dzień dawkowanie badawcze, obecnie nie oficjalna forma.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 4, "medium": 10, "high": 20 },
        "unit": "mg IN/dzień",
        "note": "Research-chemical recon: fiolka 10 mg + 5 ml sterylnej wody BAC + przeniesienie do butelki sprayu donosowego. 4–20 mg/dzień (off-label dawkowanie badawcze)."
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
