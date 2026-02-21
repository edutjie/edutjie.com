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
          // @ts-ignore
          window.UnicornStudio.init({
            scale: 0.6, // render at 60% resolution — reduces GPU fill-rate significantly
            fps: 30,    // cap at 30fps for a background element (was 60)
          })
          // @ts-ignore
          window.UnicornStudio.isInitialized = true
        }
      }}
    />
  )
}
