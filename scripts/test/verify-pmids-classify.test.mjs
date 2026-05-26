// Pure-function offline test for classifyOverlap()
// Run: node scripts/test/verify-pmids-classify.test.mjs
import { classifyOverlap, STATUS } from '../verify-pmids.mjs'

const cases = [
  // OK: EN-default, high overlap
  {
    cited: 'Effects of BPC-157 on tissue healing review',
    real: 'Effects of BPC-157 on tissue healing systematic review',
    expect: STATUS.OK,
    langTag: null,
  },
  // MISMATCH: EN-default, low overlap
  {
    cited: 'Effects of GHK-Cu on collagen synthesis',
    real: 'Rosuvastatin pharmacokinetics in elderly patients',
    expect: STATUS.MISMATCH,
    langTag: null,
  },
  // MAYBE_FP_HU: HU diacritics + low overlap
  {
    cited: 'Háromszoros inkretinreceptor-agonista hatása',
    real: 'Triple incretin receptor agonist effect on obesity',
    expect: STATUS.MAYBE_FP_HU,
    langTag: 'hu',
  },
  // OK [hu-loose]: HU + overlap >= 0.10
  {
    cited: 'Hatékony BPC-157 sports medicine tissue healing review',
    real: 'BPC-157 sports medicine tissue healing review evidence',
    expect: STATUS.OK,
    langTag: 'hu',
  },
  // MAYBE_FP_RU: bracketed + low overlap (no S4 strip yet)
  {
    cited: '[Trojnoi inkretinagonist deistvie pri obezitete]',
    real: 'Triple incretin agonist effect on obesity',
    expect: STATUS.MAYBE_FP_RU,
    langTag: 'ru',
  },
  // OK [ru-loose]: bracketed + overlap >= 0.10 (without S4, brackets keep tokens whole-enough)
  // NOTE: pre-S4 token-overlap of '[BPC-157 sports medicine review systematic clinical]' vs
  // 'BPC-157 sports medicine systematic review clinical' — the tokens() helper filters
  // length>=4 after the normalize() punct-strip, which already converts '[' to space.
  // So 'sports', 'medicine', 'review', 'systematic', 'clinical' tokens all overlap.
  {
    cited: '[BPC-157 sports medicine review systematic clinical evidence]',
    real: 'BPC-157 sports medicine systematic review clinical evidence',
    expect: STATUS.OK,
    langTag: 'ru',
  },
  // MISMATCH: empty cited (overlap 0, no lang detect)
  {
    cited: '',
    real: 'Real PubMed paper title here',
    expect: STATUS.MISMATCH,
    langTag: null,
  },
  // MISMATCH: EN unrelated short tokens
  {
    cited: 'Completely random unrelated text fluff here today now',
    real: 'Different paper subject matter entirely now today fresh',
    expect: STATUS.MISMATCH,
    langTag: null,
  },
]

let pass = 0,
  fail = 0
for (const c of cases) {
  const got = classifyOverlap(c.cited, c.real)
  const statusOk = got.status === c.expect
  const langOk = got.langTag === c.langTag
  if (statusOk && langOk) {
    console.log(
      `  ✅ "${c.cited.slice(0, 50)}" → ${got.status} ${got.langTag || ''} (ratio ${(got.ratio * 100).toFixed(0)}%)`,
    )
    pass++
  } else {
    console.log(
      `  ❌ "${c.cited.slice(0, 50)}" → expected ${c.expect}/${c.langTag}, got ${got.status}/${got.langTag} (ratio ${(got.ratio * 100).toFixed(0)}%)`,
    )
    fail++
  }
}
console.log(`\n${pass}/${pass + fail} passed`)
if (fail > 0) process.exit(1)
