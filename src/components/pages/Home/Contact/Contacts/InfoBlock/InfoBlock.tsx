import React from 'react'
import { Block } from 'ui/Block'
import { lighten } from 'styles/helpers'
import styled from 'styled-components'
import { Icon, TIconUnion } from 'ui/Icon'
import { Paragraph, Title } from 'ui/Typography'

export interface IInfoBlockProps {
  title: string
  icon: TIconUnion
  content: string
  href: string
}

const InfoBlock = ({ title, icon, content, href }: IInfoBlockProps) => {
  return (
    <Root$ href={href} target="_blank">
      <IconContainer$ selection={false}>
        <Icon icon={icon} size={30} />
      </IconContainer$>

      <ContentContainer$>
        <Title level={6} marginTop={-6} color="white" selection={false}>
          {title}
        </Title>
        <Paragraph>{content}</Paragraph>
      </ContentContainer$>
    </Root$>
  )
}

//#region Styled components
const Root$ = styled.a`
  margin-top: 30px;
  background: ${(props) => lighten(props.theme.Colors.bgBody, 0.5)};
  padding: 30px;
  display: flex;
  align-items: center;
  transition: ${(props) => props.theme.Controls.transition};
  cursor: pointer;
  color: inherit !important;
  text-decoration: none !important;

  &:active,
  &:focus {
    color: inherit !important;
    text-decoration: none !important;
  }

  &:hover {
    transform: scale(1.03);
    color: inherit !important;
    text-decoration: none !important;
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    &:hover {
      transform: none;
    }
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    padding: 20px;
  }
`

const IconContainer$ = styled(Block)`
  display: inline-flex;
  height: 70px;
  width: 70px;
  flex: 0 0 70px;
  max-width: 70px;
  border: 1px solid ${(props) => props.theme.Colors.border};
  text-align: center;
  line-height: 66px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.ViewPorts.mobile} {
    height: 55px;
    width: 55px;
    flex: 0 0 55px;
    max-width: 55px;
    line-height: 51px;
  }
`

const ContentContainer$ = styled(Block)`
  ${(props) => props.theme.ViewPorts.mobile} {
    margin-top: 5px;
    flex: 0 0 100%;
  }
`
//#endregion

export { InfoBlock }
