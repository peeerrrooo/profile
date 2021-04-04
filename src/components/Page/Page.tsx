import React, { ReactNode } from 'react'
import { scrollToTop } from 'utils/scroll'
import { inject, observer } from 'mobx-react'
import { IGlobalModel } from 'models/globalModel/types'
import { mountHook } from 'hooks/mount'
import { HeadMeta, IHeadMetaProps } from 'components/HeadMeta'

export interface IPageProps extends IHeadMetaProps {
  GlobalModel?: IGlobalModel
  children: ReactNode
  toTop?: boolean
}

const Page = inject('GlobalModel')(
  observer(({ GlobalModel, children, toTop = false, ...props }: IPageProps) => {
    mountHook(() => {
      if (toTop) {
        scrollToTop()
      }
    })

    return (
      <>
        <HeadMeta {...props} />

        {children}
      </>
    )
  })
)

export { Page }
