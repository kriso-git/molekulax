# ADR-0004: A Comparison may span libraries

**Status:** Accepted (2026-06, Comparison v2)

## Context
Comparisons (the `/osszehasonlitas` section) originally required all members to share one Library. The data shapes align within a library, `buildComparison` took a single `lib`, the link builder used that one `lib`, and each library's `keyInfo` label vocabulary is internally consistent. This invariant was reflected in the code comment ("All members of a comparison share one library — data shapes align") and is adjacent to ADR-0003.

But several high-value rival comparisons span libraries — e.g. GH-secretagogues (MK-677 in `performance` vs Ipamorelin/CJC-1295 in `peptides`), or wakefulness agents (modafinil in `pharmaceutical` vs the afinil family in `nootropics`). The single-library invariant blocked these.

## Decision
A Comparison MAY have members drawn from different libraries.

- **Per-member library:** each Member carries its own `lib` — the registry shape becomes `members: [{ id, lib }]`. The existing single-library comparisons migrate to this shape (same library on every member).
- **Curated dimensions:** because cross-library members have divergent `keyInfo` label vocabularies, a Comparison MAY specify a curated `dimensions` list (which `keyInfo` labels to render as rows, in order). Without one, the table defaults to the **union** of all members' `keyInfo` labels — the original behavior, preserved for single-library comparisons.
- **Topic label:** a Comparison MAY carry a neutral `topic` `{hu,en,pl}` for the category chip / breadcrumb, since cross-library has no single library name to show.
- **No new claims:** curated dimensions only SELECT and order existing `keyInfo` values. They never introduce new prose. A Comparison still adds zero new medical claims.
- **Human-gated set:** the published comparison set is curated by a data-driven candidate scan that PROPOSES, with the owner APPROVING the final list — to avoid editorializing about which compounds to compare, ranking-implying juxtapositions, or risky pairings (YMYL).

## Consequences
- `buildComparison`, `ComparisonPage` (member links + category chip), `prerender.mjs`, `gen-sitemap.mjs`, and `check-prerender.mjs` must handle per-member `lib` instead of a single comparison-level `lib`.
- This supersedes the single-library comparison invariant; ADR-0003's "data shapes align per library" still holds for the adapter, but comparison tables now reconcile divergent vocabularies via the curated `dimensions` list (or honest "—" gaps in the union fallback).
- The candidate scan (`scripts/scan-comparison-candidates.mjs`) is the reusable tool behind the (d) "which compounds are worth comparing" mapping; its output is advisory, never auto-published.
