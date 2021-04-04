import React from 'react'
import { storiesOf } from '@storybook/react'
import { commonStories } from 'styles/storybook.helpers'
import { Image } from './Image'

const stories = storiesOf('Image', module)

const uriFromNat =
  'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg'

stories
  .add('default', () => <Image src={uriFromNat} />)
  .add('width & height', () => (
    <Image src={uriFromNat} width={500} height={200} />
  ))
  .add('with border radius', () => (
    <>
      <Image
        src={uriFromNat}
        width={200}
        borderRadius="s2"
        inline={false}
        marginBottom="s1"
      />
      <Image
        src={uriFromNat}
        width={200}
        borderRadius="s3"
        inline={false}
        marginBottom="s1"
      />
      <Image src={uriFromNat} width={200} borderRadius="s4" inline={false} />
    </>
  ))

commonStories({
  stories,
  Component: Image,
  crossProps: { src: uriFromNat, inline: false, width: 300, height: 200 }
})
