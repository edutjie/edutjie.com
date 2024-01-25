import { Button, Card } from '@elements'
import React from 'react'

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="flex flex-col md:min-h-screen items-center justify-center gap-6 z-10 py-40"
    >
      <h1>
        My <span className="text-[#95F9C3]">Achievements</span>
      </h1>
      <div className="grid grid-cols-2 gap-[50px] z-10">
        <Card variant={0} />
        <Card variant={0} />
        <Card variant={0} />
        <Card variant={0} />
      </div>
      <Button className="w-fit mx-auto z-10">Load More</Button>
    </div>
  )
}

export default Achievements
