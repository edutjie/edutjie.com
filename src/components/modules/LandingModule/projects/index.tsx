import { Button, Card, Chips } from '@elements'
import React, { useState } from 'react'
import { useWindowSize } from '@hooks'

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<number>(0)
  const { width } = useWindowSize()
  return (
    <div
      id="projects"
      className="flex flex-col md:min-h-screen items-center justify-center gap-6 z-10 py-40"
    >
      <h1>
        My <span className="text-[#95F9C3]">Projects</span>
      </h1>
      <div className="flex gap-2 z-10 py-2">
        <Chips
          enabled={selectedTag === 0}
          onClick={() => setSelectedTag(0)}
          text="All"
          color="#9BF6FF"
        />
        <Chips
          enabled={selectedTag === 1}
          onClick={() => setSelectedTag(1)}
          text={width > 768 ? 'Artificial Intelligence' : 'AI'}
          color="#9BF6FF"
        />
        <Chips
          enabled={selectedTag === 2}
          onClick={() => setSelectedTag(2)}
          text={width > 768 ? 'Software Engineering' : 'SE'}
          color="#9BF6FF"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] z-10">
        <Card variant={0} />
        <Card variant={0} />
        <Card variant={0} />
        <Card variant={0} />
      </div>
      <Button className="w-fit mx-auto z-10">Load More</Button>
    </div>
  )
}

export default Projects
