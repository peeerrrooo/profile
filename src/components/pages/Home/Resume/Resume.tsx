import React from 'react'
import { content } from 'utils/content'
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
        title={content().menu.resumeHeader}
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
