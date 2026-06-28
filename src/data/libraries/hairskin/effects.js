// Hair & Skin library – domain clusters for the "Hatásterületek" section.
// Studies cite real, verified PMIDs carried over from the source entries.

export const EFFECT_CATEGORIES = [
  {
    id: 'hair',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.18)',
    title: { hu: 'Hajnövesztés és hajmegtartás', en: 'Hair Growth & Retention', pl: 'Wzrost i utrzymanie włosów' },
    subtitle: {
      hu: 'Androgenetikus alopecia · DHT-gátlás + follikulus-stimuláció',
      en: 'Androgenetic alopecia · DHT inhibition + follicle stimulation',
      pl: 'Łysienie androgenowe · hamowanie DHT + stymulacja mieszków',
    },
    description: {
      hu: 'Az androgenetikus alopecia (mintázatos hajhullás) hátterében a dihidrotesztoszteron (DHT) follikulus-miniaturizáló hatása áll. A kezelés két fő irányból támad: a DHT-képződés gátlása (5α-reduktáz-gátlók) és a hajhagyma perfúziójának, illetve növekedési fázisának serkentése (minoxidil).',
      en: 'Androgenetic alopecia (pattern hair loss) is driven by dihydrotestosterone (DHT) miniaturizing the follicle. Treatment attacks from two main angles: inhibiting DHT formation (5α-reductase inhibitors) and stimulating follicle perfusion and the growth phase (minoxidil).',
      pl: 'Łysienie androgenowe napędza dihydrotestosteron (DHT), miniaturyzujący mieszek włosowy. Leczenie działa z dwóch stron: hamowanie tworzenia DHT (inhibitory 5α-reduktazy) i stymulacja perfuzji mieszka oraz fazy wzrostu (minoksydyl).',
    },
    detail: {
      hu: 'A „gold-standard" megközelítés a minoxidil (follikulus-stimuláció) és a finasteride (DHT-gátlás) együttes alkalmazása, amely a legtöbb klinikai vizsgálatban additív hatást mutat.',
      en: 'The gold-standard approach combines minoxidil (follicle stimulation) with finasteride (DHT inhibition), which shows additive benefit across most clinical trials.',
      pl: 'Złotym standardem jest połączenie minoksydylu (stymulacja mieszka) i finasterydu (hamowanie DHT), wykazujące addytywną korzyść w większości badań klinicznych.',
    },
    studies: [
      { title: 'Safety of low-dose oral minoxidil for hair loss: a multicenter study of 1404 patients', authors: 'Vañó-Galván S, Pirmez R, Hermosa-Gelbard A, et al.', journal: 'J Am Acad Dermatol. 2021', pmid: '33639244' },
      { title: 'Minoxidil and its use in hair disorders: a review', authors: 'Suchonwanit P, Thammarucha S, Leerunyakul K.', journal: 'Drug Des Devel Ther. 2019', pmid: '31496654' },
      { title: 'Progression of hair loss in men with androgenetic alopecia treated with finasteride 1 mg', authors: 'Kaufman KD, Girman CJ, Round EM, et al.', journal: 'Eur J Dermatol. 2008', pmid: '18573713' },
    ],
    entryNames: ['Minoxidil', 'Finasteride', 'Dutasteride', 'Clascoterone', 'Pyrilutamide', 'RU58841', 'Topilutamide', 'PP-405', 'SM-04554'],
    entryIds: ['minoxidil', 'finasteride', 'dutasteride', 'clascoterone', 'pyrilutamide', 'ru58841', 'topilutamide', 'pp-405', 'sm-04554'],
    image: null,
  },
  {
    id: 'skin',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.18)',
    title: { hu: 'Bőrmegújítás és aknekezelés', en: 'Skin Renewal & Acne', pl: 'Odnowa skóry i trądzik' },
    subtitle: {
      hu: 'Retinoidok · sejtfordulat + kollagén + komedolízis',
      en: 'Retinoids · cell turnover + collagen + comedolysis',
      pl: 'Retinoidy · odnowa komórek + kolagen + komedoliza',
    },
    description: {
      hu: 'A topikális retinoidok (a tretinoin a bőrgyógyászati gold-standard) a retinsav-receptorokon hatva gyorsítják a keratinocita-fordulatot, oldják a komedókat és serkentik a dermális kollagén-szintézist, ezért egyszerre hatnak aknéra, fotoöregedésre és hiperpigmentációra.',
      en: 'Topical retinoids (tretinoin is the dermatological gold standard) act on retinoic-acid receptors to speed keratinocyte turnover, dissolve comedones, and boost dermal collagen synthesis, so they address acne, photoaging, and hyperpigmentation at once.',
      pl: 'Retinoidy miejscowe (tretynoina to dermatologiczny złoty standard) działają na receptory kwasu retinowego, przyspieszając odnowę keratynocytów, rozpuszczając zaskórniki i pobudzając syntezę kolagenu, więc działają jednocześnie na trądzik, fotostarzenie i hiperpigmentację.',
    },
    detail: {
      hu: 'A bevezetés fokozatos (retinizáció): a kezdeti irritáció, hámlás és átmeneti aknefellángolás után a bőr 8–12 hét alatt stabilizálódik. A napi fényvédelem kötelező.',
      en: 'Onboarding is gradual (retinization): after initial irritation, flaking, and a transient acne flare, the skin stabilizes over 8–12 weeks. Daily sun protection is mandatory.',
      pl: 'Wdrożenie jest stopniowe (retinizacja): po początkowym podrażnieniu, łuszczeniu i przejściowym zaostrzeniu trądziku skóra stabilizuje się w ciągu 8–12 tygodni. Codzienna ochrona przeciwsłoneczna jest obowiązkowa.',
    },
    studies: [
      { title: 'An Updated Review of Topical Tretinoin in Dermatology: From Acne and Photoaging to Skin Cancer', authors: 'Balado-Simó P, Morgado-Carrasco D, Gómez-Armayones S', journal: 'J Clin Med. 2025', pmid: '41302994' },
      { title: 'Tazarotene cream for the treatment of facial photodamage: a multicenter, investigator-masked, randomized, vehicle-controlled, parallel comparison of tazarotene creams with 0.05% tretinoin emollient cream applied once daily for 24 weeks', authors: 'Kang S, Leyden JJ, Lowe NJ, et al.', journal: 'Arch Dermatol. 2001', pmid: '11735710' },
      { title: 'Successful treatment of acne vulgaris using a new method: results of a randomized vehicle-controlled trial of short-contact therapy with 0.1% tazarotene gel', authors: 'Bershad S, Singer GK, Parente JE, et al.', journal: 'Arch Dermatol. 2002', pmid: '11939810' },
    ],
    entryNames: ['Tretinoin', 'Tazarotene', 'Azelaic acid', 'Estriol', 'Clascoterone'],
    entryIds: ['tretinoin', 'tazarotene', 'azelaic-acid', 'estriol-cream', 'clascoterone'],
    image: null,
  },
]
