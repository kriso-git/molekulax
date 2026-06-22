# Comparison v2 — Design Spec

**Date:** 2026-06-22
**Status:** Approved (brainstormed via grill-with-docs; owner approved the publish set)
**Related:** ADR-0004 (cross-library comparisons), `CONTEXT.md` (Comparison / Member / Dimension), candidate list `2026-06-22-comparison-v2-candidates.json`
**Builds on:** the v1 comparison route (`/osszehasonlitas`, master `b1bf273`) — index + detail table built purely from entry `keyInfo`.

## 1. Goal

Grow the Comparison feature from 3 hand-curated, single-library comparisons into a richer, cross-linked, more visual, jargon-friendly system — without introducing any new medical claims. Four owner-requested workstreams:

- **(a)** A discrete "comparable" indicator on gallery tiles **+** a "Kapcsolódó összehasonlítások" cross-link block on entry pages.
- **(b)** More visual comparison pages (member imagery, accent colors, dimension icons, a hero).
- **(c)** "i" info-tooltips that explain technical jargon on comparison pages.
- **(d)** A data-driven mapping of which compounds are worth comparing → an expanded, owner-approved set.

## 2. Non-negotiable constraints (the domain model these decisions live under)

- **Zero new medical claims.** A Comparison only selects/orders/juxtaposes values that already exist in Entry data. Curated dimensions SELECT existing `keyInfo`; tooltips define neutral *technical vocabulary*, never per-compound efficacy/safety. (Council YMYL verdict + content policy.)
- **No ranking / verdict visuals.** No "better/worse" highlighting, no efficacy bars. Differences are shown, never judged.
- **Enforced CSP** (`script-src 'self'`, no inline/eval). All new UI is client-side, no external fetch. JSON-LD only as `application/ld+json`. (See `feedback_molekulax_csp_enforced`.)
- **Dark-only.** No theme toggle, keep the `[data-theme="dark"]` contrast. (`feedback_molekulax_dark_only`.)
- **No em-dash (—) in copy.** Use en-dash (–) / comma. (`feedback_no_emdash`.) Note: the existing comparison table uses `—` as the *missing-value glyph*; that is a data placeholder, not copy — keep it, or switch to `–`; decide in Phase B (cosmetic).
- **URL = i18n source of truth** (ADR-0002). Comparison slugs are language-invariant; `topic` labels + glossary defs are localized HU/EN/PL; every in-app `navigate()` threads `lang`.
- **Prerender + a11y.** All comparison content (including tooltip definitions) must be in the prerendered DOM (SEO + JS-off + screen readers). Tooltips are keyboard-accessible and reduced-motion-safe.

## 3. Data model

The `COMPARISONS` registry (`src/seo/urls.js`) entry shape evolves (ADR-0004):

```js
{
  slug,                      // language-invariant URL segment, explicit (NOT derived)
  title,                     // display name (compound names are language-invariant)
  members: [{ id, lib }],    // 2-3 members, EACH carrying its own library (was: bare ids + comparison-level `lib`)
  topic?: { hu, en, pl },    // neutral class/topic label for the category chip / hero (replaces single-library name for cross-lib)
  dimensions?: [             // CROSS-LIB ONLY. Curated rows. Omitted (all same-lib comparisons) => union of members' keyInfo labels (v1 behavior).
    { display: { hu, en, pl },          // the row header text shown
      match:   { hu:[...], en:[...], pl:[...] } }  // accepted keyInfo labels per lang (a synonym list — handles cross-entry label drift)
  ],
}
```

**Why `dimensions` is a per-language `{display, match}` object, not a flat label list (grounded finding):** `keyInfo[].label` is fully localized per language (HU "Felezési idő" / EN "Half-life" / PL "Okres półtrwania") and the two members of a cross-lib comparison can use *slightly different* strings for the same concept (verified: finasteride onset is PL "Początek działania" in performance but "Początek" in pharmaceutical). So a curated dimension carries a per-lang **match synonym list** (to find the value in each member's keyInfo) and a per-lang **display label** (the row header). Same-lib comparisons need none of this — their members share the vocabulary, so the union renders cleanly.

- **Migration:** the 3 existing comparisons convert to `members: [{id, lib}]` with no `topic`/`dimensions` → identical rendering (union table, library-name chip). Regression-guarded by visual-diff.
- **Slug convention:** explicit per comparison. Different ids → `a-vs-b[-vs-c]`. The two **same-id cross-lib** cases use a library-qualified slug (`finasteride-performance-vs-pharmaceutical`, `liothyronine-performance-vs-pharmaceutical`).
- **Source of truth for the publish set:** `2026-06-22-comparison-v2-candidates.json` (3 existing + 31 new = 34). Phase A authors the registry from it.

## 4. Components & data flow (units, each with one purpose)

- **`src/seo/urls.js`** — `COMPARISONS` registry (new shape) + `comparisonsForEntry(lib, id)` reverse-index helper (pure: returns the comparisons whose `members` include this `{lib,id}`). `parsePath`/`comparisonPath`/`translatePath` unchanged (slugs stay explicit). The category chip for a cross-lib comparison uses `topic` instead of a single library name.
- **`src/components/comparison/buildComparison.js`** (pure, sync-tested) — accept members carrying per-member `lib`; build each member's `href` via `entryPath(member.lib, id, …, lang)`. Rows come from the comparison's `dimensions` if present, else the keyInfo-label union (current logic). A `displayName` per member adds a library qualifier ONLY for same-id cross-lib (so two columns are not both "Finasteride").
- **`src/components/comparison/ComparisonPage.jsx`** — loads each member with its own lib; renders the visual table (Phase B). Topic chip from `topic` (fallback: the single shared library name). Hosts the dimension-label tooltips (Phase C).
- **`src/components/comparison/ComparisonIndex.jsx`** — unchanged structurally; gains optional grouping by `topic`/cross-lib flag (Phase B polish).
- **`src/data/glossary.js`** (new, Phase C) — `{ termKey: { match: [labels/terms], term: {hu,en,pl}, def: {hu,en,pl} } }`. Neutral technical vocabulary only (e.g. Hatásmechanizmus, Felezési idő, Aromatizáció, Biohasznosulás, ATC kód, WADA/Jogi státusz, SARM, SERM, GHRH-analóg, eugeroikum). Pure lookup helper `glossaryFor(label, lang)`.
- **`src/components/comparison/InfoDot.jsx`** (new, Phase C) — accessible "i" affordance (button + `aria-describedby`, keyboard + focus, reduced-motion-safe, CSP-safe, definition text present in DOM for crawlers/JS-off).
- **`src/components/comparison/DimensionIcon.jsx`** (new, Phase B) — neutral label→lucide-icon map (clock=Felezési idő, shield=WADA/Jogi, etc.). No icon for unmapped labels.
- **`src/components/LibraryGallery.jsx`** (tiles) — render a discrete `⇄` badge overlay on tiles whose entry is in ≥1 comparison (`comparisonsForEntry`). The badge is a small focusable link to the comparison index, click-isolated from the tile's open-entry handler (`stopPropagation`), `aria-label` localized. Icon-only (no text), language-invariant.
- **`src/components/library/EntryDetail.jsx`** — a "Kapcsolódó összehasonlítások" chip-row (Phase D) listing every comparison this entry is in (`comparisonsForEntry`), each a crawlable + SPA link to the comparison detail. Placed under the hero/sourcing area. Hidden when empty.
- **`scripts/scan-comparison-candidates.mjs`** (new, Phase A) — deterministic reusable tool behind (d): reads each library's `LIBRARY_ENTRY_META` + `categories.js` + entry `keyInfo`, emits ranked within-lib + cross-lib candidate clusters with shared dimensions. Advisory only; never auto-publishes. (Mirrors the one-off scan that produced this spec's list.)
- **Build scripts** — `prerender.mjs`, `gen-sitemap.mjs`, `check-prerender.mjs`, `smoke-render.mjs`: iterate members with per-member `lib`; enumerate the 31 new slugs × hu/en/pl. Prerender guard uses a transform-independent needle (tag-based, per the v1 uppercase-CSS lesson).

## 5. Visual design (Phase B) — honest, on-brand, no ranking

- **Member column headers:** each member's `image` (peptide vial photos / perf-pharma images) + the entry's `accentColor` as a subtle column underline/tint. Same-id cross-lib columns add a small library-context sub-label.
- **Dimension icons:** a neutral lucide icon beside each Dimension row label (from `DimensionIcon`).
- **Hero:** a `⇄` motif with the topic label + member names/images at the top of the detail page. No motif-video / heavy WebGL (perf).
- **Keep the table** (correct tool, already prerender/a11y-solid): restyle with sticky member header, grouped rows, accent dividers. Mobile keeps the stacked per-dimension cards.
- **Index page:** group cards by topic/cross-lib; cross-lib cards get a small multi-library marker.
- **Explicitly excluded:** difference-highlighting that implies better/worse, numeric ranking bars, any verdict cue.

## 6. Tooltips (Phase C) — jargon without claims

- Glossary covers neutral technical vocabulary (dimension labels + class terms in the topic/hero). No per-compound claims.
- "i" dots appear on (1) Dimension row labels matched in the glossary, and (2) the topic/class term in the hero. NOT on arbitrary values (no value-prose parsing this round; future extension).
- Definitions render in the prerendered DOM; popover is keyboard-accessible (`button` + `aria-describedby`), dismissible, reduced-motion-safe. No external resources (CSP).
- Scope: comparison pages only this round. The component is reusable so a later phase can extend it to entry `keyInfo` labels.

## 7. i18n

- `topic.{hu,en,pl}` per new comparison (Phase A localizes the HU topics in the candidates JSON).
- Glossary `term`/`def` in HU/EN/PL.
- New UI strings (badge aria-label, "Kapcsolódó összehasonlítások" heading, tooltip close) in `uiStrings-{hu,en,pl}.js`.
- Slugs (incl. PL `porownanie`) language-invariant; reciprocal hreflang already wired for the comparison base.

## 8. The publish set — GROUNDED (32 total = 3 existing + 29 new)

The original scan proposed 44 candidates; an empirical validation against the real entry `keyInfo` (`scripts/tmp-validate-comparisons.mjs`) cut it to the comparisons that actually have ≥3 shared comparable rows. Source of truth: `2026-06-22-comparison-v2-candidates.json` (every entry there is validated ✅).

- **performance (within-lib):** AI · SERM · 5α-reduktáz · pajzsmirigy T3/T4 · β2-agonisták · dopamin-agonisták · SARM · gonadotropin-trió · ERR-agonisták · szteroid-prekurzorok
- **peptides (within-lib):** GHRH · GHRP · GLP-1/glukagon kettős · α-MSH · tuftsin · Semax-származékok · GnRH-aktivátorok · melanokortin-agonisták
- **nootropics (within-lib):** afinil-család · ampakinok · kolin-prekurzorok · GABA-B · modafinil-prodrugok · orosz neuropeptidek · HACU-racetamok · agyi peptid-hidrolizátumok · adaptogének
- **pharmaceutical (within-lib):** *(none ship in Phase A — see the gap below)*
- **cross-library (2, validated):** HMG (perf↔peptid-hormone, 3 rows) · Finasteride (perf↔pharma, same-id, 4 rows)

**Dropped as broken (no usable shared keyInfo — 8):** atorvastatin-vs-rosuvastatin, escitalopram-vs-fluoxetine, levothyroxin-vs-liothyronine (pharma), nolvadex-vs-tamoxifen, liothyronine perf↔pharma, hgh↔hgh-info, GH-axis (hgh-info↔ipamorelin/cjc), hcg-perf↔hcg-peptid (thin 2) + hcg-peptid↔hmg-peptid (thin 2).

**Root cause + future sub-project — the pharma keyInfo gap:** only **8 of 22** pharmaceutical entries have a `keyInfo` block (amoxicillin, atorvastatin, bupropion, finasteride, levothyroxin, metformin, modafinil, tadalafil); the other 14 have none, so pharma within-lib comparisons (statins, SSRIs, thyroid-Rx, retinoids) cannot be built and those entry pages also lack the quick-facts strip. **Decision (owner): ship the 29 grounded now; backfill pharma `keyInfo` (SmPC/openFDA, 3 langs, verified) as a SEPARATE later content sub-project**, which will then unlock the pharma comparisons. Also note the **peptide library has two `keyInfo` vocabularies** — structural (Típus/Szerkezet… for research peptides) vs pharmacological (Hatásmechanizmus/Felezési idő… for hormone peptides) — which is why most peptide↔perf cross-libs do not align.

**Phase A task 0 (gate, still required):** re-confirm every member id resolves via `loadEntry(lib, id)` and that the validator stays green before authoring (known id specifics already handled: `levothyroxine`@performance vs `levothyroxin`@pharmaceutical; `liothyronine`/`finasteride` in multiple libs; `selank`/`semax` in both peptides+nootropics; `cjc-1295`, `na-semax-amidate`, `kisspeptin`@peptides).

## 9. Phasing (one spec, four shippable phases; prebuilt deploy each)

- **Phase A — Functional core & expansion.** Registry new shape + migrate 3 + author 31 (verified). `buildComparison` per-member lib + curated dimensions + same-id displayName. ComparisonPage/Index per-member lib + topic chip. `comparisonsForEntry` helper (+ tests). Scan script. Prerender/sitemap/check-prerender/smoke updates. ADR-0004 + CONTEXT.md (already written). **Gates:** `npm run build` + `build:prerender` (all new routes, 0 errors) + `check-prerender` + `smoke` + `node scripts/verify-csp.mjs` + `node scripts/visual-diff.mjs --mode compare` (HU unchanged 0.000%) + `node --test`.
- **Phase B — Visual redesign.** Member images + accentColor + dimension icons + hero + table restyle + index grouping. Re-capture the visual-diff baseline (intended change) after sign-off.
- **Phase C — Glossary + tooltips.** `glossary.js` + `InfoDot` + wiring on dimension labels + hero class term. CSP re-verified (securitypolicyviolation listener). Prerendered-DOM check for definitions.
- **Phase D — Cross-links.** Tile `⇄` badge (LibraryGallery) + entry-page chip-row (EntryDetail) + i18n. Smoke covers a tile-badge route + an entry with comparisons.

After all phases: re-submit `sitemap.xml` in GSC (URL count grows ~93 = 31 × 3 langs).

## 10. Testing & gates (every phase)

- Unit: `buildComparison` (per-member lib, curated dimensions, union fallback, same-id displayName), `comparisonsForEntry` (reverse index), `glossaryFor`.
- `build:prerender` must render every new slug × hu/en/pl with the compound/topic present JS-off; `check-prerender` needle is transform-independent.
- `smoke` adds representative new comparison routes (one within-lib, one cross-lib, one same-id) + a tile-badge page + an entry with a chip-row.
- `verify-csp` clean; `visual-diff` 0.000% in Phase A (no visual change), re-baselined in Phase B.
- Prebuilt deploy + live curl on a sample of new URLs (HU + /en + /pl).

## 11. Risks & open items

- **Same-id cross-lib rendering** (finasteride, liothyronine): both columns must be visually disambiguated by library or the table reads as a duplicate. Handled via per-member `displayName` + a sub-label.
- **Cross-lib sparse rows:** curated `dimensions` mitigates, but some cross-lib tables are 3 rows. Acceptable (honest); the hero + cross-link value carries them.
- **Tile badge clutter:** keep it a single small icon; verify it does not harm the gallery's perf/visual rhythm (Lighthouse + visual check).
- **Build time:** +93 prerendered pages on the (local) prebuilt deploy. The prebuilt path has no 45-min limit, but watch local render time; reuse the incremental cache.
- **Glossary accuracy:** definitions are neutral textbook vocabulary; review for accuracy (and link from `/modszertan` for E-E-A-T). Not PMID-gated (not study citations).

## 12. Out of scope (this spec)

- Tooltips on arbitrary `keyInfo` *values* or on entry pages (future extension of the reusable `InfoDot`).
- Auto-generated/published comparisons (the set stays human-gated).
- The 10 "shelf" candidates (score 76–82) — easy to add later by appending to the registry.
- Numeric/standardized cross-library dimension normalization (rejected option C in brainstorming).
