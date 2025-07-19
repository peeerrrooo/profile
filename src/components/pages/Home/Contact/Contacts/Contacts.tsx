import React from 'react'
import { Block } from 'ui/Block'
import { info } from 'utils/info'
import { InfoBlock } from './InfoBlock'

const Contacts = () => {
  return (
    <Block
      width="50%"
      marginTop={-2}
      mediaCommon={{ touch: { width: '100%', marginTop: 0 } }}
    >
      <InfoBlock
        title="Email"
        icon="FiMail"
        content={info().information.email}
        href={`mailto:${info().information.email}`}
      />

      <InfoBlock
        title="Telegram"
        icon="FaTelegramPlane"
        content={`@${info().information.telegram}`}
        href={`https://telegram.me/${info().information.telegram}`}
      />
    </Block>
  )
}

export { Contacts }
