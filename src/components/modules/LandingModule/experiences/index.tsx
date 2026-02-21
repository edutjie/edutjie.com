'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPERIENCES } from 'src/constants/experience'
import { TabPills, SkillTag } from '@elements'

const EXPERIENCE_TABS = [
  { label: 'Professional', value: 'Work' },
  { label: 'Volunteer / Org', value: 'Org' },
]

const Experiences = () => {
  const [activeTab, setActiveTab] = useState<'Work' | 'Org'>('Work')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Wait a tick for DOM update after tab switch
    setTimeout(() => {
      // Timeline Scroll Animation for Experience
      const lines = gsap.utils.toArray('.scroll-glow-line') as HTMLElement[]
      lines.forEach((line) => {
        // Reset height before reapplying
        gsap.set(line, { height: 0 })
        gsap.to(line, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: line.parentElement,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        })
      })

      // Re-initialize intersection observers for animate-on-scroll
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

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [activeTab])

  const experiences = EXPERIENCES[activeTab]

  return (
    <section id="experience" className="w-full max-w-5xl z-10 pt-32 px-6 mx-auto" ref={containerRef}>
      <div
        className="mb-12 text-center animate-on-scroll"
        style={{ animation: 'animationIn 0.8s ease-out 0.1s both' }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
          Experience
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 font-sans">
          Tracing the path of deploying research into real-world applications and giving back to the community.
        </p>

        {/* Experience Tabs */}
        <div className="flex justify-center">
          <TabPills
            tabs={EXPERIENCE_TABS}
            activeTab={activeTab}
            onTabChange={(value) => setActiveTab(value as 'Work' | 'Org')}
          />
        </div>
      </div>

      {/* Experience Content */}
      <div className="exp-content relative ml-4 md:ml-12 pl-8 md:pl-12 space-y-12 pb-12 block">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 block"></div>
        <div className="scroll-glow-line absolute left-[-1.5px] top-0 w-[4px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)] h-0 rounded-full z-10 block"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative cursor-target group/item animate-on-scroll"
            style={{ animation: `animationIn 0.8s ease-out ${0.2 + index * 0.1}s both` }}
          >
            <div className="absolute -left-8 md:-left-12 top-8 w-4 h-4 rounded-full bg-slate-900 border-[3px] border-white/20 group-hover/item:border-blue-400 group-hover/item:bg-blue-500 group-hover/item:scale-[1.3] transition-all duration-500 z-20 group-hover/item:shadow-[0_0_20px_rgba(59,130,246,1)] -translate-x-1/2 -translate-y-1/2 block"></div>
            <div className="ios-glass p-5 md:p-8 rounded-3xl border border-white/10 transition-all duration-500 group-hover/item:-translate-y-2 group-hover/item:bg-slate-800/40 group-hover/item:border-blue-500/50 group-hover/item:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Loop over roles within the experience */}
              {exp.roles.map((role, rIndex) => (
                <div key={rIndex} className="mb-6 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 relative z-10">
                    <div className="flex items-center gap-3">
                      {exp.logo && (
                        <div className="relative w-10 h-10 shrink-0">
                          <Image
                            src={`/assets/${exp.logo}`}
                            alt={exp.name}
                            fill
                            className="rounded-full object-cover bg-white object-center"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-medium text-white group-hover/item:text-blue-50 transition-colors font-sans">
                          {role.name}
                        </h3>
                        <p className="text-blue-400 text-sm font-medium font-sans">{exp.name}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full w-fit group-hover/item:text-blue-300 group-hover/item:bg-blue-500/10 transition-colors whitespace-nowrap">
                      {role.date}
                    </span>
                  </div>
                  <ul className="text-sm text-slate-400 leading-relaxed mb-4 relative z-10 list-disc list-inside font-sans">
                    {role.description?.map((desc, dIndex) => (
                      <li key={dIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-wrap gap-2 relative z-10">
                {exp.skills?.map((skill, sIndex) => (
                  <SkillTag key={sIndex} name={skill.name} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences
