import React, { ReactNode } from 'react'
import { BackgroundLines } from 'components/BackgroundLines'
import styled from 'styled-components'
import { Menu } from 'components/Menu'
import UiParticles, { IParticlesParams } from 'react-particles-js'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { IModels } from 'models/models/types'
import { Block } from 'ui/Block'

export interface ILayoutProps {
  children?: ReactNode

  MenuModel?: IMenuModel
}

const particleConfig: IParticlesParams = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false
      }
    },
    color: {
      value: '#ffffff'
    },
    opacity: {
      value: 0.1
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: 'top',
      out_mode: 'out'
    }
  }
}

const Layout = inject((store: IModels) => ({
  MenuModel: store?.MenuModel
}))(
  observer(({ children, MenuModel }: ILayoutProps) => {
    return (
      <Root$ element="main" mediaCommon={{ touch: { paddingBottom: 's6' } }}>
        <Particles$ params={particleConfig} />
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

const Particles$ = styled(UiParticles)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`
//#endregion

export { Layout }
