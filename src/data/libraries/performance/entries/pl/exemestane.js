// Eksemestan (Aromasin) – steroidowy "samobójczy" (nieodwracalny) AI.
// Zatwierdzony przez FDA 1999 Pfizer. Metabolit 17-hydro-eksemestan słabo
// androgenny – spadek SHBG + widoczny wzrost wolnego testosteronu.
// Źródła: FDA Aromasin SmPC, Bonneterre 2003 PMID 14523076,
// Geisler 2008 PMID 19012260, Lønning 2005 PMID 16091756.

export default {
  "id": "exemestane",
  "sideEffects": [
    { "hu": "Ízületi és izomfájdalom (arthralgia, myalgia), ízületi merevség – az AI-osztály jellemző, ösztrogénhiányból eredő mellékhatása.", "en": "Joint and muscle pain (arthralgia, myalgia) and stiffness, a hallmark estrogen-deprivation effect of the AI class.", "pl": "Ból stawów i mięśni (artralgia, mialgia) oraz sztywność stawów, typowy efekt niedoboru estrogenu w klasie AI." },
    { "hu": "Hőhullámok, izzadás, fáradtság – a gyors ösztrogéncsökkenés vazomotoros tünetei.", "en": "Hot flushes, sweating and fatigue, vasomotor symptoms of rapid estrogen decline.", "pl": "Uderzenia gorąca, pocenie się i zmęczenie, objawy naczynioruchowe szybkiego spadku estrogenu." },
    { "hu": "Túl agresszív E2-csökkentés tünetei: levertség, libidócsökkenés, ízületi recsegés/szárazság, depressziós hangulat, romló erekció – a crashed estradiol klasszikus képe.", "en": "Over-suppressed estradiol (crashed E2): low mood, reduced libido, dry/cracking joints, depression and erectile difficulty.", "pl": "Objawy nadmiernie obniżonego estradiolu (crashed E2): obniżony nastrój, spadek libido, suchość/trzeszczenie stawów, depresja i problemy z erekcją." },
    { "hu": "Kedvezőtlen lipidprofil-eltolódás: HDL-csökkenés (~10-15%) és enyhe LDL-emelkedés, ami AAS-stack mellett kumulálódik.", "en": "Adverse lipid shift: lowered HDL (~10-15%) and slight LDL rise, which compounds on top of an AAS stack.", "pl": "Niekorzystna zmiana profilu lipidowego: obniżony HDL (~10-15%) i lekki wzrost LDL, kumulujący się przy stacku AAS." },
    { "hu": "Csontsűrűség-csökkenés (osteopenia/osteoporosis kockázat) és emelkedett csonttörési hajlam tartós ösztrogén-szuppresszió mellett.", "en": "Reduced bone mineral density (osteopenia/osteoporosis risk) and higher fracture tendency with prolonged estrogen suppression.", "pl": "Obniżona gęstość mineralna kości (ryzyko osteopenii/osteoporozy) i większa skłonność do złamań przy długotrwałej supresji estrogenu." },
    { "hu": "Enyhe androgén jellegű hatások a 17-hydro-exemestane metabolitból: akne és olajos bőr fokozódhat aromatizáló szteroidok mellett.", "en": "Mild androgenic effects from the 17-hydro-exemestane metabolite: acne and oily skin may increase, especially stacked with aromatizing steroids.", "pl": "Łagodne działanie androgenne metabolitu 17-hydro-eksemestanu: trądzik i przetłuszczanie skóry mogą się nasilić, zwłaszcza przy aromatyzujących sterydach." },
    { "hu": "Fejfájás, álmatlanság, szédülés és emésztési panaszok (hányinger) – gyakori, általában enyhe mellékhatások.", "en": "Headache, insomnia, dizziness and gastrointestinal complaints (nausea), common and usually mild.", "pl": "Ból głowy, bezsenność, zawroty głowy i dolegliwości żołądkowo-jelitowe (nudności), częste i zwykle łagodne." },
    { "hu": "Ritkán emelkedett májenzimek (ALT/AST) és bilirubin; orális szer, ezért egyidejű 17-alfa-alkilált AAS mellett kettős májmonitor indokolt.", "en": "Rarely elevated liver enzymes (ALT/AST) and bilirubin; as an oral agent, dual liver monitoring is warranted alongside 17-alpha-alkylated AAS.", "pl": "Rzadko podwyższone enzymy wątrobowe (ALT/AST) i bilirubina; jako lek doustny wymaga podwójnego monitorowania wątroby przy 17-alfa-alkilowanych AAS." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: az Exemestane teratogén, magzatkárosító (terhességi X kategória) – abszolút ellenjavallt.", "en": "Pregnancy and breastfeeding: exemestane is teratogenic and fetotoxic (Pregnancy Category X), absolutely contraindicated.", "pl": "Ciąża i karmienie piersią: eksemestan jest teratogenny i toksyczny dla płodu (kategoria X), bezwzględnie przeciwwskazany." },
    { "hu": "Premenopauzális nők: az ép petefészek-aromatáz miatt nem hatékony, és ovulációs/hormonális zavart, virilizációt okozhat – ellenjavallt.", "en": "Premenopausal women: ineffective due to intact ovarian aromatase and may cause ovulatory/hormonal disruption and virilization, contraindicated.", "pl": "Kobiety przed menopauzą: nieskuteczny z powodu zachowanej aromatazy jajnikowej, może powodować zaburzenia owulacji i wirylizację, przeciwwskazany." },
    { "hu": "Ismert túlérzékenység az exemestane-nal vagy a készítmény bármely összetevőjével szemben.", "en": "Known hypersensitivity to exemestane or any excipient of the formulation.", "pl": "Znana nadwrażliwość na eksemestan lub którykolwiek składnik preparatu." },
    { "hu": "Súlyos máj- (Child-Pugh C) vagy veseelégtelenség: a metabolizmus és kiürülés zavart, fokozott expozícióval – óvatosság/ellenjavallat.", "en": "Severe hepatic (Child-Pugh C) or renal impairment: disturbed metabolism and clearance with increased exposure, caution/contraindication.", "pl": "Ciężka niewydolność wątroby (Child-Pugh C) lub nerek: zaburzony metabolizm i wydalanie z większą ekspozycją, ostrożność/przeciwwskazanie." },
    { "hu": "Meglévő osteoporosis vagy súlyos csontritkulás-kockázat: az ösztrogén-szuppresszió tovább gyorsítja a csontvesztést – előzetes DEXA és csontvédelem nélkül kerülendő.", "en": "Pre-existing osteoporosis or high bone-loss risk: estrogen suppression accelerates bone loss, avoid without prior DEXA and bone protection.", "pl": "Istniejąca osteoporoza lub wysokie ryzyko utraty kości: supresja estrogenu przyspiesza utratę kości, unikać bez wcześniejszego DEXA i ochrony kości." },
    { "hu": "Egyidejű ösztrogéntartalmú szerek (HRT, fitoösztrogének): hatástalanítják az aromatáz-gátlást – kerülendő kombináció.", "en": "Concurrent estrogen-containing agents (HRT, phytoestrogens): they negate the aromatase inhibition, an interaction to avoid.", "pl": "Jednoczesne stosowanie środków zawierających estrogen (HTZ, fitoestrogeny): znoszą hamowanie aromatazy, kombinacja do unikania." },
    { "hu": "Erős CYP3A4-induktorok (rifampicin, karbamazepin, orbáncfű) csökkentik a hatást; profilaktikus AI-indítás bloodwork/E2-baseline nélkül kerülendő a crashed-E2 kockázat miatt.", "en": "Strong CYP3A4 inducers (rifampicin, carbamazepine, St. John's wort) reduce efficacy; avoid prophylactic AI use without E2 baseline bloodwork due to crashed-E2 risk.", "pl": "Silne induktory CYP3A4 (ryfampicyna, karbamazepina, dziurawiec) zmniejszają skuteczność; unikać profilaktycznego AI bez badania bazowego E2 z powodu ryzyka crashed-E2." }
  ],
  "name": "Eksemestan (Aromasin)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Steroidowy \"samobójczy\" (nieodwracalny) inhibitor aromatazy. Zatwierdzony przez FDA (1999 Pfizer). Unikalne: metabolit 17-hydro-eksemestan jest słabo androgenny – spadek SHBG + widoczny wzrost wolnego testosteronu. W AAS gdy ważna stabilność E2 lub akcent SHBG.",
  "description": "Eksemestan (Aromasin) jest steroidowym inhibitorem aromatazy trzeciej generacji opracowanym przez Pharmacia & Upjohn (obecnie Pfizer) i zatwierdzonym przez FDA w 1999 roku dla pomenopauzalnego raka piersi ER+. Farmakokinetycznie różni się od niesteroidowych triazolowych AI (anastrozol/letrozol): tworzy nieodwracalne kowalencyjne wiązanie w aktywnym miejscu CYP19-aromatazy – każda dawka trwale inaktywuje część puli aromatazy, a powrót wymaga syntezy de novo enzymu (~5-7 dniowy okres półefektu). Macierzysty związek eksemestanu ma strukturę steroidową (analog androstadiendionu), a metabolit 17-hydro-eksemestan jest ŁAGODNYM agonistą receptora androgenowego (klinicznie pomijalny efekt anaboliczny, ale obniżający SHBG, więc wolny testosteron mierzalnie rośnie – udokumentowane przez Lønning 2005 PMID 16091756). W kontekście AAS dwie nisze: (1) stabilność E2 gdzie nieodbijający się profil jest korzystny (taper na końcu cyklu), i (2) stacki z akcentem na SHBG (wzrost wolnego testosteronu z metabolitu 17-hydro). Aromasin jest trzecim członkiem AI trifecty AAS obok anastrozolu + letrozolu. WADA S4.1 – banned.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Steroidowy \"samobójczy\" (nieodwracalny kowalencyjny) inhibitor CYP19-aromatazy – pojedyncza dawka trwale inaktywuje część puli"},
    {"label": "Dawkowanie (AAS)", "value": "12,5-25 mg EOD lub 25 mg/dzień"},
    {"label": "Okres półtrwania", "value": "~27 h (parent), ~24-48 h aktywny metabolit; efekt farmakodynamiczny 5-7 dni"},
    {"label": "Początek działania", "value": "Redukcja E2 mierzalna 12-24 h, pełny efekt 3-5 dni"},
    {"label": "Status prawny", "value": "FDA + EMA Rx, HU + PL zarejestrowany, WADA S4.1 banned"}
  ],
  "mechanism": "Eksemestan jest pro-lekiem analogiem substratu: struktura androstadiendionopodobna sama wiąże się z miejscem aktywnym CYP19-aromatazy i podczas cyklu katalitycznego enzymu jest przekształcana w reaktywny elektrofilowy produkt pośredni (samobójczy-inhibitor / nieodwracalny inhibitor mechanizmu). Reaktywny produkt pośredni wiąże kowalencyjnie boczny łańcuch lizyny/cysteiny aktywnego miejsca, trwale inaktywując cząsteczkę enzymu. Powrót zależy całkowicie od syntezy de novo aromatazy (~5-7 dniowy okres półpowrotu). Macierzysty związek jest 17-hydroksylowany w wątrobie, a aktywny metabolit 17-hydro-eksemestan jest ŁAGODNYM agonistą AR (Lønning 2005), klinicznie pomijalny efekt anaboliczny ale obniżający SHBG – wolny testosteron mierzalnie rośnie (+5-10 ng/dL przy standardowej dawce). Wątrobowy metabolizm CYP3A4 jest główną trasą, ~30% biodostępność doustna. Wykrywanie WADA ~1 miesiąc.",
  "legalStatus": "USA: zatwierdzony przez FDA 1999 (Aromasin 25 mg, Pharmacia, obecnie Pfizer; generyczny eksemestan 2010+). Wskazanie: pomenopauzalny ER+ rak piersi adjuwantowy + przerzutowy, jak również protokoły zmiany 2-3 lata po tamoksyfenie (Bonneterre 2003 ITA-CL97). UE: zatwierdzony przez EMA. HU: zarejestrowany (Aromasin Rx). PL: zarejestrowany (Aromasin Rx). WADA: S4.1 inhibitor aromatazy – banned w/poza-konkurencji.",
  "onsetTime": "Redukcja E2 12-24 h, pełny efekt 3-5 dni",
  "halfLife": "~27 h (parent)",
  "halfLifeActive": "~24-48 h (17-hydro-eksemestan); efekt farmakodynamiczny 5-7 dni (nieodwracalna inaktywacja enzymu)",
  "interactionsWith": ["anastrozol", "letrozol", "nolvadex", "testosterone-info"],
  "aromatization": "Nie aromatyzuje – steroidowy \"samobójczy inhibitor\" (nieodwracalne kowalencyjne wiązanie CYP19). Macierzysty związek ma strukturę steroidu (analog androstadiendionu), nie agonista.",
  "hepatotoxicity": "Niska – struktura steroidu ALE NIE 17α-alkilowana. Hepatic AE <2% (FDA Aromasin label). Aktywność łagodnego AR metabolitu 17-hydro nie stwarza klinicznie istotnego stresu wątrobowego.",
  "wadaStatus": "banned",
  "androgenicRatio": "Pomijalny – 17-hydro-eksemestan ma łagodne powinowactwo AR (~5% powinowactwa testosteronu), klinicznie pomijalny efekt anaboliczny, ALE obniżający SHBG (mierzalny wzrost wolnego testosteronu).",
  "bindingAffinity": "Wiązanie kowalencyjne nieodwracalne w aktywnym miejscu CYP19-aromatazy. 17-hydro-eksemestan: AR Ki ~5-50 nM (słabe), ER minimalne.",
  "detectionWindow": "Wykrywanie w moczu metodą WADA GC-MS/LC-MS/MS ~1 miesiąc po ostatniej dawce.",
  "benefits": [
    "Samobójczy inhibitor: brak rebound E2 po zaprzestaniu – stabilność taperu końcowego cyklu",
    "Metabolit 17-hydro łagodnie androgenny – spadek SHBG i mierzalny wzrost wolnego testosteronu (+5-10 ng/dL)",
    "Gładka kontrola E2 (brak dziennej fluktuacji jak anastrozol)",
    "Bardziej umiarkowany wpływ na lipidogram niż letrozol (intermediate)",
    "FDA + EMA Rx pharma-grade globalnie dostępny",
    "Przystępny (~€30-50/opakowanie generyczny 25 mg)"
  ],
  "quickStart": [
    "Standardowa kontrola E2 w AAS: 12,5-25 mg EOD lub 25 mg/dzień",
    "Stabilność taperu końca cyklu: Aromasin jest idealny dla nieodbijającego profilu (zaprzestanie anastrozolu/letrozolu powoduje skok E2, Aromasin jest gradientowy)",
    "Stack akcent SHBG (Test+Mast+Var blast): Aromasin daje bonus obniżenia SHBG → wzrost wolnego testosteronu",
    "Z wodą + PO posiłkach (jedzenie zwiększa biodostępność ~40% vs. pusty żołądek)",
    "Bloodwork: E2 LC-MS/MS pre-treatment + 7-10 dni później",
    "Bezpieczniejszy niż letrozol dla użytkowników bez doświadczenia AI (niższe ryzyko crashed E2)"
  ],
  "expectations": [
    {"label": "Dzień 1-3", "body": "Redukcja E2 mierzalna (~50-70%). Spadek SHBG odczuwalny, wolny testosteron mierzalnie rośnie (udokumentowalny na bloodwork +5 dni)."},
    {"label": "Tydzień 1-2", "body": "Stan stacjonarny supresji aromatazy (~85-90%), nieco łagodniejsza redukcja total-E2 niż anastrozol ale stabilniejszy baseline. Lipidogram skromna zmiana."},
    {"label": "Post-cessation tydzień 1", "body": "E2 stopniowo rośnie (~5-7 dni pełnego powrotu – synteza de novo aromatazy). Minimalny rebound, BRAK skoku."},
    {"label": "Post-cessation tydzień 2-4", "body": "Baseline E2 przywrócony. Faza PCT może się rozpocząć z Nolvadex/Clomid SERM."}
  ],
  "quality": {
    "pure": [
      "Pfizer Aromasin 25 mg tabletka, Rx pharma-grade (apteka UE dostępne)",
      "Eksemestan-ratiopharm, Eksemestan Sandoz, Eksemestan Teva generyczne (UE)",
      "Indyjski generyk (Sun Pharma analog Aromasin, Cipla)",
      "UGL liquid eksemestan: rzadziej używany, wymagane źródło testowane HPLC"
    ],
    "caution": [
      "Wzrost biodostępności indukowany jedzeniem: konsekwentne czasowanie dawkowania (zawsze PO posiłkach) zalecane",
      "Metabolit 17-hydro łagodnie androgenny → możliwe push trądziku na stacked aromatyzujących sterydach",
      "Interakcje induktor/inhibitor CYP3A4 (jak anastrozol)",
      "Lipidogram podwójny monitor: spadek HDL mniejszy niż letrozol ale dodatni",
      "Stres wątrobowy: w połączeniu z chronicznymi 17α-alkilowanymi AAS (Anadrol, Dianabol, Superdrol) wymaga podwójnego monitora wątroby"
    ],
    "avoid": [
      "Stosowanie u przedmenopauzalnych kobiet w AAS (dysfunkcja owulacji)",
      "Ciąża / karmienie piersią (Kategoria ciąży X)",
      "Ciężka niewydolność wątroby (Child-Pugh C)",
      "Użytkownicy z historią gino wrażliwego na AR (łagodny AR 17-hydro może pogorszyć tendencję gino)",
      "Aromasin profilaktycznie na początku cyklu AAS bez baseline-bloodwork (ryzyko crashed-E2 niższe niż letrozol ale istnieje)"
    ]
  },
  "interactions": [
    "Tamoksyfen (Nolvadex): NIE zalecany razem w PCT (nakładający się mechanizm)",
    "Testosteron + Test-base stack: standardowa kontrola E2",
    "Dianabol/Anadrol stack: Aromasin umiarkowanie skuteczny przeciw silnej aromatyzacji (letrozol silniejszy)",
    "Mast+Var stack: bonus spadku SHBG Aromasin → wzrost wolnego testosteronu synergia stack",
    "Statyny: monitor lipidogramu",
    "Jedzenie: wzrost biodostępności ~40% (konsekwentne czasowanie dawkowania zalecane)"
  ],
  "studies": [
    {"title": "Meta-analyses of phase 3 randomised controlled trials of third generation aromatase inhibitors versus tamoxifen as first-line endocrine therapy in postmenopausal women with hormone receptor-positive advanced breast cancer.", "authors": "Robertson JFR, Paridaens RJ, Lichfield J, Bradbury I, Campbell C", "journal": "Eur J Cancer", "pmid": "33418233"},
    {"title": "An integrated view of aromatase and its inhibition.", "authors": "Miller WR, Anderson TJ, Evans DB", "journal": "J Steroid Biochem Mol Biol", "pmid": "14623539"},
    {"title": "Changes in bone and lipid metabolism in postmenopausal women with early breast cancer after terminating 2-year treatment with exemestane: a randomized, placebo-controlled study.", "authors": "Geisler J, Lønning PE, Krag LE, Løkkevik E, Risberg T, Hagen AI, Schlichting E, Lien EA, Ofjord ES, Eide GE, Polli A, di Salle E, Paolini J", "journal": "Eur J Cancer", "pmid": "16963261"},
    {"title": "Pharmacological profiles of exemestane and formestane, steroidal aromatase inhibitors used for treatment of postmenopausal breast cancer.", "authors": "Lønning PE", "journal": "Breast Cancer Res Treat", "pmid": "9797017"}
  ],
  "faq": [
    {"q": "Samobójczy inhibitor – co to oznacza praktycznie?", "a": "'Samobójczy inhibitor' (nieodwracalny inhibitor oparty na mechanizmie) oznacza, że eksemestan wiąże się z aktywnym cyklem katalitycznym CYP19-aromatazy jako analog substratu, i podczas reakcji przekształca się w reaktywny produkt pośredni, który kowalencyjnie i trwale inaktywuje enzym. Wyczerpywanie puli kumuluje się – każda dawka trwale inaktywuje część istniejącej puli aromatazy. Powrót zależy tylko od nowej syntezy aromatazy (~5-7 dniowy okres pół-reaktywacji). Praktycznie: brak rebound E2 po zaprzestaniu (vs. odwracalne wiązanie anastrozolu/letrozolu, które może powodować szybki skok E2). Stabilność taperu końca cyklu i gradientowy powrót są korzystne."},
    {"q": "Eksemestan łagodny anaboliczny – co daje?", "a": "Metabolit 17-hydro-eksemestan ma łagodne powinowactwo AR (~5% testosteronu) i jest obniżający SHBG (Lønning 2005 udokumentował spadek SHBG ~15-25% w populacji pomenopauzalnych kobiet). U użytkowników AAS wolny Test (NIE total Test) mierzalnie rośnie +5-10 ng/dL przy stabilnej dawce. Klinicznie pomijalny boost anaboliczny (NIE zastąpienie cyklu), ale na stackach akcent SHBG (Mast+Var+Aromasin) daje mierzalną synergię. Wzrost wolnego testosteronu = lepsze libido i sygnał syntezy białek mięśniowych na poziomie subiektywnym."},
    {"q": "Anastrozol vs. letrozol vs. eksemestan – drzewo decyzyjne kliniczne?", "a": "Domyślny: ANASTROZOL (1 mg EOD, łatwe miareczkowanie, odwracalny, kliniczny domyślny). Hard-suppression Tren+Mast stack lub cofanie gino: LETROZOL (silniejszy, zdolny do redukcji gino). Stabilność E2/koniec taperu LUB akcent SHBG: EKSEMESTAN (brak rebound, bonus wzrostu wolnego testosteronu). Dla użytkowników bez doświadczenia AI: wybierz anastrozol lub Aromasin (ryzyko crashed-E2 letrozolu jest wyższe). Stack tylko-Tren: często AI niepotrzebny (Tren NIE aromatyzuje)."},
    {"q": "Wpływ na lipidogram?", "a": "Wpływ Aromasin na lipidogram jest INTERMEDIATE: spadek HDL ~10-15% (vs. anastrozol ~10-20%, letrozol ~20-30%), wzrost LDL ~5-10%. Znacznie łagodniejszy niż letrozol, zbliżony do poziomu anastrozolu. Monitor kardio: lipidogram pre-cycle + tydzień 6 + post-cycle. Standardowe mitygacje: omega-3, krill oil, CoQ10. Jeśli LDL >180 mg/dL: berberyna lub statyna pod konsultacją specjalisty."}
  ],
  "related": ["anastrozol", "letrozol", "nolvadex", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 12.5, "medium": 25, "high": 25},
    "unit": "mg / EOD lub dzień (doustnie, PO posiłkach)",
    "note": "Standardowa kontrola E2 w AAS: 12,5-25 mg EOD lub 25 mg/dzień. Dla stabilności taperu końca cyklu + synergii stack akcent SHBG, Aromasin jest pierwszym wyborem (brak rebound + bonus wzrostu wolnego testosteronu). Z jedzeniem: wzrost biodostępności ~40% vs. pusty żołądek; konsekwentne czasowanie zalecane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem Aromasin",
      "timing": "Tydzień 3-4 cyklu lub początek objawów gino",
      "markers": "E2 LC-MS/MS, Total/Wolny Testosteron, SHBG (Aromasin monitor SHBG szczególnie!), lipidogram, ALT/AST, morfologia.",
      "purpose": "Baseline. Baseline SHBG jest szczególnie ważny: metabolit 17-hydro Aromasin jest obniżający SHBG, a wzrost wolnego testosteronu jest tu uchwytny."
    },
    "midCycle": {
      "label": "Aromasin dzień 7-10",
      "timing": "Start Aromasin +7-10 dni",
      "markers": "E2 LC-MS/MS, SHBG (monitor powrotu), Wolny Test, lipidogram, ALT/AST.",
      "purpose": "Potwierdzenie miareczkowania: E2 20-30 pg/mL, udokumentuj spadek SHBG i wzrost wolnego testosteronu. Monitor lipidogramu: oczekiwany łagodny spadek HDL."
    },
    "postCycle": {
      "label": "Koniec Aromasin + powrót",
      "timing": "Ostatnia dawka +1 tydzień",
      "markers": "E2, SHBG (powrót), Total/Wolny Test, lipidogram.",
      "purpose": "Potwierdź: E2 stopniowo wraca do baseline (5-7 dni, BRAK rebound). SHBG normalizuje się przez 2-4 tygodnie."
    },
    "cruise": {
      "label": "Długoterminowy AAS cruise niska dawka",
      "timing": "Tygodniowo 12,5-25 mg (indywidualnie miareczkowane)",
      "markers": "E2 LC-MS/MS miesięcznie, SHBG, lipidogram, DEXA skan rocznie.",
      "purpose": "Na TRT cruise Aromasin jest alternatywą dla anastrozolu gdy akcent SHBG lub stabilny profil E2 jest pożądany. Długoterminowa supresja wymaga monitorowania BMD."
    }
  }
}
