import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

interface LightboxProps {
  images: { title: string; gradient: string; src?: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 lightbox-enter"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/60 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Image */}
        {image.src ? (
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        ) : (
          <div
            className="w-full aspect-[4/3] flex items-center justify-center"
            style={{ background: image.gradient }}
          >
            <p className="text-white/60 font-display text-lg">{image.title}</p>
          </div>
        )}

        {/* Title bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
          <p className="text-white font-display text-sm">
            {image.title}
            <span className="text-white/50 ml-2">
              {currentIndex + 1} / {images.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
