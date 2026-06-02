// Pure verdict logic for the render-smoke guard. No I/O, no browser — offline-testable
// via node --test. The runner (scripts/smoke-render.mjs) gathers inputs from a real
// browser and delegates the pass/fail decision here so the logic has unit coverage.

const ROOT_HTML_MIN = 1000

// Console/page messages that must NOT count as smoke failures (benign noise).
const BENIGN_PATTERNS = [
  /favicon\.ico/i,
  /manifest\.webmanifest/i,
  /service ?worker/i,
  /\bworkbox\b/i,
  /registerSW/i,
]

export function isBenignError(text) {
  if (!text) return false
  return BENIGN_PATTERNS.some((re) => re.test(text))
}

// Inputs: rootChildCount (#root.children.length), rootHtmlLength (#root.innerHTML.length),
// errors (array of console.error/pageerror strings), fallbackPresent ([data-error-boundary]).
// Returns { ok, reasons } — reasons lists every failed predicate for a clear CI report.
export function classifySmokeResult({
  rootChildCount = 0,
  rootHtmlLength = 0,
  errors = [],
  fallbackPresent = false,
} = {}) {
  const reasons = []
  if (rootChildCount <= 0) reasons.push('empty #root (app did not mount)')
  if (rootHtmlLength <= ROOT_HTML_MIN) reasons.push(`#root html too small (${rootHtmlLength} <= ${ROOT_HTML_MIN})`)
  if (fallbackPresent) reasons.push('error-boundary fallback rendered ([data-error-boundary])')
  const realErrors = (errors || []).filter((e) => !isBenignError(e))
  if (realErrors.length > 0) {
    reasons.push(`console/page errors: ${realErrors.length} (${realErrors.slice(0, 3).join(' | ')})`)
  }
  return { ok: reasons.length === 0, reasons }
}
