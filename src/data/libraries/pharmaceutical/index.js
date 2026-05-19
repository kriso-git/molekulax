// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.653Z
// Phase 12: per-lang entry chunks. loadEntry(id, lang) dynamic-imports
// entries/<lang>/<id>.js. Library-level fields (categories, effects, faq,
// labels) still triplet — only entry bodies are lang-split.

import { CATEGORIES, PHARMACEUTICAL_CATEGORIES, getPharmaceuticalCategories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = [
  {
    "id": "metformin",
    "name": "Metformin",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "A 2-es típusú cukorbetegség első-vonal orális kezelése világszerte. WHO Essential Medicines, ADA és EASD guideline-anchor 1957 óta.",
      "en": "First-line oral therapy for type 2 diabetes worldwide. WHO Essential Medicines, ADA and EASD guideline anchor since 1957.",
      "pl": "Lek pierwszego rzutu w terapii doustnej cukrzycy typu 2 na całym świecie. Lek podstawowy WHO, kotwica wytycznych ADA i EASD od 1957 r."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "A10BA02"
  },
  {
    "id": "atorvastatin",
    "name": "Atorvastatin",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "A leginkább felírt nagy-intenzitású statin, HMG-CoA reduktáz-gátló. AHA/ACC és ESC lipid-guideline-anchor 1996 óta. Primer és szekunder ASCVD-prevenció gold standard.",
      "en": "The most prescribed high-intensity statin, HMG-CoA reductase inhibitor. AHA/ACC and ESC lipid guideline anchor since 1996. Gold standard for primary and secondary ASCVD prevention.",
      "pl": "Najczęściej przepisywana statyna o wysokiej intensywności, inhibitor reduktazy HMG-CoA. Kotwica wytycznych lipidowych AHA/ACC i ESC od 1996 r. Złoty standard pierwotnej i wtórnej prewencji ASCVD."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "C10AA05"
  },
  {
    "id": "tadalafil",
    "name": "Tadalafil",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Hosszú felezési idejű (17,5 óra) PDE5-inhibitor. FDA-jóváhagyott erektilis diszfunkcióra (Cialis), benignus prostata-hiperpláziára (BPH) és pulmonális artériás hipertóniára (Adcirca).",
      "en": "Long half-life (17.5 h) PDE5 inhibitor. FDA-approved for erectile dysfunction (Cialis), benign prostatic hyperplasia (BPH), and pulmonary arterial hypertension (Adcirca).",
      "pl": "Inhibitor PDE5 o długim okresie półtrwania (17,5 h). Zatwierdzony przez FDA dla zaburzeń erekcji (Cialis), łagodnego rozrostu prostaty (BPH) i tętniczego nadciśnienia płucnego (Adcirca)."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), urológus vagy háziorvos felírható",
      "en": "Prescription only (Rx), urologist or GP can prescribe",
      "pl": "Na receptę (Rx), urolog lub lekarz rodzinny może przepisać"
    },
    "atcCode": "G04BE08"
  },
  {
    "id": "bupropion",
    "name": "Bupropion",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Norepinefrin-dopamin reuptake gátló (NDRI) atipikus antidepresszáns. MDD + szezonális affektív zavar + dohányzás-leszokás (Zyban) indikációkkal. Nem szexuális diszfunkciót okoz, kevéssé szedáló.",
      "en": "Norepinephrine-dopamine reuptake inhibitor (NDRI) atypical antidepressant. Indications: MDD, seasonal affective disorder, smoking cessation (Zyban). No sexual dysfunction, minimally sedating.",
      "pl": "Inhibitor wychwytu zwrotnego norepinefryny-dopaminy (NDRI), atypowy antydepresant. Wskazania: MDD, sezonowe zaburzenia afektywne, rzucenie palenia (Zyban). Bez dysfunkcji seksualnych, minimalnie sedujący."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), MDD-re és dohányzás-leszokásra felírható",
      "en": "Prescription only (Rx), prescribed for MDD and smoking cessation",
      "pl": "Na receptę (Rx), przepisywany dla MDD i rzucania palenia"
    },
    "atcCode": "N06AX12"
  },
  {
    "id": "modafinil",
    "name": "Modafinil",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Ébrenléti-promotáló szer, FDA-jóváhagyott narkolepszia, műszak-munka alvászavar, OSA-adjunkt indikációkkal. DEA Schedule IV. Off-label kognitív-fokozás MolekulaX Nootropikum-könyvtárában külön framing.",
      "en": "Wakefulness-promoting agent, FDA-approved for narcolepsy, shift work sleep disorder, OSA adjunct. DEA Schedule IV. Off-label cognitive enhancement framing separate in MolekulaX Nootropic library.",
      "pl": "Środek promujący czuwanie, zatwierdzony przez FDA dla narkolepsji, zaburzeń snu zmianowego, OSA jako uzupełnienie. DEA Schedule IV. Off-label wzmocnienie poznawcze osobno w bibliotece Nootropik MolekulaX."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), DEA Schedule IV (USA), HU-ban szakorvosi javasolt",
      "en": "Prescription only (Rx), DEA Schedule IV (USA), specialist recommended in HU",
      "pl": "Na receptę (Rx), DEA Schedule IV (USA), specjalista zalecany w PL"
    },
    "atcCode": "N06BA07"
  },
  {
    "id": "levothyroxin",
    "name": "Levothyroxin (L-T4)",
    "image": null,
    "accentColor": "#f59e0b",
    "tagColor": "rgba(245,158,11,0.18)",
    "shortDesc": {
      "hu": "Szintetikus tiroxin (T4) hormon-pótlás hipotireózisra. WHO Essential Medicines, az egyik legtöbbet felírt gyógyszer globálisan. ATA és ETA endokrin-guideline-anchor.",
      "en": "Synthetic thyroxine (T4) hormone replacement for hypothyroidism. WHO Essential Medicines, one of the most prescribed drugs globally. ATA and ETA endocrine guideline anchor.",
      "pl": "Syntetyczne hormonalne uzupełnienie tyroksyną (T4) na niedoczynność tarczycy. Lek podstawowy WHO, jeden z najczęściej przepisywanych leków globalnie. Kotwica wytycznych endokrynologicznych ATA i ETA."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), háziorvos vagy endokrinológus felírható",
      "en": "Prescription only (Rx), GP or endocrinologist can prescribe",
      "pl": "Na receptę (Rx), lekarz rodzinny lub endokrynolog może przepisać"
    },
    "atcCode": "H03AA01"
  },
  {
    "id": "finasteride",
    "name": "Finasteride",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "5α-reduktáz II-es típusú szelektív gátló. FDA-jóváhagyott androgenetikus alopeciára (Propecia 1 mg) és BPH-ra (Proscar 5 mg). A DHT képződés ~70%-kal csökkenti.",
      "en": "5α-reductase type II selective inhibitor. FDA-approved for androgenetic alopecia (Propecia 1 mg) and BPH (Proscar 5 mg). Reduces DHT formation by ~70%.",
      "pl": "Selektywny inhibitor 5α-reduktazy typu II. Zatwierdzony przez FDA dla androgennej łysienia (Propecia 1 mg) i BPH (Proscar 5 mg). Redukuje tworzenie DHT o ~70%."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), bőrgyógyász vagy urológus felírható",
      "en": "Prescription only (Rx), dermatologist or urologist can prescribe",
      "pl": "Na receptę (Rx), dermatolog lub urolog może przepisać"
    },
    "atcCode": "D11AX10 (1 mg alopecia) / G04CB01 (5 mg BPH)"
  },
  {
    "id": "amoxicillin",
    "name": "Amoxicillin",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Széles spektrumú β-laktám penicillin-osztálybeli antibiotikum. WHO Essential Medicines, az egyik legtöbbet felírt antibiotikum a világon. Standard első-vonal otitisz, sinusitis, pneumonia, UTI, dentális prophylaxis és H. pylori eradikáció.",
      "en": "Broad-spectrum β-lactam penicillin-class antibiotic. WHO Essential Medicines, one of the most prescribed antibiotics worldwide. Standard first-line for otitis media, sinusitis, pneumonia, UTI, dental prophylaxis, and H. pylori eradication.",
      "pl": "Antybiotyk β-laktamowy o szerokim spektrum z grupy penicylin. Lek podstawowy WHO, jeden z najczęściej przepisywanych antybiotyków na świecie. Standard pierwszej linii dla zapalenia ucha środkowego, zatok, zapalenia płuc, UTI, profilaktyki stomatologicznej i eradykacji H. pylori."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), antibiotikum-stewardship-protokoll",
      "en": "Prescription only (Rx), antibiotic stewardship protocol",
      "pl": "Na receptę (Rx), protokół stewardship antybiotykowego"
    },
    "atcCode": "J01CA04"
  },
  {
    "id": "empagliflozin",
    "name": "Empagliflozin",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "SGLT2-inhibitor (Jardiance), Boehringer Ingelheim/Eli Lilly. T2DM + HFrEF/HFpEF + CKD kardio-reno-protektív gyógyszer.",
      "en": "SGLT2 inhibitor (Jardiance), Boehringer Ingelheim/Eli Lilly. Cardio-reno-protective drug for T2DM + HFrEF/HFpEF + CKD.",
      "pl": "Inhibitor SGLT2 (Jardiance), Boehringer Ingelheim/Eli Lilly. Lek kardio-renoprotekcyjny dla T2DM + HFrEF/HFpEF + CKD."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "A10BK03"
  },
  {
    "id": "escitalopram",
    "name": "Escitalopram",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "SSRI, citalopram S-enantiomere (Lundbeck Lexapro/Cipralex). MDD + szorongásos zavarok első-vonal Rx. Cipriani 2018 meta szerint top-3 hatékonyság.",
      "en": "SSRI, S-enantiomer of citalopram (Lundbeck Lexapro/Cipralex). First-line Rx for MDD + anxiety disorders. Cipriani 2018 meta-analysis: top-3 efficacy.",
      "pl": "SSRI, S-enancjomer cytalopramu (Lundbeck Lexapro/Cipralex). Pierwsza linia Rx dla MDD + zaburzeń lękowych. Metaanaliza Cipriani 2018: top-3 skuteczność."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "N06AB10"
  },
  {
    "id": "fluoxetine",
    "name": "Fluoxetine",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Az első SSRI (Eli Lilly Prozac, FDA 1987). Ultra-hosszú felezési idő (4-6 nap), pediátriai MDD-re FDA-jóváhagyott.",
      "en": "The first SSRI (Eli Lilly Prozac, FDA 1987). Ultra-long half-life (4-6 days), FDA-approved for pediatric MDD.",
      "pl": "Pierwszy SSRI (Eli Lilly Prozac, FDA 1987). Ultra-długi okres półtrwania (4-6 dni), zatwierdzony przez FDA dla pediatrycznego MDD."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "N06AB03"
  },
  {
    "id": "methylphenidate",
    "name": "Methylphenidate",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "DAT/NET-inhibitor stimuláns, ADHD első-vonal Rx (Novartis Ritalin, Janssen Concerta). DEA Schedule II, visszaélés-potenciál szignifikáns.",
      "en": "DAT/NET inhibitor stimulant, ADHD first-line Rx (Novartis Ritalin, Janssen Concerta). DEA Schedule II, significant abuse potential.",
      "pl": "Inhibitor DAT/NET stymulant, lek pierwszej linii ADHD Rx (Novartis Ritalin, Janssen Concerta). DEA Schedule II, znaczący potencjał nadużywania."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), DEA Schedule II (USA), HU-ban kábítószer-receptre",
      "en": "Prescription only (Rx), DEA Schedule II (USA), HU narcotic Rx",
      "pl": "Na receptę (Rx), DEA Schedule II (USA), PL recepta narkotyczna"
    },
    "atcCode": "N06BA04"
  },
  {
    "id": "rosuvastatin",
    "name": "Rosuvastatin",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Hidrofil, nagy-intenzitású statin (AstraZeneca Crestor). JUPITER-trial alapján primer ASCVD-prevenció emelt CRP-nél is. Kevés CYP-interakció.",
      "en": "Hydrophilic high-intensity statin (AstraZeneca Crestor). JUPITER trial established primary ASCVD prevention even at elevated CRP. Few CYP interactions.",
      "pl": "Hydrofilna statyna o wysokiej intensywności (AstraZeneca Crestor). JUPITER ustanowił prewencję pierwotną ASCVD nawet przy podwyższonym CRP. Mało interakcji CYP."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "C10AA07"
  },
  {
    "id": "hydrocortisone",
    "name": "Hydrocortisone",
    "image": null,
    "accentColor": "#f59e0b",
    "tagColor": "rgba(245,158,11,0.18)",
    "shortDesc": {
      "hu": "Természetes glükokortikoid (Cortef), Addison-betegség és mellékvese-elégtelenség élethosszig tartó hormon-pótlása. Standard 15-25 mg/nap.",
      "en": "Natural glucocorticoid (Cortef), lifelong hormone replacement for Addison disease and adrenal insufficiency. Standard 15-25 mg/day.",
      "pl": "Naturalny glukokortykoid (Cortef), dożywotnie uzupełnienie hormonalne w chorobie Addisona i niewydolności nadnerczy. Standard 15-25 mg/dzień."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), endokrinológus által felügyelt",
      "en": "Prescription only (Rx), endocrinologist-supervised",
      "pl": "Na receptę (Rx), nadzorowane przez endokrynologa"
    },
    "atcCode": "H02AB09"
  },
  {
    "id": "liothyronine",
    "name": "Liothyronine (T3)",
    "image": null,
    "accentColor": "#f59e0b",
    "tagColor": "rgba(245,158,11,0.18)",
    "shortDesc": {
      "hu": "Szintetikus T3 trijodotironin (Cytomel). Specifikus indikációkban (mixedéma-kóma, T4-konverzió-zavar, MDD-augmentáció). NEM rutin-választás.",
      "en": "Synthetic T3 triiodothyronine (Cytomel). Specific indications (myxedema coma, T4-conversion impairment, MDD augmentation). NOT routine choice.",
      "pl": "Syntetyczna T3 trójjodotyronina (Cytomel). Specyficzne wskazania (śpiączka miksowobrzękowa, zaburzenie konwersji T4, augmentacja MDD). NIE rutynowy wybór."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "H03AA02"
  },
  {
    "id": "ciprofloxacin",
    "name": "Ciprofloxacin",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Fluorokinolon antibiotikum (Bayer Cipro). UTI, gasztrointesztinális + komplex Gram-negatív infekciók. FDA boxed warning: ínszakadás + perifériás neuropátia.",
      "en": "Fluoroquinolone antibiotic (Bayer Cipro). UTI, GI + complex Gram-negative infections. FDA boxed warning: tendon rupture + peripheral neuropathy.",
      "pl": "Antybiotyk fluorochinolonowy (Bayer Cipro). UTI, GI + złożone infekcje Gram-ujemne. Ostrzeżenie FDA boxed: zerwania ścięgien + neuropatia obwodowa."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), stewardship-protokoll",
      "en": "Prescription only (Rx), stewardship protocol",
      "pl": "Na receptę (Rx), protokół stewardship"
    },
    "atcCode": "J01MA02"
  },
  {
    "id": "doxycycline",
    "name": "Doxycycline",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Tetraciklin antibiotikum (Vibramycin). Lyme, malária-prevenció, acne, klamidia, atipikus pneumónia. 100 mg standard.",
      "en": "Tetracycline antibiotic (Vibramycin). Lyme, malaria prevention, acne, chlamydia, atypical pneumonia. 100 mg standard.",
      "pl": "Antybiotyk tetracyklinowy (Vibramycin). Lyme, profilaktyka malarii, trądzik, chlamydia, atypowe zapalenie płuc. Standard 100 mg."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "J01AA02"
  },
  {
    "id": "tamoxifen",
    "name": "Tamoxifen",
    "image": null,
    "accentColor": "#ec4899",
    "tagColor": "rgba(236,72,153,0.18)",
    "shortDesc": {
      "hu": "Szelektív ösztrogén receptor modulátor (SERM). Hormonreceptor-pozitív emlőkarcinóma adjuváns és metastatikus kezelése (Nolvadex).",
      "en": "Selective estrogen receptor modulator (SERM). Adjuvant and metastatic treatment of hormone receptor-positive breast cancer (Nolvadex).",
      "pl": "Selektywny modulator receptora estrogenowego (SERM). Leczenie uzupełniające i przerzutowe HR-dodatniego raka piersi (Nolvadex)."
    },
    "tier": 3,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), onkológus felügyelet",
      "en": "Prescription only (Rx), oncologist-supervised",
      "pl": "Na receptę (Rx), nadzór onkologa"
    },
    "atcCode": "L02BA01"
  },
  {
    "id": "minoxidil",
    "name": "Minoxidil",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "K-csatorna-aktivátor topikális vagy orális szer (Rogaine, Loniten + LDOM). Két adagolási mód, eltérő szisztémás expozícióval.",
      "en": "K-channel activator, topical or oral (Rogaine, Loniten + LDOM). Two administration routes with very different systemic exposure profiles.",
      "pl": "Aktywator kanałów K, miejscowy lub doustny (Rogaine, Loniten + LDOM). Dwie drogi podania z różną ekspozycją systemową."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "OTC topikális, vényköteles orális (Loniten + LDOM)",
      "en": "OTC topical, prescription oral (Loniten + LDOM)",
      "pl": "OTC miejscowy, na receptę doustny (Loniten + LDOM)"
    },
    "atcCode": "D11AX01 (topical) / C02DC01 (oral)",
    "variantCount": 2
  },
  {
    "id": "isotretinoin",
    "name": "Isotretinoin",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "13-cisz-retinoinsav (Roche Roaccutane). Súlyos acne nodulocystica gold-standard. FDA X kategória súlyos teratogenitás miatt — iPLEDGE program kötelező.",
      "en": "13-cis-retinoic acid (Roche Roaccutane). Gold standard for severe nodulocystic acne. FDA category X due to severe teratogenicity — iPLEDGE program mandatory.",
      "pl": "Kwas 13-cis-retinowy (Roche Roaccutane). Złoty standard dla ciężkiego trądziku guzkowo-torbielowatego. Kategoria X FDA z powodu teratogenności — program iPLEDGE obowiązkowy."
    },
    "tier": 3,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), bőrgyógyász protokoll + terhességi prevenció",
      "en": "Prescription only (Rx), dermatologist protocol + pregnancy prevention",
      "pl": "Na receptę (Rx), protokół dermatologa + prewencja ciąży"
    },
    "atcCode": "D10BA01"
  },
  {
    "id": "tretinoin",
    "name": "Tretinoin",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Topikális retinoid all-transz-retinoinsav. Acne, fotoöregedés, hiperpigmentáció kezelés. Bőrgyógyászati gold-standard.",
      "en": "Topical retinoid all-trans-retinoic acid. Acne, photoaging, hyperpigmentation treatment. Dermatological gold standard.",
      "pl": "Miejscowy retinoid kwas all-trans-retinowy. Trądzik, fotostarzenie, leczenie hiperpigmentacji. Dermatologiczny złoty standard."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), bőrgyógyász felügyelet",
      "en": "Prescription only (Rx), dermatologist-supervised",
      "pl": "Na receptę (Rx), nadzór dermatologa"
    },
    "atcCode": "D10AD01"
  }
]

export const TOP_ENTRY_IDS = [
  "metformin",
  "escitalopram",
  "atorvastatin",
  "tadalafil",
  "rosuvastatin",
  "bupropion",
  "modafinil",
  "levothyroxin",
  "finasteride",
  "amoxicillin"
]

export const pharmaceuticalLibrary = {
  id: "pharmaceutical",
  name: {
  "hu": "Gyógyszerek Könyvtár",
  "en": "Pharmaceuticals Library",
  "pl": "Biblioteka środków farmaceutycznych"
},
  description: {
  "hu": "Hatóanyag-szintű gyógyszer-edukáció hivatalos forrásokból · PubMed, FDA, EMA, SmPC · NEM helyettesíti az orvosi konzultációt",
  "en": "Active-ingredient-level drug education from official sources · PubMed, FDA, EMA, SmPC · NOT a substitute for medical consultation",
  "pl": "Edukacja farmaceutyczna na poziomie substancji czynnej z oficjalnych źródeł · PubMed, FDA, EMA, ChPL · NIE zastępuje konsultacji lekarskiej"
},
  accent: "#00ff99",
  meta: LIBRARY_ENTRY_META,
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  entryCategoryMap: PHARMACEUTICAL_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
  "hu": "Terápiás területek",
  "en": "Therapeutic Areas",
  "pl": "Obszary Terapeutyczne"
},
  effectsSubtitle: {
  "hu": "Hol és mire hatnak ezek a gyógyszerek · indikáció + mechanizmus + evidencia",
  "en": "Where and how these medications act · indication + mechanism + evidence",
  "pl": "Gdzie i jak działają te leki · wskazanie + mechanizm + dowody"
},
  labels: {
  "topTitle": {
    "hu": "10 Legfontosabb Gyógyszer-hatóanyag",
    "en": "Top 10 Most Discussed Pharmaceuticals",
    "pl": "10 najważniejszych substancji farmaceutycznych"
  },
  "allTitle": {
    "hu": "Összes Gyógyszer",
    "en": "All Pharmaceuticals",
    "pl": "Wszystkie środki farmaceutyczne"
  },
  "allCount": {
    "hu": "gyógyszer-hatóanyag",
    "en": "pharmaceutical compounds",
    "pl": "substancji farmaceutycznych"
  },
  "helpBody": {
    "hu": "Edukatív gyógyszer-info hivatalos forrásokból (PubMed, FDA, EMA). NEM helyettesíti az orvosi konzultációt vagy az SmPC-t. Beszélj az orvosoddal!",
    "en": "Educational drug info from official sources (PubMed, FDA, EMA). Does NOT replace medical consultation or the SmPC. Talk to your doctor!",
    "pl": "Edukacyjne informacje o lekach z oficjalnych źródeł (PubMed, FDA, EMA). NIE zastępuje konsultacji lekarskiej ani ChPL. Porozmawiaj z lekarzem!"
  },
  "relatedLabel": {
    "hu": "Kapcsolódó hatóanyagok",
    "en": "Related compounds",
    "pl": "Powiązane substancje"
  },
  "contactTitle": {
    "hu": "Van kérdésed egy gyógyszerrel kapcsolatban?",
    "en": "Have a question about a medication?",
    "pl": "Masz pytanie o lek?"
  }
},
  features: {
  "faq": false,
  "doseRecommendations": false,
  "calculator": false,
  "qualityGrid": false,
  "interactions": false,
  "quickStart": false,
  "labTerminal": true,
  "chemicalFormulaPlaceholder": false
},
}

// Phase 12 per-lang: Vite template-literal-import emits one chunk per
// (lang, id) combo because the static prefix ./entries/ lets Vite glob
// every matching file at build time.
export async function loadEntry(id, lang) {
  const mod = await import(`./entries/${lang}/${id}.js`)
  return mod.default
}

export { CATEGORIES, PHARMACEUTICAL_CATEGORIES, getPharmaceuticalCategories, getResearchLevel, EFFECT_CATEGORIES }
