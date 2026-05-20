// EPO (Epogen / Procrit / Aranesp / Mircera) — Erytropoetyna, framing kliniczny
// anemia w CKD primary, kontekst dopingu wytrzymałościowego zakazany przez
// WADA secondary. Źródła: FDA Epogen SmPC (Amgen 1989), EMA EPREX SPC, KDIGO
// 2024 Anemia Guidelines, Lundby 2008/2011 kontekst dopingu EPO PMID 21486810,
// Lippi 2006 przegląd blood-doping PMID 16572116, Locatelli 2012 ESAM PMID 22954890.

export default {
  "id": "epo",
  "name": "EPO",
  "image": "/peptides/EPO.png",
  "accentColor": "#f87171",
  "tagColor": "rgba(248,113,113,0.16)",
  "shortDesc": "Erytropoetyna — agonista receptora EPO 165-AA glikoproteinowy. Leczenie anemii w CKD (kliniczne Rx); ściśle zakazana przez WADA w kontekście dopingu wytrzymałościowego.",
  "description": "Erytropoetyna (EPO) to 165-aminokwasowa cytokina glikoproteinowa (~30 kDa), endogennie produkowana przez komórki śródmiąższu okołoceweczkowego nerek (~90%) i w niewielkim stopniu przez wątrobę (~10%). Egzogenna rekombinowana EPO (rhEPO) otrzymała aprobatę FDA w 1989 r. od Amgen jako Epogen (epoetyna alfa) do leczenia anemii w przewlekłej chorobie nerek (CKD) — był to pierwszy prawdziwy blockbuster wśród peptydów terapeutycznych rekombinowanych. Mechanizm: EPO wiąże receptor EPO (EPO-R) na powierzchni progenitorów erytroidalnych (szpik kostny BFU-E + CFU-E) → aktywacja kaskady JAK2/STAT5 → przeżycie + proliferacja + różnicowanie erytroidalne → wzrost masy RBC + hematokrytu + zdolności transportu tlenu. **Kontekst kliniczny Rx (primary, ~75% użytkowania)**: anemia CKD (dializa + przed dializą), anemia indukowana chemioterapią (Procrit), anemia HIV/AZT, anemia wcześniaków. Cel Hb 10-12 g/dL — KDIGO 2024 ostrzega przed celowaniem w Hb >12-13 g/dL (dane z badań TREAT, CHOIR, CREATE: wyższy cel → zdarzenia sercowo-naczyniowe + ryzyko udaru). **Kontekst dopingu wytrzymałościowego (secondary, NIE zalecany)**: protokoły mikrodawek 100-300 IU/kg/tydzień udokumentowane od lat 90. (era Lance'a Armstronga), WADA-ściśle-zakazana w kategorii S2.1 Erythropoietin-mimetic agents CAŁY ROK (w + poza zawodami). Detekcja: analiza izoform surowicy/moczu (IEF + SDS-PAGE) + paszport biologiczny śledzenie hematokrytu. Źródła: epoetyna alfa (Epogen Amgen, Procrit Janssen — ta sama cząsteczka), darbepoetyna alfa (Aranesp Amgen — hiperglikozylowana, dłuższy t1/2), methoxy-PEG-epoetyna beta (Mircera Roche — PEGylowana, dawkowanie miesięczne). **OBOWIĄZKOWE badania krwi**: Hb, Hct, ferrytyna, saturacja transferyny, liczba retikulocytów, ciśnienie krwi (ryzyko nadciśnienia znaczące).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista receptora EPO (EPO-R) na progenitorach erytroidalnych → JAK2/STAT5 → wzrost masy RBC + Hct"
    },
    {
      "label": "Dawkowanie (CKD epoetyna alfa)",
      "value": "50-100 IU/kg SC 3x/tydzień, cel Hb 10-12 g/dL"
    },
    {
      "label": "Dawkowanie (darbepoetyna)",
      "value": "0,45-0,75 mcg/kg SC tygodniowo lub co 2 tygodnie"
    },
    {
      "label": "Okres półtrwania",
      "value": "Epoetyna alfa 4-13h SC / Darbepoetyna 70-138h / Mircera ~135h"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (anemia CKD, anemia chemo), WADA S2.1 ŚCIŚLE ZAKAZANA (w + poza zawodami)"
    },
    {
      "label": "Obowiązkowe badania krwi",
      "value": "Hb, Hct, ferrytyna, sat-transferyny, liczba retikulocytów, ciśnienie krwi"
    }
  ],
  "mechanism": "Erytropoetyna to 165-aminokwasowa jednołańcuchowa glikoproteina (~30 kDa, 3 miejsca N-glikozylacji + 1 miejsce O-glikozylacji), ~40% jej masy molekularnej stanowią cukry glikanowe — glikozylacja jest krytyczna dla regulacji t1/2 + powinowactwa do receptora. Produkcja endogenna: nerkowe komórki fibroblastyczne śródmiąższu okołoceweczkowego pod kontrolą HIF-2α (Hypoxia-Inducible Factor) → hipoksja / krwawienie → stabilizacja HIF → transkrypcja genu EPO. Wiązanie z receptorem: homodimer EPO-R na progenitorach erytroidalnych (szpik kostny BFU-E wczesny progenitor + CFU-E późny progenitor + proerytroblast) → zmiana konformacji → aktywacja JAK2 (cross-fosforylacja) → ścieżki STAT5 + PI3K/AKT + MAPK downstream → ekspresja antyapoptotyczna BCL-XL + progresja cyklu komórkowego + transkrypcja genu globiny. Efekt netto: przeżycie linii erytroidalnej + podział + hemoglobinizacja → dojrzałe RBC uwalniane do krwi obwodowej. W kontekście CKD uszkodzenie nerek zmniejsza endogenną produkcję EPO → anemia normocytarno-normochromiczna → egzogenne rhEPO zastępuje brakujący hormon. W kontekście dopingu iniekcja EPO u zdrowej osoby z już normalnym poziomem EPO → suprafizjologiczna erytropoeza → Hct 50-60%+ → wzrost lepkości krwi → ryzyko zakrzepowo-zatorowe + sercowo-naczyniowe.",
  "legalStatus": "USA: FDA Rx Epogen (Amgen 1989, epoetyna alfa), Procrit (Janssen, epoetyna alfa ta sama cząsteczka), Aranesp (Amgen 2001, darbepoetyna alfa), Mircera (Roche 2007, methoxy-PEG-epoetyna beta). Wskazania: anemia CKD (dializa + przed dializą), anemia indukowana chemioterapią, anemia HIV/AZT, wsparcie okołooperacyjnej autologicznej donacji krwi, anemia wcześniaków. UE: EMA Rx (EPREX/Erypo Janssen, NeoRecormon Roche, Binocrit Sandoz biosimilar, Aranesp, Mircera). HU + PL: zarejestrowane (EPREX, NeoRecormon, Aranesp Rx, tylko hematolog/nefrolog przepisuje). WADA: S2.1 Erythropoietin-mimetic agents — **ŚCIŚLE ZAKAZANA CAŁY ROK** (w zawodach + poza zawodami, wszystkie dyscypliny). Laboratoria akredytowane WADA wykrywają poprzez analizę izoform (IEF, SDS-PAGE) + Paszport Biologiczny Sportowca (ABP) śledzenie Hct.",
  "onsetTime": "Odpowiedź retikulocytów 3-5 dni, mierzalny wzrost Hb 2-6 tygodni",
  "halfLife": "Epoetyna alfa 4-13h SC (IV ~6-8h); Darbepoetyna alfa 70-138h SC; Mircera (methoxy-PEG-epoetyna beta) ~135h SC",
  "halfLifeActive": "Epoetyna alfa efekt farmakodynamiczny 5-7 dni; Darbepoetyna 2-3 tygodnie; Mircera 4 tygodnie (dawkowanie miesięczne)",
  "interactionsWith": [
    "hgh",
    "igf-1-lr3",
    "tesamorelin",
    "mots-c"
  ],
  "aromatization": "N/A — nie steroid, cytokina oparta na białku, nie aromatyzuje.",
  "hepatotoxicity": "Brak stresu wątrobowego — iniekcja podskórna (SC) lub dożylna (IV), NIE doustnie, NIE 17α-alkilowana. Wzrost enzymów wątrobowych nie udokumentowany w bazie badań klinicznych (Epogen + Aranesp 30+ lat danych bezpieczeństwa).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS; stymulus erytroidalny)",
  "bindingAffinity": "Powinowactwo do receptora EPO-R Kd ~100-200 pM. Darbepoetyna alfa: ~4x zmniejszone powinowactwo do receptora vs epoetyna alfa, ALE 3x dłuższy t1/2 dzięki hiperglikozylacji → aktywność biologiczna netto wyższa. Mircera (PEGylowana): jeszcze bardziej zmniejszone powinowactwo do receptora + kompatybilna z dawkowaniem miesięcznym.",
  "detectionWindow": "Analiza izoform akredytowana WADA (IEF + SDS-PAGE Western blot): epoetyna alfa 3-7 dni w moczu po pojedynczym bolusie; darbepoetyna 7-14 dni (wzorzec bandingu hiperglikozylacji odmienny od endogennego EPO); Mircera 30+ dni (PEG-tag fingerprint). Paszport Biologiczny Sportowca (ABP): longitudinalne śledzenie Hct + liczby retikulocytów → flaguje suprafizjologiczne szczyty (nawet jeśli analiza pojedynczej próbki jest ujemna).",
  "benefits": [
    "Korekcja anemii CKD (Hb 8 → 10-12 g/dL, drastyczne zmniejszenie potrzeby transfuzji, poprawa jakości życia)",
    "Leczenie anemii indukowanej chemioterapią (Procrit on-label, oszczędzanie transfuzji)",
    "Anemia wcześniaków (unikanie transfuzji u noworodków)",
    "Wsparcie okołooperacyjnej autologicznej donacji krwi (segment pacjentów Świadków Jehowy)",
    "Korekcja anemii HIV/AZT (supresja szpiku indukowana zydowudyną)",
    "Szeroka baza badań klinicznych (35+ lat od Epogen, wsparcie wytycznych KDIGO + KDOQI)"
  ],
  "quickStart": [
    "**Inicjacja tylko pod nadzorem medycznym**. Pre-inicjacja OBOWIĄZKOWA: ferrytyna >100 ng/mL + sat-transferyny >20% (uzupełnienie żelaza OBOWIĄZKOWE przed inicjacją EPO, w przeciwnym razie funkcjonalny niedobór żelaza + non-responder)",
    "Start epoetyna alfa CKD: 50-100 IU/kg SC 3x/tydzień, cel Hb 10-12 g/dL (NIE wyżej — ryzyko CV w CHOIR/TREAT)",
    "Darbepoetyna alfa: 0,45 mcg/kg SC tygodniowo LUB 0,75 mcg/kg SC co 2 tygodnie",
    "Mircera: 0,6 mcg/kg SC miesięcznie (stabilny pacjent przewlekły)",
    "Monitor ciśnienia krwi PRZY KAŻDEJ WIZYCIE (nadciśnienie indukowane EPO 20-30% incydencja, ACE-inhibitor współpodanie często potrzebne)",
    "Badania krwi tygodniowo w pierwszym miesiącu (Hb, Hct), potem co 2 tygodnie; ferrytyna + sat-transferyny kwartalnie; co miesiąc ciśnienie krwi"
  ],
  "expectations": [
    {
      "label": "Dni 1-3",
      "body": "Wzrost retikulocytów mierzalny (początek odpowiedzi szpiku kostnego). Objawy kliniczne jeszcze niezauważalne. Monitor rebound statusu żelaza (funkcjonalny niedobór żelaza może się rozwinąć)."
    },
    {
      "label": "Tygodnie 2-6",
      "body": "Wzrost Hb ~1 g/dL/2-4 tygodnie (powolne miareczkowanie do celu bezpieczniejsze niż szybkie). Objawy CKD (zmęczenie, duszność) poprawiają się. Obserwacja wzrostu ciśnienia krwi."
    },
    {
      "label": "Osiągnięcie celu Hb 10-12 g/dL",
      "body": "Dawkowanie podtrzymujące (zwykle 1/3-1/2 dawki inicjacyjnej) chronicznie. NIE cel wyższej wartości Hb (>12 g/dL ryzyko zdarzeń CV, badania CHOIR/CREATE)."
    },
    {
      "label": "Długoterminowo chronicznie",
      "body": "Stabilne utrzymanie Hb 10-12 g/dL. Kwartalny pełny panel: Hb, Hct, ferrytyna, sat-transferyny, miareczkowanie uzupełniania żelaza, management ciśnienia krwi."
    }
  ],
  "quality": {
    "pure": [
      "Epogen (Amgen) — złoty standard FDA-approved 1989, jakość Rx farmaceutyczna",
      "Procrit (Janssen) — ta sama cząsteczka co Epogen, różnica w nazwie marki",
      "EPREX/Erypo (Janssen UE) — EMA-approved epoetyna alfa",
      "Aranesp (Amgen) — darbepoetyna alfa, dawkowanie tygodniowo/co 2 tygodnie",
      "Mircera (Roche) — methoxy-PEG-epoetyna beta, dawkowanie miesięczne",
      "Binocrit (Sandoz), Retacrit (Hospira) — EMA-approved biosimilary",
      "UGL liquid EPO — UNIKAĆ, wzorzec glikozylacji krytyczny, przerwany łańcuch chłodniczy → drastyczna utrata aktywności biologicznej"
    ],
    "caution": [
      "Ryzyko nadciśnienia znaczące (20-30% incydencja), ACE-inhibitor / ARB współpodanie często potrzebne",
      "Ryzyko zakrzepowo-zatorowe (DVT, udar, MI) wyższe przy celu Hct >12-13 g/dL",
      "Aplazja czystoczerwonokrwinkowa (PRCA) rzadkie powikłanie mediowane przeciwciałami anty-EPO (klaster PRCA EPREX 1998-2002, zmiana formulacji zmniejszyła incydencję)",
      "Funkcjonalny niedobór żelaza: przed inicjacją EPO ferrytyna >100 ng/mL + sat-transferyny >20% OBOWIĄZKOWE",
      "Anemia indukowana chemioterapią: inicjacja ESA może wiązać się z ryzykiem progresji guza dla niektórych guzów litych (ostrzeżenie black-box FDA)"
    ],
    "avoid": [
      "Niekontrolowane nadciśnienie (stabilizacja ciśnienia krwi przed EPO OBOWIĄZKOWA)",
      "Wywiad aplazji czystoczerwonokrwinkowej (PRCA) indukowanej EPO",
      "Cel Hb >12 g/dL — dowody z badań CHOIR/TREAT/CREATE wykazują zwiększone ryzyko zdarzeń CV",
      "Użycie w celu dopingu — ściśle zakazane przez WADA, ryzyko dożywotniego bana, ryzyko zdarzeń sercowo-naczyniowych (Hct >55% → katastrofa lepkości krwi)",
      "Aktywna złośliwość na chemioterapii curative-intent (wytyczne ASCO/ASH 2019: unikać ESA)"
    ]
  },
  "interactions": [
    "Uzupełnianie żelaza OBOWIĄZKOWE współpodanie (oral siarczan żelazawy 100-200 mg/dzień LUB IV karboksymaltoza żelaza / glukonian żelaza — IV preferowane u pacjentów CKD, cel ferrytyna >100 + sat >20% przed inicjacją EPO)",
    "Współpodanie ACE-inhibitora / ARB często potrzebne do zarządzania nadciśnieniem indukowanym EPO (perindopril, ramipril, losartan, walsartan)",
    "Stackowanie innych środków erytropoetycznych UNIKAĆ (nie łączyć dwóch ESA)",
    "Współpodanie heparyny / antykoagulantów: prewencja krzepnięcia obwodu dializy (wzrost Hct → wzrost ryzyka krzepnięcia)",
    "Chemioterapia (cisplatyna, cyklofosfamid): leki nefrotoksyczne mogą zwiększyć zapotrzebowanie na EPO, miareczkowanie dawki",
    "Inne peptydy (HGH, IGF-1, BPC-157, Tesamorelin): brak bezpośredniej interakcji, ALE w kontekście dopingu EPO stackowanie → suprafizjologiczny Hct → katastrofalne ryzyko CV"
  ],
  "studies": [
    {
      "title": "Effects of recombinant human erythropoietin in normal humans",
      "authors": "Lundby C, Olsen NV.",
      "journal": "J Physiol. 2011;589(Pt 6):1265-71.",
      "pmid": "21486810"
    },
    {
      "title": "Biochemistry, physiology, and complications of blood doping: facts and speculation",
      "authors": "Lippi G, Franchini M, Salvagno GL, Guidi GC.",
      "journal": "Crit Rev Clin Lab Sci. 2006;43(4):349-91.",
      "pmid": "16572116"
    },
    {
      "title": "Targeting a higher hemoglobin level with epoetin in dialysis patients: results of the European Survey on Anaemia Management (ESAM)",
      "authors": "Locatelli F, Pisoni RL, Combe C, et al.",
      "journal": "Nephrol Dial Transplant. 2012;27(4):1571-9.",
      "pmid": "22954890"
    },
    {
      "title": "Correction of anemia with epoetin alfa in chronic kidney disease (CHOIR trial)",
      "authors": "Singh AK, Szczech L, Tang KL, et al.",
      "journal": "N Engl J Med. 2006;355(20):2085-98.",
      "pmid": "17108343"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego WADA tak ściśle zakazuje EPO?",
      "a": "EPO jest uważana za najbardziej dramatyczny środek zwiększający wydajność w sportach wytrzymałościowych: zwiększa VO2max o 8-12% (badanie Lundby 2007), co przekłada się na ~30-sekundową przewagę w 5-minutowej próbie czasowej. WADA kategoryzuje ją pod S2.1 Erythropoietin-mimetic agents, **ZAKAZANA CAŁY ROK** (w zawodach + poza zawodami), we WSZYSTKICH sportach. Detekcja: analiza izoform (IEF + SDS-PAGE) — rekombinowana EPO wykazuje odmienny wzorzec bandingu glikozylacji vs endogenna; Paszport Biologiczny Sportowca (ABP) — longitudinalne śledzenie Hct + liczby retikulocytów flaguje suprafizjologiczne szczyty. Lance Armstrong + afera Festina (Tour de France 1998) zademonstrowały historyczną rolę dopingu EPO. Ryzyko sercowo-naczyniowe (Hct >55% → katastrofa lepkości krwi → zakrzepowo-zatorowość, MI, udar) również uzasadnia zakaz."
    },
    {
      "q": "Jakie badania krwi są obowiązkowe przed rozpoczęciem EPO?",
      "a": "**OBOWIĄZKOWE przed inicjacją EPO**: (1) Hb + Hct (potwierdzenie anemii + ciężkość), (2) Ferrytyna >100 ng/mL (zapasy żelaza adekwatne — w przeciwnym razie funkcjonalny niedobór żelaza rozwija się na EPO, non-responder), (3) Saturacja transferyny >20% (transport żelaza adekwatny), (4) Liczba retikulocytów (baseline zdolności odpowiedzi szpiku kostnego), (5) Ciśnienie krwi (niekontrolowane nadciśnienie jest przeciwwskazaniem — EPO podnosi ciśnienie u 20-30% pacjentów), (6) Funkcja nerek (eGFR, kreatynina — staging CKD), (7) CRP / OB (zapalenie → funkcjonalny niedobór żelaza może się rozwinąć, oporność na ESA), (8) B12 + folian (wykluczyć inne przyczyny anemii), (9) Morfologia z rozmazem (wykluczyć zespoły mieloproliferacyjne). **Długoterminowy chroniczny monitoring**: Hb + Hct tygodniowo na inicjacji potem miesięcznie; ferrytyna + sat-transferyny kwartalnie; ciśnienie krwi przy każdej wizycie."
    },
    {
      "q": "Jak znaczące jest ryzyko nadciśnienia?",
      "a": "Znaczące. 20-30% pacjentów na inicjacji EPO rozwija nowe nadciśnienie lub pogorszenie istniejącego nadciśnienia. Mechanizm: (1) wzrost masy RBC → wzrost lepkości krwi → wzrost oporu naczyń obwodowych, (2) bezpośredni efekt śródbłonkowo-naczyniowy (EPO-R także na śródbłonku) → vasokonstrykcja + wzrost endoteliny-1, (3) częściowy wkład retencji Na+. Zarządzanie kliniczne: pre-EPO stabilizacja baseline ciśnienia krwi (<140/90 mmHg), współpodanie ACE-inhibitora (perindopril, ramipril) lub ARB (losartan, walsartan) w razie potrzeby, cap celu Hb 10-12 g/dL (NIE wyżej — dowody zdarzeń CV z badań CHOIR/CREATE). Kryzys nadciśnieniowy (>180/110 mmHg) → natychmiastowe zatrzymanie EPO."
    },
    {
      "q": "Dlaczego cel Hb jest ograniczony do 12 g/dL (a nie wyżej)?",
      "a": "Trzy pivotalne randomizowane badania kliniczne (CHOIR 2006 PMID 17108343, CREATE 2006, TREAT 2009) wykazały, że wyższy cel Hb (13,5-14 g/dL) znacząco podnosi ryzyko zdarzeń sercowo-naczyniowych (MI, udar, śmierć, hospitalizacja z powodu niewydolności serca) u pacjentów CKD vs cel 10,5-11,5 g/dL. CHOIR (N=1432): ramię wysokiego celu 17,5% złożone zdarzenie CV vs niski cel 13,5% (HR 1,34, p=0,03). TREAT (N=4038, darbepoetyna): ramię wysokiego celu 5% udar vs placebo 2,6% (HR 1,92). Wytyczne KDIGO 2024 Anemia dlatego **zdecydowanie** zalecają cel Hb 10-12 g/dL (NIE 13+), oraz miareczkowanie dawki ESA do tempa wzrostu Hb (≤1 g/dL/2 tygodnie). Hipoteza mechanizmu: suprafizjologiczny Hct → wzrost lepkości krwi → ryzyko zakrzepowo-zatorowe; aktywacja płytek krwi mediowana przez EPO + endotelina-1; jatrogenne nadciśnienie."
    },
    {
      "q": "Epoetyna alfa vs Darbepoetyna vs Mircera — który kiedy?",
      "a": "Wszystkie trzy są agonistami EPO-R o różnej farmakokinetyce. **Epoetyna alfa (Epogen/Procrit/EPREX)**: krótszy t1/2 (4-13h SC), dawkowanie 3x/tydzień, złoty standard 35+ lat danych bezpieczeństwa. **Darbepoetyna alfa (Aranesp)**: hiperglikozylowana (5 miejsc N-glikozylacji vs natywne 3), t1/2 70-138h SC, dawkowanie tygodniowo lub co 2 tygodnie → przewaga wygody pacjenta, preferowana w stabilnym chronicznym CKD. **Mircera (methoxy-PEG-epoetyna beta)**: PEGylowana, t1/2 ~135h SC, dawkowanie **miesięczne** → maksymalna wygoda pacjenta, standard opieki u stabilnych chronicznych pacjentów dializowanych. Skuteczność kliniczna prawie identyczna (badania head-to-head NeoRecormon/EPREX/Aranesp/Mircera non-inferiority). Wybór: na podstawie compliance pacjenta + wygody dawkowania + kosztu (Mircera droższa ale iniekcja miesięczna → przewaga adherencji)."
    }
  ],
  "related": [
    "hgh",
    "igf-1-lr3",
    "tesamorelin",
    "mots-c"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 100,
      "high": 150
    },
    "unit": "IU/kg/dawkę epoetyny alfa SC (kliniczny protokół anemii CKD)",
    "note": "**Epoetyna alfa CKD**: 50-100 IU/kg SC 3x/tydzień, cel Hb 10-12 g/dL. **Darbepoetyna alfa**: 0,45 mcg/kg SC tygodniowo LUB 0,75 mcg/kg SC co 2 tygodnie. **Mircera**: 0,6 mcg/kg SC miesięcznie. **OBOWIĄZKOWA pre-inicjacja**: ferrytyna >100 ng/mL + sat-transferyny >20% (uzupełnienie żelaza). **Cap**: wzrost Hb ≤1 g/dL/2 tygodnie, cel NIE wyższy niż 12 g/dL (dowody CV z CHOIR/TREAT). **Użycie w celu dopingu PRZECIWWSKAZANE** — ściśle zakazane przez WADA, ryzyko katastrofy sercowo-naczyniowej."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-inicjacja (przed startem EPO)",
      "timing": "1-2 tygodnie przed inicjacją EPO",
      "markers": "Hb, Hct, ferrytyna (cel >100 ng/mL), saturacja transferyny (cel >20%), liczba retikulocytów, ciśnienie krwi (stabilizacja <140/90 mmHg), eGFR + kreatynina, CRP/OB (zapalenie), B12 + folian, morfologia z rozmazem, panel lipidowy, dziennik ciśnienia krwi.",
      "purpose": "Baseline ciężkości anemii + status żelaza adekwatny (prewencja funkcjonalnego niedoboru żelaza) + kontrola nadciśnienia + wykluczenie innych przyczyn anemii."
    },
    "midCycle": {
      "label": "Faza inicjacji (pierwsze 1-3 miesiące)",
      "timing": "Tygodniowo Hb + Hct + ciśnienie krwi; co 4 tygodnie ferrytyna + sat-transferyny",
      "markers": "Hb (cel wzrostu Hb ≤1 g/dL/2 tygodnie), Hct, ciśnienie krwi (przy każdej wizycie, obserwacja nadciśnienia EPO), ferrytyna + sat-transferyny (rebound statusu żelaza), liczba retikulocytów.",
      "purpose": "Monitor tempa wzrostu Hb (szybki wzrost → ryzyko zdarzeń CV), utrzymanie statusu żelaza (EPO wyczerpuje zapasy żelaza, miareczkowanie uzupełniania żelaza), detekcja nadciśnienia."
    },
    "postCycle": {
      "label": "Faza podtrzymująca (stabilny cel Hb 10-12 g/dL)",
      "timing": "Miesięcznie Hb + Hct + ciśnienie krwi; kwartalnie ferrytyna + sat-transferyny",
      "markers": "Hb (10-12 g/dL stabilne), Hct, ciśnienie krwi, ferrytyna (utrzymanie zapasów), sat-transferyny, eGFR (progresja CKD), KDIGO kwartalny comprehensive metabolic panel.",
      "purpose": "Długoterminowa stabilna dawka EPO, miareczkowanie uzupełniania żelaza, management ciśnienia krwi, śledzenie progresji CKD."
    },
    "cruise": {
      "label": "Chroniczny pacjent dializowany (długoterminowo Mircera iniekcja miesięczna)",
      "timing": "Miesięcznie Hb + Hct + ciśnienie krwi; kwartalnie pełny panel",
      "markers": "Pełny panel hematologiczny + status żelaza + panel KDIGO CKD-MBD (Ca, P, PTH, wit-D) + lipidy + dziennik ciśnienia krwi.",
      "purpose": "Stabilny pacjent dializowany długoterminowe zarządzanie ESA, zgodność z wytycznymi KDIGO 2024."
    }
  },
  "anecdote": null
}
