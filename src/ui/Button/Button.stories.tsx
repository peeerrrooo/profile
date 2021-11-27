import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, IButtonProps } from './Button'

export const Example = ({ ...args }) => (
  <Button onClick={action('click')} {...args}>
    Button
  </Button>
)
Example.bind({})
Example.args = {
  disable: false,
  loading: false
} as IButtonProps

export default {
  title: 'Button',
  component: Button
}
