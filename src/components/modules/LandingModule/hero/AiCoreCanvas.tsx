'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const AiCoreCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // --- 1. Torus Knot AI Core ---
    const torusGeometry = new THREE.TorusKnotGeometry(1.4, 0.35, 128, 32)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    })
    const torusMesh = new THREE.Mesh(torusGeometry, torusMat)
    scene.add(torusMesh)

    // --- 2. Geometric Logo AI Core ---
    const logoGroup = new THREE.Group()
    scene.add(logoGroup)

    // Lighting for the logo
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)
    const keyLight = new THREE.DirectionalLight(0xbfdbfe, 3.5)
    keyLight.position.set(3, 4, 5)
    scene.add(keyLight)
    const fillLight = new THREE.DirectionalLight(0x60a5fa, 2.0)
    fillLight.position.set(-4, -2, 3)
    scene.add(fillLight)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6)
    rimLight.position.set(0, 0, -6)
    scene.add(rimLight)

    const depth = 0.35
    const rad = 1
    const segs = 32
    const gap = 0.05

    const geoTL = new THREE.BoxGeometry(rad, rad, depth)
    geoTL.translate(-rad / 2, rad / 2, 0)

    const geoTR = new THREE.CylinderGeometry(rad, rad, depth, segs, 1, false, 0, Math.PI / 2)
    geoTR.rotateX(-Math.PI / 2)

    const geoBL = new THREE.CylinderGeometry(rad, rad, depth, segs, 1, false, Math.PI, Math.PI / 2)
    geoBL.rotateX(-Math.PI / 2)

    const geoBR = new THREE.CylinderGeometry(rad, rad, depth, segs, 1, false, Math.PI / 2, Math.PI / 2)
    geoBR.rotateX(-Math.PI / 2)

    function createLogoPiece(geo: THREE.BufferGeometry, px: number, py: number) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0,
        roughness: 0.3,
        metalness: 0.4,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(geo, mat)

      const edgeMat = new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        wireframe: true,
        transparent: true,
        opacity: 0,
      })
      const edgeMesh = new THREE.Mesh(geo, edgeMat)

      const group = new THREE.Group()
      group.add(mesh)
      group.add(edgeMesh)
      group.position.set(px, py, 0)
      logoGroup.add(group)

      return { solidMat: mat, edgeMat }
    }

    const tl = createLogoPiece(geoTL, -gap, gap)
    const tr = createLogoPiece(geoTR, gap, gap)
    const bl = createLogoPiece(geoBL, -gap, -gap)
    const br = createLogoPiece(geoBR, gap, -gap)

    const logoPieces = [tl, tr, bl, br]

    logoGroup.scale.setScalar(0.01)

    // --- 3. Neural Particle field ---
    const particlesGeom = new THREE.BufferGeometry()
    const particlesCount = 800
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      const radius = 3 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i * 3 + 2] = radius * Math.cos(phi)
    }

    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMat = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const particleMesh = new THREE.Points(particlesGeom, particlesMat)
    scene.add(particleMesh)

    camera.position.z = 4.5

    // --- 4. Interactive & State Logic ---
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.001
      mouseY = (e.clientY - windowHalfY) * 0.001
    }

    document.addEventListener('mousemove', onMouseMove)

    // Start as torus, switch to logo after 1s, then toggle every 5s
    let isLogoState = false
    const initialTimeout = setTimeout(() => {
      isLogoState = true
      const toggleInterval = setInterval(() => {
        isLogoState = !isLogoState
      }, 5000)
      cleanupToggle = () => clearInterval(toggleInterval)
    }, 1000)
    let cleanupToggle = () => {}


    const clock = new THREE.Clock()
    let animationFrameId: number

    // --- 5. Animation Loop ---
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      const baseTorusScale = 1 + Math.sin(elapsedTime * 1.5) * 0.03
      const baseLogoScale = 1.2 + Math.sin(elapsedTime * 2) * 0.03

      const targetTorusOp = isLogoState ? 0 : 0.2
      const targetLogoSolidOp = isLogoState ? 0.55 : 0
      const targetLogoEdgeOp = isLogoState ? 0.45 : 0
      const targetTorusScale = isLogoState ? 0.01 : baseTorusScale
      const targetLogoScale = isLogoState ? baseLogoScale : 0.01

      torusMat.opacity += (targetTorusOp - torusMat.opacity) * 0.05

      for (const piece of logoPieces) {
        piece.solidMat.opacity += (targetLogoSolidOp - piece.solidMat.opacity) * 0.05
        piece.edgeMat.opacity += (targetLogoEdgeOp - piece.edgeMat.opacity) * 0.05
      }

      torusMesh.scale.x += (targetTorusScale - torusMesh.scale.x) * 0.05
      torusMesh.scale.y = torusMesh.scale.x
      torusMesh.scale.z = torusMesh.scale.x

      logoGroup.scale.x += (targetLogoScale - logoGroup.scale.x) * 0.05
      logoGroup.scale.y = logoGroup.scale.x
      logoGroup.scale.z = logoGroup.scale.x

      torusMesh.rotation.y += 0.004
      torusMesh.rotation.x += 0.002

      logoGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.25
      logoGroup.rotation.x = Math.cos(elapsedTime * 0.4) * 0.15
      logoGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.1

      particleMesh.rotation.y -= 0.001
      particleMesh.rotation.z -= 0.0005

      targetX = mouseX * 0.5
      targetY = mouseY * 0.5
      scene.rotation.x += 0.05 * (targetY - scene.rotation.x)
      scene.rotation.y += 0.05 * (targetX - scene.rotation.y)

      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => {
      if (container) {
        windowHalfX = window.innerWidth / 2
        windowHalfY = window.innerHeight / 2
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      clearTimeout(initialTimeout)
      cleanupToggle()
      cancelAnimationFrame(animationFrameId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="ai-3d-canvas"
      className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#030712]/50 to-[#0f172a]/50 relative z-0"
    />
  )
}
