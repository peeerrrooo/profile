import React from 'react'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'
import { Form } from './Form'
import { Contacts } from './Contacts'
import { content } from 'utils/content'
import { Block } from 'ui/Block'

export interface Props {
  MenuModel?: IMenuModel
}

const Contact = inject('MenuModel')(
  observer(({ MenuModel }: Props) => {
    return (
      <Container
        title={content().menu.contactHeader}
        titleId="contact"
        blockId={MenuModel!.CONTACT_BLOCK}
      >
        <Block horizontal="left" media={{ touch: { horizontal: 'none' } }}>
          <Form />
          <Contacts />
        </Block>
      </Container>
    )
  })
)

export { Contact }
