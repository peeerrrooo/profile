import React, { ReactNode } from 'react'
import { Block } from 'ui/Block'
import { Element, Waypoint } from 'utils/scroll'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Title } from 'ui/Typography'

export interface IContainerProps {
  MenuModel?: IMenuModel

  children: ReactNode
  title?: string
  titleId: string
  blockId: string
}

const Container = inject('MenuModel')(
  observer(
    ({ MenuModel, title, titleId, blockId, children }: IContainerProps) => {
      const waypoint = (
        <Waypoint
          onEnter={() => {
            MenuModel!.scrollSetActive(titleId)
          }}
          style={{ top: '40%' }}
        />
      )

      if (!title) {
        return (
          <>
            <Element name={blockId} />
            <Block minHeight="100vh" element="section" position="relative">
              {waypoint}

              {children}
            </Block>
          </>
        )
      }

      return (
        <Block minHeight="100vh" element="section" position="relative">
          <Element name={blockId} />
          {waypoint}
          <Block
            padding="120px 15px 0 15px"
            maxWidth={1140}
            marginLeft="auto"
            marginRight="auto"
            mediaCommon={{
              touch: { maxWidth: 720 },
              laptop: { maxWidth: 980 },
              mobile: { maxWidth: 'unset', padding: '120px 20px 0 20px' }
            }}
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
              {title}
            </Title>

            {children}
          </Block>
        </Block>
      )
    }
  )
)

export { Container }
