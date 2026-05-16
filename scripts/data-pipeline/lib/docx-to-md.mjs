import mammoth from 'mammoth'
import { readFile } from 'node:fs/promises'

export async function docxToMarkdown(filePath) {
  const buffer = await readFile(filePath)
  const result = await mammoth.convertToMarkdown({ buffer })
  return result.value
}

export function stripBase64Images(md) {
  return md.replace(/!\[\]\(data:image\/[^)]+\)/g, '')
}

const SKIP_SECTION_NEEDLES = [
  'table of contents',
  'full stack index',
  'full nootropic index',
  'full performance enhancer index',
  'full modulator index',
  'full antioxidant index',
  'full fat loss index',
  'full skin/cosmetic index',
  'full anxiety/sleep',
  'full peptide index',
  'full sarm index',
  'welcome',
  'what are good trusted sources',
  'discord',
  'beacons',
  'source list',
  'tiktok',
  'youtube',
  'instagram',
]

function extractCompoundName(headingLine) {
  if (!headingLine) return null
  // Try to match the first __...__ bold-block (compound name)
  const m = headingLine.match(/__([^_]+?)__/)
  if (!m) return null
  let name = m[1].trim()
  // Strip trailing/leading decoration chars (☆ ⋆ ✶ etc.) and whitespace
  name = name.replace(/[☆⋆✶✦✴︎˚°｡⭒⭑★✩✷✮★]+/g, '').trim()
  // Strip escape backslashes and leftover formatting
  name = name.replace(/\\([\-*])/g, '$1').trim()
  if (!name) return null
  return name
}

function shouldSkip(name) {
  const lower = name.toLowerCase()
  return SKIP_SECTION_NEEDLES.some((needle) => lower.includes(needle))
}

export function splitByAnchor(md) {
  const lines = md.split('\n')
  const anchors = []
  const anchorRegex = /<a id="([a-z0-9]+)"><\/a>(.*)/

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(anchorRegex)
    if (m) anchors.push({ line: i, id: m[1], headingRaw: m[2] })
  }

  const chunks = []
  for (let i = 0; i < anchors.length; i++) {
    const a = anchors[i]
    const next = anchors[i + 1]
    const endLine = next ? next.line : lines.length
    const name = extractCompoundName(a.headingRaw)
    if (!name) continue
    if (shouldSkip(name)) continue
    const slug = name
      .toLowerCase()
      .replace(/\(.*?\)/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    if (!slug) continue
    const body = lines.slice(a.line, endLine).join('\n')
    chunks.push({ slug, name, anchorId: a.id, body })
  }
  return chunks
}
