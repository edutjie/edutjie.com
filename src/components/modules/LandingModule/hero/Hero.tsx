'use client'
import React, { useEffect, useRef } from 'react'
import { AiCoreCanvas } from './AiCoreCanvas'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full relative flex justify-center">
      {/* Hero-Specific Ambient Background Overlay */}
      <div
        className="aura-background-component absolute top-0 left-0 w-full h-[80vh] min-h-[800px] -z-[5] brightness-110 opacity-70 mix-blend-screen pointer-events-none"
        data-alpha-mask="80"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 70%, transparent)',
        }}
      >
        <div data-us-project="bmaMERjX2VZDtPrh4Zwx" className="absolute w-full h-full left-0 top-0 -z-10"></div>
        {/* Radial vignette just for the hero section */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.8)_50%,rgba(3,7,18,1)_100%)] pointer-events-none z-0"></div>
      </div>

      <section
        id="home"
        className="grid grid-cols-1 md:h-screen md:px-8 md:grid-cols-12 md:gap-6 z-10 w-full max-w-7xl pt-32 pr-4 pb-10 pl-4 items-center mx-auto relative"
        ref={containerRef}
      >
        {/* Left Column: Title & Intro */}
        <div className="md:col-span-7 flex flex-col justify-center gap-6 md:gap-8 order-2 md:order-1 relative z-10">
          <div
            className="flex gap-3 items-center animate-on-scroll"
            style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="inline-flex h-2.5 w-2.5 bg-blue-500 rounded-full relative"></span>
            </span>
            <span className="uppercase text-xs font-mono text-blue-400 tracking-widest">
              AI Engineer &amp; Researcher
            </span>
          </div>

          <div className="animate-on-scroll" style={{ animation: 'animationIn 0.8s ease-out 0.3s both' }}>
            <h1 className="text-5xl md:text-[80px] leading-[1] font-semibold text-transparent bg-clip-text tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 pb-2 font-sans">
              <Typewriter
                options={{
                  strings: ['Eduardus<br>Tjitrahardja', '徐和平'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
            <div className="flex flex-col mt-5 gap-0 w-fit">
              {/* Education timeline connector */}
              <div className="flex items-stretch gap-4">
                {/* Left timeline track */}
                <div className="flex flex-col items-center pt-1 pb-1">
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-blue-400/80 via-blue-500/40 to-transparent rounded-full" />
                </div>
                {/* Cards column */}
                <div className="flex flex-col gap-2">
                  {/* Tsinghua card */}
                  <div className="group flex items-center gap-3 cursor-target relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.25)]">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 to-blue-600 rounded-l-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-blue-400/30 transition-colors duration-300 p-1.5">
                      <img
                        src="/assets/images/universities/tsinghua.png"
                        alt="THU"
                        className="w-full h-full object-cover scale-150"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400/80 leading-none">M.S.</span>
                      <span className="text-white/90 font-medium text-sm leading-tight tracking-tight">Advanced Computing</span>
                      <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider leading-none">Tsinghua · 清华大学</span>
                    </div>
                  </div>

                  {/* UI card */}
                  <div className="group flex items-center gap-3 cursor-target relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.2)]">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-300 to-cyan-600 rounded-l-xl opacity-50 group-hover:opacity-90 transition-opacity" />
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-cyan-400/30 transition-colors duration-300 p-1">
                      <img
                        src="/assets/images/universities/ui.png"
                        alt="UI"
                        className="w-full h-full object-cover scale-125"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 leading-none">B.Sc.</span>
                      <span className="text-white/90 font-medium text-sm leading-tight tracking-tight">Computer Science</span>
                      <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider leading-none">University of Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-sm md:text-base font-light text-slate-400 tracking-wide max-w-lg mt-6 font-sans">
              {/* Architecting neural networks and building scalable AI infrastructure. Passionate about generative models, reinforcement learning, and deploying state-of-the-art research into production. */}
              Researching at the <span className="font-bold">Tsinghua Key Laboratory of Pervasive Computing</span>, focusing on Vision Language Models (VLMs), Multimodal AI, and Human-Computer Interaction (HCI). Awarded <span className="bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent font-bold">3 gold</span> and <span className="bg-gradient-to-tr from-[#9ca3af] via-[#f3f4f6] to-[#4b5563] bg-clip-text text-transparent font-bold">4 silver</span> medals in competitive machine learning, with research contributions published at international venues such as LLM2KG@ESWC and ISRITI.
            </p>
          </div>

          <div
            className="flex gap-6 items-center mt-4 animate-on-scroll"
            style={{ animation: 'animationIn 0.8s ease-out 0.4s both' }}
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 text-sm font-medium text-white rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 hover:brightness-110 transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] overflow-hidden cursor-target"
            >
              <span className="relative z-10 flex items-center gap-2 font-sans">
                View Work
                <span className="iconify solar--arrow-right-linear group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" /></svg>
                </span>
              </span>
            </a>
            <div className="flex gap-4 items-center">
              <a
                href="mailto:edutjitrahardja@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition-colors cursor-target"
              >
                <span className="iconify solar--letter-linear w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12c0-4.714 0-7.071-1.465-8.535C19.072 2 16.714 2 12 2S4.928 2 3.465 3.465C2 4.928 2 7.286 2 12s0 7.071 1.465 8.535C4.928 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12Z" /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 7l7.5 4.5a5 5 0 0 0 5 0L22 7" /></svg>
                </span>
              </a>
              <a
                href="https://github.com/edutjie"
                className="text-slate-400 hover:text-blue-400 transition-colors cursor-target"
              >
                <span className="iconify logos--github-icon w-5 h-5 grayscale hover:grayscale-0 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: AI Bento Grid (3D Canvas) */}
        <div
          className="md:col-span-5 flex justify-center items-center order-1 md:order-2 mt-10 lg:mt-0 relative group animate-on-scroll z-10"
          style={{ animation: 'animationIn 0.8s ease-out 0.4s both' }}
        >
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full scale-90 group-hover:bg-blue-500/30 transition-colors duration-700 pointer-events-none"></div>
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2.5rem] overflow-hidden ios-glass border border-white/10 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            {/* 3D AI Core Canvas */}
            <AiCoreCanvas />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-lg cursor-target hover:bg-black/70 transition-colors z-10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white whitespace-nowrap">
                Bing Chilling...
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero