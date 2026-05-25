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
  },
  "variants": [
    {
      "routeId": "prop",
      "routeLabel": {
        "hu": "Testosterone Propionate (Test-Prop, gyors észter)",
        "en": "Testosterone Propionate (Test-Prop, fast ester)",
        "pl": "Testosteron Propionian (Test-Prop, szybki ester)"
      },
      "routeNote": {
        "hu": "Gyors észter (~19h), EOD ütemezés szükséges; gyors PCT-átmenet (utolsó injekció +3-5 nap).",
        "en": "Fast ester (~19h), EOD scheduling required; fast PCT transition (last injection +3-5 days).",
        "pl": "Szybki ester (~19h), wymagany harmonogram EOD; szybkie przejście PCT (ostatnia iniekcja +3-5 dni)."
      },
      "dosing": {
        "hu": "300–700 mg/hét IM, 3× EOD osztva (hétfő/szerda/péntek). Standard TRT-felett bodybuilding-doseban.",
        "en": "300–700 mg/week IM, split 3x EOD (Mon/Wed/Fri). Standard above-TRT bodybuilding dose.",
        "pl": "300–700 mg/tydzień IM, podzielone 3x EOD (pon/śr/pt). Standardowa dawka kulturystyczna powyżej TRT."
      },
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Rx (Testosterone Propionate, ritkábban gyártott mint Cyp/Enan, néhány EU országban Rx). WADA tiltott.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": {
        "hu": "24-48 óra (IM, fast-acting propionát)",
        "en": "24-48 hours (IM, fast-acting propionate)",
        "pl": "24-48 godzin (IM, szybko działający propionian)"
      },
      "halfLife": "~19 óra (Propionát észter; rövidebb mint Enan/Cyp)",
      "halfLifeActive": "~19 óra",
      "detectionWindow": "2-3 hét vizelet (rövidebb mint Enan/Cyp, propionát rövid észter miatt).",
      "aromatization": "Igen — Test parent szteroid, CYP19 szubsztrát; minden Test-észternél azonos aromatizációs arány.",
      "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; IM bypass-olja a first-pass-t.",
      "quality": {
        "pure": [
          "Tiszta halványsárga vagy víztiszta olaj, 10ml fiola, sterilen szűrt",
          "Rx-grade: Bayer Testoviron-Depot Prop (DE), Schering Testovis (IT)"
        ],
        "caution": [
          "Injection site pain (PIP): propionát alkohol-tartalmú vehikulumban gyakran fájdalmas",
          "Heti 3x EOD injekció szükséges a rövid felezés miatt"
        ],
        "avoid": [
          "Erős injection-site-érzékenység (alternatíva: Enan/Cyp heti 1-2x)",
          "Rendszertelen időbeosztás (EOD-injekció ütemezés-érzékeny)"
        ]
      },
      "interactions": [
        "Anastrozole: csak labor-igazolt magas E2 esetén",
        "PCT (Clomid + Nolvadex 4 hét) utolsó injekció +3-5 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/hét (IM, 3x EOD osztva)",
        "note": {
          "hu": "300-700 mg/hét, 3x EOD osztott (Mon/Wed/Fri). PCT utolsó injekció +3-5 nap.",
          "en": "300-700 mg/week, split 3x EOD (Mon/Wed/Fri). PCT last injection +3-5 days.",
          "pl": "300-700 mg/tydzień, podzielone 3x EOD (pon/śr/pt). PCT ostatnia iniekcja +3-5 dni."
        }
      }
    },
    {
      "routeId": "enan",
      "routeLabel": {
        "hu": "Testosterone Enanthate (Test-E, lassú észter)",
        "en": "Testosterone Enanthate (Test-E, slow ester)",
        "pl": "Testosteron Enanthate (Test-E, wolny ester)"
      },
      "routeNote": {
        "hu": "Közepes észter (10,5 nap), heti 1-2× elég; steady-state 4-5 hét után. EU-preferált TRT és bulk-ciklus standard.",
        "en": "Medium ester (10.5 days), 1-2x weekly suffices; steady-state after 4-5 weeks. EU-preferred TRT and bulk-cycle standard.",
        "pl": "Średni ester (10,5 dnia), wystarczy 1-2x tygodniowo; stan stacjonarny po 4-5 tygodniach. Standard TRT preferowany w UE i cyklach bulk."
      },
      "dosing": {
        "hu": "250–750 mg/hét IM, heti 1-2× osztva (Mon vagy Mon+Thu). 4-6 hét alatti ciklus NEM hatékony.",
        "en": "250–750 mg/week IM, split 1-2x weekly (Mon or Mon+Thu). Cycles shorter than 4-6 weeks are NOT effective.",
        "pl": "250–750 mg/tydzień IM, podzielone 1-2x tygodniowo (pon lub pon+czw). Cykle krótsze niż 4-6 tygodni NIE są skuteczne."
      },
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Bayer Testoviron-Depot 250 mg/ml Enan (DE/EU széles körben Rx). WADA tiltott.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": {
        "hu": "48-72 óra (IM, steady-state 4-5 hét)",
        "en": "48-72 hours (IM, steady-state 4-5 weeks)",
        "pl": "48-72 godziny (IM, stan stacjonarny 4-5 tygodni)"
      },
      "halfLife": "10,5 nap (Enantát észter)",
      "halfLifeActive": "~24 óra szabad T (észter-hidrolízis után)",
      "detectionWindow": "3-4 hónap vizelet (hosszú észter).",
      "aromatization": "Igen — minden Test-észternél azonos arány (CYP19 substrate, Bhasin 1996).",
      "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; IM bypass.",
      "quality": {
        "pure": [
          "Tiszta sárgás-barnás olaj (~#f59e0b tónus), 10ml fiola",
          "Rx-grade: Bayer Testoviron-Depot (DE), Aspen Sustanon-alternatíva"
        ],
        "caution": [
          "Lassú onset: hatás 2-4 hét után érzékelhető",
          "Heti 1-2x injekció (Mon vagy Mon+Thu)"
        ],
        "avoid": [
          "Rövid (4-6 hét) ciklus NEM hatékony — steady-state 4-5 hét után",
          "WADA-tesztelt verseny <4 hónap a tervezett vég után"
        ]
      },
      "interactions": [
        "Anastrozole 0,5 mg E3D dose-titrálás magas E2 esetén",
        "PCT utolsó Enan-injekció +14-21 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 250,
          "medium": 500,
          "high": 750
        },
        "unit": "mg/hét (IM, 1-2x osztva)",
        "note": {
          "hu": "250-750 mg/hét, heti 1-2x. PCT utolsó injekció +14-21 nap.",
          "en": "250-750 mg/week, 1-2x weekly. PCT last injection +14-21 days.",
          "pl": "250-750 mg/tydzień, 1-2x tygodniowo. PCT ostatnia iniekcja +14-21 dni."
        }
      }
    },
    {
      "routeId": "cyp",
      "routeLabel": {
        "hu": "Testosterone Cypionate (Test-C, lassú észter, USA-preferált)",
        "en": "Testosterone Cypionate (Test-C, slow ester, USA-preferred)",
        "pl": "Testosteron Cypionian (Test-C, wolny ester, preferowany w USA)"
      },
      "routeNote": {
        "hu": "Közepes észter (~8 nap), USA piaci dominancia; klinikailag ≈ Enantát (~2 nap eltérés minimális gyakorlatban). PCT utolsó injekció +14-21 nap.",
        "en": "Medium ester (~8 days), USA market dominance; clinically ≈ Enanthate (~2 day difference minimal in practice). PCT last injection +14-21 days.",
        "pl": "Średni ester (~8 dni), dominacja na rynku USA; klinicznie ≈ Enanthate (~2 dni różnicy minimalne w praktyce). PCT ostatnia iniekcja +14-21 dni."
      },
      "dosing": {
        "hu": "250–750 mg/hét IM, heti 1-2× osztva. USA-preferált TRT és bodybuilding standard.",
        "en": "250–750 mg/week IM, split 1-2x weekly. USA-preferred TRT and bodybuilding standard.",
        "pl": "250–750 mg/tydzień IM, podzielone 1-2x tygodniowo. Standard TRT preferowany w USA i kulturystyce."
      },
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Pfizer Depo-Testosterone Cyp 200 mg/ml (USA piaci dominancia). HU/EU: ritkább, Enan a preferált. WADA tiltott.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": {
        "hu": "48-72 óra (IM, steady-state 4-5 hét)",
        "en": "48-72 hours (IM, steady-state 4-5 weeks)",
        "pl": "48-72 godziny (IM, stan stacjonarny 4-5 tygodni)"
      },
      "halfLife": "8 nap (Cypionát észter, ~2 nappal rövidebb mint Enan)",
      "halfLifeActive": "~24 óra szabad T",
      "detectionWindow": "3-4 hónap vizelet.",
      "aromatization": "Igen — minden Test-észternél azonos arány.",
      "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált.",
      "quality": {
        "pure": [
          "Tiszta halványsárga olaj, 10ml fiola, kossolajos vehikulum gyakori",
          "Rx-grade: Pfizer Depo-Testosterone (USA), Watson Cyp (USA)"
        ],
        "caution": [
          "Klinikailag NEM különbözik szignifikánsan az Enantáttól (8 vs 10,5 nap minimális gyakorlati eltérés)",
          "USA-preferált, EU-ban ritka — UGL piacon gyakran Enantáttal cserélhető"
        ],
        "avoid": [
          "Ugyanaz mint Enantátnál (rövid ciklus nem hatékony, WADA detection 4 hónap)"
        ]
      },
      "interactions": [
        "Anastrozole 0,5 mg E3D magas E2 esetén",
        "PCT utolsó Cyp-injekció +14-21 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 250,
          "medium": 500,
          "high": 750
        },
        "unit": "mg/hét (IM, 1-2x osztva)",
        "note": {
          "hu": "250-750 mg/hét, heti 1-2x. PCT utolsó injekció +14-21 nap.",
          "en": "250-750 mg/week, 1-2x weekly. PCT last injection +14-21 days.",
          "pl": "250-750 mg/tydzień, 1-2x tygodniowo. PCT ostatnia iniekcja +14-21 dni."
        }
      }
    },
    {
      "routeId": "sus",
      "routeLabel": {
        "hu": "Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca)",
        "en": "Sustanon-250 (Organon 4-ester blend: Prop+PhenylProp+Iso+Deca)",
        "pl": "Sustanon-250 (Organon mieszanka 4-estrów: Prop+PhenylProp+Iso+Deca)"
      },
      "routeNote": {
        "hu": "4-ester keverék (Prop+PhenylProp+Isocaproate+Decanoate); peak-management komplexebb mint single-ester. PCT utolsó injekció +18-21 nap (Decanoate slow-clearance).",
        "en": "4-ester blend (Prop+PhenylProp+Isocaproate+Decanoate); peak-management more complex than single-ester. PCT last injection +18-21 days (Decanoate slow-clearance).",
        "pl": "Mieszanka 4-estrów (Prop+PhenylProp+Izokapronian+Dekanian); zarządzanie szczytami bardziej złożone niż single-ester. PCT ostatnia iniekcja +18-21 dni (wolny klirens Dekanianu)."
      },
      "dosing": {
        "hu": "250–750 mg/hét IM, heti 1-2× osztva (NEM havi 1× mint TRT). Bodybuilding-doseban single-ester alternatíva.",
        "en": "250–750 mg/week IM, split 1-2x weekly (NOT monthly 1x as for TRT). Single-ester alternative in bodybuilding doses.",
        "pl": "250–750 mg/tydzień IM, podzielone 1-2x tygodniowo (NIE 1x miesięcznie jak przy TRT). Alternatywa single-ester w dawkach kulturystycznych."
      },
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Aspen/Organon Sustanon-250 (1ml ampulla, 30mg Prop + 60mg PhenylProp + 60mg Isocaproate + 100mg Decanoate). EU Rx (HU/PL elérhető lengyel/cseh receptre). WADA tiltott.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": {
        "hu": "24-48 óra (Propionát-komponens fast-acting, Decanoate slow-acting)",
        "en": "24-48 hours (Propionate component fast-acting, Decanoate slow-acting)",
        "pl": "24-48 godzin (komponent Propionian szybko działający, Dekanian wolno działający)"
      },
      "halfLife": "Mixed: 19h (Prop) - 15 nap (Decanoate); átlag effektív t½ ~7-8 nap",
      "halfLifeActive": "~24 óra szabad T (depot-driven)",
      "detectionWindow": "3-4 hónap vizelet (Decanoate komponens miatt).",
      "aromatization": "Igen — minden komponens aromatizál (Test-bázis).",
      "hepatotoxicity": "Alacsony — parent szteroid blend, NEM 17α-alkilált.",
      "quality": {
        "pure": [
          "Aspen Sustanon-250 1ml ampulla (Bilbao gyár, holografikus címke)",
          "Pakisztáni Karachi-Sustanon (Organon-licenc, ~6 EUR/ampulla, autentikus)"
        ],
        "caution": [
          "4-komponens peak-shifting: nem stabil plasma-szint single-dose esetén (peak-trough kombináció)",
          "Eredetileg TRT-ra fejlesztve havi 1x injekcióra; bodybuilding heti dosing megvalósítható DE peak-management komplexebb mint single-ester"
        ],
        "avoid": [
          "Allergiás reakció a kókuszdió-olajra vagy egyik észterre",
          "Single-ester preferencia esetén (Enan/Cyp egyszerűbb peak-management)"
        ]
      },
      "interactions": [
        "Anastrozole E2 monitor — Sustanon esetén E2 fluktuációja nagyobb",
        "PCT utolsó Sustanon-injekció +18-21 nap után indul (Decanoate komponens slow clearance)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 250,
          "medium": 500,
          "high": 750
        },
        "unit": "mg/hét (IM, 1-2x osztva)",
        "note": {
          "hu": "250-750 mg/hét, heti 1-2x ajánlott (NEM havi 1x mint TRT). PCT utolsó injekció +18-21 nap.",
          "en": "250-750 mg/week, 1-2x weekly recommended (NOT monthly 1x as for TRT). PCT last injection +18-21 days.",
          "pl": "250-750 mg/tydzień, zalecane 1-2x tygodniowo (NIE 1x miesięcznie jak przy TRT). PCT ostatnia iniekcja +18-21 dni."
        }
      }
    },
    {
      "routeId": "aq",
      "routeLabel": {
        "hu": "Testosterone Suspension (vizes mikrokristály, ultra-gyors)",
        "en": "Testosterone Suspension (aqueous microcrystal, ultra-fast)",
        "pl": "Testosteron Suspension (mikrokryształ wodny, ultra-szybki)"
      },
      "routeNote": {
        "hu": "Parent T (NEM észter), 1-3 órás onset; pre-workout boost. EXTRA fájdalmas injekció (kristályok PIP). Napi/EOD ütemezés.",
        "en": "Parent T (NOT esterified), 1-3 hour onset; pre-workout boost. EXTRA painful injection (microcrystal PIP). Daily/EOD scheduling.",
        "pl": "Macierzysty T (NIE estryfikowany), 1-3 godzinny początek; przedtreningowy boost. EKSTRA bolesna iniekcja (PIP mikrokryształu). Codzienny/EOD harmonogram."
      },
      "dosing": {
        "hu": "50–200 mg/injekció IM napi vagy EOD. Pre-workout boost-ra 50-100 mg edzés előtt 1-2 órával.",
        "en": "50–200 mg/injection IM daily or EOD. For pre-workout boost 50-100 mg 1-2 hours before training.",
        "pl": "50–200 mg/iniekcja IM codziennie lub EOD. Dla przedtreningowego boostu 50-100 mg 1-2 godziny przed treningiem."
      },
      "androgenicRatio": "100:100",
      "image": "/performance/water-vial.png",
      "legalStatus": "Rx ritkán (USA: Aquaviron), mostly UGL underground. EU: nem törzskönyvezett. WADA tiltott.",
      "bioavailability": "~95-100% (IM, depot NÉLKÜLI direct absorption)",
      "onsetTime": {
        "hu": "1-3 óra (IM, ultra-gyors, NEM észteresített)",
        "en": "1-3 hours (IM, ultra-fast, NOT esterified)",
        "pl": "1-3 godziny (IM, ultra-szybki, NIE estryfikowany)"
      },
      "halfLife": "~24 óra (parent T, NEM észter)",
      "halfLifeActive": "~24 óra",
      "detectionWindow": "1-2 hét vizelet (rövidebb mint észteresített formák).",
      "aromatization": "Igen — parent T, CYP19 substrate.",
      "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált.",
      "quality": {
        "pure": [
          "Tiszta vízben suspendált fehér mikrokristályok, 10ml fiola, rázás előtt opálos",
          "Rx-grade: Aquaviron 25mg/ml (USA, ritka)"
        ],
        "caution": [
          "EXTRA fájdalmas injekció — kristályok fizikailag irritálják az izomszövetet (PIP)",
          "EOD vagy napi injekció szükséges a rövid felezés miatt",
          "Pre-workout boost-ra használt (1-3 órás onset miatt teljesítményt direkt boostol)"
        ],
        "avoid": [
          "Mindennap nem akarsz injektálni (alternatíva: Prop EOD vagy Enan heti 1x)",
          "Fájdalom-érzékeny (a kristályok jelentős PIP-et okoznak)"
        ]
      },
      "interactions": [
        "Anastrozole — gyors E2-emelkedés miatt monitor",
        "PCT utolsó suspension-injekció +24-48 óra után indul (gyors clearance)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 100,
          "high": 200
        },
        "unit": "mg/injekció (IM, napi vagy EOD)",
        "note": {
          "hu": "50-200 mg/injekció napi vagy EOD. Pre-workout boost-ra 50-100 mg 1-2 órával edzés előtt. PCT utolsó injekció +24-48 óra.",
          "en": "50-200 mg/injection daily or EOD. For pre-workout boost 50-100 mg 1-2 hours before training. PCT last injection +24-48 hours.",
          "pl": "50-200 mg/iniekcja codziennie lub EOD. Dla przedtreningowego boostu 50-100 mg 1-2 godziny przed treningiem. PCT ostatnia iniekcja +24-48 godzin."
        }
      }
    }
  ],
  "defaultVariant": "enan",
  "anecdote": "Testosteron jest molekułą referencyjną wszystkich AAS i fundamentem protokołów TRT. Raporty anegdotyczne opisują użytkowników stosujących testosteron jako protokół na całe życie, zwykle poprzez nadzorowane medycznie TRT. Zarówno Testosterone Propionate, jak i Cypionate są powszechnie stosowane. Doniesienia społeczności wskazują, że Propionate działa szybciej i daje bardziej 'na żądanie' uczucie napędu z mniejszą retencją wody lub wahaniami hormonów, podczas gdy Cypionate jest preferowany do całorocznego stabilnego stosowania ze spójnymi poziomami w surowicy. Wielu użytkowników zgłasza, że cykle wyłącznie testosteronowe zwykle dają najlepsze długoterminowe rezultaty według doświadczenia społeczności, z mniejszą liczbą zmiennych do zarządzania. Ogólnie testosteron pozostaje fundamentem praktyki AAS i TRT oraz punktem odniesienia, względem którego porównuje się inne związki."
}
