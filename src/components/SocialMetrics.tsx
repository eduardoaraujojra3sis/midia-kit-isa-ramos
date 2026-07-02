/*
 * EDITÁVEL: Altere os valores abaixo para atualizar as métricas da seção Social Media Analytics.
 */
const metrics = [
  {
    value: '260.12K',
    label: 'Seguidores no Instagram',
  },
  {
    value: '280.18K',
    label: 'Seguidores no TikTok',
  },
  {
    value: '1.7M',
    label: 'Alcance mensal',
  },
  {
    value: '80%',
    label: 'Audiência feminina',
  },
] as const

export default function SocialMetrics() {
  return (
    <section id="analytics" className="relative py-16 md:py-24 overflow-hidden">
      {/* Dark cafe background */}
      <div className="absolute inset-0 bg-cafe" />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado/40 to-transparent" />
      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 reveal" data-parallax-speed="0.08">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-dourado/70 font-semibold mb-3">
            Social Media Analytics
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-offwhite">
            Números que{' '}
            <span className="gradient-text">impactam</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <div key={m.label} className="text-center animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
              <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-offwhite mb-1.5 tracking-tight">
                {m.value}
              </p>
              <div className="w-8 h-0.5 bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 rounded-full mx-auto mb-2" />
              <p className="text-bege/60 text-xs md:text-sm font-light tracking-wide max-w-[160px] mx-auto leading-relaxed">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
