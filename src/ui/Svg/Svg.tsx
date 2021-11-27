import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import {
  ICommonProps,
  unsetCommonProps,
  applyCommonProps,
  commonProps2css
} from 'styles/helpers'
import { ReactSVG } from 'react-svg'

export interface ISvgProps extends ICommonProps {
  src: string
  className?: string
  style?: CSSProperties
  wrapper?: 'div' | 'span'
}

const Svg = ({
  className,
  style,
  src,
  wrapper = 'div',
  ...props
}: ISvgProps) => {
  if (!src) return null

  return (
    <Root$
      className={className}
      style={style}
      wrapper={wrapper}
      src={src}
      {...applyCommonProps(props)}
    />
  )
}

Svg.displayName = 'Svg'

//#region Styled Components
const Root$ = styled((props) => {
  const resolve: ISvgProps = { ...props }

  unsetCommonProps(resolve)

  // @ts-ignore
  return <ReactSVG {...resolve} />
})<ISvgProps>`
  line-height: 0;
  font-size: 0;
  max-width: 100%;

  & svg {
    max-width: 100%;
  }

  ${(props) => commonProps2css(props)};
`
//#endregion

export { Svg }
