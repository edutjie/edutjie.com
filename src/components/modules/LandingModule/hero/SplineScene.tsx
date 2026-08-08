'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'
import dynamic from 'next/dynamic'

/**
 * Spline 3D scene for the Hero.
 *
 * The Spline runtime relies on browser-only APIs (WebGL / WASM), so the
 * component is loaded client-side via `next/dynamic` with `ssr: false`.
 *
 * Note: `@splinetool/react-spline/next` (`SplineNext`) is an async Server
 * Component, which can't be rendered inside this Client Component tree, so we
 * use the client `Spline` export instead.
 *
 * Layout: contained box in the Hero's right column (framed by the ios-glass
 * container in Hero.tsx).
 *
 * Watermark: the "Built with Spline" badge is not a DOM element — the runtime
 * draws it into the canvas as a WebGL post-process pass (logoOverlayPass), so
 * CSS can't remove it. The canvas is oversized vertically (145% mobile / 118%
 * desktop) and the bottom edge (where the badge sits) is clipped by the
 * overflow-hidden box.
 */
const SPLINE_SCENE_URL =
  'https://prod.spline.design/iV1ZQHRGD7VQCbyl/scene.splinecode'

// Client-only: prevents any WebGL/WASM access during SSR.
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <SceneFallback />,
})

function SceneFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400/70">
        Loading 3D…
      </span>
    </div>
  )
}

class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Spline scene failed to load:', error, info)
  }

  render() {
    return this.state.hasError ? <SceneFallback /> : this.props.children
  }
}

export const SplineScene = () => {
  return (
    <div
      id="ai-3d-canvas"
      className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#030712]/50 to-[#0f172a]/50 relative z-0"
      style={{ willChange: 'transform' }}
    >
      <SceneErrorBoundary>
        {/* Canvas oversized vertically, bottom clipped by overflow-hidden box:
            crops the baked-in watermark pass at the canvas bottom edge. Mobile
            needs a deeper crop (145%) — the box is short (aspect-video), and
            the watermark's min pixel size occupies a larger fraction of it. */}
        <div className="w-full h-[145%] md:h-[118%]">
          <Spline
            scene={SPLINE_SCENE_URL}
            className="!w-full !h-full"
            onLoad={(app) => app.setZoom(0.90)}
          />
        </div>
      </SceneErrorBoundary>
    </div>
  )
}
