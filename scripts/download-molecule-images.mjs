#!/usr/bin/env node
// Download neon-recolored 2D molecular structures for the nootropic library.
//
// Source: PubChem PUG-REST. For each entry we resolve a CID by name (with
// optional overrides for fuzzy / research-compound names), download the
// 300×300 PNG depiction, then post-process with sharp:
//   • near-white pixels → fully transparent (drops the white card background)
//   • near-black pixels → neon green (#00ff99) with full alpha
//   • antialiased grays → proportional neon-green alpha so edges stay smooth
//
// Output: public/molecules/<entry-id>.png
//
// Entries that are mixtures (no single small-molecule structure: Cerebrolysin,
// Cortexin, Lion's Mane) are skipped — the component falls back to a neon
// name display for those.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const metaPath = resolve(repoRoot, 'src/data/libraries/nootropics/index.js')
const outDir = resolve(repoRoot, 'public/molecules')

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

// PubChem search overrides for entries where the display name doesn't match
// PubChem's canonical name (research compounds, ambiguous abbreviations).
// Empty string ⇒ explicit "skip, no PubChem match expected".
const NAME_OVERRIDES = {
  '9-me-bc': '9-Methyl-9H-pyrido[3,4-b]indole',
  'bpc-157': '', // research peptide, not in PubChem
  'alpha-gpc': 'Choline alfoscerate',
  'cdp-choline': 'Citicoline',
  'f-phenibut': '4-Fluorophenibut',
  'tongkat-ali': 'Eurycomanone',
  'flmodafinil': 'CRL-40,940',
  'lions-mane': '', // mixture (Hericium erinaceus extract)
  'cerebrolysin': '', // peptide mixture
  'cortexin': '', // peptide mixture
  'adamax': '', // research peptide cocktail
  'af710b': 'AF710B',
  'p21': 'P021',
  'j-147': 'J147',
  'magnesium-l-threonate': 'Magnesium L-Threonate',
  'methylene-blue': 'Methylene Blue',
  'rhodiola': 'Salidroside',
  'panax-ginseng': 'Ginsenoside Rg1',
  'bacopa': 'Bacoside A',
  'ashwagandha': 'Withanolide A',
}

// Read LIBRARY_ENTRY_META block from index.js. We just need (id, name) pairs,
// so use regex extraction — safer than evaluating JS or coercing to strict JSON.
const indexSrc = readFileSync(metaPath, 'utf-8')
const recordRe = /"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"/g
const entries = []
let mm
while ((mm = recordRe.exec(indexSrc)) !== null) {
  entries.push({ id: mm[1], name: mm[2] })
}
console.log(`Loaded ${entries.length} nootropic META records.`)

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function fetchCid(query) {
  const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(query)}/cids/JSON`
  const r = await fetch(url, { headers: { 'User-Agent': 'molekulax-script' } })
  if (!r.ok) return null
  const j = await r.json()
  return j?.IdentifierList?.CID?.[0] ?? null
}

async function fetchPng(cid) {
  const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/PNG?image_size=400x400`
  const r = await fetch(url, { headers: { 'User-Agent': 'molekulax-script' } })
  if (!r.ok) return null
  return Buffer.from(await r.arrayBuffer())
}

async function recolorAndSave(pngBuf, outPath) {
  const { data, info } = await sharp(pngBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const NEON_R = 0x00, NEON_G = 0xFF, NEON_B = 0x99
  // Two thresholds: anything brighter than WHITE_T is treated as background
  // (alpha 0), anything darker than BLACK_T is full neon, in between we ramp
  // alpha by inverse-luminance so antialiased edges stay smooth.
  const WHITE_T = 235
  const BLACK_T = 60
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3
    if (lum >= WHITE_T) {
      data[i + 3] = 0
    } else if (lum <= BLACK_T) {
      data[i] = NEON_R; data[i + 1] = NEON_G; data[i + 2] = NEON_B
      data[i + 3] = 255
    } else {
      const t = (WHITE_T - lum) / (WHITE_T - BLACK_T) // 0..1
      data[i] = NEON_R; data[i + 1] = NEON_G; data[i + 2] = NEON_B
      data[i + 3] = Math.round(255 * t)
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath)
}

const results = { ok: [], skipped: [], failed: [] }

for (const e of entries) {
  const id = e.id
  const override = NAME_OVERRIDES[id]
  if (override === '') {
    results.skipped.push({ id, reason: 'override:skip' })
    continue
  }
  const query = override ?? e.name
  const outPath = resolve(outDir, `${id}.png`)
  if (existsSync(outPath)) {
    results.skipped.push({ id, reason: 'already-exists' })
    continue
  }
  try {
    const cid = await fetchCid(query)
    if (!cid) {
      console.log(`⚠️  ${id} (${query}): no CID`)
      results.failed.push({ id, reason: 'no-cid' })
      await sleep(220)
      continue
    }
    await sleep(220)
    const png = await fetchPng(cid)
    if (!png) {
      console.log(`⚠️  ${id} (CID ${cid}): PNG download failed`)
      results.failed.push({ id, reason: 'no-png' })
      await sleep(220)
      continue
    }
    await recolorAndSave(png, outPath)
    console.log(`✅ ${id} ← CID ${cid}`)
    results.ok.push({ id, cid })
    await sleep(220)
  } catch (err) {
    console.error(`❌ ${id}: ${err.message}`)
    results.failed.push({ id, reason: err.message })
    await sleep(220)
  }
}

console.log(`\nDone. ok=${results.ok.length} skipped=${results.skipped.length} failed=${results.failed.length}`)
if (results.failed.length) {
  console.log('\nFailed IDs:', results.failed.map(f => `${f.id}(${f.reason})`).join(', '))
}
