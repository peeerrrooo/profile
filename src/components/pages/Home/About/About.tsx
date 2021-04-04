import React from 'react'
import { content } from 'utils/content'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'
import { Main } from './Main'
import { Services } from './Services'

export interface IAboutProps {
  MenuModel?: IMenuModel
}

const About = inject('MenuModel')(
  observer(({ MenuModel }: IAboutProps) => {
    return (
      <Container
        titleId="about"
        blockId={MenuModel!.ABOUT_BLOCK}
        title={content().menu.aboutHeader}
      >
        <Main />

        <Services />
      </Container>
    )
  })
)

export { About }
