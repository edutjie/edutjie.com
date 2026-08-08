// @splinetool/react-spline ships its type declarations only via the package.json
// `exports` field (./dist/Spline.d.ts), with no top-level `types` entry. The
// project's `moduleResolution: "node"` (from @tsconfig/next) does not consult
// `exports`, so TypeScript cannot resolve the module's types by name. This
// ambient declaration bridges that gap by re-exporting the package's real types
// from their on-disk path (which classic node resolution *can* reach).
declare module '@splinetool/react-spline' {
  export { default } from '@splinetool/react-spline/dist/Spline'
  export type {
    SplineProps,
    SPEObject,
    SplineEvent,
    SplineEventName,
  } from '@splinetool/react-spline/dist/Spline'
}
