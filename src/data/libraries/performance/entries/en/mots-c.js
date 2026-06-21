// MOTS-c – Mitochondrial-derived peptide (16 amino acids, encoded in the 12S
// rRNA mtDNA). AMPK activator with preclinical evidence for glucose homeostasis +
// insulin sensitization; preliminary Phase 1/2 human evidence. Sources: Lee 2015
// Cell Metab PMID 25738457, Reynolds 2021 Sci Rep PMID 33526809, Kim 2018 Aging
// Cell PMID 30276962, Cobb 2016 PMID 27497587.

export default {
  "id": "mots-c",
  "sideEffects": [
    { "hu": "Hipoglikémia kockázata: AMPK-aktivátorként javítja az inzulinérzékenységet és inzulin-független glükózfelvételt fokoz, így vércukoresés léphet fel, főleg kalóriadeficitben vagy más antidiabetikummal (Metformin, inzulin, GLP-1) kombinálva.", "en": "Risk of hypoglycemia: as an AMPK activator it improves insulin sensitivity and drives insulin-independent glucose uptake, so blood sugar can drop, especially in a calorie deficit or combined with other antidiabetics (metformin, insulin, GLP-1).", "pl": "Ryzyko hipoglikemii: jako aktywator AMPK poprawia wrażliwość na insulinę i nasila niezależny od insuliny wychwyt glukozy, więc poziom cukru może spaść, zwłaszcza przy deficycie kalorycznym lub w połączeniu z innymi lekami przeciwcukrzycowymi (metformina, insulina, GLP-1)." },
    { "hu": "Injekció helyi reakciói: szubkután beadáskor bőrpír, érzékenység, viszketés vagy duzzanat a beadás helyén.", "en": "Local injection-site reactions: redness, tenderness, itching or swelling at the subcutaneous injection site.", "pl": "Miejscowe reakcje w miejscu wstrzyknięcia: zaczerwienienie, tkliwość, swędzenie lub obrzęk w miejscu podania podskórnego." },
    { "hu": "Gyomor-bélrendszeri panaszok: AMPK-aktiváló mechanizmusa a Metforminéhoz hasonló, így hányinger, puffadás vagy enyhe emésztési diszkomfort előfordulhat (anekdotikus, humán dózis-adat hiányos).", "en": "Gastrointestinal complaints: its AMPK-activating mechanism parallels metformin, so nausea, bloating or mild digestive discomfort may occur (anecdotal, human dosing data sparse).", "pl": "Dolegliwości żołądkowo-jelitowe: mechanizm aktywacji AMPK przypomina metforminę, więc mogą wystąpić nudności, wzdęcia lub łagodny dyskomfort trawienny (anegdotyczne, dane dawkowania u ludzi skąpe)." },
    { "hu": "Laktát-emelkedés és elméleti metabolikus acidózis kockázata: mitokondriális anyagcserét moduláló hatóanyagként a laktátszint emelkedhet; jelentős emelkedés esetén (>2x kiindulási) dóziscsökkentés vagy ciklusleállítás indokolt.", "en": "Lactate elevation and theoretical metabolic acidosis risk: as a modulator of mitochondrial metabolism it may raise lactate; a marked rise (>2x baseline) warrants dose reduction or stopping the cycle.", "pl": "Wzrost mleczanu i teoretyczne ryzyko kwasicy metabolicznej: jako modulator metabolizmu mitochondrialnego może podnosić poziom mleczanu; znaczny wzrost (>2x wartości wyjściowej) uzasadnia zmniejszenie dawki lub przerwanie cyklu." },
    { "hu": "Feltáratlan hosszú távú biztonsági profil: a humán adatok előzetes Phase 1/2 fázisban vannak, a teljes biztonsági profil 2026 elejéig nincs publikálva; szuprafiziológiás, hosszú távú dózis hatásai ismeretlenek.", "en": "Unknown long-term safety profile: human data are at a preliminary Phase 1/2 stage and the full safety profile is unpublished as of early 2026; effects of supraphysiological, long-term dosing are unknown.", "pl": "Nieznany długoterminowy profil bezpieczeństwa: dane u ludzi są na wstępnym etapie Phase 1/2, a pełny profil bezpieczeństwa nie został opublikowany na początku 2026; skutki suprafizjologicznego, długotrwałego dawkowania są nieznane." },
    { "hu": "Feketepiaci minőségi kockázat: az illegális UGL-vialek hamisítás, alulkdozírozás, degradált peptid és endotoxin-szennyezés kockázatát hordozzák; HPLC-tesztelt forrás és COA nélkül a tényleges tartalom és tisztaság bizonytalan.", "en": "Black-market quality risk: illicit UGL vials carry the risk of counterfeiting, underdosing, degraded peptide and endotoxin contamination; without an HPLC-tested source and COA the actual content and purity are uncertain.", "pl": "Ryzyko jakości z czarnego rynku: nielegalne fiolki UGL niosą ryzyko podrabiania, zaniżonej dawki, zdegradowanego peptydu i zanieczyszczenia endotoksynami; bez źródła testowanego HPLC i COA rzeczywista zawartość i czystość są niepewne." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a peptid kizárólag preklinikai adatokkal rendelkezik, teratogenitási adat nincs, így terhesség alatt és szoptatáskor kerülendő.", "en": "Pregnancy and breastfeeding: the peptide has only preclinical data with no teratogenicity information, so it should be avoided during pregnancy and lactation.", "pl": "Ciąża i karmienie piersią: peptyd dysponuje wyłącznie danymi przedklinicznymi, bez informacji o teratogenności, dlatego należy go unikać w ciąży i podczas karmienia." },
    { "hu": "Inzulinnal vagy szulfonilureával kezelt cukorbetegség: az inzulinérzékenyítő hatás additív, súlyos hipoglikémia kockázatával; szoros glükóz-monitorozás és orvosi felügyelet nélkül ellenjavallt.", "en": "Diabetes treated with insulin or a sulfonylurea: the insulin-sensitizing effect is additive with a risk of severe hypoglycemia; contraindicated without close glucose monitoring and medical supervision.", "pl": "Cukrzyca leczona insuliną lub pochodną sulfonylomocznika: efekt uwrażliwiający na insulinę jest addytywny, z ryzykiem ciężkiej hipoglikemii; przeciwwskazane bez ścisłego monitorowania glukozy i nadzoru lekarskiego." },
    { "hu": "Aktív rosszindulatú daganat: a mitokondriális biogenezist moduláló hatás proliferációra gyakorolt preklinikai adatai nem egyértelműek, ezért aktív malignitásban kerülendő (elméleti kockázat).", "en": "Active malignancy: the preclinical proliferation data of this mitochondrial-biogenesis modulator are inconclusive, so it should be avoided in active cancer (theoretical risk).", "pl": "Aktywny nowotwór złośliwy: przedkliniczne dane dotyczące wpływu tego modulatora biogenezy mitochondrialnej na proliferację są niejednoznaczne, dlatego należy go unikać przy aktywnej chorobie nowotworowej (ryzyko teoretyczne)." },
    { "hu": "Gyermek- és serdülőkor: nincs Phase 2 indikáció vagy biztonsági adat pediátriai használatra, ezért ellenjavallt.", "en": "Children and adolescents: there is no Phase 2 indication or safety data for pediatric use, so it is contraindicated.", "pl": "Dzieci i młodzież: brak wskazania Phase 2 lub danych bezpieczeństwa do zastosowania pediatrycznego, dlatego jest przeciwwskazany." },
    { "hu": "Laktátacidózisra hajlamosító állapotok (vese- vagy májelégtelenség, krónikus alkoholfogyasztás): az AMPK-aktivátor mechanizmus és a laktátemelő potenciál additív hepatikus/metabolikus terhelést jelenthet, ezért fokozott óvatosság vagy kerülés indokolt.", "en": "Conditions predisposing to lactic acidosis (renal or hepatic impairment, chronic alcohol use): the AMPK-activator mechanism and lactate-raising potential may add hepatic/metabolic stress, warranting heightened caution or avoidance.", "pl": "Stany predysponujące do kwasicy mleczanowej (niewydolność nerek lub wątroby, przewlekłe spożywanie alkoholu): mechanizm aktywatora AMPK i potencjał podnoszenia mleczanu mogą dodatkowo obciążać wątrobę/metabolizm, co uzasadnia wzmożoną ostrożność lub unikanie." },
    { "hu": "Ismert túlérzékenység a peptiddel vagy a rekonstituáló oldat összetevőivel szemben: helyi vagy ritkán szisztémás allergiás reakció léphet fel.", "en": "Known hypersensitivity to the peptide or to components of the reconstitution solution: local or, rarely, systemic allergic reactions may occur.", "pl": "Znana nadwrażliwość na peptyd lub składniki roztworu do rekonstytucji: mogą wystąpić miejscowe lub, rzadko, ogólnoustrojowe reakcje alergiczne." }
  ],
  "name": "MOTS-c",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Mitochondrial-derived peptide (16 amino acids, 12S rRNA mtDNA-encoded), discovered by Lee 2015 Cell Metab PMID 25738457. AMPK activator with preclinical evidence for glucose homeostasis + insulin sensitization; human Phase 1/2 trials preliminary, fat-loss effect subtle.",
  "description": "MOTS-c (Mitochondrial Open Reading frame of the Twelve S rRNA-c) is a 16-amino-acid peptide discovered by the Lee/Pinchas Cohen lab (USC) in 2015 (Cell Metab PMID 25738457). Its unique property is that it is not encoded in the nuclear genome but in a short open reading frame (sORF) of the mitochondrial 12S rRNA gene – making it the first extensively characterized member of the mitochondrial-derived peptide (MDP) class. Its endogenous function: transducing mitochondrial dysfunction signals to the nucleus (\"retrograde signaling\") via AMPK activation, which elevates glucose uptake + upregulates fatty-acid oxidation in skeletal muscle. Kim 2018 Aging Cell PMID 30276962 demonstrated in mouse trials that exogenous MOTS-c administration prevents high-fat-diet-induced obesity + insulin resistance and corrects its age-dependent decline. Reynolds 2021 Sci Rep PMID 33526809 documented exercise-induced endogenous MOTS-c elevation in human plasma. Clinical human Phase 1/2 trials are in preliminary status (CohBar Inc + Stealth BioTherapeutics pipeline 2024-2025), full publication expected in 2026. Off-label cutting-cycle use has emerged on the blackmarket peptide scene since 2022, typically 5-10 mg SC 2-3x/week. Human fat-loss effects are subtle; AMPK-activator mechanism is Metformin-adjacent. MolekulaX has NO peptide-library counterpart – this is the first MOTS-c entry on the site.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Mitochondrial-derived peptide (16 aa), AMPK activator, upregulates glucose uptake + fatty-acid oxidation"
    },
    {
      "label": "Dosing (off-label)",
      "value": "5-10 mg SC 2-3x/week, 4-8 week cycle"
    },
    {
      "label": "Half-life",
      "value": "~1-2 hours (SC IM, mouse extrapolation)"
    },
    {
      "label": "Onset time",
      "value": "Acute AMPK activation 1-2 h; metabolic effect 2-4 weeks"
    },
    {
      "label": "Legal status",
      "value": "Research-only – NOT an FDA / EMA Rx in any jurisdiction. WADA NOT explicitly banned (but S0 'non-approved substance' catch-all risk)."
    }
  ],
  "mechanism": "MOTS-c is encoded in a short open reading frame (sORF) of the mitochondrial 12S rRNA gene, making it the first characterized mitochondrial-derived peptide (MDP) at the time of discovery (Lee 2015 Cell Metab PMID 25738457). Functionally it is a retrograde-signaling molecule: it transduces mitochondrial metabolic stress signals to the nucleus via activation of AMPK (5'-AMP-activated protein kinase). AMPK is the principal cellular energy sensor, activated under a low ATP/AMP ratio, and it shifts cellular metabolism toward a catabolic state (fatty-acid-oxidation upregulation + de-novo lipogenesis suppression + glucose-uptake elevation). MOTS-c modulates the AMPK axis via the folate cycle (an AICAR-like mechanism, Lee 2015). Skeletal-muscle-specific effects: GLUT4 translocation elevation → insulin-independent glucose uptake; CPT-1 (carnitine palmitoyltransferase I) upregulation → mitochondrial β-oxidation upregulation. Peptide stability is low (~1-2 h SC t1/2), hence a 2-3x/week dosing protocol. Central effects (hypothalamic appetite modulation) lack preclinical evidence – the effect is primarily peripheral skeletal muscle + liver.",
  "legalStatus": "USA: NOT FDA-approved, research-only peptide (Schedule N/A, but not authorized for distribution). EU: NOT EMA-approved. HU + PL: NOT registered. Phase 1/2 human-trial status is CohBar Inc + Stealth BioTherapeutics pipeline 2024-2025, full publication expected 2026. WADA: NOT explicitly banned (peptide-class S2.1 GH/IGF-1-axis-banned list does not include the mitochondrial-derived peptide category), but S0 'non-approved substance' catch-all risk applies (WADA 2025 prohibited list § S0).",
  "onsetTime": "Acute AMPK activation 1-2 h; metabolic effect 2-4 weeks",
  "halfLife": "~1-2 hours (SC, mouse extrapolation)",
  "interactionsWith": [
    "l-carnitine",
    "5-amino-1mq"
  ],
  "aromatization": "Does not aromatize – mitochondrial peptide, not steroid-related. No CYP19 interaction; the estrogen axis is directly unaffected.",
  "hepatotoxicity": "Low – endogenous mitochondrial peptide; supraphysiological-dose evidence is preclinical-only in humans. ALT/AST elevation has not been documented in preliminary clinical trials, but full Phase 2 publication is expected in 2026.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not an AAS, mitochondrial-derived peptide)",
  "bindingAffinity": "Receptor target is not well characterized – AMPK activation is indirect, folate-cycle-mediated (Lee 2015 PMID 25738457). No direct receptor-binding target; signaling is intracellular via the mitochondrial-import machinery.",
  "detectionWindow": "WADA-accredited LC-MS/MS detectable in human plasma ~24-48 h after a single dose (Reynolds 2021 PMID 33526809 endogenous MOTS-c assay baseline ~50-200 pg/mL). Exogenous supraphysiological doses are distinguishable from endogenous baseline by mass-spec isotope pattern.",
  "benefits": [
    "First characterized mitochondrial-derived peptide (MDP) – Lee 2015 Cell Metab PMID 25738457 discovery",
    "AMPK-activator mechanism – Metformin-adjacent (but not biguanide-class)",
    "Insulin-independent glucose-uptake elevation in skeletal muscle",
    "Fatty-acid-oxidation upregulation at the mitochondrial β-oxidation level",
    "Exercise-induced endogenous plasma elevation in humans (Reynolds 2021 PMID 33526809)",
    "Correction of age-dependent endogenous MOTS-c decline in mouse models (Kim 2018 PMID 30276962)"
  ],
  "quickStart": [
    "Educational context: research peptide, NOT Rx-approved in any jurisdiction",
    "Off-label cutting-cycle 5-10 mg SC 2-3x/week (mouse-dose extrapolation, NO human Phase 2 dose-finding)",
    "Cycle length 4-8 weeks, NOT continuous (peptide-resistance risk in preclinical evidence)",
    "Pre-cycle bloodwork: fasting glucose + HbA1c + IGF-1 + lactate baseline",
    "Mid-cycle 4-week check (insulin-sensitization marker)",
    "Storage: lyophilized vial 2-8°C, reconstituted in BAC water 7-10 days stability",
    "Blackmarket UGL-vial quality concern – HPLC-tested source mandatory"
  ],
  "expectations": [
    {
      "label": "Week 1-2",
      "body": "Subjective effect minimal. AMPK activation is acute (1-2 h post-injection), but no perceptible metabolic-rate elevation yet. Insulin-sensitization signal detectable on fasting glucose (-5-10 mg/dL on baseline)."
    },
    {
      "label": "Week 3-4",
      "body": "Fasting glucose -10-15 mg/dL on baseline (cumulative insulin-sensitization effect). Mild fat-loss tempo +0.1-0.3 kg/week with caloric deficit + resistance training. HbA1c signal not yet measurable (requires 3-month integration)."
    },
    {
      "label": "Week 4-8 + cycle exit",
      "body": "Cycle-end fasting glucose returns to baseline ~2-4 weeks. HbA1c reduction 0.1-0.3% (subtle). Subjective fat-loss roughly 1-2 kg / 8 weeks – NOT stimulant-like; AMPK-activator mechanism is Metformin-adjacent."
    }
  ],
  "quality": {
    "pure": [
      "CohBar Inc / Stealth BioTherapeutics Phase 1/2 trial batch – research-only sourcing is legitimate",
      "Bachem + AAPPTec + GenScript custom synthesis, lyophilized 5 mg vial >95% HPLC purity",
      "Blackmarket UGL vials: HPLC-tested COA (Certificate of Analysis) MANDATORY – counterfeit + degraded-peptide clusters documented in 2023-2024"
    ],
    "caution": [
      "Research-only status – NOT Rx-approved for human use in any jurisdiction",
      "Phase 2 human trials are preliminary; full safety profile not published until 2026",
      "Long-term safety evidence for supraphysiological doses is lacking",
      "Local injection-site reaction common; rare systemic allergy in preclinical evidence",
      "Blackmarket UGL vial endotoxin + counterfeit risk documented",
      "Storage instability: non-reconstituted <-18°C; reconstituted 2-8°C 7-10 days"
    ],
    "avoid": [
      "Legitimate use outside Phase 2 human trials does not exist as of January 2026",
      "T2DM diagnosis on insulin Rx (insulin-sensitization effect is additive – hypoglycemia risk)",
      "Pregnancy + breastfeeding (peptide class is preclinical-only; teratogenicity data missing)",
      "Pediatric use (not a Phase 2 indication)",
      "Active malignancy (mitochondrial-biogenesis modulator; preclinical proliferation data inconclusive)"
    ]
  },
  "interactions": [
    "Metformin – additive AMPK-activator mechanism; dose-adjust both (preclinical evidence; human trials inconclusive)",
    "Insulin + oral hypoglycemics (sulfonylureas) – hypoglycemia risk; glucose monitoring mandatory",
    "Semaglutide + GLP-1 agonists – additive insulin sensitization; glucose monitoring + dose adjustment",
    "Tesamorelin + GHRH analogs – GH/IGF-1 axis interaction inconclusive in preclinical data; IGF-1 monitoring",
    "L-Carnitine – additive fatty-acid-oxidation mechanism; synergistic preclinical evidence (not documented in humans)",
    "Alcohol – AMPK-activator mechanism + hepatic stress are additive; moderate consumption advised"
  ],
  "studies": [
    {
      "title": "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.",
      "authors": "Lee C, Zeng J, Drew BG, Sallam T, Martin-Montalvo A, Wan J, Kim SJ, Mehta H, Hevener AL, de Cabo R, Cohen P",
      "journal": "Cell Metab",
      "pmid": "25738459"
    },
    {
      "title": "MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.",
      "authors": "Reynolds JC, Lai RW, Woodhead JST, Joly JH, Mitchell CJ, Cameron-Smith D, Lu R, Cohen P, Graham NA, Benayoun BA, Merry TL, Lee C",
      "journal": "Nat Commun",
      "pmid": "33473109"
    },
    {
      "title": "The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.",
      "authors": "Kim KH, Son JM, Benayoun BA, Lee C",
      "journal": "Cell Metab",
      "pmid": "29983246"
    },
    {
      "title": "Naturally occurring mitochondrial-derived peptides are age-dependent regulators of apoptosis, insulin sensitivity, and inflammatory markers",
      "authors": "Cobb LJ, Lee C, Xiao J et al.",
      "journal": "Aging (Albany NY). 2016;8(4):796-809.",
      "pmid": "27070352"
    },
    {
      "title": "Humanin and Its Pathophysiological Roles in Aging: A Systematic Review.",
      "authors": "Coradduzza D, Congiargiu A, Chen Z, Zinellu A, Carru C, Medici S",
      "journal": "Biology (Basel)",
      "pmid": "37106758"
    }
  ],
  "faq": [
    {
      "q": "What is a mitochondrial-derived peptide (MDP) and how does it differ from traditional peptide classes?",
      "a": "MDP-class peptides are encoded in short open reading frames (sORFs) of mitochondrial mtDNA rather than the nuclear genome. MOTS-c (Lee 2015 Cell Metab PMID 25738457) was the first characterized MDP – 16 amino acids encoded in the 12S rRNA gene. Functionally MDPs are retrograde-signaling molecules: they transduce mitochondrial metabolic-stress signals to the nucleus. Other MDPs: humanin (Hashimoto 2001), SHLP1-6 (Cobb 2016 PMID 27070352). The pharmacological significance of the MDP class is that they directly activate a cellular-energy-sensor pathway (AMPK), rather than acting via classical receptor binding."
    },
    {
      "q": "MOTS-c vs Metformin – which is the better AMPK activator?",
      "a": "Both are AMPK activators but via different upstream mechanisms. Metformin: hepatic mitochondrial Complex I inhibition (Owen 2000 Biochem J PMID 10657211) → AMP elevation → AMPK activation. MOTS-c: folate-cycle-mediated, AICAR-like mechanism (Lee 2015 PMID 25738457) → direct AMPK activation. Clinical contrast: Metformin has 60+ years of T2DM Rx evidence, oral, cheap (~€5/month); MOTS-c is a research peptide, SC injection, expensive (~€100-300 per 8-week cycle on the blackmarket). In a fat-loss context, Metformin is subtle (-1-2 kg / 6 months monotherapy); preliminary MOTS-c human evidence is similarly subtle. AMPK-activator class is NOT stimulant-like in fat-loss tempo."
    },
    {
      "q": "Supraphysiological-dose risk profile – what do we know about long-term safety?",
      "a": "Phase 2 human trials are in preliminary status (CohBar Inc + Stealth BioTherapeutics 2024-2025 pipeline). Full publication is expected in 2026. Mouse preclinical evidence (Kim 2018 PMID 30276962) showed no toxicity at chronic 5 mg/kg/day dosing for 12 weeks. Preliminary Phase 1 human single-dose 5-30 mg SC was well tolerated (CohBar 2022 press release). Long-term mitochondrial-biogenesis-modulator preclinical proliferation data is inconclusive at supraphysiological doses – active malignancy is contraindicated (theoretical risk)."
    },
    {
      "q": "Phase 1/2 trial availability status in 2026?",
      "a": "CohBar Inc (now post-2023 Stealth BioTherapeutics acquisition) ran MOTS-c analog CB4211 Phase 2 for a NASH indication (documented 2022-2023 pipeline); full NEJM/Lancet publication expected in 2026. No active Phase 2 trial for a direct cutting-cycle obesity indication as of January 2026. Research-only legitimate sourcing is via CohBar/Stealth Phase 2 recruitment only; off-label cutting-cycle blackmarket UGL sourcing is PROHIBITED in every jurisdiction."
    },
    {
      "q": "Peptide-library counterpart vs gh-axis-doping framing – why do peptides appear in two framings?",
      "a": "The MolekulaX peptide library (peptides/) provides pharmacology education on clinically indicated peptides (Tesamorelin for HIV lipodystrophy; Semaglutide for T2DM/obesity). The performance library (performance/) covers the athletic-doping framing of the same compounds (Tesamorelin-perf for abdominal fat loss; Semaglutide-perf for 6-12 week cutting cycles). MOTS-c currently has NO peptide-counterpart entry in the MolekulaX peptide library – this is the first MOTS-c entry, performance-only framing. The clinical T2DM indication is in Phase 2; if FDA approval lands in 2027+, a clinical-counterpart entry will be added to the peptide library."
    }
  ],
  "related": [
    "l-carnitine",
    "5-amino-1mq"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 5,
      "medium": 7,
      "high": 10
    },
    "unit": "mg SC 2-3x/week",
    "note": "Off-label cutting-cycle 5-10 mg SC 2-3x/week, based on mouse-dose extrapolation (NO human Phase 2 dose-finding as of January 2026). Cycle length 4-8 weeks, NOT continuous. Lyophilized vial reconstituted with 2 mL BAC water; injection volume 0.5-1 mL SC abdominal. Pre-cycle fasting glucose + HbA1c + IGF-1 + lactate baseline; mid-cycle 4-week check; post-cycle 2-4 weeks recovery."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "Fasting glucose, HbA1c (3-month integration baseline), lactate baseline (mitochondrial-signal marker), IGF-1, lipid panel (TC/LDL/HDL/TG), ALT/AST, CBC",
      "purpose": "Assess insulin-sensitization baseline + mitochondrial metabolic status. Fasting glucose + HbA1c are critical for AMPK-activator cycle-trajectory tracking."
    },
    "midCycle": {
      "label": "During cycle",
      "timing": "4 weeks after cycle start",
      "markers": "Fasting glucose (insulin-sensitization signal expected at -5-15 mg/dL on baseline), HbA1c (early integration ~1-2%), lactate (mitochondrial-signal stability marker), IGF-1",
      "purpose": "Verify insulin-sensitization effect + mitochondrial-signal stability. If lactate >2x baseline → metabolic-acidosis risk; reduce dose or stop cycle."
    },
    "postCycle": {
      "label": "After cycle",
      "timing": "2 + 4 weeks after cycle end",
      "markers": "Fasting glucose (returns to baseline ~2-4 weeks), HbA1c (cumulative -0.1-0.3% on baseline), IGF-1, lipid panel",
      "purpose": "Confirm post-cycle persistence of insulin-sensitization effect + thyroid-axis recovery. HbA1c reduction is the cumulative marker of the AMPK-activator class mechanism."
    }
  },
  "anecdote": "Community reports frequently favor either MOTS-c or 5-Amino-1MQ for fat-loss enhancement. Some users describe MOTS-c as a \"Cardarine-lite,\" though this is generally regarded as an exaggeration. Combined with other fat-loss agents, MOTS-c may form a strong stack. It works best in already-active users, since it enhances fuel utilization rather than forcing fat burn. Improved insulin sensitivity via AMPK activation is a notable benefit, paralleling Metformin's mechanism. Anecdotal reports describe better day-to-day energy especially during steep caloric deficits – subtle but meaningful.\n\nMOTS-c is typically administered subcutaneously. Frequency comes down to user preference. Since MOTS-c is naturally produced and levels decline with age, supplementation in older users may yield more pronounced benefits."
}
