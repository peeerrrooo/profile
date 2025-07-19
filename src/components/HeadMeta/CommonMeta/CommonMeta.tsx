import React from 'react'

export interface ICommonMetaProps {
  prefix: string
  siteName: string
  siteUrl: string
  avatarUrl: string
  siteType: string
  title: string
  description: string
}

const CommonMeta = ({
  prefix,
  siteName,
  siteUrl,
  avatarUrl,
  siteType,
  title,
  description
}: ICommonMetaProps) => {
  return (
    <>
      <meta charSet="utf-8" />

      {/*Favicon Meta*/}
      <link
        rel="icon"
        type="image/png"
        href={`${prefix}/favicon-96x96.png`}
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href={`${prefix}/favicon.svg`} />
      <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${prefix}/apple-touch-icon.png`}
      />
      <meta name="apple-mobile-web-app-title" content="dbrakk.tech" />
      <link rel="manifest" href={`${prefix}/site.webmanifest`} />

      {/*Open Graph Meta*/}
      <link rel="canonical" href={siteUrl} />
      <meta
        property="article:published_time"
        content="2025-07-19T06:57:04.939Z"
      />
      <meta property="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={siteType} />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={avatarUrl} />
      <meta property="og:image:width" content="806" />
      <meta property="og:image:height" content="535" />
      <meta property="og:image:url" content={avatarUrl} />
      <meta property="og:image:secure_url" content={avatarUrl} />
      <meta property="og:image:width" content="806" />
      <meta property="og:image:height" content="535" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en" />
      <meta property="og:url" content={siteUrl} />
      <meta name="author" content={siteName} />
      <meta name="smartbanner:title" content={siteName} />
      <meta name="smartbanner:title" content={siteName} />
      <meta name="smartbanner:author" content={siteName} />

      {/*Robots*/}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta httpEquiv="cleartype" content="on" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
    </>
  )
}

export { CommonMeta }
