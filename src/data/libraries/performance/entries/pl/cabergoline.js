// Kabergolina (Dostinex) — długo działający ergotaminowy agonista D2 dopaminy.
// EMA 1992 Pharmacia, FDA 1996. PCT po AAS: złoty standard kontroli prolaktyny
// przy 19-Nor/Tren, 0,25-0,5 mg 2x/tydzień.
// Źródła: EMA Dostinex SPC, FDA Dostinex SmPC, Webster 1994 PMID 8090165,
// Schade 2007 PMID 17371996, Krüger 2003 PMID 12849866.

export default {
  "id": "cabergoline",
  "name": "Kabergolina (Dostinex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Długo działający ergotaminowy agonista D2 dopaminy. Zatwierdzony przez EMA (1992 Pharmacia, obecnie Pfizer) na hiperprolaktynemię. W AAS: złoty standard kontroli prolaktyny przy 19-Nor/Tren, 0,25-0,5 mg 2x/tydzień miareczkowany badaniami. Długi t1/2 ~63 h.",
  "description": "Kabergolina (Dostinex) jest długo działającym selektywnym agonistą receptora D2 dopaminy o strukturze ergotaminowej, opracowanym przez Farmitalia Carlo Erba (później Pharmacia, obecnie Pfizer) i zatwierdzonym przez EMA w 1992 roku (FDA 1996) do leczenia hiperprolaktynemii i prolaktynomy. Wywiera działanie agonistyczne na receptory D2 laktotrofów przysadkowych, hamując wydzielanie prolaktyny — head-to-head trial Webster 1994 (PMID 8090165) wykazał, że kabergolina jest klinicznie bardziej skuteczna i lepiej tolerowana niż starsza bromokryptyna (~95% normalizacji prolaktyny vs ~75%). W kontekście AAS: sterydy 19-Nor (trenbolon, nandrolon, MENT) podwyższają poziom prolaktyny zarówno bezpośrednio, jak i pośrednio — trenbolon również agonizuje receptor progesteronu, podczas gdy nandrolon nasila wrażliwą na kabergolinę ścieżkę prolaktynergiczną. Objawy: Tren flu, laktacja (galaktorrhea), spadek libido, formowanie ginekomastii mediowane prolaktyną (NIE E2 — to typ wrażliwy na kabergolinę). Kabergolina jest klasycznym złotym standardem kontroli prolaktyny w cyklu 19-Nor/Tren: 0,25-0,5 mg 2x/tydzień (pon+czw) miareczkowane badaniami, cel prolaktyna <15 ng/mL.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Długo działający ergotaminowy agonista D2 DA, supresja prolaktyny laktotrofów przysadki"},
    {"label": "Dawkowanie (AAS)", "value": "0,25-0,5 mg 2x/tydzień (pon+czw) miareczkowane badaniami"},
    {"label": "Okres półtrwania", "value": "~63-69 godzin (bardzo długi)"},
    {"label": "Początek działania", "value": "Redukcja prolaktyny mierzalna 3 h, plateau 48-72 h"},
    {"label": "Status prawny", "value": "EMA + FDA Rx, HU + PL zarejestrowany, WADA allowed (nie na liście)"}
  ],
  "mechanism": "Kabergolina jest selektywnym dla D2 agonistą dopaminy o strukturze ergotaminowej (receptor D2 Ki ~0,4 nM, ~85× bardziej selektywny dla D1 niż bromokryptyna). Wiąże się z wysokim powinowactwem z receptorami D2 na komórkach laktotrofów przedniej przysadki, hamując wydzielanie prolaktyny i redukując proliferację komórek laktotrofów (zdolny do zmniejszenia prolaktynomy). Częściowy antagonizm D1 bonusowo zmniejsza profil wegetatywnych skutków ubocznych (vs bromokryptyna). Wątrobowe CYP3A4 metabolizuje; długi okres półtrwania (~63 h) umożliwia dawkowanie dwa razy w tygodniu. W kontekście AAS, hamowanie szlaku trenbolon-progesteron jest drugorzędną korzyścią: Tren flu (stan podgorączkowy + spadek libido) można złagodzić bezpośrednią supresją prolaktyny. NIE na liście WADA — niezakazane dla zawodników startowych.",
  "legalStatus": "UE: zatwierdzony przez EMA 1992 (Dostinex 0,5 mg, Pharmacia, obecnie Pfizer). USA: zatwierdzony przez FDA 1996 (Dostinex 0,5 mg, Pfizer). Wskazanie: hiperprolaktynemia (idiopatyczna lub pochodzenia z prolaktynomy), choroba Parkinsona adjuwant (wysoka dawka, NIE w dawce AAS-PCT). HU: zarejestrowany (Dostinex Rx). PL: zarejestrowany (Dostinex Rx). WADA: nie na liście (nie środek wspomagający wydolność).",
  "onsetTime": "Redukcja prolaktyny 3 h, plateau 48-72 h",
  "halfLife": "~63-69 godzin",
  "halfLifeActive": "~63-69 godzin (związek macierzysty aktywny, główne metabolity nieaktywne)",
  "interactionsWith": ["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"],
  "aromatization": "Brak — agonista DA, nie mechanizm steroidowy.",
  "hepatotoxicity": "Niska hepatyczna; rzadka cardiac valvulopathy przy wysokich dawkach (>3 mg/tydzień) chronic (dawki protokołu Parkinsona) — przy stosowanych w AAS dawkach 0,5-1 mg/tydzień klinicznie BRAK udokumentowanego ryzyka (FDA Dostinex label).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS)",
  "bindingAffinity": "D2 Ki ~0,4 nM (wysokie powinowactwo), D1 ~85× niższe. Selektywny dla przysadki, niski obwodowy efekt wegetatywny.",
  "detectionWindow": "Nie istotny (WADA nie na liście).",
  "benefits": [
    "Złoty standard kontroli prolaktyny przy 19-Nor/Tren w AAS",
    "Długo działający (dawka dwa razy w tygodniu) — przewaga compliance",
    "Selektywny przysadkowy D2 → mało wegetatywnych skutków ubocznych (vs bromokryptyna)",
    "Bonus: skrócenie okresu refrakcji post-orgazmicznej (Krüger 2003) — poprawa życia seksualnego",
    "Zapobieganie formacji gino mediowanej prolaktyną na stack Tren/Deca",
    "Przystępny apteka UE (~€20-40/opakowanie 0,5 mg × 8 tabletek)"
  ],
  "quickStart": [
    "Bloodwork baseline NAJPIERW: zmierz prolaktynę w tygodniu 4-6 cyklu metodą LC-MS/MS lub czułego immunoassay",
    "Standardowa kontrola 19-Nor/Tren: 0,25 mg 2x/tydzień (pon+czw) start",
    "Cel: prolaktyna <15 ng/mL (męska referencja <15 ng/mL); jeśli >25 ng/mL utrzymujące się → zwiększenie dawki do 0,5 mg 2x/tydzień",
    "Z wodą + PO posiłku (zapobieganie nudnościom)",
    "Powtórz badanie 7-10 dni później, potwierdzenie miareczkowania",
    "Długi okres półtrwania → stan stacjonarny po ~10-14 dniach"
  ],
  "expectations": [
    {"label": "Dzień 1-3", "body": "Redukcja prolaktyny mierzalna (~30-50%), ulga Tren flu odczuwalna (stan podgorączkowy, ból głowy, ulga zmęczenia mięśni)."},
    {"label": "Tydzień 1-2", "body": "Osiągnięty stan stacjonarny (dawka dwa razy w tygodniu po ~10-14 dniach), cel prolaktyny <15 ng/mL osiągalny. Powrót libido udokumentowany, minimalizowane ryzyko formacji gino."},
    {"label": "Długoterminowo (3+ miesięcy chronic)", "body": "Zalecana coroczna echokardiografia (rule-out cardiac valvulopathy, choć ryzyko przy dawce AAS jest niskie)."},
    {"label": "Po zaprzestaniu", "body": "Łagodny rebound prolaktyny w ciągu 1-2 tygodni. Jeśli cykl Tren/Deca trwa nadal, NIE przerywaj kabergoliny — kontynuuj przez cały czas."}
  ],
  "quality": {
    "pure": [
      "Pfizer Dostinex 0,5 mg blister 8 tabletek, Rx pharma-grade (apteka UE dostępne)",
      "Kabergolina-ratiopharm, Kabergolina Teva, Kabergolina Sandoz generyczne (UE)",
      "Indyjski generyk (Sun Pharma, Cipla Caberlin 0,5 mg)",
      "UGL liquid kabergolina: wymagane źródło testowane HPLC — często 1 mg/mL, łatwe ryzyko przedawkowania"
    ],
    "caution": [
      "Nudności / ortostatyczna hipotensja na początkowych dawkach: miareczkowanie od 0,125 mg przez 2-3 dawki (zalecane powolne miareczkowanie)",
      "Cardiac valvulopathy: chronic wysoka dawka (>3 mg/tydzień, protokół Parkinsona) — przy dawce AAS (0,5-1 mg/tydzień) ryzyko jest niskie, ale zalecana coroczna echokardiografia dla długoterminowych użytkowników",
      "Zaburzenie kontroli impulsów (hazard, hiperseksualność, kompulsywne zakupy) — częstsze na pramipexolu, rzadkie ale udokumentowane na kabergolinie (Weintraub 2010)",
      "Nie można łączyć z lekami przeciwpsychotycznymi (antagoniści D2: haloperidol, risperidon) — nakładanie się antagonistów",
      "Terapie przeciwnadciśnieniowe: nasilenie hipotensji, ostrożny monitor"
    ],
    "avoid": [
      "Ciąża / karmienie piersią (Kategoria ciąży B, ale indukcja owulacji → rozważenie antykoncepcji)",
      "Wcześniej istniejąca cardiac valvulopathy",
      "Alergia na alkaloidy ergotu (bromokryptyna, metyzergid reaktywność krzyżowa)",
      "Ciężka niewydolność wątroby",
      "Aktualna terapia lekami przeciwpsychotycznymi (konflikt antagonizmu D2)"
    ]
  },
  "interactions": [
    "Stack trenbolon/nandrolon: standardowa kontrola prolaktyny (klasyczny towarzysz PCT 19-Nor)",
    "Bromokryptyna: nie można łączyć (nakładający się mechanizm)",
    "Leki przeciwpsychotyczne (haloperidol, risperidon, olanzapina): przeciwwskazane (antagonizm D2)",
    "Przeciwnadciśnieniowe (lisinopril, β-blokery): monitor nasilenia hipotensji",
    "Antybiotyki makrolidowe (erytromycyna, klarytromycyna): hamowanie CYP3A4 → wzrost poziomu kabergoliny",
    "Alkohol: nasilenie wegetatywnych skutków ubocznych (nudności, hipotensja), zalecane unikanie"
  ],
  "studies": [
    {"title": "Retrospective comparison of cabergoline and bromocriptine effects in hyperprolactinemia: a single center experience.", "authors": "Arduc A, Gokay F, Isik S, Ozuguz U, Akbaba G, Tutuncu Y, Berker D, Guler S", "journal": "J Endocrinol Invest", "pmid": "25421155"},
    {"title": "Risks of Cardiac Valve Regurgitation and Heart Failure Associated with Ergot- and Non-Ergot-Derived Dopamine Agonist Use in Patients with Parkinson's Disease: A Systematic Review of Observational Studies.", "authors": "Tran T, Brophy JM, Suissa S, Renoux C", "journal": "CNS Drugs", "pmid": "26585874"},
    {"title": "Effects of acute prolactin manipulation on sexual drive and function in males.", "authors": "Krüger TH, Haake P, Haverkamp J, Krämer M, Exton MS, Saller B, Mann K, Hartmann U, Schedlowski M", "journal": "J Endocrinol", "pmid": "14656205"},
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"}
  ],
  "faq": [
    {"q": "Prolaktyna Tren — kiedy kabergolina jest potrzebna?", "a": "Steryd Tren (i stacki nandrolonu) podwyższa poziom prolaktyny zarówno bezpośrednio jak i pośrednio — trenbolon agonizuje receptor progesteronu, co nasila wydzielanie prolaktyny. Objawy: Tren flu (stan podgorączkowy + ból głowy + zmęczenie mięśni), galaktorrhea (wyciek mleka z brodawki), spadek libido, formacja ginekomastii mediowana prolaktyną (NIE mediowana E2 — to typ wrażliwy na kabergolinę). Kabergolina potrzebna jeśli: (1) prolaktyna >25 ng/mL w badaniach (cel <15), (2) wystąpienie objawów (spadek libido, laktacja, Tren flu), (3) profilaktycznie na 19-Nor blast znany z wysokiego ryzyka prolaktyny. NIE każdy cykl Tren tego potrzebuje — miareczkowane badaniami."},
    {"q": "Ryzyko cardiac valvulopathy przy dawce AAS?", "a": "Systematyczny przegląd Schade 2007 (PMID 17371996) udokumentował ~40% ryzyko niedomykalności zastawkowej (mitralnej + trójdzielnej) u przewlekłych użytkowników kabergoliny w dawce Parkinsona (3-6 mg/dzień × 5+ lat). ALE dawka AAS-PCT (0,5-1 mg/TYDZIEŃ, NIE dzień) to ok. 1/30 tej chronicznej dawki — baseline ryzyka literatury klinicznej w kontekście AAS jest na poziomie pomijalnym. FDA Dostinex label: niska dawka <2 mg/tydzień chronic use, incydencja AE zastawkowych <2%. Praktycznie: użytkownik AAS chronic cruise (1+ rok 0,5-1 mg/tydzień), zalecana coroczna echokardiografia (TTE) z niskim bayesowskim prawdopodobieństwem pre-test, ale rozsądne."},
    {"q": "Kabergolina + seks — korzyść seksualna?", "a": "Krüger 2003 (PMID 12849866) udokumentował u zdrowych mężczyzn, że pojedyncza dawka 0,5 mg kabergoliny skraca okres refrakcji post-orgazmicznej (PORP) o ~80% (vs ~30-minutowy okres 'down' po orgazmie placebo). Mechanizm: po orgazmie przejściowy skok prolaktyny powoduje okres refrakcji; kabergolina temu zapobiega. Off-label rekreacyjne użycie 'PRL crash': 0,25 mg 1 godzinę przed orgazmem. NIE poparcie — ale w kontekście AAS-Tren, bonusowa korzyść (spadek libido Tren + skrócenie PORP w combo pomaga)."},
    {"q": "Kabergolina w sprayu donosowym?", "a": "Kompoundowana formulacja sprayu donosowego (5 mg/mL liquid, dawka 50 mcg/spray) — szybszy początek działania (~30 min vs doustnie ~3 h), pominięcie pierwszego pasażu wątrobowego. UGL-only globalnie (BRAK zatwierdzenia FDA/EMA dla formulacji donosowej). Off-label użycie przez apteki kompoundujące w niektórych jurysdykcjach US/EU. Możliwe podrażnienie nosa, długoterminowe uszkodzenie błony śluzowej nieudokumentowane. NIE zalecane jako standard AAS-PCT; doustny Dostinex pozostaje domyślny."},
    {"q": "Długoterminowa kabergolina cruise?", "a": "Użytkownik AAS TRT cruise (Test + okazjonalny 19-Nor blast) niska dawka kabergoliny (0,25 mg 1x/tydzień) chronic use jest dyskusyjne. Zalecana coroczna echokardiografia, i monitor prolaktyny co 3 miesiące. Generalnie: NIE podczas chronic cruise, tylko podczas cyklu (Tren/Deca aktywny cykl 8-12 tygodni → kabergolina 0,5 mg 2x/tydzień; off-cycle → zaprzestanie). Bezpieczeństwo długoterminowe niskiej dawki jest w dużej mierze ekstrapolowane z danych pacjentek pomenopauzalnych z prolaktynomą — specyficzne dla mężczyzn AAS evidence rzadkie."}
  ],
  "related": ["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 1},
    "unit": "mg / 2x tydzień (doustnie pon+czw, miareczkowane badaniami)",
    "note": "Standardowa kontrola prolaktyny 19-Nor/Tren: 0,25-0,5 mg 2x/tydzień. Cel prolaktyny <15 ng/mL miareczkowane badaniami. Długi okres półtrwania (~63 h) → stan stacjonarny po ~10-14 dniach. Ciężki incydent wysokiej prolaktyny (>50 ng/mL) → 0,5-1 mg 2x/tydzień × 2 tygodnie hard titration. PO posiłku (zapobieganie nudnościom)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem kabergoliny",
      "timing": "Cykl 19-Nor/Tren tydzień 4-6 lub początek objawów",
      "markers": "Prolaktyna czuły immunoassay lub LC-MS/MS (NIE ECL — przeszacowanie!), Total/Wolny Testosteron, E2, LH, FSH, ALT/AST, MRI jeśli prolaktyna >100 ng/mL (rule-out mikro-/makroprolaktynomy).",
      "purpose": "Baseline. Wskazanie: prolaktyna >25 ng/mL powyżej męskiej referencji, lub początek objawów (spadek libido, laktacja, Tren flu). Jeśli prolaktyna >100 → wskazane MRI siodła tureckiego (rule-out prolaktynomy)."
    },
    "midCycle": {
      "label": "Kabergolina dzień 10-14",
      "timing": "Start kabergoliny +10-14 dni (poziom stanu stacjonarnego)",
      "markers": "Prolaktyna (powtórzenie), Total Test, Wolny Test, E2, ALT/AST.",
      "purpose": "Potwierdzenie miareczkowania: cel prolaktyny <15 ng/mL. Jeśli nadal >25 → zwiększenie dawki do 0,5 mg 2x/tydzień. Dokumentacja ustąpienia objawów (powrót libido, brak laktacji)."
    },
    "postCycle": {
      "label": "Koniec cyklu / zaprzestanie kabergoliny",
      "timing": "Ostatnia dawka +2 tygodnie",
      "markers": "Prolaktyna (monitor rebound), Total/Wolny Test, E2, lipidogram.",
      "purpose": "Potwierdź: prolaktyna wraca do baseline w 2-3 tygodnie. Jeśli skok rebound >40 ng/mL → przed nowym cyklem, kabergolina pre-emptive 0,25 mg/tydzień × 2 tygodnie."
    },
    "cruise": {
      "label": "Chronic TRT cruise + okazjonalny 19-Nor blast",
      "timing": "0,25 mg 1x/tydzień chronic, faza blast 0,5 mg 2x/tydzień",
      "markers": "Prolaktyna co 3 miesiące, echokardiografia (TTE) rocznie monitor cardiac valvulopathy, lipidogram rocznie.",
      "purpose": "Kontrola prolaktyny + monitor kardiologiczny u przewlekłego użytkownika AAS. Ryzyko AAS-context niska dawka chronic kabergolina jest niskie, ale coroczne echo rozsądne."
    }
  }
}
