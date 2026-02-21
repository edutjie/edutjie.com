import { SkillTypeObject } from '../skills/interface'

export interface ProjectType {
  name: string
  image?: string
  date: string
  description?: string
  skills: SkillTypeObject[]
  links?: LinkType[]
  type: 'Research Publication' | 'Project'
}

interface LinkType {
  name: string
  link: string
}
