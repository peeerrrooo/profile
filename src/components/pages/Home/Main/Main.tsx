import React, { useCallback } from 'react'
import { Title, Text, Paragraph } from 'ui/Typography'
import { info } from 'utils/info'
import { Block } from 'ui/Block'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'
import { Icon } from 'ui/Icon'
import { IMenuModel } from 'models/menuModel/types'
import { inject, observer } from 'mobx-react'
import { Container } from '../common/Container'
import styled from 'styled-components'

export interface IMainProps {
  MenuModel?: IMenuModel
}

const Main = inject('MenuModel')(
  observer(({ MenuModel }: IMainProps) => {
    const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine)
    }, [])

    return (
      <Container titleId="home" blockId={MenuModel!.HOME_BLOCK}>
        <Block
          centered
          padding="50px 80px"
          minHeight="100vh"
          mediaCommon={{ mobile: { padding: '50px 20px' } }}
          position="relative"
        >
          <Block zIndex={1}>
            <Title
              textAlign="center"
              level={1}
              marginBottom={16}
              fontWeight="lightBold"
            >
              <Text color="white">{info().information.hello}</Text>{' '}
              <Text color="primary">{info().information.fullName}</Text>
            </Title>
            <Paragraph
              fontSize={1.25 * 16}
              marginBottom={1.5 * 16}
              textAlign="center"
            >
              {info().information.aboutContent}
            </Paragraph>
            <Block centered>
              <a href={info().information.github} target="_blank">
                <Icon rounded icon="FaGithub" />
              </a>
              <a href={info().information.instagram} target="_blank">
                <Icon rounded icon="FaInstagram" marginLeft={16} />
              </a>
              <a
                href={`https://telegram.me/${info().information.telegram}`}
                target="_blank"
              >
                <Icon rounded icon="SiTelegram" marginLeft={16} />
              </a>
              <a
                href={`skype:${info().information.skype}?userinfo`}
                target="_blank"
              >
                <Icon rounded icon="FaSkype" marginLeft={16} />
              </a>
            </Block>
          </Block>
        </Block>

        <Particles$
          init={particlesInit}
          options={{
            fpsLimit: 120,
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true
                }
              },
              color: {
                value: '#ffffff'
              },
              opacity: {
                value: 0.2
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  speed: 1,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                outModes: {
                  default: 'out'
                },
                straight: false,
                enable: true,
                random: true,
                speed: 3,
                direction: 'bottomLeft'
              }
            },
            detectRetina: true
          }}
        />
      </Container>
    )
  })
)

//#region Styled components
const Particles$ = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`
//#endregion

export { Main }
