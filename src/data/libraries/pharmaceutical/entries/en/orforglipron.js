// Orforglipron (LY3502970) – Eli Lilly oral small-molecule GLP-1 receptor
// agonist. NOT a peptide – small molecule, hence belongs in the pharmaceutical
// library (NOT peptides). Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) trials
// ongoing in 2026, FDA approval expected 2026-2027.
// Sources: Wharton 2023 NEJM Phase 2 obesity PMID 37356087, Frías 2023 NEJM
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
  "shortDesc": "Eli Lilly’s once-daily, small-molecule ORAL GLP-1 receptor agonist (Foundayo, FDA-approved Apr 2026). Not a peptide – an oral alternative to injectable GLP-1 RAs (semaglutide, liraglutide) for chronic weight management.",
  "description": "Orforglipron (LY3502970) is Eli Lilly’s once-daily, small-molecule oral GLP-1 receptor agonist, FDA-approved on 1 April 2026 as Foundayo for chronic weight management (obesity, or overweight with at least one weight-related comorbidity, alongside diet and exercise). Structurally it is not a peptide – a small organic molecule that activates the GLP-1 receptor, so it resists gastric digestion and is taken once daily without food or water restrictions. The Phase 3 ATTAIN-1 trial (Wharton 2025 NEJM) showed ~12.4% body-weight reduction at 72 weeks in the highest-dose group versus ~0.9% for placebo (3,127 participants without diabetes). Oral bioavailability is ~77% and the long half-life (~29-49 h) allows once-daily dosing. A type-2-diabetes indication (ACHIEVE program) and EU authorisation are still in progress.",
  "keyInfo": [
    {
      "label": "ATC code",
      "value": "None yet (not in the WHO ATC index)"
    },
    {
      "label": "Prescription",
      "value": "Prescription only (Rx), FDA 2026 (Foundayo)"
    },
    {
      "label": "Mechanism",
      "value": "Oral small-molecule GLP-1 receptor agonist"
    },
    {
      "label": "Half-life",
      "value": "29-49 h (once-daily dosing)"
    },
    {
      "label": "Onset",
      "value": "Tmax 4-8 h; full weight effect over months"
    }
  ],
  "mechanism": "Oral small-molecule GLP-1 receptor agonist: by binding the GLP-1 receptor it enhances glucose-dependent insulin secretion, slows gastric emptying and reduces appetite. Not a peptide, so it resists gastric digestion; oral absolute bioavailability is ~77% and the long half-life (~29-49 h) allows once-daily, food-independent dosing.",
  "legalStatus": "FDA-approved 1 April 2026 (Foundayo, Eli Lilly) for chronic weight management. EU/HU/PL: not yet authorised (in progress). Boxed warning: risk of thyroid C-cell tumors (MTC/MEN-2).",
  "bioavailability": "~77% (oral, absolute – FDA Foundayo label); the long half-life allows once-daily dosing",
  "onsetTime": "Tmax 4-8 h (peak plasma); the full weight-lowering effect develops over months",
  "halfLife": "~29-49 hours (once-daily dosing reaches steady-state in 7-10 days)",
  "atcCode": "Not yet assigned (not yet in the WHO ATC index)",
  "prescriptionStatus": "Prescription only (Rx); FDA-approved 2026 (Foundayo)",
  "indications": [
    "Chronic weight management: obesity (BMI >=30), or overweight (BMI >=27) with at least one weight-related comorbidity",
    "Alongside diet and increased physical activity, for long-term weight maintenance",
    "Type-2 diabetes: investigational (ACHIEVE program, not yet an approved indication)"
  ],
  "contraindications": [
    "History of medullary thyroid carcinoma (MEN-2 syndrome) – class effect for all GLP-1 RAs",
    "History of pancreatitis (relative)",
    "Severe gastroparesis"
  ],
  "commonSideEffects": [
    "Gastrointestinal: nausea (~30-40% during titration, lower incidence than injectable GLP-1 RAs)",
    "Diarrhea, vomiting (~15-20%)",
    "Headache",
    "Decreased appetite (mechanism-related, not a side effect per se)",
    "Rare: pancreatitis, cholecystitis"
  ],
  "cyp450": [
    "CYP3A4 primary metabolism – strong CYP3A4 inhibitors (ketoconazole, ritonavir) may increase exposure",
    "P-gp substrate – minimal clinical relevance"
  ],
  "crossMolInteractions": [
    "Strong CYP3A4 inhibitors (ketoconazole, ritonavir, clarithromycin): exposure rise, consider dose reduction",
    "Insulin, sulfonylureas: hypoglycemia risk (additive effect), dose reduction required",
    "Other antidiabetics (Metformin, SGLT2-i): synergistic, combinable",
    "Oral contraceptives: no significant interaction (low CYP3A4 affinity)"
  ],
  "benefits": [
    "ORAL – not a subcutaneous injection, better compliance",
    "Phase 2 ATTAIN-1: ~14.7% body-weight reduction over 36 weeks (~ on par with Semaglutide 2.4 mg/week)",
    "Phase 2 T2DM: ~2.0% HbA1c reduction over 26 weeks",
    "Smaller GI side-effect incidence than injectable peptide GLP-1 RAs (biased agonist)",
    "Once-daily dosing (long t1/2)",
    "Expected cheaper manufacturing than peptides (small-molecule synthesis)"
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
    "unit": "mg/day (oral, once daily)",
    "note": "FDA protocol: starts at 0.8 mg, titrated at least every 30 days: 0.8 -> 2.5 -> 5.5 -> 9 / 14.5 / 17.2 mg/day. Max 17.2 mg/day. Gradual titration is required because of GI side effects. Once daily, any time, with or without food."
  }
}
