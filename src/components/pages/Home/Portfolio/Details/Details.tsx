import _ from 'lodash'
import React, { PureComponent } from 'react'
import { IPortfolio } from 'providers/types/portfolio'
import { Block } from 'ui/Block'
import { Icon } from 'ui/Icon'
import styled from 'styled-components'
import { Image } from 'ui/Image'
import { Paragraph, Title } from 'ui/Typography'
import { Tag } from './Tag'

export interface IDetailsProps extends IPortfolio {
  open: boolean
  onClose: () => void
}

class Details extends PureComponent<IDetailsProps> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboardKey)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboardKey)
  }

  render() {
    const {
      open,
      onClose,
      title,
      image,
      position,
      skills,
      content,
      progress,
      href
    } = this.props

    return (
      <Block
        style={{
          opacity: open ? 1 : 0,
          zIndex: open ? 1 : -1,
          transition: 'opacity .3s ease-in-out',
          height: open ? 'auto' : 0
        }}
        background="transparent"
        position="relative"
      >
        <Content$>
          <Block horizontal="left" vertical="center" selection={false}>
            <Block
              background="white"
              width={80}
              height={80}
              borderRadius="50%"
              centered
              overflow="hidden"
              padding={10}
              marginRight={32}
              mediaCommon={{ mobile: { marginRight: 16 } }}
            >
              <Image src={image} maxWidth="100%" />
            </Block>
            <Block>
              <Title level={6} color="white" fontWeight="bold" marginBottom={4}>
                <a target="_blank" href={href}>
                  {title}
                </a>
              </Title>

              <Paragraph fontWeight="lightBold">{position}</Paragraph>
            </Block>
          </Block>

          <Block
            marginLeft={80 + 32}
            mediaCommon={{ mobile: { marginLeft: 0 } }}
          >
            <Block
              horizontal="left"
              marginTop="s2"
              flexWrap
              mediaCommon={{ mobile: { marginTop: 's4' } }}
            >
              {_.map(skills, (skill, index) => (
                <Tag
                  key={index}
                  title={skill.title}
                  size="small"
                  href={skill.href}
                />
              ))}
            </Block>

            <Block marginTop="s1">
              {_.map(content, (contentItem, index) => (
                <Paragraph key={index} marginBottom="s2">
                  {contentItem}
                </Paragraph>
              ))}
            </Block>
            <Block marginTop="s3">
              {_.map(progress, (progressItem, index) => (
                <Block horizontal="left" vertical="top" key={index}>
                  <DelimiterProgress$ />
                  <Paragraph marginBottom="s2">{progressItem}</Paragraph>
                </Block>
              ))}
            </Block>
          </Block>
        </Content$>

        <CloseContainer$ onClick={onClose}>
          <Icon icon="IoIosClose" />
        </CloseContainer$>
      </Block>
    )
  }

  handleKeyboardKey = (e: KeyboardEvent & Event) => {
    switch (e.key) {
      case 'Escape': {
        this.props.onClose()
        return
      }
      default:
        return
    }
  }
}

//#region Styled components
const Content$ = styled(Block)`
  padding-left: 64px;
  width: 100%;

  ${(props) => props.theme.ViewPorts.mobile} {
    padding-left: 0;
  }
`

const DelimiterProgress$ = styled(Block)`
  user-select: none;
  height: 15px;
  width: 15px;
  position: relative;
  margin-left: -15px;
  transform: translateX(-8px);

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

  ${(props) => props.theme.ViewPorts.mobile} {
    margin-left: 0;
    transform: none;
    margin-right: 8px;
  }
`

const CloseContainer$ = styled(Block)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  color: ${(props) => props.theme.Colors.white};

  ${(props) => props.theme.ViewPorts.mobile} {
    left: unset;
    right: 0;
  }
`
//#endregion

export { Details }
