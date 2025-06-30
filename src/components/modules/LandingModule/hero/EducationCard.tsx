import Image from 'next/image'
import React from 'react'

interface props {
  imgSrc: string
  altText: string
  degree: string
  university: string
  duration: string
  location: string
  universityUrl?: string
  className?: string
}

export const EducationCard: React.FC<props> = ({
  imgSrc,
  altText,
  degree,
  university,
  duration,
  location,
  universityUrl,
  className = '',
}) => {
  return (
    <div
      onClick={
        universityUrl ? () => window.open(universityUrl, '_blank') : undefined
      }
      className={`bg-[#0B3866]/25 px-[30px] py-[15px] rounded-[30px] flex flex-col gap-8 text-left backdrop-blur-md shadow-xl w-full max-w-[450px] cursor-pointer hover:shadow-[#9BF6FF]/25 hover:shadow-2xl transition-all duration-300 ease-in-out ${className}`}
    >
      <div className="flex gap-8">
        <div className="relative w-24 h-24 self-center col-span-2 md:col-span-1">
          <Image
            src={imgSrc}
            alt={altText}
            fill
            priority
            className="rounded-full object-cover bg-white object-center shadow-lg shadow-[#9BF6FF]/25"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm md:text-lg font-bold">{degree}</p>
          <p className="text-sm md:text-lg">{university}</p>
          <p className="text-xs md:text-sm">{duration}</p>
          <p className="text-xs md:text-sm">{location}</p>
        </div>
      </div>
    </div>
  )
}
