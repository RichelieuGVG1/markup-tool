export type ComponentPurpose = 'answer' | 'content'

export type ComponentType = 'choice' | 'images' | 'input' | 'image'

export interface ComponentVisualsSettings {
  fill: boolean
}
interface ComponentBase {
  name: string
  position: number
  purpose: ComponentPurpose
  require?: boolean
  type: ComponentType
  visuals: ComponentVisualsSettings
}

export interface ChoiceComponent extends ComponentBase {
  options: Record<string, string>
  type: 'choice'
}

export interface TextComponent extends ComponentBase {
  type: 'input'
}

export interface ImageComponent extends ComponentBase {
  type: 'image'
}

export interface ImagesComponent extends ComponentBase {
  images?: string[]
  type: 'images'
}

export type Component = ChoiceComponent | TextComponent | ImagesComponent | ImageComponent
