import React from 'react'
import { Block } from 'ui/Block'
import { Text } from './Text'
import { fontStories, commonStories } from 'styles/storybook.helpers'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Text', module)

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugiat officia unde! Cum, dolorem eaque eos ipsum nam nulla pariatur ratione sunt suscipit totam? Doloremque eum eveniet iste totam voluptas!'

stories.addDecorator((story) => <Block width="40rem">{story()}</Block>)

stories
  .add('default', () => <Text>{content}</Text>)
  .add('default color & theme color', () => (
    <>
      <Text>{content}</Text> <Text color="primary">{content}</Text>
    </>
  ))

fontStories({ stories, Component: Text })
commonStories({ stories, Component: Text })
