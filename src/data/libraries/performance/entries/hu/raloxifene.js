// Raloxifene (Evista) — benzothiophene-osztályos SERM, Eli Lilly 1997 FDA
// postmenopauzális osteoporózisra; 2007 update ER+ emlőkarcinóma chemoprevencióra.
// AAS-kontextus niche használat: létező gynecomastia REVERZÁLÁSA (stronger
// breast-szelektivitás mint Nolvadex). Sources: FDA Evista SmPC, Lawrence 2004
// PMID 14744776, Cummings 1999 MORE PMID 10580020, Vogel 2006 STAR PMID 16754727,
// Khan 2002 male gyno PMID 11843724.

export default {
  "id": "raloxifene",
  "name": "Raloxifene (Evista)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Benzothiophene-SERM, FDA-jóváhagyott (1997 Lilly) postmenopauzális osteoporózisra + ER+ emlőkarcinóma chemoprevencióra. AAS-kontextus niche használat: létező gynecomastia reverzálása erősebb mell-szelektivitással mint a Nolvadex. NEM primér HPTA-restart SERM.",
  "description": "A Raloxifene (Evista) egy benzothiophene-osztályú szelektív ösztrogén-receptor-modulátor (SERM), kémiailag eltérő a trifeniletilén-szerkezetű Nolvadex/Clomidtól. Eli Lilly 1997-ben FDA-jóváhagyást kapott postmenopauzális osteoporózisra (MORE trial Cummings 1999 PMID 10580020), és 2007-ben kibővítették az indikációt invazív ER+ emlőkarcinóma chemoprevencióra magas-rizikójú postmenopauzális nőkben (STAR trial Vogel 2006 PMID 16754727 — Raloxifene vs Tamoxifen head-to-head: hasonló prevenciós hatékonyság, alacsonyabb VTE-rizikó). Szövetspecifikus profil: ER-α antagonist a mell + méh szövetben, agonist a csontban. Az AAS-kontextusban a Raloxifene niche-pozíciót foglal el: létező gynecomastia REVERZÁLÁSÁRA (NEM HPTA-axis-restart) — Lawrence 2004 PMID 14744776 mutatott 50%+ csökkenést pubertás-kori gyno-szövetben 6 hónap alatt. A Nolvadexnél stronger anti-estrogenic mell-szövet-szelektivitást ad, ami magyarázza az emlőszövet-célzott alkalmazását. Glükuronizáció a primér metabolizmus (NEM CYP2D6, mint a Tamoxifené), ami elkerüli az SSRI-interakciót — ez az egyik gyakorlati előny. FDA Evista label: vénás thromboembolia (VTE) black-box warning, 3-fold relatív rizikó-emelkedés vs placebo (MORE-trial-adat).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Benzothiophene SERM, ER-α antagonist mell+méh, agonist csont"},
    {"label": "Adagolás (AAS gyno-reverzálás)", "value": "60 mg/nap × 6-12 hét"},
    {"label": "Felezési idő", "value": "~27 óra (napi 1x dose)"},
    {"label": "Hatáskezdet", "value": "Gyno-szövet-regresszió 6-12 hét"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx (postmenopauzális osteo + breast-cancer prevenció), WADA S4 (banned)"}
  ],
  "mechanism": "Raloxifene benzothiophene-szerkezetű SERM, kémiailag eltérő a trifeniletilén-szerkezetű Nolvadex/Clomidtól. Kompetitíven kötődik az ER-α-hoz a mellben és az endometriumban antagonist konformáció-változással, a csontban viszont parciális agonist (innen a osteo-protective hatás). Az emlőszövet ER-α-szelektivitása STRONGER mint Nolvadexé — ezért hatékonyabb létező gynecomastia szövet-regresszióban (Lawrence 2004 PMID 14744776). Pituiter ER-blokádot is ad, de mass-effect-szempontból gyengébb mint a Nolvadex (Raloxifene NEM primér HPTA-restart-SERM). Glükuronizáció a primér metabolizmus (UGT1A1/1A8/1A10) — KIVÁLÓ tulajdonság: NINCS CYP2D6-interakció (vs Tamoxifen), tehát SSRI-stack (paroxetin, fluoxetin) szabadon kombinálható.",
  "legalStatus": "USA: FDA-jóváhagyott 1997 (Evista, postmenopauzális osteo), 2007 indikációs kibővítés (invazív ER+ breast-cancer prevenció magas-rizikójú nők). EU: EMA-jóváhagyott (Evista, Optruma Rx). HU + PL: törzskönyvezett (Evista Rx). WADA: S4.3 ösztrogén-receptor-modulátor (banned in-competition + out-of-competition férfiak).",
  "onsetTime": "Gyno-szövet-regresszió mérhető 4-6 hét, klinikailag jelentős 6-12 hét",
  "halfLife": "~27 óra (napi 1x dose)",
  "halfLifeActive": "~27 óra (nincs aktív metabolit, parent compound a fő szer)",
  "interactionsWith": ["nolvadex", "clomid", "enclomiphene", "anastrozol", "letrozol"],
  "aromatization": "Nem aromatizál — szelektív ER-α antagonist (mell + méh), partial agonist csont. NEM CYP19-gátló. Nem érinti közvetlenül az aromatáz-axis-t.",
  "hepatotoxicity": "Alacsony — non-steroidal, nem 17α-alkilált. FDA Evista label hepatic adverse events <2% incidencia. Glükuronizáció primér metabolizmus (NEM CYP-mediated → kevesebb DDI).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/A (nem AAS, SERM)",
  "bindingAffinity": "ER-α kompetitív affinitás magas (Ki ~50 nM), ER-β alacsonyabb. Tissue-specific konformációs hatás magyarázza a tissue-szelektivitást (mell antagonist, csont agonist).",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás ~1-2 hónap (raloxifene-glükuronid metabolit-jelölés).",
  "benefits": [
    "Létező gynecomastia REVERZÁLÁSA — stronger breast-szelektivitás mint Nolvadex (Lawrence 2004 PMID 14744776 50%+ regresszió 6 hónap)",
    "NINCS CYP2D6-interakció (vs Tamoxifen) → SSRI-stack (paroxetin/fluoxetin) szabadon kombinálható",
    "Csont-protective parciális agonist hatás (osteoporózis-csökkentés mellékelőny)",
    "STAR trial-adat Vogel 2006: hasonló prevenciós hatékonyság mint Tamoxifen, alacsonyabb VTE-rizikó női-paciens",
    "Olcsó, generic-elérhető Európa-szerte"
  ],
  "quickStart": [
    "Gyno-reverzálás protokoll: 60 mg/nap × 6-12 hét, étkezéstől függetlenül",
    "Bloodwork pre-protocol: D-dimer + INR/PT baseline (VTE-screening kötelező), lipid panel, hepatic panel, Total/Free Test, E2, prolactin (Tren-ciklus után)",
    "Nem helyettesíti a Nolvadex-PCT-t — Raloxifene NEM HPTA-restart-emphasized; ha PCT-cél is van, Nolvadex stack-elhető",
    "VTE-rizikó: anamnézisben DVT/PE/tüdőembólia abszolút kontraindikáció; családi VTE-anamnézis óvatos mérlegelés",
    "Mass-tartás ciklus alatt: Raloxifene + Anastrozol kombináció (gyno-prevenció + E2-szuppresszió) niche-protokoll edzőtermi-kontextusban"
  ],
  "expectations": [
    {"label": "1-2. hét", "body": "Gyno-szövet érzékenység csökkeni kezd. Mérhető tükör-teszt-változás minimális, DE szubjektív kompresszió-érzet enyhül."},
    {"label": "3-6. hét", "body": "Gyno-szövet visible regresszió kezd (Lawrence 2004 trial: 30-50% csökkenés 6 hét alatt). Csont-protektív hatás mellékelőnyként."},
    {"label": "7-12. hét", "body": "Maximum gyno-regresszió (50%+ csökkenés átlagosan). Protokoll lezárása vagy fenntartó-dose mérlegelése."},
    {"label": "Post-protocol", "body": "Confirm-bloodwork (E2, lipid panel, D-dimer). Ha gyno-szövet még jelen, +6 hetes meghosszabbítás megengedett. Tartós szövet → sebészeti konzultáció (mastectomia)."}
  ],
  "quality": {
    "pure": [
      "Eli Lilly Evista 60 mg blister, Rx pharma-minőség (EU + USA elérhető)",
      "Optruma 60 mg (Eli Lilly EU-brand) — pharma-minőség, törzskönyvezett",
      "Raloxifene-Sandoz, Raloxifene-Teva generic ekvivalens (EU)",
      "Indiai generikum (Cipla Raloxa) — pharma-minőség, ePharmacy"
    ],
    "caution": [
      "VTE-rizikó: 3-fold relatív rizikó-emelkedés vs placebo (FDA Evista label black-box warning) — anamnézis kötelező",
      "Hot flashes mellékhatás gyakori (~25-30% felhasználón) — nőknél tipikus, férfin enyhébb",
      "Lábikra-krampusz, ödéma ritka",
      "Raloxifene NEM HPTA-restart-SERM — ne keverd össze a Nolvadex-PCT-vel; eltérő use-case"
    ],
    "avoid": [
      "Anamnézisben DVT/PE/tüdőembólia (abszolút kontraindikáció FDA label)",
      "Aktív VTE-rizikó-tényezők (postoperatív, immobilizáció, magas-cholesterol + cardiovascular comorbidity)",
      "Egyidejű terhesség (Pregnancy Category X — női-partner)",
      "Aktív máj-zavar (relatív kontraindikáció)"
    ]
  },
  "interactions": [
    "Nolvadex stack: NEM ajánlott (mechanism-overlap, ER-blokád mass-effect redundáns) — válassz egyet",
    "AI co-administration (Anastrozol/Letrozol/Exemestane): kombinálható mass-protokollban (E2-szuppresszió + gyno-szövet-célzás)",
    "SSRI (paroxetin/fluoxetin): SZABADON kombinálható (glükuronizáció-only metabolizmus, NINCS CYP2D6-interakció — KIVÁLÓ tulajdonság vs Tamoxifen)",
    "Warfarin: minimális interakció (vs Tamoxifen, ahol erős CYP-interakció)",
    "Cholestyramin: 40%-os abszorpció-csökkenés — 4 órás távolság a dose-ok között",
    "Cardio-protective szerek (statin, aszpirin): jól kombinálható"
  ],
  "studies": [
    {"title": "The effect of raloxifene on risk of breast cancer in postmenopausal women: results from the MORE randomized trial. Multiple Outcomes of Raloxifene Evaluation.", "authors": "Cummings SR, Eckert S, Krueger KA, Grady D, Powles TJ, Cauley JA, Norton L, Nickelsen T, Bjarnason NH, Morrow M, Lippman ME, Black D, Glusman JE, Costa A, Jordan VC", "journal": "JAMA", "pmid": "10376571"},
    {"title": "Effects of tamoxifen vs raloxifene on the risk of developing invasive breast cancer and other disease outcomes: the NSABP Study of Tamoxifen and Raloxifene (STAR) P-2 trial", "authors": "Vogel VG, Costantino JP, Wickerham DL, et al.", "journal": "JAMA. 2006;295(23):2727-41.", "pmid": "16754727"},
    {"title": "Beneficial effects of raloxifene and tamoxifen in the treatment of pubertal gynecomastia.", "authors": "Lawrence SE, Faught KA, Vethamuthu J, Lawson ML", "journal": "J Pediatr", "pmid": "15238910"},
    {"title": "Treatment of adolescents with gynecomastia.", "authors": "Malozowski S, Stadel BV", "journal": "J Pediatr", "pmid": "15812473"}
  ],
  "faq": [
    {"q": "Gyno-reverzálás Nolvadex vs Raloxifene?", "a": "Nolvadex: prevention + ciklus alatti pre-emptive (block-mechanism); Raloxifene: REVERZÁLÁS létező gyno-szöveten (stronger breast-szelektivitás). Klinikai döntés-fa: ciklus alatti gyno-prevention → Nolvadex; ciklus utáni létező gyno-rescue (Lawrence 2004 protokoll) → Raloxifene. Egyaránt biztonságos, NEM stack-elhető (mechanism-overlap)."},
    {"q": "VTE-rizikó valós-e a férfiakon is?", "a": "Adat-hiányos (Evista trial-ek postmenopauzális nőkön végződtek). Theoretical: a 3-fold VTE-rizikó-emelkedés ER-modulation effect, valószínűleg férfin is jelentkezik valamilyen mértékben. Praktikus protokoll: anamnézis (családi DVT/PE), D-dimer baseline, mozgásos életmód a ciklus alatt; ha bármi rizikófaktor (postoperatív, immobilizáció, magas LDL + dohányzás), NE használj."},
    {"q": "Lehet PCT-axis-restart-ra használni?", "a": "Limited evidence — Karavolos 2015 review-ja említi, de NEM elsősorban erre tervezett. Pituiter ER-blokádot ad, de mass-effect gyengébb mint Nolvadex/Clomid → HPTA-restart suboptimal. Ha gyno-reverzálás + PCT egyszerre van cél, Nolvadex stand-alone vagy Nolvadex + Raloxifene NEM kombinálva (mechanism-overlap), inkább Nolvadex önmagában + post-PCT Raloxifene-bridge a maradék gyno-szövetre."},
    {"q": "Csont-hatás férfin?", "a": "Pozitív osteo-benefit dokumentált — bone-mineral-density (BMD) emelkedés trabecular bone-on (Cummings 1999 MORE trial). AAS-PCT post-ciklus mellékelőnye lehet (post-ciklus-oststeoporózis-rizikó kissé csökken). Long-term-use chronic-on nem teljesen ismert vizsgált férfi-cohortban."}
  ],
  "related": ["nolvadex", "clomid", "enclomiphene", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 60, "medium": 60, "high": 120},
    "unit": "mg/nap (orális, napi 1x)",
    "note": "Gyno-reverzálás protokoll: 60 mg/nap × 6-12 hét. Severe gyno esetén 120 mg/nap × 4-6 hét off-label (Khan 2002 case-report dose), DE VTE-rizikó figyelendő. Étkezéstől függetlenül."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Protokoll előtt",
      "timing": "2 héttel kezdés előtt",
      "markers": "D-dimer + INR/PT (VTE-screening), Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, SHBG, Prolactin, lipid panel, ALT, AST, hemogram.",
      "purpose": "VTE-rizikó-baseline (KÖTELEZŐ FDA black-box warning miatt). Hormon-baseline gyno-szövet-context-hez."
    },
    "midCycle": {
      "label": "Protokoll közben (4-6. hét)",
      "timing": "Indítás +4-6 hét",
      "markers": "D-dimer (VTE-monitor), Total Test, E2, lipid panel, hot-flashes-frequency-napló.",
      "purpose": "VTE-monitoring + gyno-szövet-regresszió követés (tükör-teszt + opcionális ultrahang)."
    },
    "postCycle": {
      "label": "Protokoll vége + recovery",
      "timing": "Utolsó dose +2 hét és +6 hét",
      "markers": "D-dimer, Total Test, E2, lipid panel, gyno-szövet-status-konfirm (klinikai vizsgálat vagy ultrahang).",
      "purpose": "VTE-rizikó visszaáll baseline-re. Gyno-szövet-regresszió végleges mérése."
    },
    "cruise": {
      "label": "Long-term — női indikációkban",
      "timing": "Postmenopauzális osteo: 5-10 év chronic; AAS gyno-reverzálás: max 6-12 hét",
      "markers": "AAS-kontextusban cruise N/A.",
      "purpose": "Chronic Raloxifene-use férfin nem releváns AAS-protokollra; gyno-reverzálás cél után stop."
    }
  }
}
