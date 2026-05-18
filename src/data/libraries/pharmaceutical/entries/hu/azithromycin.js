// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.580Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "azithromycin",
  "name": "Azithromycin",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Makrolid antibiotikum (Pfizer Zithromax \"Z-pack\"). 5-napos rövid kúra-szer. CAP, atipikus pneumónia, STD. QT-prolongáció kockázat.",
  "description": "Az Azithromycin egy szemiszintetikus makrolid antibiotikum (Pfizer Zithromax, FDA 1991). A bakteriális 50S riboszomális alegységét gátolja (RNA-transzlokáció), bakteriostatikus általában, baktericid magas-szuszceptibilitású Gram-pozitív kórokozóra (S. pneumoniae). Spektrum: tipikus respiratoros (S. pneumoniae, H. influenzae) + atipikus (Mycoplasma, Chlamydia, Legionella) + STD (Chlamydia trachomatis, Neisseria gonorrhoeae). Egyedülálló farmakokinetika: szöveti koncentráció 100x plazma-felett, ami a \"Z-pack\" 5-napos protokollt teszi lehetővé (a szövetekben még 5-7 napon át jelen van). FDA-warning QT-prolongációra (Ray 2012 NEJM PMID 22591294 — emelt CV-halálozás).",
  "mechanism": "Bakteriális 50S riboszóma kötés → mRNA-transzlokáció gátlás → fehérje-szintézis blokk. Bakteriostatikus. Magas szöveti penetráció + lassú felszabadulás.",
  "legalStatus": "EU/HU: vényköteles (Sumamed, Azitrolid, Zithromax, generikus). USA: FDA Rx.",
  "bioavailability": "38% (orális, 250 mg kapszula — FDA Zithromax label)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~68 h (very long, allows Z-pack format)",
  "atcCode": "J01FA10",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Közösségi pneumónia (CAP, mild-moderate)",
    "Atipikus pneumónia (Mycoplasma, Chlamydia, Legionella)",
    "Akut sinusitis, otitis media, faringitis",
    "STD: Chlamydia trachomatis (1 g egyszeri dózis), Neisseria gonorrhoeae (CDC kombináció)"
  ],
  "contraindications": [
    "Makrolid-hipersenzitivitás (Erythromycin, Clarithromycin keresztreaktivitás)",
    "Veleszületett hosszú-QT szindróma"
  ],
  "commonSideEffects": [
    "GI: hasmenés, hányinger, hasi diszkomfort (5-10%)",
    "Súlyos, ritka: QT-prolongáció, torsades de pointes, CV-halálozás emelkedés (Ray 2012), C. diff colitis, hepatotoxicitás"
  ],
  "cyp450": [
    "Minimal CYP3A4 substrate (vs erythromycin, clarithromycin both strong CYP3A4 inhibitors)",
    "Few drug interactions"
  ],
  "crossMolInteractions": [
    "QT-prolongáló szerek (SSRI, antipszichotikum, antiaritmikum): additív QT-kockázat",
    "Warfarin: INR-emelkedés lehetséges, monitor"
  ],
  "benefits": [
    "5-napos rövid kúra (Z-pack) jó compliance",
    "Atipikus organizmusokra (Mycoplasma, Chlamydia) hatékony",
    "STD egyszeri-dózis kezelés (Chlamydia 1 g)"
  ],
  "studies": [
    {
      "title": "Azithromycin and the risk of cardiovascular death",
      "authors": "Ray WA, Murray KT, Hall K et al.",
      "journal": "N Engl J Med. 2012;366(20):1881-90.",
      "pmid": "22591294"
    },
    {
      "title": "Azithromycin for the secondary prevention of coronary heart disease events (ACES)",
      "authors": "Grayston JT, Kronmal RA, Jackson LA et al.",
      "journal": "N Engl J Med. 2005;352(16):1637-45.",
      "pmid": "15843666"
    },
    {
      "title": "CDC sexually transmitted infections treatment guidelines",
      "authors": "Workowski KA, Bachmann LH, Chan PA et al.",
      "journal": "MMWR Recomm Rep. 2021;70(4):1-187.",
      "pmid": "34292926"
    }
  ],
  "related": [
    "amoxicillin",
    "ciprofloxacin",
    "doxycycline"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 250,
      "medium": 500,
      "high": 1000
    },
    "unit": "mg",
    "note": "Z-pack standard: 500 mg nap 1, majd 250 mg/nap 2-5. (összesen 1,5 g). CAP: 500 mg/nap 3 napig. STD Chlamydia: 1 g egyszeri dózis. Étkezéstől függetlenül. QT-prolongáló szerekkel óvatosan."
  }
}
