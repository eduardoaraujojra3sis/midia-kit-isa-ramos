import { Play } from 'lucide-react'
import { useLazyVideo } from '../hooks/useLazyVideo'
import { useRef, useState, useCallback, useEffect } from 'react'

interface Video {
  title: string
  category: string
  gradient: string
  videoSrc?: string
  instagramUrl?: string
}

const videos: Video[] = [
  {
    title: 'SHEIN Look 2',
    category: 'PARCEIRIAS',
    gradient: 'linear-gradient(135deg, #7A4E3A 0%, #C6A15B 40%, #B98A78 100%)',
    videoSrc: '/videos/video-shein-2.mp4',
  },
  {
    title: 'Video 3',
    category: 'MODA',
    gradient: 'linear-gradient(135deg, #2A1810 0%, #4A2820 30%, #6B3A2A 70%, #8B4E38 100%)',
    videoSrc: '/videos/video-3.mp4',
  },
  {
    title: 'Vai luaaan',
    category: 'MODA',
    gradient: 'linear-gradient(135deg, #2A1810 0%, #4A2820 30%, #6B3A2A 70%, #8B4E38 100%)',
    videoSrc: '/videos/vai-luaaan.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DZglTR3tsZH/',
  },
  {
    title: 'Video 4',
    category: 'MODA',
    gradient: 'linear-gradient(135deg, #4A2820 0%, #7A4E3A 40%, #D8C3A5 100%)',
    videoSrc: '/videos/video-4.mp4',
  },
  {
    title: 'Vaquejando',
    category: 'COUNTRY',
    gradient: 'linear-gradient(135deg, #2A1810 0%, #4A2820 30%, #7A4E3A 60%, #C6A15B 100%)',
    videoSrc: '/videos/vaquejando.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DXsINsIDKVC/',
  },
  {
    title: 'SHEIN Fit Check',
    category: 'PARCEIRIAS',
    gradient: 'linear-gradient(135deg, #7A4E3A 0%, #C6A15B 40%, #B98A78 100%)',
    videoSrc: '/videos/shein-fit-check.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DXxxMFFtZGj/',
  },
  {
    title: 'Bora pro rodeio do Jacques',
    category: 'RODEIO',
    gradient: 'linear-gradient(135deg, #3A211A 0%, #6B3A2A 40%, #C6A15B 100%)',
    videoSrc: '/videos/rodeio-jacques.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DY8XcGHttHP/',
  },
  {
    title: 'SHEIN Look 3',
    category: 'PARCEIRIAS',
    gradient: 'linear-gradient(135deg, #7A4E3A 0%, #C6A15B 40%, #B98A78 100%)',
    videoSrc: '/videos/Shein 3.mp4',
  },
  {
    title: 'Já viu?',
    category: 'MODA',
    gradient: 'linear-gradient(135deg, #4A2820 0%, #7A4E3A 40%, #D8C3A5 100%)',
    videoSrc: '/videos/ja-viu.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DYqlXghtCul/',
  },
]

function VideoCard({ video }: { video: Video }) {
  const { videoRef, containerRef, videoFailed, retryPlay, handleVideoError } = useLazyVideo(video.videoSrc)

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-preto-suave shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-dourado/15 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ background: video.gradient }}
      />

      {video.videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleVideoError}
        />
      )}

      {video.videoSrc && videoFailed && (
        <button
          type="button"
          onClick={retryPlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-opacity duration-500"
        >
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="absolute bottom-2.5 left-2.5">
        <span className="inline-block px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[9px] font-semibold tracking-[0.12em] border border-white/10 uppercase">
          {video.category}
        </span>
      </div>

      {!videoFailed && (
        <a
          href={video.instagramUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/30 z-10"
        >
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-400 group-hover:scale-110">
            <Play size={20} className="text-cafe ml-0.5" />
          </div>
        </a>
      )}

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
    </div>
  )
}

export default function VideoWorks() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const snapTimer = useRef<ReturnType<typeof setTimeout>>()

  const detectIndex = useCallback(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const containerRect = container.getBoundingClientRect()
    const center = containerRect.left + containerRect.width / 2
    let closestIdx = currentIndex
    let closestDist = Infinity
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const dist = Math.abs(center - cardCenter)
      if (dist < closestDist) {
        closestDist = dist
        closestIdx = i
      }
    })
    setCurrentIndex(closestIdx)
  }, [currentIndex])

  const handleScroll = useCallback(() => {
    clearTimeout(snapTimer.current)
    snapTimer.current = setTimeout(detectIndex, 100)
  }, [detectIndex])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', handleScroll)
      clearTimeout(snapTimer.current)
    }
  }, [handleScroll])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollStart(scrollRef.current.scrollLeft)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    detectIndex()
  }, [detectIndex])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const el = scrollRef.current
    const x = e.pageX - el.offsetLeft
    el.scrollLeft = Math.max(0, Math.min(scrollStart - (x - startX) * 1.5, el.scrollWidth - el.clientWidth))
  }, [isDragging, startX, scrollStart])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollStart(scrollRef.current.scrollLeft)
  }, [])

  const handleTouchEnd = useCallback(() => {
    detectIndex()
  }, [detectIndex])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const x = e.touches[0].pageX - el.offsetLeft
    el.scrollLeft = Math.max(0, Math.min(scrollStart - (x - startX) * 1.5, el.scrollWidth - el.clientWidth))
  }, [startX, scrollStart])

  return (
    <section id="videos" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/20 via-offwhite to-bege/10" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Conteudo em Video</span>
          <h2 className="section-title font-display text-balance">
            Trabalhos em{' '}
            <span className="gradient-text">video</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Videos curtos, autenticos e estrategicos para conectar marcas ao publico certo.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, i) => (
              <div
                key={video.title}
                ref={(el) => { cardRefs.current[i] = el }}
                className="snap-start shrink-0 w-40 md:w-48 animate-stagger"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
