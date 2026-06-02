// HMG (Menopur / Pergonal) — Humán Menopauzális Gonadotropin, fertility-Rx
// framing. Cross-frame counterpart: `hmg-perf` AAS-PCT framing-gel.
// Sources: EMA Menopur SPC (Ferring 2002), Liu 2009 PMID 19066302,
// Liu 2002 Hum Reprod PMID 11870114, Hill 2018 (Int J Impot Res — no PMID).

export default {
  "id": "hmg-peptid",
  "name": "HMG (fertilitás)",
  "image": "/peptides/HMG.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Humán Menopauzális Gonadotropin — 1:1 FSH+LH glikoprotein. Teljes spermatogenezis-induction (Leydig + Sertoli kettős axis), IVF szuper-ovuláció. Klinikai Rx infertilitás-indikációkra (HypoH férfi + IVF-ovulation-induction nő), NEM doping. Cross-frame: AAS-PCT-kontextusban a `hmg-perf` entry.",
  "description": "Az HMG (Humán Menopauzális Gonadotropin) egy postmenopauzális női vizeletből tisztított glikoprotein-keverék, amely **körülbelül 75 IU FSH (follicle-stimulating hormone) + 75 IU LH (luteinizing hormone) 1:1 arányban** tartalmaz egy standard ampoulában. A modern klinikai HMG-források: (1) **urinary-extracted** (Menopur Ferring 2002 EMA, 2005 FDA — magasabb-tisztaságú urinary-purified termék; a régebbi Pergonal Serono 1962 globálisan kivonva ~2005 vCJD-rizikó-csökkentés miatt); (2) **rekombináns menotropin** (kutatási stádium, klinikai forgalom limitált). **Mechanizmus duális gonadotropin-axis stimulus**: az HMG egyedi értéke a klinikai fertilitás-kezelésben, hogy MIND a Leydig-sejteket (LH-komponens → testosterone-produkció), MIND a Sertoli-sejteket (FSH-komponens → spermatogenezis-támogatás + inhibin-B produkció) stimulálja. A HCG mono-protokoll CSAK Leydig-LH-axist hozza fel (intratesticular testosterone emelkedik, de a Sertoli-FSH-támogatás hiányzik) → a teljes spermatogenezis-induction-hez HCG + HMG kombináció szükséges hypogonadotrop hypogonadizmusban (HypoH). **Klinikai indikációk** (FDA + EMA Rx): (1) **férfi spermatogenezis-induction** HypoH-ben (Kallmann-szindróma, idiopátiás HypoH, hipofízis-eredetű infertilitás): 75-150 IU SC 3x/hét × 6-24 hónap, HCG-vel stacked; (2) **női IVF-szuper-ovuláció** és COS (controlled ovarian stimulation): 75-300 IU/nap individualizált. **Cross-frame note**: ugyanaz a Menopur-vial, mint az AAS-felhasználói PCT-protokollokban (`hmg-perf` entry) — eltérő narratíva (klinikai infertilitás vs sport-cycle-recovery), AZONOS farmakológia. WADA-tilos egész évben (S2 Peptide Hormones).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "1:1 FSH+LH glikoprotein-keverék — Sertoli-FSHR + Leydig-LHCGR receptor double-stimulus, teljes HPG-axis induction"
    },
    {
      "label": "Adagolás (férfi HypoH spermatogenezis)",
      "value": "75-150 IU SC 3x/hét × 6-24 hónap (HCG-vel stacked)"
    },
    {
      "label": "Adagolás (női IVF/COS)",
      "value": "75-300 IU/nap (individualizált follikulometria-alapú titrálás)"
    },
    {
      "label": "Felezési idő",
      "value": "FSH-komponens ~12-20 h / LH-komponens ~8-12 h"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx Menopur (Ferring), WADA S2 (banned in+out-of-competition)"
    }
  ],
  "mechanism": "Az HMG egy két-komponensű glikoprotein-keverék: (1) **FSH** (follicle-stimulating hormone) — Sertoli-sejt FSHR-receptor agonist → cAMP-PKA pathway → spermatogenezis-stimulus (germ-cell-érés Sertoli-mediated támogatása) + inhibin-B produkció + androgen-binding-protein (ABP) szintézis; (2) **LH** (luteinizing hormone) — Leydig-sejt LHCGR-receptor agonist → cAMP-PKA pathway → szteroidogenezis (cholesterol → pregnenolone → testosterone). A két komponens biológiai t1/2-je eltér: FSH ~12-20 h, LH ~8-12 h (a saját endogén LH-hoz hasonló rövid t1/2, ezért a klinikai protokollok 3x/hét vagy napi dosing-ot használnak). **Klinikai duális-axis logika**: HypoH-férfi spermatogenezis-induction-hez a Sertoli-FSH-stimulus NÉLKÜLÖZHETETLEN; a HCG-monoterápia (LH-mimikry) intratesticular testosterone-t emel, de a germ-cell-érés Sertoli-FSH-támogatás nélkül NEM teljes. A standard induction-protokoll: HCG-monoterápia 3-6 hónap (Leydig-axis felépítés, ITT-emelés), majd HCG + HMG kombináció (FSH-axis hozzáadása) → spermatogenezis 6-24 hónapon belül indukálható ~70-90%-ban (Liu 2009).",
  "legalStatus": "**USA**: FDA Rx Menopur (Ferring 2005 jóváhagyás) — indikációk: COS-IVF, ovulation induction, male HypoH spermatogenezis-induction. **EU**: EMA Rx Menopur (Ferring 2002 jóváhagyás) — azonos indikációk. **HU + PL**: törzskönyvezett (Menopur Rx, gyakori IVF-klinikai használat). **Pergonal** (Serono történelmi termék, 1962-2005) globálisan kivonva vCJD theoretical risk + urinary-source-csökkentés miatt. **WADA**: S2.2 Peptide Hormones — banned in-competition + out-of-competition minden férfi versenyző számára egész évben (kivétel: dokumentált infertilitás-Rx TUE-protokollon).",
  "onsetTime": "Hormonális válasz 24-48 óra (Test-emelkedés + inhibin-B mérhető); klinikai spermatogenezis-induction 3-6 hónap (HCG-vel stacked protokollon)",
  "halfLife": "FSH-komponens ~12-20 óra; LH-komponens ~8-12 óra",
  "halfLifeActive": "Klinikai effect 2-3 nap (single SC bolus után, mixed FSH+LH component decay)",
  "interactionsWith": [
    "hcg-peptid",
    "hmg-perf",
    "kisspeptin",
    "anastrozol",
    "gonadorelin"
  ],
  "aromatization": "Indirekt: testicular FSH+LH stimulus → endogén Test-emelkedés → másodlagos peripheral E2-konverzió a testis + adipose CYP19-aromatáz révén. Magnitude moderate (kissé alacsonyabb mint pure HCG-protokoll, mert Sertoli-FSH-aktivitás dominál a Leydig-Test-emelés felett). Klinikai infertilitás-kontextusban E2-monitoring általában nem szükséges (a célzott Test-emelés a fiziológiás induction-érték, nem suprafiziológiás), de magas-dose HMG (>150 IU EOD) esetén E2-watch indokolt lehet gyno-szenzitív felhasználón.",
  "hepatotoxicity": "Nincs hepatikus stressz — fehérje-alapú szubkután (SC) vagy intramuszkuláris (IM) injekció, NEM oral, NEM 17α-alkilált. Hepatic enzyme rise nem dokumentált a 60+ év klinikai trial-database-en.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS; indirekt testicular Test-stimulus + Sertoli-spermatogenezis-stimulus)",
  "bindingAffinity": "FSH-komponens: FSHR Kd ~0.5 nM (Sertoli-sejt). LH-komponens: LHCGR Kd ~0.3 nM (Leydig-sejt). A HMG mixed-receptor-binding profilja egyedi — a tisztított urinary-extracted termékben FSH/LH-arány batch-szerint kissé varíálhat (~70-80 IU FSH : 70-80 IU LH per 75/75-címkézett ampoula).",
  "detectionWindow": "WADA-akkreditált isoelectric focusing (IEF) urinary test — urinary-extracted HMG vs endogén pituitary-FSH/LH megkülönböztetése izoelektromos pont-eltolódás alapján. Single bolus után 5-7 nap detektálható, chronic protokoll után 10-14 nap. Recombinant FSH (Gonal-F) jobban detektálható az IEF-en, urinary HMG nehezebben (endogén overlap-szerinti false-negative rizikó).",
  "benefits": [
    "Teljes spermatogenezis-induction HypoH-férfi (~70-90% sikerráta HCG-vel stacked protokollon, Liu 2009)",
    "Duális FSH+LH axis: a Sertoli-FSH-támogatás kiegészíti a HCG-csak Leydig-LH stimulus-t",
    "IVF-szuper-ovuláció (COS) női infertilitás-protokoll: standard EU + USA klinikai protokoll-elem",
    "Inhibin-B produkció helyreállítása (Sertoli-funkcionalitás-marker)",
    "60+ év klinikai trial-database (Pergonal 1962 óta, Menopur 2002 óta) — extenzív biztonsági adatok",
    "Olcsó (Menopur 75 IU vial ~€25-40 EU pharmacy)"
  ],
  "quickStart": [
    "Férfi HypoH spermatogenezis-induction (stacked HCG-vel): HCG-monoterápia 2000-2500 IU SC 2-3x/hét × 3-6 hónap (Leydig-axis felépítés, ITT-emelés); ha azoospermia perzisztál → HMG hozzáadása 75-150 IU SC 3x/hét × 6-24 hónap (FSH-axis kombinálása). Bloodwork 3 havonta (Test, FSH, LH, inhibin-B, sperm count).",
    "Női IVF/COS (klinikai protokoll): 75-300 IU/nap SC, ovariális válasz-monitoring follikulometria-val (transvaginalis ultrahang), individualizált titrálás reprodukciós endokrinológus által.",
    "Reconstituálás: Menopur 75 IU vial-hoz mellékelt szolvens (általában 1 mL sterile water for injection); steril gyakorlat (alkoholos tisztítás, NEM rázni, gentle swirl). SC injekció 27-30G inzulin-fecskendővel (hasi vagy combi szövet).",
    "Tárolás: liofilizált vial szobahőmérséklet (long-term-tárolás 2-8°C); reconstituált oldat AZONNAL beadandó vagy 2-8°C max 28 nap.",
    "Bloodwork férfi-induction-on: pre-protocol baseline (Test, FSH, LH, inhibin-B, semen analysis), majd 3 havonta full-panel; női IVF-en a fertility-klinika follikulometria + E2-titrálás protokollját követni.",
    "TUE (Therapeutic Use Exemption) versenyző-felhasználónak: dokumentált infertilitás-Rx esetén WADA-TUE pályázat szükséges használat előtt."
  ],
  "expectations": [
    {
      "label": "1-3. hónap (HCG-monoterápia)",
      "body": "Test-emelkedés mérhető (3-7 nap), testikulár-volumen részben helyreáll (HypoH-baseline-on jellemzően <10 mL → 15-20 mL felé). Spermatogenezis MÉG NEM aktiválódik (Sertoli-FSH-stimulus hiányzik)."
    },
    {
      "label": "4-6. hónap (HMG hozzáadása)",
      "body": "FSH-stimulus elindítja a Sertoli-cell-mediated germ-cell-érést. Inhibin-B emelkedik (Sertoli-funkcionalitás-marker). Spermium-megjelenés a semen-analízisen 6-9 hónap között várható (egyéni varíáció)."
    },
    {
      "label": "6-12. hónap",
      "body": "Sperm count fokozatos emelkedés (oligozoosperm → normozoosperm tartomány felé). Klinikai cél: spontán fogamzás vagy IUI-eligible sperm count + motilitás."
    },
    {
      "label": "12-24. hónap",
      "body": "Tartós spermatogenezis-stabilizáció. Sikeres induction esetén HCG-monoterápiára visszaváltás (FSH-stop), a Sertoli-axis ekkor már self-sustaining. ~70-90% klinikai sikerráta (Liu 2009, n=75 HypoH-férfi)."
    }
  ],
  "quality": {
    "pure": [
      "Menopur 75 IU vial (Ferring 2002 EMA / 2005 FDA) — golden-standard urinary-extracted HMG, magasabb-tisztaságú, EU + USA pharmacy elérhető",
      "Menopur 1200 IU multi-dose vial (Ferring) — IVF-klinikai protokoll-csomag",
      "Bemfola 75 IU (Gedeon Richter) — európai biosimilar pure FSH (NEM HMG, hanem rFSH — alternatíva azoknak, akiknek pure FSH kell)",
      "Pergonal — TÖRTÉNELMI, globálisan kivonva ~2005 (vCJD-rizikó-csökkentés); ha valaki ma 'Pergonal'-t árul, az gyanús grey-market készlet vagy fake",
      "UGL HMG — KERÜLENDŐ infertilitás-Rx célra: a klinikai protokoll precíz dose-titrálást igényel, UGL-batch-szerű FSH/LH-arány-bizonytalanság az induction sikerét veszélyeztetheti"
    ],
    "caution": [
      "Női IVF-felhasználón: ovarian hyperstimulation syndrome (OHSS) rizikó magas-dose mellett — kötelező reprodukciós endokrinológus felügyelete (NEM önprotokoll)",
      "Férfi induction-protokollon az első 3-6 hónap során spermium MÉG NEM várható (Sertoli-FSH-stimulus elindításához idő kell) — pszichés frusztráció-rizikó, klinikai kontaktus fontos",
      "TUE dokumentáció versenyző-felhasználónak: a WADA-TUE pályázatot a használat ELŐTT kell benyújtani (retrospektív TUE általában elutasítva)",
      "Reconstituált oldat 2-8°C max 28 nap (egészségügyi steril gyakorlat kötelező)",
      "Magas-dose HMG (>150 IU EOD chronic) → E2-rebound és gyno-rizikó gyno-szenzitív férfi felhasználón → AI co-admin megfontolandó (Anastrozol 0.25 mg EOD)"
    ],
    "avoid": [
      "Aktív testicular tumor / past testicular cancer (gonadotropin-receptor-pozitív tumor stimulus-rizikó)",
      "Anamnézisben prosztata-karcinóma vagy magas-rizikójú prosztata-helyzet",
      "Hypersensitivity HMG-re vagy urinary-extracted alapanyagra (ritka)",
      "Női IVF-en: OHSS-történet, súlyos ovariális ciszta, kezelhetetlen hyperprolactinemia",
      "Pre-pubertás férfi → KONTRAINDIKÁLT (prematuré szexuális érés)"
    ]
  },
  "interactions": [
    "**HCG stack-partner** (kötelező spermatogenezis-induction-protokollban): HCG 2000-2500 IU 2-3x/hét + HMG 75-150 IU 3x/hét → full HPG-axis induction",
    "**Aromatase-inhibitor (Anastrozol 0.25 mg EOD)**: opcionális E2-kontroll magas-dose HMG-on gyno-szenzitív férfi felhasználón",
    "**SERM (Clomid, Nolvadex)**: NEM co-administered HMG-protokollon — eltérő mechanizmus (SERM = endogén GnRH-stimulus, HMG = exogén FSH+LH bypass)",
    "**rFSH (Gonal-F, Puregon)**: alternatíva pure FSH-axis-stimulus-hoz (ha LH-komponens nem szükséges; pl. már megfelelő endogén LH van)",
    "**Gonadorelin/kisspeptin**: NEM stacked (eltérő mechanizmus — pulsatile GnRH-stimulus vs exogén gonadotropin-bypass), de elméleti follow-up protokoll-elem long-term induction után",
    "**TRT (testosterone replacement)**: KONTRAINDIKÁLT a HMG-induction-protokollon — exogén Test szuppresszálja a HPG-axist, ami az induction célja ellen dolgozik"
  ],
  "studies": [
    {
      "title": "Induction of spermatogenesis and fertility during gonadotropin treatment of gonadotropin-deficient infertile men: predictors of fertility outcome",
      "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.",
      "journal": "J Clin Endocrinol Metab. 2009;94(3):801-808.",
      "pmid": "19066302"
    },
    {
      "title": "Predicting pregnancy and spermatogenesis by survival analysis during gonadotrophin treatment of gonadotrophin-deficient infertile men",
      "authors": "Liu PY, Gebski VJ, Turner L, Conway AJ, Wishart SM, Handelsman DJ.",
      "journal": "Hum Reprod. 2002;17(3):625-633.",
      "pmid": "11870114"
    },
    {
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "Int J Impot Res. 2018;30:262-269."
    }
  ],
  "faq": [
    {
      "q": "Miért HMG és nem csak HCG-monoterápia spermatogenezis-induction-re?",
      "a": "A HCG MONOTERÁPIA csak a Leydig-LH-axist stimulálja → intratesticular testosterone emelkedik, de a Sertoli-cell-mediated germ-cell-érés FSH-stimulus nélkül NEM teljes. HypoH-férfi-induction-protokollon a standard sorrend: (1) HCG-monoterápia 3-6 hónap (Leydig-axis felépítés); (2) ha azoospermia perzisztál → HMG hozzáadása (FSH-axis stack-add) → spermatogenezis ~70-90%-ban indukálható (Liu 2009). A HMG egyedi értéke a klinikai protokollban a duális FSH+LH stimulus, ami az endogén pituiter gonadotropin-szekréciót mimikálja."
    },
    {
      "q": "Mi a különbség HMG és rFSH (Gonal-F, Puregon) között?",
      "a": "**HMG** (Menopur): postmenopauzális női vizeletből tisztított, 1:1 FSH+LH keverék. Klinikai értéke a duális gonadotropin-stimulus (Leydig+Sertoli egyszerre). **rFSH** (Gonal-F Serono, Puregon Organon): rekombináns DNS-technológiával előállított TISZTA FSH, NINCS LH-komponens. Klinikai választás: ha a felhasználónak már elég endogén LH van (vagy HCG-vel külön stack-elve), de a Sertoli-FSH-axis hiányzik → rFSH elégséges. Ha mindkét axis-stimulus szükséges (klasszikus HypoH) → HMG egyetlen-injekcióban szállítja mindkettőt. Költség: rFSH ~2-3x drágább (~€60-80/75 IU vs HMG €25-40)."
    },
    {
      "q": "Mennyi időbe telik a spermatogenezis-induction sikere?",
      "a": "Lassú folyamat: 6-24 hónap a klinikai trial-átlag (Liu 2009, n=75 HypoH-férfi, median 9 hónap). A spermatogenezis-ciklus emberben ~74 nap (germ-cell-érés Sertoli-mediated), tehát biológiailag NEM lehet gyorsítani — minimum 3 ciklust (~9 hónap) kell várni a steady-state-hez. Prediktor-faktorok: testicular-volumen pre-treatment (>4 mL kedvező), genetikus HypoH-oka (Kallmann jobb prognózisú mint hipofízis-tumor-post-surgery), induction-protokoll-adherencia (skipped pinek lassítják). Pszichés felkészülés fontos: az első 6 hónap során spermium MÉG NEM várható."
    },
    {
      "q": "Lehet HMG-t használni TRT-mellett vagy TRT helyett?",
      "a": "**TRT-mellett: KONTRAINDIKÁLT.** Az exogén testosterone (TRT) szuppresszálja a HPG-axist (negative feedback a hypothalamusra), ami az HMG-induction célja ellen dolgozik. A férfi-fertility-Rx-protokollon a TRT-t le KELL állítani min. 6 hét HMG-start előtt. **TRT helyett HypoH-induction-re**: az HMG NEM TRT-helyettesítő — a Test-emelkedés indirekt (Leydig-stimulus), kisebb magnitude mint direct TRT, és klinikai cél a spermatogenezis-induction, NEM symptomatic-Test-deficiency-kezelés. HypoH-férfi-felhasználón, akinek prioritás a fertility (családalapítás), a teljes induction-protokoll alatt (6-24 hónap) HMG+HCG, utána TRT-re visszaváltás opcionális (de a fertility-window-on belül NEM)."
    },
    {
      "q": "Cross-frame: ugyanaz a Menopur, mint az AAS-PCT-protokollokban?",
      "a": "Igen — identikus molekula. A `hmg-peptid` (jelen entry, fertility-Rx-framing) és a `hmg-perf` (AAS-PCT-framing) entry-k ~80% content-overlap-pel rendelkeznek (azonos kémiai struktúra, farmakológia, beadás-mód). A KÜLÖNBSÉG a framing: `hmg-peptid` klinikai infertilitás-Rx kontextusban (HypoH spermatogenezis-induction, IVF női COS), míg `hmg-perf` AAS-post-cycle-recovery-kontextusban (Sertoli-FSH-stimulus a hosszú-ciklus utáni spermatogenezis-restart-hoz). A felhasználó ugyanazt a Menopur-vial-t veheti meg a fertility-klinikán Rx-re vagy az AAS-cycle-recovery-protokoll-elemként — eltérő narratíva, azonos farmakológia."
    }
  ],
  "related": [
    "hcg-peptid",
    "hmg-perf",
    "kisspeptin"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 75,
      "medium": 150,
      "high": 300
    },
    "unit": "IU/dose (SC vagy IM, dose-frequency protokoll-specifikus)",
    "note": "**Férfi HypoH spermatogenezis-induction (stacked HCG-vel)**: 75-150 IU SC 3x/hét × 6-24 hónap. **Női IVF/COS**: 75-300 IU/nap individualizált follikulometria-alapú titrálás reprodukciós endokrinológus által. **Standard induction-protokoll**: HCG-monoterápia 3-6 hónap → ha azoospermia perzisztál, HMG hozzáadása FSH-axis-stack-add. NEM önprotokoll: reprodukciós endokrinológus felügyelete (különösen női IVF-en OHSS-rizikó miatt)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Induction-protokoll előtt",
      "timing": "HCG-monoterápia indítása előtt",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, Prolactin, SHBG, inhibin-B, semen-analízis (sperm count + motilitás + morfológia), testicular volumen (palpáció + ultrahang), genetikus HypoH-screening (karyotype + Y-mikrodeleció).",
      "purpose": "Baseline a fertility-induction-trajectory tracking-éhez + prediktor-faktorok azonosítása (testicular-volumen, genetikus háttér)."
    },
    "midCycle": {
      "label": "Induction-protokoll közben",
      "timing": "Minden 3 hónap",
      "markers": "Total Test, E2 (gyno-watch magas-dose HMG-on), inhibin-B (Sertoli-funkcionalitás-marker), semen-analízis (sperm count + motilitás trend).",
      "purpose": "Spermatogenezis-induction progress monitoring + dose-adjustment (ha inhibin-B nem emelkedik → HMG-dose-emelés vagy duration-extension)."
    },
    "postCycle": {
      "label": "Sikeres induction után (HMG-stop)",
      "timing": "Spermatogenezis-stabilizáció után 6 hét",
      "markers": "Total Test, LH, FSH, semen-analízis, fertility-confirmation (IUI-eligible vagy spontán fogamzás).",
      "purpose": "HMG-stop után HCG-monoterápiára visszaváltás (Sertoli-axis self-sustaining) — confirm hogy a sperm count nem esik vissza azoospermia-szintre."
    },
    "cruise": {
      "label": "Long-term maintenance (családalapítás-window-on belül)",
      "timing": "Minden 6 hónap",
      "markers": "Full HPG panel + semen-analízis.",
      "purpose": "Multi-year fertility-window-on belüli HCG-monoterápia (HMG-mentes) protokoll long-term effect monitoring."
    }
  },
  "anecdote": null
};
