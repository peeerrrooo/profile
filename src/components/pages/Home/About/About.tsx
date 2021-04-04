import React from 'react'
import { info } from 'utils/info'
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
        title={info().menu.aboutHeader}
      >
        <Main />

        <Services />
      </Container>
    )
  })
)

export { About }
