// Liothyronine (T3, Cytomel) — Pfizer 1956, zatwierdzona przez FDA syntetyczna
// 3,5,3'-trijodotyronina, Rx na niedoczynność tarczycy. Zastosowanie off-label
// w cyklach cutting udokumentowane od lat 80. Źródła: FDA Cytomel SmPC,
// Bunevicius 1999 PMID 9989958, Stott 2017 TRUST NEJM PMID 28121505,
// Klein 2001 PMID 11257082, Celi 2011 PMID 21307176.

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
  "shortDesc": "Syntetyczna T3 (3,5,3'-trijodotyronina), Pfizer 1956, zatwierdzona przez FDA jako Rx na niedoczynność tarczycy (Cytomel). Off-label w cyklach cutting jako termogenik +10-30% REE poprzez bezpośrednią mitochondrialną β-oksydację + upregulację Na/K-ATP-azy; WADA in-competition zakazana dla sportowców bez Rx.",
  "description": "Liothyronine (Cytomel) to syntetyczna forma endogennej T3 (3,5,3'-trijodotyroniny), farmakologicznie aktywnej formy hormonu tarczycy. Zatwierdzona przez FDA w 1956 przez Pfizer głównie do leczenia niedoczynności tarczycy, gdy monoterapia T4 nie daje pełnej remisji objawów poznawczych (Bunevicius 1999 NEJM PMID 9989958 to klasyczne badanie T3 add-on). 70 lat literatury klinicznej oraz udokumentowane stosowanie off-label w bodybuildingu od lat 80. (Hochberg 1989). T3 działa jako agonista jądrowych receptorów TR-α i TR-β, uruchamiając bezpośrednią aktywację transkrypcji genów, co podnosi tkankowe tempo metabolizmu o 10-30% poprzez kaskadę receptorów jądrowych. Bezpośredni mechanizm obejmuje upregulację mitochondrialnej β-oksydacji oraz zwiększenie gęstości Na/K-ATP-azy w mięśniach szkieletowych, co prowadzi do wzrostu spoczynkowego wydatku energetycznego (REE). W kontekście cuttingu z AAS protokół T3 25-75 μg/dobę (titracja co 12.5 μg) używany jest do równoważenia zachowania mięśni z utratą tkanki tłuszczowej; jednak ryzyko hipotyreozy poshutdownowej jest wysokie (supresja endogennego TSH zależna od dawki, >100 μg/dobę przez 12+ tygodni przewlekle wiąże się z potencjalnym ryzykiem wtórnej niedoczynności tarczycy). Lista WADA klasyfikuje T3 jako S4.5 modulator hormonów tarczycy, in-competition zakazany dla sportowców bez Rx (NADA Szwajcaria 2023, USADA 2024 update). T4 vs T3: T4 ma wolniejszy on/off i 7-dniowy okres półtrwania umożliwiający powolną titrację; T3 ma 24-godzinny okres półtrwania i szybkie działanie, ale gwałtowną supresję endogennego TSH.",
  "keyInfo": [
    {
      "label": "Mechanizm działania",
      "value": "Agonista jądrowych receptorów TR-α + TR-β, aktywacja transkrypcji genów, +10-30% REE"
    },
    {
      "label": "Dawkowanie",
      "value": "Kliniczne 25-50 μg/dobę; off-label cutting 25-75 μg/dobę, titracja co 12.5 μg"
    },
    {
      "label": "Okres półtrwania",
      "value": "~24 godziny (steady-state w ciągu 7 dni)"
    },
    {
      "label": "Początek działania",
      "value": "Wzrost tempa metabolizmu 24-48 godzin, efekt utraty tłuszczu 1-2 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (niedoczynność tarczycy), zarejestrowana w HU + PL. WADA: S4.5 in-competition zakazana dla sportowców bez Rx."
    }
  ],
  "mechanism": "Liothyronine jest syntetyczną formą endogennej T3, farmakologicznie aktywnej formy hormonu tarczycy. T4 (Levothyroxine) jest w dużej mierze prohormonem — wątrobowe i nerkowe enzymy 5'-dejodynazy (D1/D2) konwertują go do aktywnej T3 (~80% obwodowej konwersji T4 → T3). Egzogenna T3 omija ten krok konwersji, dając szybszą kinetykę on/off (24-godzinne t1/2 vs 7 dni T4). T3 jest ligandem jądrowego receptora tarczycy (TR-α w mięśniach szkieletowych i sercowym, TR-β w wątrobie i podwzgórzu): po związaniu receptor heterodimeryzuje z receptorem retinoidowym-X (RXR) i działa jako czynnik transkrypcyjny inicjujący bezpośrednią aktywację ekspresji genów. Główne cele downstream: geny mitochondrialnych białek rozprzęgających UCP1 i UCP3, kluczowe enzymy β-oksydacji (CPT-1, ACOX) oraz gen podjednostki α Na/K-ATP-azy. Wzrost REE w mięśniach szkieletowych wynika częściowo ze wzrostu gęstości Na/K-ATP-azy (~30% udziału w spoczynkowym REE). Centralnym mechanizmem jest ujemne sprzężenie zwrotne osi podwzgórze-przysadka-tarczyca (HPT): egzogenna T3 powoduje zależną od dawki supresję wydzielania endogennego TSH, prowadząc do indukcji wtórnej niedoczynności tarczycy, jeśli długość cyklu przekracza okno regeneracji (około 4-6 tygodni cyklu, potem 4-8 tygodni regeneracji; >100 μg/dobę przez 12+ tygodni może powodować potencjalnie trwałe wyłączenie osi).",
  "legalStatus": "USA: zatwierdzona przez FDA w 1956 (Cytomel, Pfizer — wówczas Lederle/Wyeth) na niedoczynność tarczycy; Schedule N/A. UE: zatwierdzona przez EMA. HU: zarejestrowana (Cytomel Rx). PL: zarejestrowana (Cytomel Rx). WADA: S4.5 modulator hormonów tarczycy, in-competition zakazana (NADA Szwajcaria 2023 explicit listing, USADA 2024 update). Proces TUE możliwy dla użycia out-of-competition przy istniejącym wcześniej rozpoznaniu niedoczynności tarczycy.",
  "onsetTime": "Wzrost tempa metabolizmu 24-48 godzin; efekt utraty tłuszczu 1-2 tygodnie; steady-state 7 dni",
  "halfLife": "~24 godziny",
  "interactionsWith": [
    "levothyroxine",
    "clenbuterol",
    "mirabegron",
    "warfarin"
  ],
  "aromatization": "Nie aromatyzuje — hormon tarczycy, NIE jest sterydem; brak interakcji z CYP19. Oś estrogenowa pozostaje bezpośrednio nienaruszona, ale na T3 udokumentowano pośredni wzrost SHBG (Klein 2001 PMID 11257082), powodujący spadek wolnego testosteronu.",
  "hepatotoxicity": "Niska — przedawkowanie tarczycowe wywołuje zespół hipertyreozy (arytmia serca, hipertermia, skrajna utrata masy ciała), NIE bezpośrednią toksyczność wątrobową. Wzrost ALT jest rzadki i udokumentowany w literaturze klinicznej tylko przy przedawkowaniu jatrogennym.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS, hormon tarczycy)",
  "bindingAffinity": "Receptor jądrowy TR-α + TR-β Ki ~50-100 pM (wysokie powinowactwo, ~10x silniejsze niż T4).",
  "detectionWindow": "Wykrywanie LC-MS/MS w moczu przez laboratoria akredytowane przez WADA przez 1-2 tygodnie przy dawce przewlekłej (T3 + wzorzec supresji endogennego TSH). Steady-state w ciągu 7 dni.",
  "benefits": [
    "Bezpośrednia upregulacja mitochondrialnej β-oksydacji + wzrost gęstości Na/K-ATP-azy w mięśniach szkieletowych",
    "Wzrost spoczynkowego wydatku energetycznego (REE) o 10-30% zależnie od dawki",
    "Równowaga zachowania mięśni i utraty tłuszczu w cuttingu w kombinacji z AAS",
    "70-letnia baza dowodów klinicznych w Rx na niedoczynność tarczycy",
    "Szybka kinetyka on/off (24-godzinne t1/2) → łatwiejsza titracja niż T4",
    "Bunevicius 1999 NEJM ulga w objawach poznawczych przy monoterapii T4 z dodatkiem T3 (kontrowersyjna replikacja Stott 2017)"
  ],
  "quickStart": [
    "Start cyklu 12.5 μg AM, po 7 dniach titracja do 25 μg",
    "Krok titracji 12.5 μg/tydzień, maks 75 μg/dobę dla off-label cuttingu",
    "Długość cyklu MAX 4-6 tygodni, potem 2-4 tygodnie stopniowej redukcji (NIE nagłe odstawienie)",
    "Współpodawanie beta-blokera (propranolol) na łagodzenie tachykardii i drżenia",
    "Przed cyklem: baseline TSH + wolne-T3 + wolne-T4 + EKG",
    "Bloodwork mid-cycle: 4-tygodniowa kontrola TSH + wolne-T3 + wolne-T4 + odwrotne-T3 + panel lipidowy",
    "Anti-TPO + Tg-AB jako screening przed cyklem (Hashimoto autoimmunologiczne przeciwwskazanie)"
  ],
  "expectations": [
    {
      "label": "1. tydzień",
      "body": "Dawka początkowa 12.5-25 μg AM. Łagodne drżenie, lekko podwyższone tętno (+5-10 bpm), lekko obniżona tolerancja ciepła. Supresja endogennego TSH się zaczyna (mierzalna po 4-7 dniach)."
    },
    {
      "label": "2-3. tydzień",
      "body": "Titracja do 50 μg. Subiektywne tempo utraty tłuszczu +0.5-0.8 kg/tydzień (przy deficycie kalorycznym + stacku AAS). Wzrost REE mierzalny. Bez deficytu kalorycznego + treningu oporowego utrata mięśni wynosi ~10-15% (Sjöblom 2008 kontekst analogiczny PMID 18091025)."
    },
    {
      "label": "4-6. tydzień + redukcja",
      "body": "Pod koniec cyklu obowiązkowa stopniowa redukcja: 75 → 50 → 25 → 12.5 μg w ciągu 2-4 tygodni. Nagłe odstawienie wiąże się z ryzykiem rebound-hipotyreozy + spadkiem REE. Powrót endogennego TSH w ciągu 4-8 tygodni po cyklu (dłużej po przewlekłym >100 μg)."
    }
  ],
  "quality": {
    "pure": [
      "Tabletka Cytomel zatwierdzona przez FDA (Pfizer) lub generyczna Liothyronine (USA) — źródło farmaceutyczne gwarantuje zawartość substancji czynnej",
      "W UE tylko brand Cytomel (Pfizer) Rx, generyki ograniczone",
      "Compounding UGL Liothyronine z fiolek udokumentowany przy wariancji dawki ±30%"
    ],
    "caution": [
      "Zespół hipertyreozy przy przedawkowaniu: tachykardia, hipertermia, lęk, bezsenność, skrajna utrata masy ciała — zalecane odstawienie",
      "Współpodawanie beta-blokera (propranolol) na łagodzenie tachykardii i drżenia",
      "Monitorowanie układu sercowo-naczyniowego: tętno spoczynkowe + BP cotygodniowo, EKG baseline + 4-tygodniowa kontrola",
      "Utrata gęstości kości udokumentowana przy długotrwałej dawce przewlekłej (>50 μg/dobę >1 rok, ryzyko osteoporozy)",
      "Lęk + drażliwość jako subiektywne efekty uboczne zależne od dawki",
      "Ryzyko jatrogennej wtórnej hipotyreozy po cyklu >100 μg/dobę przewlekle przez 12+ tygodni"
    ],
    "avoid": [
      "Hashimoto autoimmunologiczna niedoczynność tarczycy — PRZECIWWSKAZANE (kliniczne dowody wzrostu miana anti-TPO + Tg-AB)",
      "Istniejąca arytmia serca (migotanie przedsionków, częstoskurcz komorowy) — bezwzględne przeciwwskazanie",
      "Choroba sercowo-naczyniowa (CAD, ciężka dławica) — względne przeciwwskazanie",
      "Cukrzyca typu 1 — względne przeciwwskazanie (T3 + insulina zaburza zarządzanie glukozą)",
      "Pheochromocytoma — bezwzględne przeciwwskazanie",
      "Ciąża (FDA kategoria A — Rx niedoczynności tarczycy w ciąży legitymne, off-label cutting NIE)"
    ]
  },
  "interactions": [
    "Levothyroxine (T4) — protokół stack cuttingu, dawkowanie dostosowywane osobno",
    "Warfaryna — T3 nasila działanie przeciwzakrzepowe, wymagane monitorowanie INR",
    "Insulina + doustne hipoglikemizujące — T3 zwiększa metabolizm glukozy, ryzyko hipoglikemii podczas titracji",
    "Beta-bloker (propranolol + atenolol) — łagodzi tachykardię i drżenie, może maskować sygnały toksyczności T3",
    "Clenbuterol + Mirabegron + efedryna — addycyjny stres sercowy, wysokie HR + wzrost BP",
    "Doustne suplementy wapnia + żelaza — zmniejszają wchłanianie T3 (zalecany odstęp 4-godzinny)"
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
      "q": "T3 vs T4 w cuttingu — który jest bezpieczniejszy?",
      "a": "T4 ma wolniejszą kinetykę on/off (~7-dniowe t1/2), więc zmiana steady-state trwa 4-6 tygodni, titracja dawki jest bardziej stabilna a ryzyko jatrogennej hipertyreozy niższe. T3 jest szybko działająca (~24-godzinne t1/2), ale powoduje nagłą supresję endogennego TSH, dając wyższe ryzyko jatrogennej wtórnej hipotyreozy po cyklu. W protokołach cuttingu tradycyjnie dominuje T3 (szybszy wzrost tempa metabolizmu), ale wolniejsza titracja T4 jest bezpieczniejsza w dłuższym horyzoncie. 4-6 tygodniowy cykl T3 75 μg/dobę to typowy pure-cutting, ale baseline TSH + wolne-T3 + wolne-T4 przed cyklem jest obowiązkowy."
    },
    {
      "q": "Czy supresja endogennego TSH jest odwracalna?",
      "a": "Tak, zależnie od dawki. Cykl <50 μg/dobę przez 4-6 tygodni typowo regeneruje się 4-8 tygodni (TSH normalizuje się do zakresu 0.5-2.5 mIU/L). Cykl >100 μg/dobę przez 12+ tygodni niesie potencjalnie trwałe ryzyko wtórnej hipotyreozy (atrofia wywołana chroniczną supresją endogennej osi tarczycy). Stopniowa redukcja na końcu cyklu jest obowiązkowa (75 → 50 → 25 → 12.5 μg w ciągu 2-4 tygodni), nagłe odstawienie wiąże się z ryzykiem rebound-hipotyreozy + spadku REE."
    },
    {
      "q": "Ile mięśni można stracić przy deficycie kalorycznym na cyklu T3 + AAS?",
      "a": "Przy stacku AAS + odpowiednim spożyciu białka (2.0-2.5 g/kg/dobę) + treningu oporowym udokumentowano ~5-10% utratę masy beztłuszczowej w 6-tygodniowym cyklu (kontekst analogiczny). Bez AAS sama T3 w deficycie kalorycznym może spowodować ~10-20% utratę masy beztłuszczowej, ponieważ T3 samodzielnie wywiera działanie protein-kataboliczne przy wyższych dawkach. Sjöblom 2008 PMID 18091025 udokumentował udział utraty mięśni na poziomie RCT w kontekście analogicznym przy Rx niedoczynności tarczycy. Bezpośrednich dowodów specyficznych dla T3 w cuttingu brak (etyka badań nie pozwala)."
    },
    {
      "q": "Czy pacjent z Hashimoto autoimmunologiczną hipotyreozą może używać T3?",
      "a": "W kontekście klinicznego Rx z Hashimoto + niedoczynnością tarczycy T4 (Levothyroxine) jest leczeniem pierwszej linii, dodatek T3 tylko z rozważenia ulgi w objawach poznawczych wg Bunevicius 1999 NEJM. W kontekście off-label cuttingu Hashimoto jest PRZECIWWSKAZANE — dowody kliniczne wzrostu miana anti-TPO + Tg-AB (Saglam 2013 PMID 23612648) podnoszą ryzyko zaostrzenia autoimmunologicznego. Screening anti-TPO + anti-Tg przed cyklem jest obowiązkowy przed off-label cuttingiem."
    },
    {
      "q": "WADA in-competition vs out-of-competition?",
      "a": "T3 (Liothyronine) S4.5 modulator hormonów tarczycy, in-competition zakazana (NADA Szwajcaria 2023 explicit, USADA 2024 update). Out-of-competition użycie z istniejącym wcześniej rozpoznaniem niedoczynności tarczycy możliwe przez legitymny proces TUE. Eligibility do testu: laboratorium akredytowane przez WADA LC-MS/MS okno wykrywalności 1-2 tygodnie przy dawce przewlekłej, wzorzec supresji endogennego TSH jako wskaźnik pośredni. T4 (Levothyroxine) jest w kategorii S0 'dozwolone ALE z wymogiem TUE' przy legitymnym Rx niedoczynności tarczycy."
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
    "unit": "μg/dobę",
    "note": "Kliniczne Rx niedoczynności tarczycy 25-50 μg/dobę (niska titracja). Off-label cutting 25-75 μg/dobę PO AM, titracja 12.5 μg/tydzień. Długość cyklu MAX 4-6 tygodni, stopniowa redukcja obowiązkowa (75 → 50 → 25 → 12.5 μg w 2-4 tygodnie). Przed cyklem baseline TSH + wolne-T3 + wolne-T4 + EKG; mid-cycle 4-tygodniowa kontrola + post-cycle 4-tygodniowa + 8-tygodniowa kontrola regeneracji."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed startem cyklu",
      "markers": "TSH, wolne-T3, wolne-T4, odwrotne-T3, anti-TPO + Tg-AB (screening Hashimoto), 12-odprowadzeniowe EKG, BP + tętno spoczynkowe, panel lipidowy (TC/LDL/HDL/TG)",
      "purpose": "Screening istniejącej niedoczynności tarczycy / przeciwwskazania Hashimoto, baseline sercowo-naczyniowy, baseline funkcji osi tarczycy"
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "2 + 4 tygodnie po starcie cyklu",
      "markers": "TSH (często <0.1 mIU/L jako marker supresji), wolne-T3, wolne-T4 (spada wraz z supresją konwersji), odwrotne-T3, panel lipidowy, BP + HR home-tracking cotygodniowy",
      "purpose": "Stopień supresji TSH jako sygnał titracji dawki; panel lipidowy jako sygnał sercowo-naczyniowy (T3 obniża LDL, ale wysokie HR jest kardiotoksyczne)"
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "2 + 4 + 8 tygodni po końcu cyklu",
      "markers": "TSH (powrót do zakresu 0.5-2.5 mIU/L), wolne-T3, wolne-T4, odwrotne-T3, follow-up anti-TPO (detekcja autoimmunologicznego zaostrzenia), home-tracking BP + HR",
      "purpose": "Weryfikacja regeneracji endogennej osi tarczycy. Po przewlekłym >100 μg/dobę przez 12+ tygodni potencjalnie trwała wtórna hipotyreoza — konsultacja endokrynologa wymagana jeśli TSH >5 mIU/L po 8 tygodniach"
    },
    "cruise": {
      "label": "Długoterminowo (kliniczne Rx niedoczynności tarczycy)",
      "timing": "Przy indykacji klinicznej rocznie / co pół roku",
      "markers": "TSH (Rx target 0.5-2.5 mIU/L), wolne-T3, wolne-T4, doroczny DEXA-scan gęstości kości (ryzyko osteoporozy przy długotrwałej wysokiej dawce), monitorowanie rytmu EKG",
      "purpose": "Długoterminowe Rx-monitoring klinicznej niedoczynności tarczycy, NIE kontekst off-label cuttingu"
    }
  }
}
