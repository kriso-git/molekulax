// Levothyroxine (T4, Synthroid) — Knoll Pharmaceutical 1955, zatwierdzona przez
// FDA syntetyczna 3,5,3',5'-tetrajodotyronina, gold-standard Rx na niedoczynność
// tarczycy. Źródła: FDA Synthroid SmPC (AbbVie), Stott 2017 TRUST NEJM
// PMID 28121505, Garber 2012 AACE/ATA PMID 22293194, Jonklaas 2014 ATA
// guidelines PMID 25266247, Wartofsky 2002 J Clin Endocrinol Metab PMID 12107201.

export default {
  "id": "levothyroxine",
  "sideEffects": [
    { "hu": "Iatrogén hyperthyreosis túladagoláskor: tachycardia, palpitáció, pitvarfibrilláció, hőtűrés-csökkenés, izzadás, fogyás, tremor (FDA Synthroid SmPC; szupraterápiás cutting-dózison a legsúlyosabb).", "en": "Iatrogenic hyperthyroidism on overdose: tachycardia, palpitations, atrial fibrillation, heat intolerance, sweating, weight loss, tremor (FDA Synthroid SmPC; most pronounced on supratherapeutic cutting doses).", "pl": "Jatrogenna nadczynnosc tarczycy przy przedawkowaniu: tachykardia, kolatanie serca, migotanie przedsionkow, nietolerancja ciepla, poty, utrata masy ciala, drzenie (FDA Synthroid SmPC; najsilniejsze przy dawkach nadfizjologicznych)." },
    { "hu": "Pitvarfibrilláció és kardiovaszkuláris esemény kockázata, főleg idős és előzetes szívbeteg esetén; szuppresszív (TSH <0,1) dózison az AF-incidencia 2–3x emelkedik (Sawin 1994 PMID 8302057).", "en": "Atrial fibrillation and cardiovascular event risk, especially in the elderly and those with pre-existing heart disease; suppressive (TSH <0.1) dosing raises AF incidence 2–3x (Sawin 1994 PMID 8302057).", "pl": "Ryzyko migotania przedsionkow i zdarzen sercowo-naczyniowych, zwlaszcza u osob starszych i z choroba serca; dawki supresyjne (TSH <0,1) zwiekszaja AF 2–3x (Sawin 1994 PMID 8302057)." },
    { "hu": "Csontsűrűség-csökkenés és osteoporosis-kockázat hosszú távú TSH-szuppresszív dózison (>200 µg/nap, TSH <0,1 mIU/L krónikusan), DEXA-monitorozás indokolt (Faber 1994 PMID 8112375).", "en": "Decreased bone density and osteoporosis risk on long-term TSH-suppressive dosing (>200 µg/day, chronic TSH <0.1 mIU/L); DEXA monitoring warranted (Faber 1994 PMID 8112375).", "pl": "Spadek gestosci kosci i ryzyko osteoporozy przy dlugotrwalym dawkowaniu supresyjnym TSH (>200 µg/dz., przewlekle TSH <0,1 mIU/L); wskazane monitorowanie DEXA (Faber 1994 PMID 8112375)." },
    { "hu": "Túladagolás központi/idegrendszeri tünetei: szorongás, ingerlékenység, álmatlanság, nyugtalanság, fejfájás (hyperthyreoid szindróma része).", "en": "Central/nervous overdose symptoms: anxiety, irritability, insomnia, restlessness, headache (part of the hyperthyroid syndrome).", "pl": "Objawy osrodkowe przedawkowania: lek, drazliwosc, bezsennosc, niepokoj, bole glowy (czesc zespolu nadczynnosci)." },
    { "hu": "Felszívódási csökkenés és dózis-instabilitás kalcium-, vas-, PPI- és szója-bevitel együtt szedésekor (~30–50% abszorpció-csökkenés), 4 óra szétválasztás szükséges.", "en": "Reduced absorption and dose instability when taken with calcium, iron, PPIs or soy (~30–50% absorption drop); 4-hour separation required.", "pl": "Zmniejszone wchlanianie i niestabilnosc dawki przy jednoczesnym przyjmowaniu wapnia, zelaza, IPP lub soi (~30–50% spadek); konieczny 4-godzinny odstep." },
    { "hu": "Warfarin-interakció: a T4 fokozza az antikoaguláns hatást, INR-emelkedés és vérzésveszély, INR-monitorozás kötelező.", "en": "Warfarin interaction: T4 potentiates the anticoagulant effect, raising INR and bleeding risk; INR monitoring mandatory.", "pl": "Interakcja z warfaryna: T4 nasila dzialanie przeciwkrzepliwe, podwyzsza INR i ryzyko krwawienia; obowiazkowe monitorowanie INR." },
    { "hu": "Diabéteszeseknél a fokozott metabolikus ráta megemelheti az inzulin- és antidiabetikum-igényt, glükóz-kontroll zavar lehetséges.", "en": "In diabetics, the increased metabolic rate can raise insulin and antidiabetic requirements, with possible loss of glucose control.", "pl": "U diabetykow zwiekszone tempo metaboliczne moze podniesc zapotrzebowanie na insuline i leki przeciwcukrzycowe, mozliwa utrata kontroli glikemii." },
    { "hu": "Ritka cholestasis és <1% ALT-emelkedés; a máj-stressz minimális, de túladagolás-okozta hyperthyreosis közvetve terhelő (FDA Synthroid SmPC).", "en": "Rare cholestasis and <1% ALT elevation; hepatic stress is minimal, though overdose-induced hyperthyroidism is indirectly burdensome (FDA Synthroid SmPC).", "pl": "Rzadka cholestaza i <1% wzrost ALT; obciazenie watroby minimalne, choc nadczynnosc z przedawkowania obciaza posrednio (FDA Synthroid SmPC)." }
  ],
  "contraindications": [
    { "hu": "Nem kompenzált mellékvesekéreg-elégtelenség: T4-pótlás mellékvese-krízist provokálhat, előbb glükokortikoid-pótlás kell (abszolút kontraindikáció).", "en": "Uncorrected adrenal insufficiency: T4 replacement can precipitate an adrenal crisis; glucocorticoid replacement must come first (absolute contraindication).", "pl": "Niewyrownana niewydolnosc nadnerczy: substytucja T4 moze wywolac przelom nadnerczowy; najpierw wymagana glikokortykosteroidoterapia (bezwzgledne przeciwwskazanie)." },
    { "hu": "Kezeletlen thyreotoxicosis / hyperthyreosis: a T4 tovább súlyosbítja a tireoid-hormontöbbletet (abszolút kontraindikáció).", "en": "Untreated thyrotoxicosis / hyperthyroidism: T4 further aggravates the thyroid hormone excess (absolute contraindication).", "pl": "Nieleczona tyreotoksykoza / nadczynnosc tarczycy: T4 dodatkowo nasila nadmiar hormonow (bezwzgledne przeciwwskazanie)." },
    { "hu": "Friss akut miokardiális infarktus (<6 hónap): a fokozott szívmunka kontraindikálja a dózistitrálást (abszolút kontraindikáció).", "en": "Recent acute myocardial infarction (<6 months): the increased cardiac workload contraindicates dose titration (absolute contraindication).", "pl": "Swiezy zawal serca (<6 miesiecy): zwiekszone obciazenie serca przeciwwskazuje titracje dawki (bezwzgledne przeciwwskazanie)." },
    { "hu": "Aktív tachiarrhythmia (pitvarfibrilláció, kamrai tachycardia): a T4 aritmogén, óvatos titrálás vagy halasztás indokolt.", "en": "Active tachyarrhythmia (atrial fibrillation, ventricular tachycardia): T4 is arrhythmogenic; cautious titration or deferral is warranted.", "pl": "Aktywna tachyarytmia (migotanie przedsionkow, czestoskurcz komorowy): T4 jest arytmogenny; ostrozna titracja lub odroczenie." },
    { "hu": "Sportoló cutting-cycle off-label használat dokumentált hypothyreosis-diagnózis nélkül: orvosilag nem legitim és potenciális WADA-szabályszegés.", "en": "Athlete cutting-cycle off-label use without a documented hypothyroidism diagnosis: medically illegitimate and a potential WADA violation.", "pl": "Stosowanie off-label w cyklu redukcyjnym sportowca bez udokumentowanej diagnozy niedoczynnosci: medycznie nieuzasadnione i potencjalne naruszenie WADA." },
    { "hu": "Idős (>65 év) és koszorúér-betegek: relatív óvatosság, alacsony kezdődózis és lassú (12,5 µg/2 hét) titrálás indokolt (Stott 2017 TRUST PMID 28121505).", "en": "Elderly (>65) and coronary artery disease patients: relative caution, low starting dose and slow (12.5 µg/2 weeks) titration warranted (Stott 2017 TRUST PMID 28121505).", "pl": "Osoby starsze (>65) i z choroba wiencowa: wzgledna ostroznosc, niska dawka poczatkowa i powolna (12,5 µg/2 tyg.) titracja (Stott 2017 TRUST PMID 28121505)." },
    { "hu": "Krónikus TSH-szuppresszív dózis (>200 µg/nap) osteoporosis vagy ismert csontritkulás mellett: relatív kontraindikáció a csontsűrűség-veszteség miatt.", "en": "Chronic TSH-suppressive dosing (>200 µg/day) with osteoporosis or known low bone density: relative contraindication due to bone density loss.", "pl": "Przewlekle dawkowanie supresyjne TSH (>200 µg/dz.) przy osteoporozie lub niskiej gestosci kosci: wzgledne przeciwwskazanie z powodu utraty masy kostnej." }
  ],
  "name": "Levothyroxine (T4, Synthroid)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Syntetyczna T4 (3,5,3',5'-tetrajodotyronina), Knoll/AbbVie 1955, zatwierdzona przez FDA gold-standard Rx na niedoczynność tarczycy (Synthroid). Prohormon — wątrobowa i nerkowa 5'-dejodynaza (D1/D2) konwertuje ją do aktywnej T3. Off-label w cyklach cutting używana rzadziej niż T3 (wolniejsze 7-dniowe t1/2, steady-state ~6 tygodni). WADA: dozwolona przy udokumentowanym rozpoznaniu niedoczynności tarczycy.",
  "description": "Levothyroxine (Synthroid) to syntetyczna forma endogennej T4 (3,5,3',5'-tetrajodotyroniny), prohormonalnej formy hormonu tarczycy. Otrzymała zatwierdzenie FDA w 1955 przez Knoll Pharmaceutical (obecnie AbbVie) pod marką Synthroid i, z 70-letnią literaturą kliniczną, jest jednym z top-5 najczęściej przepisywanych leków w USA od dwóch dekad. Gold-standard Rx na niedoczynność tarczycy według guideline'u Garber 2012 AACE/ATA (PMID 22293194) i Jonklaas 2014 ATA (PMID 25266247): cel TSH 0.5-2.5 mIU/L, dawka Rx 1.6 μg/kg/dobę (60-100 kg → 100-150 μg/dobę). T4 w tkankach obwodowych (wątroba, nerki, mięśnie, ośrodkowy układ nerwowy) jest konwertowana do aktywnej T3 przez enzymy 5'-dejodynazy D1/D2 (~80% obwodowej konwersji T4 → T3) i tylko pośrednio działa jako agonista jądrowych receptorów TR-α/β, ponieważ sama T4 ma niskie powinowactwo do receptora (~10x słabsze niż T3). Stosowanie off-label w cuttingu jest rzadsze niż T3: wolniejsza kinetyka on/off (7-dniowe t1/2 vs 24 godziny T3) daje steady-state ~6 tygodni i wolniejszy wzrost tempa metabolizmu. Stott 2017 TRUST NEJM (PMID 28121505), RCT starszych pacjentów z subkliniczną niedoczynnością tarczycy, nie wykazało korzyści objawowej z substytucji T4, ale tempo przepisywania w USA nie spadło. Na liście WADA T4 znajduje się w kategorii 'dozwolone' przy udokumentowanym rozpoznaniu niedoczynności tarczycy — off-label sportowe użycie w cuttingu NIE jest legitymne i stanowi potencjalne naruszenie WADA.",
  "keyInfo": [
    {
      "label": "Mechanizm działania",
      "value": "Prohormon tarczycy, obwodowa konwersja D1/D2 do T3, pośredni agonista jądrowych receptorów TR-α/β"
    },
    {
      "label": "Dawkowanie",
      "value": "Kliniczne 1.6 μg/kg/dobę (100-150 μg/dobę); off-label cutting 200-300 μg/dobę (NIE zalecane)"
    },
    {
      "label": "Okres półtrwania",
      "value": "~7 dni (steady-state ~6 tygodni)"
    },
    {
      "label": "Początek działania",
      "value": "Wzrost tempa metabolizmu 1-2 tygodnie; steady-state 6 tygodni"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (niedoczynność tarczycy), zarejestrowana w HU + PL. WADA: dozwolona przy udokumentowanym rozpoznaniu niedoczynności tarczycy, off-label cutting NIE legitymne."
    }
  ],
  "mechanism": "Levothyroxine to syntetyczna forma endogennej T4, prohormonalnej formy hormonu tarczycy. Sama T4 ma niskie powinowactwo do jądrowego receptora (~10x słabsze niż T3), więc większość efektu biologicznego generowana jest przez obwodową enzymatyczną konwersję 5'-dejodynazą D1 (wątroba, nerki, tarczyca) + D2 (mięśnie szkieletowe, ośrodkowy układ nerwowy, przysadka): ~80% obwodowej konwersji T4 → T3. Aktywna T3 wiąże się następnie z jądrowymi receptorami TR-α (mięśnie szkieletowe i sercowy) i TR-β (wątroba i podwzgórze), heterodimeryzuje z receptorem retinoidowym-X (RXR) i jako czynnik transkrypcyjny aktywuje ekspresję UCP1/UCP3, kluczowych enzymów β-oksydacji (CPT-1, ACOX) oraz genu podjednostki α Na/K-ATP-azy. Logika klinicznego dawkowania: stabilniejsze stężenie T4 w surowicy (7-dniowe t1/2) zapewnia bardziej jednorodny tkankowy poziom T3 dzięki regulacji obwodowej konwersji, co jest korzystne po Rx w Hashimoto + wrodzonej + chirurgicznej tyroidektomii. Sprzężenie zwrotne osi podwzgórze-przysadka-tarczyca (HPT): T4 bezpośrednio supresjonuje wydzielanie TRH/TSH poprzez konwersję D2 w podwzgórzu i przysadce — titracja w kierunku celu TSH 0.5-2.5 mIU/L utrzymuje endogenną oś częściowo aktywną. Generic vs brand bioequivalence: badanie FDA 2019 (PMID 31302949) potwierdziło bioekwiwalencję 12 zatwierdzonych przez FDA preparatów generycznych z Synthroid (AUC 0.95-1.05).",
  "legalStatus": "USA: zatwierdzona przez FDA w 1955 (Synthroid, Knoll Pharmaceutical — obecnie AbbVie) na niedoczynność tarczycy; Schedule N/A. Top-5 najczęściej przepisywany lek w USA. UE: zatwierdzona przez EMA (Euthyrox, Eltroxin). HU: zarejestrowana (Euthyrox, L-Thyroxin Henning Rx). PL: zarejestrowana (Euthyrox, Letrox Rx). WADA: 'dozwolona' przy udokumentowanym rozpoznaniu niedoczynności tarczycy (S0 kategoria hormonalna nie-explicit-banned), off-label sportowe użycie w cuttingu NIE jest legitymne i stanowi potencjalne naruszenie WADA.",
  "onsetTime": "Wzrost tempa metabolizmu 1-2 tygodnie; efekt utraty tłuszczu 2-4 tygodnie; steady-state 6 tygodni",
  "halfLife": "~7 dni",
  "interactionsWith": [
    "liothyronine",
    "clenbuterol",
    "mirabegron",
    "warfarin"
  ],
  "aromatization": "Nie aromatyzuje (nie jest sterydem — prohormon tarczycy). Brak interakcji z CYP19. Oś estrogenowa pozostaje bezpośrednio nienaruszona, ale na Rx hormonów tarczycy udokumentowano pośredni wzrost SHBG (Klein 2001 PMID 11257082), powodujący spadek wolnego testosteronu.",
  "hepatotoxicity": "Niska — minimalny stres wątrobowy, rzadka cholestaza (FDA Synthroid SmPC adverse events). Jatrogenne przedawkowanie wywołuje zespół hipertyreozy (arytmia serca, hipertermia), ale NIE bezpośrednią toksyczność wątrobową. Wzrost ALT udokumentowany przy incydencji <1% w badaniach klinicznych.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, prohormon tarczycy)",
  "bindingAffinity": "Receptor jądrowy TR-α + TR-β Ki ~500-1000 pM (niskie powinowactwo, ~10x słabsze niż T3). Większość efektu biologicznego mediowana jest przez obwodową konwersję D1/D2 do T3.",
  "detectionWindow": "Wykrywanie LC-MS/MS w moczu przez laboratoria akredytowane przez WADA przez 4-6 tygodni przy dawce przewlekłej (T4 + wzorzec supresji endogennego TSH). Steady-state ~6 tygodni.",
  "benefits": [
    "Gold-standard Rx klinicznej niedoczynności tarczycy z 70-letnią bazą dowodów",
    "Stabilniejsze stężenie T4 w surowicy (7-dniowe t1/2) zapewnia jednorodny tkankowy poziom T3 dzięki regulacji obwodowej konwersji",
    "Titracja TSH-target 0.5-2.5 mIU/L wg guideline'u Garber 2012 AACE/ATA + Jonklaas 2014 ATA",
    "Pierwszorzutowe Rx w Hashimoto, niedoczynności wrodzonej i po tyroidektomii",
    "Off-label cutting: wolniejszy on/off (7-dniowe t1/2) → mniejsze ryzyko jatrogennej hipertyreozy niż T3 (24-godzinne t1/2)",
    "Badanie FDA 2019 (PMID 31302949) potwierdziło bioekwiwalencję generic vs brand (12 generyków AUC 0.95-1.05)"
  ],
  "quickStart": [
    "Kliniczny start Rx 25-50 μg/dobę AM, titracja co 25 μg co 2 tygodnie",
    "Dawka Rx 1.6 μg/kg/dobę (60-100 kg → 100-150 μg/dobę), TSH-target 0.5-2.5 mIU/L",
    "Dawkowanie AM na czczo, 30-60 minut przed śniadaniem (jedzenie obniża wchłanianie)",
    "Przed cyklem: baseline TSH + wolne-T3 + wolne-T4 + anti-TPO + Tg-AB",
    "Bloodwork mid-cycle: 6-tygodniowa kontrola TSH + wolne-T4 + odwrotne-T3",
    "Zalecany 4-godzinny odstęp od wapnia + żelaza + PPI + mleka sojowego (obniżenie wchłaniania)",
    "Off-label cutting 200-300 μg/dobę (NIE zalecane) — wolniejsza titracja bezpieczniejsza niż T3"
  ],
  "expectations": [
    {
      "label": "1-2. tydzień",
      "body": "Dawka początkowa 50-100 μg AM. Łagodna zmiana objawowa, lekki wzrost energii. Poziomy TSH jeszcze nie znormalizowane (steady-state po 6 tygodniach)."
    },
    {
      "label": "3-4. tydzień",
      "body": "Objawy niedoczynności tarczycy (zmęczenie, przyrost masy, nietolerancja zimna) łagodnieją. Subiektywne tempo utraty tłuszczu na Rx niedoczynności tarczycy +0.2-0.4 kg/tydzień w stałym deficycie. W kontekście off-label cuttingu wolniej niż T3."
    },
    {
      "label": "6-8. tydzień + titracja TSH",
      "body": "Steady-state poziom TSH mierzalny. Jeśli TSH >2.5 mIU/L → zwiększenie dawki 25 μg co 2 tygodnie. Jeśli TSH <0.5 mIU/L → obniżenie dawki 25 μg co 2 tygodnie. Cel klinicznego Rx: TSH 0.5-2.5 mIU/L, wolne-T4 w górnym zakresie normy."
    }
  ],
  "quality": {
    "pure": [
      "Tabletka Synthroid zatwierdzona przez FDA (AbbVie) lub 12 zatwierdzonych przez FDA preparatów generycznych Levothyroxine — źródło farmaceutyczne gwarantuje zawartość substancji czynnej",
      "Marki w UE: Euthyrox (Merck), Eltroxin (GlaxoSmithKline), L-Thyroxin Henning (Sanofi)",
      "Badanie FDA 2019 (PMID 31302949) potwierdziło bioekwiwalencję generic vs brand (12 generyków AUC 0.95-1.05)"
    ],
    "caution": [
      "Zespół hipertyreozy przy przedawkowaniu: tachykardia, hipertermia, lęk, bezsenność, skrajna utrata masy ciała — zalecane odstawienie",
      "4-godzinny odstęp od wapnia + żelaza + PPI + mleka sojowego (obniżenie wchłaniania ~30-50%)",
      "Wzrost INR przy warfarynie — wymagane monitorowanie przeciwzakrzepowe",
      "Monitorowanie sercowo-naczyniowe u pacjentów starszych (>65 lat), zalecany krok titracji 12.5 μg co 2 tygodnie (ostrzeżenie z badania Stott 2017 TRUST)",
      "Utrata gęstości kości przy długotrwałych dawkach supresyjnych dla TSH (>200 μg/dobę, TSH <0.1 mIU/L przewlekle) — ryzyko osteoporozy",
      "Niestabilność dawki w off-label cuttingu → supraphysjologiczna titracja dawki NIE jest zalecana"
    ],
    "avoid": [
      "Istniejąca arytmia serca (migotanie przedsionków, częstoskurcz komorowy) — bezwzględne przeciwwskazanie podczas titracji dawki",
      "Ostry zawał mięśnia sercowego (<6 miesięcy) — bezwzględne przeciwwskazanie",
      "Niewydolność nadnerczy bez kompensacji Rx — bezwzględne przeciwwskazanie (Rx T4 może wywołać przełom nadnerczowy)",
      "Kontekst off-label cuttingu — kliniczne Rx z legitymnym rozpoznaniem niedoczynności tarczycy jest prawidłowe, sportowe off-label użycie w cuttingu NIE jest legitymne i stanowi potencjalne naruszenie WADA",
      "Pheochromocytoma — bezwzględne przeciwwskazanie",
      "Cukrzyca typu 1 — względne przeciwwskazanie (Rx T4 + stack insulina zaburza zarządzanie glukozą)"
    ]
  },
  "interactions": [
    "Liothyronine (T3) — terapia łączona T4+T3 wg Bunevicius 1999 PMID 9989958 ulga w objawach poznawczych, dawkowanie dostosowywane osobno",
    "Warfaryna — T4 nasila działanie przeciwzakrzepowe, wymagane monitorowanie INR",
    "Doustne suplementy wapnia + żelaza — zmniejszają wchłanianie T4 o 30-50% (zalecany odstęp 4-godzinny)",
    "PPI (omeprazol, pantoprazol) — wzrost pH żołądka obniża wchłanianie T4",
    "Mleko sojowe + Wegovy + Mounjaro — zaburzenie wchłaniania (odstęp 4-godzinny)",
    "Beta-bloker (propranolol) — inhibitor konwersji D1 spowalnia T4 → T3, kompensowalne dodatkowymi dawkami T3",
    "SSRI (sertralina, fluoksetyna) — udokumentowane zaburzenie sprzężenia zwrotnego regulującego poziom TSH"
  ],
  "studies": [
    {
      "title": "Discontinuation of levothyroxine therapy in patients with subclinical hypothyroidism: a pilot randomized clinical trial.",
      "authors": "Maraka S, Owen RR, Singh Ospina NM",
      "journal": "Endocrine",
      "pmid": "40736623"
    },
    {
      "title": "A 2013 survey of clinical practice patterns in the management of primary hypothyroidism.",
      "authors": "Burch HB, Burman KD, Cooper DS",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "24527720"
    },
    {
      "title": "Guidelines for the treatment of hypothyroidism (ATA)",
      "authors": "Jonklaas J, Bianco AC, Bauer AJ et al.",
      "journal": "Thyroid. 2014;24(12):1670-1751.",
      "pmid": "25266247"
    },
    {
      "title": "Combined levothyroxine plus liothyronine compared with levothyroxine alone in primary hypothyroidism: a randomized controlled trial",
      "authors": "Walsh JP, Shiels L, Lim EM et al.",
      "journal": "J Clin Endocrinol Metab. 2003;88(10):4543-4550.",
      "pmid": "14557420"
    },
    {
      "title": "Levothyroxine Formulations: Pharmacological and Clinical Implications of Generic Substitution.",
      "authors": "Benvenga S, Carlé A",
      "journal": "Adv Ther",
      "pmid": "31485974"
    }
  ],
  "faq": [
    {
      "q": "Monoterapia T4 vs kombinacja T4+T3 — co mówią dowody TRUST?",
      "a": "Bunevicius 1999 NEJM (PMID 9989958), klasyczne RCT T3 add-on, znalazło ulgę w objawach poznawczych na monoterapii T4. Stott 2017 TRUST NEJM (PMID 28121505), RCT starszych z subkliniczną niedoczynnością tarczycy, NIE znalazło korzyści objawowej z substytucji T4 (placebo-controlled n=737). Walsh 2003 PMID 14557420 oraz większość późniejszych meta-analiz również nie pokazuje konsekwentnej przewagi poznawczej T4+T3 nad monoterapią T4. Gold-standard kliniczny 2024: monoterapia T4 pierwszorzutowo, kombinacja T4+T3 tylko przy utrzymujących się objawach poznawczych (Jonklaas 2014 ATA guideline)."
    },
    {
      "q": "Cutting cycle: T4 vs T3 — co wybrać?",
      "a": "Żaden nie jest legitymny w cuttingu (off-label); ale jeśli wybrać: T3 dominuje w klasycznych protokołach ze względu na szybszy wzrost tempa metabolizmu (24-godzinne t1/2 vs 7 dni). T4 ma wolniejszy steady-state (~6 tygodni) i wolniejszą kinetykę on/off → mniejsze ryzyko jatrogennej hipertyreozy, ale 4-6 tygodniowy cykl cutting NIE osiąga steady-state efektu termogenicznego na T4. Status WADA: T4 'dozwolona' przy udokumentowanym rozpoznaniu niedoczynności tarczycy, T3 in-competition zakazana dla sportowców bez Rx. Sportowe off-label użycie w cuttingu NIE jest legitymne i stanowi potencjalne naruszenie WADA."
    },
    {
      "q": "Proces TUE WADA z udokumentowaną niedoczynnością tarczycy?",
      "a": "Tak — T4 (Levothyroxine) jest w kategorii S0 'dozwolone' przy legitymnym Rx niedoczynności tarczycy. Standardowy proces TUE (Therapeutic Use Exemption): rozpoznanie endokrynologa (wzorzec TSH, anti-TPO, Tg-AB potwierdzenie laboratoryjne) + zatwierdzenie komitetu TUE federacji sportowej. Lista zabronionych WADA 2025 explicit: sportowcy z istniejącym wcześniej rozpoznaniem Rx są legitymni. Sportowcy z udokumentowaną niedoczynnością tarczycy + Levothyroxine są częstą kombinacją na poziomie top-competition (USA + UE). T3 (Liothyronine) jest bardziej restrykcyjna: TUE tylko w wyjątkowych okolicznościach, gdy monoterapia T4 jest nieskuteczna."
    },
    {
      "q": "Skutki uboczne nadmiernych dawek T4?",
      "a": "Dawki supresyjne dla TSH (>200 μg/dobę przewlekle, TSH <0.1 mIU/L) wywołują zespół hipertyreozy: tachykardia, palpitacje, lęk, bezsenność, skrajna utrata masy ciała, nietolerancja ciepła. Długoterminowe (>1 rok) dawkowanie supresyjne dla TSH związane jest z utratą gęstości kości + ryzykiem osteoporozy (Faber 1994 PMID 8112375). Ryzyko sercowo-naczyniowe u pacjentów starszych: incydencja migotania przedsionków rośnie 2-3x przy dawce supresyjnej dla TSH (Sawin 1994 PMID 8302057). Off-label cutting przy super-dawce 200-300 μg/dobę w oknie 4-6 tygodni niesie wysokie ryzyko ostrego zespołu hipertyreozy + arytmii serca."
    },
    {
      "q": "Generic vs brand Synthroid — czy jest różnica bioekwiwalencji?",
      "a": "Badanie FDA 2019 (Trapnell PMID 31302949) potwierdziło bioekwiwalencję 12 zatwierdzonych przez FDA preparatów generycznych Levothyroxine z Synthroid (zakres AUC 0.95-1.05). Wytyczne kliniczne (AACE 2012, Garber): zmiana między generic a brand powinna być unikana u pacjentów już stabilnych na Rx — wariabilność między partiami jest minimalna, ale pozostanie przy jednej partii zalecane ze względu na efekt placebo + percepcję stabilności dawki. Dla nowego Rx start na generic lub brand jest równoważny pod względem bioekwiwalencji."
    }
  ],
  "related": [
    "liothyronine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 75,
      "medium": 125,
      "high": 200
    },
    "unit": "μg/dobę",
    "note": "Kliniczne Rx niedoczynności tarczycy 1.6 μg/kg/dobę (60-100 kg → 100-150 μg/dobę). Dawkowanie AM na czczo, 30-60 minut przed śniadaniem. Krok titracji 25 μg co 2 tygodnie, TSH-target 0.5-2.5 mIU/L. Off-label cutting 200-300 μg/dobę (NIE zalecane — wolniejsza titracja bezpieczniejsza niż T3). Przed cyklem baseline TSH + wolne-T3 + wolne-T4 + anti-TPO + Tg-AB; mid-cycle 6-tygodniowa kontrola TSH + post-cycle 4-tygodniowa kontrola regeneracji."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed startem cyklu",
      "markers": "TSH, wolne-T3, wolne-T4, odwrotne-T3, anti-TPO + Tg-AB (screening Hashimoto), 12-odprowadzeniowe EKG, BP + tętno spoczynkowe, panel lipidowy (TC/LDL/HDL/TG)",
      "purpose": "Screening istniejącej niedoczynności tarczycy / przeciwwskazania Hashimoto, baseline sercowo-naczyniowy, baseline funkcji osi tarczycy"
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "6 tygodni po starcie cyklu (confirm steady-state)",
      "markers": "TSH (Rx-target 0.5-2.5 mIU/L), wolne-T4 (górny zakres normy), odwrotne-T3, panel lipidowy, home-tracking BP + HR cotygodniowo",
      "purpose": "Weryfikacja osiągnięcia docelowego zakresu TSH; ocena czy titracja dawki 25 μg co 2 tygodnie jest potrzebna. Panel lipidowy jako sygnał sercowo-naczyniowy (T4 obniża LDL przy Rx niedoczynności tarczycy)"
    },
    "postCycle": {
      "label": "Po cyklu (kontekst off-label cutting)",
      "timing": "2 + 4 tygodnie po końcu cyklu",
      "markers": "TSH (powrót do baseline), wolne-T3, wolne-T4, odwrotne-T3, follow-up anti-TPO, home-tracking BP + HR",
      "purpose": "Weryfikacja regeneracji endogennej osi tarczycy. Kontekst off-label cutting ma krótsze okno niż kliniczne Rx, więc oczekiwana szybka regeneracja (4-6 tygodni)"
    },
    "cruise": {
      "label": "Długoterminowo (kliniczne Rx niedoczynności tarczycy)",
      "timing": "Przy indykacji klinicznej rocznie / co pół roku",
      "markers": "TSH (Rx-target 0.5-2.5 mIU/L), wolne-T4, panel lipidowy, doroczny DEXA-scan gęstości kości (ryzyko osteoporozy przy dawce supresyjnej dla TSH >200 μg/dobę przewlekle), monitorowanie rytmu EKG u pacjentów starszych",
      "purpose": "Długoterminowe Rx-monitoring klinicznej niedoczynności tarczycy (Jonklaas 2014 ATA guideline), utrzymanie celu TSH jest obowiązkowe"
    }
  }
}
