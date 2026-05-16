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
]

export const EXTRA_PHARMACEUTICAL = []

export const PHARMACEUTICAL = [...CORE_PHARMACEUTICAL, ...EXTRA_PHARMACEUTICAL]

// Ordered entry IDs for the Top 10 grid. Will grow to 10 by Task 19.
export const TOP10_ORDER = ['metformin', 'semaglutide']
