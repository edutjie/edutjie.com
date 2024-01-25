export interface SkillTypeObject {
  name: string
  logo: string
  link: string
  color: string
}

export interface SkillType {
  [key: string]: SkillTypeObject
}
