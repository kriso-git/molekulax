// Phase C multi-variant entry (Propionate + Enanthate). Lab Terminal hard-fail
// sources: Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15248788,
// Schänzer 1996 PMID 8674183 (detection), Mottram 2008 doping handbook,
// Eli Lilly Drolban DESI review (FDA 1979, discontinued early 1990s).

export default {
  "id": "masteron",
  "name": "Masteron (Drostanolone)",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Drostanolone, 2α-metil-DHT-származék injektábilis AAS. Eredetileg FDA-jóváhagyott (Drolban, Lilly 1959) inoperábilis emlőkarcinómára posztmenopauzális nőknél; ma kizárólag underground market. Klasszikus \"hardening\" cutting-szteroid.",
  "description": "A Masteron (Drostanolone) egy 2α-metil-dihidrotesztoszteron-származék, amelyet 1959-ben Syntex és Eli Lilly közösen szintetizált, és Drolban néven 1961-ben FDA-jóváhagyást kapott inoperábilis, posztmenopauzális emlőkarcinóma palliatív kezelésére. A modern tamoxifén-bázisú terápia kiszorította; Lilly 1993-ban discontinue-olta. Anabolikus:androgén arány ~62:25 (alacsony anabolikus, közepes androgén). A 2α-metil-csoport gátolja az 5α-reduktáz és az aromatáz aktivitását — NEM konvertál ösztrogénné és sajátos enyhe aromatáz-inhibitor hatást is mutat (Bhasin 2018 referencia AAS-osztályozás). NEM 17α-alkilált, így a hepatotoxicitás minimális. A bodybuilding kontextusban a \"keménység\" és vaszkuláris esztétika eléréséhez használt klasszikus cutting-szteroid, gyakran contest prep utolsó 6-8 hetében. WADA tiltott egész évben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista, 2α-metil-DHT, NEM aromatizál"
    },
    {
      "label": "Anabolikus:Androgén",
      "value": "62:25"
    },
    {
      "label": "Felezési idő",
      "value": "2-3 nap (Prop), 7-10 nap (Enan)"
    },
    {
      "label": "Hatáskezdet",
      "value": "24-72 óra (IM észter)"
    },
    {
      "label": "Jogi státusz",
      "value": "Discontinued Rx, csak UGL. WADA tiltott."
    }
  ],
  "mechanism": "2α-metil-dihidrotesztoszteron (5α-redukált) AR-agonista. A 2α-metilezés három metabolikus blokkot ad: (1) gátolja az aromatázt (CYP19), így a molekula NEM konvertál ösztradiollá és klinikailag enyhe aromatáz-inhibitor hatást is mutat; (2) ellenáll a 17β-HSD oxidatív lebontásnak (hosszabb plazma half-life); (3) közvetlenül NEM 5α-redukálódik (mert már redukált). A 17β-OH-ra észteresített forma (Propionát vagy Enantát) IM-injekció után lassan hidrolizál a depot-zsírban szabad drostanolonra, amely magas SHBG-affinitással csökkenti a SHBG-kötött tesztoszteron-frakciót → szabad-T emelkedés indirekt módon.",
  "legalStatus": "USA: Schedule III kontrollált szer (DEA, discontinued Rx — Drolban 1993 után nem gyártott). EU: kontrollált anabolikus szteroid, vény nélkül illegális. HU/PL: birtoklás és értékesítés bűncselekmény. WADA tiltott versenysportban egész évben (S1.1.a anabolikus androgén szteroidok).",
  "onsetTime": "24-72 h (IM, ester-hydrolysis-dependent)",
  "halfLife": "2-3 d (Propionate), 7-10 d (Enanthate)",
  "halfLifeActive": "~1-2 nap szabad drostanolone észter-hidrolízis után",
  "interactionsWith": [
    "anastrozole",
    "finasteride",
    "testosterone",
    "warfarin"
  ],
  "aromatization": "Nem — a 2α-metil-csoport sztérikus akadályozása miatt NEM CYP19 szubsztrát; klinikailag enyhe aromatáz-inhibitor hatást is mutat (Pope-Kanayama 2014 PMID 24423981 designer-AAS review)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált észter forma a hepatikus first-pass-t kerüli. Mérsékelt lipid-zavar (HDL csökkenés, LDL emelkedés) marad a fő kardiovaszkuláris kockázat (Hartgens-Kuipers 2004 PMID 15248788)",
  "wadaStatus": "banned",
  "androgenicRatio": "62:25",
  "bindingAffinity": "AR-affinitás közepes; magas SHBG-affinitás (DHT-strukturális analóg) → SHBG-kötött tesztoszteront verseng le, indirekt szabad-T-emelkedést indukál.",
  "detectionWindow": "Drostanolone metabolitok (2α-metil-5α-androsztán-3-on metabolitcsalád) vizeletből 3 hét (Prop) – 3 hónap (Enan). Schänzer 1996 (PMID 8674183) WADA-akkreditált GC-MS és LC-MS/MS módszer.",
  "benefits": [
    "Vaszkuláris, kemény \"esztétikus\" megjelenés contest prep alatt (subjektív bodybuilding tapasztalat)",
    "Indirekt szabad-tesztoszteron-emelkedés SHBG-elfoglalás révén (másik AAS hatás-erősítője)",
    "NEM aromatizál → nincs E2-mellékhatás (gynecomastia, vízretenció minimális)",
    "Enyhe anti-aromatáz hatás → testosterone-stack mellett csökkenti az adjunkt-AI igényt",
    "Alacsony hepatotoxicitás (DHT-strukturális analóg, NEM 17α-alkilált)"
  ],
  "quickStart": [
    "Csak már bodybuilding-experienceeel rendelkező felhasználóknak, NEM első ciklus",
    "Tipikusan stack-elve testosterone-base-szel (Test-Prop + Mast-Prop, Test-Enan + Mast-Enan az ester-half-life matching miatt)",
    "DHT-strukturális analóg → SZIGORÚ hajhullás-kockázat: scalp-DHT konverzió genetikai predisz. esetén accelerál androgenetikus alopecia",
    "Lipid panel (HDL/LDL) baseline + 4-hét + post-cycle kötelező",
    "PCT (Clomid + Nolvadex 4 hét) a stack-társ-AAS half-life-jától függően"
  ],
  "expectations": [
    {
      "label": "Első hét",
      "body": "Akut hatás minimális. Esztétikai változás még nem érzékelhető; az észter-hidrolízis 24-72 órán át tart, plasma steady-state Prop 1 hét, Enan 4-5 hét."
    },
    {
      "label": "3-4. hét",
      "body": "Steady-state Prop. Szubjektíven \"keményebb\" izom-tónus, vaszkuláris venosity emelkedés. SHBG csökken (~30-50%), free-T emelkedik a stack-társ AAS mellett."
    },
    {
      "label": "6-8. hét",
      "body": "Contest-prep \"peak\" — a víz alóli izomzat-kontúr maximálisan kihangsúlyozott. Lipid panel HDL ~20-30% csökkenés várható. Hajhullás-érzékenyek scalp-DHT esetén accelerált miniaturizáció."
    }
  ],
  "quality": {
    "pure": [
      "Tiszta sárgás vagy halványsárga olaj (~#fef08a tónus), üledék nélküli, 10ml fiola",
      "UGL HPLC-tesztelt forrás kötelező — Drostanolone Propionát és Enantát különböző PIP-fájdalom-profilt ad, hamisítás (Test-Prop helyettesítés) gyakori"
    ],
    "caution": [
      "Hajhullás-acceleráció androgenetikus alopecia-genetikájú felhasználóknál (DHT-strukturális analóg)",
      "Lipid-zavar: HDL csökkenés, LDL emelkedés (mérsékelt, NEM extrém)",
      "Injection site pain (Propionát különösen, alkohol-tartalmú vehikulum miatt)",
      "Hangmélyülés és hirsutizmus nőknél (1 ciklus után IRREVERZIBILIS lehet — szigorúan kontraindikált)"
    ],
    "avoid": [
      "Androgenetikus alopecia családi anamnézis (DHT-érzékeny scalp)",
      "Prosztata-hipertrófia, prosztatakarcinóma (DHT-analóg → prosztata-AR-aktiválás)",
      "Női felhasználás (virilizáció kockázata extrém, alacsony anabolikus arány miatt esztétikai haszon kicsi)",
      "Kardiovaszkuláris rizikó (családi anamnézis, magas LDL, ateroszklerózis) abszolút kontraindikáció",
      "Bármilyen \"első ciklus\" — Masteron mindig stack-társ, sosem standalone első AAS"
    ]
  },
  "interactions": [
    "Testosterone-base (Prop+Prop vagy Enan+Enan match): standard stack, fokozza az izom-protein-szintézist",
    "Anastrozole (AI): NEM szükséges Masteron-only ciklusnál (önmaga enyhe AI); Test-stack mellett csak labor-igazolt magas E2 esetén",
    "Finasteride: NEM gátolja a Masteron-hatást (Masteron már 5α-redukált), DE NEM is véd a scalp-DHT ellen — hajhullás-megelőzés szempontjából értelmetlen",
    "Warfarin: antikoaguláns hatás fokozódhat, INR monitor",
    "Más AAS-szal kombinálva fokozza HPTA-szuppressziót, PCT szükségessé válik"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
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
      "title": "Long-term combined administration of dromostanolone propionate (Mastisol) and cyclophosphamide for advanced breast cancer",
      "authors": "Nomura Y, Hattori T, Abe Y.",
      "journal": "Gan no Rinsho. 1971;17(12):987-95.",
      "pmid": "5172404"
    }
  ],
  "faq": [
    {
      "q": "Miért hívják \"hardening\" szteroidnak?",
      "a": "A Masteron NEM aromatizál és magas SHBG-affinitással csökkenti a vízretenciót, így alacsony testzsír-százalék (<10-12%) mellett a bőr alatti vízréteg minimálisra zsugorodik, vaszkulárisan kihangsúlyozott, \"kemény\" megjelenést adva. Magasabb testzsír-szinten (>15%) az esztétikai hatás láthatatlan — ezért contest prep specifikus."
    },
    {
      "q": "Igaz, hogy aromatáz-inhibitor is egyben?",
      "a": "Részben. A 2α-metil-csoport sztérikus akadályozása miatt a Masteron klinikailag enyhe aromatáz-gátló hatást is mutat — Test-stack mellett csökkentheti az adjunkt Anastrozole igényt. DE az effekt NEM erős (Letrozol/Anastrozol-szerű komplett blokk NEM várható), és magas Test-dózis mellett (>500 mg/hét) önállóan NEM elegendő E2-kontrollra."
    },
    {
      "q": "Hajhullás-kockázat tényleg ennyire magas?",
      "a": "Igen, ha androgenetikus alopecia genetikai prediszpozíció van. A Masteron strukturálisan 2α-metil-DHT, ami a scalp 5α-reduktáz-bypass-szal közvetlenül aktiválja a hajtüsző AR-jét. Finasteride NEM véd (a Masteron már redukált). Egyetlen védelem: ha genetikailag érzékeny vagy, NE használj DHT-derivátum AAS-t."
    },
    {
      "q": "Miért használnak észtert helyette önmagában?",
      "a": "A parent drostanolone vízben oldhatatlan és gyorsan kiürül (oldhatatlan szabad szteroid). Az észter (Prop-propionát vagy Enan-enantát) észteresíti a 17β-OH-csoportot, így a molekula olajban oldódik, IM injekcióval depot-tárolásra kerül, és az endogén észteráz-enzimek folyamatosan szabad drostanolone-t hidrolizálnak, ami stabil plazma-szintet ad."
    },
    {
      "q": "Hosszú távú használat veszélyei?",
      "a": "Tartós AAS-használat HPTA-szuppressziót okoz (akár tartós sekunder hipogonadizmus a Rasmussen-Christofferides 2016 PMID 27568523 cohort szerint), kardiovaszkuláris kockázat (LDL emelkedés, balkamra-hipertrófia), pszichológiai hatások (Kanayama 2009 PMID 19922565 — AAS-függőség). Masteron önmaga nem extrém hepatotoxikus, DE a kumulatív AAS-expozíció (Test+Mast+egyéb stack) jelentős."
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "winstrol-info",
    "trenbolone-info",
    "superdrol"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2 (ultraszenzitív), LH, FSH, SHBG, Prolaktin. Lipid panel (LDL/HDL/TG). Hepatikus: ALT/AST/GGT/ALP. CBC + hematokrit. Vesefunkció (kreatinin, eGFR). PSA (30 év felett).",
      "purpose": "Lipid baseline és SHBG-baseline kritikus a Masteron egyedi indirekt-mechanizmusához (SHBG-szuppresszió). Bármilyen LDL >130 mg/dL vagy HDL <40 mg/dL relatív kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4-6. hetén, ciklus felénél",
      "markers": "Lipid panel (HDL drasztikusan csökkenhet), E2 (ha Test-stack), SHBG (Masteron-driven csökkenés várható), vérnyomás napló, hepatikus panel (ALT/AST), hematokrit.",
      "purpose": "HDL <30 mg/dL kardiovaszkuláris riasztó. SHBG-csökkenés (>50%) megerősíti a Masteron-aktivitást. E2 (Test-stack mellett) ha emelkedik, az AI-igény eldönti — Masteron önmaga enyhe AI hatása NEM elég magas dózisú Test mellett."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó injekciótól: Prop +3-5 nap, Enan +14-21 nap PCT-indítás. PCT 4. hetén és 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel (HDL recovery), hepatikus panel.",
      "purpose": "HPTA-helyreállítás és SHBG-recovery verifikálása. Ha T nem tér vissza baseline-ra 12 hét után, endokrinológus konzultáció. SHBG-recovery típusosan 4-6 héten belül."
    },
    "cruise": {
      "label": "Cruise alatt (Masteron-tartalmú cruise NEM standard)",
      "timing": "Masteron-cruise atipikus; ha cruise-on tartja, 6-8 hetente monitoring",
      "markers": "Lipid panel (HDL), SHBG, Total T, E2, vérnyomás napló, PSA (30 év felett).",
      "purpose": "Tartós Masteron-expozíció a lipid-zavart és prosztata-AR-aktivációt felhalmozza. Cruise-on TRT-Test-dózis mellett a Masteron tipikusan kihagyott — esztétikai hatása csak contest-prep alatt értékes."
    }
  },
  "variants": [
    {
      "id": "prop",
      "routeId": "prop",
      "routeLabel": {
        "hu": "Drostanolone Propionate (Masteron-Prop, gyors észter)",
        "en": "Drostanolone Propionate (Masteron-Prop, fast ester)",
        "pl": "Drostanolon Propionian (Masteron-Prop, szybki ester)"
      },
      "routeNote": {
        "hu": "A klasszikus 'cutting' kozmetikai DHT-származék — szárazság, izom-keménység, enyhe AI-hatás. ~2-3 napos felezés ⇒ heti 3x EOD IM-injekció (Mon/Wed/Fri vagy E2D). NEM 17α-alkilált ⇒ alacsony hepatotoxicitás. PIP gyakran fájdalmas a propionát alkohol-tartalmú vehikulum miatt. Rövid detection window (~3 hét) ⇒ contest-prep preferált variánsa.",
        "en": "The classic 'cutting' cosmetic DHT-derivative — dryness, muscle hardness, mild AI effect. ~2-3 day half-life ⇒ 3× EOD IM injection weekly (Mon/Wed/Fri or E2D). NOT 17α-alkylated ⇒ low hepatotoxicity. PIP often painful due to propionate's alcohol-containing vehicle. Short detection window (~3 weeks) ⇒ preferred contest-prep variant.",
        "pl": "Klasyczna 'tnąca' kosmetyczna pochodna DHT — suchość, twardość mięśni, łagodne działanie AI. ~2-3-dniowy okres półtrwania ⇒ iniekcja IM 3× EOD tygodniowo (pon/śr/pt lub E2D). NIE 17α-alkilowany ⇒ niska hepatotoksyczność. PIP często bolesny z powodu wehikułu propionianu zawierającego alkohol. Krótkie okno detekcji (~3 tygodnie) ⇒ preferowany wariant contest-prep."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "2-3 nap (Propionát észter; szabad drostanolone t½ ~1-2 nap hidrolízis után)",
      "halfLifeActive": "1-2 nap",
      "bioavailability": "~95-100% (IM injekció bypass-olja a first-pass-t; propionát észter gyors hidrolízis ~2-3 nap)",
      "onsetTime": {
        "hu": "24-48 óra (IM, propionát fast-acting észter)",
        "en": "24-48 h (IM, propionate fast-acting ester)",
        "pl": "24-48 h (IM, propionian szybko działający ester)"
      },
      "dosing": {
        "hu": "300-600 mg/hét IM, 3x EOD osztva (Mon/Wed/Fri). Tipikus cutting dózis 400 mg/hét. Max 8 hét ciklus. Test-Prop base + opcionális Tren-Ace stack. PCT 4 hét utolsó injekció +3-5 nap.",
        "en": "300-600 mg/week IM, split 3× EOD (Mon/Wed/Fri). Typical cutting dose 400 mg/week. Max 8 week cycle. Test-Prop base + optional Tren-Ace stack. PCT 4 weeks last injection +3-5 days.",
        "pl": "300-600 mg/tydzień IM, podzielone 3× EOD (pon/śr/pt). Typowa dawka cięcia 400 mg/tydzień. Maks 8 tygodni cyklu. Baza Test-Prop + opcjonalny stack Tren-Ace. PCT 4 tygodnie od ostatniej iniekcji +3-5 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/hét",
        "note": {
          "hu": "300-600 mg/hét, 3x EOD osztva IM (2-3 nap felezés). Max 8 hét. TUDCA NEM kötelező (alacsony hepatotox), DE lipid + vérnyomás monitor. PCT utolsó injekció +3-5 nap.",
          "en": "300-600 mg/week, 3× EOD split IM (2-3 day half-life). Max 8 weeks. TUDCA not required (low hepatotox), BUT lipid + BP monitor essential. PCT starts last injection +3-5 days.",
          "pl": "300-600 mg/tydzień, 3× EOD podzielone IM (2-3-dniowy okres półtrwania). Maks 8 tygodni. TUDCA niewymagana (niska hepatotoks), ALE monitor lipidów + ciśnienia konieczny. PCT od ostatniej iniekcji +3-5 dni."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "none",
      "androgenicRatio": "62:25",
      "legalStatus": "Discontinued Rx (Drolban 1993 után nem gyártott), csak UGL piacon elérhető. EU/HU/PL: vény nélkül illegális, WADA tiltott.",
      "detectionWindow": "Vizelet: 3 hét (rövidebb mint az Enantát-é, propionát rövid észter miatt). WADA-akkreditált GC-MS és LC-MS/MS.",
      "quality": {
        "pure": [
          "Tiszta halványsárga vagy víztiszta olaj, 10ml fiola, sterilen szűrt",
          "UGL HPLC-tesztelt forrás kötelező — propionát-észter karakterisztikus a PIP-fájdalom miatt érzékelhetően különbözik az enantáttól"
        ],
        "caution": [
          "Injection site pain (PIP): a propionát alkohol-tartalmú vehikulumban gyakran fájdalmas, 24-48 órás duzzanat",
          "Heti 3x EOD injekció szükséges a rövid felezés miatt (Mon/Wed/Fri vagy E2D)",
          "HDL csökkenés, LDL emelkedés (mérsékelt)",
          "Hajhullás-acceleráció androgenetikus alopecia esetén (DHT-származék)"
        ],
        "avoid": [
          "Erős injection-site-érzékenység (ha minden IM-injekció súlyosan fáj, az Enantát-variánst preferáld)",
          "Több, mint 8 hét folyamatos ciklus (HPTA-szuppresszió kumulatív)",
          "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL)",
          "Női felhasználás (virilizáció kockázata extrém)"
        ]
      },
      "interactions": [
        "Test-Propionát stack: ester-half-life-matching, EOD injekciós ütemezés",
        "Tren-Acetate stack: 'cutting-stack' klasszikus, mindhárom rövid észter",
        "PCT (Clomid 50mg/nap + Nolvadex 20mg/nap, 4 hét) utolsó Prop-injekció +3-5 nap után indul"
      ]
    },
    {
      "id": "enan",
      "routeId": "enan",
      "routeLabel": {
        "hu": "Drostanolone Enanthate (Masteron-E, lassú észter)",
        "en": "Drostanolone Enanthate (Masteron-E, slow ester)",
        "pl": "Drostanolon Enanthate (Masteron-E, wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb felezés (~7-10 nap) ⇒ heti 1-2 IM-injekció elegendő, steady-state 4-5 hét. Sokkal kevésbé fáj mint a Propionát (nincs alkohol-vehikulum). Ugyanaz a parent drostanolone, így a cutting/cosmetic hatás azonos. Hátulütő: 2-3 hónapos detection window ⇒ contest-period <3 hónappal kerülendő. Bulking-cycle Mast-E-stack tipikus 10-12 hét.",
        "en": "Longer half-life (~7-10 days) ⇒ once/twice weekly IM injection sufficient, steady-state 4-5 weeks. Much less painful than Propionate (no alcohol vehicle). Same parent drostanolone, so cutting/cosmetic effects identical. Drawback: 2-3 month detection window ⇒ avoid <3 months before contest period. Bulking-cycle Mast-E stack typically 10-12 weeks.",
        "pl": "Dłuższy okres półtrwania (~7-10 dni) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 4-5 tygodni. Znacznie mniej bolesny niż Propionian (brak wehikułu alkoholu). Ten sam macierzysty drostanolon, więc działanie cięcia/kosmetyczne identyczne. Wada: 2-3-miesięczne okno detekcji ⇒ unikać <3 miesięcy przed okresem zawodów. Cykl bulking ze stackiem Mast-E zazwyczaj 10-12 tygodni."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "7-10 nap (Enantát észter; szabad drostanolone t½ ~1-2 nap hidrolízis után)",
      "halfLifeActive": "1-2 nap (depot-felszívódás lassú, plasma szint 1-2 hét után stabilizálódik)",
      "bioavailability": "~95-100% (IM injekció bypass-olja a first-pass-t; enantát észter lassú hidrolízis ~7-10 nap)",
      "onsetTime": {
        "hu": "48-72 óra (IM, enantát slow-acting; steady-state 4-5 hét)",
        "en": "48-72 h (IM, enanthate slow-acting; steady-state 4-5 weeks)",
        "pl": "48-72 h (IM, enantat wolno działający; stan stacjonarny 4-5 tygodni)"
      },
      "dosing": {
        "hu": "300-700 mg/hét IM, heti 1-2x. Tipikus cutting dózis 400-500 mg/hét. Minimum 8-10 hét ciklus a steady-state miatt. PCT utolsó injekció +14-21 nap.",
        "en": "300-700 mg/week IM, 1-2× weekly. Typical cutting dose 400-500 mg/week. Minimum 8-10 week cycle due to steady-state. PCT starts last injection +14-21 days.",
        "pl": "300-700 mg/tydzień IM, 1-2× w tygodniu. Typowa dawka cięcia 400-500 mg/tydzień. Minimum 8-10 tygodni cyklu z powodu stanu stacjonarnego. PCT od ostatniej iniekcji +14-21 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/hét",
        "note": {
          "hu": "300-700 mg/hét, heti 1-2x IM (7-10 nap felezés). Minimum 8-10 hét. TUDCA NEM kötelező, DE lipid + vérnyomás monitor. PCT utolsó injekció +14-21 nap.",
          "en": "300-700 mg/week, 1-2× weekly IM (7-10 day half-life). Minimum 8-10 weeks. TUDCA not required, BUT lipid + BP monitor essential. PCT starts last injection +14-21 days.",
          "pl": "300-700 mg/tydzień, 1-2× w tygodniu IM (7-10-dniowy okres półtrwania). Minimum 8-10 tygodni. TUDCA niewymagana, ALE monitor lipidów + ciśnienia konieczny. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 500000,
      "hepatotoxicity": "low",
      "aromatization": "none",
      "androgenicRatio": "62:25",
      "legalStatus": "Sosem volt licencelt humán Rx — kizárólag UGL piac. Mindenhol illegális, WADA tiltott.",
      "detectionWindow": "Vizelet: 2-3 hónap (jóval hosszabb mint a propionátnál, enantát hosszú észter miatt). WADA-akkreditált GC-MS és LC-MS/MS.",
      "quality": {
        "pure": [
          "Tiszta sárgás-barnás olaj (~#f59e0b tónus), 10ml fiola, sterilen szűrt",
          "UGL HPLC-tesztelt forrás kötelező — enantát-észter sokkal kevésbé fáj mint a propionát"
        ],
        "caution": [
          "Lassú onset: az esztétikai változás 4-5 hét után érzékelhető (steady-state)",
          "Heti 1-2x injekció elegendő (Mon vagy Mon+Thu)",
          "HDL csökkenés, LDL emelkedés (mérsékelt, hosszabb expozíció miatt kumulatívabb mint a Prop-on)",
          "Hosszú detection window: contest-period esetén Prop preferálandó"
        ],
        "avoid": [
          "Rövid (4-6 hét) ciklus NEM hatékony — Enan steady-state csak 4-5 hét után",
          "Több mint 12 hét folyamatos ciklus (HPTA-szuppresszió súlyos)",
          "WADA-tesztelt verseny <3 hónappal a tervezett vég után (detection window)",
          "Kardiovaszkuláris kockázat, női felhasználás (lásd Propionát)"
        ]
      },
      "interactions": [
        "Test-Enantát stack: ester-half-life-matching, heti 1-2x injekciós ütemezés",
        "Tren-Enantát stack: 'long-ester cutting' 10-12 hét",
        "PCT (Clomid + Nolvadex 4-6 hét) utolsó Enan-injekció +14-21 nap után indul"
      ]
    }
  ],
  "defaultVariant": "prop",
  "anecdote": "Az anekdotikus beszámolók szerint a Masteron kifejezett diuretikus hatást vált ki, a felhasználók gyakran jelentősen megnövekedett vizeletürítésről számolnak be. Közösségi beszámolók szerint a magas E2 tünetei is csökkennek, még jelentős tesztoszteron-dózisok mellett is, ami összhangban van a receptorszintű anti-ösztrogén aktivitásával. A Masteron azonban hírhedten gyorsítja az androgén hajhullást; a férfias kopaszodásra hajlamos felhasználók gyakran azonnali hajszélvékonyodást tapasztalnak a kezdés után. Általában 'kozmetikai anabolikumnak' tekintik — keménység, szárazság és fizikai finomítás céljából hasznos, nem pedig érdemi izomgyarapodásra. Összességében szilárd DHT-származékos anabolikumnak tartják, megfelelő használat esetén egyértelmű réssel, de az androgén kompromisszumok (különösen a hajhullás) komoly megfontolandóak a genetikailag hajlamos felhasználók számára."
}
