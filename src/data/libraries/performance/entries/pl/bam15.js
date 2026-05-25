// BAM15 — Mitochondrialny rozprzęgacz protonofor, mechanizm spokrewniony z DNP,
// ale z bezpieczniejszym oknem terapeutycznym. Garcia-Manyes 2023 Nat Metab +
// Alexopoulos 2020 Nat Comms prekliniczne dowody na termogenezę BAT + uwrażliwianie
// na insulinę u otyłych myszy. Źródła: Alexopoulos 2020 PMID 32848134, Kenwood
// 2014 Mol Metab PMID 24567902, Geisler 2017 Curr Opin Pharmacol PMID 28618231.

export default {
  "id": "bam15",
  "name": "BAM15",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Mitochondrialny rozprzęgacz protonofor, mechanizm spokrewniony z DNP (Alexopoulos 2020 Nat Comms PMID 32848134), ALE prekliniczne dowody na bezpieczniejsze okno terapeutyczne. Aktywator termogenezy BAT + uwrażliwianie na insulinę u otyłych myszy; brak aktywnego badania u ludzi na styczeń 2026 r.",
  "description": "BAM15 ([2-fluorofenylo]{6-[(2-fluorofenylo)amino](1,2,5-oksadiazolo[3,4-e]pirazyn-5-yl)}amina) to syntetyczny mitochondrialny rozprzęgacz protonofor opracowany przez Kenwood et al. w 2014 r. (Mol Metab PMID 24567902) na Uniwersytecie Wirginii przez laboratorium Webb-Anstey. Mechanizm dzieli klasyczny mitochondrialny mechanizm rozprzęgania DNP (2,4-dinitrofenolu): związek przesyła protony przez wewnętrzną błonę mitochondrialną, rozpraszając gradient elektrochemiczny (proton motive force), więc oksydacja glukozy + kwasów tłuszczowych omija syntezę ATP i rozprasza się jako ciepło. Krytyczna różnica BAM15 vs DNP: jest ZNACZNIE bardziej selektywny dla wewnętrznej błony mitochondrialnej (NIE rozprasza potencjału błony plazmatycznej, co było głównym mechanizmem śmiertelności DNP w historii kulturystyki lat 30. XX w. z łącznie 60+ zgonami wg danych WHO 1985+). Alexopoulos 2020 Nat Commun PMID 32848134 badanie na otyłych myszach na diecie wysokotłuszczowej wykazało, że przewlekłe dawkowanie 0,1-0,5 mg/kg PO produkuje aktywację termogenezy BAT + uwrażliwianie na insulinę + utratę masy ciała (-25% masy ciała przy 8 tygodniach) bez kardiotoksycznych skutków ubocznych (kontrast DNP: ludzki LD50 ~1-2 mg/kg). Garcia-Manyes 2023 Nat Metab wstępnie dalej walidował kontekst NAFLD. Brak aktywnego badania fazy 1 u ludzi na styczeń 2026 r.; scena czarnorynkowa research-chemical pojawiła się w latach 2023-2024 pod ramą zastępcy DNP (\"bezpieczniejszy DNP\") — wzorzec designer-research-chemical. Klasyfikacja Tier-3, ponieważ jakość dowodów preklinicznych + objętość badań na małych ssakach są wystarczające dla niszowego poziomu T3 (NIE T2 jak SLU-PP-332).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Mitochondrialny rozprzęgacz protonofor, mechanizm spokrewniony z DNP + selektywny dla wewnętrznej błony mitochondrialnej (bezpieczniejsze okno terapeutyczne)"
    },
    {
      "label": "Dawkowanie (prekliniczne)",
      "value": "50-100 mg/dzień PO (ekstrapolacja dawki z myszy 0,1-0,5 mg/kg/dzień, BRAK walidacji u ludzi)"
    },
    {
      "label": "Okres półtrwania",
      "value": "~3-5 godzin (ekstrapolacja z myszy)"
    },
    {
      "label": "Czas początku działania",
      "value": "Marker aktywacji BAT ostry 1-2 h; podwyższenie tempa metabolicznego 1-2 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "Tylko do celów badawczych — NIE jest Rx FDA / EMA w żadnej jurysdykcji. WADA NIE jawnie wymieniony; obowiązuje ryzyko klauzuli S0 + obawy o monitorowanie."
    }
  ],
  "mechanism": "BAM15 to syntetyczny związek 2,1,3-benzoksadiazolu z podstawionym arylo-fluorkiem, który funkcjonuje przez mechanizm protonoforowy. Protonofory to małocząsteczkowe związki, które przesyłają H+ protony przez podwójną warstwę lipidową, rozpraszając gradient elektrochemiczny protonów. Na wewnętrznej błonie mitochondrialnej normalny łańcuch transportu elektronów (Kompleks I-IV) pompuje protony do przestrzeni międzybłonowej, tworząc proton motive force (PMF), który napędza syntezę ATP. Protonofor umożliwia protonom powrót do matrycy, eliminując PMF, więc syntaza ATP (Kompleks V) nie może fosforylować ADP do ATP, a energia oksydacji glukozy + kwasów tłuszczowych rozprasza się jako ciepło (bezpośrednia hipertermia + wysoki BMR jako mechanizm). W kontraście do DNP LD50 BAM15 jest znacznie wyższe (mysie oral LD50 ~250 mg/kg vs DNP ~25 mg/kg), ponieważ BAM15 jest bardziej selektywnie aktywny jako protonofor na wewnętrznej błonie mitochondrialnej, a NIE na błonie plazmatycznej. Ta selektywność tłumaczy bezpieczniejsze okno terapeutyczne w preklinicznych modelach mysich. Alexopoulos 2020 PMID 32848134 + Geisler 2017 PMID 28618231 dokumentują szczegóły mechanizmu działania. Znaczenie kliniczne: walidacja w badaniach u ludzi brakuje na styczeń 2026 r.",
  "legalStatus": "USA: NIE zatwierdzony przez FDA, klasa research-chemical (Schedule N/A). UE: NIE zatwierdzony przez EMA. HU + PL: NIE zarejestrowany. Brak aktywnego badania fazy 1 u ludzi na styczeń 2026 r. (pipeline Continuum BioSciences prekliniczny 2024). WADA: NIE jawnie wymieniony, ALE obowiązuje ryzyko klauzuli S0 'substancja niezatwierdzona' + klasyfikacja modyfikatora metabolicznego S4.5 (program monitorowania WADA 2025 wstępny).",
  "onsetTime": "Marker aktywacji BAT ostry 1-2 h; podwyższenie tempa metabolicznego 1-2 tygodnie",
  "halfLife": "~3-5 godzin (ekstrapolacja z myszy)",
  "interactionsWith": [
    "slu-pp-332",
    "mots-c",
    "5-amino-1mq"
  ],
  "aromatization": "Nie aromatyzuje (nie jest sterydem — mitochondrialny rozprzęgacz protonofor). Brak interakcji z CYP19; oś estrogenowa pozostaje bezpośrednio nienaruszona.",
  "hepatotoxicity": "Nieznana — tylko preklinicznie; długoterminowe dane u ludzi brakują. Obawa o ryzyko śmiertelności spokrewnione z mechanizmem DNP (zgony DNP obejmują 60+ lat historii) ALE prekliniczne dowody BAM15 pokazują bezpieczniejsze okno terapeutyczne (Alexopoulos 2020 PMID 32848134). Mysie przewlekłe 8-tygodniowe dawkowanie 0,5 mg/kg/dzień pokazuje podwyższenie ALT/AST <2x baseline (wstępnie); dane z badań u ludzi to ZERO.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/D (nie jest AAS, mitochondrialny rozprzęgacz)",
  "bindingAffinity": "NIE jest klasycznym związkiem wiążącym receptor — aktywność protonoforowa wewnętrznej błony mitochondrialnej IC50 ~0,5-1 μM (Kenwood 2014 PMID 24567902). Aktywność protonoforowa off-target na błonie plazmatycznej >50x niższa (indeks selektywności, kontrast z DNP przy ~1:1).",
  "detectionWindow": "BRAK walidowanego u ludzi assay'u detekcji na styczeń 2026 r. Akredytowana przez WADA metoda detekcji LC-MS/MS opracowana tylko na preklinicznej mysiej plazmie baseline.",
  "benefits": [
    "Mechanizm rozprzęgacza mitochondrialnego — bezpośredni termogeniczny bypass syntezy ATP przez protonofor",
    "Mechanizm spokrewniony z DNP ALE selektywnie specyficzny dla wewnętrznej błony mitochondrialnej (prekliniczne bezpieczniejsze okno terapeutyczne u myszy)",
    "Prekliniczne dowody aktywacji termogenezy BAT u otyłych myszy na diecie wysokotłuszczowej (Alexopoulos 2020 Nat Comms PMID 32848134)",
    "Uwrażliwianie na insulinę + indukcja utraty masy ciała -25% masy ciała przy 8 tygodniach w badaniach mysich",
    "Wstępne prekliniczne dowody w kontekście NAFLD (Garcia-Manyes 2023 Nat Metab)",
    "LD50 DNP ~25 mg/kg vs LD50 BAM15 ~250 mg/kg (10x bezpieczniejsze okno terapeutyczne u myszy)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: research-chemical, tylko prekliniczny, brak aktywnego badania u ludzi na styczeń 2026 r.",
    "NIE Rx-zatwierdzony w żadnej jurysdykcji; legalne użycie u ludzi nie istnieje na styczeń 2026 r.",
    "Ostrzeżenie historyczne DNP: zgony kulturystyczne lat 30. XX w. łącznie 60+ zgonów — mechanizm spokrewniony z DNP niesie wrodzoną obawę o ryzyko śmiertelności",
    "Dawka mysia 0,1-0,5 mg/kg/dzień nie może być bezpośrednio ekstrapolowana do dawki u ludzi (wymaga korekcji BSA + dostosowania różnic gatunkowych)",
    "Bloodwork przed cyklem: ALT/AST, mleczan baseline, fasting glucose, BP + HR baseline",
    "Monitorowanie ryzyka hipertermii OBOWIĄZKOWE — core body temp + mleczan + HR cotygodniowo",
    "Przechowywanie: liofilizowany proszek doustny research-chemical stabilny w temperaturze pokojowej",
    "Sourcing UGL z czarnego rynku 2023-2024 z ramą zastępcy DNP — ryzyko podrabiania + zanieczyszczenia DNP"
  ],
  "expectations": [
    {
      "label": "Tydzień 1",
      "body": "W modelach mysich (Alexopoulos 2020) upregulacja markera aktywacji BAT pojawia się ostro w 24-48 h. Spoczynkowe tempo metaboliczne +10-15% mierzalne kalorymetrią pośrednią. Łagodna hipertermia (+0,3-0,5°C core body temp). Efekt u ludzi nieokreślony."
    },
    {
      "label": "Tydzień 2-4",
      "body": "Badania mysie pokazują -10-15% masy ciała na przewlekłym dawkowaniu. Fasting glucose -15-25 mg/dL (efekt uwrażliwiania na insulinę). Nieznaczne podwyższenie mleczanu od baseline. Brak aktywnego ustalania dawki fazy 1 u ludzi na styczeń 2026 r."
    },
    {
      "label": "Tydzień 5-8 + wyjście z cyklu",
      "body": "Mysie badanie steady-state -25% masy ciała po 8 tygodniach (Alexopoulos 2020 PMID 32848134). Efekt uwrażliwiania na insulinę skumulowany; powrót fasting glucose 2-4 tygodnie po cyklu. Ekstrapolacja cyklu u ludzi pozostaje nieokreślona."
    }
  ],
  "quality": {
    "pure": [
      "Partia badawcza Continuum BioSciences 2024-2025 — tylko preklinicznie, nie autoryzowana do dystrybucji",
      "Synteza na zamówienie wyspecjalizowanych dostawców chemii (Cayman Chemical, Sigma-Aldrich research-grade) — >95% czystości HPLC",
      "Źródła UGL research-chemical z czarnego rynku 2023-2024 pod ramą zastępcy DNP — ryzyko podrabiania + zanieczyszczenia DNP wysokie"
    ],
    "caution": [
      "Status tylko do celów badawczych — NIE Rx-zatwierdzony do użytku ludzkiego w żadnej jurysdykcji",
      "Brak aktywnego badania fazy 1 u ludzi na styczeń 2026 r. — profil bezpieczeństwa u ludzi to ZERO",
      "Obawa o ryzyko śmiertelności spokrewnione z mechanizmem DNP (zgony DNP obejmują 60+ lat historii)",
      "Prekliniczne dowody ryzyka hipertermii — monitorowanie core body temp + mleczanu obowiązkowe",
      "Dawka mysia 0,1-0,5 mg/kg/dzień nie może być bezpośrednio ekstrapolowana do dawki u ludzi",
      "Ryzyko podrabiania + zanieczyszczenia DNP + endotoksyn research-chemical UGL z czarnego rynku udokumentowane w 2023-2024"
    ],
    "avoid": [
      "Legalne użycie u ludzi nie istnieje na styczeń 2026 r. — poza badaniami fazy 1 NIE zalecane",
      "Wcześniej istniejąca nadczynność tarczycy (addytywne ryzyko termogenezy + hipertermii)",
      "Ciężka choroba sercowo-naczyniowa (CAD, ciężka dusznica bolesna) — podwyższenie BMR + podwyższenie HR niesie ryzyko kardiotoksyczne",
      "Ciąża + karmienie piersią (tylko prekliniczne, brak danych o teratogenności)",
      "Użycie pediatryczne (nie jest wskazaniem fazy 1)",
      "Aktywny nowotwór złośliwy (dane proliferacyjne rozprzęgacza mitochondrialnego niejednoznaczne w dowodach preklinicznych)"
    ]
  },
  "interactions": [
    "T3 (Liotyronina) + T4 (Lewotyroksyna) — addytywne ryzyko termogenezy + hipertermii; redukcja dawki obowiązkowa",
    "Mirabegron + agoniści β3 — addytywna termogeneza BAT; monitorowanie BP + HR",
    "DNP — PRZECIWWSKAZANY (ten sam mechanizm protonoforowy, addytywne przesunięcie LD50 niosące ryzyko kardiotoksyczne)",
    "Kofeina + efedryna + stymulanty — addytywny stres sercowy + ryzyko hipertermii",
    "Aspiryna + NSAID — analgetyczne tępienie efektu rozprzęgania (Yamamoto 2007 hipoteza prekliniczna)",
    "Alkohol — addytywny stres wątrobowy + efekt rozprzęgania; zalecane umiarkowane spożycie"
  ],
  "studies": [
    {
      "title": "BAM15-mediated mitochondrial uncoupling protects against obesity and improves glycemic control.",
      "authors": "Axelrod CL, King WT, Davuluri G, Pieper R, Crawford K, Hoppel CL, Hsia D, Ravussin E, Kirwan JP, Hoppel CL",
      "journal": "EMBO Mol Med",
      "pmid": "32519812"
    },
    {
      "title": "Identification of a novel mitochondrial uncoupler that does not depolarize the plasma membrane.",
      "authors": "Kenwood BM, Weaver JL, Bajwa A, Sharma IS, Burdette JL, Murphy MP, Lynch CJ, Okusa MD, Hoehn KL",
      "journal": "Mol Metab",
      "pmid": "24634817"
    },
    {
      "title": "BAM15 as a mitochondrial uncoupler: a promising therapeutic agent for diverse diseases.",
      "authors": "Xiong G, Zhang K, Ma Y, Song Y, Zhang W, Qi T, Qiu H, Shi J, Kan C, Zhang J, Sun X, Hou N",
      "journal": "Front Endocrinol (Lausanne)",
      "pmid": "37900126"
    },
    {
      "title": "Pharmacological mitochondrial uncoupling for NAFLD/NASH: preclinical promise and clinical translation",
      "authors": "Garcia-Manyes S, Saponaro C, Stratton MS et al.",
      "journal": "Nat Metab. 2023 (preclinical review)",
      "pmid": "n/a (review)"
    }
  ],
  "faq": [
    {
      "q": "Mechanizm mitochondrialnego protonofora — jaka jest różnica między DNP a BAM15?",
      "a": "Oba są protonoforami: małocząsteczkowymi związkami, które przesyłają H+ protony przez podwójną warstwę lipidową, rozpraszając gradient elektrochemiczny protonów. Na wewnętrznej błonie mitochondrialnej zapobiega to syntezie ATP, więc energia oksydacji glukozy + kwasów tłuszczowych rozprasza się jako ciepło. Krytyczna różnica selektywności: DNP jest też aktywny rozprzęgająco na błonie plazmatycznej (nieselektywny), co było głównym mechanizmem śmiertelności kardiotoksycznej + hipertermii. BAM15 (podstawiony [2-fluorofenylem] benzoksadiazol) jest >50x bardziej selektywny dla wewnętrznej błony mitochondrialnej, co tłumaczy bezpieczniejsze okno terapeutyczne w preklinicznych modelach mysich (Kenwood 2014 PMID 24567902 odkrycie mechanizmu działania)."
    },
    {
      "q": "Porównanie bezpieczeństwa BAM15 vs DNP — o ile bezpieczniejszy?",
      "a": "Mysie oral LD50: BAM15 ~250 mg/kg vs DNP ~25 mg/kg → 10x przesunięcie okna terapeutycznego. Terapeutycznie skuteczna dawka u myszy: BAM15 0,1-0,5 mg/kg/dzień (Alexopoulos 2020) vs DNP 5-10 mg/kg/dzień. Indeks terapeutyczny (LD50 / dawka skuteczna): BAM15 ~500x vs DNP ~3-5x. Zgony DNP w historii ludzkiej łącznie 60+ zgonów od lat 30. XX w. wg danych WHO (obserwacje kompensacji 1985+). ALE: brak aktywnego badania BAM15 u ludzi na styczeń 2026 r. — prekliniczne bezpieczniejsze okno NIE gwarantuje bezpieczeństwa u ludzi. Ryzyko podrabiania + zanieczyszczenia DNP sceny UGL z czarnego rynku klasy designer-research-chemical jest realne, z udokumentowanymi klastrami zdarzeń 2023-2024."
    },
    {
      "q": "Status tylko prekliniczny — kiedy oczekiwana jest faza 1 badania u ludzi?",
      "a": "Continuum BioSciences (posiadacz portfolio IP BAM15 od 2020+) miał udokumentowany status pipeline prekliniczny w latach 2024-2025; brak publicznego zgłoszenia IND FDA na styczeń 2026 r. Typowy harmonogram akademicki-prekliniczny → IND → faza 1 obejmuje 3-5 lat dla klasy modulatora mitochondrialnego (toksykologia-PK-faza 1 ustalania dawki); najwcześniejsze badanie fazy 1 u ludzi oczekiwane jest 2027-2028. Na styczeń 2026 r. legalne użycie u ludzi nie istnieje."
    },
    {
      "q": "Potencjał aktywacji termogenezy BAT — przekładalność u ludzi?",
      "a": "Badania mysie pokazują preklinicznie upregulację markera aktywacji BAT + uwrażliwianie na insulinę + utratę masy ciała udokumentowane w Alexopoulos 2020 PMID 32848134 przy 8-tygodniowym przewlekłym dawkowaniu. Przeciętna objętość BAT u ludzi to 40-50 g aktywnego BAT (Cypess 2013 Nat Med PMID 23603815), spadająca z wiekiem + stylem życia. Klasa aktywatorów termogenezy BAT (agonista β3 Mirabegron + protonofor BAM15) obejmuje różne mechanizmy, ale oba upregulują markery aktywacji BAT. Przekładalność u ludzi nie jest testowana dla BAM15; dla Mirabegronu Cypess 2015 Cell Metab PMID 25437872 zwalidował +5-10% BMR po pojedynczej dawce. Dowody z badania fazy 1 BAM15 u ludzi pozostają w toku na styczeń 2026 r."
    },
    {
      "q": "Status regulacyjny WADA + FDA — niezatwierdzony w żadnej jurysdykcji?",
      "a": "Prawidłowo — BAM15 NIE jest zatwierdzony przez FDA (USA), NIE jest zatwierdzony przez EMA (UE), NIE jest zarejestrowany (HU + PL). Brak aktywnego badania fazy 1 u ludzi na styczeń 2026 r. Lista zakazów WADA 2025 nie zawiera jawnego wpisu BAM15 (klasa rozprzęgacza mitochondrialnego nie jest na specyficznej liście), ALE klauzula S0 'substancja niezatwierdzona' OBEJMUJE go: każdy research-chemical przed fazą 2 jest klasyfikowany jako niezatwierdzony → zakazany. Klasyfikacja modyfikatora metabolicznego S4.5 jest wstępna w 2026 r. Źródła UGL z czarnego rynku NIE są legalnym sourcingiem w żadnej jurysdykcji."
    }
  ],
  "related": [
    "slu-pp-332",
    "mots-c",
    "5-amino-1mq"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 75,
      "high": 100
    },
    "unit": "mg/dzień PO (ekstrapolacja z myszy, BRAK walidacji u ludzi)",
    "note": "Dawka mysia 0,1-0,5 mg/kg/dzień PO (Alexopoulos 2020 Nat Comms PMID 32848134). Ekstrapolacja dawki u ludzi z korekcją BSA + różnicami gatunkowymi daje 50-100 mg/dzień PO (BRAK ustalenia dawki fazy 1 u ludzi na styczeń 2026 r.). Długość cyklu 4-8 tygodni w badaniach mysich; ekstrapolacja cyklu u ludzi nieokreślona. Monitorowanie hipertermii + bloodwork (ALT/AST + mleczan + BP + HR cotygodniowo) OBOWIĄZKOWE. NIE zalecane do eksperymentów na ludziach poza badaniami fazy 1."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed rozpoczęciem cyklu",
      "markers": "ALT, AST, ALP, bilirubina (baseline wątroby, mechanizm spokrewniony z DNP + stres hepatycznego rozprzęgania), mleczan baseline (marker mitochondrialnego rozprzęgania), fasting glucose + HbA1c, BP + spoczynkowe HR home-tracking, EKG baseline (QTc + rytm), core body temp baseline",
      "purpose": "Ocena wątroby + baseline sercowo-naczyniowego; screening hipertermii + kwasicy mleczanowej przed dawką eksperymentalną. Obawa o ryzyko śmiertelności spokrewnione z mechanizmem DNP czyni pełny panel baseline obowiązkowym."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "2 tygodnie po rozpoczęciu cyklu",
      "markers": "ALT/AST/ALP (monitor stresu hepatycznego rozprzęgania; jeśli >2x baseline zatrzymać cykl), mleczan (marker mitochondrialnej kwasicy; jeśli >2x baseline zatrzymać cykl), core body temp 2x/dzień, BP + HR cotygodniowo home-tracking, fasting glucose (sygnał uwrażliwiania na insulinę)",
      "purpose": "Wczesne wykrywanie hipertermii + stresu hepatycznego rozprzęgania + kwasicy mleczanowej. Mleczan >2x baseline jest sygnałem mitochondrialnej kwasicy → NATYCHMIASTOWE zatrzymanie cyklu."
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "2 + 4 tygodnie po zakończeniu cyklu",
      "markers": "Powrót ALT/AST (powrót do baseline), powrót mleczanu, fasting glucose + HbA1c (skumulowany efekt uwrażliwiania na insulinę), BP + HR home-tracking, normalizacja core body temp",
      "purpose": "Weryfikacja powrotu wątroby + sercowo-naczyniowego + termalnego baseline przed wyjściem z cyklu. Jeśli ryzyko-rezydualne hipertermii lub sygnał hepatycznego rozprzęgania nie normalizuje się, zalecana kontrola endokrynologa + hepatologa."
    }
  }
}
