import mammoth from 'mammoth'
import { readFile } from 'node:fs/promises'

export async function docxToMarkdown(filePath) {
  const buffer = await readFile(filePath)
  const result = await mammoth.convertToMarkdown({ buffer })
  return result.value
}

export function splitByMolecule(markdown) {
  // Splits a long markdown into molecule-level chunks based on H1/H2 headings.
  // Returns: [{ slug, heading, body }]
  const lines = markdown.split('\n')
  const chunks = []
  let current = null

  for (const line of lines) {
    const h1Match = line.match(/^# (.+)$/)
    const h2Match = line.match(/^## (.+)$/)
    if (h1Match || h2Match) {
      if (current) chunks.push(current)
      const heading = (h1Match || h2Match)[1].trim()
      const slug = heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      current = { slug, heading, body: line + '\n' }
    } else if (current) {
      current.body += line + '\n'
    }
  }
  if (current) chunks.push(current)
  return chunks
}
