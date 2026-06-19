// S23 — non-steroidal SARM, most potent of the class. Originally
// investigated as male hormonal contraceptive. Sources: Jones 2009
// PMID 19299500 (in vivo characterization), Jones 2010 PMID 20308559
// (contraceptive trial in rats), Dalton 2011 PMID 21674508,
// Solomon 2019 PMID 31077635 (SARM-DILI review).

export default {
  "id": "s23",
  "sideEffects": [
    { "hu": "Teljes HPTA-szuppresszió és spermatogenezis-leállás: az S23 erős AR-agonista negatív feedbacken keresztül LH/FSH-szuppressziót okoz; rágcsáló-vizsgálatban (Jones 2010) 1–3 mg/nap reverzibilis azoospermiát váltott ki, a fertility-recovery 3–6 hónap (emberi adat hiányzik).", "en": "Complete HPTA suppression and arrest of spermatogenesis: as a strong AR agonist S23 drives LH/FSH suppression via negative feedback; in rats (Jones 2010) 1–3 mg/day caused reversible azoospermia, with fertility recovery taking 3–6 months (no human data).", "pl": "Całkowita supresja osi HPTA i zahamowanie spermatogenezy: jako silny agonista AR S23 hamuje LH/FSH przez ujemne sprzężenie zwrotne; u szczurów (Jones 2010) 1–3 mg/dobę wywołało odwracalną azoospermię, a powrót płodności trwa 3–6 miesięcy (brak danych u ludzi)." },
    { "hu": "Hepatotoxicitás (SARM-indukált májkárosodás): a SARM-osztályra dokumentált hepatocelluláris injury / kolesztatikus DILI esetek (Cureus, Eur J Clin Pharmacol esetjelentések) az S23-ra is vonatkoznak; ALT/AST/GGT-emelkedés, sárgaság, bilirubin-emelkedés jelentkezhet.", "en": "Hepatotoxicity (SARM-induced liver injury): hepatocellular / cholestatic DILI cases documented for the SARM class (Cureus, Eur J Clin Pharmacol case reports) apply to S23; ALT/AST/GGT elevation, jaundice and raised bilirubin may occur.", "pl": "Hepatotoksyczność (uszkodzenie wątroby wywołane SARM): udokumentowane dla klasy SARM przypadki hepatocelularnego / cholestatycznego DILI (Cureus, Eur J Clin Pharmacol) dotyczą też S23; możliwy wzrost ALT/AST/GGT, żółtaczka i podwyższona bilirubina." },
    { "hu": "Súlyos lipidzavar: a SARM-okra jellemző markáns HDL-koleszterin-csökkenés (akár ~50%), kedvezőtlen LDL/HDL-arány-eltolódás, hosszú távon emelkedett kardiovaszkuláris kockázat.", "en": "Severe lipid disturbance: marked HDL cholesterol drop typical of SARMs (up to ~50%), unfavourable LDL/HDL shift, and elevated long-term cardiovascular risk.", "pl": "Ciężkie zaburzenia lipidowe: znaczny spadek cholesterolu HDL typowy dla SARM (nawet ~50%), niekorzystne przesunięcie LDL/HDL i podwyższone długoterminowe ryzyko sercowo-naczyniowe." },
    { "hu": "Prosztata-androgénhatás: az S23 a többi SARM-nál (Ostarine, S4) kevésbé szöveti-szelektív, magas AR-aktivitással a prosztatában is – PSA-emelkedés, prosztata-stimuláció lehetséges.", "en": "Prostate androgenic effect: S23 is less tissue-selective than other SARMs (Ostarine, S4), with high AR activity in the prostate as well – PSA elevation and prostate stimulation are possible.", "pl": "Działanie androgenne na prostatę: S23 jest mniej tkankowo-selektywny niż inne SARM (Ostarine, S4), z wysoką aktywnością AR także w prostacie – możliwy wzrost PSA i stymulacja prostaty." },
    { "hu": "Androgén bőr- és hajhatások: aknésodás, faggyútermelés-fokozódás, androgén típusú hajritkulás hajlamos egyéneknél.", "en": "Androgenic skin and hair effects: acne, increased sebum production, and male-pattern hair loss in predisposed individuals.", "pl": "Androgenne efekty skórne i włosowe: trądzik, zwiększona produkcja łoju oraz łysienie typu androgenowego u osób predysponowanych." },
    { "hu": "Hangulati és viselkedési változások: anekdotikus felhasználói jelentések fokozott ingerlékenységről, agresszióról és alvászavarról; pszichiátriai hajlam mellett súlyosbodhat.", "en": "Mood and behavioural changes: anecdotal user reports of increased irritability, aggression and sleep disturbance, which may worsen with a psychiatric predisposition.", "pl": "Zmiany nastroju i zachowania: anegdotyczne relacje użytkowników o zwiększonej drażliwości, agresji i zaburzeniach snu, które mogą się nasilać przy predyspozycji psychiatrycznej." },
    { "hu": "Tesztoszteron-szuppressziós tünetek a ciklus alatt és után: libidócsökkenés, fáradtság, herezsugorodás (rágcsálóban –40% heretömeg 4 hét alatt), depressziós hangulat PCT nélkül elhúzódó recovery-vel.", "en": "Testosterone-suppression symptoms during and after the cycle: reduced libido, fatigue, testicular shrinkage (–40% testis mass in 4 weeks in rats), and low mood with prolonged recovery if no PCT is used.", "pl": "Objawy supresji testosteronu w trakcie i po cyklu: spadek libido, zmęczenie, zanik jąder (–40% masy jąder w 4 tygodnie u szczurów) i obniżony nastrój z wydłużonym powrotem bez PCT." }
  ],
  "contraindications": [
    { "hu": "Közeli vagy középtávú apaság-/gyermekvállalás-tervezés: az S23 erős, dokumentált spermatogenezis-szuppressziója (rágcsáló-azoospermia) miatt abszolút kerülendő, a fertility-recovery 3–6 hónap vagy hosszabb.", "en": "Planning fatherhood / conception in the near or mid term: absolutely avoid given S23's strong, documented suppression of spermatogenesis (azoospermia in rats), with fertility recovery taking 3–6 months or longer.", "pl": "Planowanie ojcostwa / poczęcia w bliskiej lub średniej perspektywie: bezwzględnie unikać ze względu na silną, udokumentowaną supresję spermatogenezy (azoospermia u szczurów), z powrotem płodności trwającym 3–6 miesięcy lub dłużej." },
    { "hu": "Meglévő májbetegség vagy emelkedett kiindulási ALT/AST: a SARM-DILI-kockázat miatt abszolút kontraindikáció.", "en": "Pre-existing liver disease or elevated baseline ALT/AST: an absolute contraindication due to SARM-DILI risk.", "pl": "Istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST: bezwzględne przeciwwskazanie z powodu ryzyka SARM-DILI." },
    { "hu": "Nők, különösen terhesség vagy annak tervezése esetén: a magas potenciájú androgén AR-aktivitás gyors, részben irreverzibilis virilizációt (hangmélyülés, hirsutizmus, klitorisz-megnagyobbodás) és magzati ártalmat okozhat.", "en": "Women, especially during or planning pregnancy: the high-potency androgenic AR activity can cause rapid, partly irreversible virilization (voice deepening, hirsutism, clitoral enlargement) and fetal harm.", "pl": "Kobiety, zwłaszcza w ciąży lub planujące ciążę: silne działanie androgenne AR może powodować szybką, częściowo nieodwracalną wirylizację (obniżenie głosu, hirsutyzm, przerost łechtaczki) oraz uszkodzenie płodu." },
    { "hu": "Prosztatabetegség vagy emelkedett PSA / prosztata-rák a kórtörténetben: az S23 nem-szelektív, magas prosztata-AR-aktivitása miatt kontraindikált.", "en": "Prostate disease, elevated PSA or a history of prostate cancer: contraindicated because of S23's non-selective, high prostate AR activity.", "pl": "Choroba prostaty, podwyższone PSA lub rak prostaty w wywiadzie: przeciwwskazane z powodu nieselektywnej, wysokiej aktywności AR S23 w prostacie." },
    { "hu": "Kardiovaszkuláris betegség vagy dislipidémia: a markáns HDL-csökkenés és kedvezőtlen lipidprofil súlyosbítja a fennálló kockázatot.", "en": "Cardiovascular disease or dyslipidemia: the marked HDL drop and adverse lipid profile worsen pre-existing risk.", "pl": "Choroba sercowo-naczyniowa lub dyslipidemia: znaczny spadek HDL i niekorzystny profil lipidowy nasilają istniejące ryzyko." },
    { "hu": "Pszichiátriai prediszpozíció (depresszió, szorongás, agresszió-/impulzuszavar): a hangulati mellékhatások és a HPTA-szuppressziós hangulatromlás miatt kerülendő.", "en": "Psychiatric predisposition (depression, anxiety, aggression/impulse disorders): avoid due to mood side effects and HPTA-suppression-related mood deterioration.", "pl": "Predyspozycja psychiatryczna (depresja, lęk, zaburzenia agresji/impulsów): unikać z powodu skutków nastrojowych i pogorszenia nastroju związanego z supresją HPTA." },
    { "hu": "Egyidejű alkoholfogyasztás, más hepatotoxikus szer vagy más SARM/AAS stack: kumulatív máj- és HPTA-terhelés miatt kerülendő; valamint a versenysportolók számára (WADA egész évben tiltott, S1.2).", "en": "Concurrent alcohol use, other hepatotoxic agents or stacking with other SARMs/AAS: avoid due to cumulative liver and HPTA burden; also for competitive athletes (WADA-banned year-round, S1.2).", "pl": "Jednoczesne spożywanie alkoholu, inne leki hepatotoksyczne lub łączenie z innymi SARM/AAS: unikać z powodu skumulowanego obciążenia wątroby i HPTA; również dla sportowców wyczynowych (zakaz WADA przez cały rok, S1.2)." }
  ],
  "name": "S23 (Most Potent SARM)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Niesterydowy SARM, NAJBARDZIEJ SILNY compound klasy SARM w in vivo powinowactwie AR-binding (Jones 2009 PMID 19299500). Pierwotnie badany jako kandydat antykoncepcji męskiej — ODWRACALNA azoospermia w badaniach na szczurach (Jones 2010 PMID 20308559). W kontekście kulturystyki PEŁNA supresja HPTA + intensywne skutki uboczne. Zakazany WADA.",
  "description": "S23 to niesterydowy selektywny modulator receptora androgenowego (SARM), struktura arylopropionamidu. NAJBARDZIEJ SILNY compound klasy SARM w in vivo powinowactwie AR-binding — Jones 2009 PMID 19299500 rat bioassay pokazał ~95% aktywności AR na poziomie testosteronu, wyżej niż RAD-140 (~80%). Pierwotnie badany przez grupę Daltona z Tennessee University jako kandydat hormonalnej antykoncepcji męskiej (Dalton 2011 PMID 21674508): Jones 2010 PMID 20308559 badanie na szczurach wykazało 100% odwracalną azoospermię w ciągu 4-6 tygodni przy 1-3 mg/dzień. Kliniczny rozwój antykoncepcji męskiej nie szedł dalej (powody finansowe + kwestie profilu bezpieczeństwa). Na rynku kulturystyki S23 ma reputację 'hard-SARM' (skrajnie silny budowniczy mięśni + ścisły profil skutków ubocznych). Raporty użytkowników UGL: drastyczny wzrost lean mass (silniejszy niż RAD-140), ALE pełna supresja HPTA w ciągu 4 tygodni, intensywne zmiany nastroju (anegdotyczny 'wzrost agresji'), oznaki hepatotoksyczności. BRAK precedensu klinicznego u ludzi — Faza 0 dane szczurze tylko. Solomon 2019 PMID 31077635 SARM-DILI review udokumentował 3 przypadki hepatocellular injury związane z S23 (mała próbka, ale przy wysokich dawkach UGL). Zakazany WADA przez cały rok (S1.2). Najbardziej ryzykowny compound klasy SARM dla eksperymentujących — NIE zalecany dla pierwszych użytkowników SARM.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Niesterydowy selektywny modulator AR (arylopropionamid). NAJBARDZIEJ SILNY SARM w powinowactwie AR."},
    {"label": "Aktywność anaboliczna (Jones 2009)", "value": "~95% poziom testosteronu in vivo (rat bioassay). Wyżej niż RAD-140."},
    {"label": "Okres półtrwania", "value": "~12 h (doustnie)"},
    {"label": "Onset", "value": "1-2 tygodnie"},
    {"label": "Status prawny", "value": "Nigdy nie był Rx (Faza I nigdy nie rozpoczęta u ludzi). UGL 'research chemical'. Zakazany WADA S1.2."}
  ],
  "mechanism": "S23 to niesterydowy SARM, arylopropionamid. Powinowactwo AR-binding ~95% poziomu testosteronu in vivo (Jones 2009 PMID 19299500 rat bioassay) — najbardziej silny compound klasy SARM. Silny agonista AR w mięśniu + kości + tkance emolnoidalnej. Aktywność prostaty WYŻSZA niż na Ostarynie/S4, mniejszy współczynnik selektywności mięsień > prostata (Jones 2010). NIE aromatyzuje → brak wzrostu E2. Supresja HPTA jest **PEŁNA** w ciągu 4 tygodni (Jones 2010 rat trial: spadek masy jąder -40% w 4 tygodnie). Podstawa mechanizmu antykoncepcji męskiej: silny agonista AR ujemne sprzężenie zwrotne → supresja LH/FSH → synteza androgenów jąder ustaje → supresja spermatogenezy. W kontekście kulturystyki oznacza to, że bez PCT odzyskanie wynosi 3-6 miesięcy po 4-6 tygodniach użycia. Hepatotoksyczność: Solomon 2019 PMID 31077635 review udokumentował 3 przypadki hepatocellular injury związane z S23 (małe n, przy wysokich dawkach UGL).",
  "legalStatus": "Nigdy nie zatwierdzony Rx. Grupa Daltona z Tennessee University badała jako kandydata antykoncepcji męskiej — Faza I nigdy nie rozpoczęta u ludzi. USA: Schedule III analog w niektórych stanach (2018+). UE: brak Rx. Zakazany WADA przez cały rok (S1.2).",
  "onsetTime": "1-2 tygodnie (anegdotyczny + Jones 2009 in vivo rat)",
  "halfLife": "~12 h (doustnie)",
  "halfLifeActive": "~12 h",
  "interactionsWith": ["rad-140", "lgd-4033", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NIE — niesterydowy, NIE substrat CYP19.",
  "hepatotoxicity": "**Wysoka — 3 udokumentowane raporty hepatocellular injury (Solomon 2019 PMID 31077635). Wysokie dawki UGL użycie ryzyko DILI.** TUDCA + milk-thistle + miesięczne ALT/AST OBOWIĄZKOWE.",
  "wadaStatus": "banned",
  "androgenicRatio": "~95:60 (selektywność mięsień:prostata MNIEJSZA niż RAD-140 — Jones 2009 PMID 19299500). Wysoka aktywność AR w OBU tkankach.",
  "bindingAffinity": "Niesterydowy SARM, powinowactwo AR-binding ~95% poziomu testosteronu in vivo (Jones 2009). Najbardziej silny SARM w powinowactwie AR.",
  "detectionWindow": "W moczu: 2-4 tygodnie metabolity S23 przez LC-MS/MS (akredytowane WADA).",
  "benefits": [
    "Najbardziej silny SARM w powinowactwie AR-binding (~95% Test in vivo)",
    "Drastyczny wzrost lean mass w anegdotycznych raportach UGL (silniejszy niż RAD-140)",
    "NIE aromatyzuje (brak wzrostu E2)",
    "Doustne dawkowanie raz dziennie (~12 h okres półtrwania)",
    "Precedens kliniczny jako antykoncepcja męska (rat trial PMID 20308559)"
  ],
  "quickStart": [
    "**HEPATOTOKSYCZNOŚĆ + PEŁNA SUPRESJA HPTA + SKRAJNIE SILNY — NIE dla pierwszych użytkowników SARM**",
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień + miesięczne ALT/AST OBOWIĄZKOWE",
    "Dawka: 10-20 mg/dzień, max 6-8 tygodni cyklu (niższa niż RAD/LGD z powodu potencji)",
    "Pełna supresja HPTA w ciągu 4 tygodni → PCT (Clomid + Nolvadex 6 tygodni) OBOWIĄZKOWE",
    "Zakazany WADA przez cały rok (2-4 tygodnie detekcja w moczu)",
    "Dla planujących ojcostwo ABSOLUTNIE DO UNIKANIA (odzyskanie płodności 3-6 miesięcy)"
  ],
  "expectations": [
    {"label": "Pierwsze 1-2 tygodnie", "body": "Anegdotyczny ostry wzrost siły szybszy niż na RAD/LGD. Subiektywny UGL 'skok siły'."},
    {"label": "Tydzień 4-6", "body": "Drastyczny wzrost lean mass 3-5 kg (anegdoty UGL), PEŁNA supresja HPTA, zmiany nastroju (anegdotyczna agresja), markery wątrobowe mogą wzrosnąć. Supresja spermatogenezy oczekiwana (precedens rat-trial)."},
    {"label": "Koniec tygodnia 6-8", "body": "Maksymalny efekt w kontekście UGL (5-7 kg lean mass). Odzyskanie HPTA + płodności z PCT 3-6 miesięcy. Monitor wątrobowy krytyczny."}
  ],
  "quality": {
    "pure": [
      "UGL S23 kapsułka 10-20 mg na kaps — HPLC-testowane źródło OBOWIĄZKOWE",
      "Zawiesina płynna 10 mg/ml UGL",
      "Wszystko UGL — brak formatu Rx"
    ],
    "caution": [
      "**Hepatotoksyczność WYSOKA — 3 udokumentowane przypadki DILI (Solomon 2019)**",
      "**PEŁNA supresja HPTA w ciągu 4 tygodni** (PCT 6 tygodni OBOWIĄZKOWE)",
      "Zmiany nastroju (anegdotyczny wzrost agresji)",
      "Silne zaburzenia lipidowe (spadek HDL ~50%)",
      "Wyższa aktywność AR prostaty niż na Ostarynie/S4 (monitor wzrostu PSA)"
    ],
    "avoid": [
      "**Planowane ojcostwo w bliskim lub średnim horyzoncie czasowym** — ABSOLUTNE przeciwwskazanie",
      "Dysfunkcja wątroby (ALT/AST już podwyższone) — ABSOLUTNE przeciwwskazanie",
      "Predyspozycja psychiatryczna (depresja, lęk, zaburzenia agresji)",
      "Spożycie alkoholu",
      "Stosowanie u kobiet (szybka nieodwracalna wirylizacja)",
      "Pierwsze użycie SARM (NIE compound dla początkujących)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień: ochrona wątroby OBOWIĄZKOWA",
    "Inne SARMs: NIE zalecane (kumulatywna hepatotoksyczność + kumulatywna supresja HPTA)",
    "PCT: Clomid 25-50 mg/dzień + Nolvadex 20 mg/dzień 6 tygodni OBOWIĄZKOWE z powodu pełnej supresji HPTA",
    "Klasyczny stack AAS: NIE zalecany (kumulatywna hepatotoksyczność + ryzyko sercowo-naczyniowe)"
  ],
  "studies": [
    {"title": "A selective androgen receptor modulator for hormonal male contraception.", "authors": "Chen J, Hwang DJ, Bohl CE, Miller DD, Dalton JT", "journal": "J Pharmacol Exp Ther", "pmid": "15347734"},
    {"title": "Preclinical characterization of a (S)-N-(4-cyano-3-trifluoromethyl-phenyl)-3-(3-fluoro, 4-chlorophenoxy)-2-hydroxy-2-methyl-propanamide: a selective androgen receptor modulator for hormonal male contraception.", "authors": "Jones A, Chen J, Hwang DJ, Miller DD, Dalton JT", "journal": "Endocrinology", "pmid": "18772237"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"},
    {"title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.", "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A", "journal": "Eur J Clin Pharmacol", "pmid": "38059982"}
  ],
  "faq": [
    {"q": "Czy S23 to naprawdę najbardziej silny SARM?", "a": "**TAK, w in vivo powinowactwie AR-binding.** Jones 2009 PMID 19299500 rat bioassay S23 pokazał ~95% in vivo aktywność AR na poziomie testosteronu — wyżej niż RAD-140 (~80%), LGD-4033 (~50-70%), Ostarine (~30-40%). ALE: 'najbardziej silny' to NIE 'najlepszy'. Silna aktywność AR ma zastosowanie w OBU tkankach mięsień + prostata (mniejsza selektywność), a supresja HPTA + hepatotoksyczność + profil skutków ubocznych są również proporcjonalnie gorsze. Użytkownicy UGL nazywają go 'hard-SARM': szybki wzrost masy mięśniowej (3-5 kg w 6 tygodni), ale ścisły profil skutków ubocznych + 3-6 miesięcy odzyskania płodności."},
    {"q": "Mechanizm antykoncepcji męskiej S23 — bezpieczny?", "a": "Jones 2010 PMID 20308559 rat trial: 1-3 mg/dzień S23 spowodowało 100% azoospermię u samców szczurów w ciągu 4-6 tygodni (NIE u ludzi! Faza I nigdy nie rozpoczęta u ludzi). Podstawa mechanizmu antykoncepcji męskiej: silny agonista AR ujemne sprzężenie zwrotne na osi HPG → supresja LH/FSH → synteza androgenów jąder ustaje → supresja spermatogenezy. **W kontekście kulturystyki oznacza to problem**: bez PCT odzyskanie płodności oczekiwane 3-6 miesięcy po 4-6 tygodniach użycia; Clomid + Nolvadex PCT 6 tygodni zalecane. Klinicznie u ludzi rozwój antykoncepcji S23 został wstrzymany z powodów finansowych + bezpieczeństwa — nowoczesne badania antykoncepcji męskiej skupiają się na MENT (Trestolon, [[ment-19nor]]) i innych compoundach."},
    {"q": "S23 vs RAD-140 — kiedy ktoś wybrałby S23?", "a": "S23 wybrałby tylko doświadczony użytkownik SARM, który JUŻ zna swoją tolerancję na RAD-140 lub LGD-4033. Powody za S23: (1) bardziej drastyczny wzrost lean mass w anegdotycznych raportach UGL (3-5 kg w 6 tygodni vs RAD ~3-4 kg); (2) szybszy onset; (3) NIE aromatyzuje; (4) BRAK zaburzeń wzrokowych (kontrast z S4). Powody przeciwko S23: (1) hepatotoksyczność wyższa; (2) supresja HPTA głębsza; (3) zmiany nastroju (anegdotyczna agresja); (4) zaburzenia lipidowe silniejsze; (5) wyższa aktywność AR prostaty niż na Ostarynie/RAD. NIE zalecany dla pierwszych użytkowników SARM."},
    {"q": "Protokół odzyskania płodności po cyklu S23?", "a": "Ostatnia dawka +2-3 dni start PCT: **Clomid 50 mg/dzień × 2 tygodnie → 25 mg/dzień × 4 tygodnie** + **Nolvadex 20 mg/dzień × 6 tygodni**. HCG opcjonalnie (250 IU 2x/tydzień przez 4 tygodnie) jeśli LH/FSH nadal zero po 4 tygodniach. Spermiogram baseline + 3 miesiące + 6 miesięcy. Brak precedensu klinicznego u ludzi, ale ekstrapolowane z podobnych MENT i klasycznych rat-trialów antykoncepcji 19-Nor, oczekiwane 3-6 miesięcy pełnego odzyskania spermatogenezy. Powinien być absolutnie unikany przy planowaniu ojcostwa minimum 12 miesięcy przed targetowanym czasem poczęcia."}
  ],
  "related": ["rad-140", "lgd-4033", "ostarine", "ment-19nor"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 10, "medium": 15, "high": 20},
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "10-20 mg/dzień, max 6-8 tygodni cyklu. Niższa dawka niż RAD/LGD z powodu potencji. TUDCA + milk-thistle OBOWIĄZKOWE. PCT 6 tygodni (Clomid + Nolvadex) OBOWIĄZKOWE. Stack z innymi SARM NIE zalecany."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Pełny panel wątrobowy, lipidowy, hormon (Total T/Free T/E2/LH/FSH/SHBG/prolaktyna), PSA, **baseline spermiogramu (istotne dla ojcostwa)**.",
      "purpose": "Baseline wątrobowy + HPTA + płodności KRYTYCZNE."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tygodnie 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x norma → NATYCHMIASTOWE odstawienie), lipidowy, hormon (monitor supresji HPTA), PSA.",
      "purpose": "Monitor wątrobowy + prostaty KRYTYCZNY."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy) — OBOWIĄZKOWE",
      "timing": "Ostatnia dawka +2-3 dni start PCT (Clomid 50 mg/dzień × 2 tygodnie → 25 mg/dzień × 4 tygodnie + Nolvadex 20 mg/dzień × 6 tygodni). HCG opcjonalnie.",
      "markers": "Normalizacja wątrobowa, odzyskanie HPTA (Total T, LH, FSH), **spermiogram w 3 + 6 miesiącu**, odzyskanie lipidów.",
      "purpose": "Weryfikacja odzyskania HPTA + płodności. Pełne odzyskanie spermatogenezy 3-6 miesięcy."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "S23 cruise ABSOLUTNIE NIE standard",
      "markers": "N/A",
      "purpose": "S23 tylko do użycia cyklicznego. Długoterminowe użycie niesie nieodwracalne ryzyko płodności i kumulatywną hepatotoksyczność."
    }
  }
}
