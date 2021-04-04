import React from 'react'
import { info } from 'utils/info'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'
import { Skills } from './Skills'
import { Experience } from './Experience'

export interface IResumeProps {
  MenuModel?: IMenuModel
}

const Resume = inject('MenuModel')(
  observer(({ MenuModel }: IResumeProps) => {
    return (
      <Container
        title={info().menu.resumeHeader}
        titleId="resume"
        blockId={MenuModel!.RESUME_BLOCK}
      >
        <Skills />
        <Experience />
      </Container>
    )
  })
)

export { Resume }
