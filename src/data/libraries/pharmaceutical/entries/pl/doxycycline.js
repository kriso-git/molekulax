// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.624Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "doxycycline",
  "name": "Doxycycline",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Antybiotyk tetracyklinowy (Vibramycin). Lyme, profilaktyka malarii, trądzik, chlamydia, atypowe zapalenie płuc. Standard 100 mg.",
  "description": "Doksycyklina to długodziałająca tetracyklina (Pfizer Vibramycin, FDA 1967). Hamuje podjednostkę rybosomalną 30S (blok wiązania aminoacylo-tRNA). Spektrum: atypowe (Mycoplasma, Chlamydia, Rickettsia, Borrelia, Treponema), niektóre Gram-dodatnie, H. pylori (druga linia). Kluczowe wskazania: wczesna Lyme, atypowe zapalenie płuc, chlamydia STD, profilaktyka malarii (podróże), ciężki trądzik. Profil ogólnie dobrze tolerowany, fotouczulenie i GI najczęstsze.",
  "mechanism": "Blok podjednostki 30S → aminoacylo-tRNA nie może się związać → blok syntezy białek. Bakteriostatyczna.",
  "legalStatus": "UE/PL: na receptę (Vibramycin, Doxakne, generyki). USA: FDA Rx.",
  "bioavailability": "~95-100% (doustnie, \"praktycznie całkowicie wchłaniana\" — etykieta FDA Vibramycin)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "18-22 h (once or twice daily)",
  "atcCode": "J01AA02",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Wczesna Lyme (protokół 21-dniowy)",
    "Atypowe zapalenie płuc (Mycoplasma, Chlamydia)",
    "Chlamydia STD, rzeżączka (kombinacja)",
    "Profilaktyka malarii (podróż w obszar endemiczny)",
    "Trądzik (przewlekła niska dawka)",
    "Trądzik różowaty, dermatitis perianalna"
  ],
  "contraindications": [
    "Nadwrażliwość na tetracykliny",
    "Ciąża (uszkodzenie zębów i kości), dziecko < 8 lat"
  ],
  "commonSideEffects": [
    "Fotouczulenie (częste, krem przeciwsłoneczny OBOWIĄZKOWY)",
    "GI: nudności, wymioty, podrażnienie przełyku (przyjmuj stojąc z dużą ilością wody)",
    "Kandydoza (pochwowa, doustna)",
    "Ciężkie, rzadkie: pseudotumor cerebri (nadciśnienie wewnątrzczaszkowe), zapalenie C. diff, hepatotoksyczność"
  ],
  "cyp450": [
    "No significant CYP metabolism",
    "Minimal drug interactions"
  ],
  "crossMolInteractions": [
    "Antacyd (Al, Mg, Ca), żelazo, multiwitamina: 2-3 godzinny odstęp (chelatacja)",
    "Warfaryna: wzrost INR",
    "Doustna antykoncepcja: brak istotnej klinicznie interakcji (CDC)"
  ],
  "benefits": [
    "Złoty standard wczesnej Lyme",
    "Profilaktyka malarii dla podróżujących",
    "Tani, generyczny, długoterminowa dostępność",
    "Trądzik terapia przewlekła niskimi dawkami"
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
    "note": "Niska (50 mg/dzień): przewlekły trądzik. Standard (100 mg 1-2x/dzień): większość ostrych infekcji. Wysoka (200 mg/dzień): ciężka lub wczesna Lyme. Przyjmuj STOJĄC z dużą ilością wody. Krem przeciwsłoneczny OBOWIĄZKOWY. Antacyd/żelazo 2-3 h odstęp."
  }
}
