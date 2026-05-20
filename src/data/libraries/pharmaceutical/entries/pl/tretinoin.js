// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.626Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "tretinoin",
  "name": "Tretinoin",
  "image": "/pharmaceutical/cream-tube-white.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Miejscowy retinoid kwas all-trans-retinowy. Trądzik, fotostarzenie, leczenie hiperpigmentacji. Dermatologiczny złoty standard.",
  "description": "Tretynoina (kwas all-trans-retinowy) to pierwszy miejscowy retinoid (Ortho Retin-A, FDA 1971), dermatologiczny standard w trądziku + anti-aging. Aktywacja receptora retinoidowego (RAR) normalizuje keratynizację mieszkową (mechanizm trądziku), przyspiesza syntezę kolagenu (anti-aging) i zmniejsza pigmentację melaniny (hiperpigmentacja). Powszechne stężenia: 0,025%, 0,05%, 0,1% krem lub żel. Vs izotretynoina jest miejscowa — nieukładowa, ryzyko ciążowe ZNACZNIE NIŻSZE, ale unikać u kobiet w wieku rozrodczym.",
  "mechanism": "Aktywacja receptorów RAR-α/β/γ → modulacja transkrypcji genów → normalizacja keratynizacji + wzmocnienie kolagenu + redukcja melaniny.",
  "legalStatus": "UE/PL: na receptę (Atrederm, Locacid, Retin-A). USA: FDA Rx.",
  "bioavailability": "~20% (kapsułka doustna, zmienna — etykieta FDA Vesanoid; w leczeniu APL, NIE forma miejscowa)",
  "onsetTime": "8-12 weeks (acne improvement), 4-6 months (anti-aging visible)",
  "halfLife": "Topical, minimal systemic absorption",
  "atcCode": "D10AD01",
  "prescriptionStatus": "Na receptę (Rx), nadzór dermatologa",
  "indications": [
    "Trądzik (łagodny-średni)",
    "Fotostarzenie (delikatne zmarszczki, tekstura, pigmentacja)",
    "Hiperpigmentacja (melasma, pozapalna)",
    "Off-label: keratoza mieszkowa, rozstępy"
  ],
  "contraindications": [
    "Ciąża (względne, niskie wchłanianie ogólnoustrojowe, ale unikać)",
    "Aktywne wyprysk, ciężka łuszczyca w obszarze"
  ],
  "commonSideEffects": [
    "Suchość skóry, łuszczenie, podrażnienie (początkowo częste — \"retinization\")",
    "Fotouczulenie (KREM PRZECIWSŁONECZNY OBOWIĄZKOWY SPF 30+)",
    "Początkowy wybuch trądziku (purging, 2-4 tygodnie)",
    "Ciężkie, rzadkie: ciężkie podrażnienie (kontaktowe), fotodermatozy retinoidowe"
  ],
  "cyp450": [
    "Minimal systemic absorption (topical)",
    "No major systemic interactions"
  ],
  "crossMolInteractions": [
    "Nadtlenek benzoilu: stosuj o różnych porach (BPO utlenia tretynoinę)",
    "Kwasy AHA/BHA (glikolowy, salicylowy): addytywność podrażnienia, ostrożnie",
    "Inne retinoidy (adapalen): unikać jednocześnie"
  ],
  "benefits": [
    "Udowodniony efekt na trądzik i anti-aging (Kligman 1986)",
    "Redukcja hiperpigmentacji (melasma, PIH)",
    "Dermatologiczny złoty standard od 50+ lat"
  ],
  "studies": [
    {
      "title": "Topical tretinoin improves photodamaged facial skin",
      "authors": "Kligman AM, Grove GL, Hirose R et al.",
      "journal": "J Am Acad Dermatol. 1986;15(4 Pt 2):836-59.",
      "pmid": "3548421"
    },
    {
      "title": "Topical retinoid for acne: meta-analysis",
      "authors": "Yentzer BA, Hick J, Reese EL et al.",
      "journal": "Cutis. 2010;86(2):94-9.",
      "pmid": "20919605"
    },
    {
      "title": "Tretinoin for hyperpigmentation (melasma): randomized trial",
      "authors": "Griffiths CE, Goldfarb MT, Finkel LJ et al.",
      "journal": "Br J Dermatol. 1994;131(1):106-13.",
      "pmid": "8043420"
    }
  ],
  "related": [
    "isotretinoin",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 0.025,
      "medium": 0.05,
      "high": 0.1
    },
    "unit": "% topikális",
    "note": "Niska (0,025%): wrażliwa skóra, start anti-aging, podatna na suchość. Średnia (0,05%): standard trądzik i anti-aging. Wysoka (0,1%): oporny trądzik, grubsza skóra. Stosuj WIECZOREM w ilości groszku na czystą, suchą skórę. KREM SPF 30+ OBOWIĄZKOWY. Powolne wprowadzenie (2x/tydz → 4x/tydz → codziennie) by złagodzić podrażnienie."
  },
  "anecdote": "Raporty anegdotyczne opisują Tretynoinę jako jedno z najsilniejszych miejscowych leków na trądzik twarzy i ogólną jakość skóry. Początkowe podrażnienie — zaczerwienienie, wypryski, łuszczenie — zwykle pojawia się w pierwszym miesiącu i ustępuje przy dalszym stosowaniu. Najlepsze efekty są opóźnione: poprawa związana z kolagenem i zmiany tekstury pojawiają się po kilku miesiącach konsekwentnego stosowania. Doniesienia społeczności wskazują, że Tretynoina może zwiększać penetrację dodatkowych produktów pielęgnacyjnych, choć jest to głównie anegdotyczne. Ma węższe okno terapeutyczne niż kosmetyczne retinoidy — większość użytkowników znajduje stabilne stężenie bez potrzeby eskalacji. Uwaga: fotowrażliwość jest znacząca; codzienny SPF jest obowiązkowy. Obowiązuje przeciwwskazanie w ciąży."
}
