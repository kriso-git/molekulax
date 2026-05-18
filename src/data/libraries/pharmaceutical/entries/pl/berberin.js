// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.615Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "berberin",
  "name": "Berberin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Alkaloid roślinny (Berberis aristata, Coptis chinensis), aktywator AMPK. Promowany jako \"naturalna metformina\", ale pozycjonowanie farmakologiczne ograniczone. NIE Rx, suplement OTC.",
  "description": "Berberyna to alkaloid izochinolinowy stosowany przez wieki w tradycyjnej chińskiej (Huang Lian) i ajurwedyjskiej (Daruharidra) terapii ziołowej. Marketingowany jako \"naturalna metformina\" z powodu aktywacji AMPK, ale dowody kliniczne są skromne i o zmiennej jakości. RCT 2008 (Yin J 2008 PMID 18397984) wykazało 500 mg 3x/dzień przez 3 miesiące redukcję HbA1c -1,0% w T2DM (porównywalnie z metforminą). Metaanaliza 2012 (Lan 2012 PMID 22377268) potwierdziła istotne efekty dyslipidemii + hipoglikemiczne, ale jakość badań przeważnie niska. Biodostępność słaba (~5%), wymagane duże dawki. NIE jest zatwierdzonym lekiem FDA, lecz suplementem dietetycznym — znacząca niepewność jakości i precyzji dawki.",
  "mechanism": "Aktywator AMPK (jak metformina), hamujący glukoneogenezę wątrobową. Efekty wtórne: modulacja flory jelitowej (wzrost Lactobacillus, Bifidobacterium), redukcja LDL przez supresję PCSK9, działanie przeciwzapalne.",
  "legalStatus": "UE/PL/USA: suplement diety (NIE lek). Dostępna OTC. W Chinach również jako Rx na biegunkę bakteryjną.",
  "onsetTime": "2-4 weeks (HbA1c effect)",
  "halfLife": "~5 h (poor oral bioavailability ~5%)",
  "atcCode": "No ATC assigned (not a registered drug)",
  "prescriptionStatus": "NIE na receptę (suplement diety)",
  "indications": [
    "Terapia uzupełniająca T2DM (dowody off-label, NIE wskazanie FDA)",
    "Dyslipidemia (redukcja LDL)",
    "Zespół metaboliczny, stan przedcukrzycowy"
  ],
  "contraindications": [
    "Ciąża, karmienie piersią (uterotonika + przemieszczenie bilirubiny u noworodka, ryzyko kernicterus)",
    "Ciężka niewydolność wątroby lub nerek"
  ],
  "commonSideEffects": [
    "GI: dyskomfort brzucha, biegunka, zaparcia (~30%)",
    "Ból głowy, zawroty głowy (rzadkie)"
  ],
  "cyp450": [
    "CYP3A4 substrate + INHIBITOR (moderate)",
    "CYP2D6 inhibitor",
    "P-gp inhibitor"
  ],
  "crossMolInteractions": [
    "Cyklosporyna, takrolimus (CYP3A4): poziomy w osoczu mogą wzrosnąć, monitor",
    "Metformina: synergistyczna ale redundantny mechanizm"
  ],
  "benefits": [
    "Redukcja HbA1c ~1,0% (RCT Yin 2008, porównywalne z metforminą)",
    "Redukcja LDL 12-25% (przez supresję PCSK9)",
    "OTC, przystępna cenowo"
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
    "note": "Standard 500 mg 2-3x/dzień z posiłkami (duża dawka z powodu niskiej biodostępności). Suplement diety, znacząca niepewność jakości — wybierz marki testowane przez laboratoria zewnętrzne (USP, NSF). NIE zastępuje metforminy pod wskazaniem medycznym."
  }
}
