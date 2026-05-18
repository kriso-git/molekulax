// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.610Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "bupropion",
  "name": "Bupropion",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Inhibitor wychwytu zwrotnego norepinefryny-dopaminy (NDRI), atypowy antydepresant. Wskazania: MDD, sezonowe zaburzenia afektywne, rzucenie palenia (Zyban). Bez dysfunkcji seksualnych, minimalnie sedujący.",
  "description": "Bupropion to atypowy antydepresant opracowany przez GlaxoSmithKline (Wellbutrin, FDA 1989). Jego mechanizm NDRI (inhibitor wychwytu zwrotnego norepinefryny-dopaminy) i antagonisty receptora nikotynowego odróżnia go od SSRI/SNRI: brak dysfunkcji seksualnych ani przyrostu masy, brak sedacji, wspiera rzucanie palenia (marka Zyban, FDA 1997). Wskazania FDA: MDD, sezonowe zaburzenia afektywne (SAD), rzucenie palenia. Badanie Jorenby 1999 (NEJM PMID 10080847) wykazało roczną abstynencję 30,3% na bupropion+plaster nikotynowy vs 16,4% placebo. Metaanaliza Hewett 2010 z 6 badań MDD wykazała skuteczność porównywalną z SSRI, lepszą tolerancję.",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "N06AX12"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx)"
    },
    {
      "label": "Mechanizm",
      "value": "NDRI + antagonista receptora nikotynowego"
    },
    {
      "label": "Okres półtrwania",
      "value": "~21 h (metabolit hydroksybupropion 20-37 h)"
    },
    {
      "label": "Początek",
      "value": "1-2 tygodnie (motywacja, koncentracja), 4-6 tygodni (pełny efekt AD)"
    }
  ],
  "mechanism": "Umiarkowane hamowanie wychwytu zwrotnego norepinefryny i dopaminy (NDRI, ~3x selektywność DAT/NET vs SERT), plus antagonizm receptorów nikotynowych neuronalnych (α3β2, α4β2). Blokada nikotynowa wyjaśnia efekt rzucania palenia: zmniejsza dysforyczny komponent abstynencji nikotynowej. Aktywny metabolit (hydroksybupropion) podobnie aktywny, z formacją katalizowaną przez CYP2B6 wykazującą dużą zmienność międzyosobniczą.",
  "legalStatus": "UE/PL: na receptę (Wellbutrin, Zyban rzucanie palenia, generyki). USA: FDA Rx, niekontrolowany. Standardowe formy SR (przedłużone uwalnianie) i XL (rozszerzone uwalnianie). Formy generyczne szeroko dostępne.",
  "bioavailability": "Nieokreślone bezwzględnie (brak postaci IV); szybkie wchłanianie doustne, Tmax ~3 h — etykieta FDA Wellbutrin",
  "onsetTime": "1-2 weeks (motivation, focus, energy), 4-6 weeks (full antidepressant response)",
  "halfLife": "~21 h (parent); hydroxybupropion metabolite 20-37 h, similar activity",
  "atcCode": "N06AX12",
  "prescriptionStatus": "Na receptę (Rx), przepisywany dla MDD i rzucania palenia",
  "indications": [
    "Duża depresja (MDD), szczególnie z niską motywacją/anergią",
    "Sezonowe zaburzenia afektywne (SAD)",
    "Rzucenie palenia (Zyban, FDA 1997)",
    "Augmentacja dysfunkcji seksualnych indukowanych SSRI (off-label)",
    "ADHD (off-label, druga linia po stymulantach)"
  ],
  "contraindications": [
    "Wywiad zaburzeń drgawkowych (padaczka) lub znana predyspozycja",
    "Zaburzenia odżywiania (bulimia, anoreksja) — podwyższone ryzyko drgawek",
    "Ostra abstynencja alkoholowa lub benzodiazepinowa (ryzyko drgawek)",
    "Jednoczesne lub w ciągu 14 dni MAOi (przełom nadciśnieniowy)"
  ],
  "commonSideEffects": [
    "Bezsenność (15-20%), suchość w ustach (10-15%), ból głowy (10%)",
    "Pobudzenie, zwiększony niepokój (5-10%) — głównie w pierwszych tygodniach",
    "Podwyższenie ciśnienia krwi (umiarkowane, zależne od dawki)",
    "Drżenie, pocenie się, utrata wagi (5-8%)",
    "Ciężkie, rzadkie: drgawki (0,1% przy dawce standardowej, 0,4% przy 450 mg — ZALEŻNE OD DAWKI), objawy psychotyczne, mania (u pacjentów BD)"
  ],
  "cyp450": [
    "CYP2B6 substrate (primary metabolism)",
    "CYP2D6 inhibitor (strong, clinically significant)",
    "Multiple CYP interactions"
  ],
  "crossMolInteractions": [
    "MAOi (selegilina, fenelzyna, linezolid): BEZWZGLĘDNE przeciwwskazanie, przełom nadciśnieniowy",
    "Substraty CYP2D6 (metoprolol, tamoksyfen, kodeina, risperidon): poziomy w osoczu mogą wzrosnąć",
    "Inhibitory CYP2B6 (tyklopidyna, klopidogrel): AUC bupropionu może wzrosnąć, ryzyko drgawek",
    "Alkohol: obniża próg drgawkowy, unikaj",
    "Tramadol, teofilina, trazodon: obniżają próg drgawkowy, ostrożna kombinacja"
  ],
  "benefits": [
    "Remisja MDD podobna do SSRI (Hewett 2010 meta), ale z MNIEJSZĄ dysfunkcją seksualną",
    "NEUTRALNY dla wagi lub utrata wagi (vs SSRI częsty przyrost masy)",
    "Rzucenie palenia 30,3% rocznej abstynencji (Jorenby 1999 NEJM)",
    "Nie sedujący, poprawia motywację i energię",
    "Jako augmentacja SSRI, łagodzi działania seksualne"
  ],
  "quickStart": [
    "Zacznij od formy SR: 150 mg/dzień (rano) przez 4 dni, potem 150 mg 2x/dzień",
    "Forma XL: 150 mg/dzień rano przez 7 dni, potem 300 mg/dzień rano",
    "NIE przyjmuj wieczorem (ryzyko bezsenności) — ostatnia dawka do 17:00",
    "Maks. SR 400 mg/dzień, XL 450 mg/dzień — powyżej tego ryzyko drgawek rośnie WYKŁADNICZO",
    "NIE kruszyć tabletki (ryzyko dose-dumping formy SR/XL)"
  ],
  "expectations": [
    {
      "label": "Tygodnie 1-2",
      "body": "Poprawa motywacji i energii już zauważalna. Suchość w ustach, łagodny wzrost lęku. Aby złagodzić bezsenność, dostosuj porę (rano)."
    },
    {
      "label": "Tygodnie 4-6",
      "body": "Rozwija się pełna odpowiedź antydepresyjna. Śledzenie PHQ-9 lub HAM-D. Powolna eskalacja dawki; nie przekraczać 450 mg/dzień."
    },
    {
      "label": "Rzucenie palenia tygodnie 7-12",
      "body": "Protokół Zyban: start 1-2 tygodnie przed docelową \"datą rzucenia\", kontynuacja 7-12 tygodni. Kombinacja z plastrem nikotynowym podwaja roczną abstynencję."
    }
  ],
  "quality": {
    "pure": [
      "GSK Wellbutrin XL (oryginator), Zyban (rzucanie palenia), formy generyczne biorównoważne",
      "Rynek polski: Wellbutrin XR 150/300 mg, Zyban 150 mg"
    ],
    "caution": [
      "Obniżenie progu drgawkowego jest ZALEŻNE OD DAWKI: 300 mg/dzień = 0,1%, 450 mg/dzień = 0,4%, > 450 mg/dzień wzrasta wykładniczo",
      "Monitorowanie BP przy rozpoczęciu (możliwy łagodny wzrost)",
      "Choroba afektywna dwubiegunowa: ryzyko indukcji manii przez NDRI, wymagany stabilizator nastroju"
    ],
    "avoid": [
      "Wywiad zaburzeń drgawkowych (padaczka)",
      "Bulimia lub anoreksja",
      "Aktywna abstynencja alkoholowa lub benzodiazepinowa",
      "MAOi (jednocześnie lub w ciągu 14 dni)",
      "Linezolid lub dożylny błękit metylenowy (działanie MAOI, ryzyko zespołu serotoninowego)",
      "Nagłe odstawienie leków przeciwpadaczkowych lub uspokajająco-nasennych (obniżony próg drgawkowy)",
      "Ciężka niewydolność wątroby (Child-Pugh ≥10) — przeciwwskazane wg etykiety FDA"
    ]
  },
  "interactions": [
    "Augmentacja SSRI (sertralina, fluoksetyna): łagodzi dysfunkcje seksualne",
    "Naltrekson + bupropion (Contrave) — wskazanie FDA do leczenia masy ciała w otyłości",
    "Plaster nikotynowy: 30,3% rocznej abstynencji (vs 16,4% placebo)",
    "Wareniklina (Chantix): kombinacja NIE zalecana (addytywne ryzyko CV)",
    "Stymulant ADHD (metylofenidat, lizdeksamfetamina): ostrożna kombinacja (ryzyko drgawkowe i CV)"
  ],
  "studies": [
    {
      "title": "A controlled trial of sustained-release bupropion, a nicotine patch, or both for smoking cessation",
      "authors": "Jorenby DE, Leischow SJ, Nides MA et al.",
      "journal": "N Engl J Med. 1999;340(9):685-91.",
      "pmid": "10080847"
    },
    {
      "title": "Bupropion versus paroxetine for the treatment of major depressive disorder",
      "authors": "Weihs KL, Settle EC Jr, Batey SR et al.",
      "journal": "J Clin Psychiatry. 2000;61(3):196-202.",
      "pmid": "10817105"
    },
    {
      "title": "Comparative efficacy and acceptability of 21 antidepressant drugs for major depressive disorder",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Bupropion sustained release in the treatment of seasonal affective disorder",
      "authors": "Modell JG, Rosenthal NE, Harriett AE et al.",
      "journal": "Biol Psychiatry. 2005;58(8):658-67.",
      "pmid": "16271317"
    },
    {
      "title": "Effects of naltrexone-bupropion on weight loss (COR-I trial)",
      "authors": "Greenway FL, Fujioka K, Plodkowski RA et al.",
      "journal": "Lancet. 2010;376(9741):595-605.",
      "pmid": "20673995"
    },
    {
      "title": "Bupropion and seizure risk: a systematic review",
      "authors": "Davidson J.",
      "journal": "J Clin Psychiatry. 1989;50(7):256-61.",
      "pmid": "2500425"
    },
    {
      "title": "Effects of bupropion sustained release on sexual function in nondepressed subjects with sexual side effects from SSRIs",
      "authors": "Clayton AH, Warnock JK, Kornstein SG et al.",
      "journal": "J Clin Psychiatry. 2004;65(1):62-7.",
      "pmid": "14744170"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego bupropion nie powoduje dysfunkcji seksualnych, w przeciwieństwie do SSRI?",
      "a": "Dysfunkcje seksualne SSRI (spadek libido, opóźniony wytrysk, anorgazmia) występują przez wysoką synaptyczną serotoninę aktywującą receptory 5-HT2, hamując centralną reaktywność seksualną. Bupropion NIE podnosi serotoniny, lecz DOPAMINĘ i NOREPINEFRYNĘ, które są promediatorami pobudzenia i libido. Dlatego nie tylko nie powoduje działań seksualnych, ale jako augmentacja SSRI może łagodzić istniejące dysfunkcje (Clayton 2004 PMID 14744170)."
    },
    {
      "q": "Jak realne jest ryzyko drgawek?",
      "a": "Przy standardowej dawce (SR ≤ 300 mg/dzień, XL ≤ 300 mg/dzień) zachorowalność na drgawki wynosi 0,1%, porównywalnie do innych antydepresantów. Przy 400 mg/dzień 0,3%, 450 mg/dzień 0,4%, stając się znaczące. Czynniki predysponujące: bulimia, anoreksja, ostra abstynencja alkoholowa, wywiad drgawek, padaczka, uraz głowy. Profilaktyka: powolna titracja, przestrzeganie maks. SR 400 / XL 450 mg/dzień, wybór SR zamiast XL przy tolerancji dawkowania 2x dziennie."
    },
    {
      "q": "Jak stosować Zyban przy rzucaniu palenia?",
      "a": "Protokół Zyban: 150 mg/dzień (rano) przez 3 dni, potem 150 mg 2x/dzień (rano + po południu, min. 8 h odstępu). Ustaw \"datę rzucenia\" na dzień 7-14, NIE natychmiast. Kontynuacja 7-12 tygodni z bezwzględną abstynencją. Plaster nikotynowy podwaja roczną abstynencję (Jorenby 1999 NEJM, 30,3% vs 16,4%). Ostra bezsenność, suchość w ustach, ból głowy w pierwszych tygodniach."
    },
    {
      "q": "Czy można łączyć z SSRI?",
      "a": "Tak, częsta strategia kliniczna: SSRI (np. sertralina) + bupropion dla złagodzenia dysfunkcji seksualnych indukowanych SSRI i/lub augmentacji niepełnej odpowiedzi AD. Mechanizm NDRI uzupełnia SERT (wzrost dopaminy+norepinefryny obok serotoniny). WYJĄTEK: kombinacja fluoksetyny + bupropionu wymaga dodatkowej ostrożności (fluoksetyna silny inhibitor CYP2D6, bupropion silny inhibitor CYP2D6 — kumulatywna blokada CYP)."
    },
    {
      "q": "Ryzyko przyrostu masy?",
      "a": "Bupropion jest NEUTRALNY dla wagi lub łagodnie redukuje wagę, w przeciwieństwie do SSRI (sertralina: ~1-2 kg przyrostu w 6 miesięcy; paroksetyna: 2-4 kg). Naltrekson + bupropion (Contrave) ma wskazanie FDA dla leczenia masy w otyłości: badanie COR-I (Greenway 2010 Lancet PMID 20673995) wykazało 6,1% utratę masy na Contrave w 56 tygodni vs 1,3% placebo. Różnica kliniczna: zmiana z SSRI na bupropion korzystna dla kontroli wagi."
    }
  ],
  "related": [
    "sertralin",
    "modafinil"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start, SR)",
        "dose": "150"
      },
      {
        "phase": "Tydzień 2+",
        "dose": "300"
      },
      {
        "phase": "Niepełna odpowiedź (maks.)",
        "dose": "450"
      }
    ],
    "unit": "mg/nap",
    "note": "SR 150 mg/dzień rano przez 4 dni, potem 150 mg 2x/dzień (8+ h odstępu). XL 150 mg/dzień rano przez 7 dni, potem 300 mg/dzień. Maks. SR 400 / XL 450 mg/dzień — powyżej ryzyko drgawek rośnie WYKŁADNICZO. NIE przyjmuj wieczorem. NIE kruszyć tabletki."
  }
}
