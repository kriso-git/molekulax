// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.565Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "atorvastatin",
  "name": "Atorvastatin",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "A leginkább felírt nagy-intenzitású statin, HMG-CoA reduktáz-gátló. AHA/ACC és ESC lipid-guideline-anchor 1996 óta. Primer és szekunder ASCVD-prevenció gold standard.",
  "description": "Az Atorvastatin egy szintetikus, lipofil HMG-CoA reduktáz-gátló, amelyet a Pfizer fejlesztett ki (Lipitor, FDA 1996). A koleszterin-szintézis sebességmeghatározó lépését gátolja a májban, ami a hepatocyta LDL-receptorok up-regulációjához és a plazma LDL-koleszterin csökkentéséhez vezet. A TNT (Treating to New Targets, LaRosa 2005 NEJM), CARDS (Colhoun 2004 Lancet) és SPARCL (Amarenco 2006 NEJM) trial-ek bizonyították a kardiovaszkuláris (MI, stroke) és cerebrovaszkuláris végpont-előnyt. A Cholesterol Treatment Trialists' (CTT) meta-analízis (Baigent 2010 Lancet PMID 21067804) szerint minden 1 mmol/L LDL-csökkenés ~22%-os relatív kockázat-csökkenést hoz major vascular event-re. A nagy-intenzitású dózis (40-80 mg) ≥50%-os LDL-csökkenést céloz, a guideline-szerinti primer (LDL ≥4,9 mmol/L) vagy szekunder (ASCVD-anamnézis) prevenció esetén.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "C10AA05"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "HMG-CoA reduktáz-gátló (statin)"
    },
    {
      "label": "Felezési idő",
      "value": "14 óra (aktív metabolitokkal 20-30 óra)"
    },
    {
      "label": "LDL-csökkenés (40-80 mg)",
      "value": "50-60% (nagy-intenzitású)"
    }
  ],
  "mechanism": "A máj-sejtek HMG-CoA reduktáz-enzimét kompetitíven gátolja, ami a mevalonát-pathway csökkentését eredményezi (de novo koleszterin-szintézis lassítása). A csökkent intracelluláris koleszterin az LDL-receptorok up-regulációjához vezet, ami a keringő LDL-t a májba clear-eli. Pleiotróp hatások: gyulladás-csökkentés (CRP-csökkenés a JUPITER trial-ben), endotel-funkció javítása, plakk-stabilizáció.",
  "legalStatus": "EU/HU: vényköteles (Sortis, Atoris, Tulip, Atorvox, generikus). USA: FDA Rx (Lipitor, generikus). Nincs visszaélési potenciálja, nem ütemezett. Generikus formák bioekvivalensek (FDA Orange Book AB).",
  "onsetTime": "1-2 weeks (lipid lowering), 4-6 weeks (steady-state LDL effect)",
  "halfLife": "14 h (parent), 20-30 h (active ortho- and para-hydroxylated metabolites)",
  "atcCode": "C10AA05",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Primer hipercholesterolémia (LDL ≥4,9 mmol/L vagy ASCVD-risk ≥7,5% 10 év alatt)",
    "Szekunder prevenció ASCVD-anamnézisnél (MI, stroke, PAD, koszorúsér-stenózis)",
    "Familiáris hipercholesterolémia (FH)",
    "T2DM-asszociált dyslipidémia (CARDS-evidencia)",
    "Hipertrigliceridémia (>5,6 mmol/L) másodlagos kezelése"
  ],
  "contraindications": [
    "Aktív májbetegség vagy tartós, magyarázat nélküli ALT-emelkedés (>3x ULN)",
    "Terhesség és szoptatás (lipid-szintézis embrionális fejlődéshez szükséges)",
    "Erős CYP3A4 inhibitor egyidejű használat (clarithromycin, itraconazole, ritonavir)",
    "Aktív rhabdomyolysis vagy CK-emelkedés > 10x ULN"
  ],
  "commonSideEffects": [
    "Izomfájdalom, myalgia (5-10%, dóziseffekt 80 mg-on a leggyakoribb)",
    "ALT/AST emelkedés (1-2%, általában reverzibilis, dóziscsökkentés vagy elhagyás)",
    "Új T2DM-diagnózis kockázat enyhe növekedés (~9% relatív, JUPITER post-hoc)",
    "GI: hányinger, hasmenés, székrekedés (5%)",
    "Súlyos, ritka: rhabdomyolysis (CK > 10x ULN + myoglobinuria, < 0,1%)"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP3A4 inhibitor (mild)",
    "OATP1B1 transporter substrate"
  ],
  "crossMolInteractions": [
    "Erős CYP3A4 inhibitor (clarithromycin, itraconazole, ritonavir, grapefruit-juice): rhabdomyolysis-kockázat, kontraindikált",
    "Cyclosporine: 8-15x AUC-emelkedés, dóziscsökkentés vagy elhagyás",
    "Gemfibrozil: kombinált statin+fibrát rhabdomyolysis-kockázat, kerülendő (Fenofibrate ok)",
    "Warfarin: enyhe INR-emelkedés lehetséges, INR-monitor a kezdéskor",
    "Ezetimibe, PCSK9-inhibitor: szinergisztikus LDL-csökkentés, racionális kombináció"
  ],
  "benefits": [
    "LDL-csökkentés 30-60% (dózisfüggő, 10-80 mg)",
    "MI, stroke, kardiovaszkuláris halálozás redukciója primer és szekunder prevencióban (CTT meta)",
    "Stroke-redukció ischémiás stroke-anamnézisnél (SPARCL trial)",
    "T2DM-asszociált dyslipidémia kardio-protekció (CARDS, 37%-os MACE-redukció)",
    "CRP-csökkentés, plakk-stabilizáció, endotel-funkció javítása"
  ],
  "quickStart": [
    "Baseline lipid panel (LDL, HDL, TG, total chol), ALT/AST, CK kezdéskor",
    "Estére (vagy bármikor, Atorvastatin hosszú felezési idő miatt) bevenni",
    "Grapefruit-lé KERÜLENDŐ (CYP3A4-gátlás miatt plazma-szint emelkedhet)",
    "Lipid-kontroll 4-12 hét után, dózis-titrálás célérték (LDL < 1,8 mmol/L szekunder) eléréséig",
    "Izomfájdalom esetén CK-mérés, ha CK > 5x ULN, dóziscsökkentés vagy elhagyás"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "A lipid-csökkentő hatás már mérhetővé válik, de a steady-state LDL-szint 4-6 hét után alakul ki."
    },
    {
      "label": "4-6. hét",
      "body": "Lipid-panel kontroll. Tipikus LDL-csökkenés 10 mg-on 35-40%, 20 mg-on 40-45%, 40 mg-on 45-55%, 80 mg-on 55-60%."
    },
    {
      "label": "6-12. hónap",
      "body": "ALT/AST/CK ellenőrzés, ha nem jelzett tünet, ezt követően évente elegendő. Hosszú távú compliance kritikus a kardiovaszkuláris végpont-előny eléréséhez."
    }
  ],
  "quality": {
    "pure": [
      "Pfizer Lipitor (originator), Sandoz/Krka/Teva generikus változatok bioekvivalensek",
      "EU-piacon: Sortis, Atoris, Tulip, Atorvox, Atorvastatin Krka"
    ],
    "caution": [
      "Izomfájdalom esetén CK-mérés (CK > 5x ULN dóziscsökkentés, > 10x ULN STOP)",
      "Új T2DM-diagnózis enyhe kockázat, főleg pre-diabéteszesnél",
      "Hosszú távú statin-tolerancia: izomfájdalom időnként újra megjelenhet"
    ],
    "avoid": [
      "Aktív májbetegség vagy tartós ALT-emelkedés",
      "Terhesség és szoptatás (FDA X kategória)",
      "Erős CYP3A4 inhibitor együttes adás",
      "Grapefruit-lé rendszeres fogyasztása",
      "Korábbi statin-indukált rhabdomyolysis vagy súlyos myopathia anamnézis",
      "Megmagyarázhatatlan, tartós szérum-transzamináz-emelkedés (>3x ULN)",
      "Egyidejű ciklosporin (megnövekedett rhabdomyolysis-kockázat)"
    ]
  },
  "interactions": [
    "Ezetimibe (Inegy fix kombináció): szinergisztikus LDL-csökkentés (+15-20%)",
    "PCSK9-inhibitor (Evolocumab, Alirocumab): high-risk pácienseknél kombináció",
    "Niacin (high-dose): myopathy-kockázat fokozása, óvatos kombináció",
    "Fenofibrate: gemfibrozillel ellentétben kombinálható, kis myopathy-kockázattal",
    "Antitrombotikum (clopidogrel, aspirin): nincs farmakokinetikai interakció"
  ],
  "studies": [
    {
      "title": "Intensive lipid lowering with atorvastatin in patients with stable coronary disease (TNT)",
      "authors": "LaRosa JC, Grundy SM, Waters DD et al.",
      "journal": "N Engl J Med. 2005;352(14):1425-35.",
      "pmid": "15755765"
    },
    {
      "title": "Primary prevention of cardiovascular disease with atorvastatin in type 2 diabetes (CARDS)",
      "authors": "Colhoun HM, Betteridge DJ, Durrington PN et al.",
      "journal": "Lancet. 2004;364(9435):685-96.",
      "pmid": "15325833"
    },
    {
      "title": "High-dose atorvastatin after stroke or transient ischemic attack (SPARCL)",
      "authors": "Amarenco P, Bogousslavsky J, Callahan A 3rd et al.",
      "journal": "N Engl J Med. 2006;355(6):549-59.",
      "pmid": "16899775"
    },
    {
      "title": "Efficacy and safety of cholesterol-lowering treatment: prospective meta-analysis (CTT)",
      "authors": "Baigent C, Blackwell L, Emberson J et al.",
      "journal": "Lancet. 2010;376(9753):1670-81.",
      "pmid": "21067804"
    },
    {
      "title": "Effects of atorvastatin on early recurrent ischemic events in acute coronary syndromes (MIRACL)",
      "authors": "Schwartz GG, Olsson AG, Ezekowitz MD et al.",
      "journal": "JAMA. 2001;285(13):1711-8.",
      "pmid": "11268233"
    },
    {
      "title": "Prevention of coronary and stroke events with atorvastatin (ASCOT-LLA)",
      "authors": "Sever PS, Dahlöf B, Poulter NR et al.",
      "journal": "Lancet. 2003;361(9364):1149-58.",
      "pmid": "12686036"
    },
    {
      "title": "2018 AHA/ACC/Multisociety guideline on the management of blood cholesterol",
      "authors": "Grundy SM, Stone NJ, Bailey AL et al.",
      "journal": "Circulation. 2019;139(25):e1082-e1143.",
      "pmid": "30586774"
    }
  ],
  "faq": [
    {
      "q": "Hogyan választok az alacsony, mérsékelt és nagy-intenzitású statin között?",
      "a": "A 2018 AHA/ACC iránymutatás szerint a kockázat-stratifikáció vezérli: szekunder prevenció (ASCVD) vagy LDL ≥4,9 mmol/L vagy FH → nagy-intenzitású (Atorvastatin 40-80 mg, Rosuvastatin 20-40 mg). 10-éves ASCVD-risk 7,5-20% → mérsékelt-nagy intenzitású. < 7,5% és nincs egyéb kockázat → életmód-tanácsadás vagy alacsony-mérsékelt intenzitású."
    },
    {
      "q": "Mit jelent a statin-indukált izomfájdalom és mikor STOP?",
      "a": "A SAMS (Statin-Associated Muscle Symptoms) tipikusan szimmetrikus, proximális (comb, váll) izomfájdalom, ami az első 6 hónapban jelenik meg. CK-mérés döntő: ha CK ≤ 5x ULN, dóziscsökkentés vagy gyógyszer-csere (Rosuvastatin, Pravastatin). Ha CK > 5x ULN, STOP. Rhabdomyolysis (CK > 10x ULN + myoglobinuria) sürgősségi helyzet. Nocebo-effekt is jelentős: a randomizált blinded SAMSON trial (Howard 2021 JACC PMID 33214287) szerint a tünetek 90%-ban már placebo-tabletta szedésénél is jelentkeztek."
    },
    {
      "q": "Növeli a statin a cukorbetegség kockázatát?",
      "a": "Igen, enyhén. A JUPITER post-hoc és CTT meta-analízis (Baigent 2010) szerint a relatív kockázat ~9-12% emelkedés új-T2DM-re, főleg már prediabéteszeseknél. A kardiovaszkuláris végpont-előny azonban messze felülmúlja ezt a kockázatot, ezért a guideline-szerinti indikációnál a statin folytatandó. Életmód-intervenció (testsúlycsökkenés, fizikai aktivitás) együttesen alkalmazandó."
    },
    {
      "q": "Miért NEM ihatok grapefruit-lét Atorvastatin alatt?",
      "a": "A grapefruit-lé furanocoumarin-vegyületei (bergamottin, dihidroxi-bergamottin) inaktiválják az intestinális CYP3A4 enzimet, ami az Atorvastatin first-pass metabolizmusát ~50%-kal csökkenti, így a plazma-szint és AUC megemelkedhet 80-100%-kal. Ez fokozza a myopathy- és rhabdomyolysis-kockázatot. A hatás 24-72 órán át tartó, ezért nem elegendő egyszerre különböző időben fogyasztani. Pravastatin nem CYP3A4-substrátum, ott biztonságos."
    },
    {
      "q": "Életmód-változással elhagyható-e a statin?",
      "a": "Az életmód-intervenció (mediterrán diéta, fizikai aktivitás, súlyvesztés) önmagában 5-15% LDL-csökkenést hozhat, ami nem helyettesíti a statint közepes-magas kockázatú betegnél. Szekunder prevencióban (ASCVD-anamnézis) az életmód-csak megközelítés NEM elégséges, a statin folytatandó. Primer prevencióban alacsony-kockázatúaknál (10-éves ASCVD < 5%) életmód-elsőség egy próbálkozás után újraértékelhető, de orvosi kontrollal."
    }
  ],
  "related": [
    "tadalafil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 10,
      "medium": 40,
      "high": 80
    },
    "unit": "mg/nap",
    "note": "AHA/ACC 2018 intenzitás-besorolás. Alacsony intenzitás (10 mg, ~35% LDL-csökkenés): primer prevenció alacsony rizikónál. Mérsékelt-nagy (40 mg, ~45-55%): standard szekunder prevenció. Nagy intenzitás (80 mg, ~55-60%): FH vagy magas-rizikójú szekunder prevenció. Estére adva tipikus, de Atorvastatin hosszú felezési ideje miatt nem kritikus."
  }
}
