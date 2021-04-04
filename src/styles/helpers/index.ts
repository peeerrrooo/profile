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

export interface IFontProps extends IFontPropsAlias {}
export { unsetFontProps, applyFontProps, fontProps2css }

export interface ICommonProps extends ICommonPropsAlias {}
export interface ICommonPropsOptions extends ICommonPropsOptionsAlias {}
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
