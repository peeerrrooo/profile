import _ from 'lodash'
import React, { CSSProperties, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { TUnit } from 'styles/styles'
import {
  unit2css,
  ICommonProps,
  unsetCommonProps,
  applyCommonProps,
  commonProps2css,
  mediaPropsToCss
} from 'styles/helpers'
import { isSafe } from 'utils/object'

export interface IMainImageProps {
  inline?: boolean
  borderRadius?: TUnit
}

export interface IImageProps extends IMainImageProps, ICommonProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode

  src?: string

  media?: {
    laptop?: IMainImageProps
    largeDesktop?: IMainImageProps
    desktop?: IMainImageProps
    touch?: IMainImageProps
    tablet?: IMainImageProps
    mobile?: IMainImageProps
  }
}

const Image = ({
  className,
  style,
  src,
  inline = true,
  borderRadius,
  media,
  ...props
}: IImageProps) => {
  if (!src) return null

  return (
    <Root$
      className={className}
      style={style}
      inline={inline}
      borderRadius={borderRadius}
      media={media}
      src={src}
      {...applyCommonProps(props)}
    />
  )
}

Image.displayName = 'Image'

//#region Styled Components
const generateMainCss = (props: IImageProps) => {
  const display = () => {
    if (!isSafe(props.inline)) return false
    return !props.inline ? 'block' : false
  }
  return css`
    display: ${display()};
    border-radius: ${unit2css(props.borderRadius)};
  `
}

const Root$ = styled((props: IImageProps) => {
  const resolve: IImageProps = { ...props }

  _.unset(resolve, 'inline')
  _.unset(resolve, 'borderRadius')

  _.unset(resolve, 'media')

  unsetCommonProps(resolve)

  return React.createElement('img', resolve)
})<IImageProps>`
  ${(props) => generateMainCss(props)}
  ${(props) => mediaPropsToCss('media', props, generateMainCss)}

  ${(props) => commonProps2css(props)};
`
//#endregion

export { Image }
