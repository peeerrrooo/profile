import _ from 'lodash'
import React, { useState, useEffect, CSSProperties, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { IPropsWithTheme, ITheme } from 'styles/styles'
import {
  lighten,
  placeholderColor,
  commonProps2css,
  applyCommonProps,
  unsetCommonProps,
  ICommonProps
} from 'styles/helpers'
import { isSafe, safeObject } from 'utils/object'
import { Block } from 'ui/Block'
import TextareaAutosize from 'react-autosize-textarea'

export interface IInputProps extends ICommonProps {
  className?: string
  style?: CSSProperties
  theme?: ITheme

  value?: string
  onChange?: (value: string) => void
  label?: string
  type?: 'text' | 'email'
  tabIndex?: number
  error?: ReactNode
  forceValidate?: boolean
  area?: boolean
  rows?: number
}

const Input = ({
  className,
  style,
  value,
  onChange,
  label,
  type = 'text',
  tabIndex,
  error = null,
  forceValidate = false,
  area = false,
  rows = 5,
  ...props
}: IInputProps) => {
  const [currentValue, setValue] = useState(value ?? '')
  const [isFocus, setFocus] = useState(false)
  const [isStart, setStart] = useState(false)

  useEffect(() => {
    if (isSafe(value)) setValue(value ?? '')
  }, [value])

  const handleChange = (e) => {
    setValue(e?.target?.value)
    setStart(true)
    if (onChange) onChange(e?.target?.value)
  }

  const handleFocus = () => {
    setFocus(true)
    setStart(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  const resolveProps = {
    style: {
      width: '100%',
      paddingTop: area ? '15px' : 0,
      paddingBottom: area ? '15px' : 0
    },
    onChange: handleChange,
    type,
    onFocus: handleFocus,
    onBlur: handleBlur,
    autoComplete: 'off',
    ...safeObject({
      value: currentValue ?? null,
      tabIndex: tabIndex ?? null
    })
  }
  const rootProps = {
    className,
    style: safeObject({
      ...style,
      width: style?.width ?? '100%'
    }),
    ...applyCommonProps(props)
  }

  const labelComponent = <>{label && <Label$>{label}</Label$>}</>

  const errorComponent = (
    <>
      {error && (isStart || forceValidate) && (
        <Error$ style={{ opacity: !isFocus ? 1 : 0 }} area={area}>
          {error}
        </Error$>
      )}
    </>
  )

  if (area)
    return (
      <Block {...rootProps} position="relative">
        <AreaComponent$ {...resolveProps} rows={rows} />
        {labelComponent}
        {errorComponent}
      </Block>
    )

  return (
    <Block {...rootProps} position="relative">
      <InputComponent$ {...resolveProps} />
      {labelComponent}
      {errorComponent}
    </Block>
  )
}

//#region Styled components
const rootStyles = (props: IInputProps & IPropsWithTheme) => css`
  outline: none;
  border: 1px solid ${props.theme.Colors.border};
  font-size: 0.9rem;
  background: transparent;
  font-family: ${props.theme.FontFamily.body};
  color: ${props.theme.Colors.body};
  transition: ${props.theme.Controls.transition};
  padding: 0 15px;
  margin-bottom: 2rem;

  &:hover {
    border-color: ${props.theme.Colors.primary};
  }

  &:focus,
  &:active {
    border-color: ${props.theme.Colors.primary};
    box-shadow: ${lighten(props.theme.Colors.primary, 0.1)} 0 0 7px 0;
  }

  &:-webkit-autofill {
    transition: background-color 50000s ease-in-out 0s,
      color 50000s ease-in-out 0s;

    &:hover,
    &:focus {
      transition: background-color 50000s ease-in-out 0s,
        color 50000s ease-in-out 0s;
    }

    ${placeholderColor(props.theme.Colors.body)}
  }

  ${commonProps2css(props)}
`

const InputComponent$ = styled((props: IInputProps) => {
  const resolve = { ...props }
  unsetCommonProps(resolve)
  return React.createElement('input', resolve)
})`
  height: ${(props) => props.theme.Controls.inputButtonHeight};

  ${(props) => rootStyles(props)}
`

const AreaComponent$ = styled(
  (props: IInputProps & TextareaAutosize.RequiredProps) => {
    const resolve = { ...props }
    unsetCommonProps(resolve)
    return React.createElement(TextareaAutosize, resolve)
  }
)<IInputProps>`
  resize: none;
  ${(props) => rootStyles(props)}
`

const Label$ = styled.label`
  font-size: 0.94rem;
  position: absolute;
  left: 15px;
  top: -15px;
  background: ${(props) => props.theme.Colors.bgBody};
  transition: ${(props) => props.theme.Controls.transition};
  pointer-events: none;
  padding: 0 10px;
  user-select: none;
`

const Error$ = styled((props) => {
  const resolve = { ...props }
  _.unset(resolve, 'area')
  return <span {...resolve} />
})<{ area: boolean }>`
  position: absolute;
  bottom: ${(props) => (!props.area ? '7px' : '15px')};
  left: -10px;
  pointer-events: none;
  padding: 0 10px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.Colors.body};
  font-weight: 700;
  transition: ${(props) => props.theme.Controls.transition};
  user-select: none;
`
//#endregion

Input.displayName = 'Input'

export { Input }
