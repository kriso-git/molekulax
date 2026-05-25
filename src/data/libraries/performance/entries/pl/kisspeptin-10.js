// Kisspeptin-10 — 10-aminokwasowy fragment C-końcowy kisspeptyny, podwzgórzowy
// agonista GPR54 (KISS1R). Imperial College London Phase I-II trials lata 2020.
// Emerging-research upstream agent restartujący oś HPG.
// Źródła: Jayasena 2017 PMID 27959703, Dhillo 2007 PMID 17567849,
// George 2013 PMID 23390083.

export default {
  "id": "kisspeptin-10",
  "name": "Kisspeptin-10",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "10-aminokwasowy fragment C-końcowy kisspeptyny — podwzgórzowe GPR54 → impuls GnRH → LH/FSH. Najwyższy punkt restartu osi HPG. Imperial College London Phase I-II trwa w 2020s; emerging-research.",
  "description": "Kisspeptin-10 to 10-aminokwasowy bioaktywny fragment C-końcowy z rodziny kisspeptyn (produkt genu KISS1), który wiąże się z podwzgórzowym receptorem GPR54 (znanym również jako KISS1R) i na neuronach GnRH w jądrze łukowatym wyzwala pattern impulsów GnRH — co triggeruje przysadkowe uwalnianie LH/FSH, aktywujące produkcję testosteronu w komórkach Leydiga. **Kisspeptin-10 jest najwyżej położonym upstream agentem restartującym oś w arsenale AAS-PCT**: klasyczne narzędzia PCT (SERMy Nolvadex, Clomid) działają na poziomie blokady ER przysadki (1 poziom downstream), HCG bezpośrednio stymuluje testikularny receptor LHCGR komórki Leydiga (3 poziomy downstream), ALE Kisspeptin-10 restartuje pattern pulsatylności podwzgórzowej GnRH — co jest podstawą fizjologicznego funkcjonowania całej osi HPG. Jayasena 2017 (PMID 27959703) Phase I-II trial udokumentowała, że 1-2 godziny po wstrzyknięciu SC osiągalny jest znaczący spike LH/FSH + wzrost Total Test. Imperial College London (lab Waljita Dhillo) obecnie nadal prowadzi Phase II-trials w indykacjach hipogonadyzm + płodność IVF. Stan **emerging-research**: NIE MA zatwierdzonego komercyjnego preparatu farmaceutycznego (pipeline Adlumiz emerging 2025+); sourcing UGL-peptide-CDMO jest standardem. Problem praktyczny: pulsatylne dawkowanie jest niepraktyczne w kontekście self-administration (potrzebny protokół pompy w cyklach 90-minutowych), bolus-dose ma limitowaną skuteczność.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Podwzgórzowy agonista GPR54 (KISS1R) → impuls GnRH → LH/FSH → testikularny Test"},
    {"label": "Dawkowanie", "value": "50-200 mcg SC co 90 min (pulse-pump) lub 1-2 mg SC bolus dziennie (protokół community, limitowana skuteczność)"},
    {"label": "Okres półtrwania", "value": "~28 minut (bardzo krótki — pattern pulsatylności esencjalny)"},
    {"label": "Początek działania", "value": "Spike LH/FSH 1-2 godziny po SC"},
    {"label": "Status prawny", "value": "BRAK zatwierdzenia farmaceutycznego FDA/EMA; Imperial College London Phase II trwa 2026, WADA S2 Peptide Hormones banned"}
  ],
  "mechanism": "Produkt genu KISS1 (kisspeptyny) to białko prekursorowe ~145 aminokwasów, które przechodzi cięcie proteolityczne, a 10-aminokwasowy fragment C-końcowy (Kisspeptin-10, KP-10) jest biologicznie najbardziej aktywną formą. Jego receptorem jest GPR54 (KISS1R) — receptor sprzężony z białkiem G na neuronach GnRH jądra łukowatego podwzgórza + AVPV (jądro brzuszno-przednie okołokomorowe). Wiązanie → szlak Gq → wewnątrzkomórkowa mobilizacja Ca²⁺ → depolaryzacja błonowa → uwolnienie pęcherzyków GnRH w kierunku wyniosłości pośrodkowej. GnRH dociera przez krążenie wrotne do płata przedniego przysadki i na komórkach gonadotropowych uruchamia sekrecję LH + FSH. **Krytyczna pulsatylność**: naturalny pattern impulsów GnRH działa w cyklach ~90-120 minutowych; przewlekle podwyższony sygnał GnRH (vs pulsatylny) downreguluje receptor GnRH → odwrotny efekt (mechanizm terapii GnRH-agonistycznej w raku prostaty). Dlatego SC-bolus-dose Kisspeptin-10 daje limitowaną skuteczność jednego spike LH, a do przewlekłego restartu osi konieczny jest protokół pulse-pump. Brak obciążenia wątroby, ponieważ jest to wstrzyknięcie peptydu SC.",
  "legalStatus": "BRAK zatwierdzenia farmaceutycznego FDA/EMA. Phase II-trials Imperial College London trwają (lab Waljita Dhillo, 2017+). Sourcing UGL-peptide-CDMO standardowy ($30-50/mg). Adlumiz Therapeutics 2024+ pipeline komercyjny emerging (plany Phase III). WADA: S2 Peptide Hormones — banned in/out-of-competition.",
  "onsetTime": "Spike LH/FSH 1-2 godziny po SC",
  "halfLife": "~28 minut",
  "halfLifeActive": "~28 minut (fragment macierzysty aktywny; fragmenty-metabolity nieaktywne)",
  "interactionsWith": ["gonadorelin", "hcg-perf", "fsh-rec-perf"],
  "aromatization": "Pośrednia: podwzgórzowa stymulacja GnRH → LH/FSH → testikularny Test → obwodowa konwersja do E2. Magnitude umiarkowana, podobnie do osi HCG.",
  "hepatotoxicity": "Brak obciążenia wątroby — wstrzyknięcie peptydu SC.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (peptyd podwzgórzowy, NIE AAS)",
  "bindingAffinity": "GPR54 (KISS1R) Ki ~1-3 nM, wysokie powinowactwo, wiązanie podobne do naturalnego liganda.",
  "detectionWindow": "Akredytowane LC-MS/MS WADA rzadkie — detekcja peptydu z moczu 24-48 godzin (kontekst badawczy, ograniczone dane).",
  "benefits": [
    "Upstream restart osi HPG — najwyższy punkt w hierarchii Kisspeptin-Gonadorelin-HCG",
    "Evidence Phase II-trials Imperial College London (Jayasena 2017): udokumentowany SC-bolus spike LH/FSH + wzrost Test",
    "Emerging-research — pipeline komercyjny Adlumiz 2025+",
    "Brak obciążenia wątroby — peptyd"
  ],
  "quickStart": [
    "Pozyskanie: research-chemical peptide-CDMO (USA: Bachem, Lipotec; UE: PolyPeptide Group); obowiązkowe źródło testowane HPLC + mass-spec",
    "Rekonstytucja: 1 mg lyophilized → 2 mL bacteriostatic water (stężenie 0,5 mg/mL)",
    "Protokół pulse-pump (idealny): 50-200 mcg SC co 90 min, ~16 dawek/24 godziny — WYŁĄCZNIE w research-setting",
    "Protokół bolus (community DIY-PCT): 1-2 mg SC dziennie 1x, limitowana skuteczność — pojedynczy spike LH",
    "Bloodwork pre-treatment: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolaktyna baseline",
    "Bloodwork mid + post: 24h post-iniekcja potwierdzenie spike LH/FSH, 7-14 dni recovery Total Test"
  ],
  "expectations": [
    {"label": "1-2 godziny po SC", "body": "Mierzalny spike LH (wzrost ~3-5x baseline, dane Jayasena 2017). Spike FSH łagodniejszy (~2-3x). Wzrost Test na poziomie surowicy z opóźnieniem ~6-12 godzin."},
    {"label": "24-48 godzin", "body": "Poziom LH wraca do baseline (krótki okres półtrwania). Wzrost Test utrzymuje się ~2-3 dni. Z drugą dawką pulsatility-simulating effect może się rozciągnąć."},
    {"label": "Protokół przewlekły (pulse-pump, 1-2 tygodnie)", "body": "Restart osi HPG w pełnym fizjologicznym patternie. Osiągalny recovery endogenny Test >50% baseline w statusie suppression na poziomie przysadki."},
    {"label": "Protokół bolus DIY", "body": "Limitowana skuteczność — pojedynczy spike LH na dawkę, NIE chronic-axis-restart. Rola SERM-PCT-replacement obecnie NIE jest evidence-based."}
  ],
  "quality": {
    "pure": [
      "USA peptide-CDMO: Bachem, Lipotec, AmbioPharm — testowane HPLC + mass-spec (>98% purity), vials R&D-grade",
      "UE peptide-CDMO: PolyPeptide Group (Belgia), Bachem Bubendorf (Szwajcaria) — pharmaceutical-grade",
      "Adlumiz Therapeutics (USA) — pipeline komercyjny emerging dataset Phase III 2025-2026",
      "UGL peptide-vendor (sourcing azjatycki): obowiązkowy HPLC-cert — purity często <90%, unikać bez mass-spec-confirm"
    ],
    "caution": [
      "Protokół pulse-pump niepraktyczny w self-administration (cykliczne wstrzyknięcia co 90 min 24/7) — tylko research-setting",
      "Bolus-dose ma limitowaną skuteczność — pojedynczy spike LH vs przewlekły restart osi HPG",
      "Pozyskanie: peptide-CDMO drogie (~€30-50/mg), material-source Imperial College Phase II NIE jest publicznie dostępny",
      "Przechowywanie w bacteriostatic water: peptyd zrekonstytuowany stabilny w 4°C przez 14-21 dni; w 25°C temperaturze pokojowej <7 dni",
      "Źródło UGL kupione bez mass-spec-cert: pseudo-peptydy + zdegradowane fragmenty frequent"
    ],
    "avoid": [
      "Self-administration protokołu pulse-pump u nieprzeszkolonego użytkownika (sterile-technique krytyczne, ryzyko infekcji)",
      "Użytkownik research-novice — wymagana wiedza specjalistyczna w obsłudze peptydów + protokole rekonstytucji",
      "Wysokie dawki przewlekłe (>10 mg/dzień, >4 tygodnie): teoretyczne ryzyko downregulacji receptora GPR54 (paradoks Kisspeptin-LH-suppression)",
      "Współpodanie terapii GnRH-agonistycznej (Lupron, Zoladex): teoretyczna interakcja receptorowa, NIE zalecane",
      "Kontakt z partnerką w ciąży: teoretyczny wpływ na oś HPG płodu"
    ]
  },
  "interactions": [
    "HCG-perf: synergia upstream vs downstream — combo Kisspeptin przysadkowy-LH-stimulus + HCG testikularny-LHCGR-stimulus",
    "Gonadorelin: NIE zalecane razem (overlap-mechanizm, redundantna stymulacja szlaku GnRH)",
    "SERM (Nolvadex, Clomid): teoretyczna synergia (Kisspeptin upstream-pulse + SERM-przysadkowa-blokada-ER), ALE rzadkie clinical evidence",
    "Protokół pulse-pump + bolus + narzędzie do SC-injection: krytyczne przechowywanie zachowujące stabilność peptydu"
  ],
  "studies": [
    {"title": "Age-dependent changes in the reproductive axis responsiveness to kisspeptin-10 administration in healthy men.", "authors": "Ullah H, Nabi G, Zubair H, Shahab M", "journal": "Andrologia", "pmid": "30590872"},
    {"title": "Changes in the Responsiveness of the Hypothalamic-Pituitary-Gonadal Axis to Kisspeptin-10 Administration during Pubertal Transition in Boys.", "authors": "Nabi G, Ullah H, Khan S, Wahab F, Duan P, Ullah R, Shireen N, Shahab M", "journal": "Reprod Sci", "pmid": "30046307"},
    {"title": "Hypothalamic Response to Kisspeptin-54 and Pituitary Response to Gonadotropin-Releasing Hormone Are Preserved in Healthy Older Men.", "authors": "Abbara A, Narayanaswamy S, Izzi-Engbeaya C, Comninos AN, Clarke SA, Malik Z, Papadopoulou D, Modi M, Faruqi D, Mustafa R, Bassett P, Lavery S, Trew GH, Patel A, Hu M, Bloom SR, Dhillo WS", "journal": "Neuroendocrinology", "pmid": "29544222"}
  ],
  "faq": [
    {"q": "Kisspeptin-10 vs HCG vs Gonadorelin — jaka jest różnica?", "a": "Różnica w hierarchii poziomów osi. (1) **Kisspeptin-10**: podwzgórzowy GPR54 → impuls GnRH → LH/FSH (najwyższy upstream point); (2) **Gonadorelin**: przysadkowy receptor GnRH → LH/FSH (1 poziom downstream od Kisspeptin, direct GnRH-analog); (3) **HCG**: testikularny receptor LHCGR komórki Leydiga → produkcja Test (3 poziomy downstream, omija całkowicie przysadkę). Wybór kliniczny: Kisspeptin to najbardziej naturalny-pattern (pulsatility-simulator), ALE najmniej praktyczny (pump-protocol); HCG najbardziej praktyczny (2x SC tygodniowo), ALE omija pętlę feedback-loop przysadki. Gonadorelin pośredni (direct na poziomie przysadki, ALE potrzebna pulsatylność)."},
    {"q": "Pulsatylne dawkowanie jest niepraktyczne — co warta jest dawka bolus?", "a": "Pojedynczy bolus 1-2 mg SC — evidence trialu Jayasena 2017: ~3-5x spike LH + ~2-3x spike FSH w ciągu 1-2 godzin, wzrost Test z opóźnieniem ~6-12 godzin, utrzymujący się ~2-3 dni. **Limitowana skuteczność dla przewlekłego restartu osi**: do pełnego physiological-recovery osi HPG konieczny jest pulsatylny pattern (cykle 90-min), pojedynczy bolus to tylko transient stimulus. Protokoły community DIY-PCT próbują dziennie 1-2 mg SC × 7-14 dni — rzadkie empirical evidence, NIE replacement SERM-PCT. Trials Phase II Imperial College pracują na protokole pulse-pump."},
    {"q": "Dostępność?", "a": "Sourcing research-chemical peptide-CDMO standardowy. USA: Bachem, Lipotec, AmbioPharm (testowane HPLC + mass-spec, >98% purity, ~$30-50/mg). UE: PolyPeptide Group, Bachem Bubendorf (pharmaceutical-grade, podobna cena). Azjatycki vendor UGL: obowiązkowy HPLC-cert — purity często <90%, mass-spec-confirm braki. Material Phase II Imperial College London NIE jest publicznie dostępny, wyłącznie via trial-participation. Pipeline komercyjny Adlumiz Therapeutics 2025-26 w fokusie."},
    {"q": "Status trialu klinicznego 2026?", "a": "Imperial College London (lab Waljita Dhillo) prowadzi nadal Phase II trials w indykacjach hipogonadyzm + płodność IVF (2017-2026). Adlumiz Therapeutics (USA) pipeline komercyjny emerging — plany Phase III 2025-2026 w indykacji hipogonadyzm. W Europie brak pipeline komercyjnego. Kisspeptin-54 (wariant 54-aminokwasowy) jest również w parallel-research, podobny mechanizm. Modern clinical-decision-tree: Kisspeptin-PCT obecnie NIE jest evidence-based, kombinacja SERM (Nolvadex/Clomid) + HCG pozostaje standardem klinicznym."}
  ],
  "related": ["gonadorelin", "hcg-perf", "fsh-rec-perf"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.5, "medium": 1, "high": 2},
    "unit": "mg SC dziennie 1x (protokół bolus, limitowana skuteczność)",
    "note": "Protokół pulse-pump (research): 50-200 mcg SC co 90 min × cykle 24h. Protokół bolus DIY: 1-2 mg SC dziennie 1x rano × 7-14 dni. Rekonstytucja: 1 mg lyophilized → 2 mL bacteriostatic water (0,5 mg/mL). Przechowywanie: 4°C zrekonstytuowane stabilne 14-21 dni."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed rozpoczęciem leczenia Kisspeptin-10",
      "timing": "Start fazy PCT lub kontekst przewlekłego hipogonadyzmu",
      "markers": "Total Testosteron, Free Testosteron, LH, FSH, Estradiol, SHBG, Prolaktyna, inhibina-B (jeśli dostępna), panel lipidowy, ALT/AST, hemogram.",
      "purpose": "Baseline status osi HPG. Wskazanie: suppression na poziomie przysadki (LH/FSH <baseline specyficzne dla wieku) + Test <300 ng/dL. Opcja niszowa w przypadku failure SERM-PCT."
    },
    "midCycle": {
      "label": "Kisspeptin 24-48 h po wstrzyknięciu",
      "timing": "SC-bolus +1-2 godziny (spike LH/FSH) + 24h delayed (wzrost Test)",
      "markers": "LH (potwierdzenie acute spike), FSH, Total Test, Free Test, Estradiol (wzrost wtórny).",
      "purpose": "Potwierdzenie acute-response: oczekiwany spike LH ~3-5x baseline wg Jayasena 2017. Jeśli BRAK spike LH → problem jakości peptydu (źródło zdegradowane) lub saturacja przysadki."
    },
    "postCycle": {
      "label": "Koniec protokołu Kisspeptin / monitor recovery",
      "timing": "Ostatnia dawka +7-14 dni",
      "markers": "Total Test, Free Test, LH, FSH, Estradiol, SHBG, panel lipidowy.",
      "purpose": "Potwierdzenie sustained-restart osi HPG: LH/FSH ≥ baseline-low specyficzne dla wieku, Test ≥ pre-treatment +25%. Jeśli BRAK sustained-recovery → wskazany adjuwant SERM-PCT (Nolvadex 4-6 tygodni)."
    },
    "cruise": {
      "label": "Chronic AAS-cruise NIE zalecane",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Kisspeptin chronic-cruise NIE zalecane (emerging-research, evidence rzadkie). Tylko bolus w fazie acute-PCT lub setting protokołu pulse-pump research."
    }
  }
}
