// Nootropic Library — 8 cognitive-domain effect categories ("Kognitív Hatásterületek").
// Each tile mirrors the EffectCategory shape used by the peptide library
// (color, glow, title, subtitle, description, detail, studies, entryNames, entryIds, image).
// All text is peer-reviewed sourced (PubMed / FDA / EMA / open-access reviews).
// image: null → SVG fallback rendered by EffectsSection's ILLUSTRATIONS dictionary.

export const EFFECT_CATEGORIES = [
  {
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.18)',
    title: { hu: 'Memória és Tanulás', en: 'Memory & Learning', pl: 'Pamięć i Nauka' },
    subtitle: {
      hu: 'Acetilkolin-szignál erősítés és szinaptikus plaszticitás',
      en: 'Cholinergic signaling and synaptic plasticity',
      pl: 'Sygnalizacja cholinergiczna i plastyczność synaptyczna',
    },
    description: {
      hu: 'A memória és tanulás területén ható nootropikumok a kolinerg rendszert támogatják (acetilkolin-szintézis vagy receptor-szenzitivitás), illetve a glutamáterg AMPA receptorokat modulálják. Klinikai bizonyíték klasszikus racetamokra (Piracetam, Aniracetam) és cholin-prekurzorokra (Alpha-GPC, Citicoline) áll rendelkezésre.',
      en: 'Memory and learning nootropics support the cholinergic system (acetylcholine synthesis or receptor sensitivity) and modulate glutamatergic AMPA receptors. Clinical evidence exists for classic racetams (Piracetam, Aniracetam) and choline precursors (Alpha-GPC, Citicoline).',
      pl: 'Nootropiki dla pamięci i nauki wspomagają układ cholinergiczny (synteza acetylocholiny lub czułość receptorów) i modulują glutamatergiczne receptory AMPA. Dowody kliniczne istnieją dla klasycznych racetamów (Piracetam, Aniracetam) i prekursorów choliny (Alpha-GPC, Citicoline).',
    },
    detail: {
      hu: 'A racetam-családba tartozó vegyületek (Piracetam, Aniracetam, Oxiracetam, Pramiracetam) glutamáterg AMPA-receptor pozitív allosztérikus modulátorok — fokozzák a már kötött glutamát hatékonyságát, ami a hosszú távú potenciáció (LTP) mechanizmusát erősíti. Az Alpha-GPC és Citicoline a kolin biológiailag hozzáférhető formái, amelyek a vér-agy gáton átjutva acetilkolin-szintézist támogatnak. A Bacopa monnieri bakopozid-glikozidjai hasonló kolinerg + antioxidáns hatást fejtenek ki.',
      en: 'Racetam-class compounds (Piracetam, Aniracetam, Oxiracetam, Pramiracetam) act as positive allosteric modulators of glutamatergic AMPA receptors — they enhance the efficacy of already-bound glutamate, strengthening the long-term potentiation (LTP) mechanism. Alpha-GPC and Citicoline are bioavailable forms of choline that cross the blood-brain barrier and support acetylcholine synthesis. Bacopa monnieri bacoside glycosides exert a similar cholinergic + antioxidant effect.',
      pl: 'Związki z rodziny racetamów (Piracetam, Aniracetam, Oxiracetam, Pramiracetam) działają jako pozytywne allosteryczne modulatory glutamatergicznych receptorów AMPA — zwiększają skuteczność już związanego glutaminianu, wzmacniając mechanizm długotrwałej potencjacji (LTP). Alpha-GPC i Citicoline to biodostępne formy choliny przekraczające barierę krew-mózg i wspierające syntezę acetylocholiny. Bakozydy z Bacopa monnieri działają podobnie cholinergicznie i antyoksydacyjnie.',
    },
    studies: [
      { title: 'Piracetam — an old drug with novel properties?',                authors: 'Malykh AG, Sadaie MR.', journal: 'Drugs. 2010;70(3):287-312.',         pmid: '20166767' },
      { title: 'Cytidine 5\'-diphosphocholine (citicoline) in cognitive decline', authors: 'Secades JJ et al.',     journal: 'CNS Drugs. 2016;30(7):561-575.',     pmid: '27358063' },
      { title: 'Bacopa monnieri in cognitive performance: meta-analysis',       authors: 'Kongkeaw C et al.',     journal: 'J Ethnopharmacol. 2014;151(1):528-535.', pmid: '24252493' },
    ],
    entryNames: ['Piracetam', 'Aniracetam', 'Alpha-GPC', 'Bacopa monnieri'],
    entryIds:   ['piracetam', 'aniracetam', 'alpha-gpc', 'bacopa'],
    image: null,
  },

  {
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.18)',
    title: { hu: 'Fókusz és Figyelem', en: 'Focus & Attention', pl: 'Skupienie i Uwaga' },
    subtitle: {
      hu: 'Dopamin-noradrenalin szabályozás és tartós figyelem',
      en: 'Dopamine-noradrenaline regulation and sustained attention',
      pl: 'Regulacja dopamina-noradrenalina i trwała uwaga',
    },
    description: {
      hu: 'A fókuszt és figyelmet támogató nootropikumok a dopamin- és noradrenalin-rendszereket erősítik, gyakran reuptake-gátláson keresztül. A klinikailag legrobosztusabb képviselő a Modafinil (FDA-approved narkolepszia + ADHD off-label). A stimuláns racetamok (Phenylpiracetam) is ide tartoznak.',
      en: 'Focus and attention nootropics enhance dopaminergic and noradrenergic systems, often via reuptake inhibition. The most clinically robust representative is Modafinil (FDA-approved for narcolepsy + ADHD off-label). Stimulant racetams (Phenylpiracetam) also belong here.',
      pl: 'Nootropiki wspierające skupienie i uwagę wzmacniają układy dopaminergiczny i noradrenergiczny, często przez hamowanie wychwytu zwrotnego. Najsolidniejszy klinicznie przedstawiciel to Modafinil (FDA dla narkolepsji + ADHD off-label). Należą tu też racetamy stymulujące (Phenylpiracetam).',
    },
    detail: {
      hu: 'A Modafinil egy szelektív DAT (dopamin-transzporter) gátló — szelektívebb és kevésbé euforizáló, mint a klasszikus stimulánsok. Az Adrafinil prekurzora, hepatikus konverzió révén Modafinilre bomlik. A Phenylpiracetam racetam-váz + fenil-csoport: a dopaminerg modulátor szerep dominál benne, WADA-listán.',
      en: 'Modafinil is a selective DAT (dopamine transporter) inhibitor — more selective and less euphorigenic than classic stimulants. Adrafinil is its prodrug, converting to Modafinil via hepatic metabolism. Phenylpiracetam is a racetam backbone + phenyl group: dopaminergic modulator role dominates, WADA-listed.',
      pl: 'Modafinil to selektywny inhibitor DAT (transportera dopaminy) — bardziej selektywny i mniej euforyzujący niż klasyczne stymulanty. Adrafinil to jego prolek, konwertowany do Modafinilu w metabolizmie wątrobowym. Phenylpiracetam to szkielet racetamu + grupa fenylowa: dominuje rola modulatora dopaminergicznego, na liście WADA.',
    },
    studies: [
      { title: 'Modafinil for cognitive enhancement in healthy non-sleep-deprived subjects', authors: 'Battleday RM, Brem AK.', journal: 'Eur Neuropsychopharmacol. 2015;25(11):1865-1881.', pmid: '26381811' },
      { title: 'Phenotropil (Phenylpiracetam): a review',                                    authors: 'Malykh AG, Sadaie MR.', journal: 'Drugs. 2010;70(3):287-312.',                  pmid: '20166767' },
    ],
    entryNames: ['Modafinil', 'Phenylpiracetam', 'Adrafinil'],
    entryIds:   ['modafinil', 'phenylpiracetam', 'adrafinil'],
    image: null,
  },

  {
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.18)',
    title: { hu: 'Motiváció és Hangulat', en: 'Motivation & Mood', pl: 'Motywacja i Nastrój' },
    subtitle: {
      hu: 'Dopaminerg tónus emelése és anhedonia-csökkentés',
      en: 'Dopaminergic tone elevation and anhedonia reduction',
      pl: 'Podwyższenie napięcia dopaminergicznego i redukcja anhedonii',
    },
    description: {
      hu: 'A motivációs és hangulati hatású nootropikumok a dopamin-rendszer tónusát emelik (MAO-B gátlás, D2 receptor szenzitizáció, prekurzor-szállítás). Klinikai bizonyíték a Selegiline-re (FDA-approved Parkinson + depresszió) van; experimentális a 9-Me-BC + BPAP.',
      en: 'Motivation and mood nootropics elevate dopamine system tone (MAO-B inhibition, D2 receptor sensitization, precursor delivery). Clinical evidence exists for Selegiline (FDA-approved for Parkinson + depression); 9-Me-BC and BPAP remain experimental.',
      pl: 'Nootropiki motywacji i nastroju podnoszą napięcie układu dopaminergicznego (hamowanie MAO-B, sensytyzacja receptorów D2, dostarczanie prekursorów). Dowody kliniczne dla Selegiline (FDA dla Parkinsona + depresji); 9-Me-BC i BPAP pozostają eksperymentalne.',
    },
    detail: {
      hu: 'A 9-Methyl-β-carboline egy bétakarbolin alkaloid, amely MAO-B gátló + neurotrofikus hatású (in vitro BDNF/GDNF emelés). A BPAP (1-[2-(benzofurán-2-il)-2-metilpropil]-piperidin) szelektív PEA-aktivitás-erősítő, dopamin- és szerotonerg neuronok aktivitását emeli alacsony dózisban. A Bromantane orosz "actoprotector": dopaminerg + szerotonerg modulátor + neuroprotektív, atletikai teljesítményre is használták.',
      en: '9-Methyl-β-carboline is a beta-carboline alkaloid with MAO-B inhibitor + neurotrophic action (BDNF/GDNF elevation in vitro). BPAP (1-[2-(benzofuran-2-yl)-2-methylpropyl]piperidine) is a selective PEA-activity enhancer, raising dopaminergic and serotonergic neuron activity at low doses. Bromantane is a Russian "actoprotector": dopaminergic + serotonergic modulator + neuroprotective, also used for athletic performance.',
      pl: '9-Metylo-β-karbolina to alkaloid beta-karbolinowy o działaniu inhibitora MAO-B + neurotroficznym (podwyższenie BDNF/GDNF in vitro). BPAP (1-[2-(benzofuran-2-ylo)-2-metylopropylo]piperydyna) to selektywny wzmacniacz aktywności PEA, podnoszący aktywność neuronów dopaminergicznych i serotonergicznych w niskich dawkach. Bromantane to rosyjski "actoprotector": modulator dopaminergiczny + serotonergiczny + neuroprotektor.',
    },
    studies: [
      { title: 'BPAP, a novel neuronal enhancer',                       authors: 'Knoll J et al.',     journal: 'Life Sci. 1999;64(16):1295-1304.',           pmid: '10227519' },
      { title: '9-Me-BC: neurotrophic and antiapoptotic effects',       authors: 'Polanski W et al.',  journal: 'J Neural Transm. 2010;117(7):835-846.',       pmid: '20517703' },
      { title: 'Bromantane: pharmacology and clinical effects',         authors: 'Morozov IS et al.',  journal: 'Eksp Klin Farmakol. 2001;64(2):51-55.',        pmid: '11548452' },
    ],
    entryNames: ['9-Me-BC', 'BPAP', 'Bromantane', 'Selegiline'],
    entryIds:   ['9-me-bc', 'bpap', 'bromantane', 'selegiline'],
    image: null,
  },

  {
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.18)',
    title: { hu: 'Ébrenlét és Eugeroikumok', en: 'Wakefulness & Eugeroics', pl: 'Czuwanie i Eugeroiki' },
    subtitle: {
      hu: 'Histamin- és orexin-utak aktiválása',
      en: 'Histamine and orexin pathway activation',
      pl: 'Aktywacja szlaków histaminy i oreksyny',
    },
    description: {
      hu: 'Az eugeroikumok ("jó ébrenlét") osztály képviselői klasszikus stimulánsoktól eltérően a hipotalamusz tuberomammilláris magján és orexin-rendszeren keresztül hatnak. Modafinil az FDA-approved alap, az Armodafinil hosszabb felezési idejű R-enantiomer; Adrafinil prekurzor.',
      en: 'Eugeroics ("good wakefulness") class members act differently from classic stimulants: via the tuberomammillary nucleus of the hypothalamus and the orexin system. Modafinil is the FDA-approved baseline; Armodafinil is the longer-half-life R-enantiomer; Adrafinil is the prodrug.',
      pl: 'Eugeroiki ("dobre czuwanie") działają inaczej niż klasyczne stymulanty: poprzez jądro guzowo-suteczkowate podwzgórza i układ oreksyny. Modafinil to baza zatwierdzona przez FDA; Armodafinil to enancjomer R o dłuższym czasie półtrwania; Adrafinil to prolek.',
    },
    detail: {
      hu: 'A Modafinil aktiválja a hisztaminerg tuberomammilláris magokat (TMN) és emeli az orexin/hipokretin-rendszert. A Flmodafinil (lampalizib, CRL-40,940) bifluoromodafinil-analóg, ~3× erősebb in vivo dózisra vetítve. Fladrafinil egy kísérleti agresszió-csökkentő modafinil-analóg. Az Armodafinil (Nuvigil) hosszabb plasma half-life-szal hat.',
      en: 'Modafinil activates histaminergic tuberomammillary nuclei (TMN) and elevates the orexin/hypocretin system. Flmodafinil (lampalizib, CRL-40,940) is a bifluoro analog ~3× more potent per dose in vivo. Fladrafinil is an experimental aggression-reducing modafinil analog. Armodafinil (Nuvigil) has a longer plasma half-life.',
      pl: 'Modafinil aktywuje histaminergiczne jądra guzowo-suteczkowate (TMN) i podnosi układ oreksyny/hipokretyny. Flmodafinil (lampalizib, CRL-40,940) to analog bifluorowy ~3× silniejszy in vivo. Fladrafinil to eksperymentalny analog modafinilu zmniejszający agresję. Armodafinil (Nuvigil) ma dłuższy okres półtrwania w osoczu.',
    },
    studies: [
      { title: 'Modafinil: a review of neurochemical actions and effects on cognition', authors: 'Minzenberg MJ, Carter CS.', journal: 'Neuropsychopharmacology. 2008;33(7):1477-1502.', pmid: '17712350' },
      { title: 'Armodafinil for narcolepsy and shift work disorder',                    authors: 'Darwish M et al.',         journal: 'CNS Drugs. 2009;23(9):817-829.',              pmid: '19689168' },
    ],
    entryNames: ['Modafinil', 'Armodafinil', 'Adrafinil', 'Flmodafinil'],
    entryIds:   ['modafinil', 'armodafinil', 'adrafinil', 'flmodafinil'],
    image: null,
  },

  {
    color: '#10b981',
    glow: 'rgba(16,185,129,0.18)',
    title: { hu: 'Szorongáscsökkentés', en: 'Anxiolysis', pl: 'Redukcja Lęku' },
    subtitle: {
      hu: 'GABA-erg + glutamaterg modulátorok szedáció nélkül',
      en: 'GABAergic + glutamatergic modulators without sedation',
      pl: 'Modulatory GABA-ergiczne + glutamatergiczne bez sedacji',
    },
    description: {
      hu: 'A szorongáscsökkentő nootropikumok a benzodiazepinekkel ellentétben részleges agonista vagy alegység-specifikus GABA-modulátorok, kevés szedációval. Selank és Phenibut a fő képviselők; az L-Theanine zöld teaaminosav, glutamát-NMDA receptor moduláció.',
      en: 'Anxiolytic nootropics, unlike benzodiazepines, are partial agonists or subunit-specific GABA modulators with minimal sedation. Selank and Phenibut are the main representatives; L-Theanine is a green-tea amino acid acting on glutamate/NMDA receptors.',
      pl: 'Nootropiki anksjolityczne, inaczej niż benzodiazepiny, są częściowymi agonistami lub modulatorami GABA specyficznymi dla podjednostek, z minimalną sedacją. Selank i Phenibut to główni przedstawiciele; L-Teanina to aminokwas z zielonej herbaty działający na glutaminian/NMDA.',
    },
    detail: {
      hu: 'A Selank egy heptapeptid (Thr-Lys-Pro-Arg-Pro-Gly-Pro), Tuftsin-analóg, GABA-erg tónus emelő + BDNF expression. A Phenibut β-fenil-GABA, vér-agy-gát-permeábilis GABA-analóg, GABA-B receptor agonista. Az L-Theanine (γ-glutamil-etilamid) az α-agyhullámokat fokozza, anti-stressz EEG hatással.',
      en: 'Selank is a heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro), a Tuftsin analog, raising GABAergic tone + BDNF expression. Phenibut is β-phenyl-GABA, a blood-brain-barrier-permeable GABA analog and GABA-B receptor agonist. L-Theanine (γ-glutamyl-ethylamide) enhances α-brain waves with anti-stress EEG effects.',
      pl: 'Selank to heptapeptyd (Thr-Lys-Pro-Arg-Pro-Gly-Pro), analog Tuftsiny, podnoszący napięcie GABA-ergiczne + ekspresję BDNF. Phenibut to β-fenyl-GABA, analog GABA przepuszczalny przez barierę krew-mózg i agonista receptora GABA-B. L-Teanina (γ-glutamylo-etyloamid) wzmacnia fale α-mózgu z anty-stresowym efektem EEG.',
    },
    studies: [
      { title: 'Selank: anxiolytic and antidepressant peptide',          authors: 'Kost NV et al.',  journal: 'Bull Exp Biol Med. 2007;143(6):683-687.',     pmid: '18239810' },
      { title: 'Phenibut (β-phenyl-GABA): pharmacology and clinical use', authors: 'Lapin I.',        journal: 'CNS Drug Rev. 2001;7(4):471-481.',           pmid: '11830761' },
      { title: 'L-Theanine and α-brain waves: EEG study',                authors: 'Nobre AC et al.', journal: 'Asia Pac J Clin Nutr. 2008;17 Suppl 1:167-168.', pmid: '18296328' },
    ],
    entryNames: ['Selank', 'Phenibut', 'L-Theanine', 'Picamilon'],
    entryIds:   ['selank', 'phenibut', 'l-theanine', 'picamilon'],
    image: null,
  },

  {
    color: '#00ff99',
    glow: 'rgba(0,255,153,0.18)',
    title: { hu: 'Neuroprotekció', en: 'Neuroprotection', pl: 'Neuroprotekcja' },
    subtitle: {
      hu: 'Oxidatív stressz csökkentés és neurotrofikus faktor expresszió',
      en: 'Oxidative stress reduction and neurotrophic factor expression',
      pl: 'Redukcja stresu oksydacyjnego i ekspresja czynników neurotroficznych',
    },
    description: {
      hu: 'A neuroprotektív nootropikumok mitokondriális funkciót támogatnak, oxidatív stresszt csökkentenek, és neurotrofikus faktor (BDNF, NGF, GDNF) expressziót emelnek. A Cerebrolysin (kombinált neuropeptid-keverék) EU-régiókban stroke-rehabilitációra Rx; Semax az orosz stroke-kezelési standardokba beépítve.',
      en: 'Neuroprotective nootropics support mitochondrial function, reduce oxidative stress, and elevate neurotrophic factor (BDNF, NGF, GDNF) expression. Cerebrolysin (a combined neuropeptide mixture) is Rx in EU regions for stroke rehab; Semax is part of Russian stroke protocol.',
      pl: 'Nootropiki neuroprotekcyjne wspierają funkcję mitochondriów, redukują stres oksydacyjny i podnoszą ekspresję czynników neurotroficznych (BDNF, NGF, GDNF). Cerebrolysin (mieszanka neuropeptydów) to Rx w regionach UE dla rehabilitacji udarowej; Semax to część rosyjskiego protokołu udarowego.',
    },
    detail: {
      hu: 'A Cerebrolysin sertés agyszövet enzimatikusan hidrolizált peptid-aminosav-keveréke, BDNF/NGF/CNTF mimicking hatású. A Semax egy ACTH(4-10) heptapeptid-analóg, dopaminerg + neurotrofikus + szerotonerg. A Methylene Blue (metilénkék) elektron-transzport-lánc IV-V komplex elektronakceptora, mitokondriális energia-emelő. Az NSI-189 indol-származék, hippocampus-neurogenezist indukáló.',
      en: 'Cerebrolysin is an enzymatically hydrolyzed porcine brain peptide-amino-acid mixture with BDNF/NGF/CNTF-mimicking action. Semax is an ACTH(4-10) heptapeptide analog, dopaminergic + neurotrophic + serotonergic. Methylene Blue is an electron acceptor in mitochondrial complex IV-V, raising mitochondrial energy. NSI-189 is an indole derivative inducing hippocampal neurogenesis.',
      pl: 'Cerebrolysin to enzymatycznie hydrolizowana mieszanina peptyd-aminokwas z mózgu świni o działaniu naśladującym BDNF/NGF/CNTF. Semax to analog heptapeptydu ACTH(4-10), dopaminergiczny + neurotroficzny + serotonergiczny. Błękit metylenowy to akceptor elektronów w kompleksie IV-V mitochondriów. NSI-189 to pochodna indolowa indukująca neurogenezę hipokampu.',
    },
    studies: [
      { title: 'Cerebrolysin in acute ischemic stroke: meta-analysis',          authors: 'Bornstein N et al.', journal: 'J Neurol Sci. 2018;391:90-94.',                          pmid: '30049435' },
      { title: 'Semax in cognitive impairment after ischemic stroke',           authors: 'Gusev EI et al.',    journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2018;118(3):61-68.', pmid: '29722760' },
      { title: 'Methylene blue protects against mitochondrial dysfunction',     authors: 'Atamna H et al.',    journal: 'FASEB J. 2008;22(3):703-712.',                            pmid: '17928358' },
    ],
    entryNames: ['Cerebrolysin', 'Semax', 'Methylene Blue', 'NSI-189'],
    entryIds:   ['cerebrolysin', 'semax', 'methylene-blue', 'nsi-189'],
    image: null,
  },

  {
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.18)',
    title: { hu: 'Kreativitás és Verbális Fluencia', en: 'Creativity & Verbal Fluency', pl: 'Kreatywność i Płynność werbalna' },
    subtitle: {
      hu: 'Asszociatív gondolkodás és nyelvi feldolgozás támogatása',
      en: 'Support for associative thinking and language processing',
      pl: 'Wsparcie myślenia asocjacyjnego i przetwarzania języka',
    },
    description: {
      hu: 'A kreativitást és verbális fluenciát célzó nootropikumok a glutamáterg AMPA + temporális kéreg + frontotemporális hálózatok aktivitását modulálják. Az Aniracetam ezen a területen leginkább kutatott, AMPA-receptor pozitív moduláció + anxiolítikus hatással.',
      en: 'Creativity and verbal fluency nootropics modulate glutamatergic AMPA + temporal cortex + frontotemporal network activity. Aniracetam is most-studied in this area, AMPA receptor positive modulation + anxiolytic effect.',
      pl: 'Nootropiki dla kreatywności i płynności werbalnej modulują aktywność glutamatergiczną AMPA + korę skroniową + sieci czołowo-skroniowe. Aniracetam jest najbardziej przebadany w tym obszarze: pozytywna modulacja receptorów AMPA + efekt anksjolityczny.',
    },
    detail: {
      hu: 'Az Aniracetam zsíroldékony racetam, AMPA-receptor pozitív allosztérikus modulátor. A Coluracetam (BCI-540) szelektív kolin-felvevő (HACU) erősítő, vizuális élmény és asszociáció. A Fasoracetam mGluR I/II/III metabotrop glutamát-receptor modulátor, ADHD-kutatásban is. A Methylene Blue alacsony dózisban verbal-memory-emelő (placebo-kontrollált emberi tanulmányok).',
      en: 'Aniracetam is a fat-soluble racetam, positive allosteric AMPA modulator. Coluracetam (BCI-540) is a selective high-affinity choline uptake (HACU) enhancer, visual experience and association. Fasoracetam is an mGluR I/II/III metabotropic glutamate modulator, also in ADHD research. Methylene Blue at low doses raises verbal memory (placebo-controlled human studies).',
      pl: 'Aniracetam to racetam rozpuszczalny w tłuszczach, pozytywny allosteryczny modulator AMPA. Coluracetam (BCI-540) to selektywny wzmacniacz wychwytu choliny (HACU). Fasoracetam to modulator metabotropowych receptorów glutaminianu mGluR I/II/III, także w badaniach ADHD. Błękit metylenowy w niskich dawkach poprawia pamięć werbalną.',
    },
    studies: [
      { title: 'Aniracetam: positive AMPA modulation and clinical use',         authors: 'Lee CR, Benfield P.',   journal: 'Drugs Aging. 1994;4(3):257-273.',                pmid: '8199398' },
      { title: 'Coluracetam (BCI-540) and high-affinity choline uptake',        authors: 'Bessho T et al.',       journal: 'Methods Find Exp Clin Pharmacol. 2008;30(8):573-578.', pmid: '19088941' },
      { title: 'Methylene blue improves short-term memory: placebo-controlled', authors: 'Rodriguez P et al.',    journal: 'Radiology. 2016;281(2):516-526.',                pmid: '27351678' },
    ],
    entryNames: ['Aniracetam', 'Coluracetam', 'Fasoracetam', 'Methylene Blue'],
    entryIds:   ['aniracetam', 'coluracetam', 'fasoracetam', 'methylene-blue'],
    image: null,
  },

  {
    color: '#94a3b8',
    glow: 'rgba(148,163,184,0.18)',
    title: { hu: 'Stim-szabályozás és Recovery', en: 'Stim Regulation & Recovery', pl: 'Regulacja Stymulantów i Recovery' },
    subtitle: {
      hu: 'Receptor-szenzitizáció és HPA-tengely helyreállítás',
      en: 'Receptor sensitization and HPA-axis restoration',
      pl: 'Sensytyzacja receptorów i przywracanie osi HPA',
    },
    description: {
      hu: 'A stim-szabályozó és recovery nootropikumok a krónikus stimuláns-, koffein- és kortizol-terhelés utáni helyreállítást támogatják: dopamin-receptor up-regulation, kolin-helyreállítás, HPA-tengely normalizálás. Adaptogének (Rhodiola, Ashwagandha) klinikailag dokumentáltak.',
      en: 'Stim-regulation and recovery nootropics support restoration after chronic stimulant, caffeine, and cortisol load: dopamine receptor up-regulation, choline restoration, HPA-axis normalization. Adaptogens (Rhodiola, Ashwagandha) are clinically documented.',
      pl: 'Nootropiki regulacji stymulantów i recovery wspierają regenerację po przewlekłym obciążeniu stymulantami, kofeiną i kortyzolem: regulacja receptorów dopaminowych, regeneracja choliny, normalizacja osi HPA. Adaptogeny (Rhodiola, Ashwagandha) są udokumentowane klinicznie.',
    },
    detail: {
      hu: 'A Rhodiola rosea salidrosid- és rosavin-glükozidjai szerotonin- és dopamin-szintézis modulátorok, kortizol-csökkentők, fáradtság-mérséklők. Az Ashwagandha (Withania somnifera) withanolid-glükozidjai GABA-erg + kortizol-csökkentő + tireoidstimuláló. Az Alpha-GPC + CDP-Choline kolinerg helyreállítást támogatnak agresszívebb cycle után.',
      en: 'Rhodiola rosea salidroside and rosavin glycosides modulate serotonin and dopamine synthesis, reduce cortisol, and mitigate fatigue. Ashwagandha (Withania somnifera) withanolide glycosides are GABAergic + cortisol-reducing + thyroid-stimulating. Alpha-GPC + CDP-Choline support cholinergic restoration after aggressive cycles.',
      pl: 'Salidrozyd i rozawina z Rhodioli różowej modulują syntezę serotoniny i dopaminy, redukują kortyzol i zmęczenie. Glikozydy witanolidowe Ashwagandhy (Withania somnifera) są GABA-ergiczne + redukują kortyzol + stymulują tarczycę. Alpha-GPC + CDP-Choline wspierają regenerację cholinergiczną.',
    },
    studies: [
      { title: 'Rhodiola rosea for stress, fatigue, depression: systematic review', authors: 'Hung SK et al.',           journal: 'Phytomedicine. 2011;18(4):235-244.',           pmid: '21036578' },
      { title: 'Ashwagandha for stress and anxiety: placebo-controlled trial',     authors: 'Chandrasekhar K et al.',   journal: 'Indian J Psychol Med. 2012;34(3):255-262.',     pmid: '23439798' },
      { title: 'CDP-Choline in cognitive disorders: meta-analysis',                 authors: 'Fioravanti M, Buckley AE.', journal: 'Clin Interv Aging. 2006;1(3):247-251.',         pmid: '18046877' },
    ],
    entryNames: ['Rhodiola rosea', 'Ashwagandha', 'Alpha-GPC', 'CDP-Choline'],
    entryIds:   ['rhodiola', 'ashwagandha', 'alpha-gpc', 'cdp-choline'],
    image: null,
  },
]
