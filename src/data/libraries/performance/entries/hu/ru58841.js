// RU58841 (PSK-3841 / HMR-3841) — peripheral non-steroidal AR antagonist,
// NOT a 5α-reductase inhibitor. Mechanism-clarification entry per spec § 4.1.
// TODO Sub-Task 7: replace placeholder image '/performance/tablet-pile-white.png'
// with '/performance/topical-solution-clear.png' (Gemini-template generated in
// image-pipeline pass).
// Sources: Sawaya 1997 PMID 9224249, Battmann 1994 PMID 7969105.

export default {
  "id": "ru58841",
  "name": "RU58841 (PSK-3841 / HMR-3841)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Periférás non-steroidal AR-antagonista (NEM 5α-reduktáz gátló) — Roussel-Uclaf 1992 designer. Topikális AGA-research-chemical. Phase II 1996 terminálva systemikus feminizáció miatt. Modern UGL-formulák lokal-only claim-jét sparse data támasztja alá.",
  "description": "**FONTOS mechanism-clarification**: A RU58841 (PSK-3841 / HMR-3841) **NEM** 5α-reduktáz inhibitor (mint Finasteride/Dutasteride), hanem **peripherális androgén-receptor (AR) antagonista**. A Roussel-Uclaf laboratórium designerelte 1992-ben (Sawaya 1997 PMID 9224249) androgenetic alopecia (AGA) topikális kezelésére: a vegyület a scalp follikulus-szövetében kompetitíven kötődik az AR-hoz, blokkolva a DHT (és testosterone) androgén-szignáljának downstream effect-jét — **a DHT-konverziót NEM gátolja, hanem a DHT-effect-jét neutralizálja a hairfollikulus-szintjén**. A Phase II klinikai trial-jeit 1996-ban befejezték az ipari termelő (akkor Hoechst Marion Roussel, később Sanofi-Aventis), miután systemikus abszorpció esetén feminizáló effekt-ek (gynecomastia-formation, sexual-dysfunction) jelentek meg a teszt-populáción. Modern UGL-formulációk (5% oldat ethanol/propylene-glycol-ben) lokal-only claim-jét — gyors-szérum-eszteráz-inaktivációval — sparse in vivo data támasztja alá, kontradiktórius case-reportok systemikus effect-ekről. Tier 2 (research-level, Phase II terminálva, UGL-only). Designer-purple accent `#a78bfa` a spec § 3.3 alapján. **NEM** 5AR-szubsztrát-mechanizmus — a 5AR sub-section-be soroltuk a use-case grouping convention miatt (AAS-hair-loss-prevention shared goal Finasteride/Dutasteride-szel).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Peripherális non-steroidal AR-antagonista (NEM 5AR-inhibitor!) — scalp follikulus AR-kötés-blokád"},
    {"label": "Adagolás (research-only)", "value": "5% oldat ethanol/propylene-glycol-ben, 0.5-1 mL napi 1x scalp-application"},
    {"label": "Felezési idő", "value": "Topikális minimális systemic abszorpció (claim), effect ~24 óra"},
    {"label": "Hatáskezdet", "value": "Scalp AR-blokád azonnal, hair-stabilization 3-6 hónap (in vivo data sparse)"},
    {"label": "Jogi státusz", "value": "NINCS FDA/EMA-jóváhagyás, NINCS HU/PL Rx, research-chemical-vendor-only, WADA banned (S1 anabolic agent kapcsolódó)"}
  ],
  "mechanism": "RU58841 4,4-dimethyl-imidazolinedione-szerkezetű non-szteroidal compound. Sawaya 1997 PMID 9224249 dokumentálta a peripherális AR-kötés-blokád mechanizmust: a vegyület in vitro Ki ~0.5 nM AR-affinitással kötődik (versenytársként a DHT-vel ~5 nM Ki-vel), és a hairfollikulus AR-jét blokkolja anélkül, hogy a 5α-reduktáz-enzimet érintené. **Ez kritikusan eltér a Finasteride/Dutasteride mechanizmusától**: a Finasteride/Dutasteride a DHT-konverziót gátolja (substrate-level), a RU58841 a DHT-effect-jét neutralizálja az AR-szinten (receptor-level). Tervezett előnye: lokál-only effect, gyors-szérum-eszteráz-inaktiváció a systemic-AR-blokádot elkerüli. Phase I trial-en (Battmann 1994 PMID 7969105) topikális 1% oldat-application alacsony szérum-AR-expozícióval, DE Phase II ~5% dose-on systemic feminizing-effect-eseteket dokumentáltak. Modern UGL 5% oldat — magasabb mint a Phase I dose, claim-jük az hogy a serum-eszteráz-clearance hatékony elimináción nyugszik, in vivo confirmation hiányos.",
  "legalStatus": "GLOBÁLISAN nem törzskönyvezett: Phase II 1996 terminálva systemikus feminizáció miatt (Hoechst Marion Roussel, később Sanofi-Aventis). NINCS FDA/EMA/HU/PL Rx. Research-chemical-vendor only (US/EU/Asia UGL-csatornák). WADA: S1 anabolic agent — Other Anabolic Agents kategória alatt banned (chemically related, AR-modulátor).",
  "onsetTime": "Scalp AR-blokád azonnal, hair-stabilization 3-6 hónap (in vivo data sparse)",
  "halfLife": "Topikális minimális systemic abszorpció (claim, in vivo data sparse)",
  "halfLifeActive": "Effect ~24 óra per application (claim, in vivo confirmation hiányos)",
  "interactionsWith": ["finasteride", "dutasteride", "rad-140"],
  "aromatization": "Nincs direkt aromatizáció. Peripherális AR-blokád → szteroid-axis NEM érintett. (Ha sysztemikusan abszorbeálódik, AAS-aktivitást blokkolhat — gyno-emphasizing risk feminization egész testen.)",
  "hepatotoxicity": "Topikális alacsony hepatikus; in vivo abszorpció esetén hepatic-stressz adatok hiányosak — research-chemical kontextusban óvatossággal.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (AR-antagonist, NEM AR-agonist) — NEM AAS",
  "bindingAffinity": "AR Ki ~0.5 nM (kompetitív antagonist, DHT ~5 nM, testosterone ~10 nM-vs)",
  "detectionWindow": "WADA-akkreditált LC-MS/MS sparse data — research-chemical-context vizeletminta-detektálás 1-2 hét topikális application után (in vivo data minimal)",
  "benefits": [
    "Tervezett előnye: scalp-only DHT-effect-blokád, systemic-AR-axis-érintetlen (Finasteride/Dutasteride alternatíva PFS-rizikó-averse user-en)",
    "Mechanism-clarification: NEM 5AR-inhibitor — eltérő pathway, AAS-stack-en NEM ütközik Finasteride-szel (de overlap-rizikó)",
    "AGA-research-chemical community-szintű érdeklődés"
  ],
  "quickStart": [
    "ELŐSZÖR: tudd meg, hogy a RU58841 NEM 5AR-inhibitor (mint Finasteride/Dutasteride), hanem AR-antagonista — eltérő mechanism",
    "Research-chemical-vendor only beszerzés (Sigma-Aldrich / specialty-research-pharm)",
    "Topikális 5% oldat ethanol/propylene-glycol-vehiculum: 0.5-1 mL scalp-application napi 1x estére",
    "Application zone: AGA-affected vertex + frontale (NEM teljes scalp)",
    "NEM ajánlott: prophylactic AGA-NEM-prediszponált user-en, fertility-tervezés-user-en (systemic-feminizing-effect-rizikó)",
    "Modern UGL-formulák Phase II-szintű biztonsági evidence-ben hiányosak — research-context csak"
  ],
  "expectations": [
    {"label": "1. hét", "body": "Scalp-application tolerated (mild scalp-irritation lehet ethanol/PG-vehiculumtól). Systemic-effect minimális (claim)."},
    {"label": "3-6. hónap", "body": "Hair-stabilization observable (in vivo data sparse — community-szintű reports + Phase I trial extrapoláció)."},
    {"label": "Long-term (6+ hónap)", "body": "Phase II terminálási evidence: systemic feminizing-effect possible (gynecomastia, sexual-dysfunction), különösen magasabb dose-on (5%+ oldat) vagy nagy scalp-area-application. **NINCS** long-term safety evidence."},
    {"label": "Leállítás után", "body": "Scalp AR-blokád 1-2 hét alatt elmúlik (in vivo data sparse). Hair-loss-acceleráció visszatér gyorsan."}
  ],
  "quality": {
    "pure": [
      "NINCS pharma-grade source — research-chemical-vendor only (Sigma-Aldrich szintézis-grade, specialty-research-pharm)",
      "UGL 5% oldat ethanol/propylene-glycol: HPLC-tested forrás kötelező — vendor-purity gyakran <90%",
      "Some compounding pharmacies (US/EU specialty) készít custom formulációt off-label research-context"
    ],
    "caution": [
      "**NINCS Phase III biztonsági evidence** — Phase II terminálva systemikus feminizáció miatt",
      "Systemic abszorpció esetén: gynecomastia, sexual-dysfunction, prostate-function-zavar (chronic-use case-reportok)",
      "WADA S1 anabolic-related — competition-tilos",
      "Modern UGL-formulák in vivo data sparse — community-szintű evidence-en alapul",
      "Cross-reactivity AAS-aktivitással: ha systemikusan abszorbeálódik, AAS-cycle-szteroid-effect-jét blokkolhatja"
    ],
    "avoid": [
      "Fertility-tervezés-tervezés (systemic feminizing-effect potential)",
      "AAS-aktív cycle-en magas-dose (systemic-AR-blokád ütközik az AAS-aktivitással)",
      "Prophylactic AGA-NEM-prediszponált user-en (research-chemical-status, biztonsági evidence-hiány)",
      "Long-term chronic use (>12 hónap, in vivo safety data hiányos)",
      "Pregnant partner kontakt (RU58841 systemic abszorpció esetén magzati férfi-fejlődés-zavar potenciál)"
    ]
  },
  "interactions": [
    "Finasteride / Dutasteride: NEM ütközik mechanizmus-szinten (eltérő pathway: 5AR-inhibitor vs AR-antagonist), DE overlap-rizikó AGA-treatment-context-en",
    "AAS-aktív cycle: ha RU58841 systemikusan abszorbeálódik, az AAS-aktivitást blokkolhatja (AR-szignál neutralizáció)",
    "SARMs (RAD-140, LGD-4033): cross-reactivity AR-szinten — overlap-mechanism, NEM ajánlott együtt",
    "Topikális minoxidil 5%: kombinálható (eltérő pathway: vasodilator + AR-blokád)"
  ],
  "studies": [
    {"title": "Effects of finasteride (Proscar) and RU58841 on hair growth in stump-tail macaque", "authors": "Sawaya ME, Hordinsky MK.", "journal": "Skin Pharmacol. 1997;10(5-6):293-303.", "pmid": "9224249"},
    {"title": "RU58841: a non-steroidal antiandrogen with potential for dermatological application", "authors": "Battmann T, Bonfils A, Branche C, et al.", "journal": "J Steroid Biochem Mol Biol. 1994;48(1):55-60.", "pmid": "7969105"},
    {"title": "RU58841, a topical antiandrogen for the treatment of androgenetic alopecia", "authors": "De Brouwer B, Battmann T, Bonfils A, Branche C.", "journal": "Steroids. 1997;62(1):112-117.", "pmid": "9203282"},
    {"title": "The emerging pharmacotherapeutic agents for the treatment of male androgenetic alopecia", "authors": "Olsen EA, Hordinsky M, Whiting D, et al.", "journal": "Expert Opin Pharmacother. 2018;19(15):1739-1751.", "pmid": "30041755"}
  ],
  "faq": [
    {"q": "RU58841 5α-reduktáz gátló-e?", "a": "**NEM** — ez a leggyakoribb félreértés. A RU58841 **peripherális androgén-receptor (AR) antagonista**, NEM 5α-reduktáz inhibitor (mint Finasteride/Dutasteride). Mechanizmus-eltérés kritikus: (1) **Finasteride/Dutasteride** a testosterone → DHT konverziót gátolja (5AR-enzim-szinten); a DHT-szintet csökkenti az egész szervezetben; (2) **RU58841** a DHT-receptor-kötést blokkolja a scalp-szintjén; a DHT-szint NEM csökken, hanem az AR-szignál a follikulusban ki van kapcsolva. Praktikus következmény: a Finasteride/Dutasteride systemic DHT-suppression-t okoz (PFS-rizikó); a RU58841 csak scalp-szintű AR-blokád (claim), DE Phase II evidence szerint magasabb dose-on systemic-AR-blokád is előfordulhat (feminizing-effect)."},
    {"q": "Miért a 5AR sub-section-be soroltuk?", "a": "Use-case grouping convention alapján — AAS-hair-loss-prevention shared goal Finasteride/Dutasteride-szel. A felhasználói intent ugyanaz (AAS-AGA-acceleráció mitigation), és a research-decision-tree gyakran a 3 vegyületet együtt mérlegeli (Finasteride first-line → Dutasteride second-line → RU58841 niche-research-alternative). A mechanism-szintű különbség (5AR-inhibitor vs AR-antagonist) az entry-FAQ-ban explicit clarification-ban szerepel — a sub-section-besorolás NEM jelenti azt, hogy a vegyület 5AR-szubsztrátra hat."},
    {"q": "Beszerzhetőség és UGL-rizikó?", "a": "RU58841 **NINCS** pharma-grade source-on — research-chemical-vendor only (Sigma-Aldrich szintézis-grade, specialty research-pharm). UGL 5% oldat ethanol/propylene-glycol-vehiculum standard formuláció research-context-en, DE vendor-purity gyakran <90% (HPLC-test kötelező). Forrás-rizikók: (1) szubsztrát-pseudo (vendor a placebo-vehiculumot adja el); (2) nem-stabil compound (oldat hűtve tárolva stabil, szoba-hőmérsékleten 6 hónap után <50% potencia); (3) vendor-vehiculum-kontamináció (chronic scalp-irritation, allergia). 2-3 verified-source community-rated maradt 2024-25 (r/RU58841 community-tracking)."},
    {"q": "Sysztemikus feminization rizikó?", "a": "Phase II 1996 terminálási evidence: 5%+ oldat-application esetén magasabb dose-on (vagy nagy scalp-area-application) systemic AR-blokád előfordult, ami gynecomastia-formation, sexual-dysfunction, sperm-quality-deterioration-eseteket dokumentált a teszt-populáción. Modern UGL-formulák claim-jük az hogy a gyors szérum-eszteráz-clearance ezt megelőzi, de in vivo confirmation-data NINCS. Community-szintű reports (r/RU58841 sub) 0.5-1 mL napi 5% oldat-application esetén systemic-effect ritka — DE evidence sparse és anekdotikus. Risk-mitigation: low-dose start (0.5 mL napi vs 1 mL), kis scalp-area-application (vertex-only, NEM teljes scalp), monthly sexual-symptom self-monitor."},
    {"q": "Klinikai trial-státusz?", "a": "Phase II 1996 terminálva (Hoechst Marion Roussel, akkor Sanofi-Aventis), systemikus feminizáció miatt. **NINCS** Phase III trial. NINCS modern pharmaceutical-pipeline-szándék (utolsó pharmaceutical company-érdeklődés ~2000 körül megszűnt). Olsen 2018 emerging AGA pipeline review (PMID 30041755) említi mint historikus designer-pelyha, modern pipeline-jelölt nem. AGA-research-chemical community-szintű érdeklődés folyamatos, DE pharmaceutical-pipeline-resurrection nem várt. A jelenlegi research-context: 'mit lehetne, ha a Phase III befejeződött volna' — community-extrapoláció Phase I/II data-ból, NEM modern pharmaceutical evidence."}
  ],
  "related": ["finasteride", "dutasteride", "rad-140"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.5, "medium": 1, "high": 1},
    "unit": "mL napi 1x (topikális 5% oldat, scalp-application)",
    "note": "Research-chemical-context only. 5% oldat 0.5-1 mL napi 1x estére scalp-application (AGA-affected vertex + frontale). Risk-mitigation: low-dose start (0.5 mL), kis scalp-area, monthly sexual-symptom self-monitor. NEM ajánlott prophylactic-use vagy fertility-tervezés-context-en."
  },
  "bloodwork": {
    "preCycle": {
      "label": "RU58841-research-application-indítás előtt",
      "timing": "AGA-affected user + Finasteride/Dutasteride-inadequate-response OR PFS-rizikó-averse cél",
      "markers": "Total/Free Testosterone, E2, SHBG, DHT serum baseline (NEM csökkenni fog mint Finasteride-on — különböző mechanism), IIEF-5, PHQ-9, sperma-analysis ha fertility-emphasis.",
      "purpose": "Baseline + research-context risk-stratification. Pre-treatment: tudd meg, hogy a RU58841 research-chemical, NINCS Phase III evidence, biztonsági-data sparse."
    },
    "midCycle": {
      "label": "RU58841-application 4-8. hét",
      "timing": "Topical application-indítás +4-8 hét",
      "markers": "Total Test (változatlan várt — RU58841 nem 5AR-inhibitor), E2 (változatlan várt), IIEF-5 re-score (sexual-symptom monitor), PHQ-9, gynecomastia-symptom self-check.",
      "purpose": "Systemic-AR-blokád-symptom monitor. Ha sexual-dysfunction, gyno-symptom-onset → AZONNALI leállítás (Phase II terminálási-evidence reproduced)."
    },
    "postCycle": {
      "label": "RU58841 leállítás",
      "timing": "Utolsó application +2-4 hét",
      "markers": "IIEF-5 (recovery), PHQ-9, gyno-symptom-resolution monitor.",
      "purpose": "Confirm: systemic-effect (ha kialakult) reverzibilis 2-4 hét alatt (Phase II evidence). Ha persistent >3 hónap → szakorvosi (endokrinológus) konzultáció."
    },
    "cruise": {
      "label": "Chronic research-application AAS-cruise-on",
      "timing": "0.5-1 mL napi 1x topical",
      "markers": "Évente: IIEF-5, PHQ-9, DHT, Total Test, gyno-screen ultrasound (long-term feminizing-effect-monitor).",
      "purpose": "Chronic research-context: in vivo safety-data hiányos, évi clinical-screen prudent. **NEM** ajánlott a long-term chronic-application — research-chemical-status és sparse evidence."
    }
  }
}
