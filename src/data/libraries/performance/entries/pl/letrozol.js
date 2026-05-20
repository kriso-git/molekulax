// Letrozol (Femara) — niesteroidowy triazolowy AI, silniejszy od anastrozolu.
// Zatwierdzony przez FDA 1997 Novartis. Nisza AAS: kontrola E2 przy ciężkiej
// supresji Tren+Mast + cofanie ginekomastii (2,5 mg/dzień × 2-3 tygodnie).
// Źródła: FDA Femara SmPC, Coates 2007 BIG1-98 PMID 17582920,
// Bhatnagar 1996 PMID 8847500, Goss 2003 MA.17 PMID 14595025.

export default {
  "id": "letrozol",
  "name": "Letrozol (Femara)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Triazolowy niesteroidowy AI, silniejszy od anastrozolu (~99% supresji E2 przy 2,5 mg/dzień). Zatwierdzony przez FDA (1997 Novartis). Nisza AAS: kontrola E2 przy ciężkiej supresji Tren+Mast + cofanie ginekomastii (2,5 mg/dzień × 2-3 tygodnie).",
  "description": "Letrozol (Femara) jest niesteroidowym triazolowym AI trzeciej generacji opracowanym przez Novartis i zatwierdzonym przez FDA w 1997 roku dla pomenopauzalnego raka piersi ER+. Silniejszy inhibitor aromatazy niż anastrozol (~97%): badanie BIG1-98 (Coates 2007, PMID 17582920) udokumentowało ~99% supresji E2 w surowicy przy dawce 2,5 mg/dzień — head-to-head trial dwóch AI (Geisler 2002) wykazał, że letrozol ma większą penetrację do tkanek mięśniowej aromatazy (silniejsze działanie na aromatazę obwodową). W świecie AAS są dwa główne zastosowania: (1) kontrola E2 w stackach ciężkiej supresji (Tren-Acetate + Mast-Prop + Test-Prop blast — na silnie aromatyzujących steroidach jak kombinacje Dianabol lub Anadrol), oraz (2) cofanie ginekomastii (zmniejszenie tkanki gruczołowej piersi mediowane ER, 2,5 mg/dzień × 14-21 dni z protokołem taperowym). Ponieważ jest silniejszy od anastrozolu, użytkownicy bez doświadczenia z AI powinni zaczynać od dawek odpowiadających połowie anastrozolu. WADA S4.1 — banned.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Odwracalny niesteroidowy inhibitor CYP19-aromatazy, ~99% supresji E2 w surowicy przy 2,5 mg/dzień"},
    {"label": "Dawkowanie (AAS)", "value": "0,25-1,25 mg EOD miareczkowane badaniami; cofanie gino 2,5 mg/dzień × 14-21 dni"},
    {"label": "Okres półtrwania", "value": "~42 godziny"},
    {"label": "Początek działania", "value": "Redukcja E2 mierzalna 24-48 h, plateau 4-6 dni"},
    {"label": "Status prawny", "value": "FDA + EMA Rx, HU + PL zarejestrowany, WADA S4.1 banned"}
  ],
  "mechanism": "Letrozol jest również kompetycyjnym odwracalnym triazolowym AI wiążącym się z żelazem hemowym CYP19-aromatazy. Bhatnagar 1996 PMID 8847500 udokumentował IC50 aromatazy ~11 nM in vitro (preparat submikrosomalny aromatazy ludzkiej łożyska), nieco niższe niż ~15 nM anastrozolu. Penetracja tkankowa in vivo i stabilność wiązania na poziomie enzymu są wyższe — supresja aromatazy w całym ciele przy 2,5 mg/dzień jest ~99% (vs. anastrozol 1 mg ~97%). Resztkowa aromatyzacja w całym ciele przy tym poziomie supresji spada poniżej granicy wykrywalności. Wątrobowe CYP3A4 + CYP2A6 metabolizują; ~60-90% wydalania nerkowego jako glukuronid. NIE jest agonistą AR/ER/PR. Wykrywanie WADA 1-2 miesiące.",
  "legalStatus": "USA: zatwierdzony przez FDA 1997 (Femara 2,5 mg, Novartis; generyczny letrozol 2007). Wskazanie: pomenopauzalne ER+ rak piersi adjuvant/metastatyczny + przedłużona terapia adjuwantowa. UE: zatwierdzony przez EMA 1996. HU: zarejestrowany (Femara, Letrozol-ratiopharm, Letrozol Teva Rx). PL: zarejestrowany (Femara Rx). WADA: S4.1 inhibitor aromatazy — banned w/poza-konkurencji.",
  "onsetTime": "Redukcja E2 24-48 h, plateau 4-6 dni",
  "halfLife": "~42 godziny",
  "halfLifeActive": "N/A (związek macierzysty aktywny, metabolity nieaktywne)",
  "interactionsWith": ["anastrozol", "exemestane", "nolvadex", "testosterone-info"],
  "aromatization": "Nie aromatyzuje — niesteroidowy triazolowy AI, ~99% supresji E2 w surowicy przy 2,5 mg/dzień (badanie BIG2-98).",
  "hepatotoxicity": "Niska — niesteroidowy, nie 17α-alkilowany. Hepatic adverse events <2% (FDA Femara label). Długoterminowy adjuwant kobiecy 5-10 lat: brak znaczącego wzorca DILI.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS, AI)",
  "bindingAffinity": "Wiązanie kompetycyjne w aktywnym miejscu CYP19-aromatazy, Ki ~5-10 nM. ER/AR/PR — minimalne wiązanie (<1%).",
  "detectionWindow": "Wykrywanie w moczu metodą WADA GC-MS/LC-MS/MS 1-2 miesiące (parent + glukuronidowany metabolit).",
  "benefits": [
    "Silniejszy niż anastrozol — kontrola E2 w stack ciężkiej supresji Tren+Mast",
    "Cofanie ginekomastii (regresja istniejącej tkanki gruczołowej przy 2,5 mg × 2-3 tygodnie)",
    "~99% supresji E2 w surowicy przy 2,5 mg/dzień (BIG1-98 trial)",
    "Odwracalne wiązanie → miareczkowalny (ale ostrożnie, łatwiej crash E2 niż anastrozol)",
    "FDA + EMA Rx pharma-grade globalnie dostępny",
    "Niedrogi (~€20-40/opakowanie generyczne 2,5 mg)"
  ],
  "quickStart": [
    "Bez doświadczenia z AI: start od dawki odpowiadającej połowie anastrozolu (anastrozol 0,5 mg ≈ letrozol 0,25 mg)",
    "Standardowa kontrola E2 w AAS: 0,25-1,25 mg EOD miareczkowane badaniami",
    "Protokół cofania ginekomastii: 2,5 mg/dzień × 14-21 dni, potem taper (1,25 → 0,625 → 0,25 → 0)",
    "Pre-treatment baseline E2 LC-MS/MS, 10-14 dni później powtórzenie",
    "Letrozol łatwiej crashuje E2 niż anastrozol — zaczynaj od niższej dawki",
    "Z wodą + rano, jedzenie indyferentne (biodostępność doustna ~85%)"
  ],
  "expectations": [
    {"label": "Dzień 1-3", "body": "Drastyczna redukcja E2 (~70-90%), ulga w objawach gino odczuwalna. Niektórzy użytkownicy widzą szybki spadek retencji wody → czystszy wygląd."},
    {"label": "Tydzień 1-2", "body": "Stan stacjonarny w surowicy E2 <5 pg/mL najczęściej (wysokie ryzyko crashed E2). Regresja tkanki gino zaczyna się (jeśli cel = cofnięcie). Monitor lipidogramu: oczekiwany spadek HDL i wzrost LDL."},
    {"label": "Cofanie gino dzień 21+", "body": "Start protokołu taperowego: 1,25 mg → 0,625 mg → 0,25 mg, kroki 5-7 dni. Stopień regresji tkanki gruczołowej indywidualny; jeśli brak zmian po 3 tygodniach, chirurgiczne usunięcie (gynektomia) pod konsultacją specjalisty."},
    {"label": "Po zaprzestaniu", "body": "E2 wraca do baseline w 24-72 h (~42 h okres półtrwania). Łagodny rebound możliwy (ryzyko nawrotu gino jeśli zaprzestane bez taperowania)."}
  ],
  "quality": {
    "pure": [
      "Novartis Femara 2,5 mg blister, Rx pharma-grade (apteka UE dostępne)",
      "Letrozol-ratiopharm, Letrozol Teva, Letrozol Sandoz generyczne (UE)",
      "Indyjski generyk (Sun Pharma, Cipla Letroz 2,5 mg)",
      "UGL liquid letrozole: wymagane źródło testowane HPLC — często 30 mg/mL i ryzyko przedawkowania"
    ],
    "caution": [
      "E2 crash łatwiej niż na anastrozolu — dodatkowa ostrożność u użytkowników bez doświadczenia AI",
      "Lipidogram drastyczne pogorszenie przy 2,5 mg/dzień chronic — spadek HDL do 30%, wzrost LDL 15-25%",
      "BMD stresor długoterminowy — pomijalny podczas 3-tygodniowego cofania gino, chronic use wymaga monitora DEXA",
      "Interakcje induktor/inhibitor CYP3A4 (jak anastrozol)",
      "Współadministracja tamoksyfenu: przeciwwskazana (nakładający się mechanizm + crash E2)"
    ],
    "avoid": [
      "Stosowanie u przedmenopauzalnych kobiet w AAS (dysfunkcja owulacji)",
      "Ciąża / karmienie piersią (Kategoria ciąży X)",
      "Ciężka niewydolność wątroby",
      "Letrozol profilaktycznie na początku cyklu AAS bez baseline (wysokie ryzyko crashed-E2)",
      "Start od pełnych 2,5 mg/dzień u użytkowników bez AI (zaczynaj od 0,25 mg)"
    ]
  },
  "interactions": [
    "Tamoksyfen (Nolvadex): NIE zalecany razem w PCT — nakładający się mechanizm, ryzyko crash E2",
    "Testosteron + Tren stack: standardowa kontrola E2 ciężkiej supresji",
    "Dianabol/Anadrol stack: letrozol silnie skuteczny przeciw silnej aromatyzacji",
    "Metylowane 17α-alkilowane sterydy doustne: stres wątrobowy podwójny monitor",
    "Statyny: lipidogram podwójny monitor + można rozważyć redukcję dawki statyny",
    "Alkohol: łagodny stres wątrobowy, umiarkowane spożycie OK"
  ],
  "studies": [
    {"title": "Five years of letrozole compared with tamoxifen as initial adjuvant therapy for postmenopausal women with endocrine-responsive early breast cancer: update of study BIG 1-98", "authors": "Coates AS, Keshaviah A, Thürlimann B, et al.", "journal": "J Clin Oncol. 2007;25(5):486-492.", "pmid": "17582920"},
    {"title": "Pharmacology of CGS 20267, a potent aromatase inhibitor (letrozole)", "authors": "Bhatnagar AS, Häusler A, Schieweck K, et al.", "journal": "J Steroid Biochem Mol Biol. 1996;58(5-6):529-533.", "pmid": "8847500"},
    {"title": "A randomized trial of letrozole in postmenopausal women after five years of tamoxifen therapy for early-stage breast cancer (MA.17 trial)", "authors": "Goss PE, Ingle JN, Martino S, et al.", "journal": "N Engl J Med. 2003;349(19):1793-1802.", "pmid": "14595025"},
    {"title": "Influence of letrozole and anastrozole on total body aromatization and plasma estrogen levels in postmenopausal breast cancer patients evaluated in a randomized, cross-over study", "authors": "Geisler J, Haynes B, Anker G, et al.", "journal": "J Clin Oncol. 2002;20(3):751-757.", "pmid": "12351538"}
  ],
  "faq": [
    {"q": "Letrozol vs. anastrozol — dlaczego silniejszy?", "a": "Dwa czynniki: (1) Wyższa penetracja do tkanek aromatazy mięśniowej — head-to-head trial Geisler 2002 udokumentował, że obwodowa supresja aromatazy letrozolu jest ~2-3× silniejsza niż anastrozolu (pomiar in vivo). (2) Większa stabilność wiązania na poziomie enzymu (Ki ~5-10 nM vs. anastrozol ~15 nM). Praktycznie: równoważne dawki to anastrozol 1 mg ≈ letrozol 0,25-0,5 mg. Użytkownicy bez doświadczenia AI powinni zaczynać letrozol od dawki odpowiadającej połowie anastrozolu."},
    {"q": "Protokół cofania ginekomastii w szczegółach?", "a": "Cel: regresja istniejącej tkanki gruczołowej (NIE tylko redukcja E2). Protokół: letrozol 2,5 mg/dzień × 14-21 dni (krótki hard hit), potem taper 1,25 mg → 0,625 mg → 0,25 mg w krokach 5-7 dni. Wsparcie: raloksyfen 60 mg/dzień (SERM selektywny dla piersi, antagonista gruczołu gino) równocześnie. Wynik: jeśli tkanka gruczołowa <6 miesięcy → 60-80% regresji; jeśli >12 miesięcy → 20-40% regresji (może być potrzebna chirurgiczna gynektomia). Pre-treatment USG wskazane — potwierdź obecność tkanki gruczołowej (vs. pseudo-ginekomastia tylko tłuszczowa)."},
    {"q": "Crashed E2 ryzyko śmiertelności? Trwałe?", "a": "Nie ryzyko śmiertelności, ale znaczne pogorszenie jakości życia. Objawy: bóle stawów (nadgarstki + kolana), spadek libido, lipidowa katastrofa (HDL <30 mg/dL), nastrój depresyjny. Odwracalne 1-2 tygodnie po zatrzymaniu. Bez taperowania i <14 dni → trwałe efekty niezwykle rzadkie. Długoterminowe stosowanie (3+ miesięcy chronic) powoduje utratę BMD — monitor DEXA potrzebny. Letrozol ryzyko śmiertelności: rzadkie (FDA Femara label: zdarzenia sercowo-naczyniowe 5-7% w 5-letnim trialu — ale w populacji 60+ kobiet, nie u mężczyzn AAS-PCT)."},
    {"q": "Tier 4 — dlaczego nie tier 5?", "a": "Letrozol jest nieco nowszy niż anastrozol (1997 vs. 1995 FDA), z nieco krótszą literaturą kliniczną. Oba są tier 4 — anastrozol jest domyślnym AI pierwszej linii (podstawa tier 4), letrozol jest niszowym wyborem w sytuacjach ciężkiej supresji lub cofania gino. Tier 5 oznacza dojrzałość poziomu Nolvadex 50+ lat (letrozol ~28 lat, jeszcze za mało)."}
  ],
  "related": ["anastrozol", "exemestane", "nolvadex", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.625, "high": 1.25},
    "unit": "mg / EOD (doustnie, miareczkowane badaniami)",
    "note": "Standardowa kontrola E2 w AAS ciężka supresja: 0,25-1,25 mg EOD miareczkowane badaniami. Cofanie gino: 2,5 mg/dzień × 14-21 dni, potem protokół taperowy (1,25 → 0,625 → 0,25 → 0). Letrozol silniejszy niż anastrozol — użytkownicy bez doświadczenia AI startują od połowy dawki."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem letrozolu",
      "timing": "Tydzień 3-4 cyklu lub początek objawów gino",
      "markers": "E2 LC-MS/MS test wysokiej czułości (NIE ECL), Total/Wolny Testosteron, SHBG, lipidogram, ALT/AST, morfologia, kreatynina.",
      "purpose": "Baseline. Wskazanie startu letrozolu: stack ciężka supresja Tren+Mast lub cofanie gino. Użytkownicy bez doświadczenia AI zaczynają od połowy dawki."
    },
    "midCycle": {
      "label": "Letrozol dzień 10-14",
      "timing": "Start letrozolu +10-14 dni",
      "markers": "E2 LC-MS/MS (powtórzenie), lipidogram, ALT/AST.",
      "purpose": "Potwierdzenie miareczkowania: cel E2 20-30 pg/mL. Crashed E2 (<15 pg/mL) → pauza natychmiast. Monitor lipidogramu: zauważalny spadek HDL i wzrost LDL."
    },
    "postCycle": {
      "label": "Koniec letrozolu / post-taper recovery",
      "timing": "Ostatnia dawka +2 tygodnie",
      "markers": "E2, Total/Wolny Test, lipidogram, ALT/AST, BMD jeśli chronic use.",
      "purpose": "Potwierdź: E2 wraca do baseline (24-72 h, brak rebound). Monitor lipidogramu recovery (rebound HDL ~2-4 tygodnie)."
    },
    "cruise": {
      "label": "Stosowanie długoterminowe — nie kontekst AAS",
      "timing": "Adjuwant kobiecy 5-10 lat; AAS-PCT max 14-21 dni cofanie gino",
      "markers": "Cruise w kontekście AAS N/A.",
      "purpose": "W AAS-PCT cruise NIE zalecany — letrozol używany dla ostrych wskazań hard-hit, nie dla długoterminowej kontroli E2 (ryzyko utraty BMD)."
    }
  }
}
