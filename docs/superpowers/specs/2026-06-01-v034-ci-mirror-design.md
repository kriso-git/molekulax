# v0.34 — GitHub Action CI mirror + safety-net

**Dátum:** 2026-06-01
**Státusz:** Design — jóváhagyva (user), implementáció előtt
**Skill-lánc:** brainstorming → (ez a spec) → writing-plans → subagent-driven-development
**Branch / worktree:** `feat/v034-ci-mirror` / `.worktrees/feat-v034-ci-mirror`

---

## 1. Motiváció

A v0.33-ban shipped lokális husky pre-commit hook (`.husky/pre-commit` →
`scripts/verify-staged-entries.mjs` → `scripts/verify-pmids.mjs` per staged entry)
megakadályozza, hogy fabrikált/hibás PMID kerüljön commitba. Két strukturális gyengéje van:

1. **Csak a fejlesztő gépén fut** — más gép / más kontribútor nem védett.
2. **Megkerülhető:** `git commit --no-verify` némán kihagyja (a v0.33 Smoke 4 ezt explicit
   demonstrálta — fabrikált PMID-del `--no-verify`-jal a commit átment, hook-output nélkül).

A projektnek **jelenleg nincs CI** (nincs `.github/workflows/` mappa). Egy GitHub Action a
PMID-gate-et **szerver-oldalon** is lefuttatja, ahol nincs `--no-verify` és nem a fejlesztő
gépétől függ — ez bezárja a bypass-rést. Mivel a CI-t a nulláról építjük, egyúttal a
**tesztek** és a **build** automatikus regresszió-védelmét is bekötjük (eddig csak kézzel
futottak / sehogy).

## 2. Cél és alapelv

**Alapelv:** a CI a "drágább, alaposabb, megkerülhetetlen" ellenőrzés helye. A lokális hook
gyors/szűk (per-entry, a fejlesztő idejéért); a CI széles (lib-wide) és megbízható.

**Mérhető cél:**
- Minden push/PR-en automatikusan lefut: unit-tesztek + build + lib-wide PMID-verify.
- Fabrikált/hibás PMID (MISMATCH / NOT_FOUND) → a PR pirosra vált, akkor is, ha a lokális
  hookot megkerülték.
- A CI **nem flaky**: NCBI rate-limit (429) / tranziens hiba nem okoz false-fail-t, és nem is
  hazudik csendben zöldet (a job-summary jelzi az ellenőrizetlen PMID-eket).

## 3. Hatókör

**Benne (v0.34):**
- W1: `.github/workflows/ci.yml` — 2 független job (offline `build-and-test` + network `pmid-gate`).
- E1: `verify-pmids.mjs` — `NCBI_API_KEY` env-támogatás (URL `&api_key=` param).
- E2: `verify-pmids.mjs` — HTTP-hibás válasz (`!res.ok`, kül. 429/5xx) tranziens
  network-hibaként kezelve (nem-blokkoló), **nem** NOT_FOUND-ként. *(Felfedezett szükségszerű
  fix — lásd §5.2.)*
- E3: `verify-pmids.mjs` — NETWORK_ERR-darabszám a záró summaryben (loud reporting).
- T1: offline unit-tesztek E1–E3-ra (fetch-mockkal), a meglévő `scripts/test/` mintára.

**Hatókörön kívül (külön increment / nem most):**
- Ütemezett (`schedule` cron) link-rot futás — user explicit elvetette; a push/PR-futás
  incidentálisan ad némi link-rot lefedettséget.
- Path-filter a PMID-jobon — szándékosan nincs (lásd §5.1 indoklás).
- Lighthouse / AVIF / Dependabot CI-integráció — pre-existing backlog, nem ide tartozik.
- A 2 moderate `esbuild`/`vite` dev-only vuln fixe (breaking vite bump) — halasztva.
- `node --test` `test` npm-script bevezetése a package.json-ba — opcionális kényelmi, nem
  feltétel (a CI a teljes `node --test scripts/test/` parancsot futtatja közvetlenül).

## 4. Döntések (brainstorming-ből, lezárva)

| Kérdés | Döntés |
|---|---|
| Verify-target | **(A) lib-wide `verify-pmids --batch`** (nem changed-only) — egyszerűbb, robusztusabb, erősebb |
| Network-kezelés | **(a) kulcs + retry, nem-blokkoló + loud reporting** (nem szigorú piros, nem néma zöld) |
| Scope | **(b) teljes safety-net** — tesztek + build + PMID-gate |
| Triggerek | push→`master` · pull_request→`master` · `workflow_dispatch` (nincs `schedule`) |
| Node | **20 LTS** (native `fetch` ≥18, stabil `node --test` ≥20) |
| Job-struktúra | **2 független job** (offline ≠ network), hogy a teszt/build ne függjön az NCBI-tól |

## 5. Részletes design

### 5.1 W1 — `.github/workflows/ci.yml`

**Triggerek:**
```yaml
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
  workflow_dispatch:
```

**Közös env (a husky-install kihagyása CI-ben):** `HUSKY: 0` — `npm ci` futtatná a
`prepare: husky` scriptet; CI-ben nincs szükség lokális git-hookra, és a `HUSKY=0`
megelőzi a felesleges hook-install warningot/hibát.

**Job A — `build-and-test`** (offline, determinisztikus, NCBI nélkül):
1. `actions/checkout`
2. `actions/setup-node` — Node 20, `cache: npm`
3. `npm ci`
4. `node --test scripts/test/` — verifikált: 3 suite (classify 12 + detection 12 + staged 4), 0 fail
5. `npm run build` — `validate-library-meta.mjs` + `vite build`
→ Bármely lépés nem-nulla exitje → job piros.

**Job B — `pmid-gate`** (network, NCBI eutils):
1. `actions/checkout`
2. `actions/setup-node` — Node 20, `cache: npm`
3. `npm ci`
4. `env: NCBI_API_KEY: ${{ secrets.NCBI_API_KEY }}` → `node scripts/verify-pmids.mjs --batch`
   (lib-wide, ~407 PMID, ~10 mp), **1× retry** ha az első futás network-unverified PMID-et
   hagy (lásd lent).
5. A `verify-pmids` záró stat-sorai bekerülnek a `$GITHUB_STEP_SUMMARY`-be (OK-count,
   blocking issue-k, network-unverified count).
→ MISMATCH / NOT_FOUND (exit 1) → job piros. Network-only tranziens → exit 0 (nem blokkol).

**Path-filter — szándékosan NINCS:** mivel nincs `schedule` cron, a PMID-job minden push/PR-en
fut (~10 mp), így legalább incidentálisan elkapja a link-rot-ot (visszavont PubMed-rekord). Egy
path-filter (`src/data/libraries/**`) megspórolná a tiszta frontend-PR-eken az NCBI-hívást, de
akkor a link-rot lefedettség nullára esne. ~10 mp költségért az egyszerűbb, mindig-futó forma jobb.

**Retry — hook-safe követelmény:** a retry NEM változtathatja meg a per-commit hook
viselkedését. A hook (`verify-staged-entries.mjs`) a `verify-pmids` exit-kódját nézi
(`result.status !== 0` → commit abort), és network-hibára exit 0-t (nem-blokkoló) vár. Ezért a
retry-mechanizmus a **workflow-rétegben** él (a hook által hívott úton nincs viselkedés-változás).
A pontos forma a writing-plans fázisban dől el; a követelmény: első futás után, ha maradt
network-unverified PMID, egy ismételt futás csökkenti a "false-green ablakot"; perzisztens
tranziens (pl. NCBI-kimaradás) → zöld marad + summary-warning.

### 5.2 E2 — Felfedezett szükségszerű fix: HTTP-hiba ≠ NOT_FOUND

A kód olvasásakor kiderült, hogy a `verify-pmids.mjs`-ben **két** hálózati hibamód van, és csak
az egyik nem-blokkoló:

| Hibamód | Jelenlegi kód | Eredmény |
|---|---|---|
| `fetch` **dob** (DNS/connection) | `catch → { networkError: true }` → `continue` | **exit 0** (nem-blokkoló) ✅ |
| `fetch` **non-ok** (429/5xx) | `if (!res.ok) → { exists: false, error: 'HTTP NNN' }` | `!result.exists` → **NOT_FOUND** → `issues.push` → **exit 1** ❌ |

Vagyis egy NCBI **rate-limit (429)** vagy szerverhiba (503) jelenleg **false-fail**-t okozna,
mintha a PMID fabrikált lenne. Ez pont az (a) opcióval kerülendő flakiness.

**Fix:** a `!res.ok` ágat (mind `lookupBatched`, mind `lookupPmid`) **tranziens
network-hibaként** kezeljük (a `networkError`-rel azonos, nem-blokkoló útra terelve), NEM
`exists: false`-ként. Indoklás: a "PMID nem létezik" jelet az NCBI **200-as** válaszban
`rec.error`/hiányzó rekord adja — egy HTTP-szintű hiba sosem a PMID nemlétét jelzi, hanem
transport/rate/szerver problémát. (Batch módban a teljes chunk non-ok válasza → a chunk összes
PMID-je "ez a futás nem ellenőrizte" státuszba kerül, nem hamis NOT_FOUND-ba.)

### 5.3 E1 — NCBI API-kulcs

Ha `process.env.NCBI_API_KEY` létezik, a script `&api_key=<kulcs>`-ot fűz az eutils URL-ekhez
(`esummary` a `lookupBatched`/`lookupPmid`-ben, `esearch`+`esummary` a `suggestCandidates`-ben).
Hatás: NCBI rate-limit 3 → 10 req/s, ~megszünteti a 429-et. **Backward-compat:** env hiányában
az URL-ek változatlanok (graceful degrade — kulcs nélkül is működik, csak 429-érzékenyebb).

A kulcs-fűzés egy kis helper-fn-be kerüljön (pl. `withApiKey(url)`), hogy egy helyen
karbantartható és tesztelhető legyen.

### 5.4 E3 — Network-unverified count a summaryben

A `main()` záró összegzése jelenleg OK/MISMATCH/NOT_FOUND/MAYBE_FP-t mutat, de a NETWORK_ERR
csak per-sor logolódik, összegezve nincs. Bővítés: NETWORK_ERR-számláló + egy záró sor, pl.
`⚠️  N PMID unverified (network error)` ha `N > 0`. **Exit-viselkedés változatlan**
(network-only → exit 0). Ez teszi lehetővé a workflow loud-reportingját és a retry-döntést.

## 6. Komponensek és határok

| Egység | Cél | Függ | Tesztelhető |
|---|---|---|---|
| `ci.yml` Job A | offline gate (teszt + build) | npm, node 20 | smoke (első PR zöld) |
| `ci.yml` Job B | PMID-integritás gate | verify-pmids.mjs, NCBI, `NCBI_API_KEY` secret | smoke (első PR) |
| `verify-pmids.mjs` network-réteg | NCBI-lookup + tranziens-tűrés + kulcs + count | env, fetch | offline unit (fetch-mock) |

A script-változások (E1–E3) a **network-rétegre** (`lookupBatched`, `lookupPmid`,
`suggestCandidates` URL-építés) + a `main()` summaryre lokalizáltak. A tiszta logikai
függvények (`classifyOverlap`, `isHuRuTitle`, `normalize`, `parseStagedFiles`) **érintetlenek**.

## 7. Teszt-stratégia (TDD — RED→GREEN→REFACTOR; deep logikára, smoke integrációra)

**Új offline unit-tesztek** (`scripts/test/`, fetch-injektálással/mockkal — a script jelenleg
globális `fetch`-et hív, ezért a tesztelhetőséghez vagy `globalThis.fetch` mockolás, vagy a
URL-építő helper külön exportja + tesztelése; a pontos technika a planben):
- **E1:** `NCBI_API_KEY` env beállítva → az épített URL tartalmazza `&api_key=`-t; env nélkül → nem.
- **E2:** non-ok HTTP-válasz (429) → a lookup eredménye tranziens (networkError-szerű, nem
  `exists:false`); a `main`-szintű klasszifikáció NEM NOT_FOUND. 200 + `rec.error` → továbbra is NOT_FOUND.
- **E3:** adott NETWORK_ERR-darabszámra a záró summary helyes count-sort ír.

**Smoke / integráció:**
- A workflow YAML nem unit-tesztelhető → verifikáció = az első PR (a feat-branchről) zölden
  triggereli **mindkét** jobot. A teszt+build job determinisztikus; a PMID-job NCBI-függő.
- Lib-wide regresszió: `node scripts/verify-pmids.mjs --batch` lokálisan exit 0 (407 PMID OK)
  a merge előtt.

**Regresszió:** a meglévő 3 suite (12+12+4) zöld marad — E1–E3 a network-rétegre lokalizált.

## 8. Kockázatok és kompatibilitás

- **E2 viselkedés-változás:** non-ok HTTP eddig NOT_FOUND (blocking) → ezentúl tranziens
  (nem-blokkoló). Ez **szándékos és helyes** (a valódi NOT_FOUND a 200+rec.error úton marad), de
  a hook-viselkedésre is hat: egy NCBI 429 commit-időben eddig (elvileg) blokkolt volna, ezentúl
  átengedi a commitot. Mivel a hook csak a staged entry pár PMID-jeit nézi és ritka a 429, ez
  elfogadható — és összhangban a "network-hiba nem-blokkoló" alapelvvel.
- **`HUSKY=0` CI-ben:** szükséges, hogy az `npm ci` `prepare`-je ne próbáljon hookot installálni.
- **`NCBI_API_KEY` secret hiánya:** a CI kulcs nélkül is fut (E1 graceful degrade), csak
  429-érzékenyebb → ezért fontos az E2 tranziens-tűrés.
- **`npm ci` build determinizmus:** a `vite build`-nek env/secret-függetlennek kell lennie
  (statikus PWA) — a planben verifikáljuk, hogy CI-ben (headless) is lefut.
- **Forrás-string tesztek:** substring-egyezést használjanak (a summary-szövegek magyarul/emojival).

## 9. Manuális teendő (user, nem kód)

`NCBI_API_KEY` repo-secret beállítása: GitHub → repo Settings → Secrets and variables → Actions
→ New repository secret. Kulcs igénylése: NCBI-account → Account Settings → API Key Management.
**Nem blokkolja a shipet** — a CI kulcs nélkül is működik (csak 429-érzékenyebb).

## 10. Elfogadási kritériumok

1. `.github/workflows/ci.yml` létezik; push/PR/manual triggerre fut.
2. Job A: `npm ci` + `node --test scripts/test/` + `npm run build` zöld egy tiszta PR-en.
3. Job B: lib-wide `verify-pmids --batch` lefut; valódi fabrikált PMID (NOT_FOUND/MISMATCH) →
   job piros, exit 1.
4. E2: szimulált 429 / non-ok HTTP-válasz → tranziens (nem NOT_FOUND), a job nem bukik el rajta.
5. E1: `NCBI_API_KEY` env jelenlétében az eutils URL `&api_key=`-t tartalmaz; hiányában nem.
6. E3: a záró summary mutatja a network-unverified PMID-darabszámot, ha van.
7. A meglévő 3 teszt-suite + az új E1–E3 tesztek zöldek (`node --test scripts/test/`).
8. Az első feat-branch PR a GitHubon mindkét jobot zölden hozza (smoke).
