import { Check, ArrowUpRight, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/10 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Parcerias</span>
          <h2 className="section-title font-display text-balance">
            Formatos de{' '}
            <span className="gradient-text">parceria</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Escolha o formato ideal para sua campanha.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {profile.packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`animate-stagger relative flex flex-col rounded-2xl p-6 md:p-8 transition-all duration-500 ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-offwhite to-bege/20 border-2 border-dourado/50 shadow-xl shadow-dourado/10 hover:shadow-2xl hover:shadow-dourado/20 lg:scale-110'
                  : 'bg-white/90 border border-bege/40 shadow-md shadow-bege/10 hover:shadow-xl hover:shadow-dourado/10 hover:-translate-y-1'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-dourado to-rosa-metalico text-white text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-dourado/30">
                  <Sparkles size={12} />
                  Mais escolhido
                </div>
              )}

              <h3 className={`font-display text-xl md:text-2xl font-bold mb-1 ${pkg.highlight ? 'text-cafe' : 'text-cafe'}`}>
                {pkg.name}
              </h3>

              <p className="text-marrom-claro/70 text-sm mb-4 md:mb-5">
                {pkg.tagline}
              </p>

              <div
                className={`w-10 h-px rounded-full mb-4 md:mb-5 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-dourado to-rosa-metalico'
                    : 'bg-bege/60'
                }`}
              />

              <ul className="space-y-2.5 flex-1 mb-6 md:mb-8">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        pkg.highlight ? 'text-dourado' : 'text-bege'
                      }`}
                    />
                    <span className="text-marrom-claro/80 text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-display text-2xl font-bold text-cafe mb-4 md:mb-5">
                Sob consulta
              </p>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-dourado to-rosa-metalico text-white shadow-lg shadow-dourado/25 hover:-translate-y-0.5 hover:shadow-dourado/40'
                    : 'border-2 border-bege/50 text-marrom-claro hover:border-dourado/60 hover:text-dourado hover:bg-dourado/5'
                }`}
              >
                Solicitar orçamento
                <ArrowUpRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
