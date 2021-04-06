import React from 'react'
import { info } from 'utils/info'
import { IModels } from 'models/models/types'
import { IMenuModel } from 'models/menuModel/types'
import { IGlobalModel } from 'models/globalModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'
import { Main } from './Main'
import { Services } from './Services'

export interface IAboutProps {
  MenuModel?: IMenuModel
  GlobalModel?: IGlobalModel
}

const About = inject((store: IModels) => ({
  MenuModel: store.MenuModel,
  GlobalModel: store.GlobalModel
}))(
  observer(({ MenuModel, GlobalModel }: IAboutProps) => {
    return (
      <Container
        titleId="about"
        blockId={MenuModel!.ABOUT_BLOCK}
        title={info().menu.aboutHeader}
      >
        <Main prefix={GlobalModel!.config.prefix} />

        <Services />
      </Container>
    )
  })
)

export { About }
