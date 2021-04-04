import React from 'react'
import { IBlockProps } from 'ui/Block'
import { Tag as UiTag, ITagProps as IUiTagProps } from 'ui/Tag'
import styled from 'styled-components'

export interface ITagProps extends IUiTagProps, IBlockProps {}

const Tag = (props: ITagProps) => {
  return (
    <Root$
      borderWidth={1}
      borderRadius={4}
      borderColor="primary"
      width="auto"
      padding="10px 20px"
      selection={false}
      {...props}
    />
  )
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
