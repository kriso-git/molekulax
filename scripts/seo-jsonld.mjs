// Pure builders for per-page schema.org JSON-LD (SEO structured data).
// Phase 2 emits a MedicalWebPage describing each compound as a Drug. Educational,
// not medical advice — kept factual (name + description + url), no dosing claims.

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
