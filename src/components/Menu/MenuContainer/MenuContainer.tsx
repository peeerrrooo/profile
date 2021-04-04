import styled from 'styled-components'

const MenuContainer = styled.ul`
  width: 100%;
  padding: 15px 0;

  & li {
    list-style: none;
    text-align: center;
    display: block;

    &:not(:last-child) {
      margin-bottom: 1px;
    }
  }
`

export { MenuContainer }
