// Phase C — multi-variant entry (oral + injectable). v0.27 RICH expansion.
// See docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources for Lab Terminal hard-fail fields (aromatization, hepatotoxicity):
// Singh 2009 (PMID 18813027), Shah 2008 (PMID 18187367), Jasiurkowski 2006
// (PMID 16952289), Nasr 2009 (PMID 18720005), Kazlauskas 2010 (PMID 20020364).
// Injectable framing: 17α-methyl class extrapolation + methyldrostanolone
// in-oil UGL prep convention.

export default {
  "id": "superdrol",
  "name": "Superdrol",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Methasterone (pochodna 2α,17α-dimetylo-DHT). Dwa formaty rynkowe: doustna tabletka 17α-metylowana z ekstremalną hepatotoksycznością oraz podziemna iniekcyjna w-oleju z obniżonym (ale NIE wyeliminowanym) stresem wątrobowym.",
  "description": "Superdrol (chemicznie Methasterone, 2α,17α-dimetylo-17β-hydroksy-5α-androstan-3-on) pierwotnie zsyntetyzowany w 1956. Designer Supplements LLC wprowadziła formę doustną jako suplement diety w 2005; FDA w 2012 (DASCA) sklasyfikowała jako substancję kontrolowaną Schedule III i wycofała z rynku suplementów. Wariant iniekcyjny pojawił się później na rynku podziemnym — methyldrostanolone rozpuszczony w oleju (NIE estryfikowany) — który omija first-pass wątroby i obniża stres wątrobowy, ale grupa 17α-metylowa oznacza, że hepatotoksyczność NIE jest całkowicie wyeliminowana. Silny agonista AR (anaboliczny 400, androgenny 20 vs. testosteron); struktura 2α,17α-dimetylowa oznacza brak aromatyzacji w obu formach.",
  "keyInfo": [
    { "label": "Mechanizm", "value": "Agonista AR (anaboliczny 400 / androgenny 20)" },
    { "label": "Stosunek anaboliczny", "value": "400:20" },
    { "label": "Status prawny", "value": "USA: Schedule III (2012 DASCA). UE: kontrolowany, nielegalny bez recepty." }
  ],
  "mechanism": "Bezpośredni agonista receptora AR. Podwójny blok metaboliczny 2α-metyl + 17α-metyl: grupa 2α-metylowa blokuje aromatazę (NIE konwertuje do estrogenu); grupa 17α-metylowa daje oporność na hepatyczną oksydację 17β-HSD. Doustnie 17α-metyl blokuje first-pass clearance wątroby (biodostępność doustna ~75%), ale powoduje przedłużony stres cholestatyczny. Forma iniekcyjna omija first-pass, drastycznie zmniejszając stres wątrobowy, ale obecność grupy 17α-metylowej nadal daje mierzalną hepatotoksyczność podczas uwalniania z depo.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Silny agonista AR, ~5× silniejsze wiązanie niż testosteron in vitro.",
  "interactionsWith": ["alcohol", "NSAIDs", "paracetamol", "liver-stress hepatotoxins"],
  "benefits": [
    "Szybki wzrost masy mięśniowej (4–7 kg fat-free mass w 4 tygodnie wg doniesień anegdotycznych)",
    "Silny wzrost siły, PR-y wyciskania i martwego ciągu",
    "Brak aromatyzacji w obu formach, brak efektów estrogenowych (retencja wody, gyno)",
    "Suchy, naczyniowy wygląd (kompatybilny z cyklem redukcyjnym)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: stosowanie Superdrol na Węgrzech i w UE jest nielegalne bez recepty",
    "Jeśli mimo to stosowane: max 4–6 tygodni cyklu w zależności od formatu, hepatotoksyczność kumulatywna",
    "Wsparcie wątroby (TUDCA 500–1000 mg/dzień, NAC 1200 mg/dzień) obowiązkowe przez cały cykl",
    "PCT (Clomid + Nolvadex 4–6 tygodni) niezbędne dla regeneracji HPTA"
  ],
  "expectations": [
    { "label": "Tydzień 1", "body": "Efekt akutny minimalny. Niektórzy zgłaszają lekki wzrost agresji, 'pump' podczas treningu." },
    { "label": "Tygodnie 2–3", "body": "Wyraźny wzrost siły (10–20% 1RM), szybki suchy przyrost mięśni. Panel lipidowy HDL gwałtownie spada (>30% dokumentowane)." },
    { "label": "Koniec tygodnia 4", "body": "Maksymalny przyrost mięśni. Przy formie doustnej hepatotoksyczność często ujawnia się w tym momencie (ALT/AST 3–5× wzrost) — OBOWIĄZKOWA przerwa cyklu. Przy formie iniekcyjnej wzrost markerów wątrobowych łagodniejszy i wolniejszy." }
  ],
  "studies": [
    { "title": "Severe hepatotoxicity caused by a methasteron-containing performance-enhancing supplement", "authors": "Singh V, Rudraraju M, Carey EJ, Byrne TJ, Vargas HE, Williams JE, Balan V, Douglas DD, Rakela J.", "journal": "J Clin Gastroenterol. 2009;43(3):287.", "pmid": "18813027" },
    { "title": "Methasteron-associated cholestatic liver injury: clinicopathologic findings in 5 cases", "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.", "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.", "pmid": "18187367" },
    { "title": "Designer steroids", "authors": "Kazlauskas R.", "journal": "Handb Exp Pharmacol. 2010;195:155-185.", "pmid": "20020364" },
    { "title": "Cholestatic jaundice and IgA nephropathy induced by OTC muscle building agent superdrol", "authors": "Jasiurkowski B, Raj J, Wisinger D, Carlson R, Zou L, Nadir A.", "journal": "Am J Gastroenterol. 2006;101(11):2659-2662.", "pmid": "16952289" },
    { "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron): a case report and literature review", "authors": "Nasr J, Ahmad J.", "journal": "Dig Dis Sci. 2009;54(5):1144-1146.", "pmid": "18720005" }
  ],
  "faq": [
    { "q": "Dlaczego FDA zakazało Superdrol?", "a": "Wiele przypadków cholestatycznej żółtaczki zgłoszonych do FDA między 2008–2011 (Singh 2009, Shah 2008, Jasiurkowski 2006) wykazało ostrą hepatotoksyczność Methasterone u zdrowych młodych mężczyzn. Ustawa DASCA z 2012 sklasyfikowała jako Schedule III." },
    { "q": "Jak różni się od Anavar?", "a": "Oba są 17α-alkilowanymi AAS doustnymi, ale Superdrol jest podwójnie metylowany (2α + 17α), co daje ekstremalną afiniczność AR, podczas gdy hepatotoksyczność jest ~10× wyższa na poziomie przypadków klinicznych vs. Anavar. Anavar 320:24 stosunek anaboliczny:androgenny, Superdrol 400:20." },
    { "q": "Czy iniekcyjny Superdrol jest bezpieczniejszy?", "a": "Hepatycznie TAK, znacząco — pominięcie first-pass znacznie obniża szczytowe stężenie wątrobowe. ALE z powodu grupy 17α-metylowej pełne bezpieczeństwo NIE istnieje — mierzalny wzrost markerów wątrobowych jest oczekiwany w całym cyklu z powodu przedłużonego uwalniania depo. Ryzyko sercowo-naczyniowe (spadek HDL) i supresji HPTA jest identyczne z formą doustną." },
    { "q": "Co oznacza ALT/AST 3× normy?", "a": "Znaczące uszkodzenie hepatocelularne. NATYCHMIASTOWE przerwanie cyklu, TUDCA do 1000 mg/dzień, NAC 1800 mg/dzień, nawodnienie, retest po 2 tygodniach. Jeśli nie znormalizuje się lub bilirubina wzrośnie, konsultacja hepatologa." }
  ],
  "related": ["methylstenbolone", "anavar-info", "dianabol-info", "testosterone-info"],
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2–3 tygodnie przed rozpoczęciem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina, INR. Plus: panel lipidowy (LDL/HDL/TG), panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, funkcja nerek.",
      "purpose": "Hepatyczny baseline krytyczny dla obu formatów. Jakakolwiek istniejąca dysfunkcja wątroby (stłuszczenie, podwyższona linia bazowa ALT/AST) bezwzględne przeciwwskazanie."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Doustny: koniec tygodnia 2. Iniekcyjny: koniec tygodnia 3.",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: panel lipidowy (HDL może drastycznie spaść), E2, ciśnienie krwi (w domu, codziennie).",
      "purpose": "Wykrywanie sytuacji awaryjnych. ALT/AST >3× górnej normy lub wzrost bilirubiny = NATYCHMIASTOWE wskazanie do przerwania cyklu w obu formach. HDL <25 mg/dL czerwona flaga sercowo-naczyniowa."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "PCT tydzień 4 + tygodnie 8–12 pełna kontrola HPTA + regeneracja wątroby",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (regeneracja ALT/AST/GGT/bilirubiny), panel lipidowy (regeneracja HDL), CBC.",
      "purpose": "Weryfikacja regeneracji HPTA i HEPATYCZNEJ. Jeśli ALT/AST nie znormalizowane po 12 tygodniach, obowiązkowa konsultacja hepatologa."
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
