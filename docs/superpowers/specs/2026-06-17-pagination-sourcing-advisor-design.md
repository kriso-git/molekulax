# Spec — Pagination arrows + Beszerzés section + single-advisor cleanup (2026-06-17)

Three small, independent homepage features (owner-approved). Feature ③ from the
original batch (Three.js card visuals) is deferred to its own brainstorm.

## ① Pagination: dots → horizontal arrows on desktop
- `DotsIndicator.jsx` becomes responsive: **<lg** renders the existing 4 dots
  (unchanged); **lg+** renders `◄  [active library name]  ►` (lucide
  ChevronLeft/Right + `libraries[currentIndex].name[lang]`).
- Arrows reuse `onJumpTo` with computed `(currentIndex ∓ 1 + n) % n` (jumpTo
  already rotates the cube the short way). a11y: arrow `aria-label` = target
  library name. Toggle purely via Tailwind (`flex lg:hidden` / `hidden lg:flex`),
  no JS media query. Side `CubeNavControls` arrows stay.

## ② Beszerzés section
- New `src/components/Sourcing.jsx`, mounted in `App.jsx` between `<Education/>`
  and the lazy `<LibraryCube/>`.
- Title `besz.title` = "Beszerzés" / "Where to buy" / "Gdzie kupić". Short
  subtitle `besz.subtitle` (removable).
- Two glass cards (1col mobile / 2col desktop), indigo/purple accent (matches
  AffiliateButton; green is reserved for chemistry):
  - **LIMITLESS** — coupon "-10% · KUPON: MOLEKULAX", CTA → `https://www.limitlessbiochem.com/?ref=molekulax`
  - **PCTZONE** — coupon "KUPON: MOLEKULAX", CTA → `https://pctzone.su/?coupon=molekulax`
- Links: `target="_blank" rel="noopener noreferrer sponsored"`. URLs are
  module constants; copy via `besz.*` i18n keys (hu/en/pl).

## ③ Single advisor + HU-only Telegram
- `TelegramButtons.jsx`: remove the PL button (`TELEGRAM_PL_URL` @naxxax) and its
  constant; keep only the HU Telegram (@molekulaxtra). Button text "HU" → "Telegram".
- i18n plural→singular (hu/en/pl): `hero.body.bold`, `hero.body.end`,
  `edu.f3.title`, `edu.f3.desc`, `tg.body`, `tg.cta`.
- `DnaPreview.jsx` sample card text "Tanácsadók…" → singular (consistency).
- Already-singular strings (faqContent.js, library helpBody, gal.help.body,
  entry.cta.body) are left untouched.

## Verification
`npm run build` + `npm run smoke` (7/7) + puppeteer home-check (dark canvas / light
no-canvas, both 0 console errors) + a Sourcing-render check + live verify after merge.
No new deps. three/background untouched.
