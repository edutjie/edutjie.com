import { useWindowSize } from '@hooks'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Contacts from './Contacts'

const Hero = () => {
  const { width } = useWindowSize()

  return (
    <div id="hero" className="flex min-h-screen items-center justify-between">
      <div className="flex flex-col gap-8 z-10">
        <div className="text-[64px] leading-none font-bold">
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
        <p className="text-2xl">
          A self-claimed <b>AI</b> and <b>Software Engineer</b>
        </p>
        <Contacts />
      </div>
      <div className="z-10">
        <Image
          src="/assets/images/self-portrait.jpg"
          alt="self-portrait"
          width={width >= 1280 ? 500 : width >= 768 ? 400 : 300}
          height={width >= 1280 ? 625 : width >= 768 ? 500 : 375}
          className="rounded-[75px]"
          // fill
        />
      </div>
    </div>
  )
}

export default Hero
