import React from 'react'
import styled from 'styled-components'
import { Icon } from 'ui/Icon'
import { Text, Paragraph } from 'ui/Typography'
import avatar from 'resources/img/avatar.jpg'
import { lighten } from 'styles/helpers'
import { Inner } from './Inner'
import { Avatar } from './Avatar'
import { MenuContainer } from './MenuContainer'
import { IMenuModel } from 'models/menuModel/types'
import { IModels } from 'models/models/types'
import { inject, observer } from 'mobx-react'
import { info } from 'utils/info'
import { Item } from './Item'
import { Toggle } from './Toggle'
import { Block } from 'ui/Block'

export interface Props {
  MenuModel?: IMenuModel
}

const Menu = inject((store: IModels) => ({
  MenuModel: store?.MenuModel
}))(
  observer(({ MenuModel }: Props) => {
    const handleToggle = () => {
      MenuModel!.open()
    }

    return (
      <>
        <Root$ open={MenuModel!.opened} element="navbar" selection={false}>
          <Toggle onClick={handleToggle}>
            {!MenuModel!.opened ? (
              <Icon icon="FiMenu" />
            ) : (
              <Icon icon="FiArrowLeft" />
            )}
          </Toggle>
          <Inner>
            <Avatar>
              <a href="/">
                <img src={avatar} alt="brand image" />
              </a>
            </Avatar>

            <MenuContainer>
              <Item
                id="home"
                blockId={MenuModel!.HOME_BLOCK}
                title={info().menu.home}
              />
              <Item
                id="portfolio"
                blockId={MenuModel!.PORTFOLIO_BLOCK}
                title={info().menu.portfolio}
              />
              <Item
                id="about"
                blockId={MenuModel!.ABOUT_BLOCK}
                title={info().menu.about}
              />
              <Item
                id="resume"
                blockId={MenuModel!.RESUME_BLOCK}
                title={info().menu.resume}
              />
              <Item
                id="contact"
                blockId={MenuModel!.CONTACT_BLOCK}
                title={info().menu.contact}
              />
            </MenuContainer>
            <Copyright$>
              &copy; {new Date().getFullYear()}{' '}
              <b>
                <Text color="primary">{info().information.firstName}</Text>
                {info().information.lastName}
              </b>
            </Copyright$>
          </Inner>
        </Root$>

        {MenuModel!.opened && <Overflow$ onClick={() => MenuModel!.open()} />}
      </>
    )
  })
)

//#region Styled components
const Root$ = styled(Block)<{ open: boolean }>`
  user-select: none;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(0);
  height: 100vh;
  width: 300px;
  background: ${(props) => lighten(props.theme.Colors.bgBody, 0.05)};
  border-right: 1px solid ${(props) => props.theme.Colors.border};
  z-index: 10;
  transition: ${(props) => props.theme.Controls.transition};

  ${(props) => props.theme.ViewPorts.desktop} {
    width: 260px;
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    width: 250px;
    z-index: 11;
    transform: ${(props) =>
      !props.open ? 'translateX(-100%)' : 'translateX(0%)'};
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    width: 250px;
    transform: ${(props) =>
      !props.open ? 'translateX(-100%)' : 'translateX(0%)'};
  }
`

const Overflow$ = styled(Block)`
  display: none;

  ${(props) => props.theme.ViewPorts.touch} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }
`

const Copyright$ = styled(Paragraph)`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 15px 0;
  border-top: 1px solid ${(props) => props.theme.Colors.border};
`
//#endregion

export { Menu }
