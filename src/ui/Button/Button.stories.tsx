import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

const stories = storiesOf('Button', module)

stories
  .add('default', () => <Button onClick={action('click')}>Button</Button>)
  .add('loading', () => (
    <Button onClick={action('click')} loading>
      Loading
    </Button>
  ))
  .add('disable', () => (
    <Button onClick={action('click')} disable>
      Disable
    </Button>
  ))
