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

// PCTZONE WooCommerce product IDs (scraped from each product page). Used to build
// an add-to-cart + coupon URL that lands on the CART with the item already added
// and the MOLEKULAX coupon applied — so the discount is visible immediately
// (a plain product URL only stages the coupon in the session).
const PCTZONE_PRODUCT_IDS = {
  'artvigil-150mg': 2814,
  'cerebrolysin-injection-10ml-215-2mg': 16837,
  'modvigil-200mg': 3095,
  'modvigil-200mg-2': 6112,
  'tynept-12-5mg': 3332,
  'femistra-1mg': 2813,
  'oxandro-10mg': 44953,
  'sicriptin-2-5mg': 29840,
  'caberdost-0-5mg': 2851,
  'clenbut-40mcg': 2872,
  'clomisign-50mg': 2879,
  'dutanol-0-5mg': 2901,
  'xtane-25mg': 2925,
  'finpecia-1mg': 2931,
  'gonal-f-900iu': 24959,
  'zyhcg-5000iu': 2975,
  'genotropin-36iu-pen-hgh': 3249,
  'menodac-150iu': 3049,
  'letroz-2-5mg': 3021,
  'lethyrox-100mcg': 3027,
  'linorma-t3-20mcg': 36886,
  'masterbol-injection-100mg-x5-1ml-ampules': 37828,
  'tamoxifen-20mg-3': 14095,
  'pramipex-0-25mg': 3132,
  'primobol-100mg-ml-1ml-10-ampules': 27152,
  'provironum-25mg': 3051,
  'raloxiheal-60mg': 3165,
  'testacyp-250inj': 3322,
  'testorapid-100mg-ml': 44939,
  'testobalin-250mg-ml': 44909,
  'sustanon-250-inj': 3319,
  'winstrol-10mg': 3253,
  'bupron-sr-150mg': 2849,
  'healpecia-1mg': 2932,
  'fludac-20mg': 2943,
  'hisone-10mg': 42513,
  'accufine-20mg-3': 8978,
  'metfor-500mg': 3063,
  'morr-f-5-60ml': 3086,
  'tadacip-20mg': 3264,
  'tretigel-0-025-20gm': 31346,
}

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
    // Land on the CART with the product already added AND the MOLEKULAX coupon
    // applied in ONE click: /cart/?add-to-cart=<id>&coupon=molekulax. The shop's
    // own ?coupon= param is the only one that actually applies the discount
    // (verified: $3.96 → $3.56, coupon-molekulax row in the cart); it 404s on
    // /product/ pages but works on /cart/. Falls back to the clean product URL
    // (NOT ?coupon=, which would 404) when the id is unknown; the code is still
    // shown as a visible fallback.
    productUrl: (slug) => {
      const id = PCTZONE_PRODUCT_IDS[slug]
      return id
        ? `https://pctzone.su/cart/?add-to-cart=${id}&coupon=molekulax`
        : `https://pctzone.su/product/${slug}/`
    },
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
  nootropics: {
    "9-me-bc": { limitless: "9-me-bc-15mg-60-capsules" },
    "armodafinil": { pctzone: "artvigil-150mg" },
    "ashwagandha": { driada: "allaes-ashwagandha-ksm-66" },
    "bromantane": { limitless: "bromantane-90mg-ml-solution-20ml" },
    "cerebrolysin": { pctzone: "cerebrolysin-injection-10ml-215-2mg" },
    "dihexa": { limitless: "dihexa-10mg-30-capsules" },
    "fasoracetam": { limitless: "fasoracetam-20mg-60-capsules" },
    "flmodafinil": { limitless: "crl-40-941-60-capsules-50mg" },
    "lions-mane": { limitless: "lions-mane-500mg-60-capsles", driada: "allaes-lions-mane-1" },
    "methylene-blue": { limitless: "methylene-blue-5mg-60-capsules" },
    "modafinil": { driada: "modus-100mg-modafinil", pctzone: "modvigil-200mg" },
    "nefiracetam": { limitless: "nefiracetam-60-capsules-100mg" },
    "nooglutyl": { limitless: "nooglutyl-60-capsules-10mg" },
    "noopept": { limitless: "noopept-20mg-60-capsules" },
    "prl-8-53": { limitless: "prl-8-53-10mg-60-capsules" },
    "selank": { limitless: "selank-10mg" },
    "sunifiram": { limitless: "sunifram-15mg-60-capsules" },
    "tianeptine": { pctzone: "tynept-12-5mg" },
  },
  performance: {
    "5-amino-1mq": { limitless: "5-amino-1mq-50mg-30-capsules" },
    "albuterol": { driada: "salbutamol-4mg" },
    "anadrol": { driada: "anadrolus-50-mg-oxymetholone" },
    "anastrozol": { driada: "arimidyn-0-5-mg-anastrozole", pctzone: "femistra-1mg" },
    "anavar-info": { driada: "anavaros-10mg-oxandrolone", pctzone: "oxandro-10mg" },
    "atx-304": { limitless: "o-304-atx-inhibitor-100mg-30-capsules" },
    "bam15": { limitless: "bam-15-50mg-60-capsules" },
    "bromocriptine": { pctzone: "sicriptin-2-5mg" },
    "cabergoline": { driada: "caberos-cabergoline-0-25mg", pctzone: "caberdost-0-5mg" },
    "clenbuterol": { driada: "clenbutos-40-mcg-clenbuterol", pctzone: "clenbut-40mcg" },
    "clomid": { driada: "clomilad-25-mg-clomiphene-citrate", pctzone: "clomisign-50mg" },
    "dhb": { driada: "dihydroboldos-100-mg-ml-dihydroboldenone-cypionate" },
    "dianabol-info": { driada: "dinabolyn-10-mg-methandienone" },
    "dutasteride": { pctzone: "dutanol-0-5mg" },
    "equipoise": { driada: "boldelad-250-mg-ml-boldenone-undecylenate" },
    "exemestane": { driada: "aromalyn-25-mg-exemestane", pctzone: "xtane-25mg" },
    "finasteride": { driada: "finastelad-1-mg-finasteride", pctzone: "finpecia-1mg" },
    "fsh-rec-perf": { pctzone: "gonal-f-900iu" },
    "gw-501516": { driada: "allaes-cardarine" },
    "halotestin": { driada: "halos-5-mg-fluoxymesterone" },
    "hcg-perf": { driada: "hcg-5000iu-human-chorionic-gonadotropin", pctzone: "zyhcg-5000iu" },
    "hgh-info": { driada: "somatropin-hgh-liquid-100iu", pctzone: "genotropin-36iu-pen-hgh" },
    "hmg-perf": { driada: "hmg-75iu", pctzone: "menodac-150iu" },
    "l-carnitine": { limitless: "l-carnitine-500-mg-ml-solution-20-ml", driada: "levocarnitine-500-mg-ml-l-carnitine-10ml-vial" },
    "letrozol": { driada: "femaralyn-2-5-mg-letrozole", pctzone: "letroz-2-5mg" },
    "levothyroxine": { driada: "t4-euthymed-50-mcg-levothyroxine-sodium", pctzone: "lethyrox-100mcg" },
    "lgd-4033": { driada: "ligandrol-lgd4033" },
    "liothyronine": { driada: "liothymed-25-mcg-t3-triiodothyronine", pctzone: "linorma-t3-20mcg" },
    "masteron": { driada: "mastelad-100-mg-ml-drostanolone-propionate", pctzone: "masterbol-injection-100mg-x5-1ml-ampules" },
    "ment-19nor": { driada: "mentolad-50-mg-ml-trestolone-acetate" },
    "ment-test": { driada: "mentolad-50-mg-ml-trestolone-acetate" },
    "mots-c": { limitless: "mots-c", driada: "mots-c-10-mg" },
    "nandrolone-info": { driada: "nandecos-200-mg-ml-nandrolone-decanoate" },
    "nolvadex": { driada: "nolvados-10-mg-tamoxifen-citrate", pctzone: "tamoxifen-20mg-3" },
    "ostarine": { driada: "ostarine-mk-2866" },
    "pramipexole": { pctzone: "pramipex-0-25mg" },
    "pregnenolone": { limitless: "pregnenolone-micronized-10mg-60-capsules" },
    "primobolan": { driada: "primos-100-mg-ml-methenolone-enanthate", pctzone: "primobol-100mg-ml-1ml-10-ampules" },
    "proviron": { driada: "provironus-25-mg-mesterolone", pctzone: "provironum-25mg" },
    "rad-140": { driada: "testolone-rad-140" },
    "raloxifene": { driada: "raloxos-30mg-raloxifene", pctzone: "raloxiheal-60mg" },
    "ru58841": { limitless: "ru-58841-50mg-ml-30ml" },
    "s23": { driada: "mastorine-10mg-s23" },
    "s4": { driada: "andarine-s4" },
    "slu-pp-332": { limitless: "slu-pp-332-250mcg-60-capsules" },
    "superdrol": { driada: "superdrolyn-10-mg-methasterone" },
    "testosterone-info": {
      driada: "testos-250-mg-ml-testosterone-enanthate", pctzone: "testobalin-250mg-ml",
      variants: {
        prop: { driada: "propios-100-mg-ml-testosterone-propionate", pctzone: "testorapid-100mg-ml" },
        enan: { driada: "testos-250-mg-ml-testosterone-enanthate", pctzone: "testobalin-250mg-ml" },
        cyp: { driada: "cypilos-250-mg-ml-testosterone-cypionate", pctzone: "testacyp-250inj" },
        sus: { driada: "sustalad-250-mg-ml-sustanon", pctzone: "sustanon-250-inj" },
      },
    },
    "trenbolone-info": { driada: "trenacetos-100-mg-ml-trenbolone-acetate" },
    "turinabol": { driada: "turinadyn-10-mg-turinabol" },
    "winstrol-info": { driada: "stanos-10-mg-stanozolol", pctzone: "winstrol-10mg" },
    "yk-11": { driada: "myostan-yk-11" },
    "yohimbine": { driada: "yohimbinos-yohimbine-hydrochloride" },
  },
  pharmaceutical: {
    "bupropion": { pctzone: "bupron-sr-150mg" },
    "finasteride": { driada: "finastelad-1-mg-finasteride", pctzone: "healpecia-1mg" },
    "fluoxetine": { pctzone: "fludac-20mg" },
    "hydrocortisone": { pctzone: "hisone-10mg" },
    "isotretinoin": { driada: "accutadyn-isotretinoin-1", pctzone: "accufine-20mg-3" },
    "levothyroxin": { driada: "t4-euthymed-50-mcg-levothyroxine-sodium" },
    "liothyronine": { driada: "liothymed-25-mcg-t3-triiodothyronine", pctzone: "linorma-t3-20mcg" },
    "metformin": { pctzone: "metfor-500mg" },
    "minoxidil": { driada: "minoxytop-5mg-minoxidil-tablets-ip", pctzone: "morr-f-5-60ml" },
    "modafinil": { driada: "modus-100mg-modafinil", pctzone: "modvigil-200mg-2" },
    "tadalafil": { driada: "tadalafil-10mg", pctzone: "tadacip-20mg" },
    "tamoxifen": { driada: "nolvados-10-mg-tamoxifen-citrate", pctzone: "tamoxifen-20mg-3" },
    "tretinoin": { pctzone: "tretigel-0-025-20gm" },
  },
}

/**
 * Returns the ordered list of buyable sources for an entry, or [] when none.
 * Each item: { key, name, url, coupon }.
 */
export function getSourcing(libraryId, entryId, variantId) {
  const entry = SOURCING_AVAILABILITY[libraryId]?.[entryId]
  if (!entry) return []
  let avail
  if (entry.variants) {
    // Multi-form entry: sourcing is STRICTLY per-form. A form that no shop carries
    // (not in the variants map) gets NO button — never a base fallback. The base
    // is only used when no form is active (e.g. a non-variant context).
    if (variantId) {
      avail = entry.variants[variantId]
      if (!avail) return []
    } else {
      avail = entry
    }
  } else {
    avail = entry
  }
  return PARTNER_ORDER.filter((key) => avail[key]).map((key) => {
    const p = SOURCING_PARTNERS[key]
    return { key, name: p.name, logo: p.logo, url: p.productUrl(avail[key]), coupon: p.coupon }
  })
}
