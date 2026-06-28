// Hair & Skin library entry. Topilutamide (INN) = fluridil; marketed as Eucapil
// (Czech Republic / some EU) as an OTC/cosmetic topical for AGA. Source: Sovak first
// clinical experience, vehicle-controlled (PMID 12174057). Topical nonsteroidal AR
// antagonist, rationally designed to hydrolyze to inactive metabolites (local-only).
// Limited clinical evidence (one small human study). EN body.

export default {
  "id": "topilutamide",
  "sideEffects": [
    { "hu": "Lokális fejbőr-reakciók: enyhe bőrpír, viszketés vagy szárazság az alkalmazás helyén; a (kis) klinikai vizsgálatban a tolerálhatóság jó volt, szisztémás antiandrogén tünet nélkül.", "en": "Local scalp reactions: mild redness, itching or dryness at the application site; in the (small) clinical study tolerability was good, with no systemic antiandrogen symptoms.", "pl": "Miejscowe reakcje skóry głowy: łagodne zaczerwienienie, świąd lub suchość w miejscu aplikacji; w (małym) badaniu klinicznym tolerancja była dobra, bez objawów ogólnoustrojowego antyandrogenu." },
    { "hu": "Korlátozott bizonyíték: a hatékonyság és a hosszú távú biztonság csak kisméretű, korai klinikai adatra és kozmetikai forgalmazási tapasztalatra épül; nincs nagy, megerősítő fázis-3 vizsgálat.", "en": "Limited evidence: efficacy and long-term safety rest on small, early clinical data and cosmetic-marketing experience; there is no large confirmatory phase 3 trial.", "pl": "Ograniczone dowody: skuteczność i bezpieczeństwo długoterminowe opierają się na małych, wczesnych danych klinicznych i doświadczeniu z obrotu kosmetycznego; brak dużego potwierdzającego badania fazy 3." },
    { "hu": "A lokális hatásra tervezve: a molekula szándékosan gyorsan inaktív metabolitokká hidrolizál, ezért a szisztémás antiandrogén hatás minimális – de a teljes humán biztonsági kép kis mintán alapul.", "en": "Designed for local action: the molecule deliberately hydrolyzes quickly to inactive metabolites, so systemic antiandrogen effect is minimal – but the full human safety picture rests on a small sample.", "pl": "Zaprojektowany do działania miejscowego: cząsteczka celowo szybko hydrolizuje do nieaktywnych metabolitów, więc efekt ogólnoustrojowy jest minimalny – ale pełny obraz bezpieczeństwa opiera się na małej próbie." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység a topilutamiddal (fluridil) vagy a vivőanyaggal szemben.", "en": "Known hypersensitivity to topilutamide (fluridil) or the vehicle.", "pl": "Znana nadwrażliwość na topilutamid (fluridyl) lub podłoże." },
    { "hu": "Sérült, gyulladt vagy fertőzött fejbőr: a gyógyulásig kihagyandó.", "en": "Broken, inflamed or infected scalp: withhold until it heals.", "pl": "Uszkodzona, zapalna lub zakażona skóra głowy: odstawić do czasu wygojenia." },
    { "hu": "Terhesség és szoptatás: bár a szisztémás expozíció tervezetten minimális, elegendő adat híján kerülendő, illetve orvossal egyeztetendő.", "en": "Pregnancy and breastfeeding: although systemic exposure is minimal by design, avoid or discuss with a physician due to limited data.", "pl": "Ciąża i karmienie: choć ekspozycja ogólnoustrojowa jest z założenia minimalna, unikać lub skonsultować z lekarzem z powodu ograniczonych danych." }
  ],
  "name": "Topilutamide",
  "image": "/performance/topical-solution-clear.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Topilutamide (INN) = fluridil: a topical nonsteroidal androgen-receptor antagonist marketed as Eucapil (Czech Republic / EU) as a cosmetic/OTC for androgenetic alopecia. It acts locally (it is rapidly inactivated), but the clinical evidence is limited (one small study).",
  "description": "Topilutamide (the international nonproprietary name; better known as fluridil) is a topical, nonsteroidal androgen-receptor antagonist that Sovak and colleagues \"rationally designed\" for hair loss: the molecule acts on the scalp, but once absorbed it rapidly hydrolyzes to inactive metabolites, so in principle it has no systemic antiandrogen effect. Under the brand name Eucapil it is marketed in the Czech Republic and a few EU markets as a cosmetic/OTC for androgenetic alopecia, so unlike clascoterone/pyrilutamide/RU58841 this is actually an AVAILABLE product. The clinical evidence, however, is LIMITED: the main published data come from a small, vehicle-controlled early clinical study (Sovak, PMID 12174057), which described good tolerability, an absence of systemic antiandrogen effect and favorable signs in hair outcomes. There is no large confirmatory phase 3 trial, so the evidence is weaker than that for minoxidil/finasteride.",
  "keyInfo": [
    { "label": "Other name / brand", "value": "Fluridil · Eucapil (Czech Republic/EU)" },
    { "label": "Status", "value": "Marketed cosmetic/OTC (EU); not an FDA-approved drug" },
    { "label": "Mechanism of action", "value": "Topical androgen-receptor antagonist (rapid inactivation → local action)" },
    { "label": "Evidence", "value": "Limited: one small vehicle-controlled study (Sovak 2002)" },
    { "label": "Dosing", "value": "Eucapil: typically once daily on the scalp (per the product instructions)" }
  ],
  "mechanism": "Topilutamide binds to the androgen receptor of the hair follicle and displaces DHT, inhibiting androgen-driven follicular miniaturization. The core of the design is \"hydrolytic lability\": the active agent exerts its local effect on the scalp, but once it reaches the circulation it is rapidly converted to inactive breakdown products, so the systemic antiandrogen effect (libido, hormonal) is avoided. The concept is similar to that of clascoterone (local AR antagonism), but the clinical evidence for topilutamide is more modest.",
  "legalStatus": "Not an FDA-approved drug. Under the name Eucapil it is marketed in the Czech Republic and some EU markets as a cosmetic/OTC for AGA. Availability and regulatory classification differ by country; in the USA it is not registered.",
  "bioavailability": "Topical; deliberate rapid hydrolysis to inactive metabolites → minimal systemic antiandrogen exposure",
  "onsetTime": "Months (as is typical for hair-loss treatments); the small study used a timeframe of a few months",
  "halfLife": "The active agent is rapidly inactivated in the circulation (short systemic lifespan)",
  "atcCode": "No dedicated drug ATC (cosmetic/OTC classification)",
  "prescriptionStatus": "OTC/cosmetic in some EU markets (Eucapil); not a prescription drug",
  "indications": [
    "Androgenetic alopecia (male and female pattern hair loss) – Eucapil OTC/cosmetic indication",
    "Conceptual target group: those seeking a local, systemically inactive antiandrogen instead of finasteride",
    "IMPORTANT: the efficacy evidence is limited (no large phase 3)"
  ],
  "commonSideEffects": [
    "Mild local scalp reaction (redness, itching, dryness)",
    "Systemic antiandrogen symptoms did NOT occur in the study (local design)",
    "The profile of rare/long-term side effects rests on a small sample"
  ],
  "cyp450": [
    "The absorbed active agent rapidly hydrolyzes to inactive metabolites",
    "No clinically significant systemic CYP interaction is known (minimal exposure)"
  ],
  "crossMolInteractions": [
    "Minoxidil: conceptual complementary AGA combination (perfusion + local anti-androgen)",
    "Finasteride: a different level of androgen inhibition; combination is conceptual",
    "Clascoterone/pyrilutamide: same class (topical AR antagonist) – pairing is not warranted"
  ],
  "benefits": [
    "An actually AVAILABLE product (Eucapil, EU) – in contrast to the non-marketed RU58841/pyrilutamide",
    "Designed for local action, with minimal systemic antiandrogen risk",
    "Good tolerability in the small clinical study, with no systemic effect (PMID 12174057)",
    "NOTE: the efficacy evidence is limited, not at the level of minoxidil/finasteride"
  ],
  "quickStart": [
    "As Eucapil, follow the product instructions, typically once daily on the scalp",
    "Realistic expectation: the evidence is limited; do not expect minoxidil/finasteride-level, confirmed efficacy",
    "Proven foundation: minoxidil + finasteride – it is worth starting with these, with a physician",
    "The local antiandrogen direction is represented more seriously by clascoterone (approved for acne, phase 3 for AGA)",
    "From a verified, original EU source (Eucapil), not from an unverified gray market"
  ],
  "expectations": [
    { "label": "Limitations", "body": "The efficacy of topilutamide rests on a small, early study and cosmetic-marketing experience; there is no large confirmatory phase 3, so the outcome is more uncertain." },
    { "label": "Tolerability", "body": "According to the published data it is well tolerated, with no systemic antiandrogen symptoms – this is the advantage of the local, rapidly inactivated design." },
    { "label": "Where it fits", "body": "An available, gentle local antiandrogen option with limited evidence; it does not replace the proven backbone (minoxidil/finasteride)." }
  ],
  "quality": {
    "pure": [
      "Original Eucapil (EU) is the known, marketed form",
      "The quality of unverified \"fluridil\" gray-market batches is not guaranteed"
    ],
    "caution": [
      "Limited clinical evidence: one small study, no large phase 3",
      "Efficacy is individual-dependent and more uncertain than with minoxidil/finasteride",
      "Availability and legal classification differ by country"
    ],
    "avoid": [
      "Known topilutamide/fluridil hypersensitivity",
      "Broken, inflamed scalp (until it heals)",
      "Pregnancy/breastfeeding without appropriate consultation",
      "Unverified gray-market sources instead of the original product"
    ]
  },
  "interactions": [
    "Minoxidil: conceptual complementary combination",
    "Finasteride: a different androgen inhibition, conceptual addition",
    "Clascoterone/pyrilutamide: same class – pairing is not warranted",
    "Minimal systemic interaction due to the rapid inactivation"
  ],
  "studies": [
    {
      "title": "Fluridil, a rationally designed topical agent for androgenetic alopecia: first clinical experience",
      "authors": "Sovak M, Seligson AL, Kucerova R, et al.",
      "journal": "Dermatol Surg. 2002;28(8):678-685.",
      "pmid": "12174057"
    }
  ],
  "faq": [
    {
      "q": "Can I buy it? Where is it available?",
      "a": "Yes, topilutamide is available under the name fluridil, branded as Eucapil, in the Czech Republic and a few EU markets as a cosmetic/OTC for androgenetic alopecia – so unlike the non-marketed RU58841/pyrilutamide it really is available. In the USA it is not registered. It is best from an original EU source, not from an unverified gray market."
    },
    {
      "q": "How effective is it?",
      "a": "The evidence is LIMITED. The main published data come from a small, vehicle-controlled early study (Sovak 2002, PMID 12174057), which described good tolerability, an absence of systemic antiandrogen effect and encouraging signs in hair outcomes. There is no large confirmatory phase 3 trial, however, so the efficacy is more uncertain than that of minoxidil or finasteride. A realistic framing: an available, gentle local antiandrogen option, but not a replacement for the proven backbone."
    }
  ],
  "related": [
    "clascoterone",
    "pyrilutamide",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2,
      "medium": 2,
      "high": 2
    },
    "unit": "% (Eucapil topical)",
    "note": "Eucapil (topilutamide/fluridil) is typically a 2% topical solution, applied per the product instructions once daily on the scalp. From an original EU source. The evidence is limited; the proven foundation is minoxidil + finasteride."
  }
}
