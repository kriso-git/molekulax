// Phase C — multi-variant entry (oral + injectable). v0.27 RICH expansion.
// See docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources for Lab Terminal hard-fail fields (aromatization, hepatotoxicity):
// Singh 2009 (PMID 18813027), Shah 2008 (PMID 18187367), Jasiurkowski 2006
// (PMID 16952289), Nasr 2009 (PMID 18720005), Kazlauskas 2010 (PMID 20020364).
// Injectable framing: 17α-methyl class extrapolation + methyldrostanolone
// in-oil UGL prep convention.

export default {
  "id": "superdrol",
  "sideEffects": [
    { "hu": "Súlyos hepatotoxicitás (orális forma): a 17α-metil-csoport miatt cholesztatikus májkárosodás, ALT/AST 3-5x emelkedés, dokumentált sárgaság (jaundice) és máj-szövet-elhalás esetek egészséges fiatal férfiakon (Singh 2009, Shah 2008).", "en": "Severe hepatotoxicity (oral form): the 17α-methyl group causes cholestatic liver injury, ALT/AST elevation of 3-5x, documented jaundice and hepatocellular injury cases in healthy young men (Singh 2009, Shah 2008).", "pl": "Ciężka hepatotoksyczność (forma doustna): grupa 17α-metylowa powoduje cholestatyczne uszkodzenie wątroby, wzrost ALT/AST o 3-5x, udokumentowane przypadki żółtaczki i uszkodzenia hepatocytów u zdrowych młodych mężczyzn (Singh 2009, Shah 2008)." },
    { "hu": "Kolesztázis: epesav-felhalmozódás a májsejtekben, bőr-viszketés és sötét vizelet figyelmeztető jelek; injektábilis formánál csökkentett, de NEM nulla kockázat, mert a 17α-metil-csoport IM úton is hepatotoxikus.", "en": "Cholestasis: bile acid accumulation in hepatocytes, with skin itching and dark urine as warning signs; reduced but NOT zero risk with the injectable form, since the 17α-methyl group remains hepatotoxic even via IM route.", "pl": "Cholestaza: nagromadzenie kwasów żółciowych w hepatocytach, ze świądem skóry i ciemnym moczem jako objawami ostrzegawczymi; zmniejszone, ale NIE zerowe ryzyko przy formie iniekcyjnej, ponieważ grupa 17α-metylowa pozostaje hepatotoksyczna nawet drogą IM." },
    { "hu": "Drasztikus lipid-romlás: a HDL >30%-kal zuhanhat, az LDL emelkedik, ami akut kardiovaszkuláris kockázatot jelent; ez a hatás mindkét (orális és injektábilis) formánál azonos.", "en": "Drastic lipid deterioration: HDL can crash by over 30% and LDL rises, posing an acute cardiovascular risk; this effect is identical for both the oral and injectable forms.", "pl": "Drastyczne pogorszenie profilu lipidowego: HDL może spaść o ponad 30%, a LDL wzrasta, co stwarza ostre ryzyko sercowo-naczyniowe; efekt ten jest identyczny dla formy doustnej i iniekcyjnej." },
    { "hu": "Erős hipertónia: gyakori jelentős vérnyomás-emelkedés, ezért napi vérnyomásmérés kötelező; szisztolés >150 Hgmm a ciklus megszakítását indokolja.", "en": "Strong hypertension: significant blood pressure rises are common, so daily blood pressure monitoring is mandatory; systolic >150 mmHg warrants stopping the cycle.", "pl": "Silne nadciśnienie: znaczny wzrost ciśnienia krwi jest częsty, dlatego codzienny pomiar ciśnienia jest obowiązkowy; skurczowe >150 mmHg uzasadnia przerwanie cyklu." },
    { "hu": "HPTA-szuppresszió: erős AR-agonistaként gyorsan leállítja az endogén tesztoszteron-termelést (LH/FSH visszaesés), ezért PCT (Clomid + Nolvadex) kötelező; libidócsökkenés és fáradtság a ciklus után.", "en": "HPTA suppression: as a potent AR agonist it rapidly shuts down endogenous testosterone production (LH/FSH drop), so PCT (Clomid + Nolvadex) is mandatory; low libido and fatigue follow the cycle.", "pl": "Supresja HPTA: jako silny agonista AR szybko wyłącza endogenną produkcję testosteronu (spadek LH/FSH), dlatego PCT (Clomid + Nolvadex) jest obowiązkowe; po cyklu obniżone libido i zmęczenie." },
    { "hu": "\"Superdrol-flu\": étvágytalanság, hányinger, fejfájás, levertség és letargia, különösen 20 mg/nap felett; az orális formánál kifejezettebb.", "en": "\"Superdrol flu\": loss of appetite, nausea, headache, low energy and lethargy, especially above 20 mg/day; more pronounced with the oral form.", "pl": "\"Superdrol flu\": utrata apetytu, nudności, ból głowy, brak energii i letarg, zwłaszcza powyżej 20 mg/dzień; bardziej wyraźne przy formie doustnej." },
    { "hu": "Androgén mellékhatások: aknét, fokozott faggyútermelést, halántéki hajhullást és hajlamosaknál férfias mintázatú kopaszodást válthat ki; nőknél virilizáció (mély hang, szőrösödés) kockázata.", "en": "Androgenic effects: can trigger acne, increased sebum, temporal hair thinning and male-pattern baldness in predisposed users; risk of virilization (voice deepening, hair growth) in women.", "pl": "Efekty androgenne: może wywołać trądzik, zwiększone wydzielanie sebum, przerzedzenie włosów na skroniach i łysienie typu męskiego u predysponowanych; ryzyko wirylizacji (obniżenie głosu, owłosienie) u kobiet." },
    { "hu": "Injekciós forma specifikus: a methyldrostanolone in-oil notorikusan fájdalmas (injekciós helyi irritáció, PIP), valamint aszeptikus technika hiányában abszcessz és sebfertőzés kockázata.", "en": "Injectable-specific: methyldrostanolone in-oil is notoriously painful (injection-site irritation, PIP), plus risk of abscess and infection without aseptic technique.", "pl": "Specyficzne dla iniekcji: methyldrostanolon in-oil jest notorycznie bolesny (podrażnienie miejsca iniekcji, PIP), a także ryzyko ropnia i infekcji bez techniki aseptycznej." }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy emelt baseline májenzim (zsírmáj, hepatitis, emelt ALT/AST): abszolút kontraindikáció a 17α-metil-csoport hepatotoxicitása miatt, mindkét formánál.", "en": "Any pre-existing liver disease or elevated baseline liver enzymes (fatty liver, hepatitis, elevated ALT/AST): absolute contraindication due to the hepatotoxicity of the 17α-methyl group, for both forms.", "pl": "Jakakolwiek istniejąca choroba wątroby lub podwyższone wyjściowe enzymy wątrobowe (stłuszczenie, zapalenie wątroby, podwyższone ALT/AST): bezwzględne przeciwwskazanie z powodu hepatotoksyczności grupy 17α-metylowej, dla obu form." },
    { "hu": "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL, fennálló hipertónia, ismert szívbetegség): abszolút kontraindikáció a súlyos HDL-zuhanás és vérnyomás-emelkedés miatt.", "en": "Cardiovascular risk (family history, high LDL, existing hypertension, known heart disease): absolute contraindication due to severe HDL crash and blood pressure elevation.", "pl": "Ryzyko sercowo-naczyniowe (wywiad rodzinny, wysoki LDL, istniejące nadciśnienie, znana choroba serca): bezwzględne przeciwwskazanie z powodu poważnego spadku HDL i wzrostu ciśnienia." },
    { "hu": "Egyidejű hepatotoxikus szerek: alkohol, NSAID-ok, paracetamol és statin-terápia szigorúan tilos; ezek a Superdrollal kumulatív májkárosodást okoznak.", "en": "Concurrent hepatotoxic agents: alcohol, NSAIDs, paracetamol and statin therapy are strictly forbidden; these cause cumulative liver injury with Superdrol.", "pl": "Jednoczesne środki hepatotoksyczne: alkohol, NLPZ, paracetamol i terapia statynami są surowo zabronione; powodują kumulacyjne uszkodzenie wątroby z Superdrolem." },
    { "hu": "Más 17α-alkilált orális AAS (Dianabol, Anadrol, Winstrol) egyidejű szedése: extrém, esetenként életveszélyes hepatotoxicitás, ezért tilos kombinálni.", "en": "Concurrent use of other 17α-alkylated oral AAS (Dianabol, Anadrol, Winstrol): extreme, potentially life-threatening hepatotoxicity, so combination is forbidden.", "pl": "Jednoczesne stosowanie innych 17α-alkilowanych doustnych AAS (Dianabol, Anadrol, Winstrol): ekstremalna, potencjalnie zagrażająca życiu hepatotoksyczność, dlatego łączenie jest zabronione." },
    { "hu": "Nők, különösen terhesség vagy szoptatás alatt: a virilizáció és a magzati károsodás (teratogenitás) kockázata miatt ellenjavallt.", "en": "Women, especially during pregnancy or breastfeeding: contraindicated due to risk of virilization and fetal harm (teratogenicity).", "pl": "Kobiety, zwłaszcza w ciąży lub podczas karmienia piersią: przeciwwskazane z powodu ryzyka wirylizacji i uszkodzenia płodu (teratogenność)." },
    { "hu": "Vesebetegség vagy fennálló veseelégtelenség: a Nasr 2009 esetjelentés (PMID 18720005) Methasterone-indukált cholesztatikus sárgaságot és akut veseelégtelenséget (AKI) dokumentált.", "en": "Kidney disease or existing renal impairment: the Nasr 2009 case report (PMID 18720005) documented Methasterone-induced cholestatic jaundice and acute kidney injury (AKI).", "pl": "Choroba nerek lub istniejąca niewydolność nerek: opis przypadku Nasr 2009 (PMID 18720005) udokumentował wywołaną Methasteronem cholestatyczną żółtaczkę i ostre uszkodzenie nerek (AKI)." },
    { "hu": "Serdülők és fiatal felnőttek lezáratlan epifízis-fugákkal: az androgén hatás idő előtti csontérést és végleges növekedés-leállást okozhat.", "en": "Adolescents and young adults with open epiphyseal plates: the androgenic effect can cause premature bone maturation and permanent stunting of growth.", "pl": "Nastolatki i młodzi dorośli z otwartymi płytkami nasadowymi: efekt androgenny może powodować przedwczesne dojrzewanie kości i trwałe zahamowanie wzrostu." }
  ],
  "name": "Superdrol",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Methasterone (2α,17α-dimethyl DHT derivative). Two market formats: oral 17α-methylated tablet with extreme hepatotoxicity, and underground in-oil injectable with reduced (but NOT eliminated) hepatic stress.",
  "description": "Superdrol (chemically Methasterone, 2α,17α-dimethyl-17β-hydroxy-5α-androstan-3-one) was originally synthesized in 1956. Designer Supplements LLC marketed the oral form as a dietary supplement in 2005; the FDA classified it as a Schedule III controlled substance in 2012 (DASCA) and pulled it from the supplement market. An injectable variant later appeared on the underground market — methyldrostanolone dissolved in oil (NOT esterified) — which bypasses hepatic first-pass and lowers hepatic stress, but the 17α-methyl group means hepatotoxicity is NOT fully eliminated. Strong AR agonist (anabolic 400, androgenic 20 vs. testosterone reference); the 2α,17α-dimethyl structure means it does NOT aromatize in either form.",
  "keyInfo": [
    { "label": "Mechanism", "value": "AR agonist (anabolic 400 / androgenic 20)" },
    { "label": "Anabolic ratio", "value": "400:20" },
    { "label": "Legal status", "value": "USA: Schedule III (2012 DASCA). EU: controlled, illegal without prescription." }
  ],
  "mechanism": "Direct AR-receptor agonist. The 2α-methyl + 17α-methyl DOUBLE metabolic block: the 2α-methyl group blocks aromatase (does NOT convert to estrogen); the 17α-methyl group resists hepatic 17β-HSD oxidation. Orally the 17α-methyl blocks first-pass hepatic clearance (oral bioavailability ~75%) but produces prolonged cholestatic stress. Injectable form bypasses first-pass, drastically reducing hepatic stress, but the 17α-methyl group still produces measurable hepatotoxicity during depot release.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Strong AR agonist, ~5× stronger binding than testosterone in vitro.",
  "interactionsWith": ["alcohol", "NSAIDs", "paracetamol", "liver-stress hepatotoxins"],
  "benefits": [
    "Rapid muscle mass growth (4–7 kg fat-free mass over 4 weeks per anecdotal reports)",
    "Strong strength growth, bench press and deadlift PRs",
    "No aromatization in either form, so no estrogen side effects (water retention, gyno)",
    "Dry, vascular look (cutting cycle compatible)"
  ],
  "quickStart": [
    "Educational context: Superdrol use in Hungary and the EU is illegal without prescription",
    "If still used: max 4–6 week cycle depending on format, hepatotoxicity is cumulative",
    "Liver support (TUDCA 500–1000 mg/day, NAC 1200 mg/day) mandatory throughout the cycle",
    "PCT (Clomid + Nolvadex 4–6 weeks) required for HPTA recovery"
  ],
  "expectations": [
    { "label": "Week 1", "body": "Acute effect minimal. Some report mild aggression, 'pump' during training." },
    { "label": "Weeks 2–3", "body": "Marked strength growth (10–20% 1RM), rapid dry muscle gain. Lipid panel HDL drops sharply (>30% decrease documented)." },
    { "label": "End of week 4", "body": "Maximum muscle growth. With the oral form, hepatotoxicity often manifests at this point (ALT/AST 3–5× elevation) — MANDATORY cycle interruption. With the injectable form, liver-marker rise is milder and slower." }
  ],
  "studies": [
    { "title": "Severe hepatotoxicity caused by a methasteron-containing performance-enhancing supplement", "authors": "Singh V, Rudraraju M, Carey EJ, Byrne TJ, Vargas HE, Williams JE, Balan V, Douglas DD, Rakela J.", "journal": "J Clin Gastroenterol. 2009;43(3):287.", "pmid": "18813027" },
    { "title": "Methasteron-associated cholestatic liver injury: clinicopathologic findings in 5 cases", "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.", "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.", "pmid": "18187367" },
    { "title": "Designer steroids", "authors": "Kazlauskas R.", "journal": "Handb Exp Pharmacol. 2010;195:155-185.", "pmid": "20020364" },
    { "title": "Cholestatic jaundice and IgA nephropathy induced by OTC muscle building agent superdrol", "authors": "Jasiurkowski B, Raj J, Wisinger D, Carlson R, Zou L, Nadir A.", "journal": "Am J Gastroenterol. 2006;101(11):2659-2662.", "pmid": "16952289" },
    { "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron): a case report and literature review", "authors": "Nasr J, Ahmad J.", "journal": "Dig Dis Sci. 2009;54(5):1144-1146.", "pmid": "18720005" }
  ],
  "faq": [
    { "q": "Why is Superdrol banned by the FDA?", "a": "Multiple cholestatic jaundice cases reported to the FDA between 2008–2011 (Singh 2009, Shah 2008, Jasiurkowski 2006) demonstrated Methasterone's acute hepatotoxicity in healthy young men. The 2012 DASCA act classified it as Schedule III." },
    { "q": "How does it differ from Anavar?", "a": "Both are 17α-alkylated oral AAS, but Superdrol is doubly methylated (2α + 17α), giving extreme AR affinity, while hepatotoxicity is ~10× higher at clinical case level vs. Anavar. Anavar 320:24 anabolic:androgenic ratio, Superdrol 400:20." },
    { "q": "Is injectable Superdrol safer?", "a": "Hepatically YES, substantially — bypassing first-pass significantly lowers peak hepatic concentration. BUT due to the 17α-methyl group, full safety does NOT exist — measurable liver-marker rise is expected throughout the cycle because of prolonged depot release. Cardiovascular (HDL drop) and HPTA suppression risks are identical to the oral form." },
    { "q": "What does ALT/AST 3× upper normal mean?", "a": "Significant hepatocellular damage. IMMEDIATE cycle stop, TUDCA dose-up 1000 mg/day, NAC 1800 mg/day, hydration, retest 2 weeks later. If not normalized or bilirubin rises, hepatologist consultation." }
  ],
  "related": ["methylstenbolone", "anavar-info", "dianabol-info", "testosterone-info"],
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2–3 weeks before cycle start",
      "markers": "Hepatic priority: ALT, AST, GGT, ALP, bilirubin (direct + total), albumin, INR. Also: lipid panel (LDL/HDL/TG), hormone panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, renal function.",
      "purpose": "Hepatic baseline critical for both formats. Any existing liver dysfunction (fatty liver, ALT/AST baseline elevated) is absolute contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Oral: end of week 2. Injectable: end of week 3.",
      "markers": "Hepatic priority: ALT, AST, GGT, bilirubin. Also: lipid panel (HDL can drop sharply), E2, blood pressure (home, daily).",
      "purpose": "Emergency detection. ALT/AST >3× upper normal or bilirubin rise = IMMEDIATE cycle stop indication in both forms. HDL <25 mg/dL is cardiovascular red flag."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "PCT week 4 + weeks 8–12 full HPTA + liver recovery check",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.",
      "purpose": "Verify HPTA recovery and HEPATIC recovery. If ALT/AST not normalized after 12 weeks, mandatory hepatologist consultation."
    },
    "cruise": null
  },
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": {
        "hu": "Methyldrostanolone (Superdrol orális tabletta, 17α-metilezett)",
        "en": "Methyldrostanolone (Superdrol oral tablet, 17α-methylated)",
        "pl": "Methyldrostanolon (Superdrol tabletka doustna, 17α-metylowany)"
      },
      "routeNote": {
        "hu": "Klasszikus Superdrol-formátum: 17α-metilezett tabletta, ~6-8 óra felezési idő. Drámai izomtömeg-növekedés és erőnövekedés, DE ez a leghepatotoxikusabb mainstream orális AAS. Rövid ciklushoz (max 4 hét) és kötelező máj-monitoringhoz tartsd magad.",
        "en": "Classic Superdrol format: 17α-methylated tablet, ~6-8 hour half-life. Dramatic muscle mass and strength gains, BUT this is the most hepatotoxic mainstream oral AAS. Stick to short cycles (max 4 weeks) and mandatory liver monitoring.",
        "pl": "Klasyczny format Superdrolu: tabletka 17α-metylowana, ~6-8 godzin okres półtrwania. Dramatyczny przyrost masy mięśniowej i siły, ALE to najbardziej hepatotoksyczny mainstreamowy doustny AAS. Trzymaj się krótkich cykli (maksymalnie 4 tygodnie) i obowiązkowego monitorowania wątroby."
      },
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: Schedule III kontrollált szer (DASCA 2012). EU: kontrollált anabolikus szteroid, vény nélkül illegális, HU/PL piacon nem értékesíthető. WADA: tiltott versenysportban.",
      "bioavailability": "~75% (orális, 17α-metil-csoport first-pass-resistant; c17-AA osztály referencia-adat)",
      "onsetTime": {
        "hu": "7-14 nap (izomtömeg)",
        "en": "7-14 days (muscle mass)",
        "pl": "7-14 dni (masa mięśniowa)"
      },
      "halfLife": "6-8 óra (parent compound, no active metabolite)",
      "halfLifeActive": "6-8 h",
      "detectionWindow": "4-6 hét vizelet (metilezett metabolitok: 17α-metil-5α-androsztán-3α-ol-17β-on, WADA-akkreditált laborban).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "dosing": {
        "hu": "10-30 mg/nap orálisan, napi 1-2 osztott dózisban. Maximum 4-6 hét ciklus — a hepatotoxicitás kumulatív. Étvágyvesztés és \"Superdrol-flu\" tünetek gyakoriak 20 mg felett. TUDCA 500-750 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
        "en": "10-30 mg/day orally, 1-2 split doses per day. Maximum 4-6 week cycle — hepatotoxicity is cumulative. Appetite loss and \"Superdrol flu\" symptoms common above 20 mg. TUDCA 500-750 mg/day + NAC 1200 mg/day mandatory throughout the cycle.",
        "pl": "10-30 mg/dzień doustnie, 1-2 dawki podzielone dziennie. Maksymalnie 4-6 tygodni cyklu — hepatotoksyczność jest kumulacyjna. Utrata apetytu i objawy \"Superdrol flu\" częste powyżej 20 mg. TUDCA 500-750 mg/dzień + NAC 1200 mg/dzień obowiązkowo przez cały cykl."
      },
      "quality": {
        "pure": [
          "Tiszta fehér por vagy kapszula",
          "Független HPLC-tesztelt forrás (UGL piacon gyakori a hamisítás)"
        ],
        "caution": [
          "EXTRÉM HIPERTONIA: vérnyomás napi mérés kötelező, szisztolés >150 Hgmm ciklus-megszakítás indikáció",
          "Hepatotoxicitás (ALT/AST emelkedés, ritkán cholesztatikus jaundice, dokumentált máj-szövet-elhalás esetek)",
          "Súlyos lipid-leromlás: HDL drastikusan csökken (>30%, kardiovaszkuláris kockázat)",
          "Étvágytalanság, hányinger, fejfájás (\"Superdrol-flu\") — különösen >20 mg/nap felett",
          "Kolesztázis (cholestasis): epesav-felhalmozódás a máj-sejtekben, bőr-viszketés figyelmeztető jel",
          "Pszichológiai: agresszió, irritáció, anxietás",
          "Akut vesekárosodás (AKI): Nasr 2009 case report (PMID 18720005) Methasterone-indukált cholesztatikus jaundice + AKI-t dokumentált"
        ],
        "avoid": [
          "Bármilyen meglévő máj-zavar (zsírmáj, hepatitis, ALT/AST emelt baseline) abszolút kontraindikáció",
          "Alkohol, NSAID-ok, paracetamol egyidejű használata szigorúan tilos",
          "Más 17α-alkilált AAS-szal (Dianabol, Anadrol, Winstrol) kombinálás extrém hepatotoxikus",
          "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL, hipertónia) abszolút kontraindikáció"
        ]
      },
      "interactions": [
        "Más 17α-alkilált AAS (Dianabol, Anadrol, Winstrol) egyidejű használata extrém hepatotoxikus",
        "Testosterone-base hozzáadása csökkenti az endogén T-szuppresszió tüneteit",
        "PCT (Clomid 50mg/nap + Nolvadex 20mg/nap, 4 hét) kötelező",
        "Statin-terápia esetén kontraindikált (kombinált hepatotoxicitás)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 10,
          "medium": 20,
          "high": 30
        },
        "unit": "mg/day",
        "note": {
          "hu": "MAXIMUM 4 hét ciklus — NIKADA tovább. TUDCA 500-750 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt. ALT/AST 3x felső normál esetén AZONNAL leállítás + máj-labor 2 héten belül. PCT (Clomid + Nolvadex 4 hét) kötelező. Vérnyomás naponta.",
          "en": "MAXIMUM 4-week cycle — NEVER longer. TUDCA 500-750 mg/day + NAC 1200 mg/day throughout the cycle. If ALT/AST 3x upper normal, STOP IMMEDIATELY + liver labs within 2 weeks. PCT (Clomid + Nolvadex 4 weeks) mandatory. Blood pressure daily.",
          "pl": "MAKSYMALNIE 4-tygodniowy cykl — NIGDY dłużej. TUDCA 500-750 mg/dzień + NAC 1200 mg/dzień przez cały cykl. Jeśli ALT/AST 3x górna granica normy, NATYCHMIASTOWE PRZERWANIE + badania wątroby w ciągu 2 tygodni. PCT (Clomid + Nolvadex 4 tygodnie) obowiązkowo. Ciśnienie krwi codziennie."
        }
      }
    },
    {
      "id": "injectable",
      "routeId": "injectable",
      "routeLabel": {
        "hu": "Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot)",
        "en": "Methyldrostanolone (Methyl-Drol in-oil IM, UGL depot)",
        "pl": "Methyldrostanolon (Methyl-Drol in-oil IM, depot UGL)"
      },
      "routeNote": {
        "hu": "Ritka UGL \"Methyl-Drol\" in-oil formátum: a hepatikus first-pass megkerülésével a máj-stressz csökken, de NEM tűnik el — a 17α-metil-csoport az IM-route-nál is hepatotoxikus. Lassabb felfutás (depot-kinetika), hosszabb detekciós ablak. Akkor érdemes, ha az orális hepatotoxicitás intolerabilis, DE a kockázat nem nulla.",
        "en": "Rare UGL \"Methyl-Drol\" in-oil format: bypassing hepatic first-pass reduces liver stress but does NOT eliminate it — the 17α-methyl group remains hepatotoxic even via IM route. Slower onset (depot kinetics), longer detection window. Worth considering if oral hepatotoxicity is intolerable, BUT the risk is not zero.",
        "pl": "Rzadki format UGL \"Methyl-Drol\" in-oil: ominięcie wątrobowego first-pass zmniejsza stres wątrobowy, ale NIE eliminuje go — grupa 17α-metylowa pozostaje hepatotoksyczna nawet drogą IM. Wolniejsze rozpoczęcie (kinetyka depot), dłuższe okno detekcji. Warto rozważyć, jeśli hepatotoksyczność doustna jest nie do zniesienia, ALE ryzyko nie jest zerowe."
      },
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Nem licencelt formátum — kizárólag UGL (underground lab) underground market. Mindenhol illegális gyártás + birtoklás + felhasználás. WADA: tiltott.",
      "bioavailability": "~100% (IM injekció bypass-olja a first-pass-t; methyldrostanolone olajban oldva slow depot-felszívódással)",
      "onsetTime": {
        "hu": "10-21 nap (lassabb felfutás mint orálnál, depot-kinetika miatt)",
        "en": "10-21 days (slower onset than oral due to depot kinetics)",
        "pl": "10-21 dni (wolniejsze rozpoczęcie niż doustnie z powodu kinetyki depot)"
      },
      "halfLife": "8-12 óra (in-oil depot release; non-észtertelt methyldrostanolone)",
      "halfLifeActive": "8-12 h",
      "detectionWindow": "6-12 hét vizelet (hosszabb mint az orálnál a depot-felszívódás miatt, WADA-akkreditált laborban).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "dosing": {
        "hu": "50 mg EOD (minden második nap) IM, tipikusan vastus lateralis vagy ventrogluteal. UGL standard: 50 mg/ml × 10 ml fiola. Maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
        "en": "50 mg EOD (every-other-day) IM, typically vastus lateralis or ventrogluteal. UGL standard: 50 mg/mL × 10 mL vial. Maximum 6-week cycle. TUDCA 500 mg/day + NAC 1200 mg/day mandatory throughout the cycle.",
        "pl": "50 mg EOD (co drugi dzień) IM, typowo vastus lateralis lub ventrogluteal. Standard UGL: 50 mg/mL × 10 mL fiolka. Maksymalnie 6-tygodniowy cykl. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowo przez cały cykl."
      },
      "quality": {
        "pure": [
          "Tiszta sárgás-lemon olaj (~#fef08a tónus), 10ml fiola, sterilen szűrt",
          "UGL HPLC-tesztelt forrás kötelező (hamisítás és túladagolás gyakoriak)"
        ],
        "caution": [
          "EXTRÉM HIPERTONIA: ugyanaz mint orálnál — vérnyomás napi mérés kötelező (17α-metil-osztály hatás)",
          "Injection site irritáció/fájdalom (IM, methyldrostanolone in-oil notorikusan fájdalmas — vastus lateralis vagy ventrogluteal preferálása)",
          "Hepatotoxicitás (17α-metil-csoport IM-route-nál is aktív): ALT/AST emelkedés, kolesztázis kockázat csökkentett de NEM nulla",
          "Súlyos lipid-leromlás: HDL drastikusan csökken (kardiovaszkuláris kockázat — ugyanaz mint orálnál)",
          "Étvágytalanság, hányinger (\"Superdrol-flu\" tünetek IM-nál is előfordulnak)",
          "Pszichológiai: agresszió, irritáció, anxietás",
          "Lassú felfutás + hosszú detekció — verseny közelében különösen kockázatos"
        ],
        "avoid": [
          "Bármilyen meglévő máj-zavar abszolút kontraindikáció (csökkentett, de nem nulla hepatotoxicitás)",
          "Alkohol, NSAID-ok egyidejű használata szigorúan tilos",
          "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL, hipertónia) abszolút kontraindikáció",
          "Aszeptikus injekciós technika hiánya (abszcessz, sebfertőzés kockázat)"
        ]
      },
      "interactions": [
        "Más AAS egyidejű használata fokozza a HPTA-szuppressziót és lipid-zavart",
        "Testosterone-base hozzáadása csökkenti az endogén T-szuppresszió tüneteit",
        "PCT (Clomid 50mg/nap + Nolvadex 20mg/nap, 4-6 hét) kötelező",
        "Aromatáz-inhibitor (Anastrozol, Letrozol) NEM szükséges (nincs aromatizáció)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 25,
          "medium": 50,
          "high": 100
        },
        "unit": "mg/inj",
        "note": {
          "hu": "50 mg EOD (minden második nap) IM — maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező (a 17α-metil miatt máj-támogatás IM-nál is szükséges). ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4-6 hét) kötelező. Vérnyomás naponta.",
          "en": "50 mg EOD (every-other-day) IM — maximum 6-week cycle. TUDCA 500 mg/day + NAC 1200 mg/day mandatory (liver support needed even IM due to 17α-methyl group). If ALT/AST 3x upper normal, STOP IMMEDIATELY. PCT (Clomid + Nolvadex 4-6 weeks) mandatory. Blood pressure daily.",
          "pl": "50 mg EOD (co drugi dzień) IM — maksymalnie 6-tygodniowy cykl. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowo (wsparcie wątroby potrzebne nawet IM z powodu grupy 17α-metylowej). Jeśli ALT/AST 3x górna granica normy, NATYCHMIASTOWE PRZERWANIE. PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowo. Ciśnienie krwi codziennie."
        }
      }
    }
  ],
  "defaultVariant": "oral"
}
