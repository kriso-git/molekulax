// v0.30 — batch esummary recheck for v0.29 followup "likely real" PMIDs
// Run: node scripts/v030-batch-recheck.mjs
// Batches PMIDs 50-at-a-time to NCBI esummary, avoids transient single-PMID throttle.

const PMIDS_TO_CHECK = {
  peptides: {
    adipotide: ['22075637'],
    dsip: ['7791904'],
    epithalon: ['19823771', '12937682'],
    epo: ['16769597'],
    'ghk-cu': ['29662016'],
    'ghrp-2': ['11331743'],
    'ghrp-6': ['2229298'],
    glow: ['29986520', '23749167'],
    gonadorelin: ['3935474'],
    hexarelin: ['10516862'],
    humanin: ['23375520'],
    'igf-1-lr3': ['1747094'],
    ipamorelin: ['28666687'],
    kisspeptin: ['24450286'],
    'lipo-c': ['33093270'],
    'll-37': ['12592095'],
    'matrixyl-3000': ['18492210'],
    mazdutide: ['39041741'],
    oxytocin: ['28925369'],
    pinealon: ['25023411'],
    'snap-8': ['23981350'],
  },
  nootropics: {
    '9-me-bc': ['20517703', '16111712', '18434025', '23842892'],
    adrafinil: ['11079215'],
    bromantane: ['17539276', '19374118', '11548438', '10198757', '20369592'],
    modafinil: ['17712350', '19300566', '36921459', '26381811'],
    noopept: ['19234797', '19008801', '22500312'],
    'nsi-189': ['24059323', '28006971'],
    phenylpiracetam: ['16447598', '17593821', '24964269'],
    piracetam: ['11405969'],
    selank: ['18454141'],
    semax: ['15293774', '29722760', '9173745', '11517472'],
  },
}

async function batchLookup(pmids) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const json = await res.json()
  const out = {}
  for (const pmid of pmids) {
    const rec = json.result?.[pmid]
    if (!rec) { out[pmid] = { exists: false, error: 'no-record' }; continue }
    if (rec.error) { out[pmid] = { exists: false, error: rec.error }; continue }
    out[pmid] = {
      exists: true,
      title: rec.title || '',
      authors: (rec.authors || []).slice(0, 3).map(a => a.name).join(', '),
      year: (rec.pubdate || '').slice(0, 4),
      journal: rec.fulljournalname || rec.source || '',
    }
  }
  return out
}

async function main() {
  // Flatten all PMIDs into one list with provenance
  const allRefs = []
  for (const [lib, entries] of Object.entries(PMIDS_TO_CHECK)) {
    for (const [slug, pmids] of Object.entries(entries)) {
      for (const pmid of pmids) {
        allRefs.push({ lib, slug, pmid })
      }
    }
  }
  console.log(`Total PMIDs to batch-recheck: ${allRefs.length}`)

  // Batch in 50s
  const BATCH_SIZE = 50
  const allResults = {}
  for (let i = 0; i < allRefs.length; i += BATCH_SIZE) {
    const batch = allRefs.slice(i, i + BATCH_SIZE)
    const pmids = batch.map(r => r.pmid)
    console.log(`\n--- Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${pmids.length} PMIDs ---`)
    try {
      const results = await batchLookup(pmids)
      Object.assign(allResults, results)
    } catch (err) {
      console.log(`  Batch error: ${err.message}`)
    }
    if (i + BATCH_SIZE < allRefs.length) await new Promise(r => setTimeout(r, 700))
  }

  // Group output by lib+entry
  console.log('\n\n=== RESULTS GROUPED BY ENTRY ===\n')
  for (const [lib, entries] of Object.entries(PMIDS_TO_CHECK)) {
    console.log(`\n## ${lib}\n`)
    for (const [slug, pmids] of Object.entries(entries)) {
      console.log(`\n### ${slug}`)
      for (const pmid of pmids) {
        const r = allResults[pmid]
        if (!r) { console.log(`  PMID ${pmid}: <no result>`); continue }
        if (!r.exists) {
          console.log(`  PMID ${pmid}: ❌ NOT_FOUND (${r.error})`)
        } else {
          console.log(`  PMID ${pmid}: ✅ ${r.year} ${r.journal}`)
          console.log(`    "${r.title.slice(0, 100)}"`)
          console.log(`    ${r.authors}`)
        }
      }
    }
  }
}

main().catch(err => { console.error(err); process.exit(1) })
