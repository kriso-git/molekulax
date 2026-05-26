// v0.30 — dump cited titles for unresolved PMIDs (EN-only, for canonical-paper search)
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const TARGETS = {
  peptides: {
    'adipotide': ['22075637'],
    'dsip': ['7791904'],
    'epithalon': ['19823771', '12937682'],
    'epo': ['16769597'],
    'ghk-cu': ['29662016'],
    'ghrp-2': ['11331743'],
    'ghrp-6': ['2229298'],
    'glow': ['29986520', '23749167'],
    'gonadorelin': ['3935474'],
    'hexarelin': ['10516862'],
    'humanin': ['23375520'],
    'igf-1-lr3': ['1747094'],
    'ipamorelin': ['28666687'],
    'kisspeptin': ['24450286'],
    'lipo-c': ['33093270'],
    'll-37': ['12592095'],
    'matrixyl-3000': ['18492210'],
    'mazdutide': ['39041741'],
    'oxytocin': ['28925369'],
    'pinealon': ['25023411'],
    'snap-8': ['23981350'],
  },
  nootropics: {
    '9-me-bc': ['20517703', '16111712', '18434025'],
    'adrafinil': ['11079215'],
    'bromantane': ['17539276', '11548438', '19374118'],
    'nsi-189': ['24059323', '28006971'],
    'phenylpiracetam': ['16447598', '17593821'],
    'piracetam': ['11405969'],
    'selank': ['18454141'],
    'semax': ['15293774', '29722760'],
  },
}

for (const [lib, entries] of Object.entries(TARGETS)) {
  console.log(`\n## ${lib}\n`)
  for (const [slug, pmids] of Object.entries(entries)) {
    const path = resolve(repoRoot, 'src/data/libraries', lib, 'entries/en', slug + '.js')
    const mod = await import(pathToFileURL(path).href)
    const entry = mod.default
    console.log(`### ${slug}`)
    for (const study of (entry.studies || [])) {
      if (pmids.includes(String(study.pmid))) {
        console.log(`  PMID ${study.pmid}`)
        console.log(`    cited: "${(study.title || '').slice(0, 150)}"`)
        if (study.journal) console.log(`    journal: "${study.journal}"`)
        if (study.tag) console.log(`    tag: "${study.tag}"`)
      }
    }
  }
}
