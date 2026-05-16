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
      hu: 'A Testosterone az emberi szervezet elsődleges androgén szteroidja, a Leydig-sejtek termelik a herében az LH stimulációjára. Anabolikus:androgén arány 100:100, ami minden szintetikus AAS viszonyítási alapja. FDA-jóváhagyott klinikai indikáció: primer és szekunder hipogonadizmus (Testosterone Cypionate, Enanthate, Undecanoate, transdermális gélek). Sportoló-kontextusban WADA-tiltott, de orvosi TRT keretében legitim hosszú távú használata egyre szélesebb körben dokumentált.',
      en: 'Testosterone is the primary androgenic steroid of the human body, produced by Leydig cells in the testes under LH stimulation. Anabolic:androgenic ratio 100:100, the reference point for all synthetic AAS. FDA-approved clinical indication: primary and secondary hypogonadism (Testosterone Cypionate, Enanthate, Undecanoate, transdermal gels). In sports context WADA-banned, but legitimate long-term use within medical TRT is increasingly documented.',
      pl: 'Testosteron to pierwotny steryd androgenny ludzkiego organizmu, wytwarzany przez komórki Leydiga w jądrach pod wpływem LH. Stosunek anaboliczno-androgenny 100:100, punkt odniesienia dla wszystkich syntetycznych AAS. Zatwierdzone wskazanie FDA: hipogonadyzm pierwotny i wtórny (Testosteron Cypionate, Enanthate, Undecanoate, żele transdermalne). W kontekście sportowym zakazany przez WADA, ale długoterminowe użycie medyczne w TRT jest coraz szerzej udokumentowane.',
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
    ],
    faq: [
      { q: { hu: 'Mi a különbség TRT és blast között?', en: 'What is the difference between TRT and blast?', pl: 'Jaka jest różnica między TRT a blastem?' }, a: { hu: 'TRT: orvosi protokoll, fiziológiás baseline-T (500-1000 ng/dL) fenntartása, tipikusan 100-200 mg/hét. Blast: supraphysiológiás dózis (300-600+ mg/hét) izomtömeg-építés céljából, nem orvosi indikáció.', en: 'TRT: medical protocol maintaining physiological baseline T (500-1000 ng/dL), typically 100-200 mg/week. Blast: supraphysiological dose (300-600+ mg/week) for muscle building, no medical indication.', pl: 'TRT: protokół medyczny utrzymujący fizjologiczny baseline T (500-1000 ng/dL), zwykle 100-200 mg/tydzień. Blast: dawka suprafizjologiczna (300-600+ mg/tydzień) dla budowy mięśni, bez wskazania medycznego.' } },
      { q: { hu: 'Kell-e aromatáz-inhibitor TRT alatt?', en: 'Is an aromatase inhibitor needed on TRT?', pl: 'Czy potrzebny jest inhibitor aromatazy przy TRT?' }, a: { hu: 'Nem automatikusan. AI csak akkor, ha labor-igazolt magas E2 + tüneti (gynecomastia, hangulatzavar). Vak AI-használat csökkenti az E2-t a kognitív és csontfunkcióhoz szükséges szint alá.', en: 'Not automatically. AI only if labs confirm high E2 plus symptoms (gynecomastia, mood disorder). Blind AI use lowers E2 below the level needed for cognitive and bone function.', pl: 'Nie automatycznie. AI tylko gdy badania potwierdzą wysokie E2 plus objawy (ginekomastia, zaburzenia nastroju). Ślepe użycie AI obniża E2 poniżej poziomu potrzebnego dla funkcji poznawczej i kostnej.' } },
      { q: { hu: 'Vissza tud-e térni a természetes T-termelés ciklus után?', en: 'Can natural T production return after a cycle?', pl: 'Czy naturalna produkcja T może wrócić po cyklu?' }, a: { hu: 'Általában igen, 3-12 hónap alatt PCT (Clomid/Nolvadex) protokollal. Rahnema 2014 review: tartós ciklusok után HPTA-recovery elhúzódhat, pár százaléknál tartós szuppresszió alakulhat ki.', en: 'Usually yes, in 3-12 months with PCT (Clomid/Nolvadex) protocol. Rahnema 2014 review: after long cycles HPTA recovery may be delayed, in a few percent persistent suppression may develop.', pl: 'Zwykle tak, w 3-12 miesięcy z protokołem PCT (Clomid/Nolvadex). Rahnema 2014: po długich cyklach odzyskiwanie HPTA może być opóźnione, u kilku procent może rozwinąć się trwała supresja.' } },
      { q: { hu: 'Veszélyes-e a TRT hosszú távon?', en: 'Is TRT dangerous long-term?', pl: 'Czy TRT jest niebezpieczne długoterminowo?' }, a: { hu: 'Megfelelő monitoringgal (lipid, hematokrit, PSA, E2) hipogonád férfiaknál a kockázat-haszon kedvező. Hosszú távú TRT-cohortokban a kardiovaszkuláris kockázat nem haladta meg a kontrollokét (Bhasin 2018 guideline).', en: 'With proper monitoring (lipid, hematocrit, PSA, E2) the risk-benefit is favorable in hypogonadal men. In long-term TRT cohorts cardiovascular risk did not exceed controls (Bhasin 2018 guideline).', pl: 'Przy odpowiednim monitorowaniu (lipidy, hematokryt, PSA, E2) bilans korzyść-ryzyko jest korzystny u mężczyzn z hipogonadyzmem. W długoterminowych kohortach TRT ryzyko sercowo-naczyniowe nie przekraczało kontroli (Bhasin 2018).' } },
    ],
    related: ['trenbolone-info', 'anavar-info', 'winstrol-info', 'nandrolone-info', 'dianabol-info'],
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
      hu: 'AR-agonista 5x affinitással testosteronhoz képest; progeszteron-receptor parciális agonista (prolaktin-emelkedést okoz); nem aromatizál ösztrogénné.',
      en: 'AR agonist with 5x affinity vs testosterone; partial progesterone-receptor agonist (causes prolactin elevation); does not aromatize to estrogen.',
      pl: 'Agonista AR z 5x powinowactwem vs testosteron; częściowy agonista receptora progesteronowego (powoduje wzrost prolaktyny); nie aromatyzuje do estrogenów.',
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
      { hu: 'IGF-1 emelkedés és kortizol-receptor antagonizmus', en: 'Increased IGF-1 and cortisol-receptor antagonism', pl: 'Wzrost IGF-1 i antagonizm receptora kortyzolu' },
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
    ],
    faq: [
      { q: { hu: 'Miért kell cabergoline a Tren mellé?', en: 'Why is cabergoline needed alongside Tren?', pl: 'Dlaczego kabergolina jest potrzebna obok Trenu?' }, a: { hu: 'A Trenbolone parciális progeszteron-receptor agonista, ami prolaktin-emelkedéshez vezethet. Magas prolaktin: gynecomastia-szerű tünet, libidó-csökkenés, erektilis diszfunkció. Cabergoline 0,25-0,5 mg 2x/hét dopamin-D2-agonistaként szuppresszálja a prolaktint.', en: 'Trenbolone is a partial progesterone-receptor agonist, which can elevate prolactin. High prolactin: gyno-like symptoms, libido loss, erectile dysfunction. Cabergoline 0.25-0.5 mg twice weekly as a dopamine D2 agonist suppresses prolactin.', pl: 'Trenbolon jest częściowym agonistą receptora progesteronowego, co może podnosić prolaktynę. Wysoka prolaktyna: objawy ginekomastii, spadek libido, dysfunkcja erekcyjna. Kabergolina 0,25-0,5 mg 2x/tydzień jako agonista dopaminy D2 hamuje prolaktynę.' } },
      { q: { hu: 'Miért emelkedik a kreatinin Tren alatt?', en: 'Why does creatinine rise on Tren?', pl: 'Dlaczego kreatynina rośnie podczas Trenu?' }, a: { hu: 'Részben izomtömeg-gyarapodás (több izom = több kreatinin termelődés), részben azonban a Tren direkt nefrotoxicitása. eGFR-csökkenés és cystatin-C emelkedés is megjelenhet, ami direkt vesekárosodásra utal. Tartós kreatinin >1,4 mg/dL ciklus-megszakítás indikáció.', en: 'Partly muscle mass gain (more muscle = more creatinine production), but partly direct Tren nephrotoxicity. eGFR drop and cystatin-C rise can also appear, indicating direct renal damage. Persistent creatinine >1.4 mg/dL is an indication to stop the cycle.', pl: 'Częściowo przyrost masy mięśniowej (więcej mięśni = więcej kreatyniny), ale częściowo bezpośrednia nefrotoksyczność Trenu. Spadek eGFR i wzrost cystatyny-C również mogą się pojawić, wskazując na bezpośrednie uszkodzenie nerek. Trwała kreatynina >1,4 mg/dL to wskazanie do przerwania cyklu.' } },
      { q: { hu: 'Mi a "Tren-cough"?', en: 'What is Tren-cough?', pl: 'Co to jest Tren-cough?' }, a: { hu: 'Injekció utáni rövid, intenzív köhögő-roham, jellemzően Tren-Acetate után. Oka feltételezetten olajos depó pulmonáris mikroembólia. Veszélyes nem (de kellemetlen), és specifikusan a Trenre jellemző. Lassú injekciós technika csökkenti.', en: 'Short, intense coughing fit after injection, typical with Tren-Acetate. Cause is thought to be oil depot pulmonary microembolism. Not dangerous (but unpleasant), and specific to Tren. Slow injection technique reduces it.', pl: 'Krótki, intensywny atak kaszlu po iniekcji, typowy dla Tren-Acetate. Przyczyna prawdopodobnie mikroembolia płucna depozytu olejowego. Nie jest niebezpieczny (ale nieprzyjemny), specyficzny dla Trenu. Powolna technika iniekcji go zmniejsza.' } },
      { q: { hu: 'Lehet-e első ciklusként Tren?', en: 'Can Tren be a first cycle?', pl: 'Czy Tren może być pierwszym cyklem?' }, a: { hu: 'Soha. A Tren önállóan szexuális diszfunkciót, súlyos vérnyomás-emelkedést, vesekárosodást és pszichés instabilitást okozhat. Minden komoly forrás (Bhasin, Pope, Kanayama review) ellenjavalja első ciklusként; TRT-alap és bizonyított testosterone-tolerancia szükséges.', en: 'Never. Tren alone can cause sexual dysfunction, severe BP rise, renal damage, and psychiatric instability. All serious sources (Bhasin, Pope, Kanayama reviews) contraindicate it as a first cycle; TRT base and proven testosterone tolerance are required.', pl: 'Nigdy. Sam Tren może powodować dysfunkcje seksualne, poważny wzrost ciśnienia, uszkodzenie nerek i niestabilność psychiczną. Wszystkie poważne źródła (Bhasin, Pope, Kanayama) przeciwwskazują jako pierwszy cykl; wymagana baza TRT i udowodniona tolerancja testosteronu.' } },
    ],
    related: ['testosterone-info', 'anavar-info', 'winstrol-info', 'nandrolone-info', 'dianabol-info'],
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
      hu: 'DHT-származék AR-agonista; 17α-alkiláció miatt orálisan biológiailag hozzáférhető; nem aromatizál E2-vé, nem konvertál DHT-ra.',
      en: 'DHT-derivative AR agonist; 17α-alkylation makes it orally bioavailable; does not aromatize to E2 and does not convert to DHT.',
      pl: 'Agonista AR pochodzący od DHT; 17α-alkilacja zapewnia biodostępność doustną; nie aromatyzuje do E2 i nie konwertuje do DHT.',
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
    ],
    faq: [
      { q: { hu: 'Tényleg biztonságos női használatra?', en: 'Is it really safe for female use?', pl: 'Czy naprawdę jest bezpieczny dla kobiet?' }, a: { hu: 'Az androgén arány alacsony (24% testosterone-hoz képest), így a virilizáció kockázata kisebb, mint más AAS-eknél. De NEM nulla: 10 mg/nap felett és 6 hét felett a virilizáció (mély hang, hirsutizmus, klitorisz-megnagyobbodás) IRREVERZIBILIS lehet. Bármilyen virilizáció-tünet azonnali ciklus-megszakítás.', en: 'The androgenic ratio is low (24% vs testosterone), so virilization risk is lower than with other AAS. But NOT zero: above 10 mg/day and beyond 6 weeks, virilization (deep voice, hirsutism, clitoral enlargement) may be IRREVERSIBLE. Any virilization symptom requires immediate cycle stop.', pl: 'Stosunek androgenny jest niski (24% vs testosteron), więc ryzyko wirylizacji jest mniejsze niż przy innych AAS. Ale NIE zerowe: powyżej 10 mg/dzień i ponad 6 tygodni wirylizacja (głęboki głos, hirsutyzm, powiększenie łechtaczki) może być NIEODWRACALNA. Każdy objaw wirylizacji wymaga natychmiastowego przerwania.' } },
      { q: { hu: 'Hepatotoxikusabb, mint a Dianabol?', en: 'Is it more hepatotoxic than Dianabol?', pl: 'Czy jest bardziej hepatotoksyczny niż Dianabol?' }, a: { hu: 'Nem, jelentősen enyhébb. Anavar és Dianabol egyaránt 17α-alkilált, de az Oxandrolone ALT/AST emelkedése klinikai vizsgálatokban (Sheffield-Moore, Jeschke) lényegesen kisebb. Mégis kötelező a májfunkció-monitorozás 4 hetente.', en: 'No, significantly milder. Anavar and Dianabol are both 17α-alkylated, but Oxandrolone ALT/AST elevation in clinical trials (Sheffield-Moore, Jeschke) is materially lower. Still, liver function monitoring every 4 weeks is mandatory.', pl: 'Nie, znacznie łagodniejszy. Anavar i Dianabol są oba 17α-alkilowane, ale wzrost ALT/AST przy oksandrolonie w badaniach klinicznych (Sheffield-Moore, Jeschke) jest istotnie mniejszy. Mimo to monitoring co 4 tygodnie jest obowiązkowy.' } },
      { q: { hu: 'Miért hamisítják olyan gyakran?', en: 'Why is it so frequently faked?', pl: 'Dlaczego jest tak często fałszowany?' }, a: { hu: 'Az Oxandrolone alapanyag drága, ezért az UGL labor-ok gyakran olcsóbb AAS-szel (Dianabol, Winstrol) helyettesítik a tablettában. Egyetlen biztos módszer: független HPLC-laboratóriumi tisztaság-tesztelés.', en: 'Oxandrolone raw material is expensive, so UGL labs often substitute it with cheaper AAS (Dianabol, Winstrol) in the tablet. The only reliable verification is independent HPLC laboratory purity testing.', pl: 'Surowiec oksandrolonu jest drogi, więc laboratoria UGL często zastępują go tańszymi AAS (Dianabol, Winstrol) w tabletce. Jedyna pewna metoda: niezależne testowanie HPLC w laboratorium.' } },
      { q: { hu: 'Szuppresszálja-e a természetes T-termelést?', en: 'Does it suppress natural T production?', pl: 'Czy hamuje naturalną produkcję T?' }, a: { hu: 'Igen, dózis-függően. 20-50 mg/nap mellett 6 hét után 40-60% HPTA-szuppresszió dokumentált. Férfiaknál PCT (Clomid/Nolvadex) szükséges; női használatnál nem releváns.', en: 'Yes, dose-dependently. At 20-50 mg/day after 6 weeks, 40-60% HPTA suppression is documented. PCT (Clomid/Nolvadex) is required for men; not relevant for female use.', pl: 'Tak, zależnie od dawki. Przy 20-50 mg/dzień po 6 tygodniach udokumentowana supresja HPTA 40-60%. PCT (Clomid/Nolvadex) wymagane u mężczyzn; nie dotyczy kobiet.' } },
    ],
    related: ['testosterone-info', 'trenbolone-info', 'winstrol-info', 'nandrolone-info', 'dianabol-info'],
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
]

export const EXTRA_PERFORMANCE = [
  // Populated in Task 9.
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
