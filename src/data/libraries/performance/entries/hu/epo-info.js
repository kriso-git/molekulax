// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.946Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "epo-info",
  "name": "EPO",
  "image": null,
  "accentColor": "#ef4444",
  "tagColor": "rgba(239,68,68,0.18)",
  "shortDesc": "Rekombináns humán eritropoetin (rhEPO). Vörösvértest-termelés stimuláló, endurance-sportokban WADA-tiltott.",
  "description": "A rekombináns humán eritropoetin (rhEPO, Epoetin alfa/beta, Procrit, Eprex, Aranesp) a természetes vesetermelt EPO biológiailag azonos formája. FDA-engedélyezett krónikus vesebetegség, kemoterápia-okozta anémia és prematuritás-anémia indikációkban. Endurance-sportokban (kerékpározás, állóképességi atlétika) off-label használat: a hematokritot emeli, anekdotikusan a VO2max +8-10%-ot (Lundby 2011), de placebo-kontrollált BLINDED RCT-k +1-3%-os realisztikus performance-gain-t mutatnak (Heuberger 2013). WADA-tiltott, és a vérképzési stimuláció jelentős thromboticus + kardiovaszkuláris kockázattal jár (vérviszkozitás-emelkedés). **HIF-α stabilizáció analógia**: az endogén EPO-termelést a vesében a hypoxia-induced HIF-α aktiválja (Semenza Nobel-díj 2019); a rhEPO ezt a természetes szignált simulálja exogén receptor-agonista módon. **Történelmi kontextus**: Tour de France 1990-2000-es \"EPO-era\" (Festina-szkandallum 1998), Lance Armstrong USPS-protokoll dokumentálva (USADA 2012). **Detekciós breakthrough**: Lasne & de Ceaurriz 2000 Nature (PMID 10864312) IEF-tesztelés. **Hematokrit-rampolás dinamikája**: SC injekció után 7-10 nap retikulocita-csúcs, 21-28 nap hematokrit-csúcs — ezért micro-dose protokollok (20-30 IU/kg minden 2. nap) terjedtek el a detekciós ablak alatti emeléshez.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "EPO-receptor agonista, eritropoezis-stimuláns"
    },
    {
      "label": "Felezési idő",
      "value": "5-13 óra (rhEPO szubkután)"
    },
    {
      "label": "Hatáskezdet",
      "value": "7-14 nap (retikulocita-emelés)"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: FDA Rx (Procrit). EU: Rx. WADA: tiltott."
    }
  ],
  "mechanism": "EPO-receptor agonista (type-1 cytokine receptor, mint a GH-receptor) a vörösvértest-prekurzoroknak (BFU-E erythroid burst-forming unit, CFU-E colony-forming unit) a csontvelőben. Receptor-dimerizáció → **JAK2 transzfoszforilizáció → STAT5 nukleáris transzlokáció → anti-apoptotikus és proliferációs gének aktivációja** az eritroid sejtekben. Hipoxia-szerű jel: differenciálódás és proliferáció eritroid sejtekben, retikulocita-felszabadulás 7-10 napon belül.",
  "legalStatus": "USA: FDA Rx (Procrit, Aranesp). HU/PL/EU: Rx renalis anémiára. WADA: tiltott (S2 hormon és metabolikus modulátor).",
  "onsetTime": "7-14 days",
  "halfLife": "5-13 h (subcutaneous)",
  "interactionsWith": [
    "iron supplements",
    "ACE inhibitors"
  ],
  "aromatization": "Nem releváns — 165-aminosav glikoprotein (erythropoietin), NEM szteroid; nincs aromatáz-szubsztrát",
  "hepatotoxicity": "Alacsony — közvetlen hepatotoxicitás nincs; hematocrit-emelkedés trombosis-rizikóval (CV-events, stroke) dominál (FDA Epogen black-box warning)",
  "wadaStatus": "banned",
  "detectionWindow": "rhEPO direkt teszt: 3-4 nap (IEF-tesztelés WADA-akkreditált laborban). Biomarker (ABP, Athlete Biological Passport) 4-6 hetes ablakkal érzékeny.",
  "benefits": [
    "VO2max-emelés: anekdotikus 8-10% (Lundby 2011), de placebo-kontrollált blinded RCT-k 1-3% realisztikus performance-gain-t mutatnak (Heuberger 2013) — a sportoló-szubjektív perception jelentősen felülbecsüli a mérhető hatást",
    "Hematokrit-emelkedés (45 → 50+%)",
    "Hemoglobin-emelés és oxigén-szállító kapacitás"
  ],
  "studies": [
    {
      "title": "Erythropoietin treatment elevates haemoglobin concentration",
      "authors": "Lundby C, Olsen NV.",
      "journal": "J Physiol. 2011;589(Pt 6):1265-1271.",
      "pmid": "21224229"
    },
    {
      "title": "Erythropoietin doping in cycling: history and detection",
      "authors": "Lasne F, de Ceaurriz J.",
      "journal": "Nature. 2000;405(6787):635.",
      "pmid": "10864312"
    },
    {
      "title": "Blood doping at the Olympics",
      "authors": "Eichner ER.",
      "journal": "Curr Sports Med Rep. 2007;6(4):237-238.",
      "pmid": "17617999"
    },
    {
      "title": "Effects of erythropoietin on cycling performance of well-trained cyclists: a double-blind, randomised, placebo-controlled trial",
      "authors": "Heuberger JAAC, Rotmans JI, Gal P et al.",
      "journal": "Lancet Haematol. 2017;4(8):e374-e386.",
      "pmid": "23252630"
    }
  ],
  "related": [
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 20,
      "medium": 50,
      "high": 100
    },
    "unit": "IU/hét",
    "note": "Klinikai vesebetegség-dózis: 50-100 IU/kg/hét, 2-3x felosztott SC injekciókban. Sport-doppingként alacsonyabb (mikrodose 20-30 IU/kg) is használt a detekciós ablak kerülésére. Hematokrit >55% = thromboticus krízis-kockázat, AZONNAL leállítás. Vas-pótlás kötelező."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "1 héttel előtt",
      "markers": "CBC (hematokrit, hemoglobin, RBC), retikulocita-szám, vas (ferritin, transferrin saturation, TIBC), B12 + folát, EPO endogén szint.",
      "purpose": "Baseline. Vashiány = ciklus indítás előtt korrigálni kell."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2-3. hét",
      "markers": "Hematokrit (cél: <55%), hemoglobin, vérnyomás (otthon), vas-szint, vérviszkozitás.",
      "purpose": "Hematokrit >55% = thromboticus krízis-kockázat, AZONNAL leállítás. Vérnyomás >160/100 = leállítás."
    },
    "postCycle": null,
    "cruise": null
  }
}
