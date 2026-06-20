// CSP-enforcement gate: serve dist/ with the EXACT vercel.json CSP header and load
// the real routes; fail on any securitypolicyviolation. Run AFTER `npm run build`.
// Usage: node scripts/verify-csp.mjs            (uses default ROUTES)
//        node scripts/verify-csp.mjs /peptidek/bpc-157 /nootropikumok   (extra routes)
import http from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import puppeteer from 'puppeteer'

const DIST = join(process.cwd(), 'dist')
const PORT = 4398
const CSP = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; media-src 'self'; connect-src 'self'; worker-src 'self'; manifest-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'"
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' }

const EXTRA = process.argv.slice(2)
const ROUTES = ['/', '/#entry/peptides/bpc-157', '/#entry/nootropics/semax', ...EXTRA]

const server = http.createServer((req, res) => {
  let file = join(DIST, decodeURIComponent(req.url.split('?')[0].split('#')[0]))
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, 'index.html')
  res.setHeader('Content-Security-Policy', CSP)
  res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
  try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] })
let total = 0
for (const route of ROUTES) {
  for (const vp of [{ w: 1280, h: 900 }, { w: 390, h: 844 }]) {
    const page = await browser.newPage()
    await page.setViewport({ width: vp.w, height: vp.h })
    await page.evaluateOnNewDocument(() => { window.__csp = []; document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(`${e.violatedDirective} ${e.blockedURI || '(inline)'}`)) })
    const cons = []
    page.on('console', (m) => { const t = m.text(); if (/Content Security Policy|Refused to (load|execute|apply|connect)/i.test(t)) cons.push(t) })
    await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await new Promise((r) => setTimeout(r, 2500))
    const v = [...new Set([...(await page.evaluate(() => window.__csp || [])), ...cons])]
    total += v.length
    if (v.length) { console.log(`[CSP FAIL] ${route} @${vp.w}`); v.forEach((x) => console.log('   ! ' + x)) }
    await page.close()
  }
}
await browser.close(); server.close()
console.log(total === 0 ? '[CSP] ALL CLEAN — enforce-safe' : `[CSP] ${total} VIOLATION(S)`)
process.exit(total === 0 ? 0 : 1)
