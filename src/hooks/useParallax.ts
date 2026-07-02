import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    let frameId: number | null = null
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        ticking = true
        frameId = requestAnimationFrame(() => {
          ticking = false
          const scrollY = lastScrollY

          document.querySelectorAll('.parallax-element').forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-speed') || '0.05')
            ;(el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
          })

          document.querySelectorAll('[data-parallax-speed]').forEach((el) => {
            const rect = el.getBoundingClientRect()
            const center = rect.top + rect.height / 2
            const viewCenter = window.innerHeight / 2
            const offset = (center - viewCenter) * 0.02
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.04')
            ;(el as HTMLElement).style.transform = `translateY(${offset * speed}px)`
          })
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])
}
