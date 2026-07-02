import { MapPin, Award, Camera, TrendingUp, Sparkles } from 'lucide-react'

const milestones = [
  {
    year: '2020',
    icon: Camera,
    title: 'Início da jornada',
    desc: 'Primeiros conteúdos criados com autenticidade e paixão pelo universo country, lifestyle e moda.',
  },
  {
    year: '2021',
    icon: TrendingUp,
    title: 'Crescimento orgânico',
    desc: 'Alcance ultrapassou 1M de visualizações mensais com conteúdo orgânico e engajamento genuíno.',
  },
  {
    year: '2022',
    icon: Award,
    title: 'Primeiras parcerias',
    desc: 'Início de colaborações com marcas nacionais nos segmentos de moda, beleza e estilo de vida.',
  },
  {
    year: '2023',
    icon: Sparkles,
    title: '+200K seguidores',
    desc: 'Consolidação como criadora de conteúdo multiplataforma com audiência engajada e fiel.',
  },
  {
    year: '2024',
    icon: MapPin,
    title: 'Presença nacional',
    desc: 'Reconhecimento em eventos, campanhas de grande escala e conteúdo UGC para marcas líderes.',
  },
]

export default function Timeline() {
  return (
    <section className="relative py-24 md:py-36 px-6 w-full">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="section-label">Trajetória</span>
          <h2 className="section-title font-display">
            Minha{' '}
            <span className="text-dourado font-cursive">jornada</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            De criadora independente a referência em conteúdo autêntico no Brasil.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dourado/40 via-rosa-metalico/20 to-dourado/40 -translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {milestones.map((m, i) => {
              const Icon = m.icon
              const isLeft = i % 2 === 0

              return (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot on line (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-dourado to-rosa-metalico items-center justify-center shadow-lg shadow-dourado/20 z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:text-right' : 'md:text-left'} animate-stagger`} style={{ animationDelay: `${i * 0.12}s` }}>
                    <div className="card group hover:-translate-y-1 transition-all duration-500 p-6 md:p-8">
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-dourado/20 to-rosa-metalico/10 border border-dourado/20 text-xs font-bold text-dourado tracking-wider mb-3 ${isLeft ? '' : ''}`}>
                        <Icon size={12} className="text-dourado" />
                        {m.year}
                      </div>

                      <h3 className="text-cafe font-display font-bold text-lg md:text-xl mb-2">
                        {m.title}
                      </h3>
                      <p className="text-marrom-claro/80 text-sm leading-relaxed">
                        {m.desc}
                      </p>

                      {/* Gold accent */}
                      <div className={`w-8 h-0.5 bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 rounded-full mt-3 transition-all duration-500 group-hover:w-12 ${isLeft ? 'md:ml-auto' : ''}`} />
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
