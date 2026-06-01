// Offline unit tests for v0.34 CI-robustness additions (E1-E4). No real network.
// Run: node scripts/test/verify-pmids-network.test.mjs
import assert from 'node:assert/strict'
import {
  withApiKey,
  lookupPmid,
  lookupBatched,
  computeExitCode,
  networkSummaryLine,
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

// --- E2: HTTP-error response is transient, not NOT_FOUND ---
const realFetch = globalThis.fetch

async function withMockFetch(impl, fn) {
  globalThis.fetch = impl
  try {
    return await fn()
  } finally {
    globalThis.fetch = realFetch
  }
}

await (async () => {
  // 429 on single lookup → networkError, NOT exists:false
  await withMockFetch(async () => ({ ok: false, status: 429, json: async () => ({}) }), async () => {
    const r = await lookupPmid('123')
    check('E2: lookupPmid 429 → networkError (not exists:false)', () => {
      assert.equal(r.networkError, true)
      assert.notEqual(r.exists, false)
    })
  })

  // 503 on batch → every PMID in chunk networkError
  await withMockFetch(async () => ({ ok: false, status: 503, json: async () => ({}) }), async () => {
    const m = await lookupBatched(['111', '222'])
    check('E2: lookupBatched 503 → all entries networkError', () => {
      assert.equal(m.get('111').networkError, true)
      assert.equal(m.get('222').networkError, true)
    })
  })

  // 200 + rec.error → real NOT_FOUND preserved (exists:false)
  await withMockFetch(
    async () => ({ ok: true, json: async () => ({ result: { '123': { error: 'cannot get document summary' } } }) }),
    async () => {
      const r = await lookupPmid('123')
      check('E2: lookupPmid 200+rec.error → exists:false (NOT_FOUND preserved)', () => {
        assert.equal(r.exists, false)
        assert.notEqual(r.networkError, true)
      })
    },
  )
})()

// --- E4: computeExitCode ---
check('E4: clean → 0', () => {
  assert.equal(computeExitCode({ blockingCount: 0, maybeFpCount: 0, networkErrCount: 0, strictMode: false, ciMode: false }), 0)
})
check('E4: blocking → 1', () => {
  assert.equal(computeExitCode({ blockingCount: 2, maybeFpCount: 0, networkErrCount: 0, strictMode: false, ciMode: false }), 1)
})
check('E4: strict + maybeFp → 1', () => {
  assert.equal(computeExitCode({ blockingCount: 0, maybeFpCount: 1, networkErrCount: 0, strictMode: true, ciMode: false }), 1)
})
check('E4: maybeFp without strict → 0', () => {
  assert.equal(computeExitCode({ blockingCount: 0, maybeFpCount: 3, networkErrCount: 0, strictMode: false, ciMode: false }), 0)
})
check('E4: ci + network → 2', () => {
  assert.equal(computeExitCode({ blockingCount: 0, maybeFpCount: 0, networkErrCount: 5, strictMode: false, ciMode: true }), 2)
})
check('E4: network WITHOUT ci → 0 (hook path unchanged)', () => {
  assert.equal(computeExitCode({ blockingCount: 0, maybeFpCount: 0, networkErrCount: 5, strictMode: false, ciMode: false }), 0)
})
check('E4: blocking beats ci+network (1 wins over 2)', () => {
  assert.equal(computeExitCode({ blockingCount: 1, maybeFpCount: 0, networkErrCount: 5, strictMode: false, ciMode: true }), 1)
})

// --- E3: networkSummaryLine ---
check('E3: count 0 → null', () => {
  assert.equal(networkSummaryLine(0), null)
})
check('E3: count 3 → message with count', () => {
  const line = networkSummaryLine(3)
  assert.ok(line && line.includes('3') && /unverified/i.test(line))
})

console.log(`\n${pass}/${pass + fail} passed`)
if (fail > 0) process.exit(1)
