/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

// The `<spline-viewer>` web component is loaded from the Spline CDN at runtime
// (see SplineScene.tsx), so it isn't part of the DOM/JSX typings. This ambient
// declaration lets it be used in JSX with its `url` attribute.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string
        'loading-anim-type'?: string
      }
    }
  }
}

export {}
