import { AnswerType } from '@/entities/Task'
import ChoiceIcon from '@/shared/assets/icons/choose-answer.svg'
import TextIcon from '@/shared/assets/icons/image-desc.svg'
import ImageIcon from '@/shared/assets/icons/upload.svg'

export enum ProjectsFilterCategory {
  ALL,
  ARCHIVE
}

export const projectCardIconMapper: Record<AnswerType, string> = {
  [AnswerType.TEXT]: TextIcon,
  [AnswerType.IMAGE]: ImageIcon,
  [AnswerType.CHOICE]: ChoiceIcon
}
