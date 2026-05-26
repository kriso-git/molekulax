// v0.30 — NCBI esearch resolver for canonical replacement PMIDs
// Each query is built from manual canonical-paper knowledge (author + topic + drug)
// Output written to v030-resolve-output.json

import { writeFileSync } from 'fs'

// Per cited-title canonical-author-and-topic query knowledge:
const QUERIES = {
  peptides: {
    adipotide: {
      cited: 'Adipotide induces weight loss in obese rhesus monkeys',
      queries: ['adipotide rhesus monkey obesity Barnhart', 'prohibitin proapoptotic peptide rhesus obesity', 'CKGGRAKDC peptide weight loss primate'],
    },
    dsip: {
      cited: 'DSIP: anxiolytic and stress-protective effects',
      queries: ['delta sleep inducing peptide DSIP anxiolytic', 'DSIP stress protection Schoenenberger', 'delta sleep peptide pharmacology Graf'],
    },
    epithalon: {
      multi: [
        { pmid: '19823771', cited: 'Peptide bioregulation of aging: results and prospects', queries: ['Khavinson peptide bioregulation aging', 'short peptides geroprotector Khavinson Anisimov', 'epitalon telomere aging Khavinson review'] },
        { pmid: '12937682', cited: 'Epithalon activates telomerase and increases telomere length', queries: ['epitalon telomerase telomere somatic cells Khavinson', 'Khavinson Bondarev Butyugov epithalon telomere'] },
      ],
    },
    epo: {
      cited: 'Biochemistry, physiology, and complications of blood doping',
      queries: ['Lippi blood doping erythropoietin complications', 'EPO doping athletes physiology review', 'blood doping Lippi 2006 review'],
    },
    'ghk-cu': {
      cited: 'GHK-Cu és a humán genom: 32 gén expressziójának módosítása',
      queries: ['GHK-Cu human genome gene expression Pickart', 'GHK copper tripeptide gene expression Pickart', 'Pickart GHK-Cu Bioregulation'],
    },
    'ghrp-2': {
      cited: 'GHRP-2 and ghrelin: mechanisms and clinical use',
      queries: ['GHRP-2 ghrelin mechanism clinical Bowers', 'growth hormone releasing peptide GHRP-2 secretagogue clinical', 'pralmorelin GHRP-2 review'],
    },
    'ghrp-6': {
      cited: 'GHRP-6 stimulates growth hormone secretion in humans',
      queries: ['GHRP-6 growth hormone secretion human Bowers', 'GHRP-6 healthy men growth hormone Bowers 1990', 'hexapeptide growth hormone GHRP-6 humans'],
    },
    glow: {
      multi: [
        { pmid: '29986520', cited: 'Regenerative and Protective Actions of the GHK-Cu Peptide', queries: ['Pickart Margolina GHK-Cu regenerative 2018 IJMS', 'GHK-Cu peptide regenerative protective gene'] },
        { pmid: '23749167', cited: 'Thymosin beta4 induces angiogenesis through Notch signaling', queries: ['thymosin beta-4 angiogenesis Notch endothelial', 'TB4 angiogenesis Notch signaling endothelial cells'] },
      ],
    },
    gonadorelin: {
      cited: 'Pulsatile GnRH therapy for hypogonadotropic hypogonadism',
      queries: ['pulsatile GnRH hypogonadotropic hypogonadism therapy', 'Crowley pulsatile GnRH male hypogonadism', 'gonadorelin pulsatile fertility hypogonadism review'],
    },
    hexarelin: {
      cited: 'Hexarelin cardioprotective effects via CD36',
      queries: ['hexarelin cardioprotection CD36 Bodart Demers', 'hexarelin CD36 ischemia heart Bodart', 'hexarelin myocardial CD36 ghrelin'],
    },
    humanin: {
      cited: 'Humanin: mitochondrial-derived peptide with neuroprotective and metabolic effects',
      queries: ['humanin mitochondrial derived peptide neuroprotective metabolic Lee', 'humanin MOTS-c mitochondrial peptide Yen', 'humanin Alzheimer neuroprotection review'],
    },
    'igf-1-lr3': {
      cited: 'IGF-1 LR3 pharmacology and bioactivity',
      queries: ['IGF-1 LR3 long-arg3 pharmacokinetics bioactivity', 'long-arg3-IGF-1 LR3 muscle growth bioactivity', 'Tomas LR3-IGF-1 binding protein'],
    },
    ipamorelin: {
      cited: 'The Safety and Efficacy of Growth Hormone Secretagogues',
      queries: ['Sigalos Pastuszak growth hormone secretagogues safety efficacy', 'ipamorelin GHRP MK-677 safety review', 'GHS safety efficacy Sex Med Reviews 2018'],
    },
    kisspeptin: {
      cited: 'Kisspeptin restores hypothalamic-pituitary-gonadal function',
      queries: ['kisspeptin hypothalamic pituitary gonadal hypogonadotropic men', 'Dhillo kisspeptin hypogonadism men GnRH', 'kisspeptin men hypogonadotropic LH'],
    },
    'lipo-c': {
      cited: 'Lipotropic agents in weight management, narrative review',
      queries: ['lipotropic methionine inositol choline weight loss review', 'MIC injection weight loss lipotropic review', 'methionine inositol choline obesity'],
    },
    'll-37': {
      cited: 'LL-37 promotes wound healing through cell migration and angiogenesis',
      queries: ['LL-37 cathelicidin wound healing migration angiogenesis', 'Koczulla LL-37 wound angiogenesis', 'LL-37 keratinocyte migration angiogenesis'],
    },
    'matrixyl-3000': {
      cited: 'Matrikine peptides reduce skin wrinkles and improve elasticity',
      queries: ['palmitoyl pentapeptide matrikine skin wrinkles elasticity', 'matrixyl pentapeptide collagen wrinkle clinical', 'palmitoyl pentapeptide collagen Robinson'],
    },
    mazdutide: {
      cited: 'Mazdutide in adults with overweight or obesity (GLORY-1)',
      queries: ['mazdutide GLORY-1 obesity Phase 3 China', 'mazdutide IBI362 obesity Phase 3', 'Ji mazdutide Phase 3 obesity Chinese'],
    },
    oxytocin: {
      cited: 'Intranasal oxytocin: neural and behavioural effects',
      queries: ['intranasal oxytocin neural behavioural meta-analysis', 'intranasal oxytocin social cognition review', 'Quintana intranasal oxytocin bioavailability'],
    },
    pinealon: {
      cited: 'Pinealon: neuroprotective effects in oxidative stress',
      queries: ['pinealon neuroprotection oxidative stress Khavinson', 'pinealon EDR peptide neuroprotection', 'Khavinson pinealon cognition aging'],
    },
    'snap-8': {
      cited: 'Acetyl octapeptide-3 reduces expression wrinkles topically',
      queries: ['acetyl octapeptide-3 SNAP-8 expression wrinkles', 'acetyl octapeptide SNAP-8 botox-like cosmetic', 'acetyl glutamyl heptapeptide wrinkle skin'],
    },
  },
  nootropics: {
    '9-me-bc': {
      multi: [
        { pmid: '20517703', cited: '9-Me-BC: neurotrophic and antiapoptotic effects on dopaminergic neurons', queries: ['9-methyl-beta-carboline dopaminergic neurotrophic Polanski Hamann', '9-methyl-beta-carboline neuroprotective dopamine'] },
        { pmid: '16111712', cited: 'Beta-carbolines as MAO inhibitors: comprehensive review', queries: ['beta-carbolines MAO inhibitors review Herraiz', 'harmane harmine beta-carboline MAO inhibition'] },
        { pmid: '18434025', cited: '9-Me-BC induces BDNF and GDNF expression in cultured neurons', queries: ['9-methyl-beta-carboline BDNF GDNF dopaminergic Hamann', '9-Me-BC BDNF expression mesencephalon neuroprotection'] },
      ],
    },
    adrafinil: {
      cited: 'Adrafinil: a novel vigilance promoting agent',
      queries: ['adrafinil vigilance promoting Milgram Siwak', 'adrafinil cognitive elderly canine vigilance', 'adrafinil narcolepsy vigilance Bastuji'],
    },
    bromantane: {
      multi: [
        { pmid: '17539276', cited: 'Bromantane in asthenic disorders: clinical trial', queries: ['bromantane asthenic disorders clinical trial', 'ladasten asthenic neurasthenia clinical Russian', 'Voznesenskaia bromantane asthenia clinical'] },
        { pmid: '19374118', cited: 'Ladasten (Bromantane): pharmacological profile review', queries: ['ladasten bromantane pharmacological profile review', 'Vakhitova bromantane ladasten mechanism', 'bromantane actoprotector neuroprotective review'] },
        { pmid: '11548438', cited: 'Bromantane: novel actoprotector with neuroprotective profile', queries: ['bromantane actoprotector neuroprotective Morozov', 'Mikhailova bromantane dopamine acetylcholine Russian'] },
      ],
    },
    'nsi-189': {
      multi: [
        { pmid: '24059323', cited: 'NSI-189: a small molecule with hippocampal neurogenesis-stimulating activity', queries: ['NSI-189 hippocampal neurogenesis small molecule McIntyre', 'NSI-189 neurogenesis hippocampus depression preclinical', 'Liu NSI-189 hippocampus neurogenesis BDNF'] },
        { pmid: '28006971', cited: 'NSI-189 in cognition and PTSD: preclinical neuroprotection', queries: ['NSI-189 PTSD cognition preclinical', 'NSI-189 stroke rat cognitive recovery Tajiri', 'NSI-189 traumatic brain injury cognitive'] },
      ],
    },
    phenylpiracetam: {
      multi: [
        { pmid: '16447598', cited: 'Phenotropil in cerebrovascular insufficiency', queries: ['phenotropil phenylpiracetam cerebrovascular Savchenko', 'fonturacetam ischemic stroke cerebrovascular Russian'] },
        { pmid: '17593821', cited: 'Phenotropil in the treatment of chronic ischemic brain disease', queries: ['phenotropil chronic cerebral ischemia treatment Russian', 'phenylpiracetam chronic cerebrovascular Kovalenko'] },
      ],
    },
    piracetam: {
      cited: 'Efficacy of piracetam in cognitive decline: meta-analysis',
      queries: ['piracetam cognitive impairment dementia meta-analysis Waegemans', 'piracetam Alzheimer Cochrane review', 'Flicker piracetam dementia review'],
    },
    selank: {
      cited: 'Selank effect on cognitive function in generalized anxiety disorder',
      queries: ['selank generalized anxiety disorder Zozulia Russian', 'selank GAD cognitive Russian clinical', 'TP-7 selank anxiolytic Russian clinical'],
    },
    semax: {
      multi: [
        { pmid: '29722760', cited: 'Semax in cognitive impairment after ischemic stroke', queries: ['semax cognitive impairment ischemic stroke Russian', 'semax stroke cognition Gusev Skvortsova clinical', 'semax post-stroke cognitive Russian 2018'] },
        { pmid: '15293774', cited: 'Semax in cerebrovascular disease: clinical review', queries: ['semax cerebrovascular disease clinical review Russian', 'semax ischemic stroke clinical Russian Gusev', 'semax cerebrovascular Mjasoedov review'] },
      ],
    },
  },
}

async function search(query) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(query)}&retmax=5&retmode=json`
  try {
    const res = await fetch(url)
    if (!res.ok) return []
    const json = await res.json()
    return json.esearchresult?.idlist || []
  } catch (e) {
    return []
  }
}

async function summary(pmids) {
  if (pmids.length === 0) return {}
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
  try {
    const res = await fetch(url)
    if (!res.ok) return {}
    const json = await res.json()
    const out = {}
    for (const pmid of pmids) {
      const rec = json.result?.[pmid]
      if (rec && !rec.error) {
        out[pmid] = {
          title: rec.title || '',
          authors: (rec.authors || []).slice(0, 3).map(a => a.name).join(', '),
          year: (rec.pubdate || '').slice(0, 4),
          journal: rec.fulljournalname || rec.source || '',
        }
      }
    }
    return out
  } catch (e) {
    return {}
  }
}

function tokens(s) {
  return new Set((s || '').toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(t => t.length >= 4))
}
function overlap(a, b) {
  const ta = tokens(a), tb = tokens(b)
  if (ta.size === 0 || tb.size === 0) return 0
  let c = 0
  for (const t of ta) if (tb.has(t)) c++
  return c / Math.min(ta.size, tb.size)
}

const output = { peptides: {}, nootropics: {} }

async function processItem(lib, slug, cited, queries, oldPmid) {
  console.log(`\n=== ${lib}/${slug} (replacing PMID ${oldPmid}) ===`)
  console.log(`  cited: "${cited.slice(0, 100)}"`)
  const allPmids = new Set()
  for (const q of queries) {
    process.stdout.write(`  q: "${q.slice(0, 60)}" -> `)
    const ids = await search(q)
    console.log(`${ids.length} hits: ${ids.join(',')}`)
    for (const id of ids) {
      if (id !== oldPmid) allPmids.add(id)
    }
    await new Promise(r => setTimeout(r, 450))
  }
  const pmidList = [...allPmids].slice(0, 12)
  const sums = await summary(pmidList)
  await new Promise(r => setTimeout(r, 450))
  const ranked = pmidList.map(p => ({ pmid: p, ...sums[p], ratio: overlap(cited, sums[p]?.title || '') })).sort((a, b) => b.ratio - a.ratio)
  console.log(`  Top candidates:`)
  for (const c of ranked.slice(0, 5)) {
    console.log(`    PMID ${c.pmid} ratio ${(c.ratio * 100).toFixed(0)}% (${c.year}) ${c.journal}`)
    console.log(`      "${(c.title || '').slice(0, 100)}"`)
    console.log(`      ${c.authors}`)
  }
  output[lib][slug] = output[lib][slug] || {}
  output[lib][slug][oldPmid] = { cited, candidates: ranked.slice(0, 8) }
}

for (const [lib, entries] of Object.entries(QUERIES)) {
  for (const [slug, def] of Object.entries(entries)) {
    if (def.multi) {
      for (const m of def.multi) {
        await processItem(lib, slug, m.cited, m.queries, m.pmid)
      }
    } else {
      // single PMID per entry — find its oldPmid from PMIDS_TO_CHECK mapping (assume from cited title context)
      // Simpler: write the oldPmid into QUERIES def. But it's defined globally — use TARGETS lookup.
      // For now, infer from project state — these are flat single-PMID entries.
      const SINGLE_PMID_MAP = {
        peptides: { adipotide:'22075637',dsip:'7791904',epo:'16769597','ghk-cu':'29662016','ghrp-2':'11331743','ghrp-6':'2229298',gonadorelin:'3935474',hexarelin:'10516862',humanin:'23375520','igf-1-lr3':'1747094',ipamorelin:'28666687',kisspeptin:'24450286','lipo-c':'33093270','ll-37':'12592095','matrixyl-3000':'18492210',mazdutide:'39041741',oxytocin:'28925369',pinealon:'25023411','snap-8':'23981350' },
        nootropics: { adrafinil:'11079215',piracetam:'11405969',selank:'18454141' },
      }
      const oldPmid = SINGLE_PMID_MAP[lib]?.[slug] || 'unknown'
      await processItem(lib, slug, def.cited, def.queries, oldPmid)
    }
  }
}

writeFileSync('v030-resolve-output.json', JSON.stringify(output, null, 2))
console.log('\nWritten to v030-resolve-output.json')
