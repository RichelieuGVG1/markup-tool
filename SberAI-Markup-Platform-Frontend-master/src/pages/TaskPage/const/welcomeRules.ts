import { AnswerType } from '@/entities/Task'

export const welcomeRules: Record<AnswerType, { title: string; desc: string }> = {
  [AnswerType.TEXT]: {
    title: 'Опишите изображение',
    desc: 'В данной задаче Вам  будут предложены одно (или несколько) изображений и вопрос на который предстоит ответить в текстовом формате'
  },
  [AnswerType.CHOICE]: {
    title: 'Выберите верные пункты',
    desc: 'Вам необходимо выбрать верные пункты ответов для каждого подобранного задания'
  },
  [AnswerType.IMAGE]: {
    title: 'Загрузите изображение',
    desc: 'Вам необходимо загрузить изображение соответствующее вопросу, и описать его'
  }
}
