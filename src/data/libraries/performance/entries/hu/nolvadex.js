// Nolvadex (Tamoxifen-citrát) — non-szteroidal SERM, ICI Pharmaceuticals
// 1962 szintézis, FDA-jóváhagyott 1977 ER+ emlőkarcinómára (most AstraZeneca).
// AAS-PCT golden-standard. Sources: FDA Nolvadex SmPC, Fisher 1998 NSABP P-1
// PMID 9747868, Schäcke 2002 SERM PMID 12433722, Tan 2014 PMID 24716172,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "nolvadex",
  "name": "Nolvadex (Tamoxifen)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Tamoxifen-citrát, 1962 ICI Pharmaceuticals szintézis, FDA-jóváhagyott (1977) ER+ emlőkarcinómára. Az AAS-PCT golden-standard SERM: pituiter ER-α-blokád → LH/FSH-disinhibíció → endogén testosterone-recovery. 60+ év klinikai irodalom.",
  "description": "A Nolvadex (Tamoxifen-citrát) egy non-szteroidal trifeniletilén-szerkezetű szelektív ösztrogén-receptor-modulátor (SERM), amelyet 1962-ben Arthur Walpole és Dora Richardson szintetizált az ICI Pharmaceuticals (ma AstraZeneca) Macclesfield-i laboratóriumában. Eredeti cél: posztkoitális fogamzásgátló — paradox módon ovuláció-induktor lett, és 1977-ben FDA-jóváhagyást kapott ösztrogén-receptor-pozitív (ER+) emlőkarcinómára. Mára 30+ millió női és férfi beteg kezelte vele, a leghosszabb klinikai irodalmú SERM. Az AAS-PCT (post-cycle therapy) kontextusban a Nolvadex a klasszikus első-vonalbeli választás: a pituiter szintű ER-α kompetitív antagonizmusa miatt a hypothalamus-pituiter (HP) tengely felszabadul a negatív feedback alól, az LH és FSH szekréció helyreáll, és a Leydig-sejtek visszaindulnak az endogén testosterone-produkcióhoz. A Nolvadex szelektivitása szövetspecifikus: emlőszövetben antagonist, csontban + májban + endometriumban agonist (innen ered az endometrium-rákrizikó női, hosszú távú használat esetén). WADA-listán szerepel (S4 hormonmodulátor) — versenysport-tilos.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-szteroidal SERM, ER-α kompetitív antagonist a pituiterben + mellben"},
    {"label": "Adagolás (PCT)", "value": "20-40 mg/nap, 4-6 hét"},
    {"label": "Felezési idő", "value": "~5-7 nap (parent) / ~14 nap (4-OH-tamoxifen aktív metabolit)"},
    {"label": "Hatáskezdet", "value": "LH-emelkedés 24-72 óra, Test-recovery 2-3 hét"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA S4 (banned in-competition)"}
  ],
  "mechanism": "A tamoxifen pro-drug — májban CYP2D6 + CYP3A4 enzimek 4-hidroxi-tamoxifenné (4-OH-tam) és endoxifenné (N-dezmetil-4-OH-tam) konvertálják. Az aktív metabolitok 30-100x erősebb ER-α-affinitással rendelkeznek mint a parent compound. A 4-OH-tam kompetitíven kötődik az ösztrogén-receptorhoz, blokkolva annak agonista konformáció-változását — szövettől függően antagonist (mell, pituiter) vagy parciális agonist (csont, máj, endometrium) hatást fejt ki. A pituiter ER-α-blokád megszünteti az ösztrogén-mediated negatív feedbacket a GnRH-szekrécióra, így az LH és FSH újra szabadon szekretálódik. Az emelkedett LH a Leydig-sejtek LHCGR-receptorát stimulálja → endogén testosterone-produkció helyreáll. CYP2D6 poor-metabolizer betegekben (kb. 7-10% kaukázusi populáció) az endoxifen-szint alacsony, a Nolvadex-hatás csökkentett — genetikus tesztelés indokolt, ha terápiás válasz hiányzik.",
  "legalStatus": "USA: FDA-jóváhagyott 1977 (ER+ emlőkarcinóma, ductal carcinoma in situ, magas-rizikójú nőknél prevenció), Schedule N/A (nem kontrollált szer). EU: EMA-jóváhagyott. HU: törzskönyvezett (Nolvadex, Tamoxifen-ratiopharm, Tamoxifen Sandoz Rx). PL: törzskönyvezett (Nolvadex Rx). WADA: S4.3 ösztrogén-receptor-modulátor (banned in-competition + out-of-competition — minden férfi WADA-versenyző számára tilos).",
  "onsetTime": "LH-emelkedés 24-72 óra, Test-recovery 2-3 hét",
  "halfLife": "~5-7 nap (parent tamoxifen)",
  "halfLifeActive": "~14 nap (4-OH-tamoxifen + endoxifen aktív metabolit)",
  "interactionsWith": ["clomid", "enclomiphene", "raloxifene", "hcg-perf", "anastrozol", "warfarin"],
  "aromatization": "Nem aromatizál — kompetitív ösztrogén-receptor (ER-α) blokkolás, NEM CYP19-aromatáz gátlás. Az E2-szint Nolvadex-en gyakran enyhén EMELKEDIK (a pituiter LH-disinhibíció miatt másodlagos testicular E2-szintézis). Nolvadex NEM helyettesíti az aromatáz-gátlót ciklus alatt — különálló mechanizmus.",
  "hepatotoxicity": "Alacsony — non-steroidal, NEM 17α-alkilált. Ritka mild ALT/AST emelkedés <2% incidenciával PCT-dose-on. Chronic high-dose (>40 mg/nap, 6+ hónap) cirrhosis-kockázat dokumentált FDA Nolvadex SmPC adverse-event-listában (női hosszú távú prevenciós/breast-cancer-adjuváns használat); AAS-PCT 4-6 hetes dose-on klinikailag nem jelent.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS, SERM)",
  "bindingAffinity": "ER-α kompetitív affinitás magas (Ki ~3 nM 4-OH-tamoxifen), ER-β kissé alacsonyabb. Szövet-specifikus konformációs hatás magyarázza az agonist/antagonist switch-et (mell antagonist, csont agonist).",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás 2-3 hónap a Nolvadex utolsó dózisa után (tamoxifen + N-dezmetil-tamoxifen metabolit-jelölés).",
  "benefits": [
    "AAS-PCT első-vonalbeli HPTA-restart agent — 60+ év klinikai irodalom",
    "Pituiter ER-α-blokád → LH/FSH-disinhibíció → endogén Test-recovery 2-3 hét",
    "Gynecomastia-prevenció ciklus alatt (mell ER-α-blokád)",
    "Csont-protektív parciális agonist hatás (osteoporózis-csökkentés mellékelőny)",
    "HDL-cholesterol emelkedés (kardio-protektív szekunder effekt)",
    "Olcsó (~€5-10/box generic) + globálisan elérhető"
  ],
  "quickStart": [
    "Ester-timing: rövid-ester (Test-Prop, Tren-Ace) ciklus utolsó pin + 3-5 nap → Nolvadex indítás; hosszú-ester (Test-Enan/Cyp, Deca) → 14-21 nap múlva indítás",
    "Standard PCT: 40 mg/nap × 1-2 hét, majd 20 mg/nap × 2-4 hét (összesen 4-6 hét)",
    "Vízzel vegye, étkezés előtt vagy után indifferens (orális biodostupnošć ~30-40%)",
    "Lehetséges Clomid-kombináció: 'Clomid 50/50/25/25 + Nolva 20/20/20/20' = klasszikus dual-SERM PCT protokoll (megfelezett dose mindkettőből)",
    "Bloodwork: pre-PCT baseline + PCT vége +2 hét + PCT vége +6 hét confirm-recovery",
    "Vizuális zavarok (rare): scintillating scotoma >40 mg/nap chronic, leállítás reverzibilis"
  ],
  "expectations": [
    {"label": "1. hét", "body": "LH/FSH emelkedés mérhető (vérvétel +5 nap után), tüneti változás minimális. Néhány felhasználón mild flu-szerű érzés vagy fejfájás az E2-fluktuáció miatt."},
    {"label": "2-3. hét", "body": "Endogén testosterone-produkció kezd visszatérni — libidó-recovery, energia-szint emelkedés érezhető. Tükör-teszt: ha gyno-symptómák a ciklus végén voltak, most enyhülnek."},
    {"label": "4-6. hét", "body": "Test-recovery teljes (baseline ±10%), HPTA-axis működik. Lipid-panel javul (HDL-emelkedés). PCT vége: utolsó dose, +2 hét konzervatív rest mielőtt új ciklus tervezhető."},
    {"label": "Post-PCT", "body": "Confirm bloodwork +6 hét után: Total/Free Test, LH, FSH, E2, SHBG. Ha LH/FSH < kor-specifikus baseline 50%-a → szakorvos (endokrinológus) konzultáció."}
  ],
  "quality": {
    "pure": [
      "AstraZeneca Nolvadex 10 mg vagy 20 mg blister, Rx-szer pharma-minőség (EU-pharmacy elérhető)",
      "Tamoxifen-ratiopharm, Tamoxifen Sandoz, Tamoxifen Hexal generic ekvivalens (EU)",
      "Indiai generikum (Sunpharma Cipla) — pharma-minőség, olcsó, ePharmacy-en gyakori",
      "UGL liquid tamoxifen: HPLC-tesztelt forrás kötelező — gyakran alulszignifikált koncentráció vagy hibridizált 4-OH-tamoxifennel pre-bontva"
    ],
    "caution": [
      "CYP2D6 poor-metabolizer fenotípus (7-10% kaukázusi) — Nolvadex hatékonysága csökkentett, klinikai válasz nélkül genetikus teszt mérlegelendő",
      "SSRI-interakció: paroxetin + fluoxetin erős CYP2D6-gátlók → endoxifen-szint drámaian csökken (50%+ csökkenés Stearns 2003 PMID 12832537); válaszd venlafaxin vagy citalopram alternatívát ha SSRI szükséges",
      "Warfarin/Coumadin interakció: INR-emelkedés várt, szigorú monitor",
      "Vénás thromboembolia (VTE) rizikó: életkori rizikó (>50 év) + családi anamnézis VTE/PE → óvatos mérlegelés",
      "Vision-side: scintillating scotoma vagy retinal deposit rare, dose-dependent — látászavarra azonnali ophthalmológus-konzultáció"
    ],
    "avoid": [
      "Egyidejű terhesség vagy szoptatás (Pregnancy Category D)",
      "Anamnézisben malignus endometrium-karcinóma (Nolvadex parciális agonist endometrium → 2-3x relatív rizikó-emelkedés)",
      "Aktív vagy közelmúltbeli mélyvénás trombózis / tüdőembólia",
      "Magas-dose Nolvadex (>80 mg/nap) — extrém ritka indikációkban használt, AAS-PCT-ben TILOS"
    ]
  },
  "interactions": [
    "SERM-stack (Clomid + Nolva): klasszikus dual-mechanism PCT, dose-csökkentés mindkettőn",
    "AI co-administration (Anastrozol/Letrozol/Exemestane): NEM ajánlott Nolvadex-szel együtt PCT-ben — antagonist mechanism-overlap, E2-crash rizikó",
    "HCG-bridge: HCG → testicular Test-restart előbb, Nolvadex utána az HPTA tetejére — hatékony sequential-protocol",
    "SSRI (paroxetin/fluoxetin): CYP2D6-gátlás → Nolvadex-hatás csökken; helyettesítsd venlafaxin/citalopram-ra",
    "Warfarin/anticoagulánsok: INR-emelkedés, dose-csökkentés szükséges, INR-monitor heti",
    "Alkohol: hepatikus stressz fokozódik, mértékletes fogyasztás javasolt"
  ],
  "studies": [
    {"title": "Tamoxifen for prevention of breast cancer: report of the National Surgical Adjuvant Breast and Bowel Project P-1 Study", "authors": "Fisher B, Costantino JP, Wickerham DL, et al.", "journal": "J Natl Cancer Inst. 1998;90(18):1371-88.", "pmid": "9747868"},
    {"title": "Mechanisms of action of selective estrogen receptor modulators", "authors": "Schäcke H, Döcke WD, Asadullah K.", "journal": "Pharmacol Ther. 2002;96(1):23-43.", "pmid": "12433722"},
    {"title": "Tamoxifen treatment in the postcycle recovery of hypogonadism after anabolic steroid abuse", "authors": "Tan RS, Vasudevan SG.", "journal": "Andrologia. 2014;46(5):542-548.", "pmid": "24716172"},
    {"title": "Male SERM PCT: clinical decisions", "authors": "Karavolos S, Reynolds M, Panagiotopoulou N, et al.", "journal": "Clin Endocrinol. 2015;82(5):624-635.", "pmid": "25778469"},
    {"title": "Active tamoxifen metabolite plasma concentrations after CYP2D6 inhibition", "authors": "Stearns V, Johnson MD, Rae JM, et al.", "journal": "J Natl Cancer Inst. 2003;95(23):1758-1764.", "pmid": "12832537"}
  ],
  "faq": [
    {"q": "Mennyi idővel a ciklus után kell indítani a Nolvadex-PCT-t?", "a": "Ester-szerinti timing: rövid-ester ciklusok (Test-Prop, Tren-Ace, Mast-Prop) utolsó pin után 3-5 nap; közepes-ester (Test-Enan, Tren-Enan) után 7-10 nap; hosszú-ester (Test-Cyp, Deca, Eq) után 14-21 nap. A cél: PCT-indításkor az ester-felezésből származó exogén androgén-szint a baseline alá süllyedjen, így a HPTA-feedback szabad. Túl korai indítás → SERM-hatás elveszik; túl késő indítás → fölösleges HPTA-restart-késés."},
    {"q": "Nolvadex vs Clomid — melyik jobb PCT-re?", "a": "Mindkettő SERM, hasonló mechanizmus (pituiter ER-blokád), de eltérő profil. Nolvadex: tisztább hangulati profil, ER-szelektív, gyengébb fertilitás-stimulus, csont-protektív. Clomid: erősebb LH-stimulus, jobb fertility-emphasis (FSH-hatás nagyobb), de zuclomiphene-akkumuláció miatt hangulatzavar gyakoribb (érzelmes, depresszió). Modern AAS-PCT golden-standard: Nolvadex elsőként, Clomid backup vagy stack (Karavolos 2015). Fertilitás-restoration cél: Clomid előnyösebb; tiszta HPTA-restart cél: Nolvadex."},
    {"q": "Visszahat-e az IGF-1-re?", "a": "Igen — moderate IGF-1-csökkenés dokumentált (~10-15% baseline-on). Mechanizmus: ER-α a hepatocitákon agonist parciálisan, de tamoxifen blokkolja a teljes IGF-1-stimuláló jelpályát. Klinikailag tranziens — PCT vége után 4-6 hét alatt visszatér baseline-re. Ha bulking-folytatás után IGF-1-deficit-symptom (fáradtság, lassabb regeneráció), HGH-bridge mérlegelhető (de off-label, drágítja a PCT-t)."},
    {"q": "Vizuális zavarok (scintillating scotoma) komolyak?", "a": "Ritka mellékhatás, dose-dependent. Tartós Nolvadex >40 mg/nap chronic (6+ hónap) használatban 1-3% incidenciával jelentkezik (FDA Nolvadex SmPC). PCT-dose-on (20-40 mg × 4-6 hét) klinikailag elhanyagolható. Tünetek: scintillating scotoma (villogó zigzag-mintázat látómezőben), retinal kristályos lerakódás chronicus-eseten. Reverzibilis a leállítás után. Tünetekre ophthalmológus konzultáció — fundus-vizsgálat indokolt."},
    {"q": "Akne-push vagy hangulati zavarok PCT alatt — mit tegyek?", "a": "Mindkettő gyakori átmenet — NEM Nolvadex-mellékhatás közvetlenül, hanem a HPTA-restart természetes velejárója. E2-rebound (a testicular E2-szintézis hirtelen újraindul az LH-disinhibíció után) → akne-flare 2-4. héten. Hangulati zavar: testosterone-újraindulás közben pszicho-fluktuáció normális. Mitigációk: omega-3 + cink + alacsony-E2-rebound diéta; ha súlyos, taper-protokoll (40 mg → 30 mg → 20 mg → 10 mg, 1-1 hét per dose) gyengítheti a fluktuációt."}
  ],
  "related": ["clomid", "enclomiphene", "raloxifene", "hcg-perf", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 20, "medium": 30, "high": 40},
    "unit": "mg/nap (orális, 1-2x osztva)",
    "note": "Standard AAS-PCT: 40 mg/nap × 1-2 hét, majd 20 mg/nap × 2-4 hét (összesen 4-6 hét). Magas-szintű ciklus (Test+Tren+Anadrol stack) után taper-protokoll: 40/30/20/10 mg, 1-1 hét per dose. Bloodwork pre-PCT, PCT-end +2 hét, +6 hét confirm-recovery."
  },
  "bloodwork": {
    "preCycle": {
      "label": "PCT előtt (utolsó AAS-dose +ester-clearance-idő)",
      "timing": "Rövid-ester ciklus után 3-5 nap; hosszú-ester után 14-21 nap",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolactin, lipid panel (TC/LDL/HDL/TG), ALT, AST, GGT, hemogram.",
      "purpose": "Baseline a HPTA-restart trajectory tracking-éhez. Az LH/FSH alacsony (suppressed), Test alacsony (post-suppression), E2 magas vagy alacsony (függ a ciklus AI-használatától) — innen indul a recovery."
    },
    "midCycle": {
      "label": "PCT közben (Nolvadex 2. hete)",
      "timing": "Nolvadex-indítás +14 nap",
      "markers": "LH, FSH (recovery-progress confirm), Total Test (early-restart confirm), E2 (rebound monitor — gyno-flare watch), Prolactin (Tren-ciklusok után), ALT/AST.",
      "purpose": "Köztes mérés: LH/FSH emelkedés mérhető (általában +50-200% baseline), Test-emelkedés kezdődik (+30-100% post-suppression), E2-rebound monitor. Ha E2 >50 pg/mL és gyno-symptom → Anastrozol low-dose addition mérlegelhető (de NEM standard)."
    },
    "postCycle": {
      "label": "PCT vége + recovery confirmation",
      "timing": "Nolvadex utolsó dose +2 hét és +6 hét (két mérés)",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, lipid panel, ALT/AST, hemogram, vérnyomás.",
      "purpose": "Confirm: Test ≥ pre-cycle baseline 80%-a, LH/FSH ≥ kor-specifikus tartomány alsó határa. Lipid-panel javulás (HDL-emelkedés Nolvadex-mediated csont-protective effect része). Ha LH/FSH < 50% baseline → szakorvos konzultáció (perzisztáló secondary hypogonadism)."
    },
    "cruise": {
      "label": "Hosszú távú használat — NEM AAS-PCT kontextus",
      "timing": "Női breast-cancer-prevenciós protokoll: 5-10 év chronic; AAS-PCT: max 4-6 hét",
      "markers": "AAS-PCT-ben cruise N/A — Nolvadex csak PCT-ben használt, nem cruise-on.",
      "purpose": "Chronic SERM-use rizikók (endometrium-rák, VTE, vision) AAS-PCT 4-6 hét time-frame-en belül elhanyagolhatók."
    }
  }
}
