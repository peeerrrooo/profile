import { Context } from 'providers/types/request'
import getConfig from 'next/config'
import { parseConfig } from 'utils/config'

export const isServer = () => {
  return typeof window === 'undefined'
}

export const redirect = (uri, ctx: Context) => {
  const { publicRuntimeConfig } = getConfig()
  const config = parseConfig(publicRuntimeConfig)

  ctx.res.writeHead(301, {
    location: `${config.prefix}${uri}`,
    'Cache-Control': 'no-cache'
  })
  ctx.res.end()
}
