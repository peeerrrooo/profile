import 'styled-components'
import { ITheme } from 'styles/styles'

declare module 'styled-components' {
  /* tslint:disable:no-empty-interface */
  export interface DefaultTheme extends ITheme {}
  /* tslint:enable */
}
