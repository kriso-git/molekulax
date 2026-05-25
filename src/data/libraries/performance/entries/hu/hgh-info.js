// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.946Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "hgh-info",
  "name": "HGH",
  "image": "/performance/water-vial.png",
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Rekombináns humán növekedési hormon (rhGH, Somatropin). Exogén GH-pótlás, sport-doppingként WADA-tiltott.",
  "description": "A rekombináns humán növekedési hormon (rhGH, Somatropin) a természetes, hipofízisben termelődő GH biológiailag azonos formája. FDA-engedélyezett GH-deficit, Turner-szindróma, idiopátiás low stature és AIDS-cachexia indikációkban (Genotropin, Humatrope, Norditropin, Saizen). Sportkontextusban off-label használat izomtömeg-növelésre + recovery + zsírvesztésre. WADA-tiltott (S2 kategória), detekciós ablak rövid (~24 óra) miatt nehezen detektálható biomarker-tesztekkel. Hosszú-távú használat akromegáliához, szívizom-hipertrófiához és inzulin-rezisztenciához vezet. **Kulcs-nuance-ok**: (a) **IGF-1 mint elsődleges effektor** — a GH önállóan kevésbé anabolikus, a májon át termelt IGF-1 paracrin/endocrin szignálja a fő közvetítő (a sport-anabolizmus 70-80%-a IGF-1-en keresztül érvényesül); (b) **T4→reverse T3 konverzió-shift**: HGH-on emelkedik az rT3, csökken az aktív T3 → szubklinikai hipotireózis kockázat, ezért T4/T3 ko-adminisztráció és TSH/fT3/fT4/rT3 panel mid-cycle KÖTELEZŐ; (c) **Carpal tunnel és perifériás ödéma**: extracelluláris fluid + Na+ retenció → ideg-kompresszió, főleg 4-6 IU/nap dózison felül; (d) **Fasted-state SC administration**: lefekvés előtt vagy legalább 2-4 órával az utolsó étkezés után, mert az inzulin direkt antagonista a GH-val — fasted állapotban max GH-pulzus.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "GH-receptor agonista, IGF-1-emelő"
    },
    {
      "label": "Felezési idő",
      "value": "~3 óra (rhGH szubkután)"
    },
    {
      "label": "Hatáskezdet",
      "value": "4-8 hét (IGF-1 csúcs)"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: FDA Rx. HU/EU: Rx. WADA: tiltott."
    }
  ],
  "mechanism": "GH-receptor agonista (type-1 cytokine receptor): receptor-dimerizáció → **JAK2 transzfoszforilizáció → STAT5 nukleáris transzlokáció → IGF-1 hepatikus génexpresszió**. Másodlagos direkt hatás: zsírszöveti lipolízis HSL-aktivitáson keresztül + vázizom-szintű anabolizmus (mTOR + IGF-1 paracrin). **Insulin-antagonistic glucose-hatás**: máj-szintű gluconeogenezis + glikogenolízis emelés → fasted glükóz emelés, krónikus inzulin-rezisztencia. Ezért HbA1c monitoring kötelező.",
  "legalStatus": "USA: FDA Rx (GH-deficit, Turner, cachexia). HU/PL/EU: Rx hipofízis-betegségre. WADA: tiltott (S2).",
  "onsetTime": "4-8 weeks (IGF-1 peak)",
  "halfLife": "~3 h (subcutaneous)",
  "interactionsWith": [
    "insulin",
    "thyroid hormones",
    "glucocorticoids"
  ],
  "aromatization": "Nem releváns — 191-aminosav peptidhormon (somatotropin), NEM szteroid; nincs CYP19 interakció",
  "hepatotoxicity": "Alacsony — közvetlen hepatotoxicitás nincs; IGF-1 elevation indirekt T2DM/inzulinrezisztencia rizikó dominál (Mauras 2005)",
  "wadaStatus": "banned",
  "detectionWindow": "~24 óra direkt rhGH-teszt; biomarker teszt (IGF-1 + P-III-NP) érzékenyebb, 7-14 napos ablak.",
  "benefits": [
    "Lean mass-növekedés (anti-katabolikus + IGF-1 mediált)",
    "Zsírvesztés (HSL-aktiválás zsírszövetben)",
    "Recovery + szöveti regeneráció",
    "Bőr-, haj-, köröm-minőségjavulás",
    "Kötőszövet és kollagén-1 sűrűség javítása (bőr, kötőszövet, ínszövet, ízületi porc) — anti-aging kontextusban a HGH fő dokumentált hatása, alacsony 1-2 IU/nap dózisú protokolloknál"
  ],
  "studies": [
    {
      "title": "Performance Enhancing Hormone Doping in Sport.",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S",
      "journal": "Endocr Rev",
      "pmid": "26247087"
    },
    {
      "title": "Ghrelin Receptor Deletion or Pharmacological Inhibition Improves Muscle Function in Aging Male Mice.",
      "authors": "Kerr HL, Krumm K, Myree N",
      "journal": "Aging Cell",
      "pmid": "41986945"
    },
    {
      "title": "Acromegaly: clinical features and management",
      "authors": "Melmed S.",
      "journal": "N Engl J Med. 2006;355(24):2558-2573.",
      "pmid": "17167139"
    },
    {
      "title": "Application of the Athlete Biological Passport Approach to the Detection of Growth Hormone Doping.",
      "authors": "Equey T, Pastor A, de la Torre Fornell R, Thuyne WV, Deventer K, Sottas PE",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "34726230"
    }
  ],
  "related": [
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.025,
      "medium": 0.05,
      "high": 0.075
    },
    "unit": "IU/nap",
    "note": "Anti-aging 2 IU/nap (Alacsony tartomány körül), sport 4-6 IU/nap (Közepes). Hosszú-távú használat akromegáliához + szívizom-hipertrófiához vezet. Reggel ébredés után vagy edzés előtt 30 perccel SC injekció. IGF-1 célérték <800 ng/mL. HbA1c monitoring kötelező."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2 héttel előtt",
      "markers": "IGF-1 baseline, HbA1c, éhomi glükóz, inzulin (HOMA-IR), TSH/fT4, lipid panel.",
      "purpose": "Baseline. Prediabetes vagy inzulin-rezisztencia kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "6-8. hét",
      "markers": "IGF-1 (cél: <800 ng/mL), HbA1c, éhomi glükóz, TSH/fT4 (HGH csökkenti fT4-et).",
      "purpose": "IGF-1 >1000 ng/mL = akromegália-kockázat, dóziscsökkentés. HbA1c >6% = ciklus megszakítás."
    },
    "postCycle": null,
    "cruise": null
  }
}
