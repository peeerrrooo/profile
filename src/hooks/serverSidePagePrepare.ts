import { ParsedUrlQuery } from 'querystring'
import { Context } from 'providers/types/request'
import { Models } from 'models/models'

export interface IServerSidePagePrepareParams {
  callback?: (params: IServerSidePagePrepareCallbackParams) => void
}

export interface IServerSidePagePrepareCallbackParams {
  Models: Models
  params: ParsedUrlQuery
}

export const serverSidePagePrepare = (
  args: IServerSidePagePrepareParams = {}
) => async (ctx: Context) => {
  const { callback } = args
  const params = ctx.query
  const models = ctx.req.Models

  try {
    if (callback) {
      await callback({
        Models: models,
        params
      })
    }

    return { props: models.serialize() }
  } catch (e) {
    return { props: models.serialize() }
  }
}
