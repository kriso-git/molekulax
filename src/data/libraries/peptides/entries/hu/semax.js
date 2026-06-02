// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.056Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "semax",
  "name": "Semax",
  "image": "/peptides/semax.png",
  "accentColor": "#22d3ee",
  "tagColor": "rgba(34,211,238,0.16)",
  "tagText": "#22d3ee",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 600,
  "shortDesc": "ACTH(4-10) analóg, nootróp orrspray",
  "description": "A Semax (Met-Glu-His-Phe-Pro-Gly-Pro) az ACTH(4-10) analógja, Oroszországban iszkémiás stroke-ra és kognitív funkciók javítására regisztrált peptid. Két formában érhető el: szubkután injekció (research-protokoll) és intranazális spray (orosz klinikai gyakorlat primary route).",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "ACTH(4-10) analog"
    },
    {
      "label": "Szerkezet",
      "value": "Met-Glu-His-Phe-Pro-Gly-Pro"
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
  "dosageInfo": "Kutatási / klinikai: 150–600 µg intranazálisan naponta 1–2×, 5–14 napos kúrákban.",
  "studies": [
    {
      "tag": "Kutatás",
      "tagColor": "rgba(34,211,238,0.16)",
      "tagText": "#22d3ee",
      "title": "Neuroprotective and antiamnesic effects of Semax during experimental ischemic infarction of the cerebral cortex",
      "authors": "Romanova GA, Barskov IV, Ostrovskaya RU, et al.",
      "journal": "Bull Exp Biol Med",
      "year": "2006",
      "pmid": "17603664",
      "url": "https://pubmed.ncbi.nlm.nih.gov/17603664/",
      "finding": "A Semax neuroprotektív és antiamnesticus hatást fejt ki kísérletes iszkémiás kortikális infarktus során, intranazális beadással."
    }
  ],
  "anecdote": "A Semax-szal kapcsolatos közösségi beszámolók vegyesek: egyes felhasználók hatékonynak találják, mások csekély szubjektív hatásról számolnak be, akár szubkután beadás esetén is. Akik reagálnak rá, gyakran \"tiszta fókusz\" érzésről beszélnek — finom, de észrevehető. A neuroplaszticitásra gyakorolt hatások feltehetően fokozatosan épülnek fel, mivel az agyi kémiai változások nem azonnaliak. A Semaxot egyes országokban (különösen Oroszországban) klinikailag használják, de Nyugaton kevésbé elterjedt.\n\nA Semaxot leggyakrabban intranazálisan adják be, és kutatási környezetben általában ciklusokban használják (néhány hét bevitel, majd szünet). A rendelkezésre álló adatok arra utalnak, hogy a Semax növelheti a dopamin- és szerotonin-tónust, emelheti a BDNF-szintet, és segítheti a hipoxia tűrőképességet.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/water-vial.png",
      "defaultVialMg": 5,
      "defaultBacMl": 2,
      "defaultDoseMcg": 200,
      "dosing": "200–600 μg SC/nap (research-protokoll, kúrákban 5–14 nap)",
      "halfLife": "~20 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer downstream BDNF-hatások)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 perc",
      "routeNote": "Research-protokoll route: BBB-átjutás, BDNF-modulálás, kognitív teljesítmény-tanulmányok. Nyugaton kevésbé elterjedt, a klinikai gyakorlat IN.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/nap",
        "note": "SC research-dose. Standard 5 mg lyophilized vial + 2 ml bakteriosztatikus víz = 2500 μg/ml = 80 μl per 200 μg dózis."
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
      "dosing": "150–600 μg/nap szippantva (50 μg/csepp, 2–12 csepp/nap)",
      "halfLife": "~5–10 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer)",
      "bioavailability": "~30–40% (IN, BBB-direct delivery)",
      "onsetTime": "5–15 perc",
      "routeNote": "Orosz klinikai gyakorlat primary route: stroke akut-fázis BBB-direct delivery, kognitív funkciók javítása, ACTH-axis modulálás. Regisztrált RU pharmaceutical (Semax 0.1% nasal drops).",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 150, "medium": 300, "high": 600 },
        "unit": "μg IN/nap",
        "note": "Pre-mixed RU pharma (Semax 0.1% nasal drops, 50 μg/csepp). 3–12 csepp/nap, oszd el 1–2 dózisra. 5–14 napos kúrákban."
      }
    }
  ],
  "defaultVariant": "sc"
}
