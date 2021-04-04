import _ from 'lodash'
import React, { ReactNode } from 'react'
import { info } from 'utils/info'
import { Block } from 'ui/Block'
import { Title } from 'ui/Typography'
import { Item, Placeholder$ } from './Item'
import { IService } from 'providers/types/service'
import styled from 'styled-components'

const Services = () => {
  const generate = ({
    size,
    services
  }: {
    size: number
    services: IService[]
  }): ReactNode[] => {
    const count =
      services.length % size === 0
        ? parseInt(`${services.length / size}`, 10)
        : parseInt(`${services.length / size + 1}`, 10)

    const resolve: ReactNode[] = []
    let index = -1
    _.each(_.times(count), (item) => {
      const items: ReactNode[] = []

      // @ts-ignore
      _.each(_.times(size), (s) => {
        index += 1
        if (index > services.length - 1) {
          items.push(<Placeholder$ key={s} />)
        } else {
          items.push(
            <Item
              key={s}
              icon={services[index].icon}
              title={services[index].title}
              details={services[index].details}
            />
          )
        }
      })
      resolve.push(
        <ItemsContainer$ horizontal="left" key={item}>
          {items}
        </ItemsContainer$>
      )
    })

    return resolve
  }

  return (
    <Block
      marginTop={120}
      mediaCommon={{ tablet: { marginTop: 100 }, mobile: { marginTop: 80 } }}
    >
      <Title
        level={2}
        underline
        blur
        fontWeight="bold"
        color="white"
        textTransform="uppercase"
        selection={false}
      >
        {info().menu.services}
      </Title>

      <Block mediaCommon={{ touch: { hidden: true } }}>
        {generate({ size: 3, services: info().services })}
      </Block>
      <Block
        mediaCommon={{ mobile: { hidden: true }, desktop: { hidden: true } }}
      >
        {generate({ size: 2, services: info().services })}
      </Block>
      <Block
        mediaCommon={{ tablet: { hidden: true }, desktop: { hidden: true } }}
      >
        {generate({ size: 1, services: info().services })}
      </Block>
    </Block>
  )
}

//#region Styled components
const ItemsContainer$ = styled(Block)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`
//#endregion

export { Services }
