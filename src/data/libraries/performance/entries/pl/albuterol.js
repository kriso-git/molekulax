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
      "title": "Selective beta-2-adrenoceptor agonists for asthma: a review",
      "authors": "Cazzola M, Page CP, Calzetta L, Matera MG.",
      "journal": "Pharmacol Rev. 2012;64(3):450-504.",
      "pmid": "22611179"
    },
    {
      "title": "Salbutamol and human performance: pharmacology and effects",
      "authors": "Pluim BM, de Hon O, Staal JB et al.",
      "journal": "Sports Med. 2011;41(1):39-57.",
      "pmid": "21142283"
    },
    {
      "title": "Oral salbutamol and skeletal muscle: a meta-analysis",
      "authors": "Le Panse B, Collomp K, Portier H et al.",
      "journal": "Int J Sports Med. 2005;26(7):514-520.",
      "pmid": "16195983"
    },
    {
      "title": "Asthma medications and athletic performance",
      "authors": "Kindermann W.",
      "journal": "Sports Med. 2007;37(2):95-102.",
      "pmid": "17241101"
    },
    {
      "title": "The performance-enhancing effects of inhaled and oral β2-agonists in healthy individuals: a systematic review and meta-analysis",
      "authors": "Heuberger JAAC, Cohen AF.",
      "journal": "Sports Med. 2019;49(2):217-247.",
      "pmid": "30184186"
    },
    {
      "title": "Anabolic effect of oral albuterol on skeletal muscle in resistance-trained men",
      "authors": "Caruso JF, Signorile JF, Perry AC et al.",
      "journal": "Med Sci Sports Exerc. 1995;27(10):1471-1476.",
      "pmid": "8806963"
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
    "clenbuterol",
    "ephedrine"
  ],
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
      "routeLabel": "Tabletka doustna",
      "image": "/performance/tablet-pile-white.png",
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
        "note": "Doustnie 4-8 mg 3x/dzień (cykl typu Clen), max 24 mg/dzień. Monitoring kardio + EKG baseline + kontrola 4-tygodniowa obowiązkowa."
      }
    },
    {
      "id": "inhaled",
      "routeId": "inhaled",
      "routeLabel": "Inhalator MDI",
      "image": "/performance/inhaler-asthma.png",
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
        "note": "Inhalator MDI 90-200 μg/wdech PRN. WADA-akredytowany sport wyczynowy 1600 μg/24h maksymalne legalne odstępstwo TUE."
      }
    }
  ],
  "defaultVariant": "oral"
}
