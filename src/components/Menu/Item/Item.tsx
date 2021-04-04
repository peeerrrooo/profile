import _ from 'lodash'
import styled from 'styled-components'
import { hexToRgba } from 'styles/helpers'
import { scrollTo } from 'utils/scroll'
import { inject, observer } from 'mobx-react'
import { IModels } from 'models/models/types'
import { IMenuModel } from 'models/menuModel/types'

export interface IItemProps {
  MenuModel?: IMenuModel
  id: string
  blockId: string
  title: string
}

const Item = inject((store: IModels) => ({
  MenuModel: store?.MenuModel
}))(
  observer(({ MenuModel, id, blockId, title }: IItemProps) => {
    return (
      <Root$
        active={MenuModel!.active === id}
        onClick={() => {
          MenuModel?.setActive(id, true)
          scrollTo(blockId, { duration: 500 })
        }}
      >
        {title}
      </Root$>
    )
  })
)

//#region Styled components
const Root$ = styled((props) => {
  const resolve = { ...props }
  _.unset(resolve, 'active')
  return <li {...resolve} />
})<{ active: boolean }>`
  text-transform: uppercase;
  font-size: 0.94rem;
  letter-spacing: 1px;
  display: block;
  padding: 5px 0;
  color: ${(props) => (!props.active ? props.theme.Colors.body : '#ffffff')};
  transition: ${(props) => props.theme.Controls.transition};
  font-weight: 600;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    height: 100%;
    width: ${(props) => (!props.active ? 0 : '100%')};
    background: ${(props) =>
      !props.active
        ? hexToRgba(props.theme.Colors.primary, 0.2)
        : props.theme.Colors.primary};
    transition: ${(props) => props.theme.Controls.transition};
    visibility: ${(props) => (!props.active ? 'hidden' : 'visible')};
    transition: ${(props) => props.theme.Controls.transition};
    z-index: -1;
  }

  &:hover {
    color: ${(props) => (!props.active ? props.theme.Colors.primary : '#fff')};

    &::before {
      width: 100%;
      visibility: visible;
    }
  }

  ${(props) => props.theme.ViewPorts.desktop} {
    padding: 7px 0;
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    padding: 7px 0;
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    padding: 7px 0;
  }
`
//#endregion

export { Item }
