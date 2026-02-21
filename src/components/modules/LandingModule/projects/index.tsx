'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from 'src/constants/projects'
import { ProjectModal, SwiperNavButton, ExpandButton, TabPills } from '@elements'
import { createChunks } from '@utils'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PROJECT_TABS = [
  { label: 'All', value: 'All' },
  { label: 'Research Publication', value: 'Research Publication' },
  { label: 'Project', value: 'Project' },
]

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Research Publication' | 'Project'>('All')
  const [expanded, setExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === 'Research Publication') return project.type === 'Research Publication'
    if (activeTab === 'Project') return project.type === 'Project'
    return project.type === 'Research Publication' || project.type === 'Project'
  })

  const projectChunks = createChunks(filteredProjects, 4)
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
        <TabPills
          tabs={PROJECT_TABS}
          activeTab={activeTab}
          onTabChange={(value) => {
            setActiveTab(value as any)
            setExpanded(false)
          }}
        />
      </div>

      {/* Projects Content */}
      <div className="proj-content block w-full max-w-7xl mx-auto px-6">

        {/* Mobile & Tablet View: Grid with See More */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 items-start w-full">
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
              <ExpandButton expanded={expanded} onClick={() => setExpanded(!expanded)} />
            </div>
          )}
        </div>

        {/* Desktop View: Swiper Carousel 2x2 */}
        <div className="hidden lg:block relative w-full group/carousel animate-on-scroll px-14" style={{ animation: `animationIn 0.8s ease-out 0.2s both` }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            .swiper-custom-bullet {
              width: 8px;
              height: 8px;
              display: inline-block;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.2);
              margin: 0 6px !important;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .swiper-custom-bullet:hover {
              background: rgba(255, 255, 255, 0.4);
            }
            .swiper-custom-bullet.swiper-pagination-bullet-active {
              background: #3b82f6;
              width: 24px;
              border-radius: 4px;
            }
          `}} />
          <Swiper
            modules={[Grid, Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.proj-swiper-button-prev',
              nextEl: '.proj-swiper-button-next',
            }}
            pagination={{
              el: '.proj-swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + ' swiper-custom-bullet"></span>';
              },
            }}
            className="pt-4"
          >
            {projectChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={`chunk-${chunkIndex}`}>
                <div className="grid grid-cols-2 gap-8 w-full h-full">
                  {chunk.map((project: any, index: number) => (
                    <div
                      key={project.name + index}
                      onClick={() => setSelectedProject(project)}
                      className="grid-item group relative flex flex-col cursor-target project-trigger"
                    >
                      <div className="relative w-full h-full p-4 bg-[#0a0a0a]/80 backdrop-blur-md film-card rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-500">
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-5 rounded-lg border border-white/5">
                          <div className="absolute inset-0 bg-blue-900/20 z-10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
                          <img
                            src={`/assets/${project.image}`}
                            alt={project.name}
                            className="w-full h-full object-cover grayscale-[70%] contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                          />
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
                              {project.skills?.slice(0, 2).map((skill: any, sIdx: number) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-mono whitespace-nowrap"
                                >
                                  {skill.name}
                                </span>
                              ))}
                              {project.skills && project.skills.length > 2 && (
                                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-mono">
                                  +{project.skills.length - 2}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperNavButton className="proj-swiper-button-prev" direction="prev" />
          <SwiperNavButton className="proj-swiper-button-next" direction="next" />

          {/* Custom Pagination Container */}
          <div className="proj-swiper-pagination w-full flex justify-center items-center mt-8"></div>
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
