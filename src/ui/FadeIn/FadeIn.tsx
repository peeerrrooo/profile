import React, { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'
import { Block, IBlockProps } from 'ui/Block'

export interface IFadeInProps extends IBlockProps {
  duration?: number
  children: ReactNode
}

const FadeIn = ({ children, duration = 0.175, ...props }: IFadeInProps) => (
  <Root {...props} duration={duration}>
    {children}
  </Root>
)

//#region Styled components
const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Root = styled(Block)<IFadeInProps>`
  animation: ${(props) => props.duration}s ${animation} ease-in-out;
`

//#endregion

export { FadeIn }
