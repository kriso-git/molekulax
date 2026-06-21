// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.040Z
// Edit this file directly to update the HU body; do not re-run the script.

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
  "shortDesc": "Melanokortinreceptor-agonista: FDA engedélyezett (bremelanotid)",
  "description": "A PT-141 (bremelanotide) egy szintetikus melanokortinreceptor-agonista, amely az MC3R és MC4R receptorokon hat. Az FDA 2019-ben jóváhagyta a premenopauzás nők hypoaktív szexuális vágyavar-zavarának (HSDD) kezelésére Vyleesi márkanéven.\n\nKülönbözik a PDE5-gátlóktól (Viagra, Cialis): nem az érrendszerre, hanem közvetlen idegrendszeri úton hat, így érrendszeri ellenjavallatoknál is vizsgálják. Két formában érhető el: szubkután injekció (FDA-approved Vyleesi auto-injector HSDD-re) és intranazális spray (Palatin original research route).",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Melanokortinreceptor agonista (MC3R/MC4R)"
    },
    {
      "label": "Szerkezet",
      "value": "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH"
    },
    {
      "label": "Molekulatömeg",
      "value": "~1025 Da"
    },
    {
      "label": "Célterület",
      "value": "Szexuális vágy (HSDD)"
    },
    {
      "label": "Tárolás",
      "value": "2–8°C (rekonstituálva)"
    },
    {
      "label": "Stabilitás",
      "value": "25–30 nap (rekonstituálva)"
    }
  ],
  "dosageInfo": "FDA-jóváhagyott dózis (HSDD): 1,75 mg szubkután, a szexuális aktivitás előtt 45 perccel. Maximum 1× / 24 óra, max 1× / 8 nap. A hányinger mellékhatás megelőzésére antiemetikus előkezelés javasolt.",
  "studies": [
    {
      "tag": "RCT – III. fázis",
      "tagColor": "rgba(217,119,6,0.15)",
      "tagText": "#fcd34d",
      "title": "Bremelanotide for Hypoactive Sexual Desire Disorder",
      "authors": "Kingsberg SA, Clayton AH, Portman D, et al.",
      "journal": "Obstetrics & Gynecology",
      "year": "2019",
      "pmid": "31599840",
      "url": "https://pubmed.ncbi.nlm.nih.gov/31599840/",
      "finding": "Szignifikáns javulás HSDD tüneteiben két Fázis 3 RCT-ben, kedvező biztonsági profillal."
    }
  ],
  "anecdote": "A PT-141 egy széles körben használt és észrevehetően érzékelhető libidó-vegyület. A felhasználók gyakran erős, némileg spontán vágynövekedésről számolnak be – nem csak enyhe javulásról – más tényezőktől függetlenül, mivel közvetlenül a melanokortin receptorokon keresztül hat. A hányinger nagyon gyakori mellékhatás, különösen magasabb dózisoknál vagy a használat elején, és kipirulás vagy átmeneti vérnyomás-emelkedés is előfordul. Tadalafil vagy Szildenafil-szerű PDE5-inhibitorral kombinálva a felhasználók fokozott vágyról és teljesítményről számolnak be, potenciális szinergiával a vérnyomás-interakcióból.\n\nA PT-141-et jellemzően szubkután adják be, mint a legtöbb peptidet. Az adagolás változó és erősen egyéni.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/pt-141.png",
      "dosing": "1.75 mg SC PRN (Vyleesi auto-injector, max 8x/hó FDA-protokoll HSDD)",
      "halfLife": "~2.7 óra plazma",
      "halfLifeActive": "~16 óra (MC3R/MC4R downstream sexual arousal pathway)",
      "bioavailability": "~100% (SC)",
      "onsetTime": "30–60 perc",
      "routeNote": "FDA-approved Rx route (Vyleesi auto-injector). HSDD indikáció premenopauzális nőknél, max 8x/hó.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 1.75, "medium": 1.75, "high": 1.75 },
        "unit": "mg SC/dózis PRN",
        "note": "Vyleesi auto-injector standard dose: 1.75 mg SC 45 perccel a kívánt szexuális aktivitás előtt. Max 8x/hó FDA-protokoll."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 2 ml bakteriosztatikus víz",
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
      "image": "/peptides/pt-141.png",
      "dosing": "10–20 mg/nap szippantva (Palatin original research route, sokszor magasabb dózis szükséges)",
      "halfLife": "~5–10 perc plazma",
      "halfLifeActive": "~16 óra (MC3R/MC4R)",
      "bioavailability": "~20–30% (IN)",
      "onsetTime": "15–30 perc",
      "routeNote": "Palatin eredeti research route (FDA-Vyleesi előtti fejlesztés). 4–20 mg/nap research-doses, jelenleg nem hivatalos forma.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 4, "medium": 10, "high": 20 },
        "unit": "mg IN/nap",
        "note": "Research-chemical recon: 10 mg vial + 5 ml sterile BAC water + transfer to nasal spray bottle. 4–20 mg/nap (off-label research dosing)."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 5 ml steril bakteriosztatikus víz",
          "Lassan az üvegfalra injektáld a vizet, óvatosan forgasd",
          "Steril nasal spray üvegbe áttölteni (transfer)"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
