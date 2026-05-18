// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.945Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "dianabol-info",
  "name": "Dianabol",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methandrostenolone, 17α-alkilált orális AAS. Klasszikus \"kickstart\" bulking szteroid, magas hepatotoxicitással.",
  "description": "A Dianabol (Methandrostenolone) az első tömegesen forgalmazott orális AAS, John Bosley Ziegler szintetizálta 1955-ben az amerikai súlyemelő válogatott számára. 17α-alkilezett orális vegyület, gyors vízretenciós izomtömeg-növekedést okoz. **\"Wet gain\" mítosz revíziója**: a Dianabol-on tapasztalt súlygyarapodás nagy része nem szubkután extracelluláris edema, hanem INTRAMUSZKULÁRIS glikogén-tárolás + cell volumization (intracelluláris hidratáció). A cell swelling önmagában anabolikus jel (Häussinger hipotézis: a sejt-térfogat növekedés mTOR-szignált aktivál és protein-szintézist serkent), ezért a \"vizes\" megjelenés mögött valós, produktív anabolikus folyamat áll. \"Kickstart\" használat 4-6 hét, hosszabb-hatású injekciós AAS-ek mellé. Aromatizál, ami E2-növelést + gyno + vízretenció kockázatot ad — DE a Dianabol egy szokatlanul potens, **anastrozole-rezisztens 17α-methylestradiol metabolitot** is képez aromatáz-katalízissel, ezért gyno-kockázat magas még AI mellett is, és klasszikus AI-titrációs stratégia (anastrozole 0,5 mg EOD) kevésbé hatékony mint Testosterone-on. Hepatotoxicitás magas (ALT/AST jelentősen emelkedik), 17α-alkilezett első-pass metabolizmus miatt.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista, 17α-alkilezett, aromatizál"
    },
    {
      "label": "Felezési idő",
      "value": "3-6 óra"
    },
    {
      "label": "Anabolikus arány",
      "value": "210:60"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: Schedule III. EU: Rx korlátozott."
    }
  ],
  "mechanism": "17α-alkilezett AR-agonista. Aromatáz E2-vé ÉS 17α-methylestradiol-é konvertálja (utóbbi szokatlanul potens, anastrozole-rezisztens metabolit → magas gyno-kockázat még AI mellett is). 5α-reduktáz minimálisan aktiválja DHT-szerű metabolittá. Intracelluláris glikogén-szintézis + cell volumization közvetett anabolikus jel (mTOR-aktiválás).",
  "legalStatus": "USA: Schedule III. HU/EU: vény nélkül illegális, gyógyszertári forgalom megszűnt. WADA: tiltott.",
  "onsetTime": "3-7 days",
  "halfLife": "3-6 h",
  "interactionsWith": [
    "aromatase inhibitors",
    "alcohol",
    "NSAIDs"
  ],
  "wadaStatus": "banned",
  "androgenicRatio": "210:60",
  "benefits": [
    "Gyors izomtömeg + vízretenció (3-5 kg / 4 hét)",
    "Erő-növekedés \"kickstart\" cikluson",
    "Mood elevation (dopaminerg + ösztrogén-mediált): \"kickstart\"-fázis gyakori felhasználói visszajelzés, eufórikus drive + edzés-motiváció emelkedés"
  ],
  "studies": [
    {
      "title": "Methandrostenolone effects on body composition and strength",
      "authors": "Hervey GR, Knibbs AV, Burkinshaw L et al.",
      "journal": "Clin Sci. 1981;60(4):457-461.",
      "pmid": "6263593"
    },
    {
      "title": "Cholestatic hepatitis associated with methandrostenolone",
      "authors": "Søe KL, Søe M, Gluud C.",
      "journal": "Pharmacol Toxicol. 1992;70(4):293-294.",
      "pmid": "1502619"
    },
    {
      "title": "Anabolic steroid cardiovascular toxicity",
      "authors": "Baggish AL, Weiner RB, Kanayama G et al.",
      "journal": "Circulation. 2017;135(21):1991-2002.",
      "pmid": "28533317"
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 20,
      "medium": 30,
      "high": 50
    },
    "unit": "mg/nap",
    "note": "\"Kickstart\" 4-6 hét, hosszabb-hatású injekciós AAS-ek mellé. Naponta 2-3x felosztott dózis a rövid felezési idő (3-6 óra) miatt. Aromatáz-inhibitor (anastrozol 0.5 mg EOD) gyakran szükséges az E2-emelkedés miatt. TUDCA 500-750 mg/nap májvédő."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2 héttel előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin, INR. Plus: lipid, hormon-panel, E2, vesefunkció.",
      "purpose": "Máj-baseline. Dianabol ALT/AST baseline-emelt esetén kontraindikált."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2-3. hét",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel (HDL drasztikus csökkenés), E2, vérnyomás.",
      "purpose": "ALT/AST >3x = ciklus-megszakítás. E2 emelkedés = AI (anastrozol 0.5 mg EOD)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT 4. + 8-12. hét",
      "markers": "Total T, Free T, LH, FSH, E2, hepatikus + lipid recovery.",
      "purpose": "HPTA + hepatikus recovery verifikálás."
    },
    "cruise": null
  }
}
