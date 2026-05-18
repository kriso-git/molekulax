// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.570Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "liraglutide",
  "name": "Liraglutide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Napi GLP-1 receptor agonista, Novo Nordisk Victoza (T2DM) és Saxenda (obesity). A Semaglutide elődje, ~13 órás felezési idő.",
  "description": "A Liraglutide a Novo Nordisk első hosszú-hatású GLP-1 RA terápiája (Victoza T2DM FDA 2010, Saxenda obesity FDA 2014). Napi egyszeri SC adagolás (~13 h felezési idő, vs Semaglutide ~7 nap). Az LEADER trial (Marso 2016 NEJM PMID 27295427) MACE-csökkenést igazolt T2DM-ben. A SCALE-trial (Pi-Sunyer 2015 NEJM PMID 26132939) szerint 56 hét alatt 8% testsúlyvesztés non-diabetic obesitásban. A modern Semaglutide/Tirzepatide a klinikai gyakorlatban Liraglutide-ot többnyire kiváltotta hatékonyság-szempontból (heti vs napi adagolás, jobb fogyás), de pediátriai indikáció (Saxenda 12+ év FDA 2020) és csak napi adagolásra-igénylő speciális esetekben még releváns.",
  "mechanism": "GLP-1 receptor agonista (mint Semaglutide), 97%-os szekvencia-homológia native GLP-1-gyel. Fatty-acid-konjugáció albumin-kötést és lassú elimináció eredményez (~13 h vs native 1-2 perc).",
  "legalStatus": "EU/HU: vényköteles (Victoza T2DM, Saxenda obesity). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (appetite), 8-12 weeks (HbA1c steady-state)",
  "halfLife": "~13 h (once-daily SC dosing)",
  "atcCode": "A10BJ02",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "2-es típusú cukorbetegség (Victoza 0,6-1,8 mg napi)",
    "Krónikus súlykezelés obesitásban (Saxenda 0,6-3,0 mg napi)",
    "Pediátriai obesitás 12-17 év (Saxenda, FDA 2020)"
  ],
  "contraindications": [
    "MTC/MEN-2 anamnézis (FDA boxed warning)",
    "Aktív pankreatitis",
    "Terhesség, szoptatás"
  ],
  "commonSideEffects": [
    "GI: hányinger, hányás, hasmenés (dóziseszkaláció alatt 20-30%)",
    "Súlyos, ritka: pankreatitisz, epekő, retinopátia-progresszió"
  ],
  "cyp450": [
    "Not CYP-metabolized",
    "No major drug interactions"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureák: hipoglikémia-kockázat, dóziscsökkentés"
  ],
  "benefits": [
    "HbA1c csökkenés 1,0-1,5%, testsúlyvesztés átlag 8% (SCALE)",
    "MACE-redukció T2DM-ben (LEADER, HR 0,87)",
    "Pediátriai obesity FDA-jóváhagyott (12+ év)"
  ],
  "studies": [
    {
      "title": "Liraglutide and cardiovascular outcomes in T2DM (LEADER)",
      "authors": "Marso SP, Daniels GH, Brown-Frandsen K et al.",
      "journal": "N Engl J Med. 2016;375(4):311-22.",
      "pmid": "27295427"
    },
    {
      "title": "A randomized, controlled trial of 3.0 mg of liraglutide in weight management (SCALE)",
      "authors": "Pi-Sunyer X, Astrup A, Fujioka K et al.",
      "journal": "N Engl J Med. 2015;373(1):11-22.",
      "pmid": "26132939"
    },
    {
      "title": "Liraglutide for children 12 to less than 18 years of age with obesity (FDA approval, Kelly 2020)",
      "authors": "Kelly AS, Auerbach P, Barrientos-Perez M et al.",
      "journal": "N Engl J Med. 2020;382(22):2117-2128.",
      "pmid": "32233338"
    }
  ],
  "related": [
    "semaglutide",
    "tirzepatide",
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start)",
        "dose": "0.6"
      },
      {
        "phase": "Hét 2 (T2DM)",
        "dose": "1.2"
      },
      {
        "phase": "Hét 3+ (T2DM)",
        "dose": "1.8"
      },
      {
        "phase": "Obesity cél (Saxenda)",
        "dose": "3"
      }
    ],
    "unit": "mg/nap SC",
    "note": "Napi SC injekció (has, comb, felkar). Lassú titráció 1 hét/dózisszint, GI-tolerancia érdekében. T2DM cél 1,2-1,8 mg/nap, obesity cél 3,0 mg/nap."
  }
}
