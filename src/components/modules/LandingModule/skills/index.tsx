'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Skill {
  name: string
  logo: string
  bg?: string
}

// Using Simple Icons CDN for reliable logo rendering
const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}`
const DEV = (slug: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`

const CATEGORIES = [
  {
    id: 'languages',
    label: 'Programming Languages',
    skills: [
      { name: 'Python', logo: SI('python') },
      { name: 'Java', logo: SI('openjdk'), bg: '#BF4646' },
      { name: 'Go', logo: SI('go') },
      { name: 'HTML', logo: SI('html5') },
      { name: 'CSS', logo: SI('css3') },
      { name: 'JavaScript', logo: SI('javascript') },
      { name: 'TypeScript', logo: SI('typescript') },
      { name: 'C', logo: DEV('c') },
      { name: 'C++', logo: SI('cplusplus') },
      { name: 'SQL', logo: SI('mysql') },
      { name: 'SPARQL', logo: SI('apache') },
    ] as Skill[]
  },
  {
    id: 'frameworks',
    label: 'App/Web Frameworks',
    skills: [
      { name: 'ReactJS', logo: SI('react') },
      { name: 'Next.js', logo: SI('nextdotjs'), bg: '#BED4CB' },
      { name: 'Node.js', logo: SI('nodedotjs') },
      { name: 'Gin / Fiber', logo: SI('go') },
      { name: 'Spring Boot', logo: SI('springboot') },
      { name: 'Tailwind CSS', logo: SI('tailwindcss') },
      { name: 'PostgreSQL', logo: SI('postgresql') },
      { name: 'Redis', logo: SI('redis') },
    ] as Skill[]
  },
  {
    id: 'ml',
    label: 'ML/AI Libraries',
    skills: [
      { name: 'Scikit-Learn', logo: SI('scikitlearn') },
      { name: 'Pandas', logo: SI('pandas'), bg: '#B7BDF7' },
      { name: 'NumPy', logo: SI('numpy'), bg: '#7AB2B2' },
      { name: 'Matplotlib', logo: SI('plotly') },
      { name: 'PyTorch', logo: SI('pytorch') },
      { name: 'TensorFlow', logo: SI('tensorflow') },
      { name: 'Hugging Face', logo: SI('huggingface') },
      { name: 'LangChain', logo: SI('langchain'), bg: '#BED4CB' },
      { name: 'LangGraph', logo: SI('langgraph'), bg: '#BED4CB' },
      { name: 'Weaviate', logo: SI('weaviate') },
      { name: 'Milvus', logo: SI('milvus') },
    ] as Skill[]
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: SI('git') },
      { name: 'Docker', logo: SI('docker') },
      { name: 'Figma', logo: SI('figma') },
      { name: 'Adobe Illustrator', logo: SI('adobeillustrator') },
      { name: 'Adobe Photoshop', logo: SI('adobephotoshop') },
      { name: 'Blender', logo: SI('blender') },
      { name: 'ZBrush', logo: SI('zbrush') },
    ] as Skill[]
  }
]

// Orbit icons: most relevant to AI/ML researcher profile
const ORBIT_SKILLS = [
  { name: 'Python', logo: SI('python'), bg: undefined as string | undefined, size: 44, orbit: 'outer', angle: 270 },
  { name: 'PyTorch', logo: SI('pytorch'), bg: undefined as string | undefined, size: 40, orbit: 'outer', angle: 330 },
  { name: 'TensorFlow', logo: SI('tensorflow'), bg: undefined as string | undefined, size: 40, orbit: 'outer', angle: 30 },
  { name: 'Milvus', logo: SI('milvus'), bg: undefined as string | undefined, size: 40, orbit: 'outer', angle: 90 },
  { name: 'Next.js', logo: SI('nextdotjs'), bg: '#BED4CB', size: 38, orbit: 'outer', angle: 150 },
  { name: 'Docker', logo: SI('docker'), bg: undefined as string | undefined, size: 40, orbit: 'outer', angle: 210 },
  { name: 'Hugging Face', logo: SI('huggingface'), bg: undefined as string | undefined, size: 36, orbit: 'mid', angle: 300 },
  { name: 'TypeScript', logo: SI('typescript'), bg: undefined as string | undefined, size: 36, orbit: 'mid', angle: 60 },
  { name: 'LangChain', logo: SI('langchain'), bg: '#BED4CB', size: 34, orbit: 'mid', angle: 180 },
  { name: 'PostgreSQL', logo: SI('postgresql'), bg: undefined as string | undefined, size: 34, orbit: 'mid', angle: 0 },
]

function getOrbitXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = (angle - 90) * (Math.PI / 180)
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  }
}

// Hook: fires once when element enters viewport
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// Hook: drives continuous orbit rotation via rAF
function useOrbitAngle(speed: number, enabled: boolean) {
  const [angle, setAngle] = useState(0)
  const rafRef = useRef<number>(0)
  const lastRef = useRef<number>(0)
  useEffect(() => {
    if (!enabled) return
    const tick = (now: number) => {
      if (lastRef.current) {
        const delta = now - lastRef.current
        setAngle(a => (a + (delta / 1000) * speed) % 360)
      }
      lastRef.current = now
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [enabled, speed])
  return angle
}

interface OrbitIconProps {
  item: typeof ORBIT_SKILLS[0]
  containerSize: number
  orbitAngle: number
  hasEntered: boolean
  entranceDelay: number
}

const OrbitIcon = ({ item, containerSize, orbitAngle, hasEntered, entranceDelay }: OrbitIconProps) => {
  const [imgErr, setImgErr] = React.useState(false)
  const [entranceDone, setEntranceDone] = React.useState(false)

  const radii: Record<string, number> = {
    outer: containerSize * 0.44,
    mid: containerSize * 0.28,
  }
  const r = radii[item.orbit] ?? containerSize * 0.44
  const cx = containerSize / 2
  const cy = containerSize / 2

  // Position on the orbit ring, offset by current orbit angle
  const totalAngle = item.angle + orbitAngle
  const { x, y } = getOrbitXY(totalAngle, r, cx, cy)

  useEffect(() => {
    if (hasEntered) {
      const t = setTimeout(() => setEntranceDone(true), entranceDelay + 600)
      return () => clearTimeout(t)
    }
  }, [hasEntered, entranceDelay])

  const style: React.CSSProperties = {
    width: item.size,
    height: item.size,
    left: x - item.size / 2,
    top: y - item.size / 2,
    // Entrance: scale from 0 at center, then move to position
    transform: hasEntered ? 'scale(1)' : 'scale(0)',
    opacity: hasEntered ? 1 : 0,
    transition: entranceDone
      ? 'none'
      : `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${entranceDelay}ms, opacity 0.4s ease ${entranceDelay}ms`,
  }

  return (
    <div
      className="absolute flex items-center justify-center rounded-2xl bg-[#0f1423] border border-white/10 hover:border-blue-400/40 hover:scale-110 cursor-target shadow-[0_4px_20px_rgba(0,0,0,0.4)] z-10 overflow-hidden"
      style={style}
      title={item.name}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent rounded-2xl pointer-events-none"></div>
      {!imgErr ? (
        <div
          className="rounded-full flex items-center justify-center relative z-10"
          style={{
            width: Math.round(item.size * 0.65),
            height: Math.round(item.size * 0.65),
            backgroundColor: item.bg ?? 'transparent',
            padding: item.bg ? 3 : 0,
          }}
        >
          <Image
            src={item.logo}
            alt={item.name}
            width={Math.round(item.size * 0.55)}
            height={Math.round(item.size * 0.55)}
            className="object-contain w-full h-full"
            onError={() => setImgErr(true)}
            unoptimized
          />
        </div>
      ) : (
        <span className="text-[10px] font-bold text-blue-300 relative z-10">{item.name[0]}</span>
      )}
    </div>
  )
}

interface SkillChipProps {
  skill: Skill
  index: number
  visible: boolean
}

const SkillChip = ({ skill, index, visible }: SkillChipProps) => {
  const [imgError, setImgError] = React.useState(false)

  return (
    <div
      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.07] group cursor-target hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-5px_rgba(59,130,246,0.2)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 0.22s ease ${index * 30}ms, transform 0.22s ease ${index * 30}ms`,
      }}
    >
      <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center shrink-0 border border-white/[0.06] group-hover:border-blue-500/30 transition-colors overflow-hidden p-1">
        {!imgError ? (
          <div
            className="w-full h-full rounded-full flex items-center justify-center p-0.5"
            style={{ backgroundColor: skill.bg ?? 'transparent' }}
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              width={20}
              height={20}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
              unoptimized
            />
          </div>
        ) : (
          <span className="text-[11px] font-bold text-blue-300">{skill.name[0]}</span>
        )}
      </div>
      <span className="text-xs text-slate-300 font-medium tracking-tight leading-tight">{skill.name}</span>
    </div>
  )
}

const TechnicalSkill = () => {
  const containerSize = 400

  // Tab state: activeTab drives the sidebar highlight; displayedTab drives the content
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id)
  const [displayedTab, setDisplayedTab] = useState(CATEGORIES[0].id)
  const [chipsVisible, setChipsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [timerKey, setTimerKey] = useState(0)

  // Animated content height
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined)
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight)
    }
  }, [displayedTab])

  // Panel entrance animation
  const panelRef = useRef<HTMLDivElement>(null)
  const [panelVisible, setPanelVisible] = useState(false)
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setPanelVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Orbit entrance + continuous rotation
  const { ref: orbitRef, inView: orbitInView } = useInView(0.2)
  // outer: 12 deg/s (30s/rev), mid: 18 deg/s (20s/rev)
  const outerAngle = useOrbitAngle(12, orbitInView)
  const midAngle = useOrbitAngle(-18, orbitInView)  // opposite direction for visual interest

  const handleTabChange = (id: string) => {
    if (id === activeTab) return
    setActiveTab(id)
    setTimerKey(k => k + 1)
    setChipsVisible(false)
    setTimeout(() => {
      setDisplayedTab(id)
      setChipsVisible(true)
    }, 160)
  }

  // Auto-rotate tabs every 5s, pause on hover
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const currentIdx = CATEGORIES.findIndex(c => c.id === prev)
        const nextIdx = (currentIdx + 1) % CATEGORIES.length
        const nextId = CATEGORIES[nextIdx].id
        setTimerKey(k => k + 1)
        setChipsVisible(false)
        setTimeout(() => {
          setDisplayedTab(nextId)
          setChipsVisible(true)
        }, 160)
        return nextId
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const activeCategory = CATEGORIES.find(c => c.id === displayedTab) ?? CATEGORIES[0]
  const outerSkills = ORBIT_SKILLS.filter(s => s.orbit === 'outer')
  const midSkills = ORBIT_SKILLS.filter(s => s.orbit === 'mid')

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-8 py-20 z-10 font-sans">

      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16 animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}>
        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-blue-200/80 mb-4">
          My Technical Skills
        </h2>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-1 opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Side: Interactive Tabs */}
        <div
          ref={panelRef}
          className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
          style={{
            opacity: panelVisible ? 1 : 0,
            transform: panelVisible ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col sm:flex-row h-full w-full bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/[0.05]">

            {/* Sidebar */}
            <div className="w-full sm:w-[42%] flex flex-col border-b sm:border-b-0 sm:border-r border-white/10 bg-white/[0.02]">
              {CATEGORIES.map((cat, catIdx) => {
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`relative flex items-center gap-3 px-5 py-5 text-left cursor-target
                      ${isActive ? 'bg-white/[0.06] text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'}`}
                    style={{
                      opacity: panelVisible ? 1 : 0,
                      transform: panelVisible ? 'translateX(0)' : 'translateX(-16px)',
                      transition: `opacity 0.4s ease ${100 + catIdx * 60}ms, transform 0.4s ease ${100 + catIdx * 60}ms, background-color 0.3s ease, color 0.3s ease`,
                    }}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] overflow-hidden rounded-r-full">
                        <div
                          key={timerKey}
                          className="w-full bg-gradient-to-b from-blue-400 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] rounded-r-full"
                          style={{
                            height: isPaused ? undefined : '0%',
                            animation: isPaused ? 'none' : 'tabProgress 5s linear forwards',
                          }}
                        />
                      </div>
                    )}
                    <span className="text-sm font-medium leading-tight">{cat.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden" style={{ transition: 'height 0.35s ease', height: contentHeight || undefined }}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.07)_0%,transparent_60%)] pointer-events-none"></div>
              <div ref={contentRef} className="p-5 md:p-6">
                <div className="grid grid-cols-2 gap-2.5 relative z-10">
                  {activeCategory.skills.map((skill, idx) => (
                    <SkillChip
                      key={`${displayedTab}-${skill.name}`}
                      skill={skill}
                      index={idx}
                      visible={panelVisible && chipsVisible}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Orbital Design */}
        <div
          ref={orbitRef}
          className="relative flex justify-center items-center w-full"
        >
          <div
            className="relative"
            style={{ width: containerSize, height: containerSize, maxWidth: '100%' }}
          >
            {/* Orbit rings */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
              style={{ width: containerSize * 0.88, height: containerSize * 0.88 }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
              style={{ width: containerSize * 0.56, height: containerSize * 0.56 }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
              style={{ width: containerSize * 0.28, height: containerSize * 0.28 }}
            ></div>

            {/* Crosshair lines */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.04] -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.04] -translate-x-1/2"></div>

            {/* Outer orbit icons */}
            {outerSkills.map((item, idx) => (
              <OrbitIcon
                key={item.name}
                item={item}
                containerSize={containerSize}
                orbitAngle={outerAngle}
                hasEntered={orbitInView}
                entranceDelay={idx * 70}
              />
            ))}

            {/* Mid orbit icons */}
            {midSkills.map((item, idx) => (
              <OrbitIcon
                key={item.name}
                item={item}
                containerSize={containerSize}
                orbitAngle={midAngle}
                hasEntered={orbitInView}
                entranceDelay={outerSkills.length * 70 + idx * 70}
              />
            ))}

            {/* Center Node */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.25)] z-20"
              style={{ width: 56, height: 56 }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_12px_rgba(96,165,250,1)]"></div>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TechnicalSkill
