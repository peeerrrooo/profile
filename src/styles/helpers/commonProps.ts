import { TUnit } from '../styles'
import _ from 'lodash'
import { css } from 'styled-components'
import { mediaPropsToCss, unit2css } from './common'
import { isSafe } from 'utils/object'

export interface IMainCommonProps {
  width?: TUnit
  minWidth?: TUnit
  maxWidth?: TUnit
  height?: TUnit
  minHeight?: TUnit
  maxHeight?: TUnit
  margin?: TUnit
  marginTop?: TUnit
  marginBottom?: TUnit
  marginLeft?: TUnit
  marginRight?: TUnit

  padding?: TUnit
  paddingLeft?: TUnit
  paddingRight?: TUnit
  paddingTop?: TUnit
  paddingBottom?: TUnit

  position?: 'relative' | 'absolute'
  top?: TUnit
  left?: TUnit
  bottom?: TUnit
  right?: TUnit
  zIndex?: number

  opacity?: number

  selection?: boolean
  visibility?: boolean
  hidden?: boolean

  transform?: string
}

export interface ICommonProps extends IMainCommonProps {
  mediaCommon?: {
    laptop?: IMainCommonProps
    largeDesktop?: IMainCommonProps
    desktop?: IMainCommonProps
    touch?: IMainCommonProps
    tablet?: IMainCommonProps
    mobile?: IMainCommonProps
  }
}

export const unsetCommonProps = (props: ICommonProps) => {
  _.unset(props, 'width')
  _.unset(props, 'minWidth')
  _.unset(props, 'maxWidth')
  _.unset(props, 'height')
  _.unset(props, 'minHeight')
  _.unset(props, 'maxHeight')

  _.unset(props, 'margin')
  _.unset(props, 'marginTop')
  _.unset(props, 'marginBottom')
  _.unset(props, 'marginLeft')
  _.unset(props, 'marginRight')

  _.unset(props, 'padding')
  _.unset(props, 'paddingTop')
  _.unset(props, 'paddingLeft')
  _.unset(props, 'paddingBottom')
  _.unset(props, 'paddingRight')

  _.unset(props, 'position')
  _.unset(props, 'top')
  _.unset(props, 'left')
  _.unset(props, 'bottom')
  _.unset(props, 'right')
  _.unset(props, 'zIndex')

  _.unset(props, 'opacity')

  _.unset(props, 'selection')
  _.unset(props, 'visibility')
  _.unset(props, 'hidden')

  _.unset(props, 'transform')

  _.unset(props, 'mediaCommon')
}

export const applyCommonProps = (
  props: ICommonProps,
  options: ICommonPropsOptions = {}
) => {
  const { isWidth = true, isHeight = true } = options

  const resolve = {
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    margin: props.margin,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,

    padding: props.padding,
    paddingTop: props.paddingTop,
    paddingLeft: props.paddingLeft,
    paddingBottom: props.paddingBottom,
    paddingRight: props.paddingRight,

    position: props?.position,
    top: props?.top,
    left: props?.left,
    bottom: props?.bottom,
    right: props?.right,
    zIndex: props?.zIndex,

    opacity: props?.opacity,

    selection: props?.selection ?? true,
    visibility: props?.visibility ?? true,
    hidden: props?.hidden,

    transform: props?.transform,

    mediaCommon: props.mediaCommon
  }
  if (isWidth) _.set(resolve, 'width', props.width)
  if (isHeight) _.set(resolve, 'height', props.height)

  return resolve
}

export interface ICommonPropsOptions {
  isWidth?: boolean
  isHeight?: boolean
}

const generateCss = (
  currentProps: IMainCommonProps,
  isWidth: boolean,
  isHeight: boolean
) => css`
  width: ${isWidth ? unit2css(currentProps.width) : false};
  min-width: ${unit2css(currentProps.minWidth)};
  max-width: ${unit2css(currentProps.maxWidth)};
  min-height: ${unit2css(currentProps.minHeight)};
  max-height: ${unit2css(currentProps.maxHeight)};
  height: ${isHeight ? unit2css(currentProps.height) : false};
  margin: ${unit2css(currentProps.margin)};
  margin-top: ${unit2css(currentProps.marginTop)};
  margin-left: ${unit2css(currentProps.marginLeft)};
  margin-bottom: ${unit2css(currentProps.marginBottom)};
  margin-right: ${unit2css(currentProps.marginRight)};

  padding: ${unit2css(currentProps.padding)};
  padding-left: ${unit2css(currentProps.paddingLeft)};
  padding-right: ${unit2css(currentProps.paddingRight)};
  padding-top: ${unit2css(currentProps.paddingTop)};
  padding-bottom: ${unit2css(currentProps.paddingBottom)};

  position: ${currentProps?.position};
  top: ${isSafe(currentProps.position) ? unit2css(currentProps.top) : false};
  left: ${isSafe(currentProps.position) ? unit2css(currentProps.left) : false};
  bottom: ${isSafe(currentProps.position)
    ? unit2css(currentProps.bottom)
    : false};
  right: ${isSafe(currentProps.position)
    ? unit2css(currentProps.right)
    : false};
  z-index: ${currentProps?.zIndex};

  opacity: ${currentProps?.opacity};

  user-select: ${isSafe(currentProps?.selection)
    ? !currentProps?.selection
      ? 'none'
      : false
    : false};
  visibility: ${isSafe(currentProps.visibility)
    ? !currentProps.visibility
      ? 'hidden'
      : false
    : false};
  display: ${isSafe(currentProps.hidden)
    ? currentProps.hidden
      ? 'none'
      : false
    : false};

  transform: ${currentProps?.transform};
`

export const commonProps2css = (
  props: ICommonProps,
  options: ICommonPropsOptions = {}
) => {
  const { isWidth = true, isHeight = true } = options

  return css`
    ${generateCss(props, isWidth, isHeight)}

    ${mediaPropsToCss('mediaCommon', props, (v: ICommonProps) =>
      generateCss(
        { ...v, position: v.position ?? props.position },
        isWidth,
        isHeight
      )
    )}
  `
}
