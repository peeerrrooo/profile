import styled from 'styled-components'
import { Block } from 'ui/Block'
import { lighten } from 'styles/helpers'

const Toggle = styled(Block)`
  outline: none;
  position: absolute;
  left: 100%;
  top: 20px;
  padding: 0;
  height: ${(props) => props.theme.Controls.inputButtonHeight};
  width: 50px;
  text-align: center;
  font-size: 1.6rem;
  background: ${(props) => lighten(props.theme.Colors.bgBody, 0)};
  justify-content: center;
  align-items: center;
  display: none;
  color: ${(props) => props.theme.Colors.body};
  border: 1px solid ${(props) => props.theme.Colors.border};
  transition: ${(props) => props.theme.Controls.transition};

  &:focus,
  &:hover {
    border-color: ${(props) => props.theme.Colors.primary};
  }

  ${(props) => props.theme.ViewPorts.desktop} {
    display: none;
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    display: flex;
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    display: flex;
  }
`

export { Toggle }
