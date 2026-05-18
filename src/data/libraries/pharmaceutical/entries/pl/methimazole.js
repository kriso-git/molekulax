// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.622Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "methimazole",
  "name": "Methimazole",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Lek przeciwtarczycowy (tiamazol, Merck), pierwsza linia w chorobie Gravesa i nadczynności. Hamuje peroksydazę tarczycową.",
  "description": "Metimazol (Tapazole USA, tiamazol UE) to pierwsza linia w nadczynności tarczycy. Selektywnie hamuje peroksydazę tarczycową (TPO) zmniejszając syntezę T3/T4. Cooper 2005 (NEJM PMID 15703424) wykazał, że 18-24-miesięczne leczenie w chorobie Gravesa daje ~50% wskaźnik remisji. Profil działań: łagodne częste (wysypka, nudności), ciężkie rzadkie (agranulocytoza 0,2-0,5%, hepatotoksyczność). Propylotiouracyl (PTU) to starsza alternatywa, ale z powodu hepatotoksyczności pierwsza linia tylko w 1. trymestrze ciąży.",
  "mechanism": "Selektywne hamowanie peroksydazy tarczycowej (TPO) → blokada jodowania tyrozyny → redukcja syntezy T3/T4. NIE hamuje uwalniania prefabrykowanego hormonu (opóźniony efekt 2-4 tygodnie).",
  "legalStatus": "UE/PL: na receptę (Thyrozol, Metizol). USA: FDA Rx (Tapazole).",
  "onsetTime": "2-4 weeks (T3/T4 reduction, since preformed stores deplete)",
  "halfLife": "4-6 h (but pharmacodynamic effect longer due to thyroid concentration)",
  "atcCode": "H03BB02",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Choroba Gravesa (autoimmunologiczna nadczynność) pierwsza linia",
    "Toksyczne wole wieloguzkowe, gruczolak toksyczny",
    "Przygotowanie do tyreoidektomii lub jodu radioaktywnego (eutyreoza)"
  ],
  "contraindications": [
    "Wywiad ciężkiego działania hematologicznego lub wątrobowego",
    "Pierwszy trymestr ciąży (preferowany PTU, ryzyko aplazji)"
  ],
  "commonSideEffects": [
    "Wysypka skórna (3-5%, zależna od dawki)",
    "GI: nudności, wymioty, zaburzenia smaku",
    "Ciężkie, rzadkie: agranulocytoza (0,2-0,5%, przy gorączce/bólu gardła NATYCHMIAST CBC), hepatotoksyczność (rzadsza niż PTU), zapalenie naczyń (ANCA+)"
  ],
  "cyp450": [
    "Hepatic metabolism (multiple pathways)",
    "CYP-dependence minor"
  ],
  "crossMolInteractions": [
    "Warfaryna: redukcja efektu (utrata przyspieszonego metabolizmu z nadczynności)",
    "Beta-bloker (propranolol, bisoprolol): kontrola objawowa nadczynności do efektu metimazolu"
  ],
  "benefits": [
    "~50% remisja w chorobie Gravesa po 18-24 miesiącach",
    "Niższa hepatotoksyczność niż PTU",
    "Dawkowanie raz lub dwa razy dziennie"
  ],
  "studies": [
    {
      "title": "Hyperthyroidism: a review (Cooper 2005)",
      "authors": "Cooper DS.",
      "journal": "N Engl J Med. 2005;352(9):905-17.",
      "pmid": "15745981"
    },
    {
      "title": "Methimazole vs propylthiouracil pregnancy outcomes",
      "authors": "Andersen SL, Olsen J, Wu CS et al.",
      "journal": "J Clin Endocrinol Metab. 2013;98(11):4373-81.",
      "pmid": "24151287"
    }
  ],
  "related": [
    "levothyroxin",
    "liothyronine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Łagodna nadczynność (start)",
        "dose": "5"
      },
      {
        "phase": "Średni przypadek",
        "dose": "15"
      },
      {
        "phase": "Ciężki przypadek (maks.)",
        "dose": "30"
      }
    ],
    "unit": "mg/nap",
    "note": "Start 10-30 mg/dzień wg ciężkości, 1-2x/dzień. Po 4-6 tygodniach kontrola TSH + wolnego T4, potem podtrzymanie 5-10 mg/dzień. Przy gorączce/bólu gardła NATYCHMIAST CBC + odstawienie (agranulocytoza)."
  }
}
