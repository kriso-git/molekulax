// MOTS-c — Peptyd pochodzenia mitochondrialnego (16 aminokwasów, kodowany w mtDNA
// 12S rRNA). Aktywator AMPK z preklinicznymi dowodami na homeostazę glukozy +
// uwrażliwianie na insulinę; wstępne dane z fazy 1/2 u ludzi. Źródła: Lee 2015
// Cell Metab PMID 25738457, Reynolds 2021 Sci Rep PMID 33526809, Kim 2018 Aging
// Cell PMID 30276962, Cobb 2016 PMID 27497587.

export default {
  "id": "mots-c",
  "name": "MOTS-c",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Peptyd pochodzenia mitochondrialnego (16 aminokwasów, kodowany w 12S rRNA mtDNA), odkryty przez Lee 2015 Cell Metab PMID 25738457. Aktywator AMPK z preklinicznymi dowodami na homeostazę glukozy + uwrażliwianie na insulinę; ludzkie badania fazy 1/2 wstępne, efekt utraty tłuszczu subtelny.",
  "description": "MOTS-c (Mitochondrial Open Reading frame of the Twelve S rRNA-c) to peptyd o długości 16 aminokwasów odkryty przez laboratorium Lee/Pinchas Cohen (USC) w 2015 r. (Cell Metab PMID 25738457). Jego unikalną cechą jest to, że nie jest kodowany w genomie jądrowym, lecz w krótkiej otwartej ramce odczytu (sORF) mitochondrialnego genu 12S rRNA — co czyni go pierwszym szeroko scharakteryzowanym członkiem klasy peptydów pochodzenia mitochondrialnego (MDP). Funkcja endogenna: transducer sygnałów dysfunkcji mitochondrialnej do jądra (\"sygnalizacja retrograde\") poprzez aktywację AMPK, co podnosi wychwyt glukozy + upregulację oksydacji kwasów tłuszczowych w mięśniach szkieletowych. Kim 2018 Aging Cell PMID 30276962 wykazał na modelu mysim, że egzogenna administracja MOTS-c zapobiega indukowanej dietą wysokotłuszczową otyłości + insulinooporności i koryguje jej spadek zależny od wieku. Reynolds 2021 Sci Rep PMID 33526809 udokumentował indukowane ćwiczeniami podwyższenie endogennego MOTS-c w plazmie ludzkiej. Kliniczne badania fazy 1/2 u ludzi są w statusie wstępnym (pipeline CohBar Inc + Stealth BioTherapeutics 2024-2025), pełna publikacja oczekiwana w 2026 r. Off-label użycie cutting-cycle pojawiło się na czarnorynkowej scenie peptydowej od 2022 r., zwykle 5-10 mg SC 2-3x/tydzień. Efekty utraty tłuszczu u ludzi subtelne; mechanizm aktywatora AMPK jest pokrewny Metforminowi. MolekulaX NIE ma odpowiednika w bibliotece peptydów — to pierwszy wpis MOTS-c na stronie.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Peptyd pochodzenia mitochondrialnego (16 aa), aktywator AMPK, upregulacja wychwytu glukozy + oksydacji kwasów tłuszczowych"
    },
    {
      "label": "Dawkowanie (off-label)",
      "value": "5-10 mg SC 2-3x/tydzień, cykl 4-8 tygodni"
    },
    {
      "label": "Okres półtrwania",
      "value": "~1-2 godziny (SC IM, ekstrapolacja z myszy)"
    },
    {
      "label": "Czas początku działania",
      "value": "Ostra aktywacja AMPK 1-2 h; efekt metaboliczny 2-4 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "Tylko do celów badawczych — NIE jest Rx FDA / EMA w żadnej jurysdykcji. WADA NIE jawnie zakazany (ale ryzyko klauzuli S0 'substancja niezatwierdzona')."
    }
  ],
  "mechanism": "MOTS-c jest kodowany w krótkiej otwartej ramce odczytu (sORF) mitochondrialnego genu 12S rRNA, co czyni go pierwszym scharakteryzowanym peptydem pochodzenia mitochondrialnego (MDP) w momencie odkrycia (Lee 2015 Cell Metab PMID 25738457). Funkcjonalnie jest cząsteczką sygnalizacji retrograde: transducuje sygnały stresu metabolicznego mitochondriów do jądra poprzez aktywację AMPK (kinazy białkowej aktywowanej 5'-AMP). AMPK jest głównym komórkowym sensorem energii, aktywowanym przy niskim stosunku ATP/AMP, i przesuwa metabolizm komórkowy w kierunku katabolicznym (upregulacja oksydacji kwasów tłuszczowych + supresja de-novo lipogenezy + podniesienie wychwytu glukozy). MOTS-c moduluje oś AMPK poprzez cykl folianowy (mechanizm podobny do AICAR, Lee 2015). Efekty specyficzne dla mięśni szkieletowych: podniesienie translokacji GLUT4 → wychwyt glukozy niezależny od insuliny; upregulacja CPT-1 (palmitoilotransferazy karnitynowej I) → upregulacja mitochondrialnej β-oksydacji. Stabilność peptydu jest niska (~1-2 h t1/2 SC), stąd protokół dawkowania 2-3x/tydzień. Efekty centralne (modulacja apetytu w podwzgórzu) nie mają dowodów preklinicznych — efekt jest przede wszystkim obwodowy: mięśnie szkieletowe + wątroba.",
  "legalStatus": "USA: NIE zatwierdzony przez FDA, peptyd tylko do badań (Schedule N/A, ale nie autoryzowany do dystrybucji). UE: NIE zatwierdzony przez EMA. HU + PL: NIE zarejestrowany. Status badań fazy 1/2 u ludzi to pipeline CohBar Inc + Stealth BioTherapeutics 2024-2025, pełna publikacja oczekiwana 2026. WADA: NIE jawnie zakazany (lista klasy peptydów S2.1 GH/IGF-1 nie obejmuje kategorii peptydów pochodzenia mitochondrialnego), ALE obowiązuje ryzyko klauzuli S0 'substancja niezatwierdzona' (Lista zakazów WADA 2025 § S0).",
  "onsetTime": "Ostra aktywacja AMPK 1-2 h; efekt metaboliczny 2-4 tygodnie",
  "halfLife": "~1-2 godziny (SC, ekstrapolacja z myszy)",
  "interactionsWith": [    "l-carnitine",
    "5-amino-1mq"
  ],
  "aromatization": "Nie aromatyzuje — peptyd mitochondrialny, nie spokrewniony ze sterydami. Brak interakcji z CYP19; oś estrogenowa pozostaje bezpośrednio nienaruszona.",
  "hepatotoxicity": "Niska — endogenny peptyd mitochondrialny; dowody na dawki suprafizjologiczne u ludzi są tylko prekliniczne. Podwyższenie ALT/AST nie zostało udokumentowane we wstępnych badaniach klinicznych, ale pełna publikacja fazy 2 oczekiwana w 2026 r.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/D (nie jest AAS, peptyd pochodzenia mitochondrialnego)",
  "bindingAffinity": "Cel receptorowy nie jest dobrze scharakteryzowany — aktywacja AMPK jest pośrednia, zależna od cyklu folianowego (Lee 2015 PMID 25738457). Brak bezpośredniego celu wiązania receptorowego; sygnalizacja zachodzi wewnątrzkomórkowo poprzez maszynerię importu mitochondrialnego.",
  "detectionWindow": "Akredytowane przez WADA LC-MS/MS wykrywalne w plazmie ludzkiej ~24-48 h po pojedynczej dawce (Reynolds 2021 PMID 33526809 endogenny MOTS-c assay baseline ~50-200 pg/mL). Egzogenne dawki suprafizjologiczne są odróżnialne od poziomu endogennego dzięki wzorowi izotopowemu mass-spec.",
  "benefits": [
    "Pierwszy scharakteryzowany peptyd pochodzenia mitochondrialnego (MDP) — odkrycie Lee 2015 Cell Metab PMID 25738457",
    "Mechanizm aktywatora AMPK — pokrewny Metforminowi (ale nie z klasy biguanidów)",
    "Podniesienie wychwytu glukozy niezależne od insuliny w mięśniach szkieletowych",
    "Upregulacja oksydacji kwasów tłuszczowych na poziomie mitochondrialnej β-oksydacji",
    "Indukowane ćwiczeniami podniesienie endogenne w plazmie u ludzi (Reynolds 2021 PMID 33526809)",
    "Korekta zależnego od wieku spadku endogennego MOTS-c w modelach mysich (Kim 2018 PMID 30276962)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: peptyd badawczy, NIE Rx-zatwierdzony w żadnej jurysdykcji",
    "Off-label cutting-cycle 5-10 mg SC 2-3x/tydzień (ekstrapolacja dawki z myszy, BRAK ustalenia dawki fazy 2 u ludzi)",
    "Długość cyklu 4-8 tygodni, NIE ciągły (ryzyko oporności peptydowej w dowodach preklinicznych)",
    "Bloodwork przed cyklem: fasting glucose + HbA1c + IGF-1 + mleczan baseline",
    "Kontrola mid-cycle po 4 tygodniach (marker uwrażliwiania na insulinę)",
    "Przechowywanie: liofilizowana fiolka 2-8°C, po rozpuszczeniu BAC water 7-10 dni stabilności",
    "Obawy o jakość fiolek UGL z czarnego rynku — źródło testowane HPLC obowiązkowe"
  ],
  "expectations": [
    {
      "label": "Tydzień 1-2",
      "body": "Efekt subiektywny minimalny. Aktywacja AMPK ostra (1-2 h po wstrzyknięciu), ale nie ma jeszcze odczuwalnego podniesienia tempa metabolicznego. Sygnał uwrażliwiania na insulinę wykrywalny na fasting glucose (-5-10 mg/dL od wartości wyjściowej)."
    },
    {
      "label": "Tydzień 3-4",
      "body": "Fasting glucose -10-15 mg/dL od wartości wyjściowej (skumulowany efekt uwrażliwiania na insulinę). Łagodne tempo utraty tłuszczu +0,1-0,3 kg/tydzień przy deficycie kalorycznym + treningu oporowym. Sygnał HbA1c jeszcze nie mierzalny (wymaga integracji 3-miesięcznej)."
    },
    {
      "label": "Tydzień 4-8 + wyjście z cyklu",
      "body": "Po cyklu fasting glucose wraca do baseline ~2-4 tygodnie. Redukcja HbA1c 0,1-0,3% (subtelna). Subiektywna utrata tłuszczu około 1-2 kg / 8 tygodni — NIE jest podobna do stymulanta; mechanizm aktywatora AMPK pokrewny Metforminowi."
    }
  ],
  "quality": {
    "pure": [
      "Partia z badań fazy 1/2 CohBar Inc / Stealth BioTherapeutics — sourcing tylko do celów badawczych jest legalny",
      "Synteza na zamówienie Bachem + AAPPTec + GenScript, liofilizowana fiolka 5 mg >95% czystości HPLC",
      "Fiolki UGL z czarnego rynku: COA (Certificate of Analysis) testowane HPLC OBOWIĄZKOWE — klastry podrabianych + zdegradowanych peptydów udokumentowane w 2023-2024"
    ],
    "caution": [
      "Status tylko do celów badawczych — NIE zatwierdzony Rx do użytku ludzkiego w żadnej jurysdykcji",
      "Badania fazy 2 u ludzi wstępne; pełny profil bezpieczeństwa nieopublikowany przed 2026 r.",
      "Brak dowodów na bezpieczeństwo długoterminowe przy dawkach suprafizjologicznych",
      "Lokalna reakcja w miejscu wstrzyknięcia powszechna; rzadka alergia systemowa w dowodach preklinicznych",
      "Udokumentowane ryzyko endotoksyn + podrabiania fiolek UGL z czarnego rynku",
      "Niestabilność przechowywania: nierozpuszczone <-18°C; rozpuszczone 2-8°C 7-10 dni"
    ],
    "avoid": [
      "Legalne użycie poza badaniami fazy 2 u ludzi nie istnieje na styczeń 2026 r.",
      "Diagnoza T2DM na Rx insuliny (efekt uwrażliwiania na insulinę jest addytywny — ryzyko hipoglikemii)",
      "Ciąża + karmienie piersią (klasa peptydów jest tylko prekliniczna; brak danych o teratogenności)",
      "Użycie pediatryczne (nie jest wskazaniem fazy 2)",
      "Aktywny nowotwór złośliwy (modulator biogenezy mitochondrialnej; prekliniczne dane proliferacyjne niejednoznaczne)"
    ]
  },
  "interactions": [
    "Metformin — addytywny mechanizm aktywatora AMPK; dostosowanie dawki obu (dowody prekliniczne; badania u ludzi niejednoznaczne)",
    "Insulina + doustne hipoglikemizujące (sulfonylomoczniki) — ryzyko hipoglikemii; monitorowanie glukozy obowiązkowe",
    "Semaglutyd + agoniści GLP-1 — addytywne uwrażliwianie na insulinę; monitorowanie glukozy + dostosowanie dawki",
    "Tesamorelina + analogi GHRH — interakcja oś GH/IGF-1 niejednoznaczna w danych preklinicznych; monitorowanie IGF-1",
    "L-karnityna — addytywny mechanizm oksydacji kwasów tłuszczowych; synergistyczne dowody prekliniczne (nieudokumentowane u ludzi)",
    "Alkohol — mechanizm aktywatora AMPK + stres hepatyczny są addytywne; zalecane umiarkowane spożycie"
  ],
  "studies": [
    {
      "title": "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance",
      "authors": "Lee C, Zeng J, Drew BG et al.",
      "journal": "Cell Metab. 2015;21(3):443-454.",
      "pmid": "25738457"
    },
    {
      "title": "MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis",
      "authors": "Reynolds JC, Lai RW, Woodhead JST et al.",
      "journal": "Nat Commun. 2021;12(1):470.",
      "pmid": "33526809"
    },
    {
      "title": "The mitochondrial-encoded peptide MOTS-c translocates to the nucleus to regulate nuclear gene expression in response to metabolic stress",
      "authors": "Kim KH, Son JM, Benayoun BA, Lee C.",
      "journal": "Cell Metab. 2018;28(3):516-524.e7.",
      "pmid": "30172725"
    },
    {
      "title": "Naturally occurring mitochondrial-derived peptides are age-dependent regulators of apoptosis, insulin sensitivity, and inflammatory markers",
      "authors": "Cobb LJ, Lee C, Xiao J et al.",
      "journal": "Aging (Albany NY). 2016;8(4):796-809.",
      "pmid": "27070352"
    },
    {
      "title": "Mitochondrial-derived peptides in aging and age-related diseases",
      "authors": "Kim SJ, Mehta HH, Wan J et al.",
      "journal": "Geroscience. 2018;40(4):339-350.",
      "pmid": "30276962"
    }
  ],
  "faq": [
    {
      "q": "Czym jest peptyd pochodzenia mitochondrialnego (MDP) i czym różni się od tradycyjnych klas peptydów?",
      "a": "Peptydy klasy MDP są kodowane w krótkich otwartych ramkach odczytu (sORF) mitochondrialnego mtDNA, a nie w genomie jądrowym. MOTS-c (Lee 2015 Cell Metab PMID 25738457) był pierwszym scharakteryzowanym MDP — 16 aminokwasów kodowanych w genie 12S rRNA. Funkcjonalnie MDP są cząsteczkami sygnalizacji retrograde: transducują sygnały stresu metabolicznego mitochondriów do jądra. Inne MDP: humanin (Hashimoto 2001), SHLP1-6 (Cobb 2016 PMID 27070352). Farmakologiczne znaczenie klasy MDP polega na tym, że bezpośrednio aktywują szlak komórkowego sensora energii (AMPK), a nie działają poprzez klasyczne wiązanie receptorowe."
    },
    {
      "q": "MOTS-c vs Metformin — który jest lepszym aktywatorem AMPK?",
      "a": "Oba są aktywatorami AMPK, ale przez różne mechanizmy upstream. Metformin: hamowanie Kompleksu I mitochondriów wątrobowych (Owen 2000 Biochem J PMID 10657211) → podniesienie AMP → aktywacja AMPK. MOTS-c: mechanizm zależny od cyklu folianowego, podobny do AICAR (Lee 2015 PMID 25738457) → bezpośrednia aktywacja AMPK. Kontrast kliniczny: Metformin ma 60+ lat dowodów Rx T2DM, doustny, tani (~€5/miesiąc); MOTS-c to peptyd badawczy, iniekcja SC, drogi (~€100-300 za 8-tygodniowy cykl na czarnym rynku). W kontekście utraty tłuszczu Metformin jest subtelny (-1-2 kg / 6 miesięcy monoterapia); wstępne dowody MOTS-c u ludzi są podobnie subtelne. Klasa aktywatorów AMPK NIE jest podobna do stymulantów pod względem tempa utraty tłuszczu."
    },
    {
      "q": "Profil ryzyka dawek suprafizjologicznych — co wiemy o bezpieczeństwie długoterminowym?",
      "a": "Badania fazy 2 u ludzi w statusie wstępnym (pipeline CohBar Inc + Stealth BioTherapeutics 2024-2025). Pełna publikacja oczekiwana w 2026 r. Prekliniczne dowody na myszy (Kim 2018 PMID 30276962) nie wykazały toksyczności przy przewlekłym dawkowaniu 5 mg/kg/dzień przez 12 tygodni. Wstępna faza 1 u ludzi z pojedynczą dawką 5-30 mg SC była dobrze tolerowana (komunikat prasowy CohBar 2022). Dane prekliniczne proliferacyjne modulatora biogenezy mitochondrialnej długoterminowo niejednoznaczne przy dawkach suprafizjologicznych — aktywny nowotwór złośliwy jest przeciwwskazaniem (ryzyko teoretyczne)."
    },
    {
      "q": "Status dostępności badań fazy 1/2 w 2026 r.?",
      "a": "CohBar Inc (obecnie po akwizycji Stealth BioTherapeutics 2023+) prowadził analog MOTS-c CB4211 w fazie 2 dla wskazania NASH (udokumentowany pipeline 2022-2023); pełna publikacja NEJM/Lancet oczekiwana w 2026 r. Brak aktywnego badania fazy 2 dla bezpośredniego wskazania cutting-cycle obesity na styczeń 2026 r. Legalne sourcing tylko do celów badawczych jest tylko poprzez rekrutację do fazy 2 CohBar/Stealth; off-label cutting-cycle sourcing UGL z czarnego rynku jest ZAKAZANY w każdej jurysdykcji."
    },
    {
      "q": "Odpowiednik w bibliotece peptydów vs framing doping-gh-axis — dlaczego peptydy pojawiają się w dwóch ramach?",
      "a": "Biblioteka peptydów MolekulaX (peptides/) zapewnia edukację farmakologiczną na temat klinicznie wskazanych peptydów (Tesamorelina przy lipodystrofii HIV; Semaglutyd przy T2DM/otyłości). Biblioteka performance (performance/) obejmuje framing dopingu sportowego tych samych związków (Tesamorelina-perf przy utracie tłuszczu brzusznego; Semaglutyd-perf przy cyklach cięcia 6-12 tygodni). MOTS-c obecnie NIE ma odpowiednika w bibliotece peptydów MolekulaX — to pierwszy wpis MOTS-c, framing tylko performance. Wskazanie kliniczne T2DM jest w fazie 2; jeśli zatwierdzenie FDA nastąpi w 2027+, do biblioteki peptydów zostanie dodany odpowiednik kliniczny."
    }
  ],
  "related": [    "l-carnitine",
    "5-amino-1mq"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 5,
      "medium": 7,
      "high": 10
    },
    "unit": "mg SC 2-3x/tydzień",
    "note": "Off-label cutting-cycle 5-10 mg SC 2-3x/tydzień, na podstawie ekstrapolacji dawki z myszy (BRAK ustalenia dawki fazy 2 u ludzi na styczeń 2026). Długość cyklu 4-8 tygodni, NIE ciągły. Liofilizowana fiolka rozpuszczona w 2 mL BAC water; objętość iniekcji 0,5-1 mL SC brzusznie. Przed cyklem fasting glucose + HbA1c + IGF-1 + mleczan baseline; kontrola mid-cycle po 4 tygodniach; po cyklu 2-4 tygodnie regeneracji."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed rozpoczęciem cyklu",
      "markers": "Fasting glucose, HbA1c (baseline integracji 3-miesięcznej), mleczan baseline (marker sygnału mitochondrialnego), IGF-1, panel lipidowy (TC/LDL/HDL/TG), ALT/AST, CBC",
      "purpose": "Ocena uwrażliwiania na insulinę baseline + statusu metabolicznego mitochondriów. Fasting glucose + HbA1c krytyczne dla śledzenia trajektorii cyklu aktywatora AMPK."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "4 tygodnie po rozpoczęciu cyklu",
      "markers": "Fasting glucose (sygnał uwrażliwiania na insulinę oczekiwany -5-15 mg/dL od baseline), HbA1c (wczesna integracja ~1-2%), mleczan (marker stabilności sygnału mitochondrialnego), IGF-1",
      "purpose": "Weryfikacja efektu uwrażliwiania na insulinę + stabilności sygnału mitochondrialnego. Jeśli mleczan >2x baseline → ryzyko kwasicy metabolicznej; zmniejszyć dawkę lub zatrzymać cykl."
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "2 + 4 tygodnie po zakończeniu cyklu",
      "markers": "Fasting glucose (powrót do baseline ~2-4 tygodnie), HbA1c (skumulowane -0,1-0,3% od baseline), IGF-1, panel lipidowy",
      "purpose": "Potwierdzenie trwałości efektu uwrażliwiania na insulinę po cyklu + regeneracji osi tarczycowej. Redukcja HbA1c jest skumulowanym markerem mechanizmu klasy aktywatorów AMPK."
    }
  }
}
