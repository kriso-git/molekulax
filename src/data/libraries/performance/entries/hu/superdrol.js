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
      "routeLabel": "Orális (tabletta)",
      "routeNote": "Klasszikus Superdrol-formátum: 17α-metilezett tabletta, ~6-8 óra felezési idő. Drámai izomtömeg-növekedés és erőnövekedés, DE ez a leghepatotoxikusabb mainstream orális AAS. Rövid ciklushoz (max 4 hét) és kötelező máj-monitoringhoz tartsd magad.",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: Schedule III kontrollált szer (DASCA 2012). EU: kontrollált anabolikus szteroid, vény nélkül illegális, HU/PL piacon nem értékesíthető. WADA: tiltott versenysportban.",
      "bioavailability": "~75% (orális, 17α-metil-csoport first-pass-resistant; c17-AA osztály referencia-adat)",
      "onsetTime": "7-14 nap (izomtömeg)",
      "halfLife": "6-8 óra (parent compound, no active metabolite)",
      "halfLifeActive": "6-8 h",
      "detectionWindow": "4-6 hét vizelet (metilezett metabolitok: 17α-metil-5α-androsztán-3α-ol-17β-on, WADA-akkreditált laborban).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "dosing": "10-30 mg/nap orálisan, napi 1-2 osztott dózisban. Maximum 4-6 hét ciklus — a hepatotoxicitás kumulatív. Étvágyvesztés és \"Superdrol-flu\" tünetek gyakoriak 20 mg felett. TUDCA 500-750 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
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
        "note": "MAXIMUM 4 hét ciklus — NIKADA tovább. TUDCA 500-750 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt. ALT/AST 3x felső normál esetén AZONNAL leállítás + máj-labor 2 héten belül. PCT (Clomid + Nolvadex 4 hét) kötelező. Vérnyomás naponta."
      }
    },
    {
      "id": "injectable",
      "routeId": "injectable",
      "routeLabel": "Intramuszkuláris (injekció)",
      "routeNote": "Ritka UGL \"Methyl-Drol\" in-oil formátum: a hepatikus first-pass megkerülésével a máj-stressz csökken, de NEM tűnik el — a 17α-metil-csoport az IM-route-nál is hepatotoxikus. Lassabb felfutás (depot-kinetika), hosszabb detekciós ablak. Akkor érdemes, ha az orális hepatotoxicitás intolerabilis, DE a kockázat nem nulla.",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Nem licencelt formátum — kizárólag UGL (underground lab) underground market. Mindenhol illegális gyártás + birtoklás + felhasználás. WADA: tiltott.",
      "bioavailability": "~100% (IM injekció bypass-olja a first-pass-t; methyldrostanolone olajban oldva slow depot-felszívódással)",
      "onsetTime": "10-21 nap (lassabb felfutás mint orálnál, depot-kinetika miatt)",
      "halfLife": "8-12 óra (in-oil depot release; non-észtertelt methyldrostanolone)",
      "halfLifeActive": "8-12 h",
      "detectionWindow": "6-12 hét vizelet (hosszabb mint az orálnál a depot-felszívódás miatt, WADA-akkreditált laborban).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "dosing": "50 mg EOD (minden második nap) IM, tipikusan vastus lateralis vagy ventrogluteal. UGL standard: 50 mg/ml × 10 ml fiola. Maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező a teljes ciklus alatt.",
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
        "note": "50 mg EOD (minden második nap) IM — maximum 6 hét ciklus. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező (a 17α-metil miatt máj-támogatás IM-nál is szükséges). ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4-6 hét) kötelező. Vérnyomás naponta."
      }
    }
  ],
  "defaultVariant": "oral"
}
