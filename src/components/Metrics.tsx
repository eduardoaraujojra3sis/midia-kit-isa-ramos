import { Instagram, Music2, Eye, Users, Heart, ThumbsUp } from 'lucide-react'
import { useAnimatedNumber } from '../hooks/useAnimatedNumber'
import { profile } from '../data/profile'

const iconMap = {
  instagram: Instagram,
  music: Music2,
  eye: Eye,
  users: Users,
  heart: Heart,
  'thumbs-up': ThumbsUp,
} as const

function AnimatedMetric({ value, label, icon: Icon }: { value: string; label: string; icon: typeof Instagram }) {
  const { display, ref } = useAnimatedNumber(value, { delay: 200 })

  return (
    <div className="card text-center group animate-stagger">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bege/20 to-bege/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={22} className="text-cafe" />
      </div>
      <p
        ref={ref}
        className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-alt tabular-nums mb-2 leading-tight"
      >
        {display}
      </p>
      <p className="text-marrom-claro/80 text-xs md:text-sm font-medium leading-relaxed">
        {label}
      </p>
    </div>
  )
}

export default function Metrics() {
  return (
    <section id="metrics" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-offwhite via-bege/20 to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-zoom">
        <div className="text-center mb-16 md:mb-20">
          <span className="section-label">Métricas</span>
          <h2 className="section-title font-display text-balance">
            Números que conectam{' '}
            <span className="gradient-text">marcas a resultados</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Dados reais de alcance, engajamento e performance nas redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {profile.metrics.main.map((metric, i) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap]
            return (
              <div
                key={metric.id}
                className="animate-stagger"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <AnimatedMetric
                  value={metric.value}
                  label={metric.label}
                  icon={Icon}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
