// Pramipexol (Mirapex) — nieergotaminowy selektywny agonista D3-D2 dopaminy.
// FDA 1997 Boehringer. Nisza PCT po AAS: kontrola prolaktyny + stymulacja
// seksualna (selektywność D3). Czarna ramka FDA ryzyka ICD.
// Źródła: FDA Mirapex SmPC, Weintraub 2010 PMID 20457959,
// Mansour 2012 PMID 22651823, Romigi 2007 PMID 17646619.

export default {
  "id": "pramipexole",
  "name": "Pramipexol (Mirapex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Nieergotaminowy selektywny agonista D3-D2 dopaminy. Zatwierdzony przez FDA (1997 Boehringer) na Parkinsona + RLS. Nisza PCT po AAS: kontrola prolaktyny + stymulacja seksualna (selektywność D3). Czarna ramka FDA dla ICD (zaburzenia kontroli impulsów).",
  "description": "Pramipexol (Mirapex) jest nieergotaminowym agonistą receptora dopaminy opracowanym przez Boehringer Ingelheim i zatwierdzonym przez FDA w 1997 roku do leczenia choroby Parkinsona i zespołu niespokojnych nóg (RLS). W przeciwieństwie do kabergoliny nie ma struktury ergotaminowej, więc ryzyko cardiac valvulopathy jest pomijalne. Jego unikalny profil farmakologiczny to **selektywność D3** (D3 > D2, ~7-10× różnica powinowactwa) — to napędza efekt stymulacji seksualnej ('RecPharm' off-label libido/poprawa jakości orgazmu udokumentowane na poziomie społeczności). Poprzez efekt D2 przysadkowy obniża prolaktynę, podobnie jak kabergolina, ALE rzadko pierwszorzędna w świecie PCT po AAS — z dwóch powodów: (1) FDA **czarna ramka ostrzegająca przed zaburzeniami kontroli impulsów (ICD)** ryzyko (hazard, hiperseksualność, kompulsywne zakupy, objadanie się) — 17-22% incydencji przy dawce Parkinsona (Weintraub 2010 DOMINION study, PMID 20457959), niższe przy dawce PCT po AAS ale istnieje; (2) ścisłe miareczkowanie dawki (0,0625 mg ultra-low start). Niszowe użycie: kontrola prolaktyny akcent seksualny + sub-społeczność rekreacyjna RecPharm. Tier 3.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Nieergotaminowy selektywny agonista D3-D2 DA (D3 > D2), supresja prolaktyny przysadkowej + stymulacja seksualna"},
    {"label": "Dawkowanie (AAS)", "value": "0,0625 mg start wieczorem, max 0,25-0,5 mg/dzień miareczkowane"},
    {"label": "Okres półtrwania", "value": "~8-12 godzin"},
    {"label": "Początek działania", "value": "Redukcja prolaktyny 2-4 h"},
    {"label": "Status prawny", "value": "FDA + EMA Rx, HU + PL zarejestrowany, WADA allowed"}
  ],
  "mechanism": "Pramipexol jest nieergotaminowym agonistą DA o strukturze benzotiazolowej, D3 Ki ~0,5 nM (D2 ~3,6 nM, D4 ~3 nM). Receptor D3 jest bogato wyrażony w mezolimbicznym szlaku dopaminy — wyjaśnia efekt stymulacji seksualnej (Mansour 2012 PMID 22651823 udokumentował w serii przypadków pramipexol+ED akcent jakości orgazmu i libido). Przysadkowa-D2-via supresja prolaktyny przez mechanizm podobny do kabergoliny. Wątrobowy metabolizm minimalny (~10%), 90% wydalanie nerkowe w postaci niezmienionej → wymagana redukcja dawki przy CrCl <30 mL/min. Brak struktury ergotu → brak ryzyka cardiac valvulopathy (vs kabergolina/bromokryptyna).",
  "legalStatus": "USA: zatwierdzony przez FDA 1997 (Mirapex, Boehringer Ingelheim). Wskazania: choroba Parkinsona, zespół niespokojnych nóg (RLS). UE: zatwierdzony przez EMA. HU: zarejestrowany (Mirapexin Rx). PL: zarejestrowany (Mirapexin, Sifrol Rx). WADA: nie na liście.",
  "onsetTime": "Redukcja prolaktyny 2-4 h",
  "halfLife": "~8-12 godzin",
  "halfLifeActive": "~8-12 godzin (związek macierzysty aktywny)",
  "interactionsWith": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "aromatization": "Brak — agonista D2/D3.",
  "hepatotoxicity": "Niska hepatyczna; czarna ramka FDA dla **zaburzeń kontroli impulsów** (hazard, hiperseksualność, kompulsywne zakupy) — incydencja 17-22% w zakresie dawki Parkinsona, niższe przy dawce PCT po AAS.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS)",
  "bindingAffinity": "D3 Ki ~0,5 nM, D2 ~3,6 nM, D4 ~3 nM. Struktura nieergotaminowa benzotiazolowa.",
  "detectionWindow": "Nie istotny (WADA nie na liście).",
  "benefits": [
    "Brak struktury ergotu → ryzyko cardiac valvulopathy pomijalne (vs kabergolina/bromokryptyna)",
    "Selektywność D3 → bonus stymulacja seksualna (boost libido, jakość orgazmu)",
    "Alternatywa kontroli prolaktyny",
    "Pharma-grade FDA + EMA Rx"
  ],
  "quickStart": [
    "ULTRA-LOW start OBOWIĄZKOWY: 0,0625 mg (= 1/4 tabletki 0,25 mg) wieczorem, z jedzeniem",
    "Miareczkowanie w krokach 3-4 dniowych: 0,0625 → 0,125 → 0,25 mg/dzień",
    "Max dawka docelowa PCT po AAS: 0,25-0,5 mg/dzień",
    "Dziennik objawów ICD: kompulsywne zachowania (hazard, zakupy, hiperseksualność, objadanie się) self-report + monitor partnera",
    "Funkcja nerek (CrCl) pre-treatment: jeśli <30 mL/min, wymagana redukcja dawki",
    "Bloodwork: prolaktyna pre-treatment + 7-10 dni później"
  ],
  "expectations": [
    {"label": "Dzień 1-3", "body": "Łagodne nudności + letarg oczekiwane (łagodne przy dawce ultra-low). Redukcja prolaktyny ~20-30%."},
    {"label": "Tydzień 1-2", "body": "Rozwija się tolerancja, miareczkowanie dawki osiąga cel. Prolaktyna <15 ng/mL osiągalna przy 0,25-0,5 mg. Stymulacja seksualna (boost libido, jakość orgazmu) zauważalna — efekt selektywności D3."},
    {"label": "Długoterminowe stosowanie", "body": "Ciągły monitor objawów ICD (co 3 miesiące self-screen Yale-Brown OCD scale skrócony). Jeśli wystąpienie objawów ICD → NATYCHMIASTOWE zaprzestanie."},
    {"label": "Po zaprzestaniu", "body": "Rebound prolaktyny przez 1-2 tygodnie. Ulga objawów ICD przez 2-4 tygodnie (jeśli rozwinęły się)."}
  ],
  "quality": {
    "pure": [
      "Boehringer Ingelheim Mirapex/Mirapexin 0,25/1 mg, Rx pharma-grade (apteka UE)",
      "Pramipexol-ratiopharm, Pramipexol Teva, Pramipexol Sandoz generyczne (UE)",
      "Indyjski generyk (Sun Pharma, Cipla)",
      "UGL rzadko — Rx pharma-grade zalecane ze względu na ścisłe miareczkowanie"
    ],
    "caution": [
      "**Czarna ramka FDA: zaburzenia kontroli impulsów (ICD)** — hazard, hiperseksualność, kompulsywne zakupy, objadanie się; monitor partnera + dziennik self-report OBOWIĄZKOWY; jeśli wystąpienie objawów ICD, NATYCHMIASTOWE zaprzestanie",
      "Funkcja nerek: CrCl <30 mL/min → wymagana redukcja dawki (90% wydalania nerkowego)",
      "Hipotensja ortostatyczna: wstawać powoli rano",
      "Ataki snu: dzienna senność udokumentowany skutek uboczny — ostrożność prowadzenia pojazdów",
      "Nie można łączyć z lekami przeciwpsychotycznymi (konflikt antagonisty D2/D3)",
      "Antiemetyk metoclopramid przeciwwskazany (konflikt antagonisty D2)"
    ],
    "avoid": [
      "Użytkownicy z historią ICD (uzależnienie od hazardu, spektrum OCD, historia hiperseksualności)",
      "Ciężka niewydolność nerek (CrCl <30 mL/min) bez dostosowania dawki",
      "Terapia lekami przeciwpsychotycznymi",
      "Ciąża / karmienie piersią",
      "Użytkownicy bez doświadczenia z kabergoliną (kabergolina pierwszorzędna, dla bezpieczeństwa)"
    ]
  },
  "interactions": [
    "Kabergolina / bromokryptyna: nie można łączyć (nakładający się mechanizm)",
    "Leki przeciwpsychotyczne: przeciwwskazane",
    "Metoclopramid / domperidon: przeciwwskazane (konflikt antagonisty D2)",
    "Przeciwnadciśnieniowe: nasilenie hipotensji",
    "Cymetydyna: interakcja funkcji nerek (wzrost poziomu pramipexolu)",
    "Alkohol: nasilenie ryzyka objawów ICD + częstsze ataki snu — zalecane unikanie"
  ],
  "studies": [
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"},
    {"title": "Effects of acute prolactin manipulation on sexual drive and function in males.", "authors": "Krüger TH, Haake P, Haverkamp J, Krämer M, Exton MS, Saller B, Mann K, Hartmann U, Schedlowski M", "journal": "J Endocrinol", "pmid": "14656205"},
    {"title": "Treatment of restless legs syndrome and periodic limb movement disorder: an American Academy of Sleep Medicine clinical practice guideline.", "authors": "Winkelman JW, Berkowski JA, DelRosso LM, Koo BB, Scharf MT, Sharon D, Zak RS, Kazmi U, Falck-Ytter Y, Shelgikar AV, Trotti LM, Walters AS", "journal": "J Clin Sleep Med", "pmid": "39324694"}
  ],
  "faq": [
    {"q": "Pramipexol vs kabergolina — kiedy wybrać?", "a": "Pramipexol w dwóch sytuacjach niszowych: (1) Użytkownik z akcentem seksualnym — selektywność D3 daje boost libido/jakości orgazmu, co jest bonusem w kontekście spadku libido AAS-Tren; (2) Użytkownik z historią cardiac valvulopathy — kabergolina/bromokryptyna struktura ergotu przeciwwskazana, pramipexol nieergotaminowy. ALE: monitor ryzyka ICD OBOWIĄZKOWY (Weintraub 2010 DOMINION 17-22% przy dawce Parkinsona, niższe przy dawce PCT po AAS ale istnieje). Kabergolina pozostaje pierwszorzędna w 90% przypadków; pramipexol jest bardziej dla równoczesnego użytku seksualno-rekreacyjnego (sub-społeczność RecPharm) i niszowych przypadków klinicznych."},
    {"q": "Czy zaburzenie kontroli impulsów jest realne?", "a": "Tak, prawdziwe zjawisko kliniczne. Weintraub 2010 DOMINION study (PMID 20457959) udokumentował 17-22% incydencji ICD w analizie cross-sectional 3090 pacjentów z Parkinsonem — patologiczny hazard, hiperseksualność, kompulsywne zakupy, objadanie się. Mechanizm: hiperaktywacja szlaku mezolimbicznej-nagrody-D3. Dawka PCT po AAS (0,25-0,5 mg/dzień) to ok. 1/10-1/15 dawki Parkinsona (~3 mg/dzień); ryzyko ICD jest proporcjonalnie niższe ale NIE zero. **Protokół monitora partnera**: poproś małżonka/partnera o obserwację zmian zachowania (wzorzec hazardu, szał zakupów, hiperseksualność, objadanie się). Dziennik self-report tygodniowo (Y-BOCS skrócony self-test). Wystąpienie objawów ICD → NATYCHMIASTOWE zaprzestanie, NIE redukcja dawki."},
    {"q": "Status RecPharm — jakie subreddit-poziomowe użycie?", "a": "Mała społeczność online (r/RecPharm, r/Pramipexole sub, forum off-label RxList) rekreacyjnie używa pramipexolu (0,125-0,25 mg dawka okazjonalna) do stymulacji seksualnej (jakość orgazmu + boost libido), nie w kontekście PCT po AAS. NIE poparcie, tylko udokumentowany wzorzec społeczności. Mansour 2012 (PMID 22651823) seria przypadków udokumentowała 6 mężczyzn bez Parkinsona, którzy doświadczyli znaczącej poprawy jakości erekcji na 0,125 mg pramipexolu. **NIE zalecany jako protokół rekreacyjny**: ryzyko ICD + atak snu + profil skutków ubocznych hipotensji ortostatycznej przewyższa korzyść rekreacyjną u większości użytkowników."},
    {"q": "Protokół PCT po AAS praktyczne dawkowanie?", "a": "ULTRA-LOW start: 0,0625 mg (1/4 tabletki 0,25 mg) wieczorem, z jedzeniem × 3-4 dni. Miareczkowanie: 0,125 mg/dzień wieczorem × 3-4 dni, potem 0,25 mg/dzień wieczorem. Max docelowy PCT po AAS: 0,25-0,5 mg/dzień. Monitor prolaktyny: pre-treatment + 10-14 dni później. Cel: prolaktyna <15 ng/mL ORAZ BRAK wystąpienia objawów ICD. Jeśli prolaktyna >25 ng/mL utrzymująca się → zmień na kabergolinę (pramipexol nie może iść >0,5 mg/dzień w kontekście AAS ze względu na ryzyko ICD)."}
  ],
  "related": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.0625, "medium": 0.25, "high": 0.5},
    "unit": "mg / dzień (doustnie wieczorem, z jedzeniem, ultra-low miareczkowane)",
    "note": "ULTRA-LOW start od 0,0625 mg (1/4 tabletki 0,25 mg). Miareczkowanie w krokach 3-4 dniowych, max 0,25-0,5 mg/dzień w kontekście PCT po AAS. Monitor ICD OBOWIĄZKOWY. Funkcja nerek (CrCl) pre-treatment dla dostosowania dawki."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem pramipexolu",
      "timing": "Nietolerancja kabergoliny LUB cel akcent seksualny",
      "markers": "Prolaktyna, Total/Wolny Test, funkcja nerek (CrCl, kreatynina), screen historii psychiatrycznej (warunek wstępny ICD!), Y-BOCS skrócony baseline.",
      "purpose": "Baseline + stratifikacja ryzyka ICD. Jeśli historia ICD (hazard, spektrum OCD, hiperseksualność) → pramipexol przeciwwskazany."
    },
    "midCycle": {
      "label": "Pramipexol dzień 10-14",
      "timing": "Koniec miareczkowania pramipexolu +7 dni",
      "markers": "Prolaktyna (powtórzenie), Y-BOCS self-test (screen ICD), ciśnienie krwi, narracja monitora partnera.",
      "purpose": "Potwierdzenie miareczkowania + screen objawów ICD. Jeśli zmiana zachowania (hazard, kompulsywne zakupy, hiperseksualność) → NATYCHMIASTOWE zaprzestanie."
    },
    "postCycle": {
      "label": "Zaprzestanie pramipexolu",
      "timing": "Ostatnia dawka +1 tydzień",
      "markers": "Prolaktyna (rebound), Y-BOCS post-test (monitor ulgi ICD).",
      "purpose": "Potwierdź: prolaktyna wraca do baseline, ulga objawów ICD (jeśli rozwinęły się) przez 2-4 tygodnie."
    },
    "cruise": {
      "label": "Nie zalecany na chronic AAS cruise",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Pramipexol na chronic AAS cruise NIE zalecany — ryzyko ICD jest kumulatywne, monitor kardio pozycjonuje się przeciwko długoterminowej kabergolinie. Tylko dla cykl-specyficznych zdarzeń prolaktyny (max 8-12 tygodni)."
    }
  }
}
