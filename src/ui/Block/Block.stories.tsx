import React from 'react'
import { Block } from './Block'
import { Paragraph } from 'ui/Typography'
import { storiesOf } from '@storybook/react'
import { fontStories, commonStories } from 'styles/storybook.helpers'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Block', module)

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eos exercitationem explicabo ipsum magnam nemo numquam quis saepe. Corporis deserunt facere natus, necessitatibus quibusdam ut velit. Cumque doloremque doloribus molestiae possimus, quidem repudiandae suscipit? Earum iste molestias nisi quisquam, reprehenderit tempore voluptas. Aliquam, beatae cumque facere molestias sapiente vitae? Quisquam.'
const contentShort = 'Lorem ipsum dolor sit amet'

stories.addDecorator((story) => <Block width="80%">{story()}</Block>)

const HEIGHT = 500

stories
  .add('default', () => <Block>{content}</Block>)
  .add('custom root element', () => (
    <>
      <Block element="main" width={200} padding={32}>
        <code>{'<main>...</main>'}</code>
      </Block>
      <Block element="section" marginTop="s2">
        <code>{'<section>...</section>'}</code>
      </Block>
    </>
  ))
  .add('horizontal placement', () => (
    <Block horizontal="left">
      <Paragraph>{content}</Paragraph>
      <Paragraph marginLeft="s2">{content}</Paragraph>
    </Block>
  ))
  .add('vertical placement', () => (
    <Block vertical="bottom" height={HEIGHT}>
      <Paragraph>{content}</Paragraph>
      <Paragraph marginLeft="s2">{content}</Paragraph>
    </Block>
  ))
  .add('horizontal & vertical placement', () => (
    <>
      <Block horizontal="center" vertical="center" height={200}>
        <Paragraph>{contentShort}</Paragraph>
        <Paragraph marginLeft="s2">{contentShort}</Paragraph>
      </Block>

      <Block horizontal="right" vertical="bottom" height={200}>
        <Paragraph>{contentShort}</Paragraph>
        <Paragraph marginLeft="s2">{contentShort}</Paragraph>
      </Block>
    </>
  ))
  .add('center', () => (
    <Block centered height={HEIGHT}>
      <Paragraph>{contentShort}</Paragraph>
    </Block>
  ))
  .add('flex attribute', () => (
    <Block horizontal="left">
      <Block flex={1.4}>
        <Paragraph>{content}</Paragraph>
      </Block>
      <Block flex={2}>
        <Paragraph>{content}</Paragraph>
      </Block>
    </Block>
  ))
  .add('background & color', () => (
    <Block centered height={HEIGHT} color="primary" background="#eee">
      <Paragraph>{contentShort}</Paragraph>
    </Block>
  ))
  .add('border & border radius', () => (
    <Block
      centered
      height={HEIGHT}
      color="primary"
      borderWidth={2}
      borderRadius={10}
      borderColor="primary"
    >
      <Paragraph>{contentShort}</Paragraph>
    </Block>
  ))
  .add('min width & min height', () => (
    <Block
      width={150}
      minWidth={400}
      minHeight={200}
      background="#eee"
      centered
    >
      <Paragraph>{contentShort}</Paragraph>
    </Block>
  ))
  .add('padding (spacing & number)', () => (
    <>
      <Block width={200} background="#eee" padding={16}>
        <Paragraph>common padding</Paragraph>
      </Block>
      <Block
        width={200}
        background="#eee"
        paddingTop={14}
        paddingBottom={48}
        marginTop="s2"
      >
        <Paragraph>single padding top & padding bottom</Paragraph>
      </Block>
    </>
  ))
  .add('with onClick', () => (
    <Block
      centered
      padding={8}
      height={HEIGHT}
      background="#eee"
      onClick={action('click')}
      borderRadius={8}
    >
      <Paragraph>{contentShort}</Paragraph>
    </Block>
  ))
  .add('with onClick & without select', () => (
    <Block
      centered
      padding={8}
      height={HEIGHT}
      background="#eee"
      onClick={action('click')}
      borderRadius={8}
      selection={false}
    >
      <Paragraph>{contentShort}</Paragraph>
    </Block>
  ))
  .add('custom cursor', () => (
    <Block
      padding={24}
      background="#eee"
      color="primary"
      onClick={action('click')}
      cursor="not-allowed"
    >
      <Paragraph>{content}</Paragraph>
    </Block>
  ))
  .add('inline block', () => (
    <Block inline>
      <Block inline>{contentShort}</Block>
      <Block inline marginLeft="s1">
        {contentShort}
      </Block>
    </Block>
  ))
  .add('absolute position & zIndex & opacity', () => (
    <Block>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi, est
      et explicabo, fuga laborum magni minima mollitia nostrum porro repellendus
      repudiandae, similique suscipit? Eum explicabo facilis illum iusto, non
      numquam, quisquam reprehenderit sed similique tempore, voluptates
      voluptatibus? Beatae debitis dolorem ea eligendi fugiat magnam maiores
      porro possimus quibusdam quisquam?
      <Block
        background="#eee"
        opacity={0.9}
        padding={24}
        borderRadius={24}
        position="absolute"
        right={20}
        top={20}
        zIndex={2}
      >
        Opacity 0.9 & zIndex 2
      </Block>
      <Block
        background="#eee"
        padding={24}
        borderRadius={24}
        position="absolute"
        right={50}
        top={70}
        zIndex={1}
        hidden
      >
        Opacity 1 & zIndex 1
      </Block>
    </Block>
  ))

fontStories({ stories, Component: Block })
commonStories({ stories, Component: Block })
