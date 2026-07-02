import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react'

interface Tilt3DProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  maxTilt?: number
  scale?: number
  perspective?: number
  speed?: number
}

export default function Tilt3D({
  children,
  className = '',
  style,
  maxTilt = 6,
  scale = 1.02,
  perspective = 900,
  speed = 400,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    let frameId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const tiltX = ((y - centerY) / centerY) * maxTilt
        const tiltY = ((centerX - x) / centerX) * maxTilt
        el!.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`
      })
    }

    const handleMouseLeave = () => {
      if (frameId) cancelAnimationFrame(frameId)
      el.style.transition = `transform ${speed}ms ease-out`
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      setTimeout(() => { el.style.transition = '' }, speed)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [maxTilt, scale, perspective, speed])

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
    >
      {children}
    </div>
  )
}
