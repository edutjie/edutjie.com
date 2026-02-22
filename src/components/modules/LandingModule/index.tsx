'use client'
import React from 'react'
import Achievements from './achievements'
import Experiences from './experiences'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import TechnicalSkill from './skills'
import Projects from './projects'

export const LandingModule: React.FC = () => {
  return (
    <>
      <Hero />
      <Featured />
      <TechnicalSkill />
      <Experiences />
      <Projects />
      <Achievements />
    </>
  )
}
