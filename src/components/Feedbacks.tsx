import { Star } from 'lucide-react'
import Tilt3D from './Tilt3D'

/*
 * EDITÁVEL: Substitua os depoimentos abaixo por feedbacks reais de marcas parceiras.
 * Mantenha o formato: text, author, role.
 */
const testimonials = [
  {
    text: 'Trabalhar com a Isa foi uma experiência excelente. O conteúdo ficou natural, bonito e conectado com o público que queríamos alcançar.',
    author: 'Marina C.',
    role: 'Coordenadora de Marketing',
  },
  {
    text: 'A entrega foi profissional, rápida e com uma estética muito acima do esperado. A campanha teve ótima aceitação.',
    author: 'Rafael T.',
    role: 'Gerente de Marcas',
  },
  {
    text: 'A Isa conseguiu apresentar nossa marca de forma leve, autêntica e muito verdadeira. O resultado gerou conexão imediata com o público.',
    author: 'Juliana M.',
    role: 'Head de Comunicação',
  },
]

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/10" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title font-display text-balance">
            <span className="gradient-text">Feedbacks</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            O que marcas e parceiros dizem sobre trabalhar comigo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Tilt3D
              key={t.author}
              className="animate-stagger"
              style={{ animationDelay: `${i * 0.15}s` }}
              maxTilt={5}
              scale={1.01}
              perspective={900}
            >
              <div className="card group !p-6 md:!p-8 flex flex-col tilt-card-inner">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-dourado fill-dourado/90"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-cafe/80 text-sm md:text-base leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Gold divider */}
                <div className="w-8 h-px bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 rounded-full mb-4" />

                {/* Author */}
                <div>
                  <p className="text-cafe font-display font-semibold text-sm">
                    {t.author}
                  </p>
                  <p className="text-marrom-claro/60 text-xs tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  )
}
