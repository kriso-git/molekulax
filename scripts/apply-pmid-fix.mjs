// Atomic per-entry PMID-replace across all 3 lang files. No Edit tool (avoids
// curly-quote corruption). Uses fs.readFileSync/writeFileSync UTF-8.
//
// Run (preferred — handles colons in titles/journals safely):
//   node scripts/apply-pmid-fix.mjs --entry <slug> --replacements-file pmid-candidates/<lib>/<entry>.fixes.json [--lib <id>] [--dry-run]
//
// Or (legacy, NO colons allowed in title/authors/journal):
//   node scripts/apply-pmid-fix.mjs --entry <slug> --replacements '<old>=<new>:<title>:<authors>[:<journal>];...' [--lib <id>] [--dry-run]
//
// Fix-file JSON shape: [ { "oldPmid": "...", "newPmid": "...", "title": "...", "authors": "...", "journal": "..." }, ... ]
// journal is optional — if present, will update the journal field too.

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const args = process.argv.slice(2)
const entry = args[args.indexOf('--entry') + 1]
const replArg = args.includes('--replacements') ? args[args.indexOf('--replacements') + 1] : null
const replFile = args.includes('--replacements-file') ? args[args.indexOf('--replacements-file') + 1] : null
const libArg = args.includes('--lib') ? args[args.indexOf('--lib') + 1] : null
const dryRun = args.includes('--dry-run')

if (!entry || (!replArg && !replFile)) {
  console.error('Usage: --entry <slug> [--lib <id>] (--replacements-file <json> | --replacements "old=new:title:authors[:journal];...") [--dry-run]')
  process.exit(2)
}

let replacements
if (replFile) {
  const jsonPath = resolve(repoRoot, replFile)
  if (!existsSync(jsonPath)) { console.error(`Replacements file not found: ${jsonPath}`); process.exit(2) }
  const parsed = JSON.parse(readFileSync(jsonPath, 'utf-8'))
  if (!Array.isArray(parsed)) { console.error('Replacements file must be a JSON array'); process.exit(2) }
  replacements = parsed.map(r => {
    if (!r.oldPmid || !r.newPmid) throw new Error(`Bad fix entry (missing oldPmid/newPmid): ${JSON.stringify(r)}`)
    return { oldPmid: String(r.oldPmid), newPmid: String(r.newPmid), newTitle: r.title || '', newAuthors: r.authors || '', newJournal: r.journal || null }
  })
} else {
  // Legacy CLI parser: oldPmid=newPmid:newTitle:newAuthors[:newJournal];oldPmid2=...
  // Split on FIRST `=`, then FIRST 2 (or 3) colons.
  replacements = replArg.split(';').map(s => s.trim()).filter(Boolean).map(s => {
    const eqIdx = s.indexOf('=')
    if (eqIdx < 0) throw new Error(`Bad replacement: ${s}`)
    const oldPmid = s.slice(0, eqIdx).trim()
    const rest = s.slice(eqIdx + 1)
    // newPmid is digits only, terminated by first `:`
    const colon1 = rest.indexOf(':')
    if (colon1 < 0) throw new Error(`Bad replacement (need at least 1 colon): ${s}`)
    const newPmid = rest.slice(0, colon1).trim()
    // For legacy CLI mode, we use a heuristic: 2 colons = title:authors, 3 colons = title:authors:journal.
    // But title or authors MAY contain colons too — this is fragile. Recommend --replacements-file for safety.
    const tailParts = rest.slice(colon1 + 1).split(':')
    if (tailParts.length < 2) throw new Error(`Bad replacement (need title:authors): ${s}`)
    let newTitle, newAuthors, newJournal = null
    if (tailParts.length === 2) {
      newTitle = tailParts[0].trim(); newAuthors = tailParts[1].trim()
    } else if (tailParts.length === 3) {
      newTitle = tailParts[0].trim(); newAuthors = tailParts[1].trim(); newJournal = tailParts[2].trim()
    } else {
      console.warn(`  ⚠ CLI replacement has ${tailParts.length} colons — title/authors/journal split ambiguous, use --replacements-file instead`)
      // Greedy: assume LAST element is journal, second-to-last is authors, rest is title
      newJournal = tailParts.pop().trim()
      newAuthors = tailParts.pop().trim()
      newTitle = tailParts.join(':').trim()
    }
    return { oldPmid, newPmid, newTitle, newAuthors, newJournal }
  })
}

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

  for (const { oldPmid, newPmid, newTitle, newAuthors, newJournal } of replacements) {
    // 1. Replace pmid string.
    const pmidRe = new RegExp(`("pmid"\\s*:\\s*"|pmid:\\s*")${oldPmid}(")`, 'g')
    const beforePmid = content
    content = content.replace(pmidRe, `$1${newPmid}$2`)
    if (content === beforePmid) {
      console.log(`  ${lang}: ❌ PMID ${oldPmid} not found in file`)
      anyFail = true
      continue
    }

    // 2. Replace title + authors. blockRe: title group + authors group + tail-up-to-pmid group.
    // Use match-based approach (NOT g flag for inspection) to detect oldTitle === newTitle no-op.
    const blockRe = new RegExp(
      `("title"\\s*:\\s*")([^"]*)(",\\s*"authors"\\s*:\\s*")([^"]*)(",[^}]*"pmid"\\s*:\\s*"${newPmid}")`
    )
    const m = content.match(blockRe)
    if (!m) {
      console.log(`  ${lang}: ⚠ title-block not found for new PMID ${newPmid} (manual inspection needed)`)
    } else {
      const [, openTitle, oldTitle, midAuthors, oldAuthors, tailToPmid] = m
      const escTitle = newTitle.replace(/"/g, '\\"')
      const escAuthors = newAuthors.replace(/"/g, '\\"')
      const titleChanged = oldTitle !== escTitle
      const authorsChanged = oldAuthors !== escAuthors
      if (titleChanged || authorsChanged) {
        const replacement = `${openTitle}${escTitle}${midAuthors}${escAuthors}${tailToPmid}`
        content = content.replace(blockRe, replacement)
      }
    }

    // 3. (Optional) Replace journal. Locate the same record by new PMID, swap journal value.
    if (newJournal) {
      const journalRe = new RegExp(
        `("journal"\\s*:\\s*")([^"]*)(",\\s*"pmid"\\s*:\\s*"${newPmid}")`
      )
      const jm = content.match(journalRe)
      if (!jm) {
        console.log(`  ${lang}: ⚠ journal-field not found for new PMID ${newPmid} (skipped)`)
      } else {
        const [, openJ, oldJ, tailJ] = jm
        const escJ = newJournal.replace(/"/g, '\\"')
        if (oldJ !== escJ) {
          content = content.replace(journalRe, `${openJ}${escJ}${tailJ}`)
        }
      }
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
