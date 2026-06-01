// Pre-commit gate: runs verify-pmids on staged entry-data files.
// Triggered by .husky/pre-commit. Exits 1 on any PMID failure → commit aborted.
// Bypass via `git commit --no-verify`.

import { execSync, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ENTRY_FILE_RE = /^src\/data\/libraries\/(peptides|nootropics|performance|pharmaceutical)\/entries\/(hu|en|pl)\/([\w-]+)\.js$/

export function parseStagedFiles(stagedList) {
  const seen = new Map()
  for (const file of stagedList) {
    const m = ENTRY_FILE_RE.exec(file)
    if (!m) continue
    const libId = m[1]
    const entryId = m[3]
    const key = `${libId}/${entryId}`
    if (!seen.has(key)) seen.set(key, { libId, entryId })
  }
  return [...seen.values()].sort((a, b) => {
    if (a.libId !== b.libId) return a.libId < b.libId ? -1 : 1
    return a.entryId < b.entryId ? -1 : 1
  })
}

async function main() {
  let stdout
  try {
    stdout = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' })
  } catch (err) {
    console.error('[verify-staged-entries] git diff failed:', err.message)
    process.exit(1)
  }

  const stagedList = stdout.split('\n').filter(Boolean)
  const pairs = parseStagedFiles(stagedList)

  if (pairs.length === 0) {
    process.exit(0)
  }

  console.log(`[verify-staged-entries] Checking ${pairs.length} entry pair(s)…`)
  for (const { libId, entryId } of pairs) {
    const drift = spawnSync(
      'node',
      ['scripts/verify-lang-consistency.mjs', '--lib', libId, '--entry', entryId],
      { stdio: 'inherit' }
    )
    if (drift.error) {
      console.error(`[verify-staged-entries] drift-check spawn failed: ${drift.error.message}`)
      process.exit(1)
    }
    if (drift.status !== 0) {
      console.error(`[verify-staged-entries] FAIL (cross-lang drift) on ${libId}/${entryId} — commit aborted.`)
      console.error('[verify-staged-entries] Bypass (not recommended): git commit --no-verify')
      process.exit(1)
    }
    const result = spawnSync(
      'node',
      ['scripts/verify-pmids.mjs', '--lib', libId, '--entry', entryId],
      { stdio: 'inherit' }
    )
    if (result.error) {
      console.error(`[verify-staged-entries] spawn failed: ${result.error.message}`)
      process.exit(1)
    }
    if (result.status !== 0) {
      console.error(`[verify-staged-entries] FAIL on ${libId}/${entryId} — commit aborted.`)
      console.error('[verify-staged-entries] Bypass (not recommended): git commit --no-verify')
      process.exit(1)
    }
  }
  process.exit(0)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(err => {
    console.error('verify-staged-entries failed:', err)
    process.exit(1)
  })
}
