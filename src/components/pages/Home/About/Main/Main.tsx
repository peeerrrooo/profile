import React from 'react'
import { Block } from 'ui/Block'
import styled from 'styled-components'
import { hexToRgba } from 'styles/helpers'
import { Image } from 'ui/Image'
import { Button } from 'ui/Button'
import { info } from 'utils/info'
import { Title, Text, Paragraph } from 'ui/Typography'
import { phoneNumberNormalizer } from 'utils/formatters/phone'

export interface IMainProps {
  prefix: string
}

const Main = ({ prefix }: IMainProps) => {
  return (
    <>
      <Block horizontal="left" media={{ touch: { horizontal: 'none' } }}>
        <Block
          width="50%"
          marginRight="s4"
          mediaCommon={{ touch: { width: '100%' } }}
          position="relative"
          selection={false}
        >
          <ImageContainer$>
            <Image src={info().information.aboutImage} maxWidth="100%" />
          </ImageContainer$>
        </Block>

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
            I am <Text color="primary">{info().information.fullName}</Text>
          </Title>

          <Paragraph marginBottom="s2">
            {info().information.aboutContent}
          </Paragraph>

          <List$>
            {!info().information.fullName ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Full Name</b>
                </Paragraph>{' '}
                {info().information.fullName}
              </li>
            )}
            {!info().information.age ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Age</b>
                </Paragraph>{' '}
                {info().information.age} Years
              </li>
            )}
            {!info().information.phone ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Phone</b>
                </Paragraph>{' '}
                <span>
                  <a href={`tel:+7${info().information.phone}`}>
                    +7 {phoneNumberNormalizer(info().information.phone)}
                  </a>
                </span>
              </li>
            )}
            {!info().information.nationality ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Nationality</b>
                </Paragraph>{' '}
                {info().information.nationality}
              </li>
            )}
            {!info().information.language ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Languages</b>
                </Paragraph>{' '}
                {info().information.language}
              </li>
            )}
            {!info().information.email ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Email</b>
                </Paragraph>{' '}
                <span>
                  <a href={`mailto:${info().information.email}`}>
                    {info().information.email}
                  </a>
                </span>
              </li>
            )}
            {!info().information.address ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Address</b>
                </Paragraph>{' '}
                {info().information.address}
              </li>
            )}
            {!info().information.freelanceStatus ? null : (
              <li>
                <Paragraph selection={false}>
                  <b>Freelance</b>
                </Paragraph>{' '}
                {info().information.freelanceStatus}
              </li>
            )}
          </List$>
          <Button href={`${prefix}/d.brakk-cv.pdf`}>Download CV</Button>
        </Block>
      </Block>
    </>
  )
}

//#region Styled components
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
