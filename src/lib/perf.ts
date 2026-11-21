'use client'

import { useSyncExternalStore } from 'react'

/**
 * Adaptive performance tier.
 *
 * - `pending`: still measuring; heavy effects (WebGL background) stay off.
 * - `full`:    device keeps up; render every effect.
 * - `lite`:    weak / throttled device (low-power mode, battery saver, old
 *              phone, reduced motion…); drop WebGL bg, smooth scroll and
 *              backdrop blurs. Adds `lite` class on <html> for CSS overrides.
 *
 * Detection = cheap static hints + a short frame-rate probe after load
 * (browsers in low-power / energy-saver mode cap rAF at ~30fps, which the
 * probe catches), plus a light periodic re-check that can only downgrade.
 */
export type PerfTier = 'pending' | 'full' | 'lite'

const STORAGE_KEY = 'perf-tier-lite'
// Median frame interval above this (ms) = device is struggling / throttled.
// 60Hz ≈ 16.7ms, 30fps cap ≈ 33ms.
const SLOW_FRAME_MS = 26

let tier: PerfTier = 'pending'
let started = false
const listeners = new Set<() => void>()

function setTier(next: PerfTier) {
  if (tier === next || tier === 'lite') return // lite is sticky
  tier = next
  if (next === 'lite') {
    document.documentElement.classList.add('lite')
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {}
  }
  listeners.forEach((l) => l())
}

function staticHintsSayLite(): boolean {
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return true
  } catch {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean }
  }
  if (nav.connection?.saveData) return true
  if (nav.deviceMemory !== undefined && nav.deviceMemory <= 4) return true
  if (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency <= 4) return true
  return false
}

// Sample `frames` rAF intervals and resolve with the median (ms).
function sampleFrames(frames: number): Promise<number> {
  return new Promise((resolve) => {
    const deltas: number[] = []
    let last = 0
    const tick = (now: number) => {
      if (last) deltas.push(now - last)
      last = now
      if (deltas.length < frames) requestAnimationFrame(tick)
      else {
        deltas.sort((a, b) => a - b)
        resolve(deltas[Math.floor(deltas.length / 2)])
      }
    }
    requestAnimationFrame(tick)
  })
}

const whenVisible = () =>
  new Promise<void>((resolve) => {
    if (!document.hidden) return resolve()
    const on = () => {
      if (!document.hidden) {
        document.removeEventListener('visibilitychange', on)
        resolve()
      }
    }
    document.addEventListener('visibilitychange', on)
  })

const whenLoaded = () =>
  new Promise<void>((resolve) => {
    if (document.readyState === 'complete') return resolve()
    window.addEventListener('load', () => resolve(), { once: true })
  })

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function watchBattery() {
  const nav = navigator as Navigator & {
    getBattery?: () => Promise<{
      charging: boolean
      level: number
      addEventListener: (t: string, cb: () => void) => void
    }>
  }
  if (!nav.getBattery) return
  try {
    const battery = await nav.getBattery()
    const check = () => {
      if (!battery.charging && battery.level <= 0.2) setTier('lite')
    }
    check()
    battery.addEventListener('levelchange', check)
    battery.addEventListener('chargingchange', check)
  } catch {}
}

async function probe() {
  await whenLoaded()
  await wait(300)
  await whenVisible()
  const median = await sampleFrames(45)
  if (tier === 'lite') return
  setTier(median > SLOW_FRAME_MS ? 'lite' : 'full')

  // Light ongoing watchdog: two consecutive slow samples → downgrade.
  let strikes = 0
  while (tier === 'full') {
    await wait(5000)
    await whenVisible()
    const m = await sampleFrames(30)
    strikes = m > SLOW_FRAME_MS ? strikes + 1 : 0
    if (strikes >= 2) setTier('lite')
  }
}

function start() {
  if (started || typeof window === 'undefined') return
  started = true
  if (staticHintsSayLite()) {
    setTier('lite')
    return
  }
  watchBattery()
  probe()
}

function subscribe(cb: () => void) {
  start()
  listeners.add(cb)
  return () => listeners.delete(cb)
}

export function usePerfTier(): PerfTier {
  return useSyncExternalStore(
    subscribe,
    () => tier,
    () => 'pending' as PerfTier
  )
}
