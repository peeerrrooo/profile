import styled from 'styled-components'
import { Block } from 'ui/Block'

const Avatar = styled(Block)`
  padding: 20px 0;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.Colors.border};

  & a {
    height: 200px;
    width: 200px;
    border-radius: 1000px;
    border: 7px solid ${(props) => props.theme.Colors.border};
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }

  ${(props) => props.theme.ViewPorts.desktop} {
    & a {
      height: 150px;
      width: 150px;
    }
  }

  ${(props) => props.theme.ViewPorts.tablet} {
    & a {
      height: 150px;
      width: 150px;
    }
  }

  ${(props) => props.theme.ViewPorts.mobile} {
    & a {
      padding: 7px 0;
    }
  }
`

export { Avatar }
