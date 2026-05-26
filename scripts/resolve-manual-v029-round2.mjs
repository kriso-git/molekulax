// v0.29 Round 2 — refined searches for remaining real-MISMATCH PMIDs
const queries = [
  // peptides
  { key: 'adipotide-rhesus',          q: 'adipotide proapoptotic peptide obese rhesus monkeys Barnhart Arap Pasqualini' },
  { key: 'dsip-anxiolytic',           q: 'delta sleep inducing peptide DSIP somnogenic Schoenenberger Monnier' },
  { key: 'hexarelin-cd36',            q: 'hexarelin CD36 cardioprotective scavenger receptor Bodart Demers' },
  { key: 'mk-677-elderly',            q: 'ibutamoren MK-677 oral growth hormone secretagogue elderly Murphy' },
  { key: 'hgh-therapy',               q: 'growth hormone therapy review adults Molitch endocrine clinical practice' },
  { key: 'humanin-mito',              q: 'humanin small humanin-like peptide MOTS-c mitochondrial Yen Cohen' },
  { key: 'igf-1-lr3-bioactivity',     q: 'long arginine 3 IGF-1 R3 bioactivity Tomas Knauf' },
  { key: 'kisspeptin-men-hypogonadism', q: 'kisspeptin men hypogonadism gonadotropin testosterone Dhillo' },
  { key: 'kpv-melanocortin',          q: 'KPV alpha-melanocyte-stimulating hormone tripeptide inflammation' },
  { key: 'lipo-c-mic',                q: 'MIC injection methionine inositol choline lipotropic' },
  { key: 'll-37-wound-healing',       q: 'LL-37 cathelicidin wound healing keratinocyte angiogenesis' },
  { key: 'matrixyl-pentapeptide',     q: 'palmitoyl pentapeptide collagen elastin facial wrinkle' },
  { key: 'oxytocin-intranasal-meta',  q: 'intranasal oxytocin behaviour autism meta-analysis Leng Ludwig' },
  { key: 'pinealon-neuroprotect',     q: 'pinealon EDR peptide neuroprotection neurons Khavinson' },
  { key: 'snap-8-octapeptide',        q: 'acetyl hexapeptide-8 SNAP-8 cosmetic skincare anti-wrinkle' },
  { key: 'tb-500-actin-binding',      q: 'thymosin beta 4 G-actin sequestering peptide structure function' },
  { key: 'ghrp-2-mechanism',          q: 'GHRP-2 KP-102 growth hormone ghrelin secretagogue mechanism' },
  { key: 'ghrp-6-bowers',             q: 'GHRP-6 hexapeptide His-D-Trp-Ala-Trp-D-Phe-Lys-NH2 growth hormone' },
  { key: 'gonadorelin-pulsatile-old', q: 'gonadorelin pulsatile pump infusion hypogonadotropic Hoffman Crowley' },
  { key: 'ghk-cu-32genes-Pickart',    q: 'GHK copper tripeptide gene expression human DNA repair' },
  { key: 'ghk-cu-hair',               q: 'tripeptide copper hair growth follicle promotion' },
  { key: 'epithalon-aging-Khavinson', q: 'epitalon Ala-Glu-Asp-Gly tetrapeptide telomere lifespan' },
  // nootropics
  { key: 'bromantane-ladasten-clin',  q: 'ladasten N-(2-adamantyl)-N-(para-bromophenyl)-amine asthenic' },
  { key: 'bromantane-asthenia',       q: 'ladasten asthenia anxiety neurasthenia generalized fatigue' },
  { key: 'modafinil-dopamine-volkow', q: 'modafinil dopamine transporter Volkow striatum nucleus accumbens' },
  { key: 'noopept-NGF-BDNF-Ostrov',   q: 'noopept N-phenylacetyl-L-prolylglycine ethyl ester NGF BDNF rats' },
  { key: 'noopept-gvs-111',           q: 'noopept GVS 111 mild cognitive impairment vascular' },
  { key: 'noopept-neuropsycho',       q: 'noopept proline dipeptide neuropsychotropic Russian Gudasheva' },
  { key: 'nsi-189-phase1b-Fava',      q: 'NSI-189 phosphate phase 1B major depressive Fava Johe Papakostas' },
  { key: 'nsi-189-ptsd',              q: 'NSI-189 phosphate PTSD neurogenesis preclinical animal' },
  { key: 'nsi-189-multi',             q: 'NSI-189 neurogenic small molecule mouse stroke behavior Tajiri' },
  { key: 'phenylpiracetam-r-dat',     q: 'phenylpiracetam carphedon dopamine motivational fluoro' },
  { key: 'selank-anx-Zozulia',        q: 'selank Thr-Lys-Pro-Arg-Pro-Gly-Pro tuftsin anxiolytic Zozulia' },
  { key: 'selank-cognitive',          q: 'selank cognitive anxiolytic peptide TKPRPGP human clinical' },
  { key: 'selank-diazepam-comparison', q: 'selank anxiolytic anxiety diazepam therapy comparison effect' },
  { key: 'semax-stroke-Gusev',        q: 'semax ACTH(4-10) heptapeptide ischemic stroke Gusev clinical' },
  { key: 'semax-bdnf-hippocampus',    q: 'semax heptapeptide BDNF hippocampus rat brain expression' },
  { key: 'semax-cerebrovascular-review', q: 'semax cerebrovascular pathology neurological clinical review Russian' },
  { key: '9-me-bc-bdnf-gdnf',         q: '9-methyl-beta-carboline gene expression BDNF GDNF neurotrophin striatum' },
  { key: 'adrafinil-vigilance-elderly', q: 'adrafinil olmifon CRL 40028 vigilance elderly' },
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
      await new Promise(r => setTimeout(r, 400));
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
    process.stderr.write(`  ${key}: ${cands.length} hits (top ${cands[0]?.ratio.toFixed(2) || 'N/A'})\n`);
  } catch (e) {
    results[key] = { q, error: e.message };
    process.stderr.write(`  ${key}: ERROR ${e.message}\n`);
  }
  await new Promise(r => setTimeout(r, 400));
}
console.log(JSON.stringify(results, null, 2));
