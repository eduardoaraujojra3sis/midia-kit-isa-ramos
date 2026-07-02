import { Instagram, Music2, ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-cafe overflow-hidden">
      {/* Desktop: two-column layout */}
      <div className="hidden lg:flex min-h-screen hero-3d">
        {/* Decorative background blur elements (behind everything) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gold-blur absolute -top-32 -right-32 w-96 h-96 rounded-full bg-dourado/40" style={{ transform: 'translateZ(-80px)' }} />
          <div className="rose-blur absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-rosa-metalico/40" style={{ transform: 'translateZ(-70px)' }} />
          <div className="gold-blur absolute bottom-0 left-1/2 w-64 h-64 rounded-full bg-dourado/30" style={{ transform: 'translateZ(-90px)' }} />
          {/* Stitching line */}
          <div className="stitching-line absolute top-1/3 left-0 right-0" style={{ transform: 'translateZ(-40px)' }} />
          <div className="stitching-line absolute bottom-1/3 left-0 right-0" style={{ transform: 'translateZ(-40px)' }} />
        </div>

        {/* LEFT: Text content */}
        <div className="w-1/2 bg-cafe relative flex items-center justify-center p-12 xl:p-20">
          <div className="max-w-lg w-full hero-layer-name">
            {/* Decorative gold line top — entrance */}
            <div className="hero-text-rise w-12 h-0.5 bg-gradient-to-r from-dourado to-rosa-metalico mb-8" style={{ animationDelay: '0.3s' }} />

            {/* Top label — entrance */}
            <span className="hero-text-rise inline-block text-xs tracking-[0.25em] uppercase text-dourado/80 font-sans font-medium mb-6" style={{ animationDelay: '0.5s' }}>
              UGC Creator & Influenciadora Digital
            </span>

            {/* Main name — entrance */}
            <h1 className="hero-text-rise font-display text-8xl xl:text-9xl font-bold text-offwhite leading-[1.0] tracking-[-0.03em] mb-2" style={{ animationDelay: '0.7s' }}>
              ISA
            </h1>

            {/* Cursive surname — entrance */}
            <p className="hero-text-rise font-cursive text-5xl xl:text-6xl text-dourado mb-8" style={{ animationDelay: '0.9s' }}>
              Ramos
            </p>

            {/* Divider — entrance */}
            <div className="hero-fade-in w-16 h-px bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 mb-8" style={{ animationDelay: '1.1s' }} />

            {/* Subtitle — entrance */}
            <p className="hero-fade-in text-bege/70 text-lg leading-relaxed font-sans font-light max-w-md mb-10" style={{ animationDelay: '1.2s' }}>
              Conteúdo autêntico para marcas que querem gerar resultado com creators.
            </p>

            {/* Buttons — entrance */}
            <div className="hero-fade-in flex flex-wrap gap-4" style={{ animationDelay: '1.4s' }}>
              <a
                href="#contact"
                className="btn-gold"
              >
                Trabalhe comigo
              </a>
              <a
                href="#videos"
                className="btn-outline-premium"
              >
                Ver trabalhos
              </a>
            </div>

            {/* Social icons — entrance */}
            <div className="hero-fade-in flex items-center gap-5 mt-10" style={{ animationDelay: '1.6s' }}>
              <a
                href={profile.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bege/50 hover:text-dourado transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={profile.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bege/50 hover:text-dourado transition-colors"
              >
                <Music2 size={18} />
              </a>
              <span className="text-bege/30 text-xs font-sans ml-2">
                {profile.username}
              </span>
            </div>
          </div>

          {/* Decorative country star — left side */}
          <div className="country-star absolute top-16 left-8 text-dourado/20" style={{ transform: 'translateZ(40px)' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="country-star absolute bottom-24 right-12 text-dourado/15" style={{ animationDelay: '2s', transform: 'translateZ(30px)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* RIGHT: Photo area */}
        <div className="w-1/2 relative bg-gradient-to-br from-cafe via-[#2A1810] to-cafe overflow-hidden">
          <div className="hero-photo-reveal absolute inset-0" style={{ transformStyle: 'preserve-3d', animationDelay: '0.2s' }}>
            <img
              src="/fotos/isa-ramos.jpg"
              alt="Isa Ramos"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'translateZ(20px)' }}
            />
          </div>

          {/* Dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" style={{ transform: 'translateZ(10px)' }} />

          {/* Decorative rings */}
          <div className="country-glow-ring absolute top-12 right-12 w-32 h-32 rounded-full" style={{ transform: 'translateZ(15px)', animationDelay: '2s' }} />
          <div className="country-glow-ring absolute top-20 right-20 w-20 h-20 rounded-full" style={{ transform: 'translateZ(15px)', animationDelay: '2.5s' }} />

          {/* Star decoration (country element) */}
          <div className="country-star absolute bottom-16 left-16 text-dourado/20" style={{ transform: 'translateZ(25px)' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Bottom gold gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dourado/60 to-transparent" style={{ transform: 'translateZ(10px)' }} />
        </div>
      </div>

      {/* MOBILE: stacked layout */}
      <div className="lg:hidden relative min-h-screen flex flex-col">
        {/* Photo area - top half */}
        <div className="relative h-[50vh] sm:h-[55vh]">
          <img
            src="/fotos/isa-ramos.jpg"
            alt="Isa Ramos"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay at bottom for text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cafe to-transparent" />

          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dourado/60 to-transparent" />
        </div>

        {/* Text content - bottom half */}
        <div className="relative flex-1 bg-cafe flex items-center px-6 pb-10 pt-5">
          <div className="w-full max-w-lg mx-auto">
            {/* Top label */}
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-dourado/80 font-sans font-medium block mb-3 sm:mb-4">
              UGC Creator & Influenciadora Digital
            </span>

            {/* Main name */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-offwhite leading-[1.1] tracking-[-0.03em] mb-1">
              ISA
            </h1>

            {/* Cursive surname */}
            <p className="font-cursive text-3xl sm:text-4xl text-dourado mb-5">
              Ramos
            </p>

            {/* Divider */}
            <div className="w-10 h-px bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 mb-4" />

            {/* Subtitle */}
            <p className="text-bege/70 text-xs sm:text-sm leading-relaxed font-sans font-light max-w-sm mb-6">
              Conteúdo autêntico para marcas que querem gerar resultado com creators.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                  bg-gradient-to-r from-dourado to-rosa-metalico text-white font-medium text-[11px] sm:text-xs
                  tracking-wide transition-all duration-300 shadow-lg shadow-dourado/25"
              >
                Trabalhe comigo
              </a>
              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                  border-2 border-dourado/50 text-dourado font-medium text-[11px] sm:text-xs tracking-wide
                  transition-all duration-300 hover:border-dourado hover:bg-dourado/10"
              >
                Ver trabalhos
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={profile.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bege/50 hover:text-dourado transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={profile.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bege/50 hover:text-dourado transition-colors"
              >
                <Music2 size={16} />
              </a>
              <span className="text-bege/30 text-[11px] font-sans ml-1">
                {profile.username}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="text-[10px] tracking-[0.2em] uppercase text-bege/50 font-sans">Scroll</span>
        <ArrowDown size={16} className="text-dourado/60 animate-bounce" />
      </div>
    </section>
  )
}
