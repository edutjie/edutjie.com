'use client'
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { usePerfTier } from '../../../lib/perf'

type UnicornGlobal = {
  init: (opts: { scale: number; fps: number }) => Promise<unknown>
  destroy: () => void
  isInitialized?: boolean
}

const UNICORN_SRC =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js'

const getUnicorn = () => (window as unknown as { UnicornStudio?: UnicornGlobal }).UnicornStudio

// Global ambient background.
// - Desktop on capable hardware: Unicorn Studio WebGL scene.
// - Mobile, or any device in the `lite` perf tier (low-power mode, battery
// saver, weak GPU…): cheap CSS gradient orbs. The WebGL script is never
// downloaded there, and is torn down if the tier drops mid-session.
export const AuraBackground = () => {
  const tier = usePerfTier()
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const useWebGL = isMobile === false && tier === 'full'

  // Tear down WebGL if we downgrade after it started.
  useEffect(() => {
    if (useWebGL) return
    const us = getUnicorn()
    if (us?.isInitialized) {
      us.destroy()
      us.isInitialized = false
    }
  }, [useWebGL])

  // Before mount, render nothing – avoids SSR/hydration mismatch
  if (isMobile === null) return null

  return (
    <div className="aura-background-component fixed top-0 w-full h-screen -z-10 bg-[#030712]">
      {useWebGL ? (
        <>
          <div data-us-project="qPVvnWEWLLiJgYtSkKyB" className="absolute w-full h-full left-0 top-0 -z-10" />
          <Script
            src={UNICORN_SRC}
            strategy="lazyOnload"
            onReady={() => {
              const us = getUnicorn()
              if (us && !us.isInitialized) {
                us.init({ scale: 0.5, fps: 30 })
                us.isInitialized = true
              }
            }}
          />
        </>
      ) : (isMobile || tier === 'lite') && (
        /* Animated CSS orbs — cheap alternative to WebGL.
           (Desktop while tier is `pending`: plain bg, like before WebGL loads.) */
        <>
          <div className="aura-orb aura-orb-1" />
          <div className="aura-orb aura-orb-2" />
          <div className="aura-orb aura-orb-3" />
        </>
      )}
      {/* Plain tint — avoids mix-blend-mode compositing cost */}
      <div className="absolute inset-0 bg-blue-950/30 pointer-events-none z-0" />
      {/* Fade to page bg at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-0" />
    </div>
  )
}
