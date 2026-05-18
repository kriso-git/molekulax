// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.578Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "amlodipine",
  "name": "Amlodipine",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Dihidropiridin-típusú kalciumcsatorna-blokkoló (Pfizer Norvasc). Hipertenzió + stabil angina. ASCOT-BPLA: superior outcome ACE-i kombinációval.",
  "description": "Az Amlodipine egy hosszú-hatású dihidropiridin CCB (Pfizer Norvasc, FDA 1987). A vaszkuláris simaizomzat L-típusú Ca-csatornáját szelektíven gátolja, ami artériás vazodilatációhoz vezet (csekély szívizom-érintettség, vs Verapamil). Az ASCOT-BPLA trial (Dahlöf 2005 Lancet PMID 16154016) szerint az Amlodipine + Perindopril kombináció szuperior az Atenolol + Bendroflumethiazide-hoz képest MACE-csökkentés-szempontból. Standard a hipertenzió- és stabil-angina-portfólió.",
  "mechanism": "L-típusú Ca-csatorna szelektív gátlása érfali simaizomban → értágulat. Minimális szívizom-érintettség.",
  "legalStatus": "EU/HU: vényköteles (Norvasc, Amlodipin, generikus). USA: FDA Rx.",
  "bioavailability": "64-90% (orális, terápiás dózis — FDA Norvasc label)",
  "onsetTime": "1-2 weeks (steady BP)",
  "halfLife": "30-50 h (once-daily, very long)",
  "atcCode": "C08CA01",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Hipertenzió, stabil angina",
    "Vasospastikus angina (Prinzmetal)"
  ],
  "contraindications": [
    "Súlyos hipotenzió, kardiogén sokk, aortastenosis (relatív)"
  ],
  "commonSideEffects": [
    "Periférialás edéma (boka, gyakori, dóziseffekt — 10-30%)",
    "Fejfájás, kipirult arc, palpitációk",
    "Gingiva-hiperplázia (krónikus, ritka)"
  ],
  "cyp450": [
    "CYP3A4 substrate (extensive)",
    "Long half-life buffers minor interactions"
  ],
  "crossMolInteractions": [
    "Simvastatin: 20 mg/nap-os Simvastatin-limit kombináció esetén",
    "Erős CYP3A4 inhibitor (Clarithromycin, Itraconazole): plazma-Amlodipine emelkedhet",
    "Grapefruit-lé: enyhe AUC-emelkedés"
  ],
  "benefits": [
    "Hosszú felezési idő → forgiving missed dose",
    "ASCOT-BPLA: szuperior MACE-redukció ACE-i kombinációval",
    "Kombinálható ACE-i, ARB, statin-tal (Caduet = Amlodipine + Atorvastatin)"
  ],
  "studies": [
    {
      "title": "Prevention of cardiovascular events with amlodipine + perindopril vs atenolol + bendroflumethiazide (ASCOT-BPLA)",
      "authors": "Dahlöf B, Sever PS, Poulter NR et al.",
      "journal": "Lancet. 2005;366(9489):895-906.",
      "pmid": "16154016"
    },
    {
      "title": "Amlodipine in coronary artery disease (CAMELOT)",
      "authors": "Nissen SE, Tuzcu EM, Libby P et al.",
      "journal": "JAMA. 2004;292(18):2217-25.",
      "pmid": "15536108"
    }
  ],
  "related": [
    "ramipril",
    "bisoprolol"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2.5,
      "medium": 5,
      "high": 10
    },
    "unit": "mg/nap",
    "note": "Alacsony (2,5 mg): idős vagy alacsony testtömeg. Mérsékelt (5 mg): standard. Magas (10 mg): rezisztens hipertenzió. Reggel, étkezéstől függetlenül. Periférialás edéma esetén dóziscsökkentés vagy ACE-i hozzáadás (mitigálja)."
  }
}
