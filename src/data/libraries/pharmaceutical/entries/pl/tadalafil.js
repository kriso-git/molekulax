// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.609Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "tadalafil",
  "name": "Tadalafil",
  "image": "/pharmaceutical/blister-yellow-almond.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Inhibitor PDE5 o długim okresie półtrwania (17,5 h). Zatwierdzony przez FDA dla zaburzeń erekcji (Cialis), łagodnego rozrostu prostaty (BPH) i tętniczego nadciśnienia płucnego (Adcirca).",
  "description": "Tadalafil to selektywny inhibitor PDE5 opracowany przez Lilly (Cialis, FDA 2003). Selektywnie hamując fosfodiesterazę-5, podnosi wewnątrzkomórkowe cGMP w mięśniach gładkich (ciało jamiste, prostata, tętniczki płucne), powodując rozszerzenie naczyń i relaksację. Kluczowa różnica między syldenafilem (Viagra, 4 h okres półtrwania) a tadalafilem (17,5 h) to długi czas działania: przydomek \"weekend pill\". Dzienne dawki 2,5 i 5 mg licencjonowane od 2008 r., umożliwiając tryb \"zawsze gotowy\". Wskazanie BPH otrzymało zatwierdzenie FDA w 2011 r. dla 5 mg dziennie: poprawa funkcji pęcherza podobna do alfa-blokerów (redukcja IPSS). Adcirca (40 mg/dobę) dla tętniczego nadciśnienia płucnego od 2009 r. (Galiè 2009 NEJM).",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "G04BE08"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx)"
    },
    {
      "label": "Mechanizm",
      "value": "Selektywne hamowanie PDE5, wzrost cGMP"
    },
    {
      "label": "Okres półtrwania",
      "value": "17,5 h (najdłuższy wśród PDE5i)"
    },
    {
      "label": "Początek",
      "value": "30-45 min (PRN), 5-7 dni (daily steady-state)"
    }
  ],
  "mechanism": "Selektywne hamowanie fosfodiesterazy-5 (PDE5), podnosząc wewnątrzkomórkowe cGMP w mięśniach gładkich ciała jamistego (prącie), prostaty i tętnic płucnych. Wyższe cGMP aktywuje kinazę białkową G, prowadząc do sekwestracji Ca²⁺ i relaksacji mięśni gładkich, wywołując rozszerzenie naczyń. Uwolnienie NO (tlenku azotu) podczas stymulacji seksualnej jest wymagane dla erekcji: efekt PDE5i pojawia się tylko przy stymulacji seksualnej, nie inicjując erekcji samodzielnie.",
  "legalStatus": "UE/PL: na receptę (Cialis, Adcirca, generyki). USA: FDA Rx, niekontrolowany. Formy generyczne od 2018 r. (wygaśnięcie patentu oryginatora). NIE bez recepty (vs UK: Viagra Connect OTC 2018, ale Cialis wciąż Rx).",
  "bioavailability": "Nieokreślona (etykieta FDA Cialis, sekcja 12.3)",
  "onsetTime": "30-45 min (PRN dosing), 5-7 days (daily 2.5/5 mg steady-state)",
  "halfLife": "17.5 h (parent compound, longest among PDE5 inhibitors)",
  "atcCode": "G04BE08",
  "prescriptionStatus": "Na receptę (Rx), urolog lub lekarz rodzinny może przepisać",
  "indications": [
    "Zaburzenia erekcji (ED, PRN 10-20 mg lub dziennie 2,5-5 mg)",
    "Łagodny rozrost prostaty (BPH), 5 mg dziennie (FDA 2011, dowody Stief)",
    "Wspólne leczenie ED + BPH (5 mg dziennie)",
    "Tętnicze nadciśnienie płucne (Adcirca, 40 mg dziennie, Galiè 2009 NEJM)"
  ],
  "contraindications": [
    "Jednoczesne stosowanie azotanów (bezwzględne, ryzyko ciężkiego hipotenzji)",
    "Ciężka hipotensja (SBP < 90), ciężkie nadciśnienie (SBP > 170, DBP > 100)",
    "Niedawne (< 90 dni) MI, niestabilna dławica, niewydolność serca NYHA III-IV",
    "Udar lub zagrażająca życiu arytmia w ciągu 6 miesięcy",
    "Ciężka niewydolność wątroby lub nerek"
  ],
  "commonSideEffects": [
    "Ból głowy (10-15%), zaczerwienienie twarzy (5-10%), dyspepsja (4-10%)",
    "Ból pleców i mialgia (3-8%, specyficzne dla tadalafilu, reakcja krzyżowa PDE11)",
    "Zatkany nos, zawroty głowy (3-5%)",
    "Zaburzenia widzenia (rzadkie, < 1%, reakcja krzyżowa PDE6 widzenie niebiesko-zielone)",
    "Ciężkie, rzadkie: priapizm (erekcja > 4 h, nagły), NAION (niearterietyczna niedokrwienna neuropatia nerwu wzrokowego)"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary metabolism)",
    "No significant CYP induction or inhibition"
  ],
  "crossMolInteractions": [
    "Azotany (nitrogliceryna, ISDN, ISMN): BEZWZGLĘDNE przeciwwskazanie, ciężka hipotensja + zgon",
    "Alfa-bloker (doksazosyna, tamsulozyna): ryzyko hipotensji, wymagana redukcja dawki",
    "Silny inhibitor CYP3A4 (ketokonazol, rytonawir): poziomy w osoczu mogą wzrosnąć 4-krotnie, maks. 5 mg/72 h",
    "Induktor CYP3A4 (ryfampicyna, karbamazepina): poziomy w osoczu mogą spaść, utrata efektu",
    "Riocyguat (stymulator sGC): kombinacja przeciwwskazana, ciężka hipotensja"
  ],
  "benefits": [
    "Długi czas działania (17,5 h okres półtrwania, 36 h okno efektu), wygodny timing",
    "Farmakokinetyka niezależna od jedzenia i alkoholu (vs syldenafil)",
    "Dzienne 2,5/5 mg tryb \"zawsze gotowy\", bardziej naturalny rytm seksualny",
    "Redukcja objawów BPH (IPSS) wraz z leczeniem ED (podwójne wskazanie)",
    "Poprawa wydolności funkcjonalnej w PAH (dystans 6MWT, Galiè 2009)"
  ],
  "quickStart": [
    "Wymagana stymulacja seksualna; NIE inicjuje erekcji samodzielnie",
    "Tryb PRN: 30-45 min przed aktywnością seksualną, maks. raz dziennie",
    "Tryb daily: 2,5-5 mg o tej samej porze, steady-state po 5-7 dniach",
    "BEZWZGLĘDNIE unikaj przy azotanach lub niedawnym MI (24-48 h przerwa po ostatnim azotanie)",
    "Erekcja > 4 h (priapizm) → opieka nagła (urolog)"
  ],
  "expectations": [
    {
      "label": "Pierwsze użycie PRN",
      "body": "Efekt zaczyna się po 30-45 min. Aktywny poziom utrzymywany przez 24-36 h. Skuteczność przy stymulacji seksualnej."
    },
    {
      "label": "Daily dzień 5-7 (2,5-5 mg)",
      "body": "Steady-state w osoczu osiągnięty. Spontaniczna zdolność erekcyjna, bardziej naturalny rytm. Redukcja IPSS dla objawów BPH."
    },
    {
      "label": "3-6 miesięcy (przewlekłe daily)",
      "body": "Udokumentowana poprawa funkcji śródbłonka (Aversa 2009), korzyść CV u pacjentów cukrzycowych z ED. Roczna ocena BP i ryzyka CV."
    }
  ],
  "quality": {
    "pure": [
      "Lilly Cialis (oryginator), United Therapeutics Adcirca dla PAH",
      "Formy generyczne od 2018 r.: Sandoz, Krka, Teva, Mylan biorównoważne",
      "Produkty \"Cialis\" OTC na czarnym rynku są podrabiane (zmienne poziomy API, częste zanieczyszczenia, ostrzeżenie FDA)"
    ],
    "caution": [
      "Stratyfikacja ryzyka CV przed wprowadzeniem tadalafilu (BP, EKG, tolerancja wysiłku)",
      "Ból pleców i mialgia (reakcja krzyżowa PDE11), zwykle łagodne i przejściowe",
      "Ryzyko NAION (utrata wzroku w jednym oku), natychmiastowa konsultacja okulistyczna",
      "Utrata słuchu (rzadkie): natychmiastowa konsultacja ENT"
    ],
    "avoid": [
      "Jakiekolwiek azotany (organiczne lub azotyn amylu \"popper\")",
      "Riocyguat (stymulator sGC)",
      "Niedawne (< 90 dni) MI, niestabilna dławica, NYHA III-IV",
      "Ciężka hipotensja, ciężka niewydolność wątroby lub nerek",
      "Wcześniejsza nietętnicza niedokrwienna neuropatia nerwu wzrokowego (NAION) w jakimkolwiek oku — ryzyko utraty wzroku indukowanej PDE5i",
      "Niekontrolowane nadciśnienie (>170/100 mmHg) lub objawowa hipotensja (<90/50 mmHg)",
      "Udar lub zagrażająca życiu arytmia w ciągu ostatnich 6 miesięcy",
      "Wywiad nagłej utraty słuchu w trakcie stosowania PDE5i"
    ]
  },
  "interactions": [
    "Alfa-bloker (doksazosyna, tamsulozyna): ryzyko hipotensji, można łączyć w niskich dawkach",
    "Leki przeciwnadciśnieniowe (ACEi, ARB, CCB, beta-bloker): mała addytywna hipotensja, zwykle dobrze tolerowana",
    "Inne PDE5i (syldenafil, wardenafil): NIE łączyć (redundantny mechanizm)",
    "Alkohol: umiarkowane spożycie tolerowane, nadmiar może zwiększyć ryzyko hipotensji ortostatycznej",
    "Jedzenie: BRAK wpływu na wchłanianie (vs syldenafil, gdzie tłusty posiłek zmniejsza)"
  ],
  "studies": [
    {
      "title": "Efficacy and safety of tadalafil for the treatment of erectile dysfunction: results of integrated analyses",
      "authors": "Brock GB, McMahon CG, Chen KK et al.",
      "journal": "J Urol. 2002;168(4 Pt 1):1332-6.",
      "pmid": "12352386"
    },
    {
      "title": "The efficacy and safety of tadalafil: an update",
      "authors": "Carson CC, Rajfer J, Eardley I et al.",
      "journal": "BJU Int. 2004;93(9):1276-81.",
      "pmid": "15180631"
    },
    {
      "title": "Efficacy and safety of tadalafil for once-daily use in the treatment of erectile dysfunction",
      "authors": "Porst H, Giuliano F, Glina S et al.",
      "journal": "Eur Urol. 2006;50(2):351-9.",
      "pmid": "16469523"
    },
    {
      "title": "Tadalafil for treatment of pulmonary arterial hypertension (PHIRST)",
      "authors": "Galiè N, Brundage BH, Ghofrani HA et al.",
      "journal": "Circulation. 2009;119(22):2894-903.",
      "pmid": "19470885"
    },
    {
      "title": "Tadalafil 5 mg once daily improves lower urinary tract symptoms suggestive of BPH (long-term study)",
      "authors": "McVary KT, Roehrborn CG, Kaminetsky JC et al.",
      "journal": "J Urol. 2007;177(4):1401-7.",
      "pmid": "17382741"
    },
    {
      "title": "Endothelial function improvement after chronic tadalafil in diabetic men with erectile dysfunction",
      "authors": "Aversa A, Vitale C, Volterrani M et al.",
      "journal": "Eur Heart J. 2009;30(7):865-72.",
      "pmid": "18820322"
    },
    {
      "title": "Comparison of tadalafil and sildenafil in patient preference and effects",
      "authors": "Eardley I, Mirone V, Montorsi F et al.",
      "journal": "BJU Int. 2005;96(9):1323-32.",
      "pmid": "16287456"
    }
  ],
  "faq": [
    {
      "q": "Jaka jest różnica między tadalafilem (Cialis) a syldenafilem (Viagra)?",
      "a": "Okres półtrwania: tadalafil 17,5 h (okno 36 h), syldenafil 4 h (4-6 h). Wrażliwość na jedzenie: tadalafil niezależny, syldenafil zmniejszony przez tłusty posiłek. Tryb daily: tadalafil 2,5-5 mg licencjonowany, syldenafil PRN-only. Działania niepożądane: tadalafil więcej bólu pleców/mialgii (PDE11), syldenafil więcej zaburzeń widzenia (PDE6). Skuteczność podobna (~70% pacjentów ED), preferencja często napędzana stylem życia."
    },
    {
      "q": "Co oznacza tryb daily 2,5/5 mg \"zawsze gotowy\"?",
      "a": "Dzienne 2,5 lub 5 mg tadalafilu osiąga steady-state w osoczu po 5-7 dniach, umożliwiając aktywność seksualną w dowolnym momencie bez timingu PRN. Bardziej naturalne i spontaniczne życie seksualne, brak potrzeby planowanej tabletki. Tadalafil jest jedynym PDE5i licencjonowanym na dawkowanie dzienne (syldenafil/wardenafil PRN-only). Przy objawach BPH (5 mg dziennie) podwójne wskazanie: ED + BPH leczone jedną tabletką."
    },
    {
      "q": "Czym jest priapizm i co zrobić?",
      "a": "Priapizm = bolesna erekcja trwająca > 4 h, nawet bez stymulacji seksualnej. Rzadkie przy PDE5i (< 0,1%), ale STAN NAGŁY: obstrukcja naczyniowa i przedłużone niedokrwienie powodują niedobór tlenu w ciele jamistym, prowadząc do trwałego uszkodzenia tkanki i impotencji po 6-24 h. NATYCHMIAST zwróć się o urologiczną opiekę nagłą. Profilaktyka: niższa dawka (5-10 mg), świadomość innych czynników (anemia sierpowata, białaczka, kokaina)."
    },
    {
      "q": "Jak tadalafil leczy objawy BPH?",
      "a": "Dzienne 5 mg tadalafilu rozluźnia mięśnie gładkie prostaty i pęcherza moczowego przez wzrost cGMP, zmniejszając objawy dolnych dróg moczowych (LUTS) w BPH: słaby strumień, częste oddawanie moczu, nokturia. RCT McVary 2007 (PMID 17382741) wykazało redukcję IPSS (International Prostate Symptom Score) o 6-7 punktów w 12 tygodni. Skuteczność podobna do alfa-blokerów (tamsulozyna, doksazosyna), ale unikalne wskazanie tadalafilu z ED: podwójna korzyść z jednym lekiem."
    },
    {
      "q": "Czy długoterminowe stosowanie tadalafilu jest niebezpieczne?",
      "a": "Wg 5-letniego otwartego Carson 2004 (BJU Int) i późniejszych badań obserwacyjnych, długoterminowe stosowanie tadalafilu jest bezpieczne, bez kumulujących się poważnych działań niepożądanych. Badanie funkcji śródbłonka Aversa 2009 pokazuje, że przewlekła dawka dzienna daje KORZYŚĆ CV u mężczyzn cukrzycowych z ED (plejotropia kardiometaboliczna). Brak farmakologicznej zależności lub tolerancji. Jedyne trwałe ryzyka to NAION (utrata wzroku) i priapizm, oba rzadkie. Zalecana roczna kontrola CV i wzroku."
    }
  ],
  "related": [
    "atorvastatin",
    "finasteride"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2.5,
      "medium": 5,
      "high": 20
    },
    "unit": "mg",
    "note": "Niska (2,5 mg dziennie): początek trybu daily ED lub redukcja u starszych/z niewydolnością nerek. Średnia (5 mg dziennie): standard daily ED lub BPH (wskazanie FDA 2011) lub ED+BPH podwójnie. Wysoka (20 mg PRN): ED na żądanie, maks. raz dziennie, 30-45 min przed aktywnością. Nigdy nie łączyć z azotanem."
  }
}
