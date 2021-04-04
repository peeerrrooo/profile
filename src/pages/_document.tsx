import Document, { Head, Main, NextScript, Html } from 'next/document'
import React, { ReactNode } from 'react'
import { ServerStyleSheet } from 'styled-components'

export interface Props {
  styleTags: ReactNode
}

class DocumentContainer extends Document<Props> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          {this.props.styleTags}
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentContainer
