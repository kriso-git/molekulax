// Sobetirome (GC-1) – selektywny agonista TRβ thyromimetic, związek badawczy.
// Studies: Valcárcel-Hernández 2023 Thyroid PMID 36792926,
// Bohlen 2023 Brain PMID 37068912, Mészáros 2024 Eur J Neurosci PMID 38086536.
// INVESTIGATIONAL – niezatwierdzony lek, dostępny na rynku research-chemical.

export default {
  "id": "sobetirome",
  "sideEffects": [
    { "hu": "Vizsgálati vegyület korlátozott humán biztonsági adattal: csak lezárt Phase 1 (~2008), a metabolikus indikációra Phase 2 nem zajlott, így a mellékhatás-profil hiányosan jellemzett.", "en": "Investigational compound with limited human safety data: only a closed Phase 1 (~2008), no Phase 2 for the metabolic indication, so the side-effect profile is poorly characterized.", "pl": "Związek badawczy z ograniczonymi danymi o bezpieczeństwie u ludzi: tylko zamknięta faza 1 (~2008), brak fazy 2 dla wskazania metabolicznego, więc profil działań niepożądanych jest słabo scharakteryzowany." },
    { "hu": "HPT-tengely (hypothalamus-hypophysis-pajzsmirigy) szuppressziója: a thyromimetikus jelátvitel visszaszoríthatja a TSH-t és a saját pajzsmirigyhormon-termelést.", "en": "HPT-axis (hypothalamus-pituitary-thyroid) suppression: thyromimetic signaling can downregulate TSH and the body's own thyroid hormone production.", "pl": "Supresja osi HPT (podwzgórze-przysadka-tarczyca): sygnalizacja tyreomimetyczna może obniżyć TSH i własną produkcję hormonów tarczycy." },
    { "hu": "Pajzsmirigyhormon-túlsúly (thyrotoxikózis-szerű) tünetek túladagolásnál: szapora szívverés, szívdobogásérzés, izzadás, hőintolerancia, ingerlékenység, súlyvesztés, jóllehet a TRβ-szelektivitás célja épp a kardiális TRα kímélése.", "en": "Thyroid hormone excess (thyrotoxicosis-like) symptoms on overdose: palpitations, tachycardia, sweating, heat intolerance, irritability, weight loss, even though TRβ-selectivity aims to spare cardiac TRα.", "pl": "Objawy nadmiaru hormonów tarczycy (przypominające tyreotoksykozę) przy przedawkowaniu: kołatanie serca, tachykardia, pocenie, nietolerancja ciepła, drażliwość, utrata masy, mimo że selektywność TRβ ma oszczędzać sercowe TRα." },
    { "hu": "Magas dózisnál csont- és izomvesztés kockázata: a tartós pajzsmirigyhormon-túlsúly ismert hatása a csontvesztés (osteoporosis) és az izomkatabolizmus; a Sobetiromnál ezt humán hosszú-távú adat nem zárta ki.", "en": "Risk of bone and muscle loss at high doses: chronic thyroid hormone excess is a known driver of bone loss (osteoporosis) and muscle catabolism; long-term human data have not excluded this for sobetirome.", "pl": "Ryzyko utraty kości i mięśni przy wysokich dawkach: przewlekły nadmiar hormonów tarczycy to znana przyczyna utraty kości (osteoporoza) i katabolizmu mięśni; długoterminowe dane u ludzi nie wykluczyły tego dla sobetiromu." },
    { "hu": "Lehetséges thyromimetikus mellékhatások a Phase 1 keretén kívül feltérképezetlenek: fáradtság, hangulati ingadozás, GI-tünetek (hasmenés), amelyek a pajzsmirigyhormon-anyagcsere felgyorsításával társulhatnak.", "en": "Possible thyromimetic side effects uncharacterized beyond Phase 1: fatigue, mood changes, GI symptoms (diarrhea) that can accompany accelerated thyroid-hormone-driven metabolism.", "pl": "Możliwe działania tyreomimetyczne nieokreślone poza fazą 1: zmęczenie, wahania nastroju, objawy żołądkowo-jelitowe (biegunka), które mogą towarzyszyć przyspieszonemu metabolizmowi zależnemu od hormonów tarczycy." },
    { "hu": "Research-chemical eredetű termék kontaminációs és aluldozírozás/túldozírozás kockázata: az FDA + EMA sosem hagyta jóvá, így gyógyszerészeti minőség nem létezik; a deklarált tartalom HPLC-igazolatlan lehet.", "en": "Contamination and under/over-dosing risk from research-chemical sourcing: never FDA/EMA approved, so no pharmaceutical-grade product exists; declared content may be HPLC-unverified.", "pl": "Ryzyko zanieczyszczenia oraz zaniżenia/zawyżenia dawki przy zakupie jako research-chemical: nigdy niezatwierdzony przez FDA/EMA, więc nie istnieje jakość farmaceutyczna; deklarowana zawartość może być niezweryfikowana HPLC." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a pajzsmirigyhormon-jelátvitel kritikus a magzati és csecsemő-fejlődésben (kiemelten az idegrendszer), a zavarása teratogén/fejlődési kockázatot hordoz, ezért abszolút kerülendő.", "en": "Pregnancy and breastfeeding: thyroid hormone signaling is critical for fetal and infant development (especially the nervous system); disrupting it carries teratogenic/developmental risk, so it must be strictly avoided.", "pl": "Ciąża i karmienie piersią: sygnalizacja hormonów tarczycy jest kluczowa dla rozwoju płodu i niemowlęcia (zwłaszcza układu nerwowego); jej zaburzenie niesie ryzyko teratogenne/rozwojowe, dlatego należy bezwzględnie unikać." },
    { "hu": "Bármilyen pajzsmirigy-betegség (hyper- vagy hypothyreosis, Graves, csomós golyva) orvosi felügyelet nélkül: a thyromimetikus terhelés kiszámíthatatlanul befolyásolja a tengelyt.", "en": "Any thyroid disease (hyper- or hypothyroidism, Graves', nodular goiter) without medical supervision: the thyromimetic load affects the axis unpredictably.", "pl": "Jakakolwiek choroba tarczycy (nad- lub niedoczynność, Gravesa-Basedowa, wole guzkowe) bez nadzoru lekarza: obciążenie tyreomimetyczne nieprzewidywalnie wpływa na oś." },
    { "hu": "Pre-existing szív- és érrendszeri betegség (arrhythmia, koszorúér-betegség, szívelégtelenség): bár a TRβ-szelektivitás célja a kardiális TRα kímélése, a humán hosszú-távú szívbiztonsági adat hiányos.", "en": "Pre-existing cardiovascular disease (arrhythmia, coronary artery disease, heart failure): although TRβ-selectivity aims to spare cardiac TRα, long-term human cardiac safety data are lacking.", "pl": "Istniejąca choroba sercowo-naczyniowa (arytmia, choroba wieńcowa, niewydolność serca): choć selektywność TRβ ma oszczędzać sercowe TRα, brakuje długoterminowych danych o bezpieczeństwie sercowym u ludzi." },
    { "hu": "Osteoporosis vagy magas csonttörés-kockázat: a pajzsmirigyhormon-túlsúly fokozza a csontvesztést, ami ezeknél a betegeknél súlyosbodhat.", "en": "Osteoporosis or high fracture risk: thyroid hormone excess accelerates bone loss, which can worsen in these patients.", "pl": "Osteoporoza lub wysokie ryzyko złamań: nadmiar hormonów tarczycy przyspiesza utratę kości, co u tych pacjentów może się nasilić." },
    { "hu": "Egyidejű pajzsmirigyhormon-szubsztitúció (levothyroxine/T4 vagy liothyronine/T3): additív TRβ-jelátvitel és hyperthyreoid kockázat, kombináció csak szoros orvosi felügyelettel és pajzsmirigy-monitorozással (TSH, fT3, fT4).", "en": "Concurrent thyroid hormone replacement (levothyroxine/T4 or liothyronine/T3): additive TRβ signaling and hyperthyroid risk; combine only under close medical supervision with thyroid monitoring (TSH, fT3, fT4).", "pl": "Jednoczesne leczenie substytucyjne hormonami tarczycy (lewotyroksyna/T4 lub liotyronina/T3): addytywna sygnalizacja TRβ i ryzyko nadczynności; łączyć wyłącznie pod ścisłym nadzorem lekarza z monitorowaniem tarczycy (TSH, fT3, fT4)." },
    { "hu": "Versenysport-aktív sportoló: bár a Sobetirome nincs explicit a WADA-tiltólistán, a nem-jóváhagyott státusz miatt az 'S0 catch-all non-approved substance' klauzula érvényesíthető, NADA-konzultáció ajánlott.", "en": "Competitive athletes: although sobetirome is not explicitly on the WADA prohibited list, the non-approved status can trigger the 'S0 catch-all non-approved substance' clause; NADA consultation advised.", "pl": "Sportowcy wyczynowi: choć sobetirom nie jest wprost na liście zabronionej WADA, status niezatwierdzony może uruchomić klauzulę 'S0 catch-all substancji niezatwierdzonych'; zalecana konsultacja z NADA." }
  ],
  "name": "Sobetirome (GC-1)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#14b8a6",
  "tagColor": "rgba(20,184,166,0.18)",
  "shortDesc": "Doustnie aktywny, selektywny agonista receptora beta hormonu tarczycy (TRβ), thyromimetic (kod badawczy: GC-1). Wiąże się selektywnie z TRβ-1 (EC50 ~0.16 μM), oszczędzając sercowy TRα, ma naśladować korzystne metaboliczne/lipidowe efekty T3 bez typowych nadczynnościowych skutków sercowych. INVESTIGATIONAL: ukończona Phase 1 (~2008); Phase 2 dla wskazania metabolicznego NIE została przeprowadzona.",
  "description": "Sobetirome (kod badawczy: GC-1) to doustnie aktywny, selektywny agonista receptora beta hormonu tarczycy (TRβ) – tak zwany thyromimetic. Wiąże się selektywnie z receptorem TRβ-1 (EC50 ~0.16 μM), oszczędzając sercowy receptor TRα. Dzięki tej selektywności Sobetirome ma naśladować korzystne metaboliczne i obniżające lipidy efekty hormonu tarczycy (T3) bez typowych nadczynnościowych (związanych z nadczynnością tarczycy) skutków sercowych. Status kliniczny: Sobetirome ukończył badania Phase 1 (~2008), które wykazały efekty obniżające lipidy zarówno przy dawkowaniu pojedynczym, jak i wielokrotnym; Phase 2 dla wskazania metabolicznego NIE została przeprowadzona. Związek był badany obok innych agonistów TRβ – resmetirom (MGL-3196), VK2809, eprotirome – w dyslipidemii i NASH/MASH (stłuszczeniowa choroba wątroby). Udokumentowane efekty: obniża cholesterol LDL i lipoproteinę(a) oraz stymuluje etapy odwrotnego transportu cholesterolu (wykazane w badaniach przedklinicznych na naczelnych). Moduluje geny biosyntezy/metabolizmu cholesterolu i kwasów tłuszczowych. Znaczenie dla utraty tłuszczu: selektywny thyromimetic TRβ podnosi wątrobową obsługę lipidów i tempo metaboliczne (oksydacja lipidów) bezpieczniej niż pełny T3. Penetrujący CNS prolek molekuły, Sob-AM2, był również badany dla wskazań mielinowych/CNS (sprzężona z X adrenoleukodystrofia, demielinizacja, deficyt MCT8) – co oznacza, że agonizm TRβ molekuły został zbadany poza metabolizmem. RAMA STATUSU: związek badawczy / eksperymentalny, NIE zatwierdzony lek; dostępny na rynku research-chemical z zastrzeżeniami co do label-claim/czystości. Uczciwie o ryzykach thyromimetic: supresja osi HPT (podwzgórze-przysadka-tarczyca), potencjalne efekty kostne/mięśniowe przy wysokich dawkach, oraz NIE dla nikogo z chorobą tarczycy bez nadzoru lekarskiego.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Selektywny agonista TRβ thyromimetic (receptor beta hormonu tarczycy), oszczędza sercowy TRα"
    },
    {
      "label": "Selektywność wiązania",
      "value": "TRβ-1 EC50 ~0.16 μM (selektywny vs sercowy TRα)"
    },
    {
      "label": "Status kliniczny",
      "value": "Phase 1 ukończona (~2008, efekt obniżający lipidy); Phase 2 dla wskazania metabolicznego NIE przeprowadzona"
    },
    {
      "label": "Udokumentowane efekty",
      "value": "Obniżenie cholesterolu LDL + lipoproteiny(a), stymulacja odwrotnego transportu cholesterolu (przedkliniczne na naczelnych)"
    },
    {
      "label": "Status prawny",
      "value": "Związek badawczy / eksperymentalny, NIE zatwierdzony lek (FDA + EMA never approved); dostępny na rynku research-chemical"
    }
  ],
  "mechanism": "Sobetirome (GC-1) to selektywny agonista receptora beta hormonu tarczycy (TRβ). Receptor hormonu tarczycy ma dwie główne izoformy: TRα (dominujący w mięśniu sercowym, odpowiedzialny za efekty sercowe takie jak częstość akcji serca) oraz TRβ (dominujący w wątrobie i tkance metabolicznej, odpowiedzialny za metabolizm lipidów). Sobetirome wiąże się selektywnie z receptorem TRβ-1 (EC50 ~0.16 μM), oszczędzając TRα – dlatego nazywa się go thyromimetic: naśladuje korzystne metaboliczne efekty hormonu tarczycy (T3) bez nadczynnościowych skutków sercowych. Aktywacja TRβ w wątrobie moduluje geny biosyntezy/metabolizmu cholesterolu i kwasów tłuszczowych, obniża cholesterol LDL i lipoproteinę(a) oraz stymuluje etapy odwrotnego transportu cholesterolu (wykazane w badaniach przedklinicznych na naczelnych). Znaczenie dla utraty tłuszczu wynika z tego: selektywny agonizm TRβ podnosi wątrobową obsługę lipidów i tempo metaboliczne (oksydacja lipidów), w zasadzie bezpieczniej niż pełny (nieselektywny) T3. Penetrujący CNS prolek molekuły, Sob-AM2, zbadał agonizm TRβ poza metabolizmem we wskazaniach mielinowych/CNS (sprzężona z X adrenoleukodystrofia, demielinizacja, deficyt MCT8). KRYTYCZNE: Sobetirome ukończył badania Phase 1 (~2008), ale Phase 2 dla wskazania metabolicznego NIE została przeprowadzona, więc długoterminowe ludzkie dane skuteczności i bezpieczeństwa są ograniczone.",
  "legalStatus": "USA: FDA never approved (związek badawczy; po ukończeniu Phase 1 ~2008 Phase 2 dla wskazania metabolicznego nie została przeprowadzona). UE + EMA: never approved. HU + PL: niezarejestrowane. Sobetirome NIE jest zatwierdzonym lekiem; jest dostępny na rynku research-chemical z zastrzeżeniami co do label-claim/czystości. WADA: NIE wyraźnie listowane, więc technicznie w kategorii 'allowed' – JEDNAK biorąc pod uwagę status badawczy / niezatwierdzony, klauzula 'S0 catch-all non-approved substance' może potencjalnie się stosować do aktywnych sportowców, więc zalecana jest konsultacja z NADA.",
  "onsetTime": "W badaniach Phase 1 efekt obniżający lipidy był udokumentowany przy dawkowaniu wielokrotnym; dokładny ludzki początek działania dla wskazania metabolicznego jest ograniczenie scharakteryzowany (Phase 2 nie przeprowadzona)",
  "halfLife": "Ludzkie PK ograniczenie opublikowane (Phase 1 ~2008); dokładny okres półtrwania nie wyszczególniony w publicznych danych wskazania metabolicznego",
  "interactionsWith": [
    "levothyroxine",
    "liothyronine",
    "slu-pp-915",
    "atx-304"
  ],
  "aromatization": "Nie aromatyzuje (nie steryd – selektywny agonista TRβ thyromimetic). Brak interakcji z CYP19.",
  "hepatotoxicity": "Thyromimetics generalnie nie są bezpośrednio hepatotoksyczne, a agonizm TRβ w wątrobie może poprawić stłuszczenie wątroby (steatosis) – dlatego Sobetirome i inni agoniści TRβ byli badani dla NASH/MASH. JEDNAK nadstymulacja TRβ ma teoretyczne ryzyka, a długoterminowe ludzkie dane dla Sobetirome są ograniczone (Phase 2 dla wskazania metabolicznego nie została przeprowadzona) – należy to uczciwie zaznaczyć.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, selektywny agonista TRβ thyromimetic)",
  "bindingAffinity": "Wiąże się selektywnie z receptorem TRβ-1 z EC50 ~0.16 μM, oszczędzając dominujący w sercu receptor TRα.",
  "detectionWindow": "WADA-akredytowany protokół wykrywania NIE jest specyficznie regulowany (Sobetirome NIE wyraźnie listowane). Out-of-competition LC-MS/MS możliwe pod kategorią 'S0 catch-all'.",
  "benefits": [
    "Selektywny agonizm TRβ: celuje w korzystne metaboliczne/lipidowe efekty T3 bez typowych nadczynnościowych skutków sercowych (oszczędza sercowy TRα)",
    "Udokumentowany efekt obniżający lipidy w badaniach Phase 1 (dawkowanie pojedyncze i wielokrotne)",
    "Obniżenie cholesterolu LDL i lipoproteiny(a)",
    "Stymulacja etapów odwrotnego transportu cholesterolu (wykazane w badaniach przedklinicznych na naczelnych)",
    "Modulacja genów biosyntezy/metabolizmu cholesterolu i kwasów tłuszczowych; podnoszenie wątrobowej obsługi lipidów + tempa metabolicznego (oksydacja lipidów)",
    "JEDNAK: Phase 2 dla wskazania metabolicznego NIE została przeprowadzona – lista benefitów opiera się na niezatwierdzonym wskazaniu klinicznym, framework INVESTIGATIONAL"
  ],
  "quickStart": [
    "INVESTIGATIONAL / związek badawczy – NIE zatwierdzony lek (FDA + EMA never approved); Phase 2 dla wskazania metabolicznego nie przeprowadzona",
    "Dostępny na rynku research-chemical z zastrzeżeniami co do label-claim/czystości – deklarowana zawartość może być HPLC-untested",
    "Thyromimetic: może supresjonować oś HPT (oś tarczycy); potencjalne efekty kostne/mięśniowe przy wysokich dawkach",
    "NIE dla nikogo z chorobą tarczycy bez nadzoru lekarskiego; monitorowanie funkcji tarczycy (TSH, fT3, fT4) jest uzasadnione"
  ],
  "quality": {
    "pure": [
      "FDA + EMA never approved – Rx-pharmacy-sourced Sobetirome NIE istnieje",
      "Dostępny na rynku research-chemical z zastrzeżeniami co do label-claim/czystości (HPLC-untested content wysokie)",
      "Czystość i rzeczywista zawartość aktywnego składnika batchy research-chemical nie są gwarantowane; niezależna weryfikacja czystości HPLC jest uzasadniona"
    ],
    "caution": [
      "Status INVESTIGATIONAL – Phase 2 dla wskazania metabolicznego nie przeprowadzona; długoterminowe ludzkie dane skuteczności i bezpieczeństwa są ograniczone",
      "Ryzyko thyromimetic: supresja osi HPT (podwzgórze-przysadka-tarczyca)",
      "Potencjalne efekty kostne i mięśniowe przy wysokich dawkach (znane ryzyka nadmiaru hormonu tarczycy)"
    ],
    "avoid": [
      "Choroba tarczycy (nad- lub niedoczynność) bez nadzoru lekarskiego – bezwzględna ostrożność",
      "Pre-existing choroba serca (chociaż selektywność TRβ oszczędza TRα, ludzkie dane długoterminowe są ograniczone)",
      "Ciąża + karmienie piersią (sygnalizacja hormonu tarczycy jest krytyczna dla rozwoju płodu)",
      "Aktywni sportowcy – kategoria WADA 'S0 catch-all non-approved substance' może potencjalnie się stosować",
      "Online research-chemical Sobetirome z ryzykiem label-claim discrepancy + HPLC-untested-batch"
    ]
  },
  "interactions": [
    "Levothyroxine (T4) – substytucja hormonu tarczycy; thyromimetic dodaje addytywną sygnalizację TRβ, monitorowanie osi HPT + TSH jest uzasadnione, łączyć tylko pod nadzorem lekarskim",
    "Liothyronine (T3) – aktywny hormon tarczycy; nakładający się agonizm TR, addytywny efekt thyromimetic + ryzyko nadczynności, kombinacja niezalecana bez nadzoru",
    "SLU-PP-915 – związek o ukierunkowaniu metabolicznym, kontekst badawczy; brak danych klinicznych o kombinacji",
    "ATX-304 – związek o ukierunkowaniu metabolicznym, kontekst badawczy; brak danych klinicznych o kombinacji"
  ],
  "studies": [
    {
      "title": "Maternal Administration of the CNS-Selective Sobetirome Prodrug Sob-AM2 Exerts Thyromimetic Effects in Murine MCT8-Deficient Fetuses",
      "authors": "Valcárcel-Hernández V, Guillén-Yunta M, Scanlan TS, Bárez-López S et al.",
      "journal": "Thyroid. 2023",
      "pmid": "36792926"
    },
    {
      "title": "Promyelinating drugs promote functional recovery in an autism spectrum disorder mouse model of Pitt-Hopkins syndrome",
      "authors": "Bohlen JF, Cleary CM, Das D, Sripathy SR et al.",
      "journal": "Brain. 2023",
      "pmid": "37068912"
    },
    {
      "title": "Sobetirome rescues α-synuclein-mediated demyelination in an in vitro model of multiple system atrophy",
      "authors": "Mészáros L, Himmler M, Schneider Y, Arnold P et al.",
      "journal": "Eur J Neurosci. 2024",
      "pmid": "38086536"
    }
  ],
  "faq": [
    {
      "q": "Czym jest thyromimetic i dlaczego Sobetirome jest selektywny dla TRβ?",
      "a": "Thyromimetic to związek, który naśladuje efekty hormonu tarczycy (T3). Receptor hormonu tarczycy ma dwie główne izoformy: TRα (dominujący w mięśniu sercowym, odpowiedzialny za efekty sercowe) oraz TRβ (dominujący w wątrobie i tkance metabolicznej, odpowiedzialny za metabolizm lipidów). Sobetirome (GC-1) wiąże się selektywnie z receptorem TRβ-1 (EC50 ~0.16 μM), oszczędzając TRα. Cel tej selektywności: zachować korzystne metaboliczne i obniżające lipidy efekty T3, ale uniknąć typowych nadczynnościowych skutków sercowych (np. przyspieszonego bicia serca)."
    },
    {
      "q": "Jaki jest status kliniczny Sobetirome – czy to zatwierdzony lek?",
      "a": "NIE. Sobetirome to związek badawczy / eksperymentalny, NIE zatwierdzony lek (ani FDA, ani EMA go nie zatwierdziły). Ukończył badania Phase 1 (~2008), które wykazały efekty obniżające lipidy przy dawkowaniu pojedynczym i wielokrotnym – ale Phase 2 dla wskazania metabolicznego NIE została przeprowadzona. Jest dostępny na rynku research-chemical z zastrzeżeniami co do label-claim/czystości. Długoterminowe ludzkie dane skuteczności i bezpieczeństwa są ograniczone."
    },
    {
      "q": "Jakie udokumentowane efekty metaboliczne ma?",
      "a": "Sobetirome obniża cholesterol LDL i lipoproteinę(a) oraz stymuluje etapy odwrotnego transportu cholesterolu w badaniach przedklinicznych na naczelnych. Moduluje geny biosyntezy/metabolizmu cholesterolu i kwasów tłuszczowych. Związek był badany dla dyslipidemii i NASH/MASH (stłuszczenie wątroby) obok innych agonistów TRβ – resmetirom (MGL-3196), VK2809, eprotirome. Znaczenie dla utraty tłuszczu wynika z faktu, że selektywny agonizm TRβ podnosi wątrobową obsługę lipidów i tempo metaboliczne (oksydacja lipidów), w zasadzie bezpieczniej niż pełny T3."
    },
    {
      "q": "Jakie są jego ryzyka i kto NIE powinien go używać?",
      "a": "Chociaż thyromimetics generalnie nie są bezpośrednio hepatotoksyczne (agonizm TRβ może nawet poprawić stłuszczenie wątroby), nadstymulacja TRβ ma teoretyczne ryzyka: może supresjonować oś HPT (oś tarczycy) i może mieć potencjalne efekty kostne i mięśniowe przy wysokich dawkach. Długoterminowe ludzkie dane są ograniczone (Phase 2 nie została przeprowadzona). NIE jest dla nikogo z chorobą tarczycy bez nadzoru lekarskiego; monitorowanie funkcji tarczycy (TSH, fT3, fT4) jest uzasadnione. Dla aktywnych sportowców kategoria WADA 'S0 catch-all' może potencjalnie się stosować."
    }
  ],
  "related": [
    "levothyroxine",
    "liothyronine",
    "slu-pp-915",
    "atx-304"
  ],
  "anecdote": "Doniesienia społeczności przedstawiają Sobetirome (GC-1) jako selektywny, 'oszczędzający serce' thyromimetic ceniony za utratę tłuszczu i poprawę profilu lipidowego – na logice, że selektywność TRβ ma zachować przyspieszający metabolizm efekt hormonu tarczycy bez przyspieszonego bicia serca i klasycznych nadczynnościowych skutków ubocznych. Ważny kontekst: to związek badawczy, NIE zatwierdzony lek, a Phase 2 dla wskazania metabolicznego nie została przeprowadzona – więc te doniesienia nie zastępują dowodów klinicznych. Na rynku research-chemical label-claim i czystość nie są gwarantowane. Dla każdego zainteresowanego monitorowanie funkcji tarczycy (TSH, fT3, fT4) i nadzór lekarski to odpowiedzialna rama, szczególnie przy jakimkolwiek zaangażowaniu tarczycy."
}
