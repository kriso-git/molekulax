// Build-time trilingual sitemap generator. Enumerates LIBRARY_ENTRY_META from each
// library (synchronous source, no browser) × {hu,en,pl} and writes public/sitemap.xml
// with <xhtml:link rel="alternate" hreflang> per URL group. HU at root, EN/PL prefixed.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { LIB_SLUGS, STATIC_PAGES } from '../src/seo/urls.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const ORIGIN = 'https://molekulax.hu'
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const LANGS = ['hu', 'en', 'pl']
const PREFIX = { hu: '', en: '/en', pl: '/pl' }

const homeUrl = (lang) => `${ORIGIN}${PREFIX[lang]}` + (lang === 'hu' ? '/' : '')
const libUrl = (lang, libId) => `${ORIGIN}${PREFIX[lang]}/${LIB_SLUGS[libId][lang]}`
const entryUrl = (lang, libId, id) => `${ORIGIN}${PREFIX[lang]}/${LIB_SLUGS[libId][lang]}/${id}`

const PRIORITY = { home: '1.0', entry: '0.8', library: '0.6', page: '0.5' }

// A "group" = one logical page in all 3 languages + its hreflang alternate map.
export async function buildSitemapGroups() {
  const groups = []
  const mk = (type, byLang) => ({
    type,
    urls: LANGS.map((l) => ({ loc: byLang(l), lang: l })),
    alternates: { ...Object.fromEntries(LANGS.map((l) => [l, byLang(l)])), 'x-default': byLang('hu') },
  })
  groups.push(mk('home', (l) => homeUrl(l)))
  for (const slugs of Object.values(STATIC_PAGES)) {
    groups.push(mk('page', (l) => `${ORIGIN}${PREFIX[l]}/${slugs[l]}`))
  }
  for (const libId of LIBS) {
    groups.push(mk('library', (l) => libUrl(l, libId)))
    const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    if (!Array.isArray(mod.LIBRARY_ENTRY_META)) throw new Error(`${libId}: LIBRARY_ENTRY_META missing`)
    for (const e of mod.LIBRARY_ENTRY_META) groups.push(mk('entry', (l) => entryUrl(l, libId, e.id)))
  }
  return groups
}

// Back-compat: the flat list of every <loc> (now 588 = 196 pages × 3 languages).
export async function buildSitemapUrls() {
  return (await buildSitemapGroups()).flatMap((g) => g.urls.map((u) => u.loc))
}

function toXml(groups, lastmod) {
  const altLinks = (alts) => Object.entries(alts)
    .map(([hl, href]) => `      <xhtml:link rel="alternate" hreflang="${hl}" href="${href}"/>`).join('\n')
  const body = groups.flatMap((g) => g.urls.map((u) => {
    return `  <url>\n    <loc>${u.loc}</loc>\n${altLinks(g.alternates)}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${PRIORITY[g.type]}</priority>\n  </url>`
  })).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`
}

// `node scripts/gen-sitemap.mjs` writes public/sitemap.xml; lastmod from CLI arg or today.
const _argv1Url = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : null
if (_argv1Url && import.meta.url === _argv1Url) {
  const lastmod = process.argv[2] || new Date().toISOString().slice(0, 10)
  const groups = await buildSitemapGroups()
  writeFileSync(resolve(repoRoot, 'public/sitemap.xml'), toXml(groups, lastmod))
  const n = groups.reduce((a, g) => a + g.urls.length, 0)
  console.log(`[sitemap] wrote ${n} URLs (${groups.length} pages x ${LANGS.length} langs) to public/sitemap.xml (lastmod ${lastmod})`)
}
