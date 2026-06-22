# Comparison v2 — Phase A Implementation Plan (functional core + expansion)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the comparison registry to per-member libraries + curated cross-lib dimensions, migrate the 3 existing comparisons unchanged, and ship 29 new validated comparisons (32 total) — all rendering correctly in HU/EN/PL with prerender + a11y intact, and zero new medical claims.

**Architecture:** `COMPARISONS` entries gain `members:[{id,lib}]`, optional localized `topic`, and (cross-lib only) curated `dimensions` (`{display, match}` per-language objects). `buildComparison` becomes registry-driven (per-member lib for links, dimension `match` synonym lists for cross-lib rows, union fallback for same-lib). The build scripts (prerender/sitemap/check/smoke) iterate per-member lib. No visual redesign in Phase A (that is Phase B) — a pixel diff must stay 0.000% on existing pages.

**Tech Stack:** React 19 + Vite, ESM Node test scripts (`node --test`), Puppeteer gates (prerender/smoke), prebuilt Vercel deploy.

**Source of truth for the publish set:** `docs/superpowers/specs/2026-06-22-comparison-v2-candidates.json` (validated). Spec: `docs/superpowers/specs/2026-06-22-comparison-v2-design.md`. ADR-0004, CONTEXT.md.

---

## File map

- Modify `src/seo/urls.js` — `COMPARISONS` (new shape + migrate 3 + author 29) + `LIB_SHORT` + `comparisonsForEntry()`.
- Modify `src/components/comparison/buildComparison.js` — registry-driven signature, dimension `match`, same-id displayName, union fallback.
- Modify `src/components/comparison/ComparisonPage.jsx` — per-member `loadEntry`, topic chip, new `buildComparison` call.
- Modify `src/components/comparison/ComparisonIndex.jsx` — topic label + cross-lib marker.
- Modify `scripts/prerender.mjs` — route push (drop `c.lib`), `contentHashFor` per-member lib.
- Modify `scripts/check-prerender.mjs` — add a within-lib + cross-lib JS-off check.
- Modify `scripts/smoke-render.mjs` — add 3 representative new routes.
- Modify `scripts/test/build-comparison.test.mjs` — rewrite for new signature + dimension/union/same-id cases.
- Modify `scripts/test/seo-urls.test.mjs` — add `comparisonsForEntry` cases.
- Create `scripts/scan-comparison-candidates.mjs` — reusable (d) mapping tool.
- Delete `scripts/tmp-validate-comparisons.mjs` — throwaway (its check is folded into Task 0 + the cross-lib test).

`src/App.jsx` needs NO change (it already renders `ComparisonPage`/`ComparisonIndex` and reads no `cmp.lib`). `scripts/gen-sitemap.mjs` needs NO change (it iterates `COMPARISONS` by `c.slug` only).

---

## Task 0: Validate the publish set against real data (gate before authoring)

**Files:** read-only (uses existing `scripts/tmp-validate-comparisons.mjs` + the candidates JSON).

- [ ] **Step 1: Run the validator**

Run: `node scripts/tmp-validate-comparisons.mjs`
Expected: every line under `EXISTING (3)` and `NEW (29)` starts with `✅` (shared ≥ 3). No `❌MISSING`, `🚫ZERO`, or `⚠️THIN`.

- [ ] **Step 2: Capture each new member's exact `name`**

For each comparison in the JSON `new` array, the registry `title` (Task 5) uses the members' real `name` fields. Spot-read the ones whose display name you are unsure of:
Run: `node -e "import('./src/data/libraries/peptides/entries/hu/na-semax-amidate.js').then(m=>console.log(m.default.name))"`
Repeat for any uncertain id (`flmodafinil`, `fsh-rec-perf`, `cjc-1295`, `kisspeptin`, `cdp-choline`, `slu-pp-332`/`915`, `f-phenibut`, `pt-141`).
Expected: prints the canonical display name; use it verbatim in the Task 5 titles.

(No commit — this is a gate.)

---

## Task 1: `buildComparison` — registry-driven (members carry lib, dimension match, same-id name, union fallback)

**Files:**
- Modify: `src/components/comparison/buildComparison.js`
- Test: `scripts/test/build-comparison.test.mjs`

- [ ] **Step 1: Rewrite the test for the new signature**

Replace the whole file `scripts/test/build-comparison.test.mjs` with:

```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildComparison } from '../../src/components/comparison/buildComparison.js'

const e = (id, keyInfo, extra = {}) => ({ id, name: id.toUpperCase(), shortDesc: `${id} desc`, keyInfo, ...extra })

test('same-lib: union of keyInfo labels, per-member href uses member lib', () => {
  const cmp = { members: [{ id: 'a', lib: 'performance' }, { id: 'b', lib: 'performance' }] }
  const entries = [
    e('a', [{ label: 'Mech', value: 'x' }, { label: 'Half', value: '1h' }]),
    e('b', [{ label: 'Mech', value: 'y' }, { label: 'Legal', value: 'Rx' }]),
  ]
  const { members, rows } = buildComparison(entries, cmp, 'hu')
  assert.equal(members[0].href, '/teljesitmenyfokozok/a')
  assert.deepEqual(rows.map((r) => r.label), ['Mech', 'Half', 'Legal']) // first-seen union
  assert.deepEqual(rows[2].values, [null, 'Rx']) // gap for member a
})

test('curated dimensions: match synonyms per lang, display label used', () => {
  const cmp = {
    members: [{ id: 'a', lib: 'performance' }, { id: 'b', lib: 'pharmaceutical' }],
    dimensions: [
      { display: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek działania' }, match: { hu: ['Hatáskezdet'], en: ['Onset'], pl: ['Początek działania', 'Początek'] } },
    ],
  }
  const entriesPl = [e('a', [{ label: 'Początek działania', value: 'szybko' }]), e('b', [{ label: 'Początek', value: 'wolno' }])]
  const { rows } = buildComparison(entriesPl, cmp, 'pl')
  assert.equal(rows[0].label, 'Początek działania')
  assert.deepEqual(rows[0].values, ['szybko', 'wolno']) // synonym list matched both members
})

test('same-id cross-lib: column name disambiguated by library', () => {
  const cmp = { sameId: true, members: [{ id: 'finasteride', lib: 'performance' }, { id: 'finasteride', lib: 'pharmaceutical' }] }
  const entries = [e('finasteride', []), e('finasteride', [])]
  const { members } = buildComparison(entries, cmp, 'hu')
  assert.equal(members[0].name, 'FINASTERIDE · teljesítmény')
  assert.equal(members[1].name, 'FINASTERIDE · gyógyszer')
})

test('null member entry yields null slot (failed import)', () => {
  const cmp = { members: [{ id: 'a', lib: 'peptides' }, { id: 'b', lib: 'peptides' }] }
  const { members } = buildComparison([e('a', []), null], cmp, 'hu')
  assert.equal(members[1], null)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test scripts/test/build-comparison.test.mjs`
Expected: FAIL (current `buildComparison(entries, lang, lib)` signature: wrong href, no dimension/sameId support).

- [ ] **Step 3: Rewrite the implementation**

Replace the whole file `src/components/comparison/buildComparison.js` with:

```js
import { entryPath } from '../../seo/urls.js'

// Localize a value that may be a plain string OR a {hu,en,pl} triplet.
const loc = (v, lang) => (v == null ? null : typeof v === 'string' ? v : (v[lang] ?? v.hu ?? null))

// Short library label per language, used ONLY to disambiguate same-id cross-lib columns
// (e.g. two "Finasteride" columns -> "Finasteride · teljesítmény" / "· gyógyszer").
const LIB_SHORT = {
  peptides:       { hu: 'peptid',        en: 'peptide',     pl: 'peptyd' },
  nootropics:     { hu: 'nootropikum',   en: 'nootropic',   pl: 'nootropik' },
  performance:    { hu: 'teljesítmény',  en: 'performance', pl: 'wydajność' },
  pharmaceutical: { hu: 'gyógyszer',     en: 'pharma',      pl: 'lek' },
}

/**
 * Derive a render-ready comparison from already-loaded localized entries.
 * Pure + sync-testable: the caller loads each member with its own library.
 *
 * @param {Array<object|null>} memberEntries  loaded localized entries, aligned with comparison.members
 * @param {{members:Array<{id,lib}>, dimensions?:Array, sameId?:boolean}} comparison  registry entry
 * @param {string} lang
 * @returns {{ members: Array<{id,lib,name,shortDesc,href}|null>, rows: Array<{label, values:Array<string|null>}> }}
 */
export function buildComparison(memberEntries, comparison, lang = 'hu') {
  const meta = comparison.members || []
  const members = memberEntries.map((e, i) => {
    if (!e) return null
    const lib = meta[i]?.lib
    const baseName = loc(e.name, lang) ?? e.name
    const name = comparison.sameId ? `${baseName} · ${LIB_SHORT[lib]?.[lang] ?? lib}` : baseName
    return { id: e.id, lib, name, shortDesc: loc(e.shortDesc, lang), href: lib ? entryPath(lib, e.id, null, lang) : null }
  })

  let rows
  if (comparison.dimensions && comparison.dimensions.length) {
    // Curated rows (cross-lib): each dimension has a per-lang display label + a per-lang
    // synonym list of accepted keyInfo labels (handles cross-entry label drift).
    rows = comparison.dimensions.map((dim) => {
      const accepted = dim.match?.[lang] ?? dim.match?.hu ?? []
      return {
        label: dim.display?.[lang] ?? dim.display?.hu ?? '',
        values: memberEntries.map((e) => {
          const ki = (e?.keyInfo || []).find((k) => k && accepted.includes(k.label))
          return ki ? loc(ki.value, lang) : null
        }),
      }
    })
  } else {
    // Union of keyInfo labels, first-seen order (same-lib default, = v1 behavior).
    const order = []
    const seen = new Set()
    for (const e of memberEntries) {
      for (const ki of (e?.keyInfo || [])) {
        if (ki && ki.label && !seen.has(ki.label)) { seen.add(ki.label); order.push(ki.label) }
      }
    }
    rows = order.map((label) => ({
      label,
      values: memberEntries.map((e) => {
        const ki = (e?.keyInfo || []).find((k) => k && k.label === label)
        return ki ? loc(ki.value, lang) : null
      }),
    }))
  }
  return { members, rows }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test scripts/test/build-comparison.test.mjs`
Expected: PASS (4/4).

- [ ] **Step 5: Commit**

```bash
git add src/components/comparison/buildComparison.js scripts/test/build-comparison.test.mjs
git commit -m "feat(compare): registry-driven buildComparison (per-member lib, curated dimensions, same-id names)"
```

---

## Task 2: `ComparisonPage` — load per-member lib + topic chip + new call

**Files:**
- Modify: `src/components/comparison/ComparisonPage.jsx`

- [ ] **Step 1: Update the data load + builder call + chip**

In `src/components/comparison/ComparisonPage.jsx`:

Replace the effect body's `Promise.all` line:
```js
    Promise.all(cmp.members.map((id) => loadEntry(cmp.lib, id, lang).catch(() => null)))
```
with:
```js
    Promise.all(cmp.members.map((m) => loadEntry(m.lib, m.id, lang).catch(() => null)))
```

Replace:
```js
  const lib = listLibraries().find((l) => l.id === cmp.lib)
  const libName = lib ? (lib.name[lang] || lib.name.hu) : ''
  const data = entries ? buildComparison(entries, lang, cmp.lib) : null
```
with:
```js
  // Chip label: the curated topic if present (required for cross-lib, which has no single
  // library name), else the shared library's name (all same-lib members share one).
  const sharedLibId = cmp.members.every((m) => m.lib === cmp.members[0].lib) ? cmp.members[0].lib : null
  const sharedLib = sharedLibId ? listLibraries().find((l) => l.id === sharedLibId) : null
  const libName = cmp.topic ? (cmp.topic[lang] || cmp.topic.hu) : (sharedLib ? (sharedLib.name[lang] || sharedLib.name.hu) : 'MolekulaX')
  const data = entries ? buildComparison(entries, cmp, lang) : null
```

- [ ] **Step 2: Verify build + existing smoke comparison routes still render**

Run: `npm run build`
Expected: build PASS, no `cmp.lib` reference errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/comparison/ComparisonPage.jsx
git commit -m "feat(compare): ComparisonPage loads each member by its own library + topic chip"
```

---

## Task 3: `ComparisonIndex` — topic label + cross-lib marker

**Files:**
- Modify: `src/components/comparison/ComparisonIndex.jsx`

- [ ] **Step 1: Use topic when present**

In `src/components/comparison/ComparisonIndex.jsx`, replace:
```js
                  <span className="mt-1 text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{libName(cmp.lib)}</span>
```
with:
```js
                  <span className="mt-1 text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {cmp.topic ? (cmp.topic[lang] || cmp.topic.hu) : libName(cmp.members.every((m) => m.lib === cmp.members[0].lib) ? cmp.members[0].lib : null)}
                    {cmp.crossLib ? ' · ⇄' : ''}
                  </span>
```

(`libName(null)` already returns `''` — safe for mixed-lib without a topic, though every cross-lib here has a topic.)

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/comparison/ComparisonIndex.jsx
git commit -m "feat(compare): ComparisonIndex shows topic + cross-lib marker"
```

---

## Task 4: Migrate the 3 existing comparisons + update prerender for per-member lib (parity-proven)

**Files:**
- Modify: `src/seo/urls.js` (the 3 existing `COMPARISONS`)
- Modify: `scripts/prerender.mjs` (route push + `contentHashFor`)

- [ ] **Step 1: Migrate the 3 existing entries**

In `src/seo/urls.js`, replace the current `COMPARISONS` array body (the 3 entries) with:
```js
export const COMPARISONS = [
  { slug: 'ostarine-vs-rad-140', members: [{ id: 'ostarine', lib: 'performance' }, { id: 'rad-140', lib: 'performance' }], title: 'Ostarine vs RAD-140' },
  { slug: 'semaglutide-vs-tirzepatide-vs-retatrutide', members: [{ id: 'semaglutide', lib: 'peptides' }, { id: 'tirzepatide', lib: 'peptides' }, { id: 'retatrutide', lib: 'peptides' }], title: 'Semaglutide vs Tirzepatide vs Retatrutide' },
  { slug: 'bpc-157-vs-tb-500', members: [{ id: 'bpc-157', lib: 'peptides' }, { id: 'tb-500', lib: 'peptides' }], title: 'BPC-157 vs TB-500' },
]
```
(The comparison-level `lib` field is removed; members now carry `lib`.)

- [ ] **Step 2: Update the prerender route push**

In `scripts/prerender.mjs`, replace the `routes.push({ ... isComparison: true ... })` line (~147) with:
```js
      routes.push({ lang, urlPath: cmpUrl(lang), diskPath: diskFor(lang, COMPARISON_BASE[lang], c.slug), name: c.title.split(' vs ')[0], libId: null, libraryName: null, hreflang: altMap(cmpUrl), isComparison: true, comparisonTitle: c.title, members: c.members })
```
(Dropped `lib: c.lib`; `members` is now `[{id,lib}]`.)

- [ ] **Step 3: Update `contentHashFor` for per-member lib**

In `scripts/prerender.mjs`, replace the `if (route.isComparison && route.members) { ... }` block (~96-103) with:
```js
  if (route.isComparison && route.members) {
    const h = createHash('sha256')
    for (const m of route.members) {
      const p = join(repoRoot, 'src', 'data', 'libraries', m.lib, 'entries', route.lang, `${m.id}.js`)
      try { h.update(readFileSync(p)) } catch {}
    }
    return h.digest('hex')
  }
```

- [ ] **Step 4: Prove parity — build, smoke, visual-diff all unchanged**

Run: `npm run build && npm run smoke`
Expected: build PASS; smoke 12/12 PASS (incl. the 2 existing comparison routes).

Run: `node scripts/visual-diff.mjs --mode compare`
Expected: `0.000%` diff (the 3 existing comparisons render byte-identically — migration is behavior-preserving).

- [ ] **Step 5: Commit**

```bash
git add src/seo/urls.js scripts/prerender.mjs
git commit -m "refactor(compare): migrate existing comparisons to per-member lib; prerender hashes each member's lib"
```

---

## Task 5: Author the 29 new comparisons

**Files:**
- Modify: `src/seo/urls.js` (append to `COMPARISONS`)

- [ ] **Step 1: Append the 29 new entries**

In `src/seo/urls.js`, insert these entries into the `COMPARISONS` array (after the 3 existing). Titles use each member's real `name` (verified in Task 0 — adjust casing if an entry differs). `topic` is localized HU/EN/PL. Only the 2 cross-lib entries carry `dimensions`.

```js
  // --- Comparison v2: performance (within-lib) ---
  { slug: 'anastrozol-vs-letrozol-vs-exemestane', members: [{ id: 'anastrozol', lib: 'performance' }, { id: 'letrozol', lib: 'performance' }, { id: 'exemestane', lib: 'performance' }], title: 'Anastrozol vs Letrozol vs Exemestane', topic: { hu: 'Aromatázgátlók (AI)', en: 'Aromatase inhibitors (AI)', pl: 'Inhibitory aromatazy (AI)' } },
  { slug: 'nolvadex-vs-clomid-vs-enclomiphene', members: [{ id: 'nolvadex', lib: 'performance' }, { id: 'clomid', lib: 'performance' }, { id: 'enclomiphene', lib: 'performance' }], title: 'Nolvadex vs Clomid vs Enclomiphene', topic: { hu: 'SERM-ek (PCT)', en: 'SERMs (PCT)', pl: 'SERM-y (PCT)' } },
  { slug: 'finasteride-vs-dutasteride', members: [{ id: 'finasteride', lib: 'performance' }, { id: 'dutasteride', lib: 'performance' }], title: 'Finasteride vs Dutasteride', topic: { hu: '5α-reduktáz gátlók', en: '5α-reductase inhibitors', pl: 'Inhibitory 5α-reduktazy' } },
  { slug: 'liothyronine-vs-levothyroxine', members: [{ id: 'liothyronine', lib: 'performance' }, { id: 'levothyroxine', lib: 'performance' }], title: 'Liothyronine vs Levothyroxine', topic: { hu: 'Pajzsmirigyhormonok (T3/T4)', en: 'Thyroid hormones (T3/T4)', pl: 'Hormony tarczycy (T3/T4)' } },
  { slug: 'clenbuterol-vs-albuterol', members: [{ id: 'clenbuterol', lib: 'performance' }, { id: 'albuterol', lib: 'performance' }], title: 'Clenbuterol vs Albuterol', topic: { hu: 'β2-agonisták', en: 'β2-agonists', pl: 'β2-agoniści' } },
  { slug: 'cabergoline-vs-bromocriptine-vs-pramipexole', members: [{ id: 'cabergoline', lib: 'performance' }, { id: 'bromocriptine', lib: 'performance' }, { id: 'pramipexole', lib: 'performance' }], title: 'Cabergoline vs Bromocriptine vs Pramipexole', topic: { hu: 'Dopamin-agonisták (prolaktin-kontroll)', en: 'Dopamine agonists (prolactin control)', pl: 'Agoniści dopaminy (kontrola prolaktyny)' } },
  { slug: 'lgd-4033-vs-s23-vs-s4', members: [{ id: 'lgd-4033', lib: 'performance' }, { id: 's23', lib: 'performance' }, { id: 's4', lib: 'performance' }], title: 'LGD-4033 vs S23 vs S4', topic: { hu: 'Non-szteroidal SARM-ok', en: 'Non-steroidal SARMs', pl: 'Niesteroidowe SARM-y' } },
  { slug: 'hcg-perf-vs-hmg-perf-vs-fsh-rec-perf', members: [{ id: 'hcg-perf', lib: 'performance' }, { id: 'hmg-perf', lib: 'performance' }, { id: 'fsh-rec-perf', lib: 'performance' }], title: 'HCG vs HMG vs FSH-rec', topic: { hu: 'Gonadotropinok (tengely-újraindítás)', en: 'Gonadotropins (axis restart)', pl: 'Gonadotropiny (restart osi)' } },
  { slug: 'slu-pp-332-vs-slu-pp-915', members: [{ id: 'slu-pp-332', lib: 'performance' }, { id: 'slu-pp-915', lib: 'performance' }], title: 'SLU-PP-332 vs SLU-PP-915', topic: { hu: 'ERR-agonista exercise-mimetikumok', en: 'ERR-agonist exercise mimetics', pl: 'Mimetyki wysiłku (agoniści ERR)' } },
  { slug: 'pregnenolone-vs-dhea', members: [{ id: 'pregnenolone', lib: 'performance' }, { id: 'dhea', lib: 'performance' }], title: 'Pregnenolone vs DHEA', topic: { hu: 'Endogén szteroid-prekurzorok', en: 'Endogenous steroid precursors', pl: 'Endogenne prekursory steroidowe' } },
  // --- peptides (within-lib) ---
  { slug: 'sermorelin-vs-cjc-1295-vs-tesamorelin', members: [{ id: 'sermorelin', lib: 'peptides' }, { id: 'cjc-1295', lib: 'peptides' }, { id: 'tesamorelin', lib: 'peptides' }], title: 'Sermorelin vs CJC-1295 vs Tesamorelin', topic: { hu: 'GHRH-analógok', en: 'GHRH analogues', pl: 'Analogi GHRH' } },
  { slug: 'ghrp-2-vs-ghrp-6-vs-hexarelin', members: [{ id: 'ghrp-2', lib: 'peptides' }, { id: 'ghrp-6', lib: 'peptides' }, { id: 'hexarelin', lib: 'peptides' }], title: 'GHRP-2 vs GHRP-6 vs Hexarelin', topic: { hu: 'GHRP szekretagógok', en: 'GHRP secretagogues', pl: 'Sekretagogi GHRP' } },
  { slug: 'mazdutide-vs-survodutide', members: [{ id: 'mazdutide', lib: 'peptides' }, { id: 'survodutide', lib: 'peptides' }], title: 'Mazdutide vs Survodutide', topic: { hu: 'GLP-1/glukagon kettős agonisták', en: 'GLP-1/glucagon dual agonists', pl: 'Podwójni agoniści GLP-1/glukagon' } },
  { slug: 'melanotan-1-vs-melanotan-2', members: [{ id: 'melanotan-1', lib: 'peptides' }, { id: 'melanotan-2', lib: 'peptides' }], title: 'Melanotan-1 vs Melanotan-2', topic: { hu: 'α-MSH analógok', en: 'α-MSH analogues', pl: 'Analogi α-MSH' } },
  { slug: 'selank-vs-adalank', members: [{ id: 'selank', lib: 'peptides' }, { id: 'adalank', lib: 'peptides' }], title: 'Selank vs Adalank', topic: { hu: 'Tuftsin-analóg nootropok', en: 'Tuftsin-analogue nootropics', pl: 'Nootropiki analogi tuftsyny' } },
  { slug: 'semax-vs-na-semax-amidate-vs-adamax', members: [{ id: 'semax', lib: 'peptides' }, { id: 'na-semax-amidate', lib: 'peptides' }, { id: 'adamax', lib: 'peptides' }], title: 'Semax vs NA-Semax-Amidate vs Adamax', topic: { hu: 'Semax (ACTH 4-10) származékok', en: 'Semax (ACTH 4-10) derivatives', pl: 'Pochodne Semaxu (ACTH 4-10)' } },
  { slug: 'gonadorelin-vs-kisspeptin', members: [{ id: 'gonadorelin', lib: 'peptides' }, { id: 'kisspeptin', lib: 'peptides' }], title: 'Gonadorelin vs Kisspeptin', topic: { hu: 'GnRH-tengely aktivátorok', en: 'GnRH-axis activators', pl: 'Aktywatory osi GnRH' } },
  { slug: 'melanotan-2-vs-pt-141', members: [{ id: 'melanotan-2', lib: 'peptides' }, { id: 'pt-141', lib: 'peptides' }], title: 'Melanotan-2 vs PT-141', topic: { hu: 'Melanokortinreceptor-agonisták', en: 'Melanocortin receptor agonists', pl: 'Agoniści receptora melanokortyny' } },
  // --- nootropics (within-lib) ---
  { slug: 'modafinil-vs-armodafinil-vs-flmodafinil', members: [{ id: 'modafinil', lib: 'nootropics' }, { id: 'armodafinil', lib: 'nootropics' }, { id: 'flmodafinil', lib: 'nootropics' }], title: 'Modafinil vs Armodafinil vs Flmodafinil', topic: { hu: 'Afinil-család (eugeroikumok)', en: 'Afinil family (eugeroics)', pl: 'Rodzina afinili (eugeroiki)' } },
  { slug: 'sunifiram-vs-unifiram', members: [{ id: 'sunifiram', lib: 'nootropics' }, { id: 'unifiram', lib: 'nootropics' }], title: 'Sunifiram vs Unifiram', topic: { hu: 'Ampakinok (AMPA-PAM)', en: 'Ampakines (AMPA-PAM)', pl: 'Ampakiny (AMPA-PAM)' } },
  { slug: 'alpha-gpc-vs-cdp-choline', members: [{ id: 'alpha-gpc', lib: 'nootropics' }, { id: 'cdp-choline', lib: 'nootropics' }], title: 'Alpha-GPC vs CDP-Choline', topic: { hu: 'Kolin-prekurzorok', en: 'Choline precursors', pl: 'Prekursory choliny' } },
  { slug: 'phenibut-vs-f-phenibut', members: [{ id: 'phenibut', lib: 'nootropics' }, { id: 'f-phenibut', lib: 'nootropics' }], title: 'Phenibut vs F-Phenibut', topic: { hu: 'GABA-B agonisták (Phenibut-család)', en: 'GABA-B agonists (Phenibut family)', pl: 'Agoniści GABA-B (rodzina fenibutu)' } },
  { slug: 'adrafinil-vs-fladrafinil', members: [{ id: 'adrafinil', lib: 'nootropics' }, { id: 'fladrafinil', lib: 'nootropics' }], title: 'Adrafinil vs Fladrafinil', topic: { hu: 'Modafinil-prodrug eugeroikumok', en: 'Modafinil-prodrug eugeroics', pl: 'Eugeroiki proleki modafinilu' } },
  { slug: 'semax-vs-selank', members: [{ id: 'semax', lib: 'nootropics' }, { id: 'selank', lib: 'nootropics' }], title: 'Semax vs Selank', topic: { hu: 'Orosz intranazális neuropeptidek', en: 'Russian intranasal neuropeptides', pl: 'Rosyjskie neuropeptydy donosowe' } },
  { slug: 'pramiracetam-vs-coluracetam', members: [{ id: 'pramiracetam', lib: 'nootropics' }, { id: 'coluracetam', lib: 'nootropics' }], title: 'Pramiracetam vs Coluracetam', topic: { hu: 'HACU-fokozó racetamok', en: 'HACU-enhancing racetams', pl: 'Racetamy nasilające HACU' } },
  { slug: 'cerebrolysin-vs-cortexin', members: [{ id: 'cerebrolysin', lib: 'nootropics' }, { id: 'cortexin', lib: 'nootropics' }], title: 'Cerebrolysin vs Cortexin', topic: { hu: 'Injektálható agyi peptid-hidrolizátumok', en: 'Injectable brain peptide hydrolysates', pl: 'Iniekcyjne hydrolizaty peptydów mózgowych' } },
  { slug: 'ashwagandha-vs-rhodiola-vs-bacopa', members: [{ id: 'ashwagandha', lib: 'nootropics' }, { id: 'rhodiola', lib: 'nootropics' }, { id: 'bacopa', lib: 'nootropics' }], title: 'Ashwagandha vs Rhodiola vs Bacopa', topic: { hu: 'Adaptogének (stressz/kogníció)', en: 'Adaptogens (stress/cognition)', pl: 'Adaptogeny (stres/funkcje poznawcze)' } },
  // --- cross-library (curated dimensions) ---
  { slug: 'hmg-perf-vs-hmg-peptid', crossLib: true, members: [{ id: 'hmg-perf', lib: 'performance' }, { id: 'hmg-peptid', lib: 'peptides' }], title: 'HMG (performance) vs HMG (peptides)', topic: { hu: 'HMG: tengely-restart és fertilitás-keret', en: 'HMG: axis restart vs fertility framing', pl: 'HMG: restart osi vs kontekst płodności' }, dimensions: [
    { display: { hu: 'Hatásmechanizmus', en: 'Mechanism of action', pl: 'Mechanizm działania' }, match: { hu: ['Hatásmechanizmus'], en: ['Mechanism'], pl: ['Mechanizm'] } },
    { display: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, match: { hu: ['Felezési idő'], en: ['Half-life'], pl: ['Okres półtrwania'] } },
    { display: { hu: 'Jogi státusz', en: 'Legal status', pl: 'Status prawny' }, match: { hu: ['Jogi státusz'], en: ['Legal status'], pl: ['Status prawny'] } },
  ] },
  { slug: 'finasteride-performance-vs-pharmaceutical', crossLib: true, sameId: true, members: [{ id: 'finasteride', lib: 'performance' }, { id: 'finasteride', lib: 'pharmaceutical' }], title: 'Finasteride (performance) vs Finasteride (pharma)', topic: { hu: 'Finasteride: teljesítmény-keret és gyógyszer-keret', en: 'Finasteride: performance vs medical framing', pl: 'Finasteryd: kontekst wydajnościowy vs leczniczy' }, dimensions: [
    { display: { hu: 'Hatásmechanizmus', en: 'Mechanism of action', pl: 'Mechanizm działania' }, match: { hu: ['Hatásmechanizmus'], en: ['Mechanism'], pl: ['Mechanizm'] } },
    { display: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' }, match: { hu: ['Felezési idő'], en: ['Half-life'], pl: ['Okres półtrwania'] } },
    { display: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek działania' }, match: { hu: ['Hatáskezdet'], en: ['Onset'], pl: ['Początek działania', 'Początek'] } },
  ] },
```

- [ ] **Step 2: Build (prerender all new routes)**

Run: `npm run build:prerender`
Expected: PASS, 0 errors, render count rises by 29 × 3 = 87 (32 comparisons × 3 langs total). No name-guard timeouts.

- [ ] **Step 3: Commit**

```bash
git add src/seo/urls.js
git commit -m "feat(compare): author 29 new validated comparisons (HU/EN/PL topics, 2 cross-lib)"
```

---

## Task 6: `comparisonsForEntry` reverse-index helper (for Phase D, lives with the registry)

**Files:**
- Modify: `src/seo/urls.js`
- Test: `scripts/test/seo-urls.test.mjs`

- [ ] **Step 1: Add the failing test**

Append to `scripts/test/seo-urls.test.mjs`:
```js
import { comparisonsForEntry } from '../../src/seo/urls.js'

test('comparisonsForEntry returns comparisons containing the entry (by lib+id)', () => {
  const r = comparisonsForEntry('performance', 'finasteride')
  const slugs = r.map((c) => c.slug)
  assert.ok(slugs.includes('finasteride-vs-dutasteride'))
  assert.ok(slugs.includes('finasteride-performance-vs-pharmaceutical'))
})

test('comparisonsForEntry is lib-specific (pharma finasteride only matches the cross-lib one)', () => {
  const slugs = comparisonsForEntry('pharmaceutical', 'finasteride').map((c) => c.slug)
  assert.deepEqual(slugs, ['finasteride-performance-vs-pharmaceutical'])
})

test('comparisonsForEntry returns [] for an entry in no comparison', () => {
  assert.deepEqual(comparisonsForEntry('peptides', 'glow'), [])
})
```
(If `scripts/test/seo-urls.test.mjs` lacks the `test`/`assert` imports at top, ensure they exist: `import { test } from 'node:test'` + `import assert from 'node:assert/strict'`.)

- [ ] **Step 2: Run to verify it fails**

Run: `node --test scripts/test/seo-urls.test.mjs`
Expected: FAIL (`comparisonsForEntry` not exported).

- [ ] **Step 3: Add the helper**

In `src/seo/urls.js`, after the `SLUG_TO_COMPARISON` line, add:
```js
// Reverse index: every comparison whose members include this {lib,id}. Pure, used by the
// tile badge + the entry-page "related comparisons" block (Phase D).
export function comparisonsForEntry(lib, id) {
  return COMPARISONS.filter((c) => c.members.some((m) => m.lib === lib && m.id === id))
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `node --test scripts/test/seo-urls.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/seo/urls.js scripts/test/seo-urls.test.mjs
git commit -m "feat(compare): comparisonsForEntry reverse-index helper + tests"
```

---

## Task 7: Extend the JS-off prerender check + smoke routes

**Files:**
- Modify: `scripts/check-prerender.mjs`
- Modify: `scripts/smoke-render.mjs`

- [ ] **Step 1: Add JS-off checks (within-lib + cross-lib)**

In `scripts/check-prerender.mjs`, add to the `CHECKS` array (after the existing comparison lines):
```js
  { path: '/osszehasonlitas/anastrozol-vs-letrozol-vs-exemestane', must: 'Anastrozol' },
  { path: '/en/compare/hmg-perf-vs-hmg-peptid', must: 'HMG', langMust: 'Mechanism' },
```

- [ ] **Step 2: Add smoke routes**

In `scripts/smoke-render.mjs`, add to the route list (after the existing comparison entries):
```js
  { label: 'comparison new within-lib — AI trio', lib: null, path: '/osszehasonlitas/anastrozol-vs-letrozol-vs-exemestane' },
  { label: 'comparison cross-lib — HMG perf vs peptid', lib: null, path: '/osszehasonlitas/hmg-perf-vs-hmg-peptid' },
  { label: 'comparison same-id cross — finasteride', lib: null, path: '/osszehasonlitas/finasteride-performance-vs-pharmaceutical' },
```

- [ ] **Step 3: Run both gates**

Run: `npm run build:prerender && node scripts/check-prerender.mjs && npm run smoke`
Expected: check-prerender ALL CLEAN (incl. the 2 new checks); smoke 15/15 PASS.

- [ ] **Step 4: Commit**

```bash
git add scripts/check-prerender.mjs scripts/smoke-render.mjs
git commit -m "test(compare): JS-off + smoke coverage for new within-lib, cross-lib, same-id routes"
```

---

## Task 8: Cross-lib row-count regression test (catches label-drift in all 3 langs)

**Files:**
- Test: `scripts/test/comparison-crosslib.test.mjs` (create)

- [ ] **Step 1: Write the test**

Create `scripts/test/comparison-crosslib.test.mjs`:
```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COMPARISONS } from '../../src/seo/urls.js'
import { loadEntry } from '../../src/data/libraries/index.js'
import { buildComparison } from '../../src/components/comparison/buildComparison.js'

// Every cross-lib (curated-dimension) comparison must render >=3 non-empty rows in HU/EN/PL.
// This fails if a member id is wrong OR a dimension's per-lang match synonym list misses a
// member's localized keyInfo label (the finasteride PL onset drift was the canary).
const crossLibs = COMPARISONS.filter((c) => c.dimensions && c.dimensions.length)

for (const c of crossLibs) {
  for (const lang of ['hu', 'en', 'pl']) {
    test(`${c.slug} renders all curated rows for both members in ${lang}`, async () => {
      const entries = await Promise.all(c.members.map((m) => loadEntry(m.lib, m.id, lang).catch(() => null)))
      assert.ok(entries.every(Boolean), `a member failed to load: ${c.slug}`)
      const { rows } = buildComparison(entries, c, lang)
      assert.equal(rows.length, c.dimensions.length)
      for (const row of rows) {
        assert.ok(row.values.every((v) => v != null && v !== ''), `gap in row "${row.label}" (${c.slug}/${lang})`)
      }
    })
  }
}
```

- [ ] **Step 2: Run it**

Run: `node --test scripts/test/comparison-crosslib.test.mjs`
Expected: PASS (6 tests — 2 cross-lib × 3 langs, every curated row filled for both members). If a PL row is empty, the dimension's `match.pl` list is missing that member's label → add the synonym.

- [ ] **Step 3: Commit**

```bash
git add scripts/test/comparison-crosslib.test.mjs
git commit -m "test(compare): cross-lib comparisons fill every curated row in HU/EN/PL"
```

---

## Task 9: Productionize the candidate-scan tool (the reusable (d) deliverable)

**Files:**
- Create: `scripts/scan-comparison-candidates.mjs`
- Delete: `scripts/tmp-validate-comparisons.mjs`

- [ ] **Step 1: Write the scan tool**

Create `scripts/scan-comparison-candidates.mjs` (deterministic, advisory — never auto-publishes):
```js
// Reusable mapping tool behind the Comparison "which compounds are worth comparing" (d) task.
// Reads each library's entries, groups by shared keyInfo-label overlap, and reports candidate
// clusters + an audit of the published COMPARISONS (member existence + shared-label count).
// Usage: node scripts/scan-comparison-candidates.mjs [--audit]
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { COMPARISONS } from '../src/seo/urls.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

function labelsOf(lib, id) {
  try {
    const txt = readFileSync(join(root, 'src/data/libraries', lib, 'entries/hu', `${id}.js`), 'utf8')
    const out = []; const re = /"label"\s*:\s*"([^"]+)"/g; let m
    while ((m = re.exec(txt))) out.push(m[1])
    return out
  } catch { return null }
}

function audit() {
  let bad = 0
  for (const c of COMPARISONS) {
    const per = c.members.map((m) => ({ m, labels: labelsOf(m.lib, m.id) }))
    const missing = per.filter((x) => x.labels === null).map((x) => `${x.m.lib}/${x.m.id}`)
    let shared = 0
    if (!missing.length) shared = per[0].labels.filter((l) => per.every((x) => x.labels.includes(l))).length
    const ok = !missing.length && (c.dimensions ? true : shared >= 3)
    if (!ok) bad++
    console.log(`${ok ? 'OK ' : 'BAD'} ${c.slug}${c.crossLib ? ' [cross]' : ''} shared=${shared}${missing.length ? ' MISSING ' + missing.join(',') : ''}`)
  }
  console.log(bad ? `\n${bad} comparison(s) need attention` : '\nAll published comparisons valid')
  return bad
}

function suggest() {
  for (const lib of LIBS) {
    const dir = join(root, 'src/data/libraries', lib, 'entries/hu')
    const ids = readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3))
    const byLabelSet = new Map()
    for (const id of ids) {
      const labels = labelsOf(lib, id) || []
      const key = labels.slice().sort().join('|')
      if (!byLabelSet.has(key)) byLabelSet.set(key, [])
      byLabelSet.get(key).push(id)
    }
    console.log(`\n[${lib}] entries grouped by identical keyInfo-label set (candidates share rows):`)
    for (const [, group] of byLabelSet) if (group.length > 1) console.log('  ', group.join(', '))
  }
}

if (process.argv.includes('--audit')) process.exit(audit() ? 1 : 0)
else suggest()
```

- [ ] **Step 2: Run the audit (must pass)**

Run: `node scripts/scan-comparison-candidates.mjs --audit`
Expected: every line `OK`, final `All published comparisons valid`, exit 0.

- [ ] **Step 3: Remove the throwaway validator**

Run: `git rm scripts/tmp-validate-comparisons.mjs`

- [ ] **Step 4: Commit**

```bash
git add scripts/scan-comparison-candidates.mjs
git commit -m "tooling(compare): scan-comparison-candidates (audit + suggest) + drop tmp validator"
```

---

## Task 10: Full gate run + prebuilt deploy + live verify

**Files:** none (verification + deploy).

- [ ] **Step 1: Run every gate**

Run: `node --test scripts/test/ && npm run build:prerender && node scripts/check-prerender.mjs && npm run smoke && node scripts/verify-csp.mjs && node scripts/visual-diff.mjs --mode compare`
Expected: all PASS; visual-diff `0.000%` (Phase A adds new pages but does NOT change existing ones — the baseline covers existing routes); CSP clean.

- [ ] **Step 2: Prebuilt deploy (per project SOP — no Turbo, ~$0)**

Run: `npm run build:prerender && node scripts/build-vercel-output.mjs && npx vercel deploy --prebuilt --prod`
Expected: deploy READY.

- [ ] **Step 3: Live curl verify a sample (HU + EN + PL, within + cross + same-id)**

Run: `for u in /osszehasonlitas /osszehasonlitas/anastrozol-vs-letrozol-vs-exemestane /en/compare/hmg-perf-vs-hmg-peptid /pl/porownanie/finasteride-performance-vs-pharmaceutical; do echo "== $u =="; curl -s "https://molekulax.hu$u" | grep -o '<title>[^<]*</title>'; done`
Expected: each returns a 200 with a per-page `<title>`; the EN/PL ones are language-correct.

- [ ] **Step 4: Final commit (if any uncommitted gate tweaks) + tag**

```bash
git tag comparison-v2-phase-a
git push origin master --tags
```

---

## Self-review notes (done by plan author)

- **Spec coverage:** data model (Tasks 1,4,5,6), cross-lib curated dimensions + drift handling (Tasks 1,5,8), per-member lib everywhere (1–5), 29-comparison expansion (5), prerender/sitemap/check/smoke (4,7), scan tool (9), gates + deploy (10). Phases B (visual), C (glossary/tooltips), D (tile badge + entry cross-links) are SEPARATE plans — `comparisonsForEntry` (Task 6) is the only Phase-D dependency landed early because it belongs with the registry.
- **No placeholders:** every code/edit step shows the actual code; titles/topics are concrete (Task 5); the one runtime-verified detail (member `name` casing) is a real read step (Task 0).
- **Type consistency:** `buildComparison(entries, comparison, lang)` used identically in ComparisonPage (Task 2), the unit test (Task 1), and the cross-lib test (Task 8). `members:[{id,lib}]` consistent across registry (4,5), prerender (4), helper (6), tests (1,8). `comparison.dimensions[].{display,match}` shape identical in buildComparison (1), registry cross-lib entries (5), and the candidates JSON.
