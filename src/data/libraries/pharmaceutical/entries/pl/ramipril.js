// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.620Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "ramipril",
  "name": "Ramipril",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Inhibitor ACE (Sanofi Tritace/Altace). Nadciśnienie + HFrEF + wtórna prewencja MI. Dowody HOPE od 1999.",
  "description": "Ramipril to prolek inhibitora ACE (aktywny metabolit ramiprilat) opracowany przez Sanofi-Aventis (Tritace UE, Altace USA, FDA 1991). Selektywne hamowanie enzymu konwertującego angiotensynę zmniejsza tworzenie angiotensyny II, powodując rozszerzenie naczyń i supresję aldosteronu. Badanie HOPE (Yusuf 2000 NEJM PMID 10639539) wykazało, że ramipril znacznie redukuje MACE u pacjentów wysokiego ryzyka CV niezależnie od obniżenia BP.",
  "mechanism": "Selektywne hamowanie ACE → redukcja angiotensyny II → rozszerzenie naczyń + supresja aldosteronu + akumulacja bradykininy (mechanizm kaszlu).",
  "legalStatus": "UE/PL: na receptę (Tritace, Amprilan, Piramil, generyki). USA: FDA Rx (Altace).",
  "bioavailability": "28% (doustnie, ramipril prolek; 44% dla ramiprilatu, metabolitu aktywnego — etykieta FDA Altace, dawka 5 mg)",
  "onsetTime": "1-2 h (acute BP), 3-4 weeks (steady-state)",
  "halfLife": "13-17 h (active ramiprilat, once-daily)",
  "atcCode": "C09AA05",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Nadciśnienie, HFrEF",
    "Wtórna prewencja MI i udaru (dowody HOPE)",
    "Nefropatia cukrzycowa"
  ],
  "contraindications": [
    "Ciąża (kategoria D-X FDA, uszkodzenie nerek płodu)",
    "Obustronne zwężenie tętnicy nerkowej",
    "Wywiad obrzęku naczynioruchowego (zwłaszcza dziedzicznego)"
  ],
  "commonSideEffects": [
    "Suchy, irytujący kaszel (5-20%, mechanizm bradykininowy — zmiana na ARB)",
    "Hiperkaliemia (zwłaszcza w niewydolności nerek lub z diuretykami K-szczędzącymi)",
    "Hipotensja ortostatyczna (pierwsza dawka), zawroty głowy",
    "Ciężkie, rzadkie: obrzęk naczynioruchowy (~0,1-0,7%, nagłe), ostre uszkodzenie nerek przy obustronnym zwężeniu"
  ],
  "cyp450": [
    "Hydrolyzed by hepatic carboxylesterase (not CYP-dependent)",
    "Active ramiprilat eliminated renally"
  ],
  "crossMolInteractions": [
    "Diuretyk K-szczędzący (spironolakton): zwiększone ryzyko hiperkaliemii",
    "NSAID: pogorszenie nerek, zmniejszony efekt BP",
    "ARB (losartan), DRI (aliskiren): podwójna blokada RAS — unikać",
    "Lit: poziom litu może wzrosnąć, monitor"
  ],
  "benefits": [
    "Redukcja MACE u wysokiego ryzyka CV (HOPE, 22%)",
    "Redukcja śmiertelności HFrEF",
    "Redukcja progresji nefropatii cukrzycowej"
  ],
  "studies": [
    {
      "title": "Effects of ramipril on cardiovascular and microvascular outcomes (HOPE)",
      "authors": "Yusuf S, Sleight P, Pogue J et al.",
      "journal": "N Engl J Med. 2000;342(3):145-53.",
      "pmid": "10639539"
    },
    {
      "title": "Ramipril versus placebo in patients with left ventricular dysfunction post-MI (AIRE)",
      "authors": "AIRE Study Investigators.",
      "journal": "Lancet. 1993;342(8875):821-8.",
      "pmid": "8104270"
    }
  ],
  "related": [
    "bisoprolol",
    "amlodipine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tygodnie 1-2 (start)",
        "dose": "2.5"
      },
      {
        "phase": "Tydzień 3+ (cel)",
        "dose": "5"
      },
      {
        "phase": "Maks. dawka",
        "dose": "10"
      }
    ],
    "unit": "mg/nap",
    "note": "Przyjmuj rano. Ostrzeżenie o ortostazie przy pierwszej dawce. Kontrola kreatyniny i K+ po 2-4 tygodniach. Przy kaszlu zmiana na ARB."
  }
}
