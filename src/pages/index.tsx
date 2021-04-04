import React from 'react'
import { Home } from 'components/pages/Home'
import { serverSidePagePrepare } from 'hooks/serverSidePagePrepare'

export const getServerSideProps = serverSidePagePrepare({})

const HomePage = () => {
  return <Home />
}

export default HomePage
