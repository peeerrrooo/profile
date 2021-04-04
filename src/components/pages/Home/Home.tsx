import React from 'react'
import { Layout } from 'components/Layout'
import { Page } from 'components/Page'
import { Main } from './Main'
import { About } from './About'
import { Resume } from './Resume'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
import { content } from 'utils/content'

const Home = () => {
  return (
    <Page title="Porfolio" metaDescription={content().information.aboutContent}>
      <Layout>
        <Main />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </Layout>
    </Page>
  )
}

export { Home }
