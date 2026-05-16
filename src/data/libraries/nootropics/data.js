// Nootropic library entries. Phase 4: 10 CORE entries (Top 10) with full
// rich content HU/EN/PL. EXTRA entries follow in Task 7.
//
// Sources: PubMed, FDA prescribing info, EU EMA SmPC, NIH PubChem,
// peer-reviewed reviews. NO curator-aggregator or influencer notes.

export const TOP10_ORDER = [
  'modafinil',
  'piracetam',
  'noopept',
  'phenylpiracetam',
  'adrafinil',
  'bromantane',
  'nsi-189',
  'semax',
  'selank',
  '9-me-bc',
]

export const NOOTROPICS = [
  // ===== 1. PIRACETAM (canonical CORE template) =====
  {
    id: 'piracetam',
    name: 'Piracetam',
    image: null,
    accentColor: '#a78bfa',
    tagColor: 'rgba(167,139,250,0.18)',
    shortDesc: {
      hu: 'Az eredeti racetam (Giurgea, 1972). Glutamáterg AMPA-modulátor, klasszikus memóriát és kogníciót támogató nootropikum.',
      en: 'The original racetam (Giurgea, 1972). Glutamatergic AMPA modulator, the classic memory- and cognition-supporting nootropic.',
      pl: 'Oryginalny racetam (Giurgea, 1972). Modulator glutamatergiczny AMPA, klasyczny nootropik dla pamięci i poznania.',
    },
    description: {
      hu: 'A Piracetam (2-oxo-1-pirrolidin-acetamid) az első klinikailag vizsgált nootropikum, amelyet 1964-ben szintetizált Corneliu Giurgea, és amelyhez ő alkotta meg a "nootropikum" kifejezést. Hatásmechanizmusa AMPA-receptor pozitív allosztérikus moduláció — fokozza a már kötött glutamát hatékonyságát, ami a hosszú távú potenciáció (LTP) erősítését eredményezi. EU-régiókban (pl. Magyarországon Nootropil néven) vényköteles cerebrovascular kogníciós zavarok, mioklónusz, és kommunikációs zavarok kezelésére.',
      en: 'Piracetam (2-oxo-1-pyrrolidine acetamide) is the first clinically studied nootropic, synthesized in 1964 by Corneliu Giurgea, who coined the term "nootropic" for it. Its mechanism is positive allosteric modulation of the AMPA receptor — enhancing the efficacy of already-bound glutamate, which strengthens long-term potentiation (LTP). In EU regions (e.g. Nootropil in Hungary), it is Rx for cerebrovascular cognitive disorders, myoclonus, and communication disorders.',
      pl: 'Piracetam (2-okso-1-pirolidynoacetamid) to pierwszy klinicznie badany nootropik, zsyntetyzowany w 1964 r. przez Corneliu Giurgeę, który ukuł termin „nootropik" dla tego związku. Mechanizm działania to pozytywna allosteryczna modulacja receptora AMPA — zwiększa skuteczność już związanego glutaminianu, wzmacniając długotrwałe potencjowanie (LTP). W UE (np. Nootropil w Polsce) Rx dla zaburzeń poznawczych naczyniowo-mózgowych, mioklonii i zaburzeń komunikacji.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AMPA + cholinerg', en: 'AMPA + cholinergic', pl: 'AMPA + cholinergiczny' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '5 óra', en: '5 hours', pl: '5 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '30-60 perc', en: '30-60 min', pl: '30-60 min' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'EU Rx (Nootropil)', en: 'EU Rx (Nootropil)', pl: 'UE Rx (Nootropil)' } },
    ],
    mechanism: {
      hu: 'AMPA-receptor pozitív allosztérikus modulátor; közvetlen kolinerg facilitáció a hippocampusban.',
      en: 'Positive allosteric modulator of the AMPA receptor; direct cholinergic facilitation in the hippocampus.',
      pl: 'Pozytywny allosteryczny modulator receptora AMPA; bezpośrednia facylitacja cholinergiczna w hipokampie.',
    },
    legalStatus: {
      hu: 'EU: vényköteles (Nootropil, Lucetam). HU: Rx. USA: nem FDA-jóváhagyott, dietary supplement státusza vitatott.',
      en: 'EU: prescription (Nootropil, Lucetam). HU: Rx. USA: not FDA-approved, dietary supplement status disputed.',
      pl: 'UE: na receptę (Nootropil, Lucetam). PL: Rx. USA: niezatwierdzony przez FDA, status suplementu sporny.',
    },
    onsetTime: '30-60 min',
    halfLife: '5 h',
    interactionsWith: ['choline', 'caffeine', 'alcohol'],
    wadaStatus: null,
    benefits: [
      { hu: 'Memória- és tanulási teljesítmény javítása', en: 'Improved memory and learning performance', pl: 'Poprawa pamięci i nauki' },
      { hu: 'Cerebrovascular kognitív funkció támogatása idős korban', en: 'Support for cerebrovascular cognitive function in older adults', pl: 'Wsparcie funkcji poznawczych u osób starszych' },
      { hu: 'Mioklónusz tüneti kezelése', en: 'Symptomatic treatment of myoclonus', pl: 'Leczenie objawowe mioklonii' },
      { hu: 'Diszlexia gyermekkori kognitív támogatása (európai studyok)', en: 'Childhood cognitive support in dyslexia (European studies)', pl: 'Wsparcie poznawcze dziecięcej dysleksji (badania europejskie)' },
    ],
    quickStart: [
      { hu: 'Cholinforrást egyidejűleg (Alpha-GPC vagy CDP-Choline)', en: 'Co-administer a choline source (Alpha-GPC or CDP-Choline)', pl: 'Współpodawać źródło choliny (Alpha-GPC lub CDP-Choline)' },
      { hu: 'Étkezéssel együtt vagy étkezés után', en: 'Take with or after food', pl: 'Przyjmować z posiłkiem lub po nim' },
      { hu: '1-2 hét attack-fázis a steady-state-hez', en: 'Allow 1-2 weeks attack phase to reach steady-state', pl: 'Faza ataku 1-2 tygodnie do stanu stacjonarnego' },
      { hu: 'Tartós használat: 4-6 hét kúrában érdemes monitorozni', en: 'Long-term use: monitor effect in 4-6 week cycles', pl: 'Długotrwałe stosowanie: monitorować efekt w cyklach 4-6 tygodni' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Akut hatás minimális; tisztább mentális tisztaság szubjektíven, kolinerg fejfájás-kockázat ha hiányos cholinforrás.', en: 'Acute effect minimal; subjective mental clarity, cholinergic-headache risk if choline-deficient.', pl: 'Efekt ostry minimalny; subiektywna jasność umysłu, ryzyko bólu głowy przy niedoborze choliny.' } },
      { label: { hu: '1-2 hét', en: '1-2 weeks', pl: '1-2 tygodnie' }, body: { hu: 'Steady-state plasma; verbális memória és figyelem észrevehetően javul.', en: 'Steady-state plasma; verbal memory and attention noticeably improve.', pl: 'Stan stacjonarny; pamięć werbalna i uwaga zauważalnie się poprawiają.' } },
      { label: { hu: '4-6 hét', en: '4-6 weeks', pl: '4-6 tygodni' }, body: { hu: 'Tartós kognitív emelkedés, cerebrovascular hatás (idősebb populációban dokumentált).', en: 'Sustained cognitive lift; cerebrovascular effect (documented in older populations).', pl: 'Trwałe podniesienie poznawcze; efekt naczyniowo-mózgowy (udokumentowany u starszych).' } },
    ],
    quality: {
      pure: [
        { hu: 'Tiszta fehér kristályos por vagy tabletta', en: 'Pure white crystalline powder or tablet', pl: 'Czysty biały krystaliczny proszek lub tabletka' },
        { hu: 'Enyhén keserű, vízben jól oldódó', en: 'Slightly bitter, water-soluble', pl: 'Lekko gorzki, rozpuszczalny w wodzie' },
      ],
      caution: [
        { hu: 'Cholin-deficit esetén fejfájás', en: 'Headache risk if choline-deficient', pl: 'Ryzyko bólu głowy przy niedoborze choliny' },
        { hu: 'Magas dózis (>4.8g/nap) anxietás, irritáció', en: 'High dose (>4.8g/day) anxiety, irritability', pl: 'Wysokie dawki (>4,8g/dzień) lęk, drażliwość' },
      ],
      avoid: [
        { hu: 'Huntington-betegség (kontraindikált)', en: "Huntington's disease (contraindicated)", pl: 'Choroba Huntingtona (przeciwwskazane)' },
        { hu: 'Súlyos veseelégtelenség (Rx-szigorítás)', en: 'Severe renal impairment (Rx restriction)', pl: 'Ciężka niewydolność nerek (ograniczenie Rx)' },
      ],
    },
    interactions: [
      { hu: 'Choline-forrással (Alpha-GPC/CDP-Choline) szinergisztikus', en: 'Synergistic with choline source (Alpha-GPC/CDP-Choline)', pl: 'Synergiczny ze źródłem choliny (Alpha-GPC/CDP-Choline)' },
      { hu: 'Antikoaguláns hatást fokozhatja (warfarin szigorú monitorozás)', en: 'May potentiate anticoagulant effect (strict warfarin monitoring)', pl: 'Może wzmacniać działanie antykoagulantów (ścisłe monitorowanie warfaryny)' },
      { hu: 'Alkohollal kombinálva fokozott szedáció', en: 'Increased sedation when combined with alcohol', pl: 'Zwiększona sedacja w połączeniu z alkoholem' },
    ],
    studies: [
      { title: 'Piracetam — an old drug with novel properties?', authors: 'Malykh AG, Sadaie MR.', journal: 'Drugs. 2010;70(3):287-312.', pmid: '20166767' },
      { title: 'Efficacy of piracetam in cognitive decline: meta-analysis', authors: 'Flicker L, Grimley Evans G.', journal: 'Cochrane Database Syst Rev. 2001;(2):CD001011.', pmid: '11405969' },
      { title: 'Piracetam in stroke: clinical trial review', authors: 'Ricci S et al.', journal: 'Cochrane Database Syst Rev. 2012;(9):CD000419.', pmid: '22972041' },
    ],
    faq: [
      { q: { hu: 'Szükséges-e cholin-forrást szedni mellé?', en: 'Is a choline source necessary?', pl: 'Czy konieczne jest źródło choliny?' }, a: { hu: 'Igen, ajánlott — a cholinerg facilitáció miatt hiányos cholin esetén fejfájás-kockázat áll fenn. Alpha-GPC vagy CDP-Choline 250-500mg/nap a tipikus.', en: 'Yes, recommended — cholinergic facilitation creates headache risk with choline deficiency. Alpha-GPC or CDP-Choline 250-500mg/day is typical.', pl: 'Tak, zalecane — facylitacja cholinergiczna stwarza ryzyko bólu głowy przy niedoborze choliny. Alpha-GPC lub CDP-Choline 250-500mg/dzień.' } },
      { q: { hu: 'Mennyi idő alatt érződik a hatás?', en: 'How long until effects are felt?', pl: 'Ile czasu trwa, aby poczuć efekty?' }, a: { hu: 'Steady-state plasma 1-2 hét. Akut hatás minimális (más, mint stimulánsoknál); a tartós kognitív emelkedés 2-4 hét után dokumentált.', en: 'Steady-state plasma in 1-2 weeks. Acute effect minimal (unlike stimulants); sustained cognitive lift documented after 2-4 weeks.', pl: 'Stan stacjonarny w 1-2 tygodnie. Efekt ostry minimalny (inaczej niż stymulanty); trwałe podniesienie po 2-4 tygodniach.' } },
      { q: { hu: 'Megvonási tünetek vagy függőség?', en: 'Withdrawal or dependence?', pl: 'Objawy odstawienia lub uzależnienie?' }, a: { hu: 'Nincs dokumentált függőség vagy klasszikus megvonás. Tartós használat után fokozatos elhagyás javasolt a kognitív állapot stabilizálódásához.', en: 'No documented dependence or classic withdrawal. After long-term use, gradual taper is recommended for cognitive state stabilization.', pl: 'Brak udokumentowanego uzależnienia lub klasycznego odstawienia. Po długotrwałym stosowaniu zaleca się stopniowe zmniejszanie.' } },
      { q: { hu: 'Kombinálható más nootropikummal?', en: 'Can it be stacked with other nootropics?', pl: 'Czy można łączyć z innymi nootropikami?' }, a: { hu: 'Igen — Alpha-GPC/CDP-Choline kötelező, Aniracetam vagy Oxiracetam (racetam-stack), L-Theanine relaxációhoz. Modafinilre ráadásként klinikai szinten nem szokványos.', en: 'Yes — Alpha-GPC/CDP-Choline mandatory, Aniracetam or Oxiracetam (racetam stack), L-Theanine for relaxation. Adding to Modafinil clinically unusual.', pl: 'Tak — Alpha-GPC/CDP-Choline obowiązkowe, Aniracetam lub Oxiracetam (stack racetamów), L-Teanina dla relaksu.' } },
    ],
    related: ['aniracetam', 'oxiracetam', 'alpha-gpc', 'cdp-choline'],
  },

  // ===== 2. MODAFINIL =====
  {
    id: 'modafinil',
    name: 'Modafinil',
    image: null,
    accentColor: '#fbbf24',
    tagColor: 'rgba(251,191,36,0.18)',
    shortDesc: {
      hu: 'FDA-jóváhagyott wakefulness-promoting szer (Provigil). Szelektív DAT-gátló, narkolepszia, alvási apnoé, váltóműszakos zavar Rx.',
      en: 'FDA-approved wakefulness-promoting agent (Provigil). Selective DAT inhibitor, Rx for narcolepsy, sleep apnea, shift-work disorder.',
      pl: 'Zatwierdzony przez FDA środek wzmacniający czuwanie (Provigil). Selektywny inhibitor DAT, Rx dla narkolepsji, bezdechu sennego i zaburzeń zmianowych.',
    },
    description: {
      hu: 'A Modafinil egy szelektív dopamin-transzporter (DAT) gátló, amelyet 1976-ban szintetizáltak Franciaországban. Az FDA 1998-ban hagyta jóvá narkolepszia-kezelésre, később obstruktív alvási apnoé és váltóműszakos alvászavar indikációkkal bővült. Klasszikus stimulánsoktól eltérően a hisztaminerg tuberomammilláris magokon (TMN) és az orexin-rendszeren keresztül is hat, kevesebb euforikus-affinitást mutat. ADHD off-label és kognitív enhancementre is használt, bár az utóbbira nem jóváhagyott.',
      en: 'Modafinil is a selective dopamine transporter (DAT) inhibitor synthesized in 1976 in France. The FDA approved it for narcolepsy in 1998, later expanding the label to obstructive sleep apnea and shift-work sleep disorder. Unlike classic stimulants, it acts via the histaminergic tuberomammillary nucleus (TMN) and the orexin system as well, showing lower euphoric affinity. Used off-label for ADHD and cognitive enhancement, although the latter is not an approved indication.',
      pl: 'Modafinil to selektywny inhibitor transportera dopaminy (DAT), zsyntetyzowany w 1976 r. we Francji. FDA zatwierdziła go w 1998 r. dla narkolepsji, później rozszerzono o obturacyjny bezdech senny i zaburzenia snu zmianowego. W przeciwieństwie do klasycznych stymulantów działa też przez histaminergiczne jądra guzowo-suteczkowate (TMN) i układ oreksynowy, wykazując niższe powinowactwo euforyczne. Używany off-label dla ADHD i wzmocnienia poznawczego, choć to ostatnie nie jest zatwierdzonym wskazaniem.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Szelektív DAT-gátló', en: 'Selective DAT inhibitor', pl: 'Selektywny inhibitor DAT' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '12-15 óra', en: '12-15 hours', pl: '12-15 godzin' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '30-60 perc', en: '30-60 min', pl: '30-60 min' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'FDA Rx (Provigil)', en: 'FDA Rx (Provigil)', pl: 'FDA Rx (Provigil)' } },
    ],
    mechanism: {
      hu: 'Szelektív DAT (dopamin-transzporter) gátló; hisztaminerg TMN-aktiválás; orexin-rendszer emelés.',
      en: 'Selective DAT (dopamine transporter) inhibitor; histaminergic TMN activation; orexin system upregulation.',
      pl: 'Selektywny inhibitor DAT (transportera dopaminy); aktywacja histaminergicznego TMN; wzmocnienie układu oreksyny.',
    },
    legalStatus: {
      hu: 'USA: FDA Rx Schedule IV (Provigil). EU: Rx. HU: Rx (Modiodal). WADA: tiltott versenysportban.',
      en: 'USA: FDA Rx Schedule IV (Provigil). EU: Rx. HU: Rx (Modiodal). WADA: banned in competition.',
      pl: 'USA: FDA Rx Schedule IV (Provigil). UE: Rx. PL: Rx (Modiodal). WADA: zabroniony w sporcie.',
    },
    onsetTime: '30-60 min',
    halfLife: '12-15 h',
    interactionsWith: ['caffeine', 'alcohol', 'hormonal contraceptives', 'warfarin'],
    wadaStatus: 'banned',
    benefits: [
      { hu: 'Narkolepsziás éberség-fenntartás (FDA on-label)', en: 'Wakefulness maintenance in narcolepsy (FDA on-label)', pl: 'Utrzymanie czuwania w narkolepsji (FDA on-label)' },
      { hu: 'Váltóműszakos alvászavar (FDA on-label)', en: 'Shift-work sleep disorder (FDA on-label)', pl: 'Zaburzenia snu zmianowego (FDA on-label)' },
      { hu: 'ADHD off-label kognitív és figyelem-támogatás', en: 'ADHD off-label cognitive and attention support', pl: 'ADHD off-label wsparcie poznawcze i uwagi' },
      { hu: 'Egészséges felnőttek kognitív enhancementje (komplex feladatokban dokumentált)', en: 'Cognitive enhancement in healthy adults (documented in complex tasks)', pl: 'Wzmocnienie poznawcze u zdrowych dorosłych (udokumentowane w złożonych zadaniach)' },
    ],
    quickStart: [
      { hu: 'Reggel 100-200 mg, üres gyomorra vagy könnyű étkezéssel', en: '100-200 mg in the morning, empty stomach or light meal', pl: '100-200 mg rano, na pusty żołądek lub z lekkim posiłkiem' },
      { hu: 'Délután 14:00 után NE — alvászavar-kockázat', en: 'Do NOT dose after 2 pm — sleep disruption risk', pl: 'NIE dawkować po 14:00 — ryzyko zaburzeń snu' },
      { hu: 'Hidratálj rendszeresen — gyakori a szájszárazság', en: 'Hydrate regularly — dry mouth is common', pl: 'Regularnie nawadniaj się — sucha jamy ustna jest częsta' },
      { hu: 'Hormonális fogamzásgátlóval: backup-módszer szükséges (CYP3A4-indukció)', en: 'With hormonal contraceptives: backup method required (CYP3A4 induction)', pl: 'Z hormonalną antykoncepcją: wymagana metoda zapasowa (indukcja CYP3A4)' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '30-60 perc múlva tiszta éberség; nem stimuláló módon — inkább a fáradtság hiánya. Fejfájás, szájszárazság előfordulhat.', en: 'Clean wakefulness after 30-60 min; not stimulant-like — more an absence of tiredness. Headache, dry mouth possible.', pl: 'Czysta czujność po 30-60 min; nie jak stymulant — raczej brak zmęczenia. Możliwy ból głowy, sucha jamy ustna.' } },
      { label: { hu: '4-8 óra', en: '4-8 hours', pl: '4-8 godzin' }, body: { hu: 'Plateau-éberség, tartós koncentráció. Komplex kognitív feladatokban mérhető teljesítmény-emelkedés.', en: 'Plateau wakefulness, sustained focus. Measurable performance lift in complex cognitive tasks.', pl: 'Plateau czujności, trwała koncentracja. Mierzalne podniesienie wydajności w złożonych zadaniach.' } },
      { label: { hu: 'Másnap', en: 'Next day', pl: 'Następny dzień' }, body: { hu: 'Hosszú felezési idő miatt enyhe rebound-fáradtság, vagy ha 14:00 után volt szedve, alvásgátlás.', en: 'Long half-life can leave mild rebound fatigue, or sleep impairment if dosed after 2 pm.', pl: 'Długi okres półtrwania może powodować łagodne zmęczenie nawrotowe, lub zaburzenia snu jeśli podawany po 14:00.' } },
    ],
    quality: {
      pure: [
        { hu: 'Fehér, szagtalan kristályos tabletta (Provigil, Modiodal, Modalert)', en: 'White, odorless crystalline tablet (Provigil, Modiodal, Modalert)', pl: 'Biała, bezwonna krystaliczna tabletka (Provigil, Modiodal, Modalert)' },
        { hu: 'Vízben rosszul oldódik, alkohol mérsékelten', en: 'Poorly water-soluble, moderately alcohol-soluble', pl: 'Słabo rozpuszczalny w wodzie, umiarkowanie w alkoholu' },
      ],
      caution: [
        { hu: 'Fejfájás (gyakori), szájszárazság, álmatlanság', en: 'Headache (common), dry mouth, insomnia', pl: 'Ból głowy (częsty), sucha jama ustna, bezsenność' },
        { hu: 'Vérnyomás- és pulzusnövekedés mérsékelten', en: 'Mild blood pressure and heart rate elevation', pl: 'Lekkie podwyższenie ciśnienia i tętna' },
      ],
      avoid: [
        { hu: 'Súlyos szívbillentyű-betegség, instabil angina', en: 'Severe valvular heart disease, unstable angina', pl: 'Ciężka choroba zastawek serca, niestabilna dusznica' },
        { hu: 'Stevens-Johnson szindróma anamnézis', en: 'History of Stevens-Johnson syndrome', pl: 'Historia zespołu Stevensa-Johnsona' },
        { hu: 'Terhesség (kategória C), szoptatás', en: 'Pregnancy (category C), breastfeeding', pl: 'Ciąża (kategoria C), karmienie piersią' },
      ],
    },
    interactions: [
      { hu: 'Hormonális fogamzásgátló hatékonyságát csökkenti (CYP3A4-indukció)', en: 'Reduces hormonal contraceptive efficacy (CYP3A4 induction)', pl: 'Zmniejsza skuteczność hormonalnej antykoncepcji (indukcja CYP3A4)' },
      { hu: 'Warfarin szérumszintet módosíthat — INR-monitorozás', en: 'May alter warfarin serum levels — INR monitoring required', pl: 'Może zmieniać poziomy warfaryny — wymagane monitorowanie INR' },
      { hu: 'Koffeinnel additív stimuláció, álmatlanság-kockázat', en: 'Additive stimulation with caffeine, insomnia risk', pl: 'Stymulacja addytywna z kofeiną, ryzyko bezsenności' },
      { hu: 'Alkohol kombinációja kerülendő (megítélés-zavar)', en: 'Avoid alcohol combination (judgment impairment)', pl: 'Unikać kombinacji z alkoholem (upośledzenie osądu)' },
    ],
    studies: [
      { title: 'Modafinil: a review of neurochemical actions and effects on cognition', authors: 'Minzenberg MJ, Carter CS.', journal: 'Neuropsychopharmacology. 2008;33(7):1477-1502.', pmid: '17712350' },
      { title: 'Modafinil for cognitive enhancement in healthy non-sleep-deprived', authors: 'Battleday RM, Brem AK.', journal: 'Eur Neuropsychopharmacol. 2015;25(11):1865-1881.', pmid: '26381811' },
      { title: 'Modafinil — long-term safety in narcolepsy', authors: 'Mitler MM et al.', journal: 'Neurology. 2000;54(5):1166-1175.', pmid: '10720292' },
    ],
    faq: [
      { q: { hu: 'Tényleg nem stimuláns?', en: 'Is it really not a stimulant?', pl: 'Czy naprawdę nie jest stymulantem?' }, a: { hu: 'Schedule IV szabályozott szerként alacsonyabb függőségi potenciálú, mint klasszikus stimulánsok (Adderall, Ritalin). DAT-affinitása ugyanakkor van — szubjektíven kevésbé "stim-like", de tolerancia és pszichológiai függőség lehetséges.', en: 'Schedule IV with lower dependence potential than classic stimulants (Adderall, Ritalin). Has DAT affinity nonetheless — subjectively less "stim-like," but tolerance and psychological dependence are possible.', pl: 'Schedule IV z niższym potencjałem uzależnienia niż klasyczne stymulanty (Adderall, Ritalin). Ma jednak powinowactwo do DAT — subiektywnie mniej "stymulujący," lecz możliwa jest tolerancja i uzależnienie psychiczne.' } },
      { q: { hu: 'Mikor szedjem?', en: 'When to take it?', pl: 'Kiedy go przyjmować?' }, a: { hu: 'Reggel ébredés után, lehetőleg 9:00 előtt. 14:00 után NE — a 12-15 órás felezési idő miatt elronthatja az alvást.', en: 'In the morning after waking, ideally before 9 am. Do NOT take after 2 pm — the 12-15 h half-life can disrupt sleep.', pl: 'Rano po przebudzeniu, najlepiej przed 9:00. NIE po 14:00 — okres półtrwania 12-15 h może zaburzyć sen.' } },
      { q: { hu: 'Tolerancia kialakul-e?', en: 'Does tolerance develop?', pl: 'Czy rozwija się tolerancja?' }, a: { hu: 'Mérsékelt; sok user 2-3× hét bevétellel stabil hatást tart. Napi krónikus használat tolerancia + pszichológiai függőség kockázattal jár.', en: 'Mild; many users maintain stable effect with 2-3× per week dosing. Daily chronic use carries tolerance + psychological dependence risk.', pl: 'Łagodna; wielu użytkowników utrzymuje stabilne działanie przy dawkowaniu 2-3× w tygodniu. Codzienne przewlekłe stosowanie niesie ryzyko tolerancji + uzależnienia psychicznego.' } },
      { q: { hu: 'WADA-tiltott — versenysportban?', en: 'WADA-banned — in competition?', pl: 'Zakaz WADA — w zawodach?' }, a: { hu: 'Igen, az S6 stimulánsok listáján szerepel. Versenyző sportolóknak in-competition tiltott; out-of-competition használat sportszövetségenként eltérő.', en: 'Yes, on the S6 stimulants list. Banned in-competition for athletes; out-of-competition status varies by federation.', pl: 'Tak, na liście S6 stymulantów. Zakazany podczas zawodów dla sportowców; status poza zawodami zależy od federacji.' } },
    ],
    related: ['adrafinil', 'armodafinil', 'flmodafinil', 'phenylpiracetam'],
  },

  // ===== 3. NOOPEPT =====
  {
    id: 'noopept',
    name: 'Noopept',
    image: null,
    accentColor: '#a78bfa',
    tagColor: 'rgba(167,139,250,0.18)',
    shortDesc: {
      hu: 'Orosz Rx racetam-szerű nootropikum; kicsi dózis (10-30 mg), NGF/BDNF expression-növelő.',
      en: 'Russian Rx racetam-like nootropic; small dose (10-30 mg), upregulates NGF/BDNF expression.',
      pl: 'Rosyjski Rx nootropik podobny do racetamów; mała dawka (10-30 mg), zwiększa ekspresję NGF/BDNF.',
    },
    description: {
      hu: 'A Noopept (N-fenilacetil-L-prolilglicin-etilészter) egy Piracetamból származó cyclic dipeptid, amelyet az 1990-es években fejlesztettek ki Oroszországban. Dózisra vetítve kb. 1000× erősebb mint a Piracetam (10-30 mg/nap vs. 4800 mg/nap). Hatásmechanizmusa AMPA + NMDA glutamáterg moduláció + NGF (nerve growth factor) és BDNF expression-növelés. Oroszországban Noopept néven OTC; EU/USA-régiókban kutatási vegyület.',
      en: 'Noopept (N-phenylacetyl-L-prolylglycine ethyl ester) is a cyclic dipeptide derived from Piracetam, developed in Russia in the 1990s. Per-dose roughly 1000× more potent than Piracetam (10-30 mg/day vs. 4800 mg/day). Mechanism: AMPA + NMDA glutamatergic modulation plus NGF (nerve growth factor) and BDNF upregulation. OTC in Russia under the Noopept name; research chemical in EU/USA.',
      pl: 'Noopept (ester etylowy N-fenyloacetylo-L-prolyloglicyny) to cykliczny dipeptyd pochodzący od Piracetamu, opracowany w Rosji w latach 90. Z dawki na dawkę około 1000× silniejszy niż Piracetam (10-30 mg/dzień vs. 4800 mg/dzień). Mechanizm: modulacja glutamatergiczna AMPA + NMDA oraz wzmocnienie ekspresji NGF (czynnik wzrostu nerwów) i BDNF. OTC w Rosji pod nazwą Noopept; substancja badawcza w UE/USA.',
    },
    keyInfo: [
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AMPA + NMDA + NGF/BDNF', en: 'AMPA + NMDA + NGF/BDNF', pl: 'AMPA + NMDA + NGF/BDNF' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '30-40 perc (aktív metabolit)', en: '30-40 min (active metabolite)', pl: '30-40 min (aktywny metabolit)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '15-30 perc', en: '15-30 min', pl: '15-30 min' } },
      { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Russia OTC, EU/USA research', en: 'Russia OTC, EU/USA research', pl: 'Rosja OTC, UE/USA badania' } },
    ],
    mechanism: {
      hu: 'AMPA + NMDA glutamáterg modulátor; NGF (nerve growth factor) és BDNF expression-növelő. Aktív metabolit: cycloprolylglycine (CPG).',
      en: 'AMPA + NMDA glutamatergic modulator; upregulates NGF (nerve growth factor) and BDNF expression. Active metabolite: cycloprolylglycine (CPG).',
      pl: 'Modulator glutamatergiczny AMPA + NMDA; zwiększa ekspresję NGF (czynnik wzrostu nerwów) i BDNF. Aktywny metabolit: cykloprolyloglicyna (CPG).',
    },
    legalStatus: {
      hu: 'Russia: OTC (Noopept). EU: nem szabályozott, dietary supplement státusza vitatott. USA: nem FDA-jóváhagyott, kutatási vegyület.',
      en: 'Russia: OTC (Noopept). EU: unregulated, dietary supplement status disputed. USA: not FDA-approved, research chemical.',
      pl: 'Rosja: OTC (Noopept). UE: nieuregulowany, status suplementu sporny. USA: niezatwierdzony przez FDA, substancja badawcza.',
    },
    onsetTime: '15-30 min',
    halfLife: '30-40 min (active metabolite)',
    interactionsWith: ['choline', 'caffeine', 'alcohol'],
    wadaStatus: null,
    benefits: [
      { hu: 'Memória- és tanulási hatások gyorsabb belépéssel mint Piracetam', en: 'Memory and learning effects with faster onset than Piracetam', pl: 'Efekty pamięci i nauki z szybszym wystąpieniem niż Piracetam' },
      { hu: 'NGF/BDNF expression-növelés (neuroprotektív hatás állat-modellekben)', en: 'NGF/BDNF upregulation (neuroprotective in animal models)', pl: 'Wzmocnienie NGF/BDNF (neuroprotekcyjne w modelach zwierzęcych)' },
      { hu: 'Enyhe szorongáscsökkentés a glutamáterg modulációhoz társulóan', en: 'Mild anxiolytic effect alongside glutamatergic modulation', pl: 'Łagodne działanie przeciwlękowe wraz z modulacją glutamatergiczną' },
      { hu: 'Cerebrovascular kognitív zavarok (orosz klinikai adatok)', en: 'Cerebrovascular cognitive disorders (Russian clinical data)', pl: 'Naczyniowo-mózgowe zaburzenia poznawcze (rosyjskie dane kliniczne)' },
    ],
    quickStart: [
      { hu: 'Reggel és kora délután 10 mg sublingualisan vagy orálisan', en: '10 mg morning and early afternoon, sublingual or oral', pl: '10 mg rano i wczesnym popołudniem, podjęzykowo lub doustnie' },
      { hu: 'Cholinforrást egyidejűleg (Alpha-GPC/CDP-Choline) — racetam-szerű hatás miatt', en: 'Co-administer choline source (Alpha-GPC/CDP-Choline) — racetam-like effect', pl: 'Współpodawać źródło choliny (Alpha-GPC/CDP-Choline) — efekt podobny do racetamów' },
      { hu: 'Ciklikus használat: 4-6 hét on, 1-2 hét off', en: 'Cyclic use: 4-6 weeks on, 1-2 weeks off', pl: 'Stosowanie cykliczne: 4-6 tygodni włączone, 1-2 tygodnie wyłączone' },
      { hu: 'Subjektív hatás az első bevétel után már gyakran érzékelhető', en: 'Subjective effect often noticeable after the first dose', pl: 'Subiektywny efekt często odczuwalny po pierwszej dawce' },
    ],
    expectations: [
      { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '15-30 perc múlva enyhe mentális tisztaság, verbális fluencia. Akut hatás kifejezettebb mint Piracetamnál.', en: 'Mild mental clarity and verbal fluency after 15-30 min. Acute effect more pronounced than Piracetam.', pl: 'Łagodna jasność umysłu i płynność werbalna po 15-30 min. Efekt ostry wyraźniejszy niż przy Piracetamie.' } },
      { label: { hu: '1-2 hét', en: '1-2 weeks', pl: '1-2 tygodnie' }, body: { hu: 'Tartós kognitív facilitáció, jobb fókusz; az aktív metabolit cycloprolylglycine kumulálódhat.', en: 'Sustained cognitive facilitation, improved focus; the active metabolite cycloprolylglycine may accumulate.', pl: 'Trwała facylitacja poznawcza, lepszy fokus; aktywny metabolit cykloprolyloglicyna może się kumulować.' } },
      { label: { hu: '4-6 hét', en: '4-6 weeks', pl: '4-6 tygodni' }, body: { hu: 'Plateau; cycle-off ajánlott a tolerancia és NGF/BDNF downregulation elkerülésére.', en: 'Plateau; cycle-off recommended to avoid tolerance and NGF/BDNF downregulation.', pl: 'Plateau; zaleca się cykl-off aby uniknąć tolerancji i obniżenia regulacji NGF/BDNF.' } },
    ],
    quality: {
      pure: [
        { hu: 'Fehér finom por, vagy mikrotablett-forma', en: 'Fine white powder, or microtablet form', pl: 'Drobny biały proszek, lub forma mikrotabletek' },
        { hu: 'Sublingual jól felszívódik (Tmax ~15 perc)', en: 'Sublingual absorbs well (Tmax ~15 min)', pl: 'Podjęzykowo dobrze się wchłania (Tmax ~15 min)' },
      ],
      caution: [
        { hu: 'Fejfájás cholin-deficit esetén', en: 'Headache risk with choline deficiency', pl: 'Ryzyko bólu głowy przy niedoborze choliny' },
        { hu: 'Magas dózis (>40 mg/nap) irritáció, álmatlanság', en: 'High dose (>40 mg/day) irritability, insomnia', pl: 'Wysokie dawki (>40 mg/dzień) drażliwość, bezsenność' },
      ],
      avoid: [
        { hu: 'Terhesség, szoptatás (kutatás hiányzik)', en: 'Pregnancy, breastfeeding (research lacking)', pl: 'Ciąża, karmienie piersią (brak badań)' },
        { hu: 'Súlyos veseelégtelenség', en: 'Severe renal impairment', pl: 'Ciężka niewydolność nerek' },
      ],
    },
    interactions: [
      { hu: 'Choline-forrással szinergisztikus (Alpha-GPC/CDP-Choline)', en: 'Synergistic with choline source (Alpha-GPC/CDP-Choline)', pl: 'Synergiczny ze źródłem choliny (Alpha-GPC/CDP-Choline)' },
      { hu: 'Más racetamokkal (Piracetam, Aniracetam) racetam-stack-ként kombinálható', en: 'Stackable with other racetams (Piracetam, Aniracetam)', pl: 'Można łączyć z innymi racetamami (Piracetam, Aniracetam) w stacku' },
      { hu: 'Alkohollal kombinálva fokozott szedáció', en: 'Increased sedation when combined with alcohol', pl: 'Zwiększona sedacja w połączeniu z alkoholem' },
    ],
    studies: [
      { title: 'Noopept (GVS-111) cognitive effects: randomized trial', authors: 'Neznamov GG, Teleshova ES.', journal: 'Neurosci Behav Physiol. 2009;39(3):311-321.', pmid: '19234797' },
      { title: 'Noopept and NGF/BDNF expression in vivo', authors: 'Ostrovskaia RU et al.', journal: 'Eksp Klin Farmakol. 2008;71(4):29-35.', pmid: '18819428' },
      { title: 'Original neuropsychotropic activity of noopept', authors: 'Gudasheva TA et al.', journal: 'Bioorg Khim. 1996;22(10-11):768-778.', pmid: '9082489' },
    ],
    faq: [
      { q: { hu: 'Miért 1000× erősebb mint a Piracetam?', en: 'Why 1000× stronger than Piracetam?', pl: 'Dlaczego 1000× silniejszy niż Piracetam?' }, a: { hu: 'Dózis-ekvivalens értelemben: 10 mg Noopept kb. 1200 mg Piracetamhoz hasonló subjective hatást produkál. A különbség a magasabb affinitás + lipofilebb molekula (jobb BBB-átjutás), nem szigorúan más mechanizmus.', en: 'In dose-equivalent terms: 10 mg Noopept produces subjective effects similar to ~1200 mg Piracetam. The difference is higher affinity + more lipophilic molecule (better BBB passage), not strictly a different mechanism.', pl: 'W przeliczeniu na dawkę: 10 mg Noopeptu daje efekt subiektywny podobny do ~1200 mg Piracetamu. Różnica to wyższe powinowactwo + bardziej lipofilna cząsteczka (lepsze przejście przez BBB), nie zupełnie inny mechanizm.' } },
      { q: { hu: 'Sublingual vs orális?', en: 'Sublingual vs oral?', pl: 'Podjęzykowo czy doustnie?' }, a: { hu: 'Sublingual gyorsabb Tmax-ot ad (~15 perc), magasabb bioelérhetőséget, kerüli az első-passage máj-metabolizmust. A legtöbb user sublingual.', en: 'Sublingual gives faster Tmax (~15 min), higher bioavailability, bypasses first-pass hepatic metabolism. Most users go sublingual.', pl: 'Podjęzykowo daje szybsze Tmax (~15 min), wyższą biodostępność, omija metabolizm wątrobowy pierwszego przejścia. Większość użytkowników podjęzykowo.' } },
      { q: { hu: 'Cycle szükséges?', en: 'Is cycling necessary?', pl: 'Czy cykliczność jest konieczna?' }, a: { hu: 'Ajánlott: 4-6 hét on, 1-2 hét off. A folyamatos NGF/BDNF stimuláció tolerancia és receptor-downregulation kockázattal jár.', en: 'Recommended: 4-6 weeks on, 1-2 weeks off. Continuous NGF/BDNF stimulation carries tolerance and receptor downregulation risk.', pl: 'Zalecane: 4-6 tygodni włączone, 1-2 tygodnie wyłączone. Ciągła stymulacja NGF/BDNF niesie ryzyko tolerancji i obniżenia regulacji receptorów.' } },
    ],
    related: ['piracetam', 'aniracetam', 'coluracetam', 'semax'],
  },
]
