import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const CATEGORIES = [
  {
    label: 'Általános',
    items: [
      {
        q: 'Mi a MolekulaX?',
        a: 'A MolekulaX egy edukatív platform, amely tudományos alapokon mutatja be a peptidek hatásmechanizmusait, adagolási protokolljait és kutatási hátterét. Tartalmainkat klinikai szakirodalom, peer-reviewed tanulmányok és FDA-dokumentációk alapján állítjuk össze — nem fórumbejegyzések vagy marketing anyagok alapján.',
      },
      {
        q: 'Ez orvosi tanácsadás?',
        a: 'Nem. Az oldalon megjelenő összes tartalom kizárólag oktatási és tájékoztatási célokat szolgál. Nem irányul betegség diagnosztizálására, kezelésére, gyógyítására vagy megelőzésére. Mielőtt bármilyen peptidet alkalmaznál, konzultálj képzett egészségügyi szakemberrel.',
      },
      {
        q: 'Mi a különbség szimpla peptid, keverék (blend) és stack között?',
        a: 'Szimpla peptid: egyetlen hatóanyag önállóan alkalmazva. Keverék (blend): két vagy több peptid előre összekeverve egyetlen fiolában. Stack: több külön fiolában lévő peptid összehangolt, egyidejű adagolása. Mindhárom megközelítés más szintű tudást és előkészítést igényel.',
      },
      {
        q: 'Hogyan kérhetek egyedi protokoll-tájékoztatást?',
        a: 'Tanácsadónk elérhető Telegramon (@molekulaxtra). Add meg a peptid nevét, a fiola méretét és a releváns részleteket — személyre szabott, tudományalapú tájékoztatást adunk.',
      },
    ],
  },
  {
    label: 'Adagolás & Rekonstituálás',
    items: [
      {
        q: 'Mi az a rekonstituálás?',
        a: 'Az a folyamat, amikor egy hígítót — általában bakteriosztatikus vizet — adunk egy liofilizált (fagyasztva szárított) peptidporhoz, hogy injektálható oldatot kapjunk. A helyes technika és a megfelelő hígítószer megválasztása kritikus a peptid stabilitása szempontjából.',
      },
      {
        q: 'Mi az a bakteriosztatikus víz (BAC-víz)?',
        a: '0,9% benzil-alkoholt tartalmazó steril víz. A benzil-alkohol meggátolja a baktériumok szaporodását, így az oldat hűtve akár 25–30 napig is használható. Sima steril víz tartósítószer nélkül nem javasolt hosszabb tároláshoz.',
      },
      {
        q: 'Mennyi BAC-vizet adjak a peptidhez?',
        a: 'Peptidenként és fiola méretenként változik. Kalkulátorunk segítségével egyszerűen kiszámolhatod: add meg a fiola tartalmát (mg), a BAC víz mennyiségét (ml) és a kívánt adagot (mcg) — megkapod a pontos fecskendő-feltöltési értéket.',
      },
      {
        q: 'Mi a különbség IU és mg között?',
        a: 'A milligramm (mg) tömeget mér. Az IU (International Unit / Nemzetközi Egység) biológiai aktivitást mér — egyes peptidekre (pl. szomatropin) vonatkozik: 1 mg ≈ 3 IU. A két egység összetévesztése súlyos adagolási hibákhoz vezet.',
      },
      {
        q: 'Mi a különbség mcg és mg között?',
        a: '1 mg = 1 000 mcg (mikrogramm). A legtöbb peptid adagolása mcg-ban történik. Ha mg-ot téveszt mcg-nak, az 1 000-szeres adagot eredményez — ez az egyik leggyakoribb és legveszélyesebb számítási hiba. Mindig ellenőrizd az egységet.',
      },
      {
        q: 'Milyen fecskendőt érdemes használni?',
        a: 'A legtöbb protokoll U-100 inzulinfecskendőt (általában 0,5 ml vagy 1 ml) javasol. Kisebb adagoknál U-50 vagy U-20 fecskendők pontosabb adagolást tesznek lehetővé. Mindig ellenőrizd az adott protokollban megadott fecskendőtípust.',
      },
      {
        q: 'Hogyan olvasom a kalkulátor eredményét?',
        a: 'Add meg a fiola peptidtartalmát (mg), a hozzáadott BAC víz mennyiségét (ml) és a kívánt egyszeri adagot (mcg). A kalkulátor megmutatja a szükséges feltöltési értéket IU-ban és ml-ben, valamint a fiolában rendelkezésre álló adagok teljes számát.',
      },
    ],
  },
  {
    label: 'Tárolás',
    items: [
      {
        q: 'Hogyan tároljam a peptidet rekonstituálás előtt?',
        a: 'Tartsd hűvös, száraz, fénytől védett helyen. Optimális hosszú távú tárolás: 2–8°C (hűtőszekrény). Fagyasztva (−20°C) akár évekig eltarthatók. Kerüld a hőmérsékleti ingadozásokat és az UV-sugárzást.',
      },
      {
        q: 'Hogyan tároljam a rekonstituált peptidet?',
        a: '2–8°C-on, hűtőszekrényben. Soha ne fagyaszd le a már feloldott peptidet — a jégkristályok tönkretehetik a peptidláncokat. A fiolát tartsd fénytől védve, és kerüld a rázást.',
      },
      {
        q: 'Meddig áll el a rekonstituált peptid?',
        a: 'Bakteriosztatikus vízzel feloldva általában 25–30 napig stabil megfelelő hűtés esetén. Sima steril vízzel (tartósítószer nélkül) feloldott peptideket 24–48 órán belül kell felhasználni. A pontos eltarthatóság peptidenként eltérhet.',
      },
    ],
  },
  {
    label: 'Biztonság & Jogi',
    items: [
      {
        q: 'Legálisak a peptidek?',
        a: 'A jogi státusz országonként és peptidtől függően változik. Az USA-ban sok peptid kutatási vegyszerként kapható, míg mások (pl. szemaglutid) FDA által jóváhagyott vényköteles gyógyszerek. Magyarországon és az EU-ban egyes peptidek orvosi rendelvényre kaphatók, mások kutatási célra beszerezhetők. Mindig tájékozódj az aktuális helyi jogszabályokról.',
      },
      {
        q: 'Milyen mellékhatások lehetnek?',
        a: 'Gyakori mellékhatások: injekció helyén bőrreakció (bőrpír, duzzanat), fejfájás, hányinger, fáradtság. GH-szekretórium peptidek esetén vízretenció és vércukorszint-változás is előfordulhat. Minden eset egyéni — konzultálj egészségügyi szakemberrel.',
      },
      {
        q: 'Kombinálhatok több peptidet?',
        a: 'Egyes kombinációknak van kutatási háttere (stack protokollok), azonban minden kombináció növeli a komplexitást és a potenciális interakciós kockázatot. A helytelen kombináció nemkívánt hatásokat válthat ki. Tanácsadónk segít eligazodni a biztonságos protokollokban.',
      },
    ],
  },
]

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="border-b border-white/[0.05] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-200 leading-snug">
          {item.q}
        </span>
        <span className="shrink-0 mt-0.5 text-[#818cf8]">
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-6">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [tab, setTab] = useState(0)
  const [openIdx, setOpenIdx] = useState(null)

  const handleTab = (i) => {
    setTab(i)
    setOpenIdx(null)
  }

  const items = CATEGORIES[tab].items
  const totalItems = CATEGORIES.reduce((s, c) => s + c.items.length, 0)

  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            Gyakori kérdések
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white mb-4">
            FAQ
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            {totalItems} kérdés — adagolástól a jogi státuszig.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleTab(i)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-200 ${
                tab === i
                  ? 'bg-[rgba(129,140,248,0.18)] text-[#818cf8] border border-[rgba(129,140,248,0.30)]'
                  : 'text-gray-600 hover:text-gray-300 border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="glass rounded-2xl px-8 py-2">
          {items.map((item, i) => (
            <AccordionItem
              key={`${tab}-${i}`}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>

        <p className="text-center text-gray-700 text-[11px] tracking-widest mt-8 uppercase">
          Minden válasz tájékoztató jellegű — nem helyettesíti az orvosi szakvéleményt.
        </p>
      </div>
    </section>
  )
}
