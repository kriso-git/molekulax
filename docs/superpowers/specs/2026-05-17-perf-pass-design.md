# MolekulaX — Phase 8 Perf-pass — Design

**Date:** 2026-05-17
**Phase:** 8 (főtask)
**Predecessor:** Phase 7 (`v0.7-cube-nav-stable`, `873a31f`)
**Estimated commits:** 6-10
**Estimated effort:** 4-6h (1 session)

---

## Goal

Home mobile Lighthouse Performance **63 → ≥90**, no A11y/SEO regression, build ≤6s, no new console warnings. 3 független, párhuzamosan implementálható csapás 1 phase-ben:

1. **Quicksand self-host** (~+15-25 pont)
2. **Vendor split + EntryDetail lazy** (~+5-10 pont)
3. **Képek WebP + resize** (~+10-20 pont)

Mindhárom backward-compatible. Cube-nav stabil marad, UX/A11y/visual változatlan.

---

## Why now

Phase 7 záró-audit (`MolekulaX_Phase7_Smoke_Checklist.md` A4) Home mobile Perf-et 63-on hagyta — pre-existing root-cause Google Fonts Quicksand 809ms render-blocking + 599kB main JS parse + 54MB image-transfer a `public/peptides/` mappában. Phase 1-7 hagyományát megőrizve (nincs design-változás, csak perf-tuning) a felhasználói élmény és a Google Core Web Vitals ranking javul. SEO-launch előkészítés pillanata.

---

## Decisions (brainstorming gate-ek alapján)

| # | Kérdés | Választás |
|---|---|---|
| 1 | Phase 8 scope | **Mind a 3 csapás 1 phase-ben** (képek + fontok + bundle) |
| 2 | Font stratégia | **Self-host WOFF2-vel mind az 5 weight-tel** (300, 400, 500, 600, 700) |
| 3 | Bundle stratégia | **Vendor split (react+react-dom+lucide-react) + EntryDetail lazy** |
| 4 | Kép-pipeline | **WebP, minden public/peptides/*.png, npm script Sharp-pal + committed asset** |
| 5 | Image resize target | **1024×1024 (`fit: 'inside'`)** — a tile-ok DOM-ban kicsi méretben renderelődnek |
| 6 | WebP quality | **80 (effort 6)** — vizuálisan pixel-azonos, ~95%-os transfer-saving |
| 7 | AVIF | **Out of scope** — marginal gain WebP fölött, Phase 9 ha kell |
| 8 | Library-data lazy-load | **Out of scope** — Phase 7 hasBeenActive-szel komplex async flow |
| 9 | i18n locale-split | **Out of scope** — max +25kB gain, low ROI |
| 10 | Implementation sorrend | **Képek → fontok → bundle** (legnagyobb hatás előbb) |

---

## Architecture

### Csapás 1 — Quicksand self-host

**Új fájlok:**
- `public/fonts/quicksand/Quicksand-Light.woff2` (~25kB, weight 300)
- `public/fonts/quicksand/Quicksand-Regular.woff2` (~28kB, weight 400)
- `public/fonts/quicksand/Quicksand-Medium.woff2` (~28kB, weight 500)
- `public/fonts/quicksand/Quicksand-SemiBold.woff2` (~28kB, weight 600)
- `public/fonts/quicksand/Quicksand-Bold.woff2` (~28kB, weight 700)

Összesen ~125-150kB asset, de network-en a 400-as preload-olva, a többi `font-display: swap`-pal aszinkron.

**Forrás:** Google Fonts `https://fonts.gstatic.com/s/quicksand/v30/...` URL-ekről kézzel letöltve (WOFF2, latin-extended subset is benne kell legyen a magyar/lengyel diakritikákhoz). Alternatíva: `google-webfonts-helper` (https://gwfh.mranftl.com/fonts/quicksand) — letöltési helper csak woff2-t ad latin+latin-ext bundle-ban.

**`index.html` változások:**

```html
<!-- TÖRÖLVE -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<!-- HOZZÁADVA -->
<link rel="preload" href="/fonts/quicksand/Quicksand-Regular.woff2" as="font" type="font/woff2" crossorigin />
```

A 400-as weight a body default → ezt preload-oljuk. A többi weight a CSS-en keresztül a komponens-szinten igényelve, `font-display: swap`-pal aszinkron.

**`src/index.css` változások:** új `@font-face` blokk a teteje után:

```css
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/quicksand/Quicksand-Light.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD, U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* +4 további @font-face: 400, 500, 600, 700 */
```

A `unicode-range` Google Fonts default latin + latin-extended (HU/PL/EN lefedve).

---

### Csapás 2 — Vendor split + EntryDetail lazy

**`vite.config.js` változás:**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
  },
})
```

**`src/components/library/EntryDetailRoute.jsx` változás:**

```jsx
// ELŐTTE
import EntryDetail from './EntryDetail'

// UTÁNA
import { lazy, Suspense } from 'react'
const EntryDetail = lazy(() => import('./EntryDetail'))

// A renderben:
<Suspense fallback={<div style={{minHeight: 600}} />}>
  <EntryDetail {...props} />
</Suspense>
```

A `<div style={{minHeight: 600}}>` fallback megakadályozza a CLS-t — a viewport-on belüli helyet foglalja, amíg az EntryDetail chunk megérkezik (~100-200ms az első kattintás után).

**Várható chunk-felépítés (becslés):**

| Chunk | Méret (gzip) | Status |
|---|---|---|
| `vendor-*.js` | ~150kB | new, stable cache |
| `index-*.js` | ~270-320kB | main entry, csökkent |
| `LibraryCube-*.js` | ~52kB | változatlan, Phase 7 lazy |
| `EntryDetail-*.js` | ~80-100kB | new, lazy |
| **Total transfer** | **~550-620kB** | mai 650 ≈ marad, de eloszlik |

Az igazi gain itt nem a total size, hanem a **main entry** chunk csökkenése (599 → ~280-320), ami a Time-To-Interactive metrikat javítja, mert az index-*.js parse-cost kisebb a main thread-en.

**Risks:**
- `lucide-react` tree-shake: jelenleg minden ikon importálva az ES modulokon át, Vite default tree-shake-eli. Az ikonok csak az importáló komponensben kerülnek be a vendor-ba.
- EntryDetail első kattintás után 100-200ms loading-flash — fallback `minHeight:600` megelőzi a CLS-t.

---

### Csapás 3 — Kép-pipeline (WebP + resize)

**Új dep:** `sharp@^0.33.x` devDep (`npm install --save-dev sharp`). Build-time-only, runtime-ban nem terheli.

**Új fájl: `scripts/convert-images.mjs`**

```js
import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

const ROOT = 'public/peptides'
const RESIZE_THRESHOLD = 1024
const WEBP_QUALITY = 80
const WEBP_EFFORT = 6

const files = await readdir(ROOT)
const pngs = files.filter(f => f.toLowerCase().endsWith('.png'))

for (const file of pngs) {
  const inPath = join(ROOT, file)
  const outPath = inPath.replace(/\.png$/i, '.webp')

  const meta = await sharp(inPath).metadata()
  const needsResize = meta.width > RESIZE_THRESHOLD || meta.height > RESIZE_THRESHOLD

  let pipeline = sharp(inPath)
  if (needsResize) {
    pipeline = pipeline.resize({
      width: RESIZE_THRESHOLD,
      height: RESIZE_THRESHOLD,
      fit: 'inside',
      withoutEnlargement: true,
    })
  }
  await pipeline.webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT }).toFile(outPath)

  const inStat = await stat(inPath)
  const outStat = await stat(outPath)
  console.log(`${file}: ${(inStat.size/1024).toFixed(0)}kB PNG → ${(outStat.size/1024).toFixed(0)}kB WebP (${needsResize ? 'resized' : 'same size'})`)
}
```

**`package.json` scripts kibővítés:**

```json
"convert-images": "node scripts/convert-images.mjs"
```

**Workflow:**
1. Egyszer futtatva: `npm run convert-images`. Lokálisan generálja a `.webp` fájlokat.
2. A `.webp` fájlokat **git-be commit-oljuk** (binary asset, `.gitignore`-ba NEM kell).
3. **Markup migráció** — A `<img>` tag-ek `<picture>` markup-ra cserélése a következő fájlokban (Grep-en `<img` patternnel a writing-plans task pontosan be fogja járni):
   - `src/components/PeptideEffects.jsx` — 8 kategória-tile a `peptideEffects.js` `image:` mező alapján
   - `src/components/LibraryGallery.jsx` — Top10 grid tile-ok (`peptide.image`)
   - `src/components/library/EntryImage.jsx` — fallback ha `entry.image` van
   - `src/components/library/EntryDetail.jsx` — Hero image (ha van)

   **Migration pattern:**

   ```jsx
   // ELŐTTE
   <img src={category.image} alt={category.title[lang]} />

   // UTÁNA
   <picture>
     <source srcSet={category.image.replace(/\.png$/i, '.webp')} type="image/webp" />
     <img src={category.image} alt={category.title[lang]} loading="lazy" />
   </picture>
   ```

   `loading="lazy"` natív lazy-loading az above-fold-on kívüli képekre (a Hero tile lehet, hogy `loading="eager"` marad).

**Duplikáció takarítás:**
- `public/peptides/Gyógyulástsegítőpeptidek.png` (5.3MB, accented variant) — törölve külön commit-tal. A használatban lévő ASCII verzió `gyogyulastsegitopeptidek.png` (5.2MB → ~250kB WebP) marad.

**Becsült méret-megtakarítás:**

| Fájl | Előtte | Utána (WebP 1024 q80) |
|---|---|---|
| 9× kategória-tile @ 5-7MB | ~54MB | ~2-3MB |
| 10× peptid-foto @ 350-430kB | ~4MB | ~600-800kB |
| **Total `public/peptides/`** | **~58MB** | **~3-4MB** |

---

## Implementation order

A plan-ben ez a 9-task lebontás várható:

1. **Setup**: `npm install --save-dev sharp`, `scripts/convert-images.mjs` írás
2. **Run convert-images**: lokálisan futtatva, .webp fájlok generálása
3. **Commit .webp assets** + duplikált `Gyógyulástsegítőpeptidek.png` törlés (külön commit)
4. **Markup migration** `<picture>` minden image-helyen — érintett fájlok auditálása + módosítása
5. **Quicksand WOFF2 letöltés** + `public/fonts/quicksand/` mappa létrehozása
6. **`index.html` Google Fonts → preload swap** + `src/index.css` `@font-face` blokkok
7. **`vite.config.js` manualChunks + EntryDetailRoute React.lazy + Suspense fallback**
8. **Build + Lighthouse audit** (mobile + desktop, Home + Metformin)
9. **Smoke + finomítás** ha valamelyik audit alulmúl, célzott fix

Becsült commit-szám: **6-10** (1-3 előkészítés, 4 markup migration, 5-6 font, 7 bundle, 8-9 verifikáció/finomítás).

---

## Verification

### Automatizált audit (CI-szerű)

| # | Check | Tool | Acceptance |
|---|---|---|---|
| A1 | `npm run build` clean | build log | 0 err / 0 new warn / ≤6s |
| A2 | Bundle main entry chunk | build output | main ≤350kB gzip |
| A3 | Bundle vendor chunk | build output | vendor ≤170kB gzip (stable cache) |
| A4 | Total transfer (all chunks) | build output | ≤700kB gzip |
| A5 | `public/peptides/` size | `du -sb public/peptides/` | ≤8MB total |
| A6 | Lighthouse Home Perf mobile | `npx lighthouse https://molekulax.vercel.app/ --preset=mobile` | **≥90** (cél) |
| A7 | Lighthouse Home Perf desktop | `--preset=desktop` | ≥95 (no regression) |
| A8 | Lighthouse Home A11y mobile | mobile preset | =100 (no regression) |
| A9 | Lighthouse Home SEO mobile | mobile preset | ≥95 (no regression) |
| A10 | Lighthouse Metformin Perf mobile | `https://molekulax.vercel.app/#entry/pharmaceutical/metformin` | ≥80 (jelenleg 56) |
| A11 | DevTools Network: NO fonts.googleapis.com | hard-reload + check | 0 request |

### Humán smoke (manuálisan)

| # | Check | Hogyan |
|---|---|---|
| H1 | Visual: kategória-tile-ok pixel-comparison | Hard-reload + scroll Élettani Hatások szekcióra, 3-4 tile vizuálisan azonos a régivel |
| H2 | EntryDetail lazy-load nem lassít látható módon | Random peptid-tile kattintás → ≤500ms latency az adatlap megnyitásáig |
| H3 | Font visual: Quicksand body, Corporea heading | Hero + Education + Footer szöveg vizuálisan azonos |
| H4 | Mobile (DevTools iPhone 14 Pro) | Network throttle "Slow 4G" → first paint ≤1.5s, full load ≤4s |

### Acceptance criteria

- [ ] A1-A11 mind átment (A6 ≥90 a primary cél)
- [ ] H1-H4 user-confirmed
- [ ] 0 console error / warning a production build-ben
- [ ] Vercel auto-deploy zöld
- [ ] Git tag `v0.8-perf-pass-stable` az utolsó stable commit-on

---

## Out of scope

- **AVIF format** — 30% extra méret-saving WebP fölött, marginal gain, Phase 9 ha kell
- **Library data lazy-loading** (per-library `await import('./data')`) — Phase 7 hasBeenActive cache-szel komplex async flow ütközhet
- **i18n locale-split** (HU/EN/PL külön chunk) — max +25kB gzip gain, low ROI
- **Service Worker / PWA cache** — külön scope, runtime-overhead
- **Critical CSS extraction** — már most ~8.5kB gzip, marginal
- **Image CDN** (Cloudflare Images, Imgix) — Vercel built-in image optimization elég, no external dep
- **`vite-plugin-imagemin` build-time auto-convert** — komplikálja a build, manuális `npm run convert-images` átláthatóbb

---

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| WebP visual regression a kategória-tile-okon | Manuális H1 smoke 3-4 tile-on, quality 80 vizuálisan pixel-azonos a legtöbb image-en |
| Quicksand WOFF2 letöltési URL változik / 404 | Google Fonts `gstatic.com/s/quicksand/...` URL-ek stabilak. Backup: `google-webfonts-helper` webes UI-tól letöltés (`gwfh.mranftl.com/fonts/quicksand`) |
| EntryDetail lazy-load Suspense flash láthatóvá válik | `minHeight: 600` fallback megelőzi a CLS-t, a 100-200ms first-paint a network-cache után pillanat-szerű |
| Vendor chunk hash-cache invalidálódik minden build-ben | Vite default content-hash a chunk-fájlnevekben (`vendor-abc123.js`) — csak akkor változik, ha tényleg változott a vendor source. React-update kivételével stabil. |
| Sharp dep ~20MB build-only, CI lassítja | Csak npm install + manual script futás, CI nem hív `sharp`-ot a build alatt. Vercel cache-eli a `node_modules`-t between deploys. |
| Mobile Perf 90 nem elérhető még mindig | Phase 9 follow-up: kép-resize agresszívebb (640×640), AVIF format, vagy critical CSS extraction. Acceptance criteria 90 — alatta a phase nem zárható le. |

---

## Definition of Done (Phase 8 főtask)

- [ ] A1-A11 audit átment
- [ ] H1-H4 user-confirmed
- [ ] Git tag `v0.8-perf-pass-stable` push-olva
- [ ] Roadmap update: Phase 8 ✅
- [ ] Statusz file új session-blokk Phase 8 zárásról
- [ ] Memory (`project_molekulax.md`) update
