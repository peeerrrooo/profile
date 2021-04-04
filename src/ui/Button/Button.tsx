import _ from 'lodash'
import React, { CSSProperties, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  placeholderColor,
  darken,
  lighten,
  commonProps2css,
  ICommonProps,
  applyCommonProps,
  unsetCommonProps,
  hexToRgba
} from 'styles/helpers'
import { safeObject } from 'utils/object'
import { Text } from 'ui/Typography'
import { Block } from 'ui/Block'
import { Icon } from 'ui/Icon'

export interface IButtonProps extends ICommonProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode
  onClick?: () => void
  href?: string
  tabIndex?: number
  loading?: boolean
  disable?: boolean
}

const Button = ({
  className,
  style,
  children,
  onClick,
  href,
  tabIndex,
  loading = false,
  disable = false,
  ...props
}: IButtonProps) => {
  return (
    <Root$
      className={className}
      style={style}
      button={!href}
      tabIndex={tabIndex}
      loading={loading}
      disable={disable}
      {...safeObject({
        ...applyCommonProps(props),
        target: href ? '_blank' : null,
        href: href || null,
        onClick: !loading && !disable ? onClick : null
      })}
    >
      <Text style={{ visibility: !loading ? 'visible' : 'hidden' }}>
        {children}
      </Text>

      {loading && (
        <LoadingContainer$>
          <Icon icon="AiOutlineLoading" />
        </LoadingContainer$>
      )}
    </Root$>
  )
}

//#region Styled components
const Root$ = styled((props) => {
  const resolve: IButtonProps = { ...props }

  _.unset(resolve, 'button')
  _.unset(resolve, 'loading')
  _.unset(resolve, 'disable')

  if (props.button) _.unset(resolve, 'href')

  unsetCommonProps(resolve)

  return React.createElement(props.button ? 'button' : 'a', resolve)
})<{
  button: boolean
  loading: boolean
  disable: boolean
}>`
  display: inline-block;
  width: auto;
  position: relative;
  border: 0;
  outline: none;
  background: ${(props) =>
    !props.disable
      ? props.theme.Colors.primary
      : hexToRgba(props.theme.Colors.primary, 0.3)};
  color: ${(props) => props.theme.Colors.secondary};
  padding: 0 30px;
  font-size: 0.8rem;
  text-transform: uppercase;
  z-index: 1;
  letter-spacing: 2px;
  height: ${(props) => props.theme.Controls.inputButtonHeight};
  line-height: ${(props) => props.theme.Controls.inputButtonHeight};
  transition: ${(props) => props.theme.Controls.transition};
  cursor: ${(props) =>
    !props.disable && !props.loading ? 'pointer' : 'not-allowed'};
  border-radius: ${(props) => props.theme.Controls.inputBorderRadius};
  overflow: hidden;
  user-select: none;
  touch-action: none;
  text-decoration: none !important;

  &:before {
    content: ${(props) => (!props.loading && !props.disable ? '" "' : 'none')};
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: ${(props) => props.theme.Colors.secondary};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.4s ease-out;
  }

  &:hover {
    color: #ffffff;
    background: ${(props) =>
      !props.disable
        ? darken(props.theme.Colors.primary, 0.1)
        : hexToRgba(props.theme.Colors.primary, 0.4)};
  }

  &:focus,
  &:active {
    background: ${(props) =>
      !props.disable
        ? lighten(props.theme.Colors.primary, 0.05)
        : hexToRgba(props.theme.Colors.primary, 0.4)}};
  }

  &:hover::before,
  &:active::before,
  &:focus::before {
    transform: scaleX(1);
  }

  &:-webkit-autofill {
    transition: background-color 50000s ease-in-out 0s,
      color 50000s ease-in-out 0s;

    &:hover,
    &:focus {
      transition: background-color 50000s ease-in-out 0s,
        color 50000s ease-in-out 0s;
    }
  }

  ${(props) => placeholderColor(props.theme.Colors.body)}

  ${(props) => commonProps2css(props)}
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingContainer$ = styled(Block)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  > div {
    animation: 1s linear infinite ${rotateAnimation};
  }
`
//#endregion

Button.displayName = 'Button'

export { Button }
