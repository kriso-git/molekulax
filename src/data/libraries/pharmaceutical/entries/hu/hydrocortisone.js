// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.579Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "hydrocortisone",
  "name": "Hydrocortisone",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Természetes glükokortikoid (Cortef), Addison-betegség és mellékvese-elégtelenség élethosszig tartó hormon-pótlása. Standard 15-25 mg/nap.",
  "description": "A Hydrocortisone az endogén kortizol szintetikus változata, amelyet a Pfizer (Cortef, FDA 1955) fejlesztett ki. Az Addison-betegségben és szekunder mellékvese-elégtelenségben élethosszig tartó hormon-pótlás. A fiziológiás cirkadián minta (reggeli csúcs, este alacsony) lehetőleg utánzása (split-dosing 10 mg reggel + 5 mg délután). STRESSZ-DÓZIS: betegség, műtét, fizikai trauma esetén 2-3x emelni KÖTELEZŐ, mert Addison-betegen az endogén kortizol-fokozás-képesség hiányzik (acut adrenalis krízis halálos lehet). Az ATA 2016 (Bornstein 2016 JCEM PMID 26760044) guideline ad standardizált stressz-dózis ajánlásokat.",
  "mechanism": "Glükokortikoid receptor (GR) agonista. Anti-gyulladás, immunmoduláció, glükoneogenezis-stimuláció, fehérje-katabolizmus, ozmotikus-egyensúly fenntartása (mineralokortikoid is enyhe).",
  "legalStatus": "EU/HU: vényköteles (Hydrocortison, Cortef, Plenadren — modified-release brand). USA: FDA Rx.",
  "bioavailability": "~96% (orális tabletta — FDA Cortef label; topikális vs orális forma eltérő)",
  "onsetTime": "30-60 min (oral), seconds-minutes (IV in adrenal crisis)",
  "halfLife": "~1.5 h (plasma), biological 8-12 h",
  "atcCode": "H02AB09",
  "prescriptionStatus": "Vényköteles (Rx), endokrinológus által felügyelt",
  "indications": [
    "Primer mellékvese-elégtelenség (Addison-betegség, élethosszig)",
    "Szekunder mellékvese-elégtelenség (hipofízis-elégtelenség)",
    "Veleszületett mellékvese-hiperplázia (CAH)",
    "Akut mellékvese-krízis (sürgősségi, IV)"
  ],
  "contraindications": [
    "Aktív szisztémás gomba-infekció (relatív)",
    "Hypersenzitivitás"
  ],
  "commonSideEffects": [
    "Krónikus szupra-fiziológiás dózison: Cushing-tünetek (centrális obesitás, hipertenzió, hyperglikémia, osteoporosis, izomatrófia)",
    "Fertőzés-susceptibilitás növekedése (immun-suppresszió)",
    "Pszichiátriai: szorongás, álmatlanság, mánia magas dózison"
  ],
  "cyp450": [
    "CYP3A4 substrate",
    "Sensitive to CYP3A4 inducers/inhibitors"
  ],
  "crossMolInteractions": [
    "CYP3A4 induktor (Phenytoin, Rifampicin, Carbamazepine): dóziseszkaláció szükséges",
    "Erős CYP3A4-inhibitor: dóziscsökkentés",
    "Inzulin/orális antidiabetikum: hyperglikémia-fokozás, monitor"
  ],
  "benefits": [
    "Élethosszig tartó hormon-pótlás Addison-betegen — életet ment",
    "Modified-release brand (Plenadren) cirkadián-mintát közelíti",
    "Stressz-dóziséval akut krízis-megelőzés"
  ],
  "studies": [
    {
      "title": "Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society Clinical Practice Guideline",
      "authors": "Bornstein SR, Allolio B, Arlt W et al.",
      "journal": "J Clin Endocrinol Metab. 2016;101(2):364-89.",
      "pmid": "26760044"
    },
    {
      "title": "Modified-release hydrocortisone (Plenadren) in adrenal insufficiency",
      "authors": "Johannsson G, Nilsson AG, Bergthorsdottir R et al.",
      "journal": "J Clin Endocrinol Metab. 2012;97(2):473-81.",
      "pmid": "22112814"
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
    "note": "STANDARD pótlás: 15-25 mg/nap split-dózissal. STRESSZ-DÓZIS: enyhe betegség 2x, súlyos 3x. MŰTÉT: 50-100 mg IV intra-op + folytatás. AKUT KRÍZIS: 100 mg IV bolus + 200 mg/24 h infúzió. Soha ne hagyja abba hirtelen — krónikus szupresszió után 6-12 hónapos lassú leépítés."
  }
}
