// rFSH (Gonal-F / Puregon / Follistim / Bemfola) — Rekombináns FSH, fertilitás-
// klinikai Rx framing. Cross-frame counterpart: `fsh-rec-perf` (AAS-PCT FSH-axis
// recovery). Sources: EMA Gonal-F SPC (Merck Serono 1995), EMA Puregon SPC
// (Organon 1996), FDA Follistim label (MSD), Bouloux 2003 PMID 11744708,
// Liu 2009 PMID 19389810, Matorras 2009 PMID 16735417.

export default {
  "id": "fsh-rec-peptid",
  "name": "rFSH (fertilitás)",
  "image": "/peptides/rFSH.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Rekombináns FSH — szelektív Sertoli-sejt stimulus (nincs LH-aktivitás). Spermatogenezis-induction, IVF male/female-factor klinikai Rx-keret.",
  "description": "Az rFSH (rekombináns follikulus-stimuláló hormon) egy CHO-sejtben (Chinese Hamster Ovary) expresszált glikoprotein, strukturálisan és funkcionálisan azonos az endogén humán FSH-val (α + β alegység, glikozilációs minta klinikailag ekvivalens). Forrás-brandek: Gonal-F (Merck-Serono, EMA 1995, FDA 1997), Puregon / Follistim (Organon → MSD, EMA 1996, FDA 1997), Bemfola (Gedeon Richter, EMA 2014 — biosimilar). A rekombináns gyártás megoldotta a vizelet-eredetű FSH-derivátumok (Pergonal-éra, Menopur) szennyezettségi problémáit: ZÉRÓ LH-aktivitás, magasabb sarzs-konzisztencia, prion-rizikó kizárva. Mechanizmus: szelektív Sertoli-sejt FSHR (FSH-receptor) agonist → spermatogenezis-támogatás, inhibin-B-szintézis, androgén-kötő fehérje (ABP) produkció. **Fertilitás-klinikai Rx kontextus**: ez a `-peptid` suffix entry a férfi HypoH (hipogonadotrop hipogonadizmus) spermatogenezis-indukció + IVF male-factor/female-factor protokoll narratíva. Kulcs differenciátor a HCG-vel szemben: a HCG a Leydig-oldalt (testosterone-produkció) hozza, az rFSH a Sertoli-oldalt (spermatogenezis) — a fertilitás-restorationhoz MINDKETTŐ kell, monoterápia inadekvát. **Cross-frame note**: az AZONOS molekula `fsh-rec-perf` néven a performance-libben jelen van AAS-PCT FSH-axis-recovery kontextusban (azoospermia recovery hard-suppression után). Pharmacy-választás identikus, csak a narratíva más. WADA-tilos egész évben (S2.1 Peptide Hormones).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Szelektív Sertoli-sejt FSHR-agonist (rekombináns, CHO-expresszált, NINCS LH-aktivitás)"
    },
    {
      "label": "Adagolás (férfi spermatogenezis)",
      "value": "75-150 IU SC 3x/hét × 6-24 hónap (HCG-vel kombinálva)"
    },
    {
      "label": "Adagolás (női IVF)",
      "value": "75-450 IU/nap, ovariális válasz alapján individualizált"
    },
    {
      "label": "Felezési idő",
      "value": "24-36 óra SC (hosszabb mint urinary-FSH)"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (Gonal-F, Puregon, Follistim, Bemfola), WADA S2 (banned)"
    }
  ],
  "mechanism": "Az rFSH egy heterodimer-glikoprotein: α-alegység (közös LH-val, HCG-val, TSH-val) + β-alegység (FSH-specifikus). Biotechnológiai forrás: CHO-sejtvonal két plazmidos ko-transzfekcióval (FSH-α + FSH-β gén). Glikozilációs minta klinikailag ekvivalens az endogén humán FSH-val, de a recombinant-protein mass-spec-analízissel megkülönböztethető — ez a WADA-detekció alapja. Receptor-binding: kizárólag Sertoli-sejt FSHR-agonist (Kd ~0.1 nM). Leydig-sejt LHCGR-en NEM aktív (FSH ↔ LH/HCG-receptorszelektivitás teljes). Sertoli-aktiváció → cAMP-PKA pathway → spermatogenezis-támogató funkciók: spermatogóniumok érése, inhibin-B-produkció (Sertoli-marker), androgén-kötő fehérje (ABP) szintézis ami intratesticularis testosteron-koncentrációt fenntartja. Fertilitás-kontextusban a teljes spermatogenezis-restorationhoz HCG (Leydig-Test stimulus) + rFSH (Sertoli stimulus) DUAL-protokoll szükséges — mert a sperm-produkció Test-kontroll alatt (intratesticularis), de a Sertoli FSH-stimulust külön igényli.",
  "dosingInfo": "Férfi spermatogenezis-induction (HCG-vel stacking): 75-150 IU SC 3x/hét (pl. Mon/Wed/Fri) × 6-24 hónap. A HCG-háttérdózis 1500-3000 IU SC 2-3x/hét kezdetben (Leydig-stimulus first → Test normalizálódik 3-6 hónap alatt), majd rFSH hozzáadva. Női IVF/ovariális stimulus: 75-450 IU/nap SC, individualizált ovariális válasz alapján (ultrahang follikulus-monitoring + szérum E2-titrálás). Reconstitucio: Gonal-F pre-filled pen (12.5 IU-s lépésekben kalibrált, 300/450/900 IU multi-dose cartridge); Puregon ampoule + bact-water (50/75/100/150 IU dose-formák); Bemfola pre-filled disposable pen. SC injekció (hasi vagy combi szövetbe, 27-30G inzulin-fecskendő vagy pen-tű). Steril gyakorlat: alkoholos tisztítás, NE rázni (denaturáció).",
  "studies": [
    {
      "title": "Induction of spermatogenesis by recombinant follicle-stimulating hormone (puregon) in hypogonadotropic azoospermic men who failed to respond to human chorionic gonadotropin alone",
      "authors": "Bouloux PM, Nieschlag E, Burger HG, Skakkebaek NE, Wu FC, Handelsman DJ, et al.",
      "journal": "J Androl. 2003;24(4):604-11.",
      "pmid": "11744708"
    },
    {
      "title": "Predictors of fertility outcome in gonadotropin-deficient men: a clinical perspective",
      "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.",
      "journal": "J Clin Endocrinol Metab. 2009;94(3):801-8.",
      "pmid": "19389810"
    },
    {
      "title": "Recombinant FSH versus highly purified urinary FSH: a randomized clinical trial in intrauterine insemination with husbands' sperm",
      "authors": "Matorras R, et al.",
      "journal": "Reprod Biomed Online. 2009;19(2):216-22.",
      "pmid": "16735417"
    }
  ],
  "legalStatus": "USA: FDA Rx Gonal-F (Merck-Serono, 1997 approval), Follistim (MSD, 1997). EU: EMA Rx Gonal-F (1995), Puregon (Organon → MSD, 1996), Bemfola (Gedeon Richter, 2014 — biosimilar referencia: Gonal-F). HU: törzskönyvezett (Gonal-F, Puregon, Bemfola — magyar gyártó GR előny). PL: zarejestrowane (Gonal-F, Puregon, Bemfola). Indikációk: férfi hipogonadotrop hipogonadizmus (spermatogenezis-induction), női IVF ovariális stimulus, anovuláció. Kötelező Rx + szakorvosi (endokrinológus, reproduktív medicina, urológus). WADA: S2.1 Peptide Hormones (banned in-competition + out-of-competition egész évben minden férfi versenyzőnek; kiivételmentes).",
  "onsetTime": "Hormonális válasz (Sertoli-aktiváció, inhibin-B-emelkedés) 24-72 óra; klinikai spermatogenezis-effekt 3-6 hónap HCG-kombinációval (spermatogenezis-ciklus 64-74 nap)",
  "halfLife": "24-36 óra SC injekció után (hosszabb mint a vizelet-eredetű FSH ~18-24 óra)",
  "interactionsWith": [
    "hcg-peptid",
    "hmg-peptid",
    "anastrozol",
    "letrozol",
    "kisspeptin"
  ],
  "wadaStatus": "banned",
  "related": [
    "hcg-peptid",
    "hmg-peptid",
    "fsh-rec-perf",
    "kisspeptin"
  ],
  "faq": [
    {
      "q": "Miért nem elég a HCG egyedül a férfi fertilitás-restorationhoz?",
      "a": "A HCG csak a Leydig-sejt LHCGR-receptort aktiválja → testicularis testosteron-produkció helyreáll, libido + erection + Test-driven szövetek visszatérnek. DE a spermatogenezis a Sertoli-sejtekben zajlik, amik FSH-stimulust igényelnek. HCG-monoterápián gyakori a 'Test-szint helyreállt, de azoospermia perzisztál' helyzet — különösen hard-suppression long-cycle vagy multi-year AAS után, vagy congenital HypoH-ban. Bouloux 2003 (PMID 11744708) pontosan ezt dokumentálja: HCG-non-responder azoospermic férfiakon a Puregon-addition spermatogenezis-recovery-t hoz 60-80%-ban. Klasszikus protokoll: HCG 3-6 hónapig (Leydig-priming), majd HCG+rFSH dual 6-24 hónapig (full HPG-axis stimulus)."
    },
    {
      "q": "rFSH vs HMG (Menopur) — mikor melyiket?",
      "a": "Két szempont dönt. (1) **Tisztaság-igény**: az rFSH 100% FSH (NINCS LH-szennyezés), HMG mixed FSH+LH ~1:1 arányban (urinary-extracted). Ha a beteg már HCG-n van (Leydig-stimulus fedve), az rFSH-szelektivitás logikusabb — az LH-overlap (HMG) redundáns. (2) **Költség**: rFSH (Gonal-F) ~€300-400/75 IU EU-ban, HMG (Menopur) ~€20-25/75 IU — 12-24 hónapos protokollon a különbség €5000-15000. Klinikai outcome (Matorras 2009 PMID 16735417, intrauterine insemination kontextusban) hasonló, csak a tisztaság + dosing-precíz reprodukálhatóság előnye az rFSH-é. Magyar piacon a Bemfola (Gedeon Richter biosimilar) köztes árazás, ami a kompromisszum-választás."
    },
    {
      "q": "Női IVF-en miért szükséges az ovariális válasz-monitoring?",
      "a": "Az rFSH-stimulus ovariális válasza interindividuálisan EXTRÉM változó (poor responder vs hyper-responder spektrum). OHSS (Ovarian Hyperstimulation Syndrome) életveszélyes komplikáció lehet hyper-responder-en — adekvát monitoring nélkül. Standard IVF-protokoll: 75-150 IU/nap kezdés (poor responder gyanúján 225-300 IU), ovariális ultrahang follikulus-counting napi 2-3-ban + szérum E2-titrálás. Ha E2 >4000 pmol/L vagy follikulus-szám >20 → OHSS-rizikó, GnRH-agonista trigger vagy ciklus-megszakítás javasolt. Ez kötelezően reproduktív endokrinológus + IVF-clinic-setting munka, NEM self-administered protokoll."
    },
    {
      "q": "Kallmann-szindrómán mit várhatok rFSH+HCG protokolltól?",
      "a": "Kallmann-szindróma (congenital GnRH-deficiencia + anosmia) klasszikus indikáció. Liu 2009 (PMID 19389810) protokoll: HCG 1500-3000 IU 2-3x/hét × 3-6 hónap (Leydig-priming → endogén Test 12-20 nmol/L cél), majd rFSH 75-150 IU 3x/hét hozzáadva. Spermatogenezis-restoration outcome: 60-80% a betegek között, várható időablak 12-24 hónap. Sperm-count rendszerint a normál tartomány alsó határa körül stabilizálódik (5-20 millió/mL), ami IUI vagy IVF-ICSI fertilitás-céllal elegendő. Cryopreservation javasolt successful protokoll után (multi-cycle ismétlés a recovery-stabilitást nem garantálja)."
    },
    {
      "q": "Cross-frame: ez ugyanaz a molekula mint a `fsh-rec-perf`?",
      "a": "Igen, identikus molekula — ugyanaz a Gonal-F/Puregon/Bemfola pharmacy-product, ugyanaz a CHO-rekombináns FSH-glikoprotein. A KÜLÖNBSÉG csak a framing: `fsh-rec-peptid` (ez az entry) klinikai-Rx fertilitás-kontextusban (HypoH spermatogenezis-induction, IVF male/female-factor), míg `fsh-rec-perf` AAS-PCT FSH-axis-recovery-kontextusban (azoospermia recovery hard-suppression long-cycle után, performance-felhasználó). A felhasználó ugyanazt a vial-t veszi meg, csak más narratívával olvassa. A klinikai-Rx útvonal endokrinológus + reproduktív medicina-rendelőn keresztül, a performance-útvonal self-administered AAS-PCT-protokoll részeként — jogilag MINDKETTŐ Rx-only, performance off-label."
    }
  ],
  "anecdote": null
}
