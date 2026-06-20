# SEO Tier-1 Phase 1 — HU Path Routing + Meta + Sitemap — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the ~191 compound pages + 4 library landings individually reachable at real Hungarian URLs (`/peptidek/bpc-157`) instead of hash fragments, with per-page title/meta and a full HU sitemap — without breaking the site or changing any visible content/cards.

**Architecture:** Replace the hash router (`#entry/<lib>/<id>`) with a tiny History-API path router (`navigate()` + `useLocationPath()` via `useSyncExternalStore`). A pure `src/seo/urls.js` maps lib ids ↔ localized slug words and parses/builds paths. All hash touchpoints (App, LibraryContext, EntryDetailRoute, LibraryGallery, LibraryCube) convert to paths in one atomic task. Old `#`-links redirect once at startup. A `useDocumentHead` hook sets title/meta per route. A build-time `scripts/gen-sitemap.mjs` writes `public/sitemap.xml`. Visual identity is proven by a pixel screenshot-diff gate.

**Tech Stack:** React 19 (`useSyncExternalStore`), Vite 6, Node `node:test`, Puppeteer (existing smoke harness), `pngjs` (already a devDep) for pixel-diff. No react-router. Scope = HU only; EN/PL are Phase 3.

**Spec:** `docs/superpowers/specs/2026-06-20-seo-tier1-design.md`

---

## Conventions used by every task

- Run all commands from the repo root `e:/Website Biz/molekulax`.
- Phase 1 is **HU-only**: URLs have no language prefix (HU lives at the site root). EN/PL prefixes (`/en`, `/pl`) and hreflang are explicitly out of scope here (Phase 3).
- "Visible content unchanged" is enforced by Task 3's baseline + Task 9's screenshot-diff gate; never edit copy, card markup, or styles in this phase.
- Commit after each task with the message shown in its final step.

---

## File Structure (created / modified in Phase 1)

**Created:**
- `src/seo/urls.js` — pure slug map + path build/parse helpers (one responsibility: URL ↔ {library,id,variant} translation).
- `src/seo/useDocumentHead.js` — React hook that sets `document.title` + `<meta name="description">` per route.
- `src/router/location.js` — `navigate()` + `useLocationPath()` History-API primitive.
- `src/router/hashRedirect.js` — pure `hashToPath()` + a `redirectLegacyHash()` startup shim.
- `scripts/gen-sitemap.mjs` — build-time HU sitemap generator.
- `scripts/test/seo-urls.test.mjs` — unit tests for `src/seo/urls.js`.
- `scripts/test/hash-redirect.test.mjs` — unit tests for `hashToPath()`.
- `scripts/test/gen-sitemap.test.mjs` — unit tests for the sitemap URL list builder.
- `scripts/visual-diff.mjs` — Puppeteer + pngjs before/after pixel-diff gate.
- `scripts/verify-csp.mjs` — committed CSP-enforcement gate (serves `dist` with the prod CSP header, captures `securitypolicyviolation`).

**Modified:**
- `src/App.jsx` — hash route → path route; entry/library-landing rendering.
- `src/main.jsx` — call `redirectLegacyHash()` before render.
- `src/context/LibraryContext.jsx` — `readInitialLibraryId()` reads the path, not the hash.
- `src/components/library/EntryDetailRoute.jsx` — accept a parsed `route` prop; all `window.location.hash = …` → `navigate(...)`; variant redirect + back-restore via path.
- `src/components/LibraryGallery.jsx` — `openEntry()` navigates to the entry path.
- `src/components/library/cube-nav/LibraryCube.jsx` — scroll-restore listener becomes path-aware.
- `package.json` — `build` script runs the sitemap generator; add `gates` helpers.
- `scripts/smoke-render.mjs` — route list uses new path URLs.

---

## Task 1: URL helper module (`src/seo/urls.js`) — pure, TDD

**Files:**
- Create: `src/seo/urls.js`
- Test: `scripts/test/seo-urls.test.mjs`

- [ ] **Step 1: Write the failing test**

Create `scripts/test/seo-urls.test.mjs`:

```javascript
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { LIB_SLUGS, entryPath, libraryPath, homePath, parsePath } from '../../src/seo/urls.js'

test('LIB_SLUGS has all 4 libraries with hu/en/pl words', () => {
  for (const id of ['peptides', 'nootropics', 'performance', 'pharmaceutical']) {
    assert.ok(LIB_SLUGS[id], `missing ${id}`)
    for (const l of ['hu', 'en', 'pl']) assert.equal(typeof LIB_SLUGS[id][l], 'string')
  }
})

test('entryPath builds HU path with no lang prefix', () => {
  assert.equal(entryPath('peptides', 'bpc-157'), '/peptidek/bpc-157')
  assert.equal(entryPath('performance', 'testosterone-info'), '/teljesitmenyfokozok/testosterone-info')
})

test('entryPath appends a variant segment when given', () => {
  assert.equal(entryPath('performance', 'testosterone-info', 'enan'), '/teljesitmenyfokozok/testosterone-info/enan')
})

test('libraryPath + homePath', () => {
  assert.equal(libraryPath('nootropics'), '/nootropikumok')
  assert.equal(homePath(), '/')
})

test('parsePath classifies home / library / entry', () => {
  assert.deepEqual(parsePath('/'), { kind: 'home', lang: 'hu' })
  assert.deepEqual(parsePath('/peptidek'), { kind: 'library', lang: 'hu', library: 'peptides' })
  assert.deepEqual(parsePath('/peptidek/bpc-157'), { kind: 'entry', lang: 'hu', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/teljesitmenyfokozok/testosterone-info/enan'), { kind: 'entry', lang: 'hu', library: 'performance', id: 'testosterone-info', variantId: 'enan' })
})

test('parsePath returns unknown for unrecognised first segment (incl. future /en, /pl)', () => {
  assert.equal(parsePath('/en/peptides/bpc-157').kind, 'unknown')
  assert.equal(parsePath('/nonsense').kind, 'unknown')
  assert.equal(parsePath('/peptidek/bpc-157/enan/extra').kind, 'unknown')
})

test('parsePath ignores a trailing slash', () => {
  assert.deepEqual(parsePath('/peptidek/'), { kind: 'library', lang: 'hu', library: 'peptides' })
})

test('roundtrip: parsePath(entryPath(x)) recovers x', () => {
  const p = entryPath('pharmaceutical', 'tadalafil')
  assert.deepEqual(parsePath(p), { kind: 'entry', lang: 'hu', library: 'pharmaceutical', id: 'tadalafil', variantId: null })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --test-name-pattern="entryPath|parsePath|LIB_SLUGS"` (or `npm test`)
Expected: FAIL with `Cannot find module '../../src/seo/urls.js'`.

- [ ] **Step 3: Implement `src/seo/urls.js`**

```javascript
// Pure URL <-> {library,id,variant} translation for SEO path routing.
// Phase 1 = HU only (no language prefix; HU lives at the site root). The
// hu/en/pl slug words are all defined here so Phase 3 can add /en + /pl
// prefixes without touching callers — but parsePath() below only recognises
// HU paths in Phase 1; /en and /pl resolve to { kind: 'unknown' } until Phase 3.

export const LIB_SLUGS = {
  peptides:       { hu: 'peptidek',            en: 'peptides',        pl: 'peptydy' },
  nootropics:     { hu: 'nootropikumok',       en: 'nootropics',      pl: 'nootropiki' },
  performance:    { hu: 'teljesitmenyfokozok', en: 'performance',     pl: 'wspomaganie' },
  pharmaceutical: { hu: 'gyogyszerek',         en: 'pharmaceuticals', pl: 'leki' },
}

// HU at root; EN/PL prefixed (Phase 3 wires these into parsePath).
const LANG_PREFIX = { hu: '', en: '/en', pl: '/pl' }

// Reverse map per language: localized slug word -> library id.
const SLUG_TO_LIB = {}
for (const [libId, words] of Object.entries(LIB_SLUGS)) {
  for (const [lang, word] of Object.entries(words)) {
    SLUG_TO_LIB[lang] = SLUG_TO_LIB[lang] || {}
    SLUG_TO_LIB[lang][word] = libId
  }
}

export function homePath(lang = 'hu') {
  return LANG_PREFIX[lang] || '/'
}

export function libraryPath(libId, lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${LIB_SLUGS[libId][lang]}`
}

export function entryPath(libId, id, variantId = null, lang = 'hu') {
  const base = `${LANG_PREFIX[lang]}/${LIB_SLUGS[libId][lang]}/${id}`
  return variantId ? `${base}/${variantId}` : base
}

// Phase 1: parse HU paths only (no prefix). Returns one of:
//   { kind:'home', lang } | { kind:'library', lang, library }
//   { kind:'entry', lang, library, id, variantId } | { kind:'unknown' }
export function parsePath(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/'
  if (clean === '/') return { kind: 'home', lang: 'hu' }
  const parts = clean.replace(/^\//, '').split('/')
  const library = SLUG_TO_LIB.hu[parts[0]]
  if (!library) return { kind: 'unknown' }
  if (parts.length === 1) return { kind: 'library', lang: 'hu', library }
  if (parts.length === 2) return { kind: 'entry', lang: 'hu', library, id: parts[1], variantId: null }
  if (parts.length === 3) return { kind: 'entry', lang: 'hu', library, id: parts[1], variantId: parts[2] }
  return { kind: 'unknown' }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS (all `seo-urls` tests green; existing tests still green).

- [ ] **Step 5: Commit**

```bash
git add src/seo/urls.js scripts/test/seo-urls.test.mjs
git commit -m "feat(seo): pure URL slug map + path build/parse helpers (HU)"
```

---

## Task 2: Legacy hash → path redirect (`src/router/hashRedirect.js`) — pure core, TDD

**Files:**
- Create: `src/router/hashRedirect.js`
- Test: `scripts/test/hash-redirect.test.mjs`

- [ ] **Step 1: Write the failing test**

Create `scripts/test/hash-redirect.test.mjs`:

```javascript
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hashToPath } from '../../src/router/hashRedirect.js'

test('entry hash -> HU entry path', () => {
  assert.equal(hashToPath('#entry/peptides/bpc-157'), '/peptidek/bpc-157')
})

test('entry hash with variant -> path with variant', () => {
  assert.equal(hashToPath('#entry/performance/testosterone-info/enan'), '/teljesitmenyfokozok/testosterone-info/enan')
})

test('#library and empty -> home', () => {
  assert.equal(hashToPath('#library'), '/')
  assert.equal(hashToPath('library'), '/')
})

test('unknown library -> null (no redirect)', () => {
  assert.equal(hashToPath('#entry/nope/x'), null)
})

test('non-entry / unrelated hash -> null', () => {
  assert.equal(hashToPath('#foo'), null)
  assert.equal(hashToPath(''), null)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL with `Cannot find module '../../src/router/hashRedirect.js'`.

- [ ] **Step 3: Implement `src/router/hashRedirect.js`**

```javascript
// One-shot legacy-hash compatibility. Old shared links (Telegram, any indexed
// #entry/... URL) keep working: at startup we translate the hash to the new
// path and replaceState to it, BEFORE React mounts.
import { LIB_SLUGS, entryPath } from '../seo/urls.js'

const KNOWN_LIBS = new Set(Object.keys(LIB_SLUGS))

// Pure: returns the new path for a legacy hash, or null if nothing to do.
export function hashToPath(hash) {
  const clean = (hash || '').replace(/^#/, '')
  if (clean === '' ) return null
  if (clean === 'library') return '/'
  const parts = clean.split('/')
  if (parts[0] !== 'entry' || !parts[1] || !parts[2]) return null
  if (!KNOWN_LIBS.has(parts[1])) return null
  return entryPath(parts[1], parts[2], parts[3] || null)
}

// Side-effectful shim, called once from main.jsx before render.
export function redirectLegacyHash() {
  if (typeof window === 'undefined') return
  const to = hashToPath(window.location.hash)
  if (to && to !== window.location.pathname) {
    window.history.replaceState(null, '', to)
  } else if (window.location.hash) {
    // strip a stray non-entry hash so it can't confuse the path router
    if (hashToPath(window.location.hash) === '/') window.history.replaceState(null, '', '/')
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/router/hashRedirect.js scripts/test/hash-redirect.test.mjs
git commit -m "feat(seo): legacy #hash -> path redirect (pure hashToPath + startup shim)"
```

---

## Task 3: Gate scripts + capture the visual baseline (BEFORE any routing change)

This task adds the two reusable gates and **captures baseline screenshots of the current (hash) site** so Task 5 can prove the UI is pixel-identical after conversion.

**Files:**
- Create: `scripts/visual-diff.mjs`, `scripts/verify-csp.mjs`

- [ ] **Step 1: Implement `scripts/verify-csp.mjs`** (committed CSP gate)

```javascript
// CSP-enforcement gate: serve dist/ with the EXACT vercel.json CSP header and load
// the real routes; fail on any securitypolicyviolation. Run AFTER `npm run build`.
// Usage: node scripts/verify-csp.mjs            (uses default ROUTES)
//        node scripts/verify-csp.mjs /peptidek/bpc-157 /nootropikumok   (extra routes)
import http from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import puppeteer from 'puppeteer'

const DIST = join(process.cwd(), 'dist')
const PORT = 4398
// vercel.json CSP minus upgrade-insecure-requests (that only upgrades http->https
// subresources; on this local http server it would force assets to https and fail.
// It never produces a securitypolicyviolation on the real https site).
const CSP = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; media-src 'self'; connect-src 'self'; worker-src 'self'; manifest-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'"
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' }

const EXTRA = process.argv.slice(2)
const ROUTES = ['/', '/#entry/peptides/bpc-157', '/#entry/nootropics/semax', ...EXTRA]

const server = http.createServer((req, res) => {
  let file = join(DIST, decodeURIComponent(req.url.split('?')[0].split('#')[0]))
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, 'index.html')
  res.setHeader('Content-Security-Policy', CSP)
  res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
  try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] })
let total = 0
for (const route of ROUTES) {
  for (const vp of [{ w: 1280, h: 900 }, { w: 390, h: 844 }]) {
    const page = await browser.newPage()
    await page.setViewport({ width: vp.w, height: vp.h })
    await page.evaluateOnNewDocument(() => { window.__csp = []; document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(`${e.violatedDirective} ${e.blockedURI || '(inline)'}`)) })
    const cons = []
    page.on('console', (m) => { const t = m.text(); if (/Content Security Policy|Refused to (load|execute|apply|connect)/i.test(t)) cons.push(t) })
    await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await new Promise((r) => setTimeout(r, 2500))
    const v = [...new Set([...(await page.evaluate(() => window.__csp || [])), ...cons])]
    total += v.length
    if (v.length) { console.log(`[CSP FAIL] ${route} @${vp.w}`); v.forEach((x) => console.log('   ! ' + x)) }
    await page.close()
  }
}
await browser.close(); server.close()
console.log(total === 0 ? '[CSP] ALL CLEAN — enforce-safe' : `[CSP] ${total} VIOLATION(S)`) 
process.exit(total === 0 ? 0 : 1)
```

- [ ] **Step 2: Implement `scripts/visual-diff.mjs`** (pixel before/after gate, uses existing `pngjs`)

```javascript
// Visual identity gate. `--mode baseline` captures PNGs of the current site into
// scripts/.visual-baseline/. `--mode compare` re-captures and pixel-diffs against
// the baseline; exits 1 if any route differs beyond THRESHOLD pixels. Requires a
// running `vite preview` (we spawn it, like smoke). Routes are passed so the same
// surfaces can be captured before (hash) and after (path) conversion.
import puppeteer from 'puppeteer'
import { spawn, spawnSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { PNG } from 'pngjs'
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const PORT = 4396
const BASE = `http://127.0.0.1:${PORT}`
const DIR = join(process.cwd(), 'scripts', '.visual-baseline')
const THRESHOLD = 0.001 // max 0.1% of pixels may differ (anti-aliasing/DNA canvas jitter)
const argv = process.argv.slice(2)
const mode = argv[argv.indexOf('--mode') + 1] || 'compare'
// Surfaces to compare. Each entry: a label + the BEFORE (hash) url + the AFTER (path) url.
// In baseline mode the BEFORE url is used; in compare mode the AFTER url. The DNA
// background is decorative + animated, so we hide it via ?novfx (handled in Step 4 of Task 5).
const SURFACES = [
  { label: 'home', before: '/', after: '/' },
  { label: 'entry-bpc157', before: '/#entry/peptides/bpc-157', after: '/peptidek/bpc-157' },
  { label: 'entry-semax', before: '/#entry/nootropics/semax', after: '/nootropikumok/semax' },
  { label: 'entry-testo', before: '/#entry/performance/testosterone-info', after: '/teljesitmenyfokozok/testosterone-info' },
]

function startPreview() {
  const child = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', shell: true })
  return child
}
function stopPreview(child) {
  if (!child) return
  if (process.platform === 'win32' && child.pid) spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' })
  else child.kill('SIGTERM')
}
async function waitForServer(url, tries = 60) { for (let i = 0; i < tries; i++) { try { if ((await fetch(url)).ok) return true } catch {} await sleep(500) } return false }

function diffPixels(aBuf, bBuf) {
  const a = PNG.sync.read(aBuf), b = PNG.sync.read(bBuf)
  if (a.width !== b.width || a.height !== b.height) return 1 // size change = total fail
  let diff = 0
  for (let i = 0; i < a.data.length; i += 4) {
    if (Math.abs(a.data[i] - b.data[i]) > 12 || Math.abs(a.data[i + 1] - b.data[i + 1]) > 12 || Math.abs(a.data[i + 2] - b.data[i + 2]) > 12) diff++
  }
  return diff / (a.width * a.height)
}

mkdirSync(DIR, { recursive: true })
const preview = startPreview()
if (!(await waitForServer(`${BASE}/`, 60))) { console.error('[visual] preview not up (run npm run build)'); stopPreview(preview); process.exit(1) }
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] })
let worst = 0
for (const s of SURFACES) {
  for (const vp of [{ tag: 'desk', w: 1280, h: 1400 }, { tag: 'mob', w: 390, h: 1600 }]) {
    const page = await browser.newPage()
    await page.setViewport({ width: vp.w, height: vp.h })
    const url = `${BASE}${(mode === 'baseline' ? s.before : s.after)}?novfx=1`
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
    await sleep(2200)
    const shot = await page.screenshot({ fullPage: false })
    await page.close()
    const fp = join(DIR, `${s.label}-${vp.tag}.png`)
    if (mode === 'baseline') { writeFileSync(fp, shot); console.log(`baseline ${s.label}-${vp.tag}`) }
    else {
      if (!existsSync(fp)) { console.error(`[visual] missing baseline ${fp} — run --mode baseline first`); worst = 1; continue }
      const ratio = diffPixels(readFileSync(fp), shot)
      worst = Math.max(worst, ratio)
      console.log(`[${ratio <= THRESHOLD ? 'OK' : 'DIFF'}] ${s.label}-${vp.tag}  ${(ratio * 100).toFixed(3)}% changed`)
    }
  }
}
await browser.close(); stopPreview(preview)
if (mode === 'compare') { console.log(worst <= THRESHOLD ? '[visual] IDENTICAL (within threshold)' : `[visual] CHANGED ${(worst * 100).toFixed(3)}%`); process.exit(worst <= THRESHOLD ? 0 : 1) }
process.exit(0)
```

- [ ] **Step 3: Build the CURRENT (hash) site and capture the baseline**

Run:
```bash
npm run build
node scripts/visual-diff.mjs --mode baseline
```
Expected: `baseline home-desk`, `baseline entry-bpc157-desk`, … 8 PNGs written to `scripts/.visual-baseline/`. (The `?novfx=1` query has no effect yet — it is wired in Task 5 Step 0 — so the DNA bg is present in both baseline and compare; the 0.1% threshold absorbs its animation.)

- [ ] **Step 4: Ignore the baseline artifacts in git**

Add to `.gitignore`:
```
scripts/.visual-baseline/
```

- [ ] **Step 5: Commit the gate scripts**

```bash
git add scripts/visual-diff.mjs scripts/verify-csp.mjs .gitignore
git commit -m "test(seo): committed CSP + visual-diff gates; capture pre-conversion baseline"
```

---

## Task 4: Navigation primitive (`src/router/location.js`)

**Files:**
- Create: `src/router/location.js`

- [ ] **Step 1: Implement `src/router/location.js`**

```javascript
// Minimal History-API location store. navigate() pushes/replaces + notifies;
// useLocationPath() re-renders subscribers on navigate() and browser back/forward.
import { useSyncExternalStore } from 'react'

const listeners = new Set()
function emit() { listeners.forEach((l) => l()) }

export function navigate(to, { replace = false } = {}) {
  if (typeof window === 'undefined') return
  if (to === window.location.pathname + window.location.search) { emit(); return }
  if (replace) window.history.replaceState(null, '', to)
  else window.history.pushState(null, '', to)
  emit()
}

function subscribe(cb) {
  listeners.add(cb)
  window.addEventListener('popstate', cb)
  return () => { listeners.delete(cb); window.removeEventListener('popstate', cb) }
}
function getSnapshot() { return window.location.pathname }
function getServerSnapshot() { return '/' }

export function useLocationPath() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
```

- [ ] **Step 2: Verify it imports cleanly (no test — DOM integration is covered by smoke in Task 9)**

Run: `node -e "import('./src/router/location.js').then(()=>console.log('ok')).catch(e=>{console.error(e);process.exit(1)})"`
Expected: prints `ok` (module parses; `useSyncExternalStore` is only called inside React, not at import).

- [ ] **Step 3: Commit**

```bash
git add src/router/location.js
git commit -m "feat(seo): History-API navigate() + useLocationPath() primitive"
```

---

## Task 5: Atomic hash → path conversion (App, LibraryContext, EntryDetailRoute, LibraryGallery, LibraryCube, main)

This is the one task that must land together — converting one touchpoint without the others breaks navigation. Implement all steps, then run the full gate set once.

**Files:**
- Modify: `src/main.jsx`, `src/App.jsx`, `src/context/LibraryContext.jsx`, `src/components/library/EntryDetailRoute.jsx`, `src/components/LibraryGallery.jsx`, `src/components/library/cube-nav/LibraryCube.jsx`

- [ ] **Step 0: Add `?novfx` DNA-bg suppression (so the visual-diff is deterministic)**

In `src/App.jsx`, the `BackgroundLayer` mounts `<DnaBackground />` on ≥768px. Gate it off when the URL carries `?novfx` (used only by the screenshot gate; real users never see this param). Replace the current `BackgroundLayer`:

```jsx
function BackgroundLayer() {
  const showDnaBg = useMediaQuery('(min-width: 768px)')
  const novfx = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('novfx')
  return (
    <>
      <div aria-hidden="true" className="dna-backdrop" />
      {showDnaBg && !novfx && (
        <Suspense fallback={null}>
          <DnaBackground />
        </Suspense>
      )}
    </>
  )
}
```

- [ ] **Step 1: `src/main.jsx` — run the legacy-hash redirect before render**

Open `src/main.jsx`. Add the import and call `redirectLegacyHash()` immediately before `createRoot(...).render(...)`:

```jsx
import { redirectLegacyHash } from './router/hashRedirect'

// Translate any legacy #entry/... or #library link to its new path BEFORE React
// mounts, so deep-linked/shared hash URLs land on the correct path route.
redirectLegacyHash()
```

(Keep the existing imports and the existing `createRoot(document.getElementById('root')).render(...)` call unchanged otherwise.)

- [ ] **Step 2: `src/App.jsx` — path router replaces hash router**

Replace the `readHash`/`useHashRoute` hook and the import of `isEntryDetailHash` with the path router. Change the top imports:

```jsx
import { lazy, Suspense } from 'react'
```
(remove `useEffect, useState` from the React import if no longer used elsewhere in the file — they are only used by the old hook; verify and drop them).

Replace:
```jsx
import { isEntryDetailHash } from './components/library/entryHash'
```
with:
```jsx
import { useLocationPath } from './router/location'
import { parsePath } from './seo/urls'
```

Delete the `readHash()` function and the `useHashRoute()` hook entirely.

In `export default function App()`, replace the routing head:

```jsx
export default function App() {
  const path = useLocationPath()
  const route = parsePath(path)

  // Hidden preview routes (#dna-preview / #card-preview), DEV only.
  const rawPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : ''
  if (import.meta.env.DEV && rawPath === '/dna-preview') {
    return (<Suspense fallback={null}><DnaPreview /></Suspense>)
  }
  if (import.meta.env.DEV && rawPath === '/card-preview') {
    return (<Suspense fallback={null}><CardVizPreview /></Suspense>)
  }

  const isEntryDetail = route.kind === 'entry'
  const hideLanding = isEntryDetail
```

And change the entry-detail mount at the bottom from `{isEntryDetail && <EntryDetailRoute hash={hash} />}` to:

```jsx
            {isEntryDetail && <EntryDetailRoute route={route} />}
```

(The `BackgroundLayer`, providers, Hero/Education/... landing block stay exactly as they are.)

- [ ] **Step 3: `src/context/LibraryContext.jsx` — initial library id from the path**

Add the import at the top:
```jsx
import { parsePath } from '../seo/urls'
```
Replace `readInitialLibraryId`:

```jsx
function readInitialLibraryId(defaultId) {
  if (typeof window === 'undefined') return defaultId
  const route = parsePath(window.location.pathname)
  if ((route.kind === 'entry' || route.kind === 'library') && getLibrary(route.library)) return route.library
  const stored = sessionStorage.getItem(STORAGE_KEY)
  if (stored && getLibrary(stored)) return stored
  return defaultId
}
```

- [ ] **Step 4: `src/components/library/EntryDetailRoute.jsx` — consume a parsed `route` prop; navigate by path**

Add imports:
```jsx
import { navigate } from '../../router/location'
import { entryPath, libraryPath } from '../../seo/urls'
```
Remove the import of `parseEntryHash, isEntryDetailHash` (no longer used here).

Change the signature + drop the hash parse — the parsed route now arrives as a prop:
```jsx
export default function EntryDetailRoute({ route }) {
  const parsed = route && route.kind === 'entry' ? route : null
```
(Everything else that reads `parsed.library`, `parsed.id`, `parsed.variantId` keeps working unchanged.)

Replace the **deprecated-redirect timer** body (`window.location.hash = 'library'`) with:
```jsx
      const timer = setTimeout(() => {
        if (!cancelled) { navigate(libraryPath(parsed.library)) }
      }, 1800)
```

Replace **`handleJump`**:
```jsx
    const handleJump = (id) => {
      if (parsed?.library) navigate(entryPath(parsed.library, id))
    }
```

Replace **`closeDetail`** so the two `window.location.hash = 'library'` writes become path navigations, and the `window.location.hash === '#library'` check becomes a path check:
```jsx
  const closeDetail = () => {
    if (typeof window === 'undefined') return
    const restoreData = consumeReturnState()
    const back = parsed?.library ? libraryPath(parsed.library) : '/'

    if (restoreData) {
      window.__libraryGalleryPendingRestore__ = restoreData
      if (restoreData.libraryId) setLibraryId(restoreData.libraryId)
      navigate(back)
      return
    }
    if (parsed?.library) setLibraryId(parsed.library)
    if (window.location.pathname === back) {
      requestAnimationFrame(() => {
        document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      navigate(back)
    }
  }
```

Replace the **variant auto-redirect** `replaceState` block:
```jsx
    if (!parsed.variantId || !validId(parsed.variantId)) {
      const fallback = validId(entry.defaultVariant) ? entry.defaultVariant : variants[0].routeId
      navigate(entryPath(parsed.library, parsed.id, fallback), { replace: true })
    }
```
(Delete the old `window.history.replaceState(...)` + `window.dispatchEvent(new Event('hashchange'))` lines — `navigate()` notifies subscribers itself.)

Replace the **browser-back restore** `useEffect` (the one listening to `hashchange` for `#library`/empty) with a path-driven version. Add `useLocationPath` to the imports from `../../router/location`:
```jsx
import { navigate, useLocationPath } from '../../router/location'
```
Then, near the other hooks, replace the whole `hashchange`-listener effect with:
```jsx
  // Browser-back/forward restore: when the location leaves the entry route
  // (back to a library landing or home), consume the gallery snapshot so the
  // grid restores scroll/filters. useLocationPath re-renders on popstate.
  const livePath = useLocationPath()
  useEffect(() => {
    if (typeof window === 'undefined') return
    const r = parsePath(livePath)
    if (r.kind !== 'entry') {
      const snapshot = consumeReturnState()
      if (snapshot) {
        window.__libraryGalleryPendingRestore__ = snapshot
        if (snapshot.libraryId) setLibraryId(snapshot.libraryId)
      }
    }
  }, [livePath, setLibraryId])
```
Add `import { parsePath } from '../../seo/urls'` (combine with the existing seo import).

- [ ] **Step 5: `src/components/LibraryGallery.jsx` — `openEntry` navigates by path**

Add import:
```jsx
import { navigate } from './library/../router/location'
```
(Use the correct relative path from `src/components/`: `import { navigate } from '../router/location'` and `import { entryPath } from '../seo/urls'`.)

Replace the final line of `openEntry`:
```jsx
    navigate(entryPath(library.id, entry.id))
  }, [library.id])
```
(The sessionStorage snapshot write above it stays unchanged.)

- [ ] **Step 6: `src/components/library/cube-nav/LibraryCube.jsx` — scroll-restore listener becomes path-aware**

Add imports:
```jsx
import { useLocationPath } from '../../../router/location'
import { parsePath } from '../../../seo/urls'
```
Replace the `scrollIfLibrary` `hashchange` effect with a path-driven one:
```jsx
  // When the location returns to a library landing (e.g. closing an entry), scroll
  // the section into view — unless the gallery owns the restore.
  const libLocPath = useLocationPath()
  useEffect(() => {
    const r = parsePath(libLocPath)
    if (r.kind !== 'library' && libLocPath !== '/') return
    if (!sectionRef.current) return
    if (window.__libraryGalleryPendingRestore__) return
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [libLocPath])
```
(Leave `switchTo`, `goNext/goPrev/goJump`, and the rest of LibraryCube unchanged — library switching stays state-only and does NOT touch the URL in Phase 1.)

- [ ] **Step 7: Build + run the FULL gate set**

Run:
```bash
npm run build
npm run smoke
node scripts/verify-csp.mjs /peptidek/bpc-157 /nootropikumok/semax /teljesitmenyfokozok/testosterone-info
node scripts/visual-diff.mjs --mode compare
```
Expected:
- build: green.
- smoke: **will FAIL until Task 6** because `smoke-render.mjs` still points at `/#entry/...` URLs (the hash routes no longer render entry detail). That is expected here; the smoke route list is updated in the next sub-step.

- [ ] **Step 8: Update `scripts/smoke-render.mjs` route list to path URLs**

Replace the three entry routes in the `ROUTES` array:
```javascript
  { label: 'entry — peptides/retatrutide (QualityGrid)', lib: null, path: '/peptidek/retatrutide' },
  { label: 'entry — nootropics/semax', lib: null, path: '/nootropikumok/semax' },
  { label: 'entry — performance/testosterone-info', lib: null, path: '/teljesitmenyfokozok/testosterone-info' },
```
(The 4 homepage/gallery routes stay `path: '/'` with the `lib` sessionStorage hint.)

- [ ] **Step 9: Re-run the full gate set**

Run:
```bash
npm run build
npm run smoke
node scripts/verify-csp.mjs /peptidek/bpc-157 /nootropikumok/semax /teljesitmenyfokozok/testosterone-info
node scripts/visual-diff.mjs --mode compare
```
Expected: ALL green — smoke 7/7 PASS (now hitting path URLs), CSP 0 violations, visual-diff `IDENTICAL (within threshold)`. If visual-diff reports a real DIFF (> 0.1%), STOP and investigate before committing — the UI must be unchanged.

- [ ] **Step 10: Manual deep-link sanity (one command)**

Run `npm run preview` in one shell, then in another:
```bash
curl -sI "http://127.0.0.1:4173/peptidek/bpc-157" | head -1   # expect 200 (SPA index served)
```
And in a browser open `http://127.0.0.1:4173/#entry/peptides/bpc-157` → it must `replaceState` to `/peptidek/bpc-157` and show the BPC-157 detail (legacy redirect works). Stop preview.

- [ ] **Step 11: Commit**

```bash
git add src/main.jsx src/App.jsx src/context/LibraryContext.jsx src/components/library/EntryDetailRoute.jsx src/components/LibraryGallery.jsx src/components/library/cube-nav/LibraryCube.jsx scripts/smoke-render.mjs
git commit -m "feat(seo): convert hash routing to real HU path routing (atomic) + legacy redirect"
```

---

## Task 6: Per-page title + meta description (`src/seo/useDocumentHead.js`)

**Files:**
- Create: `src/seo/useDocumentHead.js`
- Modify: `src/App.jsx` (mount the hook with the active route + entry/library data)

- [ ] **Step 1: Implement `src/seo/useDocumentHead.js`**

```javascript
// Sets document.title + <meta name="description"> per route (HU). Derived from
// existing data only (library name, entry shortDesc) — no new copy. Restores the
// static index.html title/description on home so the landing is unchanged.
import { useEffect } from 'react'

const DEFAULT_TITLE = 'MolekulaX · Farmakológiai edukáció tudományos alapon'
const DEFAULT_DESC = 'MolekulaX · Farmakológiai edukáció. Peptidek, nootropikumok, teljesítményfokozók és gyógyszerek biológiai hatásai tudományos, forrás-igazolt alapon. Edukatív tartalom négy könyvtárban.'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

// route: parsePath() result. libraryName: localized string. entry: { name, shortDesc } or null.
export function useDocumentHead(route, libraryName, entry) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    let title = DEFAULT_TITLE
    let desc = DEFAULT_DESC
    if (route?.kind === 'entry' && entry) {
      const sd = typeof entry.shortDesc === 'string' ? entry.shortDesc : (entry.shortDesc?.hu || '')
      title = `${entry.name} – hatás, adagolás, biztonság | MolekulaX`
      desc = sd || `${entry.name} – ${libraryName || ''} | MolekulaX`
    } else if (route?.kind === 'library' && libraryName) {
      title = `${libraryName} | MolekulaX`
      desc = `${libraryName} – tudományosan dokumentált vegyületek, hatásmechanizmus, adagolás és biztonság, forrásokkal. | MolekulaX`
    }
    document.title = title
    setMeta('description', desc)
  }, [route?.kind, route?.library, route?.id, libraryName, entry])
}
```

- [ ] **Step 2: Mount the hook in `EntryDetailRoute.jsx` (entry pages — has entry + library)**

In `EntryDetailRoute`, after `const peptide = adaptLibraryEntry(...)` is available is too deep; instead call the hook at the top of the component using the already-loaded `entry` + `library`. Add import:
```jsx
import { useDocumentHead } from '../../seo/useDocumentHead'
```
And near the top of `EntryDetailRoute`, after `const { library } = useLibrary()`-style hooks:
```jsx
  useDocumentHead(parsed, library?.name ? (library.name[lang] || library.name.hu) : null, entry)
```
(`entry` is `null` during load → the hook shows the default until the entry arrives, then updates. That is correct + flicker-free for SEO since the prerender in Phase 2 waits for the entry.)

- [ ] **Step 3: Set title on library-landing + home in `App.jsx`**

Because home/library render the landing (not EntryDetailRoute), add a small head effect there. In `App()`, after computing `route`, add:
```jsx
  useDocumentHead(
    route,
    route.kind === 'library' ? libraryNameFor(route.library) : null,
    null,
  )
```
Add the import + a tiny helper above `App`:
```jsx
import { useDocumentHead } from './seo/useDocumentHead'
import { listLibraries } from './data/libraries'

function libraryNameFor(libId) {
  const lib = listLibraries().find((l) => l.id === libId)
  return lib ? (lib.name.hu) : null   // Phase 1 = HU
}
```

- [ ] **Step 4: Build + gates**

Run:
```bash
npm run build
npm run smoke
node scripts/visual-diff.mjs --mode compare
```
Expected: all green (title/meta changes are not pixel-visible; visual-diff still IDENTICAL).

- [ ] **Step 5: Verify titles in the built app (quick Puppeteer check)**

Run:
```bash
node -e "import('puppeteer').then(async({default:p})=>{const b=await p.launch({headless:'new',args:['--no-sandbox']});const{spawn,spawnSync}=await import('node:child_process');const c=spawn('npx',['vite','preview','--port','4395','--host','127.0.0.1'],{stdio:'ignore',shell:true});await new Promise(r=>setTimeout(r,3500));const pg=await b.newPage();await pg.goto('http://127.0.0.1:4395/peptidek/bpc-157',{waitUntil:'networkidle2'});await new Promise(r=>setTimeout(r,1500));console.log('TITLE:',await pg.title());await b.close();if(process.platform==='win32')spawnSync('taskkill',['/pid',String(c.pid),'/T','/F'],{stdio:'ignore'});else c.kill();})"
```
Expected: `TITLE: BPC-157 – hatás, adagolás, biztonság | MolekulaX`.

- [ ] **Step 6: Commit**

```bash
git add src/seo/useDocumentHead.js src/App.jsx src/components/library/EntryDetailRoute.jsx
git commit -m "feat(seo): per-route document title + meta description (HU)"
```

---

## Task 7: Library landing pages render the landing with the library active

The `/peptidek` path already (a) sets `libraryId` via `LibraryContext.readInitialLibraryId` on a cold load and (b) renders the landing (route.kind==='library' is not entry, so `hideLanding` is false). This task makes an **in-app** navigation to a library landing (and the cold-load) scroll to the library section, and ensures the LibraryCube shows the right library.

**Files:**
- Modify: `src/App.jsx` (sync libraryId when route is a library landing)

- [ ] **Step 1: Add a library-landing sync effect in `App.jsx`**

The landing is rendered by components inside `LibraryProvider`, so the sync must live inside the provider tree. Add a tiny component and render it in the tree. In `App.jsx` add:

```jsx
import { useEffect } from 'react'
import { useLibrary } from './context/LibraryContext'

// When the path is a library landing (/peptidek …), make that library active and
// scroll to the section. Lives inside LibraryProvider.
function LibraryLandingSync({ route }) {
  const { libraryId, setLibraryId } = useLibrary()
  useEffect(() => {
    if (route.kind !== 'library') return
    if (route.library !== libraryId) setLibraryId(route.library)
    requestAnimationFrame(() => {
      document.getElementById('library')?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [route.kind, route.library, libraryId, setLibraryId])
  return null
}
```
Render it right after `<BackgroundLayer />` inside the provider:
```jsx
          <BackgroundLayer />
          <LibraryLandingSync route={route} />
          <LanguageSwitcher />
```

- [ ] **Step 2: Build + gates + landing smoke**

Add a library-landing route to `scripts/smoke-render.mjs` ROUTES (so it is gated):
```javascript
  { label: 'library landing — /peptidek', lib: null, path: '/peptidek' },
```
Run:
```bash
npm run build
npm run smoke
node scripts/visual-diff.mjs --mode compare
```
Expected: green; the new `/peptidek` route passes (renders the landing).

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx scripts/smoke-render.mjs
git commit -m "feat(seo): library landing paths activate + scroll to the library section"
```

---

## Task 8: Build-time HU sitemap generator (`scripts/gen-sitemap.mjs`)

**Files:**
- Create: `scripts/gen-sitemap.mjs`, `scripts/test/gen-sitemap.test.mjs`
- Modify: `package.json` (`build` runs it), `public/robots.txt` (already has the Sitemap line — verify)

- [ ] **Step 1: Write the failing test**

Create `scripts/test/gen-sitemap.test.mjs`:

```javascript
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildSitemapUrls } from '../gen-sitemap.mjs'

test('buildSitemapUrls includes home, 4 library landings, and every entry (HU paths)', async () => {
  const urls = await buildSitemapUrls()
  assert.ok(urls.includes('https://molekulax.hu/'))
  assert.ok(urls.includes('https://molekulax.hu/peptidek'))
  assert.ok(urls.includes('https://molekulax.hu/nootropikumok'))
  assert.ok(urls.includes('https://molekulax.hu/teljesitmenyfokozok'))
  assert.ok(urls.includes('https://molekulax.hu/gyogyszerek'))
  assert.ok(urls.includes('https://molekulax.hu/peptidek/bpc-157'))
  // ~191 entries + 4 landings + home, no duplicates
  assert.equal(urls.length, new Set(urls).size)
  assert.ok(urls.length > 180, `expected >180 urls, got ${urls.length}`)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL with `Cannot find module '../gen-sitemap.mjs'`.

- [ ] **Step 3: Implement `scripts/gen-sitemap.mjs`**

```javascript
// Build-time HU sitemap generator. Enumerates LIBRARY_ENTRY_META from each library
// (synchronous source, no browser) and writes public/sitemap.xml. Phase 1 = HU only.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
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

// `node scripts/gen-sitemap.mjs` writes public/sitemap.xml; lastmod from CLI or today.
if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`) {
  const lastmod = process.argv[2] || new Date().toISOString().slice(0, 10)
  const urls = await buildSitemapUrls()
  writeFileSync(resolve(repoRoot, 'public/sitemap.xml'), toXml(urls, lastmod))
  console.log(`[sitemap] wrote ${urls.length} URLs to public/sitemap.xml (lastmod ${lastmod})`)
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS (`buildSitemapUrls` returns >180 unique URLs).

- [ ] **Step 5: Wire into the build + generate once**

In `package.json`, change the `build` script:
```json
    "build": "node scripts/validate-library-meta.mjs && node scripts/gen-sitemap.mjs && vite build",
```
Run `node scripts/gen-sitemap.mjs` once to regenerate `public/sitemap.xml`, then `npm run build`. Confirm `dist/sitemap.xml` contains the entry URLs:
```bash
node scripts/gen-sitemap.mjs && npm run build && grep -c "<loc>" dist/sitemap.xml
```
Expected: count > 180.

- [ ] **Step 6: Verify `public/robots.txt` references the sitemap**

It already contains `Sitemap: https://molekulax.hu/sitemap.xml` — confirm with `grep -i sitemap public/robots.txt`. No change needed if present.

- [ ] **Step 7: Commit**

```bash
git add scripts/gen-sitemap.mjs scripts/test/gen-sitemap.test.mjs package.json public/sitemap.xml
git commit -m "feat(seo): build-time HU sitemap generator wired into build"
```

---

## Task 9: Full-gate verification, deploy, post-deploy live check

**Files:** none (verification + deploy)

- [ ] **Step 1: Run the complete Phase 1 gate set**

```bash
npm test
npm run verify:consistency
npm run build
npm run smoke
node scripts/verify-csp.mjs /peptidek/bpc-157 /nootropikumok/semax /teljesitmenyfokozok/testosterone-info /gyogyszerek/tadalafil /peptidek
node scripts/visual-diff.mjs --mode compare
```
Expected: every command exits 0. Unit tests green, smoke 7+/7+ PASS, CSP 0 violations, visual-diff `IDENTICAL (within threshold)`. If visual-diff is not identical, do NOT deploy.

- [ ] **Step 2: Push to master (auto-deploys to Vercel)**

```bash
git push origin master
```

- [ ] **Step 3: Verify the live site (after ~1 min deploy)**

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://molekulax.hu/peptidek/bpc-157   # expect 200
curl -sS https://molekulax.hu/sitemap.xml | grep -c "<loc>"                        # expect >180
curl -sSI https://molekulax.hu/ | grep -i content-security-policy                  # headers still present
```
Then load `https://molekulax.hu/peptidek/bpc-157` in a browser: confirm the BPC-157 detail renders, the URL stays a real path, and `https://molekulax.hu/#entry/peptides/bpc-157` redirects to it. Confirm the Vercel response for `/peptidek/bpc-157` is 200 (the SPA index served by the rewrite) — NOT a 404.

- [ ] **Step 4: Submit the sitemap in Google Search Console**

In GSC for `molekulax.hu` → Sitemaps → add `https://molekulax.hu/sitemap.xml`. (Manual; out of code scope. If GSC is not yet set up for molekulax.hu, set it up first — DNS/HTML-tag verification.)

- [ ] **Step 5: Tag the phase**

```bash
git tag seo-phase1-shipped
git push origin seo-phase1-shipped
```

---

## Self-Review (completed by plan author)

**Spec coverage:** Phase 1 of the spec = path routing (Tasks 4–5) + back-compat redirect (Task 2 + 5.1) + per-page meta (Task 6) + library landings (Task 7) + HU sitemap (Task 8), gated by build/smoke/CSP/screenshot-diff/link-check (Tasks 3, 9). All Phase-1 spec items map to a task. Prerender (Phase 2), JSON-LD/canonical/hreflang, and EN/PL (Phase 3) are explicitly excluded.

**Placeholder scan:** No TBD/TODO; every code step contains complete code. The PL slug words in `LIB_SLUGS` are defined but unused in Phase 1 (parsePath is HU-only) — intentional forward-compat, not a placeholder.

**Type/name consistency:** `parsePath` returns `{kind,lang,library,id,variantId}` and is consumed identically in App, LibraryContext, EntryDetailRoute, LibraryCube. `entryPath(libId,id,variantId?,lang?)` / `libraryPath(libId,lang?)` / `homePath(lang?)` signatures are used consistently. `navigate(to,{replace})` + `useLocationPath()` used consistently. `EntryDetailRoute` prop renamed `hash` → `route` and the App mount updated to match.

**Known integration risk flagged in-plan:** Task 5 Step 7 will fail smoke until Step 8 updates the route list — sequenced intentionally so the conversion + its gate land in one commit (Step 11).
