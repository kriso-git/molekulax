// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.618Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "lamotrigine",
  "name": "Lamotrigine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Lek przeciwdrgawkowy + podtrzymanie ChAD (GSK Lamictal). Bloker bramkowanych napięciem kanałów Na. OBOWIĄZKOWA powolna titracja z powodu ryzyka SJS/TEN.",
  "description": "Lamotrygina to bloker bramkowanych napięciem kanałów Na (GSK Lamictal, FDA 1994 padaczka, FDA 2003 podtrzymanie ChAD). Główna siła w ChAD to prewencja fazy depresyjnej (mniej skuteczna w ostrej manii). Ryzyko CIĘŻKIEJ reakcji skórnej (SJS, TEN) wynosi 0,3% u dzieci i 0,1% u dorosłych — ale znacznie rośnie przy szybkiej eskalacji lub kombinacji z walproinianem. 5-tygodniowa powolna titracja (25 → 50 → 100 → 200 mg) jest OBOWIĄZKOWA, a KAŻDA wysypka = NATYCHMIASTOWY STOP.",
  "mechanism": "Zależna od użycia blokada bramkowanych napięciem kanałów Na (stabilizacja błony), redukcja uwalniania glutaminianu. Wtórnie: selektywne podwyższenie presynaptycznego uwalniania serotoniny.",
  "legalStatus": "UE/PL: na receptę (Lamictal, Lamitrin, Epitrigine, generyki). USA: FDA Rx.",
  "bioavailability": "~98% (doustnie, \"całkowicie wchłaniana\" — etykieta FDA Lamictal)",
  "onsetTime": "5+ weeks (slow titration required)",
  "halfLife": "25-33 h (alone), 70 h (with valproate), 13 h (with enzyme inducers)",
  "atcCode": "N03AX09",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Padaczka (ogniskowa i uogólniona, monoterapia lub uzupełniająca)",
    "ChAD I, PREWENCJA epizodów nastroju (FDA 2003)"
  ],
  "contraindications": [
    "Wywiad reakcji skórnej SJS/TEN/DRESS",
    "Ciężka niewydolność wątroby"
  ],
  "commonSideEffects": [
    "Wysypka skórna (10% łagodna, 0,1-0,3% SJS/TEN, głównie podczas titracji)",
    "Ból głowy, zawroty głowy, ataksja, diplopia",
    "Ciężkie, rzadkie: SJS/TEN (NAGŁE), DRESS, aseptyczne zapalenie opon, limfohistiocytoza hemofagocytarna"
  ],
  "cyp450": [
    "Glucuronidation primary (UGT1A4)",
    "Strongly affected by inducers (carbamazepine, phenytoin) and inhibitors (valproate)"
  ],
  "crossMolInteractions": [
    "Walproinian: HAMUJE glukuronidację, okres półtrwania lamotryginy PODWAJA, ryzyko SJS/TEN rośnie — OBOWIĄZKOWA redukcja dawki lamotryginy o 50% z walproinianem",
    "Karbamazepina, fenytoina, fenobarbital: indukcja, poziom lamotryginy w osoczu może spaść, potrzeba eskalacji",
    "Doustna antykoncepcja: poziom lamotryginy może spaść, zmienność w cyklu"
  ],
  "benefits": [
    "Najskuteczniejszy stabilizator nastroju dla PREWENCJI fazy depresyjnej ChAD",
    "Bez przyrostu masy ani sedacji (vs olanzapina, kwetiapina)",
    "Nieistotnie teratogenny (vs walproinian silnie teratogenny)",
    "Długi okres półtrwania → raz/dwa razy dziennie (dobry compliance)"
  ],
  "studies": [
    {
      "title": "Lamotrigine for prevention of new manic and depressive episodes in BD (Calabrese 2003)",
      "authors": "Calabrese JR, Bowden CL, Sachs G et al.",
      "journal": "J Clin Psychiatry. 2003;64(9):1013-24.",
      "pmid": "14628976"
    },
    {
      "title": "Lamotrigine in the treatment of bipolar depression",
      "authors": "Geddes JR, Calabrese JR, Goodwin GM.",
      "journal": "Br J Psychiatry. 2009;194(1):4-9.",
      "pmid": "19118318"
    },
    {
      "title": "Stevens-Johnson syndrome and toxic epidermal necrolysis with lamotrigine",
      "authors": "Mockenhaupt M, Messenheimer J, Tennis P, Schlingmann J.",
      "journal": "Neurology. 2005;64(7):1134-8.",
      "pmid": "15824334"
    }
  ],
  "related": [
    "aripiprazole",
    "sertralin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tygodnie 1-2 (start)",
        "dose": "25"
      },
      {
        "phase": "Tygodnie 3-4",
        "dose": "50"
      },
      {
        "phase": "Tydzień 5",
        "dose": "100"
      },
      {
        "phase": "Tydzień 6+ (cel)",
        "dose": "200"
      }
    ],
    "unit": "mg/nap",
    "note": "OBOWIĄZKOWA powolna titracja by złagodzić ryzyko SJS/TEN. Z walproinianem powyższe dawki redukować o połowę. KAŻDA wysypka = NATYCHMIASTOWY STOP i konsultacja dermatologa/nagła. NIE wznawiaj na poprzedniej dawce po > 5 dniach przerwy — start od 25 mg."
  }
}
