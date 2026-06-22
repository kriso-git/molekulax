# MolekulaX

Trilingual (HU/EN/PL) educational reference for pharmacological compounds. Content is strictly educational, derives from verified sources (PMID-gated), and makes no new medical claims beyond what the entry data already states.

## Language

**Library**:
One of the four top-level collections of compounds: peptides, nootropics, performance, pharmaceutical. Each has its own feature flags and entry data shape.
_Avoid_: collection, category (category is used for the subdivisions *inside* a library)

**Entry**:
The data record for a single compound (its names, `keyInfo`, studies, FAQ, sourcing, etc.), localized HU/EN/PL.
_Avoid_: article, page, item

**Compound**:
The real-world substance an Entry describes (a peptide, drug, nootropic…). Used in prose for the substance; Entry is used for its data record.
_Avoid_: molecule, drug, substance (use Compound consistently)

**Comparison**:
A curated, side-by-side juxtaposition of 2–3 related Compounds, rendered as a table from their existing Entry data. A Comparison adds **no new medical claims** — it only selects and juxtaposes values that already live in the Entries.
_Avoid_: versus page, matchup

**Member**:
One Compound participating in a Comparison. A Comparison may have members from **different Libraries** (cross-library), so each Member carries its own Library reference.
_Avoid_: item, participant, side

**Dimension**:
A single comparable row in a Comparison table (e.g. "Felezési idő", "Célterület"), sourced from a Member's `keyInfo` label. A Comparison may specify a **curated** Dimension list (which rows to show, in order); without one it defaults to the union of all Members' `keyInfo` labels.
_Avoid_: field, attribute, property, key (those refer to raw data; Dimension is the displayed comparison row)
