// Atomic per-entry PMID-replace across all 3 lang files. No Edit tool (avoids
// curly-quote corruption). Uses fs.readFileSync/writeFileSync UTF-8.
//
// Run: node scripts/apply-pmid-fix.mjs --entry <slug> --replacements '<old>=<new>:<title>:<authors>;...'
//      node scripts/apply-pmid-fix.mjs --entry <slug> --lib <id> --replacements ... --dry-run

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const args = process.argv.slice(2)
const entry = args[args.indexOf('--entry') + 1]
const replArg = args[args.indexOf('--replacements') + 1]
const libArg = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const dryRun = args.includes('--dry-run')

if (!entry || !replArg) {
  console.error('Usage: --entry <slug> [--lib <id>] --replacements "old=new:title:authors;old2=new2:..." [--dry-run]')
  process.exit(2)
}

// Parse replacements: oldPmid=newPmid:newTitle:newAuthors;oldPmid2=...
// title/authors may contain colons; split only on the FIRST two colons of each replacement
const replacements = replArg.split(';').map(s => s.trim()).filter(Boolean).map(s => {
  const eqIdx = s.indexOf('=')
  if (eqIdx < 0) throw new Error(`Bad replacement: ${s}`)
  const oldPmid = s.slice(0, eqIdx).trim()
  const rest = s.slice(eqIdx + 1)
  const colon1 = rest.indexOf(':')
  const colon2 = rest.indexOf(':', colon1 + 1)
  if (colon1 < 0 || colon2 < 0) throw new Error(`Bad replacement (need 2 colons): ${s}`)
  const newPmid = rest.slice(0, colon1).trim()
  const newTitle = rest.slice(colon1 + 1, colon2).trim()
  const newAuthors = rest.slice(colon2 + 1).trim()
  return { oldPmid, newPmid, newTitle, newAuthors }
})

console.log(`Applying ${replacements.length} replacement(s) to ${entry} (${dryRun ? 'DRY-RUN' : 'WRITE'})`)

const LIBS = ['performance', 'pharmaceutical', 'peptides', 'nootropics']
let targetLib = null
if (libArg) {
  const path = resolve(repoRoot, 'src/data/libraries', libArg, 'entries/hu', `${entry}.js`)
  if (existsSync(path)) targetLib = libArg
} else {
  for (const lib of LIBS) {
    const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries/hu', `${entry}.js`)
    if (existsSync(path)) { targetLib = lib; break }
  }
}
if (!targetLib) { console.error(`Entry not found in any lib: ${entry}`); process.exit(1) }
console.log(`Target lib: ${targetLib}`)

let anyFail = false
for (const lang of ['hu', 'en', 'pl']) {
  const path = resolve(repoRoot, 'src/data/libraries', targetLib, 'entries', lang, `${entry}.js`)
  if (!existsSync(path)) { console.log(`  ${lang}: file missing, skip`); continue }
  let content = readFileSync(path, 'utf-8')
  const original = content

  for (const { oldPmid, newPmid, newTitle, newAuthors } of replacements) {
    // 1. Replace pmid string. Match: pmid: "12345"  with optional surrounding whitespace
    const pmidRe = new RegExp(`("pmid"\\s*:\\s*"|pmid:\\s*")${oldPmid}(")`, 'g')
    const beforePmid = content
    content = content.replace(pmidRe, `$1${newPmid}$2`)
    if (content === beforePmid) {
      console.log(`  ${lang}: ❌ PMID ${oldPmid} not found in file`)
      anyFail = true
      continue
    }

    // 2. Replace title. Find the studies-block entry whose pmid is now newPmid, and update title.
    // Strategy: find the `{ ... "pmid": "newPmid" ... }` object block and replace title key inside it.
    // We use a focused regex on the previous-line title since studies arrays have stable shape.
    const blockRe = new RegExp(
      `("title"\\s*:\\s*")[^"]*(",\\s*"authors"\\s*:\\s*")[^"]*(",[^}]*"pmid"\\s*:\\s*"${newPmid}")`,
      'g'
    )
    const beforeBlock = content
    const escTitle = newTitle.replace(/"/g, '\\"')
    const escAuthors = newAuthors.replace(/"/g, '\\"')
    content = content.replace(blockRe, `$1${escTitle}$2${escAuthors}$3`)
    if (content === beforeBlock) {
      console.log(`  ${lang}: ⚠ title/authors not replaced for new PMID ${newPmid} (block-regex didn't match — manual inspection needed)`)
      // Not a hard fail — pmid was replaced, title/authors can be hand-edited
    }
  }

  if (content === original) {
    console.log(`  ${lang}: no-op (no changes)`)
  } else if (dryRun) {
    console.log(`  ${lang}: would change ${original.length} → ${content.length} bytes`)
  } else {
    writeFileSync(path, content, 'utf-8')
    console.log(`  ${lang}: ✅ wrote ${content.length} bytes`)
  }
}

if (anyFail) { console.error('\n❌ Some replacements failed — investigate before commit'); process.exit(1) }
console.log('\n✅ All replacements applied' + (dryRun ? ' (dry-run, no writes)' : ''))
