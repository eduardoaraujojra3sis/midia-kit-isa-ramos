import { Instagram, Music2, TrendingUp } from 'lucide-react'
import { profile } from '../data/profile'

const socialInfo = {
  instagram: {
    icon: Instagram,
    title: 'Instagram',
    gradient: 'from-dourado to-marrom-claro',
    lightBg: 'from-bege/20 to-bege/10',
    border: 'border-dourado/20',
    data: profile.metrics.instagram,
  },
  tiktok: {
    icon: Music2,
    title: 'TikTok',
    gradient: 'from-rosa-metalico to-dourado',
    lightBg: 'from-bege/20 to-bege/20',
    border: 'border-dourado/20',
    data: profile.metrics.tiktok,
  },
} as const

function EngagementBadge({ value }: { value: string }) {
  const isHigh = value === 'Alto'
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
          isHigh
            ? 'bg-dourado/20 text-dourado'
            : 'bg-rosa-metalico/20 text-rosa-metalico'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isHigh ? 'bg-dourado' : 'bg-rosa-metalico'
        }`}
      />
      {value}
    </span>
  )
}

export default function Performance() {
  return (
    <section id="performance" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-blur">
        <div className="text-center mb-16 md:mb-20">
          <span className="section-label">Performance</span>
          <h2 className="section-title font-display text-balance">
            Performance por{' '}
            <span className="gradient-text">rede social</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Análise detalhada de métricas e resultados por plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {(Object.keys(socialInfo) as Array<keyof typeof socialInfo>).map(
            (key) => {
              const platform = socialInfo[key]
              const Icon = platform.icon
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl border border-bege/40 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-0.5"
                  style={{
                    boxShadow: '0 1px 3px rgba(185, 138, 120, 0.06), 0 8px 24px rgba(185, 138, 120, 0.08)',
                  }}
                >
                  <div
                    className={`bg-gradient-to-r ${platform.gradient} px-6 py-5 flex items-center gap-3`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold font-display text-lg">
                        {platform.title}
                      </h3>
                      <p className="text-white/70 text-xs">
                        @{key === 'instagram' ? 'isamramos_' : 'isamramoss_'}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp size={16} className="text-marrom-claro/80" />
                      <span className="text-marrom-claro/80 text-xs font-medium uppercase tracking-wider">
                        Métricas
                      </span>
                    </div>

                    <div className="space-y-0">
                      {platform.data.map((stat, i) => (
                        <div
                          key={stat.label}
                          className={`animate-stagger flex items-center justify-between py-3 ${
                            i < platform.data.length - 1
                              ? 'border-b border-bege/40'
                              : ''
                          }`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <span className="text-marrom-claro text-sm">
                            {stat.label}
                          </span>
                          {stat.label === 'Classificação do engajamento' ? (
                            <EngagementBadge value={stat.value} />
                          ) : (
                            <span className="text-cafe font-semibold text-sm tabular-nums">
                              {stat.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}
