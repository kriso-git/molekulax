// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.622Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "hydrocortisone",
  "name": "Hydrocortisone",
  "image": "/pharmaceutical/cream-tube-white.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Naturalny glukokortykoid (Cortef), dożywotnie uzupełnienie hormonalne w chorobie Addisona i niewydolności nadnerczy. Standard 15-25 mg/dzień.",
  "description": "Hydrokortyzon to syntetyczny odpowiednik endogennego kortyzolu, opracowany przez Pfizer (Cortef, FDA 1955). W chorobie Addisona i wtórnej niewydolności nadnerczy stosowany dożywotnio. Naśladuje fizjologiczny rytm dobowy (poranny szczyt, wieczorny niski) przez split-dosing (10 mg rano + 5 mg po południu). DAWKA STRESOWA: choroba, operacja, uraz wymagają wzrostu 2-3x OBOWIĄZKOWO, ponieważ pacjenci Addisona nie mają endogennego wzrostu kortyzolu (ostry kryzys nadnerczowy może być śmiertelny). Wytyczne ATA 2016 (Bornstein 2016 JCEM PMID 26760044) dają standardyzowane zalecenia.",
  "mechanism": "Agonista receptora glukokortykoidowego (GR). Przeciwzapalny, immunomodulujący, stymulujący glukoneogenezę, katabolizm białek, równowaga osmotyczna.",
  "legalStatus": "UE/PL: na receptę (hydrokortyzon, Cortef, Plenadren — marka modified-release). USA: FDA Rx.",
  "bioavailability": "~96% (doustnie tabletka — etykieta FDA Cortef; forma miejscowa vs doustna różna)",
  "onsetTime": "30-60 min (oral), seconds-minutes (IV in adrenal crisis)",
  "halfLife": "~1.5 h (plasma), biological 8-12 h",
  "atcCode": "H02AB09",
  "prescriptionStatus": "Na receptę (Rx), nadzorowane przez endokrynologa",
  "indications": [
    "Pierwotna niewydolność nadnerczy (choroba Addisona, dożywotnia)",
    "Wtórna niewydolność nadnerczy (niewydolność przysadki)",
    "Wrodzona przerost nadnerczy (CAH)",
    "Ostry kryzys nadnerczowy (nagły, IV)"
  ],
  "contraindications": [
    "Aktywna układowa infekcja grzybicza (względne)",
    "Nadwrażliwość"
  ],
  "commonSideEffects": [
    "Przy przewlekłej dawce suprafizjologicznej: cechy Cushinga (otyłość centralna, nadciśnienie, hiperglikemia, osteoporoza, atrofia mięśni)",
    "Zwiększona podatność na infekcje (supresja immunologiczna)",
    "Psychiatryczne: niepokój, bezsenność, mania przy wysokiej dawce"
  ],
  "cyp450": [
    "CYP3A4 substrate",
    "Sensitive to CYP3A4 inducers/inhibitors"
  ],
  "crossMolInteractions": [
    "Induktor CYP3A4 (fenytoina, ryfampicyna, karbamazepina): potrzeba eskalacji",
    "Silny inhibitor CYP3A4: redukcja dawki",
    "Insulina/doustny przeciwcukrzycowy: nasilenie hiperglikemii, monitor"
  ],
  "benefits": [
    "Dożywotnie uzupełnienie hormonalne w Addisonie — ratuje życie",
    "Marka modified-release (Plenadren) przybliża rytm dobowy",
    "Dawka stresowa zapobiega ostremu kryzysowi"
  ],
  "studies": [
    {
      "title": "Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society Clinical Practice Guideline",
      "authors": "Bornstein SR, Allolio B, Arlt W et al.",
      "journal": "J Clin Endocrinol Metab. 2016;101(2):364-89.",
      "pmid": "26760044"
    },
    {
      "title": "Effects of modified release hydrocortisone on restoration of early morning cortisol, quality of life, and fatigue in adrenal insufficiency.",
      "authors": "Prete A, Theiler-Schwetz V, Arlt W",
      "journal": "EClinicalMedicine",
      "pmid": "41552007"
    }
  ],
  "related": [
    "levothyroxin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 15,
      "medium": 20,
      "high": 25
    },
    "unit": "mg/nap (split: 2/3 reggel + 1/3 délután)",
    "note": "STANDARD: 15-25 mg/dzień split. DAWKA STRESOWA: łagodna choroba 2x, ciężka 3x. OPERACJA: 50-100 mg IV intra-op + kontynuacja. OSTRY KRYZYS: 100 mg IV bolus + 200 mg/24h wlew. Nigdy nie przerywaj nagle — powolne zmniejszanie 6-12 miesięcy po przewlekłej supresji."
  }
}
