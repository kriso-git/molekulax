// Mirabegron (Myrbetriq) — Astellas Pharma 2012 selektywny agonista β3 zatwierdzony
// przez FDA dla OAB. Aktywacja BAT umożliwia termogeniczne off-label użycie do
// utraty tłuszczu od Cypess 2015. Źródła: FDA Myrbetriq SmPC, Khullar 2013
// PMID 23537815, Cypess 2015 PMID 25437872, Loh 2019 PMID 31263458,
// Finlin 2020 PMID 32119651.

export default {
  "id": "mirabegron",
  "name": "Mirabegron (Myrbetriq)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Astellas Pharma 2012 zatwierdzony przez FDA selektywny agonista receptora β3-adrenergicznego (Myrbetriq), pierwotnie Rx dla pęcherza nadreaktywnego (OAB). Od czasu badania Cypess 2015 nad aktywacją BAT używany off-label jako termogeniczne narzędzie utraty tłuszczu: +5-10% BMR przy aktywnej objętości brunatnej tkanki tłuszczowej.",
  "description": "Mirabegron (Myrbetriq) to pierwszy w swojej klasie selektywny agonista receptora β3-adrenergicznego opracowany przez Astellas Pharma i zatwierdzony przez FDA w 2012 r. do leczenia objawowego pęcherza nadreaktywnego (OAB). Specyficzna ekspresja tkankowa receptora β3 decyduje o znaczeniu klinicznym: w mięśniach gładkich detrusora pośredniczy w rozluźnieniu pęcherza (kliniczne wskazanie OAB), a w brunatnej tkance tłuszczowej (BAT, brown adipose tissue) wyzwala aktywację termogeniczną zależną od UCP1, umożliwiając off-label użycie do utraty tłuszczu. Cypess 2015 Cell Metabolism PMID 25437872 było pierwszym badaniem na ludziach, które wykazało znaczącą aktywację BAT po pojedynczej dawce doustnej 200 mg u zdrowych dorosłych (pomiar PET-CT 18F-FDG). Loh 2019 PMID 31263458 i Finlin 2020 J Clin Invest PMID 32119651 dalej walidowały podwyższenie tempa metabolicznego przy dawkowaniu przewlekłym + indukcję browning trzewnej białej tkanki tłuszczowej. Kliniczne dawkowanie OAB wynosi 25-50 mg/dzień; off-label protokoły utraty tłuszczu zwykle stosują 75-100 mg/dzień. Aktualizacja black-box FDA z 2018 r. ostrzega pacjentów z istniejącą chorobą sercowo-naczyniową po klastrach przypadków ciężkiego nadciśnienia + tachykardii post-marketingowo. WADA nie wymienia go jako jawnie zakazanego, ale kilka federacji krajowych klasyfikuje go jako monitorowany.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Selektywny agonista receptora β3-adrenergicznego (detrusor + indukcja UCP1 w BAT)"
    },
    {
      "label": "Dawkowanie",
      "value": "Kliniczne OAB 25-50 mg/dzień; off-label utrata tłuszczu 75-100 mg/dzień PO rano"
    },
    {
      "label": "Okres półtrwania",
      "value": "~50 godzin (dawkowanie raz dziennie optymalne)"
    },
    {
      "label": "Czas początku działania",
      "value": "Detrusor 2-4 h; aktywacja BAT przy dawkowaniu przewlekłym 2-4 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (OAB), HU + PL zarejestrowany. WADA: nie wymieniony jako jawnie zakazany, monitorowany przez niektóre federacje krajowe."
    }
  ],
  "mechanism": "Mirabegron jest selektywnym agonistą receptora β3-adrenergicznego (β3-AR), receptora sprzężonego z białkiem G, którego ekspresja tkankowa czyni trzy miejsca farmakologicznie istotnymi: mięśnie gładkie detrusora (rozluźnienie pęcherza), brunatna tkanka tłuszczowa (aktywacja termogeniczna zależna od UCP1) i trzewna biała tkanka tłuszczowa (indukcja browning). Wewnątrzkomórkowa kaskada jest standardowa dla receptora β: β3 → białko Gs → cyklaza adenylowa → cAMP → PKA → fosforylacja CREB → upregulacja transkrypcji genu UCP1. Aktywacja BAT jest bezpośrednio termogeniczna: UCP1, kanał protonowy wewnętrznej błony mitochondrialnej, rozprasza gradient protonowy jako ciepło, omijając syntezę ATP. Przeciętny dorosły mężczyzna ma około 40-50 g aktywnego BAT (spadek zależny od stylu życia + wieku), indukowalny ekspozycją na zimno. Przewlekłe dawkowanie Mirabegronu (>4 tygodnie, 50-100 mg/dzień) zwiększa objętość BAT o +30-50% mierzone PET-CT 18F-FDG (Loh 2019). Spillover receptora β1/β2 jest minimalny (selektywność >50x dla β3), więc ryzyko kardiotoksycznej tachykardii jest niższe niż przy Clenbuterolu; natomiast ryzyko nadciśnienia jest DOMINUJĄCE, ponieważ receptor β3 uczestniczy także w regulacji napięcia naczyniowego tętnic obwodowych.",
  "legalStatus": "USA: zatwierdzony przez FDA 2012 (Myrbetriq, Astellas Pharma) do leczenia objawowego OAB; Schedule N/A (niekontrolowany). Aktualizacja black-box FDA 2018 po klastrach przypadków ciężkiego nadciśnienia + tachykardii. UE: zatwierdzony przez EMA (Betmiga). HU: zarejestrowany (Betmiga Rx). PL: zarejestrowany (Betmiga Rx). WADA: nie wymieniony jako jawnie zakazany (agonista β3 nie figuruje na liście stymulantów S6 ani agonistów β2 S3), ALE federacje krajowe umieściły go w kategorii monitorowanej — procedura TUE zalecana z istniejącą diagnozą OAB-Rx.",
  "onsetTime": "Detrusor 2-4 h; aktywacja BAT przy dawkowaniu przewlekłym 2-4 tygodnie",
  "halfLife": "~50 godzin",
  "interactionsWith": [
    "metoprolol",
    "desipramine",
    "albuterol",
    "ephedrine",
    "clenbuterol"
  ],
  "aromatization": "Nie aromatyzuje (nie jest sterydem — selektywny agonista receptora β3-adrenergicznego). Brak interakcji z CYP19; oś estrogenowa pozostaje nienaruszona.",
  "hepatotoxicity": "Niska — DILI rzadkie, podwyższenie ALT <2% udokumentowane w badaniach klinicznych (Khullar 2013 OAB-RCT PMID 23537815). Metabolizm CYP2D6 + CYP3A4 stwarza ryzyko interakcji lekowej z metoprololem i desipraminą (Mirabegron jest substratem-inhibitorem CYP2D6, podnosi poziom plazmatyczny).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/D (nie jest AAS)",
  "bindingAffinity": "Receptor β3-adrenergiczny Ki ~5-10 nM; receptor β1/β2 powinowactwo >50x niższe (indeks selektywności wg dokumentacji Astellas FDA-submission).",
  "detectionWindow": "Akredytowane przez WADA wykrywanie LC-MS/MS w moczu ~3-5 dni (Mirabegron + metabolit N-dealkilo-Mirabegron). Progi monitorowania w federacjach krajowych różnią się.",
  "benefits": [
    "Aktywacja termogeniczna BAT (+5-10% BMR przy aktywnej objętości BAT, Cypess 2015 PMID 25437872)",
    "Indukcja browning trzewnej tkanki tłuszczowej (Finlin 2020 J Clin Invest PMID 32119651)",
    "Kliniczne OAB-Rx oparte na bogatych danych (13 lat literatury PMID od zatwierdzenia FDA 2012)",
    "Spillover receptora β1/β2 minimalny (selektywność >50x), ryzyko kardiotoksycznej tachykardii niższe niż przy Clenbuterolu",
    "Dawkowanie doustne raz dziennie (~50 h t1/2)",
    "Wzrost insulinowrażliwości obok aktywacji trzewnej BAT (Loh 2019 PMID 31263458)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: Mirabegron FDA-Rx wskazanie OAB + off-label użycie termogeniczne do utraty tłuszczu",
    "Kliniczne dawkowanie OAB 25-50 mg/dzień (niska titracja); off-label utrata tłuszczu 75-100 mg/dzień PO rano",
    "Aktywacja BAT przy dawkowaniu przewlekłym (4+ tygodnie) → +5-10% BMR przy aktywnej objętości BAT",
    "Pre-cycle home-tracking BP baseline (FDA 2018 black-box ryzyko nadciśnienia)",
    "EKG baseline + kontrola 4-tygodniowa (HR spoczynkowe + monitoring QTc)",
    "Przeciwwskazany przy przewlekłej terapii β-blokerami (zaburzenie selektywności β3)",
    "Długość cyklu 8-12 tygodni MAX, następnie 2-4 tygodnie OFF (tachyfilaksja receptora β3)"
  ],
  "expectations": [
    {
      "label": "Tydzień 1-2",
      "body": "Efekt rozluźnienia detrusora odczuwalny (poprawa objawów OAB jeśli obecne). Aktywacja BAT zaczyna się na poziomie wykrywalnym PET-CT, ale brak odczuwalnego wzrostu BMR."
    },
    {
      "label": "Tydzień 3-4",
      "body": "Wzrost objętości BAT mierzalny PET-CT (+20-30%). Łagodny wzrost HR spoczynkowego (+3-7 bpm). Subiektywna utrata tłuszczu jeszcze tylko +0,1-0,3 kg/tydzień powyżej placebo."
    },
    {
      "label": "Tydzień 8-12",
      "body": "Aktywacja BAT w stanie stacjonarnym. Tempo utraty tłuszczu +0,3-0,5 kg/tydzień przy aktywnej objętości BAT (0-0,2 kg/tydzień u osób z niskim BAT-baseline). Zalecane zakończenie cyklu z 2-4 tygodniami OFF z powodu tachyfilaksji β3."
    }
  ],
  "quality": {
    "pure": [
      "Tabletki Myrbetriq zatwierdzone przez FDA (Astellas Pharma) lub EMA Betmiga — apteczne źródło gwarantuje zawartość substancji czynnej",
      "Generyczny zamiennik Mirabegronu oczekiwany po wygaśnięciu patentu 2027; obecnie globalnie tylko brand"
    ],
    "caution": [
      "Home-tracking BP 2x/dzień (FDA 2018 black-box ryzyko nadciśnienia, klastry przypadków ciężkiego nadciśnienia + tachykardii post-marketingowo)",
      "EKG baseline + kontrola 4-tygodniowa (HR spoczynkowe + monitoring wydłużenia QTc)",
      "Metabolizm CYP2D6 + CYP3A4 — interakcja z SSRI fluoksetyną / paroksetyną (podnoszą poziom plazmatyczny)",
      "Korekta dawki metoprololu + desipraminy konieczna przy Mirabegronie",
      "Tachyfilaksja po 8-12 tygodniach — zalecane 2-4 tygodnie cycle-off",
      "Bezsenność, lęk to niskoczęstotliwościowe skutki uboczne"
    ],
    "avoid": [
      "Ciężkie nadciśnienie (>180/110 mmHg) — bezwzględne przeciwwskazanie",
      "Istniejąca tachyarytmia, kardiomiopatia — bezwzględne przeciwwskazanie",
      "Przewlekła terapia β-blokerem (metoprolol, propranolol) — udokumentowane zaburzenie selektywności β3",
      "Ciąża i laktacja (kategoria ciążowa FDA C)",
      "Pheochromocytoma — bezwzględne przeciwwskazanie (ryzyko burzy katecholaminowej)",
      "Historia udaru (przeciwwskazanie względne, indywidualna ocena ryzyka)"
    ]
  },
  "interactions": [
    "Metoprolol + propranolol (β-blokery) — przeciwwskazane, zaburzenie selektywności β3 udokumentowane w badaniach klinicznych",
    "Fluoksetyna + paroksetyna (SSRI inhibitory CYP2D6) — wzrost poziomu plazmatycznego Mirabegronu 2-3x",
    "Desipramina + amitryptylina (TCA) — Mirabegron substrat-inhibitor CYP2D6, łączna kombinacja daje wyższy poziom plazmatyczny i ryzyko wydłużenia QTc",
    "Albuterol + efedryna + klenbuterol — addytywny stres kardio, wysokie HR + BP, zalecane unikanie",
    "Kofeina + teobromina — synergistyczny efekt sympatomimetyczny, wyższy wzrost BP",
    "Digoksyna — Mirabegron wzrost poziomu plazmatycznego digoksyny zależny od CYP3A4, wymagany monitoring EKG"
  ],
  "studies": [
    {
      "title": "Efficacy and tolerability of mirabegron, a β(3)-adrenoceptor agonist, in patients with overactive bladder: results from a randomised European-Australian phase 3 trial",
      "authors": "Khullar V, Amarenco G, Angulo JC et al.",
      "journal": "Eur Urol. 2013;63(2):283-295.",
      "pmid": "23537815"
    },
    {
      "title": "Activation of human brown adipose tissue by a β3-adrenergic receptor agonist",
      "authors": "Cypess AM, Weiner LS, Roberts-Toler C et al.",
      "journal": "Cell Metab. 2015;21(1):33-38.",
      "pmid": "25437872"
    },
    {
      "title": "Acute metabolic responses to mirabegron in young adult women",
      "authors": "Loh RKC, Formosa MF, La Gerche A et al.",
      "journal": "Front Endocrinol (Lausanne). 2019;10:402.",
      "pmid": "31263458"
    },
    {
      "title": "The β3-adrenergic receptor agonist mirabegron improves glucose homeostasis in obese humans",
      "authors": "Finlin BS, Memetimin H, Zhu B et al.",
      "journal": "J Clin Invest. 2020;130(5):2319-2331.",
      "pmid": "32119651"
    },
    {
      "title": "Anatomical localization, gene expression profiling and functional characterization of adult human neck brown fat",
      "authors": "Cypess AM, White AP, Vernochet C et al.",
      "journal": "Nat Med. 2013;19(5):635-639.",
      "pmid": "23603815"
    },
    {
      "title": "Cardiovascular safety of mirabegron: analysis of an integrated clinical trial database of patients with overactive bladder syndrome",
      "authors": "Rosa GM, Ferrero S, Nitti VW et al.",
      "journal": "J Manag Care Spec Pharm. 2016;22(4):448-458.",
      "pmid": "27023695"
    }
  ],
  "faq": [
    {
      "q": "Mirabegron vs Clenbuterol — który jest bezpieczniejszy do utraty tłuszczu?",
      "a": "Selektywność β3 Mirabegronu (>50x nad β1/β2) minimalizuje spillover kardio-receptorowy, więc ryzyko klenbuterolowej przewlekłej tachykardii + przerostu mięśnia sercowego jest niższe. Jednak ryzyko nadciśnienia Mirabegronu jest DOMINUJĄCE (aktualizacja black-box FDA 2018 po klastrach przypadków ciężkiego nadciśnienia + tachykardii post-marketingowo). Oba wymagają monitoringu BP + EKG. Akumulacja Clenbuterolu (~35-40 h t1/2) jest mniej przewidywalna; raz dzienne Mirabegron (~50 h t1/2) ułatwia titrację dawki w stanie stacjonarnym."
    },
    {
      "q": "Jakiego wzrostu BMR można oczekiwać przy aktywacji BAT?",
      "a": "5-10% przy przeciętnej objętości BAT (40-50 g aktywnej BAT, Cypess 2013 Nat Med PMID 23603815). U osób z niskim BAT-baseline (nieindukowani ekspozycją na zimno, starsi, BMI>30 — wszystko redukuje objętość BAT), 0-3%. Cypess 2015 Cell Metab PMID 25437872 wykazał akutną aktywację BAT przy pojedynczej dawce 200 mg; dawkowanie przewlekłe (4+ tygodnie) wg Finlin 2020 PMID 32119651 dało +30-50% wzrost objętości BAT na PET-CT 18F-FDG."
    },
    {
      "q": "Czy ryzyko kryzysu nadciśnieniowego jest realne?",
      "a": "Tak — aktualizacja black-box FDA 2018 była regulacyjnym mandatem po klastrach przypadków ciężkiego nadciśnienia + tachykardii. W badaniach klinicznych (Khullar 2013, ~13 000 pacjentów) zwiększona częstość BP ~5%, ciężkie zdarzenia ~1%. Istniejące nadciśnienie (>140/90 mmHg) baseline jest przeciwwskazaniem do Mirabegronu. Home-tracking BP 2x/dzień (rano + wieczór) przez pierwsze 4 tygodnie + miesięczne kontrole przy dawkowaniu przewlekłym to minimalny protokół."
    },
    {
      "q": "Które interakcje lekowe są niebezpieczne?",
      "a": "Inhibitory CYP2D6 SSRI (fluoksetyna, paroksetyna) + TCA (desipramina, amitryptylina) podnoszą poziom plazmatyczny 2-3x. Przewlekła terapia β-blokerem (metoprolol, propranolol) w połączeniu z Mirabegronem ma udokumentowane zaburzenie selektywności β3. Albuterol + efedryna + klenbuterol tworzą addytywny stres kardio. Digoksyna ma wzrost poziomu plazmatycznego zależny od CYP3A4 (wymagany monitoring EKG). Pheochromocytoma jest bezwzględnym przeciwwskazaniem."
    },
    {
      "q": "Rekomendacja długości cyklu + cycle-off?",
      "a": "8-12 tygodni MAX długość cyklu, następnie 2-4 tygodnie OFF z powodu tachyfilaksji receptora β3 (przewlekła ekspozycja agonistyczna obniża gęstość receptorów). Przy długoterminowym ciągłym OAB Rx (>1 rok) częstość tachyfilaksji ~15-20%, wymuszając kliniczną eskalację dawki. W kontekście utraty tłuszczu cykl 8-12 tygodni jest wystarczający dla maksymalnego efektu aktywacji BAT; dłuższe ciągłe użycie daje malejące korzyści."
    }
  ],
  "related": [
    "albuterol",
    "ephedrine",
    "clenbuterol",
    "l-carnitine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 100
    },
    "unit": "mg/dzień",
    "note": "Kliniczne OAB-Rx 25-50 mg/dzień (niska titracja). Kontekst off-label utraty tłuszczu używa 75-100 mg/dzień PO rano (zakres dawek aktywacji BAT wg badań Cypess 2015 + Loh 2019). Dawkowanie raz dziennie optymalne ze względu na ~50 h t1/2. Długość cyklu 8-12 tygodni MAX, następnie 2-4 tygodnie OFF z powodu tachyfilaksji β3. Home-tracking BP + EKG baseline + kontrola 4-tygodniowa obowiązkowe od aktualizacji black-box FDA 2018."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed rozpoczęciem cyklu",
      "markers": "Baseline ciśnienia krwi (home-tracking rano+wieczór średnia 7-dniowa), HR spoczynkowe, 12-odprowadzeniowe EKG (QTc + rytm), panel lipidowy (TC/LDL/HDL/TG), genotypowanie CYP2D6 jeśli kombinacja SSRI/TCA",
      "purpose": "Ocena baseline sercowo-naczyniowego, screening ryzyka nadciśnienia + wydłużenia QTc (mandat black-box FDA 2018)"
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "2 + 4 + 8 tygodni po rozpoczęciu cyklu",
      "markers": "Ciśnienie krwi 2x/dzień home-tracking średnia tygodniowa, HR spoczynkowe tygodniowo, EKG kontrola 4-tygodniowa + 8-tygodniowa (monitoring QTc), panel lipidowy w 8. tygodniu",
      "purpose": "Wczesne wykrycie pojawiającego się nadciśnienia lub sygnału wydłużenia QTc; sygnał tachyfilaksji do wymogu eskalacji dawki"
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "2 + 4 tygodnie po zakończeniu cyklu",
      "markers": "BP + HR home-tracking, EKG (potwierdzenie normalizacji QTc), sygnał odbudowy receptora (objętość BAT opcjonalnie PET-CT w kontekście badawczym)",
      "purpose": "Weryfikacja odbudowy receptora β3 + przywrócenia baseline sercowo-naczyniowego przed rozpoczęciem nowego cyklu"
    }
  }
}
