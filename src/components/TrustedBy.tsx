import Tilt3D from './Tilt3D'

interface Brand {
  name: string
  logo: string
}

const brands: Brand[] = [
  { name: 'SHEIN', logo: '/logos/shein.svg' },
  { name: 'GL Embaixador', logo: '/logos/Logo Gl Embaixador.png' },
  { name: 'Bold', logo: '/logos/Bold logo.png' },
  { name: 'Pix do Milhão', logo: '/logos/Pix do milhao logo.png' },
  { name: 'Fashion Gold', logo: '/logos/Fashion Gold Logo.jfif' },
  { name: 'Wepink', logo: '/logos/Logo Wepink.png' },
  { name: 'NFR', logo: '/logos/NFR Logo.jfif' },
  { name: 'Ecopower', logo: '/logos/ecopower logo.jfif' },
  { name: 'Sibu', logo: '/logos/Sibu logo.png' },
]

export default function TrustedBy() {
  return (
    <section id="brands" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/10 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Parceiros</span>
          <h2 className="section-title font-display text-balance">
            Confiada por{' '}
            <span className="gradient-text">marcas</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Marcas que já se conectaram ao meu conteúdo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-8 max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <Tilt3D
              key={brand.name}
              className="animate-stagger"
              style={{ animationDelay: `${i * 0.08}s` }}
              maxTilt={5}
              scale={1.03}
              perspective={700}
            >
              <div className="group relative flex flex-col items-center gap-2 tilt-card-inner">
                <div
                  className={`w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center
                    border border-bege/40 shadow-md shadow-bege/20
                    transition-all duration-500 hover:-translate-y-1
                    hover:shadow-lg hover:shadow-dourado/20 hover:border-dourado/40 overflow-hidden ${brand.name === 'Pix do Milhão' ? 'bg-black' : 'bg-gradient-to-br from-offwhite to-bege/20'}`}
                >
                  <img src={brand.logo} alt={brand.name} className={`rounded-full ${brand.name === 'SHEIN' || brand.name === 'Pix do Milhão' ? 'w-4/5 h-4/5 object-contain' : 'w-full h-full object-cover'}`} />
                </div>
                <p className="text-marrom-claro/70 text-xs font-medium tracking-wide text-center">
                  {brand.name}
                </p>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  )
}
