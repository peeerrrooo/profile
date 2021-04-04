import React from 'react'
import { storiesOf } from '@storybook/react'
import { Svg } from './Svg'
import exampleSvg from 'resources/svg/apple-stroke.svg'
import { commonStories } from 'styles/storybook.helpers'

const stories = storiesOf('Svg', module)

stories
  .add('default', () => {
    return <Svg src={exampleSvg} />
  })
  .add('span wrapper', () => {
    return (
      <>
        <Svg src={exampleSvg} marginRight="s2" wrapper="span" />
        <Svg src={exampleSvg} wrapper="span" />
      </>
    )
  })

commonStories({ stories, Component: Svg, crossProps: { src: exampleSvg } })
