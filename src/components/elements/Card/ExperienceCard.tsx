import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const ExperienceCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-[#0B3866]/25 px-[50px] py-[25px] rounded-[30px] flex flex-col gap-[25px] backdrop-blur-md shadow-xl w-full max-w-[600px]">
      <div className="grid grid-cols-4">
        <div className="relative w-24 h-24 self-center">
          <Image
            src="/assets/images/self-portrait.jpg"
            alt="Segmentation"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
        <div className="col-span-3 self-center space-y-1">
          <h2>PIC of Software Engineering</h2>
          <h3>Depok Kita</h3>
          <p>Jun 2022 - Present</p>
          <p>Depok, West Java, Indonesia</p>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <p>-</p>
            <p>
              Developed www.depokkita.com using NextJs, Typescript, TailwindCSS,
              Strapi, and Chakra UI.
            </p>
          </div>
          <div className="flex gap-1">
            <p>-</p>
            <p>Responsible for leading the team to develop a website.</p>
          </div>
        </div>
      )}
      {isOpen && (
        <p className="font-bold">
          Project Related:{' '}
          <span className="text-secondary underline">
            <a href="" className="font-r-flex font-normal">
              Computer Vision - Indonesia AI
            </a>
          </span>
        </p>
      )}
      <div className="w-full">
        <ChevronDownIcon
          className={`w-8 h-8 mx-auto cursor-pointer transition-all ${
            isOpen && 'rotate-180'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  )
}

export default ExperienceCard
