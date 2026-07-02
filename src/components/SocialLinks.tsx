import { Instagram, Music2, ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'
import Tilt3D from './Tilt3D'

const socials = [
  {
    platform: 'Instagram',
    icon: Instagram,
    handle: profile.social.instagram.handle,
    url: profile.social.instagram.url,
    gradient: 'from-dourado via-dourado to-rosa-metalico',
  },
  {
    platform: 'TikTok',
    icon: Music2,
    handle: profile.social.tiktok.handle,
    url: profile.social.tiktok.url,
    gradient: 'from-rosa-metalico to-dourado',
  },
] as const

export default function SocialLinks() {
  return (
    <section id="social" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-blur">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Redes Sociais</span>
          <h2 className="section-title font-display text-balance">
            Acompanhe{' '}
            <span className="gradient-text font-cursive">{profile.name}</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Conteúdo exclusivo, bastidores e novidades todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {socials.map((s, i) => {
            const Icon = s.icon
            return (
              <Tilt3D key={s.platform} maxTilt={4} scale={1.01} perspective={800} className="animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tilt-card-inner card group !p-0 overflow-hidden hover:!shadow-xl hover:!shadow-dourado/20"
                >
                  <div className={`bg-gradient-to-r ${s.gradient} px-6 py-5 flex items-center gap-3`}>
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold font-display text-lg">
                        {s.platform}
                      </h3>
                      <p className="text-white/70 text-sm">{s.handle}</p>
                    </div>
                    <ExternalLink size={16} className="text-white/50 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-marrom-claro text-sm">Abrir perfil</span>
                    <span className="text-cafe text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Acessar &rarr;
                    </span>
                  </div>
                </a>
              </Tilt3D>
            )
          })}
        </div>
      </div>
    </section>
  )
}
