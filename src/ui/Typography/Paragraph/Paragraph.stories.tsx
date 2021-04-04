import React from 'react'
import { Block } from 'ui/Block'
import { Paragraph } from './Paragraph'
import { fontStories, commonStories } from 'styles/storybook.helpers'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Paragraph', module)

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugiat officia unde! Cum, dolorem eaque eos ipsum nam nulla pariatur ratione sunt suscipit totam? Doloremque eum eveniet iste totam voluptas!'

stories.addDecorator((story) => <Block width="40rem">{story()}</Block>)

stories
  .add('default', () => <Paragraph>{content}</Paragraph>)
  .add('default color & theme color', () => (
    <>
      <Paragraph>{content}</Paragraph>
      <Paragraph color="primary">{content}</Paragraph>
    </>
  ))
  .add('with native margin', () => (
    <>
      <Paragraph isNativeMargin color="violetDark">
        {content}
      </Paragraph>
      <Paragraph isNativeMargin>{content}</Paragraph>
    </>
  ))

fontStories({ stories, Component: Paragraph })
commonStories({ stories, Component: Paragraph })
