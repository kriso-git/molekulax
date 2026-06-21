// Build-time SSG: render each HU route in a real browser and write a static
// dist/<path>/index.html = the pristine dist/index.html shell with #root filled +
// per-page title/meta/canonical/og + a per-compound JSON-LD injected. Run AFTER
// `vite build`. The bundle <script> stays, so the client re-renders the identical
// SPA over the prerendered content (no hydration; content matches => no flash).
import http from 'node:http'
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs'
import { join, extname, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { LIB_SLUGS } from '../src/seo/urls.js'
import { entryJsonLd } from './seo-jsonld.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const DIST = join(repoRoot, 'dist')
const ORIGIN = 'https://molekulax.hu'
const PORT = 4388
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const CONCURRENCY = 5
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' }

async function buildRoutes() {
  const routes = [{ urlPath: '/', diskPath: 'index.html', name: null, libraryName: null }]
  for (const libId of LIBS) {
    const slug = LIB_SLUGS[libId].hu
    const mod = await import(`file://${join(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    routes.push({ urlPath: `/${slug}`, diskPath: join(slug, 'index.html'), name: null, libraryName: null })
    for (const e of mod.LIBRARY_ENTRY_META) {
      const desc = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
      routes.push({ urlPath: `/${slug}/${e.id}`, diskPath: join(slug, e.id, 'index.html'), name: e.name, libraryName: null, desc, isEntry: true })
    }
  }
  return routes
}

function startServer() {
  const server = http.createServer((req, res) => {
    let file = join(DIST, decodeURIComponent(req.url.split('?')[0]))
    if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, 'index.html')
    res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
    try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
  })
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)))
}

async function waitStable(page) {
  await page.waitForFunction(() => {
    const r = document.getElementById('root')
    return r && r.innerHTML.length > 2000
  }, { timeout: 25000 })
  let last = -1
  for (let i = 0; i < 40; i++) {
    const len = await page.evaluate(() => document.getElementById('root').innerHTML.length)
    if (len === last) return
    last = len
    await new Promise((r) => setTimeout(r, 250))
  }
}

function escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') }
function escapeAttr(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;') }

function injectHead(html, { title, desc, canonical, jsonld }) {
  let out = html
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeAttr(desc)}">`)
  out = out.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}">`)
  out = out.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}">`)
  out = out.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeAttr(title)}">`)
  if (jsonld) out = out.replace('</head>', `<script type="application/ld+json">${JSON.stringify(jsonld)}</script></head>`)
  return out
}

async function renderOne(browser, template, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(`http://127.0.0.1:${PORT}${route.urlPath}`, { waitUntil: 'networkidle0', timeout: 60000 })
  await waitStable(page)
  const cap = await page.evaluate(() => ({
    root: document.getElementById('root').innerHTML,
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
  }))
  await page.close()
  if (route.isEntry && !cap.root.includes(route.name)) {
    throw new Error(`prerender ${route.urlPath}: rendered #root does not contain entry name "${route.name}" (skeleton captured?)`)
  }
  const canonical = ORIGIN + route.urlPath
  const jsonld = route.isEntry ? entryJsonLd({ name: route.name, desc: route.desc || cap.desc, url: canonical, libraryName: route.libraryName }) : null
  let html = injectHead(template, { title: cap.title, desc: cap.desc, canonical, jsonld })
  html = html.replace('<div id="root"></div>', `<div id="root">${cap.root}</div>`)
  const outPath = join(DIST, route.diskPath)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  return route.urlPath
}

// On Vercel's build container regular Chromium won't launch (missing system libs),
// so use @sparticuz/chromium (a serverless-ready Chromium build) there. Local/dev
// builds keep the full puppeteer Chromium. Detected via process.env.VERCEL.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default
    const puppeteerCore = (await import('puppeteer-core')).default
    return puppeteerCore.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  }
  return puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] })
}

async function main() {
  const template = readFileSync(join(DIST, 'index.html'), 'utf8')
  const routes = await buildRoutes()
  const libMod = await import(`file://${join(repoRoot, 'src/data/libraries/index.js').replace(/\\/g, '/')}`)
  const libName = Object.fromEntries(libMod.listLibraries().map((l) => [l.id, l.name.hu]))
  const slugToLib = Object.fromEntries(LIBS.map((id) => [LIB_SLUGS[id].hu, id]))
  for (const r of routes) { const seg = r.urlPath.split('/')[1]; const lib = slugToLib[seg]; if (lib) r.libraryName = libName[lib] }

  const server = await startServer()
  const browser = await launchBrowser()
  let done = 0, failed = 0
  const queue = [...routes]
  async function worker() {
    while (queue.length) {
      const r = queue.shift()
      try { await renderOne(browser, template, r); done++ } catch (e) { failed++; console.error(`[prerender] FAIL ${r.urlPath}: ${e.message}`) }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker))
  await browser.close(); server.close()
  console.log(`[prerender] wrote ${done} static pages, ${failed} failed`)
  if (failed > 0) process.exit(1)
}
main().catch((e) => { console.error('[prerender] fatal:', e); process.exit(1) })
