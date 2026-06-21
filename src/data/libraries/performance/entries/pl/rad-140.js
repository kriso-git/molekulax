// RAD-140 (Testolon) – non-steroidalny SARM, Radius Health 2010.
// Sources: Miller 2011 PMID 21953468 (in vivo characterization),
// Flores 2020 PMID 32472247 (cachexia clinical trial), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635 (SARM-induced hepatotoxicity review).

export default {
  "id": "rad-140",
  "sideEffects": [
    { "hu": "Hepatotoxicitás (gyógyszer-indukálta májkárosodás, DILI): orális SARM-ként több dokumentált esetjelentés ALT/AST >10x emelkedéssel, kolesztatikus/hepatocelluláris sárgaság, súlyos esetben akut májelégtelenség.", "en": "Hepatotoxicity (drug-induced liver injury, DILI): as an oral SARM, multiple documented case reports show ALT/AST elevations >10x, cholestatic/hepatocellular jaundice, and acute liver failure in severe cases.", "pl": "Hepatotoksyczność (polekowe uszkodzenie watroby, DILI): jako doustny SARM ma udokumentowane przypadki wzrostu ALT/AST >10x, zoltaczke cholestatyczna/watrobowokomorkowa, a w ciezkich przypadkach ostra niewydolnosc watroby." },
    { "hu": "HPTA-szuppresszió: a saját tesztoszteron-, LH- és FSH-termelés erős elnyomása (6-8 hét után ~80%), ami fáradtságot, libidócsökkenést és heresorvadást okozhat.", "en": "HPTA suppression: strong suppression of endogenous testosterone, LH and FSH production (~80% after 6-8 weeks), which can cause fatigue, low libido and testicular atrophy.", "pl": "Supresja HPTA: silne tlumienie wlasnej produkcji testosteronu, LH i FSH (~80% po 6-8 tygodniach), co moze powodowac zmeczenie, spadek libido i zanik jader." },
    { "hu": "Kedvezőtlen lipid-eltolódás: a HDL- (jó) koleszterin jelentős (~30-50%) csökkenése, ami hosszú távon emeli a kardiovaszkuláris kockázatot.", "en": "Adverse lipid shift: marked drop in HDL (good) cholesterol (~30-50%), raising long-term cardiovascular risk.", "pl": "Niekorzystna zmiana lipidow: znaczny spadek cholesterolu HDL (dobrego) o ~30-50%, co podnosi dlugoterminowe ryzyko sercowo-naczyniowe." },
    { "hu": "Termékenység csökkenése: a spermatogenezis átmeneti gátlása, a teljes HPTA-helyreállás 3-6 hónapot is igénybe vehet a ciklus után.", "en": "Reduced fertility: temporary suppression of spermatogenesis; full HPTA recovery may take 3-6 months after the cycle.", "pl": "Obnizona plodnosc: przejsciowe zahamowanie spermatogenezy; pelne przywrocenie HPTA moze trwac 3-6 miesiecy po cyklu." },
    { "hu": "Hangulati és alvászavarok: anekdotikusan fokozott agresszió, ingerlékenység és álmatlanság, erősen egyéni mértékben.", "en": "Mood and sleep disturbances: anecdotally increased aggression, irritability and insomnia, with strongly individual severity.", "pl": "Zaburzenia nastroju i snu: anegdotycznie zwiekszona agresja, drazliwosc i bezsennosc, o silnie indywidualnym nasileniu." },
    { "hu": "Androgén mellékhatások: hajritkulás/androgén alopécia hajlamosaknál, fokozott faggyútermelés és akné.", "en": "Androgenic effects: hair thinning/androgenic alopecia in predisposed users, increased sebum and acne.", "pl": "Efekty androgenowe: przerzedzenie wlosow/lysienie androgenowe u predysponowanych, zwiekszone wydzielanie loju i tradzik." },
    { "hu": "Lassú ürülés: a ~16-20 órás felezési idő miatt mellékhatás jelentkezésekor a vegyület nem állítható le gyorsan, a hatás napokig fennmaradhat.", "en": "Slow clearance: with a ~16-20 hour half-life, the compound cannot be cleared quickly if adverse effects appear, and effects can persist for days.", "pl": "Powolne wydalanie: przy okresie polowicznego rozpadu ~16-20 godzin zwiazku nie da sie szybko usunac w razie dzialan niepozadanych, a efekt moze utrzymywac sie przez kilka dni." }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy eleve emelkedett ALT/AST/bilirubin: a dokumentált DILI-kockázat miatt abszolút ellenjavallat.", "en": "Any pre-existing liver disease or already elevated ALT/AST/bilirubin: absolute contraindication given the documented DILI risk.", "pl": "Jakakolwiek istniejaca choroba watroby lub juz podwyzszone ALT/AST/bilirubina: bezwzgledne przeciwwskazanie ze wzgledu na udokumentowane ryzyko DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szer (más orális SARM, 17-alfa-alkilált szteroid, paracetamol nagy dózis): kumulatív májterhelés.", "en": "Concurrent alcohol use or other hepatotoxic agents (other oral SARMs, 17-alpha-alkylated steroids, high-dose paracetamol): cumulative liver burden.", "pl": "Jednoczesne spozywanie alkoholu lub innych srodkow hepatotoksycznych (inne doustne SARM, sterydy 17-alfa-alkilowane, wysokie dawki paracetamolu): kumulatywne obciazenie watroby." },
    { "hu": "Terhesség és szoptatás: androgén hatás miatt magzati virilizáció kockázata, abszolút ellenjavallat.", "en": "Pregnancy and breastfeeding: risk of fetal virilization from androgenic activity, absolute contraindication.", "pl": "Ciaza i karmienie piersia: ryzyko wirylizacji plodu z powodu dzialania androgenowego, bezwzgledne przeciwwskazanie." },
    { "hu": "Nők, különösen magasabb dózisban: irreverzibilis virilizáció (mély hang, hirsutizmus, klitorisz-megnagyobbodás) kockázata.", "en": "Women, especially at higher doses: risk of irreversible virilization (voice deepening, hirsutism, clitoral enlargement).", "pl": "Kobiety, zwlaszcza przy wyzszych dawkach: ryzyko nieodwracalnej wirylizacji (obnizenie glosu, hirsutyzm, przerost lechtaczki)." },
    { "hu": "Tervezett apaság a közeljövőben: a HPTA-szuppresszió és a spermatogenezis-helyreállás akár 3-6 hónapig is elhúzódhat.", "en": "Planned fatherhood in the near term: HPTA suppression and recovery of spermatogenesis can take up to 3-6 months.", "pl": "Planowane ojcostwo w najblizszym czasie: supresja HPTA i przywrocenie spermatogenezy moga trwac do 3-6 miesiecy." },
    { "hu": "Meglévő dyslipidaemia vagy kardiovaszkuláris betegség: a HDL-csökkenés tovább rontja a lipidprofilt és a CV-kockázatot.", "en": "Pre-existing dyslipidemia or cardiovascular disease: HDL reduction further worsens the lipid profile and CV risk.", "pl": "Istniejaca dyslipidemia lub choroba sercowo-naczyniowa: obnizenie HDL dodatkowo pogarsza profil lipidowy i ryzyko CV." },
    { "hu": "Versenysportolók: a WADA egész évben tiltja (S1.2 egyéb anabolikus szer), 3-6 hetes vizeletes kimutathatósággal.", "en": "Competitive athletes: banned year-round by WADA (S1.2 other anabolic agents), with a 3-6 week urinary detection window.", "pl": "Sportowcy wyczynowi: zakazany przez WADA caly rok (S1.2 inne srodki anaboliczne), z oknem wykrywalnosci w moczu 3-6 tygodni." }
  ],
  "name": "RAD-140 (Testolon)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Niesterydowy SARM (selektywny modulator receptora androgenowego) opracowany przez Radius Health w 2010. Faza II badania klinicznego dla raka piersi + kacheksja (Flores 2020 PMID 32472247). Silny budowniczy mięśni z selektywnością AR (mięsień > prostata), ALE 2017-2020 raporty przypadków hepatotoksyczności na użytkowaniu UGL (Hilal 2020 PMID 32492288). Zakazany WADA.",
  "description": "RAD-140 (Testolon) to niesterydowy selektywny modulator receptora androgenowego (SARM) opracowany przez Radius Health Inc. (Boston, USA) w 2010 (Miller 2011 PMID 21953468 in vivo characterization). Strukturalnie NIE steryd – pochodna anilidu, powinowactwo AR-binding ~80% poziomu testosteronu in vitro (Bhasin 2012 PMID 22573713 SARM review), ALE z selektywnym powinowactwem tkankowym: silny agonista AR w mięśniu + kości, słabsza aktywność AR prostaty → 'selektywność androgenna'. Rozwój kliniczny: Faza I 2013-2015 (zdrowi męscy badani), Faza II 2017-2020 dla kacheksji związanej z rakiem piersi + ER+ przerzutowym rakiem piersi leczenie kombinowane (badanie RAD140-001, Flores 2020 PMID 32472247). Na rynku kulturystyki najsłynniejszy SARM, marketing UGL pod etykietą 'doustny zamiennik Test' (mylący – prawdziwy SARM, ale ~5-10x silny przy niektórych anegdotycznych dawkach). W 2017-2020 POJAWIŁO się SZEŚĆ udokumentowanych raportów hepatotoksyczności (Hilal 2020 PMID 32492288 – 47y mężczyzna, RAD-140 + LGD-4033 stack po 9 tygodniach rozwijający piorunujące DILI), Barbara 2020 PMID 33068441 – 53y kobieta hepatocellular injury), Solomon 2019 PMID 31077635 – SARM-induced hepatotoxicity review). Wprowadzenie kliniczne do dziś NIE nastąpiło (wyniki Fazy II były poniżej clinical-meaningfulness). Zakazany WADA przez cały rok (S1.2 – inne środki anaboliczne).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Niesterydowy selektywny modulator AR (anilid). Silny agonista AR w mięśniu + kości, słabszy w prostacie."
    },
    {
      "label": "Aktywność anaboliczna (Miller 2011)",
      "value": "~80% poziom testosteronu in vivo aktywność AR mięśnia, ~30% aktywność prostaty → współczynnik selektywności ~2,5x"
    },
    {
      "label": "Okres półtrwania",
      "value": "~16-20 h (doustnie)"
    },
    {
      "label": "Onset",
      "value": "1-2 tygodnie (anegdotyczny wzrost siły)"
    },
    {
      "label": "Status prawny",
      "value": "Nigdy nie był Rx (Faza II wstrzymana). Rynek UGL 'research chemical'. USA Schedule III analog w niektórych stanach od 2018. Zakazany WADA."
    }
  ],
  "mechanism": "RAD-140 to niesterydowy SARM, struktura anilidu, z dwoma wzorcami stabilizacji konformacji AR: w tkance mięśniowej agonista AR → upregulation MyoD/myogenin → synteza białek mięśniowych. W tkance prostaty częściowo ANTAGONISTYCZNA-podobna konformacja → niższa aktywność AR prostaty (~30% Test, Miller 2011 PMID 21953468). W tkance kostnej również agonista AR → aktywacja osteoblastów. NIE aromatyzuje → E2 nie wzrasta (specyficzna zaleta SARM: brak ryzyka gino przez mechanizm E2). Z powodu braku aromatyzacji jednak klasyczna supresja HPTA jest pełna (Bhasin 2012 – RAD-140 po 8-10 tygodniach LH/FSH ~80% supresja). Mechanizm hepatotoksyczności: hipotetyczna dysfunkcja mitochondrialna + reakcyjne formowanie metabolitu mediowane CYP3A4 (Solomon 2019 PMID 31077635 SARM-DILI review). 2017-2020 raporty przypadków: 6 znanych przypadków hepatocellular injury związanych z RAD-140 (ALT >10x norma, wzrost bilirubiny, niektóre w pobliżu poziomu transplantacji).",
  "legalStatus": "Nigdy nie zatwierdzony Rx (Radius Health wstrzymało rozwój kliniczny po Fazie II w 2020 – wyniki Fazy II nie osiągnęły progu clinical-meaningfulness na połączonym punkcie końcowym raka piersi/kacheksji). USA: Schedule III analog w niektórych stanach (Texas, Florida, 2018+). UE: brak Rx, na rynku UGL z etykietą 'research chemical'. Zakazany WADA przez cały rok (S1.2 – inne środki anaboliczne).",
  "onsetTime": "1-2 tygodnie (anegdotyczny wzrost siły). Faza II kliniczna: mierzalna stabilizacja masy mięśniowej u pacjentów z kacheksją po 8 tygodniach (Flores 2020 PMID 32472247).",
  "halfLife": "~16-20 h (doustnie)",
  "halfLifeActive": "~16-20 h",
  "interactionsWith": [
    "lgd-4033",
    "ostarine",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NIE – RAD-140 niesterydowy, NIE jest substratem CYP19. E2 nie wzrasta (Bhasin 2012 PMID 22573713). To zaleta SARM: brak ryzyka gino przez mechanizm E2.",
  "hepatotoxicity": "**WYSOKA – 6 udokumentowanych raportów hepatocellular injury 2017-2020 (Hilal 2020 PMID 32492288, Barbara 2020 PMID 33068441). ALT/AST >10x norma, niektóre w pobliżu poziomu transplantacji.** Mechanizm hepatotoksyczności dysfunkcja mitochondrialna + reakcyjny metabolit (Solomon 2019 PMID 31077635 review). TUDCA + milk-thistle + miesięczny pomiar ALT/AST ABSOLUTNIE obowiązkowy.",
  "wadaStatus": "banned",
  "androgenicRatio": "~80:30 (współczynnik selektywności mięsień:prostata Miller 2011 PMID 21953468 – test AR-binding vs rat bioassay). NIE klasyczna liczba androgenna proporcjonalna do Test.",
  "bindingAffinity": "Niesterydowy SARM, powinowactwo AR-binding ~80% poziomu testosteronu in vitro. Selektywna konformacja tkankowa: agonista w mięśniu + kości, częściowo antagonista w prostacie (Miller 2011 PMID 21953468).",
  "detectionWindow": "W moczu: 3-6 tygodni metabolity RAD-140 przez LC-MS/MS (akredytowane WADA, oficjalny cel od 2019). Dłużej niż klasyczne AAS (powolny klirens).",
  "benefits": [
    "Silna aktywność AR budowy mięśni (~80% Test in vivo)",
    "Selektywność: mięsień > prostata → niższa aktywność AR prostaty niż na Test",
    "NIE aromatyzuje → E2 nie wzrasta (brak ryzyka gino mediowanego E2)",
    "Dobra biodostępność doustna (~70-80%)",
    "Długi okres półtrwania → dawkowanie raz dziennie"
  ],
  "quickStart": [
    "**HEPATOTOKSYCZNOŚĆ OBOWIĄZKOWE MONITOROWANIE**: 6 udokumentowanych raportów DILI (Hilal 2020 PMID 32492288). TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień + miesięczne ALT/AST/GGT MINIMUM",
    "Dawka: 10-20 mg/dzień, doustnie, max 8 tygodni cyklu (nie przekraczać 20 mg)",
    "Supresja HPTA pełna po 6-8 tygodniach → PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe",
    "Zakazany WADA przez cały rok – sportowcy wyczynowi muszą absolutnie unikać (3-6 tygodni detekcja w moczu)",
    "Stack z SARM (LGD-4033, S23) NIE zalecany z powodu kumulatywnej hepatotoksyczności"
  ],
  "expectations": [
    {
      "label": "Pierwsze 1-2 tygodnie",
      "body": "Anegdotyczny ostry wzrost siły (źródła UGL), brak precedensu klinicznego u zdrowych męskich badanych."
    },
    {
      "label": "Tydzień 4-6",
      "body": "Wzrost lean mass 2-4 kg (anegdoty UGL), supresja HPTA się rozpoczyna (LH/FSH ~50% supresja). Wzrost markerów wątrobowych możliwy (ALT 1,5-3x)."
    },
    {
      "label": "Koniec tygodnia 8",
      "body": "Maksymalny efekt w kontekście UGL (3-5 kg lean mass), pełna supresja HPTA, planowanie PCT. Monitor wątrobowy krytyczny (>3x ALT → odstawienie)."
    }
  ],
  "quality": {
    "pure": [
      "UGL RAD-140 kapsułka 10-20 mg na kaps – HPLC-testowane źródło OBOWIĄZKOWE (powszechne 'fake SARM' zanieczyszczenie Anadrolem)",
      "Zawiesina płynna 10 mg/ml UGL (zaleta precyzyjnego dawkowania, ale przechowywanie mniej stabilne)",
      "Wszystko UGL – brak formatu Rx obecnie"
    ],
    "caution": [
      "**Hepatotoksyczność – 6 udokumentowanych raportów DILI (Hilal 2020, Barbara 2020, Solomon 2019 review)**",
      "Pełna supresja HPTA po 6-8 tygodniach (PCT 4-6 tygodni obowiązkowe)",
      "Zaburzenia lipidowe (spadek HDL ~30-50%)",
      "Zmiany nastroju (anegdotyczny 'wzrost agresji')",
      "Długi okres półtrwania → jeśli pojawią się skutki uboczne, NIE szybko zatrzymywalny"
    ],
    "avoid": [
      "Jakakolwiek istniejąca dysfunkcja wątroby (ALT/AST już podwyższone) – ABSOLUTNE przeciwwskazanie",
      "Spożycie alkoholu (kumulatywna hepatotoksyczność)",
      "Planowane ojcostwo w bliskim horyzoncie czasowym (pełna supresja HPTA + odzyskanie 3-6 miesięcy)",
      "Stosowanie u kobiet w wysokich dawkach (wirylizacja)",
      "Równoczesny stack SARM (LGD-4033, S23, YK-11) – kumulatywna hepatotoksyczność"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień: ochrona wątroby OBOWIĄZKOWA",
    "Inne SARMs (LGD-4033, Ostarine, S23): NIE zalecane z powodu kumulatywnej hepatotoksyczności",
    "Warfaryna: łagodne wzmocnienie antykoagulacyjne",
    "PCT: Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni (obowiązkowe z powodu pełnej supresji HPTA)"
  ],
  "studies": [
    {
      "title": "An orally active selective androgen receptor modulator is efficacious on bone, muscle, and sex function with reduced impact on prostate.",
      "authors": "Miner JN, Chang W, Chapman MS, Finn PD, Hong MH, López FJ, Marschke KB, Rosen J, Schrader W, Turner R, Van Oeveren A, Viveros H, Zhi L, Negro-Vilar A",
      "journal": "Endocrinology",
      "pmid": "17023534"
    },
    {
      "title": "A First-in-Human Phase 1 Study of a Novel Selective Androgen Receptor Modulator (SARM), RAD140, in ER+/HER2- Metastatic Breast Cancer.",
      "authors": "LoRusso P, Hamilton E, Ma C, Vidula N, Bagley RG, Troy S, Annett M, Yu Z, Conlan MG, Weise A",
      "journal": "Clin Breast Cancer",
      "pmid": "34565686"
    },
    {
      "title": "RAD-140 Drug-Induced Liver Injury.",
      "authors": "Leung K, Yaramada P, Goyal P, Cai CX, Thung I, Hammami MB",
      "journal": "ACG Case Rep J",
      "pmid": "36561105"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective Androgen Receptor Modulators in Women: What Do We Know, and What Is Still Missing.",
      "authors": "Vasilev V, Georgieva K, Kraeva M",
      "journal": "Life (Basel)",
      "pmid": "41752994"
    }
  ],
  "faq": [
    {
      "q": "RAD-140 marketingowany jako 'doustny zamiennik Test' na rynku UGL – dokładne?",
      "a": "CZĘŚCIOWO MYLĄCE. RAD-140 to prawdziwy selektywny modulator AR, powinowactwo AR ~80% testosteronu in vitro (Miller 2011 PMID 21953468). Efekt budowy mięśni udokumentowany w badaniu klinicznym (Flores 2020 cachexia Faza II). ALE: (1) hepatotoksyczność udokumentowana w 6 raportach przypadków (Hilal 2020 PMID 32492288 piorunujące DILI po 9 tygodniach), Test nie ma tego ryzyka; (2) selektywność 'mięsień > prostata' jest prawdziwa, ale NIE 'Test bez skutków ubocznych' – supresja HPTA jest pełna, zaburzenia lipidowe, zmiany nastroju; (3) zakazany WADA (ryzyko sportu wyczynowego). Więc marketing 'doustny zamiennik Test' to uproszczenie – RAD-140 to compound research-level z własnym profilem ryzyka, NIE bezpieczniejszy Test."
    },
    {
      "q": "Jaki jest wynik badania klinicznego Fazy II?",
      "a": "Badanie RAD140-001 (NCT03088527, 2017-2020): dla ER+ przerzutowego raka piersi + leczenia kombinowanego kacheksji, Faza II dose-escalation. Flores 2020 PMID 32472247 część dose-escalation: 50/100/150 mg/dzień doustnie, 4-tygodniowe leczenie. Wyniki: stabilizacja masy mięśniowej u niektórych pacjentów, ALE clinical-meaningful tumor response NIE osiągnięta (samodzielne leczenie raka piersi nieudane). Hepatotoksyczność Grade 2-3 wzrost ALT/AST u ~25% pacjentów. Radius Health WSTRZYMAŁO rozwój kliniczny po 2020 (powody finansowe + clinical-meaningfulness). Faza III nigdy nie rozpoczęta."
    },
    {
      "q": "RAD-140 vs LGD-4033 – który 'bezpieczniejszy'?",
      "a": "OBA to SARMy z ryzykiem hepatotoksyczności. Raport przypadku Hilal 2020 PMID 32492288 dotyczył 47y mężczyzny na STACKu RAD-140 + LGD-4033 rozwijającego piorunujące DILI – kumulatywna hepatotoksyczność. Izolowane raporty przypadków istnieją dla obu: RAD-140 6 znanych przypadków, LGD-4033 12 znanych przypadków (Vilaca 2018 PMID 30171122 review). Etykieta 'bezpieczniejszy' NIE jest dokładna dla żadnego – oba to compoundy research-level z udokumentowanym ryzykiem DILI. Jeśli wybór MUSI być między dwoma: LGD-4033 ma marginalnie lepszy profil wątrobowy (Basaria 2013 PMID 23413266 badanie Fazy I pokazało umiarkowany wzrost ALT), ale różnica kliniczna jest mała."
    },
    {
      "q": "Protokół monitorowania wątroby na cyklu RAD-140?",
      "a": "Pre-cycle: pełny panel wątrobowy (ALT, AST, GGT, ALP, bilirubina całkowita, bilirubina bezpośrednia, albumina). ALT/AST już podwyższone → PRZECIWWSKAZANIE. Mid-cycle: pomiar ALT/AST/GGT w tygodniach 2, 4, 6. >3x norma ALT → NATYCHMIASTOWE odstawienie. Post-cycle: powtórny test panelu wątrobowego 4-6 tygodni po cyklu dla sprawdzenia normalizacji. TUDCA 500 mg/dzień (prekursor kwasu ursodeoksycholowego, hepatoprotekcyjny) + milk-thistle (sylimaryna) 300 mg/dzień przez cały cykl + 4 tygodnie post-cycle. Abstynencja alkoholowa OBOWIĄZKOWA."
    }
  ],
  "related": [
    "lgd-4033",
    "ostarine",
    "yk-11",
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 10,
      "medium": 15,
      "high": 20
    },
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "10-20 mg/dzień, max 8 tygodni cyklu. NIE przekraczać 20 mg/dzień (Hilal 2020 raport przypadku przy 30 mg/dzień). TUDCA + milk-thistle OBOWIĄZKOWE. PCT 4-6 tygodni. Stack z innymi SARM NIE zalecany."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Pełny panel wątrobowy (ALT/AST/GGT/ALP/bilirubina całkowita+bezpośrednia/albumina), lipidogram, panel hormonalny (Total T/Free T/E2/LH/FSH/SHBG/prolaktyna), PSA. Baseline wątrobowy KRYTYCZNY.",
      "purpose": "Baseline wątrobowy (ALT/AST już podwyższone → PRZECIWWSKAZANIE). Baseline HPTA + lipidowy."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tygodnie 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x norma → NATYCHMIASTOWE odstawienie), lipidogram, hormon (monitor supresji HPTA), ocena szpitalna jeśli wzrasta bilirubina.",
      "purpose": "Monitor wątrobowy KRYTYCZNY. Przypadki SARM-induced DILI o szybkiej progresji udokumentowane (Hilal 2020 – piorunujące po 9 tygodniach)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia dawka +4-7 dni start PCT (Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni)",
      "markers": "Panel wątrobowy (normalizacja), hormon (Total T, LH, FSH, E2, SHBG), odzyskanie lipidów.",
      "purpose": "Weryfikacja odzyskania HPTA + normalizacji wątrobowej. Pełne odzyskanie 3-6 miesięcy."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "RAD-140 cruise NIE standard – tylko użycie cykliczne",
      "markers": "N/A",
      "purpose": "RAD-140 maksimum 8 tygodni cyklu; cruise NIE zalecany z powodu kumulatywnej hepatotoksyczności."
    }
  },
  "anecdote": "Raporty anegdotyczne opisują RAD-140 jako jeden z bardziej silnych SARMów, użytkownicy zgłaszają, że odczuwa się go bliżej 'łagodnego sterydu' niż typowego SARM. Doniesienia społeczności opisują dobre rezultaty z protokołów takich jak 20 mg RAD-140 przez 6 tygodni wraz z niską bazą testosteronu około 350 mg/tydzień. Większość doświadczonych użytkowników nie zaleca stosowania SARMów bez bazy testosteronowej, choć jest to technicznie możliwe. Pomimo tego, że jest reklamowany jako 'selektywny', RAD-140 tłumi naturalny testosteron. Jest solidnym budulcem mięśni mg-na-mg, czasem zgłaszany jako silniejszy niż Anavar. Ponieważ jest przyjmowany doustnie i podlega metabolizmowi wątrobowemu, negatywnie wpływa na lipidy i dodaje obciążenie wątroby, podobnie jak inne związki doustne. Niektórzy użytkownicy zgłaszają agresję i bezsenność, choć jest to wysoce indywidualne. Wypadanie włosów również było zgłaszane. Niższe dawki mogą być bardzo skuteczne ze względu na wysokie powinowactwo do receptora androgenowego."
}
