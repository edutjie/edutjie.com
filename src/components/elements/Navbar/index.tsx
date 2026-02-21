'use client'
import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Navbar: React.FC = () => {
  const [time, setTime] = useState('--:--')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuOverlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    gsap.set('#nav-pill', { y: 0, opacity: 1 })

    mm.add('(min-width: 768px)', () => {
      const scrollConfig = { trigger: 'body', start: 'top top', end: '150px top', scrub: true }
      gsap.to('#nav-pill', {
        scrollTrigger: scrollConfig,
        width: '600px',
        height: '56px',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: '9999px',
        marginTop: '16px',
        ease: 'power2.inOut',
      })
      gsap.to(['#nav-menu-btn', '#nav-logo', '#nav-right-group'], {
        scrollTrigger: scrollConfig,
        scale: 0.9,
        ease: 'power2.inOut',
      })
    })

    mm.add('(max-width: 767px)', () => {
      gsap.to('#nav-pill', {
        scrollTrigger: { trigger: 'body', start: 'top top', end: '100px top', scrub: true },
        width: '92%',
        height: '56px',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        marginTop: '12px',
        ease: 'power2.out',
      })
    })

    return () => mm.revert()
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const beijingTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Shanghai',
        hour: 'numeric',
        minute: '2-digit'
      })
      setTime(beijingTime)
    }
    const interval = setInterval(updateTime, 1000)
    updateTime()
    return () => clearInterval(interval)
  }, [])

  const toggleMenu = () => {
    if (!menuOverlayRef.current) return

    if (!isMenuOpen) {
      setIsMenuOpen(true)
      menuOverlayRef.current.style.display = 'flex'
      gsap.to(menuOverlayRef.current, { opacity: 1, duration: 0.5 })
      gsap.fromTo(
        '.menu-item',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.to('.menu-info', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5,
      })
    } else {
      setIsMenuOpen(false)
      gsap.to(menuOverlayRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (menuOverlayRef.current) menuOverlayRef.current.style.display = 'none'
        },
      })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 pointer-events-none flex justify-center pt-8 px-4 md:px-6">
        <div
          id="nav-pill"
          className="pointer-events-auto w-full h-20 rounded-full flex items-center justify-between px-4 md:px-8 relative overflow-hidden group origin-top will-change-transform z-50 bg-slate-900/10 backdrop-blur-md border border-white/5 animate-on-scroll animate"
          style={{ animation: 'animationIn 0.8s ease-out 0s both' }}
        >
          {/* Left: Menu Trigger */}
          <div className="flex items-center z-10 w-auto md:w-[160px] h-full">
            <button
              id="nav-menu-btn"
              onClick={toggleMenu}
              className="cursor-target text-white hover:text-white/80 text-[16px] font-sans font-medium transition-colors duration-300 origin-left whitespace-nowrap flex items-center gap-2 group-hover:text-blue-400"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors ${isMenuOpen ? 'bg-blue-400' : 'bg-white group-hover:bg-blue-400'
                  }`}
                id="menu-dot"
              ></div>
              <span id="menu-text" className="translate-y-[1px]">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-target h-full flex items-center justify-center">
            <h1
              className="antialiased origin-center whitespace-nowrap text-xl text-white tracking-tight pt-1 font-sans"
              id="nav-logo"
            >
              edu<span className="font-bold">tjie</span>
            </h1>
          </div>

          {/* Right: Meta Info & Icons */}
          <div
            className="flex items-center justify-end gap-6 z-10 text-white w-auto md:w-[160px] h-full origin-right"
            id="nav-right-group"
          >
            <div
              id="nav-meta"
              className="hidden md:flex items-center gap-2 text-[14px] font-mono text-blue-300/80 uppercase tracking-widest whitespace-nowrap"
            >
              <span>北京</span>
              <span id="nav-time" className="tabular-nums">
                {time}
              </span>
            </div>
            <div id="nav-icons" className="flex items-center gap-4 h-full">
              <a
                href="#projects"
                className="cursor-target hover:text-blue-400 transition-colors duration-300 flex items-center justify-center p-1 rounded-full"
              >
                <span className="iconify solar--folder-with-files-linear w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11h5m-5 4h5M2.5 10.5V17a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V10.5M2.5 10.5v-3a3 3 0 0 1 3-3h3.586a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 0 13.743 7H18.5a3 3 0 0 1 3 3v.5M2.5 10.5h19" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU OVERLAY */}
      <div
        ref={menuOverlayRef}
        id="menu-overlay"
        className="fixed inset-0 z-[45] bg-[#030712]/95 backdrop-blur-xl hidden flex-col justify-center items-center overflow-hidden opacity-0"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-blue-600 blur-[150px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row w-full h-full pt-32 pb-12 relative z-10">
          <nav className="flex-1 flex flex-col justify-center items-start gap-4 md:gap-6">
            {['Home', 'Experience', 'Projects', 'Achievements'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="menu-item cursor-target group block overflow-hidden"
                onClick={toggleMenu}
              >
                <div
                  className="menu-link-hover font-sans font-semibold text-[10vw] md:text-[5vw] leading-[1] tracking-tight text-white uppercase"
                  data-text={item}
                >
                  <span>{item}</span>
                </div>
              </a>
            ))}
          </nav>

          <div className="md:w-1/3 flex flex-col justify-end items-start md:items-end gap-12 mt-12 md:mt-0">
            <div className="flex flex-col gap-4 text-left md:text-right menu-info opacity-0 translate-y-4">
              <span className="text-slate-500 text-xs uppercase tracking-widest font-mono font-medium">
                Links
              </span>
              <div className="flex flex-col gap-2 text-xl font-display text-white">
                <a
                  href="#"
                  className="cursor-target hover:text-blue-500 transition-colors w-max md:ml-auto"
                >
                  Scholar
                </a>
                <a
                  href="#"
                  className="cursor-target hover:text-blue-500 transition-colors w-max md:ml-auto"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="cursor-target hover:text-blue-500 transition-colors w-max md:ml-auto"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
