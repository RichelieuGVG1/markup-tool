import type { Project } from '../../model/types/project'
import { $api } from '@/shared/api/api'
import { defineStore } from 'pinia'
import type { ProjectsListState } from '../types/projectListTypes'
import { ProjectsFilterCategory } from '../../const/projectsListConsts'

export const useProjectsListStore = defineStore('projectsListStore', {
  state: (): ProjectsListState => ({
    projects: [],
    category: ProjectsFilterCategory.ALL,
    isLoading: false
  }),
  getters: {
    getProjectById: (state) => {
      return (projectId: string) => state.projects.find((project) => project.ID === +projectId)
    }
  },
  actions: {
    async fetchProjects() {
      try {
        this.isLoading = true
        const response = await $api.get<Project[]>('/projects/all')
        this.projects = response.data.map((project) => ({
          ...project,
          completed_tasks: project.completed_tasks.reverse()
        }))
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    addCompletedTask(payload: { projectId: number; taskId: number }) {
      const currentProject = this.projects.find((project) => project.ID === payload.projectId)
      if (currentProject) {
        currentProject.completed_tasks.unshift(payload.taskId)
      }
    },
    removeUncompletedTask(projectId: number) {
      const currentProject = this.projects.find((project) => project.ID === projectId)
      if (currentProject) {
        currentProject.completed_tasks.shift()
      }
    },
    removeCompletedTask(payload: { projectId: number; taskId: number }) {
      const currentProject = this.projects.find((project) => project.ID === payload.projectId)
      if (currentProject) {
        currentProject.completed_tasks = currentProject.completed_tasks.filter(
          (id) => id !== payload.taskId
        )
      }
    },
    addNewProject(project: Project) {
      this.projects.push(project)
    },
    changeCategory(category: ProjectsFilterCategory) {
      this.category = category
    }
  }
})
