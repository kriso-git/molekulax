# Comparison Route Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Ship trilingual, prerendered compound-comparison pages (`/osszehasonlitas` index + 3 detail pages) derived from existing entry data.

**Architecture:** A curated `COMPARISONS` registry in `src/seo/urls.js` drives routing (`parsePath` gains `comparison-index` + `comparison` kinds), prerender, and sitemap — exactly like the existing `STATIC_PAGES` pattern but with a 2-segment base/slug path. A pure `buildComparison(members, lang)` helper derives a side-by-side table from each member's `shortDesc` + `keyInfo` (union of labels). Two React components (`ComparisonIndex`, `ComparisonPage`) render it in the existing dark-glass aesthetic. No new medical prose.

**Tech Stack:** Vite 6 + React 19, Puppeteer SSG (`scripts/prerender.mjs`), `node:test` for pure-fn units, the existing gate chain (build / prerender / check-prerender / smoke / visual-diff / verify-csp).

**Testing reality:** This codebase has NO React component unit tests; components are verified by build + smoke + prerender + visual-diff. Pure functions (urls.js, buildComparison) ARE unit-tested via `scripts/test/*.test.mjs` (`node --test`). The plan follows that split.

---

### Task 1: Registry + routing in `src/seo/urls.js`

**Files:**
- Modify: `src/seo/urls.js`
- Test: `scripts/test/seo-urls.test.mjs`

- [ ] **Step 1: Add failing tests** to `scripts/test/seo-urls.test.mjs`:

```js
import { COMPARISONS, COMPARISON_BASE, comparisonBasePath, comparisonPath } from '../../src/seo/urls.js'

test('COMPARISONS registry: 3 curated comparisons with members + lib', () => {
  assert.equal(COMPARISONS.length, 3)
  for (const c of COMPARISONS) {
    assert.ok(c.slug && c.lib && Array.isArray(c.members) && c.members.length >= 2)
    assert.equal(c.slug, c.members.join('-vs-'))
  }
})

test('comparisonBasePath + comparisonPath per language', () => {
  assert.equal(comparisonBasePath('hu'), '/osszehasonlitas')
  assert.equal(comparisonBasePath('en'), '/en/compare')
  assert.equal(comparisonBasePath('pl'), '/pl/porownanie')
  assert.equal(comparisonPath('bpc-157-vs-tb-500', 'hu'), '/osszehasonlitas/bpc-157-vs-tb-500')
  assert.equal(comparisonPath('bpc-157-vs-tb-500', 'en'), '/en/compare/bpc-157-vs-tb-500')
})

test('parsePath classifies comparison-index + comparison', () => {
  assert.deepEqual(parsePath('/osszehasonlitas'), { kind: 'comparison-index', lang: 'hu' })
  assert.deepEqual(parsePath('/en/compare'), { kind: 'comparison-index', lang: 'en' })
  assert.deepEqual(parsePath('/osszehasonlitas/bpc-157-vs-tb-500'),
    { kind: 'comparison', lang: 'hu', slug: 'bpc-157-vs-tb-500' })
  assert.deepEqual(parsePath('/pl/porownanie/ostarine-vs-rad-140'),
    { kind: 'comparison', lang: 'pl', slug: 'ostarine-vs-rad-140' })
  // unknown slug under the comparison base -> unknown (soft-404)
  assert.equal(parsePath('/osszehasonlitas/not-a-real-pair').kind, 'unknown')
})

test('translatePath: comparison + comparison-index keep slug, swap prefix', () => {
  assert.equal(translatePath({ kind: 'comparison', lang: 'hu', slug: 'bpc-157-vs-tb-500' }, 'en'),
    '/en/compare/bpc-157-vs-tb-500')
  assert.equal(translatePath({ kind: 'comparison-index', lang: 'en' }, 'pl'), '/pl/porownanie')
})
```

- [ ] **Step 2: Run, verify fail.** `npm test` → FAIL (COMPARISONS undefined).

- [ ] **Step 3: Implement in `src/seo/urls.js`.** After the `STATIC_PAGES` block add:

```js
// Comparison section: a reserved base word per language + a curated list of compound
// comparisons. The detail slug is the member ids joined by '-vs-' (language-invariant, like
// entry ids). All members of a comparison share one library (data shapes align). Add a
// comparison here + it is auto-enumerated by parsePath, prerender, and the sitemap.
export const COMPARISON_BASE = { hu: 'osszehasonlitas', en: 'compare', pl: 'porownanie' }
export const COMPARISONS = [
  { slug: 'ostarine-vs-rad-140', lib: 'performance', members: ['ostarine', 'rad-140'] },
  { slug: 'semaglutide-vs-tirzepatide-vs-retatrutide', lib: 'peptides', members: ['semaglutide', 'tirzepatide', 'retatrutide'] },
  { slug: 'bpc-157-vs-tb-500', lib: 'peptides', members: ['bpc-157', 'tb-500'] },
]
const SLUG_TO_COMPARISON = Object.fromEntries(COMPARISONS.map((c) => [c.slug, c]))

export function comparisonBasePath(lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${COMPARISON_BASE[lang]}`
}
export function comparisonPath(slug, lang = 'hu') {
  return `${LANG_PREFIX[lang]}/${COMPARISON_BASE[lang]}/${slug}`
}
```

In `parsePath`, AFTER the `pageKey` page check and BEFORE `const library = SLUG_TO_LIB...`:

```js
  if (parts[0] === COMPARISON_BASE[lang]) {
    if (parts.length === 1) return { kind: 'comparison-index', lang }
    if (parts.length === 2 && SLUG_TO_COMPARISON[parts[1]]) return { kind: 'comparison', lang, slug: parts[1] }
    return { kind: 'unknown' }
  }
```

In `translatePath`, after the `page` branch:

```js
  if (route.kind === 'comparison-index') return comparisonBasePath(lang)
  if (route.kind === 'comparison') return comparisonPath(route.slug, lang)
```

- [ ] **Step 4: Run, verify pass.** `npm test` → all PASS.

- [ ] **Step 5: Commit.** `git add src/seo/urls.js scripts/test/seo-urls.test.mjs && git commit -m "feat(compare): COMPARISONS registry + parsePath/translatePath routing"`

---

### Task 2: `buildComparison` pure helper

**Files:**
- Create: `src/components/comparison/buildComparison.js`
- Test: `scripts/test/build-comparison.test.mjs`

`buildComparison(memberEntries, lang)` takes an array of ALREADY-LOADED localized entry
objects (so it stays pure + sync-testable; the caller does the import). Returns
`{ members: [{id,name,shortDesc,href}], rows: [{label, values: [v|null,...]}] }`.

- [ ] **Step 1: Failing test** `scripts/test/build-comparison.test.mjs`:

```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildComparison } from '../../src/components/comparison/buildComparison.js'

const A = { id: 'a', name: 'A', shortDesc: 'first', keyInfo: [{ label: 'Típus', value: 'X' }, { label: 'Felezési idő', value: '1h' }] }
const B = { id: 'b', name: 'B', shortDesc: 'second', keyInfo: [{ label: 'Típus', value: 'Y' }, { label: 'Tárolás', value: 'fridge' }] }

test('buildComparison: members carry name + shortDesc', () => {
  const r = buildComparison([A, B], 'hu', 'peptides')
  assert.deepEqual(r.members.map((m) => m.name), ['A', 'B'])
  assert.equal(r.members[0].shortDesc, 'first')
})

test('buildComparison: keyInfo union, first-seen order, null for gaps', () => {
  const r = buildComparison([A, B], 'hu', 'peptides')
  const labels = r.rows.map((row) => row.label)
  assert.deepEqual(labels, ['Típus', 'Felezési idő', 'Tárolás'])
  const tarolas = r.rows.find((row) => row.label === 'Tárolás')
  assert.deepEqual(tarolas.values, [null, 'fridge'])
})

test('buildComparison: handles a null member (failed import) gracefully', () => {
  const r = buildComparison([A, null], 'hu', 'peptides')
  assert.equal(r.members[1], null)
  assert.equal(r.rows.find((row) => row.label === 'Típus').values[1], null)
})

test('buildComparison: tolerates triplet {hu,en,pl} shortDesc/value via lang', () => {
  const T = { id: 't', name: 'T', shortDesc: { hu: 'magyar', en: 'eng' }, keyInfo: [{ label: 'Típus', value: { hu: 'm', en: 'e' } }] }
  const r = buildComparison([T], 'en', 'peptides')
  assert.equal(r.members[0].shortDesc, 'eng')
  assert.equal(r.rows[0].values[0], 'e')
})
```

- [ ] **Step 2: Run, verify fail.** `npm test` → FAIL.

- [ ] **Step 3: Implement** `src/components/comparison/buildComparison.js`:

```js
import { entryPath } from '../../seo/urls'

// localize a value that may be a string or {hu,en,pl}
const loc = (v, lang) => (v == null ? null : typeof v === 'string' ? v : (v[lang] ?? v.hu ?? null))

// memberEntries: array of loaded localized entry objects (or null if an import failed).
// Returns a render-ready comparison: members + union-of-keyInfo rows.
export function buildComparison(memberEntries, lang = 'hu', lib = null) {
  const members = memberEntries.map((e) =>
    e ? { id: e.id, name: e.name, shortDesc: loc(e.shortDesc, lang), href: lib ? entryPath(lib, e.id, null, lang) : null } : null)

  // union of keyInfo labels, first-seen order across members
  const order = []
  const seen = new Set()
  for (const e of memberEntries) {
    for (const ki of (e?.keyInfo || [])) {
      if (ki && ki.label && !seen.has(ki.label)) { seen.add(ki.label); order.push(ki.label) }
    }
  }
  const rows = order.map((label) => ({
    label,
    values: memberEntries.map((e) => {
      const ki = (e?.keyInfo || []).find((k) => k && k.label === label)
      return ki ? loc(ki.value, lang) : null
    }),
  }))
  return { members, rows }
}
```

- [ ] **Step 4: Run, verify pass.** `npm test` → PASS.

- [ ] **Step 5: Commit.** `git add src/components/comparison/buildComparison.js scripts/test/build-comparison.test.mjs && git commit -m "feat(compare): buildComparison pure helper + tests"`

---

### Task 3: Components (`ComparisonPage`, `ComparisonIndex`)

**Files:**
- Create: `src/components/comparison/ComparisonPage.jsx`
- Create: `src/components/comparison/ComparisonIndex.jsx`

Pattern: mirror `MethodologyPage.jsx` (back button, eyebrow, `<Footer />`, glass styling,
`var(--text-primary/secondary)`, accent `#818cf8`). Both take `lang`. `ComparisonPage` also
takes `slug`; it looks up the `COMPARISONS` entry, loads each member's localized data via a
sync require of the data module, runs `buildComparison`, and renders:
- title `A vs B [vs C]` (from member names)
- one-line derived intro: member names + shared library name (from `listLibraries`)
- desktop (≥640px): a grid with a left label column + one column per member (glass cells); the
  first content block per member shows `shortDesc`; then one row per `rows[]` label; bottom row
  = "Teljes leírás" link (`member.href`).
- mobile (<640px): stacked — one card per `rows[]` label listing each member's value, plus a
  members header block.

**Data loading in the component:** member entry data is loaded the same way `EntryDetailRoute`
loads it. Check how `EntryDetailRoute.jsx` imports per-lang entry data and reuse that exact
mechanism (likely a `import.meta.glob` map or a dynamic import). The component renders inside a
`<Suspense>` boundary in App if async. **Step 0 of this task: read `EntryDetailRoute.jsx` to
copy its loader pattern — do NOT invent a new one.**

`CONTENT[lang]` map (UI labels only, no body prose): `{ back, eyebrow:'MolekulaX', introTemplate, fullEntry, indexTitle, indexIntro }` for hu/en/pl.

- [ ] **Step 1: Read `src/components/library/EntryDetailRoute.jsx`** to learn the entry-data loader + Suspense pattern.
- [ ] **Step 2: Write `ComparisonPage.jsx`** using that loader + `buildComparison` + the table/stacked layout above.
- [ ] **Step 3: Write `ComparisonIndex.jsx`** — map `COMPARISONS` to cards linking via `comparisonPath(c.slug, lang)` (crawlable `<a>` + SPA nav like the Footer `legalNav`).
- [ ] **Step 4: Verify** `npx vite build` → PASS (no syntax/import errors).
- [ ] **Step 5: Commit.** `git add src/components/comparison/ && git commit -m "feat(compare): ComparisonPage + ComparisonIndex components"`

---

### Task 4: Head meta + App render branches

**Files:**
- Modify: `src/seo/useDocumentHead.js`
- Modify: `src/App.jsx`

- [ ] **Step 1:** In `useDocumentHead.js`, add a `COMPARISON_HEAD` index block (static localized title/desc) and handle `route.kind === 'comparison-index'` (use COMPARISON_HEAD) and `route.kind === 'comparison'` (derive title from the slug's member names via COMPARISONS, e.g. HU `"<A> vs <B> – összehasonlítás | MolekulaX"`, desc from member names + library). Keep the existing `robots` logic (these kinds are NOT 'unknown', so they get `index,follow`).
- [ ] **Step 2:** In `App.jsx`: import `ComparisonPage` + `ComparisonIndex` (lazy is fine, like other routes). Extend `hideLanding` to also hide for `comparison`/`comparison-index`. Add render branches:

```jsx
{route.kind === 'comparison-index' && <ComparisonIndex lang={route.lang} />}
{route.kind === 'comparison' && <ComparisonPage lang={route.lang} slug={route.slug} />}
```

Wrap in `<Suspense>` if lazy.
- [ ] **Step 3: Verify** `npx vite build` → PASS.
- [ ] **Step 4: Commit.** `git add src/seo/useDocumentHead.js src/App.jsx && git commit -m "feat(compare): document head + App render branches"`

---

### Task 5: i18n + Footer discovery link

**Files:**
- Modify: `src/i18n/uiStrings-{hu,en,pl}.js`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1:** Add `"footer.legal.compare"` to each uiStrings file: hu `"Összehasonlítás"`, en `"Compare"`, pl `"Porównanie"`. (Any UI labels the components need can also live in their own `CONTENT` map — keep footer label in i18n for consistency with the other two legal links.)
- [ ] **Step 2:** In `Footer.jsx`, add a third link in the legal row → `comparisonBasePath(lang)` using the existing `legalNav` handler + `pagePath`-style anchor. Import `comparisonBasePath` from `../seo/urls`.
- [ ] **Step 3: Verify** `npx vite build` → PASS.
- [ ] **Step 4: Commit.** `git add src/i18n/ src/components/Footer.jsx && git commit -m "feat(compare): footer Compare link + i18n"`

---

### Task 6: Prerender + sitemap + check-prerender enumeration

**Files:**
- Modify: `scripts/prerender.mjs`
- Modify: `scripts/gen-sitemap.mjs`
- Modify: `scripts/check-prerender.mjs`
- Test: `scripts/test/gen-sitemap.test.mjs` (assertions are relative — confirm still green)

- [ ] **Step 1:** `gen-sitemap.mjs` — import `COMPARISONS, COMPARISON_BASE` and, in `buildSitemapGroups`, push a `page`-type group for the index (`${PREFIX[l]}/${COMPARISON_BASE[l]}`) and one per comparison (`${PREFIX[l]}/${COMPARISON_BASE[l]}/${c.slug}`). 12 new locs → 606.
- [ ] **Step 2:** `prerender.mjs` — import `COMPARISONS, COMPARISON_BASE`; in `buildRoutes`, push the index route (×3 langs) + each comparison detail (×3 langs) with `hreflang: altMap(...)`, `isEntry:false`, no name guard. BreadcrumbList JSON-LD: Home > Comparisons-index > this comparison (extend the existing `writeRoute` breadcrumb logic, or add comparison-specific crumbs).
- [ ] **Step 3:** `check-prerender.mjs` CHECKS — add `{ path: '/osszehasonlitas', must: '<index heading needle>' }` and `{ path: '/en/compare/bpc-157-vs-tb-500', must: 'BPC-157', langMust: '<en-distinct needle>' }`.
- [ ] **Step 4: Verify** `npm test` (gen-sitemap relative assertions still pass) + `node scripts/gen-sitemap.mjs` prints 606.
- [ ] **Step 5: Commit.** `git add scripts/ && git commit -m "feat(compare): prerender + sitemap + check-prerender enumeration"`

---

### Task 7: Full gate chain + deploy

- [ ] **Step 1:** `npm test` → all PASS.
- [ ] **Step 2:** `npm run build:prerender` → 606/606 rendered, 0 failed.
- [ ] **Step 3:** `node scripts/check-prerender.mjs` → ALL CLEAN (incl. comparison checks).
- [ ] **Step 4:** `npm run smoke` → ALL ROUTES PASS.
- [ ] **Step 5:** `node scripts/visual-diff.mjs --mode compare` → home + entries 0.000% (footer change below fold; comparison pages not in SURFACES). If footer diff appears (unlikely), re-baseline.
- [ ] **Step 6:** `node scripts/verify-csp.mjs` → ALL CLEAN.
- [ ] **Step 7:** `node scripts/build-vercel-output.mjs` → ready.
- [ ] **Step 8:** `npx vercel deploy --prebuilt --prod` → READY, aliased to molekulax.hu.
- [ ] **Step 9:** Live verify: curl the 12 URLs (HTTP 200), confirm EN/PL render in-language, sitemap.xml = 606, footer Compare link present in live home HTML.
- [ ] **Step 10: Commit + push.** `git push origin master` (Ignored Build Step = `sh -c 'exit 0'` confirmed, so push does not trigger a Vercel build).

---

## Self-review

- **Spec coverage:** registry (T1), routing (T1), buildComparison/derivation (T2), components incl. mobile-stacked (T3), head/meta (T4), discovery footer+index (T3/T5), prerender+sitemap+hreflang+JSON-LD+check (T6), verification (T7). All spec sections mapped.
- **Type consistency:** `buildComparison(memberEntries, lang, lib)` signature consistent T2↔T3; `{members, rows:[{label, values}]}` shape consistent; `comparisonBasePath`/`comparisonPath`/`COMPARISONS`/`COMPARISON_BASE` names consistent across T1/T4/T5/T6; route kinds `comparison`/`comparison-index` consistent T1/T4.
- **Placeholders:** Task 3 intentionally defers the entry-data loader to "read EntryDetailRoute first" — this is a read-then-mirror instruction (the loader already exists), not an unfilled placeholder; the needles in T6 step 3 are filled from the components' actual index heading + an EN-distinct word once T3 is written.
- **Open detail:** the exact JS-off needles in check-prerender (T6.3) depend on the final index heading text chosen in T3 — set them to the literal heading + an EN body word after T3.
