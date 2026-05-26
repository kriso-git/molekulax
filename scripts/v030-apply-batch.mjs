// v0.29 batch applier — reads pmid-fixes/{peptides,nootropics}_phase{A,B}.json,
// for each entry-group: writes a tmp single-entry JSON, calls apply-pmid-fix.mjs.
// Run: node scripts/v029-apply-batch.mjs <peptides|nootropics> <A|B> [--dry-run]

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const lib = process.argv[2]
const phase = process.argv[3]
const dryRun = process.argv.includes('--dry-run')
if (!lib || !phase || !['peptides', 'nootropics'].includes(lib) || !['A', 'B', 'C'].includes(phase)) {
  console.error('Usage: node scripts/v029-apply-batch.mjs <peptides|nootropics> <A|B|C> [--dry-run]')
  process.exit(2)
}

const fixesPath = resolve(repoRoot, `pmid-fixes/${lib}_phase${phase}.json`)
if (!existsSync(fixesPath)) { console.error(`Missing: ${fixesPath}`); process.exit(2) }
const fixes = JSON.parse(readFileSync(fixesPath, 'utf-8'))

// Group keys like "tb-500_a", "tb-500_b" → "tb-500" entry, merge replacements
const grouped = {}
for (const [key, repls] of Object.entries(fixes)) {
  if (key.startsWith('_')) continue
  const slug = key.replace(/_[a-z]+$/, '')  // strip _a, _b, _ngf, etc.
  if (!Array.isArray(repls)) continue
  if (!grouped[slug]) grouped[slug] = []
  grouped[slug].push(...repls)
}

console.log(`v0.30 ${lib} Phase ${phase}: ${Object.keys(grouped).length} entries, ${Object.values(grouped).flat().length} PMID-fixes${dryRun ? ' (DRY-RUN)' : ''}\n`)

let allOk = true
for (const [slug, repls] of Object.entries(grouped)) {
  console.log(`\n=== ${slug} (${repls.length} fix${repls.length > 1 ? 'es' : ''}) ===`)
  const tmpPath = resolve(repoRoot, `pmid-fixes/_tmp_${slug}.json`)
  writeFileSync(tmpPath, JSON.stringify(repls, null, 2), 'utf-8')
  try {
    const cmd = `node scripts/apply-pmid-fix.mjs --entry ${slug} --lib ${lib} --replacements-file pmid-fixes/_tmp_${slug}.json${dryRun ? ' --dry-run' : ''}`
    const out = execSync(cmd, { cwd: repoRoot, encoding: 'utf-8' })
    process.stdout.write(out)
  } catch (e) {
    console.error(`  ❌ ${slug}: apply failed (exit ${e.status})`)
    console.error(e.stdout?.toString() || '')
    allOk = false
  }
}

console.log(`\n${allOk ? '✅ All entries applied' : '❌ Some entries failed'}${dryRun ? ' (dry-run, no writes)' : ''}`)
process.exit(allOk ? 0 : 1)
