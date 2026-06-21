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
import { FAQ_CONTENT } from '../src/data/faqContent.js'
import { entryJsonLd, faqJsonLd, breadcrumbJsonLd } from './seo-jsonld.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const DIST = join(repoRoot, 'dist')
const ORIGIN = 'https://molekulax.hu'
const PORT = 4388
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
// On Vercel: one browser PER worker (@sparticuz forces --single-process, so parallelism
// must come from separate browser PROCESSES). Default 6 is SAFE for the cheaper "Standard"
// build machine (4 vCPU / 8 GB): ~6 x ~0.7 GB ≈ 4 GB < 8 GB, no OOM. If you switch back to
// the pricier 30 vCPU "Turbo" machine for speed, set env PRERENDER_CONCURRENCY=16. 3 locally.
// (Build cost note: Turbo bills a high per-minute rate — keep builds infrequent.)
const CONCURRENCY = process.env.VERCEL ? Number(process.env.PRERENDER_CONCURRENCY || 6) : 3
// All hyphen/dash variants -> '-'. The entry H1 renders non-breaking hyphens (U+2011),
// so a raw includes('SLU-PP-915') would miss 'SLU‑PP‑915'. Normalise both sides.
const normHyphens = (s) => String(s).replace(/[‐-―−]/g, '-')
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' }

// Phase 3: enumerate every logical page in all three languages. HU at the root, EN/PL
// prefixed. Each route carries its lang, the localized disk path, and the hreflang map
// (the 3 language URLs for this page + x-default -> HU) so injectHead can emit alternates.
const LANGS = ['hu', 'en', 'pl']
const PREFIX = { hu: '', en: '/en', pl: '/pl' }
const OG_LOCALE = { hu: 'hu_HU', en: 'en_US', pl: 'pl_PL' }
const HOME_LABEL = { hu: 'Főoldal', en: 'Home', pl: 'Strona główna' }
// Per-entry content-modified dates (committed; generated locally by gen-entry-dates.mjs,
// since Vercel's shallow build clone can't run per-file git log). Empty if absent.
let entryDates = {}
try { entryDates = JSON.parse(readFileSync(join(repoRoot, 'src/data/entryDates.json'), 'utf8')) } catch {}
const diskFor = (lang, ...segs) => join(PREFIX[lang].replace('/', ''), ...segs, 'index.html')
const altMap = (byLang) => Object.fromEntries([...LANGS.map((l) => [l, ORIGIN + byLang(l)]), ['x-default', ORIGIN + byLang('hu')]])
const homeUrl = (l) => PREFIX[l] + (l === 'hu' ? '/' : '')

async function buildRoutes() {
  const routes = []
  for (const lang of LANGS) {
    // Homepage FAQPage: flatten the localized FAQ_CONTENT categories into {q,a}[].
    const faq = (FAQ_CONTENT[lang] || []).flatMap((c) => c.items || [])
    routes.push({ lang, urlPath: homeUrl(lang), diskPath: diskFor(lang), name: null, libId: null, libraryName: null, hreflang: altMap(homeUrl), faq })
  }
  for (const libId of LIBS) {
    const mod = await import(`file://${join(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    const libUrl = (l) => `${PREFIX[l]}/${LIB_SLUGS[libId][l]}`
    for (const lang of LANGS) {
      routes.push({ lang, urlPath: libUrl(lang), diskPath: diskFor(lang, LIB_SLUGS[libId][lang]), name: null, libId, libraryName: null, hreflang: altMap(libUrl) })
    }
    for (const e of mod.LIBRARY_ENTRY_META) {
      const metaDesc = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
      const entUrl = (l) => `${PREFIX[l]}/${LIB_SLUGS[libId][l]}/${e.id}`
      for (const lang of LANGS) {
        // The entry NAME is localized (Letrozol/Letrozole, Exemestane/Eksemestan, ...), so
        // the route must carry the PER-LANG name — the waitRendered + capture guards match on
        // it, and META.name is a single language (a mismatch times the 60s wait out). Falls
        // back to META.name / META.shortDesc if the per-lang data file can't be imported.
        let name = e.name, desc = metaDesc, faq = null, citations = null, variantIds = null
        try {
          const m = await import(`file://${join(repoRoot, 'src/data/libraries', libId, 'entries', lang, `${e.id}.js`).replace(/\\/g, '/')}`)
          if (m.default?.name) name = m.default.name
          const sd = m.default?.shortDesc
          const localized = typeof sd === 'string' ? sd : sd?.[lang]
          if (localized) desc = localized
          if (Array.isArray(m.default?.faq)) faq = m.default.faq
          // PubMed/source URLs from the entry's studies -> JSON-LD citation (E-E-A-T).
          const urls = [...new Set((m.default?.studies || []).map((s) => s && s.url).filter(Boolean))]
          if (urls.length) citations = urls.slice(0, 30)
          // Variant route-ids (form factors / esters) -> the variant URLs that share this
          // compound's card + canonical; we copy the base HTML to them after rendering.
          if (Array.isArray(m.default?.variants)) variantIds = m.default.variants.map((v) => v && v.routeId).filter(Boolean)
        } catch {}
        routes.push({ lang, urlPath: entUrl(lang), diskPath: diskFor(lang, LIB_SLUGS[libId][lang], e.id), name, libId, libraryName: null, desc, isEntry: true, hreflang: altMap(entUrl), faq, dateModified: entryDates[e.id] || null, ogImage: `${ORIGIN}/og/${e.id}.jpg`, citations, variantIds })
      }
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

// Like waitRendered, but for a CLIENT-SIDE nav on a warm (already-booted) page: the
// previous route's content is still in #root when we fire popstate, so the name guard
// alone can't tell "transitioned" from "stale" on home/library pages (they carry no
// unique compound name). document.title (set per route by useDocumentHead AFTER the new
// route commits) is the reliable transition signal: wait for it to differ from the
// pre-nav title, THEN apply the usual name + settle checks.
async function waitRenderedAfterNav(page, mustContain, prevTitle) {
  await page.waitForFunction((name, prev) => {
    if (document.title === prev) return false
    const r = document.getElementById('root')
    if (!r || r.innerHTML.length < 2000) return false
    if (!name) return true
    const norm = (s) => String(s).replace(/[‐-―−]/g, '-')
    return norm(r.innerText).includes(norm(name))
  }, { timeout: 60000 }, mustContain || null, prevTitle)
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

function injectHead(html, { lang, title, desc, canonical, hreflang, jsonld, ogImage }) {
  let out = html
  out = out.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeAttr(desc)}">`)
  out = out.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}">`)
  out = out.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}">`)
  out = out.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeAttr(title)}">`)
  // Localize the social-card locale for all langs (HU stays hu_HU = a no-op). Localize the
  // social descriptions + twitter title ONLY for EN/PL, so HU's curated OG/twitter tagline
  // stays byte-identical to the shipped HU output.
  out = out.replace(/<meta property="og:locale"[^>]*>/, `<meta property="og:locale" content="${OG_LOCALE[lang] || 'hu_HU'}">`)
  if (lang !== 'hu') {
    out = out.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeAttr(desc)}">`)
    out = out.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeAttr(title)}">`)
    out = out.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeAttr(desc)}">`)
  }
  // Per-compound social card (entry pages); home/library keep the default og-image.png.
  if (ogImage) {
    out = out.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${ogImage}"`)
    out = out.replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${ogImage}"`)
    out = out.replace(/<meta property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${escapeAttr(title)}">`)
  }
  const alt = Object.entries(hreflang || {}).map(([hl, href]) => `<link rel="alternate" hreflang="${hl}" href="${href}">`).join('')
  const blocks = (Array.isArray(jsonld) ? jsonld : (jsonld ? [jsonld] : []))
    .filter(Boolean).map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`).join('')
  out = out.replace('</head>', `${alt}${blocks}</head>`)
  return out
}

// Cold boot: open a fresh page and full-load the route's URL (reparses + re-executes the
// whole JS bundle). Used as the FIRST page of a warm run, on every language switch, and
// for the sequential retry pass. setViewport once — it persists across later client navs.
async function coldBootPage(browser, route) {
  const page = await browser.newPage()
  // Block font + media requests (the lazy card-motif / molecule webm loops). Neither
  // affects the captured #root innerHTML — we snapshot HTML not pixels, the decorative
  // <video> element + its poster stay in the DOM regardless of whether the webm bytes
  // load, and fonts never change innerHTML — but on the single-process @sparticuz build
  // Chromium their fetch+decode steals the one shared thread from JS execution and slows
  // every page. NOT images: a blocked /molecules/*.png would trip ChemicalFormulaPlaceholder's
  // onError -> formula-text fallback and change the nootropic prerender output. CSS / JS /
  // XHR / images all pass through unchanged. (Proven byte-identical via dist HTML hash diff.)
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const t = req.resourceType()
    try { (t === 'font' || t === 'media') ? req.abort() : req.continue() } catch { /* already handled */ }
  })
  // Desktop viewport so entries render the full PAGE (not the mobile modal, whose
  // JS-off innerText collapses). The three.js DNA background gets no WebGL context
  // (local: --disable-gpu; Vercel: --disable-webgl* over @sparticuz's swiftshader),
  // so it bails via getContext('webgl2')->null and adds no build-time cost.
  await page.setViewport({ width: 1280, height: 900 })
  // domcontentloaded, NOT networkidle: the SPA keeps connections open (analytics/SW)
  // so networkidle never settles on the slow build Chromium -> 60s nav timeout.
  // waitRendered() then waits for the real content to render + settle.
  await page.goto(`http://127.0.0.1:${PORT}${route.urlPath}`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await waitRendered(page, route.isEntry ? route.name : null)
  return page
}

// Capture the rendered #root + title/desc from an already-rendered page, build the
// per-page JSON-LD, inject head, and write the static HTML. Shared by the warm worker
// (after a client nav) and renderOne (after a cold boot) so both paths emit byte-for-byte
// identical output.
async function captureAndWrite(page, template, route) {
  const cap = await page.evaluate(() => ({
    root: document.getElementById('root').innerHTML,
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
  }))
  if (route.isEntry && !normHyphens(cap.root).includes(normHyphens(route.name))) {
    throw new Error(`prerender ${route.urlPath}: rendered #root does not contain entry name "${route.name}" (skeleton captured?)`)
  }
  const canonical = ORIGIN + route.urlPath
  // Prefer the rendered (localized) meta description; route.desc is the HU shortDesc
  // fallback from LIBRARY_ENTRY_META, only used if the page set no meta.
  const jsonld = []
  if (route.isEntry) jsonld.push(entryJsonLd({ name: route.name, desc: cap.desc || route.desc || '', url: canonical, libraryName: route.libraryName, lang: route.lang, dateModified: route.dateModified, citations: route.citations }))
  const faqLd = faqJsonLd(route.faq, route.lang)
  if (faqLd) jsonld.push(faqLd)
  // BreadcrumbList: Home > Library (landing) > Compound (entry). Home itself has none.
  if (route.libId) {
    const crumbs = [
      { name: HOME_LABEL[route.lang] || HOME_LABEL.hu, url: ORIGIN + homeUrl(route.lang) },
      { name: route.libraryName, url: `${ORIGIN}${PREFIX[route.lang]}/${LIB_SLUGS[route.libId][route.lang]}` },
    ]
    if (route.isEntry) crumbs.push({ name: route.name, url: canonical })
    const bc = breadcrumbJsonLd(crumbs)
    if (bc) jsonld.push(bc)
  }
  let html = injectHead(template, { lang: route.lang, title: cap.title, desc: cap.desc, canonical, hreflang: route.hreflang, jsonld, ogImage: route.ogImage })
  html = html.replace('<div id="root"></div>', `<div id="root">${cap.root}</div>`)
  const outPath = join(DIST, route.diskPath)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  return route.urlPath
}

// Cold-boot one route on its own throwaway page. Used by the sequential retry pass (a
// fresh page per route is maximally robust for the handful of routes that flaked).
async function renderOne(browser, template, route) {
  const page = await coldBootPage(browser, route)
  try {
    return await captureAndWrite(page, template, route)
  } finally {
    // Always close the page so a single --single-process browser never accumulates
    // leaked renderer state across retried routes.
    await page.close().catch(() => {})
  }
}

// On Vercel's build container regular Chromium won't launch (missing system libs),
// so use @sparticuz/chromium (a serverless-ready Chromium build) there. Local/dev
// builds keep the full puppeteer Chromium. Detected via process.env.VERCEL.
//
// Returns a THUNK that launches a fresh browser. main() launches one browser PER
// worker rather than many tabs in one browser, because @sparticuz/chromium forces
// --single-process: a single browser renders everything on ~1 core regardless of
// concurrency, so the 30 vCPU Turbo box would sit idle. N separate browsers = N OS
// process trees = real N-core parallelism. The heavy @sparticuz setup (binary
// extraction + args) is resolved ONCE here so launching N browsers at once never
// races on the executable extraction.
async function makeLauncher() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default
    const puppeteerCore = (await import('puppeteer-core')).default
    const executablePath = await chromium.executablePath()
    // --disable-webgl/-webgl2/-3d-apis make the decorative three.js DNA background bail
    // out via its getContext('webgl2') feature-detect, so it never software-renders
    // (swiftshader, which @sparticuz's own args enable) and burn CPU on every page.
    const args = [...chromium.args, '--disable-software-rasterizer', '--disable-webgl', '--disable-webgl2', '--disable-3d-apis']
    return () => puppeteerCore.launch({ args, executablePath, headless: true, protocolTimeout: 180000 })
  }
  return () => puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-software-rasterizer'], protocolTimeout: 180000 })
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
  const libName = Object.fromEntries(libMod.listLibraries().map((l) => [l.id, l.name])) // {hu,en,pl} triplet
  for (const r of routes) { if (r.libId) r.libraryName = libName[r.libId]?.[r.lang] || libName[r.libId]?.hu || null }

  const server = await startServer(template)
  const launch = await makeLauncher()
  let done = 0, stillFailed = 0
  let browsers = []
  let retryBrowser = null
  try {
    // One browser PER worker (see makeLauncher): N browsers = N OS processes = N cores,
    // the only way to beat @sparticuz's --single-process. allSettled (not all): one flaky
    // launch in the CONCURRENCY-wide burst must not fail the whole build — degrade to the
    // browsers that did come up.
    const launched = await Promise.allSettled(Array.from({ length: CONCURRENCY }, () => launch()))
    browsers = launched.filter((r) => r.status === 'fulfilled').map((r) => r.value)
    if (!browsers.length) throw new Error('prerender: no Chromium could be launched')
    if (browsers.length < CONCURRENCY) console.warn(`[prerender] only ${browsers.length}/${CONCURRENCY} browsers launched; continuing degraded`)

    // Sort so each language's pages are contiguous: a warm worker page can only client-nav
    // WITHIN one language (lang is fixed at SPA mount by detectInitial and is NOT re-derived
    // on popstate), so grouping keeps the costly cold boots to ~one per (worker x language)
    // plus the periodic recycle, instead of one per page.
    const LANG_ORDER = { hu: 0, en: 1, pl: 2 }
    const queue = [...routes].sort((a, b) => (LANG_ORDER[a.lang] ?? 9) - (LANG_ORDER[b.lang] ?? 9))
    const failures = []
    let warmNavs = 0, coldBoots = 0
    // Reuse ONE warm page across consecutive same-language routes, driving the app's own
    // History-API router with pushState+popstate (exactly what a real user's link click
    // does, so the rendered DOM is identical) instead of a full reload. A cold boot
    // reparses + re-executes the whole JS bundle (~15-20s on a 4-core build box) for every
    // page; a warm client nav skips that (~1-3s) — the difference between a 45-min-timeout
    // and a ~10-min build on the cheap Standard machine. Recycle the page every RECYCLE
    // renders so a --single-process Chromium can't accumulate unbounded renderer state.
    const RECYCLE = 40
    async function worker(browser) {
      let page = null, pageLang = null, uses = 0
      const discard = async () => { if (page) await page.close().catch(() => {}); page = null; pageLang = null; uses = 0 }
      while (queue.length) {
        const r = queue.shift()
        if (!r) break
        try {
          if (!page || pageLang !== r.lang || uses >= RECYCLE) {
            await discard()
            page = await coldBootPage(browser, r)
            pageLang = r.lang; uses = 1; coldBoots++
          } else {
            // Drive the in-app router: snapshot the current title, pushState to the target,
            // fire popstate (what useSyncExternalStore + LibraryContext listen for).
            const prevTitle = await page.evaluate((to) => {
              const t = document.title
              window.history.pushState(null, '', to)
              window.dispatchEvent(new PopStateEvent('popstate'))
              return t
            }, r.urlPath)
            await waitRenderedAfterNav(page, r.isEntry ? r.name : null, prevTitle)
            uses++; warmNavs++
          }
          await captureAndWrite(page, template, r)
          done++
        } catch (e) {
          // If THIS browser died (single-process crash / OOM-kill), don't let the worker
          // spin the shared queue into `failures` at thousands/sec — hand the route back
          // and stop, so the healthy workers reclaim it. Else it's a normal flaky failure.
          if (browser.connected === false) { queue.unshift(r); break }
          // A failed warm nav can leave the page mid-transition; discard it so the next
          // route cold-boots clean. The route itself is retried (cold) in the retry pass.
          await discard()
          failures.push({ r, msg: e.message })
        }
      }
      await discard()
    }
    await Promise.all(browsers.map((b) => worker(b)))
    console.log(`[prerender] ${coldBoots} cold boots + ${warmNavs} warm navs (${routes.length} routes)`)

    // Retry failures + any routes a dead worker handed back, SEQUENTIALLY on a FRESH
    // browser: most failures are flaky waitRendered timeouts that pass cleanly when alone,
    // and a fresh browser can't be a crashed pool member. Relaunch it if it dies mid-retry.
    const retryRoutes = [...failures.map((f) => f.r), ...queue]
    if (retryRoutes.length) {
      console.log(`[prerender] retrying ${retryRoutes.length} page(s) sequentially on a fresh browser...`)
      retryBrowser = await launch()
      for (const r of retryRoutes) {
        try {
          if (retryBrowser.connected === false) { await retryBrowser.close().catch(() => {}); retryBrowser = await launch() }
          await renderOne(retryBrowser, template, r); done++
        } catch (e) { stillFailed++; console.error(`[prerender] FAIL (after retry) ${r.urlPath}: ${e.message}`) }
      }
    }
  } finally {
    if (retryBrowser) await retryBrowser.close().catch(() => {})
    await Promise.all(browsers.map((b) => b.close().catch(() => {})))
    server.close()
  }
  // Variant URLs (/<lib>/<id>/<variantId>) aren't rendered (they consolidate to the base
  // entry), but a SHARED variant link still needs the compound's og:image + the right
  // canonical. Copy each base entry's prerendered HTML to its variant disk paths — cheap,
  // and the base HTML already carries the compound og:image + canonical = the base URL.
  let variantCopies = 0
  for (const r of routes) {
    if (!r.isEntry || !r.variantIds || !r.variantIds.length) continue
    const baseFile = join(DIST, r.diskPath)
    if (!existsSync(baseFile)) continue
    const html = readFileSync(baseFile)
    const baseDir = dirname(baseFile)
    for (const vid of r.variantIds) {
      const vp = join(baseDir, vid, 'index.html')
      mkdirSync(dirname(vp), { recursive: true })
      writeFileSync(vp, html)
      variantCopies++
    }
  }
  console.log(`[prerender] wrote ${done}/${routes.length} static pages + ${variantCopies} variant copies, ${stillFailed} failed after retry`)
  // Fail the build if ANY route is missing (retry failures OR routes left unrendered by a
  // dead worker) — a partial dist must never deploy as if it were complete.
  if (done < routes.length) process.exit(1)
}
main().catch((e) => { console.error('[prerender] fatal:', e); process.exit(1) })
