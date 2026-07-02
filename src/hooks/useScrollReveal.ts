import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const selectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-zoom', '.reveal-blur']
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => observer.observe(el))
    })

    const fallbackTimer = setTimeout(() => {
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (!el.classList.contains('revealed')) {
            const rect = el.getBoundingClientRect()
            const isVisible = rect.top < window.innerHeight - 40 && rect.bottom > 0
            if (isVisible) {
              el.classList.add('revealed')
              observer.unobserve(el)
            }
          }
        })
      })
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])
}
