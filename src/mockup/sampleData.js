// Sample peptide data for the pep-pedia inspired mockup.
// Structure mirrors what pep-pedia.org/peptides/<slug> exposes per entry,
// adapted to MolekulaX i18n + design tokens. Not wired into the live data;
// intentionally isolated under src/mockup/.

export const SAMPLE_PEPTIDES = [
  {
    id: '5-amino-1mq',
    name: '5-Amino-1MQ',
    fullName: '5-Amino-1-methylquinolinium iodide',
    synonyms: ['5-amino-1-MQ', 'NNMT inhibitor'],
    image: '/peptides/Epithalon.png', // sample vial reuse
    accentColor: '#a78bfa',
    tier: 2,
    tierLabel: { hu: 'Preklinikai', en: 'Preclinical', pl: 'Przedkliniczne' },
    category: { hu: 'Anyagcsere / Súlykontroll', en: 'Metabolic', pl: 'Metabolizm' },
    oneLiner: {
      hu: 'NNMT-inhibitor — fokozza az NAD+ szintet, támogatja a lipid-anyagcserét és izomszövetet',
      en: 'NNMT inhibitor — boosts NAD+ availability, supports lipid metabolism and muscle tissue',
      pl: 'Inhibitor NNMT — zwiększa NAD+, wspiera metabolizm lipidów i tkankę mięśniową',
    },
    keyFacts: [
      { label: { hu: 'Típus', en: 'Type', pl: 'Typ' },
        value: { hu: 'Kismolekula NNMT-inhibitor', en: 'Small-molecule NNMT inhibitor', pl: 'Inhibitor NNMT' } },
      { label: { hu: 'Cél', en: 'Target', pl: 'Cel' }, value: 'NNMT enzim' },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: '~8 h' },
      { label: { hu: 'Adagolás', en: 'Route', pl: 'Podanie' },
        value: { hu: 'Orális / SC', en: 'Oral / SC', pl: 'Doustnie / SC' } },
      { label: { hu: 'Klinikai fázis', en: 'Clinical phase', pl: 'Faza' },
        value: { hu: 'Preklinikai', en: 'Preclinical', pl: 'Przedkliniczne' } },
      { label: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' }, value: '2–8°C' },
    ],
    mechanism: {
      summary: {
        hu: 'A NNMT (nikotinamid-N-metiltranszferáz) az NAD+ prekurzor nikotinamidot inaktiválja metilezéssel. A NNMT gátlásával az 5-Amino-1MQ megnöveli a sejten belüli NAD+ készletet, ami fokozza a zsírsejtek termogenezisét és az izomszövet anyagcseréjét.',
        en: 'NNMT (nicotinamide N-methyltransferase) inactivates the NAD+ precursor nicotinamide via methylation. By inhibiting NNMT, 5-Amino-1MQ raises intracellular NAD+ pools, boosting adipocyte thermogenesis and muscle metabolism.',
        pl: 'NNMT (nikotynamidowa N-metylotransferaza) dezaktywuje nikotynamid (prekursor NAD+) przez metylację. Hamując NNMT, 5-Amino-1MQ podnosi poziom NAD+ w komórkach, co zwiększa termogenezę adipocytów i metabolizm mięśni.',
      },
      pathway: ['NNMT inhibition', '↑ Intracellular NAD+', '↑ SIRT1/SIRT3 activity', '↑ Mitochondrial biogenesis', 'Improved metabolic profile'],
    },
    researchUses: [
      { id: 'fat-loss',      label: { hu: 'Zsírvesztés',          en: 'Fat loss',          pl: 'Utrata tłuszczu' } },
      { id: 'insulin',       label: { hu: 'Inzulinérzékenység',   en: 'Insulin sensitivity', pl: 'Wrażliwość insulinowa' } },
      { id: 'muscle',        label: { hu: 'Izomszövet',           en: 'Muscle tissue',     pl: 'Tkanka mięśniowa' } },
      { id: 'anti-aging',    label: { hu: 'Anti-aging (NAD+)',    en: 'Anti-aging (NAD+)', pl: 'Anti-aging (NAD+)' } },
      { id: 'liver',         label: { hu: 'Máj zsír (NAFLD)',     en: 'Liver fat (NAFLD)', pl: 'Tłuszcz wątroby' } },
    ],
    dosing: {
      typical: '50–150 mg/nap',
      range: '50–200 mg',
      frequency: { hu: 'Naponta, 2 részre osztva', en: 'Daily, split 2×', pl: 'Codziennie, 2×' },
      cycle: { hu: '8–12 hét', en: '8–12 weeks', pl: '8–12 tygodni' },
      notes: { hu: 'Étkezés közben szedve csökkenti a GI mellékhatást.', en: 'Take with food to reduce GI upset.', pl: 'Przyjmować z jedzeniem.' },
      timeline: [
        { week: '0',   label: { hu: 'Indítás 50 mg', en: 'Start 50 mg', pl: 'Start 50 mg' } },
        { week: '1-2', label: { hu: 'Titrálás 100 mg-ig', en: 'Titrate to 100 mg', pl: 'Titracja do 100 mg' } },
        { week: '3-8', label: { hu: 'Fenntartó 100–150 mg', en: 'Maintenance 100–150 mg', pl: 'Podtrzymanie 100–150 mg' } },
        { week: '9-12',label: { hu: 'Tapering, szünet', en: 'Taper, break', pl: 'Stopniowe odstawienie' } },
      ],
    },
    stacks: [
      { id: 'mots-c',      name: 'MOTS-c',      rationale: { hu: 'Mitokondriális szinergia', en: 'Mitochondrial synergy', pl: 'Synergia mitochondrialna' } },
      { id: 'nad-plus',    name: 'NAD+',        rationale: { hu: 'Direkt prekurzor',          en: 'Direct precursor',     pl: 'Bezpośredni prekursor' } },
      { id: 'retatrutide', name: 'Retatrutide', rationale: { hu: 'Súlycsökkenés kiegészítés', en: 'Weight loss synergy',  pl: 'Synergia utraty masy' } },
    ],
    sideEffects: [
      { severity: 'mild',     name: { hu: 'GI panaszok', en: 'GI upset', pl: 'Dolegliwości GI' },
        when: { hu: 'Első 1–2 hét', en: 'Initial weeks', pl: 'Pierwsze tygodnie' } },
      { severity: 'mild',     name: { hu: 'Enyhe fáradtság', en: 'Mild fatigue', pl: 'Łagodne zmęczenie' },
        when: { hu: 'Gyakori', en: 'Common', pl: 'Częste' } },
      { severity: 'rare',     name: { hu: 'Bőrreakciók', en: 'Skin reactions', pl: 'Reakcje skórne' },
        when: { hu: 'Allergiás', en: 'Allergic', pl: 'Alergiczne' } },
    ],
    contraindications: [
      { hu: 'Terhesség és szoptatás', en: 'Pregnancy / breastfeeding', pl: 'Ciąża / karmienie' },
      { hu: 'Aktív malignitás',       en: 'Active malignancy',         pl: 'Czynny nowotwór' },
      { hu: 'Súlyos májbetegség',     en: 'Severe liver disease',      pl: 'Ciężka choroba wątroby' },
    ],
    studies: [
      {
        title: 'NNMT inhibition reduces adiposity and improves metabolic health in diet-induced obese mice',
        authors: 'Kannt A, Rajagopal S, Hallur MS, et al.',
        journal: 'Scientific Reports',
        year: '2018',
        pmid: '29472563',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29472563/',
        finding: {
          hu: 'NNMT-gátlás csökkentette a fehér zsírszövet tömegét és javította a glükóztoleranciát egér modellen.',
          en: 'NNMT inhibition reduced white adipose tissue mass and improved glucose tolerance in mice.',
          pl: 'Hamowanie NNMT zmniejszyło masę białej tkanki tłuszczowej u myszy.',
        },
      },
      {
        title: '5-Amino-1MQ enhances skeletal muscle differentiation and function in aged mice',
        authors: 'Neelakantan H, Brightwell CR, Graber TG, et al.',
        journal: 'GeroScience',
        year: '2019',
        pmid: '31309430',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31309430/',
        finding: {
          hu: 'Az idős egerek izom-funkciója és erőnléte szignifikánsan javult 14 napos kezelés után.',
          en: 'Aged mice showed significant improvements in muscle function and strength after 14 days.',
          pl: 'Starsze myszy wykazały znaczną poprawę funkcji mięśni po 14 dniach.',
        },
      },
      {
        title: 'NAD+ metabolome and NNMT in metabolic disease',
        authors: 'Pissios P.',
        journal: 'Trends in Endocrinology & Metabolism',
        year: '2017',
        pmid: '28291578',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28291578/',
        finding: {
          hu: 'NNMT magas expressziója korrelál obesitásban és T2DM-ben; gátlása új terápiás célpont.',
          en: 'NNMT overexpression correlates with obesity and T2DM; inhibition is a novel therapeutic target.',
          pl: 'Nadekspresja NNMT koreluje z otyłością i T2DM; hamowanie to nowy cel terapeutyczny.',
        },
      },
    ],
    faqs: [
      {
        q: { hu: 'FDA-engedélyezett?', en: 'Is it FDA approved?', pl: 'Czy jest zatwierdzony przez FDA?' },
        a: {
          hu: 'Nem — preklinikai fázisú kutatási vegyület. Humán klinikai vizsgálatok elkezdődtek, de még nem rutinszerű klinikai használatban.',
          en: 'No — preclinical research compound. Human trials are starting but it is not in routine clinical use.',
          pl: 'Nie — związek na etapie przedklinicznym. Badania na ludziach się rozpoczynają.',
        },
      },
      {
        q: { hu: 'Mi a különbség az NAD+ injekciókhoz képest?', en: 'How does it differ from NAD+ injections?', pl: 'Czym różni się od iniekcji NAD+?' },
        a: {
          hu: 'Az 5-Amino-1MQ upstream hat: az NNMT gátlásán keresztül megőrzi a már meglévő NAD+ készletet. Az NAD+ injekciók közvetlen pótlást adnak, de gyorsan ürülnek.',
          en: '5-Amino-1MQ acts upstream: by inhibiting NNMT it preserves existing NAD+ pools. NAD+ injections supply directly but clear quickly.',
          pl: '5-Amino-1MQ działa upstream — hamuje NNMT, chroniąc istniejące zapasy NAD+.',
        },
      },
      {
        q: { hu: 'Mi a tipikus ciklus hossza?', en: 'Typical cycle length?', pl: 'Typowa długość cyklu?' },
        a: {
          hu: '8–12 hét aktív szakasz, majd 4–6 hét szünet a receptor-érzékenység visszaállítására.',
          en: '8–12 weeks active, then 4–6 weeks break to restore receptor sensitivity.',
          pl: '8–12 tygodni aktywnie, potem 4–6 tygodni przerwy.',
        },
      },
    ],
    relatedIds: ['mots-c', 'nad-plus', 'humanin', 'ss-31'],
    legalStatus: {
      fda: false,
      tag: { hu: 'Kutatási vegyület', en: 'Research compound', pl: 'Związek badawczy' },
      detail: {
        hu: 'Nem jóváhagyott gyógyszer — kizárólag tudományos kutatási célra.',
        en: 'Not an approved drug — research use only.',
        pl: 'Nie jest zatwierdzonym lekiem — tylko do celów badawczych.',
      },
    },
  },

  // Second sample — FDA-approved peptide for L5 tier visualization
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    fullName: 'Semaglutide (Ozempic / Wegovy / Rybelsus)',
    synonyms: ['NN-9535', 'Ozempic', 'Wegovy', 'Rybelsus'],
    image: '/peptides/CJC-1295.png',
    accentColor: '#60a5fa',
    tier: 5,
    tierLabel: { hu: 'Engedélyezett', en: 'Approved', pl: 'Zatwierdzony' },
    category: { hu: 'Anyagcsere / Súlykontroll', en: 'Metabolic', pl: 'Metabolizm' },
    oneLiner: {
      hu: 'GLP-1 receptor agonista — étvágycsökkentés, vércukor-szabályozás, jelentős súlyvesztés',
      en: 'GLP-1 receptor agonist — appetite suppression, glycemic control, substantial weight loss',
      pl: 'Agonista GLP-1 — tłumienie apetytu, kontrola glikemii, znaczna utrata masy',
    },
    keyFacts: [
      { label: { hu: 'Típus', en: 'Type', pl: 'Typ' },
        value: { hu: 'GLP-1 RA, 31 aminosav', en: 'GLP-1 RA, 31 aa', pl: 'Agonista GLP-1, 31 aa' } },
      { label: { hu: 'Cél', en: 'Target', pl: 'Cel' }, value: 'GLP-1R' },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: '~7 nap / 7 days' },
      { label: { hu: 'Adagolás', en: 'Route', pl: 'Podanie' },
        value: { hu: 'SC heti 1× / orális napi', en: 'SC weekly / oral daily', pl: 'SC 1×/tydz lub doustnie' } },
      { label: { hu: 'Klinikai fázis', en: 'Clinical phase', pl: 'Faza' },
        value: { hu: 'FDA engedélyezett (T2DM, obesitás)', en: 'FDA approved (T2DM, obesity)', pl: 'Zatwierdzony FDA' } },
      { label: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' }, value: '2–8°C' },
    ],
    mechanism: {
      summary: {
        hu: 'A semaglutide GLP-1 receptor agonista: utánozza az endogén glükagonszerű peptid-1-et. Lassítja a gyomorürülést, csökkenti az étvágyat (központi idegrendszeri hatás a hipotalamuszra), és glükózdependens módon fokozza az inzulinszekréciót.',
        en: 'Semaglutide is a GLP-1 receptor agonist mimicking endogenous glucagon-like peptide-1. It slows gastric emptying, reduces appetite via hypothalamic centers, and enhances insulin secretion glucose-dependently.',
        pl: 'Semaglutyd to agonista GLP-1 naśladujący endogenny GLP-1. Spowalnia opróżnianie żołądka, redukuje apetyt przez podwzgórze, zwiększa wydzielanie insuliny zależnie od glukozy.',
      },
      pathway: ['GLP-1R activation', '↑ Insulin (glucose-dep.)', '↓ Glucagon', '↓ Gastric emptying', '↓ Appetite (hypothalamus)'],
    },
    researchUses: [
      { id: 'fat-loss',   label: { hu: 'Súlyvesztés', en: 'Weight loss', pl: 'Utrata masy' } },
      { id: 't2dm',       label: { hu: '2-es típusú DM', en: 'Type 2 diabetes', pl: 'Cukrzyca typu 2' } },
      { id: 'cardio',     label: { hu: 'Kardioprotekció', en: 'Cardioprotection', pl: 'Kardioprotekcja' } },
      { id: 'nash',       label: { hu: 'NASH / májzsír', en: 'NASH / liver fat', pl: 'NASH' } },
    ],
    dosing: {
      typical: '0,25 → 2,4 mg/hét',
      range: '0,25–2,4 mg',
      frequency: { hu: 'Heti 1× szubkután', en: 'Once weekly SC', pl: '1× tygodniowo SC' },
      cycle: { hu: 'Folyamatos', en: 'Continuous', pl: 'Ciągłe' },
      notes: { hu: '4 hetente lépcsőzetes titrálás, tolerancia szerint.', en: 'Step titration every 4 weeks based on tolerance.', pl: 'Titracja co 4 tygodnie.' },
      timeline: [
        { week: '1-4',   label: { hu: '0,25 mg', en: '0.25 mg', pl: '0,25 mg' } },
        { week: '5-8',   label: { hu: '0,5 mg',  en: '0.5 mg',  pl: '0,5 mg' } },
        { week: '9-12',  label: { hu: '1,0 mg',  en: '1.0 mg',  pl: '1,0 mg' } },
        { week: '13-16', label: { hu: '1,7 mg',  en: '1.7 mg',  pl: '1,7 mg' } },
        { week: '17+',   label: { hu: '2,4 mg fenntartó', en: '2.4 mg maintenance', pl: '2,4 mg podtrzymanie' } },
      ],
    },
    stacks: [
      { id: 'cagrilintide', name: 'Cagrilintide', rationale: { hu: 'CagriSema kombináció', en: 'CagriSema combo',         pl: 'Kombinacja CagriSema' } },
      { id: 'tirzepatide',  name: 'Tirzepatide',  rationale: { hu: 'Alternatíva (head-to-head)', en: 'Alternative (head-to-head)', pl: 'Alternatywa' } },
      { id: 'retatrutide',  name: 'Retatrutide',  rationale: { hu: 'Tri-agonista alternatíva', en: 'Tri-agonist alternative', pl: 'Tri-agonista' } },
    ],
    sideEffects: [
      { severity: 'common',  name: { hu: 'Hányinger',          en: 'Nausea',             pl: 'Nudności' },
        when: { hu: 'Titrálás során', en: 'During titration', pl: 'Podczas titracji' } },
      { severity: 'common',  name: { hu: 'Hasmenés / székrekedés', en: 'Diarrhea / constipation', pl: 'Biegunka / zaparcia' },
        when: { hu: 'Első hetek', en: 'First weeks', pl: 'Pierwsze tygodnie' } },
      { severity: 'rare',    name: { hu: 'Pankreatitisz',       en: 'Pancreatitis',        pl: 'Zapalenie trzustki' },
        when: { hu: 'Ritka, súlyos', en: 'Rare, serious', pl: 'Rzadkie, poważne' } },
      { severity: 'rare',    name: { hu: 'Pajzsmirigy tumor (állat)', en: 'Thyroid tumor (animal)', pl: 'Guz tarczycy (zwierz.)' },
        when: { hu: 'Boxed warning', en: 'Boxed warning', pl: 'Ostrzeżenie ramkowe' } },
    ],
    contraindications: [
      { hu: 'MEN-2 / medulláris pajzsmirigyrák családi anamnézis', en: 'MEN-2 / medullary thyroid carcinoma history', pl: 'MEN-2 / rdzeniasty rak tarczycy' },
      { hu: 'Terhesség',  en: 'Pregnancy', pl: 'Ciąża' },
      { hu: 'Súlyos GI rendellenesség', en: 'Severe GI disorder', pl: 'Ciężkie zaburzenia GI' },
    ],
    studies: [
      {
        title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)',
        authors: 'Wilding JPH, Batterham RL, Calanna S, et al.',
        journal: 'New England Journal of Medicine',
        year: '2021', pmid: '33567185',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33567185/',
        finding: {
          hu: '68 hét alatt átlagosan 14,9% testtömegcsökkenés a placebóhoz képest.',
          en: '14.9% body weight reduction over 68 weeks vs placebo.',
          pl: '14,9% redukcji masy ciała w 68 tygodni względem placebo.',
        },
      },
      {
        title: 'Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1)',
        authors: 'Jastreboff AM, Aronne LJ, Ahmad NN, et al.',
        journal: 'New England Journal of Medicine',
        year: '2022', pmid: '35658024',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35658024/',
        finding: {
          hu: 'Head-to-head referenciaként: tirzepatide 22,5%, semaglutide ~15% — fokozott hatás dual-agonizmussal.',
          en: 'Head-to-head reference: tirzepatide 22.5% vs semaglutide ~15% — dual agonism boosts effect.',
          pl: 'Tirzepatyd 22,5% vs semaglutyd ~15%.',
        },
      },
      {
        title: 'Semaglutide and Cardiovascular Outcomes in Obesity (SELECT)',
        authors: 'Lincoff AM, Brown-Frandsen K, Colhoun HM, et al.',
        journal: 'New England Journal of Medicine',
        year: '2023', pmid: '37952131',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37952131/',
        finding: {
          hu: 'MACE relatív kockázat-csökkenés 20% obesitásban kardiovaszkuláris betegekben.',
          en: '20% MACE relative risk reduction in CV disease + obesity patients.',
          pl: '20% redukcji ryzyka MACE u pacjentów z CVD i otyłością.',
        },
      },
    ],
    faqs: [
      {
        q: { hu: 'Mennyi időt vesz igénybe a hatás?', en: 'How long until effect?', pl: 'Ile czasu do efektu?' },
        a: { hu: 'A glykémiás hatás napokon belül, a súlycsökkenés 12–16 hétre érzékelhető a teljes titrálás után.', en: 'Glycemic effect within days; weight loss noticeable by 12–16 weeks at full titration.', pl: 'Efekt glikemiczny w ciągu dni, utrata masy w 12–16 tyg.' },
      },
      {
        q: { hu: 'Mi történik leállás után?', en: 'What happens after stopping?', pl: 'Co po odstawieniu?' },
        a: { hu: 'Az étvágy és a súly fokozatosan visszatérhet — a STEP-4 vizsgálatban 1 év alatt a vesztett súly ~2/3-a visszatért.', en: 'Appetite and weight tend to return; STEP-4 showed ~2/3 of weight returning within 1 year.', pl: 'Apetyt i masa wracają — STEP-4 pokazał powrót ~2/3 masy w rok.' },
      },
    ],
    relatedIds: ['tirzepatide', 'retatrutide', 'cagrilintide', 'liraglutide'],
    legalStatus: {
      fda: true,
      tag: { hu: 'FDA engedélyezett', en: 'FDA approved', pl: 'Zatwierdzony FDA' },
      detail: {
        hu: 'FDA-engedélyezett — T2DM 2017, obesitás 2021, CV-kockázat csökkentés 2024.',
        en: 'FDA-approved — T2DM 2017, obesity 2021, CV risk reduction 2024.',
        pl: 'Zatwierdzony FDA — T2DM 2017, otyłość 2021, CV 2024.',
      },
    },
  },

  // Third sample — recovery peptide for L3 tier visualization
  {
    id: 'bpc-157',
    name: 'BPC-157',
    fullName: 'Body Protection Compound 157 (Pentadecapeptide)',
    synonyms: ['PL-10', 'PL 14736', 'Bepecin'],
    image: '/peptides/BPC-157.png',
    accentColor: '#34d399',
    tier: 3,
    tierLabel: { hu: 'Klinikai kutatás', en: 'Clinical Research', pl: 'Badania kliniczne' },
    category: { hu: 'Regeneráció / Gyógyulás', en: 'Recovery', pl: 'Regeneracja' },
    oneLiner: {
      hu: 'Gyomor-pentadekapeptid — szöveti regeneráció, gyulladáscsökkentés, GI gyógyulás',
      en: 'Gastric pentadecapeptide — tissue regeneration, anti-inflammation, GI healing',
      pl: 'Pentadekapeptyd żołądkowy — regeneracja tkanek, działanie przeciwzapalne',
    },
    keyFacts: [
      { label: { hu: 'Típus', en: 'Type', pl: 'Typ' }, value: { hu: '15 aminosavas pentadekapeptid', en: '15-aa pentadecapeptide', pl: '15 aa pentadekapeptyd' } },
      { label: { hu: 'Cél', en: 'Target', pl: 'Cel' }, value: { hu: 'EGR1, VEGF, NO rendszer', en: 'EGR1, VEGF, NO system', pl: 'EGR1, VEGF, NO' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: '~4 h' },
      { label: { hu: 'Adagolás', en: 'Route', pl: 'Podanie' }, value: { hu: 'SC / orális', en: 'SC / oral', pl: 'SC / doustnie' } },
      { label: { hu: 'Klinikai fázis', en: 'Clinical phase', pl: 'Faza' }, value: { hu: 'Klinikai (humán pilot)', en: 'Clinical (human pilots)', pl: 'Kliniczna' } },
      { label: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' }, value: '2–8°C' },
    ],
    mechanism: {
      summary: {
        hu: 'A BPC-157 az emberi gyomornedv egy proteinjéből izolált stabil 15-aa peptid. Aktiválja a növekedési faktor receptorokat (EGR1), serkenti a kollagén szintézist, csökkenti az oxidatív stresszt és modulálja a NO-rendszert. Hatása szisztémás: izom, ín, csont, GI traktus, idegszövet.',
        en: 'BPC-157 is a stable 15-aa peptide isolated from human gastric juice. It activates growth-factor receptors (EGR1), boosts collagen synthesis, reduces oxidative stress and modulates the NO system. Effects are systemic: muscle, tendon, bone, GI tract, neural tissue.',
        pl: 'BPC-157 to stabilny 15-aa peptyd z soku żołądkowego. Aktywuje receptory czynników wzrostu (EGR1), promuje kolagen, redukuje stres oksydacyjny.',
      },
      pathway: ['EGR1 activation', '↑ VEGF (angiogenesis)', '↑ Collagen synthesis', '↓ Inflammatory cytokines', 'Tissue regeneration'],
    },
    researchUses: [
      { id: 'tendon',   label: { hu: 'Ín-/szalag-sérülés', en: 'Tendon / ligament injury', pl: 'Ścięgno / więzadło' } },
      { id: 'muscle',   label: { hu: 'Izomsérülés', en: 'Muscle injury', pl: 'Uraz mięśnia' } },
      { id: 'gi',       label: { hu: 'IBS / fekély', en: 'IBS / ulcer',   pl: 'IBS / wrzód' } },
      { id: 'joint',    label: { hu: 'Ízületi gyulladás', en: 'Joint inflammation', pl: 'Stan zapalny stawów' } },
      { id: 'nerve',    label: { hu: 'Idegregeneráció', en: 'Nerve regeneration', pl: 'Regeneracja nerwów' } },
    ],
    dosing: {
      typical: '200–400 mcg/nap',
      range: '200–1000 mcg',
      frequency: { hu: 'Naponta, lehetőleg sérülés közelében', en: 'Daily, near injury site', pl: 'Codziennie, blisko urazu' },
      cycle: { hu: '4–12 hét',   en: '4–12 weeks',   pl: '4–12 tygodni' },
      notes: { hu: 'Orálisan 500–1000 mcg/nap GI cél esetén.', en: 'Oral 500–1000 mcg/day for GI targets.', pl: 'Doustnie 500–1000 mcg dla GI.' },
      timeline: [
        { week: '0',   label: { hu: '250 mcg napi 1×', en: '250 mcg daily', pl: '250 mcg dziennie' } },
        { week: '1-4', label: { hu: '300 mcg napi 1–2×', en: '300 mcg 1–2× daily', pl: '300 mcg 1–2× dziennie' } },
        { week: '5-8', label: { hu: 'Fenntartó vagy szünet', en: 'Maintenance / break', pl: 'Podtrzymanie / przerwa' } },
      ],
    },
    stacks: [
      { id: 'tb-500',  name: 'TB-500',  rationale: { hu: 'Klasszikus szöveti regeneráció stack', en: 'Classic recovery stack', pl: 'Klasyczny stack regeneracji' } },
      { id: 'ghk-cu',  name: 'GHK-Cu',  rationale: { hu: 'Bőr-/seb-gyógyulás kiegészítés',       en: 'Skin/wound healing add-on', pl: 'Gojenie skóry' } },
      { id: 'kpv',     name: 'KPV',     rationale: { hu: 'GI gyulladás célzott támogatás',       en: 'GI inflammation support',  pl: 'Wsparcie zapalenia GI' } },
    ],
    sideEffects: [
      { severity: 'rare', name: { hu: 'Injekciós helyi reakció', en: 'Injection site reaction', pl: 'Reakcja w miejscu iniekcji' }, when: { hu: 'SC', en: 'SC', pl: 'SC' } },
      { severity: 'rare', name: { hu: 'Enyhe szédülés', en: 'Mild dizziness', pl: 'Łagodne zawroty' }, when: { hu: 'Egyéni', en: 'Individual', pl: 'Indywidualne' } },
    ],
    contraindications: [
      { hu: 'Aktív malignitás', en: 'Active malignancy', pl: 'Czynny nowotwór' },
      { hu: 'Terhesség (adatok hiányosak)', en: 'Pregnancy (limited data)', pl: 'Ciąża (mało danych)' },
    ],
    studies: [
      {
        title: 'BPC-157 in orthopaedic sports medicine — systematic review',
        authors: 'Vasireddi N, Hahamyan H, Salata MJ, et al.',
        journal: 'HSS Journal', year: '2025', pmid: '40756949',
        url: 'https://pubmed.ncbi.nlm.nih.gov/40756949/',
        finding: {
          hu: '36 tanulmány elemzése: VEGF↑, IL-6↓, TNF-α↓ — gyorsult inakat, izom, csont gyógyulás.',
          en: '36 studies: VEGF↑, IL-6↓, TNF-α↓ — accelerated tendon, muscle and bone healing.',
          pl: '36 badań: VEGF↑, IL-6↓, TNF-α↓ — przyspieszone gojenie.',
        },
      },
      {
        title: 'BPC 157 promotes tendon outgrowth and cell migration',
        authors: 'Chang CH, Tsai WC, Lin MS, et al.',
        journal: 'J Appl Physiol', year: '2011', pmid: '21148343',
        url: 'https://pubmed.ncbi.nlm.nih.gov/21148343/',
        finding: {
          hu: 'In vitro és in vivo: gyorsabb tenocyta migráció és kollagén-szintézis.',
          en: 'In vitro and in vivo: faster tenocyte migration and collagen synthesis.',
          pl: 'In vitro i in vivo: szybsza migracja tenocytów.',
        },
      },
    ],
    faqs: [
      {
        q: { hu: 'SC vagy orális adagolás?', en: 'SC or oral?', pl: 'SC czy doustnie?' },
        a: { hu: 'SC szisztémás hatáshoz, orális GI célokhoz. Mindkettő stabil a savas közegben.', en: 'SC for systemic, oral for GI targets. Both are stable in acid.', pl: 'SC dla systemowo, doustnie dla GI.' },
      },
      {
        q: { hu: 'Mennyi idő után érzem?', en: 'How long until effect?', pl: 'Kiedy efekt?' },
        a: { hu: 'Lágy szöveti sérülésnél gyakran 7–14 napos jelentős javulás; ínproblémánál 3–6 hét.', en: 'Soft-tissue injuries often improve in 7–14 days; tendons 3–6 weeks.', pl: 'Tkanki miękkie 7–14 dni; ścięgna 3–6 tyg.' },
      },
    ],
    relatedIds: ['tb-500', 'ghk-cu', 'kpv', 'pentadeca-arginate'],
    legalStatus: {
      fda: false,
      tag: { hu: 'Kutatási vegyület', en: 'Research compound', pl: 'Związek badawczy' },
      detail: {
        hu: 'Nem FDA-engedélyezett (USA); EMA-szintű engedélyezés nincs. Egyes országokban patikai elkészítés engedélyezett.',
        en: 'Not FDA-approved; no EMA approval. Compounded preparations available in some jurisdictions.',
        pl: 'Niezatwierdzony FDA ani EMA.',
      },
    },
  },
]

export const TIER_META = {
  5: { label: { hu: 'Engedélyezett',      en: 'Approved',          pl: 'Zatwierdzony' },
       color: '#10b981', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.5)' },
  4: { label: { hu: 'Késői fázisú',       en: 'Late-Stage',        pl: 'Faza późna' },
       color: '#84cc16', bg: 'rgba(132,204,22,0.12)',  border: 'rgba(132,204,22,0.5)' },
  3: { label: { hu: 'Klinikai kutatás',   en: 'Clinical Research', pl: 'Badania kliniczne' },
       color: '#eab308', bg: 'rgba(234,179,8,0.12)',   border: 'rgba(234,179,8,0.5)' },
  2: { label: { hu: 'Preklinikai',        en: 'Preclinical',       pl: 'Przedkliniczne' },
       color: '#f97316', bg: 'rgba(249,115,22,0.12)',  border: 'rgba(249,115,22,0.5)' },
  1: { label: { hu: 'Korai kutatás',      en: 'Emerging',          pl: 'Wczesna faza' },
       color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.5)' },
}
