'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ProjectModalProps {
  project: any
  onClose: () => void
  isAchievement?: boolean
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isAchievement }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modalRef.current) return

    // Animate In
    gsap.set(modalRef.current, { y: '100%', display: 'block' })
    gsap.to(modalRef.current, { y: '0%', duration: 0.8, ease: 'power3.inOut' })

    gsap.fromTo(
      ['#modal-title', '#modal-subtitle', '#modal-desc', '#modal-list', '#modal-specs'],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.4, stagger: 0.1, ease: 'power2.out' }
    )

    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [project])

  const handleClose = () => {
    if (!modalRef.current) {
      onClose()
      return
    }

    gsap.to(modalRef.current, {
      y: '100%',
      duration: 0.6,
      ease: 'power3.inOut',
      onComplete: () => {
        onClose()
      },
    })
  }

  return (
    <div
      ref={modalRef}
      id="project-modal"
      className="fixed inset-0 z-[100] w-full h-full bg-[#030712] will-change-transform hidden"
    >
      {/* Header Controls */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between z-[110] pointer-events-none">
        <span className="text-blue-500/50 font-display text-lg rotate-2 pointer-events-auto mt-4">
          {isAchievement ? 'Recognition' : 'Case Study'}
        </span>
        <button
          onClick={handleClose}
          id="close-modal-btn"
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-target pointer-events-auto bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 mt-4 mr-4"
        >
          <span className="uppercase tracking-widest text-[10px] font-sans font-semibold">Close</span>
          <span className="iconify solar--close-circle-linear w-5 h-5 group-hover:rotate-90 transition-transform duration-300 text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.5 9.5l-5 5m0-5l5 5m7.5-2.5c0 4.142 0 6.213-1.285 7.502C19.429 20.789 17.358 20.789 13.216 20.789h-2.431c-4.142 0-6.214 0-7.503-1.287C2 18.213 2 16.142 2 12s0-6.213 1.282-7.502C4.57 3.211 6.643 3.211 10.785 3.211h2.43c4.143 0 6.215 0 7.503 1.287C22 5.787 22 7.858 22 12Z"/></svg>
          </span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        id="modal-scroll"
        data-lenis-prevent
        className="absolute inset-0 w-full h-full overflow-y-auto overscroll-contain z-[105] bg-[#030712] custom-scrollbar"
      >
        {/* Hero Image */}
        <div className="w-full h-[60vh] md:h-[80vh] relative">
          <img id="modal-img" src={`/assets/${project.image}`} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12">
            <div className="overflow-visible pr-4">
              <h1
                id="modal-title"
                className="font-display text-4xl md:text-5xl lg:text-7xl text-white transform -rotate-1 origin-bottom-left drop-shadow-2xl leading-tight py-2"
              >
                {project.name}
              </h1>
            </div>
            <div className="mt-6 flex gap-3 items-center">
              <span
                id="modal-subtitle"
                className="px-4 py-1.5 border border-blue-500/30 bg-blue-500/10 rounded-full text-[10px] font-sans uppercase tracking-widest text-blue-300 backdrop-blur-sm font-medium"
              >
                {isAchievement ? `Award • ${project.issuer}` : project.type}
              </span>
            </div>
          </div>
        </div>

        {/* Detail Grid */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-16 text-white">
          <div className="md:col-span-8 flex flex-col gap-8">
            <h3 className="font-display text-2xl text-blue-400 -rotate-1">
              {isAchievement ? 'The Story' : 'About'}
            </h3>
            <p id="modal-desc" className="font-sans text-base md:text-lg leading-relaxed text-slate-300 font-light">
              {project.description}
            </p>
            <div className="w-full h-[1px] bg-white/10 mt-8"></div>
            {project.links && project.links.length > 0 && (
              <>
                <h4 className="text-sm uppercase tracking-widest font-mono text-slate-500 mt-4">
                  {isAchievement ? 'Related Links' : 'Key Outcomes'}
                </h4>
                <ul id="modal-list" className="space-y-4 font-sans text-slate-300 list-disc list-inside">
                  {project.links.map((link: any, index: number) => (
                    <li key={index}>
                      <a href={link.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 sticky top-24 h-fit border border-white/5 bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="font-display text-xl text-white rotate-1 mb-2">
              {isAchievement ? 'Details' : 'Stack & Specs'}
            </h3>
            <div id="modal-specs" className="flex flex-col gap-4 font-mono text-xs text-slate-400">
              {project.date && (
                <div className="flex justify-between border-b border-white/10 pb-2 gap-4">
                  <span className="text-slate-500">Date</span>
                  <span className="text-white text-right">{project.date}</span>
                </div>
              )}
              {isAchievement && project.medal && (
                <div className="flex justify-between border-b border-white/10 pb-2 gap-4">
                  <span className="text-slate-500">Medal</span>
                  <span className="text-white text-right capitalize">{project.medal}</span>
                </div>
              )}
              {project.skills && project.skills.length > 0 && (
                <div className="flex justify-between border-b border-white/10 pb-2 gap-4">
                  <span className="text-slate-500">Skills</span>
                  <span className="text-white text-right">
                    {project.skills.map((s: any) => s.name).join(', ')}
                  </span>
                </div>
              )}
            </div>

            {project.links && project.links[0] && (
              <a
                href={project.links[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 hover:brightness-110 text-white rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-target text-sm font-medium"
              >
                <span className="iconify solar--code-square-linear w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 8l-4 4l4 4m4-8l4 4l-4 4m-4.5-9.5c0-4.142 0-6.213-1.285-7.502C19.429 2.211 17.358 2.211 13.216 2.211h-2.431c-4.142 0-6.214 0-7.503 1.287C2 4.787 2 6.858 2 11s0 6.213 1.282 7.502C4.57 19.789 6.643 19.789 10.785 19.789h2.43c4.143 0 6.215 0 7.503-1.287C22 17.213 22 15.142 22 11Z"/></svg>
                </span>
                {isAchievement ? 'View Proof' : 'View Link'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
