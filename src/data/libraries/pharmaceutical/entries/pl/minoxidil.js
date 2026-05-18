// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.625Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "minoxidil",
  "name": "Minoxidil",
  "image": null,
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Aktywator kanałów K, środek miejscowy/doustny (Rogaine, Loniten). Leczenie łysienia androgenowego od 1988. Standard 2-5% miejscowy.",
  "description": "Minoksydyl pierwotnie opracowany jako doustny lek przeciwnadciśnieniowy (Loniten 1979), ale \"działanie niepożądane\" hipertrychoza doprowadziła do formy miejscowej dla łysienia (Upjohn Rogaine 2% 1988, 5% 1996). Mechanizm nie do końca wyjaśniony — otwieranie kanałów K wrażliwych na ATP daje rozszerzenie naczyń i prawdopodobnie wzmocnienie perfuzji mieszków, ale molekularny szlak stymulacji wzrostu włosów jest dyskutowany. \"Doustny minoksydyl w niskiej dawce\" (LDOM, 0,25-5 mg/dzień) stał się popularny w ostatnich 5 latach off-label dla łysienia, skuteczniejszy niż miejscowy (Sinclair 2017 PMID 28349541).",
  "mechanism": "Otwieranie kanałów K wrażliwych na ATP → rozszerzenie naczyń + perfuzja mieszków. Wtórnie: aktywny metabolit aktywowany sulfotransferazą.",
  "legalStatus": "Miejscowy (2-5%): OTC UE/USA/PL. Doustny (Loniten): na receptę. Off-label LDOM: na receptę.",
  "onsetTime": "3-6 months (visible hair regrowth)",
  "halfLife": "~4 h (oral), topical absorption minimal",
  "atcCode": "D11AX01 (topical) / C02DC01 (oral)",
  "prescriptionStatus": "OTC miejscowy, na receptę doustny (Loniten + LDOM)",
  "indications": [
    "Łysienie androgenowe (typ męski + żeński, miejscowo)",
    "Off-label LDOM: ciężkie łysienie (dowody Sinclair 2017)",
    "Oporne nadciśnienie (Loniten doustny, rzadkie)"
  ],
  "contraindications": [
    "Ostre MI lub aktywne niedokrwienie (doustnie)",
    "Guz chromochłonny"
  ],
  "commonSideEffects": [
    "Miejscowo: podrażnienie skóry głowy, świąd, hipertrychoza (twarz, ramię)",
    "Doustnie: obrzęk (kostki, lokalny), tachykardia odruchowa, wysięk osierdziowy (rzadki)",
    "Początkowy shedding (telogen effluvium) około 1-2 miesiąca"
  ],
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteryd: UZUPEŁNIAJĄCY mechanizm, złoty standard",
    "Leki przeciwnadciśnieniowe: doustnie addytywna hipotensja"
  ],
  "benefits": [
    "Forma miejscowa OTC — niski próg wejścia",
    "LDOM skuteczniejszy niż miejscowy (Sinclair 2017)",
    "Uzupełnia finasteryd (protokół Big-3)"
  ],
  "studies": [
    {
      "title": "Low-dose oral minoxidil for hair loss",
      "authors": "Sinclair R.",
      "journal": "J Am Acad Dermatol. 2018;79(1):104-105.",
      "pmid": "28349541"
    },
    {
      "title": "Topical minoxidil for androgenetic alopecia: meta-analysis",
      "authors": "Suchonwanit P, Thammarucha S, Leerunyakul K.",
      "journal": "Drug Des Devel Ther. 2019;13:2777-2786.",
      "pmid": "31496654"
    }
  ],
  "related": [
    "finasteride"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2,
      "medium": 5,
      "high": 5
    },
    "unit": "% topikális 2x/nap",
    "note": "Standard: 5% roztwór lub pianka miejscowo 1 ml 2x/dzień (rano + wieczorem) na suchą skórę. U kobiet 2% mniej drażniący. Off-label LDOM doustny: 0,25-5 mg/dzień jedna dawka. Efekt 3-6 miesięcy. Po odstawieniu wzrost cofa się w 6-12 miesięcy."
  }
}
