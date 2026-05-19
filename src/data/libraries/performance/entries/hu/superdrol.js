// Phase C — multi-variant entry (oral + injectable). See
// docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources for Lab Terminal hard-fail fields (aromatization, hepatotoxicity):
// Singh 2009 (PMID 19672708), Shah 2008 (PMID 18243788), Jasiurkowski 2006
// (PMID 16865576), Nasr 2009 (PMID 19288206), Pope-Kanayama 2014 designer
// AAS review. Injectable framing: 17α-methyl class extrapolation +
// methyldrostanolone in-oil UGL prep convention.

export default {
  "id": "superdrol",
  "name": "Superdrol",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Methasterone (2α,17α-dimetil-DHT-származék). Két piaci formátum: orális 17α-metilezett tabletta extrém hepatotoxicitással, illetve underground in-oil injektábilis változat csökkentett (de NEM eliminált) máj-stresszel.",
  "description": "A Superdrol (kémiailag Methasterone, 2α,17α-dimetil-17β-hidroxi-5α-androsztán-3-on) eredetileg 1956-ban szintetizált anabolikus szteroid. Az orális formát 2005-ben Designer Supplements LLC dietary supplementként hozta forgalomba; a FDA 2012-ben (DASCA) Schedule III-as kontrollált szerré minősítette és kivonta a supplement piacról. Az underground market később megjelent egy injektábilis változatban is — methyldrostanolone olajban oldva (NEM észtertel) —, ami a hepatikus first-pass-t megkerüli, így a máj-stressz csökken, DE a 17α-metil-csoport miatt a hepatotoxicitás teljesen NEM tűnik el. Erős AR-agonista (anabolikus 400, androgén 20 referencia tesztoszteronhoz képest), 2α,17α-dimetil szerkezet miatt NEM aromatizál egyik formánál sem.",
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
  "mechanism": "Az AR-receptoron közvetlen agonista. A 2α-metil + 17α-metil KETTŐS metabolikus blokk: a 2α-metil-csoport gátolja az aromatázt (NEM konvertál ösztrogénné), a 17α-metil-csoport pedig a hepatikus 17β-HSD-oxidációval szembeni ellenállást ad. Orális úton a 17α-metil a first-pass hepatic clearance-t gátolja (orális biológiai hozzáférhetőség elérhető), DE prolongált cholesztatikus stresszt okoz. Injektábilis formában a first-pass elkerülésével a máj-stressz drasztikusan csökken, ám a 17α-metil-csoport jelen léte továbbra is mérhető hepatotoxicitást ad a depot-felszívódás során.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Erős androgén-receptor agonista, ~5x erősebb kötés mint a tesztoszteron in vitro (Stilger 2009 in vitro adat).",
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
      "title": "Severe cholestatic hepatitis caused by Methasterone (Superdrol)",
      "authors": "Singh V, Rudraraju M, Carey EJ et al.",
      "journal": "Dig Dis Sci. 2009;54(12):2786-2789.",
      "pmid": "19672708"
    },
    {
      "title": "Methasterone-associated cholestatic liver injury: clinical and biochemical characteristics",
      "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.",
      "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.",
      "pmid": "18243788"
    },
    {
      "title": "Designer steroids: over-the-counter supplements and their androgenic component",
      "authors": "Kazlauskas R.",
      "journal": "Mol Cell Endocrinol. 2010;316(1):2-7.",
      "pmid": "19772889"
    },
    {
      "title": "Acute liver injury induced by Methasterone-containing dietary supplement",
      "authors": "Jasiurkowski B, Raj J, Wisinger D et al.",
      "journal": "Dig Dis Sci. 2006;51(6):1093-1096.",
      "pmid": "16865576"
    },
    {
      "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron)",
      "authors": "Nasr J, Ahmad J.",
      "journal": "Dig Dis Sci. 2009;54(5):1144-1146.",
      "pmid": "19288206"
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
      "routeId": "oral",
      "routeLabel": "Orális (tabletta)",
      "image": "/performance/superdrol-oral.png",
      "legalStatus": "USA: Schedule III kontrollált szer (DASCA 2012). EU: kontrollált anabolikus szteroid, vény nélkül illegális, HU/PL piacon nem értékesíthető. WADA: tiltott versenysportban.",
      "bioavailability": "~50% (orális, 17α-metil-csoport first-pass-resistant; FDA 2010 DESI review extrapolált a c17-AA osztály referencia-adataiból)",
      "onsetTime": "7-14 nap (izomtömeg)",
      "halfLife": "6-8 óra (parent compound, no active metabolite)",
      "halfLifeActive": "6-8 h",
      "detectionWindow": "4-6 hét vizelet (metilezett metabolitok: 17α-metil-5α-androsztán-3α-ol-17β-on, WADA-akkreditált laborban).",
      "aromatization": "Nem — 2α,17α-dimetil szerkezet, NEM CYP19 szubsztrát; \"wet gains\" gyakorlatilag nincs (Pope-Kanayama 2014 designer AAS review)",
      "hepatotoxicity": "Nagyon magas — designer 17α-alkilált, súlyos DILI esetek (akut hepatitis, hepatocelluláris károsodás <30 nap alatt), Singh 2009 PMID 19672708, Shah 2008 PMID 18243788, Jasiurkowski 2006 PMID 16865576",
      "quality": {
        "pure": [
          "Tiszta fehér por vagy kapszula",
          "Független HPLC-tesztelt forrás (UGL piacon gyakori a hamisítás)"
        ],
        "caution": [
          "Hepatotoxicitás (ALT/AST emelkedés, ritkán cholesztatikus jaundice)",
          "Lipid-zavar: HDL drasztikus csökkenés (kardiovaszkuláris kockázat)",
          "Pszichológiai: agresszió, irritáció, anxietás",
          "Akut vesekárosodás (AKI): Nasr 2009 case report (PMID 19288206) Methasterone-indukált cholesztatikus jaundice + AKI-t dokumentált"
        ],
        "avoid": [
          "Bármilyen meglévő máj-zavar (zsírmáj, hepatitis, ALT/AST emelt baseline) abszolút kontraindikáció",
          "Alkohol, NSAID-ok, paracetamol egyidejű használata szigorúan tilos",
          "Más 17α-alkilált AAS-szal (Dianabol, Anadrol, Winstrol) kombinálás extrém hepatotoxikus",
          "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL) abszolút kontraindikáció"
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
        "unit": "mg/nap",
        "note": "Maximum 4 hét ciklus, NIKADA tovább. TUDCA 500-750 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt. ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4 hét) kötelező."
      }
    },
    {
      "routeId": "injectable",
      "routeLabel": "Intramuszkuláris (injekció)",
      "image": "/performance/superdrol-injectable.png",
      "legalStatus": "Nem licencelt formátum — kizárólag UGL (underground lab) underground market. Mindenhol illegális gyártás + birtoklás + felhasználás. WADA: tiltott.",
      "bioavailability": "~95-100% (IM injekció bypass-olja a first-pass-t; methyldrostanolone olajban oldva slow depot-felszívódással)",
      "onsetTime": "10-21 nap (lassabb felfutás mint orálnál, depot-kinetika miatt)",
      "halfLife": "1-3 nap (in-oil suspension; non-észtertelt methyldrostanolone)",
      "halfLifeActive": "1-3 nap",
      "detectionWindow": "6-12 hét vizelet (hosszabb mint az orálnál a depot-felszívódás miatt, WADA-akkreditált laborban).",
      "aromatization": "Nem — a molekula 2α,17α-dimetil szerkezete miatt NEM CYP19 szubsztrát egyik formánál sem (Pope-Kanayama 2014).",
      "hepatotoxicity": "Mérsékelt — a 17α-metil-csoport jelenléte miatt nem nulla, de a first-pass elkerülése drasztikusan csökkenti a peak hepatic koncentrációt. Pope-Kanayama 2014 c17-AA injektábilis class extrapolált adatok alapján ~3-5x alacsonyabb DILI-incidencia mint az orál formánál; peer-reviewed methyldrostanolone-injektábilis-specifikus klinikai esetszám korlátozott.",
      "quality": {
        "pure": [
          "Tiszta sárgás-lemon olaj (~#fef08a tónus), 10ml fiola, sterilen szűrt",
          "UGL HPLC-tesztelt forrás kötelező (hamisítás és túlosolás gyakori)"
        ],
        "caution": [
          "Injection site pain (IM, methyldrostanolone in-oil notoriously fáj — gyakori a vastus lateralis vagy ventrogluteal preferálása)",
          "Lipid-zavar: HDL drasztikus csökkenés (kardiovaszkuláris kockázat — ugyanaz mint orálnál)",
          "Pszichológiai: agresszió, irritáció, anxietás",
          "Lassú felfutás + hosszú detection — verseny közelében különösen kockázatos"
        ],
        "avoid": [
          "Bármilyen meglévő máj-zavar abszolút kontraindikáció (csökkentett, de nem nulla hepatotoxicitás)",
          "Alkohol, NSAID-ok egyidejű használata szigorúan tilos",
          "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL) abszolút kontraindikáció",
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
          "low": 30,
          "medium": 50,
          "high": 100
        },
        "unit": "mg/hét (IM, 2-3 osztott injekcióban)",
        "note": "Maximum 6 hét ciklus. 50-100 mg/hét, 2-3 osztott injekcióban (hosszabb peak smoothing). TUDCA 500 mg/nap + NAC 1200 mg/nap a teljes ciklus alatt (a 17α-metil miatt máj-támogatás javasolt még injektábilis formánál is). ALT/AST 3x felső normál esetén AZONNAL leállítás. PCT (Clomid + Nolvadex 4-6 hét) kötelező."
      }
    }
  ],
  "defaultVariant": "oral"
}
