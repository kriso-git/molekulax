// Sobetirome (GC-1) – selective TRβ-agonist thyromimetic, investigational compound.
// Studies: Valcárcel-Hernández 2023 Thyroid PMID 36792926,
// Bohlen 2023 Brain PMID 37068912, Mészáros 2024 Eur J Neurosci PMID 38086536.
// INVESTIGATIONAL – not an approved drug, available on the research-chemical market.

export default {
  "id": "sobetirome",
  "sideEffects": [
    { "hu": "Vizsgálati vegyület korlátozott humán biztonsági adattal: csak lezárt Phase 1 (~2008), a metabolikus indikációra Phase 2 nem zajlott, így a mellékhatás-profil hiányosan jellemzett.", "en": "Investigational compound with limited human safety data: only a closed Phase 1 (~2008), no Phase 2 for the metabolic indication, so the side-effect profile is poorly characterized.", "pl": "Związek badawczy z ograniczonymi danymi o bezpieczeństwie u ludzi: tylko zamknięta faza 1 (~2008), brak fazy 2 dla wskazania metabolicznego, więc profil działań niepożądanych jest słabo scharakteryzowany." },
    { "hu": "HPT-tengely (hypothalamus-hypophysis-pajzsmirigy) szuppressziója: a thyromimetikus jelátvitel visszaszoríthatja a TSH-t és a saját pajzsmirigyhormon-termelést.", "en": "HPT-axis (hypothalamus-pituitary-thyroid) suppression: thyromimetic signaling can downregulate TSH and the body's own thyroid hormone production.", "pl": "Supresja osi HPT (podwzgórze-przysadka-tarczyca): sygnalizacja tyreomimetyczna może obniżyć TSH i własną produkcję hormonów tarczycy." },
    { "hu": "Pajzsmirigyhormon-túlsúly (thyrotoxikózis-szerű) tünetek túladagolásnál: szapora szívverés, szívdobogásérzés, izzadás, hőintolerancia, ingerlékenység, súlyvesztés, jóllehet a TRβ-szelektivitás célja épp a kardiális TRα kímélése.", "en": "Thyroid hormone excess (thyrotoxicosis-like) symptoms on overdose: palpitations, tachycardia, sweating, heat intolerance, irritability, weight loss, even though TRβ-selectivity aims to spare cardiac TRα.", "pl": "Objawy nadmiaru hormonów tarczycy (przypominające tyreotoksykozę) przy przedawkowaniu: kołatanie serca, tachykardia, pocenie, nietolerancja ciepła, drażliwość, utrata masy, mimo że selektywność TRβ ma oszczędzać sercowe TRα." },
    { "hu": "Magas dózisnál csont- és izomvesztés kockázata: a tartós pajzsmirigyhormon-túlsúly ismert hatása a csontvesztés (osteoporosis) és az izomkatabolizmus; a Sobetiromnál ezt humán hosszú-távú adat nem zárta ki.", "en": "Risk of bone and muscle loss at high doses: chronic thyroid hormone excess is a known driver of bone loss (osteoporosis) and muscle catabolism; long-term human data have not excluded this for sobetirome.", "pl": "Ryzyko utraty kości i mięśni przy wysokich dawkach: przewlekły nadmiar hormonów tarczycy to znana przyczyna utraty kości (osteoporoza) i katabolizmu mięśni; długoterminowe dane u ludzi nie wykluczyły tego dla sobetiromu." },
    { "hu": "Lehetséges thyromimetikus mellékhatások a Phase 1 keretén kívül feltérképezetlenek: fáradtság, hangulati ingadozás, GI-tünetek (hasmenés), amelyek a pajzsmirigyhormon-anyagcsere felgyorsításával társulhatnak.", "en": "Possible thyromimetic side effects uncharacterized beyond Phase 1: fatigue, mood changes, GI symptoms (diarrhea) that can accompany accelerated thyroid-hormone-driven metabolism.", "pl": "Możliwe działania tyreomimetyczne nieokreślone poza fazą 1: zmęczenie, wahania nastroju, objawy żołądkowo-jelitowe (biegunka), które mogą towarzyszyć przyspieszonemu metabolizmowi zależnemu od hormonów tarczycy." },
    { "hu": "Research-chemical eredetű termék kontaminációs és aluldozírozás/túldozírozás kockázata: az FDA + EMA sosem hagyta jóvá, így gyógyszerészeti minőség nem létezik; a deklarált tartalom HPLC-igazolatlan lehet.", "en": "Contamination and under/over-dosing risk from research-chemical sourcing: never FDA/EMA approved, so no pharmaceutical-grade product exists; declared content may be HPLC-unverified.", "pl": "Ryzyko zanieczyszczenia oraz zaniżenia/zawyżenia dawki przy zakupie jako research-chemical: nigdy niezatwierdzony przez FDA/EMA, więc nie istnieje jakość farmaceutyczna; deklarowana zawartość może być niezweryfikowana HPLC." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a pajzsmirigyhormon-jelátvitel kritikus a magzati és csecsemő-fejlődésben (kiemelten az idegrendszer), a zavarása teratogén/fejlődési kockázatot hordoz, ezért abszolút kerülendő.", "en": "Pregnancy and breastfeeding: thyroid hormone signaling is critical for fetal and infant development (especially the nervous system); disrupting it carries teratogenic/developmental risk, so it must be strictly avoided.", "pl": "Ciąża i karmienie piersią: sygnalizacja hormonów tarczycy jest kluczowa dla rozwoju płodu i niemowlęcia (zwłaszcza układu nerwowego); jej zaburzenie niesie ryzyko teratogenne/rozwojowe, dlatego należy bezwzględnie unikać." },
    { "hu": "Bármilyen pajzsmirigy-betegség (hyper- vagy hypothyreosis, Graves, csomós golyva) orvosi felügyelet nélkül: a thyromimetikus terhelés kiszámíthatatlanul befolyásolja a tengelyt.", "en": "Any thyroid disease (hyper- or hypothyroidism, Graves', nodular goiter) without medical supervision: the thyromimetic load affects the axis unpredictably.", "pl": "Jakakolwiek choroba tarczycy (nad- lub niedoczynność, Gravesa-Basedowa, wole guzkowe) bez nadzoru lekarza: obciążenie tyreomimetyczne nieprzewidywalnie wpływa na oś." },
    { "hu": "Pre-existing szív- és érrendszeri betegség (arrhythmia, koszorúér-betegség, szívelégtelenség): bár a TRβ-szelektivitás célja a kardiális TRα kímélése, a humán hosszú-távú szívbiztonsági adat hiányos.", "en": "Pre-existing cardiovascular disease (arrhythmia, coronary artery disease, heart failure): although TRβ-selectivity aims to spare cardiac TRα, long-term human cardiac safety data are lacking.", "pl": "Istniejąca choroba sercowo-naczyniowa (arytmia, choroba wieńcowa, niewydolność serca): choć selektywność TRβ ma oszczędzać sercowe TRα, brakuje długoterminowych danych o bezpieczeństwie sercowym u ludzi." },
    { "hu": "Osteoporosis vagy magas csonttörés-kockázat: a pajzsmirigyhormon-túlsúly fokozza a csontvesztést, ami ezeknél a betegeknél súlyosbodhat.", "en": "Osteoporosis or high fracture risk: thyroid hormone excess accelerates bone loss, which can worsen in these patients.", "pl": "Osteoporoza lub wysokie ryzyko złamań: nadmiar hormonów tarczycy przyspiesza utratę kości, co u tych pacjentów może się nasilić." },
    { "hu": "Egyidejű pajzsmirigyhormon-szubsztitúció (levothyroxine/T4 vagy liothyronine/T3): additív TRβ-jelátvitel és hyperthyreoid kockázat, kombináció csak szoros orvosi felügyelettel és pajzsmirigy-monitorozással (TSH, fT3, fT4).", "en": "Concurrent thyroid hormone replacement (levothyroxine/T4 or liothyronine/T3): additive TRβ signaling and hyperthyroid risk; combine only under close medical supervision with thyroid monitoring (TSH, fT3, fT4).", "pl": "Jednoczesne leczenie substytucyjne hormonami tarczycy (lewotyroksyna/T4 lub liotyronina/T3): addytywna sygnalizacja TRβ i ryzyko nadczynności; łączyć wyłącznie pod ścisłym nadzorem lekarza z monitorowaniem tarczycy (TSH, fT3, fT4)." },
    { "hu": "Versenysport-aktív sportoló: bár a Sobetirome nincs explicit a WADA-tiltólistán, a nem-jóváhagyott státusz miatt az 'S0 catch-all non-approved substance' klauzula érvényesíthető, NADA-konzultáció ajánlott.", "en": "Competitive athletes: although sobetirome is not explicitly on the WADA prohibited list, the non-approved status can trigger the 'S0 catch-all non-approved substance' clause; NADA consultation advised.", "pl": "Sportowcy wyczynowi: choć sobetirom nie jest wprost na liście zabronionej WADA, status niezatwierdzony może uruchomić klauzulę 'S0 catch-all substancji niezatwierdzonych'; zalecana konsultacja z NADA." }
  ],
  "name": "Sobetirome (GC-1)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#14b8a6",
  "tagColor": "rgba(20,184,166,0.18)",
  "shortDesc": "Orally active, selective thyroid hormone receptor beta (TRβ) agonist thyromimetic (research code: GC-1). Binds selectively to TRβ-1 (EC50 ~0.16 μM), sparing the cardiac TRα, aims to mimic the beneficial metabolic/lipid effects of T3 without the typical hyperthyroid cardiac side effects. INVESTIGATIONAL: completed Phase 1 (~2008); Phase 2 was NOT conducted for the metabolic indication.",
  "description": "Sobetirome (research code: GC-1) is an orally active, selective thyroid hormone receptor beta (TRβ) agonist – a so-called thyromimetic. It binds selectively to the TRβ-1 receptor (EC50 ~0.16 μM) while sparing the cardiac TRα receptor. Thanks to this selectivity, Sobetirome aims to mimic the beneficial metabolic and lipid-lowering effects of thyroid hormone (T3) without the typical hyperthyroid (thyroid-overactivity) cardiac side effects. Clinical status: Sobetirome completed Phase 1 trials (~2008) that showed lipid-lowering effects with both single and multiple dosing; Phase 2 was NOT conducted for the metabolic indication. The compound was studied alongside other TRβ agonists – resmetirom (MGL-3196), VK2809, eprotirome – for dyslipidaemia and NASH/MASH (fatty liver disease). Documented effects: it lowers LDL-cholesterol and lipoprotein(a), and stimulates steps of reverse cholesterol transport (shown in primate preclinical studies). It modulates genes for cholesterol and fatty-acid biosynthesis/metabolism. Fat-loss relevance: a TRβ-selective thyromimetic raises hepatic lipid handling and metabolic rate (lipid oxidation) more safely than full T3. A CNS-penetrant prodrug of the molecule, Sob-AM2, has also been studied for myelin/CNS indications (X-linked adrenoleukodystrophy, demyelination, MCT8 deficiency) – meaning the molecule's TRβ agonism has been explored beyond metabolism. STATUS FRAMING: investigational / research compound, NOT an approved drug; available on the research-chemical market with label-claim/purity caveats. Honest about the thyromimetic risks: suppression of the HPT axis (hypothalamic-pituitary-thyroid), potential bone/muscle effects at high doses, and NOT for anyone with thyroid disease without medical supervision.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Selective TRβ-agonist thyromimetic (thyroid hormone receptor beta), spares the cardiac TRα"
    },
    {
      "label": "Binding selectivity",
      "value": "TRβ-1 EC50 ~0.16 μM (selective vs. cardiac TRα)"
    },
    {
      "label": "Clinical status",
      "value": "Phase 1 completed (~2008, lipid-lowering effect); Phase 2 NOT conducted for the metabolic indication"
    },
    {
      "label": "Documented effects",
      "value": "LDL-cholesterol + lipoprotein(a) lowering, reverse cholesterol transport stimulation (primate preclinical)"
    },
    {
      "label": "Legal status",
      "value": "Investigational / research compound, NOT an approved drug (FDA + EMA never approved); available on the research-chemical market"
    }
  ],
  "mechanism": "Sobetirome (GC-1) is a selective thyroid hormone receptor beta (TRβ) agonist. The thyroid hormone receptor has two main isoforms: TRα (dominant in cardiac muscle, responsible for the cardiac effects such as heart rate) and TRβ (dominant in liver and metabolic tissue, responsible for lipid metabolism). Sobetirome binds selectively to the TRβ-1 receptor (EC50 ~0.16 μM) while sparing TRα – which is why it is called a thyromimetic: it mimics the beneficial metabolic effects of thyroid hormone (T3) without the hyperthyroid cardiac side effects. TRβ activation in the liver modulates genes for cholesterol and fatty-acid biosynthesis/metabolism, lowers LDL-cholesterol and lipoprotein(a), and stimulates steps of reverse cholesterol transport (shown in primate preclinical studies). The fat-loss relevance follows from this: TRβ-selective agonism raises hepatic lipid handling and metabolic rate (lipid oxidation), in principle more safely than full (non-selective) T3. A CNS-penetrant prodrug of the molecule, Sob-AM2, has explored TRβ agonism beyond metabolism in myelin/CNS indications (X-linked adrenoleukodystrophy, demyelination, MCT8 deficiency). CRITICAL: Sobetirome completed Phase 1 trials (~2008), but Phase 2 was NOT conducted for the metabolic indication, so long-term human efficacy and safety data are limited.",
  "legalStatus": "USA: FDA never approved (investigational compound; after completing Phase 1 ~2008, Phase 2 was not conducted for the metabolic indication). EU + EMA: never approved. HU + PL: not registered. Sobetirome is NOT an approved drug; it is available on the research-chemical market with label-claim/purity caveats. WADA: NOT explicitly listed, so technically in the 'allowed' category – HOWEVER, given the research / non-approved status, the 'S0 catch-all non-approved substance' clause could potentially apply for active competitive athletes, so NADA consultation is advised.",
  "onsetTime": "In Phase 1 trials the lipid-lowering effect was documented with multiple dosing; exact human onset for the metabolic indication is limitedly characterized (Phase 2 not conducted)",
  "halfLife": "Human PK limitedly published (Phase 1 ~2008); exact half-life not detailed in the public metabolic-indication data",
  "interactionsWith": [
    "levothyroxine",
    "liothyronine",
    "slu-pp-915",
    "atx-304"
  ],
  "aromatization": "Does not aromatize (not a steroid – selective TRβ-agonist thyromimetic). No CYP19 interaction.",
  "hepatotoxicity": "Thyromimetics are generally not directly hepatotoxic, and TRβ agonism in the liver may improve hepatic steatosis (fatty liver) – which is why Sobetirome and other TRβ agonists were studied for NASH/MASH. HOWEVER, TRβ overstimulation has theoretical risks, and long-term human data for Sobetirome are limited (Phase 2 was not conducted for the metabolic indication) – this should be stated honestly.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS, selective TRβ-agonist thyromimetic)",
  "bindingAffinity": "Binds selectively to the TRβ-1 receptor with an EC50 ~0.16 μM, sparing the cardiac-dominant TRα receptor.",
  "detectionWindow": "WADA-accredited detection protocol NOT specifically regulated (Sobetirome NOT explicitly listed). Out-of-competition LC-MS/MS possible under the 'S0 catch-all' category.",
  "benefits": [
    "Selective TRβ agonism: aims at the beneficial metabolic/lipid effects of T3 without the typical hyperthyroid cardiac side effects (spares the cardiac TRα)",
    "Documented lipid-lowering effect in Phase 1 trials (single and multiple dosing)",
    "LDL-cholesterol and lipoprotein(a) lowering",
    "Stimulation of reverse cholesterol transport steps (shown in primate preclinical studies)",
    "Modulation of cholesterol and fatty-acid biosynthesis/metabolism genes; raises hepatic lipid handling + metabolic rate (lipid oxidation)",
    "HOWEVER: Phase 2 was NOT conducted for the metabolic indication – the benefit list rests on an unapproved clinical indication, INVESTIGATIONAL framework"
  ],
  "quickStart": [
    "INVESTIGATIONAL / research compound – NOT an approved drug (FDA + EMA never approved); Phase 2 not conducted for the metabolic indication",
    "Available on the research-chemical market with label-claim/purity caveats – declared content may be HPLC-untested",
    "Thyromimetic: may suppress the HPT axis (thyroid axis); potential bone/muscle effects at high doses",
    "NOT for anyone with thyroid disease without medical supervision; monitoring thyroid function (TSH, fT3, fT4) is warranted"
  ],
  "quality": {
    "pure": [
      "FDA + EMA never approved – Rx-pharmacy-sourced Sobetirome does NOT exist",
      "Available on the research-chemical market with label-claim/purity caveats (HPLC-untested content is high)",
      "The purity and actual active content of research-chemical batches are not guaranteed; independent HPLC purity verification is warranted"
    ],
    "caution": [
      "INVESTIGATIONAL status – Phase 2 not conducted for the metabolic indication; long-term human efficacy and safety data are limited",
      "Thyromimetic risk: suppression of the HPT axis (hypothalamic-pituitary-thyroid)",
      "Potential bone and muscle effects at high doses (known risks of thyroid-hormone excess)"
    ],
    "avoid": [
      "Thyroid disease (hyper- or hypothyroidism) without medical supervision – absolute caution",
      "Pre-existing heart disease (although TRβ selectivity spares TRα, human long-term data are limited)",
      "Pregnancy + breastfeeding (thyroid-hormone signaling is critical to fetal development)",
      "Active competitive athletes – WADA 'S0 catch-all non-approved substance' category may potentially apply",
      "Online research-chemical Sobetirome with label-claim discrepancy + HPLC-untested-batch risk"
    ]
  },
  "interactions": [
    "Levothyroxine (T4) – thyroid hormone replacement; the thyromimetic adds additive TRβ signaling, monitoring the HPT axis + TSH is warranted, combine only under medical supervision",
    "Liothyronine (T3) – active thyroid hormone; overlapping TR agonism, additive thyromimetic effect + hyperthyroid risk, combination not advised without supervision",
    "SLU-PP-915 – metabolic/metabolism-directed compound, research context; no clinical combination data",
    "ATX-304 – metabolic/metabolism-directed compound, research context; no clinical combination data"
  ],
  "studies": [
    {
      "title": "Maternal Administration of the CNS-Selective Sobetirome Prodrug Sob-AM2 Exerts Thyromimetic Effects in Murine MCT8-Deficient Fetuses",
      "authors": "Valcárcel-Hernández V, Guillén-Yunta M, Scanlan TS, Bárez-López S et al.",
      "journal": "Thyroid. 2023",
      "pmid": "36792926"
    },
    {
      "title": "Promyelinating drugs promote functional recovery in an autism spectrum disorder mouse model of Pitt-Hopkins syndrome",
      "authors": "Bohlen JF, Cleary CM, Das D, Sripathy SR et al.",
      "journal": "Brain. 2023",
      "pmid": "37068912"
    },
    {
      "title": "Sobetirome rescues α-synuclein-mediated demyelination in an in vitro model of multiple system atrophy",
      "authors": "Mészáros L, Himmler M, Schneider Y, Arnold P et al.",
      "journal": "Eur J Neurosci. 2024",
      "pmid": "38086536"
    }
  ],
  "faq": [
    {
      "q": "What is a thyromimetic, and why is Sobetirome selective for TRβ?",
      "a": "A thyromimetic is a compound that mimics the effects of thyroid hormone (T3). The thyroid hormone receptor has two main isoforms: TRα (dominant in cardiac muscle, responsible for cardiac effects) and TRβ (dominant in liver and metabolic tissue, responsible for lipid metabolism). Sobetirome (GC-1) binds selectively to the TRβ-1 receptor (EC50 ~0.16 μM) while sparing TRα. The goal of this selectivity: preserve the beneficial metabolic and lipid-lowering effects of T3, but avoid the typical hyperthyroid cardiac side effects (e.g. a racing heart)."
    },
    {
      "q": "What is Sobetirome's clinical status – is it an approved drug?",
      "a": "NO. Sobetirome is an investigational / research compound, NOT an approved drug (neither the FDA nor the EMA has approved it). It completed Phase 1 trials (~2008) that showed lipid-lowering effects with single and multiple dosing – but Phase 2 was NOT conducted for the metabolic indication. It is available on the research-chemical market with label-claim/purity caveats. Long-term human efficacy and safety data are limited."
    },
    {
      "q": "What documented metabolic effects does it have?",
      "a": "Sobetirome lowers LDL-cholesterol and lipoprotein(a), and stimulates steps of reverse cholesterol transport in primate preclinical studies. It modulates genes for cholesterol and fatty-acid biosynthesis/metabolism. The compound was studied for dyslipidaemia and NASH/MASH (fatty liver) alongside other TRβ agonists – resmetirom (MGL-3196), VK2809, eprotirome. The fat-loss relevance comes from the fact that TRβ-selective agonism raises hepatic lipid handling and metabolic rate (lipid oxidation), in principle more safely than full T3."
    },
    {
      "q": "What are its risks, and who should NOT use it?",
      "a": "Although thyromimetics are generally not directly hepatotoxic (TRβ agonism may even improve hepatic steatosis), TRβ overstimulation has theoretical risks: it may suppress the HPT axis (thyroid axis) and may have potential bone and muscle effects at high doses. Long-term human data are limited (Phase 2 was not conducted). It is NOT for anyone with thyroid disease without medical supervision; monitoring thyroid function (TSH, fT3, fT4) is warranted. For active competitive athletes the WADA 'S0 catch-all' category may potentially apply."
    }
  ],
  "related": [
    "levothyroxine",
    "liothyronine",
    "slu-pp-915",
    "atx-304"
  ],
  "anecdote": "Community accounts frame Sobetirome (GC-1) as a selective, 'cardiac-sparing' thyromimetic valued for fat loss and lipid-profile improvement – on the logic that TRβ selectivity is meant to preserve the metabolism-accelerating effect of thyroid hormone without the racing heart and classic hyperthyroid side effects. Important context: this is an investigational compound, NOT an approved drug, and Phase 2 was not conducted for the metabolic indication – so these accounts do not substitute for clinical evidence. On the research-chemical market, label-claim and purity are not guaranteed. For anyone interested, monitoring thyroid function (TSH, fT3, fT4) and medical supervision is the responsible framework, especially with any thyroid involvement."
}
