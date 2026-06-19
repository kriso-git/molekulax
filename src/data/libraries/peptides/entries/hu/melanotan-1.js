// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.059Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "melanotan-1",
  "name": "Melanotan-1 (Afamelanotide)",
  "image": "/peptides/melanotan-1.png",
  "accentColor": "#fdba74",
  "tagColor": "rgba(253,186,116,0.16)",
  "tagText": "#fdba74",
  "defaultVialMg": 16,
  "defaultBacMl": 0,
  "defaultDoseMcg": 16000,
  "shortDesc": "α-MSH analóg, eritropoietikus protoporfíriában jóváhagyva",
  "description": "Az Afamelanotide (Scenesse) α-MSH analóg, ami az MC1R-en keresztül melanint indukál. Az FDA 2019-ben hagyta jóvá EPP-ben a napozási intolerancia kezelésére. Két formában érhető el: szubkután injekció (FDA-approved Scenesse implant + research-protokoll) és intranazális spray (Hadley-style research-route).",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "α-MSH analog"
    },
    {
      "label": "Szerkezet",
      "value": "[Nle4, D-Phe7]-α-MSH"
    },
    {
      "label": "Státusz",
      "value": "FDA jóváhagyott (EPP)"
    },
    {
      "label": "Beadás",
      "value": "SC implantátum"
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
  "dosageInfo": "Klinikai: 16 mg implantátum 2 havonta. Kutatási SC: 0,5–1 mg/nap kezdetben.",
  "studies": [
    {
      "tag": "Kutatás",
      "tagColor": "rgba(253,186,116,0.16)",
      "tagText": "#fdba74",
      "title": "Afamelanotide for erythropoietic protoporphyria",
      "authors": "Langendonk JG, Balwani M, Anderson KE, et al.",
      "journal": "NEJM",
      "year": "2015",
      "pmid": "26132941",
      "url": "https://pubmed.ncbi.nlm.nih.gov/26132941/",
      "finding": "Az afamelanotide szignifikánsan megnyújtja a tüneti tűrőképességet napfénynek kitett EPP betegekben."
    }
  ],
  "anecdote": "Anekdotikus beszámolók szerint a Melanotan-1 egyenletes, fokozatos barnulást eredményez napi 500 mcg adag és 30 perc napi napozás mellett, körülbelül egy héten belül észrevehető narancsos árnyalattal. A mellékhatások ebben a beszámolóban minimálisak voltak, bár a két vegyületet összehasonlító felhasználók gyakran a Melanotan-2-t részesítik előnyben a gyorsabb pigmentáció miatt.\n\nA Melanotan-1-et jellemzően orrspray-ként vagy szubkután injekcióként adják be a gyenge orális biohasznosulás miatt. A felhasználók fokozatosan titrálnak felfelé, mivel hányinger gyakori tünet, ha a kezdő dózis túl magas. Egyes felhasználók akár 1 mg-os adagot is tolerálnak. A beadás 30-60 perccel a napozás előtt ideális.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/melanotan-1.png",
      "dosing": "0.16 mg/kg SC research-protokoll (vagy 16 mg Scenesse implant 2 havonta, FDA-approved EPP)",
      "halfLife": "~1 óra plazma",
      "halfLifeActive": "~napok-hetek (α-MSH receptor downstream melanogenezis)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "30–60 perc",
      "routeNote": "FDA-approved Rx route (Scenesse implant 16 mg, EPP indikációval). Research-protokollban SC injekció 0.16 mg/kg.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg SC/dózis",
        "note": "Research-protokoll loading: 0.5–1 mg SC mindennap 7 napon át; maintenance 1–2 mg hetente 2x."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 5 ml bakteriosztatikus víz",
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
      "image": "/peptides/melanotan-1.png",
      "dosing": "1 mg/nap szippantva (research-route, Hadley early studies)",
      "halfLife": "~5–10 perc plazma",
      "halfLifeActive": "~napok (α-MSH downstream)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "15–30 perc",
      "routeNote": "Research-route (Hadley/Dorr early experimental). Sokkal kevésbé hatékony mint SC, ezért magasabb dózis szükséges.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg IN/nap",
        "note": "Research-chemical recon: 10 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. 0.5–2 mg/nap (research dosing, off-label)."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 5 ml steril bakteriosztatikus víz",
          "Transfer steril nasal spray üvegbe",
          "Priming: 2–3 spray a levegőbe a használat előtt"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
