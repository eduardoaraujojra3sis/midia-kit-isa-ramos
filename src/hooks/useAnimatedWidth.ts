import { useState, useEffect, useRef } from 'react'

export function useAnimatedWidth(targetWidth: number, options?: { duration?: number }) {
  const { duration = 1200 } = options ?? {}
  const [currentWidth, setCurrentWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = performance.now()

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCurrentWidth(eased * targetWidth)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCurrentWidth(targetWidth)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [targetWidth, duration, hasAnimated])

  return { currentWidth, ref }
}
