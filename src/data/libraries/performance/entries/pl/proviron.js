// Bayer Proviron-25 Rx (DE, AT, PL). Sources: Bayer Proviron SmPC (EMA),
// Nieschlag-Behre 2012 "Testosterone: Action, Deficiency, Substitution" (4th ed.),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Mauss 1984 PMID 6442150 (mesterolone monograph).

export default {
  "id": "proviron",
  "name": "Proviron (Mesterolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Mesterolon, doustny androgen 1α-metylo-DHT Rx Bayer (Proviron-25, zarejestrowany na rynkach DE/AT/PL). NIE 17α-alkilowany → niska hepatotoksyczność. Podczas cyklu AAS supresor SHBG i adiunkt \"AI mimikker\"; NIE samodzielny bulker.",
  "description": "Proviron (Mesterolon) to pochodna 1α-metylo-dihydrotestosteronu doustny androgen, zsyntetyzowany przez Schering AG w 1966 r. i sprzedawany pod marką Proviron (Bayer od 2006 r.). Bayer Rx w Niemczech, Austrii, Polsce (Proviron-25, tabletka 25 mg) — pierwotne wskazania kliniczne: męska podpłodność, opóźnione dojrzewanie, hipogonadyzm, spadek libido u starszych mężczyzn. Stosunek anaboliczno-androgenny ~100:30-40 (słaby anaboliczny, umiarkowany androgenny). NIE 17α-alkilowany (tylko 1α-metyl) → niska hepatotoksyczność. NIE aromatyzuje (NIE substrat CYP19). WYSOKIE powinowactwo do SHBG → efekt \"AI mimikker\": Proviron związany z SHBG redukuje frakcję SHBG-T, więc wolny T (i wolny E2) rośnie obok partnera stacku Test. W kontekście kulturystycznym zazwyczaj adiunkt cyklu AAS (25-50 mg/dzień), NIE samodzielny bulker. Zakazany przez WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR (słaby) + supresor SHBG + łagodny AI"},
    {"label": "Anaboliczny:Androgenny", "value": "100:30-40"},
    {"label": "Okres półtrwania", "value": "12-13 godzin"},
    {"label": "Początek", "value": "1-2 h (doustnie)"},
    {"label": "Status prawny", "value": "Bayer Rx (DE/AT/PL), zakaz WADA"}
  ],
  "mechanism": "Agonista AR 1α-metylo-dihydrotestosteron. Grupa 1α-metylowa (Δ1, NIE 17α!) zapewnia doustną stabilność poprzez oporność na first-pass wątrobowy — ale w niższym stopniu niż 17α-metyl. NIE substrat CYP19 → NIE aromatyzuje. NIE substrat 5α-reduktazy (już zredukowany). TRZY klinicznie istotne efekty: (1) słaba bezpośrednia aktywność agonisty AR (minimalna budowa mięśni sama w sobie); (2) wysokie powinowactwo do SHBG → wypiera testosteron związany z SHBG, indukując pośrednio wzrost wolnego T obok partnera stacku Test; (3) łagodna aktywność inhibitora aromatazy → redukuje wzrost E2 podczas stacków Test. Stąd zazwyczaj używany w dawce 25-50 mg/dzień jako adiunkt cyklu AAS, NIE samodzielny bulker.",
  "legalStatus": "DE/AT/PL: Bayer Proviron-25 Rx (tabletka 25 mg). HU: nie zarejestrowany (rzadko import-Rx). USA: nie zatwierdzony przez FDA, tylko underground. Zakaz WADA cały rok (S1.1.a). Dostępny na polską receptę jako Proviron-25.",
  "onsetTime": "1-2 h (doustnie)",
  "halfLife": "12-13 h",
  "halfLifeActive": "12-13 h",
  "interactionsWith": ["testosterone", "anastrozole", "tamoxifen", "warfarin"],
  "aromatization": "Nie — struktura 1α-metylo-DHT, NIE substrat CYP19; klinicznie wykazuje też łagodną aktywność AI poprzez wysokie powinowactwo do SHBG (Nieschlag-Behre 2012 monografia testosteronu, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Niska — grupa 1α-metylowa (NIE 17α!) zapewnia słaby stres first-pass wątrobowy; kliniczny wzrost ALT/AST rzadko udokumentowany, znacznie łagodniejszy niż Anavar czy Dianabol. Długoterminowe stosowanie (Bayer SmPC przewlekłe wskazanie Rx) profil wątrobowy względnie bezpieczny (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:30-40",
  "bindingAffinity": "Słabe powinowactwo do AR (~10% vs testosteron). WYSOKIE powinowactwo do SHBG (strukturalny analog DHT) → pośrednio uwalnia testosteron związany z SHBG.",
  "detectionWindow": "Metabolity mesterolonu (rodzina metabolitów 1α-metylo-5α-androstan-3-on) w moczu 4-5 tygodni (Schänzer 1996 metody GC-MS). Akredytowane WADA.",
  "benefits": [
    "Pośredni wzrost wolnego testosteronu (poprzez zajęcie SHBG) podczas cyklu AAS",
    "Łagodny efekt AI → redukcja zapotrzebowania na adiunktywny Anastrozol podczas stacków Test",
    "Poprawa libido i funkcji erekcyjnej (kliniczne wskazanie Bayer SmPC)",
    "Niska hepatotoksyczność — profil bezpieczeństwa długoterminowej aplikacji bardziej korzystny",
    "NIE aromatyzuje → brak ryzyka ginekomastii samodzielnie"
  ],
  "quickStart": [
    "Samodzielny bulker NIE — Proviron zawsze adiunkt obok partnera stacku AAS",
    "Typowa dawka 25-50 mg/dzień (1-2 tabletki), 6-12 tygodni",
    "Strukturalny analog DHT → przyspieszenie wypadania włosów w alopecji androgenowej",
    "Monitoring lipidogramu (HDL może spaść, umiarkowanie)",
    "Kliniczny efekt libido-boost — wskazanie TRT-adiunkt Bayer SmPC jest realne"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Początek 1-2 h, ostry efekt minimalny. Subiektywny wzrost libido i poczucie wolnego T (\"lepszy nastrój\") częste po 3-5 dniach."},
    {"label": "Tydzień 3-4", "body": "Obok partnera stacku Test wzrost wolnego T wyraźny, wzrost E2 umiarkowany (efekt AI Proviron). Estetyczne \"hardening\" łagodne (sam Proviron NIE jest sterydem hardening)."},
    {"label": "Koniec tygodnia 8-12", "body": "Maksymalny efekt adiunkt. HDL ~10-15% spadek oczekiwany. Supresja HPTA umiarkowana gdy samodzielnie (sam Proviron NIE jest pełnym supresorem HPTA)."}
  ],
  "quality": {
    "pure": [
      "Bayer Proviron-25 oryginalna tabletka Rx, 25 mg (zarejestrowany na rynkach DE/AT/PL)",
      "Tabletka UGL: źródło testowane HPLC obowiązkowe, rzadziej fałszowana niż Anavar/Primobolan (niższa wartość rynkowa)"
    ],
    "caution": [
      "Sama nie jest bulkerem — rozdźwięk oczekiwania-rzeczywistości użytkowników to najczęstsze źródło frustracji",
      "Przyspieszenie wypadania włosów w alopecji androgenowej (strukturalny analog DHT)",
      "Zaburzenia lipidowe: spadek HDL (umiarkowany)",
      "Pogłębienie głosu i hirsutyzm u kobiet (ryzyko wirylizacji nawet przy niższych dawkach)"
    ],
    "avoid": [
      "Rodzinna historia alopecji androgenowej",
      "Przerost prostaty, rak prostaty (analog DHT)",
      "Stosowanie przez kobiety (niski anaboliczny, wysoki stosunek ryzyka wirylizacji estetycznie nie wart)",
      "Cel bulking/przyrost masy — Proviron NIE samodzielny bulker"
    ]
  },
  "interactions": [
    "Baza testosteronu: standardowa para stack, pośredni wzrost wolnego T poprzez zajęcie SHBG",
    "Anastrozol (AI): łączalny, łagodny efekt AI Proviron pozwala na niższą dawkę Anastrozolu",
    "Tamoksyfen (SERM): łączalny w zapobieganiu ginekomastii obok partnerów stacku Test-aromatyzujących AAS",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony (umiarkowanie), monitor INR"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"},
    {"title": "Androgen treatment without inhibiting effect on hypophysis and male gonads. Biochemical and morphological studies after treatment with Mesterolone", "authors": "Petry R, Rausch-Stroomann JG, Hienz HA, Senge T, Mauss J.", "journal": "Acta Endocrinol (Copenh). 1968;59(3):497-507.", "pmid": "4880965"},
    {"title": "Double-blind cross over treatment with mesterolone and placebo of subfertile oligozoospermic men value of testicular biopsy", "authors": "Aafjes JH, van der Vijver JC, Brugman FW, Schenck PE.", "journal": "Andrologia. 1983;15 Spec No:531-5.", "pmid": "6364886"},
    {"title": "Bayer Proviron-25 SmPC (Summary of Product Characteristics)", "authors": "Bayer AG", "journal": "EMA / German Federal Institute for Drugs (BfArM)", "pmid": null}
  ],
  "faq": [
    {"q": "Czy to prawda, że Proviron jest \"AI mimikker\"?", "a": "Częściowo. Jego wysokie powinowactwo do SHBG redukuje frakcję testosteronu związanego z SHBG, co pośrednio redukuje również poziomy estradiolu związanego z SHBG. PLUS ma bezpośrednią, słabą aktywność inhibitora aromatazy. ALE efekt NIE jest tak silny jak Anastrozol czy Letrozol — przy wysokich dawkach Test (>500 mg/tydzień) sam Proviron NIE wystarcza do kontroli E2, tylko redukcji dawki Anastrozolu."},
    {"q": "Dlaczego NIE jest dobrym samodzielnym bulkerem?", "a": "Aktywność anaboliczna jest słaba (~100 vs 320 Anavar vs 400 Superdrol). Po samodzielnym cyklu Proviron 25-50 mg/dzień przez 8 tygodni zazwyczaj 1-2 kg przyrost masy oczekiwany (Anavar 4-5 kg, Dianabol 8-10 kg) — wyraźnie niski. Proviron zawsze do roli adiunkt, NIE bulker."},
    {"q": "Legalnie dostępny na polskim rynku?", "a": "Tak, Bayer Proviron-25 (tabletka 25 mg) to Rx na polskim rynku, przepisywalny przez polskich lekarzy na wskazania bezpłodności męskiej, hipogonadyzmu, spadku libido. Nie zarejestrowany na rynku HU, nie przepisywalny przez węgierską receptę — ale import-Rx rzadko możliwy."},
    {"q": "Ryzyko wypadania włosów?", "a": "Umiarkowane-wysokie jeśli genetyczna predyspozycja do alopecji androgenowej. Proviron jest strukturalnym analogiem 1α-metylo-DHT, który omija 5α-reduktazę skóry głowy i bezpośrednio aktywuje AR mieszka włosowego. Finasteryd NIE chroni (Proviron już zredukowany). Jedyna ochrona: jeśli genetycznie wrażliwy, NIE używaj AAS pochodnych DHT."},
    {"q": "Czy Bayer Proviron jest bezpieczny długoterminowo?", "a": "Wg Bayer SmPC dla wskazań bezpłodności męskiej i hipogonadyzmu, długoterminowe (12+ miesięcy) ciągłe stosowanie jest udokumentowane bezpieczne z odpowiednim monitoringiem (lipidy, ALT/AST, PSA). ALE off-label suprafizjologiczne dawki kulturystyczne (100+ mg/dzień) NIE należą tutaj — terapeutyczny zakres Bayera 25-75 mg/dzień to to, w czym dane bezpieczeństwa są interpretowalne."}
  ],
  "related": ["masteron", "primobolan", "anavar-info", "testosterone-info", "winstrol-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/dzień (doustnie, 1-2x podzielone)",
    "note": "Dawka adiunkt 25-50 mg/dzień, max 75 mg/dzień. Zazwyczaj 6-12 tygodni obok partnera stacku Test. TUDCA NIE obowiązkowy (niska hepatotoksyczność). Monitor lipidogramu + PSA (powyżej 30 lat) zalecany. PCT tylko jeśli samodzielnie (PCT Test-stacku wystarcza)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonów: Total T, Free T, E2, LH, FSH, SHBG (baseline kluczowy dla oceny mechanizmu Proviron), Prolaktyna. Lipidogram (LDL/HDL/TG). Wątrobowe: ALT/AST/GGT. PSA (powyżej 30 lat).",
      "purpose": "Baseline SHBG kluczowy: trzeba ponownie zmierzyć po 4-6 tygodniach, by ocenić efekt Proviron. Baseline lipidogramu dla detekcji trendu spadku HDL."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 4-6, połowa cyklu",
      "markers": "Total T, Free T (główny marker efektu Proviron), SHBG (spadek oczekiwany), E2, lipidogram (HDL), wątrobowe (ALT/AST <2x normalne oczekiwane dla cyklu tylko-Proviron).",
      "purpose": "Wzrost wolnego T to wskaźnik aktywności Proviron (napędzany spadkiem SHBG). E2 oparte na partnerze Test. Wzrost ALT/AST łagodny — jeśli >3x normalne, podejrzewaj dodatkowe AAS."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Od ostatniej tabletki +1-2 dni start PCT (łagodna supresja HPTA sama w sobie). Protokół PCT partnera stacku Test dominuje.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipidogram.",
      "purpose": "Recovery HPTA dla cyklu tylko-Proviron zazwyczaj 4-6 tygodni, szybkie. Z partnerem stacku Test PCT zależy od dłuższego okresu półtrwania estru Test."
    },
    "cruise": {
      "label": "Na cruise",
      "timing": "Podczas cruise TRT-Test, Proviron adiunkt 25-50 mg/dzień zazwyczaj akceptowalny, monitoring co 6-8 tygodni",
      "markers": "Lipidogram, SHBG, Total T, Free T, E2, PSA (powyżej 30 lat).",
      "purpose": "Obok cruise TRT, Proviron to adiunkt \"libido boost\": wzrost wolnego T i łagodny efekt AI. Długoterminowe ciągłe stosowanie tolerowalne (wg Bayer SmPC), ale monitor lipidogramu + PSA co 6-8 tygodni."
    }
  }
}
