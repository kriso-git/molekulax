// v0.29 manual NCBI esearch resolver — for the bad PMIDs whose verify-pmids --suggest
// returned (none). Targets canonical author+topic queries.
// Run: node scripts/resolve-manual-v029.mjs > /tmp/v029_manual_resolve.json

const queries = [
  // === peptides ===
  { key: 'adipotide-rhesus',          q: 'Adipotide rhesus monkeys weight loss Barnhart' },
  { key: 'aod-9604-Ng2000',           q: 'AOD9604 metabolic studies synthetic lipolytic Ng human growth hormone' },
  { key: 'bpc-157-brain-gut',         q: 'BPC-157 brain-gut axis Sikiric neuroprotection' },
  { key: 'cerebrolysin-stroke-meta',  q: 'Cerebrolysin acute ischaemic stroke meta-analysis Cochrane' },
  { key: 'cjc-1295-Teichman',         q: 'CJC-1295 prolonged stimulation growth hormone IGF-I Teichman' },
  { key: 'cjc-1295-secretagogues',    q: 'growth hormone secretagogues safety efficacy review Sigalos Pastuszak' },
  { key: 'dsip-anxiolytic',           q: 'Delta sleep inducing peptide DSIP stress anxiolytic Graf' },
  { key: 'epithalon-aging',           q: 'epithalon peptide bioregulation aging Khavinson' },
  { key: 'epo-recombinant-normal',    q: 'recombinant human erythropoietin normal humans Eschbach hematocrit' },
  { key: 'epo-blood-doping',          q: 'biochemistry physiology complications blood doping Lundby Robach' },
  { key: 'ghk-cu-skin-regen',         q: 'GHK-Cu copper peptide skin regeneration cellular pathways Pickart' },
  { key: 'ghk-cu-32genes',            q: 'GHK copper peptide human genome 32 genes expression Pickart' },
  { key: 'ghk-cu-hairloss',           q: 'GHK copper peptide hair loss topical clinical' },
  { key: 'ghrp-2',                    q: 'GHRP-2 growth hormone releasing peptide ghrelin Bowers mechanism' },
  { key: 'ghrp-6',                    q: 'GHRP-6 stimulates growth hormone secretion humans Bowers' },
  { key: 'gonadorelin-pulsatile',     q: 'pulsatile GnRH therapy hypogonadotropic hypogonadism Crowley Pitteloud' },
  { key: 'hcg-spermatogenesis',       q: 'hCG human chorionic gonadotropin spermatogenesis maintenance hypogonadotropic' },
  { key: 'hexarelin-cd36',            q: 'hexarelin cardioprotective CD36 ghrelin cardiac' },
  { key: 'hgh-therapy-review',        q: 'growth hormone therapy adults children review Molitch endocrine' },
  { key: 'humanin-mitochondrial',     q: 'humanin mitochondrial derived peptide neuroprotective metabolic Lee Yen' },
  { key: 'igf-1-lr3',                 q: 'IGF-1 LR3 pharmacology bioactivity insulin-like growth factor long arginine' },
  { key: 'kisspeptin-restores',       q: 'kisspeptin restores hypothalamic pituitary gonadal function men hypogonadism' },
  { key: 'kpv-colitis',               q: 'KPV tripeptide alpha-MSH colitis inflammation skin' },
  { key: 'lipo-c-weight',             q: 'lipotropic agents weight management methionine inositol choline review' },
  { key: 'll-37-wound',               q: 'LL-37 cathelicidin wound healing angiogenesis cell migration Koczulla' },
  { key: 'matrixyl-wrinkle',          q: 'matrikine peptides skin wrinkles elasticity palmitoyl pentapeptide' },
  { key: 'mazdutide-glory1',          q: 'mazdutide overweight obesity GLORY-1 phase 3 China' },
  { key: 'mk-677-elderly',            q: 'MK-677 ibutamoren GH IGF-1 lean mass older adults Nass' },
  { key: 'nad-ageing',                q: 'NAD+ ageing metabolism disease Verdin Imai Guarente' },
  { key: 'oxytocin-intranasal',       q: 'intranasal oxytocin neural behavioural effects review humans' },
  { key: 'pinealon-oxidative',        q: 'pinealon peptide neuroprotective oxidative stress Khavinson' },
  { key: 'snap-8',                    q: 'acetyl octapeptide-3 SNAP-8 wrinkle topical cosmetic skin' },
  { key: 'tb-500-actin',              q: 'thymosin beta 4 actin binding tissue repair regeneration' },
  // === nootropics ===
  { key: '9-me-bc-neurotrophic',      q: '9-methyl-beta-carboline neurotrophic dopaminergic Hamann Wernicke' },
  { key: '9-me-bc-mao',               q: 'beta-carbolines monoamine oxidase MAO inhibitors review' },
  { key: '9-me-bc-bdnf',              q: '9-Me-BC beta-carboline BDNF GDNF gene expression neurons' },
  { key: '9-me-bc-photo',             q: 'beta-carbolines endogenous phototoxic photosensitizers norharman' },
  { key: 'adrafinil-vigilance',       q: 'adrafinil vigilance promoting agent narcolepsy elderly Milgram' },
  { key: 'bromantane-asthenic',       q: 'bromantane ladasten asthenic disorders clinical trial Russian' },
  { key: 'bromantane-pharmacology',   q: 'bromantane ladasten pharmacological profile review actoprotector' },
  { key: 'bromantane-nach',           q: 'bromantane acetylcholine nicotinic muscarinic receptor mechanism' },
  { key: 'bromantane-serotonin',      q: 'bromantane serotonin reuptake anxiolytic mechanism' },
  { key: 'modafinil-neurochem',       q: 'modafinil neurochemical actions wakefulness review Minzenberg Carter' },
  { key: 'modafinil-dopamine',        q: 'modafinil extracellular dopamine human brain Volkow PET' },
  { key: 'noopept-gvs',               q: 'noopept GVS-111 cognitive randomized trial Russian' },
  { key: 'noopept-ngf-bdnf',          q: 'noopept NGF BDNF expression Ostrovskaya neurotrophin' },
  { key: 'noopept-neuropsychotropic', q: 'noopept original neuropsychotropic activity Gudasheva' },
  { key: 'noopept-mci',               q: 'noopept treatment mild cognitive impairment elderly cerebrovascular Neznamov' },
  { key: 'noopept-eeg',               q: 'noopept clinical electroencephalographic EEG cerebrovascular' },
  { key: 'nsi-189-hippo',             q: 'NSI-189 small molecule hippocampal neurogenesis stimulating' },
  { key: 'nsi-189-phase1b',           q: 'NSI-189 phase 1B major depressive disorder Fava' },
  { key: 'nsi-189-cognition-ptsd',    q: 'NSI-189 cognition PTSD preclinical neuroprotection' },
  { key: 'nsi-189-multidomain',       q: 'NSI-189 multi-domain compound animal hippocampal behavior' },
  { key: 'phenotropil-cerebrovascular', q: 'phenotropil phenylpiracetam cerebrovascular insufficiency clinical Russian' },
  { key: 'phenotropil-ischemic',      q: 'phenotropil phenylpiracetam chronic ischemic brain disease Russian' },
  { key: 'phenylpiracetam-r-dat',     q: 'R-phenylpiracetam atypical dopamine transporter DAT motivational deficit' },
  { key: 'piracetam-novel-props',     q: 'piracetam old drug novel properties review Winnicka' },
  { key: 'piracetam-cognitive-meta',  q: 'piracetam cognitive impairment meta-analysis Waegemans' },
  { key: 'piracetam-updated-rev',     q: 'piracetam pharmacology updated review Malykh Sadaie' },
  { key: 'selank-anxiolytic',         q: 'selank anxiolytic antidepressant peptide Zozulia Russian' },
  { key: 'selank-cognition-gad',      q: 'selank cognitive function generalized anxiety disorder GAD' },
  { key: 'selank-diazepam',           q: 'selank diazepam generalized anxiety disorder randomized comparison' },
  { key: 'selank-qol',                q: 'selank quality life generalized anxiety disorder phenazepam Medvedev' },
  { key: 'semax-ischemic',            q: 'semax cognitive impairment ischemic stroke Gusev Russian' },
  { key: 'semax-acute-ischemia',      q: 'semax acute hemispheric ischemic stroke Gusev Skvortsova' },
  { key: 'semax-cerebrovascular',     q: 'semax cerebrovascular disease clinical review Russian' },
  { key: 'semax-stages-stroke',       q: 'semax different stages ischemic stroke efficacy phases' },
  { key: 'semax-attention-memory',    q: 'semax memory attention healthy men extreme conditions Kaplan' },
];

function normalize(s) { return (s || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim(); }
function tok(s) { return new Set(normalize(s).split(' ').filter(t => t.length >= 4)); }
function overlap(a, b) {
  const ta = tok(a); const tb = tok(b);
  if (ta.size === 0 || tb.size === 0) return 0;
  let c = 0; for (const t of ta) if (tb.has(t)) c++;
  return c / Math.min(ta.size, tb.size);
}

const results = {};
for (const { key, q } of queries) {
  try {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmax=5&retmode=json`;
    const r = await fetch(url);
    const j = await r.json();
    const pmids = (j.esearchresult?.idlist || []).slice(0, 5);
    if (pmids.length === 0) {
      results[key] = { q, candidates: [] };
      process.stderr.write(`  ${key}: 0 hits\n`);
      await new Promise(r => setTimeout(r, 350));
      continue;
    }
    const sumUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=json`;
    const sr = await fetch(sumUrl);
    const sj = await sr.json();
    const cands = [];
    for (const pmid of pmids) {
      const rec = sj.result?.[pmid];
      if (!rec || rec.error) continue;
      cands.push({
        pmid,
        title: rec.title,
        authors: (rec.authors || []).slice(0, 3).map(a => a.name).join(', '),
        year: (rec.pubdate || '').slice(0, 4),
        journal: rec.fulljournalname || rec.source,
        ratio: overlap(q, rec.title || ''),
      });
    }
    cands.sort((a, b) => b.ratio - a.ratio);
    results[key] = { q, candidates: cands };
    process.stderr.write(`  ${key}: ${cands.length} hits (top ratio ${cands[0]?.ratio.toFixed(2) || 'N/A'})\n`);
  } catch (e) {
    results[key] = { q, error: e.message };
    process.stderr.write(`  ${key}: ERROR ${e.message}\n`);
  }
  await new Promise(r => setTimeout(r, 350));
}
console.log(JSON.stringify(results, null, 2));
