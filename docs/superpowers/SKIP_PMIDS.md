# v0.28 SKIP_PMIDS — Un-verifiable studies deleted, not replaced

> **Policy:** If a baseline-PMID is bad AND NCBI esearch returns 0 candidates ≥0.3 ratio AND augmented `findings`+`population` query also fails AND manual WebFetch yields no plausible paper for the claim → DELETE the study entry entirely. Document the deletion here with reason.

## Format

For each deleted study, log:

```
### <lib>/<entry> — PMID <bad-pmid> DELETED

**Original cite:** <citedTitle>
**Reason:** <why no candidate found — niche topic / very old paper / non-English source / claim is uncitable>
**Commit:** <hash>
**Date:** YYYY-MM-DD
```

## Entries

_(none yet — populate during execution)_
