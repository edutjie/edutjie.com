import { ExperiencesType } from './interface'
import OrgExperience from './organizations'
import WorkExperience from './works'

export const EXPERIENCES: ExperiencesType = {
  Work: WorkExperience,
  Org: OrgExperience,
}
