import { Card } from '@elements'
import React from 'react'

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <h1>
        My <span className="text-[#95F9C3]">Projects</span>
      </h1>
      <Card />
    </div>
  )
}

export default Projects
