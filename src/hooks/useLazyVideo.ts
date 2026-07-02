import { useRef, useState, useEffect, useCallback } from 'react'

export function useLazyVideo(videoSrc?: string) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const tryPlay = useCallback((el: HTMLVideoElement) => {
    const p = el.play()
    if (p) {
      p.then(() => setVideoFailed(false)).catch(() => setVideoFailed(true))
    }
  }, [])

  const retryPlay = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    setVideoFailed(false)
    el.load()
    const p = el.play()
    if (p) p.catch(() => setVideoFailed(true))
  }, [])

  const handleVideoError = useCallback(() => {
    setVideoFailed(true)
  }, [])

  /* Lazy load when near viewport */
  useEffect(() => {
    if (shouldLoad || !videoSrc) return
    const el = containerRef.current
    if (!el) return
    const margin = window.innerWidth < 768 ? '2000px 0px' : '1000px 0px'
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          obs.unobserve(el)
        }
      },
      { rootMargin: margin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [videoSrc, shouldLoad])

  /* Inject sources and load when shouldLoad triggers */
  useEffect(() => {
    if (!shouldLoad || !videoSrc) return
    const el = videoRef.current
    if (!el) return

    const playOnReady = () => {
      tryPlay(el)
      el.removeEventListener('loadeddata', playOnReady)
    }
    el.addEventListener('loadeddata', playOnReady)

    const src = document.createElement('source')
    src.src = videoSrc
    src.type = 'video/mp4'
    el.appendChild(src)
    el.load()

    return () => el.removeEventListener('loadeddata', playOnReady)
  }, [shouldLoad, videoSrc, tryPlay])

  /* Play/pause based on visibility */
  useEffect(() => {
    const el = videoRef.current
    if (!el || !videoSrc) return
    setVideoFailed(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay(el)
        else el.pause()
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [videoSrc, tryPlay, shouldLoad])

  /* iOS user interaction handler */
  useEffect(() => {
    const el = videoRef.current
    if (!el || !videoSrc) return
    if (document.documentElement.dataset.userInteracted === 'true') {
      tryPlay(el)
      return
    }
    const handler = () => {
      if (videoRef.current) tryPlay(videoRef.current)
    }
    document.addEventListener('touchstart', handler, { once: true })
    document.addEventListener('click', handler, { once: true })
    return () => {
      document.removeEventListener('touchstart', handler)
      document.removeEventListener('click', handler)
    }
  }, [videoSrc, tryPlay])

  return { videoRef, containerRef, videoFailed, tryPlay, retryPlay, handleVideoError }
}
