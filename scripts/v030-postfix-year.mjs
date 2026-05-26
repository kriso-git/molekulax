// v0.30 — post-apply patcher for year field
// Updates the year field which sits between journal and pmid in entries.

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const YEARS = {
  peptides: {
    ipamorelin: { '28400207': '2018' },
    mazdutide: { '40421736': '2025' },
    glow: { '32945357': '2020' },
    gonadorelin: { '40800099': '2025' },
    'ghrp-6': { '9893708': '1998' },
    kisspeptin: { '34646652': '2021' },
    humanin: { '40090538': '2025' },
    epithalon: { '37782636': '2023' },
  },
  nootropics: {
    piracetam: { '12006732': '2002' },
    '9-me-bc': { '20374418': '2010', '20360614': '2010' },
    semax: { '15792140': '2005' },
    phenylpiracetam: { '21626817': '2010', '25726789': '2014' },
  },
}

for (const [lib, entries] of Object.entries(YEARS)) {
  for (const [slug, fixes] of Object.entries(entries)) {
    for (const lang of ['hu', 'en', 'pl']) {
      const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries', lang, slug + '.js')
      if (!existsSync(path)) { console.log(`  ${lib}/${slug}/${lang}: missing`); continue }
      let content = readFileSync(path, 'utf-8')
      const original = content
      for (const [newPmid, newYear] of Object.entries(fixes)) {
        // Find: "year":"<old>", ... "pmid":"newPmid"  — peptides have year between journal and pmid
        const yearRe = new RegExp(`("year"\\s*:\\s*")([^"]*)(",\\s*"pmid"\\s*:\\s*"${newPmid}")`)
        const m = content.match(yearRe)
        if (!m) continue
        const [, openY, oldY, tailY] = m
        if (oldY !== newYear) content = content.replace(yearRe, `${openY}${newYear}${tailY}`)
      }
      if (content !== original) {
        writeFileSync(path, content, 'utf-8')
        console.log(`  ${lib}/${slug}/${lang}: ✅ year updated`)
      }
    }
  }
}
console.log('\n✅ Year postfix done')
