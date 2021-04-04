import React from 'react'

export interface ICommonMetaProps {
  prefix: string
  siteName: string
  siteUrl: string
}

const CommonMeta = ({ prefix, siteName, siteUrl }: ICommonMetaProps) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta httpEquiv="cleartype" content="on" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en" />

      <meta name="smartbanner:title" content={siteName} />
      <meta name="smartbanner:title" content={siteName} />
      <meta name="smartbanner:author" content={siteName} />

      <meta
        property="article:published_time"
        content="2020-12-02T15:05:53+03:00"
      />

      <link rel="canonical" href={siteUrl} />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${prefix}/apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-180x180.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/apple-icon-192x192.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/favicon-32x32.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/favicon-96x96.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${prefix}/manifest.json`} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${prefix}/ms-icon-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}

export { CommonMeta }
