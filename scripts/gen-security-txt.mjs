// Generate public/.well-known/security.txt (RFC 9116) from the single-source contact in
// src/config/site.js, so the security-contact email lives in exactly ONE place. Wired into
// `npm run build` (before vite copies public/ -> dist/). Expires is a fixed far-future date
// (bump it yearly) so the file does not churn on every build.
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CONTACT_EMAIL, SITE_ORIGIN } from '../src/config/site.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '..', 'public', '.well-known')
const EXPIRES = '2027-07-01T00:00:00.000Z' // RFC 9116 requires Expires; bump yearly.

const body = [
  `Contact: mailto:${CONTACT_EMAIL}`,
  `Expires: ${EXPIRES}`,
  'Preferred-Languages: hu, en',
  `Canonical: ${SITE_ORIGIN}/.well-known/security.txt`,
  '',
].join('\n')

mkdirSync(OUT_DIR, { recursive: true })
writeFileSync(join(OUT_DIR, 'security.txt'), body)
console.log(`[security-txt] wrote public/.well-known/security.txt (contact ${CONTACT_EMAIL})`)
