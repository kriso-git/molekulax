// Letrozol (Femara) — non-szteroidal triazole AI, erősebb mint Anastrozol.
// FDA-jóváhagyott 1997 Novartis. AAS-niche: hard-suppression Tren+Mast
// E2-control + gynecomastia-reverzálás (2.5 mg/nap 2-3 hét).
// Sources: FDA Femara SmPC, Coates 2007 BIG1-98 PMID 17582920,
// Bhatnagar 1996 PMID 8847500, Goss 2003 MA.17 PMID 14595025.

export default {
  "id": "letrozol",
  "sideEffects": [
    { "hu": "Túlszuppresszált (crashed) ösztradiol: a Letrozol erősebb az Anastrozolnál (~99% E2-szuppresszió), így könnyen a tünetes hypoösztrogenizmusba viszi az E2-t, ami libidó-zuhanást, erektilis diszfunkciót, fáradtságot és levertséget okoz.", "en": "Over-suppressed (crashed) estradiol: letrozole is more potent than anastrozole (~99% E2 suppression), so it easily drives E2 into symptomatic hypoestrogenism, causing low libido, erectile dysfunction, fatigue and low mood.", "pl": "Nadmiernie stłumiony (crashed) estradiol: letrozol jest silniejszy od anastrozolu (~99% supresji E2), więc łatwo wpędza E2 w objawowy hipoestrogenizm, powodując spadek libido, zaburzenia erekcji, zmęczenie i obniżony nastrój." },
    { "hu": "Ízületi és izomfájdalom (arthralgia, myalgia): az ösztrogénmegvonás jellegzetes mellékhatása, csukló-, térd- és kéztünetekkel, ízületi merevséggel; a klinikai vizsgálatokban a leggyakoribb panasz.", "en": "Joint and muscle pain (arthralgia, myalgia): a hallmark of estrogen deprivation, with wrist, knee and hand symptoms and joint stiffness; the most common complaint in clinical trials.", "pl": "Ból stawów i mięśni (arthralgia, myalgia): typowy skutek pozbawienia estrogenu, z objawami nadgarstka, kolan i dłoni oraz sztywnością stawów; najczęstsza skarga w badaniach klinicznych." },
    { "hu": "Romló lipidprofil: tartós használat mellett a HDL csökken (akár ~30%) és az LDL emelkedik (~15-25%), ami a kedvezőtlen kardiovaszkuláris kockázat felé tolja a profilt, kiváltképp aromatizáló szteroid-stacken.", "en": "Worsening lipid profile: with sustained use HDL falls (up to ~30%) and LDL rises (~15-25%), shifting the profile toward unfavourable cardiovascular risk, especially on an aromatizing steroid stack.", "pl": "Pogorszenie profilu lipidowego: przy długotrwałym stosowaniu HDL spada (nawet ~30%), a LDL rośnie (~15-25%), przesuwając profil w stronę niekorzystnego ryzyka sercowo-naczyniowego, zwłaszcza na stacku aromatyzujących sterydów." },
    { "hu": "Csontritkulás és csontvesztés: az ösztrogén kulcsfontosságú a csontsűrűség fenntartásában; tartós Letrozol-használat csökkenti a BMD-t és növeli az oszteoporózis és törések kockázatát (FDA Femara címke), ezért krónikus használatnál DEXA-monitorozás indokolt.", "en": "Bone loss and osteoporosis: estrogen is key to maintaining bone density, so prolonged letrozole use lowers BMD and raises the risk of osteoporosis and fractures (FDA Femara label); chronic use warrants DEXA monitoring.", "pl": "Utrata masy kostnej i osteoporoza: estrogen jest kluczowy dla utrzymania gęstości kości, więc długotrwałe stosowanie letrozolu obniża BMD i zwiększa ryzyko osteoporozy oraz złamań (etykieta FDA Femara); przewlekłe stosowanie wymaga monitorowania DEXA." },
    { "hu": "Hőhullámok és fokozott izzadás: az ösztrogénhiány vazomotoros tünete, a Letrozol egyik leggyakoribb, klinikailag dokumentált mellékhatása.", "en": "Hot flushes and increased sweating: a vasomotor symptom of estrogen deficiency and one of the most common clinically documented side effects of letrozole.", "pl": "Uderzenia gorąca i wzmożona potliwość: objaw naczynioruchowy niedoboru estrogenu i jeden z najczęstszych klinicznie udokumentowanych skutków ubocznych letrozolu." },
    { "hu": "Hangulati zavarok és fáradtság: az alacsony ösztrogénszint depresszív hangulatot, ingerlékenységet, alvászavart és kifejezett kimerültséget okozhat.", "en": "Mood disturbance and fatigue: low estrogen can cause depressed mood, irritability, sleep disturbance and marked tiredness.", "pl": "Zaburzenia nastroju i zmęczenie: niski poziom estrogenu może powodować obniżony nastrój, drażliwość, zaburzenia snu i wyraźne znużenie." },
    { "hu": "Fejfájás, szédülés és émelygés: gyakori, általában enyhe-közepes tünetek a kezelés alatt, főként a magasabb (2.5 mg/nap) gyno-reverzáló dózison.", "en": "Headache, dizziness and nausea: common, usually mild-to-moderate symptoms during treatment, more so at the higher (2.5 mg/day) gyno-reversal dose.", "pl": "Ból głowy, zawroty głowy i nudności: częste, zwykle łagodne do umiarkowanych objawy w trakcie leczenia, bardziej nasilone przy wyższej dawce (2,5 mg/dobę) do cofania ginekomastii." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: Pregnancy Category X, az ösztrogénszintézis gátlása súlyos magzati károsodást és vetélést okozhat, ezért fogamzóképes/terhes nőnél abszolút ellenjavallt.", "en": "Pregnancy and breastfeeding: Pregnancy Category X, blocking estrogen synthesis can cause severe fetal harm and miscarriage, so it is absolutely contraindicated in pregnant women.", "pl": "Ciąża i karmienie piersią: Kategoria X w ciąży, blokowanie syntezy estrogenu może spowodować ciężkie uszkodzenie płodu i poronienie, więc jest bezwzględnie przeciwwskazany u kobiet w ciąży." },
    { "hu": "Premenopauzális nők (endokrin státusz): a reflexes gonadotropin-emelkedés és ovuláris diszfunkció miatt nem javallt premenopauzális női használat megfelelő endokrin felügyelet nélkül.", "en": "Premenopausal women (endocrine status): due to reflex gonadotropin rise and ovarian dysfunction, it is not indicated for premenopausal female use without proper endocrine supervision.", "pl": "Kobiety przed menopauzą (status endokrynny): z powodu odruchowego wzrostu gonadotropin i dysfunkcji jajników nie jest wskazany do stosowania u kobiet przed menopauzą bez odpowiedniego nadzoru endokrynologicznego." },
    { "hu": "Súlyos máj- vagy veseelégtelenség: a hepatikus CYP-metabolizmus és a renális ürülés miatt súlyos máj- vagy vesekárosodásnál a clearance romlik, így használata ellenjavallt vagy szoros felügyeletet igényel.", "en": "Severe hepatic or renal impairment: because of hepatic CYP metabolism and renal excretion, clearance is reduced in severe liver or kidney disease, so use is contraindicated or requires close supervision.", "pl": "Ciężka niewydolność wątroby lub nerek: ze względu na wątrobowy metabolizm CYP i wydalanie nerkowe klirens jest obniżony w ciężkiej chorobie wątroby lub nerek, więc stosowanie jest przeciwwskazane lub wymaga ścisłego nadzoru." },
    { "hu": "Meglévő oszteoporózis vagy alacsony csontsűrűség: a Letrozol tovább csökkenti a BMD-t, ezért igazolt oszteoporózis vagy törésrizikó esetén kerülendő, illetve csak csontvédelem és DEXA-monitor mellett mérlegelhető.", "en": "Pre-existing osteoporosis or low bone density: letrozole further lowers BMD, so it should be avoided with established osteoporosis or fracture risk, or used only with bone protection and DEXA monitoring.", "pl": "Istniejąca osteoporoza lub niska gęstość kości: letrozol dodatkowo obniża BMD, więc należy go unikać przy rozpoznanej osteoporozie lub ryzyku złamań, lub stosować tylko z ochroną kości i monitorowaniem DEXA." },
    { "hu": "Eleve alacsony vagy crashed ösztradiol: ha az E2 már alacsony vagy tünetes hypoösztrogenizmus áll fenn, a Letrozol indítása vagy folytatása ellenjavallt – baseline E2 (érzékeny LC-MS/MS) mérés nélkül ne induljon, főleg AI-naiv felhasználón.", "en": "Already low or crashed estradiol: if E2 is already low or symptomatic hypoestrogenism is present, starting or continuing letrozole is inadvisable – do not start without a baseline E2 (sensitive LC-MS/MS) measurement, especially in AI-naive users.", "pl": "Już niski lub crashed estradiol: jeśli E2 jest już niskie lub występuje objawowy hipoestrogenizm, rozpoczynanie lub kontynuowanie letrozolu jest niewskazane – nie zaczynać bez pomiaru wyjściowego E2 (czuły LC-MS/MS), zwłaszcza u osób bez doświadczenia z AI." },
    { "hu": "Tamoxifen (Nolvadex) egyidejű alkalmazása: farmakokinetikai interakció miatt a tamoxifen csökkenti a Letrozol plazmaszintjét, az együttes adás nem ajánlott (és AAS-PCT-ben az E2-crash kockázata is fokozódik).", "en": "Concurrent tamoxifen (Nolvadex): due to a pharmacokinetic interaction tamoxifen lowers letrozole plasma levels, so co-administration is not recommended (and in AAS-PCT it also increases the risk of crashing E2).", "pl": "Jednoczesne stosowanie tamoksyfenu (Nolvadex): z powodu interakcji farmakokinetycznej tamoksyfen obniża stężenie letrozolu w osoczu, więc łączne podawanie nie jest zalecane (a w AAS-PCT zwiększa też ryzyko crashed E2)." },
    { "hu": "Kifejezett, kezeletlen kedvezőtlen lipidprofil vagy kardiovaszkuláris betegség: a HDL-csökkentő hatás miatt fokozott figyelmet vagy ellenjavallatot jelent meglévő dyslipidaemia vagy szívbetegség mellett, lipidpanel-monitorozás nélkül.", "en": "Marked untreated adverse lipid profile or cardiovascular disease: because of the HDL-lowering effect it warrants caution or contraindication with existing dyslipidaemia or heart disease without lipid-panel monitoring.", "pl": "Wyraźnie niekorzystny, nieleczony profil lipidowy lub choroba sercowo-naczyniowa: ze względu na efekt obniżający HDL wymaga ostrożności lub jest przeciwwskazany przy istniejącej dyslipidemii lub chorobie serca bez monitorowania panelu lipidowego." }
  ],
  "name": "Letrozol (Femara)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Triazole-class non-szteroidal AI, az Anastrozolnál erősebb (~99% E2-szuppresszió 2.5 mg/nap). FDA-jóváhagyott (1997 Novartis). AAS-niche: hard-suppression Tren+Mast E2-control + gynecomastia-reverzálás (2.5 mg/nap 2-3 hét).",
  "description": "A Letrozol (Femara) egy harmadik generációs non-szteroidal triazole-AI, amelyet a Novartis fejlesztett ki, és 1997-ben kapott FDA-jóváhagyást postmenopauzális ER+ emlőkarcinómára. Az Anastrozolnál (~97%) erősebb aromatáz-gátló: a BIG1-98 trial (Coates 2007, PMID 17582920) ~99% szérum-E2-szuppressziót dokumentált 2.5 mg/nap dózisnál — a két AI fej-fej trial-ja (Geisler 2002) bemutatta, hogy a Letrozol nagyobb intramuszkuláris aromatáz-szövet penetrációval rendelkezik (a perifériás aromatázon erősebb hatású). Az AAS-világban két fő használat van: (1) E2-control hard-suppression stack-en (Tren-Acetate + Mast-Prop + Test-Prop blast — extrém aromatizáló szteroideken, mint Dianabol vagy Anadrol kombináció), és (2) gynecomastia-reverzálás (ER-mediated breast-gland tissue shrinkage, 2.5 mg/nap × 14-21 nap, taper-protokollal). Mivel erősebb mint az Anastrozol, az AI-naive felhasználóknak Anastrozol-ekvivalens fél-dose-zal érdemes indítani. WADA S4.1 — banned.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Reverzibilis non-szteroidal CYP19-aromatáz inhibitor, ~99% szérum-E2-szuppresszió 2.5 mg/nap dózison"},
    {"label": "Adagolás (AAS)", "value": "0.25-1.25 mg EOD bloodwork-titrálva; gyno-reverzálás 2.5 mg/nap × 14-21 nap"},
    {"label": "Felezési idő", "value": "~42 óra"},
    {"label": "Hatáskezdet", "value": "E2-csökkenés mérhető 24-48 óra, plateau 4-6 nap"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA S4.1 banned"}
  ],
  "mechanism": "A Letrozol szintén kompetitív reverzibilis triazole-AI, amely a CYP19-aromatáz hem-vasion-jához kötődik. Bhatnagar 1996 PMID 8847500 dokumentálta, hogy az aromatáz IC50-je in vitro ~11 nM (humán placentáris szubmikroszomális preparációban), valamivel alacsonyabb mint az Anastrozol ~15 nM-je. Az in vivo szövet-penetráció és az enzim-szintű kötés-stabilitás magasabb — a teljes szervezeti aromatáz-szuppresszió 2.5 mg/nap dózison ~99% (vs Anastrozol 1 mg ~97%). A teljes-szervezeti aromatáz-residual ennél a szuppressziós szintnél a kimutathatóság alá süllyed. Hepatikus CYP3A4 + CYP2A6 metabolizál; ~60%-90% vesén keresztül ürül glükuronidált formában. NEM AR/ER/PR-agonista. WADA-detection 1-2 hónap.",
  "legalStatus": "USA: FDA-jóváhagyott 1997 (Femara 2.5 mg, Novartis; generic letrozole 2007). Indikáció: postmenopauzális ER+ emlőkarcinóma adjuváns/metasztatikus + extended adjuváns therapy. EU: EMA-jóváhagyott 1996. HU: törzskönyvezett (Femara, Letrozol-ratiopharm, Letrozol Teva Rx). PL: törzskönyvezett (Femara Rx). WADA: S4.1 aromatáz-gátló — banned in/out-of-competition.",
  "onsetTime": "E2-csökkenés 24-48 óra, plateau 4-6 nap",
  "halfLife": "~42 óra",
  "halfLifeActive": "N/A (parent compound aktív, metabolitok inaktívak)",
  "interactionsWith": ["anastrozol", "exemestane", "nolvadex", "testosterone-info"],
  "aromatization": "Nem aromatizál — non-szteroidal triazole AI, ~99% szérum E2-szuppresszió 2.5 mg/nap dózison (BIG2-98 trial).",
  "hepatotoxicity": "Alacsony — non-szteroidal, nem 17α-alkilált. Hepatic adverse events <2% (FDA Femara label). Long-term női adjuváns 5-10 év: nincs szignifikáns DILI-mintázat.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS, AI)",
  "bindingAffinity": "CYP19-aromatáz aktív hely kompetitív kötés, Ki ~5-10 nM. ER/AR/PR — minimal binding (<1%).",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás 1-2 hónap (parent + glükuronidált metabolit).",
  "benefits": [
    "Erősebb mint Anastrozol — hard-suppression Tren+Mast stack E2-control",
    "Gynecomastia-reverzálás (létező gland-tissue regresszió 2.5 mg × 2-3 hét)",
    "~99% szérum-E2-szuppresszió 2.5 mg/nap (BIG1-98 trial)",
    "Reverzibilis kötés → titrálható (de óvatosan, könnyebben crashed E2 mint Anastrozolon)",
    "FDA + EMA Rx pharma-grade globally available",
    "Olcsó (~€20-40/box generic 2.5 mg)"
  ],
  "quickStart": [
    "AI-naive: Anastrozol-ekvivalens fél-dose-zal indítás (Anastrozol 0.5 mg ≈ Letrozol 0.25 mg)",
    "Standard AAS E2-control: 0.25-1.25 mg EOD bloodwork-titrálva",
    "Gynecomastia-reverzálás protokoll: 2.5 mg/nap × 14-21 nap, majd taper (1.25 → 0.625 → 0.25 → 0)",
    "Bloodwork pre-treatment baseline E2 LC-MS/MS, 10-14 nap múlva re-test",
    "Letrozol könnyebben crashed E2-t okoz mint Anastrozol — kezdjen alacsonyabb dose-zal",
    "Vízzel + reggel, étkezés indifferens (orális biodostupnošć ~85%)"
  ],
  "expectations": [
    {"label": "1-3. nap", "body": "E2 drasztikus csökkenés (~70-90%), gyno-tüneti enyhülés érzékelhető. Egyes felhasználón vízretenció gyors csökkenés → tisztább lookouts."},
    {"label": "1-2. hét", "body": "Plateau szérum-E2 <5 pg/mL leggyakrabban (crashed-E2 rizikó magas). Gyno-szövet regresszió kezdődik (ha gyno-reverzálás cél). Lipid-panel monitor: HDL-drop és LDL-emelkedés várt."},
    {"label": "Gyno-reverzálás 21. nap után", "body": "Taper-protokoll indítás: 1.25 mg → 0.625 mg → 0.25 mg, 5-7 napos lépcsőkben. Gland-tissue regresszió mértéke individuális; ha 3 hét után nincs változás, sebészi eltávolítás (gynectomy) szakorvosi konzultáció."},
    {"label": "Leállítás után", "body": "E2 24-72 óra alatt visszatér baseline-re (~42 óra felezés). Rebound enyhe lehet (gyno-relapse rizikó ha taper nélkül megszakad)."}
  ],
  "quality": {
    "pure": [
      "Novartis Femara 2.5 mg blister, Rx-szer pharma-minőség (EU-pharmacy elérhető)",
      "Letrozol-ratiopharm, Letrozol Teva, Letrozol Sandoz generic (EU)",
      "Indiai generikum (Sun Pharma, Cipla Letroz 2.5 mg)",
      "UGL liquid letrozole: HPLC-tested forrás kötelező — gyakran 30 mg/mL és túldozírozás-rizikó"
    ],
    "caution": [
      "Crashed E2 könnyebben mint Anastrozolon — extra óvatosság AI-naive felhasználón",
      "Lipid-panel drasztikus romlás 2.5 mg/nap chronic — HDL-drop akár 30%, LDL-emelés 15-25%",
      "BMD long-term stresszor — gyno-reverzálás 3 hetes protokoll alatt elhanyagolható, chronic-use DEXA monitor",
      "CYP3A4-induktor/-gátló interakciók (mint Anastrozol)",
      "Tamoxifen co-administration: ellenjavalt (overlap-mechanism + E2-crash)"
    ],
    "avoid": [
      "Premenopauzális női AAS-használat (ovulációs disfunkció)",
      "Pregnancy / breastfeeding (Pregnancy Category X)",
      "Súlyos hepatikus insufficiencia",
      "Prophylactic AAS-ciklus-eleji Letrozol baseline nélkül (crashed-E2 magas rizikó)",
      "AI-naive felhasználón teljes 2.5 mg/nap-tól indítás (kezdjen 0.25 mg-tól)"
    ]
  },
  "interactions": [
    "Tamoxifen (Nolvadex): NEM ajánlott együtt PCT-ben — overlap-mechanism, E2-crash rizikó",
    "Testosterone + Tren stack: standard hard-suppression E2-control",
    "Dianabol/Anadrol stack: Letrozol erős hatású erős aromatáció ellen",
    "Methylated 17α-alkilált oral steroidek: hepatikus stressz kettős monitor",
    "Statinok: lipid-panel kettős monitor + statin-dose-csökkentés mérlegelhető",
    "Alkohol: hepatikus stressz mild, mértékletes fogyasztás OK"
  ],
  "studies": [
    {"title": "A comparison of letrozole and tamoxifen in postmenopausal women with early breast cancer.", "authors": "Breast International Group (BIG) 1-98 Collaborative Group, Thürlimann B, Keshaviah A, Coates AS, Mouridsen H, Mauriac L, Forbes JF, Paridaens R, Castiglione-Gertsch M, Gelber RD, Rabaglio M, Smith I, Wardley A, Price KN, Goldhirsch A", "journal": "N Engl J Med", "pmid": "16382061"},
    {"title": "The discovery and mechanism of action of letrozole.", "authors": "Bhatnagar AS", "journal": "Breast Cancer Res Treat", "pmid": "17912633"},
    {"title": "Longer-term outcomes of letrozole versus placebo after 5 years of tamoxifen in the NCIC CTG MA.17 trial: analyses adjusting for treatment crossover.", "authors": "Jin H, Tu D, Zhao N, Shepherd LE, Goss PE", "journal": "J Clin Oncol", "pmid": "22042967"},
    {"title": "Influence of letrozole and anastrozole on total body aromatization and plasma estrogen levels in postmenopausal breast cancer patients evaluated in a randomized, cross-over study.", "authors": "Geisler J, Haynes B, Anker G, Dowsett M, Lønning PE", "journal": "J Clin Oncol", "pmid": "11821457"}
  ],
  "faq": [
    {"q": "Letrozol vs Anastrozol — miért stronger?", "a": "Két faktor: (1) Az intramuszkuláris aromatáz-szövetekben magasabb penetráció — a Geisler 2002 head-to-head trial dokumentálta, hogy a Letrozol perifériás aromatáz-szuppressziója ~2-3-szor erősebb, mint az Anastrozol-é (in vivo measurement). (2) Erősebb enzim-szintű kötés-stabilitás (Ki ~5-10 nM vs Anastrozol ~15 nM). Praktikusan: az ekvivalens-dose Anastrozol 1 mg ≈ Letrozol 0.25-0.5 mg. AI-naive felhasználónak Anastrozol-ekvivalens fél-dose-zal érdemes indítani Letrozolon."},
    {"q": "Gynecomastia-reverzálás protokoll részletesen?", "a": "Cél: létező gland-tissue regresszió (NEM csak E2-szint csökkentés). Protokoll: Letrozol 2.5 mg/nap × 14-21 nap (rövid hard-hit), majd taper 1.25 mg → 0.625 mg → 0.25 mg, 5-7 napos lépcsőkben. Adjuváns: Raloxifene 60 mg/nap (mell-szelektív SERM, gyno-gland antagonist) konkurrensen. Eredmény: ha gland-tissue <6 hónap koru → 60-80% regresszió, ha >12 hónap koru → 20-40% regresszió (sebészi gynectomy lehet szükséges). Pre-treatment ultrahang vizsgálat indokolt — confirm gland-tissue presence (vs fat-only pseudogynecomastia)."},
    {"q": "Crashed E2 mortalkockázat? Maradandó?", "a": "Nem mortalkockázat-szintű, de szignifikáns életminőség-romlás. Tünetek: ízületi fájdalom (csukló + térd), libidó-zuhanás, lipid-disaster (HDL <30 mg/dL), depresszív hangulat. Reverzibilis 1-2 hét leállítás után. Ha taper nélkül és <14 nap → maradandó hatás extrém ritka. Hosszú távú használat (3+ hónap chronic) BMD-veszteséget okoz — DEXA monitor szükséges. Letrozol mortal-rizikó: rare (FDA Femara label: cardiovascular events 5-7% incidencia 5 éves trial — DE 60+ évű női populáción, nem AAS-PCT férfiakon)."},
    {"q": "Tier-4 — miért nem tier-5?", "a": "Letrozol valamivel újabb mint Anastrozol (1997 vs 1995 FDA), és valamivel rövidebb klinikai irodalom. Mindkét vegyület tier-4 — az Anastrozol az alapértelmezett első-vonalbeli AI (tier-4 alapja), a Letrozol a niche-választás hard-suppression vagy gyno-reverzálás szituációkban. A tier-5 a Nolvadex-szintű 50+ év érettség (Letrozol ~28 év, még nem elég)."}
  ],
  "related": ["anastrozol", "exemestane", "nolvadex", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.625, "high": 1.25},
    "unit": "mg / EOD (orális, bloodwork-titrálva)",
    "note": "Standard AAS-E2-control hard-suppression: 0.25-1.25 mg EOD bloodwork-titrálva. Gyno-reverzálás: 2.5 mg/nap × 14-21 nap, majd taper-protokoll (1.25 → 0.625 → 0.25 → 0). Letrozol erősebb mint Anastrozol — AI-naive felhasználón fél-dose-tól indítás."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Letrozol-indítás előtt",
      "timing": "Ciklus 3-4. hét vagy gyno-symptom-onset",
      "markers": "E2 LC-MS/MS sensitive-assay (NEM ECL), Total/Free Testosterone, SHBG, lipid panel, ALT/AST, hemogram, kreatinin.",
      "purpose": "Baseline. Letrozol-indítás indikációja: hard-suppression Tren+Mast stack vagy gyno-reverzálás. Anastrozol-naive felhasználón fél-dose-tól indítás."
    },
    "midCycle": {
      "label": "Letrozol 10-14. nap",
      "timing": "Letrozol-indítás +10-14 nap",
      "markers": "E2 LC-MS/MS (re-test), lipid panel, ALT/AST.",
      "purpose": "Titration confirm: E2 20-30 pg/mL target. Crashed E2 (<15 pg/mL) → pause azonnal. Lipid-panel monitor: HDL-drop és LDL-emelés érzékelhető."
    },
    "postCycle": {
      "label": "Letrozol vége / taper-utáni recovery",
      "timing": "Utolsó dose +2 hét",
      "markers": "E2, Total/Free Test, lipid panel, ALT/AST, BMD ha chronic-use volt.",
      "purpose": "Confirm: E2 baseline-re visszatér (24-72 óra rebound nélkül). Lipid-panel recovery monitor (HDL-rebound ~2-4 hét)."
    },
    "cruise": {
      "label": "Hosszú távú használat — nem AAS-kontextus",
      "timing": "Női adjuváns 5-10 év; AAS-PCT max 14-21 nap gyno-reverzálás",
      "markers": "Cruise AAS-kontextusban N/A.",
      "purpose": "AAS-PCT-ben cruise NEM ajánlott — Letrozol akut hard-hit indikációkban használt, nem hosszú távú E2-control-ra (BMD-vesztés rizikó)."
    }
  }
}
