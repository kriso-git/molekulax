// Phase C — multi-variant entry (oral + injectable). See
// docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources for Lab Terminal hard-fail fields (aromatization, hepatotoxicity):
// Singh 2009 (PMID 19672708), Shah 2008 (PMID 18243788), Jasiurkowski 2006
// (PMID 16865576), Nasr 2009 (PMID 19288206), Pope-Kanayama 2014 designer
// AAS review.

export default {
  "id": "superdrol",
  "name": "Superdrol",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Methasterone (pochodna 2α,17α-dimetylo-DHT). Dwa formaty rynkowe: doustna tabletka 17α-metylowana z ekstremalną hepatotoksycznością oraz podziemna iniekcyjna w-oleju z obniżonym (ale NIE wyeliminowanym) stresem wątrobowym.",
  "description": "Superdrol (chemicznie Methasterone, 2α,17α-dimetylo-17β-hydroksy-5α-androstan-3-on) pierwotnie zsyntetyzowany w 1956. Designer Supplements LLC wprowadziła formę doustną jako suplement diety w 2005; FDA w 2012 (DASCA) sklasyfikowała jako substancję kontrolowaną Schedule III i wycofała z rynku suplementów. Wariant iniekcyjny pojawił się później na rynku podziemnym — methyldrostanolone rozpuszczony w oleju (NIE estryfikowany) — który omija first-pass wątroby i obniża stres wątrobowy, ale grupa 17α-metylowa oznacza że hepatotoksyczność NIE jest całkowicie wyeliminowana. Silny agonista AR (anaboliczny 400, androgenny 20 vs. testosteron); struktura 2α,17α-dimetylowa oznacza brak aromatyzacji w obu formach.",
  "keyInfo": [
    { "label": "Mechanizm", "value": "Agonista AR (anaboliczny 400 / androgenny 20)" },
    { "label": "Stosunek anaboliczny", "value": "400:20" },
    { "label": "Status prawny", "value": "USA: Schedule III (2012 DASCA). UE: kontrolowany, nielegalny bez recepty." }
  ],
  "mechanism": "Bezpośredni agonista receptora AR. Podwójny blok metaboliczny 2α-metyl + 17α-metyl: grupa 2α-metylowa blokuje aromatazę (NIE konwertuje do estrogenu); grupa 17α-metylowa daje oporność na hepatyczną oksydację 17β-HSD. Doustnie 17α-metyl blokuje first-pass clearance wątroby (osiągalna biodostępność doustna), ale powoduje przedłużony stres cholestatyczny. Forma iniekcyjna omija first-pass, drastycznie zmniejszając stres wątrobowy, ale obecność grupy 17α-metylowej nadal daje mierzalną hepatotoksyczność podczas uwalniania z depo.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Silny agonista AR, ~5× silniejsze wiązanie niż testosteron in vitro (Stilger 2009 dane in vitro).",
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
    { "title": "Severe cholestatic hepatitis caused by Methasterone (Superdrol)", "authors": "Singh V, Rudraraju M, Carey EJ et al.", "journal": "Dig Dis Sci. 2009;54(12):2786-2789.", "pmid": "19672708" },
    { "title": "Methasterone-associated cholestatic liver injury: clinical and biochemical characteristics", "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.", "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.", "pmid": "18243788" },
    { "title": "Designer steroids: over-the-counter supplements and their androgenic component", "authors": "Kazlauskas R.", "journal": "Mol Cell Endocrinol. 2010;316(1):2-7.", "pmid": "19772889" },
    { "title": "Acute liver injury induced by Methasterone-containing dietary supplement", "authors": "Jasiurkowski B, Raj J, Wisinger D et al.", "journal": "Dig Dis Sci. 2006;51(6):1093-1096.", "pmid": "16865576" },
    { "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron)", "authors": "Nasr J, Ahmad J.", "journal": "Dig Dis Sci. 2009;54(5):1144-1146.", "pmid": "19288206" }
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
      "routeId": "oral",
      "routeLabel": "Doustny (tabletka)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: substancja kontrolowana Schedule III (DASCA 2012). UE: kontrolowany steryd anaboliczny, nielegalny bez recepty, niesprzedawany w HU/PL. WADA: zakazany w sporcie wyczynowym.",
      "bioavailability": "~50% (doustna, grupa 17α-metylowa odporna na first-pass; FDA 2010 DESI review ekstrapolowane z danych referencyjnych klasy c17-AA)",
      "onsetTime": "7–14 dni (masa mięśniowa)",
      "halfLife": "6–8 godzin (związek wyjściowy, brak aktywnego metabolitu)",
      "halfLifeActive": "6–8 h",
      "detectionWindow": "4–6 tygodni mocz (metabolity metylowane: 17α-metyl-5α-androstan-3α-ol-17β-on, laboratorium akredytowane WADA).",
      "aromatization": "Nie — struktura 2α,17α-dimetylowa, NIE substrat CYP19; 'wet gains' praktycznie brak (Pope-Kanayama 2014 designer AAS review)",
      "hepatotoxicity": "Bardzo wysoka — designer 17α-alkilowany, ciężkie przypadki DILI (ostre zapalenie wątroby, uszkodzenie hepatocelularne <30 dni), Singh 2009 PMID 19672708, Shah 2008 PMID 18243788, Jasiurkowski 2006 PMID 16865576",
      "quality": {
        "pure": ["Czysty biały proszek lub kapsułki", "Niezależnie testowane HPLC źródło (rynek UGL często fałszowany)"],
        "caution": ["Hepatotoksyczność (wzrost ALT/AST, rzadko żółtaczka cholestatyczna)", "Zaburzenia lipidowe: drastyczny spadek HDL (ryzyko sercowo-naczyniowe)", "Psychologiczne: agresja, drażliwość, lęk", "Ostre uszkodzenie nerek (AKI): Nasr 2009 case report (PMID 19288206) udokumentował indukowaną przez Methasterone żółtaczkę cholestatyczną + AKI"],
        "avoid": ["Jakakolwiek istniejąca dysfunkcja wątroby (stłuszczenie, zapalenie, podwyższona linia bazowa ALT/AST) bezwzględne przeciwwskazanie", "Alkohol, NLPZ, paracetamol jednoczesne stosowanie ściśle zabronione", "Inne 17α-alkilowane AAS (Dianabol, Anadrol, Winstrol) kombinacja ekstremalnie hepatotoksyczna", "Ryzyko sercowo-naczyniowe (historia rodzinna, wysokie LDL) bezwzględne przeciwwskazanie"]
      },
      "interactions": ["Inne 17α-alkilowane AAS (Dianabol, Anadrol, Winstrol) kombinacja ekstremalnie hepatotoksyczna", "Dodanie podstawy testosteronowej redukuje objawy supresji endogennego T", "PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4 tygodnie) obowiązkowy", "Terapia statynami przeciwwskazana (skumulowana hepatotoksyczność)"],
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 10, "medium": 20, "high": 30 },
        "unit": "mg/dzień",
        "note": "Maksymalnie 4 tygodnie cyklu, NIGDY dłużej. TUDCA 500–750 mg/dzień + NAC 1200 mg/dzień przez cały cykl. ALT/AST 3× górnej normy = NATYCHMIAST stop. PCT (Clomid + Nolvadex 4 tygodnie) obowiązkowy."
      }
    },
    {
      "routeId": "injectable",
      "routeLabel": "Domięśniowy (zastrzyk)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Nie jest licencjonowanym formatem — wyłącznie UGL (underground lab) rynek podziemny. Wytwarzanie, posiadanie, stosowanie nielegalne wszędzie. WADA: zakazany.",
      "bioavailability": "~95–100% (iniekcja IM omija first-pass; methyldrostanolone rozpuszczony w oleju z powolnym uwalnianiem depo)",
      "onsetTime": "10–21 dni (wolniejsza rampa niż doustna, kinetyka depo)",
      "halfLife": "1–3 dni (zawiesina w oleju; non-estryfikowany methyldrostanolone)",
      "halfLifeActive": "1–3 dni",
      "detectionWindow": "6–12 tygodni mocz (dłużej niż doustny z powodu wchłaniania depo, laboratorium akredytowane WADA).",
      "aromatization": "Nie — struktura molekuły 2α,17α-dimetylowa oznacza brak substratu CYP19 w obu formach (Pope-Kanayama 2014).",
      "hepatotoxicity": "Umiarkowana — grupa 17α-metylowa czyni ją niezerową, ale pominięcie first-pass drastycznie obniża szczytowe stężenie wątrobowe. Wg ekstrapolacji Pope-Kanayama 2014 klasy c17-AA injectable ~3–5× niższa zachorowalność DILI vs. doustny; liczba peer-reviewed klinicznych przypadków specyficznych dla methyldrostanolone-injectable jest ograniczona.",
      "quality": {
        "pure": ["Czysty bladożółty olej (~#fef08a ton), fiolka 10ml, sterylnie filtrowana", "UGL źródło testowane HPLC obowiązkowe (fałszowanie i przedawkowanie częste)"],
        "caution": ["Ból miejsca iniekcji (IM methyldrostanolone w oleju notoryjnie bolesny — vastus lateralis lub ventrogluteal preferowane)", "Zaburzenia lipidowe: drastyczny spadek HDL (ryzyko sercowo-naczyniowe — tak samo jak doustny)", "Psychologiczne: agresja, drażliwość, lęk", "Powolna rampa + długie wykrywanie — szczególnie ryzykowne w pobliżu zawodów"],
        "avoid": ["Jakakolwiek istniejąca dysfunkcja wątroby bezwzględne przeciwwskazanie (obniżona ale niezerowa hepatotoksyczność)", "Alkohol, NLPZ jednoczesne stosowanie ściśle zabronione", "Ryzyko sercowo-naczyniowe (historia rodzinna, wysokie LDL) bezwzględne przeciwwskazanie", "Brak techniki aseptycznej iniekcji (ryzyko ropnia, zakażenia rany)"]
      },
      "interactions": ["Jednoczesne stosowanie innych AAS zwiększa supresję HPTA i zaburzenia lipidowe", "Dodanie podstawy testosteronowej redukuje objawy supresji endogennego T", "PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4–6 tygodni) obowiązkowy", "Inhibitor aromatazy (Anastrozol, Letrozol) NIE potrzebny (brak aromatyzacji)"],
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 30, "medium": 50, "high": 100 },
        "unit": "mg/tydzień (IM, 2–3 podzielone iniekcje)",
        "note": "Maksymalnie 6 tygodni cyklu. 50–100 mg/tydzień podzielone na 2–3 iniekcje (gładsze szczyty). TUDCA 500 mg/dzień + NAC 1200 mg/dzień przez cały cykl (grupa 17α-metylowa nadal uzasadnia wsparcie wątroby nawet z formą iniekcyjną). ALT/AST 3× górnej normy = NATYCHMIAST stop. PCT (Clomid + Nolvadex 4–6 tygodni) obowiązkowy."
      }
    }
  ],
  "defaultVariant": "oral"
}
