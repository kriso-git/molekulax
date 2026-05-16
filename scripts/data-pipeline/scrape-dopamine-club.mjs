import { load } from 'cheerio'
import TurndownService from 'turndown'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const BASE_URL = 'https://dopamine.club'
const OUT_DIR = 'scripts/data-pipeline/cache/raw/dopamine'
const USER_AGENT = 'MolekulaX-Education/1.0 (educational research; contact: petrikkristof66@gmail.com)'
const DELAY_MS = 1000

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' })

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function fetchSlug(slug) {
  const candidates = [`${BASE_URL}/substances/${slug}`, `${BASE_URL}/${slug}`]
  for (const url of candidates) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT }, redirect: 'follow' })
      if (res.status === 200) return { status: 200, html: await res.text(), url }
      if (res.status === 404) continue
      throw new Error(`HTTP ${res.status} for ${url}`)
    } catch (e) {
      // try next candidate
      continue
    }
  }
  return { status: 404 }
}

function extractMainContent(html) {
  const $ = load(html)
  $('script, style, nav, header, footer, aside, noscript, iframe').remove()
  const main = $('main, article, .content, .article, #content, .post').first()
  return main.length ? main.html() : $('body').html()
}

async function processSlug(slug, library) {
  const libDir = path.join(OUT_DIR, library)
  await mkdir(libDir, { recursive: true })
  const htmlPath = path.join(libDir, `${slug}.html`)
  const mdPath = path.join(libDir, `${slug}.md`)
  const nfPath = path.join(libDir, `${slug}.NOT_FOUND`)

  if (existsSync(htmlPath) || existsSync(nfPath)) {
    console.log(`[scrape] SKIP cached: ${library}/${slug}`)
    return 'cached'
  }

  console.log(`[scrape] FETCH ${library}/${slug}`)
  try {
    const res = await fetchSlug(slug)
    if (res.status === 404) {
      await writeFile(nfPath, '', 'utf-8')
      return 'not-found'
    }
    await writeFile(htmlPath, res.html, 'utf-8')
    const mainHtml = extractMainContent(res.html)
    const md = turndown.turndown(mainHtml || '')
    await writeFile(mdPath, md, 'utf-8')
    return 'ok'
  } catch (e) {
    console.error(`[scrape] ERROR ${library}/${slug}:`, e.message)
    return 'error'
  }
}

async function main() {
  const libraryArg = process.argv[2] || 'all'
  const libraries = libraryArg === 'all' ? ['nootropic', 'performance', 'pharma'] : [libraryArg]

  for (const library of libraries) {
    await mkdir(path.join(OUT_DIR, library), { recursive: true })
    const seedFile = `scripts/data-pipeline/seeds/${library}-slugs.json`
    if (!existsSync(seedFile)) {
      console.error(`[scrape] Missing seed file: ${seedFile}`)
      continue
    }
    const slugs = JSON.parse(await readFile(seedFile, 'utf-8'))
    console.log(`\n=== ${library} (${slugs.length} slugs) ===`)
    for (const slug of slugs) {
      const result = await processSlug(slug, library)
      if (result === 'ok' || result === 'not-found') await sleep(DELAY_MS)
    }
  }
  console.log('\n[scrape] Done.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
