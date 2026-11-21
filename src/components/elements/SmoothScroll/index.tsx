'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePerfTier } from '../../../lib/perf'

export const SmoothScroll = () => {
  const isLite = usePerfTier() === 'lite'

  useEffect(() => {
    // Lite tier (low-power / weak device / reduced motion): keep native
    // scrolling. It runs on the compositor thread, so it stays smooth even
    // when the main thread is busy — Lenis would make scroll main-thread bound.
    if (isLite) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    gsap.registerPlugin(ScrollTrigger)
    lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis via GSAP ticker — one rAF loop instead of two
    const onTick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [isLite])

  return null
}
