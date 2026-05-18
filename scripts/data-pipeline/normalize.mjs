import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { callHaiku } from './lib/haiku-client.mjs'
import { ENTRY_JSON_SCHEMA, SYSTEM_PROMPT_TEMPLATE } from './lib/entry-shape.mjs'

const CACHE = 'scripts/data-pipeline/cache'
const OUT_DIR = 'scripts/data-pipeline/cache/normalized'

const LIB_FOLDER_TO_ID = {
  nootropic: 'nootropics',
  performance: 'performance',
  pharma: 'pharmaceutical',
}

async function readIfExists(p) {
  if (!existsSync(p)) return null
  return readFile(p, 'utf-8')
}

async function loadLiveEntry(libraryId, slug) {
  // Simplified: this step is for the Haiku context only. The full live-entry comparison
  // happens in merge-and-diff.mjs. Here we just return null to keep the Haiku payload small.
  // Future improvement: include a slim summary if the live entry is present.
  return null
}

async function normalizeSlug(slug, libraryFolder) {
  const libraryId = LIB_FOLDER_TO_ID[libraryFolder] || libraryFolder

  const seanMd = await readIfExists(path.join(CACHE, 'raw/sean', `${slug}.md`))
  const dopamineMd = await readIfExists(path.join(CACHE, 'raw/dopamine', libraryFolder, `${slug}.md`))

  if (!seanMd && !dopamineMd) {
    console.log(`[normalize] SKIP ${libraryFolder}/${slug}: no raw source`)
    return null
  }

  const liveEntryJson = await loadLiveEntry(libraryId, slug)

  const systemBlocks = [
    {
      type: 'text',
      text: SYSTEM_PROMPT_TEMPLATE.replace('{LIBRARY_ID}', libraryId),
      cache_control: { type: 'ephemeral' },
    },
  ]

  // Cap each source to a sensible size to avoid runaway tokens on the rare giant chunk
  const seanCapped = (seanMd || '').slice(0, 24000)
  const dopamineCapped = (dopamineMd || '').slice(0, 24000)

  const userContent = [
    {
      type: 'text',
      text:
        `slug: ${slug}\nlibrary: ${libraryId}\n\n` +
        `--- sean_notes_md ---\n${seanCapped || '(no source)'}\n\n` +
        `--- dopamine_md ---\n${dopamineCapped || '(no source)'}\n\n` +
        `--- live_entry_json ---\n${liveEntryJson || '(no existing entry)'}\n`,
    },
  ]

  const tools = [
    {
      name: 'emit_entry',
      description: 'Emit a normalized Entry JSON for the given molecule.',
      input_schema: ENTRY_JSON_SCHEMA,
    },
  ]

  console.log(`[normalize] CALL Haiku for ${libraryFolder}/${slug}`)
  const response = await callHaiku({
    systemBlocks,
    userContent,
    tools,
    toolChoice: { type: 'tool', name: 'emit_entry' },
    maxTokens: 4096,
  })

  const toolUse = response.content.find((c) => c.type === 'tool_use' && c.name === 'emit_entry')
  if (!toolUse) {
    console.error(`[normalize] No emit_entry tool_use in response for ${slug}`)
    return null
  }

  const outDir = path.join(OUT_DIR, libraryId)
  await mkdir(outDir, { recursive: true })
  const outPath = path.join(outDir, `${slug}.json`)
  await writeFile(outPath, JSON.stringify(toolUse.input, null, 2), 'utf-8')
  console.log(`[normalize] OK -> ${outPath}`)

  // Cost log (rough): cache_hit_input + new_input + output
  const usage = response.usage || {}
  console.log(
    `[normalize] usage: input=${usage.input_tokens || 0} cache_creation=${usage.cache_creation_input_tokens || 0} cache_read=${usage.cache_read_input_tokens || 0} output=${usage.output_tokens || 0}`
  )

  return outPath
}

async function main() {
  const libraryArg = process.argv[2] || 'nootropic'
  const slugArg = process.argv[3]

  if (slugArg) {
    await normalizeSlug(slugArg, libraryArg)
    return
  }

  const dopamineDir = path.join(CACHE, 'raw/dopamine', libraryArg)
  if (!existsSync(dopamineDir)) {
    console.error(`[normalize] No raw dopamine dir: ${dopamineDir}`)
    process.exit(1)
  }
  const files = await readdir(dopamineDir)
  const slugs = [
    ...new Set(files.filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', ''))),
  ]
  console.log(`[normalize] Found ${slugs.length} slugs in ${libraryArg}`)
  for (const slug of slugs) {
    try {
      await normalizeSlug(slug, libraryArg)
    } catch (e) {
      console.error(`[normalize] FAIL ${slug}:`, e.message)
    }
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
