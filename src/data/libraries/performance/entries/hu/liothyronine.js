// Liothyronine (T3, Cytomel) – Pfizer 1956 FDA-jóváhagyott szintetikus
// 3,5,3'-triiodothyronine, hypothyroidism Rx. Cutting-cycle off-label use
// 1980s óta. Sources: FDA Cytomel SmPC, Bunevicius 1999 PMID 9989958,
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
  "shortDesc": "Szintetikus T3 (3,5,3'-triiodothyronine), Pfizer 1956 FDA-jóváhagyott hypothyroidism Rx (Cytomel). Cutting-cycle off-label thermogenic +10-30% REE direkt mitokondriális β-oxidáció + Na/K-ATPase-upregulation; WADA in-competition banned non-Rx athletán.",
  "description": "A Liothyronine (Cytomel) az endogén T3 (3,5,3'-triiodothyronine), a tireoid-hormon farmakológiai-aktív formájának szintetikus változata. Pfizer 1956 FDA-jóváhagyással elsősorban hypothyroidism kezelésére indikált, ahol a T4-monotherapy nem ad cognitive-szimptómás teljes remissiót (Bunevicius 1999 NEJM PMID 9989958 a klasszikus T3-add-on trial). 70-éves klinikai irodalom + bodybuilding off-label use 1980s óta dokumentált (Hochberg 1989). A T3 nukleáris TR-α + TR-β receptor agonistaként direkt gén-transzkripciós aktivációt indít, ami szöveti metabolic rate emelést eredményez 10-30%-kal a nuclear-receptor-szintű kaszkádon keresztül. A direkt mechanizmus része a mitokondriális β-oxidáció upregulation + Na/K-ATPase-density emelés a vázizomszövetben, ami resting energy expenditure (REE) növekedéshez vezet. AAS-cutting kontextusban T3-cycle 25-75 μg/nap (12.5 μg titration-step) protokoll-on használják az izom-megtartás + fat-burning egyensúlyához; viszont hypothyroid-shutdown-risk magas (endogén TSH suppression dose-függő, >100 μg/nap chronic 12+ hét potenciális secondary hypothyroidism risk). WADA listán S4.5 thyroid hormone modulator non-Rx athletán in-competition banned (NADA Switzerland 2023, USADA 2024 update). T4 vs T3: T4 lassabb on/off + 7-nap t1/2 lassú titration; T3 24-óra t1/2 gyors-akció, de hirtelen-suppression endogén TSH-ra.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Nukleáris TR-α + TR-β receptor agonist, gén-transzkripciós aktiváció, +10-30% REE"
    },
    {
      "label": "Adagolás",
      "value": "Klinikai 25-50 μg/nap; off-label cutting-cycle 25-75 μg/nap titration 12.5 μg/step"
    },
    {
      "label": "Felezési idő",
      "value": "~24 óra (steady-state 7 napon belül)"
    },
    {
      "label": "Hatáskezdet",
      "value": "Metabolic-rate emelés 24-48 óra, fat-loss-effekt 1-2 hét"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (hypothyroidism), HU + PL törzskönyvezett. WADA: S4.5 in-competition banned non-Rx athletán."
    }
  ],
  "mechanism": "A Liothyronine az endogén T3 szintetikus változata, amely a tireoid-hormon farmakológiailag aktív formája. A T4 (Levothyroxine) jelentős részben prohormon – a hepatikus + renalis 5'-deiodinase (D1/D2) enzimek konvertálják aktív T3-má (~80% T4 → T3 perifériás konverzió). Az exogén T3 megkerüli ezt a konverziós lépést, így gyorsabb on/off-kinetikát biztosít (24 óra t1/2 vs T4 7 nap). A T3 nukleáris tireoid-receptor (TR-α a vázizomban + szívizomban, TR-β a májban + hypothalamusban) ligand: kötődéskor a receptor heterodimerizálódik a retinoid-X-receptor-rel (RXR), és transzkripciós faktorként direkt génexpressziós aktivációt indít. Fő downstream-célok: UCP1 + UCP3 mitokondriális uncoupling-protein-gén, β-oxidáció kulcs-enzimek (CPT-1, ACOX), Na/K-ATPase α-alegység-gén. A vázizomszövet REE-emelkedése részben Na/K-ATPase-density-emelkedéséből származik (~30% basal REE allocation). Központi mechanizmus a hypothalamic-pituitary-thyroid (HPT) negatív feedback: az exogén T3 dose-dependent suppression-t okoz az endogén TSH-szekrécióra, ami secondary hypothyroidism-induction-t jelent, ha a cycle hosszabb mint a recovery-window engedi (kb. 4-6 hét cycle után 4-8 hét recovery; >100 μg/nap 12+ hét cycle után potenciálisan permanent shutdown).",
  "legalStatus": "USA: FDA-jóváhagyott 1956 (Cytomel, Pfizer – akkor Lederle/Wyeth) hypothyroidism kezelésére; Schedule N/A. EU: EMA-jóváhagyott. HU: törzskönyvezett (Cytomel Rx). PL: törzskönyvezett (Cytomel Rx). WADA: S4.5 thyroid hormone modulator, in-competition banned (NADA Switzerland 2023 explicit listing, USADA 2024 update). TUE-process pre-existing hypothyroidism diagnózissal lehetséges out-of-competition use-ra.",
  "onsetTime": "Metabolic-rate emelés 24-48 óra; fat-loss-effekt 1-2 hét; steady-state 7 nap",
  "halfLife": "~24 óra",
  "interactionsWith": [
    "levothyroxine",
    "clenbuterol",
    "mirabegron",
    "warfarin"
  ],
  "aromatization": "Nem aromatizál – tireoid-hormon, NEM szteroid; nincs CYP19 interakció. Az ösztrogén-axis közvetlenül érintetlen, viszont indirect SHBG-emelkedés dokumentált T3-on (Klein 2001 PMID 11257082), ami free-Test-csökkenést okoz.",
  "hepatotoxicity": "Alacsony – tireoid-overdose hyperthyroid-szindrómát okoz (cardiac arrhythmia, hyperthermia, weight-loss extrém), NEM közvetlen hepatikus toxikus. ALT-emelkedés ritka, csak iatrogén-overdose esetén dokumentált klinikai literátúrában.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS, tireoid-hormon)",
  "bindingAffinity": "TR-α + TR-β nukleáris receptor Ki ~50-100 pM (high-affinity, T4-nél ~10x erősebb).",
  "detectionWindow": "WADA-akkreditált LC-MS/MS vizeletminta-detektálás 1-2 hét chronic dose esetén (T3 + endogén TSH-suppression-pattern). Steady-state 7 napon belül.",
  "benefits": [
    "Direkt mitokondriális β-oxidáció upregulation + Na/K-ATPase-density emelés vázizomszövetben",
    "Resting energy expenditure (REE) emelés 10-30% dose-dependent",
    "Cutting-cycle izom-megtartás + fat-burning egyensúly kombinálva AAS-szel",
    "Klinikai hypothyroidism Rx 70-éves evidence-base",
    "Gyors on/off-kinetika (24 óra t1/2) → könnyebb titration mint T4",
    "Bunevicius 1999 NEJM cognitive-szimptóma-relief T4-monotherapy mellett T3-add-on (kontroverziális replikáció Stott 2017)"
  ],
  "quickStart": [
    "Cycle-start 12.5 μg AM, 7 nap után titrálás 25 μg-ra",
    "Titration-step 12.5 μg/hét, max 75 μg/nap off-label cutting-cycle",
    "Cycle-length 4-6 hét MAX, majd 2-4 hét gradual taper (NEM hirtelen leállítás)",
    "Beta-blocker (propranolol) co-administration tachycardia + tremor enyhítésére",
    "Pre-cycle: TSH + free-T3 + free-T4 + EKG baseline",
    "Bloodwork mid-cycle: 4-week-check TSH + free-T3 + free-T4 + reverse-T3 + lipid panel",
    "Anti-TPO + Tg-AB pre-cycle szűrés (Hashimoto autoimmun kontraindikáció)"
  ],
  "expectations": [
    {
      "label": "1. hét",
      "body": "Initial dose 12.5-25 μg AM. Mild tremor, enyhén emelkedett szívritmus (+5-10 bpm), enyhe hőtűrőképesség-csökkenés érzékelhető. Endogén TSH suppression kezdődik (4-7 nap múlva mérhető)."
    },
    {
      "label": "2-3. hét",
      "body": "Titration 50 μg-ra. Subjektív fat-loss tempó +0.5-0.8 kg/hét (kalória-deficit + AAS-stack mellett). REE-emelkedés mérhető. Izom-loss-arány kalória-deficit + resistance-training nélkül ~10-15% (Sjöblom 2008 analóg-context PMID 18091025)."
    },
    {
      "label": "4-6. hét + taper",
      "body": "Cycle-end gradual taper kötelező: 75 → 50 → 25 → 12.5 μg, 2-4 hét. Hirtelen leállítás rebound-hypothyroidism + REE-zuhanás kockázattal jár. Endogén TSH recovery 4-8 hét cycle-off-on belül (>100 μg chronic-on tovább)."
    }
  ],
  "quality": {
    "pure": [
      "FDA-jóváhagyott Cytomel tabletta (Pfizer) vagy generic Liothyronine (USA) – pharmacy-szourzott biztosítja a hatóanyag-tartalmat",
      "EU brand-only Cytomel (Pfizer) Rx, generic limitált",
      "UGL Liothyronine vial-szubsztáncia compounding-on dose-variance ±30% dokumentált"
    ],
    "caution": [
      "Hyperthyroid-szindróma overdose esetén: tachycardia, hyperthermia, anxietás, insomnia, weight-loss extrém – leállítás javasolt",
      "Beta-blocker (propranolol) co-administration tachycardia + tremor enyhítésére",
      "Cardiovascular monitoring: resting HR + BP weekly, EKG baseline + 4-week-check",
      "Bone-density-loss long-term chronic dose dokumentált (>50 μg/nap >1 év, osteoporosis-risk)",
      "Anxietás + irritability subjektív side-effect dose-dependent",
      "Iatrogén-secondary-hypothyroidism risk cycle-off-on >100 μg/nap chronic 12+ hét"
    ],
    "avoid": [
      "Hashimoto autoimmune hypothyroidism – KONTRAINDIKÁLT (anti-TPO + Tg-AB titre-escalation klinikai-evidence)",
      "Pre-existing cardiac arrhythmia (atrial fibrillation, ventricular tachycardia) – abszolút kontraindikáció",
      "Cardiovascular betegség (CAD, súlyos angina) – relativ kontraindikáció",
      "Diabetes mellitus type 1 – relativ kontraindikáció (T3 + insulin-stack glucose-management-zavar)",
      "Pheochromocytoma – abszolút kontraindikáció",
      "Pregnancy (FDA category A – Rx-Pregnancy hypothyroidism legitim, off-label cutting-cycle NEM)"
    ]
  },
  "interactions": [
    "Levothyroxine (T4) – stack-szerű cutting-protokoll, dose-adjust mindkettőhöz külön",
    "Warfarin – T3 enhances anticoagulant effect, INR-monitoring szükséges",
    "Insulin + oral hypoglykemiás – T3 emeli a glükóz-metabolizmust, hypoglycemia-risk titration alatt",
    "Beta-blocker (propranolol + atenolol) – tachycardia + tremor enyhítő, T3-toxicity-szignál maszkolhat",
    "Clenbuterol + Mirabegron + ephedrine – additív kardio-stressz, magas HR + BP-emelkedés",
    "Calcium + iron oral supplement – T3-abszorpciót csökkentik (4 óra separation javasolt)"
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
      "q": "T3 vs T4 cutting-cycle – melyik biztonságosabb?",
      "a": "A T4 lassabb on/off-kinetikájú (~7 nap t1/2), így a steady-state változás 4-6 hét, dose-titration robusztusabb és iatrogén-hyperthyroid-risk alacsonyabb. A T3 viszont gyors-akciós (~24 óra t1/2), de hirtelen endogén-TSH-suppression-t okoz, ami magasabb iatrogén-secondary-hypothyroidism-risk-et eredményez cycle-off-on. Cutting-cycle protokoll-on tradicionálisan T3 dominál (gyorsabb metabolic-rate emelés), de T4 lassabb-titration biztonságosabb hosszú-távú használatra. Pure-cutting-cycle 4-6 hét T3 75 μg/nap szokványos, de pre-cycle TSH + free-T3 + free-T4 baseline kötelező."
    },
    {
      "q": "Endogén TSH suppression visszafordítható?",
      "a": "Igen, dose-dependent. <50 μg/nap 4-6 hét cycle tipikusan 4-8 hét recovery (TSH normalizálódik 0.5-2.5 mIU/L tartományba). >100 μg/nap 12+ hét cycle potenciálisan permanent secondary hypothyroidism-risk (endogén tireoid-axis chronic-suppression-induced atrophy). Gradual taper kötelező cycle-end-en (75 → 50 → 25 → 12.5 μg, 2-4 hét), hirtelen leállítás rebound-hypothyroidism + REE-zuhanás kockázattal jár."
    },
    {
      "q": "Izom-loss mennyi kalória-deficitben T3 + AAS-cycle-on?",
      "a": "AAS-stack + adequate protein-intake (2.0-2.5 g/kg/nap) + resistance-training mellett ~5-10% lean-mass-loss documentált 6-hét cycle-on (analóg-context). AAS-stack nélkül kalória-deficitben T3 önállóan ~10-20% lean-mass-loss-t okozhat, mert a T3 önállóan protein-catabolic action-t fejt ki magasabb dózison. Sjöblom 2008 PMID 18091025 analóg-context az izom-loss-arányt RCT-szinten dokumentálta hypothyroidism-Rx-on. Cutting-cycle direkt T3-szpec evidence nincs (research-ethics nem engedi)."
    },
    {
      "q": "Hashimoto autoimmune hypothyroidism beteg használhat T3?",
      "a": "Klinikai-Rx kontextusban Hashimoto + hypothyroidism-Rx-on T4 (Levothyroxine) az első-vonalbeli, T3 add-on csak Bunevicius 1999 NEJM cognitive-szimptóma-relief megfontolásból. Cutting-cycle off-label kontextusban Hashimoto KONTRAINDIKÁLT – az anti-TPO + Tg-AB titre-escalation klinikai-evidence (Saglam 2013 PMID 23612648) miatt az autoimmune-flare risk magas. Pre-cycle anti-TPO + anti-Tg screening kötelező off-label cutting-cycle előtt."
    },
    {
      "q": "WADA in-competition vs out-of-competition?",
      "a": "T3 (Liothyronine) S4.5 thyroid hormone modulator, in-competition banned (NADA Switzerland 2023 explicit, USADA 2024 update). Out-of-competition pre-existing hypothyroidism diagnózissal legitim TUE-process lehetséges. Test-eligibility: WADA-akkreditált labor LC-MS/MS chronic-dose (1-2 hét) detection-window, endogén-TSH-suppression-pattern indirect-marker. T4 (Levothyroxine) S0 'allowed BUT TUE-required' kategória legitim hypothyroidism-Rx-on."
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
    "unit": "μg/nap",
    "note": "Klinikai hypothyroidism-Rx 25-50 μg/nap (low-titration). Off-label cutting-cycle 25-75 μg/nap PO AM, titration 12.5 μg/hét step. Cycle-length 4-6 hét MAX, gradual taper kötelező (75 → 50 → 25 → 12.5 μg, 2-4 hét). Pre-cycle TSH + free-T3 + free-T4 + EKG baseline; mid-cycle 4-week-check + post-cycle 4-week + 8-week recovery-confirm."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "Cycle-start előtt 1-2 hét",
      "markers": "TSH, free-T3, free-T4, reverse-T3, anti-TPO + Tg-AB (Hashimoto-screen), 12-lead EKG, BP + resting HR, lipid panel (TC/LDL/HDL/TG)",
      "purpose": "Pre-existing hypothyroidism / Hashimoto kontraindikáció-screen, cardiovascular baseline, tireoid-axis funkció baseline"
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Cycle-start után 2 + 4 hét",
      "markers": "TSH (gyakran <0.1 mIU/L suppression-marker), free-T3, free-T4 (csökken konvert-back-suppression), reverse-T3, lipid panel, BP + HR weekly home-tracking",
      "purpose": "TSH-suppression-mérték dose-titration-szignál; lipid panel cardiovascular-szignál (T3 csökkenti az LDL-t, de magas HR cardiotoxic)"
    },
    "postCycle": {
      "label": "Ciklus után",
      "timing": "Cycle-end után 2 + 4 + 8 hét",
      "markers": "TSH (visszatérés 0.5-2.5 mIU/L tartomány), free-T3, free-T4, reverse-T3, anti-TPO follow-up (autoimmun-flare-detect), BP + HR home-tracking",
      "purpose": "Endogén tireoid-axis recovery verifikálása. >100 μg/nap chronic 12+ hét utáni cycle-off-on potenciális permanent secondary hypothyroidism – endokrinológus follow-up szükséges ha TSH >5 mIU/L 8 hét után"
    },
    "cruise": {
      "label": "Long-term (klinikai hypothyroidism Rx)",
      "timing": "Klinikai indikáció esetén évente / félévente",
      "markers": "TSH (Rx-target 0.5-2.5 mIU/L), free-T3, free-T4, bone-density DEXA-scan évente (osteoporosis-risk long-term high-dose), EKG ritmus-monitoring",
      "purpose": "Klinikai hypothyroidism long-term Rx-monitoring, NEM cutting-cycle off-label context"
    }
  }
}
