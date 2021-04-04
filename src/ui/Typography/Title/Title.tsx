import _ from 'lodash'
import React, { CSSProperties, ReactNode } from 'react'
import { IPropsWithTheme, TColor } from 'styles/styles'
import { hexToRgba } from 'styles/helpers'
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

interface IMainTitleProps {
  color?: TColor
  underline?: boolean
  blur?: boolean
}

export interface ITitleProps extends IMainTitleProps, IFontProps, ICommonProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6

  media?: {
    laptop?: IMainTitleProps
    largeDesktop?: IMainTitleProps
    desktop?: IMainTitleProps
    touch?: IMainTitleProps
    tablet?: IMainTitleProps
    mobile?: IMainTitleProps
  }
}

const Title = ({
  className,
  style,
  color,
  level = 1,
  underline,
  blur,
  children,
  media,
  ...props
}: ITitleProps) => (
  <Root$
    className={className}
    style={style}
    color={color}
    level={level}
    underline={underline}
    blur={blur}
    media={media}
    {...applyFontProps(props)}
    {...applyCommonProps(props)}
  >
    {children}
    {blur && <Blur$>{children}</Blur$>}
  </Root$>
)

Title.displayName = 'Title'

const generateMainCss = (props: ITitleProps & IPropsWithTheme) => {
  const fontSize = () => {
    switch (props.level) {
      case 1:
        return '3.2857rem'
      case 2:
        return '2.57rem'
      case 3:
        return '2rem'
      case 4:
        return '1.71rem'
      case 5:
        return '1.43rem'
      case 6:
        return '1.14rem'
      default:
        return false
    }
  }
  const lineHeight = () => {
    switch (props.level) {
      case 1:
        return '4rem'
      case 2:
        return '3.2857rem'
      case 3:
        return '2.7rem'
      case 4:
        return '2.43rem'
      case 5:
        return '2.14rem'
      case 6:
        return '1.857rem'
      default:
        return false
    }
  }

  const fontSizeTablet = () => {
    switch (props.level) {
      case 1:
        return '2.9857rem'
      case 2:
        return '2.37rem'
      default:
        return false
    }
  }

  const lineHeightTablet = () => {
    switch (props.level) {
      case 1:
        return '3.4rem'
      case 2:
        return '3.0857rem'
      default:
        return false
    }
  }

  const fontSizeMobile = () => {
    switch (props.level) {
      case 1:
        return '2.6857rem'
      case 2:
        return '2.17rem'
      case 3:
        return '1.91rem'
      case 4:
        return '1.51rem'
      case 5:
        return '1.23rem'
      case 6:
        return '1.04rem'
      default:
        return false
    }
  }

  const lineHeightMobile = () => {
    switch (props.level) {
      case 1:
        return '3.1rem'
      case 2:
        return '2.857rem'
      case 3:
        return '2.357rem'
      case 4:
        return '2.13rem'
      case 5:
        return '2.04rem'
      case 6:
        return '1.657rem'
      default:
        return false
    }
  }

  return css`
    position: relative;
    color: ${color2css(props.color)};
    padding-bottom: ${props.underline ? '15px' : 0};
    margin: 0;
    margin-bottom: ${props.blur ? '80px' : false};

    &:before {
      content: ${props.underline ? '""' : 'none'};
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 5px;
      width: 100px;
      background: ${hexToRgba(props.theme.Colors.primary, 0.3)};
      border-radius: 100px;
      margin-top: 15px;
    }

    &:after {
      content: ${props.underline ? '""' : 'none'};
      position: absolute;
      left: 0;
      top: auto;
      bottom: 0;
      height: 5px;
      width: 35px;
      background: ${props.theme.Colors.primary};
      border-radius: 100px;
    }

    font-weight: normal;

    font-size: ${fontSize()};
    line-height: ${lineHeight()};

    ${props.theme.ViewPorts.tablet} {
      font-size: ${fontSizeTablet()};
      line-height: ${lineHeightTablet()};
    }

    ${props.theme.ViewPorts.mobile} {
      font-size: ${fontSizeMobile()};
      line-height: ${lineHeightMobile()};
      margin-bottom: ${props.blur ? '50px' : false};
    }
  `
}

//#region Styled Components
const Root$ = styled((props: ITitleProps) => {
  const resolve = { ...props }
  _.unset(resolve, 'color')
  _.unset(resolve, 'level')
  _.unset(resolve, 'underline')
  _.unset(resolve, 'blur')

  _.unset(resolve, 'media')

  unsetFontProps(resolve)
  unsetCommonProps(resolve)

  let element = 'h1'
  switch (props.level) {
    case 1:
      element = 'h1'
      break
    case 2:
      element = 'h2'
      break
    case 3:
      element = 'h3'
      break
    case 4:
      element = 'h4'
      break
    case 5:
      element = 'h5'
      break
    case 6:
      element = 'h6'
      break
  }
  return React.createElement(element, resolve)
})<ITitleProps>`
  ${(props) => generateMainCss(props)}

  ${(props) => fontProps2css(props)}
  ${(props) => commonProps2css(props)}
  ${(props) => mediaPropsToCss('media', props, generateMainCss)}
`

const Blur$ = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  font-size: 6rem;
  line-height: 1;
  font-weight: 900;
  color: rgba(25, 29, 43, 0.44);
  display: inline - block;
  text-transform: uppercase;
  z-index: -1;
  transform: translateY(-30%);
  user-select: none;
  white-space: nowrap;

  ${(props) => props.theme.ViewPorts.mobile} {
    font-size: 3rem;
    transform: translateY(-42%);
  }
`
//#endregion

export { Title }
