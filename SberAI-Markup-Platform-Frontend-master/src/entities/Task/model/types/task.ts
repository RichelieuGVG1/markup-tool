interface ComponentDataBase {}
interface ImageComponentData extends ComponentDataBase {
  images: string[]
}

interface TextComponentData extends ComponentDataBase {
  placeholder?: string
}

export type ComponentTaskData = ImageComponentData & TextComponentData

export interface Task {
  index: number
  answer?: Record<string, string>
  components: Record<string, ComponentTaskData>
  question?: string
}
