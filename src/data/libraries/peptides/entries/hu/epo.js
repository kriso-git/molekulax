// EPO (Epogen / Procrit / Aranesp / Mircera) – Eritropoietin, klinikai-CKD-anémia
// framing primary, WADA-tiltott endurance-doping kontextus secondary. Források:
// FDA Epogen SmPC (Amgen 1989), EMA EPREX SPC, KDIGO 2024 Anemia Guidelines,
// Lundby 2011 EPO normal humans PMID 20807784, Lippi 2006 blood-doping
// review PMID 16769597, Jacobs 2005 ESAM 2003 survey PMID 15824128.

export default {
  "id": "epo",
  "name": "EPO",
  "image": "/peptides/epo.png",
  "accentColor": "#f87171",
  "tagColor": "rgba(248,113,113,0.16)",
  "shortDesc": "Eritropoietin – EPO-receptor agonist 165-AA glikoprotein. CKD-anémia kezelése (klinikai Rx); WADA-szigorúan tiltott endurance-doping kontextusban.",
  "description": "Az eritropoietin (EPO) egy 165-aminosav-glikoprotein-citokin (~30 kDa), endogén termelője a vese peritubuláris interstíciális sejtjei (~90%) és kis mértékben a máj (~10%). Az exogén rekombináns EPO-t (rhEPO) Amgen 1989-ben FDA-engedélyt kapott Epogen (epoetin-alfa) néven a krónikus vesebetegség (CKD) okozta anémia kezelésére – ez volt az első igazi rekombináns terápiás peptid-blockbuster. Mechanizmus: az EPO az erythroid progenitor sejtek (csontvelő BFU-E + CFU-E) felszínén lévő EPO-receptorhoz (EPO-R) köt → JAK2/STAT5 jelátviteli kaszkád aktiváció → erythroid túlélés + proliferáció + differenciáció → RBC-tömeg + hematokrit + oxigénszállító-kapacitás növekedés. **Klinikai Rx kontextus (primary, ~75% használat)**: CKD-anémia (dialízis + pre-dialízis), kemoterápia-indukált anémia (Procrit), HIV-AZT-anémia, premie születésű csecsemők anémiája. Cél-Hb 10-12 g/dL – KDIGO 2024 cautions against Hb >12-13 g/dL targeting (TREAT, CHOIR, CREATE trial-adatok: magasabb-target → cardiovascular events + stroke-rizikó). **Endurance-doping kontextus (secondary, NEM ajánlott)**: micro-dose protokollok 100-300 IU/kg/hét documented az 1990-es évek óta (Lance Armstrong-éra), WADA-szigorúan tiltott S2.1 Erythropoietin-mimetic agents kategóriában EGÉSZ ÉVBEN (in + out-of-competition). Detektálás: szérum/vizelet izoform-analízis (IEF + SDS-PAGE) + biológiai útlevél hematokrit-tracking. Források: epoetin-alfa (Epogen Amgen, Procrit Janssen – azonos molekula), darbepoetin-alfa (Aranesp Amgen – hiperglikozilált, hosszabb t1/2), methoxy-PEG-epoetin-beta (Mircera Roche – PEGylated, havi adagolás). **KÖTELEZŐ bloodwork**: Hb, Hct, ferritin, transferrin-saturation, retikulocita-szám, vérnyomás (hipertónia-rizikó szignifikáns).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "EPO-receptor (EPO-R) agonist erythroid progenitor sejteken → JAK2/STAT5 → RBC-tömeg + Hct emelés"
    },
    {
      "label": "Adagolás (CKD epoetin-alfa)",
      "value": "50-100 IU/kg SC 3x/hét, target Hb 10-12 g/dL"
    },
    {
      "label": "Adagolás (darbepoetin)",
      "value": "0.45-0.75 mcg/kg SC hetente vagy 2-hetente"
    },
    {
      "label": "Felezési idő",
      "value": "Epoetin-alfa 4-13h SC / Darbepoetin 70-138h / Mircera ~135h"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (CKD-anémia, kemo-anémia), WADA S2.1 STRICTLY BANNED (in + out-of-competition)"
    },
    {
      "label": "Kötelező bloodwork",
      "value": "Hb, Hct, ferritin, transferrin-sat, retikulocita-szám, vérnyomás"
    }
  ],
  "mechanism": "Az eritropoietin egy 165-aminosav-egyláncú glikoprotein (~30 kDa, 3 N-glikozilációs + 1 O-glikozilációs hely), molekulatömegének ~40%-a glikán-cukrokból áll – a glikoziláció kritikus a t1/2 + receptor-affinitás-szabályozáshoz. Endogén termelés: vese peritubuláris interstíciális fibroblaszt-sejtek HIF-2α (Hypoxia-Inducible Factor) szabályozás alatt → hipoxia / vérzés → HIF-stabilizáció → EPO-gén-transzkripció. Receptor-binding: EPO-R homodimer az erythroid progenitor sejteken (csontvelő BFU-E korai progenitor + CFU-E késői progenitor + proeritroblaszt) → konformáció-változás → JAK2-aktivációja (cross-phosphorylation) → STAT5 + PI3K/AKT + MAPK downstream pathway-k → BCL-XL antiapoptotikus expresszió + sejtciklus-progresszió + globin-gén-transzkripció. Net effekt: erythroid lineage túlélés + osztódás + hemoglobinizáció → érett RBC-k kiáramlása a perifériás vérbe. CKD-kontextusban a vese-károsodás miatt csökken az endogén EPO-termelés → normocita-normokróm anémia → exogén rhEPO replaceli a hiányzó hormont. Doping-kontextusban a már normális EPO-szintű egészséges egyén EPO-injekciója → szupraphysiológiás eritropoiezis → Hct 50-60%+ → vér-viszkozitás-emelkedés → tromboembóliás + cardiovascular rizikó.",
  "legalStatus": "USA: FDA Rx Epogen (Amgen 1989, epoetin-alfa), Procrit (Janssen, epoetin-alfa azonos molekula), Aranesp (Amgen 2001, darbepoetin-alfa), Mircera (Roche 2007, methoxy-PEG-epoetin-beta). Indikációk: CKD-anémia (dialízis + pre-dialízis), kemoterápia-indukált anémia, HIV/AZT-anémia, peri-operatív autológ vér-donáció support, premie születésű csecsemők anémiája. EU: EMA Rx (EPREX/Erypo Janssen, NeoRecormon Roche, Binocrit Sandoz biosimilar, Aranesp, Mircera). HU + PL: törzskönyvezett (EPREX, NeoRecormon, Aranesp Rx, csak hematológus/nefrológus felírhatja). WADA: S2.1 Erythropoietin-mimetic agents – **STRICTLY BANNED EGÉSZ ÉVBEN** (in-competition + out-of-competition, minden sportágra). WADA-akkreditált laborok izoform-analízissel (IEF, SDS-PAGE) + biológiai útlevél (ABP) Hct-tracking detektálják.",
  "onsetTime": "Retikulocita-válasz 3-5 nap, mérhető Hb-emelkedés 2-6 hét",
  "halfLife": "Epoetin-alfa 4-13h SC (IV ~6-8h); Darbepoetin-alfa 70-138h SC; Mircera (methoxy-PEG-epoetin-beta) ~135h SC",
  "halfLifeActive": "Epoetin-alfa farmakodinámiás effekt 5-7 nap; Darbepoetin 2-3 hét; Mircera 4 hét (havi adagolás)",
  "interactionsWith": [
    "hgh",
    "igf-1-lr3",
    "tesamorelin",
    "mots-c"
  ],
  "aromatization": "N/A – nem szteroid, fehérje-alapú citokin, nem aromatizál.",
  "hepatotoxicity": "Nincs hepatikus stressz – szubkután (SC) vagy intravénás (IV) injekció, NEM oral, NEM 17α-alkilált. Hepatic enzyme rise nem dokumentált klinikai trial-database-en (Epogen + Aranesp safety-data 30+ év).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS; erythroid stimulus)",
  "bindingAffinity": "EPO-R receptor-affinitás Kd ~100-200 pM. Darbepoetin-alfa: ~4x csökkent receptor-affinitás vs epoetin-alfa, DE 3x hosszabb t1/2 a hiperglikozilációból → net biológiai aktivitás magasabb. Mircera (PEGylated): tovább csökkent receptor-affinitás + havi adagolás-kompatibilis.",
  "detectionWindow": "WADA-akkreditált izoform-analízis (IEF + SDS-PAGE Western blot): epoetin-alfa 3-7 nap a vizeletben single bolus után; darbepoetin 7-14 nap (hiperglikozilációs banding-pattern eltérő az endogén EPO-tól); Mircera 30+ nap (PEG-tag fingerprint). Biológiai útlevél (ABP): Hct + retikulocita-szám longitudinális tracking → szupraphysiológiás csúcsok flag-elése (akkor is, ha a single-sample analízis negatív).",
  "benefits": [
    "CKD-anémia korrekció (Hb 8 → 10-12 g/dL, transfúzió-igény drasztikus csökkenése, életminőség-javulás)",
    "Kemoterápia-indukált anémia kezelés (Procrit on-label, transfúzió-mentesítés)",
    "Premie születésű csecsemők anémiája (transfúzió-elkerülés)",
    "Peri-operatív autológ vér-donáció support (Jehova's Witness patient-szegmens)",
    "HIV-AZT-anémia korrekció (zidovudin-okozta csontvelő-szuppresszió)",
    "Klinikai trial-database széles (35+ év Epogen óta, KDIGO + KDOQI guideline-támogatás)"
  ],
  "quickStart": [
    "**CSAK orvosi felügyelet alatt indítható**. Pre-indítás KÖTELEZŐ: ferritin >100 ng/mL + transferrin-sat >20% (vas-pótlás MANDATORY EPO-iniciáció előtt, máskülönben funkcionális vashiány + non-responder)",
    "Epoetin-alfa CKD-indítás: 50-100 IU/kg SC 3x/hét, target Hb 10-12 g/dL (NEM magasabb – CHOIR/TREAT-trial CV-rizikó)",
    "Darbepoetin-alfa: 0.45 mcg/kg SC hetente VAGY 0.75 mcg/kg SC 2-hetente",
    "Mircera: 0.6 mcg/kg SC havonta (stabil chronic patient)",
    "Vérnyomás-monitor MINDEN VIZITRE (EPO-okozta hipertónia 20-30% incidencia, ACE-inhibitor co-admin gyakran szükséges)",
    "Bloodwork hetente az első hónapban (Hb, Hct), majd 2-hetente; ferritin + transferrin-sat 3-havonta; havonta vérnyomás"
  ],
  "expectations": [
    {
      "label": "1-3. nap",
      "body": "Retikulocita-emelkedés mérhető (csontvelői response-kezdet). Klinikai tünet még nem érzékelhető. Vas-status-rebound monitor (funkcionális vashiány alakulhat ki)."
    },
    {
      "label": "2-6. hét",
      "body": "Hb-emelkedés ~1 g/dL/2-4 hét (lassú-target-titrálás biztonságosabb mint gyors). CKD-tünetek (fáradtság, dyspnoe) javulnak. Vérnyomás-emelkedés watchout."
    },
    {
      "label": "Target Hb 10-12 g/dL elérés",
      "body": "Fenntartó-dosing (általában 1/3-1/2 indítási dose) chronic. NEM cél magasabb Hb-érték (>12 g/dL CV-event-rizikó, CHOIR/CREATE-trial)."
    },
    {
      "label": "Long-term chronic",
      "body": "Stabil Hb 10-12 g/dL maintenance. Quartely full panel: Hb, Hct, ferritin, transferrin-sat, vas-pótlás titrálás, vérnyomás-management."
    }
  ],
  "quality": {
    "pure": [
      "Epogen (Amgen) – golden-standard FDA-approved 1989, pharma-grade Rx",
      "Procrit (Janssen) – azonos molekula mint Epogen, márkanév-eltérés",
      "EPREX/Erypo (Janssen EU) – EMA-approved epoetin-alfa",
      "Aranesp (Amgen) – darbepoetin-alfa, hetente/2-hetente adagolás",
      "Mircera (Roche) – methoxy-PEG-epoetin-beta, havi adagolás",
      "Binocrit (Sandoz), Retacrit (Hospira) – EMA-approved biosimilarok",
      "UGL liquid EPO – KERÜLENDŐ, glikoziláció-pattern critical, hidegláncot eltört source → biológiai aktivitás drasztikus csökkenése"
    ],
    "caution": [
      "Hipertónia-rizikó szignifikáns (20-30% incidencia), ACE-inhibitor / ARB co-admin gyakran szükséges",
      "Tromboembóliás rizikó (DVT, stroke, MI) magasabb Hct-target-en (>12-13 g/dL)",
      "Tiszta vörösvérsejt-aplázia (PRCA) ritka anti-EPO antitest-mediated szövődmény (EPREX 1998-2002 PRCA-cluster, formuláció-változtatás után csökkent)",
      "Funkcionális vashiány: EPO-iniciáció előtt ferritin >100 ng/mL + transferrin-sat >20% MANDATORY",
      "Kemoterápia-indukált anémia: ESA-iniciáció tumor-progression-rizikóval járhat egyes szolid tumoroknál (FDA black-box warning)"
    ],
    "avoid": [
      "Kontrollálatlan hipertónia (vérnyomás-stabilizáció EPO-előtt KÖTELEZŐ)",
      "Anamnézisben EPO-iniciálta tiszta vörösvérsejt-aplázia (PRCA)",
      "Hb >12 g/dL target – CHOIR/TREAT/CREATE-trial-evidence alapján CV-event-rizikó-növekedés",
      "Doping-célú használat – WADA-szigorúan tiltott, lifetime-ban-rizikó, cardiovascular event-rizikó (Hct >55% → vér-viszkozitás-katasztrófa)",
      "Aktív malignus betegség curative-intent kemoterápián (ASCO/ASH 2019 guideline: ESA-kerülendő)"
    ]
  },
  "interactions": [
    "Vas-pótlás MANDATORY co-admin (oral ferrous-sulfate 100-200 mg/nap VAGY IV ferrum-carboxymaltose / ferric-gluconate – CKD-patient-nél IV preferált, ferritin >100 + sat >20% target EPO-iniciáció előtt)",
    "ACE-inhibitor / ARB co-admin gyakran szükséges EPO-okozta hipertónia management (perindopril, ramipril, losartan, valsartan)",
    "Egyéb erythropoietikus szerek stacking KERÜLENDŐ (két ESA-t együtt NEM)",
    "Heparin / antikoaguláns co-admin: dialízis-circuit-clotting megelőzés (Hct-emelkedés → clotting-rizikó-növekedés)",
    "Kemoterápia (cisplatin, ciklofoszfamid): nephrotoxikus drug-ok EPO-igényt növelhetik, dose-titrálás",
    "Egyéb peptid (HGH, IGF-1, BPC-157, Tesamorelin): nincs direkt interakció, DE EPO-doping-kontextusban stacking → szupraphysiológiás Hct → katasztrofális CV-rizikó"
  ],
  "studies": [
    {
      "title": "Effects of recombinant human erythropoietin in normal humans",
      "authors": "Lundby C, Olsen NV.",
      "journal": "J Physiol. 2011;589(Pt 6):1265-71.",
      "pmid": "20807784"
    },
    {
      "title": "Results of the European Survey on Anaemia Management 2003 (ESAM 2003): current status of anaemia management in dialysis patients, factors affecting epoetin dosage and changes in anaemia management over the last 5 years",
      "authors": "Jacobs C, Frei D, Perkins AC.",
      "journal": "Nephrol Dial Transplant. 2005;20 Suppl 3:iii3-24.",
      "pmid": "15824128"
    },
    {
      "title": "Correction of anemia with epoetin alfa in chronic kidney disease (CHOIR trial)",
      "authors": "Singh AK, Szczech L, Tang KL, et al.",
      "journal": "N Engl J Med. 2006;355(20):2085-98.",
      "pmid": "17108343"
    }
  ],
  "faq": [
    {
      "q": "Miért tiltja a WADA olyan szigorúan az EPO-t?",
      "a": "Az EPO az endurance-sportokban a legdrámaibb teljesítmény-növelőnek számít: a VO2max-ot 8-12%-kal emeli (Lundby 2007 trial), ami ~30 másodperces előny egy 5 perces időfutamban. A WADA S2.1 Erythropoietin-mimetic agents kategóriában **EGÉSZ ÉVBEN** tiltott (in-competition + out-of-competition), MINDEN sportágra. Detektálás: izoform-analízis (IEF + SDS-PAGE) – a rekombináns EPO eltérő glikozilációs-banding-mintát mutat mint az endogén; biológiai útlevél (ABP) – longitudinális Hct + retikulocita-szám tracking flag-eli a szupraphysiológiás csúcsokat. Lance Armstrong + a Festina-affér (1998 Tour de France) demonstrálták az EPO-doping történelmi-szerepét. Cardiovascular rizikó (Hct >55% → vér-viszkozitás-katasztrófa → tromboembólia, MI, stroke) szintén indok a tiltásra."
    },
    {
      "q": "Milyen bloodwork kötelező EPO-iniciáció előtt?",
      "a": "**EPO-iniciáció előtt MANDATORY**: (1) Hb + Hct (anémia konfirmáció + súlyosság), (2) Ferritin >100 ng/mL (vas-raktár adekvát – máskülönben funkcionális vashiány alakul ki EPO-on, non-responder), (3) Transferrin-saturation >20% (vas-transport adekvát), (4) Retikulocita-szám (csontvelő-response-kapacitás baseline), (5) Vérnyomás (kontrollálatlan hipertónia kontraindikáció – EPO 20-30% incidenciával emeli a vérnyomást), (6) Vesefunkció (eGFR, kreatinin – CKD-staging), (7) CRP / ESR (gyulladás → funkcionális vashiány alakulhat ki ESA-resistance), (8) B12 + folát (egyéb anémia-okok kizárása), (9) Vérkép-differential (mieloproliferatív szindróma kizárása). **Long-term chronic monitoring**: Hb + Hct hetente induláskor majd havonta; ferritin + transferrin-sat 3-havonta; vérnyomás minden vizitre."
    },
    {
      "q": "Mekkora a hipertónia-rizikó?",
      "a": "Szignifikáns. Az EPO-iniciáción a betegek 20-30%-ánál alakul ki új-onset hipertónia vagy meglévő hipertónia rosszabbodása. Mechanizmus: (1) RBC-tömeg-növekedés → vér-viszkozitás-emelkedés → perifériás vaszkuláris rezisztencia-emelkedés, (2) direkt vaszkuláris endothel-hatás (EPO-R az endotheliumon is) → vasoconstriction + endothelin-1-emelés, (3) Na+-retenció részleges hozzájárulás. Klinikai kezelés: pre-EPO baseline-vérnyomás stabilizáció (<140/90 mmHg), ACE-inhibitor (perindopril, ramipril) vagy ARB (losartan, valsartan) co-admin szükséges esetén, Hb-target-cap 10-12 g/dL (NEM magasabb – CHOIR/CREATE-trial CV-event-evidence). Hipertenzív krízis (>180/110 mmHg) → EPO-stop azonnal."
    },
    {
      "q": "Miért 12 g/dL a cél Hb-érték (és nem magasabb)?",
      "a": "Három pivotális randomizált klinikai trial (CHOIR 2006 PMID 17108343, CREATE 2006, TREAT 2009) bizonyította, hogy a magasabb Hb-target (13.5-14 g/dL) szignifikánsan emeli a cardiovascular event (MI, stroke, halál, hospitalization heart failure miatt) rizikót CKD-patient-nél vs a 10.5-11.5 g/dL target. CHOIR (N=1432): magas-target karban 17.5% composite CV-event vs alacsony-target 13.5% (HR 1.34, p=0.03). TREAT (N=4038, darbepoetin): magas-target karban 5% stroke vs placebo 2.6% (HR 1.92). KDIGO 2024 Anemia Guideline ezért **erősen** ajánlja a Hb-target 10-12 g/dL (NEM 13+), és ESA-dose-titrálás Hb-emelkedési-rátára (≤1 g/dL/2 hét) is. Mechanizmus-hipotézis: szupraphysiológiás Hct → vér-viszkozitás-emelkedés → tromboembóliás-rizikó; EPO-mediated platelet-aktiváció + endothelin-1; iatrogén hipertónia."
    },
    {
      "q": "Epoetin-alfa vs Darbepoetin vs Mircera – melyik mikor?",
      "a": "Mind a három EPO-R agonist, eltérő farmakokinetikával. **Epoetin-alfa (Epogen/Procrit/EPREX)**: rövidebb t1/2 (4-13h SC), 3x/hét adagolás, golden-standard 35+ év safety-data. **Darbepoetin-alfa (Aranesp)**: hiperglikozilált (5 N-glikozilációs hely vs natív 3), t1/2 70-138h SC, hetente vagy 2-hetente adagolás → patient-convenience előny, stabil chronic CKD-nél preferált. **Mircera (methoxy-PEG-epoetin-beta)**: PEGylated, t1/2 ~135h SC, **havonta** adagolás → maximum patient-convenience, stabil chronic dialízis-patient-eknél standard-of-care. Klinikai effektivitás közel azonos (NeoRecormon/EPREX/Aranesp/Mircera head-to-head trial-ek non-inferiority). Választás: patient-compliance + adagolási-convenience + költség alapján (Mircera drágább, de havi pin → adherence-előny)."
    }
  ],
  "related": [
    "epo-info",
    "hgh",
    "igf-1-lr3",
    "tesamorelin",
    "mots-c"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 100,
      "high": 150
    },
    "unit": "IU/kg/dose epoetin-alfa SC (klinikai CKD-anémia protokoll)",
    "note": "**Epoetin-alfa CKD**: 50-100 IU/kg SC 3x/hét, target Hb 10-12 g/dL. **Darbepoetin-alfa**: 0.45 mcg/kg SC hetente VAGY 0.75 mcg/kg SC 2-hetente. **Mircera**: 0.6 mcg/kg SC havonta. **KÖTELEZŐ pre-iniciáció**: ferritin >100 ng/mL + transferrin-sat >20% (vas-pótlás). **Cap**: Hb-emelkedés ≤1 g/dL/2 hét, target NEM magasabb mint 12 g/dL (CHOIR/TREAT CV-evidence). **Doping-célú használat KONTRAINDIKÁLT** – WADA-szigorúan tiltott, cardiovascular katasztrófa-rizikó."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-iniciáció (EPO-start előtt)",
      "timing": "EPO-iniciáció előtt 1-2 hét",
      "markers": "Hb, Hct, ferritin (>100 ng/mL target), transferrin-saturation (>20% target), retikulocita-szám, vérnyomás (<140/90 mmHg stabilizáció), eGFR + kreatinin, CRP/ESR (gyulladás), B12 + folát, vérkép-differential, lipid panel, vérnyomás-napló.",
      "purpose": "Anémia-súlyosság baseline + vas-status adekvát (funkcionális vashiány-prevention) + hipertónia-kontroll + egyéb anémia-okok kizárása."
    },
    "midCycle": {
      "label": "Induló fázis (első 1-3 hónap)",
      "timing": "Hetente Hb + Hct + vérnyomás; 4-hetente ferritin + transferrin-sat",
      "markers": "Hb (Hb-emelkedés ≤1 g/dL/2 hét target), Hct, vérnyomás (minden vizitre, EPO-hipertónia-watch), ferritin + transferrin-sat (vas-status-rebound), retikulocita-szám.",
      "purpose": "Hb-emelkedési-ráta monitor (gyors-emelkedés → CV-event-rizikó), vas-status fenntartás (EPO felemészti a vas-raktárt, vas-pótlás titrálás), hipertónia-detekció."
    },
    "postCycle": {
      "label": "Fenntartó fázis (Hb 10-12 g/dL target stabilis)",
      "timing": "Havonta Hb + Hct + vérnyomás; 3-havonta ferritin + transferrin-sat",
      "markers": "Hb (10-12 g/dL stabil), Hct, vérnyomás, ferritin (raktár-fenntartás), transferrin-sat, eGFR (CKD-progresszió), KDIGO-quarterly comprehensive metabolic panel.",
      "purpose": "Long-term EPO-dose stabil, vas-pótlás titrálás, vérnyomás-management, CKD-progresszió-tracking."
    },
    "cruise": {
      "label": "Chronic dialízis-patient (long-term Mircera havi pin)",
      "timing": "Havonta Hb + Hct + vérnyomás; quarterly full panel",
      "markers": "Full hematológiai panel + vas-status + KDIGO-CKD-MBD panel (Ca, P, PTH, vit-D) + lipid + vérnyomás-napló.",
      "purpose": "Stabil dialízis-patient long-term ESA-management, KDIGO 2024 guideline-compliance."
    }
  },
  "anecdote": null
}
