import React from 'react'
import { Button } from '@elements'
import Image from 'next/image'

export const Card: React.FC = () => {
  // TODO: Write element's logic

  return (
    <>
      <div className="bg-[#0B3866]/25 p-[50px] rounded-[30px] flex flex-col gap-[15px] backdrop-blur-md shadow-xl">
        <div className="relative w-full min-h-[200px]">
          <Image
            src="/assets/images/self-portrait.jpg"
            alt="Segmentation"
            fill
            priority
            className="rounded-[15px] object-cover"
          />
        </div>
        <div className="flex gap-[15px] justify-between items-center">
          <h2>Segmentation</h2>
          <p>2022</p>
        </div>
        <p>Indonesia AI</p>
        <p>
          Certification Related:{' '}
          <span className="text-secondary">Computer Vision - Indonesia AI</span>
        </p>
        <Button className="w-fit mx-auto">Test</Button>
      </div>
    </>
  )
}
