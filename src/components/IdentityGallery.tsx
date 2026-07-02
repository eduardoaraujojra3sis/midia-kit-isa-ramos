import {
  Trees,
  Sun,
  Shirt,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { useLazyVideo } from '../hooks/useLazyVideo'

interface Card {
  icon: typeof Trees
  title: string
  description: string
  gradient: string
  imageBg: string
  src?: string
  instagramUrl?: string
  videoSrc?: string
}

const cards: Card[] = [
  {
    icon: Sun,
    title: 'LIFESTYLE',
    description: 'Rotina, viagens e dia a dia',
    gradient: 'from-dourado via-rosa-metalico to-bege',
    imageBg: 'linear-gradient(135deg, #D8C3A5 0%, #C6A15B 40%, #B98A78 100%)',
    instagramUrl: 'https://www.instagram.com/reel/DRZuDpWjdwD/',
    videoSrc: '/videos/Que saudade de casa.mp4',
  },
  {
    icon: Shirt,
    title: 'MODA',
    description: 'Looks, produções e tendências',
    gradient: 'from-rosa-metalico via-marrom-claro to-cafe',
    imageBg: 'linear-gradient(135deg, #B98A78 0%, #7A4E3A 40%, #3A211A 100%)',
    instagramUrl: 'https://www.instagram.com/reel/DKnpHuZgdoV/',
    videoSrc: '/videos/Look aprovado.mp4',
  },
  {
    icon: Sparkles,
    title: 'BELEZA',
    description: 'Make, cabelo e skincare',
    gradient: 'from-dourado via-bege to-rosa-metalico',
    imageBg: 'linear-gradient(135deg, #C6A15B 0%, #D8C3A5 40%, #B98A78 100%)',
    instagramUrl: 'https://www.instagram.com/reel/DLdVllqyTQe/',
    videoSrc: '/videos/explorar.mp4',
  },
  {
    icon: Star,
    title: 'RODEIO',
    description: 'Eventos e cultura country',
    gradient: 'from-cafe via-marrom-claro to-rosa-metalico',
    imageBg: 'linear-gradient(135deg, #3A211A 0%, #7A4E3A 30%, #B98A78 70%, #C6A15B 100%)',
    src: '/fotos/jeromao.jpg',
  },
]

function CardGrid({ item, onClick: clickHandler }: { item: Card; onClick?: () => void }) {
  const Icon = item.icon
  const { videoRef, containerRef, videoFailed, handleVideoError } = useLazyVideo(item.videoSrc)
  const isClickable = !!clickHandler
  const Tag = isClickable ? 'button' : 'div'

  return (
    <Tag
      ref={containerRef as React.Ref<never>}
      {...(isClickable ? { type: 'button' as const, onClick: clickHandler } : {})}
      className="group relative overflow-hidden rounded-2xl bg-white card-elevated transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-dourado/20 border border-bege/30 min-h-[260px] md:min-h-[300px] w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-dourado/50"
    >
      {item.videoSrc ? (
        <>
          <div
            className="absolute inset-0"
            style={{ background: item.imageBg }}
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleVideoError}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              videoFailed ? 'opacity-100 bg-black/20 backdrop-blur-[1px]' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : item.src ? (
        <img
          src={item.src}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: item.imageBg }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 md:p-8 text-center">
        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/25"
          style={{ boxShadow: '0 0 30px rgba(198,161,91,0.15)' }}
        >
          <Icon size={28} className="text-white/90" />
        </div>

        <h3 className="text-white font-display text-xl md:text-2xl font-bold tracking-[0.08em] mb-2 drop-shadow-sm">
          {item.title}
        </h3>

        <p className="text-white/70 text-xs md:text-sm font-light tracking-wide max-w-[160px] md:max-w-[220px] leading-relaxed">
          {item.description}
        </p>

        <div className="w-8 h-0.5 bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 rounded-full mt-4 transition-all duration-500 group-hover:w-12" />
      </div>
    </Tag>
  )
}

export default function IdentityGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [modalUrl, setModalUrl] = useState<string | null>(null)

  const embedUrl = (url: string) => {
    const match = url.match(/instagram\.com\/reel\/([^/?]+)/)
    return match ? `https://www.instagram.com/reel/${match[1]}/embed` : url
  }

  return (
    <>
      {modalUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setModalUrl(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalUrl(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="aspect-[9/16] w-full">
              <iframe
                src={embedUrl(modalUrl)}
                className="w-full h-full border-0"
                allowFullScreen
                title="Instagram Reel"
              />
            </div>
          </div>
        </div>
      )}

    <section id="gallery" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/10 via-offwhite to-bege/10" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Galeria de Identidade</span>
          <h2 className="section-title font-display text-balance">
            Nichos de{' '}
            <span className="gradient-text font-cursive">conteúdo</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Conheça o universo de conteúdo que a Isa Ramos produz.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-5">
          {cards.map((card, i) => (
            <div key={card.title} className="animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardGrid item={card} onClick={card.instagramUrl ? () => setModalUrl(card.instagramUrl!) : undefined} />
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {cards.map((card, i) => (
              <div key={card.title} className="min-w-[220px] w-[65vw] snap-center flex-shrink-0 animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardGrid item={card} onClick={card.instagramUrl ? () => setModalUrl(card.instagramUrl!) : undefined} />
              </div>
            ))}
          </div>

          <div className="md:hidden flex justify-center gap-1.5 mt-4">
            {cards.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-bege/50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
