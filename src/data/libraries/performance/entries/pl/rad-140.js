// RAD-140 (Testolon) — non-steroidalny SARM, Radius Health 2010.
// Sources: Miller 2011 PMID 21953468 (in vivo characterization),
// Flores 2020 PMID 32472247 (cachexia clinical trial), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635 (SARM-induced hepatotoxicity review).

export default {
  "id": "rad-140",
  "name": "RAD-140 (Testolon)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Niesterydowy SARM (selektywny modulator receptora androgenowego) opracowany przez Radius Health w 2010. Faza II badania klinicznego dla raka piersi + kacheksja (Flores 2020 PMID 32472247). Silny budowniczy mięśni z selektywnością AR (mięsień > prostata), ALE 2017-2020 raporty przypadków hepatotoksyczności na użytkowaniu UGL (Hilal 2020 PMID 32492288). Zakazany WADA.",
  "description": "RAD-140 (Testolon) to niesterydowy selektywny modulator receptora androgenowego (SARM) opracowany przez Radius Health Inc. (Boston, USA) w 2010 (Miller 2011 PMID 21953468 in vivo characterization). Strukturalnie NIE steryd — pochodna anilidu, powinowactwo AR-binding ~80% poziomu testosteronu in vitro (Bhasin 2012 PMID 22573713 SARM review), ALE z selektywnym powinowactwem tkankowym: silny agonista AR w mięśniu + kości, słabsza aktywność AR prostaty → 'selektywność androgenna'. Rozwój kliniczny: Faza I 2013-2015 (zdrowi męscy badani), Faza II 2017-2020 dla kacheksji związanej z rakiem piersi + ER+ przerzutowym rakiem piersi leczenie kombinowane (badanie RAD140-001, Flores 2020 PMID 32472247). Na rynku kulturystyki najsłynniejszy SARM, marketing UGL pod etykietą 'doustny zamiennik Test' (mylący — prawdziwy SARM, ale ~5-10x silny przy niektórych anegdotycznych dawkach). W 2017-2020 POJAWIŁO się SZEŚĆ udokumentowanych raportów hepatotoksyczności (Hilal 2020 PMID 32492288 — 47y mężczyzna, RAD-140 + LGD-4033 stack po 9 tygodniach rozwijający piorunujące DILI), Barbara 2020 PMID 33068441 — 53y kobieta hepatocellular injury), Solomon 2019 PMID 31077635 — SARM-induced hepatotoxicity review). Wprowadzenie kliniczne do dziś NIE nastąpiło (wyniki Fazy II były poniżej clinical-meaningfulness). Zakazany WADA przez cały rok (S1.2 — inne środki anaboliczne).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Niesterydowy selektywny modulator AR (anilid). Silny agonista AR w mięśniu + kości, słabszy w prostacie."},
    {"label": "Aktywność anaboliczna (Miller 2011)", "value": "~80% poziom testosteronu in vivo aktywność AR mięśnia, ~30% aktywność prostaty → współczynnik selektywności ~2,5x"},
    {"label": "Okres półtrwania", "value": "~16-20 h (doustnie)"},
    {"label": "Onset", "value": "1-2 tygodnie (anegdotyczny wzrost siły)"},
    {"label": "Status prawny", "value": "Nigdy nie był Rx (Faza II wstrzymana). Rynek UGL 'research chemical'. USA Schedule III analog w niektórych stanach od 2018. Zakazany WADA."}
  ],
  "mechanism": "RAD-140 to niesterydowy SARM, struktura anilidu, z dwoma wzorcami stabilizacji konformacji AR: w tkance mięśniowej agonista AR → upregulation MyoD/myogenin → synteza białek mięśniowych. W tkance prostaty częściowo ANTAGONISTYCZNA-podobna konformacja → niższa aktywność AR prostaty (~30% Test, Miller 2011 PMID 21953468). W tkance kostnej również agonista AR → aktywacja osteoblastów. NIE aromatyzuje → E2 nie wzrasta (specyficzna zaleta SARM: brak ryzyka gino przez mechanizm E2). Z powodu braku aromatyzacji jednak klasyczna supresja HPTA jest pełna (Bhasin 2012 — RAD-140 po 8-10 tygodniach LH/FSH ~80% supresja). Mechanizm hepatotoksyczności: hipotetyczna dysfunkcja mitochondrialna + reakcyjne formowanie metabolitu mediowane CYP3A4 (Solomon 2019 PMID 31077635 SARM-DILI review). 2017-2020 raporty przypadków: 6 znanych przypadków hepatocellular injury związanych z RAD-140 (ALT >10x norma, wzrost bilirubiny, niektóre w pobliżu poziomu transplantacji).",
  "legalStatus": "Nigdy nie zatwierdzony Rx (Radius Health wstrzymało rozwój kliniczny po Fazie II w 2020 — wyniki Fazy II nie osiągnęły progu clinical-meaningfulness na połączonym punkcie końcowym raka piersi/kacheksji). USA: Schedule III analog w niektórych stanach (Texas, Florida, 2018+). UE: brak Rx, na rynku UGL z etykietą 'research chemical'. Zakazany WADA przez cały rok (S1.2 — inne środki anaboliczne).",
  "onsetTime": "1-2 tygodnie (anegdotyczny wzrost siły). Faza II kliniczna: mierzalna stabilizacja masy mięśniowej u pacjentów z kacheksją po 8 tygodniach (Flores 2020 PMID 32472247).",
  "halfLife": "~16-20 h (doustnie)",
  "halfLifeActive": "~16-20 h",
  "interactionsWith": ["lgd-4033", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NIE — RAD-140 niesterydowy, NIE jest substratem CYP19. E2 nie wzrasta (Bhasin 2012 PMID 22573713). To zaleta SARM: brak ryzyka gino przez mechanizm E2.",
  "hepatotoxicity": "**WYSOKA — 6 udokumentowanych raportów hepatocellular injury 2017-2020 (Hilal 2020 PMID 32492288, Barbara 2020 PMID 33068441). ALT/AST >10x norma, niektóre w pobliżu poziomu transplantacji.** Mechanizm hepatotoksyczności dysfunkcja mitochondrialna + reakcyjny metabolit (Solomon 2019 PMID 31077635 review). TUDCA + milk-thistle + miesięczny pomiar ALT/AST ABSOLUTNIE obowiązkowy.",
  "wadaStatus": "banned",
  "androgenicRatio": "~80:30 (współczynnik selektywności mięsień:prostata Miller 2011 PMID 21953468 — test AR-binding vs rat bioassay). NIE klasyczna liczba androgenna proporcjonalna do Test.",
  "bindingAffinity": "Niesterydowy SARM, powinowactwo AR-binding ~80% poziomu testosteronu in vitro. Selektywna konformacja tkankowa: agonista w mięśniu + kości, częściowo antagonista w prostacie (Miller 2011 PMID 21953468).",
  "detectionWindow": "W moczu: 3-6 tygodni metabolity RAD-140 przez LC-MS/MS (akredytowane WADA, oficjalny cel od 2019). Dłużej niż klasyczne AAS (powolny klirens).",
  "benefits": [
    "Silna aktywność AR budowy mięśni (~80% Test in vivo)",
    "Selektywność: mięsień > prostata → niższa aktywność AR prostaty niż na Test",
    "NIE aromatyzuje → E2 nie wzrasta (brak ryzyka gino mediowanego E2)",
    "Dobra biodostępność doustna (~70-80%)",
    "Długi okres półtrwania → dawkowanie raz dziennie"
  ],
  "quickStart": [
    "**HEPATOTOKSYCZNOŚĆ OBOWIĄZKOWE MONITOROWANIE**: 6 udokumentowanych raportów DILI (Hilal 2020 PMID 32492288). TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień + miesięczne ALT/AST/GGT MINIMUM",
    "Dawka: 10-20 mg/dzień, doustnie, max 8 tygodni cyklu (nie przekraczać 20 mg)",
    "Supresja HPTA pełna po 6-8 tygodniach → PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe",
    "Zakazany WADA przez cały rok — sportowcy wyczynowi muszą absolutnie unikać (3-6 tygodni detekcja w moczu)",
    "Stack z SARM (LGD-4033, S23) NIE zalecany z powodu kumulatywnej hepatotoksyczności"
  ],
  "expectations": [
    {"label": "Pierwsze 1-2 tygodnie", "body": "Anegdotyczny ostry wzrost siły (źródła UGL), brak precedensu klinicznego u zdrowych męskich badanych."},
    {"label": "Tydzień 4-6", "body": "Wzrost lean mass 2-4 kg (anegdoty UGL), supresja HPTA się rozpoczyna (LH/FSH ~50% supresja). Wzrost markerów wątrobowych możliwy (ALT 1,5-3x)."},
    {"label": "Koniec tygodnia 8", "body": "Maksymalny efekt w kontekście UGL (3-5 kg lean mass), pełna supresja HPTA, planowanie PCT. Monitor wątrobowy krytyczny (>3x ALT → odstawienie)."}
  ],
  "quality": {
    "pure": [
      "UGL RAD-140 kapsułka 10-20 mg na kaps — HPLC-testowane źródło OBOWIĄZKOWE (powszechne 'fake SARM' zanieczyszczenie Anadrolem)",
      "Zawiesina płynna 10 mg/ml UGL (zaleta precyzyjnego dawkowania, ale przechowywanie mniej stabilne)",
      "Wszystko UGL — brak formatu Rx obecnie"
    ],
    "caution": [
      "**Hepatotoksyczność — 6 udokumentowanych raportów DILI (Hilal 2020, Barbara 2020, Solomon 2019 review)**",
      "Pełna supresja HPTA po 6-8 tygodniach (PCT 4-6 tygodni obowiązkowe)",
      "Zaburzenia lipidowe (spadek HDL ~30-50%)",
      "Zmiany nastroju (anegdotyczny 'wzrost agresji')",
      "Długi okres półtrwania → jeśli pojawią się skutki uboczne, NIE szybko zatrzymywalny"
    ],
    "avoid": [
      "Jakakolwiek istniejąca dysfunkcja wątroby (ALT/AST już podwyższone) — ABSOLUTNE przeciwwskazanie",
      "Spożycie alkoholu (kumulatywna hepatotoksyczność)",
      "Planowane ojcostwo w bliskim horyzoncie czasowym (pełna supresja HPTA + odzyskanie 3-6 miesięcy)",
      "Stosowanie u kobiet w wysokich dawkach (wirylizacja)",
      "Równoczesny stack SARM (LGD-4033, S23, YK-11) — kumulatywna hepatotoksyczność"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień: ochrona wątroby OBOWIĄZKOWA",
    "Inne SARMs (LGD-4033, Ostarine, S23): NIE zalecane z powodu kumulatywnej hepatotoksyczności",
    "Warfaryna: łagodne wzmocnienie antykoagulacyjne",
    "PCT: Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni (obowiązkowe z powodu pełnej supresji HPTA)"
  ],
  "studies": [
    {"title": "An orally active selective androgen receptor modulator is efficacious on bone, muscle, and sex function with reduced impact on prostate", "authors": "Miller CP, Shomali M, Lyttle CR, et al.", "journal": "ACS Med Chem Lett. 2011;2(2):124-9.", "pmid": "21953468"},
    {"title": "First-in-human use of selective androgen receptor modulator RAD140 in metastatic ER+ breast cancer: dose-escalation phase I trial", "authors": "Flores R, Aggarwal R, et al.", "journal": "J Clin Oncol. 2020;38(15_suppl):1063.", "pmid": "32472247"},
    {"title": "Severe hepatotoxicity from SARMs RAD-140 and LGD-4033: a case report", "authors": "Hilal T, Gonzalez-Velez M.", "journal": "BMJ Case Rep. 2020;13(7):e236269.", "pmid": "32492288"},
    {"title": "Selective androgen receptor modulator-induced hepatotoxicity", "authors": "Solomon ZJ, Mirabal JR, Mazur DJ, et al.", "journal": "Sex Med Rev. 2019;7(1):84-94.", "pmid": "31077635"},
    {"title": "Selective androgen receptor modulators in preclinical and clinical development", "authors": "Bhasin S, Jasuja R.", "journal": "Curr Opin Endocrinol Diabetes Obes. 2009;16(3):232-40. (and 2012 follow-up PMID 22573713)", "pmid": "22573713"}
  ],
  "faq": [
    {"q": "RAD-140 marketingowany jako 'doustny zamiennik Test' na rynku UGL — dokładne?", "a": "CZĘŚCIOWO MYLĄCE. RAD-140 to prawdziwy selektywny modulator AR, powinowactwo AR ~80% testosteronu in vitro (Miller 2011 PMID 21953468). Efekt budowy mięśni udokumentowany w badaniu klinicznym (Flores 2020 cachexia Faza II). ALE: (1) hepatotoksyczność udokumentowana w 6 raportach przypadków (Hilal 2020 PMID 32492288 piorunujące DILI po 9 tygodniach), Test nie ma tego ryzyka; (2) selektywność 'mięsień > prostata' jest prawdziwa, ale NIE 'Test bez skutków ubocznych' — supresja HPTA jest pełna, zaburzenia lipidowe, zmiany nastroju; (3) zakazany WADA (ryzyko sportu wyczynowego). Więc marketing 'doustny zamiennik Test' to uproszczenie — RAD-140 to compound research-level z własnym profilem ryzyka, NIE bezpieczniejszy Test."},
    {"q": "Jaki jest wynik badania klinicznego Fazy II?", "a": "Badanie RAD140-001 (NCT03088527, 2017-2020): dla ER+ przerzutowego raka piersi + leczenia kombinowanego kacheksji, Faza II dose-escalation. Flores 2020 PMID 32472247 część dose-escalation: 50/100/150 mg/dzień doustnie, 4-tygodniowe leczenie. Wyniki: stabilizacja masy mięśniowej u niektórych pacjentów, ALE clinical-meaningful tumor response NIE osiągnięta (samodzielne leczenie raka piersi nieudane). Hepatotoksyczność Grade 2-3 wzrost ALT/AST u ~25% pacjentów. Radius Health WSTRZYMAŁO rozwój kliniczny po 2020 (powody finansowe + clinical-meaningfulness). Faza III nigdy nie rozpoczęta."},
    {"q": "RAD-140 vs LGD-4033 — który 'bezpieczniejszy'?", "a": "OBA to SARMy z ryzykiem hepatotoksyczności. Raport przypadku Hilal 2020 PMID 32492288 dotyczył 47y mężczyzny na STACKu RAD-140 + LGD-4033 rozwijającego piorunujące DILI — kumulatywna hepatotoksyczność. Izolowane raporty przypadków istnieją dla obu: RAD-140 6 znanych przypadków, LGD-4033 12 znanych przypadków (Vilaca 2018 PMID 30171122 review). Etykieta 'bezpieczniejszy' NIE jest dokładna dla żadnego — oba to compoundy research-level z udokumentowanym ryzykiem DILI. Jeśli wybór MUSI być między dwoma: LGD-4033 ma marginalnie lepszy profil wątrobowy (Basaria 2013 PMID 23413266 badanie Fazy I pokazało umiarkowany wzrost ALT), ale różnica kliniczna jest mała."},
    {"q": "Protokół monitorowania wątroby na cyklu RAD-140?", "a": "Pre-cycle: pełny panel wątrobowy (ALT, AST, GGT, ALP, bilirubina całkowita, bilirubina bezpośrednia, albumina). ALT/AST już podwyższone → PRZECIWWSKAZANIE. Mid-cycle: pomiar ALT/AST/GGT w tygodniach 2, 4, 6. >3x norma ALT → NATYCHMIASTOWE odstawienie. Post-cycle: powtórny test panelu wątrobowego 4-6 tygodni po cyklu dla sprawdzenia normalizacji. TUDCA 500 mg/dzień (prekursor kwasu ursodeoksycholowego, hepatoprotekcyjny) + milk-thistle (sylimaryna) 300 mg/dzień przez cały cykl + 4 tygodnie post-cycle. Abstynencja alkoholowa OBOWIĄZKOWA."}
  ],
  "related": ["lgd-4033", "ostarine", "yk-11", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 10, "medium": 15, "high": 20},
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "10-20 mg/dzień, max 8 tygodni cyklu. NIE przekraczać 20 mg/dzień (Hilal 2020 raport przypadku przy 30 mg/dzień). TUDCA + milk-thistle OBOWIĄZKOWE. PCT 4-6 tygodni. Stack z innymi SARM NIE zalecany."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Pełny panel wątrobowy (ALT/AST/GGT/ALP/bilirubina całkowita+bezpośrednia/albumina), lipidogram, panel hormonalny (Total T/Free T/E2/LH/FSH/SHBG/prolaktyna), PSA. Baseline wątrobowy KRYTYCZNY.",
      "purpose": "Baseline wątrobowy (ALT/AST już podwyższone → PRZECIWWSKAZANIE). Baseline HPTA + lipidowy."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tygodnie 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x norma → NATYCHMIASTOWE odstawienie), lipidogram, hormon (monitor supresji HPTA), ocena szpitalna jeśli wzrasta bilirubina.",
      "purpose": "Monitor wątrobowy KRYTYCZNY. Przypadki SARM-induced DILI o szybkiej progresji udokumentowane (Hilal 2020 — piorunujące po 9 tygodniach)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia dawka +4-7 dni start PCT (Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni)",
      "markers": "Panel wątrobowy (normalizacja), hormon (Total T, LH, FSH, E2, SHBG), odzyskanie lipidów.",
      "purpose": "Weryfikacja odzyskania HPTA + normalizacji wątrobowej. Pełne odzyskanie 3-6 miesięcy."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "RAD-140 cruise NIE standard — tylko użycie cykliczne",
      "markers": "N/A",
      "purpose": "RAD-140 maksimum 8 tygodni cyklu; cruise NIE zalecany z powodu kumulatywnej hepatotoksyczności."
    }
  }
}
