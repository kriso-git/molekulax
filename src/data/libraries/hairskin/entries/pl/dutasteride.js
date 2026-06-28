// Wpis biblioteki Włosy i Skóra. Źródła: etykieta FDA Avodart (GSK), Gubelin Harcha
// faza III dawkowanie w AGA (PMID 24411083), Shanshanwal 2017 dutasteryd>finasteryd
// (PMID 27549867), długoterminowe bezpieczeństwo w AGA (PMID 26893187), przegląd
// bezpieczeństwa 5ARI Hirshburg (PMID 27672412). Podwójny inhibitor 5-alfa-reduktazy
// (typ I + II), ~90-95% supresji DHT. Proza PL. Tablice bezpieczeństwa są trójjęzyczne.

export default {
  "id": "dutasteride",
  "defaultVariant": "oral",
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": { "hu": "Orális kapszula", "en": "Oral capsule", "pl": "Kapsułka doustna" },
      "routeNote": {
        "hu": "A standard, bizonyítékkal bíró forma: napi 0,5 mg (Avodart) szisztémásan ~90-95%-kal csökkenti a DHT-t (erősebben, mint a finaszterid). Nagyon hosszú felezési idő; szisztémás mellékhatás- és hosszú (6 hónap) washout-kockázattal.",
        "en": "The standard, evidence-backed form: 0.5 mg/day (Avodart) systemically reduces DHT by ~90-95% (stronger than finasteride). Very long half-life; systemic side-effect and long (6-month) washout risk.",
        "pl": "Standardowa, poparta dowodami forma: 0,5 mg/dzień (Avodart) ogólnoustrojowo redukuje DHT o ~90-95% (silniej niż finasteryd). Bardzo długi okres półtrwania; ryzyko działań ogólnoustrojowych i długi (6 mies.) washout."
      },
      "image": "/pharmaceutical/softgel-orange.png",
      "halfLife": "~5 tygodni (terminalny)",
      "bioavailability": "~60% (doustnie)",
      "onsetTime": { "hu": "3-6 hónap (stabilizáció), 6-12 hónap (visszanövekedés)", "en": "3-6 months (stabilization), 6-12 months (regrowth)", "pl": "3-6 miesięcy (stabilizacja), 6-12 miesięcy (odrost)" },
      "dosing": { "hu": "0,5 mg/nap (Avodart), AGA-ra off-label vagy engedélyezett (KR/JP). BPH-ra 0,5 mg/nap.", "en": "0.5 mg/day (Avodart), off-label or approved (KR/JP) for AGA. For BPH 0.5 mg/day.", "pl": "0,5 mg/dzień (Avodart), off-label lub zatwierdzony (KR/JP) na AGA. Na BPH 0,5 mg/dzień." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.5, "medium": 0.5, "high": 0.5 }, "unit": "mg/dzień", "note": { "hu": "Standard 0,5 mg/nap. A hosszú felezési idő miatt egyes AGA-protokollok ritkábban adagolnak (nem hivatalos). NŐKNEK terhességi korban tilos.", "en": "Standard 0.5 mg/day. Due to the long half-life some AGA protocols dose less often (unofficial). Forbidden for women of childbearing potential.", "pl": "Standard 0,5 mg/dzień. Z powodu długiego półtrwania niektóre protokoły AGA dawkują rzadziej (nieoficjalnie). Zakazane dla kobiet w wieku rozrodczym." } },
      "legalStatus": "UE/HU/USA: na receptę przy BPH (Avodart). Na AGA off-label w UE/USA, zatwierdzony w KR/JP (0,5 mg).",
      "prescriptionStatus": "Na receptę (Rx)",
      "atcCode": "G04CB02",
      "indications": [ "Łagodny rozrost gruczołu krokowego (0,5 mg)", "Łysienie androgenowe (off-label UE/USA; zatwierdzony KR/JP)" ],
      "contraindications": [ "Ciąża", "Kobiety w wieku rozrodczym", "Ciężkie zaburzenia czynności wątroby", "Nadwrażliwość" ],
      "commonSideEffects": [ "Seksualne: libido, erekcja, ejakulacja (1-4%, nieco częstsze niż przy finasterydzie)", "Ginekomastia", "Zaburzenia nastroju (ostrzeżenie klasowe)", "Spadek PSA ~50% (przy badaniu przesiewowym × 2)", "Długi washout: 6-miesięczny zakaz oddawania krwi/nasienia" ]
    },
    {
      "id": "topical",
      "routeId": "topical",
      "routeLabel": { "hu": "Topikális oldat", "en": "Topical solution", "pl": "Roztwór miejscowy" },
      "routeNote": {
        "hu": "Fejlődő, fejbőrre vitt forma (oldat vagy mezoterápia): a cél a lokális erős DHT-gátlás kisebb szisztémás expozícióval. ÚJABB, fázis-2 szintű irány; a dutaszterid nagyon hosszú felezési ideje miatt a szisztémás biztonság külön mérlegelendő.",
        "en": "Emerging scalp-applied form (solution or mesotherapy): aiming for strong local DHT inhibition with lower systemic exposure. A NEWER, phase-2-level direction; due to dutasteride's very long half-life, systemic safety needs separate consideration.",
        "pl": "Rozwijająca się forma na skórę głowy (roztwór lub mezoterapia): silne miejscowe hamowanie DHT przy mniejszej ekspozycji ogólnoustrojowej. NOWSZY kierunek (faza 2); z powodu bardzo długiego półtrwania bezpieczeństwo ogólnoustrojowe wymaga osobnej oceny."
      },
      "image": "/performance/topical-solution-clear.png",
      "halfLife": "Retencja w skórze głowy; frakcja ogólnoustrojowa pozostaje o bardzo długim półtrwaniu",
      "bioavailability": "Zmniejszona ogólnoustrojowa (vs doustna ~60%), ale ostrożność z powodu długiego półtrwania",
      "onsetTime": { "hu": "Hónapok; a topikális forma evidenciája korlátozottabb", "en": "Months; the topical form has more limited evidence", "pl": "Miesiące; forma miejscowa ma bardziej ograniczone dowody" },
      "dosing": { "hu": "Vizsgálati topikális dutaszterid-oldat (kb. 0,01-0,05%), illetve mezoterápia; nem standardizált, magisztrális/vizsgálati.", "en": "Investigational topical dutasteride solution (~0.01-0.05%), or mesotherapy; not standardized, compounded/investigational.", "pl": "Badawczy roztwór dutasterydu (~0,01-0,05%), lub mezoterapia; niestandaryzowany, recepturowy/badawczy." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.01, "medium": 0.02, "high": 0.05 }, "unit": "% (miejscowo)", "note": { "hu": "Vizsgálati topikális dutaszterid jellemzően 0,01-0,05%. Nem standardizált, magisztrális/vizsgálati; a hosszú felezési idő miatt szisztémás biztonság külön mérlegelendő.", "en": "Investigational topical dutasteride is typically 0.01-0.05%. Not standardized, compounded/investigational; long half-life means systemic safety needs separate consideration.", "pl": "Badawczy dutasteryd miejscowy zwykle 0,01-0,05%. Niestandaryzowany, recepturowy/badawczy; długi półtrwania wymaga oceny bezpieczeństwa." } },
      "legalStatus": "Recepturowa/badawcza forma miejscowa; nie jest standardowym zatwierdzonym preparatem. Dowody są bardziej ograniczone niż dla formy doustnej.",
      "prescriptionStatus": "Recepturowy / badawczy",
      "atcCode": "G04CB02 (substancja czynna)",
      "indications": [ "Łysienie androgenowe (na skórę głowy, kierunek rozwijający się)", "Silne miejscowe hamowanie DHT przy dążeniu do mniejszej ekspozycji ogólnoustrojowej" ],
      "contraindications": [ "Ciąża (także z powodu wchłaniania przezskórnego)", "Ostrożność u kobiet w wieku rozrodczym", "Nadwrażliwość" ],
      "commonSideEffects": [ "Cel: mniej działań ogólnoustrojowych (mniejsze wchłanianie)", "Miejscowe podrażnienie skóry głowy", "Z powodu długiego półtrwania nie można wykluczyć działania ogólnoustrojowego", "Bardziej ograniczone dane o długoterminowym bezpieczeństwie" ]
    }
  ],
  "sideEffects": [
    { "hu": "Szexuális mellékhatások: libidócsökkenés, erektilis diszfunkció és ejakulációs zavar (egyenként kb. 1-4%); a teljesebb androgén-blokk miatt esetenként valamivel gyakoribb, mint finaszteridnél, többségében reverzibilis a leállítás után.", "en": "Sexual side effects: decreased libido, erectile dysfunction and ejaculation disorder (~1-4% each); sometimes slightly more frequent than with finasteride due to the fuller androgen blockade, mostly reversible after discontinuation.", "pl": "Działania seksualne: obniżenie libido, zaburzenia erekcji i ejakulacji (po ~1-4%); czasem nieco częstsze niż przy finasterydzie z powodu pełniejszej blokady androgenowej, w większości odwracalne po odstawieniu." },
    { "hu": "Emlőelváltozások: gynaecomastia, emlőfeszülés és érzékenység; ritkán emlőcsomó vagy mellbimbóváladék, amit ki kell vizsgálni.", "en": "Breast changes: gynaecomastia, breast tenderness and pain; rarely a breast lump or nipple discharge that must be evaluated.", "pl": "Zmiany w piersiach: ginekomastia, tkliwość i ból piersi; rzadko guzek lub wyciek z brodawki wymagający diagnostyki." },
    { "hu": "Hangulati zavarok: depresszió és csökkent libido jelentve; a 5α-reduktáz-gátlók osztály-figyelmeztetése, pszichiátriai tünet esetén leállítás és orvosi konzultáció.", "en": "Mood disorders: depression and decreased libido reported; a class warning for 5-alpha-reductase inhibitors, discontinue and seek medical advice if psychiatric symptoms occur.", "pl": "Zaburzenia nastroju: zgłaszano depresję i obniżone libido; ostrzeżenie klasowe dla inhibitorów 5-alfa-reduktazy, przy objawach psychiatrycznych odstawić i skonsultować się z lekarzem." },
    { "hu": "PSA-szint kb. 50%-os csökkenése: a prosztataspecifikus antigén álságosan alacsony lesz, ezért prosztatarák-szűréskor a mért PSA-értéket kétszeresére kell korrigálni a téves negatív elkerülésére.", "en": "PSA decreases by ~50%: prostate-specific antigen becomes falsely low, so during prostate cancer screening the measured PSA must be doubled to avoid a false negative.", "pl": "Spadek PSA o ~50%: PSA staje się fałszywie niski, dlatego przy badaniach przesiewowych raka prostaty zmierzone PSA należy podwoić, aby uniknąć wyniku fałszywie ujemnego." },
    { "hu": "Túlérzékenységi és bőrreakciók: kiütés, viszketés, urticaria, lokalizált ödéma és (ritkán) angioödéma; allergiás reakció esetén azonnali leállítás.", "en": "Hypersensitivity and skin reactions: rash, pruritus, urticaria, localized edema and (rarely) angioedema; immediate discontinuation if an allergic reaction occurs.", "pl": "Reakcje nadwrażliwości i skórne: wysypka, świąd, pokrzywka, miejscowy obrzęk i (rzadko) obrzęk naczynioruchowy; przy reakcji alergicznej natychmiastowe odstawienie." },
    { "hu": "Magas malignitási fokú prosztatarák enyhén emelkedett incidenciája (Gleason 8-10) a REDUCE-vizsgálatban, miközben az összes prosztatarák kockázata csökkent; teljes túlélésbeli különbség nélkül.", "en": "Slightly increased incidence of high-grade prostate cancer (Gleason 8-10) in the REDUCE trial, while overall prostate cancer risk fell; with no difference in overall survival.", "pl": "Nieznacznie zwiększona częstość raka prostaty o wysokim stopniu złośliwości (Gleason 8-10) w badaniu REDUCE, przy spadku ogólnego ryzyka raka prostaty; bez różnicy w przeżyciu całkowitym." }
  ],
  "contraindications": [
    { "hu": "Terhesség és fogamzóképes korú nő: a dutaszterid a férfi magzat külső nemi szervének fejlődési rendellenességét okozhatja, ezért nőknek szigorúan ellenjavallt.", "en": "Pregnancy and women of childbearing potential: dutasteride can cause malformation of the external genitalia of a male fetus, so it is strictly contraindicated in women.", "pl": "Ciąża i kobiety w wieku rozrodczym: dutasteryd może powodować wady zewnętrznych narządów płciowych płodu męskiego, dlatego jest bezwzględnie przeciwwskazany u kobiet." },
    { "hu": "A lágyzselatin-kapszula megérintése terhes nő által, ha az szivárog: a dutaszterid a bőrön át felszívódhat; az ép kapszulát biztonságos kezelni, a sérültet nem.", "en": "Handling of the soft-gelatin capsule by a pregnant woman if it is leaking: dutasteride can be absorbed through the skin; an intact capsule is safe to handle, a damaged one is not.", "pl": "Dotykanie kapsułki żelatynowej przez kobietę w ciąży, jeśli przecieka: dutasteryd może wchłaniać się przez skórę; nieuszkodzoną kapsułkę można bezpiecznie dotykać, uszkodzonej nie." },
    { "hu": "Vér- vagy spermadonáció a kezelés alatt és legalább 6 hónapig az utolsó adag után: a nagyon hosszú felezési idő miatt a tilalom jóval hosszabb, mint finaszteridnél (1 hónap).", "en": "Blood or sperm donation during treatment and for at least 6 months after the last dose: because of the very long half-life, the deferral is far longer than for finasteride (1 month).", "pl": "Oddawanie krwi lub nasienia w trakcie leczenia i przez co najmniej 6 miesięcy po ostatniej dawce: ze względu na bardzo długi okres półtrwania zakaz jest znacznie dłuższy niż przy finasterydzie (1 miesiąc)." },
    { "hu": "Súlyos májkárosodás: a dutaszterid nagymértékben a májban metabolizálódik (CYP3A4), súlyos elégtelenségben óvatosság szükséges, mert nincs rá vizsgálat.", "en": "Severe hepatic impairment: dutasteride is extensively metabolized in the liver (CYP3A4); caution is required in severe insufficiency as it has not been studied.", "pl": "Ciężkie zaburzenia czynności wątroby: dutasteryd jest w znacznym stopniu metabolizowany w wątrobie (CYP3A4); w ciężkiej niewydolności wymagana ostrożność, ponieważ nie był badany." },
    { "hu": "Ismert túlérzékenység a dutaszteriddel, más 5α-reduktáz-gátlóval vagy bármely segédanyaggal szemben.", "en": "Known hypersensitivity to dutasteride, another 5-alpha-reductase inhibitor, or any excipient.", "pl": "Znana nadwrażliwość na dutasteryd, inny inhibitor 5-alfa-reduktazy lub którąkolwiek substancję pomocniczą." },
    { "hu": "Gyermekek és serdülők (18 év alatt): biztonságosság és hatékonyság nem igazolt, nem javallott.", "en": "Children and adolescents (under 18 years): safety and efficacy not established, not indicated.", "pl": "Dzieci i młodzież (poniżej 18 lat): bezpieczeństwo i skuteczność nie zostały ustalone, nie zaleca się." }
  ],
  "name": "Dutasteride",
  "image": "/pharmaceutical/softgel-orange.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Podwójny inhibitor 5-alfa-reduktazy (typ I + II). Zatwierdzony przez FDA na BPH (Avodart 0,5 mg), off-label na łysienie androgenowe (zatwierdzony w Korei Południowej/Japonii). Obniża stężenie DHT w surowicy o ~90-95%, silniej niż finasteryd.",
  "description": "Dutasteryd to syntetyczny 4-azasteroid opracowany przez GSK (Avodart, zatwierdzenie FDA na BPH w 2001). W odróżnieniu od finasterydu hamuje OBA izoenzymy 5-alfa-reduktazy (typ I + II), dzięki czemu obniża stężenie DHT w surowicy o ~90-95% (vs finasteryd ~70%). Na łysienie androgenowe w USA i UE jest OFF-LABEL, ale w Korei Południowej (2009) i Japonii (2015) jest oficjalnie zatwierdzony na wypadanie włosów w dawce 0,5 mg. Według badania fazy III z zakresem dawek (Gubelin Harcha 2014, PMID 24411083, 917 mężczyzn) dutasteryd 0,5 mg zwiększał liczbę i grubość włosów istotnie bardziej niż finasteryd 1 mg lub placebo. Z powodu wyjątkowo długiego, ~5-tygodniowego okresu półtrwania substancja czynna wydalana jest powoli, a stan stacjonarny ustala się przez kilka miesięcy.",
  "keyInfo": [
    { "label": "Kod ATC", "value": "G04CB02" },
    { "label": "Status recepty", "value": "Na receptę (Rx); off-label na AGA" },
    { "label": "Mechanizm działania", "value": "Podwójne hamowanie 5-alfa-reduktazy (I + II), ~90-95% redukcji DHT" },
    { "label": "Okres półtrwania", "value": "~5 tygodni (terminalny) – znacznie dłużej niż finasteryd" },
    { "label": "Początek działania", "value": "3-6 miesięcy (stabilizacja włosów), 6-12 miesięcy (odrost)" }
  ],
  "mechanism": "Dutasteryd kompetycyjnie i niemal nieodwracalnie hamuje oba izoenzymy 5-alfa-reduktazy (typ I – gruczoły łojowe, wątroba, skóra; typ II – prostata, mieszek włosowy), dlatego redukcja DHT w surowicy (~90-95%) jest silniejsza i pełniejsza niż w przypadku finasterydu, który hamuje tylko typ II (~70%). Na poziomie mieszka włosowego spadek DHT odwraca miniaturyzację androgenową: faza anagenu się wydłuża, a średnica łodygi włosa rośnie. Z powodu bardzo długiego okresu półtrwania działanie jest wyrównane, pominięte dawki mają mniejsze znaczenie, a po odstawieniu lek wydalany jest powoli.",
  "legalStatus": "UE/HU: na receptę przy BPH (Avodart 0,5 mg, generyk; Jalyn = dutasteryd + tamsulozyna). Na AGA off-label w UE/USA. Korea Południowa (2009) i Japonia (2015): 0,5 mg oficjalnie zatwierdzony na łysienie androgenowe. USA: FDA Rx, nieuwzględniony w wykazach substancji kontrolowanych.",
  "bioavailability": "~60% (doustnie, kapsułka żelatynowa); silnie wiązany z białkami osocza (>99%), duża objętość dystrybucji",
  "onsetTime": "3-6 miesięcy (stabilizacja włosów), 6-12 miesięcy (widoczny odrost)",
  "halfLife": "~5-tygodniowy terminalny okres półtrwania; stan stacjonarny ustala się przez 3-6 miesięcy (przy dawkowaniu dziennym)",
  "atcCode": "G04CB02",
  "prescriptionStatus": "Na receptę (Rx), dermatolog lub urolog; na AGA off-label w UE/USA",
  "indications": [
    "Łagodny rozrost gruczołu krokowego (BPH), 0,5 mg/dzień (Avodart)",
    "Kombinacja BPH + LUTS: dutasteryd + tamsulozyna (Jalyn, protokół CombAT)",
    "Łysienie androgenowe (off-label UE/USA; zatwierdzony w Korei Południowej/Japonii), 0,5 mg/dzień",
    "Mężczyźni z łysieniem niereagujący na finasteryd: alternatywa o silniejszej blokadzie DHT"
  ],
  "commonSideEffects": [
    "Działania seksualne: obniżenie libido, zaburzenia erekcji, zaburzenia ejakulacji (1-4%)",
    "Ginekomastia (powiększenie piersi, tkliwość)",
    "Zaburzenia nastroju (depresja – ostrzeżenie klasowe)",
    "Spadek PSA o ~50% – korekta PSA × 2 przy badaniu przesiewowym prostaty",
    "Długi washout: zakaz oddawania krwi/nasienia przez 6 miesięcy po ostatniej dawce"
  ],
  "cyp450": [
    "Substrat CYP3A4 (metabolizm pierwotny)",
    "Długi okres półtrwania może dodatkowo wzrosnąć z silnymi inhibitorami CYP3A4 (np. rytonawir, ketokonazol)"
  ],
  "crossMolInteractions": [
    "Finasteryd: nie łączyć – zbędne, nieracjonalne podwójne hamowanie 5AR, nasilone działania niepożądane",
    "Minoksydyl (miejscowo): KOMPLEMENTARNY mechanizm, częsta skojarzona terapia łysienia",
    "Tamsulozyna (alfa-bloker): synergistyczna w kombinacji na BPH (Jalyn / CombAT)",
    "Silne inhibitory CYP3A4 (rytonawir, ketokonazol, werapamil): ekspozycja na dutasteryd rośnie",
    "Terapia zastępcza testosteronem (TRT): może być stosowany do łagodzenia wzrostu DHT przy TRT (off-label)"
  ],
  "benefits": [
    "Silniejsza supresja DHT (~90-95%) niż finasteryd (~70%)",
    "W fazie III 0,5 mg dawał lepszy przyrost liczby włosów niż finasteryd 1 mg (Gubelin Harcha 2014)",
    "Długi okres półtrwania: pominięte dawki słabiej osłabiają efekt",
    "Opcja dla osób niereagujących na finasteryd",
    "W BPH zmniejsza też objętość prostaty i obniża potrzebę operacji"
  ],
  "quickStart": [
    "Łysienie (off-label): 0,5 mg/dzień, niezależnie od posiłków; niektóre protokoły dawkują rzadziej z powodu długiego półtrwania",
    "BPH: 0,5 mg/dzień (Avodart), często w skojarzeniu z tamsulozyną (Jalyn)",
    "Cierpliwość: znaczący efekt dla włosów po 6-12 miesiącach; zalecany wyjściowy obraz trichoskopowy",
    "Można łączyć z miejscowym minoksydylem 5% (mechanizm komplementarny)",
    "Konsekwentne stosowanie ważniejsze niż pora; po odstawieniu 6-miesięczny zakaz oddawania krwi/nasienia"
  ],
  "expectations": [
    { "label": "Miesiące 1-3", "body": "Możliwe początkowe nasilenie wypadania (\"shedding\"), gdy cykl włosowy się przestawia. Stężenie DHT w surowicy już głęboko (~90%+) stłumione. Brak jeszcze widocznego odrostu." },
    { "label": "Miesiące 6-12", "body": "Wypadanie włosów ustabilizowane, znaczące zagęszczenie w okolicy wierzchołka (korony). W BPH poprawia się wynik IPSS i przepływ moczu. Do obiektywnego pomiaru zalecana trichoskopia." },
    { "label": "24+ miesięcy", "body": "Maksymalny efekt rozwinięty. Z powodu bardzo długiego okresu półtrwania po odstawieniu DHT wraca wolniej niż przy finasterydzie, ale utrzymanie efektu włosowego wymaga kontynuacji leczenia." }
  ],
  "quality": {
    "pure": [
      "GSK Avodart (0,5 mg) to oryginalna marka; formy generyczne są biorównoważne",
      "Jalyn = stałe połączenie dutasteryd 0,5 mg + tamsulozyna 0,4 mg na BPH"
    ],
    "caution": [
      "Spadek PSA o ~50%: zawsze podwajaj wynik PSA przy badaniu przesiewowym prostaty",
      "Niewielki wzrost częstości raka prostaty o wysokim stopniu złośliwości (Gleason 8-10) na podstawie badania REDUCE",
      "Monitorowanie zaburzeń nastroju / depresji w trakcie leczenia",
      "Z powodu długiego okresu półtrwania działania niepożądane mogą utrzymywać się po odstawieniu"
    ],
    "avoid": [
      "Ciąża (ryzyko uszkodzenia narządów płciowych płodu męskiego)",
      "Kobiety w wieku rozrodczym bez antykoncepcji",
      "Jednoczesny finasteryd (zbędne podwójne hamowanie 5AR)",
      "Oddawanie krwi lub nasienia w trakcie leczenia i przez 6 miesięcy po",
      "Dotykanie przeciekającej kapsułki przez kobietę w ciąży (wchłanianie przezskórne)"
    ]
  },
  "interactions": [
    "Miejscowy minoksydyl 5%: mechanizm komplementarny, częsta kombinacja na łysienie",
    "Tamsulozyna: stałe połączenie w BPH (Jalyn) – addytywna poprawa objawów (CombAT)",
    "Silne inhibitory CYP3A4 (rytonawir, ketokonazol): stężenie dutasterydu może wzrosnąć, monitorowanie",
    "Finasteryd: NIE łączyć – zbędna, nieracjonalna podwójna blokada androgenowa",
    "Alkohol: brak istotnej interakcji"
  ],
  "studies": [
    {
      "title": "A randomized, active- and placebo-controlled study of the efficacy and safety of different doses of dutasteride versus placebo and finasteride in the treatment of male subjects with androgenetic alopecia",
      "authors": "Gubelin Harcha W, Barboza Martínez J, Tsai TF, et al.",
      "journal": "J Am Acad Dermatol. 2014;70(3):489-498.",
      "pmid": "24411083"
    },
    {
      "title": "Superiority of dutasteride over finasteride in hair regrowth and reversal of miniaturization in men with androgenetic alopecia: A randomized controlled open-label, evaluator-blinded study",
      "authors": "Shanshanwal SJ, Dhurat RS.",
      "journal": "Indian J Dermatol Venereol Leprol. 2017;83(1):47-54.",
      "pmid": "27549867"
    },
    {
      "title": "Adverse effects and safety of 5-alpha reductase inhibitors (finasteride, dutasteride): a systematic review",
      "authors": "Hirshburg JM, Kelsey PA, Therrien CA, et al.",
      "journal": "J Clin Aesthet Dermatol. 2016;9(7):56-62.",
      "pmid": "27672412"
    }
  ],
  "faq": [
    {
      "q": "Jaka jest różnica między dutasterydem a finasterydem?",
      "a": "Finasteryd hamuje tylko 5-alfa-reduktazę typu II, dutasteryd hamuje OBA typy (I + II). Dlatego dutasteryd obniża DHT w surowicy o ~90-95%, a finasteryd o ~70%. W badaniu fazy III porównującym je bezpośrednio (Gubelin Harcha 2014, PMID 24411083) dutasteryd 0,5 mg dawał lepszy przyrost liczby włosów niż finasteryd 1 mg. W zamian dutasteryd na AGA w UE/USA jest off-label (zatwierdzony przez FDA tylko na BPH), a jego okres półtrwania jest znacznie dłuższy (~5 tygodni vs 5-6 godzin), więc po odstawieniu wydalany jest wolniej."
    },
    {
      "q": "Dlaczego długi, ~5-tygodniowy okres półtrwania ma znaczenie?",
      "a": "Terminalny okres półtrwania dutasterydu wynosi około 5 tygodni, wobec 5-6 godzin dla finasterydu. Zaleta: sporadycznie pominięta dawka ledwo osłabia efekt, a supresja DHT jest wyrównana. Wada: stan stacjonarny ustala się dopiero przez miesiące, a ewentualne działanie niepożądane może utrzymywać się przez tygodnie po odstawieniu, ponieważ lek wydalany jest powoli. Z tego powodu zakaz oddawania krwi/nasienia jest też dłuższy: 6 miesięcy po ostatniej dawce (1 miesiąc dla finasterydu)."
    },
    {
      "q": "Czy dutasteryd jest zatwierdzony na wypadanie włosów?",
      "a": "Zależy to od regionu. W USA i UE dutasteryd ma rejestrację FDA/EMA wyłącznie na BPH (łagodny rozrost prostaty), a na wypadanie włosów przepisywany jest OFF-LABEL. W Korei Południowej (od 2009) i Japonii (od 2015) jest jednak oficjalnie zatwierdzony na łysienie androgenowe w dawce 0,5 mg. Baza dowodowa (kilka RCT fazy III) jest mocna, ale status regulacyjny różni się w zależności od kraju."
    },
    {
      "q": "Czy dutasteryd zwiększa ryzyko raka prostaty?",
      "a": "W badaniu REDUCE dutasteryd zmniejszał ryzyko ogólnego (o niskim stopniu złośliwości) raka prostaty, ale nieznacznie zwiększał częstość guzów o wysokim stopniu złośliwości (Gleason 8-10), bez różnicy w przeżyciu całkowitym – ten sam wzorzec co przy finasterydzie w badaniu PCPT. Zgodnie z konsensusem nie jest to czynnik przyczynowy, lecz zmniejsza wykrywalność guzów o niskim stopniu złośliwości. Korekta PSA × 2 przy badaniu przesiewowym jest obowiązkowa."
    }
  ],
  "related": [
    "finasteride",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 0.5,
      "medium": 0.5,
      "high": 0.5
    },
    "unit": "mg/dzień",
    "note": "Standardowa dawka 0,5 mg/dzień (zarówno na BPH Avodart, jak i off-label na AGA). Z powodu bardzo długiego okresu półtrwania niektóre protokoły na łysienie dawkują rzadziej (np. 2-3× w tygodniu); jest to nieoficjalne. Zakazane dla kobiet w wieku rozrodczym (uszkodzenie narządów płciowych płodu). Ocena wyników po 6-12 miesiącach."
  }
}
