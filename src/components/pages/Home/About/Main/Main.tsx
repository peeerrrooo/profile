import React, { useState } from 'react'
import { Block } from 'ui/Block'
import styled from 'styled-components'
import { hexToRgba } from 'styles/helpers'
import { Image } from 'ui/Image'
import { Icon } from 'ui/Icon'
import { Button } from 'ui/Button'
import { content } from 'utils/content'
import { scrollTo } from 'utils/scroll'
import { Title, Text, Paragraph } from 'ui/Typography'
import { phoneNumberNormalizer } from 'utils/formatters/phone'
import Lightbox from 'react-image-lightbox'

const Main = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Block horizontal="left" media={{ touch: { horizontal: 'none' } }}>
        <ImageView$
          width="50%"
          marginRight="s4"
          onClick={() => setOpen(true)}
          mediaCommon={{ touch: { width: '100%' } }}
          position="relative"
          selection={false}
        >
          <ImageContainer$>
            <Image src={content().information.aboutImage} maxWidth="100%" />
          </ImageContainer$>

          <IconContainer$>
            <Icon icon="BiZoomIn" size={100} />
          </IconContainer$>
        </ImageView$>

        <Block
          width="50%"
          mediaCommon={{ touch: { width: '100%', marginTop: 30 } }}
        >
          <Title
            fontWeight="lightBold"
            level={3}
            marginTop={-8}
            marginBottom="s1"
            color="white"
          >
            I am <Text color="primary">{content().information.fullName}</Text>
          </Title>

          <Paragraph marginBottom="s2">
            {content().information.aboutContent}
          </Paragraph>

          <List$>
            {!content().information.fullName ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Full Name</b>
                </Paragraph>{' '}
                {content().information.fullName}
              </li>
            )}
            {!content().information.age ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Age</b>
                </Paragraph>{' '}
                {content().information.age} Years
              </li>
            )}
            {!content().information.phone ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Phone</b>
                </Paragraph>{' '}
                <span>
                  <a href={`tel:+7${content().information.phone}`}>
                    +7 {phoneNumberNormalizer(content().information.phone)}
                  </a>
                </span>
              </li>
            )}
            {!content().information.nationality ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Nationality</b>
                </Paragraph>{' '}
                {content().information.nationality}
              </li>
            )}
            {!content().information.language ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Languages</b>
                </Paragraph>{' '}
                {content().information.language}
              </li>
            )}
            {!content().information.email ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Email</b>
                </Paragraph>{' '}
                <span>
                  <a href={`mailto:${content().information.email}`}>
                    {content().information.email}
                  </a>
                </span>
              </li>
            )}
            {!content().information.address ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Address</b>
                </Paragraph>{' '}
                {content().information.address}
              </li>
            )}
            {!content().information.freelanceStatus ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Freelance</b>
                </Paragraph>{' '}
                {content().information.freelanceStatus}
              </li>
            )}
          </List$>
          <Button onClick={() => scrollTo('contact')}>Contact with me</Button>
        </Block>
      </Block>

      {open && (
        <Lightbox
          mainSrc={content().information.aboutImageLg}
          onCloseRequest={() => setOpen(false)}
          imagePadding={36}
          imageTitle={null}
          enableZoom={false}
        />
      )}
    </>
  )
}

//#region Styled components
const IconContainer$ = styled(Block)`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100px;
  width: 100px;
  margin-left: -50px;
  margin-top: -50px;
  color: ${(props) => props.theme.Colors.white};
  display: inline-block;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  transition: all 0.175s ease-out 0s;
  pointer-events: none;
`

const ImageView$ = styled(Block)`
  &:hover ${IconContainer$} {
    visibility: visible;
    opacity: 0.5;
    transform: scale(1);
  }

  ${(props) => props.theme.ViewPorts.touch} {
    &:hover ${IconContainer$} {
      visibility: hidden;
    }
  }
`

const ImageContainer$ = styled(Block)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 65%;
    width: 15px;
    background: ${(props) => hexToRgba(props.theme.Colors.primary, 0.6)};
  }

  &::after {
    content: '';
    position: absolute;
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    height: 65%;
    width: 15px;
    background: ${(props) => hexToRgba(props.theme.Colors.primary, 0.6)};
  }
`

const List$ = styled.ul`
  margin-bottom: ${(props) => props.theme.RemPoint}px;

  li {
    list-style: none;
    display: flex;

    &:not(:last-child) {
      margin-bottom: 3px;
    }

    b {
      min-width: 120px;
      display: inline-block;
      position: relative;
      margin-right: 7px;

      &:after {
        content: ':';
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
      }
    }
  }
`
//#endregion

export { Main }
