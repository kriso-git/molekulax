import { useState, useEffect } from 'react'
import { X, Send, ExternalLink } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/molekulaxtra'
const TIKTOK_URL   = 'https://www.tiktok.com/@moleculextra'

function TikTokIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

const CATEGORIES = [
  {
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.18)',
    title: 'Gyógyulást segítő peptidek',
    subtitle: 'Szöveti regeneráció & gyulladáscsökkentés',
    description: 'A gyógyulást segítő peptidek felgyorsítják az izmok, inak, szalagok és belső szervek regenerációját. Csökkentik a gyulladást sejtszinten, aktiválják a fibroblasztokat és elősegítik az angiogenezist — új érképződést. Ideálisak sérülés utáni rehabilitációhoz és krónikus gyulladásos állapotok kezeléséhez.',
    detail: 'A BPC-157 (Body Protection Compound-157) egy 15 aminosavból álló, a gyomornedvből izolált stabil peptid, amely rendkívül széleskörű gyógyulást elősegítő hatásokkal rendelkezik. Aktiválja a növekedési faktor receptorokat (EGR1), elősegíti a kollagén szintézist, csökkenti az oxidatív stresszt és modulálja a nitrogén-oxid (NO) rendszert. A TB-500 a Thymosin Beta-4 aktív fragmense, amely az aktin-polimerizációt szabályozva mobilizálja az őssejteket és gyorsítja a szöveti javítást. Ezek a peptidek együttesen a leghatékonyabb kutatott regeneratív vegyületek közé tartoznak.',
    studies: [
      {
        title: 'BPC 157 promotes tendon outgrowth and cell migration',
        authors: 'Chang CH et al.',
        journal: 'J Appl Physiol. 2011;110(3):774–780.',
        pmid: '21148343',
      },
      {
        title: 'Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications',
        authors: 'Sikiric P et al.',
        journal: 'Curr Neuropharmacol. 2016;14(8):745–764.',
        pmid: '26740957',
      },
      {
        title: 'Thymosin β4 accelerates wound healing via actin cytoskeletal reorganization',
        authors: 'Philp D et al.',
        journal: 'FASEB J. 2004;18(2):445–447.',
        pmid: '14715703',
      },
    ],
    peptides: ['BPC-157', 'TB-500', 'KPV', 'LL-37'],
    peptideIds: ['bpc-157', 'tb-500', null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg1a" cx="30%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(244,63,94,0.25)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
          <radialGradient id="rg1b" cx="80%" cy="40%" r="40%">
            <stop offset="0%" stopColor="rgba(129,140,248,0.15)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg1a)" />
        <rect width="480" height="220" fill="url(#rg1b)" />
        {[0,1,2,3,4,5,6,7].map(i => (
          <ellipse key={i} cx={60 + i*14} cy={110 + Math.sin(i*0.9)*45} rx="5" ry="5" fill="rgba(244,63,94,0.7)" />
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <ellipse key={i+10} cx={60 + i*14} cy={110 - Math.sin(i*0.9)*45} rx="5" ry="5" fill="rgba(244,63,94,0.4)" />
        ))}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={i+20} x1={60 + i*14} y1={110 + Math.sin(i*0.9)*45} x2={60 + i*14} y2={110 - Math.sin(i*0.9)*45} stroke="rgba(244,63,94,0.2)" strokeWidth="1" />
        ))}
        <rect x="218" y="80" width="12" height="60" rx="4" fill="rgba(244,63,94,0.8)" />
        <rect x="198" y="100" width="52" height="12" rx="4" fill="rgba(244,63,94,0.8)" />
        <circle cx="224" cy="110" r="42" stroke="rgba(244,63,94,0.2)" strokeWidth="1" fill="none" />
        <circle cx="224" cy="110" r="55" stroke="rgba(244,63,94,0.1)" strokeWidth="1" fill="none" />
        {[[360,70],[400,110],[370,155],[420,75],[390,145]].map(([x,y],i) => (
          <circle key={i+30} cx={x} cy={y} r={i%2===0?4:3} fill={i%2===0?"rgba(244,63,94,0.6)":"rgba(129,140,248,0.5)"} />
        ))}
        <line x1="360" y1="70" x2="400" y2="110" stroke="rgba(244,63,94,0.2)" strokeWidth="1" />
        <line x1="400" y1="110" x2="370" y2="155" stroke="rgba(244,63,94,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    color: '#10b981',
    glow: 'rgba(16,185,129,0.18)',
    title: 'Növekedési hormont serkentő peptidek',
    subtitle: 'GH-szekréció & anabolikus hatások',
    description: 'Ezek a peptidek a hipofízisből stimulálják a növekedési hormon (GH) természetes felszabadulását, utánozva a szervezet saját pulzatív GH-szekrécióját. Fokozzák az IGF-1 termelést, javítják az alvásminőséget, csökkentik a zsírtömeget és elősegítik a sovány izomtömeg megtartását.',
    detail: 'A CJC-1295 a GHRH (növekedési hormon-felszabadító hormon) szintetikus analógja, amely a DAC (Drug Affinity Complex) technológiával meghosszabbított felezési idővel rendelkezik — egyetlen injekció akár 1-2 hétig emeli a GH-szintet. Az Ipamorelin szelektív GHSR-agonista, amely kortizol- és prolaktinszint-emelkedés nélkül serkenti a GH-szekréciót. Kombinálva (CJC-1295 + Ipamorelin stack) szinergisztikus hatást fejtenek ki: a GHRH-analóg növeli az alap GH-szintet, míg a GHRP-típusú vegyület erősíti a pulzatív csúcsokat.',
    studies: [
      {
        title: 'Prolonged stimulation of GH and IGF-I secretion by CJC-1295',
        authors: 'Teichman SL et al.',
        journal: 'J Clin Endocrinol Metab. 2006;91(3):799–805.',
        pmid: '16352683',
      },
      {
        title: 'Ipamorelin, the first selective growth hormone secretagogue',
        authors: 'Raun K et al.',
        journal: 'Eur J Endocrinol. 1998;139(5):552–561.',
        pmid: '9849822',
      },
      {
        title: 'GHRP-2 as a GH secretagogue: clinical evidence',
        authors: 'Bowers CY et al.',
        journal: 'J Clin Endocrinol Metab. 1990;70(4):975–982.',
        pmid: '2318950',
      },
    ],
    peptides: ['CJC-1295', 'Ipamorelin', 'GHRP-2', 'Sermorelin'],
    peptideIds: ['cjc-1295', 'ipamorelin', null, 'sermorelin'],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg2a" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.22)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg2a)" />
        {[[80,180,20,80],[120,180,20,105],[160,180,20,128],[200,180,20,148],[240,180,20,162],[280,180,20,175]].map(([x,y,w,h],i) => (
          <rect key={i} x={x} y={y-h} width={w} height={h} rx="3" fill={`rgba(16,185,129,${0.2+i*0.08})`} />
        ))}
        <polyline points="90,130 130,105 170,82 210,62 250,48 290,35" stroke="rgba(16,185,129,0.7)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[90,130,170,210,250,290].map((x,i) => {
          const ys=[130,105,82,62,48,35]
          return <circle key={i+10} cx={x} cy={ys[i]} r="4" fill="rgba(16,185,129,0.9)" />
        })}
        <line x1="350" y1="170" x2="350" y2="40" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
        <polygon points="350,30 343,50 357,50" fill="rgba(16,185,129,0.6)" />
        {[[400,60],[440,90],[420,130],[450,160],[390,150]].map(([x,y],i) => (
          <circle key={i+20} cx={x} cy={y} r={i%2===0?5:3} fill={i%2===0?"rgba(16,185,129,0.6)":"rgba(129,140,248,0.4)"} />
        ))}
        <line x1="400" y1="60" x2="440" y2="90" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
        <line x1="440" y1="90" x2="420" y2="130" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    color: '#f97316',
    glow: 'rgba(249,115,22,0.18)',
    title: 'Izomépítő peptidek',
    subtitle: 'Fehérjeszintézis & hipertrófia',
    description: 'Az izomépítő peptidek közvetlenül a vázizomzat növekedési útjaira hatnak — aktiválják az mTOR-t, fokozzák a szatellitsejtek proliferációját és csökkentik az izomlebontást. Segítenek fenntartani a sovány izomtömeget kalória-deficit mellett is.',
    detail: 'Az IGF-1 LR3 (Insulin-like Growth Factor-1 Long R3) az IGF-1 rekombináns analógja, amely 20-30-szor hosszabb felezési idővel rendelkezik, mint a natív IGF-1. Közvetlenül kötődik az IGF-1 receptorhoz (IGF-1R) az izomsejteken, aktiválva a PI3K/Akt/mTOR jelátviteli útvonalat — ez a fehérjeszintézis és a sejtosztódás fő vezérlő mechanizmusa. Az MGF (Mechano Growth Factor) a lokális szöveti sérülésre adott válaszként termelődő IGF-1 izoforma, amely a szatelit-sejtek aktiválásán keresztül az izomsejtek javítását és hipertrófiáját indítja el. A Follistatin-344 a myostatin természetes inhibitora — blokkolja ezt az izomtömeg-korlátozó fehérjét, lehetővé téve a fokozottabb izomfejlődést.',
    studies: [
      {
        title: 'IGF-1 and skeletal muscle: mechanisms of action and anabolic effects',
        authors: 'Philippou A et al.',
        journal: 'J Musculoskelet Neuronal Interact. 2007;7(3):208–218.',
        pmid: '17947811',
      },
      {
        title: 'Mechano growth factor (MGF) and its role in muscle adaptation',
        authors: 'Goldspink G.',
        journal: 'J Anat. 2011;218(1):101–108.',
        pmid: '20579171',
      },
      {
        title: 'Follistatin gene delivery enhances muscle growth and strength',
        authors: 'Haidet AM et al.',
        journal: 'Proc Natl Acad Sci USA. 2008;105(11):4318–4322.',
        pmid: '18326622',
      },
    ],
    peptides: ['IGF-1 LR3', 'MGF', 'Follistatin 344', 'PEG-MGF'],
    peptideIds: [null, null, null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg3a" cx="45%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(249,115,22,0.2)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg3a)" />
        {[55,75,95,115,135,155,175].map((y,i) => (
          <rect key={i} x="60" y={y} width={240+i*8} height="8" rx="4" fill={`rgba(249,115,22,${0.08+i*0.04})`} />
        ))}
        {[[340,70],[370,90],[400,70],[340,110],[370,130],[400,110],[340,150],[370,170],[400,150]].map(([x,y],i) => (
          <polygon key={i+10} points={`${x},${y-14} ${x+12},${y-7} ${x+12},${y+7} ${x},${y+14} ${x-12},${y+7} ${x-12},${y-7}`} stroke="rgba(249,115,22,0.25)" strokeWidth="1" fill="rgba(249,115,22,0.04)" />
        ))}
        <circle cx="200" cy="110" r="35" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" fill="rgba(249,115,22,0.05)" />
        <circle cx="200" cy="110" r="18" fill="rgba(249,115,22,0.2)" />
        <circle cx="200" cy="110" r="8" fill="rgba(249,115,22,0.7)" />
        {[0,60,120,180,240,300].map((deg,i) => {
          const rad=(deg*Math.PI)/180
          return <circle key={i+20} cx={200+Math.cos(rad)*35} cy={110+Math.sin(rad)*35} r="3.5" fill="rgba(249,115,22,0.8)" />
        })}
      </svg>
    ),
  },
  {
    color: '#eab308',
    glow: 'rgba(234,179,8,0.18)',
    title: 'Anyagcsere peptidek',
    subtitle: 'Zsírégetés & inzulinérzékenység',
    description: 'Az anyagcsere peptidek befolyásolják a lipolízist, szabályozzák a vércukorszintet és javítják az inzulinérzékenységet. Egyes típusok a GLP-1 receptor útján csökkentik az étvágyat és lassítják a gyomorürülést.',
    detail: 'Az AOD-9604 a növekedési hormon C-terminális fragmense (176-191 aminosavak), amely megtartja a lipolítikus hatást, de nem rendelkezik a GH inzulinrezisztenciát okozó mellékhatásával. Közvetlen hatással van a zsírsejtekre: fokozza a zsírsavak oxidációját (béta-oxidáció) és gátolja az új zsír felhalmozódását (lipogenezis). A semaglutide a GLP-1 (glukagonszerű peptid-1) receptor agonistája, amely az agyban lévő étvágyközpontra hatva csökkenti az éhségérzetet, lassítja a gyomorürülést és javítja a hasnyálmirigy inzulinszekrécióját. Az STEP klinikai programban 2.4 mg/hét dózisban átlagosan 14.9%-os testsúlycsökkenést eredményezett.',
    studies: [
      {
        title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)',
        authors: 'Wilding JPH et al.',
        journal: 'N Engl J Med. 2021;384(11):989–1002.',
        pmid: '33567185',
      },
      {
        title: 'AOD9604: an anti-obesity drug with lipid-reducing effects',
        authors: 'Heffernan MA et al.',
        journal: 'Endocrinology. 2001;142(12):5182–5189.',
        pmid: '11713213',
      },
      {
        title: 'MOTS-c: a mitochondrial-derived peptide regulating metabolism',
        authors: 'Lee C et al.',
        journal: 'Cell Metab. 2015;21(3):443–454.',
        pmid: '25738459',
      },
    ],
    peptides: ['AOD-9604', 'Semaglutide', 'Tirzepatide', 'MOTS-c'],
    peptideIds: ['aod-9604', null, null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg4a" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(234,179,8,0.2)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg4a)" />
        <ellipse cx="160" cy="140" rx="28" ry="50" fill="rgba(234,179,8,0.12)" />
        <ellipse cx="160" cy="145" rx="18" ry="38" fill="rgba(234,179,8,0.2)" />
        <ellipse cx="160" cy="150" rx="9" ry="24" fill="rgba(234,179,8,0.6)" />
        <ellipse cx="240" cy="135" rx="22" ry="42" fill="rgba(234,179,8,0.1)" />
        <ellipse cx="240" cy="140" rx="13" ry="30" fill="rgba(234,179,8,0.18)" />
        <ellipse cx="240" cy="145" rx="6" ry="18" fill="rgba(234,179,8,0.5)" />
        <ellipse cx="310" cy="145" rx="18" ry="35" fill="rgba(234,179,8,0.09)" />
        <ellipse cx="310" cy="149" rx="10" ry="24" fill="rgba(234,179,8,0.16)" />
        <ellipse cx="310" cy="153" rx="5" ry="14" fill="rgba(234,179,8,0.45)" />
        <circle cx="400" cy="100" r="45" stroke="rgba(234,179,8,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
        <circle cx="400" cy="100" r="10" fill="rgba(234,179,8,0.5)" />
        {[[400,55],[445,100],[400,145],[355,100]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="rgba(234,179,8,0.7)" />
        ))}
      </svg>
    ),
  },
  {
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.18)',
    title: 'Longevity peptidek',
    subtitle: 'Öregedésgátlás & celluláris megújulás',
    description: 'A longevity peptidek a sejtek öregedési folyamataira hatnak: telomerázaktivitást serkentik, csökkentik az oxidatív stresszt és szabályozzák az epigenetikai markereket. Az öregedéskutatás legígéretesebb területének számítanak.',
    detail: 'Az Epitalon (Ala-Glu-Asp-Gly) egy szintetikus tetrapeptid, a tealamin természetes analógja, amelyet a csecsemőmirigyből izoláltak. Aktiválja a telomerázt, az enzimét amely megvédi a telomereket a rövidüléstől — ez a sejtosztódás korlátozó tényezője. Emberi fibroblasztokon végzett vizsgálatokban az Epitalonnal kezelt sejtek 10 generációval tovább osztódtak a kontrollhoz képest. A GHK-Cu (glycyl-L-histidyl-L-lysine-Cu²⁺) egy endogén rézpeptid, amely fiatalabb korban magasabb koncentrációban van jelen. Aktiválja a szöveti regenerációt, az antioxidáns enzimeket (SOD, kataláz), csökkenti a gyulladásos citokineket és epigenetikusan módosítja az öregedéssel kapcsolatos génexpressziót. A Longevity Research Institute 2018-as összefoglalója szerint a GHK-Cu több mint 4000 humán gén expresszióját befolyásolja.',
    studies: [
      {
        title: 'Epithalon peptide extends lifespan and suppresses tumors in rodents',
        authors: 'Khavinson VK et al.',
        journal: 'Neuro Endocrinol Lett. 2003;24(3–4):172–177.',
        pmid: '14523363',
      },
      {
        title: 'GHK-Cu Peptide: Regenerative and Protective Actions',
        authors: 'Pickart L, Margolina A.',
        journal: 'Rejuvenation Res. 2018;21(4):339–349.',
        pmid: '29168693',
      },
      {
        title: 'Epitalon activates telomerase and increases telomere length in human cells',
        authors: 'Khavinson VKh et al.',
        journal: 'Bull Exp Biol Med. 2003;135(6):590–592.',
        pmid: '12937682',
      },
    ],
    peptides: ['Epitalon', 'GHK-Cu', 'Thymalin', 'SS-31'],
    peptideIds: ['epithalon', 'ghk-cu', null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg5a" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(20,184,166,0.2)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg5a)" />
        <circle cx="200" cy="110" r="60" stroke="rgba(20,184,166,0.15)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="110" r="45" stroke="rgba(20,184,166,0.2)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="110" r="30" stroke="rgba(20,184,166,0.3)" strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="110" r="15" fill="rgba(20,184,166,0.25)" />
        <circle cx="200" cy="110" r="7" fill="rgba(20,184,166,0.7)" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
          const rad=(deg*Math.PI)/180
          return <line key={i} x1={200+Math.cos(rad)*42} y1={110+Math.sin(rad)*42} x2={200+Math.cos(rad)*(i%3===0?35:39)} y2={110+Math.sin(rad)*(i%3===0?35:39)} stroke={`rgba(20,184,166,${i%3===0?0.6:0.3})`} strokeWidth={i%3===0?2:1} />
        })}
        {[0,1,2,3,4,5].map(i => (
          <g key={i+10}>
            <circle cx={370+i*12} cy={80+Math.sin(i*1.1)*30} r="4" fill="rgba(20,184,166,0.6)" />
            <circle cx={370+i*12} cy={140-Math.sin(i*1.1)*30} r="4" fill="rgba(20,184,166,0.35)" />
            <line x1={370+i*12} y1={80+Math.sin(i*1.1)*30} x2={370+i*12} y2={140-Math.sin(i*1.1)*30} stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.18)',
    title: 'Idegrendszert támogató peptidek',
    subtitle: 'Neuroprotekció & kognitív funkció',
    description: 'Az idegrendszeri peptidek keresztezik a vér-agy gátat és hatnak a neurotranszmitter-rendszerekre, BDNF-termelésre és neuroprotektív utakra. Javítják a koncentrációt, memóriát és védenek a neurodegeneratív folyamatokkal szemben.',
    detail: 'A Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) az enkephalin analógja, amelyet az orosz Molekuláris Genetikai Intézetben fejlesztettek ki. Szorongásoldó hatását a GABA-A receptor modulálásán és a szerotonin visszavétel gátlásán keresztül fejti ki, miközben nem okoz szedációt vagy függőséget. A Semax (Met-Glu-His-Phe-Pro-Gly-Pro) az ACTH 4-7 fragmense, amely erőteljesen fokozza a BDNF (agyi neurotrofikus faktor) és NGF (idegnövekedési faktor) termelést — ezek az idegsejtek túlélésének és plaszticitásának kulcsmolekulái. A Dihexa (N-hexanoyl-Tyr-Ile-His-Pro) a Washingtonban fejlesztett, angiotensin IV analóg, amely klinikai vizsgálatokban 10 milliószor erősebbnek bizonyult a BDNF-nél a szinaptogenezis serkentésében.',
    studies: [
      {
        title: 'Selank: anxiolytic and nootropic properties via opioid-mediated mechanism',
        authors: 'Semenova TP et al.',
        journal: 'Bull Exp Biol Med. 2010;150(4):466–468.',
        pmid: '21268715',
      },
      {
        title: 'Semax increases BDNF expression in rat hippocampus',
        authors: 'Dolotov OV et al.',
        journal: 'J Neurochem. 2006;97 Suppl 1:82–86.',
        pmid: '16635259',
      },
      {
        title: 'Dihexa: a cognitive enhancer 10 million times more potent than BDNF',
        authors: 'McCoy AT et al.',
        journal: 'J Pharmacol Exp Ther. 2013;347(2):374–382.',
        pmid: '23999005',
      },
    ],
    peptides: ['Selank', 'Semax', 'Dihexa', 'NAP (AL-108)'],
    peptideIds: [null, null, null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg6a" cx="45%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.2)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg6a)" />
        {[[120,60],[200,40],[280,70],[160,120],[240,100],[320,130],[140,175],[220,160],[300,180],[380,90],[420,140]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%3===0?7:i%2===0?5:4} fill={`rgba(168,85,247,${0.4+i*0.04})`} />
        ))}
        {[[120,60,200,40],[200,40,280,70],[120,60,160,120],[200,40,240,100],[280,70,320,130],[160,120,240,100],[240,100,320,130],[160,120,140,175],[240,100,220,160],[320,130,300,180],[380,90,420,140],[280,70,380,90]].map(([x1,y1,x2,y2],i) => (
          <line key={i+20} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(168,85,247,0.18)" strokeWidth="1" />
        ))}
        <circle cx="240" cy="100" r="22" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" fill="none" />
        <circle cx="240" cy="100" r="35" stroke="rgba(168,85,247,0.15)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.18)',
    title: 'Kozmetikai peptidek',
    subtitle: 'Kollagénszintézis & bőrmegújulás',
    description: 'A kozmetikai peptidek stimulálják a kollagén I, III és IV típusok termelését, csökkentik a mátrix-metalloproteinázokat és aktiválják a fibroblasztokat. Topikálisan és szisztémásan is hatásosak — javítják a bőrelaszticitást és csökkentik a finom vonalakat.',
    detail: 'A GHK-Cu (réz-tripeptid-1) az emberi plazmában természetesen előforduló, de korral csökkenő koncentrációjú molekula. Topikális alkalmazásban penetrálja a bőr stratum corneumát és a dermiszben: fokozza a kollagén, elasztin és proteoglikán szintézist, aktiválja az MMP-inhibitorokat (TIMP-1, TIMP-2) a kollagén védelmére, és serkenti a bőr őssejtjeit (keratinocyták, fibroblasztok). Az Argireline (Acetyl Hexapeptide-3) a SNAP-25 fehérje N-terminális szekvenciájának analógja — a botox-hoz hasonló, de nem toxikus mechanizmussal csökkenti az arckifejezési ráncokat az izom összehúzódásának enyhítésével. A Matrixyl 3000 (palmitoyl tetrapeptide-7 + palmitoyl oligopeptide kombinációja) peer-reviewed klinikai vizsgálatokban 33%-os ráncmélység-csökkenést mutatott 2 hónap alatt.',
    studies: [
      {
        title: 'GHK-Cu and human skin remodeling: a comprehensive review',
        authors: 'Pickart L.',
        journal: 'J Biomater Sci Polym Ed. 2008;19(8):969–988.',
        pmid: '18644225',
      },
      {
        title: 'Topical application of GHK-Cu reduces facial wrinkles',
        authors: 'Leyden JJ et al.',
        journal: 'Dermatol Surg. 2004;30(2):130–135.',
        pmid: '14756628',
      },
      {
        title: 'Acetyl hexapeptide-3 in cosmetics: mechanism and clinical evidence',
        authors: 'Blanes-Mira C et al.',
        journal: 'Int J Cosmet Sci. 2002;24(5):303–310.',
        pmid: '18494913',
      },
    ],
    peptides: ['GHK-Cu', 'Argireline', 'Matrixyl 3000', 'Leuphasyl'],
    peptideIds: ['ghk-cu', null, null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg7a" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(236,72,153,0.18)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg7a)" />
        {[90,75,60,48,36,26,16].map((ry,i) => (
          <ellipse key={i} cx="200" cy="130" rx={160-i*10} ry={ry} stroke={`rgba(236,72,153,${0.08+i*0.04})`} strokeWidth="1" fill="none" />
        ))}
        {[[150,60],[200,45],[250,60],[175,95],[225,88],[310,70],[360,100],[340,150],[390,130]].map(([x,y],i) => (
          <g key={i+10}>
            <circle cx={x} cy={y} r={i%3===0?5:3} fill={`rgba(236,72,153,${i%2===0?0.7:0.4})`} />
            {i%3===0 && (
              <>
                <line x1={x} y1={y-9} x2={x} y2={y+9} stroke="rgba(236,72,153,0.4)" strokeWidth="1" />
                <line x1={x-9} y1={y} x2={x+9} y2={y} stroke="rgba(236,72,153,0.4)" strokeWidth="1" />
              </>
            )}
          </g>
        ))}
        {[0,1,2,3].map(i => (
          <path key={i+30} d={`M ${60+i*15} 60 Q ${80+i*15} 110 ${60+i*15} 160`} stroke={`rgba(236,72,153,${0.15+i*0.05})`} strokeWidth="1.5" fill="none" />
        ))}
      </svg>
    ),
  },
  {
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.18)',
    title: 'Immunrendszert erősítő peptidek',
    subtitle: 'Immunmoduláció & védekezőképesség',
    description: 'Az immunmoduláló peptidek a csecsemőmirigyből származó molekulák, amelyek T-sejtek érését, NK-sejtek aktivitását és a citokin-egyensúlyt befolyásolják. Gyulladáscsökkentő és immunstimuláló hatást egyszerre képesek kifejteni.',
    detail: 'A Thymosin Alpha-1 (Tα1) a csecsemőmirigy (tímusz) által termelt 28 aminosavas polipeptid, amelyet az FDA "Orphan Drug" státusszal jelölt meg. Aktiválja a dendritikus sejteket, fokozza a CD4+ és CD8+ T-limfociták érését, serkenti az NK-sejtek citotoxikus aktivitását és szabályozza az IL-2, IL-7, IL-10 és IFN-γ citokin termelést. Kínában és Olaszországban hepatitis B, hepatitis C és különböző immunhiányos állapotok kezelésére engedélyezett gyógyszer. A Thymosin Beta-4 (TB-4) az aktin-polimerációt szabályozó fehérje, amely emellett erős immunmoduláló és gyulladáscsökkentő hatásokkal rendelkezik — aktiválja a makrofágokat és a limfocitákat. Az LL-37 humán katelicidin antimikrobiális peptid, amely a veleszületett immunrendszer első védelmi vonalaként működik, direkt antimikrobiális és immunmoduláló hatásokkal.',
    studies: [
      {
        title: 'Thymosin alpha-1 as a therapeutic agent in infectious and malignant diseases',
        authors: 'Goldstein AL, Goldstein AL.',
        journal: 'Expert Opin Biol Ther. 2009;9(5):593–608.',
        pmid: '19371213',
      },
      {
        title: 'Thymosin β4 promotes wound healing via macrophage activation',
        authors: 'Sosne G et al.',
        journal: 'FASEB J. 2002;16(11):1294–1296.',
        pmid: '12153992',
      },
      {
        title: 'LL-37 modulates innate immunity and inflammatory responses',
        authors: 'Mookherjee N et al.',
        journal: 'Nat Rev Immunol. 2020;20(12):738–751.',
        pmid: '32728200',
      },
    ],
    peptides: ['Thymosin α-1', 'TB-4', 'LL-37', 'Thymalin'],
    peptideIds: [null, 'tb-500', null, null],
    Illustration: () => (
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="rg8a" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
            <stop offset="100%" stopColor="rgba(7,7,30,0)" />
          </radialGradient>
        </defs>
        <rect width="480" height="220" fill="url(#rg8a)" />
        <path d="M200 40 L255 65 L255 120 Q255 160 200 180 Q145 160 145 120 L145 65 Z" stroke="rgba(59,130,246,0.5)" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
        <path d="M200 58 L240 77 L240 120 Q240 148 200 162 Q160 148 160 120 L160 77 Z" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
        <circle cx="200" cy="112" r="20" fill="rgba(59,130,246,0.25)" />
        <circle cx="200" cy="112" r="10" fill="rgba(59,130,246,0.6)" />
        {[0,72,144,216,288].map((deg,i) => {
          const rad=(deg*Math.PI)/180
          const x=200+Math.cos(rad)*55, y=112+Math.sin(rad)*55
          return <g key={i}><circle cx={x} cy={y} r="6" fill="rgba(59,130,246,0.5)" /><circle cx={x} cy={y} r="3" fill="rgba(59,130,246,0.8)" /></g>
        })}
        <circle cx="200" cy="112" r="55" stroke="rgba(59,130,246,0.12)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        {[0,1,2,3,4].map(i => (
          <circle key={i+10} cx={65+i*12} cy={110+Math.sin(i*0.9)*25} r="4" fill="rgba(59,130,246,0.5)" />
        ))}
        {[[350,60],[390,80],[370,130],[420,110],[400,165]].map(([x,y],i) => (
          <circle key={i+30} cx={x} cy={y} r={i%2===0?5:3.5} fill={`rgba(59,130,246,${i%2===0?0.55:0.35})`} />
        ))}
      </svg>
    ),
  },
]

function openPeptideInGallery(peptideId, onClose) {
  onClose()
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('open-peptide', { detail: { id: peptideId } }))
  }, 300)
}

function Modal({ cat, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const { color, glow, title, subtitle, detail, studies, peptides, peptideIds, Illustration } = cat

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(3,3,18,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: 'rgba(10,10,30,0.97)',
          border: `1px solid ${color}35`,
          boxShadow: `0 0 80px ${glow}, 0 0 0 1px rgba(255,255,255,0.04) inset`,
        }}
      >
        {/* Decorated illustration header */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          {/* Background SVG */}
          <Illustration />
          {/* Color overlay */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse at 30% 50%, ${color}22 0%, transparent 70%)`,
          }} />
          {/* Decorative corner dots */}
          <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.6 }} />
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.4 }} />
          <div className="absolute top-4 right-14 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.6 }} />
          <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.4 }} />
          {/* Top scan line */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,30,0.97))' }} />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
          >
            <X size={15} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-1" style={{ color }}>
            {subtitle}
          </p>
          <h2 className="text-2xl font-bold text-white mb-5 leading-snug">{title}</h2>

          {/* Detail text */}
          <p className="text-gray-300 text-sm leading-relaxed mb-8">{detail}</p>

          {/* Studies */}
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 mb-4 font-semibold">
              Tudományos hivatkozások
            </p>
            <div className="flex flex-col gap-3">
              {studies.map((s, i) => (
                <a
                  key={i}
                  href={`https://pubmed.ncbi.nlm.nih.gov/${s.pmid}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 rounded-xl transition-all duration-200 cursor-pointer"
                  style={{
                    background: `${color}08`,
                    border: `1px solid ${color}20`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background=`${color}14`
                    e.currentTarget.style.borderColor=`${color}40`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background=`${color}08`
                    e.currentTarget.style.borderColor=`${color}20`
                  }}
                >
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: `${color}25`, color }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold leading-snug mb-1 group-hover:text-opacity-90">{s.title}</p>
                    <p className="text-gray-500 text-[11px]">{s.authors} — <span style={{ color: `${color}cc` }}>{s.journal}</span></p>
                    <p className="text-gray-700 text-[10px] mt-0.5 font-mono flex items-center gap-1">
                      PMID: {s.pmid}
                      <ExternalLink size={9} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Peptide tags */}
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 mb-3 font-semibold">
              Releváns peptidek
            </p>
            <div className="flex flex-wrap gap-2">
              {peptides.map((p, i) => {
                const pid = peptideIds?.[i]
                return pid ? (
                  <button
                    key={i}
                    onClick={() => openPeptideInGallery(pid, onClose)}
                    className="group text-[11px] px-3 py-1.5 rounded-full font-mono tracking-wide font-semibold flex items-center gap-1.5 transition-all duration-200"
                    style={{ background: `${color}16`, border: `1px solid ${color}40`, color }}
                    onMouseEnter={e => { e.currentTarget.style.background=`${color}30`; e.currentTarget.style.borderColor=`${color}70` }}
                    onMouseLeave={e => { e.currentTarget.style.background=`${color}16`; e.currentTarget.style.borderColor=`${color}40` }}
                  >
                    {p}
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                ) : (
                  <span key={i} className="text-[11px] px-3 py-1.5 rounded-full font-mono tracking-wide font-semibold opacity-60"
                    style={{ background: `${color}0d`, border: `1px solid ${color}25`, color }}>
                    {p}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }} />

          {/* Contact buttons */}
          <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 mb-4 font-semibold text-center">
            Kérdésed van? Lépj kapcsolatba velünk
          </p>
          <div className="flex gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 rounded-full text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow='0 0 30px rgba(139,92,246,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
            >
              <Send size={14} strokeWidth={2.5} />
              Telegram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: '#e5e7eb' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.10)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.14)' }}
            >
              <TikTokIcon size={14} />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PeptideEffects() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-5">
              Élettani hatások
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed mb-5">
              A peptidek nem egységes csoport — minden kategória más biológiai útvonalon fejti ki hatását.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.3)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 15l6 6M11 5a6 6 0 100 12 6 6 0 000-12z"/>
              </svg>
              <span className="text-[#818cf8] text-xs tracking-[0.2em] uppercase font-semibold">Kattints egy csempére a részletekért</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 select-none"
                style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                onClick={() => setActive(cat)}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${cat.color}40`
                  e.currentTarget.style.boxShadow = `0 0 40px ${cat.glow}`
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Illustration */}
                <div className="relative h-52 overflow-hidden" style={{ background: 'rgba(7,7,30,0.6)' }}>
                  <cat.Illustration />
                  <div className="absolute bottom-0 left-0 right-0 h-10"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,7,30,0.95))' }} />
                  {/* Click hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold"
                      style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}40`, color: cat.color }}>
                      Részletek
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-[10px] tracking-[0.25em] uppercase mb-2 font-semibold" style={{ color: cat.color }}>
                    {cat.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">{cat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.peptides.map((p, j) => (
                      <span key={j} className="text-[11px] px-3 py-1 rounded-full font-mono tracking-wide"
                        style={{ background: `${cat.color}14`, border: `1px solid ${cat.color}35`, color: cat.color }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && <Modal cat={active} onClose={() => setActive(null)} />}
    </>
  )
}
