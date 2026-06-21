// Phase 10 – 5 cognitive cluster cards replacing the prior 8-tile effects layout.
// Each cluster lists 4-5 in-card clickable entry IDs that route to EntryDetail.
// image: null → EffectsSection's ILLUSTRATION_BY_INDEX SVG fallback (gradient + decorative).
// Peer-reviewed sourcing (PubMed / PMC / FDA / EMA) – content audit task 17 will revisit.

export const EFFECT_CATEGORIES = [
  {
    id: 'racetams',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.35)',
    title: { hu: 'Racetamok', en: 'Racetams', pl: 'Racetamy' },
    subtitle: {
      hu: '4 vegyület – AMPA / mGluR moduláció',
      en: '4 compounds – AMPA / mGluR modulation',
      pl: '4 związki – modulacja AMPA / mGluR',
    },
    description: {
      hu: 'A racetamok az AMPA-glutamát receptort és a metabotrop glutamát receptorokat modulálják, fokozva a kolinerg transzmissziót és a hosszú távú potenciációt (LTP).',
      en: 'Racetams modulate AMPA-glutamate and metabotropic glutamate receptors, enhancing cholinergic transmission and long-term potentiation (LTP).',
      pl: 'Racetamy modulują receptory AMPA-glutaminianowe i metabotropowe glutaminianowe, wzmacniając transmisję cholinergiczną i długotrwałą potencjację (LTP).',
    },
    detail: {
      hu: 'A piracetam volt az 1972-ben szintetizált első nootropikum (Giurgea, „nootropic" fogalom-megalkotó). Az új racetam-analógok (phenylpiracetam, aniracetam, oxiracetam) szelektívebb és erősebb AMPA-receptor pozitív allosztérikus modulátorok (PAM), amelyek lassítják a glutamát-kötés utáni receptor-deszenzitizációt és növelik a szinaptikus áramot.',
      en: 'Piracetam was the first nootropic synthesized in 1972 (Giurgea, who coined the term "nootropic"). Newer racetam analogs (phenylpiracetam, aniracetam, oxiracetam) are more selective and potent AMPA receptor positive allosteric modulators (PAM) that slow receptor desensitization after glutamate binding and increase synaptic current.',
      pl: 'Piracetam był pierwszym nootropikiem zsyntetyzowanym w 1972 (Giurgea, autor terminu „nootropik"). Nowsze analogi racetamów są bardziej selektywnymi i silnymi pozytywnymi allosterycznymi modulatorami receptora AMPA, spowalniającymi desensytyzację receptora po związaniu glutaminianu.',
    },
    studies: [
      { title: 'Piracetam, an old drug with novel properties?', authors: 'Malykh AG, Sadaie MR.', journal: 'Drugs. 2010;70(3):287-312.', pmid: '20166767' },
    ],
    entryNames: ['Phenylpiracetam', 'Aniracetam', 'Oxiracetam', 'Piracetam'],
    entryIds:   ['phenylpiracetam', 'aniracetam', 'oxiracetam', 'piracetam'],
    image: null,
  },
  {
    id: 'modafinil-types',
    color: '#7dd3fc',
    glow: 'rgba(125,211,252,0.35)',
    title: { hu: 'Modafinil típusok', en: 'Modafinil-types', pl: 'Typy modafinilu' },
    subtitle: {
      hu: '4 vegyület – eugeroikum stimulánsok',
      en: '4 compounds – eugeroic stimulants',
      pl: '4 związki – stymulanty eugeroiczne',
    },
    description: {
      hu: 'Eugeroikum (ébrenléti) szerek dopamin-transzporter és hisztamin H3-receptor-rendszereken keresztül. Klinikailag a narkolepszia és a műszakos munka álmossága javallatban használtak.',
      en: 'Eugeroic (wakefulness-promoting) agents acting via the dopamine transporter and histamine H3 receptor system. Clinically indicated for narcolepsy and shift-work sleep disorder.',
      pl: 'Środki eugeroiczne (wspomagające czuwanie) działające przez transporter dopaminy i receptor histaminowy H3. Klinicznie stosowane w narkolepsji i zaburzeniach snu pracy zmianowej.',
    },
    detail: {
      hu: 'A Modafinil R+S enantiomer keverék (FDA-approved Provigil). Az Armodafinil a tisztított R-enantiomer (Nuvigil, hosszabb felezési idő). A Flmodafinil (bisfluoromodafinil, CRL-40,940) ~3× erősebb in vivo. Az Adrafinil egy prodrug, ami hepatikus konverzió után Modafinilre bomlik.',
      en: 'Modafinil is an R+S enantiomer mixture (FDA-approved Provigil). Armodafinil is the purified R-enantiomer (Nuvigil, longer half-life). Flmodafinil (bisfluoromodafinil, CRL-40,940) is ~3× more potent in vivo. Adrafinil is a prodrug that hepatic conversion turns into Modafinil.',
      pl: 'Modafinil to mieszanka enancjomerów R+S (Provigil zatwierdzony przez FDA). Armodafinil to oczyszczony enancjomer R (Nuvigil, dłuższy okres półtrwania). Flmodafinil (CRL-40,940) jest ~3× silniejszy in vivo. Adrafinil to prolek konwertowany do Modafinilu w wątrobie.',
    },
    studies: [
      { title: 'Modafinil: review of neurochemical actions and effects on cognition', authors: 'Minzenberg MJ, Carter CS.', journal: 'Neuropsychopharmacology. 2008;33(7):1477-1502.', pmid: '17712350' },
      { title: 'Armodafinil for narcolepsy and shift-work disorder', authors: 'Darwish M et al.', journal: 'CNS Drugs. 2009;23(9):817-829.', pmid: '19689168' },
    ],
    entryNames: ['Modafinil', 'Armodafinil', 'Flmodafinil', 'Adrafinil'],
    entryIds:   ['modafinil', 'armodafinil', 'flmodafinil', 'adrafinil'],
    image: null,
  },
  {
    id: 'dopamine-motivation',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.35)',
    title: { hu: 'Dopamin / Motiváció', en: 'Dopamine / Motivation', pl: 'Dopamina / Motywacja' },
    subtitle: {
      hu: '4 vegyület – D2/D3 + MAO modulátorok',
      en: '4 compounds – D2/D3 + MAO modulators',
      pl: '4 związki – modulatory D2/D3 + MAO',
    },
    description: {
      hu: 'A dopaminerg motivációs rendszer modulátorai: szelektív MAO-B inhibitor (Selegiline), D2-pozitív allosztérikus modulátor (9-Me-BC), adaptogén (Bromantane) és koffein-metabolit (Paraxanthine).',
      en: 'Modulators of the dopaminergic motivation system: selective MAO-B inhibitor (Selegiline), D2-positive allosteric modulator (9-Me-BC), adaptogen (Bromantane), and caffeine metabolite (Paraxanthine).',
      pl: 'Modulatory układu dopaminergiczno-motywacyjnego: selektywny inhibitor MAO-B (Selegilina), pozytywny allosteryczny modulator D2 (9-Me-BC), adaptogen (Bromantan) i metabolit kofeiny (Paraksantyna).',
    },
    detail: {
      hu: 'A 9-Me-BC az első humán dokumentált D2-pozitív allosztérikus modulátor; állati modelleken fokozza a felfedező viselkedést és anti-anhedoniás hatással bír. A Bromantane orosz „actoprotector" adaptogén, D2 receptor expressziót növel. A Paraxanthine a koffein elsődleges humán metabolitja, hasonló vigilancia-emelő hatással, de alacsonyabb anxiogén profillal.',
      en: '9-Me-BC is the first documented D2-positive allosteric modulator in humans; in animal models it increases exploratory behavior and is anti-anhedonic. Bromantane is a Russian "actoprotector" adaptogen that upregulates D2 receptor expression. Paraxanthine is caffeine`s primary human metabolite with a similar vigilance-promoting profile but lower anxiogenic side-effect.',
      pl: '9-Me-BC to pierwszy udokumentowany pozytywny allosteryczny modulator D2 u ludzi; w modelach zwierzęcych zwiększa zachowania eksploracyjne i działa antyanhedonicznie. Bromantan to rosyjski adaptogen-aktoprotektor zwiększający ekspresję receptora D2. Paraksantyna to główny ludzki metabolit kofeiny o podobnym profilu wspierającym czuwanie, ale niższym efekcie lękotwórczym.',
    },
    studies: [
      { title: '9-Me-BC: neurotrophic and antiapoptotic effects', authors: 'Polanski W et al.', journal: 'J Neural Transm. 2010;117(7):835-846.', pmid: '20517703' },
      { title: 'Paraxanthine, a non-anxiogenic stimulant – RCT', authors: 'Yoo C et al.', journal: 'J Int Soc Sports Nutr. 2022;19(1):1-15.', pmid: '35008471' },
    ],
    entryNames: ['9-Me-BC', 'Bromantane', 'Selegiline', 'Paraxanthine'],
    entryIds:   ['9-me-bc', 'bromantane', 'selegiline', 'paraxanthine'],
    image: null,
  },
  {
    id: 'bdnf-neuroplasticity',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.35)',
    title: { hu: 'BDNF / Neuroplaszticitás', en: 'BDNF / Neuroplasticity', pl: 'BDNF / Neuroplastyczność' },
    subtitle: {
      hu: '5 vegyület – BDNF-induktorok és szinapszisképzők',
      en: '5 compounds – BDNF inducers and synaptogenic agents',
      pl: '5 związków – induktory BDNF i czynniki synaptogenne',
    },
    description: {
      hu: 'BDNF (Brain-Derived Neurotrophic Factor) és szinapszisképzés serkentői: Dihexa (Ang-IV analóg), NSI-189 (neurogén), J-147 (mitokondriális), Semax (orosz ACTH-analóg) és Adamax (Semax-adamantyl konjugátum).',
      en: 'BDNF (Brain-Derived Neurotrophic Factor) and synaptogenesis enhancers: Dihexa (Ang-IV analog), NSI-189 (neurogenic), J-147 (mitochondrial), Semax (Russian ACTH analog) and Adamax (Semax-adamantyl conjugate).',
      pl: 'Wzmacniacze BDNF (czynnik neurotroficzny pochodzenia mózgowego) i synaptogenezy: Diheksa (analog Ang-IV), NSI-189 (neurogenny), J-147 (mitochondrialny), Semax (rosyjski analog ACTH) i Adamax (koniugat Semax-adamantyl).',
    },
    detail: {
      hu: 'A Dihexa az egyik legpotenciálisabb in vitro szinapszisképző molekula (állati modellben ~10⁷× erősebb mint a BDNF egyes végpontokon). A J-147 az ATP5A mitokondriális alegységen hat, nem direkt BDNF-induktor de funkcionálisan analóg. Az Adamax az adamantyl-csoporttal stabilizált Semax: hosszabb CNS-expozíció intranasalisan.',
      en: 'Dihexa is among the most potent in vitro synaptogenic molecules (~10⁷× stronger than BDNF on certain animal-model endpoints). J-147 acts on the ATP5A mitochondrial subunit – not a direct BDNF inducer but functionally analogous. Adamax is adamantyl-stabilized Semax: longer CNS exposure intranasally.',
      pl: 'Diheksa jest jedną z najsilniejszych molekuł synaptogennych in vitro (~10⁷× silniejsza niż BDNF na niektórych punktach końcowych). J-147 działa na podjednostkę mitochondrialną ATP5A. Adamax to Semax stabilizowany adamantylowo: dłuższa ekspozycja CNS donosowo.',
    },
    studies: [
      { title: 'J-147 reverses memory loss in aged mice via mitochondrial action', authors: 'Goldberg J, Currais A, Prior M et al.', journal: 'Aging Cell. 2018;17(2):e12715.', pmid: '30733413' },
      { title: 'Semax in cognitive impairment after ischemic stroke', authors: 'Gusev EI et al.', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2018;118(3):61-68.', pmid: '29722760' },
    ],
    entryNames: ['Dihexa', 'NSI-189', 'J-147', 'Semax', 'Adamax'],
    entryIds:   ['dihexa', 'nsi-189', 'j-147', 'semax', 'adamax'],
    image: null,
  },
  {
    id: 'cholinergic-boosters',
    color: '#5eead4',
    glow: 'rgba(94,234,212,0.35)',
    title: { hu: 'Kolinerg boosterek', en: 'Cholinergic Boosters', pl: 'Wzmacniacze cholinergiczne' },
    subtitle: {
      hu: '4 vegyület – acetilkolin szubsztrát + receptor moduláció',
      en: '4 compounds – acetylcholine substrate + receptor modulation',
      pl: '4 związki – substrat acetylocholiny + modulacja receptorów',
    },
    description: {
      hu: 'Az acetilkolin precursorai (CDP-Choline, Alpha-GPC) emelik a szinaptikus acetilkolin szintet. A Pramiracetam és az AF710B muszkarin-receptor szelektív modulátorok.',
      en: 'Acetylcholine precursors (CDP-Choline, Alpha-GPC) elevate synaptic ACh levels. Pramiracetam and AF710B are muscarinic-receptor selective modulators.',
      pl: 'Prekursory acetylocholiny (CDP-Cholina, Alpha-GPC) podnoszą poziom synaptycznej ACh. Pramiracetam i AF710B to selektywne modulatory receptorów muskarynowych.',
    },
    detail: {
      hu: 'A CDP-Choline orálisan citicolinra hidrolizál, és BBB-átjárható kettős kolin+uridin-donorként emeli az acetilkolin-szintézist. Az Alpha-GPC közvetlen kolin-donor (~40% kolin tartalom). A Pramiracetam HACU (high-affinity choline uptake) fokozó. Az AF710B az M1 muszkarin + szigma-1 receptort célozza Alzheimer-jelöltként.',
      en: 'CDP-Choline hydrolyzes to citicoline orally and crosses the BBB as a dual choline+uridine donor, raising acetylcholine synthesis. Alpha-GPC is a direct choline donor (~40% choline content). Pramiracetam enhances HACU (high-affinity choline uptake). AF710B targets M1 muscarinic + sigma-1 receptors as an Alzheimer`s candidate.',
      pl: 'CDP-Cholina hydrolizuje do citicoliny doustnie i przekracza BBB jako podwójny dawca choliny+urydyny, podnosząc syntezę acetylocholiny. Alpha-GPC jest bezpośrednim dawcą choliny (~40% zawartości). Pramiracetam wzmacnia HACU (wychwyt choliny o wysokim powinowactwie). AF710B celuje w receptory M1 muskarynowy + sigma-1.',
    },
    studies: [
      { title: 'Cytidine 5\'-diphosphocholine (citicoline) in cognitive decline', authors: 'Secades JJ et al.', journal: 'CNS Drugs. 2016;30(7):561-575.', pmid: '27358063' },
      { title: 'AF710B improves cognition and reduces tau pathology in 3xTg-AD mice', authors: 'Fisher A, Bezprozvanny I, Wu L et al.', journal: 'J Alzheimers Dis. 2016;55(3):1147-1163.', pmid: '27855286' },
    ],
    entryNames: ['CDP-Choline', 'Alpha-GPC', 'Pramiracetam', 'AF710B (Trapaxin)'],
    entryIds:   ['cdp-choline', 'alpha-gpc', 'pramiracetam', 'af710b'],
    image: null,
  },
]
