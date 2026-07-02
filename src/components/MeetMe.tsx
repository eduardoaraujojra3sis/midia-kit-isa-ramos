import { Instagram, Music2, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

export default function MeetMe() {
  return (
    <section id="meet" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-offwhite via-bege/10 to-offwhite" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Sobre</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-cafe">
            Me{' '}
            <span className="font-cursive gradient-text">conheça</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* LEFT: Photo */}
          <div className="animate-stagger relative" style={{ animationDelay: '0.1s' }}>
            {/* Gold decorative border */}
            <div
              className="absolute -inset-3 md:-inset-4 rounded-[28px] opacity-30"
              style={{
                background:
                  'linear-gradient(135deg, #C6A15B, #B98A78, #C6A15B)',
              }}
            />
            {/* Foto da Isa Ramos — EDITÁVEL: troque o src pela foto atual */}
            <div
              className="floating-image relative rounded-2xl overflow-hidden aspect-[4/5] w-full"
              style={{
                boxShadow:
                  '0 8px 40px rgba(198,161,91,0.15), 0 2px 10px rgba(58,33,26,0.08)',
              }}
            >
              <img
                src="/fotos/isa-ramos.jpg"
                alt="Isa Ramos"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Decorative gold elements */}
              <div className="country-glow-ring absolute top-6 right-6 w-16 h-16 rounded-full" style={{ animationDelay: '0.5s' }} />
              <div className="country-glow-ring absolute top-10 right-10 w-8 h-8 rounded-full" style={{ animationDelay: '1s' }} />
            </div>

            {/* Floating gold label - desktop */}
            <div className="hidden lg:flex absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-dourado to-rosa-metalico items-center justify-center shadow-lg shadow-dourado/30">
              <span className="text-white font-display text-2xl font-bold">♥</span>
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="animate-stagger space-y-6 md:space-y-7" style={{ animationDelay: '0.2s' }}>
            {/* Subtitle */}
            <p className="text-marrom-claro/80 text-sm md:text-base font-sans font-light leading-relaxed max-w-lg">
              UGC Creator & Influenciadora Digital
            </p>

            {/* Bio */}
            <div className="space-y-4 text-cafe/80 text-sm md:text-base leading-relaxed">
              <p>
                Olá, eu sou Isa Ramos, influenciadora digital e criadora de
                conteúdo apaixonada pelo universo digital. Meu trabalho une
                autenticidade, estilo de vida, moda, beleza e a força da
                cultura sertaneja para criar conteúdos que aproximam marcas
                de pessoas reais.
              </p>
              <p>
                Com uma comunicação espontânea, visual marcante e forte
                presença nas redes sociais, ajudo marcas a se posicionarem de
                forma mais humana, desejável e conectada com um público que
                valoriza confiança, beleza, tradição e atitude.
              </p>
              <p>
                Meu conteúdo é pensado para gerar identificação, alegria e engajamento, sempre mantendo a minha essência e a verdade com meu publico.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-gradient-to-r from-dourado/80 to-rosa-metalico/60" />

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href={profile.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-dourado/10 to-rosa-metalico/10 flex items-center justify-center text-marrom-claro hover:from-dourado hover:to-rosa-metalico hover:text-white transition-all duration-300 border border-dourado/20 hover:border-transparent"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={profile.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-dourado/10 to-rosa-metalico/10 flex items-center justify-center text-marrom-claro hover:from-dourado hover:to-rosa-metalico hover:text-white transition-all duration-300 border border-dourado/20 hover:border-transparent"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-dourado to-rosa-metalico text-white font-medium text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-dourado/25 hover:shadow-dourado/40"
            >
              Conheça meu trabalho
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
