import { SkillTypeObject } from '../skills/interface'

export interface AchievementType {
  name: string
  issuer: string
  image?: string
  date: string
  medal: 'gold' | 'silver' | 'bronze' | 'none'
  type: 'competition' | 'award' | 'other'
  description?: string
  skills: SkillTypeObject[]
  links?: LinkType[]
}

interface LinkType {
  name: string
  link: string
}
