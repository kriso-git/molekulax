# SEO Tier-1 Phase 3 — EN/PL Language URLs + hreflang — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all 196 routes crawlable in three languages — HU at the root, EN under `/en/`, PL under `/pl/` — with the rendered language driven by the URL, per-language `<title>`/meta, `hreflang` alternates, a trilingual sitemap, and a trilingual prerender (~588 static pages), WITHOUT breaking the site or changing any visible HU content.

**Architecture:** The scaffolding already exists in `src/seo/urls.js` (`LIB_SLUGS` with `{hu,en,pl}`, `LANG_PREFIX`, and `homePath/libraryPath/entryPath(lang)` helpers). Phase 3 (a) teaches `parsePath()` to recognise `/en` and `/pl` prefixes and return the right `lang`; (b) makes the app derive the active language FROM the URL (so a prerendered `/en/...` page renders EN, not HU), with the language switcher navigating to the translated URL; (c) localises `<title>`/description per language; (d) emits `hreflang` + `<html lang>` + localized JSON-LD at build time; (e) enumerates all three languages in the sitemap and the prerender. Entry bodies are already split per language (`entries/{hu,en,pl}/<id>.js`, loaded by `loadEntry(id, lang)`), and all 191 entries are 100% translated in all three languages — so no content work is needed.

**Tech stack:** React 19, Vite 6, the existing custom History-API path router (`src/router/location.js`), Puppeteer + `@sparticuz/chromium` build-time prerender (`scripts/prerender.mjs`), `node:test` unit tests in `scripts/test/`.

**Final slugs (locked, validated):** peptides→`peptydy`, nootropics→`nootropiki`, performance→`wspomaganie`, pharmaceutical→`leki` (PL); `…/peptides|nootropics|performance|pharmaceuticals` (EN). Already the values in `LIB_SLUGS` — do NOT change them (changing an indexed slug = 404s + re-index).

**Hard constraints:** must not break the live site; HU pages must stay pixel-identical (the `visual-diff` HU baseline must stay 0.000%); EN/PL must render real translated content (not HU fallback).

---

### Task 1: `parsePath()` recognises `/en` and `/pl` prefixes

**Files:**
- Modify: `src/seo/urls.js` (the `parsePath` function, lines 39-52)
- Test: `scripts/test/seo-urls.test.mjs`

- [ ] **Step 1: Write failing tests** — append to `scripts/test/seo-urls.test.mjs`:

```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parsePath } from '../../src/seo/urls.js'

test('parsePath: EN/PL prefixes resolve lang + library + id', () => {
  assert.deepEqual(parsePath('/en/peptides/bpc-157'),
    { kind: 'entry', lang: 'en', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/pl/peptydy/bpc-157'),
    { kind: 'entry', lang: 'pl', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/en/performance'),
    { kind: 'library', lang: 'en', library: 'performance' })
  assert.deepEqual(parsePath('/pl/wspomaganie'),
    { kind: 'library', lang: 'pl', library: 'performance' })
  assert.deepEqual(parsePath('/en'), { kind: 'home', lang: 'en' })
  assert.deepEqual(parsePath('/pl/'), { kind: 'home', lang: 'pl' })
  // HU unchanged (no prefix)
  assert.deepEqual(parsePath('/peptidek/bpc-157'),
    { kind: 'entry', lang: 'hu', library: 'peptides', id: 'bpc-157', variantId: null })
  assert.deepEqual(parsePath('/'), { kind: 'home', lang: 'hu' })
  // a HU slug under /en is NOT valid (slug must match the lang)
  assert.deepEqual(parsePath('/en/peptidek/bpc-157'), { kind: 'unknown' })
  // variant
  assert.deepEqual(parsePath('/en/peptides/cjc-1295/blend'),
    { kind: 'entry', lang: 'en', library: 'peptides', id: 'cjc-1295', variantId: 'blend' })
})
```

- [ ] **Step 2: Run, verify it fails**

Run: `node --test scripts/test/seo-urls.test.mjs`
Expected: FAIL (current `parsePath` returns `{kind:'unknown'}` for `/en/...`, `lang:'hu'` hardcoded).

- [ ] **Step 3: Implement** — replace `parsePath` in `src/seo/urls.js`:

```js
// Parse HU (no prefix), /en, and /pl paths. Returns one of:
//   { kind:'home', lang } | { kind:'library', lang, library }
//   { kind:'entry', lang, library, id, variantId } | { kind:'unknown' }
export function parsePath(pathname) {
  let clean = (pathname || '/').replace(/\/+$/, '') || '/'
  // Detect a language prefix; HU has none (lives at the root).
  let lang = 'hu'
  const m = clean.match(/^\/(en|pl)(\/|$)/)
  if (m) { lang = m[1]; clean = clean.slice(m[1].length + 1) || '/' }
  if (clean === '/') return { kind: 'home', lang }
  const parts = clean.replace(/^\//, '').split('/')
  const library = SLUG_TO_LIB[lang][parts[0]]
  if (!library) return { kind: 'unknown' }
  if (parts.length === 1) return { kind: 'library', lang, library }
  if (parts.length === 2) return { kind: 'entry', lang, library, id: parts[1], variantId: null }
  if (parts.length === 3) return { kind: 'entry', lang, library, id: parts[1], variantId: parts[2] }
  return { kind: 'unknown' }
}
```

- [ ] **Step 4: Run tests, verify pass**

Run: `node --test scripts/test/seo-urls.test.mjs`
Expected: PASS (new + any existing tests).

- [ ] **Step 5: Commit**

```bash
git add src/seo/urls.js scripts/test/seo-urls.test.mjs
git commit -m "feat(seo): parsePath recognises /en and /pl language prefixes"
```

---

### Task 2: Active language derives from the URL

**Files:**
- Modify: `src/i18n/LanguageContext.jsx` (`detectInitial`, lines 14-23)
- Modify: `src/App.jsx` (add `LanguageRouteSync` inside `LanguageProvider`)

**Why:** the prerenderer loads `/en/...` in a fresh browser (empty `localStorage`), so the app MUST read the language from the path or every prerendered page renders HU. Reading the URL in `detectInitial` also removes the HU→lang flash on cold loads.

- [ ] **Step 1: URL-first language detection** — replace `detectInitial` in `src/i18n/LanguageContext.jsx`:

```js
function detectInitial() {
  // 1) URL prefix wins (so a /en or /pl deep-link / prerender renders that language
  //    with no flash). 2) else an explicit prior choice. 3) else Hungarian.
  if (typeof window === 'undefined') return 'hu'
  const m = window.location.pathname.match(/^\/(en|pl)(\/|$)/)
  if (m) return m[1]
  try {
    const stored = localStorage.getItem('molekulax-lang')
    if (stored && SUPPORTED.includes(stored)) return stored
  } catch {}
  return 'hu'
}
```

- [ ] **Step 2: Keep lang synced to the URL on client navigation** — in `src/App.jsx`, add near `LibraryLandingSync` (it must live INSIDE `<LanguageProvider>`):

```js
// Keep the active language synced to the URL prefix (URL is the source of truth, like
// LibraryLandingSync). Keyed ONLY on route.lang: the switcher changes the language by
// NAVIGATING to the translated URL, so route.lang is what drives setLang; depending on
// `lang` here would fight that. setLang(same) is a no-op.
function LanguageRouteSync({ lang }) {
  const { setLang } = useLang()
  useEffect(() => { setLang(lang) }, [lang, setLang])
  return null
}
```

Add the import `import { useLang } from './i18n/LanguageContext'` (alongside existing imports) and render it inside `<LanguageProvider>`, next to `<LanguageLandingSync>`:

```jsx
<LanguageProvider>
  <LibraryProvider>
    ...
    <LanguageRouteSync lang={route.lang} />
    <LibraryLandingSync route={route} />
    ...
```

- [ ] **Step 3: Verify the dev server** — `npm run dev`, open `/en/peptides/bpc-157` → English content; `/pl/peptydy/bpc-157` → Polish; `/peptidek/bpc-157` → Hungarian; HU `/` unchanged. (Manual check; no unit test — this is provider/DOM wiring covered by smoke in Task 8.)

- [ ] **Step 4: Commit**

```bash
git add src/i18n/LanguageContext.jsx src/App.jsx
git commit -m "feat(seo): derive active language from the URL prefix (URL is source of truth)"
```

---

### Task 3: Language switcher navigates to the translated URL

**Files:**
- Modify: `src/seo/urls.js` (add `translatePath` helper)
- Modify: `src/components/LanguageSwitcher.jsx`
- Test: `scripts/test/seo-urls.test.mjs`

- [ ] **Step 1: Failing test for `translatePath`** — append to `scripts/test/seo-urls.test.mjs`:

```js
import { translatePath } from '../../src/seo/urls.js'

test('translatePath: same logical page in another language', () => {
  assert.equal(translatePath({ kind: 'entry', lang: 'hu', library: 'peptides', id: 'bpc-157', variantId: null }, 'en'),
    '/en/peptides/bpc-157')
  assert.equal(translatePath({ kind: 'library', lang: 'en', library: 'performance' }, 'pl'),
    '/pl/wspomaganie')
  assert.equal(translatePath({ kind: 'home', lang: 'en' }, 'hu'), '/')
  assert.equal(translatePath({ kind: 'entry', lang: 'hu', library: 'peptides', id: 'cjc-1295', variantId: 'blend' }, 'pl'),
    '/pl/peptydy/cjc-1295/blend')
  // unknown route -> that language's home
  assert.equal(translatePath({ kind: 'unknown' }, 'en'), '/en')
})
```

- [ ] **Step 2: Run, verify fail**

Run: `node --test scripts/test/seo-urls.test.mjs`
Expected: FAIL (`translatePath` is not defined).

- [ ] **Step 3: Implement `translatePath`** — add to `src/seo/urls.js`:

```js
// Map a parsed route to the SAME logical page in another language.
export function translatePath(route, lang) {
  if (!route || route.kind === 'unknown') return homePath(lang)
  if (route.kind === 'home') return homePath(lang)
  if (route.kind === 'library') return libraryPath(route.library, lang)
  return entryPath(route.library, route.id, route.variantId, lang)
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `node --test scripts/test/seo-urls.test.mjs`
Expected: PASS.

- [ ] **Step 5: Switcher navigates** — in `src/components/LanguageSwitcher.jsx`, replace the `setLang(code)` onClick with navigation to the translated URL (the URL change drives `LanguageRouteSync` → `setLang`):

```js
import { navigate, useLocationPath } from '../router/location'
import { parsePath, translatePath } from '../seo/urls'
// ... inside the component:
const path = useLocationPath()
// ... in the option button onClick:
onClick={() => { navigate(translatePath(parsePath(path), code)); setOpen(false) }}
```

Keep importing `useLang` only for the current `lang` display (the active checkmark). Remove the direct `setLang` call from the option click (navigation now drives it). `localStorage` is still written by `LanguageProvider`'s effect when `setLang` runs.

- [ ] **Step 6: Verify** — `npm run dev`: on `/peptidek/bpc-157`, switching to EN navigates to `/en/peptides/bpc-157` and shows English; PL → `/pl/peptydy/bpc-157`. On `/` switching to EN → `/en`. Back/forward preserve language.

- [ ] **Step 7: Commit**

```bash
git add src/seo/urls.js src/components/LanguageSwitcher.jsx scripts/test/seo-urls.test.mjs
git commit -m "feat(seo): language switcher navigates to the translated URL"
```

---

### Task 4: Per-language document title + description

**Files:**
- Modify: `src/seo/useDocumentHead.js`
- Modify: `src/App.jsx` (pass `route.lang`) and `src/components/library/EntryDetailRoute.jsx` (pass lang if it calls useDocumentHead)

- [ ] **Step 1: Localise the head templates** — rewrite `src/seo/useDocumentHead.js` to take `lang` and use per-language templates:

```js
import { useEffect } from 'react'

const T = {
  hu: {
    defTitle: 'MolekulaX · Farmakológiai edukáció tudományos alapon',
    defDesc: 'MolekulaX · Farmakológiai edukáció. Peptidek, nootropikumok, teljesítményfokozók és gyógyszerek biológiai hatásai tudományos, forrás-igazolt alapon. Edukatív tartalom négy könyvtárban.',
    entrySuffix: (n) => `${n} – hatás, adagolás, biztonság | MolekulaX`,
    libTitle: (n) => `${n} | MolekulaX`,
    libDesc: (n) => `${n} – tudományosan dokumentált vegyületek, hatásmechanizmus, adagolás és biztonság, forrásokkal. | MolekulaX`,
    entryFallbackDesc: (n) => `${n} | MolekulaX`,
  },
  en: {
    defTitle: 'MolekulaX · Pharmacology education on a scientific basis',
    defDesc: 'MolekulaX · Pharmacology education. The biological effects of peptides, nootropics, performance enhancers and pharmaceuticals on a scientific, source-verified basis. Educational content across four libraries.',
    entrySuffix: (n) => `${n} – effects, dosage, safety | MolekulaX`,
    libTitle: (n) => `${n} | MolekulaX`,
    libDesc: (n) => `${n} – scientifically documented compounds: mechanism of action, dosage and safety, with sources. | MolekulaX`,
    entryFallbackDesc: (n) => `${n} | MolekulaX`,
  },
  pl: {
    defTitle: 'MolekulaX · Edukacja farmakologiczna na podstawach naukowych',
    defDesc: 'MolekulaX · Edukacja farmakologiczna. Biologiczne działanie peptydów, nootropików, środków wspomagających i leków na naukowych, potwierdzonych źródłowo podstawach. Treści edukacyjne w czterech bibliotekach.',
    entrySuffix: (n) => `${n} – działanie, dawkowanie, bezpieczeństwo | MolekulaX`,
    libTitle: (n) => `${n} | MolekulaX`,
    libDesc: (n) => `${n} – udokumentowane naukowo związki: mechanizm działania, dawkowanie i bezpieczeństwo, ze źródłami. | MolekulaX`,
    entryFallbackDesc: (n) => `${n} | MolekulaX`,
  },
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

export function useDocumentHead(route, libraryName, entry) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    const t = T[route?.lang] || T.hu
    if (route?.kind === 'entry') {
      if (!entry) return
      const sd = typeof entry.shortDesc === 'string' ? entry.shortDesc : (entry.shortDesc?.[route.lang] || entry.shortDesc?.hu || '')
      document.title = t.entrySuffix(entry.name)
      setMeta('description', sd || t.entryFallbackDesc(entry.name))
      return
    }
    if (route?.kind === 'library' && libraryName) {
      document.title = t.libTitle(libraryName)
      setMeta('description', t.libDesc(libraryName))
      return
    }
    document.title = t.defTitle
    setMeta('description', t.defDesc)
  }, [route?.kind, route?.library, route?.id, route?.lang, libraryName, entry])
}
```

- [ ] **Step 2: Pass lang from callers** — confirm `src/App.jsx` already passes the full `route` (it does: `useDocumentHead(route, …)`), and that `EntryDetailRoute` passes the loaded entry + the same `route`. The `libraryName` passed by App should be the localized name (`libraryNameFor` should already localize by lang via the entry data; if `libraryNameFor` is HU-only, make it take `route.lang`). Verify `libraryNameFor` in App localizes — if not, localize it (library names are `{hu,en,pl}` triplets per `LanguageContext` note).

- [ ] **Step 3: Verify** — `npm run dev`: tab title on `/en/peptides/bpc-157` reads `BPC-157 – effects, dosage, safety | MolekulaX`; `/pl/...` reads `… – działanie, dawkowanie, bezpieczeństwo …`; HU unchanged.

- [ ] **Step 4: Commit**

```bash
git add src/seo/useDocumentHead.js src/App.jsx src/components/library/EntryDetailRoute.jsx
git commit -m "feat(seo): per-language document title + description"
```

---

### Task 5: Trilingual sitemap with hreflang alternates

**Files:**
- Modify: `scripts/gen-sitemap.mjs`
- Test: `scripts/test/gen-sitemap.test.mjs`

- [ ] **Step 1: Failing test** — update `scripts/test/gen-sitemap.test.mjs` to expect 3× URLs + alternates:

```js
// buildSitemapUrls() now returns one entry per (logical page × language) with the
// three hreflang alternates. Expect 3 * (1 home + 4 landings + 191 entries) = 588.
test('sitemap: trilingual, 588 URLs, each with 3 hreflang alternates + x-default', async () => {
  const groups = await buildSitemapGroups()
  assert.equal(groups.length, 196)               // logical pages
  const flat = groups.flatMap(g => g.urls)
  assert.equal(flat.length, 588)                 // 196 * 3
  const home = groups.find(g => g.urls.some(u => u.loc === 'https://molekulax.hu/'))
  assert.ok(home.alternates.hu === 'https://molekulax.hu/')
  assert.ok(home.alternates.en === 'https://molekulax.hu/en')
  assert.ok(home.alternates.pl === 'https://molekulax.hu/pl')
  assert.ok(home.alternates['x-default'] === 'https://molekulax.hu/')
})
```

- [ ] **Step 2: Run, verify fail**

Run: `node --test scripts/test/gen-sitemap.test.mjs`
Expected: FAIL (`buildSitemapGroups` not defined; current code is HU-only).

- [ ] **Step 3: Implement** — rewrite `scripts/gen-sitemap.mjs` to enumerate per language and emit hreflang:

```js
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { LIB_SLUGS } from '../src/seo/urls.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const ORIGIN = 'https://molekulax.hu'
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const LANGS = ['hu', 'en', 'pl']
const PREFIX = { hu: '', en: '/en', pl: '/pl' }

const homeUrl = (lang) => `${ORIGIN}${PREFIX[lang] || ''}` + (lang === 'hu' ? '/' : '')
const libUrl = (lang, libId) => `${ORIGIN}${PREFIX[lang]}/${LIB_SLUGS[libId][lang]}`
const entryUrl = (lang, libId, id) => `${ORIGIN}${PREFIX[lang]}/${LIB_SLUGS[libId][lang]}/${id}`

// A "group" = one logical page in all 3 languages + its hreflang map.
export async function buildSitemapGroups() {
  const groups = []
  const mk = (byLang) => ({
    urls: LANGS.map((l) => ({ loc: byLang(l), lang: l })),
    alternates: { ...Object.fromEntries(LANGS.map((l) => [l, byLang(l)])), 'x-default': byLang('hu') },
  })
  groups.push(mk((l) => homeUrl(l)))
  for (const libId of LIBS) {
    groups.push(mk((l) => libUrl(l, libId)))
    const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    if (!Array.isArray(mod.LIBRARY_ENTRY_META)) throw new Error(`${libId}: LIBRARY_ENTRY_META missing`)
    for (const e of mod.LIBRARY_ENTRY_META) groups.push(mk((l) => entryUrl(l, libId, e.id)))
  }
  return groups
}

function toXml(groups, lastmod) {
  const altLinks = (alts) => Object.entries(alts)
    .map(([hl, href]) => `      <xhtml:link rel="alternate" hreflang="${hl}" href="${href}"/>`).join('\n')
  const body = groups.flatMap((g) => g.urls.map((u) => {
    const priority = u.loc === homeUrl(u.lang) ? '1.0' : (u.loc.replace(ORIGIN, '').split('/').filter(Boolean).length >= 3 ? '0.8' : '0.6')
    return `  <url>\n    <loc>${u.loc}</loc>\n${altLinks(g.alternates)}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`
}

const _argv1Url = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : null
if (_argv1Url && import.meta.url === _argv1Url) {
  const lastmod = process.argv[2] || new Date().toISOString().slice(0, 10)
  const groups = await buildSitemapGroups()
  writeFileSync(resolve(repoRoot, 'public/sitemap.xml'), toXml(groups, lastmod))
  const n = groups.reduce((a, g) => a + g.urls.length, 0)
  console.log(`[sitemap] wrote ${n} URLs (${groups.length} pages x ${LANGS.length} langs) to public/sitemap.xml (lastmod ${lastmod})`)
}
```

Note: home URL for HU is `…/` and for EN/PL is `…/en` (no trailing slash) to match `parsePath`/`homePath`. Keep `homePath('en')` = `/en` consistent. If any existing test imported `buildSitemapUrls`, keep a thin `buildSitemapUrls` export returning the flat loc list for back-compat, or update the test.

- [ ] **Step 4: Run test, verify pass**

Run: `node --test scripts/test/gen-sitemap.test.mjs`
Expected: PASS. Then `node scripts/gen-sitemap.mjs` → "wrote 588 URLs".

- [ ] **Step 5: Commit**

```bash
git add scripts/gen-sitemap.mjs scripts/test/gen-sitemap.test.mjs public/sitemap.xml
git commit -m "feat(seo): trilingual sitemap (588 URLs) with hreflang alternates"
```

---

### Task 6: JSON-LD gets `inLanguage`

**Files:**
- Modify: `scripts/seo-jsonld.mjs`
- Test: `scripts/test/seo-jsonld.test.mjs`

- [ ] **Step 1: Failing test** — add to `scripts/test/seo-jsonld.test.mjs`:

```js
test('entryJsonLd: inLanguage follows the lang argument', () => {
  const en = entryJsonLd({ name: 'BPC-157', desc: 'x', url: 'https://molekulax.hu/en/peptides/bpc-157', libraryName: 'Peptides', lang: 'en' })
  assert.equal(en.inLanguage, 'en')
  assert.equal(en.about['@type'], 'Drug')
  const pl = entryJsonLd({ name: 'BPC-157', desc: 'x', url: 'https://molekulax.hu/pl/peptydy/bpc-157', libraryName: 'Peptydy', lang: 'pl' })
  assert.equal(pl.inLanguage, 'pl')
  // default stays hu
  const hu = entryJsonLd({ name: 'BPC-157', desc: 'x', url: 'https://molekulax.hu/peptidek/bpc-157', libraryName: 'Peptidek' })
  assert.equal(hu.inLanguage, 'hu')
})
```

- [ ] **Step 2: Run, verify fail** — `node --test scripts/test/seo-jsonld.test.mjs` → FAIL (lang ignored; currently hardcoded `inLanguage:'hu'`).

- [ ] **Step 3: Implement** — in `scripts/seo-jsonld.mjs`, add `lang = 'hu'` to the `entryJsonLd` params and set `inLanguage: lang` (and on any nested `isPartOf`/CollectionPage if it carries inLanguage). Leave everything else identical.

- [ ] **Step 4: Run test, verify pass** — `node --test scripts/test/seo-jsonld.test.mjs` → PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/seo-jsonld.mjs scripts/test/seo-jsonld.test.mjs
git commit -m "feat(seo): JSON-LD inLanguage follows the route language"
```

---

### Task 7: Prerender all three languages + per-language canonical/hreflang/`<html lang>`

**Files:**
- Modify: `scripts/prerender.mjs` (`buildRoutes`, `injectHead`, `renderOne`, `CONCURRENCY`)

- [ ] **Step 1: Enumerate routes per language** — rewrite `buildRoutes()` in `scripts/prerender.mjs` to produce HU+EN+PL, each route carrying `lang`, the localized `diskPath`, and the hreflang alternate map:

```js
const LANGS = ['hu', 'en', 'pl']
const PREFIX = { hu: '', en: '/en', pl: '/pl' }
const homeDisk = { hu: 'index.html', en: 'en/index.html', pl: 'pl/index.html' }

async function buildRoutes() {
  // First gather the logical pages (lib + entry list), then expand × languages so the
  // per-page hreflang map can reference all three language URLs.
  const libs = []
  for (const libId of LIBS) {
    const mod = await import(`file://${join(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    libs.push({ libId, entries: mod.LIBRARY_ENTRY_META })
  }
  const routes = []
  const alts = (byLang) => Object.fromEntries([...LANGS.map((l) => [l, ORIGIN + byLang(l)]), ['x-default', ORIGIN + byLang('hu')]])

  // home
  const homeUrl = (l) => (PREFIX[l] || '') + (l === 'hu' ? '/' : '')
  for (const l of LANGS) routes.push({ lang: l, urlPath: homeUrl(l), diskPath: homeDisk[l], name: null, libraryName: null, hreflang: alts(homeUrl) })

  for (const { libId, entries } of libs) {
    const libUrl = (l) => `${PREFIX[l]}/${LIB_SLUGS[libId][l]}`
    for (const l of LANGS) {
      routes.push({ lang: l, urlPath: libUrl(l), diskPath: join(PREFIX[l].replace('/', ''), LIB_SLUGS[libId][l], 'index.html'), name: null, libraryName: null, hreflang: alts(libUrl) })
    }
    for (const e of entries) {
      const desc = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
      const entUrl = (l) => `${PREFIX[l]}/${LIB_SLUGS[libId][l]}/${e.id}`
      for (const l of LANGS) {
        routes.push({ lang: l, urlPath: entUrl(l), diskPath: join(PREFIX[l].replace('/', ''), LIB_SLUGS[libId][l], e.id, 'index.html'), name: e.name, libraryName: null, desc, isEntry: true, hreflang: alts(entUrl) })
      }
    }
  }
  return routes
}
```

Note: `join('', 'peptidek', 'index.html')` → `peptidek/index.html` (HU, `PREFIX.hu.replace('/','')===''`); `join('en', 'peptides', 'index.html')` → `en/peptides/index.html`. Verify on Windows (`join` yields backslashes; `mkdirSync(dirname(...))` already handles it).

- [ ] **Step 2: localized libraryName per route** — in `main()`, where `r.libraryName` is currently set from `libName[lib]` (HU), set it from the route's lang: `libName[lib][r.lang]` if `listLibraries()` returns `{hu,en,pl}` names (it does — names are triplets). Build `libName` as `Object.fromEntries(listLibraries().map(l => [l.id, l.name]))` (the full triplet) and index `libName[lib][r.lang] ?? libName[lib].hu`.

- [ ] **Step 3: inject hreflang + `<html lang>` + per-lang canonical/JSON-LD** — extend `injectHead` and `renderOne`:

```js
function injectHead(html, { lang, title, desc, canonical, hreflang, jsonld }) {
  let out = html
  out = out.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeAttr(desc)}">`)
  out = out.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}">`)
  out = out.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}">`)
  out = out.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeAttr(title)}">`)
  const alt = Object.entries(hreflang || {}).map(([hl, href]) => `<link rel="alternate" hreflang="${hl}" href="${href}">`).join('')
  out = out.replace('</head>', `${alt}${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}</head>`)
  return out
}
```

In `renderOne`, pass `lang: route.lang` and `hreflang: route.hreflang` to `injectHead`, and pass `lang: route.lang` to `entryJsonLd({ … , lang: route.lang })`. The entry-name guard is unchanged (the compound name is language-agnostic).

- [ ] **Step 4: raise concurrency for 588 pages** — `const CONCURRENCY = process.env.VERCEL ? 16 : 3` (30 vCPU / 60 GB comfortably runs 16 single-process browsers; ~16 × ~0.7 GB ≈ 11 GB << 60 GB).

- [ ] **Step 5: run the prerender** — `npm run build:prerender`
Expected: "wrote 588/588 static pages, 0 failed". Spot-check `dist/en/peptides/bpc-157/index.html` (English `#root` + `<html lang="en">` + canonical `…/en/peptides/bpc-157` + 4 hreflang links + JSON-LD `inLanguage:"en"`) and `dist/pl/wspomaganie/index.html`.

- [ ] **Step 6: Commit**

```bash
git add scripts/prerender.mjs
git commit -m "feat(seo): prerender all three languages with per-lang canonical, hreflang, html lang"
```

---

### Task 8: Content gate + smoke for EN/PL; full gate run

**Files:**
- Modify: `scripts/check-prerender.mjs` (assert EN/PL render real translated content)
- Modify: `scripts/smoke-render.mjs` (add one EN + one PL route)

- [ ] **Step 1: EN/PL content assertions** — in `scripts/check-prerender.mjs`, add checks that prove the LANGUAGE (not just the name) rendered, using language-distinct fragments from the bpc-157 bodies:

```js
// EN/PL prove the URL drove the language (HU fallback would fail these):
{ path: '/en/peptides/bpc-157', needle: 'BPC-157', langNeedle: 'tissue regeneration' },
{ path: '/pl/peptydy/bpc-157', needle: 'BPC-157', langNeedle: 'regeneracja tkanek' },
```

Assert the JS-disabled `#root` innerText contains BOTH `needle` and `langNeedle` for those routes. Keep the existing HU assertions.

- [ ] **Step 2: smoke EN/PL** — in `scripts/smoke-render.mjs`, add `/en/peptides/bpc-157` and `/pl/peptydy/bpc-157` (or a library landing) to the route list with the appropriate expected marker, so a JS render regression in either language is caught.

- [ ] **Step 3: full gate run** —

```bash
npm run build:prerender   # expect 588/588
node scripts/check-prerender.mjs        # HU + EN + PL CLEAN
npm run smoke                            # ALL ROUTES PASS (incl EN/PL)
node scripts/visual-diff.mjs --mode compare   # HU baseline still 0.000% (proves HU unchanged)
node scripts/verify-csp.mjs              # enforce-safe
```

Expected: all green. The visual-diff only covers the HU baseline set; EN/PL are additive (new pages, no baseline) — HU staying 0.000% is the "didn't break HU" proof.

- [ ] **Step 4: Commit**

```bash
git add scripts/check-prerender.mjs scripts/smoke-render.mjs
git commit -m "test(seo): content gate + smoke cover EN/PL render"
```

---

### Task 9: Deploy + live-verify + tag

- [ ] **Step 1: push** — `git push origin master`. Vercel Pro Turbo builds (`build:prerender`); the 588-page prerender at CONCURRENCY 16 should finish within a few minutes of prerender time (~10-12 min total build with npm install + vite).

- [ ] **Step 2: live-verify raw HTML (no JS)** per language:

```bash
# EN: English content + canonical + html lang + hreflang
curl -sS https://molekulax.hu/en/peptides/bpc-157 | grep -c 'tissue regeneration'   # >0
curl -sS https://molekulax.hu/en/peptides/bpc-157 | grep -c 'hreflang="pl"'         # >0
# PL: Polish content
curl -sS https://molekulax.hu/pl/peptydy/bpc-157 | grep -c 'regeneracja tkanek'     # >0
# HU unchanged
curl -sS https://molekulax.hu/peptidek/bpc-157 | grep -c 'BPC-157'                  # >0
```

Plus a live CSP/console check (puppeteer) on one EN + one PL URL (0 violations). If the build fails, the prior good Phase-2 deploy stays live (HU still served).

- [ ] **Step 3: sitemap live** — `curl -sS https://molekulax.hu/sitemap.xml | grep -c '<loc>'` → 588. Re-submit in Google Search Console (it already has the URL; it re-crawls).

- [ ] **Step 4: tag + memory**

```bash
git tag -a seo-phase3-shipped -m "SEO Tier-1 Phase 3: EN/PL language URLs + hreflang live. ~588 trilingual prerendered pages."
git push origin seo-phase3-shipped
```

Update `project_molekulax_seo.md` (Phase 3 LIVE) + `MEMORY.md`.

---

## Self-review notes
- **Spec coverage:** §"Language detection" (URL-from-path, switcher navigates) → Tasks 2-3; §"Per-page metadata" + hreflang → Tasks 4, 7; §"Prerender ×3" → Task 7; §"sitemap + hreflang" → Task 5; §"validate PL slugs" → done pre-plan (locked). All Phase-3 spec bullets covered.
- **Type consistency:** `parsePath` returns `{kind, lang, library, id, variantId}` everywhere; `translatePath(route, lang)`, `entryJsonLd({…, lang})`, `useDocumentHead(route,…)` all thread `lang`. Sitemap `buildSitemapGroups()` and prerender `buildRoutes()` share the `PREFIX`/`LIB_SLUGS` URL shape.
- **Risk — HU must not change:** every HU-facing template default in Task 4 reproduces the current HU strings verbatim; the visual-diff HU baseline gate (Task 8) is the proof. `parsePath('/…')` HU branch is unchanged behaviour (lang defaults to 'hu').
- **Risk — EN/PL must be real content:** Task 8's `langNeedle` (English "tissue regeneration" / Polish "regeneracja tkanek") fails if the URL didn't drive the language — the gate that proves Task 2 works on the real @sparticuz prerender path.
- **Build time:** 588 pages at CONCURRENCY 16 on Turbo; if the build runs long, the retry pass + `done<routes.length` gate still guarantee correctness, and a failed build never breaks the live site.
