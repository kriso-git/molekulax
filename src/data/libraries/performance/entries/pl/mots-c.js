// MOTS-c — Peptyd pochodzenia mitochondrialnego (16 aminokwasów, kodowany w mtDNA
// 12S rRNA). Aktywator AMPK z preklinicznymi dowodami na homeostazę glukozy +
// uwrażliwianie na insulinę; wstępne dane z fazy 1/2 u ludzi. Źródła: Lee 2015
// Cell Metab PMID 25738457, Reynolds 2021 Sci Rep PMID 33526809, Kim 2018 Aging
// Cell PMID 30276962, Cobb 2016 PMID 27497587.

export default {
  "id": "mots-c",
  "sideEffects": [
    { "hu": "Hipoglikémia kockázata: AMPK-aktivátorként javítja az inzulinérzékenységet és inzulin-független glükózfelvételt fokoz, így vércukoresés léphet fel, főleg kalóriadeficitben vagy más antidiabetikummal (Metformin, inzulin, GLP-1) kombinálva.", "en": "Risk of hypoglycemia: as an AMPK activator it improves insulin sensitivity and drives insulin-independent glucose uptake, so blood sugar can drop, especially in a calorie deficit or combined with other antidiabetics (metformin, insulin, GLP-1).", "pl": "Ryzyko hipoglikemii: jako aktywator AMPK poprawia wrażliwość na insulinę i nasila niezależny od insuliny wychwyt glukozy, więc poziom cukru może spaść, zwłaszcza przy deficycie kalorycznym lub w połączeniu z innymi lekami przeciwcukrzycowymi (metformina, insulina, GLP-1)." },
    { "hu": "Injekció helyi reakciói: szubkután beadáskor bőrpír, érzékenység, viszketés vagy duzzanat a beadás helyén.", "en": "Local injection-site reactions: redness, tenderness, itching or swelling at the subcutaneous injection site.", "pl": "Miejscowe reakcje w miejscu wstrzyknięcia: zaczerwienienie, tkliwość, swędzenie lub obrzęk w miejscu podania podskórnego." },
    { "hu": "Gyomor-bélrendszeri panaszok: AMPK-aktiváló mechanizmusa a Metforminéhoz hasonló, így hányinger, puffadás vagy enyhe emésztési diszkomfort előfordulhat (anekdotikus, humán dózis-adat hiányos).", "en": "Gastrointestinal complaints: its AMPK-activating mechanism parallels metformin, so nausea, bloating or mild digestive discomfort may occur (anecdotal, human dosing data sparse).", "pl": "Dolegliwości żołądkowo-jelitowe: mechanizm aktywacji AMPK przypomina metforminę, więc mogą wystąpić nudności, wzdęcia lub łagodny dyskomfort trawienny (anegdotyczne, dane dawkowania u ludzi skąpe)." },
    { "hu": "Laktát-emelkedés és elméleti metabolikus acidózis kockázata: mitokondriális anyagcserét moduláló hatóanyagként a laktátszint emelkedhet; jelentős emelkedés esetén (>2x kiindulási) dóziscsökkentés vagy ciklusleállítás indokolt.", "en": "Lactate elevation and theoretical metabolic acidosis risk: as a modulator of mitochondrial metabolism it may raise lactate; a marked rise (>2x baseline) warrants dose reduction or stopping the cycle.", "pl": "Wzrost mleczanu i teoretyczne ryzyko kwasicy metabolicznej: jako modulator metabolizmu mitochondrialnego może podnosić poziom mleczanu; znaczny wzrost (>2x wartości wyjściowej) uzasadnia zmniejszenie dawki lub przerwanie cyklu." },
    { "hu": "Feltáratlan hosszú távú biztonsági profil: a humán adatok előzetes Phase 1/2 fázisban vannak, a teljes biztonsági profil 2026 elejéig nincs publikálva; szuprafiziológiás, hosszú távú dózis hatásai ismeretlenek.", "en": "Unknown long-term safety profile: human data are at a preliminary Phase 1/2 stage and the full safety profile is unpublished as of early 2026; effects of supraphysiological, long-term dosing are unknown.", "pl": "Nieznany długoterminowy profil bezpieczeństwa: dane u ludzi są na wstępnym etapie Phase 1/2, a pełny profil bezpieczeństwa nie został opublikowany na początku 2026; skutki suprafizjologicznego, długotrwałego dawkowania są nieznane." },
    { "hu": "Feketepiaci minőségi kockázat: az illegális UGL-vialek hamisítás, alulkdozírozás, degradált peptid és endotoxin-szennyezés kockázatát hordozzák; HPLC-tesztelt forrás és COA nélkül a tényleges tartalom és tisztaság bizonytalan.", "en": "Black-market quality risk: illicit UGL vials carry the risk of counterfeiting, underdosing, degraded peptide and endotoxin contamination; without an HPLC-tested source and COA the actual content and purity are uncertain.", "pl": "Ryzyko jakości z czarnego rynku: nielegalne fiolki UGL niosą ryzyko podrabiania, zaniżonej dawki, zdegradowanego peptydu i zanieczyszczenia endotoksynami; bez źródła testowanego HPLC i COA rzeczywista zawartość i czystość są niepewne." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a peptid kizárólag preklinikai adatokkal rendelkezik, teratogenitási adat nincs, így terhesség alatt és szoptatáskor kerülendő.", "en": "Pregnancy and breastfeeding: the peptide has only preclinical data with no teratogenicity information, so it should be avoided during pregnancy and lactation.", "pl": "Ciąża i karmienie piersią: peptyd dysponuje wyłącznie danymi przedklinicznymi, bez informacji o teratogenności, dlatego należy go unikać w ciąży i podczas karmienia." },
    { "hu": "Inzulinnal vagy szulfonilureával kezelt cukorbetegség: az inzulinérzékenyítő hatás additív, súlyos hipoglikémia kockázatával; szoros glükóz-monitorozás és orvosi felügyelet nélkül ellenjavallt.", "en": "Diabetes treated with insulin or a sulfonylurea: the insulin-sensitizing effect is additive with a risk of severe hypoglycemia; contraindicated without close glucose monitoring and medical supervision.", "pl": "Cukrzyca leczona insuliną lub pochodną sulfonylomocznika: efekt uwrażliwiający na insulinę jest addytywny, z ryzykiem ciężkiej hipoglikemii; przeciwwskazane bez ścisłego monitorowania glukozy i nadzoru lekarskiego." },
    { "hu": "Aktív rosszindulatú daganat: a mitokondriális biogenezist moduláló hatás proliferációra gyakorolt preklinikai adatai nem egyértelműek, ezért aktív malignitásban kerülendő (elméleti kockázat).", "en": "Active malignancy: the preclinical proliferation data of this mitochondrial-biogenesis modulator are inconclusive, so it should be avoided in active cancer (theoretical risk).", "pl": "Aktywny nowotwór złośliwy: przedkliniczne dane dotyczące wpływu tego modulatora biogenezy mitochondrialnej na proliferację są niejednoznaczne, dlatego należy go unikać przy aktywnej chorobie nowotworowej (ryzyko teoretyczne)." },
    { "hu": "Gyermek- és serdülőkor: nincs Phase 2 indikáció vagy biztonsági adat pediátriai használatra, ezért ellenjavallt.", "en": "Children and adolescents: there is no Phase 2 indication or safety data for pediatric use, so it is contraindicated.", "pl": "Dzieci i młodzież: brak wskazania Phase 2 lub danych bezpieczeństwa do zastosowania pediatrycznego, dlatego jest przeciwwskazany." },
    { "hu": "Laktátacidózisra hajlamosító állapotok (vese- vagy májelégtelenség, krónikus alkoholfogyasztás): az AMPK-aktivátor mechanizmus és a laktátemelő potenciál additív hepatikus/metabolikus terhelést jelenthet, ezért fokozott óvatosság vagy kerülés indokolt.", "en": "Conditions predisposing to lactic acidosis (renal or hepatic impairment, chronic alcohol use): the AMPK-activator mechanism and lactate-raising potential may add hepatic/metabolic stress, warranting heightened caution or avoidance.", "pl": "Stany predysponujące do kwasicy mleczanowej (niewydolność nerek lub wątroby, przewlekłe spożywanie alkoholu): mechanizm aktywatora AMPK i potencjał podnoszenia mleczanu mogą dodatkowo obciążać wątrobę/metabolizm, co uzasadnia wzmożoną ostrożność lub unikanie." },
    { "hu": "Ismert túlérzékenység a peptiddel vagy a rekonstituáló oldat összetevőivel szemben: helyi vagy ritkán szisztémás allergiás reakció léphet fel.", "en": "Known hypersensitivity to the peptide or to components of the reconstitution solution: local or, rarely, systemic allergic reactions may occur.", "pl": "Znana nadwrażliwość na peptyd lub składniki roztworu do rekonstytucji: mogą wystąpić miejscowe lub, rzadko, ogólnoustrojowe reakcje alergiczne." }
  ],
  "name": "MOTS-c",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Peptyd pochodzenia mitochondrialnego (16 aminokwasów, kodowany w 12S rRNA mtDNA), odkryty przez Lee 2015 Cell Metab PMID 25738457. Aktywator AMPK z preklinicznymi dowodami na homeostazę glukozy + uwrażliwianie na insulinę; ludzkie badania fazy 1/2 wstępne, efekt utraty tłuszczu subtelny.",
  "description": "MOTS-c (Mitochondrial Open Reading frame of the Twelve S rRNA-c) to peptyd o długości 16 aminokwasów odkryty przez laboratorium Lee/Pinchas Cohen (USC) w 2015 r. (Cell Metab PMID 25738457). Jego unikalną cechą jest to, że nie jest kodowany w genomie jądrowym, lecz w krótkiej otwartej ramce odczytu (sORF) mitochondrialnego genu 12S rRNA — co czyni go pierwszym szeroko scharakteryzowanym członkiem klasy peptydów pochodzenia mitochondrialnego (MDP). Funkcja endogenna: transducer sygnałów dysfunkcji mitochondrialnej do jądra (\"sygnalizacja retrograde\") poprzez aktywację AMPK, co podnosi wychwyt glukozy + upregulację oksydacji kwasów tłuszczowych w mięśniach szkieletowych. Kim 2018 Aging Cell PMID 30276962 wykazał na modelu mysim, że egzogenna administracja MOTS-c zapobiega indukowanej dietą wysokotłuszczową otyłości + insulinooporności i koryguje jej spadek zależny od wieku. Reynolds 2021 Sci Rep PMID 33526809 udokumentował indukowane ćwiczeniami podwyższenie endogennego MOTS-c w plazmie ludzkiej. Kliniczne badania fazy 1/2 u ludzi są w statusie wstępnym (pipeline CohBar Inc + Stealth BioTherapeutics 2024-2025), pełna publikacja oczekiwana w 2026 r. Off-label użycie cutting-cycle pojawiło się na czarnorynkowej scenie peptydowej od 2022 r., zwykle 5-10 mg SC 2-3x/tydzień. Efekty utraty tłuszczu u ludzi subtelne; mechanizm aktywatora AMPK jest pokrewny Metforminowi. MolekulaX NIE ma odpowiednika w bibliotece peptydów — to pierwszy wpis MOTS-c na stronie.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Peptyd pochodzenia mitochondrialnego (16 aa), aktywator AMPK, upregulacja wychwytu glukozy + oksydacji kwasów tłuszczowych"
    },
    {
      "label": "Dawkowanie (off-label)",
      "value": "5-10 mg SC 2-3x/tydzień, cykl 4-8 tygodni"
    },
    {
      "label": "Okres półtrwania",
      "value": "~1-2 godziny (SC IM, ekstrapolacja z myszy)"
    },
    {
      "label": "Czas początku działania",
      "value": "Ostra aktywacja AMPK 1-2 h; efekt metaboliczny 2-4 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "Tylko do celów badawczych — NIE jest Rx FDA / EMA w żadnej jurysdykcji. WADA NIE jawnie zakazany (ale ryzyko klauzuli S0 'substancja niezatwierdzona')."
    }
  ],
  "mechanism": "MOTS-c jest kodowany w krótkiej otwartej ramce odczytu (sORF) mitochondrialnego genu 12S rRNA, co czyni go pierwszym scharakteryzowanym peptydem pochodzenia mitochondrialnego (MDP) w momencie odkrycia (Lee 2015 Cell Metab PMID 25738457). Funkcjonalnie jest cząsteczką sygnalizacji retrograde: transducuje sygnały stresu metabolicznego mitochondriów do jądra poprzez aktywację AMPK (kinazy białkowej aktywowanej 5'-AMP). AMPK jest głównym komórkowym sensorem energii, aktywowanym przy niskim stosunku ATP/AMP, i przesuwa metabolizm komórkowy w kierunku katabolicznym (upregulacja oksydacji kwasów tłuszczowych + supresja de-novo lipogenezy + podniesienie wychwytu glukozy). MOTS-c moduluje oś AMPK poprzez cykl folianowy (mechanizm podobny do AICAR, Lee 2015). Efekty specyficzne dla mięśni szkieletowych: podniesienie translokacji GLUT4 → wychwyt glukozy niezależny od insuliny; upregulacja CPT-1 (palmitoilotransferazy karnitynowej I) → upregulacja mitochondrialnej β-oksydacji. Stabilność peptydu jest niska (~1-2 h t1/2 SC), stąd protokół dawkowania 2-3x/tydzień. Efekty centralne (modulacja apetytu w podwzgórzu) nie mają dowodów preklinicznych — efekt jest przede wszystkim obwodowy: mięśnie szkieletowe + wątroba.",
  "legalStatus": "USA: NIE zatwierdzony przez FDA, peptyd tylko do badań (Schedule N/A, ale nie autoryzowany do dystrybucji). UE: NIE zatwierdzony przez EMA. HU + PL: NIE zarejestrowany. Status badań fazy 1/2 u ludzi to pipeline CohBar Inc + Stealth BioTherapeutics 2024-2025, pełna publikacja oczekiwana 2026. WADA: NIE jawnie zakazany (lista klasy peptydów S2.1 GH/IGF-1 nie obejmuje kategorii peptydów pochodzenia mitochondrialnego), ALE obowiązuje ryzyko klauzuli S0 'substancja niezatwierdzona' (Lista zakazów WADA 2025 § S0).",
  "onsetTime": "Ostra aktywacja AMPK 1-2 h; efekt metaboliczny 2-4 tygodnie",
  "halfLife": "~1-2 godziny (SC, ekstrapolacja z myszy)",
  "interactionsWith": [
    "l-carnitine",
    "5-amino-1mq"
  ],
  "aromatization": "Nie aromatyzuje — peptyd mitochondrialny, nie spokrewniony ze sterydami. Brak interakcji z CYP19; oś estrogenowa pozostaje bezpośrednio nienaruszona.",
  "hepatotoxicity": "Niska — endogenny peptyd mitochondrialny; dowody na dawki suprafizjologiczne u ludzi są tylko prekliniczne. Podwyższenie ALT/AST nie zostało udokumentowane we wstępnych badaniach klinicznych, ale pełna publikacja fazy 2 oczekiwana w 2026 r.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/D (nie jest AAS, peptyd pochodzenia mitochondrialnego)",
  "bindingAffinity": "Cel receptorowy nie jest dobrze scharakteryzowany — aktywacja AMPK jest pośrednia, zależna od cyklu folianowego (Lee 2015 PMID 25738457). Brak bezpośredniego celu wiązania receptorowego; sygnalizacja zachodzi wewnątrzkomórkowo poprzez maszynerię importu mitochondrialnego.",
  "detectionWindow": "Akredytowane przez WADA LC-MS/MS wykrywalne w plazmie ludzkiej ~24-48 h po pojedynczej dawce (Reynolds 2021 PMID 33526809 endogenny MOTS-c assay baseline ~50-200 pg/mL). Egzogenne dawki suprafizjologiczne są odróżnialne od poziomu endogennego dzięki wzorowi izotopowemu mass-spec.",
  "benefits": [
    "Pierwszy scharakteryzowany peptyd pochodzenia mitochondrialnego (MDP) — odkrycie Lee 2015 Cell Metab PMID 25738457",
    "Mechanizm aktywatora AMPK — pokrewny Metforminowi (ale nie z klasy biguanidów)",
    "Podniesienie wychwytu glukozy niezależne od insuliny w mięśniach szkieletowych",
    "Upregulacja oksydacji kwasów tłuszczowych na poziomie mitochondrialnej β-oksydacji",
    "Indukowane ćwiczeniami podniesienie endogenne w plazmie u ludzi (Reynolds 2021 PMID 33526809)",
    "Korekta zależnego od wieku spadku endogennego MOTS-c w modelach mysich (Kim 2018 PMID 30276962)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: peptyd badawczy, NIE Rx-zatwierdzony w żadnej jurysdykcji",
    "Off-label cutting-cycle 5-10 mg SC 2-3x/tydzień (ekstrapolacja dawki z myszy, BRAK ustalenia dawki fazy 2 u ludzi)",
    "Długość cyklu 4-8 tygodni, NIE ciągły (ryzyko oporności peptydowej w dowodach preklinicznych)",
    "Bloodwork przed cyklem: fasting glucose + HbA1c + IGF-1 + mleczan baseline",
    "Kontrola mid-cycle po 4 tygodniach (marker uwrażliwiania na insulinę)",
    "Przechowywanie: liofilizowana fiolka 2-8°C, po rozpuszczeniu BAC water 7-10 dni stabilności",
    "Obawy o jakość fiolek UGL z czarnego rynku — źródło testowane HPLC obowiązkowe"
  ],
  "expectations": [
    {
      "label": "Tydzień 1-2",
      "body": "Efekt subiektywny minimalny. Aktywacja AMPK ostra (1-2 h po wstrzyknięciu), ale nie ma jeszcze odczuwalnego podniesienia tempa metabolicznego. Sygnał uwrażliwiania na insulinę wykrywalny na fasting glucose (-5-10 mg/dL od wartości wyjściowej)."
    },
    {
      "label": "Tydzień 3-4",
      "body": "Fasting glucose -10-15 mg/dL od wartości wyjściowej (skumulowany efekt uwrażliwiania na insulinę). Łagodne tempo utraty tłuszczu +0,1-0,3 kg/tydzień przy deficycie kalorycznym + treningu oporowym. Sygnał HbA1c jeszcze nie mierzalny (wymaga integracji 3-miesięcznej)."
    },
    {
      "label": "Tydzień 4-8 + wyjście z cyklu",
      "body": "Po cyklu fasting glucose wraca do baseline ~2-4 tygodnie. Redukcja HbA1c 0,1-0,3% (subtelna). Subiektywna utrata tłuszczu około 1-2 kg / 8 tygodni — NIE jest podobna do stymulanta; mechanizm aktywatora AMPK pokrewny Metforminowi."
    }
  ],
  "quality": {
    "pure": [
      "Partia z badań fazy 1/2 CohBar Inc / Stealth BioTherapeutics — sourcing tylko do celów badawczych jest legalny",
      "Synteza na zamówienie Bachem + AAPPTec + GenScript, liofilizowana fiolka 5 mg >95% czystości HPLC",
      "Fiolki UGL z czarnego rynku: COA (Certificate of Analysis) testowane HPLC OBOWIĄZKOWE — klastry podrabianych + zdegradowanych peptydów udokumentowane w 2023-2024"
    ],
    "caution": [
      "Status tylko do celów badawczych — NIE zatwierdzony Rx do użytku ludzkiego w żadnej jurysdykcji",
      "Badania fazy 2 u ludzi wstępne; pełny profil bezpieczeństwa nieopublikowany przed 2026 r.",
      "Brak dowodów na bezpieczeństwo długoterminowe przy dawkach suprafizjologicznych",
      "Lokalna reakcja w miejscu wstrzyknięcia powszechna; rzadka alergia systemowa w dowodach preklinicznych",
      "Udokumentowane ryzyko endotoksyn + podrabiania fiolek UGL z czarnego rynku",
      "Niestabilność przechowywania: nierozpuszczone <-18°C; rozpuszczone 2-8°C 7-10 dni"
    ],
    "avoid": [
      "Legalne użycie poza badaniami fazy 2 u ludzi nie istnieje na styczeń 2026 r.",
      "Diagnoza T2DM na Rx insuliny (efekt uwrażliwiania na insulinę jest addytywny — ryzyko hipoglikemii)",
      "Ciąża + karmienie piersią (klasa peptydów jest tylko prekliniczna; brak danych o teratogenności)",
      "Użycie pediatryczne (nie jest wskazaniem fazy 2)",
      "Aktywny nowotwór złośliwy (modulator biogenezy mitochondrialnej; prekliniczne dane proliferacyjne niejednoznaczne)"
    ]
  },
  "interactions": [
    "Metformin — addytywny mechanizm aktywatora AMPK; dostosowanie dawki obu (dowody prekliniczne; badania u ludzi niejednoznaczne)",
    "Insulina + doustne hipoglikemizujące (sulfonylomoczniki) — ryzyko hipoglikemii; monitorowanie glukozy obowiązkowe",
    "Semaglutyd + agoniści GLP-1 — addytywne uwrażliwianie na insulinę; monitorowanie glukozy + dostosowanie dawki",
    "Tesamorelina + analogi GHRH — interakcja oś GH/IGF-1 niejednoznaczna w danych preklinicznych; monitorowanie IGF-1",
    "L-karnityna — addytywny mechanizm oksydacji kwasów tłuszczowych; synergistyczne dowody prekliniczne (nieudokumentowane u ludzi)",
    "Alkohol — mechanizm aktywatora AMPK + stres hepatyczny są addytywne; zalecane umiarkowane spożycie"
  ],
  "studies": [
    {
      "title": "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.",
      "authors": "Lee C, Zeng J, Drew BG, Sallam T, Martin-Montalvo A, Wan J, Kim SJ, Mehta H, Hevener AL, de Cabo R, Cohen P",
      "journal": "Cell Metab",
      "pmid": "25738459"
    },
    {
      "title": "MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.",
      "authors": "Reynolds JC, Lai RW, Woodhead JST, Joly JH, Mitchell CJ, Cameron-Smith D, Lu R, Cohen P, Graham NA, Benayoun BA, Merry TL, Lee C",
      "journal": "Nat Commun",
      "pmid": "33473109"
    },
    {
      "title": "The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.",
      "authors": "Kim KH, Son JM, Benayoun BA, Lee C",
      "journal": "Cell Metab",
      "pmid": "29983246"
    },
    {
      "title": "Naturally occurring mitochondrial-derived peptides are age-dependent regulators of apoptosis, insulin sensitivity, and inflammatory markers",
      "authors": "Cobb LJ, Lee C, Xiao J et al.",
      "journal": "Aging (Albany NY). 2016;8(4):796-809.",
      "pmid": "27070352"
    },
    {
      "title": "Humanin and Its Pathophysiological Roles in Aging: A Systematic Review.",
      "authors": "Coradduzza D, Congiargiu A, Chen Z, Zinellu A, Carru C, Medici S",
      "journal": "Biology (Basel)",
      "pmid": "37106758"
    }
  ],
  "faq": [
    {
      "q": "Czym jest peptyd pochodzenia mitochondrialnego (MDP) i czym różni się od tradycyjnych klas peptydów?",
      "a": "Peptydy klasy MDP są kodowane w krótkich otwartych ramkach odczytu (sORF) mitochondrialnego mtDNA, a nie w genomie jądrowym. MOTS-c (Lee 2015 Cell Metab PMID 25738457) był pierwszym scharakteryzowanym MDP — 16 aminokwasów kodowanych w genie 12S rRNA. Funkcjonalnie MDP są cząsteczkami sygnalizacji retrograde: transducują sygnały stresu metabolicznego mitochondriów do jądra. Inne MDP: humanin (Hashimoto 2001), SHLP1-6 (Cobb 2016 PMID 27070352). Farmakologiczne znaczenie klasy MDP polega na tym, że bezpośrednio aktywują szlak komórkowego sensora energii (AMPK), a nie działają poprzez klasyczne wiązanie receptorowe."
    },
    {
      "q": "MOTS-c vs Metformin — który jest lepszym aktywatorem AMPK?",
      "a": "Oba są aktywatorami AMPK, ale przez różne mechanizmy upstream. Metformin: hamowanie Kompleksu I mitochondriów wątrobowych (Owen 2000 Biochem J PMID 10657211) → podniesienie AMP → aktywacja AMPK. MOTS-c: mechanizm zależny od cyklu folianowego, podobny do AICAR (Lee 2015 PMID 25738457) → bezpośrednia aktywacja AMPK. Kontrast kliniczny: Metformin ma 60+ lat dowodów Rx T2DM, doustny, tani (~€5/miesiąc); MOTS-c to peptyd badawczy, iniekcja SC, drogi (~€100-300 za 8-tygodniowy cykl na czarnym rynku). W kontekście utraty tłuszczu Metformin jest subtelny (-1-2 kg / 6 miesięcy monoterapia); wstępne dowody MOTS-c u ludzi są podobnie subtelne. Klasa aktywatorów AMPK NIE jest podobna do stymulantów pod względem tempa utraty tłuszczu."
    },
    {
      "q": "Profil ryzyka dawek suprafizjologicznych — co wiemy o bezpieczeństwie długoterminowym?",
      "a": "Badania fazy 2 u ludzi w statusie wstępnym (pipeline CohBar Inc + Stealth BioTherapeutics 2024-2025). Pełna publikacja oczekiwana w 2026 r. Prekliniczne dowody na myszy (Kim 2018 PMID 30276962) nie wykazały toksyczności przy przewlekłym dawkowaniu 5 mg/kg/dzień przez 12 tygodni. Wstępna faza 1 u ludzi z pojedynczą dawką 5-30 mg SC była dobrze tolerowana (komunikat prasowy CohBar 2022). Dane prekliniczne proliferacyjne modulatora biogenezy mitochondrialnej długoterminowo niejednoznaczne przy dawkach suprafizjologicznych — aktywny nowotwór złośliwy jest przeciwwskazaniem (ryzyko teoretyczne)."
    },
    {
      "q": "Status dostępności badań fazy 1/2 w 2026 r.?",
      "a": "CohBar Inc (obecnie po akwizycji Stealth BioTherapeutics 2023+) prowadził analog MOTS-c CB4211 w fazie 2 dla wskazania NASH (udokumentowany pipeline 2022-2023); pełna publikacja NEJM/Lancet oczekiwana w 2026 r. Brak aktywnego badania fazy 2 dla bezpośredniego wskazania cutting-cycle obesity na styczeń 2026 r. Legalne sourcing tylko do celów badawczych jest tylko poprzez rekrutację do fazy 2 CohBar/Stealth; off-label cutting-cycle sourcing UGL z czarnego rynku jest ZAKAZANY w każdej jurysdykcji."
    },
    {
      "q": "Odpowiednik w bibliotece peptydów vs framing doping-gh-axis — dlaczego peptydy pojawiają się w dwóch ramach?",
      "a": "Biblioteka peptydów MolekulaX (peptides/) zapewnia edukację farmakologiczną na temat klinicznie wskazanych peptydów (Tesamorelina przy lipodystrofii HIV; Semaglutyd przy T2DM/otyłości). Biblioteka performance (performance/) obejmuje framing dopingu sportowego tych samych związków (Tesamorelina-perf przy utracie tłuszczu brzusznego; Semaglutyd-perf przy cyklach cięcia 6-12 tygodni). MOTS-c obecnie NIE ma odpowiednika w bibliotece peptydów MolekulaX — to pierwszy wpis MOTS-c, framing tylko performance. Wskazanie kliniczne T2DM jest w fazie 2; jeśli zatwierdzenie FDA nastąpi w 2027+, do biblioteki peptydów zostanie dodany odpowiednik kliniczny."
    }
  ],
  "related": [
    "l-carnitine",
    "5-amino-1mq"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 5,
      "medium": 7,
      "high": 10
    },
    "unit": "mg SC 2-3x/tydzień",
    "note": "Off-label cutting-cycle 5-10 mg SC 2-3x/tydzień, na podstawie ekstrapolacji dawki z myszy (BRAK ustalenia dawki fazy 2 u ludzi na styczeń 2026). Długość cyklu 4-8 tygodni, NIE ciągły. Liofilizowana fiolka rozpuszczona w 2 mL BAC water; objętość iniekcji 0,5-1 mL SC brzusznie. Przed cyklem fasting glucose + HbA1c + IGF-1 + mleczan baseline; kontrola mid-cycle po 4 tygodniach; po cyklu 2-4 tygodnie regeneracji."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed rozpoczęciem cyklu",
      "markers": "Fasting glucose, HbA1c (baseline integracji 3-miesięcznej), mleczan baseline (marker sygnału mitochondrialnego), IGF-1, panel lipidowy (TC/LDL/HDL/TG), ALT/AST, CBC",
      "purpose": "Ocena uwrażliwiania na insulinę baseline + statusu metabolicznego mitochondriów. Fasting glucose + HbA1c krytyczne dla śledzenia trajektorii cyklu aktywatora AMPK."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "4 tygodnie po rozpoczęciu cyklu",
      "markers": "Fasting glucose (sygnał uwrażliwiania na insulinę oczekiwany -5-15 mg/dL od baseline), HbA1c (wczesna integracja ~1-2%), mleczan (marker stabilności sygnału mitochondrialnego), IGF-1",
      "purpose": "Weryfikacja efektu uwrażliwiania na insulinę + stabilności sygnału mitochondrialnego. Jeśli mleczan >2x baseline → ryzyko kwasicy metabolicznej; zmniejszyć dawkę lub zatrzymać cykl."
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "2 + 4 tygodnie po zakończeniu cyklu",
      "markers": "Fasting glucose (powrót do baseline ~2-4 tygodnie), HbA1c (skumulowane -0,1-0,3% od baseline), IGF-1, panel lipidowy",
      "purpose": "Potwierdzenie trwałości efektu uwrażliwiania na insulinę po cyklu + regeneracji osi tarczycowej. Redukcja HbA1c jest skumulowanym markerem mechanizmu klasy aktywatorów AMPK."
    }
  },
  "anecdote": "Doniesienia społeczności często faworyzują MOTS-c lub 5-Amino-1MQ do wzmacniania utraty tłuszczu. Niektórzy użytkownicy opisują MOTS-c jako \"lekką Cardarinę\", choć jest to ogólnie uważane za przesadę. W połączeniu z innymi środkami spalającymi tłuszcz, MOTS-c może tworzyć silny stack. Działa najlepiej u już aktywnych użytkowników, ponieważ wzmacnia wykorzystanie paliwa, a nie wymusza spalanie tłuszczu. Poprawiona wrażliwość na insulinę poprzez aktywację AMPK jest istotną korzyścią. Raporty anegdotyczne opisują lepszą codzienną energię.\n\nMOTS-c jest zwykle podawany podskórnie. Ponieważ MOTS-c jest naturalnie produkowany, a poziomy spadają z wiekiem, suplementacja u starszych użytkowników może przynosić wyraźniejsze korzyści."
}
