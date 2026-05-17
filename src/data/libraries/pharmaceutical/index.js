// Auto-decomposed by scripts/decompose-library.mjs at 2026-05-17T15:42:14.893Z
// LIBRARY_ENTRY_META[] is the synchronous metadata array used by tiles + switcher.
// Full Entry objects live in entries/<id>.js and are loaded via loadEntry(id).
// All non-entries library-level fields (categories, effects, etc.) are imported as before.

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
    "id": "semaglutide",
    "name": "Semaglutide",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "GLP-1 receptor agonista, T2DM és obesity FDA-jóváhagyott Rx (Ozempic, Wegovy, Rybelsus). Az elmúlt évtized blockbuster anyagcsere-szere.",
      "en": "GLP-1 receptor agonist, FDA-approved Rx for T2DM and obesity (Ozempic, Wegovy, Rybelsus). The blockbuster metabolic agent of the past decade.",
      "pl": "Agonista receptora GLP-1, lek Rx zatwierdzony przez FDA dla T2DM i otyłości (Ozempic, Wegovy, Rybelsus). Blockbusterowy lek metaboliczny minionej dekady."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), egyes EU-országokban GLP-1 RA-szakorvosi szűkítés",
      "en": "Prescription only (Rx), GLP-1 RA specialist gating in some EU countries",
      "pl": "Na receptę (Rx), w niektórych krajach UE ograniczenie do specjalistów GLP-1 RA"
    },
    "atcCode": "A10BJ06"
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
    "id": "sertralin",
    "name": "Sertralin",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Szelektív szerotonin reuptake-gátló (SSRI), az MDD és szorongásos zavarok első-vonal Rx kezelése. Cipriani 2018 antidepresszáns-meta szerint a legkedvezőbb hatékonyság-tolerabilitás arány.",
      "en": "Selective serotonin reuptake inhibitor (SSRI), first-line Rx for MDD and anxiety disorders. Cipriani 2018 antidepressant meta showed best efficacy-tolerability ratio.",
      "pl": "Selektywny inhibitor wychwytu zwrotnego serotoniny (SSRI), lek pierwszego rzutu Rx dla MDD i zaburzeń lękowych. Metaanaliza Cipriani 2018 wykazała najkorzystniejszy stosunek skuteczności do tolerancji."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), pszichiáter vagy háziorvos felírható",
      "en": "Prescription only (Rx), psychiatrist or GP can prescribe",
      "pl": "Na receptę (Rx), psychiatra lub lekarz rodzinny może przepisać"
    },
    "atcCode": "N06AB06"
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
    "id": "tirzepatide",
    "name": "Tirzepatide",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Dual GIP + GLP-1 receptor agonista, Eli Lilly Mounjaro (T2DM) és Zepbound (obesity). SURMOUNT-5 trial szerint head-to-head felülmúlja a Semaglutide-ot.",
      "en": "Dual GIP + GLP-1 receptor agonist, Eli Lilly Mounjaro (T2DM) and Zepbound (obesity). SURMOUNT-5 trial showed head-to-head superiority over semaglutide.",
      "pl": "Podwójny agonista receptora GIP + GLP-1, Eli Lilly Mounjaro (T2DM) i Zepbound (otyłość). SURMOUNT-5 wykazało wyższość head-to-head nad semaglutydem."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "A10BX16"
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
    "id": "liraglutide",
    "name": "Liraglutide",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Napi GLP-1 receptor agonista, Novo Nordisk Victoza (T2DM) és Saxenda (obesity). A Semaglutide elődje, ~13 órás felezési idő.",
      "en": "Daily GLP-1 receptor agonist, Novo Nordisk Victoza (T2DM) and Saxenda (obesity). Semaglutide predecessor, ~13 h half-life.",
      "pl": "Codzienny agonista receptora GLP-1, Novo Nordisk Victoza (T2DM) i Saxenda (otyłość). Poprzednik semaglutydu, ~13 h okres półtrwania."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "A10BJ02"
  },
  {
    "id": "berberin",
    "name": "Berberin",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Növényi alkaloid (Berberis aristata, Coptis chinensis), AMPK-aktivátor. \"Természetes Metformin\"-ként promotált, de farmakológiai pozícionálása korlátozott. NEM Rx, OTC supplement.",
      "en": "Plant alkaloid (Berberis aristata, Coptis chinensis), AMPK activator. Marketed as \"natural metformin\" but pharmacological positioning limited. NOT Rx, OTC supplement.",
      "pl": "Alkaloid roślinny (Berberis aristata, Coptis chinensis), aktywator AMPK. Promowany jako \"naturalna metformina\", ale pozycjonowanie farmakologiczne ograniczone. NIE Rx, suplement OTC."
    },
    "tier": 2,
    "prescriptionStatus": {
      "hu": "NEM vényköteles (étrendkiegészítő)",
      "en": "NOT prescription (dietary supplement)",
      "pl": "NIE na receptę (suplement diety)"
    },
    "atcCode": "No ATC assigned (not a registered drug)"
  },
  {
    "id": "acarbose",
    "name": "Acarbose",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Alpha-glükozidáz inhibitor, Bayer Glucobay. Postprandiális glükóz-csökkentő, főleg ázsiai T2DM-populációkban népszerű.",
      "en": "Alpha-glucosidase inhibitor, Bayer Glucobay. Postprandial glucose reducer, popular mainly in Asian T2DM populations.",
      "pl": "Inhibitor alfa-glukozydazy, Bayer Glucobay. Redukcja glukozy poposiłkowej, popularna głównie w populacjach azjatyckich T2DM."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "A10BF01"
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
    "id": "venlafaxine",
    "name": "Venlafaxine",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Szerotonin-norepinefrin reuptake gátló (SNRI, Wyeth Effexor). MDD + GAD + PD + SAD indikációkkal. Súlyos discontinuation-szindrómáról ismert.",
      "en": "Serotonin-norepinephrine reuptake inhibitor (SNRI, Wyeth Effexor). For MDD + GAD + PD + SAD. Notorious severe discontinuation syndrome.",
      "pl": "Inhibitor wychwytu zwrotnego serotoniny-norepinefryny (SNRI, Wyeth Effexor). MDD + GAD + PD + SAD. Znany z ciężkiego zespołu odstawiennego."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "N06AX16"
  },
  {
    "id": "mirtazapine",
    "name": "Mirtazapine",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Noradrenerg és specifikus szerotoninerg antidepresszáns (NaSSA, Organon Remeron). Szedáló + étvágyfokozó profil, MDD + inszomnia + súlyveszteség kombinációra ideális.",
      "en": "Noradrenergic and specific serotonergic antidepressant (NaSSA, Organon Remeron). Sedating + appetite-stimulating profile, ideal for MDD + insomnia + weight loss combination.",
      "pl": "Noradrenergiczny i specyficzny serotoninergiczny antydepresant (NaSSA, Organon Remeron). Sedujący + pobudzający apetyt, idealny dla MDD + bezsenność + utrata masy."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "N06AX11"
  },
  {
    "id": "aripiprazole",
    "name": "Aripiprazole",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Atipikus antipszichotikum, parciális D2/5-HT1A agonista (Otsuka/BMS Abilify). Skizofrénia + bipoláris + MDD-augmentáció + Tourette + autism-irritabilitás indikációkkal.",
      "en": "Atypical antipsychotic, D2/5-HT1A partial agonist (Otsuka/BMS Abilify). For schizophrenia + bipolar + MDD augmentation + Tourette + autism irritability.",
      "pl": "Atypowy antypsychotyk, częściowy agonista D2/5-HT1A (Otsuka/BMS Abilify). Schizofrenia + ChAD + augmentacja MDD + Tourette + drażliwość w autyzmie."
    },
    "tier": 3,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "N05AX12"
  },
  {
    "id": "lamotrigine",
    "name": "Lamotrigine",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Antikonvulzív + bipoláris fenntartó (GSK Lamictal). Feszültség-függő Na-csatorna blokkoló. SJS/TEN kockázat miatt KÖTELEZŐ lassú titráció.",
      "en": "Anticonvulsant + bipolar maintenance (GSK Lamictal). Voltage-gated Na channel blocker. MANDATORY slow titration due to SJS/TEN risk.",
      "pl": "Lek przeciwdrgawkowy + podtrzymanie ChAD (GSK Lamictal). Bloker bramkowanych napięciem kanałów Na. OBOWIĄZKOWA powolna titracja z powodu ryzyka SJS/TEN."
    },
    "tier": 3,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "N03AX09"
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
    "id": "ramipril",
    "name": "Ramipril",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "ACE-inhibitor (Sanofi Tritace/Altace). Hipertenzió + HFrEF + szekunder MI-prevenció. HOPE-trial-evidencia 1999 óta.",
      "en": "ACE inhibitor (Sanofi Tritace/Altace). Hypertension + HFrEF + secondary MI prevention. HOPE trial evidence since 1999.",
      "pl": "Inhibitor ACE (Sanofi Tritace/Altace). Nadciśnienie + HFrEF + wtórna prewencja MI. Dowody HOPE od 1999."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "C09AA05"
  },
  {
    "id": "bisoprolol",
    "name": "Bisoprolol",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Kardio-szelektív β1 blokkoló (Merck Concor). Hipertenzió + HFrEF + post-MI standard. CIBIS-II trial mortalitás-csökkentés.",
      "en": "Cardio-selective β1 blocker (Merck Concor). Standard for hypertension + HFrEF + post-MI. CIBIS-II mortality reduction.",
      "pl": "Kardioselektywny bloker β1 (Merck Concor). Standard dla nadciśnienia + HFrEF + po MI. CIBIS-II redukcja śmiertelności."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "C07AB07"
  },
  {
    "id": "amlodipine",
    "name": "Amlodipine",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Dihidropiridin-típusú kalciumcsatorna-blokkoló (Pfizer Norvasc). Hipertenzió + stabil angina. ASCOT-BPLA: superior outcome ACE-i kombinációval.",
      "en": "Dihydropyridine calcium channel blocker (Pfizer Norvasc). Hypertension + stable angina. ASCOT-BPLA: superior outcome with ACEi combination.",
      "pl": "Bloker kanałów wapniowych dihydropirydyny (Pfizer Norvasc). Nadciśnienie + stabilna dławica. ASCOT-BPLA: lepsze wyniki z kombinacją ACEi."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "C08CA01"
  },
  {
    "id": "apixaban",
    "name": "Apixaban",
    "image": null,
    "accentColor": "#dc2626",
    "tagColor": "rgba(220,38,38,0.18)",
    "shortDesc": {
      "hu": "Direkt orális antikoaguláns (DOAC, BMS/Pfizer Eliquis). Faktor Xa-inhibitor. ARISTOTLE-trial szerint pitvarfibrillációban warfarin-szuperior.",
      "en": "Direct oral anticoagulant (DOAC, BMS/Pfizer Eliquis). Factor Xa inhibitor. ARISTOTLE trial showed superiority over warfarin in atrial fibrillation.",
      "pl": "Doustny antykoagulant bezpośredni (DOAC, BMS/Pfizer Eliquis). Inhibitor czynnika Xa. ARISTOTLE wykazało wyższość nad warfaryną w migotaniu przedsionków."
    },
    "tier": 4,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "B01AF02"
  },
  {
    "id": "methimazole",
    "name": "Methimazole",
    "image": null,
    "accentColor": "#f59e0b",
    "tagColor": "rgba(245,158,11,0.18)",
    "shortDesc": {
      "hu": "Antithyroid szer (Thiamazol, Merck), Graves-betegség és hipertireózis első-vonal kezelése. A pajzsmirigy peroxidáz-enzimet gátolja.",
      "en": "Antithyroid drug (thiamazole, Merck), first-line for Graves disease and hyperthyroidism. Inhibits thyroid peroxidase enzyme.",
      "pl": "Lek przeciwtarczycowy (tiamazol, Merck), pierwsza linia w chorobie Gravesa i nadczynności. Hamuje peroksydazę tarczycową."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "H03BB02"
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
    "id": "azithromycin",
    "name": "Azithromycin",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Makrolid antibiotikum (Pfizer Zithromax \"Z-pack\"). 5-napos rövid kúra-szer. CAP, atipikus pneumónia, STD. QT-prolongáció kockázat.",
      "en": "Macrolide antibiotic (Pfizer Zithromax \"Z-pack\"). 5-day short course. CAP, atypical pneumonia, STDs. QT prolongation risk.",
      "pl": "Antybiotyk makrolidowy (Pfizer Zithromax \"Z-pack\"). 5-dniowy krótki kurs. CAP, atypowe zapalenie płuc, STD. Ryzyko wydłużenia QT."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "J01FA10"
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
    "id": "metronidazole",
    "name": "Metronidazole",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Nitroimidazol antibiotikum (Flagyl). Anaerob baktérium + protozoa-infekciók (C. difficile, Trichomonas, Giardia, bakteriális vaginitisz).",
      "en": "Nitroimidazole antibiotic (Flagyl). Anaerobic + protozoa infections (C. difficile, Trichomonas, Giardia, bacterial vaginitis).",
      "pl": "Antybiotyk nitroimidazolowy (Flagyl). Infekcje beztlenowcami + pierwotniakami (C. difficile, Trichomonas, Giardia, vaginitis bakteryjny)."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "J01XD01"
  },
  {
    "id": "methotrexate",
    "name": "Methotrexate",
    "image": null,
    "accentColor": "#ec4899",
    "tagColor": "rgba(236,72,153,0.18)",
    "shortDesc": {
      "hu": "Dihidrofolát-reduktáz (DHFR) gátló antimetabolit. Alacsony-dózisú heti adagolás: rheumatoid arthritis, pszoriázis. Magas-dózisú: onko-kemoterápia.",
      "en": "Dihydrofolate reductase (DHFR) inhibitor antimetabolite. Low-dose weekly: rheumatoid arthritis, psoriasis. High-dose: onco-chemotherapy.",
      "pl": "Antymetabolit, inhibitor reduktazy dihydrofolianowej (DHFR). Niska dawka tygodniowo: reumatoidalne zapalenie stawów, łuszczyca. Wysoka: chemioterapia."
    },
    "tier": 3,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx), szakorvosi felügyelet (reumatológus / onkológus)",
      "en": "Prescription only (Rx), specialist-supervised (rheumatologist / oncologist)",
      "pl": "Na receptę (Rx), nadzór specjalisty (reumatolog / onkolog)"
    },
    "atcCode": "L01BA01 / L04AX03"
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
      "hu": "K-csatorna-aktivátor topikális/orális szer (Rogaine, Loniten). Androgenetikus alopecia kezelés 1988 óta. 2-5% topikális standard.",
      "en": "K-channel activator topical/oral drug (Rogaine, Loniten). Androgenetic alopecia treatment since 1988. 2-5% topical standard.",
      "pl": "Aktywator kanałów K, środek miejscowy/doustny (Rogaine, Loniten). Leczenie łysienia androgenowego od 1988. Standard 2-5% miejscowy."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "OTC topikális, vényköteles orális (Loniten + LDOM)",
      "en": "OTC topical, prescription oral (Loniten + LDOM)",
      "pl": "OTC miejscowy, na receptę doustny (Loniten + LDOM)"
    },
    "atcCode": "D11AX01 (topical) / C02DC01 (oral)"
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
  },
  {
    "id": "glimepirid",
    "name": "Glimepirid",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "2. generációs sulfonylurea, Sanofi Amaryl. Klasszikus T2DM-szer, de a ADA/EASD 2022 alapján modern alternatívák (GLP-1 RA, SGLT2i) priorizálandók.",
      "en": "2nd-generation sulfonylurea, Sanofi Amaryl. Classic T2DM drug, but ADA/EASD 2022 prioritizes modern alternatives (GLP-1 RA, SGLT2i).",
      "pl": "Sulfonylomocznik 2. generacji, Sanofi Amaryl. Klasyczny lek T2DM, ale ADA/EASD 2022 priorytetyzuje nowoczesne alternatywy (GLP-1 RA, SGLT2i)."
    },
    "tier": 5,
    "prescriptionStatus": {
      "hu": "Vényköteles (Rx)",
      "en": "Prescription only (Rx)",
      "pl": "Na receptę (Rx)"
    },
    "atcCode": "A10BB12"
  }
]

export const TOP_ENTRY_IDS = [
  "metformin",
  "semaglutide",
  "atorvastatin",
  "tadalafil",
  "sertralin",
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
  meta: LIBRARY_ENTRY_META,           // Phase 9: meta-only entries-replacement
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
    faq: false,
    doseRecommendations: false,
    calculator: false,
    qualityGrid: false,
    interactions: false,
    quickStart: false,
    labTerminal: true,
    chemicalFormulaPlaceholder: false,
  },
}

// Vite/Rollup template-literal dynamic-import code-splitting: when the
// path has a static prefix + an interpolated leaf, Vite emits one chunk
// per file matching the pattern at build time.
export async function loadEntry(id) {
  const mod = await import(`./entries/${id}.js`)
  return mod.default
}

// Convenience re-exports preserved for legacy consumers.
export { CATEGORIES, PHARMACEUTICAL_CATEGORIES, getPharmaceuticalCategories, getResearchLevel, EFFECT_CATEGORIES }
