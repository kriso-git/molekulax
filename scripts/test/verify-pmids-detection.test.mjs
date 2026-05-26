// Pure-function offline test for isHuRuTitle()
// Run: node scripts/test/verify-pmids-detection.test.mjs
import { isHuRuTitle } from '../verify-pmids.mjs'

const cases = [
  // HU-cited (diacritics)
  { input: 'BPC-157 az ortopédiai sportmedicinában', expected: 'hu' },
  { input: 'Hatékonyság vizsgálata depresszióban', expected: 'hu' },
  { input: 'Egy ékezetes szó: jó', expected: 'hu' },
  // RU-bracketed
  { input: '[Effects of Selank on anxiety in GAD patients]', expected: 'ru' },
  { input: '[Bromantane mechanism of action]', expected: 'ru' },
  // EN-default (no detect)
  { input: 'Emerging Use of BPC-157 in Orthopaedic Sports Medicine', expected: null },
  { input: 'Effects of GHK-Cu on collagen synthesis', expected: null },
  // Edge cases
  { input: '', expected: null },
  { input: null, expected: null },
  { input: undefined, expected: null },
  // Partial bracket (NOT trigger — by design)
  { input: 'Effects of [collagen] in skin', expected: null },
  // Single HU char — should still detect
  { input: 'Effect of Co-Q10 in fókusz study', expected: 'hu' },
]

let pass = 0, fail = 0
for (const c of cases) {
  const got = isHuRuTitle(c.input)
  if (got === c.expected) {
    console.log(`  ✅ "${String(c.input).slice(0, 50)}" → ${got}`)
    pass++
  } else {
    console.log(`  ❌ "${String(c.input).slice(0, 50)}" → expected ${c.expected}, got ${got}`)
    fail++
  }
}
console.log(`\n${pass}/${pass + fail} passed`)
if (fail > 0) process.exit(1)
