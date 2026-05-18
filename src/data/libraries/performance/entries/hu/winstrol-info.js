// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.944Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkilált DHT-származék. Klasszikus \"cutting\" AAS, SHBG-szuppresszor.",
  "description": "A Stanozolol (Winstrol) DHT-származék, 17α-alkilezett orális vagy injekciós AAS. Az SHBG-csökkenés mechanizmusa direkt hepatikus SHBG-mRNA-szintézis-gátlás (Pugeat 1981 evidencia), ami emeli a szabad tesztoszteron-frakciót — még TRT-baseline mellett is jelentős andro-amplifikáció. Nem aromatizál, így nincs ösztrogén-mellékhatás. Klinikailag hereditary angioedema és anémia kezelésére fejlesztették, sportkontextusban \"cutting\" cikluson izom-megtartás céljából használt. A Ben Johnson 1988 olimpiai szkandallum ezt a vegyületet érintette. **Pharmakológiai pozícionálás**: force-amplifier és tissue-quality modulátor inkább, mint hypertrophy-builder — az erő-növekedés gyakran aránytalan a látható izomtömeg-gyarapodáshoz. **Connective tissue figyelmeztetés (Liow 1995 PMID 7551762)**: stanozolol-asszociált ínszakadás-esetek atléta-irodalomban jól dokumentáltak; az izomerő gyorsabban nő mint az ínszövet kollagén-keresztkötés-érettsége, ami szakadás-veszélyt teremt különösen sprinter/explosive-sportokban.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista + SHBG-szuppresszor"
    },
    {
      "label": "Felezési idő",
      "value": "9 óra (oral), 24 óra (injekciós)"
    },
    {
      "label": "Anabolikus arány",
      "value": "320:30"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: FDA-engedélyezett (Winstrol Rx). EU: Rx korlátozott."
    }
  ],
  "mechanism": "AR-agonista DHT-szerű karakterrel. Direkt hepatikus SHBG-mRNA-szintézist GÁTOL → szabad tesztoszteron-frakció emelkedés (andro-amplifikáció). Nem aromatizál (DHT-származék), nem konvertál DHT-vé.",
  "legalStatus": "USA: FDA Schedule III. HU/EU: Rx. WADA: tiltott.",
  "onsetTime": "7-14 days",
  "halfLife": "9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "Nem — heterociklusos pirazol A-gyűrű, NEM CYP19 szubsztrát; SHBG-csökkentés a fő ösztrogén-független hatás (Schänzer 1996)",
  "hepatotoxicity": "Magas — 17α-alkilált; oral és injektálható forma is hepatotoxikus, transzamináz-elevation gyakori 6+ hetes ciklusban (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:30",
  "benefits": [
    "Cutting cycle izom-megtartás kalória-deficitben",
    "SHBG-csökkenés emeli a szabad T-frakciót",
    "Erő-növekedés sprintereknek és atlétáknak",
    "Vörösvérsejt + aerob kapacitás emelés: erythropoietikus hatás dokumentált (Pope 2014 review), endurance-performance enhancement sub-elite atlétáknál"
  ],
  "studies": [
    {
      "title": "Effects of stanozolol on physiological measurements in healthy men",
      "authors": "Stergiopoulos K, Brennan JJ, Mathews R et al.",
      "journal": "Med Sci Sports Exerc. 2008;40(4):574-579.",
      "pmid": "18317369"
    },
    {
      "title": "Anabolic steroid abuse and tendon injuries",
      "authors": "Liow RY, Tavares S.",
      "journal": "BJSM. 1995;29(2):77-79.",
      "pmid": "7551762"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.4,
      "medium": 0.7,
      "high": 1
    },
    "unit": "mg/nap",
    "note": "Oral 30-80 mg/nap (Alacsony-Magas tartomány), injekciós Winstrol Depot 50 mg EOD. SHBG-szuppressziós hatása miatt szabad T-frakció emelkedik. Hepatotoxicitás magas (17α-alkilált). Maximum 6-8 hét ciklus. PCT szükséges."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2 héttel előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin. Lipid panel, hormon-panel, vesefunkció, CBC.",
      "purpose": "Máj-baseline kritikus 17α-alkilált AAS-en."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "3-4. hét",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel (HDL drasztikus csökkenés várható), E2, vérnyomás.",
      "purpose": "Vész-detektálás. ALT/AST >3x indikál ciklus-megszakítást."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT 4. + 8-12. hét",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus + lipid recovery.",
      "purpose": "HPTA + hepatikus recovery verifikálás."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "6 hetente",
      "markers": "Hepatikus + lipid + hormon-panel + EKG referencia.",
      "purpose": "Hosszú-távú Winstrol-cruise NEM ajánlott a hepatotoxicitás miatt."
    }
  }
}
