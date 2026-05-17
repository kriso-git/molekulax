// Auto-decomposed by scripts/decompose-library.mjs at 2026-05-17T15:40:15.328Z
// LIBRARY_ENTRY_META[] is the synchronous metadata array used by tiles + switcher.
// Full Entry objects live in entries/<id>.js and are loaded via loadEntry(id).
// All non-entries library-level fields (categories, effects, etc.) are imported as before.

import { CATEGORIES, PEPTIDE_CATEGORIES, getPeptideCategories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = [
  {
    "id": "ghk-cu",
    "name": "GHK-Cu",
    "image": "/peptides/GHK-Cu.png",
    "accentColor": "#67e8f9",
    "tagColor": "rgba(6,182,212,0.16)",
    "shortDesc": {
      "hu": "Rézpeptid: bőrregeneráció és epigenetikai moduláció",
      "en": "Copper peptide: skin regeneration and epigenetic modulation",
      "pl": "Peptyd miedziowy: regeneracja skóry i modulacja epigenetyczna"
    },
    "tier": 4
  },
  {
    "id": "retatrutide",
    "name": "Retatrutide",
    "image": "/peptides/Retatrutide.png",
    "accentColor": "#6ee7b7",
    "tagColor": "rgba(16,185,129,0.16)",
    "shortDesc": {
      "hu": "Háromszoros inkretinagonista: metabolikus egészség és súlycsökkentés",
      "en": "Triple incretin agonist: metabolic health and weight loss",
      "pl": "Potrójny agonista inkretyn: zdrowie metaboliczne i utrata masy"
    },
    "tier": 4
  },
  {
    "id": "bpc-157",
    "name": "BPC-157",
    "image": "/peptides/BPC-157.png",
    "accentColor": "#818cf8",
    "tagColor": "rgba(99,102,241,0.18)",
    "shortDesc": {
      "hu": "Gyomor-pentadekapeptid: szöveti regeneráció és gyógyulás",
      "en": "Gastric pentadecapeptide: tissue regeneration and healing",
      "pl": "Pentadekapeptyd żołądkowy: regeneracja tkanek i gojenie"
    },
    "tier": 3
  },
  {
    "id": "tb-500",
    "name": "TB-500",
    "image": "/peptides/TB-500.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(139,92,246,0.18)",
    "shortDesc": {
      "hu": "Thymosin β4: aktin-kötés, sejtvándorlás és szövetjavítás",
      "en": "Thymosin β4: actin binding, cell migration and tissue repair",
      "pl": "Tymozyna β4: wiązanie aktyny, migracja komórek i naprawa tkanek"
    },
    "tier": 3
  },
  {
    "id": "cjc-1295",
    "name": "CJC-1295",
    "image": "/peptides/CJC-1295.png",
    "accentColor": "#fcd34d",
    "tagColor": "rgba(217,119,6,0.15)",
    "shortDesc": {
      "hu": "GHRH analóg: tartós növekedési hormon stimuláció",
      "en": "GHRH analog: sustained growth hormone stimulation",
      "pl": "Analog GHRH: przedłużona stymulacja hormonu wzrostu"
    },
    "tier": 3
  },
  {
    "id": "ipamorelin",
    "name": "Ipamorelin",
    "image": "/peptides/Ipamorelin.png",
    "accentColor": "#5eead4",
    "tagColor": "rgba(20,184,166,0.16)",
    "shortDesc": {
      "hu": "Szelektív GH-szekretórium: kortizolemelkedés nélkül",
      "en": "Selective GH secretagogue: without cortisol elevation",
      "pl": "Selektywny sekretagog GH: bez wzrostu kortyzolu"
    },
    "tier": 3
  },
  {
    "id": "melanotan-2",
    "name": "Melanotan-2",
    "image": "/peptides/Melanotan-2.png",
    "accentColor": "#f59e0b",
    "tagColor": "rgba(245,158,11,0.16)",
    "shortDesc": {
      "hu": "Szintetikus α-MSH analóg: pigmentáció és libidó moduláció",
      "en": "Synthetic α-MSH analog: pigmentation and libido modulation",
      "pl": "Syntetyczny analog α-MSH: modulacja pigmentacji i libido"
    },
    "tier": 3
  },
  {
    "id": "pt-141",
    "name": "PT-141",
    "image": "/peptides/PT-141.png",
    "accentColor": "#fda4af",
    "tagColor": "rgba(244,63,94,0.14)",
    "shortDesc": {
      "hu": "Melanokortinreceptor-agonista: FDA engedélyezett (bremelanotid)",
      "en": "Melanocortin receptor agonist: FDA approved (bremelanotide)",
      "pl": "Agonista receptora melanokortyny: zatwierdzony przez FDA (bremelanotyd)"
    },
    "tier": 5
  },
  {
    "id": "sermorelin",
    "name": "Sermorelin",
    "image": "/peptides/Sermorelin.png",
    "accentColor": "#c084fc",
    "tagColor": "rgba(168,85,247,0.18)",
    "shortDesc": {
      "hu": "GHRH(1-29) analóg: fiziológiás GH-helyreállítás",
      "en": "GHRH(1-29) analog: physiological GH restoration",
      "pl": "Analog GHRH(1-29): fizjologiczne przywrócenie GH"
    },
    "tier": 5
  },
  {
    "id": "epithalon",
    "name": "Epithalon",
    "image": "/peptides/Epithalon.png",
    "accentColor": "#fde68a",
    "tagColor": "rgba(161,98,7,0.15)",
    "shortDesc": {
      "hu": "Tobozmirigy-tetrapeptid: telomeráz aktiválás és öregedéskutatás",
      "en": "Pineal tetrapeptide: telomerase activation and longevity research",
      "pl": "Tetrapeptyd szyszynki: aktywacja telomerazy i badania długowieczności"
    },
    "tier": 3
  },
  {
    "id": "tirzepatide",
    "name": "Tirzepatide",
    "image": null,
    "accentColor": "#fb923c",
    "tagColor": "rgba(251,146,60,0.16)",
    "shortDesc": {
      "hu": "Kettős GIP/GLP-1 agonista: testsúly és vércukor kontroll",
      "en": "Dual GIP/GLP-1 agonist: weight & glucose control",
      "pl": "Podwójny agonista GIP/GLP-1: kontrola masy i glukozy"
    },
    "tier": 5
  },
  {
    "id": "hgh",
    "name": "HGH",
    "image": null,
    "accentColor": "#fcd34d",
    "tagColor": "rgba(252,211,77,0.16)",
    "shortDesc": {
      "hu": "Humán növekedési hormon (rhGH / Somatropin): anyagcsere és regeneráció",
      "en": "Human Growth Hormone (rhGH / Somatropin): metabolism & regeneration",
      "pl": "Hormon wzrostu (rhGH / Somatropina): metabolizm i regeneracja"
    },
    "tier": 5
  },
  {
    "id": "cjc-1295-ipamorelin",
    "name": "CJC-1295 / Ipamorelin",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.16)",
    "shortDesc": {
      "hu": "GHRH-analóg + szelektív ghrelin-mimetikum kombináció a szinergikus GH-pulzusért",
      "en": "GHRH analog + selective ghrelin mimetic combo for synergistic GH pulse",
      "pl": "Kombinacja analogu GHRH + selektywnego mimetyku greliny dla synergicznego pulsu GH"
    },
    "tier": 3
  },
  {
    "id": "tesamorelin",
    "name": "Tesamorelin",
    "image": null,
    "accentColor": "#34d399",
    "tagColor": "rgba(52,211,153,0.16)",
    "shortDesc": {
      "hu": "GHRH-analóg: viscerális zsírcsökkentés (FDA-jóváhagyott)",
      "en": "GHRH analog: visceral fat reduction (FDA-approved)",
      "pl": "Analog GHRH: redukcja tłuszczu trzewnego (zatwierdzony FDA)"
    },
    "tier": 5
  },
  {
    "id": "dihexa",
    "name": "Dihexa",
    "image": null,
    "accentColor": "#f472b6",
    "tagColor": "rgba(244,114,182,0.16)",
    "shortDesc": {
      "hu": "Nootróp hexapeptid-analóg: szinapszisképzés és kognitív funkció",
      "en": "Nootropic hexapeptid analog: synaptogenesis & cognitive function",
      "pl": "Nootropowy analog heksapeptydu: synaptogeneza i funkcja poznawcza"
    },
    "tier": 3
  },
  {
    "id": "semaglutide",
    "name": "Semaglutide",
    "image": null,
    "accentColor": "#60a5fa",
    "tagColor": "rgba(96,165,250,0.16)",
    "shortDesc": {
      "hu": "GLP-1 agonista, testsúly és vércukor kontroll",
      "en": "GLP-1 agonist, weight & glucose control",
      "pl": "Agonista GLP-1, kontrola masy i glukozy"
    },
    "tier": 5
  },
  {
    "id": "liraglutide",
    "name": "Liraglutide",
    "image": null,
    "accentColor": "#38bdf8",
    "tagColor": "rgba(56,189,248,0.16)",
    "shortDesc": {
      "hu": "GLP-1 agonista, napi adagolású elődpeptid",
      "en": "GLP-1 agonist, daily-dosed predecessor",
      "pl": "Agonista GLP-1, codzienna dawka"
    },
    "tier": 5
  },
  {
    "id": "orforglipron",
    "name": "Orforglipron",
    "image": null,
    "accentColor": "#7dd3fc",
    "tagColor": "rgba(125,211,252,0.16)",
    "shortDesc": {
      "hu": "Orálisan ható non-peptid GLP-1 agonista (Eli Lilly)",
      "en": "Orally active non-peptide GLP-1 agonist (Eli Lilly)",
      "pl": "Doustny niepeptydowy agonista GLP-1 (Eli Lilly)"
    },
    "tier": 4
  },
  {
    "id": "ghrp-2",
    "name": "GHRP-2",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.16)",
    "shortDesc": {
      "hu": "GH-szekretagóg hexapeptid, pulzatilis GH-felszabadulás",
      "en": "GH-secretagogue hexapeptide, pulsatile GH release",
      "pl": "Heksapeptyd-sekretagog GH, pulsacyjne uwalnianie GH"
    },
    "tier": 2
  },
  {
    "id": "ghrp-6",
    "name": "GHRP-6",
    "image": null,
    "accentColor": "#c4b5fd",
    "tagColor": "rgba(196,181,253,0.16)",
    "shortDesc": {
      "hu": "Korai GH-szekretagóg, étvágynövelő mellékhatással",
      "en": "Early GH-secretagogue, with appetite stimulation",
      "pl": "Wczesny sekretagog GH, z efektem zwiększającym apetyt"
    },
    "tier": 2
  },
  {
    "id": "hexarelin",
    "name": "Hexarelin",
    "image": null,
    "accentColor": "#ddd6fe",
    "tagColor": "rgba(221,214,254,0.16)",
    "shortDesc": {
      "hu": "Erős GHRP, kardioprotektív hatás vizsgálatok",
      "en": "Potent GHRP, cardioprotection investigated",
      "pl": "Silny GHRP, badana kardioprotekcja"
    },
    "tier": 2
  },
  {
    "id": "mk-677",
    "name": "MK-677 (Ibutamoren)",
    "image": null,
    "accentColor": "#fde047",
    "tagColor": "rgba(253,224,71,0.16)",
    "shortDesc": {
      "hu": "Orálisan ható ghrelinmimetikum, nem peptid",
      "en": "Orally active ghrelin mimetic, non-peptide",
      "pl": "Doustny mimetyk greliny, niepeptydowy"
    },
    "tier": 3
  },
  {
    "id": "mod-grf-1-29",
    "name": "Mod GRF 1-29",
    "image": null,
    "accentColor": "#fb7185",
    "tagColor": "rgba(251,113,133,0.16)",
    "shortDesc": {
      "hu": "Módosított GHRH(1-29), stabilabb, hosszabb hatás",
      "en": "Modified GHRH(1-29), more stable, longer-acting",
      "pl": "Modyfikowany GHRH(1-29), bardziej stabilny, dłuższe działanie"
    },
    "tier": 2
  },
  {
    "id": "igf-1-lr3",
    "name": "IGF-1 LR3",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.16)",
    "shortDesc": {
      "hu": "Hosszú féléletidejű IGF-1 analóg, anabolikus jelzés",
      "en": "Long-half-life IGF-1 analog, anabolic signalling",
      "pl": "Analog IGF-1 o długim t½, sygnalizacja anaboliczna"
    },
    "tier": 2
  },
  {
    "id": "mgf",
    "name": "MGF (IGF-1 Ec)",
    "image": null,
    "accentColor": "#fcd34d",
    "tagColor": "rgba(252,211,77,0.16)",
    "shortDesc": {
      "hu": "Mechanic Growth Factor, vázizom-regeneráció",
      "en": "Mechano Growth Factor, skeletal muscle repair",
      "pl": "Mechano-Growth Factor, regeneracja mięśni"
    },
    "tier": 2
  },
  {
    "id": "semax",
    "name": "Semax",
    "image": null,
    "accentColor": "#22d3ee",
    "tagColor": "rgba(34,211,238,0.16)",
    "shortDesc": {
      "hu": "ACTH(4-10) analóg, nootróp orrspray",
      "en": "ACTH(4-10) analog, nootropic nasal spray",
      "pl": "Analog ACTH(4-10), nootropowy spray do nosa"
    },
    "tier": 2
  },
  {
    "id": "selank",
    "name": "Selank",
    "image": null,
    "accentColor": "#67e8f9",
    "tagColor": "rgba(103,232,249,0.16)",
    "shortDesc": {
      "hu": "Tuftsin-analóg, szorongáscsökkentő nootróp",
      "en": "Tuftsin analog, anxiolytic nootropic",
      "pl": "Analog tuftsyny, anksjolityk nootropowy"
    },
    "tier": 2
  },
  {
    "id": "cerebrolysin",
    "name": "Cerebrolysin",
    "image": null,
    "accentColor": "#4ade80",
    "tagColor": "rgba(74,222,128,0.16)",
    "shortDesc": {
      "hu": "Neuropeptid-koktél, neuroprotektív/regeneratív",
      "en": "Neuropeptide mixture, neuroprotective / regenerative",
      "pl": "Mieszanka neuropeptydów, neuroprotekcja / regeneracja"
    },
    "tier": 4
  },
  {
    "id": "p21",
    "name": "P21",
    "image": null,
    "accentColor": "#a5b4fc",
    "tagColor": "rgba(165,180,252,0.16)",
    "shortDesc": {
      "hu": "CNTF-mimetikum, neurogenezis serkentés",
      "en": "CNTF mimetic, neurogenesis stimulator",
      "pl": "Mimetyk CNTF, stymulator neurogenezy"
    },
    "tier": 2
  },
  {
    "id": "fgl",
    "name": "FGL (FG-Loop)",
    "image": null,
    "accentColor": "#818cf8",
    "tagColor": "rgba(129,140,248,0.16)",
    "shortDesc": {
      "hu": "NCAM-derivált peptid, szinapszis plaszticitás",
      "en": "NCAM-derived peptide, synaptic plasticity",
      "pl": "Peptyd z NCAM, plastyczność synaptyczna"
    },
    "tier": 2
  },
  {
    "id": "melanotan-1",
    "name": "Melanotan-1 (Afamelanotide)",
    "image": null,
    "accentColor": "#fdba74",
    "tagColor": "rgba(253,186,116,0.16)",
    "shortDesc": {
      "hu": "α-MSH analóg, eritropoietikus protoporfíriában jóváhagyva",
      "en": "α-MSH analog, approved for erythropoietic protoporphyria",
      "pl": "Analog α-MSH, zatwierdzony w protoporfirii erytropoetycznej"
    },
    "tier": 2
  },
  {
    "id": "kpv",
    "name": "KPV",
    "image": null,
    "accentColor": "#86efac",
    "tagColor": "rgba(134,239,172,0.16)",
    "shortDesc": {
      "hu": "α-MSH tripeptid végszakasza, gyulladáscsökkentő",
      "en": "α-MSH C-terminal tripeptide, anti-inflammatory",
      "pl": "Tripeptyd końca α-MSH, działanie przeciwzapalne"
    },
    "tier": 2
  },
  {
    "id": "thymosin-alpha-1",
    "name": "Thymosin Alpha-1",
    "image": null,
    "accentColor": "#5eead4",
    "tagColor": "rgba(94,234,212,0.16)",
    "shortDesc": {
      "hu": "28 aa-as immunmoduláns peptid, T-sejt aktiváció",
      "en": "28-aa immunomodulatory peptide, T-cell activation",
      "pl": "28-aminokwasowy peptyd immunomodulujący, aktywacja limfocytów T"
    },
    "tier": 4
  },
  {
    "id": "ll-37",
    "name": "LL-37 (Cathelicidin)",
    "image": null,
    "accentColor": "#f87171",
    "tagColor": "rgba(248,113,113,0.16)",
    "shortDesc": {
      "hu": "Antimikrobiális peptid, sebgyógyulás és immunitás",
      "en": "Antimicrobial peptide, wound healing & immunity",
      "pl": "Peptyd antymikrobowy, gojenie ran i odporność"
    },
    "tier": 2
  },
  {
    "id": "larazotide",
    "name": "Larazotide",
    "image": null,
    "accentColor": "#fde68a",
    "tagColor": "rgba(253,230,138,0.16)",
    "shortDesc": {
      "hu": "Tight-junction szabályozó, coeliákia és bélpermeabilitás",
      "en": "Tight-junction regulator, coeliac & gut permeability",
      "pl": "Regulator połączeń ścisłych, celiakia i przepuszczalność jelit"
    },
    "tier": 3
  },
  {
    "id": "pentadeca-arginate",
    "name": "Pentadeca Arginate (PDA)",
    "image": null,
    "accentColor": "#fb923c",
    "tagColor": "rgba(251,146,60,0.16)",
    "shortDesc": {
      "hu": "BPC-157 arginát-só származék, stabilabb regeneráció",
      "en": "BPC-157 arginate salt derivative, more stable healing",
      "pl": "Pochodna BPC-157 z argininą, bardziej stabilna regeneracja"
    },
    "tier": 2
  },
  {
    "id": "humanin",
    "name": "Humanin",
    "image": null,
    "accentColor": "#a3e635",
    "tagColor": "rgba(163,230,53,0.16)",
    "shortDesc": {
      "hu": "Mitokondriális eredetű peptid, neuro- és metabolikus védelem",
      "en": "Mitochondrial-derived peptide, neuro & metabolic protection",
      "pl": "Peptyd pochodzenia mitochondrialnego, ochrona neurologiczna i metaboliczna"
    },
    "tier": 2
  },
  {
    "id": "mots-c",
    "name": "MOTS-c",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.16)",
    "shortDesc": {
      "hu": "Mitokondriális peptid, anyagcsere és AMPK aktiváció",
      "en": "Mitochondrial peptide, metabolism and AMPK activation",
      "pl": "Peptyd mitochondrialny, metabolizm i aktywacja AMPK"
    },
    "tier": 2
  },
  {
    "id": "pinealon",
    "name": "Pinealon",
    "image": null,
    "accentColor": "#fcd34d",
    "tagColor": "rgba(252,211,77,0.16)",
    "shortDesc": {
      "hu": "Tripeptid, neuroprotektív és anti-aging hipotézis",
      "en": "Tripeptide, neuroprotective and anti-ageing hypothesis",
      "pl": "Tripeptyd, neuroprotekcja i anti-aging"
    },
    "tier": 2
  },
  {
    "id": "gonadorelin",
    "name": "Gonadorelin (GnRH)",
    "image": null,
    "accentColor": "#facc15",
    "tagColor": "rgba(250,204,21,0.16)",
    "shortDesc": {
      "hu": "Természetes GnRH, LH/FSH pulzus stimulátor",
      "en": "Native GnRH, LH/FSH pulse stimulator",
      "pl": "Naturalny GnRH, stymulator pulsu LH/FSH"
    },
    "tier": 5
  },
  {
    "id": "kisspeptin",
    "name": "Kisspeptin-10",
    "image": null,
    "accentColor": "#fbcfe8",
    "tagColor": "rgba(251,207,232,0.16)",
    "shortDesc": {
      "hu": "Hypothalamus szintű GnRH-aktivátor",
      "en": "Hypothalamic-level GnRH activator",
      "pl": "Aktywator GnRH na poziomie podwzgórza"
    },
    "tier": 2
  },
  {
    "id": "oxytocin",
    "name": "Oxytocin",
    "image": null,
    "accentColor": "#fda4af",
    "tagColor": "rgba(253,164,175,0.16)",
    "shortDesc": {
      "hu": "9 aa-as neuropeptid, szociális kötés és szülés",
      "en": "9-aa neuropeptide, social bonding and labour",
      "pl": "9-aminokwasowy neuropeptyd, więzi społeczne i poród"
    },
    "tier": 5
  },
  {
    "id": "aod-9604",
    "name": "AOD-9604",
    "image": null,
    "accentColor": "#bef264",
    "tagColor": "rgba(190,242,100,0.16)",
    "shortDesc": {
      "hu": "HGH fragmens (176-191), célzott lipolízis",
      "en": "HGH fragment (176-191), targeted lipolysis",
      "pl": "Fragment HGH (176-191), ukierunkowana lipoliza"
    },
    "tier": 3
  },
  {
    "id": "5-amino-1mq",
    "name": "5-Amino-1MQ",
    "image": null,
    "accentColor": "#fef08a",
    "tagColor": "rgba(254,240,138,0.16)",
    "shortDesc": {
      "hu": "NNMT inhibitor, anyagcsere-fokozó kismolekula",
      "en": "NNMT inhibitor, metabolic-enhancing small molecule",
      "pl": "Inhibitor NNMT, małocząsteczkowy aktywator metabolizmu"
    },
    "tier": 2
  },
  {
    "id": "nad-plus",
    "name": "NAD+",
    "image": null,
    "accentColor": "#bbf7d0",
    "tagColor": "rgba(187,247,208,0.16)",
    "shortDesc": {
      "hu": "Nicotinamide adenine dinucleotide, sejtenergia és sirtuin",
      "en": "Nicotinamide adenine dinucleotide, cell energy & sirtuins",
      "pl": "Dinukleotyd nikotynoamidoadeninowy, energia komórek i sirtuiny"
    },
    "tier": 2
  },
  {
    "id": "dsip",
    "name": "DSIP (Delta Sleep Inducing Peptide)",
    "image": null,
    "accentColor": "#93c5fd",
    "tagColor": "rgba(147,197,253,0.16)",
    "shortDesc": {
      "hu": "9 aa-as peptid, delta-alvás indukció hipotézis",
      "en": "9-aa peptide, delta-sleep induction hypothesis",
      "pl": "9-aminokwasowy peptyd, hipoteza indukcji snu delta"
    },
    "tier": 2
  },
  {
    "id": "adipotide",
    "name": "Adipotide (FTPP)",
    "image": null,
    "accentColor": "#fdba74",
    "tagColor": "rgba(253,186,116,0.16)",
    "shortDesc": {
      "hu": "Pro-apoptotikus peptid, adipocita-specifikus zsírcsökkentés",
      "en": "Pro-apoptotic peptide, adipocyte-specific fat reduction",
      "pl": "Peptyd proapoptotyczny, redukcja tłuszczu specyficzna dla adipocytów"
    },
    "tier": 2
  },
  {
    "id": "snap-8",
    "name": "SNAP-8",
    "image": null,
    "accentColor": "#fda4af",
    "tagColor": "rgba(253,164,175,0.16)",
    "shortDesc": {
      "hu": "Topikális Argireline-analóg, ráncellenes kozmetikum",
      "en": "Topical Argireline analog, anti-wrinkle cosmetic",
      "pl": "Topiczny analog Argireliny, kosmetyk przeciwzmarszczkowy"
    },
    "tier": 2
  },
  {
    "id": "matrixyl-3000",
    "name": "Matrixyl 3000",
    "image": null,
    "accentColor": "#fbcfe8",
    "tagColor": "rgba(251,207,232,0.16)",
    "shortDesc": {
      "hu": "Kollagén-szignál peptid mátrix, anti-aging topikum",
      "en": "Collagen-signalling peptide matrix, anti-ageing topical",
      "pl": "Macierz peptydowa stymulująca kolagen, kosmetyk anti-aging"
    },
    "tier": 5
  },
  {
    "id": "ss-31",
    "name": "SS-31 (Elamipretide)",
    "image": null,
    "accentColor": "#22d3ee",
    "tagColor": "rgba(34,211,238,0.16)",
    "shortDesc": {
      "hu": "Mitokondriális tetrapeptid, kardiolipin-célzott védelem",
      "en": "Mitochondrial tetrapeptide, cardiolipin-targeted protection",
      "pl": "Tetrapeptyd mitochondrialny, ochrona ukierunkowana na kardiolipinę"
    },
    "tier": 5
  },
  {
    "id": "cagrilintide",
    "name": "Cagrilintide (AM833)",
    "image": null,
    "accentColor": "#fb7185",
    "tagColor": "rgba(251,113,133,0.16)",
    "shortDesc": {
      "hu": "Hosszan ható amilin-analóg, telítettség és testsúly",
      "en": "Long-acting amylin analog, satiety and weight",
      "pl": "Długo działający analog amyliny, sytość i masa ciała"
    },
    "tier": 4
  },
  {
    "id": "mazdutide",
    "name": "Mazdutide (IBI362)",
    "image": null,
    "accentColor": "#fda4af",
    "tagColor": "rgba(253,164,175,0.16)",
    "shortDesc": {
      "hu": "GLP-1/glukagon dual agonista, Kínában törzskönyvezve",
      "en": "GLP-1/glucagon dual agonist, registered in China",
      "pl": "Dwuagonista GLP-1/glukagonu, zarejestrowany w Chinach"
    },
    "tier": 4
  },
  {
    "id": "survodutide",
    "name": "Survodutide",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.16)",
    "shortDesc": {
      "hu": "Glukagon/GLP-1 dual agonista, Boehringer/Zealand",
      "en": "Glucagon/GLP-1 dual agonist, Boehringer/Zealand",
      "pl": "Dwuagonista glukagonu/GLP-1, Boehringer/Zealand"
    },
    "tier": 4
  },
  {
    "id": "pemvidutide",
    "name": "Pemvidutide",
    "image": null,
    "accentColor": "#fde047",
    "tagColor": "rgba(253,224,71,0.16)",
    "shortDesc": {
      "hu": "GLP-1/glukagon dual agonista, MASH és obesitás",
      "en": "GLP-1/glucagon dual agonist, MASH and obesity",
      "pl": "Dwuagonista GLP-1/glukagonu, MASH i otyłość"
    },
    "tier": 4
  },
  {
    "id": "thymulin",
    "name": "Thymulin",
    "image": null,
    "accentColor": "#86efac",
    "tagColor": "rgba(134,239,172,0.16)",
    "shortDesc": {
      "hu": "Cink-függő thymus nonapeptid, T-sejt érés és immunhomeosztázis",
      "en": "Zinc-dependent thymic nonapeptide, T-cell maturation & immune homeostasis",
      "pl": "Cynko-zależny nonapeptyd grasiczy, dojrzewanie limfocytów T i homeostaza"
    },
    "tier": 2
  },
  {
    "id": "na-semax-amidate",
    "name": "NA Semax Amidate",
    "image": null,
    "accentColor": "#22d3ee",
    "tagColor": "rgba(34,211,238,0.16)",
    "shortDesc": {
      "hu": "N-acetilált, amidált Semax, hosszabb féléletidő, erősebb nootróp",
      "en": "N-acetylated, amidated Semax, longer half-life, stronger nootropic",
      "pl": "N-acetylowany, amidowany Semax, dłuższy t½, silniejszy nootropowy"
    },
    "tier": 2
  },
  {
    "id": "adalank",
    "name": "Adalank (NA Selank Amidate)",
    "image": null,
    "accentColor": "#67e8f9",
    "tagColor": "rgba(103,232,249,0.16)",
    "shortDesc": {
      "hu": "Stabilizált Selank, anxiolytikus + nootróp",
      "en": "Stabilised Selank, anxiolytic + nootropic",
      "pl": "Stabilizowany Selank, anksjolityczny + nootropowy"
    },
    "tier": 2
  },
  {
    "id": "adamax",
    "name": "Adamax",
    "image": null,
    "accentColor": "#a5b4fc",
    "tagColor": "rgba(165,180,252,0.16)",
    "shortDesc": {
      "hu": "Adamantán-konjugált Semax, fokozott BBB-penetráció",
      "en": "Adamantane-conjugated Semax, enhanced BBB penetration",
      "pl": "Semax z adamantanem, wzmocniona przenikalność BBB"
    },
    "tier": 2
  },
  {
    "id": "klow-protocol",
    "name": "KLOW Protocol",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.16)",
    "shortDesc": {
      "hu": "Peptid-stack: GHK-Cu + TB-500 + BPC-157 + KPV, regeneráció + gyulladáscsökkentés",
      "en": "Peptide stack: GHK-Cu + TB-500 + BPC-157 + KPV, healing + anti-inflammatory",
      "pl": "Stos peptydów: GHK-Cu + TB-500 + BPC-157 + KPV, regeneracja + przeciwzapalnie"
    },
    "tier": 2
  },
  {
    "id": "lipo-c",
    "name": "Lipo-C",
    "image": null,
    "accentColor": "#fde047",
    "tagColor": "rgba(253,224,71,0.16)",
    "shortDesc": {
      "hu": "Lipotrop injekciós keverék, methionin / inozitol / kolin / B12",
      "en": "Lipotropic injectable blend, methionine / inositol / choline / B12",
      "pl": "Lipotropowa mieszanka iniekcyjna, metionina / inozytol / cholina / B12"
    },
    "tier": 2
  }
]

export const TOP_ENTRY_IDS = [
  "retatrutide",
  "tirzepatide",
  "ghk-cu",
  "melanotan-2",
  "bpc-157",
  "tb-500",
  "hgh",
  "cjc-1295-ipamorelin",
  "tesamorelin",
  "dihexa"
]

export const peptidesLibrary = {
  id: "peptides",
  name: {
  "hu": "Peptid Könyvtár",
  "en": "Peptide Library",
  "pl": "Biblioteka Peptydów"
},
  description: {
  "hu": "50+ tudományosan dokumentált peptid · keresés, kategória, kutatási szint szerint",
  "en": "50+ scientifically documented peptides · search by category and research tier",
  "pl": "50+ peptydów udokumentowanych naukowo · wyszukiwanie wg kategorii i poziomu badań"
},
  accent: "#00ff99",
  meta: LIBRARY_ENTRY_META,           // Phase 9: meta-only entries-replacement
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  entryCategoryMap: PEPTIDE_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
  "hu": "Élettani Hatások",
  "en": "Physiological Effects",
  "pl": "Efekty fizjologiczne"
},
  effectsSubtitle: {
  "hu": "Peptid hatáscsoportok és tudományos háttér",
  "en": "Peptide effect groups and scientific background",
  "pl": "Grupy efektów peptydów i podstawy naukowe"
},
  labels: {
  "topTitle": {
    "hu": "10 Legnépszerűbb Peptid",
    "en": "Top 10 Most Popular Peptides",
    "pl": "10 najpopularniejszych peptydów"
  },
  "allTitle": {
    "hu": "Összes Peptid",
    "en": "All Peptides",
    "pl": "Wszystkie peptydy"
  },
  "allCount": {
    "hu": "peptid",
    "en": "peptides",
    "pl": "peptydów"
  },
  "helpBody": {
    "hu": "Lépj kapcsolatba egy tanácsadóval Telegramon. Szívesen segítünk a megfelelő peptid kiválasztásában.",
    "en": "Reach out to an advisor on Telegram. We can help you find the right peptide.",
    "pl": "Skontaktuj się z doradcą na Telegramie. Chętnie pomożemy znaleźć właściwy peptyd."
  },
  "relatedLabel": {
    "hu": "Kapcsolódó peptidek",
    "en": "Related peptides",
    "pl": "Powiązane peptydy"
  },
  "contactTitle": {
    "hu": "Van kérdésed a peptidekkel kapcsolatban?",
    "en": "Have a question about peptides?",
    "pl": "Masz pytanie dotyczące peptydów?"
  }
},
  features: {
    faq: false,
    doseRecommendations: false,
    calculator: true,
    qualityGrid: true,
    interactions: true,
    quickStart: true,
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
export { CATEGORIES, PEPTIDE_CATEGORIES, getPeptideCategories, getResearchLevel, EFFECT_CATEGORIES }
