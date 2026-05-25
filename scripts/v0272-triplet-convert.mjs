#!/usr/bin/env node
// v0.27.2 triplet-convert helper.
// Usage:
//   node scripts/v0272-triplet-convert.mjs --extract <lang> <entry-id>
//     -> prints all 5 variant string-fields per variant from entries/<lang>/<id>.js
//   node scripts/v0272-triplet-convert.mjs --audit <entry-id>
//     -> grep-check 0 string-shape remains in all 3 lang files

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES = (lang) => path.join(ROOT, 'src/data/libraries/performance/entries', lang);

const VARIANT_FIELDS = ['routeLabel', 'routeNote', 'dosing', 'onsetTime'];

function extractStrings(lang, id) {
  const file = path.join(ENTRIES(lang), `${id}.js`);
  if (!fs.existsSync(file)) {
    console.error(`File not found: ${file}`);
    process.exit(1);
  }
  const src = fs.readFileSync(file, 'utf8');
  const variantsMatch = src.match(/"variants":\s*\[([\s\S]*?)\]\s*,\s*"mechanism"/);
  if (!variantsMatch) {
    console.error('No variants[] block found');
    process.exit(1);
  }
  const variantsBlock = variantsMatch[1];
  const variantStarts = [...variantsBlock.matchAll(/"id":\s*"([^"]+)"/g)];
  console.log(`# ${lang}/${id}.js -- ${variantStarts.length} variants`);
  for (const m of variantStarts) {
    const vid = m[1];
    console.log(`\n## variant: ${vid}`);
    for (const f of VARIANT_FIELDS) {
      const re = new RegExp(`"${f}":\\s*"([^"]+(?:\\\\.[^"]*)*)"`);
      const fm = variantsBlock.slice(m.index).match(re);
      if (fm) console.log(`  ${f}: ${fm[1].slice(0, 120)}${fm[1].length > 120 ? '...' : ''}`);
    }
    const noteRe = /"doseCalc":\s*\{[^}]*"note":\s*"([^"]+(?:\\.[^"]*)*)"/;
    const nm = variantsBlock.slice(m.index).match(noteRe);
    if (nm) console.log(`  doseCalc.note: ${nm[1].slice(0, 120)}${nm[1].length > 120 ? '...' : ''}`);
  }
}

function auditEntry(id) {
  let found = 0;
  for (const lang of ['hu', 'en', 'pl']) {
    const file = path.join(ENTRIES(lang), `${id}.js`);
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    // Extract only the variants[] block to avoid matching top-level entry fields
    const variantsMatch = src.match(/"variants":\s*\[([\s\S]*?)\]\s*,\s*"mechanism"/);
    if (!variantsMatch) continue;
    const variantsBlock = variantsMatch[1];
    for (const f of VARIANT_FIELDS.concat(['note'])) {
      const re = new RegExp(`"${f}":\\s*"`, 'g');
      const matches = variantsBlock.match(re);
      if (matches) {
        console.log(`  ${lang}/${id}.js -- ${f}: ${matches.length} string-shape remain`);
        found += matches.length;
      }
    }
  }
  if (found === 0) console.log(`OK ${id}: 0 string-shape, all triplet`);
  else console.log(`FAIL ${id}: ${found} string-shape remain`);
}

const args = process.argv.slice(2);
if (args[0] === '--extract') extractStrings(args[1], args[2]);
else if (args[0] === '--audit') auditEntry(args[1]);
else {
  console.log('Usage: --extract <lang> <id> | --audit <id>');
  process.exit(1);
}
