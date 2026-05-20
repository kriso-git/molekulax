// Exemestane (Aromasin) — szteroidal "suicide" (irreverzibilis) AI.
// FDA-jóváhagyott 1999 Pfizer. 17-hydro-exemestane metabolit mild androgén
// — SHBG drop + free-Test rise visible.
// Sources: FDA Aromasin SmPC, Bonneterre 2003 PMID 14523076,
// Geisler 2008 PMID 19012260, Lønning 2005 PMID 16091756.

export default {
  "id": "exemestane",
  "name": "Exemestane (Aromasin)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Steroidal \"suicide\" (irreverzibilis) aromatáz-gátló. FDA-jóváhagyott (1999 Pfizer). Egyedi: 17-hydro-exemestane metabolit mild androgén — SHBG drop + free-Test rise visible. AAS-ban E2-stability vagy SHBG-emphasis-emphasizált választás.",
  "description": "Az Exemestane (Aromasin) egy harmadik generációs szteroidal aromatáz-gátló, amelyet a Pharmacia & Upjohn (ma Pfizer) fejlesztett ki, és 1999-ben kapott FDA-jóváhagyást postmenopauzális ER+ emlőkarcinómára. Pharmakokinetikailag eltér a non-szteroidal triazole-AI-któl (Anastrozol/Letrozol): irreverzibilis kovalens kötést képez a CYP19-aromatáz aktív helyén — minden dose a aromatáz-pool egy részét végleg inaktiválja, a recovery csak de novo enzim-szintézis után jön (~5-7 napos félhatás-felezés). Az Exemestane parent compound szteroidstruktúrával rendelkezik (androstadiendion-analóg), és a 17-hydro-exemestane metabolit MILD androgén-receptor agonist (klinikailag jelentéktelen anabolikus hatás, DE SHBG-csökkentő, így a free-Test mérhetően emelkedik — Lønning 2005 PMID 16091756 dokumentálta). AAS-kontextusban két niche: (1) E2-stability ahol a non-rebound profil előnyös (cycle-end taper), és (2) SHBG-emphasis stack-en (a free-Test boost a 17-hydro-metabolit miatt). Az Aromasin az AAS-AI-trifecta harmadik tagja az Anastrozol+Letrozol mellett. WADA S4.1 — banned.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Szteroidal \"suicide\" (irreverzibilis kovalens) CYP19-aromatáz inhibitor — egyetlen dose a pool egy részét végleg inaktiválja"},
    {"label": "Adagolás (AAS)", "value": "12.5-25 mg EOD vagy 25 mg/nap"},
    {"label": "Felezési idő", "value": "~27 óra (parent), ~24-48 h aktív metabolit; pharmakodinamiás hatás 5-7 nap"},
    {"label": "Hatáskezdet", "value": "E2-csökkenés mérhető 12-24 óra, full effect 3-5 nap"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA S4.1 banned"}
  ],
  "mechanism": "Az Exemestane szubsztrát-analóg pro-drug: maga az androstadiendion-szerkezet beleköt a CYP19-aromatáz aktív helyére, és az enzim katalitikus folyamatában reaktív elektrofil köztiterméket képez (suicide-inhibitor / mechanism-based irreversible inhibitor). A reaktív köztitermék kovalensen kötődik az aktív hely lizin/cisztein-oldalláncához, permanensen inaktiválva az enzim-molekulát. A recovery teljes egészében de novo aromatáz-szintézistől függ (~5-7 nap félfunkció-recovery rate). A parent compound 17-hidroxiláción megy keresztül májon, és az aktív 17-hydro-exemestane metabolit MILD AR-agonist (Lønning 2005), klinikailag jelentéktelen anabolikus hatás DE SHBG-csökkentő — a free-Test mérhetően emelkedik (+5-10 ng/dL standard dose-on). Hepatikus CYP3A4 metabolizmus a fő útvonal, ~30%-os orális biodostupnošć. WADA-detection ~1 hónap.",
  "legalStatus": "USA: FDA-jóváhagyott 1999 (Aromasin 25 mg, Pharmacia, ma Pfizer; generic exemestane 2010+). Indikáció: postmenopauzális ER+ emlőkarcinóma adjuváns + metasztatikus, valamint post-Tamoxifen 2-3 év switch-protokollok (Bonneterre 2003 ITA-CL97). EU: EMA-jóváhagyott. HU: törzskönyvezett (Aromasin Rx). PL: törzskönyvezett (Aromasin Rx). WADA: S4.1 aromatáz-gátló — banned in/out-of-competition.",
  "onsetTime": "E2-csökkenés 12-24 óra, full effect 3-5 nap",
  "halfLife": "~27 óra (parent)",
  "halfLifeActive": "~24-48 óra (17-hydro-exemestane); pharmakodinamiás hatás 5-7 nap (irreverzibilis enzim-inaktiváció)",
  "interactionsWith": ["anastrozol", "letrozol", "nolvadex", "testosterone-info"],
  "aromatization": "Nem aromatizál — steroidal-class \"suicide inhibitor\" (irreverzibilis kovalens CYP19-kötés). Parent compound szteroid struktúrával rendelkezik (androstadiendion-analóg), nem agonist.",
  "hepatotoxicity": "Alacsony — szteroid-struktúra DE NEM 17α-alkilált. Hepatic AE <2% (FDA Aromasin label). 17-hydro-metabolit mild-AR-aktivitás nem jelent klinikailag releváns hepatikus stresszt.",
  "wadaStatus": "banned",
  "androgenicRatio": "Negligible — a 17-hydro-exemestane metabolit mild AR-affinitással rendelkezik (~5% testosterone-affinitás), klinikailag jelentéktelen anabolikus hatás, DE SHBG-csökkentő (free-Test rise mérhető).",
  "bindingAffinity": "CYP19-aromatáz aktív hely irreverzibilis kovalens kötés. 17-hydro-exemestane: AR Ki ~5-50 nM range (gyenge), ER minimal.",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás ~1 hónap az utolsó dose után.",
  "benefits": [
    "Suicide-inhibitor: no rebound E2 leállítás után — cycle-end taper-stability",
    "17-hydro-metabolit mild androgén — SHBG-drop és free-Test-rise mérhető (+5-10 ng/dL)",
    "Egyenletes E2-control (no daily fluctuation Anastrozol-szerűen)",
    "Lipid-panel mérsékeltebb hatás mint Letrozol (intermediate)",
    "FDA + EMA Rx pharma-grade globally available",
    "Megfizethető (~€30-50/box generic 25 mg)"
  ],
  "quickStart": [
    "Standard AAS E2-control: 12.5-25 mg EOD vagy 25 mg/nap",
    "Cycle-end taper stability: Aromasin a non-rebound profil miatt ideális (Anastrozol/Letrozol-leállítás után E2-spike, Aromasin után gradient)",
    "SHBG-emphasis stack (Test+Mast+Var blast): Aromasin bonusként SHBG-csökkentő → free-Test boost",
    "Vízzel + étkezés UTÁN (étkezéssel ~40% bioavailability-emelés vs üres-gyomor)",
    "Bloodwork: E2 LC-MS/MS pre-treatment + 7-10 nap múlva",
    "AI-naive felhasználón Aromasin biztonságosabb mint Letrozol (kevésbé crashed E2-rizikó)"
  ],
  "expectations": [
    {"label": "1-3. nap", "body": "E2-csökkenés mérhető (~50-70%). SHBG-drop érzékelhető, free-Test mérhetően emelkedik (vérvétel +5 nap után dokumentálható)."},
    {"label": "1-2. hét", "body": "Steady-state aromatáz-szuppresszió (~85-90%), Anastrozolnál kissé enyhébb total-E2-reduction de stabilabb baseline. Lipid-panel mérsékelt változás."},
    {"label": "Leállítás után 1. hét", "body": "E2 fokozatosan emelkedik (~5-7 nap teljes recovery — de novo aromatáz-szintézis). Rebound minimális, NO spike."},
    {"label": "Leállítás után 2-4. hét", "body": "Baseline E2 helyreáll. PCT-fázis indítható Nolvadex/Clomid SERM-szel."}
  ],
  "quality": {
    "pure": [
      "Pfizer Aromasin 25 mg tabletta, Rx-szer pharma-minőség (EU-pharmacy elérhető)",
      "Exemestan-ratiopharm, Exemestan Sandoz, Exemestan Teva generic (EU)",
      "Indiai generikum (Sun Pharma Aromasin-analóg, Cipla)",
      "UGL liquid exemestane: ritkábban használt, HPLC-tested forrás kötelező"
    ],
    "caution": [
      "Étkezéssel-induced bioavailability-emelés: konzisztens dosing timing (mindig étkezés UTÁN) ajánlott",
      "17-hydro-metabolit mild androgén → akne-push lehet stacked aromatizáló szteroideken",
      "CYP3A4-induktorok/-gátlók interakciók (mint Anastrozol)",
      "Lipid-panel kettős monitor: HDL-drop kisebb mint Letrozolnál de pozitív",
      "Hepatikus stressz: chronicus 17α-alkilált AAS-szel (Anadrol, Dianabol, Superdrol) kettős májmonitor szükséges"
    ],
    "avoid": [
      "Premenopauzális női AAS-használat (ovulációs disfunkció)",
      "Pregnancy / breastfeeding (Pregnancy Category X)",
      "Súlyos hepatikus insufficiencia (Child-Pugh C)",
      "AR-szenzitív gyno-history-val rendelkező felhasználón (17-hydro-mild-AR ronthatja a gyno-tendenciát)",
      "Prophylactic AAS-ciklus-eleji Aromasin baseline-bloodwork nélkül (crashed-E2 rizikó alacsonyabb mint Letrozolon, DE létezik)"
    ]
  },
  "interactions": [
    "Tamoxifen (Nolvadex): NEM ajánlott együtt PCT-ben (overlap-mechanism)",
    "Testosterone + Test-base stack: standard E2-control",
    "Dianabol/Anadrol stack: Aromasin mérsékelt hatású erős aromatáció ellen (Letrozol erősebb)",
    "Mast+Var stack: Aromasin SHBG-drop bonus → free-Test boost stack-szinergia",
    "Statinok: lipid-panel monitor",
    "Étkezés: bioavailability ~40%-os emelés (konzisztens dosing-időzítés ajánlott)"
  ],
  "studies": [
    {"title": "Anastrozole versus tamoxifen as first-line therapy for advanced breast cancer in 668 postmenopausal women: results of the Tamoxifen or Arimidex Randomized Group Efficacy and Tolerability study", "authors": "Bonneterre J, Buzdar A, Nabholtz JM, et al.", "journal": "Cancer. 2003;98(2):229-238.", "pmid": "14523076"},
    {"title": "Differential inhibition of aromatase by letrozole and anastrozole compared with exemestane in postmenopausal women with breast cancer", "authors": "Geisler J, Helle H, Ekse D, et al.", "journal": "Clin Cancer Res. 2008;14(20):6743-6750.", "pmid": "19012260"},
    {"title": "Effects of exemestane administered for 2 years versus placebo on bone mineral density, bone biomarkers, and plasma lipids in patients with surgically resected early breast cancer", "authors": "Lønning PE, Geisler J, Krag LE, et al.", "journal": "J Clin Oncol. 2005;23(22):5126-5137.", "pmid": "16091756"},
    {"title": "Pharmacokinetics and dose finding of a potent aromatase inhibitor, aromasin (exemestane), in young males", "authors": "Mauras N, Lima J, Patel D, et al.", "journal": "J Clin Endocrinol Metab. 2003;88(12):5951-5956.", "pmid": "12759427"}
  ],
  "faq": [
    {"q": "Suicide inhibitor — mit jelent praktikusan?", "a": "A 'suicide-inhibitor' (mechanism-based irreversible inhibitor) azt jelenti, hogy az Exemestane szubsztrát-analógként belekapcsolódik a CYP19-aromatáz aktív katalitikus ciklusába, és a reakció során reaktív köztitermékké alakul, amely kovalensen, permanensen lekapcsolja az enzimet. A pool-csökkentés gyűlik fel — minden dose a meglévő aromatáz-pool egy részét végleg inaktiválja. A recovery csak az új aromatáz-szintézistől függ (~5-7 nap félreaktiváció). Praktikusan: no E2-rebound a leállítás után (vs Anastrozol/Letrozol reverzibilis kötés, amelyek gyors E2-spike-ot okozhatnak). Cycle-end taper-stability és gradient-recovery előnyös."},
    {"q": "Exemestane mild anabolic — mit ad?", "a": "A 17-hydro-exemestane metabolit mild AR-affinitással rendelkezik (~5% testosterone), és SHBG-csökkentő hatású (Lønning 2005 dokumentálta SHBG-drop ~15-25% a postmenopauzális női populáción). AAS-felhasználón a free-Test (NEM total-Test) mérhetően emelkedik +5-10 ng/dL stabil dose-on. Klinikailag jelentéktelen anabolikus boost (NEM cycle-helyettesítő), DE measurable SHBG-emphasis stack-en (Mast+Var+Aromasin) szinergiát ad. Free-Test rise = jobb lib-libidó és muscle-protein-synthesis-szignál szubjektív szinten."},
    {"q": "Anastrozol vs Letrozol vs Exemestane — clinical decision tree?", "a": "Default: ANASTROZOL (1 mg EOD, könnyű titrálás, reverzibilis, klinikai default). Hard-suppression Tren+Mast stack vagy gyno-reverzálás: LETROZOL (erősebb, gyno-shrink képes). E2-stability/taper-end VAGY SHBG-emphasis: EXEMESTANE (no-rebound, free-Test rise bonusz). AI-naive felhasználónak: Anastrozolt vagy Aromasint válasszon (Letrozol crashed-E2 rizikó magasabb). Tren-only stack: gyakran semmilyen AI nem kell (Tren NEM aromatizál)."},
    {"q": "Lipid panel hatás?", "a": "Aromasin lipid-panel-hatása INTERMEDIATE: HDL-drop ~10-15% (vs Anastrozol ~10-20%, Letrozol ~20-30%), LDL-emelés ~5-10%. A Letrozolnál jelentősen enyhébb, közelít az Anastrozol-szinthez. Kardio-monitor: lipid-panel pre-cycle + 6. hét + post-cycle. Standard mitigációk: omega-3, krill oil, CoQ10. Ha LDL >180 mg/dL: berberin vagy statin szakorvosi konzultáció."}
  ],
  "related": ["anastrozol", "letrozol", "nolvadex", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 12.5, "medium": 25, "high": 25},
    "unit": "mg / EOD vagy nap (orális, étkezés UTÁN)",
    "note": "Standard AAS-E2-control: 12.5-25 mg EOD vagy 25 mg/nap. Cycle-end taper-stability + SHBG-emphasis-stack-szinergia esetén az Aromasin az első választás (no-rebound + free-Test rise bonusz). Étkezéssel: ~40% bioavailability-emelés vs üres-gyomor; konzisztens timing javasolt."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Aromasin-indítás előtt",
      "timing": "Ciklus 3-4. hét vagy gyno-symptom-onset",
      "markers": "E2 LC-MS/MS, Total/Free Testosterone, SHBG (Aromasin SHBG-monitor különösen!), lipid panel, ALT/AST, hemogram.",
      "purpose": "Baseline. SHBG-baseline különösen fontos: az Aromasin 17-hydro-metabolit SHBG-csökkentő, és a free-Test rise itt érhető tetten."
    },
    "midCycle": {
      "label": "Aromasin 7-10. nap",
      "timing": "Aromasin-indítás +7-10 nap",
      "markers": "E2 LC-MS/MS, SHBG (recovery monitor), Free Test, lipid panel, ALT/AST.",
      "purpose": "Titration confirm: E2 20-30 pg/mL, SHBG csökkenés és Free Test rise dokumentálás. Lipid-panel monitor: HDL-drop várt mild."
    },
    "postCycle": {
      "label": "Aromasin vége + recovery",
      "timing": "Utolsó dose +1 hét",
      "markers": "E2, SHBG (recovery), Total/Free Test, lipid panel.",
      "purpose": "Confirm: E2 fokozatosan visszatér baseline-re (5-7 nap, NO rebound). SHBG normalizálódik 2-4 hét alatt."
    },
    "cruise": {
      "label": "Hosszú távú AAS-cruise alacsony-dose",
      "timing": "Hetente 12.5-25 mg (egyéni titrálva)",
      "markers": "E2 LC-MS/MS havi, SHBG, lipid panel, DEXA scan évente.",
      "purpose": "TRT-cruise-on Aromasin alternatíva Anastrozol helyett ha SHBG-emphasis vagy stable-E2-profil cél. Long-term suppression BMD-monitor szükséges."
    }
  }
}
