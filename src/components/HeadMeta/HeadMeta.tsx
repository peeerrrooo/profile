import React from 'react'
import { documentTitle } from 'utils/document'
import Head from 'next/head'
import { inject, observer } from 'mobx-react'
import { IGlobalModel } from 'models/globalModel/types'
import { CommonMeta } from './CommonMeta'

export interface IHeadMetaProps {
  title: string

  metaTitle?: string
  metaImage?: string
  metaType?: string
  metaDescription?: string

  metaUrl?: string
}

export interface IRootProps extends IHeadMetaProps {
  GlobalModel?: IGlobalModel
}

const HeadMeta = inject('GlobalModel')(
  observer(
    ({
      GlobalModel,

      title,
      metaImage,
      metaType,
      metaTitle,
      metaDescription,
      metaUrl
    }: IRootProps) => {
      const prefix = GlobalModel?.config?.prefix ?? ''
      const resolveTitle = documentTitle(title, GlobalModel!.config!.siteName)
      const resolveMetaTitle = metaDescription
        ? documentTitle(metaTitle || title, GlobalModel!.config!.siteName)
        : GlobalModel?.config?.siteName
      const resolveMetaDescription =
        metaDescription ||
        documentTitle(metaTitle || title, GlobalModel!.config!.siteName)
      const resolveUrl = metaUrl || GlobalModel?.config?.siteUrl

      return (
        <Head>
          <title>{resolveTitle}</title>

          <CommonMeta
            prefix={prefix}
            siteName={GlobalModel?.config?.siteName ?? ''}
            siteUrl={resolveUrl ?? ''}
            avatarUrl={
              metaImage ?? `${prefix}/${GlobalModel!.config.avatarLink}`
            }
            siteType={metaType ?? GlobalModel?.config?.siteType ?? 'article'}
            title={resolveMetaTitle ?? ''}
            description={resolveMetaDescription ?? ''}
          />
        </Head>
      )
    }
  )
)

export { HeadMeta }
