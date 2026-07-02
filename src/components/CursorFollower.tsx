import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })
  const mouseMovingRef = useRef(false)
  const frameIdRef = useRef<number | null>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      if (!mouseMovingRef.current) {
        mouseMovingRef.current = true
        startAnimation()
      }
    }

    const onMouseEnterInteractive = () => {
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = 'rgba(198,161,91,0.5)'
      ring.style.backgroundColor = 'rgba(198,161,91,0.06)'
    }

    const onMouseLeaveInteractive = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(198,161,91,0.25)'
      ring.style.backgroundColor = 'transparent'
    }

    const startAnimation = () => {
      const animate = () => {
        ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12
        ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12
        ring.style.transform = `translate(${ringPosRef.current.x - 16}px, ${ringPosRef.current.y - 16}px)`

        const dx = Math.abs(posRef.current.x - ringPosRef.current.x)
        const dy = Math.abs(posRef.current.y - ringPosRef.current.y)
        if (dx < 0.5 && dy < 0.5) {
          ringPosRef.current.x = posRef.current.x
          ringPosRef.current.y = posRef.current.y
          mouseMovingRef.current = false
          frameIdRef.current = null
          return
        }
        frameIdRef.current = requestAnimationFrame(animate)
      }
      frameIdRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const interactive = document.querySelectorAll('a, button, [role="button"], .card, .gallery-card')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-dourado pointer-events-none z-[9999] hidden md:block"
        style={{
          transform: 'translate(-100px, -100px)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
          boxShadow: '0 0 8px rgba(198,161,91,0.5)',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-dourado/25 pointer-events-none z-[9999] hidden md:block"
        style={{
          transform: 'translate(-100px, -100px)',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
