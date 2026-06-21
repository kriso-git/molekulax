// Kisspeptin-10 – 10-aminokwasowy fragment C-końcowy kisspeptyny, podwzgórzowy
// agonista GPR54 (KISS1R). Imperial College London Phase I-II trials lata 2020.
// Emerging-research upstream agent restartujący oś HPG.
// Źródła: Jayasena 2017 PMID 27959703, Dhillo 2007 PMID 17567849,
// George 2013 PMID 23390083.

export default {
  "id": "kisspeptin-10",
  "sideEffects": [
    { "hu": "Tranziens LH/FSH- és tesztoszteron-kiugrás: gyors hormonális ingadozás, ami fejfájást, hangulati labilitást és átmeneti libidóváltozást okozhat a klinikai vizsgálatokban dokumentáltan.", "en": "Transient LH/FSH and testosterone surge: rapid hormonal swings that may cause headache, mood lability and short-term libido changes, as documented in clinical trials.", "pl": "Przejściowy wyrzut LH/FSH i testosteronu: szybkie wahania hormonalne mogące powodować ból głowy, chwiejność nastroju i krótkotrwałe zmiany libido, udokumentowane w badaniach klinicznych." },
    { "hu": "Receptor-deszenzitizáció tartós, nem pulzatilis adagolásnál: a krónikus, folyamatos GPR54/GnRH-stimulus paradox módon downregulálhatja a tengelyt és LH-szuppresszióhoz vezethet (a GnRH-agonista terápiák ismert mechanizmusa).", "en": "Receptor desensitization with continuous, non-pulsatile dosing: chronic steady GPR54/GnRH stimulation can paradoxically downregulate the axis and cause LH suppression (the known mechanism of GnRH-agonist therapy).", "pl": "Desensytyzacja receptora przy ciągłym, niepulsacyjnym dawkowaniu: przewlekła stała stymulacja GPR54/GnRH może paradoksalnie obniżyć regulację osi i wywołać supresję LH (znany mechanizm terapii agonistami GnRH)." },
    { "hu": "Injekciós helyi reakciók: szubkután beadás miatt bőrpír, fájdalom, viszketés vagy duzzanat a beadás helyén; ismételt napi/órás beadásnál ez halmozódik.", "en": "Injection-site reactions: subcutaneous administration can cause redness, pain, itching or swelling at the site; this accumulates with frequent daily/hourly dosing.", "pl": "Reakcje w miejscu wstrzyknięcia: podanie podskórne może powodować zaczerwienienie, ból, swędzenie lub obrzęk; nasila się to przy częstym dawkowaniu dziennym/godzinowym." },
    { "hu": "Sterilitási és fertőzési kockázat: a research-grade liofilizált peptid önkezelése (rekonstitúció, gyakori SC-injekció) nem steril technikánál bőr- és lágyrész-fertőzést okozhat.", "en": "Sterility and infection risk: self-handling of research-grade lyophilized peptide (reconstitution, frequent SC injection) can cause skin and soft-tissue infection with non-sterile technique.", "pl": "Ryzyko sterylności i zakażenia: samodzielne przygotowanie liofilizowanego peptydu badawczego (rekonstytucja, częste iniekcje SC) może powodować zakażenie skóry i tkanek miękkich przy niesterylnej technice." },
    { "hu": "Másodlagos ösztradiol-emelkedés: a kiváltott tesztoszteron perifériás aromatizációjával E2 emelkedhet, ami vízvisszatartást vagy érzékenységet okozhat, hasonló nagyságrendben a HCG-tengelyhez.", "en": "Secondary estradiol rise: peripheral aromatization of the induced testosterone can raise E2, potentially causing water retention or tenderness, of similar magnitude to the HCG axis.", "pl": "Wtórny wzrost estradiolu: obwodowa aromatyzacja indukowanego testosteronu może podnieść E2, powodując zatrzymanie wody lub tkliwość, w skali podobnej do osi HCG." },
    { "hu": "Termékenységi/reproduktív neuroendokrin hatások: a kisspeptin erősen befolyásolja a reproduktív tengelyt, ezért nem kontrollált adagolás megzavarhatja a természetes ciklicitást és a spermiogenezist; a hosszú távú humán biztonsági adat korlátozott.", "en": "Fertility/reproductive neuroendocrine effects: kisspeptin strongly drives the reproductive axis, so uncontrolled dosing can disrupt natural cyclicity and spermatogenesis; long-term human safety data are limited.", "pl": "Wpływ neuroendokrynny na płodność/rozród: kisspeptyna silnie napędza oś rozrodczą, więc niekontrolowane dawkowanie może zaburzać naturalną cykliczność i spermatogenezę; długoterminowe dane bezpieczeństwa u ludzi są ograniczone." },
    { "hu": "Peptid-minőségi kockázat: HPLC/tömegspektrometriás tanúsítvány nélküli UGL-forrás degradált vagy pszeudo-peptidet tartalmazhat, ami hatástalanságot vagy kiszámíthatatlan reakciókat okoz.", "en": "Peptide quality risk: UGL sources without HPLC/mass-spec certification may contain degraded or pseudo-peptide, leading to ineffectiveness or unpredictable reactions.", "pl": "Ryzyko jakości peptydu: źródła UGL bez certyfikatu HPLC/spektrometrii mas mogą zawierać zdegradowany lub pseudo-peptyd, co prowadzi do nieskuteczności lub nieprzewidywalnych reakcji." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás, valamint terhes partnerrel való kontaktus-kockázat: a kisspeptin kulcsszerepet játszik a reproduktív neuroendokrin szabályozásban, magzati HPG-tengely-hatás elméleti kockázata miatt kerülendő.", "en": "Pregnancy and breastfeeding, plus pregnant-partner contact risk: kisspeptin is central to reproductive neuroendocrine regulation; avoid due to theoretical fetal HPG-axis effects.", "pl": "Ciąża i karmienie piersią oraz ryzyko kontaktu z ciężarną partnerką: kisspeptyna jest kluczowa w regulacji neuroendokrynnej rozrodu; unikać z powodu teoretycznego wpływu na oś HPG płodu." },
    { "hu": "Hormonérzékeny (androgén- vagy ösztrogénfüggő) daganat, pl. prosztatarák vagy emlőrák: a kiváltott LH/FSH és tesztoszteron-emelkedés ronthatja a kórképet.", "en": "Hormone-sensitive (androgen- or estrogen-dependent) cancer, e.g. prostate or breast cancer: the induced LH/FSH and testosterone rise can worsen the disease.", "pl": "Nowotwór hormonozależny (androgeno- lub estrogenozależny), np. rak prostaty lub piersi: indukowany wzrost LH/FSH i testosteronu może pogorszyć chorobę." },
    { "hu": "Egyidejű GnRH-agonista terápia (Lupron, Zoladex) vagy egyéb GnRH-pathway-szer (gonadorelin): átfedő mechanizmus és elméleti receptor-interakció miatt nem ajánlott.", "en": "Concurrent GnRH-agonist therapy (Lupron, Zoladex) or other GnRH-pathway agents (gonadorelin): not recommended due to overlapping mechanism and theoretical receptor interaction.", "pl": "Jednoczesna terapia agonistą GnRH (Lupron, Zoladex) lub inne leki działające na szlak GnRH (gonadorelina): niezalecane z powodu nakładającego się mechanizmu i teoretycznej interakcji receptorowej." },
    { "hu": "Strukturális hypothalamus-hypophysis-károsodás vagy hypophysis-elégtelenség: a tengely felső szintjén ható peptid nem helyettesíti a downstream pótlást, ahol a pituiter válasz hiányzik.", "en": "Structural hypothalamic-pituitary damage or pituitary insufficiency: a peptide acting at the top of the axis cannot substitute downstream replacement where the pituitary response is absent.", "pl": "Strukturalne uszkodzenie podwzgórzowo-przysadkowe lub niewydolność przysadki: peptyd działający na szczycie osi nie zastąpi suplementacji niżej, gdy brak odpowiedzi przysadki." },
    { "hu": "Ismert túlérzékenység kisspeptinre vagy a készítmény segédanyagaira (pl. bakteriosztatikus víz, benzil-alkohol).", "en": "Known hypersensitivity to kisspeptin or formulation excipients (e.g. bacteriostatic water, benzyl alcohol).", "pl": "Znana nadwrażliwość na kisspeptynę lub substancje pomocnicze preparatu (np. woda bakteriostatyczna, alkohol benzylowy)." },
    { "hu": "Versenysportolók: a WADA S2 Peptid Hormonok kategóriájában tiltott versenyen belül és kívül egyaránt.", "en": "Competitive athletes: prohibited both in- and out-of-competition under WADA S2 Peptide Hormones.", "pl": "Sportowcy wyczynowi: zabroniona w i poza zawodami w kategorii WADA S2 Hormony Peptydowe." },
    { "hu": "Képzetlen önkezelő felhasználó: a pulzatilis pumpa-protokoll és a steril rekonstitúció/injekciós technika szakirányú tudást igényel, enélkül kontraindikált.", "en": "Untrained self-administering user: the pulsatile pump protocol and sterile reconstitution/injection technique require specialized knowledge; contraindicated without it.", "pl": "Nieprzeszkolony użytkownik samodzielnie podający lek: protokół pompy pulsacyjnej oraz sterylna rekonstytucja/technika iniekcji wymagają specjalistycznej wiedzy; bez niej przeciwwskazane." }
  ],
  "name": "Kisspeptin-10",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "10-aminokwasowy fragment C-końcowy kisspeptyny – podwzgórzowe GPR54 → impuls GnRH → LH/FSH. Najwyższy punkt restartu osi HPG. Imperial College London Phase I-II trwa w 2020s; emerging-research.",
  "description": "Kisspeptin-10 to 10-aminokwasowy bioaktywny fragment C-końcowy z rodziny kisspeptyn (produkt genu KISS1), który wiąże się z podwzgórzowym receptorem GPR54 (znanym również jako KISS1R) i na neuronach GnRH w jądrze łukowatym wyzwala pattern impulsów GnRH – co triggeruje przysadkowe uwalnianie LH/FSH, aktywujące produkcję testosteronu w komórkach Leydiga. **Kisspeptin-10 jest najwyżej położonym upstream agentem restartującym oś w arsenale AAS-PCT**: klasyczne narzędzia PCT (SERMy Nolvadex, Clomid) działają na poziomie blokady ER przysadki (1 poziom downstream), HCG bezpośrednio stymuluje testikularny receptor LHCGR komórki Leydiga (3 poziomy downstream), ALE Kisspeptin-10 restartuje pattern pulsatylności podwzgórzowej GnRH – co jest podstawą fizjologicznego funkcjonowania całej osi HPG. Jayasena 2017 (PMID 27959703) Phase I-II trial udokumentowała, że 1-2 godziny po wstrzyknięciu SC osiągalny jest znaczący spike LH/FSH + wzrost Total Test. Imperial College London (lab Waljita Dhillo) obecnie nadal prowadzi Phase II-trials w indykacjach hipogonadyzm + płodność IVF. Stan **emerging-research**: NIE MA zatwierdzonego komercyjnego preparatu farmaceutycznego (pipeline Adlumiz emerging 2025+); sourcing UGL-peptide-CDMO jest standardem. Problem praktyczny: pulsatylne dawkowanie jest niepraktyczne w kontekście self-administration (potrzebny protokół pompy w cyklach 90-minutowych), bolus-dose ma limitowaną skuteczność.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Podwzgórzowy agonista GPR54 (KISS1R) → impuls GnRH → LH/FSH → testikularny Test"
    },
    {
      "label": "Dawkowanie",
      "value": "50-200 mcg SC co 90 min (pulse-pump) lub 1-2 mg SC bolus dziennie (protokół community, limitowana skuteczność)"
    },
    {
      "label": "Okres półtrwania",
      "value": "~28 minut (bardzo krótki – pattern pulsatylności esencjalny)"
    },
    {
      "label": "Początek działania",
      "value": "Spike LH/FSH 1-2 godziny po SC"
    },
    {
      "label": "Status prawny",
      "value": "BRAK zatwierdzenia farmaceutycznego FDA/EMA; Imperial College London Phase II trwa 2026, WADA S2 Peptide Hormones banned"
    }
  ],
  "mechanism": "Produkt genu KISS1 (kisspeptyny) to białko prekursorowe ~145 aminokwasów, które przechodzi cięcie proteolityczne, a 10-aminokwasowy fragment C-końcowy (Kisspeptin-10, KP-10) jest biologicznie najbardziej aktywną formą. Jego receptorem jest GPR54 (KISS1R) – receptor sprzężony z białkiem G na neuronach GnRH jądra łukowatego podwzgórza + AVPV (jądro brzuszno-przednie okołokomorowe). Wiązanie → szlak Gq → wewnątrzkomórkowa mobilizacja Ca²⁺ → depolaryzacja błonowa → uwolnienie pęcherzyków GnRH w kierunku wyniosłości pośrodkowej. GnRH dociera przez krążenie wrotne do płata przedniego przysadki i na komórkach gonadotropowych uruchamia sekrecję LH + FSH. **Krytyczna pulsatylność**: naturalny pattern impulsów GnRH działa w cyklach ~90-120 minutowych; przewlekle podwyższony sygnał GnRH (vs pulsatylny) downreguluje receptor GnRH → odwrotny efekt (mechanizm terapii GnRH-agonistycznej w raku prostaty). Dlatego SC-bolus-dose Kisspeptin-10 daje limitowaną skuteczność jednego spike LH, a do przewlekłego restartu osi konieczny jest protokół pulse-pump. Brak obciążenia wątroby, ponieważ jest to wstrzyknięcie peptydu SC.",
  "legalStatus": "BRAK zatwierdzenia farmaceutycznego FDA/EMA. Phase II-trials Imperial College London trwają (lab Waljita Dhillo, 2017+). Sourcing UGL-peptide-CDMO standardowy ($30-50/mg). Adlumiz Therapeutics 2024+ pipeline komercyjny emerging (plany Phase III). WADA: S2 Peptide Hormones – banned in/out-of-competition.",
  "onsetTime": "Spike LH/FSH 1-2 godziny po SC",
  "halfLife": "~28 minut",
  "halfLifeActive": "~28 minut (fragment macierzysty aktywny; fragmenty-metabolity nieaktywne)",
  "interactionsWith": [
    "gonadorelin",
    "hcg-perf",
    "fsh-rec-perf"
  ],
  "aromatization": "Pośrednia: podwzgórzowa stymulacja GnRH → LH/FSH → testikularny Test → obwodowa konwersja do E2. Magnitude umiarkowana, podobnie do osi HCG.",
  "hepatotoxicity": "Brak obciążenia wątroby – wstrzyknięcie peptydu SC.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (peptyd podwzgórzowy, NIE AAS)",
  "bindingAffinity": "GPR54 (KISS1R) Ki ~1-3 nM, wysokie powinowactwo, wiązanie podobne do naturalnego liganda.",
  "detectionWindow": "Akredytowane LC-MS/MS WADA rzadkie – detekcja peptydu z moczu 24-48 godzin (kontekst badawczy, ograniczone dane).",
  "benefits": [
    "Upstream restart osi HPG – najwyższy punkt w hierarchii Kisspeptin-Gonadorelin-HCG",
    "Evidence Phase II-trials Imperial College London (Jayasena 2017): udokumentowany SC-bolus spike LH/FSH + wzrost Test",
    "Emerging-research – pipeline komercyjny Adlumiz 2025+",
    "Brak obciążenia wątroby – peptyd"
  ],
  "quickStart": [
    "Pozyskanie: research-chemical peptide-CDMO (USA: Bachem, Lipotec; UE: PolyPeptide Group); obowiązkowe źródło testowane HPLC + mass-spec",
    "Rekonstytucja: 1 mg lyophilized → 2 mL bacteriostatic water (stężenie 0,5 mg/mL)",
    "Protokół pulse-pump (idealny): 50-200 mcg SC co 90 min, ~16 dawek/24 godziny – WYŁĄCZNIE w research-setting",
    "Protokół bolus (community DIY-PCT): 1-2 mg SC dziennie 1x, limitowana skuteczność – pojedynczy spike LH",
    "Bloodwork pre-treatment: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolaktyna baseline",
    "Bloodwork mid + post: 24h post-iniekcja potwierdzenie spike LH/FSH, 7-14 dni recovery Total Test"
  ],
  "expectations": [
    {
      "label": "1-2 godziny po SC",
      "body": "Mierzalny spike LH (wzrost ~3-5x baseline, dane Jayasena 2017). Spike FSH łagodniejszy (~2-3x). Wzrost Test na poziomie surowicy z opóźnieniem ~6-12 godzin."
    },
    {
      "label": "24-48 godzin",
      "body": "Poziom LH wraca do baseline (krótki okres półtrwania). Wzrost Test utrzymuje się ~2-3 dni. Z drugą dawką pulsatility-simulating effect może się rozciągnąć."
    },
    {
      "label": "Protokół przewlekły (pulse-pump, 1-2 tygodnie)",
      "body": "Restart osi HPG w pełnym fizjologicznym patternie. Osiągalny recovery endogenny Test >50% baseline w statusie suppression na poziomie przysadki."
    },
    {
      "label": "Protokół bolus DIY",
      "body": "Limitowana skuteczność – pojedynczy spike LH na dawkę, NIE chronic-axis-restart. Rola SERM-PCT-replacement obecnie NIE jest evidence-based."
    }
  ],
  "quality": {
    "pure": [
      "USA peptide-CDMO: Bachem, Lipotec, AmbioPharm – testowane HPLC + mass-spec (>98% purity), vials R&D-grade",
      "UE peptide-CDMO: PolyPeptide Group (Belgia), Bachem Bubendorf (Szwajcaria) – pharmaceutical-grade",
      "Adlumiz Therapeutics (USA) – pipeline komercyjny emerging dataset Phase III 2025-2026",
      "UGL peptide-vendor (sourcing azjatycki): obowiązkowy HPLC-cert – purity często <90%, unikać bez mass-spec-confirm"
    ],
    "caution": [
      "Protokół pulse-pump niepraktyczny w self-administration (cykliczne wstrzyknięcia co 90 min 24/7) – tylko research-setting",
      "Bolus-dose ma limitowaną skuteczność – pojedynczy spike LH vs przewlekły restart osi HPG",
      "Pozyskanie: peptide-CDMO drogie (~€30-50/mg), material-source Imperial College Phase II NIE jest publicznie dostępny",
      "Przechowywanie w bacteriostatic water: peptyd zrekonstytuowany stabilny w 4°C przez 14-21 dni; w 25°C temperaturze pokojowej <7 dni",
      "Źródło UGL kupione bez mass-spec-cert: pseudo-peptydy + zdegradowane fragmenty frequent"
    ],
    "avoid": [
      "Self-administration protokołu pulse-pump u nieprzeszkolonego użytkownika (sterile-technique krytyczne, ryzyko infekcji)",
      "Użytkownik research-novice – wymagana wiedza specjalistyczna w obsłudze peptydów + protokole rekonstytucji",
      "Wysokie dawki przewlekłe (>10 mg/dzień, >4 tygodnie): teoretyczne ryzyko downregulacji receptora GPR54 (paradoks Kisspeptin-LH-suppression)",
      "Współpodanie terapii GnRH-agonistycznej (Lupron, Zoladex): teoretyczna interakcja receptorowa, NIE zalecane",
      "Kontakt z partnerką w ciąży: teoretyczny wpływ na oś HPG płodu"
    ]
  },
  "interactions": [
    "HCG-perf: synergia upstream vs downstream – combo Kisspeptin przysadkowy-LH-stimulus + HCG testikularny-LHCGR-stimulus",
    "Gonadorelin: NIE zalecane razem (overlap-mechanizm, redundantna stymulacja szlaku GnRH)",
    "SERM (Nolvadex, Clomid): teoretyczna synergia (Kisspeptin upstream-pulse + SERM-przysadkowa-blokada-ER), ALE rzadkie clinical evidence",
    "Protokół pulse-pump + bolus + narzędzie do SC-injection: krytyczne przechowywanie zachowujące stabilność peptydu"
  ],
  "studies": [
    {
      "title": "Age-dependent changes in the reproductive axis responsiveness to kisspeptin-10 administration in healthy men.",
      "authors": "Ullah H, Nabi G, Zubair H, Shahab M",
      "journal": "Andrologia",
      "pmid": "30590872"
    },
    {
      "title": "Changes in the Responsiveness of the Hypothalamic-Pituitary-Gonadal Axis to Kisspeptin-10 Administration during Pubertal Transition in Boys.",
      "authors": "Nabi G, Ullah H, Khan S, Wahab F, Duan P, Ullah R, Shireen N, Shahab M",
      "journal": "Reprod Sci",
      "pmid": "30046307"
    },
    {
      "title": "Hypothalamic Response to Kisspeptin-54 and Pituitary Response to Gonadotropin-Releasing Hormone Are Preserved in Healthy Older Men.",
      "authors": "Abbara A, Narayanaswamy S, Izzi-Engbeaya C, Comninos AN, Clarke SA, Malik Z, Papadopoulou D, Modi M, Faruqi D, Mustafa R, Bassett P, Lavery S, Trew GH, Patel A, Hu M, Bloom SR, Dhillo WS",
      "journal": "Neuroendocrinology",
      "pmid": "29544222"
    }
  ],
  "faq": [
    {
      "q": "Kisspeptin-10 vs HCG vs Gonadorelin – jaka jest różnica?",
      "a": "Różnica w hierarchii poziomów osi. (1) **Kisspeptin-10**: podwzgórzowy GPR54 → impuls GnRH → LH/FSH (najwyższy upstream point); (2) **Gonadorelin**: przysadkowy receptor GnRH → LH/FSH (1 poziom downstream od Kisspeptin, direct GnRH-analog); (3) **HCG**: testikularny receptor LHCGR komórki Leydiga → produkcja Test (3 poziomy downstream, omija całkowicie przysadkę). Wybór kliniczny: Kisspeptin to najbardziej naturalny-pattern (pulsatility-simulator), ALE najmniej praktyczny (pump-protocol); HCG najbardziej praktyczny (2x SC tygodniowo), ALE omija pętlę feedback-loop przysadki. Gonadorelin pośredni (direct na poziomie przysadki, ALE potrzebna pulsatylność)."
    },
    {
      "q": "Pulsatylne dawkowanie jest niepraktyczne – co warta jest dawka bolus?",
      "a": "Pojedynczy bolus 1-2 mg SC – evidence trialu Jayasena 2017: ~3-5x spike LH + ~2-3x spike FSH w ciągu 1-2 godzin, wzrost Test z opóźnieniem ~6-12 godzin, utrzymujący się ~2-3 dni. **Limitowana skuteczność dla przewlekłego restartu osi**: do pełnego physiological-recovery osi HPG konieczny jest pulsatylny pattern (cykle 90-min), pojedynczy bolus to tylko transient stimulus. Protokoły community DIY-PCT próbują dziennie 1-2 mg SC × 7-14 dni – rzadkie empirical evidence, NIE replacement SERM-PCT. Trials Phase II Imperial College pracują na protokole pulse-pump."
    },
    {
      "q": "Dostępność?",
      "a": "Sourcing research-chemical peptide-CDMO standardowy. USA: Bachem, Lipotec, AmbioPharm (testowane HPLC + mass-spec, >98% purity, ~$30-50/mg). UE: PolyPeptide Group, Bachem Bubendorf (pharmaceutical-grade, podobna cena). Azjatycki vendor UGL: obowiązkowy HPLC-cert – purity często <90%, mass-spec-confirm braki. Material Phase II Imperial College London NIE jest publicznie dostępny, wyłącznie via trial-participation. Pipeline komercyjny Adlumiz Therapeutics 2025-26 w fokusie."
    },
    {
      "q": "Status trialu klinicznego 2026?",
      "a": "Imperial College London (lab Waljita Dhillo) prowadzi nadal Phase II trials w indykacjach hipogonadyzm + płodność IVF (2017-2026). Adlumiz Therapeutics (USA) pipeline komercyjny emerging – plany Phase III 2025-2026 w indykacji hipogonadyzm. W Europie brak pipeline komercyjnego. Kisspeptin-54 (wariant 54-aminokwasowy) jest również w parallel-research, podobny mechanizm. Modern clinical-decision-tree: Kisspeptin-PCT obecnie NIE jest evidence-based, kombinacja SERM (Nolvadex/Clomid) + HCG pozostaje standardem klinicznym."
    }
  ],
  "related": [
    "gonadorelin",
    "hcg-perf",
    "fsh-rec-perf"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0.5,
      "medium": 1,
      "high": 2
    },
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
  },
  "anecdote": "Kispeptyna jest jedną z bardziej interesujących opcji w przestrzeni terapii po cyklu / naturalnego zwiększania testosteronu. Większość użytkowników stosunkowo szybko zauważa wzrost libido i poprawę nastroju, jeśli ich oś HPG dobrze reaguje. Jednak u użytkowników stłumionych przez AAS odpowiedź jest anegdotycznie słabsza w porównaniu do silniejszych alternatyw, takich jak HCG. Kispeptyna jest intensywnie badana pod kątem płodności ze względu na jej zdolność do stymulowania LH/FSH w bardziej fizjologiczny sposób.\n\nKispeptyna jest najlepiej podawana poprzez iniekcję podskórną ze względu na jej peptydową naturę. Dawkowanie różni się w zależności od analogu (np. Kispeptyna-10)."
}
