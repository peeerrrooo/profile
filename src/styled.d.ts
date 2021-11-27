import 'styled-components'
import { ITheme } from 'styles/styles'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
