// HCG (Pregnyl / Novarel / Choragon) — Ludzka Gonadotropina Kosmówkowa,
// framing PCT po AAS. Wpis cross-frame: przyszły batch biblioteki peptydów
// doda counterpart `hcg-peptid` z framingiem fertility-clinic. Źródła: FDA
// Pregnyl SmPC (Organon 1973), EMA Choragon SPC, Liu 2002 PMID 12424222,
// Coviello 2005 PMID 16204261, Hsieh 2013 PMID 23316916.

export default {
  "id": "hcg-perf",
  "name": "HCG (Pregnyl / Novarel / Choragon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Ludzka Gonadotropina Kosmówkowa — analog strukturalny LH, stymulator receptora LHCGR komórek Leydiga. Pomost PCT po AAS przeciw atrofii jąder i do restartu HPTA. Cross-frame: w przyszłej bibliotece peptydów dojdzie `hcg-peptid` z framingiem fertility-clinic.",
  "description": "HCG (Ludzka Gonadotropina Kosmówkowa) to glikoproteina 244-aminokwasowa (podjednostka α + β), strukturalnie analog LH z ~80% identycznością sekwencji na podjednostce β. Endogenne źródło: łożyskowy syncytiotrophoblast ciąży → krew + mocz (szczyt w 8-12 tygodniu ciąży). Kliniczne źródła HCG: (1) wyekstrahowany z moczu (uHCG) — oczyszczony z moczu kobiet w ciąży (Pregnyl Organon 1973, Novarel Ferring 1973, Choragon Ferring UE); (2) rekombinowany (rHCG / choriogonadotropina alfa) — Serono Ovidrel/Ovitrelle ekspresja CHO, wyższa czystość. Mechanizm: agonizm receptora LHCGR komórek Leydiga → egzogenna mimikra LH → testikularna produkcja testosteronu. **Kontekst PCT po AAS**: HCG mostuje okno supresji LH, kiedy własna przysadka jeszcze nie wydziela wystarczającej ilości LH. Dwa główne protokoły użycia: **mid-cycle HCG** (250-500 IU 2-3x/tydzień przez cały cykl AAS — zapobieganie atrofii jąder); **PCT-blast HCG** (1500-2500 IU EOD × 10-14 dni po ostatniej iniekcji AAS, potem przejście na SERM PCT). **Uwaga cross-frame**: to jest wpis z sufiksem `-perf`; przyszły batch biblioteki peptydów doda wpis `hcg-peptid` (framing fertility-clinic — IVF czynnik męski + kontekst Rx wtórnego hipogonadyzmu, IDENTYCZNA cząsteczka, inna narracja). WADA-zakazany cały rok (S2 Hormony Peptydowe).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista receptora LHCGR komórek Leydiga (analog strukturalny LH, ~80% identyczność podjednostki β)"},
    {"label": "Dawkowanie (PCT-blast)", "value": "1500-2500 IU EOD × 10-14 dni"},
    {"label": "Dawkowanie (mid-cycle)", "value": "250-500 IU 2-3x/tydzień"},
    {"label": "Okres półtrwania", "value": "uHCG: 24-36 h / rHCG (Ovidrel): 30-50 h"},
    {"label": "Status prawny", "value": "FDA + EMA Rx (wskazania płodności), WADA S2 (zakazany w+poza zawodami)"}
  ],
  "mechanism": "HCG to 244-aminokwasowa heterodimerowa glikoproteina: podjednostka α (wspólna z LH, FSH, TSH) + podjednostka β (specyficzna dla HCG, ~80% identyczność sekwencji LH-β). Koniec C podjednostki β ma dodatkowy ~24-aminokwasowy ogon (CTP), który nadaje HCG dłuższy t1/2 (vs LH ~30 min). Wiązanie z receptorem: agonista receptora LHCGR komórek Leydiga (lutealny / chorionic gonadotropin) → ścieżka cAMP-PKA → aktywacja steroidogenezy (cholesterol → pregnenolon → progesteron → 17α-OH-progesteron → testosteron). W kontekście PCT po AAS kwestia: oś HPTA jest tłumiona od góry (przysadkowe LH), ale funkcjonalność komórek Leydiga jest zachowana na protokole HCG mid-cycle → szybsza odbudowa po cyklu.",
  "legalStatus": "USA: FDA Rx Pregnyl (Organon 1973, obecnie Merck), Novarel (Ferring 1973), Ovidrel (Serono rekombinowany 2000). Wskazania: indukcja owulacji u kobiet, męski hipogonadyzm, kryptorchizm. UE: EMA Rx (Pregnyl, Choragon, Ovitrelle). HU + PL: zarejestrowane (Pregnyl, Choragon Rx). WADA: S2.2 Hormony Peptydowe (zakazane w zawodach + poza zawodami dla wszystkich męskich zawodników cały rok).",
  "onsetTime": "Stymulacja Leydiga 24-48 h, widoczny wzrost Test 3-7 dni po początkowej dawce",
  "halfLife": "uHCG (Pregnyl/Choragon) ~24-36 h; rHCG (Ovidrel/Ovitrelle) ~30-50 h",
  "halfLifeActive": "uHCG ~24-36 h; efekt kliniczny 5-7 dni (po pojedynczej iniekcji)",
  "interactionsWith": ["nolvadex", "clomid", "enclomiphene", "anastrozol", "letrozol", "testosterone-info"],
  "aromatization": "Pośrednia: HCG → Leydig Test → peryferyjna konwersja E2 przez testikularną + adipocytarną aromatazę CYP19. Wielkość umiarkowana-do-wysokiej (wzrost Test większy niż na TRT), przy wyższych dawkach HCG (>2000 IU EOD) współpodanie AI (Anastrozol 0,25-0,5 mg EOD) często wskazane u użytkowników wrażliwych na ginekomastię. Na protokole PCT-blast obserwacja rebound E2 obowiązkowa.",
  "hepatotoxicity": "Brak stresu wątrobowego — iniekcja podskórna (SC) lub domięśniowa (IM) opartego na białku, NIE doustnie, NIE 17α-alkilowany. Wzrost enzymów wątrobowych nie udokumentowany w bazie badań.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS; pośrednia stymulacja testikularnego Test)",
  "bindingAffinity": "Powinowactwo do receptora LHCGR Kd ~0,1 nM. Unikalna własność: z powodu ogona CTP HCG dysocjuje od receptora wolniej niż LH → przedłużona stymulacja na cząsteczkę.",
  "detectionWindow": "WADA-akredytowany immunoassay (urinary β-HCG) wykrywanie: 5-7 dni po pojedynczym bolusie w moczu; 10-14 dni po protokole chronicznym. W kontekście ciąży kobiecej HCG wykrywalny gdziekolwiek (idiopatyczny false-positive rzadki, tylko guz komórek zarodkowych).",
  "benefits": [
    "Zapobieganie atrofii jąder mid-cycle (250-500 IU 2-3x/tydzień, zachowanie małej wielkości jąder pod koniec cyklu AAS)",
    "Restart HPTA PCT-blast z bypassem Leydiga (1500-2500 IU EOD × 10-14 dni, potem przejście na SERM PCT)",
    "Szybsza odbudowa Test po cyklu (zachowana funkcjonalność Leydiga)",
    "Szeroka baza badań klinicznych (60+ lat w kontekście fertility-clinic)",
    "Wzrost endogennego poziomu Test + zachowanie intratestikularnego testosteronu (ITT)",
    "Tani (Pregnyl 5000 IU fiolka ~€20 apteka UE)"
  ],
  "quickStart": [
    "Protokół mid-cycle: 250-500 IU 2-3x/tydzień (np. pon + czw + sob) przez cały cykl AAS; u użytkowników wrażliwych na ginekomastię Anastrozol 0,25 mg EOD współpodanie",
    "Protokół PCT-blast: 10-14 dni po ostatniej iniekcji cyklu, 1500-2500 IU EOD × 10-14 dni; potem SERM PCT (Nolvadex 40/20/20/20 mg/dzień)",
    "Rekonstytucja: woda bakteriostatyczna 1-2 mL/fiolka (5000 IU fiolka → 5000 IU/mL lub 2500 IU/mL koncentracja); iniekcja SC lub IM (SC wygodniejsza)",
    "Przechowywanie: fiolka liofilizowana temperatura pokojowa (długoterminowe przechowywanie 2-8°C); roztwór po rekonstytucji 2-8°C przez 30 dni",
    "Badania krwi baseline pre-protokół + protokół tydzień 2 (Test + E2 + LH/FSH); post-protokół +2 tygodnie potwierdzenie",
    "Śledzenie ITT pośrednie: stosunek Test/E2 lub objętość jąder (palpacja lub USG)"
  ],
  "expectations": [
    {"label": "Mid-cycle tydzień 1", "body": "Pełnia jąder wraca (widocznie mierzalna jeśli atrofia już się rozwinęła). Subiektywnie: 'nieco lepsze' wrażenie."},
    {"label": "Mid-cycle chronicznie", "body": "Objętość jąder stabilizuje się na baseline (NIE pełna odbudowa, tylko prewencja). E2 może wzrosnąć → współpodanie AI może być potrzebne."},
    {"label": "PCT-blast tygodnie 1-2", "body": "Mierzalny wzrost Test (3-7 dni), endogenna funkcjonalność Leydiga aktywuje się. Monitor rebound E2."},
    {"label": "Koniec PCT-blast + przejście na SERM", "body": "HCG stop, start PCT z SERM (Nolvadex). Odbudowa HPTA 4-6 tygodni."}
  ],
  "quality": {
    "pure": [
      "Pregnyl 5000 IU fiolka (Organon, obecnie Merck) — jakość Rx farmaceutyczna (UE + USA dostępne)",
      "Novarel 10000 IU fiolka (Ferring) — jakość Rx farmaceutyczna (USA)",
      "Choragon 5000 IU fiolka (Ferring UE) — jakość Rx farmaceutyczna",
      "Ovidrel/Ovitrelle 250 µg (rekombinowany HCG, Serono) — wyższa czystość, droższy, strzykawka napełniona",
      "UGL liquid HCG — HPLC + immunoassay-testowane źródło obowiązkowe; często słabo skoncentrowany (lub przerwany łańcuch chłodniczy, aktywność kliniczna spada)"
    ],
    "caution": [
      "Długoterminowa wysoka dawka (>2500 IU EOD chronicznie) → ryzyko downregulacji receptora Leydiga (>4 tygodnie ciągle przeciwwskazane)",
      "Silny rebound E2: użytkownicy wrażliwi na ginekomastię potrzebują współpodania AI (Anastrozol 0,25-0,5 mg EOD)",
      "Wywiad guza komórek zarodkowych (testikularnego) bezwzględne przeciwwskazanie (HCG jest markerem nowotworowym)",
      "Po rekonstytucji przechowywać w 2-8°C przez 30 dni (sterylna praktyka kliniczna obowiązkowa)",
      "Mężczyzna przed pokwitaniem → PRZECIWWSKAZANE (przedwczesne dojrzewanie płciowe)"
    ],
    "avoid": [
      "Aktywny guz jąder / przebyty rak jąder",
      "Wywiad raka prostaty lub wysokie ryzyko prostaty",
      "Nadwrażliwość na HCG lub substancję pomocniczą",
      "Długoterminowa monoterapia chroniczna (>4 tygodnie) → downregulacja Leydiga",
      "Mężczyzna przed pokwitaniem"
    ]
  },
  "interactions": [
    "Współpodanie AI (Anastrozol 0,25-0,5 mg EOD): łagodzenie rebound E2 — zalecane u użytkowników wrażliwych na ginekomastię",
    "Bridge SERM (Nolvadex 20-40 mg/dzień, Clomid 25-50 mg/dzień): protokół PCT, startowany po blast HCG",
    "Mid-cycle współpodanie AAS: kompatybilny ze wszystkimi klasycznymi AAS (Test/Tren/Mast/Dianabol/Anavar — cel prewencji atrofii)",
    "Zastępcza testosteronu (TRT): współpodanie niestandardowe (ratunek HCG tylko w przypadku nieprawidłowej odbudowy)",
    "Współpodanie FSH-rec (Gonal-F): cel odbudowy azoospermii, pełny stymulus osi HPG",
    "Inne peptydy (CJC-1295, Ipamorelin, BPC-157): brak interakcji, kompatybilny"
  ],
  "studies": [
    {"title": "The effects of human chorionic gonadotropin on intratesticular testosterone production in men with hypogonadotropic hypogonadism", "authors": "Liu PY, Wishart SM, Handelsman DJ.", "journal": "J Clin Endocrinol Metab. 2002;87(7):3125-35.", "pmid": "12424222"},
    {"title": "Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression", "authors": "Coviello AD, Matsumoto AM, Bremner WJ, et al.", "journal": "J Clin Endocrinol Metab. 2005;90(5):2595-602.", "pmid": "16204261"},
    {"title": "Concomitant intramuscular human chorionic gonadotropin preserves spermatogenesis in men undergoing testosterone replacement therapy", "authors": "Hsieh TC, Pastuszak AW, Hwang K, Lipshultz LI.", "journal": "J Urol. 2013;189(2):647-50.", "pmid": "23316916"},
    {"title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone", "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.", "journal": "Eur J Endocrinol. 2002;147(5):617-24.", "pmid": "12444893"}
  ],
  "faq": [
    {"q": "Mid-cycle HCG vs PCT-blast HCG — co robi każdy?", "a": "Dwa odrębne protokoły z różnymi celami. **Mid-cycle**: 250-500 IU 2-3x/tydzień przez cały cykl AAS — PREWENCJA ATROFII jąder (zachowanie tkanki jąder, szybsza odbudowa po cyklu). **PCT-blast**: 1500-2500 IU EOD × 10-14 dni w pierwszych 2 tygodniach po końcu cyklu — RESTART HPTA z bypassem Leydiga (mostuje własne okno supresji przysadkowego LH). Oba protokoły są następnie wspierane przez SERM PCT (Nolvadex) dla pełnej odbudowy HPTA."},
    {"q": "Czy HCG aromatyzuje? Ile?", "a": "Pośrednia aromatyzacja: HCG → Leydig Test → peryferyjna konwersja E2. Wielkość umiarkowana-do-wysokiej (wzrost Test większy niż na TRT; HCG indukuje zarówno testikularną jak i peryferyjną aromatyzację). Typowy wzrost E2 +50-100% od baseline, wybuch ginekomastii możliwy u użytkowników wrażliwych. Łagodzenie: współpodanie Anastrozol 0,25-0,5 mg EOD, E2 miareczkowany do celu 20-30 pg/mL. Wysoka dawka PCT-blast (>2000 IU EOD) szczególnie wymaga obserwacji E2."},
    {"q": "Rekonstytucja fiolki liofilizowanej?", "a": "Standardowy protokół: 1 mL lub 2 mL wody bakteriostatycznej (BAC, sterylna woda zakonserwowana benzylo-alkoholem) do fiolki 5000 IU. 1 mL → koncentracja 5000 IU/mL; 2 mL → 2500 IU/mL. Sterylna praktyka: czyszczenie alkoholowe, NIE wstrząsać (denaturacja), delikatne wirowanie. Iniekcja SC lub IM (SC wygodniejsza, w tkankę brzucha lub uda, strzykawka insulinowa 27-30G). Przechowywać roztwór po rekonstytucji w 2-8°C przez 30 dni (potem aktywność kliniczna spada)."},
    {"q": "Pregnyl vs Ovidrel vs UGL — który wybrać?", "a": "**Pregnyl/Choragon (urinary)**: złoty standard, dostępny w aptekach UE (~€20/5000 IU), 60+ lat literatury klinicznej. **Ovidrel/Ovitrelle (rekombinowany)**: wyższa czystość (strzykawka napełniona 250 µg), droższy (~€40-60/dawkę), dostępny w USA. **UGL**: HPLC + immunoassay-testowane źródło OBOWIĄZKOWE — HCG UGL często słabo skoncentrowany lub przerwany łańcuch chłodniczy (aktywność spada). Klinicznie: pharma > UGL >> źródło niepewne."},
    {"q": "Uwaga cross-frame: ten sam HCG jak w protokołach fertility-clinic?", "a": "Tak — identyczna cząsteczka. Wpisy `hcg-perf` i przyszły `hcg-peptid` mają ~80% pokrycia treści (ta sama struktura chemiczna, farmakologia, droga podania). RÓŻNICA to framing: `hcg-perf` w kontekście pomostu PCT po AAS (peryferyjny stymulus Test, prewencja atrofii, doping), podczas gdy `hcg-peptid` (przyjdzie z przyszłym batchem biblioteki peptydów) z framingiem fertility-clinic (IVF czynnik męski + wtórny hipogonadyzm Rx, kliniczny kontekst Rx). Użytkownik może kupić tę samą fiolkę Pregnylu — tylko przeczyta przez inną narrację."}
  ],
  "related": ["hmg-perf", "fsh-rec-perf", "nolvadex", "clomid", "testosterone-info", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 500, "medium": 1500, "high": 2500},
    "unit": "IU/dawkę (SC lub IM, częstość dawki specyficzna protokołowi)",
    "note": "**Mid-cycle**: 250-500 IU 2-3x/tydzień × długość cyklu (prewencja atrofii). **PCT-blast**: 1500-2500 IU EOD × 10-14 dni (pomost restartu HPTA). **Ratunek post-PCT**: 1500 IU 2x/tydzień × 4 tygodnie (jeśli LH/FSH NIE odbudowuje na samym SERM). Długoterminowa monoterapia chroniczna (>4 tygodnie) PRZECIWWSKAZANA (ryzyko downregulacji Leydiga)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protokół",
      "timing": "Przed startem cyklu AAS lub przed PCT-blast",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolaktyna, objętość jąder (palpacja lub USG), panel lipidowy, ALT, AST.",
      "purpose": "Baseline do śledzenia trajektorii Test + objętości jąder + ITT (poprzez stosunek Test/E2 pośrednio)."
    },
    "midCycle": {
      "label": "Mid-cycle / PCT-blast",
      "timing": "Tydzień 2 protokołu",
      "markers": "Total Test, E2 (obserwacja wybuchu ginekomastii, jeśli >40 pg/mL → dodaj AI), Prolaktyna (na cyklach Tren), palpacja jąder.",
      "purpose": "Monitor rebound E2 + potwierdzenie zachowania objętości jąder. ITT pośrednio: stosunek Test/E2 stabilnie wysoki → zachowanie."
    },
    "postCycle": {
      "label": "Koniec PCT-blast + przejście na SERM",
      "timing": "Kiedy HCG zatrzymany + Nolvadex/Clomid startuje",
      "markers": "Total Test, LH, FSH, E2, SHBG.",
      "purpose": "Efekt HCG słabnie; początek endogennego restartu HPTA mierzalny. Jeśli LH/FSH NIE wzrasta w 4 tygodnie na samym SERM → ratunek HCG (1500 IU 2x/tydzień × 4 tygodnie)."
    },
    "cruise": {
      "label": "Długoterminowe mid-cycle (użytkownicy multi-cycle)",
      "timing": "Co 12 tygodni",
      "markers": "Pełny panel HPG + USG jąder rocznie.",
      "purpose": "U użytkowników multi-cycle/blast-and-cruise długoterminowe monitorowanie efektów protokołu HCG mid-cycle."
    }
  }
}
