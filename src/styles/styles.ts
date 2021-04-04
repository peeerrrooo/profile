//#region Colors

export const Colors = {
  primary: '#037fff',
  secondary: '#ffffff',
  body: '#a4acc4',
  heading: '#ffffff',
  border: '#2e344e',
  bgBody: '#10121b',
  bgDark: '#0c0e16',
  white: '#ffffff',

  selection: '#b3d4fc',
  text: '#222',
  hr: '#ccc',
  scrollBar: '#383838',
  scrollBarThumb: '#6b6b6b'
}

export type TColorsUnion = keyof typeof Colors
export type TColor = string | TColorsUnion

//#endregion

//#region Typography
export const RemPoint = 16

export const Spacing = {
  s1: 8,
  s2: 16,
  s3: 24,
  s4: 32,
  s5: 40,
  s6: 48,
  s7: 56,
  s8: 64,
  s9: 72,
  s10: 80
}
export type TSpacingUnion = keyof typeof Spacing

export type TUnit = number | string | TSpacingUnion

export const FontFamily = {
  body: "'Nunito', sans-serif"
}
export type TFontFamilyUnion = keyof typeof FontFamily

export const FontWeight = {
  normal: 'normal',
  medium: 500,
  lightBold: 600,
  bold: 700
}
export type TFontWeightUnion = keyof typeof FontWeight

export const BreakPoints = {
  laptop: 1280,
  largeDesktop: 1440,
  tablet: 768
}
export type TBreakPointsUnion = keyof typeof BreakPoints

export const ViewPorts = {
  laptop: `@media only screen and (min-width: ${
    BreakPoints.laptop
  }px) and (max-width: ${BreakPoints.largeDesktop - 1}px)`,
  largeDesktop: `@media only screen and (min-width: ${BreakPoints.largeDesktop}px)`,
  desktop: `@media only screen and (min-width: ${BreakPoints.laptop}px)`,
  touch: `@media only screen and (max-width: ${BreakPoints.laptop - 1}px)`,
  tablet: `@media only screen and (min-width: ${
    BreakPoints.tablet
  }px) and (max-width: ${BreakPoints.laptop - 1}px)`,
  mobile: `@media only screen and (max-width: ${BreakPoints.tablet - 1}px)`
}
export type TViewPortsUnion = keyof typeof ViewPorts

//#endregion

//#region Controls
export const Controls = {
  inputButtonHeight: '50px',
  transition: 'all 0.175s ease-out'
}
export type TControlsUnion = keyof typeof Controls
//#endregion

//#region Theme
export interface ITheme {
  RemPoint: typeof RemPoint
  Colors: typeof Colors
  FontFamily: typeof FontFamily
  BreakPoints: typeof BreakPoints
  ViewPorts: typeof ViewPorts
  Controls: typeof Controls
}

export const theme: ITheme = {
  RemPoint,
  Colors,
  FontFamily,
  BreakPoints,
  ViewPorts,
  Controls
}

export interface IPropsWithTheme {
  theme: ITheme
}

//#endregion
