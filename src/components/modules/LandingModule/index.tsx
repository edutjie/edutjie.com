'use client'
import React from 'react'
// import { BackgroundBlur } from './background'
import Achievements from './achievements'
import Experiences from './experiences'
import Hero from './hero/Hero'
import Projects from './projects'

export const LandingModule: React.FC = () => {
  // TODO: Write module's logic

  return (
    <>
      <div>
        <Hero />
        <Experiences />
        <Projects />
        <Achievements />
      </div>
      {/* <BackgroundBlur /> */}
    </>
  )
}
