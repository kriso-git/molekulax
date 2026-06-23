// Orforglipron (LY3502970) – doustny mało-cząsteczkowy agonista receptora
// GLP-1 firmy Eli Lilly. NIE peptyd – mała cząsteczka, dlatego należy do
// biblioteki pharmaceutical (NIE peptides). Fazy 3 obesity (ATTAIN) + T2DM
// (ACHIEVE) w toku 2026, zatwierdzenie FDA spodziewane 2026-2027.
// Źródła: Wharton 2023 NEJM Phase 2 obesity PMID 37356087, Frías 2023 NEJM
// Phase 2 T2DM PMID 37356866.

export default {
  "id": "orforglipron",
  "sideEffects": [
    { "hu": "Gasztrointesztinális panaszok (hányinger, hányás, hasmenés, hasi diszkomfort), különösen a dózistitrálás alatt; ezek dózisfüggőek és a leggyakoribb mellékhatások, bár az injektábilis peptid GLP-1 RA-knál valamivel kisebb incidenciával.", "en": "Gastrointestinal effects (nausea, vomiting, diarrhea, abdominal discomfort), especially during dose titration; these are dose-dependent and the most common adverse events, though with somewhat lower incidence than injectable peptide GLP-1 RAs.", "pl": "Zaburzenia żołądkowo-jelitowe (nudności, wymioty, biegunka, dyskomfort w jamie brzusznej), zwłaszcza podczas zwiększania dawki; są zależne od dawki i stanowią najczęstsze działania niepożądane, choć z nieco mniejszą częstością niż w przypadku iniekcyjnych peptydowych agonistów GLP-1." },
    { "hu": "Étvágycsökkenés és gyors telítettségérzés, valamint az ezzel együtt járó testtömegcsökkenés; ez részben a hatásmechanizmus része, de nem kívánt fokú soványodáshoz, izomvesztéshez is vezethet.", "en": "Decreased appetite and early satiety with associated weight loss; this is partly mechanism-related but can also lead to unwanted degree of weight and lean-mass loss.", "pl": "Zmniejszony apetyt i wczesne uczucie sytości wraz z towarzyszącą utratą masy ciała; jest to częściowo związane z mechanizmem działania, ale może też prowadzić do niepożądanego stopnia chudnięcia i utraty masy mięśniowej." },
    { "hu": "Hipoglikémia kockázata, ha inzulinnal vagy szulfonilureával kombinálják (önmagában a GLP-1 RA glükózfüggő hatása miatt a hipoglikémia kockázata alacsony).", "en": "Risk of hypoglycemia when combined with insulin or a sulfonylurea (on its own the GLP-1 RA glucose-dependent action makes hypoglycemia risk low).", "pl": "Ryzyko hipoglikemii w połączeniu z insuliną lub pochodną sulfonylomocznika (samodzielnie ryzyko hipoglikemii jest niskie ze względu na glukozozależne działanie agonisty GLP-1)." },
    { "hu": "Fejfájás, fáradtság, szédülés a kezelés korai szakaszában.", "en": "Headache, fatigue, and dizziness in the early phase of treatment.", "pl": "Ból głowy, zmęczenie i zawroty głowy we wczesnej fazie leczenia." },
    { "hu": "Heveny hasnyálmirigy-gyulladás (pancreatitis) ritka, de potenciálisan súlyos kockázat, mint a GLP-1 receptor agonistáknál általában; tartós, erős, hátba sugárzó hasi fájdalom esetén azonnali orvosi kivizsgálás szükséges.", "en": "Acute pancreatitis is a rare but potentially serious risk, as with GLP-1 receptor agonists generally; persistent, severe abdominal pain radiating to the back requires immediate medical evaluation.", "pl": "Ostre zapalenie trzustki to rzadkie, ale potencjalnie poważne ryzyko, jak w przypadku agonistów receptora GLP-1 ogółem; utrzymujący się, silny ból brzucha promieniujący do pleców wymaga natychmiastowej oceny lekarskiej." },
    { "hu": "Epehólyag-betegségek (epekő, akut epehólyag-gyulladás), amelyek a gyors testtömegcsökkenéssel és a GLP-1 hatással is összefüggésben állhatnak.", "en": "Gallbladder disease (gallstones, acute cholecystitis), which may be related both to rapid weight loss and to the GLP-1 effect.", "pl": "Choroby pęcherzyka żółciowego (kamica żółciowa, ostre zapalenie pęcherzyka), które mogą być związane zarówno z szybką utratą masy ciała, jak i z działaniem GLP-1." },
    { "hu": "A gyomorürülés lassítása révén kifejezett teltségérzet, reflux, esetenként a per os szedett gyógyszerek felszívódásának módosulása.", "en": "Marked fullness, reflux, and occasionally altered absorption of orally taken medicines due to slowed gastric emptying.", "pl": "Wyraźne uczucie pełności, refluks i okazjonalnie zmienione wchłanianie leków przyjmowanych doustnie wskutek spowolnionego opróżniania żołądka." }
  ],
  "contraindications": [
    { "hu": "Anamnézisben vagy családi anamnézisben medulláris pajzsmirigy-karcinóma (MTC), illetve 2-es típusú multiplex endokrin neoplázia szindróma (MEN-2) – ez minden GLP-1 receptor agonistára kiterjedő class-warning (a rágcsáló-vizsgálatok C-sejtes tumor-jelei alapján).", "en": "Personal or family history of medullary thyroid carcinoma (MTC) or multiple endocrine neoplasia syndrome type 2 (MEN-2) – a class warning for all GLP-1 receptor agonists (based on C-cell tumor signals in rodent studies).", "pl": "Osobisty lub rodzinny wywiad raka rdzeniastego tarczycy (MTC) albo zespołu mnogiej gruczolakowatości wewnątrzwydzielniczej typu 2 (MEN-2) – ostrzeżenie klasowe dla wszystkich agonistów receptora GLP-1 (na podstawie sygnałów guzów komórek C w badaniach na gryzoniach)." },
    { "hu": "Korábbi pancreatitis (relatív ellenjavallat) – a hasnyálmirigy-gyulladás kockázata miatt körültekintést igényel, és gyanú esetén a kezelést le kell állítani.", "en": "Prior pancreatitis (relative contraindication) – requires caution due to the pancreatitis risk, and treatment should be stopped if it is suspected.", "pl": "Wcześniejsze zapalenie trzustki (przeciwwskazanie względne) – wymaga ostrożności ze względu na ryzyko zapalenia trzustki, a leczenie należy przerwać w razie podejrzenia." },
    { "hu": "Súlyos gastroparesis vagy egyéb jelentős gyomorürülési zavar – a készítmény tovább lassítja a gyomorürülést, ami súlyosbíthatja a tüneteket.", "en": "Severe gastroparesis or other significant gastric-emptying disorder – the drug further slows gastric emptying, which can worsen symptoms.", "pl": "Ciężka gastropareza lub inne istotne zaburzenie opróżniania żołądka – lek dodatkowo spowalnia opróżnianie żołądka, co może nasilić objawy." },
    { "hu": "Terhesség és szoptatás – a fokozott edukatív vizsgálati státusz és a testtömegcsökkentő hatás miatt nem javasolt; emberi biztonságossági adatok terhességben nem állnak rendelkezésre.", "en": "Pregnancy and breastfeeding – not recommended given its investigational status and weight-lowering effect; human safety data in pregnancy are not available.", "pl": "Ciąża i karmienie piersią – niezalecane ze względu na status badawczy i działanie obniżające masę ciała; brak danych dotyczących bezpieczeństwa u ludzi w ciąży." },
    { "hu": "Egyidejű inzulin vagy szulfonilurea kezelés fokozott figyelmet igényel – additív hipoglikémia-kockázat, ezért e szerek dóziscsökkentése szükséges lehet (nem abszolút ellenjavallat, hanem szoros monitorozást igénylő helyzet).", "en": "Concomitant insulin or sulfonylurea therapy requires heightened caution – additive hypoglycemia risk, so dose reduction of those agents may be needed (not an absolute contraindication but a situation requiring close monitoring).", "pl": "Jednoczesne leczenie insuliną lub pochodną sulfonylomocznika wymaga zwiększonej ostrożności – addytywne ryzyko hipoglikemii, więc może być konieczne zmniejszenie dawki tych leków (nie bezwzględne przeciwwskazanie, lecz sytuacja wymagająca ścisłego monitorowania)." },
    { "hu": "Erős CYP3A4-gátlók egyidejű alkalmazása (pl. ketokonazol, ritonavir, klaritromicin) megemelheti az orforglipron plazmaszintjét – együttadásnál a dózis mérlegelése és fokozott monitorozás indokolt.", "en": "Concomitant use of strong CYP3A4 inhibitors (e.g., ketoconazole, ritonavir, clarithromycin) can raise orforglipron plasma levels – dose consideration and increased monitoring are warranted when combined.", "pl": "Jednoczesne stosowanie silnych inhibitorów CYP3A4 (np. ketokonazol, rytonawir, klarytromycyna) może podnieść stężenie orforglipronu w osoczu – przy łączeniu wskazane jest rozważenie dawki i wzmożone monitorowanie." }
  ],
  "name": "Orforglipron (LY3502970)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Doustny, drobnocząsteczkowy agonista receptora GLP-1 firmy Eli Lilly, raz dziennie (Foundayo, zatwierdzony przez FDA w kwietniu 2026). Nie jest peptydem – doustna alternatywa dla iniekcyjnych agonistów GLP-1 (semaglutyd, liraglutyd) w przewlekłym leczeniu masy ciała.",
  "description": "Orforglipron (LY3502970) to doustny, drobnocząsteczkowy agonista receptora GLP-1 firmy Eli Lilly, raz dziennie, zatwierdzony przez FDA 1 kwietnia 2026 jako Foundayo do przewlekłego leczenia masy ciała (otyłość lub nadwaga z co najmniej jedną chorobą współistniejącą związaną z masą ciała, wraz z dietą i wysiłkiem). Strukturalnie nie jest peptydem – mała cząsteczka organiczna aktywująca receptor GLP-1, odporna na trawienie żołądkowe, przyjmowana raz dziennie niezależnie od posiłków. Badanie fazy 3 ATTAIN-1 (Wharton 2025 NEJM) wykazało ~12,4% redukcji masy ciała po 72 tygodniach w grupie najwyższej dawki wobec ~0,9% dla placebo (3127 uczestników bez cukrzycy). Biodostępność doustna wynosi ~77%, a długi okres półtrwania (~29-49 godz.) umożliwia dawkowanie raz dziennie. Wskazanie w cukrzycy typu 2 (program ACHIEVE) oraz rejestracja w UE są w toku.",
  "keyInfo": [
    {
      "label": "Kod ATC",
      "value": "Brak (jeszcze nie w indeksie ATC WHO)"
    },
    {
      "label": "Status recepty",
      "value": "Na receptę (Rx), FDA 2026 (Foundayo)"
    },
    {
      "label": "Mechanizm",
      "value": "Doustny drobnocząsteczkowy agonista receptora GLP-1"
    },
    {
      "label": "Okres półtrwania",
      "value": "29-49 godz. (raz dziennie)"
    },
    {
      "label": "Początek",
      "value": "Tmax 4-8 godz.; pełny efekt masy ciała w ciągu miesięcy"
    }
  ],
  "mechanism": "Doustny drobnocząsteczkowy agonista receptora GLP-1: wiążąc się z receptorem GLP-1 nasila glukozozależne wydzielanie insuliny, spowalnia opróżnianie żołądka i zmniejsza apetyt. Nie jest peptydem, więc jest odporny na trawienie żołądkowe; doustna bezwzględna biodostępność wynosi ~77%, a długi okres półtrwania (~29-49 godz.) umożliwia dawkowanie raz dziennie, niezależnie od posiłków.",
  "legalStatus": "Zatwierdzony przez FDA 1 kwietnia 2026 (Foundayo, Eli Lilly) do przewlekłego leczenia masy ciała. UE/HU/PL: jeszcze niezarejestrowany (w toku). Ostrzeżenie w ramce: ryzyko guzów komórek C tarczycy (MTC/MEN-2).",
  "bioavailability": "~77% (doustnie, bezwzględna – etykieta FDA Foundayo); długi okres półtrwania umożliwia dawkowanie raz dziennie",
  "onsetTime": "Tmax 4-8 godz. (szczyt w osoczu); pełny efekt obniżający masę ciała rozwija się w ciągu miesięcy",
  "halfLife": "~29-49 godzin (dawkowanie raz dziennie osiąga steady-state w 7-10 dni)",
  "atcCode": "Jeszcze nieprzypisany (brak w indeksie ATC WHO)",
  "prescriptionStatus": "Na receptę (Rx); zatwierdzony przez FDA 2026 (Foundayo)",
  "indications": [
    "Przewlekłe leczenie masy ciała: otyłość (BMI >=30) lub nadwaga (BMI >=27) z co najmniej jedną chorobą współistniejącą związaną z masą ciała",
    "Wraz z dietą i zwiększoną aktywnością fizyczną, do długoterminowego utrzymania masy ciała",
    "Cukrzyca typu 2: faza badań (program ACHIEVE, jeszcze niezatwierdzone wskazanie)"
  ],
  "contraindications": [
    "Wywiad rdzeniastego raka tarczycy (zespół MEN-2) – efekt klasowy dla wszystkich GLP-1 RA",
    "Wywiad zapalenia trzustki (względne)",
    "Ciężka gastropareza"
  ],
  "commonSideEffects": [
    "Żołądkowo-jelitowe: nudności (~30-40% podczas titrowania, mniejsza częstość niż w iniekcyjnych GLP-1 RA)",
    "Biegunka, wymioty (~15-20%)",
    "Ból głowy",
    "Spadek apetytu (związany z mechanizmem, nie jest skutkiem ubocznym per se)",
    "Rzadko: zapalenie trzustki, cholecystitis"
  ],
  "cyp450": [
    "CYP3A4 metabolizm pierwotny – silne inhibitory CYP3A4 (ketokonazol, rytonawir) mogą zwiększyć ekspozycję",
    "P-gp substrat – minimalna kliniczna istotność"
  ],
  "crossMolInteractions": [
    "Silne inhibitory CYP3A4 (ketokonazol, rytonawir, klarytromycyna): wzrost ekspozycji, rozważyć redukcję dawki",
    "Insulina, sulfonylomoczniki: ryzyko hipoglikemii (efekt addytywny), redukcja dawki wymagana",
    "Inne leki przeciwcukrzycowe (Metformina, SGLT2-i): synergistyczne, można łączyć",
    "Doustne środki antykoncepcyjne: brak istotnej interakcji (niskie powinowactwo CYP3A4)"
  ],
  "benefits": [
    "DOUSTNY – nie iniekcja podskórna, lepsza compliance",
    "Phase 2 ATTAIN-1: ~14,7% redukcji masy ciała w 36 tygodni (~ na równi z Semaglutidem 2,4 mg/tydzień)",
    "Phase 2 T2DM: ~2,0% redukcji HbA1c w 26 tygodni",
    "Mniejsza częstość skutków ubocznych GI niż w iniekcyjnych peptydowych GLP-1 RA (biased agonist)",
    "Dawkowanie raz dziennie (długi t1/2)",
    "Spodziewana tańsza produkcja niż peptydów (synteza mało-cząsteczkowa)"
  ],
  "studies": [
    {"title": "Orforglipron, an Oral Small-Molecule GLP-1 Receptor Agonist for Obesity Treatment.", "authors": "Wharton S, Aronne LJ, Stefanski A", "journal": "N Engl J Med", "pmid": "40960239"},
    {"title": "Efficacy and safety of oral orforglipron in patients with type 2 diabetes: a multicentre, randomised, dose-response, phase 2 study.", "authors": "Frías JP, Hsia S, Eyde S, Liu R, Ma X, Konig M, Kazda C, Mather KJ, Haupt A, Pratt E, Dunn J, Robins D, Karanikas C, Thomas MK", "journal": "Lancet", "pmid": "37369232"},
    {"title": "Small-Molecule Oral Versus Injectable Glucagon-Like Peptide-1 (GLP-1) Receptor Agonists: Comparative Efficacy, Safety, and Cost.", "authors": "Patel D", "journal": "Cureus", "pmid": "42153087"}
  ],
  "related": [
    "metformin",
    "empagliflozin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {"low": 0.8, "medium": 5.5, "high": 17.2},
    "unit": "mg/dobę (doustnie, raz dziennie)",
    "note": "Protokół FDA: start od 0,8 mg, titracja co najmniej co 30 dni: 0,8 -> 2,5 -> 5,5 -> 9 / 14,5 / 17,2 mg/dobę. Maks. 17,2 mg/dobę. Stopniowa titracja jest wymagana ze względu na działania żołądkowo-jelitowe. Raz dziennie, o dowolnej porze, niezależnie od posiłków."
  }
}
