import { Zap, Compass, Video, Users, Smartphone, Quote } from 'lucide-react'
import { profile } from '../data/profile'

const iconMap = {
  zap: Zap,
  compass: Compass,
  video: Video,
  users: Users,
  smartphone: Smartphone,
} as const

export default function WhyHire() {
  return (
    <section id="why-hire" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-left">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Diferenciais</span>
          <h2 className="section-title font-display text-balance">
            Por que contratar{' '}
            <span className="gradient-text font-cursive">{profile.name}?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="relative">
            <Quote size={36} className="absolute -top-1 -left-1 text-bege/40 -scale-x-100" />
            <div className="card card-elevated pl-10 md:pl-14">
              <p className="text-marrom-claro/80 leading-relaxed md:text-lg">
                {profile.whyHire.text}
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {profile.whyHire.reasons.map((reason, i) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap]
            const isFeatured = i < 2
            return (
              <div
                key={reason.title}
                className={`animate-stagger card group ${isFeatured ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bege/20 to-bege/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-cafe" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-cafe font-display font-semibold text-base md:text-lg mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-marrom-claro/80 text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
