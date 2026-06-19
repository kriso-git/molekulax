// Per-entry sourcing availability — which partner shop carries each compound,
// and the exact product URL (with referral / coupon baked in by the builders).
//
// Every slug below was verified against the live catalogue: each product URL
// returned HTTP 200 and its page <title> named the exact compound (no
// false-positive links). Entries NOT listed here have no confirmed source on
// any partner shop, so the UI shows no sourcing button for them — by design.
//
// Rollout: peptides first. Other libraries are added once their catalogues are
// matched + verified the same way.

// Partner shops. `productUrl(slug)` returns the full link with the affiliate
// attribution already applied. `coupon` is non-null only when the discount
// requires the visitor to type the code at checkout (no referral param exists).
export const SOURCING_PARTNERS = {
  limitless: {
    name: 'LIMITLESS',
    logo: '/sourcing/limitless.png',
    // WooCommerce product page; ?ref=molekulax carries the affiliate attribution.
    productUrl: (slug) => `https://www.limitlessbiochem.com/product/${slug}/?ref=molekulax`,
    coupon: null,
  },
  driada: {
    name: 'DRIADA',
    logo: '/sourcing/driada.png',
    // OpenCart flat product handle. No referral param — the visitor MUST enter
    // the MOLEKULAX coupon at checkout for the discount, so we surface it.
    productUrl: (slug) => `https://driadashop.to/${slug}`,
    coupon: 'MOLEKULAX',
  },
  pctzone: {
    name: 'PCTZONE',
    logo: '/sourcing/pctzone.png',
    // WooCommerce product page. ?coupon=molekulax applies the MOLEKULAX discount;
    // the code is also surfaced so the visitor can enter it manually if needed.
    productUrl: (slug) => `https://pctzone.su/product/${slug}/?coupon=molekulax`,
    coupon: 'MOLEKULAX',
  },
}

// Fixed display order so a compound sold by several shops always lists them the
// same way.
const PARTNER_ORDER = ['limitless', 'driada', 'pctzone']

// library id -> entry id -> { partnerKey: verifiedProductSlug }
export const SOURCING_AVAILABILITY = {
  peptides: {
    '5-amino-1mq': { limitless: '5-amino-1mq-50mg-lyophilized-powder' },
    'aod-9604': { limitless: 'aod-9604-5mg' },
    'bpc-157': { limitless: 'bpc-157-10mg-lyophilized-powder', driada: 'bpc-157-10mg' },
    'cagrilintide': { driada: 'cagrilintide-10mg' },
    'cjc-1295': { limitless: 'cjc-1295-with-dac-5mg-lyophilized-powder', driada: 'cjc1295-with-dac-2mg' },
    'cjc-1295-ipamorelin': { limitless: 'ipamorelin-cjc-1295-mix-5-mg-5-mg' },
    'dsip': { limitless: 'dsip' },
    'epithalon': { limitless: 'epithalon-10mg' },
    'ghk-cu': { limitless: 'ghk-cu-50mg', driada: 'ghk-cu-50mg' },
    'ghrp-2': { limitless: 'ghrp-2-10mg-lyophilized-powder', driada: 'ghrp-2-5mg' },
    'ghrp-6': { limitless: 'ghrp-6-10mg-lyophilized-powder', driada: 'ghrp-6-5mg' },
    'glow': { limitless: 'glow-blend-ghk-cu-bpc-157-tb-500-70mg-lyophilized-powder' },
    'hcg-peptid': { driada: 'hcg-5000iu-human-chorionic-gonadotropin' },
    'hgh': { driada: 'somatropin-hgh-powder-100iu' },
    'hmg-peptid': { driada: 'hmg-75iu' },
    'humanin': { limitless: 'humanin-10mg-lyophilized-powder' },
    'igf-1-lr3': { driada: 'igf-1-lr3' },
    'ipamorelin': { limitless: 'ipamorelin-10mg-lyophilized-powder', driada: 'ipamorelin-2mg' },
    'klow-protocol': { limitless: 'klow-80-mg' },
    'kpv': { limitless: 'kpv-10mg-lyophilized-powder' },
    'll-37': { limitless: 'll-37-5mg-lyophilized-powder' },
    'melanotan-2': { limitless: 'melanotan-2-10mg-lyophilized-powder', driada: 'melanotan-2-10mg' },
    'mots-c': { limitless: 'mots-c', driada: 'mots-c-10-mg' },
    'nad-plus': { limitless: 'nad-500-mg' },
    'pinealon': { limitless: 'pinealon-10mg-lyophilized-powder' },
    'pt-141': { limitless: 'pt-141-10mg', driada: 'pt-141-10mg' },
    'retatrutide': { limitless: 'retatrutide-10mg' },
    'selank': { limitless: 'selank-10mg' },
    'semaglutide': { driada: 'semaglutide-2mg' },
    'sermorelin': { limitless: 'sermorelin-5mg-lyophilized-powder' },
    'snap-8': { limitless: 'snap-8-10mg-lyophilized-powder' },
    'ss-31': { limitless: 'ss-31-50-mg' },
    'tb-500': { limitless: 'tb-500-10-mg', driada: 'tb-500-3' },
    'tesamorelin': { limitless: 'tesamorelin-10-mg' },
    'thymosin-alpha-1': { limitless: 'thymosin-alpha-1-5mg-lyophilized-powder' },
    // NOTE: PCTZONE is intentionally excluded from peptides (it is a pharma /
    // PCT-focused shop). It is reserved for the pharmaceutical / performance
    // libraries. So tirzepatide / liraglutide (only carried by PCTZONE) show no
    // peptide button.
  },
}

/**
 * Returns the ordered list of buyable sources for an entry, or [] when none.
 * Each item: { key, name, url, coupon }.
 */
export function getSourcing(libraryId, entryId) {
  const avail = SOURCING_AVAILABILITY[libraryId]?.[entryId]
  if (!avail) return []
  return PARTNER_ORDER.filter((key) => avail[key]).map((key) => {
    const p = SOURCING_PARTNERS[key]
    return { key, name: p.name, logo: p.logo, url: p.productUrl(avail[key]), coupon: p.coupon }
  })
}
