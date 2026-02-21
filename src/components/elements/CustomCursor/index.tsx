'use client'

import React, { useEffect, useRef } from 'react'

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch || !cursorRef.current) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    document.addEventListener('mousemove', onMouseMove)

    let animationFrameId: number
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`
      }
      animationFrameId = requestAnimationFrame(animateCursor)
    }
    animateCursor()

    const updateCursorTargets = () => {
      const targets = document.querySelectorAll('.cursor-target, a, button, .grid-item')
      targets.forEach((t) => {
        t.addEventListener('mouseenter', () => cursorRef.current?.classList.add('hovered'))
        t.addEventListener('mouseleave', () => cursorRef.current?.classList.remove('hovered'))
      })
    }
    updateCursorTargets()

    // Setup mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          updateCursorTargets()
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [])

  return <div ref={cursorRef} id="cursor" className="custom-cursor hidden md:block"></div>
}
