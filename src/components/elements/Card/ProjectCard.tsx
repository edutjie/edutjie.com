import React from 'react'
import { Button, Chips } from '@elements'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className="bg-[#0B3866]/25 p-[30px] rounded-[30px] flex flex-col gap-3 md:gap-[15px] backdrop-blur-md shadow-xl w-full max-w-[500px]">
      <div className="relative w-full min-h-[300px]">
        <Image
          src="/assets/images/self-portrait.jpg"
          alt="Segmentation"
          fill
          priority
          className="rounded-[15px] object-cover"
        />
      </div>
      <div className="flex gap-1 overflow-x-auto py-2">
        <Chips text="TypeScript" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
        <Chips text="NextJs" color="#9BF6FF" className="text-sm" />
      </div>
      <div className="flex gap-[15px] justify-between items-center">
        <h2 className="truncate">Segmentation</h2>
        <p className='text-sm md:text-lg'>2022</p>
      </div>
      <p className='text-sm md:text-lg'>Indonesia AI</p>
      <p className='text-sm md:text-lg'>
        Project Related:{' '}
        <span className="text-secondary underline">
          <a href="">Computer Vision - Indonesia AI</a>
        </span>
      </p>
      <Button className="w-fit mx-auto">Test</Button>
    </div>
  )
}

export default ProjectCard
