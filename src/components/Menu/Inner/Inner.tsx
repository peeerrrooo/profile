import styled from 'styled-components'
import { Block } from 'ui/Block'

const Inner = styled(Block)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
`

export { Inner }
