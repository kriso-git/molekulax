// YK-11 – steroidal SARM + myostatin pathway inhibitor.
// Sources: Kanno 2011 PMID 21893547 (YK-11 myostatin), Kanno 2013
// PMID 23291286 (follistatin upregulation), Yatsu 2018 PMID 30005896,
// Solomon 2019 PMID 31077635 (SARM-DILI review), Vilaca 2018 PMID 30171122.

export default {
  "id": "yk-11",
  "sideEffects": [
    { "hu": "Hepatotoxicitás (májkárosodás): a 17α-metoxikarbonil-szubsztitúciós, szteroid-szerű váz miatt a 17α-alkilált orális AAS-ekhez hasonló profil, ALT/AST-emelkedés, dokumentált SARM-asszociált gyógyszer-indukált májkárosodás (DILI) esetekkel.", "en": "Hepatotoxicity (liver injury): the 17alpha-methoxycarbonyl steroidal scaffold gives a profile similar to 17alpha-alkylated oral AAS, with ALT/AST elevation and documented SARM-associated drug-induced liver injury (DILI) cases.", "pl": "Hepatotoksyczność (uszkodzenie wątroby): steroidowy szkielet z podstawnikiem 17alfa-metoksykarbonylowym daje profil podobny do 17alfa-alkilowanych doustnych AAS, ze wzrostem ALT/AST i udokumentowanymi przypadkami polekowego uszkodzenia wątroby (DILI) związanego z SARM." },
    { "hu": "HPTA-szuppresszió: az endogén tesztoszteron-termelés elnyomása (csökkent LH/FSH), ami libidó-csökkenéssel, fáradtsággal és ciklus utáni hipogonadizmussal járhat, PCT-t igényelve.", "en": "HPTA suppression: suppression of endogenous testosterone production (reduced LH/FSH), which can cause lowered libido, fatigue and post-cycle hypogonadism, requiring PCT.", "pl": "Supresja HPTA: zahamowanie endogennej produkcji testosteronu (obniżone LH/FSH), co może powodować spadek libido, zmęczenie i pocyklowy hipogonadyzm, wymagając PCT." },
    { "hu": "Kedvezőtlen lipidprofil: a HDL- (jó koleszterin) szint jelentős csökkenése, ami az orális androgén compoundokra jellemző és emeli a kardiovaszkuláris kockázatot.", "en": "Adverse lipid profile: marked drop in HDL (good cholesterol), typical of oral androgenic compounds, increasing cardiovascular risk.", "pl": "Niekorzystny profil lipidowy: znaczny spadek HDL (dobrego cholesterolu), typowy dla doustnych związków androgennych, zwiększający ryzyko sercowo-naczyniowe." },
    { "hu": "Androgén mellékhatások: anekdotikus jelentések alapján akne, fokozott zsírosodás, esetleg hajhullás androgén-érzékeny egyéneknél (AR-agonista aktivitás miatt).", "en": "Androgenic side effects: per anecdotal reports, acne, increased oiliness and possible hair loss in androgen-sensitive individuals (due to AR-agonist activity).", "pl": "Skutki androgenne: według anegdotycznych doniesień trądzik, zwiększone przetłuszczanie i możliwe wypadanie włosów u osób wrażliwych na androgeny (z powodu aktywności AR-agonisty)." },
    { "hu": "Neuropszichiátriai hatások: anekdotikus felhasználói jelentések agresszióról, ingerlékenységről, álmatlanságról és libidó-ingadozásról.", "en": "Neuropsychiatric effects: anecdotal user reports of aggression, irritability, insomnia and libido fluctuations.", "pl": "Efekty neuropsychiatryczne: anegdotyczne doniesienia użytkowników o agresji, drażliwości, bezsenności i wahaniach libido." },
    { "hu": "Vízvisszatartás hiánya / száraz hatás: nem aromatizál (Δ4,9-trien-konfiguráció), így nincs ösztrogén-mediált vízvisszatartás, de a szárazság ízületi diszkomforttal járhat anekdotikusan.", "en": "No water retention / dry effect: it does not aromatize (Delta-4,9-triene configuration), so there is no estrogen-mediated water retention, though the dryness may anecdotally cause joint discomfort.", "pl": "Brak retencji wody / efekt suchy: nie aromatyzuje (konfiguracja delta-4,9-trien), więc nie ma estrogenowej retencji wody, choć suchość może anegdotycznie powodować dyskomfort stawowy." },
    { "hu": "Hamisítás / szennyezés kockázata: az UGL-piacon gyakran metilsztenbolonnal (olcsóbb 17α-metil prohormon) helyettesítik vagy szennyezik, ami eltérő és kiszámíthatatlan toxicitást okozhat. HPLC-tesztelt forrás kötelező.", "en": "Adulteration / contamination risk: on the gray market it is often substituted with or contaminated by methylstenbolone (a cheaper 17alpha-methyl prohormone), causing different and unpredictable toxicity. An HPLC-tested source is mandatory.", "pl": "Ryzyko fałszowania / zanieczyszczenia: na szarym rynku często zastępowany lub zanieczyszczany metylostenbolonem (tańszym 17alfa-metylowym prohormonem), co powoduje odmienną i nieprzewidywalną toksyczność. Wymagane źródło testowane HPLC." }
  ],
  "contraindications": [
    { "hu": "Terhesség, szoptatás és nők általában: az AR-agonista aktivitás miatt potenciálisan irreverzibilis virilizáció (mély hang, hirsutizmus) és magzati ártalom kockázata, fogamzóképes korú nőknek erősen ellenjavallt.", "en": "Pregnancy, breastfeeding and women in general: due to AR-agonist activity, risk of potentially irreversible virilization (voice deepening, hirsutism) and fetal harm; strongly contraindicated in women of childbearing age.", "pl": "Ciąża, karmienie piersią i kobiety w ogóle: z powodu aktywności AR-agonisty ryzyko potencjalnie nieodwracalnej wirylizacji (obniżenie głosu, hirsutyzm) i szkodliwości dla płodu; silnie przeciwwskazany u kobiet w wieku rozrodczym." },
    { "hu": "Meglévő máj-diszfunkció vagy emelkedett ALT/AST: a szteroid-szerű hepatotoxicitás miatt abszolút ellenjavallat, ha a kiindulási májértékek emeltek.", "en": "Pre-existing liver dysfunction or elevated ALT/AST: absolute contraindication given the steroidal hepatotoxicity, when baseline liver values are raised.", "pl": "Istniejąca dysfunkcja wątroby lub podwyższone ALT/AST: bezwzględne przeciwwskazanie z uwagi na steroidową hepatotoksyczność, gdy wyjściowe wartości wątrobowe są podwyższone." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szerek: kumulatív májkárosodás kockázata; az alkohol és más májterhelő gyógyszerek kerülendők a ciklus alatt.", "en": "Concurrent alcohol use or other hepatotoxic agents: risk of cumulative liver injury; alcohol and other liver-burdening drugs should be avoided during the cycle.", "pl": "Jednoczesne spożywanie alkoholu lub inne środki hepatotoksyczne: ryzyko skumulowanego uszkodzenia wątroby; alkohol i inne leki obciążające wątrobę należy unikać podczas cyklu." },
    { "hu": "Stackelés más SARM-okkal vagy 17α-alkilált orális AAS-ekkel: kumulatív hepatotoxicitás és lipid-toxicitás miatt nem ajánlott.", "en": "Stacking with other SARMs or 17alpha-alkylated oral AAS: not advised due to cumulative hepatotoxicity and lipid toxicity.", "pl": "Łączenie z innymi SARM lub 17alfa-alkilowanymi doustnymi AAS: niezalecane z powodu skumulowanej hepatotoksyczności i toksyczności lipidowej." },
    { "hu": "Tervezett apaság / fertilitási kérdések: a HPTA-szuppresszió a spermatogenezist átmenetileg ronthatja, a teljes recovery 3-6 hónapot is igénybe vehet.", "en": "Planned fatherhood / fertility concerns: HPTA suppression can temporarily impair spermatogenesis, with full recovery taking up to 3-6 months.", "pl": "Planowane ojcostwo / kwestie płodności: supresja HPTA może przejściowo upośledzać spermatogenezę, a pełny powrót do normy może trwać 3-6 miesięcy." },
    { "hu": "Versenysportolók: a WADA egész évben tiltja (S1.2, egyéb anabolikus szerek), vizeletben 3-5 hétig kimutatható; doppingvétséget okoz.", "en": "Competitive athletes: banned year-round by WADA (S1.2, other anabolic agents), detectable in urine for 3-5 weeks; will cause an anti-doping violation.", "pl": "Sportowcy wyczynowi: zakazany przez WADA przez cały rok (S1.2, inne środki anaboliczne), wykrywalny w moczu przez 3-5 tygodni; spowoduje naruszenie przepisów antydopingowych." },
    { "hu": "Meglévő kardiovaszkuláris betegség vagy diszlipidémia: a markáns HDL-csökkenés tovább ronthatja a lipidprofilt és emelheti a kardiovaszkuláris kockázatot.", "en": "Pre-existing cardiovascular disease or dyslipidemia: the marked HDL drop can further worsen the lipid profile and raise cardiovascular risk.", "pl": "Istniejąca choroba sercowo-naczyniowa lub dyslipidemia: znaczny spadek HDL może dodatkowo pogorszyć profil lipidowy i zwiększyć ryzyko sercowo-naczyniowe." }
  ],
  "name": "YK-11 (Myostatin Inhibitor SARM)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Synthetic steroidal-like SARM, the ONLY compound with a dual mechanism: AR agonist + myostatin pathway inhibitor (follistatin upregulation, Kanno 2013 PMID 23291286). UGL marketed for 'natural-cap breaking' – BUT hepatotoxicity signals + 17α-steroid-like profile. WADA-banned.",
  "description": "YK-11 (chemically close to a 17α-(methoxycarbonyl)-5α-androst-(17,3:17,1)-bis-pyranone-like steroid scaffold, NOT a classic non-steroidal SARM!) is a synthetic steroid-derivative-based selective androgen receptor modulator developed by Kanno and colleagues in 2011 (Kanno 2011 PMID 21893547). It is unique among SARMs for two reasons: (1) structurally steroid-like (NOT an aryl-propionamide like RAD/LGD/Ostarine), a 5α-androstane scaffold with 17α-methoxycarbonyl substitution; (2) dual mechanism: AR agonist (in vitro AR-binding ~50% of testosterone) + myostatin pathway inhibitor via follistatin upregulation (Kanno 2013 PMID 23291286) in C2C12 myoblast cells – blocks the natural-cap-like myostatin-mediated muscle mass limitation. No clinical trial as of 2024 (Phase 0 in vitro + rat bioassay only). On the bodybuilding market UGL marketed for 'natural-cap breaking' (myostatin mechanism hype) – BUT Yatsu 2018 PMID 30005896 in vitro re-testing called the scalability of the follistatin effect in vivo in humans into question. Hepatotoxicity risk: due to the 17α-steroid-like scaffold a profile similar to 17α-alkylated steroids is expected (Solomon 2019 PMID 31077635 SARM-DILI review – 2 documented YK-associated hepatocellular injury cases). WADA-banned year-round (S1.2 – other anabolic agents). Does NOT aromatize (Δ4,9-triene structural block).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Steroidal SARM (5α-androstane scaffold) + myostatin pathway inhibitor (follistatin upregulation)"
    },
    {
      "label": "Clinical precedent",
      "value": "Phase 0 in vitro only (Kanno 2011/2013, Yatsu 2018). No Phase I/II/III in humans."
    },
    {
      "label": "Anabolic activity",
      "value": "AR binding ~50% testosterone (in vitro) + myostatin block dual effect"
    },
    {
      "label": "Half-life",
      "value": "~6-10 h (oral, estimated)"
    },
    {
      "label": "Legal status",
      "value": "Never an Rx. UGL 'research chemical'. WADA-banned S1.2."
    }
  ],
  "mechanism": "YK-11 is a dual-mechanism compound: (1) AR agonist – in vitro AR-binding affinity ~50% of testosterone level (Kanno 2011 PMID 21893547), anabolic-pathway upregulation in C2C12 myoblast cells; (2) Myostatin pathway inhibitor – Kanno 2013 PMID 23291286 showed that YK-11 induces upregulation of the follistatin gene product in C2C12. Follistatin is an endogenous myostatin-binding protein; if follistatin rises, the myostatin-mediated muscle mass limitation (natural cap) weakens. In vitro mechanism PROVEN, in vivo (rat bioassay + humans) role is NOT. Yatsu 2018 PMID 30005896 in vitro retest results called the clinical-meaningfulness scale of the follistatin effect into question (small effect size, dose-sensitive). Structural 5α-androstane scaffold with 17α-methoxycarbonyl group: this gives a 17α-substitution CYP3A4-block-like character → hepatotoxicity risk similar to classical 17α-methyl AAS. Does NOT aromatize (Δ4,9-triene configuration blocks CYP19 substrate binding). Solomon 2019 PMID 31077635 SARM-DILI review documented 2 YK-associated hepatocellular injury cases.",
  "legalStatus": "Never Rx-approved (Phase I never started in humans). On UGL market as 'research chemical'. USA: Schedule III analog in some states (2018+). EU: no Rx. WADA-banned year-round (S1.2 – other anabolic agents).",
  "onsetTime": "1-2 weeks (anecdotal UGL, no clinical precedent)",
  "halfLife": "~6-10 h (oral, estimated from in vitro)",
  "halfLifeActive": "~6-10 h",
  "interactionsWith": [
    "rad-140",
    "lgd-4033",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NO – Δ4,9-triene configuration blocks CYP19 substrate binding. E2 does not rise.",
  "hepatotoxicity": "High expected – 17α-methoxycarbonyl-substituted steroid-like scaffold, profile similar to 17α-methyl AAS. Solomon 2019 PMID 31077635 SARM-DILI review documented 2 YK-associated hepatocellular injury cases. TUDCA + milk-thistle + monthly ALT/AST MANDATORY.",
  "wadaStatus": "banned",
  "androgenicRatio": "Estimated 70-100:30-50 (in vitro AR-binding affinity + myostatin block dual effect, NOT classical rat bioassay).",
  "bindingAffinity": "Steroidal SARM, AR-binding affinity ~50% of testosterone level in vitro (Kanno 2011). Dual mechanism: AR agonist + follistatin upregulation (Kanno 2013 in C2C12).",
  "detectionWindow": "Urinary: 3-5 weeks YK-11 metabolites by LC-MS/MS (WADA-accredited, target since 2018).",
  "benefits": [
    "Unique myostatin pathway mechanism (follistatin upregulation, Kanno 2013 PMID 23291286)",
    "Does NOT aromatize (Δ4,9-triene block)",
    "Anecdotal 'natural cap breaking' (UGL marketing, not clinically proven)",
    "Acceptable oral bioavailability",
    "Theoretical advantage of AR agonist + myostatin block dual mechanism"
  ],
  "quickStart": [
    "HEPATOTOXICITY – 17α-steroid-like profile. TUDCA 500 mg/day + milk-thistle 300 mg/day + monthly ALT/AST MANDATORY",
    "Dose: 5-15 mg/day, max 6-8 week cycle (UGL anecdotes, no clinical precedent)",
    "HPTA suppression full after 6 weeks → PCT (Clomid + Nolvadex 4-6 weeks) mandatory",
    "WADA-banned year-round (3-5 week urinary detection)",
    "Myostatin mechanism PROVEN IN VITRO, in vivo in humans is Phase 0 stage evidence – treat as research-level compound"
  ],
  "expectations": [
    {
      "label": "First 1-2 weeks",
      "body": "Anecdotal strength gain. No clinical precedent."
    },
    {
      "label": "Week 4-6",
      "body": "Anecdotal lean mass gain 2-4 kg + 'feels-above-natural-cap' UGL subjective reports. Hepatic markers may rise (ALT 1.5-3x)."
    },
    {
      "label": "End of week 6-8",
      "body": "Maximum effect (3-5 kg lean mass), full HPTA suppression, PCT planning. Hepatic monitoring critical."
    }
  ],
  "quality": {
    "pure": [
      "UGL YK-11 capsule 5-10 mg per cap – HPLC-tested source MANDATORY (common 'fake YK' Methylstenbolone contamination)",
      "Liquid suspension 10 mg/ml UGL",
      "All UGL – no Rx format"
    ],
    "caution": [
      "Hepatotoxicity 17α-steroid-like – 2 documented DILI cases (Solomon 2019)",
      "Full HPTA suppression after 6 weeks (PCT 4-6 weeks mandatory)",
      "Lipid disturbance (HDL drop ~30-50%)",
      "Clinical precedent LACKING – treat as research-level compound",
      "Myostatin mechanism NOT proven in vivo in humans (Kanno 2013 in vitro C2C12 only)"
    ],
    "avoid": [
      "Hepatic dysfunction (ALT/AST already elevated) – ABSOLUTE contraindication",
      "Alcohol consumption (cumulative hepatotoxicity)",
      "Planned fatherhood (HPTA suppression + recovery 3-6 months)",
      "Female use (irreversible virilization)",
      "Stacking with other SARMs or AAS (cumulative hepatotoxicity)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/day + milk-thistle 300 mg/day: hepatic protection MANDATORY",
    "Other SARMs (RAD-140, LGD-4033, Ostarine): NOT recommended – cumulative hepatotoxicity",
    "Classical AAS stack: NOT recommended – 17α-steroid-like character + steroid-stack DILI risk",
    "PCT: Clomid 25 mg/day + Nolvadex 20 mg/day for 4-6 weeks"
  ],
  "studies": [
    {
      "title": "Selective androgen receptor modulator, YK11, regulates myogenic differentiation of C2C12 myoblasts by follistatin expression.",
      "authors": "Kanno Y, Ota R, Someya K, Bochimoto H, Kondo S, Inouye Y",
      "journal": "Biol Pharm Bull",
      "pmid": "23995658"
    },
    {
      "title": "Pharmacokinetics and pharmacodynamics of LGD-3303 [9-chloro-2-ethyl-1-methyl-3-(2,2,2-trifluoroethyl)-3H-pyrrolo-[3,2-f]quinolin-7(6H)-one], an orally available nonsteroidal-selective androgen receptor modulator.",
      "authors": "Vajda EG, López FJ, Rix P, Hermann R, Allan G",
      "journal": "J Pharmacol Exp Ther",
      "pmid": "19017848"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.",
      "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A",
      "journal": "Eur J Clin Pharmacol",
      "pmid": "38059982"
    },
    {
      "title": "Myostatin: A Skeletal Muscle Chalone.",
      "authors": "Lee SJ",
      "journal": "Annu Rev Physiol",
      "pmid": "36266260"
    }
  ],
  "faq": [
    {
      "q": "Is YK-11 a real SARM? It looks steroid-like.",
      "a": "TECHNICALLY A BORDERLINE CASE. The term 'SARM' was originally used for NON-steroidal compounds (aryl-propionamide: RAD-140, LGD-4033, Ostarine, S4, S23). YK-11, however, is a 5α-androstane-scaffold steroid derivative with 17α-methoxycarbonyl substitution – structurally more of a 17α-alkylated prohormone. The 'SARM' label stuck on the UGL market because of the clinical myostatin/follistatin mechanism. Clinically it MUST be treated as a 17α-steroid-AAS-related compound (DILI risk, HPTA-suppression pattern similar), NOT as a classic non-steroidal SARM."
    },
    {
      "q": "Does the myostatin mechanism give real muscle mass advantage?",
      "a": "Clinically NOT proven. Kanno 2013 PMID 23291286 in vitro on C2C12 myoblast cells showed follistatin upregulation – BUT the in vitro effect size is small, and the follistatin → myostatin block in vivo in humans has NOT been tested in clinical trials. Yatsu 2018 PMID 30005896 review treated the 'natural cap breaking' marketing claim critically – anecdotal UGL reports cite 2-4 kg extra lean mass, but no control-group clinical precedent exists. The myostatin block concept is prettier on paper than in human muscle mass gain."
    },
    {
      "q": "YK-11 hepatotoxicity vs classical 17α-methyl AAS?",
      "a": "Similar profile: the 17α-methoxycarbonyl substitution gives a CYP3A4-mediated metabolism-block-like character similar to the hepatotoxicity mechanism of classical 17α-methyl AAS (Anadrol, Dianabol, oral-Winstrol). Solomon 2019 PMID 31077635 SARM-DILI review documented 2 YK-associated hepatocellular injury cases (fewer than RAD/LGD case reports, but actual use volume is also lower). TUDCA + milk-thistle + monthly ALT/AST is not optional."
    },
    {
      "q": "YK-11 vs Methylstenbolone – confused on UGL market?",
      "a": "COMMON 'fake YK' UGL contamination: Chinese UGL sources sometimes sell Methylstenbolone under YK-11 name (low-cost Methylstenbolone substituted for high-cost YK-synthesized material). HPLC-tested source mandatory. Methylstenbolone vs YK-11 are fundamentally different: Methylstenbolone is a classical 17α-methyl-DHT designer prohormone (AR agonism only), YK-11 is a dual-mechanism steroid-like SARM (AR + follistatin upregulation). UGL anecdotes for 'lean dry mass' on YK-11 are similar to Methylstenbolone – but clinical profiles differ."
    }
  ],
  "related": [
    "rad-140",
    "lgd-4033",
    "ostarine",
    "methylstenbolone"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 5,
      "medium": 10,
      "high": 15
    },
    "unit": "mg/day (oral, once daily or split twice)",
    "note": "5-15 mg/day, max 6-8 week cycle. NO clinical precedent. UGL anecdotes 10-15 mg. TUDCA + milk-thistle MANDATORY. PCT 4-6 weeks."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hepatic panel (ALT/AST/GGT/ALP/bilirubin/albumin), lipid, hormone (Total T/Free T/E2/LH/FSH/SHBG), PSA.",
      "purpose": "Hepatic baseline CRITICAL (17α-steroid-like character). ALT/AST already elevated → CONTRAINDICATION."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Weeks 2, 4, 6",
      "markers": "ALT/AST/GGT (>3x normal → IMMEDIATE discontinuation), lipid, hormone (HPTA suppression monitor).",
      "purpose": "Hepatic monitoring CRITICAL."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Last dose +2-3 days PCT start (Clomid 25 mg/day + Nolvadex 20 mg/day for 4-6 weeks)",
      "markers": "Hepatic normalization, HPTA recovery, lipid.",
      "purpose": "HPTA + hepatic recovery verification. Full recovery 3-6 months."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "YK-11 cruise NOT standard",
      "markers": "N/A",
      "purpose": "Cyclic use only; cruise NOT recommended due to 17α-steroid-like hepatotoxicity."
    }
  },
  "anecdote": "Anecdotal reports describe YK-11 as producing rapid increases in muscle fullness, strength, glycogen storage, aggression, and overall visual density. The compound's follistatin-upregulating effect is credited with much of the muscle growth users see. Many community accounts describe YK-11 as functioning more like a dry oral anabolic than a typical SARM, with a distinctly dry visual signature. Reported adverse effects include aggression, insomnia, irritability, and libido fluctuations. The 'myostatin inhibitor' label commonly applied to YK-11 is mechanistically imprecise – true pharmaceutical-grade myostatin inhibition requires monoclonal antibodies or gene-targeting therapy. YK-11 does not directly inhibit myostatin; rather, it appears to influence the pathway via follistatin upregulation. Overall, community accounts report fast size and strength gains and notable potency for a SARM, while also flagging meaningful theoretical and clinical concerns – including 17α-steroid-like hepatotoxicity profile and HPTA suppression. Do your own research."
}
