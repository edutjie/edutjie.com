import Image from 'next/image'
import React from 'react'

export const EducationCard = () => {
  return (
    <div className="bg-[#0B3866]/25 px-[30px] py-[15px] rounded-[30px] flex flex-col gap-8 text-left backdrop-blur-md shadow-xl w-full max-w-[450px]">
      <div className="flex gap-8">
        <div className="relative w-24 h-24 self-center col-span-2 md:col-span-1">
          <Image
            src="/assets/images/universities/ui.png"
            alt="UI"
            fill
            priority
            className="rounded-full object-cover bg-white object-center shadow-lg shadow-[#9BF6FF]/25"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm md:text-lg font-bold">
            Computer Science Student
          </p>
          <p className="text-sm md:text-lg">University of Indonesia</p>
          <p className="text-xs md:text-sm">2021-Present</p>
          <p className="text-xs md:text-sm">Depok, Indonesia</p>
        </div>
      </div>
    </div>
  )
}
