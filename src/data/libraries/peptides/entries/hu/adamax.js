// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.066Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "adamax",
  "name": "Adamax",
  "image": "/peptides/adamax.png",
  "accentColor": "#a5b4fc",
  "tagColor": "rgba(165,180,252,0.16)",
  "tagText": "#a5b4fc",
  "defaultVialMg": 0,
  "defaultBacMl": 0,
  "defaultDoseMcg": 200,
  "shortDesc": "Adamantán-konjugált Semax-analóg, grey-zone research chemical",
  "description": "Az Adamax egy Semax-analóg research chemical: N-terminális acetilezés + adamantán modifikáció, ami elméletileg javítja a lipofilicitást és a BBB-penetrációt. Két formában érhető el: szubkután injekció és intranazális spray. Research-chemical, korlátozott humán adat, anekdotális használat — nincs peer-reviewed klinikai vizsgálat.",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Adamantán-konjugált peptid (research chemical)"
    },
    {
      "label": "Szerkezet",
      "value": "Ac-Semax + adamantán-konjugátum"
    },
    {
      "label": "Státusz",
      "value": "Grey-zone, preklinikai"
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
  "dosageInfo": "Anekdotális research-protokoll: 100–300 µg/nap (SC vagy IN). Humán hosszú távú biztonsági adat nincs, nincs peer-reviewed klinikai vizsgálat.",
  "studies": [],
  "anecdote": "Az Adamax a Semax elméleti továbbfejlesztéseként van pozicionálva, papíron jobb BBB-áthatolással, hosszabb hatástartammal és erősebb neurotrofikus hatásokkal. Bár több végleges adatra van szükség, anekdotikus beszámolók szerint tisztább gondolkodás, jobb gondolatmenet és simább kogníció jellemzi. Számos közösségi vita dokumentálja a felhasználói tapasztalatokat az Adamax-szal, bár minden beszámoló anekdotikus — peer-reviewed klinikai vizsgálat nem létezik.\n\nAz Adamax a Semaxhoz hasonló neurotrofikus és nootropikus előnyökre törekszik, de nagyobb hangsúlyt fektet a tartós aktivitásra a feltételezett jobb BBB-permeabilitás és a hosszabb hatástartam révén. Mivel grey-zone research chemical, minden használat saját felelősségre, community-sourced protokoll alapján.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/water-vial.png",
      "dosing": "100–300 μg SC/nap (anecdotal research-protokoll, korlátozott humán adat)",
      "halfLife": "~30 perc plazma (adamantyl modifikáció enzimatikus stabilitást ad)",
      "halfLifeActive": "~24+ óra (központi idegrendszer, hipotetikus BBB-penetráció)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "15–30 perc",
      "routeNote": "Research-chemical Semax-analog (adamantyl modifikáció). Korlátozott humán adat, anekdotális használat.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg SC/nap",
        "note": "Research-chemical anekdotális dózistartomány. NEM peer-reviewed RCT-vel alátámasztott. 5 mg vial + 2 ml BAC water = 2500 μg/ml, 80 μl per 200 μg dózis."
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
      "dosing": "100–300 μg/nap szippantva (community-route, korlátozott humán adat)",
      "halfLife": "~5–10 perc plazma",
      "halfLifeActive": "~24+ óra (központi idegrendszer)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "5–15 perc",
      "routeNote": "Research-chemical IN route, anekdotális használat. Nincs peer-reviewed klinikai vizsgálat.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 100, "medium": 200, "high": 300 },
        "unit": "μg IN/nap",
        "note": "Research-chemical recon: 5 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. Anekdotális dózistartomány, NEM klinikai protokoll."
      },
      "reconstitute": {
        "steps": [
          "5 mg lyophilized vial + 5 ml steril bakteriosztatikus víz",
          "Lassan az üvegfalra injektáld a vizet, óvatosan forgasd (NE rázd)",
          "Töltsd át steril orrspray-flakonba (50 μl/puff pumpa, így ~50 μg/puff)",
          "Koncentráció: 1000 μg/ml — 1 puff = ~50 μg, 2–6 puff/nap dózistól függően",
          "Tárolás: hűtőben (2–8°C), max 28 nap; használat előtt primingolj 2–3 üres puffot"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
