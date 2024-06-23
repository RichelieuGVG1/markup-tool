import type { FlexAlign, FlexGap, FlexJustify } from '@/shared/types/flex'
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses
} from '@/shared/const/flexMappers'
import classes from '../../ui/Stack/FlexWrapper/FlexWrapper.module.scss'

interface getVtackParams {
  justify?: FlexJustify
  gap?: FlexGap
  max?: boolean
  align?: FlexAlign
}

export const getVStack = (params: getVtackParams = {}) => {
  const { justify = 'start', gap, max, align = 'start' } = params

  return [
    classes.flex,
    directionClasses['column'],
    justifyClasses[justify],
    alignClasses[align],
    gap && gapClasses[gap]
  ].join(' ')
}
