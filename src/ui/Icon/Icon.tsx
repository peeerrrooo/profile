import _ from 'lodash'
import React, { CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import { IPropsWithTheme, TColor, TUnit } from 'styles/styles'
import {
  unit2css,
  color2css,
  ICommonProps,
  unsetCommonProps,
  applyCommonProps,
  commonProps2css,
  mediaPropsToCss
} from 'styles/helpers'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'

export type TIconUnion =
  | keyof typeof FiIcons
  | keyof typeof FaIcons
  | keyof typeof BiIcons
  | keyof typeof IoIcons
  | keyof typeof BsIcons
  | keyof typeof SiIcons
  | keyof typeof AiIcons

export interface IMainIconProps {
  color?: TColor
  size?: TUnit
  rounded?: boolean
}

export interface IIconProps extends IMainIconProps, ICommonProps {
  icon: TIconUnion
  className?: string
  style?: CSSProperties

  onClick?: (e?: MouseEvent) => void

  media?: {
    laptop?: IMainIconProps
    largeDesktop?: IMainIconProps
    desktop?: IMainIconProps
    touch?: IMainIconProps
    tablet?: IMainIconProps
    mobile?: IMainIconProps
  }
}

const Icon = ({
  className,
  style,
  icon,
  size,
  color,
  rounded,
  onClick,
  media,
  ...props
}: IIconProps) => {
  const Component =
    FiIcons[`${icon}`] ??
    FaIcons[`${icon}`] ??
    BiIcons[`${icon}`] ??
    IoIcons[`${icon}`] ??
    BsIcons[`${icon}`] ??
    SiIcons[`${icon}`] ??
    AiIcons[`${icon}`] ??
    null

  if (!Component) return null

  return (
    <Root$
      className={className}
      style={style}
      rounded={rounded}
      color={color}
      size={size}
      media={media}
      onClick={onClick}
      {...applyCommonProps(props, { isWidth: false, isHeight: false })}
    >
      <Component />
    </Root$>
  )
}

Icon.displayName = 'Icon'

//#region Styled Components
const generateMainCss = (props: IIconProps & IPropsWithTheme) => {
  const border = () => {
    const color = color2css(props.color) || props.theme.Colors.text
    return props.rounded ? `2px solid ${color}` : false
  }
  return css`
    font-size: ${unit2css(props.size)};
    color: ${color2css(props.color)};

    padding: ${props.rounded ? '10px' : false};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: ${border()};
    border-radius: ${props.rounded ? '50%' : 0};
    transition: ${props.theme.Controls.transition};
    cursor: ${!!props.onClick || props.rounded ? 'pointer' : false};

    &:hover {
      color: ${props.rounded ? props.theme.Colors.primary : false};
      border: ${props.rounded
        ? `2px solid ${props.theme.Colors.primary}`
        : false};
    }
  `
}

const Root$ = styled((props) => {
  const resolve: IIconProps = { ...props }
  _.unset(resolve, 'color')
  _.unset(resolve, 'size')
  _.unset(resolve, 'icon')
  _.unset(resolve, 'rounded')

  _.unset(resolve, 'media')

  unsetCommonProps(resolve)

  return React.createElement('div', resolve)
})<IIconProps>`
  ${(props) => generateMainCss(props)};
  ${(props) => mediaPropsToCss('media', props, generateMainCss)}

  ${(props) => commonProps2css(props, { isWidth: false, isHeight: false })};
`
//#endregion

export { Icon }
