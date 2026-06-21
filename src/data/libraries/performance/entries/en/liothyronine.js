// Liothyronine (T3, Cytomel) – Pfizer 1956 FDA-approved synthetic
// 3,5,3'-triiodothyronine, hypothyroidism Rx. Cutting-cycle off-label use
// documented since the 1980s. Sources: FDA Cytomel SmPC, Bunevicius 1999 PMID 9989958,
// Stott 2017 TRUST NEJM PMID 28121505, Klein 2001 PMID 11257082,
// Celi 2011 PMID 21307176.

export default {
  "id": "liothyronine",
  "sideEffects": [
    { "hu": "Tachycardia, palpitáció és pitvarfibrilláció: a T3 közvetlenül emeli a szívfrekvenciát és a myocardiális oxigénigényt, túladagolásnál szívritmuszavar (különösen pitvarfibrilláció) alakulhat ki.", "en": "Tachycardia, palpitations and atrial fibrillation: T3 directly raises heart rate and myocardial oxygen demand; overdosing can trigger arrhythmias (notably atrial fibrillation).", "pl": "Tachykardia, kołatanie serca i migotanie przedsionków: T3 bezpośrednio podnosi częstość rytmu serca i zapotrzebowanie mięśnia sercowego na tlen; przedawkowanie może wywołać zaburzenia rytmu (zwłaszcza migotanie przedsionków)." },
    { "hu": "Endogén HPT-tengely (TSH) szuppresszió és iatrogén másodlagos hypothyreosis: a kívülről bevitt T3 dózisfüggően elnyomja a saját TSH-termelést, hosszabb vagy magas dózisú ciklus után rebound-hypothyreosist és lassú felépülést okozva.", "en": "Endogenous HPT-axis (TSH) suppression and iatrogenic secondary hypothyroidism: exogenous T3 dose-dependently suppresses your own TSH output, causing rebound hypothyroidism and slow recovery after longer or high-dose use.", "pl": "Supresja osi HPT (TSH) i jatrogenna wtórna niedoczynność tarczycy: egzogenny T3 zależnie od dawki tłumi własne wydzielanie TSH, powodując niedoczynność z odbicia i powolny powrót do normy po dłuższym lub wysokodawkowym stosowaniu." },
    { "hu": "Tirotoxikózis-szindróma túladagolásnál: hyperthermia, izzadás, hőintolerancia, jelentős akaratlan testsúlyvesztés és izomvesztés, mert a T3 magas dózison protein-katabolikus.", "en": "Thyrotoxicosis syndrome on overdose: hyperthermia, sweating, heat intolerance, marked unintended weight and muscle loss, since T3 at high doses is protein-catabolic.", "pl": "Zespół tyreotoksykozy przy przedawkowaniu: hipertermia, pocenie się, nietolerancja ciepła, znaczna niezamierzona utrata masy ciała i mięśni, ponieważ T3 w wysokich dawkach jest katabolizmem białkowym." },
    { "hu": "Tremor, szorongás, ingerlékenység és álmatlanság: a fokozott adrenerg tónus és metabolikus ráta dózisfüggő neuropszichiátriai tüneteket okoz.", "en": "Tremor, anxiety, irritability and insomnia: the increased adrenergic tone and metabolic rate cause dose-dependent neuropsychiatric symptoms.", "pl": "Drżenie, lęk, drażliwość i bezsenność: zwiększone napięcie adrenergiczne i tempo metabolizmu powodują zależne od dawki objawy neuropsychiatryczne." },
    { "hu": "Csontsűrűség-csökkenés (osteoporosis-kockázat): tartós, magas dózisú használat (>50 μg/nap, >1 év) gyorsítja a csont-turnovert és csökkenti a csontsűrűséget.", "en": "Reduced bone density (osteoporosis risk): chronic high-dose use (>50 μg/day, >1 year) accelerates bone turnover and lowers bone mineral density.", "pl": "Zmniejszona gęstość kości (ryzyko osteoporozy): przewlekłe stosowanie wysokich dawek (>50 μg/dobę, >1 rok) przyspiesza obrót kostny i obniża gęstość mineralną kości." },
    { "hu": "SHBG-emelkedés és csökkent szabad tesztoszteron: a T3 emeli a nemihormon-kötő globulint, ami AAS-stack mellett csökkenti a szabad tesztoszteron arányát.", "en": "Increased SHBG and lower free testosterone: T3 raises sex-hormone-binding globulin, reducing the free testosterone fraction even alongside an AAS stack.", "pl": "Wzrost SHBG i niższy wolny testosteron: T3 podnosi globulinę wiążącą hormony płciowe, obniżając frakcję wolnego testosteronu nawet przy stosowaniu AAS." },
    { "hu": "Glükóz-anyagcsere zavar és hipoglikémia-kockázat: a T3 fokozza a glükóz-anyagcserét, ezért inzulinnal vagy orális antidiabetikummal együtt hipoglikémia léphet fel, főleg a titrálás alatt.", "en": "Disturbed glucose metabolism and hypoglycemia risk: T3 increases glucose turnover, so combined with insulin or oral antidiabetics hypoglycemia can occur, especially during dose titration.", "pl": "Zaburzenie metabolizmu glukozy i ryzyko hipoglikemii: T3 zwiększa obrót glukozy, więc w połączeniu z insuliną lub doustnymi lekami przeciwcukrzycowymi może wystąpić hipoglikemia, zwłaszcza podczas miareczkowania dawki." }
  ],
  "contraindications": [
    { "hu": "Meglévő szívritmuszavar (pitvarfibrilláció, kamrai tachycardia): abszolút kontraindikáció, mert a T3 fokozza a szívfrekvenciát és életveszélyes aritmiát provokálhat.", "en": "Pre-existing cardiac arrhythmia (atrial fibrillation, ventricular tachycardia): absolute contraindication, as T3 raises heart rate and can provoke life-threatening arrhythmia.", "pl": "Istniejące zaburzenia rytmu serca (migotanie przedsionków, częstoskurcz komorowy): bezwzględne przeciwwskazanie, ponieważ T3 podnosi częstość rytmu serca i może wywołać groźne dla życia arytmie." },
    { "hu": "Kezeletlen mellékvese-elégtelenség: a tireoid-hormon emeli a metabolikus kortizol-igényt, és adrenalis krízist válthat ki kortizol-pótlás nélkül.", "en": "Untreated adrenal insufficiency: thyroid hormone raises the metabolic demand for cortisol and can precipitate an adrenal crisis without cortisol replacement.", "pl": "Nieleczona niewydolność nadnerczy: hormon tarczycy zwiększa metaboliczne zapotrzebowanie na kortyzol i może wywołać przełom nadnerczowy bez suplementacji kortyzolu." },
    { "hu": "Koszorúér-betegség, súlyos angina vagy nemrégi szívinfarktus: relatív/abszolút kontraindikáció a megnövekedett myocardiális oxigénigény és ischaemia-veszély miatt.", "en": "Coronary artery disease, severe angina or recent myocardial infarction: relative/absolute contraindication due to increased myocardial oxygen demand and ischemia risk.", "pl": "Choroba wieńcowa, ciężka dławica piersiowa lub niedawny zawał serca: względne/bezwzględne przeciwwskazanie z powodu zwiększonego zapotrzebowania mięśnia sercowego na tlen i ryzyka niedokrwienia." },
    { "hu": "Hashimoto-féle autoimmun pajzsmirigygyulladás: off-label fogyókúrás használatban kontraindikált, mert az anti-TPO és anti-Tg titer emelkedhet és az autoimmun fellángolás kockázata magas.", "en": "Hashimoto autoimmune thyroiditis: contraindicated for off-label cutting use, as anti-TPO and anti-Tg titers can rise and the risk of autoimmune flare is high.", "pl": "Autoimmunologiczne zapalenie tarczycy Hashimoto: przeciwwskazane przy stosowaniu off-label na redukcję, ponieważ miana anti-TPO i anti-Tg mogą wzrosnąć, a ryzyko zaostrzenia autoimmunologicznego jest wysokie." },
    { "hu": "Pheochromocytoma: abszolút kontraindikáció, mert a fokozott adrenerg tónus hypertenzív krízist provokálhat.", "en": "Pheochromocytoma: absolute contraindication, as the heightened adrenergic tone can provoke a hypertensive crisis.", "pl": "Guz chromochłonny (pheochromocytoma): bezwzględne przeciwwskazanie, ponieważ wzmożone napięcie adrenergiczne może wywołać przełom nadciśnieniowy." },
    { "hu": "Terhesség és szoptatás off-label fogyókúrás céllal: tilos, mert a thyreotoxikus állapot árt a magzatnak; csak igazolt hypothyreosis kezelésére, endokrinológus felügyelete mellett jogos.", "en": "Pregnancy and breastfeeding for off-label weight-loss purposes: prohibited, as a thyrotoxic state harms the fetus; only legitimate for diagnosed hypothyroidism under endocrinologist supervision.", "pl": "Ciąża i karmienie piersią w celach odchudzających off-label: zabronione, ponieważ stan tyreotoksyczny szkodzi płodowi; uzasadnione wyłącznie w leczeniu rozpoznanej niedoczynności tarczycy pod nadzorem endokrynologa." },
    { "hu": "Diabetes mellitus 1-es típus: relatív kontraindikáció, mert a T3 és inzulin együttese felborítja a glükóz-kontrollt és hipoglikémiát okozhat.", "en": "Type 1 diabetes mellitus: relative contraindication, as combining T3 with insulin disrupts glucose control and can cause hypoglycemia.", "pl": "Cukrzyca typu 1: względne przeciwwskazanie, ponieważ połączenie T3 z insuliną zaburza kontrolę glikemii i może powodować hipoglikemię." }
  ],
  "name": "Liothyronine (T3, Cytomel)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Synthetic T3 (3,5,3'-triiodothyronine), Pfizer 1956 FDA-approved hypothyroidism Rx (Cytomel). Cutting-cycle off-label thermogenic +10-30% REE via direct mitochondrial β-oxidation + Na/K-ATPase upregulation; WADA in-competition banned for non-Rx athletes.",
  "description": "Liothyronine (Cytomel) is the synthetic form of endogenous T3 (3,5,3'-triiodothyronine), the pharmacologically active form of thyroid hormone. With FDA approval since 1956 by Pfizer, it is primarily indicated for hypothyroidism where T4 monotherapy fails to produce full remission of cognitive symptoms (Bunevicius 1999 NEJM PMID 9989958 is the classic T3 add-on trial). 70 years of clinical literature plus documented bodybuilding off-label use since the 1980s (Hochberg 1989). T3 acts as a nuclear TR-α and TR-β receptor agonist, triggering direct gene-transcription activation that raises tissue metabolic rate by 10-30% through the nuclear-receptor cascade. The direct mechanism includes mitochondrial β-oxidation upregulation plus Na/K-ATPase density elevation in skeletal muscle, raising resting energy expenditure (REE). In AAS cutting context the T3 cycle (25-75 μg/day, 12.5 μg titration step) is used to balance muscle retention with fat-burning; however, hypothyroid shutdown risk is high (endogenous TSH suppression is dose-dependent, with >100 μg/day for 12+ weeks chronic carrying potential secondary hypothyroidism risk). The WADA list places T3 under S4.5 thyroid hormone modulator, in-competition banned for non-Rx athletes (NADA Switzerland 2023, USADA 2024 update). T4 vs T3: T4 has slower on/off plus a 7-day half-life enabling slow titration; T3 has a 24-hour half-life and fast action but sudden endogenous TSH suppression.",
  "keyInfo": [
    {
      "label": "Mechanism of action",
      "value": "Nuclear TR-α + TR-β receptor agonist, gene-transcription activation, +10-30% REE"
    },
    {
      "label": "Dosing",
      "value": "Clinical 25-50 μg/day; off-label cutting-cycle 25-75 μg/day, titration 12.5 μg/step"
    },
    {
      "label": "Half-life",
      "value": "~24 hours (steady-state within 7 days)"
    },
    {
      "label": "Onset",
      "value": "Metabolic-rate increase 24-48 hours, fat-loss effect 1-2 weeks"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (hypothyroidism), registered in HU + PL. WADA: S4.5 in-competition banned for non-Rx athletes."
    }
  ],
  "mechanism": "Liothyronine is the synthetic form of endogenous T3, the pharmacologically active form of thyroid hormone. T4 (Levothyroxine) is largely a prohormone – hepatic and renal 5'-deiodinase enzymes (D1/D2) convert it into active T3 (~80% peripheral T4 → T3 conversion). Exogenous T3 bypasses this conversion step and delivers faster on/off kinetics (24-hour t1/2 vs T4's 7 days). T3 is a ligand for the nuclear thyroid receptor (TR-α in skeletal and cardiac muscle, TR-β in liver and hypothalamus): on binding, the receptor heterodimerizes with the retinoid-X-receptor (RXR) and acts as a transcription factor driving direct gene-expression activation. Key downstream targets: the UCP1 and UCP3 mitochondrial uncoupling-protein genes, β-oxidation key enzymes (CPT-1, ACOX) and the Na/K-ATPase α-subunit gene. The REE elevation in skeletal muscle is partly due to Na/K-ATPase density increase (~30% of basal REE allocation). A central mechanism is the hypothalamic-pituitary-thyroid (HPT) negative feedback: exogenous T3 produces dose-dependent suppression of endogenous TSH secretion, leading to secondary hypothyroidism induction if cycle length exceeds the recovery window (about 4-6 weeks of cycle followed by 4-8 weeks of recovery; >100 μg/day for 12+ weeks may cause potentially permanent shutdown).",
  "legalStatus": "USA: FDA-approved 1956 (Cytomel, Pfizer – then Lederle/Wyeth) for hypothyroidism; Schedule N/A. EU: EMA-approved. HU: registered (Cytomel Rx). PL: registered (Cytomel Rx). WADA: S4.5 thyroid hormone modulator, in-competition banned (NADA Switzerland 2023 explicit listing, USADA 2024 update). TUE process possible for out-of-competition use with pre-existing hypothyroidism diagnosis.",
  "onsetTime": "Metabolic-rate increase 24-48 hours; fat-loss effect 1-2 weeks; steady-state 7 days",
  "halfLife": "~24 hours",
  "interactionsWith": [
    "levothyroxine",
    "clenbuterol",
    "mirabegron",
    "warfarin"
  ],
  "aromatization": "Does not aromatize – thyroid hormone, NOT a steroid; no CYP19 interaction. The estrogen axis is directly unaffected, but indirect SHBG elevation has been documented on T3 (Klein 2001 PMID 11257082), causing a drop in free testosterone.",
  "hepatotoxicity": "Low – thyroid overdose produces a hyperthyroid syndrome (cardiac arrhythmia, hyperthermia, extreme weight loss), NOT direct hepatic toxicity. ALT elevation is rare and only documented in clinical literature with iatrogenic overdose.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS, thyroid hormone)",
  "bindingAffinity": "TR-α + TR-β nuclear receptor Ki ~50-100 pM (high affinity, ~10x stronger than T4).",
  "detectionWindow": "WADA-accredited LC-MS/MS urine detection 1-2 weeks at chronic dose (T3 + endogenous TSH-suppression pattern). Steady-state within 7 days.",
  "benefits": [
    "Direct mitochondrial β-oxidation upregulation + Na/K-ATPase density increase in skeletal muscle",
    "Resting energy expenditure (REE) increase of 10-30% dose-dependent",
    "Cutting-cycle muscle retention + fat-burning balance combined with AAS",
    "70-year evidence base in clinical hypothyroidism Rx",
    "Fast on/off kinetics (24-hour t1/2) → easier titration than T4",
    "Bunevicius 1999 NEJM cognitive-symptom relief on T4 monotherapy with T3 add-on (controversial replication Stott 2017)"
  ],
  "quickStart": [
    "Cycle start 12.5 μg AM, titrate to 25 μg after 7 days",
    "Titration step 12.5 μg/week, max 75 μg/day for off-label cutting cycles",
    "Cycle length 4-6 weeks MAX, followed by 2-4 weeks of gradual taper (NOT abrupt discontinuation)",
    "Beta-blocker (propranolol) co-administration to manage tachycardia and tremor",
    "Pre-cycle: TSH + free-T3 + free-T4 + ECG baseline",
    "Mid-cycle bloodwork: 4-week check TSH + free-T3 + free-T4 + reverse-T3 + lipid panel",
    "Anti-TPO + Tg-AB pre-cycle screen (Hashimoto autoimmune contraindication)"
  ],
  "expectations": [
    {
      "label": "Week 1",
      "body": "Initial dose 12.5-25 μg AM. Mild tremor, slightly elevated heart rate (+5-10 bpm), mild heat-intolerance noticeable. Endogenous TSH suppression begins (measurable after 4-7 days)."
    },
    {
      "label": "Weeks 2-3",
      "body": "Titration to 50 μg. Subjective fat-loss pace +0.5-0.8 kg/week (with caloric deficit + AAS stack). REE increase measurable. Without caloric deficit + resistance training the muscle-loss share is ~10-15% (Sjöblom 2008 analog context, PMID 18091025)."
    },
    {
      "label": "Weeks 4-6 + taper",
      "body": "Cycle-end gradual taper is mandatory: 75 → 50 → 25 → 12.5 μg over 2-4 weeks. Abrupt discontinuation carries rebound-hypothyroidism + REE crash risk. Endogenous TSH recovery within 4-8 weeks off-cycle (longer after >100 μg chronic)."
    }
  ],
  "quality": {
    "pure": [
      "FDA-approved Cytomel tablet (Pfizer) or generic Liothyronine (US) – pharmacy-sourced ensures actual active ingredient",
      "EU brand-only Cytomel (Pfizer) Rx, generics limited",
      "UGL Liothyronine vial-substance compounding documented at ±30% dose variance"
    ],
    "caution": [
      "Hyperthyroid syndrome on overdose: tachycardia, hyperthermia, anxiety, insomnia, extreme weight loss – discontinuation recommended",
      "Beta-blocker (propranolol) co-administration to relieve tachycardia and tremor",
      "Cardiovascular monitoring: resting HR + BP weekly, ECG baseline + 4-week check",
      "Bone-density loss with long-term chronic dose documented (>50 μg/day >1 year, osteoporosis risk)",
      "Anxiety + irritability are dose-dependent subjective side effects",
      "Iatrogenic secondary hypothyroidism risk off-cycle after >100 μg/day chronic for 12+ weeks"
    ],
    "avoid": [
      "Hashimoto autoimmune hypothyroidism – CONTRAINDICATED (anti-TPO + Tg-AB titre escalation clinical evidence)",
      "Pre-existing cardiac arrhythmia (atrial fibrillation, ventricular tachycardia) – absolute contraindication",
      "Cardiovascular disease (CAD, severe angina) – relative contraindication",
      "Diabetes mellitus type 1 – relative contraindication (T3 + insulin stack disrupts glucose management)",
      "Pheochromocytoma – absolute contraindication",
      "Pregnancy (FDA category A – Rx hypothyroidism legitimate in pregnancy, off-label cutting cycle is NOT)"
    ]
  },
  "interactions": [
    "Levothyroxine (T4) – stack-style cutting protocol, dose-adjust each separately",
    "Warfarin – T3 enhances anticoagulant effect, INR monitoring required",
    "Insulin + oral hypoglycemics – T3 raises glucose metabolism, hypoglycemia risk during titration",
    "Beta-blocker (propranolol + atenolol) – relieves tachycardia and tremor, may mask T3-toxicity signals",
    "Clenbuterol + Mirabegron + ephedrine – additive cardio stress, high HR + BP elevation",
    "Calcium + iron oral supplements – reduce T3 absorption (4-hour separation recommended)"
  ],
  "studies": [
    {
      "title": "Thyroxine vs thyroxine plus triiodothyronine in treatment of hypothyroidism after thyroidectomy for Graves' disease.",
      "authors": "Bunevicius R, Jakuboniene N, Jurkevicius R, Bunevicius A, Lasas L, Prange AJ Jr",
      "journal": "Endocrine",
      "pmid": "12374459"
    },
    {
      "title": "Discontinuation of levothyroxine therapy in patients with subclinical hypothyroidism: a pilot randomized clinical trial.",
      "authors": "Maraka S, Owen RR, Singh Ospina NM",
      "journal": "Endocrine",
      "pmid": "40736623"
    },
    {
      "title": "Thyroid Hormones and Cardiovascular Function and Diseases.",
      "authors": "Razvi S, Jabbar A, Pingitore A, Danzi S, Biondi B, Klein I, Peeters R, Zaman A, Iervasi G",
      "journal": "J Am Coll Cardiol",
      "pmid": "29673469"
    },
    {
      "title": "Acute Effects of Liothyronine Administration on Cardiovascular System and Energy Metabolism in Healthy Volunteers.",
      "authors": "Chen S, Wohlford GF, Vecchie' A",
      "journal": "Front Endocrinol (Lausanne)",
      "pmid": "35295986"
    },
    {
      "title": "Factitious thyrotoxicosis and thyroid hormone misuse or abuse.",
      "authors": "Persani L, dell'Acqua M, Ioakim S, Bonomi M",
      "journal": "Ann Endocrinol (Paris)",
      "pmid": "36963754"
    }
  ],
  "faq": [
    {
      "q": "T3 vs T4 cutting cycle – which is safer?",
      "a": "T4 has slower on/off kinetics (~7-day t1/2), so the steady-state change takes 4-6 weeks, dose titration is more robust and iatrogenic hyperthyroid risk is lower. T3 is fast-acting (~24-hour t1/2) but causes sudden endogenous TSH suppression, resulting in a higher iatrogenic secondary-hypothyroidism risk off-cycle. In cutting-cycle protocols T3 traditionally dominates (faster metabolic-rate increase), but slower T4 titration is safer for long-term use. A 4-6 week T3 cycle at 75 μg/day is typical for pure cutting, but pre-cycle TSH + free-T3 + free-T4 baseline is mandatory."
    },
    {
      "q": "Is endogenous TSH suppression reversible?",
      "a": "Yes, dose-dependently. A <50 μg/day cycle of 4-6 weeks typically recovers in 4-8 weeks (TSH normalizes to the 0.5-2.5 mIU/L range). A >100 μg/day cycle for 12+ weeks carries a potentially permanent secondary hypothyroidism risk (endogenous thyroid axis chronic-suppression-induced atrophy). Gradual taper is mandatory at cycle end (75 → 50 → 25 → 12.5 μg over 2-4 weeks); abrupt discontinuation carries rebound-hypothyroidism + REE-crash risk."
    },
    {
      "q": "How much muscle loss in a caloric deficit on T3 + AAS cycle?",
      "a": "With AAS stack + adequate protein intake (2.0-2.5 g/kg/day) + resistance training, ~5-10% lean-mass loss is documented in a 6-week cycle (analog context). Without AAS, T3 alone in a caloric deficit can cause ~10-20% lean-mass loss because T3 exerts independent protein-catabolic action at higher doses. Sjöblom 2008 PMID 18091025 documented the muscle-loss share at RCT level in an analog context on hypothyroidism Rx. Direct T3-specific evidence in cutting cycles does not exist (research ethics does not allow it)."
    },
    {
      "q": "Can a Hashimoto autoimmune hypothyroidism patient use T3?",
      "a": "In a clinical-Rx context with Hashimoto + hypothyroidism Rx, T4 (Levothyroxine) is first-line; T3 add-on is reserved for cognitive-symptom relief consideration per Bunevicius 1999 NEJM. In off-label cutting context, Hashimoto is CONTRAINDICATED – clinical evidence of anti-TPO + Tg-AB titre escalation (Saglam 2013 PMID 23612648) makes autoimmune-flare risk high. Pre-cycle anti-TPO + anti-Tg screening is mandatory before off-label cutting cycle."
    },
    {
      "q": "WADA in-competition vs out-of-competition?",
      "a": "T3 (Liothyronine) S4.5 thyroid hormone modulator, in-competition banned (NADA Switzerland 2023 explicit, USADA 2024 update). Out-of-competition use is possible via legitimate TUE process with a pre-existing hypothyroidism diagnosis. Test eligibility: WADA-accredited lab LC-MS/MS chronic-dose (1-2 weeks) detection window, endogenous TSH-suppression pattern as indirect marker. T4 (Levothyroxine) falls under the S0 'allowed BUT TUE-required' category in legitimate hypothyroidism Rx."
    }
  ],
  "related": [
    "levothyroxine",
    "clenbuterol",
    "mirabegron"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 75
    },
    "unit": "μg/day",
    "note": "Clinical hypothyroidism Rx 25-50 μg/day (low titration). Off-label cutting cycle 25-75 μg/day PO AM, titration 12.5 μg/week step. Cycle length 4-6 weeks MAX, gradual taper mandatory (75 → 50 → 25 → 12.5 μg over 2-4 weeks). Pre-cycle TSH + free-T3 + free-T4 + ECG baseline; mid-cycle 4-week check + post-cycle 4-week + 8-week recovery confirm."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "TSH, free-T3, free-T4, reverse-T3, anti-TPO + Tg-AB (Hashimoto screen), 12-lead ECG, BP + resting HR, lipid panel (TC/LDL/HDL/TG)",
      "purpose": "Screen for pre-existing hypothyroidism / Hashimoto contraindication, cardiovascular baseline, thyroid-axis function baseline"
    },
    "midCycle": {
      "label": "During cycle",
      "timing": "2 + 4 weeks after cycle start",
      "markers": "TSH (often <0.1 mIU/L suppression marker), free-T3, free-T4 (drops with convert-back suppression), reverse-T3, lipid panel, BP + HR home-tracking weekly",
      "purpose": "TSH-suppression extent serves as dose-titration signal; lipid panel as cardiovascular signal (T3 lowers LDL but high HR is cardiotoxic)"
    },
    "postCycle": {
      "label": "After cycle",
      "timing": "2 + 4 + 8 weeks after cycle end",
      "markers": "TSH (return to 0.5-2.5 mIU/L range), free-T3, free-T4, reverse-T3, anti-TPO follow-up (autoimmune-flare detection), BP + HR home-tracking",
      "purpose": "Verify endogenous thyroid-axis recovery. After >100 μg/day chronic 12+ weeks, off-cycle there is a potentially permanent secondary hypothyroidism risk – endocrinologist follow-up required if TSH >5 mIU/L after 8 weeks"
    },
    "cruise": {
      "label": "Long-term (clinical hypothyroidism Rx)",
      "timing": "Annually / semi-annually with clinical indication",
      "markers": "TSH (Rx target 0.5-2.5 mIU/L), free-T3, free-T4, annual DEXA bone-density scan (osteoporosis risk on long-term high dose), ECG rhythm monitoring",
      "purpose": "Long-term clinical hypothyroidism Rx monitoring, NOT cutting-cycle off-label context"
    }
  }
}
