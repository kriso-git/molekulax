// Dutasteryd (Avodart) — podwójny inhibitor 5α-reduktazy (typ I + typ II).
// FDA 2001 GSK BPH. W AAS: ~90% supresji DHT skóry głowy + redukcja trądziku.
// Źródła: FDA Avodart SmPC, Olsen 2006 PMID 16782546,
// Choi 2014 PMID 24820896, Trost 2017 PFS PMID 28267184.

export default {
  "id": "dutasteride",
  "sideEffects": [
    { "hu": "Szexuális mellékhatások: libidócsökkenés, erektilis diszfunkció, ejakulátum-volumen csökkenése, és ritkábban orgazmus-zavar (gyakoribb és tartósabb, mint finasteride mellett).", "en": "Sexual side effects: reduced libido, erectile dysfunction, decreased ejaculate volume, and less commonly orgasmic dysfunction (more frequent and more persistent than with finasteride).", "pl": "Działania seksualne: spadek libido, zaburzenia erekcji, zmniejszona objętość ejakulatu i rzadziej zaburzenia orgazmu (częstsze i bardziej uporczywe niż przy finasterydzie)." },
    { "hu": "Tartós poszt-5AR-gátló szindróma (PFS-szerű): leállítás után is fennmaradó szexuális, neurológiai és hangulati tünetek; a hosszú felezési idő miatt a tünetek lassabban oldódnak, mint finasteride mellett.", "en": "Persistent post-5AR-inhibitor syndrome (PFS-like): sexual, neurological and mood symptoms that may persist after discontinuation; symptoms resolve more slowly than with finasteride due to the long half-life.", "pl": "Uporczywy zespół po inhibitorze 5AR (typu PFS): objawy seksualne, neurologiczne i nastroju utrzymujące się po odstawieniu; ze względu na długi okres półtrwania ustępują wolniej niż przy finasterydzie." },
    { "hu": "Hangulati zavarok: depresszió, szorongás és ritkán öngyilkossági gondolatok; depresszió-anamnézis fokozott kockázat (Trost 2017 dokumentált).", "en": "Mood disturbances: depression, anxiety and rarely suicidal ideation; history of depression increases the risk (documented by Trost 2017).", "pl": "Zaburzenia nastroju: depresja, lęk i rzadko myśli samobójcze; wywiad depresyjny zwiększa ryzyko (udokumentowane przez Trost 2017)." },
    { "hu": "Gynecomastia és emlőérzékenység: a DHT/ösztrogén-arány eltolódása miatt emlőduzzanat, érzékenység jelentkezhet (ritka, az FDA-jelölésen szereplő mellékhatás).", "en": "Gynecomastia and breast tenderness: breast swelling or tenderness due to the shifted DHT/estrogen ratio (uncommon, listed in the FDA label).", "pl": "Ginekomastia i tkliwość piersi: obrzęk lub tkliwość piersi z powodu zmienionego stosunku DHT/estrogen (rzadkie, wymienione na etykiecie FDA)." },
    { "hu": "Csökkent spermaszám, motilitás és ejakulátum-volumen, átmeneti fertilitásromlással; a ~6 hónapos washout miatt a gyermekvállalás tervezésekor időben le kell állítani.", "en": "Reduced sperm count, motility and ejaculate volume with transient impaired fertility; due to the ~6-month washout, it must be stopped well ahead of planning conception.", "pl": "Zmniejszona liczba i ruchliwość plemników oraz objętość ejakulatu z przejściową obniżoną płodnością; z powodu ~6-miesięcznego wymywania trzeba odstawić z wyprzedzeniem przy planowaniu poczęcia." },
    { "hu": "A PSA-szérumszintet kb. 50%-kal csökkenti, ami elfedheti a prosztatarák szűrési jelét; a PSA-eredményt 5AR-gátló mellett duplázva kell értelmezni.", "en": "Lowers serum PSA by roughly 50%, which can mask a prostate cancer screening signal; PSA results on a 5AR inhibitor must be interpreted as doubled.", "pl": "Obniża stężenie PSA w surowicy o około 50%, co może maskować sygnał przesiewowy raka prostaty; wynik PSA przy inhibitorze 5AR należy interpretować jako podwojony." },
    { "hu": "Allergiás reakciók: bőrkiütés, viszketés, csalánkiütés, lokalizált ödéma és ritkán angioödéma jelentkezhet.", "en": "Allergic reactions: rash, pruritus, urticaria, localized edema and rarely angioedema may occur.", "pl": "Reakcje alergiczne: wysypka, świąd, pokrzywka, miejscowy obrzęk i rzadko obrzęk naczynioruchowy." }
  ],
  "contraindications": [
    { "hu": "Terhes vagy potenciálisan teherbe eshető nő nem érintheti a szivárgó/tört kapszulát és nem szedheti (Terhességi X kategória): a DHT-gátlás zavarja a férfi magzat nemi fejlődését.", "en": "Pregnant or potentially pregnant women must not handle leaking/broken capsules or take it (Pregnancy Category X): DHT suppression disrupts male fetal genital development.", "pl": "Kobiety w ciąży lub mogące zajść w ciążę nie mogą dotykać przeciekających/uszkodzonych kapsułek ani przyjmować leku (kategoria X): hamowanie DHT zaburza rozwój narządów płciowych płodu męskiego." },
    { "hu": "Aktív gyermekvállalási terv: a ~6 hónapos washout miatt fogamzás előtt jóval le kell állítani; a szer kiválasztódik a spermába.", "en": "Active plans to conceive: due to the ~6-month washout it must be stopped well before conception; the drug is excreted into semen.", "pl": "Aktywne plany poczęcia: ze względu na ~6-miesięczne wymywanie trzeba odstawić długo przed poczęciem; lek przenika do nasienia." },
    { "hu": "Dutasteride vagy más 5α-reduktáz-gátló iránti túlérzékenység.", "en": "Hypersensitivity to dutasteride or other 5-alpha-reductase inhibitors.", "pl": "Nadwrażliwość na dutasteryd lub inne inhibitory 5-alfa-reduktazy." },
    { "hu": "18 év alatti életkor és nők (különösen fogamzóképes korúak): nem javallt felhasználói csoport.", "en": "Age under 18 and women (especially those of childbearing potential): not an indicated population.", "pl": "Wiek poniżej 18 lat oraz kobiety (zwłaszcza w wieku rozrodczym): grupa niezalecana." },
    { "hu": "Aktív depresszió vagy öngyilkossági kockázat, illetve PFS-szerű tünetek anamnézise: a hangulati és tartós mellékhatások kockázata fokozott.", "en": "Active depression or suicide risk, or a history of PFS-like symptoms: increased risk of mood and persistent side effects.", "pl": "Czynna depresja lub ryzyko samobójcze albo wywiad objawów typu PFS: zwiększone ryzyko działań na nastrój i uporczywych." },
    { "hu": "Súlyos májkárosodás: a metabolizmus túlnyomórészt hepatikus, óvatosság szükséges (a vesén keresztüli kiválasztás minimális).", "en": "Severe hepatic impairment: metabolism is predominantly hepatic, caution is required (renal excretion is minimal).", "pl": "Ciężkie zaburzenia czynności wątroby: metabolizm jest głównie wątrobowy, wymagana ostrożność (wydalanie nerkowe jest minimalne)." },
    { "hu": "Vér- és véradás-tilalom: a kezelés alatt és az utolsó dózist követő legalább 6 hónapig nem szabad vért adni a terhes recipiens veszélye miatt.", "en": "Blood donation prohibition: must not donate blood during treatment and for at least 6 months after the last dose, to avoid exposure of a pregnant recipient.", "pl": "Zakaz oddawania krwi: nie wolno oddawać krwi podczas leczenia i przez co najmniej 6 miesięcy po ostatniej dawce, aby uniknąć narażenia ciężarnej biorczyni." }
  ],
  "name": "Dutasteryd (Avodart)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Podwójny inhibitor 5α-reduktazy (typ I + typ II). Zatwierdzony przez FDA (2001 GSK) na BPH. W AAS: ~90% supresji DHT skóry głowy + redukcja trądziku. Długi t1/2 ~5 tygodni — washout ~6 miesięcy. Wyższe ryzyko PFS vs finasteryd.",
  "description": "Dutasteryd (Avodart) jest podwójnym inhibitorem 5α-reduktazy, który blokuje zarówno izoformę typu I jak i typu II, dając znacznie szersze spektrum supresji DHT niż finasteryd. Opracowany przez GSK i zatwierdzony przez FDA w 2001 roku do leczenia łagodnego rozrostu prostaty (BPH) (Avodart 0,5 mg). Trial Olsen 2006 (PMID 16782546) randomized head-to-head udokumentował, że dutasteryd przy 0,5 mg/dzień osiąga **~90% supresji DHT skóry głowy** + ~95% supresji DHT prostaty — vs finasteryd 1 mg/dzień ~70% supresji DHT skóry głowy. Ta wyższa supresja + zahamowanie typu I (skóra/sebum) zapewnia bonus **poprawa trądziku** wtórny efekt u użytkowników AAS (redukcja tendencji trądziku od wzrostu testosteronu). Off-label użycie AGA jest szerokie (Korea + Japonia: AGA Rx; US/UE: off-label). Długi okres półtrwania ~5 tygodni → washout ~6 miesięcy (finasteryd 2 tygodnie vs dutasteryd 6 miesięcy — znacząca implikacja seksualna/decyzyjna w planowaniu płodności). Tier 4 — drugorzędny po finasterydzie, lub pierwszorzędny jeśli akcent trądziku. Wyższe ryzyko PFS niż finasteryd (Trost 2017 PMID 28267184).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Podwójny inhibitor 5α-reduktazy (typ I + typ II), ~90% supresji DHT skóry głowy przy 0,5 mg/dzień"},
    {"label": "Dawkowanie (AAS wypadanie włosów + trądzik)", "value": "0,5 mg/dzień ciągle lub co drugi dzień (cost-saving)"},
    {"label": "Okres półtrwania", "value": "~5 tygodni (bardzo długi, stan stacjonarny ~6 miesięcy, washout ~6 miesięcy)"},
    {"label": "Początek działania", "value": "Redukcja DHT mierzalna 1 tydzień, stabilizacja włosów 3-6 miesięcy"},
    {"label": "Status prawny", "value": "FDA + EMA Rx (BPH), HU + PL zarejestrowany, off-label AGA US/UE, WADA allowed"}
  ],
  "mechanism": "Dutasteryd jest związkiem 4-aza-steroidowym i podwójnym inhibitorem 5α-reduktazy — kompetycyjnie blokujący obie izoformy (typ I + typ II): Typ I 5AR Ki ~6 nM, Typ II 5AR Ki ~7 nM (vs finasteryd Typ I ~300 nM = ~50× mniej silny). Podwójna blokada → wyższa supresja DHT w całym ciele (~95% prostata, ~90% skóra głowy, ~80% skóra/sebum). Wiązanie enzymu jest jeszcze silniejsze i wolniej odwracalne niż finasteryd — stąd długi okres półtrwania (~5 tygodni) i czas washout (~6 miesięcy pełna eliminacja). Ta długa farmakokinetyka jest główną różnicą od finasterydu: tolerancja pominiętej dawki jest wyższa (dawkowanie co drugi dzień akceptowalne), ALE po zaprzestaniu 6 miesięcy potrzebne dla pełnego powrotu DHT (vs finasteryd 2 tygodnie). Wątrobowy metabolizm CYP3A4 minimalny.",
  "legalStatus": "USA: FDA-approved Avodart 2001 BPH (0,5 mg, GSK), Jalyn 2010 (dutasteryd 0,5 + tamsulozyna 0,4 kombinacja BPH). AGA-Rx US/UE off-label, Korea/Japonia Rx dla AGA. UE: zatwierdzony przez EMA BPH. HU: zarejestrowany (Avodart Rx). PL: zarejestrowany. WADA: S5 modulator hormonów — banned w konkurencji (możliwy TUE), poza-konkurencji allowed.",
  "onsetTime": "Redukcja DHT 1 tydzień, stabilizacja włosów 3-6 miesięcy",
  "halfLife": "~5 tygodni (bardzo długi)",
  "halfLifeActive": "~5 tygodni (związek macierzysty aktywny), washout ~6 miesięcy pełna eliminacja",
  "interactionsWith": ["finasteride", "ru58841", "testosterone-info"],
  "aromatization": "Nie aromatyzuje — kompetycyjny podwójny inhibitor 5AR; blokuje konwersję DHT (typ I + typ II), brak wpływu na aromatazę.",
  "hepatotoxicity": "Niska; struktura steroidopodobna ALE NIE 17α-alkilowana. Hepatic AE <2% (FDA Avodart label). Zespół podobny do PFS udokumentowany na dutasterydzie również (Trost 2017 PMID 28267184), częstszy niż na finasterydzie ze względu na silniejszy + dłuższy efekt.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, podwójny inhibitor 5AR)",
  "bindingAffinity": "Typ I 5AR Ki ~6 nM, Typ II 5AR Ki ~7 nM. Finasteryd ~50× mniej silny na Typie I (Ki ~300 nM).",
  "detectionWindow": "Usunięty z listy WADA 2009 (środek maskujący 5AR) — kontekst konkurencji allowed.",
  "benefits": [
    "Profilaktyka wypadania włosów AAS silniejsza niż finasteryd (~90% vs ~70% DHT skóry głowy)",
    "Bonus redukcja trądziku (blokada Typ I 5AR → redukcja sebumu)",
    "Długi okres półtrwania → wysoka tolerancja pominiętej dawki (dawkowanie co drugi dzień akceptowalne, cost-saving)",
    "FDA + EMA Rx pharma-grade wskazanie BPH",
    "Niedrogi (~€20-50/opakowanie generyczny 0,5 mg)"
  ],
  "quickStart": [
    "Pre-treatment baseline bloodwork: total/wolny Test, DHT surowica, E2, lipidogram + IIEF-5 + PHQ-9",
    "Start: 0,5 mg/dzień (Avodart) rano lub wieczorem, jedzenie indyferentne",
    "Cost-saving alternatywa: 0,5 mg co 2 dni (akceptowalne ze względu na długi okres półtrwania)",
    "Standardowy protokół cyklu: ciągle przez cały cykl AAS + recovery",
    "Powtórz badanie 6-8 tygodni później: potwierdź ~90% redukcji DHT surowicy + ocena poprawy trądziku",
    "Planowanie płodności: dutasteryd ostatnia dawka +6 miesięcy pełnego washout OBOWIĄZKOWE przed planowaniem poczęcia"
  ],
  "expectations": [
    {"label": "Tygodnie 1-2", "body": "Redukcja DHT surowicy mierzalna (~70-85%). Poprawa trądziku odczuwalna (redukcja skóra-sebum)."},
    {"label": "Miesiące 1-3", "body": "Linienie włosów stabilizuje się. Plateau stanu stacjonarnego (stan stacjonarny po ~6 miesiącach). Regrowth vertex obserwowalny."},
    {"label": "Miesiące 3-6", "body": "Plateau maksymalnego efektu ~90% supresja DHT skóry głowy, sustained zapobieganie progresji wypadania włosów. Choi 2014 (PMID 24820896): trial dutasteryd vs finasteryd 6-miesięczny wykazał ~21% większą poprawę liczby włosów."},
    {"label": "Po zaprzestaniu", "body": "DHT STOPNIOWO wraca przez 3-6 miesięcy (długi okres półtrwania). Przyspieszenie wypadania włosów wraca wolniej niż po zaprzestaniu finasterydu — ALE długoterminowe planowanie cyklu wymaga ostrożności (decyzja płodności, monitor seksualnych skutków ubocznych)."}
  ],
  "quality": {
    "pure": [
      "GSK Avodart 0,5 mg blister, Rx pharma-grade (US + UE)",
      "GSK Jalyn (dutasteryd 0,5 + tamsulozyna 0,4 kombinacja BPH)",
      "Generyczny dutasteryd 0,5 mg (Sandoz, Teva, Ratiopharm — UE)",
      "Indyjski generyk (Dr Reddy's Dutas, Cipla Veltride 0,5 mg)",
      "UGL liquid dutasteryd: rzadki, zalecana alternatywa pharma-grade Rx"
    ],
    "caution": [
      "Długi czas washout (~6 miesięcy) → implikacje decyzji płodności: 6 miesięcy przed planowaniem poczęcia OBOWIĄZKOWE zaprzestanie",
      "Wyższe ryzyko PFS niż finasteryd (Trost 2017): chroniczne skutki uboczne silniejsze i bardziej utrzymujące się",
      "Seksualne skutki uboczne ~5-10% (vs finasteryd ~3-8%): spadek libido, ED, zmniejszona objętość ejakulatu",
      "Zmiana nastroju: udokumentowane ryzyko depresji (Trost 2017)",
      "Długoterminowy wpływ na BMD (miękkie evidence): coroczny monitor gęstości kości u długoterminowych użytkowników",
      "Poziom PSA: dutasteryd obniża PSA o ~50% (jak finasteryd), różnica interpretacji screening raka prostaty"
    ],
    "avoid": [
      "Partnerka w ciąży / karmienie piersią (Kategoria ciąży X — zaburzenie rozwoju męskiego płodu)",
      "Historia depresji (ryzyko dysfunkcji nastroju)",
      "Planowanie poczęcia (wymagane 6 miesięcy washout pre-pregnancy)",
      "Użytkownicy nastoletni (<18 lat)",
      "Stack tylko-Tren / tylko-anadrol (nie mechanizm substratu 5AR)",
      "UGL liquid dutasteryd z niepewnym stężeniem"
    ]
  },
  "interactions": [
    "Finasteryd: nie można łączyć (nakładający się mechanizm, addytywne skutki uboczne)",
    "Cykle AAS z testosteronem-base: standardowa profilaktyka wypadania włosów + kontrola trądziku",
    "Stack trenbolon/anadrol: dutasteryd NIE działa (nie substrat 5AR)",
    "Saw palmetto / tea tree oil: możliwe łączenie dla łagodnej synergii",
    "Inhibitory PDE5: pierwszorzędny adjuwant dla seksualnych skutków ubocznych dutasterydu",
    "Alkohol: łagodny stres wątrobowy, umiarkowane OK"
  ],
  "studies": [
    {"title": "Long-term efficacy and safety of dutasteride 0.5 mg in Korean men with androgenetic alopecia: 5-year data demonstrating sustained effects.", "authors": "Choi S, Kwon SH, Sim WY", "journal": "J Dermatol", "pmid": "38321615"},
    {"title": "Evaluation of the therapeutic effects of AGA drugs by measuring finasteride, dutasteride, and dihydrotestosterone in hair.", "authors": "Hobo Y, Nishikawa J, Taniguchi Asai N", "journal": "Clin Chim Acta", "pmid": "37385468"},
    {"title": "Post-Finasteride Syndrome: Survey of Dermatologists From the Spanish Hair and Nail Disorders Group.", "authors": "Moreno-Arrones OM, Saceda-Corralo D, Gómez-Cano JL", "journal": "Actas Dermosifiliogr", "pmid": "41865985"},
    {"title": "Updates in Treatment for Androgenetic Alopecia.", "authors": "Shin JW, Huh CH", "journal": "Ann Dermatol", "pmid": "41331712"}
  ],
  "faq": [
    {"q": "Finasteryd vs dutasteryd — kiedy który?", "a": "Domyślny pierwszorzędny: **FINASTERYD** 1 mg/dzień (mniejsze skutki uboczne, krótszy washout, kliniczny standard protokołu AGA). Dutasteryd **drugorzędny** lub **pierwszorzędny w sytuacjach niszowych**: (1) Nieodpowiednia odpowiedź na finasteryd (<30% poprawy po 3-6 miesiącach, lub kontynuowana progresja); (2) Akcent trądziku (blokada Typ I 5AR dla bonusu redukcji sebumu); (3) Agresywny stack AAS (Test + Tren + Anadrol wysoka dawka, gdzie cel jest maksymalna supresja DHT). Ze względu na długi washout (~6 miesięcy vs finasteryd 2 tygodnie), **NIE** zalecany u użytkowników krótkoterminowych lub z akcentem płodności. Ryzyko PFS jest wyższe (Trost 2017) — użytkownicy unikający ryzyka preferują finasteryd."},
    {"q": "Długi czas washout (~6 miesięcy) — problem?", "a": "**Tak, znacząca implikacja seksualna/decyzyjna**. Okres półtrwania dutasterydu to ~5 tygodni → stan stacjonarny ~6 miesięcy, ORAZ po zaprzestaniu ~6 miesięcy potrzebne dla pełnego eliminacja-poziom recovery baseline DHT. Problemy: (1) Recovery seksualnych skutków ubocznych to 2 tygodnie na finasterydzie vs 3-6 miesięcy na dutasterydzie; (2) Decyzja płodności: jeśli planowanie poczęcia, wymagane zaprzestanie 6 miesięcy pre-pregnancy (sperma-DHT-substrat impact płodności udokumentowany); (3) Skutki uboczne emerging months later harder to attribute. Długoterminowa implikacja decyzji: użytkownik planujący płodność NIE powinien brać dutasterydu pierwszorzędnie, ale finasteryd (krótszy washout, łatwiejsze do reorganizacji)."},
    {"q": "Czy ryzyko PFS jest wyższe?", "a": "Trost 2017 systematic review (PMID 28267184) znalazł incydencję PFS dutasterydu ~2-3% (vs finasteryd ~1-2%), a skutki uboczne są silniejsze + bardziej utrzymujące się niż PFS finasterydu. Mechanizm: podwójna blokada (typ I + typ II) → szersze zakłócenie szlaku neurosteroidu — typ I 5AR jest ważniejszy w syntezie steroidów mózgowych, więc zmiany na poziomie mózgu mają większą amplitudę. Niższe dawki są bezpieczniejsze: 0,5 mg co 2 dni (cost-saving + alternatywa niskich skutków ubocznych) jest racjonalną redukcją ryzyka. Łagodzenie ryzyka: pre-treatment screen historii depresji, baseline IIEF-5 + PHQ-9, miesięczny self-monitor; wystąpienie objawów → NATYCHMIASTOWE zaprzestanie (ALE ze względu na długi washout, ulga objawów jest wolniejsza)."},
    {"q": "Topical dutasteryd emerging?", "a": "Tak, emerging trend w aptekach kompoundujących dermatologii. Topical dutasteryd 0,1-0,5% solution codziennie aplikowany na skórę głowy — supresja DHT skóry głowy podobna do 0,5 mg doustnie, ale ~10-20% absorpcja systemowa (vs 100% doustna) → drastycznie niższe ryzyko systemowych skutków ubocznych (przewaga u użytkowników podatnych na PFS). Tylko kompoundowany (BRAK zatwierdzenia FDA), droższy (~€150-300/miesiąc UGL/kompoundowanie). Nowoczesne kliniki AGA zalecają dla użytkownika unikającego ryzyka PFS: topical dutasteryd > doustny finasteryd > doustny dutasteryd. W kontekście AAS warto eksplorować (długoterminowy cykl + cel minimalizacji skutków ubocznych)."}
  ],
  "related": ["finasteride", "ru58841", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 0.5},
    "unit": "mg / dzień lub co 2 dni (doustnie, jedzenie indyferentne)",
    "note": "Standardowy AAS wypadanie włosów + trądzik: 0,5 mg/dzień ciągle. Cost-saving alternatywa: 0,5 mg co 2 dni (akceptowalne ze względu na długi okres półtrwania). Topical 0,1-0,5% solution alternatywa (kompoundowana, niższe skutki uboczne). Planowanie płodności: zaprzestanie 6 miesięcy pre-pregnancy OBOWIĄZKOWE."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem dutasterydu",
      "timing": "Start cyklu AAS lub początek nieadekwatnej-odpowiedzi-finasterydu",
      "markers": "Total Testosteron, Wolny Testosteron, DHT surowica (baseline confirm cel skuteczności), E2, SHBG, lipidogram, ALT/AST, PHQ-9 baseline, IIEF-5 baseline jakości erekcji, analiza nasienia jeśli akcent płodności.",
      "purpose": "Baseline + stratifikacja ryzyka PFS. Pre-treatment Norwood-scale photo + miesięczne zdjęcia śledzenia progresji włosów. Historia planowania płodności MUSI być omówiona (implikacja długiego washout)."
    },
    "midCycle": {
      "label": "Dutasteryd tygodnie 6-8",
      "timing": "Start dutasterydu +6-8 tygodni",
      "markers": "DHT surowica (potwierdź ~90% redukcji), Total Test (wzrost oczekiwany), E2 (wtórne podniesienie), powtórzenie IIEF-5, PHQ-9, self-rating poprawy trądziku.",
      "purpose": "Monitor skuteczności + skutków ubocznych. Jeśli skutek uboczny seksualny/nastroju → redukcja dawki (0,5 mg co 2 dni) lub zaprzestanie (ale ze względu na długi washout, recovery objawów trwa tygodnie)."
    },
    "postCycle": {
      "label": "Zaprzestanie dutasterydu",
      "timing": "Ostatnia dawka +3-6 miesięcy (monitor EXTENDED ze względu na długi washout)",
      "markers": "DHT surowica (gradient recovery), Total Test, E2, IIEF-5, PHQ-9.",
      "purpose": "Potwierdź: DHT wraca STOPNIOWO przez 3-6 miesięcy (NIE 2 tygodnie jak finasteryd). Recovery skutków ubocznych seksualnych + nastroju przedłużone; jeśli utrzymujące się >6 miesięcy → screen PFS."
    },
    "cruise": {
      "label": "Chronic AAS cruise + dutasteryd ciągle",
      "timing": "0,5 mg/dzień ciągle lub co 2 dni",
      "markers": "Corocznie: DHT, Test, lipidogram, IIEF-5, PHQ-9, BMD (DEXA skan), screen PSA (dutasteryd obniża PSA o 50%).",
      "purpose": "Monitor profilaktyki wypadania włosów chronic AAS cruise + monitor ryzyka PFS + długoterminowe śledzenie BMD."
    }
  }
}
