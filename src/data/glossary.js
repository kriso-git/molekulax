// Central glossary for the comparison "i" tooltips (Phase C). NEUTRAL technical vocabulary
// only: each entry says what a TERM/CLASS IS (mechanism class, what a metric means) — never an
// efficacy/safety/ranking claim and never anything about a specific compound. This keeps the
// zero-new-medical-claims contract: a tooltip defines a word, it does not assert a result.
//
// Shape: { key, match: { hu:[...], en:[...], pl:[...] }, term:{hu,en,pl}, def:{hu,en,pl} }
//   match[lang] = lowercase roots; glossaryFor() does a case-insensitive substring match against
//   the displayed text (a Dimension row label or a comparison topic), so "Aromatázgátlók (AI)"
//   resolves via the root "aromatázgátló". First entry whose root is found wins.

export const GLOSSARY = [
  // ── technical dimension labels (comparison table rows) ──
  { key: 'mechanism', match: { hu: ['hatásmechanizmus'], en: ['mechanism'], pl: ['mechanizm'] },
    term: { hu: 'Hatásmechanizmus', en: 'Mechanism of action', pl: 'Mechanizm działania' },
    def: { hu: 'Az a molekuláris útvonal, amelyen keresztül egy hatóanyag a szervezetben kifejti a hatását (pl. melyik receptorhoz vagy enzimhez kötődik).', en: 'The molecular pathway by which a compound acts in the body (e.g. which receptor or enzyme it binds).', pl: 'Szlak molekularny, przez który związek działa w organizmie (np. z którym receptorem lub enzymem się wiąże).' } },
  { key: 'half-life', match: { hu: ['felezési idő'], en: ['half-life'], pl: ['okres półtrwania', 'półtrwania'] },
    term: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
    def: { hu: 'Az az idő, amely alatt a hatóanyag plazmakoncentrációja a felére csökken; jelzi, milyen gyorsan ürül és milyen gyakran kell adagolni.', en: 'The time for the compound’s plasma concentration to fall by half; indicates how fast it clears and how often it is dosed.', pl: 'Czas, w którym stężenie związku w osoczu spada o połowę; wskazuje, jak szybko jest usuwany i jak często się go dawkuje.' } },
  { key: 'onset', match: { hu: ['hatáskezdet', 'hatásbeállás'], en: ['onset'], pl: ['początek działania', 'początek'] },
    term: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek działania' },
    def: { hu: 'Az az idő, amíg az adagolás után a mérhető hatás megjelenik.', en: 'The time from dosing until a measurable effect appears.', pl: 'Czas od podania do pojawienia się mierzalnego efektu.' } },
  { key: 'atc', match: { hu: ['atc kód', 'atc'], en: ['atc code', 'atc'], pl: ['kod atc', 'atc'] },
    term: { hu: 'ATC kód', en: 'ATC code', pl: 'Kod ATC' },
    def: { hu: 'A WHO Anatomiai-Terápiás-Kémiai osztályozási kódja, amely szerv- és hatásmechanizmus szerint csoportosítja a gyógyszereket.', en: 'The WHO Anatomical Therapeutic Chemical code that classifies drugs by organ system and mechanism.', pl: 'Kod WHO (Anatomiczno-Terapeutyczno-Chemiczny) klasyfikujący leki według układu narządowego i mechanizmu.' } },
  { key: 'legal-wada', match: { hu: ['jogi státusz'], en: ['legal status'], pl: ['status prawny'] },
    term: { hu: 'Jogi / WADA státusz', en: 'Legal / WADA status', pl: 'Status prawny / WADA' },
    def: { hu: 'A vegyület szabályozási besorolása (pl. vényköteles) és a WADA sporttiltó-listán elfoglalt helye.', en: 'The compound’s regulatory status (e.g. prescription) and its place on the WADA prohibited-in-sport list.', pl: 'Status regulacyjny związku (np. na receptę) oraz jego miejsce na liście zakazanej WADA w sporcie.' } },

  // ── compound classes (comparison topics) ──
  { key: 'aromatase-inhibitor', match: { hu: ['aromatázgátló'], en: ['aromatase inhibitor'], pl: ['inhibitor aromatazy', 'aromatazy'] },
    term: { hu: 'Aromatázgátló (AI)', en: 'Aromatase inhibitor (AI)', pl: 'Inhibitor aromatazy (AI)' },
    def: { hu: 'Olyan vegyület, amely gátolja az aromatáz enzimet, így csökkenti a tesztoszteron ösztrogénné (E2) alakulását.', en: 'A compound that blocks the aromatase enzyme, reducing the conversion of testosterone into estrogen (E2).', pl: 'Związek hamujący enzym aromatazę, zmniejszając przemianę testosteronu w estrogen (E2).' } },
  { key: 'serm', match: { hu: ['serm'], en: ['serm'], pl: ['serm'] },
    term: { hu: 'SERM', en: 'SERM', pl: 'SERM' },
    def: { hu: 'Szelektív ösztrogénreceptor-modulátor: szövettől függően vagy aktiválja, vagy blokkolja az ösztrogénreceptort.', en: 'Selective estrogen receptor modulator: it either activates or blocks the estrogen receptor depending on the tissue.', pl: 'Selektywny modulator receptora estrogenowego: w zależności od tkanki aktywuje lub blokuje receptor estrogenowy.' } },
  { key: 'sarm', match: { hu: ['sarm'], en: ['sarm'], pl: ['sarm'] },
    term: { hu: 'SARM', en: 'SARM', pl: 'SARM' },
    def: { hu: 'Szelektív androgénreceptor-modulátor: nem-szteroid vegyület, amely az androgénreceptorhoz (a tesztoszteron receptorához) kötődik, és azt szövettől függően eltérő mértékben aktiválja.', en: 'Selective androgen receptor modulator: a non-steroidal compound that binds the androgen receptor (the receptor for testosterone) and activates it to differing degrees depending on the tissue.', pl: 'Selektywny modulator receptora androgenowego: niesteroidowy związek, który wiąże się z receptorem androgenowym (receptorem testosteronu) i aktywuje go w różnym stopniu zależnie od tkanki.' } },
  { key: '5ar', match: { hu: ['5α-reduktáz', '5a-reduktáz'], en: ['5α-reductase', '5a-reductase'], pl: ['5α-reduktazy', '5a-reduktazy', 'reduktazy'] },
    term: { hu: '5α-reduktáz gátló', en: '5α-reductase inhibitor', pl: 'Inhibitor 5α-reduktazy' },
    def: { hu: 'Az 5α-reduktáz enzimet gátló vegyület, amely csökkenti a tesztoszteron dihidrotesztoszteronná (DHT) alakulását.', en: 'A compound that inhibits the 5α-reductase enzyme, reducing conversion of testosterone into dihydrotestosterone (DHT).', pl: 'Związek hamujący enzym 5α-reduktazę, zmniejszający przemianę testosteronu w dihydrotestosteron (DHT).' } },
  { key: 'eugeroic', match: { hu: ['eugeroikum'], en: ['eugeroic'], pl: ['eugeroik'] },
    term: { hu: 'Eugeroikum', en: 'Eugeroic', pl: 'Eugeroik' },
    def: { hu: 'Ébrenlétet elősegítő vegyület-osztály (pl. modafinil-típus), amely a klasszikus stimulánsoktól eltérő úton hat.', en: 'A class of wakefulness-promoting compounds (e.g. the modafinil type) acting differently from classic stimulants.', pl: 'Klasa związków promujących czuwanie (np. typu modafinilu), działających inaczej niż klasyczne stymulanty.' } },
  { key: 'b2-agonist', match: { hu: ['β2-agonist', 'b2-agonist'], en: ['β2-agonist', 'b2-agonist', 'β2 agonist'], pl: ['β2-agoni', 'b2-agoni'] },
    term: { hu: 'β2-agonista', en: 'β2-agonist', pl: 'β2-agonista' },
    def: { hu: 'A β2-adrenerg receptort aktiváló vegyület; jellemzően hörgőtágító és anyagcsere-élénkítő kaszkádot indít.', en: 'A compound that activates the β2-adrenergic receptor, typically triggering bronchodilation and a metabolic cascade.', pl: 'Związek aktywujący receptor β2-adrenergiczny, zwykle wywołujący rozszerzenie oskrzeli i kaskadę metaboliczną.' } },
  { key: 'dopamine-agonist', match: { hu: ['dopamin-agonista', 'dopamin agonista'], en: ['dopamine agonist'], pl: ['agonista dopaminy', 'agoniści dopaminy'] },
    term: { hu: 'Dopamin-agonista', en: 'Dopamine agonist', pl: 'Agonista dopaminy' },
    def: { hu: 'A dopaminreceptort aktiváló vegyület; egyebek közt a prolaktin hormon felszabadulását szabályozza.', en: 'A compound that activates dopamine receptors; among other effects it regulates release of the hormone prolactin.', pl: 'Związek aktywujący receptory dopaminy; m.in. reguluje wydzielanie hormonu prolaktyny.' } },
  { key: 'ghrh', match: { hu: ['ghrh'], en: ['ghrh'], pl: ['ghrh'] },
    term: { hu: 'GHRH-analóg', en: 'GHRH analogue', pl: 'Analog GHRH' },
    def: { hu: 'A növekedésihormon-felszabadító hormon (GHRH) analógja, amely az agyalapi mirigyet saját GH-kibocsátásra ösztönzi.', en: 'An analogue of growth-hormone-releasing hormone (GHRH) that prompts the pituitary to release its own GH.', pl: 'Analog hormonu uwalniającego hormon wzrostu (GHRH), pobudzający przysadkę do wydzielania własnego GH.' } },
  { key: 'ghrp', match: { hu: ['ghrp', 'szekretagóg'], en: ['ghrp', 'secretagogue'], pl: ['ghrp', 'sekretagog'] },
    term: { hu: 'GHRP / szekretagóg', en: 'GHRP / secretagogue', pl: 'GHRP / sekretagog' },
    def: { hu: 'A ghrelin-receptoron ható peptid, amely pulzatilis növekedésihormon-felszabadulást vált ki (GH-szekretagóg).', en: 'A peptide acting on the ghrelin receptor that triggers pulsatile growth-hormone release (a GH secretagogue).', pl: 'Peptyd działający na receptor greliny, wywołujący pulsacyjne wydzielanie hormonu wzrostu (sekretagog GH).' } },
  { key: 'glp1', match: { hu: ['glp-1'], en: ['glp-1'], pl: ['glp-1'] },
    term: { hu: 'GLP-1 / glukagon agonista', en: 'GLP-1 / glucagon agonist', pl: 'Agonista GLP-1 / glukagonu' },
    def: { hu: 'Inkretin-receptor agonista, amely a GLP-1 (és olykor a glukagon/GIP) receptort aktiválva az anyagcsere- és testsúly-szabályozásba avatkozik.', en: 'An incretin-receptor agonist that activates the GLP-1 (and sometimes glucagon/GIP) receptor, acting on metabolic and body-weight regulation.', pl: 'Agonista receptora inkretynowego, aktywujący receptor GLP-1 (czasem glukagonu/GIP), wpływający na regulację metabolizmu i masy ciała.' } },
  { key: 'gaba-b', match: { hu: ['gaba-b'], en: ['gaba-b'], pl: ['gaba-b'] },
    term: { hu: 'GABA-B agonista', en: 'GABA-B agonist', pl: 'Agonista GABA-B' },
    def: { hu: 'A GABA-B gátló neurotranszmitter-receptort aktiváló vegyület.', en: 'A compound that activates the GABA-B inhibitory neurotransmitter receptor.', pl: 'Związek aktywujący hamujący receptor neuroprzekaźnikowy GABA-B.' } },
  { key: 'amsh', match: { hu: ['α-msh', 'a-msh', 'melanokortin'], en: ['α-msh', 'a-msh', 'melanocortin'], pl: ['α-msh', 'a-msh', 'melanokortyn'] },
    term: { hu: 'α-MSH / melanokortin-agonista', en: 'α-MSH / melanocortin agonist', pl: 'α-MSH / agonista melanokortyny' },
    def: { hu: 'A melanokortinreceptorokat aktiváló peptid (α-melanocita-stimuláló hormon analógja), amely pigmentációs és egyéb központi útvonalakat modulál.', en: 'A peptide that activates melanocortin receptors (an α-melanocyte-stimulating-hormone analogue), modulating pigmentation and other central pathways.', pl: 'Peptyd aktywujący receptory melanokortynowe (analog α-melanotropiny), modulujący pigmentację i inne szlaki ośrodkowe.' } },
  { key: 'tuftsin', match: { hu: ['tuftsin'], en: ['tuftsin'], pl: ['tuftsyn'] },
    term: { hu: 'Tuftsin-analóg', en: 'Tuftsin analogue', pl: 'Analog tuftsyny' },
    def: { hu: 'A tuftsin nevű természetes peptidből származó, intranazálisan adott rövid neuropeptid-osztály.', en: 'A class of short, intranasally-administered neuropeptides derived from the natural peptide tuftsin.', pl: 'Klasa krótkich neuropeptydów podawanych donosowo, pochodzących z naturalnego peptydu tuftsyny.' } },
  { key: 'gonadotropin', match: { hu: ['gonadotropin'], en: ['gonadotropin'], pl: ['gonadotropin'] },
    term: { hu: 'Gonadotropin', en: 'Gonadotropin', pl: 'Gonadotropina' },
    def: { hu: 'Az ivarmirigyeket stimuláló glikoprotein-hormon (pl. LH/FSH hatású), a hipotalamusz-hipofízis-ivarmirigy tengely része.', en: 'A glycoprotein hormone that stimulates the gonads (e.g. LH/FSH-like), part of the hypothalamic-pituitary-gonadal axis.', pl: 'Hormon glikoproteinowy stymulujący gonady (np. działanie LH/FSH), część osi podwzgórze-przysadka-gonady.' } },
  { key: 'gnrh', match: { hu: ['gnrh'], en: ['gnrh'], pl: ['gnrh'] },
    term: { hu: 'GnRH-tengely aktivátor', en: 'GnRH-axis activator', pl: 'Aktywator osi GnRH' },
    def: { hu: 'A gonadotropin-felszabadító hormon (GnRH) tengely felső szintjén ható vegyület, amely LH/FSH-pulzust indít.', en: 'A compound acting at the top of the gonadotropin-releasing-hormone (GnRH) axis to trigger an LH/FSH pulse.', pl: 'Związek działający na szczycie osi hormonu uwalniającego gonadotropiny (GnRH), wywołujący impuls LH/FSH.' } },
  { key: 'err-agonist', match: { hu: ['err-agonista', 'err agonista', 'exercise-mimetik'], en: ['err-agonist', 'err agonist', 'exercise mimetic'], pl: ['agoniści err', 'agonista err', 'mimetyki wysiłku'] },
    term: { hu: 'ERR-agonista (exercise-mimetic)', en: 'ERR agonist (exercise mimetic)', pl: 'Agonista ERR (mimetyk wysiłku)' },
    def: { hu: 'Az ösztrogén-rokon receptort (ERR) aktiváló kutatási vegyület-osztály, amely a mitokondriális/edzés-asszociált útvonalakat célozza.', en: 'A research class that activates the estrogen-related receptor (ERR), targeting mitochondrial / exercise-associated pathways.', pl: 'Klasa badawcza aktywująca receptor pokrewny estrogenowemu (ERR), celująca w szlaki mitochondrialne / związane z wysiłkiem.' } },
  { key: 'steroid-precursor', match: { hu: ['szteroid-prekurzor', 'prekurzor'], en: ['steroid precursor', 'precursor'], pl: ['prekursor steroidow', 'prekursor'] },
    term: { hu: 'Szteroid-prekurzor', en: 'Steroid precursor', pl: 'Prekursor steroidowy' },
    def: { hu: 'A szervezet szteroid-bioszintézis útvonalának korai molekulája, amelyből hormonok képződnek.', en: 'An early molecule in the body’s steroid-biosynthesis pathway from which hormones are formed.', pl: 'Wczesna cząsteczka szlaku biosyntezy steroidów w organizmie, z której powstają hormony.' } },
  { key: 'thyroid-hormone', match: { hu: ['pajzsmirigyhormon'], en: ['thyroid hormone'], pl: ['hormony tarczycy', 'hormon tarczycy'] },
    term: { hu: 'Pajzsmirigyhormon (T3/T4)', en: 'Thyroid hormone (T3/T4)', pl: 'Hormon tarczycy (T3/T4)' },
    def: { hu: 'A pajzsmirigy hormonjai: a T4 (raktár-prohormon) és az aktív T3, amelyek az anyagcsere alapsebességét szabályozzák.', en: 'The thyroid’s hormones: T4 (a storage prohormone) and the active T3, which regulate the body’s baseline metabolic rate.', pl: 'Hormony tarczycy: T4 (prohormon zapasowy) i aktywny T3, regulujące podstawowe tempo metabolizmu.' } },
  { key: 'statin', match: { hu: ['statin'], en: ['statin'], pl: ['statyn'] },
    term: { hu: 'Statin', en: 'Statin', pl: 'Statyna' },
    def: { hu: 'A HMG-CoA-reduktáz enzimet gátló vegyület-osztály, amely a máj koleszterin-szintézisét csökkenti.', en: 'A drug class that inhibits the HMG-CoA reductase enzyme, lowering cholesterol synthesis in the liver.', pl: 'Klasa leków hamujących enzym reduktazę HMG-CoA, zmniejszających syntezę cholesterolu w wątrobie.' } },
  { key: 'ssri', match: { hu: ['ssri'], en: ['ssri'], pl: ['ssri'] },
    term: { hu: 'SSRI', en: 'SSRI', pl: 'SSRI' },
    def: { hu: 'Szelektív szerotonin-visszavétel-gátló: az idegsejtek közti szerotonin szintjét emelő antidepresszáns-osztály.', en: 'Selective serotonin reuptake inhibitor: an antidepressant class that raises serotonin levels between neurons.', pl: 'Selektywny inhibitor wychwytu zwrotnego serotoniny: klasa leków przeciwdepresyjnych podnosząca poziom serotoniny między neuronami.' } },
  { key: 'choline-precursor', match: { hu: ['kolin-prekurzor', 'kolin prekurzor'], en: ['choline precursor'], pl: ['prekursor choliny', 'prekursory choliny'] },
    term: { hu: 'Kolin-prekurzor', en: 'Choline precursor', pl: 'Prekursor choliny' },
    def: { hu: 'Kolinforrásként szolgáló vegyület, amelyből az acetilkolin nevű neurotranszmitter képződhet.', en: 'A compound serving as a choline source from which the neurotransmitter acetylcholine can be formed.', pl: 'Związek będący źródłem choliny, z której może powstawać neuroprzekaźnik acetylocholina.' } },
  { key: 'ampakine', match: { hu: ['ampakin', 'ampa-pam', 'ampa pam'], en: ['ampakine', 'ampa-pam'], pl: ['ampakin', 'ampa-pam'] },
    term: { hu: 'Ampakine (AMPA-PAM)', en: 'Ampakine (AMPA-PAM)', pl: 'Ampakina (AMPA-PAM)' },
    def: { hu: 'Az AMPA-glutamátreceptor pozitív allosztérikus modulátora (PAM), amely fokozza a serkentő jelátvitelt.', en: 'A positive allosteric modulator (PAM) of the AMPA glutamate receptor that enhances excitatory signalling.', pl: 'Pozytywny modulator allosteryczny (PAM) receptora glutaminianowego AMPA, nasilający przekaźnictwo pobudzające.' } },
  { key: 'racetam', match: { hu: ['racetam', 'hacu'], en: ['racetam', 'hacu'], pl: ['racetam', 'hacu'] },
    term: { hu: 'Racetam / HACU', en: 'Racetam / HACU', pl: 'Racetam / HACU' },
    def: { hu: 'A racetam nootropikum-család; több tagja a magas-affinitású kolin-felvételt (HACU) facilitálja a kolinerg jelátvitelben.', en: 'The racetam nootropic family; several members facilitate high-affinity choline uptake (HACU) in cholinergic signalling.', pl: 'Rodzina nootropików racetamowych; kilku członków ułatwia wychwyt choliny o wysokim powinowactwie (HACU) w przekaźnictwie cholinergicznym.' } },
  { key: 'adaptogen', match: { hu: ['adaptogén'], en: ['adaptogen'], pl: ['adaptogen'] },
    term: { hu: 'Adaptogén', en: 'Adaptogen', pl: 'Adaptogen' },
    def: { hu: 'Növényi eredetű vegyület-osztály, amelyet a stresszválasz modulálásával hoznak összefüggésbe; jellemzően krónikus, hetes nagyságrendű szedés mellett vizsgálják.', en: 'A class of plant-derived compounds associated with modulating the stress response; typically studied under chronic, weeks-scale use.', pl: 'Klasa związków roślinnych wiązanych z modulacją odpowiedzi na stres; zwykle badana przy przewlekłym stosowaniu w skali tygodni.' } },
  { key: 'neuropeptide', match: { hu: ['neuropeptid'], en: ['neuropeptide'], pl: ['neuropeptyd'] },
    term: { hu: 'Neuropeptid', en: 'Neuropeptide', pl: 'Neuropeptyd' },
    def: { hu: 'Az idegrendszerben jelátvivőként ható rövid peptid-molekula.', en: 'A short peptide molecule that acts as a signalling messenger in the nervous system.', pl: 'Krótka cząsteczka peptydowa działająca jako przekaźnik sygnałowy w układzie nerwowym.' } },
  { key: 'peptide-hydrolysate', match: { hu: ['peptid-hidrolizátum', 'hidrolizátum'], en: ['peptide hydrolysate', 'hydrolysate'], pl: ['hydrolizat'] },
    term: { hu: 'Peptid-hidrolizátum', en: 'Peptide hydrolysate', pl: 'Hydrolizat peptydowy' },
    def: { hu: 'Fehérje (gyakran állati agyszövet) lebontásából nyert, kis peptidek keverékét tartalmazó injekciós készítmény.', en: 'An injectable preparation containing a mix of small peptides obtained by breaking down a protein (often animal brain tissue).', pl: 'Iniekcyjny preparat zawierający mieszaninę małych peptydów uzyskanych przez rozkład białka (często tkanki mózgowej zwierząt).' } },
]

// Find the glossary entry whose lang-specific root appears in `text` (a Dimension label or a
// comparison topic). Case-insensitive substring; first match wins. Returns null if none.
export function glossaryFor(text, lang = 'hu') {
  if (!text) return null
  const t = String(text).toLowerCase()
  for (const e of GLOSSARY) {
    const roots = e.match[lang] || e.match.hu || []
    if (roots.some((r) => r && t.includes(r.toLowerCase()))) return e
  }
  return null
}
