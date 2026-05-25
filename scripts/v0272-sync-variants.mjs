#!/usr/bin/env node
// Generic helper: copy the variants[] block from HU to EN + PL files for a given entry.
// Uses balanced-bracket parsing (not regex) so it works regardless of what follows variants[].

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function extractVariantsBlock(src) {
  // Find `"variants": [` start
  const startMatch = src.match(/"variants":\s*\[/);
  if (!startMatch) return null;
  const startIdx = startMatch.index;
  const bracketStart = src.indexOf('[', startIdx);
  // Walk balanced brackets, respecting string literals
  let depth = 0;
  let i = bracketStart;
  let inString = false;
  let escape = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) { i++; break; }
    }
  }
  // i now points just past the closing ']'
  return { start: startIdx, end: i, text: src.slice(startIdx, i) };
}

function syncEntry(entryId) {
  const huFile = path.join(ROOT, 'src/data/libraries/performance/entries/hu', entryId + '.js');
  const huSrc = fs.readFileSync(huFile, 'utf8');
  const huBlock = extractVariantsBlock(huSrc);
  if (!huBlock) { console.error(`No variants[] in HU for ${entryId}`); process.exit(1); }
  console.log(`HU variants block: ${huBlock.text.length}B`);
  for (const lang of ['en', 'pl']) {
    const target = path.join(ROOT, 'src/data/libraries/performance/entries', lang, entryId + '.js');
    const orig = fs.readFileSync(target, 'utf8');
    const targetBlock = extractVariantsBlock(orig);
    if (!targetBlock) { console.error(`${lang}: no variants[] in target`); continue; }
    const updated = orig.slice(0, targetBlock.start) + huBlock.text + orig.slice(targetBlock.end);
    fs.writeFileSync(target, updated);
    console.log(`[${lang}] ${entryId}: ${updated.length}B written`);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: --entry <id> [--entry <id>...]');
  process.exit(1);
}
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--entry') {
    syncEntry(args[i + 1]);
    i++;
  }
}
