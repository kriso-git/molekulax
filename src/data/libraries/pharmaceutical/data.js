// Pharmaceutical Library entries. Populated in Task 16-23 (Session 5-6).
// Schema matches the Entry typedef in ../shape.js with Phase 6 optional fields
// (atcCode, prescriptionStatus, indications, contraindications, commonSideEffects,
//  cyp450, crossMolInteractions).
//
// Sources strictly peer-reviewed: PubMed, FDA prescribing info, EMA SmPC,
// NIH PubChem, EASD/ADA/ACC/AHA/ESC guidelines.
//
// Em-dash forbidden in user-facing strings (use comma+space or middle dot).
//
// Cross-library duplikáció: Semaglutide appears in both peptid + pharma with
// different framing (peptid-fókusz vs Rx-fókusz). Modafinil appears in both
// nootropic + pharma with different framing (cognitive enhancement vs narcolepsy Rx).
//
// Entries added incrementally:
//   Task 16 — Anyagcsere CORE: metformin, semaglutide
//   Task 17 — Kardio CORE: atorvastatin, tadalafil
//   Task 18 — Pszichiátria CORE: sertralin, bupropion, modafinil
//   Task 19 — Endokrin+Bőr+Antiinfekt CORE: levothyroxin, finasteride, amoxicillin

export const CORE_PHARMACEUTICAL = [
  // ===== 1. METFORMIN (Anyagcsere CORE, T2DM első-vonal) =====
  {
    id: 'metformin',
    name: 'Metformin',
    image: null,
    accentColor: '#10b981',
    tagColor: 'rgba(16,185,129,0.18)',
    shortDesc: {
      hu: 'A 2-es típusú cukorbetegség első-vonal orális kezelése világszerte. WHO Essential Medicines, ADA és EASD guideline-anchor 1957 óta.',
      en: 'First-line oral therapy for type 2 diabetes worldwide. WHO Essential Medicines, ADA and EASD guideline anchor since 1957.',
      pl: 'Lek pierwszego rzutu w terapii doustnej cukrzycy typu 2 na całym świecie. Lek podstawowy WHO, kotwica wytycznych ADA i EASD od 1957 r.',
    },
    description: {
      hu: 'A Metformin egy biguanid-osztálybeli orális antidiabetikum, amelynek elsődleges hatása a máj glükoneogenezisének gátlása az AMP-aktivált protein-kináz (AMPK) aktivációján keresztül. A jelenleg engedélyezett legbiztonságosabb és legolcsóbb T2DM-szer, amely a UKPDS-34 (1998, Lancet) óta a kardiovaszkuláris végpontokban is bizonyított előnnyel rendelkezik túlsúlyos cukorbetegeknél. Az ADA/EASD 2022 konszenzus szerint a Metformin a kezdő gyógyszer minden olyan T2DM-betegnél, akinél nincs ASCVD, szívelégtelenség vagy CKD-prioritás (ott SGLT2-i vagy GLP-1 RA előtérben). Off-label indikációk: prediabétesz (DPP 2002 NEJM), PCOS-anovuláció, gesztációs diabétesz, antipszichotikum-indukált súlygyarapodás mitigálása.',
      en: 'Metformin is a biguanide-class oral antidiabetic whose primary action is suppression of hepatic gluconeogenesis via activation of AMP-activated protein kinase (AMPK). Currently the safest and cheapest licensed T2DM agent, with demonstrated cardiovascular outcome benefit in overweight diabetics since UKPDS-34 (1998, Lancet). The ADA/EASD 2022 consensus places Metformin as initial therapy for all T2DM patients without ASCVD, heart failure or CKD-priority (where SGLT2i or GLP-1 RA take precedence). Off-label indications: prediabetes (DPP 2002 NEJM), PCOS anovulation, gestational diabetes, mitigation of antipsychotic-induced weight gain.',
      pl: 'Metformina to doustny lek przeciwcukrzycowy z grupy biguanidów, którego głównym działaniem jest hamowanie glukoneogenezy wątrobowej poprzez aktywację kinazy białkowej aktywowanej AMP (AMPK). Obecnie najbezpieczniejszy i najtańszy licencjonowany lek na T2DM, z udokumentowaną korzyścią sercowo-naczyniową u otyłych cukrzyków od czasu UKPDS-34 (1998, Lancet). Konsensus ADA/EASD 2022 stawia Metforminę jako leczenie początkowe dla wszystkich pacjentów z T2DM bez ASCVD, niewydolności serca lub priorytetu CKD (tam pierwszeństwo mają SGLT2i lub GLP-1 RA). Wskazania off-label: stan przedcukrzycowy (DPP 2002 NEJM), brak owulacji w PCOS, cukrzyca ciążowa, łagodzenie przyrostu masy ciała indukowanego antypsychotykami.',
    },
    keyInfo: [
      { label: { hu: 'ATC kód', en: 'ATC code', pl: 'Kod ATC' }, value: { hu: 'A10BA02', en: 'A10BA02', pl: 'A10BA02' } },
      { label: { hu: 'Vény-státusz', en: 'Prescription', pl: 'Status recepty' }, value: { hu: 'Vényköteles (Rx)', en: 'Prescription only (Rx)', pl: 'Na receptę (Rx)' } },
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'AMPK-aktivátor, hepatikus glukoneogenezis-gátló', en: 'AMPK activator, hepatic gluconeogenesis inhibitor', pl: 'Aktywator AMPK, inhibitor glukoneogenezy wątrobowej' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '4-9 óra (plazma), 17 óra (vörösvértest)', en: '4-9 h (plasma), 17 h (erythrocyte)', pl: '4-9 h (osocze), 17 h (erytrocyty)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek' }, value: { hu: '1-3 óra (egyszeri dózis), 4-7 nap (steady-state HbA1c)', en: '1-3 h (single dose), 4-7 days (steady-state HbA1c)', pl: '1-3 h (pojedyncza dawka), 4-7 dni (steady-state HbA1c)' } },
    ],
    mechanism: {
      hu: 'Az AMPK aktivációján keresztül gátolja a hepatikus glükoneogenezist (PEPCK és G6Pase represszió), csökkenti a mitokondriális komplex I aktivitását (Owen 2000 Biochem J), növeli a perifériás inzulin-érzékenységet és a glükóz-felvételt a vázizomban. Nem stimulálja az inzulin-szekréciót, ezért hipoglikémia-kockázata monoterápiában minimális.',
      en: 'Via AMPK activation it inhibits hepatic gluconeogenesis (PEPCK and G6Pase repression), decreases mitochondrial complex I activity (Owen 2000 Biochem J), increases peripheral insulin sensitivity and skeletal muscle glucose uptake. It does not stimulate insulin secretion, therefore monotherapy hypoglycemia risk is minimal.',
      pl: 'Przez aktywację AMPK hamuje glukoneogenezę wątrobową (represja PEPCK i G6Pase), zmniejsza aktywność mitochondrialnego kompleksu I (Owen 2000 Biochem J), zwiększa obwodową wrażliwość na insulinę i wychwyt glukozy w mięśniach szkieletowych. Nie stymuluje wydzielania insuliny, dlatego ryzyko hipoglikemii w monoterapii jest minimalne.',
    },
    legalStatus: {
      hu: 'EU/HU: vényköteles (Glucophage, Siofor, Metfogamma, Adimet). USA: FDA Rx (Glucophage, Fortamet, Glumetza). Nincs visszaélési potenciálja, nem ütemezett szer. PCOS és prediabétesz indikációkban off-label, de széles körű klinikai gyakorlatban.',
      en: 'EU/HU: prescription only (Glucophage, Siofor, Metfogamma, Adimet). USA: FDA Rx (Glucophage, Fortamet, Glumetza). No abuse potential, not a scheduled substance. PCOS and prediabetes indications are off-label but widespread in clinical practice.',
      pl: 'UE/PL: na receptę (Glucophage, Siofor, Metformax, Formetic). USA: FDA Rx (Glucophage, Fortamet, Glumetza). Brak potencjału nadużywania, nie jest substancją kontrolowaną. Wskazania PCOS i stan przedcukrzycowy są off-label, ale powszechne w praktyce klinicznej.',
    },
    onsetTime: '1-3 h (single dose), 4-7 days (steady-state HbA1c lowering)',
    halfLife: '4-9 h (plasma), ~17 h (erythrocyte compartment)',
    atcCode: 'A10BA02',
    prescriptionStatus: {
      hu: 'Vényköteles (Rx)',
      en: 'Prescription only (Rx)',
      pl: 'Na receptę (Rx)',
    },
    indications: [
      { hu: '2-es típusú cukorbetegség (T2DM) első-vonal kezelése', en: 'Type 2 diabetes mellitus (T2DM) first-line therapy', pl: 'Cukrzyca typu 2 (T2DM) leczenie pierwszego rzutu' },
      { hu: 'Prediabétesz progresszió-megelőzés (off-label, DPP 2002 evidencia)', en: 'Prediabetes progression prevention (off-label, DPP 2002 evidence)', pl: 'Zapobieganie progresji stanu przedcukrzycowego (off-label, dowody DPP 2002)' },
      { hu: 'Policisztás ovárium szindróma (PCOS), anovuláció és inzulinrezisztencia', en: 'Polycystic ovary syndrome (PCOS), anovulation and insulin resistance', pl: 'Zespół policystycznych jajników (PCOS), brak owulacji i insulinooporność' },
      { hu: 'Gesztációs diabétesz (második vonal, insulin után)', en: 'Gestational diabetes (second line, after insulin)', pl: 'Cukrzyca ciążowa (druga linia, po insulinie)' },
      { hu: 'Antipszichotikum-indukált súlygyarapodás mitigálása', en: 'Mitigation of antipsychotic-induced weight gain', pl: 'Łagodzenie przyrostu masy ciała indukowanego antypsychotykami' },
    ],
    contraindications: [
      { hu: 'Súlyos vesefunkció-zavar (eGFR < 30 ml/min/1.73 m²)', en: 'Severe renal impairment (eGFR < 30 ml/min/1.73 m²)', pl: 'Ciężka niewydolność nerek (eGFR < 30 ml/min/1.73 m²)' },
      { hu: 'Akut metabolikus acidózis (diabéteszes ketoacidózis, laktát-acidózis történet)', en: 'Acute metabolic acidosis (diabetic ketoacidosis, lactic acidosis history)', pl: 'Ostra kwasica metaboliczna (kwasica ketonowa, historia kwasicy mleczanowej)' },
      { hu: 'Akut súlyos szívelégtelenség, hipoxiás állapot, sokk', en: 'Acute severe heart failure, hypoxic states, shock', pl: 'Ostra ciężka niewydolność serca, stany hipoksyczne, wstrząs' },
      { hu: 'Súlyos májfunkció-zavar', en: 'Severe hepatic impairment', pl: 'Ciężka niewydolność wątroby' },
      { hu: 'Iodine-tartalmú kontraszt-anyaggal való vizsgálat előtt 48 óráig szünet', en: 'Hold for 48 h around iodinated contrast imaging', pl: 'Przerwa 48 h przy badaniu z kontrastem jodowym' },
    ],
    commonSideEffects: [
      { hu: 'Gasztrointesztinális: hányinger, hasmenés, hasi diszkomfort (20-30%, étkezéssel csökkenthető)', en: 'Gastrointestinal: nausea, diarrhea, abdominal discomfort (20-30%, mitigated with food)', pl: 'Żołądkowo-jelitowe: nudności, biegunka, dyskomfort brzucha (20-30%, łagodzone z jedzeniem)' },
      { hu: 'Fémes íz a szájban (átmeneti)', en: 'Metallic taste (transient)', pl: 'Metaliczny smak (przejściowy)' },
      { hu: 'B12-vitamin felszívódás csökkenése hosszú távú használat mellett (évente kontroll)', en: 'Reduced B12 absorption with long-term use (annual monitoring)', pl: 'Zmniejszone wchłanianie B12 przy długotrwałym stosowaniu (kontrola roczna)' },
      { hu: 'Súlyos, de ritka: laktát-acidózis (< 0.03 eset / 1000 betegév, főleg veseelégtelenségnél)', en: 'Severe but rare: lactic acidosis (< 0.03 cases / 1000 patient-years, mainly in renal failure)', pl: 'Ciężkie ale rzadkie: kwasica mleczanowa (< 0,03 przypadku / 1000 pacjentolat, głównie w niewydolności nerek)' },
    ],
    cyp450: ['No significant CYP450 metabolism', 'OCT1/OCT2 transporter substrate', 'MATE1/MATE2-K renal excretion'],
    crossMolInteractions: [
      { hu: 'Iodine-kontraszt: 48 órás szünet a vizsgálat előtt és után, vesefunkció ellenőrzés', en: 'Iodinated contrast: 48 h hold before and after, renal function check', pl: 'Kontrast jodowy: przerwa 48 h przed i po, kontrola czynności nerek' },
      { hu: 'Alkohol: laktát-acidózis kockázat fokozása, mértékletesség kötelező', en: 'Alcohol: increases lactic acidosis risk, moderation required', pl: 'Alkohol: zwiększa ryzyko kwasicy mleczanowej, wymagana umiarkowanie' },
      { hu: 'Cimetidin, Dolutegravir: OCT2-blokk, plasma Metformin-szint emelkedhet', en: 'Cimetidine, Dolutegravir: OCT2 inhibition, plasma metformin levels may rise', pl: 'Cymetydyna, Dolutegrawir: blokada OCT2, poziom metforminy w osoczu może wzrosnąć' },
      { hu: 'Furoszemid, Hidroklorotiazid: hiperglikémiás tendencia (gyógyszer-hatás csökkenhet)', en: 'Furosemide, Hydrochlorothiazide: hyperglycemic tendency (drug effect may be reduced)', pl: 'Furosemid, Hydrochlorotiazyd: tendencja hiperglikemiczna (efekt leku może być zmniejszony)' },
      { hu: 'GLP-1 RA, SGLT2-i: szinergisztikus, racionális kombinálás (ADA/EASD 2022)', en: 'GLP-1 RA, SGLT2i: synergistic, rational combination (ADA/EASD 2022)', pl: 'GLP-1 RA, SGLT2i: synergistyczne, racjonalna kombinacja (ADA/EASD 2022)' },
    ],
    benefits: [
      { hu: 'HbA1c csökkenés tipikusan 1,0-1,5% (monoterápiában)', en: 'HbA1c reduction typically 1.0-1.5% (monotherapy)', pl: 'Obniżenie HbA1c zwykle 1,0-1,5% (monoterapia)' },
      { hu: 'Súlyneutrális vagy enyhén súlycsökkentő (átlag -2 kg)', en: 'Weight-neutral or mildly weight-reducing (mean -2 kg)', pl: 'Neutralny dla wagi lub łagodnie redukuje wagę (średnio -2 kg)' },
      { hu: 'Kardiovaszkuláris végpont-előny túlsúlyos T2DM-en (UKPDS-34)', en: 'Cardiovascular outcome benefit in overweight T2DM (UKPDS-34)', pl: 'Korzyść w punkcie końcowym sercowo-naczyniowym u otyłych T2DM (UKPDS-34)' },
      { hu: 'Monoterápiában hipoglikémia-kockázata minimális', en: 'Minimal hypoglycemia risk in monotherapy', pl: 'Minimalne ryzyko hipoglikemii w monoterapii' },
      { hu: 'Olcsó, generikus, évtizedes biztonsági adat (1957 óta)', en: 'Cheap, generic, decades of safety data (since 1957)', pl: 'Tani, generyczny, dekady danych bezpieczeństwa (od 1957 r.)' },
    ],
    quickStart: [
      { hu: 'Vesefunkció ellenőrzése (eGFR) a kezdés előtt, majd 6-12 havonta', en: 'Check renal function (eGFR) before start, then every 6-12 months', pl: 'Sprawdź czynność nerek (eGFR) przed startem, potem co 6-12 miesięcy' },
      { hu: 'Mindig étkezéssel vegye be a GI-mellékhatások csökkentésére', en: 'Always take with meals to reduce GI side effects', pl: 'Zawsze przyjmuj z posiłkami, by zmniejszyć działania niepożądane z GI' },
      { hu: 'Lassú titráció: 500 mg/nap, hetente emelve a tolerancia szerint', en: 'Slow titration: 500 mg/day, increasing weekly per tolerance', pl: 'Powolna titracja: 500 mg/dzień, zwiększanie tygodniowo wg tolerancji' },
      { hu: 'XR (extended release) formula jobban tolerált, mint az IR', en: 'XR (extended release) form better tolerated than IR', pl: 'Forma XR (o przedłużonym uwalnianiu) jest lepiej tolerowana niż IR' },
      { hu: 'B12-szint mérése évente hosszú távú használat mellett', en: 'B12 level annually on long-term use', pl: 'Poziom B12 corocznie przy długotrwałym stosowaniu' },
    ],
    expectations: [
      { label: { hu: 'Első hét', en: 'Week 1', pl: 'Tydzień 1' }, body: { hu: '500 mg/nap, étkezéssel. GI-mellékhatások (hányinger, lágy szék) gyakori 30%-ban, általában 1-2 hét alatt enyhülnek.', en: '500 mg/day with meals. GI side effects (nausea, loose stools) common in 30%, usually subside within 1-2 weeks.', pl: '500 mg/dzień z posiłkami. Działania niepożądane GI (nudności, luźne stolce) częste w 30%, zwykle ustępują w ciągu 1-2 tygodni.' } },
      { label: { hu: '2-4. hét', en: 'Weeks 2-4', pl: 'Tygodnie 2-4' }, body: { hu: 'Lassú dóziseszkaláció 1000-1500 mg/napra. GI-tünetek mérséklődnek. Vércukor-monitor (otthon mért FPG és/vagy CGM).', en: 'Slow dose escalation to 1000-1500 mg/day. GI symptoms abate. Blood glucose monitoring (home FPG and/or CGM).', pl: 'Powolna eskalacja dawki do 1000-1500 mg/dzień. Objawy GI ustępują. Monitorowanie glikemii (domowe FPG i/lub CGM).' } },
      { label: { hu: '3-4. hónap', en: 'Months 3-4', pl: 'Miesiące 3-4' }, body: { hu: 'HbA1c-mérés. Tipikus csökkenés 1,0-1,5% monoterápiában. Ha cél (általában < 7%) nem érhető el, ADA/EASD 2022 alapján második szer hozzáadása (GLP-1 RA, SGLT2i).', en: 'HbA1c measurement. Typical reduction 1.0-1.5% in monotherapy. If target (usually < 7%) not reached, ADA/EASD 2022 recommends adding second agent (GLP-1 RA, SGLT2i).', pl: 'Pomiar HbA1c. Typowa redukcja 1,0-1,5% w monoterapii. Jeśli cel (zwykle < 7%) nie osiągnięty, ADA/EASD 2022 zaleca dodanie drugiego leku (GLP-1 RA, SGLT2i).' } },
    ],
    quality: {
      pure: [
        { hu: 'Bayer Glucophage, Merck Siofor, Adimet (HU), Metformax (PL): referencia gyógyszerek', en: 'Bayer Glucophage, Merck Siofor, Adimet (HU), Metformax (PL): reference brands', pl: 'Bayer Glucophage, Merck Siofor, Adimet (HU), Metformax (PL): leki referencyjne' },
        { hu: 'Generikus formák szintén bioekvivalensek (FDA Orange Book AB-rating)', en: 'Generic forms are bioequivalent (FDA Orange Book AB rating)', pl: 'Formy generyczne są biorównoważne (rating AB w FDA Orange Book)' },
      ],
      caution: [
        { hu: 'Akut betegség (láz, dehidráció): átmenetileg szüneteltetni a laktát-acidózis-kockázat miatt', en: 'Acute illness (fever, dehydration): hold temporarily due to lactic acidosis risk', pl: 'Ostra choroba (gorączka, odwodnienie): chwilowo wstrzymać z powodu ryzyka kwasicy mleczanowej' },
        { hu: 'eGFR 30-45 ml/min: dóziscsökkentés szükséges, eGFR < 30: kontraindikált', en: 'eGFR 30-45 ml/min: dose reduction required, eGFR < 30: contraindicated', pl: 'eGFR 30-45 ml/min: wymagana redukcja dawki, eGFR < 30: przeciwwskazane' },
        { hu: 'B12-hiány hosszú távú használat mellett, évente kontroll', en: 'B12 deficiency on long-term use, annual monitoring', pl: 'Niedobór B12 przy długotrwałym stosowaniu, kontrola roczna' },
      ],
      avoid: [
        { hu: 'Súlyos vesefunkció-zavar (eGFR < 30)', en: 'Severe renal impairment (eGFR < 30)', pl: 'Ciężka niewydolność nerek (eGFR < 30)' },
        { hu: 'Diabéteszes ketoacidózis vagy egyéb metabolikus acidózis', en: 'Diabetic ketoacidosis or other metabolic acidosis', pl: 'Kwasica ketonowa lub inna kwasica metaboliczna' },
        { hu: 'Súlyos szívelégtelenség (NYHA III-IV), hipoxia, sokk', en: 'Severe heart failure (NYHA III-IV), hypoxia, shock', pl: 'Ciężka niewydolność serca (NYHA III-IV), hipoksja, wstrząs' },
      ],
    },
    interactions: [
      { hu: 'GLP-1 RA (Semaglutide, Liraglutide): szinergisztikus, racionális kombináció (ADA/EASD 2022)', en: 'GLP-1 RA (Semaglutide, Liraglutide): synergistic, rational combination (ADA/EASD 2022)', pl: 'GLP-1 RA (Semaglutyd, Liraglutyd): synergistyczne, racjonalna kombinacja (ADA/EASD 2022)' },
      { hu: 'SGLT2-inhibitor (Empagliflozin, Dapagliflozin): kardio-reno-protektív kombináció', en: 'SGLT2 inhibitor (Empagliflozin, Dapagliflozin): cardio-renal protective combo', pl: 'Inhibitor SGLT2 (Empagliflozyna, Dapagliflozyna): połączenie kardio-renoprotekcyjne' },
      { hu: 'Inzulin: kombinálható, de inzulin-dóziscsökkentés szükséges lehet', en: 'Insulin: combinable but insulin dose reduction may be needed', pl: 'Insulina: można łączyć, ale może być potrzebna redukcja dawki insuliny' },
      { hu: 'Iodine-kontraszt: 48 órás szünet a vizsgálat előtt, vesefunkció ellenőrzés', en: 'Iodinated contrast: 48 h hold before imaging, check renal function', pl: 'Kontrast jodowy: 48 h przerwa przed badaniem, kontrola czynności nerek' },
      { hu: 'Alkohol: laktát-acidózis kockázat, mértékletesség', en: 'Alcohol: lactic acidosis risk, moderation', pl: 'Alkohol: ryzyko kwasicy mleczanowej, umiarkowanie' },
    ],
    studies: [
      { title: 'Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34)', authors: 'UK Prospective Diabetes Study (UKPDS) Group.', journal: 'Lancet. 1998;352(9131):854-65.', pmid: '9742977' },
      { title: 'Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin (DPP)', authors: 'Diabetes Prevention Program Research Group.', journal: 'N Engl J Med. 2002;346(6):393-403.', pmid: '11832527' },
      { title: 'Evidence that metformin exerts its anti-diabetic effects through inhibition of complex 1 of the mitochondrial respiratory chain', authors: 'Owen MR, Doran E, Halestrap AP.', journal: 'Biochem J. 2000;348(Pt 3):607-14.', pmid: '10839993' },
      { title: 'Role of AMP-activated protein kinase in mechanism of metformin action', authors: 'Zhou G, Myers R, Li Y et al.', journal: 'J Clin Invest. 2001;108(8):1167-74.', pmid: '11602624' },
      { title: 'Management of hyperglycaemia in type 2 diabetes, 2022. A consensus report by ADA and EASD', authors: 'Davies MJ, Aroda VR, Collins BS et al.', journal: 'Diabetologia. 2022;65(12):1925-1966.', pmid: '36151309' },
      { title: 'Metformin use in pregnancy: promises and concerns', authors: 'Lindsay RS, Loeken MR.', journal: 'Diabetologia. 2017;60(9):1612-1619.', pmid: '28770325' },
      { title: 'Long-term metformin use and vitamin B12 deficiency in the Diabetes Prevention Program Outcomes Study', authors: 'Aroda VR, Edelstein SL, Goldberg RB et al.', journal: 'J Clin Endocrinol Metab. 2016;101(4):1754-61.', pmid: '26900641' },
    ],
    faq: [
      { q: { hu: 'Mikor érdemes Metformint Semaglutide-ra vagy SGLT2-i-re cserélni?', en: 'When should Metformin be switched to Semaglutide or an SGLT2i?', pl: 'Kiedy zmienić Metforminę na Semaglutyd lub SGLT2i?' }, a: { hu: 'Az ADA/EASD 2022 alapján nem feltétlenül kell cserélni, hanem általában hozzá kell adni. ASCVD vagy szívelégtelenség jelenléténél GLP-1 RA vagy SGLT2-i priorizálandó már első-vonalban is, akár Metformin nélkül. CKD-prioritásnál (albuminuria) SGLT2-i.', en: 'Per ADA/EASD 2022 you usually add rather than switch. With ASCVD or heart failure, GLP-1 RA or SGLT2i is prioritized first-line, possibly without metformin. With CKD priority (albuminuria), SGLT2i.', pl: 'Wg ADA/EASD 2022 zwykle dodaje się, a nie zmienia. Przy ASCVD lub niewydolności serca priorytetyzuje się GLP-1 RA lub SGLT2i już w pierwszej linii, ewentualnie bez metforminy. Przy priorytecie CKD (albuminuria) SGLT2i.' } },
      { q: { hu: 'Mit jelent a laktát-acidózis kockázata?', en: 'What does the lactic acidosis risk mean?', pl: 'Co oznacza ryzyko kwasicy mleczanowej?' }, a: { hu: 'A modern adatok szerint a Metformin-asszociált laktát-acidózis incidenciája < 0,03 eset / 1000 betegév normál vesefunkció mellett, ami a régi Phenformin-éval (kivont 1977) nem hasonlítható össze. Súlyos akut betegség, dehidráció, vesekárosodás, alkohol-abúzus, kontraszt-MR/CT mind külön kockázatfaktor.', en: 'Modern data show metformin-associated lactic acidosis incidence < 0.03 cases / 1000 patient-years with normal renal function, not comparable to old Phenformin (withdrawn 1977). Severe acute illness, dehydration, renal impairment, alcohol abuse, contrast imaging are separate risk factors.', pl: 'Nowoczesne dane pokazują częstość kwasicy mleczanowej związanej z metforminą < 0,03 przypadku / 1000 pacjentolat przy prawidłowej funkcji nerek, nieporównywalną ze starą Fenforminą (wycofana 1977). Ciężka ostra choroba, odwodnienie, uszkodzenie nerek, nadużywanie alkoholu, obrazowanie kontrastowe to oddzielne czynniki ryzyka.' } },
      { q: { hu: 'Mi a teendő, ha GI-mellékhatások nem múlnak?', en: 'What if GI side effects do not subside?', pl: 'Co zrobić, gdy działania niepożądane GI nie ustępują?' }, a: { hu: 'Először lassítsa a titrációt (500 mg/2 hét), válassza az XR (extended release) készítményt, mindig étkezéssel vegye be. Ha 4 hét után sem javul, fontolóra veendő dóziscsökkentés vagy alternatív szer (SGLT2-i, GLP-1 RA). DPP-iratok szerint ~5% véglegesen nem tolerálja.', en: 'First slow titration (500 mg/2 wk), choose XR (extended release), always take with food. If no improvement after 4 weeks, consider dose reduction or alternative agent (SGLT2i, GLP-1 RA). DPP records: ~5% permanently intolerant.', pl: 'Najpierw spowolnij titrację (500 mg/2 tyg.), wybierz XR (o przedłużonym uwalnianiu), zawsze przyjmuj z jedzeniem. Jeśli brak poprawy po 4 tygodniach, rozważ redukcję dawki lub alternatywę (SGLT2i, GLP-1 RA). Wg DPP ~5% trwale nie toleruje.' } },
      { q: { hu: 'Használható-e a Metformin terhességben?', en: 'Can metformin be used in pregnancy?', pl: 'Czy metformina może być stosowana w ciąży?' }, a: { hu: 'Az ACOG és NICE iránymutatások szerint a gesztációs diabétesz második vonalbeli kezelése Metforminnal megengedhető, ha inzulin nem opció vagy beteg preferenciája. Az MiG-trial (Rowan 2008 NEJM PMID 18463376) safety-igazolta. Hosszú távú gyermek-followup adatok kedvezőek, de inzulin marad a gold standard.', en: 'ACOG and NICE guidelines allow Metformin as second-line gestational diabetes therapy when insulin not an option or per patient preference. The MiG trial (Rowan 2008 NEJM PMID 18463376) demonstrated safety. Long-term child follow-up data favorable, but insulin remains the gold standard.', pl: 'Wytyczne ACOG i NICE dopuszczają metforminę jako drugą linię leczenia cukrzycy ciążowej, gdy insulina nie jest opcją lub wg preferencji pacjenta. Badanie MiG (Rowan 2008 NEJM PMID 18463376) potwierdziło bezpieczeństwo. Długoterminowe dane dotyczące dzieci są korzystne, ale insulina pozostaje złotym standardem.' } },
      { q: { hu: 'Életmód-változás helyettesítheti a Metformint?', en: 'Can lifestyle change replace metformin?', pl: 'Czy zmiana stylu życia może zastąpić metforminę?' }, a: { hu: 'A DPP (2002 NEJM) trial szerint az intenzív életmód-intervenció (7%-os testsúlycsökkenés, heti 150+ perc fizikai aktivitás) 58%-kal csökkentette a T2DM kialakulását prediabéteszesnél, szemben a Metformin 31%-ával. Tehát az életmód superior, de a Metformin compliance-szempontból tartós (DPPOS 10-éves követés). T2DM-ben már nem helyettesíti, csak kiegészíti.', en: 'The DPP (2002 NEJM) trial showed intensive lifestyle intervention (7% weight loss, 150+ minutes weekly physical activity) reduced T2DM incidence by 58% in prediabetics vs 31% for metformin. So lifestyle is superior, but metformin is more compliance-durable (DPPOS 10-year follow-up). In established T2DM it does not replace, only complements.', pl: 'Badanie DPP (2002 NEJM) wykazało, że intensywna interwencja stylu życia (7% utrata wagi, 150+ minut aktywności fizycznej tygodniowo) zmniejszyła zachorowalność na T2DM o 58% w stanie przedcukrzycowym vs 31% dla metforminy. Styl życia jest więc lepszy, ale metformina jest trwalsza pod względem compliance (DPPOS 10-letnia obserwacja). W ustalonym T2DM nie zastępuje, tylko uzupełnia.' } },
    ],
    related: ['semaglutide'],
    doseCalc: {
      type: 'titration',
      titration: [
        { phase: { hu: 'Hét 1-2', en: 'Week 1-2', pl: 'Tydzień 1-2' }, dose: '500' },
        { phase: { hu: 'Hét 3-4', en: 'Week 3-4', pl: 'Tydzień 3-4' }, dose: '1000' },
        { phase: { hu: 'Hét 5-8', en: 'Week 5-8', pl: 'Tydzień 5-8' }, dose: '1500' },
        { phase: { hu: 'Cél-dózis', en: 'Target', pl: 'Dawka docelowa' }, dose: '2000' },
      ],
      unit: 'mg/nap',
      note: {
        hu: 'Lassú titráció a GI-tolerancia érdekében. Mindig étkezéssel, lehetőleg az XR (extended release) készítményt válassza. Max 2000-2550 mg/nap, vesefunkció (eGFR) függvényében dóziscsökkentés.',
        en: 'Slow titration for GI tolerance. Always with food, prefer XR (extended release). Max 2000-2550 mg/day, dose reduction per renal function (eGFR).',
        pl: 'Powolna titracja dla tolerancji GI. Zawsze z jedzeniem, preferuj XR (o przedłużonym uwalnianiu). Maks. 2000-2550 mg/dzień, redukcja dawki wg czynności nerek (eGFR).',
      },
    },
  },

  // ===== 2. SEMAGLUTIDE (Anyagcsere CORE, GLP-1 RA blockbuster, T2DM + obesity Rx) =====
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    image: null,
    accentColor: '#10b981',
    tagColor: 'rgba(16,185,129,0.18)',
    shortDesc: {
      hu: 'GLP-1 receptor agonista, T2DM és obesity FDA-jóváhagyott Rx (Ozempic, Wegovy, Rybelsus). Az elmúlt évtized blockbuster anyagcsere-szere.',
      en: 'GLP-1 receptor agonist, FDA-approved Rx for T2DM and obesity (Ozempic, Wegovy, Rybelsus). The blockbuster metabolic agent of the past decade.',
      pl: 'Agonista receptora GLP-1, lek Rx zatwierdzony przez FDA dla T2DM i otyłości (Ozempic, Wegovy, Rybelsus). Blockbusterowy lek metaboliczny minionej dekady.',
    },
    description: {
      hu: 'A Semaglutide egy hosszú felezési idejű (~7 nap) human GLP-1 analóg, amelyet a Novo Nordisk fejlesztett ki. A T2DM kezelésére 2017-ben (Ozempic, FDA), obesitás-kezelésre 2021-ben (Wegovy, FDA 2,4 mg heti) kapott engedélyt; oralis változata Rybelsus néven 2019 óta elérhető. A glükózfüggő inzulin-szekréciót stimulálja, a glükagon-szekréciót gátolja, lassítja a gyomorürülést, és centrális hatással csökkenti az étvágyat (POMC/CART aktiváció). A STEP-1 trial (Wilding 2021 NEJM) 68 hetes Wegovy-vizsgálatban átlag 14,9% testsúlyvesztést mutatott non-diabetic obesitásban, ami a bariátriai sebészet utáni eredményeket közelíti. A SUSTAIN-6 (Marso 2016 NEJM) és SELECT (Lincoff 2023 NEJM) trial-ek kardiovaszkuláris végpont-előnyt is igazoltak.',
      en: 'Semaglutide is a long-half-life (~7 d) human GLP-1 analog developed by Novo Nordisk. Approved for T2DM in 2017 (Ozempic, FDA), for obesity in 2021 (Wegovy, FDA 2.4 mg weekly); oral form Rybelsus available since 2019. It stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and centrally reduces appetite (POMC/CART activation). The STEP-1 trial (Wilding 2021 NEJM) showed mean 14.9% body weight loss over 68 weeks on Wegovy in non-diabetic obesity, approaching post-bariatric outcomes. SUSTAIN-6 (Marso 2016 NEJM) and SELECT (Lincoff 2023 NEJM) confirmed cardiovascular outcome benefit.',
      pl: 'Semaglutyd to długi okres półtrwania (~7 dni) ludzki analog GLP-1 opracowany przez Novo Nordisk. Zatwierdzony dla T2DM w 2017 r. (Ozempic, FDA), dla otyłości w 2021 r. (Wegovy, FDA 2,4 mg tygodniowo); doustna forma Rybelsus dostępna od 2019 r. Stymuluje wydzielanie insuliny zależne od glukozy, hamuje wydzielanie glukagonu, spowalnia opróżnianie żołądka i centralnie zmniejsza apetyt (aktywacja POMC/CART). Badanie STEP-1 (Wilding 2021 NEJM) wykazało średnią 14,9% utratę masy ciała w ciągu 68 tygodni na Wegovy w otyłości bez cukrzycy, zbliżając się do wyników po chirurgii bariatrycznej. SUSTAIN-6 (Marso 2016 NEJM) i SELECT (Lincoff 2023 NEJM) potwierdziły korzyść w punkcie końcowym sercowo-naczyniowym.',
    },
    keyInfo: [
      { label: { hu: 'ATC kód', en: 'ATC code', pl: 'Kod ATC' }, value: { hu: 'A10BJ06', en: 'A10BJ06', pl: 'A10BJ06' } },
      { label: { hu: 'Vény-státusz', en: 'Prescription', pl: 'Status recepty' }, value: { hu: 'Vényköteles (Rx)', en: 'Prescription only (Rx)', pl: 'Na receptę (Rx)' } },
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'GLP-1 receptor-agonista', en: 'GLP-1 receptor agonist', pl: 'Agonista receptora GLP-1' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '~7 nap (heti adagolás)', en: '~7 days (weekly dosing)', pl: '~7 dni (dawkowanie tygodniowe)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek' }, value: { hu: '1-2 hét (étvágy), 12-16 hét (HbA1c steady-state)', en: '1-2 weeks (appetite), 12-16 weeks (HbA1c steady-state)', pl: '1-2 tygodnie (apetyt), 12-16 tygodni (HbA1c steady-state)' } },
    ],
    mechanism: {
      hu: 'GLP-1 receptor agonista, amely glükózfüggő módon (csak hyperglykaemia-nál) stimulálja a β-sejtek inzulin-szekrécióját, gátolja az α-sejtek glükagon-szekrécióját, lassítja a gyomorürülést, és a hipotalamuszban (POMC/CART neuronok) csökkenti az étvágyat és növeli a teltségérzetet. A C18 zsírsav-konjugáció albumin-kötést és lassú elimináció eredményez, ami a heti adagolást lehetővé teszi.',
      en: 'GLP-1 receptor agonist that glucose-dependently (only at hyperglycemia) stimulates β-cell insulin secretion, suppresses α-cell glucagon secretion, slows gastric emptying, and in the hypothalamus (POMC/CART neurons) decreases appetite and increases satiety. C18 fatty acid conjugation provides albumin binding and slow elimination, enabling weekly dosing.',
      pl: 'Agonista receptora GLP-1, który w sposób zależny od glukozy (tylko w hiperglikemii) stymuluje wydzielanie insuliny przez komórki β, hamuje wydzielanie glukagonu przez komórki α, spowalnia opróżnianie żołądka i w podwzgórzu (neurony POMC/CART) zmniejsza apetyt i zwiększa sytość. Sprzężenie z kwasem tłuszczowym C18 zapewnia wiązanie z albuminami i powolną eliminację, umożliwiając dawkowanie tygodniowe.',
    },
    legalStatus: {
      hu: 'EU/HU: vényköteles (Ozempic T2DM-re, Wegovy obesitásra, Rybelsus orális T2DM). USA: FDA Rx Schedule None (nem ütemezett). 2022-2024 globális ellátási hiány, fekete piacon orvosi felügyelet nélküli használat dokumentálva (FDA warning compounded versions).',
      en: 'EU/HU: prescription only (Ozempic for T2DM, Wegovy for obesity, Rybelsus oral T2DM). USA: FDA Rx, not scheduled. 2022-2024 global supply shortage, off-label black-market use without medical supervision documented (FDA warning on compounded versions).',
      pl: 'UE/PL: na receptę (Ozempic dla T2DM, Wegovy dla otyłości, Rybelsus doustny T2DM). USA: FDA Rx, niekontrolowany. Globalny niedobór 2022-2024, czarnorynkowe użycie off-label bez nadzoru medycznego udokumentowane (ostrzeżenie FDA dotyczące wersji compounded).',
    },
    onsetTime: '1-2 weeks (appetite suppression), 12-16 weeks (HbA1c steady-state)',
    halfLife: '~7 days (enables once-weekly subcutaneous dosing)',
    atcCode: 'A10BJ06',
    prescriptionStatus: {
      hu: 'Vényköteles (Rx), egyes EU-országokban GLP-1 RA-szakorvosi szűkítés',
      en: 'Prescription only (Rx), GLP-1 RA specialist gating in some EU countries',
      pl: 'Na receptę (Rx), w niektórych krajach UE ograniczenie do specjalistów GLP-1 RA',
    },
    indications: [
      { hu: '2-es típusú cukorbetegség (Ozempic 0,25-2,0 mg heti)', en: 'Type 2 diabetes mellitus (Ozempic 0.25-2.0 mg weekly)', pl: 'Cukrzyca typu 2 (Ozempic 0,25-2,0 mg tygodniowo)' },
      { hu: 'Krónikus súlykezelés obesitásban (Wegovy 2,4 mg heti, BMI ≥ 30 vagy BMI ≥ 27 + komorbiditás)', en: 'Chronic weight management in obesity (Wegovy 2.4 mg weekly, BMI ≥ 30 or BMI ≥ 27 + comorbidity)', pl: 'Przewlekłe leczenie masy ciała w otyłości (Wegovy 2,4 mg tygodniowo, BMI ≥ 30 lub BMI ≥ 27 + choroba współistniejąca)' },
      { hu: '2-es típusú cukorbetegség orális forma (Rybelsus 3-14 mg naponta)', en: 'Type 2 diabetes oral form (Rybelsus 3-14 mg daily)', pl: 'Cukrzyca typu 2 forma doustna (Rybelsus 3-14 mg dziennie)' },
      { hu: 'MACE-redukció T2DM-ben (Ozempic FDA cardiovascular indication, SUSTAIN-6 alapján)', en: 'MACE reduction in T2DM (Ozempic FDA cardiovascular indication, based on SUSTAIN-6)', pl: 'Redukcja MACE w T2DM (wskazanie kardiologiczne FDA Ozempic, na podstawie SUSTAIN-6)' },
      { hu: 'MACE-redukció overweight/obese non-diabetikus felnőtteknél ASCVD-vel (Wegovy 2024 FDA, SELECT alapján)', en: 'MACE reduction in overweight/obese non-diabetic adults with ASCVD (Wegovy 2024 FDA, based on SELECT)', pl: 'Redukcja MACE u dorosłych z nadwagą/otyłością bez cukrzycy z ASCVD (Wegovy 2024 FDA, na podstawie SELECT)' },
    ],
    contraindications: [
      { hu: 'Személyes vagy családi medulláris pajzsmirigy-karcinóma (MTC) anamnézis', en: 'Personal or family history of medullary thyroid carcinoma (MTC)', pl: 'Osobista lub rodzinna historia rdzeniastego raka tarczycy (MTC)' },
      { hu: 'Multiplex endokrin neoplázia 2 szindróma (MEN-2)', en: 'Multiple endocrine neoplasia syndrome type 2 (MEN-2)', pl: 'Zespół mnogiej nowotworowości endokrynnej typu 2 (MEN-2)' },
      { hu: 'Aktív pankreatitis vagy ismétlődő pankreatitisz története', en: 'Active pancreatitis or history of recurrent pancreatitis', pl: 'Aktywne zapalenie trzustki lub historia nawracającego zapalenia trzustki' },
      { hu: 'Terhesség és szoptatás (állatkísérletekben teratogén)', en: 'Pregnancy and lactation (teratogenic in animal studies)', pl: 'Ciąża i karmienie piersią (teratogenny w badaniach na zwierzętach)' },
      { hu: 'Súlyos gasztroparezis vagy más jelentős GI-motilitási zavar', en: 'Severe gastroparesis or other significant GI motility disorder', pl: 'Ciężka gastropareza lub inne istotne zaburzenie motoryki GI' },
    ],
    commonSideEffects: [
      { hu: 'GI-mellékhatások (>20%): hányinger, hányás, hasmenés, székrekedés, eructatio', en: 'GI side effects (>20%): nausea, vomiting, diarrhea, constipation, eructation', pl: 'Działania niepożądane GI (>20%): nudności, wymioty, biegunka, zaparcia, eruktacja' },
      { hu: 'Dóziseszkalációs fázisban legkifejezettebb, általában 4-8 hét alatt enyhül', en: 'Most pronounced in dose escalation phase, usually subsides over 4-8 weeks', pl: 'Najbardziej widoczne w fazie eskalacji dawki, zwykle ustępują w ciągu 4-8 tygodni' },
      { hu: 'Injekcióhely-reakció (Ozempic/Wegovy SC)', en: 'Injection site reaction (Ozempic/Wegovy SC)', pl: 'Reakcja w miejscu wstrzyknięcia (Ozempic/Wegovy SC)' },
      { hu: 'Súlyos, ritka: akut pankreatitisz (FDA boxed warning), epekő (gyors súlyvesztés), diabéteszes retinopátia-progresszió (gyors glikémia-csökkenés)', en: 'Severe, rare: acute pancreatitis (FDA boxed warning), gallstones (rapid weight loss), diabetic retinopathy progression (rapid glycemia drop)', pl: 'Ciężkie, rzadkie: ostre zapalenie trzustki (ostrzeżenie FDA boxed), kamica żółciowa (szybka utrata masy), progresja retinopatii cukrzycowej (szybki spadek glikemii)' },
      { hu: 'Súlyveszteség gyorsulása (-5 kg/3 hó) izomtömeg-csökkenéshez vezethet ellensúlyozó fehérje + ellenállás-edzés nélkül', en: 'Accelerated weight loss (-5 kg/3 mo) can drive lean mass loss without counterbalancing protein + resistance training', pl: 'Przyspieszona utrata masy ciała (-5 kg/3 mies.) może prowadzić do utraty masy beztłuszczowej bez zbilansowania białkiem i treningiem oporowym' },
    ],
    cyp450: ['Not metabolized by CYP450 (proteolytic degradation, similar to native peptides)', 'No major CYP-mediated drug interactions'],
    crossMolInteractions: [
      { hu: 'Insulin, sulfonylureák: hipoglikémia-kockázat fokozása, dóziscsökkentés szükséges', en: 'Insulin, sulfonylureas: increased hypoglycemia risk, dose reduction required', pl: 'Insulina, sulfonylomoczniki: zwiększone ryzyko hipoglikemii, wymagana redukcja dawki' },
      { hu: 'Orális gyógyszerek (Levothyroxin, warfarin, orális fogamzásgátló): a lassított gyomorürülés miatt felszívódás módosulhat, klinikailag általában nem szignifikáns', en: 'Oral medications (levothyroxine, warfarin, oral contraceptives): absorption may shift due to delayed gastric emptying, clinically usually not significant', pl: 'Leki doustne (lewotyroksyna, warfaryna, doustne środki antykoncepcyjne): wchłanianie może się zmienić ze względu na opóźnione opróżnianie żołądka, klinicznie zwykle nieistotne' },
      { hu: 'Egyéb GLP-1 RA, DPP-4 inhibitor: redundáns mechanizmus, nem kombinálandó', en: 'Other GLP-1 RA, DPP-4 inhibitor: redundant mechanism, do not combine', pl: 'Inne GLP-1 RA, inhibitor DPP-4: redundantny mechanizm, nie łączyć' },
      { hu: 'Metformin, SGLT2-i: szinergisztikus, racionális kombináció (ADA/EASD 2022)', en: 'Metformin, SGLT2i: synergistic, rational combination (ADA/EASD 2022)', pl: 'Metformina, SGLT2i: synergistyczne, racjonalna kombinacja (ADA/EASD 2022)' },
      { hu: 'Alkohol: pankreatitisz-kockázat fokozhatja, mértékletesség', en: 'Alcohol: may increase pancreatitis risk, moderation', pl: 'Alkohol: może zwiększyć ryzyko zapalenia trzustki, umiarkowanie' },
    ],
    benefits: [
      { hu: 'HbA1c csökkenés átlag 1,5-1,8% (SUSTAIN trial-ek)', en: 'HbA1c reduction average 1.5-1.8% (SUSTAIN trials)', pl: 'Obniżenie HbA1c średnio 1,5-1,8% (badania SUSTAIN)' },
      { hu: 'Testsúlycsökkenés átlag 14,9% 68 hét alatt Wegovy 2,4 mg-mal (STEP-1)', en: 'Body weight reduction averaging 14.9% over 68 weeks on Wegovy 2.4 mg (STEP-1)', pl: 'Redukcja masy ciała średnio 14,9% w ciągu 68 tygodni na Wegovy 2,4 mg (STEP-1)' },
      { hu: 'MACE-redukció T2DM-ben (SUSTAIN-6, HR 0,74)', en: 'MACE reduction in T2DM (SUSTAIN-6, HR 0.74)', pl: 'Redukcja MACE w T2DM (SUSTAIN-6, HR 0,74)' },
      { hu: 'MACE-redukció overweight/ASCVD non-diabétikuson (SELECT 2023, HR 0,80)', en: 'MACE reduction in overweight/ASCVD non-diabetics (SELECT 2023, HR 0.80)', pl: 'Redukcja MACE u osób z nadwagą/ASCVD bez cukrzycy (SELECT 2023, HR 0,80)' },
      { hu: 'Heti egyszeri SC adagolás (vs napi inzulin), kényelmes compliance', en: 'Once-weekly SC dosing (vs daily insulin), convenient compliance', pl: 'Dawkowanie SC raz w tygodniu (vs codzienna insulina), wygodny compliance' },
    ],
    quickStart: [
      { hu: 'Heti egyszeri SC injekció (has, comb, felkar), forgó adásterv', en: 'Once-weekly SC injection (abdomen, thigh, upper arm), rotating site plan', pl: 'Cotygodniowa iniekcja SC (brzuch, udo, ramię), rotacyjny plan miejsc' },
      { hu: 'Lassú titráció kötelező a GI-mellékhatások mitigálására (4 hét/dózisszint)', en: 'Slow titration mandatory to mitigate GI side effects (4 weeks per dose step)', pl: 'Obowiązkowa powolna titracja w celu łagodzenia działań niepożądanych GI (4 tygodnie na poziom dawki)' },
      { hu: 'Étkezések: kisebb adagok, lassabb evés, magas-fehérje előny (izomtömeg-védelem)', en: 'Meals: smaller portions, slower eating, prioritize protein (preserve lean mass)', pl: 'Posiłki: mniejsze porcje, wolniejsze jedzenie, priorytet białka (ochrona masy beztłuszczowej)' },
      { hu: 'Ellenállás-edzés heti 2-3x az izomtömeg-veszteség minimalizálására', en: 'Resistance training 2-3x weekly to minimize lean mass loss', pl: 'Trening oporowy 2-3x tygodniowo, by zminimalizować utratę masy beztłuszczowej' },
      { hu: 'Hidratáció szigorúan (1,5-2 L/nap), GI-vesztések kompenzációja', en: 'Strict hydration (1.5-2 L/day), compensate GI losses', pl: 'Ścisłe nawodnienie (1,5-2 L/dzień), kompensacja strat GI' },
    ],
    expectations: [
      { label: { hu: '1-4. hét (0,25 mg)', en: 'Weeks 1-4 (0.25 mg)', pl: 'Tygodnie 1-4 (0,25 mg)' }, body: { hu: 'Indító dózis, sub-terápiás. Cél a GI-tolerancia kialakítása. Étvágycsökkenés már észlelhető. Hányinger 20%-ban, általában enyhe.', en: 'Starter dose, sub-therapeutic. Goal: build GI tolerance. Appetite reduction already noticeable. Nausea in 20%, usually mild.', pl: 'Dawka początkowa, subterapeutyczna. Cel: zbudować tolerancję GI. Redukcja apetytu już zauważalna. Nudności w 20%, zwykle łagodne.' } },
      { label: { hu: '5-12. hét (0,5-1,0 mg)', en: 'Weeks 5-12 (0.5-1.0 mg)', pl: 'Tygodnie 5-12 (0,5-1,0 mg)' }, body: { hu: 'Terápiás T2DM-dózis-tartomány. HbA1c-csökkenés és súlyvesztés (-3 ... -5 kg) megjelenik. GI-mellékhatások mérséklődnek.', en: 'Therapeutic T2DM dose range. HbA1c reduction and weight loss (-3 ... -5 kg) appear. GI side effects subside.', pl: 'Terapeutyczny zakres dawek T2DM. Pojawia się obniżenie HbA1c i utrata masy (-3 ... -5 kg). Działania niepożądane GI ustępują.' } },
      { label: { hu: '13-68. hét (1,7-2,4 mg, Wegovy)', en: 'Weeks 13-68 (1.7-2.4 mg, Wegovy)', pl: 'Tygodnie 13-68 (1,7-2,4 mg, Wegovy)' }, body: { hu: 'Obesity-dózis-tartomány. STEP-1 trial: átlag 14,9% testsúlyvesztés. Cél a plateau elérése 60-68. hét körül. Bloodwork: lipid, HbA1c, máj-, vesefunkció, B12.', en: 'Obesity dose range. STEP-1 trial: average 14.9% weight loss. Goal: reach plateau around weeks 60-68. Bloodwork: lipids, HbA1c, liver, renal function, B12.', pl: 'Zakres dawek dla otyłości. STEP-1: średnia 14,9% utrata masy. Cel: osiągnięcie plateau około 60-68 tygodnia. Bloodwork: lipidy, HbA1c, próby wątrobowe, nerkowe, B12.' } },
    ],
    quality: {
      pure: [
        { hu: 'Novo Nordisk Ozempic (T2DM), Wegovy (obesity), Rybelsus (orális T2DM): originator', en: 'Novo Nordisk Ozempic (T2DM), Wegovy (obesity), Rybelsus (oral T2DM): originator', pl: 'Novo Nordisk Ozempic (T2DM), Wegovy (otyłość), Rybelsus (doustny T2DM): oryginator' },
        { hu: 'FlexTouch pen-injektor (Ozempic/Wegovy), egyszer-használatos tűkkel', en: 'FlexTouch pen injector (Ozempic/Wegovy), single-use needles', pl: 'Wstrzykiwacz FlexTouch (Ozempic/Wegovy), igły jednorazowego użytku' },
      ],
      caution: [
        { hu: 'FDA boxed warning: medulláris pajzsmirigy-karcinóma (MTC) rágcsálókban, klinikailag bizonytalan', en: 'FDA boxed warning: medullary thyroid carcinoma (MTC) in rodents, clinically uncertain', pl: 'Ostrzeżenie FDA boxed: rdzeniasty rak tarczycy (MTC) u gryzoni, klinicznie niepewne' },
        { hu: 'Akut pankreatitisz-eset jelentés, hasi fájdalomnál azonnali ellátás', en: 'Acute pancreatitis case reports, immediate care for abdominal pain', pl: 'Doniesienia o ostrym zapaleniu trzustki, natychmiastowa opieka przy bólu brzucha' },
        { hu: 'Diabéteszes retinopátia-progresszió gyors HbA1c-csökkenésnél (szemészeti monitor)', en: 'Diabetic retinopathy progression with rapid HbA1c drop (ophthalmic monitoring)', pl: 'Progresja retinopatii cukrzycowej przy szybkim spadku HbA1c (monitorowanie okulistyczne)' },
        { hu: 'Izomtömeg-veszteség gyors fogyásnál (DEXA-monitor ajánlott), fehérje + edzés ellensúlyoz', en: 'Lean mass loss with rapid weight loss (DEXA monitoring advised), protein + training to counterbalance', pl: 'Utrata masy beztłuszczowej przy szybkim chudnięciu (zalecany monitoring DEXA), białko + trening jako przeciwwaga' },
        { hu: 'Epekő (chol-lithiasis) kockázata megemelkedik 3-5%-kal a gyors fogyás miatt', en: 'Gallstone (cholelithiasis) risk rises 3-5% due to rapid weight loss', pl: 'Ryzyko kamicy żółciowej (cholelithiasis) wzrasta o 3-5% z powodu szybkiej utraty masy' },
      ],
      avoid: [
        { hu: 'MTC vagy MEN-2 családi anamnézis (FDA boxed warning)', en: 'MTC or MEN-2 family history (FDA boxed warning)', pl: 'Wywiad rodzinny MTC lub MEN-2 (ostrzeżenie FDA boxed)' },
        { hu: 'Aktív pankreatitis vagy ismétlődő pankreatitisz történet', en: 'Active pancreatitis or recurrent pancreatitis history', pl: 'Aktywne zapalenie trzustki lub historia nawracającego' },
        { hu: 'Terhesség, szoptatás (animal teratogenicity, no human safety data)', en: 'Pregnancy, lactation (animal teratogenicity, no human safety data)', pl: 'Ciąża, karmienie piersią (teratogenność u zwierząt, brak danych ludzkich)' },
        { hu: 'Súlyos gasztroparezis (a hatás kontraproduktív lehet)', en: 'Severe gastroparesis (effect may be counterproductive)', pl: 'Ciężka gastropareza (efekt może być przeciwskuteczny)' },
      ],
    },
    interactions: [
      { hu: 'Metformin: szinergisztikus, ADA/EASD 2022 alapján standard kombináció', en: 'Metformin: synergistic, standard ADA/EASD 2022 combo', pl: 'Metformina: synergistyczna, standardowa kombinacja ADA/EASD 2022' },
      { hu: 'SGLT2 inhibitor: háromféle szinergisztikus mechanizmus T2DM-ben', en: 'SGLT2 inhibitor: three-way synergistic mechanism in T2DM', pl: 'Inhibitor SGLT2: trójstronny synergistyczny mechanizm w T2DM' },
      { hu: 'Insulin: kombinálható, de dóziscsökkentés (~20%) szükséges hipoglikémia-kockázat miatt', en: 'Insulin: combinable but dose reduction (~20%) needed due to hypoglycemia risk', pl: 'Insulina: można łączyć, ale wymagana redukcja dawki (~20%) z powodu ryzyka hipoglikemii' },
      { hu: 'Sulfonylureák: hipoglikémia-kockázat, dóziscsökkentés vagy elhagyás javasolt', en: 'Sulfonylureas: hypoglycemia risk, reduce or discontinue', pl: 'Sulfonylomoczniki: ryzyko hipoglikemii, redukcja lub odstawienie' },
      { hu: 'Orális gyógyszerek (Levothyroxin, warfarin): gyomorürülés-lassítás miatt felszívódás módosulhat', en: 'Oral drugs (levothyroxine, warfarin): absorption may shift due to slowed gastric emptying', pl: 'Leki doustne (lewotyroksyna, warfaryna): wchłanianie może się zmienić z powodu spowolnienia opróżniania żołądka' },
    ],
    studies: [
      { title: 'Once-weekly semaglutide in adults with overweight or obesity (STEP-1)', authors: 'Wilding JPH, Batterham RL, Calanna S et al.', journal: 'N Engl J Med. 2021;384(11):989-1002.', pmid: '33567185' },
      { title: 'Semaglutide and cardiovascular outcomes in patients with type 2 diabetes (SUSTAIN-6)', authors: 'Marso SP, Bain SC, Consoli A et al.', journal: 'N Engl J Med. 2016;375(19):1834-1844.', pmid: '27633186' },
      { title: 'Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT)', authors: 'Lincoff AM, Brown-Frandsen K, Colhoun HM et al.', journal: 'N Engl J Med. 2023;389(24):2221-2232.', pmid: '37952131' },
      { title: 'Oral semaglutide and cardiovascular outcomes in patients with type 2 diabetes (PIONEER 6)', authors: 'Husain M, Birkenfeld AL, Donsmark M et al.', journal: 'N Engl J Med. 2019;381(9):841-851.', pmid: '31185157' },
      { title: 'Tirzepatide versus semaglutide once weekly in patients with type 2 diabetes (SURPASS-2)', authors: 'Frías JP, Davies MJ, Rosenstock J et al.', journal: 'N Engl J Med. 2021;385(6):503-515.', pmid: '34170647' },
      { title: 'Tirzepatide once weekly for the treatment of obesity (SURMOUNT-5 head-to-head)', authors: 'Aronne LJ, Horn DB, le Roux CW et al.', journal: 'N Engl J Med. 2025.', pmid: '40353578' },
      { title: 'Semaglutide 2.4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2)', authors: 'Davies M, Færch L, Jeppesen OK et al.', journal: 'Lancet. 2021;397(10278):971-984.', pmid: '33667417' },
    ],
    faq: [
      { q: { hu: 'Mi a különbség az Ozempic és a Wegovy között?', en: 'What is the difference between Ozempic and Wegovy?', pl: 'Jaka jest różnica między Ozempic a Wegovy?' }, a: { hu: 'Mindkettő Semaglutide hatóanyag SC injekcióban, de eltérő dózisokkal és indikációkkal: Ozempic 0,25-2,0 mg/hét T2DM-re, Wegovy 0,25-2,4 mg/hét obesitásra (BMI ≥ 30, vagy BMI ≥ 27 + komorbiditás). A Rybelsus az orális forma T2DM-re (3-14 mg napi). A Semaglutide molekula azonos, csak a dózis-szint és a klinikai indikáció eltérő.', en: 'Both are semaglutide active ingredient in SC injection but with different doses and indications: Ozempic 0.25-2.0 mg/week for T2DM, Wegovy 0.25-2.4 mg/week for obesity (BMI ≥ 30, or BMI ≥ 27 + comorbidity). Rybelsus is the oral form for T2DM (3-14 mg daily). Same semaglutide molecule, only dose level and clinical indication differ.', pl: 'Oba zawierają semaglutyd w iniekcji SC, ale z różnymi dawkami i wskazaniami: Ozempic 0,25-2,0 mg/tydzień dla T2DM, Wegovy 0,25-2,4 mg/tydzień dla otyłości (BMI ≥ 30 lub BMI ≥ 27 + choroba współistniejąca). Rybelsus to forma doustna dla T2DM (3-14 mg dziennie). Ta sama cząsteczka semaglutydu, różnią się tylko dawką i wskazaniem klinicznym.' } },
      { q: { hu: 'Visszahízok-e a Semaglutide elhagyása után?', en: 'Will weight return after stopping semaglutide?', pl: 'Czy waga wróci po odstawieniu semaglutydu?' }, a: { hu: 'A STEP-4 trial (Rubino 2021 JAMA, PMID 33755728) szerint a Semaglutide elhagyása után 1 év alatt a visszahízás ~2/3-os (a kezdeti súlyveszteség kétharmada visszatér). Az obesity-szakorvosok jelenleg krónikus, élethosszig tartó terápiaként kezelik a hatóanyagot. A nem-farmakológiai életmódváltás (intenzív táplálkozás-coaching + ellenállás-edzés) a fenntartást támogatja, de teljesen nem helyettesíti.', en: 'STEP-4 trial (Rubino 2021 JAMA, PMID 33755728) showed about 2/3 weight regain within 1 year after semaglutide discontinuation. Obesity specialists currently treat the drug as a chronic, lifelong therapy. Non-pharmacological lifestyle change (intensive nutrition coaching + resistance training) supports maintenance but does not fully replace.', pl: 'Badanie STEP-4 (Rubino 2021 JAMA, PMID 33755728) pokazało około 2/3 odzyskanie masy w ciągu 1 roku po odstawieniu semaglutydu. Specjaliści od otyłości obecnie traktują ten lek jako przewlekłą, dożywotnią terapię. Niefarmakologiczna zmiana stylu życia (intensywne coaching żywieniowy + trening oporowy) wspiera utrzymanie, ale nie zastępuje w pełni.' } },
      { q: { hu: 'Mi a "Ozempic-arc" vagy "GLP-1 muscle loss" jelenség?', en: 'What is "Ozempic face" or "GLP-1 muscle loss"?', pl: 'Czym jest "twarz Ozempic" lub "utrata mięśni GLP-1"?' }, a: { hu: 'A gyors fogyás (>1% testsúly/hét) az arc subcutan zsírjának is elveszítésével jár, ami öregebb megjelenést okoz. A SURMOUNT-1 és STEP-trial-ek DEXA-adatai szerint a tömegcsökkenés ~25-40%-a izom (lean mass). Ennek mitigálására: napi 1,4-1,6 g/kg fehérje, heti 2-3 ellenállás-edzés, kreatin-monohidrát, lassú titráció. Sebészi súlyvesztés-trial-ekben hasonló arány jelentkezik.', en: 'Rapid weight loss (>1% body weight/week) drives subcutaneous facial fat loss too, causing an older appearance. SURMOUNT-1 and STEP DEXA data show ~25-40% of mass loss is lean mass. To mitigate: 1.4-1.6 g/kg protein daily, 2-3 weekly resistance sessions, creatine monohydrate, slow titration. Similar ratio in surgical weight-loss trials.', pl: 'Szybka utrata masy (>1% masy ciała/tydzień) wiąże się z utratą podskórnego tłuszczu twarzy, powodując starsze wyglądanie. Dane DEXA z SURMOUNT-1 i STEP pokazują, że ~25-40% utraty masy to masa beztłuszczowa. Aby złagodzić: 1,4-1,6 g/kg białka dziennie, 2-3 tygodniowo sesje oporowe, kreatyna monohydrat, powolna titracja. Podobna proporcja w chirurgicznych badaniach odchudzania.' } },
      { q: { hu: 'Mit mond a SELECT trial nem-diabéteszes obesitásban?', en: 'What does the SELECT trial show in non-diabetic obesity?', pl: 'Co pokazuje badanie SELECT w otyłości bez cukrzycy?' }, a: { hu: 'A Lincoff 2023 NEJM SELECT randomizált, placebo-kontrollált trial 17 604 overweight/obese, ASCVD-vel élő, NON-diabetic felnőttet követett (átlag 3,3 év). Semaglutide 2,4 mg hetente csökkentette a major adverse cardiovascular event (MACE) kockázatot 20%-kal (HR 0,80, p<0,001). Ez vezetett a 2024-es FDA-indikáció kibővítéséhez non-diabetic ASCVD-re.', en: 'The Lincoff 2023 NEJM SELECT randomized placebo-controlled trial followed 17,604 overweight/obese, ASCVD-positive, NON-diabetic adults (mean 3.3 years). Semaglutide 2.4 mg weekly reduced major adverse cardiovascular event (MACE) risk by 20% (HR 0.80, p<0.001). This drove the 2024 FDA indication expansion to non-diabetic ASCVD.', pl: 'Badanie Lincoff 2023 NEJM SELECT randomizowane, kontrolowane placebo, śledziło 17 604 dorosłych z nadwagą/otyłością, z ASCVD, BEZ cukrzycy (średnio 3,3 lat). Semaglutyd 2,4 mg tygodniowo zmniejszył ryzyko MACE o 20% (HR 0,80, p<0,001). To napędziło rozszerzenie wskazania FDA 2024 na non-diabetic ASCVD.' } },
      { q: { hu: 'Mi a teendő, ha a hányinger nem múlik el?', en: 'What if nausea does not subside?', pl: 'Co zrobić, gdy nudności nie ustępują?' }, a: { hu: 'Az esetek 80%-ában a hányinger a dóziseszkaláció fázisában legkifejezettebb, és 4-8 hét alatt jelentősen mérséklődik. Mitigációs lépések: kisebb és lassabb étkezés, kerülendő zsíros/édes ételek, hidratáció, üres gyomorral injektálni, dózisszinten maradni 4-8 hétig dóziseszkaláció helyett. Ha tartós, dóziscsökkentés vagy gyógyszer-csere (Tirzepatide hasonló hatékonyság, jobb GI-profil).', en: 'In 80% of cases nausea peaks during dose escalation and subsides significantly over 4-8 weeks. Mitigation: smaller and slower meals, avoid fatty/sugary food, hydration, inject on empty stomach, stay at dose for 4-8 weeks instead of escalating. If persistent, dose reduction or switching (Tirzepatide similar efficacy, better GI profile).', pl: 'W 80% przypadków nudności osiągają szczyt podczas eskalacji dawki i ustępują znacznie w ciągu 4-8 tygodni. Łagodzenie: mniejsze i wolniejsze posiłki, unikaj tłustych/słodkich pokarmów, nawodnienie, iniekcja na czczo, pozostanie na dawce przez 4-8 tygodni zamiast eskalacji. Jeśli trwałe, redukcja dawki lub zmiana (Tirzepatyd podobna skuteczność, lepszy profil GI).' } },
    ],
    related: ['metformin'],
    doseCalc: {
      type: 'titration',
      titration: [
        { phase: { hu: 'Hét 1-4 (start)', en: 'Weeks 1-4 (start)', pl: 'Tygodnie 1-4 (start)' }, dose: '0.25' },
        { phase: { hu: 'Hét 5-8', en: 'Weeks 5-8', pl: 'Tygodnie 5-8' }, dose: '0.5' },
        { phase: { hu: 'Hét 9-12', en: 'Weeks 9-12', pl: 'Tygodnie 9-12' }, dose: '1.0' },
        { phase: { hu: 'Hét 13-16', en: 'Weeks 13-16', pl: 'Tygodnie 13-16' }, dose: '1.7' },
        { phase: { hu: 'Wegovy cél (obesity)', en: 'Wegovy target (obesity)', pl: 'Cel Wegovy (otyłość)' }, dose: '2.4' },
      ],
      unit: 'mg/hét SC',
      note: {
        hu: 'Heti egyszeri SC injekció. Lassú titráció KÖTELEZŐ a GI-tolerancia kialakítására (4 hét/dózisszint). T2DM cél-dózis Ozempic 0,5-2,0 mg/hét, obesity cél-dózis Wegovy 2,4 mg/hét. GI-tüneteknél marad a dózisszinten 4-8 hétig dóziseszkaláció helyett.',
        en: 'Once-weekly SC injection. Slow titration MANDATORY for GI tolerance (4 wks per dose). T2DM target Ozempic 0.5-2.0 mg/week, obesity target Wegovy 2.4 mg/week. On GI symptoms stay at dose for 4-8 weeks instead of escalating.',
        pl: 'Cotygodniowa iniekcja SC. Powolna titracja OBOWIĄZKOWA dla tolerancji GI (4 tyg./poziom dawki). Cel T2DM Ozempic 0,5-2,0 mg/tydzień, cel otyłość Wegovy 2,4 mg/tydzień. Przy objawach GI pozostań na dawce przez 4-8 tygodni zamiast eskalacji.',
      },
    },
  },

  // ===== 3. ATORVASTATIN (Kardio CORE, statin gold standard, ASCVD prevenció) =====
  {
    id: 'atorvastatin',
    name: 'Atorvastatin',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'A leginkább felírt nagy-intenzitású statin, HMG-CoA reduktáz-gátló. AHA/ACC és ESC lipid-guideline-anchor 1996 óta. Primer és szekunder ASCVD-prevenció gold standard.',
      en: 'The most prescribed high-intensity statin, HMG-CoA reductase inhibitor. AHA/ACC and ESC lipid guideline anchor since 1996. Gold standard for primary and secondary ASCVD prevention.',
      pl: 'Najczęściej przepisywana statyna o wysokiej intensywności, inhibitor reduktazy HMG-CoA. Kotwica wytycznych lipidowych AHA/ACC i ESC od 1996 r. Złoty standard pierwotnej i wtórnej prewencji ASCVD.',
    },
    description: {
      hu: 'Az Atorvastatin egy szintetikus, lipofil HMG-CoA reduktáz-gátló, amelyet a Pfizer fejlesztett ki (Lipitor, FDA 1996). A koleszterin-szintézis sebességmeghatározó lépését gátolja a májban, ami a hepatocyta LDL-receptorok up-regulációjához és a plazma LDL-koleszterin csökkentéséhez vezet. A TNT (Treating to New Targets, LaRosa 2005 NEJM), CARDS (Colhoun 2004 Lancet) és SPARCL (Amarenco 2006 NEJM) trial-ek bizonyították a kardiovaszkuláris (MI, stroke) és cerebrovaszkuláris végpont-előnyt. A Cholesterol Treatment Trialists\' (CTT) meta-analízis (Baigent 2010 Lancet PMID 21067804) szerint minden 1 mmol/L LDL-csökkenés ~22%-os relatív kockázat-csökkenést hoz major vascular event-re. A nagy-intenzitású dózis (40-80 mg) ≥50%-os LDL-csökkenést céloz, a guideline-szerinti primer (LDL ≥4,9 mmol/L) vagy szekunder (ASCVD-anamnézis) prevenció esetén.',
      en: 'Atorvastatin is a synthetic, lipophilic HMG-CoA reductase inhibitor developed by Pfizer (Lipitor, FDA 1996). It inhibits the rate-limiting step of cholesterol synthesis in the liver, upregulating hepatocyte LDL receptors and lowering plasma LDL cholesterol. The TNT (Treating to New Targets, LaRosa 2005 NEJM), CARDS (Colhoun 2004 Lancet) and SPARCL (Amarenco 2006 NEJM) trials demonstrated cardiovascular (MI, stroke) and cerebrovascular outcome benefit. The Cholesterol Treatment Trialists\' (CTT) meta-analysis (Baigent 2010 Lancet PMID 21067804) showed each 1 mmol/L LDL reduction yields ~22% relative risk reduction for major vascular events. High-intensity dose (40-80 mg) targets ≥50% LDL reduction for guideline-driven primary (LDL ≥4.9 mmol/L) or secondary (ASCVD history) prevention.',
      pl: 'Atorwastatyna to syntetyczny, lipofilny inhibitor reduktazy HMG-CoA opracowany przez Pfizer (Lipitor, FDA 1996). Hamuje krok ograniczający szybkość syntezy cholesterolu w wątrobie, regulując w górę receptory LDL w hepatocytach i obniżając LDL-cholesterol w osoczu. Badania TNT (Treating to New Targets, LaRosa 2005 NEJM), CARDS (Colhoun 2004 Lancet) i SPARCL (Amarenco 2006 NEJM) udowodniły korzyść w punktach końcowych sercowo-naczyniowych (MI, udar) i mózgowo-naczyniowych. Metaanaliza Cholesterol Treatment Trialists\' (CTT) (Baigent 2010 Lancet PMID 21067804) wykazała, że każde obniżenie LDL o 1 mmol/L daje ~22% względną redukcję ryzyka poważnych zdarzeń naczyniowych. Wysoka intensywność (40-80 mg) celuje w redukcję LDL ≥50% dla pierwotnej (LDL ≥4,9 mmol/L) lub wtórnej (wywiad ASCVD) prewencji wg wytycznych.',
    },
    keyInfo: [
      { label: { hu: 'ATC kód', en: 'ATC code', pl: 'Kod ATC' }, value: { hu: 'C10AA05', en: 'C10AA05', pl: 'C10AA05' } },
      { label: { hu: 'Vény-státusz', en: 'Prescription', pl: 'Status recepty' }, value: { hu: 'Vényköteles (Rx)', en: 'Prescription only (Rx)', pl: 'Na receptę (Rx)' } },
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'HMG-CoA reduktáz-gátló (statin)', en: 'HMG-CoA reductase inhibitor (statin)', pl: 'Inhibitor reduktazy HMG-CoA (statyna)' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '14 óra (aktív metabolitokkal 20-30 óra)', en: '14 h (active metabolites 20-30 h)', pl: '14 h (aktywne metabolity 20-30 h)' } },
      { label: { hu: 'LDL-csökkenés (40-80 mg)', en: 'LDL reduction (40-80 mg)', pl: 'Redukcja LDL (40-80 mg)' }, value: { hu: '50-60% (nagy-intenzitású)', en: '50-60% (high-intensity)', pl: '50-60% (wysoka intensywność)' } },
    ],
    mechanism: {
      hu: 'A máj-sejtek HMG-CoA reduktáz-enzimét kompetitíven gátolja, ami a mevalonát-pathway csökkentését eredményezi (de novo koleszterin-szintézis lassítása). A csökkent intracelluláris koleszterin az LDL-receptorok up-regulációjához vezet, ami a keringő LDL-t a májba clear-eli. Pleiotróp hatások: gyulladás-csökkentés (CRP-csökkenés a JUPITER trial-ben), endotel-funkció javítása, plakk-stabilizáció.',
      en: 'Competitively inhibits hepatocyte HMG-CoA reductase, decreasing the mevalonate pathway (slowing de novo cholesterol synthesis). Reduced intracellular cholesterol upregulates LDL receptors, clearing circulating LDL into the liver. Pleiotropic effects: anti-inflammatory (CRP reduction in JUPITER), endothelial function improvement, plaque stabilization.',
      pl: 'Konkurencyjnie hamuje reduktazę HMG-CoA w hepatocytach, zmniejszając szlak mewalonianu (spowolnienie de novo syntezy cholesterolu). Zmniejszony cholesterol wewnątrzkomórkowy reguluje w górę receptory LDL, oczyszczając krążący LDL do wątroby. Efekty plejotropowe: przeciwzapalne (redukcja CRP w JUPITER), poprawa funkcji śródbłonka, stabilizacja blaszki.',
    },
    legalStatus: {
      hu: 'EU/HU: vényköteles (Sortis, Atoris, Tulip, Atorvox, generikus). USA: FDA Rx (Lipitor, generikus). Nincs visszaélési potenciálja, nem ütemezett. Generikus formák bioekvivalensek (FDA Orange Book AB).',
      en: 'EU/HU: prescription only (Sortis, Atoris, Tulip, Atorvox, generics). USA: FDA Rx (Lipitor, generics). No abuse potential, not scheduled. Generic forms bioequivalent (FDA Orange Book AB).',
      pl: 'UE/PL: na receptę (Sortis, Atoris, Tulip, Atorvox, generyki). USA: FDA Rx (Lipitor, generyki). Brak potencjału nadużywania, niekontrolowany. Formy generyczne biorównoważne (FDA Orange Book AB).',
    },
    onsetTime: '1-2 weeks (lipid lowering), 4-6 weeks (steady-state LDL effect)',
    halfLife: '14 h (parent), 20-30 h (active ortho- and para-hydroxylated metabolites)',
    atcCode: 'C10AA05',
    prescriptionStatus: {
      hu: 'Vényköteles (Rx)',
      en: 'Prescription only (Rx)',
      pl: 'Na receptę (Rx)',
    },
    indications: [
      { hu: 'Primer hipercholesterolémia (LDL ≥4,9 mmol/L vagy ASCVD-risk ≥7,5% 10 év alatt)', en: 'Primary hypercholesterolemia (LDL ≥4.9 mmol/L or 10-yr ASCVD risk ≥7.5%)', pl: 'Pierwotna hipercholesterolemia (LDL ≥4,9 mmol/L lub ryzyko ASCVD ≥7,5% w 10 lat)' },
      { hu: 'Szekunder prevenció ASCVD-anamnézisnél (MI, stroke, PAD, koszorúsér-stenózis)', en: 'Secondary prevention with ASCVD history (MI, stroke, PAD, coronary stenosis)', pl: 'Wtórna prewencja przy wywiadzie ASCVD (MI, udar, PAD, zwężenie tętnic wieńcowych)' },
      { hu: 'Familiáris hipercholesterolémia (FH)', en: 'Familial hypercholesterolemia (FH)', pl: 'Rodzinna hipercholesterolemia (FH)' },
      { hu: 'T2DM-asszociált dyslipidémia (CARDS-evidencia)', en: 'T2DM-associated dyslipidemia (CARDS evidence)', pl: 'Dyslipidemia związana z T2DM (dowody CARDS)' },
      { hu: 'Hipertrigliceridémia (>5,6 mmol/L) másodlagos kezelése', en: 'Hypertriglyceridemia (>5.6 mmol/L) secondary treatment', pl: 'Hipertriglicerydemia (>5,6 mmol/L) leczenie drugorzędne' },
    ],
    contraindications: [
      { hu: 'Aktív májbetegség vagy tartós, magyarázat nélküli ALT-emelkedés (>3x ULN)', en: 'Active liver disease or persistent unexplained ALT elevation (>3x ULN)', pl: 'Aktywna choroba wątroby lub trwałe niewyjaśnione podwyższenie ALT (>3x ULN)' },
      { hu: 'Terhesség és szoptatás (lipid-szintézis embrionális fejlődéshez szükséges)', en: 'Pregnancy and lactation (lipid synthesis needed for embryonic development)', pl: 'Ciąża i karmienie piersią (synteza lipidów potrzebna dla rozwoju zarodkowego)' },
      { hu: 'Erős CYP3A4 inhibitor egyidejű használat (clarithromycin, itraconazole, ritonavir)', en: 'Concomitant strong CYP3A4 inhibitor use (clarithromycin, itraconazole, ritonavir)', pl: 'Jednoczesne stosowanie silnego inhibitora CYP3A4 (klarytromycyna, itrakonazol, rytonawir)' },
      { hu: 'Aktív rhabdomyolysis vagy CK-emelkedés > 10x ULN', en: 'Active rhabdomyolysis or CK elevation > 10x ULN', pl: 'Aktywna rabdomioliza lub podwyższenie CK > 10x ULN' },
    ],
    commonSideEffects: [
      { hu: 'Izomfájdalom, myalgia (5-10%, dóziseffekt 80 mg-on a leggyakoribb)', en: 'Muscle pain, myalgia (5-10%, dose-dependent, most common at 80 mg)', pl: 'Ból mięśni, mialgia (5-10%, zależne od dawki, najczęstsze przy 80 mg)' },
      { hu: 'ALT/AST emelkedés (1-2%, általában reverzibilis, dóziscsökkentés vagy elhagyás)', en: 'ALT/AST elevation (1-2%, usually reversible, dose reduction or discontinuation)', pl: 'Podwyższenie ALT/AST (1-2%, zwykle odwracalne, redukcja dawki lub odstawienie)' },
      { hu: 'Új T2DM-diagnózis kockázat enyhe növekedés (~9% relatív, JUPITER post-hoc)', en: 'Slightly increased new-onset T2DM risk (~9% relative, JUPITER post-hoc)', pl: 'Nieznacznie zwiększone ryzyko nowo wykrytej T2DM (~9% względne, JUPITER post-hoc)' },
      { hu: 'GI: hányinger, hasmenés, székrekedés (5%)', en: 'GI: nausea, diarrhea, constipation (5%)', pl: 'GI: nudności, biegunka, zaparcia (5%)' },
      { hu: 'Súlyos, ritka: rhabdomyolysis (CK > 10x ULN + myoglobinuria, < 0,1%)', en: 'Severe, rare: rhabdomyolysis (CK > 10x ULN + myoglobinuria, < 0.1%)', pl: 'Ciężkie, rzadkie: rabdomioliza (CK > 10x ULN + mioglobinuria, < 0,1%)' },
    ],
    cyp450: ['CYP3A4 substrate (primary)', 'CYP3A4 inhibitor (mild)', 'OATP1B1 transporter substrate'],
    crossMolInteractions: [
      { hu: 'Erős CYP3A4 inhibitor (clarithromycin, itraconazole, ritonavir, grapefruit-juice): rhabdomyolysis-kockázat, kontraindikált', en: 'Strong CYP3A4 inhibitor (clarithromycin, itraconazole, ritonavir, grapefruit juice): rhabdomyolysis risk, contraindicated', pl: 'Silny inhibitor CYP3A4 (klarytromycyna, itrakonazol, rytonawir, sok grejpfrutowy): ryzyko rabdomiolizy, przeciwwskazane' },
      { hu: 'Cyclosporine: 8-15x AUC-emelkedés, dóziscsökkentés vagy elhagyás', en: 'Cyclosporine: 8-15x AUC increase, dose reduction or discontinuation', pl: 'Cyklosporyna: 8-15x wzrost AUC, redukcja dawki lub odstawienie' },
      { hu: 'Gemfibrozil: kombinált statin+fibrát rhabdomyolysis-kockázat, kerülendő (Fenofibrate ok)', en: 'Gemfibrozil: combined statin+fibrate rhabdomyolysis risk, avoid (fenofibrate ok)', pl: 'Gemfibrozyl: ryzyko rabdomiolizy przy łączeniu statyny + fibratu, unikaj (fenofibrat ok)' },
      { hu: 'Warfarin: enyhe INR-emelkedés lehetséges, INR-monitor a kezdéskor', en: 'Warfarin: mild INR rise possible, monitor INR on initiation', pl: 'Warfaryna: możliwy łagodny wzrost INR, monitoruj INR przy rozpoczęciu' },
      { hu: 'Ezetimibe, PCSK9-inhibitor: szinergisztikus LDL-csökkentés, racionális kombináció', en: 'Ezetimibe, PCSK9 inhibitor: synergistic LDL lowering, rational combination', pl: 'Ezetymib, inhibitor PCSK9: synergistyczne obniżenie LDL, racjonalna kombinacja' },
    ],
    benefits: [
      { hu: 'LDL-csökkentés 30-60% (dózisfüggő, 10-80 mg)', en: 'LDL reduction 30-60% (dose-dependent, 10-80 mg)', pl: 'Redukcja LDL 30-60% (zależne od dawki, 10-80 mg)' },
      { hu: 'MI, stroke, kardiovaszkuláris halálozás redukciója primer és szekunder prevencióban (CTT meta)', en: 'Reduction of MI, stroke, cardiovascular mortality in primary and secondary prevention (CTT meta)', pl: 'Redukcja MI, udaru, śmiertelności sercowo-naczyniowej w prewencji pierwotnej i wtórnej (CTT meta)' },
      { hu: 'Stroke-redukció ischémiás stroke-anamnézisnél (SPARCL trial)', en: 'Stroke reduction with prior ischemic stroke (SPARCL trial)', pl: 'Redukcja udarów przy wywiadzie udaru niedokrwiennego (SPARCL)' },
      { hu: 'T2DM-asszociált dyslipidémia kardio-protekció (CARDS, 37%-os MACE-redukció)', en: 'Cardio-protection in T2DM dyslipidemia (CARDS, 37% MACE reduction)', pl: 'Kardioprotekcja w dyslipidemii T2DM (CARDS, 37% redukcja MACE)' },
      { hu: 'CRP-csökkentés, plakk-stabilizáció, endotel-funkció javítása', en: 'CRP reduction, plaque stabilization, endothelial function improvement', pl: 'Redukcja CRP, stabilizacja blaszki, poprawa funkcji śródbłonka' },
    ],
    quickStart: [
      { hu: 'Baseline lipid panel (LDL, HDL, TG, total chol), ALT/AST, CK kezdéskor', en: 'Baseline lipid panel (LDL, HDL, TG, total chol), ALT/AST, CK at start', pl: 'Wyjściowy lipidogram (LDL, HDL, TG, cholesterol całkowity), ALT/AST, CK na początku' },
      { hu: 'Estére (vagy bármikor, Atorvastatin hosszú felezési idő miatt) bevenni', en: 'Take in the evening (or any time, given long half-life of atorvastatin)', pl: 'Przyjmuj wieczorem (lub o dowolnej porze, ze względu na długi okres półtrwania)' },
      { hu: 'Grapefruit-lé KERÜLENDŐ (CYP3A4-gátlás miatt plazma-szint emelkedhet)', en: 'AVOID grapefruit juice (CYP3A4 inhibition raises plasma levels)', pl: 'UNIKAJ soku grejpfrutowego (zahamowanie CYP3A4 podnosi poziomy w osoczu)' },
      { hu: 'Lipid-kontroll 4-12 hét után, dózis-titrálás célérték (LDL < 1,8 mmol/L szekunder) eléréséig', en: 'Lipid check at 4-12 weeks, titrate to target (LDL < 1.8 mmol/L secondary)', pl: 'Kontrola lipidów po 4-12 tygodniach, titracja do celu (LDL < 1,8 mmol/L wtórna)' },
      { hu: 'Izomfájdalom esetén CK-mérés, ha CK > 5x ULN, dóziscsökkentés vagy elhagyás', en: 'On muscle pain, measure CK; if CK > 5x ULN, dose reduction or stop', pl: 'Przy bólu mięśni zmierz CK; jeśli CK > 5x ULN, redukcja dawki lub odstawienie' },
    ],
    expectations: [
      { label: { hu: '1-2. hét', en: 'Weeks 1-2', pl: 'Tygodnie 1-2' }, body: { hu: 'A lipid-csökkentő hatás már mérhetővé válik, de a steady-state LDL-szint 4-6 hét után alakul ki.', en: 'Lipid-lowering effect becomes measurable, but steady-state LDL takes 4-6 weeks.', pl: 'Efekt obniżający lipidy staje się mierzalny, ale steady-state LDL trwa 4-6 tygodni.' } },
      { label: { hu: '4-6. hét', en: 'Weeks 4-6', pl: 'Tygodnie 4-6' }, body: { hu: 'Lipid-panel kontroll. Tipikus LDL-csökkenés 10 mg-on 35-40%, 20 mg-on 40-45%, 40 mg-on 45-55%, 80 mg-on 55-60%.', en: 'Lipid panel check. Typical LDL drop: 35-40% on 10 mg, 40-45% on 20 mg, 45-55% on 40 mg, 55-60% on 80 mg.', pl: 'Kontrola lipidogramu. Typowy spadek LDL: 35-40% przy 10 mg, 40-45% przy 20 mg, 45-55% przy 40 mg, 55-60% przy 80 mg.' } },
      { label: { hu: '6-12. hónap', en: 'Months 6-12', pl: 'Miesiące 6-12' }, body: { hu: 'ALT/AST/CK ellenőrzés, ha nem jelzett tünet, ezt követően évente elegendő. Hosszú távú compliance kritikus a kardiovaszkuláris végpont-előny eléréséhez.', en: 'ALT/AST/CK check; if asymptomatic, annual thereafter. Long-term adherence is critical for CV outcome benefit.', pl: 'Kontrola ALT/AST/CK; jeśli bezobjawowo, dalej corocznie. Długoterminowe przestrzeganie jest kluczowe dla korzyści CV.' } },
    ],
    quality: {
      pure: [
        { hu: 'Pfizer Lipitor (originator), Sandoz/Krka/Teva generikus változatok bioekvivalensek', en: 'Pfizer Lipitor (originator); Sandoz/Krka/Teva generics are bioequivalent', pl: 'Pfizer Lipitor (oryginator); generyki Sandoz/Krka/Teva biorównoważne' },
        { hu: 'EU-piacon: Sortis, Atoris, Tulip, Atorvox, Atorvastatin Krka', en: 'EU market: Sortis, Atoris, Tulip, Atorvox, Atorvastatin Krka', pl: 'Rynek UE: Sortis, Atoris, Tulip, Atorvox, Atorvastatin Krka' },
      ],
      caution: [
        { hu: 'Izomfájdalom esetén CK-mérés (CK > 5x ULN dóziscsökkentés, > 10x ULN STOP)', en: 'On muscle pain measure CK (CK > 5x ULN dose reduction, > 10x ULN STOP)', pl: 'Przy bólu mięśni zmierz CK (CK > 5x ULN redukcja, > 10x ULN STOP)' },
        { hu: 'Új T2DM-diagnózis enyhe kockázat, főleg pre-diabéteszesnél', en: 'Slight new-onset T2DM risk, especially in prediabetics', pl: 'Niewielkie ryzyko nowej T2DM, zwłaszcza u osób z prediabetes' },
        { hu: 'Hosszú távú statin-tolerancia: izomfájdalom időnként újra megjelenhet', en: 'Long-term statin tolerance: muscle pain may recur intermittently', pl: 'Długoterminowa tolerancja statyny: ból mięśni może wracać okresowo' },
      ],
      avoid: [
        { hu: 'Aktív májbetegség vagy tartós ALT-emelkedés', en: 'Active liver disease or persistent ALT elevation', pl: 'Aktywna choroba wątroby lub trwałe podwyższenie ALT' },
        { hu: 'Terhesség és szoptatás (FDA X kategória)', en: 'Pregnancy and lactation (FDA category X)', pl: 'Ciąża i karmienie piersią (kategoria X FDA)' },
        { hu: 'Erős CYP3A4 inhibitor együttes adás', en: 'Concurrent strong CYP3A4 inhibitor', pl: 'Jednoczesny silny inhibitor CYP3A4' },
        { hu: 'Grapefruit-lé rendszeres fogyasztása', en: 'Regular grapefruit juice consumption', pl: 'Regularne spożywanie soku grejpfrutowego' },
      ],
    },
    interactions: [
      { hu: 'Ezetimibe (Inegy fix kombináció): szinergisztikus LDL-csökkentés (+15-20%)', en: 'Ezetimibe (Inegy fixed combo): synergistic LDL reduction (+15-20%)', pl: 'Ezetymib (Inegy stała kombinacja): synergistyczne obniżenie LDL (+15-20%)' },
      { hu: 'PCSK9-inhibitor (Evolocumab, Alirocumab): high-risk pácienseknél kombináció', en: 'PCSK9 inhibitor (evolocumab, alirocumab): combination in high-risk patients', pl: 'Inhibitor PCSK9 (ewolokumab, alirokumab): kombinacja u pacjentów wysokiego ryzyka' },
      { hu: 'Niacin (high-dose): myopathy-kockázat fokozása, óvatos kombináció', en: 'Niacin (high-dose): increased myopathy risk, cautious combination', pl: 'Niacyna (wysokie dawki): zwiększone ryzyko miopatii, ostrożna kombinacja' },
      { hu: 'Fenofibrate: gemfibrozillel ellentétben kombinálható, kis myopathy-kockázattal', en: 'Fenofibrate: combinable unlike gemfibrozil, low myopathy risk', pl: 'Fenofibrat: można łączyć w przeciwieństwie do gemfibrozylu, niskie ryzyko miopatii' },
      { hu: 'Antitrombotikum (clopidogrel, aspirin): nincs farmakokinetikai interakció', en: 'Antithrombotic (clopidogrel, aspirin): no pharmacokinetic interaction', pl: 'Antytrombotyczne (klopidogrel, aspiryna): brak interakcji farmakokinetycznych' },
    ],
    studies: [
      { title: 'Intensive lipid lowering with atorvastatin in patients with stable coronary disease (TNT)', authors: 'LaRosa JC, Grundy SM, Waters DD et al.', journal: 'N Engl J Med. 2005;352(14):1425-35.', pmid: '15755765' },
      { title: 'Primary prevention of cardiovascular disease with atorvastatin in type 2 diabetes (CARDS)', authors: 'Colhoun HM, Betteridge DJ, Durrington PN et al.', journal: 'Lancet. 2004;364(9435):685-96.', pmid: '15325833' },
      { title: 'High-dose atorvastatin after stroke or transient ischemic attack (SPARCL)', authors: 'Amarenco P, Bogousslavsky J, Callahan A 3rd et al.', journal: 'N Engl J Med. 2006;355(6):549-59.', pmid: '16899775' },
      { title: 'Efficacy and safety of cholesterol-lowering treatment: prospective meta-analysis (CTT)', authors: 'Baigent C, Blackwell L, Emberson J et al.', journal: 'Lancet. 2010;376(9753):1670-81.', pmid: '21067804' },
      { title: 'Effects of atorvastatin on early recurrent ischemic events in acute coronary syndromes (MIRACL)', authors: 'Schwartz GG, Olsson AG, Ezekowitz MD et al.', journal: 'JAMA. 2001;285(13):1711-8.', pmid: '11268233' },
      { title: 'Prevention of coronary and stroke events with atorvastatin (ASCOT-LLA)', authors: 'Sever PS, Dahlöf B, Poulter NR et al.', journal: 'Lancet. 2003;361(9364):1149-58.', pmid: '12686036' },
      { title: '2018 AHA/ACC/Multisociety guideline on the management of blood cholesterol', authors: 'Grundy SM, Stone NJ, Bailey AL et al.', journal: 'Circulation. 2019;139(25):e1082-e1143.', pmid: '30586774' },
    ],
    faq: [
      { q: { hu: 'Hogyan választok az alacsony, mérsékelt és nagy-intenzitású statin között?', en: 'How to choose low, moderate, or high-intensity statin?', pl: 'Jak wybrać między statyną o niskiej, średniej a wysokiej intensywności?' }, a: { hu: 'A 2018 AHA/ACC iránymutatás szerint a kockázat-stratifikáció vezérli: szekunder prevenció (ASCVD) vagy LDL ≥4,9 mmol/L vagy FH → nagy-intenzitású (Atorvastatin 40-80 mg, Rosuvastatin 20-40 mg). 10-éves ASCVD-risk 7,5-20% → mérsékelt-nagy intenzitású. < 7,5% és nincs egyéb kockázat → életmód-tanácsadás vagy alacsony-mérsékelt intenzitású.', en: 'Per 2018 AHA/ACC guideline, risk stratification drives choice: secondary prevention (ASCVD) or LDL ≥4.9 mmol/L or FH → high-intensity (atorvastatin 40-80 mg, rosuvastatin 20-40 mg). 10-yr ASCVD risk 7.5-20% → moderate to high. < 7.5% and no other risk → lifestyle counseling or low-moderate intensity.', pl: 'Wg wytycznych AHA/ACC 2018 wybór zależy od stratyfikacji ryzyka: prewencja wtórna (ASCVD) lub LDL ≥4,9 mmol/L lub FH → wysoka intensywność (atorwastatyna 40-80 mg, rozuwastatyna 20-40 mg). Ryzyko ASCVD 7,5-20% w 10 lat → średnia-wysoka. < 7,5% i brak innego ryzyka → poradnictwo stylu życia lub niska-średnia.' } },
      { q: { hu: 'Mit jelent a statin-indukált izomfájdalom és mikor STOP?', en: 'What is statin-induced muscle pain and when to STOP?', pl: 'Czym jest ból mięśni indukowany statyną i kiedy STOP?' }, a: { hu: 'A SAMS (Statin-Associated Muscle Symptoms) tipikusan szimmetrikus, proximális (comb, váll) izomfájdalom, ami az első 6 hónapban jelenik meg. CK-mérés döntő: ha CK ≤ 5x ULN, dóziscsökkentés vagy gyógyszer-csere (Rosuvastatin, Pravastatin). Ha CK > 5x ULN, STOP. Rhabdomyolysis (CK > 10x ULN + myoglobinuria) sürgősségi helyzet. Nocebo-effekt is jelentős: a randomizált blinded SAMSON trial (Howard 2021 JACC PMID 33214287) szerint a tünetek 90%-ban már placebo-tabletta szedésénél is jelentkeztek.', en: 'SAMS (Statin-Associated Muscle Symptoms) is typically symmetric, proximal (thigh, shoulder) muscle pain appearing in the first 6 months. CK measurement decides: CK ≤ 5x ULN, dose reduction or switch (rosuvastatin, pravastatin); CK > 5x ULN, STOP. Rhabdomyolysis (CK > 10x ULN + myoglobinuria) is an emergency. Nocebo effect significant: SAMSON trial (Howard 2021 JACC PMID 33214287) found 90% of symptoms also occurred on placebo tablets.', pl: 'SAMS (Statin-Associated Muscle Symptoms) to typowo symetryczny, proksymalny (udo, ramię) ból mięśni pojawiający się w pierwszych 6 miesiącach. Pomiar CK decyduje: CK ≤ 5x ULN, redukcja dawki lub zmiana (rozuwastatyna, prawastatyna); CK > 5x ULN, STOP. Rabdomioliza (CK > 10x ULN + mioglobinuria) to stan nagły. Efekt nocebo znaczący: badanie SAMSON (Howard 2021 JACC PMID 33214287) wykazało, że 90% objawów występowało także przy placebo.' } },
      { q: { hu: 'Növeli a statin a cukorbetegség kockázatát?', en: 'Do statins increase diabetes risk?', pl: 'Czy statyny zwiększają ryzyko cukrzycy?' }, a: { hu: 'Igen, enyhén. A JUPITER post-hoc és CTT meta-analízis (Baigent 2010) szerint a relatív kockázat ~9-12% emelkedés új-T2DM-re, főleg már prediabéteszeseknél. A kardiovaszkuláris végpont-előny azonban messze felülmúlja ezt a kockázatot, ezért a guideline-szerinti indikációnál a statin folytatandó. Életmód-intervenció (testsúlycsökkenés, fizikai aktivitás) együttesen alkalmazandó.', en: 'Yes, mildly. JUPITER post-hoc and CTT meta (Baigent 2010) show ~9-12% relative risk increase for new-onset T2DM, mainly in prediabetics. CV outcome benefit far outweighs this, so per guideline indication statin should continue. Lifestyle intervention (weight loss, physical activity) applied jointly.', pl: 'Tak, łagodnie. Post-hoc JUPITER i metaanaliza CTT (Baigent 2010) pokazują ~9-12% wzrost względnego ryzyka nowej T2DM, głównie u osób z prediabetes. Korzyść CV znacznie to przewyższa, więc wg wskazania wytycznych statyna powinna być kontynuowana. Interwencja stylu życia (utrata masy, aktywność) stosowana łącznie.' } },
      { q: { hu: 'Miért NEM ihatok grapefruit-lét Atorvastatin alatt?', en: 'Why CAN\'T I drink grapefruit juice on atorvastatin?', pl: 'Dlaczego NIE MOGĘ pić soku grejpfrutowego na atorwastatynie?' }, a: { hu: 'A grapefruit-lé furanocoumarin-vegyületei (bergamottin, dihidroxi-bergamottin) inaktiválják az intestinális CYP3A4 enzimet, ami az Atorvastatin first-pass metabolizmusát ~50%-kal csökkenti, így a plazma-szint és AUC megemelkedhet 80-100%-kal. Ez fokozza a myopathy- és rhabdomyolysis-kockázatot. A hatás 24-72 órán át tartó, ezért nem elegendő egyszerre különböző időben fogyasztani. Pravastatin nem CYP3A4-substrátum, ott biztonságos.', en: 'Grapefruit juice furanocoumarins (bergamottin, dihydroxybergamottin) inactivate intestinal CYP3A4, reducing atorvastatin first-pass metabolism by ~50% and raising plasma levels and AUC by 80-100%. This increases myopathy and rhabdomyolysis risk. Effect lasts 24-72 hours, so separate timing does not suffice. Pravastatin is not a CYP3A4 substrate and is safe.', pl: 'Furanokumaryny soku grejpfrutowego (bergamottyna, dihydroksybergamottyna) inaktywują jelitowy CYP3A4, zmniejszając metabolizm pierwszego przejścia atorwastatyny o ~50% i podnosząc poziomy w osoczu i AUC o 80-100%. To zwiększa ryzyko miopatii i rabdomiolizy. Efekt trwa 24-72 godzin, więc oddzielne pory nie wystarczają. Prawastatyna nie jest substratem CYP3A4 i jest bezpieczna.' } },
      { q: { hu: 'Életmód-változással elhagyható-e a statin?', en: 'Can statin be discontinued with lifestyle change?', pl: 'Czy statyna może być odstawiona przy zmianie stylu życia?' }, a: { hu: 'Az életmód-intervenció (mediterrán diéta, fizikai aktivitás, súlyvesztés) önmagában 5-15% LDL-csökkenést hozhat, ami nem helyettesíti a statint közepes-magas kockázatú betegnél. Szekunder prevencióban (ASCVD-anamnézis) az életmód-csak megközelítés NEM elégséges, a statin folytatandó. Primer prevencióban alacsony-kockázatúaknál (10-éves ASCVD < 5%) életmód-elsőség egy próbálkozás után újraértékelhető, de orvosi kontrollal.', en: 'Lifestyle intervention (Mediterranean diet, physical activity, weight loss) alone yields 5-15% LDL reduction, not replacing statin in moderate-high risk patients. In secondary prevention (ASCVD history) lifestyle-only is NOT sufficient, statin must continue. In primary prevention low-risk (10-yr ASCVD < 5%) lifestyle-first trial can be re-evaluated, but with medical oversight.', pl: 'Sama interwencja stylu życia (dieta śródziemnomorska, aktywność, utrata masy) daje 5-15% redukcję LDL, nie zastępując statyny u pacjentów średnio-wysokiego ryzyka. W prewencji wtórnej (wywiad ASCVD) sam styl życia NIE wystarcza, statyna musi być kontynuowana. W prewencji pierwotnej niskiego ryzyka (ASCVD 10-letnie < 5%) próba styl życia-pierwszy może być przewartościowana, ale pod nadzorem lekarza.' } },
    ],
    related: ['tadalafil'],
    doseCalc: {
      type: 'fixedDose',
      fixedDose: { low: 10, medium: 40, high: 80 },
      unit: 'mg/nap',
      note: {
        hu: 'AHA/ACC 2018 intenzitás-besorolás. Alacsony intenzitás (10 mg, ~35% LDL-csökkenés): primer prevenció alacsony rizikónál. Mérsékelt-nagy (40 mg, ~45-55%): standard szekunder prevenció. Nagy intenzitás (80 mg, ~55-60%): FH vagy magas-rizikójú szekunder prevenció. Estére adva tipikus, de Atorvastatin hosszú felezési ideje miatt nem kritikus.',
        en: 'AHA/ACC 2018 intensity classification. Low intensity (10 mg, ~35% LDL drop): primary prevention low risk. Moderate-high (40 mg, ~45-55%): standard secondary prevention. High intensity (80 mg, ~55-60%): FH or high-risk secondary prevention. Evening dosing typical but not critical given atorvastatin long half-life.',
        pl: 'Klasyfikacja intensywności AHA/ACC 2018. Niska intensywność (10 mg, ~35% spadek LDL): prewencja pierwotna niskiego ryzyka. Średnia-wysoka (40 mg, ~45-55%): standardowa prewencja wtórna. Wysoka intensywność (80 mg, ~55-60%): FH lub prewencja wtórna wysokiego ryzyka. Dawkowanie wieczorne typowe, ale nie krytyczne ze względu na długi okres półtrwania.',
      },
    },
  },

  // ===== 4. TADALAFIL (Kardio CORE, PDE5-inhibitor, ED + BPH + PAH Rx) =====
  {
    id: 'tadalafil',
    name: 'Tadalafil',
    image: null,
    accentColor: '#dc2626',
    tagColor: 'rgba(220,38,38,0.18)',
    shortDesc: {
      hu: 'Hosszú felezési idejű (17,5 óra) PDE5-inhibitor. FDA-jóváhagyott erektilis diszfunkcióra (Cialis), benignus prostata-hiperpláziára (BPH) és pulmonális artériás hipertóniára (Adcirca).',
      en: 'Long half-life (17.5 h) PDE5 inhibitor. FDA-approved for erectile dysfunction (Cialis), benign prostatic hyperplasia (BPH), and pulmonary arterial hypertension (Adcirca).',
      pl: 'Inhibitor PDE5 o długim okresie półtrwania (17,5 h). Zatwierdzony przez FDA dla zaburzeń erekcji (Cialis), łagodnego rozrostu prostaty (BPH) i tętniczego nadciśnienia płucnego (Adcirca).',
    },
    description: {
      hu: 'A Tadalafil egy szelektív PDE5-inhibitor, amelyet a Lilly fejlesztett ki (Cialis, FDA 2003). A foszfodiészteráz-5 enzim szelektív gátlása révén a cGMP intracelluláris koncentrációja megemelkedik a simaizmokban (corpus cavernosum, prosztata, tüdő-arteriola), ami értágulatot és relaxációt eredményez. A Sildenafil (Viagra, 4 órás felezési idő) versus Tadalafil (17,5 óra) közötti legfontosabb különbség a hosszú hatástartam: "weekender pill" beceneve. A 2,5 és 5 mg napi dózis 2008 óta is engedélyezett, ami a "always ready" használati módot lehetővé teszi. BPH-indikációra a 2011-es FDA-jóváhagyás 5 mg napi dózissal: alfa-blokkolóhoz hasonló húgyhólyag-funkció-javulás (IPSS-score csökkenés). Az Adcirca (40 mg/nap) pulmonális artériás hipertóniára 2009 óta (Galiè 2009 NEJM).',
      en: 'Tadalafil is a selective PDE5 inhibitor developed by Lilly (Cialis, FDA 2003). By selectively inhibiting phosphodiesterase-5, intracellular cGMP rises in smooth muscle (corpus cavernosum, prostate, lung arterioles), producing vasodilation and relaxation. The key difference from sildenafil (Viagra, 4 h half-life) vs tadalafil (17.5 h) is long duration: "weekender pill" nickname. Daily 2.5 and 5 mg dosing has been licensed since 2008, enabling an "always ready" use mode. BPH indication received FDA approval in 2011 at 5 mg daily: improvement in bladder function similar to alpha-blockers (IPSS score reduction). Adcirca (40 mg/day) for pulmonary arterial hypertension since 2009 (Galiè 2009 NEJM).',
      pl: 'Tadalafil to selektywny inhibitor PDE5 opracowany przez Lilly (Cialis, FDA 2003). Selektywnie hamując fosfodiesterazę-5, podnosi wewnątrzkomórkowe cGMP w mięśniach gładkich (ciało jamiste, prostata, tętniczki płucne), powodując rozszerzenie naczyń i relaksację. Kluczowa różnica między syldenafilem (Viagra, 4 h okres półtrwania) a tadalafilem (17,5 h) to długi czas działania: przydomek "weekend pill". Dzienne dawki 2,5 i 5 mg licencjonowane od 2008 r., umożliwiając tryb "zawsze gotowy". Wskazanie BPH otrzymało zatwierdzenie FDA w 2011 r. dla 5 mg dziennie: poprawa funkcji pęcherza podobna do alfa-blokerów (redukcja IPSS). Adcirca (40 mg/dobę) dla tętniczego nadciśnienia płucnego od 2009 r. (Galiè 2009 NEJM).',
    },
    keyInfo: [
      { label: { hu: 'ATC kód', en: 'ATC code', pl: 'Kod ATC' }, value: { hu: 'G04BE08', en: 'G04BE08', pl: 'G04BE08' } },
      { label: { hu: 'Vény-státusz', en: 'Prescription', pl: 'Status recepty' }, value: { hu: 'Vényköteles (Rx)', en: 'Prescription only (Rx)', pl: 'Na receptę (Rx)' } },
      { label: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' }, value: { hu: 'PDE5 enzim szelektív gátlása, cGMP-emelkedés', en: 'Selective PDE5 enzyme inhibition, cGMP elevation', pl: 'Selektywne hamowanie PDE5, wzrost cGMP' } },
      { label: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, value: { hu: '17,5 óra (a leghosszabb PDE5-i között)', en: '17.5 h (longest among PDE5i)', pl: '17,5 h (najdłuższy wśród PDE5i)' } },
      { label: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek' }, value: { hu: '30-45 perc (PRN), 5-7 nap (daily steady-state)', en: '30-45 min (PRN), 5-7 days (daily steady-state)', pl: '30-45 min (PRN), 5-7 dni (daily steady-state)' } },
    ],
    mechanism: {
      hu: 'A foszfodiészteráz-5 (PDE5) enzim szelektív gátlása, ami a cGMP intracelluláris koncentrációját emeli a corpus cavernosum (penis), prosztata és pulmonális artériák simaizmaiban. A magasabb cGMP a protein-kináz G aktivációja útján Ca²⁺-szekvesztrációt és simaizom-relaxációt eredményez, ami vazodilatációhoz vezet. A NO (nitrogén-monoxid) felszabadulása szexuális stimuláció során elengedhetetlen az erekcióhoz: PDE5-i hatása csak szexuális stimuláció esetén jelenik meg, nem önmagában indít erekciót.',
      en: 'Selective inhibition of phosphodiesterase-5 (PDE5), raising intracellular cGMP in smooth muscle of corpus cavernosum (penis), prostate, and pulmonary arteries. Higher cGMP activates protein kinase G, leading to Ca²⁺ sequestration and smooth muscle relaxation, producing vasodilation. NO (nitric oxide) release during sexual stimulation is required for erection: PDE5i effect appears only on sexual stimulation, not initiating erection alone.',
      pl: 'Selektywne hamowanie fosfodiesterazy-5 (PDE5), podnosząc wewnątrzkomórkowe cGMP w mięśniach gładkich ciała jamistego (prącie), prostaty i tętnic płucnych. Wyższe cGMP aktywuje kinazę białkową G, prowadząc do sekwestracji Ca²⁺ i relaksacji mięśni gładkich, wywołując rozszerzenie naczyń. Uwolnienie NO (tlenku azotu) podczas stymulacji seksualnej jest wymagane dla erekcji: efekt PDE5i pojawia się tylko przy stymulacji seksualnej, nie inicjując erekcji samodzielnie.',
    },
    legalStatus: {
      hu: 'EU/HU: vényköteles (Cialis, Adcirca, generikus). USA: FDA Rx, nem ütemezett. Generikus formák 2018 óta (originator patent lejárta). OTC NEM elérhető (vs Egyesült Királyság: Viagra Connect OTC 2018, de Cialis változatlanul Rx).',
      en: 'EU/HU: prescription only (Cialis, Adcirca, generics). USA: FDA Rx, not scheduled. Generic forms since 2018 (originator patent expiry). NOT OTC (vs UK: Viagra Connect OTC 2018, but Cialis still Rx).',
      pl: 'UE/PL: na receptę (Cialis, Adcirca, generyki). USA: FDA Rx, niekontrolowany. Formy generyczne od 2018 r. (wygaśnięcie patentu oryginatora). NIE bez recepty (vs UK: Viagra Connect OTC 2018, ale Cialis wciąż Rx).',
    },
    onsetTime: '30-45 min (PRN dosing), 5-7 days (daily 2.5/5 mg steady-state)',
    halfLife: '17.5 h (parent compound, longest among PDE5 inhibitors)',
    atcCode: 'G04BE08',
    prescriptionStatus: {
      hu: 'Vényköteles (Rx), urológus vagy háziorvos felírható',
      en: 'Prescription only (Rx), urologist or GP can prescribe',
      pl: 'Na receptę (Rx), urolog lub lekarz rodzinny może przepisać',
    },
    indications: [
      { hu: 'Erektilis diszfunkció (ED, PRN 10-20 mg vagy napi 2,5-5 mg)', en: 'Erectile dysfunction (ED, PRN 10-20 mg or daily 2.5-5 mg)', pl: 'Zaburzenia erekcji (ED, PRN 10-20 mg lub dziennie 2,5-5 mg)' },
      { hu: 'Benignus prostata-hiperplázia (BPH), 5 mg napi (FDA 2011, Stief evidencia)', en: 'Benign prostatic hyperplasia (BPH), 5 mg daily (FDA 2011, Stief evidence)', pl: 'Łagodny rozrost prostaty (BPH), 5 mg dziennie (FDA 2011, dowody Stief)' },
      { hu: 'ED + BPH együttes kezelés (5 mg napi)', en: 'ED + BPH combined therapy (5 mg daily)', pl: 'Wspólne leczenie ED + BPH (5 mg dziennie)' },
      { hu: 'Pulmonális artériás hipertónia (Adcirca, 40 mg napi, Galiè 2009 NEJM)', en: 'Pulmonary arterial hypertension (Adcirca, 40 mg daily, Galiè 2009 NEJM)', pl: 'Tętnicze nadciśnienie płucne (Adcirca, 40 mg dziennie, Galiè 2009 NEJM)' },
    ],
    contraindications: [
      { hu: 'Nitrát-szer egyidejű használat (abszolút, súlyos hipotenzió-kockázat)', en: 'Concomitant nitrate use (absolute, severe hypotension risk)', pl: 'Jednoczesne stosowanie azotanów (bezwzględne, ryzyko ciężkiego hipotenzji)' },
      { hu: 'Súlyos hipotenzió (SBP < 90), súlyos hipertenzió (SBP > 170, DBP > 100)', en: 'Severe hypotension (SBP < 90), severe hypertension (SBP > 170, DBP > 100)', pl: 'Ciężka hipotensja (SBP < 90), ciężkie nadciśnienie (SBP > 170, DBP > 100)' },
      { hu: 'Friss (< 90 nap) MI, nem stabil angina, NYHA III-IV szívelégtelenség', en: 'Recent (< 90 d) MI, unstable angina, NYHA III-IV heart failure', pl: 'Niedawne (< 90 dni) MI, niestabilna dławica, niewydolność serca NYHA III-IV' },
      { hu: 'Stroke vagy életveszélyes aritmia 6 hónapon belül', en: 'Stroke or life-threatening arrhythmia within 6 months', pl: 'Udar lub zagrażająca życiu arytmia w ciągu 6 miesięcy' },
      { hu: 'Súlyos máj- vagy vesefunkció-zavar', en: 'Severe hepatic or renal impairment', pl: 'Ciężka niewydolność wątroby lub nerek' },
    ],
    commonSideEffects: [
      { hu: 'Fejfájás (10-15%), arc-flushing (5-10%), dyspepsia (4-10%)', en: 'Headache (10-15%), facial flushing (5-10%), dyspepsia (4-10%)', pl: 'Ból głowy (10-15%), zaczerwienienie twarzy (5-10%), dyspepsja (4-10%)' },
      { hu: 'Hátfájás és izomfájdalom (3-8%, Tadalafil-specifikus, PDE11-keresztreakció)', en: 'Back pain and myalgia (3-8%, tadalafil-specific, PDE11 cross-reactivity)', pl: 'Ból pleców i mialgia (3-8%, specyficzne dla tadalafilu, reakcja krzyżowa PDE11)' },
      { hu: 'Orrdugulás, szédülés (3-5%)', en: 'Nasal congestion, dizziness (3-5%)', pl: 'Zatkany nos, zawroty głowy (3-5%)' },
      { hu: 'Vizuális zavar (ritka, < 1%, PDE6 keresztreakció kék-zöld látás)', en: 'Visual disturbance (rare, < 1%, PDE6 cross-reactivity blue-green vision)', pl: 'Zaburzenia widzenia (rzadkie, < 1%, reakcja krzyżowa PDE6 widzenie niebiesko-zielone)' },
      { hu: 'Súlyos, ritka: priapizmus (erekció > 4 óra, sürgősségi), NAION (non-arteriás ischémiás opticus neuropathia)', en: 'Severe, rare: priapism (erection > 4 h, emergency), NAION (non-arteritic ischemic optic neuropathy)', pl: 'Ciężkie, rzadkie: priapizm (erekcja > 4 h, nagły), NAION (niearterietyczna niedokrwienna neuropatia nerwu wzrokowego)' },
    ],
    cyp450: ['CYP3A4 substrate (primary metabolism)', 'No significant CYP induction or inhibition'],
    crossMolInteractions: [
      { hu: 'Nitrátok (nitroglycerin, ISDN, ISMN): ABSZOLÚT kontraindikált, súlyos hipotenzió + halálos kimenetel', en: 'Nitrates (nitroglycerin, ISDN, ISMN): ABSOLUTE contraindication, severe hypotension + fatal outcomes', pl: 'Azotany (nitrogliceryna, ISDN, ISMN): BEZWZGLĘDNE przeciwwskazanie, ciężka hipotensja + zgon' },
      { hu: 'Alfa-blokkoló (doxazosin, tamsulosin): hipotenzió-kockázat, dóziscsökkentés szükséges', en: 'Alpha-blocker (doxazosin, tamsulosin): hypotension risk, dose reduction required', pl: 'Alfa-bloker (doksazosyna, tamsulozyna): ryzyko hipotensji, wymagana redukcja dawki' },
      { hu: 'Erős CYP3A4 inhibitor (ketoconazole, ritonavir): plazma-szint emelkedhet 4-fold, max 5 mg/72h', en: 'Strong CYP3A4 inhibitor (ketoconazole, ritonavir): plasma levels may rise 4-fold, max 5 mg/72 h', pl: 'Silny inhibitor CYP3A4 (ketokonazol, rytonawir): poziomy w osoczu mogą wzrosnąć 4-krotnie, maks. 5 mg/72 h' },
      { hu: 'CYP3A4 induktor (rifampicin, carbamazepine): plazma-szint csökkenhet, hatás-vesztés', en: 'CYP3A4 inducer (rifampicin, carbamazepine): plasma levels may drop, loss of effect', pl: 'Induktor CYP3A4 (ryfampicyna, karbamazepina): poziomy w osoczu mogą spaść, utrata efektu' },
      { hu: 'Riociguát (sGC-stimulátor): kombináció kontraindikált, súlyos hipotenzió', en: 'Riociguat (sGC stimulator): combination contraindicated, severe hypotension', pl: 'Riocyguat (stymulator sGC): kombinacja przeciwwskazana, ciężka hipotensja' },
    ],
    benefits: [
      { hu: 'Hosszú hatástartam (17,5 óra felezési idő, 36 óra hatás-window), kényelmes timing', en: 'Long duration (17.5 h half-life, 36 h effect window), convenient timing', pl: 'Długi czas działania (17,5 h okres półtrwania, 36 h okno efektu), wygodny timing' },
      { hu: 'Étkezéstől és alkoholtól független farmakokinetika (vs Sildenafil)', en: 'Pharmacokinetics independent of food and alcohol (vs sildenafil)', pl: 'Farmakokinetyka niezależna od jedzenia i alkoholu (vs syldenafil)' },
      { hu: 'Napi 2,5/5 mg "always ready" mód, természetesebb szexuális ritmus', en: 'Daily 2.5/5 mg "always ready" mode, more natural sexual rhythm', pl: 'Dzienne 2,5/5 mg tryb "zawsze gotowy", bardziej naturalny rytm seksualny' },
      { hu: 'BPH-tünetcsökkentés (IPSS) ED-kezelés mellett (dual indikáció)', en: 'BPH symptom reduction (IPSS) alongside ED treatment (dual indication)', pl: 'Redukcja objawów BPH (IPSS) wraz z leczeniem ED (podwójne wskazanie)' },
      { hu: 'PAH-kezelésben funkcionális kapacitás-javulás (6MWT distance, Galiè 2009)', en: 'Functional capacity improvement in PAH (6MWT distance, Galiè 2009)', pl: 'Poprawa wydolności funkcjonalnej w PAH (dystans 6MWT, Galiè 2009)' },
    ],
    quickStart: [
      { hu: 'Szexuális stimuláció szükséges a hatáshoz, NEM önmagában indít erekciót', en: 'Sexual stimulation needed for effect; does NOT initiate erection alone', pl: 'Wymagana stymulacja seksualna; NIE inicjuje erekcji samodzielnie' },
      { hu: 'PRN-mód: 30-45 perccel a szexuális aktivitás előtt, max napi egyszer', en: 'PRN mode: 30-45 min before sexual activity, max once daily', pl: 'Tryb PRN: 30-45 min przed aktywnością seksualną, maks. raz dziennie' },
      { hu: 'Daily mód: 2,5-5 mg azonos időpontban, steady-state 5-7 nap után', en: 'Daily mode: 2.5-5 mg same time each day, steady-state after 5-7 days', pl: 'Tryb daily: 2,5-5 mg o tej samej porze, steady-state po 5-7 dniach' },
      { hu: 'Nitrátnál akut MI-anamnézis esetén szigorúan kerülendő (legutóbb használt nitrát után 24-48 óra szünet)', en: 'AVOID strictly with nitrates or recent MI (24-48 h gap after last nitrate use)', pl: 'BEZWZGLĘDNIE unikaj przy azotanach lub niedawnym MI (24-48 h przerwa po ostatnim azotanie)' },
      { hu: 'Erekció > 4 óra (priapizmus) → sürgősségi ellátás (urológus)', en: 'Erection > 4 h (priapism) → emergency care (urologist)', pl: 'Erekcja > 4 h (priapizm) → opieka nagła (urolog)' },
    ],
    expectations: [
      { label: { hu: 'PRN első alkalom', en: 'First PRN use', pl: 'Pierwsze użycie PRN' }, body: { hu: '30-45 perc múlva hatás-indulás. 24-36 órán át fenntartott aktív szint. Hatékonyság szexuális stimuláció esetén.', en: 'Effect starts in 30-45 min. Active level maintained for 24-36 h. Efficacy with sexual stimulation.', pl: 'Efekt zaczyna się po 30-45 min. Aktywny poziom utrzymywany przez 24-36 h. Skuteczność przy stymulacji seksualnej.' } },
      { label: { hu: 'Daily 5-7. nap (2,5-5 mg)', en: 'Daily mode day 5-7 (2.5-5 mg)', pl: 'Daily dzień 5-7 (2,5-5 mg)' }, body: { hu: 'Steady-state plazma-szint elérve. Spontán erekciós képesség, természetesebb szexuális ritmus. BPH-tüneteknél IPSS-score-csökkenés.', en: 'Steady-state plasma level reached. Spontaneous erectile capacity, more natural sexual rhythm. IPSS score reduction for BPH symptoms.', pl: 'Steady-state w osoczu osiągnięty. Spontaniczna zdolność erekcyjna, bardziej naturalny rytm. Redukcja IPSS dla objawów BPH.' } },
      { label: { hu: '3-6 hónap (chronic daily)', en: '3-6 months (chronic daily)', pl: '3-6 miesięcy (przewlekłe daily)' }, body: { hu: 'Endotél-funkció javulása dokumentált (Aversa 2009), kardiovaszkuláris előny diabéteszes EDP-betegen. Évente vérnyomás és kardiovaszkuláris kockázat-becslés.', en: 'Documented endothelial function improvement (Aversa 2009), CV benefit in diabetic ED patients. Annual BP and CV risk assessment.', pl: 'Udokumentowana poprawa funkcji śródbłonka (Aversa 2009), korzyść CV u pacjentów cukrzycowych z ED. Roczna ocena BP i ryzyka CV.' } },
    ],
    quality: {
      pure: [
        { hu: 'Lilly Cialis (originator), United Therapeutics Adcirca PAH-ra', en: 'Lilly Cialis (originator), United Therapeutics Adcirca for PAH', pl: 'Lilly Cialis (oryginator), United Therapeutics Adcirca dla PAH' },
        { hu: 'Generikus formák 2018 óta: Sandoz, Krka, Teva, Mylan bioekvivalensek', en: 'Generic forms since 2018: Sandoz, Krka, Teva, Mylan bioequivalent', pl: 'Formy generyczne od 2018 r.: Sandoz, Krka, Teva, Mylan biorównoważne' },
        { hu: 'OTC "Cialis" termékek a fekete piacon hamisak (hatóanyag-szint változó, kontamináció gyakori, FDA warning)', en: 'OTC "Cialis" products on black market are counterfeit (variable API levels, contamination common, FDA warning)', pl: 'Produkty "Cialis" OTC na czarnym rynku są podrabiane (zmienne poziomy API, częste zanieczyszczenia, ostrzeżenie FDA)' },
      ],
      caution: [
        { hu: 'Kardiovaszkuláris rizikó-stratifikáció Tadalafil bevezetése előtt (vérnyomás, EKG, fizikai aktivitás-tolerancia)', en: 'CV risk stratification before tadalafil initiation (BP, ECG, exercise tolerance)', pl: 'Stratyfikacja ryzyka CV przed wprowadzeniem tadalafilu (BP, EKG, tolerancja wysiłku)' },
        { hu: 'Hátfájás és izomfájdalom (PDE11 keresztreakció), általában enyhe és átmeneti', en: 'Back pain and myalgia (PDE11 cross-reactivity), usually mild and transient', pl: 'Ból pleców i mialgia (reakcja krzyżowa PDE11), zwykle łagodne i przejściowe' },
        { hu: 'NAION-kockázat (látásvesztés egy szemen), azonnali oftalmológus konzultáció', en: 'NAION risk (vision loss in one eye), immediate ophthalmology consultation', pl: 'Ryzyko NAION (utrata wzroku w jednym oku), natychmiastowa konsultacja okulistyczna' },
        { hu: 'Hallás-vesztés (ritka): azonnali ENT-konzultáció', en: 'Hearing loss (rare): immediate ENT consultation', pl: 'Utrata słuchu (rzadkie): natychmiastowa konsultacja ENT' },
      ],
      avoid: [
        { hu: 'Bármilyen nitrát (organikus vagy amyl-nitrit "popper")', en: 'Any nitrate (organic or amyl-nitrite "popper")', pl: 'Jakiekolwiek azotany (organiczne lub azotyn amylu "popper")' },
        { hu: 'Riociguát (sGC-stimulátor)', en: 'Riociguat (sGC stimulator)', pl: 'Riocyguat (stymulator sGC)' },
        { hu: 'Friss (< 90 nap) MI, instabil angina, NYHA III-IV', en: 'Recent (< 90 d) MI, unstable angina, NYHA III-IV', pl: 'Niedawne (< 90 dni) MI, niestabilna dławica, NYHA III-IV' },
        { hu: 'Súlyos hipotenzió, súlyos máj- vagy vesefunkció-zavar', en: 'Severe hypotension, severe hepatic or renal impairment', pl: 'Ciężka hipotensja, ciężka niewydolność wątroby lub nerek' },
      ],
    },
    interactions: [
      { hu: 'Alfa-blokkoló (doxazosin, tamsulosin): hipotenzió-kockázat, alacsony dózissal kombinálható', en: 'Alpha-blocker (doxazosin, tamsulosin): hypotension risk, combinable at low dose', pl: 'Alfa-bloker (doksazosyna, tamsulozyna): ryzyko hipotensji, można łączyć w niskich dawkach' },
      { hu: 'Antihipertenzív szerek (ACEi, ARB, CCB, béta-blokkoló): kis additív hipotenzió, általában jól tolerált', en: 'Antihypertensives (ACEi, ARB, CCB, beta-blocker): small additive hypotension, usually well tolerated', pl: 'Leki przeciwnadciśnieniowe (ACEi, ARB, CCB, beta-bloker): mała addytywna hipotensja, zwykle dobrze tolerowana' },
      { hu: 'Egyéb PDE5-i (Sildenafil, Vardenafil): NEM kombinálható (redundáns mechanizmus)', en: 'Other PDE5i (sildenafil, vardenafil): do NOT combine (redundant mechanism)', pl: 'Inne PDE5i (syldenafil, wardenafil): NIE łączyć (redundantny mechanizm)' },
      { hu: 'Alkohol: szerény adag tolerálható, túlzott fogyasztás növelheti az ortosztatikus hipotenzió kockázatát', en: 'Alcohol: moderate intake tolerable, excess can increase orthostatic hypotension risk', pl: 'Alkohol: umiarkowane spożycie tolerowane, nadmiar może zwiększyć ryzyko hipotensji ortostatycznej' },
      { hu: 'Étkezés: NEM befolyásolja az abszorpciót (vs Sildenafil, ahol zsíros étel csökkenti)', en: 'Food: NO effect on absorption (vs sildenafil where fatty meals reduce it)', pl: 'Jedzenie: BRAK wpływu na wchłanianie (vs syldenafil, gdzie tłusty posiłek zmniejsza)' },
    ],
    studies: [
      { title: 'Efficacy and safety of tadalafil for the treatment of erectile dysfunction: results of integrated analyses', authors: 'Brock GB, McMahon CG, Chen KK et al.', journal: 'J Urol. 2002;168(4 Pt 1):1332-6.', pmid: '12352386' },
      { title: 'The efficacy and safety of tadalafil: an update', authors: 'Carson CC, Rajfer J, Eardley I et al.', journal: 'BJU Int. 2004;93(9):1276-81.', pmid: '15180631' },
      { title: 'Efficacy and safety of tadalafil for once-daily use in the treatment of erectile dysfunction', authors: 'Porst H, Giuliano F, Glina S et al.', journal: 'Eur Urol. 2006;50(2):351-9.', pmid: '16469523' },
      { title: 'Tadalafil for treatment of pulmonary arterial hypertension (PHIRST)', authors: 'Galiè N, Brundage BH, Ghofrani HA et al.', journal: 'Circulation. 2009;119(22):2894-903.', pmid: '19470885' },
      { title: 'Tadalafil 5 mg once daily improves lower urinary tract symptoms suggestive of BPH (long-term study)', authors: 'McVary KT, Roehrborn CG, Kaminetsky JC et al.', journal: 'J Urol. 2007;177(4):1401-7.', pmid: '17382741' },
      { title: 'Endothelial function improvement after chronic tadalafil in diabetic men with erectile dysfunction', authors: 'Aversa A, Vitale C, Volterrani M et al.', journal: 'Eur Heart J. 2009;30(7):865-72.', pmid: '18820322' },
      { title: 'Comparison of tadalafil and sildenafil in patient preference and effects', authors: 'Eardley I, Mirone V, Montorsi F et al.', journal: 'BJU Int. 2005;96(9):1323-32.', pmid: '16287456' },
    ],
    faq: [
      { q: { hu: 'Mi a különbség Tadalafil (Cialis) és Sildenafil (Viagra) között?', en: 'What is the difference between tadalafil (Cialis) and sildenafil (Viagra)?', pl: 'Jaka jest różnica między tadalafilem (Cialis) a syldenafilem (Viagra)?' }, a: { hu: 'Felezési idő: Tadalafil 17,5 óra (36 órás hatás-window), Sildenafil 4 óra (4-6 órás hatás). Étkezés-érzékenység: Tadalafil-független, Sildenafil zsíros étellel csökken. Daily-mód: Tadalafil 2,5-5 mg napi engedélyezett, Sildenafil PRN-only. Mellékhatások: Tadalafil hátfájás/izomfájdalom gyakoribb (PDE11), Sildenafil vizuális zavar (PDE6) gyakoribb. Hatékonyság hasonló (~70% ED-betegen), preferencia gyakran életstílustól függő.', en: 'Half-life: tadalafil 17.5 h (36 h effect window), sildenafil 4 h (4-6 h effect). Food sensitivity: tadalafil independent, sildenafil reduced by fatty meal. Daily mode: tadalafil 2.5-5 mg licensed, sildenafil PRN-only. Side effects: tadalafil more back pain/myalgia (PDE11), sildenafil more visual disturbance (PDE6). Efficacy similar (~70% in ED patients), preference often lifestyle-driven.', pl: 'Okres półtrwania: tadalafil 17,5 h (okno 36 h), syldenafil 4 h (4-6 h). Wrażliwość na jedzenie: tadalafil niezależny, syldenafil zmniejszony przez tłusty posiłek. Tryb daily: tadalafil 2,5-5 mg licencjonowany, syldenafil PRN-only. Działania niepożądane: tadalafil więcej bólu pleców/mialgii (PDE11), syldenafil więcej zaburzeń widzenia (PDE6). Skuteczność podobna (~70% pacjentów ED), preferencja często napędzana stylem życia.' } },
      { q: { hu: 'Mit jelent a daily 2,5/5 mg "always ready" mód?', en: 'What does the daily 2.5/5 mg "always ready" mode mean?', pl: 'Co oznacza tryb daily 2,5/5 mg "zawsze gotowy"?' }, a: { hu: 'A napi 2,5 vagy 5 mg Tadalafil 5-7 nap után steady-state plazma-szintet eredményez, így a szexuális aktivitás bármikor lehetséges PRN-timing nélkül. Természetesebb és spontánabb szexuális élet, nem kell időzítve tablettát szedni. Tadalafil az egyetlen PDE5-i, ami napi adagolásra engedélyezett (Sildenafil/Vardenafil PRN-only). BPH-tüneteknél (5 mg napi) dual indikáció: ED + BPH együtt kezelhető egyetlen tablettával.', en: 'Daily 2.5 or 5 mg tadalafil reaches steady-state plasma level after 5-7 days, allowing sexual activity anytime without PRN timing. More natural and spontaneous sexual life, no scheduled pill needed. Tadalafil is the only PDE5i licensed for daily dosing (sildenafil/vardenafil PRN-only). With BPH symptoms (5 mg daily) dual indication: ED + BPH treated with single tablet.', pl: 'Dzienne 2,5 lub 5 mg tadalafilu osiąga steady-state w osoczu po 5-7 dniach, umożliwiając aktywność seksualną w dowolnym momencie bez timingu PRN. Bardziej naturalne i spontaniczne życie seksualne, brak potrzeby planowanej tabletki. Tadalafil jest jedynym PDE5i licencjonowanym na dawkowanie dzienne (syldenafil/wardenafil PRN-only). Przy objawach BPH (5 mg dziennie) podwójne wskazanie: ED + BPH leczone jedną tabletką.' } },
      { q: { hu: 'Mi a priapizmus és mit kell tenni?', en: 'What is priapism and what to do?', pl: 'Czym jest priapizm i co zrobić?' }, a: { hu: 'A priapizmus = > 4 órán át tartó, fájdalmas erekció szexuális stimuláció nélkül is. PDE5-i-vel ritka (< 0,1%), de SÜRGŐSSÉGI állapot: érdugulás és tartós szövet-ischémia oxigén-hiányt okoz a corpus cavernosum-ban, ami 6-24 órán át tartós szövetkárosodáshoz és potens-vesztéshez vezet. AZONNAL urológiai sürgősségi ellátáshoz fordulni. Megelőzés: alacsonyabb dózis (5-10 mg), egyéb rizikófaktorok (sarlósejtes anémia, leukémia, kokain) ismerete.', en: 'Priapism = painful erection lasting > 4 h, even without sexual stimulation. Rare with PDE5i (< 0.1%) but an EMERGENCY: vascular obstruction and prolonged ischemia cause oxygen deprivation in corpus cavernosum, leading to permanent tissue damage and impotence after 6-24 h. Seek urological emergency care IMMEDIATELY. Prevention: lower dose (5-10 mg), awareness of other risk factors (sickle cell, leukemia, cocaine).', pl: 'Priapizm = bolesna erekcja trwająca > 4 h, nawet bez stymulacji seksualnej. Rzadkie przy PDE5i (< 0,1%), ale STAN NAGŁY: obstrukcja naczyniowa i przedłużone niedokrwienie powodują niedobór tlenu w ciele jamistym, prowadząc do trwałego uszkodzenia tkanki i impotencji po 6-24 h. NATYCHMIAST zwróć się o urologiczną opiekę nagłą. Profilaktyka: niższa dawka (5-10 mg), świadomość innych czynników (anemia sierpowata, białaczka, kokaina).' } },
      { q: { hu: 'Hogyan kezeli a Tadalafil a BPH-tüneteket?', en: 'How does tadalafil treat BPH symptoms?', pl: 'Jak tadalafil leczy objawy BPH?' }, a: { hu: 'A Tadalafil 5 mg napi a prosztata és húgyhólyag simaizmainak relaxációját okozza a cGMP-emelkedés révén, ami csökkenti az alsó húgyúti tüneteket (LUTS) BPH-ban: gyenge sugar, gyakori vizelés, nokturnia. A McVary 2007 RCT (PMID 17382741) szerint az IPSS-score (International Prostate Symptom Score) 6-7 ponttal csökkent 12 hét alatt. Alfa-blokkolóhoz (tamsulosin, doxazosin) hasonló hatékonyság, de Tadalafil ED-vel kombinált indikációja egyedülálló: dual benefit egyetlen szerrel.', en: 'Daily 5 mg tadalafil relaxes smooth muscle of prostate and bladder via cGMP elevation, reducing lower urinary tract symptoms (LUTS) in BPH: weak stream, frequency, nocturia. McVary 2007 RCT (PMID 17382741) showed IPSS (International Prostate Symptom Score) reduction of 6-7 points over 12 weeks. Similar efficacy to alpha-blockers (tamsulosin, doxazosin), but tadalafil\'s combined ED indication is unique: dual benefit with one agent.', pl: 'Dzienne 5 mg tadalafilu rozluźnia mięśnie gładkie prostaty i pęcherza moczowego przez wzrost cGMP, zmniejszając objawy dolnych dróg moczowych (LUTS) w BPH: słaby strumień, częste oddawanie moczu, nokturia. RCT McVary 2007 (PMID 17382741) wykazało redukcję IPSS (International Prostate Symptom Score) o 6-7 punktów w 12 tygodni. Skuteczność podobna do alfa-blokerów (tamsulozyna, doksazosyna), ale unikalne wskazanie tadalafilu z ED: podwójna korzyść z jednym lekiem.' } },
      { q: { hu: 'Veszélyes-e a Tadalafil hosszú távú használata?', en: 'Is long-term tadalafil use dangerous?', pl: 'Czy długoterminowe stosowanie tadalafilu jest niebezpieczne?' }, a: { hu: 'Az 5-éves nyitott-cimkés Carson 2004 (BJU Int) és későbbi obszervációs trial-ek szerint a Tadalafil hosszú távon biztonságos, súlyos mellékhatás nem akkumulálódik. Az Aversa 2009 endotél-funkció-trial szerint a krónikus napi dózis kardiovaszkuláris ELŐNNYEL is bír diabéteszes ED-betegen (kardiometabolikus pleiotrópia). Nincs farmakológiai dependencia vagy tolerance. Az egyetlen tartós risk a NAION (látásvesztés) és priapizmus, mindkettő ritka. Évente kardiovaszkuláris és látás-kontroll javasolt.', en: 'Per 5-year open-label Carson 2004 (BJU Int) and later observational trials, long-term tadalafil is safe with no cumulative serious side effects. Aversa 2009 endothelial function trial shows chronic daily dose has CV BENEFIT in diabetic ED men (cardiometabolic pleiotropy). No pharmacological dependence or tolerance. Only persistent risks are NAION (vision loss) and priapism, both rare. Annual CV and vision check recommended.', pl: 'Wg 5-letniego otwartego Carson 2004 (BJU Int) i późniejszych badań obserwacyjnych, długoterminowe stosowanie tadalafilu jest bezpieczne, bez kumulujących się poważnych działań niepożądanych. Badanie funkcji śródbłonka Aversa 2009 pokazuje, że przewlekła dawka dzienna daje KORZYŚĆ CV u mężczyzn cukrzycowych z ED (plejotropia kardiometaboliczna). Brak farmakologicznej zależności lub tolerancji. Jedyne trwałe ryzyka to NAION (utrata wzroku) i priapizm, oba rzadkie. Zalecana roczna kontrola CV i wzroku.' } },
    ],
    related: ['atorvastatin', 'finasteride'],
    doseCalc: {
      type: 'fixedDose',
      fixedDose: { low: 2.5, medium: 5, high: 20 },
      unit: 'mg',
      note: {
        hu: 'Alacsony (2,5 mg napi): ED daily-mód indítás vagy idős/vesefunkció-zavar dóziscsökkentés. Mérsékelt (5 mg napi): ED daily standard vagy BPH (FDA 2011 indikáció) vagy ED+BPH dual. Magas (20 mg PRN): ED on-demand, max napi egyszer, 30-45 perccel az aktivitás előtt. Sosem kombinálni nitráttal.',
        en: 'Low (2.5 mg daily): ED daily-mode start or elderly/renal-impaired dose reduction. Moderate (5 mg daily): ED daily standard or BPH (FDA 2011 indication) or ED+BPH dual. High (20 mg PRN): ED on-demand, max once daily, 30-45 min before activity. Never combine with nitrate.',
        pl: 'Niska (2,5 mg dziennie): początek trybu daily ED lub redukcja u starszych/z niewydolnością nerek. Średnia (5 mg dziennie): standard daily ED lub BPH (wskazanie FDA 2011) lub ED+BPH podwójnie. Wysoka (20 mg PRN): ED na żądanie, maks. raz dziennie, 30-45 min przed aktywnością. Nigdy nie łączyć z azotanem.',
      },
    },
  },
]

export const EXTRA_PHARMACEUTICAL = []

export const PHARMACEUTICAL = [...CORE_PHARMACEUTICAL, ...EXTRA_PHARMACEUTICAL]

// Ordered entry IDs for the Top 10 grid. Will grow to 10 by Task 19.
export const TOP10_ORDER = ['metformin', 'semaglutide', 'atorvastatin', 'tadalafil']
