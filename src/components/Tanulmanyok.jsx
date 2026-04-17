import { useState } from 'react'
import { ExternalLink, BookMarked, ChevronLeft, ChevronRight } from 'lucide-react'

const ITEMS = [
  {
    tag: 'Szisztematikus áttekintés',
    tagColor: 'rgba(14,165,233,0.16)',
    tagText: '#7dd3fc',
    title: 'BPC-157 az ortopédiai sportmedicinában',
    titleEn: 'Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review',
    authors: 'Vasireddi N, Hahamyan H, Salata MJ, et al.',
    journal: 'HSS Journal',
    year: '2025',
    pmid: null,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/',
    finding:
      '36 tanulmány alapján: BPC-157 fokozza a VEGF expresszióját, csökkenti az IL-6 és TNF-α szintjét, gyorsítja az inak, izmok és csontok gyógyulását.',
  },
  {
    tag: 'Narratív áttekintés',
    tagColor: 'rgba(168,85,247,0.18)',
    tagText: '#c084fc',
    title: 'BPC-157: regeneráció vagy kockázat?',
    titleEn: 'Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Healing',
    authors: 'McGuire FP, Martinez R, Lenz A, Skinner L, Cushman DM.',
    journal: 'Curr Rev Musculoskeletal Med',
    year: '2025',
    pmid: null,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/',
    finding:
      'VEGFR2 és Akt-eNOS tengely aktiválása angiogenezist és fibroblaszt aktivitást indukál. Három humán pilottanulmányban nem jelentettek mellékhatást.',
  },
  {
    tag: 'Klinikai vizsgálat',
    tagColor: 'rgba(16,185,129,0.16)',
    tagText: '#6ee7b7',
    title: 'CJC-1295: tartós növekedési hormon stimuláció',
    titleEn: 'Prolonged stimulation of GH and IGF-I secretion by CJC-1295 in healthy adults',
    authors: 'Teichman SL, Neale A, Lawrence B, et al.',
    journal: 'J Clin Endocrinol Metab',
    year: '2006',
    pmid: '16352683',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/',
    finding:
      'Egyszeri CJC-1295 injekció 2–10-szeres GH-emelkedést eredményezett 6+ napon át; ismételt adagolásnál az IGF-I 28 napig emelt szinten maradt.',
  },
  {
    tag: 'Meta-analízis',
    tagColor: 'rgba(20,184,166,0.16)',
    tagText: '#5eead4',
    title: 'Kollagén peptid + edzés: mozgásszervi hatások',
    titleEn: 'Impact of Collagen Peptide Supplementation Combined with Long-Term Physical Training',
    authors: 'Bischof K, Moitzi AM, Stafilidis S, König D.',
    journal: 'Sports Medicine',
    year: '2024',
    pmid: '39060741',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39060741/',
    finding:
      '19 RCT (768 résztvevő): kollagén peptid + edzés szignifikánsan növelte a zsírmentes tömeget, javította az ínszövetet és a maximális erőt.',
  },
  {
    tag: 'Farmakológia',
    tagColor: 'rgba(6,182,212,0.16)',
    tagText: '#67e8f9',
    title: 'Ipamorelin: az első szelektív GH-szekretórium',
    titleEn: 'Ipamorelin, the first selective growth hormone secretagogue',
    authors: 'Raun K, Hansen BS, Johansen NL, et al.',
    journal: 'Eur J Endocrinology',
    year: '1998',
    pmid: '9849822',
    url: 'https://pubmed.ncbi.nlm.nih.gov/9849822/',
    finding:
      'Az ipamorelin szelektíven stimulálja a GH-szekréciót kortizol- és prolaktin-emelkedés nélkül, megkülönböztetve azt a korábbi GHRP-ektől.',
  },
  {
    tag: 'Molekuláris biológia',
    tagColor: 'rgba(139,92,246,0.18)',
    tagText: '#a78bfa',
    title: 'Thymosin β4: szövetjavítás és sejtvándorlás',
    titleEn: 'Thymosin beta4: actin-sequestering protein moonlights to repair injured tissues',
    authors: 'Goldstein AL, Hannappel E, Kleinman HK.',
    journal: 'Trends Mol Medicine',
    year: '2005',
    pmid: '16099736',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16099736/',
    finding:
      'A TB-500 aktív komponense aktin-megkötő fehérje, amely sejtvándorlást, angiogenezist és szövetregenerációt indukál sérült területeken.',
  },
  {
    tag: 'Bőrgyógyászat',
    tagColor: 'rgba(244,63,94,0.14)',
    tagText: '#fda4af',
    title: 'GHK-Cu: sejtes útvonalak a bőrregenerációban',
    titleEn: 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration',
    authors: 'Pickart L, Vasquez-Soltero JM, Margolina A.',
    journal: 'Biomed Research International',
    year: '2015',
    pmid: '26078961',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/',
    finding:
      'A GHK-Cu aktiválja a kollagén és glikozaminoglikán szintézist, csökkenti a gyulladást, és epigenetikai mechanizmusokon keresztül befolyásolja a génexpressziót.',
  },
  {
    tag: 'RCT – III. fázis',
    tagColor: 'rgba(217,119,6,0.15)',
    tagText: '#fcd34d',
    title: 'Bremelanotid (PT-141): III. fázisú vizsgálat',
    titleEn: 'Bremelanotide for the Treatment of Hypoactive Sexual Desire Disorder',
    authors: 'Kingsberg SA, Clayton AH, Portman D, et al.',
    journal: 'Obstetrics & Gynecology',
    year: '2019',
    pmid: '31599840',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31599840/',
    finding:
      'A melanokortinreceptor-agonista bremelanotid szignifikánsan javított a szexuális diszfunkció tüneteiben két III. fázisú RCT-ben, kedvező biztonsági profillal.',
  },
  {
    tag: 'Anyagcsere',
    tagColor: 'rgba(99,102,241,0.18)',
    tagText: '#818cf8',
    title: 'AOD-9604: lipolytikus GH-fragment elhízásnál',
    titleEn: 'Effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism',
    authors: 'Heffernan M, Thorburn AW, Fam B, et al.',
    journal: 'Endocrinology',
    year: '2001',
    pmid: '11713212',
    url: 'https://pubmed.ncbi.nlm.nih.gov/11713212/',
    finding:
      'Az AOD-9604 a GH C-terminális fragmentje, amely zsírszövetben lipolízist indukál anélkül, hogy a GH inzulinantagonista mellékhatásait kiváltaná.',
  },
  {
    tag: 'Neurológia',
    tagColor: 'rgba(192,38,211,0.14)',
    tagText: '#e879f9',
    title: 'BPC-157: agy–bél tengely és neuroprotekció',
    titleEn: 'Stable Gastric Pentadecapeptide BPC 157: Brain-gut Axis Role',
    authors: 'Sikiric P, Hahm KB, Bhatt DL, et al.',
    journal: 'Current Neuropharmacology',
    year: '2022',
    pmid: '33797367',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33797367/',
    finding:
      'A BPC-157 modulálja a dopaminerg és szerotonin rendszert, védi az idegszövetet iszkémia, oxidatív stressz és trauma ellen.',
  },
  {
    tag: 'Klinikai összefoglaló',
    tagColor: 'rgba(56,189,248,0.15)',
    tagText: '#7dd3fc',
    title: 'Sermorelin: GH-hiány kezelése felnőttkorban',
    titleEn: 'Sermorelin: a better approach to management of adult-onset GH insufficiency?',
    authors: 'Walker RF.',
    journal: 'Clin Interventions in Aging',
    year: '2006',
    pmid: '18046908',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18046908/',
    finding:
      'A szermórelin (GHRH analóg) helyreállítja a fiziológiás GH-pulzalitást és csökkenti az IGF-I-hiányból eredő szöveti degenerációt felnőttkori GH-elégtelenségben.',
  },
  {
    tag: 'Táplálkozástudomány',
    tagColor: 'rgba(101,163,13,0.15)',
    tagText: '#a3e635',
    title: 'Kollagén + C-vitamin: ínszintézis fokozása',
    titleEn: 'Vitamin C-enriched gelatin supplementation augments collagen synthesis',
    authors: 'Shaw G, Lee-Barthel A, Ross ML, Wang B, Baar K.',
    journal: 'Am J Clin Nutrition',
    year: '2017',
    pmid: '27852613',
    url: 'https://pubmed.ncbi.nlm.nih.gov/27852613/',
    finding:
      '5 g zselatinpor C-vitaminnal az edzés előtt 1 órával kétszeresére növelte a vérben mérhető kollagén szintézis markert a kontrollhoz képest.',
  },
  {
    tag: 'Öregedéskutatás',
    tagColor: 'rgba(161,98,7,0.15)',
    tagText: '#fde68a',
    title: 'Epithalon: tobozmirigy-peptid és élettartam',
    titleEn: 'Peptide bioregulation of aging: results and prospects',
    authors: 'Anisimov VN, Khavinson VK.',
    journal: 'Biogerontology',
    year: '2010',
    pmid: '19823771',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19823771/',
    finding:
      'Az Epithalon (Ala-Glu-Asp-Gly) normalizálja a melatonin-szekréciót, és állatkísérletekben csökkentette a daganat incidenciát, meghosszabbítva az élettartamot.',
  },
  {
    tag: 'Farmakológia',
    tagColor: 'rgba(6,182,212,0.16)',
    tagText: '#67e8f9',
    title: 'GHRP-2: étvágyszabályozás és ghrelin-hatás',
    titleEn: 'GHRP-2, like ghrelin, increases food intake in healthy men',
    authors: 'Laferrère B, Abraham C, Russell CD, Bowers CY.',
    journal: 'J Clin Endocrinol Metab',
    year: '2005',
    pmid: '15561798',
    url: 'https://pubmed.ncbi.nlm.nih.gov/15561798/',
    finding:
      'A GHRP-2 a ghrelinhez hasonlóan növeli az étvágyat és erős GH-szekréciót vált ki — kombinált ciklusokban figyelembe veendő mellékhatás.',
  },
  {
    tag: 'Gasztroenterológia',
    tagColor: 'rgba(194,65,12,0.15)',
    tagText: '#fdba74',
    title: 'BPC-157: NO-rendszer és fekélyvédelem',
    titleEn: 'Stable gastric pentadecapeptide BPC 157 and NO-system relation',
    authors: 'Sikiric P, Seiwerth S, Rucman R, et al.',
    journal: 'Current Pharmaceutical Design',
    year: '2014',
    pmid: '23713777',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23713777/',
    finding:
      'A BPC-157 a nitrogén-monoxid rendszeren keresztül védi a gyomor-bél traktust, gyorsítja a fekélygyógyulást és modulálja az érrendszeri tónust.',
  },
]

const PAGE_SIZE = 9

export default function Tanulmanyok() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(ITEMS.length / PAGE_SIZE)
  const visible = ITEMS.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  const goTo = (p) => {
    setPage(p)
    document.getElementById('tanulmanyok-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="tanulmanyok-top" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            PubMed · Journal hivatkozások
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
            Tanulmányok
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Peer-reviewed kutatások —&nbsp;
            <span className="text-gray-400 font-semibold">{ITEMS.length} forrás</span>,
            szubjektív vélemény nélkül.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((s, i) => (
            <div
              key={page * PAGE_SIZE + i}
              className="group p-6 rounded-2xl glass hover:border-[rgba(255,255,255,0.09)] transition-all duration-500 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase shrink-0"
                  style={{ background: s.tagColor, color: s.tagText }}
                >
                  <BookMarked size={9} />
                  {s.tag}
                </span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#818cf8] transition-colors duration-200 shrink-0 mt-0.5"
                  title="Forrás megnyitása"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm leading-snug mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-[11px] italic leading-relaxed">{s.titleEn}</p>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed tracking-wide border-l-2 border-[rgba(129,140,248,0.22)] pl-3 flex-1">
                {s.finding}
              </p>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-auto pt-2 border-t border-white/[0.04] text-[11px] text-gray-400 tracking-wide">
                <span className="truncate max-w-[180px]">{s.authors}</span>
                <span className="text-gray-600">·</span>
                <span className="italic truncate max-w-[150px]">{s.journal}</span>
                <span className="text-gray-600">·</span>
                <span>{s.year}</span>
                {s.pmid && (
                  <>
                    <span className="text-gray-600">·</span>
                    <span>PMID&nbsp;{s.pmid}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={() => goTo(Math.max(0, page - 1))}
              disabled={page === 0}
              className="p-2 rounded-lg text-gray-600 hover:text-white disabled:opacity-20 transition-colors duration-200"
              aria-label="Előző oldal"
            >
              <ChevronLeft size={17} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-8 h-8 rounded-full text-xs font-semibold transition-all duration-200 ${
                  page === i
                    ? 'bg-[rgba(129,140,248,0.18)] text-[#818cf8] border border-[rgba(129,140,248,0.28)]'
                    : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goTo(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-lg text-gray-600 hover:text-white disabled:opacity-20 transition-colors duration-200"
              aria-label="Következő oldal"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        )}

        <p className="text-center text-gray-600 text-[11px] tracking-widest mt-5 uppercase">
          {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, ITEMS.length)}&nbsp;/&nbsp;{ITEMS.length} forrás
          &nbsp;·&nbsp;Kizárólag tájékoztató jellegűek — nem minősülnek orvosi ajánlásnak.
        </p>
      </div>
    </section>
  )
}
