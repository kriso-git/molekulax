// L-Carnitine — czwartorzędowy związek amoniowy, syntetyzowany endogennie
// z prekursorów lizyny + metioniny, mitochondrialny shuttle dla długołańcuchowych
// kwasów tłuszczowych. Izolacja Gulewitsch + Krimberg 1905, Sigma-Tau 1985 FDA
// Rx na pierwotny niedobór karnityny, bodybuilding off-label od lat 90.
// Źródła: Stephens 2007 PMID 17331998, Wall 2011 PMID 21224234,
// Koeth 2013 Nature Med PMID 23563705, Kraemer 2008 PMID 18204383,
// Vukovich 1994 PMID 7960016.

export default {
  "id": "l-carnitine",
  "name": "L-Carnitine",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Czwartorzędowy związek amoniowy, syntetyzowany endogennie z prekursorów lizyny + metioniny, mitochondrialny shuttle dla długołańcuchowych kwasów tłuszczowych (carnitine palmitoyltransferase I/II). Izolacja Gulewitsch + Krimberg 1905, Sigma-Tau 1985 FDA Rx na pierwotny niedobór karnityny; bodybuilding off-label od lat 90., mainstream OTC fat-burner od lat 2000. WADA: dozwolona, NADA Niemcy 2018 monitored powyżej 50 mg/kg IV-bolus.",
  "description": "L-Karnityna to czwartorzędowy związek amoniowy, który organizm ludzki syntetyzuje endogennie w ilości ~25 mg/dobę poprzez kaskadę enzymatyczną w wątrobie i nerkach z prekursorów lizyny i metioniny. Pierwotnie wyizolowana przez rosyjskich biochemików Gulewitsch i Krimberg w 1905 z tkanki mięśniowej (stąd nazwa 'carnitine' od 'caro/carnis' = mięso). Tylko izomer L jest biologicznie aktywny; izomer D jest enzymatycznie nieaktywny + sygnał kardiotoksyczny. Zatwierdzenie FDA w 1985 przez Sigma-Tau (włoska firma farma) dotyczyło wskazania Rx na pierwotny niedobór karnityny; off-label użycie w bodybuildingu zaczęło się w latach 90., a od lat 2000 mainstreamowa kategoria OTC 'fat-burner supplement'. Mechanizm opiera się na CoA-mediowanym mitochondrialnym transporcie długołańcuchowych kwasów tłuszczowych (LCFA) przez system shuttle carnitine palmitoyltransferase I/II (CPT-I/II) — jest to krok ograniczający tempo β-oksydacji. Stephens 2007 (Am J Physiol PMID 17331998), klasyczne badanie metodologii IV-clamp, wykazało, że supraphysjologiczne dawki doustne >1 g/dobę NIE podnoszą endogennego poziomu syntezy, ale przy ładowaniu przewlekłym (3-4 tygodnie, 2 g/dobę) z węglowodanami stężenie w tkance mięśniowej może wzrosnąć 2-3x dzięki insulin-stimulated muscle uptake. Doustna biodostępność jest niska (~15%), forma iniekcyjna IM/SC ma 100% biodostępność i jest 4-6x ekwiwalentna dawkowo wobec doustnej. WADA: 'dozwolona' na liście prohibited 2025, ale NADA Niemcy 2018 podniosły dawkowanie >50 mg/kg IV-bolus do kategorii monitorowanej (potencjalny kontekst marker doping krwi).",
  "keyInfo": [
    {
      "label": "Mechanizm działania",
      "value": "Mitochondrialny shuttle dla długołańcuchowych kwasów tłuszczowych mediowany CoA (CPT-I/II), krok ograniczający tempo β-oksydacji"
    },
    {
      "label": "Dawkowanie",
      "value": "Doustnie 500-2000 mg/dobę w 3 dawkach; IM/SC 1-2 g 2-3x/tydzień w cuttingu"
    },
    {
      "label": "Okres półtrwania",
      "value": "~15 godzin (substancja macierzysta), steady-state ładowania mięśni 3-4 tygodnie przewlekle"
    },
    {
      "label": "Początek działania",
      "value": "Doustnie 1-2 godziny (niska biodostępność ~15%); IM/SC 30-60 minut (100% biodostępność)"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (pierwotny niedobór karnityny), kategoria OTC suplementu globalnie. WADA: dozwolona, NADA Niemcy 2018 monitored powyżej 50 mg/kg IV-bolus."
    }
  ],
  "variantCount": 2,
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": "Kapsułka / tabletka doustna",
      "routeNote": "Wygodna codzienna forma — niski koszt, łatwa adherencja. Ładowanie przewlekłe 2 g/dobę + współspożycie węglowodanów podnosi stężenie w tkance mięśniowej 2-3x przez 3-4 tygodnie. Preferowana trasa dla protokołów początkujących i podtrzymujących.",
      "label": "Kapsułka doustna",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "Kategoria OTC suplementu globalnie (US, UE, HU, PL), zatwierdzone przez FDA Rx na pierwotny niedobór karnityny (Sigma-Tau Carnitor 1985).",
      "bioavailability": "~15% (niska — wyciek P-glikoproteinowy w przewodzie pokarmowym + straty pierwszego przejścia)",
      "onsetTime": "1-2 godziny (wchłanianie doustne); steady-state ładowania mięśni 3-4 tygodnie przewlekle",
      "halfLife": "~15 godzin",
      "halfLifeActive": "~15 godzin",
      "detectionWindow": "Akredytowane przez WADA LC-MS/MS NIE jest testem standardowym; ~1-2 tygodnie przy dawce przewlekłej wysokiej",
      "aromatization": "Nie aromatyzuje (nie jest sterydem — czwartorzędowy związek amoniowy).",
      "hepatotoxicity": "Niska — syntetyzowana endogennie, przewlekle doustnie <3 g/dobę bezpieczna wątrobowo.",
      "quality": {
        "pure": [
          "Tabletka/roztwór doustny Carnitor (Sigma-Tau) zatwierdzone przez FDA + 50+ marek suplementów OTC (NOW Foods, Jarrow Formulas, Doctor's Best) certyfikowane USP",
          "Forma Acetyl-L-Carnitine (ALCAR) jest przepuszczalna dla bariery krew-mózg, częsty suplement kognitywny OTC",
          "L-Carnitine L-Tartrate (LCLT) jest specyficzną dla ładowania mięśni formą OTC (Kraemer 2008 PMID 18204383)"
        ],
        "caution": [
          "Baseline TMAO (Koeth 2013 Nature Med PMID 23563705): >2 g/dobę przewlekle przez 6+ miesięcy to marker ryzyka sercowo-naczyniowego",
          "Działania niepożądane z przewodu pokarmowego: biegunka, nudności, rybi zapach ciała (emisja TMA z mikrobioty jelitowej powyżej 2 g/dobę)",
          "Przy Rx na niedoczynność tarczycy: L-Karnityna obniża obwodową konwersję T4 → T3 (Benvenga 2001 PMID 11518815)",
          "Wzrost INR przy warfarynie przy dawce przewlekłej (Martinez 2007 PMID 17449974)"
        ],
        "avoid": [
          "Poza Rx specyficznym dla pierwotnego niedoboru karnityny, supraphysjologiczne dawki doustne >3 g/dobę przewlekle — wzrost TMAO ryzyko sercowo-naczyniowe",
          "Pacjenci dializowani z krańcową niewydolnością nerek (ESRD): ryzyko kontaminacji izomerem D (unikać D,L-Carnitine OTC)",
          "Przy Rx na zaburzenia napadowe (przewlekła doustna L-Karnityna niesie rzadkie ryzyko indukcji napadów)",
          "Niewydolność nerek stadium 4-5 — wymagane dostosowanie dawki (obniżony klirens nerkowy)"
        ]
      },
      "indications": "Subtelne przesunięcie utleniania tłuszczu + ochrona glikogenu mięśniowego w cuttingu; ładowanie przewlekłe 3-4 tygodnie z węglowodanami (Wall 2011 PMID 21224234)",
      "dosing": "Typowy protokół: 2-4 g/dobę w 3 dawkach z posiłkami (współspożycie węglowodanów dla insulin-stimulated muscle uptake). Dawka startowa 500-1000 mg/dobę; próg efektywności przy ładowaniu przewlekłym 2 g/dobę.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 500, "medium": 2000, "high": 4000 },
        "unit": "mg/dzień",
        "note": "Doustnie 500-4000 mg/dzień podzielone na 3x z posiłkami (współspożycie węglowodanów dla wychwytu mięśniowego stymulowanego insuliną). Loading chroniczny 3-4 tygodnie dla steady-state stężenia mięśniowego. Trasa isFixedDose — wyświetlanie info-card, MiniCalc nie dotyczy."
      }
    },
    {
      "id": "aq",
      "routeId": "aq",
      "routeLabel": "Iniekcja IM/SC (fiolka wodna)",
      "routeNote": "Maksymalna biodostępność (100%) — pełna dawka trafia do krążenia vs ~15% doustnie. Protokół pre-workout zorientowany na wydajność: 500-1000 mg SC 30-60 minut przed treningiem. Ekwiwalent dawki ~4-6x doustnej; szybsze osiągnięcie steady-state w ciągu 1-2 tygodni.",
      "label": "Iniekcja IM/SC",
      "image": "/performance/water-vial.png",
      "defaultVialMg": 1000,
      "defaultBacMl": 5,
      "defaultDoseMcg": 500000,
      "legalStatus": "Tylko Rx (formulacja IM/SC), zatwierdzone przez FDA Carnitor IV/IM (Sigma-Tau) na pierwotny niedobór karnityny. UE + HU + PL tylko Rx.",
      "bioavailability": "~100% (IM/SC omija straty pierwszego przejścia)",
      "onsetTime": "30-60 minut (wchłanianie IM/SC)",
      "halfLife": "~15 godzin",
      "halfLifeActive": "~15 godzin",
      "detectionWindow": "Kategoria monitorowana NADA Niemcy 2018 powyżej 50 mg/kg IV-bolus; standardowe testowanie WADA NIE wykrywa",
      "aromatization": "Nie aromatyzuje (nie jest sterydem — czwartorzędowy związek amoniowy).",
      "hepatotoxicity": "Niska — syntetyzowana endogennie; IM/SC omija pierwsze przejście wątrobowe.",
      "quality": {
        "pure": [
          "Fiolka Carnitor IV/IM (Sigma-Tau) zatwierdzona przez FDA — Rx-grade ze źródła aptecznego",
          "Fiolka IM/SC z compounding pharmacy standaryzowana do 1 g/5 mL (200 mg/mL UE) lub 1 g/mL (USA)"
        ],
        "caution": [
          "Ból w miejscu iniekcji (PIP): vehicle czwartorzędowy amoniowy IM/SC często bolesny, rotacja IM deltoid/gluteal",
          "Ryzyko reakcji alergicznej z uwolnieniem histaminy (rzadkie): zalecana pierwsza dawka próbna 0.5 g IM/SC",
          "Przejściowe nadciśnienie post-injection (lokalne parasympatyczne rozszerzenie naczyń)",
          "UGL liquid carnitine: obowiązkowe źródło HPLC-testowane — udokumentowana wariancja dawki ±20%"
        ],
        "avoid": [
          "Sportowcy testowani WADA powyżej 50 mg/kg IV-bolus: kategoria monitorowana NADA Niemcy 2018",
          "Pacjenci dializowani z krańcową niewydolnością nerek (ESRD): ryzyko kontaminacji izomerem D",
          "Przy Rx na zaburzenia napadowe (IM/SC L-Karnityna niesie rzadkie ryzyko indukcji napadów)"
        ]
      },
      "indications": "Cutting zorientowany na wydajność — przewaga biodostępności + ekwiwalent dawki 4-6x wobec doustnej (kontekst kliniczny Rx Sigma-Tau Carnitor IM). Pre-workout SC 500-1000 mg 30-60 minut przed treningiem.",
      "dosing": "200-1000 mg/iniekcję IM/SC 2-3x/tydzień w cuttingu (długość cyklu 8-12 tygodni). Typowa dawka performance: 500 mg SC pre-workout. Standardowa ampułka Sigma-Tau Carnitor 1 g/5 mL.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 500, "high": 1000 },
        "unit": "mg/iniekcję",
        "note": "IM/SC 200-1000 mg/iniekcję 2-3x/tydzień cykl cutting (8-12 tygodni). Typowa ampułka 1 g (5 mL) — 500 mg = 2.5 mL SC pre-workout. Biodostępność 100%; steady-state szybsze niż doustnie."
      }
    }
  ],
  "mechanism": "L-Karnityna to czwartorzędowy związek amoniowy, który organizm ludzki syntetyzuje endogennie w ilości ~25 mg/dobę przez kaskadę enzymatyczną w wątrobie i nerkach z prekursorów lizyny + metioniny. Podstawową rolą jest mitochondrialny transport estrów CoA długołańcuchowych kwasów tłuszczowych (LCFA). Proces jest 3-etapowym shuttle: (1) carnitine palmitoyltransferase I (CPT-I) na powierzchni zewnętrznej błony mitochondrialnej konwertuje LCFA-CoA do LCFA-carnitine z uwolnieniem CoA + włączeniem karnityny; (2) carnitine-acylcarnitine translocase (CACT) transportuje LCFA-carnitine przez błonę wewnętrzną do macierzy; (3) carnitine palmitoyltransferase II (CPT-II) w macierzy konwertuje LCFA-carnitine z powrotem do LCFA-CoA + uwalnia wolną karnitynę. LCFA-CoA wchodzi następnie do kaskady β-oksydacji (acyl-CoA dehydrogenaza, enoyl-CoA hydrataza, hydroxyacyl-CoA dehydrogenaza, tiolaza) → acetyl-CoA → cykl TCA → ATP. CPT-I to krok ograniczający tempo β-oksydacji, regulowany cytoplazmatycznym malonyl-CoA jako inhibitorem allosterycznym (mediowany insuliną). Stephens 2007 (Am J Physiol PMID 17331998) IV-clamp methodology: dawki supraphysjologiczne doustne >1 g/dobę NIE podnoszą endogennego tempa syntezy w wątrobie + nerkach, ale ładowanie przewlekłe (3-4 tygodnie, 2 g/dobę) ze współspożyciem węglowodanów mediowanym insulin-stimulated muscle uptake może podnieść stężenie w tkance mięśniowej 2-3x. Bezpośrednie dowody utraty tłuszczu subtelne: Wall 2011 (J Physiol PMID 21224234) 6 miesięcy przewlekłe doustnie 2 g/dobę + współspożycie węglowodanów dało +11% energy output na cykloergometrze + efekt protein-sparing z treningiem oporowym. Pośredni kontekst insulin-sensitization: Bruckbauer 2011 (PMID 21900392) ko-suplementacja leucyna + L-Karnityna +25% glucose uptake w modelu szczura.",
  "legalStatus": "USA: zatwierdzona przez FDA w 1985 (Carnitor, Sigma-Tau — obecnie Leadiant Biosciences) Rx na pierwotny niedobór karnityny. Kategoria OTC suplementu globalnie (US, UE, HU, PL); forma iniekcji IM/SC tylko Rx. UE: zatwierdzona przez EMA. HU: OTC (kapsułka, roztwór) + Rx (IM/SC). PL: OTC + Rx (IM/SC). Lista WADA prohibited 2025: 'dozwolona' (nie ma na liście S0-S9). Kategoria monitorowana NADA Niemcy 2018 powyżej 50 mg/kg IV-bolus (potencjalny kontekst doping krwi).",
  "onsetTime": "Doustnie 1-2 godziny (niska biodostępność ~15%); IM/SC 30-60 minut (100% biodostępność); steady-state ładowania mięśni przy przewlekłym 3-4 tygodnie",
  "halfLife": "~15 godzin",
  "interactionsWith": [
    "warfarin",
    "levothyroxine",
    "valproic-acid",
    "metformin"
  ],
  "aromatization": "Nie aromatyzuje (nie jest sterydem — czwartorzędowy związek amoniowy, transporter mitochondrialny). Brak interakcji z CYP19, oś estrogenowa bezpośrednio nienaruszona.",
  "hepatotoxicity": "Niska — syntetyzowana endogennie; przewlekle doustnie <3 g/dobę bezpieczna wątrobowo. Wzrost trimethylamine-N-oxide (TMAO) przy długoterminowej przewlekłej wysokiej dawce (>2 g/dobę przez 6+ miesięcy) to marker ryzyka sercowo-naczyniowego (Koeth 2013 Nature Med PMID 23563705, kontrowersyjna replikacja Yancey 2018 PMID 30201668).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, czwartorzędowy związek amoniowy)",
  "bindingAffinity": "Brak wiązania z receptorem jądrowym; aktywność enzymatyczna CPT-I + CPT-II Km ~50 μM (wiązanie substratu, nie powinowactwo do receptora).",
  "detectionWindow": "Akredytowane przez WADA LC-MS/MS NIE jest testem standardowym (syntetyzowana endogennie). Kategoria monitorowana NADA Niemcy 2018 powyżej 50 mg/kg IV-bolus ze standaryzowanym protokołem testowym.",
  "benefits": [
    "Wspomaga mitochondrialny shuttle długołańcuchowych kwasów tłuszczowych (CPT-I/II) jako krok ograniczający tempo β-oksydacji",
    "Subtelne przesunięcie utleniania tłuszczu + ochrona glikogenu mięśniowego w cuttingu (Wall 2011 PMID 21224234)",
    "Ładowanie przewlekłe 3-4 tygodnie ze współspożyciem węglowodanów podnosi stężenie tkankowe 2-3x (Stephens 2007 PMID 17331998)",
    "Pośredni kontekst insulin-sensitization (Bruckbauer 2011 PMID 21900392 ko-suplementacja leucyna +25% glucose uptake model szczura)",
    "Efekt protein-sparing + wsparcie regeneracji przy treningu oporowym (Kraemer 2008 PMID 18204383 L-Carnitine L-Tartrate)",
    "Profil bezpieczeństwa endogennie-syntetyzowany, dozwolona WADA, OTC globalnie"
  ],
  "quickStart": [
    "Start cyklu doustnie 1000 mg/dobę w 3 dawkach z posiłkami (współspożycie węglowodanów dla insulin-stimulated muscle uptake)",
    "Ładowanie przewlekłe 3-4 tygodnie 2 g/dobę doustnie dla osiągnięcia steady-state w tkance mięśniowej",
    "Cutting IM/SC 1-2 g 2-3x/tydzień (długość cyklu 8-12 tygodni)",
    "Forma Acetyl-L-Carnitine (ALCAR) dla wsparcia kognitywnego przepuszczalnego dla bariery krew-mózg",
    "L-Carnitine L-Tartrate (LCLT) jest formą OTC specyficzną dla ładowania mięśni (Kraemer 2008)",
    "Baseline TMAO przed cyklem przy przewlekłym >2 g/dobę przez 6+ miesięcy",
    "Timing posiłków 30-60 minut bogato węglowodanowy (zapewnia insulin-stimulated muscle uptake)"
  ],
  "expectations": [
    {
      "label": "1-2. tydzień",
      "body": "Ładowanie początkowe: doustnie 1000-2000 mg/dobę w 3 dawkach. Subiektywna zmiana minimalna (niska biodostępność ~15%), wzrost stężenia tkankowego jeszcze niemierzalny. Działania niepożądane GI (biegunka, nudności) mogą wystąpić powyżej 2 g/dobę przewlekle."
    },
    {
      "label": "3-4. tydzień",
      "body": "Stężenie tkankowe rośnie 2-3x w steady-state (Stephens 2007 IV-clamp methodology). Kontekst cuttingu: subtelne przesunięcie utleniania tłuszczu mierzalne w deficycie kalorycznym + treningu oporowym, ale standalone efekt utraty tłuszczu minimalny. Na iniekcji IM/SC przewaga biodostępności jest odczuwalna."
    },
    {
      "label": "8-12. tydzień",
      "body": "Steady-state ładowania przewlekłego. Kontekst cuttingu: ochrona glikogenu mięśniowego + efekt protein-sparing (Wall 2011 PMID 21224234) ze współspożyciem węglowodanów. Kontrola baseline TMAO przy przewlekłym >2 g/dobę jako marker ryzyka sercowo-naczyniowego (Koeth 2013, kontrowersyjna replikacja Yancey 2018)."
    }
  ],
  "quality": {
    "pure": [
      "Carnitor (Sigma-Tau/Leadiant Biosciences) tabletka/roztwór doustny/fiolka IM/SC zatwierdzone przez FDA — Rx-grade ze źródła aptecznego",
      "50+ marek suplementów OTC (NOW Foods, Jarrow Formulas, Doctor's Best) certyfikowane USP, weryfikowane HPLC przez stronę trzecią",
      "Forma Acetyl-L-Carnitine (ALCAR) jest suplementem kognitywnym przepuszczalnym dla bariery krew-mózg",
      "L-Carnitine L-Tartrate (LCLT) jest specyficzną dla ładowania mięśni (Kraemer 2008 PMID 18204383)",
      "Propionyl-L-Carnitine (PLC) jest specyficzna sercowo-naczyniowo (kontekst Rx choroby tętnic obwodowych)"
    ],
    "caution": [
      "Baseline TMAO (Koeth 2013 Nature Med): >2 g/dobę przewlekle przez 6+ miesięcy to marker ryzyka sercowo-naczyniowego, kontrowersyjna replikacja Yancey 2018 PMID 30201668",
      "Działania niepożądane GI: biegunka, nudności, rybi zapach ciała (emisja TMA z mikrobioty jelitowej powyżej 2 g/dobę)",
      "Przy Rx na niedoczynność tarczycy: L-Karnityna obniża obwodową konwersję T4 → T3 (Benvenga 2001 PMID 11518815)",
      "Wzrost INR przy warfarynie przy dawce przewlekłej (Martinez 2007 PMID 17449974)",
      "Forma D,L-Carnitine OTC ma sygnał kardiotoksyczny — używać wyłącznie formy izomeru L",
      "Przy Rx kwasem walproinowym: przewlekły kontekst Rx niedoboru L-Karnityny (unikać nakładania suplementacji cyklicznej)"
    ],
    "avoid": [
      "Pacjenci dializowani z krańcową niewydolnością nerek (ESRD): ryzyko kontaminacji izomerem D (unikać D,L-Carnitine OTC)",
      "Przy Rx na zaburzenia napadowe (przewlekła doustna L-Karnityna niesie rzadkie ryzyko indukcji napadów)",
      "Niewydolność nerek stadium 4-5 — wymagane dostosowanie dawki (obniżony klirens nerkowy)",
      "Sportowcy testowani WADA powyżej 50 mg/kg IV-bolus: kategoria monitorowana NADA Niemcy 2018",
      "Ciąża + karmienie piersią: FDA Kategoria B — dawka suplementu bezpieczna; dawkowanie IM/SC nie zalecane bez indykacji Rx"
    ]
  },
  "interactions": [
    "Warfaryna — przewlekła dawka L-Karnityny może powodować wzrost INR (Martinez 2007 PMID 17449974)",
    "Levothyroxine (T4) — L-Karnityna obniża obwodową konwersję T4 → T3 (Benvenga 2001 PMID 11518815); monitorowanie dawki wymagane przy Rx niedoczynności tarczycy",
    "Kwas walproinowy — przewlekłe Rx może indukować niedobór L-Karnityny; suplementacja częsta w kontekście Rx",
    "Metformina — L-Karnityna + metformina synergistyczne dla glucose-uptake (Bruckbauer 2011 PMID 21900392 kontekst analogiczny)",
    "Acetyl-L-Carnitine (ALCAR) + kwas alfa-liponowy (ALA) — antyoksydacyjnie-synergistyczny stack mitochondrialnie-protective",
    "Kofeina + efedryna — addycyjne wsparcie termogeniczne + glucose-uptake; unikać przy wysokim BP/HR"
  ],
  "studies": [
    {
      "title": "New insights concerning the role of carnitine in the regulation of fuel metabolism in skeletal muscle",
      "authors": "Stephens FB, Constantin-Teodosiu D, Greenhaff PL.",
      "journal": "J Physiol. 2007;581(Pt 2):431-444.",
      "pmid": "17331998"
    },
    {
      "title": "Chronic oral ingestion of L-carnitine and carbohydrate increases muscle carnitine content and alters muscle fuel metabolism during exercise in humans",
      "authors": "Wall BT, Stephens FB, Constantin-Teodosiu D et al.",
      "journal": "J Physiol. 2011;589(Pt 4):963-973.",
      "pmid": "21224234"
    },
    {
      "title": "Intestinal microbiota metabolism of L-carnitine, a nutrient in red meat, promotes atherosclerosis",
      "authors": "Koeth RA, Wang Z, Levison BS et al.",
      "journal": "Nat Med. 2013;19(5):576-585.",
      "pmid": "23563705"
    },
    {
      "title": "L-carnitine L-tartrate supplementation favorably affects markers of recovery from exercise stress",
      "authors": "Kraemer WJ, Volek JS, French DN et al.",
      "journal": "J Strength Cond Res. 2003;17(3):455-462.",
      "pmid": "12930169"
    },
    {
      "title": "Effects of L-carnitine on weight loss and body composition: a meta-analysis of 37 randomized controlled clinical trials",
      "authors": "Talenezhad N, Mohammadi M, Ramezani-Jolfaie N et al.",
      "journal": "Clin Nutr ESPEN. 2020;37:9-23.",
      "pmid": "32359762"
    }
  ],
  "faq": [
    {
      "q": "Doustna vs IM/SC L-Karnityna — jaka jest ekwiwalencja dawki?",
      "a": "Biodostępność doustnej L-Karnityny wynosi ~15% (wyciek P-glikoproteinowy w przewodzie pokarmowym + straty pierwszego przejścia), natomiast formulacja IM/SC ma 100% biodostępności. Kliniczna ekwiwalencja dawki to ~4-6x stosunek doustna-IM/SC: 1 g IM/SC ≈ 4-6 g doustnie. Kontekst cuttingu: ładowanie przewlekłe 3-4 tygodnie doustnie 2 g/dobę podnosi stężenie tkankowe 2-3x ze współspożyciem węglowodanów mediowanym insulin-stimulated muscle uptake (Stephens 2007 PMID 17331998), natomiast IM/SC 1-2 g 2-3x/tydzień osiąga steady-state szybciej. Sigma-Tau Carnitor IM/SC w klinicznym kontekście Rx (pierwotny niedobór karnityny)."
    },
    {
      "q": "Bezpośrednie dowody utraty tłuszczu — co mówi meta-analiza?",
      "a": "Meta-analiza Talenezhad 2020 (Clin Nutr ESPEN PMID 32359762) na 37 RCT (n=2292) znalazła średnią utratę masy ~1.21 kg (CI 0.69-1.73) przy suplementacji L-Karnityną przez 8-24 tygodnie, głównie w populacji nadwagi + otyłości. Wielkość efektu jest subtelna, NIE jest standalone fat-burnerem — Wall 2011 (PMID 21224234) w kontekście współspożycia węglowodanów z treningiem oporowym pokazuje odczuwalny efekt protein-sparing + ochronę glikogenu mięśniowego. Kontekst cuttingu: w kombinacji ze stackiem AAS + deficytem kalorycznym + L-Karnityną przesunięcie utleniania tłuszczu jest subtelne, NIE mainstreamowy standalone fat-burner."
    },
    {
      "q": "Czy ryzyko sercowo-naczyniowe TMAO jest realne?",
      "a": "Koeth 2013 Nature Med (PMID 23563705), oryginalne badanie: chroniczna wysoka dawka L-Karnityny ze współspożyciem czerwonego mięsa mediowane emisją TMA przez mikrobiotę jelitową → wątrobowa konwersja TMAO mediowana FMO3 → wzrost markera miażdżycy (model szczura + kohorta 2595 zdarzeń sercowo-naczyniowych u ludzi). Yancey 2018 (PMID 30201668), kontrowersyjna replikacja: wzrost TMAO jest markerem ryzyka sercowo-naczyniowego, ale NIE driverem przyczynowym — analiza randomizacji Mendlowskiej wskazuje, że wzrost TMAO nie jest bezpośrednim czynnikiem ryzyka sercowo-naczyniowego. Relewancja kliniczna: przy przewlekłym doustnym L-Karnitynie >2 g/dobę przez 6+ miesięcy zalecane monitorowanie baseline TMAO, ale relacja przyczynowa jest kontrowersyjna. W oknie 4-6 tygodniowego cyklu cuttingu ryzyko minimalne."
    },
    {
      "q": "Status WADA — czy sportowiec może bezpiecznie używać?",
      "a": "Na liście WADA prohibited 2025 L-Karnityna jest w kategorii 'dozwolona' (nie jest na liście S0-S9). NADA Niemcy 2018 podniosło jednak dawkowanie >50 mg/kg IV-bolus do kategorii monitorowanej — to ~4 g IV bolus dla sportowca 80 kg, znacznie powyżej zakresu klinicznej dawki Rx. Standardowe dawki suplementu (doustnie 500-2000 mg/dobę) + IM/SC w cuttingu 1-2 g 2-3x/tydzień w standardowym kontekście sportowym są bezpieczne pod względem WADA. Kontekst wysokiej dawki IV bolus (marker doping krwi: sygnał wsparcia erytropoezy) najlepiej unikać poza wskazaniami klinicznymi ze względu na monitorowanie NADA."
    },
    {
      "q": "Skala insulin-sensitization + okno dawkowania?",
      "a": "Bruckbauer 2011 (PMID 21900392) pokazał +25% glucose uptake przy ko-suplementacji leucyna + L-Karnityna w modelu szczura. Dowody kliniczne na ludziach są skromniejsze: Mingrone 1999 PMID 10580247 + Galvano 2007 PMID 17449974 udokumentowały +10-15% wzrost indeksu wrażliwości na insulinę w populacji nadwagi + insulinoopornej przy przewlekłym doustnym 2-4 g/dobę przez 8-12 tygodni. Mechanizm jest pośredni: upregulacja utleniania kwasów tłuszczowych mediowana CPT-I obniża sygnał lipotoksyczności w mięśniach szkieletowych + wątrobie, co poprawia uwalnianie sygnalizacji receptora insuliny. W kontekście cuttingu deficyt kaloryczny + insulin-sensitization mediowana stackiem AAS NIE jest addycyjna z L-Karnityną — efekt wykrywalny głównie na baseline insulinoopornym."
    }
  ],
  "related": [
    "mots-c",
    "5-amino-1mq",
    "gw-501516"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 500,
      "medium": 1000,
      "high": 2000
    },
    "unit": "mg/dobę (doustnie)",
    "note": "Doustnie 500-2000 mg/dobę w 3 dawkach z posiłkami (współspożycie węglowodanów dla insulin-stimulated muscle uptake). Ładowanie przewlekłe 3-4 tygodnie dla osiągnięcia steady-state stężenia tkankowego. IM/SC 1-2 g 2-3x/tydzień w cuttingu (długość cyklu 8-12 tygodni, ekwiwalent dawki 4-6x wobec doustnej). Kontrola baseline TMAO przy przewlekłym >2 g/dobę przez 6+ miesięcy jako marker ryzyka sercowo-naczyniowego."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed startem cyklu",
      "markers": "Baseline TMAO (Koeth 2013), panel lipidowy (TC/LDL/HDL/TG), glukoza na czczo + HbA1c (kontekst insulin-sensitization), wolna karnityna + acylkarnityna w surowicy (screening niedoboru karnityny)",
      "purpose": "Baseline TMAO jako marker ryzyka sercowo-naczyniowego, panel lipidowy + homeostaza glukozy, screening endogennego poziomu karnityny dla wykluczenia przeciwwskazania pierwotnego niedoboru karnityny (paradoksalny kontekst Rx)"
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "4 tygodnie po starcie cyklu (steady-state ładowania przewlekłego)",
      "markers": "Follow-up TMAO (przy >2 g/dobę przewlekle), panel lipidowy, glukoza na czczo, wolna karnityna + acylkarnityna w surowicy",
      "purpose": "Sygnał wzrostu TMAO przy >2 g/dobę przewlekle (kontrowersyjnie-przyczynowy Koeth 2013 vs Yancey 2018), follow-up panelu lipidowego + homeostazy glukozy. NIE jest obowiązkowy poniżej 2 g/dobę doustnie."
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "4 tygodnie po końcu cyklu",
      "markers": "Regeneracja TMAO (powrót do baseline), panel lipidowy, glukoza na czczo",
      "purpose": "Weryfikacja regeneracji poziomu TMAO po cyklu, regeneracja baseline panelu lipidowego + homeostazy glukozy"
    }
  },
  "defaultVariant": "oral"
}
