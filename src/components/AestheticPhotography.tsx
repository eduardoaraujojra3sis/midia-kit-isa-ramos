import { useState } from 'react'
import Lightbox from './Lightbox'

interface Photo {
  title: string
  span: string
  gradient: string
  src?: string
}

const photos: Photo[] = [
  {
    title: 'Looks country',
    span: 'col-span-2 row-span-2',
    gradient: 'linear-gradient(135deg, #2A1810 0%, #4A2820 25%, #6B3A2A 50%, #8B4E38 75%, #A8624A 100%)',
    src: '/fotos/country.jpg',
  },
  {
    title: 'Botas',
    span: 'col-span-1 row-span-1',
    gradient: 'linear-gradient(135deg, #3A211A 0%, #7A4E3A 50%, #C6A15B 100%)',
  },
  {
    title: 'Chapéus',
    span: 'col-span-1 row-span-1',
    gradient: 'linear-gradient(135deg, #7A4E3A 0%, #D8C3A5 50%, #C6A15B 100%)',
  },
  {
    title: 'Maquiagem',
    span: 'col-span-1 row-span-2',
    gradient: 'linear-gradient(135deg, #B98A78 0%, #D8C3A5 40%, #C6A15B 100%)',
  },
  {
    title: 'Produtos de beleza',
    span: 'col-span-1 row-span-1',
    gradient: 'linear-gradient(135deg, #D8C3A5 0%, #C6A15B 50%, #B98A78 100%)',
  },
  {
    title: 'Eventos',
    span: 'col-span-2 row-span-1',
    gradient: 'linear-gradient(135deg, #4A2820 0%, #6B3A2A 30%, #C6A15B 70%, #B98A78 100%)',
    src: '/fotos/jeromao.jpg',
  },
  {
    title: 'Bastidores',
    span: 'col-span-1 row-span-1',
    gradient: 'linear-gradient(135deg, #2A1810 0%, #4A2820 50%, #6B3A2A 100%)',
  },
  {
    title: 'Vida no campo',
    span: 'col-span-1 row-span-1',
    gradient: 'linear-gradient(135deg, #4A2820 0%, #7A4E3A 40%, #D8C3A5 100%)',
    src: '/fotos/country.jpg',
  },
  {
    title: 'Detalhes de acessórios',
    span: 'col-span-2 row-span-1',
    gradient: 'linear-gradient(135deg, #C6A15B 0%, #B98A78 40%, #7A4E3A 80%, #3A211A 100%)',
  },
]

export default function AestheticPhotography() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevLightbox = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + photos.length) % photos.length : null)
  const nextLightbox = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % photos.length : null)

  return (
    <section id="photography" className="relative py-20 md:py-32 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bege/10 via-offwhite to-bege/20" />

      <div className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Galeria Visual</span>
          <h2 className="section-title font-display text-balance">
            Fotografia{' '}
            <span className="gradient-text">estética</span>
          </h2>
          <p className="section-subtitle mt-4 md:mt-6">
            Conteúdos visuais pensados para valorizar produtos, marcas e experiências.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <button
              key={photo.title}
              onClick={() => openLightbox(i)}
              className={`${photo.span} animate-stagger gallery-card group relative overflow-hidden rounded-2xl bg-bege/20 border border-bege/30 transition-all duration-500 hover:shadow-xl hover:shadow-dourado/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-dourado/50 ${i === 0 || i === 5 || i === 8 ? 'floating-image' : ''} ${i === 5 ? 'floating-image-delayed' : ''} ${i === 8 ? 'floating-image-slow' : ''} ${i === 2 || i === 4 ? 'gallery-card-rotated-left' : ''} ${i === 3 || i === 7 ? 'gallery-card-rotated-right' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div
                  className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                  style={{ background: photo.gradient }}
                />
              )}
              <div
                className="absolute inset-0 opacity-[0.04] transition-all duration-500 group-hover:opacity-[0.02]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-left">
                <p className="text-white font-display text-sm md:text-base font-semibold drop-shadow-md leading-tight">
                  {photo.title}
                </p>
                <div className="w-6 h-0.5 bg-gradient-to-r from-dourado/80 to-rosa-metalico/60 rounded-full mt-1.5 transition-all duration-500 group-hover:w-10" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  )
}
