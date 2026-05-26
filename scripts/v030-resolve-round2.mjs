// v0.30 — Round 2: refined NCBI esearch for low-confidence PMIDs from Round 1
// Targeted canonical-paper queries based on domain knowledge

import { writeFileSync } from 'fs'

const QUERIES = {
  peptides: {
    adipotide: [
      'Kolonin Pasqualini Arap adipotide peptide',
      'CKGGRAKDC prohibitin adipose Barnhart 2011',
      'rhesus obese ANP white adipose Kolonin',
    ],
    dsip: [
      'delta sleep inducing peptide anxiolytic Graf Schoenenberger',
      'DSIP stress sleep peptide review Monnier',
      'delta sleep peptide vasoactive properties Iyer',
    ],
    'epithalon-cell': [
      'epitalon telomerase Khavinson human somatic',
      'Khavinson Bondarev Butyugov 2003 telomere',
    ],
    epo: [
      'erythropoietin doping detection sport review',
      'EPO blood doping cycling athletes review',
      'recombinant EPO doping aerobic performance review',
    ],
    'ghk-cu-genes': [
      'Pickart GHK copper peptide gene expression human genome',
      'Campbell Margolina Pickart GHK 32 genes',
      'GHK-Cu signaling cosmetic biology genes',
    ],
    'ghrp-2-clinical': [
      'pralmorelin GHRP-2 growth hormone clinical adults',
      'GHRP-2 ghrelin secretagogue clinical pharmacology',
      'KP-102 GHRP-2 growth hormone deficiency',
    ],
    hexarelin: [
      'hexarelin CD36 cardioprotection myocardial ischemia',
      'hexarelin ghrelin-receptor cardioprotection review',
      'Bodart hexarelin GHRP cardiovascular review',
    ],
    'igf-1-lr3': [
      'long-R3-IGF-1 binding protein affinity Tomas',
      'recombinant IGF-1 LR3 protein engineering Francis',
      'long-arg3-IGF-1 vs IGF-1 receptor binding',
    ],
    'lipo-c': [
      'lipotropic injection methionine inositol choline weight',
      'L-carnitine methionine inositol choline obesity adjunct',
      'MIC lipotropic obesity adjunct review',
    ],
    'll-37': [
      'LL-37 cathelicidin wound healing keratinocyte',
      'Heilborn LL-37 cathelicidin re-epithelialization',
      'Dorschner LL-37 cutaneous wound antimicrobial peptide',
    ],
    'matrixyl-3000': [
      'palmitoyl pentapeptide-3 collagen wrinkles Robinson',
      'pal-KTTKS matrixyl skin wrinkle Robinson',
      'KTTKS pentapeptide procollagen fibroblast',
    ],
    pinealon: [
      'Khavinson pinealon EDR peptide neuroprotection oxidative',
      'pinealon offspring hyperhomocysteinemia neuroprotection',
      'tripeptide EDR pinealon gene expression',
    ],
    'snap-8': [
      'acetyl octapeptide-3 cosmetic wrinkle SNAP-8',
      'SNAP-8 acetyl glutamyl heptapeptide cosmetic',
      'acetyl octapeptide muscle nicotinic acetylcholine cosmetic',
    ],
  },
  nootropics: {
    '9-me-bc-mao': [
      'beta-carboline MAO inhibitor Herraiz beverages',
      'harman norharman MAO inhibitor smoke Herraiz',
      'beta-carbolines pharmacology neurodegeneration Cao',
    ],
    '9-me-bc-bdnf': [
      'Polanski 9-methyl-beta-carboline dopaminergic neurons culture',
      '9-methyl-beta-carboline mesencephalic neurons BDNF rats',
      'Hamann 9-methyl beta-carboline dopamine gene expression',
    ],
    adrafinil: [
      'Milgram adrafinil aged dogs cognitive',
      'Bastuji Jouvet adrafinil narcolepsy clinical',
      'adrafinil aged beagle cognitive function',
    ],
    'bromantane-mech': [
      'bromantane mechanism dopamine serotonin Vakhitova',
      'ladasten bromantane dopamine TH expression Vakhitova',
      'bromantane neurotropic mechanism Morozov pharmacology',
    ],
    'bromantane-asthenia': [
      'bromantane asthenic neurasthenia Voznesenskaia clinical',
      'ladasten neurasthenia clinical Voznesenskaia',
      'bromantane fatigue asthenia clinical Russian',
    ],
    'bromantane-review': [
      'ladasten bromantane review pharmacological Russian',
      'bromantane review actoprotector Russian',
    ],
    'nsi-189-neurogenesis': [
      'NSI-189 phosphate hippocampal neurogenesis chronic stress',
      'Liu NSI-189 hippocampus neurogenesis fluoxetine',
      'NSI-189 antidepressant hippocampal neurogenic rats',
    ],
    'nsi-189-stroke': [
      'NSI-189 stroke ischemia rats Tajiri',
      'NSI-189 traumatic brain injury cognitive recovery',
      'NSI-189 TBI stroke functional recovery',
    ],
    'phenylpiracetam-cerebro': [
      'phenotropil cerebrovascular stroke Russian clinical',
      'fonturacetam cerebral ischemia Russian clinical',
      'phenylpiracetam stroke cerebral function Russian',
    ],
  },
}

const OLD_PMID_MAP = {
  peptides: {
    adipotide: '22075637', dsip: '7791904', 'epithalon-cell': '12937682',
    epo: '16769597', 'ghk-cu-genes': '29662016', 'ghrp-2-clinical': '11331743',
    hexarelin: '10516862', 'igf-1-lr3': '1747094', 'lipo-c': '33093270',
    'll-37': '12592095', 'matrixyl-3000': '18492210', pinealon: '25023411',
    'snap-8': '23981350',
  },
  nootropics: {
    '9-me-bc-mao': '16111712', '9-me-bc-bdnf': '18434025',
    adrafinil: '11079215',
    'bromantane-mech': '19374118', 'bromantane-asthenia': '17539276', 'bromantane-review': '11548438',
    'nsi-189-neurogenesis': '24059323', 'nsi-189-stroke': '28006971',
    'phenylpiracetam-cerebro': '16447598',
  },
}

async function search(query) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(query)}&retmax=5&retmode=json`
  try {
    const res = await fetch(url)
    if (!res.ok) return []
    return (await res.json()).esearchresult?.idlist || []
  } catch { return [] }
}

async function summary(pmids) {
  if (pmids.length === 0) return {}
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
  try {
    const res = await fetch(url)
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
  } catch { return {} }
}

function tokens(s) {
  return new Set((s || '').toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(t => t.length >= 4))
}
function overlap(a, b) {
  const ta = tokens(a), tb = tokens(b)
  if (ta.size === 0 || tb.size === 0) return 0
  let c = 0; for (const t of ta) if (tb.has(t)) c++
  return c / Math.min(ta.size, tb.size)
}

const CITED = {
  peptides: {
    adipotide: 'Adipotide induces weight loss in obese rhesus monkeys',
    dsip: 'DSIP: anxiolytic and stress-protective effects',
    'epithalon-cell': 'Epithalon activates telomerase and increases telomere length in human cells',
    epo: 'Biochemistry, physiology, and complications of blood doping: facts and speculation',
    'ghk-cu-genes': 'GHK-Cu és a humán genom: 32 gén expressziójának módosítása',
    'ghrp-2-clinical': 'GHRP-2 and ghrelin: mechanisms and clinical use',
    hexarelin: 'Hexarelin cardioprotective effects via CD36',
    'igf-1-lr3': 'IGF-1 LR3 pharmacology and bioactivity',
    'lipo-c': 'Lipotropic agents in weight management, narrative review',
    'll-37': 'LL-37 promotes wound healing through cell migration and angiogenesis',
    'matrixyl-3000': 'Matrikine peptides reduce skin wrinkles and improve elasticity',
    pinealon: 'Pinealon: neuroprotective effects in oxidative stress',
    'snap-8': 'Acetyl octapeptide-3 reduces expression wrinkles topically',
  },
  nootropics: {
    '9-me-bc-mao': 'Beta-carbolines as MAO inhibitors: comprehensive review',
    '9-me-bc-bdnf': '9-Me-BC induces BDNF and GDNF expression in cultured neurons',
    adrafinil: 'Adrafinil: a novel vigilance promoting agent',
    'bromantane-mech': 'Ladasten (Bromantane): pharmacological profile review',
    'bromantane-asthenia': 'Bromantane in asthenic disorders: clinical trial',
    'bromantane-review': 'Bromantane: novel actoprotector with neuroprotective profile',
    'nsi-189-neurogenesis': 'NSI-189: a small molecule with hippocampal neurogenesis-stimulating activity',
    'nsi-189-stroke': 'NSI-189 in cognition and PTSD: preclinical neuroprotection',
    'phenylpiracetam-cerebro': 'Phenotropil in cerebrovascular insufficiency',
  },
}

const output = { peptides: {}, nootropics: {} }

for (const [lib, queries] of Object.entries(QUERIES)) {
  for (const [key, qs] of Object.entries(queries)) {
    const oldPmid = OLD_PMID_MAP[lib][key]
    const cited = CITED[lib][key]
    console.log(`\n=== ${lib}/${key} (replace ${oldPmid}) ===`)
    console.log(`  cited: "${cited.slice(0, 80)}"`)
    const allPmids = new Set()
    for (const q of qs) {
      process.stdout.write(`  q: "${q.slice(0, 60)}" -> `)
      const ids = await search(q)
      console.log(`${ids.length} hits: ${ids.join(',')}`)
      for (const id of ids) if (id !== oldPmid) allPmids.add(id)
      await new Promise(r => setTimeout(r, 450))
    }
    const list = [...allPmids].slice(0, 15)
    const sums = await summary(list)
    await new Promise(r => setTimeout(r, 450))
    const ranked = list.map(p => ({ pmid: p, ...sums[p], ratio: overlap(cited, sums[p]?.title || '') })).sort((a, b) => b.ratio - a.ratio)
    console.log(`  Top:`)
    for (const c of ranked.slice(0, 5)) {
      console.log(`    ${(c.ratio * 100).toFixed(0)}% PMID ${c.pmid} (${c.year}) "${(c.title || '').slice(0, 90)}"`)
    }
    output[lib][key] = { oldPmid, cited, candidates: ranked.slice(0, 10) }
  }
}

writeFileSync('v030-resolve-round2.json', JSON.stringify(output, null, 2))
console.log('\nWritten to v030-resolve-round2.json')
