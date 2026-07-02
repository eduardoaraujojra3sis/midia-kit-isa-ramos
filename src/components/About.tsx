import { Quote, Sparkles, Heart, Music, Camera } from 'lucide-react'
import { profile } from '../data/profile'

const highlights = [
  {
    icon: Sparkles,
    title: 'Conteúdo Autêntico',
    desc: 'Criação genuína que ressoa com o público e fortalece a identidade da marca.',
  },
  {
    icon: Heart,
    title: 'Alto Engajamento',
    desc: 'Audiência ativa e participativa, com interações reais em cada publicação.',
  },
  {
    icon: Music,
    title: 'Tendências Digitais',
    desc: 'Presença nas principais trends e formatos que dominam as redes sociais.',
  },
  {
    icon: Camera,
    title: 'Produção Profissional',
    desc: 'Conteúdo visual de alta qualidade com identidade marcante e criativa.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-transparent to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-left">
        <div className="text-center mb-16 md:mb-20">
          <span className="section-label">Sobre</span>
          <h2 className="section-title font-display text-balance">
            Conheça{' '}
            <span className="gradient-text font-cursive">{profile.name}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="relative">
            <Quote size={36} className="absolute -top-1 -left-1 text-bege/40 -scale-x-100" />
            <div className="card card-elevated pl-10 md:pl-16">
              <p className="text-marrom-claro/80 leading-relaxed md:text-lg">
                {profile.aboutText}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="animate-stagger card text-center group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bege/20 to-bege/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-cafe" />
                </div>
                <h3 className="text-cafe font-semibold font-display text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-marrom-claro/80 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
