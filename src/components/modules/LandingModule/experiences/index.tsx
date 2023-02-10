import { Button, Card } from '@elements'
import React from 'react'

const Experiences = () => {
  return (
    <div
      id="experiences"
      className="flex flex-col min-h-screen items-center justify-center gap-6 z-10 py-40"
    >
      <h1>
        My <span className="text-[#95F9C3]">Experiences</span>
      </h1>
      <div className="z-10 flex flex-col gap-[50px]">
        <Card variant={1} />
        <Card variant={1} />
        <Card variant={1} />
        <Card variant={1} />
      </div>
      <Button className="w-fit mx-auto z-10">Load More</Button>
    </div>
  )
}

export default Experiences
