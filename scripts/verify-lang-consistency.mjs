// Cross-lang consistency guard. Offline (no network). For each entry, the
// `studies[]` {pmid, title} sequence must be identical across hu/en/pl —
// only tag/tagText/finding are translated. Exits 1 on any drift.
//
// Run: node scripts/verify-lang-consistency.mjs [--lib <id>] [--entry <slug>]

import { readdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const LIBRARIES = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const LANGS = ['hu', 'en', 'pl']

const args = process.argv.slice(2)
const libFilter = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const entryFilter = args.includes('--entry') ? args[args.indexOf('--entry') + 1] : null

function toSeq(studies) {
  const arr = Array.isArray(studies) ? studies : []
  return arr.map(s => ({
    pmid: String(s?.pmid ?? '').trim(),
    title: String(s?.title ?? '').trim(),
  }))
}

// Compare en and pl against hu (reference). Returns { ok, diffs }.
// Diff: { lang, index, field: 'count'|'pmid'|'title', hu, other }.
// For 'count', index = -1 and hu/other are the array lengths.
export function compareEntryStudies({ hu, en, pl }) {
  // hu undefined/non-array → empty ref; en/pl then surface count diffs against it.
  const ref = toSeq(hu)
  const diffs = []
  const inputs = { en, pl }
  for (const lang of ['en', 'pl']) {
    const other = toSeq(inputs[lang])
    if (other.length !== ref.length) {
      diffs.push({ lang, index: -1, field: 'count', hu: ref.length, other: other.length })
    }
    const n = Math.min(ref.length, other.length)
    for (let i = 0; i < n; i++) {
      if (other[i].pmid !== ref[i].pmid) {
        diffs.push({ lang, index: i, field: 'pmid', hu: ref[i].pmid, other: other[i].pmid })
      }
      if (other[i].title !== ref[i].title) {
        diffs.push({ lang, index: i, field: 'title', hu: ref[i].title, other: other[i].title })
      }
    }
  }
  return { ok: diffs.length === 0, diffs }
}

async function loadStudies(entriesDir, lang, slug) {
  const p = resolve(entriesDir, lang, `${slug}.js`)
  if (!existsSync(p)) return undefined
  const mod = await import(`file://${p.replace(/\\/g, '/')}`)
  return mod.default?.studies
}

async function main() {
  let driftCount = 0
  let checked = 0
  for (const libId of LIBRARIES) {
    if (libFilter && libId !== libFilter) continue
    const entriesDir = resolve(repoRoot, 'src/data/libraries', libId, 'entries')
    if (!existsSync(resolve(entriesDir, 'hu'))) continue

    const slugSet = new Set()
    for (const lang of LANGS) {
      const dir = resolve(entriesDir, lang)
      if (!existsSync(dir)) continue
      for (const f of readdirSync(dir)) {
        if (f.endsWith('.js')) slugSet.add(f.replace(/\.js$/, ''))
      }
    }

    for (const slug of [...slugSet].sort()) {
      if (entryFilter && slug !== entryFilter) continue
      const [hu, en, pl] = await Promise.all(LANGS.map(l => loadStudies(entriesDir, l, slug)))
      const { ok, diffs } = compareEntryStudies({ hu, en, pl })
      checked++
      if (ok) {
        console.log(`  ✅ ${libId}/${slug}`)
      } else {
        driftCount++
        console.log(`  ❌ ${libId}/${slug}`)
        for (const d of diffs) {
          if (d.field === 'count') {
            console.log(`     [${d.lang}] study count: hu=${d.hu} ${d.lang}=${d.other}`)
          } else {
            console.log(`     [${d.lang}] #${d.index} ${d.field}: hu="${d.hu}" ${d.lang}="${d.other}"`)
          }
        }
      }
    }
  }
  console.log(`\nChecked ${checked} entr${checked === 1 ? 'y' : 'ies'}, ${driftCount} with drift.`)
  process.exit(driftCount > 0 ? 1 : 0)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(err => {
    console.error('verify-lang-consistency failed:', err)
    process.exit(1)
  })
}
