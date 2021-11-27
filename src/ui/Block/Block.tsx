import _ from 'lodash'
import React, { CSSProperties, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  unit2css,
  color2css,
  IFontProps,
  fontProps2css,
  unsetFontProps,
  applyFontProps,
  ICommonProps,
  unsetCommonProps,
  applyCommonProps,
  commonProps2css,
  mediaPropsToCss
} from 'styles/helpers'
import { TColor, TUnit } from 'styles/styles'
import { isSafe } from 'utils/object'

interface IMainBlockProps {
  horizontal?: 'left' | 'center' | 'right' | 'none' | 'between' | 'around'
  vertical?: 'top' | 'center' | 'bottom' | 'none'
  flexWrap?: boolean
  flexDirection?: 'row' | 'column'
  centered?: boolean
  color?: TColor
  background?: TColor
  borderWidth?: TUnit
  borderColor?: TColor
  borderRadius?: TUnit
  cursor?: string
  inline?: boolean
  flex?: TUnit
  overflow?: 'hidden' | 'auto'
  overflowX?: 'hidden' | 'auto'
  overflowY?: 'hidden' | 'auto'
}

export interface IBlockProps extends IMainBlockProps, IFontProps, ICommonProps {
  className?: string
  style?: CSSProperties

  element?: 'div' | 'main' | 'section' | 'navbar'

  media?: {
    laptop?: IMainBlockProps
    largeDesktop?: IMainBlockProps
    desktop?: IMainBlockProps
    touch?: IMainBlockProps
    tablet?: IMainBlockProps
    mobile?: IMainBlockProps
  }

  onClick?: (e: MouseEvent) => void
  onMouseOver?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
  children?: ReactNode
}

const applyPlacement = (placement?: string): string | false => {
  switch (placement) {
    case 'none':
      return 'flex-start'
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    case 'center':
      return 'center'
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    default:
      return false
  }
}

const Block = ({
  className,
  style,

  horizontal = 'none',
  vertical = 'none',
  flexWrap = false,
  centered = false,
  color,
  background,
  borderColor,
  borderRadius,
  borderWidth,
  cursor,
  inline = false,
  flex,
  flexDirection = 'row',
  overflow,
  overflowX,
  overflowY,

  media,

  element,
  onClick,
  onMouseOver,
  onMouseLeave,
  children,
  ...props
}: IBlockProps) => {
  return (
    <Root$
      className={className}
      style={style}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      cursor={cursor}
      inline={inline}
      element={element}
      color={color}
      background={background}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      flex={flex}
      centered={centered}
      horizontal={horizontal}
      vertical={vertical}
      flexWrap={flexWrap}
      flexDirection={flexDirection}
      media={media}
      overflow={overflow}
      overflowX={overflowX}
      overflowY={overflowY}
      {...applyFontProps(props)}
      {...applyCommonProps(props)}
    >
      {children}
    </Root$>
  )
}

Block.displayName = 'Block'

//#region Styled Components

const generateMainCss = (props: IBlockProps) => {
  const isFlex =
    (isSafe(props.horizontal) && props.horizontal !== 'none') ||
    (isSafe(props.vertical) && props.vertical !== 'none') ||
    (isSafe(props.centered) && props.centered)
  const cursor = () => {
    if (props.cursor) return props.cursor
    if (props.onClick) return 'pointer'
    return false
  }
  const display = () => {
    if (
      !isSafe(props.inline) &&
      !isSafe(props.hidden) &&
      !isSafe(props.horizontal) &&
      !isSafe(props.vertical) &&
      !isSafe(props.centered)
    )
      return false
    if (isFlex) {
      return !props.inline ? 'flex' : 'inline-flex'
    }
    if (props.inline) return 'inline-block'
    return !isSafe(props.hidden) ? 'block' : false
  }
  const justifyContent = () => {
    if (!isSafe(props.centered) && !isSafe(props.horizontal)) return false
    if (props.centered) return 'center'
    if (!isFlex || props.horizontal === 'none') return false
    return applyPlacement(props.horizontal)
  }
  const alignItems = () => {
    if (!isSafe(props.centered) && !isSafe(props.vertical)) return false
    if (props.centered) return 'center'
    if (!isFlex || props.vertical === 'none') return false
    return applyPlacement(props.vertical)
  }

  return css`
    cursor: ${cursor()};
    display: ${display()};

    justify-content: ${justifyContent()};
    align-items: ${alignItems()};
    flex-wrap: ${isSafe(props.flexWrap)
      ? props.flexWrap
        ? 'wrap'
        : false
      : false};

    color: ${color2css(props.color)};
    background-color: ${color2css(props.background)};
    border-radius: ${unit2css(props.borderRadius)};
    border-width: ${unit2css(props.borderWidth)};
    border-style: ${isSafe(props?.borderWidth) ? 'solid' : false};
    border-color: ${color2css(props.borderColor)};
    flex: ${props?.flex};
    overflow: ${props.overflow};
    overflow-x: ${props.overflowX};
    overflow-y: ${props.overflowY};
    flex-direction: ${isFlex ? props.flexDirection : false};
  `
}

const Root$ = styled((props: IBlockProps) => {
  const resolveProps: IBlockProps = { ...props }
  _.unset(resolveProps, 'element')
  _.unset(resolveProps, 'inline')
  _.unset(resolveProps, 'isFlex')
  _.unset(resolveProps, 'centered')
  _.unset(resolveProps, 'horizontal')
  _.unset(resolveProps, 'vertical')
  _.unset(resolveProps, 'flexWrap')
  _.unset(resolveProps, 'flex')
  _.unset(resolveProps, 'color')
  _.unset(resolveProps, 'background')
  _.unset(resolveProps, 'borderRadius')
  _.unset(resolveProps, 'borderWidth')
  _.unset(resolveProps, 'borderColor')
  _.unset(resolveProps, 'cursor')
  _.unset(resolveProps, 'overflow')
  _.unset(resolveProps, 'overflowX')
  _.unset(resolveProps, 'overflowY')
  _.unset(resolveProps, 'flexDirection')

  _.unset(resolveProps, 'media')

  unsetFontProps(resolveProps)
  unsetCommonProps(resolveProps)

  switch (props.element) {
    case 'div':
      return React.createElement('div', resolveProps)
    case 'main':
      return React.createElement('main', resolveProps)
    case 'section':
      return React.createElement('section', resolveProps)
    case 'navbar':
      return React.createElement('nav', resolveProps)
    default:
      return React.createElement('div', resolveProps)
  }
})<IBlockProps>`
  ${(props) => fontProps2css(props)}
  ${(props) => commonProps2css(props)}

  ${(props) => generateMainCss(props)}

  ${(props) =>
    mediaPropsToCss('media', props, (v: IBlockProps) =>
      generateMainCss({
        ...v,
        vertical: v?.vertical ?? props.vertical,
        horizontal: v?.horizontal ?? props.horizontal
      })
    )}
s
`
//#endregion

export { Block }
