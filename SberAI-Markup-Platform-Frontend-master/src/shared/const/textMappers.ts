import type { TextWeight } from '@/shared/types/textTypes'
import classes from '../ui/TextViews/TextView.module.scss'

export const mapWeightToClass: Record<TextWeight, string> = {
  400: classes.weight_400,
  500: classes.weight_500,
  600: classes.weight_600,
  700: classes.weight_700
}
