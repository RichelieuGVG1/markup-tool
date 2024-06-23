import type { Component } from '@/entities/Component'

export interface Project {
  ID: number
  description: string
  title: string
  code: string
  instruction: string
  completed_tasks: number[]
  components: Record<string, Component>
  question_title: string
}
