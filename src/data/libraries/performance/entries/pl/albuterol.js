// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.964Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "albuterol",
  "name": "Albuterol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Selektywny agonista β2 dla astmy zatwierdzony przez FDA (Ventolin). Krótszy okres półtrwania, bezpieczniejsza alternatywa.",
  "description": "Albuterol (międzynarodowo Salbutamol) to krótko działający selektywny agonista β2, pierwszorzędne leczenie ostrej astmy od lat 1980. (zatwierdzony FDA inhalator Ventolin/ProAir). Globalnie jeden z najczęściej przepisywanych leków. W off-label kulturystyce ma podobne efekty termogeniczne + ochrony mięśni jak Clenbuterol, ale ze znacznie krótszym okresem półtrwania (~5-6 h vs Clen 35-40 h). WADA dopuszcza inhalację do 1600 μg/24h.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Selektywny agonista β2"
    },
    {
      "label": "Okres półtrwania",
      "value": "5-6 godz (doustnie), 1.5-3 godz (inhalacja)"
    },
    {
      "label": "Czas wystąpienia",
      "value": "5-15 min (inhalacja), 15-30 min (doustnie)"
    },
    {
      "label": "Status prawny",
      "value": "USA: FDA Rx. UE: na receptę (Ventolin). WADA: inhalacja <1600 μg dozwolone."
    }
  ],
  "mechanism": "Selektywny agonista β2 rozluźniający mięśnie gładkie dróg oddechowych. Wewnątrzkomórkowy szlak identyczny z Clenbuterolem: β2 → Gs → cyklaza adenylanowa → cAMP → PKA → fosforylacja HSL → lipoliza. **RÓŻNICA vs Clenbuterol: KRÓTKIE zajęcie receptora** — szybka dysocjacja Albuterolu eliminuje przewlekłą down-regulację β2, więc brak kumulacji kardiotoksycznej, ALE szybsza tolerancja (1-2 tygodnie). Efekt anaboliczny skromniejszy.",
  "legalStatus": "USA: FDA Rx. UE: na receptę, dostępny w aptekach. WADA: inhalacja do 1600 μg/24h dozwolona, doustnie/dożylnie zakazane.",
  "onsetTime": "5-15 min (inhaled), 15-30 min (oral)",
  "halfLife": "5-6 h (oral)",
  "interactionsWith": [
    "caffeine",
    "beta-blockers",
    "MAOI",
    "tricyclic antidepressants"
  ],
  "aromatization": "Nie dotyczy — agonista β2, NIE steroid; brak interakcji z CYP19",
  "hepatotoxicity": "Niska — praktycznie brak hepatotoksyczności w dawce terapeutycznej; główne działania niepożądane to drżenie i tachykardia (etykieta FDA Proventil)",
  "wadaStatus": "monitored",
  "detectionWindow": "24-72 godziny mocz (próg WADA: 1000 ng/mL).",
  "benefits": [
    "Rozszerzenie oskrzeli (leczenie objawowe astmy)",
    "Umiarkowany efekt termogeniczny (BMR +3-5%)",
    "Ochrona masy w deficycie (mniej wyraźna niż Clen)",
    "Bezpieczniejszy profil kumulacji niż Clenbuterol"
  ],
  "quickStart": [
    "Kontekst edukacyjny: Albuterol to Rx dla astmy (FDA); doustne off-label",
    "Doustnie: 4-8 mg 3x dziennie (cykl Clen-podobny), maks. 24 mg/dzień",
    "Inhalator: 90-200 μg/dawka, maks. 1600 μg/24h przy WADA",
    "Maks. 4-6 tygodni ciągłego użycia (tolerancja)"
  ],
  "expectations": [
    {
      "label": "Pierwsza dawka",
      "body": "Łagodniejszy niż Clenbuterol: drżenie obecne ale słabsze; wzrost tętna +10-15 bpm."
    },
    {
      "label": "Tydzień 1-2",
      "body": "Tolerancja rozwija się szybko. Redukcja +0.2-0.3 kg/tydz powyżej placebo."
    },
    {
      "label": "Tydzień 4-6",
      "body": "Przerwa cyklu 1-2 tygodnie OFF. Albuterol bezpieczniejszy niż Clen, ale monitoring zalecany."
    }
  ],
  "quality": {
    "pure": [
      "Czysty inhalator Ventolin/ProAir lub tabletka z apteki",
      "Oficjalne źródło apteczne gwarantuje zawartość"
    ],
    "caution": [
      "Monitoring sercowy: dziennik ciśnienia, tętno spoczynkowe <100",
      "Drżenie, skurcze (tauryna + magnez łagodzi)",
      "Mechanizm hipokaliemii: aktywacja β2 stymuluje pompę Na/K-ATPazy w mięśniach, przesuwając K+ do wnętrza komórki → spadek potasu w surowicy (szczególnie przy wysokiej dawce + diuretyku). W ciężkich przypadkach ryzyko arytmii. Magnez 400 mg + suplementacja potasu mid-cycle zalecane.",
      "Bezsenność, lęk (łagodniejsze niż Clen)"
    ],
    "avoid": [
      "Zaburzenia sercowe (arytmia, ciężkie nadciśnienie) to przeciwwskazania",
      "Przeciwwskazany z terapią β-blokerami",
      "Nadczynność tarczycy, jaskra to przeciwwskazania",
      "Stosowanie off-label do redukcji tkanki tłuszczowej jest przeciwwskazane przy ciężkiej chorobie sercowo-naczyniowej — wskazanie medyczne (inhalator) jest inne",
      "Ciężki lęk, zaburzenia paniczne, padaczka",
      "Jednoczesne stosowanie MAOI — ryzyko przełomu nadciśnieniowego",
      "Ciąża i karmienie piersią (kategoria C, tylko gdy wyraźnie wskazane)"
    ]
  },
  "interactions": [
    "Kofeina: synergiczny efekt, stres rośnie",
    "β-bloker: blokuje efekt (przeciwwskazany u astmatyka)",
    "MAOI: ryzyko tachykardii i kryzysu nadciśnieniowego",
    "Diuretyk: skumulowane ryzyko hipokaliemii"
  ],
  "studies": [
    {
      "title": "Pharmacology and therapeutics of bronchodilators",
      "authors": "Cazzola M, Page CP, Calzetta L, Matera MG.",
      "journal": "Pharmacol Rev. 2012;64(3):450-504.",
      "pmid": "22611179"
    },
    {
      "title": "β2-Agonists and physical performance: a systematic review and meta-analysis of randomised controlled trials",
      "authors": "Pluim BM, de Hon O, Staal JB et al.",
      "journal": "Sports Med. 2011;41(1):39-57.",
      "pmid": "21142283"
    },
    {
      "title": "Effects of short-term salbutamol ingestion during a Wingate test",
      "authors": "Le Panse B, Collomp K, Portier H et al.",
      "journal": "Int J Sports Med. 2005;26(7):518-23.",
      "pmid": "16195983"
    },
    {
      "title": "Do inhaled beta(2)-agonists have an ergogenic potential in non-asthmatic competitive athletes?",
      "authors": "Kindermann W.",
      "journal": "Sports Med. 2007;37(2):95-102.",
      "pmid": "17241101"
    },
    {
      "title": "Review of WADA Prohibited Substances: Limited Evidence for Performance-Enhancing Effects",
      "authors": "Heuberger JAAC, Cohen AF.",
      "journal": "Sports Med. 2019;49(4):525-539.",
      "pmid": "30411235"
    },
    {
      "title": "The effects of albuterol and isokinetic exercise on the quadriceps muscle group",
      "authors": "Caruso JF, Signorile JF, Perry AC et al.",
      "journal": "Med Sci Sports Exerc. 1995;27(11):1471-6.",
      "pmid": "8587482"
    }
  ],
  "faq": [
    {
      "q": "Czym różni się od Clenbuterolu?",
      "a": "Oba są selektywnymi agonistami β2, ale Albuterol ma okres półtrwania 5-6 h vs Clenbuterol 35-40 h. Albuterol ma bezpieczniejszy profil i brak udokumentowanej hipertrofii serca przy normalnych dawkach. Efekt anaboliczny skromniejszy."
    },
    {
      "q": "Co oznacza status \"monitorowany\" WADA?",
      "a": "Inhalacyjny Albuterol do 1600 μg/24h dozwolony w kontekście astmy, pod warunkiem stężenia w moczu <1000 ng/mL. Doustnie/dożylnie zakazany. \"Monitorowany\" oznacza, że WADA śledzi wzorce."
    },
    {
      "q": "Czy jest naprawdę bezpieczniejszy niż Clen?",
      "a": "Tak, udokumentowane. Krótszy okres półtrwania zapobiega kumulacji. Intoksykacja Albuterolem jest klinicznie bardzo rzadka nawet przy wysokich dawkach, podczas gdy toksyczność i kardiomiopatia od Clenbuterolu są udokumentowane."
    },
    {
      "q": "Jaka jest różnica między lewalbuterolem a racemicznym albuterolem?",
      "a": "Klasyczny Albuterol to **mieszanina racemiczna**: enancjomer (R) jest farmakologicznie aktywny, enancjomer (S) nieaktywny lub potencjalnie kontrproduktywny (paradoksalne zwężenie oskrzeli w modelach przedklinicznych). **Lewalbuterol** (Xopenex) to czysty enancjomer (R), pokazujący **lekko zmniejszony wzrost tętna i drżenie** przy równoważnej skuteczności. Z powodu kosztów racemiczny Albuterol pozostaje globalnym standardem; Lewalbuterol głównie u dzieci lub pacjentów sercowo wrażliwych. W kontekście sportowym praktycznie równoważne."
    }
  ],
  "related": [
    "clenbuterol"  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 4,
      "medium": 8,
      "high": 16
    },
    "unit": "mg/nap",
    "note": "Doustnie 4-8 mg 3x/dziennie, maks. 24 mg/dzień. Inhalator 90-200 mcg/dawka. Bezpieczniejszy niż Clenbuterol z powodu krótszego okresu półtrwania."
  },
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": {
        "hu": "Orális tabletta — Salbutamol HCl",
        "en": "Oral tablet — Salbutamol HCl",
        "pl": "Tabletka doustna — Salbutamol HCl"
      },
      "image": "/performance/tablet-pile-white.png",
      "whatIs": "Tabletka Salbutamolu HCl (2 mg, 4 mg) — stosowana off-label w cyklach termogenicznych podobnych do Clenbuterolu, z ochroną masy mięśniowej. Dostępna w aptece (Ventolin 2 mg tabletki), co gwarantuje precyzyjną zawartość substancji czynnej, w odróżnieniu od produktów UGL.",
      "routeNote": "Wybierz formę doustną, gdy planujesz cykl redukcyjny w stylu Clenbuterolu: tabletki pozwalają na dokładne dawkowanie, a okres półtrwania ~5-6 godz daje bezpieczniejszy profil kumulacji niż Clenbuterol. Bez wskazania astmatycznego ta droga jest zakazana przez WADA — wyłącznie dla niekonkurujących sportowców w kontekście off-label.",
      "dosing": "4-8 mg PO TID, max 24 mg/dzień",
      "halfLife": "5-6 godz",
      "halfLifeActive": "5-6 godz",
      "bioavailability": "~30-40% (oral, gastric first-pass)",
      "onsetTime": "15-30 min",
      "aromatization": "Nie dotyczy — agonista β2, NIE steroid; brak interakcji z CYP19",
      "hepatotoxicity": "Niska — praktycznie brak hepatotoksyczności w dawkach terapeutycznych; drżenie i tachykardia to główne skutki uboczne (etykieta FDA Proventil)",
      "indications": "Off-label utrata tłuszczu + zachowanie mięśni w deficycie kalorycznym (cykl typu Clen)",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 4, "medium": 8, "high": 16 },
        "unit": "mg/dzień",
        "note": "Doustnie 4-8 mg 3x/dzień (cykl typu Clen), max 24 mg/dzień. Tolerancja rozwija się w ciągu 1-2 tygodni — cykl maksymalnie 4-6 tygodni, potem 2 tygodnie przerwy. Monitoring kardio + EKG baseline + kontrola 4-tygodniowa obowiązkowa. Magnez 400 mg + potas w połowie cyklu przeciw hipokaliemii."
      }
    },
    {
      "id": "inhaled",
      "routeId": "inhaled",
      "routeLabel": {
        "hu": "Inhaláló (MDI) — Ventolin / ProAir",
        "en": "Inhaler (MDI) — Ventolin / ProAir",
        "pl": "Inhalator (MDI) — Ventolin / ProAir"
      },
      "image": "/performance/inhaler-asthma.png",
      "whatIs": "Inhalator z odmierzaną dawką (MDI) — standardowa forma leczenia astmy Ventolin/ProAir. Dostarcza lek bezpośrednio do płuc przy minimalnym wchłanianiu ogólnoustrojowym. Zgodnie z przepisami WADA stosowanie do 1600 μg/24h jest dozwolone dla zawodników z astmą bez konieczności TUE.",
      "routeNote": "Wybierz inhalator, gdy głównym celem jest leczenie objawów ostrej astmy, lub gdy rywalizujesz pod kontrolą WADA i potrzebujesz bronchodylatatora. Ogólnoustrojowe działania niepożądane (drżenie, tachykardia) są znacznie łagodniejsze niż przy formie doustnej, ale off-label efekt termogeniczny i ochrona masy mięśniowej są też mniejsze.",
      "dosing": "90-200 μg/wdech PRN, max 1600 μg/24h próg WADA",
      "halfLife": "1.5-3 godz (lokalnie)",
      "halfLifeActive": "1.5-3 godz",
      "bioavailability": "~10-20% (systemowo, wysoka lokalna tkankowo)",
      "onsetTime": "5-15 min",
      "aromatization": "Nie dotyczy — agonista β2, NIE steroid; brak interakcji z CYP19",
      "hepatotoxicity": "Niska — efekt dominowany lokalnie w tkankach, poziom ogólnoustrojowy minimalny, stres wątrobowy pomijalny",
      "indications": "FDA-Rx astma + bronchodylatacja; sportowy legalny protokół TUE WADA-monitored",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 90, "medium": 200, "high": 1600 },
        "unit": "μg/wdech (max 1600 μg/24h próg WADA)",
        "note": "Inhalator MDI 90-200 μg/wdech w razie potrzeby (PRN). Sport wyczynowy akredytowany przez WADA: 1600 μg/24h maksymalna dozwolona dawka — stężenie w moczu musi pozostać <1000 ng/mL. Typowa dawka terapeutyczna: 90 μg (1 dawka) lub 180 μg (2 dawki) co 4-6 godz w razie potrzeby, max 4-8x/dzień."
      }
    }
  ],
  "defaultVariant": "oral"
}
