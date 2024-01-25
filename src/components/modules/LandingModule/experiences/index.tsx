import { Card, Chips } from '@elements'
import React, { useState } from 'react'
import { EXPERIENCES } from 'src/constants/experience'

const Experiences = () => {
  const [selectedTag, setSelectedTag] = useState<number>(0)
  const experienceMap: ('Work' | 'Org')[] = ['Work', 'Org']

  return (
    <div
      id="experiences"
      className="flex flex-col md:min-h-screen items-center justify-center gap-6 z-10 py-28 md:py-40"
    >
      <h1>
        My <span className="text-[#95F9C3]">Experiences</span>
      </h1>
      <div className="flex gap-2 z-10 py-2">
        <Chips
          enabled={selectedTag === 0}
          onClick={() => setSelectedTag(0)}
          text="Works"
          color="#9BF6FF"
        />
        <Chips
          enabled={selectedTag === 1}
          onClick={() => setSelectedTag(1)}
          text="Org/Volunteers"
          color="#9BF6FF"
        />
      </div>
      <div className="z-10 flex flex-col gap-[50px]">
        {EXPERIENCES[experienceMap[selectedTag]].map((experience) => (
          <Card variant={1} key={experience.name} props={experience} />
        ))}
      </div>
      {/* <Button className="w-fit mx-auto z-10">Load More</Button> */}
    </div>
  )
}

export default Experiences
