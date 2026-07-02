import { Film, Play, Image, Calendar, Smartphone, Camera } from 'lucide-react'
import Tilt3D from './Tilt3D'

interface Service {
  icon: typeof Film
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Film,
    title: 'Reels/TikTok',
    description:
      'Vídeos curtos, criativos e autênticos para gerar alcance, desejo e conexão.',
  },
  {
    icon: Play,
    title: 'Stories',
    description:
      'Divulgações rápidas e diretas para fortalecer campanhas, lançamentos e ações promocionais.',
  },
  {
    icon: Image,
    title: 'Publipost',
    description:
      'Postagens estratégicas no feed com estética profissional e comunicação alinhada à marca.',
  },
  {
    icon: Calendar,
    title: 'Presença em eventos',
    description:
      'Cobertura, bastidores e divulgação de rodeios, festas, inaugurações e experiências presenciais.',
  },
  {
    icon: Smartphone,
    title: 'UGC para marcas',
    description:
      'Conteúdos gravados para a própria marca utilizar em anúncios, redes sociais e campanhas.',
  },
  {
    icon: Camera,
    title: 'Ensaios e fotos comerciais',
    description:
      'Fotos estéticas para produtos, looks, acessórios, beleza e lifestyle.',
  },
]

export default function WhatIDeliver() {
  return (
    <section id="deliver" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Serviços</span>
          <h2 className="section-title font-display text-balance">
            O que eu{' '}
            <span className="gradient-text">entrego</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Formatos de conteúdo criados para gerar conexão, desejo e resultado para marcas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Tilt3D key={service.title} className="animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="card group !p-6 md:!p-8 flex flex-col items-start gap-4 tilt-card-inner">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bege/30 to-bege/10 flex items-center justify-center group-hover:from-dourado/20 group-hover:to-rosa-metalico/10 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-marrom-claro group-hover:text-dourado transition-colors" />
                  </div>
                  <h3 className="text-cafe font-display font-semibold text-lg md:text-xl leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-marrom-claro/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Tilt3D>
            )
          })}
        </div>
      </div>
    </section>
  )
}
