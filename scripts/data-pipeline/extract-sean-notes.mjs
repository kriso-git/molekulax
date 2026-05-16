import { docxToMarkdown, stripBase64Images, splitByAnchor } from './lib/docx-to-md.mjs'
import { mkdir, writeFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const DOCX_PATH = "assets/sean's curated notes.docx"
const OUT_DIR = 'scripts/data-pipeline/cache/raw/sean'

async function main() {
  if (!existsSync(DOCX_PATH)) {
    console.error(`[extract-sean-notes] File not found: ${DOCX_PATH}`)
    process.exit(1)
  }

  await mkdir(OUT_DIR, { recursive: true })

  const docxStat = await stat(DOCX_PATH)
  console.log(`[extract-sean-notes] Reading ${DOCX_PATH} (${(docxStat.size / 1024).toFixed(0)} KB)`)

  const rawMd = await docxToMarkdown(DOCX_PATH)
  console.log(`[extract-sean-notes] Mammoth -> ${(rawMd.length / 1024).toFixed(0)} KB markdown (with images)`)

  const cleanMd = stripBase64Images(rawMd)
  console.log(`[extract-sean-notes] Stripped base64 images -> ${(cleanMd.length / 1024).toFixed(0)} KB`)

  const chunks = splitByAnchor(cleanMd)
  console.log(`[extract-sean-notes] Split into ${chunks.length} compound chunks (anchor-based)`)

  // Manifest: slug -> { name, anchorId, bytes }
  const manifest = {}
  let written = 0
  for (const chunk of chunks) {
    if (!chunk.slug) continue
    const outPath = path.join(OUT_DIR, `${chunk.slug}.md`)
    await writeFile(outPath, chunk.body, 'utf-8')
    manifest[chunk.slug] = { name: chunk.name, anchorId: chunk.anchorId, bytes: chunk.body.length }
    written++
  }

  await writeFile(path.join(OUT_DIR, '_manifest.json'), JSON.stringify(manifest, null, 2), 'utf-8')
  await writeFile(path.join(OUT_DIR, '_full.md'), cleanMd, 'utf-8')

  console.log(`[extract-sean-notes] Wrote ${written} per-compound files + _manifest.json + _full.md to ${OUT_DIR}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
