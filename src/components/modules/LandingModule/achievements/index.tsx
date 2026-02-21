'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ACHIEVEMENTS } from '@constants'
import { ProjectModal, SwiperNavButton, ExpandButton } from '@elements'
import { createChunks } from '@utils'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Achievements = () => {
  const [expanded, setExpanded] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null)

  const visibleAchievements = expanded ? ACHIEVEMENTS : ACHIEVEMENTS.slice(0, 4)
  const achievementChunks = createChunks(ACHIEVEMENTS, 4)

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
  }, [expanded])

  return (
    <section
      id="recognitions"
      className="w-full relative z-10 pb-32 overflow-hidden border-t border-white/5 pt-24 bg-gradient-to-b from-transparent to-[#030712] font-sans"
    >
      <div
        className="max-w-7xl mx-auto px-6 mb-16 text-center animate-on-scroll"
        style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-2">
          Recognitions
        </h2>
        <p className="text-slate-400 text-sm">
          Awards, competitions, and key achievements.
        </p>
      </div>

      <div id="recognitions-grid" className="max-w-7xl mx-auto px-6 flex flex-col items-center w-full">

        {/* Mobile & Tablet View: Grid with See More */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 items-start w-full">
          {visibleAchievements.map((achievement, index) => (
            <div
              key={index}
              onClick={() => setSelectedAchievement(achievement)}
              className="grid-item group relative w-full flex flex-col cursor-target project-trigger animate-on-scroll"
              style={{ animation: `animationIn 0.8s ease-out ${0.2 + (index % 4) * 0.1}s both` }}
            >
              <div className="relative w-full h-full p-3 bg-[#0a0a0a]/80 backdrop-blur-md film-card rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-500">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-4 rounded-lg border border-white/5">
                  <img
                    src={`/assets/${achievement.image}`}
                    alt={achievement.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 z-20 pointer-events-none pr-4">
                    <h2 className="font-display text-xl md:text-2xl text-white group-hover:-translate-y-1 transition-transform leading-tight">
                      {achievement.name}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2 pb-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-slate-400 truncate">
                    COMPETITION • {achievement.issuer}
                  </span>
                  <span className="iconify solar--maximize-linear w-5 h-5 text-slate-500 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 10l6-6m0 0h-4m4 0v4m-6 6l-6 6m0 0h4m-4 0v-4" /></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}

          {ACHIEVEMENTS.length > 4 && (
            <div className="w-full flex justify-center mt-8 col-span-full pb-8">
              <ExpandButton expanded={expanded} onClick={() => setExpanded(!expanded)} />
            </div>
          )}
        </div>

        {/* Desktop View: Swiper Carousel 2x2 */}
        <div className="hidden lg:block relative w-full group/carousel animate-on-scroll px-14" style={{ animation: `animationIn 0.8s ease-out 0.2s both` }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            .swiper-custom-bullet-achieve {
              width: 8px;
              height: 8px;
              display: inline-block;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.2);
              margin: 0 6px !important;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .swiper-custom-bullet-achieve:hover {
              background: rgba(255, 255, 255, 0.4);
            }
            .swiper-custom-bullet-achieve.swiper-pagination-bullet-active {
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
              prevEl: '.achieve-swiper-button-prev',
              nextEl: '.achieve-swiper-button-next',
            }}
            pagination={{
              el: '.achieve-swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + ' swiper-custom-bullet-achieve"></span>';
              },
            }}
            className="pt-4"
          >
            {achievementChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={`achieve-chunk-${chunkIndex}`}>
                <div className="grid grid-cols-2 gap-8 w-full h-full">
                  {chunk.map((achievement: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => setSelectedAchievement(achievement)}
                      className="grid-item group relative flex flex-col cursor-target project-trigger"
                    >
                      <div className="relative w-full h-full p-3 bg-[#0a0a0a]/80 backdrop-blur-md film-card rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] transition-all duration-500">
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-4 rounded-lg border border-white/5">
                          <img
                            src={`/assets/${achievement.image}`}
                            alt={achievement.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                          <div className="absolute bottom-6 left-6 z-20 pointer-events-none pr-4">
                            <h2 className="font-display text-xl md:text-2xl text-white group-hover:-translate-y-1 transition-transform leading-tight">
                              {achievement.name}
                            </h2>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-2 pb-1">
                          <span className="font-sans text-[10px] uppercase tracking-widest text-slate-400 truncate">
                            COMPETITION • {achievement.issuer}
                          </span>
                          <span className="iconify solar--maximize-linear w-5 h-5 text-slate-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 10l6-6m0 0h-4m4 0v4m-6 6l-6 6m0 0h4m-4 0v-4" /></svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperNavButton className="achieve-swiper-button-prev" direction="prev" />
          <SwiperNavButton className="achieve-swiper-button-next" direction="next" />

          {/* Custom Pagination Container */}
          <div className="achieve-swiper-pagination w-full flex justify-center items-center mt-8"></div>
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <ProjectModal
          project={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          isAchievement={true}
        />
      )}
    </section>
  )
}

export default Achievements
