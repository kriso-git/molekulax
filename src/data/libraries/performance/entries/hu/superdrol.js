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
  "shortDesc": "Methasterone (2α,17α-dimetil-DHT-származék). Két piaci formátum: orális 17α-metilezett tabletta extrém hepatotoxicitással, illetve underground in-oil injektábilis változat csökkentett (de NEM eliminált) máj-stresszel.",
  "description": "A Superdrol (kémiailag Methasterone, 2α,17α-dimetil-17β-hidroxi-5α-androsztán-3-on) eredetileg 1956-ban szintetizált anabolikus szteroid. Az orális formát 2005-ben Designer Supplements LLC dietary supplementként hozta forgalomba; a FDA 2012-ben (DASCA) Schedule III-as kontrollált szerré minősítette és kivonta a supplement piacról. Az underground market később megjelent egy injektábilis változatban is — methyldrostanolone olajban oldva (NEM észterrel) —, ami a hepatikus first-pass-t megkerüli, de a 17α-metil-csoport miatt a hepatotoxicitás teljesen NEM tűnik el. Erős AR-agonista (anabolikus 400, androgén 20 referencia tesztoszteronhoz képest), 2α,17α-dimetil szerkezet miatt NEM aromatizál egyik formánál sem.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista (anabolikus 400 / androgén 20)"
    },
    {
      "label": "Anabolikus arány",
      "value": "400:20"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: Schedule III (2012 DASCA). EU: ellenőrzött, illegális vény nélkül."
    }
  ],
  "mechanism": "Az AR-receptoron közvetlen agonista. A 2α-metil + 17α-metil KETTŐS metabolikus blokk: a 2α-metil-csoport gátolja az aromatázt (NEM konvertál ösztrogénné), a 17α-metil-csoport pedig a hepatikus 17β-HSD-oxidációval szembeni ellenállást ad. Orális úton a 17α-metil a first-pass hepatic clearance-t gátolja (orális biológiai hozzáférhetőség ~75%), DE prolongált cholesztatikus stresszt okoz. Injektábilis formában a first-pass elkerülésével a máj-stressz drasztikusan csökken, ám a 17α-metil-csoport jelen léte továbbra is mérhető hepatotoxicitást ad a depot-felszívódás során.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Erős androgén-receptor agonista, ~5x erősebb kötés mint a tesztoszteron in vitro.",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "paracetamol",
    "liver-stress hepatotoxins"
  ],
  "benefits": [
    "Gyors izomtömeg-növekedés (4-7 kg fat-free mass 4 hét alatt egyéni jelentések szerint)",
    "Erőteljes erő-növekedés, bench press és deadlift PR-ok",
    "Nincs aromatizáció egyik formánál sem, így nincs ösztrogén-mellékhatás (vízretenció, gyno)",
    "Száraz, vaszkuláris megjelenés (cutting cycle alkalmas)"
  ],
  "quickStart": [
    "Edukatív kontextus: a Superdrol használata Magyarországon és EU-ban illegális vény nélkül",
    "Ha mégis használnák: max 4-6 hét ciklus a formátumtól függően, hepatotoxicitás kumulatív",
    "Máj-támogató (TUDCA 500-1000 mg/nap, NAC 1200 mg/nap) kötelező a teljes ciklus alatt",
    "PCT (Clomid + Nolvadex 4-6 hét) szükséges a HPTA-helyreállításhoz"
  ],
  "expectations": [
    {
      "label": "Első hét",
      "body": "Akut hatás minimális. Néhányan enyhe agresszió-növekedést, \"pumpát\" jeleznek edzés közben."
    },
    {
      "label": "2-3. hét",
      "body": "Erő-növekedés markáns (10-20% 1RM), izomtömeg gyors száraz növekedéssel. Lipid panel HDL gyors esése (>30% csökkenés dokumentált)."
    },
    {
      "label": "4. hét vége",
      "body": "Maximum izomtömeg-növekedés. Orális formánál a hepatotoxicitás gyakran ekkor manifesztálódik (ALT/AST 3-5x emelkedés), KÖTELEZŐ ciklus-megszakítás. Injektábilis formánál a máj-marker emelkedés enyhébb és lassabb."
    }
  ],
  "studies": [
    {
      "title": "Severe hepatotoxicity caused by a methasteron-containing performance-enhancing supplement",
      "authors": "Singh V, Rudraraju M, Carey EJ, Byrne TJ, Vargas HE, Williams JE, Balan V, Douglas DD, Rakela J.",
      "journal": "J Clin Gastroenterol. 2009;43(3):287.",
      "pmid": "18813027"
    },
    {
      "title": "Methasteron-associated cholestatic liver injury: clinicopathologic findings in 5 cases",
      "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.",
      "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.",
      "pmid": "18187367"
    },
    {
      "title": "Designer steroids",
      "authors": "Kazlauskas R.",
      "journal": "Handb Exp Pharmacol. 2010;195:155-185.",
      "pmid": "20020364"
    },
    {
      "title": "Cholestatic jaundice and IgA nephropathy induced by OTC muscle building agent superdrol",
      "authors": "Jasiurkowski B, Raj J, Wisinger D, Carlson R, Zou L, Nadir A.",
      "journal": "Am J Gastroenterol. 2006;101(11):2659-2662.",
      "pmid": "16952289"
    },
    {
      "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron): a case report and literature review",
      "authors": "Nasr J, Ahmad J.",
      "journal": "Dig Dis Sci. 2009;54(5):1144-1146.",
      "pmid": "18720005"
    }
  ],
  "faq": [
    {
      "q": "Miért tilos a Superdrol az FDA-nál?",
      "a": "A FDA-hoz beérkezett több cholesztatikus jaundice-eset 2008-2011 között (Singh 2009, Shah 2008, Jasiurkowski 2006) bizonyította a Methasterone akut hepatotoxicitását egészséges fiatal férfiakon. A 2012-es DASCA-tv. Schedule III-as kontrollált szerré minősítette."
    },
    {
      "q": "Mi különbözteti meg az Anavar-tól?",
      "a": "Mindkettő 17α-alkilált orális AAS, de a Superdrol kétszeresen metilezett (2α + 17α), ami extrém AR-affinitást ad, viszont a hepatotoxicitás ~10x magasabb klinikai esetszinten az Anavar-hoz képest. Az Anavar 320:24 anabolikus:androgén arány, a Superdrol 400:20."
    },
    {
      "q": "Az injektábilis Superdrol biztonságosabb?",
      "a": "Hepatikusan IGEN, lényegesen — a first-pass elkerülése miatt a peak hepatic koncentráció jelentősen alacsonyabb. DE a 17α-metil-csoport miatt teljes biztonság NEM létezik — hosszan tartó depot-felszívódás miatt a teljes ciklus során mérhető máj-marker emelkedés várható. A kardiovaszkuláris (HDL-csökkenés) és HPTA-szuppressziós kockázat mindkét formánál azonos."
    },
    {
      "q": "Mit jelez, ha az ALT/AST 3x felső normál?",
      "a": "Jelentős hepatocelluláris károsodás. Ciklus AZONNALI megszakítása, TUDCA dózisemelés 1000 mg/nap, NAC 1800 mg/nap, hidratáció, és 2 héttel későbbi újratesztelés. Ha nem normalizálódik vagy bilirubin emelkedik, hepatológus konzultáció."
    }
  ],
  "related": [
    "methylstenbolone",
    "anavar-info",
    "dianabol-info",
    "testosterone-info"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-3 héttel ciklus indítás előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt + total), albumin, INR. Mellé: lipid panel (LDL/HDL/TG), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, vesefunkció.",
      "purpose": "Hepatikus baseline kritikus mindkét formátumnál. Bármilyen meglévő máj-zavar (zsírmáj, ALT/AST baseline emelt) abszolút kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Orális: 2. hét végén. Injektábilis: 3. hét végén.",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin. Mellé: lipid panel (HDL drasztikusan csökkenhet), E2, vérnyomás (otthon, naponta).",
      "purpose": "Vész-detektálás. ALT/AST >3x felső normál vagy bilirubin emelkedés AZONNALI ciklus-megszakítás indikáció mindkét formánál. HDL <25 mg/dL kardiovaszkuláris riasztó."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "PCT 4. hetén + 8-12. hetén HPTA + máj-recovery teljes ellenőrzés",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.",
      "purpose": "HPTA-helyreállítás és HEPATIKUS recovery verifikálása. Ha ALT/AST nem normalizálódik 12 hét után, hepatológus konzultáció kötelező."
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
