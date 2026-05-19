// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.611Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "levothyroxin",
  "name": "Levothyroxin (L-T4)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Syntetyczne hormonalne uzupełnienie tyroksyną (T4) na niedoczynność tarczycy. Lek podstawowy WHO, jeden z najczęściej przepisywanych leków globalnie. Kotwica wytycznych endokrynologicznych ATA i ETA.",
  "description": "Lewotyroksyna (L-T4) to syntetyczny lewo-izomer endogennej tyroksyny, opracowany przez Knoll AG w latach 50. XX wieku, Synthroid zatwierdzony przez FDA w 1958 r. T4 to prohormon, konwertowany obwodowo do aktywnej T3 trójjodotyroniny przez enzymy dejodynazy (D1, D2, D3). Tygodniowy steady-state w osoczu osiągany w 4-6 tygodni ze względu na 6-7-dniowy okres półtrwania. Wytyczne ATA 2014 dotyczące niedoczynności tarczycy (Jonklaas 2014 PMID 25266247) stawiają monoterapię lewotyroksyną jako standardowe leczenie pierwotnej (Hashimoto) i wtórnej niedoczynności; suplementacja T3 nie jest rutynowo wskazana, z wyjątkiem starannie udokumentowanych przypadków objawowych lub zaburzeń konwersji T3. Dawka początkowa oparta na masie ciała ~1,6 µg/kg/dzień; w wieku >65 lat lub w chorobie niedokrwiennej serca zalecany bardziej ostrożny start (25-50 µg/dzień).",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "H03AA01"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx)"
    },
    {
      "label": "Mechanizm",
      "value": "Uzupełnienie hormonu T4 (konwertuje obwodowo do T3)"
    },
    {
      "label": "Okres półtrwania",
      "value": "6-7 dni (dawkowanie raz dziennie)"
    },
    {
      "label": "Początek",
      "value": "4-6 tygodni (steady-state redukcja TSH)"
    }
  ],
  "mechanism": "Syntetyczna L-T4 jest identyczna z naturalną endogenną T4. W tkankach obwodowych (wątroba, nerki, mięśnie) dejodynazy D1 i D2 konwertują T4 do aktywnej T3 przez 5'-dejodynację. T3 wiąże jądrowe receptory hormonów tarczycy (TR-α, TR-β), gdzie wiąże się z elementami odpowiedzi tarczycy (TRE) i modyfikuje transkrypcję, regulując metabolizm podstawowy, termogenezę, syntezę białek i wiele szlaków metabolicznych.",
  "legalStatus": "UE/PL: na receptę (Euthyrox, Letrox, L-Thyroxin Berlin-Chemie, Synthroid generyki). USA: FDA Rx (Synthroid, Levoxyl, Tirosint, generyki). Brak potencjału nadużywania. Ze względu na wąski indeks terapeutyczny (NTI) zmiana marki w obrębie tej samej Rx jest unikana — wymagana wyższa precyzja dawkowania.",
  "bioavailability": "40-80% (doustnie, na czczo; pokarm i wapń/żelazo zmniejszają — etykieta FDA Synthroid)",
  "onsetTime": "4-6 weeks (steady-state TSH reduction), 7-10 days (initial symptomatic effect)",
  "halfLife": "6-7 days (allowing once-daily dosing; steady-state in 4-6 weeks)",
  "atcCode": "H03AA01",
  "prescriptionStatus": "Na receptę (Rx), lekarz rodzinny lub endokrynolog może przepisać",
  "indications": [
    "Pierwotna niedoczynność tarczycy (Hashimoto autoimmunologiczne, po tyreoidektomii, po jodzie radioaktywnym)",
    "Wtórna/centralna niedoczynność (niewydolność przysadki)",
    "Wrodzona niedoczynność tarczycy",
    "Supresja TSH w zróżnicowanym raku tarczycy (DTC, po tyreoidektomii)",
    "Wole nietoksyczne, supresja TSH dla redukcji wola"
  ],
  "contraindications": [
    "Nieleczona tyreotoksykoza (nadczynność tarczycy)",
    "Nieleczona niewydolność nadnerczy (Addisona) — przed lewotyroksyną wymagane uzupełnienie kortykosteroidów",
    "Ostre MI lub aktywne niedokrwienie (rozważyć; ostrożne rozpoczęcie)",
    "Znana nadwrażliwość na substancję czynną lub substancje pomocnicze"
  ],
  "commonSideEffects": [
    "Objawy nadmiernego uzupełnienia: kołatania, drżenie, pocenie, nietolerancja ciepła, utrata wagi, niepokój",
    "Bezsenność, ból głowy, biegunka (przy szybkim nadmiernym uzupełnieniu)",
    "Długoterminowe subkliniczne nadmierne uzupełnienie: ryzyko migotania przedsionków (starsi), utrata gęstości kości (po menopauzie)",
    "Objawy niedostatecznego uzupełnienia: zmęczenie, nietolerancja zimna, zaparcia, depresja, utrata włosów, obrzęki",
    "Ciężkie, rzadkie: anafilaksja (nadwrażliwość na pomocnicze jak laktoza), pseudotumor cerebri u dzieci"
  ],
  "cyp450": [
    "Not significantly CYP-metabolized",
    "Eliminated via biliary deiodination and conjugation"
  ],
  "crossMolInteractions": [
    "Żelazo, wapń, magnez, leki zobojętniające z glinem, multiwitaminy: REDUKCJA WCHŁANIANIA, wymagany 4-godzinny odstęp",
    "PPI (omeprazol), bloker H2 (famotydyna): wzrost pH żołądka zmniejsza wchłanianie ~30%, wymagany wzrost dawki",
    "Soja, dieta wysokobłonnikowa, kawa (espresso): redukcja wchłaniania, przyjmuj NA CZCZO 30-60 min przed śniadaniem",
    "Warfaryna: wzrost T4 przyspiesza rozkład czynników krzepnięcia zależnych od wit. K, wzrost INR, redukcja dawki",
    "Estrogen (HRT, doustna antykoncepcja): wzrost TBG podnosi całkowite T4, wolne T4 może pozostać stabilne; monitor TSH"
  ],
  "benefits": [
    "Poprawa objawów niedoczynności (zmęczenie, nietolerancja zimna, zaparcia, depresja) po 4-8 tygodniach",
    "TSH normalizuje się (0,4-4,0 mIU/L) w 4-6 tygodniach na dawce steady-state",
    "Redukcja nawrotu raka tarczycy przy dawce supresyjnej TSH",
    "Choroba przewlekła, leczenie dożywotnie, przewidywalna farmakokinetyka",
    "Tanie formy generyczne, długoterminowe dane bezpieczeństwa (60+ lat)"
  ],
  "quickStart": [
    "Zmierz TSH (i wolne T4) przed rozpoczęciem, sprawdź nowy steady-state po 6-8 tygodniach",
    "Przyjmuj rano NA CZCZO, 30-60 min PRZED śniadaniem, z wodą",
    "Wapń, żelazo, magnez i multiwitaminy w ODSTĘPIE 4 godzin",
    "Kawa (espresso) min. 60 min po lewotyroksynie — lub rozważ wieczorne dawkowanie (Bolk 2010)",
    "Powolna eskalacja dawki w wieku >65 lat lub chorobie niedokrwiennej serca (25 µg/2-4 tygodnie)"
  ],
  "expectations": [
    {
      "label": "Tygodnie 1-2",
      "body": "Początkowa poprawa objawów tylko łagodna, sen-energia może już się poprawić. Steady-state w osoczu NIE osiągnięty. Unikaj zbyt szybkiej eskalacji."
    },
    {
      "label": "Tygodnie 6-8",
      "body": "TSH PONOWNY POMIAR. Cel TSH 0,4-2,5 mIU/L w objawowej niedoczynności, 0,1-0,5 mIU/L dla supresji TSH w DTC. Odpowiednia titracja dawki. Steady-state teraz osiągnięty, podstawa decyzji klinicznej."
    },
    {
      "label": "Miesiące 6-12 (stabilizacja)",
      "body": "Na stabilnej dawce TSH corocznie, lub co 6 miesięcy przy zmianie (zmiana masy, ciąża, nowy lek). Przewlekłe dożywotnie leczenie. Unikanie zmiany marki (wąski indeks terapeutyczny)."
    }
  ],
  "quality": {
    "pure": [
      "Merck Euthyrox/L-Thyrox (referencja UE/PL), Berlin-Chemie L-Thyroxin (powszechne w PL)",
      "AbbVie Synthroid (USA referencja), Lloyd Pharmaceutical Levoxyl, Pfizer Tirosint (bez laktozy)",
      "12,5/25/50/75/88/100/112/125/137/150/175/200 µg tabletek — drobne kroki titracji"
    ],
    "caution": [
      "Wąski indeks terapeutyczny (NTI): unikaj zmiany marki, preferowana ta sama marka generyczna",
      "Zbyt agresywna dawka początkowa: ryzyko zdarzenia CV u starszych lub w chorobie niedokrwiennej",
      "W ciąży wymagana zwiększenie dawki (zwykle 20-30%), wzrost zapotrzebowania na T4",
      "Długoterminowe nadmierne uzupełnienie (TSH < 0,1 mIU/L): ryzyko migotania przedsionków i osteoporozy"
    ],
    "avoid": [
      "Nieleczona niewydolność nadnerczy (najpierw kortykosteroid)",
      "Ostre MI lub aktywne niedokrwienie (konsultacja kardiologiczna)",
      "Tyreotoksykoza (aktywna nadczynność tarczycy)",
      "Lewotyroksyna do utraty wagi u pacjentów eutyreotycznych (nadużycie)",
      "Nieleczona niewydolność przysadki (najpierw uzupełnić glukokortykoid, aby zapobiec przełomowi addisonowskiemu)",
      "Znana nadwrażliwość na substancję czynną lub jakąkolwiek substancję pomocniczą",
      "Agresywna dawka supresyjna (TSH <0,1) w chorobie subklinicznej z osteoporozą pomenopauzalną lub migotaniem przedsionków"
    ]
  },
  "interactions": [
    "Liotyronina (T3): kombinacja rzadka, tylko przy starannie udokumentowanym zaburzeniu konwersji T3",
    "Warfaryna: monitor INR przy zmianie dawki lewotyroksyny",
    "PPI (omeprazol, esomeprazol): może być potrzebny wzrost dawki (~25%)",
    "Estrogen HRT, doustna antykoncepcja: eskalacja dawki (wzrost TBG)",
    "Metformina: może wystąpić łagodna redukcja TSH, redukcja dawki rzadko potrzebna"
  ],
  "studies": [
    {
      "title": "Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force",
      "authors": "Jonklaas J, Bianco AC, Bauer AJ et al.",
      "journal": "Thyroid. 2014;24(12):1670-751.",
      "pmid": "25266247"
    },
    {
      "title": "Consensus statement #1: subclinical thyroid disease",
      "authors": "Surks MI, Ortiz E, Daniels GH et al.",
      "journal": "JAMA. 2004;291(2):228-38.",
      "pmid": "14722150"
    },
    {
      "title": "Levothyroxine timing: morning vs bedtime (RCT)",
      "authors": "Bolk N, Visser TJ, Nijman J et al.",
      "journal": "Arch Intern Med. 2010;170(22):1996-2003.",
      "pmid": "21149757"
    },
    {
      "title": "2017 Guidelines of the American Thyroid Association for the diagnosis and management of thyroid disease during pregnancy",
      "authors": "Alexander EK, Pearce EN, Brent GA et al.",
      "journal": "Thyroid. 2017;27(3):315-389.",
      "pmid": "28056690"
    },
    {
      "title": "Combination treatment with T4 and T3 vs T4 alone in hypothyroidism: meta-analysis",
      "authors": "Grozinsky-Glasberg S, Fraser A, Nahshoni E et al.",
      "journal": "J Clin Endocrinol Metab. 2006;91(7):2592-9.",
      "pmid": "16670166"
    },
    {
      "title": "Levothyroxine dose requirements and TSH in pregnancy",
      "authors": "Alexander EK, Marqusee E, Lawrence J et al.",
      "journal": "N Engl J Med. 2004;351(3):241-9.",
      "pmid": "15254282"
    },
    {
      "title": "2014 ETA Guidelines: the use of L-T4 + L-T3 in the treatment of hypothyroidism",
      "authors": "Wiersinga WM, Duntas L, Fadeyev V et al.",
      "journal": "Eur Thyroid J. 2012;1(2):55-71.",
      "pmid": "24782999"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego nie czuję efektu lewotyroksyny w pierwszych tygodniach?",
      "a": "Okres półtrwania T4 to 6-7 dni, więc steady-state w osoczu trwa 4-6 tygodni, a redukcja TSH wymaga tego samego czasu. Poprawa objawów (zmęczenie, nietolerancja zimna, jasność umysłu) zwykle pojawia się klinicznie w 4-8 tygodni. Pierwszy tydzień: możliwa łagodna poprawa sen-energia. Wymagana cierpliwość, a 6-8-tygodniowa kontrola TSH to prawdziwy walidator dawki."
    },
    {
      "q": "Dlaczego ważne jest przyjmowanie na czczo i timing kawy?",
      "a": "Wchłanianie lewotyroksyny optymalne w kwaśnym pH żołądka (<4). Jedzenie, kawa (espresso), dieta wysokobłonnikowa, leki zobojętniające/PPI podnoszą pH żołądka, redukując wchłanianie o 30-40%. Okno 30-60 min na czczo zapewnia maksymalną biodostępność. Alternatywa: przyjąć przed snem 3-4 h po kolacji (Bolk 2010 RCT PMID 21149757) — lepszy compliance dla niektórych."
    },
    {
      "q": "Co oznacza supresja TSH u pacjentów DTC?",
      "a": "W zróżnicowanym raku tarczycy (DTC) po tyreoidektomii + ablacji I-131, dawka podtrzymująca lewotyroksyny jest ustawiona tak, że TSH jest niskie (0,1-0,5 mIU/L lub < 0,1 w wysokim ryzyku). Niskie TSH zmniejsza stymulację wzrostu resztkowych komórek DTC, obniżając ryzyko nawrotu. Długoterminowe ryzyko nadmiernego uzupełnienia (AF, osteoporoza) musi być wyważone, więc wg wytycznych ATA 2015 głębokość supresji TSH zmienia się wg klasy ryzyka (niskie/średnie/wysokie)."
    },
    {
      "q": "Lewotyroksyna w ciąży?",
      "a": "W ciąży zapotrzebowanie na T4 rośnie o ~20-50% z powodu wzrostu TBG indukowanego estrogenami i zapotrzebowania łożyskowego. W znanej niedoczynności tarczycy w ciąży zwiększ dawkę lewotyroksyny o 20-30% natychmiast po rozpoczęciu (lub przed koncepcją), potem sprawdzaj TSH co 4-6 tygodni, cel < 2,5 mIU/L w 1. trymestrze, < 3,0 mIU/L w 2.-3. ATA 2017 (Alexander 2017 PMID 28056690) wytyczne ciążowe. Przewlekłe niedostateczne uzupełnienie szkodzi neurorozwojowi płodu."
    },
    {
      "q": "Czy lewotyroksyna może być stosowana do utraty wagi?",
      "a": "WYRAŹNE NIE. Lewotyroksyna do utraty wagi u pacjentów eutyreotycznych jest NIEBEZPIECZNA i klinicznie NIESKUTECZNA: iatrogenna tyreotoksykoza powoduje migotanie przedsionków, utratę kości, atrofię mięśni, stres CV, zaburzenia nastroju, podczas gdy utrata wagi jest tylko krótkoterminowa i odwracalna (utrata wody + mięśni, nie tłuszczu). Leki na utratę wagi: GLP-1 RA (semaglutyd, liraglutyd) lub inne zatwierdzone przez FDA wskazane. Protokoły UE/USA dotyczące nadużyć surowo karzą niewłaściwe stosowanie lewotyroksyny."
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "tshWeight",
    "tshWeight": {
      "kgFactor": 1.6,
      "unitsPerKg": "µg",
      "adjustForAgeOver65": true
    },
    "unit": "µg/nap",
    "note": "Dawka początkowa oparta na masie ciała wg ATA 2014 (Jonklaas) ~1,6 µg/kg/dzień dla pełnego uzupełnienia T4 (po tyreoidektomii lub ciężkiej pierwotnej niedoczynności). W subklinicznej lub łagodnej pierwotnej niedoczynności wystarczy zwykle start 25-50 µg/dzień z powolną titracją. Wiek >65 lat lub choroba niedokrwienna: start 25 µg/dzień, 25 µg/2-4 tygodnie powolna eskalacja. Przyjmuj rano NA CZCZO, 30-60 min przed śniadaniem."
  }
}
