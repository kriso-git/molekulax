// Orforglipron (LY3502970) — Eli Lilly orális kis-molekulájú GLP-1 receptor
// agonist. NEM peptid — kis molekula, ezért a pharmaceutical libben (NEM peptid).
// Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) trial-ok 2026-ban folyamatban,
// FDA-jóváhagyás várt 2026-2027.
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
  "shortDesc": "Eli Lilly napi egyszer szedhető, KIS MOLEKULÁJÚ ORÁLIS GLP-1 receptor agonista (LY3502970). Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) folyamatban. Várt FDA-jóváhagyás 2026-2027. NEM peptid — a klasszikus injektábilis GLP-1 RA-k (Semaglutide, Liraglutide) orális alternatívája.",
  "description": "Az Orforglipron (LY3502970) az Eli Lilly napi egyszer szedhető, kis molekulájú orális GLP-1 receptor agonistája. Strukturálisan NEM peptid — egy kicsi szerves molekula, amely a GLP-1 receptort biased-agonist módon aktiválja, kizárólag a Gs-pathway-en, kihagyva a β-arrestin-pathway-t. Ez magyarázza a klinikai profilját: jó hatékonyság testtömeg-csökkentésre + HbA1c-re, kisebb gasztrointesztinális mellékhatás-incidencia mint az injektábilis peptid-GLP-1 RA-knál (Semaglutide, Liraglutide). A Phase 2 ATTAIN-1 trial (Wharton 2023 NEJM PMID 37356087) 36 hét alatt a magas-dóziscsoportban ~14,7% testtömegcsökkenést mutatott obesity-betegen — vetekszik az injektábilis Semaglutide 2.4 mg/hét STEP-1 trial eredményével (~14,9% 68 hét). Phase 2 T2DM (Frías 2023 NEJM PMID 37356866) HbA1c-csökkenés ~2.0%-os 26 hét alatt. 2026-ban a Phase 3 ATTAIN-1 (obesity) + ATTAIN-2 (obesity + T2DM) + ACHIEVE-1 (T2DM) trial-ok folyamatban, NDA-beadás várt 2026 közepén. Versenytárs: Pfizer Danuglipron (Phase 2-3, hepatic-stresszel terhelt), Roche CT-388 + Structure Therapeutics GSBR-1290 (peptid-csökkentő).",
  "mechanism": "Kis molekulájú GLP-1 receptor biased agonist — szelektíven aktiválja a Gs-pathway-t (cAMP-elevation → inzulin-szekréció + lassú gastric emptying + jóllakottság-érzés), és minimálisan a β-arrestin-pathway-t (ez magyarázza a kisebb GI mellékhatás-incidenciát). Orális biodostupnošć alacsony (~6-9%), DE a hosszú felezési idő (~29-49 h) napi egyszeri adagolást enged. NEM peptid — gastric proteolizishez NEM érzékeny, food-interakció minimális.",
  "legalStatus": "Klinikai vizsgálati fázis (Phase 3, 2026). NDA-beadás várt 2026 közepén. FDA-jóváhagyás várt 2026-2027. EU/HU/PL: NEM törzskönyvezett.",
  "bioavailability": "~6-9% (orális, low — DE elegendő a napi egyszeri adagoláshoz a hosszú t1/2 miatt; Frías 2023 PMID 37356866 PK appendix)",
  "onsetTime": "Tmax 3-5 óra (csúcsplazma-szint), klinikai hatás 2-4 hét alatt steady-state",
  "halfLife": "~29-49 óra (napi egyszeri dose-on steady-state 7-10 nap)",
  "atcCode": "Még nem assigned (Phase 3)",
  "prescriptionStatus": "Klinikai vizsgálati fázis (még NEM Rx)",
  "indications": [
    "Obesity (Phase 3 ATTAIN-1/2 — várt indikáció 2026-2027)",
    "2-es típusú cukorbetegség (Phase 3 ACHIEVE — várt indikáció)",
    "MASH (off-label kutatási irány)"
  ],
  "contraindications": [
    "Anamnézisben medulláris pajzsmirigy-karcinóma (MEN-2 szindróma) — class-effect minden GLP-1 RA-ra",
    "Anamnézisben pancreatitis (relatív)",
    "Súlyos gastroparesis"
  ],
  "commonSideEffects": [
    "Gasztrointesztinális: hányinger (~30-40% titrálás során, kisebb incidencia mint injektábilis GLP-1 RA-knál)",
    "Hasmenés, hányás (~15-20%)",
    "Fejfájás",
    "Étvágy-csökkenés (mechanism-related, nem mellékhatás per se)",
    "Ritka: pancreatitis, vesicula-cholezisztitis"
  ],
  "cyp450": [
    "CYP3A4 primary metabolism — strong CYP3A4 inhibitors (ketokonazol, ritonavir) növelhetik a koncentrációt",
    "P-gp substrate — minimális klinikai relevanciájú"
  ],
  "crossMolInteractions": [
    "CYP3A4 erős inhibitorok (ketokonazol, ritonavir, klaritromicin): koncentráció-emelkedés, dose-csökkentés mérlegelendő",
    "Insulin, sulfonylureák: hipoglikémia-kockázat (additív hatás), dose-csökkentés szükséges",
    "Egyéb antidiabetikum (Metformin, SGLT2-i): szinergikus, kombinálható",
    "Orális kontraceptívum: nincs jelentős interakció (low CYP3A4-affinitás)"
  ],
  "benefits": [
    "ORÁLIS — nem szubkután injekció, jobb compliance",
    "Phase 2 ATTAIN-1: ~14.7% testtömegcsökkenés 36 hét (~ Semaglutide 2.4 mg/hét vetélytárs)",
    "Phase 2 T2DM: ~2.0% HbA1c-csökkenés 26 hét",
    "Kisebb GI mellékhatás-incidencia mint injektábilis peptid GLP-1 RA-knál (biased agonist)",
    "Napi egyszeri adagolás (long t1/2)",
    "Olcsóbb gyártás várt mint a peptideknek (kis molekula szintézis)"
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
    "fixedDose": {"low": 3, "medium": 12, "high": 36},
    "unit": "mg/nap (orális, napi 1x)",
    "note": "Klinikai protokoll: 3 mg-tól indul 4 hetes titrálással. Lépések: 3 → 6 → 12 → 24 → 36 mg/nap. Max ~36 mg/nap. GI-mellékhatás miatt SOSE skip-titration. Étkezéssel függetlenül, napi 1x bármikor."
  }
}
