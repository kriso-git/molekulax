// Verify every `pmid` in every entry's `studies[]` array via the NCBI eutils
// esummary API. Cross-checks the cited title against the actual PubMed title
// (token-overlap heuristic). Flags PMIDs that don't exist, return wrong-paper,
// or match a paper whose title bears no resemblance to the cited one.
//
// Run: node scripts/verify-pmids.mjs [--lib <id>] [--entry <slug>] [--suggest] [--strict] [--batch] [--ci]
//
// Output: per-PMID line with status — OK / MISMATCH / NOT_FOUND / MAYBE_FP_HU /
// MAYBE_FP_RU / NETWORK_ERR. MAYBE_FP_HU and MAYBE_FP_RU are flagged when the
// cited title contains Hungarian diacritics ([áéíóöőúüű]) or is fully wrapped
// in brackets ([Russian-translated]), respectively, and the token-overlap with
// the real PubMed title falls below the loose threshold (0.10) — these need
// manual review, not automatic fabrication-rejection.
//
// --batch: opt-in mode for lib-wide runs. Fetches up to 50 PMIDs per esummary
// URL with 700ms pause between chunks, ~25-30x faster than per-PMID mode.
// Default (no flag) keeps per-PMID lookup with 400ms rate-limit (backward-compat).
// --ci: CI mode. Exits 2 (not 0) when transient network errors leave PMIDs
// unverified, so the workflow can retry. Real MISMATCH/NOT_FOUND still exit 1.
//
// Exit codes: 0 = clean; 1 = MISMATCH/NOT_FOUND (and MAYBE_FP_HU/RU under --strict);
// 2 = transient network errors left PMIDs unverified under --ci (retry signal).

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
const batchMode = args.includes('--batch')
const ciMode = args.includes('--ci')

const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const langs = ['hu', 'en', 'pl']

export const STATUS = Object.freeze({
  OK: 'OK',
  MISMATCH: 'MISMATCH',
  NOT_FOUND: 'NOT_FOUND',
  MAYBE_FP_HU: 'MAYBE_FP_HU',
  MAYBE_FP_RU: 'MAYBE_FP_RU',
  NETWORK_ERR: 'NETWORK_ERR',
})

// E1: append the NCBI API key (if NCBI_API_KEY env is set) to an eutils URL.
// Raises the rate limit 3→10 req/s. No env → url unchanged (graceful degrade).
export function withApiKey(url) {
  const key = process.env.NCBI_API_KEY
  return key ? `${url}&api_key=${encodeURIComponent(key)}` : url
}

// E3: final summary line for PMIDs left unverified by transient network errors.
export function networkSummaryLine(count) {
  return count > 0 ? `⚠️  ${count} PMID(s) unverified (network error)` : null
}

// E4: exit code decision. Blocking issues (MISMATCH/NOT_FOUND) → 1. In --strict,
// MAYBE_FP → 1. In --ci, leftover network-unverified PMIDs → 2 (workflow retries).
// Without --ci, network errors never block (hook path: exit 0). Blocking wins over ci/network.
export function computeExitCode({ blockingCount, maybeFpCount, networkErrCount, strictMode, ciMode }) {
  if (blockingCount > 0) return 1
  if (strictMode && maybeFpCount > 0) return 1
  if (ciMode && networkErrCount > 0) return 2
  return 0
}

function normalize(s) {
  let str = (s || '')
  // S4: strip RU-bracket wrapper before tokenization, so '[Russian title]'
  // tokens aren't prefixed/suffixed with brackets that survive punct-strip
  // until after the inner content is already counted as malformed.
  if (isHuRuTitle(str) === 'ru') {
    str = str.trim().slice(1, -1)
  }
  return str.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
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

export function classifyOverlap(citedTitle, realTitle) {
  const lang = isHuRuTitle(citedTitle)
  const threshold = lang ? 0.10 : 0.25
  const ratio = overlapRatio(citedTitle, realTitle)
  if (ratio >= threshold) {
    return { status: STATUS.OK, ratio, langTag: lang || null }
  }
  if (lang === 'hu') return { status: STATUS.MAYBE_FP_HU, ratio, langTag: 'hu' }
  if (lang === 'ru') return { status: STATUS.MAYBE_FP_RU, ratio, langTag: 'ru' }
  return { status: STATUS.MISMATCH, ratio, langTag: null }
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
    const res = await fetch(withApiKey(url))
    if (!res.ok) return []
    const json = await res.json()
    const pmids = (json.esearchresult?.idlist || []).filter(p => !excludePmids.includes(p))
    if (pmids.length === 0) return []
    await new Promise(r => setTimeout(r, 200))
    const sumUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`
    const sumRes = await fetch(withApiKey(sumUrl))
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

export async function lookupPmid(pmid) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`
  try {
    const res = await fetch(withApiKey(url))
    // E2: transport-level failure (429/503/etc.) is transient — a real "not found"
    // comes from a 200 response with rec.error below, not from an HTTP error.
    if (!res.ok) return { networkError: true, error: `HTTP ${res.status}` }
    const json = await res.json()
    const rec = json.result?.[pmid]
    if (!rec || rec.error) return { exists: false, error: rec?.error || 'no record' }
    return { exists: true, title: rec.title, authors: (rec.authors || []).map(a => a.name).join(', ') }
  } catch (err) {
    return { networkError: true, error: err.message }
  }
}

export async function lookupBatched(pmids) {
  const result = new Map()
  for (let i = 0; i < pmids.length; i += 50) {
    const chunk = pmids.slice(i, i + 50)
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${chunk.join(',')}&retmode=json`
    try {
      const res = await fetch(withApiKey(url))
      // E2: transport-level failure (429/503/etc.) is transient (see lookupPmid).
      if (!res.ok) {
        for (const pmid of chunk) result.set(pmid, { networkError: true, error: `HTTP ${res.status}` })
      } else {
        const json = await res.json()
        for (const pmid of chunk) {
          const rec = json.result?.[pmid]
          if (!rec || rec.error) {
            result.set(pmid, { exists: false, error: rec?.error || 'no record' })
          } else {
            result.set(pmid, {
              exists: true,
              title: rec.title,
              authors: (rec.authors || []).map(a => a.name).join(', '),
            })
          }
        }
      }
    } catch (err) {
      for (const pmid of chunk) result.set(pmid, { networkError: true, error: err.message })
    }
    if (i + 50 < pmids.length) await new Promise(r => setTimeout(r, 700))
  }
  return result
}

async function main() {
  const issues = []
  const seen = new Set()
  let networkErrCount = 0

  // Pass 1: gather all study tuples across libs/entries (always, regardless of mode)
  const allStudies = []
  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries')
    if (!existsSync(entriesDir)) continue
    const perLang = existsSync(resolve(entriesDir, 'hu'))
    if (!perLang) continue

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
        allStudies.push({ libId, slug, pmid, study })
      }
    }
  }

  // Pass 2: lookup + classify
  let batchMap = null
  if (batchMode) {
    const uniquePmids = [...new Set(allStudies.map(s => s.pmid))]
    console.log(`Batch mode: looking up ${uniquePmids.length} unique PMIDs in ${Math.ceil(uniquePmids.length / 50)} chunk(s)...`)
    batchMap = await lookupBatched(uniquePmids)
  }

  for (const { libId, slug, pmid, study } of allStudies) {
    const result = batchMode ? batchMap.get(pmid) : await lookupPmid(pmid)

    if (result.networkError) {
      console.log(`  NETWORK_ERR ${libId}/${slug}: PMID ${pmid} (${result.error})`)
      networkErrCount++
      continue
    }
    if (!result.exists) {
      console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} NOT_FOUND (cited as "${study.title?.slice(0, 60)}")`)
      issues.push({ libId, slug, pmid, citedTitle: study.title, status: STATUS.NOT_FOUND })
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

    const { status, ratio, langTag } = classifyOverlap(study.title, result.title)

    if (status === STATUS.OK) {
      const tag = langTag ? ` [${langTag.toUpperCase()}-loose]` : ''
      console.log(`  ✅ ${libId}/${slug}: PMID ${pmid} OK (overlap ${(ratio * 100).toFixed(0)}%)${tag}`)
    } else if (status === STATUS.MAYBE_FP_HU || status === STATUS.MAYBE_FP_RU) {
      console.log(`  ⚠️  ${libId}/${slug}: PMID ${pmid} ${status} (manual review)`)
      console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
      console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
      issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status, ratio })
    } else {
      console.log(`  ❌ ${libId}/${slug}: PMID ${pmid} MISMATCH`)
      console.log(`     cited: "${(study.title || '').slice(0, 80)}"`)
      console.log(`     real:  "${(result.title || '').slice(0, 80)}"`)
      issues.push({ libId, slug, pmid, citedTitle: study.title, realTitle: result.title, status: STATUS.MISMATCH })
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
    // Rate limit only in per-PMID mode (batch mode already paused between chunks)
    if (!batchMode) await new Promise(r => setTimeout(r, 400))
  }

  const blocking = issues.filter(i => i.status === STATUS.MISMATCH || i.status === STATUS.NOT_FOUND)
  const maybeFp = issues.filter(i => i.status === STATUS.MAYBE_FP_HU || i.status === STATUS.MAYBE_FP_RU)

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
      for (const status of [STATUS.MISMATCH, STATUS.NOT_FOUND]) {
        if (!byStatus[status]) continue
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
      for (const status of [STATUS.MAYBE_FP_HU, STATUS.MAYBE_FP_RU]) {
        if (!byStatus[status]) continue
        console.log(`  ${status} (${byStatus[status].length}):`)
        for (const i of byStatus[status]) {
          const ratioStr = i.ratio != null ? ` (ratio ${(i.ratio * 100).toFixed(0)}%)` : ''
          console.log(`    ${i.libId}/${i.slug} PMID ${i.pmid}${ratioStr}`)
        }
      }
    }
  }

  const netLine = networkSummaryLine(networkErrCount)
  if (netLine) console.log(netLine)

  const exitCode = computeExitCode({
    blockingCount: blocking.length,
    maybeFpCount: maybeFp.length,
    networkErrCount,
    strictMode,
    ciMode,
  })
  if (exitCode !== 0) process.exit(exitCode)
}

// Only run when invoked directly (not when imported by tests)
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(err => {
    console.error('Verify failed:', err)
    process.exit(1)
  })
}
