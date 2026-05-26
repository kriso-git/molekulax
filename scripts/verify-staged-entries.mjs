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
