import _ from 'lodash'
import React, { CSSProperties, ReactNode } from 'react'
import { TColor } from 'styles/styles'
import {
  IFontProps,
  fontProps2css,
  unsetFontProps,
  applyFontProps,
  color2css,
  ICommonProps,
  unsetCommonProps,
  applyCommonProps,
  commonProps2css,
  mediaPropsToCss
} from 'styles/helpers'
import styled, { css } from 'styled-components'

interface IMainTextProps {
  color?: TColor
}

export interface ITextProps extends IMainTextProps, IFontProps, ICommonProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode

  media?: {
    laptop?: IMainTextProps
    largeDesktop?: IMainTextProps
    desktop?: IMainTextProps
    touch?: IMainTextProps
    tablet?: IMainTextProps
    mobile?: IMainTextProps
  }
}

const Text = ({
  className,
  style,
  color,
  children,
  media,
  ...props
}: ITextProps) => (
  <Root$
    className={className}
    style={style}
    color={color}
    media={media}
    {...applyFontProps(props)}
    {...applyCommonProps(props)}
  >
    {children}
  </Root$>
)

Text.displayName = 'Text'

//#region Styled Components
const generateMainCss = (props: ITextProps) => {
  return css`
    color: ${color2css(props.color)};
  `
}

const Root$ = styled((props: ITextProps) => {
  const resolve = { ...props }
  _.unset(resolve, 'color')

  _.unset(resolve, 'media')

  unsetFontProps(resolve)
  unsetCommonProps(resolve)

  return React.createElement('span', resolve)
})<ITextProps>`
  ${(props) => generateMainCss(props)}
  ${(props) => mediaPropsToCss('media', props, generateMainCss)}

  ${(props) => fontProps2css(props)}
  ${(props) => commonProps2css(props)}
`
//#endregion

export { Text }
