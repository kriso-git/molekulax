// Sobetirome (GC-1) – szelektív TRβ-agonista thyromimetikum, vizsgálati vegyület.
// Studies: Valcárcel-Hernández 2023 Thyroid PMID 36792926,
// Bohlen 2023 Brain PMID 37068912, Mészáros 2024 Eur J Neurosci PMID 38086536.
// INVESTIGATIONAL – nem jóváhagyott gyógyszer, research-chemical piacon kapható.

export default {
  "id": "sobetirome",
  "sideEffects": [
    { "hu": "Vizsgálati vegyület korlátozott humán biztonsági adattal: csak lezárt Phase 1 (~2008), a metabolikus indikációra Phase 2 nem zajlott, így a mellékhatás-profil hiányosan jellemzett.", "en": "Investigational compound with limited human safety data: only a closed Phase 1 (~2008), no Phase 2 for the metabolic indication, so the side-effect profile is poorly characterized.", "pl": "Związek badawczy z ograniczonymi danymi o bezpieczeństwie u ludzi: tylko zamknięta faza 1 (~2008), brak fazy 2 dla wskazania metabolicznego, więc profil działań niepożądanych jest słabo scharakteryzowany." },
    { "hu": "HPT-tengely (hypothalamus-hypophysis-pajzsmirigy) szuppressziója: a thyromimetikus jelátvitel visszaszoríthatja a TSH-t és a saját pajzsmirigyhormon-termelést.", "en": "HPT-axis (hypothalamus-pituitary-thyroid) suppression: thyromimetic signaling can downregulate TSH and the body's own thyroid hormone production.", "pl": "Supresja osi HPT (podwzgórze-przysadka-tarczyca): sygnalizacja tyreomimetyczna może obniżyć TSH i własną produkcję hormonów tarczycy." },
    { "hu": "Pajzsmirigyhormon-túlsúly (thyrotoxikózis-szerű) tünetek túladagolásnál: szapora szívverés, szívdobogásérzés, izzadás, hőintolerancia, ingerlékenység, súlyvesztés, jóllehet a TRβ-szelektivitás célja épp a kardiális TRα kímélése.", "en": "Thyroid hormone excess (thyrotoxicosis-like) symptoms on overdose: palpitations, tachycardia, sweating, heat intolerance, irritability, weight loss, even though TRβ-selectivity aims to spare cardiac TRα.", "pl": "Objawy nadmiaru hormonów tarczycy (przypominające tyreotoksykozę) przy przedawkowaniu: kołatanie serca, tachykardia, pocenie, nietolerancja ciepła, drażliwość, utrata masy, mimo że selektywność TRβ ma oszczędzać sercowe TRα." },
    { "hu": "Magas dózisnál csont- és izomvesztés kockázata: a tartós pajzsmirigyhormon-túlsúly ismert hatása a csontvesztés (osteoporosis) és az izomkatabolizmus; a Sobetiromnál ezt humán hosszú-távú adat nem zárta ki.", "en": "Risk of bone and muscle loss at high doses: chronic thyroid hormone excess is a known driver of bone loss (osteoporosis) and muscle catabolism; long-term human data have not excluded this for sobetirome.", "pl": "Ryzyko utraty kości i mięśni przy wysokich dawkach: przewlekły nadmiar hormonów tarczycy to znana przyczyna utraty kości (osteoporoza) i katabolizmu mięśni; długoterminowe dane u ludzi nie wykluczyły tego dla sobetiromu." },
    { "hu": "Lehetséges thyromimetikus mellékhatások a Phase 1 keretén kívül feltérképezetlenek: fáradtság, hangulati ingadozás, GI-tünetek (hasmenés), amelyek a pajzsmirigyhormon-anyagcsere felgyorsításával társulhatnak.", "en": "Possible thyromimetic side effects uncharacterized beyond Phase 1: fatigue, mood changes, GI symptoms (diarrhea) that can accompany accelerated thyroid-hormone-driven metabolism.", "pl": "Możliwe działania tyreomimetyczne nieokreślone poza fazą 1: zmęczenie, wahania nastroju, objawy żołądkowo-jelitowe (biegunka), które mogą towarzyszyć przyspieszonemu metabolizmowi zależnemu od hormonów tarczycy." },
    { "hu": "Research-chemical eredetű termék kontaminációs és aluldozírozás/túldozírozás kockázata: az FDA + EMA sosem hagyta jóvá, így gyógyszerészeti minőség nem létezik; a deklarált tartalom HPLC-igazolatlan lehet.", "en": "Contamination and under/over-dosing risk from research-chemical sourcing: never FDA/EMA approved, so no pharmaceutical-grade product exists; declared content may be HPLC-unverified.", "pl": "Ryzyko zanieczyszczenia oraz zaniżenia/zawyżenia dawki przy zakupie jako research-chemical: nigdy niezatwierdzony przez FDA/EMA, więc nie istnieje jakość farmaceutyczna; deklarowana zawartość może być niezweryfikowana HPLC." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a pajzsmirigyhormon-jelátvitel kritikus a magzati és csecsemő-fejlődésben (kiemelten az idegrendszer), a zavarása teratogén/fejlődési kockázatot hordoz, ezért abszolút kerülendő.", "en": "Pregnancy and breastfeeding: thyroid hormone signaling is critical for fetal and infant development (especially the nervous system); disrupting it carries teratogenic/developmental risk, so it must be strictly avoided.", "pl": "Ciąża i karmienie piersią: sygnalizacja hormonów tarczycy jest kluczowa dla rozwoju płodu i niemowlęcia (zwłaszcza układu nerwowego); jej zaburzenie niesie ryzyko teratogenne/rozwojowe, dlatego należy bezwzględnie unikać." },
    { "hu": "Bármilyen pajzsmirigy-betegség (hyper- vagy hypothyreosis, Graves, csomós golyva) orvosi felügyelet nélkül: a thyromimetikus terhelés kiszámíthatatlanul befolyásolja a tengelyt.", "en": "Any thyroid disease (hyper- or hypothyroidism, Graves', nodular goiter) without medical supervision: the thyromimetic load affects the axis unpredictably.", "pl": "Jakakolwiek choroba tarczycy (nad- lub niedoczynność, Gravesa-Basedowa, wole guzkowe) bez nadzoru lekarza: obciążenie tyreomimetyczne nieprzewidywalnie wpływa na oś." },
    { "hu": "Pre-existing szív- és érrendszeri betegség (arrhythmia, koszorúér-betegség, szívelégtelenség): bár a TRβ-szelektivitás célja a kardiális TRα kímélése, a humán hosszú-távú szívbiztonsági adat hiányos.", "en": "Pre-existing cardiovascular disease (arrhythmia, coronary artery disease, heart failure): although TRβ-selectivity aims to spare cardiac TRα, long-term human cardiac safety data are lacking.", "pl": "Istniejąca choroba sercowo-naczyniowa (arytmia, choroba wieńcowa, niewydolność serca): choć selektywność TRβ ma oszczędzać sercowe TRα, brakuje długoterminowych danych o bezpieczeństwie sercowym u ludzi." },
    { "hu": "Osteoporosis vagy magas csonttörés-kockázat: a pajzsmirigyhormon-túlsúly fokozza a csontvesztést, ami ezeknél a betegeknél súlyosbodhat.", "en": "Osteoporosis or high fracture risk: thyroid hormone excess accelerates bone loss, which can worsen in these patients.", "pl": "Osteoporoza lub wysokie ryzyko złamań: nadmiar hormonów tarczycy przyspiesza utratę kości, co u tych pacjentów może się nasilić." },
    { "hu": "Egyidejű pajzsmirigyhormon-szubsztitúció (levothyroxine/T4 vagy liothyronine/T3): additív TRβ-jelátvitel és hyperthyreoid kockázat, kombináció csak szoros orvosi felügyelettel és pajzsmirigy-monitorozással (TSH, fT3, fT4).", "en": "Concurrent thyroid hormone replacement (levothyroxine/T4 or liothyronine/T3): additive TRβ signaling and hyperthyroid risk; combine only under close medical supervision with thyroid monitoring (TSH, fT3, fT4).", "pl": "Jednoczesne leczenie substytucyjne hormonami tarczycy (lewotyroksyna/T4 lub liotyronina/T3): addytywna sygnalizacja TRβ i ryzyko nadczynności; łączyć wyłącznie pod ścisłym nadzorem lekarza z monitorowaniem tarczycy (TSH, fT3, fT4)." },
    { "hu": "Versenysport-aktív sportoló: bár a Sobetirome nincs explicit a WADA-tiltólistán, a nem-jóváhagyott státusz miatt az 'S0 catch-all non-approved substance' klauzula érvényesíthető, NADA-konzultáció ajánlott.", "en": "Competitive athletes: although sobetirome is not explicitly on the WADA prohibited list, the non-approved status can trigger the 'S0 catch-all non-approved substance' clause; NADA consultation advised.", "pl": "Sportowcy wyczynowi: choć sobetirom nie jest wprost na liście zabronionej WADA, status niezatwierdzony może uruchomić klauzulę 'S0 catch-all substancji niezatwierdzonych'; zalecana konsultacja z NADA." }
  ],
  "name": "Sobetirome (GC-1)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#14b8a6",
  "tagColor": "rgba(20,184,166,0.18)",
  "shortDesc": "Orálisan aktív, szelektív pajzsmirigyhormon-receptor béta (TRβ) agonista thyromimetikum (kutatási kód: GC-1). Szelektíven kötődik a TRβ-1-hez (EC50 ~0.16 μM), kíméli a szívizom TRα-t, a T3 kedvező metabolikus/lipid-hatásait célozza a tipikus hyperthyreoid szívmellékhatások nélkül. INVESTIGATIONAL: Phase 1 lezárva (~2008), Phase 2 a metabolikus indikációra NEM zajlott.",
  "description": "A Sobetirome (kutatási kód: GC-1) egy orálisan aktív, szelektív pajzsmirigyhormon-receptor béta (TRβ) agonista – egy úgynevezett thyromimetikum. Szelektíven kötődik a TRβ-1 receptorhoz (EC50 ~0.16 μM), miközben kíméli a szívizomban domináló TRα receptort. Ennek a szelektivitásnak köszönhetően a Sobetirome a pajzsmirigyhormon (T3) kedvező metabolikus és lipid-csökkentő hatásait próbálja utánozni a tipikus hyperthyreoid (pajzsmirigy-túlműködéses) szívmellékhatások nélkül. Klinikai státusz: a Sobetirome lezárt Phase 1 vizsgálatokat (~2008), amelyek lipidcsökkentő hatást mutattak egyszeri és többszöri adagolás mellett egyaránt; a metabolikus indikációra Phase 2 NEM zajlott. A vegyületet a dyslipidaemia és a NASH/MASH (zsírmáj) területén más TRβ-agonisták – resmetirom (MGL-3196), VK2809, eprotirome – mellett vizsgálták. Dokumentált hatások: csökkenti az LDL-koleszterint és a lipoprotein(a)-t, és primát preklinikai vizsgálatokban stimulálja a reverz koleszterin-transzport lépéseit. Modulálja a koleszterin- és zsírsav-bioszintézis/anyagcsere génjeit. Zsírvesztési relevancia: egy TRβ-szelektív thyromimetikum a teljes T3-nál biztonságosabban emeli a hepatikus lipid-kezelést és az anyagcsere-rátát (lipid-oxidáció). A molekula egy CNS-penetráns prodrug-ja, a Sob-AM2, myelin/CNS-indikációkra is vizsgálat alatt áll (X-kromoszómához kötött adrenoleukodystrophia, demyelinizáció, MCT8-deficiencia) – azaz a TRβ-agonizmust a metabolizmuson túl is feltérképezték. STÁTUSZ-KERET: vizsgálati / kutatási vegyület, NEM jóváhagyott gyógyszer; a research-chemical piacon kapható label-claim/tisztasági fenntartásokkal. Őszintén a thyromimetikus kockázatokról: a HPT-tengely (hypothalamus-hypophysis-pajzsmirigy) szuppressziója, magas dózisnál potenciális csont/izom-hatások, és NEM ajánlott pajzsmirigy-betegségben szenvedőknek orvosi felügyelet nélkül.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Szelektív TRβ-agonista thyromimetikum (pajzsmirigyhormon-receptor béta), kíméli a szívizom TRα-t"
    },
    {
      "label": "Kötési szelektivitás",
      "value": "TRβ-1 EC50 ~0.16 μM (szelektív vs. szívizom TRα)"
    },
    {
      "label": "Klinikai státusz",
      "value": "Phase 1 lezárva (~2008, lipidcsökkentő hatás); Phase 2 a metabolikus indikációra NEM zajlott"
    },
    {
      "label": "Dokumentált hatások",
      "value": "LDL-koleszterin + lipoprotein(a) csökkentés, reverz koleszterin-transzport stimulálás (primát preklinikai)"
    },
    {
      "label": "Jogi státusz",
      "value": "Vizsgálati / kutatási vegyület, NEM jóváhagyott gyógyszer (FDA + EMA never approved); research-chemical piacon kapható"
    }
  ],
  "mechanism": "A Sobetirome (GC-1) egy szelektív pajzsmirigyhormon-receptor béta (TRβ) agonista. A pajzsmirigyhormon-receptornak két fő izoformája van: a TRα (a szívizomban domináns, a kardiális hatásokért – pl. szívfrekvencia – felelős) és a TRβ (a májban és a metabolikus szövetekben domináns, a lipid-anyagcseréért felelős). A Sobetirome szelektíven kötődik a TRβ-1 receptorhoz (EC50 ~0.16 μM), miközben kíméli a TRα-t – ezért nevezik thyromimetikumnak: a pajzsmirigyhormon (T3) kedvező metabolikus hatásait utánozza a hyperthyreoid szívmellékhatások nélkül. A TRβ-aktiváció a májban modulálja a koleszterin- és zsírsav-bioszintézis/anyagcsere génjeit, csökkenti az LDL-koleszterint és a lipoprotein(a)-t, és primát preklinikai vizsgálatokban stimulálja a reverz koleszterin-transzport lépéseit. A zsírvesztési relevancia ezen alapul: a TRβ-szelektív agonizmus emeli a hepatikus lipid-kezelést és az anyagcsere-rátát (lipid-oxidáció), elviekben biztonságosabban, mint a teljes (nem-szelektív) T3. A vegyület egy CNS-penetráns prodrug-ja, a Sob-AM2, a myelin/CNS-indikációkban (X-kromoszómához kötött adrenoleukodystrophia, demyelinizáció, MCT8-deficiencia) is feltérképezte a TRβ-agonizmust a metabolizmuson túl. KRITIKUS: a Sobetirome lezárt Phase 1 vizsgálatokat (~2008), de a metabolikus indikációra Phase 2 NEM zajlott, így a hosszú-távú humán hatás- és biztonsági adatok korlátozottak.",
  "legalStatus": "USA: FDA never approved (vizsgálati vegyület, lezárt Phase 1 ~2008 után a metabolikus indikációra Phase 2 nem zajlott). EU + EMA: never approved. HU + PL: nincs törzskönyvezve. A Sobetirome NEM jóváhagyott gyógyszer; a research-chemical piacon kapható label-claim/tisztasági fenntartásokkal. WADA: NEM-listán explicit, így technikailag 'allowed' kategória – DE a kutatási / nem-jóváhagyott státusz miatt a 'S0 catch-all non-approved substance' clause potenciálisan érvényesíthető versenysport-aktív sportolón, ezért NADA-konzultáció ajánlott.",
  "onsetTime": "Phase 1 vizsgálatokban a lipidcsökkentő hatás többszöri adagolás mellett dokumentált; pontos humán hatáskezdet a metabolikus indikációra korlátozottan jellemzett (Phase 2 nem zajlott)",
  "halfLife": "Humán PK korlátozottan publikált (Phase 1 ~2008); pontos felezési idő a nyilvános metabolikus-indikációs adatokban nem részletezett",
  "interactionsWith": [
    "levothyroxine",
    "liothyronine",
    "slu-pp-915",
    "atx-304"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag – szelektív TRβ-agonista thyromimetikum). Nincs CYP19-interakció.",
  "hepatotoxicity": "A thyromimetikumok általában nem közvetlenül hepatotoxikusak, és a TRβ-agonizmus a májban javíthatja a hepatikus steatosist (zsírmáj) – ezért vizsgálták a Sobetiromet és más TRβ-agonistákat a NASH/MASH területén. DE a TRβ túlstimulációjának elviek szintjén vannak kockázatai, és a hosszú-távú humán adatok a Sobetiromnál korlátozottak (a metabolikus indikációra Phase 2 nem zajlott) – ezt őszintén jelezni kell.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, szelektív TRβ-agonista thyromimetikum)",
  "bindingAffinity": "Szelektíven kötődik a TRβ-1 receptorhoz EC50 ~0.16 μM értékkel, kíméli a szívizomban domináló TRα receptort.",
  "detectionWindow": "WADA-akkreditált detektálás-protokoll NEM kifejezetten szabályozott (Sobetirome NEM-listán explicit). Out-of-competition LC-MS/MS lehetséges a 'S0 catch-all' kategória keretében.",
  "benefits": [
    "Szelektív TRβ-agonizmus: a T3 kedvező metabolikus/lipid-hatásait célozza a tipikus hyperthyreoid szívmellékhatások nélkül (kíméli a szívizom TRα-t)",
    "Phase 1 vizsgálatokban dokumentált lipidcsökkentő hatás (egyszeri és többszöri adagolás)",
    "LDL-koleszterin és lipoprotein(a) csökkentés",
    "Reverz koleszterin-transzport lépéseinek stimulálása (primát preklinikai vizsgálatokban)",
    "Koleszterin- és zsírsav-bioszintézis/anyagcsere génjeinek modulálása; hepatikus lipid-kezelés + anyagcsere-ráta (lipid-oxidáció) emelése",
    "DE: a metabolikus indikációra Phase 2 NEM zajlott – a benefit-list nem jóváhagyott klinikai indikáción alapul, INVESTIGATIONAL keret"
  ],
  "quickStart": [
    "INVESTIGATIONAL / kutatási vegyület – NEM jóváhagyott gyógyszer (FDA + EMA never approved), a metabolikus indikációra Phase 2 nem zajlott",
    "Research-chemical piacon kapható, label-claim/tisztasági fenntartásokkal – a deklarált tartalom HPLC-untested lehet",
    "Thyromimetikum: szuppresszálhatja a HPT-tengelyt (pajzsmirigy-tengely), magas dózisnál potenciális csont/izom-hatások",
    "NEM ajánlott pajzsmirigy-betegségben szenvedőknek orvosi felügyelet nélkül; pajzsmirigy-funkció (TSH, fT3, fT4) monitorozása indokolt"
  ],
  "quality": {
    "pure": [
      "FDA + EMA never approved – Rx-pharmacy-szourzott Sobetirome NEM létezik",
      "Research-chemical piacon kapható, label-claim/tisztasági fenntartásokkal (HPLC-untested content magas)",
      "A research-chemical batch tisztasága és tényleges hatóanyag-tartalma nem garantált; független HPLC-tisztaság-igazolás indokolt"
    ],
    "caution": [
      "INVESTIGATIONAL status – a metabolikus indikációra Phase 2 nem zajlott, hosszú-távú humán hatás- és biztonsági adatok korlátozottak",
      "Thyromimetikus kockázat: a HPT-tengely (hypothalamus-hypophysis-pajzsmirigy) szuppressziója",
      "Magas dózisnál potenciális csont- és izom-hatások (a pajzsmirigyhormon-túlsúly ismert kockázatai)"
    ],
    "avoid": [
      "Pajzsmirigy-betegség (hyper- vagy hypothyreosis) orvosi felügyelet nélkül – abszolút óvatosság",
      "Pre-existing szívbetegség (bár a TRβ-szelektivitás kíméli a TRα-t, a humán hosszú-távú adat korlátozott)",
      "Pregnancy + szoptatás (a pajzsmirigyhormon-jelátvitel kritikus a magzati fejlődésben)",
      "Versenysport-aktív sportoló – WADA 'S0 catch-all non-approved substance' kategória potenciálisan érvényesíthető",
      "Online research-chemical Sobetirome label-claim-discrepancy + HPLC-untested-batch kockázattal"
    ]
  },
  "interactions": [
    "Levothyroxine (T4) – pajzsmirigyhormon-szubsztitúció; a thyromimetikum additív TRβ-jelátvitelt ad, a HPT-tengely + TSH monitorozása indokolt, kombináció csak orvosi felügyelettel",
    "Liothyronine (T3) – aktív pajzsmirigyhormon; átfedő TR-agonizmus, additív thyromimetikus hatás + hyperthyreoid kockázat, kombináció nem ajánlott felügyelet nélkül",
    "SLU-PP-915 – metabolikus/anyagcsere-irányú vegyület, kutatási kontextus; klinikai kombinációs adat nincs",
    "ATX-304 – metabolikus/anyagcsere-irányú vegyület, kutatási kontextus; klinikai kombinációs adat nincs"
  ],
  "studies": [
    {
      "title": "Maternal Administration of the CNS-Selective Sobetirome Prodrug Sob-AM2 Exerts Thyromimetic Effects in Murine MCT8-Deficient Fetuses",
      "authors": "Valcárcel-Hernández V, Guillén-Yunta M, Scanlan TS, Bárez-López S et al.",
      "journal": "Thyroid. 2023",
      "pmid": "36792926"
    },
    {
      "title": "Promyelinating drugs promote functional recovery in an autism spectrum disorder mouse model of Pitt-Hopkins syndrome",
      "authors": "Bohlen JF, Cleary CM, Das D, Sripathy SR et al.",
      "journal": "Brain. 2023",
      "pmid": "37068912"
    },
    {
      "title": "Sobetirome rescues α-synuclein-mediated demyelination in an in vitro model of multiple system atrophy",
      "authors": "Mészáros L, Himmler M, Schneider Y, Arnold P et al.",
      "journal": "Eur J Neurosci. 2024",
      "pmid": "38086536"
    }
  ],
  "faq": [
    {
      "q": "Mi az a thyromimetikum, és miért szelektív a Sobetirome a TRβ-re?",
      "a": "A thyromimetikum egy olyan vegyület, amely a pajzsmirigyhormon (T3) hatásait utánozza. A pajzsmirigyhormon-receptornak két fő izoformája van: a TRα (a szívizomban domináns, a kardiális hatásokért felelős) és a TRβ (a májban és a metabolikus szövetekben domináns, a lipid-anyagcseréért felelős). A Sobetirome (GC-1) szelektíven a TRβ-1 receptorhoz kötődik (EC50 ~0.16 μM), miközben kíméli a TRα-t. Ennek a szelektivitásnak a célja: megőrizni a T3 kedvező metabolikus és lipid-csökkentő hatásait, de elkerülni a tipikus hyperthyreoid szívmellékhatásokat (pl. szapora szívverés)."
    },
    {
      "q": "Mi a Sobetirome klinikai státusza – jóváhagyott gyógyszer?",
      "a": "NEM. A Sobetirome egy vizsgálati / kutatási vegyület, NEM jóváhagyott gyógyszer (sem az FDA, sem az EMA nem hagyta jóvá). Lezárt Phase 1 vizsgálatokat (~2008), amelyek lipidcsökkentő hatást mutattak egyszeri és többszöri adagolás mellett – de a metabolikus indikációra Phase 2 NEM zajlott. A research-chemical piacon kapható, label-claim/tisztasági fenntartásokkal. A hosszú-távú humán hatás- és biztonsági adatok korlátozottak."
    },
    {
      "q": "Milyen dokumentált metabolikus hatásai vannak?",
      "a": "A Sobetirome csökkenti az LDL-koleszterint és a lipoprotein(a)-t, és primát preklinikai vizsgálatokban stimulálja a reverz koleszterin-transzport lépéseit. Modulálja a koleszterin- és zsírsav-bioszintézis/anyagcsere génjeit. A vegyületet a dyslipidaemia és a NASH/MASH (zsírmáj) területén más TRβ-agonisták – resmetirom (MGL-3196), VK2809, eprotirome – mellett vizsgálták. A zsírvesztési relevancia abból ered, hogy a TRβ-szelektív agonizmus emeli a hepatikus lipid-kezelést és az anyagcsere-rátát (lipid-oxidáció), elviekben biztonságosabban, mint a teljes T3."
    },
    {
      "q": "Milyen kockázatai vannak, és kinek NEM ajánlott?",
      "a": "Bár a thyromimetikumok általában nem közvetlenül hepatotoxikusak (sőt a TRβ-agonizmus javíthatja a hepatikus steatosist), a TRβ túlstimulációjának elviek szintjén vannak kockázatai: szuppresszálhatja a HPT-tengelyt (pajzsmirigy-tengely), és magas dózisnál potenciális csont- és izom-hatásai lehetnek. A hosszú-távú humán adatok korlátozottak (Phase 2 nem zajlott). NEM ajánlott pajzsmirigy-betegségben szenvedőknek orvosi felügyelet nélkül; a pajzsmirigy-funkció (TSH, fT3, fT4) monitorozása indokolt. Versenysport-aktív sportolón a WADA 'S0 catch-all' kategória potenciálisan érvényesíthető."
    }
  ],
  "related": [
    "levothyroxine",
    "liothyronine",
    "slu-pp-915",
    "atx-304"
  ],
  "anecdote": "A Sobetiromet (GC-1) a közösségi beszámolók szelektív, 'kardiális-kíméletes' thyromimetikumként tartják számon, amelyet zsírvesztéshez és lipidprofil-javításhoz értékelnek – azzal a logikával, hogy a TRβ-szelektivitás célja megőrizni a pajzsmirigyhormon anyagcsere-gyorsító hatását a szapora szívverés és a klasszikus hyperthyreoid mellékhatások nélkül. Fontos kontextus: ez vizsgálati vegyület, NEM jóváhagyott gyógyszer, és a metabolikus indikációra Phase 2 nem zajlott – tehát a beszámolók nem helyettesítik a klinikai bizonyítékot. A research-chemical piacon a label-claim és a tisztaság nem garantált. Akit érdekel, annak a pajzsmirigy-funkció (TSH, fT3, fT4) monitorozása és orvosi felügyelet a felelős keret, különösen bármilyen pajzsmirigy-érintettség mellett."
}
