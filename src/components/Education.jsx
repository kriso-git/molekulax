import { FlaskConical, BookOpen, MessageSquare } from 'lucide-react'

const FEATURES = [
  {
    Icon: FlaskConical,
    title: 'Peptid farmakológia',
    desc: 'Az endogén és szintetikus peptidek hatásmechanizmusainak tudományos áttekintése — receptorkötéstől a sejtes jelzési utakig.',
  },
  {
    Icon: BookOpen,
    title: 'Klinikai kutatások',
    desc: 'Peer-reviewed tanulmányok és PubMed hivatkozások alapján tájékozódj — nem marketing, hanem adat.',
  },
  {
    Icon: MessageSquare,
    title: 'Tanácsadó elérhetősége',
    desc: 'Ha kérdésed van a témával kapcsolatban, tanácsadónk elérhető Telegramon — közvetlenül és egyszerűen.',
  },
]

export default function Education() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#818cf8] text-xs tracking-[0.3em] uppercase mb-5">
            Tudásbázis
          </p>
          <h2 className="text-3xl md:text-5xl font-bold italic text-white">
            Miért a MolekulaX?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl glass hover:border-[rgba(129,140,248,0.22)] hover:bg-[rgba(99,102,241,0.07)] transition-all duration-500 cursor-default"
            >
              <div className="mb-7">
                <Icon
                  size={30}
                  className="text-[#818cf8] group-hover:drop-shadow-[0_0_10px_rgba(129,140,248,0.7)] transition-all duration-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
