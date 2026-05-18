// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.608Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "atorvastatin",
  "name": "Atorvastatin",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Najczęściej przepisywana statyna o wysokiej intensywności, inhibitor reduktazy HMG-CoA. Kotwica wytycznych lipidowych AHA/ACC i ESC od 1996 r. Złoty standard pierwotnej i wtórnej prewencji ASCVD.",
  "description": "Atorwastatyna to syntetyczny, lipofilny inhibitor reduktazy HMG-CoA opracowany przez Pfizer (Lipitor, FDA 1996). Hamuje krok ograniczający szybkość syntezy cholesterolu w wątrobie, regulując w górę receptory LDL w hepatocytach i obniżając LDL-cholesterol w osoczu. Badania TNT (Treating to New Targets, LaRosa 2005 NEJM), CARDS (Colhoun 2004 Lancet) i SPARCL (Amarenco 2006 NEJM) udowodniły korzyść w punktach końcowych sercowo-naczyniowych (MI, udar) i mózgowo-naczyniowych. Metaanaliza Cholesterol Treatment Trialists' (CTT) (Baigent 2010 Lancet PMID 21067804) wykazała, że każde obniżenie LDL o 1 mmol/L daje ~22% względną redukcję ryzyka poważnych zdarzeń naczyniowych. Wysoka intensywność (40-80 mg) celuje w redukcję LDL ≥50% dla pierwotnej (LDL ≥4,9 mmol/L) lub wtórnej (wywiad ASCVD) prewencji wg wytycznych.",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "C10AA05"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx)"
    },
    {
      "label": "Mechanizm",
      "value": "Inhibitor reduktazy HMG-CoA (statyna)"
    },
    {
      "label": "Okres półtrwania",
      "value": "14 h (aktywne metabolity 20-30 h)"
    },
    {
      "label": "Redukcja LDL (40-80 mg)",
      "value": "50-60% (wysoka intensywność)"
    }
  ],
  "mechanism": "Konkurencyjnie hamuje reduktazę HMG-CoA w hepatocytach, zmniejszając szlak mewalonianu (spowolnienie de novo syntezy cholesterolu). Zmniejszony cholesterol wewnątrzkomórkowy reguluje w górę receptory LDL, oczyszczając krążący LDL do wątroby. Efekty plejotropowe: przeciwzapalne (redukcja CRP w JUPITER), poprawa funkcji śródbłonka, stabilizacja blaszki.",
  "legalStatus": "UE/PL: na receptę (Sortis, Atoris, Tulip, Atorvox, generyki). USA: FDA Rx (Lipitor, generyki). Brak potencjału nadużywania, niekontrolowany. Formy generyczne biorównoważne (FDA Orange Book AB).",
  "onsetTime": "1-2 weeks (lipid lowering), 4-6 weeks (steady-state LDL effect)",
  "halfLife": "14 h (parent), 20-30 h (active ortho- and para-hydroxylated metabolites)",
  "atcCode": "C10AA05",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Pierwotna hipercholesterolemia (LDL ≥4,9 mmol/L lub ryzyko ASCVD ≥7,5% w 10 lat)",
    "Wtórna prewencja przy wywiadzie ASCVD (MI, udar, PAD, zwężenie tętnic wieńcowych)",
    "Rodzinna hipercholesterolemia (FH)",
    "Dyslipidemia związana z T2DM (dowody CARDS)",
    "Hipertriglicerydemia (>5,6 mmol/L) leczenie drugorzędne"
  ],
  "contraindications": [
    "Aktywna choroba wątroby lub trwałe niewyjaśnione podwyższenie ALT (>3x ULN)",
    "Ciąża i karmienie piersią (synteza lipidów potrzebna dla rozwoju zarodkowego)",
    "Jednoczesne stosowanie silnego inhibitora CYP3A4 (klarytromycyna, itrakonazol, rytonawir)",
    "Aktywna rabdomioliza lub podwyższenie CK > 10x ULN"
  ],
  "commonSideEffects": [
    "Ból mięśni, mialgia (5-10%, zależne od dawki, najczęstsze przy 80 mg)",
    "Podwyższenie ALT/AST (1-2%, zwykle odwracalne, redukcja dawki lub odstawienie)",
    "Nieznacznie zwiększone ryzyko nowo wykrytej T2DM (~9% względne, JUPITER post-hoc)",
    "GI: nudności, biegunka, zaparcia (5%)",
    "Ciężkie, rzadkie: rabdomioliza (CK > 10x ULN + mioglobinuria, < 0,1%)"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP3A4 inhibitor (mild)",
    "OATP1B1 transporter substrate"
  ],
  "crossMolInteractions": [
    "Silny inhibitor CYP3A4 (klarytromycyna, itrakonazol, rytonawir, sok grejpfrutowy): ryzyko rabdomiolizy, przeciwwskazane",
    "Cyklosporyna: 8-15x wzrost AUC, redukcja dawki lub odstawienie",
    "Gemfibrozyl: ryzyko rabdomiolizy przy łączeniu statyny + fibratu, unikaj (fenofibrat ok)",
    "Warfaryna: możliwy łagodny wzrost INR, monitoruj INR przy rozpoczęciu",
    "Ezetymib, inhibitor PCSK9: synergistyczne obniżenie LDL, racjonalna kombinacja"
  ],
  "benefits": [
    "Redukcja LDL 30-60% (zależne od dawki, 10-80 mg)",
    "Redukcja MI, udaru, śmiertelności sercowo-naczyniowej w prewencji pierwotnej i wtórnej (CTT meta)",
    "Redukcja udarów przy wywiadzie udaru niedokrwiennego (SPARCL)",
    "Kardioprotekcja w dyslipidemii T2DM (CARDS, 37% redukcja MACE)",
    "Redukcja CRP, stabilizacja blaszki, poprawa funkcji śródbłonka"
  ],
  "quickStart": [
    "Wyjściowy lipidogram (LDL, HDL, TG, cholesterol całkowity), ALT/AST, CK na początku",
    "Przyjmuj wieczorem (lub o dowolnej porze, ze względu na długi okres półtrwania)",
    "UNIKAJ soku grejpfrutowego (zahamowanie CYP3A4 podnosi poziomy w osoczu)",
    "Kontrola lipidów po 4-12 tygodniach, titracja do celu (LDL < 1,8 mmol/L wtórna)",
    "Przy bólu mięśni zmierz CK; jeśli CK > 5x ULN, redukcja dawki lub odstawienie"
  ],
  "expectations": [
    {
      "label": "Tygodnie 1-2",
      "body": "Efekt obniżający lipidy staje się mierzalny, ale steady-state LDL trwa 4-6 tygodni."
    },
    {
      "label": "Tygodnie 4-6",
      "body": "Kontrola lipidogramu. Typowy spadek LDL: 35-40% przy 10 mg, 40-45% przy 20 mg, 45-55% przy 40 mg, 55-60% przy 80 mg."
    },
    {
      "label": "Miesiące 6-12",
      "body": "Kontrola ALT/AST/CK; jeśli bezobjawowo, dalej corocznie. Długoterminowe przestrzeganie jest kluczowe dla korzyści CV."
    }
  ],
  "quality": {
    "pure": [
      "Pfizer Lipitor (oryginator); generyki Sandoz/Krka/Teva biorównoważne",
      "Rynek UE: Sortis, Atoris, Tulip, Atorvox, Atorvastatin Krka"
    ],
    "caution": [
      "Przy bólu mięśni zmierz CK (CK > 5x ULN redukcja, > 10x ULN STOP)",
      "Niewielkie ryzyko nowej T2DM, zwłaszcza u osób z prediabetes",
      "Długoterminowa tolerancja statyny: ból mięśni może wracać okresowo"
    ],
    "avoid": [
      "Aktywna choroba wątroby lub trwałe podwyższenie ALT",
      "Ciąża i karmienie piersią (kategoria X FDA)",
      "Jednoczesny silny inhibitor CYP3A4",
      "Regularne spożywanie soku grejpfrutowego",
      "Wywiad rabdomiolizy lub ciężkiej miopatii indukowanej statyną",
      "Niewyjaśnione, utrzymujące się podwyższenie aminotransferaz w surowicy (>3x ULN)",
      "Jednoczesne stosowanie cyklosporyny (zwiększone ryzyko rabdomiolizy)"
    ]
  },
  "interactions": [
    "Ezetymib (Inegy stała kombinacja): synergistyczne obniżenie LDL (+15-20%)",
    "Inhibitor PCSK9 (ewolokumab, alirokumab): kombinacja u pacjentów wysokiego ryzyka",
    "Niacyna (wysokie dawki): zwiększone ryzyko miopatii, ostrożna kombinacja",
    "Fenofibrat: można łączyć w przeciwieństwie do gemfibrozylu, niskie ryzyko miopatii",
    "Antytrombotyczne (klopidogrel, aspiryna): brak interakcji farmakokinetycznych"
  ],
  "studies": [
    {
      "title": "Intensive lipid lowering with atorvastatin in patients with stable coronary disease (TNT)",
      "authors": "LaRosa JC, Grundy SM, Waters DD et al.",
      "journal": "N Engl J Med. 2005;352(14):1425-35.",
      "pmid": "15755765"
    },
    {
      "title": "Primary prevention of cardiovascular disease with atorvastatin in type 2 diabetes (CARDS)",
      "authors": "Colhoun HM, Betteridge DJ, Durrington PN et al.",
      "journal": "Lancet. 2004;364(9435):685-96.",
      "pmid": "15325833"
    },
    {
      "title": "High-dose atorvastatin after stroke or transient ischemic attack (SPARCL)",
      "authors": "Amarenco P, Bogousslavsky J, Callahan A 3rd et al.",
      "journal": "N Engl J Med. 2006;355(6):549-59.",
      "pmid": "16899775"
    },
    {
      "title": "Efficacy and safety of cholesterol-lowering treatment: prospective meta-analysis (CTT)",
      "authors": "Baigent C, Blackwell L, Emberson J et al.",
      "journal": "Lancet. 2010;376(9753):1670-81.",
      "pmid": "21067804"
    },
    {
      "title": "Effects of atorvastatin on early recurrent ischemic events in acute coronary syndromes (MIRACL)",
      "authors": "Schwartz GG, Olsson AG, Ezekowitz MD et al.",
      "journal": "JAMA. 2001;285(13):1711-8.",
      "pmid": "11268233"
    },
    {
      "title": "Prevention of coronary and stroke events with atorvastatin (ASCOT-LLA)",
      "authors": "Sever PS, Dahlöf B, Poulter NR et al.",
      "journal": "Lancet. 2003;361(9364):1149-58.",
      "pmid": "12686036"
    },
    {
      "title": "2018 AHA/ACC/Multisociety guideline on the management of blood cholesterol",
      "authors": "Grundy SM, Stone NJ, Bailey AL et al.",
      "journal": "Circulation. 2019;139(25):e1082-e1143.",
      "pmid": "30586774"
    }
  ],
  "faq": [
    {
      "q": "Jak wybrać między statyną o niskiej, średniej a wysokiej intensywności?",
      "a": "Wg wytycznych AHA/ACC 2018 wybór zależy od stratyfikacji ryzyka: prewencja wtórna (ASCVD) lub LDL ≥4,9 mmol/L lub FH → wysoka intensywność (atorwastatyna 40-80 mg, rozuwastatyna 20-40 mg). Ryzyko ASCVD 7,5-20% w 10 lat → średnia-wysoka. < 7,5% i brak innego ryzyka → poradnictwo stylu życia lub niska-średnia."
    },
    {
      "q": "Czym jest ból mięśni indukowany statyną i kiedy STOP?",
      "a": "SAMS (Statin-Associated Muscle Symptoms) to typowo symetryczny, proksymalny (udo, ramię) ból mięśni pojawiający się w pierwszych 6 miesiącach. Pomiar CK decyduje: CK ≤ 5x ULN, redukcja dawki lub zmiana (rozuwastatyna, prawastatyna); CK > 5x ULN, STOP. Rabdomioliza (CK > 10x ULN + mioglobinuria) to stan nagły. Efekt nocebo znaczący: badanie SAMSON (Howard 2021 JACC PMID 33214287) wykazało, że 90% objawów występowało także przy placebo."
    },
    {
      "q": "Czy statyny zwiększają ryzyko cukrzycy?",
      "a": "Tak, łagodnie. Post-hoc JUPITER i metaanaliza CTT (Baigent 2010) pokazują ~9-12% wzrost względnego ryzyka nowej T2DM, głównie u osób z prediabetes. Korzyść CV znacznie to przewyższa, więc wg wskazania wytycznych statyna powinna być kontynuowana. Interwencja stylu życia (utrata masy, aktywność) stosowana łącznie."
    },
    {
      "q": "Dlaczego NIE MOGĘ pić soku grejpfrutowego na atorwastatynie?",
      "a": "Furanokumaryny soku grejpfrutowego (bergamottyna, dihydroksybergamottyna) inaktywują jelitowy CYP3A4, zmniejszając metabolizm pierwszego przejścia atorwastatyny o ~50% i podnosząc poziomy w osoczu i AUC o 80-100%. To zwiększa ryzyko miopatii i rabdomiolizy. Efekt trwa 24-72 godzin, więc oddzielne pory nie wystarczają. Prawastatyna nie jest substratem CYP3A4 i jest bezpieczna."
    },
    {
      "q": "Czy statyna może być odstawiona przy zmianie stylu życia?",
      "a": "Sama interwencja stylu życia (dieta śródziemnomorska, aktywność, utrata masy) daje 5-15% redukcję LDL, nie zastępując statyny u pacjentów średnio-wysokiego ryzyka. W prewencji wtórnej (wywiad ASCVD) sam styl życia NIE wystarcza, statyna musi być kontynuowana. W prewencji pierwotnej niskiego ryzyka (ASCVD 10-letnie < 5%) próba styl życia-pierwszy może być przewartościowana, ale pod nadzorem lekarza."
    }
  ],
  "related": [
    "tadalafil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 10,
      "medium": 40,
      "high": 80
    },
    "unit": "mg/nap",
    "note": "Klasyfikacja intensywności AHA/ACC 2018. Niska intensywność (10 mg, ~35% spadek LDL): prewencja pierwotna niskiego ryzyka. Średnia-wysoka (40 mg, ~45-55%): standardowa prewencja wtórna. Wysoka intensywność (80 mg, ~55-60%): FH lub prewencja wtórna wysokiego ryzyka. Dawkowanie wieczorne typowe, ale nie krytyczne ze względu na długi okres półtrwania."
  }
}
