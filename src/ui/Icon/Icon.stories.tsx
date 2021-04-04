import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Icon } from './Icon'
import { Block } from 'ui/Block'

const stories = storiesOf('Icon', module)

stories.addDecorator((story) => <Block width="80%">{story()}</Block>)

stories
  .add('default', () => <Icon icon="FiAirplay" />)
  .add('with colors', () => <Icon icon="FiAnchor" color="primary" />)
  .add('complex', () => (
    <>
      <Icon icon="FiTwitter" color="primary" />
      <Icon icon="FiFacebook" color="#eee" marginLeft="s2" />
      <Icon icon="FiPieChart" color="primary" marginLeft="s2" />
    </>
  ))
  .add('round', () => (
    <>
      <Icon icon="FiTwitter" rounded onClick={action('click')} />
      <Icon
        icon="FiFacebook"
        marginLeft="s2"
        rounded
        onClick={action('click')}
      />
      <Icon
        icon="FiPieChart"
        color="primary"
        marginLeft="s2"
        rounded
        onClick={action('click')}
      />
      <Icon
        icon="FiInstagram"
        color="primary"
        marginLeft="s2"
        rounded
        onClick={action('click')}
      />
    </>
  ))
