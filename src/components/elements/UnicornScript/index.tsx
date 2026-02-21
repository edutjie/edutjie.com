'use client'
import Script from 'next/script'
import React from 'react'

export const UnicornScript = () => {
  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js"
      strategy="lazyOnload"
      onLoad={() => {
        // @ts-ignore
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          const isMobile = window.innerWidth < 768
          // @ts-ignore
          window.UnicornStudio.init({
            // Mobile gets ¼ the fill-rate and half the fps of desktop
            scale: isMobile ? 0.3 : 0.6,
            fps: isMobile ? 15 : 30,
          })
          // @ts-ignore
          window.UnicornStudio.isInitialized = true
        }
      }}
    />
  )
}
