// Phase C multi-variant entry (oral Acetate + injectable Enanthate). Sources:
// Bayer Primobolan Depot SmPC (DE/ES), Schering AG historical literature
// (Methenolone acetate 1962, Methenolone enanthate Primobolan Depot 1962),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15248788,
// Schänzer 1996 PMID 8674183 (detection).

export default {
  "id": "primobolan",
  "sideEffects": [
    { "hu": "Androgén bőr- és hajhatások: a methenolone DHT-strukturális analóg, ezért androgenetikus alopeciára hajlamosaknál felgyorsult hajhullás, valamint acne és zsíros bőr fordulhat elő (5-alfa-reduktáz-gátló, pl. finasterid NEM véd, mert a vegyület már 5-alfa-redukált).", "en": "Androgenic skin and hair effects: methenolone is a DHT structural analog, so it can accelerate hair loss in those genetically prone to androgenetic alopecia, plus acne and oily skin (5-alpha-reductase inhibitors like finasteride do NOT protect, as the molecule is already 5-alpha-reduced).", "pl": "Androgenne efekty skórne i włosowe: methenolon to strukturalny analog DHT, więc może przyspieszać wypadanie włosów u osób z predyspozycją do łysienia androgenowego, a także trądzik i przetłuszczanie skóry (inhibitory 5-alfa-reduktazy, np. finasteryd, NIE chronią, bo cząsteczka jest już 5-alfa-zredukowana)." },
    { "hu": "Virilizáció nőknél: bár a methenolone az egyik legalacsonyabb androgén potenciálú AAS, a virilizáció kockázata NEM nulla – magasabb dózisnál hangmélyülés, hirsutizmus, klitorisz-megnagyobbodás és menstruációs zavar jelentkezhet, ami részben irreverzibilis. Bármilyen virilizációs tünet azonnali leállást indokol.", "en": "Virilization in women: although methenolone has one of the lowest androgenic potentials among AAS, the risk is NOT zero, higher doses can cause voice deepening, hirsutism, clitoral enlargement and menstrual disruption, some of which is irreversible. Any virilization sign warrants immediate cessation.", "pl": "Wirylizacja u kobiet: choć methenolon ma jeden z najniższych potencjałów androgennych wśród AAS, ryzyko NIE jest zerowe, wyższe dawki mogą powodować obniżenie głosu, hirsutyzm, powiększenie łechtaczki i zaburzenia miesiączkowania, częściowo nieodwracalne. Każdy objaw wirylizacji wymaga natychmiastowego przerwania." },
    { "hu": "Kedvezőtlen lipidprofil: a HDL-koleszterin csökken és az LDL emelkedhet (kb. 15-25% HDL-esés várható ciklus alatt). A hatás az injektábilis enantátnál a hosszabb, kumulatív expozíció miatt tartósabb lehet, mint a rövid felezésű orális acetátnál.", "en": "Adverse lipid profile: HDL cholesterol falls and LDL may rise (roughly 15-25% HDL drop expected during a cycle). The effect can be more sustained with injectable enanthate due to longer cumulative exposure than with the short-half-life oral acetate.", "pl": "Niekorzystny profil lipidowy: cholesterol HDL spada, a LDL może wzrosnąć (oczekiwany spadek HDL o ok. 15-25% podczas cyklu). Efekt może być trwalszy przy iniekcyjnym enantacie z powodu dłuższej, kumulacyjnej ekspozycji niż przy doustnym octanie o krótkim okresie półtrwania." },
    { "hu": "HPTA-szuppresszió és termékenységi zavar: a methenolone elnyomja a hipotalamusz-hipofízis-tengelyt, csökkenti az LH/FSH-szintet, ezzel a saját tesztoszteron-termelést és spermiogenezist. Bár enyhébb, mint a tesztoszteron-bázisú szteroidoknál, férfiaknál ciklus utáni PCT (pl. clomifén + tamoxifen) ajánlott a helyreálláshoz.", "en": "HPTA suppression and impaired fertility: methenolone suppresses the hypothalamic-pituitary axis, lowering LH/FSH and thereby endogenous testosterone production and spermatogenesis. Though milder than with testosterone-based steroids, post-cycle therapy (e.g. clomiphene + tamoxifen) is advised in men for recovery.", "pl": "Supresja HPTA i upośledzona płodność: methenolon hamuje oś podwzgórze-przysadka, obniżając LH/FSH, a przez to endogenną produkcję testosteronu i spermatogenezę. Choć łagodniejsza niż przy sterydach na bazie testosteronu, u mężczyzn zalecana jest terapia po cyklu (np. klomifen + tamoksyfen) dla regeneracji." },
    { "hu": "Orális acetát forma: a hepatotoxicitás alacsony (NEM 17-alfa-alkilált), de a nagyon alacsony orális biohasznosulás (~6%) miatt szükséges magas napi dózis (50-100 mg) mellett enyhe májenzim-emelkedés (ALT/AST) előfordulhat, ezért a májpanel monitorozása indokolt.", "en": "Oral acetate form: hepatotoxicity is low (NOT 17-alpha-alkylated), but because of the very low oral bioavailability (~6%) the high daily dose required (50-100 mg) can cause mild liver enzyme elevation (ALT/AST), so liver panel monitoring is warranted.", "pl": "Forma doustna octanu: hepatotoksyczność jest niska (NIE 17-alfa-alkilowany), ale z powodu bardzo niskiej biodostępności doustnej (~6%) wymagana wysoka dawka dzienna (50-100 mg) może powodować łagodny wzrost enzymów wątrobowych (ALT/AST), więc monitorowanie panelu wątrobowego jest uzasadnione." },
    { "hu": "Injektábilis enantát forma: az olajos IM-injekció helyi reakciókat okozhat – injekció-utáni fájdalom (PIP), bőrpír, duzzanat, valamint nem steril technikánál tályog vagy fertőzés kockázata.", "en": "Injectable enanthate form: the oily IM injection can cause local reactions, post-injection pain (PIP), redness, swelling, and with non-sterile technique a risk of abscess or infection.", "pl": "Forma iniekcyjna enantatu: olejowa iniekcja IM może powodować reakcje miejscowe, ból poiniekcyjny (PIP), zaczerwienienie, obrzęk, a przy niesterylnej technice ryzyko ropnia lub zakażenia." },
    { "hu": "Prosztata-stimuláció: DHT-analógként a methenolone stimulálhatja az androgénfüggő prosztataszövetet, ami idősebb férfiaknál prosztata-megnagyobbodást (BPH-tünetek) súlyosbíthat; PSA-monitorozás 30-40 év felett javasolt.", "en": "Prostate stimulation: as a DHT analog, methenolone can stimulate androgen-dependent prostate tissue, potentially worsening prostate enlargement (BPH symptoms) in older men; PSA monitoring is advised above age 30-40.", "pl": "Stymulacja prostaty: jako analog DHT methenolon może stymulować androgenozależną tkankę prostaty, potencjalnie nasilając przerost prostaty (objawy BPH) u starszych mężczyzn; monitorowanie PSA zalecane powyżej 30-40 roku życia." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a methenolone androgén hatása teratogén, a női magzat virilizációját okozhatja – terhesség alatt és szoptatáskor abszolút ellenjavallt.", "en": "Pregnancy and breastfeeding: methenolone's androgenic action is teratogenic and can virilize a female fetus, absolutely contraindicated during pregnancy and lactation.", "pl": "Ciąża i karmienie piersią: androgenne działanie methenolonu jest teratogenne i może wirylizować płód żeński, bezwzględnie przeciwwskazane w ciąży i podczas laktacji." },
    { "hu": "Prosztata- vagy emlőkarcinóma (férfiaknál): androgénfüggő daganatok esetén az AAS-ek elősegíthetik a tumor növekedését, ezért ismert vagy gyanított prosztata- vagy férfi-emlőrák ellenjavallat.", "en": "Prostate or breast carcinoma (in men): in androgen-dependent tumors AAS can promote tumor growth, so known or suspected prostate or male breast cancer is a contraindication.", "pl": "Rak prostaty lub piersi (u mężczyzn): w guzach androgenozależnych AAS mogą sprzyjać wzrostowi nowotworu, więc znany lub podejrzewany rak prostaty lub piersi u mężczyzn jest przeciwwskazaniem." },
    { "hu": "Androgenetikus alopecia családi anamnézise: a DHT-strukturális analóg felgyorsítja a genetikailag determinált hajhullást, és ezt 5-alfa-reduktáz-gátló sem védi ki.", "en": "Family history of androgenetic alopecia: as a DHT structural analog it accelerates genetically determined hair loss, which cannot be prevented even by a 5-alpha-reductase inhibitor.", "pl": "Rodzinna historia łysienia androgenowego: jako strukturalny analog DHT przyspiesza genetycznie uwarunkowane wypadanie włosów, czego nie zapobiega nawet inhibitor 5-alfa-reduktazy." },
    { "hu": "Kardiovaszkuláris betegség vagy diszlipidémia: a HDL-csökkentő, LDL-emelő hatás miatt meglévő szívbetegség, magas LDL vagy kontrollálatlan magas vérnyomás esetén kerülendő.", "en": "Cardiovascular disease or dyslipidemia: due to the HDL-lowering, LDL-raising effect, it should be avoided with pre-existing heart disease, high LDL or uncontrolled hypertension.", "pl": "Choroba sercowo-naczyniowa lub dyslipidemia: z powodu obniżania HDL i podwyższania LDL należy unikać przy istniejącej chorobie serca, wysokim LDL lub niekontrolowanym nadciśnieniu." },
    { "hu": "Jelentős májfunkciós eltérés (különösen az orális acetát formánál): meglévő emelkedett ALT/AST vagy aktív májbetegség esetén a magas dózisú orális forma kerülendő; az alkohol és a paracetamol egyidejű használata fokozza a terhelést.", "en": "Significant liver dysfunction (especially the oral acetate form): with pre-existing elevated ALT/AST or active liver disease the high-dose oral form should be avoided; concurrent alcohol and paracetamol increase the burden.", "pl": "Znaczące zaburzenie czynności wątroby (zwłaszcza forma doustna octanu): przy istniejącym podwyższeniu ALT/AST lub czynnej chorobie wątroby należy unikać wysokodawkowej formy doustnej; jednoczesne spożycie alkoholu i paracetamolu zwiększa obciążenie." },
    { "hu": "Egyidejű kumarin-típusú antikoaguláns (pl. warfarin): az AAS-ek fokozhatják az antikoaguláns hatást és a vérzéskockázatot, ami szoros INR-monitorozást és dóziskorrekciót igényel.", "en": "Concurrent coumarin-type anticoagulants (e.g. warfarin): AAS can potentiate the anticoagulant effect and bleeding risk, requiring close INR monitoring and dose adjustment.", "pl": "Jednoczesne stosowanie antykoagulantów kumarynowych (np. warfaryny): AAS mogą nasilać działanie przeciwzakrzepowe i ryzyko krwawienia, co wymaga ścisłego monitorowania INR i korekty dawki." },
    { "hu": "Versenysport WADA-tesztelés alatt: a methenolone egész évben tiltott (S1.1), és az injektábilis enantát metabolitjai akár 4-6 hónapig kimutathatók a vizeletből – tesztelt sportolónak ellenjavallt.", "en": "Competitive sport under WADA testing: methenolone is banned year-round (S1.1), and the injectable enanthate's metabolites are detectable in urine for up to 4-6 months, contraindicated for tested athletes.", "pl": "Sport wyczynowy pod kontrolą WADA: methenolon jest zakazany przez cały rok (S1.1), a metabolity iniekcyjnego enantatu są wykrywalne w moczu nawet 4-6 miesięcy, przeciwwskazany dla testowanych sportowców." }
  ],
  "name": "Primobolan (Methenolone)",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methenolone, 1-metil-DHT-származék \"enyhe\" AAS, két ester-formátumban: orális acetate (rövid, alacsony biodostupnošć) és injektábilis enanthate (Bayer Primobolan Depot, Németországban + Spanyolországban Rx). Klasszikus cutting-szteroid.",
  "description": "A Primobolan (Methenolone) Schering AG által 1962-ben szintetizált 1-metil-dihidrotesztoszteron-származék. Két forgalmazott forma: az acetát-észter (Primobolan, orális tabletta, eredetileg 5 mg) és az enantát-észter (Primobolan Depot, IM olajos injekció, 100 mg/ml). Az eredeti FDA-jóváhagyás (1962) anaemia, osteoporosis és súlyos debilitáló betegség recovery indikációkra szólt; az USA-piacról 1965-re kivonva, viszont Bayer ma is gyártja Primobolan Depot néven Németországban és Spanyolországban Rx-szer formájában (anémia, premature infant catabolic states). Anabolikus:androgén arány 88:44, ami közepes anabolikus és alacsony androgén profilt jelent. NEM 17α-alkilált, így a hepatotoxicitás minimális. NEM aromatizál. AR-affinitása alacsony (~28% testosterone-hoz képest in vitro), DE az izom-szövetben az SHBG-szuppresszió révén indirekt módon növeli a szabad-T-szintet. Az orális acetát formátum biodostupnošć alig 6% (a 17β-OH-acetát-észter gyors hepatic metabolism), így extrém magas dózis szükséges (50-100 mg/nap) ahhoz hogy az injektábilis 100 mg/hét enantáttal egyenértékű hatás legyen. WADA tiltott egész évben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista, 1-metil-DHT, NEM aromatizál"
    },
    {
      "label": "Anabolikus:Androgén",
      "value": "88:44"
    },
    {
      "label": "Felezési idő",
      "value": "4-6 h (Ac orális), 5-7 nap (Enan IM)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 h (Ac orális), 48-72 h (Enan IM)"
    },
    {
      "label": "Jogi státusz",
      "value": "Bayer Primobolan Depot DE/ES Rx, USA: discontinued"
    }
  ],
  "mechanism": "1-metil-dihidrotesztoszteron AR-agonista. Az 1-metil-csoport — kifejezetten Δ1-pozícióban — gátolja a 17β-HSD-oxidatív lebontást és kifejezetten ellenálló a hepatikus metabolizmusnak. A 17β-OH-acetát észter (orális forma) gyorsan hidrolizál a portális vénában szabad methenolonra, amelyet aztán a máj gyorsan metabolizál (alacsony 6% biodostupnošć). Az enantát észter (Depot forma) IM-injekcióval depot-tárolt, lassú hidrolízis ad stabil plazma-szintet. NEM 17α-alkilált → minimális hepatikus stressz. NEM CYP19 szubsztrát → NEM aromatizál ösztrogénné.",
  "legalStatus": "USA: 1965 után discontinued (FDA), Schedule III kontrollált. DE/ES: Bayer Primobolan Depot Rx-szer (anémia, premature infant catabolic states). HU/PL: vény nélkül illegális, kontrollált AAS. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "1-2 h (Ac oral), 48-72 h (Enan IM)",
  "halfLife": "4-6 h (Ac oral), 5-7 d (Enan IM)",
  "halfLifeActive": "~4-6 h szabad methenolone (Ac után), depot-driven ~24 h (Enan után)",
  "interactionsWith": [
    "testosterone",
    "anastrozole",
    "finasteride",
    "warfarin"
  ],
  "aromatization": "Nem — 1-metil-DHT struktúra, NEM CYP19 szubsztrát egyik észternél sem; klinikailag E2-emelkedés nem várható (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált enantát formánál minimális hepatic stressz. Az orális acetát formánál is csak enyhe, mert az 1-metil-csoport NEM 17α (csak az 1-metil ad orális stabilitást), DE a magas dózis (50-100 mg/nap) miatt mégis monitor szükséges (Hartgens-Kuipers 2004 PMID 15248788)",
  "wadaStatus": "banned",
  "androgenicRatio": "88:44",
  "bindingAffinity": "Közepes AR-affinitás (~28% testosterone-hoz képest in vitro). Magas SHBG-affinitás (DHT-strukturális analóg) → indirekt szabad-T-emelkedés.",
  "detectionWindow": "Methenolone-metabolitok (1-metil-5α-androsztán-3-on metabolitcsalád) vizeletből: orális acetát 4-5 hét, injektábilis enantát 4-6 hónap (Schänzer 1996 PMID 8674183). WADA-akkreditált GC-MS és LC-MS/MS.",
  "benefits": [
    "Vaszkuláris, kemény esztétikai megjelenés (alacsony víz-retenció)",
    "NEM aromatizál → nincs E2-mellékhatás",
    "Alacsony hepatotoxicitás (különösen az enantát formánál)",
    "Indirekt szabad-T-emelkedés SHBG-elfoglalás révén",
    "Eredeti orvosi indikáció: anémia, premature infant catabolic states (Bayer)"
  ],
  "quickStart": [
    "Realisztikus elvárások: a Primobolan ENYHE AAS, ne várj Dianabol-szerű 10 kg/4 hét eredményt",
    "Orális Ac dózis MAGAS (50-100 mg/nap) az alacsony biodostupnošć miatt — minőségi forrás kritikus",
    "DHT-strukturális analóg → SZIGORÚ hajhullás-kockázat genetikai prediszpozíció esetén",
    "Lipid panel (HDL/LDL) baseline + 4-hét + post-cycle kötelező",
    "PCT (Clomid + Nolvadex 4 hét) szükséges férfiaknál a HPTA-szuppresszió miatt"
  ],
  "expectations": [
    {
      "label": "Első hét",
      "body": "Orális Ac onset 1-2 h, injektábilis Enan 48-72 h. Akut esztétikai változás nem várható, plasma steady-state Ac 2-3 nap, Enan 3-4 hét."
    },
    {
      "label": "4-6. hét",
      "body": "Szubjektíven \"keményebb\" izom-tónus, vaszkuláris venosity. SHBG csökken, lean mass gyarapodás 1-2 kg (NEM extrém — a Primobolan enyhe AAS)."
    },
    {
      "label": "10-12. hét vége",
      "body": "Maximum esztétikai \"hardening\" effekt. HDL ~15-25% csökkenés várható. Lean mass-megőrzés cutting alatt (kalória-deficit ellenére minimal izom-vesztés)."
    }
  ],
  "quality": {
    "pure": [
      "Bayer Primobolan Depot original Rx (DE/ES, 100 mg/ml, 1ml ampulla) — autentikus enantát forrás",
      "UGL acetát-tabletta: HPLC-tesztelt forrás kötelező, gyakran hamisított (Anavar vagy Winstrol helyettesítés)"
    ],
    "caution": [
      "Orális Ac magas dózis (50-100 mg/nap) — költséges és minőség-kritikus",
      "Hajhullás-acceleráció androgenetikus alopecia esetén (DHT-strukturális analóg)",
      "Lipid-zavar: HDL csökkenés (mérsékelt)",
      "Hangmélyülés és hirsutizmus nőknél (alacsonyabb dózisnál is virilizációs kockázat marad)"
    ],
    "avoid": [
      "Androgenetikus alopecia családi anamnézis",
      "Prosztata-hipertrófia, prosztatakarcinóma (DHT-analóg)",
      "Női felhasználás magasabb dózisnál (>10 mg/nap orális Ac, >50 mg/hét Enan)",
      "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL)",
      "Bulking/tömegnövelő cél — a Primobolan cutting és kondicionáló szteroid, NEM tömeg-építő"
    ]
  },
  "interactions": [
    "Testosterone-base stack: standard, fokozza az izom-protein-szintézist; ester-half-life matching ajánlott (Test-Prop+Primo-Ac vagy Test-Enan+Primo-Enan)",
    "Anastrozole (AI): NEM szükséges Primo-only ciklusnál (nem aromatizál); Test-stack mellett csak labor-igazolt magas E2 esetén",
    "Finasteride: NEM gátolja a Primobolan-hatást (Primobolan már 5α-redukált), NEM véd a scalp-DHT ellen — értelmetlen",
    "Warfarin: antikoaguláns hatás fokozódhat, INR monitor"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-554.",
      "pmid": "15248788"
    },
    {
      "title": "Metabolism of anabolic androgenic steroids",
      "authors": "Schänzer W.",
      "journal": "Clin Chem. 1996;42(7):1001-20.",
      "pmid": "8674183"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    }
  ],
  "faq": [
    {
      "q": "Miért olyan drága a Primobolan?",
      "a": "Két ok: (1) az alapanyag (methenolone) szintézise drága, kevés UGL labor tudja tisztán előállítani; (2) hamisítás extrém gyakori — sok UGL Primo valójában Anavar vagy Winstrol. Bayer Primobolan Depot eredeti DE/ES Rx ár ~150-250 EUR/ml feketepiacon. Az orális Ac még drágább, mert a magas dózisigény (50-100 mg/nap) miatt napi költség jelentős."
    },
    {
      "q": "Tényleg \"enyhe\" AAS, mint mondják?",
      "a": "Igen, a klasszikus AAS-ek között az egyik legszelídebb hepatotoxicitási és kardiovaszkuláris profilját tekintve. DE az enyheség miatt NEM várhatsz spektakuláris izomtömeg-növekedést — a Primobolan cutting és kondicionáló szer, NEM bulking. Pope-Kanayama 2014 kiemeli: a felhasználói várakozás-realitás közötti gap az egyik fő frusztráció-forrás."
    },
    {
      "q": "Miért alacsony az orális acetát biodostupnošć?",
      "a": "Az acetát-észter (17β-OH-acetát) GYORSAN hidrolizál a portális vénában szabad methenolonra, amelyet aztán a máj gyorsan metabolizál (NEM 17α-alkilált, így nincs first-pass-védettség). Ezért az orális Primobolan biodostupnošć alig 6% — összehasonlítva pl. az Anavar 30-40%-os biodostupnošć-ével a 17α-alkilált védettség miatt."
    },
    {
      "q": "Miért használnak Primobolant nők is?",
      "a": "Alacsony androgén potenciál (44% testosterone-hoz képest) miatt a virilizáció kockázata az AAS-ek közül az alacsonyabbak közé tartozik (Anavar és Primobolan a klasszikus \"női-barát\" AAS-páros). DE a virilizáció NEM nulla — magasabb dózisnál (>10 mg/nap orális vagy >50 mg/hét Enan) hangmélyülés és hirsutizmus dokumentált. Bármilyen virilizáció-tünet azonnali ciklus-megszakítás."
    },
    {
      "q": "Igaz, hogy Arnold Schwarzenegger használta?",
      "a": "Igen, Arnold Schwarzenegger több interjúban beismerte hogy az 1970-80-as évek bodybuilding versenyei (Mr. Olympia) alatt Primobolant és Dianabolt használt, akkor még legálisan elérhető Rx-szerekként. Ez a hagyomány tette a Primobolant \"klasszikus pro-bodybuilder szteroiddá\" a kultúrában."
    }
  ],
  "related": [
    "masteron",
    "anavar-info",
    "testosterone-info",
    "winstrol-info",
    "trenbolone-info"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG, Prolaktin. Lipid panel (LDL/HDL/TG). Hepatikus: ALT/AST/GGT/ALP. CBC + hematokrit. Vesefunkció. PSA (30 év felett).",
      "purpose": "Lipid baseline és SHBG-baseline kritikus. A Primobolan NEM aromatizál, így E2-baseline-ra a stack-társ Test miatt figyelni."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4-6. hetén, ciklus felénél",
      "markers": "Lipid panel (HDL csökkenés mérsékelt), E2 (ha Test-stack), SHBG, hepatikus panel (orális Ac-nál különösen), vérnyomás napló.",
      "purpose": "HDL <35 mg/dL kardiovaszkuláris riasztó. ALT/AST <2x felső normál Primo-only ciklusnál várható (orálisnál esetenként magasabb). E2 a stack-társ Test alapján."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó dózis: orális Ac +1-2 nap, IM Enan +14-21 nap PCT-indítás. PCT 4. hetén és 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), hepatikus panel.",
      "purpose": "HPTA-helyreállítás verifikálása. SHBG-recovery típusosan 4-6 héten belül. Primobolan-only ciklusnál PCT enyhébb mint Test-tartalmúnál (kevesebb HPTA-szuppresszió)."
    },
    "cruise": {
      "label": "Cruise alatt (Primobolan-tartalmú cruise NEM standard)",
      "timing": "Primo-cruise atipikus; ha cruise-on tartja, 6-8 hetente monitoring",
      "markers": "Lipid panel, SHBG, Total T, E2, vérnyomás napló, PSA.",
      "purpose": "Tartós Primobolan-expozíció a lipid-zavart kumulálja, prosztata-AR-aktivációt halmoz. TRT-Test cruise mellett a Primobolan tipikusan kihagyott (esztétikai effekt csak contest-prep alatt)."
    }
  },
  "variants": [
    {
      "id": "ac-oral",
      "routeId": "ac-oral",
      "routeLabel": {
        "hu": "Methenolone Acetate (Primobolan-Ac, orális tabletta)",
        "en": "Methenolone Acetate (Primobolan-Ac, oral tablet)",
        "pl": "Methenolon Acetate (Primobolan-Ac, tabletka doustna)"
      },
      "routeNote": {
        "hu": "Klasszikus 'kozmetikai' AAS orális ága — alacsony hepatotoxicitás (NEM 17α-alkilált), nincs aromatizáció (1-metil-DHT). Hátulütő: alacsony orális bioavailability (~6%) miatt magas napi dózis kell (50-100 mg = 5-10 tabletta). A leggyakrabban hamisított AAS-tabletta (Anavar/Winstrol helyettesítés) — HPLC-tesztelés ABSZOLÚT KÖTELEZŐ. Női-barát alacsony dózisban (5-10 mg/nap).",
        "en": "The oral arm of the classic 'cosmetic' AAS — low hepatotoxicity (NOT 17α-alkylated), no aromatization (1-methyl-DHT). Drawback: low oral bioavailability (~6%) requires high daily dose (50-100 mg = 5-10 tablets). The most commonly counterfeited AAS tablet (Anavar/Winstrol substitution) — HPLC testing ABSOLUTELY MANDATORY. Female-friendly at low doses (5-10 mg/day).",
        "pl": "Doustna część klasycznego 'kosmetycznego' AAS — niska hepatotoksyczność (NIE 17α-alkilowany), brak aromatyzacji (1-metyl-DHT). Wada: niska biodostępność doustna (~6%) wymaga wysokiej dawki dziennej (50-100 mg = 5-10 tabletek). Najczęściej podrabiana tabletka AAS (substytut Anavar/Winstrol) — testowanie HPLC ABSOLUTNIE OBOWIĄZKOWE. Przyjazna dla kobiet w niskich dawkach (5-10 mg/dzień)."
      },
      "image": "/performance/tablet-pile-white.png",
      "halfLife": "4-6 h (parent methenolone, no active metabolite)",
      "halfLifeActive": "4-6 h",
      "bioavailability": "~6% (alacsony — az acetát-észter gyors portális hidrolízis után parent methenolone hepatic metabolism; ezért magas dózisigény)",
      "onsetTime": {
        "hu": "1-2 h (orális, fast-absorption)",
        "en": "1-2 h (oral, fast-absorption)",
        "pl": "1-2 h (doustnie, szybkie wchłanianie)"
      },
      "dosing": {
        "hu": "50-100 mg/nap, 2-3x osztva (rövid felezés). Tipikus cutting dózis 75 mg/nap, max 100 mg/nap. Ciklus max 8 hét. Női dózis 5-10 mg/nap maximum (virilizációs küszöb).",
        "en": "50-100 mg/day, split 2-3× (short half-life). Typical cutting dose 75 mg/day, max 100 mg/day. Cycle max 8 weeks. Female dose 5-10 mg/day maximum (virilization threshold).",
        "pl": "50-100 mg/dzień, podzielone 2-3× (krótki okres półtrwania). Typowa dawka cięcia 75 mg/dzień, maks 100 mg/dzień. Cykl maks 8 tygodni. Dawka dla kobiet maks 5-10 mg/dzień (próg wirylizacji)."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/day",
        "note": {
          "hu": "50-100 mg/nap, 2-3x osztott (rövid felezés). Max 8 hét ciklus. TUDCA 500 mg/nap opcionális (alacsony hepatotoxicitás). Női dózis max 5-10 mg/nap. PCT utolsó tabletta +1-2 nap.",
          "en": "50-100 mg/day, 2-3× split (short half-life). Max 8 week cycle. TUDCA 500 mg/day optional (low hepatotoxicity). Female dose max 5-10 mg/day. PCT starts last tablet +1-2 days.",
          "pl": "50-100 mg/dzień, podzielone 2-3× (krótki okres półtrwania). Cykl maks 8 tygodni. TUDCA 500 mg/dzień opcjonalnie (niska hepatotoksyczność). Dawka dla kobiet maks 5-10 mg/dzień. PCT od ostatniej tabletki +1-2 dni."
        }
      },
      "hepatotoxicity": "low-moderate",
      "aromatization": "none",
      "androgenicRatio": "88:44",
      "legalStatus": "Discontinued Rx mindenhol; csak UGL piacon elérhető. EU/HU/PL/USA: vény nélkül illegális, WADA tiltott.",
      "detectionWindow": "Vizelet: 4-5 hét (rövidebb mint az enantátnál, gyors clearance). WADA-akkreditált GC-MS és LC-MS/MS.",
      "quality": {
        "pure": [
          "Tiszta fehér, jelölt tabletta (25 mg vagy 50 mg gyakori UGL dosing)",
          "HPLC-tesztelés ABSZOLÚT KÖTELEZŐ — a Primobolan-Ac a leggyakrabban hamisított AAS-tabletta (Anavar/Winstrol helyettesítés)"
        ],
        "caution": [
          "Magas napi dózisigény (50-100 mg/nap) — gyakran 5-10 tabletta szétosztva napközben",
          "Hajhullás-acceleráció androgenetikus alopecia esetén (DHT-származék)",
          "Lipid-zavar: HDL csökkenés (mérsékelt)",
          "Költség: orális Ac napi költség 5-15 EUR UGL minőségtől függően — drágább mint sok más orális AAS"
        ],
        "avoid": [
          "Bármilyen meglévő ALT/AST emelkedés (orális forma magas dózisigény miatt)",
          "Alkohol, paracetamol egyidejű használata",
          "Hamisítás-kockázat magas — ha nincs HPLC-tesztelt forrás, NE használd",
          "Női felhasználás >10 mg/nap (virilizációs kockázat)"
        ]
      },
      "interactions": [
        "Test-Prop stack: ester-half-life matching, EOD injekciós Test + napi Primo-Ac",
        "Anavar stack: együttes 17α-alkilált + 1-metil orális kombináció, hepatikus stressz fokozódik",
        "PCT (Clomid + Nolvadex 4 hét) utolsó tabletta +1-2 nap után indul"
      ]
    },
    {
      "id": "enan-oil",
      "routeId": "enan-oil",
      "routeLabel": {
        "hu": "Methenolone Enanthate (Primobolan Depot, IM olajos)",
        "en": "Methenolone Enanthate (Primobolan Depot, IM oil)",
        "pl": "Methenolon Enanthate (Primobolan Depot, IM olejowy)"
      },
      "routeNote": {
        "hu": "A kozmetikai AAS preferált formája — IM bypass-olja a first-pass-t ⇒ a legalacsonyabb hepatotoxicitású AAS-ek egyike, női-barát low-dose mellett is. ~5-7 napos felezés ⇒ heti 1-2 injekció, steady-state 3-4 hét. Extra hosszú detection window (4-6 hó) — WADA-tesztelt versenyzőnek tilos. Bayer Primobolan Depot ár: feketepiacon 150-250 EUR/ml (extrém drága) — UGL alternatíva gyakori, de hamisítás magas.",
        "en": "The preferred form of the cosmetic AAS — IM bypasses first-pass ⇒ one of the lowest-hepatotoxicity AAS, female-friendly even at low dose. ~5-7 day half-life ⇒ once/twice weekly injection, steady-state 3-4 weeks. Extra-long detection window (4-6 months) — forbidden for WADA-tested athletes. Bayer Primobolan Depot price: 150-250 EUR/ml on the black market (extremely expensive) — UGL alternative common, but counterfeiting is high.",
        "pl": "Preferowana forma kosmetycznego AAS — IM omija first-pass ⇒ jeden z AAS o najniższej hepatotoksyczności, przyjazny dla kobiet nawet w niskich dawkach. ~5-7-dniowy okres półtrwania ⇒ iniekcja raz/dwa razy w tygodniu, stan stacjonarny 3-4 tygodnie. Bardzo długie okno detekcji (4-6 miesięcy) — zakazany dla sportowców testowanych WADA. Cena Bayer Primobolan Depot: 150-250 EUR/ml na czarnym rynku (bardzo drogo) — alternatywa UGL powszechna, ale podróbki są wysokie."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "5-7 nap (Enantát észter; szabad methenolone t½ ~24 h hidrolízis után)",
      "halfLifeActive": "~24 h (depot-driven)",
      "bioavailability": "~95-100% (IM injekció bypass-olja a first-pass-t; enantát észter slow hidrolízis ~5-7 nap)",
      "onsetTime": {
        "hu": "48-72 h (IM, enantát slow-acting; steady-state 3-4 hét)",
        "en": "48-72 h (IM, enanthate slow-acting; steady-state 3-4 weeks)",
        "pl": "48-72 h (IM, enantat wolno działający; stan stacjonarny 3-4 tygodnie)"
      },
      "dosing": {
        "hu": "300-700 mg/hét IM, heti 1-2x. Tipikus cutting dózis 400-500 mg/hét. Minimum 10 hét ciklus a steady-state miatt. Női dózis 50-100 mg/hét maximum. PCT utolsó injekció +14-21 nap.",
        "en": "300-700 mg/week IM, 1-2× weekly. Typical cutting dose 400-500 mg/week. Minimum 10 week cycle due to steady-state. Female dose 50-100 mg/week maximum. PCT starts last injection +14-21 days.",
        "pl": "300-700 mg/tydzień IM, 1-2× w tygodniu. Typowa dawka cięcia 400-500 mg/tydzień. Minimum 10 tygodni cyklu z powodu stanu stacjonarnego. Dawka dla kobiet maks 50-100 mg/tydzień. PCT od ostatniej iniekcji +14-21 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/week",
        "note": {
          "hu": "300-700 mg/hét, heti 1-2x IM. Minimum 10 hét ciklus. TUDCA NEM szükséges (legalacsonyabb hepatotoxicitás). Női dózis max 50-100 mg/hét. PCT utolsó injekció +14-21 nap.",
          "en": "300-700 mg/week, 1-2× weekly IM. Minimum 10 week cycle. TUDCA not required (lowest hepatotoxicity). Female dose max 50-100 mg/week. PCT starts last injection +14-21 days.",
          "pl": "300-700 mg/tydzień, 1-2× w tygodniu IM. Minimum 10 tygodni cyklu. TUDCA niewymagana (najniższa hepatotoksyczność). Dawka dla kobiet maks 50-100 mg/tydzień. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 500000,
      "hepatotoxicity": "very-low",
      "aromatization": "none",
      "androgenicRatio": "88:44",
      "legalStatus": "Bayer Primobolan Depot DE/ES Rx-szer (anémia, premature infant catabolic states). EU/HU/PL: import-Rx ritkán, többnyire UGL. WADA tiltott.",
      "detectionWindow": "Vizelet: 4-6 hónap (extra hosszú, enantát ester + 1-metil metabolitcsalád). WADA-akkreditált GC-MS és LC-MS/MS.",
      "quality": {
        "pure": [
          "Bayer Primobolan Depot 100 mg/ml, 1ml ampulla — autentikus forrás holografikus jelöléssel",
          "UGL alternatíva: tiszta sárgás-arany olaj, 10ml fiola, HPLC-tesztelt forrás kötelező"
        ],
        "caution": [
          "Bayer Depot ár: ~150-250 EUR/ml feketepiacon (extrém drága)",
          "UGL hamisítás: gyakran Test-Enan vagy Nandrolone-Decanoate helyettesítés",
          "Lipid-zavar: HDL csökkenés (mérsékelt, hosszabb expozíció miatt kumulatívabb mint orális Ac-nál)",
          "Extra hosszú detection window: WADA-tesztelt verseny <6 hónappal a tervezett vég után tilos"
        ],
        "avoid": [
          "Rövid (4-6 hét) ciklus NEM hatékony — Enan steady-state 3-4 hét után",
          "Több mint 12-14 hét folyamatos ciklus (HPTA-szuppresszió súlyos)",
          "WADA-tesztelt versenyező a teljes off-season alatt (detection window 6 hónap)",
          "Kardiovaszkuláris kockázat, női felhasználás (>50 mg/hét virilizáció)"
        ]
      },
      "interactions": [
        "Test-Enan stack: ester-half-life matching, heti 1-2x injekció",
        "Tren-Enan stack: 'long-ester cutting' 10-12 hét",
        "PCT (Clomid + Nolvadex 4-6 hét) utolsó Enan-injekció +14-21 nap után indul"
      ]
    }
  ],
  "defaultVariant": "enan-oil",
  "anecdote": "A Primobolan-t az anekdotikus leírások szerint kiváló másodlagos anabolikumnak tartják a legtöbb ciklushoz, gyakran magas dózisú tesztoszteronnal párosítva a szinergia érdekében, mivel maga a Primobolan érdemben nem aromatizálódik és segíthet mérsékelni az ösztrogén-terhelést. Inkább 'kozmetikai' szteroidként ismert, a felhasználók száraz, kemény, esztétikus megjelenésről számolnak be, nem pedig drámai tömegnövekedésről. Közösségi beszámolók szerint nagyon jól tolerálható, viszonylag enyhe mellékhatás-profillal rendelkezik, és mind tömegnövelő, mind szárító fázisokban működik. A fő hátrányai a magas ára és a lassú felfutás, jellemzően Enanthate észter formájában jelenik meg. Összességében a Primobolan-t megalapozottnak tartják egy jól megtervezett ciklus részeként, de általában nem önálló tömegnövelőként választják."
}
