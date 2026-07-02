import { useState, useEffect, useRef } from 'react'

export function useAnimatedNumber(
  target: string,
  options?: { duration?: number; delay?: number }
) {
  const { duration = 2000, delay = 0 } = options ?? {}
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLParagraphElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extract numeric value from formatted string like "260.12K" or "3,2 milhões"
  const parseNumeric = (val: string): { num: number; suffix: string; decimals: number } => {
    const suffix = val.replace(/[\d.,]/g, '')
    // Normalize decimal formats:
    // If string has a comma, assume Brazilian format (comma = decimal)
    // If only dots, assume English format (dot = decimal)
    const numStr = val.replace(/[^0-9.,]/g, '')
    const normalized = numStr.includes(',')
      ? numStr.replace('.', '').replace(',', '.')
      : numStr
    const parts = normalized.split('.')
    const decimals = parts.length > 1 ? parts[1].length : 0
    return { num: parseFloat(normalized) || 0, suffix, decimals }
  }

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const { num, suffix, decimals } = parseNumeric(target)
          if (num === 0) {
            setDisplay(target)
            return
          }

          setTimeout(() => {
            const startTime = performance.now()

            const animate = (now: number) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = eased * num

              setDisplay(current.toFixed(decimals) + suffix)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setDisplay(target)
              }
            }

            requestAnimationFrame(animate)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, delay, hasAnimated])

  return { display, ref }
}
