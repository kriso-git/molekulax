// Machine-readable PMID candidate finder. Writes pmid-candidates/<lib>/<entry>.json
// per entry with bad PMIDs and top-8 NCBI esearch candidates each.
//
// Run: node scripts/pmid-suggest-batch.mjs [--lib <id>] [--entry <slug>]

import { readdirSync, existsSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null

const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

function normalize(s) {
  return (s || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}
function tokens(s) {
  return new Set(normalize(s).split(' ').filter(t => t.length >= 4))
}
function overlapRatio(a, b) {
  const ta = tokens(a), tb = tokens(b)
  if (ta.size === 0 || tb.size === 0) return 0
  let common = 0
  for (const t of ta) if (tb.has(t)) common++
  return common / Math.min(ta.size, tb.size)
}

async function lookupPmid(pmid) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url)
      if (!res.ok) { await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt))); continue }
      const json = await res.json()
      const rec = json.result?.[pmid]
      if (!rec || rec.error) return { exists: false }
      return { exists: true, title: rec.title || '', authors: (rec.authors || []).map(a => a.name).join(', ') }
    } catch (err) {
      if (attempt === 2) return { networkError: true, error: err.message }
      await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt)))
    }
  }
  return { networkError: true }
}

async function searchCandidates(citedTitle, excludePmids) {
  const stop = new Set(['this','that','with','from','have','been','were','their','about','which','study','effects','effect','using','versus','among','during'])
  const ts = normalize(citedTitle).split(' ').filter(t => t.length >= 4 && !stop.has(t))
  if (ts.length === 0) return []
  const query = encodeURIComponent(ts.slice(0, 8).join(' '))
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmax=8&retmode=json`
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(searchUrl)
      if (!res.ok) { await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt))); continue }
      const json = await res.json()
      const pmids = (json.esearchresult?.idlist || []).filter(p => !excludePmids.includes(p))
      if (pmids.length === 0) return []
      await new Promise(r => setTimeout(r, 200))
      const sumUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
      const sumRes = await fetch(sumUrl)
      if (!sumRes.ok) return []
      const sumJson = await sumRes.json()
      const results = []
      for (const pmid of pmids) {
        const rec = sumJson.result?.[pmid]
        if (!rec || rec.error) continue
        const title = rec.title || ''
        const authors = (rec.authors || []).slice(0, 3).map(a => a.name).join(', ')
        const year = (rec.pubdate || '').slice(0, 4)
        const ratio = overlapRatio(citedTitle, title)
        results.push({ pmid, title, authors, year, ratio })
      }
      return results.sort((a, b) => b.ratio - a.ratio)
    } catch (err) {
      if (attempt === 2) return []
      await new Promise(r => setTimeout(r, 1000 * Math.pow(3, attempt)))
    }
  }
  return []
}

async function processEntry(libId, slug) {
  const entryPath = resolve(repoRoot, 'src/data/libraries', libId, 'entries/hu', `${slug}.js`)
  if (!existsSync(entryPath)) return null
  const mod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
  const entry = mod.default
  const studies = Array.isArray(entry?.studies) ? entry.studies : []

  const badEntries = []
  for (const study of studies) {
    if (!study?.pmid) continue
    const pmid = String(study.pmid).trim()
    if (!/^\d+$/.test(pmid)) continue
    const result = await lookupPmid(pmid)
    await new Promise(r => setTimeout(r, 300))
    if (result.networkError) {
      badEntries.push({ badPmid: pmid, citedTitle: study.title, citedAuthors: study.authors, citedFindings: study.findings, citedPopulation: study.population, error: 'NETWORK' })
      continue
    }
    if (!result.exists) {
      const cands = await searchCandidates(study.title || '', [pmid])
      await new Promise(r => setTimeout(r, 300))
      badEntries.push({ badPmid: pmid, status: 'NOT_FOUND', citedTitle: study.title, citedAuthors: study.authors, citedFindings: study.findings, citedPopulation: study.population, candidates: cands.slice(0, 8) })
      continue
    }
    const ratio = overlapRatio(study.title, result.title)
    if (ratio < 0.25) {
      const cands = await searchCandidates(study.title || '', [pmid])
      await new Promise(r => setTimeout(r, 300))
      badEntries.push({ badPmid: pmid, status: 'MISMATCH', citedTitle: study.title, realTitle: result.title, citedAuthors: study.authors, citedFindings: study.findings, citedPopulation: study.population, candidates: cands.slice(0, 8) })
    }
  }
  return badEntries
}

async function main() {
  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries/hu')
    if (!existsSync(entriesDir)) continue
    const files = readdirSync(entriesDir).filter(f => f.endsWith('.js'))
    const outDir = resolve(repoRoot, 'pmid-candidates', libId)
    mkdirSync(outDir, { recursive: true })

    for (const file of files) {
      const slug = file.replace(/\.js$/, '')
      if (entryFilter && slug !== entryFilter) continue
      console.log(`Processing ${libId}/${slug}...`)
      const bad = await processEntry(libId, slug)
      if (bad === null) continue
      const outPath = resolve(outDir, `${slug}.json`)
      writeFileSync(outPath, JSON.stringify(bad, null, 2), 'utf-8')
      console.log(`  → ${bad.length} bad PMID(s), wrote ${outPath}`)
    }
  }
}

main().catch(err => { console.error('Suggest-batch failed:', err); process.exit(1) })
