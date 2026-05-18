// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.582Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "doxycycline",
  "name": "Doxycycline",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Tetraciklin antibiotikum (Vibramycin). Lyme, malária-prevenció, acne, klamidia, atipikus pneumónia. 100 mg standard.",
  "description": "A Doxycycline egy hosszú-hatású tetraciklin (Pfizer Vibramycin, FDA 1967). A bakteriális 30S riboszomális alegységet gátolja (aminoacyl-tRNS-kötés blokk). Spektrum: atipikus organizmusok (Mycoplasma, Chlamydia, Rickettsia, Borrelia, Treponema), néhány Gram-pozitív (Staphylococcus érzékeny törzsek), Helicobacter pylori (másodlagos vonal). Klinikailag legjelentősebb indikációi: Lyme-betegség korai stádium, atipikus pneumónia, klamidia STD, malária-prevenció (utazás), súlyos acne (alacsony dózis krónikusan). Mellékhatás-profil általában jól tolerált, fototoxicitás és GI-mellékhatás a leggyakoribb.",
  "mechanism": "30S riboszomális alegység-blokk → aminoacyl-tRNS nem tud kötődni → fehérje-szintézis blokk. Bakteriosztatikus.",
  "legalStatus": "EU/HU: vényköteles (Vibramycin, Doxakne, generikus). USA: FDA Rx.",
  "bioavailability": "~95-100% (orális, \"virtually completely absorbed\" — FDA Vibramycin label)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "18-22 h (once or twice daily)",
  "atcCode": "J01AA02",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Lyme-betegség korai stádium (21 napos protokoll)",
    "Atipikus pneumónia (Mycoplasma, Chlamydia)",
    "Klamidia STD, gonorrhoea (kombináció)",
    "Malária prevenció (utazás endémiás területre)",
    "Acne vulgaris (krónikus alacsony-dózis)",
    "Rosacea, perianális dermatitisz"
  ],
  "contraindications": [
    "Tetraciklin-hipersenzitivitás",
    "Terhesség (fog- és csont-fejlődési károsodás), 8 év alatti gyermek"
  ],
  "commonSideEffects": [
    "Fototoxikus reakció (gyakori, napvédelem KÖTELEZŐ)",
    "GI: hányinger, hányás, eszofagusz-irritáció (állva, sok vízzel bevenni)",
    "Süllyedt-só candidiasis (vaginális, oralis)",
    "Súlyos, ritka: pszeudotumor cerebri (intrakraniális hipertenzió), C. diff colitis, hepatotoxicitás"
  ],
  "cyp450": [
    "No significant CYP metabolism",
    "Minimal drug interactions"
  ],
  "crossMolInteractions": [
    "Antacid (Al, Mg, Ca), vas, multivitamin: 2-3 órás távolság (chelát-képződés)",
    "Warfarin: INR-emelkedés",
    "Orális fogamzásgátló: nincs klinikailag szignifikáns interakció (CDC)"
  ],
  "benefits": [
    "Lyme-betegség korai stádium gold-standard",
    "Malária prevenció utazóknak",
    "Olcsó, generikus, hosszú-távú elérhetőség",
    "Acne krónikus alacsony-dózisú terápia"
  ],
  "studies": [
    {
      "title": "Treatment of Lyme disease: 2020 IDSA guideline",
      "authors": "Lantos PM, Rumbaugh J, Bockenstedt LK et al.",
      "journal": "Clin Infect Dis. 2021;72(1):e1-e48.",
      "pmid": "33417672"
    },
    {
      "title": "Doxycycline for malaria prophylaxis",
      "authors": "Tan KR, Magill AJ, Parise ME et al.",
      "journal": "Am J Trop Med Hyg. 2011;84(4):517-31.",
      "pmid": "21460003"
    },
    {
      "title": "Doxycycline in atypical community-acquired pneumonia",
      "authors": "Bartlett JG, Mundy LM.",
      "journal": "N Engl J Med. 1995;333(24):1618-24.",
      "pmid": "7477199"
    }
  ],
  "related": [
    "amoxicillin",
    "azithromycin",
    "ciprofloxacin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 50,
      "medium": 100,
      "high": 200
    },
    "unit": "mg/nap",
    "note": "Alacsony (50 mg/nap): acne krónikus. Standard (100 mg 1-2x/nap): legtöbb akut infekció. Magas (200 mg/nap): súlyos infekció vagy Lyme korai stádium. ÁLLVA, sok vízzel bevenni (eszofagusz-irritáció). Napvédelem KÖTELEZŐ. Antacid/vas 2-3 órás eltolva."
  }
}
