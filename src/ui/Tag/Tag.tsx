import _ from 'lodash'
import React, { CSSProperties } from 'react'
import { Paragraph } from 'ui/Typography'
import styled from 'styled-components'
import { darken } from 'styles/helpers'

export interface ITagProps {
  className?: string
  style?: CSSProperties

  title: string
  href: string
  size?: 'small' | 'normal'
  fill?: boolean
}

const Tag = ({
  className,
  style,
  title,
  size = 'normal',
  fill,
  href
}: ITagProps) => {
  const padding = () => {
    switch (size) {
      case 'small':
        return '5px 10px'
      default:
        return '8px 16px'
    }
  }

  const fontSize = () => {
    switch (size) {
      case 'small':
        return '1rem'
      default:
        return '1rem'
    }
  }

  return (
    <Root$
      href={href}
      target="_blank"
      padding={padding()}
      fill={fill}
      className={className}
      style={style}
    >
      <Paragraph fontWeight="lightBold" color="white" fontSize={fontSize()}>
        {title}
      </Paragraph>
    </Root$>
  )
}

//#region Styled components
const Root$ = styled((props) => {
  const resolve = { ...props }
  _.unset(resolve, 'fill')
  _.unset(resolve, 'padding')
  return <a {...resolve} />
})<{ fill?: boolean; padding: string }>`
  display: block;
  border-radius: 4px;
  width: auto;
  padding: ${(props) => props.padding};
  user-select: none;
  background: ${(props) =>
    props.fill ? props.theme.Colors.primary : 'transparent'};
  text-decoration: none;
  transition: ${(props) => props.theme.Controls.transition};
  border: 1px solid ${(props) => props.theme.Colors.primary};

  &:hover {
    text-decoration: none;
    background: ${(props) =>
      props.fill
        ? darken(props.theme.Colors.primary, 0.5)
        : props.theme.Colors.primary};
    border: ${(props) =>
      props.fill
        ? `1px solid ${darken(props.theme.Colors.primary, 0.5)}`
        : false};
  }
`
//#endregion

export { Tag }
