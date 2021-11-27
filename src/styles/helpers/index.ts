import { unit2css, color2css, mediaPropsToCss } from './common'
import {
  IFontProps as IFontPropsAlias,
  unsetFontProps,
  applyFontProps,
  fontProps2css
} from './fontProps'
import {
  ICommonProps as ICommonPropsAlias,
  unsetCommonProps,
  applyCommonProps,
  ICommonPropsOptions as ICommonPropsOptionsAlias,
  commonProps2css
} from './commonProps'
import {
  placeholderColor,
  clearfix,
  gradientColor,
  gradientBg,
  hexToRgba,
  darken,
  lighten
} from './utils'

export { unit2css, color2css, mediaPropsToCss }

export type IFontProps = IFontPropsAlias
export { unsetFontProps, applyFontProps, fontProps2css }

export type ICommonProps = ICommonPropsAlias
export type ICommonPropsOptions = ICommonPropsOptionsAlias
export { unsetCommonProps, applyCommonProps, commonProps2css }
export {
  placeholderColor,
  clearfix,
  gradientColor,
  gradientBg,
  hexToRgba,
  darken,
  lighten
}
