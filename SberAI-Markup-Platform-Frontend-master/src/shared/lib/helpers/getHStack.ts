import type { FlexAlign, FlexGap, FlexJustify } from '@/shared/types/flex'
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses
} from '@/shared/const/flexMappers'
import classes from '../../ui/Stack/FlexWrapper/FlexWrapper.module.scss'

interface getHStackParams {
  justify?: FlexJustify
  gap?: FlexGap
  max?: boolean
  align?: FlexAlign
}

export const getHStack = (params: getHStackParams) => {
  const { justify = 'start', gap, max, align = 'center' } = params
  return [
    classes.flex,
    directionClasses['row'],
    justifyClasses[justify],
    alignClasses[align],
    gap && gapClasses[gap],
    max && classes.max
  ].join(' ')
}
