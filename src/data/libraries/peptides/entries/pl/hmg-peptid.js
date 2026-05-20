// HMG (Menopur / Pergonal) — Ludzka Gonadotropina Menopauzalna, framing
// fertility-Rx. Counterpart cross-frame: `hmg-perf` z framingiem PCT po AAS.
// Źródła: EMA Menopur SPC (Ferring 2002), Liu 2009 PMID 19066302,
// Liu 2002 Hum Reprod PMID 11870114, Hill 2018 (Int J Impot Res — no PMID).

export default {
  "id": "hmg-peptid",
  "name": "HMG (Płodność)",
  "image": "/peptides/HMG.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Ludzka Gonadotropina Menopauzalna — 1:1 FSH+LH glikoproteina. Pełna indukcja spermatogenezy (podwójna oś Leydig + Sertoli), superowulacja IVF. Kliniczne Rx do wskazań niepłodności (męski HypoH + IVF indukcja owulacji u kobiet), NIE doping. Cross-frame: kontekst PCT po AAS objęty wpisem `hmg-perf`.",
  "description": "HMG (Ludzka Gonadotropina Menopauzalna) to mieszanina glikoprotein oczyszczona z moczu kobiet po menopauzie, zawierająca **około 75 IU FSH (hormon folikulotropowy) + 75 IU LH (hormon luteinizujący) w proporcji 1:1** w standardowej ampułce. Nowoczesne kliniczne źródła HMG: (1) **wyekstrahowany z moczu** (Menopur Ferring 2002 EMA, 2005 FDA — wyższa czystość produktu oczyszczonego z moczu; starszy Pergonal Serono 1962 globalnie wycofany ~2005 z powodu redukcji ryzyka vCJD); (2) **rekombinowana menotropina** (etap badań, ograniczona dystrybucja kliniczna). **Mechanizm podwójnej stymulacji osi gonadotropinowej**: unikalna wartość HMG w klinicznym leczeniu płodności polega na tym, że stymuluje ZARÓWNO komórki Leydiga (komponent LH → produkcja testosteronu), JAK I komórki Sertoliego (komponent FSH → wsparcie spermatogenezy + produkcja inhibiny-B). Monoterapia HCG aktywuje TYLKO oś Leydig-LH (intratestikularny testosteron rośnie, ale wsparcie Sertoli-FSH jest nieobecne) → pełna indukcja spermatogenezy wymaga połączonego HCG + HMG w hipogonadotropowym hipogonadyzmie (HypoH). **Wskazania kliniczne** (FDA + EMA Rx): (1) **męska indukcja spermatogenezy** w HypoH (zespół Kallmanna, idiopatyczny HypoH, niepłodność pochodzenia przysadkowego): 75-150 IU SC 3x/tydzień × 6-24 miesięcy, w stacku z HCG; (2) **superowulacja IVF** u kobiet i COS (kontrolowana stymulacja jajników): 75-300 IU/dzień indywidualnie. **Uwaga cross-frame**: ta sama fiolka Menopur jak w protokołach PCT użytkowników AAS (wpis `hmg-perf`) — inna narracja (kliniczna niepłodność vs odbudowa po cyklu sportowym), IDENTYCZNA farmakologia. WADA-zakazany cały rok (S2 Hormony Peptydowe).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Mieszanina glikoprotein 1:1 FSH+LH — podwójny stymulus receptora Sertoli-FSHR + Leydig-LHCGR, pełna indukcja osi HPG"
    },
    {
      "label": "Dawkowanie (męska indukcja spermatogenezy HypoH)",
      "value": "75-150 IU SC 3x/tydzień × 6-24 miesięcy (w stacku z HCG)"
    },
    {
      "label": "Dawkowanie (kobieca IVF/COS)",
      "value": "75-300 IU/dzień (indywidualna titracja oparta o folikulometrię)"
    },
    {
      "label": "Okres półtrwania",
      "value": "Komponent FSH ~12-20 h / komponent LH ~8-12 h"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx Menopur (Ferring), WADA S2 (zakazany w+poza zawodami)"
    }
  ],
  "mechanism": "HMG to dwuskładnikowa mieszanina glikoprotein: (1) **FSH** (hormon folikulotropowy) — agonista receptora FSHR komórek Sertoliego → ścieżka cAMP-PKA → stymulus spermatogenezy (wsparcie dojrzewania komórek zarodkowych mediowane przez Sertoli) + produkcja inhibiny-B + synteza białka wiążącego androgeny (ABP); (2) **LH** (hormon luteinizujący) — agonista receptora LHCGR komórek Leydiga → ścieżka cAMP-PKA → steroidogeneza (cholesterol → pregnenolon → testosteron). Dwa komponenty mają różne biologiczne t1/2: FSH ~12-20 h, LH ~8-12 h (LH podobne do endogennego krótkiego t1/2, dlatego protokoły kliniczne używają dawkowania 3x/tydzień lub codziennego). **Logika podwójnej osi klinicznej**: dla indukcji spermatogenezy u mężczyzny z HypoH stymulus Sertoli-FSH jest NIEZBĘDNY; monoterapia HCG (mimikra LH) podnosi intratestikularny testosteron, ale dojrzewanie komórek zarodkowych BEZ wsparcia Sertoli-FSH NIE jest kompletne. Standardowy protokół indukcji: monoterapia HCG 3-6 miesięcy (budowa osi Leydig, wzrost ITT), potem kombinacja HCG + HMG (dodanie osi FSH) → spermatogeneza możliwa do indukcji w ciągu 6-24 miesięcy u ~70-90% (Liu 2009).",
  "legalStatus": "**USA**: FDA Rx Menopur (Ferring zatwierdzenie 2005) — wskazania: COS-IVF, indukcja owulacji, męska indukcja spermatogenezy HypoH. **UE**: EMA Rx Menopur (Ferring zatwierdzenie 2002) — te same wskazania. **HU + PL**: zarejestrowany (Menopur Rx, częste kliniczne użycie IVF). **Pergonal** (historyczny produkt Serono, 1962-2005) globalnie wycofany z powodu teoretycznego ryzyka vCJD + redukcji urinary-source. **WADA**: S2.2 Hormony Peptydowe — zakazany w zawodach + poza zawodami dla wszystkich męskich zawodników cały rok (wyjątek: udokumentowane Rx niepłodności na protokole TUE).",
  "onsetTime": "Odpowiedź hormonalna 24-48 godzin (wzrost Test + mierzalna inhibina-B); kliniczna indukcja spermatogenezy 3-6 miesięcy (na protokole stacked z HCG)",
  "halfLife": "Komponent FSH ~12-20 godzin; komponent LH ~8-12 godzin",
  "halfLifeActive": "Efekt kliniczny 2-3 dni (po pojedynczym bolusie SC, mieszany rozpad komponentów FSH+LH)",
  "interactionsWith": [
    "hcg-peptid",
    "fsh-rec-peptid",
    "hmg-perf",
    "kisspeptin",
    "anastrozol",
    "gonadorelin"
  ],
  "aromatization": "Pośrednia: testikularny stymulus FSH+LH → endogenny wzrost Test → wtórna peryferyjna konwersja E2 przez testikularną + adipocytarną aromatazę CYP19. Wielkość umiarkowana (nieco niższa niż czysty protokół HCG, ponieważ aktywność Sertoli-FSH dominuje nad wzrostem Leydig-Test). W klinicznym kontekście niepłodności monitorowanie E2 generalnie nie jest konieczne (celowany wzrost Test jest w fizjologicznym zakresie indukcji, nie supraphysiologicznym), ale przy wysokiej dawce HMG (>150 IU EOD) obserwacja E2 może być wskazana u wrażliwych na ginekomastię użytkowników męskich.",
  "hepatotoxicity": "Brak stresu wątrobowego — iniekcja podskórna (SC) lub domięśniowa (IM) opartego na białku, NIE doustnie, NIE 17α-alkilowany. Wzrost enzymów wątrobowych nie udokumentowany w bazie badań klinicznych 60+ lat.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS; pośrednia stymulacja testikularnego Test + stymulus spermatogenezy Sertoli)",
  "bindingAffinity": "Komponent FSH: FSHR Kd ~0,5 nM (komórka Sertoliego). Komponent LH: LHCGR Kd ~0,3 nM (komórka Leydiga). Mieszany profil wiązania receptora HMG jest unikalny — w oczyszczonym produkcie wyekstrahowanym z moczu stosunek FSH/LH może się nieco różnić w zależności od partii (~70-80 IU FSH : 70-80 IU LH na ampułce oznakowanej 75/75).",
  "detectionWindow": "WADA-akredytowane ogniskowanie izoelektryczne (IEF) test moczu — odróżnia HMG wyekstrahowany z moczu od endogennego FSH/LH przysadki na podstawie przesunięcia punktu izoelektrycznego. Wykrywalny 5-7 dni po pojedynczym bolusie, 10-14 dni po protokole chronicznym. Rekombinowany FSH (Gonal-F) jest wyraźniej wykrywalny na IEF, urinary HMG trudniej (ryzyko false-negative związane z nakładaniem się endogennym).",
  "benefits": [
    "Pełna indukcja spermatogenezy u męskiego HypoH (~70-90% wskaźnik sukcesu na protokole stacked z HCG, Liu 2009)",
    "Podwójna oś FSH+LH: wsparcie Sertoli-FSH uzupełnia stymulus HCG-tylko Leydig-LH",
    "Superowulacja IVF (COS) protokół niepłodności kobiecej: standardowy element protokołu klinicznego UE + USA",
    "Przywrócenie produkcji inhibiny-B (marker funkcjonalności Sertoli)",
    "Baza badań klinicznych 60+ lat (Pergonal od 1962, Menopur od 2002) — obszerne dane bezpieczeństwa",
    "Tani (Menopur 75 IU fiolka ~€25-40 apteka UE)"
  ],
  "quickStart": [
    "Męska indukcja spermatogenezy HypoH (stacked z HCG): monoterapia HCG 2000-2500 IU SC 2-3x/tydzień × 3-6 miesięcy (budowa osi Leydig, wzrost ITT); jeśli azoospermia utrzymuje się → dodaj HMG 75-150 IU SC 3x/tydzień × 6-24 miesięcy (kombinacja osi FSH). Badania krwi co 3 miesiące (Test, FSH, LH, inhibina-B, liczba plemników).",
    "Kobieca IVF/COS (protokół kliniczny): 75-300 IU/dzień SC, monitorowanie odpowiedzi jajników przez folikulometrię (USG transwaginalne), indywidualna titracja przez endokrynologa rozrodu.",
    "Rekonstytucja: dołączony rozpuszczalnik do fiolki Menopur 75 IU (zwykle 1 mL sterylnej wody do iniekcji); sterylna praktyka (czyszczenie alkoholowe, NIE wstrząsać, delikatne wirowanie). Iniekcja SC strzykawką insulinową 27-30G (tkanka brzucha lub uda).",
    "Przechowywanie: fiolka liofilizowana temperatura pokojowa (długoterminowe przechowywanie 2-8°C); roztwór po rekonstytucji do iniekcji NATYCHMIAST lub przechowywany w 2-8°C maks. 28 dni.",
    "Badania krwi w męskiej indukcji: baseline pre-protokół (Test, FSH, LH, inhibina-B, analiza nasienia), potem pełny panel co 3 miesiące; w kobiecej IVF kierować się protokołem folikulometrii + titracji E2 kliniki niepłodności.",
    "TUE (Therapeutic Use Exemption) dla zawodników: wniosek WADA TUE wymagany PRZED użyciem w udokumentowanych przypadkach Rx niepłodności."
  ],
  "expectations": [
    {
      "label": "Miesiące 1-3 (monoterapia HCG)",
      "body": "Wzrost Test mierzalny (3-7 dni), objętość jąder częściowo odbudowuje się (baseline HypoH zwykle <10 mL → w kierunku 15-20 mL). Spermatogeneza JESZCZE NIE aktywowana (stymulus Sertoli-FSH nieobecny)."
    },
    {
      "label": "Miesiące 4-6 (dodanie HMG)",
      "body": "Stymulus FSH inicjuje dojrzewanie komórek zarodkowych mediowane przez Sertoli. Inhibina-B rośnie (marker funkcjonalności Sertoli). Pojawienie się plemników na analizie nasienia oczekiwane między miesiącami 6-9 (zmienność indywidualna)."
    },
    {
      "label": "Miesiące 6-12",
      "body": "Stopniowy wzrost liczby plemników (oligozoospermia → w kierunku zakresu normozoospermii). Cel kliniczny: spontaniczne poczęcie lub liczba plemników + ruchliwość kwalifikująca do IUI."
    },
    {
      "label": "Miesiące 12-24",
      "body": "Trwała stabilizacja spermatogenezy. Po udanej indukcji powrót do monoterapii HCG (stop FSH) — oś Sertoli jest wtedy samopodtrzymująca. ~70-90% kliniczny wskaźnik sukcesu (Liu 2009, n=75 mężczyzn HypoH)."
    }
  ],
  "quality": {
    "pure": [
      "Menopur 75 IU fiolka (Ferring 2002 EMA / 2005 FDA) — złoty-standard HMG wyekstrahowanego z moczu, wyższa czystość, dostępny w aptekach UE + USA",
      "Menopur 1200 IU fiolka wielodawkowa (Ferring) — pakiet protokołu klinicznego IVF",
      "Bemfola 75 IU (Gedeon Richter) — europejski biosimilar czystego FSH (NIE HMG, ale rFSH — alternatywa dla potrzebujących czystego FSH)",
      "Pergonal — HISTORYCZNY, globalnie wycofany ~2005 (redukcja ryzyka vCJD); jeśli ktoś dzisiaj sprzedaje 'Pergonal', to podejrzane zapasy grey-market lub podróbka",
      "UGL HMG — UNIKAĆ do celów Rx niepłodności: protokół kliniczny wymaga precyzyjnej titracji dawki; niepewność stosunku FSH/LH w partii UGL może zagrozić sukcesowi indukcji"
    ],
    "caution": [
      "Kobiece użytkowniczki IVF: ryzyko zespołu hiperstymulacji jajników (OHSS) przy wysokich dawkach — nadzór endokrynologa rozrodu obowiązkowy (NIE samoprotokół)",
      "Podczas pierwszych 3-6 miesięcy męskiego protokołu indukcji plemniki JESZCZE NIE są oczekiwane (stymulus Sertoli-FSH wymaga czasu do inicjacji) — ryzyko frustracji psychicznej, kontakt kliniczny ważny",
      "Dokumentacja TUE dla zawodników: wniosek WADA TUE musi być złożony PRZED użyciem (retrospektywne TUE zwykle odmówione)",
      "Roztwór po rekonstytucji w 2-8°C maks. 28 dni (sterylna praktyka kliniczna obowiązkowa)",
      "Wysoka dawka HMG (>150 IU EOD chronicznie) → rebound E2 i ryzyko ginekomastii u wrażliwych użytkowników męskich → współpodanie AI warto rozważyć (Anastrozol 0,25 mg EOD)"
    ],
    "avoid": [
      "Aktywny guz jąder / przebyty rak jąder (ryzyko stymulacji guza pozytywnego dla receptora gonadotropiny)",
      "Wywiad raka prostaty lub wysokie ryzyko stanu prostaty",
      "Nadwrażliwość na HMG lub substancję pomocniczą wyekstrahowaną z moczu (rzadkie)",
      "Kobieca IVF: wywiad OHSS, ciężkie torbiele jajnikowe, nieleczona hiperprolaktynemia",
      "Mężczyzna przed pokwitaniem → PRZECIWWSKAZANE (przedwczesne dojrzewanie płciowe)"
    ]
  },
  "interactions": [
    "**HCG partner stacku** (obowiązkowy w protokole indukcji spermatogenezy): HCG 2000-2500 IU 2-3x/tydzień + HMG 75-150 IU 3x/tydzień → pełna indukcja osi HPG",
    "**Inhibitor aromatazy (Anastrozol 0,25 mg EOD)**: opcjonalna kontrola E2 na wysokiej dawce HMG u wrażliwych na ginekomastię użytkowników męskich",
    "**SERM (Clomid, Nolvadex)**: NIE współpodawane na protokole HMG — odmienny mechanizm (SERM = endogenny stymulus GnRH, HMG = egzogenny bypass FSH+LH)",
    "**rFSH (Gonal-F, Puregon)**: alternatywa do czystej stymulacji osi FSH (jeśli komponent LH niepotrzebny; np. odpowiednie endogenne LH już obecne)",
    "**Gonadorelin/kisspeptin**: NIE stacked (odmienny mechanizm — pulsacyjny stymulus GnRH vs egzogenny bypass gonadotropiny), ale teoretyczny element protokołu follow-up po długoterminowej indukcji",
    "**TRT (zastępcza testosteronu)**: PRZECIWWSKAZANE na protokole indukcji HMG — egzogenny Test tłumi oś HPG, działając przeciw celowi indukcji"
  ],
  "studies": [
    {
      "title": "Induction of spermatogenesis and fertility during gonadotropin treatment of gonadotropin-deficient infertile men: predictors of fertility outcome",
      "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.",
      "journal": "J Clin Endocrinol Metab. 2009;94(3):801-808.",
      "pmid": "19066302"
    },
    {
      "title": "Predicting pregnancy and spermatogenesis by survival analysis during gonadotrophin treatment of gonadotrophin-deficient infertile men",
      "authors": "Liu PY, Gebski VJ, Turner L, Conway AJ, Wishart SM, Handelsman DJ.",
      "journal": "Hum Reprod. 2002;17(3):625-633.",
      "pmid": "11870114"
    },
    {
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "Int J Impot Res. 2018;30:262-269."
    }
  ],
  "faq": [
    {
      "q": "Dlaczego HMG a nie tylko monoterapia HCG do indukcji spermatogenezy?",
      "a": "MONOTERAPIA HCG stymuluje tylko oś Leydig-LH → intratestikularny testosteron rośnie, ale dojrzewanie komórek zarodkowych mediowane przez Sertoli BEZ stymulacji FSH NIE jest kompletne. W protokole indukcji męskiego HypoH standardowa sekwencja: (1) monoterapia HCG 3-6 miesięcy (budowa osi Leydig); (2) jeśli azoospermia utrzymuje się → dodaj HMG (stack-add osi FSH) → spermatogeneza możliwa do indukcji w ~70-90% (Liu 2009). Unikalna wartość HMG w protokole klinicznym to podwójny stymulus FSH+LH, mimikujący endogenne wydzielanie gonadotropiny przysadkowej."
    },
    {
      "q": "Jaka jest różnica między HMG a rFSH (Gonal-F, Puregon)?",
      "a": "**HMG** (Menopur): oczyszczony z moczu kobiet po menopauzie, mieszanina FSH+LH 1:1. Wartość kliniczna to podwójny stymulus gonadotropiny (Leydig+Sertoli jednocześnie). **rFSH** (Gonal-F Serono, Puregon Organon): wyprodukowany rekombinowanym DNA CZYSTY FSH, BRAK komponentu LH. Wybór kliniczny: jeśli użytkownik ma już wystarczające endogenne LH (lub HCG stacked osobno), ale brakuje osi Sertoli-FSH → rFSH wystarczy. Jeśli potrzebna stymulacja obu osi (klasyczny HypoH) → HMG dostarcza obu w pojedynczej iniekcji. Koszt: rFSH ~2-3x droższy (~€60-80/75 IU vs HMG €25-40)."
    },
    {
      "q": "Ile czasu zajmuje sukces indukcji spermatogenezy?",
      "a": "Powolny proces: 6-24 miesięcy to średnia badań klinicznych (Liu 2009, n=75 mężczyzn HypoH, mediana 9 miesięcy). Cykl spermatogenezy u człowieka to ~74 dni (dojrzewanie komórek zarodkowych mediowane przez Sertoli), więc biologicznie NIE można przyspieszyć — minimum 3 cykle (~9 miesięcy) trzeba czekać do stanu steady-state. Czynniki predykcyjne: objętość jąder pre-treatment (>4 mL korzystne), genetyczne pochodzenie HypoH (Kallmann lepsza prognoza niż post-chirurgiczny guz przysadki), przestrzeganie protokołu indukcji (pominięte iniekcje spowalniają). Przygotowanie psychiczne ważne: podczas pierwszych 6 miesięcy plemniki JESZCZE NIE są oczekiwane."
    },
    {
      "q": "Czy można używać HMG razem z TRT lub zamiast TRT?",
      "a": "**Razem z TRT: PRZECIWWSKAZANE.** Egzogenny testosteron (TRT) tłumi oś HPG (negatywny feedback na podwzgórze), działając przeciw celowi indukcji HMG. W protokole męskiej-fertility-Rx TRT MUSI być przerwany co najmniej 6 tygodni przed startem HMG. **Zamiast TRT do indukcji HypoH**: HMG NIE jest substytutem TRT — wzrost Test jest pośredni (stymulus Leydig), o mniejszej wielkości niż bezpośredni TRT, a cel kliniczny to indukcja spermatogenezy, NIE leczenie objawowego deficytu Test. U męskiego użytkownika HypoH priorytetyzującego płodność (zakładanie rodziny), HMG+HCG przez cały protokół indukcji (6-24 miesięcy), potem opcjonalnie powrót do TRT (ale NIE w oknie płodności)."
    },
    {
      "q": "Cross-frame: ten sam Menopur jak w protokołach PCT po AAS?",
      "a": "Tak — identyczna cząsteczka. Wpisy `hmg-peptid` (niniejszy wpis, framing fertility-Rx) i `hmg-perf` (framing PCT po AAS) mają ~80% pokrycia treści (ta sama struktura chemiczna, farmakologia, droga podania). RÓŻNICA to framing: `hmg-peptid` w kontekście klinicznym Rx niepłodności (indukcja spermatogenezy HypoH, kobieca IVF COS), podczas gdy `hmg-perf` w kontekście odbudowy po cyklu AAS (stymulus Sertoli-FSH do restartu spermatogenezy po długim cyklu). Użytkownik może kupić tę samą fiolkę Menopur w klinice niepłodności na Rx lub jako element protokołu odbudowy po cyklu AAS — inna narracja, identyczna farmakologia."
    }
  ],
  "related": [
    "hcg-peptid",
    "fsh-rec-peptid",
    "hmg-perf",
    "kisspeptin"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 75,
      "medium": 150,
      "high": 300
    },
    "unit": "IU/dawkę (SC lub IM, częstość dawki specyficzna protokołowi)",
    "note": "**Męska indukcja spermatogenezy HypoH (stacked z HCG)**: 75-150 IU SC 3x/tydzień × 6-24 miesięcy. **Kobieca IVF/COS**: 75-300 IU/dzień indywidualna titracja oparta o folikulometrię przez endokrynologa rozrodu. **Standardowy protokół indukcji**: monoterapia HCG 3-6 miesięcy → jeśli azoospermia utrzymuje się, dodaj HMG do stack-add osi FSH. NIE samoprotokół: nadzór endokrynologa rozrodu (szczególnie w kobiecej IVF z powodu ryzyka OHSS)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed protokołem indukcji",
      "timing": "Przed startem monoterapii HCG",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, Prolaktyna, SHBG, inhibina-B, analiza nasienia (liczba plemników + ruchliwość + morfologia), objętość jąder (palpacja + USG), genetyczny screening HypoH (kariotyp + mikrodelecja Y).",
      "purpose": "Baseline do śledzenia trajektorii indukcji płodności + identyfikacja czynników predykcyjnych (objętość jąder, tło genetyczne)."
    },
    "midCycle": {
      "label": "Podczas protokołu indukcji",
      "timing": "Co 3 miesiące",
      "markers": "Total Test, E2 (obserwacja ginekomastii na wysokiej dawce HMG), inhibina-B (marker funkcjonalności Sertoli), analiza nasienia (trend liczby plemników + ruchliwości).",
      "purpose": "Monitorowanie postępu indukcji spermatogenezy + dostosowanie dawki (jeśli inhibina-B nie rośnie → zwiększenie dawki HMG lub przedłużenie czasu)."
    },
    "postCycle": {
      "label": "Po udanej indukcji (stop HMG)",
      "timing": "6 tygodni po stabilizacji spermatogenezy",
      "markers": "Total Test, LH, FSH, analiza nasienia, potwierdzenie płodności (kwalifikujące do IUI lub spontaniczne poczęcie).",
      "purpose": "Po stopie HMG powrót do monoterapii HCG (oś Sertoli samopodtrzymująca) — potwierdzenie, że liczba plemników nie spada z powrotem do poziomu azoospermii."
    },
    "cruise": {
      "label": "Długoterminowe utrzymanie (w oknie zakładania rodziny)",
      "timing": "Co 6 miesięcy",
      "markers": "Pełny panel HPG + analiza nasienia.",
      "purpose": "Długoterminowe monitorowanie efektów wielo-letniego protokołu monoterapii HCG (bez HMG) w oknie płodności."
    }
  },
  "anecdote": null
};
