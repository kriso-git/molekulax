// Anastrozol (Arimidex) — odwracalny niesteroidowy inhibitor aromatazy
// (CYP19) klasy triazolowej. Zatwierdzony przez FDA 1995 AstraZeneca dla
// pomenopauzalnego raka piersi ER+. Złoty standard kontroli E2 podczas
// cykli AAS. Źródła: FDA Arimidex SmPC, Buzdar 2002 ATAC PMID 12081816,
// Geisler 2002 PMID 12351538, Mauras 2003 PMID 12759427.

export default {
  "id": "anastrozol",
  "name": "Anastrozol (Arimidex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Triazolowy niesteroidowy inhibitor aromatazy (AI). Zatwierdzony przez FDA (1995 AstraZeneca) dla pomenopauzalnego raka piersi ER+. Złoty standard kontroli E2 podczas cykli AAS, 0,25-1 mg EOD-2x/tydzień miareczkowany badaniami.",
  "description": "Anastrozol (Arimidex) jest niesteroidowym inhibitorem aromatazy (AI) trzeciej generacji z grupy triazoli, opracowanym przez AstraZeneca (wówczas Zeneca) i zatwierdzonym przez FDA w 1995 roku do leczenia uzupełniającego pomenopauzalnego raka piersi ER+. Badanie ATAC (Buzdar 2002, PMID 12081816) wykazało około 97% supresję estradiolu w surowicy przy dawce 1 mg/dzień poprzez odwracalne kompetycyjne hamowanie enzymu — anastrozol wiąże się z grupą hemową CYP19-aromatazy, blokując konwersję androgenów do estrogenów. W kontekście AAS jest standardowym środkiem kontroli E2 podczas cykli opartych na testosteronie (Test/Tren/Mast/Dianabol): tygodniowe dawkowanie miareczkowane na podstawie badań, docelowy minimalny poziom E2 20-30 pg/mL mierzony testem LC-MS/MS o wysokiej czułości (NIE ECL — ECL przeszacowuje E2 przy niskich poziomach, dając fałszywie podwyższone wyniki, niepotrzebne dawkowanie anastrozolu i crashed E2). Anastrozol jest złotym standardem PCT-AAS wśród inhibitorów aromatazy: dobrze udokumentowany, stosunkowo łatwy do miareczkowania, umiarkowany wpływ na lipidy.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Odwracalny niesteroidowy inhibitor CYP19-aromatazy, ~97% supresji E2 w surowicy przy 1 mg/dzień"
    },
    {
      "label": "Dawkowanie (AAS)",
      "value": "0,25-1 mg EOD-2x/tydzień miareczkowane badaniami (E2 trough 20-30 pg/mL LC-MS/MS)"
    },
    {
      "label": "Okres półtrwania",
      "value": "~50 godzin (pojedyncza dawka dzienna, stan stacjonarny dzień 7)"
    },
    {
      "label": "Początek działania",
      "value": "Redukcja E2 mierzalna 24-48 h, pełny efekt 5-7 dni"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx, HU + PL zarejestrowany, WADA S4.1 banned"
    }
  ],
  "mechanism": "Anastrozol odwracalnie wiąże się z żelazem hemowym w aktywnym miejscu CYP19-aromatazy, kompetycyjnie blokując dostęp naturalnych substratów (androstendion, testosteron). Silne powinowactwo wiązania żelaza pierścienia triazolowego daje związkowi in vitro IC50 ~15 nM (preparat submikrosomalny aromatazy ludzkiej łożyska). Supresja aromatyzacji w całym ciele jest zależna od dawki: 0,5 mg/dzień daje ~90% supresji E2, 1 mg/dzień ~97%, wyższe dawki (10 mg/dzień) nie dają znaczącego dodatkowego efektu — plateau. Ponieważ wiązanie jest odwracalne, pominięta dawka pozwala E2 w surowicy powrócić w ciągu 24-48 godzin bez efektu odbicia. Wątrobowe CYP3A4 + CYP1A2 utleniają związek; główne metabolity są nieaktywne, ~85% wydalania nerkowego jako glukuronid. NIE jest agonistą AR, NIE jest agonistą ER — czysty inhibitor CYP19.",
  "legalStatus": "USA: zatwierdzony przez FDA 1995 (Arimidex 1 mg, AstraZeneca; generyczny anastrozol 1 mg 2010). Wskazanie: leczenie uzupełniające i przerzutowe pomenopauzalnego raka piersi ER+. UE: zatwierdzony przez EMA. HU: zarejestrowany (Arimidex, Anastrozol-ratiopharm, Anastrozol Sandoz Rx). PL: zarejestrowany (Arimidex Rx). WADA: S4.1 inhibitor aromatazy — banned w- i poza-konkurencji (zabronione dla wszystkich męskich zawodników WADA).",
  "onsetTime": "Redukcja E2 24-48 h, pełny efekt 5-7 dni",
  "halfLife": "~50 godzin",
  "halfLifeActive": "N/A (związek macierzysty aktywny, metabolity nieaktywne)",
  "interactionsWith": [
    "letrozol",
    "exemestane",
    "nolvadex",
    "testosterone-info",
    "trenbolone-info"
  ],
  "aromatization": "Nie aromatyzuje — kompetycyjny inhibitor CYP19-aromatazy (IC50 ~15 nM in vitro, ~97% supresji E2 w surowicy przy 1 mg/dzień). Anastrozol sam NIE jest substratem aromatazy; wiąże się bezpośrednio z miejscem wiążącym substrat.",
  "hepatotoxicity": "Niska — niesteroidowy, NIE 17α-alkilowany. Etykieta FDA Arimidex: rzadkie podwyższenie ALT/AST (<2% incydencji), klinicznie istotna hepatotoksyczność niezwykle rzadka. Długotrwałe stosowanie u kobiet jako leczenie uzupełniające (5+ lat) nie wykazuje znaczącego wzorca uszkodzenia wątroby (10-letnia obserwacja ATAC).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS, AI)",
  "bindingAffinity": "Wiązanie kompetycyjne w aktywnym miejscu CYP19-aromatazy, Ki ~10-15 nM (in vitro mikrosomy łożyska ludzkiego). ER/AR/PR — minimalne wiązanie (<1%).",
  "detectionWindow": "Wykrywanie w moczu metodą WADA GC-MS/LC-MS/MS 1-2 miesiące po ostatniej dawce (marker macierzysty + glukuronidowany metabolit).",
  "benefits": [
    "Złoty standard kontroli E2 podczas cykli AAS, ~97% supresji E2 w surowicy przy 1 mg/dzień",
    "Profilaktyka ginekomastii podczas cykli aromatyzujących (Test, Dianabol)",
    "Redukcja retencji wody → czystsza definicja mięśni",
    "Odwracalne wiązanie → łatwe miareczkowanie do trough E2",
    "30+ lat literatury klinicznej (rozwój od lat 90.)",
    "Globalna dostępność (FDA + EMA + HU + PL Rx)",
    "Niedrogi (~€10-25/opakowanie generyczne 1 mg)"
  ],
  "quickStart": [
    "Bloodwork-baseline NAJPIERW: zmierz E2 w tygodniu 4-6 cyklu testem LC-MS/MS o wysokiej czułości (NIE ECL)",
    "Miareczkowanie dawki: E2 >40 pg/mL ORAZ objawy gino → 0,5 mg E3D start; E2 30-40 pg/mL → 0,25 mg E3D",
    "Powtórz badanie 10-14 dni później, cel trough 20-30 pg/mL — niższy = redukcja dawki",
    "NIE dawkuj profilaktycznie: AI na początku cyklu bez objawów baseline niesie ryzyko crashed-E2",
    "Stack tylko-Tren lub dominujący-19-Nor: AI zwykle niepotrzebny (niska aromatyzacja)",
    "Z wodą + rano lub wieczorem, jedzenie indyferentne (biodostępność doustna ~85%)"
  ],
  "expectations": [
    {
      "label": "Dzień 1-3",
      "body": "Redukcja E2 mierzalna w badaniach (~30-50% spadku od baseline). Ulga w retencji wody odczuwalna, napięcie objawów gino ustępuje."
    },
    {
      "label": "Tydzień 1-2",
      "body": "Stan stacjonarny poziomu w osoczu, pełna supresja E2 (~97% cel). Retencja wody zminimalizowana, definicja poprawia się. Lipidogram monitorowalny (oczekiwany łagodny spadek HDL)."
    },
    {
      "label": "Długotrwałe stosowanie (3+ miesięcy)",
      "body": "Monitoruj BMD (gęstość mineralna kości) — chroniczny deficyt E2 niesie ryzyko osteopenii. Lipidogram monitor, omega-3 + krill oil ochrona kardio."
    },
    {
      "label": "Po zaprzestaniu",
      "body": "E2 wraca do baseline w 24-48 h (odwracalne wiązanie). BRAK efektu odbicia. Faza PCT może się rozpocząć po klirensie estru."
    }
  ],
  "quality": {
    "pure": [
      "AstraZeneca Arimidex 1 mg blister, Rx farmacja-grade (apteki UE dostępne)",
      "Anastrozol-ratiopharm, Anastrozol Sandoz, Anastrozol Teva generyczne (UE)",
      "Indyjski generyk (Sun Pharma, Cipla) — pharma-grade, niedrogi",
      "UGL liquid anastrozole: wymagane źródło testowane HPLC — często słabo rozcieńczony i nadmiernie stężony (1 mL = 5 mg, ryzyko przedawkowania)"
    ],
    "caution": [
      "Objawy crashed E2: bóle stawów, spadek libido, letarg, zapaść nastroju — natychmiastowa redukcja dawki/pauza",
      "Lipidogram pogarsza się: oczekiwany spadek HDL i wzrost LDL przy wyższych dawkach; omega-3 + krill oil + monitor kardio",
      "BMD (gęstość kości) stresor długoterminowy — DEXA skan co 12 miesięcy dla przewlekłych użytkowników",
      "Induktory CYP3A4 (ryfampicyna, fenytoina, karbamazepina) → obniżone poziomy anastrozolu; inhibitory CYP3A4 (ketokonazol, rytonawir) mogą podwyższać",
      "Współadministracja Tamoksyfenu NIE zalecana (nakładający się mechanizm, ryzyko crashed-E2)"
    ],
    "avoid": [
      "Stosowanie u przedmenopauzalnych kobiet w cyklach AAS (dysfunkcja owulacji, wyzwalacz niepłodności)",
      "Ciąża / karmienie piersią (Kategoria ciąży X)",
      "Ciężka niewydolność wątroby (Child-Pugh C)",
      "Anastrozol profilaktycznie na początku cyklu bez baseline-bloodwork (ryzyko crashed-E2)"
    ]
  },
  "interactions": [
    "Tamoksyfen (Nolvadex): NIE zalecany razem w PCT — anastrozol obniża E2, tamoksyfen blokuje ER → łączny efekt może wywołać zespół crashed-E2",
    "Cykle testosteronowe: standardowa kontrola E2 w stack AAS",
    "Dianabol/Anadrol/Trenbolon: Tren NIE aromatyzuje (anastrozol mniej skuteczny), Dianabol/Anadrol silnie aromatyzują → anastrozol silnie skuteczny",
    "SSRI: paroksetyna/fluoksetyna minimalna interakcja (vs. problem tamoksyfen-CYP2D6)",
    "Statyny: lipidogram podwójny monitor wymagany, można rozważyć redukcję dawki statyny",
    "Alkohol: łagodny stres wątrobowy, umiarkowane spożycie OK"
  ],
  "studies": [
    {
      "title": "Meta-analyses of phase 3 randomised controlled trials of third generation aromatase inhibitors versus tamoxifen as first-line endocrine therapy in postmenopausal women with hormone receptor-positive advanced breast cancer.",
      "authors": "Robertson JFR, Paridaens RJ, Lichfield J, Bradbury I, Campbell C",
      "journal": "Eur J Cancer",
      "pmid": "33418233"
    },
    {
      "title": "Influence of letrozole and anastrozole on total body aromatization and plasma estrogen levels in postmenopausal breast cancer patients evaluated in a randomized, cross-over study.",
      "authors": "Geisler J, Haynes B, Anker G, Dowsett M, Lønning PE",
      "journal": "J Clin Oncol",
      "pmid": "11821457"
    },
    {
      "title": "An integrated view of aromatase and its inhibition.",
      "authors": "Miller WR, Anderson TJ, Evans DB",
      "journal": "J Steroid Biochem Mol Biol",
      "pmid": "14623539"
    },
    {
      "title": "Aromatase inhibitor mechanism: review",
      "authors": "Brueggemeier RW, Hackett JC, Diaz-Cruz ES.",
      "journal": "Endocr Rev. 2005;26(3):331-345.",
      "pmid": "15814851"
    }
  ],
  "faq": [
    {
      "q": "Kiedy zacząć anastrozol w cyklu?",
      "a": "Nigdy profilaktycznie na początku cyklu bez baseline-bloodwork i objawów ginekomastii. Poprawny protokół: testuj E2 w tygodniu 3-4 cyklu metodą LC-MS/MS o wysokiej czułości (NIE ECL — przeszacowanie przy niskich poziomach). Jeśli E2 >40 pg/mL ORAZ objawy gino (wrażliwe sutki, fluktuacja lipidów, retencja wody) → start 0,25-0,5 mg E3D. Jeśli E2 <40 pg/mL i BRAK objawów → nie zaczynaj. Ludowe przekonanie 'każdy cykl Test potrzebuje anastrozolu' jest realistyczne tylko na silnie aromatyzujących stackach (Dianabol+Test+Anadrol) — czysta dawka TRT Test-Enan 200 mg/tydzień zwykle nie potrzebuje AI."
    },
    {
      "q": "Anastrozol vs. Aromasin (Eksemestan) — kiedy wybrać który?",
      "a": "Anastrozol ma ODWRACALNE wiązanie, łatwe miareczkowanie, E2 wraca do baseline 24-48 h po zaprzestaniu bez odbicia. Aromasin jest SAMOBÓJCZYM INHIBITOREM (nieodwracalne kowalencyjne wiązanie), powrót wymaga syntezy nowej aromatazy (5-7 dni), ale jego metabolit 17-hydro-eksemestan jest ŁAGODNIE androgenny — spadek SHBG i wzrost wolnego testosteronu to bonusy. Domyślny wybór: anastrozol (miareczkowalność), Aromasin gdy ważny akcent SHBG lub stabilność taperowania końcowego (brak skoku odbicia E2 na Aromasin)."
    },
    {
      "q": "Objawy i leczenie crashed E2?",
      "a": "Objawy: bóle stawów (szczególnie nadgarstki + kolana), spadek libido, letarg, zaburzenia snu, zapaść lipidogramu (spadek HDL), nastrój depresyjny. Pomiar: surowicze E2 LC-MS/MS <15 pg/mL → crashed. Leczenie: NATYCHMIAST zatrzymaj anastrozol na 7-10 dni, powtórz E2; jeśli wraca do zakresu 20-30 pg/mL, restart w połowie dawki (np. 0,125 mg zamiast 0,25 mg = ćwiartka tabletki). Zapobieganie: NIGDY nie dawkuj profilaktycznie bez baseline; zawsze miareczkuj badaniami."
    },
    {
      "q": "Lipidogram pogarsza się — co robić?",
      "a": "Spadek HDL jest oczekiwany na anastrozolu (~10-20%), łagodny wzrost LDL. Monitor kardio: lipidogram pre-cycle + tydzień 6 + post-cycle. Mitygacje: omega-3 (EPA 2-3 g/dzień), krill oil (astaksantyna ekstra), CoQ10 (200 mg), berberyna (redukcja LDL), niacyna (kwas nikotynowy podnoszący HDL). Jeśli LDL >190 mg/dL lub HDL <30 mg/dL → statyna (atorwastatyna 20 mg) pod konsultacją specjalisty. Dłuższy protokół taperowy (1 mg → 0,5 mg → 0,25 mg) może złagodzić efekt."
    },
    {
      "q": "Tier 4 vs. tier 5? Dlaczego nie tier 5 jak Nolvadex?",
      "a": "Nolvadex (1977 FDA, ~50 lat historii klinicznej) i anastrozol (1995 FDA, ~30 lat) są na różnych poziomach dojrzałości — Nolvadex ma w przybliżeniu dwukrotnie większą bazę literatury klinicznej. Anastrozol jest złotym standardem AAS-AI (podstawa tier 4), ale nie spełnia surowszych kryteriów tier 5 (5+ dekad historii klinicznej + brak debaty profilu bezpieczeństwa). Oba związki są pierwszorzędnym wyborem we własnej kategorii (SERM vs. AI), tylko odległość-osi-czasu klinicznej przypisuje inny tier."
    }
  ],
  "related": [
    "letrozol",
    "exemestane",
    "nolvadex",
    "testosterone-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0.25,
      "medium": 0.5,
      "high": 1
    },
    "unit": "mg / EOD-2x tydzień (doustnie, miareczkowane badaniami)",
    "note": "Standardowa kontrola E2 w AAS: 0,25-1 mg EOD-2x/tydzień, cel trough E2 20-30 pg/mL na LC-MS/MS. Silnie aromatyzujący stack (Dianabol+Test+Anadrol): 1 mg EOD; umiarkowany (Test-only): 0,25-0,5 mg E3D; niska aromatyzacja (Tren-dominujący, Var, Mast): często AI niepotrzebny. Nigdy profilaktycznie bez baseline-bloodwork i objawów gino."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem / przed startem anastrozolu",
      "timing": "Tydzień 3-4 cyklu lub początek objawów gino",
      "markers": "E2 LC-MS/MS test o wysokiej czułości (NIE ECL), Total Testosteron, Wolny Testosteron, SHBG, Prolaktyna, Estradiol, lipidogram (TC/LDL/HDL/TG), ALT, AST, morfologia.",
      "purpose": "Baseline dla trajektorii miareczkowania E2. Jeśli E2 >40 pg/mL ORAZ objawy gino (wrażliwe sutki, fluktuacja lipidów, retencja wody) → start wskazany. Jeśli E2 ≤40 lub brak objawów → nie zaczynaj."
    },
    "midCycle": {
      "label": "Anastrozol dzień 10-14",
      "timing": "Start anastrozolu +10-14 dni",
      "markers": "E2 LC-MS/MS (powtórzenie), Total Test, lipidogram, ALT/AST.",
      "purpose": "Potwierdzenie miareczkowania: cel E2 20-30 pg/mL — <15 = crashed → pauza; >40 = wskazane zwiększenie dawki. Monitor lipidogramu: oczekiwany spadek HDL i łagodny wzrost LDL."
    },
    "postCycle": {
      "label": "Koniec cyklu + monitor powrotu",
      "timing": "Anastrozol ostatnia dawka +2 tygodnie",
      "markers": "E2, Total/Wolny Test, LH, FSH, lipidogram, ALT/AST.",
      "purpose": "Potwierdź: E2 wraca do baseline (odwracalne wiązanie, 24-48 h, brak odbicia). Rozpocznij fazę PCT z Nolvadex/Clomid SERM, AI nie jest potrzebny podczas PCT."
    },
    "cruise": {
      "label": "TRT-cruise niska dawka anastrozolu",
      "timing": "Tygodniowo lub co dwa tygodnie (indywidualnie miareczkowane)",
      "markers": "E2 LC-MS/MS miesięcznie, lipidogram + DEXA skan rocznie (monitor BMD).",
      "purpose": "Na TRT-cruise (Test 100-200 mg/tydzień) niska dawka anastrozolu (0,125-0,25 mg/tydzień) może być wskazana dla niektórych użytkowników, ale wiele klinik TRT tego unika — niska dawka Test rzadko potrzebuje AI. Długoterminowa supresja E2 podnosi ryzyko osteopenii, DEXA skan rocznie."
    }
  },
  "anecdote": "Anastrozol (Arimidex) dobrze wykonuje zamierzone zadanie jako inhibitor aromatazy, ale raporty anegdotyczne konsekwentnie ostrzegają, że łatwo go przedawkować i tego pożałować. Nadmierne dawkowanie może załamać estrogen, pozostawiając użytkownika z efektami niskiego E2 (ból stawów, załamanie nastroju, utrata libido, problemy z lipidami) — wyniki zdecydowanie gorsze niż lekko podwyższone E2. Nie jest to związek, który należy przyjmować na ślepo; dawkowanie kieruje się objawami i idealnie wynikami badań krwi. Doniesienia społeczności opisują Arimidex jako doskonałe narzędzie, gdy E2 musi zostać niezawodnie i szybko obniżone — używany w razie potrzeby, gdy pojawiają się objawy wysokiego E2 i potwierdzone badaniami laboratoryjnymi. Arimidex podaje się doustnie w małych, kontrolowanych dawkach ze względu na jego wysoką siłę działania. Dawkowanie jest wysoce indywidualne; zbyt dużo może szybko załamać estrogen. Z okresem półtrwania około 2-3 dni, podawanie dwa razy w tygodniu jest dość powszechne w protokołach społeczności."
}
