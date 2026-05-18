// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.609Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "sertralin",
  "name": "Sertralin",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Selektywny inhibitor wychwytu zwrotnego serotoniny (SSRI), lek pierwszego rzutu Rx dla MDD i zaburzeń lękowych. Metaanaliza Cipriani 2018 wykazała najkorzystniejszy stosunek skuteczności do tolerancji.",
  "description": "Sertralina to antydepresant SSRI opracowany przez Pfizer (Zoloft, FDA 1991). Selektywne hamowanie SERT (transporter serotoniny) podnosi serotoninę synaptyczną, wywołując efekt antydepresyjny przez 2-6 tygodni poprzez desensytyzację postsynaptycznych receptorów 5-HT1A. Metaanaliza sieciowa Cipriani 2018 (Lancet PMID 29477251) z 21 antydepresantów i 116 477 pacjentów zidentyfikowała sertralinę jako jedną z najlepszych opcji pierwszego rzutu pod względem skuteczności-tolerancji. Wskazania FDA: MDD, OCD, zaburzenia paniczne, PTSD, lęk społeczny (SAD), przedmiesiączkowe zaburzenie dysforyczne (PMDD). Off-label: GAD, uporczywe zaburzenie depresyjne, BDD.",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "N06AB06"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx)"
    },
    {
      "label": "Mechanizm",
      "value": "Hamowanie SERT (SSRI), łagodna aktywność DAT"
    },
    {
      "label": "Okres półtrwania",
      "value": "~26 h (metabolit N-desmetylowy 62-104 h)"
    },
    {
      "label": "Początek",
      "value": "2-6 tygodni (pełna odpowiedź antydepresyjna)"
    }
  ],
  "mechanism": "Selektywne hamowanie SERT (transporter 5-HT) podnosi synaptyczną serotoninę. Ostra blokada SERT jest natychmiastowa, ale efekt kliniczny pojawia się w 2-6 tygodniu przez desensytyzację postsynaptycznych autoreceptorów 5-HT1A. Umiarkowana aktywność DAT (transporter dopaminy) odróżnia ją od innych SSRI i może przyczyniać się do mniej sedującego profilu.",
  "legalStatus": "UE/PL: na receptę (Zoloft, Stimuloton, Asentra, Serlift, generyki). USA: FDA Rx, niekontrolowany. Formy generyczne szeroko dostępne (patent oryginatora wygasł 2006). Brak potencjału nadużywania.",
  "onsetTime": "2-6 weeks (full antidepressant response), 1-2 weeks (early efficacy signal)",
  "halfLife": "~26 h (parent), N-desmethylsertraline metabolite 62-104 h",
  "atcCode": "N06AB06",
  "prescriptionStatus": "Na receptę (Rx), psychiatra lub lekarz rodzinny może przepisać",
  "indications": [
    "Duża depresja (MDD)",
    "Zaburzenie obsesyjno-kompulsyjne (OCD)",
    "Zaburzenie paniki (PD), z agorafobią lub bez",
    "Zespół stresu pourazowego (PTSD)",
    "Lęk społeczny (SAD), przedmiesiączkowe zaburzenie dysforyczne (PMDD)"
  ],
  "contraindications": [
    "Jednoczesne lub w ciągu 14 dni stosowanie MAOi (ryzyko zespołu serotoninowego)",
    "Jednoczesne stosowanie pimozydu (wydłużenie QT, arytmia komorowa)",
    "Znana nadwrażliwość na sertralinę, wcześniejszy zespół serotoninowy",
    "Ciężka niewydolność wątroby (wymagana redukcja dawki, Child-Pugh B-C)"
  ],
  "commonSideEffects": [
    "GI: nudności (20-25%), biegunka (15-20%), początkowe, zwykle ustępują w 1-2 tygodnie",
    "Dysfunkcje seksualne (15-30%): spadek libido, opóźniony wytrysk, anorgazmia",
    "Pocenie się (8-10%), drżenie (5-10%), zawroty głowy (5-8%)",
    "Zaburzenia snu: początkowo bezsenność, później możliwa sedacja; pora dawkowania regulowana",
    "Ciężkie, rzadkie: zespół serotoninowy (hipertermia, klonus, nadaktywne odruchy), wzrost myśli samobójczych < 25 lat (ostrzeżenie FDA boxed), SIADH-hiponatremia (starsze kobiety), wydłużenie QT"
  ],
  "cyp450": [
    "CYP2D6 substrate (primary)",
    "CYP3A4, CYP2B6, CYP2C9, CYP2C19 substrates (minor)",
    "Mild CYP2D6 inhibitor (clinical relevance moderate)"
  ],
  "crossMolInteractions": [
    "MAOi (selegilina, fenelzyna, linezolid antybiotyk): BEZWZGLĘDNE przeciwwskazanie, zespół serotoninowy",
    "Inne serotoninergiczne (tramadol, tryptany, MDMA, kokaina, dekstrometorfan): zwiększone ryzyko, ostrożna kombinacja",
    "Warfaryna: 8% wzrost INR, monitorować",
    "NSAID, antytrombotyczne: zwiększone ryzyko krwawienia GI",
    "Alkohol: zwiększona sedacja, unikać"
  ],
  "benefits": [
    "Remisja MDD ~40-50% (vs placebo ~30%) po 8-12 tygodniach",
    "Redukcja objawów OCD i PD (udokumentowana w skalach Y-BOCS i PDSS)",
    "Poprawa głównego zespołu PTSD (intruzyjne, hipereaktywność, unikanie)",
    "Synergistyczny efekt w połączeniu z psychoterapią (CBT)",
    "Generyczny, przystępny cenowo, długoterminowe dane bezpieczeństwa (30+ lat)"
  ],
  "quickStart": [
    "Powolna titracja: 25 mg/dzień przez 7 dni, potem 50 mg/dzień (dawka docelowa w MDD)",
    "Przy OCD lub cięższych objawach można zwiększyć do 100-200 mg/dzień",
    "Rano lub wieczorem (wg indywidualnego wzorca snu), z jedzeniem lub bez",
    "Efekt po 2-6 tygodniach, nie przerywaj niecierpliwie",
    "Odstawienie: powolne zmniejszanie (4-8 tygodni), unikając zespołu odstawiennego"
  ],
  "expectations": [
    {
      "label": "Tygodnie 1-2",
      "body": "Działania niepożądane GI (nudności, biegunka) najczęstsze. Efekt antydepresyjny jeszcze nie mierzalny. Bezsenność lub sedacja możliwe, regulacja pory dawki."
    },
    {
      "label": "Tygodnie 2-6",
      "body": "Odpowiedź antydepresyjna się rozwija. Śledzenie PHQ-9 lub HAM-D. Jeśli brak poprawy (50% redukcja objawów) po 6 tygodniach, rozważ eskalację dawki lub zmianę."
    },
    {
      "label": "Miesiące 6-12 (kontynuacja)",
      "body": "Po odpowiedzi ostrej, 6-12 miesięczna faza kontynuacji dla prewencji nawrotu. Pierwszy epizod MDD: całe leczenie 9-12 miesięcy. Nawracający MDD: dłuższa terapia podtrzymująca."
    }
  ],
  "quality": {
    "pure": [
      "Pfizer Zoloft (oryginator), generyki (Stimuloton, Asentra, Serlift, Sertralina Krka) biorównoważne",
      "25, 50, 100 mg tabletek standardowo, dostępna też forma roztworu"
    ],
    "caution": [
      "Ostrzeżenie FDA boxed: zwiększone myśli samobójcze < 25 lat, ścisłe monitorowanie w pierwszych tygodniach",
      "Zespół odstawienny: zawroty, GI, drażliwość, doznanie \"brain-zap\"; wymagane powolne zmniejszanie",
      "Choroba afektywna dwubiegunowa: sam SSRI może wywołać manię, wymagany stabilizator nastroju",
      "SIADH-hiponatremia (starsze kobiety), ryzyko wydłużenia QT u wybranych pacjentów"
    ],
    "avoid": [
      "Aktywne lub w ciągu 14 dni MAOi (selegilina, linezolid)",
      "Pimozyd (wydłużenie QT)",
      "Długoterminowa kombinacja z innymi silnymi serotoninergicznymi (tramadol, MDMA)",
      "Linezolid lub dożylny błękit metylenowy (działanie MAOI, ryzyko zespołu serotoninowego)",
      "Ciężka niewydolność wątroby (Child-Pugh C) — znacząco zmniejszony klirens",
      "Jednoczesne stosowanie disulfiramu z postacią doustnego koncentratu (zawartość etanolu)"
    ]
  },
  "interactions": [
    "CBT (terapia poznawczo-behawioralna): efekt synergistyczny, złoty standard",
    "Bupropion (NDRI): może być dodany przy dysfunkcjach seksualnych indukowanych SSRI",
    "Benzodiazepina (lorazepam, klonazepam): krótkoterminowy pomost lękowy, unikaj długoterminowo",
    "Lit, kwetiapina: strategia augmentacji w MDD opornym na leczenie",
    "Pregabalina, gabapentyna: możliwa augmentacja GAD"
  ],
  "studies": [
    {
      "title": "Comparative efficacy and acceptability of 21 antidepressant drugs for major depressive disorder",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Evaluation of outcomes with citalopram for depression using measurement-based care in STAR*D",
      "authors": "Trivedi MH, Rush AJ, Wisniewski SR et al.",
      "journal": "Am J Psychiatry. 2006;163(1):28-40.",
      "pmid": "16390886"
    },
    {
      "title": "Sertraline pharmacokinetics and dosing in depression",
      "authors": "Hiemke C, Härtter S.",
      "journal": "Pharmacol Ther. 2000;85(1):11-28.",
      "pmid": "10674711"
    },
    {
      "title": "Treatment of PTSD: a randomized trial of sertraline",
      "authors": "Brady K, Pearlstein T, Asnis GM et al.",
      "journal": "JAMA. 2000;283(14):1837-44.",
      "pmid": "10770145"
    },
    {
      "title": "Sertraline for OCD: a multicenter, double-blind, placebo-controlled trial",
      "authors": "Kronig MH, Apter J, Asnis G et al.",
      "journal": "J Clin Psychopharmacol. 1999;19(2):172-6.",
      "pmid": "10211919"
    },
    {
      "title": "Antidepressants and the risk of suicidal behaviors (FDA pediatric review)",
      "authors": "Hammad TA, Laughren T, Racoosin J.",
      "journal": "Arch Gen Psychiatry. 2006;63(3):332-9.",
      "pmid": "16520440"
    },
    {
      "title": "Discontinuation syndrome and SSRIs: a systematic review",
      "authors": "Fava GA, Gatti A, Belaise C et al.",
      "journal": "Psychother Psychosom. 2015;84(2):72-81.",
      "pmid": "25721705"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego efekt antydepresyjny zajmuje 2-6 tygodni?",
      "a": "Blokada SERT natychmiast podnosi synaptyczną serotoninę, ale początkowa aktywacja autoreceptorów 5-HT1A HAMUJE postsynaptyczne uwalnianie serotoniny. Dopiero gdy te autoreceptory desensytyzują się przez 2-6 tygodni, sygnalizacja serotoninowa pozostaje trwale podwyższona, wywołując kliniczny efekt antydepresyjny. Dlatego nie należy przerywać leczenia wcześniej."
    },
    {
      "q": "Co oznacza ostrzeżenie FDA boxed < 25 lat?",
      "a": "Pediatryczna metaanaliza FDA 2004 (Hammad 2006 PMID 16520440) wykazała, że leczenie SSRI w pierwszych tygodniach powoduje ~1,5x wzrost względnego ryzyka myśli/zachowań samobójczych ponad placebo u pacjentów <25 lat. Ryzyko bezwzględne pozostaje niskie. Mitygacja: bliska obserwacja psychiatryczna w pierwszych 4-6 tygodniach, włączenie rodziny, plan bezpieczeństwa. U <18 lat sertralina jest dopuszczona w UE dla OCD; dla MDD tylko fluoksetyna."
    },
    {
      "q": "Czym jest zespół odstawienny?",
      "a": "Objawy pojawiające się 24-72 h po nagłym odstawieniu sertraliny (i innych SSRI): zawroty głowy, nudności, ból głowy, drażliwość, doznanie \"brain-zap\" (parestezje typu wstrząsu elektrycznego), zaburzenia GI. Zwykle ustępują w 1-2 tygodnie. Profilaktyka: powolne zmniejszanie przez 4-8 tygodni (50 → 25 → 12,5 → 0 mg). NIE to samo co uzależnienie: brak więzi psychologicznej, tylko farmakologiczna readaptacja."
    },
    {
      "q": "Co mogę zrobić z dysfunkcjami seksualnymi?",
      "a": "Dysfunkcje seksualne indukowane SSRI (spadek libido, opóźniony wytrysk, anorgazmia) mogą się utrzymywać z 15-30% częstością. Strategie: (1) Redukcja dawki, (2) Augmentacja bupropionem (mechanizm NDRI równoważy efekt seksualny SSRI), (3) Zmiana: bupropion, mirtazapina, wortioksetyna mają mniejszy wpływ seksualny, (4) Drug holiday (zwykle niezalecane), (5) Inhibitor PDE5 (syldenafil, tadalafil) może być łączony dla ED."
    },
    {
      "q": "Jak długo powinienem brać sertralinę?",
      "a": "Wg wytycznych APA i NICE: pierwszy epizod MDD przynajmniej 6-12 miesięcy po remisji. Nawracające MDD (2+ epizody) lub ciężki pierwszy epizod: 2-5 lat lub bezterminowa terapia podtrzymująca. OCD/PTSD zwykle dłuższa terapia. Odstawienie w koordynacji z lekarzem przez powolne zmniejszanie. Długoterminowe stosowanie bezpieczne wg obecnych danych."
    }
  ],
  "related": [
    "bupropion",
    "modafinil"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start)",
        "dose": "25"
      },
      {
        "phase": "Tygodnie 2-3",
        "dose": "50"
      },
      {
        "phase": "Tygodnie 4-6 (jeśli potrzeba)",
        "dose": "100"
      },
      {
        "phase": "Cel OCD/ciężki MDD",
        "dose": "150"
      },
      {
        "phase": "Maks. dawka",
        "dose": "200"
      }
    ],
    "unit": "mg/nap",
    "note": "MDD/PTSD/PD: dawka docelowa 50-100 mg/dzień. OCD/ciężki MDD: 150-200 mg/dzień. Powolna eskalacja dla tolerancji GI. Rano lub wieczorem (wg wzorca snu). Efekt po 2-6 tygodniach. Nigdy nie przerywaj nagle — powolne zmniejszanie przez 4-8 tygodni."
  }
}
