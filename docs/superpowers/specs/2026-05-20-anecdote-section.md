# MolekulaX — Anekdota szekció (Spec)

**Dátum:** 2026-05-20 · **Tag-target:** `v0.21-anecdote-section` · **Becsült ülés:** 1 (single session, post-roadmap mode)

---

## 1. Mit

Új **Anekdota szekció** mind a 4 könyvtár EntryDetail-jén (peptides + nootropics + performance + pharmaceutical). Tartalom: tapasztalat-narratíva (1-3 paragrafus) szigorúan Scientific Sean `sean's curated notes.docx` dokumentumból kihúzva, átfogalmazva semleges "anekdotikus beszámolók / felhasználói tapasztalatok" tónusra. 3 lang (HU/EN/PL).

## 2. Miért

User-driven feature: a klinikai tudományos szekciók (Studies, Quality, Mechanism) mellett a felhasználó *valódi tapasztalat-narratívát* is akar látni. Sean dokumentuma jól strukturált, ~30-50 entry-re van anekdóta-blokk (lefedettség ~43%). A többi entry-n placeholder ("Még nincs anekdota gyűjtésben"). Memory `[[feedback_forbidden_sources]]` HYBRID-policy alapján Sean's notes = OK forrás body-content-hez a 3 új libraryn — ehhez a featurehoz a peptid library is ki van nyitva (új section-type, NEM body-content frissítés meglévő mezőkben).

## 3. Hogy

### 3.1 Library Shape extension (`src/data/libraries/shape.js`)
Új optional Entry mező:
```js
@property {I18nString} [anecdote]  Sean's notes-ból kihúzott tapasztalat-narratíva, átfogalmazva semleges tone-ra. Optional, null/missing → placeholder.
```

### 3.2 Adapter passthrough (`src/components/library/adaptLibraryEntry.js`)
A `adaptLibraryEntry()` return blokk-jában új allowlist field:
```js
anecdote: peptide.anecdote || null,
```
A `[[feedback_adapter_passthrough]]` szabálynak megfelelően.

### 3.3 Új komponens (`src/components/library/AnecdoteSection.jsx`)
- Collapse/expand-able (alapból COLLAPSED, klikkre nyílik)
- Hero/Bento section UTÁN, "What is X?" section ELŐTT renderel (EntryDetail.jsx ~1414-es sorba)
- Render: section header (eyebrow "ANEKDOTA / ANECDOTE / ANEGDOTA" + title), expand-button
- Ha `anecdote` field van → 3-lang render via `tr(peptide.anecdote)` (LanguageContext)
- Ha `anecdote` null/missing → placeholder ("Még nincs anekdota gyűjtésben / No anecdote collected yet / Brak anegdoty")
- Disclaimer: "Nem klinikai bizonyíték, anekdotikus beszámoló" (HU/EN/PL)
- Accent: library-szintű színből

### 3.4 EntryDetail.jsx integráció
~1414-es sorba új `<AnecdoteSection />` mount a `<section>` (1259 Hero) lezárása UTÁN, az 1415-ös "What is X?" section ELŐTT.

### 3.5 uiStrings bővítés (3 file)
Új kulcsok per lang:
- `entry.sec.anecdote.eyebrow` ("ANEKDOTA" / "ANECDOTE" / "ANEGDOTA")
- `entry.sec.anecdote.title` ("Tapasztalati beszámolók" / "Anecdotal reports" / "Doniesienia anegdotyczne")
- `entry.sec.anecdote.disclaimer` ("Nem klinikai bizonyíték — felhasználói tapasztalatokon alapul." / "Not clinical evidence — based on user accounts." / "To nie są dowody kliniczne — oparte na relacjach użytkowników.")
- `entry.sec.anecdote.placeholder` ("Még nincs anekdota gyűjtésben." / "No anecdote collected yet." / "Brak anegdoty.")
- `entry.sec.anecdote.expand` ("Mutasd" / "Show" / "Pokaż")
- `entry.sec.anecdote.collapse` ("Bezárás" / "Collapse" / "Zwiń")

### 3.6 Content extraction + populáció
**EN content:** Sean's docx-ből kinyert 85 anekdóta-blokk (79 unique entry-re mapped a mapper-subagent által), tisztítva:
- Eltávolítandó idiomák: "RUO" → "this compound", "Kimera Chems" → vendor-name out, "Strate Labs" → out, "Code 'Sean'" → out, "RS" / "my research subject" → "users" / "anecdotal reports describe", "DYOR" → "do your own research" (csak ha context-relevant)
- URL-ek eltávolítása (dopamine.club, moreplatesmoredates.com stb.)
- "Researchers report" típusú narratíva megtartva (semleges)
- Specifikus dose-ajánlások: KIVÉVE, ha általános ("low dose", "morning"), tartani, ha konkrét mg/protocol — alacsonyabb prio törölni

**HU + PL fordítás:** 2 párhuzamos subagent — Sub-Task 5 Session 3 mintára. Minden subagent feldolgozza a 79 EN anekdóta-string-et, fordítja HU vagy PL nyelvre, megőrzi a semleges tone-t.

### 3.7 Per-entry-file frissítés
Minden matched entry default-export object-jébe új `anecdote: { hu, en, pl }` triplet (top-level field, mint `description`, `legalStatus` stb.). Mind a 3 lang body file (entries/hu/*.js, entries/en/*.js, entries/pl/*.js) per-lang-flat-string-gel kapja meg az anecdote-ot.

**Cross-language schema:** post-Phase-12 dual-shape — entry-level mezők lehetnek flat-string-ek (per-lang body file-okban) vagy `{hu,en,pl}` triplet (legacy). Az adapter `flat(value, lang)` helper-e mindkét shape-et kezeli. Per-lang body file = flat-string. Az adapter passthrough változatlan.

## 4. Forrás-policy

- **HYBRID policy** (lásd `[[feedback_forbidden_sources]]`): Sean's notes elfogadott forrás body-content-hez, NO citation back to him (nem említjük név szerint a section-ben). Studies-szekcióba NEM kerül anekdóta.
- **Peptid library** is kap anekdotát — user-override a "frozen" szabályra, mert az Anekdota új section-type, NEM existing body-content frissítés.
- A semleges tone fontos: "users report", "anecdotal reports describe", "according to community accounts" — NEM "I gave my RS", "my research subject", "researchers in my Discord".

## 5. Acceptance gates

- **Validator PASS** (`validate-library-meta.mjs`): 4 lib × 182 entry × 3 lang parity változatlan.
- **Build PASS** (`npm run build`): bundle-méret változás < +5 KiB main chunk (új komponens kicsi).
- **Smoke test**: 3-4 entry × 3 lang × desktop+mobil = 18-24 manual checkpoint:
  - matched entry (pl. BPC-157): anekdota EXPAND-elhető, megjelenik HU/EN/PL-en
  - unmatched entry (pl. Retatrutide): placeholder látható HU/EN/PL-en — WAIT, Retatrutide IS matched (medium confidence). Próbáljunk: Selank (matched high) vs. Cagrilintide (matched high) vs. egy biztos unmatched (pl. Tirzepatide-pep — no wait, Tirzepatide is matched). Tényleg unmatched: pl. Cortexin, P21, NA-Semax-Amidate (peptides), J-147 nootropic — wait, J-147 matched.
  - Hero után jelenik meg (nem keveredik a Bento-val)
- **Live LH sweep**: 3-URL minimum (home + 1 matched entry + 1 unmatched entry placeholder), Perf ≥85, A11y ≥95, BP ≥96, SEO 100.

## 6. Ship cadence

Single session. Commit-séma:
1. `feat(libraries): Anekdota section component + library shape + adapter passthrough + uiStrings (3 lang)`
2. `feat(libraries): Anekdota content populated (79 matched entries × 3 lang)`
3. Optional: `chore(libraries): Anekdota content for X medium-conf entries reviewed` (manual override)

Master push, tag `v0.21-anecdote-section` az utolsó commit-on.

## 7. Risks

- **Tone leak**: ha a tisztítás nem alapos, "my RS" maradhat itt-ott — manual proofread mind a 79 EN content-en. Auto-script: replace-all common Sean-isms.
- **Mapping miss**: 4 low + 25 medium confidence — manual review post-population.
- **Translation drift**: subagent-ek néha különböző tone-t választanak. Egységesítés: explicit prompt-példa minden subagent-nek (1 reference entry teljesen lefordítva mint sample).
- **Peptid library "frozen" memory rule** — user explicit override 2026-05-20 session-elején; az `[[project_molekulax]]` memóriát frissíteni kell post-ship: "Anekdota section = új feature-type, peptid library is kap, mert NEM body-content-update".

## 8. Out of scope

- Sub-Task 6 (Fat content), Sub-Task 7 (Images), Peptid library batch — későbbi külön sessionre.
- Anekdóta-bővítés AI/LLM-mel (csak Sean's notes forrás most).
- Anekdóta search/filter UI (csak basic collapse-expand).
- Multi-author anekdóták (1 anekdóta-string per entry × 3 lang most).
