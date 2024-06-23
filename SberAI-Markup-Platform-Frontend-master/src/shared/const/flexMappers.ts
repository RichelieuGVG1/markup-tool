import type { FlexAlign, FlexDirection, FlexGap, FlexJustify } from '@/shared/types/flex'
import classes from '../ui/Stack/FlexWrapper/FlexWrapper.module.scss'

export const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween
}
export const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd,
  stretch: classes.alignStretch
}
export const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn
}
export const gapClasses: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  10: classes.gap10,
  16: classes.gap16,
  20: classes.gap20,
  24: classes.gap24,
  30: classes.gap30,
  50: classes.gap50,
  70: classes.gap70,
  85: classes.gap85
}
