// Adapts a live Library Entry (any libraries/<id>/data.js shape) to the rich
// EntryDetail-expected shape. Missing fields fall back to null/empty so
// EntryDetail can skip those sections gracefully.

import { getLevelMeta } from '../../data/libraries/shared/researchLevel'

// Match keyInfo entries by translated label fragment (HU/EN/PL).
function findFactByLabel(keyInfo, fragments) {
 if (!keyInfo) return null
 return keyInfo.find(info => {
 const label = info.label
 const text = typeof label === 'string'
 ? label
 : `${label?.hu || ''} ${label?.en || ''} ${label?.pl || ''}`
 const lower = text.toLowerCase()
 return fragments.some(f => lower.includes(f))
 })
}

function trAny(value) {
 if (!value) return ''
 if (typeof value === 'string') return value
 return value.hu || value.en || value.pl || ''
}

// Strip a short, plain one-liner from peptide.shortDesc / description.
function extractOneLiner(peptide) {
 // shortDesc is already the canonical short blurb
 return peptide.shortDesc || { hu: '', en: '', pl: '' }
}

// Try to surface a 3–6 step pathway summary from existing description text.
// We don't have structured pathway data; return null and let MockupDetail
// skip that block.
function deriveMechanism(peptide) {
 if (!peptide.description) return null
 return {
 summary: peptide.description,
 pathway: [], // empty -> MockupDetail will hide the flow widget
 }
}

// Build a category chip list from the peptide's mapped categories.
function deriveResearchUses(peptide, library) {
 const ids = (library.entryCategoryMap[peptide.id] || [])
 return ids
 .map(id => library.categories.find(c => c.id === id))
 .filter(Boolean)
 .map(cat => ({ id: cat.id, label: cat.label }))
}

// Build a dosing block from dosageInfo + sensible defaults.
function deriveDosing(peptide) {
 if (!peptide.dosageInfo) return null
 return {
 typical: '', // not structured in live data
 range: '',
 frequency: null,
 cycle: null,
 notes: peptide.dosageInfo,
 timeline: [], // hidden when empty
 }
}

// Reuse studies as-is, same shape in MockupDetail.
function deriveStudies(peptide) {
 return Array.isArray(peptide.studies) ? peptide.studies : []
}

// Read a legal-status hint from keyInfo (Legal status / Status / Klinikai
// adat / Jogi státusz / etc.).
function deriveLegalStatus(peptide, tier) {
 const fact = findFactByLabel(peptide.keyInfo, [
 'jogi', 'státusz', 'status', 'legal', 'engedély', 'klinikai',
 ])
 const fda = tier >= 5
 return {
 fda,
 tag: fda
 ? { hu: 'FDA engedélyezett', en: 'FDA approved', pl: 'Zatwierdzony FDA' }
 : { hu: 'Kutatási vegyület', en: 'Research compound', pl: 'Związek badawczy' },
 detail: fact ? fact.value : (
 fda
 ? { hu: 'Engedélyezett gyógyszer (USA/EU).', en: 'Approved drug (US/EU).', pl: 'Zatwierdzony lek.' }
 : { hu: 'Nem jóváhagyott gyógyszer, kutatási célra.', en: 'Not an approved drug, research use.', pl: 'Niezatwierdzony, badania.' }
 ),
 }
}

// Quick Start Guide, derived 4-step primer.
// Resolution order:
// 1. If the entry defines its own `quickStart` (CORE nootropic entries do),
// honor it. Accept either shape:
// a) Full step objects: `{ step?, title:{hu,en,pl}, detail:{hu,en,pl} }`
// b) Flat I18nString rows: `{ hu, en, pl }`, wrapped with a numbered title.
// 2. For peptide library entries without an explicit quickStart, derive a
// generic 4-step primer using reconstitution defaults (vial / BAC / dose).
// 3. For non-peptide entries without an explicit quickStart, return null so
// EntryDetail graceful-skips the section (no `? mg-os fiola` placeholders).
function deriveQuickStart(peptide, library) {
 if (Array.isArray(peptide.quickStart) && peptide.quickStart.length > 0) {
 return peptide.quickStart.map((s, i) => {
 if (s && s.title && s.detail) return s
 // Flat I18nString → wrap with generic numbered title.
 return {
 step: i + 1,
 title: { hu: `${i + 1}. lépés`, en: `Step ${i + 1}`, pl: `Krok ${i + 1}` },
 detail: s,
 }
 })
 }
 if (library?.id !== 'peptides') {
 return null
 }
 const route = findFactByLabel(peptide.keyInfo, ['adagolás', 'route', 'podanie'])
 const routeText = route ? trAny(route.value) : 'SC injekció'
 const vial = peptide.defaultVialMg
 const bac = peptide.defaultBacMl
 const dose = peptide.defaultDoseMcg
 return [
 {
 step: 1,
 title: { hu: 'Rekonstituálás', en: 'Reconstitute', pl: 'Rozpuszczenie' },
 detail: {
 hu: `${vial || '?'} mg-os fiola + ${bac || '?'} ml bakteriostatikus víz, óvatos elkeverés.`,
 en: `${vial || '?'} mg vial + ${bac || '?'} ml bacteriostatic water, swirl gently.`,
 pl: `${vial || '?'} mg fiolka + ${bac || '?'} ml wody bakteriostatycznej, delikatnie mieszać.`,
 },
 },
 {
 step: 2,
 title: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' },
 detail: {
 hu: '2–8 °C-on, fénytől védve. Rekonstituálva 25–30 napig stabil.',
 en: '2–8 °C, protected from light. Stable 25–30 days after reconstitution.',
 pl: '2–8 °C, chronić przed światłem. Po rozpuszczeniu stabilny 25–30 dni.',
 },
 },
 {
 step: 3,
 title: { hu: 'Dózis & beadás', en: 'Dose & administer', pl: 'Dawka & podanie' },
 detail: {
 hu: `${dose || '?'} mcg kezdő dózis ${routeText}-on; titrálás tolerancia szerint.`,
 en: `${dose || '?'} mcg starting dose via ${routeText}; titrate to tolerance.`,
 pl: `${dose || '?'} mcg dawka startowa ${routeText}; titracja do tolerancji.`,
 },
 },
 {
 step: 4,
 title: { hu: 'Monitorozás', en: 'Monitor', pl: 'Monitorowanie' },
 detail: {
 hu: 'Subjective + objective markerek hetente; mellékhatás esetén dózis-csökkentés.',
 en: 'Track subjective + objective markers weekly; reduce dose on side effects.',
 pl: 'Markery subiektywne i obiektywne tygodniowo; redukcja dawki przy działaniach niepożądanych.',
 },
 },
 ]
}

// Key Benefits, derive 3-4 benefit cards from peptide categories.
// Maps category-id to a peptide-agnostic but believable benefit copy.
const CATEGORY_BENEFITS = {
 'metabolic': { icon: 'flame', title: { hu: 'Anyagcsere támogatás', en: 'Metabolic support', pl: 'Wsparcie metabolizmu' },
 desc: {
 hu: 'A glükóz- és lipid-anyagcsere kedvező irányba mozdul: javul az inzulinérzékenység, csökken a vércukor-ingadozás és a HbA1c, miközben a lipidprofil (LDL, triglicerid) is normalizálódik. A testkompozíció finomul, a zsírtömeg csökken, a sovány izomtömeg megmarad vagy nő. Az étvágyszabályozás centrálisan és perifériásan is támogatott (GLP-1 / GIP / glukagon útvonalak), így a kalóriabevitel fenntartható szintre áll be anélkül, hogy folyamatos akaraterőt igényelne. Energia-felhasználás és termogenezis enyhén emelkedik.',
 en: 'Glucose and lipid metabolism shift favorably: insulin sensitivity improves, glycemic swings and HbA1c drop, while LDL and triglycerides normalize. Body composition refines, fat mass decreases, lean mass is preserved or grows. Appetite is regulated both centrally and peripherally (GLP-1 / GIP / glucagon pathways), so caloric intake settles into a sustainable range without constant willpower. Energy expenditure and thermogenesis rise modestly.',
 pl: 'Metabolizm glukozy i lipidów zmienia się korzystnie: poprawia się insulinowrażliwość, spadają wahania glikemii i HbA1c, a profil LDL/trójglicerydów się normalizuje. Skład ciała się poprawia, tłuszcz spada, masa mięśniowa pozostaje. Apetyt jest regulowany centralnie i obwodowo (GLP-1 / GIP / glukagon).' } },
 'growth-factors': { icon: 'sprout', title: { hu: 'Növekedési hormon felszabadulás', en: 'Growth hormone release', pl: 'Uwalnianie hormonu wzrostu' },
 desc: {
 hu: 'A peptid a hipofízis-szintű GHRH- vagy GHS-receptorokon hat, ezáltal **fiziológiás, pulzatív GH-szekréciót** utánoz, szemben a szintetikus rHGH folyamatos szintjével, amely deszenzitizációhoz vezet. Az IGF-1 szint a felső normál tartományba emelkedik, ami fokozott regenerációt, izomfehérje-szintézist, lipolízist és bőrminőség-javulást eredményez. A mélyalvás fázisai meghosszabbodnak, a kollagén- és csontmátrix-szintézis aktiválódik. A hatás reverzibilis és nem szuppresszálja a saját GH-tengelyt.',
 en: 'The peptide acts on pituitary GHRH or GHS receptors, producing a **physiological, pulsatile GH release**, unlike synthetic rHGH, which keeps levels flat and leads to desensitization. IGF-1 rises into the upper-normal range, driving recovery, muscle protein synthesis, lipolysis and skin quality. Deep-sleep phases lengthen; collagen and bone-matrix synthesis activate. The effect is reversible and does not suppress the endogenous GH axis.',
 pl: 'Peptyd działa na receptory GHRH lub GHS przysadki, dając **pulsacyjne, fizjologiczne uwalnianie GH**. IGF-1 rośnie w górną normę, co napędza regenerację, syntezę białek mięśniowych, lipolizę i jakość skóry. Wydłużają się fazy snu głębokiego.' } },
 'recovery': { icon: 'activity', title: { hu: 'Szöveti regeneráció', en: 'Tissue regeneration', pl: 'Regeneracja tkanek' },
 desc: {
 hu: 'Inak, izmok, ínszalagok, GI-nyálkahártya és bőrszövet gyógyulása felgyorsul a peptid közvetlen sejtszintű jelzéseinek köszönhetően: aktiválja a fibroblaszt-migrációt, az angiogenezist (VEGF-útvonal), és csökkenti a pro-inflammatorikus citokineket (IL-6, TNF-α). Krónikus, lassan gyógyuló sérülésekben funkcionális javulás várható, a fájdalom és a duzzanat csökken. Edzés utáni regenerációs ablakok lerövidülnek 30–50%-kal, ami nagyobb edzésvolumen-toleranciát ad. Még enthesopathia, ínhüvelygyulladás, és GI-fekélyek esetében is dokumentált hatás.',
 en: 'Tendons, muscles, ligaments, GI mucosa and skin heal faster thanks to direct cell-level signaling: it activates fibroblast migration, angiogenesis (VEGF pathway) and reduces pro-inflammatory cytokines (IL-6, TNF-α). Chronic, slow-healing injuries see functional improvement; pain and swelling drop. Post-workout recovery windows shorten by 30–50%, allowing more training volume. Effects are documented even in enthesopathy, tendinitis and GI ulcers.',
 pl: 'Ścięgna, mięśnie, więzadła, błona śluzowa GI i skóra goją się szybciej dzięki bezpośredniej sygnalizacji komórkowej: migracja fibroblastów, angiogeneza (VEGF), redukcja IL-6/TNF-α. W przewlekłych urazach widoczna poprawa funkcji.' } },
 'cognitive': { icon: 'brain', title: { hu: 'Kognitív funkció', en: 'Cognitive function', pl: 'Funkcje poznawcze' },
 desc: {
 hu: 'BDNF és NGF szintek emelkednek, ami támogatja a szinaptikus plaszticitást, az LTP-folyamatokat és az új neurális kapcsolatok kialakulását. Figyelem, munkamemória és feladat-váltási sebesség mérhetően javul már 2–4 hét alatt. Neuroprotektív hatás: oxidatív stressz, excitotoxicitás és gliális gyulladás csökken, különösen idős, stresszelt vagy traumát szenvedett agyban. Hangulat-stabilizáció és szorongás-csökkenés a mellék-effektus a HPA-tengely modulálásán keresztül. A hatások kumulatívak.',
 en: 'BDNF and NGF rise, supporting synaptic plasticity, LTP and the formation of new neural connections. Attention, working memory and task-switching measurably improve within 2–4 weeks. Neuroprotection: oxidative stress, excitotoxicity and glial inflammation drop, especially in aged, stressed or trauma-exposed brains. Mood stabilization and anxiety reduction follow via HPA-axis modulation. Effects are cumulative.',
 pl: 'BDNF i NGF rosną, wspierając plastyczność synaptyczną i LTP. Uwaga, pamięć robocza i przełączanie zadań poprawiają się w 2–4 tygodnie. Neuroprotekcja: spadek stresu oksydacyjnego i ekscytotoksyczności.' } },
 'anti-aging': { icon: 'sparkles', title: { hu: 'Sejtszintű megújulás', en: 'Cellular renewal', pl: 'Odnowa komórkowa' },
 desc: {
 hu: 'A peptid több ponton avatkozik be az öregedés alapfolyamataiba: telomeráz-aktivációval lassítja a telomer-rövidülést, csökkenti az oxidatív stresszt (Nrf2 / glutation rendszer), és epigenetikailag normalizálja a génexpressziós mintázatokat. A mitokondriális energiatermelés javul, a szövetspecifikus őssejt-aktivitás támogatott. Bőrön: kollagén I/III szintézis nő, ráncmélység csökken, hidratáltság és rugalmasság javul. Hosszabb távon a biomarker-profil (CRP, glükóz, lipidek) is fiatalabb mintázatot mutat, és az epigenetikai életkor lassulhat.',
 en: 'The peptide acts on several aging fundamentals: telomerase activation slows telomere shortening; oxidative stress drops (Nrf2 / glutathione system); gene-expression patterns epigenetically normalize. Mitochondrial energy production improves, tissue-specific stem-cell activity is supported. On skin: collagen I/III synthesis rises, wrinkle depth shrinks, hydration and elasticity improve. Long-term, biomarkers (CRP, glucose, lipids) show younger patterns and epigenetic age can slow.',
 pl: 'Peptyd działa na kilka mechanizmów starzenia: aktywacja telomerazy, spadek stresu oksydacyjnego (Nrf2/glutation), normalizacja epigenetyczna. Mitochondria pracują lepiej. Na skórze rośnie kolagen I/III.' } },
 'immune': { icon: 'shield', title: { hu: 'Immunmoduláció', en: 'Immune modulation', pl: 'Immunomodulacja' },
 desc: {
 hu: 'Kétirányú immun-szabályozás: alulműködő immunrendszerben támogatja a T-sejt érést, NK-aktivitást és antitest-választ, miközben krónikus, túlműködő (auto-immun) folyamatokban Treg-aktivációt és gyulladás-csökkenést indukál. Tymikus regeneráció (különösen időskorban), influenza- és vírus-clearance gyorsulás, krónikus fertőzések visszaszorulása dokumentált. CRP, IL-6 és más gyulladásos markerek hosszabb használat mellett mérhetően csökkennek. Nem immunszuppresszív szert helyettesít, kiegészíti.',
 en: 'Bidirectional immune regulation: in underactive immunity it supports T-cell maturation, NK activity and antibody response, while in chronic overactive (autoimmune) processes it drives Treg activation and inflammation reduction. Thymic regeneration (especially with age), faster flu / viral clearance and reduced chronic infections are documented. CRP, IL-6 and other inflammatory markers measurably drop with longer use. Not a replacement for immunosuppressives, complementary.',
 pl: 'Dwukierunkowa regulacja immunologiczna: dojrzewanie T, NK, ale też aktywacja Treg w autoagresji. Regeneracja grasicy, szybsze ustępowanie infekcji.' } },
 'sleep': { icon: 'moon', title: { hu: 'Alvásminőség', en: 'Sleep quality', pl: 'Jakość snu' },
 desc: {
 hu: 'A mélyalvás (N3) fázisok meghosszabbodnak, ami a GH-felszabadulás és a memória-konszolidáció szempontjából kulcsfontosságú. A kortizol-ritmus normalizálódik: az esti szint csökken, a reggeli emelkedés visszatér. Az elalvás gyorsabb, a felébredés pihentebb. GABAerg és szerotonerg moduláció miatt szorongás csökken, álmok élénkebbek lehetnek. Hosszabb távon a krónikus alváshiány tünetei (memória, hangulat, immunitás) javulnak. Délutáni / esti dózissal kombinálva éri el a legjobb hatást.',
 en: 'Deep-sleep (N3) phases lengthen, critical for GH release and memory consolidation. The cortisol rhythm normalizes: evening levels drop, morning rise returns. Sleep onset is faster, waking is more rested. GABAergic and serotonergic modulation reduces anxiety, dreams can become more vivid. Over time, symptoms of chronic sleep debt (memory, mood, immunity) improve. Best paired with an afternoon / evening dose.',
 pl: 'Wydłużają się fazy snu głębokiego (N3), kluczowe dla GH i konsolidacji pamięci. Rytm kortyzolu się normalizuje, łatwiejsze zasypianie i wypoczęte poranki.' } },
 'sexual-skin': { icon: 'heart', title: { hu: 'Bőr / Szexuális egészség', en: 'Skin / sexual health', pl: 'Skóra / zdrowie seksualne' },
 desc: {
 hu: 'A melanokortin-receptor (MC1R / MC4R) aktivációja két fő hatást ad: bőr-pigmentáció (melanin-szintézis, UV-védelem, kozmetikai cél) és centrálisan-mediált libidó / szexuális válasz fokozása. A peptid kollagén I/III és elasztin szintézist is támogatja, ami a bőr rugalmasságát és textúráját javítja, fiatalság-markerek mérhetően emelkednek. Akut hatás (libidó, energia) gyakran 30–60 perccel a beadás után jelentkezik; tartós hatás (bőrtónus, pigmentáció) 1–3 hét alatt épül fel. Anyajegy-vizsgálat ajánlott a használat alatt.',
 en: 'Melanocortin (MC1R / MC4R) receptor activation produces two main effects: skin pigmentation (melanin synthesis, UV protection, cosmetic) and centrally-mediated libido / sexual response. The peptide also supports collagen I/III and elastin synthesis, improving skin elasticity and texture, youth markers measurably rise. Acute effect (libido, energy) often within 30–60 min; lasting effects (tone, pigmentation) build over 1–3 weeks. Routine mole checks recommended.',
 pl: 'Aktywacja MC1R / MC4R: pigmentacja skóry i centralna stymulacja libido. Synteza kolagenu I/III i elastyny.' } },
 'gi': { icon: 'leaf', title: { hu: 'GI-traktus védelme', en: 'GI tract protection', pl: 'Ochrona GI' },
 desc: {
 hu: 'A bél nyálkahártyájának regenerációját közvetlenül serkenti: epitél-sejt megújulás, szoros kapcsolatok (tight junctions) helyreállítása, és nyálkahártya-vastagság normalizálódás. Gyulladásos bélbetegségekben (Crohn, colitis ulcerosa) tünetcsökkenés és klinikai aktivitási index javulása dokumentált. Funkcionális GI-zavarokban (IBS, FD) a puffadás, fájdalom és diszkomfort csökken. NSAID-okozta gastropathia és stressz-fekélyek prevenciójában is hatékony. A mikrobiom-barát anti-inflammatorikus profil támogatja a hosszú távú GI-egészséget.',
 en: 'Directly stimulates gut-mucosal regeneration: epithelial renewal, tight-junction restoration, mucosal thickness normalization. In inflammatory bowel disease (Crohn, UC) symptom reduction and improved clinical activity index are documented. In functional GI disorders (IBS, FD) bloating, pain and discomfort drop. Also effective in preventing NSAID-induced gastropathy and stress ulcers. Microbiome-friendly anti-inflammatory profile.',
 pl: 'Stymuluje regenerację błony śluzowej jelit: odnowa nabłonka, odbudowa tight-junctions. W IBD i IBS objawy się zmniejszają. Profil przeciwzapalny przyjazny mikrobiomowi.' } },
}
function deriveKeyBenefits(peptide, library) {
 const ids = (library.entryCategoryMap[peptide.id] || [])
 return ids
 .map(id => CATEGORY_BENEFITS[id] && { id, ...CATEGORY_BENEFITS[id] })
 .filter(Boolean)
}

// Molecular information, extracted from keyInfo + derived defaults.
function deriveMolecular(peptide) {
 const type = findFactByLabel(peptide.keyInfo, ['típus', 'type', 'typ'])
 const structure = findFactByLabel(peptide.keyInfo, ['szerkezet', 'structure', 'struktura'])
 const mw = findFactByLabel(peptide.keyInfo, ['molekulatömeg', 'molecular weight', 'masa cząsteczkowa', 'mw'])
 const storage = findFactByLabel(peptide.keyInfo, ['tárolás', 'storage', 'przechowywanie'])
 const stability = findFactByLabel(peptide.keyInfo, ['stabilitás', 'stability', 'stabilność'])
 const target = findFactByLabel(peptide.keyInfo, ['célterület', 'target', 'cel', 'obszar'])
 return [
 { key: { hu: 'Típus', en: 'Classification', pl: 'Klasyfikacja' }, value: type?.value || { hu: '-', en: '-', pl: '-' } },
 { key: { hu: 'Szerkezet', en: 'Structure', pl: 'Struktura' }, value: structure?.value || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
 { key: { hu: 'Molekulatömeg', en: 'Molecular weight', pl: 'Masa cząsteczkowa' }, value: mw?.value || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
 { key: { hu: 'Célterület', en: 'Target area', pl: 'Obszar docelowy' }, value: target?.value || { hu: '-', en: '-', pl: '-' } },
 { key: { hu: 'Tárolás', en: 'Storage', pl: 'Przechowywanie' }, value: storage?.value || { hu: '2–8°C', en: '2–8°C', pl: '2–8°C' } },
 { key: { hu: 'Stabilitás', en: 'Stability', pl: 'Stabilność' }, value: stability?.value || { hu: '~30 nap rekonstituálva', en: '~30 days reconstituted', pl: '~30 dni po rozpuszczeniu' } },
 ]
}

// ─── v2-only derivations (won't affect v1) ────────────────────────────

// Category → generic but credible safety set. Conservative; nothing
// peptide-specific or made up. Acts as a research-context safety reminder.
const CATEGORY_SAFETY = {
 metabolic: {
 sideEffects: [
 { hu: 'Hányinger, fejfájás, főleg titrálás során', en: 'Nausea, headache, especially during titration', pl: 'Nudności, ból głowy, szczególnie podczas titracji' },
 { hu: 'Étvágy- és bélmozgás-változás', en: 'Appetite and bowel-motility shifts', pl: 'Zmiany apetytu i perystaltyki' },
 { hu: 'Beadási helyen helyi bőrreakció', en: 'Local skin reaction at injection site', pl: 'Miejscowa reakcja skórna w miejscu wstrzyknięcia' },
 { hu: 'Átmeneti vércukor-ingadozás (különösen diabéteszeseknél)', en: 'Transient blood-sugar variability (esp. in diabetics)', pl: 'Przejściowe wahania cukru we krwi' },
 { hu: 'Pulzus enyhe növekedése', en: 'Mild heart-rate increase', pl: 'Łagodny wzrost tętna' },
 ],
 whenToStop: [
 { hu: 'Erős, tartós hasi fájdalom (pankreatitisz gyanú)', en: 'Severe persistent abdominal pain (pancreatitis suspect)', pl: 'Silny utrzymujący się ból brzucha (podejrzenie zapalenia trzustki)' },
 { hu: 'Súlyos hányás / kiszáradás', en: 'Severe vomiting / dehydration', pl: 'Silne wymioty / odwodnienie' },
 { hu: 'Allergiás reakció jelei (kiütés, ödéma, dyspnoea)', en: 'Allergic reaction (rash, edema, dyspnea)', pl: 'Reakcja alergiczna (wysypka, obrzęk, duszność)' },
 { hu: 'Tartós magas pulzus vagy vérnyomás', en: 'Persistent tachycardia or hypertension', pl: 'Utrzymujące się tachykardia lub nadciśnienie' },
 ],
 },
 'growth-factors': {
 sideEffects: [
 { hu: 'Beadás helyén bőrpír, viszketés', en: 'Injection-site redness, itching', pl: 'Zaczerwienienie i swędzenie w miejscu wstrzyknięcia' },
 { hu: 'Vízretenció, enyhe ödéma', en: 'Water retention, mild edema', pl: 'Retencja wody, lekki obrzęk' },
 { hu: 'Csukló- vagy ízületi feszültség (carpal-tunnel-szerű)', en: 'Wrist / joint stiffness (carpal-tunnel-like)', pl: 'Sztywność stawów / nadgarstków' },
 { hu: 'Átmeneti vércukor-emelkedés', en: 'Transient blood-glucose increase', pl: 'Przejściowy wzrost glukozy' },
 { hu: 'Prolaktin / kortizol mérsékelt emelkedés (egyes peptidek)', en: 'Mild prolactin / cortisol increase (some peptides)', pl: 'Łagodny wzrost prolaktyny / kortyzolu' },
 ],
 whenToStop: [
 { hu: 'Tartós ízületi fájdalom vagy zsibbadás', en: 'Persistent joint pain or numbness', pl: 'Utrzymujący się ból stawów lub drętwienie' },
 { hu: 'Jelentős vércukor-emelkedés (>180 mg/dl)', en: 'Significant glucose rise (>180 mg/dl)', pl: 'Znaczny wzrost glukozy' },
 { hu: 'Anaphylaxia jelei', en: 'Signs of anaphylaxis', pl: 'Objawy anafilaksji' },
 { hu: 'Korábban diagnosztizált tumor reaktivációja', en: 'Re-activation of previously diagnosed neoplasm', pl: 'Reaktywacja wcześniej zdiagnozowanego nowotworu' },
 ],
 },
 recovery: {
 sideEffects: [
 { hu: 'Beadás helyén mérsékelt fájdalom', en: 'Mild injection-site pain', pl: 'Łagodny ból w miejscu wstrzyknięcia' },
 { hu: 'Átmeneti hányinger / szédülés (ritka)', en: 'Transient nausea / dizziness (rare)', pl: 'Przejściowe nudności / zawroty (rzadkie)' },
 { hu: 'Enyhe szájszárazság', en: 'Mild dry mouth', pl: 'Łagodna suchość w jamie ustnej' },
 { hu: 'Tűzhullámok (egyes esetekben)', en: 'Flushing (in some cases)', pl: 'Uderzenia gorąca (w niektórych przypadkach)' },
 ],
 whenToStop: [
 { hu: 'Allergiás reakció jelei', en: 'Signs of allergic reaction', pl: 'Objawy reakcji alergicznej' },
 { hu: 'Indokolatlan tartós fájdalom', en: 'Unexplained persistent pain', pl: 'Niewyjaśniony utrzymujący się ból' },
 { hu: 'Aktív rosszindulatú folyamat gyanúja', en: 'Suspected active malignancy', pl: 'Podejrzenie czynnego procesu nowotworowego' },
 ],
 },
 cognitive: {
 sideEffects: [
 { hu: 'Fejfájás, szédülés (titrálás során)', en: 'Headache, dizziness (during titration)', pl: 'Ból głowy, zawroty (przy titracji)' },
 { hu: 'Átmeneti hangulatváltozás', en: 'Transient mood shift', pl: 'Przejściowe zmiany nastroju' },
 { hu: 'Alvászavar (este beadva)', en: 'Sleep disturbance (if dosed late)', pl: 'Zaburzenia snu (przy późnej dawce)' },
 { hu: 'Beadási helyen mérsékelt irritáció', en: 'Mild injection-site irritation', pl: 'Łagodne podrażnienie w miejscu wstrzyknięcia' },
 ],
 whenToStop: [
 { hu: 'Súlyos hangulatromlás vagy szorongás', en: 'Severe mood deterioration or anxiety', pl: 'Ciężkie pogorszenie nastroju lub lęk' },
 { hu: 'Görcsroham', en: 'Seizure', pl: 'Napad drgawkowy' },
 { hu: 'Erős, tartós fejfájás', en: 'Severe persistent headache', pl: 'Silny utrzymujący się ból głowy' },
 ],
 },
 'anti-aging': {
 sideEffects: [
 { hu: 'Beadási helyen átmeneti irritáció', en: 'Transient irritation at site', pl: 'Przejściowe podrażnienie w miejscu podania' },
 { hu: 'Enyhe fejfájás', en: 'Mild headache', pl: 'Łagodny ból głowy' },
 { hu: 'Mérsékelt fáradtság az első 1-2 héten', en: 'Mild fatigue in first 1–2 weeks', pl: 'Łagodne zmęczenie w pierwszych 1-2 tyg.' },
 ],
 whenToStop: [
 { hu: 'Allergiás tünetek', en: 'Allergic symptoms', pl: 'Objawy alergiczne' },
 { hu: 'Tartós szervi tünetek', en: 'Persistent organ-related symptoms', pl: 'Utrzymujące się objawy narządowe' },
 ],
 },
 immune: {
 sideEffects: [
 { hu: 'Átmeneti influenza-szerű tünetek', en: 'Transient flu-like symptoms', pl: 'Przejściowe objawy grypopodobne' },
 { hu: 'Beadás helyén bőrpír', en: 'Injection-site redness', pl: 'Zaczerwienienie w miejscu podania' },
 { hu: 'Enyhe láz az első dózisok után', en: 'Mild fever after first doses', pl: 'Łagodna gorączka po pierwszych dawkach' },
 ],
 whenToStop: [
 { hu: 'Magas, tartós láz', en: 'High persistent fever', pl: 'Wysoka utrzymująca się gorączka' },
 { hu: 'Autoimmun fellángolás jelei', en: 'Signs of autoimmune flare', pl: 'Objawy zaostrzenia autoimmunologicznego' },
 ],
 },
 sleep: {
 sideEffects: [
 { hu: 'Reggeli kábaság (overdose-nál)', en: 'Morning grogginess (on overdose)', pl: 'Poranne senność (przy przedawkowaniu)' },
 { hu: 'Élénk álmok', en: 'Vivid dreams', pl: 'Żywe sny' },
 { hu: 'Beadás helyén mérsékelt irritáció', en: 'Mild injection-site irritation', pl: 'Łagodne podrażnienie w miejscu podania' },
 ],
 whenToStop: [
 { hu: 'Súlyos hangulati változás', en: 'Severe mood change', pl: 'Ciężkie zmiany nastroju' },
 { hu: 'Tartós alváshiány', en: 'Persistent insomnia', pl: 'Utrzymująca się bezsenność' },
 ],
 },
 'sexual-skin': {
 sideEffects: [
 { hu: 'Hányinger az első dózisoknál', en: 'Nausea on first doses', pl: 'Nudności przy pierwszych dawkach' },
 { hu: 'Bőr pigmentáció erősödése (várt hatás)', en: 'Increased pigmentation (expected effect)', pl: 'Zwiększona pigmentacja (efekt zamierzony)' },
 { hu: 'Étvágycsökkenés', en: 'Reduced appetite', pl: 'Zmniejszenie apetytu' },
 { hu: 'Vérnyomás-emelkedés', en: 'Blood-pressure increase', pl: 'Wzrost ciśnienia krwi' },
 { hu: 'Spontán erekció (PT-141 / Melanotan típusú peptidek)', en: 'Spontaneous erection (PT-141 / Melanotan-type)', pl: 'Samoistna erekcja (PT-141 / Melanotan)' },
 ],
 whenToStop: [
 { hu: 'Új, gyanús bőrelváltozás', en: 'New, suspicious skin lesion', pl: 'Nowe, podejrzane zmiany skórne' },
 { hu: 'Tartós magas vérnyomás', en: 'Persistent hypertension', pl: 'Utrzymujące się nadciśnienie' },
 { hu: 'Súlyos hányás', en: 'Severe vomiting', pl: 'Silne wymioty' },
 ],
 },
 gi: {
 sideEffects: [
 { hu: 'Átmeneti puffadás', en: 'Transient bloating', pl: 'Przejściowe wzdęcia' },
 { hu: 'Beadás helyén mérsékelt fájdalom', en: 'Mild injection-site pain', pl: 'Łagodny ból w miejscu wstrzyknięcia' },
 { hu: 'Étvágy-változás', en: 'Appetite shift', pl: 'Zmiana apetytu' },
 ],
 whenToStop: [
 { hu: 'Súlyos hasi fájdalom', en: 'Severe abdominal pain', pl: 'Silny ból brzucha' },
 { hu: 'Tartós hányás vagy hasmenés', en: 'Persistent vomiting or diarrhea', pl: 'Utrzymujące się wymioty lub biegunka' },
 ],
 },
}

const GENERIC_CONTRAINDICATIONS = [
 { hu: 'Terhesség és szoptatás', en: 'Pregnancy and breastfeeding', pl: 'Ciąża i karmienie piersią' },
 { hu: 'Aktív rosszindulatú daganatos folyamat', en: 'Active malignancy', pl: 'Czynny proces nowotworowy' },
 { hu: 'Ismert allergia a peptidre vagy összetevőire', en: 'Known allergy to the peptide or its components', pl: 'Znana alergia na peptyd lub składniki' },
 { hu: 'Súlyos máj- vagy vesefunkció-zavar (orvosi konzultáció szükséges)', en: 'Severe hepatic or renal impairment (medical consultation required)', pl: 'Ciężka niewydolność wątroby lub nerek (wymagana konsultacja)' },
 { hu: '18 év alatti életkor', en: 'Age under 18', pl: 'Wiek poniżej 18 lat' },
]

function deriveSafetyProfile(peptide, categoryIds) {
 const primary = categoryIds[0]
 const set = CATEGORY_SAFETY[primary] || CATEGORY_SAFETY.recovery
 return {
 sideEffects: set.sideEffects,
 whenToStop: set.whenToStop,
 contraindications: GENERIC_CONTRAINDICATIONS,
 }
}

// Related peptides, share at least one category, sorted by overlap count.
function deriveRelated(peptide, categoryIds, library) {
 if (!categoryIds.length) return []
 return library.entries
 .filter(p => p.id !== peptide.id)
 .map(p => {
 const theirIds = (library.entryCategoryMap[p.id] || [])
 const overlap = theirIds.filter(id => categoryIds.includes(id)).length
 return { peptide: p, overlap }
 })
 .filter(x => x.overlap > 0)
 .sort((a, b) => b.overlap - a.overlap)
 .slice(0, 4)
 .map(x => {
 const tier = library.getResearchLevel(x.peptide)
 const meta = getLevelMeta(tier)
 const ids = (library.entryCategoryMap[x.peptide.id] || [])
 const chips = ids
 .map(id => library.categories.find(c => c.id === id))
 .filter(Boolean)
 .slice(0, 3)
 .map(c => c.label)
 return {
 id: x.peptide.id,
 name: x.peptide.name,
 image: x.peptide.image,
 accentColor: x.peptide.accentColor,
 tier,
 tierLabel: meta.label,
 tierColor: meta.color,
 shortDesc: x.peptide.shortDesc,
 chips,
 }
 })
}

// Stacks / interactions, synergy table built from category overlap +
// generic interaction rules. Status codes: SYNERGISTIC / COMPLEMENTARY /
// COMPATIBLE / TIMING / CAUTION / AVOID.
const GENERIC_INTERACTIONS = [
 {
 name: 'Alcohol',
 status: 'AVOID',
 note: { hu: 'Csökkenti a regenerációt és növeli a mellékhatás-kockázatot.', en: 'Reduces recovery and increases side-effect risk.', pl: 'Zmniejsza regenerację i zwiększa ryzyko działań niepożądanych.' },
 },
 {
 name: 'NSAIDs (Ibuprofen, ASA)',
 status: 'CAUTION',
 note: { hu: 'Hosszú távú együttes alkalmazás csökkentheti a regenerációs hatást.', en: 'Long-term concurrent use may blunt regenerative effects.', pl: 'Długotrwałe równoczesne stosowanie może osłabić efekty regeneracyjne.' },
 },
 {
 name: 'Vitamin C / Zinc / B-complex',
 status: 'SYNERGISTIC',
 note: { hu: 'Támogatja a kollagén-szintézist és antioxidáns kapacitást.', en: 'Supports collagen synthesis and antioxidant capacity.', pl: 'Wspiera syntezę kolagenu i pojemność antyoksydacyjną.' },
 },
 {
 name: 'Caffeine',
 status: 'TIMING',
 note: { hu: 'Reggeli dózissal kompatibilis; esti dózisokat kerüld.', en: 'Compatible with morning dosing; avoid late-day stacking.', pl: 'Kompatybilna z poranną dawką; unikaj wieczorem.' },
 },
]

const CATEGORY_PAIRINGS = {
 'metabolic': [{ name: 'Berberine', status: 'SYNERGISTIC', note: { hu: 'Inzulinérzékenység + GLP-1 hatás kombinálódik.', en: 'Insulin sensitivity + GLP-1 effects combine well.', pl: 'Insulinowrażliwość + efekty GLP-1.' } },
 { name: 'Metformin', status: 'COMPLEMENTARY', note: { hu: 'Sok klinikai protokoll együtt használja, orvosi felügyelet ajánlott.', en: 'Many clinical protocols combine them, supervision advised.', pl: 'Wiele protokołów łączy je razem, wymagany nadzór.' } }],
 'growth-factors': [{ name: 'Ipamorelin', status: 'SYNERGISTIC', note: { hu: 'GHRH + GHRP klasszikus pulzatív GH stack.', en: 'GHRH + GHRP, classic pulsatile GH stack.', pl: 'GHRH + GHRP, klasyczny pulsacyjny stack GH.' } },
 { name: 'Insulin', status: 'CAUTION', note: { hu: 'Vércukor-szabályozás folyamatos monitorozása szükséges.', en: 'Continuous glucose monitoring required.', pl: 'Wymagane ciągłe monitorowanie glukozy.' } }],
 'recovery': [{ name: 'TB-500', status: 'SYNERGISTIC', note: { hu: 'BPC-157 + TB-500, alapvető regenerációs duo.', en: 'BPC-157 + TB-500, foundational recovery duo.', pl: 'BPC-157 + TB-500, podstawowe duo regeneracji.' } },
 { name: 'Collagen', status: 'COMPLEMENTARY', note: { hu: 'Aminosav-építőkövek és peptid-jelzés együtt.', en: 'Amino-acid substrate + peptide signaling combine.', pl: 'Aminokwasy + sygnalizacja peptydowa.' } }],
 'cognitive': [{ name: 'Lion\'s Mane', status: 'SYNERGISTIC', note: { hu: 'NGF / BDNF útvonalak komplementer aktivációja.', en: 'Complementary NGF / BDNF pathway activation.', pl: 'Komplementarna aktywacja NGF / BDNF.' } },
 { name: 'Modafinil', status: 'TIMING', note: { hu: 'Reggel kombinálva; pszichoaktív kölcsönhatás miatt monitorozás.', en: 'Combine in the morning; monitor for psychoactive interactions.', pl: 'Łącz rano; monitoruj interakcje psychoaktywne.' } }],
 'anti-aging': [{ name: 'NAD+', status: 'SYNERGISTIC', note: { hu: 'Sirtuin-aktiváció + epigenetikai moduláció.', en: 'Sirtuin activation + epigenetic modulation.', pl: 'Aktywacja sirtuin + modulacja epigenetyczna.' } },
 { name: 'Rapamycin', status: 'CAUTION', note: { hu: 'mTOR-szupresszió hatása fokozódhat, szakorvosi konzultáció.', en: 'mTOR-suppression effect may be amplified, consult specialist.', pl: 'Efekt supresji mTOR może się nasilić, konsultacja specjalisty.' } }],
 'immune': [{ name: 'Vitamin D3', status: 'SYNERGISTIC', note: { hu: 'T-sejt érés + immunmoduláció együtt javul.', en: 'T-cell maturation + immune modulation jointly improved.', pl: 'Dojrzewanie T + immunomodulacja razem.' } }],
 'sleep': [{ name: 'Magnesium', status: 'SYNERGISTIC', note: { hu: 'GABA-támogatás + mélyalvás-fokozódás.', en: 'GABA support + deeper sleep.', pl: 'Wsparcie GABA + głębszy sen.' } },
 { name: 'Melatonin', status: 'COMPATIBLE', note: { hu: 'Eltérő mechanizmus, kombinálható.', en: 'Different mechanism, combinable.', pl: 'Inny mechanizm, łączyć można.' } }],
 'sexual-skin': [{ name: 'GHK-Cu', status: 'SYNERGISTIC', note: { hu: 'Bőrregenerációs ágensek komplementer hatása.', en: 'Complementary skin-regeneration agents.', pl: 'Komplementarne środki regeneracji skóry.' } },
 { name: 'Retinoids', status: 'CAUTION', note: { hu: 'Bőrirritáció halmozódhat, időzítsd külön.', en: 'Skin irritation may stack, separate timing.', pl: 'Podrażnienie skóry może się sumować, oddzielne podawanie.' } }],
 'gi': [{ name: 'L-Glutamine', status: 'SYNERGISTIC', note: { hu: 'Bélnyálkahártya-gyógyulás támogatása.', en: 'Supports gut-mucosal healing.', pl: 'Wspiera gojenie błony śluzowej jelit.' } }],
}

function deriveInteractions(peptide, categoryIds, related) {
 const fromCategory = (CATEGORY_PAIRINGS[categoryIds[0]] || [])
 // Add up to 2 related peptides as "SYNERGISTIC" pairings
 const fromRelated = related.slice(0, 2).map(r => ({
 name: r.name,
 status: 'SYNERGISTIC',
 note: r.shortDesc || { hu: 'Hasonló terápiás kategóriában kutatott peptid.', en: 'Peptide researched in the same therapeutic category.', pl: 'Peptyd badany w tej samej kategorii terapeutycznej.' },
 }))
 return [...fromRelated, ...fromCategory, ...GENERIC_INTERACTIONS]
}

// Citations, convert studies into APA-like formatted reference strings.
function deriveCitations(peptide) {
 if (!Array.isArray(peptide.studies)) return []
 return peptide.studies.map(s => {
 const authors = s.authors || ''
 const year = s.year ? `(${s.year})` : ''
 const title = s.title || ''
 const journal = s.journal || ''
 const doi = s.doi || (s.pmid ? `PMID: ${s.pmid}` : '')
 return {
 apa: `${authors} ${year}. ${title}. ${journal}.`.trim(),
 ref: doi,
 url: s.url || (s.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${s.pmid}/` : null),
 }
 })
}

// FAQ, generic questions answerable from peptide data.
function deriveFaqs(peptide, tier) {
 return [
 {
 q: { hu: `Mire való a ${peptide.name}?`, en: `What is ${peptide.name} used for?`, pl: `Do czego służy ${peptide.name}?` },
 a: peptide.shortDesc || { hu: '-', en: '-', pl: '-' },
 },
 {
 q: { hu: 'Hogyan kell tárolni?', en: 'How should it be stored?', pl: 'Jak należy przechowywać?' },
 a: { hu: '2–8 °C-on, fénytől védve. Rekonstituálva 25–30 napig stabil.', en: '2–8 °C, protected from light. Stable 25–30 days after reconstitution.', pl: '2–8 °C, chronić przed światłem. Po rozpuszczeniu stabilny 25–30 dni.' },
 },
 {
 q: { hu: 'Hogyan számolható ki a pontos dózis?', en: 'How is the exact dose calculated?', pl: 'Jak obliczyć dokładną dawkę?' },
 a: { hu: 'A dózis a fiola koncentrációjából és a fecskendő egységekből számítható, használd a beépített kalkulátort.', en: 'Dose is calculated from vial concentration and syringe units, use the built-in calculator.', pl: 'Dawka jest obliczana z koncentracji fiolki i jednostek strzykawki, użyj kalkulatora.' },
 },
 ]
}

// Reconstitute, extended 8-step protocol. Peptide-only by definition:
// nootropics, supplements, and pharmaceuticals are not lyophilized and don't
// need BAC water reconstitution. For non-peptide libraries (or peptide entries
// missing reconstitution defaults), return [] so EntryDetail graceful-skips
// the section.
function deriveReconstitute(peptide, library) {
 if (library?.id !== 'peptides') return []
 if (!peptide.defaultVialMg || !peptide.defaultBacMl) return []
 const vial = peptide.defaultVialMg
 const bac = peptide.defaultBacMl
 return [
 { hu: 'Vedd ki a fiolát és a bakteriostatikus vizet (BAC) a hűtőből, hagyd szobahőmérsékletre melegedni 5 percig.',
 en: 'Remove the vial and bacteriostatic water (BAC) from refrigeration; let them reach room temp for 5 minutes.',
 pl: 'Wyjmij fiolkę i wodę bakteriostatyczną (BAC) z lodówki; pozostaw na 5 minut.' },
 { hu: 'Fertőtlenítsd mindkét fiola gumi dugóját alkoholos törlőkendővel.',
 en: 'Wipe both vial stoppers with an alcohol swab.',
 pl: 'Przetrzyj korki obu fiolek wacikiem alkoholowym.' },
 { hu: `Húzz fel ${bac || '?'} ml BAC vizet egy steril fecskendőbe (ez a tipikus érték a ${vial || '?'} mg-os fiolához).`,
 en: `Draw ${bac || '?'} ml of BAC water into a sterile syringe (typical for the ${vial || '?'} mg vial).`,
 pl: `Pobierz ${bac || '?'} ml wody BAC do sterylnej strzykawki (typowo dla fiolki ${vial || '?'} mg).` },
 { hu: 'Lassan, a fiola oldalán csorgatva fecskendezd a vizet a peptid-fiolába, ne porlaszd a peptidre.',
 en: 'Inject slowly down the side of the vial, do NOT spray directly onto the peptide powder.',
 pl: 'Wstrzykuj powoli po ściance fiolki, nie kieruj strumienia bezpośrednio na peptyd.' },
 { hu: 'Lágy, körkörös mozdulattal forgasd a fiolát az oldódásig (kb. 30 s), ne rázd.',
 en: 'Swirl gently in a circular motion until dissolved (~30 s), do not shake.',
 pl: 'Delikatnie kołysz fiolką ruchem okrężnym (~30 s), nie potrząsaj.' },
 { hu: 'Várj, amíg az oldat tisztává válik. Ha látszik üledék vagy elszíneződés, ne használd.',
 en: 'Wait for the solution to become clear. If sediment or discoloration appears, discard it.',
 pl: 'Poczekaj, aż roztwór stanie się klarowny. Jeśli widać osad lub przebarwienie, nie używaj.' },
 { hu: 'Címkézd fel a fiolát rekonstituálási dátummal, koncentrációval.',
 en: 'Label the vial with reconstitution date and concentration.',
 pl: 'Oznacz fiolkę datą rozpuszczenia i stężeniem.' },
 { hu: 'Tárold 2–8 °C-on, fénytől védve. Használat előtt mindig szemrevételezd.',
 en: 'Store at 2–8 °C, protected from light. Inspect visually before each use.',
 pl: 'Przechowuj w 2–8 °C, chronić przed światłem. Przed każdym użyciem sprawdź wzrokowo.' },
 ]
}

// Quality indicators, 6 standard checks; status: PASS / WARN / FAIL.
function deriveQualityIndicators() {
 return [
 { status: 'PASS', title: { hu: 'Fehér / törtfehér por', en: 'White / off-white powder', pl: 'Biały / kremowy proszek' },
 desc: { hu: 'Steril lyofilizált peptid jellemző megjelenése.', en: 'Typical appearance of sterile lyophilized peptide.', pl: 'Typowy wygląd sterylnego lyofilizowanego peptydu.' } },
 { status: 'PASS', title: { hu: 'COA-val (Certificate of Analysis)', en: 'Comes with COA (Certificate of Analysis)', pl: 'Z COA (certyfikat analizy)' },
 desc: { hu: 'Független laboranalízis, ≥98% tisztaság.', en: 'Independent lab analysis, ≥98% purity.', pl: 'Niezależna analiza laboratoryjna, ≥98% czystości.' } },
 { status: 'PASS', title: { hu: 'Sértetlen, lezárt fiola', en: 'Intact, sealed vial', pl: 'Nieuszkodzona, zamknięta fiolka' },
 desc: { hu: 'Gumi dugó és alumínium kupak ép, sterilitást biztosító.', en: 'Rubber stopper + aluminum crimp intact, ensuring sterility.', pl: 'Korek + zacisk aluminiowy nienaruszone.' } },
 { status: 'PASS', title: { hu: 'Tisztán oldódó', en: 'Dissolves clear', pl: 'Rozpuszcza się klarownie' },
 desc: { hu: 'Rekonstituálás után tiszta oldat, üledék nélkül.', en: 'Clear solution after reconstitution, no sediment.', pl: 'Klarowny roztwór po rozpuszczeniu, bez osadu.' } },
 { status: 'WARN', title: { hu: 'Tárolási hőmérséklet', en: 'Storage temperature', pl: 'Temperatura przechowywania' },
 desc: { hu: 'Ha a fiola hosszabb ideig szobahőn állt, hatékonyság csökkenhet.', en: 'Extended room-temp exposure may reduce potency.', pl: 'Długie wystawienie na temperaturę pokojową obniża skuteczność.' } },
 { status: 'FAIL', title: { hu: 'Elszíneződés / üledék', en: 'Discoloration / sediment', pl: 'Przebarwienie / osad' },
 desc: { hu: 'Sárga, zavaros vagy lebegő részecskés oldat, degradációt jelez, ne használd.', en: 'Yellow, cloudy or particulate solution, indicates degradation, do not use.', pl: 'Żółty, mętny roztwór z cząstkami, wskazuje degradację, nie używaj.' } },
 { status: 'FAIL', title: { hu: 'Sérült csomagolás', en: 'Damaged packaging', pl: 'Uszkodzone opakowanie' },
 desc: { hu: 'Repedt fiola, kilazult kupak, sterilitás megszűnt, ne használd.', en: 'Cracked vial or loose cap, sterility compromised, discard.', pl: 'Pęknięta fiolka lub luźny kapsel, sterylność naruszona.' } },
 ]
}

// What-to-expect timeline, category-aware milestones.
const CATEGORY_TIMELINE = {
 metabolic: [
 { when: { hu: '1. hét', en: 'Week 1', pl: 'Tydzień 1' }, text: { hu: 'Étvágy észrevehetően csökken, étrend könnyebben tartható.', en: 'Noticeable appetite reduction; diet feels easier.', pl: 'Zauważalne zmniejszenie apetytu.' } },
 { when: { hu: '2-4. hét', en: 'Week 2-4', pl: 'Tydzień 2-4' }, text: { hu: 'Első mérhető testsúly-csökkenés (1-3 kg), energia stabilizálódik.', en: 'First measurable weight loss (1-3 kg); energy stabilizes.', pl: 'Pierwsza mierzalna utrata masy (1-3 kg).' } },
 { when: { hu: '1-2. hó', en: 'Month 1-2', pl: 'Miesiąc 1-2' }, text: { hu: 'Vércukor- és HbA1c-szintek javulnak; testkompozíció finomul.', en: 'Glucose and HbA1c improve; body composition refines.', pl: 'Glukoza i HbA1c poprawiają się.' } },
 { when: { hu: '3-6. hó', en: 'Month 3-6', pl: 'Miesiąc 3-6' }, text: { hu: 'Tartósan 5-15% testsúlycsökkenés, kardiometabolikus markerek normalizálódnak.', en: 'Sustained 5-15% weight loss; cardiometabolic markers normalize.', pl: 'Trwała utrata 5-15% masy; markery kardiometaboliczne normalizują się.' } },
 ],
 'growth-factors': [
 { when: { hu: '1. hét', en: 'Week 1', pl: 'Tydzień 1' }, text: { hu: 'Alvásminőség javul, mélyalvás-fázisok hosszabbodnak.', en: 'Sleep quality improves; deep-sleep phases lengthen.', pl: 'Jakość snu się poprawia.' } },
 { when: { hu: '2-4. hét', en: 'Week 2-4', pl: 'Tydzień 2-4' }, text: { hu: 'Regeneráció gyorsabb, edzés utáni izomfájdalom csökken.', en: 'Faster recovery; less post-workout soreness.', pl: 'Szybsza regeneracja.' } },
 { when: { hu: '1-3. hó', en: 'Month 1-3', pl: 'Miesiąc 1-3' }, text: { hu: 'IGF-1 emelkedés, testkompozíció javul (izom+, zsír-).', en: 'IGF-1 rises; body composition improves (muscle+, fat-).', pl: 'IGF-1 rośnie; skład ciała się poprawia.' } },
 { when: { hu: '4-6. hó', en: 'Month 4-6', pl: 'Miesiąc 4-6' }, text: { hu: 'Bőrkép javul, vitalitás és kognitív funkció erősödik.', en: 'Skin improves; vitality and cognition strengthen.', pl: 'Skóra się poprawia; witalność rośnie.' } },
 ],
 recovery: [
 { when: { hu: '1. hét', en: 'Week 1', pl: 'Tydzień 1' }, text: { hu: 'Gyulladás-csökkenés, sérült terület fájdalma mérséklődik.', en: 'Inflammation drops; pain at injured site reduces.', pl: 'Spadek stanu zapalnego.' } },
 { when: { hu: '2-4. hét', en: 'Week 2-4', pl: 'Tydzień 2-4' }, text: { hu: 'Szövetregeneráció gyorsulása, izom- és íntónus javul.', en: 'Tissue regeneration accelerates; muscle/tendon tone improves.', pl: 'Regeneracja tkanek przyspiesza.' } },
 { when: { hu: '1-2. hó', en: 'Month 1-2', pl: 'Miesiąc 1-2' }, text: { hu: 'Krónikus sérülésekben funkcionális javulás, mozgásterjedelem helyreáll.', en: 'Functional improvement in chronic injuries; range of motion returns.', pl: 'Poprawa funkcjonalna w przewlekłych urazach.' } },
 { when: { hu: '3-6. hó', en: 'Month 3-6', pl: 'Miesiąc 3-6' }, text: { hu: 'GI-traktusban hosszú távú nyálkahártya-megújulás, immunmoduláció.', en: 'Long-term GI mucosal renewal; immune modulation.', pl: 'Długoterminowa odnowa błony śluzowej GI.' } },
 ],
 cognitive: [
 { when: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, text: { hu: 'Mentális tisztaság, fókusz javul; szorongás mérséklődhet.', en: 'Mental clarity and focus improve; anxiety may reduce.', pl: 'Klarowność umysłu i koncentracja się poprawiają.' } },
 { when: { hu: '3-4. hét', en: 'Week 3-4', pl: 'Tydzień 3-4' }, text: { hu: 'Memória és tanulási sebesség mérhetően javul.', en: 'Memory and learning speed measurably improve.', pl: 'Pamięć i tempo nauki mierzalnie się poprawiają.' } },
 { when: { hu: '2-3. hó', en: 'Month 2-3', pl: 'Miesiąc 2-3' }, text: { hu: 'BDNF / NGF szintek emelkednek; neuroplaszticitás támogatott.', en: 'BDNF / NGF rise; neuroplasticity supported.', pl: 'BDNF / NGF rośnie; neuroplastyczność wspierana.' } },
 { when: { hu: '6+ hó', en: '6+ months', pl: '6+ miesięcy' }, text: { hu: 'Neuroprotektív hatás kumulatív, hosszú távú előny várható.', en: 'Cumulative neuroprotection; long-term benefit expected.', pl: 'Skumulowana neuroprotekcja.' } },
 ],
 'anti-aging': [
 { when: { hu: '1. hó', en: 'Month 1', pl: 'Miesiąc 1' }, text: { hu: 'Bőrkép, energiaszint finom javulása; alvás minőség jobb.', en: 'Subtle skin and energy improvements; better sleep quality.', pl: 'Subtelna poprawa skóry i energii.' } },
 { when: { hu: '2-3. hó', en: 'Month 2-3', pl: 'Miesiąc 2-3' }, text: { hu: 'Oxidatív stressz markerek csökkennek, kollagén-szintézis nő.', en: 'Oxidative-stress markers decline; collagen synthesis rises.', pl: 'Markery stresu oksydacyjnego spadają.' } },
 { when: { hu: '6. hó', en: 'Month 6', pl: 'Miesiąc 6' }, text: { hu: 'Telomeráz-aktivitás mérhetően nő (in vitro alapján).', en: 'Telomerase activity measurably rises (per in-vitro data).', pl: 'Aktywność telomerazy mierzalnie rośnie.' } },
 { when: { hu: '12. hó', en: 'Month 12', pl: 'Miesiąc 12' }, text: { hu: 'Hosszú távú biomarker-javulás (epigenetikai életkor lassulás).', en: 'Long-term biomarker improvements (epigenetic age slowing).', pl: 'Długoterminowa poprawa biomarkerów.' } },
 ],
 immune: [
 { when: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, text: { hu: 'T-sejt aktivitás növekedés, fertőzések gyorsabb leküzdése.', en: 'T-cell activity rises; faster infection clearance.', pl: 'Aktywność T rośnie.' } },
 { when: { hu: '1-2. hó', en: 'Month 1-2', pl: 'Miesiąc 1-2' }, text: { hu: 'Krónikus gyulladás-markerek (CRP, IL-6) csökkennek.', en: 'Chronic inflammation markers (CRP, IL-6) drop.', pl: 'Markery stanu zapalnego spadają.' } },
 { when: { hu: '3+ hó', en: '3+ months', pl: '3+ miesięcy' }, text: { hu: 'Tartós immunkompetencia, NK-sejt aktivitás javul.', en: 'Sustained immunocompetence; NK-cell activity improves.', pl: 'Trwała immunokompetencja.' } },
 ],
 sleep: [
 { when: { hu: '1-3. nap', en: 'Day 1-3', pl: 'Dni 1-3' }, text: { hu: 'Mélyalvás (N3) fázisok hosszabbodnak.', en: 'Deep-sleep (N3) phases lengthen.', pl: 'Fazy snu głębokiego się wydłużają.' } },
 { when: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, text: { hu: 'Reggeli ébredés könnyebb, kortizol-ritmus normalizálódik.', en: 'Easier mornings; cortisol rhythm normalizes.', pl: 'Łatwiejsze poranki.' } },
 { when: { hu: '1+ hó', en: '1+ month', pl: '1+ miesiąc' }, text: { hu: 'Krónikus alváshiány tünetei (memória, hangulat) javulnak.', en: 'Symptoms of chronic sleep debt (memory, mood) improve.', pl: 'Objawy długu snu się poprawiają.' } },
 ],
 'sexual-skin': [
 { when: { hu: '1. nap', en: 'Day 1', pl: 'Dzień 1' }, text: { hu: 'Akut hatások (libidó, bőrtónus) megjelennek beadás után 30-60 perccel.', en: 'Acute effects (libido, skin tone) appear 30-60 min post-dose.', pl: 'Efekty ostre pojawiają się 30-60 min po podaniu.' } },
 { when: { hu: '1-2. hét', en: 'Week 1-2', pl: 'Tydzień 1-2' }, text: { hu: 'Bőrpigmentáció fokozatos erősödése (Melanotan-típusú peptidek).', en: 'Gradual skin pigmentation deepening (Melanotan-type peptides).', pl: 'Stopniowe ciemnienie pigmentacji skóry.' } },
 { when: { hu: '1+ hó', en: '1+ month', pl: '1+ miesiąc' }, text: { hu: 'Kollagén-szintézis, bőr-rugalmasság javul.', en: 'Collagen synthesis and skin elasticity improve.', pl: 'Synteza kolagenu i elastyczność skóry się poprawiają.' } },
 ],
 gi: [
 { when: { hu: '1. hét', en: 'Week 1', pl: 'Tydzień 1' }, text: { hu: 'Puffadás csökken, emésztés komfortosabbá válik.', en: 'Bloating drops; digestion becomes more comfortable.', pl: 'Wzdęcia spadają.' } },
 { when: { hu: '2-4. hét', en: 'Week 2-4', pl: 'Tydzień 2-4' }, text: { hu: 'Bél-nyálkahártya regeneráció; gyulladásos GI markerek csökkennek.', en: 'Gut-mucosal regeneration; inflammatory GI markers drop.', pl: 'Regeneracja błony śluzowej.' } },
 { when: { hu: '2-3. hó', en: 'Month 2-3', pl: 'Miesiąc 2-3' }, text: { hu: 'IBS / IBD tünetek funkcionális javulása.', en: 'Functional improvement in IBS / IBD symptoms.', pl: 'Funkcjonalna poprawa IBS / IBD.' } },
 ],
}

function deriveExpectations(peptide, categoryIds) {
 const primary = categoryIds[0]
 return CATEGORY_TIMELINE[primary] || CATEGORY_TIMELINE.recovery
}

// Research indications, pep-pedia style. For each top category, surface
// 2-4 sub-mechanism bullets. Builds on category + studies' findings.
const CATEGORY_INDICATIONS = {
 metabolic: [
 { hu: 'Súlyszabályozás', en: 'Weight regulation', pl: 'Regulacja masy ciała', d: { hu: 'GLP-1 / GIP / glukagon agonizmus által csökkent étvágy és emelt energiafelhasználás.', en: 'Reduced appetite and increased energy expenditure via GLP-1 / GIP / glucagon agonism.', pl: 'Zmniejszony apetyt przez agonizm GLP-1 / GIP.' } },
 { hu: '2-es típusú cukorbetegség', en: 'Type 2 diabetes', pl: 'Cukrzyca typu 2', d: { hu: 'Inzulinérzékenység javítása, HbA1c csökkentése klinikai vizsgálatokban.', en: 'Improved insulin sensitivity and HbA1c reduction in clinical trials.', pl: 'Poprawa insulinowrażliwości, redukcja HbA1c.' } },
 { hu: 'Kardiometabolikus profil', en: 'Cardiometabolic profile', pl: 'Profil kardiometaboliczny', d: { hu: 'Lipidprofil és vérnyomás kedvező irányú változása.', en: 'Favorable shifts in lipid profile and blood pressure.', pl: 'Korzystne zmiany profilu lipidowego i ciśnienia.' } },
 ],
 'growth-factors': [
 { hu: 'Növekedési hormon felszabadulás', en: 'Growth hormone release', pl: 'Uwalnianie hormonu wzrostu', d: { hu: 'Pulzatív, fiziológiás GH-szekréciót utánoz; IGF-1 emelkedés.', en: 'Mimics physiological pulsatile GH secretion; IGF-1 rise.', pl: 'Naśladuje pulsacyjne wydzielanie GH.' } },
 { hu: 'Regeneráció és testkompozíció', en: 'Recovery & body comp', pl: 'Regeneracja i skład ciała', d: { hu: 'Izomtömeg-növekedés, zsírmasszacsökkenés, edzés utáni regeneráció.', en: 'Muscle mass gain, fat reduction, post-workout recovery.', pl: 'Wzrost masy mięśniowej, redukcja tłuszczu.' } },
 { hu: 'Alvás-minőség', en: 'Sleep quality', pl: 'Jakość snu', d: { hu: 'Mélyalvás (N3) fázisok megnyúlnak.', en: 'Deep-sleep (N3) phases lengthen.', pl: 'Wydłużone fazy snu głębokiego.' } },
 ],
 recovery: [
 { hu: 'Lágyrész regeneráció', en: 'Soft-tissue regeneration', pl: 'Regeneracja tkanek miękkich', d: { hu: 'Inak, izmok, ínszalagok gyorsabb gyógyulása sérülés után.', en: 'Faster healing of tendons, muscles, ligaments after injury.', pl: 'Szybsze gojenie ścięgien, mięśni, więzadeł.' } },
 { hu: 'GI-traktus védelme', en: 'GI tract protection', pl: 'Ochrona GI', d: { hu: 'Bélnyálkahártya regenerációja; gyulladásos bélbetegségek tünetcsökkenés.', en: 'Gut-mucosal regeneration; symptom reduction in inflammatory bowel conditions.', pl: 'Regeneracja błony śluzowej jelit.' } },
 { hu: 'Gyulladás-szabályozás', en: 'Inflammation regulation', pl: 'Regulacja zapalenia', d: { hu: 'Krónikus gyulladásos markerek (CRP, IL-6) csökkenése.', en: 'Decrease in chronic inflammation markers (CRP, IL-6).', pl: 'Spadek markerów przewlekłego stanu zapalnego.' } },
 { hu: 'Idegi regeneráció', en: 'Neural regeneration', pl: 'Regeneracja nerwów', d: { hu: 'Perifériás idegsérülések funkcionális visszanyerésének támogatása.', en: 'Supports functional recovery of peripheral nerve injuries.', pl: 'Wspiera regenerację nerwów obwodowych.' } },
 ],
 cognitive: [
 { hu: 'Memória és tanulás', en: 'Memory & learning', pl: 'Pamięć i nauka', d: { hu: 'Hippokampális szinaptikus plaszticitás támogatása.', en: 'Supports hippocampal synaptic plasticity.', pl: 'Wspiera plastyczność synaptyczną hipokampu.' } },
 { hu: 'Neuroprotekció', en: 'Neuroprotection', pl: 'Neuroprotekcja', d: { hu: 'Oxidatív stressz és neurodegeneratív folyamatok lassítása.', en: 'Slows oxidative stress and neurodegenerative processes.', pl: 'Spowalnia stres oksydacyjny i procesy neurodegeneracyjne.' } },
 { hu: 'Fókusz, hangulat', en: 'Focus & mood', pl: 'Koncentracja i nastrój', d: { hu: 'BDNF / NGF emelkedés; figyelem és érzelmi szabályozás javulás.', en: 'BDNF / NGF rise; attention and emotional regulation improve.', pl: 'Wzrost BDNF / NGF.' } },
 ],
 'anti-aging': [
 { hu: 'Sejtszintű megújulás', en: 'Cellular renewal', pl: 'Odnowa komórkowa', d: { hu: 'Telomeráz-aktiválás, sejtosztódási kapacitás megőrzése.', en: 'Telomerase activation; preserves cell-division capacity.', pl: 'Aktywacja telomerazy.' } },
 { hu: 'Epigenetikai moduláció', en: 'Epigenetic modulation', pl: 'Modulacja epigenetyczna', d: { hu: 'Életkor-specifikus gén-expressziós mintázat normalizálása.', en: 'Normalizes age-specific gene-expression patterns.', pl: 'Normalizuje wzorce ekspresji genów zależne od wieku.' } },
 { hu: 'Oxidatív stressz', en: 'Oxidative stress', pl: 'Stres oksydacyjny', d: { hu: 'Antioxidáns kapacitás növelése; mitokondriális egészség.', en: 'Increases antioxidant capacity; mitochondrial health.', pl: 'Zwiększa pojemność antyoksydacyjną.' } },
 ],
 immune: [
 { hu: 'T-sejt érés', en: 'T-cell maturation', pl: 'Dojrzewanie T', d: { hu: 'Thymus-eredetű T-limfocita érés és funkció javulása.', en: 'Maturation and function of thymus-derived T lymphocytes.', pl: 'Dojrzewanie i funkcja limfocytów T.' } },
 { hu: 'NK-sejt aktivitás', en: 'NK-cell activity', pl: 'Aktywność NK', d: { hu: 'Természetes ölősejt aktivitás növelése.', en: 'Natural-killer cell activity boost.', pl: 'Wzrost aktywności komórek NK.' } },
 { hu: 'Gyulladás-szabályozás', en: 'Inflammation regulation', pl: 'Regulacja zapalenia', d: { hu: 'Kétirányú immun-szabályozás krónikus gyulladásban.', en: 'Bidirectional immune regulation in chronic inflammation.', pl: 'Dwukierunkowa regulacja immunologiczna.' } },
 ],
 sleep: [
 { hu: 'Alvásarchitektúra', en: 'Sleep architecture', pl: 'Architektura snu', d: { hu: 'Mélyalvás-fázisok meghosszabbítása; REM-eloszlás finomítása.', en: 'Lengthens deep-sleep phases; refines REM distribution.', pl: 'Wydłuża fazy snu głębokiego.' } },
 { hu: 'Stressz / HPA-tengely', en: 'Stress / HPA axis', pl: 'Stres / oś HPA', d: { hu: 'Kortizol-ritmus normalizálódik, esti relaxáció támogatott.', en: 'Cortisol rhythm normalizes; evening relaxation supported.', pl: 'Rytm kortyzolu się normalizuje.' } },
 ],
 'sexual-skin': [
 { hu: 'Libidó és szexuális funkció', en: 'Libido & sexual function', pl: 'Libido i funkcje seksualne', d: { hu: 'Központi (MC4R) útvonal aktivációja; libidó és funkció javulás.', en: 'Central (MC4R) pathway activation; libido and function improve.', pl: 'Aktywacja szlaku MC4R.' } },
 { hu: 'Bőr-pigmentáció', en: 'Skin pigmentation', pl: 'Pigmentacja skóry', d: { hu: 'Melanin szintézis fokozása (UV-védő, kozmetikai cél).', en: 'Increased melanin synthesis (UV-protection, cosmetic aim).', pl: 'Zwiększona synteza melaniny.' } },
 { hu: 'Kollagén / bőr-rugalmasság', en: 'Collagen / skin elasticity', pl: 'Kolagen / elastyczność', d: { hu: 'Bőr fiatalság-markereinek (kollagén I, III) emelkedése.', en: 'Rises in youth markers (collagen I, III).', pl: 'Wzrost markerów młodości skóry.' } },
 ],
 gi: [
 { hu: 'Gyulladásos bélbetegségek', en: 'Inflammatory bowel disease', pl: 'Zapalne choroby jelit', d: { hu: 'Crohn / colitis ulcerosa tünetcsökkenés, nyálkahártya-regeneráció.', en: 'Crohn / ulcerative colitis symptom reduction; mucosal regeneration.', pl: 'Redukcja objawów Crohna / WZJG.' } },
 { hu: 'Funkcionális emésztési zavar', en: 'Functional GI disorders', pl: 'Funkcjonalne zaburzenia GI', d: { hu: 'IBS / FD tünetek javulása.', en: 'IBS / FD symptom improvement.', pl: 'Poprawa objawów IBS / FD.' } },
 ],
}

// Topic-tag → multilingual generic mechanism phrases. Lets us synthesize
// 2-3 sub-points for study-tag-based accordion groups (when the peptide
// has its own niche research areas beyond its category).
const TOPIC_MECHANISMS = {
 cardio: [
 { t: { hu: 'Kardiomiocita-védelem', en: 'Cardiomyocyte protection', pl: 'Ochrona kardiomiocytów' },
 d: { hu: 'Iszkémia / reperfúziós sérülés után csökkenti az apoptózist és javítja a kontraktilis funkciót.',
 en: 'Reduces apoptosis after ischemia/reperfusion injury and improves contractile function.',
 pl: 'Zmniejsza apoptozę po niedokrwieniu i poprawia funkcję skurczową.' } },
 { t: { hu: 'Endothel-regeneráció', en: 'Endothelial regeneration', pl: 'Regeneracja śródbłonka' },
 d: { hu: 'VEGF-útvonalon keresztül angiogenezist és érfunkció-javulást indukál.',
 en: 'Drives angiogenesis and vascular recovery via the VEGF pathway.',
 pl: 'Indukuje angiogenezę i regenerację naczyń poprzez szlak VEGF.' } },
 { t: { hu: 'Fibrózis-szabályozás', en: 'Fibrosis control', pl: 'Kontrola włóknienia' },
 d: { hu: 'Korlátozza a kollagén-overdeposition-t infarktus utáni remodelling során.',
 en: 'Limits collagen over-deposition during post-infarction remodelling.',
 pl: 'Ogranicza nadmierne odkładanie kolagenu po zawale.' } },
 ],
 neuro: [
 { t: { hu: 'Neuroprotekció', en: 'Neuroprotection', pl: 'Neuroprotekcja' },
 d: { hu: 'Csökkenti az oxidatív stresszt és az excitotoxicitást neuronális sérülés után.',
 en: 'Reduces oxidative stress and excitotoxicity after neuronal injury.',
 pl: 'Zmniejsza stres oksydacyjny i ekscytotoksyczność po urazie neuronów.' } },
 { t: { hu: 'Perifériás idegregeneráció', en: 'Peripheral nerve regeneration', pl: 'Regeneracja nerwów obwodowych' },
 d: { hu: 'Schwann-sejt aktiváció + axon növekedés gyorsítása.',
 en: 'Schwann-cell activation and accelerated axonal growth.',
 pl: 'Aktywacja komórek Schwanna i szybszy wzrost aksonów.' } },
 ],
 derm: [
 { t: { hu: 'Bőr-regeneráció', en: 'Skin regeneration', pl: 'Regeneracja skóry' },
 d: { hu: 'Kollagén I/III szintézis fokozása, sebgyógyulás gyorsítása.',
 en: 'Increased collagen I/III synthesis, faster wound closure.',
 pl: 'Zwiększona synteza kolagenu I/III, szybsze gojenie ran.' } },
 { t: { hu: 'Hajregeneráció', en: 'Hair regeneration', pl: 'Regeneracja włosów' },
 d: { hu: 'Hajhagyma-aktiváció, DHT-mediált miniaturizáció csökkentése.',
 en: 'Hair-follicle activation; reduction of DHT-mediated miniaturization.',
 pl: 'Aktywacja mieszków włosowych; redukcja miniaturyzacji indukowanej DHT.' } },
 ],
 bone: [
 { t: { hu: 'Csontosztoblaszt-aktivitás', en: 'Osteoblast activity', pl: 'Aktywność osteoblastów' },
 d: { hu: 'Csontmátrix-szintézis és mineralizáció támogatása.',
 en: 'Supports bone matrix synthesis and mineralization.',
 pl: 'Wspiera syntezę macierzy kostnej i mineralizację.' } },
 { t: { hu: 'Törésgyógyulás', en: 'Fracture healing', pl: 'Gojenie złamań' },
 d: { hu: 'Kallusz-formáció és újra-érüsülés gyorsítása.',
 en: 'Accelerates callus formation and revascularization.',
 pl: 'Przyspiesza formowanie kostniny i rewaskularyzację.' } },
 ],
 wound: [
 { t: { hu: 'Sebzárás', en: 'Wound closure', pl: 'Zamknięcie rany' },
 d: { hu: 'Sejtvándorlás + epithelializáció felgyorsítása.',
 en: 'Accelerates cell migration and epithelialization.',
 pl: 'Przyspiesza migrację komórek i epitelializację.' } },
 { t: { hu: 'Gyulladás-szabályozás', en: 'Inflammation regulation', pl: 'Regulacja zapalenia' },
 d: { hu: 'Pro-inflammatorikus citokin csökkenés (IL-6, TNF-α).',
 en: 'Reduces pro-inflammatory cytokines (IL-6, TNF-α).',
 pl: 'Redukuje cytokiny prozapalne (IL-6, TNF-α).' } },
 ],
 metabolic: [
 { t: { hu: 'Glükóz-metabolizmus', en: 'Glucose metabolism', pl: 'Metabolizm glukozy' },
 d: { hu: 'Inzulinérzékenység javítása, HbA1c-csökkenés.',
 en: 'Improves insulin sensitivity and lowers HbA1c.',
 pl: 'Poprawia insulinowrażliwość, obniża HbA1c.' } },
 { t: { hu: 'Lipid-szabályozás', en: 'Lipid regulation', pl: 'Regulacja lipidów' },
 d: { hu: 'LDL és triglicerid szintek kedvező változása.',
 en: 'Favorable LDL and triglyceride shifts.',
 pl: 'Korzystne zmiany LDL i trójglicerydów.' } },
 ],
 cognitive: [
 { t: { hu: 'Szinaptikus plaszticitás', en: 'Synaptic plasticity', pl: 'Plastyczność synaptyczna' },
 d: { hu: 'BDNF + LTP-folyamatok támogatása, emlékezet-konszolidáció.',
 en: 'Supports BDNF and LTP processes for memory consolidation.',
 pl: 'Wspiera BDNF i LTP w konsolidacji pamięci.' } },
 { t: { hu: 'Mitochondriális energia', en: 'Mitochondrial energy', pl: 'Energia mitochondrialna' },
 d: { hu: 'ATP-szintézis fenntartása stress alatt.',
 en: 'Maintains ATP synthesis under stress.',
 pl: 'Utrzymuje syntezę ATP pod stresem.' } },
 ],
 immune: [
 { t: { hu: 'T-sejt érés', en: 'T-cell maturation', pl: 'Dojrzewanie T' },
 d: { hu: 'Tymikus érés és adaptív immunkompetencia támogatása.',
 en: 'Supports thymic maturation and adaptive immune competence.',
 pl: 'Wspiera dojrzewanie grasiczych i kompetencję immunologiczną.' } },
 { t: { hu: 'Auto-immun moduláció', en: 'Auto-immune modulation', pl: 'Modulacja autoimmunologiczna' },
 d: { hu: 'Treg-aktiváció + krónikus gyulladás-csökkenés.',
 en: 'Treg activation and reduction of chronic inflammation.',
 pl: 'Aktywacja Treg i redukcja przewlekłego zapalenia.' } },
 ],
 gi: [
 { t: { hu: 'Nyálkahártya-regeneráció', en: 'Mucosal regeneration', pl: 'Regeneracja błony śluzowej' },
 d: { hu: 'Epitél-sejt megújulás + szoros kapcsolatok helyreállítása.',
 en: 'Epithelial renewal and tight-junction restoration.',
 pl: 'Odnowa nabłonka i odbudowa połączeń ścisłych.' } },
 { t: { hu: 'GI-mikrobiom hatás', en: 'GI microbiome effect', pl: 'Wpływ na mikrobiom GI' },
 d: { hu: 'Anti-inflammatorikus, mikrobiom-barát profil.',
 en: 'Anti-inflammatory, microbiome-friendly profile.',
 pl: 'Profil przeciwzapalny, przyjazny dla mikrobiomu.' } },
 ],
 hormone: [
 { t: { hu: 'Pulzatív GH-felszabadulás', en: 'Pulsatile GH release', pl: 'Pulsacyjne uwalnianie GH' },
 d: { hu: 'Fiziológiás GH-pulzus utánzása, IGF-1 emelkedés.',
 en: 'Mimics physiological GH pulse; IGF-1 rises.',
 pl: 'Naśladuje fizjologiczny puls GH; IGF-1 rośnie.' } },
 { t: { hu: 'Anabolikus moduláció', en: 'Anabolic modulation', pl: 'Modulacja anaboliczna' },
 d: { hu: 'Izomfehérje-szintézis + lipolízis támogatása.',
 en: 'Supports muscle protein synthesis and lipolysis.',
 pl: 'Wspiera syntezę białek mięśniowych i lipolizę.' } },
 ],
 pep: [
 { t: { hu: 'Aktuális szakirodalom', en: 'Current literature', pl: 'Aktualna literatura' },
 d: { hu: 'Friss meta-elemzések és klinikai esettanulmányok összegzése.',
 en: 'Summary of recent meta-analyses and clinical case studies.',
 pl: 'Podsumowanie aktualnych metaanaliz i opisów przypadków.' } },
 ],
}

// Map a study tag to a topic key, using HU/EN/PL fragments.
function tagToTopic(tagText) {
 const t = tagText.toLowerCase()
 if (/kardio|cardio|serce|infar|szív|heart/.test(t)) return 'cardio'
 if (/neuro|ideg|nerve|mózg|brain|cognit/.test(t)) return 'neuro'
 if (/bőr|skin|haj|hair|derm|skór|włos/.test(t)) return 'derm'
 if (/csont|bone|frakt|fract|złam/.test(t)) return 'bone'
 if (/seb|wound|tendon|ín|izom|muscle|ścięg|mięś|regener/.test(t)) return 'wound'
 if (/glüko|gluk|lipid|metabol|cukor|insul|hba1c/.test(t)) return 'metabolic'
 if (/memó|memory|tanul|learn|nootróp|nootrop/.test(t)) return 'cognitive'
 if (/immun|t-sejt|t cell|nk|inflamm/.test(t)) return 'immune'
 if (/gi|bél|gut|mucos|nyálk|jelit|stomach/.test(t)) return 'gi'
 if (/gh|growth|hormon|igf/.test(t)) return 'hormone'
 if (/pep-pedia|literatúra|literature|review/.test(t)) return 'pep'
 return null
}

// Build indication groups from study tags, one accordion entry per
// unique topic (collapsed across studies that match the same topic).
function deriveIndicationGroupsFromStudies(peptide, excludeLabels) {
 if (!Array.isArray(peptide.studies)) return []
 const buckets = new Map()
 peptide.studies.forEach(s => {
 const tagText = (typeof s.tag === 'string' ? s.tag : trAny(s.tag)) || ''
 if (!tagText) return
 const topic = tagToTopic(tagText)
 if (!topic) return
 if (!buckets.has(topic)) buckets.set(topic, { tag: s.tag, color: s.tagText, studies: [] })
 buckets.get(topic).studies.push(s)
 })
 const accentByTopic = {
 cardio: '#fda4af', neuro: '#67e8f9', derm: '#f9a8d4', bone: '#fcd34d',
 wound: '#34d399', metabolic: '#fb923c', cognitive: '#22d3ee',
 immune: '#5eead4', gi: '#fdba74', hormone: '#a78bfa', pep: '#c4b5fd',
 }
 const out = []
 for (const [topic, b] of buckets) {
 // Build sub-items: 1-2 study findings + 1-2 mechanism phrases for that topic
 const studyItems = b.studies.slice(0, 2).map(s => ({
 title: s.tag || { hu: '-', en: '-', pl: '-' },
 desc: s.finding || (typeof s.title === 'string' ? { hu: s.title, en: s.title, pl: s.title } : (s.title || { hu: '', en: '', pl: '' })),
 })).filter(it => trAny(it.desc))
 const mechs = TOPIC_MECHANISMS[topic] || []
 const mechItems = mechs.slice(0, Math.max(0, 3 - studyItems.length)).map(m => ({
 title: m.t, desc: m.d,
 }))
 const items = [...studyItems, ...mechItems]
 if (items.length === 0) continue
 const label = b.tag && typeof b.tag === 'object' ? b.tag : { hu: trAny(b.tag) || topic, en: trAny(b.tag) || topic, pl: trAny(b.tag) || topic }
 // Skip if this label is already represented by a category-based group
 const labelLower = trAny(label).toLowerCase()
 const isDup = excludeLabels.some(lbl => {
 const llow = lbl.toLowerCase()
 return llow.includes(labelLower) || labelLower.includes(llow)
 })
 if (isDup) continue
 out.push({
 id: `topic-${topic}`,
 label,
 accent: b.color || accentByTopic[topic] || '#a78bfa',
 items,
 })
 }
 return out
}

function deriveIndications(peptide, categoryIds, library) {
 const fromCategories = categoryIds
 .map(id => {
 const cat = library.categories.find(c => c.id === id)
 const items = CATEGORY_INDICATIONS[id] || []
 if (!cat || !items.length) return null
 return {
 id,
 label: cat.label,
 accent: cat.accent,
 items: items.map(it => ({
 title: { hu: it.hu, en: it.en, pl: it.pl },
 desc: it.d,
 })),
 }
 })
 .filter(Boolean)
 const excludeLabels = fromCategories.flatMap(g => [g.label?.hu, g.label?.en, g.label?.pl].filter(Boolean))
 const fromStudies = deriveIndicationGroupsFromStudies(peptide, excludeLabels)
 // Cap at 6 groups total
 return [...fromCategories, ...fromStudies].slice(0, 6)
}

// Extended descriptive paragraphs, split full description into intro + body.
function deriveWhatIs(peptide) {
 if (!peptide.description) return null
 // Use the full description; the live data is already comprehensive.
 return peptide.description
}

export function adaptLibraryEntry(entry, library) {
 const peptide = entry
 if (!peptide) return null
 const tier = library.getResearchLevel(peptide)
 const meta = getLevelMeta(tier)
 const categoryIds = (library.entryCategoryMap[peptide.id] || [])
 const primary = categoryIds[0]
 const primaryCat = primary ? library.categories.find(c => c.id === primary) : null

 const related = deriveRelated(peptide, categoryIds, library)

 return {
 id: peptide.id,
 name: peptide.name,
 fullName: peptide.fullName || peptide.name,
 synonyms: peptide.synonyms || [],
 image: peptide.image,
 accentColor: peptide.accentColor,
 tier,
 tierLabel: meta.label,
 category: primaryCat ? primaryCat.label : { hu: '-', en: '-', pl: '-' },
 oneLiner: extractOneLiner(peptide),
 keyFacts: peptide.keyInfo || [],
 quickStart: deriveQuickStart(peptide, library),
 keyBenefits: deriveKeyBenefits(peptide, library),
 whatIs: deriveWhatIs(peptide),
 mechanism: deriveMechanism(peptide),
 researchUses: deriveResearchUses(peptide, library),
 molecular: deriveMolecular(peptide),
 dosing: deriveDosing(peptide),
 stacks: [],
 sideEffects: [],
 contraindications: [],
 studies: deriveStudies(peptide),
 faqs: [],
 relatedIds: [],
 legalStatus: deriveLegalStatus(peptide, tier),
 // Default calculator pre-fills come straight from the peptide
 miniCalc: {
 vialMg: peptide.defaultVialMg,
 bacMl: peptide.defaultBacMl,
 doseMcg: peptide.defaultDoseMcg,
 },
 // ─── v2-only enriched fields (v1 ignores these) ──────────────────
 indications: deriveIndications(peptide, categoryIds, library),
 safetyProfile: deriveSafetyProfile(peptide, categoryIds),
 interactions: deriveInteractions(peptide, categoryIds, related),
 reconstitute: deriveReconstitute(peptide, library),
 qualityIndicators: deriveQualityIndicators(),
 expectations: deriveExpectations(peptide, categoryIds),
 related,
 faqList: deriveFaqs(peptide, tier),
 citations: deriveCitations(peptide),
 // ─── Phase 5 passthrough: structured bloodwork + per-entry dose helper ───
 bloodwork: peptide.bloodwork || null,
 doseCalc: peptide.doseCalc || null,
 }
}
