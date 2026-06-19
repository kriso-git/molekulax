// SANA (MVD-1) – clinical-stage small molecule Eolo Pharma, aktywator
// termogenezy zależnej od kreatyny ("futile creatine cycle"). 3 cytowane
// badania ustanawiają SZLAK (Kazak 2015 Cell PMID 26496606, Rahbani 2021
// Nature PMID 33597756, Sun 2021 Nature PMID 33981039), NIE samą SANA.

export default {
  "id": "sana-mvd1",
  "sideEffects": [
    { "hu": "Nincs publikált humán mellékhatás-profil: vizsgálati, klinikai-fázisú vegyület, a tünetek konkrét jellege és gyakorisága NEM ismert.", "en": "No published human side-effect profile: an investigational clinical-phase compound, so the specific nature and frequency of effects are unknown.", "pl": "Brak opublikowanego profilu działań niepożądanych u ludzi: związek badawczy w fazie klinicznej, więc charakter i częstość objawów są nieznane." },
    { "hu": "Elméleti, mechanizmusból fakadó kockázat: a termogenezis (hőtermelés) emelése elvileg hőérzet-fokozódást, izzadást vagy a nyugalmi anyagcsere megváltozását okozhatja – ez NEM megerősített humán adat.", "en": "Theoretical mechanism-based risk: raising thermogenesis (heat production) could in principle increase warmth sensation, sweating or alter resting metabolism, this is NOT confirmed human data.", "pl": "Teoretyczne ryzyko wynikające z mechanizmu: wzrost termogenezy (produkcji ciepła) mógłby zwiększać uczucie gorąca, potliwość lub zmieniać metabolizm spoczynkowy, to NIE są potwierdzone dane u ludzi." },
    { "hu": "Ismeretlen máj- és vesehatás: nyilvános humán máj- és vesebiztonságossági adat nem áll rendelkezésre, a clearance és a szervterhelés NEM jellemzett.", "en": "Unknown hepatic and renal impact: no public human liver or kidney safety data exists, clearance and organ burden are uncharacterized.", "pl": "Nieznany wpływ na wątrobę i nerki: brak publicznych danych o bezpieczeństwie wątrobowym i nerkowym u ludzi, klirens i obciążenie narządów nieokreślone." },
    { "hu": "Ismeretlen kardiovaszkuláris és termoregulációs hatás: nincs publikus humán PK/PD, így a szív-, vérnyomás- és hőszabályozási hatások NEM mértek fel.", "en": "Unknown cardiovascular and thermoregulatory effect: no public human PK/PD, so cardiac, blood-pressure and heat-regulation effects are unassessed.", "pl": "Nieznany wpływ na układ krążenia i termoregulację: brak publicznych danych PK/PD u ludzi, więc efekty sercowe, ciśnieniowe i termoregulacyjne nie zostały ocenione." },
    { "hu": "Ismeretlen interakciós és kumulatív kockázat más anyagcsere-aktiváló szerekkel (MOTS-c, BAM15, SLU-PP-915, ATX-304); a kombinációkról nincs klinikai adat.", "en": "Unknown interaction and additive risk with other metabolism-activating agents (MOTS-c, BAM15, SLU-PP-915, ATX-304); no clinical data on combinations.", "pl": "Nieznane ryzyko interakcji i sumowania z innymi środkami aktywującymi metabolizm (MOTS-c, BAM15, SLU-PP-915, ATX-304); brak danych klinicznych o łączeniu." },
    { "hu": "Termékbiztonsági kockázat: a SANA nincs a nyílt piacon, így bármilyen 'SANA' néven kínált online termék azonosíthatatlan tartalmú és megbízhatatlan.", "en": "Product-safety risk: SANA is not on the open market, so any product sold online as 'SANA' has unverifiable contents and is unreliable.", "pl": "Ryzyko bezpieczeństwa produktu: SANA nie jest dostępna na otwartym rynku, więc każdy produkt sprzedawany jako 'SANA' ma niezweryfikowaną zawartość i jest niewiarygodny." }
  ],
  "contraindications": [
    { "hu": "Humán öngyógyszerelés általában: vizsgálati, NEM engedélyezett (sem FDA, sem EMA) vegyület, jóváhagyott humán adagolás vagy protokoll nélkül – orvosi felügyelt klinikai vizsgálaton kívüli használat ellenjavallt.", "en": "Human self-medication in general: an investigational, NOT approved (neither FDA nor EMA) compound with no approved human dose or protocol, use outside a supervised clinical trial is contraindicated.", "pl": "Samoleczenie u ludzi w ogóle: związek badawczy, NIEzatwierdzony (ani FDA, ani EMA), bez zatwierdzonej dawki ani protokołu, stosowanie poza nadzorowanym badaniem klinicznym jest przeciwwskazane." },
    { "hu": "Terhesség és szoptatás: abszolút ellenjavallat – nincs humán reprodukciós biztonságossági adat.", "en": "Pregnancy and breastfeeding: absolute contraindication, no human reproductive safety data.", "pl": "Ciąża i karmienie piersią: bezwzględne przeciwwskazanie, brak danych o bezpieczeństwie reprodukcyjnym u ludzi." },
    { "hu": "Ismert máj- vagy vesebetegség: a humán clearance és a szervterhelés NEM ismert, ellenjavallt.", "en": "Known liver or kidney disease: human clearance and organ burden are unknown, contraindicated.", "pl": "Znana choroba wątroby lub nerek: klirens u ludzi i obciążenie narządów są nieznane, przeciwwskazane." },
    { "hu": "Szív-érrendszeri betegség: nincs humán kardiovaszkuláris biztonságossági adat egy energialeadás-emelő mechanizmushoz, ellenjavallt.", "en": "Cardiovascular disease: no human cardiovascular safety data for an energy-expenditure-raising mechanism, contraindicated.", "pl": "Choroba sercowo-naczyniowa: brak danych o bezpieczeństwie sercowo-naczyniowym u ludzi dla mechanizmu podnoszącego wydatek energetyczny, przeciwwskazane." },
    { "hu": "Versenysport-aktív sportoló: egy nem engedélyezett, vizsgálati hatóanyagra a WADA 'S0 catch-all non-approved substance' kategória potenciálisan vonatkozhat.", "en": "Competitive athletes: the WADA 'S0 catch-all non-approved substance' category may potentially apply to a non-approved, investigational agent.", "pl": "Sportowcy wyczynowi: kategoria WADA 'S0 catch-all substancja niezatwierdzona' może potencjalnie dotyczyć niezatwierdzonego, badawczego środka." },
    { "hu": "Más anyagcsere-aktiváló / termogén szerekkel való egyidejű használat: a kumulatív és interakciós hatás ismeretlen, óvatosság javasolt (relatív ellenjavallat).", "en": "Concurrent use with other metabolism-activating / thermogenic agents: additive and interaction effects are unknown, caution advised (relative contraindication).", "pl": "Jednoczesne stosowanie z innymi środkami aktywującymi metabolizm / termogennymi: efekty sumowania i interakcji są nieznane, zaleca się ostrożność (przeciwwskazanie względne)." }
  ],
  "name": "SANA (MVD-1)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#fb923c",
  "tagColor": "rgba(251,146,60,0.18)",
  "shortDesc": "Clinical-stage small molecule (Eolo Pharma, kod rozwojowy MVD1), który aktywuje termogenezę zależną od kreatyny ('futile creatine cycle' w termogenicznej / beżowej tkance tłuszczowej), podnosząc WYDATEK ENERGETYCZNY zamiast tłumić apetyt jak leki GLP-1. 3 cytowane badania ustanawiają SZLAK, NIE SANA. Badawczy, NIE zatwierdzony.",
  "description": "SANA (kod rozwojowy MVD1) to clinical-stage small molecule kandydat firmy Eolo Pharma, który podchodzi do otyłości od fundamentalnie innej strony niż dzisiejsze leki tłumiące apetyt (agoniści receptora GLP-1 i podobne). Podczas gdy tamte zmniejszają spożycie, SANA dąży do podniesienia WYDATKU ENERGETYCZNEGO (energy expenditure) poprzez farmakologiczną aktywację termogenezy zależnej od kreatyny (tzw. 'futile creatine cycle' w termogenicznej, beżowej tkance tłuszczowej). Jest opisywana jako jedyna small molecule w rozwoju klinicznym, która specyficznie celuje w ten mechanizm, a Eolo Pharma opublikowała badania first-in-human na jej temat. WAŻNE rozróżnienie: sam szlak termogenezy kreatynowej to zwalidowana biologia (Kazak, Rahbani, Sun i współpracownicy), ale trzy badania cytowane poniżej ustanawiają ten SZLAK, NIE są badaniami klinicznymi SANA. Własne dane ludzkie SANA pochodzą z programu first-in-human Eolo Pharma (wspomniane jako program, BEZ wymyślonego dla niego PMID). Status: badawczy, clinical-stage związek, NIE zatwierdzony (ani FDA, ani EMA), niedostępny na otwartym rynku research-chemical w sposób, w jaki dostępne są starsze związki. Skuteczność i bezpieczeństwo u ludzi wciąż się kształtują.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Aktywacja termogenezy zależnej od kreatyny ('futile creatine cycle') w termogenicznej / beżowej tkance tłuszczowej – podnosi wydatek energetyczny, NIE tłumi apetytu"
    },
    {
      "label": "Twórca / kod",
      "value": "Eolo Pharma; kod rozwojowy MVD1. Clinical-stage, program first-in-human opublikowany."
    },
    {
      "label": "Okres półtrwania",
      "value": "NIE publiczny (związek clinical-stage; dane human PK niedostępne publicznie)"
    },
    {
      "label": "Początek działania",
      "value": "NIE znany publicznie (skuteczność u ludzi wciąż się kształtuje w programie first-in-human)"
    },
    {
      "label": "Status prawny",
      "value": "Badawczy, NIE zatwierdzony (ani FDA, ani EMA). Nie na otwartym rynku research-chemical w sposób, w jaki dostępne są starsze związki."
    }
  ],
  "mechanism": "SANA (MVD1) farmakologicznie celuje w termogenezę zależną od kreatyny, tzw. 'futile creatine cycle' w termogenicznej, beżowej tkance tłuszczowej. W tym szlaku kinaza kreatynowa B (CKB) wraz z mitochondrialną fosfatazą alkaliczną (TNAP, tissue-nonspecific alkaline phosphatase) napędza cykl substratowy: fosfokreatyna jest syntetyzowana i hydrolizowana na przemian, co uwalnia ciepło i zwiększa wydatek energetyczny NIEZALEŻNIE od UCP1. To zwalidowany szlak termogenezy (Kazak, Rahbani, Sun i współpracownicy). Istotą mechanizmu jest to, że komórka nie wykonuje nowej pracy netto; zamiast tego energia wydawana na cyklowanie syntezy i rozpadu fosfokreatyny jest rozpraszana jako ciepło, podnosząc całkowity wydatek energetyczny. WAŻNE: trzy badania cytowane poniżej ustanawiają ten SZLAK (biologię termogenezy kreatynowej), NIE są badaniami klinicznymi SANA. Celem SANA jest farmakologiczna aktywacja tego mechanizmu, podejście do otyłości od strony wydatku energetycznego, a nie poprzez podejście tłumiące apetyt oparte na GLP-1. Własne dane skuteczności i bezpieczeństwa SANA u ludzi kształtują się poprzez program first-in-human Eolo Pharma; szczegółowe publiczne human PK/PD nie są tu dostępne.",
  "legalStatus": "Badawczy, clinical-stage small molecule (Eolo Pharma, MVD1). NIE zatwierdzony: ani FDA, ani EMA go nie zarejestrowała; HU + PL: niezarejestrowany. Niedostępny na otwartym rynku research-chemical w sposób, w jaki dostępne są starsze związki – jest w fazie rozwoju. WADA: aktywacja termogenezy zależnej od kreatyny nie jest wyraźnie wymieniona jako zakazana; obecna klasyfikacja to 'allowed', ALE dla niezatwierdzonej, badawczej substancji klauzula WADA 'S0 catch-all non-approved substance' może potencjalnie się stosować w kontekście sportu wyczynowego. Skuteczność/bezpieczeństwo u ludzi wciąż się kształtują.",
  "onsetTime": "NIE znany publicznie (skuteczność u ludzi wciąż się kształtuje w programie first-in-human)",
  "halfLife": "NIE publiczny (związek clinical-stage; dane human PK niedostępne publicznie)",
  "interactionsWith": [
    "mots-c",
    "bam15",
    "slu-pp-915",
    "atx-304"
  ],
  "aromatization": "Nie aromatyzuje – nie steryd, lecz small molecule celująca w termogenezę zależną od kreatyny. Brak interakcji z CYP19.",
  "hepatotoxicity": "Nieznana / kształtująca się – związek clinical-stage; długoterminowe bezpieczeństwo u ludzi NIE jest ustalone. Szczegółowe publiczne dane o bezpieczeństwie wątrobowym u ludzi nie są dostępne; ocena zależy od rozwoju programu first-in-human Eolo Pharma.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, lecz small molecule celująca w termogenezę zależną od kreatyny)",
  "bindingAffinity": "Brak publicznych ilościowych danych o powinowactwie wiązania dla SANA (np. IC50/EC50 celu). Celowaną biologią jest cykl substratowy fosfokreatyny napędzany przez CKB i TNAP w termogenicznej tkance tłuszczowej (Kazak 2015, Rahbani 2021, Sun 2021); te badania charakteryzują szlak, nie powinowactwo molekuły SANA.",
  "detectionWindow": "Brak publicznie zwalidowanego, WADA-akredytowanego protokołu wykrywania dla SANA (związek badawczy). W kontekście sportu wyczynowego ocena byłaby interpretowana pod kategorią 'S0 catch-all'.",
  "benefits": [
    "Inne podejście do otyłości: podnosi WYDATEK ENERGETYCZNY zamiast tłumić apetyt jak leki GLP-1",
    "Aktywacja termogenezy zależnej od kreatyny ('futile creatine cycle') w termogenicznej / beżowej tkance tłuszczowej – produkcja ciepła niezależna od UCP1 (Kazak 2015 PMID 26496606)",
    "Celowany szlak to zwalidowana biologia: futile creatine cycling napędzany przez CKB (Rahbani 2021 PMID 33597756) i mitochondrialna hydroliza fosfokreatyny przez TNAP (Sun 2021 PMID 33981039)",
    "Według Eolo Pharma jedyna small molecule w rozwoju klinicznym specyficznie celująca w ten mechanizm, z programem first-in-human",
    "JEDNAK: trzy powyższe cytaty ustanawiają SZLAK, NIE SANA; skuteczność/bezpieczeństwo u ludzi wciąż się kształtują"
  ],
  "quickStart": [
    "Badawczy, clinical-stage związek – NIE zatwierdzony (ani FDA, ani EMA), brak zatwierdzonego dawkowania u ludzi",
    "3 cytowane badania ustanawiają SZLAK termogenezy kreatynowej, NIE są badaniami klinicznymi SANA",
    "Własne dane ludzkie SANA kształtują się poprzez program first-in-human Eolo Pharma (program, nie PMID podany tutaj)",
    "Niedostępny na otwartym rynku research-chemical w sposób, w jaki dostępne są starsze związki; skuteczność i bezpieczeństwo u ludzi wciąż się kształtują"
  ],
  "quality": {
    "pure": [
      "Badawczy, clinical-stage small molecule (Eolo Pharma) – brak zatwierdzonego źródła farmaceutycznego lub oficjalnej formy ludzkiej",
      "Nie na otwartym rynku research-chemical w sposób, w jaki dostępne są starsze związki, więc 'czystość' nie może być odczytywana jako publicznie zwalidowane przez stronę trzecią dane batch",
      "Celowana biologia (termogeneza kreatynowa) jest dobrze udokumentowana; szczegółowa publiczna charakterystyka molekuły SANA jest ograniczona"
    ],
    "caution": [
      "Status clinical-stage: skuteczność i bezpieczeństwo u ludzi wciąż się kształtują, a długoterminowe dane ludzkie NIE istnieją",
      "Cytowane badania ustanawiają szlak, NIE SANA – ekstrapolacja na SANA nie jest udowodniona",
      "Publiczne human PK/PD, dane o bezpieczeństwie wątrobowym i nerkowym nie są dostępne"
    ],
    "avoid": [
      "Związek badawczy, samoleczenie u ludzi NIE zalecane – brak zatwierdzonego protokołu lub dawkowania",
      "Pre-existing choroba wątroby lub nerek: ludzki clearance i bezpieczeństwo NIE są znane",
      "Ciąża + karmienie piersią: bezwzględne przeciwwskazanie (brak danych ludzkich)",
      "Aktywni sportowcy wyczynowi: klauzula WADA 'S0 catch-all non-approved substance' może potencjalnie się stosować do niezatwierdzonej, badawczej substancji",
      "Niezweryfikowane produkty sprzedawane online jako 'SANA': związek nie jest na otwartym rynku, więc takie źródła są niewiarygodne"
    ]
  },
  "interactions": [
    "MOTS-c – mechanizm pokrewny metabolizmowi mitochondrialnemu; jakakolwiek kombinacja to tylko research-context, brak danych klinicznych",
    "BAM15 – mitochondrialny uncoupler (podnoszący wydatek energetyczny) overlap mechanizmu; kombinacja badawcza, brak danych klinicznych",
    "SLU-PP-915 – cel pokrewny termogenezie/wydatkowi energetycznemu; kombinacja badawcza, brak danych klinicznych",
    "ATX-304 – overlap mechanizmu aktywacji metabolicznej; kombinacja badawcza, brak danych klinicznych"
  ],
  "studies": [
    {
      "title": "A creatine-driven substrate cycle enhances energy expenditure and thermogenesis in beige fat",
      "authors": "Kazak L, Chouchani ET, Jedrychowski MP, Erickson BK et al.",
      "journal": "Cell. 2015",
      "pmid": "26496606"
    },
    {
      "title": "Creatine kinase B controls futile creatine cycling in thermogenic fat",
      "authors": "Rahbani JF, Roesler A, Hussain MF, Samborska B et al.",
      "journal": "Nature. 2021",
      "pmid": "33597756"
    },
    {
      "title": "Mitochondrial TNAP controls thermogenesis by hydrolysis of phosphocreatine",
      "authors": "Sun Y, Rahbani JF, Jedrychowski MP, Riley CL et al.",
      "journal": "Nature. 2021",
      "pmid": "33981039"
    }
  ],
  "faq": [
    {
      "q": "Czym jest SANA (MVD-1) i czym różni się od leków GLP-1?",
      "a": "SANA (kod rozwojowy MVD1) to clinical-stage small molecule kandydat firmy Eolo Pharma. Agoniści receptora GLP-1 (i podobne leki) zmniejszają apetyt / spożycie. SANA natomiast podnosi WYDATEK ENERGETYCZNY poprzez aktywację termogenezy zależnej od kreatyny – więc podchodzi do otyłości z fundamentalnie innego kąta. Jest opisywana jako jedyna small molecule w rozwoju klinicznym, która specyficznie celuje w ten mechanizm."
    },
    {
      "q": "Czym jest termogeneza zależna od kreatyny ('futile creatine cycle')?",
      "a": "W termogenicznej, beżowej tkance tłuszczowej kinaza kreatynowa B (CKB) wraz z mitochondrialną fosfatazą alkaliczną (TNAP) napędza cykl substratowy: fosfokreatyna jest syntetyzowana i hydrolizowana na przemian, uwalniając ciepło i zwiększając wydatek energetyczny niezależnie od UCP1. To zwalidowany szlak termogenezy (Kazak 2015 Cell PMID 26496606; Rahbani 2021 Nature PMID 33597756; Sun 2021 Nature PMID 33981039). Celem SANA jest farmakologiczna aktywacja tego mechanizmu."
    },
    {
      "q": "Czy cytowane badania to badania kliniczne SANA?",
      "a": "Nie. TO KRYTYCZNE: trzy cytowane badania (Kazak 2015, Rahbani 2021, Sun 2021) ustanawiają SZLAK TERMOGENEZY KREATYNOWEJ, w który SANA/MVD-1 farmakologicznie celuje – NIE są badaniami klinicznymi samej SANA. Własne dane ludzkie SANA pochodzą z programu first-in-human Eolo Pharma; nie podaje się tu dla niego osobnego PMID, ponieważ nie cytujemy konkretnej zwalidowanej publikacji trial."
    },
    {
      "q": "Czy można ją kupić? Jaki jest jej status i bezpieczeństwo?",
      "a": "SANA to badawczy, clinical-stage związek, którego ani FDA, ani EMA nie zatwierdziła. Nie jest dostępny na otwartym rynku research-chemical w sposób, w jaki dostępne są starsze związki. Skuteczność i bezpieczeństwo u ludzi wciąż się kształtują w programie first-in-human Eolo Pharma; szczegółowe publiczne human PK oraz dane o bezpieczeństwie wątrobowym/nerkowym nie są dostępne. Ponieważ nie jest sterydem, nie aromatyzuje, ale długoterminowe bezpieczeństwo u ludzi NIE jest ustalone."
    }
  ],
  "related": [
    "mots-c",
    "bam15",
    "slu-pp-915",
    "atx-304"
  ],
  "anecdote": "Zainteresowanie wokół SANA (MVD-1) wynika głównie z faktu, że reprezentuje ona rzadkie podejście od strony wydatku energetycznego: zamiast tłumić apetyt, próbuje farmakologicznie rozkręcić zależną od kreatyny produkcję ciepła w termogenicznej tkance tłuszczowej. Ponieważ jest to clinical-stage, badawczy związek, nie ma istotnego doświadczenia użytkowników do zaraportowania, i nie jest dostępny na otwartym rynku w sposób, w jaki dostępne są starsze środki. Realistyczny obraz: ekscytujący, dobrze ugruntowany mechanistycznie kierunek (szlak termogenezy kreatynowej to zwalidowana biologia), ale skuteczność i bezpieczeństwo u ludzi wciąż się kształtują poprzez program first-in-human Eolo Pharma. Odpowiedzialna postawa to tutaj cierpliwość: solidne wnioski wymagają opublikowanych, recenzowanych danych ludzkich, a nie ekstrapolacji z badań szlaku."
}
