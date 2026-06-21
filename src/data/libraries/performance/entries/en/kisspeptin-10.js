// Kisspeptin-10 – 10-amino-acid C-terminal kisspeptin fragment, hypothalamic
// GPR54 (KISS1R) agonist. Imperial College London Phase I-II trials 2020s.
// Research-emerging upstream HPG-axis restart agent.
// Sources: Jayasena 2017 PMID 27959703, Dhillo 2007 PMID 17567849,
// George 2013 PMID 23390083.

export default {
  "id": "kisspeptin-10",
  "sideEffects": [
    { "hu": "Tranziens LH/FSH- és tesztoszteron-kiugrás: gyors hormonális ingadozás, ami fejfájást, hangulati labilitást és átmeneti libidóváltozást okozhat a klinikai vizsgálatokban dokumentáltan.", "en": "Transient LH/FSH and testosterone surge: rapid hormonal swings that may cause headache, mood lability and short-term libido changes, as documented in clinical trials.", "pl": "Przejściowy wyrzut LH/FSH i testosteronu: szybkie wahania hormonalne mogące powodować ból głowy, chwiejność nastroju i krótkotrwałe zmiany libido, udokumentowane w badaniach klinicznych." },
    { "hu": "Receptor-deszenzitizáció tartós, nem pulzatilis adagolásnál: a krónikus, folyamatos GPR54/GnRH-stimulus paradox módon downregulálhatja a tengelyt és LH-szuppresszióhoz vezethet (a GnRH-agonista terápiák ismert mechanizmusa).", "en": "Receptor desensitization with continuous, non-pulsatile dosing: chronic steady GPR54/GnRH stimulation can paradoxically downregulate the axis and cause LH suppression (the known mechanism of GnRH-agonist therapy).", "pl": "Desensytyzacja receptora przy ciągłym, niepulsacyjnym dawkowaniu: przewlekła stała stymulacja GPR54/GnRH może paradoksalnie obniżyć regulację osi i wywołać supresję LH (znany mechanizm terapii agonistami GnRH)." },
    { "hu": "Injekciós helyi reakciók: szubkután beadás miatt bőrpír, fájdalom, viszketés vagy duzzanat a beadás helyén; ismételt napi/órás beadásnál ez halmozódik.", "en": "Injection-site reactions: subcutaneous administration can cause redness, pain, itching or swelling at the site; this accumulates with frequent daily/hourly dosing.", "pl": "Reakcje w miejscu wstrzyknięcia: podanie podskórne może powodować zaczerwienienie, ból, swędzenie lub obrzęk; nasila się to przy częstym dawkowaniu dziennym/godzinowym." },
    { "hu": "Sterilitási és fertőzési kockázat: a research-grade liofilizált peptid önkezelése (rekonstitúció, gyakori SC-injekció) nem steril technikánál bőr- és lágyrész-fertőzést okozhat.", "en": "Sterility and infection risk: self-handling of research-grade lyophilized peptide (reconstitution, frequent SC injection) can cause skin and soft-tissue infection with non-sterile technique.", "pl": "Ryzyko sterylności i zakażenia: samodzielne przygotowanie liofilizowanego peptydu badawczego (rekonstytucja, częste iniekcje SC) może powodować zakażenie skóry i tkanek miękkich przy niesterylnej technice." },
    { "hu": "Másodlagos ösztradiol-emelkedés: a kiváltott tesztoszteron perifériás aromatizációjával E2 emelkedhet, ami vízvisszatartást vagy érzékenységet okozhat, hasonló nagyságrendben a HCG-tengelyhez.", "en": "Secondary estradiol rise: peripheral aromatization of the induced testosterone can raise E2, potentially causing water retention or tenderness, of similar magnitude to the HCG axis.", "pl": "Wtórny wzrost estradiolu: obwodowa aromatyzacja indukowanego testosteronu może podnieść E2, powodując zatrzymanie wody lub tkliwość, w skali podobnej do osi HCG." },
    { "hu": "Termékenységi/reproduktív neuroendokrin hatások: a kisspeptin erősen befolyásolja a reproduktív tengelyt, ezért nem kontrollált adagolás megzavarhatja a természetes ciklicitást és a spermiogenezist; a hosszú távú humán biztonsági adat korlátozott.", "en": "Fertility/reproductive neuroendocrine effects: kisspeptin strongly drives the reproductive axis, so uncontrolled dosing can disrupt natural cyclicity and spermatogenesis; long-term human safety data are limited.", "pl": "Wpływ neuroendokrynny na płodność/rozród: kisspeptyna silnie napędza oś rozrodczą, więc niekontrolowane dawkowanie może zaburzać naturalną cykliczność i spermatogenezę; długoterminowe dane bezpieczeństwa u ludzi są ograniczone." },
    { "hu": "Peptid-minőségi kockázat: HPLC/tömegspektrometriás tanúsítvány nélküli UGL-forrás degradált vagy pszeudo-peptidet tartalmazhat, ami hatástalanságot vagy kiszámíthatatlan reakciókat okoz.", "en": "Peptide quality risk: UGL sources without HPLC/mass-spec certification may contain degraded or pseudo-peptide, leading to ineffectiveness or unpredictable reactions.", "pl": "Ryzyko jakości peptydu: źródła UGL bez certyfikatu HPLC/spektrometrii mas mogą zawierać zdegradowany lub pseudo-peptyd, co prowadzi do nieskuteczności lub nieprzewidywalnych reakcji." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás, valamint terhes partnerrel való kontaktus-kockázat: a kisspeptin kulcsszerepet játszik a reproduktív neuroendokrin szabályozásban, magzati HPG-tengely-hatás elméleti kockázata miatt kerülendő.", "en": "Pregnancy and breastfeeding, plus pregnant-partner contact risk: kisspeptin is central to reproductive neuroendocrine regulation; avoid due to theoretical fetal HPG-axis effects.", "pl": "Ciąża i karmienie piersią oraz ryzyko kontaktu z ciężarną partnerką: kisspeptyna jest kluczowa w regulacji neuroendokrynnej rozrodu; unikać z powodu teoretycznego wpływu na oś HPG płodu." },
    { "hu": "Hormonérzékeny (androgén- vagy ösztrogénfüggő) daganat, pl. prosztatarák vagy emlőrák: a kiváltott LH/FSH és tesztoszteron-emelkedés ronthatja a kórképet.", "en": "Hormone-sensitive (androgen- or estrogen-dependent) cancer, e.g. prostate or breast cancer: the induced LH/FSH and testosterone rise can worsen the disease.", "pl": "Nowotwór hormonozależny (androgeno- lub estrogenozależny), np. rak prostaty lub piersi: indukowany wzrost LH/FSH i testosteronu może pogorszyć chorobę." },
    { "hu": "Egyidejű GnRH-agonista terápia (Lupron, Zoladex) vagy egyéb GnRH-pathway-szer (gonadorelin): átfedő mechanizmus és elméleti receptor-interakció miatt nem ajánlott.", "en": "Concurrent GnRH-agonist therapy (Lupron, Zoladex) or other GnRH-pathway agents (gonadorelin): not recommended due to overlapping mechanism and theoretical receptor interaction.", "pl": "Jednoczesna terapia agonistą GnRH (Lupron, Zoladex) lub inne leki działające na szlak GnRH (gonadorelina): niezalecane z powodu nakładającego się mechanizmu i teoretycznej interakcji receptorowej." },
    { "hu": "Strukturális hypothalamus-hypophysis-károsodás vagy hypophysis-elégtelenség: a tengely felső szintjén ható peptid nem helyettesíti a downstream pótlást, ahol a pituiter válasz hiányzik.", "en": "Structural hypothalamic-pituitary damage or pituitary insufficiency: a peptide acting at the top of the axis cannot substitute downstream replacement where the pituitary response is absent.", "pl": "Strukturalne uszkodzenie podwzgórzowo-przysadkowe lub niewydolność przysadki: peptyd działający na szczycie osi nie zastąpi suplementacji niżej, gdy brak odpowiedzi przysadki." },
    { "hu": "Ismert túlérzékenység kisspeptinre vagy a készítmény segédanyagaira (pl. bakteriosztatikus víz, benzil-alkohol).", "en": "Known hypersensitivity to kisspeptin or formulation excipients (e.g. bacteriostatic water, benzyl alcohol).", "pl": "Znana nadwrażliwość na kisspeptynę lub substancje pomocnicze preparatu (np. woda bakteriostatyczna, alkohol benzylowy)." },
    { "hu": "Versenysportolók: a WADA S2 Peptid Hormonok kategóriájában tiltott versenyen belül és kívül egyaránt.", "en": "Competitive athletes: prohibited both in- and out-of-competition under WADA S2 Peptide Hormones.", "pl": "Sportowcy wyczynowi: zabroniona w i poza zawodami w kategorii WADA S2 Hormony Peptydowe." },
    { "hu": "Képzetlen önkezelő felhasználó: a pulzatilis pumpa-protokoll és a steril rekonstitúció/injekciós technika szakirányú tudást igényel, enélkül kontraindikált.", "en": "Untrained self-administering user: the pulsatile pump protocol and sterile reconstitution/injection technique require specialized knowledge; contraindicated without it.", "pl": "Nieprzeszkolony użytkownik samodzielnie podający lek: protokół pompy pulsacyjnej oraz sterylna rekonstytucja/technika iniekcji wymagają specjalistycznej wiedzy; bez niej przeciwwskazane." }
  ],
  "name": "Kisspeptin-10",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "10-amino-acid C-terminal kisspeptin fragment – hypothalamic GPR54 → GnRH pulse → LH/FSH. Highest-upstream HPG axis restart agent. Imperial College London Phase I-II ongoing in 2020s; research-emerging.",
  "description": "Kisspeptin-10 is the 10-amino-acid C-terminal bioactive fragment of the kisspeptin family (KISS1 gene-product) that binds to the hypothalamic GPR54 (also known as KISS1R) receptor, triggering a GnRH-pulse pattern on arcuate-nucleus GnRH neurons – thereby triggering pituitary LH/FSH release, which activates Leydig cell testosterone production. **Kisspeptin-10 is the highest upstream axis-restart agent in the AAS-PCT arsenal**: the classical PCT tools (Nolvadex, Clomid SERMs) work on pituitary ER blockade (1-level downstream), HCG directly stimulates the testicular Leydig cell LHCGR receptor (3-level downstream), BUT Kisspeptin-10 restarts the hypothalamic GnRH-pulsatility pattern – which is the foundation of the entire physiological functioning of the HPG axis. Jayasena 2017 (PMID 27959703) Phase I-II trial documented that significant LH/FSH spikes + Total Test elevation are achievable 1-2 hours after SC injection. Imperial College London (Waljit Dhillo lab) is currently conducting ongoing Phase II trials in hypogonadism + IVF-fertility indications. **Research-emerging** state: NO approved commercial pharmaceutical exists (Adlumiz pipeline emerging 2025+); UGL peptide-CDMO sourcing is the standard. Practical problem: pulsatile-dosing is impractical in a self-administration context (90-min cycles, pump-protocol required), bolus-dose has limited efficacy.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Hypothalamic GPR54 (KISS1R) agonist → GnRH-pulse → LH/FSH → testicular Test"
    },
    {
      "label": "Dosing",
      "value": "50-200 mcg SC every 90 min (pulse-pump) or 1-2 mg SC bolus daily (community protocol, limited efficacy)"
    },
    {
      "label": "Half-life",
      "value": "~28 minutes (very short – pulsatility pattern is essential)"
    },
    {
      "label": "Onset",
      "value": "LH/FSH spike 1-2 hours after SC"
    },
    {
      "label": "Legal status",
      "value": "NO FDA/EMA pharmaceutical approval; Imperial College London Phase II ongoing 2026, WADA S2 Peptide Hormones banned"
    }
  ],
  "mechanism": "The KISS1 (kisspeptin) gene product is a ~145-amino-acid precursor protein that undergoes proteolytic cleavage, and the 10-amino-acid C-terminal fragment (Kisspeptin-10, KP-10) is the biologically most active form. Its receptor is GPR54 (KISS1R) – a G-protein-coupled receptor on hypothalamic arcuate-nucleus + AVPV (anteroventral periventricular nucleus) GnRH neurons. Binding → Gq-pathway → intracellular Ca²⁺ mobilization → membrane depolarization → GnRH-vesicle release toward the median eminence. GnRH reaches the anterior lobe of the pituitary via the portal circuit and triggers LH + FSH secretion on the gonadotroph cells. **Critical pulsatility**: the natural GnRH-pulse pattern operates in ~90-120 minute cycles; a chronic-elevated GnRH signal (vs pulsatile) downregulates the GnRH receptor → reverse effect (the mechanism behind prostate-cancer GnRH-agonist therapy). For this reason, an SC-bolus dose of Kisspeptin-10 produces a single LH-spike with limited efficacy, and a pulse-pump protocol is required for chronic axis restart. There is no hepatic stress due to the peptide SC injection.",
  "legalStatus": "NO FDA/EMA pharmaceutical approval. Imperial College London Phase II trials are ongoing (Waljit Dhillo lab, 2017+). UGL peptide-CDMO sourcing is the standard ($30-50/mg). Adlumiz Therapeutics 2024+ commercial pipeline emerging (Phase III plans). WADA: S2 Peptide Hormones – banned in/out-of-competition.",
  "onsetTime": "LH/FSH spike 1-2 hours after SC",
  "halfLife": "~28 minutes",
  "halfLifeActive": "~28 minutes (parent fragment active; metabolite fragments inactive)",
  "interactionsWith": [
    "gonadorelin",
    "hcg-perf",
    "fsh-rec-perf"
  ],
  "aromatization": "Indirect: hypothalamic GnRH stimulus → LH/FSH → testicular Test → peripheral E2 conversion. Magnitude moderate, similar to HCG-axis.",
  "hepatotoxicity": "No hepatic stress – peptide SC injection.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (hypothalamic peptide, NOT AAS)",
  "bindingAffinity": "GPR54 (KISS1R) Ki ~1-3 nM, high-affinity natural-ligand-like binding.",
  "detectionWindow": "WADA-accredited LC-MS/MS sparse – peptide detection from urine sample 24-48 hours (research context, limited data).",
  "benefits": [
    "Upstream HPG-axis restart – at the highest point of the Kisspeptin-Gonadorelin-HCG hierarchy",
    "Imperial College London Phase II trials evidence (Jayasena 2017): SC-bolus LH/FSH-spike + Test elevation documented",
    "Research-emerging – Adlumiz commercial pipeline 2025+",
    "No hepatic stress – peptide"
  ],
  "quickStart": [
    "Sourcing: research-chemical peptide-CDMO (USA: Bachem, Lipotec; EU: PolyPeptide Group); HPLC + mass-spec-tested source is mandatory",
    "Reconstitution: 1 mg lyophilized → 2 mL bacteriostatic water (0.5 mg/mL concentration)",
    "Pulse-pump protocol (ideal): 50-200 mcg SC every 90 min, ~16 doses/24 hours – EXCLUSIVELY in research setting",
    "Bolus protocol (DIY-PCT community): 1-2 mg SC once daily, limited efficacy – single LH-spike",
    "Bloodwork pre-treatment: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolactin baseline",
    "Bloodwork mid + post: 24h post-injection LH/FSH-spike confirm, 7-14 days Total-Test recovery"
  ],
  "expectations": [
    {
      "label": "1-2 hours after SC",
      "body": "LH spike measurable (~3-5× baseline rise, Jayasena 2017 data). FSH spike milder (~2-3×). Serum-level Test elevation with ~6-12 hour delay."
    },
    {
      "label": "24-48 hours",
      "body": "LH level falls back (short half-life). Test elevation sustained for ~2-3 days. With a second dose, the pulsatility-simulating effect can be extended."
    },
    {
      "label": "Chronic protocol (pulse-pump, 1-2 weeks)",
      "body": "Full physiological pattern HPG-axis restart. Endogenous Test recovery >50% baseline achievable in pituitary-level suppress status."
    },
    {
      "label": "Bolus DIY-protocol",
      "body": "Limited efficacy – single LH-spike per dose, NOT chronic axis restart. SERM-PCT-replacement role is currently NOT evidence-based."
    }
  ],
  "quality": {
    "pure": [
      "USA peptide-CDMO: Bachem, Lipotec, AmbioPharm – HPLC + mass-spec-tested (>98% purity), R&D-grade vials",
      "EU peptide-CDMO: PolyPeptide Group (Belgium), Bachem Bubendorf (Switzerland) – pharmaceutical-grade",
      "Adlumiz Therapeutics (USA) – commercial pipeline emerging 2025-2026 Phase III dataset",
      "UGL peptide vendor (Asian sourcing): HPLC-cert mandatory – purity often <90%, avoid without mass-spec confirmation"
    ],
    "caution": [
      "Pulse-pump protocol impractical for self-administration (90-min cyclic injection 24/7) – research setting only",
      "Bolus-dose limited efficacy – single LH-spike vs chronic HPG-axis restart",
      "Sourcing: peptide-CDMO is expensive (~€30-50/mg), Imperial-College-Phase-II material-source is NOT publicly available",
      "Bacteriostatic-water storage: 4°C reconstituted peptide stable for 14-21 days; 25°C room temperature <7 days",
      "UGL source purchased without mass-spec cert: pseudo-peptide + degraded fragments frequent"
    ],
    "avoid": [
      "Self-administered pulse-pump protocol in an untrained user (sterile technique critical, infection risk)",
      "Research-novice user – peptide handling + reconstitution protocol requires domain knowledge",
      "Chronic high-dose (>10 mg/day, >4 weeks): GPR54 receptor downregulation theoretical risk (Kisspeptin-LH-suppression paradox)",
      "Co-administration with GnRH-agonist therapy (Lupron, Zoladex): theoretical receptor interaction, NOT recommended",
      "Pregnant partner contact: theoretical fetal HPG-axis effect"
    ]
  },
  "interactions": [
    "HCG-perf: upstream vs downstream synergy – Kisspeptin pituitary-LH stimulus + HCG testicular-LHCGR stimulus combo",
    "Gonadorelin: NOT recommended together (overlap-mechanism, redundant GnRH-pathway stimulation)",
    "SERM (Nolvadex, Clomid): theoretical synergy (Kisspeptin upstream-pulse + SERM pituitary ER-blockade), BUT clinical evidence is sparse",
    "Pulse-pump protocol + bolus + SC-injection tooling: peptide stability storage is critical"
  ],
  "studies": [
    {
      "title": "Age-dependent changes in the reproductive axis responsiveness to kisspeptin-10 administration in healthy men.",
      "authors": "Ullah H, Nabi G, Zubair H, Shahab M",
      "journal": "Andrologia",
      "pmid": "30590872"
    },
    {
      "title": "Changes in the Responsiveness of the Hypothalamic-Pituitary-Gonadal Axis to Kisspeptin-10 Administration during Pubertal Transition in Boys.",
      "authors": "Nabi G, Ullah H, Khan S, Wahab F, Duan P, Ullah R, Shireen N, Shahab M",
      "journal": "Reprod Sci",
      "pmid": "30046307"
    },
    {
      "title": "Hypothalamic Response to Kisspeptin-54 and Pituitary Response to Gonadotropin-Releasing Hormone Are Preserved in Healthy Older Men.",
      "authors": "Abbara A, Narayanaswamy S, Izzi-Engbeaya C, Comninos AN, Clarke SA, Malik Z, Papadopoulou D, Modi M, Faruqi D, Mustafa R, Bassett P, Lavery S, Trew GH, Patel A, Hu M, Bloom SR, Dhillo WS",
      "journal": "Neuroendocrinology",
      "pmid": "29544222"
    }
  ],
  "faq": [
    {
      "q": "Kisspeptin-10 vs HCG vs Gonadorelin – what's the difference?",
      "a": "Axis-level hierarchy difference. (1) **Kisspeptin-10**: hypothalamic GPR54 → GnRH pulse → LH/FSH (highest upstream point); (2) **Gonadorelin**: pituitary GnRH receptor → LH/FSH (1 level downstream of Kisspeptin, direct GnRH-analog); (3) **HCG**: testicular Leydig-cell LHCGR receptor → Test production (3 levels downstream, completely bypassing the pituitary). Clinical choice: Kisspeptin is the most natural pattern (pulsatility-simulator) BUT the most impractical (pump-protocol); HCG is the most practical (2x weekly SC) BUT bypasses the pituitary feedback loop. Gonadorelin is intermediate (pituitary-level direct, BUT pulsatility required)."
    },
    {
      "q": "Pulsatile dosing is impractical – what is the bolus dose worth?",
      "a": "Single-bolus 1-2 mg SC Jayasena 2017 trial-evidence: ~3-5× LH spike + ~2-3× FSH spike within 1-2 hours, Test elevation with ~6-12 hour delay, sustained for ~2-3 days. **Limited efficacy for chronic axis restart**: a pulsatile pattern (90-min cycles) is required for full physiological recovery of the HPG axis, single-bolus is only a transient stimulus. Community DIY-PCT protocols attempt 1-2 mg SC daily × 7-14 days – empirical evidence is sparse, NOT a SERM-PCT replacement. Imperial College Phase II trials operate on a pulse-pump protocol."
    },
    {
      "q": "Sourcing?",
      "a": "Research-chemical peptide-CDMO is the standard sourcing. USA: Bachem, Lipotec, AmbioPharm (HPLC + mass-spec-tested, >98% purity, ~$30-50/mg). EU: PolyPeptide Group, Bachem Bubendorf (pharmaceutical-grade, similar price). Asian UGL vendor: HPLC-cert mandatory – purity often <90%, mass-spec confirmation lacking. Imperial College London Phase II material is NOT publicly available, exclusively via trial participation. Adlumiz Therapeutics 2025-26 commercial pipeline focus."
    },
    {
      "q": "Clinical trial status 2026?",
      "a": "Imperial College London (Waljit Dhillo lab) ongoing Phase II trials in hypogonadism + IVF-fertility indications (2017-2026). Adlumiz Therapeutics (USA) commercial pipeline emerging – Phase III plans 2025-2026 in hypogonadism indication. There is no commercial pipeline in Europe. Kisspeptin-54 (the 54-amino-acid variant) is also parallel research, similar mechanism. Modern clinical decision tree: Kisspeptin-PCT is NOT currently evidence-based, SERM (Nolvadex/Clomid) + HCG combination remains the clinical standard."
    }
  ],
  "related": [
    "gonadorelin",
    "hcg-perf",
    "fsh-rec-perf"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0.5,
      "medium": 1,
      "high": 2
    },
    "unit": "mg SC once daily (bolus protocol, limited efficacy)",
    "note": "Pulse-pump protocol (research): 50-200 mcg SC every 90 min × 24h cycles. Bolus DIY protocol: 1-2 mg SC once daily in the morning × 7-14 days. Reconstitution: 1 mg lyophilized → 2 mL bacteriostatic water (0.5 mg/mL). Storage: 4°C reconstituted stable for 14-21 days."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before Kisspeptin-10 treatment start",
      "timing": "PCT phase initiation or chronic hypogonadism context",
      "markers": "Total Testosterone, Free Testosterone, LH, FSH, Estradiol, SHBG, Prolactin, inhibin-B (if available), lipid panel, ALT/AST, CBC.",
      "purpose": "Baseline HPG-axis status. Indication: pituitary-level suppression (LH/FSH < age-specific baseline) + Test <300 ng/dL. Niche option in SERM-PCT-failure cases."
    },
    "midCycle": {
      "label": "Kisspeptin 24-48h post-injection",
      "timing": "SC bolus +1-2 hours (LH/FSH spike) + 24h delayed (Test elevation)",
      "markers": "LH (acute spike confirm), FSH, Total Test, Free Test, Estradiol (secondary elevation).",
      "purpose": "Acute response confirm: LH ~3-5× baseline spike expected per Jayasena 2017. If NO LH spike → peptide quality issue (degraded source) or pituitary saturation."
    },
    "postCycle": {
      "label": "End of Kisspeptin protocol / recovery monitor",
      "timing": "Last dose +7-14 days",
      "markers": "Total Test, Free Test, LH, FSH, Estradiol, SHBG, lipid panel.",
      "purpose": "HPG-axis sustained restart confirm: LH/FSH ≥ age-specific baseline low, Test ≥ pre-treatment +25%. If NO sustained recovery → SERM-PCT (Nolvadex 4-6 weeks) adjuvant is indicated."
    },
    "cruise": {
      "label": "NOT recommended during chronic AAS cruise",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Kisspeptin chronic cruise is NOT recommended (research-emerging, evidence sparse). Only in acute PCT-phase bolus or pulse-pump research-protocol setting."
    }
  },
  "anecdote": "Kisspeptin is one of the more interesting options in the post-cycle-therapy / natural-testosterone-boosting space. Most users notice increased libido and improved mood relatively quickly if their HPG axis responds well. However, in users suppressed by AAS, the response is often anecdotally weaker compared to stronger alternatives like HCG. Kisspeptin is being studied extensively for fertility because of its capacity to stimulate LH/FSH in a more physiological way than synthetic alternatives. Effects are subtle but useful when the use case is right.\n\nKisspeptin is best administered via subcutaneous injection due to its peptide nature. Dosing varies by analog (e.g. Kisspeptin-10) but is typically administered daily or a few times per week per protocol. Protocols remain evolving and often come down to user preference."
}
