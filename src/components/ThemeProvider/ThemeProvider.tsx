import React, { ReactNode } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { GlobalStyles } from 'styles/globalCss'
import { theme } from 'styles/styles'

export interface Props {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) =>
  React.createElement(Provider, {
    theme,
    children: [
      React.createElement(GlobalStyles, { key: 'global-styles' }),
      React.createElement(React.Fragment, { key: 'global-content', children })
    ]
  })

export { ThemeProvider }
