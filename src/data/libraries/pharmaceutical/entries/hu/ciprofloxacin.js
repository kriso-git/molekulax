// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.581Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "ciprofloxacin",
  "name": "Ciprofloxacin",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Fluorokinolon antibiotikum (Bayer Cipro). UTI, gasztrointesztinális + komplex Gram-negatív infekciók. FDA boxed warning: ínszakadás + perifériás neuropátia.",
  "description": "A Ciprofloxacin a fluorokinolon-osztály prototípusa (Bayer Cipro, FDA 1987). DNS-giráz és topoizomeráz-IV gátlása révén baktericid. Erős Gram-negatív (E. coli, Pseudomonas, Klebsiella), mérsékelt Gram-pozitív aktivitás. Az FDA 2016/2018 BOXED WARNING jelentős: ínszakadás, perifériás neuropátia, mentális mellékhatás (zavartság, delirium), aorta-aneurizma. Az \"antibiotic stewardship\" miatt enyhe UTI-re NEM ajánlott első-vonalként — komplikációs UTI, prosztatitisz, akut sinusitis (nem-súlyos), GI-infekciók (Salmonella, Shigella) tipikus indikációk. A FDA + EMA 2019-es újraértékelés a fluorokinolonok használatát szigorúan limitálja.",
  "mechanism": "DNS-giráz (topoizomeráz-II) és topoizomeráz-IV szelektív gátlás → DNS-replikáció és transzkripció blokk → baktericid.",
  "legalStatus": "EU/HU: vényköteles (Ciprobay, Ciprinol, generikus). USA: FDA Rx (Cipro).",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~4 h (twice-daily dosing)",
  "atcCode": "J01MA02",
  "prescriptionStatus": "Vényköteles (Rx), stewardship-protokoll",
  "indications": [
    "Komplikációs UTI, pielonefritisz, prosztatitisz",
    "GI infekciók (Salmonella, Shigella, Traveler's diarrhea)",
    "Csont- és lágyrész-infekciók (Pseudomonas)",
    "Anthrax post-expozíció (CDC protokoll)"
  ],
  "contraindications": [
    "Fluorokinolon-hipersenzitivitás",
    "Gyermek/serdülő (csont-növekedési kockázat, kivéve specifikus indikációkban)",
    "Myasthenia gravis (relatív kontraindikáció)"
  ],
  "commonSideEffects": [
    "GI: hányinger, hasmenés, hasi diszkomfort",
    "Fejfájás, szédülés, álmatlanság",
    "Súlyos: ÍNSZAKADÁS (Achilles, FDA boxed, főleg 60+ év + szteroid), PERIFÉRIÁS NEUROPÁTIA (irreverzibilis), MENTÁLIS TÜNETEK (zavartság, pszichózis), AORTA-ANEURIZMA, C. diff colitis, fototoxikus reakció"
  ],
  "cyp450": [
    "CYP1A2 INHIBITOR (significant)",
    "Caffeine, theophylline, tizanidine interactions"
  ],
  "crossMolInteractions": [
    "Tizanidin: ABSZOLÚT kontraindikált (CYP1A2-blokk extrém hipotenzió + szedáció)",
    "Theophyllin, koffein: plazma-szint emelkedhet, toxicitás",
    "Warfarin: INR-emelkedés",
    "Antacid (Al, Mg, Ca), vas: KÉT órás távolság szükséges (chelát-képződés)"
  ],
  "benefits": [
    "Erős Pseudomonas-aktivitás (komplex UTI, csont-infekció)",
    "Oralis biodostępność ~70% (IV-vel ekvivalens)",
    "Anthrax post-expozíció CDC standard"
  ],
  "studies": [
    {
      "title": "Fluoroquinolones and the risk of aortic aneurysm or aortic dissection",
      "authors": "Pasternak B, Inghammar M, Svanström H.",
      "journal": "BMJ. 2018;360:k678.",
      "pmid": "29519881"
    },
    {
      "title": "FDA boxed warnings for fluoroquinolones: safety review",
      "authors": "Tanne JH.",
      "journal": "BMJ. 2018;363:k4934.",
      "pmid": "30459112"
    },
    {
      "title": "Ciprofloxacin in complicated urinary tract infections",
      "authors": "Wagenlehner FM, Naber KG.",
      "journal": "Int J Antimicrob Agents. 2004;24 Suppl 1:S1-3.",
      "pmid": "15364298"
    }
  ],
  "related": [
    "amoxicillin",
    "azithromycin",
    "doxycycline"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 250,
      "medium": 500,
      "high": 750
    },
    "unit": "mg 2x/nap",
    "note": "Enyhe UTI: 250 mg 2x/nap 3 nap. Komplex UTI/pielonefritisz: 500 mg 2x/nap 7-14 nap. Csont-infekció/súlyos eset: 750 mg 2x/nap 4-6 hét. Hidratáció (kristalluria), kerülni a szoláriumot (fototoxicitás). Ínszakadás-figyelmeztető tünet (boka/Achilles fájdalom) AZONNAL STOP."
  }
}
