import type { ProjectsFilterCategory } from '../../const/projectsListConsts'
import type { Project } from './project'
export interface ProjectsListState {
  projects: Project[]
  category: ProjectsFilterCategory
  isLoading: boolean
}
