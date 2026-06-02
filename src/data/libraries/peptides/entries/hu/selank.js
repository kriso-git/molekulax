// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.057Z
// Edit this file directly to update the HU body; do not re-run the script.

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
  "shortDesc": "Tuftsin-analóg, szorongáscsökkentő nootróp",
  "description": "A Selank a tuftsin (Thr-Lys-Pro-Arg) C-terminálisan toldott analógja, Oroszországban anxiolytikumként regisztrált peptid. Két formában érhető el: szubkután injekció (research-protokoll) és intranazális spray (orosz klinikai gyakorlat primary route).",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Tuftsin analog"
    },
    {
      "label": "Szerkezet",
      "value": "Thr-Lys-Pro-Arg-Pro-Gly-Pro"
    },
    {
      "label": "Státusz",
      "value": "Regisztrált RU"
    },
    {
      "label": "Beadás",
      "value": "Intranazális"
    },
    {
      "label": "Tárolás",
      "value": "2–8°C"
    },
    {
      "label": "Forrás",
      "value": "Placeholder, kép később"
    }
  ],
  "dosageInfo": "Kutatási: 250–750 µg intranazálisan naponta 2–3×, 7–14 napos kúrákban.",
  "studies": [
    {
      "tag": "Kutatás",
      "tagColor": "rgba(103,232,249,0.16)",
      "tagText": "#67e8f9",
      "title": "Peptide-based Anxiolytics: The Molecular Aspects of Heptapeptide Selank Biological Activity",
      "authors": "Vyunova TV, Andreeva LA, Shevchenko KV, et al.",
      "journal": "Protein Pept Lett",
      "year": "2018",
      "pmid": "30255741",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30255741/",
      "finding": "A Selank molekuláris vizsgálata: anxiolytic + immunomodulátoros hatások GABA-rendszer modulációján keresztül."
    }
  ],
  "anecdote": "A Selankra vonatkozó anekdotikus beszámolók tükrözik a Semaxét: egyes felhasználók egyértelmű hatásokat észlelnek, mások nem. Egy gyakori beszámoló szerint 500 mcg intranazális adagolás csökkentette a szorongást az adagolási napokon a nem adagolási napokhoz képest. Nem nehézkes vagy szedatív, mint a hagyományos anxiolitikumok, de sokak számára megbízhatóan hatékony. A Selankot gyakran kombinálják a Semaxszal egy nyugodt, nootropikum-szerű profilért, a hatások gyakran rövid idővel az adagolás után észlelhetők.\n\nA Selankot leggyakrabban intranazálisan adják be, de a szubkután injekció is működik. Általában naponta vagy szituációhoz kötötten, \"szükség szerint\" adagolják.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/water-vial.png",
      "dosing": "150–450 μg SC/nap (research-protokoll, Kost-tradíció)",
      "halfLife": "~5–7 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer, downstream GABA/serotonergic effects)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 perc",
      "routeNote": "Research-protokoll route: anxiolytic mechanism-tanulmányok. Nyugaton kevésbé elterjedt; a klinikai gyakorlat IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 150, "medium": 300, "high": 450 },
        "unit": "μg SC/nap",
        "note": "Research-protokoll SC dózis. 5 mg vial + 2 ml BAC water = 2500 μg/ml, 60–180 μl per dózis."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 2 ml bakteriosztatikus víz",
          "Lassan az üvegfalra injektáld a vizet, NE direkt a porra",
          "Várj 30 másodpercet, óvatosan forgasd (NE rázd)",
          "Tárolás: hűtőben (2–8°C), max 28 nap"
        ]
      }
    },
    {
      "id": "in",
      "routeId": "in",
      "routeLabel": "Intranazális spray",
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "75–300 μg/nap szippantva (75 μg/csepp, 1–4 csepp/nap)",
      "halfLife": "~5 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer)",
      "bioavailability": "~30–40% (IN, BBB-direct delivery)",
      "onsetTime": "5–15 perc",
      "routeNote": "Orosz klinikai gyakorlat primary route: anxiolytic mechanism, GABA/serotonergic modulation. Regisztrált RU pharmaceutical (Selanco 0.15% nasal drops).",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 75, "medium": 150, "high": 300 },
        "unit": "μg IN/nap",
        "note": "Pre-mixed RU pharma (Selanco 0.15% nasal drops, 75 μg/csepp). 1–4 csepp/nap, 7–14 napos kúrákban."
      }
    }
  ],
  "defaultVariant": "sc"
}
