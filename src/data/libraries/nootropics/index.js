// Auto-decomposed by scripts/decompose-library.mjs at 2026-05-17T15:42:14.626Z
// LIBRARY_ENTRY_META[] is the synchronous metadata array used by tiles + switcher.
// Full Entry objects live in entries/<id>.js and are loaded via loadEntry(id).
// All non-entries library-level fields (categories, effects, etc.) are imported as before.

import { CATEGORIES, NOOTROPIC_CATEGORIES, getNootropicCategories } from './categories.js'
import { getResearchLevel } from './researchLevel.js'
import { RESEARCH_LEVELS } from '../shared/researchLevel.js'
import { EFFECT_CATEGORIES } from './effects.js'

export const LIBRARY_ENTRY_META = [
  {
    "id": "piracetam",
    "name": "Piracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Az eredeti racetam (Giurgea, 1972). Glutamáterg AMPA-modulátor, klasszikus memóriát és kogníciót támogató nootropikum.",
      "en": "The original racetam (Giurgea, 1972). Glutamatergic AMPA modulator, the classic memory- and cognition-supporting nootropic.",
      "pl": "Oryginalny racetam (Giurgea, 1972). Modulator glutamatergiczny AMPA, klasyczny nootropik dla pamięci i poznania."
    },
    "tier": 3,
    "chemicalFormula": "C6H10N2O2",
    "wadaStatus": null
  },
  {
    "id": "modafinil",
    "name": "Modafinil",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "FDA-jóváhagyott wakefulness-promoting szer (Provigil). Szelektív DAT-gátló, narkolepszia, alvási apnoé, váltóműszakos zavar Rx.",
      "en": "FDA-approved wakefulness-promoting agent (Provigil). Selective DAT inhibitor, Rx for narcolepsy, sleep apnea, shift-work disorder.",
      "pl": "Zatwierdzony przez FDA środek wzmacniający czuwanie (Provigil). Selektywny inhibitor DAT, Rx dla narkolepsji, bezdechu sennego i zaburzeń zmianowych."
    },
    "tier": 5,
    "chemicalFormula": "C15H15NO2S",
    "wadaStatus": "banned"
  },
  {
    "id": "noopept",
    "name": "Noopept",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Orosz Rx racetam-szerű nootropikum; kicsi dózis (10-30 mg), NGF/BDNF expression-növelő.",
      "en": "Russian Rx racetam-like nootropic; small dose (10-30 mg), upregulates NGF/BDNF expression.",
      "pl": "Rosyjski Rx nootropik podobny do racetamów; mała dawka (10-30 mg), zwiększa ekspresję NGF/BDNF."
    },
    "tier": 2,
    "chemicalFormula": "C17H22N2O4",
    "wadaStatus": null
  },
  {
    "id": "phenylpiracetam",
    "name": "Phenylpiracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Phenyl-csoport piracetam-vázon. Stimuláns racetam + dopaminerg modulátor, WADA tiltott versenysportban.",
      "en": "Phenyl group on the piracetam scaffold. Stimulant racetam + dopaminergic modulator, WADA-banned in competition.",
      "pl": "Grupa fenylowa na szkielecie piracetamu. Stymulujący racetam + modulator dopaminergiczny, zakazany przez WADA w zawodach."
    },
    "tier": 2,
    "chemicalFormula": "C12H14N2O2",
    "wadaStatus": "banned"
  },
  {
    "id": "adrafinil",
    "name": "Adrafinil",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Modafinil prekurzor (hepatikus konverzió). EU-régiókban OTC, lassabb hatáskezdettel.",
      "en": "Modafinil prodrug (hepatic conversion). OTC in some EU regions, with slower onset.",
      "pl": "Prolek Modafinilu (konwersja wątrobowa). OTC w niektórych regionach UE, z wolniejszym wystąpieniem."
    },
    "tier": 3,
    "chemicalFormula": "C15H15NO3S",
    "wadaStatus": "banned"
  },
  {
    "id": "bromantane",
    "name": "Bromantane",
    "image": null,
    "accentColor": "#f43f5e",
    "tagColor": "rgba(244,63,94,0.18)",
    "shortDesc": {
      "hu": "Orosz actoprotector, dopaminerg + szerotonerg modulátor + immunmodulátor. Anti-fatigue, anxiolítikus.",
      "en": "Russian actoprotector, dopaminergic + serotonergic modulator + immunomodulator. Anti-fatigue, anxiolytic.",
      "pl": "Rosyjski aktoprotektor, modulator dopaminergiczny + serotonergiczny + immunomodulator. Przeciw-zmęczeniowy, przeciwlękowy."
    },
    "tier": 2,
    "chemicalFormula": "C16H20BrN",
    "wadaStatus": "banned"
  },
  {
    "id": "nsi-189",
    "name": "NSI-189",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "Hippocampus-szelektív neurogenezis-induktor. Neuralstem Phase 1b/2 klinikai vizsgálatok depresszióra.",
      "en": "Hippocampus-selective neurogenesis inducer. Neuralstem Phase 1b/2 clinical trials for depression.",
      "pl": "Selektywny induktor neurogenezy hipokampu. Neuralstem Phase 1b/2, badania nad depresją."
    },
    "tier": 2,
    "chemicalFormula": "C22H30N4O",
    "wadaStatus": null
  },
  {
    "id": "semax",
    "name": "Semax",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "Orosz Rx heptapeptid (ACTH 4-10 analóg). Stroke-rehabilitáció + kognitív enhancement, intranazális spray.",
      "en": "Russian Rx heptapeptide (ACTH 4-10 analog). Stroke rehab + cognitive enhancement, intranasal spray.",
      "pl": "Rosyjski Rx heptapeptyd (analog ACTH 4-10). Rehabilitacja udarowa + wzmocnienie poznawcze, spray donosowy."
    },
    "tier": 2,
    "chemicalFormula": "C37H51N9O10S",
    "wadaStatus": null
  },
  {
    "id": "selank",
    "name": "Selank",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Tuftsin-analóg heptapeptid (TKPRPGP). Anxiolítikus + cognition szedáció nélkül, intranazális.",
      "en": "Tuftsin-analog heptapeptide (TKPRPGP). Anxiolytic + cognition without sedation, intranasal.",
      "pl": "Heptapeptyd analog Tuftsiny (TKPRPGP). Przeciwlękowy + poznawczy bez sedacji, donosowy."
    },
    "tier": 2,
    "chemicalFormula": "C33H57N11O9",
    "wadaStatus": null
  },
  {
    "id": "9-me-bc",
    "name": "9-Me-BC",
    "image": null,
    "accentColor": "#f43f5e",
    "tagColor": "rgba(244,63,94,0.18)",
    "shortDesc": {
      "hu": "Béta-karbolin alkaloid. MAO-B gátló + neurotrofikus, dopaminerg motivációs nootropikum (in vitro adat).",
      "en": "Beta-carboline alkaloid. MAO-B inhibitor + neurotrophic, dopaminergic motivation nootropic (in vitro data).",
      "pl": "Alkaloid beta-karbolinowy. Inhibitor MAO-B + neurotroficzny, dopaminergiczny nootropik motywacyjny (dane in vitro)."
    },
    "tier": 1,
    "chemicalFormula": "C13H12N2",
    "wadaStatus": null
  },
  {
    "id": "aniracetam",
    "name": "Aniracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Zsírban oldódó racetam, AMPA-pozitív moduláció + anxiolitikus profil.",
      "en": "Fat-soluble racetam with AMPA-PAM action and an anxiolytic profile.",
      "pl": "Rozpuszczalny w tłuszczach racetam z aktywnością AMPA-PAM i profilem anksjolitycznym."
    },
    "tier": 3,
    "chemicalFormula": "C12H13NO3",
  },
  {
    "id": "oxiracetam",
    "name": "Oxiracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Stimuláns hangulatú racetam, AMPA + cholinerg aktivitás, fókusz-orientált.",
      "en": "Stimulant-leaning racetam, AMPA + cholinergic activity, focus-oriented.",
      "pl": "Racetam o profilu stymulującym, aktywność AMPA + cholinergiczna, ukierunkowany na koncentrację."
    },
    "tier": 3,
    "chemicalFormula": "C6H10N2O3",
  },
  {
    "id": "pramiracetam",
    "name": "Pramiracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Erős cholinerg racetam, HACU-fokozás + AMPA-modulácó.",
      "en": "Potent cholinergic racetam, HACU enhancement + AMPA modulation.",
      "pl": "Silny cholinergiczny racetam, wzmocnienie HACU + modulacja AMPA."
    },
    "tier": 2,
    "chemicalFormula": "C14H27N3O2",
  },
  {
    "id": "coluracetam",
    "name": "Coluracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Szelektív HACU-fokozó (BCI-540), vizuális élmény és antidepresszív profil.",
      "en": "Selective HACU enhancer (BCI-540), visual experience and antidepressant profile.",
      "pl": "Selektywny wzmacniacz HACU (BCI-540), wrażenia wzrokowe i profil antydepresyjny."
    },
    "tier": 2,
    "chemicalFormula": "C19H23N3O3",
  },
  {
    "id": "fasoracetam",
    "name": "Fasoracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "mGluR I/II/III modulátor racetam, ADHD klinikai kutatás.",
      "en": "mGluR I/II/III modulator racetam, ADHD clinical research.",
      "pl": "Racetam modulujący mGluR I/II/III, badania kliniczne ADHD."
    },
    "tier": 2,
    "chemicalFormula": "C10H16N2O2",
  },
  {
    "id": "nefiracetam",
    "name": "Nefiracetam",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "GABA + AMPA + Ca-csatorna-modulátor racetam, anti-amnesztikus.",
      "en": "GABA + AMPA + Ca-channel modulator racetam, anti-amnestic.",
      "pl": "Racetam modulujący GABA + AMPA + kanały Ca, przeciwamnezyjny."
    },
    "tier": 2,
    "chemicalFormula": "C14H18N2O2",
  },
  {
    "id": "sunifiram",
    "name": "Sunifiram",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Ampakine, AMPA-PAM, sub-mg aktív dózis.",
      "en": "Ampakine, AMPA-PAM, sub-mg active dose.",
      "pl": "Ampakina, AMPA-PAM, aktywna dawka poniżej miligrama."
    },
    "tier": 1,
    "chemicalFormula": "C14H18N2O2",
  },
  {
    "id": "unifiram",
    "name": "Unifiram",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Ampakine (DM-232), Sunifiram alkinil-variánsa, AMPA-PAM.",
      "en": "Ampakine (DM-232), alkynyl variant of Sunifiram, AMPA-PAM.",
      "pl": "Ampakina (DM-232), alkinyl-pochodna sunifiramu, AMPA-PAM."
    },
    "tier": 1,
    "chemicalFormula": "C13H15FN2O3S",
  },
  {
    "id": "nooglutyl",
    "name": "Nooglutyl",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Orosz AMPA-PAM kutatási vegyület, plaszticitás-fokozó.",
      "en": "Russian AMPA-PAM research compound, plasticity enhancer.",
      "pl": "Rosyjski związek badawczy AMPA-PAM, wzmacniacz plastyczności."
    },
    "tier": 1,
    "chemicalFormula": "C11H12N2O6",
  },
  {
    "id": "armodafinil",
    "name": "Armodafinil",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "A Modafinil R-enantiomerje, hosszabb felezési idő, simább koncentráció.",
      "en": "R-enantiomer of Modafinil, longer half-life, smoother focus.",
      "pl": "R-enancjomer modafinilu, dłuższy okres półtrwania, łagodniejsza koncentracja."
    },
    "tier": 5,
    "chemicalFormula": "C15H15NO2S",
  },
  {
    "id": "fladrafinil",
    "name": "Fladrafinil",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Bisz-fluor-adrafinil analóg, agresszió-csökkentő profil, kísérleti.",
      "en": "Bis-fluorinated Adrafinil analog, aggression-reducing profile, investigational.",
      "pl": "Bis-fluorowany analog adrafinilu, profil obniżający agresję, badawczy."
    },
    "tier": 1,
    "chemicalFormula": "C15H13F2NO3S",
  },
  {
    "id": "flmodafinil",
    "name": "Flmodafinil",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Biszfluor-modafinil (CRL-40,940), kb. 3× potensebb in vivo.",
      "en": "Bisfluoromodafinil (CRL-40,940), roughly 3× more potent in vivo.",
      "pl": "Bisfluoromodafinil (CRL-40,940), około 3× silniejszy in vivo."
    },
    "tier": 1,
    "chemicalFormula": "C15H13F2NO2S",
  },
  {
    "id": "alpha-gpc",
    "name": "Alpha-GPC",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Glicerofoszfokolin, biológiailag hasznosuló kolin-prekurzor.",
      "en": "Glycerophosphocholine, a bioavailable choline precursor.",
      "pl": "Glicerofosfocholina, biodostępny prekursor choliny."
    },
    "tier": 3,
    "chemicalFormula": "C8H20NO6P",
  },
  {
    "id": "cdp-choline",
    "name": "CDP-Choline",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Citidin-difoszfát-kolin, kolin + uridin kettős prekurzor.",
      "en": "Cytidine diphosphate-choline, dual choline + uridine precursor.",
      "pl": "Cytydyno-difosfo-cholina, podwójny prekursor choliny i urydyny."
    },
    "tier": 3,
    "chemicalFormula": "C14H26N4O11P2",
  },
  {
    "id": "centrophenoxine",
    "name": "Centrophenoxine",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Meclofenoxate, DMAE + p-klórfenoxiecetsav konjugátum, lipofuszcin-eltávolítás.",
      "en": "Meclofenoxate, DMAE + p-chlorophenoxyacetic acid conjugate, lipofuscin removal.",
      "pl": "Meklofenoksat, koniugat DMAE + kwasu p-chlorofenoksyoctowego, usuwanie lipofuscyny."
    },
    "tier": 2,
    "chemicalFormula": "C12H16ClNO3",
  },
  {
    "id": "huperzine-a",
    "name": "Huperzine-A",
    "image": null,
    "accentColor": "#06b6d4",
    "tagColor": "rgba(6,182,212,0.18)",
    "shortDesc": {
      "hu": "Reverzibilis AChE-inhibitor, kínai mohából (Huperzia serrata) izolálva.",
      "en": "Reversible AChE inhibitor, isolated from the Chinese moss Huperzia serrata.",
      "pl": "Odwracalny inhibitor AChE, wyizolowany z chińskiego mchu Huperzia serrata."
    },
    "tier": 3,
    "chemicalFormula": "C15H18N2O",
  },
  {
    "id": "selegiline",
    "name": "Selegiline",
    "image": null,
    "accentColor": "#f43f5e",
    "tagColor": "rgba(244,63,94,0.18)",
    "shortDesc": {
      "hu": "Szelektív MAO-B inhibitor, Parkinson + depresszió, FDA-jóváhagyott.",
      "en": "Selective MAO-B inhibitor, Parkinson`s + depression, FDA-approved.",
      "pl": "Selektywny inhibitor MAO-B, Parkinson + depresja, zatwierdzony przez FDA."
    },
    "tier": 5,
    "chemicalFormula": "C13H17N",
  },
  {
    "id": "bpap",
    "name": "BPAP",
    "image": null,
    "accentColor": "#f43f5e",
    "tagColor": "rgba(244,63,94,0.18)",
    "shortDesc": {
      "hu": "Szelektív PEA-aktivitás-fokozó (CAE), Selegiline-utód, kísérleti.",
      "en": "Selective PEA-activity enhancer (CAE), Selegiline successor, investigational.",
      "pl": "Selektywny wzmacniacz aktywności PEA (CAE), następca selegiliny, badawczy."
    },
    "tier": 1,
    "chemicalFormula": "C16H23NO",
  },
  {
    "id": "prl-8-53",
    "name": "PRL-8-53",
    "image": null,
    "accentColor": "#f43f5e",
    "tagColor": "rgba(244,63,94,0.18)",
    "shortDesc": {
      "hu": "Fenil-metil-piperidinil-benzoát, 1970-es évek, egyetlen humán memóriavizsgálat.",
      "en": "Phenyl-methyl-piperidinyl benzoate, 1970s, one published human memory trial.",
      "pl": "Fenylo-metylo-piperydynylo-benzoesan, lata 70., jedno opublikowane badanie pamięci u ludzi."
    },
    "tier": 1,
    "chemicalFormula": "C18H21NO2",
  },
  {
    "id": "phenibut",
    "name": "Phenibut",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "β-fenil-GABA, GABA-B agonista, orosz Rx anxiolitikum.",
      "en": "β-phenyl-GABA, GABA-B agonist, Russian prescription anxiolytic.",
      "pl": "β-fenylo-GABA, agonista GABA-B, rosyjski lek anksjolityczny na receptę."
    },
    "tier": 4,
    "chemicalFormula": "C10H13NO2",
  },
  {
    "id": "tianeptine",
    "name": "Tianeptine",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Atípusos antidepresszáns, μ-opioid moduláció, EU/orosz vényköteles.",
      "en": "Atypical antidepressant, μ-opioid modulator, EU/Russian prescription.",
      "pl": "Nietypowy lek przeciwdepresyjny, modulator μ-opioidowy, recepta UE/Rosja."
    },
    "tier": 4,
    "chemicalFormula": "C21H25ClN2O4S",
  },
  {
    "id": "f-phenibut",
    "name": "F-Phenibut",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Fluorozott Phenibut, potensebb, lipofilebb GABA-B agonista variáns.",
      "en": "Fluorinated Phenibut, more potent, more lipophilic GABA-B agonist variant.",
      "pl": "Fluorowany fenibut, silniejszy, bardziej lipofilny wariant agonisty GABA-B."
    },
    "tier": 1,
    "chemicalFormula": "C10H12FNO2",
  },
  {
    "id": "picamilon",
    "name": "Picamilon",
    "image": null,
    "accentColor": "#10b981",
    "tagColor": "rgba(16,185,129,0.18)",
    "shortDesc": {
      "hu": "Nikotinsav + GABA konjugátum, orosz vényköteles anxiolitikum.",
      "en": "Nicotinic acid + GABA conjugate, Russian prescription anxiolytic.",
      "pl": "Koniugat kwasu nikotynowego + GABA, rosyjski lek anksjolityczny na receptę."
    },
    "tier": 2,
    "chemicalFormula": "C10H12N2O3",
  },
  {
    "id": "bacopa",
    "name": "Bacopa monnieri",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.18)",
    "shortDesc": {
      "hu": "Ayurvédikus gyógynövény, bakozid-glikozidok, memória + anxiolítikum.",
      "en": "Ayurvedic herb, bacoside glycosides, memory + anxiolytic.",
      "pl": "Zioło ajurwedyjskie, glikozydy bakozydowe, pamięć + anksjolityk."
    },
    "tier": 3,
    "chemicalFormula": "C46H74O17",
  },
  {
    "id": "ashwagandha",
    "name": "Ashwagandha",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.18)",
    "shortDesc": {
      "hu": "Indiai ginszeng, withanolid-glikozidok, kortizol-csökkentő adaptogén.",
      "en": "Indian ginseng, withanolide glycosides, cortisol-reducing adaptogen.",
      "pl": "Indyjski żeń-szeń, glikozydy witanolidowe, adaptogen obniżający kortyzol."
    },
    "tier": 3,
    "chemicalFormula": "C28H38O6",
  },
  {
    "id": "rhodiola",
    "name": "Rhodiola rosea",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.18)",
    "shortDesc": {
      "hu": "Sarki gyökér, salidrozid + rozavin, fáradtság-ellenes adaptogén.",
      "en": "Arctic root, salidroside + rosavin, anti-fatigue adaptogen.",
      "pl": "Arktyczny korzeń, salidrozyd + rozawina, adaptogen przeciwzmęczeniowy."
    },
    "tier": 3,
    "chemicalFormula": "C14H20O7",
  },
  {
    "id": "lions-mane",
    "name": "Lion`s Mane",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.18)",
    "shortDesc": {
      "hu": "Süngomba, hericenonok + erinacinok, NGF-szintézis indukció.",
      "en": "Hedgehog mushroom, hericenones + erinacines, NGF synthesis induction.",
      "pl": "Soplówka jeżowata, herycenony + erynacyny, indukcja syntezy NGF."
    },
    "tier": 3,
    "chemicalFormula": "mixture",
  },
  {
    "id": "l-theanine",
    "name": "L-Theanine",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.18)",
    "shortDesc": {
      "hu": "Zöld tea aminosav, γ-glutamil-etilamid, α-hullám fokozó.",
      "en": "Green tea amino acid, γ-glutamyl-ethylamide, α-wave enhancer.",
      "pl": "Aminokwas zielonej herbaty, γ-glutamylo-etyloamid, wzmacniacz fal α."
    },
    "tier": 3,
    "chemicalFormula": "C7H14N2O3",
  },
  {
    "id": "tongkat-ali",
    "name": "Tongkat Ali",
    "image": null,
    "accentColor": "#84cc16",
    "tagColor": "rgba(132,204,22,0.18)",
    "shortDesc": {
      "hu": "Maláj „longjack\", quassinoidok + eurycomanon, tesztoszteron-támogatás.",
      "en": "Malaysian “longjack”, quassinoids + eurycomanone, testosterone support.",
      "pl": "Malezyjski „longjack”, kwasynoidy + eurykomanon, wsparcie testosteronu."
    },
    "tier": 2,
    "chemicalFormula": "C19H24O6",
  },
  {
    "id": "cerebrolysin",
    "name": "Cerebrolysin",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "Sertés-agy peptid-hidrolizátum, EU Rx, stroke + demencia.",
      "en": "Porcine brain peptide hydrolysate, EU Rx, stroke + dementia.",
      "pl": "Hydrolizat peptydowy z mózgu świni, UE Rx, udar + otępienie."
    },
    "tier": 4,
    "chemicalFormula": "mixture",
  },
  {
    "id": "cortexin",
    "name": "Cortexin",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "Marha-agykéreg polipeptid kivonat, orosz Rx, neurológiai indikációk.",
      "en": "Bovine cortex polypeptide extract, Russian Rx, neurological indications.",
      "pl": "Ekstrakt polipeptydowy z kory wołowej, rosyjski Rx, wskazania neurologiczne."
    },
    "tier": 4,
    "chemicalFormula": "mixture",
  },
  {
    "id": "dihexa",
    "name": "Dihexa",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "Angiotensin IV analóg, HGF/c-Met agonista, hippokampális szinapszis-építő.",
      "en": "Angiotensin IV analog, HGF/c-Met agonist, hippocampal synapse builder.",
      "pl": "Analog angiotensyny IV, agonista HGF/c-Met, budowniczy synaps w hipokampie."
    },
    "tier": 1,
    "chemicalFormula": "C26H41N5O5",
  },
  {
    "id": "methylene-blue",
    "name": "Methylene Blue",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "Mitokondriális elektronhordozó, FDA Rx methemoglobinémiára, alacsony dózisú nootropikum.",
      "en": "Mitochondrial electron carrier, FDA Rx for methemoglobinemia, low-dose nootropic.",
      "pl": "Mitochondrialny nośnik elektronów, FDA Rx na methemoglobinemię, nootropik w niskiej dawce."
    },
    "tier": 5,
    "chemicalFormula": "C16H18ClN3S",
  },
  {
    "id": "magnesium-l-threonate",
    "name": "Magnesium L-Threonate",
    "image": null,
    "accentColor": "#00ff99",
    "tagColor": "rgba(0,255,153,0.18)",
    "shortDesc": {
      "hu": "MIT-fejlesztésű Mg-kelát (Magtein®), szinaptikus Mg²⁺-emelő.",
      "en": "MIT-developed Mg chelate (Magtein®), synaptic Mg²⁺ booster.",
      "pl": "Chelat Mg opracowany na MIT (Magtein®), wzmacniacz synaptycznego Mg²⁺."
    },
    "tier": 3,
    "chemicalFormula": "C8H14MgO10",
  },
  {
    "id": "paraxanthine",
    "name": "Paraxanthine",
    "image": null,
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.18)",
    "shortDesc": {
      "hu": "Koffein-metabolit nootropikum, alacsonyabb szorongáskeltő profillal mint a koffein.",
      "en": "Caffeine metabolite nootropic with a lower anxiogenic profile than caffeine.",
      "pl": "Metabolit kofeiny o niższym profilu lękotwórczym niż kofeina."
    },
    "tier": 4,
    "chemicalFormula": "C7H8N4O2",
  },
  {
    "id": "j-147",
    "name": "J-147",
    "image": null,
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Salk Institute curcumin-származék, mitokondriális ATP5A modulátor, BDNF-induktor.",
      "en": "Salk Institute curcumin derivative, mitochondrial ATP5A modulator, BDNF inducer.",
      "pl": "Pochodna kurkuminy z Salk Institute, modulator mitochondrialnego ATP5A, induktor BDNF."
    },
    "tier": 3,
    "chemicalFormula": "C18H17F3N4O",
  },
  {
    "id": "af710b",
    "name": "AF710B (Trapaxin)",
    "image": null,
    "accentColor": "#5eead4",
    "tagColor": "rgba(94,234,212,0.18)",
    "shortDesc": {
      "hu": "Dual M1 muszkarin / σ1 agonista, Alzheimer-jelölt kismolekula.",
      "en": "Dual M1 muscarinic / σ1 agonist, Alzheimer`s candidate small molecule.",
      "pl": "Podwójny agonista M1 muskarynowy / σ1, kandydat na lek Alzheimera."
    },
    "tier": 3,
    "chemicalFormula": "C21H29N3OS",
  },
  {
    "id": "adamax",
    "name": "Adamax",
    "image": null,
    "accentColor": "#a5b4fc",
    "tagColor": "rgba(165,180,252,0.18)",
    "shortDesc": {
      "hu": "Adamantán-konjugált Semax peptid, fokozott BBB-penetráció és tartós neurotrofikus hatás.",
      "en": "Adamantane-conjugated Semax peptide with enhanced BBB penetration and prolonged neurotrophic action.",
      "pl": "Semax z adamantanem, wzmocniona przenikalność BBB i przedłużone działanie neurotroficzne."
    },
    "tier": 2,
    "chemicalFormula": "C47H67N11O10",
  }
]

export const TOP_ENTRY_IDS = [
  "modafinil",
  "piracetam",
  "noopept",
  "phenylpiracetam",
  "adrafinil",
  "bromantane",
  "nsi-189",
  "semax",
  "selank",
  "9-me-bc"
]

export const nootropicsLibrary = {
  id: "nootropics",
  name: {
  "hu": "Nootropikum Könyvtár",
  "en": "Nootropic Library",
  "pl": "Biblioteka Nootropików"
},
  description: {
  "hu": "Kognitív teljesítményt és mentális egészséget támogató vegyületek · kutatási szint, kategória, hatásmechanizmus szerint",
  "en": "Compounds supporting cognitive performance and mental health · search by research tier, category, mechanism",
  "pl": "Związki wspierające wydajność poznawczą i zdrowie psychiczne · wyszukiwanie wg poziomu badań, kategorii, mechanizmu"
},
  accent: "#00ff99",
  meta: LIBRARY_ENTRY_META,           // Phase 9: meta-only entries-replacement
  topEntries: TOP_ENTRY_IDS,
  categories: CATEGORIES,
  entryCategoryMap: NOOTROPIC_CATEGORIES,
  getResearchLevel,
  researchLevels: RESEARCH_LEVELS,
  effects: EFFECT_CATEGORIES,
  effectsTitle: {
  "hu": "Kognitív Hatásterületek",
  "en": "Cognitive Domains",
  "pl": "Domeny Poznawcze"
},
  effectsSubtitle: {
  "hu": "5 funkcionális klaszter, közvetlen entry-elérhetőséggel",
  "en": "5 functional clusters with direct entry access",
  "pl": "5 klastrów funkcjonalnych z bezpośrednim dostępem"
},
  labels: {
  "topTitle": {
    "hu": "10 Legnépszerűbb Nootropikum",
    "en": "Top 10 Most Popular Nootropics",
    "pl": "10 najpopularniejszych nootropików"
  },
  "allTitle": {
    "hu": "Összes Nootropikum",
    "en": "All Nootropics",
    "pl": "Wszystkie nootropiki"
  },
  "allCount": {
    "hu": "nootropikum",
    "en": "nootropics",
    "pl": "nootropików"
  },
  "helpBody": {
    "hu": "Személyre szabott stackért vedd fel velünk a kapcsolatot Telegramon. Szívesen segítünk.",
    "en": "Reach out to us on Telegram for a personalized stack. We'll be happy to help.",
    "pl": "Skontaktuj się z nami na Telegramie po spersonalizowany stos. Chętnie pomożemy."
  },
  "relatedLabel": {
    "hu": "Kapcsolódó nootropikumok",
    "en": "Related nootropics",
    "pl": "Powiązane nootropiki"
  },
  "contactTitle": {
    "hu": "Van kérdésed a nootropikumokkal kapcsolatban?",
    "en": "Have a question about nootropics?",
    "pl": "Masz pytanie dotyczące nootropików?"
  }
},
  features: {
    faq: false,
    doseRecommendations: false,
    calculator: false,
    qualityGrid: false,
    interactions: false,
    quickStart: false,
    labTerminal: false,
    chemicalFormulaPlaceholder: true,
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
export { CATEGORIES, NOOTROPIC_CATEGORIES, getNootropicCategories, getResearchLevel, EFFECT_CATEGORIES }
