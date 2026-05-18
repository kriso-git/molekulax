// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.618Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "aripiprazole",
  "name": "Aripiprazole",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Atypowy antypsychotyk, częściowy agonista D2/5-HT1A (Otsuka/BMS Abilify). Schizofrenia + ChAD + augmentacja MDD + Tourette + drażliwość w autyzmie.",
  "description": "Aripiprazol to \"trzecia generacja\" atypowego antypsychotyku (Otsuka/BMS Abilify, FDA 2002). Mechanizm: częściowy agonista D2-DOPAMINY (~30% aktywności intrinsic) + częściowy agonista 5-HT1A + antagonista 5-HT2A. Unikalna farmakologia: w obszarach nadaktywnej dopaminy (mezolimbiczne, objawy pozytywne) hamuje, w obszarach niedoczynnej dopaminy (mezokortykalne, objawy negatywne, anhedonia) częściowo stymuluje. Wynik kliniczny: niższe działania metaboliczne (vs olanzapina), mniej sedujący, mniej podwyższania prolaktyny. Ostrzeżenie FDA dla zaburzeń kontroli impulsów (kompulsywny hazard, hyperseksualność) — rzadkie ale znaczące z powodu częściowego agonizmu D2.",
  "mechanism": "Częściowy agonista D2-DA (~30% intrinsic) + częściowy agonista 5-HT1A + antagonista 5-HT2A. Funkcjonalny stabilizator dopaminy.",
  "legalStatus": "UE/PL: na receptę (Abilify, generyki). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (acute), 4-6 weeks (full response)",
  "halfLife": "~75 h (active metabolite dehydroaripiprazole 94 h)",
  "atcCode": "N05AX12",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Schizofrenia (dorośli + 13+ lat młodzież)",
    "ChAD I, ostra mania + podtrzymanie (dorośli + 10+ lat)",
    "Augmentacja MDD (częste off-label, zatwierdzone FDA jako Abilify)",
    "Zespół Tourette'a, drażliwość w autyzmie (6+ lat)"
  ],
  "contraindications": [
    "Znana nadwrażliwość na aripiprazol, ciężka choroba CV",
    "U starszych z psychozą demencyjną (wzrost śmiertelności, FDA boxed)"
  ],
  "commonSideEffects": [
    "Akatyzja (niepokój ruchowy, 25%, często zależne od dawki)",
    "Nudności, ból głowy, bezsenność lub sedacja",
    "Ciężkie, rzadkie: zaburzenie kontroli impulsów (hazard, hyperseksualność — ostrzeżenie FDA 2016), złośliwy zespół neuroleptyczny, dyskinezy późne (przewlekłe)",
    "Profil metaboliczny LEPSZY niż olanzapina/kwetiapina, ale NIE całkowicie neutralny (umiarkowany przyrost masy, tolerancja glukozy)"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP2D6 substrate (significant in poor metabolizers)",
    "Mild CYP inhibitor"
  ],
  "crossMolInteractions": [
    "Silne inhibitory CYP3A4 (ketokonazol, klarytromycyna): redukcja dawki o 50%",
    "Induktor CYP3A4 (karbamazepina, ryfampicyna): potrzeba eskalacji dawki",
    "Silne inhibitory CYP2D6 (fluoksetyna, paroksetyna): redukcja dawki"
  ],
  "benefits": [
    "Niższe działania metaboliczne (vs olanzapina, kwetiapina)",
    "Mniej sedacji (pozwala na aktywność dzienną)",
    "Mało podwyższenia prolaktyny (vs risperydon)",
    "Zatwierdzony FDA dla augmentacji MDD (MDD oporne na leczenie)"
  ],
  "studies": [
    {
      "title": "Aripiprazole in patients with schizophrenia: a multicenter, randomized trial",
      "authors": "Kane JM, Carson WH, Saha AR et al.",
      "journal": "J Clin Psychiatry. 2002;63(9):763-71.",
      "pmid": "12363115"
    },
    {
      "title": "Aripiprazole augmentation for treatment-resistant depression",
      "authors": "Berman RM, Marcus RN, Swanink R et al.",
      "journal": "J Clin Psychiatry. 2007;68(6):843-53.",
      "pmid": "17592907"
    },
    {
      "title": "Impulse-control disorders associated with dopamine partial agonists",
      "authors": "Moore TJ, Glenmullen J, Mattison DR.",
      "journal": "JAMA Intern Med. 2014;174(12):1930-3.",
      "pmid": "25347404"
    }
  ],
  "related": [
    "lamotrigine",
    "sertralin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 15,
      "high": 30
    },
    "unit": "mg/nap",
    "note": "Niska (5 mg): start augmentacji MDD, starsi lub wrażliwi. Średnia (10-15 mg): standard schizofrenii/manii ChAD. Wysoka (20-30 mg): oporna ostra mania, maks. 30 mg/dzień. Niezależnie od jedzenia."
  }
}
