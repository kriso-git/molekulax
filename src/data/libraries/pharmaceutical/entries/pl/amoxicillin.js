// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.612Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "amoxicillin",
  "name": "Amoxicillin",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Antybiotyk β-laktamowy o szerokim spektrum z grupy penicylin. Lek podstawowy WHO, jeden z najczęściej przepisywanych antybiotyków na świecie. Standard pierwszej linii dla zapalenia ucha środkowego, zatok, zapalenia płuc, UTI, profilaktyki stomatologicznej i eradykacji H. pylori.",
  "description": "Amoksycylina to aminopenicylina, dobrze wchłaniana doustnie pochodna ampicyliny, opracowana przez Beecham w 1972 r. (Amoxil). Jako antybiotyk β-laktamowy hamuje bakteryjną transpeptydazę ściany komórkowej (PBP, białko wiążące penicylinę), zakłócając sieciowanie peptydoglikanu i powodując lizę bakterii. Spektrum: Gram-dodatnie (Streptococcus, Enterococcus), Gram-ujemne (H. influenzae, E. coli, H. pylori, Helicobacter, Borrelia). Oporna na bakterie produkujące β-laktamazę (Staphylococcus, Klebsiella, beztlenowce), dlatego często łączona z kwasem klawulanowym (Augmentin) dla rozszerzenia spektrum. Na liście leków podstawowych WHO, regulowana recepta w UE/USA w kontekście oporności na antybiotyki.",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "J01CA04"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx), stewardship antybiotykowy"
    },
    {
      "label": "Mechanizm",
      "value": "β-laktam, inhibitor PBP transpeptydazy, bakteriobójczy"
    },
    {
      "label": "Okres półtrwania",
      "value": "1-1,5 h (zależne od czynności nerek)"
    },
    {
      "label": "Początek",
      "value": "1-2 h (szczyt w osoczu), 24-72 h (odpowiedź kliniczna)"
    }
  ],
  "mechanism": "Pierścień β-laktamowy wiąże aktywne miejsca kluczowych enzymów syntezy ściany komórkowej bakterii (PBP, białka wiążące penicylinę, transpeptydazy), hamując sieciowanie peptydoglikanu. Ściana komórkowa słabnie, prowadząc do lizy z powodu stresu osmotycznego. Działa bakteriobójczo na podatne organizmy. Ze względu na pseudoodwracalne wiązanie efekt jest zależny od dawki i czasu (T > MIC jest ważniejszym predyktorem AUC odpowiedzi klinicznej).",
  "legalStatus": "UE/PL: na receptę (Amoxil, Ospamox, Hiconcil, Duomox, generyki). USA: FDA Rx. Program stewardship antybiotykowy nakłada ścisłe kryteria przepisywania — empiryczne przepisywanie tylko dla potwierdzonej infekcji bakteryjnej. Kategoria WHO AWaRe: ACCESS (szeroko stosowany, niskie ryzyko oporności).",
  "bioavailability": "~74-92% (doustnie, niewielki wpływ pokarmu — etykieta FDA Amoxil)",
  "onsetTime": "1-2 h (plasma peak), 24-72 h (clinical symptom response)",
  "halfLife": "1-1.5 h (normal renal function); extends to 7-21 h in renal failure",
  "atcCode": "J01CA04",
  "prescriptionStatus": "Na receptę (Rx), protokół stewardship antybiotykowego",
  "indications": [
    "Ostre zapalenie ucha środkowego (dziecko, dorosły)",
    "Bakteryjne zapalenie zatok (środowiskowe)",
    "Środowiskowo nabyte zapalenie płuc (CAP, łagodne-średnie)",
    "Infekcja dróg moczowych (UTI, ostre zapalenie pęcherza u kobiet)",
    "Eradykacja Helicobacter pylori (PPI + klarytromycyna + amoksycylina potrójna)",
    "Zapalenie gardła Streptococcus pyogenes (szkarlatyna, ostre zapalenie migdałków)",
    "Wczesne stadium boreliozy z Lyme, profilaktyka stomatologiczna (pacjenci kardiologiczni z ryzykiem zapalenia wsierdzia)"
  ],
  "contraindications": [
    "Znana alergia na penicylinę lub β-laktamy (wywiad anafilaksji)",
    "Wywiad ciężkiej nadwrażliwości (Stevens-Johnson, TEN, DRESS)",
    "Infekcja mononukleozą (EBV) — amoksycylina powoduje wysypkę plamisto-grudkową w 80-95%"
  ],
  "commonSideEffects": [
    "GI: biegunka (10%, związana z antybiotykiem), nudności (5%), wymioty (3%)",
    "Wysypka skórna (3-5%, plamisto-grudkowa, nie zawsze alergiczna)",
    "Kandydoza pochwy (z powodu zaburzenia normalnej flory)",
    "Ciężkie, rzadkie: anafilaksja (< 0,05%), zespół Stevensa-Johnsona, ostre cewkowo-śródmiąższowe zapalenie nerek, zapalenie jelita C. difficile",
    "Krystalluria przy wysokodawkowej terapii (rzadkie, zapobiega nawodnienie)"
  ],
  "cyp450": [
    "Not significantly CYP-metabolized",
    "Renal excretion (60-70% unchanged)"
  ],
  "crossMolInteractions": [
    "Metotreksat: zmniejszony klirens nerkowy, zwiększone ryzyko toksyczności",
    "Warfaryna: INR może wzrosnąć (redukcja syntezy wit. K przez florę jelitową), monitor",
    "Doustna antykoncepcja: wcześniejsza dyskusja anekdotycznej interakcji; CDC stwierdza, że NIE jest istotna klinicznie chyba że biegunka",
    "Allopurinol: znacząco zwiększone ryzyko wysypki (addytywny mechanizm nadwrażliwości)",
    "Probenecid: hamuje wydzielanie kanalikowe, poziom amoksycyliny w osoczu może wzrosnąć"
  ],
  "benefits": [
    "Szerokie spektrum, niski profil toksyczności, dobra biodostępność doustna (90%)",
    "Eradykacja H. pylori (terapia potrójna): 80-90% wskaźnik powodzenia",
    "Tanie formy generyczne, długoterminowa dostępność, bezpieczny u dzieci",
    "Odpowiedź kliniczna zwykle w ciągu 48-72 h, kompatybilny ze stewardship antybiotykowym",
    "Standard złoty profilaktyki zapalenia wsierdzia stomatologicznego (wytyczne AHA 2007)"
  ],
  "quickStart": [
    "POTWIERDZENIE diagnozy najpierw — antybiotyk TYLKO dla potwierdzonej infekcji bakteryjnej (nie wirusowej)",
    "Standardowa dawka u dorosłych 500 mg co 8 h (q8h) lub 875 mg co 12 h (q12h)",
    "W ciężkiej infekcji 1000 mg q8h lub q12h, możliwie jako Augmentin (amoksycylina + kwas klawulanowy)",
    "Z jedzeniem lub bez, nawodnienie (2 L/dzień) dla łagodzenia krystallurii",
    "Ukończyć pełny kurs (5-14 dni wg wskazania), wczesne przerwanie powoduje rozwój oporności"
  ],
  "expectations": [
    {
      "label": "Godziny 24-48",
      "body": "Początek odpowiedzi klinicznej: spada gorączka, łagodnieją objawy lokalne (ból ucha, ucisk zatok). Możliwe objawy GI (luźne stolce) w pierwszych dniach z powodu zaburzenia flory."
    },
    {
      "label": "Dni 3-5",
      "body": "Rozwija się remisja objawowa. Jeśli BRAK poprawy, przegląd kliniczny: oporny patogen, etiologia wirusowa lub inna diagnoza. PRZY KAŻDEJ wysypce NATYCHMIAST STOP i konsultacja alergologa."
    },
    {
      "label": "Dni 7-14 (koniec kursu)",
      "body": "Pełny kurs ukończony. Reocena: jeśli objawy wracają, wskazana kultura + test wrażliwości. Probiotyk (Lactobacillus, Saccharomyces boulardii) po antybiotyku dla przywrócenia flory."
    }
  ],
  "quality": {
    "pure": [
      "GSK Amoxil (oryginator), Ospamox, Duomox, Hiconcil, generyki Sandoz/Krka/Teva biorównoważne",
      "Augmentin (amoksycylina + kwas klawulanowy) przeciw patogenom opornym na β-laktamazę",
      "Tabletka, kapsułka, zawiesina (pediatryczna), iv. (szpitalna)"
    ],
    "caution": [
      "Wywiad alergii na penicylinę: reaktywność krzyżowa cefalosporyn 1-10%, zalecana szczegółowa ocena alergologiczna",
      "Przy podejrzeniu mononukleozy (EBV) NIE przepisywać — 80-95% ryzyka wysypki",
      "Niewydolność nerek (eGFR < 30): wymagana redukcja dawki i/lub wydłużenie odstępu",
      "Biegunka związana z antybiotykiem (oznaki ostrzegawcze zapalenia jelita C. difficile)"
    ],
    "avoid": [
      "Znana anafilaksja na penicylinę lub β-laktamy",
      "Wywiad ciężkiej nadwrażliwości (SJS, TEN, DRESS)",
      "Mononukleoza lub inna podejrzana infekcja wirusowa (przeziębienie, grypa)",
      "Samoleczenie dawkami subterapeutycznymi (rozwój oporności)",
      "Wcześniejsza cholestatyczna żółtaczka lub zaburzenia czynności wątroby indukowane amoksycyliną/klawulanianem",
      "Ciężka niewydolność nerek (CrCl <30 ml/min) bez korekty dawki — ryzyko kumulacji i toksyczności",
      "Wcześniejsze rzekomobłoniaste zapalenie jelita grubego związane z C. difficile po antybiotyku beta-laktamowym"
    ]
  },
  "interactions": [
    "Kwas klawulanowy (Augmentin): kombinacja inhibitora β-laktamazy, rozszerzenie spektrum",
    "Klarytromycyna + PPI (omeprazol, pantoprazol): potrójna terapia H. pylori",
    "Metronidazol: rozszerzenie beztlenowe w złożonej infekcji",
    "Probiotyk (Lactobacillus, Saccharomyces): łagodzi biegunkę związaną z antybiotykiem",
    "Szczepionki: zaleca się czasowe odseparowanie szczepionki żywej atenuowanej od antybiotyku (~2 tygodnie)"
  ],
  "studies": [
    {
      "title": "Antibiotic prescribing patterns and resistance: Amoxicillin in community-acquired infections",
      "authors": "Costelloe C, Metcalfe C, Lovering A et al.",
      "journal": "BMJ. 2010;340:c2096.",
      "pmid": "20483949"
    },
    {
      "title": "Amoxicillin vs amoxicillin-clavulanate for acute otitis media in children",
      "authors": "Hoberman A, Paradise JL, Rockette HE et al.",
      "journal": "N Engl J Med. 2011;364(2):105-15.",
      "pmid": "21226576"
    },
    {
      "title": "Effectiveness of amoxicillin and amoxicillin-clavulanate for the treatment of community-acquired pneumonia in adults and children: a systematic review and meta-analysis.",
      "authors": "Potter-Schwartz L, Swe MM, Sharland M",
      "journal": "BMJ Open",
      "pmid": "42097647"
    },
    {
      "title": "Non-Bismuth Quadruple Concomitant Treatment for Helicobacter pylori Eradication: A Systematic Review and Meta-Analysis.",
      "authors": "Parra P, Nyssen OP, Gisbert JP",
      "journal": "Helicobacter",
      "pmid": "41498306"
    },
    {
      "title": "Prevention of infective endocarditis: AHA scientific statement",
      "authors": "Wilson W, Taubert KA, Gewitz M et al.",
      "journal": "Circulation. 2007;116(15):1736-54.",
      "pmid": "17446442"
    },
    {
      "title": "Amoxicillin for Lyme disease in children and pregnancy",
      "authors": "Lantos PM, Rumbaugh J, Bockenstedt LK et al.",
      "journal": "Clin Infect Dis. 2021;72(1):e1-e48.",
      "pmid": "33417672"
    },
    {
      "title": "Antibiotic stewardship and WHO AWaRe classification",
      "authors": "Sharland M, Pulcini C, Harbarth S et al.",
      "journal": "Lancet Infect Dis. 2018;18(1):18-20.",
      "pmid": "29303731"
    }
  ],
  "faq": [
    {
      "q": "Kiedy NIE powinienem przyjmować antybiotyków?",
      "a": "NIE skuteczne w infekcjach wirusowych: przeziębienie (rinowirus), grypa (myxowirus), większość zapaleń gardła (90% wirusowe), ostre zapalenie oskrzeli (90% wirusowe), nieżyt żołądka i jelit (90% wirusowy). Niepotrzebne przepisywanie antybiotyków przyspiesza rozwój oporności i powoduje ryzyko działań niepożądanych bez wskazania. Uzasadnione dla potwierdzonej infekcji bakteryjnej (objawy kliniczne, czasem PCR, kultura lub CRP/prokalcytonina). Porozmawiaj z lekarzem przy każdym objawie gorączkowym."
    },
    {
      "q": "Co oznacza \"wysypka amoksycyliny z EBV\"?",
      "a": "Mononukleoza zakaźna (wirus Epsteina-Barr, \"choroba pocałunkowa\") klasycznie objawia się wysypką plamisto-grudkową przy amoksycylinie (lub ampicylinie) — 80-95% częstość. NIE jest to alergia IgE-zależna na penicylinę, lecz wirusowo-superinfekcyjny mechanizm kompleksów immunologicznych. Pacjent NIE będzie później uczulony na penicylinę. Mimo to natychmiast przerwij leczenie i sprawdź serologię EBV (przeciwciało heterofilne, anty-VCA IgM). Wybierz inny antybiotyk (lub żaden, bo EBV jest wirusowe)."
    },
    {
      "q": "Dlaczego ukończyć pełny kurs antybiotyku?",
      "a": "Tradycyjna zasada (i zalecenie WHO do 2024) utrzymuje, że skrócenie czasu sub-terapeutycznej dawki wzbogaca populację bakterii o niskiej wrażliwości, napędzając pojawienie się dominującego opornego szczepu w następnej infekcji. NOWE DANE (Spellberg 2016, BMJ): w wielu infekcjach (zapalenie płuc, UTI) \"najkrótszy skuteczny kurs\" jest lepszy (5 vs 7-10 dni) ze względu na mniejsze szkody dla normalnej flory. WNIOSEK: postępuj wg INSTRUKCJI lekarza (NIE samodzielnie), i omów z lekarzem czy krótki czy długi kurs jest odpowiedni dla tego wskazania."
    },
    {
      "q": "Co robić przy biegunce związanej z antybiotykiem?",
      "a": "Łagodna, samoograniczająca biegunka jest częsta (~10%) z powodu zaburzenia flory związanego z antybiotykiem. Łagodzenie: nawodnienie (doustna rehydratacja), probiotyk (Lactobacillus rhamnosus GG, Saccharomyces boulardii) podczas antybiotyku i 1-2 tygodnie po. NAGŁA SYTUACJA: KRWAWA biegunka, skurcze brzucha, wysoka gorączka, odwodnienie = możliwe zapalenie jelita Clostridioides difficile. Wskazany test toxin-PCR i terapia wankomycyną/fidaksomycyną. Środek antyperystaltyczny (loperamid) ZAKAZANY przy podejrzeniu C. diff."
    },
    {
      "q": "Wywiad alergii na penicylinę: co oznacza dla amoksycyliny?",
      "a": "\"Wywiad alergiczny\" wskazuje na rzeczywiste ryzyko anafilaksji IgE-zależnej w 10-15%, przeciwwskazując amoksycylinę. W większości (85-90%) \"alergia na penicylinę\" to w rzeczywistości: wysypka wirusowa w dzieciństwie błędnie zidentyfikowana jako alergiczna, lub objawy nie-IgE-zależne (GI, ból głowy). SZCZEGÓŁOWA OCENA ALERGOLOGICZNA: test skórny + kwantyfikacja IgE + stopniowane wyzwanie usuwa etykietę alergii w 50-70%. Typowa sekwencja: 1) test skórny na penicylinę, 2) oszacowanie reaktywności krzyżowej cefalosporyn (1-10%), 3) karbapenem (meropenem) alternatywa dla ciężkiej infekcji."
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 500,
      "medium": 875,
      "high": 1000
    },
    "unit": "mg",
    "note": "Niska (500 mg q8h, 3x/dzień): standardowe zapalenie ucha, zatok, ostry UTI, łagodna infekcja. Średnia (875 mg q12h, 2x/dzień): środowiskowe zapalenie płuc, cięższa infekcja — często preferowane dla lepszego compliance. Wysoka (1000 mg q8h, 3x/dzień): ciężka infekcja, potrójna terapia H. pylori, profilaktyka endocarditis stomatologicznego 2 g jednorazowo. Z jedzeniem lub bez, nawodnienie. Ukończyć pełny kurs wg instrukcji lekarza, zwykle 5-14 dni."
  }
}
