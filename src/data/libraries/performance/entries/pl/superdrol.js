// Phase C — multi-variant entry (oral + injectable). v0.27 RICH expansion.
// See docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources for Lab Terminal hard-fail fields (aromatization, hepatotoxicity):
// Singh 2009 (PMID 18813027), Shah 2008 (PMID 18187367), Jasiurkowski 2006
// (PMID 16952289), Nasr 2009 (PMID 18720005), Kazlauskas 2010 (PMID 20020364).
// Injectable framing: 17α-methyl class extrapolation + methyldrostanolone
// in-oil UGL prep convention.

export default {
  "id": "superdrol",
  "name": "Superdrol",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Methasterone (pochodna 2α,17α-dimetylo-DHT). Dwa formaty rynkowe: doustna tabletka 17α-metylowana z ekstremalną hepatotoksycznością oraz podziemna iniekcyjna w-oleju z obniżonym (ale NIE wyeliminowanym) stresem wątrobowym.",
  "description": "Superdrol (chemicznie Methasterone, 2α,17α-dimetylo-17β-hydroksy-5α-androstan-3-on) pierwotnie zsyntetyzowany w 1956. Designer Supplements LLC wprowadziła formę doustną jako suplement diety w 2005; FDA w 2012 (DASCA) sklasyfikowała jako substancję kontrolowaną Schedule III i wycofała z rynku suplementów. Wariant iniekcyjny pojawił się później na rynku podziemnym — methyldrostanolone rozpuszczony w oleju (NIE estryfikowany) — który omija first-pass wątroby i obniża stres wątrobowy, ale grupa 17α-metylowa oznacza, że hepatotoksyczność NIE jest całkowicie wyeliminowana. Silny agonista AR (anaboliczny 400, androgenny 20 vs. testosteron); struktura 2α,17α-dimetylowa oznacza brak aromatyzacji w obu formach.",
  "keyInfo": [
    { "label": "Mechanizm", "value": "Agonista AR (anaboliczny 400 / androgenny 20)" },
    { "label": "Stosunek anaboliczny", "value": "400:20" },
    { "label": "Status prawny", "value": "USA: Schedule III (2012 DASCA). UE: kontrolowany, nielegalny bez recepty." }
  ],
  "mechanism": "Bezpośredni agonista receptora AR. Podwójny blok metaboliczny 2α-metyl + 17α-metyl: grupa 2α-metylowa blokuje aromatazę (NIE konwertuje do estrogenu); grupa 17α-metylowa daje oporność na hepatyczną oksydację 17β-HSD. Doustnie 17α-metyl blokuje first-pass clearance wątroby (biodostępność doustna ~75%), ale powoduje przedłużony stres cholestatyczny. Forma iniekcyjna omija first-pass, drastycznie zmniejszając stres wątrobowy, ale obecność grupy 17α-metylowej nadal daje mierzalną hepatotoksyczność podczas uwalniania z depo.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Silny agonista AR, ~5× silniejsze wiązanie niż testosteron in vitro.",
  "interactionsWith": ["alcohol", "NSAIDs", "paracetamol", "liver-stress hepatotoxins"],
  "benefits": [
    "Szybki wzrost masy mięśniowej (4–7 kg fat-free mass w 4 tygodnie wg doniesień anegdotycznych)",
    "Silny wzrost siły, PR-y wyciskania i martwego ciągu",
    "Brak aromatyzacji w obu formach, brak efektów estrogenowych (retencja wody, gyno)",
    "Suchy, naczyniowy wygląd (kompatybilny z cyklem redukcyjnym)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: stosowanie Superdrol na Węgrzech i w UE jest nielegalne bez recepty",
    "Jeśli mimo to stosowane: max 4–6 tygodni cyklu w zależności od formatu, hepatotoksyczność kumulatywna",
    "Wsparcie wątroby (TUDCA 500–1000 mg/dzień, NAC 1200 mg/dzień) obowiązkowe przez cały cykl",
    "PCT (Clomid + Nolvadex 4–6 tygodni) niezbędne dla regeneracji HPTA"
  ],
  "expectations": [
    { "label": "Tydzień 1", "body": "Efekt akutny minimalny. Niektórzy zgłaszają lekki wzrost agresji, 'pump' podczas treningu." },
    { "label": "Tygodnie 2–3", "body": "Wyraźny wzrost siły (10–20% 1RM), szybki suchy przyrost mięśni. Panel lipidowy HDL gwałtownie spada (>30% dokumentowane)." },
    { "label": "Koniec tygodnia 4", "body": "Maksymalny przyrost mięśni. Przy formie doustnej hepatotoksyczność często ujawnia się w tym momencie (ALT/AST 3–5× wzrost) — OBOWIĄZKOWA przerwa cyklu. Przy formie iniekcyjnej wzrost markerów wątrobowych łagodniejszy i wolniejszy." }
  ],
  "studies": [
    { "title": "Severe hepatotoxicity caused by a methasteron-containing performance-enhancing supplement", "authors": "Singh V, Rudraraju M, Carey EJ, Byrne TJ, Vargas HE, Williams JE, Balan V, Douglas DD, Rakela J.", "journal": "J Clin Gastroenterol. 2009;43(3):287.", "pmid": "18813027" },
    { "title": "Methasteron-associated cholestatic liver injury: clinicopathologic findings in 5 cases", "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.", "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.", "pmid": "18187367" },
    { "title": "Designer steroids", "authors": "Kazlauskas R.", "journal": "Handb Exp Pharmacol. 2010;195:155-185.", "pmid": "20020364" },
    { "title": "Cholestatic jaundice and IgA nephropathy induced by OTC muscle building agent superdrol", "authors": "Jasiurkowski B, Raj J, Wisinger D, Carlson R, Zou L, Nadir A.", "journal": "Am J Gastroenterol. 2006;101(11):2659-2662.", "pmid": "16952289" },
    { "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron): a case report and literature review", "authors": "Nasr J, Ahmad J.", "journal": "Dig Dis Sci. 2009;54(5):1144-1146.", "pmid": "18720005" }
  ],
  "faq": [
    { "q": "Dlaczego FDA zakazało Superdrol?", "a": "Wiele przypadków cholestatycznej żółtaczki zgłoszonych do FDA między 2008–2011 (Singh 2009, Shah 2008, Jasiurkowski 2006) wykazało ostrą hepatotoksyczność Methasterone u zdrowych młodych mężczyzn. Ustawa DASCA z 2012 sklasyfikowała jako Schedule III." },
    { "q": "Jak różni się od Anavar?", "a": "Oba są 17α-alkilowanymi AAS doustnymi, ale Superdrol jest podwójnie metylowany (2α + 17α), co daje ekstremalną afiniczność AR, podczas gdy hepatotoksyczność jest ~10× wyższa na poziomie przypadków klinicznych vs. Anavar. Anavar 320:24 stosunek anaboliczny:androgenny, Superdrol 400:20." },
    { "q": "Czy iniekcyjny Superdrol jest bezpieczniejszy?", "a": "Hepatycznie TAK, znacząco — pominięcie first-pass znacznie obniża szczytowe stężenie wątrobowe. ALE z powodu grupy 17α-metylowej pełne bezpieczeństwo NIE istnieje — mierzalny wzrost markerów wątrobowych jest oczekiwany w całym cyklu z powodu przedłużonego uwalniania depo. Ryzyko sercowo-naczyniowe (spadek HDL) i supresji HPTA jest identyczne z formą doustną." },
    { "q": "Co oznacza ALT/AST 3× normy?", "a": "Znaczące uszkodzenie hepatocelularne. NATYCHMIASTOWE przerwanie cyklu, TUDCA do 1000 mg/dzień, NAC 1800 mg/dzień, nawodnienie, retest po 2 tygodniach. Jeśli nie znormalizuje się lub bilirubina wzrośnie, konsultacja hepatologa." }
  ],
  "related": ["methylstenbolone", "anavar-info", "dianabol-info", "testosterone-info"],
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2–3 tygodnie przed rozpoczęciem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina, INR. Plus: panel lipidowy (LDL/HDL/TG), panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, funkcja nerek.",
      "purpose": "Hepatyczny baseline krytyczny dla obu formatów. Jakakolwiek istniejąca dysfunkcja wątroby (stłuszczenie, podwyższona linia bazowa ALT/AST) bezwzględne przeciwwskazanie."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Doustny: koniec tygodnia 2. Iniekcyjny: koniec tygodnia 3.",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: panel lipidowy (HDL może drastycznie spaść), E2, ciśnienie krwi (w domu, codziennie).",
      "purpose": "Wykrywanie sytuacji awaryjnych. ALT/AST >3× górnej normy lub wzrost bilirubiny = NATYCHMIASTOWE wskazanie do przerwania cyklu w obu formach. HDL <25 mg/dL czerwona flaga sercowo-naczyniowa."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "PCT tydzień 4 + tygodnie 8–12 pełna kontrola HPTA + regeneracja wątroby",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (regeneracja ALT/AST/GGT/bilirubiny), panel lipidowy (regeneracja HDL), CBC.",
      "purpose": "Weryfikacja regeneracji HPTA i HEPATYCZNEJ. Jeśli ALT/AST nie znormalizowane po 12 tygodniach, obowiązkowa konsultacja hepatologa."
    },
    "cruise": null
  },
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": "Doustny (tabletka)",
      "routeNote": "Klasyczny format Superdrol: tabletka 17α-metylowana, czas półtrwania ~6–8 h. Dramatyczny wzrost masy i siły, ALE to najbardziej hepatotoksyczny głównonurtowy doustny AAS. Stosuj krótkie cykle (max 4 tygodnie) z obowiązkowym monitoringiem wątroby.",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: substancja kontrolowana Schedule III (DASCA 2012). UE: kontrolowany steryd anaboliczny, nielegalny bez recepty, niesprzedawany w HU/PL. WADA: zakazany w sporcie wyczynowym.",
      "bioavailability": "~75% (doustna, grupa 17α-metylowa odporna na first-pass; dane referencyjne klasy c17-AA)",
      "onsetTime": "7–14 dni (masa mięśniowa)",
      "halfLife": "6–8 godzin (związek wyjściowy, brak aktywnego metabolitu)",
      "halfLifeActive": "6–8 h",
      "detectionWindow": "4–6 tygodni mocz (metabolity metylowane: 17α-metyl-5α-androstan-3α-ol-17β-on, laboratorium akredytowane WADA).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "dosing": "10–30 mg/dzień doustnie, w 1–2 dawkach podzielonych. Maksymalnie 4–6 tygodni cyklu — hepatotoksyczność jest kumulatywna. Utrata apetytu i objawy 'Superdrol-flu' są częste powyżej 20 mg/dzień. TUDCA 500–750 mg/dzień + NAC 1200 mg/dzień obowiązkowe przez cały cykl.",
      "quality": {
        "pure": [
          "Czysty biały proszek lub kapsułki",
          "Niezależnie testowane HPLC źródło (rynek UGL często fałszowany)"
        ],
        "caution": [
          "EKSTREMALNY NADCIŚNIENIE: codzienne monitorowanie ciśnienia krwi obowiązkowe; skurczowe >150 mmHg wskazanie do przerwania cyklu",
          "Hepatotoksyczność (wzrost ALT/AST, rzadko żółtaczka cholestatyczna, udokumentowane przypadki martwicy tkanki wątrobowej)",
          "Ciężkie pogorszenie lipidów: HDL drastycznie spada (>30%, ryzyko sercowo-naczyniowe)",
          "Utrata apetytu, nudności, bóle głowy ('Superdrol-flu') — szczególnie powyżej 20 mg/dzień",
          "Cholestaza: gromadzenie kwasów żółciowych w komórkach wątroby; świąd skóry jest sygnałem ostrzegawczym",
          "Psychologiczne: agresja, drażliwość, lęk",
          "Ostre uszkodzenie nerek (AKI): Nasr 2009 case report (PMID 18720005) udokumentował indukowaną przez Methasterone żółtaczkę cholestatyczną + AKI"
        ],
        "avoid": [
          "Jakakolwiek istniejąca dysfunkcja wątroby (stłuszczenie, zapalenie, podwyższona linia bazowa ALT/AST) bezwzględne przeciwwskazanie",
          "Alkohol, NLPZ, paracetamol jednoczesne stosowanie ściśle zabronione",
          "Inne 17α-alkilowane AAS (Dianabol, Anadrol, Winstrol) kombinacja ekstremalnie hepatotoksyczna",
          "Ryzyko sercowo-naczyniowe (historia rodzinna, wysokie LDL, nadciśnienie) bezwzględne przeciwwskazanie"
        ]
      },
      "interactions": [
        "Inne 17α-alkilowane AAS (Dianabol, Anadrol, Winstrol) kombinacja ekstremalnie hepatotoksyczna",
        "Dodanie podstawy testosteronowej redukuje objawy supresji endogennego T",
        "PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4 tygodnie) obowiązkowy",
        "Terapia statynami przeciwwskazana (skumulowana hepatotoksyczność)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 10,
          "medium": 20,
          "high": 30
        },
        "unit": "mg/day",
        "note": "MAKSYMALNIE 4 tygodnie cyklu — NIGDY dłużej. TUDCA 500–750 mg/dzień + NAC 1200 mg/dzień przez cały cykl. ALT/AST 3× górnej normy = NATYCHMIAST stop + badania wątroby w ciągu 2 tygodni. PCT (Clomid + Nolvadex 4 tygodnie) obowiązkowy. Ciśnienie krwi codziennie."
      }
    },
    {
      "id": "injectable",
      "routeId": "injectable",
      "routeLabel": "Domięśniowy (zastrzyk)",
      "routeNote": "Rzadki format UGL 'Methyl-Drol' w-oleju: ominięcie hepatycznego first-pass zmniejsza — ale NIE eliminuje — stresu wątrobowego. Grupa 17α-metylowa pozostaje hepatotoksyczna również przy podaniu IM. Wolniejszy onset (kinetyka depo), dłuższe okno detekcji. Rozważ tylko jeśli hepatotoksyczność doustna jest nietolerowana; ryzyko nie jest zerowe.",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Nie jest licencjonowanym formatem — wyłącznie UGL (underground lab) rynek podziemny. Wytwarzanie, posiadanie, stosowanie nielegalne wszędzie. WADA: zakazany.",
      "bioavailability": "~100% (iniekcja IM omija first-pass; methyldrostanolone rozpuszczony w oleju z powolnym uwalnianiem depo)",
      "onsetTime": "10–21 dni (wolniejsza rampa niż doustna, kinetyka depo)",
      "halfLife": "8–12 godzin (uwalnianie z depo w oleju; niezestryfikowany methyldrostanolone)",
      "halfLifeActive": "8–12 h",
      "detectionWindow": "6–12 tygodni mocz (dłużej niż doustny z powodu wchłaniania depo, laboratorium akredytowane WADA).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "dosing": "50 mg EOD (co drugi dzień) IM, typowo vastus lateralis lub ventrogluteal. Standard UGL: 50 mg/ml × fiolka 10 ml. Maksymalnie 6 tygodni cyklu. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowe przez cały cykl.",
      "quality": {
        "pure": [
          "Czysty bladożółty olej (~#fef08a ton), fiolka 10 ml, sterylnie filtrowana",
          "UGL źródło testowane HPLC obowiązkowe (fałszowanie i przedawkowanie częste)"
        ],
        "caution": [
          "EKSTREMALNY NADCIŚNIENIE: tak samo jak przy doustnym — codzienne monitorowanie ciśnienia krwi obowiązkowe (efekt klasy 17α-metylowej)",
          "Ból/podrażnienie miejsca iniekcji (IM methyldrostanolone w oleju notoryjnie bolesny — vastus lateralis lub ventrogluteal preferowane)",
          "Hepatotoksyczność (grupa 17α-metylowa aktywna również przy podaniu IM): wzrost ALT/AST, ryzyko cholestazy zmniejszone ale NIE zerowe",
          "Ciężkie pogorszenie lipidów: HDL drastycznie spada (ryzyko sercowo-naczyniowe — tak samo jak doustny)",
          "Utrata apetytu, nudności (objawy 'Superdrol-flu' mogą wystąpić również przy iniekcyjnym)",
          "Psychologiczne: agresja, drażliwość, lęk",
          "Powolna rampa + długie wykrywanie — szczególnie ryzykowne w pobliżu zawodów"
        ],
        "avoid": [
          "Jakakolwiek istniejąca dysfunkcja wątroby bezwzględne przeciwwskazanie (obniżona ale niezerowa hepatotoksyczność)",
          "Alkohol, NLPZ jednoczesne stosowanie ściśle zabronione",
          "Ryzyko sercowo-naczyniowe (historia rodzinna, wysokie LDL, nadciśnienie) bezwzględne przeciwwskazanie",
          "Brak techniki aseptycznej iniekcji (ryzyko ropnia, zakażenia rany)"
        ]
      },
      "interactions": [
        "Jednoczesne stosowanie innych AAS zwiększa supresję HPTA i zaburzenia lipidowe",
        "Dodanie podstawy testosteronowej redukuje objawy supresji endogennego T",
        "PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4–6 tygodni) obowiązkowy",
        "Inhibitor aromatazy (Anastrozol, Letrozol) NIE potrzebny (brak aromatyzacji)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 25,
          "medium": 50,
          "high": 100
        },
        "unit": "mg/inj",
        "note": "50 mg EOD (co drugi dzień) IM — maksymalnie 6 tygodni cyklu. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowe (grupa 17α-metylowa uzasadnia wsparcie wątroby nawet przy formie iniekcyjnej). ALT/AST 3× górnej normy = NATYCHMIAST stop. PCT (Clomid + Nolvadex 4–6 tygodni) obowiązkowy. Ciśnienie krwi codziennie."
      }
    }
  ],
  "defaultVariant": "oral"
}
