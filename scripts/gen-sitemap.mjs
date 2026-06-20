// Build-time HU sitemap generator. Enumerates LIBRARY_ENTRY_META from each library
// (synchronous source, no browser) and writes public/sitemap.xml. Phase 1 = HU only.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { LIB_SLUGS } from '../src/seo/urls.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const ORIGIN = 'https://molekulax.hu'
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

export async function buildSitemapUrls() {
  const urls = [`${ORIGIN}/`]
  for (const libId of LIBS) {
    urls.push(`${ORIGIN}/${LIB_SLUGS[libId].hu}`)
    const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    const meta = mod.LIBRARY_ENTRY_META
    if (!Array.isArray(meta)) throw new Error(`${libId}: LIBRARY_ENTRY_META missing`)
    for (const e of meta) urls.push(`${ORIGIN}/${LIB_SLUGS[libId].hu}/${e.id}`)
  }
  return urls
}

function toXml(urls, lastmod) {
  const body = urls.map((loc) => {
    const priority = loc === `${ORIGIN}/` ? '1.0' : (loc.split('/').length === 4 ? '0.8' : '0.6')
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  }).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

// `node scripts/gen-sitemap.mjs` writes public/sitemap.xml; lastmod from CLI arg or today.
const _argv1Url = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : null
if (_argv1Url && import.meta.url === _argv1Url) {
  const lastmod = process.argv[2] || new Date().toISOString().slice(0, 10)
  const urls = await buildSitemapUrls()
  writeFileSync(resolve(repoRoot, 'public/sitemap.xml'), toXml(urls, lastmod))
  console.log(`[sitemap] wrote ${urls.length} URLs to public/sitemap.xml (lastmod ${lastmod})`)
}
