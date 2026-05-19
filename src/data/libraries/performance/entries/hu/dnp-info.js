// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.947Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "dnp-info",
  "name": "DNP",
  "image": "/performance/tablet-pile-yellow.png",
  "accentColor": "#ef4444",
  "tagColor": "rgba(239,68,68,0.18)",
  "shortDesc": "NE HASZNÁLD. 2,4-dinitrofenol, halálos kimenetelű hipertermia kockázattal. Edukatív kontextus a veszélyek megismertetésére.",
  "description": "**FIGYELEM: A DNP használata RENDKÍVÜL VESZÉLYES, dokumentáltan halálos kimenetelű hipertermia esetekkel jár (Grundlingh 2011 systematic review). Ezt az entry-t kizárólag edukatív célból szerepeltetjük, NEM ad útmutatást a használathoz. Kérjük, ne használd, és tájékoztass másokat is a veszélyekről.** A 2,4-dinitrofenol (DNP) egy ipari vegyület (festékek, robbanóanyagok), amelyet az 1930-as években rövid ideig anti-obézis gyógyszerként forgalmaztak az USA-ban. Hatása mitokondriális oxidatív foszforilezés szétkapcsolása (uncoupling): az elektrontranszport-lánc protonjai bypass-elik az ATP-szintetázt, és a felszabaduló energia hő formájában disszipálódik. **ATP/hő disszipáció kvantitatív részlete**: egészséges mitokondrium 38 ATP/glükóz molekulát produkál; DNP-vel ez ~10-15 ATP-re csökken, a hiányzó energia hő formájában szabályozhatatlanul disszipálódik. Eredmény: extrém BMR-emelés (akár +50%), de szabályozhatatlan hipertermia, ami 41-43°C testhőmérsékletet és halált okozhat. **Bodybuilder use pattern (Petróczi 2015 PMID 26092626 inline)**: pre-contest \"magic bullet\" képzetén alapul, sajnos online-bodybuilding-fórumokon még mindig kering 200-400 mg/nap protokoll, ami a halálos 4.3 mg/kg küszöböt (~300 mg felnőttben) súrolja vagy meghaladja. A halálesetek nagyrésze 21-32 éves egészséges férfiakon történt. **Letális hipertermia onset**: 41-43°C testhő 6-12 órán belül akut adagolás után, izzadás → tachykardia → tachypnoe → zavartság → görcs → szervi elégtelenség. NINCS antidotum (jeges fürdő + ICU-támogatás, gyakran túl későn).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Mitokondriális uncoupler (ATP-szintézis bypass)"
    },
    {
      "label": "Felezési idő",
      "value": "~36 óra (terápiás dózison, de kumulatív)"
    },
    {
      "label": "Halálos dózis",
      "value": "Akut: 4.3 mg/kg (~300 mg felnőttön)"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: FDA visszavonta 1938-ban. EU/HU: emberi használatra tilos. WADA: tiltott."
    }
  ],
  "mechanism": "A 2,4-dinitrofenol egy lipofil gyenge sav (pKa 4,1), amely a mitokondriális belső membránon át protonokat transzportál a citoplazma-oldalról az intermembrán-tér felé, **megkerülve az ATP-szintetáz F0-csatornáját (Q-cycle bypass)**. A proton-motive force (PMF) így disszipálódik, az elektrontranszport-lánc azonban tovább pumpál (mert NADH/FADH2 elektronok továbbra is áramlanak), és minden electron-transfer ciklus hőt termel, NEM ATP-t. **Az uncoupling cumulatív**: a DNP felezési ideje ~36 óra (lassú clearance), ezért **késleltetett halálos hipertermia akár 24-48 órával az utolsó dózis után is jelentkezhet**, amikor a felhasználó már azt hiszi \"kibírta a ciklust\".",
  "legalStatus": "USA: FDA visszavonta 1938-ban (Cooke 1934 halál-esetek után). EU + HU + PL: emberi használatra tilos, importálni illegális. WADA: tiltott. Dopping-listán.",
  "onsetTime": "6-12 hours",
  "halfLife": "~36 h (cumulative)",
  "interactionsWith": [
    "anything increasing metabolism",
    "thyroid hormones",
    "stimulants"
  ],
  "aromatization": "Nem releváns — ipari nitroaromatás vegyület (2,4-dinitrofenol mitokondriális uncoupler), NEM szteroid",
  "hepatotoxicity": "Súlyos — multi-organ toxikus; hyperthermia (>42°C), rhabdomyolysis, akut májelégtelenség, MOF; halálesetek dózisfüggetlenül 600 mg felett (Grundlingh 2011 PMID 21739343)",
  "wadaStatus": "banned",
  "benefits": [
    "NINCSENEK biztonságos benefit-ek. A DNP használata KRITIKUS veszélyt jelent, függetlenül a kontextustól."
  ],
  "studies": [
    {
      "title": "2,4-Dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death",
      "authors": "Grundlingh J, Dargan PI, El-Zanfaly M, Wood DM.",
      "journal": "J Med Toxicol. 2011;7(3):205-212.",
      "pmid": "21739343"
    },
    {
      "title": "Dinitrophenol-induced hyperthermia: case series and review",
      "authors": "Bartlett J, Brunner M, Gough K.",
      "journal": "J Emerg Med. 2010;39(2):e85-e89.",
      "pmid": "19150189"
    },
    {
      "title": "Death from accidental 2,4-dinitrophenol poisoning",
      "authors": "Pyle SA, Cooke G.",
      "journal": "JAMA. 1934;103(20):1571.",
      "pmid": null
    },
    {
      "title": "Mortality in DNP poisonings: a critical analysis of online forum-marketed bodybuilder use pattern and case fatality rate",
      "authors": "Petróczi A, Ocampo JAV, Shah I et al.",
      "journal": "Subst Abuse Treat Prev Policy. 2015;10:39.",
      "pmid": "26092626"
    }
  ],
  "related": [],
  "doseCalc": {
    "type": "warning",
    "warning": "NE HASZNÁLD. A DNP használata dokumentáltan halálos kimenetelű hipertermia-eseteket okoz (Grundlingh 2011). NINCS biztonságos dózis. Ha valaki ismerősöd használja, azonnal figyelmeztesd és kérje sürgős orvosi segítséget. Hipertermia (>40°C) tünetei: izzadás, tachykardia, tachypnoe, zavartság. 4.3 mg/kg akut letális dózis felnőttben."
  }
}
