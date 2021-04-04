import React from 'react'
import styled from 'styled-components'
import { hexToRgba } from 'styles/helpers'

const BackgroundLines = () => {
  return (
    <Root$>
      <span />
      <span />
      <span />
      <span />
      <span />
    </Root$>
  )
}

//#region Styled components
const Root$ = styled.div`
  position: absolute;
  left: 300px;
  top: 0;
  height: 100%;
  min-height: 100vh;
  width: calc(100% - 300px);
  z-index: -1;

  span {
    width: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    min-height: 100vh;
    background: ${(props) => hexToRgba(props.theme.Colors.border, 0.3)};

    &:nth-child(1) {
      left: 20%;
    }

    &:nth-child(2) {
      left: 40%;
    }

    &:nth-child(3) {
      left: 60%;
    }

    &:nth-child(4) {
      left: 80%;
    }
  }

  ${(props) => props.theme.ViewPorts.desktop} {
    left: 260px;
    width: calc(100% - 260px);
  }

  ${(props) => props.theme.ViewPorts.touch} {
    left: 0;
    width: 100%;
  }
`
//#endregion

export { BackgroundLines }
