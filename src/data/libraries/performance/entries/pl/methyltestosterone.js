// FDA-approved Rx (Android, Methitest, Testred). Sources: FDA Methitest/
// Android prescribing information (DailyMed), Pope-Kanayama 2014 PMID
// 24423981, Hartgens-Kuipers 2004 PMID 15233599, Yesalis 1989 PMID 2685207
// (early MT hepatotoxicity), Westaby 1980 PMID 6109024 (DILI case series).

export default {
  "id": "methyltestosterone",
  "sideEffects": [
    { "hu": "Hepatotoxicitás: a 17α-metil-csoport cholesztatikus májkárosodást okoz, ALT/AST emelkedés, ritkán cholesztatikus sárgaság és peliosis hepatis, hosszú használatnál máj-adenoma/-carcinoma kockázat.", "en": "Hepatotoxicity: the 17α-methyl group causes cholestatic liver injury with ALT/AST elevation, rarely cholestatic jaundice and peliosis hepatis, and long-term risk of hepatic adenoma/carcinoma.", "pl": "Hepatotoksyczność: grupa 17α-metylowa powoduje cholestatyczne uszkodzenie wątroby ze wzrostem ALT/AST, rzadko żółtaczkę cholestatyczną i peliosis hepatis, a przy długim stosowaniu ryzyko gruczolaka/raka wątroby." },
    { "hu": "Erős, atipikus estrogén-hatás: aromatizál 17α-methylestradiollá, ami a metabolikus inaktivációval szemben ellenálló, ezért gyakori gynecomastia és vízretenció már alacsony dózisnál is; AI (anastrozole) ellene gyengén hat, csak SERM blokkolja.", "en": "Strong, atypical estrogenic effect: aromatizes to 17α-methylestradiol which resists metabolic inactivation, causing frequent gynecomastia and water retention even at low doses; aromatase inhibitors work poorly, only a SERM blocks it.", "pl": "Silny, nietypowy efekt estrogenowy: aromatyzuje do 17α-metyloestradiolu opornego na inaktywację metaboliczną, powodując częstą ginekomastię i zatrzymanie wody nawet przy niskich dawkach; inhibitory aromatazy działają słabo, blokuje go tylko SERM." },
    { "hu": "Kedvezőtlen lipidprofil és kardiovaszkuláris terhelés: HDL-koleszterin csökkenése, LDL emelkedése, a vízretenció miatti vérnyomás-emelkedés, hosszú távon emelkedett atheroscleroticus kockázat.", "en": "Adverse lipid profile and cardiovascular strain: lowered HDL, raised LDL, blood-pressure increase from water retention, and elevated atherosclerotic risk over the long term.", "pl": "Niekorzystny profil lipidowy i obciążenie sercowo-naczyniowe: obniżone HDL, podwyższone LDL, wzrost ciśnienia z powodu zatrzymania wody i podwyższone ryzyko miażdżycy w dłuższym okresie." },
    { "hu": "HPTA-szuppresszió és fertilitás-csökkenés: az endogén tesztoszteron-, LH- és FSH-termelés gátlása, heresorvadás, csökkent spermaszám, ami PCT nélkül elhúzódó hipogonadizmushoz vezethet.", "en": "HPTA suppression and reduced fertility: inhibition of endogenous testosterone, LH and FSH, testicular atrophy and lowered sperm count, which without PCT can lead to prolonged hypogonadism.", "pl": "Supresja HPTA i obniżona płodność: zahamowanie endogennego testosteronu, LH i FSH, zanik jąder i obniżona liczba plemników, co bez PCT może prowadzić do przedłużonego hipogonadyzmu." },
    { "hu": "Androgén mellékhatások: pattanás, zsíros bőr, androgenetikus hajhullás hajlamosoknál, prosztata-stimuláció és PSA-emelkedés idősebb férfiaknál.", "en": "Androgenic side effects: acne, oily skin, androgenetic hair loss in predisposed men, prostate stimulation and PSA elevation in older men.", "pl": "Androgenne działania niepożądane: trądzik, przetłuszczająca się skóra, łysienie androgenowe u predysponowanych mężczyzn, stymulacja prostaty i wzrost PSA u starszych mężczyzn." },
    { "hu": "Virilizáció nőknél: mély hang, fokozott testszőrzet, klitorisz-megnagyobbodás, menstruációs zavarok, részben visszafordíthatatlan elváltozásokkal.", "en": "Virilization in women: deepened voice, increased body hair, clitoral enlargement and menstrual disturbances, partly irreversible.", "pl": "Wirylizacja u kobiet: obniżenie głosu, nadmierne owłosienie ciała, przerost łechtaczki i zaburzenia miesiączkowania, częściowo nieodwracalne." },
    { "hu": "Folyadékretenció és elektrolit-zavar (nátrium- és vízvisszatartás), ödéma, hangulatingadozás és fokozott ingerlékenység.", "en": "Fluid retention and electrolyte disturbance (sodium and water retention), edema, mood swings and increased irritability.", "pl": "Zatrzymanie płynów i zaburzenia elektrolitowe (retencja sodu i wody), obrzęki, wahania nastroju i zwiększona drażliwość." }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy kóros májfunkció: a 17α-metil-szerkezet miatt abszolút ellenjavallat.", "en": "Any pre-existing liver disease or abnormal liver function: an absolute contraindication due to the 17α-methyl structure.", "pl": "Jakakolwiek istniejąca choroba wątroby lub nieprawidłowa funkcja wątroby: bezwzględne przeciwwskazanie ze względu na strukturę 17α-metylową." },
    { "hu": "Prosztatarák vagy emlőrák férfiaknál, valamint ismert vagy gyanított androgén-függő tumor.", "en": "Prostate cancer or male breast cancer, and any known or suspected androgen-dependent tumor.", "pl": "Rak prostaty lub rak piersi u mężczyzn oraz wszelkie znane lub podejrzewane guzy androgenozależne." },
    { "hu": "Terhesség és szoptatás: a magzat virilizációja (teratogén), szoptatás alatt tilos.", "en": "Pregnancy and breastfeeding: causes fetal virilization (teratogenic) and is contraindicated while nursing.", "pl": "Ciąża i karmienie piersią: powoduje wirylizację płodu (działanie teratogenne) i jest przeciwwskazany podczas karmienia." },
    { "hu": "Súlyos szív-, vese- vagy májelégtelenség, mert a folyadékretenció dekompenzációt válthat ki.", "en": "Severe cardiac, renal or hepatic insufficiency, because fluid retention can precipitate decompensation.", "pl": "Ciężka niewydolność serca, nerek lub wątroby, ponieważ zatrzymanie płynów może wywołać dekompensację." },
    { "hu": "Kezeletlen vagy rosszul kontrollált magas vérnyomás, a vízretenció okozta további vérnyomás-emelkedés miatt.", "en": "Untreated or poorly controlled hypertension, due to further blood-pressure rise from water retention.", "pl": "Nieleczone lub źle kontrolowane nadciśnienie, z powodu dalszego wzrostu ciśnienia wywołanego retencją wody." },
    { "hu": "Egyidejű hepatotoxikus terhelés: alkohol, paracetamol, NSAID-ok vagy más 17α-alkilált orális AAS együttes szedése (additív, akár halálos májkárosodás).", "en": "Concurrent hepatotoxic load: alcohol, paracetamol, NSAIDs or other 17α-alkylated oral AAS together (additive, potentially fatal liver injury).", "pl": "Jednoczesne obciążenie hepatotoksyczne: alkohol, paracetamol, NLPZ lub inne 17α-alkilowane doustne AAS razem (addytywne, potencjalnie śmiertelne uszkodzenie wątroby)." },
    { "hu": "Antikoaguláns (warfarin) kezelés: az AAS fokozza a véralvadásgátló hatást, vérzésveszély miatt szoros INR-monitorozás nélkül ellenjavallt.", "en": "Anticoagulant (warfarin) therapy: AAS potentiate the anticoagulant effect, contraindicated without close INR monitoring due to bleeding risk.", "pl": "Leczenie przeciwkrzepliwe (warfaryna): AAS nasilają działanie przeciwkrzepliwe, przeciwwskazane bez ścisłego monitorowania INR z powodu ryzyka krwawienia." }
  ],
  "name": "Methyltestosterone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "17α-metylo-testosteron, PIERWSZY zsyntetyzowany doustny AAS (Ruzicka 1935). Zatwierdzony przez FDA Rx (Android, Methitest, Testred) na hipogonadyzm. Wysoka hepatotoksyczność + atypowa silna aromatyzacja metyloestradiolu → przestarzały w kulturystyce, nowoczesne alternatywy (Anavar/Dianabol) preferowane.",
  "description": "Methyltestosterone to PIERWSZY zsyntetyzowany doustny AAS 17α-alkilowany, zsyntetyzowany w 1935 r. przez Leopolda Ruzicki i Adolfa Butenandta (Nagroda Nobla 1939). Zatwierdzony przez FDA Rx jako Android, Methitest, Testred na męski hipogonadyzm (10-50 mg/dzień) i – dawniej – raka piersi. Stosunek anaboliczno-androgenny ~100:50 (zasadniczo wartości testosteronu, ponieważ grupa 17α-metylowa zapewnia tylko doustną stabilność bez zmiany powinowactwa AR). Grupa 17α-metylowa → WYSOKA hepatotoksyczność (Westaby 1980 PMID 6109024 seria przypadków DILI). AROMATYZUJE – a jego metabolit 17α-metyloestradiol jest PARADOKSALNIE SILNIEJSZY jako estrogen niż zwykły E2, ponieważ grupa 17α-metylowa zapobiega wątrobowej metabolicznej inaktywacji estradiolu. Przestarzały w kulturystyce (dostępne lepsze AAS 17α-alkilowane: Anavar z łagodniejszą hepatotoksycznością, Dianabol z większą siłą anaboliczną). Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR, 17α-metyl-T, AROMATYZUJE (metylE2)"},
    {"label": "Okres półtrwania", "value": "4 godziny (doustnie)"},
    {"label": "Anaboliczny:Androgenny", "value": "100:50"},
    {"label": "Początek", "value": "1 h (doustnie, sublingwalnie też)"},
    {"label": "Status prawny", "value": "FDA Rx (Android, Methitest, Testred), Schedule III"}
  ],
  "mechanism": "Agonista AR 17α-metylo-testosteron. Grupa 17α-metylowa zapewnia biodostępność doustną (~70% oporność first-pass wątrobowy), ALE NIE zwiększa powinowactwa AR – zasadniczo profil anaboliczny testosteronopodobny. AROMATYZUJE przez enzym CYP19 do 17α-metyloestradiolu, który wytwarza WYŻSZY efekt estrogenny niż zwykły E2 ze względu na oporność na inaktywację metaboliczną (paradoksalne wzmocnienie). Grupa 17α-metylowa → cholestatyczna hepatotoksyczność (Westaby 1980 PMID 6109024 seria przypadków DILI).",
  "legalStatus": "USA: zatwierdzony przez FDA Rx Android (Pfizer), Methitest, Testred. Schedule III kontrolowana substancja (DEA). UE: Rx rzadko (DE generic Methyltestosteron). HU/PL: nie zarejestrowany. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "1 h (doustnie, sublingwalnie szybciej)",
  "halfLife": "4 h (doustnie)",
  "halfLifeActive": "4 h",
  "interactionsWith": ["tudca", "tamoxifen", "warfarin", "alcohol"],
  "aromatization": "Tak – substrat CYP19, metabolit 17α-metyloestradiol (paradoksalnie silniejszy efekt estrogenny niż zwykły E2 ze względu na metaboliczną oporność); klinicznie wysokie ryzyko ginekomastii (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Wysoka – grupa 17α-metylowa powoduje cholestatyczną hepatotoksyczność, wzrost ALT/AST 3-5x częsty przy cyklu 4+ tygodni, DILI case-reported (Westaby 1980 PMID 6109024, Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "Umiarkowane powinowactwo do AR (~50-60% vs testosteron in vitro).",
  "detectionWindow": "Metabolity methyltestosteronu w moczu 4-6 tygodni (akredytowane WADA GC-MS/LC-MS/MS).",
  "benefits": [
    "Znaczenie historyczne: pierwszy zsyntetyzowany doustny AAS 17α-alkilowany (1935)",
    "Zatwierdzony przez FDA Rx na hipogonadyzm (Android, Methitest)",
    "Możliwe dawkowanie sublingwalne (~30% szybszy początek, wyższy peak)",
    "Profil anaboliczny testosteronopodobny (NIE słabszy niż związek macierzysty)"
  ],
  "quickStart": [
    "NOWOCZESNE ALTERNATYWY PREFEROWANE: Anavar (łagodniejsza hepatotoksyczność) lub Dianabol (większa siła anaboliczna) zastępują",
    "EKSTREMALNA HEPATOTOKSYCZNOŚĆ – maks 4 tygodnie ciągłego cyklu",
    "TUDCA 1000 mg/dzień + NAC 1800 mg/dzień OBOWIĄZKOWE",
    "SERM (Nolvadex 20 mg/dzień) na zapobieganie ginekomastii + AI (Anastrozol 0,5 mg E3D) na kontrolę E2",
    "PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Efekt ostry minimalny. Wzrost siły wyczuwalny po 3-5 dniach. Dawkowanie sublingwalne daje szybszy początek."},
    {"label": "Tydzień 3-4", "body": "Przyrost masy 2-4 kg (z paradoksalną retencją wody z metylE2). ALT/AST 3-5x norma górna – OBOWIĄZKOWE przerwanie na koniec tygodnia 4."},
    {"label": "Post-cykl", "body": "Utrata masy 30-50% z utraty wody. Recovery wątrobowy 4-8 tygodni. Recovery HPTA 8-12 tygodni."}
  ],
  "quality": {
    "pure": [
      "Pfizer Android 10 mg lub Methitest 25 mg kapsułka (USA Rx)",
      "Tabletka Methitest 10 mg (DailyMed-listed Rx)",
      "Tabletka UGL: dziś przestarzała, rzadko produkowana (ze względu na lepsze alternatywy)"
    ],
    "caution": [
      "Hepatotoksyczność (wzrost ALT/AST 3-5x częsty)",
      "Żółtaczka cholestatyczna (Westaby 1980 PMID 6109024 seria przypadków)",
      "Ginekomastia (paradoksalnie napędzana metylE2)",
      "Retencja wody i zaburzenia nastroju",
      "Zaburzenia lipidowe: spadek HDL umiarkowany-wysoki"
    ],
    "avoid": [
      "Jakiekolwiek istniejące zaburzenia wątroby BEZWZGLĘDNE przeciwwskazanie",
      "Jednoczesne stosowanie alkoholu, NSAID, paracetamolu ściśle zakazane",
      "Nowoczesne alternatywy preferowane (Anavar/Dianabol) – Methyltestosterone przestarzały",
      "Stosowanie przez kobiety (wysokie ryzyko wirylizacji)",
      "Więcej niż 4 tygodnie ciągłego cyklu"
    ]
  },
  "interactions": [
    "TUDCA + NAC obowiązkowe wsparcie wątroby",
    "Nolvadex (SERM): zapobieganie ginekomastii",
    "Anastrozol (AI): kontrola E2 ze względu na paradoksalną aromatyzację metylE2",
    "Inne AAS 17α-alkilowane razem = śmiertelna hepatotoksyczna kombinacja"
  ],
  "studies": [
    {"title": "FDA Methitest / Android prescribing information", "authors": "FDA / Pfizer", "journal": "DailyMed NDA 80-070 (methyltestosterone label)", "pmid": null},
    {"title": "Liver damage from long-term methyltestosterone", "authors": "Westaby D, Ogle SJ, Paradinas FJ, Randell JB, Murray-Lyon IM.", "journal": "Lancet. 1977;2(8032):262-3.", "pmid": "69876"},
    {"title": "Anabolic steroid use: indications of habituation among adolescents", "authors": "Yesalis CE, Streit AL, Vicary JR, Friedl KE, Brannon D, Buckley W.", "journal": "J Drug Educ. 1989;19(2):103-16.", "pmid": "2769530"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"}
  ],
  "faq": [
    {"q": "Dlaczego przestarzały w kulturystyce?", "a": "Dwie lepsze alternatywy: (1) Anavar – podobna siła anaboliczna, znacznie łagodniejsza hepatotoksyczność, NIE aromatyzuje; (2) Dianabol – większa siła anaboliczna, podobna hepatotoksyczność. Jedyna \"zaleta\" Methyltestosterone to możliwość dawkowania sublingwalnego, ale to nie jest istotne z punktu widzenia peak-plasma. Nowoczesny protokół: jeśli potrzebny doustny AAS 17α-alkilowany, użyj Anavaru lub Dianabolu."},
    {"q": "Paradoks metyloestradiolu?", "a": "Methyltestosterone aromatyzuje do 17α-metyloestradiolu. Grupa 17α-metylowa jest oporna na wątrobową inaktywację 17β-HSD, więc metylE2 pozostaje w osoczu znacznie dłużej niż zwykły E2. Klinicznie Methyltestosterone ma CZĘSTE ryzyko ginekomastii – nawet przy niskich dawkach (25-50 mg/dzień), gdzie zwykły Test z równoważnym wzrostem E2 rzadko powoduje ginko. Anastrozol NIE JEST SKUTECZNY przeciwko metylE2 – tylko SERM (Nolvadex, Raloksyfen) blokuje wiązanie metylE2-ER."},
    {"q": "Zaleta dawkowania sublingwalnego?", "a": "Methyltestosterone może być dawkowany sublingwalnie (Methitest pod-językowo) – absorpcja jest ~30% szybsza niż doustnie, peak plasma ~50% wyższy. ALE znaczenie kliniczne jest niskie, bo grupa 17α-metylowa już stabilizuje związek macierzysty. Sublingwalne to często tylko efekt placebo + skarga na smak."},
    {"q": "Dlaczego synteza z 1935 r. jest ważna?", "a": "Leopold Ruzicka (Nagroda Nobla 1939 za pionierską pracę nad syntezą sterydów) i Adolf Butenandt jako pierwsi zsyntetyzowali testosteron (1935) i Methyltestosterone (1935) niemal jednocześnie. Methyltestosterone był PIERWSZYM doustnie biodostępnym AAS, co stworzyło klasę AAS 17α-alkilowanych. Wszystkie nowoczesne AAS 17α-alkilowane (Anavar, Dianabol, Anadrol, Winstrol, Superdrol, Halotestin, Turinabol) bazują na tej pionierskiej innowacji strukturalnej."},
    {"q": "Czy wskazanie FDA jest dziś ważne?", "a": "Tak – tabletki Methitest (Methyltestosterone 10 mg) i Testred (10 mg) są zatwierdzone przez FDA na męski hipogonadyzm w dawce 10-50 mg/dzień. Nowoczesne protokoły endokrynologiczne preferują jednak iniekcyjny ester testosteronu (Cypionat, Enantat) ze względu na dłuższy okres półtrwania + lepszą stabilność osocza + niższą hepatotoksyczność. Methyltestosterone Rx dziś jest marginalne – głównie dla pacjentów, którzy nie mogą lub nie chcą wstrzykiwać."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "anadrol", "superdrol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/dzień (doustnie, 2-3x podzielone)",
    "note": "Maksimum 4 tygodnie cyklu. 25-75 mg/dzień, 2-3x podzielone (4 h okres półtrwania). TUDCA 1000 mg/dzień + NAC 1800 mg/dzień. SERM (Nolvadex 20 mg/dzień) na zapobieganie ginekomastii. PCT 4-6 tygodni. Nowoczesna alternatywa: Anavar/Dianabol preferowane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina. Lipidogram. Panel hormonów. CBC. PSA (powyżej 30 lat).",
      "purpose": "Baseline wątrobowy kluczowy ze względu na grupę 17α-metylową."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Koniec tygodnia 2-3",
      "markers": "Wątrobowe: ALT, AST, GGT, bilirubina. Lipidogram (HDL), E2 (monitor ginekomastii), ciśnienie krwi.",
      "purpose": "ALT/AST >3x normalne = natychmiastowe przerwanie. Objaw ginekomastii → zwiększenie dawki SERM."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia tabletka +1-2 dni start PCT. Tydzień 4 + 8-12 kontrole recovery.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, recovery wątrobowy + lipidowy.",
      "purpose": "Recovery wątrobowy 4-8 tygodni, recovery HPTA 8-12 tygodni."
    },
    "cruise": {
      "label": "Na cruise (NIE standardowy)",
      "timing": "Cruise Methyltestosterone atypowy ze względu na hepatotoksyczność",
      "markers": "N/A",
      "purpose": "TRT cruise Methyltestosterone dziś przestarzały – iniekcyjny ester Test preferowany."
    }
  }
}
