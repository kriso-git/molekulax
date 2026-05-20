// HMG (Menopur / Pergonal) — Ludzka Gonadotropina Menopauzalna, mieszanina
// FSH+LH 75/75 IU ekstrahowana z moczu. Framing PCT po AAS: pełny restart
// osi HPG (też wsparcie Sertoli FSH). Cross-frame: w przyszłej bibliotece
// peptydów `hmg-peptid`. Źródła: EMA Menopur SPC (Ferring 2002), historyczny
// Pergonal (Lunenfeld 1962), Liu 2009 PMID 19435775, Kohn 2017 PMID 28935145.

export default {
  "id": "hmg-perf",
  "name": "HMG (Menopur / Pergonal)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Ludzka Gonadotropina Menopauzalna — mieszanina FSH + LH 75/75 IU ekstrahowana z moczu. W PCT po AAS: pełny restart osi HPG (wsparcie FSH dla Sertoli, nie tylko LH dla Leydiga jak w HCG). Pergonal wycofany 2005, Menopur nowoczesna alternatywa. Cross-frame: w przyszłej bibliotece peptydów `hmg-peptid`.",
  "description": "HMG (Ludzka Gonadotropina Menopauzalna) to mieszanina glikoprotein oczyszczona z moczu kobiet pomenopauzalnych, zawierająca około 75 IU follikulotropiny (FSH) + 75 IU lutropiny (LH) na standardową ampułkę (stosunek 1:1). Historia kliniczna HMG dzieli się na dwie ery: (1) **Era Pergonalu** (1962-2005) — pod kierownictwem Bruno Lunenfelda, izraelskiego endokrynologa, mocz zbierany od mniszek menopauzalnych Watykańskiego zakonu katolickiego (pierwsze kliniczne użycie z 1962 sięga sióstr Carmeli i Donatelli), produkowany przez Serono Pharmacia, wskazanie niepłodności owulacyjnej. (2) **Era Menopuru** (zatwierdzenie EMA 2002 → dziś) — produkt Ferring wyższej czystości ekstrahowany z moczu, zastępujący Pergonal z powodu redukcji ryzyka vCJD. **Kontekst PCT po AAS**: unikalna wartość HMG polega na tym, że w przeciwieństwie do HCG dostarcza OBIE gonadotropiny (FSH + LH) → pełny restart osi HPG (nie tylko stymulus Leydiga jak HCG, ale również stymulus FSH komórek Sertoli). Wskazanie u użytkowników AAS: po długim cyklu/silnej supresji, gdy własny przysadkowy FSH jeszcze nie wydziela wystarczająco dużego wsparcia Sertoli → przyspieszenie odbudowy spermatogenezy. **Uwaga cross-frame**: to wpis z sufiksem `-perf`; przyszły batch biblioteki peptydów doda wpis `hmg-peptid` (framing fertility-clinic — protokół IVF male-factor, kontekst indukcji owulacji IUI/COS). WADA-zakazany cały rok (S2 Hormony Peptydowe).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Mieszanina FSH (75 IU) + LH (75 IU) ekstrahowana z moczu — podwójna stymulacja receptorów Sertoli-FSHR + Leydig-LHCGR"},
    {"label": "Dawkowanie (PCT)", "value": "75-150 IU EOD × 2-4 tygodnie"},
    {"label": "Okres półtrwania", "value": "FSH ~24-36 h / LH ~20 h (rozpad komponentów mieszany)"},
    {"label": "Początek działania", "value": "Wzrost Test 5-10 dni, restart spermatogenezy 4-8 tygodni"},
    {"label": "Status prawny", "value": "EMA Rx Menopur (Ferring 2002), USA FDA Rx Menopur (2005), WADA S2 (zakazany)"}
  ],
  "mechanism": "HMG to mieszanina glikoprotein o dwóch składnikach: (1) FSH (follikulotropina) — agonista receptora FSHR komórek Sertoli → stymulus spermatogenezy + produkcja inhibiny B; (2) LH (lutropina) — agonista receptora LHCGR komórek Leydiga → testikularna produkcja testosteronu. Biologiczny t1/2 obu składników różni się: FSH ~24-36 h, LH ~20 h. W kontekście PCT po AAS przewaga HMG nad HCG: stymulus FSH dla Sertoli jest niezbędny do pełnej odbudowy spermatogenezy, szczególnie po długim cyklu/silnej supresji, gdy własny przysadkowy FSH jeszcze nie wydziela wystarczająco. HMG NIE zastępuje HCG (krótki efekt LH może nadal wymagać obu), ale jest komplementarnym elementem protokołu.",
  "legalStatus": "USA: FDA Rx Menopur (zatwierdzenie Ferring 2005). UE: EMA Rx Menopur (zatwierdzenie Ferring 2002). HU + PL: zarejestrowane (Menopur Rx). Pergonal wycofany globalnie ~2005 (vCJD ryzyko teoretyczne + redukcja źródła moczu). WADA: S2.2 Hormony Peptydowe (zakazane w zawodach + poza zawodami).",
  "onsetTime": "Wzrost Test 5-10 dni, restart spermatogenezy 4-8 tygodni",
  "halfLife": "FSH ~24-36 h, LH ~20 h (mieszane)",
  "halfLifeActive": "Efekt kliniczny 3-5 dni (komponent mieszany)",
  "interactionsWith": ["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"],
  "aromatization": "Pośrednia: testikularny stymulus FSH+LH → endogenny Test → wtórny peryferyjny E2 (podobna wielkość jak HCG, nieco niższa bo aktywność Sertoli dominuje vs Leydig). W kontekście PCT po AAS monitoring rebound E2 potrzebny przy wyższych dawkach HMG (>150 IU EOD).",
  "hepatotoxicity": "Brak stresu wątrobowego — iniekcja oparta na białku SC lub IM.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS; pośredni stymulus FSH + LH)",
  "bindingAffinity": "FSH-FSHR Kd ~0,1 nM (Sertoli), LH-LHCGR Kd ~0,1 nM (Leydig). Mieszany stymulus receptora aktywuje obie komórki Sertoli + Leydig.",
  "detectionWindow": "WADA-akredytowany immunoassay urinary FSH + LH wykrywanie — 7-14 dni po protokole chronicznym, 3-5 dni po pojedynczym bolusie.",
  "benefits": [
    "Pełny restart osi HPG (FSH + LH razem, nie tylko LH Leydiga jak HCG)",
    "Przyspieszenie odbudowy spermatogenezy po długim cyklu/silnej supresji",
    "Odbudowa aktywności komórek Sertoli (produkcja inhibiny B)",
    "Zatwierdzony przez EMA + FDA, baza badań klinicznych",
    "Kompatybilny z HCG (przewaga LH + akcent FSH protokół dwuczęściowy)"
  ],
  "quickStart": [
    "Protokół PCT: 75-150 IU EOD × 2-4 tygodnie, iniekcja SC lub IM",
    "Rekonstytucja: woda bakteriostatyczna 1 mL/ampułka (75 IU FSH + 75 IU LH/mL koncentracja)",
    "Standalone vs kombinacja z HCG: jeśli celem odbudowa azoospermii → HMG dominuje; cel mid-cycle zachowanie jąder → HCG dominuje; cel full-axis → 4 tygodnie HCG blast potem 4 tygodnie HMG (sekwencyjnie)",
    "Przechowywanie: liofilizowana ampułka temperatura pokojowa; roztwór po rekonstytucji 2-8°C przez 30 dni",
    "Wycena: Menopur 75 IU fiolka ~€20-25 apteka UE, droższy niż Pregnyl",
    "Badania krwi: LH, FSH, Total Test, E2, inhibina B (marker Sertoli) baseline + 2 tygodnie + 4 tygodnie"
  ],
  "expectations": [
    {"label": "Tydzień 1", "body": "Wzrost Test zaczyna być mierzalny (stymulus Leydiga), poziomy FSH wracają (stymulus Sertoli zaczyna, inhibina B jeszcze niska)."},
    {"label": "Tygodnie 2-4", "body": "Stabilna odbudowa hormonalna, restart spermatogenezy zaczyna (4-8 tygodni do pełnej odbudowy). Wzrost inhibiny B mierzalny."},
    {"label": "Post-protokół", "body": "Odbudowa spermatogenezy kontynuuje (8-12 tygodni pełna). LH/FSH wraca do baseline. Analiza nasienia w 12 tygodni."}
  ],
  "quality": {
    "pure": [
      "Menopur 75 IU ampułka (Ferring) — jakość Rx farmaceutyczna (UE + USA)",
      "Repronex 75 IU (Ferring USA generic) — jakość farmaceutyczna",
      "Indyjski generic (Bharat Serums HMG) — jakość farmaceutyczna",
      "UGL HMG — HPLC + immunoassay-testowane źródło obowiązkowe (stosunek FSH/LH często niewłaściwy)",
      "Pergonal historycznie: NIE zalecany w nowoczesnym protokole (post-2005 expired stock + ryzyko teoretyczne vCJD)"
    ],
    "caution": [
      "Ryzyko vCJD: teoretyczne, brak udokumentowanego przypadku. Nowoczesny Menopur ultra-purified drastycznie redukuje ryzyko teoretyczne",
      "Ryzyko ciąży mnogiej (wskazanie kobiece tylko) — pacjent męski N/A",
      "Selektywność FSH vs selektywność HCG LH warto rozważyć w projektowaniu protokołu"
    ],
    "avoid": [
      "Wywiad guza jąder",
      "Inna-przyczynowa niepłodność w aktywnym kontekście male-fertility-clinic (Klinefelter, delecja chromosomu Y — HMG nieskuteczny)",
      "Nadwrażliwość na HMG lub substancję pomocniczą",
      "Mężczyzna przed pokwitaniem"
    ]
  },
  "interactions": [
    "Kombinacja z HCG: HCG (przewaga LH) + HMG (akcent FSH) synergistyczny stymulus full-axis, klasyczny 'HCG+HMG dual blast' protokół",
    "FSH-rec (Gonal-F) alternatywa: jeśli cel czystego FSH (stymulus Sertoli-only) → FSH-rec efektywniejszy kosztowo na jednostkę Sertoli (ALE droższy/dawkę)",
    "Bridge SERM (Nolvadex/Clomid): standardowy protokół PCT po HMG blast",
    "Mid-cycle AAS: kompatybilny (prewencja atrofii + zachowana funkcjonalność Sertoli)",
    "TRT: NIE łączony chronicznie (Leydig saturation tłumione przez egzogenny Test)"
  ],
  "studies": [
    {"title": "Gonadotropin therapy in male hypogonadotropic hypogonadism: comparison of growth hormone and gonadotropin treatments", "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.", "journal": "J Clin Endocrinol Metab. 2009;94(3):801-8.", "pmid": "19435775"},
    {"title": "Effects of human chorionic gonadotropin and human menopausal gonadotropin on intratesticular testosterone and spermatogenesis", "authors": "Kohn TP, Louis MR, Pickett SM, et al.", "journal": "Fertil Steril. 2017;108(4):589-595.", "pmid": "28935145"},
    {"title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone", "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.", "journal": "Eur J Endocrinol. 2002;147(5):617-24.", "pmid": "12444893"}
  ],
  "faq": [
    {"q": "HMG vs HCG — który kiedy?", "a": "HCG = mimik tylko LH (stymulus Leydiga), HMG = LH + FSH mieszany (stymulus Leydig + Sertoli). Drzewo decyzji klinicznych: (1) prewencja atrofii mid-cycle → HCG (tańsze, pojedynczy mechanizm wystarczający); (2) restart krótkiej osi PCT-blast → HCG; (3) odbudowa azoospermii po długim cyklu/blast-and-cruise → HMG (akcent FSH); (4) cel restartu full-axis → HCG blast + HMG sekwencyjny. Wiele protokołów klinicznych łączy oba."},
    {"q": "Menopur vs Pergonal — czy Pergonal nadal dostępny?", "a": "Pergonal wycofany globalnie między ~2005-2007. Klasyczne źródło Pergonalu (mocz pomenopauzalnych mniszek watykańskich) symbolicznie zamknęło erę. Nowoczesna alternatywa: Menopur (Ferring 2002 EMA, 2005 FDA), wyższej czystości produkt urinary-extracted z redukcją ryzyka teoretycznego vCJD. W ujęciu klinicznym Menopur ekwiwalentny lub lepszy niż Pergonal był."},
    {"q": "Czy ryzyko vCJD jest realne?", "a": "Teoretyczne, brak udokumentowanego przypadku. Klasyczne obawy: obecność białek prionowych w źródle urinarnym (kohorta kobiet pomenopauzalnych). Nowoczesna produkcja Menopuru ultra-purified (Ferring proprietary process) drastycznie redukuje ryzyko teoretyczne. W 2026 praktyka kliniczna uważa Menopur za bezpieczny; rekombinowany FSH-rec (Gonal-F) jest alternatywą jeśli użytkownik kategorycznie odrzuca źródło urinarne."},
    {"q": "Czy można łączyć z FSH-rec?", "a": "Tak, jeśli akcent Sertoli jest silny (odbudowa azoospermii). Jeden specjalizowany protokół: HMG (LH + FSH 75/75) + FSH-rec (dodatkowy stymulus Sertoli 75-150 IU). Drogi (~€800-1200/miesiąc), ALE uzasadniony w długoterminowej niepłodności. Przesada dla mainstream PCT — HMG-only lub HMG + HCG wystarczające."}
  ],
  "related": ["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 75, "medium": 112.5, "high": 150},
    "unit": "IU/dawkę (SC lub IM, częstość EOD)",
    "note": "Protokół PCT: 75-150 IU EOD × 2-4 tygodnie. Odbudowa azoospermii (po długim cyklu): 150 IU EOD × 4-12 tygodni połączone z protokołem HCG mid-cycle. SC wygodniejsza (tkanka brzucha lub uda, strzykawka 27-30G). NIE monoterapia chroniczna (>6 tygodni) — ryzyko skojarzonej downregulacji Leydig + Sertoli."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protokół",
      "timing": "Koniec cyklu AAS + 2 tygodnie (krótki ester) lub + 4-6 tygodni (długi ester)",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, Prolaktyna, inhibina B (baseline Sertoli), analiza nasienia (baseline jeśli cel płodności), ALT, AST.",
      "purpose": "Baseline do śledzenia Test + odbudowy spermatogenezy + aktywności Sertoli."
    },
    "midCycle": {
      "label": "Mid-protokół (tydzień 2)",
      "timing": "Start +2 tygodnie",
      "markers": "LH, FSH (wzrost FSH efekt specyficzny dla HMG), Test, E2, inhibina B (marker restartu Sertoli).",
      "purpose": "Potwierdzenie odbudowy aktywności Sertoli. Wzrost inhibiny B jest wskaźnikiem restartu spermatogenezy."
    },
    "postCycle": {
      "label": "Koniec protokołu + odbudowa",
      "timing": "Ostatnia dawka +2 tygodnie i +12 tygodni",
      "markers": "Total Test, LH, FSH, E2, inhibina B, analiza nasienia (12 tygodni).",
      "purpose": "Potwierdzenie odbudowy spermatogenezy. Jeśli liczba plemników < 5 mln/mL w 12 tygodni → rozważyć przedłużenie HMG +12 tygodni."
    },
    "cruise": {
      "label": "Długoterminowe (użytkownicy multi-cycle)",
      "timing": "Rocznie",
      "markers": "Pełny panel HPG + analiza nasienia + inhibina B.",
      "purpose": "Długoterminowy monitoring statusu spermatogenezy u użytkowników multi-cycle/blast-and-cruise."
    }
  }
}
