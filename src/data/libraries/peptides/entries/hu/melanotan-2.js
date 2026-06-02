// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:10:34.040Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "melanotan-2",
  "name": "Melanotan-2",
  "image": "/peptides/melanotan-2.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.16)",
  "tagText": "#fbbf24",
  "defaultVialMg": 10,
  "defaultBacMl": 2,
  "defaultDoseMcg": 500,
  "shortDesc": "Szintetikus α-MSH analóg: pigmentáció és libidó moduláció",
  "description": "A Melanotan-2 (MT-II) egy szintetikus, ciklikus heptapeptid α-melanocita-stimuláló hormon (α-MSH) analóg, amelyet eredetileg az Arizonai Egyetemen fejlesztettek ki bőrrákmegelőzési kutatás céljából. Nem-szelektív agonistája az MC1R, MC3R, MC4R és MC5R melanokortinreceptoroknak.\n\nFő hatása az MC1R aktiválásán keresztül a melanin szintézis fokozása (melanogenezis), ami sötétebb, „belülről jövő\" barnulást eredményez minimális UV-expozíció mellett. Az MC4R aktiválása libidóra ható mellékhatást is kivált, ez vezetett a PT-141 (bremelanotid) kifejlesztéséhez. Étvágycsökkentő hatása is dokumentált. Két formában érhető el: szubkután injekció (community-standard) és intranazális spray (kevésbé hatékony, experimental).",
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Ciklikus heptapeptid (MC1-5R agonista)"
    },
    {
      "label": "Szerkezet",
      "value": "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂"
    },
    {
      "label": "Molekulatömeg",
      "value": "~1024 Da"
    },
    {
      "label": "Célterület",
      "value": "Bőr-pigmentáció, libidó"
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
  "dosageInfo": "Tipikus kutatási protokoll, telítési fázis: 250–500 mcg/nap szubkután, ~10–20 napig (cél bőrtípustól függően). Fenntartás: 500–1000 mcg, heti 1–2×. Lefekvés előtti adagolás csökkenti a hányinger érzését. A 10 mg-os fiolát 2 ml BAC vízzel hígítva 5000 mcg/ml koncentrációt eredményez. UV-expozíció továbbra is szükséges a barnulás kiváltásához.",
  "studies": [
    {
      "tag": "Preklinikai vizsgálat",
      "tagColor": "rgba(245,158,11,0.16)",
      "tagText": "#fbbf24",
      "title": "Melanotan-II: Investigation of the inducer and facilitator effects on penile erection in anaesthetized rat",
      "authors": "Giuliano F, Bernabé J, Alexandre L, et al.",
      "journal": "Neuroscience",
      "year": "2006",
      "pmid": "16360286",
      "url": "https://pubmed.ncbi.nlm.nih.gov/16360286/",
      "finding": "Az MT-II dózisfüggő pro-erektilis hatást fejt ki központi melanokortin-receptor aktiváción keresztül."
    }
  ],
  "anecdote": "A felhasználók jellemzően az első néhány adag során észreveszik a Melanotan-2 hatásait, különösen a barnulást és a libidóváltozásokat. A hányinger és a kipirulás gyakori mellékhatások, de a barnulás kialakulása lényegesen gyorsabb, mint a Melanotan-1 esetén. A vegyület összességében agresszívabb, de pigmentáció szempontjából lényegesen erősebb, és általában rövid ciklusokban használják.\n\nA Melanotan-2-t intranazálisan vagy szubkután injekcióval adják be, a Melanotan-1-hez hasonló adagolással. UV-expozícióra van szükség a működéséhez, ezért legjobb a barnulás előtt beadni. A protokollok néha telítési fázisokat alkalmaznak, amelyeket heti 1-2 alkalommal történő fenntartó adagolás követ.",
  "variants": [
    {
      "id": "sc",
      "routeId": "sc",
      "routeLabel": "Szubkután injekció",
      "image": "/peptides/Melanotan-2.png",
      "dosing": "0.5–1 mg SC/dózis 1–3 naponta (community-standard loading + maintenance)",
      "halfLife": "~33 óra plazma",
      "halfLifeActive": "~napok (MC1R/MC4R downstream melanogenezis + libido)",
      "bioavailability": "~80–100% (SC)",
      "onsetTime": "30–60 perc",
      "routeNote": "Community-standard route (off-label tanning + libido). Loading-dose-szal kezdődik, majd maintenance-fázis.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.25, "medium": 0.5, "high": 1.0 },
        "unit": "mg SC/dózis",
        "note": "Loading: 0.25 mg/nap 7-10 napon át, fokozatos emelés 0.5-1 mg-ra. Maintenance: 0.5-1 mg 1-3 naponta."
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
      "image": "/performance/nasal-spray-clear.png",
      "dosing": "0.5–1 mg/nap szippantva (kevésbé hatékony mint SC, magasabb dózis szükséges)",
      "halfLife": "~5–10 perc plazma",
      "halfLifeActive": "~napok (MC1R/MC4R downstream)",
      "bioavailability": "~30–40% (IN)",
      "onsetTime": "15–30 perc",
      "routeNote": "Experimental route, alacsonyabb biohasznosulás. Loading-protokoll nem ajánlott IN-en.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 0.5, "medium": 1.0, "high": 2.0 },
        "unit": "mg IN/nap",
        "note": "Research-chemical recon: 10 mg vial + 5 ml sterile water + transfer to nasal spray bottle. 0.5-2 mg/nap (community off-label dosing)."
      },
      "reconstitute": {
        "steps": [
          "10 mg lyophilized vial + 5 ml steril víz",
          "Lassan oldd fel az üvegfalra injektálva, NE direkt a porra",
          "Átöntés steril nazális spray-flakonba (~10 puff/ml)"
        ]
      }
    }
  ],
  "defaultVariant": "sc"
}
