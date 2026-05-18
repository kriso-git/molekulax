// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.623Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "liothyronine",
  "name": "Liothyronine (T3)",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Syntetyczna T3 trójjodotyronina (Cytomel). Specyficzne wskazania (śpiączka miksowobrzękowa, zaburzenie konwersji T4, augmentacja MDD). NIE rutynowy wybór.",
  "description": "Liotyronina to syntetyczna forma aktywnego hormonu T3 (Cytomel, FDA 1956). NIE rutynowo w niedoczynności — lewotyroksyna (T4) zapewnia fizjologiczną T3 przez endogenne dejodynazy. Specyficzne wskazania: (1) ŚPIĄCZKA MIKSOWOBRZĘKOWA leczenie nagłe (szybko działająca T3 IV), (2) subiektywna objawowa niedoczynność na lewotyroksynie z normalnym TSH (podejrzenie zaburzenia konwersji T4-T3, ETA 2012 PMID 24782999), (3) augmentacja MDD (Cooper-Kazaz 2007 PMID 17888912 oporne MDD), (4) supresja DTC po tyreoidektomii z szybkim startem. Krótki okres półtrwania (1 dzień vs T4 7 dni), wymaga 2-3x/dzień, trudniej osiągnąć stabilne poziomy.",
  "mechanism": "Bezpośrednie uzupełnienie T3, NIE wymaga obwodowej konwersji T4 → T3. Natychmiast aktywuje receptor tarczycy.",
  "legalStatus": "UE/PL: na receptę (Cytomel, Thybon). USA: FDA Rx (Cytomel).",
  "onsetTime": "2-4 h (oral), minutes (IV)",
  "halfLife": "~1 day (much shorter than T4)",
  "atcCode": "H03AA02",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Śpiączka miksowobrzękowa (nagła)",
    "Niedoczynność specyficzne (T4 + T3 połączone, off-label)",
    "Augmentacja MDD (off-label, oporne)",
    "Most supresji TSH w DTC (szybki start)"
  ],
  "contraindications": [
    "Ostre MI, nieleczona niewydolność nadnerczy, tyreotoksykoza"
  ],
  "commonSideEffects": [
    "Objawy nadmiernego uzupełnienia: tachykardia, drżenie, pocenie, niepokój, nietolerancja ciepła, utrata wagi",
    "Ryzyko migotania przedsionków (starsi, przewlekłe nadmierne uzupełnienie)"
  ],
  "cyp450": [
    "Not CYP-metabolized (deiodination + conjugation)"
  ],
  "crossMolInteractions": [
    "Warfaryna: efekt może się nasilić, monitor INR",
    "Kolestyramina, żelazo, wapń: wymagany 4-godzinny odstęp"
  ],
  "benefits": [
    "Szybki start (w nagłej śpiączce miksowobrzękowej)",
    "Dowody augmentacji MDD (off-label)"
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
    "levothyroxin",
    "methimazole"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 25,
      "high": 75
    },
    "unit": "µg/nap",
    "note": "Niska (5 µg/dzień split): start augmentacji MDD, starsi lub ryzyko CV. Średnia (25-50 µg/dzień): kombinacja T4+T3 niedoczynność. Wysoka (75 µg/dzień): krótkoterminowa supresja TSH w DTC. NIGDY rutynowo zamiast T4."
  }
}
