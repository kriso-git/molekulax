// 5-Amino-1MQ — inhibitor NNMT designer methylquinoline, tylko preclinical.
// Sources: Kraus 2014 Nature PMID 24622204, Neelakantan 2018 Curr Top Med
// Chem PMID 28425865, Trammell 2016 J Diabetes Res PMID 26904478,
// Hong 2015 Diabetologia PMID 25972232. PRECLINICAL-ONLY, brak human evidence.

export default {
  "id": "5-amino-1mq",
  "name": "5-Amino-1MQ",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Designer methylquinoline inhibitor NNMT (nicotinamide N-methyltransferase). PRECLINICAL-ONLY — Kraus 2014 Nature (PMID 24622204) evidence z modelu myszy NNMT-knockdown w otyłości; Neelakantan 2018 (PMID 28425865) pierwsza publikacja design molekuły 5-amino-1MQ. Human trials NIE istnieją.",
  "description": "5-Amino-1MQ (5-amino-1-methylquinolinium) to designer methylquinoline-scaffold inhibitor NNMT (nicotinamide N-methyltransferase, EC 2.1.1.1), opublikowany w 2018 przez grupę Neelakantan z Washington University w St. Louis (Curr Top Med Chem PMID 28425865). Enzym NNMT metyluje nicotinamide do N1-methylnicotinamide używając S-adenozyl-metioniny (SAM) jako donora metylu, z bezpośrednim wpływem na tkankowe pule substratów metabolizmu energetycznego. Overekspresja NNMT jest udokumentowana w kontekstach otyłej tkanki tłuszczowej + hepatocytach (Hong 2015 Diabetologia PMID 25972232); wyczerpuje pulę SAM i akumuluje 1-methylnicotinamide, zmniejszając metylację histonów i syntezę poliamin — downstream marker patofizjologii otyłość + insulinooporność. Kraus 2014 Nature (PMID 24622204) raportowało NNMT-knockdown w modelach myszy otyłych dający +30% wzrost tempa metabolicznego + wzrost wrażliwości na insulinę bez treningu. 5-Amino-1MQ próbuje farmakologicznie reprodukować ten efekt knockdown selektywnym inhibitorem NNMT-binding pocket. KRYTYCZNE: HUMAN TRIALS NIE ISTNIEJĄ. Od 2022-2023 research-chemical underground market sprzedaje online produkty '50-150 mg/kapsuła 5-amino-1MQ' z label-claim discrepancy + HPLC-untested content. Status PRECLINICAL-ONLY: human PK, ludzka biodostępność, ludzka evidence skuteczności i ludzkie okno bezpieczeństwa NIE są znane. WADA NIE listuje wyraźnie, ale kategoria 'S0 catch-all non-approved substance' może potencjalnie się stosować.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Inhibitor NNMT (nicotinamide N-methyltransferase), designer methylquinoline scaffold — tylko preclinical"
    },
    {
      "label": "Dawkowanie",
      "value": "Tylko preclinical (mysz 50-200 mg/kg/dziennie PO ekstrapolowane). BRAK human Rx dose."
    },
    {
      "label": "Okres półtrwania",
      "value": "SZACOWANE ~4-8h (BRAK danych human PK, ekstrapolowane z modelu myszy)"
    },
    {
      "label": "Początek działania",
      "value": "Preclinical model myszy: wzrost tempa metabolicznego 2-4 tygodnie chronicznego dawkowania — ludzkie NIE znane"
    },
    {
      "label": "Status prawny",
      "value": "FDA never approved; UE EMA never approved; tylko research-chemical underground market. WADA NIE wyraźnie listowane, ale kategoria 'S0 catch-all non-approved substance' może się stosować."
    }
  ],
  "mechanism": "NNMT (nicotinamide N-methyltransferase) to enzym cytosolowy metylujący nicotinamide (substrat szlaku NAD pokrewny witaminie-B3) do N1-methylnicotinamide używając SAM (S-adenozyl-metioniny) jako donora. Aktywność NNMT jest overekspresjonowana w otyłej tkance tłuszczowej + tkance hepatocytów (Hong 2015 Diabetologia PMID 25972232) — wynikowe wyczerpanie puli SAM zmniejsza metylację histonów + syntezę poliamin, a akumulacja 1-methylnicotinamide tworzy downstream sygnał energy-storage-bias. Kraus 2014 Nature (PMID 24622204) model myszy otyłej z NNMT-knockdown (siRNA + knockout) pokazał +30% wzrost tempa metabolicznego + wzrost wrażliwości na insulinę + redukcję wielkości adipocytów mierzalne bez treningu w 4-8 tygodni. 5-Amino-1MQ reprodukuje to farmakologicznie jako selektywny inhibitor NNMT-binding pocket (Neelakantan 2018 PMID 28425865), przesuwając obese-tkankowy bias energy-storage w stronę bias metabolic-burn przez zachowanie puli SAM + redukcję akumulacji 1-methylnicotinamide. Human extrapolation mechanizmu NIE jest udowodniona — wzorzec ekspresji NNMT u ludzi + tkankowa gęstość + specyficzność isozyme nie są adekwatnie scharakteryzowane na poziomie preclinical. Trammell 2016 (PMID 26904478) kontekst szlaku NR (nicotinamide riboside) waliduje human relevance metabolizmu NAD, ale NIE bezpośrednią human trial klasy inhibitora NNMT.",
  "legalStatus": "USA: FDA never approved; tylko research-chemical underground market (od 2022-2023). UE + EMA: never approved. HU + PL: niezarejestrowane. WADA: NIE wyraźnie zakazane, ale klauzula 'S0 catch-all non-approved substance' ('any pharmacological substance which is not addressed by any of the subsequent sections... and is not approved by any governmental regulatory authority for human therapeutic use') może potencjalnie się stosować do sankcji sportowych. Legal loophole dla online-marketing research-chemical: disclaimer 'NIE do konsumpcji ludzkiej, tylko in-vitro do badań'.",
  "onsetTime": "Preclinical model myszy: 2-4 tygodnie chronicznego dawkowania — ludzkie NIE znane",
  "halfLife": "SZACOWANE ~4-8h (BRAK danych human PK)",
  "interactionsWith": [
    "mots-c",
    "l-carnitine",
    "gw-501516"
  ],
  "aromatization": "Nie aromatyzuje (nie steryd — designer methylquinoline, inhibitor NNMT). Brak interakcji z CYP19.",
  "hepatotoxicity": "Nieznana — research chemical / tylko preclinical, długoterminowych danych ludzkich brak. Preclinical model myszy 4-8 tygodni chronicznego dawkowania NIE podnosił znacząco enzymów wątrobowych (ALT/AST) (Kraus 2014 PMID 24622204 supplementary data), ale human extrapolation NIE jest udowodniona.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, inhibitor NNMT)",
  "bindingAffinity": "NNMT IC50 ~1.6 μM (Neelakantan 2018 PMID 28425865 dane enzyme-kinetics), selektywny vs other methyltransferases (PNMT, COMT >100x selektywność).",
  "detectionWindow": "WADA-akredytowane protokół wykrywania NIE jest specyficznie regulowany (5-Amino-1MQ NIE wyraźnie listowane). Out-of-competition LC-MS/MS możliwe pod kategorią 'S0 catch-all'.",
  "benefits": [
    "Preclinical model myszy +30% wzrost tempa metabolicznego (Kraus 2014 Nature PMID 24622204 evidence NNMT-knockdown)",
    "Preclinical model myszy wzrost wrażliwości na insulinę bez treningu",
    "Preclinical model myszy redukcja wielkości adipocytów + mobilizacja lipidów",
    "Designer methylquinoline selektywne wiązanie NNMT (Neelakantan 2018 PMID 28425865) — >100x selektywność vs other methyltransferases",
    "JEDNAK: human trials NIE istnieją; lista benefitów NIE jest klinicznie aktualizowalna — framework PRECLINICAL-ONLY"
  ],
  "quickStart": [
    "PRECLINICAL-ONLY chemical — brak human Rx dose, ludzka biodostępność + okno bezpieczeństwa NIE znane",
    "Research-chemical underground market produkty 50-150 mg/kapsuła od 2022-2023 — label-claim discrepancy + HPLC-untested content wysokie",
    "Jeśli używasz w kontekście badawczym (in-vitro / model zwierzęcy): research-chemical pharmacy-sourced HPLC-certified batch, NIE do konsumpcji ludzkiej",
    "BRAK bezpiecznego protokołu dla konsumpcji ludzkiej — z powodu statusu preclinical-only + braku human PK"
  ],
  "expectations": [
    {
      "label": "Kontekst konsumpcji ludzkiej",
      "body": "BRAK Rx-Rx dosing, BRAK protokołu klinicznego. Research-chemical underground market produkty 50-150 mg/kapsuła są ekstrapolowane z dawki mysz 50-200 mg/kg/dziennie — ale konwersja mysz → człowiek BSA (~12x redukcja dawki) + nieznana biodostępność oznaczają, że human-equivalent NIE jest niezawodnie obliczalna."
    },
    {
      "label": "Evidence preclinical (model myszy)",
      "body": "Kraus 2014 Nature (PMID 24622204) NNMT-knockdown otyła mysz 4-8 tygodni chronicznego dawkowania: +30% wzrost tempa metabolicznego, wzrost wrażliwości na insulinę, redukcja wielkości adipocytów. Neelakantan 2018 (PMID 28425865) design molekuły 5-Amino-1MQ + in-vitro IC50 ~1.6 μM dane enzyme-kinetics. HUMAN trials NIE istnieją."
    }
  ],
  "quality": {
    "pure": [
      "FDA never approved + UE EMA never approved — Rx-pharmacy-sourced 5-Amino-1MQ NIE istnieje",
      "Research-chemical underground market online (USA + UE od 2022-2023): wysokie label-claim discrepancy + HPLC-untested content",
      "Według Cohen 2017 JAMA SARMs-pokrewny analog label-claim discrepancy RCT, 25-30% online-marketed produktów research-chemical NIE zawierało deklarowanego związku lub zawierało inne molekuły"
    ],
    "caution": [
      "Status PRECLINICAL-ONLY — human PK, biodostępność i okno bezpieczeństwa NIE są znane",
      "Online-marketed produkty research-chemical: label-claim discrepancy + ryzyko skażonego batch",
      "Brak długoterminowych danych bezpieczeństwa u ludzi (mysz 4-8 tygodni chronicznego dawkowania ≠ długoterminowe ludzkie)"
    ],
    "avoid": [
      "Tylko preclinical chemical, konsumpcja ludzka NIE zalecana — human trials nie istnieją",
      "Pre-existing choroba wątroby, przeciwwskazanie względne (ludzkie hepatic clearance NIE znane)",
      "Pre-existing choroba nerek, przeciwwskazanie względne (ludzka eliminacja nerkowa NIE znana)",
      "Ciąża + karmienie piersią, bezwzględne przeciwwskazanie",
      "Aktywni sportowcy — kategoria WADA 'S0 catch-all non-approved substance' może się stosować",
      "Online-marketed produkty '50-150 mg/kapsuła 5-Amino-1MQ' (label-claim discrepancy + skażony batch)"
    ]
  },
  "interactions": [
    "MOTS-c — preclinical mechanizm pokrewny metabolizmowi mitochondrialnemu, kombinacja tylko research-context",
    "L-Carnitine — preclinical overlap szlaku oksydacji tłuszczu, brak danych klinicznych",
    "GW-501516 — preclinical overlap szlaku PPARδ, KOMBINACJA NIE zalecana (kancerogenność GW-501516)",
    "Nicotinamide riboside (NR) — overlap substrate-pool (szlak NAD), kontekst preclinical, brak danych klinicznych",
    "Metformin — preclinical overlap szlaku AMPK (kontekst NR-pathway Trammell 2016), brak danych klinicznych"
  ],
  "studies": [
    {
      "title": "Genetic Nicotinamide N-Methyltransferase (Nnmt) Deficiency in Male Mice Improves Insulin Sensitivity in Diet-Induced Obesity.",
      "authors": "Brachs S, Polack J, Brachs M, Jahn-Hofmann K, Elvert R, Pfenninger A, Bärenz F, Margerie D, Mai K, Spranger J, Kannt A",
      "journal": "Diabetes",
      "pmid": "30552109"
    },
    {
      "title": "Identification of novel Piperazine based bisubstrate inhibitors of human nicotinamide N-methyltransferase (hNNMT) with potent enzyme inhibition.",
      "authors": "Harikrishna AS, Kesavan V",
      "journal": "Bioorg Med Chem",
      "pmid": "40961781"
    },
    {
      "title": "Nicotinamide riboside is uniquely and orally bioavailable in mice and humans",
      "authors": "Trammell SAJ, Schmidt MS, Weidemann BJ, Redpath P, Jaksch F, Dellinger RW, et al.",
      "journal": "Nat Commun. 2016;7:12948.",
      "pmid": "27721479"
    },
    {
      "title": "Nicotinamide N-methyltransferase: a methyltransferase regulating cellular metabolism through methyl donor balance",
      "authors": "Hong S, Moreno-Navarrete JM, Wei X, Kikukawa Y, Tzameli I, Prasad D, Lee Y, Asara JM, Fernandez-Real JM, Maratos-Flier E, Pissios P.",
      "journal": "Nat Med. 2015;21(8):887-894.",
      "pmid": "26168293"
    }
  ],
  "faq": [
    {
      "q": "Co oznacza status PRECLINICAL-ONLY i dlaczego ma znaczenie?",
      "a": "'Tylko preclinical' oznacza, że kandydat związek NIE przeszedł human Phase I / II / III badań klinicznych — istnieje tylko evidence in-vitro (kultura komórek) + ex-vivo (próbki tkanek) + in-vivo (modele zwierzęce, głównie mysz). Status 5-Amino-1MQ: in-vitro dane IC50 (Neelakantan 2017 PMID 28533098) + model myszy NNMT-knockdown analog evidence (Kraus 2014 PMID 24717513). Human PK (okres półtrwania, biodostępność, szlak metabolizmu), ludzkie okno bezpieczeństwa (LD50, no-observed-adverse-effect-level) i ludzka evidence skuteczności (RCT) NIE istnieją. Bezpieczny protokół konsumpcji ludzkiej nie istnieje."
    },
    {
      "q": "Biologia szlaku NNMT — co właściwie reguluje?",
      "a": "NNMT (nicotinamide N-methyltransferase) to enzym cytosolowy metylujący nicotinamide (substrat szlaku NAD pokrewny witaminie-B3) do N1-methylnicotinamide używając SAM jako donora. Aktywność NNMT jest overekspresjonowana w otyłej tkance tłuszczowej + tkance hepatocytów, wyczerpując pulę SAM i zmniejszając metylację histonów + syntezę poliamin. Downstream marker: akumulacja 1-methylnicotinamide z bias energy-storage to jeden z proponowanych mechanism pillars patofizjologii otyłość + insulinooporność. Model myszy NNMT-knockdown otyłej produkuje +30% wzrost tempa metabolicznego + wzrost wrażliwości na insulinę bez treningu w 4-8 tygodni (Kraus 2014 Nature PMID 24717513)."
    },
    {
      "q": "Niuans statusu WADA — banned, allowed czy 'S0 catch-all'?",
      "a": "5-Amino-1MQ NIE jest wyraźnie zakazany na liście prohibited WADA, więc technicznie wpada do kategorii 'allowed'. JEDNAK klauzula WADA 'S0 catch-all non-approved substance' może potencjalnie się stosować: 'any pharmacological substance which is not addressed by any of the subsequent sections of the list and with no current approval by any governmental regulatory authority for human therapeutic use'. Biorąc pod uwagę status FDA + EMA never approved + status research-chemical, 5-Amino-1MQ może tu wpadać. Dla aktywnych sportowców profesjonalna droga to wyjaśnienie ryzyka przez konsultację z NADA."
    },
    {
      "q": "Dlaczego sprzedaje się online, skoro to tylko preclinical?",
      "a": "Research-chemical underground market NIE jest FDA-Rx pharmacy: status preclinical-only nie blokuje syntezy + online sale. Od 2022-2023 online-marketed produkty '50-150 mg/kapsuła 5-Amino-1MQ' są sprzedawane pod legal loophole research-chemical: disclaimer 'NIE do konsumpcji ludzkiej, tylko in-vitro do badań' pozwala vendorom unikać regulacji Rx-pharmacy. Realistycznie 99% konsumentów kupuje z intencją konsumpcji ludzkiej, a ryzyko label-claim + HPLC-content-untested batch jest wysokie. Według Cohen 2017 JAMA SARMs-pokrewny analog RCT, 25-30% online-marketed produktów research-chemical NIE zawierało deklarowanego związku lub zawierało inne molekuły."
    }
  ],
  "related": [
    "mots-c",
    "l-carnitine",
    "gw-501516"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0,
      "medium": 0,
      "high": 0
    },
    "unit": "RESEARCH-ONLY (brak human Rx dose)",
    "note": "PRECLINICAL-ONLY chemical — human trials NIE istnieją, brak human Rx dose. Ekstrapolacja modelu myszy: 50-200 mg/kg/dziennie PO (kontekst Kraus 2014 NNMT-knockdown analog). Konwersja mysz → człowiek BSA (~12x redukcja dawki) + nieznana biodostępność oznaczają, że human-equivalent NIE jest niezawodnie obliczalna. Research-chemical underground market 50-150 mg/kapsuła online produkty: label-claim discrepancy + HPLC-untested content. FDA never approved + UE EMA never approved. Kategoria WADA 'S0 catch-all non-approved substance' może się stosować dla aktywnych sportowców. Konsumpcja ludzka NIE zalecana — bezpieczny protokół nie istnieje."
  },
  "anecdote": "Doniesienia społeczności opisują 5-Amino-1MQ jako wysoko ceniony za utratę tłuszczu, a użytkownicy opisują subtelny, podstawowy efekt utraty tłuszczu, który buduje się z czasem. Raporty często obejmują lepszą całodzienną energię. Poprzez hamowanie NNMT, związek obniża krążące poziomy NAD+, zachowując więcej NAD+ wewnątrz komórek, gdzie jest metabolicznie aktywny. Dobrze łączy się ze związkami, które aktywnie zwiększają metabolizm — Cardarine, iniekcyjną L-karnityną lub Retatrutydem. Najlepiej traktować jako codzienny optymalizator utraty tłuszczu tła, a nie główny czynnik napędzający.\n\n5-Amino-1MQ można podawać doustnie (dostępne są formy kapsułkowane) lub podskórnie."
}
