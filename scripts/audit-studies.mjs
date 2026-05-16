// Final Studies-section audit across all 4 libraries (Phase 6 Task 24).
//
// Approach: regex-based text scan of each library's data.js + effects.js (where
// present). The data files are too tightly coupled to Vite's resolver to import
// directly under Node ESM, so we parse them as text. This is acceptable because
// the schema for study refs is stable: each ref is an object literal with at
// least a `pmid: '<digits>'` field (preferred) or a `url: '<peer-reviewed URL>'`.
//
// Validation rules:
//   - `pmid: '<digits>'` is always OK (PubMed PMID format)
//   - `url: '<...>'` must match one of the peer-reviewed allowlist patterns
//     (PubMed, NCBI PMC, FDA, accessdata.fda.gov, EMA, clinicaltrials.gov)
//
// Usage: node scripts/audit-studies.mjs
// Exit 0 = all clean, 1 = at least one rejection.

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const LIBRARIES = [
  { id: 'peptides', files: ['src/data/libraries/peptides/data.js'] },
  { id: 'nootropics', files: ['src/data/libraries/nootropics/data.js', 'src/data/libraries/nootropics/effects.js'] },
  { id: 'performance', files: ['src/data/libraries/performance/data.js', 'src/data/libraries/performance/effects.js'] },
  { id: 'pharmaceutical', files: ['src/data/libraries/pharmaceutical/data.js', 'src/data/libraries/pharmaceutical/effects.js'] },
]

const URL_ALLOWLIST = [
  /^https?:\/\/(www\.)?pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/?/i,
  /^https?:\/\/(www\.)?ncbi\.nlm\.nih\.gov\/pmc\/articles\/PMC\d+/i,
  /^https?:\/\/(www\.)?pmc\.ncbi\.nlm\.nih\.gov\/articles\/PMC\d+/i,
  /^https?:\/\/(www\.)?fda\.gov\//i,
  /^https?:\/\/(www\.)?accessdata\.fda\.gov\//i,
  /^https?:\/\/(www\.)?ema\.europa\.eu\//i,
  /^https?:\/\/(www\.)?clinicaltrials\.gov\//i,
]

const PMID_REGEX = /pmid:\s*['"`](\d+)['"`]/g
const URL_REGEX = /url:\s*['"`]([^'"`]+)['"`]/g

let totalChecked = 0
let totalRejected = 0
const rejections = []

for (const lib of LIBRARIES) {
  let libChecked = 0
  let libRejected = 0

  for (const file of lib.files) {
    let text
    try {
      text = await readFile(join(ROOT, file), 'utf8')
    } catch (err) {
      console.log(`  (${file} not present, skipping)`)
      continue
    }

    let match
    PMID_REGEX.lastIndex = 0
    while ((match = PMID_REGEX.exec(text)) !== null) {
      totalChecked++
      libChecked++
      const pmid = match[1]
      if (!/^\d{4,9}$/.test(pmid)) {
        totalRejected++
        libRejected++
        rejections.push({ library: lib.id, file, ref: `pmid: ${pmid}`, reason: 'PMID not a 4-9 digit number' })
      }
    }

    URL_REGEX.lastIndex = 0
    while ((match = URL_REGEX.exec(text)) !== null) {
      totalChecked++
      libChecked++
      const url = match[1]
      const ok = URL_ALLOWLIST.some(re => re.test(url))
      if (!ok) {
        totalRejected++
        libRejected++
        rejections.push({ library: lib.id, file, ref: `url: ${url}`, reason: 'URL not in allowed peer-reviewed sources' })
      }
    }
  }

  console.log(`=== ${lib.id}: ${libChecked} refs checked, ${libRejected} rejected ===`)
}

console.log(`\n=== SUMMARY ===`)
console.log(`Total: ${totalChecked} refs checked, ${totalRejected} rejected.`)

if (rejections.length) {
  console.log(`\nRejections detail:`)
  for (const r of rejections) {
    console.log(`  - ${r.library} (${r.file}): ${r.ref}`)
    console.log(`    Reason: ${r.reason}`)
  }
  process.exit(1)
}

process.exit(0)
