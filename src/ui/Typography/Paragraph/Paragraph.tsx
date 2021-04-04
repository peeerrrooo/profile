import _ from 'lodash'
import React, { CSSProperties, ReactNode } from 'react'
import { IPropsWithTheme, TColor } from 'styles/styles'
import {
  IFontProps,
  fontProps2css,
  unsetFontProps,
  applyFontProps,
  ICommonProps,
  unsetCommonProps,
  applyCommonProps,
  commonProps2css,
  color2css,
  mediaPropsToCss
} from 'styles/helpers'
import styled, { css } from 'styled-components'

interface IMainParagraphProps {
  color?: TColor
  isNativeMargin?: boolean
}

export interface IParagraphProps
  extends IMainParagraphProps,
    ICommonProps,
    IFontProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode

  media?: {
    laptop?: IMainParagraphProps
    largeDesktop?: IMainParagraphProps
    desktop?: IMainParagraphProps
    touch?: IMainParagraphProps
    tablet?: IMainParagraphProps
    mobile?: IMainParagraphProps
  }
}

const Paragraph = ({
  className,
  style,
  color,
  isNativeMargin = false,
  children,
  media,
  ...props
}: IParagraphProps) => (
  <Root$
    className={className}
    style={style}
    color={color}
    media={media}
    isNativeMargin={isNativeMargin}
    {...applyFontProps(props)}
    {...applyCommonProps(props)}
  >
    {children}
  </Root$>
)

Paragraph.displayName = 'Paragraph'

//#region Styled Components
const generateMainCss = (props: IParagraphProps & IPropsWithTheme) => {
  return css`
    color: ${color2css(props.color)};
    margin-bottom: ${props.isNativeMargin ? '0.5rem' : false};
  `
}

const Root$ = styled((props: IParagraphProps) => {
  const resolve = { ...props }
  _.unset(resolve, 'color')
  _.unset(resolve, 'isNativeMargin')

  _.unset(resolve, 'media')

  unsetFontProps(resolve)
  unsetCommonProps(resolve)

  return React.createElement('p', resolve)
})<IParagraphProps>`
  ${(props) => generateMainCss(props)}
  ${(props) => mediaPropsToCss('media', props, generateMainCss)}

  & b, strong {
    font-weight: bold;
  }

  & i {
    font-style: italic;
  }

  ${(props) => fontProps2css(props)}
  ${(props) => commonProps2css(props)}
`
//#endregion

export { Paragraph }
