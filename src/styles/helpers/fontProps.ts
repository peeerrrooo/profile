import { FontWeight, TFontWeightUnion, TUnit } from '../styles'
import _ from 'lodash'
import { css } from 'styled-components'
import { mediaPropsToCss, unit2css } from './common'

interface IMainFontProps {
  fontSize?: TUnit
  fontWeight?: TFontWeightUnion
  textAlign?: 'left' | 'center' | 'right'
  lineHeight?: TUnit
  letterSpacing?: TUnit
  textTransform?: 'uppercase' | 'lowercase' | 'default'
  textItalic?: boolean
  textUnderline?: boolean
}

export interface IFontProps extends IMainFontProps {
  mediaFont?: {
    laptop?: IMainFontProps
    largeDesktop?: IMainFontProps
    desktop?: IMainFontProps
    touch?: IMainFontProps
    tablet?: IMainFontProps
    mobile?: IMainFontProps
  }
}

export const unsetFontProps = (props) => {
  _.unset(props, 'fontSize')
  _.unset(props, 'fontWeight')
  _.unset(props, 'textAlign')
  _.unset(props, 'lineHeight')
  _.unset(props, 'letterSpacing')
  _.unset(props, 'textTransform')
  _.unset(props, 'textItalic')
  _.unset(props, 'textUnderline')

  _.unset(props, 'mediaFont')
}

export const applyFontProps = (props: IFontProps) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  textTransform: props.textTransform,
  textItalic: props.textItalic,
  textUnderline: props.textUnderline,

  mediaFont: props.mediaFont
})

export const fontProps2css = (props: IFontProps) => {
  const generateCss = (currentProps) => css`
    font-size: ${unit2css(currentProps.fontSize)};
    font-weight: ${FontWeight[currentProps?.fontWeight as string] ?? false};
    text-align: ${currentProps?.textAlign ?? false};
    line-height: ${unit2css(currentProps.lineHeight)};
    letter-spacing: ${unit2css(currentProps.letterSpacing)};
    text-transform: ${(() => {
      if (currentProps?.textTransform === 'default') return 'unset'
      return currentProps.textTransform ?? false
    })()};
    font-style: ${currentProps.textItalic ? 'italic' : false};
    text-decoration: ${currentProps?.textUnderline ? 'underline' : false};
  `
  return css`
    ${generateCss(props)}

    ${mediaPropsToCss('mediaFont', props, generateCss)}
  `
}
