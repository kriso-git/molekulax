// HCG (Pregnyl / Ovidrel / Choragon) — Ludzka Gonadotropina Kosmówkowa,
// framing fertility-clinic (Rx). Wpis cross-frame: counterpart `hcg-perf`
// obejmuje tę samą cząsteczkę w framingu PCT po AAS. Źródła: FDA Pregnyl
// SmPC (Organon 1973), EMA Ovitrelle SPC, Crosnoe 2013 PMID 24327215,
// Hill 2018 PMID 29800218, Coviello 2005 PMID 15713725.

export default {
  "id": "hcg-peptid",
  "name": "HCG (Płodność)",
  "image": "/peptides/HCG.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Ludzka Gonadotropina Kosmówkowa — agonista receptora LH (glikoprotein). Indukcja płodności (męski hipogonadyzm + IVF), restauracja spermatogenezy, regeneracja HPTA w klinicznych ramach Rx.",
  "description": "HCG (Ludzka Gonadotropina Kosmówkowa) to 244-aminokwasowa heterodimerowa glikoproteina (podjednostka α + β), strukturalnie analog LH z ~80% identycznością sekwencji na podjednostce β. Endogenne źródło: łożyskowy syncytiotrophoblast ciąży. W kontekście kliniki płodności HCG działa jako **egzogenne zastępstwo LH**: agonista receptora LHCGR komórek Leydiga, który aktywuje biosyntezę testosteronu i odgrywa kluczową rolę w utrzymaniu intratestikularnego testosteronu (ITT) — stężenie ITT jest 50-100× wyższe niż testosteron w surowicy (~600-1200 nmol/L vs. ~10-30 nmol/L w surowicy), a to wysokie środowisko ITT jest absolutnym warunkiem spermatogenezy wspieranej przez komórki Sertoliego. Kliniczne źródła HCG: (1) wyekstrahowany z moczu (uHCG) — oczyszczony z moczu kobiet w ciąży (Pregnyl Organon 1973, Novarel Ferring, Choragon Ferring UE); (2) rekombinowany (rHCG / choriogonadotropina alfa) — ekspresja w komórkach CHO, wyższa czystość, niższa immunogenność (Ovidrel Serono/Merck USA, Ovitrelle EMA). **Wskazania kliniczne**: (a) męski hipogonadyzm hipogonadotropowy (HH, zespół Kallmanna, niewydolność przysadki) — przywrócenie testosteronu drogą komórek Leydiga; (b) indukcja spermatogenezy u pacjentów z HH (monoterapia HCG często jest niewystarczająca; wymagane jest współpodanie HMG lub rFSH dla pełnej inicjacji spermatogenezy); (c) kliniczny protokół regeneracji HPTA po supresji endogennego testosteronu (idiopatyczny wtórny hipogonadyzm, supresja HPTA wywołana kortykosteroidami lub opioidami); (d) czynnik męski w IVF — oligospermia / azoospermia leczone kombinowanym protokołem gonadotropin. **Uwaga cross-frame**: to jest wpis `hcg-peptid` — framing fertility-clinic Rx. Counterpart `hcg-perf` (biblioteka performance) obejmuje tę samą cząsteczkę w kontekście mostu PCT po AAS (prewencja atrofii, narracja dopingowa). IDENTYCZNA cząsteczka, inna narracja: pacjent/użytkownik otrzymuje tę samą fiolkę Pregnyl/Ovitrelle — tylko z innym celem i innym ramowaniem medycznym.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista receptora LHCGR (komórki Leydiga) → wzrost ITT → spermatogeneza wspierana przez Sertoliego"
    },
    {
      "label": "Dawka kliniczna (HH)",
      "value": "1500-2500 IU SC/IM 2-3x/tydzień × 6-24 miesiące"
    },
    {
      "label": "Dawka regeneracji HPTA",
      "value": "500-1500 IU SC 2-3x/tydzień × 4-6 tygodni, potem przejście na SERM"
    },
    {
      "label": "Okres półtrwania",
      "value": "uHCG ~24-36 h; rHCG (Ovidrel/Ovitrelle) ~38 h"
    },
    {
      "label": "Początek działania",
      "value": "Ostry wzrost Test 24-48 h; regeneracja spermatogenezy 3-6 miesięcy"
    },
    {
      "label": "Przechowywanie",
      "value": "Fiolka liofilizowana w temp. pokojowej; roztwór po rekonstytucji 2-8°C maks. 30 dni"
    }
  ],
  "mechanism": "HCG to 244-aminokwasowa heterodimerowa glikoproteina: podjednostka α (wspólna z LH/FSH/TSH) + podjednostka β (specyficzna dla HCG, ~80% identyczność LH-β + dodatkowy C-końcowy ~24-aminokwasowy ogon, CTP). Ogon CTP nadaje HCG długi t1/2 (~24-38 h) w porównaniu z okresem półtrwania LH ~30 minut. Wiązanie z receptorem: agonista receptora LHCGR komórek Leydiga (LH / chorionic gonadotropin) → ścieżka Gs-cAMP-PKA → upregulacja enzymów steroidogennych (StAR, CYP11A1, CYP17A1, 3β-HSD) → cholesterol → pregnenolon → testosteron. **Kluczowy wgląd fertility-clinic**: stymulus HCG podnosi stężenie intratestikularnego testosteronu (ITT), które jest 50-100× wyższe niż testosteron w surowicy (~600-1200 nmol/L vs. ~10-30 nmol/L w surowicy). To wysokie środowisko ITT jest krytyczne dla dojrzewania komórek Sertoliego i nabłonka rozrodczego (spermatogonia → spermatocyt → spermatyda → plemnik). Pełna indukcja spermatogenezy wymaga jednak także sygnału FSH (aktywacja komórek Sertoliego), dlatego u pacjentów z HH standardem są kombinacje HCG + HMG lub HCG + rFSH.",
  "dosingInfo": "**Męski hipogonadyzm hipogonadotropowy (HH) Rx**: 1500-2500 IU SC lub IM 2-3x/tydzień × 6-24 miesiące. Cel: testosteron w surowicy 400-700 ng/dL + koncentracja plemników ≥15 milionów/mL. Miareczkowanie dawki podtrzymującej na podstawie badań krwi. — **Indukcja spermatogenezy (monoterapia HCG niewystarczająca)**: HCG 1500-2500 IU 2-3x/tydzień + HMG (Menopur) 75-150 IU 3x/tydzień LUB rFSH (Gonal-F, Puregon) 150 IU 3x/tydzień × 6-24 miesiące. Pełny cykl spermatogenezy trwa 72-74 dni, więc wymagane jest minimum 3-6 miesięcy dla pierwszych mierzalnych wyników. — **Kliniczna regeneracja HPTA Rx (NIE PCT po AAS)**: 500-1500 IU SC 2-3x/tydzień × 4-6 tygodni dla wtórnego hipogonadyzmu lub supresji HPTA wywołanej kortykosteroidami/opioidami, następnie przejście na SERM (Clomid 25-50 mg/dzień × 4 tygodnie lub Tamoxifen 20 mg/dzień × 4 tygodnie) dla pełnego restartu osi. — **Czynnik męski w IVF**: kombinowany protokół gonadotropinowy HCG + HMG, indywidualizowane dawkowanie pod nadzorem endokrynologa rozrodu. — **Pediatryczny kryptorchizm**: oddzielny protokół pediatryczny (1000-1500 IU 2x/tydzień × 4-5 tygodni), wyłącznie ze wskazaniem pediatrycznego endokrynologa.",
  "studies": [
    {
      "title": "Use of human chorionic gonadotropin in men",
      "authors": "Crosnoe LE, Grober E, Ohl D, Kim ED.",
      "journal": "Transl Androl Urol. 2013;2(3):195-202.",
      "pmid": "24327215"
    },
    {
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "Int J Impot Res. 2018;30(6):262-269.",
      "pmid": "29800218"
    },
    {
      "title": "Intratesticular testosterone concentration in normospermic and infertile men",
      "authors": "Coviello AD, Matsumoto AM, Bremner WJ, et al.",
      "journal": "J Clin Endocrinol Metab. 2005;90(5):2595-2602.",
      "pmid": "15713725"
    },
    {
      "title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone",
      "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.",
      "journal": "Eur J Endocrinol. 2002;147(5):617-624.",
      "pmid": "12444893"
    }
  ],
  "legalStatus": "**HU**: Pregnyl 1500/5000 IU (Organon/Merck) + Choragon 5000 IU (Ferring) + Ovitrelle 250 µg (Merck Serono) — zarejestrowane, Rx, ze wskazaniem specjalisty androloga / endokrynologa rozrodu. **UE (EMA)**: Pregnyl, Choragon, Ovitrelle — Rx, ze wskazaniami płodności (męski hipogonadyzm, anowulacja, IVF). **USA (FDA)**: Pregnyl (Organon/Merck), Novarel (Ferring), Ovidrel (Serono) — Rx, wskazania obejmują indukcję owulacji u kobiet, męski hipogonadyzm, kryptorchizm przedpokwitaniowy. **PL**: Pregnyl, Choragon, Ovitrelle — zarejestrowane Rx (refundacja NFZ częściowo dostępna dla wskazań płodności). **WADA**: S2.1 Hormony Peptydowe — zakazany w zawodach + poza zawodami dla wszystkich męskich sportowców cały rok. Pacjenci z problemami płodności uprawiający sport wyczynowy potrzebują Therapeutic Use Exemption (TUE).",
  "onsetTime": "Ostry wzrost Test 24-48 h; regeneracja spermatogenezy 3-6 miesięcy",
  "halfLife": "uHCG ~24-36 h; rHCG ~38 h",
  "interactionsWith": [
    "hmg-peptid",
    "fsh-rec-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "wadaStatus": "banned",
  "related": [
    "hmg-peptid",
    "fsh-rec-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "faq": [
    {
      "q": "Jaka jest różnica między wpisami `hcg-peptid` a `hcg-perf`?",
      "a": "Identyczna cząsteczka, inny framing. **Oba wpisy obejmują ten sam HCG (Pregnyl / Ovitrelle / Choragon)** — identyczna struktura chemiczna (244-AA heterodimerowa glikoproteina), identyczna farmakologia (agonista LHCGR), identyczna droga podania (iniekcja SC lub IM). RÓŻNICA jest czysto narracyjna: **`hcg-peptid`** (ten wpis) — framing fertility-clinic Rx: męski hipogonadyzm hipogonadotropowy, indukcja spermatogenezy dla czynnika męskiego IVF, kliniczny protokół regeneracji HPTA (hipogonadyzm wywołany kortykosteroidami lub opioidami). **`hcg-perf`** — kontekst mostu PCT po AAS: prewencja atrofii jąder mid-cycle, post-cycle restart HPTA z bypassem Leydiga, narracja dopingowa. Pacjent otrzymuje tę samą fiolkę Pregnylu w aptece — tylko z innym kodem diagnostycznym i innym zamierzonym wynikiem."
    },
    {
      "q": "Ile czasu zajmuje regeneracja płodności?",
      "a": "Pełny cykl spermatogenezy trwa 72-74 dni (dojrzewanie komórek zarodkowych od spermatogonii do dojrzałego plemnika + tranzyt epididymalny). Dlatego po rozpoczęciu terapii HCG (lub kombinacji HCG + HMG/rFSH) **minimum 3-6 miesięcy** jest wymagane do zmierzenia pierwszego wzrostu liczby plemników. **Pełna regeneracja** (koncentracja plemników ≥15 milionów/mL, próg normospermii WHO 2010) może trwać **6-24 miesiące**, w zależności od ciężkości wyjściowej (azoospermia vs. ciężka oligospermia vs. łagodna oligospermia) i wskazania (wrodzony HH jest często wolniejszy niż nabyta supresja HPTA wywołana sterydami). Monitorowanie: kwartalny spermiogram (protokół WHO), kwartalny testosteron w surowicy + LH/FSH, opcjonalnie roczne USG jąder."
    },
    {
      "q": "Dlaczego HCG jest zakazany przez WADA nawet ze wskazaniem Rx płodności?",
      "a": "Kategoria WADA S2.1 Hormony Peptydowe **zakazuje HCG dla wszystkich męskich sportowców cały rok**, ponieważ jako egzogenny mimik LH podnosi endogenną syntezę testosteronu męskiego — to daje efekt poprawiający wydajność niezależnie od tego, czy wskazanie jest płodnościowe czy zamierzony doping. Sportowiec wyczynowy z chorobą płodności (HH, czynnik męski IVF) musi złożyć wniosek o **Therapeutic Use Exemption (TUE)** w swojej krajowej organizacji antydopingowej (USA: USADA; UK: UKAD; HU: HUNADO; PL: POLADA), co wymaga: diagnozy specjalisty andrologii / endokrynologii rozrodu, dowodów laboratoryjnych (LH/FSH/Test/koncentracja plemników baseline) i planu leczenia. Po zatwierdzeniu TUE sportowiec może legalnie używać HCG. U kobiet sportowców HCG jest zakazany tylko w zawodach (przypis S2.1), co jest istotne w kontekście protokołów IVF."
    },
    {
      "q": "Czy monoterapia HCG jest wystarczająca do indukcji spermatogenezy?",
      "a": "Zazwyczaj **nie**. Pełna spermatogeneza wymaga dwóch sygnałów: (1) HCG/LH → komórka Leydiga → ITT (intratestikularny testosteron) — sam HCG to pokrywa; (2) **FSH → komórka Sertoliego** → wsparcie komórek zarodkowych (białko wiążące androgeny, inhibina B, mikrośrodowisko kanalikowe). Monoterapia HCG wystarcza tylko jeśli endogenna sekrecja FSH jest zachowana (np. łagodny / częściowy HH, regeneracja po AAS). Dla **pełnego HH** (zespół Kallmanna, niewydolność przysadki, po operacji przysadki) wymagana jest kombinacja HCG + HMG (ludzka gonadotropina menopauzalna, zawierająca FSH+LH) lub HCG + rFSH (rekombinowany FSH: Gonal-F, Puregon) przez 6-24 miesięcy. Badanie Depenbusch 2002 (PMID 12444893) pokazuje, że w niektórych podtypach HH monoterapia HCG może długoterminowo podtrzymywać spermatogenezę (zwłaszcza po pre-stymulacji FSH), ale standardem klinicznym jest protokół kombinowany."
    }
  ],
  "anecdote": null
}
