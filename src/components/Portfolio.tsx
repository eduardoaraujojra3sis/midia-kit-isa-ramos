import { Play, ExternalLink, Image as ImageIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { useLazyVideo } from '../hooks/useLazyVideo'

function PortfolioVideo({ src }: { src: string }) {
  const { videoRef, containerRef, videoFailed, handleVideoError } = useLazyVideo(src)

  return (
    <div ref={containerRef} className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${videoFailed ? 'opacity-20' : ''}`}
        onError={handleVideoError}
      />
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal-zoom">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title font-display text-balance">
            Trabalhos e{' '}
            <span className="gradient-text">campanhas</span>
          </h2>
        </div>

        <div className="bg-gradient-to-r from-bege/20 via-bege/10 to-bege/20 rounded-2xl p-6 md:p-10 border border-bege/40 mb-8 md:mb-12 max-w-4xl mx-auto card-elevated">
          <p className="text-marrom-claro/80 text-center text-base md:text-lg leading-relaxed">
            {profile.portfolio.text}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {profile.portfolio.items.map((item, i) => (
            <a
              key={item.title}
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-stagger card group overflow-hidden !p-0 !shadow-md !shadow-bege/20 hover:!shadow-lg hover:!shadow-dourado/20 ${!item.src ? 'flex items-center justify-center min-h-[200px]' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.src ? (
                <>
                  <div className="relative w-full aspect-[3/4]">
                    {item.type === 'video' ? (
                      <PortfolioVideo src={item.src} />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <Play size={20} className="text-cafe ml-0.5" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 left-2">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide border border-white/10">
                        {item.title}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs font-medium truncate">
                        {item.title}
                      </p>
                    </div>
                    {item.link && (
                      <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-offwhite/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={12} className="text-marrom-claro" />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 min-h-[200px] w-full bg-gradient-to-br from-bege/20 via-bege/10 to-bege/20 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bege/20 via-bege/30 to-bege/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.type === 'video' ? (
                      <Play size={22} className="text-marrom-claro ml-0.5" />
                    ) : (
                      <ImageIcon size={22} className="text-marrom-claro" />
                    )}
                  </div>
                  <p className="text-marrom-claro text-sm font-medium text-center leading-snug">
                    {item.title}
                  </p>
                  <p className="text-bege/60 text-[10px] uppercase tracking-wider">
                    Clique para ver
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
