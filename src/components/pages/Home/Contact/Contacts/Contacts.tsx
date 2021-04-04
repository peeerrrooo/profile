import React from 'react'
import { Block } from 'ui/Block'
import { phoneNumberNormalizer } from 'utils/formatters/phone'
import { content } from 'utils/content'
import { InfoBlock } from './InfoBlock'

const Contacts = () => {
  return (
    <Block
      width="50%"
      marginTop={-2}
      mediaCommon={{ touch: { width: '100%', marginTop: 0 } }}
    >
      <InfoBlock
        title="Phone"
        icon="BiPhone"
        content={`+7 ${phoneNumberNormalizer(content().information.phone)}`}
        href={`tel:+7${content().information.phone}`}
      />

      <InfoBlock
        title="Email"
        icon="FiMail"
        content={content().information.email}
        href={`mailto:${content().information.email}`}
      />

      <InfoBlock
        title="Telegram"
        icon="FaTelegramPlane"
        content={`@${content().information.telegram}`}
        href={`https://telegram.me/${content().information.telegram}`}
      />

      <InfoBlock
        title="Skype"
        icon="FaSkype"
        content={`@${content().information.skype}`}
        href={`skype:${content().information.skype}?userinfo`}
      />
    </Block>
  )
}

export { Contacts }
