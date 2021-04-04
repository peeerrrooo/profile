import React from 'react'
import { Tag as UiTag, ITagProps as IUiTagProps } from 'ui/Tag'
import styled from 'styled-components'

export interface ITagProps extends IUiTagProps {}

const Tag = (props: ITagProps) => {
  return <Root$ {...props} />
}

//#region Styled components
const Root$ = styled(UiTag)`
  margin-right: 16px;
  margin-bottom: 16px;

  &:last-child {
    margin-right: 0;
  }
`
//#endregion

export { Tag }
