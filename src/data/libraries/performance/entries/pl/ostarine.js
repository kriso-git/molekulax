// MK-2866 (Ostarine / Enobosarm) — non-steroidal SARM, GTx Inc 2007.
// Sources: Dalton 2011 PMID 21833506 (Phase II cachexia), Crawford 2016
// PMID 26944362 (Phase III POWER trials), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635, Vilaca 2018 PMID 30171122 (SARM-DILI).

export default {
  "id": "ostarine",
  "sideEffects": [
    { "hu": "HPTA-szuppresszió: a tesztoszteron-, LH- és FSH-szint csökkenése. Klinikai 3 mg/nap dózison a Total T kb. 23%-kal esett (Dalton 2011), UGL-dózison (20-30 mg/nap) a szuppresszió teljes lehet, libidócsökkenéssel és letargiával.", "en": "HPTA suppression: lowered testosterone, LH and FSH. At the clinical 3 mg/day dose Total T fell ~23% (Dalton 2011); at UGL doses (20-30 mg/day) suppression can be complete, with reduced libido and lethargy.", "pl": "Supresja HPTA: obniżenie testosteronu, LH i FSH. Przy klinicznej dawce 3 mg/dobę Total T spadał o ~23% (Dalton 2011); przy dawkach UGL (20-30 mg/dobę) supresja może być całkowita, ze spadkiem libido i ospałością." },
    { "hu": "Kedvezőtlen lipidprofil: a HDL (\"jó\" koleszterin) kb. 20-30%-os csökkenése, ami a SARM-ok osztályhatása. Hosszabb vagy magas dózisú használat kedvezőtlen kardiovaszkuláris kockázati profilt eredményez.", "en": "Adverse lipid profile: HDL (\"good\" cholesterol) drops ~20-30%, a class effect of SARMs. Longer or high-dose use shifts the cardiovascular risk profile unfavourably.", "pl": "Niekorzystny profil lipidowy: HDL (\"dobry\" cholesterol) spada o ~20-30%, co jest efektem klasowym SARM. Dłuższe lub wysokie dawkowanie pogarsza profil ryzyka sercowo-naczyniowego." },
    { "hu": "Hepatotoxicitás (gyógyszer-indukált májkárosodás, DILI): legalább 4+ dokumentált hepatocelluláris károsodási esetjelentés (Vilaca 2018). Klinikai trial-okban az ALT/AST mérsékelten emelkedett (~1,5-2x), UGL-dózison súlyosabb. Mechanizmus: CYP3A4-mediált reaktív metabolit (Solomon 2019).", "en": "Hepatotoxicity (drug-induced liver injury, DILI): at least 4+ documented hepatocellular injury case reports (Vilaca 2018). In trials ALT/AST rose moderately (~1.5-2x); worse at UGL doses. Mechanism: a CYP3A4-mediated reactive metabolite (Solomon 2019).", "pl": "Hepatotoksyczność (polekowe uszkodzenie wątroby, DILI): co najmniej 4+ udokumentowane przypadki uszkodzenia hepatocelularnego (Vilaca 2018). W badaniach ALT/AST wzrastało umiarkowanie (~1,5-2x); gorzej przy dawkach UGL. Mechanizm: reaktywny metabolit zależny od CYP3A4 (Solomon 2019)." },
    { "hu": "Androgén mellékhatások: hajhullás (androgén alopécia) genetikai hajlam esetén, valamint aknésodás. Mérsékeltebb mint az erősebben androgén SARM-oknál (pl. RAD-140), de nem hiányzik.", "en": "Androgenic effects: hair loss (androgenic alopecia) in genetically predisposed users, plus acne. Milder than with more androgenic SARMs (e.g. RAD-140), but present.", "pl": "Efekty androgenne: wypadanie włosów (łysienie androgenowe) u osób predysponowanych genetycznie oraz trądzik. Łagodniejsze niż przy bardziej androgennych SARM (np. RAD-140), ale obecne." },
    { "hu": "Virilizáció nőknél: magasabb dózison maszkulinizáció (hangmélyülés, fokozott testszőrzet, klitorisz-megnagyobbodás), amely részben visszafordíthatatlan lehet. A hangmélyülés tartós.", "en": "Virilisation in women: at higher doses masculinisation (voice deepening, increased body hair, clitoral enlargement), which can be partly irreversible. Voice deepening is permanent.", "pl": "Wirylizacja u kobiet: przy wyższych dawkach maskulinizacja (obniżenie głosu, nasilone owłosienie, przerost łechtaczki), częściowo nieodwracalna. Obniżenie głosu jest trwałe." },
    { "hu": "Álmatlanság és letargia: a felhasználói beszámolókban gyakori az alvászavar és fáradékonyság, részben a hormontengely-szuppresszió következtében.", "en": "Insomnia and lethargy: sleep disturbance and fatigue are commonly reported, partly secondary to HPTA suppression.", "pl": "Bezsenność i ospałość: zaburzenia snu i zmęczenie są często zgłaszane, częściowo wtórne do supresji HPTA." },
    { "hu": "Lassú kiürülés a hosszú felezési idő miatt (~24 óra): ha mellékhatás jelentkezik, a vegyület NEM állítható le gyorsan, a hatás napokig elhúzódik.", "en": "Slow clearance due to the long half-life (~24 h): if a side effect appears, the compound cannot be stopped quickly and effects persist for days.", "pl": "Powolna eliminacja z powodu długiego okresu półtrwania (~24 h): jeśli pojawi się działanie niepożądane, związku nie da się szybko odstawić, efekt utrzymuje się przez dni." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a magzati hím-androgenizáció és a női magzat virilizációjának kockázata miatt abszolút ellenjavallt.", "en": "Pregnancy and breastfeeding: absolutely contraindicated due to the risk of fetal androgenisation and virilisation of a female fetus.", "pl": "Ciąża i karmienie piersią: bezwzględnie przeciwwskazane ze względu na ryzyko androgenizacji płodu i wirylizacji płodu żeńskiego." },
    { "hu": "Meglévő máj-diszfunkció vagy emelkedett májenzimek: a dokumentált DILI-esetek miatt fennálló májbetegségben kerülendő.", "en": "Pre-existing liver dysfunction or elevated liver enzymes: avoid given the documented DILI cases.", "pl": "Istniejąca dysfunkcja wątroby lub podwyższone enzymy wątrobowe: unikać ze względu na udokumentowane przypadki DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szerek (pl. más orális SARM-ok, 17-alfa-alkilált szteroidok): kumulatív májterhelés.", "en": "Concurrent alcohol use or other hepatotoxic agents (e.g. other oral SARMs, 17-alpha-alkylated steroids): cumulative liver burden.", "pl": "Jednoczesne spożywanie alkoholu lub innych środków hepatotoksycznych (np. inne doustne SARM, sterydy 17-alfa-alkilowane): kumulatywne obciążenie wątroby." },
    { "hu": "Tervezett apaság / fertilitási ablak: a HPTA-szuppresszió és a sperma-paraméterek csökkenése miatt; a teljes recovery 2-4 hónap.", "en": "Planned fatherhood / fertility window: due to HPTA suppression and reduced sperm parameters; full recovery takes 2-4 months.", "pl": "Planowane ojcostwo / okno płodności: z powodu supresji HPTA i pogorszenia parametrów nasienia; pełna regeneracja trwa 2-4 miesiące." },
    { "hu": "Versenysportolók: a WADA egész évben tiltja (S1.2 \"egyéb anabolikus szer\"), a vizelet-detekciós ablak 2-4 hét. A 2015-2020-as évek leggyakoribb doppingszuszpenzió-okozója.", "en": "Competitive athletes: banned by WADA year-round (S1.2 \"other anabolic agents\"), urine detection window 2-4 weeks. The most frequent cause of doping suspensions in 2015-2020.", "pl": "Sportowcy wyczynowi: zakazany przez WADA przez cały rok (S1.2 \"inne środki anaboliczne\"), okno wykrywalności w moczu 2-4 tygodnie. Najczęstsza przyczyna zawieszeń dopingowych w latach 2015-2020." },
    { "hu": "Diagnosztizálatlan vagy androgén-szenzitív állapotok (pl. prosztatabetegség, hormonérzékeny daganatok): orvosi értékelés nélkül kerülendő.", "en": "Undiagnosed or androgen-sensitive conditions (e.g. prostate disease, hormone-sensitive tumours): avoid without medical evaluation.", "pl": "Niezdiagnozowane lub wrażliwe na androgeny stany (np. choroby prostaty, nowotwory hormonozależne): unikać bez oceny lekarskiej." },
    { "hu": "Meglévő dyslipidaemia vagy kardiovaszkuláris kockázat: a HDL-csökkenés tovább rontja a lipidprofilt.", "en": "Pre-existing dyslipidaemia or cardiovascular risk: the HDL drop further worsens the lipid profile.", "pl": "Istniejąca dyslipidemia lub ryzyko sercowo-naczyniowe: spadek HDL dodatkowo pogarsza profil lipidowy." }
  ],
  "name": "MK-2866 (Ostaryna, Enobosarm)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Niesterydowy SARM (Enobosarm), GTx Inc 2007. SARM z NAJWIĘKSZĄ ilością danych z badań klinicznych: Faza II cachexia (Dalton 2011 PMID 21833506, 159 pacjentów), Faza III POWER cancer-cachexia (Crawford 2016 PMID 26944362). Najpopularniejszy SARM na rynku kulturystyki, marketing UGL pod etykietą 'łagodny pierwszy SARM'. Zakazany WADA S1.2.",
  "description": "Ostaryna (MK-2866, Enobosarm, GTx-024, S-22) to niesterydowy selektywny modulator receptora androgenowego (SARM) opracowany przez GTx Inc. (Memphis, USA) w 2007. Strukturalnie pochodna arylopropionamidu (NIE steryd), powinowactwo AR-binding ~30-40% poziomu testosteronu in vitro (Bhasin 2012 PMID 22573713). Rozwój kliniczny: NAJBARDZIEJ klinicznie testowana cząsteczka klasy SARM — Faza I 2007-2010, Faza II 2010-2012 cancer-cachexia (Dalton 2011 PMID 21833506 — 159 pacjentów, 16 tygodni, 1-3 mg/dzień, wynik: 1,3 kg wzrost lean body mass @ 3 mg vs placebo), Faza III POWER 1+2 badania 2013-2016 non-small-cell lung cancer cachexia (Crawford 2016 PMID 26944362 — NCT01355484/NCT01355497, ~600 pacjentów, 3 mg/dzień, wynik: lean body mass + physical function co-primary endpoint STATYSTYCZNIE NIE osiągnął progu clinical-meaningfulness → Faza III FAILED). GTx wstrzymało rozwój kliniczny dla wskazania cachexia po 2016, później skupiło się na urinary incontinence (Asahi, Faza II, 2018) + breast cancer (ER+ adjunct, Faza II, 2017), ale zatwierdzenie FDA nadal oczekuje. Na rynku kulturystyki NAJPOPULARNIEJSZY SARM, marketing UGL jako 'łagodny pierwszy SARM' (niższa supresja HPTA niż RAD/LGD, bardziej umiarkowana hepatotoksyczność). Przypadki hepatotoksyczności udokumentowane (4+ znanych przypadków, Vilaca 2018 PMID 30171122 review), ale rzadsze niż RAD/LGD. Zakazany WADA przez cały rok (S1.2 — inne środki anaboliczne) od 2008 — częsty cel od 2013.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Niesterydowy selektywny modulator AR (arylopropionamid). Silny agonista AR w mięśniu, umiarkowany w prostacie."
    },
    {
      "label": "Aktywność anaboliczna (Dalton 2011)",
      "value": "1,3 kg wzrost lean body mass @ 3 mg/dzień, 16 tygodni, pacjenci z kacheksją nowotworową."
    },
    {
      "label": "Okres półtrwania",
      "value": "~24 h (doustnie)"
    },
    {
      "label": "Onset",
      "value": "2-4 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "Nigdy nie zatwierdzony przez FDA (Faza III POWER failed 2016). UGL 'research chemical'. Zakazany WADA S1.2."
    }
  ],
  "mechanism": "Ostaryna to niesterydowy SARM, struktura arylopropionamidu. Selektywny agonista AR w tkance mięśniowej + kostnej — powinowactwo AR-binding ~30-40% poziomu testosteronu in vitro (Bhasin 2012). Minimalna aktywność w tkance prostaty (~10-20% Test). Upregulation MyoD/myogenin w mięśniu → synteza białek mięśniowych. NIE aromatyzuje → brak wzrostu E2. Supresja HPTA łagodniejsza niż na RAD-140/LGD-4033 (Dalton 2011 — 3 mg/dzień Total T -23%, spadek LH/FSH umiarkowany). Przy wyższych dawkach UGL (20-30 mg/dzień) pełna supresja HPTA, ale nadal łagodniejsza dose-proportionalnie niż LGD/RAD. Mechanizm hepatotoksyczności reakcyjny metabolit mediowany przez CYP3A4 (Solomon 2019 PMID 31077635). Vilaca 2018 PMID 30171122 review odnotował 4 przypadki hepatocellular injury związane z Ostaryną, znacznie mniej niż RAD/LGD.",
  "legalStatus": "Nigdy nie zatwierdzony przez FDA. GTx Inc przerwało rozwój cancer-cachexia po niepowodzeniu Fazy III POWER w 2016. Od 2018 kontynuowane wskazania urinary incontinence + breast cancer adjunct — nadal brak Rx. USA: Schedule III analog w niektórych stanach (2018+). UE: brak Rx, UGL 'research chemical'. Zakazany WADA przez cały rok (S1.2) od 2008.",
  "onsetTime": "2-4 tygodnie. Dalton 2011 PMID 21833506 Faza II: wzrost lean body mass mierzalny po 8 tygodniach.",
  "halfLife": "~24 h (doustnie)",
  "halfLifeActive": "~24 h",
  "interactionsWith": [
    "rad-140",
    "lgd-4033",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NIE — niesterydowy, NIE substrat CYP19. E2 nie wzrasta (Dalton 2011 Faza II).",
  "hepatotoxicity": "**Umiarkowana-wysoka — 4+ udokumentowanych raportów hepatocellular injury (Vilaca 2018 PMID 30171122). W badaniach klinicznych (Dalton 2011, Crawford 2016) wzrost ALT/AST umiarkowany (~1,5-2x norma przy 3 mg).** Przy dawkach UGL (20-30 mg/dzień) cięższe. TUDCA + milk-thistle + miesięczne ALT/AST zalecane (nie ściśle obowiązkowe, ale silnie sugerowane).",
  "wadaStatus": "banned",
  "androgenicRatio": "~50:20 (selektywność mięsień:prostata — wysoka, lepsza niż LGD).",
  "bindingAffinity": "Niesterydowy SARM, powinowactwo AR-binding ~30-40% poziomu testosteronu in vitro. Wysoka selektywność tkankowa mięsień > prostata (Dalton 2011 PMID 21833506).",
  "detectionWindow": "W moczu: 2-4 tygodnie metabolity Ostaryny przez LC-MS/MS (akredytowane WADA). Najczęstsza przyczyna przypadków suspensji NFL/MLB w latach 2015-2020.",
  "benefits": [
    "Najwięcej danych z badań klinicznych w klasie SARM (Faza II + Faza III POWER)",
    "Udokumentowany wzrost lean body mass (1,3 kg @ 3 mg, 16 tygodni pacjenci z kacheksją)",
    "Umiarkowana supresja HPTA (łagodniejsza niż RAD/LGD)",
    "Profil wątrobowy bardziej umiarkowany (mniej raportów DILI)",
    "Wysoka selektywność mięsień > prostata"
  ],
  "quickStart": [
    "**Monitorowanie hepatotoksyczności**: TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień + miesięczne ALT/AST zalecane (Vilaca 2018 review odnotował 4 przypadki DILI)",
    "Dawka: 12,5-25 mg/dzień, max 8 tygodni cyklu (kliniczne 3 mg, anegdoty UGL 10-25 mg)",
    "Supresja HPTA umiarkowana, PCT (Clomid + Nolvadex 4 tygodnie) zalecane przy wysokich dawkach",
    "Zakazany WADA przez cały rok (2-4 tygodnie detekcja w moczu) — najczęstsza przyczyna suspensji NFL/MLB",
    "Możliwa opcja pierwszego SARM dla eksperymentujących, ale NIE 'bezpieczny' — compound research-level"
  ],
  "expectations": [
    {
      "label": "Pierwsze 2 tygodnie",
      "body": "Anegdotyczny wzrost siły umiarkowany, zmiana lean mass JESZCZE niemierzalna."
    },
    {
      "label": "Tygodnie 4-8",
      "body": "Wzrost lean mass 1-3 kg (anegdoty UGL przy 12,5-25 mg/dzień), supresja HPTA się rozpoczyna (LH/FSH ~30-50%)."
    },
    {
      "label": "Koniec tygodnia 8",
      "body": "Maksymalny efekt (2-4 kg lean mass UGL), planowanie PCT. Monitor wątrobowy."
    }
  ],
  "quality": {
    "pure": [
      "UGL Ostaryna kapsułka 10-25 mg na kaps — HPLC-testowane źródło OBOWIĄZKOWE",
      "Zawiesina płynna 25 mg/ml UGL (precyzyjne dawkowanie)",
      "Wszystko UGL — brak formatu Rx (GTx Faza III 2016 failed)"
    ],
    "caution": [
      "Hepatotoksyczność umiarkowana — 4+ udokumentowanych przypadków DILI (Vilaca 2018)",
      "Supresja HPTA łagodna-umiarkowana (3 mg kliniczne → -23% Total T)",
      "Zaburzenia lipidowe umiarkowane (spadek HDL ~20-30%)",
      "Przy wysokich dawkach UGL (>25 mg) cięższe skutki uboczne",
      "Długi okres półtrwania → jeśli pojawią się skutki uboczne, NIE szybko zatrzymywalny"
    ],
    "avoid": [
      "Istniejąca dysfunkcja wątroby",
      "Spożycie alkoholu",
      "Stack wysokich dawek z innymi SARM (kumulatywne DILI)",
      "Planowane ojcostwo (supresja HPTA + odzyskanie 2-4 miesiące)",
      "Stosowanie u kobiet w wysokich dawkach (wirylizacja)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień: ochrona wątroby zalecana",
    "Inne SARMs (RAD-140, LGD-4033): NIE zalecane — kumulatywna hepatotoksyczność",
    "PCT: Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4 tygodnie (krótsze niż RAD/LGD z powodu łagodniejszej supresji HPTA)",
    "Warfaryna: łagodne wzmocnienie antykoagulacyjne"
  ],
  "studies": [
    {
      "title": "The selective androgen receptor modulator GTx-024 (enobosarm) improves lean body mass and physical function in healthy elderly men and postmenopausal women: results of a double-blind, placebo-controlled phase II trial.",
      "authors": "Dalton JT, Barnette KG, Bohl CE, Hancock ML, Rodriguez D, Dodson ST, Morton RA, Steiner MS",
      "journal": "J Cachexia Sarcopenia Muscle",
      "pmid": "22031847"
    },
    {
      "title": "Study Design and Rationale for the Phase 3 Clinical Development Program of Enobosarm, a Selective Androgen Receptor Modulator, for the Prevention and Treatment of Muscle Wasting in Cancer Patients (POWER Trials).",
      "authors": "Crawford J, Prado CM, Johnston MA, Zimmers TA, Penna F",
      "journal": "Curr Oncol Rep",
      "pmid": "27138015"
    },
    {
      "title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.",
      "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A",
      "journal": "Eur J Clin Pharmacol",
      "pmid": "38059982"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective Androgen Receptor Modulators in Women: What Do We Know, and What Is Still Missing.",
      "authors": "Vasilev V, Georgieva K, Kraeva M",
      "journal": "Life (Basel)",
      "pmid": "41752994"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego Faza III POWER się nie powiodła?",
      "a": "GTx Inc Faza III POWER 1+2 badania (NCT01355484/NCT01355497, 2013-2016, ~600 pacjentów NSCLC z kacheksją, 3 mg/dzień Ostaryna vs placebo): co-primary endpoint **lean body mass + physical function (stair-climb power)** RAZEM NIE osiągnął istotności statystycznej. Lean body mass wzrósł (+1,5 kg vs placebo), ale endpoint physical function nie osiągnął progu clinical-meaningfulness. FDA NIE zatwierdziła. Po 2016 GTx przerwało rozwój Ostaryny dla kacheksji, później skupiając się na breast cancer adjunct + urinary incontinence (Asahi 2018 Faza II). Crawford 2016 PMID 26944362 zawiera szczegółowy projekt badania + wyniki."
    },
    {
      "q": "Dlaczego Ostaryna to 'łagodniejszy' SARM niż RAD/LGD?",
      "a": "Wiele powodów: (1) powinowactwo AR-binding niższe (~30-40% Test vs RAD ~80%); (2) supresja HPTA łagodniejsza dose-proporcjonalnie (Dalton 2011 — 3 mg/dzień Total T -23% vs Basaria 2013 LGD przy 1 mg już -23%); (3) raporty hepatotoksyczności rzadsze (Vilaca 2018 — 4 vs RAD 6, LGD 12); (4) Wyższy precedens badań klinicznych (Faza III POWER). ALE: 'łagodniejszy' NIE jest 'bezpieczny' — przy dawkach UGL (20-30 mg/dzień) pełna supresja HPTA, ryzyko DILI obecne, zakazany WADA. Możliwa opcja pierwszego SARM dla eksperymentujących, ale pozostaje compound research-level."
    },
    {
      "q": "Pozytywny test na Ostarynę — precedens NFL/MLB?",
      "a": "Ostaryna była najczęstszą przyczyną suspensji dopingowych w sporcie w latach 2015-2020: NFL Detroit Lions WR Calvin Johnson 2015 (później oczyszczony, contaminated supplement), NFL TE Tony Galladay 2018, MLB Cleveland Indians Tyler Naquin 2017, MLB San Francisco Giants Pablo Sandoval 2019. Powszechny argument 'contaminated supplement': Geyer 2008 PMID 18519434 review znalazł ~15% suplementów fitness na rynku zawierających wykrywalne zanieczyszczenia SARM/anabolicznymi przez LC-MS/MS. Dla sportowców wyczynowych minimalnym wymaganiem jest używanie suplementów 3rd-party-testowanych (NSF Certified for Sport)."
    },
    {
      "q": "Czy Ostaryna może być stackowana z RAD-140 lub LGD-4033?",
      "a": "**NIE zalecane.** Raport przypadku Hilal 2020 PMID 32492288 dotyczył stack RAD+LGD rozwijającego piorunujące DILI po 9 tygodniach — kumulatywna hepatotoksyczność. Ostaryna byłaby relatywnie 'łagodna' w stacku SARM, ale ryzyko kombinacyjne (CYP3A4 saturation dla reakcyjnych metabolitów) jest poważne. Jeśli pożądane jest wiele SARM, lepiej w sekwencji (8 tygodni jeden, 8 tygodni PCT, 8 tygodni inny) niż równolegle. Brak precedensu klinicznego dla stacku."
    }
  ],
  "related": [
    "rad-140",
    "lgd-4033",
    "yk-11",
    "s4"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 12.5,
      "medium": 20,
      "high": 25
    },
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "12,5-25 mg/dzień, max 8 tygodni cyklu. Kliniczne 3 mg/dzień → UGL 4-8x. TUDCA + milk-thistle zalecane. PCT 4 tygodnie (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel wątrobowy (ALT/AST/GGT/ALP/bilirubina/albumina), lipidogram, panel hormonalny (Total T/Free T/E2/LH/FSH/SHBG).",
      "purpose": "Baseline wątrobowy + HPTA."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tygodnie 4 i 8",
      "markers": "ALT/AST/GGT, lipidowy, hormon (monitor supresji HPTA).",
      "purpose": "Monitor wątrobowy (>3x ALT → odstawienie)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Ostatnia dawka +3-5 dni start PCT (Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4 tygodnie)",
      "markers": "Normalizacja wątrobowa, odzyskanie HPTA, lipidowy.",
      "purpose": "Odzyskanie HPTA + wątrobowe (2-4 miesiące pełne)."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "Ostaryna cruise NIE standard",
      "markers": "N/A",
      "purpose": "Tylko użycie cykliczne."
    }
  },
  "anecdote": "Ostarine (MK-2866) jest ogólnie uważany za 'SARM dla początkujących' z łagodniejszym profilem. Nadal jest skuteczny — zwłaszcza do zachowania mięśni przy deficycie kalorycznym — ale w porównaniu z prawdziwym AAS jest wyraźnie słabszy. Użytkownicy zwykle zgłaszają lepszą regenerację, niewielkie wzrosty siły i pełniejszy wygląd bez znaczącej retencji wody. Najpopularniejszy jest do zachowania mięśni podczas redukcji, co jest dominującym przypadkiem użycia w doniesieniach społeczności. Skutki uboczne, na które należy zwrócić uwagę, obejmują supresję HPTA, wypadanie włosów i bezsenność. Jest również mniej agresywny niż RAD-140. Co ważne, pomimo łagodnej reputacji, Ostarine nadal istotnie wpływa na lipidy i nie powinien być uważany za wolny od skutków ubocznych. Najlepiej charakteryzuje się jako subtelny, mniejszy związek anaboliczny, a nie dramatyczny budulec masy. Podawany doustnie, często dawkowany około 1 godziny przed treningiem. Niższe dawki są typowe do zachowania mięśni; wyższe dawki zapewniają większy wzrost, ale także więcej skutków ubocznych."
}
