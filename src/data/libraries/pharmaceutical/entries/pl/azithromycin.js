// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.623Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "azithromycin",
  "name": "Azithromycin",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Antybiotyk makrolidowy (Pfizer Zithromax \"Z-pack\"). 5-dniowy krótki kurs. CAP, atypowe zapalenie płuc, STD. Ryzyko wydłużenia QT.",
  "description": "Azytromycyna to półsyntetyczny antybiotyk makrolidowy (Pfizer Zithromax, FDA 1991). Hamuje bakteryjną podjednostkę rybosomalną 50S (translokacja RNA), generalnie bakteriostatyczna, bakteriobójcza dla wysoko podatnych Gram-dodatnich (S. pneumoniae). Spektrum: typowe oddechowe (S. pneumoniae, H. influenzae) + atypowe (Mycoplasma, Chlamydia, Legionella) + STD (Chlamydia trachomatis, Neisseria gonorrhoeae). Unikalna PK: stężenie tkankowe 100x osocza, umożliwiając \"Z-pack\" 5-dniowy protokół. Ostrzeżenie FDA o wydłużeniu QT (Ray 2012 NEJM PMID 22591294 — podwyższona śmiertelność CV).",
  "mechanism": "Wiązanie z 50S rybosomem bakteryjnym → hamowanie translokacji mRNA → blok syntezy białek. Bakteriostatyczna. Wysoka penetracja tkankowa + powolne uwalnianie.",
  "legalStatus": "UE/PL: na receptę (Sumamed, Azitrolid, Zithromax, generyki). USA: FDA Rx.",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~68 h (very long, allows Z-pack format)",
  "atcCode": "J01FA10",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Środowiskowo nabyte zapalenie płuc (CAP, łagodne-średnie)",
    "Atypowe zapalenie płuc (Mycoplasma, Chlamydia, Legionella)",
    "Ostre zapalenie zatok, ucha, gardła",
    "STD: Chlamydia trachomatis (1 g jednorazowo), Neisseria gonorrhoeae (kombinacja CDC)"
  ],
  "contraindications": [
    "Nadwrażliwość na makrolidy (krzyżowa reaktywność z erytromycyną, klarytromycyną)",
    "Wrodzony zespół długiego QT"
  ],
  "commonSideEffects": [
    "GI: biegunka, nudności, dyskomfort brzucha (5-10%)",
    "Ciężkie, rzadkie: wydłużenie QT, torsade de pointes, wzrost śmiertelności CV (Ray 2012), zapalenie jelita C. diff, hepatotoksyczność"
  ],
  "cyp450": [
    "Minimal CYP3A4 substrate (vs erythromycin, clarithromycin both strong CYP3A4 inhibitors)",
    "Few drug interactions"
  ],
  "crossMolInteractions": [
    "Leki wydłużające QT (SSRI, antypsychotyk, antyarytmik): addytywne ryzyko QT",
    "Warfaryna: INR może wzrosnąć, monitor"
  ],
  "benefits": [
    "5-dniowy krótki kurs (Z-pack) dobry compliance",
    "Skuteczna na atypowe (Mycoplasma, Chlamydia)",
    "Leczenie STD jednorazową dawką (Chlamydia 1 g)"
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
    "note": "Standard Z-pack: 500 mg dzień 1, potem 250 mg/dzień dni 2-5 (łącznie 1,5 g). CAP: 500 mg/dzień przez 3 dni. STD Chlamydia: 1 g jednorazowo. Niezależnie od jedzenia. Ostrożność z lekami wydłużającymi QT."
  }
}
