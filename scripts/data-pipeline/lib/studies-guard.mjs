const ALLOWED_PATTERNS = [
  /^https?:\/\/(www\.)?pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/?/i,
  /^https?:\/\/(www\.)?ncbi\.nlm\.nih\.gov\/pmc\/articles\/PMC\d+/i,
  /^pmid:\s*\d+$/i,
  /^https?:\/\/(www\.)?fda\.gov\//i,
  /^https?:\/\/(www\.)?accessdata\.fda\.gov\//i,
  /^https?:\/\/(www\.)?ema\.europa\.eu\//i,
  /^https?:\/\/(www\.)?clinicaltrials\.gov\//i,
]

const PMID_REGEX = /^\d+$/

export function validateStudyRef(ref) {
  if (!ref || typeof ref !== 'object') return { ok: false, reason: 'Not an object' }
  if (ref.pmid && PMID_REGEX.test(String(ref.pmid))) return { ok: true }
  if (ref.url) {
    for (const pattern of ALLOWED_PATTERNS) {
      if (pattern.test(ref.url)) return { ok: true }
    }
    return { ok: false, reason: `URL not in allowed peer-reviewed sources: ${ref.url}` }
  }
  return { ok: false, reason: 'Missing pmid or url field' }
}

export function filterStudies(arr = []) {
  const valid = []
  const rejected = []
  for (const ref of arr) {
    const result = validateStudyRef(ref)
    if (result.ok) valid.push(ref)
    else rejected.push({ attempted: ref.url || ref.pmid || JSON.stringify(ref), reason: result.reason })
  }
  return { valid, rejected }
}
