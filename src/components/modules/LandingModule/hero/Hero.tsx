import { useWindowSize } from '@hooks'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Contacts from './Contacts'
import { EducationCard } from './EducationCard'

const Hero = () => {
  const { width } = useWindowSize()

  return (
    <div
      id="hero"
      className="flex pt-40 md:pt-0 md:min-h-screen items-center justify-center md:justify-between gap-8 text-center md:text-left"
    >
      <div className="flex flex-col gap-4 lg:gap-8 z-10 md:max-w-[50%]">
        <div className="text-5xl md:text-6xl lg:text-[64px] leading-none font-bold">
          Hi, I’m{' '}
          <span style={{ animation: 'pulse 5s ease infinite alternate' }}>
            <Typewriter
              options={{
                strings: ['Eduardus', 'Tjitrahardja'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="text-xl md:text-2xl">
          a passionate <i className="font-bold">AI</i> and{' '}
          <i className="font-bold">Software Engineer.</i>
        </p>
        <EducationCard
          imgSrc="/assets/images/universities/tsinghua.png"
          altText="Tsinghua University"
          degree="Master of Advanced Computing"
          university="Tsinghua University (清华大学)"
          duration="2025-2027"
          universityUrl="https://ac.cs.tsinghua.edu.cn/"
          location="Beijing, China"
        />
        <EducationCard
          imgSrc="/assets/images/universities/ui.png"
          altText="University of Indonesia"
          degree="Bachelor of Computer Science"
          university="University of Indonesia"
          duration="2021-2025"
          location="Depok, Indonesia"
          universityUrl="https://cs.ui.ac.id/"
        />
        <Contacts />
      </div>
      <div className="z-10 hidden lg:max-h-[625px] max-h-[375px] overflow-hidden rounded-[75px] lg:flex lg:items-center">
        <Image
          src="/assets/images/self-portrait3.jpg"
          alt="self-portrait"
          width={width >= 1280 ? 500 : width > 768 ? 400 : 300}
          height={width >= 1280 ? 625 : width > 768 ? 500 : 375}
        />
      </div>
    </div>
  )
}

export default Hero
