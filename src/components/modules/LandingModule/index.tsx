'use client'
import React from 'react'
import Achievements from './achievements'
import Experiences from './experiences'
import Hero from './hero/Hero'
import Projects from './projects'

export const LandingModule: React.FC = () => {
  return (
    <>
      <Hero />
      <Experiences />
      <Projects />
      <Achievements />
    </>
  )
}
