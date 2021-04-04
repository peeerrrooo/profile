import React from 'react'
import { Icon, TIconUnion } from 'ui/Icon'
import { Block } from 'ui/Block'
import { Paragraph } from 'ui/Typography'
import { lighten } from 'styles/helpers'
import styled from 'styled-components'
import { IService } from 'providers/types/service'

export interface IItemProps extends IService {}

const Item = ({ icon, title, details }: IItemProps) => {
  return (
    <Root$>
      <IconContainer$>
        <Icon icon={icon as TIconUnion} size={40} />
      </IconContainer$>

      <Title$>{title}</Title$>
      <Paragraph>{details}</Paragraph>
    </Root$>
  )
}

//#region Styled components
const Root$ = styled(Block)`
  border: 1px solid ${(props) => props.theme.Colors.border};
  border-top: 5px solid ${(props) => props.theme.Colors.border};
  padding: 30px;
  background: ${(props) => lighten(props.theme.Colors.bgBody, 0.5)};
  transition: ${(props) => props.theme.Controls.transition};
  width: calc(${100 / 3}% - 32px);
  margin-right: 32px;

  &:last-child {
    width: calc(${100 / 3}%);
    margin-right: 0;
  }

  &:hover {
    border-top-color: ${(props) => props.theme.Colors.primary};
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    padding: 20px;
    width: calc(${100 / 2}% - 32px);

    &:last-child {
      width: ${100 / 2}%;
    }
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    width: 100%;

    &:last-child {
      width: 100%;
    }
  }
`

const IconContainer$ = styled(Block)`
  margin-bottom: 20px;
  display: inline-block;
  color: ${(props) => props.theme.Colors.primary};
  font-size: 2.5rem;
`

const Title$ = styled(Paragraph)`
  font-weight: 600;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 15px;
  font-size: 1.43rem;
  line-height: 2.14rem;

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: auto;
    bottom: 0;
    height: 2px;
    width: 50px;
    background: ${(props) => props.theme.Colors.border};
  }
`

const Placeholder$ = styled(Block)`
  width: calc(${100 / 3}% - 32px);

  &:last-child {
    width: calc(${100 / 3}%);
    margin-right: 0;
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    width: calc(${100 / 2}% - 32px);

    &:last-child {
      width: ${100 / 2}%;
    }
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
//#endregion

export { Item, Placeholder$ }
