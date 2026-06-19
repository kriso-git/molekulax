// Bayer Proviron-25 Rx (DE, AT, PL). Sources: Bayer Proviron SmPC (EMA),
// Nieschlag-Behre 2012 "Testosterone: Action, Deficiency, Substitution" (4th ed.),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Mauss 1984 PMID 6442150 (mesterolone monograph).

export default {
  "id": "proviron",
  "sideEffects": [
    { "hu": "Androgén mellékhatások: aknÉ, zsíros bőr, fokozott testszőrzet; mivel a mesterolon DHT-strukturális analóg, az androgén terhelés erős.", "en": "Androgenic effects: acne, oily skin, increased body hair; as mesterolone is a DHT-structural analog, the androgenic load is strong.", "pl": "Efekty androgenne: trądzik, przetłuszczająca się skóra, nadmierne owłosienie; mesterolon jako analog strukturalny DHT daje silne obciążenie androgenne." },
    { "hu": "Androgenetikus hajhullás gyorsulása genetikailag érzékenyeknél; a finaszterid NEM véd, mert a mesterolon már redukált DHT-analóg (nem 5α-reduktáz szubsztrát).", "en": "Acceleration of androgenetic hair loss in genetically predisposed users; finasteride does NOT protect, because mesterolone is an already-reduced DHT analog (not a 5α-reductase substrate).", "pl": "Przyspieszenie łysienia androgenowego u osób predysponowanych genetycznie; finasteryd NIE chroni, bo mesterolon to już zredukowany analog DHT (nie jest substratem 5α-reduktazy)." },
    { "hu": "Virilizáció nőknél: mély hang, hirsutizmus, klitorisz-megnagyobbodás, menstruációs zavar; az alacsony anabolikus/magas androgén arány miatt a virilizációs kockázat kis dózisnál is jelentős és részben visszafordíthatatlan.", "en": "Virilization in women: voice deepening, hirsutism, clitoral enlargement, menstrual disturbance; due to the low-anabolic/high-androgenic ratio the virilization risk is significant even at low doses and partly irreversible.", "pl": "Wirylizacja u kobiet: obniżenie głosu, hirsutyzm, przerost łechtaczki, zaburzenia miesiączki; przez niski stosunek anaboliczny/wysoki androgenny ryzyko wirylizacji jest istotne nawet przy małych dawkach i częściowo nieodwracalne." },
    { "hu": "Kedvezőtlen lipidprofil: HDL-koleszterin csökkenése (jellemzően ~10-15%), ami orális androgénként az ateroszklerózis-kockázatot emeli tartós használatnál.", "en": "Adverse lipid profile: drop in HDL cholesterol (typically ~10-15%), which as an oral androgen raises atherosclerosis risk with prolonged use.", "pl": "Niekorzystny profil lipidowy: spadek cholesterolu HDL (zwykle ~10-15%), co jako androgen doustny zwiększa ryzyko miażdżycy przy długotrwałym stosowaniu." },
    { "hu": "Prosztata-stimuláció: a DHT-analóg közvetlenül serkenti a prosztata szövetét, ami benignus prosztata-hiperplázia tüneteit (vizelési nehézség) súlyosbíthatja és a PSA-t emelheti, főleg 40 év felett.", "en": "Prostate stimulation: the DHT analog directly drives prostate tissue, which can worsen benign prostatic hyperplasia symptoms (urinary difficulty) and raise PSA, especially over age 40.", "pl": "Stymulacja prostaty: analog DHT bezpośrednio pobudza tkankę prostaty, co może nasilać objawy łagodnego rozrostu prostaty (trudności z oddawaniem moczu) i podnosić PSA, zwłaszcza po 40. roku życia." },
    { "hu": "HPTA-szuppresszió: önmagában enyhe-mérsékelt natív tesztoszteron- és spermatogenezis-gátlás; supraphysiológiás dózisnál vagy AAS-stack részeként a HPTA-szuppresszió kifejezett.", "en": "HPTA suppression: on its own a mild-to-moderate suppression of native testosterone and spermatogenesis; at supraphysiological doses or as part of an AAS stack the HPTA suppression is pronounced.", "pl": "Supresja HPTA: samodzielnie łagodne do umiarkowanego tłumienie własnego testosteronu i spermatogenezy; przy dawkach suprafizjologicznych lub w stosie AAS supresja HPTA jest wyraźna." },
    { "hu": "Tartós, kezelendő erekció (priapizmus) az androgén túlstimuláció jeleként előfordulhat; sürgős orvosi ellátást igényel.", "en": "Prolonged, painful erection (priapism) can occur as a sign of androgenic overstimulation; it requires urgent medical care.", "pl": "Przedłużony, bolesny wzwód (priapizm) może wystąpić jako objaw nadmiernej stymulacji androgennej; wymaga pilnej pomocy lekarskiej." },
    { "hu": "Antikoaguláns-interakció: a warfarin véralvadásgátló hatását fokozhatja, ami emelkedett vérzéskockázathoz vezethet (INR-monitorozás szükséges).", "en": "Anticoagulant interaction: it can potentiate the blood-thinning effect of warfarin, leading to increased bleeding risk (INR monitoring required).", "pl": "Interakcja z antykoagulantami: może nasilać działanie przeciwzakrzepowe warfaryny, zwiększając ryzyko krwawienia (konieczne monitorowanie INR)." }
  ],
  "contraindications": [
    { "hu": "Prosztatakarcinóma vagy igazolt/gyanított emlőkarcinóma férfiaknál: androgén-dependens daganatok, a mesterolon abszolút kontraindikált (Bayer SmPC).", "en": "Prostate carcinoma or known/suspected breast carcinoma in men: androgen-dependent tumors, mesterolone is absolutely contraindicated (Bayer SmPC).", "pl": "Rak prostaty lub potwierdzony/podejrzewany rak piersi u mężczyzn: nowotwory androgenozależne, mesterolon jest bezwzględnie przeciwwskazany (Bayer SmPC)." },
    { "hu": "Terhesség és szoptatás: androgén hatása a magzat virilizációját okozhatja (különösen leánymagzat külső nemi szerveinek maszkulinizációja); abszolút kontraindikáció.", "en": "Pregnancy and breastfeeding: the androgenic action can virilize the fetus (notably masculinization of a female fetus's external genitalia); absolute contraindication.", "pl": "Ciąża i karmienie piersią: działanie androgenne może wywołać wirylizację płodu (zwłaszcza maskulinizację zewnętrznych narządów płciowych płodu żeńskiego); bezwzględne przeciwwskazanie." },
    { "hu": "Nők, esztétikai/teljesítményfokozó céllal: az alacsony anabolikus/magas androgén arány miatt a virilizációs kockázat aránytalanul nagy a haszonhoz képest, részben visszafordíthatatlan.", "en": "Women using it for aesthetic/performance goals: the low-anabolic/high-androgenic ratio makes the virilization risk disproportionate to the benefit, and partly irreversible.", "pl": "Kobiety stosujące go w celach estetycznych/sportowych: niski stosunek anaboliczny/wysoki androgenny sprawia, że ryzyko wirylizacji jest nieproporcjonalne do korzyści i częściowo nieodwracalne." },
    { "hu": "Benignus prosztata-hiperplázia tüneteivel (vizelési obstrukció): a DHT-analóg androgén tovább stimulálja a prosztatát és súlyosbíthatja a tüneteket.", "en": "Symptomatic benign prostatic hyperplasia (urinary obstruction): the DHT-analog androgen further stimulates the prostate and can worsen symptoms.", "pl": "Objawowy łagodny rozrost prostaty (utrudnienie oddawania moczu): androgen będący analogiem DHT dodatkowo pobudza prostatę i może nasilać objawy." },
    { "hu": "Androgenetikus alopecia családi/egyéni anamnézise: a mesterolon közvetlenül gyorsítja a hajhullást és a finaszterid nem nyújt védelmet.", "en": "Personal/family history of androgenetic alopecia: mesterolone directly accelerates hair loss and finasteride offers no protection.", "pl": "Osobista/rodzinna historia łysienia androgenowego: mesterolon bezpośrednio przyspiesza wypadanie włosów, a finasteryd nie chroni." },
    { "hu": "Meglévő kedvezőtlen lipidprofil / kardiovaszkuláris kockázat (dyslipidaemia, koszorúér-betegség): az HDL-csökkenés tovább rontja a kockázatot, fokozott elővigyázatosság/ellenjavallat.", "en": "Pre-existing adverse lipids / cardiovascular risk (dyslipidemia, coronary disease): the HDL drop further worsens the risk, warranting caution/contraindication.", "pl": "Istniejący niekorzystny profil lipidowy / ryzyko sercowo-naczyniowe (dyslipidemia, choroba wieńcowa): spadek HDL dodatkowo pogarsza ryzyko, co uzasadnia ostrożność/przeciwwskazanie." },
    { "hu": "Súlyos máj- vagy vesekárosodás: bár a mesterolon nem 17α-alkilált és hepatotoxicitása alacsony, fennálló szervi elégtelenségnél a hormon-metabolizmus és folyadékretenció miatt kerülendő.", "en": "Severe hepatic or renal impairment: although mesterolone is not 17α-alkylated and has low hepatotoxicity, it should be avoided with existing organ failure due to altered hormone metabolism and fluid retention.", "pl": "Ciężka niewydolność wątroby lub nerek: choć mesterolon nie jest 17α-alkilowany i ma niską hepatotoksyczność, należy go unikać przy istniejącej niewydolności narządowej ze względu na zaburzony metabolizm hormonów i retencję płynów." }
  ],
  "name": "Proviron (Mesterolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Mesterolon, doustny androgen 1α-metylo-DHT Rx Bayer (Proviron-25, zarejestrowany na rynkach DE/AT/PL). NIE 17α-alkilowany → niska hepatotoksyczność. Podczas cyklu AAS supresor SHBG i adiunkt \"AI mimikker\"; NIE samodzielny bulker.",
  "description": "Proviron (Mesterolon) to pochodna 1α-metylo-dihydrotestosteronu doustny androgen, zsyntetyzowany przez Schering AG w 1966 r. i sprzedawany pod marką Proviron (Bayer od 2006 r.). Bayer Rx w Niemczech, Austrii, Polsce (Proviron-25, tabletka 25 mg) — pierwotne wskazania kliniczne: męska podpłodność, opóźnione dojrzewanie, hipogonadyzm, spadek libido u starszych mężczyzn. Stosunek anaboliczno-androgenny ~100:30-40 (słaby anaboliczny, umiarkowany androgenny). NIE 17α-alkilowany (tylko 1α-metyl) → niska hepatotoksyczność. NIE aromatyzuje (NIE substrat CYP19). WYSOKIE powinowactwo do SHBG → efekt \"AI mimikker\": Proviron związany z SHBG redukuje frakcję SHBG-T, więc wolny T (i wolny E2) rośnie obok partnera stacku Test. W kontekście kulturystycznym zazwyczaj adiunkt cyklu AAS (25-50 mg/dzień), NIE samodzielny bulker. Zakazany przez WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR (słaby) + supresor SHBG + łagodny AI"},
    {"label": "Anaboliczny:Androgenny", "value": "100:30-40"},
    {"label": "Okres półtrwania", "value": "12-13 godzin"},
    {"label": "Początek", "value": "1-2 h (doustnie)"},
    {"label": "Status prawny", "value": "Bayer Rx (DE/AT/PL), zakaz WADA"}
  ],
  "mechanism": "Agonista AR 1α-metylo-dihydrotestosteron. Grupa 1α-metylowa (Δ1, NIE 17α!) zapewnia doustną stabilność poprzez oporność na first-pass wątrobowy — ale w niższym stopniu niż 17α-metyl. NIE substrat CYP19 → NIE aromatyzuje. NIE substrat 5α-reduktazy (już zredukowany). TRZY klinicznie istotne efekty: (1) słaba bezpośrednia aktywność agonisty AR (minimalna budowa mięśni sama w sobie); (2) wysokie powinowactwo do SHBG → wypiera testosteron związany z SHBG, indukując pośrednio wzrost wolnego T obok partnera stacku Test; (3) łagodna aktywność inhibitora aromatazy → redukuje wzrost E2 podczas stacków Test. Stąd zazwyczaj używany w dawce 25-50 mg/dzień jako adiunkt cyklu AAS, NIE samodzielny bulker.",
  "legalStatus": "DE/AT/PL: Bayer Proviron-25 Rx (tabletka 25 mg). HU: nie zarejestrowany (rzadko import-Rx). USA: nie zatwierdzony przez FDA, tylko underground. Zakaz WADA cały rok (S1.1.a). Dostępny na polską receptę jako Proviron-25.",
  "onsetTime": "1-2 h (doustnie)",
  "halfLife": "12-13 h",
  "halfLifeActive": "12-13 h",
  "interactionsWith": ["testosterone", "anastrozole", "tamoxifen", "warfarin"],
  "aromatization": "Nie — struktura 1α-metylo-DHT, NIE substrat CYP19; klinicznie wykazuje też łagodną aktywność AI poprzez wysokie powinowactwo do SHBG (Nieschlag-Behre 2012 monografia testosteronu, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Niska — grupa 1α-metylowa (NIE 17α!) zapewnia słaby stres first-pass wątrobowy; kliniczny wzrost ALT/AST rzadko udokumentowany, znacznie łagodniejszy niż Anavar czy Dianabol. Długoterminowe stosowanie (Bayer SmPC przewlekłe wskazanie Rx) profil wątrobowy względnie bezpieczny (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:30-40",
  "bindingAffinity": "Słabe powinowactwo do AR (~10% vs testosteron). WYSOKIE powinowactwo do SHBG (strukturalny analog DHT) → pośrednio uwalnia testosteron związany z SHBG.",
  "detectionWindow": "Metabolity mesterolonu (rodzina metabolitów 1α-metylo-5α-androstan-3-on) w moczu 4-5 tygodni (Schänzer 1996 metody GC-MS). Akredytowane WADA.",
  "benefits": [
    "Pośredni wzrost wolnego testosteronu (poprzez zajęcie SHBG) podczas cyklu AAS",
    "Łagodny efekt AI → redukcja zapotrzebowania na adiunktywny Anastrozol podczas stacków Test",
    "Poprawa libido i funkcji erekcyjnej (kliniczne wskazanie Bayer SmPC)",
    "Niska hepatotoksyczność — profil bezpieczeństwa długoterminowej aplikacji bardziej korzystny",
    "NIE aromatyzuje → brak ryzyka ginekomastii samodzielnie"
  ],
  "quickStart": [
    "Samodzielny bulker NIE — Proviron zawsze adiunkt obok partnera stacku AAS",
    "Typowa dawka 25-50 mg/dzień (1-2 tabletki), 6-12 tygodni",
    "Strukturalny analog DHT → przyspieszenie wypadania włosów w alopecji androgenowej",
    "Monitoring lipidogramu (HDL może spaść, umiarkowanie)",
    "Kliniczny efekt libido-boost — wskazanie TRT-adiunkt Bayer SmPC jest realne"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Początek 1-2 h, ostry efekt minimalny. Subiektywny wzrost libido i poczucie wolnego T (\"lepszy nastrój\") częste po 3-5 dniach."},
    {"label": "Tydzień 3-4", "body": "Obok partnera stacku Test wzrost wolnego T wyraźny, wzrost E2 umiarkowany (efekt AI Proviron). Estetyczne \"hardening\" łagodne (sam Proviron NIE jest sterydem hardening)."},
    {"label": "Koniec tygodnia 8-12", "body": "Maksymalny efekt adiunkt. HDL ~10-15% spadek oczekiwany. Supresja HPTA umiarkowana gdy samodzielnie (sam Proviron NIE jest pełnym supresorem HPTA)."}
  ],
  "quality": {
    "pure": [
      "Bayer Proviron-25 oryginalna tabletka Rx, 25 mg (zarejestrowany na rynkach DE/AT/PL)",
      "Tabletka UGL: źródło testowane HPLC obowiązkowe, rzadziej fałszowana niż Anavar/Primobolan (niższa wartość rynkowa)"
    ],
    "caution": [
      "Sama nie jest bulkerem — rozdźwięk oczekiwania-rzeczywistości użytkowników to najczęstsze źródło frustracji",
      "Przyspieszenie wypadania włosów w alopecji androgenowej (strukturalny analog DHT)",
      "Zaburzenia lipidowe: spadek HDL (umiarkowany)",
      "Pogłębienie głosu i hirsutyzm u kobiet (ryzyko wirylizacji nawet przy niższych dawkach)"
    ],
    "avoid": [
      "Rodzinna historia alopecji androgenowej",
      "Przerost prostaty, rak prostaty (analog DHT)",
      "Stosowanie przez kobiety (niski anaboliczny, wysoki stosunek ryzyka wirylizacji estetycznie nie wart)",
      "Cel bulking/przyrost masy — Proviron NIE samodzielny bulker"
    ]
  },
  "interactions": [
    "Baza testosteronu: standardowa para stack, pośredni wzrost wolnego T poprzez zajęcie SHBG",
    "Anastrozol (AI): łączalny, łagodny efekt AI Proviron pozwala na niższą dawkę Anastrozolu",
    "Tamoksyfen (SERM): łączalny w zapobieganiu ginekomastii obok partnerów stacku Test-aromatyzujących AAS",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony (umiarkowanie), monitor INR"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"},
    {"title": "Androgen treatment without inhibiting effect on hypophysis and male gonads. Biochemical and morphological studies after treatment with Mesterolone", "authors": "Petry R, Rausch-Stroomann JG, Hienz HA, Senge T, Mauss J.", "journal": "Acta Endocrinol (Copenh). 1968;59(3):497-507.", "pmid": "4880965"},
    {"title": "Double-blind cross over treatment with mesterolone and placebo of subfertile oligozoospermic men value of testicular biopsy", "authors": "Aafjes JH, van der Vijver JC, Brugman FW, Schenck PE.", "journal": "Andrologia. 1983;15 Spec No:531-5.", "pmid": "6364886"},
    {"title": "Bayer Proviron-25 SmPC (Summary of Product Characteristics)", "authors": "Bayer AG", "journal": "EMA / German Federal Institute for Drugs (BfArM)", "pmid": null}
  ],
  "faq": [
    {"q": "Czy to prawda, że Proviron jest \"AI mimikker\"?", "a": "Częściowo. Jego wysokie powinowactwo do SHBG redukuje frakcję testosteronu związanego z SHBG, co pośrednio redukuje również poziomy estradiolu związanego z SHBG. PLUS ma bezpośrednią, słabą aktywność inhibitora aromatazy. ALE efekt NIE jest tak silny jak Anastrozol czy Letrozol — przy wysokich dawkach Test (>500 mg/tydzień) sam Proviron NIE wystarcza do kontroli E2, tylko redukcji dawki Anastrozolu."},
    {"q": "Dlaczego NIE jest dobrym samodzielnym bulkerem?", "a": "Aktywność anaboliczna jest słaba (~100 vs 320 Anavar vs 400 Superdrol). Po samodzielnym cyklu Proviron 25-50 mg/dzień przez 8 tygodni zazwyczaj 1-2 kg przyrost masy oczekiwany (Anavar 4-5 kg, Dianabol 8-10 kg) — wyraźnie niski. Proviron zawsze do roli adiunkt, NIE bulker."},
    {"q": "Legalnie dostępny na polskim rynku?", "a": "Tak, Bayer Proviron-25 (tabletka 25 mg) to Rx na polskim rynku, przepisywalny przez polskich lekarzy na wskazania bezpłodności męskiej, hipogonadyzmu, spadku libido. Nie zarejestrowany na rynku HU, nie przepisywalny przez węgierską receptę — ale import-Rx rzadko możliwy."},
    {"q": "Ryzyko wypadania włosów?", "a": "Umiarkowane-wysokie jeśli genetyczna predyspozycja do alopecji androgenowej. Proviron jest strukturalnym analogiem 1α-metylo-DHT, który omija 5α-reduktazę skóry głowy i bezpośrednio aktywuje AR mieszka włosowego. Finasteryd NIE chroni (Proviron już zredukowany). Jedyna ochrona: jeśli genetycznie wrażliwy, NIE używaj AAS pochodnych DHT."},
    {"q": "Czy Bayer Proviron jest bezpieczny długoterminowo?", "a": "Wg Bayer SmPC dla wskazań bezpłodności męskiej i hipogonadyzmu, długoterminowe (12+ miesięcy) ciągłe stosowanie jest udokumentowane bezpieczne z odpowiednim monitoringiem (lipidy, ALT/AST, PSA). ALE off-label suprafizjologiczne dawki kulturystyczne (100+ mg/dzień) NIE należą tutaj — terapeutyczny zakres Bayera 25-75 mg/dzień to to, w czym dane bezpieczeństwa są interpretowalne."}
  ],
  "related": ["masteron", "primobolan", "anavar-info", "testosterone-info", "winstrol-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/dzień (doustnie, 1-2x podzielone)",
    "note": "Dawka adiunkt 25-50 mg/dzień, max 75 mg/dzień. Zazwyczaj 6-12 tygodni obok partnera stacku Test. TUDCA NIE obowiązkowy (niska hepatotoksyczność). Monitor lipidogramu + PSA (powyżej 30 lat) zalecany. PCT tylko jeśli samodzielnie (PCT Test-stacku wystarcza)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonów: Total T, Free T, E2, LH, FSH, SHBG (baseline kluczowy dla oceny mechanizmu Proviron), Prolaktyna. Lipidogram (LDL/HDL/TG). Wątrobowe: ALT/AST/GGT. PSA (powyżej 30 lat).",
      "purpose": "Baseline SHBG kluczowy: trzeba ponownie zmierzyć po 4-6 tygodniach, by ocenić efekt Proviron. Baseline lipidogramu dla detekcji trendu spadku HDL."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 4-6, połowa cyklu",
      "markers": "Total T, Free T (główny marker efektu Proviron), SHBG (spadek oczekiwany), E2, lipidogram (HDL), wątrobowe (ALT/AST <2x normalne oczekiwane dla cyklu tylko-Proviron).",
      "purpose": "Wzrost wolnego T to wskaźnik aktywności Proviron (napędzany spadkiem SHBG). E2 oparte na partnerze Test. Wzrost ALT/AST łagodny — jeśli >3x normalne, podejrzewaj dodatkowe AAS."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Od ostatniej tabletki +1-2 dni start PCT (łagodna supresja HPTA sama w sobie). Protokół PCT partnera stacku Test dominuje.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipidogram.",
      "purpose": "Recovery HPTA dla cyklu tylko-Proviron zazwyczaj 4-6 tygodni, szybkie. Z partnerem stacku Test PCT zależy od dłuższego okresu półtrwania estru Test."
    },
    "cruise": {
      "label": "Na cruise",
      "timing": "Podczas cruise TRT-Test, Proviron adiunkt 25-50 mg/dzień zazwyczaj akceptowalny, monitoring co 6-8 tygodni",
      "markers": "Lipidogram, SHBG, Total T, Free T, E2, PSA (powyżej 30 lat).",
      "purpose": "Obok cruise TRT, Proviron to adiunkt \"libido boost\": wzrost wolnego T i łagodny efekt AI. Długoterminowe ciągłe stosowanie tolerowalne (wg Bayer SmPC), ale monitor lipidogramu + PSA co 6-8 tygodni."
    }
  }
}
