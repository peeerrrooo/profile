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
            siteName={GlobalModel!.config!.siteName}
            siteUrl={GlobalModel!.config.siteUrl}
          />

          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="dbrakk.tech" />
          <link rel="manifest" href="/site.webmanifest" />

          <meta property="title" content={resolveMetaTitle} />
          <meta property="og:title" content={resolveMetaTitle} />
          <meta
            property="og:type"
            content={metaType ?? GlobalModel?.config?.siteType}
          />
          <meta property="description" content={resolveMetaDescription} />
          <meta property="og:description" content={resolveMetaDescription} />
          <meta
            property="og:image"
            content={metaImage ?? `${prefix}/${GlobalModel!.config.avatarLink}`}
          />
          <meta
            property="og:image:secure_url"
            content={metaImage ?? `${prefix}/${GlobalModel!.config.avatarLink}`}
          />
          <meta property="og:image:width" content="806" />
          <meta property="og:image:height" content="535" />

          <meta property="og:url" content={resolveUrl} />
          <meta name="author" content={GlobalModel?.config?.siteName} />
        </Head>
      )
    }
  )
)

export { HeadMeta }
