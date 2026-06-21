// Single source of truth for site-wide identity / contact values. Change the value here
// to update it EVERYWHERE that imports it (the legal/compliance contact across the privacy
// notice, the affiliate disclosure, and the generated /.well-known/security.txt — the last
// via scripts/gen-security-txt.mjs, which reads CONTACT_EMAIL from this file at build time).
//
// NOTE: this is the LEGAL / compliance contact. The Footer's social/general contact
// (molekulaxtra@gmail.com) is intentionally separate.
export const CONTACT_EMAIL = 'molekulax@gmail.com'

export const SITE_NAME = 'MolekulaX'
export const SITE_ORIGIN = 'https://molekulax.hu'
