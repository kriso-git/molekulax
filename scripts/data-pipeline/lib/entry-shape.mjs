const i18nString = {
  type: 'object',
  properties: {
    hu: { type: 'string' },
    en: { type: 'string' },
    pl: { type: 'string' },
  },
  required: ['hu', 'en', 'pl'],
}

const i18nArray = { type: 'array', items: i18nString }

export const ENTRY_JSON_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string', description: 'kebab-case slug, e.g. "modafinil"' },
    name: i18nString,
    shortDesc: i18nString,
    description: i18nString,
    mechanism: i18nString,
    legalStatus: i18nString,
    onsetTime: { type: 'string', description: 'e.g. "30-60 min"' },
    halfLife: { type: 'string', description: 'e.g. "12-15 h"' },
    halfLifeActive: { type: 'string', description: 'Active metabolite half-life when different from parent' },
    interactionsWith: { type: 'array', items: { type: 'string' } },
    studies: {
      type: 'array',
      description: 'PEER-REVIEWED REFERENCES ONLY. PubMed PMID or FDA/EMA/ClinicalTrials.gov URL required. Dopamine.club URLs are NOT allowed here.',
      items: {
        type: 'object',
        properties: {
          pmid: { type: 'string', description: 'PubMed ID, digits only, e.g. "12345678"' },
          title: { type: 'string' },
          year: { type: 'number' },
          url: { type: 'string', description: 'MUST start with pubmed.ncbi.nlm.nih.gov OR fda.gov OR ema.europa.eu OR clinicaltrials.gov' },
        },
      },
    },
    // Phase 5 performance fields (optional, only emit for performance library)
    androgenicRatio: { type: 'string', description: 'AAS anabolic:androgenic ratio, e.g. "100:100"' },
    bindingAffinity: i18nString,
    detectionWindow: i18nString,
    wadaStatus: { type: 'string', enum: ['banned', 'monitored', 'not-listed'] },
    // Phase 6 pharmaceutical fields (optional, only emit for pharma library)
    atcCode: { type: 'string', description: 'WHO ATC code, e.g. "A10BA02"' },
    prescriptionStatus: i18nString,
    indications: i18nArray,
    contraindications: i18nArray,
    commonSideEffects: i18nArray,
    cyp450: { type: 'array', items: { type: 'string' }, description: "e.g. ['CYP3A4 substrate', 'CYP2D6 inhibitor']" },
    crossMolInteractions: i18nArray,
    _dataSource: { type: 'string', enum: ['sean', 'dopamine', 'sean+dopamine', 'pubmed', 'mixed'] },
  },
  required: ['id', 'name', 'shortDesc'],
}

export const SYSTEM_PROMPT_TEMPLATE = `Te egy farmakologiai content-normalizer vagy a MolekulaX edukativ oldalhoz.

Bemenet:
  - sean_notes_md: a "sean's curated notes" .docx-bol kivagott markdown szegmens egy molekularol
  - dopamine_md: dopamine.club cikk-tartalom markdown formatumban (lehet ures)
  - live_entry_json: a meglevo data.js entry (ha van), referenciakent

Feladat: egyesitsd ezeket egy strukturalt Entry JSON-ba a megadott shape szerint az emit_entry tool-on at.

KEMENY SZABALYOK:
1. A studies[] mezobe CSAK PubMed PMID-vel rendelkezo referenciat vagy FDA/EMA/ClinicalTrials.gov URL-t tegyel.
   Ha sean_notes vagy dopamine_md tartalmaz study-mentest, csak akkor add hozza, ha a PMID
   vagy peer-reviewed-link is jelolve van. Egyebkent hagyd ki es emeld be a description-be.
2. NE talalj ki PMID-t. Ha nem talalsz forrast, hagyd uresen a studies-t.
3. A name/shortDesc/description es minden i18n mezot HU/EN/PL nyelven toltsd ki. Magyar fo nyelv, EN/PL forditas.
   Magyar gordulekeny, nem masolt google-fordito.
4. A live_entry_json-t hasznald referenciakent: ha a meglevo ertek helyes es up-to-date, tartsd meg.
   Ha az uj forrasok pontosabbat mondanak (pl. ujabb klinikai trial), frissitsd, es jelold a _dataSource meta-mezovel.
5. Em-dash hasznalat tilos. Helyettesitsd kettosponttal, zarojellel, vagy mondat-atszerkesztessel.
6. Library kontextusa: {LIBRARY_ID} (lehet "nootropics", "performance", "pharmaceutical").
7. Pharma library entry eseten MINDEN pharma-specifikus mezot toltsd ki, ha forrasban szerepel:
   atcCode, prescriptionStatus, indications, contraindications, commonSideEffects, cyp450, crossMolInteractions.
`
