import { Eye, Users, Star, TrendingUp, BarChart3, UsersRound } from 'lucide-react'
import { useAnimatedNumber } from '../hooks/useAnimatedNumber'
import { useAnimatedWidth } from '../hooks/useAnimatedWidth'
import { profile } from '../data/profile'

function AnimatedProgressBar({
  label,
  percentage,
  color = 'bg-gradient-to-r from-dourado to-marrom-claro',
  suffix = '%',
  showValue = true,
}: {
  label: string
  percentage: number
  color?: string
  suffix?: string
  showValue?: boolean
}) {
  const { currentWidth, ref } = useAnimatedWidth(percentage)

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-marrom-claro">{label}</span>
        {showValue && (
          <span className="text-sm font-semibold text-cafe">
            {Math.round(currentWidth)}
            {suffix}
          </span>
        )}
      </div>
      <div ref={ref} className="progress-bar-track h-2.5">
        <div
          className={`progress-bar-fill ${color}`}
          style={{ width: `${currentWidth}%` }}
        />
      </div>
    </div>
  )
}

function AnimatedContentBar({
  label,
  percentage,
  color,
}: {
  label: string
  percentage: number
  color: string
}) {
  const { currentWidth, ref } = useAnimatedWidth(percentage, { duration: 1000 })

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-marrom-claro w-16 shrink-0">{label}</span>
      <div ref={ref} className="progress-bar-track h-3">
        <div
          className={`progress-bar-fill ${color}`}
          style={{ width: `${currentWidth}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-cafe w-14 text-right tabular-nums">
        {Math.round(percentage)}%
      </span>
    </div>
  )
}

export default function Audience() {
  const a = profile.audience

  return (
    <section id="audience" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-right">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Audiência</span>
          <h2 className="section-title font-display text-balance">
            Quem acompanha{' '}
            <span className="gradient-text font-cursive">{profile.name}</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            {a.introText}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-bege/20 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bege/20 to-bege/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye size={22} className="text-cafe" />
              </div>
              <AnimatedNumberDisplay value={a.totalViews} />
              <p className="text-marrom-claro text-sm font-medium">
                Visualizações totais
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-marrom-claro/80">
                <span>
                  Período: <strong className="text-marrom-claro">{a.period}</strong>
                </span>
                <span>
                  Anúncios: <strong className="text-marrom-claro">{a.adsPercentage}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-bege/20 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bege/20 to-bege/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users size={22} className="text-cafe" />
              </div>
              <AnimatedNumberDisplay value={a.accountsReached} />
              <p className="text-marrom-claro text-sm font-medium">
                Contas alcançadas
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                <TrendingUp size={14} className="text-dourado" />
                <span className="text-xs text-dourado font-semibold">
                  {a.accountsGrowth}
                </span>
                <span className="text-xs text-marrom-claro/80">nos últimos 30 dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={18} className="text-cafe" />
            <h3 className="text-cafe font-semibold text-base font-display">
              Distribuição de visualizações
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <AnimatedProgressBar
                label="Seguidores"
                percentage={a.followerViews}
                color="bg-gradient-to-r from-dourado to-marrom-claro"
                suffix="%"
                showValue
              />
              <p className="text-xs text-marrom-claro/80 flex items-center gap-1">
                <UsersRound size={12} />
                Público que já segue o perfil
              </p>
            </div>

            <div className="space-y-4">
              <AnimatedProgressBar
                label="Não seguidores"
                percentage={a.nonFollowerViews}
                color="bg-gradient-to-r from-rosa-metalico to-marrom-claro"
                suffix="%"
                showValue
              />
              <p className="text-xs text-marrom-claro/80 flex items-center gap-1">
                <Star size={12} />
                Potencial de descoberta orgânica
              </p>
            </div>
          </div>
        </div>

        <div className="card mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={18} className="text-cafe" />
            <h3 className="text-cafe font-semibold text-base font-display">
              Distribuição por tipo de conteúdo
            </h3>
          </div>

          <div className="space-y-4">
            <AnimatedContentBar
              label="Reels"
              percentage={a.contentTypes[0].percentage}
              color="bg-gradient-to-r from-dourado to-marrom-claro"
            />
            <AnimatedContentBar
              label="Stories"
              percentage={a.contentTypes[1].percentage}
              color="bg-gradient-to-r from-marrom-claro to-rosa-metalico"
            />
            <AnimatedContentBar
              label="Posts"
              percentage={a.contentTypes[2].percentage}
              color="bg-gradient-to-r from-rosa-metalico to-marrom-claro"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
          <div className="card">
            <div className="flex items-center gap-2 mb-6">
              <UsersRound size={18} className="text-cafe" />
              <h3 className="text-cafe font-semibold text-base font-display">
                Faixa etária
              </h3>
            </div>

            <div className="space-y-3">
              {a.ageRanges.map((range) => {
                const intensity =
                  range.percentage > 40
                    ? 'from-dourado to-marrom-claro'
                    : range.percentage > 20
                      ? 'from-marrom-claro to-rosa-metalico'
                      : range.percentage > 10
                        ? 'from-rosa-metalico to-marrom-claro'
                        : 'from-bege/70 to-bege/40'
                return (
                  <AnimatedProgressBar
                    key={range.label}
                    label={range.label}
                    percentage={range.percentage}
                    color={`bg-gradient-to-r ${intensity}`}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bege/20 via-bege/10 to-bege/20 rounded-2xl p-6 md:p-10 border border-bege/40 card-elevated">
          <div className="flex items-center gap-2 mb-6">
            <Star size={20} className="text-dourado fill-dourado" />
            <h3 className="text-cafe font-semibold text-lg font-display">
              Destaques comerciais
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {a.highlights.map((text, i) => {
              const colors = [
                'border-bege/40 bg-bege/15',
                'border-bege/50 bg-bege/20',
                'border-bege/50 bg-bege/15',
                'border-bege/60 bg-bege/20',
                'border-rosa-metalico/30 bg-rosa-metalico/10',
              ]
              return (
                <div
                  key={i}
                  className={`rounded-xl border ${colors[i % colors.length]} p-4 flex items-start gap-3`}
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-dourado to-marrom-claro flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-marrom-claro leading-relaxed">{text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedNumberDisplay({ value }: { value: string }) {
  const { display, ref } = useAnimatedNumber(value, { delay: 100 })
  return (
    <p
      ref={ref}
      className="text-4xl md:text-5xl font-bold gradient-text-alt tabular-nums mb-1 leading-tight"
    >
      {display}
    </p>
  )
}
