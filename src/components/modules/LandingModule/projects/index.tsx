'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from 'src/constants/projects'
import { ProjectModal } from '@elements'

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Research Publication' | 'Project'>('All')
  const [expanded, setExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === 'Research Publication') return project.type === 'Research Publication'
    if (activeTab === 'Project') return project.type === 'Project'
    return project.type === 'Research Publication' || project.type === 'Project'
  })

  const visibleProjects = expanded ? filteredProjects : filteredProjects.slice(0, 4)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    setTimeout(() => {
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

      ScrollTrigger.refresh()
    }, 100)
  }, [activeTab, expanded])

  return (
    <section id="projects" className="w-full relative z-10 pt-32 pb-16 overflow-hidden font-sans">
      <div
        className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left md:flex md:items-end justify-between animate-on-scroll"
        style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-2">
            Selected Work
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mb-8 md:mb-0">
            Applied research, engineering projects, and hobby projects.
          </p>
        </div>
      </div>

      {/* Projects Tabs */}
      <div
        className="max-w-7xl mx-auto px-6 mb-12 flex justify-center md:justify-start animate-on-scroll"
        style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}
      >
        <div className="flex flex-wrap gap-2 p-1 bg-slate-900/40 border border-white/10 rounded-full w-fit backdrop-blur-md">
          {['All', 'Research Publication', 'Project'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any)
                setExpanded(false)
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-target ${activeTab === tab
                ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:brightness-110'
                : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {tab === 'Research Publication' ? 'Research Publication' : tab === 'Project' ? 'Project' : 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Content */}
      <div className="proj-content block w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
          {visibleProjects.map((project, index) => (
            <div
              key={project.name + index}
              onClick={() => setSelectedProject(project)}
              className="grid-item group relative w-full flex flex-col cursor-target project-trigger animate-on-scroll"
              style={{ animation: `animationIn 0.8s ease-out ${0.2 + (index % 4) * 0.1}s both` }}
            >
              <div className="relative w-full h-full p-4 bg-[#0a0a0a]/80 backdrop-blur-md film-card rounded-xl border border-white/10">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-5 rounded-lg border border-white/5">
                  <div className="absolute inset-0 bg-blue-900/20 z-10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
                  <img
                    src={`/assets/${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale-[70%] contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* <div className="absolute bottom-4 left-6 z-20 pointer-events-none drop-shadow-2xl pr-4">
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white group-hover:scale-105 transition-transform duration-500 origin-bottom-left leading-tight">
                      {project.name}
                    </h2>
                  </div> */}
                </div>
                <div className="flex justify-between items-end px-2 pb-1 gap-4">
                  <div className="flex flex-col gap-2 min-w-0 flex-1">
                    <span className="font-display text-sm tracking-[0.2em] text-slate-300 truncate block">
                      {project.name}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-blue-400">
                      {project.type}
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {project.skills?.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-mono whitespace-nowrap"
                        >
                          {skill.name}
                        </span>
                      ))}
                      {project.skills && project.skills.length > 3 && (
                        <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-mono">
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-blue-400 transition-colors flex-shrink-0">
                    <span className="font-display text-xl whitespace-nowrap">{project.date}</span>
                    <span className="iconify solar--arrow-right-up-linear w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7L7 17m10-10v8m0-8H9" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length > 4 && (
            <div className="w-full flex justify-center mt-12 col-span-full pb-8">
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-6 py-3 text-sm font-medium bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white rounded-full shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:brightness-110 transition-all duration-300 cursor-target flex items-center gap-2"
              >
                <span>{expanded ? 'See Less' : 'See More'}</span>
                <span
                  className={`iconify transition-transform duration-300 ${expanded ? 'solar--alt-arrow-up-linear' : 'solar--alt-arrow-down-linear'
                    }`}
                >
                  {expanded ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 15l-7-6l-7 6" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 9l-7 6l-7-6" /></svg>
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
