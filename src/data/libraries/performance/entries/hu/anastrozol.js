// Anastrozol (Arimidex) — reverzibilis non-szteroidal triazole-class
// aromatáz-gátló (CYP19). FDA-jóváhagyott 1995 AstraZeneca postmenopauzális
// ER+ emlőkarcinómára. AAS-ciklus E2-control golden-standard.
// Sources: FDA Arimidex SmPC, Buzdar 2002 ATAC PMID 12081816,
// Geisler 2002 PMID 12351538, Mauras 2003 PMID 12759427.

export default {
  "id": "anastrozol",
  "name": "Anastrozol (Arimidex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Triazole-class non-szteroidal aromatáz-gátló (AI). FDA-jóváhagyott (1995 AstraZeneca) postmenopauzális ER+ emlőkarcinómára. AAS-ciklus E2-control golden-standard, 0.25-1 mg EOD-2x/hét bloodwork-titrálva.",
  "description": "Az Anastrozol (Arimidex) egy harmadik generációs non-szteroidal triazole-családba tartozó aromatáz-gátló (AI), amelyet az AstraZeneca (akkor Zeneca) fejlesztett ki, és 1995-ben kapott FDA-jóváhagyást postmenopauzális ER+ emlőkarcinóma adjuváns kezelésére. Az ATAC trial (Buzdar 2002, PMID 12081816) bizonyította, hogy 1 mg/nap dózisban kb. 97% szérum-ösztradiol-szuppressziót okoz az enzim-szubsztrát kompetitív gátlása útján — a CYP19-aromatáz hem-csoportjához reverzibilisen kötődik, blokkolva az androgén → ösztrogén konverziót. AAS-ciklus kontextusban a testosterone-base ciklusok (Test/Tren/Mast/Dianabol) standard E2-kontroll-gyógyszere: a heti dose-t bloodwork-vezérelt titrálással állítjuk be, az E2-trough célérték 20-30 pg/mL LC-MS/MS sensitive-assay-en mérve (NEM ECL — az ECL-mérés alacsony E2-szinten felülbecsüli az értéket, így gyakran fals magas eredményt ad → felesleges Anastrozol-dose, crashed E2). Az Anastrozol az AAS-PCT-világban az aromatáz-gátlók golden-standard-ja: jól dokumentált, viszonylag könnyen titrálható, mérsékelt lipid-hatású.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Reverzibilis non-szteroidal CYP19-aromatáz inhibitor, ~97% szérum-E2-szuppresszió 1 mg/nap dózison"},
    {"label": "Adagolás (AAS)", "value": "0.25-1 mg EOD-2x/hét bloodwork-titrálva (E2-trough 20-30 pg/mL LC-MS/MS)"},
    {"label": "Felezési idő", "value": "~50 óra (single daily dose, steady-state day 7)"},
    {"label": "Hatáskezdet", "value": "E2-csökkenés mérhető 24-48 órán belül, full effect 5-7 nap"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA S4.1 banned"}
  ],
  "mechanism": "Az Anastrozol reverzibilisen kötődik a CYP19-aromatáz aktív helyén lévő hem-vasion-hoz, kompetitív módon blokkolva a természetes szubsztrát (androsztendion, testosterone) megkötését. A non-szteroidal triazole-gyűrű erős vasion-affinitása miatt a vegyület IC50-je in vitro ~15 nM (humán placentáris aromatáz-szub-mikroszomális preparáció). A teljes szervezeti aromatáz-gátlás mértéke dózis-függő: 0.5 mg/nap kb. 90% E2-szuppresszió, 1 mg/nap ~97%, magasabb dózis (10 mg/nap) NEM ad jelentős plusz effektet — plateau-effekt. Mivel reverzibilis a kötés, a dose kihagyásakor a szérum-E2 24-48 órán belül visszatér rebound-effekt nélkül. A májon CYP3A4 + CYP1A2 oxidálja, a fő metabolitok inaktívak, ~85% vesén keresztül ürül glükuronidált formában. NEM AR-agonista, NEM ER-agonista — tiszta CYP19-inhibitor.",
  "legalStatus": "USA: FDA-jóváhagyott 1995 (Arimidex 1 mg, AstraZeneca; majd 2010 generic Anastrozole 1 mg). Indikáció: postmenopauzális ER+ emlőkarcinóma adjuváns és metasztatikus kezelés. EU: EMA-jóváhagyott. HU: törzskönyvezett (Arimidex, Anastrozol-ratiopharm, Anastrozol Sandoz Rx). PL: törzskönyvezett (Arimidex Rx). WADA: S4.1 aromatáz-gátló — banned in-competition + out-of-competition (minden férfi WADA-versenyző számára tilos).",
  "onsetTime": "E2-csökkenés 24-48 óra, full effect 5-7 nap",
  "halfLife": "~50 óra",
  "halfLifeActive": "N/A (parent compound aktív, metabolitok inaktívak)",
  "interactionsWith": ["letrozol", "exemestane", "nolvadex", "testosterone-info", "trenbolone-info"],
  "aromatization": "Nem aromatizál — kompetitív CYP19-aromatáz inhibitor (IC50 ~15 nM in vitro, ~97% szérum E2-szuppresszió 1 mg/nap dózison). Az Anastrozol maga NEM szubsztrátja az aromatáznak, közvetlenül a szubsztrátkötő helyhez kapcsolódik.",
  "hepatotoxicity": "Alacsony — non-steroidal, NEM 17α-alkilált. FDA Arimidex label: ritka ALT/AST emelkedés (<2% incidencia), klinikailag jelentős hepatotoxicitás extrém ritka. Hosszú távú női adjuváns használat (5+ év) sem mutat szignifikáns májkárosodási mintát (ATAC 10-éves követés).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS, AI)",
  "bindingAffinity": "CYP19-aromatáz aktív hely kompetitív kötés, Ki ~10-15 nM (in vitro humán placentáris microsomes). ER/AR/PR — minimal binding (<1%).",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás 1-2 hónap az utolsó dose után (parent + glükuronidált metabolit-marker).",
  "benefits": [
    "AAS-E2-control golden-standard, ~97% szérum-E2-szuppresszió 1 mg/nap",
    "Gynecomastia-prevenció ciklus alatt aromatizáló szteroideken (Test, Dianabol)",
    "Vízretenció-csökkentés → tisztább izomdefiníció",
    "Reverzibilis kötés → könnyen titrálható E2-trough-ra",
    "30+ év klinikai irodalom (1990s óta fejlesztés)",
    "Globálisan elérhető (FDA + EMA + HU + PL Rx)",
    "Olcsó (~€10-25/box generic 1 mg)"
  ],
  "quickStart": [
    "Bloodwork-baseline ELŐSZÖR: ciklus 4-6. hét E2 LC-MS/MS sensitive-assay-en mérni (NEM ECL)",
    "Dose-titration: E2 >40 pg/mL és gyno-symptom → 0.5 mg E3D start; E2 30-40 pg/mL → 0.25 mg E3D",
    "Re-test 10-14 nap múlva, célzott trough 20-30 pg/mL — ha alacsonyabb, dose-csökkentés",
    "NE prophylactic dosing: ciklus elején Anastrozol NEM ajánlott baseline-symptom nélkül (crashed-E2 rizikó)",
    "Tren-only vagy 19-Nor-domináns stack: Anastrozol általában nem kell (alacsony aromatizáció)",
    "Vízzel + reggel vagy este, étkezés indifferens (orális biodostupnošć ~85%)"
  ],
  "expectations": [
    {"label": "1-3. nap", "body": "E2-csökkenés mérhető bloodworkön (~30-50% reduction baseline-ról). Vízretenció enyhülés érezhető, gyno-tüneti túlfeszülés enyhül."},
    {"label": "1-2. hét", "body": "Steady-state plazma-szint, full E2-szuppresszió (~97% target). Vízretenció minimalizálva, definíció javul. Lipid-panel monitorozható (HDL-csökkenés várt mild)."},
    {"label": "Hosszú használat (3+ hónap)", "body": "BMD (bone mineral density) figyelni — krónikus E2-deficit oszteopenia-rizikó. Lipid-panel monitor, omega-3 + krill oil kardio-protekciós."},
    {"label": "Leállítás után", "body": "E2 24-48 óra alatt visszatér baseline-re (reverzibilis kötés). Rebound NEM várt. Ester-clearance mellett PCT-fázis kezdődhet."}
  ],
  "quality": {
    "pure": [
      "AstraZeneca Arimidex 1 mg blister, Rx-szer pharma-minőség (EU-pharmacy elérhető)",
      "Anastrozol-ratiopharm, Anastrozol Sandoz, Anastrozol Teva generic (EU)",
      "Indiai generikum (Sun Pharma, Cipla) — pharma-minőség, olcsó",
      "UGL liquid anastrozole: HPLC-tesztelt forrás kötelező — gyakran hígítatlan és túl-tömény (1 mL = 5 mg, túldozírozás-rizikó)"
    ],
    "caution": [
      "Crashed E2 jelei: ízületi fájdalom, libidó-csökkenés, letargia, hangulati zuhanás — azonnali dose-csökkentés/pause",
      "Lipid-panel romlik: HDL-drop és LDL-emelkedés várt magasabb dose-on; omega-3 + krill oil + kardio-monitor",
      "BMD (csontsűrűség) hosszú távú stresszor — DEXA-scan minden 12 hónap chronic-userön",
      "CYP3A4-induktorok (rifampicin, fenitoin, karbamazepin) → Anastrozol-szint csökken; CYP3A4-gátlók (ketoconazol, ritonavir) emelhetik",
      "Tamoxifen co-administration NEM ajánlott (overlap-mechanism, E2-crash rizikó)"
    ],
    "avoid": [
      "Premenopauzális női használat AAS-ciklusban (ovulációs disfunkció, infertility-trigger)",
      "Pregnancy / breastfeeding (Pregnancy Category X)",
      "Súlyos hepatikus insufficiencia (Child-Pugh C)",
      "Prophylactic ciklus-eleji Anastrozol baseline-bloodwork nélkül (crashed-E2 rizikó)"
    ]
  },
  "interactions": [
    "Tamoxifen (Nolvadex): NEM ajánlott együtt PCT-ben — Anastrozol E2-t csökkenti, Tamoxifen E2-receptor-blokád → kettős hatás crashed-E2 szindrómához vezethet",
    "Testosterone-base ciklusok: standard E2-control AAS-stack-en",
    "Dianabol/Anadrol/Trenbolone: Tren NEM aromatizál (Anastrozol kevésbé hatékony), Dianabol/Anadrol erősen aromatizál → Anastrozol erős hatású",
    "SSRI-k: paroxetin/fluoxetin minimális interakció (vs Tamoxifen-CYP2D6-probléma)",
    "Statinok: lipid-panel kettős monitor szükséges, statin-dose-csökkentés mérlegelhető",
    "Alkohol: hepatikus stressz mild, mértékletes fogyasztás OK"
  ],
  "studies": [
    {"title": "Anastrozole alone or in combination with tamoxifen versus tamoxifen alone for adjuvant treatment of postmenopausal women with early breast cancer: first results of the ATAC randomised trial", "authors": "Buzdar A, Howell A, ATAC Trialists' Group.", "journal": "Lancet. 2002;359(9324):2131-2139.", "pmid": "12081816"},
    {"title": "Influence of letrozole and anastrozole on total body aromatization and plasma estrogen levels in postmenopausal breast cancer patients evaluated in a randomized, cross-over study", "authors": "Geisler J, Haynes B, Anker G, et al.", "journal": "J Clin Oncol. 2002;20(3):751-757.", "pmid": "12351538"},
    {"title": "Pharmacokinetics and dose finding of a potent aromatase inhibitor, aromasin (exemestane), in young males", "authors": "Mauras N, Lima J, Patel D, et al.", "journal": "J Clin Endocrinol Metab. 2003;88(12):5951-5956.", "pmid": "12759427"},
    {"title": "Aromatase inhibitor mechanism: review", "authors": "Brueggemeier RW, Hackett JC, Diaz-Cruz ES.", "journal": "Endocr Rev. 2005;26(3):331-345.", "pmid": "15814851"}
  ],
  "faq": [
    {"q": "Mikor kell elkezdeni az Anastrozol-t a ciklusban?", "a": "Soha NEM prophylactic-ciklus-elején, baseline-bloodwork és gyno-symptom nélkül. A helyes protokoll: ciklus 3-4. hete TESTERE az E2-szintet LC-MS/MS sensitive-assay-en (NEM ECL — overestimate alacsony szinten). Ha E2 >40 pg/mL ÉS gyno-symptom (érzékeny mellbimbó, lipid-fluktuáció, vízretenció) → 0.25-0.5 mg E3D indítás. Ha E2 <40 pg/mL és NINCS symptom → ne kezdj. Az 'minden Test-ciklusra Anastrozol' kollektív hiedelem csak a nagyon aromatizáló stack-eken (Dianabol+Test+Anadrol) reális — a tiszta TRT-dose Test-Enan 200 mg/hét NEM kell AI-t."},
    {"q": "Anastrozol vs Aromasin (Exemestane) — mikor melyik?", "a": "Anastrozol REVERZIBILIS kötés, könnyen titrálható, leállítás után E2 24-48 óra alatt rebound-nélkül visszatér. Aromasin SUICIDE-INHIBITOR (irreverzibilis kovalens kötés), recovery csak új aromatáz-szintézis után (5-7 nap), DE 17-hydro-exemestane metabolit MILD androgén — SHBG-csökkenés és free-Test-emelkedés bonusz. Default választás Anastrozol (titrálhatóság), Aromasin akkor érdekes ha SHBG-emphasis-emphasizált vagy ciklus-vég taper-stabilitás kell (no rebound E2-spike Aromasin-on)."},
    {"q": "Crashed E2 jelei és kezelése?", "a": "Tünetek: ízületi fájdalom (különösen csukló + térd), libidó-zuhanás, lethargia, alvászavar, lipid-panel-kollapszus (HDL-drop), depressziós hangulat. Mérés: szérum-E2 LC-MS/MS <15 pg/mL → crashed. Kezelés: AZONNAL pause Anastrozol-on 7-10 napra, re-test E2; ha visszatért 20-30 pg/mL range-be, fél dose-on újraindítás (pl. 0.25 mg helyett 0.125 mg = quartered tablet). Megelőzés: NEVER prophylactic-dose baseline nélkül; mindig bloodwork-titrálva."},
    {"q": "Lipid-panel romlik — mit tegyek?", "a": "Anastrozol-on HDL-csökkenés várt (~10-20% drop), LDL enyhe emelkedés. Kardio-monitor: lipid-panel pre-cycle + ciklus 6. hét + post-cycle. Mitigációk: omega-3 (EPA 2-3 g/nap), krill oil (astaxanthin extra), CoQ10 (200 mg), berberin (LDL-csökkentő), niacin (HDL-emelő nikotinsav). Ha LDL >190 mg/dL vagy HDL <30 mg/dL → statin (atorvastatin 20 mg) szakorvosi konzultáció. Hosszabb taper-protokoll (1 mg → 0.5 mg → 0.25 mg) enyhítheti az effektet."},
    {"q": "Tier-4 vs tier-5? Miért nem tier-5 mint a Nolvadex?", "a": "Nolvadex (1977 FDA, ~50 év klinikai irodalom) és Anastrozol (1995 FDA, ~30 év) eltérő érettségi szinten — a Nolvadex közelítően kétszerese a klinikai irodalmi base-ének. Anastrozol az AAS-AI golden-standard (a tier-4 alapja), DE a stricter tier-5 criteria-t (5+ decade clinical history + zero-debate safety profile) nem éri el. Mindkét vegyület első-vonalbeli választás a saját kategóriájában (SERM vs AI), csak a klinikai timeline-distance ad eltérő tier-besorolást."}
  ],
  "related": ["letrozol", "exemestane", "nolvadex", "testosterone-info", "trenbolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 1},
    "unit": "mg / EOD-2x hét (orális, bloodwork-titrálva)",
    "note": "Standard AAS-E2-control: 0.25-1 mg EOD-2x/hét, E2-trough cél 20-30 pg/mL LC-MS/MS-en. Súlyosan aromatizáló stack (Dianabol+Test+Anadrol): 1 mg EOD; közepes (Test-csak): 0.25-0.5 mg E3D; alacsony aromatizáló (Tren-domináns, Var, Mast): gyakran NEM kell AI. Soha NEM prophylactic baseline-bloodwork és gyno-symptom nélkül."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt / Anastrozol-indítás előtt",
      "timing": "Ciklus 3-4. hét vagy gyno-symptom-onset",
      "markers": "E2 LC-MS/MS sensitive-assay (NEM ECL), Total Testosterone, Free Testosterone, SHBG, Prolactin, Estradiol, lipid panel (TC/LDL/HDL/TG), ALT, AST, hemogram.",
      "purpose": "Baseline az E2-titration trajectory-hez. Ha E2 >40 pg/mL ÉS gyno-symptom (érzékeny mellbimbó, lipid-fluktuáció, vízretenció) → indítás indokolt. Ha E2 ≤40 vagy symptom nélkül → NE indítsd."
    },
    "midCycle": {
      "label": "Anastrozol 10-14. napon",
      "timing": "Anastrozol-indítás +10-14 nap",
      "markers": "E2 LC-MS/MS (re-test), Total Test, lipid panel, ALT/AST.",
      "purpose": "Titration confirm: E2 20-30 pg/mL target — ha <15 = crashed → pause; ha >40 = dose-emelés indokolt. Lipid-panel monitor: HDL-drop és LDL-emelés várt mild."
    },
    "postCycle": {
      "label": "Ciklus-vége + recovery monitor",
      "timing": "Anastrozol utolsó dose +2 hét",
      "markers": "E2, Total/Free Test, LH, FSH, lipid panel, ALT/AST.",
      "purpose": "Confirm: E2 baseline-re visszatér (reverzibilis kötés, 24-48 óra rebound nélkül). PCT-fázis indítás Nolvadex/Clomid SERM-szel, AI nem szükséges PCT alatt."
    },
    "cruise": {
      "label": "TRT-cruise alacsony-dose Anastrozol",
      "timing": "Hetente vagy kéthetente (egyéni titrálva)",
      "markers": "E2 LC-MS/MS havi, lipid panel + DEXA scan évente (BMD monitor).",
      "purpose": "TRT-cruise-on (Test 100-200 mg/hét) alacsony-dose Anastrozol (0.125-0.25 mg/hét) lehet indokolt egyes felhasználón, DE a sok TRT-clinic ezt elkerüli — alacsony-dose Test ritkán igényel AI-t. Hosszú távú E2-szuppresszió oszteopenia-rizikót növel, DEXA scan évente."
    }
  }
}
