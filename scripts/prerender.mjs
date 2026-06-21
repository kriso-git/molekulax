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
// 12 on Vercel: the Pro "Turbo" build machine is 30 vCPU / 60 GB, so we can run
// many Chromium pages at once (~2.5 vCPU/page + headroom for the shell http server).
// This cuts the 196-page browser prerender from ~30 min (Hobby 4 vCPU, conc 2) to
// ~5 min. 3 locally (a dev laptop). The retry pass still re-runs any flaky timeouts.
const CONCURRENCY = process.env.VERCEL ? 12 : 3
// All hyphen/dash variants -> '-'. The entry H1 renders non-breaking hyphens (U+2011),
// so a raw includes('SLU-PP-915') would miss 'SLU‑PP‑915'. Normalise both sides.
const normHyphens = (s) => String(s).replace(/[‐-―−]/g, '-')
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

function startServer(cleanShell) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    // Neutralise the PWA service worker during prerender: a persistent SW shared
    // across the concurrent pages in one browser serves cached/shell responses to
    // later pages (capturing the home content + JS parse errors). Empty it out.
    if (urlPath === '/registerSW.js' || urlPath === '/sw.js') {
      res.setHeader('Content-Type', 'text/javascript')
      res.end('/* prerender: service worker disabled */')
      return
    }
    const file = join(DIST, urlPath)
    const ext = extname(file)
    // Real asset files (js/css/png/woff2/...) come from disk. EVERY navigation/HTML
    // request gets the CLEAN in-memory shell (empty #root), so the SPA always renders
    // fresh — never re-capturing the home content baked into dist/index.html once the
    // home route has been prerendered.
    if (ext && ext !== '.html' && existsSync(file) && statSync(file).isFile()) {
      res.setHeader('Content-Type', TYPES[ext] || 'application/octet-stream')
      try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
      return
    }
    res.setHeader('Content-Type', 'text/html')
    res.end(cleanShell)
  })
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)))
}

// Wait until the REAL content has rendered (for entries: the compound name must be
// visible in #root, so we never capture a skeleton/HeroPreview), then until #root
// stops growing. mustContain = the entry name (or null for home/library pages).
async function waitRendered(page, mustContain) {
  await page.waitForFunction((name) => {
    const r = document.getElementById('root')
    if (!r || r.innerHTML.length < 2000) return false
    if (!name) return true
    const norm = (s) => String(s).replace(/[‐-―−]/g, '-')
    return norm(r.innerText).includes(norm(name))
  }, { timeout: 60000 }, mustContain || null)
  let last = -1, stable = 0
  for (let i = 0; i < 60; i++) {
    const len = await page.evaluate(() => document.getElementById('root').innerHTML.length)
    if (len === last) { if (++stable >= 2) return } else { stable = 0 }
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
  // Desktop viewport so entries render the full PAGE (not the mobile modal, whose
  // JS-off innerText collapses). The three.js DNA background degrades to nothing
  // under --disable-gpu (no WebGL context), so it adds no build-time cost.
  await page.setViewport({ width: 1280, height: 900 })
  // domcontentloaded, NOT networkidle: the SPA keeps connections open (analytics/SW)
  // so networkidle never settles on the slow build Chromium -> 60s nav timeout.
  // waitStable() then waits for the real content to render + settle.
  await page.goto(`http://127.0.0.1:${PORT}${route.urlPath}`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await waitRendered(page, route.isEntry ? route.name : null)
  const cap = await page.evaluate(() => ({
    root: document.getElementById('root').innerHTML,
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
  }))
  await page.close()
  if (route.isEntry && !normHyphens(cap.root).includes(normHyphens(route.name))) {
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
      // --disable-software-rasterizer kills the SwiftShader fallback so the three.js
      // DNA background gets no WebGL2 context and degrades to nothing (its try/catch),
      // instead of software-rendering and starving the React render of each page.
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox', '--disable-software-rasterizer'],
      executablePath: await chromium.executablePath(),
      headless: true,
      protocolTimeout: 180000,
    })
  }
  return puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-software-rasterizer'], protocolTimeout: 180000 })
}

async function main() {
  // Read the shell and FORCE #root empty. vite build emits an empty #root, but a
  // prior prerender run overwrites dist/index.html with the home content baked in;
  // re-reading that as the template would make the `<div id="root"></div>` replace
  // a no-op and write the home content to every page. Resetting makes it idempotent.
  let template = readFileSync(join(DIST, 'index.html'), 'utf8')
  template = template.replace(/<div id="root">[\s\S]*<\/div>(\s*<\/body>)/, '<div id="root"></div>$1')
  const routes = await buildRoutes()
  const libMod = await import(`file://${join(repoRoot, 'src/data/libraries/index.js').replace(/\\/g, '/')}`)
  const libName = Object.fromEntries(libMod.listLibraries().map((l) => [l.id, l.name.hu]))
  const slugToLib = Object.fromEntries(LIBS.map((id) => [LIB_SLUGS[id].hu, id]))
  for (const r of routes) { const seg = r.urlPath.split('/')[1]; const lib = slugToLib[seg]; if (lib) r.libraryName = libName[lib] }

  const server = await startServer(template)
  const browser = await launchBrowser()
  let done = 0
  const queue = [...routes]
  const failures = []
  async function worker() {
    while (queue.length) {
      const r = queue.shift()
      try { await renderOne(browser, template, r); done++ } catch (e) { failures.push({ r, msg: e.message }) }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker))

  // Retry the failures SEQUENTIALLY — almost all are flaky waitRendered timeouts
  // from CPU contention during the concurrent pass, and pass cleanly when alone.
  let stillFailed = 0
  if (failures.length) {
    console.log(`[prerender] retrying ${failures.length} page(s) sequentially...`)
    for (const { r } of failures) {
      try { await renderOne(browser, template, r); done++ } catch (e) { stillFailed++; console.error(`[prerender] FAIL (after retry) ${r.urlPath}: ${e.message}`) }
    }
  }
  await browser.close(); server.close()
  console.log(`[prerender] wrote ${done} static pages, ${stillFailed} failed`)
  if (stillFailed > 0) process.exit(1)
}
main().catch((e) => { console.error('[prerender] fatal:', e); process.exit(1) })
