import React from 'react'
import { Title, Text, Paragraph } from 'ui/Typography'
import { content } from 'utils/content'
import { Block } from 'ui/Block'
import { Icon } from 'ui/Icon'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'

export interface IMainProps {
  MenuModel?: IMenuModel
}

const Main = inject('MenuModel')(
  observer(({ MenuModel }: IMainProps) => {
    return (
      <Container titleId="home" blockId={MenuModel!.HOME_BLOCK}>
        <Block
          centered
          padding="50px 80px"
          minHeight="100vh"
          mediaCommon={{ mobile: { padding: '50px 20px' } }}
        >
          <Block>
            <Title
              textAlign="center"
              level={1}
              marginBottom={16}
              fontWeight="lightBold"
            >
              <Text color="white">{content().information.hello}</Text>{' '}
              <Text color="primary">{content().information.fullName}</Text>
            </Title>
            <Paragraph
              fontSize={1.25 * 16}
              marginBottom={1.5 * 16}
              textAlign="center"
            >
              {content().information.aboutContent}
            </Paragraph>
            <Block centered>
              <a href={content().information.github} target="_blank">
                <Icon rounded icon="FaGithub" />
              </a>
              <a href={content().information.instagram} target="_blank">
                <Icon rounded icon="FaInstagram" marginLeft={16} />
              </a>
              <a
                href={`https://telegram.me/${content().information.telegram}`}
                target="_blank"
              >
                <Icon rounded icon="SiTelegram" marginLeft={16} />
              </a>
              <a
                href={`skype:${content().information.skype}?userinfo`}
                target="_blank"
              >
                <Icon rounded icon="FaSkype" marginLeft={16} />
              </a>
            </Block>
          </Block>
        </Block>
      </Container>
    )
  })
)

export { Main }
