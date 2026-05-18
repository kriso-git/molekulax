// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.584Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "minoxidil",
  "name": "Minoxidil",
  "image": null,
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "K-csatorna-aktivátor topikális/orális szer (Rogaine, Loniten). Androgenetikus alopecia kezelés 1988 óta. 2-5% topikális standard.",
  "description": "A Minoxidil eredetileg orális antihipertenzív szerként (Loniten 1979) lett kifejlesztve, de a \"mellékhatásként\" megjelenő hipertrichózis miatt topikális formulációt fejlesztettek alopecia kezelésére (Upjohn Rogaine 2% 1988, 5% 1996). A pontos mechanizmus nem teljesen tisztázott — ATP-érzékeny K-csatorna nyitása vazodilatációt és vélhetően hajhagyma-perfúzió-fokozást okoz, de a hajnövekedés stimulációjának molekuláris útja vitatott. Az \"oral low-dose minoxidil\" (LDOM, 0,25-5 mg/nap) elmúlt 5 évben népszerűvé vált alopecia-kezelésre off-label, hatékonyabb mint a topikális (Sinclair 2017 PMID 28349541). A Big-3 alopecia-protokoll (Minoxidil + Finasteride + Ketoconazole) gold-standard.",
  "mechanism": "ATP-érzékeny K-csatorna nyitása → vazodilatáció + hajhagyma-perfúzió. Másodlagos: szulfo-transzferáz-aktivált aktív metabolit (Minoxidil-szulfát), prosztaglandin-E2 emelkedés.",
  "legalStatus": "Topikális (2-5%): OTC EU/USA/HU. Orális (Loniten): vényköteles. Off-label LDOM: vényköteles (alacsony orális dózis, alopecia-cél).",
  "bioavailability": "≥90% (orális, GI traktusból \"at least 90% absorbed\" — FDA Loniten label; antihypertenzív oral forma)",
  "onsetTime": "3-6 months (visible hair regrowth)",
  "halfLife": "~4 h (oral), topical absorption minimal",
  "atcCode": "D11AX01 (topical) / C02DC01 (oral)",
  "prescriptionStatus": "OTC topikális, vényköteles orális (Loniten + LDOM)",
  "indications": [
    "Androgenetikus alopecia (férfi + női mintázat, topikális)",
    "Off-label LDOM: súlyos alopecia (Sinclair 2017 evidencia)",
    "Rezisztens hipertenzió (Loniten oral, ritka)"
  ],
  "contraindications": [
    "Akut MI vagy aktív iszkémia (orális)",
    "Pheochromocytoma"
  ],
  "commonSideEffects": [
    "Topikális: skalp-irritáció, viszketés, hipertrichózis (arc, váll, contam-zone)",
    "Orális: edéma (boka, lokális), reflex-tachycardia, perikardiális effúzió (ritka)",
    "Kezdeti shedding (telogén-effluvium) 1-2 hónap körül, mint Finasteride-en"
  ],
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteride: KOMPLEMENTER mechanizmus, gold-standard kombináció",
    "Antihipertenzív szerek: orális esetén additív hipotenzió"
  ],
  "benefits": [
    "OTC elérhető topikális forma — alacsony belépési küszöb",
    "LDOM hatékonyabb mint topikális (Sinclair 2017)",
    "Komplementer Finasteride-hez (Big-3 protokoll)"
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
    "note": "Standard: 5% topikális oldat vagy hab 1 ml 2x/nap (reggel + este) száraz skalpra. Nőknél a 2% kevésbé irritáló alternatíva. Off-label oral LDOM: 0,25-5 mg/nap egy dózisban. Hatás 3-6 hónap. Elhagyásnál 6-12 hónap alatt visszahúzódik a növekedés."
  }
}
