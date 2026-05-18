// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.621Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "amlodipine",
  "name": "Amlodipine",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Bloker kanałów wapniowych dihydropirydyny (Pfizer Norvasc). Nadciśnienie + stabilna dławica. ASCOT-BPLA: lepsze wyniki z kombinacją ACEi.",
  "description": "Amlodypina to długodziałający CCB dihydropirydyny (Pfizer Norvasc, FDA 1987). Selektywnie hamuje kanały Ca typu L w mięśniach gładkich naczyń, powodując rozszerzenie tętnic. Badanie ASCOT-BPLA (Dahlöf 2005 Lancet PMID 16154016) wykazało wyższość kombinacji amlodypina + peryndopryl nad atenolol + bendroflumetiazyd dla redukcji MACE.",
  "mechanism": "Selektywne hamowanie kanałów Ca typu L w mięśniach gładkich naczyń → rozszerzenie. Minimalny efekt mięśnia sercowego.",
  "legalStatus": "UE/PL: na receptę (Norvasc, Amlodypina, generyki). USA: FDA Rx.",
  "bioavailability": "64-90% (doustnie, dawka terapeutyczna — etykieta FDA Norvasc)",
  "onsetTime": "1-2 weeks (steady BP)",
  "halfLife": "30-50 h (once-daily, very long)",
  "atcCode": "C08CA01",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Nadciśnienie, stabilna dławica",
    "Dławica naczynioskurczowa (Prinzmetala)"
  ],
  "contraindications": [
    "Ciężka hipotensja, wstrząs kardiogenny, stenoza aortalna (względne)"
  ],
  "commonSideEffects": [
    "Obrzęk obwodowy (kostki, częsty, zależny od dawki — 10-30%)",
    "Ból głowy, zaczerwienienie twarzy, kołatania",
    "Przerost dziąseł (przewlekły, rzadki)"
  ],
  "cyp450": [
    "CYP3A4 substrate (extensive)",
    "Long half-life buffers minor interactions"
  ],
  "crossMolInteractions": [
    "Simwastatyna: limit 20 mg/dzień przy kombinacji",
    "Silne inhibitory CYP3A4 (klarytromycyna, itrakonazol): poziom amlodypiny może wzrosnąć",
    "Sok grejpfrutowy: łagodny wzrost AUC"
  ],
  "benefits": [
    "Długi okres półtrwania → wybacza pominiętą dawkę",
    "ASCOT-BPLA: lepsza redukcja MACE z kombinacją ACEi",
    "Można łączyć z ACEi, ARB, statyną (Caduet = amlodypina + atorwastatyna)"
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
    "note": "Niska (2,5 mg): starsi lub niska masa ciała. Średnia (5 mg): standard. Wysoka (10 mg): oporne nadciśnienie. Rano, niezależnie od jedzenia. Przy obrzęku redukcja dawki lub dodanie ACEi."
  }
}
