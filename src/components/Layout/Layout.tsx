import React, { ReactNode } from 'react'
import { BackgroundLines } from 'components/BackgroundLines'
import styled from 'styled-components'
import { Menu } from 'components/Menu'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { IModels } from 'models/models/types'
import { Block } from 'ui/Block'

export interface ILayoutProps {
  children?: ReactNode

  MenuModel?: IMenuModel
}

const Layout = inject((store: IModels) => ({
  MenuModel: store?.MenuModel
}))(
  observer(({ children, MenuModel }: ILayoutProps) => {
    return (
      <Root$ element="main" mediaCommon={{ touch: { paddingBottom: 's6' } }}>
        <Menu />
        <BackgroundLines />
        <Content$ element="section" open={MenuModel!.opened}>
          {children}
        </Content$>
      </Root$>
    )
  })
)

//#region Styled components
const Root$ = styled(Block)`
  padding-left: 300px;
  position: relative;
  min-height: 100vh;
  z-index: 1;

  ${(props) => props.theme.ViewPorts.desktop} {
    padding-left: 260px;
  }

  ${(props) => props.theme.ViewPorts.touch} {
    padding-left: 0;
  }
`

const Content$ = styled(Block)<{ open: boolean }>`
  transition: ${(props) => props.theme.Controls.transition};
  margin-bottom: 64px;

  ${(props) => props.theme.ViewPorts.tablet} {
    transform: ${(props) =>
      props.open ? 'translateX(250px)' : 'translateX(0px)'};
  }
`

//#endregion

export { Layout }
