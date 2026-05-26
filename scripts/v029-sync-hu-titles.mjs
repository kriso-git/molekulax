// v0.29 HU-cited title sync — replace HU-cited titles with real PubMed titles
// for entries where verify-pmids token-overlap fails on HU↔EN despite paper IDs being correct.
//
// Targets: bpc-157 (40756949, 40789979), ghk-cu (29662016 if salvageable, else removal),
// plus any other HU-cited that we identify.

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const syncs = [
  // bpc-157 — HU-cited "ortopédiai sportmedicinában" → real EN title
  {
    lib: 'peptides', entry: 'bpc-157', pmid: '40756949',
    newTitle: 'Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review.',
    newAuthors: 'Vasireddi N, Hahamyan H, Salata MJ, et al.',
  },
  // bpc-157 — HU-cited "Regeneration or Risk" → real EN title
  {
    lib: 'peptides', entry: 'bpc-157', pmid: '40789979',
    newTitle: 'Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Healing.',
    newAuthors: '',
  },
]

for (const sync of syncs) {
  for (const lang of ['hu', 'en', 'pl']) {
    const path = resolve(repoRoot, 'src/data/libraries', sync.lib, 'entries', lang, `${sync.entry}.js`)
    let content
    try { content = readFileSync(path, 'utf-8') } catch { continue }
    const original = content

    // Find the title-authors-...-pmid block, replace title + authors
    const blockRe = new RegExp(
      `("title"\\s*:\\s*")([^"]*)(",\\s*"authors"\\s*:\\s*")([^"]*)(",[^}]*"pmid"\\s*:\\s*"${sync.pmid}")`
    )
    const m = content.match(blockRe)
    if (!m) {
      console.log(`${sync.entry}/${lang} PMID ${sync.pmid}: ❌ block not found`)
      continue
    }
    const [, openT, oldT, midA, oldA, tailToPmid] = m
    const escT = sync.newTitle.replace(/"/g, '\\"')
    const escA = sync.newAuthors ? sync.newAuthors.replace(/"/g, '\\"') : oldA
    if (oldT === escT && oldA === escA) {
      console.log(`${sync.entry}/${lang} PMID ${sync.pmid}: no-op`)
      continue
    }
    content = content.replace(blockRe, `${openT}${escT}${midA}${escA}${tailToPmid}`)
    if (content !== original) {
      writeFileSync(path, content, 'utf-8')
      console.log(`${sync.entry}/${lang} PMID ${sync.pmid}: ✅ wrote`)
    }
  }
}
