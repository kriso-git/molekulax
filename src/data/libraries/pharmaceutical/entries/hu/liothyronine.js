// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.580Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "liothyronine",
  "name": "Liothyronine (T3)",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Szintetikus T3 trijodotironin (Cytomel). Specifikus indikációkban (mixedéma-kóma, T4-konverzió-zavar, MDD-augmentáció). NEM rutin-választás.",
  "description": "A Liothyronine az aktív T3-hormon szintetikus formája (Cytomel, FDA 1956). NEM rutin-választás a hipotireózis kezelésében — Levothyroxin (T4) az endogén deiodaze-konverzió révén ad fiziológiás T3-szintet. Specifikus indikációk: (1) MIXEDÉMA-KÓMA sürgősségi kezelése (gyors hatású T3 IV), (2) szubjektív tüneti hipotireózis Levothyroxin-en normál TSH-val (T4-T3 konverzió-zavar gyanúja, ETA 2012 PMID 24782999 vita), (3) MDD-augmentáció (Cooper-Kazaz 2007 PMID 17888912 MDD-rezisztens), (4) DTC-szuppresszió post-thyroidectomia gyors hatás-kezdettel. A felezési ideje rövid (1 nap vs T4 7 nap), ezért 2-3x/nap adagolás szükséges, és nehezebb stabil-szintet elérni.",
  "mechanism": "Direkt T3-pótlás, NEM igényli a T4 → T3 perifériás deiodáz-konverziót. Azonnal aktiválja a tiroid receptor.",
  "legalStatus": "EU/HU: vényköteles (Cytomel, Thybon). USA: FDA Rx (Cytomel).",
  "bioavailability": "95% (orális, 4 óra alatt — FDA Cytomel label)",
  "onsetTime": "2-4 h (oral), minutes (IV)",
  "halfLife": "~1 day (much shorter than T4)",
  "atcCode": "H03AA02",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Mixedéma-kóma (sürgősségi)",
    "Hipotireózis specifikus indikációkban (T4 + T3 kombinált, off-label)",
    "MDD-augmentáció (off-label, treatment-resistant)",
    "DTC TSH-szuppresszió bridge (gyors hatás)"
  ],
  "contraindications": [
    "Akut MI, kezeletlen mellékvese-elégtelenség, tireotoxikózis"
  ],
  "commonSideEffects": [
    "Túladagolás tüneti: tachycardia, tremor, izzadás, szorongás, hőintolerancia, súlyveszteség",
    "Pitvarfibrilláció kockázat (idős, krónikus túl-pótlás)"
  ],
  "cyp450": [
    "Not CYP-metabolized (deiodination + conjugation)"
  ],
  "crossMolInteractions": [
    "Warfarin: hatás fokozódhat, INR monitor",
    "Cholestyramin, vas, kalcium: 4 órás távolság szükséges"
  ],
  "benefits": [
    "Gyors hatás-kezdet (mixedéma-kóma sürgősségben)",
    "MDD-augmentáció evidencia (off-label)"
  ],
  "studies": [
    {
      "title": "2014 ETA Guidelines on the use of L-T4 + L-T3",
      "authors": "Wiersinga WM, Duntas L, Fadeyev V et al.",
      "journal": "Eur Thyroid J. 2012;1(2):55-71.",
      "pmid": "24782999"
    },
    {
      "title": "Liothyronine in major depressive disorder augmentation",
      "authors": "Cooper-Kazaz R, Apter JT, Cohen R et al.",
      "journal": "Arch Gen Psychiatry. 2007;64(6):679-88.",
      "pmid": "17548750"
    }
  ],
  "related": [
    "levothyroxin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 25,
      "high": 75
    },
    "unit": "µg/nap",
    "note": "Alacsony (5 µg/nap split): MDD-augmentáció kezdés, idős vagy CV-rizikójú beteg. Mérsékelt (25-50 µg/nap): T4+T3 kombináció hipotireózisban. Magas (75 µg/nap): DTC TSH-szuppresszió rövid távon. SOSE ÖNMAGÁBAN T4 helyett rutinszerűen."
  }
}
