// FSH-rec (Gonal-F / Puregon) — Rekombinowany FSH (ekspresja CHO), selektywna
// stymulacja Sertoli-FSHR. Nisza w PCT po AAS: odbudowa azoospermii + wsparcie
// Sertoli obok HCG-LH. Cross-frame: w przyszłej bibliotece peptydów
// `fsh-rec-peptid`. Źródła: EMA Gonal-F SPC (Merck Serono 1995), EMA Puregon
// SPC (Organon 1996), Burgues 1997 PMID 9176246, Liu 2009 PMID 19435775.

export default {
  "id": "fsh-rec-perf",
  "name": "FSH-rec (Gonal-F / Puregon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Rekombinowany FSH (ekspresja CHO) — selektywna stymulacja Sertoli-FSHR, BRAK aktywności LH. Nisza w PCT po AAS: odbudowa azoospermii + wsparcie Sertoli obok HCG-LH. Drogie (€300+/fiolka 75 IU UE). Cross-frame: w przyszłej bibliotece peptydów `fsh-rec-peptid`.",
  "description": "FSH-rec (rekombinowana follikulotropina) to glikoproteina produkowana biotechnologicznie wyrażana w linii komórkowej jajnika chińskiego chomika (CHO, Chinese Hamster Ovary). Dwie główne marki: Gonal-F (Merck Serono, EMA 1995, FDA 1997) i Puregon/Follistim (Organon, EMA 1996, FDA 1997). Rekombinowana produkcja rozwiązała problemy czystości związane ze źródłem urinarnym (zanieczyszczenie LH w erze Pergonalu, ryzyko prionowe w kontekście vCJD) — Gonal-F + Puregon zapewniają czystą aktywność FSH, BRAK ubocznej aktywności LH. **Kontekst PCT po AAS**: niszowa pozycja FSH-rec pojawia się gdy wymagany jest selektywny stymulus Sertoli. Typowe wskazanie: odbudowa azoospermii po cyklu hard-suppression długiego (>20 tygodni) lub 'blast-and-cruise', gdzie funkcjonalność Leydiga może być zachowana (protokół HCG mid-cycle lub endogenny restart niskiego LH) ALE aktywność receptora FSH Sertoli nie wraca bez oddzielnego stymulusu. FSH-rec działa wtedy jako specyficzny aktywator Sertoli-FSHR → restart spermatogenezy, wzrost inhibiny B. **Uwaga cross-frame**: to wpis z sufiksem `-perf`; przyszły batch biblioteki peptydów doda wpis `fsh-rec-peptid` (framing fertility-clinic — IVF male-factor + protokół ICSI sperm-prep). WADA-zakazany cały rok (S2 Hormony Peptydowe).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Rekombinowany FSH (ekspresja CHO) — selektywny agonista Sertoli FSHR, BRAK aktywności LH"},
    {"label": "Dawkowanie (PCT odbudowa azoospermii)", "value": "75-150 IU EOD × 4-12 tygodni"},
    {"label": "Okres półtrwania", "value": "~24-36 godzin (rekombinowany)"},
    {"label": "Początek działania", "value": "Wzrost inhibiny B 2-4 tygodnie, wzrost liczby plemników 3-9 miesięcy"},
    {"label": "Status prawny", "value": "EMA Rx Gonal-F (1995) + Puregon (1996), FDA Rx (1997), WADA S2 (zakazany)"}
  ],
  "mechanism": "FSH-rec to rekombinowana glikoproteina strukturalnie identyczna z naturalną folikulotropiną (podjednostka α + β, wzorzec glikozylacji podobny do endogennego FSH). Źródło biotechnologiczne: linia komórek CHO genetycznie zmodyfikowana do ekspresji genów ludzkiego FSH-α + FSH-β (kotransfekcja dwóch plazmidów). Aktywność: wyłącznie agonizm receptora FSHR komórek Sertoli (Leydig NIE stymulowany, ponieważ Leydig LHCGR jest LH-specyficzny). Efekt FSH: regulacja spermatogenezy (mediowane przez Sertoli dojrzewanie → liczenie spermatogonii), produkcja inhibiny B (marker Sertoli), synteza białka wiążącego androgeny (ABP). W kontekście PCT po AAS stymulus Sertoli NIE zastępuje stymulusu Leydiga (wzrost Test na FSH-rec nieoczekiwany) — stąd klasyczny protokół używa HCG + FSH-rec podwójnego stymulusu.",
  "legalStatus": "USA: FDA Rx Gonal-F (zatwierdzenie Merck Serono 1997), Follistim (Organon 1997). UE: EMA Rx Gonal-F (1995), Puregon (1996). HU + PL: zarejestrowane (Gonal-F, Puregon Rx). WADA: S2.2 Hormony Peptydowe (zakazane w zawodach + poza zawodami).",
  "onsetTime": "Wzrost inhibiny B 2-4 tygodnie, wzrost liczby plemników 3-9 miesięcy",
  "halfLife": "~24-36 godzin (rekombinowany FSH, iniekcja SC)",
  "halfLifeActive": "Efekt kliniczny 3-5 dni (pojedyncza dawka)",
  "interactionsWith": ["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"],
  "aromatization": "Brak bezpośredniej aromatyzacji — FSH NIE stymuluje produkcji testikularnego Test, więc endogenny wzrost Test pojawia się tylko w połączeniu z HCG. Monoterapia FSH-rec klinicznie nie podnosi poziomów E2.",
  "hepatotoxicity": "Brak stresu wątrobowego — iniekcja SC rekombinowanego białka.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS; selektywny stymulus Sertoli)",
  "bindingAffinity": "FSH-FSHR Kd ~0,1 nM, receptor wyrażany wyłącznie na komórkach Sertoli. Wyższa czystość niż urinarno-ekstrahowany efekt FSH HMG.",
  "detectionWindow": "WADA-akredytowany immunoassay urinary FSH wykrywanie — marker rekombinowanego FSH rozróżnialny od endogennego FSH przez specyficzny wzorzec glikozylacji (publikacje Bidlingmaier 2010s).",
  "benefits": [
    "Selektywny stymulus Sertoli (cel odbudowy spermatogenezy)",
    "Wyższa czystość niż HMG (urinarno-ekstrahowana mieszanina FSH-LH)",
    "Szeroka baza badań klinicznych (fertility-clinic 25+ lat)",
    "Strzykawka napełniona pen wygodne dawkowanie (Gonal-F injection pen)",
    "Standaryzowana aktywność (rekombinowany batch-konsystentny)"
  ],
  "quickStart": [
    "Protokół z akcentem Sertoli: 75-150 IU EOD × 4-12 tygodni + HCG mid-cycle (stymulus Leydiga oddzielony)",
    "Rekonstytucja: pen napełniony (Gonal-F) lub ampułka + woda bakteriostatyczna (Puregon ampułka)",
    "Dawkowanie pen: w skalibrowanych krokach 12,5 IU (multi-dose pen Gonal-F 300/450/900 IU patron)",
    "Iniekcja SC (tkanka brzucha lub uda, strzykawka 27-30G)",
    "Przechowywanie: pen napełniony 2-8°C przez 28 dni (roztwór płynny), liofilizowana ampułka temperatura pokojowa",
    "Wycena: Gonal-F 75 IU pen ~€300-400 apteka UE; długoterminowy koszt narasta",
    "Badania krwi: inhibina B (marker Sertoli, baseline + 4 tygodnie + 12 tygodni), analiza nasienia (3-9 miesięcy)"
  ],
  "expectations": [
    {"label": "Tygodnie 1-2", "body": "Restart Sertoli zaczyna, inhibina B nadal niska (mierzalny wzrost w 3-4 tygodniu). Zmiana objawowa minimalna."},
    {"label": "Tydzień 4", "body": "Inhibina B wzrasta mierzalnie (odbudowa aktywności Sertoli). Cykl spermatogenezy 64-74 dni, więc widoczny wzrost liczby plemników 8-12 tygodni później."},
    {"label": "Miesiące 3-9", "body": "Powrót liczby plemników mierzalny (zmienny zależnie od protokołu). Dla długoterminowej odbudowy potrzeba 3-6 miesięcy po bridge HMG."},
    {"label": "Post-protokół", "body": "Analiza nasienia potwierdza liczbę + motorykę. Jeśli cel fertility-success → kontekst IVF/ICSI sperm-prep."}
  ],
  "quality": {
    "pure": [
      "Gonal-F 75 IU pen napełniony (Merck Serono) — jakość Rx farmaceutyczna (UE + USA)",
      "Gonal-F 300/450/900 IU multi-dose patron (Merck Serono) — Rx, bardziej opłacalny na długich protokołach",
      "Puregon/Follistim 50/75/100/150 IU ampułka (Organon) — jakość Rx farmaceutyczna",
      "UGL rekombinowany FSH — RZADKIE (rekombinowana produkcja skomplikowana, mało źródeł UGL), HPLC + immunoassay-testowane źródło obowiązkowe",
      "Indyjski biosimilar (Folicare, Recagon) — dostępny w niektórych aptekach UE, jakość farmaceutyczna"
    ],
    "caution": [
      "Wysoka cena — €300-400/fiolka 75 IU vs Menopur €20-25/75 IU; dla długoterminowej odbudowy HMG bardziej opłacalny",
      "Akcent Sertoli-only — oddzielny stymulus Leydiga potrzebny (HCG lub endogenny restart LH)",
      "Ryzyko OHSS (Ovarian Hyperstimulation Syndrome) we wskazaniu kobiecym — pacjent męski N/A",
      "W zespole Klinefeltera FSH-rec nieskuteczny (defekt Sertoli pierwotne pochodzenie)"
    ],
    "avoid": [
      "Zespół Klinefeltera lub inna delecja chromosomu Y (defekt Sertoli pierwotny)",
      "Aktywny guz jąder lub przebyty guz komórek zarodkowych",
      "Wywiad raka prostaty",
      "Nadwrażliwość na FSH lub substancję pomocniczą z komórek CHO"
    ]
  },
  "interactions": [
    "Kombinacja z HCG: standardowy 'HCG + FSH-rec' podwójny stymulus restart full-axis (LH-Leydig + FSH-Sertoli oddzielnie)",
    "Alternatywa HMG: jeśli ważna efektywność kosztowa i stymulus LH też potrzebny → HMG (mixed FSH+LH) może zastąpić",
    "Bridge SERM (Nolvadex/Clomid): standardowy post-protokół PCT",
    "Gonadorelin: podwzgórzowy stymulus upstream, FSH-rec downstream — protokół sekwencyjny opcjonalnie",
    "TRT: NIE łączony (downregulacja Sertoli FSHR pod chroniczną ekspozycją Test)"
  ],
  "studies": [
    {"title": "Fertility outcomes in male adults with congenital hypogonadotropic hypogonadism treated during puberty with human chorionic gonadotropin and recombinant follicle stimulating hormone.", "authors": "Grob F, Keshwani R, Angley E", "journal": "J Paediatr Child Health", "pmid": "38572627"},
    {"title": "Congenital combined pituitary hormone deficiency patients have better responses to gonadotrophin-induced spermatogenesis than idiopathic hypogonadotropic hypogonadism patients.", "authors": "Mao J, Xu H, Wang X, Wu X, Nie M, Zhang H, Han B, Liu Z, Zhang K, Lian S, Lu S, Wang X, Chen N, Sun B, Liu J, Cui Q", "journal": "Hum Reprod", "pmid": "26141714"},
    {"title": "Addition of recombinant follicle-stimulating hormone to human chorionic gonadotropin treatment in adolescents and young adults with hypogonadotropic hypogonadism promotes normal testicular growth and may promote early spermatogenesis.", "authors": "Zacharin M, Sabin MA, Nair VV, Nicolaides R", "journal": "Fertil Steril", "pmid": "22763096"}
  ],
  "faq": [
    {"q": "FSH-rec vs HMG — kiedy potrzebny selektywny FSH?", "a": "Dwa scenariusze: (1) efektywność kosztowa: HMG (~€20-25/75 IU) znacznie tańszy niż FSH-rec (~€300-400/75 IU) — ALE HMG zapewnia mieszany FSH+LH, co jest zbędne jeśli HCG już zapewnia oddzielny stymulus LH. (2) Cel czystego akcentu Sertoli: jeśli LH jest stabilizowany przez inną drogę (HCG bridge lub endogenny restart niskiego LH), i potrzebny tylko stymulus Sertoli → selektywność FSH-rec korzystna. W praktyce klinicznej HMG + HCG często bardziej opłacalny niż FSH-rec + HCG."},
    {"q": "Szybkość odbudowy azoospermii?", "a": "Powolny proces — cykl spermatogenezy 64-74 dni, więc pierwszy wzrost liczby plemników występuje w 8-12 tygodni, pełna odbudowa w 3-9 miesięcy zależnie od stopnia hard-suppression. W praktyce klinicznej według Liu 2002 PMID 11870114: FSH-rec 150 IU EOD × 12-24 tygodnie, połączone z HCG 1000-2000 IU EOD. Odbudowa spermatogenezy u mężczyzn z azoospermią 60-80% (zależnie od stopnia hard-suppression i czasu trwania)."},
    {"q": "Koszt?", "a": "Wysoki. Gonal-F 75 IU pen napełniony €300-400, Puregon ampułka €280-350. Na długoterminowym protokole (12-24 tygodnie) kumulatywny koszt może osiągnąć €5000-15000. Bardziej opłacalne alternatywy: (1) HMG (Menopur) ~€20-25/75 IU LH-FSH mieszane; (2) Indyjski biosimilar (Folicare, Recagon) ~€100-150/75 IU. Klinicznie wszystkie trzy skuteczne, tylko poziom czystości i selektywność FSH różnią się."},
    {"q": "Czy może być używany przy uporczywej sterylności?", "a": "Tak — pierwotnym klinicznym wskazaniem FSH-rec jest niepłodność męska związana z hipogonadyzmem hipogonadotropowym (zespół Kallmanna, idiopatyczny wtórny hipogonadyzm, uszkodzenie podwzgórza). Wtórny hipogonadyzm pośredniczony przez AAS (anabolic-steroid-induced hypogonadism, ASIH) ma podobny mechanizm, protokół kliniczny przenosi się. 6-12 miesięcy kombinacji FSH-rec + HCG spodziewa się 60-80% odbudowy plemników, zależnie od stopnia hard-suppression."}
  ],
  "related": ["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 75, "medium": 112.5, "high": 150},
    "unit": "IU/dawkę (SC, częstość EOD)",
    "note": "Protokół odbudowy azoospermii: 75-150 IU EOD × 4-12 tygodni, połączone z HCG (HCG 1000-2000 IU EOD). Cel pojedynczy protokół 12-24 tygodnie. Iniekcja SC (tkanka brzucha lub uda, strzykawka 27-30G). Pen-dawkowanie wygodniejsze na chronicznych protokołach. NIE monoterapia (stymulus Sertoli only-FSH → funkcjonalność Leydiga potrzebna oddzielnie)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protokół",
      "timing": "Post długiego cyklu 4-6 tygodni przerwa, lub hard-suppression udokumentowana azoospermia",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, Prolaktyna, inhibina B (baseline Sertoli), analiza nasienia (baseline potwierdzenia azoospermii), ALT, AST.",
      "purpose": "Baseline do śledzenia odbudowy spermatogenezy + aktywności Sertoli. Wykluczenie zespołu Klinefeltera lub delecji chromosomu Y testem genetycznym (kariotyp + screening mikrodelecji AZF)."
    },
    "midCycle": {
      "label": "Mid-protokół (tydzień 4)",
      "timing": "Start +4 tygodnie",
      "markers": "FSH (kontrola rekombinowanego), inhibina B (marker aktywności Sertoli — OBOWIĄZKOWY), Total Test (efekt współpodania HCG), E2.",
      "purpose": "Wzrost inhibiny B jest wskaźnikiem restartu Sertoli. Jeśli inhibina B NIE wzrasta w 4 tygodnie, rozważ wzrost dawki (150 → 225 IU EOD)."
    },
    "postCycle": {
      "label": "Koniec protokołu + potwierdzenie odbudowy spermatogenezy",
      "timing": "Ostatnia dawka +8 tygodni i +12 tygodni",
      "markers": "Analiza nasienia (liczba + motoryka + morfologia), inhibina B, Total Test, LH, FSH.",
      "purpose": "Potwierdzenie odbudowy spermatogenezy. Jeśli liczba plemników < 5 mln/mL i inhibina B < normalny zakres → rozważ przedłużenie +12 tygodni (protokół Liu 2002 pozwala do 24 tygodni)."
    },
    "cruise": {
      "label": "Długoterminowa zachowanie płodności cykl-cykl",
      "timing": "Rocznie analiza nasienia + inhibina B",
      "markers": "Opcja kriopreservacji nasienia (po odbudowie pojedynczego cyklu, sperm-bank).",
      "purpose": "U użytkowników multi-cycle AAS, dla celu zachowania płodności, roczny protokół bridge FSH-rec (4-6 tygodni) może łagodzić długoterminowe ryzyko azoospermii."
    }
  }
}
