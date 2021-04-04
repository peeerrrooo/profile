import React from 'react'
import { Block } from 'ui/Block'
import { IExperience } from 'providers/types/experience'
import styled from 'styled-components'
import { Paragraph, Title } from 'ui/Typography'

export interface IItemProps extends IExperience {}

const Item = ({
  year,
  position,
  graduation,
  company,
  university,
  details,
  href
}: IItemProps) => {
  return (
    <Root$
      horizontal="left"
      marginTop={30}
      media={{ mobile: { horizontal: 'none' } }}
    >
      <Summary$>
        <Title level={6} color="body">
          {year}
        </Title>
      </Summary$>
      <Details$>
        <Title level={5} color="primary" fontWeight="bold">
          {position || graduation}
        </Title>
        <a href={href} target="_blank">
          <Title
            level={6}
            color="white"
            marginBottom="s1"
            fontWeight="medium"
            width="auto"
          >
            {company || university}
          </Title>
        </a>
        <Paragraph>{details}</Paragraph>
      </Details$>
    </Root$>
  )
}

//#region Styled components
const Root$ = styled(Block)`
  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Summary$ = styled(Block)`
  align-self: flex-start;
  flex: 0 0 220px;
  max-width: 220px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    left: -9px;
    top: 6px;
    height: 15px;
    width: 15px;
    border-radius: 100px;
    background: ${(props) => props.theme.Colors.bgBody};
    border: 3px solid ${(props) => props.theme.Colors.border};
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    flex: 0 0 170px;
    max-width: 170px;
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    flex-wrap: wrap;

    &-details {
      padding-left: 20px;

      &::before {
        left: 3px;
        top: -15px;
        width: 12px;
      }
    }
  }
`

const Details$ = styled(Block)`
  position: relative;
  padding-left: 50px;

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 15px;
    height: 1px;
    width: 30px;
    background: ${(props) => props.theme.Colors.border};
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    padding-left: 20px;
  }
`
//#endregion

export { Item }
