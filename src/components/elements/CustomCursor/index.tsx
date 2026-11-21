'use client'

import React, { useEffect, useRef } from 'react'

// Pressable things → glowing, morphing blob (`.clickable`)
const CLICKABLE_SELECTOR =
  'a, button, [role="button"], [role="tab"], input, select, textarea, label, summary, .cursor-pointer, .cursor-grab'
// Cards, etc. — and any text under the pointer — → white difference blob (`.hovered`)
const HOVER_SELECTOR = '.cursor-target, .grid-item'

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    // Same condition the CSS uses to hide the native cursor (globals.css), so
    // a touchscreen laptop with a mouse never ends up with no cursor at all.
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hasMouse || !cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let rafId = 0

    // rAF only runs while the cursor is catching up; idles when mouse is still.
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      if (Math.abs(mouseX - cursorX) > 0.1 || Math.abs(mouseY - cursorY) > 0.1) {
        rafId = requestAnimationFrame(animate)
      } else {
        rafId = 0
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!rafId) rafId = requestAnimationFrame(animate)
    }

    // True when (x, y) is over actual glyphs of one of el's own text nodes
    // (not just the element's padding / empty space).
    const range = document.createRange()
    const isOverText = (el: Element, x: number, y: number) => {
      for (const node of Array.from(el.childNodes)) {
        if (node.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) continue
        range.selectNodeContents(node)
        for (const r of Array.from(range.getClientRects())) {
          if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true
        }
      }
      return false
    }

    // State from what's under the pointer, at most once per frame.
    // Priority: clickable > card / text > none. Uses hit-testing rather than
    // per-element listeners, so it covers current and future elements.
    let state: 'none' | 'hovered' | 'clickable' = 'none'
    let checkQueued = false
    const updateState = () => {
      checkQueued = false
      const el = document.elementFromPoint(mouseX, mouseY)
      const next = !el
        ? 'none'
        : el.closest(CLICKABLE_SELECTOR)
          ? 'clickable'
          : el.closest(HOVER_SELECTOR) || isOverText(el, mouseX, mouseY)
            ? 'hovered'
            : 'none'
      if (next !== state) {
        state = next
        cursor.classList.toggle('clickable', next === 'clickable')
        cursor.classList.toggle('hovered', next === 'hovered')
      }
    }
    const queueCheck = () => {
      if (checkQueued) return
      checkQueued = true
      requestAnimationFrame(updateState)
    }

    const onMouseDown = () => cursor.classList.add('pressed')
    const onMouseUp = () => cursor.classList.remove('pressed')

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mousemove', queueCheck, { passive: true })
    // Content moves under a still pointer while scrolling
    window.addEventListener('scroll', queueCheck, { passive: true })
    document.addEventListener('mousedown', onMouseDown, { passive: true })
    document.addEventListener('mouseup', onMouseUp, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousemove', queueCheck)
      window.removeEventListener('scroll', queueCheck)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={cursorRef} id="cursor" className="custom-cursor hidden md:block">
      <div className="cursor-dot" />
    </div>
  )
}
