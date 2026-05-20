import { readFileSync, writeFileSync } from 'fs'

const srcPath = process.argv[2] || 'C:/Users/trolo/AppData/Local/Temp/seansnotes_extracted/word/document.xml'
const dstPath = process.argv[3] || 'C:/Users/trolo/AppData/Local/Temp/seansnotes.md'

const xml = readFileSync(srcPath, 'utf8')

const paragraphs = []
const pRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g
let m
while ((m = pRegex.exec(xml)) !== null) {
  const inner = m[1]
  const styleMatch = inner.match(/<w:pStyle\s+w:val="([^"]+)"/)
  const style = styleMatch ? styleMatch[1] : null
  const texts = []
  const tRegex = /<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g
  let t
  while ((t = tRegex.exec(inner)) !== null) {
    texts.push(t[1])
  }
  const text = texts.join('')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
  if (text.trim() || style) {
    let prefix = ''
    if (style && /^Heading(\d+)$/.test(style)) {
      const lvl = parseInt(style.match(/^Heading(\d+)$/)[1])
      prefix = '#'.repeat(Math.min(lvl, 6)) + ' '
    } else if (style && /Title/i.test(style)) {
      prefix = '# '
    } else if (style && /Subtitle/i.test(style)) {
      prefix = '## '
    }
    paragraphs.push(prefix + text)
  }
}

writeFileSync(dstPath, paragraphs.join('\n\n'))
console.log(`Extracted ${paragraphs.length} paragraphs → ${dstPath}`)
console.log(`Output size: ${(readFileSync(dstPath, 'utf8').length / 1024).toFixed(1)} KB`)
