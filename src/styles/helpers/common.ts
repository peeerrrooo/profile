import { Colors, ITheme, TColor, TUnit, ViewPorts, Spacing } from '../styles'
import { isSafe } from 'utils/object'
import { css, FlattenInterpolation, ThemeProps } from 'styled-components'

export type TOmit = false | null
export type TCssResult = FlattenInterpolation<ThemeProps<ITheme>>

export const unit2css = (
  field?: TUnit,
  omit: TOmit = false
): string | TOmit => {
  if (!isSafe(field)) return omit
  if (typeof field === 'number') return `${field}px`
  if (Spacing[field as string]) return `${Spacing[field as string]}px`
  return field ?? omit
}

export const color2css = (color?: TColor): string | false => {
  if (!isSafe(color)) return false
  if (Colors[color as string]) return Colors[color as string]
  return color ?? false
}

export const mediaPropsToCss = <T>(
  mediaKey: string,
  props,
  generateCss: (params: T) => TCssResult
): TCssResult => {
  return css`
    ${props?.[mediaKey]?.laptop &&
    css`
      ${ViewPorts.laptop} {
        ${generateCss(props?.[mediaKey]?.laptop)}
      }
    `}

    ${props?.[mediaKey]?.largeDesktop &&
    css`
      ${ViewPorts.largeDesktop} {
        ${generateCss(props?.[mediaKey]?.largeDesktop)}
      }
    `}

    ${props?.[mediaKey]?.desktop &&
    css`
      ${ViewPorts.desktop} {
        ${generateCss(props?.[mediaKey]?.desktop)}
      }
    `}

    ${props?.[mediaKey]?.touch &&
    css`
      ${ViewPorts.touch} {
        ${generateCss(props?.[mediaKey]?.touch)}
      }
    `}

    ${props?.[mediaKey]?.tablet &&
    css`
      ${ViewPorts.tablet} {
        ${generateCss(props?.[mediaKey]?.tablet)}
      }
    `}

    ${props?.[mediaKey]?.mobile &&
    css`
      ${ViewPorts.mobile} {
        ${generateCss(props?.[mediaKey]?.mobile)}
      }
    `}
  `
}
