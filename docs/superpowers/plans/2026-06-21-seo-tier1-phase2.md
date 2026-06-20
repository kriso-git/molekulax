# SEO Tier-1 Phase 2 — Build-time Prerender (SSG) + JSON-LD — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Bake static HTML for every HU route (home + 4 library landings + 191 compound pages) so crawlers and AI answer-engines that don't run JS (Bing, social, ChatGPT/Perplexity/AI Overviews) see full content — without changing the live SPA behavior or any visible content.

**Architecture:** After `vite build`, a Puppeteer script serves `dist/`, renders each route, captures the rendered `#root` HTML + the runtime-set `<title>`/`<meta description>`, and writes `dist/<path>/index.html` = the pristine `dist/index.html` shell with `#root` filled + per-page title/meta/canonical/og + a per-compound `MedicalWebPage` JSON-LD injected. The bundle `<script>` stays, so on load React mounts and re-renders the identical SPA (content-identical by construction). Vercel serves the static file when present (filesystem precedence) and falls back to the SPA rewrite for everything else.

**Tech Stack:** Puppeteer (existing), Node. Fallback if the Vercel build can't run Chromium: `@sparticuz/chromium` + `puppeteer-core` (added only if the first deploy's build fails — a failed build leaves the Phase-1 deploy live, so the site is never broken).

**Spec:** `docs/superpowers/specs/2026-06-20-seo-tier1-design.md` (Phase 2). Phase 1 shipped (path routing + meta + sitemap, tag `seo-phase1-shipped`).

---

## Conventions
- Run from repo root `e:/Website Biz/molekulax`, on branch `seo/phase2`.
- Phase 2 = HU only (the routes the sitemap already lists). EN/PL = Phase 3.
- "Visible content unchanged" stays enforced by the existing `scripts/visual-diff.mjs` (compares the FINAL SPA render after JS — unaffected by prerender) AND a NEW JS-disabled content gate (proves the static HTML itself carries content).
- Existing gates remain: `npm run build`, `npm run smoke`, `scripts/verify-csp.mjs`, `scripts/visual-diff.mjs --mode compare`.

## File Structure
**Created:** `scripts/seo-jsonld.mjs` (pure JSON-LD builder), `scripts/test/seo-jsonld.test.mjs`, `scripts/prerender.mjs` (the renderer), `scripts/check-prerender.mjs` (JS-disabled content gate).
**Modified:** `package.json` (`build` runs prerender last).

---

## Task 1: JSON-LD builder (`scripts/seo-jsonld.mjs`) — pure, TDD

**Files:** Create `scripts/seo-jsonld.mjs`, `scripts/test/seo-jsonld.test.mjs`.

- [ ] **Step 1: failing test** — create `scripts/test/seo-jsonld.test.mjs`:
```javascript
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { entryJsonLd } from '../seo-jsonld.mjs'

test('entryJsonLd builds a valid MedicalWebPage about a Drug', () => {
  const ld = entryJsonLd({ name: 'BPC-157', desc: 'Gyomor-pentadekapeptid: szöveti regeneráció', url: 'https://molekulax.hu/peptidek/bpc-157', libraryName: 'Peptid Könyvtár' })
  assert.equal(ld['@context'], 'https://schema.org')
  assert.equal(ld['@type'], 'MedicalWebPage')
  assert.equal(ld.inLanguage, 'hu')
  assert.equal(ld.url, 'https://molekulax.hu/peptidek/bpc-157')
  assert.equal(ld.name, 'BPC-157')
  assert.equal(ld.about['@type'], 'Drug')
  assert.equal(ld.about.name, 'BPC-157')
  assert.ok(ld.about.description.includes('regeneráció'))
  assert.equal(ld.isPartOf.name, 'Peptid Könyvtár')
  // serialisable, no functions/undefined
  assert.doesNotThrow(() => JSON.stringify(ld))
})

test('entryJsonLd escapes nothing weird and tolerates missing desc', () => {
  const ld = entryJsonLd({ name: 'X', desc: '', url: 'https://molekulax.hu/peptidek/x', libraryName: 'Peptid Könyvtár' })
  assert.equal(ld.about.description, '')
})
```

- [ ] **Step 2: run `npm test` → FAILS** ("Cannot find module '../seo-jsonld.mjs'").

- [ ] **Step 3: implement `scripts/seo-jsonld.mjs`:**
```javascript
// Pure builders for per-page schema.org JSON-LD (SEO structured data).
// Phase 2 emits a MedicalWebPage describing each compound as a Drug. Educational,
// not medical advice — kept factual (name + description + url), no dosing claims.

export function entryJsonLd({ name, desc, url, libraryName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    inLanguage: 'hu',
    url,
    name,
    description: desc || '',
    about: {
      '@type': 'Drug',
      name,
      description: desc || '',
    },
    isPartOf: {
      '@type': 'CollectionPage',
      name: libraryName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MolekulaX',
      url: 'https://molekulax.hu/',
    },
  }
}
```

- [ ] **Step 4: run `npm test` → all pass.**
- [ ] **Step 5: commit**
```bash
git add scripts/seo-jsonld.mjs scripts/test/seo-jsonld.test.mjs
git commit -m "feat(seo): per-compound MedicalWebPage JSON-LD builder (pure)"
```

---

## Task 2: Prerender renderer (`scripts/prerender.mjs`)

**Files:** Create `scripts/prerender.mjs`.

- [ ] **Step 1: implement `scripts/prerender.mjs`:**
```javascript
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

// --- enumerate routes from the synchronous library meta ---
async function buildRoutes() {
  const routes = [{ urlPath: '/', diskPath: 'index.html', name: null, libraryName: null }]
  for (const libId of LIBS) {
    const slug = LIB_SLUGS[libId].hu
    const mod = await import(`file://${join(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    const libName = (mod.LIBRARY_ENTRY_META && mod.default && mod.default.name) || null // not used; library name from LIBRARY_META below
    routes.push({ urlPath: `/${slug}`, diskPath: join(slug, 'index.html'), name: null, libraryName: null })
    for (const e of mod.LIBRARY_ENTRY_META) {
      const desc = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
      routes.push({ urlPath: `/${slug}/${e.id}`, diskPath: join(slug, e.id, 'index.html'), name: e.name, libraryName: null, desc, isEntry: true })
    }
  }
  return routes
}

// --- static server over dist (SPA fallback to index.html) ---
function startServer() {
  const server = http.createServer((req, res) => {
    let file = join(DIST, decodeURIComponent(req.url.split('?')[0]))
    if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, 'index.html')
    res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
    try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
  })
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)))
}

// --- wait until #root content stabilises (render finished) ---
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
function escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') }
function escapeAttr(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;') }

async function renderOne(browser, template, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(`http://127.0.0.1:${PORT}${route.urlPath}`, { waitUntil: 'networkidle2', timeout: 30000 })
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

async function main() {
  const template = readFileSync(join(DIST, 'index.html'), 'utf8')
  const routes = await buildRoutes()
  // fill libraryName per route from LIBRARY_META (sync) for nicer JSON-LD/isPartOf
  const libMod = await import(`file://${join(repoRoot, 'src/data/libraries/index.js').replace(/\\/g, '/')}`)
  const libName = Object.fromEntries(libMod.listLibraries().map((l) => [l.id, l.name.hu]))
  const slugToLib = Object.fromEntries(LIBS.map((id) => [LIB_SLUGS[id].hu, id]))
  for (const r of routes) { const seg = r.urlPath.split('/')[1]; const lib = slugToLib[seg]; if (lib) r.libraryName = libName[lib] }

  const server = await startServer()
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] })
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
```

- [ ] **Step 2: run it against the current build + verify a sample static page carries content:**
```bash
npm run build           # produces dist/ (Phase-1, no prerender yet)
node scripts/prerender.mjs
```
Expected: `[prerender] wrote 196 static pages, 0 failed`.
Then verify the static HTML carries content WITHOUT JS:
```bash
node -e "const h=require('fs').readFileSync('dist/peptidek/bpc-157/index.html','utf8'); console.log('has name:', h.includes('BPC-157')); console.log('has jsonld:', h.includes('MedicalWebPage')); console.log('has canonical:', h.includes('canonical\" href=\"https://molekulax.hu/peptidek/bpc-157')); console.log('root filled:', /<div id=\"root\">\\s*<[^>]/.test(h)); console.log('len:', h.length)"
```
Expected: `has name: true`, `has jsonld: true`, `has canonical: true`, `root filled: true`, len > 80000.

- [ ] **Step 3: commit**
```bash
git add scripts/prerender.mjs
git commit -m "feat(seo): build-time Puppeteer prerender (SSG) — static HTML + JSON-LD per HU route"
```

---

## Task 3: JS-disabled content gate + wire into build

**Files:** Create `scripts/check-prerender.mjs`; modify `package.json`.

- [ ] **Step 1: implement `scripts/check-prerender.mjs`** (loads sample prerendered pages with JavaScript DISABLED and asserts the content is present — the crawler/AI view):
```javascript
// Gate: with JS DISABLED, the prerendered static pages must still show content
// (this is exactly what non-JS crawlers + AI answer-engines see). Run after build.
import http from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import puppeteer from 'puppeteer'

const DIST = join(process.cwd(), 'dist')
const PORT = 4387
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' }
const CHECKS = [
  { path: '/peptidek/bpc-157', must: 'BPC-157' },
  { path: '/nootropikumok/semax', must: 'Semax' },
  { path: '/teljesitmenyfokozok/testosterone-info', must: 'Testosterone' },
  { path: '/peptidek', must: 'Peptid' },
]
const server = http.createServer((req, res) => {
  let file = join(DIST, decodeURIComponent(req.url.split('?')[0]))
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file)) file = join(DIST, 'index.html')
  res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
  try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] })
let fail = 0
for (const c of CHECKS) {
  const page = await browser.newPage()
  await page.setJavaScriptEnabled(false)
  await page.goto(`http://127.0.0.1:${PORT}${c.path}`, { waitUntil: 'domcontentloaded', timeout: 20000 })
  const text = await page.evaluate(() => document.getElementById('root')?.innerText || '')
  const ok = text.includes(c.must)
  if (!ok) fail++
  console.log(`[${ok ? 'OK' : 'FAIL'}] JS-off ${c.path} contains "${c.must}" (root text ${text.length} chars)`)
  await page.close()
}
await browser.close(); server.close()
console.log(fail === 0 ? '[prerender-check] ALL CLEAN — crawlers see content' : `[prerender-check] ${fail} FAILED`)
process.exit(fail === 0 ? 0 : 1)
```

- [ ] **Step 2: wire prerender into the build.** In `package.json` change `build` to run prerender LAST:
```json
"build": "node scripts/validate-library-meta.mjs && node scripts/gen-sitemap.mjs && vite build && node scripts/prerender.mjs",
```

- [ ] **Step 3: full local gate set.** Run:
```bash
npm run build
node scripts/check-prerender.mjs
npm run smoke
node scripts/verify-csp.mjs /peptidek/bpc-157 /nootropikumok/semax
node scripts/visual-diff.mjs --mode compare
```
Expected: build prints `[prerender] wrote 196 static pages, 0 failed`; prerender-check `ALL CLEAN`; smoke ALL PASS (the SPA still mounts over the prerendered HTML); CSP `ALL CLEAN` (JSON-LD is non-executable data); visual-diff `IDENTICAL` (the final SPA render is unchanged). If visual-diff regresses, STOP — the client re-render must match.

- [ ] **Step 4: commit**
```bash
git add scripts/check-prerender.mjs package.json
git commit -m "feat(seo): JS-disabled prerender content gate; wire prerender into build"
```

---

## Task 4: Deploy + live verify (with Chromium fallback if the Vercel build can't render)

**Files:** none unless the fallback is needed.

- [ ] **Step 1: merge to master + push**
```bash
git checkout master && git merge --no-ff seo/phase2 -m "merge(seo): Phase 2 — build-time prerender (SSG) + JSON-LD"
git push origin master
```

- [ ] **Step 2: confirm the Vercel build SUCCEEDED with prerender (live, JS-disabled).** After ~2 min, fetch a compound page and check the RAW HTML (no JS) contains the content:
```bash
curl -sS https://molekulax.hu/peptidek/bpc-157 | grep -c "BPC-157"        # > 0 means prerendered HTML is live
curl -sS https://molekulax.hu/peptidek/bpc-157 | grep -c "MedicalWebPage" # > 0 means JSON-LD shipped
```
- If both > 0 → prerender deployed. Proceed to Step 3.
- If 0 → the Vercel build could not run Chromium (the deploy either failed — site still on Phase 1, unbroken — or shipped without prerender). Apply the FALLBACK:
  - `npm i -D @sparticuz/chromium puppeteer-core`
  - In `scripts/prerender.mjs`, launch via sparticuz when `process.env.VERCEL`: `const isVercel = !!process.env.VERCEL; const browser = isVercel ? await (await import('puppeteer-core')).launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: true }) : await puppeteer.launch({...})` (import `@sparticuz/chromium` as `chromium`). Keep local runs on full puppeteer.
  - Re-run the full local gate set, commit, push, re-check Step 2.

- [ ] **Step 3: live render + CSP + content-unchanged check** (the SPA must still mount + render identically over the prerendered HTML, 0 CSP violations). Reuse the live puppeteer check pattern: load `/`, `/peptidek/bpc-157`, confirm `#root` has children after JS, 0 `securitypolicyviolation`, correct title. Confirm a legacy `#entry/...` still redirects.

- [ ] **Step 4: tag**
```bash
git tag seo-phase2-shipped && git push origin seo-phase2-shipped
```

---

## Self-Review
**Spec coverage:** Phase 2 spec items — prerender (Task 2), per-compound JSON-LD (Tasks 1-2), canonical (Task 2), build wiring (Task 3), Vercel static precedence + JS-off content (Tasks 3-4). hreflang + EN/PL are Phase 3 (excluded). **Placeholders:** none. **Risk:** the Vercel-build Chromium question is handled by Task 4's fallback; a failed build leaves the Phase-1 deploy live, so the site is never broken. **Content-identical:** enforced by visual-diff (final SPA render) + the JS-off gate proving the static HTML carries the same content; the client re-renders the identical SPA over the prerendered DOM.
