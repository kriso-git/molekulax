// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.066Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "na-semax-amidate",
  "name": "NA Semax Amidate",
  "image": "/peptides/na-semax-amidate.png",
  "accentColor": "#22d3ee",
  "tagColor": "rgba(34,211,238,0.16)",
  "tagText": "#22d3ee",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 400,
  "shortDesc": "N-acetilált, amidált Semax, hosszabb féléletidő, erősebb nootróp",
  "description": "A NA Semax Amidate (N-Acetyl Semax Amidate) a Semax stabilizált változata: N-terminális acetiláció + C-terminális amidáció. Eredmény: hosszabb féléletidő, erősebb és tartósabb nootróp hatás. Két formában érhető el: szubkután injekció és intranazális spray. Research-chemical, korlátozott humán adat, nincs peer-reviewed klinikai vizsgálat.",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Stabilizált Semax"
    },
    {
      "label": "Szerkezet",
      "value": "Ac-Met-Glu-His-Phe-Pro-Gly-Pro-NH₂"
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
  "dosageInfo": "Anekdotális research-protokoll: 200–600 µg/nap (SC vagy IN). Korlátozott humán adat, nincs peer-reviewed klinikai vizsgálat.",
  "studies": [],
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/na-semax-amidate.png",
      "dosing": "200–600 μg SC/nap (anekdotális research-protokoll, korlátozott humán adat)",
      "halfLife": "~30–60 perc plazma (N-acetyl + amidation = magasabb enzimatikus stabilitás mint Semax-é)",
      "halfLifeActive": "~24+ óra (központi idegrendszer)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 perc",
      "routeNote": "Research-chemical Semax-analog (N-acetyl + C-amide modifikáció). Hipotetikusan hosszabb felezési idő mint a Semax-é. Korlátozott humán adat.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg SC/nap",
        "note": "Research-chemical anekdotális dózistartomány, NEM peer-reviewed RCT. 5 mg vial + 2 ml BAC water = 2500 μg/ml."
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
      "image": "/peptides/na-semax-amidate.png",
      "dosing": "200–600 μg/nap szippantva (community-route)",
      "halfLife": "~10–15 perc plazma",
      "halfLifeActive": "~24+ óra (központi idegrendszer)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 perc",
      "routeNote": "Research-chemical IN route, community-sourced protokollok. Nincs peer-reviewed adat.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 400, "high": 600 },
        "unit": "μg IN/nap",
        "note": "Research-chemical recon: 5 mg vial + 5 ml steril BAC water + transfer to nasal spray bottle. Anekdotális dosing."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 5 ml steril bakteriosztatikus víz",
          "Lassan az üvegfalra injektáld a vizet, óvatosan forgasd (NE rázd)",
          "Töltsd át steril orrspray-flakonba (50 μl/puff pumpa, ~50 μg/puff)",
          "Koncentráció: 1000 μg/ml — 1 puff = ~50 μg, 4–12 puff/nap dózistól függően",
          "Tárolás: hűtőben (2–8°C), max 28 nap; használat előtt primingolj 2–3 üres puffot"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
