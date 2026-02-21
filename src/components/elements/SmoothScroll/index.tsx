'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

export const SmoothScroll = () => {
  useEffect(() => {
    // Respect OS-level reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      gestureDirection: 'vertical',
    } as any)

    // Drive Lenis via GSAP ticker — one rAF loop instead of two
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  return null
}
