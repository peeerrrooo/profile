import React from 'react'
import { Block } from 'ui/Block'
import { Title } from './Title'
import { fontStories, commonStories } from 'styles/storybook.helpers'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Title', module)

const content = 'Lorem ipsum dolor sit amet'

stories.addDecorator((story) => <Block width="40rem">{story()}</Block>)

stories
  .add('default', () => <Title>{content}</Title>)
  .add('levels', () => (
    <>
      <Title>Level 1</Title>
      <Title level={2}>Level 2</Title>
      <Title level={3}>Level 3</Title>
    </>
  ))
  .add('default color & theme color', () => (
    <>
      <Title level={1}>Title level 1</Title>
      <Title level={2} color="primary">
        Title level 2
      </Title>
    </>
  ))
  .add('with underline', () => (
    <>
      <Title level={1} underline>
        Title level 1
      </Title>
      <Title level={2} underline>
        Title level 2
      </Title>
      <Title level={3} underline>
        Title level 3
      </Title>
    </>
  ))
  .add('with blur', () => (
    <>
      <Title level={1} blur>
        Title level 1
      </Title>
      <Title level={2} blur>
        Title level 2
      </Title>
      <Title level={3} blur>
        Title level 3
      </Title>
    </>
  ))
  .add('with underline & blur', () => (
    <>
      <Title level={1} blur underline>
        Title level 1
      </Title>
      <Title level={2} blur underline>
        Title level 2
      </Title>
    </>
  ))

fontStories({ stories, Component: Title, content, crossProps: { level: 3 } })
commonStories({ stories, Component: Title, content, crossProps: { level: 3 } })
