// Super-Shred (lipotropic blend) – compounded INIEKCYJNY koktajl spalający tłuszcz
// typu "lipo shot". Rzeczywisty skład (wg właściciela): L-Carnitine 400 mg + MIC
// blend 100 mg (Methionine + Inositol + Choline) + ATP 50 mg + Albuterol 2 mg +
// B12 (cyanocobalamin) 1 mg. Evidence komponentów: Stephens 2007 PMID 17331998,
// Koeth 2013 Nat Med PMID 23563705, Kraemer 2003 PMID 12930169 (L-Carnitine),
// Cazzola 2012 PMID 22611179 (bronchodilatatory / Albuterol).

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
      "role": "Shuttle długołańcuchowych kwasów tłuszczowych (CPT-I) – wprowadza tłuszcz do mitochondriów do beta-oksydacji; forma iniekcyjna omija słabe wchłanianie doustne",
      "typicalDose": "400 mg"
    },
    {
      "name": "MIC Blend (Methionine, Inositol, Choline)",
      "role": "Trio lipotropowe (Methionine + Inositol + Choline) – wspiera wątrobowy metabolizm lipidów i eksport tłuszczu; cholina + metionina to donory metylowe",
      "typicalDose": "100 mg"
    },
    {
      "name": "ATP",
      "role": "Komponent energetyczny / substrat komórkowy",
      "typicalDose": "50 mg"
    },
    {
      "id": "albuterol",
      "role": "Selektywny agonista beta-2 – łagodny efekt termogeniczny / lipolityczny; to komponent zakazany przez WADA i aktywny sercowo-naczyniowo",
      "typicalDose": "2 mg"
    },
    {
      "name": "B12 (cyanocobalamin)",
      "role": "Cyanocobalamin – kofaktor w metabolizmie energetycznym i metylowym, dodawany dla wsparcia energii",
      "typicalDose": "1 mg"
    }
  ],
  "shortDesc": "Compounded INIEKCYJNY koktajl lipotropowy spalający tłuszcz (klasyczny archetyp 'lipo shot'): L-Carnitine 400 mg + MIC blend 100 mg (Methionine + Inositol + Choline) + ATP 50 mg + Albuterol 2 mg + B12 1 mg. Transport kwasów tłuszczowych (carnitine) + lipotropiki wątrobowe (MIC) + termogenik beta-2 (albuterol) + kofaktory (ATP, B12) w jednej iniekcji. Zakazany przez WADA z powodu albuterolu i niosący realne ryzyko sercowo-naczyniowe. Kliniczne evidence utraty tłuszczu dotyczy poszczególnych komponentów, NIE mieszanki.",
  "description": "'Super-Shred (lipotropic blend)' to compounded, INIEKCYJNY koktajl spalający tłuszcz – konkretna wersja klasycznego archetypu 'lipo shot' / iniekcji lipotropowej. Łączy pięć komponentów w jednej wodnej iniekcji: L-Carnitine 400 mg (shuttle długołańcuchowych kwasów tłuszczowych), MIC blend 100 mg (trio lipotropowe Methionine + Inositol + Choline), ATP 50 mg (energia/substrat), Albuterol 2 mg (selektywny agonista beta-2) i B12 / cyanocobalamin 1 mg (kofaktor metabolizmu energetycznego i metylowego). Logika jest czterowarstwowa: transport kwasów tłuszczowych (carnitine) + lipotropiki wątrobowe (MIC) + lipoliza termogeniczna beta-2 (albuterol) + kofaktory (ATP, B12). Forma iniekcyjna omija słabą biodostępność doustną karnityny (~15%). WAŻNE uczciwe ujęcie: kliniczne evidence utraty tłuszczu dotyczy przede wszystkim POSZCZEGÓLNYCH komponentów (i nawet tam jest skromne), NIE tej konkretnej mieszanki – nie ma RCT tej kombinacji. Realne ryzyko pochodzi z komponentu albuterol: tachykardia, drżenie, hipokaliemia i obciążenie sercowo-naczyniowe, a jest to agonista beta-2 zakazany przez WADA. Preparat jest szaro-rynkowy, compounded / mieszany domowo, więc czystość i rzeczywista zawartość substancji czynnej NIE są gwarantowane."
  ,
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Compounded iniekcyjny lipotropowy koktajl spalający tłuszcz (5-komponentowy 'lipo shot')"
    },
    {
      "label": "Skład",
      "value": "L-Carnitine 400 mg + MIC 100 mg + ATP 50 mg + Albuterol 2 mg + B12 1 mg na iniekcję"
    },
    {
      "label": "Mechanizm",
      "value": "Shuttle kwasów tłuszczowych (carnitine) + lipotropiki wątrobowe (MIC) + termogenik beta-2 (albuterol) + kofaktory (ATP, B12)"
    },
    {
      "label": "Podanie",
      "value": "Iniekcja podskórna / domięśniowa (roztwór wodny)"
    },
    {
      "label": "Status prawny",
      "value": "Żadna zatwierdzona mieszanka fixed-dose NIE istnieje; compounding / szaro-rynkowa. Agonista beta-2 albuterol zakazany przez WADA (forma oral/iniekcyjna). UE + HU: komponenty Rx."
    }
  ],
  "mechanism": "Super-Shred (lipotropic blend) próbuje wspierać utratę tłuszczu poprzez cztery niezależne mechanizmy. (1) L-Carnitine: wprowadza długołańcuchowe kwasy tłuszczowe do mitochondriów przez shuttle carnitine palmitoyltransferase-I (CPT-I) do beta-oksydacji – to etap limitujący szybkość szlaku 'tłuszcz jako paliwo'. Forma iniekcyjna omija słabe wchłanianie doustne (~15%). (2) MIC (Methionine, Inositol, Choline): klasyczne ágenty 'lipotropowe', które wspierają wątrobowy metabolizm lipidów i eksport tłuszczu z wątroby; cholina i metionina to donory metylowe, inozytol wspiera obsługę lipidów. (3) ATP: podawany jako komponent energetyczny / substrat komórkowy. (4) Albuterol: selektywny agonista beta-2 adrenergiczny o łagodnym efekcie termogenicznym / lipolitycznym i bronchodilatacji – to komponent aktywny sercowo-naczyniowo i zakazany przez WADA, niosący ryzyko tachykardii, drżenia i hipokaliemii. (5) B12 (cyanocobalamin): kofaktor w metabolizmie energetycznym i metylowym, zwykle dodawany dla wsparcia energii w iniekcjach lipotropowych. Ogólnie to compounded koktajl spalający tłuszcz, w którym komponenty mają (skromne) indywidualne evidence, ale konkretna mieszanka jest niezbadana; ryzyko sercowo-naczyniowe i WADA pochodzi praktycznie w całości z komponentu albuterol.",
  "legalStatus": "Żadna zatwierdzona mieszanka fixed-dose 'Super-Shred' NIE istnieje – produkt jest wynikiem formulacji compounding-pharmacy lub szaro-rynkowej domowej. Według komponentów: L-Carnitine to suplement OTC / forma Rx IM-SC; Albuterol (Salbutamol) to agonista beta-2 Rx (Ventolin); MIC, ATP i B12 to suplementy / iniekcyjne ágenty lipotropowe. WADA: albuterol jest agonistą beta-2, użycie oral/iniekcyjne jest ZAKAZANE (dozwolone tylko inhalacyjne <1600 µg/24h) – więc cała mieszanka jest zakazana w zawodach. UE + HU + PL: albuterol jest tylko na Rx.",
  "onsetTime": "Komponent albuterol 15-30 min; ładowanie karnityny w mięśniach osiąga stan stacjonarny w ciągu dni do tygodni",
  "halfLife": "Zależny od komponentu: albuterol ~5-6 h, L-karnityna ~15 h, B12 jest magazynowana",
  "interactionsWith": [
    "l-carnitine",
    "albuterol",
    "clenbuterol",
    "mots-c"
  ],
  "aromatization": "Nie aromatyzuje – nie jest sterydem. Mieszanka składa się z lipotropików, agonisty beta-2 i kofaktorów, bez interakcji z CYP19 (aromatazą) i bez wpływu na oś estrogenową.",
  "hepatotoxicity": "Komponenty lipotropowe (cholina, metionina, inozytol) ogólnie WSPIERAJĄ wątrobowy metabolizm tłuszczu i eksport tłuszczu, więc same w sobie nie są hepatotoksyczne. Uczciwa uwaga: ponieważ Super-Shred to compounded / szaro-rynkowy preparat iniekcyjny, czystość, sterylna produkcja i rzeczywista zawartość substancji czynnej NIE są gwarantowane – ryzyko pochodzi tu nie z hepatotoksyczności, lecz z niepewności czystości i sterylności formulacji domowej oraz z efektu sercowo-naczyniowego albuterolu.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS)",
  "detectionWindow": "Albuterol 24-72 h w moczu (próg WADA 1000 ng/mL). L-Carnitine nie jest standardowym testem WADA; B12 / lipotropiki nie są listowane.",
  "benefits": [
    "Iniekcyjna L-Carnitine: omija słabe wchłanianie doustne, wspiera mitochondrialny transport kwasów tłuszczowych (CPT-I, beta-oksydacja)",
    "Trio lipotropowe MIC: wspiera wątrobowy metabolizm lipidów i eksport tłuszczu (donory metylowe cholina + metionina)",
    "Albuterol: łagodny efekt termogeniczny / lipolityczny beta-2 w deficycie kalorycznym (ale to komponent ryzyka)",
    "B12 + ATP: wsparcie kofaktorowe metabolizmu energetycznego i metylowego",
    "Wygoda 'lipo shot' jednej połączonej iniekcji – ALE nie ma klinicznego evidence dla mieszanki jako całości, tylko dla komponentów osobno"
  ],
  "quickStart": [
    "Kontekst edukacyjny: to compounded szaro-rynkowy INIEKCYJNY koktajl spalający tłuszcz – nie ma zatwierdzenia ani evidence RCT dla mieszanki jako całości",
    "Realne ryzyko pochodzi z komponentu albuterol: tachykardia, drżenie, hipokaliemia – potrzebne pre-cycle EKG + baseline ciśnienia krwi + potas/magnez",
    "Zakazane dla sportowców testowanych WADA: iniekcyjny/oralny agonista beta-2 albuterol jest zakazany w zawodach",
    "Komponenty pozyskane osobno i zweryfikowane są bardziej śledzone i titrowalne niż stała mieszanka domowa",
    "Iniekcja wodna (na bazie wody) – NIE mieszać z preparatami olejowymi",
    "Ze źródła szaro-rynkowego czystość i sterylność NIE są gwarantowane – ryzyko sterylności i dose-variance"
  ],
  "quality": {
    "pure": [
      "Żaden zatwierdzony produkt fixed-dose 'Super-Shred' nie istnieje – każda taka mieszanka to formulacja compounding-pharmacy lub szaro-rynkowa, z niegwarantowaną zawartością substancji czynnej",
      "Komponenty pozyskane osobno z apteki / zweryfikowanych źródeł są bardziej śledzone (Rx Salbutamol, Rx lub OTC L-Carnitine, iniekcyjne ágenty lipotropowe)",
      "Iniekcja wodna – źródło testowane HPLC i sterylna produkcja byłyby obowiązkowe, co na szarym rynku rzadko jest zweryfikowane",
      "Z powodu zawartości albuterolu cała mieszanka jest zakazana przez WADA w zawodach"
    ],
    "caution": [
      "Albuterol kardio-monitoring: dziennik ciśnienia krwi, tętno spoczynkowe <100, baseline EKG + kontrola",
      "Hipokaliemia: aktywacja beta-2 przesuwa K+ wewnątrzkomórkowo – zalecana suplementacja magnez 400 mg + potas, zwłaszcza obok diuretyku",
      "Drżenie, kołatanie serca, lęk, bezsenność (komponent albuterol)",
      "Sterylność i czystość NIE są gwarantowane na szarym rynku – reakcja w miejscu iniekcji, ryzyko infekcji",
      "Dose-variance: w mieszance compounded rzeczywista dawka albuterolu może się znacznie różnić",
      "L-Carnitine to związek wodny – nie mieszać z preparatami olejowymi"
    ],
    "avoid": [
      "Pre-existing tachyarytmia, AF, kardiomiopatia – bezwzględne przeciwwskazanie (albuterol)",
      "Pre-existing nadciśnienie (>140/90 mmHg) – względne/bezwzględne przeciwwskazanie",
      "Terapia beta-blokerem – blokuje efekt albuterolu i niesie ryzyko vasokonstrykcji",
      "Jednoczesny inhibitor MAO – ryzyko tachykardii + kryzysu nadciśnieniowego",
      "Nadczynność tarczycy / choroba Gravesa – przeciwwskazanie",
      "Ciężki lęk, choroba paniczna, epilepsja",
      "Ciąża i karmienie piersią",
      "Zawodnicy testowani WADA (iniekcyjna/oralna forma albuterolu zakazana)",
      "Kombinacja z jakimkolwiek innym agonistą beta-2 lub sympatykomimetykiem (clenbuterol, ECA-stack) – addytywny stres sercowy"
    ]
  },
  "interactions": [
    "Clenbuterol / inny agonista beta-2 – addytywny stres sercowy + hipokaliemia, PRZECIWWSKAZANE",
    "Beta-bloker – blokuje efekt albuterolu, ryzyko vasokonstrykcji",
    "Inhibitor MAO – ryzyko tachykardii + kryzysu nadciśnieniowego",
    "Diuretyk (tiazyd, furosemid) – addytywne ryzyko hipokaliemii obok albuterolu",
    "Kofeina / stymulanty – synergiczny stres sercowy z albuterolem",
    "Warfaryna – chroniczna L-Carnitine może podnieść INR",
    "Lewotyroksyna (T4) – L-Carnitine może zmniejszać obwodową konwersję T4 → T3"
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
      "q": "Czym właściwie jest Super-Shred?",
      "a": "Compounded, INIEKCYJNYM lipotropowym koktajlem spalającym tłuszcz – konkretną wersją klasycznego archetypu 'lipo shot'. Łączy pięć komponentów w jednej wodnej iniekcji: L-Carnitine 400 mg, MIC blend 100 mg (Methionine + Inositol + Choline), ATP 50 mg, Albuterol 2 mg i B12 (cyanocobalamin) 1 mg. Nie jest pojedynczym zatwierdzonym lekiem, ale formulacją szaro-rynkową / compounded, więc rzeczywista zawartość substancji czynnej i sterylność NIE są gwarantowane."
    },
    {
      "q": "Jak mieszanka próbuje działać?",
      "a": "Poprzez cztery niezależne mechanizmy: L-Carnitine wprowadza kwasy tłuszczowe do mitochondriów do beta-oksydacji (shuttle CPT-I, iniekcyjnie aby ominąć słabe wchłanianie doustne); trio MIC (Methionine, Inositol, Choline) wspiera wątrobowy metabolizm tłuszczu i eksport tłuszczu (donory metylowe); ATP i B12 to kofaktory metabolizmu energetycznego i metylowego; a albuterol jako selektywny agonista beta-2 dodaje łagodny efekt termogeniczny / lipolityczny. WAŻNE: kliniczne evidence utraty tłuszczu dotyczy POSZCZEGÓLNYCH komponentów (i nawet tam jest skromne), nie tej konkretnej kombinacji."
    },
    {
      "q": "Dlaczego jest zakazany przez WADA?",
      "a": "Albuterol (Salbutamol) to selektywny agonista beta-2 adrenergiczny. WADA dopuszcza użycie inhalacyjne do <1600 µg/24h (w kontekście astmy), ale użycie ORALNE i INIEKCYJNE agonisty beta-2 jest ZAKAZANE. Ponieważ Super-Shred jest iniekcyjny i zawiera albuterol, cała mieszanka jest zakazana w zawodach (detekcja w moczu 24-72 h, próg 1000 ng/mL)."
    },
    {
      "q": "Jak bezpieczny jest?",
      "a": "Komponenty lipotropowe (cholina, metionina, inozytol) i kofaktory (ATP, B12) same w sobie wspierają wątrobowy metabolizm tłuszczu i nie są hepatotoksyczne. Realne ryzyko pochodzi z komponentu albuterol: tachykardia, drżenie, hipokaliemia i obciążenie sercowo-naczyniowe. Do tego dochodzi niepewność formulacji szaro-rynkowej / domowej – czystość, sterylność i rzeczywista dawka NIE są gwarantowane. Przeciwwskazany przy pre-existing chorobie sercowo-naczyniowej, nadczynności tarczycy, inhibitorze MAO lub beta-blokerze."
    }
  ],
  "related": [
    "l-carnitine",
    "albuterol",
    "clenbuterol",
    "mots-c"
  ]
}
