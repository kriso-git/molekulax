// Super-Shred (lipotropic blend) – compounded INJECTABLE "lipo shot" fat-burner
// cocktail. Real composition (per owner): L-Carnitine 400 mg + MIC blend 100 mg
// (Methionine + Inositol + Choline) + ATP 50 mg + Albuterol 2 mg + B12
// (cyanocobalamin) 1 mg. Component evidence: Stephens 2007 PMID 17331998,
// Koeth 2013 Nat Med PMID 23563705, Kraemer 2003 PMID 12930169 (L-Carnitine),
// Cazzola 2012 PMID 22611179 (bronchodilators / Albuterol).

export default {
  "id": "super-shred",
  "sideEffects": [
    { "hu": "Tachycardia és szívdobogásérzés: az Albuterol béta-2 agonista hatása megemeli a pulzust és palpitációt okoz, főleg magasabb dózisban vagy más stimulánssal kombinálva.", "en": "Tachycardia and palpitations: the Albuterol beta-2 agonist effect raises heart rate and causes palpitations, especially at higher doses or combined with other stimulants.", "pl": "Tachykardia i kołatanie serca: działanie beta-2-agonistyczne albuterolu zwiększa tętno i wywołuje palpitacje, zwłaszcza przy wyższych dawkach lub w połączeniu z innymi stymulantami." },
    { "hu": "Kéztremor (finom remegés): a béta-2 receptor-stimuláció jellegzetes, dózisfüggő vázizom-tremort okoz, leggyakrabban a kézen.", "en": "Hand tremor (fine shaking): beta-2 receptor stimulation causes a characteristic, dose-dependent skeletal-muscle tremor, most often in the hands.", "pl": "Drżenie rąk (subtelne): stymulacja receptora beta-2 powoduje charakterystyczne, zależne od dawki drżenie mięśni szkieletowych, najczęściej rąk." },
    { "hu": "Hypokalaemia (alacsony vér-kálium): a béta-2 aktiváció a káliumot a sejtekbe shifteli, ami izomgyengeséget és aritmia-kockázatot okozhat, főleg diuretikum mellett.", "en": "Hypokalaemia (low blood potassium): beta-2 activation shifts potassium into cells, which can cause muscle weakness and arrhythmia risk, especially alongside diuretics.", "pl": "Hipokaliemia (niski poziom potasu): aktywacja beta-2 przesuwa potas do komórek, co może powodować osłabienie mięśni i ryzyko arytmii, zwłaszcza przy diuretykach." },
    { "hu": "Nyugtalanság, szorongás, álmatlanság: az Albuterol szimpatomimetikus hatása idegességet, belső feszültséget és alvászavart okozhat.", "en": "Restlessness, anxiety, insomnia: the sympathomimetic effect of Albuterol can cause nervousness, inner tension and disturbed sleep.", "pl": "Niepokój, lęk, bezsenność: sympatykomimetyczne działanie albuterolu może powodować nerwowość, wewnętrzne napięcie i zaburzenia snu." },
    { "hu": "Fejfájás és izomgörcsök: gyakori béta-2 agonista mellékhatás, az izomgörcsöt részben a hypokalaemia is súlyosbíthatja.", "en": "Headache and muscle cramps: a common beta-2 agonist side effect; the cramping can be aggravated in part by hypokalaemia.", "pl": "Ból głowy i skurcze mięśni: częste działanie niepożądane beta-2-agonistów; skurcze mogą być częściowo nasilane przez hipokaliemię." },
    { "hu": "Injekciós helyi reakció és sterilitási kockázat: szürke-piaci/compounded vizes injekciónál a tisztaság és sterilitás nem garantált, így helyi fájdalom, gyulladás, tályog vagy fertőzés léphet fel.", "en": "Injection-site reaction and sterility risk: with grey-market/compounded aqueous injectables purity and sterility are not guaranteed, so local pain, inflammation, abscess or infection can occur.", "pl": "Reakcja w miejscu wstrzyknięcia i ryzyko sterylności: w przypadku szarorynkowych/recepturowych wstrzyknięć wodnych czystość i sterylność nie są gwarantowane, więc może wystąpić miejscowy ból, stan zapalny, ropień lub zakażenie." },
    { "hu": "Dózis-bizonytalanság (compounded keverék): a tényleges Albuterol-tartalom jelentősen eltérhet a feltüntetettől, ami kiszámíthatatlan kardiovaszkuláris terhelést okoz.", "en": "Dose uncertainty (compounded mix): the actual Albuterol content can deviate significantly from the labelled amount, causing unpredictable cardiovascular load.", "pl": "Niepewność dawki (mieszanka recepturowa): rzeczywista zawartość albuterolu może znacznie odbiegać od deklarowanej, powodując nieprzewidywalne obciążenie układu krążenia." },
    { "hu": "L-Carnitine TMAO-emelkedés: krónikus carnitine-bevitelt a bélflóra TMAO-vá alakíthatja, amelyet hosszú távon az ateroszklerózis-kockázattal hoztak összefüggésbe (Koeth 2013).", "en": "L-Carnitine TMAO elevation: chronic carnitine intake can be converted by gut microbiota to TMAO, which has been linked over the long term to atherosclerosis risk (Koeth 2013).", "pl": "Wzrost TMAO przy L-karnitynie: przewlekłe przyjmowanie karnityny może być przekształcane przez mikroflorę jelitową w TMAO, co długoterminowo wiązano z ryzykiem miażdżycy (Koeth 2013)." }
  ],
  "contraindications": [
    { "hu": "Meglévő tachyarrhythmia, pitvarfibrilláció vagy kardiomiopátia: az Albuterol béta-2 hatása súlyosbítja a ritmuszavart, abszolút kontraindikáció.", "en": "Pre-existing tachyarrhythmia, atrial fibrillation or cardiomyopathy: the Albuterol beta-2 effect worsens the arrhythmia, an absolute contraindication.", "pl": "Istniejąca tachyarytmia, migotanie przedsionków lub kardiomiopatia: działanie beta-2 albuterolu nasila zaburzenia rytmu, bezwzględne przeciwwskazanie." },
    { "hu": "Kezeletlen vagy súlyos hipertónia (>140/90 mmHg): a szimpatomimetikus terhelés tovább emeli a vérnyomást.", "en": "Untreated or severe hypertension (>140/90 mmHg): the sympathomimetic load further raises blood pressure.", "pl": "Nieleczone lub ciężkie nadciśnienie (>140/90 mmHg): obciążenie sympatykomimetyczne dodatkowo podnosi ciśnienie krwi." },
    { "hu": "Hyperthyreosis / Graves-betegség: a fokozott adrenerg érzékenység és aritmia-kockázat miatt kontraindikált.", "en": "Hyperthyroidism / Graves disease: contraindicated due to heightened adrenergic sensitivity and arrhythmia risk.", "pl": "Nadczynność tarczycy / choroba Gravesa-Basedowa: przeciwwskazane z powodu zwiększonej wrażliwości adrenergicznej i ryzyka arytmii." },
    { "hu": "Terhesség és szoptatás: a béta-2 agonista átjut és tokolitikus/kardiovaszkuláris hatású, a compounded keverék biztonsága nem igazolt.", "en": "Pregnancy and breastfeeding: the beta-2 agonist crosses over and has tocolytic/cardiovascular effects; the compounded mix has no established safety.", "pl": "Ciąża i karmienie piersią: beta-2-agonista przenika i ma działanie tokolityczne/sercowo-naczyniowe; bezpieczeństwo mieszanki recepturowej nie jest potwierdzone." },
    { "hu": "Béta-blokkoló vagy MAO-gátló egyidejű terápia: béta-blokkoló blokkolja a hatást és vasokonstrikciót okozhat, MAO-gátló mellett hypertensiv krízis és tachycardia kockázata áll fenn.", "en": "Concurrent beta-blocker or MAO-inhibitor therapy: a beta-blocker blocks the effect and may cause vasoconstriction, while with an MAO inhibitor there is a risk of hypertensive crisis and tachycardia.", "pl": "Jednoczesna terapia beta-blokerem lub inhibitorem MAO: beta-bloker blokuje działanie i może powodować skurcz naczyń, a przy inhibitorze MAO istnieje ryzyko przełomu nadciśnieniowego i tachykardii." },
    { "hu": "Kombináció más béta-2 agonistával/stimulánssal (clenbuterol, ECA-stack, koffein): additív kardio-stressz és hypokalaemia, kontraindikált.", "en": "Combination with another beta-2 agonist/stimulant (clenbuterol, ECA stack, caffeine): additive cardiac stress and hypokalaemia, contraindicated.", "pl": "Połączenie z innym beta-2-agonistą/stymulantem (klenbuterol, stos ECA, kofeina): addytywny stres sercowy i hipokaliemia, przeciwwskazane." },
    { "hu": "WADA-tesztelt versenyzők: az Albuterol injekciós/orális béta-2 agonista forma verseny-kontextusban tiltott (csak inhalációs <1600 µg/24h engedett).", "en": "WADA-tested athletes: injectable/oral Albuterol beta-2 agonist use is prohibited in competition (only inhaled <1600 ug/24h is permitted).", "pl": "Sportowcy testowani przez WADA: wstrzykiwana/doustna forma albuterolu (beta-2-agonisty) jest zakazana w kontekście zawodów (dozwolona tylko wziewna <1600 ug/24h)." }
  ],
  "name": "Super-Shred (lipotropic blend)",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "composition": [
    {
      "id": "l-carnitine",
      "role": "Long-chain fatty-acid shuttle (CPT-I) – moves fat into the mitochondria for beta-oxidation; injectable form bypasses poor oral absorption",
      "typicalDose": "400 mg"
    },
    {
      "name": "MIC Blend (Methionine, Inositol, Choline)",
      "role": "Lipotropic trio (Methionine + Inositol + Choline) – supports hepatic lipid metabolism and fat export; choline + methionine are methyl donors",
      "typicalDose": "100 mg"
    },
    {
      "name": "ATP",
      "role": "Cellular energy / substrate component",
      "typicalDose": "50 mg"
    },
    {
      "id": "albuterol",
      "role": "Selective beta-2 agonist – mild thermogenic / lipolytic effect; this is the WADA-banned, cardiovascularly active component",
      "typicalDose": "2 mg"
    },
    {
      "name": "B12 (cyanocobalamin)",
      "role": "Cyanocobalamin – cofactor in energy and methyl metabolism, added for energy support",
      "typicalDose": "1 mg"
    }
  ],
  "shortDesc": "Compounded INJECTABLE lipotropic fat-burner cocktail (the classic 'lipo shot' archetype): L-Carnitine 400 mg + MIC blend 100 mg (Methionine + Inositol + Choline) + ATP 50 mg + Albuterol 2 mg + B12 1 mg. Fatty-acid transport (carnitine) + hepatic lipotropics (MIC) + a beta-2 thermogenic (albuterol) + cofactors (ATP, B12) in one injection. WADA-banned because of the albuterol, and it carries real cardiovascular risk. The clinical fat-loss evidence is for the individual components, NOT for the blend.",
  "description": "'Super-Shred (lipotropic blend)' is a compounded, INJECTABLE fat-burner cocktail – a specific version of the classic 'lipo shot' / lipotropic-injection archetype. It combines five components in one aqueous injection: L-Carnitine 400 mg (long-chain fatty-acid shuttle), MIC blend 100 mg (Methionine + Inositol + Choline lipotropic trio), ATP 50 mg (energy/substrate), Albuterol 2 mg (selective beta-2 agonist) and B12 / cyanocobalamin 1 mg (energy and methyl-metabolism cofactor). The logic is four-layered: fatty-acid transport (carnitine) + hepatic lipotropics (MIC) + beta-2 thermogenic lipolysis (albuterol) + cofactors (ATP, B12). The injectable route bypasses the poor oral bioavailability of carnitine (~15%). IMPORTANT honest framing: the clinical fat-loss evidence is overwhelmingly for the INDIVIDUAL components (and even there it is modest), NOT for this specific blend – there is no RCT of this combination. The real risk comes from the albuterol component: tachycardia, tremor, hypokalaemia and cardiovascular strain, and it is a WADA-banned beta-2 agonist. The preparation is grey-market, compounded / home-mixed, so purity and actual active content are NOT guaranteed."
  ,
  "keyInfo": [
    {
      "label": "Type",
      "value": "Compounded injectable lipotropic fat-burner cocktail (5-component 'lipo shot')"
    },
    {
      "label": "Composition",
      "value": "L-Carnitine 400 mg + MIC 100 mg + ATP 50 mg + Albuterol 2 mg + B12 1 mg per injection"
    },
    {
      "label": "Mechanism",
      "value": "Fatty-acid shuttle (carnitine) + hepatic lipotropics (MIC) + beta-2 thermogenic (albuterol) + cofactors (ATP, B12)"
    },
    {
      "label": "Administration",
      "value": "Subcutaneous / intramuscular injection (aqueous solution)"
    },
    {
      "label": "Legal status",
      "value": "No approved fixed-dose blend exists; compounded / grey-market. Albuterol beta-2 agonist is WADA-banned (oral/injectable). EU + HU: Rx components."
    }
  ],
  "mechanism": "Super-Shred (lipotropic blend) attempts to support fat loss through four independent mechanisms. (1) L-Carnitine: shuttles long-chain fatty acids into the mitochondria via carnitine palmitoyltransferase-I (CPT-I) for beta-oxidation – the rate-limiting step of the fat-as-fuel pathway. The injectable form bypasses poor oral absorption (~15%). (2) MIC (Methionine, Inositol, Choline): classic 'lipotropic' agents that support hepatic lipid metabolism and fat export from the liver; choline and methionine are methyl donors, inositol supports lipid handling. (3) ATP: provided as an energy / cellular-substrate component. (4) Albuterol: a selective beta-2 adrenergic agonist with a mild thermogenic / lipolytic effect and bronchodilation – this is the cardiovascularly active and WADA-banned component, carrying tachycardia, tremor and hypokalaemia risk. (5) B12 (cyanocobalamin): a cofactor in energy and methyl metabolism, commonly added for energy support in lipotropic injections. Overall it is a compounded fat-burner cocktail in which the components each have (modest) individual evidence, but the specific blend is unstudied; the cardiovascular and WADA risk comes essentially entirely from the albuterol component.",
  "legalStatus": "No approved fixed-dose 'Super-Shred' blend exists – the product is the result of compounding-pharmacy or grey-market home formulation. By component: L-Carnitine is an OTC supplement / Rx IM-SC form; Albuterol (Salbutamol) is an Rx beta-2 agonist (Ventolin); MIC, ATP and B12 are supplement / injectable lipotropic agents. WADA: albuterol is a beta-2 agonist, oral/injectable use is BANNED (only inhaled <1600 µg/24h is permitted) – so the whole blend is prohibited in competition. EU + HU + PL: albuterol is Rx-only.",
  "onsetTime": "Albuterol component 15-30 min; carnitine muscle-loading reaches steady-state over days to weeks",
  "halfLife": "Component-dependent: albuterol ~5-6 h, L-carnitine ~15 h, B12 is stored",
  "interactionsWith": [
    "l-carnitine",
    "albuterol",
    "clenbuterol",
    "mots-c"
  ],
  "aromatization": "Does not aromatize – not a steroid. The blend consists of lipotropics, a beta-2 agonist and cofactors, with no CYP19 (aromatase) interaction and no estrogen-axis effect.",
  "hepatotoxicity": "The lipotropic components (choline, methionine, inositol) generally SUPPORT hepatic fat metabolism and fat export, so they are not hepatotoxic on their own. Honest note: because Super-Shred is a compounded / grey-market injectable, purity, sterile manufacturing and actual active content are NOT guaranteed – here the risk comes not from hepatotoxicity but from the purity and sterility uncertainty of home formulation and from the cardiovascular effect of the albuterol.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not AAS)",
  "detectionWindow": "Albuterol 24-72 h urine (WADA threshold 1000 ng/mL). L-Carnitine is not a standard WADA test; B12 / lipotropics are not listed.",
  "benefits": [
    "Injectable L-Carnitine: bypasses poor oral absorption, supports fatty-acid mitochondrial transport (CPT-I, beta-oxidation)",
    "MIC lipotropic trio: supports hepatic lipid metabolism and fat export (methyl-donor choline + methionine)",
    "Albuterol: mild thermogenic / lipolytic beta-2 effect in a caloric deficit (but this is the risk component)",
    "B12 + ATP: energy and methyl-metabolism cofactor support",
    "'Lipo shot' convenience of one combined injection – BUT there is no clinical evidence for the blend as a whole, only for the components individually"
  ],
  "quickStart": [
    "Educational context: this is a compounded grey-market INJECTABLE fat-burner cocktail – there is no approval or RCT evidence for the blend as a whole",
    "The real risk comes from the albuterol component: tachycardia, tremor, hypokalaemia – pre-cycle EKG + blood-pressure baseline + potassium/magnesium are needed",
    "Forbidden for WADA-tested athletes: injectable/oral albuterol beta-2 agonist is banned in competition",
    "The components, sourced separately and verified, are more traceable and titratable than a fixed home blend",
    "Aqueous (water-based) injection – do NOT mix with oil-based preparations",
    "From a grey-market source purity and sterility are NOT guaranteed – sterility and dose-variance risk"
  ],
  "quality": {
    "pure": [
      "No approved fixed-dose 'Super-Shred' product exists – every such blend is a compounding-pharmacy or grey-market formulation, with active content not guaranteed",
      "Components sourced separately from pharmacy / verified sources are more traceable (Rx Salbutamol, Rx or OTC L-Carnitine, injectable lipotropic agents)",
      "Aqueous injection – an HPLC-tested source and sterile manufacturing would be mandatory, which is rarely verified on the grey market",
      "Due to the albuterol content, the whole blend is WADA-banned in competition"
    ],
    "caution": [
      "Albuterol cardio-monitoring: blood-pressure log, resting heart rate <100, EKG baseline + check",
      "Hypokalaemia: beta-2 activation shifts K+ intracellularly – magnesium 400 mg + potassium supplementation advised, especially alongside a diuretic",
      "Tremor, palpitations, anxiety, insomnia (albuterol component)",
      "Sterility and purity are NOT guaranteed on the grey market – injection-site reaction, infection risk",
      "Dose variance: in a compounded blend the actual albuterol dose can vary significantly",
      "L-Carnitine is an aqueous compound – do not mix with oil-based preparations"
    ],
    "avoid": [
      "Pre-existing tachyarrhythmia, AF, cardiomyopathy – absolute contraindication (albuterol)",
      "Pre-existing hypertension (>140/90 mmHg) – relative/absolute contraindication",
      "Beta-blocker therapy – blocks the albuterol effect and carries vasoconstriction risk",
      "Concurrent MAO inhibitor – tachycardia + hypertensive crisis risk",
      "Hyperthyroidism / Graves disease – contraindication",
      "Severe anxiety, panic disorder, epilepsy",
      "Pregnancy and breastfeeding",
      "WADA-tested competitors (injectable/oral albuterol form is banned)",
      "Combination with any other beta-2 agonist or sympathomimetic (clenbuterol, ECA-stack) – additive cardio-stress"
    ]
  },
  "interactions": [
    "Clenbuterol / other beta-2 agonist – additive cardio-stress + hypokalaemia, CONTRAINDICATED",
    "Beta-blocker – blocks the albuterol effect, vasoconstriction risk",
    "MAO inhibitor – tachycardia + hypertensive crisis risk",
    "Diuretic (thiazide, furosemide) – additive hypokalaemia risk alongside albuterol",
    "Caffeine / stimulants – synergistic cardio-stress with albuterol",
    "Warfarin – chronic L-Carnitine can raise INR",
    "Levothyroxine (T4) – L-Carnitine may reduce peripheral T4 → T3 conversion"
  ],
  "studies": [
    {
      "title": "New insights concerning the role of carnitine in the regulation of fuel metabolism in skeletal muscle",
      "authors": "Stephens FB, Constantin-Teodosiu D, Greenhaff PL.",
      "journal": "J Physiol. 2007;581(Pt 2):431-444.",
      "pmid": "17331998"
    },
    {
      "title": "Intestinal microbiota metabolism of L-carnitine, a nutrient in red meat, promotes atherosclerosis",
      "authors": "Koeth RA, Wang Z, Levison BS et al.",
      "journal": "Nat Med. 2013;19(5):576-585.",
      "pmid": "23563705"
    },
    {
      "title": "Pharmacology and therapeutics of bronchodilators",
      "authors": "Cazzola M, Page CP, Calzetta L, Matera MG.",
      "journal": "Pharmacol Rev. 2012;64(3):450-504.",
      "pmid": "22611179"
    },
    {
      "title": "L-carnitine L-tartrate supplementation favorably affects markers of recovery from exercise stress",
      "authors": "Kraemer WJ, Volek JS, French DN et al.",
      "journal": "J Strength Cond Res. 2003;17(3):455-462.",
      "pmid": "12930169"
    }
  ],
  "faq": [
    {
      "q": "What is Super-Shred really?",
      "a": "A compounded, INJECTABLE lipotropic fat-burner cocktail – a specific version of the classic 'lipo shot' archetype. It combines five components in one aqueous injection: L-Carnitine 400 mg, MIC blend 100 mg (Methionine + Inositol + Choline), ATP 50 mg, Albuterol 2 mg and B12 (cyanocobalamin) 1 mg. It is not a single approved drug but a grey-market / compounded formulation, so the actual active content and sterility are NOT guaranteed."
    },
    {
      "q": "How does the blend try to work?",
      "a": "Through four independent mechanisms: L-Carnitine shuttles fatty acids into the mitochondria for beta-oxidation (CPT-I shuttle, injectable to bypass poor oral absorption); the MIC trio (Methionine, Inositol, Choline) supports hepatic fat metabolism and fat export (methyl donors); ATP and B12 are energy and methyl-metabolism cofactors; and albuterol, as a selective beta-2 agonist, adds a mild thermogenic / lipolytic effect. IMPORTANT: the clinical fat-loss evidence is for the INDIVIDUAL components (and even there it is modest), not for this specific combination."
    },
    {
      "q": "Why is it WADA-banned?",
      "a": "Albuterol (Salbutamol) is a selective beta-2 adrenergic agonist. WADA permits inhaled use up to <1600 µg/24h (in an asthma context), but ORAL and INJECTABLE beta-2 agonist use is BANNED. Because Super-Shred is injectable and contains albuterol, the whole blend is prohibited in competition (urine detection 24-72 h, threshold 1000 ng/mL)."
    },
    {
      "q": "How safe is it?",
      "a": "The lipotropic components (choline, methionine, inositol) and the cofactors (ATP, B12) support hepatic fat metabolism on their own and are not hepatotoxic. The real risk comes from the albuterol component: tachycardia, tremor, hypokalaemia and cardiovascular strain. On top of that is the uncertainty of grey-market / home formulation – purity, sterility and actual dose are NOT guaranteed. It is contraindicated with pre-existing cardiovascular disease, hyperthyroidism, a MAO inhibitor or a beta-blocker."
    }
  ],
  "related": [
    "l-carnitine",
    "albuterol",
    "clenbuterol",
    "mots-c"
  ]
}
