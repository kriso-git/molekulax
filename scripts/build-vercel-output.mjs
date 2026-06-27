// Build a Vercel Build Output API (v3) directory from the locally-prerendered dist/, so the
// finished site can be shipped with `vercel deploy --prebuilt` (Vercel does ZERO build work
// -> no 45-min limit, no Turbo, ~free). Mirrors vercel.json: the security/CSP headers apply
// to every response, static files (incl. the prerendered per-route index.html) are served by
// the filesystem handle, and anything unmatched falls back to /index.html (the SPA shell).
// Run AFTER `npm run build:prerender`.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = join(root, 'dist')
if (!existsSync(join(dist, 'index.html'))) { console.error('[vercel-output] dist/ not built — run npm run build:prerender first'); process.exit(1) }

const vj = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'))
const block = (vj.headers || []).find((h) => h.source === '/(.*)') || { headers: [] }
const headers = {}
for (const h of block.headers) headers[h.key] = h.value

const out = join(root, '.vercel', 'output')
rmSync(out, { recursive: true, force: true })
mkdirSync(join(out, 'static'), { recursive: true })
cpSync(dist, join(out, 'static'), { recursive: true })

// Branded short links for social bio/profile placements -> tracked UTM destinations.
// The visitor shares the clean `molekulax.hu/tt`; we redirect to the long UTM URL so
// Vercel Analytics can attribute the source. Kept in sync with vercel.json `redirects`.
// Add a [path, source] row to extend.
const shortLinks = [
  ['/tt', 'tiktok'],
  ['/ig', 'instagram'],
  ['/tg', 'telegram'],
  ['/yt', 'youtube'],
  ['/fb', 'facebook'],
]
const redirectRoutes = shortLinks.map(([path, source]) => ({
  src: `${path}/?`, // exact path, optional trailing slash
  status: 307,      // temporary: re-point campaigns later without fighting browser caches
  headers: { Location: `/?utm_source=${source}&utm_medium=bio&utm_campaign=launch` },
}))

const config = {
  version: 3,
  routes: [
    { src: '/(.*)', headers, continue: true }, // CSP + security headers on every response
    ...redirectRoutes,                         // /tt /ig /tg /yt /fb -> UTM-tagged URLs
    { handle: 'filesystem' },                  // serve static files (prerendered index.htmls)
    { src: '/(.*)', dest: '/index.html' },      // SPA fallback for unmatched paths
  ],
}
writeFileSync(join(out, 'config.json'), JSON.stringify(config, null, 2))
console.log(`[vercel-output] .vercel/output ready (${Object.keys(headers).length} headers, ${redirectRoutes.length} short-link redirects, static copied from dist/)`)
