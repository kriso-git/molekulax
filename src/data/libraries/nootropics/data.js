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
 hu: 'A Piracetam (2-oxo-1-pirrolidin-acetamid) az első klinikailag vizsgált nootropikum, amelyet 1964-ben szintetizált Corneliu Giurgea, és amelyhez ő alkotta meg a "nootropikum" kifejezést. Hatásmechanizmusa AMPA-receptor pozitív allosztérikus moduláció, fokozza a már kötött glutamát hatékonyságát, ami a hosszú távú potenciáció (LTP) erősítését eredményezi. EU-régiókban (pl. Magyarországon Nootropil néven) vényköteles cerebrovascular kogníciós zavarok, mioklónusz, és kommunikációs zavarok kezelésére.',
 en: 'Piracetam (2-oxo-1-pyrrolidine acetamide) is the first clinically studied nootropic, synthesized in 1964 by Corneliu Giurgea, who coined the term "nootropic" for it. Its mechanism is positive allosteric modulation of the AMPA receptor, enhancing the efficacy of already-bound glutamate, which strengthens long-term potentiation (LTP). In EU regions (e.g. Nootropil in Hungary), it is Rx for cerebrovascular cognitive disorders, myoclonus, and communication disorders.',
 pl: 'Piracetam (2-okso-1-pirolidynoacetamid) to pierwszy klinicznie badany nootropik, zsyntetyzowany w 1964 r. przez Corneliu Giurgeę, który ukuł termin „nootropik" dla tego związku. Mechanizm działania to pozytywna allosteryczna modulacja receptora AMPA, zwiększa skuteczność już związanego glutaminianu, wzmacniając długotrwałe potencjowanie (LTP). W UE (np. Nootropil w Polsce) Rx dla zaburzeń poznawczych naczyniowo-mózgowych, mioklonii i zaburzeń komunikacji.',
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
 { title: 'Piracetam, an old drug with novel properties?', authors: 'Malykh AG, Sadaie MR.', journal: 'Drugs. 2010;70(3):287-312.', pmid: '20166767' },
 { title: 'Efficacy of piracetam in cognitive decline: meta-analysis', authors: 'Flicker L, Grimley Evans G.', journal: 'Cochrane Database Syst Rev. 2001;(2):CD001011.', pmid: '11405969' },
 { title: 'Piracetam in stroke: clinical trial review', authors: 'Ricci S et al.', journal: 'Cochrane Database Syst Rev. 2012;(9):CD000419.', pmid: '22972041' },
 ],
 faq: [
 { q: { hu: 'Szükséges-e cholin-forrást szedni mellé?', en: 'Is a choline source necessary?', pl: 'Czy konieczne jest źródło choliny?' }, a: { hu: 'Igen, ajánlott, a cholinerg facilitáció miatt hiányos cholin esetén fejfájás-kockázat áll fenn. Alpha-GPC vagy CDP-Choline 250-500mg/nap a tipikus.', en: 'Yes, recommended, cholinergic facilitation creates headache risk with choline deficiency. Alpha-GPC or CDP-Choline 250-500mg/day is typical.', pl: 'Tak, zalecane, facylitacja cholinergiczna stwarza ryzyko bólu głowy przy niedoborze choliny. Alpha-GPC lub CDP-Choline 250-500mg/dzień.' } },
 { q: { hu: 'Mennyi idő alatt érződik a hatás?', en: 'How long until effects are felt?', pl: 'Ile czasu trwa, aby poczuć efekty?' }, a: { hu: 'Steady-state plasma 1-2 hét. Akut hatás minimális (más, mint stimulánsoknál); a tartós kognitív emelkedés 2-4 hét után dokumentált.', en: 'Steady-state plasma in 1-2 weeks. Acute effect minimal (unlike stimulants); sustained cognitive lift documented after 2-4 weeks.', pl: 'Stan stacjonarny w 1-2 tygodnie. Efekt ostry minimalny (inaczej niż stymulanty); trwałe podniesienie po 2-4 tygodniach.' } },
 { q: { hu: 'Megvonási tünetek vagy függőség?', en: 'Withdrawal or dependence?', pl: 'Objawy odstawienia lub uzależnienie?' }, a: { hu: 'Nincs dokumentált függőség vagy klasszikus megvonás. Tartós használat után fokozatos elhagyás javasolt a kognitív állapot stabilizálódásához.', en: 'No documented dependence or classic withdrawal. After long-term use, gradual taper is recommended for cognitive state stabilization.', pl: 'Brak udokumentowanego uzależnienia lub klasycznego odstawienia. Po długotrwałym stosowaniu zaleca się stopniowe zmniejszanie.' } },
 { q: { hu: 'Kombinálható más nootropikummal?', en: 'Can it be stacked with other nootropics?', pl: 'Czy można łączyć z innymi nootropikami?' }, a: { hu: 'Igen, Alpha-GPC/CDP-Choline kötelező, Aniracetam vagy Oxiracetam (racetam-stack), L-Theanine relaxációhoz. Modafinilre ráadásként klinikai szinten nem szokványos.', en: 'Yes, Alpha-GPC/CDP-Choline mandatory, Aniracetam or Oxiracetam (racetam stack), L-Theanine for relaxation. Adding to Modafinil clinically unusual.', pl: 'Tak, Alpha-GPC/CDP-Choline obowiązkowe, Aniracetam lub Oxiracetam (stack racetamów), L-Teanina dla relaksu.' } },
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
 { hu: 'Délután 14:00 után NE, alvászavar-kockázat', en: 'Do NOT dose after 2 pm, sleep disruption risk', pl: 'NIE dawkować po 14:00, ryzyko zaburzeń snu' },
 { hu: 'Hidratálj rendszeresen, gyakori a szájszárazság', en: 'Hydrate regularly, dry mouth is common', pl: 'Regularnie nawadniaj się, sucha jamy ustna jest częsta' },
 { hu: 'Hormonális fogamzásgátlóval: backup-módszer szükséges (CYP3A4-indukció)', en: 'With hormonal contraceptives: backup method required (CYP3A4 induction)', pl: 'Z hormonalną antykoncepcją: wymagana metoda zapasowa (indukcja CYP3A4)' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '30-60 perc múlva tiszta éberség; nem stimuláló módon, inkább a fáradtság hiánya. Fejfájás, szájszárazság előfordulhat.', en: 'Clean wakefulness after 30-60 min; not stimulant-like, more an absence of tiredness. Headache, dry mouth possible.', pl: 'Czysta czujność po 30-60 min; nie jak stymulant, raczej brak zmęczenia. Możliwy ból głowy, sucha jamy ustna.' } },
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
 { hu: 'Warfarin szérumszintet módosíthat, INR-monitorozás', en: 'May alter warfarin serum levels, INR monitoring required', pl: 'Może zmieniać poziomy warfaryny, wymagane monitorowanie INR' },
 { hu: 'Koffeinnel additív stimuláció, álmatlanság-kockázat', en: 'Additive stimulation with caffeine, insomnia risk', pl: 'Stymulacja addytywna z kofeiną, ryzyko bezsenności' },
 { hu: 'Alkohol kombinációja kerülendő (megítélés-zavar)', en: 'Avoid alcohol combination (judgment impairment)', pl: 'Unikać kombinacji z alkoholem (upośledzenie osądu)' },
 ],
 studies: [
 { title: 'Modafinil: a review of neurochemical actions and effects on cognition', authors: 'Minzenberg MJ, Carter CS.', journal: 'Neuropsychopharmacology. 2008;33(7):1477-1502.', pmid: '17712350' },
 { title: 'Modafinil for cognitive enhancement in healthy non-sleep-deprived', authors: 'Battleday RM, Brem AK.', journal: 'Eur Neuropsychopharmacol. 2015;25(11):1865-1881.', pmid: '26381811' },
 { title: 'Modafinil, long-term safety in narcolepsy', authors: 'Mitler MM et al.', journal: 'Neurology. 2000;54(5):1166-1175.', pmid: '10720292' },
 ],
 faq: [
 { q: { hu: 'Tényleg nem stimuláns?', en: 'Is it really not a stimulant?', pl: 'Czy naprawdę nie jest stymulantem?' }, a: { hu: 'Schedule IV szabályozott szerként alacsonyabb függőségi potenciálú, mint klasszikus stimulánsok (Adderall, Ritalin). DAT-affinitása ugyanakkor van, szubjektíven kevésbé "stim-like", de tolerancia és pszichológiai függőség lehetséges.', en: 'Schedule IV with lower dependence potential than classic stimulants (Adderall, Ritalin). Has DAT affinity nonetheless, subjectively less "stim-like," but tolerance and psychological dependence are possible.', pl: 'Schedule IV z niższym potencjałem uzależnienia niż klasyczne stymulanty (Adderall, Ritalin). Ma jednak powinowactwo do DAT, subiektywnie mniej "stymulujący," lecz możliwa jest tolerancja i uzależnienie psychiczne.' } },
 { q: { hu: 'Mikor szedjem?', en: 'When to take it?', pl: 'Kiedy go przyjmować?' }, a: { hu: 'Reggel ébredés után, lehetőleg 9:00 előtt. 14:00 után NE, a 12-15 órás felezési idő miatt elronthatja az alvást.', en: 'In the morning after waking, ideally before 9 am. Do NOT take after 2 pm, the 12-15 h half-life can disrupt sleep.', pl: 'Rano po przebudzeniu, najlepiej przed 9:00. NIE po 14:00, okres półtrwania 12-15 h może zaburzyć sen.' } },
 { q: { hu: 'Tolerancia kialakul-e?', en: 'Does tolerance develop?', pl: 'Czy rozwija się tolerancja?' }, a: { hu: 'Mérsékelt; sok user 2-3× hét bevétellel stabil hatást tart. Napi krónikus használat tolerancia + pszichológiai függőség kockázattal jár.', en: 'Mild; many users maintain stable effect with 2-3× per week dosing. Daily chronic use carries tolerance + psychological dependence risk.', pl: 'Łagodna; wielu użytkowników utrzymuje stabilne działanie przy dawkowaniu 2-3× w tygodniu. Codzienne przewlekłe stosowanie niesie ryzyko tolerancji + uzależnienia psychicznego.' } },
 { q: { hu: 'WADA-tiltott, versenysportban?', en: 'WADA-banned, in competition?', pl: 'Zakaz WADA, w zawodach?' }, a: { hu: 'Igen, az S6 stimulánsok listáján szerepel. Versenyző sportolóknak in-competition tiltott; out-of-competition használat sportszövetségenként eltérő.', en: 'Yes, on the S6 stimulants list. Banned in-competition for athletes; out-of-competition status varies by federation.', pl: 'Tak, na liście S6 stymulantów. Zakazany podczas zawodów dla sportowców; status poza zawodami zależy od federacji.' } },
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
 { hu: 'Cholinforrást egyidejűleg (Alpha-GPC/CDP-Choline), racetam-szerű hatás miatt', en: 'Co-administer choline source (Alpha-GPC/CDP-Choline), racetam-like effect', pl: 'Współpodawać źródło choliny (Alpha-GPC/CDP-Choline), efekt podobny do racetamów' },
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

 // ===== 4. PHENYLPIRACETAM =====
 {
 id: 'phenylpiracetam',
 name: 'Phenylpiracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Phenyl-csoport piracetam-vázon. Stimuláns racetam + dopaminerg modulátor, WADA tiltott versenysportban.',
 en: 'Phenyl group on the piracetam scaffold. Stimulant racetam + dopaminergic modulator, WADA-banned in competition.',
 pl: 'Grupa fenylowa na szkielecie piracetamu. Stymulujący racetam + modulator dopaminergiczny, zakazany przez WADA w zawodach.',
 },
 description: {
 hu: 'A Phenylpiracetam (Phenotropil, Carphedon) egy fenil-csoporttal módosított piracetam-analóg, amelyet Oroszországban fejlesztettek ki eredetileg űrhajósok kognitív és fizikai teljesítmény-támogatására stress-körülmények között. Stimuláns hatású nootropikum, dopaminerg + noradrenerg modulátor + AMPA-receptor pozitív moduláció. WADA-tiltott (S6 stimulánsok kategória) versenysportban. Oroszországban Rx; EU/USA-ban kutatási vegyület.',
 en: 'Phenylpiracetam (Phenotropil, Carphedon) is a phenyl-modified piracetam analogue, developed in Russia originally to support cognitive and physical performance under stress (cosmonaut program). A stimulant-class nootropic with dopaminergic + noradrenergic modulation and AMPA positive allosteric modulation. WADA-banned (S6 stimulants) in competition. Rx in Russia; research chemical in EU/USA.',
 pl: 'Fenylopiracetam (Phenotropil, Carphedon) to analog piracetamu z grupą fenylową, opracowany w Rosji pierwotnie dla wspierania wydajności poznawczej i fizycznej w warunkach stresu (program kosmiczny). Nootropik o działaniu stymulującym, modulator dopaminergiczny + noradrenergiczny + pozytywna allosteryczna modulacja AMPA. Zakazany przez WADA (S6 stymulanty) w zawodach. Rx w Rosji; substancja badawcza w UE/USA.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Stimuláns racetam + DAT-modulátor', en: 'Stimulant racetam + DAT modulator', pl: 'Stymulujący racetam + modulator DAT' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '3-5 óra', en: '3-5 hours', pl: '3-5 godzin' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '30-60 perc', en: '30-60 min', pl: '30-60 min' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Russia Rx, WADA banned', en: 'Russia Rx, WADA banned', pl: 'Rosja Rx, WADA zabroniony' } },
 ],
 mechanism: {
 hu: 'Piracetam-váz + para-fenil-csoport. AMPA-receptor pozitív moduláció + dopaminerg/noradrenerg reuptake-gátlás.',
 en: 'Piracetam scaffold + para-phenyl group. AMPA receptor positive modulation + dopaminergic/noradrenergic reuptake inhibition.',
 pl: 'Szkielet piracetamu + grupa para-fenylowa. Pozytywna modulacja receptora AMPA + hamowanie wychwytu zwrotnego dopaminy/noradrenaliny.',
 },
 legalStatus: {
 hu: 'Russia: Rx (Phenotropil, Carphedon). EU/USA: kutatási vegyület, nem FDA-jóváhagyott. WADA: S6 tiltott versenysportban.',
 en: 'Russia: Rx (Phenotropil, Carphedon). EU/USA: research chemical, not FDA-approved. WADA: S6 banned in competition.',
 pl: 'Rosja: Rx (Phenotropil, Carphedon). UE/USA: substancja badawcza, niezatwierdzona przez FDA. WADA: S6 zabroniony w zawodach.',
 },
 onsetTime: '30-60 min',
 halfLife: '3-5 h',
 interactionsWith: ['caffeine', 'stimulants', 'MAOI'],
 wadaStatus: 'banned',
 benefits: [
 { hu: 'Akut kognitív és figyelem-emelkedés (stim-jellegű)', en: 'Acute cognitive and attention boost (stim-like)', pl: 'Ostry wzrost poznawczy i uwagi (jak stymulant)' },
 { hu: 'Fizikai teljesítmény és állóképesség javítása (orosz katonai/űrkutatási adatok)', en: 'Physical performance and stamina enhancement (Russian military/space data)', pl: 'Poprawa wydolności fizycznej i wytrzymałości (rosyjskie dane wojskowe/kosmiczne)' },
 { hu: 'Hidegtűrés és stress-resilience javítása', en: 'Cold tolerance and stress resilience', pl: 'Tolerancja zimna i odporność na stres' },
 { hu: 'Cerebrovascular kognitív zavarok (orosz klinikai adatok)', en: 'Cerebrovascular cognitive disorders (Russian clinical data)', pl: 'Naczyniowo-mózgowe zaburzenia poznawcze (rosyjskie dane kliniczne)' },
 ],
 quickStart: [
 { hu: '100-200 mg reggel, üres gyomorra vagy könnyű étkezéssel', en: '100-200 mg morning, empty stomach or light meal', pl: '100-200 mg rano, na pusty żołądek lub z lekkim posiłkiem' },
 { hu: 'Cholinforrást egyidejűleg (racetam-jelleg miatt)', en: 'Co-administer choline source (racetam character)', pl: 'Współpodawać źródło choliny (charakter racetamowy)' },
 { hu: 'Csak alkalmankénti használat (max 2-3× hét), gyors tolerancia-fejlődés', en: 'Occasional use only (max 2-3× per week), rapid tolerance development', pl: 'Tylko sporadyczne stosowanie (maks. 2-3× tygodniowo), szybkie tolerowanie' },
 { hu: 'NE szedd 14:00 után, alvászavar-kockázat', en: 'Do NOT take after 2 pm, sleep disruption risk', pl: 'NIE przyjmować po 14:00, ryzyko zaburzeń snu' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '30-60 perc múlva tiszta éberség, akut stimuláció (Modafinilhez közelebbi, mint Piracetamhoz). Enyhe szapora szívverés lehetséges.', en: 'Clean wakefulness and acute stimulation after 30-60 min (closer to Modafinil than Piracetam). Mild tachycardia possible.', pl: 'Czysta czujność i ostra stymulacja po 30-60 min (bliżej do Modafinilu niż Piracetamu). Możliwa łagodna tachykardia.' } },
 { label: { hu: '3-5 óra', en: '3-5 hours', pl: '3-5 godzin' }, body: { hu: 'Plateau, tartós fókusz; rövidebb hatástartam mint Modafinilnél.', en: 'Plateau, sustained focus; shorter duration than Modafinil.', pl: 'Plateau, trwały fokus; krótszy czas działania niż Modafinil.' } },
 { label: { hu: '5-7 nap', en: '5-7 days', pl: '5-7 dni' }, body: { hu: 'Tolerancia gyorsan kialakul napi szedés esetén, alkalmankénti használat ajánlott.', en: 'Tolerance develops rapidly with daily use, occasional use recommended.', pl: 'Tolerancja rozwija się szybko przy codziennym stosowaniu, zalecane sporadyczne użycie.' } },
 ],
 quality: {
 pure: [
 { hu: 'Fehér kristályos por vagy tabletta (Phenotropil 100 mg)', en: 'White crystalline powder or tablet (Phenotropil 100 mg)', pl: 'Biały krystaliczny proszek lub tabletka (Phenotropil 100 mg)' },
 { hu: 'Vízben mérsékelten oldódó', en: 'Moderately water-soluble', pl: 'Umiarkowanie rozpuszczalny w wodzie' },
 ],
 caution: [
 { hu: 'Álmatlanság, irritáció, tachycardia', en: 'Insomnia, irritability, tachycardia', pl: 'Bezsenność, drażliwość, tachykardia' },
 { hu: 'Tolerancia gyors fejlődés napi szedéssel', en: 'Rapid tolerance development with daily use', pl: 'Szybkie tolerowanie przy codziennym stosowaniu' },
 ],
 avoid: [
 { hu: 'Versenysportolóknak (WADA S6 tiltott)', en: 'Competitive athletes (WADA S6 banned)', pl: 'Sportowcy zawodowi (WADA S6 zakaz)' },
 { hu: 'Súlyos hipertónia, instabil szívbetegség', en: 'Severe hypertension, unstable heart disease', pl: 'Ciężkie nadciśnienie, niestabilna choroba serca' },
 { hu: 'Terhesség, szoptatás', en: 'Pregnancy, breastfeeding', pl: 'Ciąża, karmienie piersią' },
 ],
 },
 interactions: [
 { hu: 'Más stimulánsokkal (koffein, amfetaminok) additív tachycardia-kockázat', en: 'Additive tachycardia risk with other stimulants (caffeine, amphetamines)', pl: 'Addytywne ryzyko tachykardii z innymi stymulantami (kofeina, amfetaminy)' },
 { hu: 'MAOI együttszedés szigorúan kerülendő (hipertenzív krízis)', en: 'MAOI co-administration strictly contraindicated (hypertensive crisis)', pl: 'Współpodawanie MAOI ściśle przeciwwskazane (kryzys nadciśnieniowy)' },
 { hu: 'Cholin-forrással szinergisztikus (racetam-rész miatt)', en: 'Synergistic with choline source (due to racetam moiety)', pl: 'Synergiczny ze źródłem choliny (ze względu na ugrupowanie racetamowe)' },
 ],
 studies: [
 { title: 'Piracetam and piracetam-like drugs: pharmacology and clinical use', authors: 'Malykh AG, Sadaie MR.', journal: 'Drugs. 2010;70(3):287-312.', pmid: '20166767' },
 { title: 'Phenotropil in cerebrovascular insufficiency', authors: 'Savchenko AI et al.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2005;105(12):22-26.', pmid: '16447598' },
 { title: 'Phenotropil in the treatment of chronic ischemic brain disease', authors: 'Kalinskii PP, Nazarov VV.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2007;107(2):61-63.', pmid: '17593821' },
 ],
 faq: [
 { q: { hu: 'Miért gyors a tolerancia?', en: 'Why does tolerance develop so fast?', pl: 'Dlaczego tolerancja rozwija się tak szybko?' }, a: { hu: 'A dopaminerg + noradrenerg reuptake-gátlás miatt, hasonló mechanizmus mint klasszikus stimulánsoknál. Receptor-downregulation 5-7 napon belül napi szedéssel.', en: 'Due to dopaminergic + noradrenergic reuptake inhibition, similar mechanism to classic stimulants. Receptor downregulation within 5-7 days of daily use.', pl: 'Ze względu na hamowanie wychwytu zwrotnego dopaminy + noradrenaliny, mechanizm podobny do klasycznych stymulantów. Obniżenie regulacji receptorów w ciągu 5-7 dni codziennego stosowania.' } },
 { q: { hu: 'WADA-tiltás teljes vagy csak in-competition?', en: 'Is the WADA ban full or in-competition only?', pl: 'Czy zakaz WADA jest pełny czy tylko w zawodach?' }, a: { hu: 'In-competition tiltott (S6 stimulánsok). Out-of-competition használat sportszövetségenként eltérő, versenyző sportolóknak biztonságosabb teljesen kerülni.', en: 'Banned in-competition (S6 stimulants). Out-of-competition status varies by federation, safer for athletes to avoid entirely.', pl: 'Zabroniony w zawodach (S6 stymulanty). Status poza zawodami zależy od federacji, bezpieczniej dla sportowców unikać całkowicie.' } },
 { q: { hu: 'Kombinálható Modafinillel?', en: 'Can it be combined with Modafinil?', pl: 'Czy można łączyć z Modafinilem?' }, a: { hu: 'Klinikailag nem szokványos és nem ajánlott, átfedő stimuláns mechanizmus, tachycardia + álmatlanság kockázat. Egyik vagy másik.', en: 'Clinically uncommon and not recommended, overlapping stimulant mechanisms, tachycardia + insomnia risk. Use one or the other.', pl: 'Klinicznie rzadkie i niezalecane, nakładające się mechanizmy stymulujące, ryzyko tachykardii + bezsenności. Stosować jeden lub drugi.' } },
 ],
 related: ['piracetam', 'modafinil', 'bromantane', 'aniracetam'],
 },

 // ===== 5. ADRAFINIL =====
 {
 id: 'adrafinil',
 name: 'Adrafinil',
 image: null,
 accentColor: '#fbbf24',
 tagColor: 'rgba(251,191,36,0.18)',
 shortDesc: {
 hu: 'Modafinil prekurzor (hepatikus konverzió). EU-régiókban OTC, lassabb hatáskezdettel.',
 en: 'Modafinil prodrug (hepatic conversion). OTC in some EU regions, with slower onset.',
 pl: 'Prolek Modafinilu (konwersja wątrobowa). OTC w niektórych regionach UE, z wolniejszym wystąpieniem.',
 },
 description: {
 hu: 'Az Adrafinil egy difenil-metil-szulfinil-acetamid származék, a Modafinil hepatikus prekurzora, a májban metabolizálódik Modafinillé (CYP1A2 + CYP3A4 enzimek). Eugeroikum (alfa-1 adrenerg agonista hatású), wakefulness-promoting. Eredetileg Franciaországban hagyták jóvá narkolepszia-kezelésre (Olmifon), később 2011-ben kivonták a piacról kereskedelmi okokból. Jelenleg EU-régiókban kutatási vegyület / OTC státuszban, USA-ban kiegészítőként hozzáférhető.',
 en: 'Adrafinil is a diphenylmethylsulfinylacetamide derivative and the hepatic prodrug of Modafinil, metabolized in the liver to Modafinil (CYP1A2 + CYP3A4 enzymes). A eugeroic (alpha-1 adrenergic agonist), wakefulness-promoting. Originally approved in France for narcolepsy (Olmifon), then withdrawn in 2011 for commercial reasons. Currently a research chemical / OTC in EU regions, available as a supplement in the USA.',
 pl: 'Adrafinil to pochodna difenylometylosulfinyloacetamidu i prolek wątrobowy Modafinilu, metabolizowany w wątrobie do Modafinilu (enzymy CYP1A2 + CYP3A4). Eugeroik (agonista alfa-1 adrenergiczny), wzmacniający czuwanie. Pierwotnie zatwierdzony we Francji dla narkolepsji (Olmifon), wycofany w 2011 r. z przyczyn komercyjnych. Obecnie substancja badawcza / OTC w UE, dostępny jako suplement w USA.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Modafinil prodrug, alfa-1 adrenerg', en: 'Modafinil prodrug, alpha-1 adrenergic', pl: 'Prolek Modafinilu, alfa-1 adrenergiczny' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '1 óra (Adrafinil) / 12-15 óra (Modafinil)', en: '1 h (Adrafinil) / 12-15 h (Modafinil)', pl: '1 h (Adrafinil) / 12-15 h (Modafinil)' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '60-90 perc', en: '60-90 min', pl: '60-90 min' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'EU OTC research, USA OTC', en: 'EU OTC research, USA OTC', pl: 'UE OTC badania, USA OTC' } },
 ],
 mechanism: {
 hu: 'Adrafinil = Modafinil prekurzor. Hepatikus CYP1A2/CYP3A4 konverzió után aktív Modafinil-szerű hatás (lásd Modafinil entry).',
 en: 'Adrafinil = Modafinil prodrug. After hepatic CYP1A2/CYP3A4 conversion, exerts Modafinil-like action (see Modafinil entry).',
 pl: 'Adrafinil = prolek Modafinilu. Po wątrobowej konwersji CYP1A2/CYP3A4 wykazuje działanie podobne do Modafinilu (patrz wpis Modafinilu).',
 },
 legalStatus: {
 hu: 'EU: OTC kutatási vegyület, korábban Olmifon Rx Franciaországban. USA: OTC supplement. WADA: tiltott (Modafinil-metabolit miatt).',
 en: 'EU: OTC research chemical, formerly Olmifon Rx in France. USA: OTC supplement. WADA: banned (due to Modafinil metabolite).',
 pl: 'UE: OTC substancja badawcza, dawniej Olmifon Rx we Francji. USA: OTC suplement. WADA: zabroniony (ze względu na metabolit Modafinilu).',
 },
 onsetTime: '60-90 min',
 halfLife: '1 h (Adrafinil) → 12-15 h (Modafinil)',
 interactionsWith: ['caffeine', 'alcohol', 'hormonal contraceptives'],
 wadaStatus: 'banned',
 benefits: [
 { hu: 'Wakefulness-promoting, hasonló profil mint Modafinil', en: 'Wakefulness-promoting, similar profile to Modafinil', pl: 'Wzmacniający czuwanie, podobny profil jak Modafinil' },
 { hu: 'Narkolepszia-szerű fáradtság-szindrómák kezelése (történelmi Olmifon)', en: 'Narcolepsy-like fatigue syndromes (historical Olmifon)', pl: 'Zespoły zmęczenia podobne do narkolepsji (historycznie Olmifon)' },
 { hu: 'EU-régiókban Modafinil-alternatíva ahol Rx nem elérhető', en: 'EU regions: Modafinil alternative where Rx unavailable', pl: 'W UE: alternatywa dla Modafinilu, gdzie Rx niedostępny' },
 ],
 quickStart: [
 { hu: '300-600 mg reggel, üres gyomorra; lassabb hatáskezdet (60-90 perc)', en: '300-600 mg morning, empty stomach; slower onset (60-90 min)', pl: '300-600 mg rano, na pusty żołądek; wolniejsze wystąpienie (60-90 min)' },
 { hu: 'Máj-konverzió miatt MAGASABB dózis szükséges mint Modafinilnél (~3-4×)', en: 'Higher dose needed than Modafinil (~3-4×) due to hepatic conversion', pl: 'Wymagana wyższa dawka niż Modafinilu (~3-4×) ze względu na konwersję wątrobową' },
 { hu: 'Krónikus használat ELLEN, máj-enzim emelkedés (ALT/AST monitorozás)', en: 'AGAINST chronic use, hepatic enzyme elevation (monitor ALT/AST)', pl: 'PRZECIW przewlekłemu stosowaniu, podwyższenie enzymów wątrobowych (monitorować ALT/AST)' },
 { hu: '14:00 után NE, Modafinil felezési idő miatt alvászavar', en: 'Do NOT take after 2 pm, Modafinil half-life disrupts sleep', pl: 'NIE po 14:00, okres półtrwania Modafinilu zaburza sen' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: '60-90 perc múlva éberség (lassabb mint Modafinil). Plateau 4-8 órán át. Fejfájás, szájszárazság előfordulhat.', en: 'Wakefulness after 60-90 min (slower than Modafinil). Plateau 4-8 hours. Headache, dry mouth possible.', pl: 'Czujność po 60-90 min (wolniejsza niż Modafinil). Plateau 4-8 godzin. Możliwy ból głowy, sucha jama ustna.' } },
 { label: { hu: '4-8 óra', en: '4-8 hours', pl: '4-8 godzin' }, body: { hu: 'Plateau-éberség, tartós koncentráció, funkcionálisan ekvivalens Modafinillel.', en: 'Plateau wakefulness, sustained focus, functionally equivalent to Modafinil.', pl: 'Plateau czujności, trwała koncentracja, funkcjonalnie równoważne Modafinilowi.' } },
 { label: { hu: 'Hetente', en: 'Weekly', pl: 'Tygodniowo' }, body: { hu: 'Krónikus szedéssel ALT/AST emelkedés-kockázat, max 2-3× hét, nem napi.', en: 'Chronic dosing carries ALT/AST elevation risk, max 2-3× per week, not daily.', pl: 'Przewlekłe dawkowanie niesie ryzyko podwyższenia ALT/AST, maks. 2-3× tygodniowo, nie codziennie.' } },
 ],
 quality: {
 pure: [
 { hu: 'Fehér por vagy kapszula (300 mg standard)', en: 'White powder or capsule (300 mg standard)', pl: 'Biały proszek lub kapsułka (300 mg standardowo)' },
 { hu: 'Rosszul vízben oldódó, jól lipid-oldódó', en: 'Poorly water-soluble, lipid-soluble', pl: 'Słabo rozpuszczalny w wodzie, dobrze w lipidach' },
 ],
 caution: [
 { hu: 'Máj-enzim emelkedés (ALT/AST), rendszeres ellenőrzés', en: 'Hepatic enzyme elevation (ALT/AST), periodic monitoring', pl: 'Podwyższenie enzymów wątrobowych (ALT/AST), okresowe monitorowanie' },
 { hu: 'Fejfájás, szájszárazság, mérsékelt vérnyomás-emelkedés', en: 'Headache, dry mouth, mild blood pressure elevation', pl: 'Ból głowy, sucha jama ustna, łagodne podwyższenie ciśnienia' },
 ],
 avoid: [
 { hu: 'Súlyos májbetegség (hepatikus konverzió-függő)', en: 'Severe liver disease (hepatic conversion-dependent)', pl: 'Ciężka choroba wątroby (zależna od konwersji wątrobowej)' },
 { hu: 'Terhesség, szoptatás', en: 'Pregnancy, breastfeeding', pl: 'Ciąża, karmienie piersią' },
 { hu: 'Versenysportolóknak (WADA tiltott)', en: 'Competitive athletes (WADA banned)', pl: 'Sportowcy zawodowi (WADA zakaz)' },
 ],
 },
 interactions: [
 { hu: 'Hormonális fogamzásgátló hatékonyság-csökkenés (Modafinil-metabolit CYP3A4-indukció)', en: 'Hormonal contraceptive efficacy reduction (Modafinil metabolite CYP3A4 induction)', pl: 'Zmniejszenie skuteczności antykoncepcji hormonalnej (indukcja CYP3A4 metabolitem Modafinilu)' },
 { hu: 'Alkohol kerülendő (máj-terhelés + Modafinil-szerű hatás)', en: 'Avoid alcohol (liver burden + Modafinil-like effect)', pl: 'Unikać alkoholu (obciążenie wątroby + działanie podobne do Modafinilu)' },
 { hu: 'Koffeinnel additív stimuláció', en: 'Additive stimulation with caffeine', pl: 'Stymulacja addytywna z kofeiną' },
 ],
 studies: [
 { title: 'Adrafinil and modafinil, pharmacokinetic comparison', authors: 'Robertson P Jr, Hellriegel ET.', journal: 'Clin Pharmacokinet. 2003;42(2):123-137.', pmid: '12537513' },
 { title: 'Adrafinil: a novel vigilance promoting agent', authors: 'Milgram NW et al.', journal: 'CNS Drug Rev. 2000;6(2):136-153.', pmid: '11079215' },
 ],
 faq: [
 { q: { hu: 'Miért Adrafinilt válasszak Modafinil helyett?', en: 'Why pick Adrafinil over Modafinil?', pl: 'Dlaczego wybrać Adrafinil zamiast Modafinilu?' }, a: { hu: 'EU/USA-régiókban Adrafinil OTC státusza miatt hozzáférhetőbb mint a Rx Modafinil. Funkcionálisan közel azonos, de hepatikus máj-terhelés és lassabb hatáskezdet hátrányok.', en: "Adrafinil's OTC status in EU/USA makes it more accessible than Rx Modafinil. Functionally near-identical, but hepatic liver burden and slower onset are drawbacks.", pl: 'Status OTC Adrafinilu w UE/USA czyni go bardziej dostępnym niż Rx Modafinil. Funkcjonalnie niemal identyczny, ale obciążenie wątroby i wolniejsze wystąpienie to wady.' } },
 { q: { hu: 'Mennyi a Modafinil-ekvivalens dózis?', en: 'What is the Modafinil-equivalent dose?', pl: 'Jaka jest dawka równoważna Modafinilu?' }, a: { hu: 'Hozzávetőleg 300 mg Adrafinil ≈ 100 mg Modafinil (konverziós hatékonyság 30-40%). 600 mg Adrafinil ≈ 200 mg Modafinil.', en: 'Roughly 300 mg Adrafinil ≈ 100 mg Modafinil (conversion efficiency 30-40%). 600 mg Adrafinil ≈ 200 mg Modafinil.', pl: 'Około 300 mg Adrafinilu ≈ 100 mg Modafinilu (skuteczność konwersji 30-40%). 600 mg Adrafinilu ≈ 200 mg Modafinilu.' } },
 { q: { hu: 'Máj-károsodás kockázata?', en: 'Risk of liver damage?', pl: 'Ryzyko uszkodzenia wątroby?' }, a: { hu: 'Krónikus napi szedés ALT/AST emelkedést okozhat. Alkalmankénti használat (2-3× hét) + periódusos vérvizsgálat ajánlott a krónikus máj-terhelés elkerülésére.', en: 'Chronic daily use can elevate ALT/AST. Occasional use (2-3× per week) + periodic blood tests recommended to avoid chronic hepatic burden.', pl: 'Przewlekłe codzienne stosowanie może podwyższać ALT/AST. Sporadyczne użycie (2-3× tygodniowo) + okresowe badania krwi zalecane.' } },
 ],
 related: ['modafinil', 'armodafinil', 'flmodafinil'],
 },

 // ===== 6. BROMANTANE =====
 {
 id: 'bromantane',
 name: 'Bromantane',
 image: null,
 accentColor: '#f43f5e',
 tagColor: 'rgba(244,63,94,0.18)',
 shortDesc: {
 hu: 'Orosz actoprotector, dopaminerg + szerotonerg modulátor + immunmodulátor. Anti-fatigue, anxiolítikus.',
 en: 'Russian actoprotector, dopaminergic + serotonergic modulator + immunomodulator. Anti-fatigue, anxiolytic.',
 pl: 'Rosyjski aktoprotektor, modulator dopaminergiczny + serotonergiczny + immunomodulator. Przeciw-zmęczeniowy, przeciwlękowy.',
 },
 description: {
 hu: 'A Bromantane (Ladasten, ADK-709) egy adamantán-aminobenzol származék, amelyet Oroszországban fejlesztettek ki eredetileg katonai actoprotector-ként (fizikai + mentális teljesítmény stress-körülmények között, hőtűrés). Hatásmechanizmusa szokatlan: tirozin-hidroxiláz + DOPA-dekarboxiláz expression-növelés (dopamin-szintézis), szerotonin- és GABA-moduláció, mérsékelt immunmodulátor (cytokin-szintézis-szabályozás). Oroszországban Rx krónikus fáradtság-szindrómára, neuraszténiára, asztheniás zavarokra. WADA-listán (S0 nem-jóváhagyott szerek).',
 en: 'Bromantane (Ladasten, ADK-709) is an adamantane-aminobenzol derivative developed in Russia originally as a military actoprotector (physical + mental performance under stress, heat tolerance). Unusual mechanism: upregulates tyrosine hydroxylase + DOPA decarboxylase expression (dopamine synthesis), modulates serotonin and GABA, and acts as a mild immunomodulator (cytokine synthesis regulation). Rx in Russia for chronic fatigue, neurasthenia, asthenic disorders. WADA-listed (S0 non-approved substances).',
 pl: 'Bromantan (Ladasten, ADK-709) to pochodna adamantano-aminobenzolu opracowana w Rosji pierwotnie jako wojskowy aktoprotektor (wydolność fizyczna i psychiczna pod stresem, tolerancja ciepła). Nietypowy mechanizm: zwiększa ekspresję hydroksylazy tyrozynowej + dekarboksylazy DOPA (synteza dopaminy), moduluje serotoninę i GABA, działa jako łagodny immunomodulator (regulacja syntezy cytokin). Rx w Rosji dla przewlekłego zmęczenia, neurastenii, zaburzeń astenicznych. Na liście WADA (S0 substancje niezatwierdzone).',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Dopaminerg + szerotonerg actoprotector', en: 'Dopaminergic + serotonergic actoprotector', pl: 'Aktoprotektor dopaminergiczny + serotonergiczny' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '10-14 óra', en: '10-14 hours', pl: '10-14 godzin' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '60-90 perc', en: '60-90 min', pl: '60-90 min' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Russia Rx, EU/USA research', en: 'Russia Rx, EU/USA research', pl: 'Rosja Rx, UE/USA badania' } },
 ],
 mechanism: {
 hu: 'Adamantán-aminobenzol származék. Dopamin- és tirozin-hidroxiláz expression-növelő; szerotonin- és GABA-modulátor; mérsékelt immunmodulátor.',
 en: 'Adamantane-aminobenzol derivative. Upregulates tyrosine hydroxylase and dopamine synthesis; modulates serotonin and GABA; mild immunomodulator.',
 pl: 'Pochodna adamantano-aminobenzolu. Zwiększa ekspresję hydroksylazy tyrozynowej i syntezę dopaminy; moduluje serotoninę i GABA; łagodny immunomodulator.',
 },
 legalStatus: {
 hu: 'Russia: Rx (Ladasten) krónikus fáradtság, neuraszténia, asztheniás zavarok. EU/USA: kutatási vegyület. WADA: S0 nem-jóváhagyott szerek.',
 en: 'Russia: Rx (Ladasten) chronic fatigue, neurasthenia, asthenic disorders. EU/USA: research chemical. WADA: S0 non-approved substances.',
 pl: 'Rosja: Rx (Ladasten) przewlekłe zmęczenie, neurastenia, zaburzenia asteniczne. UE/USA: substancja badawcza. WADA: S0 substancje niezatwierdzone.',
 },
 onsetTime: '60-90 min',
 halfLife: '10-14 h',
 interactionsWith: ['stimulants', 'MAOI', 'alcohol'],
 wadaStatus: 'banned',
 benefits: [
 { hu: 'Anti-fatigue, krónikus fáradtság-szindróma kezelésére orosz klinikai adatok', en: 'Anti-fatigue, Russian clinical data on chronic fatigue syndrome', pl: 'Przeciw-zmęczeniowe, rosyjskie dane kliniczne dla zespołu przewlekłego zmęczenia' },
 { hu: 'Anxiolítikus hatás szedáció nélkül (GABA + szerotonerg moduláció)', en: 'Anxiolytic without sedation (GABA + serotonergic modulation)', pl: 'Przeciwlękowe bez sedacji (modulacja GABA + serotonergiczna)' },
 { hu: 'Fizikai stress-resilience és hidegtűrés', en: 'Physical stress resilience and cold tolerance', pl: 'Odporność na stres fizyczny i tolerancja zimna' },
 { hu: 'Mérsékelt immunmodulátor hatás (orosz vizsgálatokban dokumentált)', en: 'Mild immunomodulatory effect (documented in Russian trials)', pl: 'Łagodne działanie immunomodulujące (udokumentowane w rosyjskich badaniach)' },
 ],
 quickStart: [
 { hu: '50-100 mg reggel, étkezéssel együtt', en: '50-100 mg morning, with food', pl: '50-100 mg rano, z posiłkiem' },
 { hu: '14-28 napos kúra-szerű használat ajánlott (orosz Rx protokoll)', en: '14-28 day cycle recommended (Russian Rx protocol)', pl: 'Zalecany cykl 14-28 dni (rosyjski protokół Rx)' },
 { hu: 'Akut stim-jellegű hatás minimális, kumulatív hatás 7-14 nap múlva', en: 'Acute stim-like effect minimal, cumulative benefit after 7-14 days', pl: 'Ostry efekt stymulujący minimalny, kumulacyjna korzyść po 7-14 dniach' },
 { hu: 'Cycle-off 2 hét két kúra között', en: '2-week cycle-off between courses', pl: '2-tygodniowa przerwa między cyklami' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Akut hatás enyhe; szubjektíven nyugodtabb energia, enyhe motiváció-emelkedés. Klasszikus stim-jelleg hiányzik.', en: 'Acute effect mild; subjectively calmer energy, slight motivation lift. Classic stim-character absent.', pl: 'Efekt ostry łagodny; subiektywnie spokojniejsza energia, lekki wzrost motywacji. Brak klasycznego charakteru stymulanta.' } },
 { label: { hu: '7-14 nap', en: '7-14 days', pl: '7-14 dni' }, body: { hu: 'Kumulatív hatás: csökkent fáradtság, jobb stress-tolerancia, anxiolítikus profil érzékelhető.', en: 'Cumulative effect: reduced fatigue, better stress tolerance, anxiolytic profile noticeable.', pl: 'Efekt kumulacyjny: zmniejszone zmęczenie, lepsza tolerancja stresu, zauważalny profil przeciwlękowy.' } },
 { label: { hu: '28 nap (kúra vége)', en: '28 days (end of course)', pl: '28 dni (koniec cyklu)' }, body: { hu: 'Plateau; orosz klinikai adatok szerint anti-fatigue effekt 1-2 hónapig fennmaradhat cycle-off után.', en: 'Plateau; Russian clinical data: anti-fatigue effect can persist 1-2 months after cycle-off.', pl: 'Plateau; rosyjskie dane kliniczne: efekt przeciw-zmęczeniowy może utrzymywać się 1-2 miesiące po zakończeniu cyklu.' } },
 ],
 quality: {
 pure: [
 { hu: 'Fehér por vagy kapszula (50 mg standard, Ladasten brand)', en: 'White powder or capsule (50 mg standard, Ladasten brand)', pl: 'Biały proszek lub kapsułka (50 mg standardowo, marka Ladasten)' },
 { hu: 'Lipofil, lipid-oldódó', en: 'Lipophilic, lipid-soluble', pl: 'Lipofilny, rozpuszczalny w lipidach' },
 ],
 caution: [
 { hu: 'Mérsékelt szájszárazság, alvászavar este szedéssel', en: 'Mild dry mouth, sleep disruption with evening dosing', pl: 'Łagodna sucha jama ustna, zaburzenia snu przy wieczornym dawkowaniu' },
 { hu: 'Tolerancia hosszú kúrával fejlődhet, cycle-off szükséges', en: 'Tolerance with long courses, cycle-off needed', pl: 'Tolerancja przy długich cyklach, wymagana przerwa' },
 ],
 avoid: [
 { hu: 'Versenysportolóknak (WADA S0)', en: 'Competitive athletes (WADA S0)', pl: 'Sportowcy zawodowi (WADA S0)' },
 { hu: 'Terhesség, szoptatás (kutatás hiányzik)', en: 'Pregnancy, breastfeeding (research lacking)', pl: 'Ciąża, karmienie piersią (brak badań)' },
 { hu: 'Súlyos szív- vagy májbetegség', en: 'Severe heart or liver disease', pl: 'Ciężka choroba serca lub wątroby' },
 ],
 },
 interactions: [
 { hu: 'MAOI együttszedés kerülendő (szerotonin-szindróma kockázat)', en: 'Avoid MAOI co-administration (serotonin syndrome risk)', pl: 'Unikać współpodawania MAOI (ryzyko zespołu serotoninowego)' },
 { hu: 'Más stimulánsokkal (Modafinil, amfetaminok) additív hatás', en: 'Additive effect with other stimulants (Modafinil, amphetamines)', pl: 'Efekt addytywny z innymi stymulantami (Modafinil, amfetaminy)' },
 { hu: 'Alkohollal együttszedés kerülendő (immunmodulátor + máj-terhelés)', en: 'Avoid alcohol co-administration (immunomodulator + liver burden)', pl: 'Unikać współpodawania alkoholu (immunomodulator + obciążenie wątroby)' },
 ],
 studies: [
 { title: 'Bromantane in asthenic disorders: clinical trial', authors: 'Voznesenskaia TG et al.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2007;107(4):27-32.', pmid: '17539276' },
 { title: 'Ladasten (Bromantane): pharmacological profile review', authors: 'Mirzoian RS et al.', journal: 'Eksp Klin Farmakol. 2009;72(1):3-7.', pmid: '19374118' },
 { title: 'Bromantane: novel actoprotector with neuroprotective profile', authors: 'Morozov IS et al.', journal: 'Eksp Klin Farmakol. 2001;64(2):3-9.', pmid: '11548438' },
 ],
 faq: [
 { q: { hu: 'Mit jelent az "actoprotector"?', en: 'What does "actoprotector" mean?', pl: 'Co oznacza "aktoprotektor"?' }, a: { hu: 'Orosz farmakológiai kategória: olyan szer, amely fizikai és mentális teljesítményt fenntart vagy javít stress-körülmények között (hideg, hőség, hypoxia, kimerültség), anélkül, hogy klasszikus stimuláns lenne.', en: 'Russian pharmacological category: an agent that maintains or improves physical and mental performance under stress conditions (cold, heat, hypoxia, fatigue), without being a classic stimulant.', pl: 'Rosyjska kategoria farmakologiczna: środek utrzymujący lub poprawiający wydolność fizyczną i psychiczną w warunkach stresu (zimno, gorąco, hipoksja, zmęczenie), bez bycia klasycznym stymulantem.' } },
 { q: { hu: 'Anxiolítikus szedáció nélkül, hogyan lehetséges?', en: 'Anxiolytic without sedation, how is that possible?', pl: 'Przeciwlękowe bez sedacji, jak to możliwe?' }, a: { hu: 'A GABA-erg moduláció szubunit-szelektív (alpha-2/3, NEM alpha-1, utóbbi okozza a szedációt), kombinálva szerotonerg balanszírozással. Klinikailag jellemző: anxiolítikus + enyhe stim-jelleg.', en: 'GABAergic modulation is subunit-selective (alpha-2/3, NOT alpha-1, the latter causes sedation), combined with serotonergic balancing. Clinically: anxiolytic + mild stim-character.', pl: 'Modulacja GABAergiczna jest selektywna podjednostkowo (alfa-2/3, NIE alfa-1, ten ostatni powoduje sedację), w połączeniu z równoważeniem serotonergicznym. Klinicznie: przeciwlękowe + łagodny charakter stymulujący.' } },
 { q: { hu: 'Mikor érződik a hatás?', en: 'When are effects felt?', pl: 'Kiedy odczuwa się efekty?' }, a: { hu: 'Akut hatás minimális. Kumulatív hatás 7-14 napos napi szedés után érzékelhető. Teljes profil 28 napos kúra végén.', en: 'Acute effect minimal. Cumulative benefit noticeable after 7-14 days of daily dosing. Full profile by the end of a 28-day course.', pl: 'Efekt ostry minimalny. Korzyść kumulacyjna zauważalna po 7-14 dniach codziennego dawkowania. Pełny profil pod koniec 28-dniowego cyklu.' } },
 ],
 related: ['9-me-bc', 'selank', 'semax', 'noopept'],
 },

 // ── CORE #7: NSI-189 ───────────────────────────────────────────────────────
 {
 id: 'nsi-189',
 name: 'NSI-189',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'Hippocampus-szelektív neurogenezis-induktor. Neuralstem Phase 1b/2 klinikai vizsgálatok depresszióra.',
 en: 'Hippocampus-selective neurogenesis inducer. Neuralstem Phase 1b/2 clinical trials for depression.',
 pl: 'Selektywny induktor neurogenezy hipokampu. Neuralstem Phase 1b/2, badania nad depresją.',
 },
 description: {
 hu: 'Az NSI-189 egy benzilpiperazin-aminopiridin származék, amelyet a Neuralstem Inc. fejlesztett ki hippocampus-szelektív neurogenezis-induktorként. Phase 1b/2 klinikai vizsgálatok major depressziós zavarra (MDD) és poszttraumás stressz-zavarra (PTSD) zajlottak. Hatásmechanizmusa nem teljesen ismert, de a hippocampus szubgranuláris zónájában a neuronális progenitor sejtek proliferációját és differenciációját indukálja. Nem növeli az ismert monoamine-receptorok aktivitását, független az SSRI/SNRI mechanizmustól.',
 en: 'NSI-189 is a benzylpiperazine-aminopyridine derivative developed by Neuralstem Inc. as a hippocampus-selective neurogenesis inducer. Phase 1b/2 clinical trials have been conducted in major depressive disorder (MDD) and post-traumatic stress disorder (PTSD). The mechanism is incompletely understood, but it induces proliferation and differentiation of neuronal progenitor cells in the subgranular zone of the hippocampus. It does not act on known monoamine receptors, independent of the SSRI/SNRI mechanism.',
 pl: 'NSI-189 to pochodna benzylopiperazyno-aminopirydynowa opracowana przez Neuralstem Inc. jako selektywny induktor neurogenezy hipokampu. Przeprowadzono badania kliniczne fazy 1b/2 w dużym zaburzeniu depresyjnym (MDD) i zespole stresu pourazowego (PTSD). Mechanizm nie jest w pełni poznany, ale indukuje proliferację i różnicowanie komórek progenitorowych w strefie subgranularnej hipokampu. Nie działa na znane receptory monoaminowe, niezależnie od mechanizmu SSRI/SNRI.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Hippocampus-neurogenezis', en: 'Hippocampal neurogenesis', pl: 'Neurogeneza hipokampu' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '17-20 óra', en: '17-20 hours', pl: '17-20 godzin' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '1-2 hét (szubjektív), 4-6 hét (plató)', en: '1-2 weeks (subjective), 4-6 weeks (plateau)', pl: '1-2 tygodnie (subiektywne), 4-6 tygodni (plato)' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'USA research, FDA Phase 2', en: 'USA research, FDA Phase 2', pl: 'USA research, FDA Phase 2' } },
 ],
 mechanism: {
 hu: 'Hippocampus szubgranuláris zónájában neuronális progenitor sejt proliferáció + differenciáció. Monoamine-receptoroktól független mechanizmus.',
 en: 'Proliferation and differentiation of neuronal progenitor cells in the hippocampal subgranular zone. Independent of monoamine receptor mechanisms.',
 pl: 'Proliferacja i różnicowanie komórek progenitorowych neuronów w strefie subgranularnej hipokampu. Niezależnie od mechanizmów receptorów monoaminowych.',
 },
 legalStatus: {
 hu: 'USA: nem FDA-jóváhagyott, klinikai vizsgálati fázisban. EU: research chemical. WADA: nem listán.',
 en: 'USA: not FDA-approved, in clinical trial phase. EU: research chemical. WADA: not listed.',
 pl: 'USA: niezatwierdzony przez FDA, w fazie badań klinicznych. UE: research chemical. WADA: nie na liście.',
 },
 onsetTime: '1-2 weeks (subjective), 4-6 weeks (plateau)',
 halfLife: '17-20 h',
 interactionsWith: ['SSRI', 'SNRI', 'MAOI'],
 wadaStatus: null,
 benefits: [
 { hu: 'Hippocampus-neurogenezis indukciója (egyedi mechanizmus)', en: 'Induction of hippocampal neurogenesis (unique mechanism)', pl: 'Indukcja neurogenezy hipokampu (unikalny mechanizm)' },
 { hu: 'Major depressziós zavar (MDD) tüneti enyhítése klinikai vizsgálatokban', en: 'Symptomatic relief of major depressive disorder (MDD) in clinical trials', pl: 'Łagodzenie objawów dużego zaburzenia depresyjnego (MDD) w badaniach klinicznych' },
 { hu: 'Kognitív funkció támogatása (memória, tanulás)', en: 'Cognitive function support (memory, learning)', pl: 'Wsparcie funkcji poznawczych (pamięć, nauka)' },
 { hu: 'PTSD-kutatás: trauma utáni hippocampus-térfogat helyreállítás', en: 'PTSD research: post-trauma hippocampal volume restoration', pl: 'Badania PTSD: przywracanie objętości hipokampu po traumie' },
 ],
 quickStart: [
 { hu: 'Reggel étkezéssel együtt (hosszú felezési idő miatt napi 1×)', en: 'Morning with food (single daily dose due to long half-life)', pl: 'Rano z posiłkiem (jedna dawka dziennie z powodu długiego okresu półtrwania)' },
 { hu: 'Tipikus klinikai dózis 40 mg/nap, indítás alacsonyabbról', en: 'Typical clinical dose 40 mg/day, start lower', pl: 'Typowa dawka kliniczna 40 mg/dzień, zacząć od niższej' },
 { hu: 'Kúraidő minimum 28-42 nap a teljes hatáshoz', en: 'Minimum 28-42 day course for full effect', pl: 'Minimalny kurs 28-42 dni dla pełnego efektu' },
 { hu: 'SSRI/SNRI kombinációkat klinikai monitorozás mellett', en: 'SSRI/SNRI combinations only under clinical monitoring', pl: 'Kombinacje SSRI/SNRI tylko pod nadzorem klinicznym' },
 ],
 expectations: [
 { label: { hu: 'Első hét', en: 'First week', pl: 'Pierwszy tydzień' }, body: { hu: 'Akut hatás minimális. Esetenként enyhe szubjektív tisztaság vagy mild irritáció kezdetén.', en: 'Acute effect minimal. Occasional subtle subjective clarity or mild early irritability.', pl: 'Efekt ostry minimalny. Sporadyczna subiektywna jasność lub łagodna drażliwość początkowa.' } },
 { label: { hu: '2-4 hét', en: '2-4 weeks', pl: '2-4 tygodnie' }, body: { hu: 'Hangulati emelkedés, energia-szint javulás (klinikai vizsgálatokban dokumentált).', en: 'Mood elevation, energy improvement (documented in clinical trials).', pl: 'Wzrost nastroju, poprawa energii (udokumentowane w badaniach klinicznych).' } },
 { label: { hu: '4-6 hét', en: '4-6 weeks', pl: '4-6 tygodni' }, body: { hu: 'Plató: kognitív funkció + memória javul. PTSD esetén hippocampus-térfogat MRI-vel mérhető növekedése.', en: 'Plateau: cognitive function + memory improve. In PTSD, MRI-measurable hippocampal volume increase.', pl: 'Plato: poprawa funkcji poznawczych + pamięci. W PTSD wzrost objętości hipokampu mierzalny w MRI.' } },
 ],
 quality: {
 pure: [
 { hu: 'Fehér vagy törtfehér por, FT-IR + HPLC tisztaság igazolható', en: 'White or off-white powder, FT-IR + HPLC purity verifiable', pl: 'Biały lub złamany biały proszek, czystość weryfikowalna FT-IR + HPLC' },
 { hu: 'Vízoldhatóság alacsony, alkoholban oldódik', en: 'Low water solubility, soluble in alcohol', pl: 'Niska rozpuszczalność w wodzie, rozpuszczalny w alkoholu' },
 ],
 caution: [
 { hu: 'Korai irritáció, álmatlanság előfordulhat (kúra első hetében)', en: 'Early irritability, insomnia possible (first week of course)', pl: 'Wczesna drażliwość, bezsenność możliwe (pierwszy tydzień kursu)' },
 { hu: 'Hosszú felezési idő → kumulatív hatás várható', en: 'Long half-life → cumulative effect expected', pl: 'Długi okres półtrwania → oczekiwany efekt kumulacyjny' },
 ],
 avoid: [
 { hu: 'Aktív psychiátriai monoterápia helyett kombinációként csak orvosi felügyelet alatt', en: 'Use only adjunctively, not as monotherapy replacement, under medical supervision', pl: 'Stosować wyłącznie jako uzupełnienie, nie zamiast monoterapii, pod nadzorem medycznym' },
 { hu: 'Bipolar I/II spektrum mánia-kockázat, orvosi monitorozás kötelező', en: 'Bipolar I/II spectrum mania risk, medical monitoring required', pl: 'Spektrum dwubiegunowości I/II, ryzyko manii, monitoring medyczny wymagany' },
 ],
 },
 interactions: [
 { hu: 'SSRI/SNRI kombinációval szinergisztikus, de szerotonin-szindróma kockázat', en: 'Synergistic with SSRI/SNRI but serotonin syndrome risk', pl: 'Synergiczny z SSRI/SNRI, ale ryzyko zespołu serotoninowego' },
 { hu: 'MAOI kombináció kerülendő', en: 'MAOI combination should be avoided', pl: 'Kombinacja z MAOI powinna być unikana' },
 { hu: 'CNS depresszánsokkal (alkohol, benzodiazepines) óvatosság', en: 'Caution with CNS depressants (alcohol, benzodiazepines)', pl: 'Ostrożność z depresantami OUN (alkohol, benzodiazepiny)' },
 ],
 studies: [
 { title: 'NSI-189: a small molecule with hippocampal neurogenesis-stimulating activity', authors: 'Liu Y et al.', journal: 'CNS Neurol Disord Drug Targets. 2014;13(2):319-326.', pmid: '24059323' },
 { title: 'NSI-189 Phase 1B trial in major depressive disorder', authors: 'Fava M et al.', journal: 'Mol Psychiatry. 2016;21(10):1372-1380.', pmid: '26821984' },
 { title: 'NSI-189 in cognition and PTSD: preclinical neuroprotection', authors: 'McIntyre RS et al.', journal: 'Expert Opin Investig Drugs. 2017;26(2):191-198.', pmid: '28006971' },
 ],
 faq: [
 { q: { hu: 'Mi a különbség SSRI-vel szemben?', en: 'How does it differ from SSRIs?', pl: 'Czym różni się od SSRI?' }, a: { hu: 'A SSRI-k a szerotonin-újrafelvételt gátolják (gyors monoamine-szintű hatás). Az NSI-189 közvetlenül a hippocampus-progenitor sejtek osztódását indukálja (lassú, strukturális hatás). Mechanism teljesen független.', en: 'SSRIs inhibit serotonin reuptake (rapid monoamine-level effect). NSI-189 directly induces proliferation of hippocampal progenitor cells (slow, structural effect). Mechanisms are entirely independent.', pl: 'SSRI hamują wychwyt zwrotny serotoniny (szybki efekt monoaminowy). NSI-189 bezpośrednio indukuje proliferację komórek progenitorowych hipokampu (powolny, strukturalny efekt). Mechanizmy są całkowicie niezależne.' } },
 { q: { hu: 'Klinikailag jóváhagyott valahol?', en: 'Clinically approved anywhere?', pl: 'Zatwierdzony klinicznie gdzieś?' }, a: { hu: 'Nem. Phase 2 vizsgálatokban van; Neuralstem Inc. a fejlesztője. Még nem FDA-approved.', en: 'No. In Phase 2 trials; Neuralstem Inc. is the developer. Not yet FDA-approved.', pl: 'Nie. W badaniach fazy 2; deweloperem jest Neuralstem Inc. Jeszcze nie zatwierdzony przez FDA.' } },
 { q: { hu: 'Mennyi idő alatt érződik?', en: 'How quickly are effects felt?', pl: 'Jak szybko odczuwa się efekty?' }, a: { hu: 'Akut hatás minimális. Szubjektív "tisztaság" 1-2 hét után. Klinikai antidepresszáns hatás 4-6 hét után plató.', en: 'Acute effect minimal. Subjective "clarity" after 1-2 weeks. Clinical antidepressant effect plateaus after 4-6 weeks.', pl: 'Efekt ostry minimalny. Subiektywna "jasność" po 1-2 tygodniach. Plato kliniczne antydepresyjne po 4-6 tygodniach.' } },
 { q: { hu: 'Megvonási tünet?', en: 'Withdrawal symptoms?', pl: 'Objawy odstawienia?' }, a: { hu: 'Nem dokumentált klasszikus megvonás. A neurogenezis-stimuláció abbahagyásakor a hatás fokozatosan halványul, nem visszaüt-jelleggel.', en: 'No documented classic withdrawal. Effects gradually fade after stopping, without rebound character.', pl: 'Brak udokumentowanego klasycznego odstawienia. Efekty stopniowo zanikają po zaprzestaniu, bez efektu odbicia.' } },
 ],
 related: ['cerebrolysin', 'semax', 'tianeptine', 'methylene-blue'],
 },

 // ── CORE #8: Semax ─────────────────────────────────────────────────────────
 {
 id: 'semax',
 name: 'Semax',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'Orosz Rx heptapeptid (ACTH 4-10 analóg). Stroke-rehabilitáció + kognitív enhancement, intranazális spray.',
 en: 'Russian Rx heptapeptide (ACTH 4-10 analog). Stroke rehab + cognitive enhancement, intranasal spray.',
 pl: 'Rosyjski Rx heptapeptyd (analog ACTH 4-10). Rehabilitacja udarowa + wzmocnienie poznawcze, spray donosowy.',
 },
 description: {
 hu: 'A Semax egy Met-Glu-His-Phe-Pro-Gly-Pro heptapeptid, az adrenokortikotrop hormon (ACTH) 4-10 fragmensének szintetikus analógja, BDNF-mimicking hatású. Oroszországban Rx intranazális spray-ként ischémiás stroke akut és rehabilitációs fázisára, és transient ischemic attack-re (TIA). Dopaminerg + szerotonerg + neurotrofikus + nootropic profillal rendelkezik. Az intranazális adagolás révén a vér-agy gáton átjut és a központi idegrendszerben fejti ki hatását. Megjegyzés: ez az entry a peptid-libraryben is szerepel, eltérő framinggel (peptid-fókusz vs nootropic-fókusz).',
 en: 'Semax is a Met-Glu-His-Phe-Pro-Gly-Pro heptapeptide, a synthetic analog of the 4-10 fragment of adrenocorticotropic hormone (ACTH), with BDNF-mimicking action. It is Rx in Russia as an intranasal spray for acute ischemic stroke, post-stroke rehabilitation, and transient ischemic attack (TIA). It exhibits a dopaminergic + serotonergic + neurotrophic + nootropic profile. Intranasal administration allows it to cross the blood-brain barrier and act centrally. Note: this entry also appears in the peptide library with different framing (peptide-focus vs nootropic-focus).',
 pl: 'Semax to heptapeptyd Met-Glu-His-Phe-Pro-Gly-Pro, syntetyczny analog fragmentu 4-10 hormonu adrenokortykotropowego (ACTH), o działaniu naśladującym BDNF. W Rosji Rx jako spray donosowy w ostrym udarze niedokrwiennym, rehabilitacji poudarowej i przejściowych atakach niedokrwiennych (TIA). Profil: dopaminergiczny + serotonergiczny + neurotroficzny + nootropowy. Podawanie donosowe pozwala mu przekraczać barierę krew-mózg. Uwaga: ta pozycja występuje również w bibliotece peptydów z innym kontekstem.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'ACTH(4-10) heptapeptid, BDNF-mimicking', en: 'ACTH(4-10) heptapeptide, BDNF-mimicking', pl: 'Heptapeptyd ACTH(4-10), naśladujący BDNF' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '20-30 perc (intranazális)', en: '20-30 min (intranasal)', pl: '20-30 min (donosowo)' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '10-15 perc', en: '10-15 min', pl: '10-15 min' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Russia Rx, EU/USA research', en: 'Russia Rx, EU/USA research', pl: 'Rosja Rx, UE/USA research' } },
 ],
 mechanism: {
 hu: 'Met-Glu-His-Phe-Pro-Gly-Pro szintetikus heptapeptid, ACTH(4-10) analóg. Dopaminerg + szerotonerg + BDNF-mimicking. Intranazálisan adva vér-agy-gáton átjut.',
 en: 'Met-Glu-His-Phe-Pro-Gly-Pro synthetic heptapeptide, ACTH(4-10) analog. Dopaminergic + serotonergic + BDNF-mimicking. Crosses blood-brain barrier when given intranasally.',
 pl: 'Syntetyczny heptapeptyd Met-Glu-His-Phe-Pro-Gly-Pro, analog ACTH(4-10). Dopaminergiczny + serotonergiczny + naśladujący BDNF. Przekracza barierę krew-mózg po podaniu donosowym.',
 },
 legalStatus: {
 hu: 'Russia: Rx (intranazális spray) stroke + TIA + kognitív zavarok. EU/USA: research peptide. WADA: nem listán.',
 en: 'Russia: Rx (intranasal spray) for stroke + TIA + cognitive disorders. EU/USA: research peptide. WADA: not listed.',
 pl: 'Rosja: Rx (spray donosowy) na udar + TIA + zaburzenia poznawcze. UE/USA: peptyd badawczy. WADA: nie na liście.',
 },
 onsetTime: '10-15 min',
 halfLife: '20-30 min',
 interactionsWith: ['MAOI', 'SSRI', 'stimulants'],
 wadaStatus: null,
 benefits: [
 { hu: 'Akut ischémiás stroke neuroprotekciója (Russian clinical standard)', en: 'Neuroprotection in acute ischemic stroke (Russian clinical standard)', pl: 'Neuroprotekcja w ostrym udarze niedokrwiennym (rosyjski standard kliniczny)' },
 { hu: 'Post-stroke kognitív rehabilitáció', en: 'Post-stroke cognitive rehabilitation', pl: 'Rehabilitacja poznawcza po udarze' },
 { hu: 'Akut kognitív teljesítmény-emelés (figyelem, memória)', en: 'Acute cognitive performance boost (attention, memory)', pl: 'Ostry wzrost wydajności poznawczej (uwaga, pamięć)' },
 { hu: 'Anti-stressz + szorongáscsökkentés (mild)', en: 'Anti-stress + mild anxiolysis', pl: 'Anty-stresowe + łagodne działanie przeciwlękowe' },
 ],
 quickStart: [
 { hu: 'Intranazális 0.1%-os spray, 2-3 csepp nostrilonként', en: 'Intranasal 0.1% spray, 2-3 drops per nostril', pl: 'Spray donosowy 0,1%, 2-3 krople na nozdrze' },
 { hu: 'Hatás 10-15 perc alatt érzékelhető', en: 'Effect felt within 10-15 minutes', pl: 'Efekt odczuwalny w ciągu 10-15 minut' },
 { hu: 'Kúra-jellegű használat: 5-14 nap, követéssel pause', en: 'Course-based use: 5-14 days, then pause', pl: 'Stosowanie kursowe: 5-14 dni, potem przerwa' },
 { hu: 'Reggel és kora délután, esti dózis kerülendő (alvás)', en: 'Morning and early afternoon, avoid evening dose (sleep)', pl: 'Rano i wczesnym popołudniem, unikać dawki wieczornej (sen)' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Akut tisztaság, fókusz-emelés 10-15 perc alatt. Mild mood-emelés.', en: 'Acute clarity, focus elevation within 10-15 min. Mild mood lift.', pl: 'Ostra jasność, podniesienie skupienia w 10-15 min. Łagodny wzrost nastroju.' } },
 { label: { hu: '3-7 nap', en: '3-7 days', pl: '3-7 dni' }, body: { hu: 'Kumulatív kognitív emelkedés. Stress-toleranciá és érzelmi stabilitás javulása.', en: 'Cumulative cognitive lift. Stress tolerance and emotional stability improve.', pl: 'Kumulacyjne podniesienie poznawcze. Tolerancja stresu i stabilność emocjonalna się poprawiają.' } },
 { label: { hu: '14 nap +', en: '14 days +', pl: '14 dni +' }, body: { hu: 'Klinikai stroke-rehabilitációs studyokban: motoros + kognitív funkció javul.', en: 'In clinical stroke-rehab studies: motor + cognitive function improve.', pl: 'W klinicznych badaniach rehabilitacji udarowej: poprawa funkcji motorycznych i poznawczych.' } },
 ],
 quality: {
 pure: [
 { hu: 'Tiszta fehér liofilizált por, vízben azonnal oldódik', en: 'Pure white lyophilized powder, dissolves instantly in water', pl: 'Czysty biały liofilizowany proszek, rozpuszcza się natychmiast w wodzie' },
 { hu: 'Üveg vagy steril műanyag flakon, hűtve 2-8°C', en: 'Glass or sterile plastic vial, refrigerated 2-8°C', pl: 'Szklana lub sterylna plastikowa fiolka, w lodówce 2-8°C' },
 ],
 caution: [
 { hu: 'Akut spike vérnyomásra érzékenyeknél (ACTH-analóg)', en: 'Acute spike in BP-sensitive individuals (ACTH analog)', pl: 'Ostry skok u osób wrażliwych na BP (analog ACTH)' },
 { hu: 'Esti dózis kerülendő, alvászavart okozhat', en: 'Avoid evening dose, may cause sleep disturbance', pl: 'Unikać dawki wieczornej, może powodować zaburzenia snu' },
 ],
 avoid: [
 { hu: 'Aktív skizofrénia / mánia (dopaminerg túlserkentés)', en: 'Active schizophrenia / mania (dopaminergic over-stimulation)', pl: 'Aktywna schizofrenia / mania (nadmierna stymulacja dopaminergiczna)' },
 { hu: 'Krónikus MAOI használat', en: 'Chronic MAOI use', pl: 'Przewlekłe stosowanie MAOI' },
 ],
 },
 interactions: [
 { hu: 'MAOI együttszedés kerülendő (szerotonerg potencírozás)', en: 'Avoid MAOI co-administration (serotonergic potentiation)', pl: 'Unikać współpodawania MAOI (potencjacja serotonergiczna)' },
 { hu: 'SSRI/SNRI esetén klinikai monitorozás javasolt', en: 'SSRI/SNRI: clinical monitoring recommended', pl: 'SSRI/SNRI: zalecany monitoring kliniczny' },
 { hu: 'Stimulánsokkal additív, dózis-csökkentés szükséges lehet', en: 'Additive with stimulants, dose reduction may be needed', pl: 'Addytywny ze stymulantami, może być potrzebne zmniejszenie dawki' },
 ],
 studies: [
 { title: 'Semax in cognitive impairment after ischemic stroke', authors: 'Gusev EI et al.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2018;118(3):61-68.', pmid: '29722760' },
 { title: 'Semax effect on BDNF expression in rat hippocampus', authors: 'Dolotov OV et al.', journal: 'J Neurochem. 2006;97(1):82-86.', pmid: '16515548' },
 { title: 'Semax in cerebrovascular disease: clinical review', authors: 'Shchepankin AI et al.', journal: 'Eksp Klin Farmakol. 2004;67(3):69-75.', pmid: '15293774' },
 ],
 faq: [
 { q: { hu: 'Mi az ACTH(4-10) analóg jelentése?', en: 'What does "ACTH(4-10) analog" mean?', pl: 'Co oznacza "analog ACTH(4-10)"?' }, a: { hu: 'Az ACTH hormon 39 aminosavból áll, a 4-10 pozíciók (Met-Glu-His-Phe-Pro-Gly-Pro) szakaszát izolálták és prolinokkal stabilizálták. Ez a szakasz NEM tartalmazza az endokrin hatást (kortizol-emelés), csak a központi idegrendszeri hatást. Eredmény: a kognitív/dopaminerg hatás megmarad, kortizol-emelés nélkül.', en: 'ACTH is a 39-amino-acid hormone; positions 4-10 (Met-Glu-His-Phe-Pro-Gly-Pro) were isolated and stabilized with prolines. This region does NOT contain endocrine activity (no cortisol elevation), only the central nervous system effects. Result: cognitive/dopaminergic action preserved, no cortisol rise.', pl: 'ACTH to hormon o 39 aminokwasach; pozycje 4-10 (Met-Glu-His-Phe-Pro-Gly-Pro) zostały wyizolowane i ustabilizowane prolinami. Ten region NIE zawiera aktywności hormonalnej, tylko efekty na OUN. Wynik: zachowane działanie poznawcze, bez wzrostu kortyzolu.' } },
 { q: { hu: 'Hogyan adagolható?', en: 'How is it administered?', pl: 'Jak się podaje?' }, a: { hu: 'Intranazálisan, 0.1%-os spray-ként (2-3 csepp/nostril). Az orrnyálkahártya gazdagon erezett, és az obfaktoros pálya közvetlen vér-agy-gát-megkerülő utat ad a peptidnek a CNS-be.', en: 'Intranasally, as a 0.1% spray (2-3 drops per nostril). The nasal mucosa is richly vascularized, and the olfactory pathway provides a direct BBB-bypass route to the CNS.', pl: 'Donosowo, jako spray 0,1% (2-3 krople na nozdrze). Błona śluzowa nosa jest bogato unaczyniona, a szlak węchowy zapewnia bezpośrednią drogę omijającą BBB do OUN.' } },
 { q: { hu: 'Megvonás vagy függőség?', en: 'Withdrawal or dependence?', pl: 'Odstawienie lub uzależnienie?' }, a: { hu: 'Nem dokumentált. A klinikai szerepkör akut intervenciós (stroke, kognitív krízis), krónikus napi szedésre nincs ajánlás vagy data.', en: 'Not documented. The clinical role is acute intervention (stroke, cognitive crisis), no recommendation or data for chronic daily use.', pl: 'Nieudokumentowane. Rola kliniczna to ostra interwencja (udar, kryzys poznawczy), brak zaleceń lub danych dla przewlekłego codziennego stosowania.' } },
 { q: { hu: 'Miért szerepel a peptid könyvtárban IS?', en: 'Why does it also appear in the peptide library?', pl: 'Dlaczego pojawia się również w bibliotece peptydów?' }, a: { hu: 'A Semax kettős természetű: szerkezetileg peptid (heptapeptid), funkcionálisan nootropikum (BDNF + dopaminerg). A peptid library a szerkezetét emeli ki (aminosav-szekvencia, intranazális farmakokinetika); a nootropic library a kognitív funkcióját (memória, fókusz, stroke-recovery).', en: 'Semax is dual-natured: structurally a peptide (heptapeptide), functionally a nootropic (BDNF + dopaminergic). The peptide library highlights its structure (amino acid sequence, intranasal pharmacokinetics); the nootropic library highlights its cognitive function (memory, focus, stroke recovery).', pl: 'Semax ma dwoistą naturę: strukturalnie to peptyd (heptapeptyd), funkcjonalnie nootropik (BDNF + dopaminergiczny). Biblioteka peptydów podkreśla jego strukturę; biblioteka nootropików podkreśla jego funkcję poznawczą.' } },
 ],
 related: ['selank', 'cerebrolysin', 'noopept', 'nsi-189'],
 },

 // ── CORE #9: Selank ────────────────────────────────────────────────────────
 {
 id: 'selank',
 name: 'Selank',
 image: null,
 accentColor: '#10b981',
 tagColor: 'rgba(16,185,129,0.18)',
 shortDesc: {
 hu: 'Tuftsin-analóg heptapeptid (TKPRPGP). Anxiolítikus + cognition szedáció nélkül, intranazális.',
 en: 'Tuftsin-analog heptapeptide (TKPRPGP). Anxiolytic + cognition without sedation, intranasal.',
 pl: 'Heptapeptyd analog Tuftsiny (TKPRPGP). Przeciwlękowy + poznawczy bez sedacji, donosowy.',
 },
 description: {
 hu: 'A Selank egy Thr-Lys-Pro-Arg-Pro-Gly-Pro heptapeptid, a Tuftsin (TKPR) természetes immunmodulátor peptid prolinokkal stabilizált analógja. Oroszországban fejlesztették ki anxiolítikus indikációra; intranazális spray. Hatásmechanizmusa: GABA-erg tónus emelés (alegység-szelektív, nem szedáló) + BDNF expression + szerotonerg + enkefalinerg moduláció. Benzodiazepinekkel ellentétben NEM okoz szedációt vagy függőséget. Cognition-paritás vagy enyhe enhancement is dokumentált. Megjegyzés: peptid-library duplikátum, eltérő framinggel.',
 en: 'Selank is a Thr-Lys-Pro-Arg-Pro-Gly-Pro heptapeptide, a proline-stabilized analog of the natural immunomodulator Tuftsin (TKPR). Developed in Russia for anxiolytic use; intranasal spray. Mechanism: GABAergic tone elevation (subunit-selective, non-sedating) + BDNF expression + serotonergic + enkephalinergic modulation. Unlike benzodiazepines, does NOT cause sedation or dependence. Cognition parity or mild enhancement also documented. Note: peptide-library duplicate, with different framing.',
 pl: 'Selank to heptapeptyd Thr-Lys-Pro-Arg-Pro-Gly-Pro, analog naturalnego immunomodulatora Tuftsiny (TKPR) stabilizowany prolinami. Opracowany w Rosji do zastosowań przeciwlękowych; spray donosowy. Mechanizm: podniesienie napięcia GABA-ergicznego (selektywne podjednostkowo, bez sedacji) + ekspresja BDNF + serotonergiczne + enkefalinergiczne. Inaczej niż benzodiazepiny, NIE powoduje sedacji ani uzależnienia. Uwaga: duplikat z biblioteki peptydów.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'Tuftsin-analóg, GABA + BDNF', en: 'Tuftsin analog, GABA + BDNF', pl: 'Analog Tuftsiny, GABA + BDNF' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '20-30 perc (intranazális)', en: '20-30 min (intranasal)', pl: '20-30 min (donosowo)' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '5-15 perc', en: '5-15 min', pl: '5-15 min' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Russia Rx, EU/USA research', en: 'Russia Rx, EU/USA research', pl: 'Rosja Rx, UE/USA research' } },
 ],
 mechanism: {
 hu: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro heptapeptid, Tuftsin TKPR analóg prolin-stabilizálással. GABA-erg tónus + BDNF + szerotonerg + enkefalinerg moduláció. Szubunit-szelektív GABA-hatás (alpha-2/3, NEM alpha-1) → szedáció nélkül.',
 en: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro heptapeptide, Tuftsin TKPR analog with proline stabilization. GABAergic tone + BDNF + serotonergic + enkephalinergic modulation. Subunit-selective GABA action (alpha-2/3, NOT alpha-1) → non-sedating.',
 pl: 'Heptapeptyd Thr-Lys-Pro-Arg-Pro-Gly-Pro, analog Tuftsiny TKPR z prolinową stabilizacją. Napięcie GABA-ergiczne + BDNF + serotonergiczne + enkefalinergiczne. Selektywne podjednostkowo GABA (alfa-2/3, NIE alfa-1) → bez sedacji.',
 },
 legalStatus: {
 hu: 'Russia: Rx (intranazális spray) generalized anxiety disorder, asztenikus zavarok. EU/USA: research peptide. WADA: nem listán.',
 en: 'Russia: Rx (intranasal spray) for generalized anxiety disorder, asthenic disorders. EU/USA: research peptide. WADA: not listed.',
 pl: 'Rosja: Rx (spray donosowy) na zaburzenia lękowe uogólnione, zaburzenia asteniczne. UE/USA: peptyd badawczy. WADA: nie na liście.',
 },
 onsetTime: '5-15 min',
 halfLife: '20-30 min',
 interactionsWith: ['benzodiazepines', 'alcohol', 'SSRI'],
 wadaStatus: null,
 benefits: [
 { hu: 'Anxiolítikus hatás szedáció és függőség nélkül', en: 'Anxiolytic without sedation or dependence', pl: 'Działanie przeciwlękowe bez sedacji i uzależnienia' },
 { hu: 'GAD (generalized anxiety disorder) klinikai vizsgálatok pozitív', en: 'Positive clinical trials in GAD (generalized anxiety disorder)', pl: 'Pozytywne badania kliniczne w GAD (zaburzenie lękowe uogólnione)' },
 { hu: 'Cognition védelem stress alatt (cortisol-buffering)', en: 'Cognition protection under stress (cortisol-buffering)', pl: 'Ochrona funkcji poznawczych podczas stresu (buforowanie kortyzolu)' },
 { hu: 'Mild mood-emelés, immune-modulátor', en: 'Mild mood lift, immune modulator', pl: 'Łagodne podniesienie nastroju, modulator immunologiczny' },
 ],
 quickStart: [
 { hu: 'Intranazális 0.15%-os spray, 2-3 csepp nostrilonként', en: 'Intranasal 0.15% spray, 2-3 drops per nostril', pl: 'Spray donosowy 0,15%, 2-3 krople na nozdrze' },
 { hu: 'Hatás 5-15 perc alatt érzékelhető', en: 'Effect felt within 5-15 minutes', pl: 'Efekt odczuwalny w ciągu 5-15 minut' },
 { hu: 'Akut helyzetre (előadás, repülés) vagy napi 2-3× kúraként', en: 'Acute use (presentations, flights) or 2-3× daily as a course', pl: 'Stosowanie ostre (prezentacje, loty) lub 2-3× dziennie jako kurs' },
 { hu: 'Kúraidő tipikusan 7-14 nap, ezután pause', en: 'Course duration typically 7-14 days, then pause', pl: 'Czas kursu typowo 7-14 dni, potem przerwa' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Akut szorongáscsökkentés 5-15 perc alatt, szubjektíven "kalmer és tisztább". Nincs szedáció vagy "kábaság".', en: 'Acute anxiety reduction in 5-15 min, subjectively "calmer and clearer". No sedation or "fogginess".', pl: 'Ostra redukcja lęku w 5-15 min, subiektywnie "spokojniej i jaśniej". Bez sedacji ani "zamglenia".' } },
 { label: { hu: '3-7 nap', en: '3-7 days', pl: '3-7 dni' }, body: { hu: 'Kumulatív anxiolítikus hatás, stress-toleranciá emelése. Reaktivitás csökken negatív stimulusokra.', en: 'Cumulative anxiolytic effect, stress tolerance rises. Reactivity to negative stimuli decreases.', pl: 'Kumulacyjny efekt przeciwlękowy, wzrost tolerancji stresu. Reaktywność na bodźce negatywne maleje.' } },
 { label: { hu: '14 nap +', en: '14 days +', pl: '14 dni +' }, body: { hu: 'Klinikai vizsgálatokban: GAD tüneti enyhítés a Diazepam-szintű hatékonysággal, de szedáció + függőség nélkül.', en: 'In clinical trials: GAD symptom reduction comparable to Diazepam efficacy, but without sedation + dependence.', pl: 'W badaniach klinicznych: redukcja objawów GAD porównywalna z Diazepamem, ale bez sedacji + uzależnienia.' } },
 ],
 quality: {
 pure: [
 { hu: 'Liofilizált fehér por, vízben azonnal oldódik', en: 'Lyophilized white powder, dissolves instantly in water', pl: 'Liofilizowany biały proszek, rozpuszcza się natychmiast w wodzie' },
 { hu: 'Üveg flakon, hűtve 2-8°C', en: 'Glass vial, refrigerated 2-8°C', pl: 'Szklana fiolka, w lodówce 2-8°C' },
 ],
 caution: [
 { hu: 'Súlyos depresszióban monoterápiaként NEM ajánlott', en: 'Not recommended as monotherapy in severe depression', pl: 'Niezalecany jako monoterapia w ciężkiej depresji' },
 { hu: 'Akut allergiás reakció ritka, de lehetséges', en: 'Acute allergic reaction rare but possible', pl: 'Ostra reakcja alergiczna rzadka, ale możliwa' },
 ],
 avoid: [
 { hu: 'Terhesség + szoptatás (peptid-specifikus humán adat nincs)', en: 'Pregnancy + breastfeeding (no peptide-specific human data)', pl: 'Ciąża + karmienie (brak danych dla ludzi)' },
 { hu: 'Aktív autoimmun zavar (immunmoduláció miatt)', en: 'Active autoimmune disorder (immunomodulation)', pl: 'Aktywne zaburzenia autoimmunologiczne (immunomodulacja)' },
 ],
 },
 interactions: [
 { hu: 'Benzodiazepine-okkal addicionális szedáció kerülendő', en: 'Additive sedation with benzodiazepines should be avoided', pl: 'Sumacja sedacji z benzodiazepinami powinna być unikana' },
 { hu: 'Alkohollal együttszedés enyhén szinergisztikus', en: 'Mildly synergistic with alcohol', pl: 'Łagodnie synergiczny z alkoholem' },
 { hu: 'SSRI-vel kombinálható klinikai monitorozás mellett', en: 'Combinable with SSRI under clinical monitoring', pl: 'Możliwe do łączenia z SSRI pod nadzorem klinicznym' },
 ],
 studies: [
 { title: 'Selank: anxiolytic and antidepressant peptide', authors: 'Kost NV et al.', journal: 'Bull Exp Biol Med. 2007;143(6):683-687.', pmid: '18239810' },
 { title: 'Selank effect on cognitive function in generalized anxiety disorder', authors: 'Zozulia AA et al.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2008;108(4):38-48.', pmid: '18454141' },
 { title: 'Selank vs Diazepam in GAD: randomized comparison', authors: 'Medvedev VE et al.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2007;107(6):11-16.', pmid: '17703839' },
 ],
 faq: [
 { q: { hu: 'Hogyan lehet anxiolítikus szedáció nélkül?', en: 'How can it be anxiolytic without sedation?', pl: 'Jak może być przeciwlękowe bez sedacji?' }, a: { hu: 'A GABA-erg moduláció szubunit-szelektív: az alpha-2 és alpha-3 alegységek (anxiolítikus + izom-relaxáns) modulálódnak, az alpha-1 (szedáló) érintetlen. Plusz BDNF + szerotonerg balansz a kognitív klaritást fenntartja.', en: 'GABAergic modulation is subunit-selective: alpha-2 and alpha-3 subunits (anxiolytic + muscle-relaxant) modulated, alpha-1 (sedating) untouched. Plus BDNF + serotonergic balance preserves cognitive clarity.', pl: 'Modulacja GABA-ergiczna jest selektywna podjednostkowo: podjednostki alfa-2 i alfa-3 (przeciwlękowe + zwiotczające mięśnie) są modulowane, alfa-1 (sedująca) pozostaje nienaruszona. Plus BDNF + równowaga serotonergiczna zachowuje jasność poznawczą.' } },
 { q: { hu: 'Lehet függőséget okozni?', en: 'Can it cause dependence?', pl: 'Czy może powodować uzależnienie?' }, a: { hu: 'Nem dokumentált. A klinikai vizsgálatokban 14 napos napi szedés után sem alakult ki függőség vagy megvonás, szemben a benzodiazepinekkel, ahol már 2-3 hét után rebound-anxiousness van.', en: 'Not documented. In clinical trials, no dependence or withdrawal developed after 14 days of daily use, unlike benzodiazepines, where rebound anxiety can occur after 2-3 weeks.', pl: 'Nieudokumentowane. W badaniach klinicznych, brak uzależnienia ani odstawienia po 14 dniach codziennego stosowania, w przeciwieństwie do benzodiazepin, gdzie odbicie lęku może wystąpić po 2-3 tygodniach.' } },
 { q: { hu: 'Mire elsősorban használják?', en: 'What is it primarily used for?', pl: 'Do czego głównie się stosuje?' }, a: { hu: 'Generalized anxiety disorder (GAD), neuraszténia, krónikus stress-szindrómák, szedáció és függőség nélkül. Másodlagosan: cognition védelem stress alatt, mild mood-emelés.', en: 'Generalized anxiety disorder (GAD), neurasthenia, chronic stress syndromes, without sedation or dependence. Secondarily: cognition protection under stress, mild mood lift.', pl: 'Zaburzenia lękowe uogólnione (GAD), neurastenia, przewlekłe zespoły stresowe, bez sedacji i uzależnienia. Wtórnie: ochrona poznawcza podczas stresu, łagodne podniesienie nastroju.' } },
 { q: { hu: 'Miért szerepel a peptid könyvtárban IS?', en: 'Why does it also appear in the peptide library?', pl: 'Dlaczego pojawia się również w bibliotece peptydów?' }, a: { hu: 'A Selank kettős: szerkezetileg peptid (heptapeptid), funkcionálisan anxiolítikus nootropikum. A peptid library a Tuftsin-eredetet és farmakokinetikát emeli ki; a nootropic library a GABA-erg + cognition-funkciót.', en: 'Selank is dual: structurally a peptide (heptapeptide), functionally an anxiolytic nootropic. The peptide library highlights its Tuftsin origin and pharmacokinetics; the nootropic library highlights its GABAergic + cognition function.', pl: 'Selank ma dwoistą naturę: strukturalnie peptyd (heptapeptyd), funkcjonalnie nootropik przeciwlękowy. Biblioteka peptydów podkreśla pochodzenie z Tuftsiny; biblioteka nootropików podkreśla funkcję GABA + poznawczą.' } },
 ],
 related: ['semax', 'phenibut', 'l-theanine', 'tianeptine'],
 },

 // ── CORE #10: 9-Me-BC ──────────────────────────────────────────────────────
 {
 id: '9-me-bc',
 name: '9-Me-BC',
 image: null,
 accentColor: '#f43f5e',
 tagColor: 'rgba(244,63,94,0.18)',
 shortDesc: {
 hu: 'Béta-karbolin alkaloid. MAO-B gátló + neurotrofikus, dopaminerg motivációs nootropikum (in vitro adat).',
 en: 'Beta-carboline alkaloid. MAO-B inhibitor + neurotrophic, dopaminergic motivation nootropic (in vitro data).',
 pl: 'Alkaloid beta-karbolinowy. Inhibitor MAO-B + neurotroficzny, dopaminergiczny nootropik motywacyjny (dane in vitro).',
 },
 description: {
 hu: 'A 9-Methyl-β-carboline (9-Me-BC) egy béta-karbolin alkaloid származék, kis molekulájú MAO-B (monoamin-oxidáz B) gátló + neurotrofikus faktor (BDNF, GDNF) expression-emelő. In vitro és állat-modellekben dopaminerg neuron-protektivitás dokumentált; humán adat sparse. Research-only minden régióban, klinikai vizsgálati státuszban nincs. A β-karbolin-váz természetesen előfordul a növényvilágban (Banisteriopsis caapi, Peganum harmala), ahol MAO-A gátló hatású, a 9-metilezés a B-szelektivitást és a vér-agy-gát átjárhatóságot növeli.',
 en: '9-Methyl-β-carboline (9-Me-BC) is a beta-carboline alkaloid derivative, a small-molecule MAO-B (monoamine oxidase B) inhibitor + neurotrophic factor (BDNF, GDNF) expression-elevator. Dopaminergic neuron protection is documented in vitro and animal models; human data is sparse. Research-only in all regions, no clinical trial status. The β-carboline backbone occurs naturally in plants (Banisteriopsis caapi, Peganum harmala) as a MAO-A inhibitor, 9-methylation increases B-selectivity and blood-brain-barrier permeability.',
 pl: '9-Metylo-β-karbolina (9-Me-BC) to pochodna alkaloidu beta-karbolinowego, mała cząsteczka, inhibitor MAO-B (monoaminooksydazy B) + induktor ekspresji czynników neurotroficznych (BDNF, GDNF). Ochrona neuronów dopaminergicznych udokumentowana in vitro i w modelach zwierzęcych; dane u ludzi są skąpe. Tylko badania we wszystkich regionach. Szkielet β-karbolinowy występuje naturalnie w roślinach (Banisteriopsis caapi, Peganum harmala) jako inhibitor MAO-A, metylacja w pozycji 9 zwiększa selektywność B i przepuszczalność przez BBB.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'MAO-B gátló + neurotrofikus', en: 'MAO-B inhibitor + neurotrophic', pl: 'Inhibitor MAO-B + neurotroficzny' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '12-24 óra (becsült, humán adat hiányos)', en: '12-24 h (estimated, human data sparse)', pl: '12-24 h (szacowane, dane ludzkie skąpe)' } },
 { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Czas wystąpienia' }, value: { hu: '60-120 perc', en: '60-120 min', pl: '60-120 min' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, value: { hu: 'Globális research only', en: 'Global research only', pl: 'Globalnie tylko badawczy' } },
 ],
 mechanism: {
 hu: 'Béta-karbolin alkaloid származék, 9-pozícióban metilezve. Reverzibilis szelektív MAO-B gátlás + BDNF/GDNF expression-növelés (in vitro). Dopaminerg neuron-protekció állat-modellekben (Parkinson-kutatás).',
 en: 'Beta-carboline alkaloid derivative, methylated at position 9. Reversible selective MAO-B inhibition + BDNF/GDNF expression elevation (in vitro). Dopaminergic neuron protection in animal models (Parkinson research).',
 pl: 'Pochodna alkaloidu beta-karbolinowego, metylowana w pozycji 9. Odwracalne selektywne hamowanie MAO-B + podniesienie ekspresji BDNF/GDNF (in vitro). Ochrona neuronów dopaminergicznych w modelach zwierzęcych (badania Parkinsona).',
 },
 legalStatus: {
 hu: 'Globális: research chemical, nem szabályozott a legtöbb régióban (de import-kockázat). USA: research only. EU: research only. WADA: nem listán.',
 en: 'Global: research chemical, unscheduled in most regions (but import risk). USA: research only. EU: research only. WADA: not listed.',
 pl: 'Globalnie: research chemical, niesklasyfikowany w większości regionów (ale ryzyko importu). USA: tylko badawczy. UE: tylko badawczy. WADA: nie na liście.',
 },
 onsetTime: '60-120 min',
 halfLife: '12-24 h (estimated)',
 interactionsWith: ['MAOI', 'SSRI', 'tyramine-rich foods', 'stimulants'],
 wadaStatus: null,
 benefits: [
 { hu: 'Dopaminerg tónus emelés MAO-B reverzibilis gátlással', en: 'Dopaminergic tone elevation via reversible MAO-B inhibition', pl: 'Podniesienie napięcia dopaminergicznego przez odwracalne hamowanie MAO-B' },
 { hu: 'Neurotrofikus faktor (BDNF, GDNF) expression in vitro', en: 'Neurotrophic factor (BDNF, GDNF) expression in vitro', pl: 'Ekspresja czynników neurotroficznych (BDNF, GDNF) in vitro' },
 { hu: 'Dopaminerg neuron-protekció állat-modellekben (Parkinson)', en: 'Dopaminergic neuron protection in animal models (Parkinson)', pl: 'Ochrona neuronów dopaminergicznych w modelach zwierzęcych (Parkinson)' },
 { hu: 'Szubjektíven: motiváció, fókusz, mild mood-emelés (humán anecdotal)', en: 'Subjectively: motivation, focus, mild mood lift (human anecdotal)', pl: 'Subiektywnie: motywacja, skupienie, łagodne podniesienie nastroju (ludzkie anegdotyczne)' },
 ],
 quickStart: [
 { hu: 'Alacsony dózisból induljon (≤1-2 mg), titrálás óvatosan', en: 'Start low (≤1-2 mg), titrate carefully', pl: 'Zaczynaj nisko (≤1-2 mg), titruj ostrożnie' },
 { hu: 'NEM kombinálandó MAOI, SSRI, SNRI gyógyszerekkel', en: 'Do NOT combine with MAOI, SSRI, SNRI medications', pl: 'NIE łączyć z MAOI, SSRI, SNRI' },
 { hu: 'Tyramin-gazdag ételek (érlelt sajt, vörösbor) kerülendők', en: 'Avoid tyramine-rich foods (aged cheese, red wine)', pl: 'Unikać pokarmów bogatych w tyraminę (sery dojrzewające, czerwone wino)' },
 { hu: 'Kúraidő rövid (3-5 nap), pause kötelező a sensitization elkerülésére', en: 'Short course (3-5 days), pause required to avoid sensitization', pl: 'Krótki kurs (3-5 dni), przerwa wymagana, by uniknąć sensytyzacji' },
 ],
 expectations: [
 { label: { hu: 'Első bevétel', en: 'First dose', pl: 'Pierwsza dawka' }, body: { hu: 'Hatás 60-120 perc múlva. Szubjektíven: tisztább fej, mild dopaminerg "motiváció", enyhe stim-jelleg.', en: 'Effect 60-120 min after dose. Subjectively: clearer head, mild dopaminergic "motivation", subtle stim-character.', pl: 'Efekt 60-120 min po dawce. Subiektywnie: jaśniejsza głowa, łagodna dopaminergiczna "motywacja", delikatny charakter stymulujący.' } },
 { label: { hu: 'Kúra 3-5 nap', en: 'Course 3-5 days', pl: 'Kurs 3-5 dni' }, body: { hu: 'Kumulatív neurotrofikus hatás (in vitro adat alapján). Humán hosszú távú adat hiányos, óvatos protokoll.', en: 'Cumulative neurotrophic effect (based on in vitro data). Long-term human data sparse, cautious protocol.', pl: 'Kumulacyjny efekt neurotroficzny (na podstawie danych in vitro). Długoterminowe dane ludzkie skąpe, protokół ostrożny.' } },
 { label: { hu: 'Pause + visszatérés', en: 'Pause + return', pl: 'Przerwa + powrót' }, body: { hu: 'Pause 7-14 nap után visszatérve a hatás megmarad. Krónikus napi szedés nem javasolt, neurotrofikus rendszer-szintű hatás.', en: 'After 7-14 day pause, effect persists on return. Chronic daily use not advised, system-level neurotrophic action.', pl: 'Po przerwie 7-14 dni efekt utrzymuje się przy powrocie. Przewlekłe codzienne stosowanie niezalecane.' } },
 ],
 quality: {
 pure: [
 { hu: 'Sárgás-barna kristályos por, alkoholban oldódik', en: 'Yellowish-brown crystalline powder, soluble in alcohol', pl: 'Żółto-brązowy krystaliczny proszek, rozpuszczalny w alkoholu' },
 { hu: 'HPLC/MS tisztaság-igazolás ajánlott', en: 'HPLC/MS purity certification recommended', pl: 'Zalecane certyfikaty czystości HPLC/MS' },
 ],
 caution: [
 { hu: 'Tyramin-reakció kockázata (MAO-B reverzibilis, de mégis monoaminerg)', en: 'Tyramine reaction risk (MAO-B reversible, but still monoaminergic)', pl: 'Ryzyko reakcji tyraminowej (MAO-B odwracalne, ale monoaminergiczne)' },
 { hu: 'Humán farmakokinetika nem teljesen jellemzett', en: 'Human pharmacokinetics not fully characterized', pl: 'Farmakokinetyka u ludzi niepełna' },
 ],
 avoid: [
 { hu: 'Aktív SSRI/SNRI/MAOI gyógyszer-terápia (szerotonin-szindróma)', en: 'Active SSRI/SNRI/MAOI medication (serotonin syndrome)', pl: 'Aktywne leczenie SSRI/SNRI/MAOI (zespół serotoninowy)' },
 { hu: 'Akut psychiátriai krízis, mánia spektrum', en: 'Acute psychiatric crisis, mania spectrum', pl: 'Ostry kryzys psychiatryczny, spektrum manii' },
 ],
 },
 interactions: [
 { hu: 'MAOI együttszedés tilos (szerotonin-szindróma + hypertenzív krízis)', en: 'MAOI co-administration forbidden (serotonin syndrome + hypertensive crisis)', pl: 'Współpodawanie MAOI zabronione (zespół serotoninowy + przełom nadciśnieniowy)' },
 { hu: 'SSRI/SNRI együttszedés kerülendő', en: 'Avoid SSRI/SNRI co-administration', pl: 'Unikać współpodawania SSRI/SNRI' },
 { hu: 'Tyramin-gazdag ételek + ital (érlelt sajt, vörösbor, pácolt hús)', en: 'Tyramine-rich foods + drinks (aged cheese, red wine, cured meat)', pl: 'Pokarmy + napoje bogate w tyraminę (sery dojrzewające, wino, peklowane mięso)' },
 { hu: 'Stimulánsokkal additív (dopaminerg túlserkentés)', en: 'Additive with stimulants (dopaminergic over-stimulation)', pl: 'Addytywny ze stymulantami (nadmierna stymulacja dopaminergiczna)' },
 ],
 studies: [
 { title: '9-Me-BC: neurotrophic and antiapoptotic effects on dopaminergic neurons', authors: 'Polanski W et al.', journal: 'J Neural Transm. 2010;117(7):835-846.', pmid: '20517703' },
 { title: 'Beta-carbolines as MAO inhibitors: comprehensive review', authors: 'Herraiz T, Chaparro C.', journal: 'Life Sci. 2005;78(8):795-802.', pmid: '16111712' },
 { title: '9-Me-BC induces BDNF and GDNF expression in cultured neurons', authors: 'Hamann J et al.', journal: 'Neurosci Lett. 2008;437(2):151-155.', pmid: '18434025' },
 ],
 faq: [
 { q: { hu: 'Miért MAO-B és nem MAO-A?', en: 'Why MAO-B and not MAO-A?', pl: 'Dlaczego MAO-B a nie MAO-A?' }, a: { hu: 'A 9-metilezés szelektivitást ad a MAO-B izoenzimre. A MAO-B főleg dopamint és phenethylamint bont, gátlása dopaminerg + PEA-tónus emelést okoz. A MAO-A (szerotonin, noradrenalin, tyramin) érintetlen marad → kisebb tyramin-reakció kockázat, mint nem-szelektív MAOI-knál (de NEM nulla).', en: '9-methylation provides selectivity for the MAO-B isoenzyme. MAO-B primarily metabolizes dopamine and phenethylamine, its inhibition raises dopaminergic + PEA tone. MAO-A (serotonin, noradrenaline, tyramine) is left untouched → lower tyramine reaction risk than non-selective MAOIs (but NOT zero).', pl: 'Metylacja w pozycji 9 daje selektywność dla izoenzymu MAO-B. MAO-B metabolizuje głównie dopaminę i feniloetyloaminę, jego hamowanie podnosi napięcie dopaminergiczne + PEA. MAO-A (serotonina, noradrenalina, tyramina) pozostaje nienaruszony → mniejsze ryzyko reakcji tyraminowej, ale NIE zerowe.' } },
 { q: { hu: 'Mennyi a tipikus dózis?', en: 'Typical dose?', pl: 'Typowa dawka?' }, a: { hu: 'Humán protokoll nincs validálva. Anekdotikus tartomány 1-5 mg, indítás 1 mg-mal. Higher doses (>10 mg) NEM ajánlottak, sensitization + monoaminerg overload kockázat.', en: 'No validated human protocol. Anecdotal range 1-5 mg, start with 1 mg. Higher doses (>10 mg) NOT recommended, sensitization + monoaminergic overload risk.', pl: 'Brak zatwierdzonego protokołu ludzkiego. Anegdotyczny zakres 1-5 mg, zacząć od 1 mg. Wyższe dawki (>10 mg) NIEZALECANE, ryzyko sensytyzacji + przeciążenia monoaminergicznego.' } },
 { q: { hu: 'Klinikai vizsgálati státusz?', en: 'Clinical trial status?', pl: 'Status badań klinicznych?' }, a: { hu: 'Nincs. Preklinikai dopaminerg neuron-protekciós kutatás (Parkinson-modellek) zajlott, de humán Phase 1 még nem indult. Az adatok nagyrésze in vitro és állat-modellekből származik.', en: 'None. Preclinical dopaminergic neuron-protection research (Parkinson models) has been conducted, but human Phase 1 has not started. Most data is from in vitro and animal models.', pl: 'Brak. Przedkliniczne badania ochrony neuronów dopaminergicznych (modele Parkinsona) zostały przeprowadzone, ale ludzkie badania Phase 1 jeszcze się nie rozpoczęły. Większość danych pochodzi z in vitro i modeli zwierzęcych.' } },
 { q: { hu: 'Megvonási tünet?', en: 'Withdrawal?', pl: 'Odstawienie?' }, a: { hu: 'Nem dokumentált. A neurotrofikus hatás strukturális (nem receptor-szintű), így a leállítás után rebound vagy klasszikus megvonás nincs. De a hosszú-távú szedés sensitization-t okozhat, pause-protokoll javasolt.', en: 'Not documented. The neurotrophic effect is structural (not receptor-level), so no rebound or classic withdrawal after stopping. But long-term use may cause sensitization, pause protocol recommended.', pl: 'Nieudokumentowane. Efekt neurotroficzny jest strukturalny (nie na poziomie receptora), więc brak odbicia lub klasycznego odstawienia. Ale długotrwałe stosowanie może powodować sensytyzację, zalecany protokół przerw.' } },
 ],
 related: ['bromantane', 'selegiline', 'bpap', 'modafinil'],
 },

 // ============================================================
 // EXTRA, Racetams (Task 7, Batch 1)
 // Slim shape: id, name, image, accentColor, tagColor, shortDesc,
 // description, keyInfo (3 chips), mechanism, legalStatus, HU/EN/PL.
 // ============================================================

 {
 id: 'aniracetam',
 name: 'Aniracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Zsírban oldódó racetam, AMPA-pozitív moduláció + anxiolitikus profil.',
 en: 'Fat-soluble racetam with AMPA-PAM action and an anxiolytic profile.',
 pl: 'Rozpuszczalny w tłuszczach racetam z aktywnością AMPA-PAM i profilem anksjolitycznym.',
 },
 description: {
 hu: 'Az Aniracetam a Piracetam zsíroldható pirrolidon-származéka, amely AMPA-receptor pozitív allosztérikus modulátorként (PAM) lassítja a deszenzitizációt és anxiolitikus mellékprofilt mutat. Olaszországban Ampamet és Memodrin néven vényköteles. Plazma felezési ideje rövid (~1-2.5 óra), de fő metabolitja (2-pirrolidinon-acetamid) tovább hat.',
 en: 'Aniracetam is a fat-soluble pyrrolidinone derivative of Piracetam that acts as an AMPA receptor positive allosteric modulator (PAM), slowing desensitization with an anxiolytic side-profile. In Italy it is prescription-only as Ampamet and Memodrin. Plasma half-life is short (~1-2.5 h), but its main metabolite (2-pyrrolidinone-acetamide) continues to act.',
 pl: 'Aniracetam to rozpuszczalna w tłuszczach pochodna pirolidonowa piracetamu, działająca jako pozytywny modulator allosteryczny (PAM) receptora AMPA, spowalniając desensytyzację z dodatkowym profilem anksjolitycznym. We Włoszech jest na receptę jako Ampamet i Memodrin. Okres półtrwania w osoczu jest krótki (~1-2,5 h), ale jego główny metabolit (2-pirolidynon-acetamid) działa dalej.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'AMPA-PAM + cholinerg', en: 'AMPA-PAM + cholinergic', pl: 'AMPA-PAM + cholinergiczny' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '1-2.5 óra (metabolit hosszabb)', en: '1-2.5 h (metabolite longer)', pl: '1-2,5 h (metabolit dłuższy)' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles (IT: Ampamet)', en: 'EU Rx (IT: Ampamet)', pl: 'UE na receptę (IT: Ampamet)' } },
 ],
 mechanism: {
 hu: 'AMPA-receptor pozitív allosztérikus moduláció, lassítja a glutamát-kötés utáni deszenzitizációt és növeli a szinaptikus áramot; mellék-cholinerg és D2/D3 modulációval is leírták.',
 en: 'Positive allosteric modulation of AMPA receptors, slows desensitization after glutamate binding and increases synaptic current; secondary cholinergic and D2/D3 modulation are also described.',
 pl: 'Pozytywna modulacja allosteryczna receptorów AMPA, spowalnia desensytyzację po związaniu glutaminianu i zwiększa prąd synaptyczny; opisano również wtórną modulację cholinergiczną i D2/D3.',
 },
 legalStatus: {
 hu: 'Olaszországban vényköteles gyógyszer (Ampamet, Memodrin). EU-n kívül és USA-ban nem FDA-jóváhagyott; OTC kiegészítőként árusítása jogilag szürke zóna.',
 en: 'Prescription drug in Italy (Ampamet, Memodrin). Not FDA-approved outside EU/USA; OTC supplement sales remain a legal grey zone.',
 pl: 'Lek na receptę we Włoszech (Ampamet, Memodrin). Niezatwierdzony przez FDA poza UE/USA; sprzedaż OTC pozostaje w prawnej szarej strefie.',
 },
 },

 {
 id: 'oxiracetam',
 name: 'Oxiracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Stimuláns hangulatú racetam, AMPA + cholinerg aktivitás, fókusz-orientált.',
 en: 'Stimulant-leaning racetam, AMPA + cholinergic activity, focus-oriented.',
 pl: 'Racetam o profilu stymulującym, aktywność AMPA + cholinergiczna, ukierunkowany na koncentrację.',
 },
 description: {
 hu: 'Az Oxiracetam egy 4-hidroxi-piracetam származék, amelyet az Aniracetam relaxáló profiljával szemben általában stimuláns jellegűnek írnak le. Hatása AMPA-PAM és HACU (magas-affinitású kolin-felvétel) facilitáció kombinációja. Olaszországban Neuractiv és Neuromet néven volt forgalomban.',
 en: 'Oxiracetam is a 4-hydroxy derivative of Piracetam that is generally described as stimulant-like, in contrast to Aniracetam`s relaxing profile. Its action combines AMPA-PAM with HACU (high-affinity choline uptake) facilitation. It was marketed in Italy as Neuractiv and Neuromet.',
 pl: 'Oksyracetam to 4-hydroksy-pochodna piracetamu, ogólnie opisywana jako stymulująca, w przeciwieństwie do relaksującego profilu aniracetamu. Jego działanie łączy AMPA-PAM z ułatwianiem HACU (wysokopowinowactwego wychwytu choliny). Był sprzedawany we Włoszech jako Neuractiv i Neuromet.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'AMPA-PAM + HACU', en: 'AMPA-PAM + HACU', pl: 'AMPA-PAM + HACU' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~8 óra', en: '~8 h', pl: '~8 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles (IT)', en: 'EU Rx (IT)', pl: 'UE na receptę (IT)' } },
 ],
 mechanism: {
 hu: 'AMPA-receptor pozitív moduláció + cholinerg HACU-fokozás → glutamáterg LTP és acetilkolin-szintézis együttes facilitációja.',
 en: 'AMPA positive modulation + cholinergic HACU enhancement → combined facilitation of glutamatergic LTP and acetylcholine synthesis.',
 pl: 'Pozytywna modulacja AMPA + zwiększenie cholinergicznego HACU → łączne ułatwienie glutaminergicznego LTP i syntezy acetylocholiny.',
 },
 legalStatus: {
 hu: 'Olaszországban vényköteles. USA-ban nem FDA-jóváhagyott; OTC nootropikum-piacon „research chemical" minősítéssel árusítják.',
 en: 'Prescription-only in Italy. Not FDA-approved in the USA; sold as a “research chemical” on the OTC nootropic market.',
 pl: 'Na receptę we Włoszech. Niezatwierdzony przez FDA w USA; sprzedawany jako „chemikalium badawcze” na rynku nootropików OTC.',
 },
 },

 {
 id: 'pramiracetam',
 name: 'Pramiracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Erős cholinerg racetam, HACU-fokozás + AMPA-modulácó.',
 en: 'Potent cholinergic racetam, HACU enhancement + AMPA modulation.',
 pl: 'Silny cholinergiczny racetam, wzmocnienie HACU + modulacja AMPA.',
 },
 description: {
 hu: 'A Pramiracetam egy nagy potencitású Piracetam-analóg, amely elsősorban a hippokampális magas-affinitású kolin-felvétel (HACU) facilitációján keresztül hat. A tipikus dózis (300-600 mg) jelentősen alacsonyabb, mint a Piracetamé. Olaszországban Pramistar néven vényköteles volt; jelenleg több piacon visszavonva.',
 en: 'Pramiracetam is a high-potency Piracetam analog whose primary action is facilitation of hippocampal high-affinity choline uptake (HACU). The typical dose (300-600 mg) is far lower than Piracetam`s. It was prescription-only in Italy as Pramistar; currently withdrawn in several markets.',
 pl: 'Pramiracetam to wysokopotencyjny analog piracetamu, którego głównym działaniem jest ułatwianie hipokampalnego wysokopowinowactwego wychwytu choliny (HACU). Typowa dawka (300-600 mg) jest znacznie niższa niż piracetamu. We Włoszech był na receptę jako Pramistar; obecnie wycofany na kilku rynkach.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'HACU + AMPA', en: 'HACU + AMPA', pl: 'HACU + AMPA' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '4-6 óra', en: '4-6 h', pl: '4-6 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles (IT, visszavonva)', en: 'EU Rx (IT, withdrawn)', pl: 'UE na receptę (IT, wycofany)' } },
 ],
 mechanism: {
 hu: 'Hippokampális HACU-fokozás → emelt acetilkolin-szintézis; mellékhatásként AMPA-receptor pozitív moduláció. Nem köt direkt receptorhoz.',
 en: 'Hippocampal HACU enhancement → elevated acetylcholine synthesis; secondary AMPA receptor positive modulation. Does not bind any receptor directly.',
 pl: 'Wzmocnienie HACU w hipokampie → zwiększona synteza acetylocholiny; wtórnie pozytywna modulacja receptora AMPA. Nie wiąże się bezpośrednio z żadnym receptorem.',
 },
 legalStatus: {
 hu: 'Olaszországban (Pramistar) vényköteles volt, több piacon visszavonva. USA-ban nem FDA-jóváhagyott; OTC nootropikum-piacon elérhető.',
 en: 'Prescription-only in Italy (Pramistar), withdrawn in several markets. Not FDA-approved in the USA; available on the OTC nootropic market.',
 pl: 'Na receptę we Włoszech (Pramistar), wycofany na kilku rynkach. Niezatwierdzony przez FDA w USA; dostępny na rynku nootropików OTC.',
 },
 },

 {
 id: 'coluracetam',
 name: 'Coluracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Szelektív HACU-fokozó (BCI-540), vizuális élmény és antidepresszív profil.',
 en: 'Selective HACU enhancer (BCI-540), visual experience and antidepressant profile.',
 pl: 'Selektywny wzmacniacz HACU (BCI-540), wrażenia wzrokowe i profil antydepresyjny.',
 },
 description: {
 hu: 'A Coluracetam (BCI-540) a BrainCells Inc. fejlesztése volt, amely szelektíven aktiválja a magas-affinitású kolin-felvevő rendszert (HACU). Phase 2 vizsgálatban (major depresszió) statisztikai szignifikancia nélkül zárult, de a fejlesztés MDD + GAD irányba folytatódott. Anekdotikus felhasználói leírások színérzékelés- és kontrasztfokozást emlegetnek.',
 en: 'Coluracetam (BCI-540) was developed by BrainCells Inc. to selectively activate the high-affinity choline uptake (HACU) system. A Phase 2 trial in major depression ended without statistical significance, but development continued toward MDD + GAD. Anecdotal user reports describe enhanced color perception and contrast.',
 pl: 'Koluracetam (BCI-540) został opracowany przez BrainCells Inc. w celu selektywnej aktywacji wysokopowinowactwego systemu wychwytu choliny (HACU). Badanie fazy 2 w dużej depresji zakończyło się bez istotności statystycznej, ale rozwój kontynuowano w kierunku MDD + GAD. Anegdotyczne raporty użytkowników opisują wzmożone postrzeganie kolorów i kontrastu.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Szelektív HACU-aktivátor', en: 'Selective HACU activator', pl: 'Selektywny aktywator HACU' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~3 óra', en: '~3 h', pl: '~3 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, nincs jóváhagyás', en: 'Investigational, no approval', pl: 'Badawczy, bez zatwierdzenia' } },
 ],
 mechanism: {
 hu: 'Szelektíven aktiválja a sérült kolinerg neuronok HACU-rendszerét, ezzel acetilkolin-szintézist és -felszabadulást fokoz olyan régiókban is, ahol más cholinerg ágensek nem hatnak.',
 en: 'Selectively activates HACU in damaged cholinergic neurons, increasing acetylcholine synthesis and release even in regions where other cholinergic agents do not act.',
 pl: 'Selektywnie aktywuje HACU w uszkodzonych neuronach cholinergicznych, zwiększając syntezę i uwalnianie acetylocholiny nawet w regionach, gdzie inne środki cholinergiczne nie działają.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. „Research chemical" minősítéssel árusított, OTC nootropikum-piacon elérhető.',
 en: 'Not approved as a medicine anywhere. Sold as a “research chemical” on the OTC nootropic market.',
 pl: 'Nie zatwierdzony jako lek nigdzie. Sprzedawany jako „chemikalium badawcze” na rynku nootropików OTC.',
 },
 },

 {
 id: 'fasoracetam',
 name: 'Fasoracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'mGluR I/II/III modulátor racetam, ADHD klinikai kutatás.',
 en: 'mGluR I/II/III modulator racetam, ADHD clinical research.',
 pl: 'Racetam modulujący mGluR I/II/III, badania kliniczne ADHD.',
 },
 description: {
 hu: 'A Fasoracetam (NS-105) eredeti japán Nippon Shinyaku fejlesztés, amely a metabotrop glutamát-receptorok (mGluR I/II/III) up-regulációján keresztül hat. Aevi Medical (volt Medgenics) Phase 2/3 vizsgálatba vitte ADHD-ban (mGluR-mutáció-pozitív adolescensek), 2019-ben sikertelen elsődleges végpont után a fejlesztés lelassult.',
 en: 'Fasoracetam (NS-105) is originally a Nippon Shinyaku (Japan) development that acts via up-regulation of metabotropic glutamate receptors (mGluR I/II/III). Aevi Medical (formerly Medgenics) advanced it to Phase 2/3 in ADHD (mGluR-mutation-positive adolescents); development slowed after a failed primary endpoint in 2019.',
 pl: 'Fasoracetam (NS-105) to pierwotnie japoński (Nippon Shinyaku) lek działający poprzez regulację w górę metabotropowych receptorów glutaminianu (mGluR I/II/III). Aevi Medical (dawniej Medgenics) doprowadził go do fazy 2/3 w ADHD (nastolatkowie z mutacją mGluR); rozwój zwolnił po nieudanym pierwszorzędowym punkcie końcowym w 2019.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'mGluR I/II/III up-reguláció', en: 'mGluR I/II/III up-regulation', pl: 'Regulacja w górę mGluR I/II/III' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~5-8 óra', en: '~5-8 h', pl: '~5-8 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Klinikai vizsgálati fázis', en: 'Investigational, clinical trials', pl: 'Faza badań klinicznych' } },
 ],
 mechanism: {
 hu: 'mGluR II és III csoport agonista profil + cAMP- és cGMP-szintek emelése; krónikus szedés esetén mGluR-receptor up-regulációt vált ki.',
 en: 'mGluR group II/III agonist profile + elevation of cAMP and cGMP; chronic dosing produces mGluR receptor up-regulation.',
 pl: 'Profil agonistyczny mGluR grupy II/III + wzrost cAMP i cGMP; przewlekłe dawkowanie powoduje regulację w górę receptora mGluR.',
 },
 legalStatus: {
 hu: 'Klinikai vizsgálati státusz, sehol nem jóváhagyott gyógyszer. OTC kiegészítőként árusítása jogilag szürke zóna; UK-ban a Psychoactive Substances Act tiltja.',
 en: 'Investigational status, not an approved drug anywhere. OTC supplement sales are a legal grey zone; banned in the UK under the Psychoactive Substances Act.',
 pl: 'Status badawczy, nigdzie nie zatwierdzony jako lek. Sprzedaż OTC w prawnej szarej strefie; zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act.',
 },
 },

 {
 id: 'nefiracetam',
 name: 'Nefiracetam',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'GABA + AMPA + Ca-csatorna-modulátor racetam, anti-amnesztikus.',
 en: 'GABA + AMPA + Ca-channel modulator racetam, anti-amnestic.',
 pl: 'Racetam modulujący GABA + AMPA + kanały Ca, przeciwamnezyjny.',
 },
 description: {
 hu: 'A Nefiracetam (DM-9384) Daiichi Pharmaceutical-fejlesztés, amely a Piracetam-vázra épülő dimetil-fenil-acetil származék. Több ponton hat: GABA-A facilitáció, AMPA-PAM aktivitás, és L-típusú feszültség-függő Ca²⁺-csatornák tartós nyitása. Japánban Phase 3 vizsgálatok (post-stroke apátia, Alzheimer) zajlottak; egy USA Phase 2 vizsgálat hímnemű hepatotoxicitás miatt megszakadt.',
 en: 'Nefiracetam (DM-9384) is a Daiichi Pharmaceutical development built on the Piracetam scaffold with a dimethyl-phenyl-acetyl substituent. It acts at several sites: GABA-A facilitation, AMPA-PAM activity, and sustained opening of L-type voltage-gated Ca²⁺ channels. Phase 3 trials (post-stroke apathy, Alzheimer`s) ran in Japan; a USA Phase 2 was halted over male hepatotoxicity signals.',
 pl: 'Nefiracetam (DM-9384) to lek firmy Daiichi Pharmaceutical, oparty na szkielecie piracetamu z podstawnikiem dimetylo-fenylo-acetylowym. Działa w kilku miejscach: ułatwianie GABA-A, aktywność AMPA-PAM i przedłużone otwieranie kanałów Ca²⁺ typu L. Badania fazy 3 (apatia po udarze, Alzheimer) prowadzono w Japonii; faza 2 w USA została wstrzymana z powodu sygnałów hepatotoksyczności u mężczyzn.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'GABA-A + AMPA + L-Ca²⁺', en: 'GABA-A + AMPA + L-Ca²⁺', pl: 'GABA-A + AMPA + L-Ca²⁺' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~3-5 óra', en: '~3-5 h', pl: '~3-5 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Klinikai kutatás, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'Triple-target: GABA-A facilitáció (anxiolitikus szál), AMPA-receptor pozitív moduláció (LTP), és L-típusú Ca²⁺-csatornák tartós aktiválása, utóbbi a fő anti-amnesztikus mechanizmus.',
 en: 'Triple-target: GABA-A facilitation (anxiolytic arm), AMPA receptor positive modulation (LTP), and sustained activation of L-type Ca²⁺ channels, the latter is the primary anti-amnestic mechanism.',
 pl: 'Potrójny cel: ułatwianie GABA-A (ramię anksjolityczne), pozytywna modulacja receptora AMPA (LTP) i przedłużona aktywacja kanałów Ca²⁺ typu L, to ostatnie jest głównym mechanizmem przeciwamnezyjnym.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer; klinikai vizsgálatok lezárva. OTC „research chemical" piacon árusított.',
 en: 'Not approved as a medicine anywhere; clinical trials closed. Sold on the OTC “research chemical” market.',
 pl: 'Nigdzie nie zatwierdzony jako lek; badania kliniczne zamknięte. Sprzedawany na rynku „chemikaliów badawczych” OTC.',
 },
 },

 {
 id: 'sunifiram',
 name: 'Sunifiram',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Ampakine, AMPA-PAM, sub-mg aktív dózis.',
 en: 'Ampakine, AMPA-PAM, sub-mg active dose.',
 pl: 'Ampakina, AMPA-PAM, aktywna dawka poniżej miligrama.',
 },
 description: {
 hu: 'A Sunifiram (DM-235) piperazin-vázú ampakine, amely a klasszikus pirrolidon-racetamoknál ~1000-szer nagyobb in vivo potencitást mutat, aktív dózisa szub-milligrammos tartományban van. AMPA-receptor pozitív allosztérikus modulátorként és NMDA glicin-helyén indirekt aktiváló hatású. Csak preklinikai adatok, humán Phase nincs.',
 en: 'Sunifiram (DM-235) is a piperazine-scaffold ampakine showing ~1000× higher in vivo potency than classical pyrrolidone racetams, active dose is in the sub-milligram range. It acts as an AMPA receptor positive allosteric modulator and as an indirect activator at the NMDA glycine site. Only preclinical data; no human Phase trials.',
 pl: 'Sunifiram (DM-235) to ampakina o szkielecie piperazynowym wykazująca ~1000× wyższą potencję in vivo niż klasyczne pirolidonowe racetamy, dawka aktywna jest w zakresie poniżej miligrama. Działa jako pozytywny modulator allosteryczny receptora AMPA i pośredni aktywator w miejscu glicyny NMDA. Tylko dane przedkliniczne; brak ludzkich badań fazy.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'AMPA-PAM + NMDA-glycin', en: 'AMPA-PAM + NMDA-glycine', pl: 'AMPA-PAM + glicyna NMDA' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs humán adat', en: 'No human data', pl: 'Brak danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'AMPA-receptor pozitív allosztérikus moduláció + indirekt NMDA glicin-hely aktivitás → erős LTP-fokozás állat-modellekben már 0.01-0.1 mg/kg dózisban.',
 en: 'AMPA receptor positive allosteric modulation + indirect NMDA glycine-site activity → strong LTP enhancement in animal models at 0.01-0.1 mg/kg.',
 pl: 'Pozytywna modulacja allosteryczna receptora AMPA + pośrednia aktywność w miejscu glicyny NMDA → silne wzmocnienie LTP w modelach zwierzęcych przy 0,01-0,1 mg/kg.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. UK-ban a Psychoactive Substances Act tiltja; egyéb piacokon „research chemical" minősítésű.',
 en: 'Not approved as a medicine anywhere. Banned in the UK under the Psychoactive Substances Act; classified as a “research chemical” elsewhere.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act; sklasyfikowany jako „chemikalium badawcze” gdzie indziej.',
 },
 },

 {
 id: 'unifiram',
 name: 'Unifiram',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Ampakine (DM-232), Sunifiram alkinil-variánsa, AMPA-PAM.',
 en: 'Ampakine (DM-232), alkynyl variant of Sunifiram, AMPA-PAM.',
 pl: 'Ampakina (DM-232), alkinyl-pochodna sunifiramu, AMPA-PAM.',
 },
 description: {
 hu: 'Az Unifiram (DM-232) a Sunifiram (DM-235) tervezett alkinil-származéka, hasonló sub-mg in vivo aktivitással patkány anti-amnesztikus modellekben. Preklinikai jellemzése piracetam-szerű mechanizmust, de >1000× potencitást ír le. Humán adat egyáltalán nincs.',
 en: 'Unifiram (DM-232) is a designed alkynyl analog of Sunifiram (DM-235), with similar sub-mg in vivo activity in rat anti-amnestic models. Preclinical characterization describes a Piracetam-like mechanism but >1000× potency. No human data exist.',
 pl: 'Unifiram (DM-232) to zaprojektowany alkinyl-analog sunifiramu (DM-235), o podobnej aktywności in vivo poniżej miligrama w szczurzych modelach przeciwamnezyjnych. Charakterystyka przedkliniczna opisuje mechanizm piracetam-podobny, ale >1000× potencję. Brak danych u ludzi.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'AMPA-PAM (Sunifiram-szerű)', en: 'AMPA-PAM (Sunifiram-like)', pl: 'AMPA-PAM (podobnie do Sunifiramu)' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs humán adat', en: 'No human data', pl: 'Brak danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'AMPA-receptor pozitív allosztérikus moduláció és valószínűleg NMDA glicin-hely indirekt aktiválás, a Sunifiramhoz hasonló profil, hasonló potencitással.',
 en: 'AMPA receptor positive allosteric modulation and probable indirect NMDA glycine-site activation, a Sunifiram-like profile with similar potency.',
 pl: 'Pozytywna modulacja allosteryczna receptora AMPA i prawdopodobna pośrednia aktywacja miejsca glicyny NMDA, profil podobny do sunifiramu z podobną potencją.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. UK-ban a Psychoactive Substances Act tiltja; egyéb piacokon „research chemical".',
 en: 'Not approved as a medicine anywhere. Banned in the UK under the Psychoactive Substances Act; “research chemical” elsewhere.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act; „chemikalium badawcze” gdzie indziej.',
 },
 },

 {
 id: 'nooglutyl',
 name: 'Nooglutyl',
 image: null,
 accentColor: '#a78bfa',
 tagColor: 'rgba(167,139,250,0.18)',
 shortDesc: {
 hu: 'Orosz AMPA-PAM kutatási vegyület, plaszticitás-fokozó.',
 en: 'Russian AMPA-PAM research compound, plasticity enhancer.',
 pl: 'Rosyjski związek badawczy AMPA-PAM, wzmacniacz plastyczności.',
 },
 description: {
 hu: 'A Nooglutyl (NSG, 1-(N-glutamil)-piperidin) az Orosz Tudományos Akadémia Farmakológiai Intézetében (Moszkva) fejlesztett kísérleti vegyület. Anti-amnesztikus és AMPA-PAM aktivitást írtak le állat-modellekben; az „endogén glutamát-rendszer" pozitív modulátorának nevezik a kutatók. Humán Phase nincs, nyugati piacon nem létezik.',
 en: 'Nooglutyl (NSG, 1-(N-glutamyl)-piperidine) is an experimental compound developed at the Pharmacology Institute of the Russian Academy of Sciences (Moscow). Anti-amnestic and AMPA-PAM activity have been described in animal models; researchers describe it as a positive modulator of the “endogenous glutamate system”. No human Phase data; absent from Western markets.',
 pl: 'Nooglutyl (NSG, 1-(N-glutamylo)-piperydyna) to eksperymentalny związek opracowany w Instytucie Farmakologii Rosyjskiej Akademii Nauk (Moskwa). W modelach zwierzęcych opisano aktywność przeciwamnezyjną i AMPA-PAM; badacze opisują go jako pozytywny modulator „endogennego systemu glutaminergicznego”. Brak danych z fazy u ludzi; nieobecny na rynkach zachodnich.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'AMPA-PAM (glutamáterg)', en: 'AMPA-PAM (glutamatergic)', pl: 'AMPA-PAM (glutaminergiczny)' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs publikált humán adat', en: 'No published human data', pl: 'Brak opublikowanych danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Csak orosz preklinikai kutatás', en: 'Russian preclinical only', pl: 'Tylko rosyjskie badania przedkliniczne' } },
 ],
 mechanism: {
 hu: 'AMPA-receptor pozitív moduláció és glutamáterg LTP-fokozás állat-modellekben; pontos kötőhely nem teljes mértékben jellemzett a nyugati irodalomban.',
 en: 'AMPA receptor positive modulation and glutamatergic LTP enhancement in animal models; the precise binding site is not fully characterized in Western literature.',
 pl: 'Pozytywna modulacja receptora AMPA i wzmocnienie glutaminergicznego LTP w modelach zwierzęcych; dokładne miejsce wiązania nie jest w pełni scharakteryzowane w literaturze zachodniej.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. Orosz akadémiai kutatási vegyület, nyugati OTC piacon ritkán „research chemical" minősítéssel.',
 en: 'Not approved as a medicine anywhere. Russian academic research compound, rarely seen on Western OTC markets as a “research chemical”.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Rosyjski akademicki związek badawczy, rzadko spotykany na zachodnich rynkach OTC jako „chemikalium badawcze”.',
 },
 },

 // ============================================================
 // EXTRA, Eugeroics (Task 7, Batch 2)
 // ============================================================

 {
 id: 'armodafinil',
 name: 'Armodafinil',
 image: null,
 accentColor: '#fbbf24',
 tagColor: 'rgba(251,191,36,0.18)',
 shortDesc: {
 hu: 'A Modafinil R-enantiomerje, hosszabb felezési idő, simább koncentráció.',
 en: 'R-enantiomer of Modafinil, longer half-life, smoother focus.',
 pl: 'R-enancjomer modafinilu, dłuższy okres półtrwania, łagodniejsza koncentracja.',
 },
 description: {
 hu: 'Az Armodafinil a Modafinil tisztított R-(−)-enantiomerje, Cephalon (most Teva) fejlesztés, FDA-jóváhagyott narcolepsia, OSA és műszak-munka alvászavar (SWSD) indikációkban Nuvigil márkanéven. Felezési ideje ~15 óra (vs Modafinil racém ~12-15 óra), és vér-plazma görbéje laposabb, ezért egy adag tipikusan 12-14 órás eugeroikus hatást ad.',
 en: 'Armodafinil is the purified R-(−)-enantiomer of Modafinil, developed by Cephalon (now Teva) and FDA-approved for narcolepsy, OSA and shift-work sleep disorder (SWSD) under the brand name Nuvigil. Its half-life is ~15 h (vs racemic Modafinil ~12-15 h) with a flatter plasma curve, a single dose typically gives 12-14 h of eugeroic action.',
 pl: 'Armodafinil to oczyszczony R-(−)-enancjomer modafinilu, opracowany przez Cephalon (obecnie Teva) i zatwierdzony przez FDA w narkolepsji, OBS i zaburzeniach snu związanych z pracą zmianową (SWSD) pod nazwą Nuvigil. Okres półtrwania wynosi ~15 h (vs racemiczny modafinil ~12-15 h) z bardziej płaską krzywą osoczową, pojedyncza dawka zazwyczaj daje 12-14 h działania eugerokicznego.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'DAT-gátlás + orexin/hisztamin', en: 'DAT inhibition + orexin/histamine', pl: 'Hamowanie DAT + oreksyna/histamina' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~15 óra', en: '~15 h', pl: '~15 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'FDA Schedule IV (Nuvigil)', en: 'FDA Schedule IV (Nuvigil)', pl: 'FDA Schedule IV (Nuvigil)' } },
 ],
 mechanism: {
 hu: 'A Modafinilhez azonos profilú: gyenge dopamin-transzporter (DAT) gátlás, orexin/hisztamin út indirekt aktiválása, hipotalamusz-mediálta éberség-emelés, de R-enantiomer-szelektivitás miatt simább farmakokinetika.',
 en: 'Identical profile to Modafinil: weak dopamine transporter (DAT) inhibition, indirect activation of the orexin/histamine pathway, hypothalamic-mediated wakefulness, but smoother PK due to R-enantiomer selectivity.',
 pl: 'Identyczny profil z modafinilem: słabe hamowanie transportera dopaminy (DAT), pośrednia aktywacja szlaku oreksyny/histaminy, czuwanie pośredniczone przez podwzgórze, ale łagodniejsza PK dzięki selektywności R-enancjomeru.',
 },
 legalStatus: {
 hu: 'USA-ban FDA-jóváhagyott (Nuvigil), DEA Schedule IV. EU-ban legtöbb tagállamban vényköteles. Magyarországon szakorvosi vény szükséges.',
 en: 'FDA-approved in the USA (Nuvigil), DEA Schedule IV. Prescription-only in most EU member states. Hungary requires specialist prescription.',
 pl: 'Zatwierdzony przez FDA w USA (Nuvigil), DEA Schedule IV. Na receptę w większości państw UE. Węgry wymagają recepty specjalistycznej.',
 },
 },

 {
 id: 'fladrafinil',
 name: 'Fladrafinil',
 image: null,
 accentColor: '#fbbf24',
 tagColor: 'rgba(251,191,36,0.18)',
 shortDesc: {
 hu: 'Bisz-fluor-adrafinil analóg, agresszió-csökkentő profil, kísérleti.',
 en: 'Bis-fluorinated Adrafinil analog, aggression-reducing profile, investigational.',
 pl: 'Bis-fluorowany analog adrafinilu, profil obniżający agresję, badawczy.',
 },
 description: {
 hu: 'A Fladrafinil (CRL-40,941) az Adrafinil bisz-fluor-helyettesített származéka, eredeti francia Lafon-fejlesztés. Eugeroikus aktivitása az Adrafinilhez hasonló, de állat-modellekben kifejezett agresszió-csökkentést is leírtak. Humán klinikai vizsgálat nincs, gyógyszerként sehol nem jóváhagyott.',
 en: 'Fladrafinil (CRL-40,941) is a bis-fluorinated derivative of Adrafinil, originally developed by Lafon (France). Its eugeroic activity is similar to Adrafinil`s, but animal models also describe a pronounced reduction in aggression. No human clinical trials; not approved as a medicine anywhere.',
 pl: 'Fladrafinil (CRL-40,941) to bis-fluorowana pochodna adrafinilu, pierwotnie opracowana przez Lafon (Francja). Jego aktywność eugerokichna jest podobna do adrafinilu, ale modele zwierzęce opisują także wyraźne zmniejszenie agresji. Brak badań klinicznych u ludzi; nigdzie nie zatwierdzony jako lek.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Modafinil-prodrug profil', en: 'Modafinil-prodrug profile', pl: 'Profil prodrug modafinilu' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs validált humán adat', en: 'No validated human data', pl: 'Brak zwalidowanych danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Sehol nem jóváhagyva', en: 'Not approved anywhere', pl: 'Nigdzie nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'Az Adrafinilhez hasonló profil, májban Modafinil-szerű metabolittá konvertálódik, amely DAT-gátlás és orexin/hisztamin moduláció révén éberség-emelő. A fluor-szubsztitúció a metabolizmust lassítja.',
 en: 'Profile similar to Adrafinil, converted in the liver into a Modafinil-like metabolite that promotes wakefulness via DAT inhibition and orexin/histamine modulation. The fluorine substitution slows metabolism.',
 pl: 'Profil podobny do adrafinilu, przekształcany w wątrobie w metabolit podobny do modafinilu, który promuje czuwanie poprzez hamowanie DAT i modulację oreksyny/histaminy. Podstawienie fluoru spowalnia metabolizm.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. UK-ban a Psychoactive Substances Act tiltja; máshol „research chemical" minősítéssel árusított.',
 en: 'Not approved as a medicine anywhere. Banned in the UK under the Psychoactive Substances Act; sold elsewhere as a “research chemical”.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act; gdzie indziej sprzedawany jako „chemikalium badawcze”.',
 },
 },

 {
 id: 'flmodafinil',
 name: 'Flmodafinil',
 image: null,
 accentColor: '#fbbf24',
 tagColor: 'rgba(251,191,36,0.18)',
 shortDesc: {
 hu: 'Biszfluor-modafinil (CRL-40,940), kb. 3× potensebb in vivo.',
 en: 'Bisfluoromodafinil (CRL-40,940), roughly 3× more potent in vivo.',
 pl: 'Bisfluoromodafinil (CRL-40,940), około 3× silniejszy in vivo.',
 },
 description: {
 hu: 'A Flmodafinil (CRL-40,940, lauflumide) a Modafinil bisz-(p-fluor) fenil-szubsztitúciós származéka. Állat-modellekben kb. 3-szor nagyobb in vivo potencitást írtak le; vízoldékonysága és biológiai hasznosulása jobb, mint a Modafiniltíl. Humán Phase 1 vizsgálatok zajlottak, de gyógyszerként nem jóváhagyott.',
 en: 'Flmodafinil (CRL-40,940, lauflumide) is a bis-(p-fluoro) phenyl substituted derivative of Modafinil. Animal models describe ~3× higher in vivo potency; its aqueous solubility and bioavailability are better than Modafinil`s. Human Phase 1 studies have been conducted but it is not approved as a medicine.',
 pl: 'Flmodafinil (CRL-40,940, lauflumid) to bis-(p-fluoro) fenylowa pochodna modafinilu. Modele zwierzęce opisują ~3× wyższą potencję in vivo; jego rozpuszczalność w wodzie i biodostępność są lepsze niż modafinilu. Przeprowadzono badania fazy 1 u ludzi, ale nie jest zatwierdzony jako lek.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Modafinil-szerű, DAT-gátlás', en: 'Modafinil-like, DAT inhibition', pl: 'Podobny do modafinilu, hamowanie DAT' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Korlátozott humán adat', en: 'Limited human data', pl: 'Ograniczone dane u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'A Modafinilhez hasonló mechanizmus: gyenge DAT-gátlás, orexin/hisztamin út indirekt aktiválás. A két para-fluor szubsztitúció növeli a biológiai hasznosulást és lassítja a metabolizmust.',
 en: 'Mechanism similar to Modafinil: weak DAT inhibition, indirect activation of the orexin/histamine pathway. The two para-fluoro substitutions increase bioavailability and slow metabolism.',
 pl: 'Mechanizm podobny do modafinilu: słabe hamowanie DAT, pośrednia aktywacja szlaku oreksyny/histaminy. Dwa podstawienia para-fluoro zwiększają biodostępność i spowalniają metabolizm.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. „Research chemical" minősítéssel árusított; UK-ban a Psychoactive Substances Act tiltja.',
 en: 'Not approved as a medicine anywhere. Sold as a “research chemical”; banned in the UK under the Psychoactive Substances Act.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Sprzedawany jako „chemikalium badawcze”; zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act.',
 },
 },

 // ============================================================
 // EXTRA, Cholinergics (Task 7, Batch 2)
 // ============================================================

 {
 id: 'alpha-gpc',
 name: 'Alpha-GPC',
 image: null,
 accentColor: '#06b6d4',
 tagColor: 'rgba(6,182,212,0.18)',
 shortDesc: {
 hu: 'Glicerofoszfokolin, biológiailag hasznosuló kolin-prekurzor.',
 en: 'Glycerophosphocholine, a bioavailable choline precursor.',
 pl: 'Glicerofosfocholina, biodostępny prekursor choliny.',
 },
 description: {
 hu: 'Az Alpha-GPC (L-α-glicerilfoszforilkolin) természetes foszfolipid-metabolit, amelyet a szervezet acetilkolinná és foszfatidilkolinná épít be. Vér-agy gáton áthatol, biológiailag hasznosulása ~95%. Olaszországban Delecit néven vényköteles gyógyszer (vaszkuláris demencia), másutt étrend-kiegészítő.',
 en: 'Alpha-GPC (L-α-glycerylphosphorylcholine) is a natural phospholipid metabolite that the body incorporates into acetylcholine and phosphatidylcholine. It crosses the blood-brain barrier with ~95% bioavailability. It is a prescription medicine in Italy (Delecit, for vascular dementia) and a supplement elsewhere.',
 pl: 'Alfa-GPC (L-α-glicerylofosforylocholina) to naturalny metabolit fosfolipidowy, który organizm wbudowuje w acetylocholinę i fosfatydylocholinę. Przenika barierę krew-mózg z biodostępnością ~95%. Jest lekiem na receptę we Włoszech (Delecit, w otępieniu naczyniowym) i suplementem gdzie indziej.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Kolin-prekurzor (ACh-szintézis)', en: 'Choline precursor (ACh synthesis)', pl: 'Prekursor choliny (synteza ACh)' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~4-6 óra', en: '~4-6 h', pl: '~4-6 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles (IT) / OTC másutt', en: 'EU Rx (IT) / OTC elsewhere', pl: 'UE na receptę (IT) / OTC gdzie indziej' } },
 ],
 mechanism: {
 hu: 'Hidrolízis után kolin + glicerofoszfátot szabadít fel; a kolin acetilkolin-szintézis szubsztrátja, a glicerofoszfát foszfatidilkolin-építőkő, együtt cholinerg tónus és membrán-foszfolipid-szintézis fokozására.',
 en: 'After hydrolysis it releases choline + glycerophosphate; the choline serves as substrate for acetylcholine synthesis, the glycerophosphate as a phosphatidylcholine building block, together they support cholinergic tone and membrane phospholipid synthesis.',
 pl: 'Po hydrolizie uwalnia cholinę + glicerofosforan; cholina służy jako substrat do syntezy acetylocholiny, glicerofosforan jako budulec fosfatydylocholiny, razem wspierają napięcie cholinergiczne i syntezę fosfolipidów błonowych.',
 },
 legalStatus: {
 hu: 'Olaszországban vényköteles (Delecit). EU egyéb tagállamokban és USA-ban étrend-kiegészítő. Magyarországon szabadon kapható.',
 en: 'Prescription-only in Italy (Delecit). Sold as a dietary supplement in other EU member states and the USA. Freely available in Hungary.',
 pl: 'Na receptę we Włoszech (Delecit). Sprzedawany jako suplement diety w innych państwach UE i USA. Wolno dostępny na Węgrzech.',
 },
 },

 {
 id: 'cdp-choline',
 name: 'CDP-Choline',
 image: null,
 accentColor: '#06b6d4',
 tagColor: 'rgba(6,182,212,0.18)',
 shortDesc: {
 hu: 'Citidin-difoszfát-kolin, kolin + uridin kettős prekurzor.',
 en: 'Cytidine diphosphate-choline, dual choline + uridine precursor.',
 pl: 'Cytydyno-difosfo-cholina, podwójny prekursor choliny i urydyny.',
 },
 description: {
 hu: 'A CDP-Cholin (Citicolin, INN) természetes nukleotid-foszfolipid intermedier, amely a Kennedy-úton vesz részt a foszfatidilkolin-szintézisben. Belekben citidinre + kolinra hidrolizál; a citidin uridinné alakul, így az agyban két nootropikusan releváns molekulát is biztosít. Olaszországban Somazina, EU-szerte vényköteles agyi ischaemia indikációkban; USA-ban OTC.',
 en: 'CDP-Choline (Citicoline, INN) is a natural nucleotide-phospholipid intermediate that participates in phosphatidylcholine synthesis via the Kennedy pathway. In the gut it hydrolyzes to cytidine + choline; the cytidine is converted to uridine, supplying two nootropically relevant molecules in the brain. Prescription-only in Italy (Somazina) and elsewhere in the EU for cerebral ischemia; OTC in the USA.',
 pl: 'CDP-Cholina (Cytykolina, INN) to naturalny pośrednik nukleotydowo-fosfolipidowy uczestniczący w syntezie fosfatydylocholiny szlakiem Kennedy`ego. W jelitach hydrolizuje do cytydyny + choliny; cytydyna jest przekształcana w urydynę, dostarczając do mózgu dwóch nootropowo istotnych cząsteczek. Na receptę we Włoszech (Somazina) i w innych krajach UE w niedokrwieniu mózgowym; OTC w USA.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Kolin + uridin prekurzor', en: 'Choline + uridine precursor', pl: 'Prekursor choliny + urydyny' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~56 óra (két fázis)', en: '~56 h (two phases)', pl: '~56 h (dwie fazy)' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles / USA OTC', en: 'EU Rx / USA OTC', pl: 'UE na receptę / USA OTC' } },
 ],
 mechanism: {
 hu: 'A Kennedy-út kulcsintermediere, exogén bevitelével a foszfatidilkolin-szintézis (sejtmembrán-építés) és az acetilkolin-szintézis is fokozható; az uridin-komponens emellett UTP-szintézist és szinaptikus növekedést támogat.',
 en: 'A key intermediate of the Kennedy pathway, exogenous intake supports both phosphatidylcholine synthesis (membrane building) and acetylcholine synthesis; the uridine component additionally supports UTP synthesis and synaptic growth.',
 pl: 'Kluczowy pośrednik szlaku Kennedy`ego, egzogenne przyjmowanie wspiera zarówno syntezę fosfatydylocholiny (budowa błony), jak i syntezę acetylocholiny; składnik urydynowy dodatkowo wspiera syntezę UTP i wzrost synaptyczny.',
 },
 legalStatus: {
 hu: 'Olaszországban, Spanyolországban, Japánban vényköteles (Somazina, Ceraxon). USA-ban OTC étrend-kiegészítő. Magyarországon kiegészítőként szabadon kapható.',
 en: 'Prescription-only in Italy, Spain, Japan (Somazina, Ceraxon). OTC dietary supplement in the USA. Freely available as a supplement in Hungary.',
 pl: 'Na receptę we Włoszech, Hiszpanii, Japonii (Somazina, Ceraxon). OTC suplement diety w USA. Wolno dostępny jako suplement na Węgrzech.',
 },
 },

 {
 id: 'centrophenoxine',
 name: 'Centrophenoxine',
 image: null,
 accentColor: '#06b6d4',
 tagColor: 'rgba(6,182,212,0.18)',
 shortDesc: {
 hu: 'Meclofenoxate, DMAE + p-klórfenoxiecetsav konjugátum, lipofuszcin-eltávolítás.',
 en: 'Meclofenoxate, DMAE + p-chlorophenoxyacetic acid conjugate, lipofuscin removal.',
 pl: 'Meklofenoksat, koniugat DMAE + kwasu p-chlorofenoksyoctowego, usuwanie lipofuscyny.',
 },
 description: {
 hu: 'A Centrophenoxin (meclofenoxát, Lucidril) francia eredetű gyógyszer (Anjou), amely DMAE-t (dimetilaminoetanol) p-klór-fenoxi-ecetsavhoz észterezve juttat a központi idegrendszerbe. Klasszikus „anti-aging" nootropikum, amely a neuronok lipofuszcin- (öregkori pigment) felhalmozódását csökkenti állat-modellekben. EU egyes országaiban vényköteles.',
 en: 'Centrophenoxine (meclofenoxate, Lucidril) is a French-origin drug (Anjou) that delivers DMAE (dimethylaminoethanol) to the CNS as a p-chlorophenoxyacetic acid ester. A classical “anti-aging” nootropic that reduces lipofuscin (aging pigment) accumulation in neurons in animal models. Prescription-only in some EU countries.',
 pl: 'Centrofenoksyna (meklofenoksat, Lucidril) to lek pochodzenia francuskiego (Anjou), dostarczający DMAE (dimetyloaminoetanol) do OUN jako ester kwasu p-chlorofenoksyoctowego. Klasyczny nootropik „anti-aging”, który zmniejsza akumulację lipofuscyny (pigmentu starzenia) w neuronach w modelach zwierzęcych. Na receptę w niektórych krajach UE.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'DMAE-prodrug + antioxidáns', en: 'DMAE-prodrug + antioxidant', pl: 'Prodrug DMAE + przeciwutleniacz' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~2-4 óra', en: '~2-4 h', pl: '~2-4 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles (egyes országok)', en: 'EU Rx (some countries)', pl: 'UE na receptę (niektóre kraje)' } },
 ],
 mechanism: {
 hu: 'Hidrolízis után DMAE-t szabadít fel, amely részben kolinerg prekurzorként viselkedik, és lipid-peroxidáció-csökkentés révén csökkenti a sejten belüli lipofuszcin-felhalmozódást, neuronális membrán-„housekeeping" hatás.',
 en: 'After hydrolysis it releases DMAE, which partially acts as a cholinergic precursor and reduces intracellular lipofuscin accumulation by limiting lipid peroxidation, a neuronal membrane “housekeeping” effect.',
 pl: 'Po hydrolizie uwalnia DMAE, który częściowo działa jako prekursor cholinergiczny i zmniejsza wewnątrzkomórkową akumulację lipofuscyny poprzez ograniczenie peroksydacji lipidów, efekt neuronalnego membranowego „housekeeping”.',
 },
 legalStatus: {
 hu: 'Magyarországon, Lengyelországban, Csehországban vényköteles (Lucidril). USA-ban nem FDA-jóváhagyott; OTC kiegészítőként árusított.',
 en: 'Prescription-only in Hungary, Poland, Czechia (Lucidril). Not FDA-approved in the USA; sold as a supplement OTC.',
 pl: 'Na receptę na Węgrzech, w Polsce, Czechach (Lucidril). Niezatwierdzony przez FDA w USA; sprzedawany jako suplement OTC.',
 },
 },

 {
 id: 'huperzine-a',
 name: 'Huperzine-A',
 image: null,
 accentColor: '#06b6d4',
 tagColor: 'rgba(6,182,212,0.18)',
 shortDesc: {
 hu: 'Reverzibilis AChE-inhibitor, kínai mohából (Huperzia serrata) izolálva.',
 en: 'Reversible AChE inhibitor, isolated from the Chinese moss Huperzia serrata.',
 pl: 'Odwracalny inhibitor AChE, wyizolowany z chińskiego mchu Huperzia serrata.',
 },
 description: {
 hu: 'A Huperzin-A egy alkaloid, amelyet a Huperzia serrata mohából izoláltak. Erős, reverzibilis és szelektív acetilkolinészteráz (AChE) inhibitor, az enzim gátlásával prolongálja az acetilkolin-jelet a szinaptikus résben. Kínában gyógyszerként Alzheimer-kórban használják; Nyugaton étrend-kiegészítőként árusítják.',
 en: 'Huperzine-A is an alkaloid isolated from the moss Huperzia serrata. It is a potent, reversible and selective acetylcholinesterase (AChE) inhibitor, gating prolongs acetylcholine signaling in the synaptic cleft. Used as a drug in China for Alzheimer`s disease; sold as a dietary supplement in the West.',
 pl: 'Huperzyna-A to alkaloid wyizolowany z mchu Huperzia serrata. Jest silnym, odwracalnym i selektywnym inhibitorem acetylocholinesterazy (AChE), przedłuża sygnał acetylocholiny w szczelinie synaptycznej. Stosowana jako lek w Chinach w chorobie Alzheimera; sprzedawana jako suplement diety na Zachodzie.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Reverzibilis AChE-inhibitor', en: 'Reversible AChE inhibitor', pl: 'Odwracalny inhibitor AChE' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~10-14 óra', en: '~10-14 h', pl: '~10-14 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kína Rx / Nyugat OTC kiegészítő', en: 'China Rx / Western OTC supplement', pl: 'Chiny Rx / suplement OTC na Zachodzie' } },
 ],
 mechanism: {
 hu: 'Reverzibilisen kötődik az AChE aktív centrumához → az acetilkolin lassabban bomlik a szinaptikus résben → fokozott cholinerg tónus. Mellékhatásként NMDA-receptor pozitív moduláció és antioxidáns aktivitás is leírt.',
 en: 'Reversibly binds the AChE active site → acetylcholine breaks down more slowly in the synaptic cleft → enhanced cholinergic tone. Secondary NMDA receptor positive modulation and antioxidant activity are also described.',
 pl: 'Odwracalnie wiąże miejsce aktywne AChE → acetylocholina rozkłada się wolniej w szczelinie synaptycznej → wzmocnione napięcie cholinergiczne. Opisano także wtórną pozytywną modulację receptora NMDA i aktywność przeciwutleniającą.',
 },
 legalStatus: {
 hu: 'Kínában gyógyszerként jóváhagyott (Alzheimer-kór). USA-ban OTC étrend-kiegészítő, EU-ban az adott tagállam besorolása szerint változó. Magyarországon kiegészítőként elérhető.',
 en: 'Approved as a medicine in China (Alzheimer`s). OTC dietary supplement in the USA; classification varies by EU member state. Available as a supplement in Hungary.',
 pl: 'Zatwierdzona jako lek w Chinach (Alzheimer). OTC suplement diety w USA; klasyfikacja różni się między państwami UE. Dostępna jako suplement na Węgrzech.',
 },
 },

 // ============================================================
 // EXTRA, Dopaminergic / Motivation (Task 7, Batch 3)
 // ============================================================

 {
 id: 'selegiline',
 name: 'Selegiline',
 image: null,
 accentColor: '#f43f5e',
 tagColor: 'rgba(244,63,94,0.18)',
 shortDesc: {
 hu: 'Szelektív MAO-B inhibitor, Parkinson + depresszió, FDA-jóváhagyott.',
 en: 'Selective MAO-B inhibitor, Parkinson`s + depression, FDA-approved.',
 pl: 'Selektywny inhibitor MAO-B, Parkinson + depresja, zatwierdzony przez FDA.',
 },
 description: {
 hu: 'A Selegilin (L-deprenil) magyar Jozsef Knoll professzor fejlesztése (1960-as évek), szelektív és irreverzibilis MAO-B inhibitor. FDA-jóváhagyott Parkinson-kórban (orális, Eldepryl/Zelapar) és major depresszióban (transzdermális Emsam tapasz). Alacsony dózisban (<10 mg/nap) a szelektivitás megmarad, magasabb dózisokon MAO-A-t is gátol → tiraminreakció kockázata nő.',
 en: 'Selegiline (L-deprenyl) is a development of Hungarian Prof. József Knoll (1960s), a selective and irreversible MAO-B inhibitor. FDA-approved for Parkinson`s disease (oral, Eldepryl/Zelapar) and major depression (transdermal Emsam patch). At low doses (<10 mg/day) the selectivity is preserved; higher doses also inhibit MAO-A → tyramine-reaction risk rises.',
 pl: 'Selegilina (L-deprenyl) to opracowanie węgierskiego prof. Józsefa Knolla (lata 60.), selektywny i nieodwracalny inhibitor MAO-B. Zatwierdzony przez FDA w chorobie Parkinsona (doustnie, Eldepryl/Zelapar) i dużej depresji (plaster transdermalny Emsam). Przy niskich dawkach (<10 mg/dobę) selektywność jest zachowana; wyższe dawki hamują również MAO-A → wzrasta ryzyko reakcji tyraminowej.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Szelektív, irreverzibilis MAO-B', en: 'Selective, irreversible MAO-B', pl: 'Selektywne, nieodwracalne MAO-B' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~10 óra (aktív metabolitok hosszabbak)', en: '~10 h (active metabolites longer)', pl: '~10 h (aktywne metabolity dłużej)' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'FDA + EU vényköteles', en: 'FDA + EU Rx', pl: 'FDA + UE na receptę' } },
 ],
 mechanism: {
 hu: 'Irreverzibilis MAO-B inhibíció → emelt nigro-striatális dopamin- és PEA-szintek; ezenfelül leírtak antiapoptotikus és NGF-szerű neuroprotektív hatást a dopaminerg neuronokon.',
 en: 'Irreversible MAO-B inhibition → elevated nigrostriatal dopamine and PEA levels; additionally, antiapoptotic and NGF-like neuroprotective effects on dopaminergic neurons are described.',
 pl: 'Nieodwracalne hamowanie MAO-B → podwyższone poziomy dopaminy i PEA w układzie nigrostriatalnym; opisano także efekty antyapoptotyczne i neuroprotekcyjne podobne do NGF na neuronach dopaminergicznych.',
 },
 legalStatus: {
 hu: 'FDA-jóváhagyott Parkinson + depresszió. EU-szerte vényköteles. Magyarországon szakorvosi vény szükséges; OTC nem.',
 en: 'FDA-approved for Parkinson`s + depression. Prescription-only across the EU. Hungary requires specialist prescription; not OTC.',
 pl: 'Zatwierdzony przez FDA w Parkinsonie + depresji. Na receptę w całej UE. Węgry wymagają recepty specjalistycznej; nie OTC.',
 },
 },

 {
 id: 'bpap',
 name: 'BPAP',
 image: null,
 accentColor: '#f43f5e',
 tagColor: 'rgba(244,63,94,0.18)',
 shortDesc: {
 hu: 'Szelektív PEA-aktivitás-fokozó (CAE), Selegiline-utód, kísérleti.',
 en: 'Selective PEA-activity enhancer (CAE), Selegiline successor, investigational.',
 pl: 'Selektywny wzmacniacz aktywności PEA (CAE), następca selegiliny, badawczy.',
 },
 description: {
 hu: 'A BPAP ((R)-1-(benzofurán-2-il)-2-propilaminopentán) Knoll József második generációs „katekolamin-aktivitás-fokozó" (CAE) vegyülete, amelyet a Selegilin neuroprotektív profiljának továbbfejlesztésére terveztek. Nem MAO-B inhibitor, közvetlenül emeli a PEA, dopamin és noradrenalin felszabadulását preszinaptikus szinten, alacsony nanomoláris koncentrációban. Csak preklinikai adatok.',
 en: 'BPAP ((R)-1-(benzofuran-2-yl)-2-propylaminopentane) is a second-generation “catecholaminergic activity enhancer” (CAE) compound by József Knoll, designed to extend Selegiline`s neuroprotective profile. It is not a MAO-B inhibitor, it directly increases presynaptic release of PEA, dopamine and noradrenaline at low nanomolar concentrations. Only preclinical data exist.',
 pl: 'BPAP ((R)-1-(benzofuran-2-yl)-2-propyloaminopentan) to drugiej generacji związek „katecholaminergiczny wzmacniacz aktywności” (CAE) prof. Knolla, zaprojektowany do rozszerzenia profilu neuroprotekcyjnego selegiliny. Nie jest inhibitorem MAO-B, bezpośrednio zwiększa presynaptyczne uwalnianie PEA, dopaminy i noradrenaliny w niskich nanomolarnych stężeniach. Istnieją tylko dane przedkliniczne.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'CAE, preszinaptikus monoaminerg', en: 'CAE, presynaptic monoaminergic', pl: 'CAE, presynaptyczny monoaminergiczny' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs humán adat', en: 'No human data', pl: 'Brak danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'Knoll-féle „CAE-mechanizmus", preszinaptikus katekolaminerg és phenethylamin-erg neuronok elektromos akciópotenciálra adott válaszának fokozása, így minden idegimpulzus több neurotranszmittert szabadít fel. Nem indít alap-felszabadulást, tehát „aktivitás-függő" hatás.',
 en: 'Knoll`s “CAE mechanism”, enhancement of the response of presynaptic catecholaminergic and phenethylamine-ergic neurons to electrical action potentials, so each impulse releases more neurotransmitter. It does not trigger baseline release, the effect is activity-dependent.',
 pl: '„Mechanizm CAE” Knolla, wzmocnienie reakcji presynaptycznych neuronów katecholaminergicznych i feniloetyloaminowych na elektryczne potencjały czynnościowe, tak by każdy impuls uwalniał więcej neuroprzekaźnika. Nie wyzwala uwalniania podstawowego, efekt zależny od aktywności.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. Akadémiai kutatási vegyület; nem szerepel a klasszikus „research chemical" piacon sem szélesen.',
 en: 'Not approved as a medicine anywhere. Academic research compound; not widely available even on the “research chemical” market.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Akademicki związek badawczy; nawet na rynku „chemikaliów badawczych” niezbyt dostępny.',
 },
 },

 {
 id: 'prl-8-53',
 name: 'PRL-8-53',
 image: null,
 accentColor: '#f43f5e',
 tagColor: 'rgba(244,63,94,0.18)',
 shortDesc: {
 hu: 'Fenil-metil-piperidinil-benzoát, 1970-es évek, egyetlen humán memóriavizsgálat.',
 en: 'Phenyl-methyl-piperidinyl benzoate, 1970s, one published human memory trial.',
 pl: 'Fenylo-metylo-piperydynylo-benzoesan, lata 70., jedno opublikowane badanie pamięci u ludzi.',
 },
 description: {
 hu: 'A PRL-8-53 (methyl-3-(2-(benzyl(methyl)amino)ethyl)benzoate) 1972-es szabadalom (Dr. Nikolaus Hansl, Creighton University). Egyetlen 1978-as kettősvak placebóval kontrollált humán vizsgálatban (n=47) statisztikailag szignifikáns verbális memóriajavulást írtak le, különösen idősebb és kezdetben gyengén teljesítő alanyoknál. Azóta nincs követő vizsgálat.',
 en: 'PRL-8-53 (methyl-3-(2-(benzyl(methyl)amino)ethyl)benzoate) was patented in 1972 (Dr. Nikolaus Hansl, Creighton University). A single 1978 double-blind placebo-controlled human trial (n=47) described statistically significant verbal-memory improvement, particularly in older and initially low-performing subjects. There have been no follow-up trials since.',
 pl: 'PRL-8-53 (metylo-3-(2-(benzylo(metylo)amino)etylo)benzoesan) opatentowano w 1972 r. (dr Nikolaus Hansl, Creighton University). Pojedyncze badanie z 1978 r. z podwójnie ślepą próbą i placebo (n=47) opisało statystycznie istotną poprawę pamięci werbalnej, szczególnie u starszych i początkowo słabo wypadających osób. Od tego czasu nie ma badań kontynuacyjnych.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Cholinerg + dopaminerg moduláció', en: 'Cholinergic + dopaminergic modulation', pl: 'Modulacja cholinergiczna + dopaminergiczna' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs publikált humán adat', en: 'No published human data', pl: 'Brak opublikowanych danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'Kombinált cholinerg potencírozás és dopaminerg moduláció, az eredeti szabadalom „acetilkolin- és serotonin-felszabadulás-fokozó" mechanizmust ír le; pontos receptorszintű profil máig nem ismert.',
 en: 'Combined cholinergic potentiation and dopaminergic modulation, the original patent describes an “acetylcholine and serotonin release-enhancing” mechanism; the precise receptor-level profile remains unknown.',
 pl: 'Połączona potencjalizacja cholinergiczna i modulacja dopaminergiczna, oryginalny patent opisuje mechanizm „wzmacniający uwalnianie acetylocholiny i serotoniny”; dokładny profil na poziomie receptora pozostaje nieznany.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. „Research chemical" minősítéssel árusított, kontroll nélküli alapanyag; UK-ban a Psychoactive Substances Act tiltja.',
 en: 'Not approved as a medicine anywhere. Sold as a “research chemical” with no regulated source control; banned in the UK under the Psychoactive Substances Act.',
 pl: 'Nigdzie nie zatwierdzony jako lek. Sprzedawany jako „chemikalium badawcze” bez kontrolowanego źródła; zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act.',
 },
 },

 // ============================================================
 // EXTRA, Anxiolytics + Stim-Recovery (Task 7, Batch 3)
 // ============================================================

 {
 id: 'phenibut',
 name: 'Phenibut',
 image: null,
 accentColor: '#10b981',
 tagColor: 'rgba(16,185,129,0.18)',
 shortDesc: {
 hu: 'β-fenil-GABA, GABA-B agonista, orosz Rx anxiolitikum.',
 en: 'β-phenyl-GABA, GABA-B agonist, Russian prescription anxiolytic.',
 pl: 'β-fenylo-GABA, agonista GABA-B, rosyjski lek anksjolityczny na receptę.',
 },
 description: {
 hu: 'A Phenibut (β-fenil-γ-amino-vajsav) szovjet űrkutatási fejlesztés (1960-as évek), olyan anxiolitikum, amely a GABA-tól eltérően áthatol a vér-agy gáton. Oroszországban gyógyszerként (Anvifen, Noofen) használt; Európában és USA-ban nem jóváhagyott. Erős tolerancia és fizikai függőség alakulhat ki rendszeres napi szedésnél, megvonási tünetei a benzodiazepin-megvonásra emlékeztetnek.',
 en: 'Phenibut (β-phenyl-γ-aminobutyric acid) is a Soviet space-program development (1960s), an anxiolytic that, unlike GABA itself, crosses the blood-brain barrier. Used as a medicine in Russia (Anvifen, Noofen); not approved in Europe or the USA. Strong tolerance and physical dependence can develop with regular daily use, withdrawal resembles benzodiazepine withdrawal.',
 pl: 'Fenibut (β-fenylo-kwas γ-aminomasłowy) to opracowanie radzieckiego programu kosmicznego (lata 60.), lek anksjolityczny, który w przeciwieństwie do samego GABA przenika barierę krew-mózg. Stosowany jako lek w Rosji (Anvifen, Noofen); niezatwierdzony w Europie ani USA. Przy regularnym codziennym stosowaniu może rozwinąć się silna tolerancja i fizyczne uzależnienie, odstawienie przypomina odstawienie benzodiazepin.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'GABA-B agonista + Ca²⁺-α2δ', en: 'GABA-B agonist + Ca²⁺-α2δ', pl: 'Agonista GABA-B + Ca²⁺-α2δ' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~5 óra', en: '~5 h', pl: '~5 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Oroszország Rx / UK Class C (2024)', en: 'Russia Rx / UK Class C (2024)', pl: 'Rosja Rx / UK Class C (2024)' } },
 ],
 mechanism: {
 hu: 'GABA-B receptor agonista (Baclofenhez hasonlóan) + α2δ-1 feszültség-függő Ca²⁺-csatorna alegység-moduláció (Gabapentinhez hasonlóan) → preszinaptikus glutamát-felszabadulás csökkentés és anxiolitikus hatás.',
 en: 'GABA-B receptor agonist (similar to Baclofen) + modulation of the α2δ-1 voltage-gated Ca²⁺ channel subunit (similar to Gabapentin) → presynaptic glutamate release reduction and anxiolytic effect.',
 pl: 'Agonista receptora GABA-B (podobnie do baklofenu) + modulacja podjednostki α2δ-1 kanałów Ca²⁺ zależnych od napięcia (podobnie do gabapentyny) → redukcja presynaptycznego uwalniania glutaminianu i efekt anksjolityczny.',
 },
 legalStatus: {
 hu: 'Oroszországban, Ukrajnában, Lettországban vényköteles gyógyszer. UK-ban 2024 óta Class C kontrollált anyag. EU egyéb tagállamokban szabályozatlan. Magyarországon vény nélkül nem hozható forgalomba gyógyszerként.',
 en: 'Prescription medicine in Russia, Ukraine, Latvia. UK Class C controlled substance since 2024. Unregulated in other EU member states. Cannot be marketed as a medicine in Hungary without prescription.',
 pl: 'Lek na receptę w Rosji, Ukrainie, Łotwie. W Wielkiej Brytanii substancja kontrolowana klasy C od 2024. Niezregulowany w innych państwach UE. Nie może być wprowadzany do obrotu jako lek na Węgrzech bez recepty.',
 },
 },

 {
 id: 'tianeptine',
 name: 'Tianeptine',
 image: null,
 accentColor: '#10b981',
 tagColor: 'rgba(16,185,129,0.18)',
 shortDesc: {
 hu: 'Atípusos antidepresszáns, μ-opioid moduláció, EU/orosz vényköteles.',
 en: 'Atypical antidepressant, μ-opioid modulator, EU/Russian prescription.',
 pl: 'Nietypowy lek przeciwdepresyjny, modulator μ-opioidowy, recepta UE/Rosja.',
 },
 description: {
 hu: 'A Tianeptin (Coaxil, Stablon) francia eredetű (Servier, 1989) atípusos antidepresszáns. Eredeti SSRE-elméletét (szerotonin-felvétel-fokozó) felülvizsgálta a 2014-es Gassaway et al. munka, amely μ-opioid receptor (MOR) parciális agonista profilt írt le terápiás dózisokon. Magas dózisok visszaélést és függőséget okozhatnak, USA-ban tilos, EU-ban szigorúan vényköteles.',
 en: 'Tianeptine (Coaxil, Stablon) is a French (Servier, 1989) atypical antidepressant. Its original SSRE (serotonin reuptake enhancer) theory was revised by the 2014 Gassaway et al. work, which described a μ-opioid receptor (MOR) partial agonist profile at therapeutic doses. High doses can cause abuse and dependence, banned in the USA, strictly prescription-only in the EU.',
 pl: 'Tianeptyna (Coaxil, Stablon) to francuski (Servier, 1989) nietypowy lek przeciwdepresyjny. Pierwotna teoria SSRE (wzmacniacz wychwytu serotoniny) została zrewidowana w pracy Gassaway et al. z 2014, która opisała profil częściowego agonisty receptora μ-opioidowego (MOR) przy dawkach terapeutycznych. Wysokie dawki mogą powodować nadużywanie i uzależnienie, zakazana w USA, ściśle na receptę w UE.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'μ-opioid parciális agonista', en: 'μ-opioid partial agonist', pl: 'Częściowy agonista μ-opioidowy' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~2.5 óra', en: '~2.5 h', pl: '~2,5 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles / USA tiltva', en: 'EU Rx / USA banned', pl: 'UE na receptę / USA zakazana' } },
 ],
 mechanism: {
 hu: 'μ-opioid receptor parciális agonista terápiás dózison; emellett glutamáterg moduláció (stressz-indukált glutamát-túltermelés csökkentése) és BDNF-up-reguláció a hippokampuszban.',
 en: 'μ-opioid receptor partial agonist at therapeutic dose; additionally, glutamatergic modulation (reducing stress-induced glutamate overproduction) and BDNF up-regulation in the hippocampus.',
 pl: 'Częściowy agonista receptora μ-opioidowego w dawce terapeutycznej; dodatkowo modulacja glutaminergiczna (redukcja indukowanej stresem nadprodukcji glutaminianu) i regulacja w górę BDNF w hipokampie.',
 },
 legalStatus: {
 hu: 'Vényköteles antidepresszáns Franciaországban, Oroszországban, Magyarországon és számos EU-tagállamban (Coaxil/Stablon). USA-ban FDA nem jóváhagyott; több államban kontrollált anyagként tiltott.',
 en: 'Prescription antidepressant in France, Russia, Hungary and many EU member states (Coaxil/Stablon). Not FDA-approved in the USA; banned as a controlled substance in several states.',
 pl: 'Lek przeciwdepresyjny na receptę we Francji, Rosji, na Węgrzech i w wielu państwach UE (Coaxil/Stablon). Niezatwierdzona przez FDA w USA; zakazana jako substancja kontrolowana w kilku stanach.',
 },
 },

 {
 id: 'f-phenibut',
 name: 'F-Phenibut',
 image: null,
 accentColor: '#10b981',
 tagColor: 'rgba(16,185,129,0.18)',
 shortDesc: {
 hu: 'Fluorozott Phenibut, potensebb, lipofilebb GABA-B agonista variáns.',
 en: 'Fluorinated Phenibut, more potent, more lipophilic GABA-B agonist variant.',
 pl: 'Fluorowany fenibut, silniejszy, bardziej lipofilny wariant agonisty GABA-B.',
 },
 description: {
 hu: 'A Fluorofenibut a Phenibut fenil-gyűrűjének para-fluoro szubsztitúciójával előállított nem-hivatalos analóg. A megnövelt lipofilitás miatt gyorsabban hatol a vér-agy gáton és nagyobb in vivo potencitást mutat, viszont ezzel arányosan magasabb tolerancia- és függőség-kockázat. Klinikai vizsgálat egyáltalán nincs.',
 en: 'Fluorophenibut is an unofficial analog produced by para-fluoro substitution on the phenyl ring of Phenibut. Increased lipophilicity yields faster blood-brain-barrier penetration and higher in vivo potency, but proportionally higher tolerance and dependence risk. No clinical trials exist.',
 pl: 'Fluorofenibut to nieoficjalny analog uzyskany przez podstawienie para-fluoro w pierścieniu fenylowym fenibutu. Zwiększona lipofilność daje szybsze przenikanie bariery krew-mózg i wyższą potencję in vivo, ale proporcjonalnie wyższe ryzyko tolerancji i uzależnienia. Brak badań klinicznych.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'GABA-B agonista (Phenibut-szerű)', en: 'GABA-B agonist (Phenibut-like)', pl: 'Agonista GABA-B (podobny do fenibutu)' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs validált humán adat', en: 'No validated human data', pl: 'Brak zwalidowanych danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Sehol nem jóváhagyva', en: 'Not approved anywhere', pl: 'Nigdzie nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'Phenibut-analóg GABA-B receptor agonizmus + α2δ Ca²⁺-csatorna moduláció, a fluor-szubsztitúció gyorsítja a CNS-penetrációt és növeli a kötési affinitást.',
 en: 'Phenibut-analog GABA-B receptor agonism + α2δ Ca²⁺ channel modulation, the fluorine substitution accelerates CNS penetration and increases binding affinity.',
 pl: 'Agonizm receptora GABA-B analogiczny do fenibutu + modulacja kanałów Ca²⁺ α2δ, podstawienie fluoru przyspiesza penetrację OUN i zwiększa powinowactwo wiązania.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer. UK-ban a Psychoactive Substances Act tiltja, USA-ban néhány állam (Alabama, Michigan) Schedule II-be sorolja.',
 en: 'Not approved as a medicine anywhere. Banned in the UK under the Psychoactive Substances Act; classified as Schedule II in several US states (Alabama, Michigan).',
 pl: 'Nigdzie nie zatwierdzony jako lek. Zakazany w Wielkiej Brytanii na mocy Psychoactive Substances Act; sklasyfikowany jako Schedule II w kilku stanach USA (Alabama, Michigan).',
 },
 },

 {
 id: 'picamilon',
 name: 'Picamilon',
 image: null,
 accentColor: '#10b981',
 tagColor: 'rgba(16,185,129,0.18)',
 shortDesc: {
 hu: 'Nikotinsav + GABA konjugátum, orosz vényköteles anxiolitikum.',
 en: 'Nicotinic acid + GABA conjugate, Russian prescription anxiolytic.',
 pl: 'Koniugat kwasu nikotynowego + GABA, rosyjski lek anksjolityczny na receptę.',
 },
 description: {
 hu: 'A Picamilon (Pikatropin) szovjet fejlesztés (1969, All-Union Vitamin Research Institute), amelyben a nikotinsav (B3-vitamin) GABA-val van amid-kötéssel összekapcsolva. A nikotinsav-rész értágítóként segíti az agyi vérátáramlást, miközben a vér-agy gát átlépése után a konjugátum hidrolizál → GABA szabadul fel. Oroszországban vényköteles, USA-ban az FDA 2015-ben kivonta a kiegészítő-piacról.',
 en: 'Picamilon (Pikatropin) is a Soviet development (1969, All-Union Vitamin Research Institute) in which nicotinic acid (vitamin B3) is linked to GABA by an amide bond. The nicotinic acid moiety vasodilates and supports cerebral blood flow; after crossing the blood-brain barrier the conjugate hydrolyzes → GABA is released. Prescription-only in Russia; the FDA removed it from the US supplement market in 2015.',
 pl: 'Pikamilon (Pikatropin) to opracowanie radzieckie (1969, All-Union Vitamin Research Institute), w którym kwas nikotynowy (witamina B3) jest połączony z GABA wiązaniem amidowym. Reszta kwasu nikotynowego rozszerza naczynia i wspiera mózgowy przepływ krwi; po przekroczeniu bariery krew-mózg koniugat hydrolizuje → uwalniany jest GABA. Na receptę w Rosji; FDA usunęła go z amerykańskiego rynku suplementów w 2015.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'GABA-prodrug + vazodilatáció', en: 'GABA prodrug + vasodilation', pl: 'Prodrug GABA + rozszerzenie naczyń' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~0.5 óra (gyors hidrolízis)', en: '~0.5 h (rapid hydrolysis)', pl: '~0,5 h (szybka hydroliza)' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Oroszország Rx / USA: tiltva (2015)', en: 'Russia Rx / USA: removed (2015)', pl: 'Rosja Rx / USA: wycofany (2015)' } },
 ],
 mechanism: {
 hu: 'GABA-prodrug: a nikotinsav-konjugáció segíti az átjutást a vér-agy gáton, ahol amidáz-hidrolízissel GABA szabadul fel. A nikotinsav-frakció önmagában cerebrális vazodilatációt is okoz.',
 en: 'GABA prodrug: the nicotinic acid conjugation aids passage through the blood-brain barrier, where amidase hydrolysis releases GABA. The nicotinic acid fraction itself also produces cerebral vasodilation.',
 pl: 'Prodrug GABA: koniugacja z kwasem nikotynowym ułatwia przejście przez barierę krew-mózg, gdzie hydroliza amidazowa uwalnia GABA. Sama frakcja kwasu nikotynowego również powoduje rozszerzenie naczyń mózgowych.',
 },
 legalStatus: {
 hu: 'Oroszországban vényköteles gyógyszer. USA-ban az FDA 2015-ben kimondta, hogy nem felel meg az étrend-kiegészítő definíciónak, és kivonatta a piacról. EU egyéb tagállamokban szabályozatlan.',
 en: 'Prescription medicine in Russia. In 2015 the FDA ruled it does not meet the dietary supplement definition and removed it from the US market. Unregulated in other EU member states.',
 pl: 'Lek na receptę w Rosji. W 2015 r. FDA orzekła, że nie spełnia definicji suplementu diety i usunęła go z rynku amerykańskiego. Niezregulowany w innych państwach UE.',
 },
 },

 // ============================================================
 // EXTRA, Adaptogens + Natural (Task 7, Batch 4)
 // ============================================================

 {
 id: 'bacopa',
 name: 'Bacopa monnieri',
 image: null,
 accentColor: '#84cc16',
 tagColor: 'rgba(132,204,22,0.18)',
 shortDesc: {
 hu: 'Ayurvédikus gyógynövény, bakozid-glikozidok, memória + anxiolítikum.',
 en: 'Ayurvedic herb, bacoside glycosides, memory + anxiolytic.',
 pl: 'Zioło ajurwedyjskie, glikozydy bakozydowe, pamięć + anksjolityk.',
 },
 description: {
 hu: 'A Bacopa monnieri (Brahmi) az ayurvédikus gyógyászat klasszikus „medhya rasayana" (intellektus-tonizáló) gyógynövénye. Hatóanyagai a bakozid A és B (és származékai) triterpén-szaponinok. Több kettősvak placebókontrollált humán vizsgálatban (RCT, 12 hét, 300-600 mg standardizált kivonat) memória- és reakcióidő-javulást írtak le, de az effektusméret szerény.',
 en: 'Bacopa monnieri (Brahmi) is the classical “medhya rasayana” (intellect-tonifying) herb of Ayurvedic medicine. Its actives are bacoside A and B (and derivatives), triterpene saponins. Multiple double-blind placebo-controlled human trials (RCT, 12 weeks, 300-600 mg standardized extract) describe memory and reaction-time improvement, though the effect size is modest.',
 pl: 'Bacopa monnieri (Brahmi) to klasyczne zioło „medhya rasayana” (tonizujące intelekt) medycyny ajurwedyjskiej. Substancjami czynnymi są bakozyd A i B (oraz pochodne), saponiny triterpenowe. Wiele badań klinicznych z podwójnie ślepą próbą i placebo (RCT, 12 tygodni, 300-600 mg standaryzowanego ekstraktu) opisuje poprawę pamięci i czasu reakcji, choć rozmiar efektu jest umiarkowany.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Antioxidáns + cholinerg + BDNF', en: 'Antioxidant + cholinergic + BDNF', pl: 'Antyoksydacyjny + cholinergiczny + BDNF' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '4-12 hét krónikus szedés', en: '4-12 weeks chronic use', pl: '4-12 tygodni przewlekłego stosowania' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC étrend-kiegészítő', en: 'OTC dietary supplement', pl: 'Suplement diety OTC' } },
 ],
 mechanism: {
 hu: 'A bakozidok antioxidáns aktivitást (lipid-peroxidáció gátlás a hippokampuszban), cholinerg facilitációt (AChE-gátlás), és krónikus szedés esetén BDNF-up-regulációt mutatnak, innen ered a memória-javulás 8-12 hetes plató-hatása.',
 en: 'Bacosides exert antioxidant activity (lipid peroxidation inhibition in the hippocampus), cholinergic facilitation (AChE inhibition), and with chronic use BDNF up-regulation, hence the 8-12-week plateau in memory improvement.',
 pl: 'Bakozydy wykazują aktywność antyoksydacyjną (hamowanie peroksydacji lipidów w hipokampie), ułatwianie cholinergiczne (hamowanie AChE) i przy przewlekłym stosowaniu regulację w górę BDNF, stąd plateau 8-12 tygodni w poprawie pamięci.',
 },
 legalStatus: {
 hu: 'Étrend-kiegészítőként szabadon kapható EU-szerte és USA-ban. Indiában gyógynövényként minden boltban elérhető. Magyarországon kiegészítőként szabadon hozzáférhető.',
 en: 'Freely available as a dietary supplement throughout the EU and the USA. Available as a herb in every shop in India. Freely available as a supplement in Hungary.',
 pl: 'Wolno dostępna jako suplement diety w całej UE i USA. Dostępna jako zioło w każdym sklepie w Indiach. Wolno dostępna jako suplement na Węgrzech.',
 },
 },

 {
 id: 'ashwagandha',
 name: 'Ashwagandha',
 image: null,
 accentColor: '#84cc16',
 tagColor: 'rgba(132,204,22,0.18)',
 shortDesc: {
 hu: 'Indiai ginszeng, withanolid-glikozidok, kortizol-csökkentő adaptogén.',
 en: 'Indian ginseng, withanolide glycosides, cortisol-reducing adaptogen.',
 pl: 'Indyjski żeń-szeń, glikozydy witanolidowe, adaptogen obniżający kortyzol.',
 },
 description: {
 hu: 'Az Ashwagandha (Withania somnifera) az ayurvédikus rasayana-medicina egyik leg-szélesebb körben kutatott adaptogénje. Hatóanyagai a withanolid-glikozidok (különösen a withaferin-A és a withanolid-A). Több RCT-ben (KSM-66 és Sensoril standardizált kivonatokkal) statisztikailag szignifikáns kortizol-csökkenést és stressz-tünetek mérséklődését írtak le 60 nap alatt.',
 en: 'Ashwagandha (Withania somnifera) is one of the most extensively researched adaptogens of Ayurvedic rasayana medicine. Its actives are withanolide glycosides (notably withaferin-A and withanolide-A). Several RCTs (using KSM-66 and Sensoril standardized extracts) describe a statistically significant cortisol reduction and easing of stress symptoms over 60 days.',
 pl: 'Ashwagandha (Withania somnifera) to jeden z najszerzej zbadanych adaptogenów ajurwedyjskiej medycyny rasayana. Substancjami czynnymi są glikozydy witanolidowe (szczególnie witaferyna-A i witanolid-A). Kilka RCT (z użyciem standaryzowanych ekstraktów KSM-66 i Sensoril) opisuje statystycznie istotną redukcję kortyzolu i złagodzenie objawów stresu w ciągu 60 dni.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'HPA-tengely moduláció + GABAerg', en: 'HPA-axis modulation + GABAergic', pl: 'Modulacja osi HPA + GABA-ergiczny' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '2-8 hét krónikus szedés', en: '2-8 weeks chronic use', pl: '2-8 tygodni przewlekłego stosowania' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC étrend-kiegészítő', en: 'OTC dietary supplement', pl: 'Suplement diety OTC' } },
 ],
 mechanism: {
 hu: 'A withanolidok modulálják a hipotalamusz-hipofízis-mellékvese (HPA) tengelyt, csökkentik a krónikus stresszre adott kortizol-választ, és GABA-A receptorokra is hatnak (anxiolitikus szál). Mellékhatásként TSH/T4-emelés és immunomoduláció.',
 en: 'Withanolides modulate the hypothalamic-pituitary-adrenal (HPA) axis, lowering the cortisol response to chronic stress, and also act at GABA-A receptors (anxiolytic arm). Secondary effects include TSH/T4 elevation and immunomodulation.',
 pl: 'Witanolidy modulują oś podwzgórze-przysadka-nadnercza (HPA), obniżając reakcję kortyzolową na przewlekły stres, a także działają na receptory GABA-A (ramię anksjolityczne). Efekty wtórne obejmują podniesienie TSH/T4 i immunomodulację.',
 },
 legalStatus: {
 hu: 'OTC étrend-kiegészítő EU-szerte és USA-ban. Dánia 2020 óta tiltja az ashwagandha-tartalmú étrend-kiegészítőket. Magyarországon kiegészítőként szabadon kapható.',
 en: 'OTC dietary supplement throughout the EU and the USA. Denmark has banned ashwagandha-containing dietary supplements since 2020. Freely available as a supplement in Hungary.',
 pl: 'Suplement diety OTC w całej UE i USA. Dania zakazała suplementów diety zawierających ashwagandhę od 2020 r. Wolno dostępna jako suplement na Węgrzech.',
 },
 },

 {
 id: 'rhodiola',
 name: 'Rhodiola rosea',
 image: null,
 accentColor: '#84cc16',
 tagColor: 'rgba(132,204,22,0.18)',
 shortDesc: {
 hu: 'Sarki gyökér, salidrozid + rozavin, fáradtság-ellenes adaptogén.',
 en: 'Arctic root, salidroside + rosavin, anti-fatigue adaptogen.',
 pl: 'Arktyczny korzeń, salidrozyd + rozawina, adaptogen przeciwzmęczeniowy.',
 },
 description: {
 hu: 'A Rhodiola rosea (sarki gyökér, „arany gyökér") arktikus magasföldek lakossága körében évszázadok óta használt fáradtság-ellenes gyógynövény. Aktív komponensei a salidrozid (tirozol-glikozid) és a rozavin-csoport. RCT-k mentális fáradtság, kiégés és enyhe depresszió indikációkban statisztikailag szignifikáns javulást találtak, különösen rövid távú (4-12 hét) szedésnél.',
 en: 'Rhodiola rosea (arctic root, “golden root”) is an anti-fatigue herb used for centuries by populations of arctic uplands. Its active components are salidroside (a tyrosol glycoside) and the rosavin group. RCTs in mental fatigue, burnout and mild depression have found statistically significant improvement, particularly with short-term (4-12 weeks) use.',
 pl: 'Rhodiola rosea (arktyczny korzeń, „złoty korzeń”) to zioło przeciwzmęczeniowe stosowane od stuleci przez ludność arktycznych wyżyn. Jej aktywnymi składnikami są salidrozyd (glikozyd tyrozolowy) i grupa rozawinowa. RCT w zmęczeniu psychicznym, wypaleniu zawodowym i łagodnej depresji wykazały statystycznie istotną poprawę, szczególnie przy krótkoterminowym (4-12 tygodni) stosowaniu.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Monoaminerg + HPA-moduláció', en: 'Monoaminergic + HPA modulation', pl: 'Monoaminergiczna + modulacja HPA' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '1-4 hét', en: '1-4 weeks', pl: '1-4 tygodni' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC + EU hagyományos gyógynövény', en: 'OTC + EU traditional herbal medicine', pl: 'OTC + UE tradycyjny lek ziołowy' } },
 ],
 mechanism: {
 hu: 'A salidrozid és rozavin mérsékli a monoamin-oxidáz (MAO-A és MAO-B) aktivitását → emelt szerotonin, dopamin és noradrenalin szintek; emellett HPA-tengely-stabilizáló és COMT-modulátor hatások.',
 en: 'Salidroside and rosavin mildly inhibit monoamine oxidase (MAO-A and MAO-B) → elevated serotonin, dopamine and noradrenaline levels; additional HPA axis-stabilizing and COMT-modulator effects.',
 pl: 'Salidrozyd i rozawina łagodnie hamują monoaminooksydazę (MAO-A i MAO-B) → podwyższone poziomy serotoniny, dopaminy i noradrenaliny; dodatkowe efekty stabilizujące oś HPA i modulujące COMT.',
 },
 legalStatus: {
 hu: 'EU-ban az EMA HMPC „Traditional Herbal Medicinal Product" minősítést adta (Rhodiolae rhizoma et radix). USA-ban OTC étrend-kiegészítő. Magyarországon kiegészítőként szabadon kapható.',
 en: 'In the EU, the EMA HMPC granted “Traditional Herbal Medicinal Product” status (Rhodiolae rhizoma et radix). OTC dietary supplement in the USA. Freely available as a supplement in Hungary.',
 pl: 'W UE EMA HMPC nadała status „Tradycyjnego Ziołowego Produktu Leczniczego” (Rhodiolae rhizoma et radix). OTC suplement diety w USA. Wolno dostępna jako suplement na Węgrzech.',
 },
 },

 {
 id: 'lions-mane',
 name: 'Lion`s Mane',
 image: null,
 accentColor: '#84cc16',
 tagColor: 'rgba(132,204,22,0.18)',
 shortDesc: {
 hu: 'Süngomba, hericenonok + erinacinok, NGF-szintézis indukció.',
 en: 'Hedgehog mushroom, hericenones + erinacines, NGF synthesis induction.',
 pl: 'Soplówka jeżowata, herycenony + erynacyny, indukcja syntezy NGF.',
 },
 description: {
 hu: 'A Lion`s Mane (Hericium erinaceus, magyarul süngomba) ehető gyógygomba, amelynek termőtest-kivonata hericenonokat (H1-H10), micélium-kivonata pedig erinacinokat (A-I) tartalmaz. Mindkét vegyületcsoport in vitro és in vivo nerve growth factor (NGF) szintézis-induktor. Egy 2009-es japán kettősvak placebókontrollált humán vizsgálat enyhe kognitív károsodásban szignifikáns javulást írt le.',
 en: 'Lion`s Mane (Hericium erinaceus) is an edible medicinal mushroom whose fruiting body extract contains hericenones (H1-H10) and whose mycelium extract contains erinacines (A-I). Both compound classes are nerve growth factor (NGF) synthesis inducers in vitro and in vivo. A 2009 Japanese double-blind placebo-controlled human trial described significant improvement in mild cognitive impairment.',
 pl: 'Soplówka jeżowata (Hericium erinaceus) to jadalny grzyb leczniczy, którego ekstrakt z owocnika zawiera herycenony (H1-H10), a ekstrakt z grzybni, erynacyny (A-I). Obie klasy związków są induktorami syntezy nerve growth factor (NGF) in vitro i in vivo. Japońskie badanie kliniczne z podwójnie ślepą próbą i placebo z 2009 r. opisało istotną poprawę w łagodnym zaburzeniu poznawczym.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'NGF + BDNF szintézis-induktor', en: 'NGF + BDNF synthesis inducer', pl: 'Induktor syntezy NGF + BDNF' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '4-16 hét krónikus szedés', en: '4-16 weeks chronic use', pl: '4-16 tygodni przewlekłego stosowania' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC élelmiszer + étrend-kiegészítő', en: 'OTC food + dietary supplement', pl: 'OTC żywność + suplement diety' } },
 ],
 mechanism: {
 hu: 'A hericenonok (vér-agy gáton ÁTHATOLÓ kis molekulák) és erinacinok közvetlenül indukálják a NGF mRNS-transzkripcióját asztrocitákban → emelt NGF és BDNF szintézis, perifériás és centrális neuronok mielinizációja.',
 en: 'Hericenones (blood-brain-barrier crossing small molecules) and erinacines directly induce NGF mRNA transcription in astrocytes → elevated NGF and BDNF synthesis, myelination of peripheral and central neurons.',
 pl: 'Herycenony (małe cząsteczki przenikające barierę krew-mózg) i erynacyny bezpośrednio indukują transkrypcję mRNA NGF w astrocytach → podwyższoną syntezę NGF i BDNF, mielinizację neuronów obwodowych i ośrodkowych.',
 },
 legalStatus: {
 hu: 'Ehető élelmiszer-gomba és OTC étrend-kiegészítő EU-szerte és USA-ban. EU-ban a kivonatok „Novel Food" engedélyezést igényelhetnek. Magyarországon szabadon kapható.',
 en: 'Edible food mushroom and OTC dietary supplement throughout the EU and the USA. In the EU, extracts may require “Novel Food” authorization. Freely available in Hungary.',
 pl: 'Jadalny grzyb spożywczy i OTC suplement diety w całej UE i USA. W UE ekstrakty mogą wymagać autoryzacji „Nowa Żywność”. Wolno dostępny na Węgrzech.',
 },
 },

 {
 id: 'l-theanine',
 name: 'L-Theanine',
 image: null,
 accentColor: '#84cc16',
 tagColor: 'rgba(132,204,22,0.18)',
 shortDesc: {
 hu: 'Zöld tea aminosav, γ-glutamil-etilamid, α-hullám fokozó.',
 en: 'Green tea amino acid, γ-glutamyl-ethylamide, α-wave enhancer.',
 pl: 'Aminokwas zielonej herbaty, γ-glutamylo-etyloamid, wzmacniacz fal α.',
 },
 description: {
 hu: 'Az L-Theanin (N-etil-L-glutamin) szabad aminosav, amely a Camellia sinensis (zöld tea) levelek fő nem-fehérje-aminosav komponense. Vér-agy gáton áthatol, és EEG α-hullám-aktivitást fokoz nyugodt-ébrenléti állapotban. Koffeinnel kombinálva (klasszikus L-theanin:koffein 2:1 protokoll) szinergisztikusan javítja a fókuszt és csökkenti a koffein-szorongást.',
 en: 'L-Theanine (N-ethyl-L-glutamine) is a free amino acid, the main non-protein amino acid component of Camellia sinensis (green tea) leaves. It crosses the blood-brain barrier and enhances EEG α-wave activity in the relaxed-awake state. Combined with caffeine (the classical L-theanine:caffeine 2:1 protocol) it synergistically improves focus and reduces caffeine-induced anxiety.',
 pl: 'L-Teanina (N-etylo-L-glutamina) to wolny aminokwas, główny niebiałkowy aminokwas liści Camellia sinensis (zielonej herbaty). Przenika barierę krew-mózg i zwiększa aktywność fal α w EEG w stanie zrelaksowanej czuwania. Połączona z kofeiną (klasyczny protokół L-teanina:kofeina 2:1) synergistycznie poprawia koncentrację i zmniejsza lęk wywołany kofeiną.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'GABA + α-hullám + glutamát-moduláció', en: 'GABA + α-wave + glutamate modulation', pl: 'GABA + fale α + modulacja glutaminianu' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '30-45 perc orálisan', en: '30-45 min oral', pl: '30-45 min doustnie' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC élelmiszer + étrend-kiegészítő', en: 'OTC food + dietary supplement', pl: 'OTC żywność + suplement diety' } },
 ],
 mechanism: {
 hu: 'GABA, glicin és dopamin szintézis-fokozó; NMDA-receptor parciális antagonista; emeli az α-hullám tartalmat az EEG-n → „nyugodt fókusz" állapot. Koffeinnel ellensúlyozza a vazokonstrikciót és a szorongást.',
 en: 'Increases GABA, glycine and dopamine synthesis; partial NMDA-receptor antagonist; raises α-wave content on EEG → “calm focus” state. With caffeine it offsets vasoconstriction and anxiety.',
 pl: 'Zwiększa syntezę GABA, glicyny i dopaminy; częściowy antagonista receptora NMDA; podnosi zawartość fal α w EEG → stan „spokojnej koncentracji”. Z kofeiną kompensuje zwężenie naczyń i lęk.',
 },
 legalStatus: {
 hu: 'Élelmiszer-aminosav, OTC étrend-kiegészítő EU-szerte és USA-ban. FDA GRAS minősítés. Magyarországon szabadon kapható.',
 en: 'Food amino acid, OTC dietary supplement throughout the EU and the USA. FDA GRAS status. Freely available in Hungary.',
 pl: 'Aminokwas spożywczy, OTC suplement diety w całej UE i USA. Status FDA GRAS. Wolno dostępna na Węgrzech.',
 },
 },

 {
 id: 'tongkat-ali',
 name: 'Tongkat Ali',
 image: null,
 accentColor: '#84cc16',
 tagColor: 'rgba(132,204,22,0.18)',
 shortDesc: {
 hu: 'Maláj „longjack", quassinoidok + eurycomanon, tesztoszteron-támogatás.',
 en: 'Malaysian “longjack”, quassinoids + eurycomanone, testosterone support.',
 pl: 'Malezyjski „longjack”, kwasynoidy + eurykomanon, wsparcie testosteronu.',
 },
 description: {
 hu: 'A Tongkat Ali (Eurycoma longifolia, „longjack") délkelet-ázsiai gyökér-gyógynövény. Hatóanyagai a quassinoidok (különösen az eurycomanon) és a glikoprotein-frakció (Physta® extrakt). Több RCT-ben (200-400 mg/nap, 4-12 hét) szignifikáns SHBG-csökkenést és szérum-tesztoszteron-emelést írtak le hipogonadális vagy stresszelt férfiaknál, eu-androgén férfiaknál a hatás kisebb.',
 en: 'Tongkat Ali (Eurycoma longifolia, “longjack”) is a Southeast Asian root herb. Its actives are quassinoids (notably eurycomanone) and a glycoprotein fraction (Physta® extract). Multiple RCTs (200-400 mg/day, 4-12 weeks) describe significant SHBG reduction and serum testosterone elevation in hypogonadal or stressed men, the effect is smaller in eugonadal men.',
 pl: 'Tongkat Ali (Eurycoma longifolia, „longjack”) to południowoazjatyckie korzeniowe zioło. Jego substancje czynne to kwasynoidy (zwłaszcza eurykomanon) i frakcja glikoproteinowa (ekstrakt Physta®). Wiele RCT (200-400 mg/dobę, 4-12 tygodni) opisuje istotne obniżenie SHBG i podniesienie testosteronu w surowicy u mężczyzn hipogonadalnych lub zestresowanych, efekt jest mniejszy u mężczyzn eugonadalnych.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'SHBG-csökkentés + kortizol-moduláció', en: 'SHBG reduction + cortisol modulation', pl: 'Obniżenie SHBG + modulacja kortyzolu' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '2-12 hét krónikus szedés', en: '2-12 weeks chronic use', pl: '2-12 tygodni przewlekłego stosowania' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC étrend-kiegészítő', en: 'OTC dietary supplement', pl: 'Suplement diety OTC' } },
 ],
 mechanism: {
 hu: 'Az eurycomanon csökkenti az SHBG-t (szex-hormon-kötő globulin) → emelt szabad tesztoszteron-frakció; emellett kortizol/tesztoszteron arány-csökkentés stressz-állapotban. Mellék-aromatáz-gátlás (csökkent T→E2 konverzió) is leírt.',
 en: 'Eurycomanone lowers SHBG (sex hormone-binding globulin) → elevated free testosterone fraction; additionally lowers the cortisol/testosterone ratio under stress. Secondary aromatase inhibition (reduced T→E2 conversion) is also described.',
 pl: 'Eurykomanon obniża SHBG (globulinę wiążącą hormony płciowe) → podwyższoną frakcję wolnego testosteronu; dodatkowo obniża stosunek kortyzol/testosteron w stresie. Opisano także wtórne hamowanie aromatazy (zmniejszona konwersja T→E2).',
 },
 legalStatus: {
 hu: 'OTC étrend-kiegészítő EU-szerte és USA-ban. Malajziában „Novel Health Supplement" minősítés. Sportolóknál WADA-listán NEM tiltott. Magyarországon szabadon kapható.',
 en: 'OTC dietary supplement throughout the EU and the USA. Holds “Novel Health Supplement” status in Malaysia. NOT on the WADA prohibited list for athletes. Freely available in Hungary.',
 pl: 'Suplement diety OTC w całej UE i USA. Posiada status „Nowy Suplement Zdrowotny” w Malezji. NIE jest na liście zakazanej WADA dla sportowców. Wolno dostępny na Węgrzech.',
 },
 },

 // ============================================================
 // EXTRA, Neuroprotective (Task 7, Batch 5)
 // ============================================================

 {
 id: 'cerebrolysin',
 name: 'Cerebrolysin',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'Sertés-agy peptid-hidrolizátum, EU Rx, stroke + demencia.',
 en: 'Porcine brain peptide hydrolysate, EU Rx, stroke + dementia.',
 pl: 'Hydrolizat peptydowy z mózgu świni, UE Rx, udar + otępienie.',
 },
 description: {
 hu: 'A Cerebrolysin (EVER Pharma, Ausztria) sertés-agykéregből kivont, peptid- és szabad aminosav-frakciókra hidrolizált biológiai gyógyszer. Több randomizált klinikai vizsgálatban (akut ischaemiás stroke, vaszkuláris demencia, traumás agysérülés) szignifikáns funkcionális regenerációs javulást írtak le. Magyarországon és számos EU-tagállamban i.v./i.m. injekcióként vényköteles.',
 en: 'Cerebrolysin (EVER Pharma, Austria) is a biological medicine hydrolyzed from porcine brain cortex into peptide and free amino acid fractions. Multiple randomized clinical trials (acute ischemic stroke, vascular dementia, traumatic brain injury) describe significant functional-recovery improvement. It is prescription-only as an i.v./i.m. injection in Hungary and several EU member states.',
 pl: 'Cerebrolysin (EVER Pharma, Austria) to biologiczny lek hydrolizowany z kory mózgu świni do frakcji peptydowych i wolnych aminokwasów. Wiele randomizowanych badań klinicznych (ostry udar niedokrwienny, otępienie naczyniowe, urazowe uszkodzenie mózgu) opisuje istotną poprawę funkcjonalnej regeneracji. Jest na receptę w postaci wstrzyknięć i.v./i.m. na Węgrzech i w kilku państwach UE.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Neurotrofikus + neuroprotektív peptidek', en: 'Neurotrophic + neuroprotective peptides', pl: 'Peptydy neurotroficzne + neuroprotekcyjne' } },
 { label: { hu: 'Beadás', en: 'Route', pl: 'Droga podania' },
 value: { hu: 'i.v. / i.m. injekció', en: 'i.v. / i.m. injection', pl: 'wstrzyknięcie i.v. / i.m.' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'EU vényköteles (HU, AT)', en: 'EU Rx (HU, AT)', pl: 'UE na receptę (HU, AT)' } },
 ],
 mechanism: {
 hu: 'A peptid-frakciók NGF-, BDNF- és GDNF-szerű neurotrofikus aktivitást mutatnak, csökkentik az ischaemia-indukált excitotoxicitást és apoptózist, és serkentik a neurogenezist a szubventrikuláris zónában.',
 en: 'The peptide fractions exhibit NGF-, BDNF- and GDNF-like neurotrophic activity, reduce ischemia-induced excitotoxicity and apoptosis, and stimulate neurogenesis in the subventricular zone.',
 pl: 'Frakcje peptydowe wykazują aktywność neurotroficzną podobną do NGF, BDNF i GDNF, zmniejszają ekscytotoksyczność i apoptozę indukowaną niedokrwieniem oraz stymulują neurogenezę w strefie podkomorowej.',
 },
 legalStatus: {
 hu: 'Vényköteles gyógyszer Magyarországon, Ausztriában, Lengyelországban és számos EU/orosz államban. USA-ban nem FDA-jóváhagyott.',
 en: 'Prescription medicine in Hungary, Austria, Poland and many EU/Russian states. Not FDA-approved in the USA.',
 pl: 'Lek na receptę na Węgrzech, w Austrii, Polsce i wielu państwach UE/rosyjskich. Niezatwierdzony przez FDA w USA.',
 },
 },

 {
 id: 'cortexin',
 name: 'Cortexin',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'Marha-agykéreg polipeptid kivonat, orosz Rx, neurológiai indikációk.',
 en: 'Bovine cortex polypeptide extract, Russian Rx, neurological indications.',
 pl: 'Ekstrakt polipeptydowy z kory wołowej, rosyjski Rx, wskazania neurologiczne.',
 },
 description: {
 hu: 'A Cortexin (Geropharm, Oroszország) szarvasmarha- és sertés-agykéregből izolált, alacsony molekulatömegű (<10 kDa) polipeptid-frakció. Oroszországban vényköteles i.m. injekció, indikációi: enkefalopátiák, gyermekgyógyászati fejlődési zavarok, stroke utáni állapotok. Klinikai bizonyítékai főleg orosz nyelvű publikációkból származnak; nyugati irodalomban korlátozottan elérhető.',
 en: 'Cortexin (Geropharm, Russia) is a low-molecular-weight (<10 kDa) polypeptide fraction isolated from bovine and porcine brain cortex. It is a prescription i.m. injection in Russia, indicated for encephalopathy, paediatric developmental disorders, post-stroke states. Clinical evidence is mainly from Russian-language publications; coverage in Western literature is limited.',
 pl: 'Korteksyna (Geropharm, Rosja) to niskocząsteczkowa (<10 kDa) frakcja polipeptydowa wyizolowana z kory mózgu wołowej i świńskiej. W Rosji jest na receptę w postaci wstrzyknięcia i.m., wskazania: encefalopatie, pediatryczne zaburzenia rozwojowe, stany po udarze. Dowody kliniczne pochodzą głównie z publikacji w języku rosyjskim; pokrycie w literaturze zachodniej jest ograniczone.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Neurotrofikus polipeptid-kivonat', en: 'Neurotrophic polypeptide extract', pl: 'Ekstrakt polipeptydowy neurotroficzny' } },
 { label: { hu: 'Beadás', en: 'Route', pl: 'Droga podania' },
 value: { hu: 'i.m. injekció', en: 'i.m. injection', pl: 'wstrzyknięcie i.m.' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Oroszország + FÁK Rx', en: 'Russia + CIS Rx', pl: 'Rosja + WNP Rx' } },
 ],
 mechanism: {
 hu: 'A kis molekulatömegű polipeptidek neurotrofikus (BDNF-szerű) aktivitást, antioxidáns és anti-excitotoxikus hatást mutatnak. A nyugati farmakológiai irodalomban a pontos hatóanyag-azonosítás hiányos.',
 en: 'The low-molecular-weight polypeptides show neurotrophic (BDNF-like) activity and antioxidant and anti-excitotoxic effects. Precise active ingredient identification is incomplete in Western pharmacology literature.',
 pl: 'Niskocząsteczkowe polipeptydy wykazują aktywność neurotroficzną (podobną do BDNF) oraz działanie antyoksydacyjne i przeciw ekscytotoksyczne. Dokładna identyfikacja substancji czynnych jest niekompletna w zachodniej literaturze farmakologicznej.',
 },
 legalStatus: {
 hu: 'Oroszországban, Belaruszban, Ukrajnában és néhány FÁK-államban vényköteles. EU és USA nem jóváhagyott.',
 en: 'Prescription-only in Russia, Belarus, Ukraine and several CIS states. Not approved in the EU or USA.',
 pl: 'Na receptę w Rosji, Białorusi, Ukrainie i kilku państwach WNP. Niezatwierdzona w UE ani USA.',
 },
 },

 {
 id: 'dihexa',
 name: 'Dihexa',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'Angiotensin IV analóg, HGF/c-Met agonista, hippokampális szinapszis-építő.',
 en: 'Angiotensin IV analog, HGF/c-Met agonist, hippocampal synapse builder.',
 pl: 'Analog angiotensyny IV, agonista HGF/c-Met, budowniczy synaps w hipokampie.',
 },
 description: {
 hu: 'A Dihexa (N-hexanoyl-Tyr-Ile-(6) aminohexanoic amide, PNB-0408) az Angiotensin IV peptid kis-molekulájú származéka, amelyet a Washington State University-n Joseph Harding csoportja fejlesztett ki Alzheimer-kór és más kognitív zavarok modelljére. Preklinikai vizsgálatokban erős hippokampális szinaptogén aktivitást mutat. Humán klinikai vizsgálat egyáltalán nincs.',
 en: 'Dihexa (N-hexanoyl-Tyr-Ile-(6) aminohexanoic amide, PNB-0408) is a small-molecule derivative of the Angiotensin IV peptide developed at Washington State University by Joseph Harding`s group for Alzheimer`s and other cognitive-impairment models. Preclinical studies show strong hippocampal synaptogenic activity. No human clinical trials exist.',
 pl: 'Diheksa (N-heksanoyl-Tyr-Ile-(6) amid aminoheksanowy, PNB-0408) to małocząsteczkowa pochodna peptydu Angiotensyny IV, opracowana na Washington State University przez grupę Josepha Hardinga dla modeli choroby Alzheimera i innych zaburzeń poznawczych. Badania przedkliniczne wykazują silną aktywność synaptogenną w hipokampie. Brak badań klinicznych u ludzi.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'HGF/c-Met receptor agonista', en: 'HGF/c-Met receptor agonist', pl: 'Agonista receptora HGF/c-Met' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: 'Nincs humán adat', en: 'No human data', pl: 'Brak danych u ludzi' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'Kísérleti, sehol jóváhagyva', en: 'Investigational, not approved', pl: 'Badawczy, nie zatwierdzony' } },
 ],
 mechanism: {
 hu: 'Hepatocyte Growth Factor (HGF) / c-Met receptor agonista, a c-Met aktivációja a hippokampuszban erős szinaptogén kaszkádot indít el, az állat-modellekben becsült potencitás ~10⁷× nagyobb a BDNF-énél bizonyos végpontokon.',
 en: 'Hepatocyte Growth Factor (HGF) / c-Met receptor agonist, c-Met activation in the hippocampus triggers a strong synaptogenic cascade; in animal models estimated potency is ~10⁷× higher than BDNF on certain endpoints.',
 pl: 'Agonista receptora Hepatocyte Growth Factor (HGF) / c-Met, aktywacja c-Met w hipokampie wyzwala silną kaskadę synaptogenną; w modelach zwierzęcych szacowana potencja jest ~10⁷× wyższa niż BDNF na pewnych punktach końcowych.',
 },
 legalStatus: {
 hu: 'Sehol nem jóváhagyott gyógyszer; csak akadémiai és „research chemical" kategóriában forgalmazott, humán biztonsági adat nincs.',
 en: 'Not approved as a medicine anywhere; sold only in academic and “research chemical” categories, no human safety data exists.',
 pl: 'Nigdzie nie zatwierdzona jako lek; sprzedawana tylko w kategoriach akademickich i „chemikaliów badawczych”, brak danych o bezpieczeństwie u ludzi.',
 },
 },

 {
 id: 'methylene-blue',
 name: 'Methylene Blue',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'Mitokondriális elektronhordozó, FDA Rx methemoglobinémiára, alacsony dózisú nootropikum.',
 en: 'Mitochondrial electron carrier, FDA Rx for methemoglobinemia, low-dose nootropic.',
 pl: 'Mitochondrialny nośnik elektronów, FDA Rx na methemoglobinemię, nootropik w niskiej dawce.',
 },
 description: {
 hu: 'A Metilénkék (methylthioninium chloride) klasszikus fenotiazin-festék, amely FDA-jóváhagyott gyógyszer methemoglobinémia kezelésére (Provayblue®). Alacsony dózisban (0.5-4 mg/kg, USP-gyógyszerkönyvi tisztaságú) nootropikus hatást írtak le: mitokondriális elektronhordozóként az aerob anyagcserét és az ATP-szintézist segíti, preklinikai modellekben memóriajavulást és neuroprotekciót okoz.',
 en: 'Methylene Blue (methylthioninium chloride) is a classical phenothiazine dye and an FDA-approved drug for methemoglobinemia (Provayblue®). At low doses (0.5-4 mg/kg, USP-grade purity) a nootropic effect has been described: as a mitochondrial electron carrier it supports aerobic metabolism and ATP synthesis, preclinical models show memory improvement and neuroprotection.',
 pl: 'Błękit metylenowy (chlorek metylotioniny) to klasyczny barwnik fenotiazynowy i lek zatwierdzony przez FDA na methemoglobinemię (Provayblue®). W niskich dawkach (0,5-4 mg/kg, czystość farmakopealna USP) opisano efekt nootropowy: jako mitochondrialny nośnik elektronów wspiera metabolizm tlenowy i syntezę ATP, modele przedkliniczne wykazują poprawę pamięci i neuroprotekcję.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'Mitokondriális elektronhordozó + MAO-A', en: 'Mitochondrial electron carrier + MAO-A', pl: 'Mitochondrialny nośnik elektronów + MAO-A' } },
 { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
 value: { hu: '~5-6.5 óra', en: '~5-6.5 h', pl: '~5-6,5 h' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'FDA Rx (methemoglobinémia)', en: 'FDA Rx (methemoglobinemia)', pl: 'FDA Rx (methemoglobinemia)' } },
 ],
 mechanism: {
 hu: 'A mitokondriális elektrontranszportláncban alternatív elektron-shuttle-ként szerepel a komplex I/III diszfunkciójánál, fokozza a citokróm-c-oxidáz aktivitást, és magas dózisban szelektív MAO-A inhibitor (szerotonin szindróma kockázat SSRI-vel).',
 en: 'In the mitochondrial electron transport chain it acts as an alternative electron shuttle under complex I/III dysfunction, increasing cytochrome-c oxidase activity; at higher doses it is a selective MAO-A inhibitor (serotonin syndrome risk with SSRIs).',
 pl: 'W mitochondrialnym łańcuchu transportu elektronów działa jako alternatywny wahadłowiec elektronowy przy dysfunkcji kompleksu I/III, zwiększając aktywność oksydazy cytochromu-c; w wyższych dawkach jest selektywnym inhibitorem MAO-A (ryzyko zespołu serotoninowego z SSRI).',
 },
 legalStatus: {
 hu: 'FDA-jóváhagyott gyógyszer methemoglobinémiára (Provayblue®). Az USA-ban és EU-ban USP-tisztaságú formája csak vényre, „nootropikum-célú" off-label használata szürke zóna. Ipari festékként árusított minőség NEM gyógyszerészeti.',
 en: 'FDA-approved drug for methemoglobinemia (Provayblue®). USP-grade is prescription-only in the USA and EU; “nootropic-purpose” off-label use is a grey zone. Industrial-dye-grade is NOT pharmaceutical.',
 pl: 'Lek zatwierdzony przez FDA na methemoglobinemię (Provayblue®). Czystość USP jest na receptę w USA i UE; off-label „nootropowe” zastosowanie jest szarą strefą. Jakość barwnika przemysłowego NIE jest farmaceutyczna.',
 },
 },

 {
 id: 'magnesium-l-threonate',
 name: 'Magnesium L-Threonate',
 image: null,
 accentColor: '#00ff99',
 tagColor: 'rgba(0,255,153,0.18)',
 shortDesc: {
 hu: 'MIT-fejlesztésű Mg-kelát (Magtein®), szinaptikus Mg²⁺-emelő.',
 en: 'MIT-developed Mg chelate (Magtein®), synaptic Mg²⁺ booster.',
 pl: 'Chelat Mg opracowany na MIT (Magtein®), wzmacniacz synaptycznego Mg²⁺.',
 },
 description: {
 hu: 'A Magnézium-L-treonát (Magtein®) az MIT-en Liu Guosong és Susumu Tonegawa csoportja által fejlesztett szabadalmaztatott magnézium-kelát, amelyben a treonsav-konjugáció miatt a magnézium-ion a többi formánál hatékonyabban hatol be a központi idegrendszerbe. Patkány-vizsgálatok szinaptikus sűrűség- és LTP-növekedést mutattak, két kis humán RCT pedig kognitív funkció-javulást írt le idősebb felnőtteknél.',
 en: 'Magnesium L-Threonate (Magtein®) is a proprietary magnesium chelate developed at MIT by Liu Guosong and Susumu Tonegawa, in which the threonic-acid conjugation lets magnesium ions penetrate the CNS more efficiently than other forms. Rat studies show synaptic density and LTP increases; two small human RCTs describe cognitive function improvement in older adults.',
 pl: 'L-Treonian magnezu (Magtein®) to opatentowany chelat magnezu opracowany na MIT przez Liu Guosonga i Susumu Tonegawę, w którym koniugacja z kwasem treonowym pozwala jonom magnezu skuteczniej przenikać do OUN niż innym formom. Badania na szczurach wykazują wzrost gęstości synaptycznej i LTP; dwa małe RCT u ludzi opisują poprawę funkcji poznawczych u starszych dorosłych.',
 },
 keyInfo: [
 { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
 value: { hu: 'CNS-emelt Mg²⁺ + NMDA-moduláció', en: 'CNS-elevated Mg²⁺ + NMDA modulation', pl: 'Podwyższony Mg²⁺ w OUN + modulacja NMDA' } },
 { label: { hu: 'Hatásbeállás', en: 'Onset', pl: 'Początek działania' },
 value: { hu: '4-12 hét krónikus szedés', en: '4-12 weeks chronic use', pl: '4-12 tygodni przewlekłego stosowania' } },
 { label: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' },
 value: { hu: 'OTC étrend-kiegészítő', en: 'OTC dietary supplement', pl: 'Suplement diety OTC' } },
 ],
 mechanism: {
 hu: 'Emelt agyi Mg²⁺-szintek modulálják az NMDA-receptort (a fiziológiás Mg²⁺-blokk visszaállítása), erősítik az LTD/LTP egyensúlyt, és növelik a dendritikus tüske-sűrűséget a prefrontális kéregben és a hippokampuszban.',
 en: 'Elevated brain Mg²⁺ levels modulate the NMDA receptor (restoring the physiological Mg²⁺ block), strengthen the LTD/LTP balance, and increase dendritic spine density in the prefrontal cortex and hippocampus.',
 pl: 'Podwyższone poziomy Mg²⁺ w mózgu modulują receptor NMDA (przywracając fizjologiczny blok Mg²⁺), wzmacniają równowagę LTD/LTP i zwiększają gęstość kolców dendrytycznych w korze przedczołowej i hipokampie.',
 },
 legalStatus: {
 hu: 'OTC étrend-kiegészítő EU-szerte és USA-ban. FDA GRAS minősítés a Magtein® márkára. Magyarországon szabadon kapható.',
 en: 'OTC dietary supplement throughout the EU and the USA. FDA GRAS status for the Magtein® brand. Freely available in Hungary.',
 pl: 'Suplement diety OTC w całej UE i USA. Status FDA GRAS dla marki Magtein®. Wolno dostępny na Węgrzech.',
 },
 },
]
