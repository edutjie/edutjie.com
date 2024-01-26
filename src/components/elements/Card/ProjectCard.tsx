import React from 'react'
import { Chips } from '@elements'
import Image from 'next/image'
import { ProjectType } from 'src/constants/projects/interface'

const ProjectCard = ({
  name,
  date,
  image,
  description,
  skills,
  links,
}: ProjectType) => {
  return (
    <div className="bg-[#0B3866]/25 p-[30px] rounded-[30px] flex flex-col gap-3 md:gap-[15px] backdrop-blur-md shadow-xl w-full max-w-[500px]">
      {image && (
        <div className="relative w-full min-h-[300px]">
          <Image
            src={`/assets/${image}`}
            alt={name}
            fill
            priority
            className="rounded-[15px] object-cover"
          />
        </div>
      )}
      <div className="flex gap-1 overflow-x-auto py-2">
        {skills.map((skill) => (
          <Chips
            key={skill.name}
            text={skill.name}
            color={skill.color}
            className="text-sm"
            onClick={() => window.open(skill.link, '_blank')}
          />
        ))}
      </div>
      <h2>{name}</h2>
      <p className="text-sm md:text-lg">{date}</p>
      <p className="text-sm md:text-lg">{description}</p>
      {links && (
        <div className="flex flex-wrap gap-2 font-bold text-sm md:text-lg">
          Links:{' '}
          {links.map((link, idx) => (
            <span className="text-secondary underline" key={idx}>
              <a
                href={link.link}
                className="font-r-flex font-normal"
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            </span>
          ))}
        </div>
      )}
      {/* <Button className="w-fit mx-auto">Test</Button> */}
    </div>
  )
}

export default ProjectCard
