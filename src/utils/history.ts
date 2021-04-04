import _ from 'lodash'
import Router from 'next/router'
import queryString, { StringifiableRecord } from 'query-string'

export const getHistoryQuery = () => {
  return queryString.parse(location.search)
}

export const createHistoryQuery = (params) => {
  return `?${queryString.stringify(params)}`
}

export interface IPushParams {
  href: string
  query?: StringifiableRecord
}

export const push = async ({ href, query = {} }: IPushParams) => {
  if (!_.isEmpty(query)) {
    await Router.push(`${href}${createHistoryQuery(query)}`)
  }
  await Router.push(`${href}`)
}
