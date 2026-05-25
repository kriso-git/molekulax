// FSH-rec (Gonal-F / Puregon) — Rekombináns FSH (CHO-expresszált), szelektív
// Sertoli-FSHR stimulus. AAS-PCT niche: azoospermia-recovery + Sertoli-támogatás
// HCG-LH mellett. Cross-frame: a future peptid-libben `fsh-rec-peptid`.
// Sources: EMA Gonal-F SPC (Merck Serono 1995), EMA Puregon SPC (Organon 1996),
// Burgues 1997 PMID 9176246, Liu 2009 PMID 19435775.

export default {
  "id": "fsh-rec-perf",
  "name": "FSH-rec (Gonal-F / Puregon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Rekombináns FSH (CHO-expresszált) — szelektív Sertoli-FSHR stimulus, NINCS LH-aktivitás. AAS-PCT niche: azoospermia-recovery + Sertoli-támogatás HCG-LH mellett. Drága (€300+/75 IU vial EU). Cross-frame: future peptid-libben `fsh-rec-peptid`.",
  "description": "Az FSH-rec (rekombináns follicle-stimulating hormone) egy bioteknológiai gyártású glikoprotein, amelyet kínai hörcsög-petefészek-sejt-vonalban (CHO, Chinese Hamster Ovary) expresszálnak. Két fő márkanév: Gonal-F (Merck Serono, EMA 1995, FDA 1997) és Puregon/Follistim (Organon, EMA 1996, FDA 1997). A rekombináns gyártás megoldotta az urinary-source-hoz kapcsolódó tisztítási problémákat (LH-szennyeződés a Pergonal-éránál, prion-rizikó vCJD-kontextusban) — a Gonal-F + Puregon tiszta FSH-aktivitást ad, NINCS LH-mellékaktivitás. **AAS-PCT kontextus**: az FSH-rec niche-pozíciója a Sertoli-szelektív stimulus szükségessége esetén áll fenn. Tipikus indikáció: hard-suppression hosszú-ciklus (>20 hét) vagy 'blast-and-cruise' utáni azoospermia-recovery, ahol a Leydig-funkcionalitás megőrződhet (HCG mid-cycle protokoll vagy endogén low-LH-restart), DE a Sertoli-FSH-receptor-aktivitás külön stimulus nélkül nem áll vissza. Az FSH-rec ekkor specifikus Sertoli-FSHR-aktivátorként hat → spermatogenesis-restart, inhibin-B-emelkedés. **Cross-frame note**: ez a `-perf` suffix entry, a future peptid-library batch hozza majd a `fsh-rec-peptid` entry-t (fertility-clinic-framing — IVF male-factor + ICSI sperm-prep protokoll). WADA-tilos egész évben (S2 Peptide Hormones).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Rekombináns FSH (CHO-expresszált) — szelektív Sertoli-FSHR-agonist, NINCS LH-aktivitás"},
    {"label": "Adagolás (PCT azoospermia-recovery)", "value": "75-150 IU EOD × 4-12 hét"},
    {"label": "Felezési idő", "value": "~24-36 óra (rekombináns)"},
    {"label": "Hatáskezdet", "value": "Inhibin-B emelkedés 2-4 hét, sperm-count emelkedés 3-9 hónap"},
    {"label": "Jogi státusz", "value": "EMA Rx Gonal-F (1995) + Puregon (1996), FDA Rx (1997), WADA S2 (banned)"}
  ],
  "mechanism": "Az FSH-rec a természetes follicle-stimulating hormone-mal strukturálisan azonos rekombináns glikoprotein (alfa + beta alegység, glikozilálási mintázat hasonló az endogén FSH-éhoz). Bioteknológiai forrás: CHO-sejt-vonal genetikailag módosítva humán FSH-α + FSH-β gének expresszálására (két plazmid együttes transzfekciója). Aktivitás: kizárólag Sertoli-sejt FSHR (FSH-receptor) agonizmus, a Leydig-sejteket NEM stimulálja (mivel a Leydig-LHCGR receptor LH-specifikus). Az FSH-effekt: spermatogenezis-szabályozás (Sertoli-elhajlított Sertoli-sejt-érés → spermatogonium-számolás), inhibin-B-produkció (Sertoli-marker), androgén-binding protein (ABP) szintézis. AAS-PCT-kontextusban a Sertoli-stimulus NEM helyettesíti a Leydig-stimulust (Test-emelkedés FSH-rec-en nem várt) — ezért a klasszikus protokoll HCG + FSH-rec dual-stimulus.",
  "legalStatus": "USA: FDA Rx Gonal-F (Merck Serono 1997 jóváhagyás), Follistim (Organon 1997). EU: EMA Rx Gonal-F (1995), Puregon (1996). HU + PL: törzskönyvezett (Gonal-F, Puregon Rx). WADA: S2.2 Peptide Hormones (banned in-competition + out-of-competition).",
  "onsetTime": "Inhibin-B emelkedés 2-4 hét, sperm-count emelkedés 3-9 hónap",
  "halfLife": "~24-36 óra (rekombináns FSH, SC injekció)",
  "halfLifeActive": "Klinikai effect 3-5 nap (single dose)",
  "interactionsWith": ["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"],
  "aromatization": "Nincs direkt aromatizáció — FSH NEM stimulál Leydig-Test-produkciót, tehát endogén Test-emelkedés csak HCG-vel kombinálva. FSH-rec monotherapy E2-szint nem emeli klinikailag.",
  "hepatotoxicity": "Nincs hepatikus stressz — rekombináns fehérje SC injekció.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS; szelektív Sertoli-stimulus)",
  "bindingAffinity": "FSH-FSHR Kd ~0.1 nM, kizárólag Sertoli-sejteken expresszált receptor. Magasabb tisztaság-szint mint urinary-extracted HMG-FSH-effekt.",
  "detectionWindow": "WADA-akkreditált immunoassay urinary FSH detection — rekombináns FSH-marker megkülönböztethető az endogén FSH-tól specifikus glikolezilálási mintázat alapján (Bidlingmaier 2010-es publikációk).",
  "benefits": [
    "Szelektív Sertoli-stimulus (spermatogenezis-recovery emphasis cél)",
    "Magasabb tisztaság-szint mint HMG (urinary-extracted FSH-LH mix)",
    "Klinikai trial-database széles (fertility-clinic 25+ év)",
    "Pre-filled pen-syringe kényelmes adagolás (Gonal-F injection pen)",
    "Standardizált aktivitás (rekombináns batch-konzisztens)"
  ],
  "quickStart": [
    "Sertoli-emphasis protokoll: 75-150 IU EOD × 4-12 hét + HCG mid-cycle (Leydig-stimulus szétkapcsolt)",
    "Reconstituálás: pre-filled pen (Gonal-F) vagy ampoule + bact-water (Puregon ampoule)",
    "Pen-dosing: 12.5 IU-os kalibrált lépésekkel (Gonal-F multi-dose pen 300/450/900 IU patron)",
    "SC injekció (hasi vagy combi szövetbe, 27-30G fecskendő)",
    "Tárolás: pre-filled pen 2-8°C 28 napig (folyékony oldat), liofilizált ampoule szobahőmérséklet",
    "Pricing: Gonal-F 75 IU pen ~€300-400 EU pharmacy; long-term-cost megemelkedik",
    "Bloodwork: inhibin-B (Sertoli-marker, baseline + 4 hét + 12 hét), sperm-analysis (3-9 hónap)"
  ],
  "expectations": [
    {"label": "1-2. hét", "body": "Sertoli-restart kezd, inhibin-B még alacsony (mérhető rise 3-4. hét). Klinikailag tüneti változás minimális."},
    {"label": "4. hét", "body": "Inhibin-B mérhetően emelkedik (Sertoli-aktivitás restoration). Spermatogenezis-cycle 64-74 nap, ezért látható sperm-count-rise 8-12 hét után."},
    {"label": "3-9 hónap", "body": "Sperm-count visszatérés mérhető (változó protokoll-szerint). Long-term-recovery cél esetén HMG-bridge után 3-6 hónap szükséges."},
    {"label": "Post-protocol", "body": "Sperm-analysis sperm-count + motility-confirmation. Ha cél fertility-success → IVF/ICSI sperm-prep kontextusra."}
  ],
  "quality": {
    "pure": [
      "Gonal-F 75 IU pre-filled pen (Merck Serono) — Rx pharma-minőség (EU + USA)",
      "Gonal-F 300/450/900 IU multi-dose patron (Merck Serono) — Rx, költséghatékonyabb hosszú-protokollon",
      "Puregon/Follistim 50/75/100/150 IU ampoule (Organon) — Rx pharma-minőség",
      "UGL rekombináns FSH — RITKA (rekombináns gyártás bonyolult, kevés UGL-source), HPLC + immunoassay-tesztelt forrás kötelező",
      "Indiai biosimilar (Folicare, Recagon) — egyes EU-pharmacy-n elérhető, pharma-minőség"
    ],
    "caution": [
      "Pricing magas — €300-400/75 IU vial vs Menopur €20-25/75 IU; long-term-recovery cél esetén HMG költséghatékonyabb",
      "Sertoli-only-emphasis — Leydig-stimulus külön szükséges (HCG vagy endogén LH-recovery)",
      "OHSS-risk (Ovarian Hyperstimulation Syndrome) female-indikációban — férfi-paciens N/A",
      "Klinefelter-szindróma esetén FSH-rec NEM hat (Sertoli-defektus eredet primér)"
    ],
    "avoid": [
      "Klinefelter-szindróma vagy egyéb Y-chromosome-deletion (Sertoli-primér-defektus)",
      "Aktív testicular tumor vagy past germ-cell-tumor",
      "Anamnézisben prosztata-karcinóma",
      "Hypersensitivity FSH-re vagy CHO-cell-derived excipiensre"
    ]
  },
  "interactions": [
    "HCG-kombináció: standard 'HCG + FSH-rec' dual-stimulus full-axis-restart (LH-Leydig + FSH-Sertoli külön)",
    "HMG alternative: ha cost-effectiveness fontos és LH-stimulus is needed → HMG (mixed FSH+LH) helyettesítheti",
    "SERM-bridge (Nolvadex/Clomid): post-protocol PCT standard",
    "Gonadorelin: hypothalamic upstream-stimulus, FSH-rec downstream — sequential-protocol opcionálisan",
    "TRT: NEM kombinálható (Sertoli-FSHR downregulation chronic Test-exposure mellett)"
  ],
  "studies": [
    {"title": "Fertility outcomes in male adults with congenital hypogonadotropic hypogonadism treated during puberty with human chorionic gonadotropin and recombinant follicle stimulating hormone.", "authors": "Grob F, Keshwani R, Angley E", "journal": "J Paediatr Child Health", "pmid": "38572627"},
    {"title": "Congenital combined pituitary hormone deficiency patients have better responses to gonadotrophin-induced spermatogenesis than idiopathic hypogonadotropic hypogonadism patients.", "authors": "Mao J, Xu H, Wang X, Wu X, Nie M, Zhang H, Han B, Liu Z, Zhang K, Lian S, Lu S, Wang X, Chen N, Sun B, Liu J, Cui Q", "journal": "Hum Reprod", "pmid": "26141714"},
    {"title": "Addition of recombinant follicle-stimulating hormone to human chorionic gonadotropin treatment in adolescents and young adults with hypogonadotropic hypogonadism promotes normal testicular growth and may promote early spermatogenesis.", "authors": "Zacharin M, Sabin MA, Nair VV, Nicolaides R", "journal": "Fertil Steril", "pmid": "22763096"}
  ],
  "faq": [
    {"q": "FSH-rec vs HMG — mikor szelektív FSH kell?", "a": "Két forgatókönyv: (1) cost-effectiveness: HMG (~€20-25/75 IU) sokkal olcsóbb mint FSH-rec (~€300-400/75 IU) — DE HMG mixed FSH+LH-t ad, ami felesleges ha HCG-vel külön LH-stimulust adunk. (2) Tiszta Sertoli-emphasis cél: ha az LH-szintet más úton stabilizáljuk (HCG-bridge vagy endogén low-LH-restart), és csak Sertoli-stimulus kell → FSH-rec szelektivitás előny. Klinikai gyakorlatban gyakran HMG + HCG költséghatékonyabb mint FSH-rec + HCG."},
    {"q": "Azoospermia-recovery sebessége?", "a": "Lassú folyamat — spermatogenezis-cycle 64-74 nap, tehát első sperm-count-emelkedés 8-12 hét, full recovery 3-9 hónap a hard-suppression-mérték függvényében. Klinikai gyakorlatban a Liu 2002 PMID 11870114 protokoll: FSH-rec 150 IU EOD × 12-24 hét, kombinálva HCG 1000-2000 IU EOD-vel. Spermatogenesis-restoration azoospermiás férfin 60-80% (függő a hard-suppression-mértéktől és a duration-tól)."},
    {"q": "Költség?", "a": "Magas. Gonal-F 75 IU pre-filled pen €300-400, Puregon ampoule €280-350. Long-term protokollon (12-24 hét) a kumulatív cost €5000-15000-ig terjedhet. Költséghatékonyabb alternatívák: (1) HMG (Menopur) ~€20-25/75 IU LH-FSH mixed; (2) Indiai biosimilar (Folicare, Recagon) ~€100-150/75 IU. Klinikai értelemben mindhárom hatékony, csak a tisztaság-szint és FSH-szelektivitás eltér."},
    {"q": "Tartós sterilitás esetében használható?", "a": "Igen — az FSH-rec a primér klinikai indikáció hypogonadotrópikus hipogonadizmussal (Kallmann-szindróma, idiopátiás secondary hypogonadism, hypothalamic injury) társuló férfi-infertilitásban. AAS-mediated secondary hypogonadism (anabolic-steroid-induced hypogonadism, ASIH) hasonló mechanizmus, klinikai protokoll átvehető. 6-12 hónap FSH-rec + HCG kombinációval 60-80% sperm-recovery várható, függő a hard-suppression-mértéktől."}
  ],
  "related": ["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 75, "medium": 112.5, "high": 150},
    "unit": "IU/dose (SC, EOD-frequency)",
    "note": "Azoospermia-recovery protokoll: 75-150 IU EOD × 4-12 hét, HCG-vel kombinálva (HCG 1000-2000 IU EOD). Single-protocol-cél 12-24 hét. SC injekció (hasi vagy combi szövetbe, 27-30G fecskendő). Pen-dosing kényelmesebb chronic-protokollon. NEM monotherapy (FSH-only Sertoli-stimulus → Leydig-funkcionalitás külön kell)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Protokoll előtt",
      "timing": "Hosszú-ciklus utáni 4-6 hét rest, vagy hard-suppression dokumentált azoospermia",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, Prolactin, inhibin-B (Sertoli-baseline), sperm-analysis (baseline azoospermia-confirmation), ALT, AST.",
      "purpose": "Baseline a spermatogenesis-recovery + Sertoli-aktivitás tracking-éhez. Klinefelter vagy Y-chromosome-deletion kizárás genetikai teszttel (karyotype + AZF-microdeletion-screening)."
    },
    "midCycle": {
      "label": "Protokoll közben (4. hét)",
      "timing": "Indítás +4 hét",
      "markers": "FSH (rekombináns kontroll), inhibin-B (Sertoli-aktivitás-marker — KÖTELEZŐ), Total Test (HCG-co-admin effect), E2.",
      "purpose": "Inhibin-B emelkedés a Sertoli-restart indikátora. Ha inhibin-B NEM emelkedik 4 hét után, dose-emelés (150 → 225 IU EOD) mérlegelhető."
    },
    "postCycle": {
      "label": "Protokoll vége + spermatogenesis-recovery confirmation",
      "timing": "Utolsó dose +8 hét és +12 hét",
      "markers": "Sperm-analysis (count + motility + morphology), inhibin-B, Total Test, LH, FSH.",
      "purpose": "Spermatogenesis-recovery confirmation. Ha sperm-count < 5 mill/mL és inhibin-B < normal-range → +12 hét extension mérlegelhető (Liu 2002 protokoll szerint up to 24 hét)."
    },
    "cruise": {
      "label": "Long-term cycle-cycle fertility-preservation",
      "timing": "Évente sperm-analysis + inhibin-B",
      "markers": "Sperm-cryopreservation lehetőség (single-cycle-recovery után sperm-bank).",
      "purpose": "Multi-cycle AAS-felhasználón a fertility-preservation cél esetén évente FSH-rec-bridge protokoll (4-6 hét) megelőzheti a long-term azoospermia-rizikót."
    }
  }
}
