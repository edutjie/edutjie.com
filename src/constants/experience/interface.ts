import { SkillTypeObject } from '../skills/interface'

export interface ExperiencesType {
  Work: SingularExperienceType[]
  Org: SingularExperienceType[]
}

export interface SingularExperienceType {
  name: string
  headlineRole?: string
  logo: string
  links?: LinkType[]
  date?: string
  location?: string
  roles: RoleType[]
  skills?: SkillTypeObject[]
}

interface RoleType {
  name: string
  date: string
  description?: string[]
}

interface LinkType {
  name: string
  link: string
}
