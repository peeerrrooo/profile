import React from 'react'
import { Block } from 'ui/Block'
import { phoneNumberNormalizer } from 'utils/formatters/phone'
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
        title="Phone"
        icon="BiPhone"
        content={`+7 ${phoneNumberNormalizer(info().information.phone)}`}
        href={`tel:+7${info().information.phone}`}
      />

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

      <InfoBlock
        title="Skype"
        icon="FaSkype"
        content={`@${info().information.skype}`}
        href={`skype:${info().information.skype}?userinfo`}
      />
    </Block>
  )
}

export { Contacts }
