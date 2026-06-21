// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.066Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "adalank",
  "name": "Adalank (NA Selank Amidate)",
  "image": "/peptides/adalank.png",
  "accentColor": "#67e8f9",
  "tagColor": "rgba(103,232,249,0.16)",
  "tagText": "#67e8f9",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 500,
  "shortDesc": "Stabilizált Selank, anxiolytikus + nootróp",
  "description": "Az Adalank (N-Acetyl Selank Amidate) a Selank stabilizált származéka N-acetilációval és C-amidálással, jobb stabilitással és vér-agy gát átjárhatósággal. Két formában érhető el: szubkután injekció és intranazális spray. Research-chemical Selank-analog, korlátozott humán adat, nincs peer-reviewed klinikai vizsgálat.",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Stabilizált Selank"
    },
    {
      "label": "Szerkezet",
      "value": "Ac-Thr-Lys-Pro-Arg-Pro-Gly-Pro-NH₂"
    },
    {
      "label": "Státusz",
      "value": "Kutatás"
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
  "dosageInfo": "Anekdotális research-protokoll: 100–300 µg/nap (SC vagy IN). Korlátozott humán adat, nincs peer-reviewed klinikai vizsgálat.",
  "studies": [],
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/adalank.png",
      "dosing": "100–300 μg SC/nap (anekdotális research-protokoll, korlátozott humán adat)",
      "halfLife": "~10–20 perc plazma (módosított Selank-analog, hipotetikusan hosszabb mint Selank)",
      "halfLifeActive": "~24 óra (központi idegrendszer, anxiolytic downstream)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 perc",
      "routeNote": "Research-chemical Selank-analog. Hipotetikus anxiolytic hatás. Korlátozott humán adat, anekdotális használat.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg SC/nap",
        "note": "Research-chemical anekdotális dózistartomány. NEM peer-reviewed RCT-vel alátámasztott. 5 mg vial + 2 ml BAC water = 2500 μg/ml."
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
      "image": "/peptides/adalank.png",
      "dosing": "100–300 μg/nap szippantva (community-route)",
      "halfLife": "~5–10 perc plazma",
      "halfLifeActive": "~24 óra (központi idegrendszer)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 perc",
      "routeNote": "Research-chemical IN route. Nincs peer-reviewed klinikai adat, community-sourced protokollok.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg IN/nap",
        "note": "Research-chemical recon: 5 mg vial + 5 ml steril BAC water + transfer to nasal spray bottle. Anekdotális dosing."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 5 ml steril bakteriosztatikus víz",
          "Lassan az üvegfalra injektáld a vizet, óvatosan forgasd (NE rázd)",
          "Töltsd át steril orrspray-flakonba (50 μl/puff pumpa, ~50 μg/puff)",
          "Koncentráció: 1000 μg/ml – 1 puff = ~50 μg, 2–6 puff/nap dózistól függően",
          "Tárolás: hűtőben (2–8°C), max 28 nap; használat előtt primingolj 2–3 üres puffot"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
