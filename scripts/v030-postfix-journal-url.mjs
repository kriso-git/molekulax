// v0.30 — post-apply patcher for journal + url fields
// The apply-pmid-fix.mjs handles title/authors via regex anchored on "pmid":"new",
// but journal/url come BEFORE pmid in the entry, so script can't reach them.
// This patches them: find the study-block by new PMID, rewrite journal & URL fields.

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const FIXES = {
  peptides: {
    ipamorelin: [{ oldPmid: '28666687', newPmid: '28400207', journal: 'Sex Med Rev. 2018;6(1):45-53.' }],
    mazdutide: [{ oldPmid: '39041741', newPmid: '40421736', journal: 'N Engl J Med. 2025;392(22):2215-2225.' }],
    glow: [{ oldPmid: '23749167', newPmid: '32945357', journal: 'Int J Mol Med. 2020;46(4):1347-1358.' }],
    gonadorelin: [{ oldPmid: '3935474', newPmid: '40800099', journal: 'Transl Androl Urol. 2025;14(7):2043-2058.' }],
    'ghrp-6': [{ oldPmid: '2229298', newPmid: '9893708', journal: 'Cell Mol Life Sci. 1998;54(12):1316-1329.' }],
    kisspeptin: [{ oldPmid: '24450286', newPmid: '34646652', journal: 'Cureus. 2021;13(8):e17600.' }],
    humanin: [{ oldPmid: '23375520', newPmid: '40090538', journal: 'Eur J Pharmacol. 2025;998:177510.' }],
    epithalon: [{ oldPmid: '19823771', newPmid: '37782636', journal: 'Adv Gerontol. 2023;36(3):302-312.' }],
  },
  nootropics: {
    piracetam: [{ oldPmid: '11405969', newPmid: '12006732', journal: 'Dement Geriatr Cogn Disord. 2002;13(4):217-224.' }],
    '9-me-bc': [
      { oldPmid: '20517703', newPmid: '20374418', journal: 'J Neurochem. 2010;113(6):1659-1675.' },
      { oldPmid: '18434025', newPmid: '20360614', journal: 'Pharmacol Rep. 2010;62(1):35-53.' },
    ],
    semax: [{ oldPmid: '15293774', newPmid: '15792140', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2005;105(2):35-40.' }],
    phenylpiracetam: [
      { oldPmid: '16447598', newPmid: '21626817', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2010;110(12 Pt 2):38-40.' },
      { oldPmid: '17593821', newPmid: '25726789', journal: 'Zh Nevrol Psikhiatr Im S S Korsakova. 2014;114(12):104-111.' },
    ],
  },
}

let anyFail = false

for (const [lib, entries] of Object.entries(FIXES)) {
  for (const [slug, fixes] of Object.entries(entries)) {
    for (const lang of ['hu', 'en', 'pl']) {
      const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries', lang, slug + '.js')
      if (!existsSync(path)) { console.log(`  ${lib}/${slug}/${lang}: file missing, skip`); continue }
      let content = readFileSync(path, 'utf-8')
      const original = content
      for (const { oldPmid, newPmid, journal } of fixes) {
        // 1. Update journal field — locate by "pmid":"newPmid" then backtrack via lookahead to nearest preceding "journal":"<old>"
        // Strategy: find block ending with "pmid":"new"; capture journal field in the same block.
        // Block-bounded regex: "journal":"...","year":"...","pmid":"newPmid"
        const blockRe = new RegExp(
          `("journal"\\s*:\\s*")([^"]*)("(?:,\\s*"year"\\s*:\\s*"[^"]*")?,\\s*"pmid"\\s*:\\s*"${newPmid}")`
        )
        const m = content.match(blockRe)
        if (!m) {
          console.log(`  ${lib}/${slug}/${lang}: journal block not found for PMID ${newPmid}`)
          anyFail = true
        } else {
          const [, openJ, oldJ, tailJ] = m
          const escJ = journal.replace(/"/g, '\\"')
          if (oldJ !== escJ) {
            content = content.replace(blockRe, `${openJ}${escJ}${tailJ}`)
          }
        }
        // 2. Update url field — already shouldn't need this, but safety: pubmed/<oldPmid>/ → pubmed/<newPmid>/
        const urlRe = new RegExp(`(pubmed\\.ncbi\\.nlm\\.nih\\.gov/)${oldPmid}(/?")`, 'g')
        content = content.replace(urlRe, `$1${newPmid}$2`)
      }
      if (content !== original) {
        writeFileSync(path, content, 'utf-8')
        console.log(`  ${lib}/${slug}/${lang}: ✅ ${content.length} bytes`)
      } else {
        console.log(`  ${lib}/${slug}/${lang}: no-op`)
      }
    }
  }
}

if (anyFail) { console.error('\n❌ Some patches failed'); process.exit(1) }
console.log('\n✅ All journal+url patches applied')
