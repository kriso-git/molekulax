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
      "title": "An Updated Review of Topical Tretinoin in Dermatology: From Acne and Photoaging to Skin Cancer.",
      "authors": "Balado-Simó P, Morgado-Carrasco D, Gómez-Armayones S",
      "journal": "J Clin Med",
      "pmid": "41302994"
    },
    {
      "title": "Management of Acne Vulgaris: A Review.",
      "authors": "Eichenfield DZ, Sprague J, Eichenfield LF",
      "journal": "JAMA",
      "pmid": "34812859"
    },
    {
      "title": "Efficacy and Safety of Generic Fluocinolone Acetonide, Hydroquinone, and Tretinoin Cream Compared With TRI-LUMA for the Treatment of Melasma.",
      "authors": "Hu H, Zhou P, Yao H",
      "journal": "J Cosmet Dermatol",
      "pmid": "40296512"
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
