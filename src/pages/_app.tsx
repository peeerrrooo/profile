import React from 'react'
import { Provider } from 'mobx-react'
import NextApp, { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { Context } from 'providers/types/request'
import { redirect } from 'utils/isomorphic'
import { Models } from 'models/models'
import { ThemeProvider } from 'components/ThemeProvider'
import { isServer } from 'utils/isomorphic'
import { modelsInit } from 'models/models/init'
import 'react-image-lightbox/style.css'

interface AppProps extends NextAppProps {
  modelsSsr: Models
}

class App extends NextApp<AppProps> {
  store: Models | null = !isServer() ? modelsInit() : null

  static async getInitialProps(appContext) {
    const appProps = await NextApp.getInitialProps(appContext)

    if (!isServer()) return appProps

    const modelsSsr = modelsInit()
    if (appContext?.ctx?.req) {
      try {
        appContext.ctx.req.Models = modelsSsr
      } catch {}
    }

    if (isServer()) {
      if (
        await App.statusCodeRedirect({
          statusCode: appContext.ctx.res.statusCode,
          ctx: appContext.ctx
        })
      )
        return appProps
    }
    return appProps
  }

  static async statusCodeRedirect({
    statusCode,
    ctx
  }: {
    statusCode: number
    ctx: Context
  }) {
    if (statusCode >= 400) {
      redirect('/', ctx)
      return true
    }
    return false
  }

  componentDidUpdate() {
    this.store?.hydrate(this.props.pageProps)
  }

  async componentDidMount() {
    this.store?.GlobalModel.postInit()
    this.store?.MenuModel.postInit()
  }

  render() {
    const { Component, pageProps } = this.props
    const store = !isServer() ? this.store : modelsInit()

    if (isServer()) store?.hydrate(pageProps)
    else if (!store?.hydrated) store?.hydrate(pageProps)

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;1,400&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1"
          />
        </Head>
        <Provider {...store}>
          <ThemeProvider>
            <Component />
          </ThemeProvider>
        </Provider>
      </>
    )
  }
}

export default App
