// Offline unit tests for v0.34 CI-robustness additions (E1-E4). No real network.
// Run: node scripts/test/verify-pmids-network.test.mjs
import assert from 'node:assert/strict'
import {
  withApiKey,
} from '../verify-pmids.mjs'

let pass = 0
let fail = 0
function check(name, fn) {
  try {
    fn()
    console.log(`  ✓ ${name}`)
    pass++
  } catch (err) {
    console.error(`  ✗ ${name}\n    ${err.message}`)
    fail++
  }
}

// --- E1: withApiKey ---
const BASE = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=123&retmode=json'

check('E1: no NCBI_API_KEY env → url unchanged', () => {
  delete process.env.NCBI_API_KEY
  assert.equal(withApiKey(BASE), BASE)
})

check('E1: NCBI_API_KEY set → appends &api_key=', () => {
  process.env.NCBI_API_KEY = 'TESTKEY123'
  assert.equal(withApiKey(BASE), `${BASE}&api_key=TESTKEY123`)
  delete process.env.NCBI_API_KEY
})

check('E1: key is URL-encoded', () => {
  process.env.NCBI_API_KEY = 'a b/c'
  assert.equal(withApiKey(BASE), `${BASE}&api_key=a%20b%2Fc`)
  delete process.env.NCBI_API_KEY
})

console.log(`\n${pass}/${pass + fail} passed`)
if (fail > 0) process.exit(1)
