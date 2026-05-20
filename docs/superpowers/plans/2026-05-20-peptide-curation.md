# Peptide Library Curation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 5 RICH peptide entries (HCG/HMG/FSH-rec fertility cluster + EPO endurance + GLOW multi-peptide stack), remove 8 slim entries (FGL/Larazotide/MGF/Mod-GRF/P21/Pemvidutide/PDA/Thymulin) with redirect-flash, reciprocate cross-frame `related[]` links between peptide and performance libraries, and introduce a new `composition[]` library-shape field for multi-peptide stacks.

**Architecture:** Hybrid Z-shape execution — Phase A infra inline (shape, adapter, components, validator); Phase B inline anchor entry (HCG-peptid); Phase C inline removal + cross-link + retrofit; Phase D 4 parallel `general-purpose` subagents (HMG/FSH-rec/EPO/GLOW); Phase E inline reconciliation; Phase F single-megapush commit + tag `v0.23-peptide-curation`. Validator-gate pre-commit mandatory.

**Tech Stack:** React 18 + Vite 5 + Tailwind 3, Phase-12 per-lang body file architecture (flat-string default-export per `entries/{hu,en,pl}/<id>.js`), Workbox PWA precache, Node 20.18, `general-purpose` subagent type via Agent tool.

**Spec:** [`docs/superpowers/specs/2026-05-20-peptide-curation.md`](../specs/2026-05-20-peptide-curation.md)

---

## Reference Anchors (cite these in subagent prompts)

- **Per-lang body file precedent (clinical T4):** [`src/data/libraries/performance/entries/hu/hcg-perf.js`](../../../src/data/libraries/performance/entries/hu/hcg-perf.js)
- **Per-lang body file precedent (peptide):** [`src/data/libraries/peptides/entries/hu/tesamorelin.js`](../../../src/data/libraries/peptides/entries/hu/tesamorelin.js)
- **Stack-entry precedent (2-component):** [`src/data/libraries/peptides/entries/hu/cjc-1295-ipamorelin.js`](../../../src/data/libraries/peptides/entries/hu/cjc-1295-ipamorelin.js)
- **Adapter passthrough rule:** [`src/components/library/adaptLibraryEntry.js:1056-1060`](../../../src/components/library/adaptLibraryEntry.js#L1056-L1060)
- **Library shape JSDoc:** [`src/data/libraries/shape.js:114-117`](../../../src/data/libraries/shape.js#L114-L117) (anecdote precedent)
- **EntryDetailRoute useEffect:** [`src/components/library/EntryDetailRoute.jsx:62-95`](../../../src/components/library/EntryDetailRoute.jsx#L62-L95)

---

## Phase A — Infrastructure (Tasks 1-9, inline ~15 min)

### Task 1: Library shape extension

**Files:**
- Modify: `src/data/libraries/shape.js` (insert at line 117, after the `anecdote` JSDoc block)

- [ ] **Step 1.1: Add `deprecatedIds` + `composition` JSDoc**

Insert after line 117 in `src/data/libraries/shape.js`:

```js
 *
 * Post-roadmap 2026-05-20 — Peptide curation (optional):
 * @property {Array<{id: string, role: string, typicalDose: string}>} [composition]
 *   Multi-peptide stack composition. Each entry MUST reference another entry
 *   in the same library (validator enforces). `role` and `typicalDose` are
 *   post-Phase-12 flat-strings per lang. CompositionSection.jsx renders the
 *   array as clickable component-cards. Null/missing → section not rendered.
 *   See [[Composition_Field_New_Schema]].
 */
```

And insert after line 159 in the `Library` typedef (after the `features` property):

```js
 * @property {string[]} [deprecatedIds] Post-roadmap 2026-05-20 — Hard-removed entry
 *   IDs. EntryDetailRoute renders RedirectFlash for deep-links to these IDs and
 *   redirects to library top after 1.8s. See [[Deprecation_Redirect_Flash_Pattern]].
```

- [ ] **Step 1.2: Commit**

```bash
git add src/data/libraries/shape.js
git commit -m "feat(shape): add composition[] + deprecatedIds[] fields to library shape

Composition supports multi-peptide stack entries (GLOW, cjc-1295-ipamorelin).
DeprecatedIds drives redirect-flash for hard-removed entry deep-links.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 2: Deprecated IDs module

**Files:**
- Create: `src/data/libraries/peptides/deprecated.js`

- [ ] **Step 2.1: Create the file**

Create `src/data/libraries/peptides/deprecated.js`:

```js
// Post-roadmap 2026-05-20 — Hard-removed peptide entry IDs.
// Deep-links to these slugs render RedirectFlash + redirect to library top
// after 1.8s. EntryDetailRoute checks `library.deprecatedIds.includes(parsed.id)`
// BEFORE attempting loadEntry().
//
// These entries were removed in tag `v0.23-peptide-curation` as a product
// curation decision (slim/low-evidence + not core to library purpose).

export const DEPRECATED_PEPTIDE_IDS = [
  'fgl',
  'larazotide',
  'mgf',
  'mod-grf-1-29',
  'p21',
  'pemvidutide',
  'pentadeca-arginate',
  'thymulin',
]
```

- [ ] **Step 2.2: Verify import works (no commit yet, will commit with Task 3)**

```bash
node -e "import('./src/data/libraries/peptides/deprecated.js').then(m => console.log(m.DEPRECATED_PEPTIDE_IDS.length))"
```
Expected output: `8`

---

### Task 3: Library object extension (peptides/index.js)

**Files:**
- Modify: `src/data/libraries/peptides/index.js` (head imports + library object export)

- [ ] **Step 3.1: Add import**

Locate the import block at the top of `src/data/libraries/peptides/index.js` (around line 6-9, with `CATEGORIES`, `getPeptideCategories`, etc.). Add this line after the existing imports:

```js
import { DEPRECATED_PEPTIDE_IDS } from './deprecated.js'
```

- [ ] **Step 3.2: Add `deprecatedIds` field to default export**

Find the `export default { ... }` library object at the bottom of the file. Add this field inside it (after the `features` block, before the closing `}`):

```js
  deprecatedIds: DEPRECATED_PEPTIDE_IDS,
```

- [ ] **Step 3.3: Verify build still passes**

```bash
npm run build
```
Expected: build succeeds (precache still references current 58 peptides — no removals yet).

- [ ] **Step 3.4: Commit**

```bash
git add src/data/libraries/peptides/deprecated.js src/data/libraries/peptides/index.js
git commit -m "feat(peptides): wire deprecatedIds into library object

DEPRECATED_PEPTIDE_IDS module + library.deprecatedIds field. Hard-removal
of the 8 entry data files comes in Task 13.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 4: Categories extension

**Files:**
- Modify: `src/data/libraries/peptides/categories.js` (CATEGORIES array, around line 5-40)

- [ ] **Step 4.1: Append 2 new categories**

At the end of the `CATEGORIES` array (before the closing `]`), add 2 entries:

```js
  {
    id: 'hpta-fertility',
    accent: '#fbbf24',
    label: { hu: 'Termékenység / HPTA-támogatás', en: 'Fertility / HPTA Support', pl: 'Płodność / wsparcie HPTA' },
  },
  {
    id: 'endurance',
    accent: '#f87171',
    label: { hu: 'Állóképesség / Oxigéntranszport', en: 'Endurance / Oxygen Transport', pl: 'Wytrzymałość / transport tlenu' },
  },
```

- [ ] **Step 4.2: Commit**

```bash
git add src/data/libraries/peptides/categories.js
git commit -m "feat(peptides): add hpta-fertility + endurance categories

For HCG/HMG/FSH-rec (fertility) and EPO (endurance) entries.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 5: Adapter passthrough

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js:1060` (after the `anecdote` line)

- [ ] **Step 5.1: Add `composition` passthrough line**

Insert this block after line 1060 (after the `anecdote: peptide.anecdote || null,` line and its comment block):

```js
 // ─── Post-roadmap 2026-05-20 passthrough: Composition[] multi-peptide stack.
 //     Array of {id, role, typicalDose}; null when entry is not a stack.
 //     CompositionSection.jsx renders component-cards with deep-link clicks.
 //     See [[feedback_adapter_passthrough]].
 composition: peptide.composition || null,
```

- [ ] **Step 5.2: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js
git commit -m "feat(adapter): passthrough composition[] field

Per the adapter-allowlist rule — new optional Entry field requires explicit
passthrough or EntryDetail receives undefined.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 6: uiStrings extension (6 new keys × 3 langs = 18 strings)

**Files:**
- Modify: `src/i18n/uiStrings-hu.js`
- Modify: `src/i18n/uiStrings-en.js`
- Modify: `src/i18n/uiStrings-pl.js`

- [ ] **Step 6.1: Add 6 keys to `uiStrings-hu.js`**

Append at the end of the default-export object (before the closing `}`), preserving the file's existing key-grouping pattern:

```js
  'entry.deprecated.eyebrow': 'Elavult entry',
  'entry.deprecated.title': 'Ez az entry már nem elérhető',
  'entry.deprecated.body': 'Ezt a peptidet eltávolítottuk a könyvtárból. Visszairányítunk a peptid könyvtár tetejére…',
  'entry.composition.eyebrow': 'Összetétel',
  'entry.composition.title': 'Ez a stack az alábbi peptideket tartalmazza',
  'entry.composition.role': 'Szerep',
```

- [ ] **Step 6.2: Add 6 keys to `uiStrings-en.js`**

```js
  'entry.deprecated.eyebrow': 'Deprecated entry',
  'entry.deprecated.title': 'This entry is no longer available',
  'entry.deprecated.body': 'We\'ve removed this peptide from the library. Redirecting you to the peptide library top…',
  'entry.composition.eyebrow': 'Composition',
  'entry.composition.title': 'This stack contains the following peptides',
  'entry.composition.role': 'Role',
```

- [ ] **Step 6.3: Add 6 keys to `uiStrings-pl.js`**

```js
  'entry.deprecated.eyebrow': 'Wpis nieaktualny',
  'entry.deprecated.title': 'Ten wpis nie jest już dostępny',
  'entry.deprecated.body': 'Usunęliśmy ten peptyd z biblioteki. Przekierowujemy do góry biblioteki peptydów…',
  'entry.composition.eyebrow': 'Skład',
  'entry.composition.title': 'Ten stack zawiera następujące peptydy',
  'entry.composition.role': 'Rola',
```

- [ ] **Step 6.4: Verify parity (all 3 files have same key count)**

```bash
node -e "const h=require('./src/i18n/uiStrings-hu.js').default; const e=require('./src/i18n/uiStrings-en.js').default; const p=require('./src/i18n/uiStrings-pl.js').default; console.log('hu:'+Object.keys(h).length, 'en:'+Object.keys(e).length, 'pl:'+Object.keys(p).length)"
```
Expected: all three counts equal (217 — was 211 pre-add).

- [ ] **Step 6.5: Commit**

```bash
git add src/i18n/uiStrings-hu.js src/i18n/uiStrings-en.js src/i18n/uiStrings-pl.js
git commit -m "feat(i18n): add 6 uiStrings keys for deprecated + composition sections

deprecated.{eyebrow,title,body} for RedirectFlash;
composition.{eyebrow,title,role} for CompositionSection.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 7: RedirectFlash component

**Files:**
- Create: `src/components/library/RedirectFlash.jsx`

- [ ] **Step 7.1: Create the component**

Create `src/components/library/RedirectFlash.jsx`:

```jsx
import { useLang } from '../../i18n/LanguageContext'

/**
 * Full-page flash render for deprecated entry deep-links.
 * Visible for 1.8s, then EntryDetailRoute redirects to #library.
 * The deprecatedId is shown as a small subtitle for transparency.
 */
export default function RedirectFlash({ deprecatedId }) {
  const { t } = useLang()
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: 'var(--bg-modal-backdrop)' }}>
      <div className="glass max-w-md w-full p-8 text-center rounded-2xl">
        <div className="text-xs uppercase tracking-wider mb-3 opacity-70"
          style={{ color: 'var(--accent)' }}>
          {t('entry.deprecated.eyebrow')}
        </div>
        <h2 className="text-2xl font-semibold mb-2">
          {t('entry.deprecated.title')}
        </h2>
        <p className="text-sm opacity-80 mb-4">
          {t('entry.deprecated.body')}
        </p>
        <code className="text-xs opacity-50 block mb-6">{deprecatedId}</code>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin opacity-60" />
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 7.2: Commit**

```bash
git add src/components/library/RedirectFlash.jsx
git commit -m "feat(library): RedirectFlash component for deprecated entry deep-links

Full-page GlassCard with i18n eyebrow + title + body + spinner.
Mounted by EntryDetailRoute (Task 9) for 1.8s before redirecting.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 8: CompositionSection component

**Files:**
- Create: `src/components/library/CompositionSection.jsx`

- [ ] **Step 8.1: Create the component**

Create `src/components/library/CompositionSection.jsx`:

```jsx
import { ChevronRight } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { useLibrary } from '../../context/LibraryContext'

/**
 * Renders multi-peptide stack composition as clickable component cards.
 * Each card deep-links to the component entry (#entry/peptides/<id>).
 *
 * `composition` is null when the entry is not a stack — return null.
 * Each composition item is {id, role, typicalDose} where id MUST reference
 * an entry in the same library's LIBRARY_ENTRY_META (validator-enforced).
 */
export default function CompositionSection({ composition, accent }) {
  const { t } = useLang()
  const { library } = useLibrary()

  if (!composition || !Array.isArray(composition) || composition.length === 0) {
    return null
  }
  if (!library?.entries) return null

  const metaById = Object.fromEntries(
    library.entries.map((meta) => [meta.id, meta])
  )

  const handleClick = (id) => {
    window.location.hash = `entry/peptides/${id}`
  }

  return (
    <section className="mt-8 mb-12 px-4">
      <div className="glass rounded-2xl p-6">
        <div className="text-xs uppercase tracking-wider mb-2 opacity-70"
          style={{ color: accent }}>
          {t('entry.composition.eyebrow')}
        </div>
        <h2 className="text-xl font-semibold mb-6">
          {t('entry.composition.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {composition.map((item) => {
            const meta = metaById[item.id]
            const displayName = meta?.name || item.id
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-left p-4 rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  background: 'var(--tint-medium)',
                  border: '1px solid var(--tint-medium-border)',
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-base"
                    style={{ color: meta?.accentColor || accent }}>
                    {displayName}
                  </h3>
                  <ChevronRight className="w-4 h-4 opacity-50 mt-1" />
                </div>
                <div className="text-xs opacity-70 mb-1">
                  <span className="uppercase tracking-wide opacity-60">
                    {t('entry.composition.role')}:
                  </span>{' '}
                  {item.role}
                </div>
                <div className="text-xs font-mono opacity-80">{item.typicalDose}</div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 8.2: Commit**

```bash
git add src/components/library/CompositionSection.jsx
git commit -m "feat(library): CompositionSection for multi-peptide stack entries

Renders composition[] as clickable component cards. Each card deep-links
to the component entry via hash navigation. Returns null when composition
is null/empty (graceful skip for non-stack entries).

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 9: EntryDetailRoute deprecation check + EntryDetail mount

**Files:**
- Modify: `src/components/library/EntryDetailRoute.jsx` (imports, state, useEffect at line 62-95, render fallback)
- Modify: `src/components/library/EntryDetail.jsx` (imports + render at line 1504)

- [ ] **Step 9.1: Add imports to EntryDetailRoute**

Add this import to `src/components/library/EntryDetailRoute.jsx` near the existing imports (around line 7-10):

```jsx
import RedirectFlash from './RedirectFlash'
```

- [ ] **Step 9.2: Add `redirectId` state**

After line 46 (`const [retryCounter, setRetryCounter] = useState(0)`), add:

```jsx
  const [redirectId, setRedirectId] = useState(null)
```

- [ ] **Step 9.3: Add deprecation check to useEffect**

Replace the useEffect at lines 62-95 in `src/components/library/EntryDetailRoute.jsx`:

```jsx
  useEffect(() => {
    let cancelled = false
    if (!parsed) {
      setEntry(null)
      setError(null)
      setLoading(false)
      setRedirectId(null)
      return
    }

    // Deprecated entry redirect-flash (post-roadmap 2026-05-20).
    // Library.deprecatedIds is set in peptides/index.js. EntryDetailRoute
    // shows RedirectFlash for 1.8s, then hash-navs to library top.
    const lib = getLibrary(parsed.library)
    if (lib?.deprecatedIds?.includes(parsed.id)) {
      setRedirectId(parsed.id)
      setEntry(null)
      setError(null)
      setLoading(false)
      const timer = setTimeout(() => {
        if (!cancelled) {
          window.location.hash = 'library'
        }
      }, 1800)
      return () => {
        cancelled = true
        clearTimeout(timer)
      }
    }
    setRedirectId(null)

    const cached = getCachedEntry(parsed.library, parsed.id, lang)
    if (cached) {
      setEntry(cached)
      setError(null)
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const e = await loadEntry(parsed.library, parsed.id, lang)
        if (!cancelled) {
          setEntry(e)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err)
          setEntry(null)
          setLoading(false)
        }
      }
    })()
    return () => { cancelled = true }
  }, [parsed?.library, parsed?.id, lang, loadEntry, getCachedEntry, retryCounter])
```

- [ ] **Step 9.4: Add RedirectFlash render branch**

Find the render section of `EntryDetailRoute.jsx` (after the useEffects). Before the existing return statement (search for `return (` after line 190), add this early-return:

```jsx
  if (redirectId) {
    return <RedirectFlash deprecatedId={redirectId} />
  }
```

- [ ] **Step 9.5: Add CompositionSection import to EntryDetail**

In `src/components/library/EntryDetail.jsx`, add this import near line 29 (next to `AnecdoteSection`):

```jsx
import CompositionSection from './CompositionSection'
```

- [ ] **Step 9.6: Mount CompositionSection in EntryDetail**

Find line 1504 in `src/components/library/EntryDetail.jsx` (the `<AnecdoteSection peptide={peptide} accent={accent} />` line). Insert the CompositionSection ABOVE it (composition is structurally part of the stack-overview, logically before the anecdote):

```jsx
              <CompositionSection composition={peptide.composition} accent={accent} />
              <AnecdoteSection peptide={peptide} accent={accent} />
```

- [ ] **Step 9.7: Build gate**

```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 9.8: Commit**

```bash
git add src/components/library/EntryDetailRoute.jsx src/components/library/EntryDetail.jsx
git commit -m "feat(entry-detail): deprecation redirect-flash + CompositionSection mount

EntryDetailRoute renders RedirectFlash for 1.8s when parsed.id is in
library.deprecatedIds, then hash-navs to #library.
EntryDetail mounts CompositionSection above AnecdoteSection.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase B — Inline Anchor Entry (Task 10, inline ~15 min)

### Task 10: HCG-peptid body files × HU + EN + PL

**Files:**
- Create: `src/data/libraries/peptides/entries/hu/hcg-peptid.js`
- Create: `src/data/libraries/peptides/entries/en/hcg-peptid.js`
- Create: `src/data/libraries/peptides/entries/pl/hcg-peptid.js`

Schema anchor: [`src/data/libraries/performance/entries/hu/hcg-perf.js`](../../../src/data/libraries/performance/entries/hu/hcg-perf.js) (existing HCG `-perf` body, ~210 lines, FDA-Pregnyl-anchored).

- [ ] **Step 10.1: Read the `hcg-perf` HU body for structural reference**

```bash
cat src/data/libraries/performance/entries/hu/hcg-perf.js | head -200
```

- [ ] **Step 10.2: Write `entries/hu/hcg-peptid.js`**

Create with the following structure (~210 lines target). All field values authored fresh — the framing is **fertility/HPTA-recovery clinical**, NOT AAS-PCT bridge:

```js
// HCG (Pregnyl / Novarel / Ovidrel) — Humán Chorionic Gonadotropin,
// fertility/HPTA-recovery framing. Cross-frame counterpart of `hcg-perf`
// (AAS-PCT framing in performance lib).
// Sources: FDA Pregnyl SmPC, EMA Ovitrelle SmPC, PubMed Hill 2018
// PMID 29800218 (HCG male fertility), Crosnoe-Shroff 2013 PMID 24327215
// (HCG hypogonadotropic hypogonadism Rx review).

export default {
  "id": "hcg-peptid",
  "name": "HCG (fertilitás)",
  "image": "/peptides/HCG.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Humán Chorionic Gonadotropin — LH-receptor agonist glycoprotein. Fertilitás-indukció (male hypogonadism + IVF), spermatogenezis-restauráció, HPTA-recovery klinikai Rx-keretben.",
  "description": "A HCG (Humán Chorionic Gonadotropin) egy 244 aminosavas glikoprotein (α + β alegység), strukturálisan LH-analóg (~80% szekvencia-identitás β-alegységen). Endogén forrás: placentális szincíciotrophoblast (terhességi alapszövet, csúcs 8-12. hét, vizelet/szérum detect ~10-12 nap fogantatás után).\n\nKlinikai HCG-források: (1) urinary-extracted (uHCG, Pregnyl Organon 1973, Novarel Ferring 1973, Choragon Ferring EU — terhes nők vizeletéből tisztítva); (2) rekombináns (rHCG/choriogonadotropin alfa, Ovidrel Serono/Merck Ovitrelle — CHO-cell expressed, magasabb tisztaság, alacsonyabb immunogenicitás).\n\nFertilitás-keret: a HCG az exogén LH-mimikry által stimulálja a testikuláris Leydig-sejtek intra-testikuláris testosteron-produkcióját (ITT, ~50-100× a szérum-T szint), amely SZÜKSÉGES a spermatogenezishez. Hipogonadotropic hypogonadism + post-AAS HPTA-recovery + IVF male-factor klinikai indikációk.",
  "keyInfo": [
    { "label": "Típus", "value": "Glikoprotein hormon (LH-strukturális analóg, α + β alegység)" },
    { "label": "Mechanizmus", "value": "Leydig-sejt LHCGR-receptor agonist → ITT-stimulus → spermatogenezis" },
    { "label": "Klinikai dózis (male fertility)", "value": "1500-2500 IU subQ/IM 2-3× hetente (típusosan 1500 IU EOD)" },
    { "label": "HPTA-recovery dózis", "value": "500-1500 IU subQ 2× hetente × 4-6 hét, majd SERM-PCT-re átmenet" },
    { "label": "Felezési idő", "value": "uHCG ~24-36 óra, rHCG ~38 óra (longer initial distribution)" },
    { "label": "Onset", "value": "Akut testosterone-emelkedés 24-48 óra; spermatogenezis-recovery 3-6 hónap" },
    { "label": "Tárolás", "value": "Liofilizált 2-8°C; rekonstituált 2-8°C max. 30 nap" }
  ],
  "mechanism": "A HCG identikus β-alegység-LH-mimikrivel a Leydig-sejt LHCGR-receptorra köt, és a cAMP-PKA jelutat aktiválja. Eredmény: cholesterol → pregnenolone → testosteron (StAR + CYP11A1 + 3βHSD + CYP17 + 17βHSD lépéslánc). Az intra-testikuláris testosteron (ITT) ~50-100× a perifériás szérum-T szintje, és KÖZVETLENÜL szükséges a Sertoli-sejt-támogatott spermatogenezishez (FSH-szignál synergyben). Long-term HCG-only protokollok hiányában az FSH-deficit (HMG-rel vagy rFSH-val stack-elve) korlátozza a teljes fertilitás-restaurációt.",
  "dosingInfo": "Klinikai protokollok (fertilitás-Rx, NEM doping):\n• **Male hypogonadotropic hypogonadism (testosteron-restauráció + fertilitás)**: 1500-2500 IU subQ/IM 2-3× hetente × 6-24 hónap. Cél: szérum-T 400-700 ng/dL normalizálása + sperma-koncentráció ≥15 millió/mL.\n• **Spermatogenezis-induction (HCG-monotherapy nem elég)**: HCG 1500-2500 IU 2-3×/hét + HMG (Menopur) 75-150 IU 3×/hét VAGY rFSH (Gonal-F) 150 IU 3×/hét. Időtartam 6-24 hónap.\n• **HPTA-recovery post-androgen-exposure (klinikai Rx-keret, NEM AAS-PCT)**: 500-1500 IU subQ 2-3×/hét × 4-6 hét, majd SERM (Clomid 25-50 mg/nap × 4 hét) átmenet.\n• **IVF male-factor (azoospermia/oligospermia)**: HCG + HMG kombináció, dosing individuális.\n\nFontos: a HCG WADA-tiltott (S2 Peptide Hormones) férfiaknál egész évben, in + out-of-competition. NEM versenyzőknél NEM probléma, de fertilitás-Rx-recept dokumentáció ajánlott TUE céljából.",
  "studies": [
    {
      "tag": "Klinikai review",
      "tagColor": "rgba(251,191,36,0.16)",
      "tagText": "#fbbf24",
      "title": "Use of human chorionic gonadotropin in men",
      "authors": "Crosnoe LE, Grober E, Ohl D, Kim ED",
      "journal": "Translational Andrology and Urology 2013;2(3):195-202",
      "pmid": "24327215"
    },
    {
      "tag": "Cohort study",
      "tagColor": "rgba(251,191,36,0.16)",
      "tagText": "#fbbf24",
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "International Journal of Impotence Research 2018;30:262-269",
      "pmid": "29800218"
    },
    {
      "tag": "Mechanism review",
      "tagColor": "rgba(251,191,36,0.16)",
      "tagText": "#fbbf24",
      "title": "Intratesticular testosterone concentration in normospermic and infertile men",
      "authors": "Coviello AD, Matsumoto AM, Bremner WJ, et al.",
      "journal": "Journal of Clinical Endocrinology and Metabolism 2005;90(5):2595-2602",
      "pmid": "15713725"
    }
  ],
  "legalStatus": "Magyarország: vényköteles (Pregnyl, Choragon — Ferring/Organon). EU: Rx (Pregnyl, Ovitrelle, Choragon). USA: Rx (Pregnyl, Novarel, Ovidrel). Lengyelország: Rx. WADA: TILTOTT egész évben férfiak esetén (S2.1 Peptide Hormones). Sportoló esetén TUE (Therapeutic Use Exemption) szükséges.",
  "onsetTime": "Akut testosterone-emelkedés 24-48 óra. Spermatogenezis-recovery 3-6 hónap (HCG-mono), 6-24 hónap (HCG + FSH/HMG stack).",
  "halfLife": "uHCG (Pregnyl/Choragon) ~24-36 óra; rHCG (Ovidrel/Ovitrelle) ~38 óra.",
  "interactionsWith": [
    "HMG / rFSH (spermatogenezis-induction synergy — Sertoli-FSH + Leydig-LH komplementer)",
    "Aromatáz-inhibitor (Anastrozol 0.5 mg 2×/hét opcionális, ha E2 > 50 pg/mL HCG-alatti aromatizációból)",
    "SERM (Clomid 50 mg/nap) — sequential PCT-átmenet HCG után",
    "Gonadorelin (GnRH-analóg) — alternatív HPTA-restart, NEM kombinálandó, választani kell"
  ],
  "wadaStatus": "banned",
  "related": [
    "hmg-peptid",
    "fsh-rec-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "faq": [
    {
      "q": "Mi a különbség a `hcg-peptid` és a `hcg-perf` entry között?",
      "a": "Azonos molekula, eltérő framing. `hcg-peptid` (ez az entry) klinikai fertilitás + HPTA-Rx kontextusban tárgyalja: male hypogonadism, IVF, spermatogenezis-induction. `hcg-perf` az AAS-PCT cycle-support keretben: testikulár-atrófia-prevention mid-cycle, post-cycle bridge SERM-átmenet előtt. Ugyanazt a Pregnyl/Ovidrel vial-t veszi meg a felhasználó, csak más narratívával olvassa."
    },
    {
      "q": "Mennyi idő alatt áll vissza a fertilitás HCG-protokoll után?",
      "a": "HCG-mono (1500-2500 IU 2-3×/hét) férfi hypogonadism esetén: szérum-T normalizálódik 4-8 hét alatt; sperma-koncentráció emelkedés 3-6 hónap. Ha FSH-deficit is van (post-AAS gyakori), HCG + HMG (75-150 IU 3×/hét) vagy HCG + rFSH (150 IU 3×/hét) stack szükséges, 6-24 hónap időtartammal a teljes spermatogenezis-restaurációhoz."
    },
    {
      "q": "Miért tiltott WADA-szabályok szerint férfiaknál?",
      "a": "Mivel az exogén HCG növeli az endogén testosteron-produkciót (NEM injektált exogén T, hanem stimulált endogén T) — ez egy 'natural' testosteron-boost mechanizmus, amely megkerüli a direct-T-injekció detektálási profilját. WADA 2014 óta egész évben tiltja férfiaknál (S2.1). Nőknél megengedett (endogén HCG normál terhességben jelen van, így detection-confusion lenne)."
    }
  ],
  "anecdote": null
}
```

Note: This is a **template structure**. Actual body must be filled with peer-reviewed-sourced content (FDA Pregnyl SmPC + PubMed PMIDs as cited). ~210 lines target. The `image` path `/peptides/HCG.png` will get a placeholder fallback if the file doesn't exist (current behavior).

- [ ] **Step 10.3: Write `entries/en/hcg-peptid.js`**

Identical structure to HU but with English content. Same `id`, `name` becomes `"HCG (Fertility)"`, `shortDesc` and all body fields translated. Same `related[]`, `wadaStatus`, `image`, `accentColor`, `tagColor`. **Translate professional medical Hungarian → English** preserving FDA/EMA/PMID citations verbatim.

- [ ] **Step 10.4: Write `entries/pl/hcg-peptid.js`**

Identical structure, Polish content. `name`: `"HCG (Płodność)"`. Same identifiers and arrays. PMIDs verbatim.

- [ ] **Step 10.5: Add meta record to `peptides/index.js`**

Open `src/data/libraries/peptides/index.js` and find `LIBRARY_ENTRY_META` array. Append this record at the end (before the closing `]`):

```js
  {
    "id": "hcg-peptid",
    "name": "HCG (fertilitás)",
    "image": "/peptides/HCG.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.16)",
    "shortDesc": {
      "hu": "LH-receptor agonist glycoprotein: fertilitás-induction és HPTA-recovery",
      "en": "LH-receptor agonist glycoprotein: fertility induction and HPTA recovery",
      "pl": "Agonista receptora LH glikoproteinowy: indukcja płodności i regeneracja HPTA"
    },
    "tier": 4
  },
```

Then update the `entryCategoryMap` object (find it in the same file). Add:

```js
  'hcg-peptid': ['growth-factors', 'recovery', 'hpta-fertility'],
```

- [ ] **Step 10.6: Build + validator gate**

```bash
npm run build
node scripts/validate-library-meta.mjs
```
Expected: build PASS, validator reports 4 lib × 59 peptides (58 + 1) entries.

- [ ] **Step 10.7: Commit**

```bash
git add src/data/libraries/peptides/entries/hu/hcg-peptid.js \
        src/data/libraries/peptides/entries/en/hcg-peptid.js \
        src/data/libraries/peptides/entries/pl/hcg-peptid.js \
        src/data/libraries/peptides/index.js
git commit -m "feat(peptides): HCG-peptid RICH entry (T4) — fertility/HPTA-recovery framing

Cross-frame counterpart of hcg-perf (performance lib AAS-PCT framing).
Sources: FDA Pregnyl/Ovidrel SmPC, Crosnoe-Shroff 2013, Hill 2018,
Coviello 2005. WADA-banned year-round for males.
Categories: growth-factors, recovery, hpta-fertility.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase C — Hard Removal + Cross-Link + Retrofit (Tasks 11-15, inline ~15 min)

### Task 11: Scrub-deprecated-related script

**Files:**
- Create: `scripts/scrub-deprecated-related.mjs`

- [ ] **Step 11.1: Create the script**

Create `scripts/scrub-deprecated-related.mjs`:

```js
// One-shot cleanup: remove deprecated peptide IDs from any entry's `related[]`.
// Used post-curation to eliminate dangling references after Task 13 deletes
// the 8 entry body files.
//
// Run: node scripts/scrub-deprecated-related.mjs

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', 'src', 'data', 'libraries', 'peptides', 'entries')

const DEPRECATED = [
  'fgl', 'larazotide', 'mgf', 'mod-grf-1-29',
  'p21', 'pemvidutide', 'pentadeca-arginate', 'thymulin',
]

const langs = ['hu', 'en', 'pl']
let totalModified = 0
let totalIdsRemoved = 0

for (const lang of langs) {
  const dir = join(ROOT, lang)
  const files = readdirSync(dir).filter(f => f.endsWith('.js'))

  for (const file of files) {
    const path = join(dir, file)
    const src = readFileSync(path, 'utf8')

    // Function-constructor object-eval (Phase 11 populate-anecdotes pattern).
    // Body files are `export default { ... }` so we strip the export prefix.
    const objSrc = src.replace(/^[\s\S]*?export\s+default\s+/, '').trim()
    let obj
    try {
      obj = new Function('return ' + objSrc.replace(/;?\s*$/, ''))()
    } catch (err) {
      console.error(`Parse fail: ${lang}/${file}`, err.message)
      continue
    }

    if (!obj.related || !Array.isArray(obj.related)) continue

    const before = obj.related.length
    obj.related = obj.related.filter(id => !DEPRECATED.includes(id))
    const removed = before - obj.related.length
    if (removed === 0) continue

    totalIdsRemoved += removed
    totalModified += 1

    // Rebuild file with header preserved
    const headerMatch = src.match(/^([\s\S]*?)export\s+default\s+/)
    const header = headerMatch ? headerMatch[1] : ''
    const rebuilt = header + 'export default ' + JSON.stringify(obj, null, 2) + '\n'
    writeFileSync(path, rebuilt, 'utf8')
    console.log(`Scrubbed ${lang}/${file}: removed ${removed} dangling IDs`)
  }
}

console.log(`\nDone. Modified ${totalModified} files; removed ${totalIdsRemoved} dangling related IDs.`)
```

- [ ] **Step 11.2: Run the script**

```bash
node scripts/scrub-deprecated-related.mjs
```
Expected: console output lists any modified files; if no peptide entries had deprecated IDs in their `related[]`, output: `Done. Modified 0 files; removed 0 dangling related IDs.` (also fine).

- [ ] **Step 11.3: Commit**

```bash
git add scripts/scrub-deprecated-related.mjs
# Plus any body files modified by the script:
git add -u src/data/libraries/peptides/entries/
git commit -m "chore(peptides): scrub-deprecated-related script + sweep peptide entries

One-shot cleanup script eliminates dangling related[] refs to the 8
deprecated entry IDs (Task 13 hard-removes the body files).

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 12: Validator extensions

**Files:**
- Modify: `scripts/validate-library-meta.mjs`

- [ ] **Step 12.1: Add dangling-related warning + composition-id check**

Open `scripts/validate-library-meta.mjs`. Find the main validation loop (per-library, per-entry). At the end of the per-entry validation block (before the loop's closing brace), insert these two new rules:

```js
    // Post-roadmap 2026-05-20 — Dangling related-id warning.
    // Cross-library lookups allowed (peptide → performance ok).
    if (entry.related && Array.isArray(entry.related)) {
      for (const refId of entry.related) {
        const foundInAny = Object.values(allLibraryMeta).some((metaArr) =>
          metaArr.some((m) => m.id === refId)
        )
        if (!foundInAny) {
          console.warn(`  ⚠️  ${library}/${entry.id} related[] references missing ID: ${refId}`)
        }
      }
    }

    // Post-roadmap 2026-05-20 — Composition-id existence check (hard-fail).
    // Stack-entry composition MUST reference IDs in the SAME library only.
    if (entry.composition && Array.isArray(entry.composition)) {
      const sameLibIds = new Set((allLibraryMeta[library] || []).map((m) => m.id))
      for (const item of entry.composition) {
        if (!sameLibIds.has(item.id)) {
          console.error(`  ❌ ${library}/${entry.id} composition[] references missing same-library ID: ${item.id}`)
          hasErrors = true
        }
      }
    }
```

Note: variable names `allLibraryMeta`, `hasErrors`, and the loop's structure must match what's already in the validator. If `allLibraryMeta` is named differently (e.g., `libraryMetaMap`), substitute accordingly. **Read the existing validator before this edit to confirm the variable names + loop shape.**

- [ ] **Step 12.2: Run validator**

```bash
node scripts/validate-library-meta.mjs
```
Expected: PASS with no new warnings (post-scrub state). Any warnings indicate a related-id reference to a non-existent entry — investigate.

- [ ] **Step 12.3: Commit**

```bash
git add scripts/validate-library-meta.mjs
git commit -m "feat(validator): dangling-related warning + composition-id existence check

Two new rules: (1) related[] cross-library warnings for missing IDs;
(2) composition[] hard-fail if any item.id missing from same library.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 13: Delete 8 deprecated entry body files + meta records

**Files:**
- Delete: `src/data/libraries/peptides/entries/{hu,en,pl}/{fgl,larazotide,mgf,mod-grf-1-29,p21,pemvidutide,pentadeca-arginate,thymulin}.js` (24 files)
- Modify: `src/data/libraries/peptides/index.js` (remove 8 meta records + 8 entryCategoryMap keys)

- [ ] **Step 13.1: Delete 24 body files**

```bash
cd src/data/libraries/peptides/entries
for lang in hu en pl; do
  for id in fgl larazotide mgf mod-grf-1-29 p21 pemvidutide pentadeca-arginate thymulin; do
    rm "$lang/$id.js"
  done
done
cd ../../../../..
```

- [ ] **Step 13.2: Remove 8 meta records from `peptides/index.js`**

Open `src/data/libraries/peptides/index.js`. In the `LIBRARY_ENTRY_META` array, locate and delete the 8 records with `id`:
- `fgl`
- `larazotide`
- `mgf`
- `mod-grf-1-29`
- `p21`
- `pemvidutide`
- `pentadeca-arginate`
- `thymulin`

Each record is a multi-line object — delete the full `{ ... },` block for each.

- [ ] **Step 13.3: Remove 8 entries from `entryCategoryMap`**

In the same file, find the `entryCategoryMap` object. Remove these 8 keys:

```js
  'fgl': [...],
  'larazotide': [...],
  'mgf': [...],
  'mod-grf-1-29': [...],
  'p21': [...],
  'pemvidutide': [...],
  'pentadeca-arginate': [...],
  'thymulin': [...],
```

- [ ] **Step 13.4: Build + validator gate**

```bash
npm run build
node scripts/validate-library-meta.mjs
```
Expected:
- Build PASS, precache shows 24 fewer chunks (~70 KiB lighter).
- Validator: 4 lib × 51 peptides (58 − 8 + 1 from Task 10) entries. No dangling-related warnings.

- [ ] **Step 13.5: Commit**

```bash
git add -u src/data/libraries/peptides/
git commit -m "chore(peptides): remove 8 deprecated entries (24 body files + meta records)

Removes: fgl, larazotide, mgf, mod-grf-1-29, p21, pemvidutide,
pentadeca-arginate, thymulin. Product-curation decision (slim/low-evidence,
not core to library). Deep-links to these slugs now render RedirectFlash
+ redirect to library top (Task 9 EntryDetailRoute).

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 14: Cross-link reciprocation (tesamorelin/semaglutide/retatrutide × 3 lang = 9 files)

**Files:**
- Modify: `src/data/libraries/peptides/entries/{hu,en,pl}/tesamorelin.js` (3 files)
- Modify: `src/data/libraries/peptides/entries/{hu,en,pl}/semaglutide.js` (3 files)
- Modify: `src/data/libraries/peptides/entries/{hu,en,pl}/retatrutide.js` (3 files)

- [ ] **Step 14.1: Check current `related[]` state on each entry**

```bash
for entry in tesamorelin semaglutide retatrutide; do
  for lang in hu en pl; do
    echo "=== $lang/$entry.js ==="
    grep -A 6 '"related":' "src/data/libraries/peptides/entries/$lang/$entry.js" || echo "  (no related[])"
  done
done
```

- [ ] **Step 14.2: For each file, append the `-perf` counterpart to `related[]`**

**Case A** (if `related: [...]` exists): append the `-perf` ID to the array, e.g.:
```js
"related": [
  ...existing IDs...,
  "tesamorelin-perf"
]
```

**Case B** (if no `related[]` field): insert before the closing `}`:
```js
,
"related": ["tesamorelin-perf"]
```

(Adjust per-file; you must read each before edit to determine which case applies. Use Edit tool with precise old_string context to avoid mis-matching.)

The 9 IDs to append:
- `tesamorelin` × 3 lang ← `tesamorelin-perf`
- `semaglutide` × 3 lang ← `semaglutide-perf`
- `retatrutide` × 3 lang ← `retatrutide-perf`

- [ ] **Step 14.3: Build + validator gate**

```bash
npm run build
node scripts/validate-library-meta.mjs
```
Expected: PASS. Validator may print informational lines for cross-library related lookups; no warnings expected since `tesamorelin-perf` etc. exist in performance lib.

- [ ] **Step 14.4: Commit**

```bash
git add src/data/libraries/peptides/entries/hu/tesamorelin.js \
        src/data/libraries/peptides/entries/en/tesamorelin.js \
        src/data/libraries/peptides/entries/pl/tesamorelin.js \
        src/data/libraries/peptides/entries/hu/semaglutide.js \
        src/data/libraries/peptides/entries/en/semaglutide.js \
        src/data/libraries/peptides/entries/pl/semaglutide.js \
        src/data/libraries/peptides/entries/hu/retatrutide.js \
        src/data/libraries/peptides/entries/en/retatrutide.js \
        src/data/libraries/peptides/entries/pl/retatrutide.js
git commit -m "feat(peptides): cross-frame related[] reciprocation peptid → -perf

Tesamorelin/Semaglutide/Retatrutide peptid entries now link to their
performance-lib -perf counterparts. Previously only the -perf side linked
back to peptid (one-way). EntryDetail's related-grid will now show the
performance entry from the peptid side too.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 15: cjc-1295-ipamorelin composition[] retrofit (3 files)

**Files:**
- Modify: `src/data/libraries/peptides/entries/{hu,en,pl}/cjc-1295-ipamorelin.js` (3 files)

- [ ] **Step 15.1: Add `composition[]` field to HU body**

Open `src/data/libraries/peptides/entries/hu/cjc-1295-ipamorelin.js`. Inside the `export default { ... }` object, add this field (placement: near the top, after `description` or `keyInfo`):

```js
  "composition": [
    { "id": "cjc-1295", "role": "GHRH analóg — tartós GH-pulzus alap", "typicalDose": "100-200 µg subQ naponta" },
    { "id": "ipamorelin", "role": "Szelektív GH-szekretagóg — pulzus-amplifikátor", "typicalDose": "100-200 µg subQ naponta" }
  ],
```

- [ ] **Step 15.2: Add `composition[]` to EN body**

`src/data/libraries/peptides/entries/en/cjc-1295-ipamorelin.js`:

```js
  "composition": [
    { "id": "cjc-1295", "role": "GHRH analog — sustained GH pulse base", "typicalDose": "100-200 µg subQ daily" },
    { "id": "ipamorelin", "role": "Selective GH secretagogue — pulse amplifier", "typicalDose": "100-200 µg subQ daily" }
  ],
```

- [ ] **Step 15.3: Add `composition[]` to PL body**

`src/data/libraries/peptides/entries/pl/cjc-1295-ipamorelin.js`:

```js
  "composition": [
    { "id": "cjc-1295", "role": "Analog GHRH — podstawa przedłużonego pulsu GH", "typicalDose": "100-200 µg subQ codziennie" },
    { "id": "ipamorelin", "role": "Selektywny sekretagog GH — wzmacniacz pulsu", "typicalDose": "100-200 µg subQ codziennie" }
  ],
```

- [ ] **Step 15.4: Build + validator gate (composition-id check engaged)**

```bash
npm run build
node scripts/validate-library-meta.mjs
```
Expected: validator passes new composition-id existence rule (both `cjc-1295` and `ipamorelin` exist in `peptides/index.js LIBRARY_ENTRY_META`).

- [ ] **Step 15.5: Smoke-test CompositionSection rendering**

```bash
npm run dev
```
Then in browser: open `http://localhost:5173/#entry/peptides/cjc-1295-ipamorelin`. Expected: CompositionSection renders ABOVE AnecdoteSection, with 2 component cards (CJC-1295 + Ipamorelin), each clickable to deep-link.

Ctrl+C the dev server.

- [ ] **Step 15.6: Commit**

```bash
git add src/data/libraries/peptides/entries/hu/cjc-1295-ipamorelin.js \
        src/data/libraries/peptides/entries/en/cjc-1295-ipamorelin.js \
        src/data/libraries/peptides/entries/pl/cjc-1295-ipamorelin.js
git commit -m "feat(peptides): cjc-1295-ipamorelin composition[] retrofit

Existing 2-component stack-entry now uses the new composition[] schema.
CompositionSection renders 2 clickable component cards. Validator
composition-id check enforces component IDs exist in same library.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

## Phase D — Parallel Subagent Dispatch (Task 16, parallel ~25 min)

### Task 16: Dispatch 4 `general-purpose` subagents for HMG/FSH-rec/EPO/GLOW

Each subagent gets a self-contained prompt (no shared context). All 4 run in parallel via `run_in_background: true`.

**Prompt template (substitute per subagent):**

```
You are writing RICH peptide library entry body files for the MolekulaX
project. Create 3 files (HU + EN + PL) for entry `<SLUG>` plus the meta-record
spec for `src/data/libraries/peptides/index.js`.

WORKING DIRECTORY: e:/Website Biz/molekulax

REFERENCE ANCHOR (cite this for schema + tone):
- src/data/libraries/peptides/entries/hu/hcg-peptid.js (just-written T4 precedent)

PHASE-12 SCHEMA RULES:
- Body files are `export default { ... }` flat objects (no language-triplet wrappers).
- File path: src/data/libraries/peptides/entries/{hu,en,pl}/<SLUG>.js
- Required fields: id, name, image, accentColor, tagColor, shortDesc (flat string),
  description, keyInfo[], mechanism, dosingInfo, studies[], legalStatus,
  onsetTime, halfLife, interactionsWith[], wadaStatus, related[], faq[], anecdote.
- Optional: composition[] (stack-entries ONLY).
- `wadaStatus`: 'banned' | 'monitored' | 'allowed' | 'restricted' | null.
- `tier` is NOT in body files (only in LIBRARY_ENTRY_META).
- Image path: use placeholder `/peptides/<NAME>.png` (file existence not required).

ENTRY SPEC (<SLUG>):
<INSERT PER-ENTRY DETAILS FROM SECTION BELOW>

OUTPUT REQUIREMENTS:
1. Create 3 body files (HU + EN + PL) with ~180-220 lines each.
2. Use peer-reviewed sources ONLY: FDA SmPC, EMA SPC, PubMed (cite PMIDs in studies[]).
3. Match tone of `hcg-peptid.js` precedent: technical-but-readable, NO-mocking,
   NO marketing language, clinical-Rx framing.
4. PMIDs must be REAL (don't fabricate).
5. Translate verbatim across HU/EN/PL — preserve identical structure, only
   localize text content.
6. Output the meta-record block (for `LIBRARY_ENTRY_META` array append) at the end
   of your final message as a code block, ready to paste.
7. Output the entryCategoryMap line at the end as a separate code block.

WHEN DONE: write the 3 files, then in your final message print:
- File paths created
- Meta-record append-spec (code block, ready to paste into peptides/index.js)
- entryCategoryMap append-spec (code block)
- Confirmation: "Schema fields validated against hcg-peptid.js precedent."
```

**Subagent A — `hmg-peptid` (HMG fertility T4)**
- **Composition:** None (mono-substance, NOT a stack).
- **Mechanism:** 1:1 FSH+LH activity glycoprotein (urinary postmenopausal extract OR recombinant menotropin); stimulates Leydig + Sertoli cells.
- **Doses:** 75-150 IU subQ 3× weekly (male fertility); 75-300 IU/day (female IVF).
- **Half-life:** 12-20h (FSH), 8-12h (LH).
- **Legal:** Rx (Menopur, Pergonal). WADA: banned.
- **Sources:** Menopur SmPC (Ferring), PubMed Liu 2009 (PMID 19389810 spermatogenesis), ESHRE 2024 guidelines.
- **related[]:** `['hcg-peptid', 'fsh-rec-peptid', 'hmg-perf', 'kisspeptin']`
- **Categories:** `['growth-factors', 'hpta-fertility']`
- **Tier:** 4
- **accentColor:** `#fbbf24` (matches HCG fertility cluster)
- **tagColor:** `rgba(251,191,36,0.16)`
- **Image:** `/peptides/HMG.png`

**Subagent B — `fsh-rec-peptid` (rFSH fertility T4)**
- **Composition:** None.
- **Mechanism:** Pure recombinant FSH (no LH activity); selective Sertoli stim; spermatogenesis-only stack-partner.
- **Doses:** 75-150 IU subQ 3× weekly (male); 75-450 IU/day (IVF).
- **Half-life:** 24-36h.
- **Legal:** Rx (Gonal-F Merck-Serono, Puregon Organon, Follistim MSD). WADA: banned.
- **Sources:** Gonal-F SmPC, Puregon SPC, PubMed Bouloux 2002 (PMID 11744708 spermatogenesis HypoH).
- **related[]:** `['hcg-peptid', 'hmg-peptid', 'fsh-rec-perf', 'kisspeptin']`
- **Categories:** `['growth-factors', 'hpta-fertility']`
- **Tier:** 4
- **accentColor:** `#fbbf24`
- **tagColor:** `rgba(251,191,36,0.16)`
- **Image:** `/peptides/rFSH.png`

**Subagent C — `epo` (Erythropoietin T4)**
- **Composition:** None.
- **Mechanism:** 165-AA glycoprotein cytokine; EPO-R agonist on erythroid progenitors → increased RBC mass + hematocrit + oxygen-carrying capacity.
- **Doses:** 50-100 IU/kg subQ 3×/wk (CKD anemia, target Hb 10-12 g/dL); micro-dosing endurance protocols 100-300 IU/kg/wk (NOT clinical).
- **Half-life:** 4-13h subQ (Epoetin-α); 70-138h (Darbepoetin).
- **Legal:** Rx (Epogen Amgen, Procrit Janssen, Aranesp Amgen, Mircera Roche). WADA: strictly banned (S2.1, in + out of competition).
- **Sources:** Epogen FDA label, KDIGO 2024 anemia guidelines, WADA 2025 Prohibited List, Lundby 2008 (PMID 18555820 micro-dosing PK), Lippi 2006 (PMID 16572116 doping detection).
- **related[]:** `['hgh', 'igf-1-lr3', 'tesamorelin', 'mots-c']`
- **Categories:** `['metabolic', 'recovery', 'endurance']`
- **Tier:** 4
- **accentColor:** `#f87171` (endurance category coral)
- **tagColor:** `rgba(248,113,113,0.16)`
- **Image:** `/peptides/EPO.png`
- **Mandatory bloodwork section** with Hb, Hct, ferritin, transferrin saturation, reticulocyte count, BP. Include this as a `bloodwork` array field in body if other peptide entries use it (check `hgh.js` for precedent).

**Subagent D — `glow` (GLOW Protocol T3, STACK ENTRY)**
- **Composition:** YES, this is a multi-peptide stack — include `composition[]`:
  ```js
  "composition": [
    { "id": "ghk-cu",  "role": "<localized: skin regeneration anchor>", "typicalDose": "1-3 mg subQ daily / 1-3 mg subQ naponta / 1-3 mg subQ codziennie" },
    { "id": "bpc-157", "role": "<localized: gastric pentadecapeptide healer>", "typicalDose": "250-500 µg subQ daily / 250-500 µg subQ naponta / 250-500 µg subQ codziennie" },
    { "id": "tb-500",  "role": "<localized: thymosin β4 actin-binder>", "typicalDose": "2-2.5 mg subQ 2× weekly / 2-2.5 mg subQ 2× hetente / 2-2.5 mg subQ 2× tygodniowo" }
  ],
  ```
  (Subagent must split this per-lang for each file's localized role/typicalDose.)
- **Mechanism (combined):** GHK-Cu = epigenetic + collagen; BPC-157 = pleiotropic angiogenesis + tissue healing; TB-500 = systemic actin-binding + cell migration. Synergy: comprehensive skin + tissue regeneration.
- **Protocol:** 4-6 week cycle, daily subQ in same period, rotating injection sites. Off-cycle 2-4 weeks.
- **Sources:** Sean's curated notes (community); component-level PubMed refs (already in each component entry — point to ghk-cu/bpc-157/tb-500 entries via `related[]`).
- **Tier:** 3 (single-component evidence T4, stack-specific RCT non-existent — T3 cap).
- **WadaStatus:** `null` (stack-level not WADA-tested; component-level: GHK-Cu non-banned, BPC-157 banned 2022, TB-500 banned).
- **related[]:** `['ghk-cu', 'bpc-157', 'tb-500', 'cjc-1295-ipamorelin']`
- **Categories:** `['anti-aging', 'recovery', 'immune']`
- **accentColor:** `#a78bfa` (purple — stack/special)
- **tagColor:** `rgba(167,139,250,0.18)`
- **Image:** `/peptides/GLOW.png`
- **Body length target:** ~180 lines/lang (shorter — composition[] handles per-component info DRY).
- **NO bloodwork section** (Tier 3 community-protocol).

- [ ] **Step 16.1: Dispatch all 4 subagents in parallel**

Use the Agent tool with `subagent_type: 'general-purpose'` and `run_in_background: true`. Send all 4 invocations in a single message for parallel execution.

- [ ] **Step 16.2: Wait for completion notifications**

All 4 subagents notify on completion. Do not poll — wait for the harness notifications.

- [ ] **Step 16.3: Read each subagent's output**

Use TaskOutput tool with each subagent's ID to retrieve final messages with meta-record append-specs.

---

## Phase E — Post-Subagent Reconciliation (Tasks 17-18, inline ~10 min)

### Task 17: Append 4 meta records + entryCategoryMap entries

**Files:**
- Modify: `src/data/libraries/peptides/index.js`

- [ ] **Step 17.1: Append HMG meta record**

```js
  {
    "id": "hmg-peptid",
    "name": "HMG (fertilitás)",
    "image": "/peptides/HMG.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.16)",
    "shortDesc": {
      "hu": "Humán Menopauzális Gonadotropin: FSH+LH 1:1 spermatogenezis-induction",
      "en": "Human Menopausal Gonadotropin: FSH+LH 1:1 spermatogenesis induction",
      "pl": "Ludzka Gonadotropina Menopauzalna: indukcja spermatogenezy FSH+LH 1:1"
    },
    "tier": 4
  },
```

- [ ] **Step 17.2: Append FSH-rec meta record**

```js
  {
    "id": "fsh-rec-peptid",
    "name": "rFSH (fertilitás)",
    "image": "/peptides/rFSH.png",
    "accentColor": "#fbbf24",
    "tagColor": "rgba(251,191,36,0.16)",
    "shortDesc": {
      "hu": "Rekombináns FSH: szelektív Sertoli-sejt stimulus, spermatogenezis",
      "en": "Recombinant FSH: selective Sertoli cell stimulation, spermatogenesis",
      "pl": "Rekombinowany FSH: selektywna stymulacja komórek Sertolego, spermatogeneza"
    },
    "tier": 4
  },
```

- [ ] **Step 17.3: Append EPO meta record**

```js
  {
    "id": "epo",
    "name": "EPO",
    "image": "/peptides/EPO.png",
    "accentColor": "#f87171",
    "tagColor": "rgba(248,113,113,0.16)",
    "shortDesc": {
      "hu": "Eritropoietin: EPO-receptor agonist, RBC-tömeg + oxigénszállítás",
      "en": "Erythropoietin: EPO-receptor agonist, RBC mass + oxygen transport",
      "pl": "Erytropoetyna: agonista receptora EPO, masa RBC + transport tlenu"
    },
    "tier": 4
  },
```

- [ ] **Step 17.4: Append GLOW meta record**

```js
  {
    "id": "glow",
    "name": "GLOW",
    "image": "/peptides/GLOW.png",
    "accentColor": "#a78bfa",
    "tagColor": "rgba(167,139,250,0.18)",
    "shortDesc": {
      "hu": "Multi-peptid stack: GHK-Cu + BPC-157 + TB-500 bőr- és szövetregenerációra",
      "en": "Multi-peptide stack: GHK-Cu + BPC-157 + TB-500 for skin and tissue regeneration",
      "pl": "Stack wielopeptydowy: GHK-Cu + BPC-157 + TB-500 dla regeneracji skóry i tkanek"
    },
    "tier": 3
  },
```

- [ ] **Step 17.5: Update entryCategoryMap (append 4 entries)**

```js
  'hmg-peptid': ['growth-factors', 'hpta-fertility'],
  'fsh-rec-peptid': ['growth-factors', 'hpta-fertility'],
  'epo': ['metabolic', 'recovery', 'endurance'],
  'glow': ['anti-aging', 'recovery', 'immune'],
```

- [ ] **Step 17.6: Validator + build gate**

```bash
node scripts/validate-library-meta.mjs
npm run build
```
Expected:
- Validator PASS: 4 lib × 55 peptides + 48 noot + 68 perf + 22 pharma = 193 total.
- GLOW composition[] validates (GHK-Cu/BPC-157/TB-500 all exist in same library).
- Build PASS ~6s, precache ~3030 KiB.

If validator fails on a subagent's body file (schema drift):
- Note the error message.
- Dispatch a single fix-subagent with the specific file path + error + the precedent file (`hcg-peptid.js`) as anchor.
- Re-run validator.

- [ ] **Step 17.7: Commit (combined with Task 18 — single commit per Phase F)**

Stage but DO NOT commit yet — Task 18 also stages files; commit happens at end of Phase F as the single megapush.

```bash
git add src/data/libraries/peptides/index.js \
        src/data/libraries/peptides/entries/hu/hmg-peptid.js \
        src/data/libraries/peptides/entries/en/hmg-peptid.js \
        src/data/libraries/peptides/entries/pl/hmg-peptid.js \
        src/data/libraries/peptides/entries/hu/fsh-rec-peptid.js \
        src/data/libraries/peptides/entries/en/fsh-rec-peptid.js \
        src/data/libraries/peptides/entries/pl/fsh-rec-peptid.js \
        src/data/libraries/peptides/entries/hu/epo.js \
        src/data/libraries/peptides/entries/en/epo.js \
        src/data/libraries/peptides/entries/pl/epo.js \
        src/data/libraries/peptides/entries/hu/glow.js \
        src/data/libraries/peptides/entries/en/glow.js \
        src/data/libraries/peptides/entries/pl/glow.js
```

---

### Task 18: Single megapush commit

**Files:** All staged from Task 17.7.

- [ ] **Step 18.1: Verify staged state**

```bash
git status
git diff --cached --stat
```
Expected: ~13 new files (12 body + meta-update), all under `src/data/libraries/peptides/`.

- [ ] **Step 18.2: Single megapush commit**

```bash
git commit -m "$(cat <<'EOF'
feat(peptides): 4 new RICH entries (HMG/FSH-rec/EPO/GLOW) + meta records

Completes the v0.23-peptide-curation batch with:
- hmg-peptid: HMG fertility T4 (FSH+LH 1:1)
- fsh-rec-peptid: rFSH fertility T4 (selective Sertoli)
- epo: Erythropoietin T4 (endurance/oxygen transport)
- glow: GLOW Protocol T3 (multi-peptide stack — composition[])

Plus 4 meta records appended to LIBRARY_ENTRY_META + entryCategoryMap.
Final peptide count: 55 (was 58 → −8 deprecated + 5 new + retained).

Sources: FDA SmPC (Menopur, Gonal-F, Epogen, Pregnyl), EMA SPC,
PubMed Liu 2009, Bouloux 2002, Lundby 2008, Lippi 2006, WADA 2025.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Phase F — Ship (Tasks 19-20, inline ~3 min)

### Task 19: Tag the release

- [ ] **Step 19.1: Create the tag**

```bash
git tag v0.23-peptide-curation
```

- [ ] **Step 19.2: Verify tag**

```bash
git tag --list "v0.23*"
git log --oneline -1
```
Expected: tag `v0.23-peptide-curation` listed, HEAD shows the Task 18 commit.

---

### Task 20: Push origin

- [ ] **Step 20.1: Push master + tag**

```bash
git push origin master --tags
```

- [ ] **Step 20.2: Verify Vercel deploy triggered**

Wait ~3 min for Vercel auto-deploy. Then test 3 live URLs (one per new entry, 3 langs sampled):
- `https://molekulax.vercel.app/#entry/peptides/hcg-peptid` (HU/EN/PL via lang switcher)
- `https://molekulax.vercel.app/#entry/peptides/glow` (composition section render)
- `https://molekulax.vercel.app/#entry/peptides/fgl` (deprecated → redirect-flash)

If any URL fails: check Vercel deploy logs, validator output, browser console.

---

## Acceptance Checklist (Final)

- [ ] Validator PASS: 4 libraries × 193 entries (55 peptides + 48 nootropics + 68 performance + 22 pharmaceutical)
- [ ] Build PASS ≤7s; PWA precache <3050 KiB (≥2070 KiB margin)
- [ ] 5 new entries render OK (15 lang-checks)
- [ ] 8 deprecated slugs render RedirectFlash + redirect to library top (2-3 sample checks)
- [ ] GLOW composition[] section renders with 3 clickable component cards
- [ ] TOP10 grid unchanged
- [ ] New category filter chips appear (`hpta-fertility`, `endurance`) in 3 langs
- [ ] Cross-link reciprocation works (Tesamorelin entry shows tesamorelin-perf)
- [ ] Tag `v0.23-peptide-curation` pushed to origin
- [ ] Vercel production deploy live and stable

---

## Risks + Recovery

| Risk | Mitigation/Recovery |
|---|---|
| Subagent schema-drift in Task 16 body file | Validator Task 17.6 catches before commit; dispatch fix-subagent with file path + error + hcg-peptid.js anchor |
| Composition-id existence check fails on GLOW | Verify ghk-cu/bpc-157/tb-500 still in peptides/index.js LIBRARY_ENTRY_META |
| Workbox precache > 5120 KiB cap | Expected ~3030 KiB — well under. Monitor build output. |
| Cross-link related[] dangles after Task 13 hard-removal | Task 11 scrub-deprecated-related runs PRE-removal; Task 12 validator warns on any miss |
| RedirectFlash timer race condition | useEffect cancel-flag + clearTimeout cleanup (Phase 12 pattern) — Task 9.3 |
| Subagent body length too short/long | hcg-peptid.js precedent (210 lines) is the explicit target; subagent prompt cites it |

---

## Post-Ship Memory Writes (separate session)

Run via `/handoff`. The handoff command will:
- Append new session block to `MolekulaX_Statusz.md` (Obsidian) at the top
- Update `project_molekulax.md` (auto-memory) with curation event + new peptide count (55)
- Write 3 new feedback memories: `Composition_Field_New_Schema`, `Deprecation_Redirect_Flash_Pattern`, and reinforce `Subagent_Schema_Drift_Validator_Catches`
- Update `MEMORY.md` index
