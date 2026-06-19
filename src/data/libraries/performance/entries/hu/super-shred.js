// Super-Shred (lipotropic blend) – compounded INJEKTÁLHATÓ "lipo shot" zsírégető
// koktél. Valódi összetétel (tulajdonos): L-Carnitine 400 mg + MIC blend 100 mg
// (Methionine + Inositol + Choline) + ATP 50 mg + Albuterol 2 mg + B12
// (cyanocobalamin) 1 mg. Komponens-evidence: Stephens 2007 PMID 17331998,
// Koeth 2013 Nat Med PMID 23563705, Kraemer 2003 PMID 12930169 (L-Carnitine),
// Cazzola 2012 PMID 22611179 (bronchodilatorok / Albuterol).

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
      "role": "Long-chain zsírsav-shuttle (CPT-I) – a zsírt viszi a mitokondriumba beta-oxidációra; injektálva megkerüli a gyenge orális felszívódást",
      "typicalDose": "400 mg"
    },
    {
      "name": "MIC Blend (Methionine, Inositol, Choline)",
      "role": "Lipotrop trió (Methionine + Inositol + Choline) – a máj zsír-anyagcseréjét és zsír-exportját támogatja; cholin + metionin metil-donorok",
      "typicalDose": "100 mg"
    },
    {
      "name": "ATP",
      "role": "Sejtszintű energia / szubsztrát komponens",
      "typicalDose": "50 mg"
    },
    {
      "id": "albuterol",
      "role": "Szelektív béta-2 agonista – enyhe termogén / lipolitikus hatás; ez a WADA-tiltott, kardiovaszkulárisan aktív összetevő",
      "typicalDose": "2 mg"
    },
    {
      "name": "B12 (cyanocobalamin)",
      "role": "Cyanocobalamin – kofaktor az energia- és metil-anyagcserében, energia-támogatásra adva",
      "typicalDose": "1 mg"
    }
  ],
  "shortDesc": "Compounded INJEKTÁLHATÓ lipotrop zsírégető koktél (a klasszikus 'lipo shot' archetípus): L-Carnitine 400 mg + MIC blend 100 mg (Methionine + Inositol + Choline) + ATP 50 mg + Albuterol 2 mg + B12 1 mg. Zsírsav-transzport (carnitine) + hepatikus lipotropikumok (MIC) + béta-2 termogén (albuterol) + kofaktorok (ATP, B12) egy fecskendőben. Az Albuterol miatt WADA-tiltott, és kardiovaszkuláris kockázatot hordoz. A klinikai fogyás-evidence az egyes komponensekre van, NEM a keverékre.",
  "description": "A 'Super-Shred (lipotropic blend)' egy compounded, INJEKTÁLHATÓ zsírégető koktél, a klasszikus 'lipo shot' / 'lipotrop injekció' archetípus egy konkrét változata. Öt komponenst kombinál egyetlen vizes injekcióban: L-Carnitine 400 mg (long-chain zsírsav-shuttle), MIC blend 100 mg (Methionine + Inositol + Choline lipotrop trió), ATP 50 mg (energia/szubsztrát), Albuterol 2 mg (szelektív béta-2 agonista) és B12 / cyanocobalamin 1 mg (energia- és metil-anyagcsere kofaktor). A logika négyrétegű: zsírsav-transzport (carnitine) + hepatikus lipotropikumok (MIC) + béta-2 termogén lipolízis (albuterol) + kofaktorok (ATP, B12). Az injektálható forma a carnitine gyenge orális biohasznosulását (~15%) kerüli meg. FONTOS őszinte keretezés: a klinikai fogyás-evidence túlnyomórészt az EGYES komponensekre vonatkozik (és ott is szerény), NEM erre a konkrét keverékre – ennek a kombinációnak nincs RCT-vizsgálata. A valódi kockázatot az Albuterol komponens hordozza: tachycardia, tremor, hypokalaemia és kardiovaszkuláris terhelés, ráadásul WADA-tiltott béta-2 agonista. A készítmény szürke-piaci, compounding / házi keverés, így a tisztaság és a tényleges hatóanyag-tartalom NEM garantált."
  ,
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Compounded injektálható lipotrop zsírégető koktél (5-komponensű 'lipo shot')"
    },
    {
      "label": "Összetétel",
      "value": "L-Carnitine 400 mg + MIC 100 mg + ATP 50 mg + Albuterol 2 mg + B12 1 mg / injekció"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "Zsírsav-shuttle (carnitine) + hepatikus lipotropikumok (MIC) + béta-2 termogén (albuterol) + kofaktorok (ATP, B12)"
    },
    {
      "label": "Beadás",
      "value": "Szubkután / intramuszkuláris injekció (vizes oldat)"
    },
    {
      "label": "Jogi státusz",
      "value": "Egyetlen jóváhagyott fixed-dose keverék SEM létezik; compounding / szürke-piaci. Albuterol béta-2 agonista WADA-tiltott (oral/injekciós forma). EU + HU: Rx-komponensek."
    }
  ],
  "mechanism": "A Super-Shred (lipotropic blend) négy, egymástól független mechanizmuson keresztül próbálja a zsírvesztést támogatni. (1) L-Carnitine: a hosszú-szénláncú zsírsavakat a carnitine palmitoyltransferase-I (CPT-I) shuttle-rendszeren keresztül viszi be a mitokondriumba beta-oxidációra – ez a zsír-mint-üzemanyag útvonal sebesség-meghatározó lépése. Az injektálható forma megkerüli a gyenge orális felszívódást (~15%). (2) MIC (Methionine, Inositol, Choline): klasszikus 'lipotrop' ágensek, amelyek a máj lipid-anyagcseréjét és a májból való zsír-exportot támogatják; a cholin és a metionin metil-donorok, az inozitol a lipid-kezelést segíti. (3) ATP: energia- / sejtszintű szubsztrát komponensként adva. (4) Albuterol: szelektív béta-2 adrenerg agonista, amely enyhe termogén / lipolitikus hatást és bronchodilatációt fejt ki – ez a kardiovaszkulárisan aktív és WADA-tiltott összetevő, tachycardia, tremor és hypokalaemia kockázattal. (5) B12 (cyanocobalamin): az energia- és metil-anyagcsere kofaktora, amelyet rendszerint energia-támogatásra adnak a lipotrop injekciókhoz. Összességében egy compounded zsírégető koktél, ahol a komponensek külön-külön rendelkeznek (szerény) evidenciával, de a konkrét keverék nem vizsgált; a kardiovaszkuláris és WADA-kockázat gyakorlatilag teljes egészében az Albuterol-komponensből ered.",
  "legalStatus": "Nincs jóváhagyott fixed-dose 'Super-Shred' keverék – a termék compounding pharmacy vagy szürke-piaci házi formulálás eredménye. Komponensenként: L-Carnitine OTC supplement / Rx IM-SC forma; Albuterol (Salbutamol) Rx béta-2 agonista (Ventolin); a MIC, ATP és B12 supplement / injekciós lipotrop ágensek. WADA: az Albuterol béta-2 agonista, oral/injekciós használat TILTOTT (csak inhalációs <1600 µg/24h engedett) – emiatt a teljes keverék verseny-kontextusban tiltott. EU + HU + PL: az Albuterol Rx-köteles.",
  "onsetTime": "Albuterol-komponens 15-30 perc; carnitine izom-loading napok-hetek alatt steady-state",
  "halfLife": "Komponens-függő: Albuterol ~5-6 óra, L-Carnitine ~15 óra, B12 raktározódik",
  "interactionsWith": [
    "l-carnitine",
    "albuterol",
    "clenbuterol",
    "mots-c"
  ],
  "aromatization": "Nem aromatizál – nem szteroid. A keverék lipotropikumokból, egy béta-2 agonistából és kofaktorokból áll, nincs CYP19 (aromatáz) interakció és nincs ösztrogén-axis hatás.",
  "hepatotoxicity": "A lipotrop komponensek (cholin, metionin, inozitol) általában TÁMOGATJÁK a máj zsír-anyagcseréjét és a zsír-exportot, így önmagukban nem hepatotoxikusak. Őszinte megjegyzés: mivel a Super-Shred compounded / szürke-piaci injektálható készítmény, a tisztaság, a steril gyártás és a tényleges hatóanyag-tartalom NEM garantált – a kockázat itt nem a hepatotoxicitásból, hanem a házi formulálás tisztasági és sterilitási bizonytalanságából, valamint az Albuterol kardiovaszkuláris hatásából ered.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS)",
  "detectionWindow": "Albuterol 24-72 óra vizelet (WADA threshold 1000 ng/mL). L-Carnitine nem standard WADA-test; B12 / lipotropikumok nem listázottak.",
  "benefits": [
    "Injektálható L-Carnitine: megkerüli a gyenge orális felszívódást, támogatja a zsírsav-mitokondriális transzportot (CPT-I, beta-oxidáció)",
    "MIC lipotrop trió: a máj lipid-anyagcseréjét és zsír-exportját támogatja (metil-donor cholin + metionin)",
    "Albuterol: enyhe termogén / lipolitikus béta-2 hatás kalória-deficitben (de ez a kockázati komponens)",
    "B12 + ATP: energia- és metil-anyagcsere kofaktor-támogatás",
    "Egyetlen injekcióban kombinált 'lipo shot' kényelem – DE a keverék egészére nincs klinikai evidence, csak a komponensekre külön-külön"
  ],
  "quickStart": [
    "Edukatív kontextus: ez egy compounded szürke-piaci INJEKTÁLHATÓ zsírégető koktél – a keverék egészére nincs jóváhagyás vagy RCT-evidence",
    "A valódi kockázat az Albuterol-komponensből ered: tachycardia, tremor, hypokalaemia – pre-cycle EKG + vérnyomás-baseline + kálium/magnézium szükséges",
    "WADA-tesztelt sportolónak TILOS: az Albuterol injekciós/oral béta-2 agonista verseny-kontextusban tiltott",
    "A komponensek külön-külön, ellenőrzött forrásból követhetőbbek és titrálhatóbbak, mint egy fix házi keverék",
    "Vizes (water-based) injekció – TILOS olajos készítményekkel keverni",
    "Szürke-piaci forrásnál a tisztaság és sterilitás NEM garantált – sterilitási és dose-variance kockázat"
  ],
  "quality": {
    "pure": [
      "Nincs jóváhagyott fixed-dose 'Super-Shred' termék – minden ilyen keverék compounding pharmacy vagy szürke-piaci formulálás, a hatóanyag-tartalom nem garantált",
      "A komponensek külön-külön, gyógyszertári / ellenőrzött forrásból beszerezve követhetőbbek (Rx Salbutamol, Rx vagy OTC L-Carnitine, lipotrop injekciós ágensek)",
      "Vizes bázisú injekció – HPLC-tesztelt forrás és steril gyártás kötelező lenne, szürke-piacon ez ritkán igazolt",
      "Albuterol-tartalom miatt a teljes keverék WADA-tiltott verseny-kontextusban"
    ],
    "caution": [
      "Albuterol kardio-monitoring: vérnyomás-napló, nyugalmi pulzus <100, EKG-baseline + ellenőrzés",
      "Hypokalaemia: a béta-2 aktiváció a K+-ot intracellulárisan shifteli – magnézium 400 mg + kálium-szupplementálás ajánlott, főleg diuretikum mellett",
      "Tremor, szívdobogás, szorongás, insomnia (Albuterol-komponens)",
      "Sterilitás és tisztaság szürke-piacon NEM garantált – injekciós helyi reakció, fertőzés-kockázat",
      "Dose-variance: compounded keveréknél a tényleges Albuterol-dózis ±jelentős eltérést mutathat",
      "L-Carnitine vizes vegyület – tilos olajos készítményekkel keverni"
    ],
    "avoid": [
      "Pre-existing tachyarrhythmia, AF, kardiomiopátia – abszolút kontraindikáció (Albuterol)",
      "Pre-existing hipertónia (>140/90 mmHg) – relatív/abszolút kontraindikáció",
      "Béta-blokkoló-terápia – blokkolja az Albuterol hatását és vasokonstrikció-kockázat",
      "MAO-gátló egyidejű használata – tachycardia + hypertensiv krízis kockázat",
      "Hyperthyreosis / Graves-betegség – kontraindikáció",
      "Súlyos szorongás, pánikbetegség, epilepszia",
      "Terhesség és szoptatás",
      "WADA-tesztelt versenyzők (Albuterol injekciós/oral forma tiltott)",
      "Kombináció bármely más béta-2 agonistával vagy szimpatomimetikummal (clenbuterol, ECA-stack) – additív kardio-stressz"
    ]
  },
  "interactions": [
    "Clenbuterol / más béta-2 agonista – additív kardio-stressz + hypokalaemia, KONTRAINDIKÁLT",
    "Béta-blokkoló – blokkolja az Albuterol hatását, vasokonstrikció-kockázat",
    "MAO-gátló – tachycardia + hypertensiv krízis kockázat",
    "Diuretikum (thiazid, furosemid) – additív hypokalaemia kockázat az Albuterol mellett",
    "Caffeine / stimulánsok – szinergisztikus kardio-stressz az Albuterol-lal",
    "Warfarin – krónikus L-Carnitine INR-emelkedést okozhat",
    "Levothyroxine (T4) – L-Carnitine csökkentheti a perifériás T4 → T3 konverziót"
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
      "q": "Mi valójában a Super-Shred?",
      "a": "Egy compounded, INJEKTÁLHATÓ lipotrop zsírégető koktél – a klasszikus 'lipo shot' archetípus konkrét változata. Öt komponenst kombinál egy vizes injekcióban: L-Carnitine 400 mg, MIC blend 100 mg (Methionine + Inositol + Choline), ATP 50 mg, Albuterol 2 mg és B12 (cyanocobalamin) 1 mg. Nem egyetlen jóváhagyott gyógyszer, hanem szürke-piaci / compounding formulálás, ezért a tényleges hatóanyag-tartalom és a sterilitás NEM garantált."
    },
    {
      "q": "Hogyan próbál hatni a keverék?",
      "a": "Négy független mechanizmuson keresztül: az L-Carnitine a zsírsavakat a mitokondriumba viszi beta-oxidációra (CPT-I shuttle, injektálva megkerülve a gyenge orális felszívódást); a MIC trió (Methionine, Inositol, Choline) a máj zsír-anyagcseréjét és zsír-exportját támogatja (metil-donorok); az ATP és a B12 energia- és metil-anyagcsere kofaktorok; az Albuterol pedig szelektív béta-2 agonistaként enyhe termogén / lipolitikus hatást ad. FONTOS: a klinikai fogyás-evidence az EGYES komponensekre van (és ott is szerény), nem erre a konkrét kombinációra."
    },
    {
      "q": "Miért WADA-tiltott?",
      "a": "Az Albuterol (Salbutamol) szelektív béta-2 adrenerg agonista. A WADA az inhalációs használatot <1600 µg/24 óráig engedi (asztma-kontextusban), de az ORAL és INJEKCIÓS béta-2 agonista használat TILTOTT. Mivel a Super-Shred injektálható és Albuterol-t tartalmaz, a teljes keverék tiltott verseny-kontextusban (vizelet-detektálás 24-72 óra, threshold 1000 ng/mL)."
    },
    {
      "q": "Mennyire biztonságos?",
      "a": "A lipotrop komponensek (cholin, metionin, inozitol) és a kofaktorok (ATP, B12) önmagukban a máj zsír-anyagcseréjét támogatják és nem hepatotoxikusak. A valódi kockázatot az Albuterol-komponens hordozza: tachycardia, tremor, hypokalaemia és kardiovaszkuláris terhelés. Ehhez jön a szürke-piaci / házi formulálás bizonytalansága – a tisztaság, a sterilitás és a tényleges dózis NEM garantált. Pre-existing kardiovaszkuláris betegség, hyperthyreosis, MAO-gátló vagy béta-blokkoló mellett kontraindikált."
    }
  ],
  "related": [
    "l-carnitine",
    "albuterol",
    "clenbuterol",
    "mots-c"
  ]
}
