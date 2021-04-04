import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './Input'
import { Block } from 'ui/Block'

const stories = storiesOf('Input', module)

stories.addDecorator((story) => <Block paddingTop="s1">{story()}</Block>)

stories
  .add('default', () => <Input onChange={action('change')} />)
  .add('with label', () => <Input onChange={action('change')} label="Label" />)
  .add('with type', () => (
    <Input onChange={action('change')} label="Label" type="email" />
  ))
  .add('with error', () => (
    <>
      <Input onChange={action('change')} label="Label" error="Any error" />
      <Input onChange={action('change')} label="Label" error="Any error" />
    </>
  ))
  .add('force error', () => (
    <>
      <Input
        onChange={action('change')}
        label="Label"
        error="Any error"
        forceValidate
      />
      <Input
        onChange={action('change')}
        label="Label"
        error="Any error"
        forceValidate
      />
    </>
  ))
  .add('text area', () => (
    <Input onChange={action('change')} label="Label" area />
  ))
  .add('complex', () => (
    <>
      <Input onChange={action('change')} label="Label" error="Any error" />
      <Input onChange={action('change')} label="Label" error="Any error" />
      <Input onChange={action('change')} label="Label" error="Any error" area />
    </>
  ))
