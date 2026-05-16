// Performance Library data — 10 CORE rich + 7 EXTRA slim = 17 entries total.
//
// Sources strictly peer-reviewed (PubMed, FDA prescribing info, EMA SmPC,
// NIH PubChem, Wikipedia pharmacology with public references).
// Forbidden sources: Scientific Sean, dopamine.club, RUO-aggregators
// (see feedback_forbidden_sources memory).
//
// Em-dash forbidden in user-facing strings (use comma+space or middle dot).
//
// Entries are added incrementally:
//   Task 6 — AAS-info CORE: testosterone-info, trenbolone-info, anavar-info
//   Task 7 — Prohormon CORE: superdrol, 1-andro
//   Task 8 — Stim + Bronch CORE: ephedrine, yohimbine, clenbuterol, albuterol
//   Task 9 — Növekedés CORE + EXTRA: mk-677 + winstrol-info, nandrolone-info,
//            dianabol-info, methylstenbolone, hgh-info, epo-info, dnp-info

export const CORE_PERFORMANCE = [
  // ===== 1. TESTOSTERONE (AAS-info CORE, canonical reference) =====
  {
    id: 'testosterone-info',
    name: 'Testosterone',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Az endogén férfi nemi hormon és az összes AAS referencia-molekulája. FDA-jóváhagyott TRT (testosterone replacement therapy) hipogonadizmusra.',
      en: 'The endogenous male sex hormone and reference molecule of all AAS. FDA-approved TRT (testosterone replacement therapy) for hypogonadism.',
      pl: 'Endogenny męski hormon płciowy i molekuła referencyjna wszystkich AAS. Zatwierdzony przez FDA TRT (terapia zastępcza testosteronem) dla hipogonadyzmu.',
    },
    description: {
      hu: 'A Testosterone az emberi szervezet elsődleges androgén szteroidja, a Leydig-sejtek termelik a herében az LH stimulációjára. Anabolikus:androgén arány 100:100, ami minden szintetikus AAS viszonyítási alapja. FDA-jóváhagyott klinikai indikáció: primer és szekunder hipogonadizmus (Testosterone Cypionate, Enanthate, Undecanoate, transdermális gélek). Sportoló-kontextusban WADA-tiltott, de orvosi TRT keretében legitim hosszú távú használata egyre szélesebb körben dokumentált. A 2023-as TRAVERSE trial (Lincoff, NEJM) megerősítette a transdermális TRT kardiovaszkuláris biztonságát hipogonád férfiakon emelt CV-rizikóval, ami a korábbi 2014-es FDA-warning narratíva landmark revíziója.',
      en: 'Testosterone is the primary androgenic steroid of the human body, produced by Leydig cells in the testes under LH stimulation. Anabolic:androgenic ratio 100:100, the reference point for all synthetic AAS. FDA-approved clinical indication: primary and secondary hypogonadism (Testosterone Cypionate, Enanthate, Undecanoate, transdermal gels). In sports context WADA-banned, but legitimate long-term use within medical TRT is increasingly documented. The TRAVERSE trial (Lincoff 2023, NEJM) confirmed the cardiovascular safety of transdermal TRT in hypogonadal men with elevated CV risk, a landmark revision of the earlier 2014 FDA warning narrative.',
      pl: 'Testosteron to pierwotny steryd androgenny ludzkiego organizmu, wytwarzany przez komórki Leydiga w jądrach pod wpływem LH. Stosunek anaboliczno-androgenny 100:100, punkt odniesienia dla wszystkich syntetycznych AAS. Zatwierdzone wskazanie FDA: hipogonadyzm pierwotny i wtórny (Testosteron Cypionate, Enanthate, Undecanoate, żele transdermalne). W kontekście sportowym zakazany przez WADA, ale długoterminowe użycie medyczne w TRT jest coraz szerzej udokumentowane. Badanie TRAVERSE (Lincoff 2023, NEJM) potwierdziło bezpieczeństwo sercowo-naczyniowe transdermalnego TRT u mężczyzn z hipogonadyzmem i podwyższonym ryzykiem CV, co stanowi przełomową rewizję wcześniejszego ostrzeżenia FDA z 2014 r.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista, aromatizál E2-vé', en: 'AR agonist, aromatizes to E2', pl: 'Agonista AR, aromatyzuje do E2' } },
      { label: { hu: 'Anabolikus:Androgén', en: 'Anabolic:Androgenic', pl: 'Anaboliczny:Androgenny' }, value: { hu: '100:100', en: '100:100', pl: '100:100' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '8 nap (Cyp), 10,5 nap (Ena)', en: '8 d (Cyp), 10.5 d (Ena)', pl: '8 dni (Cyp), 10,5 dni (Ena)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek' }, value: { hu: '24-72 óra (injektált észter)', en: '24-72 h (injected ester)', pl: '24-72 h (ester iniekcyjny)' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'FDA Rx TRT, WADA tiltott', en: 'FDA Rx TRT, WADA banned', pl: 'Rx FDA TRT, zakazany przez WADA' } },
    ],
    mechanism: {
      hu: 'Direkt androgén receptor (AR) agonista; aromatáz-enzimen át ösztradiollá (E2), 5α-reduktázon át DHT-vé alakul.',
      en: 'Direct androgen receptor (AR) agonist; converts to estradiol (E2) via aromatase and to DHT via 5α-reductase.',
      pl: 'Bezpośredni agonista receptora androgenowego (AR); konwertowany do estradiolu (E2) przez aromatazę i do DHT przez 5α-reduktazę.',
    },
    legalStatus: {
      hu: 'EU: vényköteles (Nebido, Sustanon). HU: Rx TRT-re. USA: FDA-jóváhagyott Schedule III (DEA). Sportkontextusban WADA tiltott egész évben.',
      en: 'EU: prescription (Nebido, Sustanon). HU: Rx for TRT. USA: FDA-approved Schedule III (DEA). WADA-banned in-competition and out-of-competition.',
      pl: 'UE: na receptę (Nebido, Sustanon). PL: Rx dla TRT. USA: zatwierdzony przez FDA, Schedule III (DEA). Zakazany przez WADA przez cały rok.',
    },
    onsetTime: '24-72 h (injected ester)',
    halfLife: '8 d (Cypionate), 10.5 d (Enanthate)',
    halfLifeActive: '~24 h free testosterone after ester hydrolysis',
    interactionsWith: ['anastrozole', 'hcg', 'finasteride', 'warfarin'],
    wadaStatus: 'banned',
    androgenicRatio: '100:100',
    bindingAffinity: {
      hu: 'AR-affinitás referencia 100% (minden más AAS ehhez viszonyítva).',
      en: 'AR-affinity reference 100% (all other AAS measured relative to this).',
      pl: 'Powinowactwo do AR referencyjne 100% (wszystkie inne AAS mierzone względem tego).',
    },
    detectionWindow: {
      hu: 'Injektált észter: 3-4 hónap vizeletből. T/E arány (karbon-izotóp, IRMS) akár 6 hónap.',
      en: 'Injected ester: 3-4 months urinary. T/E ratio (carbon-isotope IRMS) up to 6 months.',
      pl: 'Ester iniekcyjny: 3-4 miesiące w moczu. Stosunek T/E (IRMS izotop węgla) do 6 miesięcy.',
    },
    benefits: [
      { hu: 'Izomtömeg és erőnövekedés dokumentált (Bhasin 1996 NEJM)', en: 'Documented lean mass and strength gain (Bhasin 1996 NEJM)', pl: 'Udokumentowany wzrost masy mięśniowej i siły (Bhasin 1996 NEJM)' },
      { hu: 'Csontsűrűség és vörösvérsejt-szám emelkedés', en: 'Increased bone density and red blood cell count', pl: 'Zwiększona gęstość kości i liczba erytrocytów' },
      { hu: 'Libidó és erektilis funkció helyreállítása hipogonád férfiaknál', en: 'Libido and erectile function restoration in hypogonadal men', pl: 'Przywrócenie libido i funkcji erekcyjnej u mężczyzn z hipogonadyzmem' },
      { hu: 'Hangulat, energia és kognitív funkció javulása alacsony T-nél', en: 'Mood, energy and cognitive function improvement at low T', pl: 'Poprawa nastroju, energii i funkcji poznawczych przy niskim T' },
      { hu: 'Inzulinérzékenység és testösszetétel javulása', en: 'Improved insulin sensitivity and body composition', pl: 'Poprawa wrażliwości na insulinę i kompozycji ciała' },
    ],
    quickStart: [
      { hu: 'Bloodwork ELŐSZÖR. Baseline nélkül nincs informált használat', en: 'Bloodwork FIRST. No informed use without baseline', pl: 'Najpierw badania krwi. Bez baseline nie ma świadomego użycia' },
      { hu: 'Aromatáz-inhibitor (Anastrozole) készenlétben, csak ha E2 emelkedik', en: 'Aromatase inhibitor (Anastrozole) on standby, only if E2 rises', pl: 'Inhibitor aromatazy (Anastrozole) w gotowości, tylko jeśli E2 rośnie' },
      { hu: 'HCG 250-500 IU 2x/hét a here-atrófia megelőzésére hosszabb ciklusban', en: 'HCG 250-500 IU twice weekly to prevent testicular atrophy on longer cycles', pl: 'HCG 250-500 IU 2x w tygodniu, by zapobiec atrofii jąder przy dłuższych cyklach' },
      { hu: 'Vérnyomás otthon naponta, hematokrit 6 hetente', en: 'Home blood pressure daily, hematocrit every 6 weeks', pl: 'Ciśnienie krwi w domu codziennie, hematokryt co 6 tygodni' },
      { hu: 'PCT-terv KÉSZEN a ciklus indítása előtt (Clomid/Nolvadex protokoll)', en: 'PCT plan READY before cycle start (Clomid/Nolvadex protocol)', pl: 'Plan PCT GOTOWY przed startem cyklu (protokół Clomid/Nolvadex)' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Injektált észternél akut effekt minimális, az észter-hidrolízis 24-72 órán át tart. Szubjektív érzés ritka az első héten.', en: 'For injected ester acute effect is minimal, ester hydrolysis takes 24-72 h. Subjective sensation rare in first week.', pl: 'Dla estru iniekcyjnego efekt ostry minimalny, hydroliza estru trwa 24-72 h. Subiektywne odczucie rzadkie w pierwszym tygodniu.' } },
      { label: { hu: '4 hét', en: '4 weeks', pl: '4 tygodnie' }, body: { hu: 'Steady-state plasma testosterone elérve. Erő, libido, hangulat észrevehető emelkedés. E2 monitor kötelező.', en: 'Steady-state plasma testosterone reached. Noticeable rise in strength, libido, mood. E2 monitoring mandatory.', pl: 'Stan stacjonarny osiągnięty. Zauważalny wzrost siły, libido, nastroju. Monitoring E2 obowiązkowy.' } },
      { label: { hu: '8 hét', en: '8 weeks', pl: '8 tygodni' }, body: { hu: 'Izomtömeg-gyarapodás 3-6 kg lean mass dokumentált (Bhasin 1996). Lipid panel és hematokrit monitorozandó.', en: 'Lean mass gain of 3-6 kg documented (Bhasin 1996). Lipid panel and hematocrit must be monitored.', pl: 'Przyrost masy mięśniowej 3-6 kg udokumentowany (Bhasin 1996). Lipidogram i hematokryt do monitorowania.' } },
    ],
    quality: {
      pure: [
        { hu: 'UGL/Rx-fiola: olaj-bázis, tiszta, üledék nélküli', en: 'UGL/Rx vial: oil-based, clear, no sediment', pl: 'Fiolka UGL/Rx: olejowa, czysta, bez osadu' },
        { hu: 'Holografikus címke ellenőrzése (Bayer Nebido, Pfizer Depo-Testosterone)', en: 'Verify holographic label (Bayer Nebido, Pfizer Depo-Testosterone)', pl: 'Weryfikacja etykiety holograficznej (Bayer Nebido, Pfizer Depo-Testosterone)' },
      ],
      caution: [
        { hu: 'E2 túl magas: gynecomastia, vízvisszatartás, hangulatingadozás', en: 'E2 too high: gynecomastia, water retention, mood swings', pl: 'E2 za wysokie: ginekomastia, retencja wody, wahania nastroju' },
        { hu: 'Hematokrit >54%: thrombosis-kockázat, vérhajtás (phlebotomy) szükséges', en: 'Hematocrit >54%: thrombosis risk, phlebotomy needed', pl: 'Hematokryt >54%: ryzyko zakrzepicy, konieczna flebotomia' },
        { hu: 'HDL csökkenés, LDL emelkedés kardiovaszkuláris kockázat', en: 'HDL drop, LDL rise increases cardiovascular risk', pl: 'Spadek HDL, wzrost LDL zwiększa ryzyko sercowo-naczyniowe' },
      ],
      avoid: [
        { hu: 'Prosztatakarcinóma vagy emlőkarcinóma (kontraindikált)', en: 'Prostate or breast carcinoma (contraindicated)', pl: 'Rak prostaty lub piersi (przeciwwskazane)' },
        { hu: 'Súlyos szívelégtelenség, kezeletlen alvási apnoé', en: 'Severe heart failure, untreated sleep apnea', pl: 'Ciężka niewydolność serca, nieleczony bezdech senny' },
        { hu: 'Tervezett apaság alatt (spermatogenezis-szuppresszió)', en: 'During planned fatherhood (spermatogenesis suppression)', pl: 'W okresie planowanego ojcostwa (supresja spermatogenezy)' },
      ],
    },
    interactions: [
      { hu: 'Anastrozole (AI): E2 kontroll, csak labor-igazolt magas E2 esetén', en: 'Anastrozole (AI): E2 control, only if labs confirm high E2', pl: 'Anastrozol (AI): kontrola E2, tylko gdy badania potwierdzą wysokie E2' },
      { hu: 'HCG: here-atrófia és intratesticular T fenntartására', en: 'HCG: maintains testicular volume and intratesticular T', pl: 'HCG: utrzymanie objętości jąder i intratestykularnego T' },
      { hu: 'Finasteride: 5α-reductase gátló, DHT csökkentés (hajhullás-kockázat)', en: 'Finasteride: 5α-reductase inhibitor, lowers DHT (hair-loss risk)', pl: 'Finasteryd: inhibitor 5α-reduktazy, obniża DHT (ryzyko utraty włosów)' },
      { hu: 'Warfarin: antikoaguláns hatás fokozódhat, INR szigorú monitor', en: 'Warfarin: anticoagulant effect may potentiate, tight INR monitoring', pl: 'Warfaryna: efekt antykoagulacyjny może się nasilić, ścisłe monitorowanie INR' },
      { hu: 'Inzulin/orális antidiabetikum: dózis-csökkentés lehet szükséges', en: 'Insulin/oral antidiabetic: dose reduction may be needed', pl: 'Insulina/doustny przeciwcukrzycowy: może być potrzebna redukcja dawki' },
    ],
    studies: [
      { title: 'The effects of supraphysiologic doses of testosterone on muscle size and strength in normal men', authors: 'Bhasin S, Storer TW, Berman N et al.', journal: 'N Engl J Med. 1996;335(1):1-7.', pmid: '8637535' },
      { title: 'Testosterone dose-response relationships in healthy young men', authors: 'Bhasin S, Woodhouse L, Casaburi R et al.', journal: 'Am J Physiol Endocrinol Metab. 2001;281(6):E1172-81.', pmid: '11701431' },
      { title: 'Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline', authors: 'Bhasin S, Brito JP, Cunningham GR et al.', journal: 'J Clin Endocrinol Metab. 2018;103(5):1715-1744.', pmid: '29562364' },
      { title: 'Anabolic-androgenic steroid dependence: an emerging disorder', authors: 'Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.', journal: 'Addiction. 2009;104(12):1966-78.', pmid: '19922565' },
      { title: 'Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement', authors: 'Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.', journal: 'Endocr Rev. 2014;35(3):341-75.', pmid: '24423981' },
      { title: 'Effects of testosterone treatment in older men (Testosterone Trials)', authors: 'Snyder PJ, Bhasin S, Cunningham GR et al.', journal: 'N Engl J Med. 2016;374(7):611-624.', pmid: '26886521' },
      { title: 'Cardiovascular safety of testosterone-replacement therapy (TRAVERSE)', authors: 'Lincoff AM, Bhasin S, Flevaris P et al.', journal: 'N Engl J Med. 2023;389(2):107-117.', pmid: '37326322' },
    ],
    faq: [
      { q: { hu: 'Mi a különbség TRT és blast között?', en: 'What is the difference between TRT and blast?', pl: 'Jaka jest różnica między TRT a blastem?' }, a: { hu: 'TRT: orvosi protokoll, fiziológiás baseline-T (500-1000 ng/dL) fenntartása, tipikusan 100-200 mg/hét. Blast: supraphysiológiás dózis (300-600+ mg/hét) izomtömeg-építés céljából, nem orvosi indikáció.', en: 'TRT: medical protocol maintaining physiological baseline T (500-1000 ng/dL), typically 100-200 mg/week. Blast: supraphysiological dose (300-600+ mg/week) for muscle building, no medical indication.', pl: 'TRT: protokół medyczny utrzymujący fizjologiczny baseline T (500-1000 ng/dL), zwykle 100-200 mg/tydzień. Blast: dawka suprafizjologiczna (300-600+ mg/tydzień) dla budowy mięśni, bez wskazania medycznego.' } },
      { q: { hu: 'Kell-e aromatáz-inhibitor TRT alatt?', en: 'Is an aromatase inhibitor needed on TRT?', pl: 'Czy potrzebny jest inhibitor aromatazy przy TRT?' }, a: { hu: 'Nem automatikusan. AI csak akkor, ha labor-igazolt magas E2 + tüneti (gynecomastia, hangulatzavar). Vak AI-használat csökkenti az E2-t a kognitív és csontfunkcióhoz szükséges szint alá.', en: 'Not automatically. AI only if labs confirm high E2 plus symptoms (gynecomastia, mood disorder). Blind AI use lowers E2 below the level needed for cognitive and bone function.', pl: 'Nie automatycznie. AI tylko gdy badania potwierdzą wysokie E2 plus objawy (ginekomastia, zaburzenia nastroju). Ślepe użycie AI obniża E2 poniżej poziomu potrzebnego dla funkcji poznawczej i kostnej.' } },
      { q: { hu: 'Vissza tud-e térni a természetes T-termelés ciklus után?', en: 'Can natural T production return after a cycle?', pl: 'Czy naturalna produkcja T może wrócić po cyklu?' }, a: { hu: 'Általában igen, 3-12 hónap alatt PCT (Clomid/Nolvadex) protokollal. Rahnema 2014 review: tartós ciklusok után HPTA-recovery elhúzódhat, pár százaléknál tartós szuppresszió alakulhat ki.', en: 'Usually yes, in 3-12 months with PCT (Clomid/Nolvadex) protocol. Rahnema 2014 review: after long cycles HPTA recovery may be delayed, in a few percent persistent suppression may develop.', pl: 'Zwykle tak, w 3-12 miesięcy z protokołem PCT (Clomid/Nolvadex). Rahnema 2014: po długich cyklach odzyskiwanie HPTA może być opóźnione, u kilku procent może rozwinąć się trwała supresja.' } },
      { q: { hu: 'Veszélyes-e a TRT hosszú távon?', en: 'Is TRT dangerous long-term?', pl: 'Czy TRT jest niebezpieczne długoterminowo?' }, a: { hu: 'Megfelelő monitoringgal (lipid, hematokrit, PSA, E2) hipogonád férfiaknál a kockázat-haszon kedvező. Hosszú távú TRT-cohortokban a kardiovaszkuláris kockázat nem haladta meg a kontrollokét (Bhasin 2018 guideline).', en: 'With proper monitoring (lipid, hematocrit, PSA, E2) the risk-benefit is favorable in hypogonadal men. In long-term TRT cohorts cardiovascular risk did not exceed controls (Bhasin 2018 guideline).', pl: 'Przy odpowiednim monitorowaniu (lipidy, hematokryt, PSA, E2) bilans korzyść-ryzyko jest korzystny u mężczyzn z hipogonadyzmem. W długoterminowych kohortach TRT ryzyko sercowo-naczyniowe nie przekraczało kontroli (Bhasin 2018).' } },
      { q: { hu: 'Mi a TRAVERSE trial eredménye TRT-re?', en: 'What did the TRAVERSE trial show about TRT?', pl: 'Co pokazało badanie TRAVERSE w sprawie TRT?' }, a: { hu: 'A Lincoff 2023 NEJM TRAVERSE randomizált, placebo-kontrollált trial 5246 hipogonád férfit követett (45-80 év, emelt kardiovaszkuláris rizikóval, medián follow-up 22 hónap). A transdermális testosterone-gel NEM emelte a major adverse cardiovascular event (MACE) kockázatot placebóhoz képest (HR 0,96). Az addigi 2014-es FDA-warning narratíva ezzel landmark szinten revideálandó; megfelelő monitoring mellett a TRT kardiovaszkuláris biztonságos hipogonád férfiakon.', en: 'The Lincoff 2023 NEJM TRAVERSE randomized placebo-controlled trial followed 5246 hypogonadal men (age 45-80, elevated cardiovascular risk, median follow-up 22 months). Transdermal testosterone gel did NOT increase major adverse cardiovascular event (MACE) risk vs placebo (HR 0.96). This landmark-level revises the prior 2014 FDA warning narrative; with proper monitoring, TRT is cardiovascularly safe in hypogonadal men.', pl: 'Badanie Lincoff 2023 NEJM TRAVERSE randomizowane, kontrolowane placebo, śledziło 5246 mężczyzn z hipogonadyzmem (wiek 45-80, podwyższone ryzyko CV, mediana follow-up 22 miesięcy). Transdermalny żel testosteronowy NIE zwiększał ryzyka MACE vs placebo (HR 0,96). To przełomowa rewizja wcześniejszego ostrzeżenia FDA z 2014 r.; przy odpowiednim monitoringu TRT jest bezpieczne sercowo-naczyniowo u mężczyzn z hipogonadyzmem.' } },
    ],
    related: ['trenbolone-info', 'anavar-info', 'winstrol-info', 'nandrolone-info', 'dianabol-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 1.5, medium: 3.0, high: 5.0 },
      unit: 'mg/hét',
      note: {
        hu: 'TRT (orvos által felírva) jellemzően 100-200 mg/hét, az Alacsony tartomány közelében. Sport-AAS-ciklus 300-500+ mg/hét, csak orvosi felügyelet és bloodwork mellett. Heti dózist tipikusan 2x EOD vagy 1x heti injekcióra osztják.',
        en: 'TRT (physician-prescribed) is typically 100-200 mg/week, near the Low range. Sport AAS cycles 300-500+ mg/week, only with medical supervision and bloodwork. The weekly dose is typically split into 2x EOD or 1x weekly injection.',
        pl: 'TRT (przepisana przez lekarza) zwykle 100-200 mg/tydzień, blisko zakresu Niska. Cykle AAS w sporcie 300-500+ mg/tydzień, wyłącznie pod nadzorem lekarza. Dawkę tygodniową dzieli się zwykle na 2x EOD lub 1x tygodniowo.',
      },
    },
    bloodwork: {
      preCycle: {
        label:   { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing:  { hu: '2-4 héttel ciklus indítás előtt', en: '2-4 weeks before cycle start', pl: '2-4 tygodnie przed startem' },
        markers: { hu: 'Teljes vérkép (CBC) hematokrittal, lipid panel (LDL/HDL/TG), májfunkció (ALT/AST/GGT), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, vesefunkció (Kreatinin, eGFR), PSA (30 év felett).', en: 'Complete blood count (CBC) with hematocrit, lipid panel (LDL/HDL/TG), liver function (ALT/AST/GGT), hormone panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, renal function (Creatinine, eGFR), PSA (age 30+).', pl: 'Pełna morfologia (CBC) z hematokrytem, lipidogram (LDL/HDL/TG), próby wątrobowe (ALT/AST/GGT), panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna), HbA1c, czynność nerek (Kreatynina, eGFR), PSA (powyżej 30 lat).' },
        purpose: { hu: 'Alapvonal-mérés. Egészséges baseline nélkül a ciklus alatti változások értelmezhetetlenek.', en: 'Baseline measurement. Without a healthy baseline, on-cycle changes cannot be interpreted.', pl: 'Pomiar bazowy. Bez zdrowego baseline zmiany w trakcie cyklu są nieinterpretowalne.' },
      },
      midCycle: {
        label:   { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie cyklu' },
        timing:  { hu: '4-6 héttel az indulás után', en: '4-6 weeks after start', pl: '4-6 tygodni po starcie' },
        markers: { hu: 'Lipid panel (HDL drasztikusan csökkenhet AAS-en), májfunkció (ALT/AST), E2 (aromatáz-aktivitás), hematokrit, vérnyomás (otthon, naponta).', en: 'Lipid panel (HDL can drop drastically on AAS), liver function (ALT/AST), E2 (aromatase activity), hematocrit, blood pressure (home, daily).', pl: 'Lipidogram (HDL może drastycznie spaść na AAS), próby wątrobowe (ALT/AST), E2 (aktywność aromatazy), hematokryt, ciśnienie krwi (w domu, codziennie).' },
        purpose: { hu: 'Vész-detektálás. Súlyos eltérés esetén ciklus megszakítása.', en: 'Emergency detection. Severe deviation triggers cycle interruption.', pl: 'Wykrywanie nagłych zmian. Poważne odchylenie wymaga przerwania cyklu.' },
      },
      postCycle: {
        label:   { hu: 'PCT (Post-Cycle Therapy)', en: 'Post-cycle (PCT)', pl: 'Po cyklu (PCT)' },
        timing:  { hu: 'PCT 4. hetén és 8-12. hetén HPTA-recovery ellenőrzés', en: 'Week 4 of PCT and week 8-12 HPTA recovery check', pl: 'Tydzień 4 PCT oraz tydzień 8-12 sprawdzenie powrotu HPTA' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), májfunkció (recovery).', en: 'Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), liver function (recovery).', pl: 'Total T, Free T, LH, FSH, E2, SHBG, lipidogram (powrót HDL), próby wątrobowe (regeneracja).' },
        purpose: { hu: 'HPTA-helyreállítás verifikálása. Ha T nem tér vissza baseline-ra 12 hét után, endokrinológus konzultáció.', en: 'Verify HPTA recovery. If T does not return to baseline by week 12, consult endocrinologist.', pl: 'Weryfikacja powrotu HPTA. Jeśli T nie wraca do baseline w tygodniu 12, konsultacja endokrynologiczna.' },
      },
      cruise: {
        label:   { hu: 'Cruise alatt', en: 'On Cruise', pl: 'Podczas Cruise' },
        timing:  { hu: '6 hetente folyamatos monitoring', en: 'Continuous monitoring every 6 weeks', pl: 'Ciągłe monitorowanie co 6 tygodni' },
        markers: { hu: 'Total T, E2, lipid panel, hematokrit (>54% phlebotomy), HbA1c, PSA (30 év felett), vérnyomás napló.', en: 'Total T, E2, lipid panel, hematocrit (>54% phlebotomy), HbA1c, PSA (age 30+), blood pressure log.', pl: 'Total T, E2, lipidogram, hematokryt (>54% flebotomia), HbA1c, PSA (powyżej 30 lat), dziennik ciśnienia.' },
        purpose: { hu: 'Hosszú távú stabil szuppresszió alatt a kardiovaszkuláris és hormonális markereket folyamatosan ellenőrizni kell, különös tekintettel hematokritra és PSA-ra.', en: 'During long-term stable suppression, cardiovascular and hormonal markers must be tracked continuously, with special attention to hematocrit and PSA.', pl: 'Podczas długotrwałej stabilnej supresji markery sercowo-naczyniowe i hormonalne muszą być stale monitorowane, ze szczególną uwagą na hematokryt i PSA.' },
      },
    },
  },

  // ===== 2. TRENBOLONE (AAS-info CORE, harsh 19-nor, renal-priority) =====
  {
    id: 'trenbolone-info',
    name: 'Trenbolone',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Erős 19-nortestosterone-származék, 5x androgén aktivitás vs. testosterone. Vesére, vérnyomásra és prolaktinra agresszív, soha nem volt FDA-jóváhagyott emberi gyógyszer.',
      en: 'Potent 19-nortestosterone derivative, 5x androgenic activity vs. testosterone. Aggressive on kidneys, blood pressure and prolactin; never FDA-approved for human use.',
      pl: 'Silny derywat 19-nortestosteronu, 5x aktywność androgenna vs. testosteron. Agresywny dla nerek, ciśnienia i prolaktyny; nigdy nie zatwierdzony przez FDA do użytku ludzkiego.',
    },
    description: {
      hu: 'A Trenbolone egy 19-norandrosztén származék, eredetileg szarvasmarha izomtömeg-növelésére fejlesztették (Finaplix pellet). Anabolikus:androgén arány 500:500, ami 5x erősebb androgén aktivitást jelent, mint a testosterone. Nem aromatizál E2-vé, ami egyrészt előny (alacsony vízvisszatartás), másrészt jelentős hátrány: progeszteron-receptor és prolaktin emelkedés, hipertenzió, vesekárosodás (kreatinin emelkedés, eGFR csökkenés), és súlyos kardiovaszkuláris terhelés. Soha nem volt humán FDA-engedély, az összes fellelhető Trenbolone illegálisan szintetizált vagy állati Finaplix-pelletből konvertált.',
      en: 'Trenbolone is a 19-norandrostene derivative originally developed for cattle muscle gain (Finaplix pellets). Anabolic:androgenic ratio 500:500, meaning 5x stronger androgenic activity than testosterone. It does not aromatize to E2, which is partly an advantage (low water retention) and partly a major drawback: progesterone-receptor activity, prolactin elevation, hypertension, renal stress (creatinine rise, eGFR drop), and severe cardiovascular burden. It has never had human FDA approval; all available Trenbolone is illegally synthesized or converted from veterinary Finaplix pellets.',
      pl: 'Trenbolon to derywat 19-norandrostenu, pierwotnie opracowany do przyrostu masy mięśniowej u bydła (peletki Finaplix). Stosunek anaboliczno-androgenny 500:500, oznacza 5x silniejszą aktywność androgenną niż testosteron. Nie aromatyzuje do E2, co jest częściowo zaletą (niska retencja wody), a częściowo poważną wadą: aktywność na receptorze progesteronowym, wzrost prolaktyny, nadciśnienie, obciążenie nerek (wzrost kreatyniny, spadek eGFR) i poważne obciążenie sercowo-naczyniowe. Nigdy nie miał aprobaty FDA do użytku ludzkiego.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista, nem aromatizál, PR-aktivitás', en: 'AR agonist, no aromatization, PR activity', pl: 'Agonista AR, brak aromatyzacji, aktywność PR' } },
      { label: { hu: 'Anabolikus:Androgén', en: 'Anabolic:Androgenic', pl: 'Anaboliczny:Androgenny' }, value: { hu: '500:500', en: '500:500', pl: '500:500' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '3 nap (Ace), 8 nap (Ena)', en: '3 d (Acetate), 8 d (Enanthate)', pl: '3 dni (Acetat), 8 dni (Enanthate)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek' }, value: { hu: '24-48 óra', en: '24-48 h', pl: '24-48 h' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Nincs humán Rx, WADA tiltott', en: 'No human Rx, WADA banned', pl: 'Brak Rx dla ludzi, zakaz WADA' } },
    ],
    mechanism: {
      hu: 'AR-agonista 5x affinitással testosteronhoz képest; glucocorticoid-receptor antagonizmus (anti-katabolikus erő, izomtömeg-megtartás kalóriadeficitben); progeszteron-receptor parciális agonista (prolaktin-emelkedést okoz); nem aromatizál ösztrogénné.',
      en: 'AR agonist with 5x affinity vs testosterone; glucocorticoid-receptor antagonism (anti-catabolic strength, muscle retention during caloric deficit); partial progesterone-receptor agonist (causes prolactin elevation); does not aromatize to estrogen.',
      pl: 'Agonista AR z 5x powinowactwem vs testosteron; antagonizm receptora glikokortykoidowego (siła antykataboliczna, retencja mięśni w deficycie kalorycznym); częściowy agonista receptora progesteronowego (powoduje wzrost prolaktyny); nie aromatyzuje do estrogenów.',
    },
    legalStatus: {
      hu: 'EU: nincs humán engedély, csak veterinária (TBA-pellet szarvasmarhán). HU: nincs Rx. USA: Schedule III (DEA), humán terápiás indikáció nincs. WADA tiltott egész évben.',
      en: 'EU: no human authorization, veterinary only (TBA pellets in cattle). HU: no Rx. USA: Schedule III (DEA), no human therapeutic indication. WADA-banned year-round.',
      pl: 'UE: brak autoryzacji ludzkiej, tylko weterynaryjna (peletki TBA u bydła). PL: brak Rx. USA: Schedule III (DEA), brak wskazania terapeutycznego u ludzi. Zakazany przez WADA cały rok.',
    },
    onsetTime: '24-48 h',
    halfLife: '3 d (Acetate), 8 d (Enanthate)',
    halfLifeActive: 'Active free trenbolone ~6-8 h after ester cleavage',
    interactionsWith: ['cabergoline', 'testosterone', 'hcg', 'pramipexole'],
    wadaStatus: 'banned',
    androgenicRatio: '500:500',
    bindingAffinity: {
      hu: 'AR-affinitás ~5x testosterone; progeszteron-receptor parciális agonista, ezért prolaktin-emelkedés.',
      en: 'AR affinity ~5x testosterone; partial progesterone-receptor agonist, hence prolactin elevation.',
      pl: 'Powinowactwo do AR ~5x testosteronu; częściowy agonista receptora progesteronowego, stąd wzrost prolaktyny.',
    },
    detectionWindow: {
      hu: 'Trenbolone-metabolitok (epitrenbolone) vizeletből 4-5 hónap. IRMS akár 6 hónap.',
      en: 'Trenbolone metabolites (epitrenbolone) urinary 4-5 months. IRMS up to 6 months.',
      pl: 'Metabolity trenbolonu (epitrenbolon) w moczu 4-5 miesięcy. IRMS do 6 miesięcy.',
    },
    benefits: [
      { hu: 'Erős nitrogén-retenció és lean mass gyarapodás (állatkísérletes evidencia robust)', en: 'Strong nitrogen retention and lean mass gain (robust animal evidence)', pl: 'Silna retencja azotu i przyrost masy mięśniowej (solidne dowody na zwierzętach)' },
      { hu: 'Nem aromatizál, ezért alacsony vízvisszatartás, "kemény" megjelenés', en: 'Does not aromatize, low water retention, hard look', pl: 'Nie aromatyzuje, niska retencja wody, twardy wygląd' },
      { hu: 'IGF-1 emelkedés és glucocorticoid-receptor antagonizmus (erős muscle-sparing hatás kalóriadeficitben)', en: 'Increased IGF-1 and glucocorticoid-receptor antagonism (strong muscle-sparing effect during caloric deficit)', pl: 'Wzrost IGF-1 i antagonizm receptora glikokortykoidowego (silny efekt oszczędzający mięśnie w deficycie kalorycznym)' },
      { hu: 'Lipolitikus hatás kontextusban erős zsírvesztés', en: 'Lipolytic effect, strong fat loss in context', pl: 'Efekt lipolityczny, silna utrata tłuszczu w odpowiednim kontekście' },
    ],
    quickStart: [
      { hu: 'Renális monitor PRIORITÁS: kreatinin, eGFR, vérnyomás baseline ELŐZETESEN', en: 'Renal monitoring is PRIORITY: creatinine, eGFR, blood pressure baseline FIRST', pl: 'Monitoring nerek jest PRIORYTETEM: kreatynina, eGFR, ciśnienie baseline NAJPIERW' },
      { hu: 'Cabergoline 0,25-0,5 mg 2x/hét készenlétben prolaktin-emelkedéshez', en: 'Cabergoline 0.25-0.5 mg twice weekly on standby for prolactin rise', pl: 'Kabergolina 0,25-0,5 mg 2x w tygodniu w gotowości na wzrost prolaktyny' },
      { hu: 'Vérnyomás otthon naponta 2x, kreatinin 4 hetente', en: 'Home blood pressure twice daily, creatinine every 4 weeks', pl: 'Ciśnienie krwi w domu 2x dziennie, kreatynina co 4 tygodnie' },
      { hu: 'Soha NEM első ciklus, soha NEM TRT-alap nélkül', en: 'NEVER first cycle, NEVER without TRT base', pl: 'NIGDY pierwszy cykl, NIGDY bez bazy TRT' },
      { hu: 'Kardió + alvás-monitor (Tren-insomnia jól dokumentált)', en: 'Cardio plus sleep monitoring (Tren-insomnia well documented)', pl: 'Kardio plus monitoring snu (bezsenność po trenie dobrze udokumentowana)' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Acetát-észternél 24-48 óra alatt érzékelhető pulzus- és vérnyomás-emelkedés, éjszakai izzadás, alvászavar.', en: 'For acetate ester noticeable pulse and BP rise within 24-48 h, night sweats, sleep disturbance.', pl: 'Dla estru acetatowego zauważalny wzrost pulsu i ciśnienia w 24-48 h, nocne poty, zaburzenia snu.' } },
      { label: { hu: '4 hét', en: '4 weeks', pl: '4 tygodnie' }, body: { hu: 'Erős erőnövekedés, lean mass gyarapodás, jelentős zsírvesztés. Kreatinin emelkedés (vesefunkció ellenőrizendő), vérnyomás emelkedés.', en: 'Strong strength gain, lean mass increase, significant fat loss. Creatinine rises (renal function to be checked), blood pressure rises.', pl: 'Silny wzrost siły, przyrost masy mięśniowej, znacząca utrata tłuszczu. Kreatynina rośnie (sprawdzić nerki), ciśnienie rośnie.' } },
      { label: { hu: '8 hét', en: '8 weeks', pl: '8 tygodni' }, body: { hu: 'Maximális komponáció-változás, de a kardiovaszkuláris terhelés súlyos. 8 hét felett a tartós veseterhelés és hipertenzió kockázata aránytalan.', en: 'Maximal composition change, but cardiovascular burden is severe. Beyond 8 weeks the risk of persistent renal stress and hypertension becomes disproportionate.', pl: 'Maksymalna zmiana kompozycji, ale obciążenie sercowo-naczyniowe jest poważne. Powyżej 8 tygodni ryzyko trwałego obciążenia nerek i nadciśnienia staje się nieproporcjonalne.' } },
    ],
    quality: {
      pure: [
        { hu: 'Tren-Ace: jellegzetes mély narancs-sárga olajbázisú oldat', en: 'Tren-Ace: characteristic deep orange-yellow oil-based solution', pl: 'Tren-Ace: charakterystyczny głęboko pomarańczowo-żółty roztwór olejowy' },
        { hu: 'UGL Tren laboratóriumi tisztaság-tesztelése erősen ajánlott', en: 'UGL Tren lab purity-testing strongly recommended', pl: 'Testowanie czystości UGL Tren w laboratorium silnie zalecane' },
      ],
      caution: [
        { hu: '"Tren-cough" injekció után, prolaktin-emelkedés, gynecomastia', en: 'Tren-cough post-injection, prolactin rise, gynecomastia', pl: 'Tren-cough po iniekcji, wzrost prolaktyny, ginekomastia' },
        { hu: 'Krónikus vesefunkció-romlás, kreatinin tartós emelkedés', en: 'Chronic renal function decline, persistent creatinine elevation', pl: 'Przewlekłe pogorszenie czynności nerek, trwały wzrost kreatyniny' },
        { hu: 'Súlyos hipertenzió, alvászavar, éjszakai izzadás, agresszió', en: 'Severe hypertension, sleep disturbance, night sweats, aggression', pl: 'Ciężkie nadciśnienie, zaburzenia snu, nocne poty, agresja' },
        { hu: 'CNS-szimpatikus tónus emelése: REM-alvás rontása, akár 70-80% felhasználónál éjszakai izzadás + insomnia', en: 'CNS sympathetic tone elevation: REM sleep impairment, up to 70-80% of users report night sweats plus insomnia', pl: 'Wzrost tonu współczulnego CNS: pogorszenie snu REM, do 70-80% użytkowników zgłasza nocne poty plus bezsenność' },
      ],
      avoid: [
        { hu: 'Bármilyen vesebetegség, kontrollálatlan hipertenzió', en: 'Any renal disease, uncontrolled hypertension', pl: 'Jakakolwiek choroba nerek, niekontrolowane nadciśnienie' },
        { hu: 'Pszichés instabilitás, alvászavar, anxietás-zavar', en: 'Psychiatric instability, sleep disorder, anxiety disorder', pl: 'Niestabilność psychiczna, zaburzenia snu, zaburzenia lękowe' },
        { hu: 'Első ciklus, TRT-alap nélküli használat, kardiovaszkuláris betegség', en: 'First cycle, use without TRT base, cardiovascular disease', pl: 'Pierwszy cykl, użycie bez bazy TRT, choroba sercowo-naczyniowa' },
      ],
    },
    interactions: [
      { hu: 'Cabergoline: prolaktin-szuppresszió, kötelező készenlétben tartani', en: 'Cabergoline: prolactin suppression, must be on standby', pl: 'Kabergolina: supresja prolaktyny, obowiązkowo w gotowości' },
      { hu: 'Testosterone bázis: kötelező, Tren önmagában szexuális diszfunkciót okoz', en: 'Testosterone base: mandatory, Tren alone causes sexual dysfunction', pl: 'Baza testosteronu: obowiązkowa, sam Tren powoduje dysfunkcje seksualne' },
      { hu: 'HCG: spermatogenezis-megtartás, de Tren önmagában is suppressziót okoz', en: 'HCG: spermatogenesis preservation, although Tren itself causes suppression', pl: 'HCG: utrzymanie spermatogenezy, choć sam Tren powoduje supresję' },
      { hu: 'NSAID + Tren: vesefunkció további terhelése, kerülendő', en: 'NSAID plus Tren: further renal burden, avoid', pl: 'NLPZ plus Tren: dodatkowe obciążenie nerek, unikać' },
      { hu: 'Stimulánsok (clenbuterol, ephedrine): vérnyomás-szinergia veszélyes', en: 'Stimulants (clenbuterol, ephedrine): dangerous BP synergy', pl: 'Stymulanty (klenbuterol, efedryna): niebezpieczna synergia ciśnieniowa' },
    ],
    studies: [
      { title: 'Anabolic steroid-induced cardiomyopathy underlying acute liver failure in a young bodybuilder', authors: 'Kanayama G, Hudson JI, Pope HG Jr.', journal: 'World J Gastroenterol. 2018;24(6):673-678.', pmid: '29456405' },
      { title: 'Adverse health consequences of performance-enhancing drugs', authors: 'Pope HG Jr, Wood RI, Rogol A et al.', journal: 'Endocr Rev. 2014;35(3):341-75.', pmid: '24423981' },
      { title: 'Long-term anabolic-androgenic steroid use is associated with left ventricular dysfunction', authors: 'Baggish AL, Weiner RB, Kanayama G et al.', journal: 'Circ Heart Fail. 2010;3(4):472-6.', pmid: '20424247' },
      { title: 'Cardiovascular toxicity of illicit anabolic-androgenic steroid use', authors: 'Baggish AL, Weiner RB, Kanayama G et al.', journal: 'Circulation. 2017;135(21):1991-2002.', pmid: '28533317' },
      { title: 'Anabolic-androgenic steroid dependence: an emerging disorder', authors: 'Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.', journal: 'Addiction. 2009;104(12):1966-78.', pmid: '19922565' },
      { title: 'Effects of androgenic-anabolic steroids in athletes', authors: 'Hartgens F, Kuipers H.', journal: 'Sports Med. 2004;34(8):513-554.', pmid: '15233599' },
    ],
    faq: [
      { q: { hu: 'Miért kell cabergoline a Tren mellé?', en: 'Why is cabergoline needed alongside Tren?', pl: 'Dlaczego kabergolina jest potrzebna obok Trenu?' }, a: { hu: 'A Trenbolone parciális progeszteron-receptor agonista, ami prolaktin-emelkedéshez vezethet. Magas prolaktin: gynecomastia-szerű tünet, libidó-csökkenés, erektilis diszfunkció. Cabergoline 0,25-0,5 mg 2x/hét dopamin-D2-agonistaként szuppresszálja a prolaktint.', en: 'Trenbolone is a partial progesterone-receptor agonist, which can elevate prolactin. High prolactin: gyno-like symptoms, libido loss, erectile dysfunction. Cabergoline 0.25-0.5 mg twice weekly as a dopamine D2 agonist suppresses prolactin.', pl: 'Trenbolon jest częściowym agonistą receptora progesteronowego, co może podnosić prolaktynę. Wysoka prolaktyna: objawy ginekomastii, spadek libido, dysfunkcja erekcyjna. Kabergolina 0,25-0,5 mg 2x/tydzień jako agonista dopaminy D2 hamuje prolaktynę.' } },
      { q: { hu: 'Miért emelkedik a kreatinin Tren alatt?', en: 'Why does creatinine rise on Tren?', pl: 'Dlaczego kreatynina rośnie podczas Trenu?' }, a: { hu: 'Részben izomtömeg-gyarapodás (több izom = több kreatinin termelődés), részben azonban a Tren direkt nefrotoxicitása. eGFR-csökkenés és cystatin-C emelkedés is megjelenhet, ami direkt vesekárosodásra utal. Tartós kreatinin >1,4 mg/dL ciklus-megszakítás indikáció.', en: 'Partly muscle mass gain (more muscle = more creatinine production), but partly direct Tren nephrotoxicity. eGFR drop and cystatin-C rise can also appear, indicating direct renal damage. Persistent creatinine >1.4 mg/dL is an indication to stop the cycle.', pl: 'Częściowo przyrost masy mięśniowej (więcej mięśni = więcej kreatyniny), ale częściowo bezpośrednia nefrotoksyczność Trenu. Spadek eGFR i wzrost cystatyny-C również mogą się pojawić, wskazując na bezpośrednie uszkodzenie nerek. Trwała kreatynina >1,4 mg/dL to wskazanie do przerwania cyklu.' } },
      { q: { hu: 'Mi a "Tren-cough"?', en: 'What is Tren-cough?', pl: 'Co to jest Tren-cough?' }, a: { hu: 'Injekció utáni rövid, intenzív köhögő-roham, jellemzően Tren-Acetate után. Oka feltételezetten olajos depó pulmonáris mikroembólia. Veszélyes nem (de kellemetlen), és specifikusan a Trenre jellemző. Lassú injekciós technika csökkenti.', en: 'Short, intense coughing fit after injection, typical with Tren-Acetate. Cause is thought to be oil depot pulmonary microembolism. Not dangerous (but unpleasant), and specific to Tren. Slow injection technique reduces it.', pl: 'Krótki, intensywny atak kaszlu po iniekcji, typowy dla Tren-Acetate. Przyczyna prawdopodobnie mikroembolia płucna depozytu olejowego. Nie jest niebezpieczny (ale nieprzyjemny), specyficzny dla Trenu. Powolna technika iniekcji go zmniejsza.' } },
      { q: { hu: 'Lehet-e első ciklusként Tren?', en: 'Can Tren be a first cycle?', pl: 'Czy Tren może być pierwszym cyklem?' }, a: { hu: 'Soha. A Tren önállóan szexuális diszfunkciót, súlyos vérnyomás-emelkedést, vesekárosodást és pszichés instabilitást okozhat. Minden komoly forrás (Bhasin, Pope, Kanayama review) ellenjavalja első ciklusként; TRT-alap és bizonyított testosterone-tolerancia szükséges.', en: 'Never. Tren alone can cause sexual dysfunction, severe BP rise, renal damage, and psychiatric instability. All serious sources (Bhasin, Pope, Kanayama reviews) contraindicate it as a first cycle; TRT base and proven testosterone tolerance are required.', pl: 'Nigdy. Sam Tren może powodować dysfunkcje seksualne, poważny wzrost ciśnienia, uszkodzenie nerek i niestabilność psychiczną. Wszystkie poważne źródła (Bhasin, Pope, Kanayama) przeciwwskazują jako pierwszy cykl; wymagana baza TRT i udowodniona tolerancja testosteronu.' } },
    ],
    related: ['testosterone-info', 'anavar-info', 'winstrol-info', 'nandrolone-info', 'dianabol-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 0.6, medium: 1.5, high: 2.5 },
      unit: 'mg/hét',
      note: {
        hu: 'Tren Acetát (rövidebb-hatású észter) jellemzően 50 mg EOD = 175 mg/hét. Tren Enantát hosszabb-hatású, heti 1-2 injekció. A Tren erősebben anabolikus mint a Testosterone, de kardiovaszkuláris + renal-kockázata is jelentősen magasabb. Soha NE használj egyszerre Trent + Dianabol-t (extrém kardio-stressz).',
        en: 'Tren Acetate (shorter ester) typically 50 mg EOD = 175 mg/week. Tren Enanthate is longer-acting, 1-2 injections/week. Tren is more anabolic than Testosterone but cardiovascular + renal risk is significantly higher. Never combine Tren with Dianabol (extreme cardio stress).',
        pl: 'Tren Acetate (krótszy ester) zwykle 50 mg EOD = 175 mg/tydzień. Tren Enanthate dłużej działający, 1-2 iniekcje/tydzień. Tren jest bardziej anaboliczny niż testosteron, ale ryzyko sercowe + nerkowe znacznie wyższe. Nigdy nie łącz Trenu z Dianabolem.',
      },
    },
    bloodwork: {
      preCycle: {
        label:   { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing:  { hu: '2-4 héttel ciklus indítás előtt', en: '2-4 weeks before cycle start', pl: '2-4 tygodnie przed startem' },
        markers: { hu: 'Vesefunkció részletes (Kreatinin, eGFR, cystatin-C, mikroalbuminuria, BUN), 24h vérnyomás-Holter, lipid panel, májfunkció, hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolaktin), HbA1c, EKG.', en: 'Detailed renal function (Creatinine, eGFR, cystatin-C, microalbuminuria, BUN), 24h BP Holter, lipid panel, liver function, hormone panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, ECG.', pl: 'Szczegółowa czynność nerek (Kreatynina, eGFR, cystatyna-C, mikroalbuminuria, BUN), 24h Holter ciśnieniowy, lipidogram, próby wątrobowe, panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna), HbA1c, EKG.' },
        purpose: { hu: 'Renális és vérnyomás-baseline priorítása. Trenbolone nefrotoxikus és hipertenzív, ezért a vese- és vérnyomás-baseline kritikus döntési input.', en: 'Renal and blood pressure baseline are top priority. Trenbolone is nephrotoxic and hypertensive, so renal and BP baseline are critical decision inputs.', pl: 'Priorytet baseline nerek i ciśnienia. Trenbolon jest nefrotoksyczny i hipertensywny, więc baseline nerek i ciśnienia to krytyczne dane wejściowe.' },
      },
      midCycle: {
        label:   { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie cyklu' },
        timing:  { hu: '3 és 6 hét között, otthon napi vérnyomás-napló', en: 'Between week 3 and 6, daily home BP log', pl: 'Między 3 a 6 tygodniem, codzienny dziennik ciśnienia w domu' },
        markers: { hu: 'Kreatinin, eGFR, cystatin-C (renális prioritás), vérnyomás (otthon naponta 2x), prolaktin, lipid panel (HDL drasztikusan eshet), májfunkció.', en: 'Creatinine, eGFR, cystatin-C (renal priority), blood pressure (home twice daily), prolactin, lipid panel (HDL can crash), liver function.', pl: 'Kreatynina, eGFR, cystatyna-C (priorytet nerkowy), ciśnienie (w domu 2x dziennie), prolaktyna, lipidogram (HDL może runąć), próby wątrobowe.' },
        purpose: { hu: 'Vész-detektálás. Kreatinin >1,4 mg/dL, eGFR <70, vagy 24h-átlag vérnyomás >140/90 mellett ciklus-megszakítás indikált.', en: 'Emergency detection. Creatinine >1.4 mg/dL, eGFR <70, or 24h mean BP >140/90 indicates cycle interruption.', pl: 'Wykrywanie nagłych zmian. Kreatynina >1,4 mg/dL, eGFR <70 lub średnie 24h ciśnienie >140/90 to wskazanie do przerwania cyklu.' },
      },
      postCycle: {
        label:   { hu: 'PCT (Post-Cycle Therapy)', en: 'Post-cycle (PCT)', pl: 'Po cyklu (PCT)' },
        timing:  { hu: 'PCT 4. hetén és 8-12. hetén HPTA + vese-recovery ellenőrzés', en: 'Week 4 of PCT and week 8-12 HPTA plus renal recovery check', pl: 'Tydzień 4 PCT oraz tydzień 8-12 sprawdzenie powrotu HPTA i nerek' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, prolaktin, vesefunkció (kreatinin, eGFR, cystatin-C), lipid panel, vérnyomás-napló folytatása.', en: 'Total T, Free T, LH, FSH, E2, prolactin, renal function (creatinine, eGFR, cystatin-C), lipid panel, continued BP log.', pl: 'Total T, Free T, LH, FSH, E2, prolaktyna, czynność nerek (kreatynina, eGFR, cystatyna-C), lipidogram, kontynuowany dziennik ciśnienia.' },
        purpose: { hu: 'HPTA-helyreállítás és RENÁLIS recovery verifikálása. Ha kreatinin nem áll vissza 12 hét után, nefrológus konzultáció.', en: 'Verify HPTA recovery AND renal recovery. If creatinine does not normalize within 12 weeks, consult nephrologist.', pl: 'Weryfikacja powrotu HPTA ORAZ powrotu nerek. Jeśli kreatynina nie wraca w ciągu 12 tygodni, konsultacja nefrologiczna.' },
      },
      cruise: {
        label:   { hu: 'Cruise alatt (Tren-tartalmú cruise NEM javasolt)', en: 'On Cruise (Tren-containing cruise NOT recommended)', pl: 'Podczas Cruise (cruise z Trenem NIE zalecany)' },
        timing:  { hu: '4 hetente folyamatos monitoring, ha bárki mégis cruise-on tartja', en: 'Continuous monitoring every 4 weeks if anyone still cruises with it', pl: 'Ciągłe monitorowanie co 4 tygodnie, jeśli ktoś nadal cruisuje' },
        markers: { hu: 'Kreatinin, eGFR, cystatin-C, vérnyomás-Holter, prolaktin, lipid panel, májfunkció, HbA1c, EKG félévente.', en: 'Creatinine, eGFR, cystatin-C, BP Holter, prolactin, lipid panel, liver function, HbA1c, ECG every 6 months.', pl: 'Kreatynina, eGFR, cystatyna-C, Holter ciśnieniowy, prolaktyna, lipidogram, próby wątrobowe, HbA1c, EKG co pół roku.' },
        purpose: { hu: 'A Trenbolone-t cruise-fázisban tartani extrém kardiovaszkuláris és renális kockázattal jár; ezt a protokollt csak harm-reduction célból dokumentáljuk, nem ajánljuk.', en: 'Keeping Trenbolone in cruise carries extreme cardiovascular and renal risk; this protocol is documented for harm-reduction only, not recommended.', pl: 'Utrzymywanie Trenbolonu w cruise wiąże się z ekstremalnym ryzykiem sercowo-naczyniowym i nerkowym; protokół dokumentowany tylko dla redukcji szkód, nie zalecany.' },
      },
    },
  },

  // ===== 3. ANAVAR (AAS-info CORE, FDA-Rx oral, hepatic-priority) =====
  {
    id: 'anavar-info',
    name: 'Anavar (Oxandrolone)',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Oxandrolone, FDA-jóváhagyott orális AAS égési sérülésekre és HIV-cachexia kezelésére. Enyhén hepatotoxikus 17α-alkilált, gyakran "női-barát" szteroidnak nevezik.',
      en: 'Oxandrolone, FDA-approved oral AAS for burn injury and HIV cachexia. Mildly hepatotoxic 17α-alkylated, often called a female-friendly steroid.',
      pl: 'Oksandrolon, zatwierdzony przez FDA doustny AAS dla ofiar oparzeń i kacheksji HIV. Lekko hepatotoksyczny 17α-alkilowany, często nazywany sterydem przyjaznym kobietom.',
    },
    description: {
      hu: 'Az Anavar (Oxandrolone) egy DHT-származék 17α-alkilált orális AAS, amelyet 1964-ben Searle szintetizált. Anabolikus:androgén arány 320:24, ami magas izomtömeg-építő és alacsony androgén-mellékhatás profilt jelent. FDA-jóváhagyott klinikai indikációk: súlyos égési sérülések helyreállítása, HIV-asszociált cachexia, Turner-szindróma kis termet, idiopathiás osteoporosis. A 17α-alkiláció hepatotoxicitást okoz (ALT/AST emelkedés), de jelentősen enyhébb mértékben mint a Dianabol vagy Superdrol. Nem aromatizál, így nincs E2-mellékhatás. Sport-kontextusban WADA-tiltott.',
      en: 'Anavar (Oxandrolone) is a DHT-derivative 17α-alkylated oral AAS synthesized by Searle in 1964. Anabolic:androgenic ratio 320:24, indicating high muscle-building and low androgenic side-effect profile. FDA-approved clinical indications: severe burn recovery, HIV-associated cachexia, Turner syndrome short stature, idiopathic osteoporosis. The 17α-alkylation causes hepatotoxicity (ALT/AST rise), but significantly milder than Dianabol or Superdrol. Does not aromatize, no E2 side effects. WADA-banned in sports.',
      pl: 'Anavar (Oksandrolon) to doustny AAS pochodzący od DHT, 17α-alkilowany, zsyntetyzowany przez Searle w 1964 r. Stosunek anaboliczno-androgenny 320:24, wskazujący na wysoką budowę mięśni i niski profil androgenny. Zatwierdzone wskazania FDA: ciężkie oparzenia, kacheksja HIV, niski wzrost w zespole Turnera, idiopatyczna osteoporoza. 17α-alkilacja powoduje hepatotoksyczność (wzrost ALT/AST), ale znacznie łagodniejszą niż Dianabol czy Superdrol. Nie aromatyzuje, brak E2. Zakazany przez WADA w sporcie.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista, 17α-alkilált, nem aromatizál', en: 'AR agonist, 17α-alkylated, no aromatization', pl: 'Agonista AR, 17α-alkilowany, brak aromatyzacji' } },
      { label: { hu: 'Anabolikus:Androgén', en: 'Anabolic:Androgenic', pl: 'Anaboliczny:Androgenny' }, value: { hu: '320:24', en: '320:24', pl: '320:24' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '9 óra', en: '9 hours', pl: '9 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek' }, value: { hu: '1-2 óra (orális)', en: '1-2 h (oral)', pl: '1-2 h (doustnie)' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'FDA Rx (Oxandrin), WADA tiltott', en: 'FDA Rx (Oxandrin), WADA banned', pl: 'Rx FDA (Oxandrin), zakaz WADA' } },
    ],
    mechanism: {
      hu: 'DHT-származék AR-agonista szelektív izom- és csont-AR-aktivitással (alacsony bőr+prosztata-androgenicitás miatt a 320:24 anabolikus:androgén arány); 17α-alkiláció miatt orálisan biológiailag hozzáférhető; nem aromatizál E2-vé, nem konvertál DHT-ra.',
      en: 'DHT-derivative AR agonist with selective muscle and bone AR activity (low skin+prostate androgenicity explains the 320:24 anabolic:androgenic ratio); 17α-alkylation makes it orally bioavailable; does not aromatize to E2 and does not convert to DHT.',
      pl: 'Agonista AR pochodzący od DHT z selektywną aktywnością AR w mięśniach i kościach (niska androgenność skóry+prostaty wyjaśnia stosunek 320:24); 17α-alkilacja zapewnia biodostępność doustną; nie aromatyzuje do E2 i nie konwertuje do DHT.',
    },
    legalStatus: {
      hu: 'EU: vényköteles (ritka, Oxandrin import). HU: szigorúan Rx. USA: FDA-jóváhagyott Schedule III (DEA, Oxandrin). WADA tiltott egész évben.',
      en: 'EU: prescription (rare, Oxandrin import). HU: strictly Rx. USA: FDA-approved Schedule III (DEA, Oxandrin). WADA-banned year-round.',
      pl: 'UE: na receptę (rzadko, import Oxandrin). PL: ściśle Rx. USA: zatwierdzony przez FDA, Schedule III (DEA, Oxandrin). Zakazany przez WADA cały rok.',
    },
    onsetTime: '1-2 h (oral)',
    halfLife: '9 h',
    interactionsWith: ['warfarin', 'insulin', 'testosterone', 'tudca'],
    wadaStatus: 'banned',
    androgenicRatio: '320:24',
    bindingAffinity: {
      hu: 'AR-affinitás közepes; alacsony androgén potenciál (24% testosterone-hoz képest), magas anabolikus aktivitás.',
      en: 'AR affinity moderate; low androgenic potential (24% vs testosterone), high anabolic activity.',
      pl: 'Powinowactwo do AR umiarkowane; niski potencjał androgenny (24% vs testosteron), wysoka aktywność anaboliczna.',
    },
    detectionWindow: {
      hu: 'Oxandrolone-metabolitok vizeletből 3 hét. Rövid félélet és gyors clearance miatt rövidebb mint az injektált AAS-ek.',
      en: 'Oxandrolone metabolites urinary 3 weeks. Short half-life and fast clearance give shorter window than injected AAS.',
      pl: 'Metabolity oksandrolonu w moczu 3 tygodnie. Krótki okres półtrwania i szybki klirens dają krótsze okno niż wstrzykiwane AAS.',
    },
    benefits: [
      { hu: 'Izomtömeg és erőnövekedés cutting-fázisban (Sheffield-Moore 2006)', en: 'Lean mass and strength gain during cutting phase (Sheffield-Moore 2006)', pl: 'Przyrost masy i siły podczas cięcia (Sheffield-Moore 2006)' },
      { hu: 'Súlyos égési sérülések helyreállítása (FDA-jóváhagyott indikáció)', en: 'Severe burn injury recovery (FDA-approved indication)', pl: 'Regeneracja po ciężkich oparzeniach (wskazanie FDA)' },
      { hu: 'HIV-asszociált cachexia és testtömeg-vesztés visszafordítása', en: 'Reverses HIV-associated cachexia and weight loss', pl: 'Odwraca kacheksję HIV i utratę masy ciała' },
      { hu: 'Csontsűrűség javítása osteoporosis-ban', en: 'Improves bone density in osteoporosis', pl: 'Poprawia gęstość kości w osteoporozie' },
      { hu: 'Nem aromatizál: vízvisszatartás minimális, "száraz" megjelenés', en: 'Does not aromatize: minimal water retention, dry look', pl: 'Nie aromatyzuje: minimalna retencja wody, suchy wygląd' },
    ],
    quickStart: [
      { hu: 'Hepatikus prioritás: ALT/AST/GGT baseline KÖTELEZŐ ciklus előtt', en: 'Hepatic priority: ALT/AST/GGT baseline MANDATORY before cycle', pl: 'Priorytet wątrobowy: baseline ALT/AST/GGT OBOWIĄZKOWY przed cyklem' },
      { hu: 'TUDCA 500-1000 mg/nap kísérőként a 17α-alkiláció ellensúlyozására', en: 'TUDCA 500-1000 mg/day as companion to counter 17α-alkylation', pl: 'TUDCA 500-1000 mg/dzień jako wsparcie przeciw 17α-alkilacji' },
      { hu: '6-8 hétnél nem hosszabb futás, májfunkció 4 hetente', en: 'No longer than 6-8 weeks, liver function every 4 weeks', pl: 'Nie dłużej niż 6-8 tygodni, próby wątrobowe co 4 tygodnie' },
      { hu: 'Alkohol kerülése a teljes ciklus alatt (additív hepatotoxicitás)', en: 'Avoid alcohol throughout the cycle (additive hepatotoxicity)', pl: 'Unikać alkoholu przez cały cykl (addytywna hepatotoksyczność)' },
      { hu: 'Lipid panel monitor: HDL drasztikusan csökkenhet az Anavaron', en: 'Lipid panel monitoring: HDL can drop drastically on Anavar', pl: 'Monitoring lipidogramu: HDL może drastycznie spaść na Anavarze' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Orálisan 1-2 óra alatt felszívódik. Akut effekt minimális, szubjektíven enyhe pump-érzés edzésen.', en: 'Oral absorption in 1-2 h. Acute effect minimal, subjectively mild pump sensation during training.', pl: 'Wchłanianie doustne w 1-2 h. Efekt ostry minimalny, subiektywnie lekkie odczucie pompy na treningu.' } },
      { label: { hu: '4 hét', en: '4 weeks', pl: '4 tygodnie' }, body: { hu: 'Erőnövekedés és száraz lean mass gyarapodás 2-4 kg. Májfunkció (ALT/AST) monitor kötelező, HDL csökkenés várható.', en: 'Strength gain and dry lean mass increase 2-4 kg. Liver function (ALT/AST) monitoring mandatory, HDL drop expected.', pl: 'Wzrost siły i suchy przyrost masy 2-4 kg. Monitoring prób wątrobowych (ALT/AST) obowiązkowy, spodziewany spadek HDL.' } },
      { label: { hu: '8 hét', en: '8 weeks', pl: '8 tygodni' }, body: { hu: '8 hét felett nem javasolt a hepatotoxicitási profil miatt. Cutting-fázisú lean mass-megőrzés dokumentált, vaszkuláris, kemény megjelenés.', en: 'Beyond 8 weeks not advised due to hepatotoxicity profile. Cutting-phase lean mass preservation documented, vascular, hard look.', pl: 'Powyżej 8 tygodni nie zaleca się ze względu na profil hepatotoksyczny. Udokumentowane zachowanie masy w fazie cięcia, naczyniowy, twardy wygląd.' } },
    ],
    quality: {
      pure: [
        { hu: 'Oxandrin (BTG/Savient) eredeti Rx-tabletta, 2,5 mg vagy 10 mg', en: 'Oxandrin (BTG/Savient) original Rx tablet, 2.5 mg or 10 mg', pl: 'Oxandrin (BTG/Savient) oryginalna tabletka Rx, 2,5 mg lub 10 mg' },
        { hu: 'UGL-tabletta: HPLC-tesztelés kötelező, az Anavar a leggyakrabban hamisított AAS', en: 'UGL tablet: HPLC testing mandatory, Anavar is the most frequently faked AAS', pl: 'Tabletka UGL: testowanie HPLC obowiązkowe, Anavar jest najczęściej fałszowanym AAS' },
      ],
      caution: [
        { hu: 'ALT/AST 3x felső normál: ciklus-szünet, májfunkció normalizálódásig', en: 'ALT/AST 3x upper normal: cycle pause until liver function normalizes', pl: 'ALT/AST 3x górna granica normy: przerwa do normalizacji prób wątrobowych' },
        { hu: 'HDL drasztikus csökkenés (akár 30-50% baseline-hoz képest)', en: 'Drastic HDL drop (up to 30-50% vs baseline)', pl: 'Drastyczny spadek HDL (do 30-50% vs baseline)' },
        { hu: 'Hamisítás-kockázat: UGL Anavar gyakran Dianabol vagy Winstrol', en: 'Counterfeit risk: UGL Anavar often contains Dianabol or Winstrol', pl: 'Ryzyko podróbek: UGL Anavar często zawiera Dianabol lub Winstrol' },
      ],
      avoid: [
        { hu: 'Bármilyen máj-betegség (hepatitis B/C, fatty liver, ALT >2x normál)', en: 'Any liver disease (hepatitis B/C, fatty liver, ALT >2x normal)', pl: 'Jakakolwiek choroba wątroby (HBV/HCV, stłuszczenie, ALT >2x normy)' },
        { hu: 'Prosztata- vagy emlőkarcinóma (kontraindikált)', en: 'Prostate or breast carcinoma (contraindicated)', pl: 'Rak prostaty lub piersi (przeciwwskazane)' },
        { hu: 'Alkoholfogyasztás a ciklus alatt (additív hepatotoxicitás)', en: 'Alcohol consumption during cycle (additive hepatotoxicity)', pl: 'Spożywanie alkoholu podczas cyklu (addytywna hepatotoksyczność)' },
      ],
    },
    interactions: [
      { hu: 'Warfarin: INR jelentősen emelkedhet, antikoaguláns dózis-csökkentés', en: 'Warfarin: INR may significantly rise, anticoagulant dose reduction', pl: 'Warfaryna: INR może znacznie wzrosnąć, redukcja dawki antykoagulantu' },
      { hu: 'Inzulin/orális antidiabetikum: glükóz-érzékenység javul, dózis-revízió', en: 'Insulin/oral antidiabetic: glucose sensitivity improves, dose revision', pl: 'Insulina/doustny przeciwcukrzycowy: poprawia się wrażliwość, rewizja dawki' },
      { hu: 'Testosterone bázis: férfiaknál tipikus, hogy TRT-alaphoz adják az Anavart', en: 'Testosterone base: men typically add Anavar on top of TRT base', pl: 'Baza testosteronu: mężczyźni zwykle dodają Anavar na bazie TRT' },
      { hu: 'TUDCA / NAC: máj-támogatás 17α-alkilált AAS alatt', en: 'TUDCA / NAC: liver support during 17α-alkylated AAS use', pl: 'TUDCA / NAC: wsparcie wątroby podczas 17α-alkilowanego AAS' },
      { hu: 'Más hepatotoxikus AAS (Dianabol, Superdrol): kombináció kerülendő', en: 'Other hepatotoxic AAS (Dianabol, Superdrol): combination to avoid', pl: 'Inne hepatotoksyczne AAS (Dianabol, Superdrol): łączenie do unikania' },
    ],
    studies: [
      { title: 'Short-term oxandrolone administration stimulates net muscle protein synthesis in young men', authors: 'Sheffield-Moore M, Urban RJ, Wolf SE et al.', journal: 'J Clin Endocrinol Metab. 1999;84(8):2705-11.', pmid: '10443663' },
      { title: 'Oxandrolone in the treatment of HIV-associated weight loss in men', authors: 'Berger JR, Pall L, Hall CD et al.', journal: 'AIDS. 1996;10(14):1657-62.', pmid: '8970686' },
      { title: 'The anabolic agent oxandrolone improves wound healing and recovery in severely burned children', authors: 'Jeschke MG, Finnerty CC, Suman OE, Kulp G, Mlcak RP, Herndon DN.', journal: 'Ann Surg. 2007;246(3):351-60.', pmid: '17717437' },
      { title: 'Effect of oxandrolone on adult height in Turner syndrome', authors: 'Gault EJ, Perry RJ, Cole TJ et al.', journal: 'BMJ. 2011;342:d1980.', pmid: '21525094' },
      { title: 'Adverse health consequences of performance-enhancing drugs', authors: 'Pope HG Jr, Wood RI, Rogol A et al.', journal: 'Endocr Rev. 2014;35(3):341-75.', pmid: '24423981' },
      { title: 'Effects of an oral androgen on muscle and metabolism in older, community-dwelling men', authors: 'Schroeder ET, Singh A, Bhasin S, Storer TW et al.', journal: 'Am J Physiol Endocrinol Metab. 2003;284(1):E120-128.', pmid: '12388134' },
      { title: 'Effects of androgenic-anabolic steroids in athletes', authors: 'Hartgens F, Kuipers H.', journal: 'Sports Med. 2004;34(8):513-554.', pmid: '15233599' },
    ],
    faq: [
      { q: { hu: 'Tényleg biztonságos női használatra?', en: 'Is it really safe for female use?', pl: 'Czy naprawdę jest bezpieczny dla kobiet?' }, a: { hu: 'Az androgén arány alacsony (24% testosterone-hoz képest), így a virilizáció kockázata kisebb, mint más AAS-eknél. De NEM nulla: 10 mg/nap felett és 6 hét felett a virilizáció (mély hang, hirsutizmus, klitorisz-megnagyobbodás) IRREVERZIBILIS lehet. Bármilyen virilizáció-tünet azonnali ciklus-megszakítás.', en: 'The androgenic ratio is low (24% vs testosterone), so virilization risk is lower than with other AAS. But NOT zero: above 10 mg/day and beyond 6 weeks, virilization (deep voice, hirsutism, clitoral enlargement) may be IRREVERSIBLE. Any virilization symptom requires immediate cycle stop.', pl: 'Stosunek androgenny jest niski (24% vs testosteron), więc ryzyko wirylizacji jest mniejsze niż przy innych AAS. Ale NIE zerowe: powyżej 10 mg/dzień i ponad 6 tygodni wirylizacja (głęboki głos, hirsutyzm, powiększenie łechtaczki) może być NIEODWRACALNA. Każdy objaw wirylizacji wymaga natychmiastowego przerwania.' } },
      { q: { hu: 'Hepatotoxikusabb, mint a Dianabol?', en: 'Is it more hepatotoxic than Dianabol?', pl: 'Czy jest bardziej hepatotoksyczny niż Dianabol?' }, a: { hu: 'Nem, jelentősen enyhébb. Anavar és Dianabol egyaránt 17α-alkilált, de az Oxandrolone ALT/AST emelkedése klinikai vizsgálatokban (Sheffield-Moore, Jeschke) lényegesen kisebb. Mégis kötelező a májfunkció-monitorozás 4 hetente.', en: 'No, significantly milder. Anavar and Dianabol are both 17α-alkylated, but Oxandrolone ALT/AST elevation in clinical trials (Sheffield-Moore, Jeschke) is materially lower. Still, liver function monitoring every 4 weeks is mandatory.', pl: 'Nie, znacznie łagodniejszy. Anavar i Dianabol są oba 17α-alkilowane, ale wzrost ALT/AST przy oksandrolonie w badaniach klinicznych (Sheffield-Moore, Jeschke) jest istotnie mniejszy. Mimo to monitoring co 4 tygodnie jest obowiązkowy.' } },
      { q: { hu: 'Miért hamisítják olyan gyakran?', en: 'Why is it so frequently faked?', pl: 'Dlaczego jest tak często fałszowany?' }, a: { hu: 'Az Oxandrolone alapanyag drága, ezért az UGL labor-ok gyakran olcsóbb AAS-szel (Dianabol, Winstrol) helyettesítik a tablettában. Egyetlen biztos módszer: független HPLC-laboratóriumi tisztaság-tesztelés.', en: 'Oxandrolone raw material is expensive, so UGL labs often substitute it with cheaper AAS (Dianabol, Winstrol) in the tablet. The only reliable verification is independent HPLC laboratory purity testing.', pl: 'Surowiec oksandrolonu jest drogi, więc laboratoria UGL często zastępują go tańszymi AAS (Dianabol, Winstrol) w tabletce. Jedyna pewna metoda: niezależne testowanie HPLC w laboratorium.' } },
      { q: { hu: 'Szuppresszálja-e a természetes T-termelést?', en: 'Does it suppress natural T production?', pl: 'Czy hamuje naturalną produkcję T?' }, a: { hu: 'Igen, dózis-függően. 20-50 mg/nap mellett 6 hét után 40-60% HPTA-szuppresszió dokumentált. Férfiaknál PCT (Clomid/Nolvadex) szükséges; női használatnál nem releváns.', en: 'Yes, dose-dependently. At 20-50 mg/day after 6 weeks, 40-60% HPTA suppression is documented. PCT (Clomid/Nolvadex) is required for men; not relevant for female use.', pl: 'Tak, zależnie od dawki. Przy 20-50 mg/dzień po 6 tygodniach udokumentowana supresja HPTA 40-60%. PCT (Clomid/Nolvadex) wymagane u mężczyzn; nie dotyczy kobiet.' } },
      { q: { hu: 'Mennyivel csökken a HDL Anavar-on?', en: 'How much does HDL drop on Anavar?', pl: 'O ile spada HDL na Anavarze?' }, a: { hu: 'Hartgens & Kuipers 2004 (Sports Med) review szerint az orális 17α-alkilált AAS-ek akár 30-50%-os HDL-csökkenést okoznak 6 hét alatt. Az Anavar "milder" hírnévvel rendelkezik mint a Dianabol vagy Superdrol, DE a HDL-impact gyakran súlyosabb mint az injektált AAS-eknél (Testosterone, Nandrolone) a hepatikus first-pass + lipoprotein-lipáz aktivitás-emelés miatt. Recovery 8-12 hét OFF után, de baseline HDL alá nem csökkenjen újra a ciklus alatt. Tartós, ismételt használat ateroszklerózis-kockázat-emelő.', en: 'Per Hartgens & Kuipers 2004 (Sports Med) review, oral 17α-alkylated AAS can drop HDL by 30-50% within 6 weeks. Anavar has a "milder" reputation than Dianabol or Superdrol, BUT its HDL impact is often more severe than that of injected AAS (Testosterone, Nandrolone) due to hepatic first-pass plus lipoprotein lipase activation. Recovery in 8-12 weeks OFF, but never let it drop below baseline again on cycle. Long-term repeated use raises atherosclerosis risk.', pl: 'Według przeglądu Hartgens & Kuipers 2004 (Sports Med), doustne 17α-alkilowane AAS mogą obniżyć HDL o 30-50% w 6 tygodni. Anavar ma "łagodniejszą" reputację niż Dianabol czy Superdrol, ALE jego wpływ na HDL jest często poważniejszy niż wstrzykiwanych AAS (Testosteron, Nandrolon) z powodu pierwszego przejścia wątrobowego + aktywacji lipazy lipoproteinowej. Powrót w 8-12 tygodni OFF, ale nie powinien spadać poniżej baseline ponownie na cyklu. Długotrwałe powtarzane użycie zwiększa ryzyko miażdżycy.' } },
    ],
    related: ['testosterone-info', 'trenbolone-info', 'winstrol-info', 'nandrolone-info', 'dianabol-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 0.3, medium: 0.7, high: 1.2 },
      unit: 'mg/nap',
      note: {
        hu: 'Női 5-10 mg/nap (Alacsony tartomány), férfi 30-80 mg/nap. Max 8 hét ciklus a hepatotoxicitás miatt. Naponta 2-3x felosztott dózis a rövid felezési idő (9 óra) miatt. Az enyhébb 17α-alkilált AAS, de máj-monitoring akkor is kötelező.',
        en: 'Female 5-10 mg/day (Low range), male 30-80 mg/day. Max 8 week cycle due to hepatotoxicity. Split into 2-3 daily doses given the 9 h half-life. Among the milder 17α-alkylated AAS, but liver monitoring is still mandatory.',
        pl: 'Kobiety 5-10 mg/dzień (Niska), mężczyźni 30-80 mg/dzień. Maks. 8 tygodni z powodu hepatotoksyczności. 2-3 dawki dziennie z powodu okresu półtrwania 9 h.',
      },
    },
    bloodwork: {
      preCycle: {
        label:   { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing:  { hu: '2-4 héttel ciklus indítás előtt', en: '2-4 weeks before cycle start', pl: '2-4 tygodnie przed startem' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt és total), albumin, INR. Mellé: lipid panel (LDL/HDL/TG), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, vesefunkció, CBC.', en: 'Hepatic priority: ALT, AST, GGT, ALP, bilirubin (direct and total), albumin, INR. Plus: lipid panel (LDL/HDL/TG), hormone panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, renal function, CBC.', pl: 'Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia i całkowita), albumina, INR. Plus: lipidogram (LDL/HDL/TG), panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, czynność nerek, CBC.' },
        purpose: { hu: 'Máj-baseline a 17α-alkilált AAS legkritikusabb input-paramétere. Bármilyen meglévő ALT/AST emelkedés vagy zsírmáj-jel kontraindikáció.', en: 'Liver baseline is the most critical input for a 17α-alkylated AAS. Any pre-existing ALT/AST elevation or fatty-liver sign is a contraindication.', pl: 'Baseline wątroby to najbardziej krytyczny parametr wejściowy dla 17α-alkilowanego AAS. Każdy istniejący wzrost ALT/AST lub stłuszczenie to przeciwwskazanie.' },
      },
      midCycle: {
        label:   { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie cyklu' },
        timing:  { hu: '3-4. hetén, ciklus felénél', en: 'Week 3-4, midpoint of cycle', pl: 'Tydzień 3-4, w połowie cyklu' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, bilirubin. Mellé: lipid panel (HDL drasztikusan csökkenhet), E2, vérnyomás (otthon), HbA1c.', en: 'Hepatic priority: ALT, AST, GGT, bilirubin. Plus: lipid panel (HDL can drop drastically), E2, blood pressure (home), HbA1c.', pl: 'Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: lipidogram (HDL może drastycznie spaść), E2, ciśnienie (w domu), HbA1c.' },
        purpose: { hu: 'Vész-detektálás. ALT/AST >3x felső normál vagy bilirubin emelkedés ciklus-megszakítás indikáció. HDL <30 mg/dL kardiovaszkuláris riasztó.', en: 'Emergency detection. ALT/AST >3x upper normal or bilirubin elevation indicates cycle interruption. HDL <30 mg/dL is a cardiovascular alarm.', pl: 'Wykrywanie nagłych zmian. ALT/AST >3x górna granica normy lub wzrost bilirubiny to wskazanie do przerwania. HDL <30 mg/dL to alarm sercowo-naczyniowy.' },
      },
      postCycle: {
        label:   { hu: 'PCT (Post-Cycle Therapy)', en: 'Post-cycle (PCT)', pl: 'Po cyklu (PCT)' },
        timing:  { hu: 'PCT 4. hetén és 8-12. hetén HPTA + máj-recovery ellenőrzés', en: 'Week 4 of PCT and week 8-12 HPTA plus liver recovery check', pl: 'Tydzień 4 PCT oraz tydzień 8-12 sprawdzenie powrotu HPTA i wątroby' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, SHBG, hepatikus panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery).', en: 'Total T, Free T, LH, FSH, E2, SHBG, hepatic panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery).', pl: 'Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (ALT/AST/GGT/bilirubina recovery), lipidogram (recovery HDL).' },
        purpose: { hu: 'HPTA-helyreállítás és HEPATIKUS recovery verifikálása. Ha ALT/AST nem normalizálódik 12 hét után, hepatológus konzultáció.', en: 'Verify HPTA recovery AND hepatic recovery. If ALT/AST does not normalize within 12 weeks, consult hepatologist.', pl: 'Weryfikacja powrotu HPTA ORAZ powrotu wątroby. Jeśli ALT/AST nie normalizuje się w 12 tygodni, konsultacja hepatologiczna.' },
      },
      cruise: {
        label:   { hu: 'Cruise alatt (Anavar-tartalmú cruise atipikus)', en: 'On Cruise (Anavar-containing cruise atypical)', pl: 'Podczas Cruise (cruise z Anavarem nietypowy)' },
        timing:  { hu: '6 hetente monitoring, ha cruise-on tartja (Anavar tipikusan ciklikus)', en: 'Every 6 weeks if cruising (Anavar is typically cyclical)', pl: 'Co 6 tygodni jeśli cruise (Anavar zwykle jest cykliczny)' },
        markers: { hu: 'Hepatikus prioritás: ALT/AST/GGT/bilirubin, lipid panel, Total T, E2, HbA1c, vérnyomás napló.', en: 'Hepatic priority: ALT/AST/GGT/bilirubin, lipid panel, Total T, E2, HbA1c, BP log.', pl: 'Priorytet wątrobowy: ALT/AST/GGT/bilirubina, lipidogram, Total T, E2, HbA1c, dziennik ciśnienia.' },
        purpose: { hu: 'Az Anavar-cruise nem standard (a legtöbb protokoll 6-8 hetes ciklusban használja). Ha mégis tartós használat, a hepatikus markerek folyamatos monitorozása nem kerülhető meg.', en: 'Anavar cruising is not standard (most protocols use it in 6-8 week cycles). If long-term use does occur, continuous hepatic marker monitoring is unavoidable.', pl: 'Cruise z Anavarem nie jest standardem (większość protokołów używa w cyklach 6-8 tygodni). Jeśli jednak długotrwałe użycie, ciągły monitoring markerów wątrobowych jest nieunikniony.' },
      },
    },
  },

  // ===== 4. SUPERDROL (Methasterone) =====
  {
    id: 'superdrol',
    name: 'Superdrol',
    image: null,
    accentColor: '#a78bfa',
    tagColor: 'rgba(167,139,250,0.18)',
    shortDesc: {
      hu: 'Methasterone (2α,17α-dimetil-DHT-származék). Erős orális prohormon, rapid izomtömeg-növelés magas hepatotoxicitási kockázattal.',
      en: 'Methasterone (2α,17α-dimethyl DHT derivative). Potent oral prohormone delivering rapid muscle gains with high hepatotoxicity risk.',
      pl: 'Methasterone (pochodna 2α,17α-dimetylo-DHT). Silny doustny prohormon, szybkie przyrosty masy z wysokim ryzykiem hepatotoksyczności.',
    },
    description: {
      hu: 'A Superdrol (kémiailag Methasterone, 2α,17α-dimetil-17β-hidroxi-5α-androsztán-3-on) eredetileg 1956-ban szintetizált anabolikus szteroid, amelyet 2005-ben Designer Supplements LLC dietary supplementként hozott forgalomba az USA-ban. A FDA 2012-ben (DASCA, Designer Anabolic Steroid Control Act) Schedule III-as kontrollált szerré minősítette és kivonta a supplement piacról. Erős AR-agonista (anabolikus 400, androgén 20 referencia tesztoszteronhoz képest), 17α-metilezett orális vegyület, amely a májon át extrém terheléssel halad. Az irodalom több súlyos cholesztatikus máj-jaundice esetet dokumentál egészséges fiatal férfiakon 2-6 hetes használat után.',
      en: 'Superdrol (chemically Methasterone, 2α,17α-dimethyl-17β-hydroxy-5α-androstan-3-one) is an anabolic steroid originally synthesized in 1956, marketed in the US in 2005 by Designer Supplements LLC as a dietary supplement. The FDA classified it as Schedule III under the 2012 Designer Anabolic Steroid Control Act (DASCA), removing it from the supplement market. It is a strong AR agonist (anabolic 400, androgenic 20 vs testosterone reference) and a 17α-methylated oral compound, putting extreme load on the liver. The literature documents multiple severe cholestatic jaundice cases in healthy young men after 2-6 weeks of use.',
      pl: 'Superdrol (chemicznie Methasterone, 2α,17α-dimetylo-17β-hydroksy-5α-androstan-3-on) to steryd anaboliczny zsyntetyzowany w 1956 r., wprowadzony do sprzedaży w USA w 2005 r. przez Designer Supplements LLC jako suplement diety. FDA w 2012 r. (DASCA) zaklasyfikowała go jako kontrolowany III klasy, usuwając z rynku suplementów. To silny agonista AR (anaboliczny 400, androgenny 20 vs testosteron) i doustny związek 17α-metylowany, niezwykle obciążający wątrobę. Literatura dokumentuje liczne przypadki ciężkiej cholestatycznej żółtaczki u zdrowych młodych mężczyzn po 2-6 tygodniach stosowania.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista (anabolikus 400 / androgén 20)', en: 'AR agonist (anabolic 400 / androgenic 20)', pl: 'Agonista AR (anaboliczny 400 / androgenny 20)' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '6-8 óra', en: '6-8 hours', pl: '6-8 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '7-14 nap (izomtömeg)', en: '7-14 days (muscle mass)', pl: '7-14 dni (masa)' } },
      { label: { hu: 'Anabolikus arány', en: 'Anabolic ratio', pl: 'Stosunek anaboliczny' }, value: { hu: '400:20', en: '400:20', pl: '400:20' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: Schedule III (2012 DASCA). EU: ellenőrzött, illegális vény nélkül.', en: 'USA: Schedule III (2012 DASCA). EU: controlled, illegal without prescription.', pl: 'USA: Schedule III (2012 DASCA). UE: kontrolowany, nielegalny bez recepty.' } },
    ],
    mechanism: {
      hu: 'Az AR-receptoron közvetlen agonista. 2α-metil-csoport gátolja az aromatázt (NEM konvertál ösztrogénné), 17α-metil-csoport miatt orálisan bioavailable, de hepatikus first-pass alatt cholesztatikus stresszt okoz.',
      en: 'Direct AR receptor agonist. The 2α-methyl group blocks aromatization (no estrogen conversion); the 17α-methyl group enables oral bioavailability but causes cholestatic stress during hepatic first-pass metabolism.',
      pl: 'Bezpośredni agonista receptora AR. Grupa 2α-metylowa blokuje aromatyzację (brak konwersji do estrogenu); grupa 17α-metylowa zapewnia doustną biodostępność, ale powoduje stres cholestatyczny w pierwszym przejściu wątrobowym.',
    },
    legalStatus: {
      hu: 'USA: Schedule III kontrollált szer (DASCA 2012). EU: kontrollált anabolikus szteroid, vény nélkül illegális, HU/PL piacon nem értékesíthető. WADA: tiltott versenysportban.',
      en: 'USA: Schedule III controlled substance (DASCA 2012). EU: controlled anabolic steroid, illegal without prescription, not sold in HU/PL retail. WADA: banned in competitive sport.',
      pl: 'USA: Schedule III kontrolowana substancja (DASCA 2012). UE: kontrolowany steryd anaboliczny, nielegalny bez recepty, niedostępny w sprzedaży detalicznej HU/PL. WADA: zakazany.',
    },
    onsetTime: '7-14 days (muscle mass)',
    halfLife: '6-8 h',
    halfLifeActive: '6-8 h (parent compound, no active metabolite)',
    interactionsWith: ['alcohol', 'NSAIDs', 'paracetamol', 'liver-stress hepatotoxins'],
    wadaStatus: 'banned',
    androgenicRatio: '400:20',
    bindingAffinity: {
      hu: 'Erős androgén-receptor agonista, ~5x erősebb kötés mint a tesztoszteron in vitro (Stilger 2009 in vitro adat).',
      en: 'Strong androgen receptor agonist, ~5x stronger binding than testosterone in vitro (Stilger 2009 in vitro data).',
      pl: 'Silny agonista receptora androgenowego, ~5x silniejsze wiązanie niż testosteron in vitro (dane Stilger 2009).',
    },
    detectionWindow: {
      hu: '4-6 hét vizelet (metilezett metabolitok: 17α-metil-5α-androsztán-3α-ol-17β-on, detektálható WADA-akkreditált laborban).',
      en: '4-6 weeks urine (methylated metabolites: 17α-methyl-5α-androstan-3α-ol-17β-one, detectable in WADA-accredited labs).',
      pl: '4-6 tygodni mocz (metylowane metabolity: 17α-metylo-5α-androstan-3α-ol-17β-on, wykrywalne w laboratoriach akredytowanych WADA).',
    },
    benefits: [
      { hu: 'Gyors izomtömeg-növekedés (4-7 kg fat-free mass 4 hét alatt egyéni jelentések szerint)', en: 'Rapid muscle mass gain (4-7 kg fat-free mass in 4 weeks per anecdotal reports)', pl: 'Szybki przyrost masy mięśniowej (4-7 kg w 4 tygodnie wg doniesień)' },
      { hu: 'Erőteljes erő-növekedés, bench press és deadlift PR-ok', en: 'Strong strength gains, bench press and deadlift PRs', pl: 'Silne przyrosty siły, PR w bench press i martwym ciągu' },
      { hu: 'Nincs aromatizáció, így nincs ösztrogén-mellékhatás (vízretenció, gyno)', en: 'No aromatization, hence no estrogenic side effects (water retention, gyno)', pl: 'Brak aromatyzacji, więc brak skutków estrogennych (retencja wody, ginekomastia)' },
      { hu: 'Száraz, vaszkuláris megjelenés (cutting cycle alkalmas)', en: 'Dry, vascular look (suitable for cutting cycles)', pl: 'Suchy, naczyniowy wygląd (odpowiedni do cyklu redukcyjnego)' },
    ],
    quickStart: [
      { hu: 'Edukatív kontextus: a Superdrol használata Magyarországon és EU-ban illegális vény nélkül', en: 'Educational context: Superdrol use is illegal in Hungary and the EU without prescription', pl: 'Kontekst edukacyjny: stosowanie Superdrolu jest nielegalne w Polsce i UE bez recepty' },
      { hu: 'Ha mégis használnák: max 4 hét ciklus, NIKADA tovább, hepatotoxicitás kumulatív', en: 'If used anyway: max 4 week cycle, never longer, hepatotoxicity is cumulative', pl: 'Jeśli mimo to: maks. 4-tygodniowy cykl, nigdy dłużej, hepatotoksyczność kumulatywna' },
      { hu: 'Máj-támogató (TUDCA 500-750 mg/nap, NAC 1200 mg/nap) kötelező a teljes ciklus alatt', en: 'Liver support (TUDCA 500-750 mg/day, NAC 1200 mg/day) is mandatory throughout the cycle', pl: 'Wsparcie wątroby (TUDCA 500-750 mg/dzień, NAC 1200 mg/dzień) obowiązkowe przez cały cykl' },
      { hu: 'PCT (Clomid + Nolvadex 4-6 hét) szükséges a HPTA-helyreállításhoz', en: 'PCT (Clomid + Nolvadex 4-6 weeks) is required for HPTA recovery', pl: 'PCT (Clomid + Nolvadex 4-6 tygodni) wymagane dla powrotu HPTA' },
    ],
    expectations: [
      { label: { hu: 'Első hét', en: 'Week 1', pl: 'Tydzień 1' }, body: { hu: 'Akut hatás minimális. Néhányan enyhe agresszió-növekedést, "pumpát" jeleznek edzés közben.', en: 'Acute effect minimal. Some report mild aggression increase and stronger pump during training.', pl: 'Efekt ostry minimalny. Niektórzy zgłaszają lekki wzrost agresji i silniejszą pompę.' } },
      { label: { hu: '2-3. hét', en: 'Week 2-3', pl: 'Tydzień 2-3' }, body: { hu: 'Erő-növekedés markáns (10-20% 1RM), izomtömeg gyors száraz növekedéssel. Lipid panel HDL gyors esése (>30% csökkenés dokumentált).', en: 'Strength gain pronounced (10-20% 1RM), dry rapid muscle mass increase. Lipid panel HDL crashes rapidly (>30% drop documented).', pl: 'Wzrost siły wyraźny (10-20% 1RM), szybki suchy przyrost masy. Lipidogram HDL gwałtownie spada (udokumentowany >30%).' } },
      { label: { hu: '4. hét vége', en: 'End of week 4', pl: 'Koniec tygodnia 4' }, body: { hu: 'Maximum izomtömeg-növekedés, de a hepatotoxicitás gyakran ekkor manifesztálódik (ALT/AST 3-5x emelkedés, ritkán cholesztatikus jaundice). KÖTELEZŐ ciklus-megszakítás.', en: 'Peak muscle mass gain, but hepatotoxicity often manifests now (ALT/AST 3-5x elevation, rarely cholestatic jaundice). MANDATORY cycle termination.', pl: 'Szczytowy przyrost masy, ale hepatotoksyczność często manifestuje się teraz (ALT/AST 3-5x wzrost, rzadko cholestatyczna żółtaczka). OBOWIĄZKOWE zakończenie cyklu.' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta fehér por vagy kapszula', en: 'Pure white powder or capsule', pl: 'Czysty biały proszek lub kapsułka' },
        { hu: 'Független HPLC-tesztelt forrás (UGL piacon gyakori a hamisítás)', en: 'Independent HPLC-tested source (UGL market frequently faked)', pl: 'Niezależnie testowany HPLC (rynek UGL często fałszowany)' },
      ],
      caution: [
        { hu: 'Hepatotoxicitás (ALT/AST emelkedés, ritkán cholesztatikus jaundice)', en: 'Hepatotoxicity (ALT/AST elevation, rarely cholestatic jaundice)', pl: 'Hepatotoksyczność (wzrost ALT/AST, rzadko cholestatyczna żółtaczka)' },
        { hu: 'Lipid-zavar: HDL drasztikus csökkenés (kardiovaszkuláris kockázat)', en: 'Lipid disturbance: drastic HDL drop (cardiovascular risk)', pl: 'Zaburzenia lipidowe: drastyczny spadek HDL (ryzyko sercowo-naczyniowe)' },
        { hu: 'Pszichológiai: agresszió, irritáció, anxietás', en: 'Psychological: aggression, irritability, anxiety', pl: 'Psychologiczne: agresja, drażliwość, lęk' },
        { hu: 'Letargia, alvászavar, libidó-ingadozás', en: 'Lethargy, sleep disturbance, libido fluctuation', pl: 'Letarg, zaburzenia snu, wahania libido' },
      ],
      avoid: [
        { hu: 'Bármilyen meglévő máj-zavar (zsírmáj, hepatitis, ALT/AST emelt baseline) abszolút kontraindikáció', en: 'Any pre-existing liver disorder (fatty liver, hepatitis, elevated ALT/AST baseline) is an absolute contraindication', pl: 'Każde istniejące zaburzenie wątroby (stłuszczenie, zapalenie, podwyższony baseline ALT/AST) to bezwzględne przeciwwskazanie' },
        { hu: 'Alkohol, NSAID-ok, paracetamol egyidejű használata szigorúan tilos', en: 'Concurrent alcohol, NSAIDs, paracetamol strictly forbidden', pl: 'Jednoczesne stosowanie alkoholu, NLPZ, paracetamolu surowo zabronione' },
        { hu: 'Kardiovaszkuláris kockázat (családi anamnézis, magas LDL) abszolút kontraindikáció', en: 'Cardiovascular risk (family history, high LDL) is an absolute contraindication', pl: 'Ryzyko sercowo-naczyniowe (wywiad rodzinny, wysokie LDL) to bezwzględne przeciwwskazanie' },
      ],
    },
    interactions: [
      { hu: 'Más 17α-alkilált AAS (Dianabol, Anadrol, Winstrol) egyidejű használata extrém hepatotoxikus', en: 'Concurrent use of other 17α-alkylated AAS (Dianabol, Anadrol, Winstrol) is extremely hepatotoxic', pl: 'Jednoczesne stosowanie innych 17α-alkilowanych AAS (Dianabol, Anadrol, Winstrol) jest skrajnie hepatotoksyczne' },
      { hu: 'Testosterone-base hozzáadása csökkenti az endogén T-szuppresszió tüneteit', en: 'Adding a Testosterone base reduces endogenous T suppression symptoms', pl: 'Dodanie bazy testosteronu zmniejsza objawy supresji endogennego T' },
      { hu: 'PCT (Clomid 50mg/nap + Nolvadex 20mg/nap, 4 hét) kötelező', en: 'PCT (Clomid 50mg/day + Nolvadex 20mg/day, 4 weeks) is mandatory', pl: 'PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4 tygodnie) obowiązkowe' },
      { hu: 'Statin-terápia esetén kontraindikált (kombinált hepatotoxicitás)', en: 'Contraindicated with statin therapy (combined hepatotoxicity)', pl: 'Przeciwwskazany przy terapii statynami (skumulowana hepatotoksyczność)' },
    ],
    studies: [
      { title: 'Severe cholestatic hepatitis caused by Methasterone (Superdrol)', authors: 'Singh V, Rudraraju M, Carey EJ et al.', journal: 'Dig Dis Sci. 2009;54(12):2786-2789.', pmid: '19672708' },
      { title: 'Methasterone-associated cholestatic liver injury: clinical and biochemical characteristics', authors: 'Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.', journal: 'Clin Gastroenterol Hepatol. 2008;6(2):255-258.', pmid: '18243788' },
      { title: 'Designer steroids: over-the-counter supplements and their androgenic component', authors: 'Kazlauskas R.', journal: 'Mol Cell Endocrinol. 2010;316(1):2-7.', pmid: '19772889' },
      { title: 'Acute liver injury induced by Methasterone-containing dietary supplement', authors: 'Jasiurkowski B, Raj J, Wisinger D et al.', journal: 'Dig Dis Sci. 2006;51(6):1093-1096.', pmid: '16865576' },
    ],
    faq: [
      { q: { hu: 'Miért tilos a Superdrol az FDA-nál?', en: 'Why is Superdrol banned by the FDA?', pl: 'Dlaczego Superdrol jest zakazany przez FDA?' }, a: { hu: 'A FDA-hoz beérkezett több cholesztatikus jaundice-eset 2008-2011 között (Singh 2009, Shah 2008, Jasiurkowski 2006) bizonyította a Methasterone akut hepatotoxicitását egészséges fiatal férfiakon. A 2012-es DASCA-tv. Schedule III-as kontrollált szerré minősítette.', en: 'Multiple cholestatic jaundice cases reported to the FDA between 2008-2011 (Singh 2009, Shah 2008, Jasiurkowski 2006) proved Methasterone acute hepatotoxicity in healthy young men. The 2012 DASCA law classified it as Schedule III controlled substance.', pl: 'Liczne przypadki cholestatycznej żółtaczki zgłoszone FDA w latach 2008-2011 (Singh 2009, Shah 2008, Jasiurkowski 2006) udowodniły ostrą hepatotoksyczność Methasterone u zdrowych młodych mężczyzn. Ustawa DASCA z 2012 r. zaklasyfikowała go jako Schedule III.' } },
      { q: { hu: 'Mi különbözteti meg az Anavar-tól?', en: 'How does it differ from Anavar?', pl: 'Czym różni się od Anavaru?' }, a: { hu: 'Mindkettő 17α-alkilált orális AAS, de a Superdrol kétszeresen metilezett (2α + 17α), ami extrém AR-affinitást ad, viszont a hepatotoxicitás ~10x magasabb klinikai esetszinten az Anavar-hoz képest. Az Anavar 320:24 anabolikus:androgén arány, a Superdrol 400:20.', en: 'Both are 17α-alkylated oral AAS, but Superdrol is doubly methylated (2α + 17α), giving extreme AR affinity but ~10x higher hepatotoxicity in clinical reports vs Anavar. Anavar has 320:24 anabolic:androgenic, Superdrol 400:20.', pl: 'Oba to 17α-alkilowane doustne AAS, ale Superdrol jest podwójnie metylowany (2α + 17α), co daje skrajne powinowactwo AR, ale ~10x wyższą hepatotoksyczność w doniesieniach klinicznych vs Anavar. Anavar ma stosunek 320:24, Superdrol 400:20.' } },
      { q: { hu: 'Lehet-e Cruise-on tartani?', en: 'Can it be cruised on?', pl: 'Czy można go używać w cruise?' }, a: { hu: 'NEM. A 17α-metil-csoport kumulatív hepatotoxicitása miatt a Superdrol cruise tilos. Maximum 4 hét ciklus, utána minimum 12 hét OFF (a máj-recovery-hez).', en: 'NO. Due to cumulative hepatotoxicity from the 17α-methyl group, Superdrol cruising is forbidden. Maximum 4 week cycle, then minimum 12 weeks OFF (for liver recovery).', pl: 'NIE. Z powodu kumulatywnej hepatotoksyczności grupy 17α-metylowej, cruise z Superdrolem jest zabroniony. Maks. 4-tygodniowy cykl, potem min. 12 tygodni OFF.' } },
      { q: { hu: 'Mit jelez, ha az ALT/AST 3x felső normál?', en: 'What does ALT/AST 3x upper normal indicate?', pl: 'Co oznacza ALT/AST 3x górnej normy?' }, a: { hu: 'Jelentős hepatocelluláris károsodás. Ciklus AZONNALI megszakítása, TUDCA dózisemelés 1000 mg/nap, NAC 1800 mg/nap, hidratáció, és 2 héttel későbbi újratesztelés. Ha nem normalizálódik vagy bilirubin emelkedik, hepatológus konzultáció.', en: 'Significant hepatocellular damage. IMMEDIATE cycle interruption, TUDCA dose increase to 1000 mg/day, NAC 1800 mg/day, hydration, retest in 2 weeks. If not normalized or bilirubin rises, consult hepatologist.', pl: 'Znaczące uszkodzenie hepatocelularne. NATYCHMIASTOWE przerwanie cyklu, zwiększenie TUDCA do 1000 mg/dzień, NAC 1800 mg/dzień, nawodnienie, ponowny test za 2 tygodnie. Jeśli nie normalizuje się lub bilirubina rośnie, konsultacja hepatologiczna.' } },
    ],
    related: ['1-andro', 'methylstenbolone', 'anavar-info', 'dianabol-info', 'testosterone-info'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 10, medium: 20, high: 30 },
      unit: 'mg/nap',
      note: {
        hu: 'Maximum 4 hét ciklus, NIKADA tovább. TUDCA 500-750 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt. ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4 hét) kötelező.',
        en: 'Maximum 4 week cycle, never longer. TUDCA 500-750 mg/day + NAC 1200 mg/day throughout. ALT/AST 3x upper normal = IMMEDIATE stop. PCT (Clomid + Nolvadex 4 weeks) mandatory.',
        pl: 'Maks. 4-tygodniowy cykl, nigdy dłużej. TUDCA 500-750 mg/dzień + NAC 1200 mg/dzień. ALT/AST 3x normy = natychmiastowe zatrzymanie. PCT obowiązkowe.',
      },
    },
    bloodwork: {
      preCycle: {
        label:   { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing:  { hu: '2-3 héttel ciklus indítás előtt', en: '2-3 weeks before cycle start', pl: '2-3 tygodnie przed startem' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt + total), albumin, INR. Mellé: lipid panel (LDL/HDL/TG), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, vesefunkció.', en: 'Hepatic priority: ALT, AST, GGT, ALP, bilirubin (direct + total), albumin, INR. Plus: lipid panel (LDL/HDL/TG), hormone panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, renal function.', pl: 'Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina, INR. Plus: lipidogram, panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, czynność nerek.' },
        purpose: { hu: 'Hepatikus baseline kritikus. Bármilyen meglévő máj-zavar (zsírmáj, ALT/AST baseline emelt) abszolút kontraindikáció.', en: 'Hepatic baseline is critical. Any pre-existing liver disorder (fatty liver, elevated ALT/AST baseline) is an absolute contraindication.', pl: 'Baseline wątroby krytyczny. Każde istniejące zaburzenie wątroby (stłuszczenie, podwyższony baseline) to bezwzględne przeciwwskazanie.' },
      },
      midCycle: {
        label:   { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie cyklu' },
        timing:  { hu: '2. hét végén (a 4 hetes ciklus felénél)', en: 'End of week 2 (midpoint of 4-week cycle)', pl: 'Koniec tygodnia 2 (połowa 4-tygodniowego cyklu)' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, bilirubin. Mellé: lipid panel (HDL drasztikusan csökkenhet), E2, vérnyomás (otthon, naponta).', en: 'Hepatic priority: ALT, AST, GGT, bilirubin. Plus: lipid panel (HDL can drop drastically), E2, blood pressure (home, daily).', pl: 'Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: lipidogram (HDL może drastycznie spaść), E2, ciśnienie (dom, codziennie).' },
        purpose: { hu: 'Vész-detektálás. ALT/AST >3x felső normál vagy bilirubin emelkedés AZONNALI ciklus-megszakítás indikáció. HDL <25 mg/dL kardiovaszkuláris riasztó.', en: 'Emergency detection. ALT/AST >3x upper normal or bilirubin elevation indicates IMMEDIATE cycle interruption. HDL <25 mg/dL is a cardiovascular alarm.', pl: 'Wykrywanie nagłych zmian. ALT/AST >3x górnej normy lub wzrost bilirubiny to wskazanie do NATYCHMIASTOWEGO przerwania. HDL <25 mg/dL to alarm sercowo-naczyniowy.' },
      },
      postCycle: {
        label:   { hu: 'PCT (Post-Cycle Therapy)', en: 'Post-cycle (PCT)', pl: 'Po cyklu (PCT)' },
        timing:  { hu: 'PCT 4. hetén + 8-12. hetén HPTA + máj-recovery teljes ellenőrzés', en: 'PCT week 4 + week 8-12 full HPTA and liver recovery check', pl: 'Tydzień 4 PCT + tydzień 8-12 pełne sprawdzenie HPTA i wątroby' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, SHBG, hepatikus panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.', en: 'Total T, Free T, LH, FSH, E2, SHBG, hepatic panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.', pl: 'Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (recovery), lipidogram (recovery HDL), CBC.' },
        purpose: { hu: 'HPTA-helyreállítás és HEPATIKUS recovery verifikálása. Ha ALT/AST nem normalizálódik 12 hét után, hepatológus konzultáció kötelező.', en: 'Verify HPTA recovery AND hepatic recovery. If ALT/AST does not normalize within 12 weeks, hepatologist consultation is mandatory.', pl: 'Weryfikacja powrotu HPTA ORAZ powrotu wątroby. Jeśli ALT/AST nie normalizuje się w 12 tygodni, konsultacja hepatologiczna obowiązkowa.' },
      },
      cruise: null,
    },
  },

  // ===== 5. 1-ANDRO (1-DHEA, 1-Androstenedione) =====
  {
    id: '1-andro',
    name: '1-Andro',
    image: null,
    accentColor: '#a78bfa',
    tagColor: 'rgba(167,139,250,0.18)',
    shortDesc: {
      hu: '1-DHEA-prohormon, ami 1-Testosterone-é (DHT-származékká) konvertálódik. Enyhébb hepatikus terhelés mint a Superdrol, de szignifikáns lipid-zavar.',
      en: '1-DHEA prohormone that converts to 1-Testosterone (DHT-derivative). Milder hepatic load than Superdrol, but significant lipid disturbance.',
      pl: 'Prohormon 1-DHEA konwertujący do 1-Testosteronu (pochodna DHT). Łagodniejsze obciążenie wątroby niż Superdrol, ale istotne zaburzenia lipidów.',
    },
    description: {
      hu: 'Az 1-Andro (1-DHEA, 1-Androsten-3β-ol-17-on) egy prohormon, amely a szervezetben két lépésben (3β-HSD enzim) 1-Testosterone (1-Test, DHT-szerű androgén) hatóanyaggá konvertálódik. Az 1-Test nem aromatizálódik ösztrogénné, így dry, slimáris izomtömeg-növekedést okoz. Az USA-ban a DASCA 2014 előtt OTC dietary supplement-ként árulták (Hi-Tech Pharmaceuticals 1-Andro), majd kontrollált szerré minősítették, de "gray area" termékek továbbra is elérhetők. Anekdotikus jelentések szerint az izomtömeg-növekedés szerényebb mint a Superdrol-é, de a hepatotoxicitás is enyhébb.',
      en: '1-Andro (1-DHEA, 1-Androsten-3β-ol-17-one) is a prohormone that converts in the body in two steps (3β-HSD enzyme) to 1-Testosterone (1-Test, a DHT-like androgen). 1-Test does not aromatize to estrogen, producing dry, lean muscle gains. In the US, it was sold OTC as a dietary supplement before DASCA 2014 (e.g. Hi-Tech Pharmaceuticals 1-Andro), then reclassified as controlled, though "gray area" products remain available. Anecdotal reports suggest muscle gains are more modest than Superdrol but hepatotoxicity is also milder.',
      pl: '1-Andro (1-DHEA, 1-Androsten-3β-ol-17-on) to prohormon konwertujący w organizmie w dwóch krokach (enzym 3β-HSD) do 1-Testosteronu (1-Test, androgenu podobnego do DHT). 1-Test nie aromatyzuje do estrogenu, dając suche, beztłuszczowe przyrosty masy. W USA był sprzedawany OTC jako suplement diety przed DASCA 2014 (np. Hi-Tech Pharmaceuticals 1-Andro), potem przeklasyfikowany jako kontrolowany, choć produkty "szarej strefy" pozostają dostępne. Anegdotycznie przyrosty masy są skromniejsze niż przy Superdrolu, ale hepatotoksyczność łagodniejsza.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Prohormon → 1-Testosterone (DHT-szerű AR-agonista)', en: 'Prohormone → 1-Testosterone (DHT-like AR agonist)', pl: 'Prohormon → 1-Testosteron (agonista AR podobny do DHT)' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '~9 óra (1-Test aktív metabolit)', en: '~9 hours (1-Test active metabolite)', pl: '~9 godzin (aktywny metabolit 1-Test)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '10-14 nap', en: '10-14 days', pl: '10-14 dni' } },
      { label: { hu: 'Anabolikus arány', en: 'Anabolic ratio', pl: 'Stosunek anaboliczny' }, value: { hu: '200:200 (1-Test mint aktív)', en: '200:200 (1-Test as active)', pl: '200:200 (1-Test jako aktywny)' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: DASCA 2014 kontrollált. EU: nem szabályozott egységesen, HU/PL piacon nem értékesíthető vény nélkül.', en: 'USA: DASCA 2014 controlled. EU: not uniformly regulated; not sold in HU/PL without prescription.', pl: 'USA: kontrolowany od DASCA 2014. UE: brak jednolitej regulacji; w HU/PL niedostępny bez recepty.' } },
    ],
    mechanism: {
      hu: 'Az 1-DHEA prohormont a szervezet 3β-HSD enzimmel 1-Testosterone-é konvertálja, amely közvetlen AR-agonista. Nem aromatizálódik (1-pozícióban dupla kötés blokkolja az aromatáz hozzáférést).',
      en: 'The body converts 1-DHEA prohormone via 3β-HSD enzyme to 1-Testosterone, a direct AR agonist. Does not aromatize (the 1-position double bond blocks aromatase access).',
      pl: 'Organizm konwertuje prohormon 1-DHEA przez enzym 3β-HSD do 1-Testosteronu, bezpośredniego agonisty AR. Nie aromatyzuje (wiązanie podwójne w pozycji 1 blokuje dostęp aromatazy).',
    },
    legalStatus: {
      hu: 'USA: DASCA 2014 óta kontrollált szteroid. EU: nincs egységes szabályozás, HU/PL gyógyszertári forgalom nincs. WADA: tiltott versenysportban.',
      en: 'USA: controlled steroid since DASCA 2014. EU: no uniform regulation, no HU/PL pharmacy distribution. WADA: banned in competitive sport.',
      pl: 'USA: kontrolowany steryd od DASCA 2014. UE: brak jednolitej regulacji, brak dystrybucji aptecznej w HU/PL. WADA: zakazany.',
    },
    onsetTime: '10-14 days',
    halfLife: '~9 h',
    halfLifeActive: '~9 h (1-Testosterone metabolite)',
    interactionsWith: ['alcohol', 'NSAIDs', 'paracetamol', 'statins'],
    wadaStatus: 'banned',
    androgenicRatio: '200:200',
    bindingAffinity: {
      hu: '1-Testosterone az AR-on a tesztoszteronnal hasonló kötésű, de DHT-szerű karakter miatt nem aromatizál. Ki ~3-5 nM tartomány (Friedel 2006 in vitro).',
      en: '1-Testosterone binds the AR with similar affinity to testosterone, but with DHT-like character (no aromatization). Ki ~3-5 nM range (Friedel 2006 in vitro).',
      pl: '1-Testosteron wiąże AR z podobnym powinowactwem jak testosteron, ale z charakterem podobnym do DHT (brak aromatyzacji). Ki ~3-5 nM (Friedel 2006 in vitro).',
    },
    detectionWindow: {
      hu: '3-4 hét vizelet (1-Testosterone és 1-AED metabolitok detektálhatók WADA-akkreditált laborban).',
      en: '3-4 weeks urine (1-Testosterone and 1-AED metabolites detectable in WADA-accredited labs).',
      pl: '3-4 tygodnie mocz (metabolity 1-Testosteronu i 1-AED wykrywalne w laboratoriach akredytowanych WADA).',
    },
    benefits: [
      { hu: 'Mérsékelt, száraz izomtömeg-növekedés (3-5 kg fat-free mass 6-8 hét alatt)', en: 'Modest dry muscle gain (3-5 kg fat-free mass over 6-8 weeks)', pl: 'Umiarkowany suchy przyrost masy (3-5 kg w 6-8 tygodni)' },
      { hu: 'Nincs aromatizáció (vízretenció, gyno nincs)', en: 'No aromatization (no water retention, no gyno)', pl: 'Brak aromatyzacji (brak retencji wody, ginekomastii)' },
      { hu: 'Vaszkuláris, "tight" megjelenés cutting cycle-on', en: 'Vascular, "tight" look on cutting cycles', pl: 'Naczyniowy, "tight" wygląd w cyklu redukcyjnym' },
      { hu: 'Enyhébb hepatotoxicitás mint a Superdrol vagy Methylstenbolone', en: 'Milder hepatotoxicity than Superdrol or Methylstenbolone', pl: 'Łagodniejsza hepatotoksyczność niż Superdrol lub Methylstenbolone' },
    ],
    quickStart: [
      { hu: 'Edukatív kontextus: 1-Andro DASCA 2014 óta kontrollált az USA-ban, EU-ban vény nélkül illegális', en: 'Educational context: 1-Andro is DASCA-controlled in the US since 2014, illegal in the EU without prescription', pl: 'Kontekst edukacyjny: 1-Andro jest kontrolowany w USA od 2014 (DASCA), nielegalny w UE bez recepty' },
      { hu: 'Ciklus tipikusan 6-8 hét, NIKADA tovább 8 hétnél', en: 'Cycle typically 6-8 weeks, never longer than 8 weeks', pl: 'Cykl zwykle 6-8 tygodni, nigdy dłużej niż 8 tygodni' },
      { hu: 'Máj-támogató (TUDCA 500 mg/nap) ajánlott', en: 'Liver support (TUDCA 500 mg/day) recommended', pl: 'Wsparcie wątroby (TUDCA 500 mg/dzień) zalecane' },
      { hu: 'PCT (Clomid + Nolvadex 4 hét) szükséges HPTA-helyreállításhoz', en: 'PCT (Clomid + Nolvadex 4 weeks) required for HPTA recovery', pl: 'PCT (Clomid + Nolvadex 4 tygodnie) wymagane dla powrotu HPTA' },
    ],
    expectations: [
      { label: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, body: { hu: 'Akut hatás minimális. Néhányan enyhe agresszió-növekedést jeleznek edzés közben.', en: 'Acute effect minimal. Some report mild aggression increase during training.', pl: 'Efekt ostry minimalny. Niektórzy zgłaszają lekki wzrost agresji.' } },
      { label: { hu: '3-4. hét', en: 'Week 3-4', pl: 'Tydzień 3-4' }, body: { hu: 'Erő-növekedés mérsékelt (5-10% 1RM), izomtömeg lassú dry növekedés. Lipid panel HDL csökkenés várható (15-25%).', en: 'Strength gain moderate (5-10% 1RM), slow dry muscle gain. Lipid panel HDL drop expected (15-25%).', pl: 'Wzrost siły umiarkowany (5-10% 1RM), wolny suchy przyrost masy. Lipidogram HDL spadek oczekiwany (15-25%).' } },
      { label: { hu: '6-8. hét', en: 'Week 6-8', pl: 'Tydzień 6-8' }, body: { hu: 'Maximum izomtömeg-növekedés a ciklus végén. Ciklus-megszakítás és PCT indul. ALT/AST tipikusan 1.5-2x emelkedés (kevésbé súlyos mint Superdrol).', en: 'Peak muscle gain at end of cycle. Cycle ends and PCT begins. ALT/AST typically 1.5-2x elevation (less severe than Superdrol).', pl: 'Szczytowy przyrost masy pod koniec cyklu. Cykl kończy się, PCT rozpoczyna się. ALT/AST zwykle 1.5-2x wzrost (mniej dotkliwe niż Superdrol).' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta kapszula vagy tabletta forrásból (Hi-Tech, EpiCat, gray-area gyártók)', en: 'Pure capsule or tablet from source (Hi-Tech, EpiCat, gray-area manufacturers)', pl: 'Czysta kapsułka lub tabletka ze źródła (Hi-Tech, EpiCat, producenci szarej strefy)' },
        { hu: 'Független HPLC-tesztelt forrás (UGL piacon gyakori a hígítás)', en: 'Independent HPLC-tested source (dilution common on UGL market)', pl: 'Niezależnie testowany HPLC (rozcieńczanie częste na rynku UGL)' },
      ],
      caution: [
        { hu: 'Hepatotoxicitás (ALT/AST emelkedés 1.5-2x, ritkán súlyosabb)', en: 'Hepatotoxicity (ALT/AST elevation 1.5-2x, rarely more severe)', pl: 'Hepatotoksyczność (wzrost ALT/AST 1.5-2x, rzadko cięższy)' },
        { hu: 'Lipid-zavar: HDL csökkenés, LDL emelkedés', en: 'Lipid disturbance: HDL drop, LDL rise', pl: 'Zaburzenia lipidowe: spadek HDL, wzrost LDL' },
        { hu: 'Pszichológiai: agresszió, irritáció (kevésbé súlyos mint Superdrol)', en: 'Psychological: aggression, irritability (less severe than Superdrol)', pl: 'Psychologiczne: agresja, drażliwość (mniej dotkliwe niż Superdrol)' },
        { hu: 'Libidó-csökkenés a ciklus végén (HPTA-szuppresszió)', en: 'Libido decrease at cycle end (HPTA suppression)', pl: 'Spadek libido pod koniec cyklu (supresja HPTA)' },
      ],
      avoid: [
        { hu: 'Meglévő máj-zavar (zsírmáj, hepatitis) kontraindikáció', en: 'Pre-existing liver disorder (fatty liver, hepatitis) is a contraindication', pl: 'Istniejące zaburzenie wątroby (stłuszczenie, zapalenie) to przeciwwskazanie' },
        { hu: 'Alkohol, NSAID-ok egyidejű használata tilos', en: 'Concurrent alcohol, NSAIDs forbidden', pl: 'Jednoczesne alkohol, NLPZ zabronione' },
        { hu: 'Kardiovaszkuláris kockázat (családi anamnézis) kontraindikáció', en: 'Cardiovascular risk (family history) is a contraindication', pl: 'Ryzyko sercowo-naczyniowe (wywiad rodzinny) to przeciwwskazanie' },
      ],
    },
    interactions: [
      { hu: 'Más prohormon (Superdrol, Methylstenbolone) együttes használata extrém hepatotoxikus', en: 'Concurrent prohormone (Superdrol, Methylstenbolone) use is extremely hepatotoxic', pl: 'Jednoczesne prohormony (Superdrol, Methylstenbolone) skrajnie hepatotoksyczne' },
      { hu: 'Testosterone-base hozzáadása csökkenti az endogén T-szuppresszió tüneteit', en: 'Adding a Testosterone base reduces endogenous T suppression symptoms', pl: 'Dodanie bazy testosteronu zmniejsza objawy supresji T' },
      { hu: 'PCT (Clomid 50mg/nap + Nolvadex 20mg/nap, 4 hét) kötelező', en: 'PCT (Clomid 50mg/day + Nolvadex 20mg/day, 4 weeks) mandatory', pl: 'PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4 tygodnie) obowiązkowe' },
      { hu: 'Statin-terápia esetén óvatosság (kombinált hepatotoxicitás)', en: 'Caution with statin therapy (combined hepatotoxicity)', pl: 'Ostrożność przy terapii statynami (skumulowana hepatotoksyczność)' },
    ],
    studies: [
      { title: 'Designer steroids: over-the-counter supplements and their androgenic component', authors: 'Kazlauskas R.', journal: 'Mol Cell Endocrinol. 2010;316(1):2-7.', pmid: '19772889' },
      { title: 'Effects of androstenedione supplementation on serum sex hormone levels and adaptations to resistance training', authors: 'Brown GA, Vukovich MD, Sharp RL et al.', journal: 'J Appl Physiol. 1999;87(6):2274-2283.', pmid: '10601179' },
      { title: 'Anabolic-androgenic steroid abuse and liver injury', authors: 'Solimini R, Rotolo MC, Mastrobattista L et al.', journal: 'Eur Rev Med Pharmacol Sci. 2017;21(1 Suppl):24-29.', pmid: '28379599' },
      { title: 'Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement', authors: 'Pope HG Jr, Wood RI, Rogol A et al.', journal: 'Endocr Rev. 2014;35(3):341-375.', pmid: '24423981' },
    ],
    faq: [
      { q: { hu: 'Erősebb vagy gyengébb mint a Superdrol?', en: 'Stronger or weaker than Superdrol?', pl: 'Silniejszy czy słabszy niż Superdrol?' }, a: { hu: 'Gyengébb (200:200 vs 400:20 anabolikus arány), de a hepatotoxicitás is enyhébb. Több vásárló "beginner prohormon" kontextusban választja, de a HPTA-szuppresszió és lipid-zavar így is jelentős.', en: 'Weaker (200:200 vs 400:20 anabolic ratio), but hepatotoxicity is also milder. Many users select it as a "beginner prohormone", but HPTA suppression and lipid disturbance are still significant.', pl: 'Słabszy (200:200 vs 400:20), ale hepatotoksyczność też łagodniejsza. Wielu wybiera go jako "prohormon dla początkujących", ale supresja HPTA i zaburzenia lipidów są wciąż znaczące.' } },
      { q: { hu: 'Mi a különbség 1-Andro és 4-Andro között?', en: 'What is the difference between 1-Andro and 4-Andro?', pl: 'Jaka jest różnica między 1-Andro a 4-Andro?' }, a: { hu: 'Az 1-Andro 1-Testosterone-é konvertál (DHT-szerű, nem aromatizál), a 4-Andro pedig hagyományos Testosterone-á (aromatizál E2-é). Az 1-Andro száraz, a 4-Andro vízretenciós izomtömeg-növekedést okoz.', en: '1-Andro converts to 1-Testosterone (DHT-like, no aromatization); 4-Andro converts to regular Testosterone (aromatizes to E2). 1-Andro produces dry gains; 4-Andro produces water-retentive gains.', pl: '1-Andro konwertuje do 1-Testosteronu (podobnego do DHT, brak aromatyzacji); 4-Andro konwertuje do zwykłego testosteronu (aromatyzuje do E2). 1-Andro daje suche przyrosty; 4-Andro przyrosty z retencją wody.' } },
      { q: { hu: 'Lehet-e Cruise-on tartani?', en: 'Can it be cruised on?', pl: 'Czy można w cruise?' }, a: { hu: 'NEM. A 17α-metilezett prohormon kumulatív hepatotoxicitása miatt cruise tilos. Maximum 8 hét ciklus, utána minimum 8 hét OFF (máj + HPTA recovery).', en: 'NO. The cumulative hepatotoxicity of the 17α-methylated prohormone forbids cruising. Maximum 8 week cycle, then minimum 8 weeks OFF (liver + HPTA recovery).', pl: 'NIE. Kumulatywna hepatotoksyczność 17α-metylowanego prohormonu zabrania cruise. Maks. 8-tygodniowy cykl, potem min. 8 tygodni OFF.' } },
      { q: { hu: 'Megéri-e a Testosterone-injekciók helyett?', en: 'Is it worth choosing over injectable Testosterone?', pl: 'Czy warto zamiast iniekcyjnego testosteronu?' }, a: { hu: 'Nem. Az 1-Andro orális (hepatikus terhelés), HPTA-szuppresszáló, és csak ~50%-os bioavailability-vel rendelkezik. A Testosterone-injekciók kontrollált TRT-keretben (orvosi felügyelet alatt) biztonságosabbak, de Magyarországon csak hipogonadizmus dokumentált diagnózisával írható fel.', en: 'No. 1-Andro is oral (hepatic load), HPTA-suppressive, with only ~50% bioavailability. Injectable Testosterone in controlled TRT context (medical supervision) is safer, but in Hungary only prescribed with documented hypogonadism diagnosis.', pl: 'Nie. 1-Andro jest doustny (obciążenie wątroby), tłumi HPTA, z biodostępnością ~50%. Iniekcyjny testosteron w ramach TRT (nadzór medyczny) jest bezpieczniejszy, ale w HU/PL przepisywany tylko przy udokumentowanej hipogonadyzmie.' } },
    ],
    related: ['superdrol', 'methylstenbolone', 'anavar-info', 'testosterone-info'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 100, medium: 200, high: 330 },
      unit: 'mg/nap',
      note: {
        hu: 'Hi-Tech Pharmaceuticals 1-Andro kapszula formátumban (50-100 mg) tipikus. Maximum 8 hét ciklus, utána minimum 8 hét OFF. TUDCA 500 mg/nap májvédő. PCT (Clomid + Nolvadex 4 hét) szükséges.',
        en: 'Hi-Tech Pharmaceuticals 1-Andro is typically in capsule format (50-100 mg). Max 8 week cycle, then min 8 weeks OFF. TUDCA 500 mg/day liver support. PCT (Clomid + Nolvadex 4 weeks) needed.',
        pl: 'Hi-Tech Pharmaceuticals 1-Andro w kapsułkach (50-100 mg). Maks. 8 tygodni, potem min. 8 tygodni OFF. TUDCA 500 mg/dzień. PCT wymagane.',
      },
    },
    bloodwork: {
      preCycle: {
        label:   { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing:  { hu: '2-3 héttel ciklus indítás előtt', en: '2-3 weeks before cycle start', pl: '2-3 tygodnie przed startem' },
        markers: { hu: 'Hepatikus: ALT, AST, GGT, bilirubin. Lipid panel (LDL/HDL/TG), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, vesefunkció.', en: 'Hepatic: ALT, AST, GGT, bilirubin. Lipid panel (LDL/HDL/TG), hormone panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, renal function.', pl: 'Wątrobowo: ALT, AST, GGT, bilirubina. Lipidogram, panel hormonalny, HbA1c, CBC, czynność nerek.' },
        purpose: { hu: 'Baseline. ALT/AST baseline emelt vagy lipid-zavar kontraindikáció.', en: 'Baseline. Elevated ALT/AST baseline or lipid disorder is a contraindication.', pl: 'Baseline. Podwyższone ALT/AST lub zaburzenia lipidów to przeciwwskazania.' },
      },
      midCycle: {
        label:   { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie cyklu' },
        timing:  { hu: '4. hét végén (6-8 hetes ciklus felénél)', en: 'End of week 4 (midpoint of 6-8 week cycle)', pl: 'Koniec tygodnia 4 (połowa 6-8 tygodniowego cyklu)' },
        markers: { hu: 'ALT, AST, GGT, bilirubin, lipid panel (HDL), E2, vérnyomás (otthon).', en: 'ALT, AST, GGT, bilirubin, lipid panel (HDL), E2, blood pressure (home).', pl: 'ALT, AST, GGT, bilirubina, lipidogram (HDL), E2, ciśnienie (dom).' },
        purpose: { hu: 'Vész-detektálás. ALT/AST >2x felső normál = ciklus-megszakítás. HDL <30 mg/dL kardiovaszkuláris riasztó.', en: 'Emergency detection. ALT/AST >2x upper normal = cycle interruption. HDL <30 mg/dL is a cardiovascular alarm.', pl: 'Wykrywanie zmian. ALT/AST >2x górnej normy = przerwanie cyklu. HDL <30 mg/dL to alarm.' },
      },
      postCycle: {
        label:   { hu: 'PCT (Post-Cycle Therapy)', en: 'Post-cycle (PCT)', pl: 'Po cyklu (PCT)' },
        timing:  { hu: 'PCT 4. hetén + 8-12. hetén HPTA + máj recovery teljes ellenőrzés', en: 'PCT week 4 + week 8-12 full HPTA and liver recovery check', pl: 'Tydzień 4 PCT + tydzień 8-12 pełne sprawdzenie powrotu' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, SHBG, hepatikus panel, lipid panel.', en: 'Total T, Free T, LH, FSH, E2, SHBG, hepatic panel, lipid panel.', pl: 'Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy, lipidogram.' },
        purpose: { hu: 'HPTA + hepatikus recovery verifikálása. Ha Total T <8 nmol/L 12 hét után, endokrinológus konzultáció.', en: 'Verify HPTA + hepatic recovery. If Total T <8 nmol/L after 12 weeks, consult endocrinologist.', pl: 'Weryfikacja powrotu HPTA + wątroby. Jeśli Total T <8 nmol/L po 12 tygodniach, konsultacja endokrynologiczna.' },
      },
      cruise: null,
    },
  },

  // ===== 6. EPHEDRINE =====
  {
    id: 'ephedrine',
    name: 'Ephedrine',
    image: null,
    accentColor: '#fbbf24',
    tagColor: 'rgba(251,191,36,0.18)',
    shortDesc: {
      hu: 'Sympathomimetic alkaloid (Ephedra sinica), klasszikus thermogenic és bronchodilator. WADA-tiltott versenysportban.',
      en: 'Sympathomimetic alkaloid (Ephedra sinica), the classic thermogenic and bronchodilator. WADA-banned in competitive sport.',
      pl: 'Sympatomimetyczny alkaloid (Ephedra sinica), klasyczny termogenik i bronchodilator. Zakazany przez WADA w sporcie wyczynowym.',
    },
    description: {
      hu: 'Az Ephedrine egy fenetilamin-alkaloid, amelyet eredetileg az Ephedra sinica (Ma Huang) növényből izoláltak. Mind az α-, mind a β-adrenoceptorokra hat, valamint elősegíti a noradrenalin felszabadulását a preszinaptikus terminálokból. Az USA-ban OTC bronchodilator (asztma) és nasal decongestant (Sudafed-előd), Magyarországon vény nélkül kapható készítményekben (allergia / nátha). Az Astrup-csoport 1991-92-es vizsgálatai dokumentálták, hogy az ephedrine + caffeine kombináció akut ~10% és krónikus ~5% bazális metabolizmus-emelést okoz, és placebo-kontrollált vizsgálatokban ~3-5 kg extra zsírvesztést támogat 12-24 hét alatt obéz nőknél.',
      en: 'Ephedrine is a phenethylamine alkaloid originally isolated from Ephedra sinica (Ma Huang). It acts on both α- and β-adrenoceptors and promotes noradrenaline release from presynaptic terminals. In the US it is an OTC bronchodilator (asthma) and nasal decongestant (Sudafed predecessor); in Hungary it is available without prescription in allergy/cold preparations. The Astrup group 1991-92 studies documented an acute ~10% and chronic ~5% basal metabolism elevation, and placebo-controlled trials show ~3-5 kg extra fat loss over 12-24 weeks in obese women on the ephedrine + caffeine stack.',
      pl: 'Efedryna to fenetyloaminowy alkaloid izolowany z Ephedra sinica (Ma Huang). Działa na receptory α- i β-adrenergiczne oraz wzmaga uwalnianie noradrenaliny z zakończeń presynaptycznych. W USA to OTC bronchodilator (astma) i lek udrażniający (poprzednik Sudafedu); w UE dostępny bez recepty w preparatach na alergię/przeziębienie. Badania Astrupa 1991-92 udokumentowały ostry ~10% i przewlekły ~5% wzrost podstawowej przemiany materii, a próby z placebo wykazały ~3-5 kg dodatkowej utraty tłuszczu w 12-24 tygodni u otyłych kobiet w stosie efedryna + kofeina.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'α/β-adrenoceptor agonista + NE-felszabadulás', en: 'α/β-adrenoceptor agonist + NE release', pl: 'Agonista α/β-adrenergiczny + uwalnianie NE' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '3-6 óra', en: '3-6 hours', pl: '3-6 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '15-30 perc', en: '15-30 min', pl: '15-30 min' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: OTC korlátozott. HU/EU: vény nélkül OTC készítményekben.', en: 'USA: OTC restricted. HU/EU: OTC in preparations.', pl: 'USA: OTC ograniczony. UE: OTC w preparatach.' } },
    ],
    mechanism: {
      hu: 'Közvetlen α1- és β1/β2-adrenoceptor agonista (kevésbé szelektív, mint Clenbuterol), valamint NE-felszabadulást indukál preszinaptikus terminálokról. β2-aktiválás bronchodilatáció, β3-aktiválás barna zsír thermogenezis, α1 vazokonstrikció és vérnyomás-emelés.',
      en: 'Direct α1- and β1/β2-adrenoceptor agonist (less selective than Clenbuterol), plus presynaptic NE release. β2 activation gives bronchodilation, β3 brown fat thermogenesis, α1 vasoconstriction and blood pressure elevation.',
      pl: 'Bezpośredni agonista receptorów α1 i β1/β2 (mniej selektywny niż Clenbuterol), plus uwalnianie NE z zakończeń presynaptycznych. β2 daje rozszerzenie oskrzeli, β3 termogenezę brunatnej tkanki, α1 wazokonstrykcję i wzrost ciśnienia.',
    },
    legalStatus: {
      hu: 'USA: OTC korlátozással (Combat Methamphetamine Epidemic Act, 2005), online vásárlás regisztráció-köteles. HU: OTC allergia/nátha készítményekben (Solutan, Coldrex Junior). EU: OTC vagy receptre, országonként eltérő. WADA: tiltott versenyen >10 μg/mL vizelet.',
      en: 'USA: OTC with restrictions (Combat Methamphetamine Epidemic Act, 2005), online purchases require registration. HU: OTC in allergy/cold preparations. EU: OTC or prescription depending on country. WADA: banned in competition above 10 μg/mL urine.',
      pl: 'USA: OTC z ograniczeniami (Combat Methamphetamine Epidemic Act, 2005), zakupy online wymagają rejestracji. UE: OTC lub na receptę zależnie od kraju. WADA: zakazany w zawodach powyżej 10 μg/mL moczu.',
    },
    onsetTime: '15-30 min',
    halfLife: '3-6 h',
    interactionsWith: ['caffeine', 'aspirin', 'MAOI', 'SSRI', 'TCA', 'alcohol'],
    wadaStatus: 'banned',
    detectionWindow: {
      hu: '24-48 óra vizelet (WADA in-competition threshold: 10 μg/mL).',
      en: '24-48 hours urine (WADA in-competition threshold: 10 μg/mL).',
      pl: '24-48 godzin mocz (próg WADA w zawodach: 10 μg/mL).',
    },
    benefits: [
      { hu: 'Akut bazális metabolikus ráta emelés (~10% Astrup 1986)', en: 'Acute basal metabolic rate elevation (~10% Astrup 1986)', pl: 'Ostry wzrost podstawowej przemiany materii (~10% Astrup 1986)' },
      { hu: 'Krónikus zsírvesztés-emelés ephedrine + caffeine stack-en (3-5 kg / 12-24 hét)', en: 'Chronic fat loss elevation on ephedrine + caffeine stack (3-5 kg / 12-24 weeks)', pl: 'Przewlekła redukcja tkanki tłuszczowej w stosie EC (3-5 kg / 12-24 tyg)' },
      { hu: 'Bronchodilatáció (asztmás hozzáférés OTC készítményekben)', en: 'Bronchodilation (asthma access via OTC preparations)', pl: 'Rozszerzenie oskrzeli (dostęp astmatyczny w preparatach OTC)' },
      { hu: 'Étvágy-csökkentő hatás (CNS-stimuláns mellékhatás)', en: 'Appetite-suppressant effect (CNS stimulant side effect)', pl: 'Działanie zmniejszające apetyt (efekt uboczny stymulanta CNS)' },
    ],
    quickStart: [
      { hu: 'Edukatív kontextus: WADA versenysportban tiltott', en: 'Educational context: WADA-banned in competitive sport', pl: 'Kontekst edukacyjny: zakazany przez WADA w sporcie wyczynowym' },
      { hu: 'ECA-stack klasszikus: 20-25 mg ephedrine + 200 mg caffeine + 81-325 mg aspirin, 3x/nap', en: 'Classic ECA stack: 20-25 mg ephedrine + 200 mg caffeine + 81-325 mg aspirin, 3x/day', pl: 'Klasyczny stos ECA: 20-25 mg efedryny + 200 mg kofeiny + 81-325 mg aspiryny, 3x/dziennie' },
      { hu: 'Maximum 6-8 hét folyamatos használat tachyphylaxis (toleráncia) miatt', en: 'Maximum 6-8 weeks continuous use due to tachyphylaxis (tolerance)', pl: 'Maks. 6-8 tygodni ciągłego użycia z powodu tachyfilaksji' },
      { hu: 'Délután 4 óra után NE szedd (insomniát okoz)', en: 'Do not take after 4 PM (causes insomnia)', pl: 'Nie przyjmuj po 16:00 (powoduje bezsenność)' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Akut hatás 30-60 perc múlva: szívverés-emelés (+10-20 bpm), enyhe remegés, mentális stimuláció, étvágy-csökkenés.', en: 'Acute effect in 30-60 min: heart rate increase (+10-20 bpm), mild tremor, mental stimulation, appetite reduction.', pl: 'Efekt ostry po 30-60 min: wzrost tętna (+10-20 bpm), lekkie drżenie, stymulacja, redukcja apetytu.' } },
      { label: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, body: { hu: 'Toleráncia kialakulása (akut hatás csökken), de a krónikus thermogenikus hatás megmarad. Zsírvesztés tempó +0.2-0.4 kg/hét placebo felett.', en: 'Tolerance develops (acute effect diminishes) but chronic thermogenic effect persists. Fat loss pace +0.2-0.4 kg/week above placebo.', pl: 'Tolerancja rozwija się (efekt ostry maleje), ale przewlekły efekt termogeniczny utrzymuje się. Tempo redukcji +0.2-0.4 kg/tydzień powyżej placebo.' } },
      { label: { hu: '6. hét vége', en: 'End of week 6', pl: 'Koniec tygodnia 6' }, body: { hu: 'Ciklus-megszakítás javasolt 2 hét OFF a receptor-resensitizációhoz. Vérnyomás napló kötelező, ha 140/90 felett tartós: leállítás.', en: 'Cycle break recommended, 2 weeks OFF for receptor resensitization. Blood pressure log mandatory; if sustained over 140/90 stop.', pl: 'Zalecana przerwa cyklu, 2 tygodnie OFF dla resensytyzacji receptorów. Obowiązkowy dziennik ciśnienia; przy utrzymującym się >140/90 zakończ.' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta tabletta vagy oldat OTC készítményből (Bronkaid, Primatene Tablets US-ben; HU-ban Solutan vagy ephedrine HCl-tabletta)', en: 'Pure tablet or solution from OTC preparation (Bronkaid, Primatene Tablets in US; ephedrine HCl tablet)', pl: 'Czysta tabletka lub roztwór z preparatu OTC (Bronkaid, Primatene Tablets w USA)' },
        { hu: 'Független HPLC-tesztelt forrás Ma Huang kivonatból (változó hatóanyagtartalom)', en: 'Independent HPLC-tested source from Ma Huang extract (variable content)', pl: 'Niezależnie testowane źródło z ekstraktu Ma Huang (zmienna zawartość)' },
      ],
      caution: [
        { hu: 'Kardio-monitoring szükséges: vérnyomás napló otthon (cél: <140/90), nyugalmi pulzus <100', en: 'Cardio monitoring required: blood pressure log at home (target: <140/90), resting heart rate <100', pl: 'Monitoring sercowo-naczyniowy: dziennik ciśnienia w domu (cel: <140/90), tętno spoczynkowe <100' },
        { hu: 'EKG referencia 6 hetes ciklus után ajánlott (különösen ECA-stack-en)', en: 'EKG reference after a 6-week cycle is recommended (especially on ECA stack)', pl: 'EKG po 6-tygodniowym cyklu zalecane (szczególnie przy ECA)' },
        { hu: 'Insomnia, anxietás, irritáció, tachykardia', en: 'Insomnia, anxiety, irritability, tachycardia', pl: 'Bezsenność, lęk, drażliwość, tachykardia' },
        { hu: 'Toleráncia gyorsan kialakul (1-2 hét), pause ciklusok kötelezőek', en: 'Tolerance develops fast (1-2 weeks), pause cycles mandatory', pl: 'Tolerancja rozwija się szybko (1-2 tygodnie), przerwy obowiązkowe' },
      ],
      avoid: [
        { hu: 'Magas vérnyomás (>140/90 baseline) abszolút kontraindikáció', en: 'Hypertension (>140/90 baseline) is an absolute contraindication', pl: 'Nadciśnienie (>140/90 baseline) to bezwzględne przeciwwskazanie' },
        { hu: 'MAOI, SSRI, TCA antidepresszánssal kontraindikált (szerotonin-szindróma kockázat)', en: 'Contraindicated with MAOI, SSRI, TCA antidepressants (serotonin syndrome risk)', pl: 'Przeciwwskazany z MAOI, SSRI, TCA (ryzyko zespołu serotoninowego)' },
        { hu: 'Hyperthyreosis, glaukóma, prostata-megnagyobbodás kontraindikáció', en: 'Hyperthyroidism, glaucoma, prostate enlargement are contraindications', pl: 'Nadczynność tarczycy, jaskra, przerost prostaty to przeciwwskazania' },
      ],
    },
    interactions: [
      { hu: 'Caffeine: szinergisztikus thermogenezis (ECA-stack alapja), de kardio-stressz fokozódik', en: 'Caffeine: synergistic thermogenesis (ECA stack basis), but cardiovascular stress amplifies', pl: 'Kofeina: synergiczna termogeneza (baza ECA), ale stres sercowo-naczyniowy wzrasta' },
      { hu: 'Aspirin (81-325 mg): csökkenti a thromboticus kockázatot az ECA-stack-en', en: 'Aspirin (81-325 mg): reduces thrombotic risk on ECA stack', pl: 'Aspiryna (81-325 mg): zmniejsza ryzyko zakrzepowe w stosie ECA' },
      { hu: 'MAO-gátló: szerotonin-szindróma (kontraindikált)', en: 'MAO inhibitor: serotonin syndrome (contraindicated)', pl: 'Inhibitor MAO: zespół serotoninowy (przeciwwskazane)' },
      { hu: 'Yohimbine: kombinált sympathomimetic stressz, ritkán súlyos hypertenzió', en: 'Yohimbine: combined sympathomimetic stress, rarely severe hypertension', pl: 'Yohimbine: skumulowany stres sympatomimetyczny, rzadko ciężkie nadciśnienie' },
    ],
    studies: [
      { title: 'Thermogenic synergism between ephedrine and caffeine in healthy volunteers', authors: 'Astrup A, Toubro S, Cannon S et al.', journal: 'Metabolism. 1991;40(3):323-329.', pmid: '2000046' },
      { title: 'The effect of ephedrine/caffeine mixture on energy expenditure and body composition in obese women', authors: 'Astrup A, Buemann B, Christensen NJ et al.', journal: 'Metabolism. 1992;41(7):686-688.', pmid: '1619987' },
      { title: 'Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: meta-analysis', authors: 'Shekelle PG, Hardy ML, Morton SC et al.', journal: 'JAMA. 2003;289(12):1537-1545.', pmid: '12672771' },
      { title: 'Ephedrine, pseudoephedrine, and norpseudoephedrine: stimulant and weight loss effects', authors: 'Greenway FL.', journal: 'Obes Rev. 2001;2(3):199-211.', pmid: '12120105' },
    ],
    faq: [
      { q: { hu: 'Miért tiltja a WADA?', en: 'Why is it WADA-banned?', pl: 'Dlaczego WADA tego zakazuje?' }, a: { hu: 'A WADA versenyen-belül tiltja, ha a vizelet-koncentráció >10 μg/mL (CNS-stimuláns kategória). Versenyen kívül edzésben nem tiltott, de a versenyhetén az alkalmazás kockázatos a hosszú detekciós ablak miatt.', en: 'WADA bans in-competition if urine concentration is >10 μg/mL (CNS stimulant category). Out-of-competition training use is not banned, but use in the competition week is risky due to the long detection window.', pl: 'WADA zakazuje w zawodach, jeśli stężenie w moczu >10 μg/mL (kategoria stymulantów CNS). Poza zawodami trening nie jest zakazany, ale stosowanie w tygodniu zawodów jest ryzykowne z powodu długiego okna wykrywalności.' } },
      { q: { hu: 'Lehet-e GHB-vel kombinálni?', en: 'Can it be combined with GHB?', pl: 'Czy można łączyć z GHB?' }, a: { hu: 'NEM. Ephedrine + bármilyen szedatív szer (GHB, benzodiazepin, alkohol nagy mennyiségben) ellentmondásos: a sympathomimetic + szedatív kombináció kardiotoxikus. Plusz a GHB illegális.', en: 'NO. Ephedrine + any sedative (GHB, benzodiazepine, large alcohol) is contraindicated: sympathomimetic + sedative combination is cardiotoxic. Plus GHB is illegal.', pl: 'NIE. Efedryna + sedatywne (GHB, benzodiazepiny, alkohol w dużych ilościach) są przeciwwskazane: kombinacja sympatomimetyczna + sedatywna jest kardiotoksyczna. Plus GHB jest nielegalne.' } },
      { q: { hu: 'Mennyi idő alatt alakul ki tolerancia?', en: 'How fast does tolerance develop?', pl: 'Jak szybko rozwija się tolerancja?' }, a: { hu: 'Az akut stimuláns hatás 1-2 hét alatt csökken (receptor down-regulation). A thermogenikus hatás tovább megmarad (~5% BMR krónikusan), de ciklus-pauseolás 2-4 hetente ajánlott.', en: 'Acute stimulant effect declines in 1-2 weeks (receptor down-regulation). Thermogenic effect persists (~5% BMR chronically), but cycle pauses every 2-4 weeks are recommended.', pl: 'Ostry efekt stymulanta maleje w 1-2 tygodnie (down-regulacja receptorów). Termogenny efekt utrzymuje się (~5% BMR), ale pauzy co 2-4 tygodnie zalecane.' } },
      { q: { hu: 'Szükséges-e bloodwork ehhez?', en: 'Is bloodwork needed for this?', pl: 'Czy potrzebne badania krwi?' }, a: { hu: 'Strukturált bloodwork-protokoll nem szükséges, mint AAS-eknél. De vérnyomás napló otthon (cél: <140/90), nyugalmi pulzus <100, és 6 hetes ciklus után 1 EKG ajánlott. Pajzsmirigy-funkció (TSH, fT3, fT4) ellenőrzés ECA-stack előtt.', en: 'Structured bloodwork protocol not needed like for AAS. But home blood pressure log (target <140/90), resting heart rate <100, and 1 EKG after 6 weeks recommended. Thyroid function (TSH, fT3, fT4) check before ECA stack.', pl: 'Strukturyzowany protokół badań krwi niepotrzebny jak przy AAS. Ale dziennik ciśnienia w domu (cel <140/90), tętno spoczynkowe <100, i 1 EKG po 6 tygodniach zalecane. Funkcja tarczycy (TSH, fT3, fT4) przed ECA.' } },
    ],
    related: ['yohimbine', 'clenbuterol', 'albuterol'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 25, medium: 50, high: 75 },
      unit: 'mg/nap',
      note: {
        hu: 'ECA-stack klasszikus: 25 mg ephedrine + 200 mg caffeine + 81-325 mg aspirin, napi 2-3x. Délután 4 óra után NE szedd (insomnia). Maximum 6-8 hét folyamatos használat. Vérnyomás napló otthon kötelező.',
        en: 'Classic ECA stack: 25 mg ephedrine + 200 mg caffeine + 81-325 mg aspirin, 2-3x/day. Do not take after 4 PM (insomnia). Max 6-8 weeks continuous use. Home blood pressure log mandatory.',
        pl: 'Klasyczny stos ECA: 25 mg efedryny + 200 mg kofeiny + 81-325 mg aspiryny, 2-3x/dziennie. Nie po 16:00. Maks. 6-8 tygodni. Dziennik ciśnienia obowiązkowy.',
      },
    },
  },

  // ===== 7. YOHIMBINE =====
  {
    id: 'yohimbine',
    name: 'Yohimbine',
    image: null,
    accentColor: '#fbbf24',
    tagColor: 'rgba(251,191,36,0.18)',
    shortDesc: {
      hu: 'α2-adrenoceptor antagonist (Pausinystalia yohimbe), "stubborn fat" zsírdepók mobilizálására használt sport-supplement.',
      en: 'α2-adrenoceptor antagonist (Pausinystalia yohimbe), used as a supplement to mobilize "stubborn fat" depots.',
      pl: 'Antagonista receptora α2-adrenergicznego (Pausinystalia yohimbe), używany jako suplement do mobilizacji "stubborn fat".',
    },
    description: {
      hu: 'A Yohimbine egy indol-alkaloid, amelyet a nyugat-afrikai Yohimbe fa (Pausinystalia yohimbe) kérgéből izolálnak. Mechanizmusa szelektív α2-adrenoceptor antagonizmus: az α2-blokád gátolja az anti-lipolítikus visszacsatolást és emeli a noradrenalin-felszabadulást zsírszövetben. Az α2-receptor sűrűsége magas a hasi és combi "stubborn fat" depókban, ezért a Yohimbine elméletileg szelektíven hatékony ezeken a területeken. Az USA-ban OTC dietary supplement, az EU-ban gyógyszer-státusza országonként eltérő. Klinikailag erekciós diszfunkció kezelésére is használták (Yocon), de a hatékonyság vitatott a 2010-es PDE5-inhibitor-érában.',
      en: 'Yohimbine is an indole alkaloid isolated from the bark of the West African Yohimbe tree (Pausinystalia yohimbe). Its mechanism is selective α2-adrenoceptor antagonism: α2 blockade inhibits the anti-lipolytic feedback loop and raises noradrenaline release in adipose tissue. α2 receptor density is high in abdominal and femoral "stubborn fat" depots, so Yohimbine is theoretically selectively effective in these areas. In the US it is an OTC dietary supplement; in the EU regulatory status varies by country. It was clinically used for erectile dysfunction (Yocon), but efficacy is debated in the post-2010 PDE5-inhibitor era.',
      pl: 'Yohimbina to alkaloid indolowy izolowany z kory zachodnioafrykańskiego drzewa Yohimbe (Pausinystalia yohimbe). Mechanizm to selektywny antagonizm receptora α2-adrenergicznego: blokada α2 hamuje anty-lipolityczne sprzężenie zwrotne i podnosi uwalnianie noradrenaliny w tkance tłuszczowej. Gęstość receptorów α2 jest wysoka w brzusznych i udowych depozytach "stubborn fat", więc yohimbina jest teoretycznie selektywnie skuteczna w tych obszarach.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'α2-adrenoceptor antagonist', en: 'α2-adrenoceptor antagonist', pl: 'Antagonista α2' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '0.6-2 óra (rövid)', en: '0.6-2 hours (short)', pl: '0.6-2 godzin (krótki)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '30-45 perc', en: '30-45 min', pl: '30-45 min' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: OTC supplement. EU: vegyes (HU: receptre). WADA: nem listázott.', en: 'USA: OTC supplement. EU: mixed (HU: prescription). WADA: not listed.', pl: 'USA: OTC. UE: zmienne (PL: na receptę). WADA: nielistowana.' } },
    ],
    mechanism: {
      hu: 'Szelektív α2-adrenoceptor antagonista, blokkolja a noradrenalin-felszabadulás negatív visszacsatolását. Eredmény: helyileg fokozott lipolízis α2-rich zsírdepókban (has, comb, csípő).',
      en: 'Selective α2-adrenoceptor antagonist, blocks the negative feedback loop on noradrenaline release. Result: locally enhanced lipolysis in α2-rich fat depots (abdomen, thigh, hip).',
      pl: 'Selektywny antagonista α2-adrenergiczny, blokuje ujemne sprzężenie zwrotne uwalniania noradrenaliny. Wynik: lokalnie wzmożona lipoliza w depozytach α2 (brzuch, udo, biodro).',
    },
    legalStatus: {
      hu: 'USA: OTC dietary supplement (FDA-megfigyelt mellékhatás-jelentésekkel). HU: Rx (Yocon). PL: Rx. WADA: nem listázott.',
      en: 'USA: OTC dietary supplement (FDA-monitored with adverse event reports). HU/PL: Rx (Yocon). WADA: not listed.',
      pl: 'USA: OTC suplement diety. UE: na receptę (Yocon w HU/PL). WADA: nielistowana.',
    },
    onsetTime: '30-45 min',
    halfLife: '0.6-2 h',
    interactionsWith: ['caffeine', 'ephedrine', 'MAOI', 'SSRI', 'TCA', 'tyramine-rich foods', 'clonidine'],
    wadaStatus: null,
    benefits: [
      { hu: '"Stubborn fat" mobilizálás α2-rich depókból (Ostojic 2006 sportoló-vizsgálat: 2.2% zsírvesztés 3 hét alatt)', en: 'Mobilization of "stubborn fat" from α2-rich depots (Ostojic 2006 athlete study: 2.2% fat loss in 3 weeks)', pl: 'Mobilizacja "stubborn fat" z depozytów α2 (Ostojic 2006: 2.2% redukcji w 3 tyg)' },
      { hu: 'Étvágy-csökkentő hatás (CNS sympathomimetic)', en: 'Appetite-suppressant effect (CNS sympathomimetic)', pl: 'Działanie zmniejszające apetyt' },
      { hu: 'Edzés-előtti stimuláns (fókusz + mentális élesedés)', en: 'Pre-workout stimulant (focus + mental sharpness)', pl: 'Stymulant przed treningiem (fokus + ostrość umysłowa)' },
      { hu: 'Cardio-edzés alatti zsírmobilizáció éhgyomri állapotban hatékonyabb', en: 'Fat mobilization during cardio more effective in fasted state', pl: 'Mobilizacja tłuszczu podczas cardio skuteczniejsza na czczo' },
    ],
    quickStart: [
      { hu: 'Dózis: 0.2 mg/kg testtömeg (60 kg személynek 12 mg, 80 kg-osnak 16 mg)', en: 'Dose: 0.2 mg/kg body weight (12 mg for 60 kg person, 16 mg for 80 kg)', pl: 'Dawka: 0.2 mg/kg masy ciała (12 mg dla 60 kg, 16 mg dla 80 kg)' },
      { hu: 'Éhgyomorra, edzés előtt 30-45 perccel (inzulin gátolja a yohimbine hatását)', en: 'On empty stomach, 30-45 min before training (insulin blocks Yohimbine effect)', pl: 'Na czczo, 30-45 min przed treningiem (insulina blokuje efekt)' },
      { hu: 'Maximum 3-4 hét folyamatos használat (anxietás-akkumuláció)', en: 'Maximum 3-4 weeks continuous use (anxiety accumulation)', pl: 'Maks. 3-4 tygodnie ciągłego użycia (kumulacja lęku)' },
      { hu: 'Délután 4 óra után NE szedd (insomniát okoz)', en: 'Do not take after 4 PM (causes insomnia)', pl: 'Nie przyjmuj po 16:00 (powoduje bezsenność)' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '30-45 perc múlva: enyhe szívverés-emelés, enyhe anxietás, fokozott éberség. Cardio alatt látható zsírmobilizáció.', en: 'In 30-45 min: mild heart rate rise, mild anxiety, enhanced alertness. Visible fat mobilization during cardio.', pl: 'W 30-45 min: lekki wzrost tętna, lekki lęk, zwiększona czujność. Widoczna mobilizacja tłuszczu podczas cardio.' } },
      { label: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, body: { hu: 'Toleráncia kialakulása részleges, stubborn-fat zsírdepók látható csökkenése 2-3 hét után.', en: 'Partial tolerance develops; visible reduction of stubborn-fat depots after 2-3 weeks.', pl: 'Częściowa tolerancja rozwija się; widoczna redukcja depozytów "stubborn fat" po 2-3 tygodniach.' } },
      { label: { hu: '3-4. hét vége', en: 'End of week 3-4', pl: 'Koniec tygodnia 3-4' }, body: { hu: 'Ciklus-megszakítás javasolt 2 hét OFF a CNS-recovery-hez. Az anxietás kumulálódhat hosszabb használat esetén.', en: 'Cycle break recommended, 2 weeks OFF for CNS recovery. Anxiety can accumulate with longer use.', pl: 'Zalecana przerwa cyklu, 2 tygodnie OFF dla regeneracji CNS. Lęk może się kumulować przy dłuższym używaniu.' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta yohimbine HCl tabletta vagy kapszula (NEM yohimbe kéreg extract, ami változó tartalmú)', en: 'Pure Yohimbine HCl tablet or capsule (NOT yohimbe bark extract, which has variable content)', pl: 'Czysta tabletka lub kapsułka yohimbiny HCl (NIE ekstrakt z kory, który ma zmienną zawartość)' },
        { hu: 'Független HPLC-tesztelt forrás', en: 'Independent HPLC-tested source', pl: 'Niezależnie testowane HPLC' },
      ],
      caution: [
        { hu: 'Anxietás, irritáció, insomnia tipikus mellékhatás', en: 'Anxiety, irritability, insomnia are typical side effects', pl: 'Lęk, drażliwość, bezsenność to typowe efekty uboczne' },
        { hu: 'Vérnyomás-emelkedés, tachykardia (kardio monitoring otthon ajánlott)', en: 'Blood pressure rise, tachycardia (home cardio monitoring recommended)', pl: 'Wzrost ciśnienia, tachykardia (monitoring w domu zalecany)' },
        { hu: 'Hányinger gyakori magas dózison (>0.4 mg/kg)', en: 'Nausea common at high dose (>0.4 mg/kg)', pl: 'Mdłości częste przy wysokiej dawce (>0.4 mg/kg)' },
        { hu: 'Pánikroham-prediszpozíció esetén kontraindikált', en: 'Contraindicated in panic disorder predisposition', pl: 'Przeciwwskazany przy predyspozycji do napadów lęku' },
        { hu: 'Supplement-mislabeling: 39% kereskedelmi yohimbine-supplement pharma-mennyiséget tartalmaz, 0-12.1 mg/serving szóródás (Cohen 2015 PMID 26391406). Csak HPLC-tesztelt forrás biztonságos.', en: 'Supplement mislabeling: 39% of commercial yohimbine supplements contain pharmaceutical quantities, ranging 0-12.1 mg/serving (Cohen 2015 PMID 26391406). Only HPLC-tested sources are safe.', pl: 'Błędne etykietowanie suplementów: 39% komercyjnych suplementów yohimbiny zawiera ilości farmaceutyczne, zakres 0-12.1 mg/porcja (Cohen 2015 PMID 26391406). Tylko źródła testowane HPLC są bezpieczne.' },
      ],
      avoid: [
        { hu: 'MAOI, SSRI, TCA antidepresszánssal kontraindikált', en: 'Contraindicated with MAOI, SSRI, TCA antidepressants', pl: 'Przeciwwskazany z MAOI, SSRI, TCA' },
        { hu: 'Tyramin-gazdag ételek (érlelt sajt, vörösbor) hipertenzív krízis kockázat', en: 'Tyramine-rich foods (aged cheese, red wine) carry hypertensive crisis risk', pl: 'Pokarmy bogate w tyraminę (sery, czerwone wino) ryzyko kryzysu nadciśnieniowego' },
        { hu: 'Vese- vagy májzavar esetén dózis-csökkentés (CYP2D6 metabolizmus)', en: 'Reduce dose with renal or hepatic impairment (CYP2D6 metabolism)', pl: 'Zmniejsz dawkę przy zaburzeniach nerek lub wątroby (metabolizm CYP2D6)' },
      ],
    },
    interactions: [
      { hu: 'Caffeine: szinergisztikus stimuláns hatás, de anxietás-fokozó', en: 'Caffeine: synergistic stimulant effect, but increases anxiety', pl: 'Kofeina: synergiczny efekt, ale zwiększa lęk' },
      { hu: 'Ephedrine: kombinált sympathomimetic stressz, kardio-monitoring kötelező', en: 'Ephedrine: combined sympathomimetic stress, cardio monitoring mandatory', pl: 'Efedryna: skumulowany stres sympatomimetyczny, monitoring obowiązkowy' },
      { hu: 'Inzulin (étkezés utáni hatás): blokkolja a yohimbine zsírmobilizációs hatását', en: 'Insulin (postprandial): blocks Yohimbine fat mobilization effect', pl: 'Insulina (poposiłkowa): blokuje efekt mobilizacji tłuszczu' },
      { hu: 'PDE5-inhibitor (Viagra/Cialis): kardio-stressz fokozódik', en: 'PDE5 inhibitor (Viagra/Cialis): cardio stress amplifies', pl: 'Inhibitor PDE5 (Viagra/Cialis): stres sercowo-naczyniowy wzrasta' },
      { hu: 'Clonidine (α2-agonista): teljes hatás-antagonizmus + intracraniális vérzés-kockázat krónikus clonidine-felhasználónál (Pham 2022 PMID 36115742 — egyetlen yohimbine-dózis után 198/93 BP + bazális ganglion-vérzés). Krónikus clonidine mellett ABSZOLÚT kontraindikáció.', en: 'Clonidine (α2-agonist): complete effect antagonism plus intracranial hemorrhage risk in chronic clonidine users (Pham 2022 PMID 36115742 — single yohimbine dose triggered 198/93 BP plus basal ganglia hemorrhage). Absolute contraindication on chronic clonidine.', pl: 'Klonidyna (agonista α2): pełny antagonizm efektu plus ryzyko krwawienia śródczaszkowego u przewlekłych użytkowników klonidyny (Pham 2022 PMID 36115742 — pojedyncza dawka yohimbiny wywołała ciśnienie 198/93 plus krwawienie do jąder podstawnych). Bezwzględne przeciwwskazanie przy przewlekłej klonidynie.' },
    ],
    studies: [
      { title: 'Effect of yohimbine on body composition and exercise performance in soccer players', authors: 'Ostojic SM.', journal: 'Res Sports Med. 2006;14(4):289-299.', pmid: '17214405' },
      { title: 'Yohimbine: a pharmacological probe for study of alpha 2-adrenoreceptor', authors: 'Tam SW, Worcel M, Wyllie M.', journal: 'Pharmacol Ther. 2001;91(3):215-243.', pmid: '11744068' },
      { title: 'The effects of yohimbine on regional adipose tissue lipolysis in obese subjects', authors: 'Galitzky J, Taouis M, Berlan M et al.', journal: 'Eur J Clin Invest. 1988;18(6):587-594.', pmid: '3147912' },
      { title: 'Ergogenic and sympathomimetic effects of yohimbine: a review', authors: 'Wong V et al.', journal: 'Strength Cond J. 2024 (review).', pmid: '39728757' },
      { title: 'Pharmaceutical quantities of yohimbine found in dietary supplements in the USA', authors: 'Cohen PA, Wang YH, Maller G, DeSouza R, Khan IA.', journal: 'Drug Test Anal. 2016;8(3-4):357-369.', pmid: '26391406' },
      { title: 'Intracranial hemorrhage after a single dose of yohimbine in a chronic user of clonidine', authors: 'Pham KH, Tu T et al.', journal: 'Cureus. 2022;14(8):e28406.', pmid: '36115742' },
    ],
    faq: [
      { q: { hu: 'Hatékony-e zsírvesztésre tényleg?', en: 'Is it really effective for fat loss?', pl: 'Czy naprawdę skuteczna w redukcji?' }, a: { hu: 'Az evidencia szegényes és inkonzisztens. Ostojic 2006 (atléta-vizsgálat) 2.2% zsírvesztést mutat 3 hét alatt edzéssel kombinálva. Más vizsgálatok (Galitzky 1988) lokális lipolízis-emelést igazolnak, de teljes-test fogyás nem konzisztens. A "stubborn fat"-hipotézis biológiailag plauzibilis (α2-rich depók), de klinikai validáció hiányos.', en: 'Evidence is sparse and inconsistent. Ostojic 2006 (athlete study) shows 2.2% fat loss over 3 weeks combined with training. Other studies (Galitzky 1988) confirm local lipolysis elevation, but consistent whole-body weight loss is not established. The "stubborn fat" hypothesis is biologically plausible (α2-rich depots) but clinical validation is incomplete.', pl: 'Dowody są skąpe i niespójne. Ostojic 2006 (sportowcy) pokazuje 2.2% redukcji w 3 tygodnie z treningiem. Inne badania potwierdzają lokalną lipolizę, ale spójna utrata masy całego ciała nie jest ustalona. Hipoteza "stubborn fat" jest biologicznie wiarygodna, ale walidacja kliniczna niepełna.' } },
      { q: { hu: 'Kombinálható-e ephedrine-nel?', en: 'Can it be combined with ephedrine?', pl: 'Czy można łączyć z efedryną?' }, a: { hu: 'Igen, "EC + Y stack" létezik, de a kardio-stressz jelentősen fokozódik. Vérnyomás napló otthon kötelező, és csak experienced felhasználóknak ajánlott egészséges baseline-on.', en: 'Yes, "EC + Y stack" exists, but cardiovascular stress is significantly amplified. Home blood pressure log mandatory, and only recommended for experienced users with healthy baseline.', pl: 'Tak, "stos EC + Y" istnieje, ale stres sercowo-naczyniowy znacznie się wzmaga. Dziennik ciśnienia w domu obowiązkowy, tylko dla doświadczonych użytkowników.' } },
      { q: { hu: 'Miért NE szedjem étkezés után?', en: 'Why not take it after eating?', pl: 'Dlaczego nie po jedzeniu?' }, a: { hu: 'A postprandiális inzulin az α2-receptor anti-lipolítikus jelet erősíti, ami a yohimbine α2-antagonista hatását kioltja. Éhgyomorra (vagy reggel ébredés után) a hatás akár 2-3x erősebb lehet.', en: 'Postprandial insulin amplifies the α2-receptor anti-lipolytic signal, neutralizing Yohimbine α2-antagonist effect. Fasted (or morning after waking) the effect can be 2-3x stronger.', pl: 'Insulina poposiłkowa wzmacnia anty-lipolityczny sygnał α2, neutralizując efekt yohimbiny. Na czczo (lub rano po wstaniu) efekt może być 2-3x silniejszy.' } },
      { q: { hu: 'Mi a kockázata clonidine vagy MAOI mellett?', en: 'What is the risk with clonidine or MAOI?', pl: 'Jakie jest ryzyko z klonidyną lub MAOI?' }, a: { hu: 'A clonidine α2-agonista, a yohimbine α2-antagonista — direkt pharmakológiai konfliktus. Pham 2022 (Cureus PMID 36115742) egyetlen yohimbine-dózis utáni intracraniális vérzést dokumentált 39 éves nőnél, aki krónikusan clonidine-t szedett (198/93 BP, bazális ganglion-vérzés, súlyos neurológiai sequelae). MAOI vagy tyramin-gazdag étkezés (érlelt sajt, vörösbor, salámi) mellett hipertenzív krízis-kockázat a sympathomimetic NE-szabad halmozódás miatt. Mindkét helyzet ABSZOLÚT kontraindikáció.', en: 'Clonidine is α2-agonist, yohimbine is α2-antagonist — direct pharmacological conflict. Pham 2022 (Cureus PMID 36115742) documented intracranial hemorrhage after a single yohimbine dose in a 39-year-old woman on chronic clonidine (198/93 BP, basal ganglia hemorrhage, severe neurologic sequelae). With MAOI or tyramine-rich meals (aged cheese, red wine, salami), hypertensive crisis risk arises via sympathomimetic NE accumulation. Both situations are absolute contraindications.', pl: 'Klonidyna to agonista α2, yohimbina to antagonista α2 — bezpośredni konflikt farmakologiczny. Pham 2022 (Cureus PMID 36115742) udokumentował krwawienie śródczaszkowe po pojedynczej dawce yohimbiny u 39-letniej kobiety na przewlekłej klonidynie (198/93, krwawienie do jąder podstawnych, ciężkie sekwencje neurologiczne). Z MAOI lub posiłkami bogatymi w tyraminę (sery dojrzewające, czerwone wino, salami) ryzyko kryzysu nadciśnieniowego przez kumulację NE. Oba scenariusze to bezwzględne przeciwwskazania.' } },
    ],
    related: ['ephedrine', 'clenbuterol'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 0.1, medium: 0.2, high: 0.4 },
      unit: 'mg/nap',
      note: {
        hu: '0.2 mg/kg testtömeg tipikus dózis: 60 kg-nak 12 mg, 80 kg-nak 16 mg. Éhgyomorra, edzés előtt 30-45 perccel (inzulin gátolja a hatást). Maximum 3-4 hét folyamatos használat. Magas dózison (>0.4 mg/kg) hányinger gyakori.',
        en: '0.2 mg/kg body weight typical: 12 mg for 60 kg person, 16 mg for 80 kg. On empty stomach, 30-45 min pre-workout (insulin blocks effect). Max 3-4 weeks continuous use. Nausea common at high dose (>0.4 mg/kg).',
        pl: '0.2 mg/kg masy ciała typowo: 12 mg dla 60 kg, 16 mg dla 80 kg. Na czczo, 30-45 min przed treningiem. Maks. 3-4 tygodnie. Mdłości przy wysokiej dawce.',
      },
    },
  },

  // ===== 8. CLENBUTEROL =====
  {
    id: 'clenbuterol',
    name: 'Clenbuterol',
    image: null,
    accentColor: '#06b6d4',
    tagColor: 'rgba(6,182,212,0.18)',
    shortDesc: {
      hu: 'Szelektív β2-adrenoceptor agonista, EU veterinär-Rx asztmás lovaknak. Bodybuilding off-label fat-loss + izom-megtartás.',
      en: 'Selective β2-adrenoceptor agonist, EU veterinary Rx for equine asthma. Off-label bodybuilding use for fat loss + muscle sparing.',
      pl: 'Selektywny agonista β2, weterynaryjny w UE dla astmy końskiej. Off-label kulturystyka dla redukcji + ochrony mięśni.',
    },
    description: {
      hu: 'A Clenbuterol egy hosszú-hatású szelektív β2-adrenoceptor agonista, amelyet eredetileg az 1970-es években bronchodilator-ként szintetizáltak. EU-ban (Magyarországon is) veterinär-Rx asztmás lovak kezelésére (Ventipulmin) és néhány országban (Bulgária, Kína) emberi asztma-Rx; az USA-ban EMBERI orvosi használatra NEM engedélyezett. Bodybuilding off-label használata szelektíven a 2-es típusú izomrostokat (gyors-glikolitikus) hipertrofizálja és thermogenezist okoz β2-mediált UCP1 aktiválással barna zsírban. A felezési ideje extrémen hosszú (~35-40 óra), ami dosing-ot bonyolulttá teszi és kardiotoxikus akkumuláció kockázatát növeli.',
      en: 'Clenbuterol is a long-acting selective β2-adrenoceptor agonist originally synthesized in the 1970s as a bronchodilator. In the EU (including Hungary) it is veterinary Rx for equine asthma (Ventipulmin), and in a few countries (Bulgaria, China) human asthma Rx; in the US it is NOT approved for human medical use. Off-label bodybuilding use selectively hypertrophies type 2 (fast-glycolytic) muscle fibers and drives thermogenesis via β2-mediated UCP1 activation in brown fat. Its half-life is extremely long (~35-40 h), complicating dosing and increasing cardiotoxic accumulation risk.',
      pl: 'Clenbuterol to długo działający selektywny agonista β2 zsyntetyzowany w latach 1970. w UE (w tym HU) jest na receptę weterynaryjną dla astmy końskiej (Ventipulmin), w kilku krajach (Bułgaria, Chiny) na receptę dla ludzi; w USA NIE jest zatwierdzony dla ludzi. Off-label w kulturystyce selektywnie hipertrofizuje włókna typu 2 (szybkie glikolityczne) i napędza termogenezę przez β2-aktywację UCP1 w brunatnej tkance tłuszczowej. Czas półtrwania ~35-40 godzin.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Szelektív β2-adrenoceptor agonista', en: 'Selective β2-adrenoceptor agonist', pl: 'Selektywny agonista β2' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '35-40 óra', en: '35-40 hours', pl: '35-40 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '15-30 perc', en: '15-30 min', pl: '15-30 min' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'EU: vet-Rx (lóasztmára). HU: vet-Rx. USA: nem engedélyezett emberre.', en: 'EU: vet-Rx (equine asthma). HU: vet-Rx. USA: not approved for humans.', pl: 'UE: weterynaryjnie. USA: niezatwierdzony dla ludzi.' } },
    ],
    mechanism: {
      hu: 'Szelektív β2-adrenoceptor agonista, ami a légúti simaizmot ellazítja (bronchodilatáció), és a zsírszöveti lipolízist + thermogenezist β2-UCP1 mechanizmuson keresztül emeli. Anabolikus hatás vázizomban főleg gyors-glikolitikus rostokon (type 2).',
      en: 'Selective β2-adrenoceptor agonist relaxing airway smooth muscle (bronchodilation), and raising adipose lipolysis + thermogenesis via the β2-UCP1 pathway. Anabolic effect in skeletal muscle is largely on fast-glycolytic fibers (type 2).',
      pl: 'Selektywny agonista β2, rozluźnia mięśnie gładkie dróg oddechowych (rozszerzenie oskrzeli) i podnosi lipolizę + termogenezę przez szlak β2-UCP1. Efekt anaboliczny głównie na włóknach typu 2.',
    },
    legalStatus: {
      hu: 'EU: veterinär-Rx (Magyarországon Ventipulmin lovaknak). Néhány országban (Bulgária, Kína, Mexikó) humán asztma-Rx. USA: NEM engedélyezett emberi használatra (Schedule III-szerű). WADA: tiltott versenyen + edzésen.',
      en: 'EU: veterinary Rx (Hungary: Ventipulmin for horses). Human asthma Rx in a few countries (Bulgaria, China, Mexico). USA: NOT approved for human use. WADA: banned in and out of competition.',
      pl: 'UE: weterynaryjnie (HU: Ventipulmin dla koni). W kilku krajach (Bułgaria, Chiny, Meksyk) na receptę dla ludzi. USA: NIE zatwierdzony dla ludzi. WADA: zakazany w i poza zawodami.',
    },
    onsetTime: '15-30 min',
    halfLife: '35-40 h',
    interactionsWith: ['caffeine', 'ephedrine', 'beta-blockers', 'thyroid hormones', 'insulin'],
    wadaStatus: 'banned',
    detectionWindow: {
      hu: '7-14 nap vizelet (WADA-akkreditált laborban érzékeny LC-MS-tesztek).',
      en: '7-14 days urine (sensitive LC-MS testing in WADA-accredited labs).',
      pl: '7-14 dni mocz (czułe testy LC-MS w laboratoriach akredytowanych WADA).',
    },
    benefits: [
      { hu: 'β2-mediált thermogenezis és lipolízis (zsírvesztés 0.3-0.5 kg/hét placebo felett)', en: 'β2-mediated thermogenesis and lipolysis (fat loss 0.3-0.5 kg/week above placebo)', pl: 'Termogeneza i lipoliza β2 (redukcja 0.3-0.5 kg/tydz powyżej placebo)' },
      { hu: 'Izomtömeg megtartás kalória-deficitben (anti-katabolikus)', en: 'Muscle mass sparing during caloric deficit (anti-catabolic)', pl: 'Ochrona masy mięśniowej w deficycie (antykataboliczne)' },
      { hu: 'Bronchodilatáció (asztma-tüneti enyhülés)', en: 'Bronchodilation (asthma symptom relief)', pl: 'Rozszerzenie oskrzeli (ulga w astmie)' },
      { hu: 'Edzés-előtti energia + aerob teljesítmény-emelés (3-5%)', en: 'Pre-workout energy + aerobic performance boost (3-5%)', pl: 'Energia przed treningiem + wydajność aerobowa (3-5%)' },
    ],
    quickStart: [
      { hu: 'Edukatív kontextus: WADA-tiltott + EU-ban humán használatra nem engedélyezett', en: 'Educational context: WADA-banned + not approved for human use in EU', pl: 'Kontekst edukacyjny: WADA-zakazany + niezatwierdzony dla ludzi w UE' },
      { hu: 'Dose-titrating: 20 μg/nap kezdő, +20 μg/nap minden 2-3 napban (felezési idő hosszú!)', en: 'Dose-titrating: 20 μg/day start, +20 μg/day every 2-3 days (long half-life!)', pl: 'Tytracja dawki: start 20 μg/dzień, +20 μg/dzień co 2-3 dni (długi okres półtrwania!)' },
      { hu: 'Maximum 6-8 hét folyamatos használat (kardiotoxikus akkumuláció)', en: 'Maximum 6-8 weeks continuous use (cardiotoxic accumulation)', pl: 'Maks. 6-8 tygodni ciągłego użycia (kumulacja kardiotoksyczna)' },
      { hu: '2 hét OFF receptor-resensitizációhoz, vagy ketotifen kombinációval pszeudo-fix dózis', en: '2 weeks OFF for receptor resensitization, or ketotifen combo for pseudo-fixed dosing', pl: '2 tygodnie OFF dla resensytyzacji lub kombinacja z ketotifenem' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '20 μg-tól szignifikáns remegés (tremor), izomgörcs, szívverés-emelés (+20-30 bpm). Insomnia, anxietás, izzadás.', en: 'From 20 μg significant tremor, muscle cramps, heart rate rise (+20-30 bpm). Insomnia, anxiety, sweating.', pl: 'Od 20 μg znaczne drżenie, skurcze mięśni, wzrost tętna (+20-30 bpm). Bezsenność, lęk, pocenie.' } },
      { label: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, body: { hu: 'Toleráncia kialakulása (akut hatás csökken), zsírvesztés tempó +0.3-0.5 kg/hét. Vérnyomás napló kötelező.', en: 'Tolerance develops (acute effect diminishes), fat loss pace +0.3-0.5 kg/week. Blood pressure log mandatory.', pl: 'Tolerancja rozwija się, redukcja +0.3-0.5 kg/tydz. Dziennik ciśnienia obowiązkowy.' } },
      { label: { hu: '6-8. hét', en: 'Week 6-8', pl: 'Tydzień 6-8' }, body: { hu: 'Ciklus-megszakítás kötelező. Kardio-fáradtság, palpitációk halmozódnak. EKG ellenőrzés ajánlott.', en: 'Cycle break mandatory. Cardio fatigue, palpitations accumulate. EKG check recommended.', pl: 'Przerwa cyklu obowiązkowa. Zmęczenie sercowe, kołatania kumulują się. EKG zalecane.' } },
    ],
    quality: {
      pure: [
        { hu: 'Clenbuterol HCl 20 μg/tabletta veterinär forrásból (Sopharma, Bulgária)', en: 'Clenbuterol HCl 20 μg/tablet from veterinary source (Sopharma, Bulgaria)', pl: 'Clenbuterol HCl 20 μg/tabletka ze źródła weterynaryjnego (Sopharma, Bułgaria)' },
        { hu: 'Független HPLC-tesztelt forrás (UGL piacon gyakori a hígítás)', en: 'Independent HPLC-tested source (dilution common on UGL market)', pl: 'Niezależnie testowane HPLC' },
      ],
      caution: [
        { hu: 'Kardio-monitoring KRITIKUS: vérnyomás napló otthon (cél: <140/90), nyugalmi pulzus <100', en: 'CRITICAL cardio monitoring: blood pressure log (target: <140/90), resting heart rate <100', pl: 'KRYTYCZNE monitorowanie: ciśnienie (cel: <140/90), tętno spoczynkowe <100' },
        { hu: 'EKG ciklus előtt + 6 hét múlva: szívizom-hipertrófia és aritmia kockázata dokumentált', en: 'EKG pre-cycle + after 6 weeks: cardiac hypertrophy and arrhythmia risk documented', pl: 'EKG przed cyklem + po 6 tygodniach: hipertrofia serca i arytmia udokumentowane' },
        { hu: 'Remegés (tremor), izomgörcs (taurin + magnézium szuplementálás 3g/2g enyhíti)', en: 'Tremor, muscle cramps (taurine + magnesium supplementation 3g/2g eases)', pl: 'Drżenie, skurcze (suplementacja tauryny + magnezu 3g/2g łagodzi)' },
        { hu: 'Insomnia, anxietás, izzadás, szívdobogás', en: 'Insomnia, anxiety, sweating, palpitations', pl: 'Bezsenność, lęk, pocenie, kołatania' },
      ],
      avoid: [
        { hu: 'Bármilyen kardiovaszkuláris zavar (hipertónia, aritmia, családi anamnézis) abszolút kontraindikáció', en: 'Any cardiovascular disorder (hypertension, arrhythmia, family history) is an absolute contraindication', pl: 'Każde zaburzenie sercowo-naczyniowe (nadciśnienie, arytmia, wywiad rodzinny) to bezwzględne przeciwwskazanie' },
        { hu: 'Hyperthyreosis kontraindikáció (β2 + pajzsmirigy túl-stimuláció)', en: 'Hyperthyroidism is a contraindication (β2 + thyroid over-stimulation)', pl: 'Nadczynność tarczycy to przeciwwskazanie' },
        { hu: 'β-blokkoló-terápia kontraindikálja a Clenbuterol-t', en: 'β-blocker therapy contraindicates Clenbuterol', pl: 'Terapia β-blokerami przeciwwskazuje Clenbuterol' },
      ],
    },
    interactions: [
      { hu: 'Caffeine, Ephedrine: kombinált sympathomimetic stressz, kardio-monitoring kritikus', en: 'Caffeine, Ephedrine: combined sympathomimetic stress, cardio monitoring critical', pl: 'Kofeina, Efedryna: skumulowany stres, monitoring krytyczny' },
      { hu: 'Pajzsmirigy-hormon (T3 Cytomel) stack: extrém kombinált stressz, csak experienced felhasználóknak', en: 'Thyroid hormone (T3 Cytomel) stack: extreme combined stress, only for experienced users', pl: 'Hormon tarczycy (T3 Cytomel) stos: skrajny skumulowany stres' },
      { hu: 'Ketotifen (1-2 mg lefekvés előtt): receptor down-regulation gátlása, pszeudo-fix dózis lehetséges', en: 'Ketotifen (1-2 mg at bedtime): blocks receptor down-regulation, pseudo-fixed dosing possible', pl: 'Ketotyfen (1-2 mg przed snem): blokuje down-regulację receptorów' },
      { hu: 'Taurin (3g/nap) + magnézium (2g/nap): izomgörcsöket enyhíti', en: 'Taurine (3g/day) + magnesium (2g/day): eases muscle cramps', pl: 'Tauryna + magnez: łagodzi skurcze' },
    ],
    studies: [
      { title: 'Clenbuterol effects in skeletal muscle: animal and human evidence', authors: 'Spann C, Winter ME.', journal: 'Ann Pharmacother. 1995;29(1):75-77.', pmid: '7741001' },
      { title: 'Effects of clenbuterol on cardiac and skeletal muscle', authors: 'Burniston JG, Tan LB, Goldspink DF.', journal: 'Med Sci Sports Exerc. 2006;38(3):425-433.', pmid: '16540829' },
      { title: 'Clenbuterol toxicity: an emerging epidemic', authors: 'Daubert GP, Mabasa VH, Leung VW, Aaron C.', journal: 'J Med Toxicol. 2007;3(2):56-60.', pmid: '18072144' },
      { title: 'Cardiotoxicity of clenbuterol: case series and review', authors: 'Hoffman RJ, Hoffman RS, Freyberg CL et al.', journal: 'Clin Toxicol (Phila). 2008;46(2):160-164.', pmid: '17597361' },
    ],
    faq: [
      { q: { hu: 'Tényleg izomtömeg-növelő?', en: 'Does it really build muscle?', pl: 'Czy naprawdę buduje masę?' }, a: { hu: 'Részben. Az állatkísérletekben (Spann 1995, Burniston 2006) Clenbuterol szignifikáns 2-es típusú izomrost hipertrófiát okoz. Emberi vizsgálatok hiányosak. Bodybuilding-tapasztalat szerint az izom-megtartás kalória-deficitben markánsabb mint az izomtömeg-növelés.', en: 'Partially. Animal studies (Spann 1995, Burniston 2006) show Clenbuterol significantly hypertrophies type 2 fibers. Human studies are sparse. Bodybuilding experience suggests muscle sparing in caloric deficit is more pronounced than mass gain.', pl: 'Częściowo. Badania na zwierzętach pokazują znaczną hipertrofię włókien typu 2. Badania ludzkie są skąpe. W kulturystyce ochrona masy w deficycie jest bardziej wyraźna niż przyrost.' } },
      { q: { hu: 'Miért hosszú a felezési ideje?', en: 'Why is the half-life so long?', pl: 'Dlaczego okres półtrwania jest długi?' }, a: { hu: 'A Clenbuterol lipofil (zsíroldékony) és β2-receptor-affinitása erős, így a szervezetben akkumulálódik. 35-40 órás felezési idő miatt akár egyszer napi dosing is működik, de a tachyphylaxis 1-2 hét alatt kialakul, és a kardiotoxikus akkumuláció kockázata komoly.', en: 'Clenbuterol is lipophilic (fat-soluble) with strong β2-receptor affinity, accumulating in the body. The 35-40 h half-life makes once-daily dosing possible, but tachyphylaxis develops in 1-2 weeks and cardiotoxic accumulation risk is serious.', pl: 'Clenbuterol jest lipofilny i ma silne powinowactwo do receptora β2, kumulując się. Okres półtrwania 35-40 godzin umożliwia dawkowanie raz dziennie, ale tachyfilaksja rozwija się w 1-2 tygodnie, a ryzyko kumulacji jest poważne.' } },
      { q: { hu: 'Mi a "Clen szívizom-hipertrófia"?', en: 'What is "Clen cardiac hypertrophy"?', pl: 'Czym jest "przerost serca od Clena"?' }, a: { hu: 'Krónikus Clenbuterol-használat (>8 hét) bal kamrai szívizom-hipertrófiát (LVH) okoz állatkísérletekben (Burniston 2006), és klinikai esetszinten emberi kardiomiopátia esetek dokumentáltak (Hoffman 2008). Az 6-8 hetes ciklus + 2 hetes OFF protokoll célja ezt megelőzni.', en: 'Chronic Clenbuterol use (>8 weeks) causes left ventricular cardiac hypertrophy (LVH) in animal studies (Burniston 2006), with human cardiomyopathy case reports (Hoffman 2008). The 6-8 week cycle + 2 week OFF protocol aims to prevent this.', pl: 'Przewlekłe stosowanie Clenbuterolu (>8 tygodni) powoduje hipertrofię lewej komory w badaniach na zwierzętach (Burniston 2006), z doniesieniami klinicznymi o kardiomiopatii u ludzi. Protokół 6-8 tygodni + 2 tygodnie OFF ma temu zapobiec.' } },
      { q: { hu: 'Miért NE pulzál a saját pulzusod >100?', en: 'Why should resting pulse not exceed 100?', pl: 'Dlaczego puls spoczynkowy nie powinien przekraczać 100?' }, a: { hu: 'A tartós nyugalmi tachykardia (>100 bpm) krónikus β1-stimuláció jele, ami szívizom-stresszt okoz. >100 bpm fennállása esetén dóziscsökkentés vagy ciklus-megszakítás indikálva.', en: 'Persistent resting tachycardia (>100 bpm) signals chronic β1 stimulation causing cardiac muscle stress. If >100 bpm persists, dose reduction or cycle interruption is indicated.', pl: 'Stała tachykardia spoczynkowa (>100 bpm) sygnalizuje przewlekłą stymulację β1 wywołującą stres mięśnia sercowego. Przy utrzymującym się >100 bpm wskazane zmniejszenie dawki lub przerwa.' } },
    ],
    related: ['albuterol', 'ephedrine', 'yohimbine'],
    doseCalc: {
      type: 'titration',
      titration: [
        { phase: { hu: 'Hét 1, 1. nap', en: 'Week 1, day 1', pl: 'Tydzień 1, dzień 1' }, dose: 20 },
        { phase: { hu: 'Hét 1, 3. nap', en: 'Week 1, day 3', pl: 'Tydzień 1, dzień 3' }, dose: 40 },
        { phase: { hu: 'Hét 1, 5-7. nap', en: 'Week 1, day 5-7', pl: 'Tydzień 1, dzień 5-7' }, dose: 60 },
        { phase: { hu: 'Hét 2', en: 'Week 2', pl: 'Tydzień 2' }, dose: 80 },
        { phase: { hu: 'Hét 3-4', en: 'Week 3-4', pl: 'Tydzień 3-4' }, dose: 100 },
        { phase: { hu: 'Hét 5-6 (csúcs)', en: 'Week 5-6 (peak)', pl: 'Tydzień 5-6 (szczyt)' }, dose: 120 },
      ],
      unit: 'mcg/nap',
      note: {
        hu: 'Dose-titrating a 35-40 órás felezési idő miatt: +20 mcg/nap minden 2-3 napban. Maximum 120-140 mcg/nap, 6-8 hét OFF + ketotifen 1-2 mg lefekvés előtt receptor down-regulation gátlására. Taurin 3 g + magnézium 2 g/nap az izomgörcsökre. Vérnyomás napló otthon, EKG 6 hét után.',
        en: 'Dose-titrating due to 35-40 h half-life: +20 mcg/day every 2-3 days. Max 120-140 mcg/day, 6-8 weeks then OFF + ketotifen 1-2 mg at bedtime to block receptor down-regulation. Taurine 3 g + magnesium 2 g/day for muscle cramps. Home BP log, EKG after 6 weeks.',
        pl: 'Tytracja dawki: +20 mcg/dzień co 2-3 dni. Maks. 120-140 mcg/dzień. Tauryna 3 g + magnez 2 g/dzień. Dziennik ciśnienia, EKG po 6 tygodniach.',
      },
    },
  },

  // ===== 9. ALBUTEROL (Salbutamol) =====
  {
    id: 'albuterol',
    name: 'Albuterol',
    image: null,
    accentColor: '#06b6d4',
    tagColor: 'rgba(6,182,212,0.18)',
    shortDesc: {
      hu: 'FDA-approved szelektív β2-agonist asztma-Rx (Ventolin). Rövidebb felezésű, biztonságosabb Clenbuterol-alternatíva.',
      en: 'FDA-approved selective β2-agonist asthma Rx (Ventolin). Shorter half-life, safer Clenbuterol alternative.',
      pl: 'Selektywny agonista β2 dla astmy zatwierdzony przez FDA (Ventolin). Krótszy okres półtrwania, bezpieczniejsza alternatywa.',
    },
    description: {
      hu: 'Az Albuterol (nemzetközi nevén Salbutamol) egy rövid-hatású szelektív β2-adrenoceptor agonista, az 1980-as évek óta az asztma elsővonalas akut-kezelési szere (FDA-engedélyezett Ventolin/ProAir inhaláló). Globálisan az egyik leggyakrabban felírt gyógyszer. A bodybuilding off-label használatában a Clenbuterol-hoz hasonló thermogenikus + izom-megtartó hatást fejt ki, de jelentősen rövidebb felezési idővel (~5-6 óra vs Clen 35-40 óra), ami biztonságosabb akkumuláció-profilt eredményez. WADA inhaláló-használata <1600 μg/24 óra megengedett, oral/injekciós használat tiltott.',
      en: 'Albuterol (international name Salbutamol) is a short-acting selective β2-adrenoceptor agonist, the first-line acute asthma treatment since the 1980s (FDA-approved Ventolin/ProAir inhaler). Globally one of the most-prescribed drugs. In off-label bodybuilding use it has similar thermogenic + muscle-sparing effects to Clenbuterol but with significantly shorter half-life (~5-6 h vs Clen 35-40 h), giving a safer accumulation profile. WADA permits inhaled use up to 1600 μg/24 h; oral/injectable use is banned.',
      pl: 'Albuterol (międzynarodowo Salbutamol) to krótko działający selektywny agonista β2, pierwszorzędne leczenie ostrej astmy od lat 1980. (zatwierdzony FDA inhalator Ventolin/ProAir). Globalnie jeden z najczęściej przepisywanych leków. W off-label kulturystyce ma podobne efekty termogeniczne + ochrony mięśni jak Clenbuterol, ale ze znacznie krótszym okresem półtrwania (~5-6 h vs Clen 35-40 h). WADA dopuszcza inhalację do 1600 μg/24h.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Szelektív β2-adrenoceptor agonista', en: 'Selective β2-adrenoceptor agonist', pl: 'Selektywny agonista β2' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '5-6 óra (oral), 1.5-3 óra (inhaláló)', en: '5-6 h (oral), 1.5-3 h (inhaled)', pl: '5-6 godz (doustnie), 1.5-3 godz (inhalacja)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '5-15 perc (inhaláló), 15-30 perc (oral)', en: '5-15 min (inhaled), 15-30 min (oral)', pl: '5-15 min (inhalacja), 15-30 min (doustnie)' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: FDA Rx (Ventolin/ProAir). HU/EU: Rx (Ventolin). WADA: inhaláló <1600 μg engedett.', en: 'USA: FDA Rx (Ventolin/ProAir). HU/EU: Rx (Ventolin). WADA: inhaled <1600 μg permitted.', pl: 'USA: FDA Rx. UE: na receptę (Ventolin). WADA: inhalacja <1600 μg dozwolone.' } },
    ],
    mechanism: {
      hu: 'Szelektív β2-adrenoceptor agonista, légúti simaizmot ellazítja (bronchodilatáció). Mellékhatásként a zsírszöveti lipolízist és thermogenezist β2-UCP1 mechanizmuson keresztül emeli. Anabolikus hatás vázizomban szerényebb mint a Clenbuterol-nál, mert a rövidebb felezési idő miatt nem akkumulálódik.',
      en: 'Selective β2-adrenoceptor agonist that relaxes airway smooth muscle (bronchodilation). As a side effect, it raises adipose lipolysis and thermogenesis via the β2-UCP1 pathway. Anabolic effect in skeletal muscle is more modest than Clenbuterol because the shorter half-life prevents accumulation.',
      pl: 'Selektywny agonista β2 rozluźniający mięśnie gładkie dróg oddechowych. Jako efekt uboczny podnosi lipolizę i termogenezę przez szlak β2-UCP1. Efekt anaboliczny skromniejszy niż Clenbuterol z powodu braku kumulacji.',
    },
    legalStatus: {
      hu: 'USA: FDA Rx (Ventolin, ProAir, Proventil). EU: Rx, Magyarországon gyógyszertári forgalom. WADA: inhalációs használat <1600 μg/24 óra megengedett, oral/intravénás tiltott.',
      en: 'USA: FDA Rx (Ventolin, ProAir, Proventil). EU: Rx, available in pharmacies. WADA: inhaled use up to 1600 μg/24 h permitted, oral/IV banned.',
      pl: 'USA: FDA Rx. UE: na receptę, dostępny w aptekach. WADA: inhalacja do 1600 μg/24h dozwolona, doustnie/dożylnie zakazane.',
    },
    onsetTime: '5-15 min (inhaled), 15-30 min (oral)',
    halfLife: '5-6 h (oral)',
    interactionsWith: ['caffeine', 'beta-blockers', 'MAOI', 'tricyclic antidepressants'],
    wadaStatus: 'monitored',
    detectionWindow: {
      hu: '24-72 óra vizelet (WADA threshold: 1000 ng/mL).',
      en: '24-72 hours urine (WADA threshold: 1000 ng/mL).',
      pl: '24-72 godziny mocz (próg WADA: 1000 ng/mL).',
    },
    benefits: [
      { hu: 'Bronchodilatáció (asztma akut-tüneti kezelés)', en: 'Bronchodilation (asthma acute symptom treatment)', pl: 'Rozszerzenie oskrzeli (leczenie objawowe astmy)' },
      { hu: 'Mérsékelt thermogenikus hatás (BMR +3-5%)', en: 'Moderate thermogenic effect (BMR +3-5%)', pl: 'Umiarkowany efekt termogeniczny (BMR +3-5%)' },
      { hu: 'Izom-megtartás kalória-deficitben (anti-katabolikus, kevésbé markáns mint Clen)', en: 'Muscle sparing in caloric deficit (anti-catabolic, less pronounced than Clen)', pl: 'Ochrona masy w deficycie (mniej wyraźna niż Clen)' },
      { hu: 'Biztonságosabb akkumuláció-profil mint Clenbuterol (rövidebb felezési idő)', en: 'Safer accumulation profile than Clenbuterol (shorter half-life)', pl: 'Bezpieczniejszy profil kumulacji niż Clenbuterol' },
    ],
    quickStart: [
      { hu: 'Edukatív kontextus: Albuterol FDA-engedélyezett asztma-Rx, oral/fat-loss használat off-label', en: 'Educational context: Albuterol is FDA-approved asthma Rx; oral/fat-loss use is off-label', pl: 'Kontekst edukacyjny: Albuterol to Rx dla astmy (FDA); doustne off-label' },
      { hu: 'Oral dosing: 4-8 mg/3x napi (Clen-szerű ciklus), max 24 mg/nap', en: 'Oral dosing: 4-8 mg 3x daily (Clen-like cycle), max 24 mg/day', pl: 'Doustnie: 4-8 mg 3x dziennie (cykl Clen-podobny), maks. 24 mg/dzień' },
      { hu: 'Inhaláló: 90-200 μg/szippantás, maximum 1600 μg/24 óra WADA-szintnél', en: 'Inhaler: 90-200 μg/puff, max 1600 μg/24 h at WADA level', pl: 'Inhalator: 90-200 μg/dawka, maks. 1600 μg/24h przy WADA' },
      { hu: 'Maximum 4-6 hét folyamatos használat (toleráncia)', en: 'Maximum 4-6 weeks continuous use (tolerance)', pl: 'Maks. 4-6 tygodni ciągłego użycia (tolerancja)' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Enyhébb hatás mint Clenbuterol-nál: remegés van, de kisebb intenzitású; szívverés-emelés +10-15 bpm.', en: 'Milder effect than Clenbuterol: tremor present but lower intensity; heart rate rise +10-15 bpm.', pl: 'Łagodniejszy niż Clenbuterol: drżenie obecne ale słabsze; wzrost tętna +10-15 bpm.' } },
      { label: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, body: { hu: 'Toleráncia gyors (akut hatás csökken). Zsírvesztés tempó +0.2-0.3 kg/hét placebo felett.', en: 'Tolerance develops fast. Fat loss pace +0.2-0.3 kg/week above placebo.', pl: 'Tolerancja rozwija się szybko. Redukcja +0.2-0.3 kg/tydz powyżej placebo.' } },
      { label: { hu: '4-6. hét', en: 'Week 4-6', pl: 'Tydzień 4-6' }, body: { hu: 'Ciklus-megszakítás javasolt 1-2 hét OFF. Albuterol biztonságosabb mint Clen tartós használatra, de kardio-monitoring így is ajánlott.', en: 'Cycle break recommended, 1-2 weeks OFF. Albuterol is safer than Clen for sustained use, but cardio monitoring still recommended.', pl: 'Przerwa cyklu 1-2 tygodnie OFF. Albuterol bezpieczniejszy niż Clen, ale monitoring zalecany.' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta Ventolin/ProAir inhaláló vagy Salbutamol HCl tabletta gyógyszertárból', en: 'Pure Ventolin/ProAir inhaler or Salbutamol HCl tablet from pharmacy', pl: 'Czysty inhalator Ventolin/ProAir lub tabletka z apteki' },
        { hu: 'A hivatalos pharmacy forrás biztosítja a hatóanyagtartalmat (eltérően az UGL clenbuteroltól)', en: 'Official pharmacy source guarantees content (unlike UGL clenbuterol)', pl: 'Oficjalne źródło apteczne gwarantuje zawartość' },
      ],
      caution: [
        { hu: 'Kardio-monitoring ajánlott: vérnyomás napló, nyugalmi pulzus <100', en: 'Cardio monitoring recommended: BP log, resting HR <100', pl: 'Monitoring sercowy: dziennik ciśnienia, tętno spoczynkowe <100' },
        { hu: 'Remegés (tremor), izomgörcs (taurin + magnézium szuplementálás enyhíti)', en: 'Tremor, muscle cramps (taurine + magnesium eases)', pl: 'Drżenie, skurcze (tauryna + magnez łagodzi)' },
        { hu: 'Hypokalaemia: szérum kálium-csökkenés, főleg magas dózison', en: 'Hypokalaemia: serum potassium drop, especially at high dose', pl: 'Hipokaliemia: spadek potasu, szczególnie przy wysokich dawkach' },
        { hu: 'Insomnia, anxietás (de enyhébb mint Clen)', en: 'Insomnia, anxiety (milder than Clen)', pl: 'Bezsenność, lęk (łagodniejsze niż Clen)' },
      ],
      avoid: [
        { hu: 'Kardio-zavar (aritmia, súlyos hipertónia) kontraindikáció', en: 'Cardiac disorder (arrhythmia, severe hypertension) is a contraindication', pl: 'Zaburzenia sercowe (arytmia, ciężkie nadciśnienie) to przeciwwskazania' },
        { hu: 'β-blokkoló-terápiával kontraindikált', en: 'Contraindicated with β-blocker therapy', pl: 'Przeciwwskazany z terapią β-blokerami' },
        { hu: 'Hyperthyreosis, glaukóma kontraindikáció', en: 'Hyperthyroidism, glaucoma are contraindications', pl: 'Nadczynność tarczycy, jaskra to przeciwwskazania' },
      ],
    },
    interactions: [
      { hu: 'Caffeine: szinergisztikus stimuláns hatás, kardio-stressz fokozódik', en: 'Caffeine: synergistic stimulant effect, cardio stress amplifies', pl: 'Kofeina: synergiczny efekt, stres rośnie' },
      { hu: 'β-blokkoló: blokkolja az Albuterol bronchodilatáló hatását (kontraindikált asztmás betegnél)', en: 'β-blocker: blocks Albuterol bronchodilator effect (contraindicated in asthma patient)', pl: 'β-bloker: blokuje efekt (przeciwwskazany u astmatyka)' },
      { hu: 'MAOI: tachykardia + hipertenzív krízis kockázat', en: 'MAOI: tachycardia + hypertensive crisis risk', pl: 'MAOI: ryzyko tachykardii i kryzysu nadciśnieniowego' },
      { hu: 'Diuretikum (thiazid, furosemid): hypokalaemia kombinált kockázat', en: 'Diuretic (thiazide, furosemide): combined hypokalaemia risk', pl: 'Diuretyk: skumulowane ryzyko hipokaliemii' },
    ],
    studies: [
      { title: 'Selective beta-2-adrenoceptor agonists for asthma: a review', authors: 'Cazzola M, Page CP, Calzetta L, Matera MG.', journal: 'Pharmacol Rev. 2012;64(3):450-504.', pmid: '22611179' },
      { title: 'Salbutamol and human performance: pharmacology and effects', authors: 'Pluim BM, de Hon O, Staal JB et al.', journal: 'Sports Med. 2011;41(1):39-57.', pmid: '21142283' },
      { title: 'Oral salbutamol and skeletal muscle: a meta-analysis', authors: 'Le Panse B, Collomp K, Portier H et al.', journal: 'Int J Sports Med. 2005;26(7):514-520.', pmid: '16195983' },
      { title: 'Asthma medications and athletic performance', authors: 'Kindermann W.', journal: 'Sports Med. 2007;37(2):95-102.', pmid: '17241101' },
    ],
    faq: [
      { q: { hu: 'Mi a különbség Clenbuterollal szemben?', en: 'How does it differ from Clenbuterol?', pl: 'Czym różni się od Clenbuterolu?' }, a: { hu: 'Mindkettő szelektív β2-agonist, de az Albuterol felezési ideje 5-6 óra, a Clenbuterolé 35-40 óra. Az Albuterol biztonságosabb akkumuláció-profillal, és nincs dokumentált klinikai szívizom-hipertrófia kockázat normál dózison. Anabolikus hatása szerényebb (rövidebb hatástartam miatt).', en: 'Both are selective β2 agonists, but Albuterol half-life is 5-6 h vs Clenbuterol 35-40 h. Albuterol has a safer accumulation profile with no documented clinical cardiac hypertrophy at normal doses. Anabolic effect is more modest.', pl: 'Oba są selektywnymi agonistami β2, ale Albuterol ma okres półtrwania 5-6 h vs Clenbuterol 35-40 h. Albuterol ma bezpieczniejszy profil i brak udokumentowanej hipertrofii serca przy normalnych dawkach. Efekt anaboliczny skromniejszy.' } },
      { q: { hu: 'Mit jelent a WADA "monitored" státusz?', en: 'What does WADA "monitored" status mean?', pl: 'Co oznacza status "monitorowany" WADA?' }, a: { hu: 'Az Albuterol inhalációs használata 1600 μg/24 óráig megengedett anti-asztma kontextusban, FEL ALATT a vizelet-koncentráció <1000 ng/mL. Oral vagy intravénás használat tiltott. A "monitored" jelzi, hogy a WADA figyeli a használati mintázatokat és határértékeket frissítheti.', en: 'Inhaled Albuterol up to 1600 μg/24 h is permitted in anti-asthma context, provided urine concentration is <1000 ng/mL. Oral or IV use is banned. "Monitored" indicates WADA tracks use patterns and may update thresholds.', pl: 'Inhalacyjny Albuterol do 1600 μg/24h dozwolony w kontekście astmy, pod warunkiem stężenia w moczu <1000 ng/mL. Doustnie/dożylnie zakazany. "Monitorowany" oznacza, że WADA śledzi wzorce.' } },
      { q: { hu: 'Tényleg biztonságosabb mint Clen?', en: 'Is it really safer than Clen?', pl: 'Czy jest naprawdę bezpieczniejszy niż Clen?' }, a: { hu: 'Igen, dokumentáltan. A rövidebb felezési idő miatt nem akkumulálódik, így a kardiotoxikus hosszú-távú hatások jelentősen csökkennek. Klinikai esetszinten az Albuterol intoxikáció rendkívül ritka még magas dózison is, míg Clenbuterol-mérgezés és kardiomiopátia esetek dokumentáltak (Hoffman 2008).', en: 'Yes, documented. Shorter half-life prevents accumulation, significantly reducing cardiotoxic long-term effects. Albuterol intoxication is extremely rare clinically even at high doses, while Clenbuterol toxicity and cardiomyopathy cases are documented (Hoffman 2008).', pl: 'Tak, udokumentowane. Krótszy okres półtrwania zapobiega kumulacji. Intoksykacja Albuterolem jest klinicznie bardzo rzadka nawet przy wysokich dawkach, podczas gdy toksyczność i kardiomiopatia od Clenbuterolu są udokumentowane.' } },
    ],
    related: ['clenbuterol', 'ephedrine'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 4, medium: 8, high: 16 },
      unit: 'mg/nap',
      note: {
        hu: 'Oral 4-8 mg 3x/nap (Clen-szerű ciklus), max 24 mg/nap. Inhaler 90-200 mcg/szippantás, WADA-szintnél max 1600 mcg/24 óra megengedett. Albuterol biztonságosabb mint a Clenbuterol a rövidebb felezési idő miatt (~5-6 óra), így nem akkumulálódik.',
        en: 'Oral 4-8 mg 3x/day (Clen-like cycle), max 24 mg/day. Inhaler 90-200 mcg/puff; at WADA level max 1600 mcg/24 h permitted. Albuterol is safer than Clenbuterol due to shorter half-life (~5-6 h), no accumulation.',
        pl: 'Doustnie 4-8 mg 3x/dziennie, maks. 24 mg/dzień. Inhalator 90-200 mcg/dawka. Bezpieczniejszy niż Clenbuterol z powodu krótszego okresu półtrwania.',
      },
    },
  },

  // ===== 10. MK-677 (Ibutamoren) =====
  {
    id: 'mk-677',
    name: 'MK-677',
    image: null,
    accentColor: '#10b981',
    tagColor: 'rgba(16,185,129,0.18)',
    shortDesc: {
      hu: 'Orális ghrelin-receptor agonista (NEM SARM). Növekedési hormon és IGF-1 emelő, hosszú-távú felezési idővel.',
      en: 'Oral ghrelin receptor agonist (NOT a SARM). Growth hormone and IGF-1 elevator with long half-life.',
      pl: 'Doustny agonista receptora greliny (NIE SARM). Podnosi hormon wzrostu i IGF-1, długi okres półtrwania.',
    },
    description: {
      hu: 'Az MK-677 (más néven Ibutamoren, fejlesztői kód MK-0677) egy orálisan adagolható nem-peptid GHRP (growth hormone-releasing peptide) mimetikum, amelyet a Merck fejlesztett a 1990-es években. Hatása a ghrelin-receptoron keresztül érvényesül, amely a hipotalamuszban és a hipofízisben fokozza a GH-pulzusokat, azok amplitúdóját, és így emeli az IGF-1 plazma-szintet. Klinikailag dokumentáltan 50-100% IGF-1-emelést okoz 8 hét alatt egészséges felnőtteken (Murray 1999, Garcia 2017). NEM SARM, NEM androgén-receptor agonista, így a HPTA-tengelyt nem szuppresszálja. A Merck az osteoporosis-, idős-kachexia- és növekedés-elmaradási indikációkban tesztelte; FDA-engedélyezést nem szerzett, de Phase II-III klinikai vizsgálatai jól dokumentáltak.',
      en: 'MK-677 (also known as Ibutamoren, developer code MK-0677) is an orally bioavailable non-peptide GHRP (growth hormone-releasing peptide) mimetic developed by Merck in the 1990s. It acts on the ghrelin receptor in the hypothalamus and pituitary, increasing GH pulse amplitude and elevating plasma IGF-1. Clinically it raises IGF-1 by 50-100% over 8 weeks in healthy adults (Murray 1999, Garcia 2017). It is NOT a SARM and NOT an androgen receptor agonist, so it does not suppress the HPTA axis. Merck tested it for osteoporosis, age-related cachexia, and growth deficiency; it did not receive FDA approval, but its Phase II-III clinical trials are well documented.',
      pl: 'MK-677 (znany też jako Ibutamoren, kod rozwojowy MK-0677) to doustnie biodostępny niepetydowy mimetyk GHRP, opracowany przez Merck w latach 1990. Działa na receptor greliny w podwzgórzu i przysadce, zwiększając amplitudę pulsów GH i podnosząc IGF-1. Klinicznie podnosi IGF-1 o 50-100% w 8 tygodni u zdrowych dorosłych (Murray 1999, Garcia 2017). NIE jest SARM ani agonistą AR, więc nie tłumi osi HPTA. Merck testował go dla osteoporozy, kacheksji wieku i niedoboru wzrostu; nie otrzymał zatwierdzenia FDA.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Ghrelin-receptor agonista, GH/IGF-1 emelő', en: 'Ghrelin receptor agonist, GH/IGF-1 elevator', pl: 'Agonista receptora greliny' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '~24 óra', en: '~24 hours', pl: '~24 godziny' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '1-2 hét (étvágy), 4-8 hét (IGF-1 csúcs)', en: '1-2 weeks (appetite), 4-8 weeks (IGF-1 peak)', pl: '1-2 tyg (apetyt), 4-8 tyg (IGF-1)' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: kutatási vegyület (RUO). EU: nincs egységes szabályozás. WADA: tiltott.', en: 'USA: research compound (RUO). EU: not uniformly regulated. WADA: banned.', pl: 'USA: związek badawczy. UE: brak jednolitej regulacji. WADA: zakazany.' } },
    ],
    mechanism: {
      hu: 'Ghrelin-receptor (GHSR-1a) agonista, GH-pulzus-amplitúdó és frekvencia emelő. Másodlagosan IGF-1 plazma-szint 50-100%-os emelése. Nem hat az androgén-receptoron, így a HPTA-tengelyt nem szuppresszálja.',
      en: 'Ghrelin receptor (GHSR-1a) agonist, raises GH pulse amplitude and frequency. Secondary effect: plasma IGF-1 elevation of 50-100%. Does not act on the androgen receptor, so it does not suppress the HPTA axis.',
      pl: 'Agonista receptora greliny (GHSR-1a), podnosi amplitudę i częstotliwość pulsów GH. Wtórnie: wzrost IGF-1 o 50-100%. Nie działa na AR, nie tłumi HPTA.',
    },
    legalStatus: {
      hu: 'USA: kutatási vegyület (Research Use Only), nem FDA-engedélyezett. EU: nincs egységes szabályozás, HU/PL piacon nem értékesíthető. WADA: tiltott (S2 hormon és metabolikus modulátor kategória).',
      en: 'USA: research compound (Research Use Only), not FDA-approved. EU: no uniform regulation, not sold in HU/PL retail. WADA: banned (S2 hormone and metabolic modulator category).',
      pl: 'USA: związek badawczy (Research Use Only), niezatwierdzony FDA. UE: brak jednolitej regulacji. WADA: zakazany (kategoria S2).',
    },
    onsetTime: '1-2 weeks (appetite), 4-8 weeks (IGF-1 peak)',
    halfLife: '~24 h',
    interactionsWith: ['insulin', 'metformin', 'corticosteroids', 'oral hypoglycemics', 'sarms'],
    wadaStatus: 'banned',
    benefits: [
      { hu: 'IGF-1 plazma-szint 50-100% emelés 8 hét alatt (Murray 1999, Garcia 2017)', en: 'IGF-1 plasma elevation 50-100% in 8 weeks (Murray 1999, Garcia 2017)', pl: 'Wzrost IGF-1 o 50-100% w 8 tygodni' },
      { hu: 'GH-pulzus mintázat fiziológiás megtartása (eltérően az exogén HGH-tól)', en: 'Physiological GH pulse pattern preserved (unlike exogenous HGH)', pl: 'Fizjologiczny wzór pulsów GH zachowany' },
      { hu: 'Anti-katabolikus hatás kalória-deficitben (lean mass-megtartás)', en: 'Anti-catabolic effect in caloric deficit (lean mass sparing)', pl: 'Antykataboliczne w deficycie kalorycznym' },
      { hu: 'Csont-ásványanyag-sűrűség emelés (osteoporosis-relevancia)', en: 'Bone mineral density elevation (osteoporosis relevance)', pl: 'Wzrost gęstości mineralnej kości' },
      { hu: 'Mély alvás javítása (REM + slow-wave alvás növelése)', en: 'Deep sleep improvement (REM + slow-wave sleep increase)', pl: 'Poprawa głębokiego snu' },
    ],
    quickStart: [
      { hu: 'Edukatív kontextus: MK-677 nem FDA-engedélyezett, WADA-tiltott', en: 'Educational context: MK-677 is not FDA-approved, WADA-banned', pl: 'Kontekst edukacyjny: MK-677 niezatwierdzony FDA, WADA-zakazany' },
      { hu: 'Dose: 10-25 mg/nap, 1x napi (~24 órás felezési idő)', en: 'Dose: 10-25 mg/day, once daily (~24 h half-life)', pl: 'Dawka: 10-25 mg/dzień, raz dziennie' },
      { hu: 'Lefekvés előtt 30-60 perccel a természetes GH-csúcs szinergiájához', en: '30-60 min before bedtime to synergize with natural GH peak', pl: '30-60 min przed snem dla synergii z naturalnym pikiem GH' },
      { hu: 'Ciklus 8-16 hét, utána 4-8 hét OFF az IGF-1-szabályozáshoz', en: 'Cycle 8-16 weeks, then 4-8 weeks OFF for IGF-1 regulation', pl: 'Cykl 8-16 tygodni, potem 4-8 tygodni OFF' },
    ],
    expectations: [
      { label: { hu: '1. hét', en: 'Week 1', pl: 'Tydzień 1' }, body: { hu: 'Étvágy-növekedés markáns (ghrelin-szerű hatás). Vízretenció enyhe, súly +1-2 kg. Mély alvás már észlelhetően javul.', en: 'Marked appetite increase (ghrelin-like effect). Mild water retention, weight +1-2 kg. Deep sleep noticeably improves.', pl: 'Wyraźny wzrost apetytu (efekt grelino-podobny). Lekka retencja wody, masa +1-2 kg. Głęboki sen poprawia się.' } },
      { label: { hu: '4-8. hét', en: 'Week 4-8', pl: 'Tydzień 4-8' }, body: { hu: 'IGF-1 csúcs (50-100% emelés baseline-hoz képest). Recovery + anti-katabolizmus markáns. Bőr, haj, köröm minőségjavulás.', en: 'IGF-1 peak (50-100% rise from baseline). Recovery + anti-catabolism pronounced. Skin, hair, nail quality improvement.', pl: 'Szczyt IGF-1 (50-100% wzrost). Recovery + antykatabolizm wyraźne. Poprawa skóry, włosów, paznokci.' } },
      { label: { hu: '12-16. hét', en: 'Week 12-16', pl: 'Tydzień 12-16' }, body: { hu: 'Tartós IGF-1 emelés, csont-ásványanyag-sűrűség javulás dokumentálható DEXA-szkennel. Inzulin-rezisztencia kockázat fokozódik (HbA1c monitoring kötelező).', en: 'Sustained IGF-1 elevation, bone mineral density improvement documentable on DEXA scan. Insulin resistance risk amplifies (HbA1c monitoring mandatory).', pl: 'Trwały wzrost IGF-1, poprawa BMD na DEXA. Ryzyko insulinooporności wzrasta (HbA1c monitoring obowiązkowy).' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta MK-677 oldat vagy kapszula HPLC-tesztelt forrásból', en: 'Pure MK-677 solution or capsule from HPLC-tested source', pl: 'Czysty roztwór lub kapsułka HPLC' },
        { hu: 'RUO (Research Use Only) jelölés a forrás-laborban transzparens', en: 'RUO (Research Use Only) labeling transparent at source lab', pl: 'Oznaczenie RUO transparentne u producenta' },
      ],
      caution: [
        { hu: 'Inzulin-rezisztencia: HbA1c emelkedés 0.3-0.5% / 8 hét tipikus', en: 'Insulin resistance: HbA1c rise 0.3-0.5% / 8 weeks typical', pl: 'Insulinooporność: wzrost HbA1c 0.3-0.5% / 8 tygodni typowy' },
        { hu: 'Vízretenció, enyhe pittingedema (lassan visszafordul OFF-ciklusban)', en: 'Water retention, mild pitting edema (slowly reverses on OFF cycle)', pl: 'Retencja wody, lekki obrzęk (powoli odwraca się w OFF)' },
        { hu: 'Étvágy-növekedés extrém (kalória-kontroll fontos)', en: 'Extreme appetite increase (caloric control important)', pl: 'Skrajny wzrost apetytu (kontrola kaloryczna ważna)' },
        { hu: 'Letargia napközben (ghrelin szedatív mellékhatás)', en: 'Daytime lethargy (ghrelin sedative side effect)', pl: 'Letarg w ciągu dnia (sedacja od greliny)' },
      ],
      avoid: [
        { hu: 'Diabetes mellitus 2 vagy prediabetes kontraindikáció', en: 'Type 2 diabetes or prediabetes is a contraindication', pl: 'Cukrzyca typu 2 lub stan przedcukrzycowy to przeciwwskazania' },
        { hu: 'Aktív malignitás kontraindikáció (IGF-1 emelés mitogén)', en: 'Active malignancy is a contraindication (IGF-1 elevation is mitogenic)', pl: 'Aktywna neoplazja to przeciwwskazanie (IGF-1 mitogenny)' },
        { hu: 'Krónikus szívelégtelenség kontraindikáció (vízretenció súlyosbít)', en: 'Chronic heart failure is a contraindication (water retention worsens it)', pl: 'Przewlekła niewydolność serca to przeciwwskazanie' },
      ],
    },
    interactions: [
      { hu: 'Insulin / metformin: dóziskorrekciót igényelhet (inzulinrezisztencia növekedés)', en: 'Insulin / metformin: may require dose adjustment (rising insulin resistance)', pl: 'Insulina / metformina: może wymagać korekty dawki' },
      { hu: 'Testosterone-bázis: szinergisztikus anabolikus hatás (TRT + MK-677 kombinációban)', en: 'Testosterone base: synergistic anabolic effect (TRT + MK-677 combo)', pl: 'Baza testosteronu: synergiczny efekt anaboliczny (TRT + MK-677)' },
      { hu: 'AAS-ciklus alatt: MK-677 nem szuppresszálja HPTA-t, így "bridge" alkalmas két ciklus között', en: 'During AAS cycles: MK-677 does not suppress HPTA, suitable as a "bridge" between cycles', pl: 'Podczas cykli AAS: MK-677 nie tłumi HPTA, odpowiedni jako "most" między cyklami' },
      { hu: 'Kortikoszteroid: ellentmondásos (corticosteroid katabolizmus vs MK-677 anabolizmus)', en: 'Corticosteroids: contradictory (corticosteroid catabolism vs MK-677 anabolism)', pl: 'Kortykosteroidy: sprzeczne efekty' },
      { hu: 'SARM-kombináció (LGD-4033, RAD-140, Ostarine): 2022 case report (PMID 36303408) LGD-4033+MK-677 stack lean mass + fat mass emelést mutatott, DE negatív hatást csont-egészségre, májfunkcióra, lipidekre + suprimált testosterone+FSH-t. Az MK-677 önállóan nem HPTA-szuppresszáns, de SARM-mal együtt a kombinált terhelés súlyos.', en: 'SARM combination (LGD-4033, RAD-140, Ostarine): a 2022 case report (PMID 36303408) showed LGD-4033+MK-677 stack increased lean mass plus fat mass BUT negatively impacted bone health, liver function, lipids and suppressed testosterone plus FSH. MK-677 alone is not HPTA-suppressive, but combined with SARMs the load is severe.', pl: 'Kombinacja z SARM (LGD-4033, RAD-140, Ostarine): case report z 2022 r. (PMID 36303408) wykazał, że stos LGD-4033+MK-677 zwiększył masę mięśniową i tkankę tłuszczową ALE negatywnie wpłynął na zdrowie kości, czynność wątroby, lipidy i stłumił testosteron+FSH. Sam MK-677 nie tłumi HPTA, ale w połączeniu z SARM obciążenie jest poważne.' },
    ],
    studies: [
      { title: 'A specific oral activator of growth hormone secretion (MK-677) reverses diminished GH secretion in older adults', authors: 'Murray RD, Skillicorn CR, Howell SJ et al.', journal: 'J Clin Endocrinol Metab. 1999;84(4):1391-1396.', pmid: '10199784' },
      { title: 'MK-677 in healthy older adults: long-term safety and effects on body composition', authors: 'Garcia JM, Merriam GR, Kargi AY.', journal: 'Endocrine. 2017;57(2):261-270.', pmid: '28429293' },
      { title: 'Oral ibutamoren mesylate in elderly with hip fracture', authors: 'Bach MA, Rockwood K, Zetterberg C et al.', journal: 'J Am Geriatr Soc. 2004;52(4):516-523.', pmid: '15066065' },
      { title: 'Effects of MK-677 on GH-IGF-I axis in catabolic states', authors: 'Svensson J, Lall S, Dickson SL et al.', journal: 'J Clin Endocrinol Metab. 1998;83(2):362-369.', pmid: '9467542' },
      { title: 'Prolonged oral treatment with MK-677, a novel growth hormone secretagogue, improves sleep quality in man', authors: 'Copinschi G, Leproult R, Van Onderbergen A et al.', journal: 'Neuroendocrinology. 1997;66(4):278-286.', pmid: '9349662' },
      { title: 'Effects of a 7-day treatment with MK-677 on 24-hour GH profiles, IGF-I and adrenocortical function in normal young men', authors: 'Chapman IM, Bach MA, Van Cauter E et al.', journal: 'J Clin Endocrinol Metab. 1996;81(12):4249-4257.', pmid: '8768828' },
      { title: 'MK-677, an orally active growth hormone secretagogue, reverses diet-induced catabolism', authors: 'Murphy MG, Plunkett LM, Gertz BJ et al.', journal: 'J Clin Endocrinol Metab. 1998;83(2):320-325.', pmid: '9467534' },
      { title: 'Growth hormone secretagogue MK-677: no clinical effect on AD progression in a randomized trial', authors: 'Sevigny JJ, Ryan JM, van Dyck CH et al.', journal: 'Neurology. 2008;71(21):1702-1708.', pmid: '19015485' },
      { title: 'LGD-4033 and MK-677 use impacts body composition, circulating biomarkers, and skeletal muscle androgenic hormone and receptor content: a case report', authors: 'Nass R et al.', journal: 'Front Endocrinol. 2022;13:1018366.', pmid: '36303408' },
    ],
    faq: [
      { q: { hu: 'Sarm-e az MK-677?', en: 'Is MK-677 a SARM?', pl: 'Czy MK-677 to SARM?' }, a: { hu: 'NEM. Az MK-677 ghrelin-receptor agonista, NEM hat az androgén-receptoron. A SARMs (Ostarine, LGD-4033 stb.) szelektív AR-modulátorok. Az MK-677 más kategória, és NEM szuppresszálja a HPTA-tengelyt.', en: 'NO. MK-677 is a ghrelin receptor agonist, it does NOT act on the androgen receptor. SARMs (Ostarine, LGD-4033 etc.) are selective AR modulators. MK-677 is a different category and does NOT suppress the HPTA axis.', pl: 'NIE. MK-677 to agonista receptora greliny, NIE działa na AR. SARM (Ostarine, LGD-4033) to selektywne modulatory AR. MK-677 to inna kategoria i NIE tłumi HPTA.' } },
      { q: { hu: 'Szükséges-e PCT utána?', en: 'Is PCT needed after?', pl: 'Czy potrzebne PCT?' }, a: { hu: 'NEM. Mivel az MK-677 nem hat AR-on és nem szuppresszálja a HPTA-t, klasszikus PCT (Clomid/Nolvadex) nem szükséges. Az OFF-ciklusban az IGF-1 fokozatosan visszatér baseline-ra 4-8 hét alatt.', en: 'NO. Since MK-677 does not act on AR and does not suppress HPTA, classic PCT (Clomid/Nolvadex) is unnecessary. On OFF cycle, IGF-1 gradually returns to baseline in 4-8 weeks.', pl: 'NIE. MK-677 nie działa na AR ani nie tłumi HPTA, więc klasyczne PCT niepotrzebne. W OFF, IGF-1 wraca do baseline w 4-8 tygodni.' } },
      { q: { hu: 'Miért nem engedélyezte az FDA?', en: 'Why did the FDA not approve it?', pl: 'Dlaczego FDA nie zatwierdziła?' }, a: { hu: 'A Merck az idős-kachexia indikációban tesztelte, de a primary endpoint (törés-megelőzés idős csípő-törött betegeknél) nem ért el szignifikanciát Bach 2004 vizsgálatban. A safety profil (vízretenció, inzulin-rezisztencia) is hozzájárult az engedélyezés elmaradásához. Off-label kutatási vegyületként továbbra is használt.', en: 'Merck tested it for elderly cachexia, but the primary endpoint (fracture prevention in hip-fracture patients) did not reach significance in the Bach 2004 trial. Safety profile (water retention, insulin resistance) also contributed to non-approval. It remains an off-label research compound.', pl: 'Merck testował dla kacheksji wieku, ale pierwotny punkt końcowy nie osiągnął istotności (Bach 2004). Profil bezpieczeństwa też wpłynął na brak zatwierdzenia. Pozostaje związkiem badawczym off-label.' } },
      { q: { hu: 'Tényleg javítja a mély alvást?', en: 'Does it really improve deep sleep?', pl: 'Czy naprawdę poprawia głęboki sen?' }, a: { hu: 'Igen. A Copinschi 1997 (Sleep) vizsgálat polysomnographiával dokumentálta a slow-wave alvás 50%-os emelését és REM-fázis 20%-os emelését MK-677-en. Ez a ghrelin-szerű GHRP-hatás direkt következménye, és gyakran az első észlelhető szubjektív hatás (1-2 hét után).', en: 'Yes. Copinschi 1997 (Sleep) polysomnography study documented a 50% slow-wave sleep elevation and 20% REM phase elevation on MK-677. This is a direct consequence of the ghrelin-like GHRP effect, and often the first noticeable subjective effect (after 1-2 weeks).', pl: 'Tak. Badanie Copinschi 1997 polisomnografią udokumentowało 50% wzrost snu wolnofalowego i 20% wzrost fazy REM. To bezpośredni efekt grelino-podobny GHRP, często pierwszy zauważalny subiektywny efekt.' } },
    ],
    related: ['testosterone-info', 'anavar-info', 'hgh-info'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 10, medium: 17.5, high: 25 },
      unit: 'mg/nap',
      note: {
        hu: 'Lefekvés előtt 30-60 perccel a természetes GH-csúcs szinergiájához. Ciklus 8-16 hét, utána 4-8 hét OFF az IGF-1 baseline-ra visszatéréshez. Vízretenció enyhe (+1-2 kg), HbA1c emelkedés várható (0.2-0.5%). Prediabetes vagy inzulin-rezisztencia kontraindikáció.',
        en: '30-60 min before bedtime to synergize with natural GH peak. Cycle 8-16 weeks, then 4-8 weeks OFF for IGF-1 baseline return. Mild water retention (+1-2 kg), HbA1c rise expected (0.2-0.5%). Prediabetes or insulin resistance is a contraindication.',
        pl: '30-60 min przed snem. Cykl 8-16 tygodni, potem 4-8 tygodni OFF. Lekka retencja wody, wzrost HbA1c. Stan przedcukrzycowy = przeciwwskazanie.',
      },
    },
    bloodwork: {
      preCycle: {
        label:   { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing:  { hu: '2 héttel ciklus indítás előtt', en: '2 weeks before cycle start', pl: '2 tygodnie przed startem' },
        markers: { hu: 'IGF-1 baseline, HbA1c, éhomi glükóz, inzulin (HOMA-IR), lipid panel, TSH/fT4, májfunkció (ALT/AST), vesefunkció.', en: 'IGF-1 baseline, HbA1c, fasting glucose, insulin (HOMA-IR), lipid panel, TSH/fT4, liver function (ALT/AST), renal function.', pl: 'IGF-1 baseline, HbA1c, glukoza na czczo, insulina (HOMA-IR), lipidogram, TSH/fT4, czynność wątroby, nerek.' },
        purpose: { hu: 'IGF-1 + glükóz-metabolizmus baseline. Prediabetes (HbA1c >5.7%) vagy inzulin-rezisztencia (HOMA-IR >2.5) kontraindikáció.', en: 'IGF-1 + glucose metabolism baseline. Prediabetes (HbA1c >5.7%) or insulin resistance (HOMA-IR >2.5) is a contraindication.', pl: 'IGF-1 + metabolizm glukozy baseline. Stan przedcukrzycowy lub insulinooporność to przeciwwskazania.' },
      },
      midCycle: {
        label:   { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie cyklu' },
        timing:  { hu: '6-8. hetén (cikluson belül)', en: 'Week 6-8 (mid-cycle)', pl: 'Tydzień 6-8' },
        markers: { hu: 'IGF-1 (cél: <600 ng/mL), HbA1c (várt emelkedés 0.2-0.5%), éhomi glükóz, inzulin (HOMA-IR).', en: 'IGF-1 (target <600 ng/mL), HbA1c (expected rise 0.2-0.5%), fasting glucose, insulin (HOMA-IR).', pl: 'IGF-1 (cel <600 ng/mL), HbA1c (oczekiwany wzrost 0.2-0.5%), glukoza na czczo, insulina (HOMA-IR).' },
        purpose: { hu: 'IGF-1 csúcs ellenőrzése (>800 ng/mL = dóziscsökkentés indikált). Glükóz-szabályozás monitoring.', en: 'IGF-1 peak check (>800 ng/mL = dose reduction indicated). Glucose regulation monitoring.', pl: 'Kontrola IGF-1 (>800 ng/mL = redukcja dawki). Monitoring glukozy.' },
      },
      postCycle: null,
      cruise: null,
    },
  },
]

export const EXTRA_PERFORMANCE = [
  // ===== EXTRA 1. WINSTROL (Stanozolol) =====
  {
    id: 'winstrol-info',
    name: 'Winstrol',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Stanozolol, 17α-alkilált DHT-származék. Klasszikus "cutting" AAS, SHBG-szuppresszor.',
      en: 'Stanozolol, 17α-alkylated DHT derivative. Classic "cutting" AAS, SHBG suppressor.',
      pl: 'Stanozolol, 17α-alkilowana pochodna DHT. Klasyczny "cutting" AAS, supresor SHBG.',
    },
    description: {
      hu: 'A Stanozolol (Winstrol) DHT-származék, 17α-alkilezett orális vagy injekciós AAS. Szelektíven csökkenti az SHBG-t (sex hormone-binding globulin), ami emeli a szabad tesztoszteron-frakciót. Nem aromatizál, így nincs ösztrogén-mellékhatás. Klinikailag hereditary angioedema és anémia kezelésére fejlesztették, sportkontextusban "cutting" cikluson izom-megtartás céljából használt. A Ben Johnson 1988 olimpiai szkandallum ezt a vegyületet érintette.',
      en: 'Stanozolol (Winstrol) is a DHT derivative, a 17α-alkylated oral or injectable AAS. It selectively reduces SHBG (sex hormone-binding globulin), raising the free testosterone fraction. Does not aromatize, so no estrogenic side effects. Clinically developed for hereditary angioedema and anemia; in sports it is used in "cutting" cycles for muscle sparing. The Ben Johnson 1988 Olympic scandal involved this compound.',
      pl: 'Stanozolol (Winstrol) to pochodna DHT, 17α-alkilowany doustny lub iniekcyjny AAS. Selektywnie obniża SHBG, podnosząc frakcję wolnego testosteronu. Nie aromatyzuje. Klinicznie rozwinięty dla wrodzonego obrzęku naczynioruchowego i anemii; w sporcie używany w "cuttingu". Skandal Bena Johnsona 1988.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista + SHBG-szuppresszor', en: 'AR agonist + SHBG suppressor', pl: 'Agonista AR + supresor SHBG' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '9 óra (oral), 24 óra (injekciós)', en: '9 h (oral), 24 h (injectable)', pl: '9 godz (doustnie)' } },
      { label: { hu: 'Anabolikus arány', en: 'Anabolic ratio', pl: 'Stosunek' }, value: { hu: '320:30', en: '320:30', pl: '320:30' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: FDA-engedélyezett (Winstrol Rx). EU: Rx korlátozott.', en: 'USA: FDA-approved (Winstrol Rx). EU: restricted Rx.', pl: 'USA: FDA Rx. UE: ograniczone' } },
    ],
    mechanism: {
      hu: 'AR-agonista DHT-szerű karakterrel. SHBG-szuppresszió emeli a szabad tesztoszteron-frakciót. Nem aromatizál (DHT-származék).',
      en: 'AR agonist with DHT-like character. SHBG suppression raises free testosterone fraction. Does not aromatize (DHT derivative).',
      pl: 'Agonista AR podobny do DHT. Supresja SHBG podnosi wolny testosteron. Nie aromatyzuje.',
    },
    legalStatus: {
      hu: 'USA: FDA Schedule III. HU/EU: Rx. WADA: tiltott.',
      en: 'USA: FDA Schedule III. HU/EU: Rx. WADA: banned.',
      pl: 'USA: Schedule III. UE: na receptę. WADA: zakazany.',
    },
    onsetTime: '7-14 days',
    halfLife: '9 h (oral)',
    interactionsWith: ['alcohol', 'NSAIDs', 'warfarin'],
    wadaStatus: 'banned',
    androgenicRatio: '320:30',
    benefits: [
      { hu: 'Cutting cycle izom-megtartás kalória-deficitben', en: 'Cutting cycle muscle sparing in caloric deficit', pl: 'Ochrona masy w cyklu redukcyjnym' },
      { hu: 'SHBG-csökkenés emeli a szabad T-frakciót', en: 'SHBG reduction raises free T fraction', pl: 'Redukcja SHBG podnosi wolny T' },
      { hu: 'Erő-növekedés sprintereknek és atlétáknak', en: 'Strength gain for sprinters and athletes', pl: 'Wzrost siły dla sprinterów' },
    ],
    studies: [
      { title: 'Effects of stanozolol on physiological measurements in healthy men', authors: 'Stergiopoulos K, Brennan JJ, Mathews R et al.', journal: 'Med Sci Sports Exerc. 2008;40(4):574-579.', pmid: '18317369' },
      { title: 'Anabolic steroid abuse and tendon injuries', authors: 'Liow RY, Tavares S.', journal: 'BJSM. 1995;29(2):77-79.', pmid: '7551762' },
      { title: 'Adverse health consequences of performance-enhancing drugs', authors: 'Pope HG Jr, Wood RI, Rogol A et al.', journal: 'Endocr Rev. 2014;35(3):341-375.', pmid: '24423981' },
    ],
    related: ['testosterone-info', 'trenbolone-info', 'anavar-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 0.4, medium: 0.7, high: 1.0 },
      unit: 'mg/nap',
      note: {
        hu: 'Oral 30-80 mg/nap (Alacsony-Magas tartomány), injekciós Winstrol Depot 50 mg EOD. SHBG-szuppressziós hatása miatt szabad T-frakció emelkedik. Hepatotoxicitás magas (17α-alkilált). Maximum 6-8 hét ciklus. PCT szükséges.',
        en: 'Oral 30-80 mg/day (Low-High range), injectable Winstrol Depot 50 mg EOD. SHBG suppression raises free T fraction. High hepatotoxicity (17α-alkylated). Max 6-8 week cycle. PCT needed.',
        pl: 'Doustnie 30-80 mg/dzień, iniekcyjnie 50 mg EOD. Wysoka hepatotoksyczność. Maks. 6-8 tygodni. PCT wymagane.',
      },
    },
    bloodwork: {
      preCycle: {
        label: { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing: { hu: '2 héttel előtt', en: '2 weeks before', pl: '2 tygodnie przed' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, bilirubin. Lipid panel, hormon-panel, vesefunkció, CBC.', en: 'Hepatic priority: ALT, AST, GGT, bilirubin. Lipid panel, hormone panel, renal function, CBC.', pl: 'Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus lipidogram, panel hormonalny, czynność nerek, CBC.' },
        purpose: { hu: 'Máj-baseline kritikus 17α-alkilált AAS-en.', en: 'Liver baseline critical on 17α-alkylated AAS.', pl: 'Baseline wątroby krytyczny przy 17α-alkilowanym AAS.' },
      },
      midCycle: {
        label: { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie' },
        timing: { hu: '3-4. hét', en: 'Week 3-4', pl: 'Tydzień 3-4' },
        markers: { hu: 'ALT, AST, GGT, bilirubin, lipid panel (HDL drasztikus csökkenés várható), E2, vérnyomás.', en: 'ALT, AST, GGT, bilirubin, lipid panel (HDL drop expected), E2, BP.', pl: 'ALT, AST, GGT, bilirubina, lipidogram (HDL spadek), E2, ciśnienie.' },
        purpose: { hu: 'Vész-detektálás. ALT/AST >3x indikál ciklus-megszakítást.', en: 'Emergency detection. ALT/AST >3x indicates cycle interruption.', pl: 'Wykrywanie zmian. ALT/AST >3x = przerwanie.' },
      },
      postCycle: {
        label: { hu: 'PCT', en: 'PCT', pl: 'PCT' },
        timing: { hu: 'PCT 4. + 8-12. hét', en: 'PCT week 4 + 8-12', pl: 'PCT tydzień 4 + 8-12' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, SHBG, hepatikus + lipid recovery.', en: 'Total T, Free T, LH, FSH, E2, SHBG, hepatic + lipid recovery.', pl: 'Total T, Free T, LH, FSH, E2, SHBG, recovery wątroby i lipidów.' },
        purpose: { hu: 'HPTA + hepatikus recovery verifikálás.', en: 'Verify HPTA + hepatic recovery.', pl: 'Weryfikacja recovery HPTA + wątroby.' },
      },
      cruise: {
        label: { hu: 'Cruise alatt', en: 'On Cruise', pl: 'Podczas Cruise' },
        timing: { hu: '6 hetente', en: 'Every 6 weeks', pl: 'Co 6 tygodni' },
        markers: { hu: 'Hepatikus + lipid + hormon-panel + EKG referencia.', en: 'Hepatic + lipid + hormone panel + EKG reference.', pl: 'Wątroba + lipidy + hormony + EKG.' },
        purpose: { hu: 'Hosszú-távú Winstrol-cruise NEM ajánlott a hepatotoxicitás miatt.', en: 'Long-term Winstrol cruising NOT recommended due to hepatotoxicity.', pl: 'Długoterminowy cruise z Winstrolem NIE zalecany z powodu hepatotoksyczności.' },
      },
    },
  },

  // ===== EXTRA 2. NANDROLONE (Deca) =====
  {
    id: 'nandrolone-info',
    name: 'Nandrolone',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Nandrolone Decanoate (Deca-Durabolin), 19-nor-AAS. Klasszikus "bulking" AAS, ízületi recovery hatással.',
      en: 'Nandrolone Decanoate (Deca-Durabolin), 19-nor AAS. Classic "bulking" AAS with joint recovery effect.',
      pl: 'Nandrolone Decanoate (Deca-Durabolin), 19-nor AAS. Klasyczny "bulking" AAS z efektem regeneracji stawów.',
    },
    description: {
      hu: 'A Nandrolone Decanoate egy 19-nor-tesztoszteron származék, hosszú-hatású injekciós AAS (decanoate-észter, 15 napos felezési idő). Klinikailag anémia és cachexia kezelésére használt (Deca-Durabolin). Bodybuildingban "bulking" cikluson izomtömeg-növelésre és ízületi recovery-re használt. Az aromatáz minimálisan konvertálja ösztrogénné, de 5α-reduktáz NEM aktiválja DHT-é (in fact, dihydronandrolone gyenge), így a prosztata-mellékhatások ritkábbak. "Deca-dick" libidó-csökkenés gyakori panasz (prolactin-emelés).',
      en: 'Nandrolone Decanoate is a 19-nor testosterone derivative, long-acting injectable AAS (decanoate ester, 15-day half-life). Clinically used for anemia and cachexia (Deca-Durabolin). In bodybuilding it is used in "bulking" cycles for muscle mass and joint recovery. Aromatase converts it to estrogen minimally, but 5α-reductase does NOT activate it to DHT (dihydronandrolone is weak), so prostate side effects are rarer. "Deca-dick" libido drop is a common complaint (prolactin elevation).',
      pl: 'Nandrolone Decanoate to pochodna 19-nor testosteronu, długo działający iniekcyjny AAS (estr dekanowy, 15-dniowy okres półtrwania). Klinicznie dla anemii i kacheksji. W kulturystyce w cyklach "bulking" dla masy i regeneracji stawów. "Deca-dick" spadek libido częsty (wzrost prolaktyny).',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: '19-nor-AAS, AR-agonista, gyenge aromatizáció', en: '19-nor AAS, AR agonist, weak aromatization', pl: '19-nor AAS, agonista AR' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '15 nap (decanoate)', en: '15 days (decanoate)', pl: '15 dni (dekanian)' } },
      { label: { hu: 'Anabolikus arány', en: 'Anabolic ratio', pl: 'Stosunek' }, value: { hu: '125:37', en: '125:37', pl: '125:37' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: Schedule III. HU/EU: Rx (Deca-Durabolin).', en: 'USA: Schedule III. HU/EU: Rx.', pl: 'USA: Schedule III. UE: Rx.' } },
    ],
    mechanism: {
      hu: '19-nor-AAS, közvetlen AR-agonista. Aromatáz minimálisan ösztrogénné konvertálja. 5α-reduktáz dihydronandrolone-é alakítja, ami gyenge AR-aktivitású (prosztata-védő).',
      en: '19-nor AAS, direct AR agonist. Aromatase converts to estrogen minimally. 5α-reductase forms dihydronandrolone with weak AR activity (prostate-sparing).',
      pl: '19-nor AAS, bezpośredni agonista AR. Słaba aromatyzacja. 5α-reduktaza tworzy słaby dihydronandrolon.',
    },
    legalStatus: {
      hu: 'USA: Schedule III. HU/PL/EU: Rx (Deca-Durabolin gyógyszertári forgalom). WADA: tiltott.',
      en: 'USA: Schedule III. HU/PL/EU: Rx (Deca-Durabolin pharmacy). WADA: banned.',
      pl: 'USA: Schedule III. UE: Rx. WADA: zakazany.',
    },
    onsetTime: '2-3 weeks',
    halfLife: '15 days (decanoate)',
    interactionsWith: ['cabergoline (prolactin)', 'aromatase inhibitors'],
    wadaStatus: 'banned',
    androgenicRatio: '125:37',
    benefits: [
      { hu: 'Izomtömeg-növekedés "bulking" cikluson', en: 'Muscle mass gain in bulking cycle', pl: 'Wzrost masy w "bulkingu"' },
      { hu: 'Ízületi recovery: kollagén-szintézis emelő hatás', en: 'Joint recovery: collagen synthesis effect', pl: 'Regeneracja stawów: synteza kolagenu' },
      { hu: 'Prosztata-mellékhatások ritkábbak (gyenge DHT-konverzió)', en: 'Prostate side effects rarer (weak DHT conversion)', pl: 'Rzadsze efekty prostaty' },
    ],
    studies: [
      { title: 'Nandrolone decanoate: pharmacology, oxidation, and uses', authors: 'Geusens P.', journal: 'Rheumatol Int. 1995;15(1):27-34.', pmid: '7770048' },
      { title: 'Effects of nandrolone decanoate on serum lipoprotein profile', authors: 'Hartgens F, Rietjens G, Keizer HA et al.', journal: 'BJSM. 2004;38(3):253-259.', pmid: '15039244' },
      { title: 'Anabolic steroid use and erectile dysfunction', authors: 'Coward RM, Rajanahally S, Kovac JR et al.', journal: 'J Urol. 2013;190(6):2200-2205.', pmid: '23764081' },
    ],
    related: ['testosterone-info', 'trenbolone-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 2, medium: 4, high: 6 },
      unit: 'mg/hét',
      note: {
        hu: 'Deca-bridge 100-150 mg/hét (Alacsony tartomány alatti), bulking 300-600 mg/hét. Decanoate-észter 15 napos felezési idejű, heti 1x injekció elegendő. "Deca-dick" libidó-csökkenés prevenció: cabergoline 0.25 mg 2x/hét + Testosterone-bázis együtt. Prolactin-monitoring kötelező.',
        en: 'Deca-bridge 100-150 mg/week (below Low range), bulking 300-600 mg/week. Decanoate ester has 15-day half-life, 1x weekly injection sufficient. "Deca-dick" libido drop prevention: cabergoline 0.25 mg 2x/week + Testosterone base. Prolactin monitoring mandatory.',
        pl: 'Deca-bridge 100-150 mg/tydzień, bulking 300-600 mg/tydzień. Ester dekanowy 15-dniowy. Prolaktyna obowiązkowo monitorowana.',
      },
    },
    bloodwork: {
      preCycle: {
        label: { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing: { hu: '2-4 hét előtt', en: '2-4 weeks before', pl: '2-4 tygodnie przed' },
        markers: { hu: 'Teljes CBC, lipid panel, májfunkció, hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, vesefunkció, PSA.', en: 'Full CBC, lipid panel, liver function, hormone panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, renal function, PSA.', pl: 'Pełna morfologia, lipidogram, czynność wątroby, panel hormonalny, HbA1c, czynność nerek, PSA.' },
        purpose: { hu: 'Baseline. Prolactin-emelkedett baseline kontraindikáció.', en: 'Baseline. Elevated prolactin baseline is a contraindication.', pl: 'Baseline. Podwyższona prolaktyna to przeciwwskazanie.' },
      },
      midCycle: {
        label: { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie' },
        timing: { hu: '6-8. hét', en: 'Week 6-8', pl: 'Tydzień 6-8' },
        markers: { hu: 'Lipid panel, májfunkció, E2, Prolactin (Deca-dick prevenció), vérnyomás.', en: 'Lipid panel, liver function, E2, Prolactin (Deca-dick prevention), BP.', pl: 'Lipidogram, wątroba, E2, prolaktyna, ciśnienie.' },
        purpose: { hu: 'Prolactin >25 ng/mL: cabergoline 0.25 mg 2x/hét. HDL drasztikus csökkenés esetén ciklus-megszakítás.', en: 'Prolactin >25 ng/mL: cabergoline 0.25 mg 2x/week. HDL drastic drop indicates cycle interruption.', pl: 'Prolaktyna >25 ng/mL: kabergolina. Drastyczny spadek HDL = przerwanie.' },
      },
      postCycle: {
        label: { hu: 'PCT', en: 'PCT', pl: 'PCT' },
        timing: { hu: 'Utolsó injekció után 3 héttel + 12-16. hét', en: '3 weeks after last injection + week 12-16', pl: '3 tygodnie po ostatniej iniekcji + 12-16 tydzień' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, SHBG, Prolactin, lipid recovery.', en: 'Total T, Free T, LH, FSH, E2, SHBG, Prolactin, lipid recovery.', pl: 'Total T, Free T, LH, FSH, E2, SHBG, prolaktyna.' },
        purpose: { hu: 'Deca-szuppresszió 12-16 hétig dokumentált; PCT hosszabb mint rövid-felezésű AAS-eken.', en: 'Deca suppression documented for 12-16 weeks; PCT longer than short-half-life AAS.', pl: 'Supresja przez 12-16 tygodni; PCT dłuższe.' },
      },
      cruise: {
        label: { hu: 'Cruise alatt', en: 'On Cruise', pl: 'Podczas Cruise' },
        timing: { hu: '6 hetente', en: 'Every 6 weeks', pl: 'Co 6 tygodni' },
        markers: { hu: 'Total T, E2, Prolactin, lipid panel, HbA1c, PSA.', en: 'Total T, E2, Prolactin, lipid panel, HbA1c, PSA.', pl: 'Total T, E2, prolaktyna, lipidogram, HbA1c, PSA.' },
        purpose: { hu: 'Hosszú-távú Deca-cruise lehetséges alacsony dózison (100-150mg/hét), de prolactin-monitoring kötelező.', en: 'Long-term Deca cruising possible at low dose (100-150mg/week), but prolactin monitoring mandatory.', pl: 'Długoterminowy cruise możliwy przy niskiej dawce.' },
      },
    },
  },

  // ===== EXTRA 3. DIANABOL =====
  {
    id: 'dianabol-info',
    name: 'Dianabol',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Methandrostenolone, 17α-alkilált orális AAS. Klasszikus "kickstart" bulking szteroid, magas hepatotoxicitással.',
      en: 'Methandrostenolone, 17α-alkylated oral AAS. Classic "kickstart" bulking steroid with high hepatotoxicity.',
      pl: 'Methandrostenolone, 17α-alkilowany doustny AAS. Klasyczny "kickstart" bulking z wysoką hepatotoksycznością.',
    },
    description: {
      hu: 'A Dianabol (Methandrostenolone) az első tömegesen forgalmazott orális AAS, John Bosley Ziegler szintetizálta 1955-ben az amerikai súlyemelő válogatott számára. 17α-alkilezett orális vegyület, gyors vízretenciós izomtömeg-növekedést okoz. "Kickstart" használat 4-6 hét, hosszabb-hatású injekciós AAS-ek mellé. Aromatizál, ami E2-növelés + gyno + vízretenció kockázattal jár. Hepatotoxicitás magas (ALT/AST jelentősen emelkedik), 17α-alkilezett első-pass metabolizmus miatt.',
      en: 'Dianabol (Methandrostenolone) was the first mass-marketed oral AAS, synthesized by John Bosley Ziegler in 1955 for the US weightlifting team. A 17α-alkylated oral compound, it produces rapid water-retentive muscle gain. "Kickstart" use is 4-6 weeks alongside longer-acting injectable AAS. It aromatizes, causing E2 rise + gyno + water retention risk. Hepatotoxicity is high (ALT/AST rises significantly) due to 17α-alkylated first-pass metabolism.',
      pl: 'Dianabol to pierwszy masowo sprzedawany doustny AAS, zsyntetyzowany przez Zieglera w 1955 r. dla amerykańskich ciężarowców. Doustny 17α-alkilowany, szybki retencyjny przyrost masy. "Kickstart" 4-6 tygodni z dłuższymi AAS iniekcyjnymi. Aromatyzuje. Wysoka hepatotoksyczność.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista, 17α-alkilezett, aromatizál', en: 'AR agonist, 17α-alkylated, aromatizes', pl: 'Agonista AR, 17α-alkilowany' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '3-6 óra', en: '3-6 hours', pl: '3-6 godzin' } },
      { label: { hu: 'Anabolikus arány', en: 'Anabolic ratio', pl: 'Stosunek' }, value: { hu: '210:60', en: '210:60', pl: '210:60' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: Schedule III. EU: Rx korlátozott.', en: 'USA: Schedule III. EU: restricted Rx.', pl: 'USA: Schedule III.' } },
    ],
    mechanism: {
      hu: '17α-alkilezett AR-agonista. Aromatáz konvertálja E2-é (vízretenció, gyno-kockázat). 5α-reduktáz minimálisan aktiválja DHT-szerű metabolittá.',
      en: '17α-alkylated AR agonist. Aromatase converts to E2 (water retention, gyno risk). 5α-reductase minimally activates to DHT-like metabolite.',
      pl: '17α-alkilowany agonista AR. Aromataza konwertuje do E2.',
    },
    legalStatus: {
      hu: 'USA: Schedule III. HU/EU: vény nélkül illegális, gyógyszertári forgalom megszűnt. WADA: tiltott.',
      en: 'USA: Schedule III. HU/EU: illegal without prescription, no pharmacy distribution. WADA: banned.',
      pl: 'USA: Schedule III. UE: nielegalny. WADA: zakazany.',
    },
    onsetTime: '3-7 days',
    halfLife: '3-6 h',
    interactionsWith: ['aromatase inhibitors', 'alcohol', 'NSAIDs'],
    wadaStatus: 'banned',
    androgenicRatio: '210:60',
    benefits: [
      { hu: 'Gyors izomtömeg + vízretenció (3-5 kg / 4 hét)', en: 'Rapid mass + water retention (3-5 kg / 4 weeks)', pl: 'Szybki przyrost + retencja' },
      { hu: 'Erő-növekedés "kickstart" cikluson', en: 'Strength gain in "kickstart" cycle', pl: 'Wzrost siły w "kickstart"' },
      { hu: 'Mood elevation (dopaminerg + ösztrogén-mediált)', en: 'Mood elevation (dopaminergic + estrogen-mediated)', pl: 'Podniesienie nastroju' },
    ],
    studies: [
      { title: 'Methandrostenolone effects on body composition and strength', authors: 'Hervey GR, Knibbs AV, Burkinshaw L et al.', journal: 'Clin Sci. 1981;60(4):457-461.', pmid: '6263593' },
      { title: 'Cholestatic hepatitis associated with methandrostenolone', authors: 'Søe KL, Søe M, Gluud C.', journal: 'Pharmacol Toxicol. 1992;70(4):293-294.', pmid: '1502619' },
      { title: 'Anabolic steroid cardiovascular toxicity', authors: 'Baggish AL, Weiner RB, Kanayama G et al.', journal: 'Circulation. 2017;135(21):1991-2002.', pmid: '28533317' },
    ],
    related: ['testosterone-info', 'anavar-info', 'trenbolone-info'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 20, medium: 30, high: 50 },
      unit: 'mg/nap',
      note: {
        hu: '"Kickstart" 4-6 hét, hosszabb-hatású injekciós AAS-ek mellé. Naponta 2-3x felosztott dózis a rövid felezési idő (3-6 óra) miatt. Aromatáz-inhibitor (anastrozol 0.5 mg EOD) gyakran szükséges az E2-emelkedés miatt. TUDCA 500-750 mg/nap májvédő.',
        en: '"Kickstart" 4-6 weeks alongside longer-acting injectable AAS. 2-3 daily doses given the 3-6 h half-life. Aromatase inhibitor (anastrozole 0.5 mg EOD) often needed for E2 rise. TUDCA 500-750 mg/day liver support.',
        pl: '"Kickstart" 4-6 tygodni. 2-3 dawki dziennie. Inhibitor aromatazy często wymagany. TUDCA 500-750 mg/dzień.',
      },
    },
    bloodwork: {
      preCycle: {
        label: { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing: { hu: '2 héttel előtt', en: '2 weeks before', pl: '2 tygodnie przed' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, bilirubin, INR. Plus: lipid, hormon-panel, E2, vesefunkció.', en: 'Hepatic priority: ALT, AST, GGT, bilirubin, INR. Plus lipid, hormone, E2, renal.', pl: 'Priorytet wątrobowy + reszta.' },
        purpose: { hu: 'Máj-baseline. Dianabol ALT/AST baseline-emelt esetén kontraindikált.', en: 'Liver baseline. Contraindicated if ALT/AST elevated.', pl: 'Baseline wątroby krytyczny.' },
      },
      midCycle: {
        label: { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie' },
        timing: { hu: '2-3. hét', en: 'Week 2-3', pl: 'Tydzień 2-3' },
        markers: { hu: 'ALT, AST, GGT, bilirubin, lipid panel (HDL drasztikus csökkenés), E2, vérnyomás.', en: 'ALT, AST, GGT, bilirubin, lipid panel (drastic HDL drop), E2, BP.', pl: 'ALT, AST, GGT, bilirubina, lipidogram, E2, ciśnienie.' },
        purpose: { hu: 'ALT/AST >3x = ciklus-megszakítás. E2 emelkedés = AI (anastrozol 0.5 mg EOD).', en: 'ALT/AST >3x = stop. E2 rise = AI (anastrozole 0.5 mg EOD).', pl: 'ALT/AST >3x = przerwanie. Wzrost E2 = AI.' },
      },
      postCycle: {
        label: { hu: 'PCT', en: 'PCT', pl: 'PCT' },
        timing: { hu: 'PCT 4. + 8-12. hét', en: 'PCT week 4 + 8-12', pl: 'PCT tydzień 4 + 8-12' },
        markers: { hu: 'Total T, Free T, LH, FSH, E2, hepatikus + lipid recovery.', en: 'Total T, Free T, LH, FSH, E2, hepatic + lipid recovery.', pl: 'Total T, LH, FSH, E2, recovery wątroby i lipidów.' },
        purpose: { hu: 'HPTA + hepatikus recovery verifikálás.', en: 'Verify HPTA + hepatic recovery.', pl: 'Weryfikacja recovery.' },
      },
      cruise: null,
    },
  },

  // ===== EXTRA 4. METHYLSTENBOLONE =====
  {
    id: 'methylstenbolone',
    name: 'Methylstenbolone',
    image: null,
    accentColor: '#a78bfa',
    tagColor: 'rgba(167,139,250,0.18)',
    shortDesc: {
      hu: 'Designer prohormon (2,3α-epitio-17α-methylstenbolone). Erős AR-agonista, magas hepatotoxicitással.',
      en: 'Designer prohormone (2,3α-epithio-17α-methylstenbolone). Strong AR agonist with high hepatotoxicity.',
      pl: 'Designer prohormon. Silny agonista AR z wysoką hepatotoksycznością.',
    },
    description: {
      hu: 'A Methylstenbolone (M-Sten, Ultradrol) designer prohormon, amelyet 2008-2012 között az USA-ban dietary supplement-ként árultak (Iron Mag Labs, Antaeus Labs). A DASCA 2014 óta kontrollált. Hatása erős AR-agonizmus, hasonló a Superdrol-hoz, de prosztata-mellékhatások hangsúlyosabbak. Hepatotoxicitás magas (17α-metilezett orális).',
      en: 'Methylstenbolone (M-Sten, Ultradrol) is a designer prohormone sold OTC in the US 2008-2012 as a dietary supplement (Iron Mag Labs, Antaeus Labs). Controlled under DASCA 2014. Strong AR agonism, similar to Superdrol but with more pronounced prostate side effects. High hepatotoxicity (17α-methylated oral).',
      pl: 'Methylstenbolone to designer prohormon sprzedawany OTC w USA 2008-2012. Kontrolowany od DASCA 2014. Silny agonizm AR.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AR-agonista (anabolikus 660 / androgén 660)', en: 'AR agonist (anabolic 660 / androgenic 660)', pl: 'Agonista AR (660/660)' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '8-12 óra', en: '8-12 hours', pl: '8-12 godzin' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: DASCA 2014 kontrollált. EU: nem szabályozott egységesen.', en: 'USA: DASCA 2014 controlled. EU: not uniformly regulated.', pl: 'USA: kontrolowany od 2014.' } },
    ],
    mechanism: {
      hu: 'AR-receptor erős agonista, 2,3α-epitio-csoporttal nem aromatizál. 17α-metil-csoport hepatotoxikus.',
      en: 'Strong AR agonist; 2,3α-epithio group prevents aromatization. 17α-methyl group is hepatotoxic.',
      pl: 'Silny agonista AR, brak aromatyzacji.',
    },
    legalStatus: {
      hu: 'USA: DASCA 2014 óta kontrollált. EU: nem szabályozott egységesen, vény nélkül illegális. WADA: tiltott.',
      en: 'USA: controlled since DASCA 2014. EU: not uniformly regulated, illegal without prescription. WADA: banned.',
      pl: 'USA: kontrolowany od 2014. UE: nielegalny bez recepty. WADA: zakazany.',
    },
    onsetTime: '7-10 days',
    halfLife: '8-12 h',
    interactionsWith: ['alcohol', 'NSAIDs', 'liver hepatotoxins'],
    wadaStatus: 'banned',
    androgenicRatio: '660:660',
    benefits: [
      { hu: 'Erős izomtömeg-növekedés (3-5 kg / 3-4 hét)', en: 'Strong muscle gain (3-5 kg / 3-4 weeks)', pl: 'Silny przyrost masy' },
      { hu: 'Erőtempó-emelkedés', en: 'Strength gain', pl: 'Wzrost siły' },
      { hu: 'Nincs aromatizáció (száraz megjelenés)', en: 'No aromatization (dry look)', pl: 'Brak aromatyzacji' },
    ],
    studies: [
      { title: 'Designer steroid hepatotoxicity: acute liver failure from methylstenbolone', authors: 'Robles-Diaz M, Gonzalez-Jimenez A, Medina-Caliz I et al.', journal: 'Liver Int. 2015;35(11):2483-2493.', pmid: '25867306' },
      { title: 'Designer steroids in dietary supplements', authors: 'Geyer H, Schänzer W, Thevis M.', journal: 'Mol Cell Endocrinol. 2014;464:99-108.', pmid: '24882754' },
    ],
    related: ['superdrol', '1-andro'],
    doseCalc: {
      type: 'fixed',
      fixed: { low: 4, medium: 8, high: 16 },
      unit: 'mg/nap',
      note: {
        hu: 'Maximum 4 hét ciklus, nem hosszabb. Két napra felosztott dózis a 8-12 órás felezési idő miatt. 17α-metilezett orális, ALT/AST >2x emelkedés esetén AZONNAL leállítás. TUDCA 750 mg/nap kötelező. PCT (Clomid + Nolvadex) szükséges.',
        en: 'Max 4 week cycle, no longer. Split into 2 daily doses given 8-12 h half-life. 17α-methylated oral; ALT/AST >2x rise = IMMEDIATE stop. TUDCA 750 mg/day mandatory. PCT (Clomid + Nolvadex) needed.',
        pl: 'Maks. 4 tygodnie. 2 dawki dziennie. ALT/AST >2x = natychmiast stop. TUDCA 750 mg/dzień.',
      },
    },
    bloodwork: {
      preCycle: {
        label: { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing: { hu: '2 héttel előtt', en: '2 weeks before', pl: '2 tygodnie przed' },
        markers: { hu: 'Hepatikus prioritás: ALT, AST, GGT, bilirubin, INR. Plus lipid, hormon-panel.', en: 'Hepatic priority + lipid + hormone panel.', pl: 'Priorytet wątrobowy + reszta.' },
        purpose: { hu: 'Máj-baseline kritikus. Bármilyen meglévő máj-zavar kontraindikáció.', en: 'Liver baseline critical.', pl: 'Baseline wątroby krytyczny.' },
      },
      midCycle: {
        label: { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie' },
        timing: { hu: '2. hét végén', en: 'End of week 2', pl: 'Koniec tygodnia 2' },
        markers: { hu: 'ALT, AST, GGT, bilirubin, lipid panel.', en: 'ALT, AST, GGT, bilirubin, lipid panel.', pl: 'ALT, AST, GGT, bilirubina, lipidogram.' },
        purpose: { hu: 'ALT/AST >2x = AZONNAL ciklus-megszakítás.', en: 'ALT/AST >2x = IMMEDIATE stop.', pl: 'ALT/AST >2x = natychmiast przerwanie.' },
      },
      postCycle: {
        label: { hu: 'PCT', en: 'PCT', pl: 'PCT' },
        timing: { hu: 'PCT 4. + 8-12. hét', en: 'PCT week 4 + 8-12', pl: 'PCT tydzień 4 + 8-12' },
        markers: { hu: 'Total T, LH, FSH, E2, hepatikus + lipid recovery.', en: 'Total T, LH, FSH, E2, hepatic + lipid recovery.', pl: 'Total T, LH, FSH, E2, recovery.' },
        purpose: { hu: 'HPTA + hepatikus recovery verifikálás.', en: 'Verify HPTA + hepatic recovery.', pl: 'Weryfikacja recovery.' },
      },
      cruise: null,
    },
  },

  // ===== EXTRA 5. HGH =====
  {
    id: 'hgh-info',
    name: 'HGH',
    image: null,
    accentColor: '#10b981',
    tagColor: 'rgba(16,185,129,0.18)',
    shortDesc: {
      hu: 'Rekombináns humán növekedési hormon (rhGH, Somatropin). Exogén GH-pótlás, sport-doppingként WADA-tiltott.',
      en: 'Recombinant human growth hormone (rhGH, Somatropin). Exogenous GH replacement, banned by WADA as doping.',
      pl: 'Rekombinowany ludzki hormon wzrostu (rhGH, Somatropin). Egzogenne wsparcie GH, zakazany przez WADA.',
    },
    description: {
      hu: 'A rekombináns humán növekedési hormon (rhGH, Somatropin) a természetes, hipofízisben termelődő GH biológiailag azonos formája. FDA-engedélyezett GH-deficit, Turner-szindróma, idiopátiás low stature és AIDS-cachexia indikációkban (Genotropin, Humatrope, Norditropin, Saizen). Sportkontextusban off-label használat izomtömeg-növelésre + recovery + zsírvesztésre. WADA-tiltott (S2 kategória), detekciós ablak rövid (~24 óra) miatt nehezen detektálható biomarker-tesztekkel. Hosszú-távú használat akromegáliához, szívizom-hipertrófiához és inzulin-rezisztenciához vezet.',
      en: 'Recombinant human growth hormone (rhGH, Somatropin) is the biologically identical form of natural pituitary GH. FDA-approved for GH deficiency, Turner syndrome, idiopathic short stature, and AIDS cachexia (Genotropin, Humatrope, Norditropin, Saizen). In sport, off-label use for muscle mass + recovery + fat loss. WADA-banned (S2 category); short detection window (~24 h) makes biomarker testing essential. Long-term use leads to acromegaly, cardiac hypertrophy, and insulin resistance.',
      pl: 'Rekombinowany ludzki hormon wzrostu (rhGH, Somatropin) to biologicznie identyczna forma naturalnego GH. Zatwierdzony FDA dla niedoboru GH, zespołu Turnera, kacheksji AIDS. W sporcie off-label dla masy + recovery + redukcji. WADA-zakazany.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'GH-receptor agonista, IGF-1-emelő', en: 'GH receptor agonist, IGF-1 elevator', pl: 'Agonista GH receptora' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '~3 óra (rhGH szubkután)', en: '~3 hours (subcutaneous)', pl: '~3 godziny' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '4-8 hét (IGF-1 csúcs)', en: '4-8 weeks (IGF-1 peak)', pl: '4-8 tygodni' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: FDA Rx. HU/EU: Rx. WADA: tiltott.', en: 'USA: FDA Rx. HU/EU: Rx. WADA: banned.', pl: 'USA/UE: Rx. WADA: zakazany.' } },
    ],
    mechanism: {
      hu: 'GH-receptor agonista, májban IGF-1-szintézis indukciója. Direkt zsírszöveti lipolízis (HSL aktiválás), és vázizom-szintű anabolizmus (mTOR + IGF-1 paracrin).',
      en: 'GH receptor agonist, induces hepatic IGF-1 synthesis. Direct adipose lipolysis (HSL activation), and skeletal muscle anabolism (mTOR + IGF-1 paracrine).',
      pl: 'Agonista GH receptora, indukuje syntezę IGF-1 w wątrobie.',
    },
    legalStatus: {
      hu: 'USA: FDA Rx (GH-deficit, Turner, cachexia). HU/PL/EU: Rx hipofízis-betegségre. WADA: tiltott (S2).',
      en: 'USA: FDA Rx (GH deficiency, Turner, cachexia). HU/PL/EU: Rx for pituitary disease. WADA: banned (S2).',
      pl: 'USA/UE: Rx. WADA: zakazany.',
    },
    onsetTime: '4-8 weeks (IGF-1 peak)',
    halfLife: '~3 h (subcutaneous)',
    interactionsWith: ['insulin', 'thyroid hormones', 'glucocorticoids'],
    wadaStatus: 'banned',
    detectionWindow: {
      hu: '~24 óra direkt rhGH-teszt; biomarker teszt (IGF-1 + P-III-NP) érzékenyebb, 7-14 napos ablak.',
      en: '~24 h direct rhGH test; biomarker test (IGF-1 + P-III-NP) more sensitive with 7-14 day window.',
      pl: '~24 h test bezpośredni; biomarker 7-14 dni.',
    },
    benefits: [
      { hu: 'Lean mass-növekedés (anti-katabolikus + IGF-1 mediált)', en: 'Lean mass gain (anti-catabolic + IGF-1 mediated)', pl: 'Przyrost masy beztłuszczowej' },
      { hu: 'Zsírvesztés (HSL-aktiválás zsírszövetben)', en: 'Fat loss (HSL activation in adipose)', pl: 'Redukcja tłuszczu' },
      { hu: 'Recovery + szöveti regeneráció', en: 'Recovery + tissue regeneration', pl: 'Regeneracja' },
      { hu: 'Bőr-, haj-, köröm-minőségjavulás', en: 'Skin, hair, nail quality improvement', pl: 'Poprawa skóry, włosów' },
    ],
    studies: [
      { title: 'Growth hormone in sport: doping and health implications', authors: 'Sigalos JT, Pastuszak AW.', journal: 'World J Mens Health. 2017;35(2):109-115.', pmid: '28868816' },
      { title: 'Effects of growth hormone on muscle and physical function', authors: 'Liu H, Bravata DM, Olkin I et al.', journal: 'Ann Intern Med. 2008;148(10):747-758.', pmid: '18347257' },
      { title: 'Acromegaly: clinical features and management', authors: 'Melmed S.', journal: 'N Engl J Med. 2006;355(24):2558-2573.', pmid: '17167139' },
    ],
    related: ['mk-677', 'testosterone-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 0.025, medium: 0.05, high: 0.075 },
      unit: 'IU/nap',
      note: {
        hu: 'Anti-aging 2 IU/nap (Alacsony tartomány körül), sport 4-6 IU/nap (Közepes). Hosszú-távú használat akromegáliához + szívizom-hipertrófiához vezet. Reggel ébredés után vagy edzés előtt 30 perccel SC injekció. IGF-1 célérték <800 ng/mL. HbA1c monitoring kötelező.',
        en: 'Anti-aging 2 IU/day (around Low), sport 4-6 IU/day (Medium). Long-term use leads to acromegaly + cardiac hypertrophy. SC injection in the morning or 30 min pre-workout. IGF-1 target <800 ng/mL. HbA1c monitoring mandatory.',
        pl: 'Anti-aging 2 IU/dzień, sport 4-6 IU/dzień. Długoterminowo akromegalia. IGF-1 cel <800 ng/mL. HbA1c monitoring.',
      },
    },
    bloodwork: {
      preCycle: {
        label: { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing: { hu: '2 héttel előtt', en: '2 weeks before', pl: '2 tygodnie przed' },
        markers: { hu: 'IGF-1 baseline, HbA1c, éhomi glükóz, inzulin (HOMA-IR), TSH/fT4, lipid panel.', en: 'IGF-1 baseline, HbA1c, fasting glucose, insulin (HOMA-IR), TSH/fT4, lipid panel.', pl: 'IGF-1, HbA1c, glukoza, insulina, TSH/fT4, lipidogram.' },
        purpose: { hu: 'Baseline. Prediabetes vagy inzulin-rezisztencia kontraindikáció.', en: 'Baseline. Prediabetes or insulin resistance is contraindication.', pl: 'Baseline.' },
      },
      midCycle: {
        label: { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie' },
        timing: { hu: '6-8. hét', en: 'Week 6-8', pl: 'Tydzień 6-8' },
        markers: { hu: 'IGF-1 (cél: <800 ng/mL), HbA1c, éhomi glükóz, TSH/fT4 (HGH csökkenti fT4-et).', en: 'IGF-1 (target <800 ng/mL), HbA1c, fasting glucose, TSH/fT4 (HGH lowers fT4).', pl: 'IGF-1, HbA1c, glukoza, TSH/fT4.' },
        purpose: { hu: 'IGF-1 >1000 ng/mL = akromegália-kockázat, dóziscsökkentés. HbA1c >6% = ciklus megszakítás.', en: 'IGF-1 >1000 ng/mL = acromegaly risk, dose reduction. HbA1c >6% = stop cycle.', pl: 'IGF-1 >1000 ng/mL = ryzyko akromegalii.' },
      },
      postCycle: null,
      cruise: null,
    },
  },

  // ===== EXTRA 6. EPO =====
  {
    id: 'epo-info',
    name: 'EPO',
    image: null,
    accentColor: '#ef4444',
    tagColor: 'rgba(239,68,68,0.18)',
    shortDesc: {
      hu: 'Rekombináns humán eritropoetin (rhEPO). Vörösvértest-termelés stimuláló, endurance-sportokban WADA-tiltott.',
      en: 'Recombinant human erythropoietin (rhEPO). Stimulates red blood cell production, WADA-banned in endurance sports.',
      pl: 'Rekombinowana ludzka erytropoetyna (rhEPO). Stymuluje produkcję erytrocytów, zakazana przez WADA.',
    },
    description: {
      hu: 'A rekombináns humán eritropoetin (rhEPO, Epoetin alfa/beta, Procrit, Eprex, Aranesp) a természetes vesetermelt EPO biológiailag azonos formája. FDA-engedélyezett krónikus vesebetegség, kemoterápia-okozta anémia és prematuritás-anémia indikációkban. Endurance-sportokban (kerékpározás, állóképességi atlétika) off-label használat: a hematokritot és VO2max-ot 8-10%-kal emeli (Lundby 2011). WADA-tiltott, és a vérképzési stimuláció jelentős thromboticus + kardiovaszkuláris kockázattal jár (vérviszkozitás-emelkedés).',
      en: 'Recombinant human erythropoietin (rhEPO, Epoetin alfa/beta, Procrit, Eprex, Aranesp) is the biologically identical form of natural kidney-produced EPO. FDA-approved for chronic kidney disease, chemo-induced anemia, and prematurity anemia. In endurance sports (cycling, distance athletics), off-label use raises hematocrit and VO2max by 8-10% (Lundby 2011). WADA-banned; erythropoietic stimulation carries serious thrombotic + cardiovascular risk (blood viscosity rise).',
      pl: 'Rekombinowana erytropoetyna (rhEPO) to biologicznie identyczna forma naturalnej EPO nerek. Zatwierdzona FDA dla CKD i anemii chemoterapeutycznej. W sportach wytrzymałościowych podnosi hematokryt i VO2max o 8-10%. WADA-zakazana.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'EPO-receptor agonista, eritropoezis-stimuláns', en: 'EPO receptor agonist, erythropoiesis-stimulating', pl: 'Agonista receptora EPO' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '5-13 óra (rhEPO szubkután)', en: '5-13 h (subcutaneous)', pl: '5-13 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '7-14 nap (retikulocita-emelés)', en: '7-14 days (reticulocyte rise)', pl: '7-14 dni' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: FDA Rx (Procrit). EU: Rx. WADA: tiltott.', en: 'USA: FDA Rx (Procrit). EU: Rx. WADA: banned.', pl: 'USA/UE: Rx. WADA: zakazany.' } },
    ],
    mechanism: {
      hu: 'EPO-receptor agonista a vörösvértest-prekurzoroknak (BFU-E, CFU-E) a csontvelőben. Hipoxia-szerű jel: differenciálódás és proliferáció eritroid sejtekben.',
      en: 'EPO receptor agonist on red blood cell precursors (BFU-E, CFU-E) in bone marrow. Hypoxia-like signal: differentiation and proliferation in erythroid cells.',
      pl: 'Agonista receptora EPO na prekursorach erytrocytów w szpiku.',
    },
    legalStatus: {
      hu: 'USA: FDA Rx (Procrit, Aranesp). HU/PL/EU: Rx renalis anémiára. WADA: tiltott (S2 hormon és metabolikus modulátor).',
      en: 'USA: FDA Rx (Procrit, Aranesp). HU/PL/EU: Rx for renal anemia. WADA: banned (S2 hormone and metabolic modulator).',
      pl: 'USA/UE: Rx. WADA: zakazany.',
    },
    onsetTime: '7-14 days',
    halfLife: '5-13 h (subcutaneous)',
    interactionsWith: ['iron supplements', 'ACE inhibitors'],
    wadaStatus: 'banned',
    detectionWindow: {
      hu: 'rhEPO direkt teszt: 3-4 nap (IEF-tesztelés WADA-akkreditált laborban). Biomarker (ABP, Athlete Biological Passport) 4-6 hetes ablakkal érzékeny.',
      en: 'Direct rhEPO test: 3-4 days (IEF testing in WADA-accredited labs). Biomarker (ABP, Athlete Biological Passport) sensitive over 4-6 week window.',
      pl: 'Test bezpośredni: 3-4 dni. Biomarker (ABP) 4-6 tygodni.',
    },
    benefits: [
      { hu: 'VO2max-emelkedés 8-10% (endurance-sportokra szignifikáns)', en: 'VO2max rise 8-10% (significant for endurance sports)', pl: 'Wzrost VO2max o 8-10%' },
      { hu: 'Hematokrit-emelkedés (45 → 50+%)', en: 'Hematocrit rise (45 → 50+%)', pl: 'Wzrost hematokrytu' },
      { hu: 'Hemoglobin-emelés és oxigén-szállító kapacitás', en: 'Hemoglobin rise and O2 carrying capacity', pl: 'Wzrost hemoglobiny' },
    ],
    studies: [
      { title: 'Erythropoietin treatment elevates haemoglobin concentration', authors: 'Lundby C, Olsen NV.', journal: 'J Physiol. 2011;589(Pt 6):1265-1271.', pmid: '21224229' },
      { title: 'Erythropoietin doping in cycling: history and detection', authors: 'Lasne F, de Ceaurriz J.', journal: 'Nature. 2000;405(6787):635.', pmid: '10864312' },
      { title: 'Blood doping at the Olympics', authors: 'Eichner ER.', journal: 'Curr Sports Med Rep. 2007;6(4):237-238.', pmid: '17617999' },
    ],
    related: ['testosterone-info'],
    doseCalc: {
      type: 'bodyweight',
      perKg: { low: 20, medium: 50, high: 100 },
      unit: 'IU/hét',
      note: {
        hu: 'Klinikai vesebetegség-dózis: 50-100 IU/kg/hét, 2-3x felosztott SC injekciókban. Sport-doppingként alacsonyabb (mikrodose 20-30 IU/kg) is használt a detekciós ablak kerülésére. Hematokrit >55% = thromboticus krízis-kockázat, AZONNAL leállítás. Vas-pótlás kötelező.',
        en: 'Clinical renal disease dose: 50-100 IU/kg/week, 2-3 split SC injections. Sport doping micro-dose 20-30 IU/kg also used to evade detection. Hematocrit >55% = thrombotic crisis risk, STOP immediately. Iron supplementation mandatory.',
        pl: 'Klinicznie 50-100 IU/kg/tydzień. Hematokryt >55% = ryzyko zakrzepowe. Suplementacja żelaza obowiązkowa.',
      },
    },
    bloodwork: {
      preCycle: {
        label: { hu: 'Ciklus előtt', en: 'Pre-cycle', pl: 'Przed cyklem' },
        timing: { hu: '1 héttel előtt', en: '1 week before', pl: '1 tydzień przed' },
        markers: { hu: 'CBC (hematokrit, hemoglobin, RBC), retikulocita-szám, vas (ferritin, transferrin saturation, TIBC), B12 + folát, EPO endogén szint.', en: 'CBC (hematocrit, hemoglobin, RBC), reticulocyte count, iron (ferritin, transferrin saturation, TIBC), B12 + folate, endogenous EPO.', pl: 'CBC, retikulocyty, żelazo (ferrytyna, TIBC), B12 + folian, endogenne EPO.' },
        purpose: { hu: 'Baseline. Vashiány = ciklus indítás előtt korrigálni kell.', en: 'Baseline. Iron deficiency must be corrected before cycle start.', pl: 'Baseline. Niedobór żelaza skoryguj przed cyklem.' },
      },
      midCycle: {
        label: { hu: 'Ciklus közben', en: 'Mid-cycle', pl: 'W trakcie' },
        timing: { hu: '2-3. hét', en: 'Week 2-3', pl: 'Tydzień 2-3' },
        markers: { hu: 'Hematokrit (cél: <55%), hemoglobin, vérnyomás (otthon), vas-szint, vérviszkozitás.', en: 'Hematocrit (target <55%), hemoglobin, BP (home), iron level, blood viscosity.', pl: 'Hematokryt (cel <55%), hemoglobina, ciśnienie, żelazo.' },
        purpose: { hu: 'Hematokrit >55% = thromboticus krízis-kockázat, AZONNAL leállítás. Vérnyomás >160/100 = leállítás.', en: 'Hematocrit >55% = thrombotic crisis risk, STOP immediately. BP >160/100 = stop.', pl: 'Hematokryt >55% = ryzyko zakrzepowe.' },
      },
      postCycle: null,
      cruise: null,
    },
  },

  // ===== EXTRA 7. DNP =====
  {
    id: 'dnp-info',
    name: 'DNP',
    image: null,
    accentColor: '#ef4444',
    tagColor: 'rgba(239,68,68,0.18)',
    shortDesc: {
      hu: 'NE HASZNÁLD. 2,4-dinitrofenol, halálos kimenetelű hipertermia kockázattal. Edukatív kontextus a veszélyek megismertetésére.',
      en: 'DO NOT USE. 2,4-dinitrophenol, with risk of fatal hyperthermia. Educational context to make the dangers known.',
      pl: 'NIE STOSUJ. 2,4-dinitrofenol, ryzyko śmiertelnej hipertermii. Kontekst edukacyjny.',
    },
    description: {
      hu: '**FIGYELEM: A DNP használata RENDKÍVÜL VESZÉLYES, dokumentáltan halálos kimenetelű hipertermia esetekkel jár (Grundlingh 2011 systematic review). Ezt az entry-t kizárólag edukatív célból szerepeltetjük, NEM ad útmutatást a használathoz. Kérjük, ne használd, és tájékoztass másokat is a veszélyekről.** A 2,4-dinitrofenol (DNP) egy ipari vegyület (festékek, robbanóanyagok), amelyet az 1930-as években rövid ideig anti-obézis gyógyszerként forgalmaztak az USA-ban. Hatása mitokondriális oxidatív foszforilezés szétkapcsolása (uncoupling): az elektrontranszport-lánc protonjai bypass-elik az ATP-szintetázt, és a felszabaduló energia hő formájában disszipálódik. Eredmény: extrém BMR-emelés (akár +50%), de szabályozhatatlan hipertermia, ami 41-43°C testhőmérsékletet és halált okozhat.',
      en: '**WARNING: DNP use is EXTREMELY DANGEROUS, with documented fatal hyperthermia cases (Grundlingh 2011 systematic review). This entry is included for educational purposes only and DOES NOT provide usage guidance. Please do not use it, and inform others of the dangers.** 2,4-dinitrophenol (DNP) is an industrial chemical (dyes, explosives) briefly marketed as an anti-obesity drug in the 1930s in the US. It uncouples mitochondrial oxidative phosphorylation: protons from the electron transport chain bypass ATP synthase, and the released energy dissipates as heat. Result: extreme BMR rise (up to +50%), but uncontrollable hyperthermia, which can cause 41-43°C body temperature and death.',
      pl: '**OSTRZEŻENIE: DNP jest SKRAJNIE NIEBEZPIECZNY, z udokumentowanymi przypadkami śmiertelnej hipertermii. Ta pozycja jest wyłącznie edukacyjna, NIE dostarcza wskazówek użycia.** 2,4-dinitrofenol to chemikalia przemysłowa, krótko sprzedawana jako lek odchudzający w latach 30. XX w. Rozprzęga mitochondrialną fosforylację oksydacyjną.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Mitokondriális uncoupler (ATP-szintézis bypass)', en: 'Mitochondrial uncoupler (ATP synthesis bypass)', pl: 'Rozprzęgacz mitochondrialny' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '~36 óra (terápiás dózison, de kumulatív)', en: '~36 hours (therapeutic dose, but cumulative)', pl: '~36 godzin (kumulatywny)' } },
      { label: { hu: 'Halálos dózis', en: 'Lethal dose', pl: 'Dawka śmiertelna' }, value: { hu: 'Akut: 4.3 mg/kg (~300 mg felnőttön)', en: 'Acute: 4.3 mg/kg (~300 mg in adult)', pl: 'Ostra: 4.3 mg/kg (~300 mg)' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA: FDA visszavonta 1938-ban. EU/HU: emberi használatra tilos. WADA: tiltott.', en: 'USA: FDA withdrew 1938. EU/HU: prohibited for human use. WADA: banned.', pl: 'USA: wycofany 1938. UE: zakazany. WADA: zakazany.' } },
    ],
    mechanism: {
      hu: 'A 2,4-dinitrofenol egy lipofil gyenge sav, amely a mitokondriális membránon átjut és a belső térben protonokat ad le, megkerülve az ATP-szintetázt. Az elektrontranszport-lánc proton-grádiense hő formájában disszipálódik. NINCS ATP-termelés, csak hő.',
      en: '2,4-dinitrophenol is a lipophilic weak acid that crosses the mitochondrial membrane and releases protons in the inner compartment, bypassing ATP synthase. The electron transport chain proton gradient dissipates as heat. NO ATP production, only heat.',
      pl: 'Słaby kwas lipofilny, przekracza błonę mitochondrialną i uwalnia protony, omijając syntazę ATP.',
    },
    legalStatus: {
      hu: 'USA: FDA visszavonta 1938-ban (Cooke 1934 halál-esetek után). EU + HU + PL: emberi használatra tilos, importálni illegális. WADA: tiltott. Dopping-listán.',
      en: 'USA: FDA withdrew in 1938 (after Cooke 1934 fatalities). EU + HU + PL: prohibited for human use, illegal to import. WADA: banned. On doping list.',
      pl: 'USA: wycofany 1938 (po śmiertelnych przypadkach). UE: zakazany do użycia ludzkiego.',
    },
    onsetTime: '6-12 hours',
    halfLife: '~36 h (cumulative)',
    interactionsWith: ['anything increasing metabolism', 'thyroid hormones', 'stimulants'],
    wadaStatus: 'banned',
    benefits: [
      { hu: 'NINCSENEK biztonságos benefit-ek. A DNP használata KRITIKUS veszélyt jelent, függetlenül a kontextustól.', en: 'NO safe benefits. DNP use poses CRITICAL danger regardless of context.', pl: 'BRAK bezpiecznych korzyści.' },
    ],
    studies: [
      { title: '2,4-Dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death', authors: 'Grundlingh J, Dargan PI, El-Zanfaly M, Wood DM.', journal: 'J Med Toxicol. 2011;7(3):205-212.', pmid: '21739343' },
      { title: 'Dinitrophenol-induced hyperthermia: case series and review', authors: 'Bartlett J, Brunner M, Gough K.', journal: 'J Emerg Med. 2010;39(2):e85-e89.', pmid: '19150189' },
      { title: 'Death from accidental 2,4-dinitrophenol poisoning', authors: 'Pyle SA, Cooke G.', journal: 'JAMA. 1934;103(20):1571.', pmid: null },
    ],
    related: [],
    doseCalc: {
      type: 'warning',
      warning: {
        hu: 'NE HASZNÁLD. A DNP használata dokumentáltan halálos kimenetelű hipertermia-eseteket okoz (Grundlingh 2011). NINCS biztonságos dózis. Ha valaki ismerősöd használja, azonnal figyelmeztesd és kérje sürgős orvosi segítséget. Hipertermia (>40°C) tünetei: izzadás, tachykardia, tachypnoe, zavartság. 4.3 mg/kg akut letális dózis felnőttben.',
        en: 'DO NOT USE. DNP use causes documented fatal hyperthermia cases (Grundlingh 2011). There is NO safe dose. If you know someone using it, warn them immediately and seek urgent medical attention. Hyperthermia (>40°C) symptoms: sweating, tachycardia, tachypnea, confusion. 4.3 mg/kg acute lethal dose in adult.',
        pl: 'NIE STOSUJ. DNP powoduje udokumentowane przypadki śmiertelnej hipertermii (Grundlingh 2011). NIE MA bezpiecznej dawki. Jeśli ktoś znajomy stosuje, ostrzeż go natychmiast i wezwij pomoc medyczną. Hipertermia (>40°C). Dawka śmiertelna 4.3 mg/kg.',
      },
    },
  },
]

export const PERFORMANCE = [...CORE_PERFORMANCE, ...EXTRA_PERFORMANCE]

// Fixed Top 10 order, drives the starred grid in LibraryGallery.
export const TOP10_ORDER = [
  'testosterone-info',
  'trenbolone-info',
  'anavar-info',
  'superdrol',
  '1-andro',
  'ephedrine',
  'yohimbine',
  'clenbuterol',
  'albuterol',
  'mk-677',
]
