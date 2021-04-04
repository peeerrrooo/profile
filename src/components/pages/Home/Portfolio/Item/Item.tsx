import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { Block } from 'ui/Block'
import { lighten } from 'styles/helpers'
import { Image } from 'ui/Image'
import { Paragraph, Text, Title } from 'ui/Typography'

export interface IItemsProps {
  title: string
  image: string
  position: string
  skills: string[]
  index: number
  onClick: (index: number) => void
}

const Item = ({
  title,
  image,
  position,
  skills,
  onClick,
  index
}: IItemsProps) => {
  return (
    <Root$ onClick={() => onClick(index)}>
      <Block horizontal="left" vertical="center">
        <Block
          background="white"
          width={80}
          height={80}
          borderRadius="50%"
          centered
          overflow="hidden"
          padding={10}
          marginRight={32}
          selection={false}
        >
          <Image src={image} maxWidth="100%" />
        </Block>
        <Block>
          <Title level={6} color="white" fontWeight="bold" marginBottom={4}>
            {title}
          </Title>

          <Paragraph fontWeight="lightBold">{position}</Paragraph>
        </Block>
      </Block>

      <Block marginLeft={32 + 80} marginTop={-4} horizontal="left" flexWrap>
        {_.map(skills, (skill, sIndex) => (
          <Skill$ key={sIndex} marginRight={4}>
            <Text key={sIndex}>{skill}</Text>
            {sIndex !== skills.length - 1 ? ' · ' : ''}
          </Skill$>
        ))}
      </Block>
    </Root$>
  )
}

//#region Styled components
const Root$ = styled(Block)`
  margin-right: 32px;
  width: calc(50% - 32px);
  background: ${(props) => lighten(props.theme.Colors.bgBody, 0.5)};
  padding: 20px;
  cursor: pointer;
  transition: ${(props) => props.theme.Controls.transition};
  margin-bottom: 32px;

  &:hover {
    transform: scale(1.03);
  }

  &:last-child {
    width: 50%;
    margin-right: 0;
  }

  ${(props) => props.theme.ViewPorts.touch} {
    margin-right: 0;
    width: 100%;

    &:last-child {
      width: 100%;
    }

    &:hover {
      transform: none;
    }
  }
`

const Placeholder$ = styled(Block)`
  margin-right: 32px;
  width: calc(50% - 32px);

  &:last-child {
    width: 50%;
    margin-right: 0;
  }

  ${(props) => props.theme.ViewPorts.touch} {
    margin-right: 0;
    width: 100%;

    &:last-child {
      width: 100%;
    }
  }
`

const Skill$ = styled(Text)`
  white-space: nowrap;
`
//#endregion

export { Item, Placeholder$ }
