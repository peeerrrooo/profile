import _ from 'lodash'
import React from 'react'
import { Block, IBlockProps } from 'ui/Block'
import { IExperience } from 'providers/types/experience'
import { Icon, TIconUnion } from 'ui/Icon'
import { Title } from 'ui/Typography'
import styled from 'styled-components'
import { Item } from './Item'

export interface IItemsProps extends IBlockProps {
  icon: TIconUnion
  title: string
  list: IExperience[]
}

const Items = ({ icon, title, list, ...props }: IItemsProps) => {
  return (
    <Block marginTop={30} {...props}>
      <Block horizontal="left">
        <Icon icon={icon} size={27} marginRight={10} />
        <Title level={4} color="white" fontWeight="bold">
          {title}
        </Title>
      </Block>

      <Content$>
        {_.map(list, (experience, index) => (
          <Item
            key={index}
            year={experience.year}
            position={experience.position}
            graduation={experience.graduation}
            details={experience.details}
            company={experience.company}
            university={experience.university}
            href={experience.href}
          />
        ))}
      </Content$>
    </Block>
  )
}

//#region Styled components
const Content$ = styled(Block)`
  border-left: 3px solid ${(props) => props.theme.Colors.border};
`
//#endregion

export { Items }
