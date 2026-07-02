import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import IdentityGallery from './components/IdentityGallery'
import MeetMe from './components/MeetMe'
import About from './components/About'
import Metrics from './components/Metrics'
import Performance from './components/Performance'
import Audience from './components/Audience'
import WhyHire from './components/WhyHire'
import Partnerships from './components/Partnerships'
import VideoWorks from './components/VideoWorks'
import WhatIDeliver from './components/WhatIDeliver'
import SocialMetrics from './components/SocialMetrics'
import TrustedBy from './components/TrustedBy'
import Feedbacks from './components/Feedbacks'
import Packages from './components/Packages'
import SocialLinks from './components/SocialLinks'
import FinalCTA from './components/FinalCTA'
import Timeline from './components/Timeline'
import CursorFollower from './components/CursorFollower'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useParallax } from './hooks/useParallax'
import { useSecurity } from './hooks/useSecurity'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useScrollReveal()
  useParallax()
  useSecurity()

  useEffect(() => {
    let cancelled = false
    let ready = false

    const finish = () => {
      if (cancelled) return
      setLoadProgress(100)
      setTimeout(() => setShowSplash(false), 400)
    }

    Promise.all([
      document.fonts.ready,
      new Promise<void>((resolve) => {
        if (document.readyState === 'complete') resolve()
        else window.addEventListener('load', () => resolve(), { once: true })
      }),
    ]).then(() => {
      if (cancelled) return
      setLoadProgress(70)
      ready = true
    })

    const minTimer = setTimeout(() => {
      if (ready) finish()
      else {
        const check = setInterval(() => {
          if (ready || cancelled) {
            clearInterval(check)
            if (ready) finish()
          }
        }, 100)
        setTimeout(() => { clearInterval(check); if (!cancelled) finish() }, 1000)
      }
    }, 2000)

    setTimeout(() => { if (!cancelled) finish() }, 4000)

    return () => { cancelled = true; clearTimeout(minTimer) }
  }, [])

  /* Global user interaction tracker (for iOS video autoplay) */
  useEffect(() => {
    const handler = () => {
      document.documentElement.dataset.userInteracted = 'true'
      document.querySelectorAll('video[autoplay]').forEach((el) => {
        const video = el as HTMLVideoElement
        if (video.paused) video.play().catch(() => {})
      })
    }
    document.addEventListener('touchstart', handler, { once: true })
    document.addEventListener('click', handler, { once: true })
    setTimeout(() => {
      document.querySelectorAll('video[autoplay]').forEach((el) => {
        const video = el as HTMLVideoElement
        if (video.paused) video.play().catch(() => {})
      })
    }, 500)
    return () => {
      document.removeEventListener('touchstart', handler)
      document.removeEventListener('click', handler)
    }
  }, [])

  return (
    <div className="min-h-screen bg-offwhite overflow-x-hidden">
      {/* Splash / loading screen */}
      {showSplash && (
        <div className="fixed inset-0 z-[100] bg-cafe flex items-center justify-center">
          <div className="text-center animate-fade-in w-full max-w-xs mx-auto px-6">
            <p className="font-cursive text-6xl md:text-7xl text-dourado mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Isa Ramos
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-dourado to-rosa-metalico mx-auto mb-6 animate-draw-line" style={{ animationDelay: '0.6s' }} />
            <p className="text-bege/60 text-xs tracking-[0.25em] uppercase mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Media Kit
            </p>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-dourado to-rosa-metalico rounded-full transition-all duration-500 ease-out"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Decorative 3D Country Premium Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="parallax-element country-star absolute top-[15%] right-[5%] text-dourado/10" data-speed="0.04">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div className="parallax-element country-star absolute top-[45%] right-[8%] text-dourado/8" data-speed="-0.05" style={{ animationDelay: '1.5s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div className="parallax-element absolute bottom-[30%] right-[10%]" data-speed="0.06">
          <div className="w-32 h-32 rounded-full border border-dourado/10 animate-pulse-soft" style={{ animationDuration: '6s' }} />
        </div>

        <div className="parallax-element absolute top-[30%] left-[10%] right-[10%]" data-speed="-0.02">
          <div className="stitching-line w-full" />
        </div>
      </div>

      <CursorFollower />
      <Header />
      <main className="relative z-10">
        <Hero />
        <IdentityGallery />
        <MeetMe />
        <VideoWorks />
        <div className="section-divider-top" />
        <WhatIDeliver />
        <SocialMetrics />
        <TrustedBy />
        <Feedbacks />
        <About />
        <Timeline />
        <Metrics />
        <Performance />
        <Audience />
        <WhyHire />
        <Partnerships />
        <Packages />
        <SocialLinks />
        <FinalCTA />
      </main>
    </div>
  )
}
