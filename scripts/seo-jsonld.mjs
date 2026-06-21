// Pure builders for per-page schema.org JSON-LD (SEO structured data).
// Phase 2 emits a MedicalWebPage describing each compound as a Drug. Educational,
// not medical advice — kept factual (name + description + url), no dosing claims.

// FAQPage from an array of { q, a } items (homepage FAQ_CONTENT flattened, or an entry's
// faq array). Answer/question HTML is stripped to plain text (safest for the rich result).
// Returns null for an empty list so callers can skip injection.
export function faqJsonLd(items, lang = 'hu') {
  const qa = (items || []).filter((it) => it && it.q && it.a)
  if (!qa.length) return null
  const plain = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: qa.map((it) => ({
      '@type': 'Question',
      name: plain(it.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(it.a) },
    })),
  }
}

// BreadcrumbList from an ordered list of { name, url } crumbs (Home first). Returns null
// for fewer than 2 crumbs (a single-level page has no meaningful trail).
export function breadcrumbJsonLd(items) {
  const crumbs = (items || []).filter((it) => it && it.name && it.url)
  if (crumbs.length < 2) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

export function entryJsonLd({ name, desc, url, libraryName, lang = 'hu' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    inLanguage: lang,
    url,
    name,
    description: desc || '',
    about: {
      '@type': 'Drug',
      name,
      description: desc || '',
    },
    isPartOf: {
      '@type': 'CollectionPage',
      name: libraryName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MolekulaX',
      url: 'https://molekulax.hu/',
    },
  }
}
