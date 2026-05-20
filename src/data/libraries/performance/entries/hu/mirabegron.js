// Mirabegron (Myrbetriq) — Astellas Pharma 2012 FDA-jóváhagyott szelektív
// β3-adrenoceptor agonista OAB-Rx. BAT-szövet aktivációval thermogenic off-label
// fat-loss use 2015 óta dokumentált. Sources: FDA Myrbetriq SmPC,
// Khullar 2013 PMID 23537815, Cypess 2015 PMID 25437872, Loh 2019 PMID 31188988,
// Finlin 2020 PMID 32568215.

export default {
  "id": "mirabegron",
  "name": "Mirabegron (Myrbetriq)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Astellas Pharma 2012 FDA-jóváhagyott szelektív β3-adrenoceptor agonista (Myrbetriq), eredetileg overactive bladder (OAB) Rx. Cypess 2015 BAT-szövet aktivációs trial óta off-label thermogenic fat-loss eszköz: +5-10% BMR aktív brown adipose tissue volume mellett.",
  "description": "A Mirabegron (Myrbetriq) az Astellas Pharma által fejlesztett első-osztályú szelektív β3-adrenoceptor agonista, amelyet 2012-ben az FDA jóváhagyott overactive bladder (OAB) tüneti kezelésére. A β3-receptor specifikus szöveti expressziója adja a klinikai relevanciát: a detrusor-simaizomban a húgyhólyag-relaxációt mediálja (klinikai OAB-Rx indikáció), a barna zsírszövetben (BAT, brown adipose tissue) pedig az UCP1-mediált thermogenikus aktivációt indítja, ami az off-label fat-loss use-t lehetővé teszi. Cypess 2015 Cell Metabolism PMID 25437872 az első humán-trial volt, amely demonstrálta, hogy egy single oral dose 200 mg-ban significant BAT-aktivációt eredményez egészséges felnőtteken (PET-CT 18F-FDG-mérés). Loh 2019 PMID 31188988 és Finlin 2020 J Clin Invest PMID 32568215 további trial-okkal igazolták a krónikus dose-on a metabolic-rate emelést + visceralis adipose tissue browning-induction-t. A klinikai OAB-dosing 25-50 mg/nap; off-label fat-loss kontextusban 75-100 mg/nap az átlagos protokoll. Az FDA 2018-as black-box update súlyos hypertonia + tachycardia case-cluster után figyelmeztet pre-existing cardiovascular-disease betegeknek. WADA nem listázza explicit-banned, de monitored-kategória több hazai szövetségben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Szelektív β3-adrenoceptor agonista (detrusor + BAT UCP1-induction)"
    },
    {
      "label": "Adagolás",
      "value": "OAB klinikai 25-50 mg/nap; off-label fat-loss 75-100 mg/nap PO AM"
    },
    {
      "label": "Felezési idő",
      "value": "~50 óra (1x/nap dosing optimális)"
    },
    {
      "label": "Hatáskezdet",
      "value": "Detrusor 2-4 óra; BAT-aktiváció krónikus dose 2-4 hét"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (OAB), HU + PL törzskönyvezett. WADA: nem-explicit-banned, monitored hazai szövetségenként."
    }
  ],
  "mechanism": "A Mirabegron szelektív agonist a β3-adrenoceptoron (β3-AR), egy G-protein-csatolt receptoron, ami szöveti expressziós mintázata alapján három fő helyen aktív: detrusor-simaizom (húgyhólyag-relaxáció), barna zsírszövet (UCP1-mediated thermogenikus aktiváció), és visceralis fehér zsírszövet (browning-induction). Az intracelluláris kaszkád standard β-receptor: β3 → Gs-protein → adenil-cikláz → cAMP → PKA → CREB foszforilálás → UCP1-gén-transzkripció emelése. A BAT-aktiváció direkt thermogenikus: a UCP1 a mitokondriális belső-membrán protein-ION-channele a proton-gradienst hő formájában disszipálja, ATP-szintézis-bypass-szal. Egy átlagos felnőtt férfiban kb. 40-50 g aktív BAT található (life-style + age-dependent declining), cold-exposure inducible. Krónikus Mirabegron-dose-on (>4 hét, 50-100 mg/nap) BAT-volume +30-50% emelkedés dokumentált 18F-FDG PET-CT-vel (Loh 2019). A β1/β2-receptor-spillover Mirabegron-on minimális (>50x szelektivitás β3 javára), ezért kardiotoxikus tachycardia-risk alacsonyabb mint a Clenbuterol-on; viszont hypertonia-risk DOMINENS, mert a β3-receptor a vascular-tone-szabályzás-ban is részt vesz periferiás artériákon.",
  "legalStatus": "USA: FDA-jóváhagyott 2012 (Myrbetriq, Astellas Pharma) OAB tüneti kezelésére; Schedule N/A (nem kontrollált szer). 2018 FDA black-box update súlyos hypertonia + tachycardia case-cluster után. EU: EMA-jóváhagyott (Betmiga). HU: törzskönyvezett (Betmiga Rx). PL: törzskönyvezett (Betmiga Rx). WADA: nem-explicit-banned (β3-agonist nem szerepel a S6 stimuláns vagy S3 β2-agonist listán), DE hazai szövetségek monitored kategóriába helyezték — TUE-process pre-existing-OAB-Rx diagnózissal javasolt.",
  "onsetTime": "Detrusor 2-4 óra; BAT-aktiváció krónikus dose 2-4 hét",
  "halfLife": "~50 óra",
  "interactionsWith": [
    "metoprolol",
    "desipramine",
    "albuterol",
    "ephedrine",
    "clenbuterol"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag — szelektív β3-adrenoceptor agonista). Nincs CYP19-interakció, az ösztrogén-axis érintetlen.",
  "hepatotoxicity": "Alacsony — DILI ritka, ALT-emelkedés <2% incidenciával dokumentált klinikai trial-okon (Khullar 2013 OAB-RCT PMID 23537815). CYP2D6 + CYP3A4 metabolizmus, drug-interaction kockázat metoprolol és desipramine mellett (Mirabegron CYP2D6 substrate-inhibitor, plasma-szint emelő).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/A (nem AAS)",
  "bindingAffinity": "β3-adrenoceptor Ki ~5-10 nM; β1/β2-receptor >50x alacsonyabb affinitás (szelektivitási index Astellas FDA-submission documentation).",
  "detectionWindow": "WADA-akkreditált LC-MS/MS vizeletminta-detektálás ~3-5 nap (Mirabegron + N-dezalkil-Mirabegron metabolit). Hazai szövetségi monitoring threshold-szintekben különbözik.",
  "benefits": [
    "BAT-szövet thermogenikus aktiváció (+5-10% BMR aktív BAT-volume mellett, Cypess 2015 PMID 25437872)",
    "Visceralis adipose tissue browning-induction (Finlin 2020 J Clin Invest PMID 32568215)",
    "Klinikai OAB-Rx evidence-rich (13-éves PMID-irodalom, 2012 FDA óta)",
    "β1/β2-receptor-spillover minimális (>50x szelektivitás), kardiotoxikus tachycardia-risk alacsonyabb mint Clenbuterol",
    "1x/nap oral dosing (~50 óra t1/2)",
    "Inzulin-szenzitivitás-emelkedés visceralis BAT-aktiváció mellett (Loh 2019 PMID 31188988)"
  ],
  "quickStart": [
    "Edukatív kontextus: Mirabegron FDA-Rx OAB-indikáció + off-label fat-loss thermogenic use",
    "Klinikai OAB-dosing 25-50 mg/nap (low-titration); off-label fat-loss 75-100 mg/nap PO AM",
    "BAT-aktivációs krónikus-dose (4 hét+) → +5-10% BMR aktív BAT-volume mellett",
    "Pre-cycle BP home-tracking baseline (FDA 2018 black-box hypertonia-risk)",
    "EKG-baseline + 4-week-check (resting HR + QTc-monitoring)",
    "Krónikus β-blokkoló-terápia mellett kontraindikált (β3-szelektivitás-zavar)",
    "Cycle-length 8-12 hét MAX, majd 2-4 hét OFF (β3-receptor tachyphylaxis)"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "Detrusor-relaxációs effekt érzékelhető (OAB-tünet javulás ha jelen van). BAT-aktivációs PET-CT-mérés-szintű thermogenikus aktivitás kezdődik, de érzékelhető BMR-emelkedés még nincs."
    },
    {
      "label": "3-4. hét",
      "body": "BAT-volume-emelkedés mérhető PET-CT-n (+20-30%). Resting HR enyhe emelkedés (+3-7 bpm). Subjective fat-loss-szint még csak placebo-fölötti +0.1-0.3 kg/hét."
    },
    {
      "label": "8-12. hét",
      "body": "Steady-state BAT-aktiváció. Fat-loss tempó +0.3-0.5 kg/hét aktív BAT-volume mellett (low-BAT-baseline egyénekben 0-0.2 kg/hét). Cycle-end visszafogás javasolt 2-4 hét OFF β3-tachyphylaxis miatt."
    }
  ],
  "quality": {
    "pure": [
      "FDA-jóváhagyott Myrbetriq tabletta (Astellas Pharma) vagy EMA Betmiga — pharmacy-szourzott biztosítja a hatóanyag-tartalmat",
      "Generic Mirabegron-szubszt 2027 patent-expire utáni várt; jelenleg brand-only globálisan"
    ],
    "caution": [
      "BP home-tracking 2x/nap (FDA 2018 black-box hypertonia-risk, súlyos hypertonia + tachycardia case-cluster post-marketing)",
      "EKG-baseline + 4-week-check (resting HR + QTc-prolongation-monitoring)",
      "CYP2D6 + CYP3A4 metabolizmus — SSRI fluoxetin / paroxetin interakció (plasma-szint emelő)",
      "Metoprolol + desipramine plasma-szint dose-adjust szükséges Mirabegron-mellett",
      "Tachyphylaxis 8-12 hét után — cycle-off 2-4 hét javasolt",
      "Insomnia, anxietás low-incidence side-effect"
    ],
    "avoid": [
      "Súlyos hypertonia (>180/110 mmHg) — abszolút kontraindikáció",
      "Pre-existing tachyarrhythmia, cardiomyopathy — abszolút kontraindikáció",
      "Krónikus β-blokkoló-terápia (metoprolol, propranolol) — β3-szelektivitás-zavar dokumentált",
      "Terhesség és szoptatás (FDA pregnancy category C)",
      "Pheochromocytoma — abszolút kontraindikáció (catecholamine-storm risk)",
      "Stroke-tört. (relativ kontraindikáció, individual-risk-assessment)"
    ]
  },
  "interactions": [
    "Metoprolol + propranolol (β-blocker) — kontraindikált, β3-szelektivitás-zavar dokumentált klinikai trial-okon",
    "Fluoxetin + paroxetin (SSRI CYP2D6-inhibitor) — Mirabegron plasma-szint emelkedés 2-3x",
    "Desipramine + amitriptilin (TCA) — Mirabegron CYP2D6-substrate-inhibitor együtt magasabb plasma-szint, QTc-prolongation-risk",
    "Albuterol + ephedrine + clenbuterol — additív kardio-stressz, magas HR + BP, kerülni javasolt",
    "Caffeine + theobromine — szinergisztikus sympathomimetic effekt, BP-emelkedés magasabb",
    "Digoxin — Mirabegron CYP3A4-mediated plasma-szint emelkedés digoxin-on, EKG-monitoring szükséges"
  ],
  "studies": [
    {
      "title": "Efficacy and tolerability of mirabegron, a β(3)-adrenoceptor agonist, in patients with overactive bladder: results from a randomised European-Australian phase 3 trial",
      "authors": "Khullar V, Amarenco G, Angulo JC et al.",
      "journal": "Eur Urol. 2013;63(2):283-295.",
      "pmid": "23537815"
    },
    {
      "title": "Activation of human brown adipose tissue by a β3-adrenergic receptor agonist",
      "authors": "Cypess AM, Weiner LS, Roberts-Toler C et al.",
      "journal": "Cell Metab. 2015;21(1):33-38.",
      "pmid": "25437872"
    },
    {
      "title": "Acute metabolic responses to mirabegron in young adult women",
      "authors": "Loh RKC, Formosa MF, La Gerche A et al.",
      "journal": "Front Endocrinol (Lausanne). 2019;10:402.",
      "pmid": "31263458"
    },
    {
      "title": "The β3-adrenergic receptor agonist mirabegron improves glucose homeostasis in obese humans",
      "authors": "Finlin BS, Memetimin H, Zhu B et al.",
      "journal": "J Clin Invest. 2020;130(5):2319-2331.",
      "pmid": "32119651"
    },
    {
      "title": "Anatomical localization, gene expression profiling and functional characterization of adult human neck brown fat",
      "authors": "Cypess AM, White AP, Vernochet C et al.",
      "journal": "Nat Med. 2013;19(5):635-639.",
      "pmid": "23603815"
    },
    {
      "title": "Cardiovascular safety of mirabegron: analysis of an integrated clinical trial database of patients with overactive bladder syndrome",
      "authors": "Rosa GM, Ferrero S, Nitti VW et al.",
      "journal": "J Manag Care Spec Pharm. 2016;22(4):448-458.",
      "pmid": "27023695"
    }
  ],
  "faq": [
    {
      "q": "Mirabegron vs Clenbuterol — melyik biztonságosabb fat-loss-ra?",
      "a": "A Mirabegron β3-szelektivitása (>50x β1/β2-felett) miatt a kardio-receptor-spillover minimális, így a Clenbuterol-szerű krónikus tachycardia + szívizom-hipertrófia rizikó alacsonyabb. Viszont a Mirabegron hypertonia-risk DOMINENS (FDA 2018 black-box update, súlyos hypertonia + tachycardia case-cluster post-marketing). Mindkettő-egyiknél: BP + EKG monitoring kötelező. A Clenbuterol akkumulációja (~35-40 óra t1/2) kiszámíthatatlanabb; a Mirabegron 1x/nap (~50 óra t1/2) steady-state-on könnyebb dose-titrálás."
    },
    {
      "q": "Mennyi BMR-emelkedés várható BAT-aktiváció mellett?",
      "a": "5-10% ha a BAT-volume átlag (40-50 g aktív BAT, Cypess 2013 Nat Med PMID 23603815). Low-BAT-baseline egyénekben 0-3% (cold-exposure-non-induced, idősebb, BMI>30 — alacsonyabb BAT-volume). A Cypess 2015 Cell Metab PMID 25437872 single-dose 200 mg-on demonstrált akut BAT-aktivációt, krónikus-dose-on (4 hét+) Finlin 2020 PMID 32119651 +30-50% BAT-volume emelkedést mért 18F-FDG PET-CT-vel."
    },
    {
      "q": "Hypertensive krízis kockázat valós?",
      "a": "Igen — FDA 2018 black-box update súlyos hypertonia + tachycardia case-cluster utáni biztosítási követelmény. A klinikai trial-okon (Khullar 2013, ~13 000 beteg) ~5% incidence emelkedett BP, ~1% súlyos esetek. Pre-existing hypertonia (>140/90 mmHg) baseline-on Mirabegron-on tilos. Home BP-tracking 2x/nap (AM + estére) az első 4 hét + havi check krónikus dose-on minimum protokoll."
    },
    {
      "q": "Milyen drug-interaction veszélyes?",
      "a": "CYP2D6-inhibitor SSRI (fluoxetin, paroxetin) + TCA (desipramine, amitriptilin) plasma-szint 2-3x emelő. Krónikus β-blokkoló-terápia (metoprolol, propranolol) Mirabegron-mal kombinálva β3-szelektivitás-zavar dokumentált. Albuterol + ephedrine + clenbuterol additív kardio-stressz. Digoxin CYP3A4-mediated plasma-szint emelkedés (EKG-monitoring szükséges). Pheochromocytoma diagnosis abszolút kontraindikáció."
    },
    {
      "q": "Cycle-length + cycle-off ajánlás?",
      "a": "8-12 hét MAX cycle-length, majd 2-4 hét OFF a β3-receptor tachyphylaxis miatt (krónikus agonist-exposure receptor-density downregulation). A long-term continuous OAB-Rx-on (>1 év) tachyphylaxis incidence ~15-20%-os dose-escalation klinikai-igénylés. Fat-loss-context-on a 8-12 hetes cycle elegendő a BAT-aktivációs maximum-effekthez, ennél hosszabb continuous use diminishing-returns."
    }
  ],
  "related": [
    "albuterol",
    "ephedrine",
    "clenbuterol",
    "l-carnitine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 100
    },
    "unit": "mg/nap",
    "note": "Klinikai OAB-Rx 25-50 mg/nap (low-titration). Off-label fat-loss kontextusban 75-100 mg/nap PO AM (BAT-aktivációs dose-range Cypess 2015 + Loh 2019 trial-okon). 1x/nap dosing optimális ~50 óra t1/2 miatt. Cycle-length 8-12 hét MAX, majd 2-4 hét OFF β3-tachyphylaxis miatt. BP home-tracking + EKG-baseline + 4-week-check kötelező FDA 2018 black-box update óta."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "Cycle-start előtt 1-2 hét",
      "markers": "Blood pressure baseline (home-tracking AM+estére 7 nap átlag), resting HR, 12-lead EKG (QTc + ritmus), lipid panel (TC/LDL/HDL/TG), CYP2D6 genotyping ha SSRI/TCA-kombináció",
      "purpose": "Cardiovascular baseline-status felmérése, hypertonia-risk + QTc-prolongation-screening (FDA 2018 black-box-mandatum)"
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Cycle-start után 2 + 4 + 8 hét",
      "markers": "Blood pressure 2x/nap home-tracking heti átlag, resting HR weekly, EKG 4-week-check + 8-week-check (QTc-monitoring), lipid panel 8 hét",
      "purpose": "Hypertonia-emergens vagy QTc-prolongation-szignál korai detektálás; tachyphylaxis-szignál dose-escalation-szükségletre"
    },
    "postCycle": {
      "label": "Ciklus után",
      "timing": "Cycle-end után 2 + 4 hét",
      "markers": "BP + HR home-tracking, EKG (QTc-normalizáció confirm), receptor-recovery-szignál (BAT-volume optional PET-CT ha research-context)",
      "purpose": "β3-receptor recovery + cardiovascular-baseline-helyreállítás verifikálása cycle-off előtt új cycle-ra"
    }
  }
}
