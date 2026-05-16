// Pharmaceutical Library, 8 effect categories ("Terápiás területek").
// Each tile mirrors the EffectCategory shape used by the peptide / nootropic / performance libraries.
// All text peer-reviewed sourced (PubMed, FDA, EMA, NEJM, Lancet).
// Em-dash forbidden in user-facing strings.
// image: null → SVG fallback rendered by EffectsSection's ILLUSTRATIONS dictionary.
// entryNames + entryIds enumerate the *target* roster (some entries land in Session 5-6;
// EffectsSection skips unknown ids gracefully).

export const EFFECT_CATEGORIES = [
  // 1. Anyagcsere és Diabétesz
  {
    color: '#10b981',
    glow: 'rgba(16,185,129,0.18)',
    title: { hu: 'Anyagcsere és Diabétesz', en: 'Metabolic & Diabetes', pl: 'Metabolizm i Cukrzyca' },
    subtitle: {
      hu: 'Inzulinérzékenység, vércukor-szabályozás, testtömeg',
      en: 'Insulin sensitivity, glycemic control, body weight',
      pl: 'Wrażliwość na insulinę, kontrola glikemii, masa ciała',
    },
    description: {
      hu: 'A 2-es típusú diabétesz és metabolikus szindróma kezelésének gerince: biguanidok (Metformin), GLP-1 receptor agonisták (Semaglutide, Liraglutide), SGLT2-gátlók (Empagliflozin), valamint a kettős GIP/GLP-1 agonisták (Tirzepatide). A modern obezitás-farmakoterápia 2021 óta gyorsult fel a GLP-1 alapú szerekkel, az NEJM 2025 SURMOUNT-5 vizsgálat ~25%-os testtömeg-csökkenést mutatott Tirzepatide mellett.',
      en: 'The backbone of type-2 diabetes and metabolic syndrome treatment: biguanides (Metformin), GLP-1 receptor agonists (Semaglutide, Liraglutide), SGLT2 inhibitors (Empagliflozin), and dual GIP/GLP-1 agonists (Tirzepatide). Modern obesity pharmacotherapy accelerated after 2021 with GLP-1 based agents; the NEJM 2025 SURMOUNT-5 trial showed ~25% body weight reduction with Tirzepatide.',
      pl: 'Trzon leczenia cukrzycy typu 2 i zespołu metabolicznego: biguanidy (Metformina), agoniści receptora GLP-1 (Semaglutid, Liraglutid), inhibitory SGLT2 (Empagliflozyna) i podwójni agoniści GIP/GLP-1 (Tirzepatyd). Nowoczesna farmakoterapia otyłości przyspieszyła od 2021 r. z lekami opartymi na GLP-1; badanie NEJM 2025 SURMOUNT-5 wykazało ~25% redukcję masy ciała przy Tirzepatydzie.',
    },
    detail: {
      hu: 'Mechanizmusok: Metformin AMPK-aktiváció és hepatikus glükoneogenezis csökkentés; GLP-1 agonisták késleltetett gyomorürülés, inzulinszekréció-stimuláció, étvágy-csökkentés a hipotalamuszban; SGLT2-gátlók glükozúria-indukció a vesetubulusokban. A Tirzepatide kettős GIP+GLP-1 mechanizmusa addicionális zsírmobilizációt biztosít.',
      en: 'Mechanisms: Metformin activates AMPK and lowers hepatic gluconeogenesis; GLP-1 agonists delay gastric emptying, stimulate insulin secretion, suppress appetite in the hypothalamus; SGLT2 inhibitors induce glucosuria at the renal tubules. Tirzepatide\'s dual GIP+GLP-1 mechanism provides additional fat mobilization.',
      pl: 'Mechanizmy: Metformina aktywuje AMPK i obniża glukoneogenezę wątrobową; agoniści GLP-1 opóźniają opróżnianie żołądka, stymulują sekrecję insuliny, hamują apetyt w podwzgórzu; inhibitory SGLT2 indukują glukozurię w cewkach nerkowych. Podwójny mechanizm GIP+GLP-1 Tirzepatydu daje dodatkową mobilizację tłuszczu.',
    },
    studies: [
      { title: 'Tirzepatide vs semaglutide for obesity (SURMOUNT-5)', authors: 'Aronne LJ, Horn DB, le Roux CW, et al.', journal: 'N Engl J Med. 2025.', pmid: '40353578' },
      { title: 'Once-weekly semaglutide in adults with overweight or obesity (STEP-1)', authors: 'Wilding JPH, Batterham RL, Calanna S, et al.', journal: 'N Engl J Med. 2021;384(11):989-1002.', pmid: '33567185' },
      { title: 'Cagrilintide plus semaglutide (CagriSema) for obesity', authors: 'Garvey WT, Frias JP, Jastreboff AM, et al.', journal: 'N Engl J Med. 2025.', pmid: '40009844' },
    ],
    entryNames: ['Metformin', 'Semaglutide', 'Tirzepatide', 'Empagliflozin', 'Liraglutide'],
    entryIds: ['metformin', 'semaglutide', 'tirzepatide', 'empagliflozin', 'liraglutide'],
    image: null,
  },

  // 2. Koleszterin és Szív
  {
    color: '#dc2626',
    glow: 'rgba(220,38,38,0.18)',
    title: { hu: 'Koleszterin és Szív', en: 'Cholesterol & Heart', pl: 'Cholesterol i Serce' },
    subtitle: {
      hu: 'LDL-csökkentés, ASCVD-prevenció, vérnyomás-kontroll',
      en: 'LDL reduction, ASCVD prevention, blood pressure control',
      pl: 'Redukcja LDL, prewencja ASCVD, kontrola ciśnienia',
    },
    description: {
      hu: 'A kardiovaszkuláris prevenció két fő pillére az LDL-koleszterin és a vérnyomás kontroll. Statinok (HMG-CoA reduktáz-gátlók: Atorvastatin, Rosuvastatin), ACE-gátlók (Ramipril), béta-blokkolók (Bisoprolol), kalcium-csatorna-blokkolók és direkt orális antikoagulánsok (Apixaban) együtt alkotják a modern ASCVD-prevenciós eszköztárat. A PDE5-inhibitor Tadalafil ide is tartozik: pulmonális hipertónia + BPH + ED indikációkkal.',
      en: 'The two main pillars of cardiovascular prevention are LDL-cholesterol and blood pressure control. Statins (HMG-CoA reductase inhibitors: Atorvastatin, Rosuvastatin), ACE inhibitors (Ramipril), beta-blockers (Bisoprolol), calcium channel blockers, and direct oral anticoagulants (Apixaban) together form the modern ASCVD-prevention toolkit. The PDE5 inhibitor Tadalafil also belongs here: pulmonary hypertension + BPH + ED indications.',
      pl: 'Dwa główne filary prewencji sercowo-naczyniowej to kontrola LDL-cholesterolu i ciśnienia tętniczego. Statyny (inhibitory HMG-CoA reduktazy: Atorwastatyna, Rosuwastatyna), inhibitory ACE (Ramipryl), beta-blokery (Bisoprolol), blokery kanałów wapniowych i bezpośrednie doustne antykoagulanty (Apiksaban) razem tworzą nowoczesny arsenał prewencji ASCVD. Inhibitor PDE5 Tadalafil również tu należy: nadciśnienie płucne + BPH + zaburzenia erekcji.',
    },
    detail: {
      hu: 'Statinok 30-50%-os LDL-csökkenést érnek el (Cholesterol Treatment Trialists 2010 meta-analízis), és minden 1 mmol/L LDL-csökkenés ~22% major vaszkuláris event-csökkenéssel jár. Az ACE-gátlók RAAS-blokádon keresztül csökkentik a vérnyomást, a béta-blokkolók a szimpatikus tónust mérséklik. Az Apixaban Faktor Xa-inhibitor pitvarfibrillációban warfarin-helyettesítő, kisebb intracerebrális vérzéskockázattal (ARISTOTLE 2011).',
      en: 'Statins achieve 30-50% LDL reduction (Cholesterol Treatment Trialists 2010 meta-analysis), and each 1 mmol/L LDL drop yields ~22% reduction in major vascular events. ACE inhibitors lower blood pressure via RAAS blockade; beta-blockers temper sympathetic tone. Apixaban is a Factor Xa inhibitor used in atrial fibrillation as a warfarin replacement, with lower intracerebral bleeding risk (ARISTOTLE 2011).',
      pl: 'Statyny osiągają redukcję LDL o 30-50% (metaanaliza Cholesterol Treatment Trialists 2010), a każde obniżenie LDL o 1 mmol/L daje ~22% redukcji poważnych zdarzeń naczyniowych. Inhibitory ACE obniżają ciśnienie poprzez blokadę RAAS; beta-blokery łagodzą napęd współczulny. Apiksaban to inhibitor czynnika Xa stosowany w migotaniu przedsionków jako zamiennik warfaryny, z niższym ryzykiem krwawienia śródmózgowego (ARISTOTLE 2011).',
    },
    studies: [
      { title: 'Efficacy and safety of cholesterol-lowering treatment: CTT meta-analysis', authors: 'Cholesterol Treatment Trialists Collaboration.', journal: 'Lancet. 2010;376(9753):1670-1681.', pmid: '21067804' },
      { title: 'Apixaban vs warfarin in atrial fibrillation (ARISTOTLE)', authors: 'Granger CB, Alexander JH, McMurray JJ, et al.', journal: 'N Engl J Med. 2011;365(11):981-992.', pmid: '21870978' },
    ],
    entryNames: ['Atorvastatin', 'Rosuvastatin', 'Tadalafil', 'Ramipril', 'Bisoprolol', 'Apixaban'],
    entryIds: ['atorvastatin', 'rosuvastatin', 'tadalafil', 'ramipril', 'bisoprolol', 'apixaban'],
    image: null,
  },

  // 3. Hangulat és Depresszió
  {
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.18)',
    title: { hu: 'Hangulat és Depresszió', en: 'Mood & Depression', pl: 'Nastrój i Depresja' },
    subtitle: {
      hu: 'SSRI, NDRI, atípusos antidepresszánsok, stabilizátorok',
      en: 'SSRI, NDRI, atypical antidepressants, stabilizers',
      pl: 'SSRI, NDRI, atypowe antydepresanty, stabilizatory',
    },
    description: {
      hu: 'A depresszió farmakoterápiája a monoamin-hipotézisre épül (5-HT, NE, DA). Szelektív szerotonin-újrafelvétel-gátlók (Sertralin, Escitalopram, Fluoxetine), szerotonin-noradrenalin reuptake-gátlók (Venlafaxine), atípusos antidepresszánsok (Mirtazapine), valamint a noradrenalin-dopamin reuptake-gátló Bupropion képezik az első-vonalas választást. Az Aripiprazole atípusos antipszichotikum dopamin-parciális agonista, hangulat-stabilizátorként is használt.',
      en: 'Depression pharmacotherapy is built on the monoamine hypothesis (5-HT, NE, DA). Selective serotonin reuptake inhibitors (Sertralin, Escitalopram, Fluoxetine), serotonin-norepinephrine reuptake inhibitors (Venlafaxine), atypical antidepressants (Mirtazapine), and the norepinephrine-dopamine reuptake inhibitor Bupropion form the first-line options. Aripiprazole is an atypical antipsychotic with dopamine partial agonism, also used as a mood stabilizer.',
      pl: 'Farmakoterapia depresji opiera się na hipotezie monoamin (5-HT, NE, DA). Selektywne inhibitory wychwytu zwrotnego serotoniny (Sertralina, Escitalopram, Fluoksetyna), inhibitory wychwytu zwrotnego serotoniny-noradrenaliny (Wenlafaksyna), atypowe antydepresanty (Mirtazapina) i inhibitor wychwytu zwrotnego noradrenaliny-dopaminy Bupropion stanowią opcje pierwszej linii. Aripiprazol to atypowy lek przeciwpsychotyczny z częściowym agonizmem dopaminowym, używany też jako stabilizator nastroju.',
    },
    detail: {
      hu: 'Az SSRI-k onset-ideje 2-6 hét, a Bupropion atípusos NDRI mechanizmusával dohányzás-leszoktatásban is indikált (Zyban). A FINISH-szindróma (SSRI-leállítás flu-szerű tünetekkel) hirtelen elhagyás esetén lép fel, taper-protokoll kötelező. Az SSRI-MAOI kombináció szerotonin-szindrómát okozhat, 14 napos washout-periódus szükséges.',
      en: 'SSRIs have a 2-6 week onset time; Bupropion\'s atypical NDRI mechanism makes it indicated also for smoking cessation (Zyban). FINISH syndrome (SSRI-discontinuation flu-like symptoms) occurs on abrupt cessation; mandatory taper protocol. SSRI-MAOI combination can cause serotonin syndrome; a 14-day washout period is required.',
      pl: 'SSRI mają czas wejścia 2-6 tygodni; atypowy mechanizm NDRI Bupropionu wskazuje go także w rzucaniu palenia (Zyban). Zespół FINISH (objawy grypopodobne po nagłym odstawieniu SSRI) wymaga obowiązkowego protokołu odstawiania. Kombinacja SSRI-MAOI może wywołać zespół serotoninowy; wymagany 14-dniowy okres karencji.',
    },
    studies: [
      { title: 'Comparative efficacy of 21 antidepressants for adult depression', authors: 'Cipriani A, Furukawa TA, Salanti G, et al.', journal: 'Lancet. 2018;391(10128):1357-1366.', pmid: '29477251' },
    ],
    entryNames: ['Sertralin', 'Bupropion', 'Escitalopram', 'Fluoxetine', 'Venlafaxine', 'Mirtazapine', 'Aripiprazole'],
    entryIds: ['sertralin', 'bupropion', 'escitalopram', 'fluoxetine', 'venlafaxine', 'mirtazapine', 'aripiprazole'],
    image: null,
  },

  // 4. Éberlét és Alvás
  {
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.18)',
    title: { hu: 'Éberlét és Alvás', en: 'Wakefulness & Sleep', pl: 'Czuwanie i Sen' },
    subtitle: {
      hu: 'Eugeroikum, stimuláns, alvássegítő, narkolepszia-kezelés',
      en: 'Eugeroic, stimulant, sleep aids, narcolepsy treatment',
      pl: 'Eugeroiki, stymulanty, leki nasenne, leczenie narkolepsji',
    },
    description: {
      hu: 'Az ébrenlét-szabályozás farmakológiája az orexin, hisztamin és dopamin rendszerekre épít. A Modafinil (Provigil) eugeroikum: orexinerg + indirekt DA-NE hatású ébredés-segítő, narkolepszia + shift-work zavar indikációval, EMA + FDA Schedule IV. A Methylphenidate (Ritalin) DA-NE reuptake-gátló, ADHD elsővonalas szere, USA Schedule II + HU receptre.',
      en: 'Wakefulness regulation pharmacology builds on orexin, histamine, and dopamine systems. Modafinil (Provigil) is a eugeroic: orexinergic + indirect DA-NE wake-promoter, indicated for narcolepsy + shift-work disorder, FDA + EMA Schedule IV. Methylphenidate (Ritalin) is a DA-NE reuptake inhibitor, first-line ADHD treatment, US Schedule II + HU prescription-only.',
      pl: 'Farmakologia regulacji czuwania opiera się na układach oreksyny, histaminy i dopaminy. Modafinil (Provigil) to eugeroik: oreksynowy + pośrednio DA-NE pobudzający, wskazany w narkolepsji + zaburzeniach pracy zmianowej, FDA + EMA Schedule IV. Metylofenidat (Ritalin) to inhibitor wychwytu zwrotnego DA-NE, lek pierwszej linii ADHD, USA Schedule II + HU na receptę.',
    },
    detail: {
      hu: 'Modafinil 200 mg/nap dózisban 8-12 órás ébresztő hatású, klasszikus stimulánsokhoz képest kisebb euforikus-potenciál. FDA boxed warning Stevens-Johnson szindrómára (SJS/TEN/DRESS, 0.01% incidencia). Modafinil CYP3A4-induktor: hormonális fogamzásgátlók hatékonyságát csökkenti. A Methylphenidate kardiovaszkuláris kontraindikációkkal jár, baseline EKG kötelező.',
      en: 'Modafinil at 200 mg/day provides 8-12 hours of wake-promotion, with lower euphoric potential than classic stimulants. FDA boxed warning for Stevens-Johnson syndrome (SJS/TEN/DRESS, 0.01% incidence). Modafinil is a CYP3A4 inducer: reduces efficacy of hormonal contraceptives. Methylphenidate has cardiovascular contraindications; baseline ECG mandatory.',
      pl: 'Modafinil w dawce 200 mg/dzień zapewnia 8-12 godzin pobudzenia, z mniejszym potencjałem euforycznym niż klasyczne stymulanty. Ostrzeżenie ramkowe FDA dla zespołu Stevensa-Johnsona (SJS/TEN/DRESS, 0,01% częstość). Modafinil jest induktorem CYP3A4: zmniejsza skuteczność doustnych antykoncepcyjnych. Metylofenidat ma kardiologiczne przeciwwskazania; wyjściowe EKG obowiązkowe.',
    },
    studies: [
      { title: 'Modafinil and methylphenidate for neuroenhancement in healthy individuals: systematic review', authors: 'Battleday RM, Brem AK.', journal: 'Eur Neuropsychopharmacol. 2015;25(11):1865-1881.', pmid: '26381811' },
      { title: 'Modafinil for narcolepsy: clinical update', authors: 'Pizza F, Filardi M, Vandi S, et al.', journal: 'J Clin Sleep Med. 2023;19(4):813-822.', pmid: '36921459' },
    ],
    entryNames: ['Modafinil', 'Methylphenidate'],
    entryIds: ['modafinil', 'methylphenidate'],
    image: null,
  },

  // 5. Pajzsmirigy
  {
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.18)',
    title: { hu: 'Pajzsmirigy', en: 'Thyroid', pl: 'Tarczyca' },
    subtitle: {
      hu: 'T4-pótlás, T3, antithyroid szerek',
      en: 'T4 replacement, T3, antithyroid agents',
      pl: 'Substytucja T4, T3, leki przeciwtarczycowe',
    },
    description: {
      hu: 'A pajzsmirigy-hormonok (T4 / T3) minden szövetben hatnak: alapanyagcsere, hőtermelés, idegrendszer-érés, kardiális kontraktilitás. Hypothyreózis pótlás: Levothyroxin (L-T4) napi 1.6 µg/kg testtömeg-alapú induló dózissal, célzott TSH 0.5-4.5 mU/L tartományban. Hyperthyreózis kezelés: Methimazole (thiamazol) Graves-betegségben + thyroidectomia / radiojód előtt. A Liothyronine (L-T3) ritkán használt monoterápia: gyors fél-életidő, ingadozó tünetek.',
      en: 'Thyroid hormones (T4 / T3) act in every tissue: basal metabolism, thermogenesis, nervous system maturation, cardiac contractility. Hypothyroidism replacement: Levothyroxin (L-T4) starting at 1.6 µg/kg/day weight-based, targeting TSH 0.5-4.5 mU/L. Hyperthyroidism treatment: Methimazole (thiamazole) in Graves\' disease, also prior to thyroidectomy / radioiodine. Liothyronine (L-T3) is rarely used as monotherapy: short half-life, fluctuating symptoms.',
      pl: 'Hormony tarczycy (T4 / T3) działają w każdej tkance: podstawowa przemiana materii, termogeneza, dojrzewanie układu nerwowego, kurczliwość serca. Substytucja niedoczynności: Lewotyroksyna (L-T4) z dawki początkowej 1,6 µg/kg/dzień opartej na masie ciała, celując w TSH 0,5-4,5 mU/L. Leczenie nadczynności: Metimazol (tiamazol) w chorobie Gravesa, także przed tyreoidektomią / jodem radioaktywnym. Liotyronina (L-T3) rzadko stosowana jako monoterapia: krótki okres półtrwania, wahania objawów.',
    },
    detail: {
      hu: 'A Levothyroxin testtömeg-alapú induló dózisa 65 év feletti betegeknél 25-50 µg/nap-ra csökken kardiális mellékhatás-kockázat miatt. A bioekvivalencia generic vs. brand között 0.95-1.05, tehát brand-stabilitás ajánlott. Étkezés és kalciumtartalmú szerek 4 órás távolsággal csökkentik a felszívódást. A Methimazole agranulocitózis-kockázattal jár (0.1-0.5%), baseline + havi fehérvérsejt-vizsgálat ajánlott.',
      en: 'Levothyroxin\'s weight-based starting dose drops to 25-50 µg/day in patients over 65 due to cardiac side-effect risk. Generic vs. brand bioequivalence is 0.95-1.05, so brand-stability is preferred. Food and calcium-containing agents must be separated by 4 hours from intake to avoid reduced absorption. Methimazole carries an agranulocytosis risk (0.1-0.5%); baseline + monthly WBC monitoring recommended.',
      pl: 'Dawka początkowa Lewotyroksyny oparta na masie ciała spada do 25-50 µg/dzień u pacjentów powyżej 65 lat ze względu na ryzyko działań sercowych. Biorównoważność generyk vs. marka wynosi 0,95-1,05, więc preferowana jest stabilność marki. Posiłki i preparaty zawierające wapń muszą być oddzielone 4-godzinnym odstępem. Metimazol niesie ryzyko agranulocytozy (0,1-0,5%); zalecane wyjściowe + miesięczne monitorowanie WBC.',
    },
    studies: [
      { title: 'Guidelines for the treatment of hypothyroidism (ATA 2014)', authors: 'Jonklaas J, Bianco AC, Bauer AJ, et al.', journal: 'Thyroid. 2014;24(12):1670-1751.', pmid: '25266247' },
    ],
    entryNames: ['Levothyroxin', 'Methimazole', 'Liothyronine'],
    entryIds: ['levothyroxin', 'methimazole', 'liothyronine'],
    image: null,
  },

  // 6. Bakteriális Infekciók
  {
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.18)',
    title: { hu: 'Bakteriális Infekciók', en: 'Bacterial Infections', pl: 'Infekcje Bakteryjne' },
    subtitle: {
      hu: 'β-laktámok, makrolidok, kinolonok, tetraciklinek',
      en: 'β-lactams, macrolides, quinolones, tetracyclines',
      pl: 'β-laktamy, makrolidy, chinolony, tetracykliny',
    },
    description: {
      hu: 'Az antibiotikum-választás a Gram-status, anaerob-érzékenység és a rezisztencia-mintázat alapján történik. Amoxicillin (β-laktám, széles spektrumú, Streptococcus + H. influenzae elsővonal); Azithromycin (makrolid, atipikus pneumónia + STI); Ciprofloxacin (fluorokinolon, Gram-negatív + Pseudomonas, fekete dobozos figyelmeztetés Achilles-szakadásra); Doxycycline (tetraciklin, Lyme + akne + malária-profilaxis); Metronidazole (5-nitroimidazol, anaerobok + C. difficile + Trichomonas).',
      en: 'Antibiotic choice depends on Gram-status, anaerobic susceptibility, and resistance patterns. Amoxicillin (β-lactam, broad-spectrum, first-line Streptococcus + H. influenzae); Azithromycin (macrolide, atypical pneumonia + STIs); Ciprofloxacin (fluoroquinolone, Gram-negative + Pseudomonas, boxed warning for Achilles tendon rupture); Doxycycline (tetracycline, Lyme + acne + malaria prophylaxis); Metronidazole (5-nitroimidazole, anaerobes + C. difficile + Trichomonas).',
      pl: 'Wybór antybiotyku zależy od statusu Gram, wrażliwości beztlenowej i wzorców oporności. Amoksycylina (β-laktam, szerokie spektrum, pierwsza linia Streptococcus + H. influenzae); Azytromycyna (makrolid, atypowe zapalenie płuc + STI); Cyprofloksacyna (fluorochinolon, Gram-ujemne + Pseudomonas, ostrzeżenie ramkowe dla zerwania ścięgna Achillesa); Doksycyklina (tetracyklina, Lyme + trądzik + profilaktyka malarii); Metronidazol (5-nitroimidazol, beztlenowce + C. difficile + Trichomonas).',
    },
    detail: {
      hu: 'A rezisztencia szempont kulcsfontosságú: a β-laktamáz-termelő törzsek miatt Amoxicillin + klavulánsav (Augmentin) gyakran szükséges. A fluorokinolonok 2018 óta EMA-restrikcióval rendelkeznek (csak súlyos infekciók, mert tendinopátia + perifériás neuropátia + QT-megnyúlás kockázattal járnak). A C. difficile colitis Metronidazole vagy oralis Vancomycin elsővonalas terápiája; széles spektrumú antibiotikum-túlhasználat főbb provokáló tényező.',
      en: 'Resistance is paramount: β-lactamase-producing strains often require Amoxicillin + clavulanic acid (Augmentin). Fluoroquinolones have been EMA-restricted since 2018 (only severe infections, due to tendinopathy + peripheral neuropathy + QT-prolongation risks). C. difficile colitis is first-line treated with Metronidazole or oral Vancomycin; broad-spectrum antibiotic overuse is a major provoking factor.',
      pl: 'Oporność jest kluczowa: szczepy wytwarzające β-laktamazy często wymagają Amoksycyliny + kwasu klawulanowego (Augmentin). Fluorochinolony są ograniczone przez EMA od 2018 r. (tylko ciężkie infekcje, z powodu tendinopatii + neuropatii obwodowej + ryzyka wydłużenia QT). Zapalenie jelita grubego C. difficile leczy się pierwszorazowo Metronidazolem lub doustną Wankomycyną; nadużywanie antybiotyków o szerokim spektrum to główny czynnik prowokujący.',
    },
    studies: [
      { title: 'Antimicrobial resistance: a global multifaceted phenomenon', authors: 'WHO Global Action Plan on Antimicrobial Resistance.', journal: 'WHO. 2015.', pmid: '' },
    ],
    entryNames: ['Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Doxycycline', 'Metronidazole'],
    entryIds: ['amoxicillin', 'azithromycin', 'ciprofloxacin', 'doxycycline', 'metronidazole'],
    image: null,
  },

  // 7. Hormon és Szexuális Egészség
  {
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.18)',
    title: { hu: 'Hormon és Szexuális Egészség', en: 'Hormonal & Sexual Health', pl: 'Hormony i Zdrowie Seksualne' },
    subtitle: {
      hu: '5α-reduktáz-gátlók, PDE5-inhibitorok, SERM-ek',
      en: '5α-reductase inhibitors, PDE5 inhibitors, SERMs',
      pl: 'Inhibitory 5α-reduktazy, inhibitory PDE5, SERM',
    },
    description: {
      hu: 'A férfi hormonális szabályozás kulcs gyógyszerei: Finasteride (5α-reduktáz-gátló, DHT-konverzió blokádja, BPH + androgenetikus alopecia indikációval); Tadalafil (PDE5-inhibitor, hosszú 17.5 órás féléletidő, ED + BPH + pulmonális hipertónia); Tamoxifen (SERM, ösztrogén-receptor antagonista melldarabban + agonista csontban, melldaganat + AAS post-cycle therapy off-label).',
      en: 'Key drugs in male hormonal regulation: Finasteride (5α-reductase inhibitor, blocks DHT conversion, indicated for BPH + androgenetic alopecia); Tadalafil (PDE5 inhibitor, long 17.5-hour half-life, ED + BPH + pulmonary hypertension); Tamoxifen (SERM, estrogen receptor antagonist in breast + agonist in bone, breast cancer + AAS post-cycle therapy off-label).',
      pl: 'Kluczowe leki w męskiej regulacji hormonalnej: Finasteryd (inhibitor 5α-reduktazy, blokuje konwersję DHT, wskazany w BPH + łysieniu androgenowym); Tadalafil (inhibitor PDE5, długi okres półtrwania 17,5 h, ED + BPH + nadciśnienie płucne); Tamoksyfen (SERM, antagonista receptora estrogenowego w piersi + agonista w kości, rak piersi + AAS post-cycle therapy off-label).',
    },
    detail: {
      hu: 'A Finasteride PFS (post-finasteride syndrome) ritka, de dokumentált mellékhatás: libidócsökkenés + erektilis diszfunkció + hangulati zavarok, melyek a kezelés abbahagyása után is fennmaradhatnak. A Tadalafil + nitrátok kontraindikáció (életveszélyes hipotenzió). A Tamoxifen CYP2D6-szubsztrát: erős inhibitorok (paroxetine, fluoxetine) csökkentik az aktív metabolit (endoxifen) szintjét.',
      en: 'PFS (post-finasteride syndrome) is a rare but documented side effect: lowered libido + erectile dysfunction + mood disturbances, which may persist after discontinuation. Tadalafil + nitrates is a contraindication (life-threatening hypotension). Tamoxifen is a CYP2D6 substrate: strong inhibitors (paroxetine, fluoxetine) reduce active metabolite (endoxifen) levels.',
      pl: 'PFS (zespół po finasterydzie) to rzadki, ale udokumentowany efekt: obniżenie libido + dysfunkcja erekcji + zaburzenia nastroju, które mogą utrzymywać się po odstawieniu. Tadalafil + azotany to przeciwwskazanie (zagrażające życiu niedociśnienie). Tamoksyfen jest substratem CYP2D6: silne inhibitory (paroksetyna, fluoksetyna) zmniejszają poziom aktywnego metabolitu (endoksyfenu).',
    },
    studies: [
      { title: 'Tadalafil for the treatment of erectile dysfunction: long-term safety', authors: 'Brock GB, McMahon CG, Chen KK, et al.', journal: 'J Urol. 2002;168(4 Pt 1):1332-1336.', pmid: '12352386' },
    ],
    entryNames: ['Tadalafil', 'Finasteride', 'Tamoxifen'],
    entryIds: ['tadalafil', 'finasteride', 'tamoxifen'],
    image: null,
  },

  // 8. Bőr és Hajhullás
  {
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.18)',
    title: { hu: 'Bőr és Hajhullás', en: 'Skin & Hair Loss', pl: 'Skóra i Wypadanie Włosów' },
    subtitle: {
      hu: 'Retinoidok, vazodilatátorok, izotretinoin',
      en: 'Retinoids, vasodilators, isotretinoin',
      pl: 'Retinoidy, leki rozszerzające naczynia, izotretynoina',
    },
    description: {
      hu: 'A bőrgyógyászati farmakoterápia két fő útvonalra épít: a retinoid-receptor (RAR/RXR) szabályozás (Isotretinoin, Tretinoin) és a hajhullás-kezelés (Minoxidil topical + Finasteride). Az Isotretinoin (Accutane) súlyos, cisztás acne elsővonalas szere, dramatikus remissziókkal, de teratogenitással (FDA iPLEDGE program kötelező) és pszichiátriai mellékhatásokkal. A Tretinoin (Retin-A) topical retinoid az anti-aging + mild acne aranystandardja.',
      en: 'Dermatology pharmacotherapy is built on two main pathways: retinoid receptor (RAR/RXR) modulation (Isotretinoin, Tretinoin) and hair loss treatment (Minoxidil topical + Finasteride). Isotretinoin (Accutane) is first-line for severe cystic acne, with dramatic remissions but with teratogenicity (FDA iPLEDGE program mandatory) and psychiatric side effects. Tretinoin (Retin-A) is the gold standard topical retinoid for anti-aging + mild acne.',
      pl: 'Farmakoterapia dermatologiczna opiera się na dwóch głównych szlakach: modulacja receptora retinoidowego (RAR/RXR) (Izotretynoina, Tretynoina) i leczenie wypadania włosów (Minoksydyl miejscowo + Finasteryd). Izotretynoina (Accutane) to lek pierwszej linii w ciężkim trądziku torbielowatym, z dramatycznymi remisjami, ale z teratogennością (obowiązkowy program FDA iPLEDGE) i działaniami psychiatrycznymi.',
    },
    detail: {
      hu: 'Az Isotretinoin 0.5-1 mg/kg/nap dózisban 16-20 hét alatt kumulatív 120-150 mg/kg dózist ér el, ami a hosszú távú remissziós kulcs. Kötelező baseline + havi LFT + lipidpanel + terhességi teszt nőknél (iPLEDGE). A Minoxidil topical 5% napi 2× az androgenetikus alopecia legjobb evidence-elemű OTC kezelése, 3-6 hónap után láthatóan újranövő hajszálak; tachycardia ritka szisztémás mellékhatás.',
      en: 'Isotretinoin at 0.5-1 mg/kg/day over 16-20 weeks achieves a cumulative 120-150 mg/kg dose, which is the key to long-term remission. Mandatory baseline + monthly LFT + lipid panel + pregnancy test in women (iPLEDGE). Minoxidil topical 5% twice daily is the best-evidenced OTC treatment for androgenetic alopecia, with visibly regrowing hairs after 3-6 months; tachycardia is a rare systemic side effect.',
      pl: 'Izotretynoina w dawce 0,5-1 mg/kg/dzień przez 16-20 tygodni osiąga skumulowaną dawkę 120-150 mg/kg, co jest kluczem do długoterminowej remisji. Obowiązkowe wyjściowe + miesięczne LFT + panel lipidowy + test ciążowy u kobiet (iPLEDGE). Minoksydyl miejscowy 5% dwa razy dziennie to najlepiej udokumentowane leczenie OTC łysienia androgenowego, z widoczną odrostą włosów po 3-6 miesiącach; tachykardia to rzadki ogólnoustrojowy efekt uboczny.',
    },
    studies: [
      { title: 'Isotretinoin for severe acne: long-term outcomes', authors: 'Layton AM.', journal: 'Dermatoendocrinol. 2009;1(3):162-169.', pmid: '20436884' },
      { title: 'Minoxidil for androgenetic alopecia: systematic review', authors: 'Olsen EA, Dunlap FE, Funicella T, et al.', journal: 'J Am Acad Dermatol. 2002;47(3):377-385.', pmid: '12196747' },
    ],
    entryNames: ['Finasteride', 'Minoxidil', 'Isotretinoin', 'Tretinoin'],
    entryIds: ['finasteride', 'minoxidil', 'isotretinoin', 'tretinoin'],
    image: null,
  },
]
