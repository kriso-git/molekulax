// LGD-4033 (Ligandrol / Anabolicum) – non-steroidal SARM, Ligand Pharma 2007.
// Sources: Basaria 2013 PMID 23413266 (Phase I healthy men), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Vilaca 2018 PMID 30171122
// (SARM hepatotoxicity review), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635, Dalton 2011 PMID 21674508 (SARM general).

export default {
  "id": "lgd-4033",
  "sideEffects": [
    { "hu": "Májkárosodás (drog-indukált májsérülés, DILI): 12+ dokumentált hepatocellularis sérülés-esetjelentés, néhányban sárgaság és ALT >10x normálérték, fulmináns lefolyás stack esetén.", "en": "Liver injury (drug-induced liver injury, DILI): 12+ documented hepatocellular injury case reports, some with jaundice and ALT >10x upper normal, fulminant course when stacked.", "pl": "Uszkodzenie watroby (polekowe uszkodzenie watroby, DILI): ponad 12 udokumentowanych przypadkow uszkodzenia hepatocytow, czesc z zoltaczka i ALT >10x normy, piorunujacy przebieg przy laczeniu." },
    { "hu": "HPTA-szuppresszió: dózisfüggő tesztoszteron-, LH- és FSH-csökkenés (Basaria-vizsgálatban 1 mg/nap-on Total T -23%, LH -47%, FSH -42%); magasabb UGL-dózisokon teljes szuppresszió, PCT szükséges.", "en": "HPTA suppression: dose-dependent drop in testosterone, LH and FSH (in the Basaria trial at 1 mg/day Total T -23%, LH -47%, FSH -42%); full suppression at higher UGL doses, PCT required.", "pl": "Supresja HPTA: zalezny od dawki spadek testosteronu, LH i FSH (w badaniu Basaria przy 1 mg/dobe Total T -23%, LH -47%, FSH -42%); pelna supresja przy wyzszych dawkach UGL, konieczny PCT." },
    { "hu": "Lipidprofil-romlás: HDL-koleszterin jelentős csökkenése (kb. 30-40%), kedvezőtlen kardiovaszkuláris kockázat hosszabb használat mellett.", "en": "Lipid profile worsening: marked decrease in HDL cholesterol (approx. 30-40%), unfavorable cardiovascular risk with prolonged use.", "pl": "Pogorszenie profilu lipidowego: wyrazny spadek cholesterolu HDL (okolo 30-40%), niekorzystne ryzyko sercowo-naczyniowe przy dluzszym stosowaniu." },
    { "hu": "Fertilitás-csökkenés: a HPTA-szuppresszió átmeneti spermiogenezis-gátlást és libidócsökkenést okozhat; teljes helyreállás 3-6 hónapot is igénybe vehet.", "en": "Reduced fertility: HPTA suppression can cause transient impaired spermatogenesis and lowered libido; full recovery may take 3-6 months.", "pl": "Obnizona plodnosc: supresja HPTA moze powodowac przejsciowe zaburzenie spermatogenezy i spadek libido; pelny powrot moze trwac 3-6 miesiecy." },
    { "hu": "Mérsékelt androgén mellékhatások: lehetséges aknésodás, hajzsírosodás és hangulati ingadozás; nőknél magasabb dózison virilizáció (hangmélyülés, hirsutismus) kockázata.", "en": "Mild androgenic effects: possible acne, oily skin and mood changes; in women at higher doses risk of virilization (voice deepening, hirsutism).", "pl": "Lagodne efekty androgenne: mozliwy tradzik, przetluszczanie skory i wahania nastroju; u kobiet przy wyzszych dawkach ryzyko wirylizacji (obnizenie glosu, hirsutyzm)." },
    { "hu": "Fejfájás, fáradtság és vízvisszatartás-érzet UGL-dózisokon (anekdotikus), bár LGD-4033 nem aromatizál, így valódi ösztrogén-eredetű ödéma nem jellemző.", "en": "Headache, fatigue and a sense of water retention at UGL doses (anecdotal), although LGD-4033 does not aromatize so true estrogen-driven edema is not typical.", "pl": "Bol glowy, zmeczenie i uczucie zatrzymania wody przy dawkach UGL (anegdotycznie), choc LGD-4033 nie aromatyzuje, wiec prawdziwy estrogenozalezny obrzek nie jest typowy." }
  ],
  "contraindications": [
    { "hu": "Meglévő máj-diszfunkció vagy emelt baseline ALT/AST: abszolút kontraindikáció a dokumentált DILI-kockázat miatt.", "en": "Pre-existing liver dysfunction or elevated baseline ALT/AST: absolute contraindication due to documented DILI risk.", "pl": "Istniejaca dysfunkcja watroby lub podwyzszone wyjsciowe ALT/AST: bezwzgledne przeciwwskazanie z powodu udokumentowanego ryzyka DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szerek (más orális SARM, 17-alfa-alkilált szteroid) használata: kumulatív májkárosodás.", "en": "Concurrent alcohol use or other hepatotoxic agents (other oral SARMs, 17-alpha-alkylated steroids): cumulative liver injury.", "pl": "Jednoczesne spozywanie alkoholu lub innych srodkow hepatotoksycznych (inne doustne SARM, sterydy 17-alfa-alkilowane): kumulacyjne uszkodzenie watroby." },
    { "hu": "Terhesség és szoptatás: az androgén-receptor-aktiváció magzati virilizációt és fejlődési ártalmat okozhat, használata tilos.", "en": "Pregnancy and breastfeeding: androgen receptor activation can cause fetal virilization and developmental harm, use is prohibited.", "pl": "Ciaza i karmienie piersia: aktywacja receptora androgenowego moze powodowac wirylizacje plodu i szkody rozwojowe, stosowanie zabronione." },
    { "hu": "Tervezett apaság vagy aktív fertilitási kívánság a közeli időhorizonton: a HPTA-szuppresszió átmeneti, de 3-6 hónapos helyreállással.", "en": "Planned fatherhood or active fertility goals in the near term: HPTA suppression is transient but with a 3-6 month recovery.", "pl": "Planowane ojcostwo lub aktywne dazenie do plodnosci w najblizszym czasie: supresja HPTA jest przejsciowa, ale z 3-6 miesiecznym powrotem." },
    { "hu": "Versenysport hatály alatt: WADA 2008 óta tiltott szer (S1.2), vizeletből 2-4 hétig kimutatható, dopping-szankciót von maga után.", "en": "Competitive sport under testing: WADA-banned since 2008 (S1.2), detectable in urine for 2-4 weeks, leads to doping sanctions.", "pl": "Sport wyczynowy objety kontrola: zakazany przez WADA od 2008 (S1.2), wykrywalny w moczu przez 2-4 tygodnie, prowadzi do sankcji dopingowych." },
    { "hu": "Diagnosztizált dyslipidaemia vagy fennálló kardiovaszkuláris betegség: a HDL-csökkenés tovább rontja a kockázati profilt.", "en": "Diagnosed dyslipidemia or existing cardiovascular disease: the HDL decrease further worsens the risk profile.", "pl": "Rozpoznana dyslipidemia lub istniejaca choroba sercowo-naczyniowa: spadek HDL dodatkowo pogarsza profil ryzyka." },
    { "hu": "Antikoaguláns (warfarin) szedése: enyhe antikoaguláns-potenciálás, fokozott INR-monitorozás nélkül kerülendő.", "en": "Anticoagulant (warfarin) therapy: mild anticoagulant potentiation, avoid without increased INR monitoring.", "pl": "Terapia antykoagulacyjna (warfaryna): lagodne nasilenie dzialania przeciwzakrzepowego, unikac bez zwiekszonego monitorowania INR." }
  ],
  "name": "LGD-4033 (Ligandrol)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Niesterydowy SARM, Ligand Pharmaceuticals 2007. Faza I u zdrowych męskich badanych (Basaria 2013 PMID 23413266) – wzrost lean mass zależny od dawki, umiarkowana supresja HPTA. Drugi najsłynniejszy SARM po RAD-140 na rynku kulturystyki. 2017-2020 przypadki hepatotoksyczności udokumentowane (Hilal 2020 PMID 32492288). Zakazany WADA S1.2.",
  "description": "LGD-4033 (Ligandrol, Anabolicum, VK-5211) to niesterydowy selektywny modulator receptora androgenowego (SARM) opracowany przez Ligand Pharmaceuticals w 2007 (Dalton 2011 PMID 21674508 SARM-class review). Strukturalnie pochodna pirolidynokarboksyamidu (NIE steryd), powinowactwo AR-binding ~50-70% poziomu testosteronu in vitro (Bhasin 2012 PMID 22573713). Rozwój kliniczny: Faza I 2012-2013 (Basaria 2013 PMID 23413266 – 76 zdrowych mężczyzn, 3 tygodnie, dose-escalation 0,1-1 mg/dzień): wzrost lean body mass zależny od dawki (średnia 1,21 kg przy 1 mg), umiarkowana supresja HPTA (Total T -23%, spadek LH/FSH), umiarkowany wzrost ALT/AST (~2x norma). Faza II 2014 badania zespołu zaniku mięśni (sarkopenia/kacheksja) (Viking Therapeutics, pod nazwą VK-5211) – wyniki były poniżej clinical-meaningfulness, rozwój kliniczny kontynuowany tylko we wskazaniach orphan. Na rynku kulturystyki drugi najsłynniejszy SARM (po RAD-140), marketing UGL pod etykietą 'łagodniejszy Test'. 2017-2020 udokumentowane raporty hepatotoksyczności (12+ znanych przypadków, Vilaca 2018 PMID 30171122 review): kilka z klinicznie istotnym ALT >10x normy + żółtaczka (Hilal 2020 PMID 32492288 – 47y mężczyzna na stack LGD + RAD-140 rozwijający piorunujące DILI). Zakazany WADA przez cały rok (S1.2 – inne środki anaboliczne), oficjalnie zabroniony od 2008.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Niesterydowy selektywny modulator AR (pirolidynokarboksyamid). Silny agonista AR w mięśniu, umiarkowana aktywność prostaty."},
    {"label": "Aktywność anaboliczna (Basaria 2013)", "value": "Wzrost lean mass zależny od dawki: 1,21 kg @ 1 mg/dzień, 3 tygodnie, zdrowi mężczyźni."},
    {"label": "Okres półtrwania", "value": "~24-36 h (doustnie)"},
    {"label": "Onset", "value": "1-2 tygodnie (anegdotyczny wzrost siły)"},
    {"label": "Status prawny", "value": "Nigdy nie był Rx. UGL 'research chemical'. Zakazany WADA S1.2 od 2008."}
  ],
  "mechanism": "LGD-4033 to niesterydowy SARM, struktura pirolidynokarboksyamidu. W tkance mięśniowej selektywny agonista AR – powinowactwo AR-binding ~50-70% poziomu testosteronu (Bhasin 2012 PMID 22573713 in vitro). Upregulation MyoD/myogenin → synteza białek mięśniowych. W tkance prostaty umiarkowana aktywność (~40% Test, mniejsza selektywność niż RAD-140). W tkance kostnej pozytywny efekt (aktywacja osteoblastów – Faza II badano też dla wskazania osteoporozy). NIE aromatyzuje → brak wzrostu E2 (Basaria 2013 – E2 nie wzrosło znacząco przy 1 mg). Supresja HPTA jest ZALEŻNA OD DAWKI: w Basaria 2013 przy 1 mg/dzień Total T -23%, LH -47%, FSH -42% po 3 tygodniach. Przy wyższych dawkach UGL (10-20 mg/dzień) oczekiwana pełna supresja HPTA. Mechanizm hepatotoksyczności: reakcyjny metabolit mediowany przez CYP3A4 (Solomon 2019 PMID 31077635 SARM-DILI review). Vilaca 2018 PMID 30171122 review udokumentował 12 przypadków hepatocellular injury związanych z LGD.",
  "legalStatus": "Nigdy nie zatwierdzony Rx. Ligand Pharmaceuticals licencjonowało go Viking Therapeutics w 2012 (pod nazwą VK-5211 dla wskazań orphan). USA: Schedule III analog w niektórych stanach (2018+). UE: brak Rx, na rynku UGL jako 'research chemical'. Zakazany WADA przez cały rok (S1.2 – inne środki anaboliczne) od 2008.",
  "onsetTime": "1-2 tygodnie (anegdotyczny wzrost siły). W Basaria 2013 PMID 23413266 Faza I: wzrost lean mass zależny od dawki mierzalny po 3 tygodniach.",
  "halfLife": "~24-36 h (doustnie)",
  "halfLifeActive": "~24-36 h",
  "interactionsWith": ["rad-140", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NIE – LGD-4033 niesterydowy, NIE substrat CYP19. E2 nie wzrasta (Basaria 2013 PMID 23413266 – E2 nie wzrosło znacząco przy 1 mg/dzień).",
  "hepatotoxicity": "**WYSOKA – 12+ udokumentowanych raportów hepatocellular injury (Vilaca 2018 PMID 30171122 SARM-DILI review). Hilal 2020 PMID 32492288 RAD+LGD stack piorunujące DILI po 9 tygodniach.** Wzrost ALT/AST już umiarkowany w Fazie I (~2x norma) przy dawce 1 mg/dzień; przy dawkach UGL (10-20 mg/dzień) cięższy. TUDCA + milk-thistle + miesięczne ALT/AST OBOWIĄZKOWE.",
  "wadaStatus": "banned",
  "androgenicRatio": "~70:40 (selektywność mięsień:prostata – mniejsza niż RAD-140, ale lepsza niż klasyczne AAS).",
  "bindingAffinity": "Niesterydowy SARM, powinowactwo AR-binding ~50-70% poziomu testosteronu in vitro. Selektywna konformacja tkankowa: silny agonista w mięśniu, umiarkowana aktywność prostaty.",
  "detectionWindow": "W moczu: 2-4 tygodnie metabolity LGD-4033 przez LC-MS/MS (akredytowane WADA). Bell 2011 – Will Grier 2015 LGD-pozytywny test, klasyczny przypadek precedensowy.",
  "benefits": [
    "Udokumentowany wzrost lean mass w badaniu klinicznym (Basaria 2013 PMID 23413266 – 1,21 kg w 3 tygodnie przy 1 mg)",
    "Umiarkowana selektywność mięsień > prostata",
    "NIE aromatyzuje → brak wzrostu E2",
    "Dobra biodostępność doustna (~50-60%)",
    "Długi okres półtrwania → dawkowanie raz dziennie"
  ],
  "quickStart": [
    "**HEPATOTOKSYCZNOŚĆ OBOWIĄZKOWE MONITOROWANIE**: 12+ udokumentowanych raportów DILI (Vilaca 2018). TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień + miesięczne ALT/AST OBOWIĄZKOWE",
    "Dawka: 5-10 mg/dzień, max 8 tygodni cyklu (Basaria 2013 Faza I capped at 1 mg max; anegdoty UGL 10-20 mg, ale ryzyko DILI rośnie proporcjonalnie)",
    "Supresja HPTA zależna od dawki, pełna przy dawkach UGL → PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe",
    "Zakazany WADA przez cały rok (2-4 tygodnie detekcja w moczu)",
    "Stack z innymi SARM NIE zalecany – kumulatywna hepatotoksyczność (Hilal 2020 RAD+LGD raport przypadku)"
  ],
  "expectations": [
    {"label": "Pierwsze 1-2 tygodnie", "body": "Anegdotyczny ostry wzrost siły (UGL). Znaczący w Basaria 2013 precedensie klinicznym po 3 tygodniach."},
    {"label": "Tydzień 4-6", "body": "Wzrost lean mass 2-4 kg (anegdoty UGL przy 5-10 mg/dzień), supresja HPTA się rozpoczyna (LH/FSH ~50% supresja). Wzrost ALT/AST (~2-3x norma) możliwy."},
    {"label": "Koniec tygodnia 8", "body": "Maksymalny efekt w kontekście UGL (3-5 kg lean mass), pełna supresja HPTA, planowanie PCT. Monitor wątrobowy krytyczny."}
  ],
  "quality": {
    "pure": [
      "UGL LGD-4033 kapsułka 5-10 mg na kaps – HPLC-testowane źródło OBOWIĄZKOWE",
      "Zawiesina płynna 10 mg/ml UGL (precyzyjne dawkowanie)",
      "Wszystko UGL – brak formatu Rx"
    ],
    "caution": [
      "**Hepatotoksyczność – 12+ udokumentowanych raportów DILI (Vilaca 2018 PMID 30171122 review)**",
      "Pełna supresja HPTA przy dawkach UGL",
      "Zaburzenia lipidowe (spadek HDL ~30-40%)",
      "PCT 4-6 tygodni OBOWIĄZKOWE",
      "Stack z innymi SARM kumulatywne ryzyko DILI"
    ],
    "avoid": [
      "Dysfunkcja wątroby (ALT/AST już podwyższone) – ABSOLUTNE przeciwwskazanie",
      "Spożycie alkoholu",
      "Planowane ojcostwo w bliskim horyzoncie czasowym (supresja HPTA + odzyskanie 3-6 miesięcy)",
      "Stosowanie u kobiet w wysokich dawkach (wirylizacja)",
      "Równoczesny stack SARM"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień: ochrona wątroby OBOWIĄZKOWA",
    "Inne SARMs (RAD-140, Ostarine, S23): NIE zalecane – kumulatywna hepatotoksyczność (Hilal 2020 raport przypadku)",
    "Warfaryna: łagodne wzmocnienie antykoagulacyjne",
    "PCT: Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni"
  ],
  "studies": [
    {"title": "The safety, pharmacokinetics, and effects of LGD-4033, a novel nonsteroidal oral, selective androgen receptor modulator, in healthy young men.", "authors": "Basaria S, Collins L, Dillon EL, Orwoll K, Storer TW, Miciek R, Ulloor J, Zhang A, Eder R, Zientek H, Gordon G, Kazmi S, Sheffield-Moore M, Bhasin S", "journal": "J Gerontol A Biol Sci Med Sci", "pmid": "22459616"},
    {"title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.", "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A", "journal": "Eur J Clin Pharmacol", "pmid": "38059982"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "Drug-induced liver injury from selective androgen receptor modulators, anabolic-androgenic steroids and bodybuilding supplements in Australia.", "authors": "Nash E, Nicoll A, Batt N, Iser D, Sood S", "journal": "Intern Med J", "pmid": "38372012"}
  ],
  "faq": [
    {"q": "Jaki jest wynik Basaria 2013 Faza I?", "a": "Basaria 2013 PMID 23413266: 76 zdrowych mężczyzn, 3 tygodnie, dose-escalation 0,1 / 0,3 / 1 mg/dzień doustnie LGD-4033 vs placebo. Wyniki: (1) wzrost lean body mass zależny od dawki: 0,75 kg @ 0,3 mg, **1,21 kg @ 1 mg** (placebo +0,18 kg); (2) HPTA: Total T -23%, LH -47%, FSH -42% przy 1 mg; (3) Wątrobowy: umiarkowany wzrost ALT przy 1 mg (~2x norma vs baseline); (4) Lipidowy: umiarkowany spadek HDL. **Krytyczne**: badanie kliniczne capped at 1 mg/dzień; kontekst UGL kulturystyki pracuje przy dawkach 10-20 mg/dzień (10-20x klinicznie testowane), gdzie ryzyko DILI eskaluje (Vilaca 2018 raporty przypadków). Dawka kliniczna precedensowa ≠ dawka kontekstu UGL kulturystyki."},
    {"q": "LGD-4033 vs RAD-140 – porównanie?", "a": "Oba niesterydowe SARMy, podobne ryzyko hepatotoksyczności (RAD-140 6, LGD 12 udokumentowanych raportów DILI). Różnice: (1) powinowactwo AR-binding: RAD-140 ~80%, LGD ~50-70% – RAD silniejszy in vitro; (2) Selektywność: RAD lepiej-selektywny mięsień > prostata, LGD bardziej umiarkowany; (3) Precedens badania klinicznego: LGD ma Fazę I u zdrowych mężczyzn (Basaria 2013), RAD-140 tylko cachexia Faza II (Flores 2020); (4) Profil wątrobowy: LGD łagodniejszy (Faza I 2x ALT przy 1 mg), RAD silniej hepatotoksyczny przy wysokich dawkach (Hilal 2020 piorunujące przy 30 mg). UGL anegdotyczne: RAD 'silniejszy' (większy wzrost mięśni), LGD 'łagodniejszy' (mniejsza supresja HPTA + skutki uboczne)."},
    {"q": "Badanie kliniczne 1 mg vs UGL 10-20 mg – bezpieczne?", "a": "NIE zwalidowane klinicznie. Basaria 2013 Faza I testowała wskazania kliniczne przy 1 mg/dzień (osiągalny wzrost lean mass z baseline'u zdrowego). Kontekst UGL kulturystyki pracuje przy 10-20 mg/dzień – to 10-20x dawka kliniczna. W Vilaca 2018 PMID 30171122 SARM-DILI review 12 przypadków hepatocellular injury związanych z LGD WSZYSTKIE wydarzyły się przy wysokich dawkach UGL (5-20 mg/dzień). Precedens kliniczny NIE jest ekstrapolowany na dawkę UGL dla bezpieczeństwa. Jeśli używasz LGD: 5 mg/dzień to skromna dawka początkowa, max 10 mg/dzień, max 8 tygodni, obowiązkowe TUDCA + miesięczne ALT/AST."},
    {"q": "Detekcja WADA dla LGD-4033?", "a": "WADA zakazało SARMów od 2008 (S1.2 – inne środki anaboliczne). Detekcja LGD-4033 w moczu: 2-4 tygodnie przez LC-MS/MS (akredytowane WADA). Klasyczny przypadek precedensowy: 2015 Will Grier (Florida Gators QB, później NFL) LGD-pozytywny test, roczna suspensja. Wielu sportowców było LGD-pozytywnych w testach przygotowawczych Igrzysk Tokio 2020. Współczesna czułość detekcji jest wysoka – dla sportowców wyczynowych ABSOLUTNIE do unikania."}
  ],
  "related": ["rad-140", "ostarine", "yk-11", "s23"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 5, "medium": 7.5, "high": 10},
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "5-10 mg/dzień, max 8 tygodni cyklu. Faza I kliniczna capped at 1 mg – kontekst UGL 10x tyle, ryzyko DILI proporcjonalne. TUDCA + milk-thistle OBOWIĄZKOWE. PCT 4-6 tygodni. Stack z innymi SARM NIE zalecany."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Pełny panel wątrobowy (ALT/AST/GGT/ALP/bilirubina/albumina), lipidogram, panel hormonalny (Total T/Free T/E2/LH/FSH/SHBG/prolaktyna).",
      "purpose": "Baseline wątrobowy KRYTYCZNY – już podwyższone ALT/AST → PRZECIWWSKAZANIE."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tygodnie 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x norma → NATYCHMIASTOWE odstawienie), lipidowy, hormon (monitor supresji HPTA).",
      "purpose": "Monitor wątrobowy KRYTYCZNY. SARM-DILI szybka progresja (Vilaca 2018 review)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia dawka +3-5 dni start PCT (Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni)",
      "markers": "Normalizacja wątrobowa, hormon (odzyskanie HPTA), odzyskanie lipidów.",
      "purpose": "Weryfikacja odzyskania HPTA + wątrobowej. Pełne odzyskanie 3-6 miesięcy."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "LGD-4033 cruise NIE standard",
      "markers": "N/A",
      "purpose": "Tylko użycie cykliczne; cruise NIE zalecany."
    }
  }
}
