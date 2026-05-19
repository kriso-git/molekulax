// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.959Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "testosterone-info",
  "name": "Testosterone",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Endogenny męski hormon płciowy i molekuła referencyjna wszystkich AAS. Zatwierdzony przez FDA TRT (terapia zastępcza testosteronem) dla hipogonadyzmu.",
  "description": "Testosteron to pierwotny steryd androgenny ludzkiego organizmu, wytwarzany przez komórki Leydiga w jądrach pod wpływem LH. Stosunek anaboliczno-androgenny 100:100, punkt odniesienia dla wszystkich syntetycznych AAS. Zatwierdzone wskazanie FDA: hipogonadyzm pierwotny i wtórny (Testosteron Cypionate, Enanthate, Undecanoate, żele transdermalne). W kontekście sportowym zakazany przez WADA, ale długoterminowe użycie medyczne w TRT jest coraz szerzej udokumentowane. Badanie TRAVERSE (Lincoff 2023, NEJM) potwierdziło bezpieczeństwo sercowo-naczyniowe transdermalnego TRT u mężczyzn z hipogonadyzmem i podwyższonym ryzykiem CV, co stanowi przełomową rewizję wcześniejszego ostrzeżenia FDA z 2014 r.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR, aromatyzuje do E2"
    },
    {
      "label": "Anaboliczny:Androgenny",
      "value": "100:100"
    },
    {
      "label": "Okres półtrwania",
      "value": "8 dni (Cyp), 10,5 dni (Ena)"
    },
    {
      "label": "Początek",
      "value": "24-72 h (ester iniekcyjny)"
    },
    {
      "label": "Status prawny",
      "value": "Rx FDA TRT, zakazany przez WADA"
    }
  ],
  "mechanism": "Bezpośredni agonista receptora androgenowego (AR); konwertowany do estradiolu (E2) przez aromatazę i do DHT przez 5α-reduktazę.",
  "legalStatus": "UE: na receptę (Nebido, Sustanon). PL: Rx dla TRT. USA: zatwierdzony przez FDA, Schedule III (DEA). Zakazany przez WADA przez cały rok.",
  "onsetTime": "24-72 h (injected ester)",
  "halfLife": "8 d (Cypionate), 10.5 d (Enanthate)",
  "halfLifeActive": "~24 h free testosterone after ester hydrolysis",
  "interactionsWith": [
    "anastrozole",
    "hcg",
    "finasteride",
    "warfarin"
  ],
  "aromatization": "Tak — CYP19 (aromataza) → estradiol; zależnie od dawki, hamowane inhibitorem aromatazy (anastrozol) (Bhasin 1996 NEJM)",
  "hepatotoxicity": "Niska — sterydy macierzysty, NIE 17α-alkilowany; postać iniekcyjna omija first-pass wątrobowy (Pope-Kanayama 2014)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:100",
  "bindingAffinity": "Powinowactwo do AR referencyjne 100% (wszystkie inne AAS mierzone względem tego).",
  "detectionWindow": "Ester iniekcyjny: 3-4 miesiące w moczu. Stosunek T/E (IRMS izotop węgla) do 6 miesięcy.",
  "benefits": [
    "Udokumentowany wzrost masy mięśniowej i siły (Bhasin 1996 NEJM)",
    "Zwiększona gęstość kości i liczba erytrocytów",
    "Przywrócenie libido i funkcji erekcyjnej u mężczyzn z hipogonadyzmem",
    "Poprawa nastroju, energii i funkcji poznawczych przy niskim T",
    "Poprawa wrażliwości na insulinę i kompozycji ciała"
  ],
  "quickStart": [
    "Najpierw badania krwi. Bez baseline nie ma świadomego użycia",
    "Inhibitor aromatazy (Anastrozole) w gotowości, tylko jeśli E2 rośnie",
    "HCG 250-500 IU 2x w tygodniu, by zapobiec atrofii jąder przy dłuższych cyklach",
    "Ciśnienie krwi w domu codziennie, hematokryt co 6 tygodni",
    "Plan PCT GOTOWY przed startem cyklu (protokół Clomid/Nolvadex)"
  ],
  "expectations": [
    {
      "label": "Pierwsza dawka",
      "body": "Dla estru iniekcyjnego efekt ostry minimalny, hydroliza estru trwa 24-72 h. Subiektywne odczucie rzadkie w pierwszym tygodniu."
    },
    {
      "label": "4 tygodnie",
      "body": "Stan stacjonarny osiągnięty. Zauważalny wzrost siły, libido, nastroju. Monitoring E2 obowiązkowy."
    },
    {
      "label": "8 tygodni",
      "body": "Przyrost masy mięśniowej 3-6 kg udokumentowany (Bhasin 1996). Lipidogram i hematokryt do monitorowania."
    }
  ],
  "quality": {
    "pure": [
      "Fiolka UGL/Rx: olejowa, czysta, bez osadu",
      "Weryfikacja etykiety holograficznej (Bayer Nebido, Pfizer Depo-Testosterone)"
    ],
    "caution": [
      "E2 za wysokie: ginekomastia, retencja wody, wahania nastroju",
      "Hematokryt >54%: ryzyko zakrzepicy, konieczna flebotomia",
      "Spadek HDL, wzrost LDL zwiększa ryzyko sercowo-naczyniowe"
    ],
    "avoid": [
      "Rak prostaty lub piersi (przeciwwskazane)",
      "Ciężka niewydolność serca, nieleczony bezdech senny",
      "W okresie planowanego ojcostwa (supresja spermatogenezy)",
      "Czerwienica (hematokryt >54%) — ryzyko zakrzepicy, udaru, MI",
      "Nieleczone nadciśnienie, choroba wieńcowa, ciężka niewydolność serca (NYHA III-IV)",
      "Ciąża i karmienie piersią (wirylizacja i ryzyko teratogenne dla rozwoju płodu żeńskiego)"
    ]
  },
  "interactions": [
    "Anastrozol (AI): kontrola E2, tylko gdy badania potwierdzą wysokie E2",
    "HCG: utrzymanie objętości jąder i intratestykularnego T",
    "Finasteryd: inhibitor 5α-reduktazy, obniża DHT (ryzyko utraty włosów)",
    "Warfaryna: efekt antykoagulacyjny może się nasilić, ścisłe monitorowanie INR",
    "Insulina/doustny przeciwcukrzycowy: może być potrzebna redukcja dawki"
  ],
  "studies": [
    {
      "title": "The effects of supraphysiologic doses of testosterone on muscle size and strength in normal men",
      "authors": "Bhasin S, Storer TW, Berman N et al.",
      "journal": "N Engl J Med. 1996;335(1):1-7.",
      "pmid": "8637535"
    },
    {
      "title": "Testosterone dose-response relationships in healthy young men",
      "authors": "Bhasin S, Woodhouse L, Casaburi R et al.",
      "journal": "Am J Physiol Endocrinol Metab. 2001;281(6):E1172-81.",
      "pmid": "11701431"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of testosterone treatment in older men (Testosterone Trials)",
      "authors": "Snyder PJ, Bhasin S, Cunningham GR et al.",
      "journal": "N Engl J Med. 2016;374(7):611-624.",
      "pmid": "26886521"
    },
    {
      "title": "Cardiovascular safety of testosterone-replacement therapy (TRAVERSE)",
      "authors": "Lincoff AM, Bhasin S, Flevaris P et al.",
      "journal": "N Engl J Med. 2023;389(2):107-117.",
      "pmid": "37326322"
    }
  ],
  "faq": [
    {
      "q": "Jaka jest różnica między TRT a blastem?",
      "a": "TRT: protokół medyczny utrzymujący fizjologiczny baseline T (500-1000 ng/dL), zwykle 100-200 mg/tydzień. Blast: dawka suprafizjologiczna (300-600+ mg/tydzień) dla budowy mięśni, bez wskazania medycznego."
    },
    {
      "q": "Czy potrzebny jest inhibitor aromatazy przy TRT?",
      "a": "Nie automatycznie. AI tylko gdy badania potwierdzą wysokie E2 plus objawy (ginekomastia, zaburzenia nastroju). Ślepe użycie AI obniża E2 poniżej poziomu potrzebnego dla funkcji poznawczej i kostnej."
    },
    {
      "q": "Czy naturalna produkcja T może wrócić po cyklu?",
      "a": "Zwykle tak, w 3-12 miesięcy z protokołem PCT (Clomid/Nolvadex). Rahnema 2014: po długich cyklach odzyskiwanie HPTA może być opóźnione, u kilku procent może rozwinąć się trwała supresja."
    },
    {
      "q": "Czy TRT jest niebezpieczne długoterminowo?",
      "a": "Przy odpowiednim monitorowaniu (lipidy, hematokryt, PSA, E2) bilans korzyść-ryzyko jest korzystny u mężczyzn z hipogonadyzmem. W długoterminowych kohortach TRT ryzyko sercowo-naczyniowe nie przekraczało kontroli (Bhasin 2018)."
    },
    {
      "q": "Co pokazało badanie TRAVERSE w sprawie TRT?",
      "a": "Badanie Lincoff 2023 NEJM TRAVERSE randomizowane, kontrolowane placebo, śledziło 5246 mężczyzn z hipogonadyzmem (wiek 45-80, podwyższone ryzyko CV, mediana follow-up 22 miesięcy). Transdermalny żel testosteronowy NIE zwiększał ryzyka MACE vs placebo (HR 0,96). To przełomowa rewizja wcześniejszego ostrzeżenia FDA z 2014 r.; przy odpowiednim monitoringu TRT jest bezpieczne sercowo-naczyniowo u mężczyzn z hipogonadyzmem."
    }
  ],
  "related": [
    "trenbolone-info",
    "anavar-info",
    "winstrol-info",
    "nandrolone-info",
    "dianabol-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 1.5,
      "medium": 3,
      "high": 5
    },
    "unit": "mg/hét",
    "note": "TRT (przepisana przez lekarza) zwykle 100-200 mg/tydzień, blisko zakresu Niska. Cykle AAS w sporcie 300-500+ mg/tydzień, wyłącznie pod nadzorem lekarza. Dawkę tygodniową dzieli się zwykle na 2x EOD lub 1x tygodniowo."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem",
      "markers": "Pełna morfologia (CBC) z hematokrytem, lipidogram (LDL/HDL/TG), próby wątrobowe (ALT/AST/GGT), panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna), HbA1c, czynność nerek (Kreatynina, eGFR), PSA (powyżej 30 lat).",
      "purpose": "Pomiar bazowy. Bez zdrowego baseline zmiany w trakcie cyklu są nieinterpretowalne."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "4-6 tygodni po starcie",
      "markers": "Lipidogram (HDL może drastycznie spaść na AAS), próby wątrobowe (ALT/AST), E2 (aktywność aromatazy), hematokryt, ciśnienie krwi (w domu, codziennie).",
      "purpose": "Wykrywanie nagłych zmian. Poważne odchylenie wymaga przerwania cyklu."
    },
    "postCycle": {
      "label": "Po cyklu (PCT)",
      "timing": "Tydzień 4 PCT oraz tydzień 8-12 sprawdzenie powrotu HPTA",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipidogram (powrót HDL), próby wątrobowe (regeneracja).",
      "purpose": "Weryfikacja powrotu HPTA. Jeśli T nie wraca do baseline w tygodniu 12, konsultacja endokrynologiczna."
    },
    "cruise": {
      "label": "Podczas Cruise",
      "timing": "Ciągłe monitorowanie co 6 tygodni",
      "markers": "Total T, E2, lipidogram, hematokryt (>54% flebotomia), HbA1c, PSA (powyżej 30 lat), dziennik ciśnienia.",
      "purpose": "Podczas długotrwałej stabilnej supresji markery sercowo-naczyniowe i hormonalne muszą być stale monitorowane, ze szczególną uwagą na hematokryt i PSA."
    }
  }
}
