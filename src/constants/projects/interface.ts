import { SkillTypeObject } from '../skills/interface'

export interface ProjectType {
  name: string
  image?: string
  date: string
  description?: string
  skills: SkillTypeObject[]
  links?: LinkType[]
  type: 'AI' | 'SE' | 'All'
}

interface LinkType {
  name: string
  link: string
}
