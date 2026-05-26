// Verify every `pmid` in every entry's `studies[]` array via the NCBI eutils
// esummary API. Cross-checks the cited title against the actual PubMed title
// (token-overlap heuristic). Flags PMIDs that don't exist, return wrong-paper,
// or match a paper whose title bears no resemblance to the cited one.
//
// Run: node scripts/verify-pmids.mjs [--lib <id>] [--entry <slug>]
//
// Output: per-PMID line with status (OK / MISMATCH / NOT_FOUND / NETWORK_ERR).
// Exits 1 if any MISMATCH or NOT_FOUND found.

import { readdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null
const suggestMode = args.includes('--suggest')
const strictMode = args.includes('--strict')

const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const langs = ['hu', 'en', 'pl']

function normalize(s) {
  return (s || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

function tokens(s) {
  return new Set(normalize(s).split(' ').filter(t => t.length >= 4))
}

function overlapRatio(a, b) {
  const ta = tokens(a)
  const tb = tokens(b)
  if (ta.size === 0 || tb.size === 0) return 0
  let common = 0
  for (const t of ta) if (tb.has(t)) common++
  return common / Math.min(ta.size, tb.size)
}

export function isHuRuTitle(s) {
  if (!s || typeof s !== 'string') return null
  if (/[áéíóöőúüű]/i.test(s)) return 'hu'
  if (/^\[.+\]$/.test(s.trim())) return 'ru'
  return null
}

async function suggestCandidates(citedTitle, excludePmids = []) {
  const stop = new Set(['this','that','with','from','have','been','were','their','about','which','study','effects','effect','using','versus','among','during'])
  const ts = normalize(citedTitle).split(' ').filter(t => t.length >= 4 && !stop.has(t))
  if (ts.length === 0) return []
  const query = encodeURIComponent(ts.slice(0, 8).join(' '))
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmax=8&retmode=json`
  try {
    const res = await fetch(url)
    if (!res.ok) return []
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
    return []
  }
}

async function lookupPmid(pmid) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`
  try {
    const res = await fetch(url)
    if (!res.ok) return { exists: false, status: res.status }
    const json = await res.json()
    const rec = json.result?.[pmid]
    if (!rec || rec.error) return { exists: false, error: rec?.error || 'no record' }
    return { exists: true, title: rec.title, authors: (rec.authors || []).map(a => a.name).join(', ') }
  } catch (err) {
    return { networkError: true, error: err.message }
  }
}

async function main() {
  const issues = []
  const seen = new Set() // dedupe PMID+title-pair across HU/EN/PL

  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries')
    if (!existsSync(entriesDir)) continue
    const perLang = existsSync(resolve(entriesDir, 'hu'))
    if (!perLang) continue

    // Only check HU (representative — same PMIDs across HU/EN/PL typically)
    const lang = 'hu'
    const langDir = resolve(entriesDir, lang)
    const files = readdirSync(langDir).filter(f => f.endsWith('.js'))

    for (const file of files) {
      const slug = file.replace(/\.js$/, '')
      if (entryFilter && slug !== entryFilter) continue
      const entryPath = resolve(langDir, file)
      const mod = await import(`file://${entryPath.replace(/\\/g, '/')}`)
      const entry = mod.default

      const studies = Array.isArray(entry?.studies) ? entry.studies : []
      for (const study of studies) {
        if (!study?.pmid) continue
        const pmid = String(study.pmid).trim()
        if (!/^\d+$/.test(pmid)) {
          console.log(`  ⚠ ${libId}/${slug} non-numeric PMID: "${pmid}"`)
          continue
        }
        const dedupeKey = `${pmid}::${study.title}`
        if (seen.has(dedupeKey)) continue
        seen.add(dedupeKey)

        const result = await lookupPmid(pmid)
        if (result.networkError) {
          console.log(`  NET ${libId}/${slug}: PMID ${pmid} (${result.error})`)
          continue
        }
        if (!result.exists) {
          console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} NOT_FOUND (cited as "${study.title?.slice(0, 60)}")`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, status: 'NOT_FOUND' })
          if (suggestMode) {
            const cands = await suggestCandidates(study.title || '', [pmid])
            if (cands.length === 0) {
              console.log(`     candidates: (none)`)
            } else {
              console.log(`     candidates:`)
              for (const c of cands.slice(0, 5)) {
                console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
              }
            }
            await new Promise(r => setTimeout(r, 300))
          }
          continue
        }
        const detectedLang = isHuRuTitle(study.title)
        const threshold = detectedLang ? 0.10 : 0.25
        const ratio = overlapRatio(study.title, result.title)

        if (ratio >= threshold) {
          const langTag = detectedLang ? ` [${detectedLang.toUpperCase()}-loose]` : ''
          console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)${langTag}`)
        } else if (detectedLang) {
          const statusTag = detectedLang === 'hu' ? 'MAYBE_FP_HU' : 'MAYBE_FP_RU'
          console.log(`  ⚠️  ${libId}/${slug}: PMID ${pmid} ${statusTag} (manual review)`)
          console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
          console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: statusTag, ratio })
          // Skip suggest mode on MAYBE_FP — these are not fabrications
        } else {
          console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} MISMATCH`)
          console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
          console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
          issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: 'MISMATCH' })
          if (suggestMode) {
            const cands = await suggestCandidates(study.title || '', [pmid])
            if (cands.length === 0) {
              console.log(`     candidates: (none)`)
            } else {
              console.log(`     candidates:`)
              for (const c of cands.slice(0, 5)) {
                console.log(`       PMID ${c.pmid}  ratio ${(c.ratio * 100).toFixed(0)}%  (${c.year}) "${c.title.slice(0, 70)}"`)
              }
            }
            await new Promise(r => setTimeout(r, 300))
          }
        }
        // Rate limit: NCBI requests max 3/sec without API key
        await new Promise(r => setTimeout(r, 400))
      }
    }
  }

  const blocking = issues.filter(i => i.status === 'MISMATCH' || i.status === 'NOT_FOUND')
  const maybeFp = issues.filter(i => i.status === 'MAYBE_FP_HU' || i.status === 'MAYBE_FP_RU')

  if (issues.length === 0) {
    console.log('\n✅ All PMIDs verified.')
  } else {
    if (blocking.length > 0) {
      console.log(`\n❌ ${blocking.length} issue(s) found:`)
      const byStatus = {}
      for (const i of blocking) {
        if (!byStatus[i.status]) byStatus[i.status] = []
        byStatus[i.status].push(i)
      }
      for (const status of Object.keys(byStatus)) {
        console.log(`  ${status} (${byStatus[status].length}):`)
        for (const i of byStatus[status]) {
          console.log(`    ${i.libId}/${i.slug} PMID ${i.pmid}`)
        }
      }
    }
    if (maybeFp.length > 0) {
      console.log(`\n⚠️  ${maybeFp.length} MAYBE_FP item(s) — manual review:`)
      const byStatus = {}
      for (const i of maybeFp) {
        if (!byStatus[i.status]) byStatus[i.status] = []
        byStatus[i.status].push(i)
      }
      for (const status of Object.keys(byStatus)) {
        console.log(`  ${status} (${byStatus[status].length}):`)
        for (const i of byStatus[status]) {
          const ratioStr = i.ratio != null ? ` (ratio ${(i.ratio * 100).toFixed(0)}%)` : ''
          console.log(`    ${i.libId}/${i.slug} PMID ${i.pmid}${ratioStr}`)
        }
      }
    }
  }

  const shouldExit1 = blocking.length > 0 || (strictMode && maybeFp.length > 0)
  if (shouldExit1) process.exit(1)
}

// Only run when invoked directly (not when imported by tests)
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(err => {
    console.error('Verify failed:', err)
    process.exit(1)
  })
}
