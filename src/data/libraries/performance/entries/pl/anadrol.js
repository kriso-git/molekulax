// FDA-approved (Anadrol-50, DailyMed/Alaven-Meda Pharmaceuticals). Sources:
// FDA Anadrol-50 prescribing information, Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221 (clinical
// review of oxymetholone in anemia), Schänzer 1996 PMID 8616181.

export default {
  "id": "anadrol",
  "sideEffects": [
    { "hu": "Súlyos hepatotoxicitás: 17α-alkilált orális szerként ALT/AST 5-10x emelkedés, cholesztatikus icterus, ritkán peliosis hepatis és májtumor (adenoma, hepatocelluláris carcinoma) tartós használatnál", "en": "Severe hepatotoxicity: as a 17α-alkylated oral, 5-10x ALT/AST elevation, cholestatic jaundice, rarely peliosis hepatis and liver tumors (adenoma, hepatocellular carcinoma) with prolonged use", "pl": "Ciężka hepatotoksyczność: jako 17α-alkilowany doustny, wzrost ALT/AST 5-10x, żółtaczka cholestatyczna, rzadko peliosis hepatis i guzy wątroby (gruczolak, rak wątrobowokomórkowy) przy długim stosowaniu" },
    { "hu": "Paradox estrogén-szerű hatások aromatizáció nélkül: a direkt ER-agonista aktivitás vízretenciót, ödémát, puffadt \"holdképű\" arcot és gynecomastiát okoz; aromatázgátló (AI) itt hatástalan, csak SERM véd", "en": "Paradoxical estrogen-like effects without aromatization: direct ER-agonist activity causes water retention, edema, bloated face and gynecomastia; aromatase inhibitors are useless here, only a SERM protects", "pl": "Paradoksalne efekty estrogenopodobne bez aromatyzacji: bezpośrednia aktywność ER-agonisty powoduje zatrzymanie wody, obrzęki, opuchniętą twarz i ginekomastię; inhibitory aromatazy są tu nieskuteczne, chroni tylko SERM" },
    { "hu": "Drasztikus lipidromlás és vérnyomás-emelkedés: HDL akár 60%-os csökkenése, LDL emelkedés, vízretenció miatti hypertonia (gyakran 140/90 felett) – fokozott kardiovaszkuláris kockázat", "en": "Drastic lipid worsening and raised blood pressure: HDL drop up to 60%, rising LDL, water-retention hypertension (often above 140/90), increasing cardiovascular risk", "pl": "Drastyczne pogorszenie lipidów i wzrost ciśnienia: spadek HDL nawet o 60%, wzrost LDL, nadciśnienie z zatrzymania wody (często powyżej 140/90), zwiększone ryzyko sercowo-naczyniowe" },
    { "hu": "HPTA-szuppresszió: a saját tesztoszteron-termelés leáll, here-atrófia, csökkent libidó és spermiumszám; a helyreállás hónapokat vehet igénybe, PCT nélkül elhúzódó hypogonadizmus", "en": "HPTA suppression: endogenous testosterone production shuts down, testicular atrophy, reduced libido and sperm count; recovery can take months, with prolonged hypogonadism without PCT", "pl": "Supresja HPTA: zatrzymanie własnej produkcji testosteronu, atrofia jąder, obniżone libido i liczba plemników; powrót może trwać miesiące, przedłużony hipogonadyzm bez PCT" },
    { "hu": "Polycythaemia (eritrocitózis): a kifejezett eritropoetin-szerű hatás miatt megemelkedett hematokrit és vörösvérsejt-szám, ami fokozza a thrombosis, stroke és szívinfarktus kockázatát", "en": "Polycythemia (erythrocytosis): the pronounced erythropoietic effect raises hematocrit and red cell count, increasing the risk of thrombosis, stroke and heart attack", "pl": "Czerwienica (erytrocytoza): wyraźny efekt erytropoetyczny podnosi hematokryt i liczbę erytrocytów, zwiększając ryzyko zakrzepicy, udaru i zawału serca" },
    { "hu": "Androgén mellékhatások: akne, faggyútermelés, androgén típusú hajritkulás (predisponáltaknál), prosztata-megnagyobbodás idősebbeknél", "en": "Androgenic side effects: acne, increased sebum, androgenic hair thinning (in predisposed individuals), prostate enlargement in older men", "pl": "Działania androgenne: trądzik, zwiększone wydzielanie łoju, androgenowe przerzedzenie włosów (u predysponowanych), powiększenie prostaty u starszych mężczyzn" },
    { "hu": "Pszichiátriai hatások: kifejezett agresszió (\"Anadrol rage\"), irritabilitás, hangulatingadozás és depresszió; az AAS-ek között az egyik legintenzívebb hangulatzavar-profil", "en": "Psychiatric effects: marked aggression (\"Anadrol rage\"), irritability, mood swings and depression; one of the most intense mood-disturbance profiles among AAS", "pl": "Efekty psychiatryczne: wyraźna agresja (\"Anadrol rage\"), drażliwość, wahania nastroju i depresja; jeden z najintensywniejszych profili zaburzeń nastroju wśród AAS" },
    { "hu": "Virilizáció nőknél: mély hang, arc- és testszőrösödés, klitorisz-megnagyobbodás, menstruációs zavar – a magas androgén-aktivitás miatt gyorsan és gyakran visszafordíthatatlanul alakul ki", "en": "Virilization in women: deepened voice, facial and body hair, clitoral enlargement, menstrual disruption – develops fast and often irreversibly due to high androgenic activity", "pl": "Wirylizacja u kobiet: obniżenie głosu, owłosienie twarzy i ciała, przerost łechtaczki, zaburzenia miesiączkowania – rozwija się szybko i często nieodwracalnie ze względu na wysoką aktywność androgenną" }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy emelkedett baseline ALT/AST (zsírmáj, hepatitis, cholestasis) – abszolút kontraindikáció a 17α-alkilált szerkezet extrém máj-stressze miatt", "en": "Any pre-existing liver disease or elevated baseline ALT/AST (fatty liver, hepatitis, cholestasis) – absolute contraindication due to the extreme hepatic stress of the 17α-alkylated structure", "pl": "Jakakolwiek istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST (stłuszczenie, zapalenie wątroby, cholestaza) – bezwzględne przeciwwskazanie z powodu ekstremalnego obciążenia wątroby przez strukturę 17α-alkilowaną" },
    { "hu": "Terhesség és szoptatás: teratogén, a magzat virilizációját okozza – abszolút kontraindikáció", "en": "Pregnancy and breastfeeding: teratogenic, causes fetal virilization – absolute contraindication", "pl": "Ciąża i karmienie piersią: teratogenny, powoduje wirylizację płodu – bezwzględne przeciwwskazanie" },
    { "hu": "Meglévő vagy gyanított prosztata- vagy emlőkarcinóma, illetve férfi emlőkarcinóma – androgén-függő tumorok progresszióját okozhatja", "en": "Existing or suspected prostate or breast carcinoma, or male breast carcinoma – may drive progression of androgen-dependent tumors", "pl": "Istniejący lub podejrzewany rak prostaty lub piersi, lub rak piersi u mężczyzn – może napędzać progresję guzów androgenozależnych" },
    { "hu": "Kardiovaszkuláris kockázat: meglévő hypertonia, ischaemiás szívbetegség, dyslipidaemia vagy pozitív családi anamnézis – a HDL-zuhanás, vérnyomás-emelkedés és polycythaemia miatt", "en": "Cardiovascular risk: existing hypertension, ischemic heart disease, dyslipidemia or positive family history – due to HDL crash, raised blood pressure and polycythemia", "pl": "Ryzyko sercowo-naczyniowe: istniejące nadciśnienie, choroba niedokrwienna serca, dyslipidemia lub dodatni wywiad rodzinny – z powodu spadku HDL, wzrostu ciśnienia i czerwienicy" },
    { "hu": "Polycythaemia vagy emelkedett baseline hematokrit, illetve thrombosis/stroke a kórtörténetben – az eritropoetin-szerű hatás tovább növeli a hematokritot", "en": "Polycythemia or elevated baseline hematocrit, or a history of thrombosis/stroke – the erythropoietic effect raises hematocrit further", "pl": "Czerwienica lub podwyższony wyjściowy hematokryt, lub przebyta zakrzepica/udar – efekt erytropoetyczny dodatkowo podnosi hematokryt" },
    { "hu": "Tervezett apaság / fennálló fertilitási igény: a HPTA-szuppresszió a spermiumtermelést hónapokra-évekre lenyomhatja", "en": "Planned fatherhood / active fertility goals: HPTA suppression can depress sperm production for months to years", "pl": "Planowane ojcostwo / aktualne plany prokreacyjne: supresja HPTA może obniżać produkcję plemników na miesiące do lat" },
    { "hu": "Egyidejű hepatotoxikus terhelés: alkohol, paracetamol, NSAID-ok, más 17α-alkilált orális AAS (Dianabol, Superdrol, Winstrol) vagy meglévő pszichiátriai zavar (depresszió, bipoláris, szorongás)", "en": "Concurrent hepatotoxic load: alcohol, paracetamol, NSAIDs, other 17α-alkylated oral AAS (Dianabol, Superdrol, Winstrol), or pre-existing psychiatric disorder (depression, bipolar, anxiety)", "pl": "Jednoczesne obciążenie hepatotoksyczne: alkohol, paracetamol, NLPZ, inne 17α-alkilowane doustne AAS (Dianabol, Superdrol, Winstrol) lub istniejące zaburzenia psychiatryczne (depresja, choroba afektywna dwubiegunowa, lęk)" }
  ],
  "name": "Anadrol (Oxymetholone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oksymetholon, doustny AAS pochodny 2-hydroksymetyleno-17α-metylo-DHT. Zatwierdzony przez FDA (Anadrol-50) na aplastyczną i hipoplastyczną niedokrwistość. Klasyczny \"mokry\" steryd bulkingowy; wysoka hepatotoksyczność i paradoksalne estrogenopodobne efekty uboczne.",
  "description": "Anadrol (Oksymetholon) to doustny AAS pochodny 2-hydroksymetyleno-17α-metylo-DHT, pierwotnie zsyntetyzowany przez Syntex w 1960 r. Wskazania kliniczne zatwierdzone przez FDA: niedokrwistość aplastyczna, wrodzone i nabyte niedokrwistości z niedoborem krwinek czerwonych (Anadrol-50, obecnie Alaven/Meda Pharmaceuticals). Stosunek anaboliczno-androgenny 320:45 (wysoki anaboliczny, umiarkowany androgenny). Wysoka hepatotoksyczność ze względu na grupę 17α-metylową (jedna z najwyższych wśród AAS). Grupa 2-hydroksymetylenowa NIE jest substratem CYP19 (nie aromatyzuje), ALE wykazuje bezpośrednią aktywność agonisty ER — paradoksalne \"estrogenopodobne\" efekty uboczne (retencja wody, ryzyko ginekomastii) pojawiają się nawet bez aromatyzacji. W kontekście kulturystycznym, \"mokry\" steryd bulkingowy: 10-15 kg przyrostu masy w 4-6 tygodni (znacząco woda + glikogen) udokumentowane. Zakazany przez WADA cały rok.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR + bezpośredni agonista ER (paradoksalny)"
    },
    {
      "label": "Anaboliczny:Androgenny",
      "value": "320:45"
    },
    {
      "label": "Okres półtrwania",
      "value": "8-9 godzin (doustnie)"
    },
    {
      "label": "Początek",
      "value": "1-2 h (doustnie)"
    },
    {
      "label": "Status prawny",
      "value": "FDA Rx (Anadrol-50), Schedule III, zakaz WADA"
    }
  ],
  "mechanism": "Agonista AR 2-hydroksymetyleno-17α-metylo-DHT pochodny. Grupa 17α-metylowa zapewnia biodostępność doustną (oporna na first-pass wątrobowy, ~80% biodostępność). Grupa 2-hydroksymetylenowa zapewnia KILKA niezwykłych efektów: (1) NIE substrat CYP19 → NIE aromatyzuje; (2) ALE bezpośrednia aktywność agonisty ER → paradoksalne estrogenopodobne efekty uboczne (retencja wody, ryzyko ginekomastii) pojawiają się mimo leczenia antyaromatazowego; (3) wysoki efekt erytropoetynopodobny (stąd wskazanie niedokrwistości) — liczba krwinek czerwonych i hemoglobina rosną szybko. Ze względu na aktywność ER, SERM (Nolvadex/Raloksyfen) jest skuteczny w zapobieganiu ginekomastii, AI (Anastrozol) NIE jest skuteczny.",
  "legalStatus": "USA: zatwierdzony przez FDA Rx Anadrol-50 (Alaven/Meda), Schedule III kontrolowana substancja (DEA). UE: rzadko import na receptę, nie zarejestrowany na rynkach HU/PL. HU/PL: nielegalny bez recepty. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "1-2 h (doustnie)",
  "halfLife": "8-9 h (doustnie, związek macierzysty)",
  "halfLifeActive": "~16 h (z aktywnymi metabolitami)",
  "interactionsWith": [
    "tamoxifen",
    "raloxifene",
    "tudca",
    "warfarin"
  ],
  "aromatization": "Nie substrat CYP19 — ALE ze względu na bezpośrednią aktywność agonisty ER, estrogenopodobne efekty uboczne (retencja wody, ginekomastia) pojawiają się mimo leczenia antyaromatazowego. Jedyna ochrona: SERM (Nolvadex 20 mg/dzień lub Raloksyfen 60 mg/dzień) (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Bardzo wysoka — grupa 17α-metylowa ekstremalny stres first-pass wątrobowy, ALT/AST 5-10x wzrost częsty, żółtaczka cholestatyczna case-reported. Wśród AAS o najwyższej hepatotoksyczności wraz z Dianabolem i Superdrolem (Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:45",
  "bindingAffinity": "Wysokie powinowactwo do AR + atypowa aktywność ER (Pope-Kanayama 2014 przegląd designer AAS).",
  "detectionWindow": "Metabolity oksymetholonu w moczu 6-8 tygodni (akredytowane WADA GC-MS i LC-MS/MS; Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Szybki bulking: 10-15 kg przyrostu masy w 4-6 tygodni (znacząco woda + glikogen)",
    "Drastyczny przyrost siły: bench press i deadlift 1RM 15-25% wzrost (ekstrapolacja Bhasin)",
    "Liczba krwinek czerwonych i hemoglobina szybki wzrost (wskazanie FDA: niedokrwistość)",
    "Komfort stawów: retencja wody zapewnia mechaniczny efekt amortyzatora, mniej bólu treningowego"
  ],
  "quickStart": [
    "EKSTREMALNA HEPATOTOKSYCZNOŚĆ — maksimum 4 tygodnie ciągłego cyklu, NIGDY dłużej",
    "TUDCA 1000-1500 mg/dzień + NAC 1800 mg/dzień OBOWIĄZKOWE przez cały cykl",
    "SERM (Nolvadex 20 mg/dzień) dla zapobiegania ginekomastii — AI NIE skuteczny ze względu na atypową aktywność ER",
    "Próby ALT/AST co 2-3 tygodnie, >3x norma górna = NATYCHMIASTOWE przerwanie",
    "PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe dla recovery HPTA"
  ],
  "expectations": [
    {
      "label": "Pierwszy tydzień",
      "body": "Ostry przyrost masy 2-4 kg (woda + glikogen). Wzrost siły wyraźny, pompa treningowa dramatyczna."
    },
    {
      "label": "Tydzień 3-4",
      "body": "Maksymalny efekt bulkingowy. 8-12 kg całkowitego przyrostu. ALT/AST 3-5x norma górna często manifestuje się tutaj — OBOWIĄZKOWE przerwanie cyklu na koniec tygodnia 4."
    },
    {
      "label": "Post-cykl",
      "body": "Utrata masy 30-50% (utrata wody w ciągu 2-3 tygodni po zatrzymaniu). Czysta masa zachowana ~4-6 kg udokumentowana. Recovery wątrobowy 4-8 tygodni."
    }
  ],
  "quality": {
    "pure": [
      "Anadrol-50 (Alaven/Meda Pharmaceuticals) oryginalna tabletka Rx, 50 mg",
      "Tabletka UGL: źródło testowane HPLC obowiązkowe — Anadrol często fałszowany (zastępowanie Dianabolem lub Methylstenbolonem)"
    ],
    "caution": [
      "Hepatotoksyczność (wzrost ALT/AST 5-10x najczęstszy ostry efekt)",
      "Retencja wody (\"twarz księżyca\", definicja mięśni utracona)",
      "Wzrost ciśnienia krwi (często >140/90, ze względu na retencję wody + nerkowe AKI)",
      "Zaburzenia nastroju: agresja (\"Anadrol rage\"), irytacja, depresyjne załamania",
      "Zaburzenia lipidowe dramatyczne: HDL do 60% spadek, wzrost LDL"
    ],
    "avoid": [
      "Jakiekolwiek istniejące zaburzenia wątrobowe (stłuszczenie wątroby, zapalenie, podwyższone ALT/AST baseline) BEZWZGLĘDNE przeciwwskazanie",
      "Jednoczesny alkohol, NSAID, paracetamol ściśle zakazane",
      "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL, nadciśnienie) bezwzględne przeciwwskazanie",
      "Stosowanie przez kobiety (skrajnie szybka wirylizacja ze względu na wysoką aktywność androgenną)",
      "Planowane ojcostwo (supresja HPTA wymaga miesięcy-lat na odzyskanie)",
      "Czerwienica (paradoksalnie — własna aktywność ER może powodować czerwienicę)"
    ]
  },
  "interactions": [
    "Nolvadex (Tamoksyfen) 20 mg/dzień: zapobieganie ginekomastii (SERM skuteczny, AI NIE)",
    "TUDCA 1000-1500 mg/dzień + NAC 1800 mg/dzień: wsparcie wątroby obowiązkowe",
    "Stack z bazą testosteronu: synergistyczny bulking, ALE łączny stres wątrobowy drastyczny",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony, ścisły monitoring INR",
    "Inne AAS 17α-alkilowane (Dianabol, Superdrol, Winstrol) jednoczesne stosowanie to śmiertelna kombinacja"
  ],
  "studies": [
    {
      "title": "FDA Anadrol-50 prescribing information",
      "authors": "FDA / Alaven-Meda Pharmaceuticals",
      "journal": "DailyMed NDA 12-535 (oxymetholone label)",
      "pmid": null
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes.",
      "authors": "Hartgens F, Kuipers H",
      "journal": "Sports Med",
      "pmid": "15248788"
    },
    {
      "title": "Development of Liver Cancers as an Unexpected Consequence of Anabolic Androgenic Steroid Use.",
      "authors": "Khalid S, Laput G, Khorfan K, Khan A, Goyal A",
      "journal": "Cureus",
      "pmid": "36874750"
    },
    {
      "title": "Anabolic-Androgenic Steroids Revisited: Structural Biology, Receptor Signaling, and Mechanisms of Anabolic-Androgenic Dissociation.",
      "authors": "Wiacek M, Zubrzycki IZ",
      "journal": "Int J Mol Sci",
      "pmid": "41898445"
    },
    {
      "title": "Double-blind, randomized, placebo-controlled phase III trial of oxymetholone for the treatment of HIV wasting.",
      "authors": "Hengge UR, Stocks K, Wiehler H, Faulkner S, Esser S, Lorenz R, Brockmeyer NH",
      "journal": "AIDS",
      "pmid": "12646793"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego powoduje retencję wody, skoro nie aromatyzuje?",
      "a": "Grupa 2-hydroksymetylenowa Oksymetholonu zapewnia bezpośrednią aktywność agonisty ER — całkowicie omija enzymy CYP19 i aktywuje receptory estrogenowe bezpośrednio. Stąd antyaromatazowy (Anastrozol, Letrozol) jest TUTAJ BEZUŻYTECZNY; tylko SERM (Nolvadex, Raloksyfen) blokuje receptory ER bezpośrednio. To jest paradoksalny efekt specyficzny dla Anadrolu."
    },
    {
      "q": "Czy naprawdę można przybrać 10-15 kg w 4 tygodnie?",
      "a": "Tak, ALE zdecydowana większość (60-70%) to woda i glikogen, NIE czyste mięśnie. Po końcu cyklu spodziewaj się utraty 30-50% masy w ciągu 2-3 tygodni (utrata wody). Czysta masa zachowana 4-6 kg udokumentowana z odpowiednim treningiem i PCT. Liczba \"10-15 kg\" jest realistyczna, ale końcowy wynik NIE jest taki."
    },
    {
      "q": "Dlaczego FDA zatwierdziła, skoro tak toksyczny?",
      "a": "Zatwierdzone wskazanie FDA (niedokrwistość aplastyczna) jest ratujące życie — stosunek korzyść-ryzyko jest korzystny u tych pacjentów. Off-label użycie w kulturystyce NIE jest częścią zatwierdzenia FDA; u zdrowych młodych osób 50-100 mg/dzień przez 4 tygodnie może powodować zagrażającą życiu hepatotoksyczność (Pavlatos 2001 PMID 11329221 raporty DILI)."
    },
    {
      "q": "Anadrol vs Dianabol — który jest gorszy?",
      "a": "Hepatotoksyczność z grubsza równa (oba top-2 wśród AAS 17α-alkilowanych). Profil aromatyzacji: Dianabol klasyczny CYP19-aromatyzujący (AI skuteczny), Anadrol bezpośredni agonista ER (tylko SERM działa). W efekcie bulkingowym Anadrol szybszy i bardziej dramatyczny, ale Dianabol zachowuje więcej mięśni po zakończeniu cyklu. Żaden nie jest zalecany."
    },
    {
      "q": "Czy unikać Anadrolu ze względu na \"rage\"?",
      "a": "Tak, efekty psychologiczne (agresja, irytacja, ataki wściekłości) są najbardziej intensywne z Anadrolem wśród AAS. Kanayama 2009 PMID 19922565 kohort: 70% użytkowników Anadrolu zgłasza wyraźne zaburzenia nastroju. Jeśli predyspozycja psychiatryczna (depresja, choroba dwubiegunowa, zaburzenia lękowe) jest obecna, bezwzględnie przeciwwskazany."
    }
  ],
  "related": [
    "dianabol-info",
    "superdrol",
    "testosterone-info",
    "trenbolone-info",
    "nandrolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 75,
      "high": 100
    },
    "unit": "mg/dzień (doustnie, 1-2x podzielone)",
    "note": "Maksimum 4 tygodnie cyklu, NIGDY dłużej. 50-100 mg/dzień, 1-2x podzielone (krótki okres półtrwania). TUDCA 1000-1500 mg/dzień + NAC 1800 mg/dzień przez cały cykl. ALT/AST co 2-3 tygodnie. SERM (Nolvadex 20 mg/dzień) zapobieganie ginekomastii. PCT 4-6 tygodni (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina, INR. Plus: lipidogram (LDL/HDL/TG), panel hormonów (Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna), HbA1c, funkcja nerek, CBC + hematokryt, dziennik ciśnienia.",
      "purpose": "Baseline wątrobowy BEZWZGLĘDNIE krytyczny ze względu na ekstremalny stres first-pass 17α-metylu. Jakikolwiek wzrost ALT/AST lub oznaki stłuszczenia wątroby = bezwzględne przeciwwskazanie."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Koniec tygodnia 2 i koniec tygodnia 3 (podwójna kontrola ze względu na krótki cykl)",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: lipidogram (HDL może drastycznie spaść), ciśnienie krwi (dom, codziennie), hematokryt (ryzyko czerwienicy), monitor ginekomastii (wrażliwość piersi + badanie wzrokowe).",
      "purpose": "Detekcja awaryjna KRYTYCZNA. ALT/AST >3x norma górna lub wzrost bilirubiny = NATYCHMIASTOWE przerwanie. BP >150/95 redukcja dawki lub stop. Objaw ginekomastii → zwiększenie dawki SERM."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Od ostatniej tabletki +1-2 dni start PCT. PCT tydzień 4 i 8-12 kontrole recovery wątrobowego + HPTA.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (recovery ALT/AST/GGT/bilirubiny), lipidogram (recovery HDL), CBC.",
      "purpose": "Weryfikacja recovery WĄTROBOWEGO bezwzględnie krytyczna. Jeśli ALT/AST nie normalizuje się w 12 tygodni, konsultacja hepatologa OBOWIĄZKOWA. Recovery HPTA zazwyczaj 8-16 tygodni."
    },
    "cruise": {
      "label": "Na cruise (cruise Anadrolem NIE ISTNIEJE — ściśle cykliczny)",
      "timing": "Anadrol na cruise ZABRONIONY — obowiązkowe przerwanie po 4 tygodniach. Jeśli ktoś próbuje cruise, niewydolność wątrobowa w krótkim czasie.",
      "markers": "N/A — cruise Anadrolem nie standardowy, nie zalecany w żadnym protokole.",
      "purpose": "Anadrol jest używany wyłącznie w krótkim (maks 4 tygodnie) cyklu bulkingowym. Ciągłe stosowanie powoduje fatalne konsekwencje wątrobowe."
    }
  },
  "anecdote": "Anadrol ma reputację 'mokrego', ale raporty anegdotyczne opisują coś więcej niż tylko przyrost wody — użytkownicy często zauważają wyraźnie gęsty, hiper-pełny wygląd mięśniowy, niemal jakby mięśnie były przepełnione. Wzrosty siły są zwykle nagłe i nieproporcjonalne, często pojawiają się szybciej niż oczekiwano, z ekstremalnymi pompami. Niektórzy użytkownicy doświadczają również zwiększenia apetytu, co wzmacnia fazy wzrostu. Kompromisy są poważne: Anadrol jest notorycznie znany z podnoszenia ciśnienia krwi, zagęszczania hematokrytu, obrzęków i zaburzeń lipidowych. Przesunięcia płynów mogą powodować pompy w plecach, bóle głowy i odczucia ciśnieniowe. Część szybkiego przyrostu masy to przejściowa woda, ale część reprezentuje prawdziwe anaboliczne przyspieszenie. Jako 17α-alkilowany doustny, stres wątrobowy jest nietrywialny i nie powinien być lekceważony. Pomimo swojej staroszkolnej reputacji, Anadrol jest mechanistycznie złożony z powodu nietypowego zachowania estrogenopodobnego i atypowego profilu sygnalizacyjnego."
}
