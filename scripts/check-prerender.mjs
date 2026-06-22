// Gate: with JS DISABLED, the prerendered static pages must still show content
// (this is exactly what non-JS crawlers + AI answer-engines see). Run after build.
import http from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import puppeteer from 'puppeteer'

const DIST = join(process.cwd(), 'dist')
const PORT = 4387
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' }
const CHECKS = [
  { path: '/peptidek/bpc-157', must: 'BPC-157' },
  { path: '/nootropikumok/semax', must: 'Semax' },
  { path: '/teljesitmenyfokozok/testosterone-info', must: 'Testosterone' },
  { path: '/peptidek', must: 'Peptid' },
  // EN/PL: langMust is a language-distinct content fragment from the rendered body.
  // It fails if the URL did NOT drive the language (a HU fallback would show "gyomor").
  { path: '/en/peptides/bpc-157', must: 'BPC-157', langMust: 'gastric' },
  { path: '/pl/peptydy/bpc-157', must: 'BPC-157', langMust: 'żołądk' },
  // Static content pages must also prerender visible content for JS-off crawlers.
  { path: '/adatvedelem', must: 'Adatvédelmi' },
  { path: '/en/privacy', must: 'Privacy', langMust: 'cookieless' },
  // Comparison index + a detail page (the detail must show member names + render in-language).
  { path: '/osszehasonlitas', must: 'Összehasonlít' },
  { path: '/en/compare/bpc-157-vs-tb-500', must: 'BPC-157', langMust: 'compares' },
  { path: '/osszehasonlitas/anastrozol-vs-letrozol-vs-exemestane', must: 'Anastrozol' },
  { path: '/en/compare/hmg-perf-vs-hmg-peptid', must: 'HMG', langMust: 'compares' },
]
const server = http.createServer((req, res) => {
  let file = join(DIST, decodeURIComponent(req.url.split('?')[0]))
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file)) file = join(DIST, 'index.html')
  res.setHeader('Content-Type', TYPES[extname(file)] || 'application/octet-stream')
  try { res.end(readFileSync(file)) } catch { res.writeHead(404); res.end('nf') }
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] })
let fail = 0
for (const c of CHECKS) {
  const page = await browser.newPage()
  await page.setJavaScriptEnabled(false)
  await page.goto(`http://127.0.0.1:${PORT}${c.path}`, { waitUntil: 'domcontentloaded', timeout: 20000 })
  const text = await page.evaluate(() => document.getElementById('root')?.innerText || '')
  const okMust = text.includes(c.must)
  const okLang = !c.langMust || text.includes(c.langMust)
  const ok = okMust && okLang
  if (!ok) fail++
  const label = c.langMust ? `"${c.must}" + lang "${c.langMust}"` : `"${c.must}"`
  console.log(`[${ok ? 'OK' : 'FAIL'}] JS-off ${c.path} contains ${label} (root text ${text.length} chars)`)
  await page.close()
}
await browser.close(); server.close()
console.log(fail === 0 ? '[prerender-check] ALL CLEAN — crawlers see content' : `[prerender-check] ${fail} FAILED`)
process.exit(fail === 0 ? 0 : 1)
