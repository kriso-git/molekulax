// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.602Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "azithromycin",
  "name": "Azithromycin",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Macrolide antibiotic (Pfizer Zithromax \"Z-pack\"). 5-day short course. CAP, atypical pneumonia, STDs. QT prolongation risk.",
  "description": "Azithromycin is a semi-synthetic macrolide antibiotic (Pfizer Zithromax, FDA 1991). Inhibits bacterial 50S ribosomal subunit (RNA translocation), generally bacteriostatic, bactericidal against highly susceptible Gram-positive (S. pneumoniae). Spectrum: typical respiratory (S. pneumoniae, H. influenzae) + atypical (Mycoplasma, Chlamydia, Legionella) + STDs (Chlamydia trachomatis, Neisseria gonorrhoeae). Unique PK: tissue concentration 100x plasma, allowing the \"Z-pack\" 5-day protocol (drug remains in tissues 5-7 more days). FDA warning on QT prolongation (Ray 2012 NEJM PMID 22591294 — elevated CV mortality).",
  "mechanism": "Bacterial 50S ribosome binding → mRNA translocation inhibition → protein synthesis block. Bacteriostatic. High tissue penetration + slow release.",
  "legalStatus": "EU/HU: prescription only (Sumamed, Azitrolid, Zithromax, generics). USA: FDA Rx.",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~68 h (very long, allows Z-pack format)",
  "atcCode": "J01FA10",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Community-acquired pneumonia (CAP, mild-moderate)",
    "Atypical pneumonia (Mycoplasma, Chlamydia, Legionella)",
    "Acute sinusitis, otitis media, pharyngitis",
    "STD: Chlamydia trachomatis (1 g single dose), Neisseria gonorrhoeae (CDC combination)"
  ],
  "contraindications": [
    "Macrolide hypersensitivity (erythromycin, clarithromycin cross-reactivity)",
    "Congenital long-QT syndrome"
  ],
  "commonSideEffects": [
    "GI: diarrhea, nausea, abdominal discomfort (5-10%)",
    "Severe, rare: QT prolongation, torsades de pointes, CV mortality rise (Ray 2012), C. diff colitis, hepatotoxicity"
  ],
  "cyp450": [
    "Minimal CYP3A4 substrate (vs erythromycin, clarithromycin both strong CYP3A4 inhibitors)",
    "Few drug interactions"
  ],
  "crossMolInteractions": [
    "QT-prolonging drugs (SSRI, antipsychotic, antiarrhythmic): additive QT risk",
    "Warfarin: INR may rise, monitor"
  ],
  "benefits": [
    "5-day short course (Z-pack) good compliance",
    "Effective against atypicals (Mycoplasma, Chlamydia)",
    "STD single-dose treatment (Chlamydia 1 g)"
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
    "note": "Z-pack standard: 500 mg day 1, then 250 mg/day days 2-5 (total 1.5 g). CAP: 500 mg/day for 3 days. STD Chlamydia: 1 g single dose. Food-independent. Caution with QT-prolonging drugs."
  }
}
