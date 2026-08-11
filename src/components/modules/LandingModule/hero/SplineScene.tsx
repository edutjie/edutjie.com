'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Spline 3D scene for the Hero, rendered with the official `<spline-viewer>`
 * web component loaded from the Spline CDN.
 *
 * Why not `@splinetool/react-spline`? That package imports the pre-built
 * `@splinetool/runtime` bundle, and Next.js's webpack re-bundles it into its
 * own chunk. That re-bundling reorders the runtime's internal class
 * initializers and, in production builds only, throws
 * `TypeError: Super constructor null of anonymous class is not a constructor`
 * during module evaluation — so the scene never mounted and the loading
 * fallback spun forever. Loading the viewer from the CDN keeps the runtime out
 * of webpack entirely.
 *
 * Loading state: the viewer dispatches a `load-complete` event once the scene
 * has rendered (verified against the viewer's source); we swap the fallback
 * out when it fires.
 *
 * Watermark: the "Built with Spline" badge is rendered at the bottom of the
 * viewer's container. The viewer is oversized vertically (145% mobile / 118%
 * desktop) and the bottom edge (where the badge sits) is clipped by the
 * overflow-hidden box.
 */
const SPLINE_SCENE_URL =
  'https://prod.spline.design/iV1ZQHRGD7VQCbyl/scene.splinecode'
const SPLINE_VIEWER_SRC =
  'https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js'

function SceneFallback() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/70">
        Loading 3D…
      </span>
    </div>
  )
}

export const SplineScene = () => {
  const viewerRef = useRef<HTMLElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Inject the viewer web component from the CDN (once). It self-registers
    // as `<spline-viewer>` and upgrades the element rendered below.
    if (
      typeof customElements !== 'undefined' &&
      !customElements.get('spline-viewer') &&
      !document.querySelector('script[data-spline-viewer]')
    ) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = SPLINE_VIEWER_SRC
      script.dataset.splineViewer = 'true'
      document.head.appendChild(script)
    }

    // Custom elements upgrade in place, so a listener attached here (before
    // the element upgrades) still receives the `load-complete` event.
    const el = viewerRef.current
    if (!el) return
    const handleLoad = () => setLoaded(true)
    el.addEventListener('load-complete', handleLoad)
    return () => el.removeEventListener('load-complete', handleLoad)
  }, [])

  return (
    <div
      id="ai-3d-canvas"
      className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#030712]/50 to-[#0f172a]/50 relative z-0"
      style={{ willChange: 'transform' }}
    >
      {!loaded && <SceneFallback />}

      {/* Viewer oversized vertically, bottom clipped by the overflow-hidden
          box: crops the "Built with Spline" badge at the container's bottom
          edge. Mobile needs a deeper crop (145%) — the box is short. */}
      <div className="w-full h-[145%] md:h-[118%]">
        <spline-viewer
          ref={viewerRef}
          url={SPLINE_SCENE_URL}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
