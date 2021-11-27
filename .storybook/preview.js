import React from 'react'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from 'components/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withInfo)

addDecorator((story) => {
  return React.createElement(ThemeProvider, {
    children: React.createElement('div', {
      style: { padding: '2rem' },
      children: story()
    })
  })
})
