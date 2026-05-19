// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.607Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "metformin",
  "name": "Metformin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Lek pierwszego rzutu w terapii doustnej cukrzycy typu 2 na całym świecie. Lek podstawowy WHO, kotwica wytycznych ADA i EASD od 1957 r.",
  "description": "Metformina to doustny lek przeciwcukrzycowy z grupy biguanidów, którego głównym działaniem jest hamowanie glukoneogenezy wątrobowej poprzez aktywację kinazy białkowej aktywowanej AMP (AMPK). Obecnie najbezpieczniejszy i najtańszy licencjonowany lek na T2DM, z udokumentowaną korzyścią sercowo-naczyniową u otyłych cukrzyków od czasu UKPDS-34 (1998, Lancet). Konsensus ADA/EASD 2022 stawia Metforminę jako leczenie początkowe dla wszystkich pacjentów z T2DM bez ASCVD, niewydolności serca lub priorytetu CKD (tam pierwszeństwo mają SGLT2i lub GLP-1 RA). Wskazania off-label: stan przedcukrzycowy (DPP 2002 NEJM), brak owulacji w PCOS, cukrzyca ciążowa, łagodzenie przyrostu masy ciała indukowanego antypsychotykami.",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "A10BA02"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx)"
    },
    {
      "label": "Mechanizm",
      "value": "Aktywator AMPK, inhibitor glukoneogenezy wątrobowej"
    },
    {
      "label": "Okres półtrwania",
      "value": "4-9 h (osocze), 17 h (erytrocyty)"
    },
    {
      "label": "Początek",
      "value": "1-3 h (pojedyncza dawka), 4-7 dni (steady-state HbA1c)"
    }
  ],
  "mechanism": "Przez aktywację AMPK hamuje glukoneogenezę wątrobową (represja PEPCK i G6Pase), zmniejsza aktywność mitochondrialnego kompleksu I (Owen 2000 Biochem J), zwiększa obwodową wrażliwość na insulinę i wychwyt glukozy w mięśniach szkieletowych. Nie stymuluje wydzielania insuliny, dlatego ryzyko hipoglikemii w monoterapii jest minimalne.",
  "legalStatus": "UE/PL: na receptę (Glucophage, Siofor, Metformax, Formetic). USA: FDA Rx (Glucophage, Fortamet, Glumetza). Brak potencjału nadużywania, nie jest substancją kontrolowaną. Wskazania PCOS i stan przedcukrzycowy są off-label, ale powszechne w praktyce klinicznej.",
  "bioavailability": "~50-60% (doustnie, na czczo, tabletka 500 mg — etykieta FDA Glucophage)",
  "onsetTime": "1-3 h (single dose), 4-7 days (steady-state HbA1c lowering)",
  "halfLife": "4-9 h (plasma), ~17 h (erythrocyte compartment)",
  "atcCode": "A10BA02",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Cukrzyca typu 2 (T2DM) leczenie pierwszego rzutu",
    "Zapobieganie progresji stanu przedcukrzycowego (off-label, dowody DPP 2002)",
    "Zespół policystycznych jajników (PCOS), brak owulacji i insulinooporność",
    "Cukrzyca ciążowa (druga linia, po insulinie)",
    "Łagodzenie przyrostu masy ciała indukowanego antypsychotykami"
  ],
  "contraindications": [
    "Ciężka niewydolność nerek (eGFR < 30 ml/min/1.73 m²)",
    "Ostra kwasica metaboliczna (kwasica ketonowa, historia kwasicy mleczanowej)",
    "Ostra ciężka niewydolność serca, stany hipoksyczne, wstrząs",
    "Ciężka niewydolność wątroby",
    "Przerwa 48 h przy badaniu z kontrastem jodowym"
  ],
  "commonSideEffects": [
    "Żołądkowo-jelitowe: nudności, biegunka, dyskomfort brzucha (20-30%, łagodzone z jedzeniem)",
    "Metaliczny smak (przejściowy)",
    "Zmniejszone wchłanianie B12 przy długotrwałym stosowaniu (kontrola roczna)",
    "Ciężkie ale rzadkie: kwasica mleczanowa (< 0,03 przypadku / 1000 pacjentolat, głównie w niewydolności nerek)"
  ],
  "cyp450": [
    "No significant CYP450 metabolism",
    "OCT1/OCT2 transporter substrate",
    "MATE1/MATE2-K renal excretion"
  ],
  "crossMolInteractions": [
    "Kontrast jodowy: przerwa 48 h przed i po, kontrola czynności nerek",
    "Alkohol: zwiększa ryzyko kwasicy mleczanowej, wymagana umiarkowanie",
    "Cymetydyna, Dolutegrawir: blokada OCT2, poziom metforminy w osoczu może wzrosnąć",
    "Furosemid, Hydrochlorotiazyd: tendencja hiperglikemiczna (efekt leku może być zmniejszony)",
    "GLP-1 RA, SGLT2i: synergistyczne, racjonalna kombinacja (ADA/EASD 2022)"
  ],
  "benefits": [
    "Obniżenie HbA1c zwykle 1,0-1,5% (monoterapia)",
    "Neutralny dla wagi lub łagodnie redukuje wagę (średnio -2 kg)",
    "Korzyść w punkcie końcowym sercowo-naczyniowym u otyłych T2DM (UKPDS-34)",
    "Minimalne ryzyko hipoglikemii w monoterapii",
    "Tani, generyczny, dekady danych bezpieczeństwa (od 1957 r.)"
  ],
  "quickStart": [
    "Sprawdź czynność nerek (eGFR) przed startem, potem co 6-12 miesięcy",
    "Zawsze przyjmuj z posiłkami, by zmniejszyć działania niepożądane z GI",
    "Powolna titracja: 500 mg/dzień, zwiększanie tygodniowo wg tolerancji",
    "Forma XR (o przedłużonym uwalnianiu) jest lepiej tolerowana niż IR",
    "Poziom B12 corocznie przy długotrwałym stosowaniu"
  ],
  "expectations": [
    {
      "label": "Tydzień 1",
      "body": "500 mg/dzień z posiłkami. Działania niepożądane GI (nudności, luźne stolce) częste w 30%, zwykle ustępują w ciągu 1-2 tygodni."
    },
    {
      "label": "Tygodnie 2-4",
      "body": "Powolna eskalacja dawki do 1000-1500 mg/dzień. Objawy GI ustępują. Monitorowanie glikemii (domowe FPG i/lub CGM)."
    },
    {
      "label": "Miesiące 3-4",
      "body": "Pomiar HbA1c. Typowa redukcja 1,0-1,5% w monoterapii. Jeśli cel (zwykle < 7%) nie osiągnięty, ADA/EASD 2022 zaleca dodanie drugiego leku (GLP-1 RA, SGLT2i)."
    }
  ],
  "quality": {
    "pure": [
      "Bayer Glucophage, Merck Siofor, Adimet (HU), Metformax (PL): leki referencyjne",
      "Formy generyczne są biorównoważne (rating AB w FDA Orange Book)"
    ],
    "caution": [
      "Ostra choroba (gorączka, odwodnienie): chwilowo wstrzymać z powodu ryzyka kwasicy mleczanowej",
      "eGFR 30-45 ml/min: wymagana redukcja dawki, eGFR < 30: przeciwwskazane",
      "Niedobór B12 przy długotrwałym stosowaniu, kontrola roczna"
    ],
    "avoid": [
      "Ciężka niewydolność nerek (eGFR < 30)",
      "Kwasica ketonowa lub inna kwasica metaboliczna",
      "Ciężka niewydolność serca (NYHA III-IV), hipoksja, wstrząs",
      "Dzień badania z kontrastem jodowym i 48 h po nim (ryzyko kwasicy mleczanowej, do ponownej oceny czynności nerek)",
      "Ostra ciężka infekcja, sepsa, odwodnienie (tymczasowe wstrzymanie z powodu ryzyka kwasicy mleczanowej)",
      "Ciężka niewydolność wątroby (zmniejszony klirens mleczanu, przeciwwskazane zgodnie z etykietą FDA)"
    ]
  },
  "interactions": [
    "GLP-1 RA (Semaglutyd, Liraglutyd): synergistyczne, racjonalna kombinacja (ADA/EASD 2022)",
    "Inhibitor SGLT2 (Empagliflozyna, Dapagliflozyna): połączenie kardio-renoprotekcyjne",
    "Insulina: można łączyć, ale może być potrzebna redukcja dawki insuliny",
    "Kontrast jodowy: 48 h przerwa przed badaniem, kontrola czynności nerek",
    "Alkohol: ryzyko kwasicy mleczanowej, umiarkowanie"
  ],
  "studies": [
    {
      "title": "Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34)",
      "authors": "UK Prospective Diabetes Study (UKPDS) Group.",
      "journal": "Lancet. 1998;352(9131):854-65.",
      "pmid": "9742977"
    },
    {
      "title": "Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin (DPP)",
      "authors": "Diabetes Prevention Program Research Group.",
      "journal": "N Engl J Med. 2002;346(6):393-403.",
      "pmid": "11832527"
    },
    {
      "title": "Evidence that metformin exerts its anti-diabetic effects through inhibition of complex 1 of the mitochondrial respiratory chain",
      "authors": "Owen MR, Doran E, Halestrap AP.",
      "journal": "Biochem J. 2000;348(Pt 3):607-14.",
      "pmid": "10839993"
    },
    {
      "title": "Role of AMP-activated protein kinase in mechanism of metformin action",
      "authors": "Zhou G, Myers R, Li Y et al.",
      "journal": "J Clin Invest. 2001;108(8):1167-74.",
      "pmid": "11602624"
    },
    {
      "title": "Management of hyperglycaemia in type 2 diabetes, 2022. A consensus report by ADA and EASD",
      "authors": "Davies MJ, Aroda VR, Collins BS et al.",
      "journal": "Diabetologia. 2022;65(12):1925-1966.",
      "pmid": "36151309"
    },
    {
      "title": "Metformin use in pregnancy: promises and concerns",
      "authors": "Lindsay RS, Loeken MR.",
      "journal": "Diabetologia. 2017;60(9):1612-1619.",
      "pmid": "28770325"
    },
    {
      "title": "Long-term metformin use and vitamin B12 deficiency in the Diabetes Prevention Program Outcomes Study",
      "authors": "Aroda VR, Edelstein SL, Goldberg RB et al.",
      "journal": "J Clin Endocrinol Metab. 2016;101(4):1754-61.",
      "pmid": "26900641"
    }
  ],
  "faq": [
    {
      "q": "Kiedy zmienić Metforminę na Semaglutyd lub SGLT2i?",
      "a": "Wg ADA/EASD 2022 zwykle dodaje się, a nie zmienia. Przy ASCVD lub niewydolności serca priorytetyzuje się GLP-1 RA lub SGLT2i już w pierwszej linii, ewentualnie bez metforminy. Przy priorytecie CKD (albuminuria) SGLT2i."
    },
    {
      "q": "Co oznacza ryzyko kwasicy mleczanowej?",
      "a": "Nowoczesne dane pokazują częstość kwasicy mleczanowej związanej z metforminą < 0,03 przypadku / 1000 pacjentolat przy prawidłowej funkcji nerek, nieporównywalną ze starą Fenforminą (wycofana 1977). Ciężka ostra choroba, odwodnienie, uszkodzenie nerek, nadużywanie alkoholu, obrazowanie kontrastowe to oddzielne czynniki ryzyka."
    },
    {
      "q": "Co zrobić, gdy działania niepożądane GI nie ustępują?",
      "a": "Najpierw spowolnij titrację (500 mg/2 tyg.), wybierz XR (o przedłużonym uwalnianiu), zawsze przyjmuj z jedzeniem. Jeśli brak poprawy po 4 tygodniach, rozważ redukcję dawki lub alternatywę (SGLT2i, GLP-1 RA). Wg DPP ~5% trwale nie toleruje."
    },
    {
      "q": "Czy metformina może być stosowana w ciąży?",
      "a": "Wytyczne ACOG i NICE dopuszczają metforminę jako drugą linię leczenia cukrzycy ciążowej, gdy insulina nie jest opcją lub wg preferencji pacjenta. Badanie MiG (Rowan 2008 NEJM PMID 18463376) potwierdziło bezpieczeństwo. Długoterminowe dane dotyczące dzieci są korzystne, ale insulina pozostaje złotym standardem."
    },
    {
      "q": "Czy zmiana stylu życia może zastąpić metforminę?",
      "a": "Badanie DPP (2002 NEJM) wykazało, że intensywna interwencja stylu życia (7% utrata wagi, 150+ minut aktywności fizycznej tygodniowo) zmniejszyła zachorowalność na T2DM o 58% w stanie przedcukrzycowym vs 31% dla metforminy. Styl życia jest więc lepszy, ale metformina jest trwalsza pod względem compliance (DPPOS 10-letnia obserwacja). W ustalonym T2DM nie zastępuje, tylko uzupełnia."
    }
  ],
  "related": [
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1-2",
        "dose": "500"
      },
      {
        "phase": "Tydzień 3-4",
        "dose": "1000"
      },
      {
        "phase": "Tydzień 5-8",
        "dose": "1500"
      },
      {
        "phase": "Dawka docelowa",
        "dose": "2000"
      }
    ],
    "unit": "mg/nap",
    "note": "Powolna titracja dla tolerancji GI. Zawsze z jedzeniem, preferuj XR (o przedłużonym uwalnianiu). Maks. 2000-2550 mg/dzień, redukcja dawki wg czynności nerek (eGFR)."
  }
}
