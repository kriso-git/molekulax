// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.946Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "methylstenbolone",
  "name": "Methylstenbolone",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Designer prohormon (2,3α-epitio-17α-methylstenbolone). Erős AR-agonista, magas hepatotoxicitással.",
  "description": "A Methylstenbolone (M-Sten, Ultradrol, Methyl-D) egy **designer prohormon kémiai szerkezete: 2β,17β-dimetil-2,3α-epitio-5α-androsztán**. A 2,3α-epithio-csoport pótolja az aromatizálható A-gyűrűt → nincs E2-konverzió, ezért tiszta száraz/kemény izomprofil. Az USA-ban 2008-2012 között Iron Mag Labs Ultradrol, Antaeus Labs Methyl-D és más márkanevek alatt dietary supplement-ként árulták. FDA warning letters 2012-2013 között több gyártóhoz, majd a **DASCA 2014** Schedule III-as kontrollált szerré minősítette. A **Robles-Diaz 2015 (Liver Int, PMID 25867306)** dokumentált acute liver failure case-sorozat-elemzés szerint 5-15 mg/nap dózison 3-6 hét alatt fulmináns cholesztatikus hepatitis fejlődött ki egészséges fiatal férfiakon, néhány eset májtranszplantációhoz vezetett. Hepatotoxicitás magas (17α-metilezett orális), prosztata-mellékhatások markánsabbak mint a Superdrol-nál.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista (anabolikus 660 / androgén 660)"
    },
    {
      "label": "Felezési idő",
      "value": "8-12 óra"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: DASCA 2014 kontrollált. EU: nem szabályozott egységesen."
    }
  ],
  "mechanism": "AR-receptor erős agonista. **AR-szelektivitás**: a 2,3α-epithio-csoport blokkolja az aromatáz-affinitást ÉS a 5α-reduktáz-konverziót, ezért tiszta-AR-agonista profil (sem E2, sem DHT konverzió). **A 660:660 SZIMMETRIKUS arány azt jelenti, hogy a prosztata-androgenicitás ANNYIRA ERŐS, mint az anabolikus hatás** — ezért a prosztata-mellékhatások (akne, agresszió, androgenikus hajhullás, prosztata-hipertrófia) markánsabbak mint a Superdrol-nál (400:20 arány). 17α-metil-csoport miatt orálisan biológiailag hozzáférhető, de hepatotoxikus.",
  "legalStatus": "USA: DASCA 2014 óta kontrollált. EU: nem szabályozott egységesen, vény nélkül illegális. WADA: tiltott.",
  "onsetTime": "7-10 days",
  "halfLife": "8-12 h",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "liver hepatotoxins"
  ],
  "wadaStatus": "banned",
  "androgenicRatio": "660:660",
  "benefits": [
    "Erős izomtömeg-növekedés száraz, kemény, vaszkuláris megjelenéssel (3-5 kg / 3-4 hét, Superdrol-szerű dry profile)",
    "Erőtempó-emelkedés markáns: bench/deadlift PR-ek 2-3. hét után dokumentáltak",
    "Nincs aromatizáció ÉS nincs DHT-konverzió (tiszta AR-agonista profil)"
  ],
  "studies": [
    {
      "title": "Designer steroid hepatotoxicity: acute liver failure from methylstenbolone",
      "authors": "Robles-Diaz M, Gonzalez-Jimenez A, Medina-Caliz I et al.",
      "journal": "Liver Int. 2015;35(11):2483-2493.",
      "pmid": "25867306"
    },
    {
      "title": "Designer steroids in dietary supplements",
      "authors": "Geyer H, Schänzer W, Thevis M.",
      "journal": "Mol Cell Endocrinol. 2014;464:99-108.",
      "pmid": "24882754"
    }
  ],
  "related": [
    "superdrol",
    "1-andro"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 4,
      "medium": 8,
      "high": 16
    },
    "unit": "mg/nap",
    "note": "Maximum 4 hét ciklus, nem hosszabb. Két napra felosztott dózis a 8-12 órás felezési idő miatt. 17α-metilezett orális, ALT/AST >2x emelkedés esetén AZONNAL leállítás. TUDCA 750 mg/nap kötelező. PCT (Clomid + Nolvadex) szükséges."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2 héttel előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin, INR. Plus lipid, hormon-panel.",
      "purpose": "Máj-baseline kritikus. Bármilyen meglévő máj-zavar kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2. hét végén",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel.",
      "purpose": "ALT/AST >2x = AZONNAL ciklus-megszakítás."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT 4. + 8-12. hét",
      "markers": "Total T, LH, FSH, E2, hepatikus + lipid recovery.",
      "purpose": "HPTA + hepatikus recovery verifikálás."
    },
    "cruise": null
  }
}
