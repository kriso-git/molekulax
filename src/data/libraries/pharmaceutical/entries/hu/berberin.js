// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.570Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "berberin",
  "name": "Berberin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Növényi alkaloid (Berberis aristata, Coptis chinensis), AMPK-aktivátor. \"Természetes Metformin\"-ként promotált, de farmakológiai pozícionálása korlátozott. NEM Rx, OTC supplement.",
  "description": "A Berberin egy izokinolin-alkaloid, amelyet a hagyományos kínai (Huang Lian) és ayurvedikus (Daruharidra) gyógynövény-terápiákban használtak évszázadokon át. Az AMPK-aktiváció mechanizmusa miatt \"természetes Metformin\"-ként marketingelik, de a klinikai evidencia szerényebb és változatos minőségű. Egy 2008 RCT (Yin J 2008 PMID 18397984) szerint 500 mg 3x/nap 3 hónapig HbA1c -1,0% csökkenést mutatott T2DM-ben (hasonló Metformin-szintű hatás). Egy 2012 meta-analízis (Lan 2012 PMID 22377268) szignifikáns dyslipidémia + hipoglikémiás hatást igazolt, de a trial-minőség többségében alacsony. Biodostępność rossz (~5%), nagy dózis szükséges. NEM FDA-jóváhagyott gyógyszer, hanem étrendkiegészítő — minőség- és dózispontosság-bizonytalanság jelentős.",
  "mechanism": "AMPK-aktivátor (mint Metformin), hepatikus glükoneogenezis-gátlás. Másodlagos hatások: bél-flóra-moduláció (Lactobacillus, Bifidobacterium-növelés), LDL-csökkenés PCSK9-szuppresszióval, gyulladás-csökkentés.",
  "legalStatus": "EU/HU/USA: étrendkiegészítő (NEM gyógyszer). OTC elérhető. Kína-ban Rx-szerként is forgalmazott bakteriális hasmenésre.",
  "bioavailability": "<1% (orális, P-gp efflux + extenzív first-pass — PubMed Liu 2010 Front Pharmacol)",
  "onsetTime": "2-4 weeks (HbA1c effect)",
  "halfLife": "~5 h (poor oral bioavailability ~5%)",
  "atcCode": "No ATC assigned (not a registered drug)",
  "prescriptionStatus": "NEM vényköteles (étrendkiegészítő)",
  "indications": [
    "T2DM kiegészítő terápiája (off-label evidencia, NEM FDA-indikáció)",
    "Dyslipidémia (LDL-csökkentés)",
    "Metabolikus szindróma, prediabétesz"
  ],
  "contraindications": [
    "Terhesség, szoptatás (uterotonikus + bilirubin-displacement újszülöttben, kernicterus-kockázat)",
    "Súlyos máj- vagy vesefunkció-zavar"
  ],
  "commonSideEffects": [
    "GI: hasi diszkomfort, hasmenés, székrekedés (~30%)",
    "Fejfájás, szédülés (ritka)"
  ],
  "cyp450": [
    "CYP3A4 substrate + INHIBITOR (moderate)",
    "CYP2D6 inhibitor",
    "P-gp inhibitor"
  ],
  "crossMolInteractions": [
    "Cyclosporine, Tacrolimus (CYP3A4): plazma-szint emelkedhet, monitor",
    "Metformin: szinergisztikus, de redundáns mechanizmus"
  ],
  "benefits": [
    "HbA1c-csökkenés ~1,0% (Yin 2008 RCT, Metformin-szintű)",
    "LDL-csökkentés 12-25% (PCSK9-szuppresszióval)",
    "OTC, megfizethető"
  ],
  "studies": [
    {
      "title": "Efficacy of berberine in patients with type 2 diabetes mellitus",
      "authors": "Yin J, Xing H, Ye J.",
      "journal": "Metabolism. 2008;57(5):712-7.",
      "pmid": "18397984"
    },
    {
      "title": "Meta-analysis of the effect and safety of berberine in the treatment of T2DM, hypertension, and hyperlipidemia",
      "authors": "Lan J, Zhao Y, Dong F et al.",
      "journal": "J Ethnopharmacol. 2015;161:69-81.",
      "pmid": "25498346"
    },
    {
      "title": "Berberine and the gut microbiota: implications for diabetes and obesity",
      "authors": "Zhang X, Zhao Y, Zhang M et al.",
      "journal": "Front Pharmacol. 2020;11:588884.",
      "pmid": "33240094"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 500,
      "medium": 1000,
      "high": 1500
    },
    "unit": "mg/nap",
    "note": "Standard 500 mg 2-3x/nap étkezéssel (alacsony bioavailabilitás miatt nagy dózis). Étrendkiegészítő, minőség-bizonytalanság jelentős — érdemes harmadik-fél laboratórium által tesztelt brand-eket választani (USP, NSF certifikáció). NEM helyettesíti a Metformint orvosi indikációban."
  }
}
