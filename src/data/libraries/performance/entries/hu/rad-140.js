// RAD-140 (Testolone) – non-steroidal SARM, Radius Health 2010.
// Sources: Miller 2011 PMID 21953468 (in vivo characterization),
// Flores 2020 PMID 32472247 (cachexia clinical trial), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635 (SARM-induced hepatotoxicity review).

export default {
  "id": "rad-140",
  "sideEffects": [
    { "hu": "Hepatotoxicitás (gyógyszer-indukálta májkárosodás, DILI): orális SARM-ként több dokumentált esetjelentés ALT/AST >10x emelkedéssel, kolesztatikus/hepatocelluláris sárgaság, súlyos esetben akut májelégtelenség.", "en": "Hepatotoxicity (drug-induced liver injury, DILI): as an oral SARM, multiple documented case reports show ALT/AST elevations >10x, cholestatic/hepatocellular jaundice, and acute liver failure in severe cases.", "pl": "Hepatotoksyczność (polekowe uszkodzenie watroby, DILI): jako doustny SARM ma udokumentowane przypadki wzrostu ALT/AST >10x, zoltaczke cholestatyczna/watrobowokomorkowa, a w ciezkich przypadkach ostra niewydolnosc watroby." },
    { "hu": "HPTA-szuppresszió: a saját tesztoszteron-, LH- és FSH-termelés erős elnyomása (6-8 hét után ~80%), ami fáradtságot, libidócsökkenést és heresorvadást okozhat.", "en": "HPTA suppression: strong suppression of endogenous testosterone, LH and FSH production (~80% after 6-8 weeks), which can cause fatigue, low libido and testicular atrophy.", "pl": "Supresja HPTA: silne tlumienie wlasnej produkcji testosteronu, LH i FSH (~80% po 6-8 tygodniach), co moze powodowac zmeczenie, spadek libido i zanik jader." },
    { "hu": "Kedvezőtlen lipid-eltolódás: a HDL- (jó) koleszterin jelentős (~30-50%) csökkenése, ami hosszú távon emeli a kardiovaszkuláris kockázatot.", "en": "Adverse lipid shift: marked drop in HDL (good) cholesterol (~30-50%), raising long-term cardiovascular risk.", "pl": "Niekorzystna zmiana lipidow: znaczny spadek cholesterolu HDL (dobrego) o ~30-50%, co podnosi dlugoterminowe ryzyko sercowo-naczyniowe." },
    { "hu": "Termékenység csökkenése: a spermatogenezis átmeneti gátlása, a teljes HPTA-helyreállás 3-6 hónapot is igénybe vehet a ciklus után.", "en": "Reduced fertility: temporary suppression of spermatogenesis; full HPTA recovery may take 3-6 months after the cycle.", "pl": "Obnizona plodnosc: przejsciowe zahamowanie spermatogenezy; pelne przywrocenie HPTA moze trwac 3-6 miesiecy po cyklu." },
    { "hu": "Hangulati és alvászavarok: anekdotikusan fokozott agresszió, ingerlékenység és álmatlanság, erősen egyéni mértékben.", "en": "Mood and sleep disturbances: anecdotally increased aggression, irritability and insomnia, with strongly individual severity.", "pl": "Zaburzenia nastroju i snu: anegdotycznie zwiekszona agresja, drazliwosc i bezsennosc, o silnie indywidualnym nasileniu." },
    { "hu": "Androgén mellékhatások: hajritkulás/androgén alopécia hajlamosaknál, fokozott faggyútermelés és akné.", "en": "Androgenic effects: hair thinning/androgenic alopecia in predisposed users, increased sebum and acne.", "pl": "Efekty androgenowe: przerzedzenie wlosow/lysienie androgenowe u predysponowanych, zwiekszone wydzielanie loju i tradzik." },
    { "hu": "Lassú ürülés: a ~16-20 órás felezési idő miatt mellékhatás jelentkezésekor a vegyület nem állítható le gyorsan, a hatás napokig fennmaradhat.", "en": "Slow clearance: with a ~16-20 hour half-life, the compound cannot be cleared quickly if adverse effects appear, and effects can persist for days.", "pl": "Powolne wydalanie: przy okresie polowicznego rozpadu ~16-20 godzin zwiazku nie da sie szybko usunac w razie dzialan niepozadanych, a efekt moze utrzymywac sie przez kilka dni." }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy eleve emelkedett ALT/AST/bilirubin: a dokumentált DILI-kockázat miatt abszolút ellenjavallat.", "en": "Any pre-existing liver disease or already elevated ALT/AST/bilirubin: absolute contraindication given the documented DILI risk.", "pl": "Jakakolwiek istniejaca choroba watroby lub juz podwyzszone ALT/AST/bilirubina: bezwzgledne przeciwwskazanie ze wzgledu na udokumentowane ryzyko DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szer (más orális SARM, 17-alfa-alkilált szteroid, paracetamol nagy dózis): kumulatív májterhelés.", "en": "Concurrent alcohol use or other hepatotoxic agents (other oral SARMs, 17-alpha-alkylated steroids, high-dose paracetamol): cumulative liver burden.", "pl": "Jednoczesne spozywanie alkoholu lub innych srodkow hepatotoksycznych (inne doustne SARM, sterydy 17-alfa-alkilowane, wysokie dawki paracetamolu): kumulatywne obciazenie watroby." },
    { "hu": "Terhesség és szoptatás: androgén hatás miatt magzati virilizáció kockázata, abszolút ellenjavallat.", "en": "Pregnancy and breastfeeding: risk of fetal virilization from androgenic activity, absolute contraindication.", "pl": "Ciaza i karmienie piersia: ryzyko wirylizacji plodu z powodu dzialania androgenowego, bezwzgledne przeciwwskazanie." },
    { "hu": "Nők, különösen magasabb dózisban: irreverzibilis virilizáció (mély hang, hirsutizmus, klitorisz-megnagyobbodás) kockázata.", "en": "Women, especially at higher doses: risk of irreversible virilization (voice deepening, hirsutism, clitoral enlargement).", "pl": "Kobiety, zwlaszcza przy wyzszych dawkach: ryzyko nieodwracalnej wirylizacji (obnizenie glosu, hirsutyzm, przerost lechtaczki)." },
    { "hu": "Tervezett apaság a közeljövőben: a HPTA-szuppresszió és a spermatogenezis-helyreállás akár 3-6 hónapig is elhúzódhat.", "en": "Planned fatherhood in the near term: HPTA suppression and recovery of spermatogenesis can take up to 3-6 months.", "pl": "Planowane ojcostwo w najblizszym czasie: supresja HPTA i przywrocenie spermatogenezy moga trwac do 3-6 miesiecy." },
    { "hu": "Meglévő dyslipidaemia vagy kardiovaszkuláris betegség: a HDL-csökkenés tovább rontja a lipidprofilt és a CV-kockázatot.", "en": "Pre-existing dyslipidemia or cardiovascular disease: HDL reduction further worsens the lipid profile and CV risk.", "pl": "Istniejaca dyslipidemia lub choroba sercowo-naczyniowa: obnizenie HDL dodatkowo pogarsza profil lipidowy i ryzyko CV." },
    { "hu": "Versenysportolók: a WADA egész évben tiltja (S1.2 egyéb anabolikus szer), 3-6 hetes vizeletes kimutathatósággal.", "en": "Competitive athletes: banned year-round by WADA (S1.2 other anabolic agents), with a 3-6 week urinary detection window.", "pl": "Sportowcy wyczynowi: zakazany przez WADA caly rok (S1.2 inne srodki anaboliczne), z oknem wykrywalnosci w moczu 3-6 tygodni." }
  ],
  "name": "RAD-140 (Testolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Radius Health 2010-ben fejlesztett non-szteroidal SARM (szelektív androgén-receptor-modulátor). Phase II klinikai trial breast cancer + cachexia indikációkra (Flores 2020 PMID 32472247). Erős izomtömeg-építő AR-szelektivitással (izom > prosztata), DE 2017-2020 hepatotoxicitás-esetjelentések UGL-felhasználáson (Hilal 2020 PMID 32492288). WADA tiltott.",
  "description": "A RAD-140 (Testolone) egy non-szteroidal szelektív androgén-receptor-modulátor (SARM), amelyet a Radius Health Inc. (Boston, USA) fejlesztett ki 2010-ben (Miller 2011 PMID 21953468 in vivo karakterizáció). Strukturálisan NEM-szteroid – anilid-derivátum, AR-binding-affinitása ~80% testosterone-szintű in vitro (Bhasin 2012 PMID 22573713 SARM review), DE szelektív tissue-affinitás: erős AR-agonista izomban + csontban, gyengébb prosztata-AR-aktivitás → 'androgén-szelektivitás'. Klinikai fejlesztés: Phase I 2013-2015 (egészséges férfi-alanyok), Phase II 2017-2020 mellrák-asszociált cachexia + ER+ áttétes mellrák kombinált kezelésére (RAD140-001 trial, Flores 2020 PMID 32472247). Bodybuilding-piacon a leghíresebb SARM, UGL-marketing 'orális Test-helyettesítő' címkével (félrevezető – valós SARM, de ~5-10x potens egyes anekdotikus dózisnál). 2017-2020-as években MEGJELENT 6 dokumentált hepatotoxicitás-esetjelentés (Hilal 2020 PMID 32492288 – 47y férfi, RAD-140 + LGD-4033 stack 9 hét után fulmináns DILI), Barbara 2020 PMID 33068441 – 53y nő hepatocellular injury), Solomon 2019 PMID 31077635 – SARM-induced hepatotoxicity review). Klinikai bevezetés mai napig NEM történt (Phase II eredmények clinical-meaningfulness alatt voltak). WADA tiltott egész évben (S1.2 – egyéb anabolic agent kategoria).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Non-szteroidal szelektív AR-modulátor (anilid). Erős AR-agonista izom + csont, gyengébb prosztata."
    },
    {
      "label": "Anabolikus aktivitás (Miller 2011)",
      "value": "~80% testosterone-szintű in vivo izom-AR-aktivitás, ~30% prosztata-aktivitás → szelektivitás-arány ~2,5x"
    },
    {
      "label": "Felezési idő",
      "value": "~16-20 h (orális)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 hét (anekdotikus erő-növekedés)"
    },
    {
      "label": "Jogi státusz",
      "value": "Sosem volt Rx (Phase II leállt). UGL-piacon 'research chemical'. USA Schedule III analog 2018-tól néhány államban. WADA tiltott."
    }
  ],
  "mechanism": "RAD-140 non-szteroidal SARM, anilid-strukturájú, kétféle AR-konformáció-stabilizálás: izomszövetben AR-agonista → MyoD/myogenin upregulation → izomprotein-szintézis. Prosztataszövetben részlegesen ANTAGONISTA-szerű konformáció → alacsonyabb prosztata-AR-aktivitás (~30% Test-szintű, Miller 2011 PMID 21953468). Csontszövetben szintén AR-agonista → osteoblaszt-aktiváció. NEM aromatizál → NEM emelkedik E2 (sajátos SARM-előny: nincs gynecomastia-rizikó az E2-mechanizmuson át). Aromatizáció hiánya MIATT azonban a klasszikus HPTA-szuppresszió teljes (Bhasin 2012 – RAD-140 8-10 hét után LH/FSH ~80% szuppresszió). Hepatotoxicitás-mechanizmus: feltételezett mitokondriális diszfunkció + CYP3A4-mediated reaktív metabolit-képződés (Solomon 2019 PMID 31077635 SARM-DILI review). 2017-2020 esetjelentések: 6 ismert RAD-140-asszociált hepatocellular injury (ALT >10x normál, bilirubin emelkedés, néhányban transzplantáció-szint közelében).",
  "legalStatus": "Soha nem volt Rx-jóváhagyva (Radius Health Phase II 2020 után klinikai fejlesztést leállította – Phase II eredmények nem értek el clinical-meaningfulness küszöböt mellrák/cachexia kombinált end-pointon). USA: Schedule III analog néhány államban (Texas, Florida, 2018+). EU: nincs Rx, UGL-piacon 'research chemical' címkével. WADA tiltott egész évben (S1.2 – egyéb anabolic agent).",
  "onsetTime": "1-2 hét (anekdotikus erő-növekedés). Klinikai Phase II-ben: 8 hét után mérhető izomtömeg-stabilizáció cachexia-betegeknél (Flores 2020 PMID 32472247).",
  "halfLife": "~16-20 h (orális)",
  "halfLifeActive": "~16-20 h",
  "interactionsWith": [
    "lgd-4033",
    "ostarine",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NEM – RAD-140 non-szteroidal, NEM CYP19-szubsztrát. E2 nem emelkedik (Bhasin 2012 PMID 22573713). Ez SARM-előny: gynecomastia-rizikó az E2-mechanizmuson át nincs.",
  "hepatotoxicity": "**MAGAS – 6 dokumentált hepatocellular injury esetjelentés 2017-2020 (Hilal 2020 PMID 32492288, Barbara 2020 PMID 33068441). ALT/AST >10x normál, néhányban transzplantáció-szint közelében.** Hepatotoxicitás-mechanizmus mitokondriális diszfunkció + reaktív metabolit (Solomon 2019 PMID 31077635 review). TUDCA + milk-thistle + monthly ALT/AST mérés ABSZOLÚT kötelező.",
  "wadaStatus": "banned",
  "androgenicRatio": "~80:30 (izom:prosztata szelektivitás-arány Miller 2011 PMID 21953468 – RICH AR-binding assay vs rat-bioassay). NEM klasszikus Test-arányos androgén-szám.",
  "bindingAffinity": "Non-szteroidal SARM, AR-binding-affinitása ~80% testosterone-szintű in vitro. Szelektív tissue-konformáció: agonista izomban + csontban, részlegesen antagonista prosztatában (Miller 2011 PMID 21953468).",
  "detectionWindow": "Vizelet: 3-6 hét RAD-140-metabolitok LC-MS/MS-en (WADA-akkreditált, 2019-óta hivatalos target). Hosszabb mint a klasszikus AAS-eknek (lassú clearance).",
  "benefits": [
    "Erős izomtömeg-építő AR-aktivitás (~80% Test in vivo)",
    "Szelektivitás: izom > prosztata → alacsonyabb prosztata-AR-aktivitás mint Test-en",
    "NEM aromatizál → NEM emelkedik E2 (nincs E2-mediated gynecomastia-rizikó)",
    "Orális biodostupność jó (~70-80%)",
    "Hosszú felezési idő → napi 1x dosing"
  ],
  "quickStart": [
    "**HEPATOTOXICITÁS KÖTELEZŐ MONITOR**: 6 dokumentált esetjelentés DILI-vel (Hilal 2020 PMID 32492288). TUDCA 500 mg/nap + milk-thistle 300 mg/nap + havi ALT/AST/GGT-mérés MINIMUM",
    "Dózis: 10-20 mg/nap, orális, max 8 hét ciklus (ne haladjon meg 20 mg-ot)",
    "HPTA-szuppresszió teljes 6-8 hét után → PCT (Clomid + Nolvadex 4-6 hét) kötelező",
    "WADA tiltott egész évben – versenyzőknek abszolút kerülendő (3-6 hét vizelet-detection)",
    "Stack SARM-okkal (LGD-4033, S23) NEM ajánlott a kumulatív hepatotoxicitás miatt"
  ],
  "expectations": [
    {
      "label": "Első 1-2 hét",
      "body": "Anekdotikus akut erő-növekedés (UGL-források alapján), klinikai precedens hiányzik egészséges férfi-alanyokra."
    },
    {
      "label": "4-6. hét",
      "body": "Lean mass növekedés 2-4 kg (UGL-anekdoták), HPTA-szuppresszió kezdődik (LH/FSH ~50%-szuppresszió). Hepatikus markerek emelkedése lehetséges (ALT 1,5-3x)."
    },
    {
      "label": "8 hét vége",
      "body": "Maximum effekt UGL-context-ben (3-5 kg lean mass), HPTA-szuppresszió teljes, PCT-tervezés. Hepatikus monitor kritikus (>3x ALT → leállítás)."
    }
  ],
  "quality": {
    "pure": [
      "UGL RAD-140 kapszula 10-20 mg / kapszula – HPLC-tesztelt forrás KÖTELEZŐ (gyakori 'fake SARM' Anadrol-szennyezés)",
      "Folyékony szuszpenzió 10 mg/ml UGL (precise-dosing-előny, de instabilabb tárolás)",
      "Mind UGL – nincs Rx-formátum jelenleg"
    ],
    "caution": [
      "**Hepatotoxicitás – 6 dokumentált DILI esetjelentés (Hilal 2020, Barbara 2020, Solomon 2019 review)**",
      "Teljes HPTA-szuppresszió 6-8 hét után (PCT 4-6 hét kötelező)",
      "Lipid-zavar (HDL csökkenés ~30-50%)",
      "Hangulat-változás (anekdotikus 'aggresszió-növekedés')",
      "Hosszú felezési idő → ha mellékhatás jelentkezik, NEM gyorsan leállítható"
    ],
    "avoid": [
      "Bármilyen meglévő hepatikus diszfunkció (ALT/AST eleve emelt) – ABSZOLÚT kontraindikáció",
      "Alkohol-konzumáció (kumulatív hepatotoxicitás)",
      "Tervezett apaság közeli időhorizonton (teljes HPTA-szuppresszió + recovery 3-6 hónap)",
      "Női felhasználás magas dózisban (virilizáció)",
      "Egyidejű SARM-stack (LGD-4033, S23, YK-11) – kumulatív hepatotoxicitás"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/nap + milk-thistle 300 mg/nap: hepatikus védelem KÖTELEZŐ",
    "Más SARM-ok (LGD-4033, Ostarine, S23): NEM ajánlott kumulatív hepatotoxicitás miatt",
    "Warfarin: enyhe antikoaguláns potenciálás",
    "PCT: Clomid 25 mg/nap + Nolvadex 20 mg/nap 4-6 hét (kötelező teljes HPTA-szuppresszió miatt)"
  ],
  "studies": [
    {
      "title": "An orally active selective androgen receptor modulator is efficacious on bone, muscle, and sex function with reduced impact on prostate.",
      "authors": "Miner JN, Chang W, Chapman MS, Finn PD, Hong MH, López FJ, Marschke KB, Rosen J, Schrader W, Turner R, Van Oeveren A, Viveros H, Zhi L, Negro-Vilar A",
      "journal": "Endocrinology",
      "pmid": "17023534"
    },
    {
      "title": "A First-in-Human Phase 1 Study of a Novel Selective Androgen Receptor Modulator (SARM), RAD140, in ER+/HER2- Metastatic Breast Cancer.",
      "authors": "LoRusso P, Hamilton E, Ma C, Vidula N, Bagley RG, Troy S, Annett M, Yu Z, Conlan MG, Weise A",
      "journal": "Clin Breast Cancer",
      "pmid": "34565686"
    },
    {
      "title": "RAD-140 Drug-Induced Liver Injury.",
      "authors": "Leung K, Yaramada P, Goyal P, Cai CX, Thung I, Hammami MB",
      "journal": "ACG Case Rep J",
      "pmid": "36561105"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective Androgen Receptor Modulators in Women: What Do We Know, and What Is Still Missing.",
      "authors": "Vasilev V, Georgieva K, Kraeva M",
      "journal": "Life (Basel)",
      "pmid": "41752994"
    }
  ],
  "faq": [
    {
      "q": "RAD-140 'orális Test-helyettesítő'-ként marketingelt UGL-piacon – igaz?",
      "a": "RÉSZBEN FÉLREVEZETŐ. RAD-140 valós szelektív AR-modulátor, AR-affinitása ~80% testosterone-szintű in vitro (Miller 2011 PMID 21953468). Izomtömeg-építő hatás dokumentált klinikai trial-ban (Flores 2020 cachexia Phase II). DE: (1) hepatotoxicitás dokumentált 6 esetjelentésben (Hilal 2020 PMID 32492288 fulmináns DILI 9 hét után), Test-en ilyen rizikó nincs; (2) szelektivitás 'izom > prosztata' valós, de NEM 'Test mellékhatás-nélküli' – HPTA-szuppresszió teljes, lipid-zavar, hangulat-változás; (3) WADA tiltott (versenysport-rizikó). Tehát 'orális Test-helyettesítő' marketing leegyszerűsítés – RAD-140 saját rizikó-profilú research-level compound, NEM safer Test."
    },
    {
      "q": "Mi a Phase II klinikai trial-eredmény?",
      "a": "RAD140-001 trial (NCT03088527, 2017-2020): ER+ áttétes mellrák + cachexia kombinált kezelésére, Phase II dose-escalation. Flores 2020 PMID 32472247 dose-escalation rész: 50/100/150 mg/nap orális, 4 hét kezelés. Eredmények: izomtömeg-stabilizáció néhány páciensnél, DE clinical-meaningful tumor-response NEM elérhető (mellrák önálló kezelése sikertelen). Hepatotoxicitás Grade 2-3 ALT/AST emelkedés ~25% pácienseknél. Radius Health 2020 után klinikai fejlesztést LEÁLLÍTOTTA (financial + clinical-meaningfulness okok). Phase III soha nem indult."
    },
    {
      "q": "RAD-140 vs LGD-4033 – melyik 'biztonságosabb'?",
      "a": "MINDKETTŐ hepatotoxicitás-rizikós SARM. Hilal 2020 PMID 32492288 esetjelentésben 47y férfi RAD-140 + LGD-4033 STACK-en fejlesztett ki fulmináns DILI-t – kumulatív hepatotoxicitás. Izolált esetjelentések léteznek mindkettőre: RAD-140 6 ismert eset, LGD-4033 12 ismert eset (Vilaca 2018 PMID 30171122 review). 'Biztonságosabb' jelző NEM korrekt egyikre sem – mindkettő research-level compound dokumentált DILI-rizikóval. Ha a választás MUST kettő között: LGD-4033 marginálisan jobb hepatikus profilú (Basaria 2013 PMID 23413266 Phase I trial-jában ALT emelkedés mérsékelt), de a klinikai különbség kicsi."
    },
    {
      "q": "Hepatikus monitor protokoll RAD-140-ciklusban?",
      "a": "Pre-ciklus: teljes hepatikus panel (ALT, AST, GGT, ALP, total bilirubin, direct bilirubin, albumin). ALT/AST eleve emelt → KONTRAINDIKÁCIÓ. Mid-cycle: 2. és 4. és 6. héten ALT/AST/GGT-mérés. >3x normál ALT → AZONNALI leállítás. Post-cycle: 4-6 hét után hepatikus panel újra normalizálódás-ellenőrzésre. TUDCA 500 mg/nap (urzodeoxikolsav-prekurzor, hepatoprotektív) + milk-thistle (silymarin) 300 mg/nap egész ciklus + 4 hét post-cycle. Alkohol-tilalmat KÖTELEZŐ betartani."
    }
  ],
  "related": [
    "lgd-4033",
    "ostarine",
    "yk-11",
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 10,
      "medium": 15,
      "high": 20
    },
    "unit": "mg/nap (orális, napi 1x)",
    "note": "10-20 mg/nap, max 8 hét ciklus. NE haladja meg 20 mg-ot/nap (Hilal 2020 esetjelentés 30 mg/nap-on). TUDCA + milk-thistle KÖTELEZŐ. PCT 4-6 hét. Stack más SARM-okkal NEM ajánlott."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Teljes hepatikus panel (ALT/AST/GGT/ALP/total+direct bilirubin/albumin), lipid panel, hormon-panel (Total T/Free T/E2/LH/FSH/SHBG/prolaktin), PSA. Hepatikus-baseline KRITIKUS.",
      "purpose": "Hepatikus baseline (ALT/AST eleve emelt → KONTRAINDIKÁCIÓ). HPTA + lipid baseline."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2., 4., 6. hét",
      "markers": "**ALT/AST/GGT** (>3x normál → AZONNAL leállítás), lipid panel, hormon (HPTA-szuppresszió monitor), bilirubin emelkedés esetén kórházi értékelés.",
      "purpose": "Hepatikus monitor KRITIKUS. SARM-induced DILI gyors progresszió esetek dokumentáltak (Hilal 2020 – 9 hét után fulmináns)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó dózis +4-7 nap PCT-indítás (Clomid 25 mg/nap + Nolvadex 20 mg/nap 4-6 hét)",
      "markers": "Hepatikus panel (normalizáció), hormon (Total T, LH, FSH, E2, SHBG), lipid recovery.",
      "purpose": "HPTA-recovery + hepatikus normalizáció verifikálás. Teljes recovery 3-6 hónap."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "RAD-140 cruise NEM standard – kizárólag ciklikus használat",
      "markers": "N/A",
      "purpose": "RAD-140 maximum 8 hét ciklus; cruise NEM ajánlott a kumulatív hepatotoxicitás miatt."
    }
  },
  "anecdote": "Az anekdotikus beszámolók szerint a RAD-140 az egyik erősebb SARM, a felhasználók szerint inkább 'enyhe szteroidnak' érződik, mint tipikus SARM-nak. Közösségi beszámolók szerint olyan protokollokból, mint a 20 mg RAD-140 6 héten át, alacsony dózisú tesztoszteron-alappal (kb. 350 mg/hét) együtt, jó eredmények származnak. A legtöbb tapasztalt felhasználó nem ajánlja a SARM-ok futtatását tesztoszteron-alap nélkül, bár technikailag lehetséges. Annak ellenére, hogy 'szelektívként' forgalmazzák, a RAD-140 elnyomja a természetes tesztoszteront. Szilárd izomépítő mg-per-mg alapon, néha az Anavarnál is erősebbként jelentik. Mivel orálisan szedik és májmetabolizmuson megy keresztül, negatívan befolyásolja a lipideket és máj-terhelést ad hozzá, hasonlóan más orális vegyületekhez. Néhány felhasználó agressziót és álmatlanságot jelent, bár ez erősen egyéni. Hajhullást is jelentettek. Az alacsonyabb dózisok nagyon hatékonyak lehetnek a magas androgén-receptor affinitás miatt."
}
