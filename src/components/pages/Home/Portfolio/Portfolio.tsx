import _ from 'lodash'
import React, { ReactNode, useState } from 'react'
import { info } from 'utils/info'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'
import { Item, Placeholder$ } from './Item'
import { Block } from 'ui/Block'
import { Details } from './Details'
import { IPortfolio } from 'providers/types/portfolio'
import { Element, scrollTo } from 'utils/scroll'

export interface IPortfolioProps {
  MenuModel?: IMenuModel
}

const Portfolio = inject('MenuModel')(
  observer(({ MenuModel }: IPortfolioProps) => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState<IPortfolio | null>(null)

    const handleOpen = (index: number) => {
      if (current) return
      setCurrent(info().portfolios[index])
      setOpen(true)
      scrollTo('details:block', { duration: 175 })
    }

    const handleCLose = () => {
      setOpen(false)
      setCurrent(null)
    }

    const generate = () => {
      const resolve: ReactNode[] = []
      let index = -1
      _.each(
        _.times(
          info().portfolios.length % 2 === 0
            ? parseInt(`${info().portfolios.length / 2}`, 10)
            : parseInt(`${info().portfolios.length / 2}`, 10) + 1
        ),
        (count) => {
          const prepare: ReactNode[] = []
          // @ts-ignore
          _.each(_.times(2), () => {
            index += 1
            if (!info().portfolios[index]) {
              prepare.push(<Placeholder$ key={index} />)
              return false
            }

            const currentItem = info().portfolios[index]
            prepare.push(
              <Item
                key={index}
                index={index}
                title={currentItem.title}
                image={currentItem.image}
                position={currentItem.position}
                skills={_.map(currentItem.skills, (s) => s.title)}
                onClick={handleOpen}
              />
            )
          })

          resolve.push(
            <Block
              key={count}
              horizontal="left"
              media={{ touch: { horizontal: 'none' } }}
            >
              {prepare}
            </Block>
          )
        }
      )
      return resolve
    }

    return (
      <Container
        titleId="portfolio"
        blockId={MenuModel!.PORTFOLIO_BLOCK}
        title={info().menu.portfolioHeader}
      >
        <Block position="relative">
          <Element
            name="details:block"
            style={{ position: 'absolute', top: '-80px' }}
          />
          <Details
            open={open}
            onClose={handleCLose}
            title={current?.title ?? ''}
            image={current?.image ?? ''}
            position={current?.position ?? ''}
            skills={current?.skills ?? []}
            href={current?.href ?? ''}
            content={current?.content ?? []}
            progress={current?.progress ?? []}
          />

          <Block
            style={{
              opacity: !open ? 1 : 0,
              zIndex: !open ? 1 : -1,
              height: !open ? 'auto' : 0
            }}
          >
            {generate()}
          </Block>
        </Block>
      </Container>
    )
  })
)

export { Portfolio }
