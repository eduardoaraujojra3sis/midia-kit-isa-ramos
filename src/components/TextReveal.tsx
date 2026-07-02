import { useRef, useEffect, useState } from 'react'

interface TextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  className?: string
  highlightWord?: string
  highlightClass?: string
  delay?: number
}

export default function TextReveal({
  text,
  as: Tag = 'h2',
  className = '',
  highlightWord,
  highlightClass = 'gradient-text',
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      <span ref={ref} className="inline">
        {words.map((word, i) => {
          const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase())
          return (
            <span
              key={i}
              className={`inline-block transition-all duration-700 ease-out ${
                revealed
                  ? 'opacity-100 translate-y-0 blur-0'
                  : 'opacity-0 translate-y-6 blur-[4px]'
              } ${isHighlight ? highlightClass : ''}`}
              style={{
                transitionDelay: `${i * 60 + (delay || 0)}ms`,
              }}
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
