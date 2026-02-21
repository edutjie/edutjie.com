'use client'

import React, { useState, useEffect } from 'react'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down past a certain threshold
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    
    // Check initial state
    toggleVisibility()

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 group inline-flex rounded-full cursor-target transition-all duration-500 z-50 hover:scale-110 shadow-[0_0_20px_rgba(37,99,235,0.3)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative rounded-full p-[1px] overflow-hidden w-full h-full z-10">
        {/* Spinning glowing light */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,rgba(96,165,250,1)_95%,transparent_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Actual button surface */}
        <span className="relative flex items-center justify-center p-3 text-white rounded-full bg-blue-600/20 hover:bg-blue-600 backdrop-blur-md border border-blue-500/30 transition-all duration-300 h-full w-full">
          <span className="iconify group-hover:-translate-y-1 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 15l-7-6l-7 6"/>
            </svg>
          </span>
        </span>
      </div>
    </button>
  )
}
